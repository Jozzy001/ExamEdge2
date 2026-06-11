import { useState, useEffect } from "react"
import { getReferralStats, getReferralLink } from "../utils/referrals"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase"

const Referrals = ({ onNavigate, onBack, authUser }) => {
  const [referralStats, setReferralStats] = useState(null)
  const [userData, setUserData] = useState(null)
  const [copied, setCopied] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (authUser?.uid) {
      getReferralStats(authUser.uid).then(stats => {
        setReferralStats(stats)
      }).catch(e => {
        console.error("Error loading referral stats:", e)
      })

      getDoc(doc(db, "users", authUser.uid)).then(snap => {
        if (snap.exists()) {
          setUserData(snap.data())
        }
        setLoading(false)
      }).catch(e => {
        console.error("Error loading user data:", e)
        setLoading(false)
      })
    }
  }, [authUser?.uid])

  if (loading) {
    return (
      <div className="ee-page">
        <header className="ee-header">
          <button className="ee-back-btn" onClick={onBack}>← Back</button>
          <span style={{ fontWeight: 800, fontSize: 15 }}>🎁 Referrals</span>
          <span style={{ width: 60 }} />
        </header>
        <div className="ee-content" style={{ textAlign: "center", paddingTop: 40 }}>
          Loading...
        </div>
      </div>
    )
  }

  if (!referralStats) {
    return (
      <div className="ee-page">
        <header className="ee-header">
          <button className="ee-back-btn" onClick={onBack}>← Back</button>
          <span style={{ fontWeight: 800, fontSize: 15 }}>🎁 Referrals</span>
          <span style={{ width: 60 }} />
        </header>
        <div className="ee-content" style={{ textAlign: "center", paddingTop: 40, color: "var(--text3)" }}>
          Unable to load referral data
        </div>
      </div>
    )
  }

  const handleCopyLink = () => {
    const link = getReferralLink(referralStats.referralCode)
    navigator.clipboard.writeText(link)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleShareWhatsApp = () => {
    const link = getReferralLink(referralStats.referralCode)
    const text = encodeURIComponent(
      `🎓 I'm using ExamEdgeNG to prepare for UNIBEN Post-UTME! It has 20 years of past questions, CBT simulation and an AI tutor. Sign up with my code to get started.\n\n${link}`
    )
    window.open(`https://wa.me/?text=${text}`, "_blank")
  }

  const friendsReferred = referralStats.referralCount || 0
  const paidFriends = Math.round((userData?.referralEarnings || 0) / 500)

  return (
    <div className="ee-page">
      <header className="ee-header">
        <button className="ee-back-btn" onClick={onBack}>← Back</button>
        <span style={{ fontWeight: 800, fontSize: 15 }}>🎁 Referrals</span>
        <span style={{ width: 60 }} />
      </header>

      <div className="ee-content">

        {/* ── COMING SOON BANNER ── */}
        <div style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          borderRadius: "var(--radius-xl)",
          padding: "24px 20px",
          marginBottom: 20,
          color: "#fff",
          textAlign: "center"
        }}>
          <div style={{ fontSize: 44, marginBottom: 12 }}>🚀</div>
          <div style={{ fontSize: 18, fontWeight: 900, marginBottom: 8 }}>
            Earn ₦500 Per Referral
          </div>
          <div style={{
            display: "inline-block",
            background: "rgba(255,255,255,0.2)",
            borderRadius: 20, padding: "4px 14px",
            fontSize: 12, fontWeight: 700,
            border: "1px solid rgba(255,255,255,0.3)",
            marginBottom: 12
          }}>
            ⏳ Launching Soon
          </div>
          <p style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.7, margin: 0 }}>
            When we fully launch, every friend who pays ₦3,000 earns you
            <strong> ₦500 cash</strong> — paid directly to your bank account every weekend.
          </p>
        </div>

        {/* ── WHAT TO DO NOW ── */}
        <div style={{
          background: "rgba(16,185,129,0.08)",
          border: "1.5px solid rgba(16,185,129,0.25)",
          borderRadius: "var(--radius-lg)",
          padding: "16px",
          marginBottom: 20
        }}>
          <div style={{ fontSize: 14, fontWeight: 800, color: "#059669", marginBottom: 10 }}>
            ✅ What you can do right now
          </div>
          <p style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.7, margin: "0 0 12px" }}>
            Start sharing your referral code today. Every friend who signs up using your
            code is registered under your name. When payouts go live, you'll be paid for
            every one of them — including the ones you referred before launch.
          </p>
          <div style={{
            background: "rgba(16,185,129,0.1)",
            borderRadius: "var(--radius-md)",
            padding: "10px 12px",
            fontSize: 12, color: "#059669", fontWeight: 700
          }}>
            🎯 The earlier you refer, the more you earn when we launch.
          </div>
        </div>

        {/* ── FRIENDS REFERRED SO FAR ── */}
        <div style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-lg)",
          padding: "16px",
          marginBottom: 20
        }}>
          <div style={{ fontSize: 13, fontWeight: 800, color: "var(--text)", marginBottom: 14 }}>
            📊 Your Referral Stats
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <div style={{
              background: "rgba(102,126,234,0.08)",
              border: "1px solid rgba(102,126,234,0.2)",
              borderRadius: "var(--radius-md)",
              padding: "14px 10px", textAlign: "center"
            }}>
              <div style={{ fontSize: 28, fontWeight: 900, color: "var(--primary)" }}>
                {friendsReferred}
              </div>
              <div style={{ fontSize: 11, color: "var(--text3)", marginTop: 4 }}>
                Friends signed up
              </div>
            </div>
            <div style={{
              background: "rgba(16,185,129,0.08)",
              border: "1px solid rgba(16,185,129,0.2)",
              borderRadius: "var(--radius-md)",
              padding: "14px 10px", textAlign: "center"
            }}>
              <div style={{ fontSize: 28, fontWeight: 900, color: "#059669" }}>
                ₦{(friendsReferred * 500).toLocaleString()}
              </div>
              <div style={{ fontSize: 11, color: "var(--text3)", marginTop: 4 }}>
                Potential earnings
              </div>
            </div>
          </div>
          {friendsReferred > 0 && (
            <div style={{
              marginTop: 12, padding: "10px 12px",
              background: "rgba(245,158,11,0.08)",
              border: "1px solid rgba(245,158,11,0.2)",
              borderRadius: "var(--radius-md)",
              fontSize: 12, color: "#92400e", lineHeight: 1.6
            }}>
              🎉 You've referred <strong>{friendsReferred} friend{friendsReferred !== 1 ? "s" : ""}</strong> so far.
              Keep sharing — your earnings grow with every new signup!
            </div>
          )}
        </div>

        {/* ── SHARE YOUR CODE ── */}
        <div style={{
          background: "linear-gradient(135deg, #1e293b, #334155)",
          borderRadius: "var(--radius-xl)",
          padding: "22px",
          marginBottom: 20,
          color: "#fff"
        }}>
          <div style={{ fontSize: 14, fontWeight: 800, marginBottom: 6 }}>
            🔗 Your Referral Code
          </div>
          <div style={{
            fontSize: 28, fontWeight: 900, letterSpacing: "0.12em",
            marginBottom: 16, color: "#a5f3fc"
          }}>
            {referralStats.referralCode}
          </div>

          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={handleCopyLink} style={{
              flex: 1, padding: "12px",
              background: "rgba(255,255,255,0.12)",
              color: "#fff", border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "var(--radius-md)",
              fontWeight: 700, cursor: "pointer", fontSize: 13,
              fontFamily: "var(--font-main)"
            }}>
              {copied ? "✅ Copied!" : "📋 Copy link"}
            </button>
            <button onClick={handleShareWhatsApp} style={{
              flex: 1, padding: "12px",
              background: "#25d366", color: "#fff",
              border: "none", borderRadius: "var(--radius-md)",
              fontWeight: 700, cursor: "pointer", fontSize: 13,
              fontFamily: "var(--font-main)"
            }}>
              💬 WhatsApp
            </button>
          </div>
        </div>

        {/* ── HOW IT WILL WORK ── */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 13, fontWeight: 800, color: "var(--text)", marginBottom: 12 }}>
            How it will work at launch
          </div>
          {[
            { icon: "1️⃣", title: "Share your code now", sub: "Friends who sign up using your code are already registered under your name." },
            { icon: "2️⃣", title: "They pay ₦3,000", sub: "When a friend upgrades to full access, ₦500 is credited to your account." },
            { icon: "3️⃣", title: "You get paid every weekend", sub: "Once payouts are live, we'll send your earnings directly to your bank account." },
          ].map((step, i) => (
            <div key={i} style={{
              background: "var(--surface)",
              borderRadius: "var(--radius-lg)",
              padding: "12px 14px", marginBottom: 8,
              display: "flex", gap: 12,
              border: "1px solid var(--border)"
            }}>
              <span style={{ fontSize: 22 }}>{step.icon}</span>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)", marginBottom: 2 }}>{step.title}</div>
                <div style={{ fontSize: 12, color: "var(--text3)" }}>{step.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ── FOLLOW FOR LAUNCH UPDATES ── */}
        <div
          onClick={() => window.open("https://whatsapp.com/channel/0029Vb7ZQAe90x2qXQY1Rw1K", "_blank")}
          style={{
            background: "linear-gradient(135deg, #25d366, #128c7e)",
            borderRadius: "var(--radius-lg)", padding: "14px 18px",
            marginBottom: 16, cursor: "pointer", color: "#fff",
            display: "flex", alignItems: "center", gap: 14
          }}
        >
          <span style={{ fontSize: 26 }}>📢</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 2 }}>
              Follow Our WhatsApp Channel
            </div>
            <div style={{ fontSize: 12, opacity: 0.9, lineHeight: 1.5 }}>
              We'll announce when payouts go live — be the first to know
            </div>
          </div>
          <span style={{ fontSize: 16, opacity: 0.8 }}>→</span>
        </div>

      </div>
    </div>
  )
}

export default Referrals