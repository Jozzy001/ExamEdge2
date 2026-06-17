import { useState, useEffect } from "react"
import { doc, updateDoc, setDoc, increment } from "firebase/firestore"
import { db } from "../firebase"

export default function Upgrade({ user, userData, onSuccess, onBack }) {
  const [loading, setLoading] = useState(false)
  const [paystackReady, setPaystackReady] = useState(false)
  const [payMethod, setPayMethod] = useState(null) // "instant" | "transfer"
  const [copied, setCopied] = useState("")

  useEffect(() => {
    if (window.PaystackPop) { setPaystackReady(true); return }
    const script = document.createElement("script")
    script.src = "https://js.paystack.co/v1/inline.js"
    script.onload = () => setPaystackReady(true)
    script.onerror = () => console.error("Paystack failed to load")
    document.head.appendChild(script)
  }, [])

  const handlePaystack = () => {
    if (!paystackReady) { alert("Payment is loading, please try again."); return }
    const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY
    if (!publicKey) { alert("Payment configuration error. Please contact support."); return }
    setLoading(true)
    const handler = window.PaystackPop.setup({
      key: publicKey,
      email: user.email,
      amount: 265000, // ₦2,650 in kobo
      currency: "NGN",
      ref: `EE_${user.uid}_${Date.now()}`,
      metadata: { uid: user.uid, referrerId: userData?.referredBy || "none" },
      callback: (response) => {
        setLoading(false)

        // Verify the amount paid matches expected ₦2,650 (265000 kobo)
        // Paystack returns the amount in the response object
        const paidAmount = response.amount || response.transaction?.amount
        if (paidAmount && paidAmount < 265000) {
          alert("⚠️ Payment amount mismatch. Please contact support with your reference: " + response.reference)
          return
        }

        const updateWithRetry = (attempts) => {
          updateDoc(doc(db, "users", user.uid), {
            isPaid: true,
            paidAt: new Date().toISOString(),
            paymentRef: response.reference,
            paymentMethod: "paystack",
            amountPaid: paidAmount || 265000,
          }).then(() => {
            if (userData?.referredBy) {
              const refId = userData.referredBy
              updateDoc(doc(db, "users", refId), { referralEarnings: increment(500) }).catch(() => {})
              setDoc(doc(db, "referrals", `${refId}_${user.uid}`), {
                referrerId: refId, referredId: user.uid,
                referredName: userData?.name || user.email,
                referredEmail: user.email,
                paidAt: new Date().toISOString(),
                amount: 500, referralPaid: false,
                paymentRef: response.reference,
              }).catch(() => {})
            }
            onSuccess()
          }).catch(() => {
            if (attempts > 1) {
              setTimeout(() => updateWithRetry(attempts - 1), 2000)
            } else {
              localStorage.setItem("ee_pending_payment", JSON.stringify({
                uid: user.uid, ref: response.reference,
                amount: 2650, time: new Date().toISOString(),
              }))
              alert("✅ Payment received! Your account will be unlocked within a few minutes. Reference: " + response.reference)
            }
          })
        }
        updateWithRetry(3)
      },
      onClose: () => setLoading(false),
    })
    handler.openIframe()
  }

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text)
    setCopied(key)
    setTimeout(() => setCopied(""), 2000)
  }

  const features = [
    { icon: "📚", text: "All 20 years of past questions (2005–2024)" },
    { icon: "🎯", text: "Unlimited CBT practice" },
    { icon: "🔥", text: "Hot Topics — most repeated questions" },
    { icon: "📊", text: "Weak Areas & Full Progress tracking" },
    { icon: "🕐", text: "CBT History — review all past attempts" },
  ]

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      padding: "20px",
      display: "flex", flexDirection: "column", alignItems: "center",
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
        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 14, marginTop: 8 }}>
          Choose how you want to pay
        </p>
      </div>

      {/* Features card */}
      <div style={{
        background: "#fff", borderRadius: 20, padding: "20px 20px 16px",
        width: "100%", maxWidth: 420, marginBottom: 16,
        boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
      }}>
        <p style={{ fontSize: 12, fontWeight: 700, color: "#888", margin: "0 0 12px", letterSpacing: 0.5 }}>
          WHAT YOU UNLOCK:
        </p>
        {features.map((f, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: 10,
            padding: "7px 0",
            borderBottom: i < features.length - 1 ? "1px solid #f0f0f0" : "none",
          }}>
            <span style={{ fontSize: 17 }}>{f.icon}</span>
            <span style={{ fontSize: 13, color: "#333" }}>{f.text}</span>
            <span style={{ marginLeft: "auto", color: "#22c55e", fontWeight: 700 }}>✓</span>
          </div>
        ))}
      </div>

      {/* Payment options */}
      <div style={{ width: "100%", maxWidth: 420 }}>

        {/* ── OPTION 1: PAYSTACK INSTANT ── */}
        <div style={{
          background: "#fff", borderRadius: 20, padding: 20,
          marginBottom: 12, boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
          border: payMethod === "instant" ? "2px solid #667eea" : "2px solid transparent",
          cursor: "pointer",
        }} onClick={() => setPayMethod(payMethod === "instant" ? null : "instant")}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: payMethod === "instant" ? 14 : 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{
                width: 42, height: 42, borderRadius: "50%",
                background: "linear-gradient(135deg, #667eea, #764ba2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 20, flexShrink: 0
              }}>⚡</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 800, color: "#1a1a2e" }}>Pay with Paystack</div>
                <div style={{ fontSize: 12, color: "#22c55e", fontWeight: 700 }}>Instant unlock — access in seconds</div>
              </div>
            </div>
            <div style={{ textAlign: "right", flexShrink: 0 }}>
              <div style={{ fontSize: 18, fontWeight: 800, color: "#667eea" }}>₦2,650</div>
              <div style={{ fontSize: 10, color: "#888" }}>incl. fee</div>
            </div>
          </div>

          {payMethod === "instant" && (
            <>
              <div style={{
                background: "rgba(102,126,234,0.06)", borderRadius: 10,
                padding: "10px 12px", marginBottom: 12,
                fontSize: 12, color: "#555", lineHeight: 1.6
              }}>
                💳 Card · Bank Transfer · USSD · Pay with your phone — your account unlocks <strong>automatically</strong> the moment payment is confirmed.
              </div>

              <button
                onClick={(e) => { e.stopPropagation(); handlePaystack() }}
                disabled={loading || !paystackReady}
                style={{
                  width: "100%", padding: "15px",
                  background: loading || !paystackReady ? "#ccc" : "linear-gradient(135deg, #667eea, #764ba2)",
                  color: "#fff", border: "none", borderRadius: 12,
                  fontSize: 15, fontWeight: 700,
                  cursor: loading || !paystackReady ? "not-allowed" : "pointer",
                }}
              >
                {!paystackReady ? "⏳ Loading..." : loading ? "⏳ Processing..." : "⚡ Pay ₦2,650 — Unlock Instantly"}
              </button>

              <p style={{ fontSize: 11, color: "#aaa", textAlign: "center", marginTop: 10, marginBottom: 0 }}>
                🔒 Secured by Paystack
              </p>
            </>
          )}
        </div>

        {/* ── OPTION 2: BANK TRANSFER ── */}
        <div style={{
          background: "#fff", borderRadius: 20, padding: 20,
          marginBottom: 16, boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
          border: payMethod === "transfer" ? "2px solid #10b981" : "2px solid transparent",
          cursor: "pointer",
        }} onClick={() => setPayMethod(payMethod === "transfer" ? null : "transfer")}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: payMethod === "transfer" ? 14 : 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{
                width: 42, height: 42, borderRadius: "50%",
                background: "linear-gradient(135deg, #10b981, #059669)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 20, flexShrink: 0
              }}>🏦</div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 800, color: "#1a1a2e" }}>Bank Transfer (OPay)</div>
                <div style={{ fontSize: 12, color: "#10b981", fontWeight: 700 }}>Save ₦150 — unlocked within 1 hour</div>
              </div>
            </div>
            <div style={{ textAlign: "right", flexShrink: 0 }}>
              <div style={{ fontSize: 18, fontWeight: 800, color: "#10b981" }}>₦2,500</div>
              <div style={{ fontSize: 10, color: "#888" }}>no extra fee</div>
            </div>
          </div>

          {payMethod === "transfer" && (
            <>
              {/* Account details */}
              <div style={{
                background: "rgba(16,185,129,0.06)",
                border: "1px solid rgba(16,185,129,0.25)",
                borderRadius: 12, padding: "14px 16px", marginBottom: 12
              }}>
                <p style={{ fontSize: 11, fontWeight: 800, color: "#059669", margin: "0 0 10px", letterSpacing: 0.5 }}>
                  TRANSFER ₦2,500 TO:
                </p>

                {[
                  { label: "Bank", value: "OPay", copyable: false },
                  { label: "Account Number", value: "8168334155", copyable: true },
                  { label: "Account Name", value: "Joshua Osahenrumwen Odiase", copyable: false },
                ].map((item, i) => (
                  <div key={i} style={{
                    display: "flex", justifyContent: "space-between",
                    alignItems: "center", padding: "6px 0",
                    borderBottom: i < 2 ? "1px solid rgba(16,185,129,0.1)" : "none"
                  }}>
                    <div>
                      <div style={{ fontSize: 10, color: "#059669", fontWeight: 700, marginBottom: 1 }}>{item.label}</div>
                      <div style={{ fontSize: 14, fontWeight: 800, color: "#064e3b" }}>{item.value}</div>
                    </div>
                    {item.copyable && (
                      <button
                        onClick={(e) => { e.stopPropagation(); handleCopy(item.value, item.label) }}
                        style={{
                          padding: "5px 12px",
                          background: copied === item.label ? "#10b981" : "rgba(16,185,129,0.15)",
                          color: copied === item.label ? "#fff" : "#059669",
                          border: "none", borderRadius: 8,
                          fontSize: 11, fontWeight: 700, cursor: "pointer"
                        }}
                      >
                        {copied === item.label ? "✅ Copied!" : "📋 Copy"}
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {/* Instructions */}
              <div style={{
                background: "rgba(245,158,11,0.07)",
                border: "1px solid rgba(245,158,11,0.25)",
                borderRadius: 10, padding: "10px 12px", marginBottom: 12
              }}>
                <p style={{ fontSize: 12, color: "#92400e", margin: 0, lineHeight: 1.7, fontWeight: 600 }}>
                  📸 After transferring, send your receipt on WhatsApp to get unlocked within <strong>1 hour</strong>:
                </p>
              </div>

              <a
                href={`https://wa.me/2349121192596?text=${encodeURIComponent(`Hi! I just transferred ₦2,500 to your OPay account for ExamEdgeNG full access.\n\nMy username: ${userData?.name || "—"}\nMy email/phone: ${user?.email || "—"}\n\n[Please attach your receipt screenshot]`)}`}
                target="_blank"
                rel="noreferrer"
                onClick={e => e.stopPropagation()}
                style={{
                  display: "block", width: "100%", padding: "14px",
                  background: "#25d366", color: "#fff",
                  borderRadius: 12, textAlign: "center",
                  fontSize: 14, fontWeight: 800,
                  textDecoration: "none", boxSizing: "border-box"
                }}
              >
                💬 Send Receipt on WhatsApp
              </a>

              <p style={{ fontSize: 11, color: "#aaa", textAlign: "center", marginTop: 10, marginBottom: 0, lineHeight: 1.6 }}>
                Your account will be unlocked within 1 hour of receiving your receipt.
                Contact us at <a href="mailto:jce680@gmail.com" style={{ color: "#667eea" }}>jce680@gmail.com</a> if you need help.
              </p>
            </>
          )}
        </div>

        {/* Tap to expand hint */}
        {!payMethod && (
          <p style={{ textAlign: "center", fontSize: 12, color: "rgba(255,255,255,0.7)", marginBottom: 16 }}>
            Tap a payment option above to get started
          </p>
        )}

        {/* Referral promo */}
        <div style={{
          background: "rgba(255,255,255,0.15)", borderRadius: 16,
          padding: 14, textAlign: "center", marginBottom: 20
        }}>
          <p style={{ color: "#fff", fontSize: 13, margin: 0 }}>
            💰 <strong>Earn ₦500</strong> for every friend you refer after upgrading!
          </p>
        </div>
      </div>
    </div>
  )
}