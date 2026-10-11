// api/paystack-webhook.js  (put this in an "api" folder at the ROOT of your project, next to src/)
// Paystack calls this URL after a payment. The SERVER, not the browser, grants Premium.
import crypto from "crypto"
import admin from "firebase-admin"

// We need the raw request body to verify Paystack's signature
export const config = { api: { bodyParser: false } }

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    }),
  })
}

// Must match UPGRADE_PRICE_NUMBER in appConfig.js, in kobo (₦1,500 = 150000)
const MIN_AMOUNT_KOBO = 150000

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
  const hash = crypto
    .createHmac("sha512", process.env.PAYSTACK_SECRET_KEY)
    .update(raw)
    .digest("hex")

  if (hash !== req.headers["x-paystack-signature"]) {
    return res.status(401).end()
  }

  // 2. Handle successful charges
  const { event, data } = JSON.parse(raw.toString("utf8"))

  if (event === "charge.success" && data.status === "success") {
    const uid = data.metadata?.uid

    if (uid && data.currency === "NGN" && data.amount >= MIN_AMOUNT_KOBO) {
      try {
        await admin.firestore().doc(`users/${uid}`).update({
          isPaid: true,
          paidAt: new Date().toISOString(),
          paystackReference: data.reference,
        })
      } catch (e) {
        console.error("Failed to unlock user", uid, e)
        // 500 makes Paystack retry the webhook later
        return res.status(500).end()
      }
    }
  }

  return res.status(200).end()
}
