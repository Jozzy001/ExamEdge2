import { useState, useEffect } from "react"

const FirstCBTPrompt = ({ onTakeCBT, onSkip, isPaid }) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Show only once — after onboarding, before any CBT taken
    const hasSeen = localStorage.getItem("ee-first-cbt-prompt")
    const hasTakenCBT = JSON.parse(localStorage.getItem("ee-cbtHistory") || "[]").length > 0
    if (!hasSeen && !hasTakenCBT) {
      // Small delay so app tour finishes first
      setTimeout(() => setVisible(true), 800)
    }
  }, [])

  const handleTake = () => {
    localStorage.setItem("ee-first-cbt-prompt", "1")
    setVisible(false)
    onTakeCBT()
  }

  const handleSkip = () => {
    localStorage.setItem("ee-first-cbt-prompt", "1")
    setVisible(false)
    if (onSkip) onSkip()
  }

  if (!visible) return null

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 2500,
      background: "rgba(0,0,0,0.7)",
      display: "flex", alignItems: "flex-end"
    }}>
      <div style={{
        background: "var(--bg)", width: "100%",
        borderRadius: "20px 20px 0 0",
        padding: "28px 24px 44px"
      }}>
        {/* Handle */}
        <div style={{
          width: 40, height: 4, borderRadius: 2,
          background: "var(--border)", margin: "0 auto 24px"
        }} />

        {/* Icon */}
        <div style={{ textAlign: "center", fontSize: 56, marginBottom: 12 }}>🎯</div>

        {/* Title */}
        <h2 style={{
          textAlign: "center", fontSize: 22, fontWeight: 900,
          color: "var(--text)", margin: "0 0 12px"
        }}>
          Let's See Where You Stand!
        </h2>

        {/* Description */}
        <p style={{
          textAlign: "center", fontSize: 14, color: "var(--text2)",
          lineHeight: 1.7, margin: "0 0 20px"
        }}>
          Take a quick CBT test now so we can identify your strong and weak areas.
          This helps you know exactly what to focus on before your exam.
        </p>

        {/* Benefits */}
        <div style={{
          background: "var(--surface)", borderRadius: "var(--radius-lg)",
          padding: "14px 16px", marginBottom: 20
        }}>
          {[
            { icon: "📊", text: "See your current performance level" },
            { icon: "⚠️", text: "Discover your weak areas instantly" },
            { icon: "🎯", text: "Get a personalised study plan" },
            { icon: "⏱", text: "Takes only 15-20 minutes" },
          ].map((item, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: 10,
              padding: "7px 0",
              borderBottom: i < 3 ? "1px solid var(--border)" : "none"
            }}>
              <span style={{ fontSize: 18 }}>{item.icon}</span>
              <span style={{ fontSize: 13, color: "var(--text)" }}>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Free user note */}
        {!isPaid && (
          <div style={{
            background: "rgba(102,126,234,0.08)",
            borderRadius: "var(--radius-md)",
            padding: "10px 14px", marginBottom: 16,
            border: "1px solid rgba(102,126,234,0.2)",
            fontSize: 12, color: "var(--text2)", lineHeight: 1.6
          }}>
            💡 <strong style={{ color: "var(--primary)" }}>Free users</strong> can take the test and see their score.
            Upgrade to ₦3,000 to unlock detailed results, weak areas, progress charts and more.
          </div>
        )}

        {/* CTA */}
        <button
          onClick={handleTake}
          style={{
            width: "100%", padding: "14px",
            background: "var(--primary)", color: "#fff",
            border: "none", borderRadius: "var(--radius-lg)",
            fontSize: 16, fontWeight: 800, cursor: "pointer",
            fontFamily: "var(--font-main)", marginBottom: 10
          }}
        >
          Take CBT Test Now 🚀
        </button>

        <button
          onClick={handleSkip}
          style={{
            width: "100%", padding: "10px",
            background: "none", color: "var(--text3)",
            border: "none", fontSize: 13, cursor: "pointer",
            fontFamily: "var(--font-main)"
          }}
        >
          Skip for now — I'll do it later
        </button>
      </div>
    </div>
  )
}

export default FirstCBTPrompt
