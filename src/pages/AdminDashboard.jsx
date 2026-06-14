import { useState, useEffect } from "react"
import { auth, db } from "../firebase"
import {
  collection, getDocs, orderBy, query, where, limit,
  doc, updateDoc, deleteDoc, setDoc, addDoc, serverTimestamp
} from "firebase/firestore"
import { sendPasswordResetEmail } from "firebase/auth"
import { fetchUserCBTHistory, formatDate, formatTime } from "../utils/cbtHistory"

const ADMIN_EMAIL = "jce680@gmail.com"

const getScoreColor = (pct) => pct >= 70 ? "#16a34a" : pct >= 50 ? "#d97706" : "#dc2626"
const getScoreBg = (pct) => pct >= 70 ? "rgba(34,197,94,0.08)" : pct >= 50 ? "rgba(245,158,11,0.08)" : "rgba(239,68,68,0.08)"

const AdminDashboard = ({ onNavigate, onBack, authUser }) => {
  const [users, setUsers] = useState([])
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [selected, setSelected] = useState(null)
  const [actionMsg, setActionMsg] = useState("")
  const [notifTitle, setNotifTitle] = useState("")
  const [notifBody, setNotifBody] = useState("")
  const [notifType, setNotifType] = useState("feature")
  const [sendingNotif, setSendingNotif] = useState(false)
  const [suggestions, setSuggestions] = useState([])
  const [actionError, setActionError] = useState("")
  const [tab, setTab] = useState("users")
  const [planFilter, setPlanFilter] = useState("all")
  const [replyingTo, setReplyingTo] = useState(null)
  const [replyText, setReplyText] = useState("")
  const [sendingReply, setSendingReply] = useState(false)
  const [freeAccessMode, setFreeAccessModeLocal] = useState(false)
  const [freeAccessLoading, setFreeAccessLoading] = useState(false)
  const [dmTarget, setDmTarget] = useState(null)
  const [dmText, setDmText] = useState("")
  const [sendingDm, setSendingDm] = useState(false)

  // User progress modal
  const [progressUser, setProgressUser] = useState(null)
  const [progressData, setProgressData] = useState([])
  const [progressLoading, setProgressLoading] = useState(false)

  useEffect(() => {
    const loadFreeAccess = async () => {
      try {
        const snap = await import("firebase/firestore").then(({ getDoc, doc: d }) => getDoc(d(db, "appSettings", "global")))
        if (snap.exists()) setFreeAccessModeLocal(snap.data().freeAccessMode === true)
      } catch(e) {}
    }
    loadFreeAccess()
  }, [])

  if (authUser?.email !== ADMIN_EMAIL) {
    return (
      <div className="ee-page">
        <header className="ee-header">
          <button className="ee-back-btn" onClick={() => onBack ? onBack() : onNavigate("home")}>← Back</button>
        </header>
        <div className="ee-content">
          <div className="ee-empty">
            <span className="ee-empty-icon">🚫</span>
            <p style={{ fontWeight: 700, color: "var(--text)" }}>Access Denied</p>
            <p style={{ fontSize: 13, color: "var(--text2)" }}>This page is only for administrators.</p>
          </div>
        </div>
      </div>
    )
  }

  useEffect(() => {
    fetchUsers()
    fetchMessages()
  }, [])

  // ── View a user's progress ──
  const handleViewProgress = async (user) => {
    setProgressUser(user)
    setProgressLoading(true)
    const records = await fetchUserCBTHistory(user.id)
    setProgressData(records)
    setProgressLoading(false)
  }

  // Build subject stats from Firestore CBT records
  const buildProgressStats = (records) => {
    const subjectMap = {}
    let totalCorrect = 0
    let totalAnswered = 0

    records.forEach(r => {
      totalCorrect += r.score || 0
      totalAnswered += r.total || 0
      if (r.subjectBreakdown) {
        Object.entries(r.subjectBreakdown).forEach(([subj, stats]) => {
          if (!subjectMap[subj]) subjectMap[subj] = { score: 0, total: 0 }
          subjectMap[subj].score += stats.score || 0
          subjectMap[subj].total += stats.total || 0
        })
      }
    })

    const overallPct = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0
    const weakAreas = Object.entries(subjectMap)
      .map(([subj, s]) => ({ subj, pct: Math.round((s.score / s.total) * 100), ...s }))
      .filter(s => s.pct < 50)
      .sort((a, b) => a.pct - b.pct)

    return { subjectMap, overallPct, totalCorrect, totalAnswered, weakAreas }
  }

  const sendNotification = async () => {
    if (!notifTitle.trim() || !notifBody.trim()) { alert("Please fill in title and message"); return }
    setSendingNotif(true)
    try {
      await addDoc(collection(db, "notifications"), {
        title: notifTitle.trim(),
        body: notifBody.trim(),
        type: notifType,
        createdAt: serverTimestamp(),
        sentBy: "admin"
      })
      setNotifTitle("")
      setNotifBody("")
      setActionMsg("✅ Notification sent to all users!")
    } catch(e) {
      setActionMsg("❌ Failed to send notification")
    }
    setSendingNotif(false)
  }

  const handleToggleFreeAccess = async () => {
    const newMode = !freeAccessMode
    const msg = newMode
      ? "Enable FREE ACCESS MODE? All users will get full access until you turn it off."
      : "Disable FREE ACCESS MODE? Free users will return to the paywall."
    if (!window.confirm(msg)) return
    setFreeAccessLoading(true)
    try {
      await setDoc(doc(db, "appSettings", "global"), {
        freeAccessMode: newMode,
        updatedAt: serverTimestamp(),
        updatedBy: authUser?.email,
      }, { merge: true })
      setFreeAccessModeLocal(newMode)
      setActionMsg(newMode
        ? "🎉 Free Access Mode ENABLED!"
        : "🔒 Free Access Mode DISABLED — paywall restored."
      )
    } catch(e) {
      setActionError("Failed to update free access mode.")
    }
    setFreeAccessLoading(false)
  }

  const fetchUsers = async () => {
    setLoading(true)
    try {
      const q = query(collection(db, "users"), orderBy("createdAt", "desc"))
      const snapshot = await getDocs(q)
      setUsers(snapshot.docs.map(d => ({ id: d.id, ...d.data() })))
    } catch (e) { console.error(e) }
    setLoading(false)
  }

  const fetchMessages = async () => {
    try {
      const q = query(collection(db, "messages"), orderBy("createdAt", "desc"))
      const snapshot = await getDocs(q)
      setMessages(snapshot.docs.map(d => ({ id: d.id, ...d.data() })))
    } catch (e) { console.error(e) }
  }

  const handleMarkRead = async (msgId) => {
    await updateDoc(doc(db, "messages", msgId), { status: "read" })
    setMessages(prev => prev.map(m => m.id === msgId ? { ...m, status: "read" } : m))
  }

  const handleDeleteMessage = async (msgId) => {
    await deleteDoc(doc(db, "messages", msgId))
    setMessages(prev => prev.filter(m => m.id !== msgId))
  }

  const handleReply = async (msg) => {
    if (!replyText.trim()) return
    setSendingReply(true)
    try {
      const { addDoc, serverTimestamp: st } = await import("firebase/firestore")
      await addDoc(collection(db, "messages", msg.id, "replies"), {
        replyText: replyText.trim(), repliedAt: st(), repliedBy: authUser?.email,
      })
      await updateDoc(doc(db, "messages", msg.id), {
        status: "read", replied: true, lastReply: replyText.trim(), repliedAt: new Date().toISOString(),
      })
      setMessages(prev => prev.map(m =>
        m.id === msg.id ? { ...m, status: "read", replied: true, lastReply: replyText.trim() } : m
      ))
      setReplyText(""); setReplyingTo(null)
      setActionMsg(`✅ Reply sent to ${msg.username}`)
    } catch (e) { setActionError("Failed to save reply.") }
    setSendingReply(false)
  }

  const handleSendDm = async (user) => {
    if (!dmText.trim()) return
    setSendingDm(true)
    try {
      await addDoc(collection(db, "messages"), {
        uid: user.id, username: user.name || "User", email: user.email || "",
        message: dmText.trim(), createdAt: serverTimestamp(),
        status: "read", fromAdmin: true, lastReply: dmText.trim(),
        replied: true, repliedAt: new Date().toISOString(),
      })
      setActionMsg(`✅ Message sent to ${user.name}`)
      setDmText(""); setDmTarget(null)
    } catch(e) { setActionError("Failed to send message.") }
    setSendingDm(false)
  }

  const handlePasswordReset = async (email) => {
    setActionMsg(""); setActionError("")
    try {
      await sendPasswordResetEmail(auth, email)
      setActionMsg(`✅ Password reset email sent to ${email}`)
    } catch (e) { setActionError("Failed to send reset email.") }
  }

  const handleDisableUser = async (userId, currentStatus) => {
    try {
      await updateDoc(doc(db, "users", userId), { disabled: !currentStatus })
      setActionMsg(`✅ User ${currentStatus ? "enabled" : "disabled"} successfully`)
      fetchUsers(); setSelected(null)
    } catch (e) { setActionError("Failed to update user status.") }
  }

  const handleDeleteUser = async (userId, username) => {
    if (!window.confirm(`Delete account for "${username}"? This cannot be undone.`)) return
    try {
      await deleteDoc(doc(db, "users", userId))
      setActionMsg(`✅ User "${username}" deleted`)
      setSelected(null); fetchUsers()
    } catch (e) { setActionError("Failed to delete user.") }
  }

  const formatDateTime = (ts) => {
    if (!ts) return "—"
    const date = ts.toDate ? ts.toDate() : new Date(ts)
    return date.toLocaleDateString("en-NG", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })
  }

  const filtered = users.filter(u => {
    const matchesSearch = !search ||
      u.name?.toLowerCase().includes(search.toLowerCase()) ||
      u.email?.toLowerCase().includes(search.toLowerCase())
    const matchesPlan = planFilter === "all" ? true : planFilter === "paid" ? u.isPaid : !u.isPaid
    return matchesSearch && matchesPlan
  }).sort((a, b) => {
    const aPending = (a.referralEarnings || 0) - (a.referralPaidOut || 0)
    const bPending = (b.referralEarnings || 0) - (b.referralPaidOut || 0)
    if (aPending !== bPending) return bPending - aPending
    if (a.isPaid !== b.isPaid) return b.isPaid ? 1 : -1
    return new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
  })

  const totalUsers = users.length
  const paidUsers = users.filter(u => u.isPaid).length
  const freeUsers = users.filter(u => !u.isPaid).length
  const today = new Date().toDateString()
  const activeToday = users.filter(u => {
    if (!u.lastLogin) return false
    const d = u.lastLogin.toDate ? u.lastLogin.toDate() : new Date(u.lastLogin)
    return d.toDateString() === today
  }).length
  const PRICE = 3000
  const PAYSTACK_FEE = 145
  const totalReferralOwed = users.reduce((sum, u) => sum + ((u.referralEarnings || 0) - (u.referralPaidOut || 0)), 0)
  const totalReferralPaid = users.reduce((sum, u) => sum + (u.referralPaidOut || 0), 0)
  const grossRevenue = paidUsers * (PRICE - PAYSTACK_FEE)
  const totalRevenue = grossRevenue - totalReferralPaid

  return (
    <div className="ee-page">

      {/* ===== USER PROGRESS MODAL ===== */}
      {progressUser && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 3000,
          background: "rgba(0,0,0,0.6)",
          display: "flex", alignItems: "flex-end"
        }} onClick={() => setProgressUser(null)}>
          <div onClick={e => e.stopPropagation()} style={{
            background: "var(--bg)",
            borderRadius: "20px 20px 0 0",
            width: "100%", maxHeight: "90vh",
            overflowY: "auto", padding: "20px 20px 40px"
          }}>
            {/* Handle */}
            <div style={{ width: 40, height: 4, borderRadius: 2, background: "var(--border)", margin: "0 auto 16px" }} />

            {/* Header */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{
                width: 44, height: 44, borderRadius: "50%",
                background: "var(--primary-light)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 20, fontWeight: 800, color: "var(--primary)", flexShrink: 0
              }}>{progressUser.name?.[0]?.toUpperCase() || "?"}</div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 800, color: "var(--text)" }}>{progressUser.name}</div>
                <div style={{ fontSize: 12, color: "var(--text3)" }}>{progressUser.email}</div>
              </div>
              <button onClick={() => setProgressUser(null)} style={{
                marginLeft: "auto", background: "none", border: "none",
                fontSize: 20, cursor: "pointer", color: "var(--text3)"
              }}>✕</button>
            </div>

            {progressLoading ? (
              <div style={{ textAlign: "center", padding: "40px 0", color: "var(--text3)" }}>
                Loading progress...
              </div>
            ) : progressData.length === 0 ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>📊</div>
                <p style={{ fontWeight: 700, color: "var(--text)", marginBottom: 6 }}>No CBT records yet</p>
                <p style={{ fontSize: 13, color: "var(--text3)" }}>
                  This user hasn't completed any CBT tests since the Firestore sync was added.
                </p>
              </div>
            ) : (() => {
              const { subjectMap, overallPct, totalCorrect, totalAnswered, weakAreas } = buildProgressStats(progressData)
              const personalBest = progressData.reduce((best, r) => (!best || r.percentage > best.percentage) ? r : best, null)

              return (
                <>
                  {/* Overall score */}
                  <div style={{
                    background: `linear-gradient(135deg, ${getScoreColor(overallPct)}22, ${getScoreColor(overallPct)}11)`,
                    border: `1.5px solid ${getScoreColor(overallPct)}44`,
                    borderRadius: "var(--radius-xl)", padding: "16px", marginBottom: 16
                  }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: "var(--text2)", marginBottom: 10 }}>Overall Performance</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                      <div style={{
                        width: 70, height: 70, borderRadius: "50%", flexShrink: 0,
                        background: `conic-gradient(${getScoreColor(overallPct)} ${overallPct * 3.6}deg, var(--border) 0deg)`,
                        display: "flex", alignItems: "center", justifyContent: "center"
                      }}>
                        <div style={{
                          width: 54, height: 54, borderRadius: "50%",
                          background: "var(--surface)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: 15, fontWeight: 900, color: getScoreColor(overallPct)
                        }}>{overallPct}%</div>
                      </div>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, flex: 1 }}>
                        {[
                          { label: "Correct", value: totalCorrect, color: "#16a34a" },
                          { label: "Total Qs", value: totalAnswered, color: "var(--text)" },
                          { label: "Tests taken", value: progressData.length, color: "var(--primary)" },
                          { label: "Personal best", value: `${personalBest?.percentage || 0}%`, color: "#f59e0b" },
                        ].map((s, i) => (
                          <div key={i}>
                            <div style={{ fontSize: 16, fontWeight: 900, color: s.color }}>{s.value}</div>
                            <div style={{ fontSize: 10, color: "var(--text3)" }}>{s.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Subject breakdown */}
                  {Object.keys(subjectMap).length > 0 && (
                    <>
                      <div style={{ fontSize: 13, fontWeight: 800, color: "var(--text)", marginBottom: 10 }}>
                        📚 Subject Breakdown
                      </div>
                      {Object.entries(subjectMap)
                        .map(([subj, s]) => ({ subj, pct: Math.round((s.score / s.total) * 100), ...s }))
                        .sort((a, b) => a.pct - b.pct)
                        .map(({ subj, pct, score, total }) => (
                          <div key={subj} style={{
                            background: getScoreBg(pct),
                            border: `1px solid ${getScoreColor(pct)}33`,
                            borderRadius: "var(--radius-md)", padding: "12px 14px",
                            marginBottom: 8, display: "flex", alignItems: "center", gap: 12
                          }}>
                            <div style={{ flex: 1 }}>
                              <div style={{ fontSize: 13, fontWeight: 800, color: "var(--text)", marginBottom: 4 }}>{subj}</div>
                              <div style={{ height: 5, borderRadius: 3, background: "var(--border)" }}>
                                <div style={{ height: "100%", width: `${pct}%`, borderRadius: 3, background: getScoreColor(pct) }} />
                              </div>
                              <div style={{ fontSize: 10, color: "var(--text3)", marginTop: 3 }}>{score}/{total} correct</div>
                            </div>
                            <div style={{ fontSize: 16, fontWeight: 900, color: getScoreColor(pct), minWidth: 44, textAlign: "right" }}>
                              {pct}%
                            </div>
                          </div>
                        ))}
                    </>
                  )}

                  {/* Weak areas */}
                  {weakAreas.length > 0 && (
                    <div style={{
                      background: "rgba(239,68,68,0.05)", border: "1.5px solid rgba(239,68,68,0.2)",
                      borderRadius: "var(--radius-lg)", padding: "14px", marginTop: 8, marginBottom: 16
                    }}>
                      <div style={{ fontSize: 13, fontWeight: 800, color: "#dc2626", marginBottom: 10 }}>
                        ⚠️ Weak Areas ({weakAreas.length} subjects below 50%)
                      </div>
                      {weakAreas.map(({ subj, pct }, i) => (
                        <div key={i} style={{
                          display: "flex", justifyContent: "space-between",
                          padding: "6px 0", borderBottom: i < weakAreas.length - 1 ? "1px solid rgba(239,68,68,0.1)" : "none"
                        }}>
                          <span style={{ fontSize: 13, fontWeight: 700, color: "var(--text)" }}>{subj}</span>
                          <span style={{ fontSize: 13, fontWeight: 900, color: "#dc2626" }}>{pct}%</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Recent tests */}
                  <div style={{ fontSize: 13, fontWeight: 800, color: "var(--text)", marginBottom: 10 }}>
                    🕐 Recent Tests
                  </div>
                  {progressData.slice(0, 10).map((r, i) => {
                    const color = getScoreColor(r.percentage || 0)
                    return (
                      <div key={i} style={{
                        display: "flex", alignItems: "center", gap: 12,
                        background: "var(--surface)", border: "1px solid var(--border)",
                        borderRadius: "var(--radius-md)", padding: "10px 14px", marginBottom: 8
                      }}>
                        <div style={{
                          width: 44, height: 44, borderRadius: "50%", flexShrink: 0,
                          border: `2.5px solid ${color}`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: 12, fontWeight: 900, color,
                          background: "var(--surface2)"
                        }}>{r.percentage}%</div>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 13, fontWeight: 800, color: "var(--text)" }}>
                            {r.score}/{r.total} correct
                          </div>
                          <div style={{ fontSize: 11, color: "var(--text3)" }}>
                            {formatDate(r.date)}
                            {r.timeTaken && <span style={{ marginLeft: 8 }}>⏱ {formatTime(r.timeTaken)}</span>}
                          </div>
                          {r.subjects?.length > 0 && (
                            <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 4 }}>
                              {r.subjects.map(s => (
                                <span key={s} style={{
                                  fontSize: 9, fontWeight: 700, padding: "1px 6px",
                                  borderRadius: 10, background: "var(--primary-light)", color: "var(--primary-text)"
                                }}>{s}</span>
                              ))}
                            </div>
                          )}
                        </div>
                        <div style={{ height: 36, width: 36, position: "relative", flexShrink: 0 }}>
                          <svg viewBox="0 0 36 36" style={{ transform: "rotate(-90deg)" }}>
                            <circle cx="18" cy="18" r="15" fill="none" stroke="var(--border)" strokeWidth="3" />
                            <circle cx="18" cy="18" r="15" fill="none" stroke={color} strokeWidth="3"
                              strokeDasharray={`${(r.percentage / 100) * 94} 94`} strokeLinecap="round" />
                          </svg>
                        </div>
                      </div>
                    )
                  })}
                </>
              )
            })()}

            <button onClick={() => setProgressUser(null)} className="ee-btn ee-btn-secondary">
              Close
            </button>
          </div>
        </div>
      )}

      <header className="ee-header">
        <button className="ee-back-btn" onClick={() => onBack ? onBack() : onNavigate("home")}>← Back</button>
        <span style={{ fontWeight: 800, fontSize: "15px" }}>🛡️ Admin</span>
        <button onClick={fetchUsers} style={{
          background: "none", border: "1px solid var(--border)",
          borderRadius: "var(--radius-sm)", padding: "4px 10px",
          fontSize: 11, fontWeight: 700, color: "var(--text2)",
          cursor: "pointer", fontFamily: "var(--font-main)"
        }}>↻ Refresh</button>
      </header>

      <div className="ee-content">

        {actionMsg && (
          <div style={{
            background: "rgba(34,201,122,0.1)", border: "1px solid rgba(34,201,122,0.3)",
            borderRadius: "var(--radius-md)", padding: "10px 14px",
            fontSize: 13, color: "var(--success)", marginBottom: 12, fontWeight: 700
          }}>{actionMsg}</div>
        )}
        {actionError && (
          <div style={{
            background: "rgba(255,107,107,0.1)", border: "1px solid rgba(255,107,107,0.3)",
            borderRadius: "var(--radius-md)", padding: "10px 14px",
            fontSize: 13, color: "var(--accent)", marginBottom: 12
          }}>{actionError}</div>
        )}

        {/* Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
          {["users", "stats", "messages"].map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              flex: 1, padding: "10px",
              borderRadius: "var(--radius-md)",
              border: tab === t ? "2px solid var(--primary)" : "1px solid var(--border)",
              background: tab === t ? "var(--primary-light)" : "var(--surface)",
              color: tab === t ? "var(--primary-text)" : "var(--text)",
              fontWeight: 800, fontSize: 12, cursor: "pointer",
              fontFamily: "var(--font-main)", textTransform: "capitalize",
              position: "relative"
            }}>
              {t === "users" ? "👥 Users" : t === "stats" ? "📊 Stats" : (
                <>
                  💬 Messages
                  {messages.filter(m => m.status === "unread").length > 0 && (
                    <span style={{
                      position: "absolute", top: -6, right: -6,
                      background: "var(--accent)", color: "#fff",
                      borderRadius: "50%", width: 18, height: 18,
                      fontSize: 10, fontWeight: 800,
                      display: "flex", alignItems: "center", justifyContent: "center"
                    }}>
                      {messages.filter(m => m.status === "unread").length}
                    </span>
                  )}
                </>
              )}
            </button>
          ))}
        </div>

        {/* ===== STATS TAB ===== */}
        {tab === "stats" && (
          <>
            {/* Free Access Toggle */}
            <div style={{
              background: freeAccessMode ? "rgba(34,197,94,0.08)" : "var(--surface)",
              border: `2px solid ${freeAccessMode ? "#22c55e" : "var(--border)"}`,
              borderRadius: "var(--radius-lg)", padding: "16px 18px", marginBottom: 20,
            }}>
              <div style={{ fontSize: 15, fontWeight: 800, color: "var(--text)", marginBottom: 4 }}>
                {freeAccessMode ? "🟢" : "🔴"} Free Access Mode
                {freeAccessMode && <span style={{ fontSize: 10, fontWeight: 800, padding: "2px 8px", background: "#22c55e", color: "#fff", borderRadius: 20, marginLeft: 8 }}>ACTIVE</span>}
              </div>
              <div style={{ fontSize: 12, color: "var(--text2)", marginBottom: 12, lineHeight: 1.5 }}>
                {freeAccessMode ? "All users currently have full access." : "Paywall is active. Only paid users have full access."}
              </div>
              <button onClick={handleToggleFreeAccess} disabled={freeAccessLoading} style={{
                width: "100%", padding: "12px",
                background: freeAccessMode ? "rgba(239,68,68,0.1)" : "rgba(34,197,94,0.1)",
                color: freeAccessMode ? "#dc2626" : "#15803d",
                border: `1.5px solid ${freeAccessMode ? "rgba(239,68,68,0.4)" : "rgba(34,197,94,0.4)"}`,
                borderRadius: "var(--radius-md)", fontWeight: 800, fontSize: 14,
                cursor: freeAccessLoading ? "not-allowed" : "pointer", fontFamily: "var(--font-main)"
              }}>
                {freeAccessLoading ? "Updating..." : freeAccessMode ? "🔒 Disable Free Access" : "🎉 Enable Free Access"}
              </button>
            </div>

            {/* Send Notification */}
            <div style={{
              background: "var(--surface)", border: "1px solid var(--border)",
              borderRadius: "var(--radius-lg)", padding: "16px 18px", marginBottom: 20,
            }}>
              <div style={{ fontSize: 14, fontWeight: 800, color: "var(--text)", marginBottom: 12 }}>
                📢 Send Notification to All Users
              </div>
              <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
                {["feature", "exam", "promo", "warning"].map(t => (
                  <button key={t} onClick={() => setNotifType(t)} style={{
                    flex: 1, padding: "6px 4px", borderRadius: "var(--radius-sm)",
                    border: notifType === t ? "2px solid var(--primary)" : "1px solid var(--border)",
                    background: notifType === t ? "var(--primary-light)" : "var(--surface2)",
                    fontSize: 10, fontWeight: 800, cursor: "pointer", fontFamily: "var(--font-main)",
                    color: notifType === t ? "var(--primary-text)" : "var(--text2)"
                  }}>
                    {t === "feature" ? "🆕" : t === "exam" ? "📋" : t === "promo" ? "🎉" : "⚠️"} {t}
                  </button>
                ))}
              </div>
              <input
                value={notifTitle}
                onChange={e => setNotifTitle(e.target.value)}
                placeholder="Notification title..."
                style={{
                  width: "100%", padding: "10px 12px", marginBottom: 8,
                  border: "1px solid var(--border)", borderRadius: "var(--radius-md)",
                  background: "var(--surface2)", color: "var(--text)", fontSize: 13,
                  fontFamily: "var(--font-main)", outline: "none", boxSizing: "border-box"
                }}
              />
              <textarea
                value={notifBody}
                onChange={e => setNotifBody(e.target.value)}
                placeholder="Notification message..."
                rows={3}
                style={{
                  width: "100%", padding: "10px 12px", marginBottom: 10,
                  border: "1px solid var(--border)", borderRadius: "var(--radius-md)",
                  background: "var(--surface2)", color: "var(--text)", fontSize: 13,
                  fontFamily: "var(--font-main)", outline: "none", resize: "none",
                  boxSizing: "border-box", lineHeight: 1.5
                }}
              />
              <button
                onClick={sendNotification}
                disabled={sendingNotif || !notifTitle.trim() || !notifBody.trim()}
                style={{
                  width: "100%", padding: "12px",
                  background: "var(--primary)", color: "#fff", border: "none",
                  borderRadius: "var(--radius-md)", fontWeight: 800, fontSize: 14,
                  cursor: sendingNotif ? "not-allowed" : "pointer", fontFamily: "var(--font-main)",
                  opacity: !notifTitle.trim() || !notifBody.trim() ? 0.5 : 1
                }}
              >
                {sendingNotif ? "Sending..." : "📢 Send to All Users"}
              </button>
            </div>

            {/* Stats grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 20 }}>
              {[
                { icon: "👥", label: "Total Users", value: totalUsers, color: "var(--primary)" },
                { icon: "🟢", label: "Active Today", value: activeToday, color: "var(--primary)" },
                { icon: "💎", label: "Paid Users", value: paidUsers, color: "#22c55e" },
                { icon: "🆓", label: "Free Users", value: freeUsers, color: "#f59e0b" },
                { icon: "💰", label: "Net Revenue", value: `₦${totalRevenue.toLocaleString()}`, color: "#22c55e" },
                { icon: "⏳", label: "Referral Owed", value: `₦${totalReferralOwed.toLocaleString()}`, color: "#ef4444" },
              ].map((s, i) => (
                <div key={i} style={{
                  background: "var(--surface)", border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)", padding: "16px", textAlign: "center"
                }}>
                  <div style={{ fontSize: 28, marginBottom: 6 }}>{s.icon}</div>
                  <div style={{ fontSize: 22, fontWeight: 800, color: s.color }}>{s.value}</div>
                  <div style={{ fontSize: 11, color: "var(--text3)", marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Recent signups */}
            <div style={{ fontSize: 11, fontWeight: 800, color: "var(--text3)", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 10 }}>
              Recent Signups
            </div>
            {users.slice(0, 5).map((u, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 12,
                background: "var(--surface)", border: "1px solid var(--border)",
                borderRadius: "var(--radius-md)", padding: "12px 14px", marginBottom: 8
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: "50%", background: "var(--primary-light)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 16, fontWeight: 800, color: "var(--primary)", flexShrink: 0
                }}>{u.name?.[0]?.toUpperCase() || "?"}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)" }}>{u.name || "—"}</div>
                  <div style={{ fontSize: 11, color: "var(--text3)" }}>{formatDate(u.createdAt)}</div>
                </div>
                <span style={{
                  fontSize: 10, fontWeight: 700, background: "var(--primary-light)",
                  color: "var(--primary-text)", padding: "2px 8px", borderRadius: "var(--radius-pill)"
                }}>{u.faculty || "—"}</span>
              </div>
            ))}
          </>
        )}

        {/* ===== USERS TAB ===== */}
        {tab === "users" && (
          <>
            <input
              type="text" placeholder="🔍 Search by name or email..."
              value={search} onChange={e => setSearch(e.target.value)}
              style={{
                width: "100%", padding: "12px 14px", marginBottom: 16,
                border: "1.5px solid var(--border)", borderRadius: "var(--radius-md)",
                background: "var(--surface)", fontSize: 14,
                fontFamily: "var(--font-main)", color: "var(--text)",
                outline: "none", boxSizing: "border-box"
              }}
            />

            <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
              {[
                { key: "all", label: `All (${users.length})` },
                { key: "paid", label: `💎 Paid (${paidUsers})` },
                { key: "free", label: `🆓 Free (${freeUsers})` },
              ].map(f => (
                <button key={f.key} onClick={() => setPlanFilter(f.key)} style={{
                  flex: 1, padding: "8px 4px", borderRadius: "var(--radius-md)",
                  border: planFilter === f.key ? "2px solid var(--primary)" : "1px solid var(--border)",
                  background: planFilter === f.key ? "var(--primary-light)" : "var(--surface)",
                  color: planFilter === f.key ? "var(--primary-text)" : "var(--text2)",
                  fontWeight: 800, fontSize: 11, cursor: "pointer", fontFamily: "var(--font-main)"
                }}>{f.label}</button>
              ))}
            </div>

            {loading ? (
              <div style={{ textAlign: "center", padding: "40px 0", color: "var(--text3)" }}>Loading users...</div>
            ) : filtered.length === 0 ? (
              <div className="ee-empty"><span className="ee-empty-icon">🔍</span><p>No users found</p></div>
            ) : (
              <>
                <div style={{ fontSize: 12, color: "var(--text3)", marginBottom: 10 }}>
                  {filtered.length} user{filtered.length !== 1 ? "s" : ""}
                </div>

                {filtered.map((user) => (
                  <div key={user.id}>
                    <div
                      onClick={() => setSelected(selected?.id === user.id ? null : user)}
                      style={{
                        display: "flex", alignItems: "center", gap: 12,
                        background: selected?.id === user.id ? "var(--primary-light)" : "var(--surface)",
                        border: selected?.id === user.id ? "1.5px solid var(--primary)" : "1px solid var(--border)",
                        borderRadius: selected?.id === user.id ? "var(--radius-md) var(--radius-md) 0 0" : "var(--radius-md)",
                        padding: "12px 14px", marginBottom: selected?.id === user.id ? 0 : 8,
                        cursor: "pointer", transition: "all 0.15s"
                      }}
                    >
                      <div style={{
                        width: 40, height: 40, borderRadius: "50%",
                        background: user.disabled ? "var(--surface3)" : "var(--primary-light)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 18, fontWeight: 800,
                        color: user.disabled ? "var(--text3)" : "var(--primary)", flexShrink: 0
                      }}>{user.name?.[0]?.toUpperCase() || "?"}</div>

                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 14, fontWeight: 800, color: "var(--text)", display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
                          {user.name || "Unknown"}
                          <span style={{
                            fontSize: 9, fontWeight: 800,
                            background: user.isPaid ? "rgba(34,201,122,0.15)" : "rgba(245,158,11,0.15)",
                            color: user.isPaid ? "#15803d" : "#92400e",
                            padding: "2px 7px", borderRadius: "var(--radius-pill)",
                            border: `1px solid ${user.isPaid ? "rgba(34,201,122,0.4)" : "rgba(245,158,11,0.4)"}`,
                          }}>{user.isPaid ? "💎 PAID" : "🆓 FREE"}</span>
                          {user.disabled && (
                            <span style={{ fontSize: 9, fontWeight: 700, background: "rgba(255,107,107,0.2)", color: "var(--accent)", padding: "1px 6px", borderRadius: "var(--radius-pill)" }}>DISABLED</span>
                          )}
                        </div>
                        <div style={{ fontSize: 11, color: "var(--text3)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{user.email || "—"}</div>
                        <div style={{ fontSize: 10, color: "var(--text3)", marginTop: 2 }}>Joined {formatDate(user.createdAt)}</div>
                      </div>

                      <span style={{
                        fontSize: 10, fontWeight: 700, flexShrink: 0,
                        background: "var(--surface2)", color: "var(--text2)",
                        padding: "2px 8px", borderRadius: "var(--radius-pill)"
                      }}>{user.faculty || "No faculty"}</span>
                    </div>

                    {/* Expanded actions */}
                    {selected?.id === user.id && (
                      <div style={{
                        background: "var(--surface2)",
                        border: "1.5px solid var(--primary)", borderTop: "none",
                        borderRadius: "0 0 var(--radius-md) var(--radius-md)",
                        padding: "14px 16px", marginBottom: 8
                      }}>
                        {/* User details */}
                        <div style={{ marginBottom: 12 }}>
                          {[
                            { label: "WhatsApp", value: user.phone ? `0${user.phone.replace(/^0/, "")}` : "Not added" },
                            { label: "Recovery Email", value: user.email && !user.email.includes("@examedgeng.com") ? user.email : "Not added" },
                            { label: "Plan", value: user.isPaid ? "💎 Paid" : "🆓 Free" },
                            { label: "Faculty", value: user.faculty || "⚠️ Not set" },
                            { label: "Exam Type", value: user.examType || "Not set" },
                            { label: "Referral Code", value: user.referralCode || "—" },
                            { label: "Referred By", value: user.referredBy ? (users.find(u => u.id === user.referredBy)?.name || user.referredBy) : "No" },
                            { label: "Referral Owed", value: `₦${((user.referralEarnings || 0) - (user.referralPaidOut || 0)).toLocaleString()}` },
                            { label: "Joined", value: formatDateTime(user.createdAt) },
                            { label: "Last Login", value: formatDateTime(user.lastLogin) },
                          ].map((item, j) => (
                            <div key={j} style={{
                              display: "flex", justifyContent: "space-between",
                              fontSize: 12, padding: "4px 0",
                              borderBottom: j < 8 ? "1px solid var(--border)" : "none"
                            }}>
                              <span style={{ color: "var(--text3)", fontWeight: 700 }}>{item.label}</span>
                              <span style={{ color: "var(--text)", fontWeight: 600 }}>{item.value}</span>
                            </div>
                          ))}
                        </div>

                        {/* Action buttons */}
                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>

                          {/* ── VIEW PROGRESS ── */}
                          <button
                            onClick={() => handleViewProgress(user)}
                            style={{
                              padding: "10px", borderRadius: "var(--radius-md)",
                              background: "rgba(102,126,234,0.1)", color: "#667eea",
                              border: "1px solid rgba(102,126,234,0.3)",
                              fontWeight: 800, fontSize: 13,
                              cursor: "pointer", fontFamily: "var(--font-main)"
                            }}
                          >
                            📊 View Progress & CBT History
                          </button>

                          {!user.faculty && (
                            <button onClick={async () => {
                              const faculty = window.prompt(`Set faculty for ${user.name}:\n\nOptions:\n- engineering\n- lifesciences\n- management\n- arts`, "engineering")
                              if (!faculty) return
                              await updateDoc(doc(db, "users", user.id), { faculty: faculty.trim().toLowerCase(), examType: "postutme", university: "UNIBEN" })
                              setActionMsg(`✅ Faculty set for ${user.name}`)
                              fetchUsers(); setSelected(null)
                            }} style={{
                              padding: "10px", borderRadius: "var(--radius-md)",
                              background: "rgba(102,126,234,0.1)", color: "#667eea",
                              border: "1px solid rgba(102,126,234,0.3)",
                              fontWeight: 800, fontSize: 13, cursor: "pointer", fontFamily: "var(--font-main)"
                            }}>🎓 Set Faculty</button>
                          )}

                          <button onClick={async () => {
                            const newStatus = !user.isPaid
                            if (!newStatus && !window.confirm(`Revoke paid access for ${user.name}?`)) return
                            await updateDoc(doc(db, "users", user.id), {
                              isPaid: newStatus,
                              paidAt: newStatus ? new Date().toISOString() : null,
                              paymentRef: newStatus ? "manual_admin" : null,
                            })
                            if (newStatus && user.referredBy) {
                              const { increment } = await import("firebase/firestore")
                              await updateDoc(doc(db, "users", user.referredBy), { referralEarnings: increment(500) }).catch(() => {})
                            }
                            setActionMsg(newStatus ? `✅ ${user.name} unlocked` : `🔒 ${user.name} access revoked`)
                            fetchUsers(); setSelected(null)
                          }} style={{
                            padding: "10px", borderRadius: "var(--radius-md)",
                            background: user.isPaid ? "rgba(239,68,68,0.1)" : "rgba(34,201,122,0.1)",
                            color: user.isPaid ? "#dc2626" : "#15803d",
                            border: `1px solid ${user.isPaid ? "rgba(239,68,68,0.3)" : "rgba(34,201,122,0.3)"}`,
                            fontWeight: 800, fontSize: 13, cursor: "pointer", fontFamily: "var(--font-main)"
                          }}>{user.isPaid ? "🔒 Revoke Access" : "💎 Unlock Full Access"}</button>

                          {((user.referralEarnings || 0) - (user.referralPaidOut || 0)) > 0 && (
                            <button onClick={async () => {
                              const owed = (user.referralEarnings || 0) - (user.referralPaidOut || 0)
                              if (!window.confirm(`Mark ₦${owed.toLocaleString()} referral payment as paid to ${user.name}?`)) return
                              await updateDoc(doc(db, "users", user.id), { referralPaidOut: user.referralEarnings || 0, referralPaidOutAt: new Date().toISOString() })
                              setActionMsg(`✅ ₦${owed.toLocaleString()} marked as paid to ${user.name}`)
                              fetchUsers(); setSelected(null)
                            }} style={{
                              padding: "10px", borderRadius: "var(--radius-md)",
                              background: "rgba(34,197,94,0.1)", color: "#15803d",
                              border: "1px solid rgba(34,197,94,0.3)",
                              fontWeight: 800, fontSize: 13, cursor: "pointer", fontFamily: "var(--font-main)"
                            }}>💸 Pay Referral — ₦{(user.referralEarnings || 0) - (user.referralPaidOut || 0)}</button>
                          )}

                          {dmTarget?.id === user.id ? (
                            <div>
                              <textarea value={dmText} onChange={e => setDmText(e.target.value)}
                                placeholder={`Type your message to ${user.name}...`} rows={3}
                                style={{
                                  width: "100%", padding: "10px 12px",
                                  border: "1.5px solid var(--primary)", borderRadius: "var(--radius-md)",
                                  background: "var(--surface)", fontSize: 13, color: "var(--text)",
                                  fontFamily: "var(--font-main)", resize: "none", outline: "none",
                                  boxSizing: "border-box", marginBottom: 8,
                                }}
                              />
                              <div style={{ display: "flex", gap: 8 }}>
                                <button onClick={() => handleSendDm(user)} disabled={sendingDm || !dmText.trim()} style={{
                                  flex: 2, padding: "10px",
                                  background: sendingDm || !dmText.trim() ? "#ccc" : "#7c3aed",
                                  color: "#fff", border: "none", borderRadius: "var(--radius-md)",
                                  fontWeight: 800, fontSize: 13, cursor: "pointer", fontFamily: "var(--font-main)"
                                }}>{sendingDm ? "Sending..." : "📨 Send Message"}</button>
                                <button onClick={() => { setDmTarget(null); setDmText("") }} style={{
                                  flex: 1, padding: "10px", background: "var(--surface2)", color: "var(--text2)",
                                  border: "1px solid var(--border)", borderRadius: "var(--radius-md)",
                                  fontWeight: 700, fontSize: 13, cursor: "pointer", fontFamily: "var(--font-main)"
                                }}>Cancel</button>
                              </div>
                            </div>
                          ) : (
                            <button onClick={() => { setDmTarget(user); setDmText("") }} style={{
                              padding: "10px", borderRadius: "var(--radius-md)",
                              background: "rgba(124,58,237,0.1)", color: "#7c3aed",
                              border: "1px solid rgba(124,58,237,0.3)",
                              fontWeight: 800, fontSize: 13, cursor: "pointer", fontFamily: "var(--font-main)"
                            }}>💬 Send Direct Message</button>
                          )}

                          <button onClick={() => handlePasswordReset(user.email)} style={{
                            padding: "10px", borderRadius: "var(--radius-md)",
                            background: "var(--primary)", color: "#fff",
                            border: "none", fontWeight: 800, fontSize: 13,
                            cursor: "pointer", fontFamily: "var(--font-main)"
                          }}>🔑 Send Password Reset Email</button>

                          <button onClick={() => handleDisableUser(user.id, user.disabled)} style={{
                            padding: "10px", borderRadius: "var(--radius-md)",
                            background: user.disabled ? "rgba(34,201,122,0.1)" : "rgba(255,179,71,0.1)",
                            color: user.disabled ? "var(--success)" : "#a07000",
                            border: `1px solid ${user.disabled ? "rgba(34,201,122,0.3)" : "rgba(255,179,71,0.3)"}`,
                            fontWeight: 800, fontSize: 13, cursor: "pointer", fontFamily: "var(--font-main)"
                          }}>{user.disabled ? "✅ Enable Account" : "⏸️ Disable Account"}</button>

                          <button onClick={() => handleDeleteUser(user.id, user.name)} style={{
                            padding: "10px", borderRadius: "var(--radius-md)",
                            background: "rgba(255,107,107,0.1)", color: "var(--accent)",
                            border: "1px solid rgba(255,107,107,0.3)",
                            fontWeight: 800, fontSize: 13, cursor: "pointer", fontFamily: "var(--font-main)"
                          }}>🗑️ Delete from Database</button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </>
            )}
          </>
        )}

        {/* ===== MESSAGES TAB ===== */}
        {tab === "messages" && (
          <>
            {messages.length === 0 ? (
              <div className="ee-empty"><span className="ee-empty-icon">💬</span><p>No messages yet</p></div>
            ) : (
              <>
                <div style={{ fontSize: 12, color: "var(--text3)", marginBottom: 12 }}>
                  {messages.filter(m => m.status === "unread").length} unread · {messages.length} total
                </div>
                {messages.map((msg) => (
                  <div key={msg.id} style={{
                    background: msg.status === "unread" ? "var(--primary-light)" : "var(--surface)",
                    border: msg.status === "unread" ? "1.5px solid var(--primary)" : "1px solid var(--border)",
                    borderRadius: "var(--radius-lg)", padding: "14px 16px", marginBottom: 10
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div style={{
                          width: 36, height: 36, borderRadius: "50%", background: "var(--primary-light)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: 15, fontWeight: 800, color: "var(--primary)"
                        }}>{msg.username?.[0]?.toUpperCase() || "?"}</div>
                        <div>
                          <div style={{ fontSize: 13, fontWeight: 800, color: "var(--text)", display: "flex", alignItems: "center", gap: 6 }}>
                            {msg.username}
                            {msg.status === "unread" && <span style={{ fontSize: 9, fontWeight: 800, background: "var(--primary)", color: "#fff", padding: "1px 6px", borderRadius: "var(--radius-pill)" }}>NEW</span>}
                            {msg.replied && <span style={{ fontSize: 9, fontWeight: 800, background: "rgba(34,201,122,0.15)", color: "#15803d", padding: "1px 6px", borderRadius: "var(--radius-pill)", border: "1px solid rgba(34,201,122,0.3)" }}>✓ REPLIED</span>}
                          </div>
                          <div style={{ fontSize: 11, color: "var(--text3)" }}>{msg.email}</div>
                        </div>
                      </div>
                      <div style={{ fontSize: 11, color: "var(--text3)" }}>{formatDate(msg.createdAt)}</div>
                    </div>

                    <p style={{ fontSize: 13, color: "var(--text)", lineHeight: 1.6, margin: "8px 0", padding: "10px 12px", background: "var(--surface2)", borderRadius: "var(--radius-md)" }}>{msg.message}</p>

                    {msg.lastReply && (
                      <div style={{ fontSize: 12, color: "#15803d", padding: "8px 12px", marginBottom: 8, background: "rgba(34,201,122,0.06)", borderRadius: "var(--radius-md)", border: "1px solid rgba(34,201,122,0.2)", borderLeft: "3px solid #22c55e" }}>
                        <span style={{ fontWeight: 800 }}>Your reply: </span>{msg.lastReply}
                      </div>
                    )}

                    {replyingTo?.id === msg.id && (
                      <div style={{ marginBottom: 10 }}>
                        <textarea value={replyText} onChange={e => setReplyText(e.target.value)}
                          placeholder={`Reply to ${msg.username}...`} rows={3}
                          style={{
                            width: "100%", padding: "10px 12px", border: "1.5px solid var(--primary)",
                            borderRadius: "var(--radius-md)", background: "var(--surface)",
                            fontSize: 13, color: "var(--text)", fontFamily: "var(--font-main)",
                            resize: "none", outline: "none", boxSizing: "border-box", marginBottom: 8,
                          }}
                        />
                        <div style={{ display: "flex", gap: 8 }}>
                          <button onClick={() => handleReply(msg)} disabled={sendingReply || !replyText.trim()} style={{
                            flex: 2, padding: "10px",
                            background: sendingReply || !replyText.trim() ? "#ccc" : "var(--primary)",
                            color: "#fff", border: "none", borderRadius: "var(--radius-md)",
                            fontWeight: 800, fontSize: 13, cursor: "pointer", fontFamily: "var(--font-main)"
                          }}>{sendingReply ? "Saving..." : "📨 Save Reply"}</button>
                          <button onClick={() => { setReplyingTo(null); setReplyText("") }} style={{
                            flex: 1, padding: "10px", background: "var(--surface2)", color: "var(--text2)",
                            border: "1px solid var(--border)", borderRadius: "var(--radius-md)",
                            fontWeight: 700, fontSize: 13, cursor: "pointer", fontFamily: "var(--font-main)"
                          }}>Cancel</button>
                        </div>
                      </div>
                    )}

                    <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
                      <button onClick={() => { setReplyingTo(replyingTo?.id === msg.id ? null : msg); setReplyText("") }} style={{
                        flex: 1, padding: "8px",
                        background: replyingTo?.id === msg.id ? "var(--primary-light)" : "rgba(102,126,234,0.1)",
                        color: "var(--primary)", border: "1px solid rgba(102,126,234,0.3)",
                        borderRadius: "var(--radius-sm)", fontWeight: 800, fontSize: 12,
                        cursor: "pointer", fontFamily: "var(--font-main)"
                      }}>{replyingTo?.id === msg.id ? "✕ Cancel" : "↩️ Reply"}</button>
                      {msg.status === "unread" && (
                        <button onClick={() => handleMarkRead(msg.id)} style={{
                          flex: 1, padding: "8px", background: "rgba(34,201,122,0.1)", color: "var(--success)",
                          border: "1px solid rgba(34,201,122,0.3)", borderRadius: "var(--radius-sm)",
                          fontWeight: 800, fontSize: 12, cursor: "pointer", fontFamily: "var(--font-main)"
                        }}>✅ Mark Read</button>
                      )}
                      <button onClick={() => handleDeleteMessage(msg.id)} style={{
                        flex: 1, padding: "8px", background: "rgba(255,107,107,0.1)", color: "var(--accent)",
                        border: "1px solid rgba(255,107,107,0.3)", borderRadius: "var(--radius-sm)",
                        fontWeight: 800, fontSize: 12, cursor: "pointer", fontFamily: "var(--font-main)"
                      }}>🗑️ Delete</button>
                    </div>
                  </div>
                ))}
              </>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default AdminDashboard