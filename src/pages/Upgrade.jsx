import { useState, useEffect } from "react"
import { doc, updateDoc, setDoc, increment } from "firebase/firestore"
import { db } from "../firebase"
import { formatNaira } from "../utils/subscription"

export default function Upgrade({ user, userData, onSuccess, onBack }) {
  const [loading, setLoading] = useState(false)
  const [paystackReady, setPaystackReady] = useState(false)

  // Load Paystack script dynamically
  useEffect(() => {
    if (window.PaystackPop) { setPaystackReady(true); return }
    const script = document.createElement("script")
    script.src = "https://js.paystack.co/v1/inline.js"
    script.onload = () => setPaystackReady(true)
    script.onerror = () => console.error("Paystack script failed to load")
    document.head.appendChild(script)
    return () => {
      // don't remove — keep for reuse
    }
  }, [])



  const handlePayment = () => {
    if (!paystackReady) {
      alert("Payment is loading, please try again.")
      return
    }
    const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY
    if (!publicKey) {
      alert("Payment configuration error. Please contact support.")
      return
    }

    setLoading(true)

    const handler = window.PaystackPop.setup({
      key: publicKey,
      email: user.email,
      amount: 250000,
      currency: "NGN",
      ref: `EE_${user.uid}_${Date.now()}`,
      metadata: {
        uid: user.uid,
        referrerId: userData?.referredBy || "none",
      },
      callback: (response) => {
        // Retry Firestore update up to 3 times to handle network issues
        const updateWithRetry = (attempts) => {
          updateDoc(doc(db, "users", user.uid), {
            isPaid: true,
            paidAt: new Date().toISOString(),
            paymentRef: response.reference,
            referredBy: userData?.referredBy || null,
          }).then(() => {
            // Record referral if applicable
            if (userData?.referredBy) {
              const refId = userData.referredBy
              // Use Firestore increment to safely add 500 to referrer's earnings
              updateDoc(doc(db, "users", refId), {
                referralEarnings: increment(500),
              }).catch(() => {})
              setDoc(doc(db, "referrals", `${refId}_${user.uid}`), {
                referrerId: refId,
                referredId: user.uid,
                referredName: userData?.name || user.email,
                referredEmail: user.email,
                paidAt: new Date().toISOString(),
                amount: 500,
                referralPaid: false,
                paymentRef: response.reference,
              }).catch(() => {})
            }
            setLoading(false)
            onSuccess()
          }).catch((e) => {
            if (attempts > 1) {
              // Retry after 2 seconds
              setTimeout(() => updateWithRetry(attempts - 1), 2000)
            } else {
              // All retries failed — store payment ref locally so admin can fix
              localStorage.setItem("ee_pending_payment", JSON.stringify({
                uid: user.uid,
                ref: response.reference,
                amount: 2500,
                time: new Date().toISOString(),
              }))
              setLoading(false)
              alert("✅ Payment received! Your account is being unlocked. If not unlocked in 5 minutes, please contact support with reference: " + response.reference)
            }
          })
        }
        updateWithRetry(3)
      },
      onClose: () => {
        setLoading(false)
      },
    })

    handler.openIframe()
  }


  const features = [
    { icon: "📚", text: "All 20 years of past questions (2005–2024)" },
    { icon: "🎯", text: "CBT mode for all years" },
    { icon: "📖", text: "Unlimited Study Mode questions" },
    { icon: "🔥", text: "Hot Topics — most repeated questions" },
    { icon: "📊", text: "Weak Areas — know what to focus on" },
    { icon: "📈", text: "Full Progress tracking" },
    { icon: "🕐", text: "CBT History — review all past attempts" },
  ]

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}>
      {/* Back button */}
      <div style={{ width: "100%", maxWidth: 420, marginBottom: 16 }}>
        <button onClick={onBack} style={{
          background: "rgba(255,255,255,0.2)", border: "none",
          borderRadius: 20, padding: "8px 16px",
          color: "#fff", cursor: "pointer", fontSize: 14,
        }}>← Back</button>
      </div>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 24 }}>
        <div style={{ fontSize: 48, marginBottom: 8 }}>🚀</div>
        <h1 style={{ color: "#fff", fontSize: 24, fontWeight: 700, margin: 0 }}>
          Unlock Full Access
        </h1>
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 14, marginTop: 8 }}>
          One-time payment. No subscription.
        </p>
      </div>

      {/* Price card */}
      <div style={{
        background: "#fff", borderRadius: 20, padding: 24,
        width: "100%", maxWidth: 420, marginBottom: 16,
        boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
      }}>
        {/* Price */}
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <div style={{ fontSize: 14, color: "#888", textDecoration: "line-through" }}>₦5,000</div>
          <div style={{ fontSize: 42, fontWeight: 800, color: "#667eea" }}>₦2,500</div>
          <div style={{
            background: "#fff3cd", color: "#856404",
            padding: "4px 12px", borderRadius: 20,
            fontSize: 12, fontWeight: 600,
            display: "inline-block", marginTop: 4,
          }}>🎉 Launch Price</div>
        </div>

        {/* Features */}
        <div style={{ marginBottom: 20 }}>
          {features.map((f, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: 10,
              padding: "8px 0",
              borderBottom: i < features.length - 1 ? "1px solid #f0f0f0" : "none",
            }}>
              <span style={{ fontSize: 18 }}>{f.icon}</span>
              <span style={{ fontSize: 13, color: "#333" }}>{f.text}</span>
              <span style={{ marginLeft: "auto", color: "#22c55e", fontWeight: 700 }}>✓</span>
            </div>
          ))}
        </div>



        {/* Pay button */}
        <button
          onClick={handlePayment}
          disabled={loading || !paystackReady}
          style={{
            width: "100%", padding: "16px",
            background: loading || !paystackReady ? "#ccc" : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "#fff", border: "none", borderRadius: 12,
            fontSize: 16, fontWeight: 700,
            cursor: loading || !paystackReady ? "not-allowed" : "pointer",
          }}
        >
          {!paystackReady ? "⏳ Loading payment..." : loading ? "⏳ Processing..." : "Pay ₦2,500 — Get Full Access"}
        </button>

        <p style={{ fontSize: 11, color: "#aaa", textAlign: "center", marginTop: 12 }}>
          🔒 Secure payment via Paystack · Card, Bank Transfer, USSD
        </p>
      </div>

      {/* Referral promo */}
      <div style={{
        background: "rgba(255,255,255,0.15)", borderRadius: 16,
        padding: 16, width: "100%", maxWidth: 420, textAlign: "center",
      }}>
        <p style={{ color: "#fff", fontSize: 13, margin: 0 }}>
          💰 <strong>Earn ₦500</strong> for every friend you refer!
          Share your referral code after payment.
        </p>
      </div>
    </div>
  )
}