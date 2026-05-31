import { useState, useEffect } from "react"
import { auth, db } from "../firebase"
import {
  collection, getDocs, orderBy, query,
  doc, updateDoc, deleteDoc
} from "firebase/firestore"
import { sendPasswordResetEmail } from "firebase/auth"

const ADMIN_EMAIL = "jce680@gmail.com"

const AdminDashboard = ({ onNavigate, authUser }) => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [selected, setSelected] = useState(null)
  const [actionMsg, setActionMsg] = useState("")
  const [actionError, setActionError] = useState("")
  const [tab, setTab] = useState("users") // users | stats

  // Redirect if not admin
  if (authUser?.email !== ADMIN_EMAIL) {
    return (
      <div className="ee-page">
        <header className="ee-header">
          <button className="ee-back-btn" onClick={() => onNavigate("home")}>← Back</button>
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
  }, [])

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

  const filtered = users.filter(u =>
    u.name?.toLowerCase().includes(search.toLowerCase()) ||
    u.email?.toLowerCase().includes(search.toLowerCase())
  )

  // Stats
  const totalUsers = users.length
  const today = new Date().toDateString()
  const activeToday = users.filter(u => {
    if (!u.lastLogin) return false
    const d = u.lastLogin.toDate ? u.lastLogin.toDate() : new Date(u.lastLogin)
    return d.toDateString() === today
  }).length
  const faculties = {}
  users.forEach(u => {
    if (u.faculty) faculties[u.faculty] = (faculties[u.faculty] || 0) + 1
  })

  return (
    <div className="ee-page">
      <header className="ee-header">
        <button className="ee-back-btn" onClick={() => onNavigate("home")}>← Back</button>
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
          {["users", "stats"].map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              flex: 1, padding: "10px",
              borderRadius: "var(--radius-md)",
              border: tab === t ? "2px solid var(--primary)" : "1px solid var(--border)",
              background: tab === t ? "var(--primary-light)" : "var(--surface)",
              color: tab === t ? "var(--primary-text)" : "var(--text)",
              fontWeight: 800, fontSize: 13, cursor: "pointer",
              fontFamily: "var(--font-main)", textTransform: "capitalize"
            }}>{t === "users" ? "👥 Users" : "📊 Stats"}</button>
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
                { icon: "👥", label: "Total Users", value: totalUsers },
                { icon: "🟢", label: "Active Today", value: activeToday },
                { icon: "📚", label: "Eng & Physical", value: faculties["engineering"] || 0 },
                { icon: "🔬", label: "Life Sciences", value: faculties["lifesciences"] || 0 },
                { icon: "📊", label: "Management", value: faculties["management"] || 0 },
                { icon: "🎭", label: "Arts & Law", value: faculties["arts"] || 0 },
              ].map((s, i) => (
                <div key={i} style={{
                  background: "var(--surface)", border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)", padding: "16px",
                  textAlign: "center"
                }}>
                  <div style={{ fontSize: 28, marginBottom: 6 }}>{s.icon}</div>
                  <div style={{ fontSize: 22, fontWeight: 800, color: "var(--primary)" }}>{s.value}</div>
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
                        <div style={{ fontSize: 14, fontWeight: 800, color: "var(--text)" }}>
                          {user.name || "Unknown"}
                          {user.disabled && (
                            <span style={{
                              fontSize: 9, fontWeight: 700, marginLeft: 6,
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
                        background: "var(--surface2)", color: "var(--text2)",
                        padding: "2px 8px", borderRadius: "var(--radius-pill)"
                      }}>{user.faculty || "—"}</span>
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
                            { label: "Faculty", value: user.faculty || "Not set" },
                            { label: "Joined", value: formatDateTime(user.createdAt) },
                            { label: "Last Login", value: formatDateTime(user.lastLogin) },
                          ].map((item, j) => (
                            <div key={j} style={{
                              display: "flex", justifyContent: "space-between",
                              fontSize: 12, padding: "4px 0",
                              borderBottom: j < 3 ? "1px solid var(--border)" : "none"
                            }}>
                              <span style={{ color: "var(--text3)", fontWeight: 700 }}>{item.label}</span>
                              <span style={{ color: "var(--text)", fontWeight: 600 }}>{item.value}</span>
                            </div>
                          ))}
                        </div>

                        {/* Action buttons */}
                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
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
      </div>
    </div>
  )
}

export default AdminDashboard