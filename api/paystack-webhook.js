// api/paystack-webhook.js  (in an "api" folder at the ROOT of your project, next to src/)
// Paystack calls this URL after a payment. The SERVER, not the browser, grants Premium.
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

// Referral settings
const REFERRAL_PAYOUT = 200          // ₦ credited to the referrer
const REFERRER_MUST_BE_PAID = true   // only paid users earn referral money

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

          // Work out whether the referrer gets credited (reads must come before writes)
          let referrerRef = null
          if (user.referredBy && user.referredBy !== uid && !user.referralCredited) {
            const rRef = db.doc(`users/${user.referredBy}`)
            const rSnap = await tx.get(rRef)
            if (rSnap.exists && (!REFERRER_MUST_BE_PAID || rSnap.data().isPaid)) {
              referrerRef = rRef
            }
          }

          tx.update(userRef, {
            isPaid: true,
            paidAt: new Date().toISOString(),
            paymentRef: data.reference,       // the admin page reads this one
            paystackReference: data.reference,
            ...(referrerRef ? { referralCredited: true } : {}),
          })

          if (referrerRef) {
            tx.update(referrerRef, {
              referralEarnings: FieldValue.increment(REFERRAL_PAYOUT),
            })
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