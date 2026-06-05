import { useState, useEffect } from "react"
import { collection, query, orderBy, limit, getDocs, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore"
import { db } from "../firebase"

export default function NotificationBell({ userId, onNavigate }) {
  const [open, setOpen] = useState(false)
  const [notifications, setNotifications] = useState([])
  const [unreadCount, setUnreadCount] = useState(0)
  const [suggestion, setSuggestion] = useState("")
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [tab, setTab] = useState("notifications") // "notifications" | "suggest"

  useEffect(() => {
    fetchNotifications()
  }, [])

  const fetchNotifications = async () => {
    try {
      const q = query(
        collection(db, "notifications"),
        orderBy("createdAt", "desc"),
        limit(20)
      )
      const snap = await getDocs(q)
      const items = snap.docs.map(d => ({ id: d.id, ...d.data() }))
      setNotifications(items)
      // Count unread — compare against localStorage read timestamps
      const read = JSON.parse(localStorage.getItem("ee-read-notifs") || "[]")
      const unread = items.filter(n => !read.includes(n.id)).length
      setUnreadCount(unread)
    } catch(e) {}
  }

  const markAllRead = () => {
    const ids = notifications.map(n => n.id)
    localStorage.setItem("ee-read-notifs", JSON.stringify(ids))
    setUnreadCount(0)
  }

  const handleOpen = () => {
    setOpen(true)
    markAllRead()
  }

  const handleSuggest = async () => {
    if (!suggestion.trim()) return
    setSending(true)
    try {
      await addDoc(collection(db, "suggestions"), {
        userId,
        text: suggestion.trim(),
        createdAt: serverTimestamp(),
        status: "pending"
      })
      setSent(true)
      setSuggestion("")
      setTimeout(() => setSent(false), 3000)
    } catch(e) {}
    setSending(false)
  }

  const formatTime = (ts) => {
    if (!ts) return ""
    const date = ts.toDate ? ts.toDate() : new Date(ts)
    const diff = Date.now() - date.getTime()
    const mins = Math.floor(diff / 60000)
    const hours = Math.floor(diff / 3600000)
    const days = Math.floor(diff / 86400000)
    if (mins < 60) return `${mins}m ago`
    if (hours < 24) return `${hours}h ago`
    return `${days}d ago`
  }

  const typeIcon = (type) => {
    if (type === "feature") return "🆕"
    if (type === "exam") return "📋"
    if (type === "promo") return "🎉"
    if (type === "warning") return "⚠️"
    return "📢"
  }

  return (
    <>
      {/* Bell button */}
      <button
        onClick={handleOpen}
        style={{
          position: "relative", background: "var(--primary-light)",
          border: "1.5px solid var(--primary)", borderRadius: "50%",
          width: 38, height: 38, cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 18, boxShadow: unreadCount > 0 ? "0 0 0 3px var(--primary)33" : "none"
        }}
      >
        🔔
        {unreadCount > 0 && (
          <span style={{
            position: "absolute", top: -4, right: -4,
            background: "#dc2626", color: "#fff",
            borderRadius: "50%", width: 18, height: 18,
            fontSize: 10, fontWeight: 800,
            display: "flex", alignItems: "center", justifyContent: "center"
          }}>{unreadCount > 9 ? "9+" : unreadCount}</span>
        )}
      </button>

      {/* Notification panel */}
      {open && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 2000,
          background: "rgba(0,0,0,0.5)",
          display: "flex", alignItems: "flex-end"
        }} onClick={(e) => { if (e.target === e.currentTarget) setOpen(false) }}>
          <div style={{
            background: "var(--bg)", width: "100%",
            borderRadius: "20px 20px 0 0",
            maxHeight: "85vh", display: "flex", flexDirection: "column",
            overflow: "hidden"
          }}>
            {/* Handle */}
            <div style={{
              width: 40, height: 4, borderRadius: 2,
              background: "var(--border)", margin: "12px auto 0"
            }} />

            {/* Tabs */}
            <div style={{
              display: "flex", borderBottom: "1px solid var(--border)",
              padding: "12px 20px 0"
            }}>
              {["notifications", "suggest"].map(t => (
                <button key={t} onClick={() => setTab(t)} style={{
                  flex: 1, padding: "8px", background: "none", border: "none",
                  borderBottom: tab === t ? "2px solid var(--primary)" : "2px solid transparent",
                  color: tab === t ? "var(--primary)" : "var(--text2)",
                  fontWeight: tab === t ? 800 : 600, fontSize: 13,
                  cursor: "pointer", fontFamily: "var(--font-main)"
                }}>
                  {t === "notifications" ? `🔔 Updates ${unreadCount > 0 ? `(${unreadCount})` : ""}` : "💡 Suggest a Feature"}
                </button>
              ))}
            </div>

            <div style={{ overflowY: "auto", flex: 1, padding: "16px 20px 40px" }}>

              {tab === "notifications" && (
                <>
                  {notifications.length === 0 ? (
                    <div style={{ textAlign: "center", padding: "40px 0" }}>
                      <div style={{ fontSize: 40, marginBottom: 12 }}>🔔</div>
                      <p style={{ fontSize: 14, color: "var(--text2)" }}>No notifications yet.</p>
                      <p style={{ fontSize: 12, color: "var(--text3)" }}>We'll notify you about new features and exam news here.</p>
                    </div>
                  ) : (
                    notifications.map((n, i) => (
                      <div key={n.id} style={{
                        padding: "14px 0",
                        borderBottom: i < notifications.length - 1 ? "1px solid var(--border)" : "none"
                      }}>
                        <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                          <span style={{ fontSize: 24, flexShrink: 0 }}>{typeIcon(n.type)}</span>
                          <div style={{ flex: 1 }}>
                            <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", marginBottom: 4 }}>
                              {n.title}
                            </div>
                            <div style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.6 }}>
                              {n.body}
                            </div>
                            <div style={{ fontSize: 11, color: "var(--text3)", marginTop: 4 }}>
                              {formatTime(n.createdAt)}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </>
              )}

              {tab === "suggest" && (
                <div style={{ paddingTop: 8 }}>
                  <p style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.6, marginBottom: 16 }}>
                    Got an idea to make ExamEdgeNG better? We'd love to hear it! 💡
                  </p>
                  <textarea
                    value={suggestion}
                    onChange={e => setSuggestion(e.target.value)}
                    placeholder="e.g. Add more universities, add a leaderboard, show my rank..."
                    rows={5}
                    style={{
                      width: "100%", padding: "12px",
                      borderRadius: "var(--radius-md)",
                      border: "1.5px solid var(--border)",
                      background: "var(--surface)",
                      color: "var(--text)", fontSize: 13,
                      fontFamily: "var(--font-main)",
                      resize: "none", boxSizing: "border-box",
                      lineHeight: 1.6
                    }}
                  />
                  <button
                    onClick={handleSuggest}
                    disabled={sending || !suggestion.trim()}
                    style={{
                      width: "100%", marginTop: 12, padding: "12px",
                      borderRadius: "var(--radius-md)",
                      background: sent ? "#16a34a" : "var(--primary)",
                      color: "#fff", border: "none",
                      fontSize: 14, fontWeight: 700,
                      cursor: "pointer", fontFamily: "var(--font-main)",
                      opacity: !suggestion.trim() ? 0.5 : 1
                    }}
                  >
                    {sending ? "Sending..." : sent ? "✅ Suggestion Sent!" : "Send Suggestion 🚀"}
                  </button>
                  {sent && (
                    <p style={{ fontSize: 12, color: "#16a34a", textAlign: "center", marginTop: 8 }}>
                      Thank you! We'll review your suggestion soon. 🙏
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}