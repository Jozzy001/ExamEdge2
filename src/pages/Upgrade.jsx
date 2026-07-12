import { useState } from "react"

export default function Upgrade({ user, userData, onBack }) {
  const [copied, setCopied] = useState("")

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text)
    setCopied(key)
    setTimeout(() => setCopied(""), 2000)
  }

  const features = [
    "Complete UNIBEN Past Questions",
    "AI Tutor",
    "Unlimited CBT Practice",
    "Hot Topics",
    "Performance Analytics",
    "Review Every CBT Attempt",
    "Premium WhatsApp Study Group",
    "Daily Revision & Exam Tips",
  ]
  const featureIcons = ["📚", "🤖", "🎯", "🔥", "📈", "🕐", "👥", "🎁"]

  const waMessage = `Hello ExamEdge,\n\nI have made payment of \u20a62,000 for Premium access.\n\nName: ${userData?.name || ""}\nEmail: ${user?.email || ""}\n\nReceipt attached.\n\nKindly activate my Premium account\nand send me the Study Group link.\n\nThank you.`

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      padding: "20px",
      display: "flex", flexDirection: "column", alignItems: "center",
    }}>
      <style>{`
        @keyframes eeFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .ee-fade { animation: eeFadeIn 0.5s ease both; }
        .ee-card { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .ee-card:hover { transform: translateY(-2px); }
        .ee-btn { transition: transform 0.15s ease, filter 0.15s ease; }
        .ee-btn:hover { transform: scale(1.02); filter: brightness(1.05); }
        .ee-btn:active { transform: scale(0.98); }
      `}</style>

      {/* Back button */}
      <div style={{ width: "100%", maxWidth: 420, marginBottom: 16 }}>
        <button onClick={onBack} style={{
          background: "rgba(255,255,255,0.2)", border: "none",
          borderRadius: 20, padding: "8px 16px",
          color: "#fff", cursor: "pointer", fontSize: 14,
        }}>← Back</button>
      </div>

      {/* ── HERO ── */}
      <div className="ee-fade" style={{ textAlign: "center", marginBottom: 20, width: "100%", maxWidth: 420 }}>
        <div style={{ fontSize: 44, marginBottom: 8 }}>🚀</div>
        <h1 style={{ color: "#fff", fontSize: 24, fontWeight: 800, margin: "0 0 20px", lineHeight: 1.3 }}>
          Unlock Full Access
        </h1>

        <div className="ee-card" style={{
          background: "#fff", borderRadius: 20, padding: "24px 20px",
          boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
        }}>
          <div style={{ fontSize: 12, color: "#888", fontWeight: 700, letterSpacing: 0.5, marginBottom: 6 }}>
            ONE-TIME PAYMENT
          </div>
          <div style={{ fontSize: 42, fontWeight: 900, color: "#1a1a2e", lineHeight: 1 }}>
            ₦2,000
          </div>
          <div style={{ fontSize: 12, color: "#888", marginTop: 8 }}>
            No subscription · Bank transfer
          </div>
        </div>
      </div>

      <div style={{ width: "100%", maxWidth: 420 }}>

        {/* ── FEATURES ── */}
        <div className="ee-fade ee-card" style={{
          background: "#fff", borderRadius: 20, padding: "20px 20px 16px",
          marginBottom: 16, boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
        }}>
          <p style={{ fontSize: 13, fontWeight: 800, color: "#1a1a2e", margin: "0 0 12px", letterSpacing: 0.5 }}>
            ✨ EVERYTHING INCLUDED
          </p>
          {features.map((f, i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: 10,
              padding: "8px 0",
              borderBottom: i < features.length - 1 ? "1px solid #f0f0f0" : "none",
            }}>
              <span style={{ fontSize: 18 }}>{featureIcons[i]}</span>
              <span style={{ fontSize: 13, color: "#333", fontWeight: 500 }}>{f}</span>
              <span style={{ marginLeft: "auto", color: "#22c55e", fontWeight: 800 }}>✔</span>
            </div>
          ))}
        </div>

        {/* ── BONUS (blue) ── */}
        <div className="ee-fade ee-card" style={{
          background: "linear-gradient(135deg, #2563eb, #1e40af)",
          borderRadius: 20, padding: 20, marginBottom: 16,
          boxShadow: "0 10px 40px rgba(0,0,0,0.2)", color: "#fff",
        }}>
          <p style={{ fontSize: 13, fontWeight: 800, margin: "0 0 10px", letterSpacing: 0.5 }}>
            🎓 EXCLUSIVE BONUS
          </p>
          <p style={{ fontSize: 13, lineHeight: 1.6, margin: "0 0 12px", color: "rgba(255,255,255,0.9)" }}>
            After upgrading, you'll join our <strong>Premium WhatsApp Study Group</strong>. Every day we'll:
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 14 }}>
            {["Solve Past Questions", "Explain Difficult Questions", "Share Likely Topics", "Answer Questions", "Revise Together"].map((t, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13 }}>
                <span style={{ color: "#4ade80", fontWeight: 800 }}>✔</span>
                <span>{t}</span>
              </div>
            ))}
          </div>
          <div style={{
            background: "rgba(255,255,255,0.15)", borderRadius: 12, padding: "10px 14px",
          }}>
            <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: 0.5, marginBottom: 4 }}>🎯 GOAL</div>
            <div style={{ fontSize: 13, lineHeight: 1.5 }}>
              Finish ALL important UNIBEN Past Questions before the exam.
            </div>
          </div>
        </div>

        {/* ── PAYMENT ── */}
        <div className="ee-fade ee-card" style={{
          background: "#fff", borderRadius: 20, padding: 20,
          marginBottom: 16, boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
        }}>
          <div style={{ textAlign: "center", marginBottom: 16 }}>
            <div style={{ fontSize: 32, marginBottom: 4 }}>🏦</div>
            <div style={{ fontSize: 12, color: "#888", fontWeight: 700, letterSpacing: 0.5 }}>TRANSFER</div>
            <div style={{ fontSize: 32, fontWeight: 900, color: "#1a1a2e" }}>₦2,000</div>
          </div>

          <div style={{
            background: "rgba(16,185,129,0.06)",
            border: "1px solid rgba(16,185,129,0.25)",
            borderRadius: 12, padding: "14px 16px",
          }}>
            {[
              { label: "Bank", value: "OPay", copyable: false },
              { label: "Account Number", value: "8168334155", copyable: true },
              { label: "Account Name", value: "Joshua Osahenrumwen Odiase", copyable: false },
            ].map((item, i) => (
              <div key={i} style={{
                display: "flex", justifyContent: "space-between",
                alignItems: "center", padding: "8px 0",
                borderBottom: i < 2 ? "1px solid rgba(16,185,129,0.15)" : "none",
              }}>
                <div>
                  <div style={{ fontSize: 10, color: "#059669", fontWeight: 700, marginBottom: 1 }}>{item.label}</div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: "#064e3b" }}>{item.value}</div>
                </div>
                {item.copyable && (
                  <button
                    onClick={() => handleCopy(item.value, item.label)}
                    className="ee-btn"
                    style={{
                      padding: "6px 14px",
                      background: copied === item.label ? "#10b981" : "rgba(16,185,129,0.15)",
                      color: copied === item.label ? "#fff" : "#059669",
                      border: "none", borderRadius: 8,
                      fontSize: 11, fontWeight: 700, cursor: "pointer",
                    }}
                  >
                    {copied === item.label ? "✅ Copied!" : "📋 Copy"}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── WHATSAPP CTA ── */}
        <a
          href={`https://wa.me/2349121192596?text=${encodeURIComponent(waMessage)}`}
          target="_blank"
          rel="noreferrer"
          className="ee-btn"
          style={{
            display: "block", width: "100%", padding: "18px",
            background: "linear-gradient(135deg, #25d366, #128c4a)",
            color: "#fff", borderRadius: 16, textAlign: "center",
            textDecoration: "none", boxSizing: "border-box",
            marginBottom: 20, boxShadow: "0 10px 30px rgba(37,211,102,0.4)",
          }}
        >
          <div style={{ fontSize: 22, marginBottom: 4 }}>🚀</div>
          <div style={{ fontSize: 16, fontWeight: 800 }}>I'VE MADE PAYMENT</div>
          <div style={{ fontSize: 13, fontWeight: 600, opacity: 0.9 }}>Send My Receipt</div>
        </a>

        {/* ── FOOTER ── */}
        <div className="ee-fade" style={{ textAlign: "center", paddingBottom: 8 }}>
          <div style={{ fontSize: 18, marginBottom: 6, letterSpacing: 2 }}>⭐⭐⭐⭐⭐</div>
          <p style={{ color: "rgba(255,255,255,0.9)", fontSize: 13, margin: "0 0 16px" }}>
            Join over 100 students already preparing with ExamEdge.
          </p>

          <div style={{ height: 1, background: "rgba(255,255,255,0.25)", margin: "0 0 16px" }} />

          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 12, margin: "0 0 4px" }}>
            🔒 Manual Verification — 30–60 mins
          </p>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 12, margin: 0 }}>
            Need help? WhatsApp us.
          </p>
        </div>
      </div>
    </div>
  )
}