import { useState, useEffect } from "react"
import { getReferralLink } from "../utils/referrals"
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore"
import { db } from "../firebase"

const Referrals = ({ onNavigate, onBack, authUser }) => {
  const [userData, setUserData] = useState(null)
  const [referredUsers, setReferredUsers] = useState([])
  const [copied, setCopied] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!authUser?.uid) return
    const load = async () => {
      try {
        // Load own user data (for referral code + earnings)
        const snap = await getDoc(doc(db, "users", authUser.uid))
        if (snap.exists()) setUserData(snap.data())

        // Load all users referred by this user
        const q = query(collection(db, "users"), where("referredBy", "==", authUser.uid))
        const refSnap = await getDocs(q)
        const refs = refSnap.docs.map(d => ({ id: d.id, ...d.data() }))
        setReferredUsers(refs)
      } catch(e) {
        console.error("Error loading referral data:", e)
      }
      setLoading(false)
    }
    load()
  }, [authUser?.uid])

  const handleCopyLink = () => {
    const link = getReferralLink(userData?.referralCode)
    navigator.clipboard.writeText(link)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleShareWhatsApp = () => {
    const link = getReferralLink(userData?.referralCode)
    const text = encodeURIComponent(
      `🎓 I'm using ExamEdgeNG to prepare for UNIBEN Post-UTME! It has 20 years of past questions, CBT simulation and an AI tutor.\n\nSign up free with my referral code and start preparing:\n\n${link}`
    )
    window.open(`https://wa.me/?text=${text}`, "_blank")
  }

  if (loading) {
    return (
      <div className="ee-page">
        <header className="ee-header">
          <button className="ee-back-btn" onClick={onBack}>← Back</button>
          <span style={{ fontWeight: 800, fontSize: 15 }}>💰 Referrals</span>
          <span style={{ width: 60 }} />
        </header>
        <div className="ee-content" style={{ textAlign: "center", paddingTop: 60 }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>⏳</div>
          <div style={{ color: "var(--text3)", fontSize: 14 }}>Loading your referrals...</div>
        </div>
      </div>
    )
  }

  const paidReferrals = referredUsers.filter(u => u.isPaid)
  const unpaidReferrals = referredUsers.filter(u => !u.isPaid)
  const totalEarned = userData?.referralEarnings || 0
  const totalPaidOut = userData?.referralPaidOut || 0
  const pendingBalance = totalEarned - totalPaidOut

  const formatDate = (ts) => {
    if (!ts) return "—"
    const d = ts?.toDate ? ts.toDate() : new Date(ts)
    return d.toLocaleDateString("en-NG", { day: "numeric", month: "short", year: "numeric" })
  }

  return (
    <div className="ee-page">
      <header className="ee-header">
        <button className="ee-back-btn" onClick={onBack}>← Back</button>
        <span style={{ fontWeight: 800, fontSize: 15 }}>💰 Referrals & Earnings</span>
        <span style={{ width: 60 }} />
      </header>

      <div className="ee-content">

        {/* ── EARNINGS SUMMARY ── */}
        <div style={{
          background: "linear-gradient(135deg, #10b981, #059669)",
          borderRadius: "var(--radius-xl)",
          padding: "22px 20px", marginBottom: 16, color: "#fff"
        }}>
          <div style={{ fontSize: 12, fontWeight: 700, opacity: 0.85, marginBottom: 14, letterSpacing: 1 }}>
            💰 YOUR EARNINGS
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
            {[
              { label: "Total Earned", value: `₦${totalEarned.toLocaleString()}`, sub: "all time" },
              { label: "Pending", value: `₦${pendingBalance.toLocaleString()}`, sub: "awaiting payout" },
              { label: "Paid Out", value: `₦${totalPaidOut.toLocaleString()}`, sub: "received" },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontSize: 20, fontWeight: 900 }}>{s.value}</div>
                <div style={{ fontSize: 11, fontWeight: 700, opacity: 0.85, marginTop: 2 }}>{s.label}</div>
                <div style={{ fontSize: 10, opacity: 0.65, marginTop: 1 }}>{s.sub}</div>
              </div>
            ))}
          </div>

          {pendingBalance > 0 && (
            <div style={{
              marginTop: 14, background: "rgba(255,255,255,0.15)",
              borderRadius: "var(--radius-md)", padding: "10px 14px",
              fontSize: 12, fontWeight: 700, textAlign: "center"
            }}>
              🎉 ₦{pendingBalance.toLocaleString()} will be paid to your bank account at the next payout
            </div>
          )}
        </div>

        {/* ── REFERRAL STATS ── */}
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: 10, marginBottom: 16
        }}>
          <div style={{
            background: "var(--surface)", border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)", padding: "14px 12px", textAlign: "center"
          }}>
            <div style={{ fontSize: 28, fontWeight: 900, color: "var(--primary)" }}>
              {referredUsers.length}
            </div>
            <div style={{ fontSize: 11, color: "var(--text3)", marginTop: 4 }}>Total referred</div>
          </div>
          <div style={{
            background: "var(--surface)", border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)", padding: "14px 12px", textAlign: "center"
          }}>
            <div style={{ fontSize: 28, fontWeight: 900, color: "#10b981" }}>
              {paidReferrals.length}
            </div>
            <div style={{ fontSize: 11, color: "var(--text3)", marginTop: 4 }}>Paid (earning)</div>
          </div>
        </div>

        {/* ── REFERRED USERS LIST ── */}
        {referredUsers.length > 0 ? (
          <div style={{ marginBottom: 16 }}>
            <div style={{
              fontSize: 13, fontWeight: 800, color: "var(--text)",
              marginBottom: 10, display: "flex", alignItems: "center", gap: 8
            }}>
              👥 Your Referrals
              <span style={{
                fontSize: 10, fontWeight: 700, background: "var(--surface2)",
                padding: "2px 8px", borderRadius: 10, color: "var(--text3)"
              }}>{referredUsers.length} total</span>
            </div>

            {/* Paid referrals first */}
            {paidReferrals.length > 0 && (
              <>
                <div style={{
                  fontSize: 11, fontWeight: 800, color: "#10b981",
                  marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5
                }}>✅ Paid — earning you ₦500 each</div>
                {paidReferrals.map((u, i) => (
                  <div key={u.id} style={{
                    background: "rgba(16,185,129,0.06)",
                    border: "1px solid rgba(16,185,129,0.25)",
                    borderRadius: "var(--radius-md)",
                    padding: "12px 14px", marginBottom: 8,
                    display: "flex", alignItems: "center", gap: 12
                  }}>
                    <div style={{
                      width: 38, height: 38, borderRadius: "50%",
                      background: "rgba(16,185,129,0.15)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 16, fontWeight: 800, color: "#059669", flexShrink: 0
                    }}>{u.name?.[0]?.toUpperCase() || "?"}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 13, fontWeight: 800, color: "var(--text)" }}>
                        {u.name || "Unknown"}
                      </div>
                      <div style={{ fontSize: 11, color: "var(--text3)" }}>
                        Joined {formatDate(u.createdAt)}
                        {u.paidAt && <span style={{ marginLeft: 6 }}>· Paid {formatDate(u.paidAt)}</span>}
                      </div>
                    </div>
                    <div style={{
                      fontSize: 13, fontWeight: 900, color: "#10b981",
                      background: "rgba(16,185,129,0.1)",
                      padding: "4px 10px", borderRadius: 20,
                      border: "1px solid rgba(16,185,129,0.3)",
                      flexShrink: 0
                    }}>+₦500</div>
                  </div>
                ))}
              </>
            )}

            {/* Unpaid referrals */}
            {unpaidReferrals.length > 0 && (
              <>
                <div style={{
                  fontSize: 11, fontWeight: 800, color: "var(--text3)",
                  marginTop: paidReferrals.length > 0 ? 12 : 0,
                  marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5
                }}>⏳ Signed up — not yet paid</div>
                {unpaidReferrals.map((u, i) => (
                  <div key={u.id} style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-md)",
                    padding: "12px 14px", marginBottom: 8,
                    display: "flex", alignItems: "center", gap: 12
                  }}>
                    <div style={{
                      width: 38, height: 38, borderRadius: "50%",
                      background: "var(--surface2)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 16, fontWeight: 800, color: "var(--text3)", flexShrink: 0
                    }}>{u.name?.[0]?.toUpperCase() || "?"}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 13, fontWeight: 800, color: "var(--text)" }}>
                        {u.name || "Unknown"}
                      </div>
                      <div style={{ fontSize: 11, color: "var(--text3)" }}>
                        Joined {formatDate(u.createdAt)}
                      </div>
                    </div>
                    <div style={{
                      fontSize: 11, fontWeight: 700, color: "var(--text3)",
                      background: "var(--surface2)",
                      padding: "4px 10px", borderRadius: 20,
                      flexShrink: 0
                    }}>Pending</div>
                  </div>
                ))}
                <div style={{
                  background: "rgba(245,158,11,0.07)",
                  border: "1px solid rgba(245,158,11,0.2)",
                  borderRadius: "var(--radius-md)", padding: "10px 12px",
                  fontSize: 12, color: "#92400e", lineHeight: 1.6, marginTop: 4
                }}>
                  💡 These friends signed up but haven't paid yet. You'll earn ₦500 for each one when they upgrade to full access.
                </div>
              </>
            )}
          </div>
        ) : (
          <div style={{
            background: "var(--surface)", border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)", padding: "28px 20px",
            textAlign: "center", marginBottom: 16
          }}>
            <div style={{ fontSize: 36, marginBottom: 10 }}>👥</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", marginBottom: 6 }}>
              No referrals yet
            </div>
            <div style={{ fontSize: 12, color: "var(--text3)", lineHeight: 1.65 }}>
              Share your referral code and start earning. Every friend who signs up under your code earns you ₦500 when they pay.
            </div>
          </div>
        )}

        {/* ── SHARE YOUR CODE ── */}
        <div style={{
          background: "linear-gradient(135deg, #1e293b, #334155)",
          borderRadius: "var(--radius-xl)",
          padding: "20px", marginBottom: 16, color: "#fff"
        }}>
          <div style={{ fontSize: 12, fontWeight: 700, opacity: 0.7, marginBottom: 4, letterSpacing: 1 }}>
            🔗 YOUR REFERRAL CODE
          </div>
          <div style={{
            fontSize: 30, fontWeight: 900, letterSpacing: "0.15em",
            marginBottom: 16, color: "#a5f3fc"
          }}>
            {userData?.referralCode || "—"}
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
              💬 Share on WhatsApp
            </button>
          </div>
        </div>

        {/* ── HOW IT WORKS ── */}
        <div style={{
          background: "var(--surface)", border: "1px solid var(--border)",
          borderRadius: "var(--radius-lg)", padding: "16px", marginBottom: 16
        }}>
          <div style={{ fontSize: 13, fontWeight: 800, color: "var(--text)", marginBottom: 12 }}>
            How earnings work
          </div>
          {[
            { icon: "1️⃣", text: "Share your code with friends preparing for UNIBEN Post-UTME" },
            { icon: "2️⃣", text: "They sign up using your code — permanently linked to you" },
            { icon: "3️⃣", text: "When they pay ₦2,500, ₦500 is credited to your balance" },
            { icon: "4️⃣", text: "We pay your balance to your bank account at payout time" },
          ].map((s, i) => (
            <div key={i} style={{
              display: "flex", gap: 10, padding: "6px 0",
              borderBottom: i < 3 ? "1px solid var(--border)" : "none"
            }}>
              <span style={{ fontSize: 16, flexShrink: 0 }}>{s.icon}</span>
              <span style={{ fontSize: 12, color: "var(--text2)", lineHeight: 1.6 }}>{s.text}</span>
            </div>
          ))}
        </div>

        {/* ── WHATSAPP CHANNEL ── */}
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
            <div style={{ fontSize: 12, opacity: 0.9 }}>
              Get notified when payouts go live
            </div>
          </div>
          <span style={{ fontSize: 16, opacity: 0.8 }}>→</span>
        </div>

      </div>
    </div>
  )
}

export default Referrals