// api/paystack-webhook.js  (in an "api" folder at the ROOT of your project, next to src/)
// Paystack calls this URL after a payment. The SERVER, not the browser, grants Premium
// and works out referral earnings.
import crypto from "crypto"
import { initializeApp, getApps, cert } from "firebase-admin/app"
import { getFirestore, FieldValue } from "firebase-admin/firestore"

// We need the raw request body to verify Paystack's signature
export const config = { api: { bodyParser: false } }

if (getApps().length === 0) {
  const privateKey = (process.env.FIREBASE_PRIVATE_KEY || "")
    .replace(/^"|"$/g, "")
    .replace(/\\n/g, "\n")

  initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey,
    }),
  })
}

// Must match UPGRADE_PRICE_NUMBER in appConfig.js, in kobo (₦1,500 = 150000)
const MIN_AMOUNT_KOBO = 150000

// Referral pay rates (naira). Keep the same as REFERRAL_PAYOUT_USER / _PROMOTER in appConfig.js
const REFERRAL_PAYOUT = 200       // normal users
const PROMOTER_PAYOUT = 500       // promoters (users with role "promoter")
const REFERRER_MUST_BE_PAID = true // normal users only earn once they have paid themselves. Promoters always earn.

const readRawBody = (req) =>
  new Promise((resolve, reject) => {
    const chunks = []
    req.on("data", (c) => chunks.push(c))
    req.on("end", () => resolve(Buffer.concat(chunks)))
    req.on("error", reject)
  })

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end()

  // 1. Verify the request really came from Paystack
  const raw = await readRawBody(req)
  const secret = (process.env.PAYSTACK_SECRET_KEY || "").trim().replace(/^"|"$/g, "")
  const hash = crypto.createHmac("sha512", secret).update(raw).digest("hex")

  if (hash !== req.headers["x-paystack-signature"]) {
    // Only the first 8 characters are logged (e.g. "sk_test_" or "sk_live_"), never the full key
    console.error("Signature mismatch. Secret key starts with:", secret.slice(0, 8), "length:", secret.length)
    return res.status(401).end()
  }

  // 2. Handle successful charges
  const { event, data } = JSON.parse(raw.toString("utf8"))

  if (event === "charge.success" && data.status === "success") {
    const uid = data.metadata?.uid

    if (uid && data.currency === "NGN" && data.amount >= MIN_AMOUNT_KOBO) {
      const db = getFirestore()
      const userRef = db.doc(`users/${uid}`)

      try {
        await db.runTransaction(async (tx) => {
          const snap = await tx.get(userRef)
          if (!snap.exists) return
          const user = snap.data()

          // Paystack can send the same webhook twice. Skip if already processed.
          if (user.isPaid && user.paymentRef === data.reference) return

          // Work out who (if anyone) gets credited. All reads must come before writes.
          let referrerRef = null
          let rate = 0
          let rateType = "user"
          const hasReferrer = !!user.referredBy && user.referredBy !== uid

          if (hasReferrer) {
            const rRef = db.doc(`users/${user.referredBy}`)
            const rSnap = await tx.get(rRef)
            if (rSnap.exists && !user.referralCredited) {
              const referrer = rSnap.data()
              const isPromoter = referrer.role === "promoter"
              if (isPromoter || !REFERRER_MUST_BE_PAID || referrer.isPaid) {
                referrerRef = rRef
                rate = isPromoter ? PROMOTER_PAYOUT : REFERRAL_PAYOUT
                rateType = isPromoter ? "promoter" : "user"
              }
            }
          }

          const now = new Date().toISOString()

          tx.update(userRef, {
            isPaid: true,
            paidAt: now,
            paymentRef: data.reference,       // the admin page reads this one
            paystackReference: data.reference,
            ...(referrerRef ? { referralCredited: true } : {}),
          })

          if (referrerRef) {
            tx.update(referrerRef, { referralEarnings: FieldValue.increment(rate) })
          }

          // The minimal record a promoter is allowed to see (name + paid status only)
          if (hasReferrer) {
            tx.set(db.doc(`referrals/${uid}`), {
              referrerId: user.referredBy,
              name: user.name || "Student",
              createdAt: user.createdAt || FieldValue.serverTimestamp(),
              isPaid: true,
              paidAt: now,
              ...(referrerRef ? { amountEarned: rate, rateType } : {}),
            }, { merge: true })
          }
        })
      } catch (e) {
        console.error("Failed to process payment for", uid, e)
        // 500 makes Paystack retry the webhook later
        return res.status(500).end()
      }
    }
  }

  return res.status(200).end()
}