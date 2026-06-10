import { useState, useEffect } from "react"
import { getReferralStats, getReferralLink } from "../utils/referrals"

const ReferralCard = ({ userId, onNavigate }) => {
  const [stats, setStats] = useState(null)
  const [copied, setCopied] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadStats()
  }, [userId])

  const loadStats = async () => {
    const data = await getReferralStats(userId)
    setStats(data)
    setLoading(false)
  }

  if (loading || !stats) return null

  const handleCopyLink = () => {
    const link = getReferralLink(stats.referralCode)
    navigator.clipboard.writeText(link)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleShareWhatsApp = () => {
    const link = getReferralLink(stats.referralCode)
    const text = encodeURIComponent(`🎓 ExamEdgeNG helped me prepare for my UNIBEN Post-UTME! Join me and get free access.\n\n${link}`)
    window.open(`https://wa.me/?text=${text}`, "_blank")
  }

  const nextMilestone = stats.nextMilestone
  const progressPct = Math.round((stats.referralCount / nextMilestone.target) * 100)

  return (
    <div style={{
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      borderRadius: "var(--radius-xl)",
      padding: "20px",
      marginBottom: 16,
      color: "#fff"
    }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
        <span style={{ fontSize: 32 }}>🎁</span>
        <div>
          <div style={{ fontSize: 15, fontWeight: 800 }}>Refer & Earn Free Access</div>
          <div style={{ fontSize: 12, opacity: 0.85 }}>Invite friends, get rewards</div>
        </div>
      </div>

      {/* Milestone progress */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 6 }}>
          <span>Progress to next reward</span>
          <span style={{ fontWeight: 700 }}>{stats.referralCount}/{nextMilestone.target}</span>
        </div>
        <div style={{ height: 8, background: "rgba(255,255,255,0.2)", borderRadius: 4, overflow: "hidden" }}>
          <div
            style={{
              height: "100%",
              background: "#fff",
              width: `${progressPct}%`,
              transition: "width 0.3s"
            }}
          />
        </div>
        <div style={{ fontSize: 11, marginTop: 6, opacity: 0.9 }}>
          {nextMilestone.remaining} more → {nextMilestone.reward}
        </div>
      </div>

      {/* Referral stats */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 10,
        marginBottom: 16
      }}>
        <div style={{
          background: "rgba(255,255,255,0.15)",
          borderRadius: "var(--radius-md)",
          padding: "10px",
          textAlign: "center"
        }}>
          <div style={{ fontSize: 18, fontWeight: 800 }}>{stats.referralCount}</div>
          <div style={{ fontSize: 11, opacity: 0.85 }}>Friends joined</div>
        </div>
        <div style={{
          background: "rgba(255,255,255,0.15)",
          borderRadius: "var(--radius-md)",
          padding: "10px",
          textAlign: "center"
        }}>
          <div style={{ fontSize: 18, fontWeight: 800 }}>{Math.floor(stats.referralRewards / 1440)}</div>
          <div style={{ fontSize: 11, opacity: 0.85 }}>Days free earned</div>
        </div>
      </div>

      {/* Action buttons */}
      <div style={{ display: "flex", gap: 10, marginBottom: 12 }}>
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
            fontSize: 13,
            transition: "all 0.2s"
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
        padding: "10px",
        textAlign: "center",
        fontSize: 12
      }}>
        Your code: <strong style={{ fontSize: 14, letterSpacing: "0.1em" }}>{stats.referralCode}</strong>
      </div>
    </div>
  )
}

export default ReferralCard
