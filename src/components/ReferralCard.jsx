// Shows user's referral code, earnings, and who they referred
import { useState, useEffect } from "react"
import { collection, query, where, getDocs } from "firebase/firestore"
import { db } from "../firebase"
import { formatNaira } from "../utils/subscription"

export default function ReferralCard({ userData }) {
  const [copied, setCopied] = useState(false)
  const [referredUsers, setReferredUsers] = useState([])
  const [loadingReferrals, setLoadingReferrals] = useState(false)

  const referralCode = userData?.referralCode || ''
  const earnings = userData?.referralEarnings || 0
  const paidOut = userData?.referralPaidOut || 0
  const pending = earnings - paidOut

  // Fetch users who used this referral code
  useEffect(() => {
    if (!userData?.uid && !userData?.referralCode) return
    const fetchReferrals = async () => {
      setLoadingReferrals(true)
      try {
        const q = query(
          collection(db, "users"),
          where("referredBy", "==", userData.uid)
        )
        const snap = await getDocs(q)
        const users = snap.docs.map(d => ({
          id: d.id,
          name: d.data().name || "Anonymous",
          email: d.data().email || "",
          isPaid: d.data().isPaid || false,
          paidAt: d.data().paidAt || null,
          createdAt: d.data().createdAt || null,
        }))
        setReferredUsers(users)
      } catch(e) {
        // Offline or error — show empty
      }
      setLoadingReferrals(false)
    }
    fetchReferrals()
  }, [userData?.uid])

  const copyCode = () => {
    const message = `Hey! I'm using ExamEdgeNG to prepare for my Post-UTME exam. It has 20 years of past questions with CBT simulation. Use my referral code ${referralCode} when you sign up. Download here: https://examedgeng.site`
    navigator.clipboard.writeText(message)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareCode = () => {
    const message = `Hey! I'm using ExamEdgeNG to prepare for my Post-UTME exam. It has 20 years of past questions with CBT simulation. Use my referral code *${referralCode}* when you sign up. Download here: https://examedgeng.site`
    if (navigator.share) {
      navigator.share({ text: message })
    } else {
      navigator.clipboard.writeText(message)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const formatDate = (iso) => {
    if (!iso) return ""
    return new Date(iso).toLocaleDateString("en-NG", { day: "numeric", month: "short", year: "numeric" })
  }

  const paidReferrals = referredUsers.filter(u => u.isPaid)
  const pendingReferrals = referredUsers.filter(u => !u.isPaid)

  return (
    <div style={{ padding: "0 16px" }}>

      {/* Referral code card */}
      <div style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        borderRadius: 16, padding: 20, marginBottom: 12,
        color: "#fff", textAlign: "center",
      }}>
        <p style={{ fontSize: 12, margin: "0 0 8px", opacity: 0.8, fontWeight: 600 }}>
          YOUR REFERRAL CODE
        </p>
        <div style={{
          background: "rgba(255,255,255,0.2)", borderRadius: 12,
          padding: "12px 20px", fontSize: 28, fontWeight: 800,
          letterSpacing: 4, marginBottom: 12,
        }}>
          {referralCode}
        </div>
        <p style={{ fontSize: 12, opacity: 0.8, margin: "0 0 16px" }}>
          Earn <strong>₦500</strong> for every friend who pays using your code
        </p>
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={copyCode} style={{
            flex: 1, padding: "10px",
            background: "rgba(255,255,255,0.2)",
            border: "1px solid rgba(255,255,255,0.4)",
            borderRadius: 10, color: "#fff",
            fontSize: 13, fontWeight: 600, cursor: "pointer",
            fontFamily: "var(--font-main)"
          }}>
            {copied ? "✓ Copied!" : "📋 Copy Message"}
          </button>
          <button onClick={shareCode} style={{
            flex: 1, padding: "10px",
            background: "#fff", border: "none",
            borderRadius: 10, color: "#667eea",
            fontSize: 13, fontWeight: 700, cursor: "pointer",
            fontFamily: "var(--font-main)"
          }}>
            📤 Share
          </button>
        </div>
      </div>

      {/* Earnings summary */}
      <div style={{
        background: "var(--surface)", borderRadius: 16,
        padding: 16, marginBottom: 12,
        border: "1px solid var(--border)"
      }}>
        <p style={{ fontSize: 13, fontWeight: 700, color: "var(--text)", margin: "0 0 12px" }}>
          💰 Referral Earnings
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 12 }}>
          {[
            { label: "Total Earned", value: formatNaira(earnings), color: "#22c55e" },
            { label: "Paid Out", value: formatNaira(paidOut), color: "#667eea" },
            { label: "Pending", value: formatNaira(pending), color: "#f59e0b" },
          ].map((stat, i) => (
            <div key={i} style={{
              background: "var(--surface2)", borderRadius: 10,
              padding: "10px 8px", textAlign: "center",
            }}>
              <div style={{ fontSize: 15, fontWeight: 800, color: stat.color }}>{stat.value}</div>
              <div style={{ fontSize: 10, color: "var(--text2)", marginTop: 2 }}>{stat.label}</div>
            </div>
          ))}
        </div>
        {pending > 0 && (
          <div style={{
            background: "rgba(245,158,11,0.1)", borderRadius: 10,
            padding: "10px 12px", fontSize: 12, color: "#92400e",
            border: "1px solid rgba(245,158,11,0.2)"
          }}>
            ⏳ <strong>{formatNaira(pending)}</strong> pending — contact support to withdraw.
          </div>
        )}
      </div>

      {/* Who you referred */}
      <div style={{
        background: "var(--surface)", borderRadius: 16,
        padding: 16, border: "1px solid var(--border)"
      }}>
        <p style={{ fontSize: 13, fontWeight: 700, color: "var(--text)", margin: "0 0 12px" }}>
          👥 People You Referred ({referredUsers.length})
        </p>

        {loadingReferrals ? (
          <p style={{ fontSize: 12, color: "var(--text2)", textAlign: "center" }}>Loading...</p>
        ) : referredUsers.length === 0 ? (
          <p style={{ fontSize: 12, color: "var(--text2)", textAlign: "center", margin: 0 }}>
            No referrals yet. Share your code to start earning! 🚀
          </p>
        ) : (
          <>
            {/* Paid referrals */}
            {paidReferrals.length > 0 && (
              <div style={{ marginBottom: 12 }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: "#16a34a", marginBottom: 8, textTransform: "uppercase" }}>
                  ✅ Paid ({paidReferrals.length}) — ₦{paidReferrals.length * 500} earned
                </div>
                {paidReferrals.map((u, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "8px 10px", borderRadius: 8, marginBottom: 6,
                    background: "rgba(34,197,94,0.08)",
                    border: "1px solid rgba(34,197,94,0.2)"
                  }}>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)" }}>
                        {u.name}
                      </div>
                      <div style={{ fontSize: 11, color: "var(--text2)" }}>
                        Paid on {formatDate(u.paidAt)}
                      </div>
                    </div>
                    <div style={{
                      fontSize: 12, fontWeight: 800, color: "#16a34a",
                      background: "rgba(34,197,94,0.15)",
                      padding: "3px 8px", borderRadius: 10
                    }}>+₦500</div>
                  </div>
                ))}
              </div>
            )}

            {/* Pending referrals */}
            {pendingReferrals.length > 0 && (
              <div>
                <div style={{ fontSize: 11, fontWeight: 800, color: "#d97706", marginBottom: 8, textTransform: "uppercase" }}>
                  ⏳ Not Yet Paid ({pendingReferrals.length})
                </div>
                {pendingReferrals.map((u, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: "8px 10px", borderRadius: 8, marginBottom: 6,
                    background: "rgba(245,158,11,0.08)",
                    border: "1px solid rgba(245,158,11,0.2)"
                  }}>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)" }}>
                        {u.name}
                      </div>
                      <div style={{ fontSize: 11, color: "var(--text2)" }}>
                        Signed up {formatDate(u.createdAt)} · Free plan
                      </div>
                    </div>
                    <div style={{
                      fontSize: 11, fontWeight: 700, color: "#d97706",
                      background: "rgba(245,158,11,0.15)",
                      padding: "3px 8px", borderRadius: 10
                    }}>Pending</div>
                  </div>
                ))}
                <p style={{ fontSize: 11, color: "var(--text2)", marginTop: 8, lineHeight: 1.5 }}>
                  💡 Remind them to upgrade — you earn ₦500 when they pay!
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}