import { useState, useEffect } from "react"
import { auth, db } from "../firebase"
import {
  collection, getDocs, orderBy, query, where,
  doc, updateDoc, deleteDoc, setDoc
} from "firebase/firestore"
import { sendPasswordResetEmail } from "firebase/auth"

const ADMIN_EMAIL = "jce680@gmail.com"

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
  const [tab, setTab] = useState("users") // users | stats | messages
  const [planFilter, setPlanFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("") // all | paid | free
  const [replyingTo, setReplyingTo] = useState(null) // message object
  const [replyText, setReplyText] = useState("")
  const [sendingReply, setSendingReply] = useState(false)

  // Redirect if not admin
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

  const sendNotification = async () => {
    if (!notifTitle.trim() || !notifBody.trim()) {
      alert("Please fill in title and message")
      return
    }
    setSendingNotif(true)
    try {
      const { addDoc, collection: col, serverTimestamp: st } = await import("firebase/firestore")
      await addDoc(col(db, "notifications"), {
        title: notifTitle.trim(),
        body: notifBody.trim(),
        type: notifType,
        createdAt: st(),
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

  const fetchSuggestions = async () => {
    try {
      const { getDocs: gd, collection: col, query: q, orderBy: ob, limit: lim } = await import("firebase/firestore")
      const snap = await gd(q(col(db, "suggestions"), ob("createdAt", "desc"), lim(20)))
      setSuggestions(snap.docs.map(d => ({ id: d.id, ...d.data() })))
    } catch(e) {}
  }

  const handleResetUnpaidReferrals = async () => {
    const thirtyDaysAgo = new Date(Date.now() - 14 * 24 * 60 * 60 * 1000)
    const toReset = users.filter(u => {
      const pending = (u.referralEarnings || 0) - (u.referralPaidOut || 0)
      const earnedDate = u.referralEarnedAt ? new Date(u.referralEarnedAt) : null
      return pending > 0 && !u.bankDetails && earnedDate && earnedDate < thirtyDaysAgo
    })
    if (toReset.length === 0) { setActionMsg("✅ No referral balances to reset!"); return }
    if (!window.confirm(`Reset referral balance for ${toReset.length} user(s) who have no bank details after 14 days?`)) return
    for (const u of toReset) {
      await updateDoc(doc(db, "users", u.id), {
        referralEarnings: 0, referralPaidOut: 0,
        referralResetAt: new Date().toISOString(),
        referralResetReason: "No bank details provided within 14 days"
      })
    }
    setActionMsg(`✅ Reset ${toReset.length} unpaid referral balance(s)`)
    fetchUsers()
  }

  const handleResetExpiredSubscriptions = async () => {
    const now = new Date()
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
    
    const expired = users.filter(u => {
      if (!u.isPaid || !u.paidAt) return false
      const paidDate = new Date(u.paidAt)
      return paidDate < thirtyDaysAgo
    })

    if (expired.length === 0) {
      setActionMsg("✅ No expired subscriptions found!")
      return
    }

    if (!window.confirm(`Reset ${expired.length} expired subscription(s)?\n\nThese users paid more than 30 days ago:\n${expired.map(u => u.name).join(", ")}`)) return

    setActionMsg("⏳ Resetting expired subscriptions...")
    let count = 0
    for (const u of expired) {
      try {
        await updateDoc(doc(db, "users", u.id), {
          isPaid: false,
          subscriptionExpired: true,
          expiredAt: now.toISOString(),
        })
        count++
      } catch(e) {}
    }
    setActionMsg(`✅ Reset ${count} expired subscription(s)`)
    fetchUsers()
  }

  const fetchUsers = async () => {
    setLoading(true)
    try {
      const q = query(collection(db, "users"), orderBy("createdAt", "desc"))
      const snapshot = await getDocs(q)
      const list = snapshot.docs.map(d => ({ id: d.id, ...d.data() }))
      setUsers(list)
    } catch (e) {
      console.error(e)
    }
    setLoading(false)
  }

  const fetchMessages = async () => {
    try {
      const q = query(collection(db, "messages"), orderBy("createdAt", "desc"))
      const snapshot = await getDocs(q)
      setMessages(snapshot.docs.map(d => ({ id: d.id, ...d.data() })))
    } catch (e) {
      console.error(e)
    }
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
      // Save reply to Firestore under the message
      const { addDoc, serverTimestamp: st } = await import("firebase/firestore")
      await addDoc(collection(db, "messages", msg.id, "replies"), {
        replyText: replyText.trim(),
        repliedAt: st(),
        repliedBy: authUser?.email,
      })
      // Mark message as read
      await updateDoc(doc(db, "messages", msg.id), {
        status: "read",
        replied: true,
        lastReply: replyText.trim(),
        repliedAt: new Date().toISOString(),
      })
      setMessages(prev => prev.map(m =>
        m.id === msg.id ? { ...m, status: "read", replied: true, lastReply: replyText.trim() } : m
      ))
      setReplyText("")
      setReplyingTo(null)
      setActionMsg(`✅ Reply sent to ${msg.username}`)
    } catch (e) {
      console.error(e)
      setActionError("Failed to save reply. Try again.")
    }
    setSendingReply(false)
  }

  const handlePasswordReset = async (email) => {
    setActionMsg(""); setActionError("")
    try {
      await sendPasswordResetEmail(auth, email)
      setActionMsg(`✅ Password reset email sent to ${email}`)
    } catch (e) {
      setActionError("Failed to send reset email. Try again.")
    }
  }

  const handleDisableUser = async (userId, currentStatus) => {
    try {
      await updateDoc(doc(db, "users", userId), {
        disabled: !currentStatus
      })
      setActionMsg(`✅ User ${currentStatus ? "enabled" : "disabled"} successfully`)
      fetchUsers()
      setSelected(null)
    } catch (e) {
      setActionError("Failed to update user status.")
    }
  }

  const handleDeleteUser = async (userId, username) => {
    if (!window.confirm(`Delete account for "${username}"? This cannot be undone.`)) return
    try {
      await deleteDoc(doc(db, "users", userId))
      setActionMsg(`✅ User "${username}" deleted`)
      setSelected(null)
      fetchUsers()
    } catch (e) {
      setActionError("Failed to delete user.")
    }
  }

  const formatDate = (ts) => {
    if (!ts) return "—"
    const date = ts.toDate ? ts.toDate() : new Date(ts)
    return date.toLocaleDateString("en-NG", { day: "numeric", month: "short", year: "numeric" })
  }

  const formatDateTime = (ts) => {
    if (!ts) return "—"
    const date = ts.toDate ? ts.toDate() : new Date(ts)
    return date.toLocaleDateString("en-NG", {
      day: "numeric", month: "short", year: "numeric",
      hour: "2-digit", minute: "2-digit"
    })
  }

  const filtered = users.filter(u => {
    const matchesSearch = !search || 
      u.name?.toLowerCase().includes(search.toLowerCase()) ||
      u.email?.toLowerCase().includes(search.toLowerCase())
    const matchesPlan = planFilter === "all" ? true : planFilter === "paid" ? u.isPaid : !u.isPaid
    return matchesSearch && matchesPlan
  }).sort((a, b) => {
    // 1. Users with pending referral earnings (referrers) first
    const aPending = (a.referralEarnings || 0) - (a.referralPaidOut || 0)
    const bPending = (b.referralEarnings || 0) - (b.referralPaidOut || 0)
    if (aPending !== bPending) return bPending - aPending
    // 2. Paid users with no referrals next
    if (a.isPaid !== b.isPaid) return b.isPaid ? 1 : -1
    // 3. Free users last — sorted by join date (newest first)
    return new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
  })

  // Stats
  const totalUsers = users.length
  const paidUsers = users.filter(u => u.isPaid).length
  const freeUsers = users.filter(u => !u.isPaid).length
  const today = new Date().toDateString()
  const activeToday = users.filter(u => {
    if (!u.lastLogin) return false
    const d = u.lastLogin.toDate ? u.lastLogin.toDate() : new Date(u.lastLogin)
    return d.toDateString() === today
  }).length
  const totalRevenue = paidUsers * 2000 // ₦2000 after referral
  const totalReferralOwed = users.reduce((sum, u) => sum + ((u.referralEarnings || 0) - (u.referralPaidOut || 0)), 0)
  const faculties = {}
  users.forEach(u => {
    if (u.faculty) faculties[u.faculty] = (faculties[u.faculty] || 0) + 1
  })

  return (
    <div className="ee-page">
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

        {/* Action messages */}
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
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr",
              gap: 12, marginBottom: 20
            }}>
              {[
                { icon: "👥", label: "Total Users", value: totalUsers, color: "var(--primary)" },
                { icon: "🟢", label: "Active Today", value: activeToday, color: "var(--primary)" },
                { icon: "💎", label: "Paid Users", value: paidUsers, color: "#22c55e" },
                { icon: "🆓", label: "Free Users", value: freeUsers, color: "#f59e0b" },
                { icon: "💰", label: "Est. Revenue", value: `₦${totalRevenue.toLocaleString()}`, color: "#22c55e" },
                { icon: "⏳", label: "Referral Owed", value: `₦${totalReferralOwed.toLocaleString()}`, color: "#ef4444" },
              ].map((s, i) => (
                <div key={i} style={{
                  background: "var(--surface)", border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)", padding: "16px",
                  textAlign: "center"
                }}>
                  <div style={{ fontSize: 28, marginBottom: 6 }}>{s.icon}</div>
                  <div style={{ fontSize: 22, fontWeight: 800, color: s.color }}>{s.value}</div>
                  <div style={{ fontSize: 11, color: "var(--text3)", marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Recent signups */}
            <div style={{
              fontSize: 11, fontWeight: 800, color: "var(--text3)",
              textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 10
            }}>Recent Signups</div>
            {users.slice(0, 5).map((u, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 12,
                background: "var(--surface)", border: "1px solid var(--border)",
                borderRadius: "var(--radius-md)", padding: "12px 14px", marginBottom: 8
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: "50%",
                  background: "var(--primary-light)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 16, fontWeight: 800, color: "var(--primary)", flexShrink: 0
                }}>{u.name?.[0]?.toUpperCase() || "?"}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)" }}>{u.name || "—"}</div>
                  <div style={{ fontSize: 11, color: "var(--text3)" }}>{formatDate(u.createdAt)}</div>
                </div>
                <span style={{
                  fontSize: 10, fontWeight: 700,
                  background: "var(--primary-light)", color: "var(--primary-text)",
                  padding: "2px 8px", borderRadius: "var(--radius-pill)"
                }}>{u.faculty || "—"}</span>
              </div>
            ))}
          </>
        )}

        {/* ===== USERS TAB ===== */}
        {tab === "users" && (
          <>
            {/* Search */}
            <input
              type="text"
              placeholder="🔍 Search by name or email..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              style={{
                width: "100%", padding: "12px 14px", marginBottom: 16,
                border: "1.5px solid var(--border)", borderRadius: "var(--radius-md)",
                background: "var(--surface)", fontSize: 14,
                fontFamily: "var(--font-main)", color: "var(--text)",
                outline: "none", boxSizing: "border-box"
              }}
            />

            {/* Plan filter */}
            <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
              {[
                { key: "all", label: `All (${users.length})` },
                { key: "paid", label: `💎 Paid (${paidUsers})` },
                { key: "free", label: `🆓 Free (${freeUsers})` },
              ].map(f => (
                <button key={f.key} onClick={() => setPlanFilter(f.key)} style={{
                  flex: 1, padding: "8px 4px",
                  borderRadius: "var(--radius-md)",
                  border: planFilter === f.key ? "2px solid var(--primary)" : "1px solid var(--border)",
                  background: planFilter === f.key ? "var(--primary-light)" : "var(--surface)",
                  color: planFilter === f.key ? "var(--primary-text)" : "var(--text2)",
                  fontWeight: 800, fontSize: 11, cursor: "pointer",
                  fontFamily: "var(--font-main)"
                }}>{f.label}</button>
              ))}
            </div>

            {loading ? (
              <div style={{ textAlign: "center", padding: "40px 0", color: "var(--text3)" }}>
                Loading users...
              </div>
            ) : filtered.length === 0 ? (
              <div className="ee-empty">
                <span className="ee-empty-icon">🔍</span>
                <p>No users found</p>
              </div>
            ) : (
              <>
                <div style={{ fontSize: 12, color: "var(--text3)", marginBottom: 10 }}>
                  {filtered.length} user{filtered.length !== 1 ? "s" : ""}
                </div>

                {filtered.map((user, i) => (
                  <div key={user.id}>
                    {/* User card */}
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
                      {/* Avatar */}
                      <div style={{
                        width: 40, height: 40, borderRadius: "50%",
                        background: user.disabled ? "var(--surface3)" : "var(--primary-light)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 18, fontWeight: 800,
                        color: user.disabled ? "var(--text3)" : "var(--primary)",
                        flexShrink: 0
                      }}>
                        {user.name?.[0]?.toUpperCase() || "?"}
                      </div>

                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 14, fontWeight: 800, color: "var(--text)", display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
                          {user.name || "Unknown"}
                          <span style={{
                            fontSize: 9, fontWeight: 800,
                            background: user.isPaid ? "rgba(34,201,122,0.15)" : "rgba(245,158,11,0.15)",
                            color: user.isPaid ? "#15803d" : "#92400e",
                            padding: "2px 7px", borderRadius: "var(--radius-pill)",
                            border: `1px solid ${user.isPaid ? "rgba(34,201,122,0.4)" : "rgba(245,158,11,0.4)"}`,
                          }}>{user.isPaid ? `💎 PAID${user.paidAt ? ` · expires ${new Date(new Date(user.paidAt).getTime() + 30*24*60*60*1000).toLocaleDateString("en-NG", {day:"numeric",month:"short"})}` : ""}` : user.subscriptionExpired ? "⏰ EXPIRED" : "🆓 FREE"}</span>
                          {user.disabled && (
                            <span style={{
                              fontSize: 9, fontWeight: 700,
                              background: "rgba(255,107,107,0.2)", color: "var(--accent)",
                              padding: "1px 6px", borderRadius: "var(--radius-pill)"
                            }}>DISABLED</span>
                          )}
                        </div>
                        <div style={{
                          fontSize: 11, color: "var(--text3)",
                          overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"
                        }}>{user.email || "—"}</div>
                        <div style={{ fontSize: 10, color: "var(--text3)", marginTop: 2 }}>
                          Joined {formatDate(user.createdAt)}
                        </div>
                      </div>

                      <span style={{
                        fontSize: 10, fontWeight: 700, flexShrink: 0,
                        background: user.faculty ? "var(--surface2)" : "rgba(245,158,11,0.1)",
                        color: user.faculty ? "var(--text2)" : "#92400e",
                        padding: "2px 8px", borderRadius: "var(--radius-pill)",
                        border: user.faculty ? "none" : "1px solid rgba(245,158,11,0.3)",
                      }}>{user.faculty || "No faculty"}</span>
                    </div>

                    {/* Expanded actions */}
                    {selected?.id === user.id && (
                      <div style={{
                        background: "var(--surface2)",
                        border: "1.5px solid var(--primary)",
                        borderTop: "none",
                        borderRadius: "0 0 var(--radius-md) var(--radius-md)",
                        padding: "14px 16px", marginBottom: 8
                      }}>
                        {/* User details */}
                        <div style={{ marginBottom: 12 }}>
                          {[
                            { label: "Email", value: user.email },
                            { label: "Plan", value: user.isPaid ? "💎 Paid (₦2,500)" : user.subscriptionExpired ? "⏰ Expired" : "🆓 Free" },
                            { label: "Paid On", value: user.paidAt ? new Date(user.paidAt).toLocaleDateString("en-NG", {day:"numeric",month:"short",year:"numeric"}) : "—" },
                            { label: "Expires", value: user.isPaid && user.paidAt ? new Date(new Date(user.paidAt).getTime() + 30*24*60*60*1000).toLocaleDateString("en-NG", {day:"numeric",month:"short",year:"numeric"}) : "—" },
                            { label: "Paid On", value: user.paidAt ? new Date(user.paidAt).toLocaleDateString("en-NG", { day: "numeric", month: "short", year: "numeric" }) : "—" },
                            { label: "Faculty", value: user.faculty || "⚠️ Not set — user hasn't completed onboarding" },
                            { label: "Exam Type", value: user.examType || "Not set" },
                            { label: "Referral Code", value: user.referralCode || "—" },
                            { label: "Referred By", value: user.referredBy ? "Yes" : "No" },
                            { label: "Referral Earned", value: `₦${(user.referralEarnings || 0).toLocaleString()}` },
                            { label: "Referral Owed", value: `₦${((user.referralEarnings || 0) - (user.referralPaidOut || 0)).toLocaleString()}` },
                            { label: "Bank", value: user.bankDetails ? `${user.bankDetails.bankName} · ${user.bankDetails.accountNumber} (${user.bankDetails.accountName})` : "❌ Not provided" },
                            { label: "Joined", value: formatDateTime(user.createdAt) },
                            { label: "Last Login", value: formatDateTime(user.lastLogin) },
                          ].map((item, j) => (
                            <div key={j} style={{
                              display: "flex", justifyContent: "space-between",
                              fontSize: 12, padding: "4px 0",
                              borderBottom: j < 9 ? "1px solid var(--border)" : "none"
                            }}>
                              <span style={{ color: "var(--text3)", fontWeight: 700 }}>{item.label}</span>
                              <span style={{ color: "var(--text)", fontWeight: 600 }}>{item.value}</span>
                            </div>
                          ))}
                        </div>

                        {/* Action buttons */}
                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                          {/* Unlock / Lock toggle */}
                          <button
                            onClick={async () => {
                              const newStatus = !user.isPaid
                              if (!newStatus && !window.confirm(`Revoke paid access for ${user.name}?`)) return
                              await updateDoc(doc(db, "users", user.id), {
                                isPaid: newStatus,
                                paidAt: newStatus ? new Date().toISOString() : null,
                                paymentRef: newStatus ? "manual_admin" : null,
                              })
                              setActionMsg(newStatus ? `✅ ${user.name} unlocked successfully` : `🔒 ${user.name} access revoked`)
                              fetchUsers()
                              setSelected(null)
                            }}
                            style={{
                              padding: "10px", borderRadius: "var(--radius-md)",
                              background: user.isPaid ? "rgba(239,68,68,0.1)" : "rgba(34,201,122,0.1)",
                              color: user.isPaid ? "#dc2626" : "#15803d",
                              border: `1px solid ${user.isPaid ? "rgba(239,68,68,0.3)" : "rgba(34,201,122,0.3)"}`,
                              fontWeight: 800, fontSize: 13,
                              cursor: "pointer", fontFamily: "var(--font-main)"
                            }}
                          >
                            {user.isPaid ? "🔒 Revoke Access" : "💎 Unlock Full Access"}
                          </button>

                          {/* Pay Referral button — only shows if there's pending amount */}
                          {((user.referralEarnings || 0) - (user.referralPaidOut || 0)) > 0 && (
                            <button
                              onClick={async () => {
                                const owed = (user.referralEarnings || 0) - (user.referralPaidOut || 0)
                                if (!window.confirm(`Mark ₦${owed.toLocaleString()} referral payment as paid to ${user.name}?\n\nThis will:\n• Set their pending balance to ₦0\n• Mark all their referrals as paid out`)) return
                                
                                // Update user's paidOut to match earnings (clears pending)
                                await updateDoc(doc(db, "users", user.id), {
                                  referralPaidOut: user.referralEarnings || 0,
                                  referralPaidOutAt: new Date().toISOString(),
                                })

                                // Mark all their referral documents as paid
                                const referralQuery = query(
                                  collection(db, "referrals"),
                                  where("referrerId", "==", user.id)
                                )
                                const referralSnap = await getDocs(referralQuery)
                                const updates = referralSnap.docs.map(d =>
                                  updateDoc(doc(db, "referrals", d.id), { referralPaid: true, paidAt: new Date().toISOString() })
                                )
                                await Promise.all(updates)

                                setActionMsg(`✅ ₦${owed.toLocaleString()} referral payment marked as paid to ${user.name}`)
                                fetchUsers()
                                setSelected(null)
                              }}
                              style={{
                                padding: "10px", borderRadius: "var(--radius-md)",
                                background: "rgba(34,197,94,0.1)", color: "#15803d",
                                border: "1px solid rgba(34,197,94,0.3)",
                                fontWeight: 800, fontSize: 13,
                                cursor: "pointer", fontFamily: "var(--font-main)"
                              }}
                            >
                              💸 Pay Referral — ₦{((user.referralEarnings || 0) - (user.referralPaidOut || 0)).toLocaleString()}
                            </button>
                          )}

                          <button
                            onClick={() => handlePasswordReset(user.email)}
                            style={{
                              padding: "10px", borderRadius: "var(--radius-md)",
                              background: "var(--primary)", color: "#fff",
                              border: "none", fontWeight: 800, fontSize: 13,
                              cursor: "pointer", fontFamily: "var(--font-main)"
                            }}
                          >
                            🔑 Send Password Reset Email
                          </button>

                          <button
                            onClick={() => handleDisableUser(user.id, user.disabled)}
                            style={{
                              padding: "10px", borderRadius: "var(--radius-md)",
                              background: user.disabled ? "rgba(34,201,122,0.1)" : "rgba(255,179,71,0.1)",
                              color: user.disabled ? "var(--success)" : "#a07000",
                              border: `1px solid ${user.disabled ? "rgba(34,201,122,0.3)" : "rgba(255,179,71,0.3)"}`,
                              fontWeight: 800, fontSize: 13,
                              cursor: "pointer", fontFamily: "var(--font-main)"
                            }}
                          >
                            {user.disabled ? "✅ Enable Account" : "⏸️ Disable Account (blocks login)"}
                          </button>

                          <button
                            onClick={() => handleDeleteUser(user.id, user.name)}
                            style={{
                              padding: "10px", borderRadius: "var(--radius-md)",
                              background: "rgba(255,107,107,0.1)",
                              color: "var(--accent)",
                              border: "1px solid rgba(255,107,107,0.3)",
                              fontWeight: 800, fontSize: 13,
                              cursor: "pointer", fontFamily: "var(--font-main)"
                            }}
                          >
                            🗑️ Delete from Database
                          </button>
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
              <div className="ee-empty">
                <span className="ee-empty-icon">💬</span>
                <p>No messages yet</p>
              </div>
            ) : (
              <>
                <div style={{ fontSize: 12, color: "var(--text3)", marginBottom: 12 }}>
                  {messages.filter(m => m.status === "unread").length} unread · {messages.length} total
                </div>
                {messages.map((msg, i) => (
                  <div key={msg.id} style={{
                    background: msg.status === "unread" ? "var(--primary-light)" : "var(--surface)",
                    border: msg.status === "unread" ? "1.5px solid var(--primary)" : "1px solid var(--border)",
                    borderRadius: "var(--radius-lg)",
                    padding: "14px 16px", marginBottom: 10
                  }}>
                    {/* Message header */}
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div style={{
                          width: 36, height: 36, borderRadius: "50%",
                          background: "var(--primary-light)",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: 15, fontWeight: 800, color: "var(--primary)"
                        }}>{msg.username?.[0]?.toUpperCase() || "?"}</div>
                        <div>
                          <div style={{ fontSize: 13, fontWeight: 800, color: "var(--text)", display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
                            {msg.username}
                            {msg.status === "unread" && (
                              <span style={{
                                fontSize: 9, fontWeight: 800,
                                background: "var(--primary)", color: "#fff",
                                padding: "1px 6px", borderRadius: "var(--radius-pill)"
                              }}>NEW</span>
                            )}
                            {msg.replied && (
                              <span style={{
                                fontSize: 9, fontWeight: 800,
                                background: "rgba(34,201,122,0.15)", color: "#15803d",
                                padding: "1px 6px", borderRadius: "var(--radius-pill)",
                                border: "1px solid rgba(34,201,122,0.3)"
                              }}>✓ REPLIED</span>
                            )}
                          </div>
                          <div style={{ fontSize: 11, color: "var(--text3)" }}>{msg.email}</div>
                        </div>
                      </div>
                      <div style={{ fontSize: 11, color: "var(--text3)", textAlign: "right" }}>
                        <div>{formatDate(msg.createdAt)}</div>
                      </div>
                    </div>

                    {/* Message body */}
                    <p style={{
                      fontSize: 13, color: "var(--text)", lineHeight: 1.6,
                      margin: "8px 0", padding: "10px 12px",
                      background: "var(--surface2)", borderRadius: "var(--radius-md)"
                    }}>{msg.message}</p>

                    {/* Last reply preview */}
                    {msg.lastReply && (
                      <div style={{
                        fontSize: 12, color: "#15803d", lineHeight: 1.5,
                        padding: "8px 12px", marginBottom: 8,
                        background: "rgba(34,201,122,0.06)",
                        borderRadius: "var(--radius-md)",
                        border: "1px solid rgba(34,201,122,0.2)",
                        borderLeft: "3px solid #22c55e",
                      }}>
                        <span style={{ fontWeight: 800 }}>Your reply: </span>{msg.lastReply}
                      </div>
                    )}

                    {/* Reply box */}
                    {replyingTo?.id === msg.id && (
                      <div style={{ marginBottom: 10 }}>
                        <textarea
                          value={replyText}
                          onChange={e => setReplyText(e.target.value)}
                          placeholder={`Reply to ${msg.username}...`}
                          rows={3}
                          style={{
                            width: "100%", padding: "10px 12px",
                            border: "1.5px solid var(--primary)",
                            borderRadius: "var(--radius-md)",
                            background: "var(--surface)",
                            fontSize: 13, color: "var(--text)",
                            fontFamily: "var(--font-main)",
                            resize: "none", outline: "none",
                            boxSizing: "border-box",
                            marginBottom: 8,
                          }}
                        />
                        <div style={{ display: "flex", gap: 8 }}>
                          <button
                            onClick={() => handleReply(msg)}
                            disabled={sendingReply || !replyText.trim()}
                            style={{
                              flex: 2, padding: "10px",
                              background: sendingReply || !replyText.trim() ? "#ccc" : "var(--primary)",
                              color: "#fff", border: "none",
                              borderRadius: "var(--radius-md)",
                              fontWeight: 800, fontSize: 13,
                              cursor: sendingReply || !replyText.trim() ? "not-allowed" : "pointer",
                              fontFamily: "var(--font-main)"
                            }}
                          >
                            {sendingReply ? "Saving..." : "📨 Save Reply"}
                          </button>
                          <button
                            onClick={() => { setReplyingTo(null); setReplyText("") }}
                            style={{
                              flex: 1, padding: "10px",
                              background: "var(--surface2)", color: "var(--text2)",
                              border: "1px solid var(--border)",
                              borderRadius: "var(--radius-md)",
                              fontWeight: 700, fontSize: 13,
                              cursor: "pointer", fontFamily: "var(--font-main)"
                            }}
                          >Cancel</button>
                        </div>
                      </div>
                    )}

                    {/* Action buttons */}
                    <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
                      <button
                        onClick={() => {
                          setReplyingTo(replyingTo?.id === msg.id ? null : msg)
                          setReplyText("")
                        }}
                        style={{
                          flex: 1, padding: "8px",
                          background: replyingTo?.id === msg.id ? "var(--primary-light)" : "rgba(102,126,234,0.1)",
                          color: "var(--primary)",
                          border: "1px solid rgba(102,126,234,0.3)",
                          borderRadius: "var(--radius-sm)", fontWeight: 800,
                          fontSize: 12, cursor: "pointer", fontFamily: "var(--font-main)"
                        }}
                      >
                        {replyingTo?.id === msg.id ? "✕ Cancel Reply" : "↩️ Reply"}
                      </button>
                      {msg.status === "unread" && (
                        <button onClick={() => handleMarkRead(msg.id)} style={{
                          flex: 1, padding: "8px",
                          background: "rgba(34,201,122,0.1)", color: "var(--success)",
                          border: "1px solid rgba(34,201,122,0.3)",
                          borderRadius: "var(--radius-sm)", fontWeight: 800,
                          fontSize: 12, cursor: "pointer", fontFamily: "var(--font-main)"
                        }}>✅ Mark Read</button>
                      )}
                      <button onClick={() => handleDeleteMessage(msg.id)} style={{
                        flex: 1, padding: "8px",
                        background: "rgba(255,107,107,0.1)", color: "var(--accent)",
                        border: "1px solid rgba(255,107,107,0.3)",
                        borderRadius: "var(--radius-sm)", fontWeight: 800,
                        fontSize: 12, cursor: "pointer", fontFamily: "var(--font-main)"
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