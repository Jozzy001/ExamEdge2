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
      // Load referral stats
      getReferralStats(authUser.uid).then(stats => {
        setReferralStats(stats)
      }).catch(e => {
        console.error("Error loading referral stats:", e)
      })

      // Load user data for pending earnings and account details
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
          <span style={{ fontWeight: 800, fontSize: 15 }}>💰 Referrals & Earnings</span>
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
          <span style={{ fontWeight: 800, fontSize: 15 }}>💰 Referrals & Earnings</span>
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
      `🎓 ExamEdgeNG helped me prepare for my UNIBEN Post-UTME! Join me and get free access.\n\n${link}`
    )
    window.open(`https://wa.me/?text=${text}`, "_blank")
  }

  const nextMilestone = referralStats.nextMilestone
  const progressPct = Math.round((referralStats.referralCount / nextMilestone.target) * 100)
  const pendingEarnings = userData?.pendingEarnings || 0
  const hasAccountDetails = userData?.accountDetails && userData.accountDetails.accountNumber
  const paymentHistory = userData?.paymentHistory || []

  return (
    <div className="ee-page">
      <header className="ee-header">
        <button className="ee-back-btn" onClick={onBack}>← Back</button>
        <span style={{ fontWeight: 800, fontSize: 15 }}>💰 Referrals & Earnings</span>
        <span style={{ width: 60 }} />
      </header>

      <div className="ee-content">
        {/* Pending Earnings Card */}
        {pendingEarnings > 0 && (
          <div style={{
            background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
            borderRadius: "var(--radius-xl)",
            padding: "20px",
            marginBottom: 20,
            color: "#fff"
          }}>
            <div style={{ fontSize: 12, opacity: 0.9, marginBottom: 6 }}>Pending Earnings</div>
            <div style={{ fontSize: 32, fontWeight: 900, marginBottom: 12 }}>₦{pendingEarnings.toLocaleString()}</div>
            <div style={{ fontSize: 12, opacity: 0.85, marginBottom: 14 }}>
              Earned from {referralStats.referralCount} referrals • Paid every weekend
            </div>
            
            {!hasAccountDetails ? (
              <button
                onClick={() => onNavigate("accountDetails")}
                style={{
                  width: "100%",
                  padding: "12px",
                  background: "#fff",
                  color: "#059669",
                  border: "none",
                  borderRadius: "var(--radius-md)",
                  fontWeight: 700,
                  cursor: "pointer",
                  fontSize: 13
                }}
              >
                Add Account Details
              </button>
            ) : (
              <div style={{
                background: "rgba(255,255,255,0.2)",
                padding: "12px",
                borderRadius: "var(--radius-md)",
                fontSize: 12,
                textAlign: "center"
              }}>
                ✅ Account details saved • Awaiting payout
              </div>
            )}
          </div>
        )}

        {pendingEarnings === 0 && (
          <div style={{
            background: "rgba(100, 116, 139, 0.1)",
            borderRadius: "var(--radius-lg)",
            padding: "16px",
            marginBottom: 20,
            border: "1px solid rgba(100, 116, 139, 0.2)",
            fontSize: 13,
            color: "var(--text3)",
            textAlign: "center"
          }}>
            No pending earnings yet. Share your code to start earning! 🚀
          </div>
        )}

        {/* Referral Card */}
        <div style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          borderRadius: "var(--radius-xl)",
          padding: "24px",
          marginBottom: 20,
          color: "#fff"
        }}>
          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <span style={{ fontSize: 40 }}>🎁</span>
            <div>
              <div style={{ fontSize: 16, fontWeight: 800 }}>Refer & Earn ₦500</div>
              <div style={{ fontSize: 13, opacity: 0.85 }}>Per friend that pays</div>
            </div>
          </div>

          {/* Milestone progress */}
          <div style={{ marginBottom: 20, paddingBottom: 20, borderBottom: "1px solid rgba(255,255,255,0.2)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 8 }}>
              <span>Friends signed up</span>
              <span style={{ fontWeight: 700 }}>{referralStats.referralCount}</span>
            </div>
            <div style={{ height: 10, background: "rgba(255,255,255,0.2)", borderRadius: 5, overflow: "hidden" }}>
              <div
                style={{
                  height: "100%",
                  background: "#fff",
                  width: `${Math.min((referralStats.referralCount / 10) * 100, 100)}%`,
                  transition: "width 0.3s"
                }}
              />
            </div>
          </div>

          {/* Share buttons */}
          <div style={{ display: "flex", gap: 10 }}>
            <button
              onClick={handleCopyLink}
              style={{
                flex: 1,
                padding: "12px",
                background: "#fff",
                color: "#667eea",
                border: "none",
                borderRadius: "var(--radius-md)",
                fontWeight: 700,
                cursor: "pointer",
                fontSize: 13
              }}
            >
              {copied ? "✅ Copied!" : "📋 Copy link"}
            </button>
            <button
              onClick={handleShareWhatsApp}
              style={{
                flex: 1,
                padding: "12px",
                background: "#25d366",
                color: "#fff",
                border: "none",
                borderRadius: "var(--radius-md)",
                fontWeight: 700,
                cursor: "pointer",
                fontSize: 13
              }}
            >
              💬 Share
            </button>
          </div>

          {/* Code display */}
          <div style={{
            background: "rgba(0,0,0,0.2)",
            borderRadius: "var(--radius-md)",
            padding: "12px",
            textAlign: "center",
            fontSize: 13,
            marginTop: 12
          }}>
            Your code: <strong style={{ fontSize: 15, letterSpacing: "0.1em" }}>{referralStats.referralCode}</strong>
          </div>
        </div>

        {/* How it works */}
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 14, fontWeight: 800, marginBottom: 12, color: "var(--text)" }}>How it works:</div>
          <div style={{
            background: "var(--surface)",
            borderRadius: "var(--radius-lg)",
            padding: "12px",
            marginBottom: 8,
            display: "flex",
            gap: 12
          }}>
            <span style={{ fontSize: 20 }}>1️⃣</span>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 2 }}>Share your code</div>
              <div style={{ fontSize: 12, color: "var(--text3)" }}>Send link to friends</div>
            </div>
          </div>
          <div style={{
            background: "var(--surface)",
            borderRadius: "var(--radius-lg)",
            padding: "12px",
            marginBottom: 8,
            display: "flex",
            gap: 12
          }}>
            <span style={{ fontSize: 20 }}>2️⃣</span>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 2 }}>They sign up & pay</div>
              <div style={{ fontSize: 12, color: "var(--text3)" }}>Using your code</div>
            </div>
          </div>
          <div style={{
            background: "var(--surface)",
            borderRadius: "var(--radius-lg)",
            padding: "12px",
            display: "flex",
            gap: 12
          }}>
            <span style={{ fontSize: 20 }}>3️⃣</span>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 2 }}>You earn ₦500</div>
              <div style={{ fontSize: 12, color: "var(--text3)" }}>Per paying friend</div>
            </div>
          </div>
        </div>

        {/* Payout info */}
        <div style={{
          background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
          borderRadius: "var(--radius-lg)",
          padding: "14px",
          marginBottom: 20,
          color: "#fff"
        }}>
          <div style={{ fontSize: 13, fontWeight: 800, marginBottom: 6 }}>💳 Payout Schedule</div>
          <div style={{ fontSize: 12, lineHeight: 1.5 }}>
            Payments are processed every <strong>weekend</strong>. Add your bank details above to receive your earnings automatically.
          </div>
        </div>

        {/* Payment History */}
        {paymentHistory && paymentHistory.length > 0 && (
          <div>
            <div style={{ fontSize: 14, fontWeight: 800, marginBottom: 12, color: "var(--text)" }}>Payment History:</div>
            {paymentHistory.map((payment, idx) => (
              <div
                key={idx}
                style={{
                  background: "var(--surface)",
                  borderRadius: "var(--radius-md)",
                  padding: "12px",
                  marginBottom: 8,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)" }}>₦{payment.amount.toLocaleString()}</div>
                  <div style={{ fontSize: 11, color: "var(--text3)" }}>
                    {new Date(payment.date).toLocaleDateString()}
                  </div>
                </div>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#10b981" }}>✅ Paid</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Referrals
