import { useState } from "react"
import { auth, db } from "../firebase"
import { signOut, updatePassword, EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth"
import { doc, updateDoc } from "firebase/firestore"
import { useTheme } from "../context/ThemeContext"
import { resetTour } from "../components/AppTour"
import { getGameState } from "../utils/gamification"

const Settings = ({ onNavigate, onReset, authUser, faculty, university }) => {
  const { dark, toggleTheme } = useTheme()
  const [editingUsername, setEditingUsername] = useState(false)
  const [newUsername, setNewUsername] = useState(authUser?.name || "")
  const [changingPassword, setChangingPassword] = useState(false)
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  const gameState = getGameState()

  const handleSaveUsername = async () => {
    if (!newUsername.trim() || newUsername.trim().length < 2) {
      setError("Username must be at least 2 characters"); return
    }
    setLoading(true); setError(""); setSuccess("")
    try {
      await updateDoc(doc(db, "users", auth.currentUser.uid), {
        name: newUsername.trim()
      })
      setSuccess("Username updated!")
      setEditingUsername(false)
      // Update local authUser
      authUser.name = newUsername.trim()
    } catch (err) {
      setError("Failed to update username. Try again.")
    }
    setLoading(false)
  }

  const handleChangePassword = async () => {
    if (!currentPassword) { setError("Enter your current password"); return }
    if (newPassword.length < 6) { setError("New password must be at least 6 characters"); return }
    if (newPassword !== confirmPassword) { setError("Passwords do not match"); return }

    setLoading(true); setError(""); setSuccess("")
    try {
      const credential = EmailAuthProvider.credential(auth.currentUser.email, currentPassword)
      await reauthenticateWithCredential(auth.currentUser, credential)
      await updatePassword(auth.currentUser, newPassword)
      setSuccess("Password changed successfully!")
      setChangingPassword(false)
      setCurrentPassword(""); setNewPassword(""); setConfirmPassword("")
    } catch (err) {
      if (err.code === "auth/wrong-password" || err.code === "auth/invalid-credential") {
        setError("Current password is incorrect.")
      } else {
        setError("Failed to change password. Try again.")
      }
    }
    setLoading(false)
  }

  const handleLogout = async () => {
    if (window.confirm("Are you sure you want to log out?")) {
      await signOut(auth)
      window.location.reload()
    }
  }

  const inputStyle = {
    width: "100%", padding: "12px 14px",
    border: "1.5px solid var(--border)",
    borderRadius: "var(--radius-md)",
    background: "var(--surface)", fontSize: 14,
    fontFamily: "var(--font-main)", color: "var(--text)",
    outline: "none", boxSizing: "border-box", marginBottom: 10
  }

  const sectionTitle = (title) => (
    <div style={{
      fontSize: 11, fontWeight: 800, color: "var(--text3)",
      textTransform: "uppercase", letterSpacing: "0.07em",
      marginBottom: 10, marginTop: 24
    }}>{title}</div>
  )

  const row = (icon, label, value, action) => (
    <div style={{
      display: "flex", alignItems: "center", gap: 12,
      background: "var(--surface)", border: "1px solid var(--border)",
      borderRadius: "var(--radius-md)", padding: "14px 16px", marginBottom: 8
    }}>
      <span style={{ fontSize: 20, flexShrink: 0 }}>{icon}</span>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 11, color: "var(--text3)", fontWeight: 700 }}>{label}</div>
        <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)" }}>{value}</div>
      </div>
      {action}
    </div>
  )

  return (
    <div className="ee-page">
      <header className="ee-header">
        <button className="ee-back-btn" onClick={() => onNavigate("home")}>← Back</button>
        <span style={{ fontWeight: 800, fontSize: "16px" }}>Settings</span>
        <span style={{ width: 60 }} />
      </header>

      <div className="ee-content">

        {/* Success / Error messages */}
        {success && (
          <div style={{
            background: "rgba(34,201,122,0.1)", border: "1px solid rgba(34,201,122,0.3)",
            borderRadius: "var(--radius-md)", padding: "10px 14px",
            fontSize: 13, color: "var(--success)", marginBottom: 12, fontWeight: 700
          }}>✅ {success}</div>
        )}
        {error && (
          <div style={{
            background: "rgba(255,107,107,0.1)", border: "1px solid rgba(255,107,107,0.3)",
            borderRadius: "var(--radius-md)", padding: "10px 14px",
            fontSize: 13, color: "var(--accent)", marginBottom: 12
          }}>{error}</div>
        )}

        {/* ===== ACCOUNT ===== */}
        {sectionTitle("👤 Account")}

        {/* Username */}
        {editingUsername ? (
          <div style={{
            background: "var(--surface)", border: "1px solid var(--border)",
            borderRadius: "var(--radius-md)", padding: "14px 16px", marginBottom: 8
          }}>
            <div style={{ fontSize: 11, color: "var(--text3)", fontWeight: 700, marginBottom: 8 }}>
              USERNAME
            </div>
            <input
              type="text" value={newUsername}
              onChange={e => setNewUsername(e.target.value)}
              style={inputStyle} autoFocus
            />
            <div style={{ display: "flex", gap: 8 }}>
              <button className="ee-btn ee-btn-primary" onClick={handleSaveUsername}
                disabled={loading} style={{ flex: 1, padding: "10px" }}>
                {loading ? "Saving..." : "Save"}
              </button>
              <button className="ee-btn ee-btn-secondary" onClick={() => {
                setEditingUsername(false); setNewUsername(authUser?.name || ""); setError("")
              }} style={{ flex: 1, padding: "10px" }}>Cancel</button>
            </div>
          </div>
        ) : (
          row("😊", "Username", authUser?.name || "—",
            <button onClick={() => { setEditingUsername(true); setSuccess(""); setError("") }}
              style={{
                background: "var(--primary-light)", color: "var(--primary-text)",
                border: "none", borderRadius: "var(--radius-sm)", padding: "6px 12px",
                fontSize: 12, fontWeight: 800, cursor: "pointer", fontFamily: "var(--font-main)"
              }}>Edit</button>
          )
        )}

        {row("📧", "Email", authUser?.email || auth.currentUser?.email || "—", null)}
        {row("🎓", "Faculty", faculty || "—", null)}

        {/* Stats */}
        {sectionTitle("📊 Your Stats")}
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
          gap: 8, marginBottom: 8
        }}>
          {[
            { icon: gameState.levelInfo.current.emoji, label: "Level", value: gameState.levelInfo.current.title },
            { icon: "⭐", label: "Total XP", value: `${gameState.xp} XP` },
            { icon: "🔥", label: "Streak", value: `${gameState.streak} days` },
            { icon: "🏆", label: "Badges", value: `${gameState.badges.length}/12` },
            { icon: "🎯", label: "Today", value: `${gameState.goal.done}/${gameState.goal.target}q` },
            { icon: "💪", label: "Answered", value: `${gameState.totalAnswered}q` },
          ].map((s, i) => (
            <div key={i} style={{
              background: "var(--surface)", border: "1px solid var(--border)",
              borderRadius: "var(--radius-md)", padding: "12px 8px", textAlign: "center"
            }}>
              <div style={{ fontSize: 20, marginBottom: 4 }}>{s.icon}</div>
              <div style={{ fontSize: 13, fontWeight: 800, color: "var(--text)" }}>{s.value}</div>
              <div style={{ fontSize: 10, color: "var(--text3)" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* ===== PREFERENCES ===== */}
        {sectionTitle("⚙️ Preferences")}

        {/* Dark mode */}
        <div style={{
          display: "flex", alignItems: "center", gap: 12,
          background: "var(--surface)", border: "1px solid var(--border)",
          borderRadius: "var(--radius-md)", padding: "14px 16px", marginBottom: 8
        }}>
          <span style={{ fontSize: 20 }}>{dark ? "🌙" : "☀️"}</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)" }}>
              {dark ? "Dark Mode" : "Light Mode"}
            </div>
            <div style={{ fontSize: 11, color: "var(--text3)" }}>Tap to toggle</div>
          </div>
          <button onClick={toggleTheme} style={{
            width: 48, height: 28, borderRadius: 14,
            background: dark ? "var(--primary)" : "var(--surface3)",
            border: "none", cursor: "pointer", position: "relative", transition: "all 0.2s"
          }}>
            <div style={{
              width: 22, height: 22, borderRadius: "50%", background: "#fff",
              position: "absolute", top: 3,
              left: dark ? 23 : 3, transition: "all 0.2s",
              boxShadow: "0 1px 3px rgba(0,0,0,0.2)"
            }} />
          </button>
        </div>

        {/* Change faculty */}
        <div style={{
          display: "flex", alignItems: "center", gap: 12,
          background: "var(--surface)", border: "1px solid var(--border)",
          borderRadius: "var(--radius-md)", padding: "14px 16px", marginBottom: 8
        }}>
          <span style={{ fontSize: 20 }}>🎓</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)" }}>Change Faculty</div>
            <div style={{ fontSize: 11, color: "var(--text3)" }}>Switch to a different department</div>
          </div>
          <button onClick={onReset} style={{
            background: "var(--primary-light)", color: "var(--primary-text)",
            border: "none", borderRadius: "var(--radius-sm)", padding: "6px 12px",
            fontSize: 12, fontWeight: 800, cursor: "pointer", fontFamily: "var(--font-main)"
          }}>Change</button>
        </div>

        {/* Replay tour */}
        <div style={{
          display: "flex", alignItems: "center", gap: 12,
          background: "var(--surface)", border: "1px solid var(--border)",
          borderRadius: "var(--radius-md)", padding: "14px 16px", marginBottom: 8
        }}>
          <span style={{ fontSize: 20 }}>🗺️</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)" }}>Replay App Tour</div>
            <div style={{ fontSize: 11, color: "var(--text3)" }}>See the intro guide again</div>
          </div>
          <button onClick={() => { resetTour(); onNavigate("home") }} style={{
            background: "var(--primary-light)", color: "var(--primary-text)",
            border: "none", borderRadius: "var(--radius-sm)", padding: "6px 12px",
            fontSize: 12, fontWeight: 800, cursor: "pointer", fontFamily: "var(--font-main)"
          }}>Replay</button>
        </div>

        {/* ===== SECURITY ===== */}
        {sectionTitle("🔒 Security")}

        {/* Change password */}
        {changingPassword ? (
          <div style={{
            background: "var(--surface)", border: "1px solid var(--border)",
            borderRadius: "var(--radius-md)", padding: "14px 16px", marginBottom: 8
          }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: "var(--text)", marginBottom: 12 }}>
              Change Password
            </div>
            <input type="password" placeholder="Current password" value={currentPassword}
              onChange={e => setCurrentPassword(e.target.value)} style={inputStyle} />
            <input type="password" placeholder="New password (min 6 chars)" value={newPassword}
              onChange={e => setNewPassword(e.target.value)} style={inputStyle} />
            <input type="password" placeholder="Confirm new password" value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)} style={inputStyle} />
            <div style={{ display: "flex", gap: 8 }}>
              <button className="ee-btn ee-btn-primary" onClick={handleChangePassword}
                disabled={loading} style={{ flex: 1, padding: "10px" }}>
                {loading ? "Saving..." : "Save"}
              </button>
              <button className="ee-btn ee-btn-secondary" onClick={() => {
                setChangingPassword(false); setCurrentPassword(""); setNewPassword("");
                setConfirmPassword(""); setError("")
              }} style={{ flex: 1, padding: "10px" }}>Cancel</button>
            </div>
          </div>
        ) : (
          <div style={{
            display: "flex", alignItems: "center", gap: 12,
            background: "var(--surface)", border: "1px solid var(--border)",
            borderRadius: "var(--radius-md)", padding: "14px 16px", marginBottom: 8
          }}>
            <span style={{ fontSize: 20 }}>🔑</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)" }}>Change Password</div>
              <div style={{ fontSize: 11, color: "var(--text3)" }}>Update your account password</div>
            </div>
            <button onClick={() => { setChangingPassword(true); setSuccess(""); setError("") }} style={{
              background: "var(--primary-light)", color: "var(--primary-text)",
              border: "none", borderRadius: "var(--radius-sm)", padding: "6px 12px",
              fontSize: 12, fontWeight: 800, cursor: "pointer", fontFamily: "var(--font-main)"
            }}>Change</button>
          </div>
        )}

        {/* Admin access — only visible to admin */}
        {authUser?.email === "jce680@gmail.com" && (
          <>
            {sectionTitle("🛡️ Admin")}
            <button
              onClick={() => onNavigate("admin")}
              style={{
                width: "100%", padding: "14px 16px",
                background: "linear-gradient(135deg, var(--primary), var(--primary-dark, var(--primary)))",
                color: "#fff", border: "none",
                borderRadius: "var(--radius-md)",
                fontWeight: 800, fontSize: 14,
                cursor: "pointer", fontFamily: "var(--font-main)",
                display: "flex", alignItems: "center", gap: 10,
                marginBottom: 8
              }}
            >
              <span>🛡️</span>
              <div style={{ textAlign: "left" }}>
                <div>Admin Dashboard</div>
                <div style={{ fontSize: 11, opacity: 0.8, fontWeight: 600 }}>
                  Manage users & monitor app
                </div>
              </div>
              <span style={{ marginLeft: "auto" }}>→</span>
            </button>
          </>
        )}

        {/* Log out */}
        <button
          onClick={handleLogout}
          className="ee-btn"
          style={{
            width: "100%", marginTop: 8, marginBottom: 8,
            background: "rgba(255,107,107,0.1)",
            border: "1px solid rgba(255,107,107,0.3)",
            color: "var(--accent)", fontWeight: 800
          }}
        >
          🚪 Log Out
        </button>

        {/* App version */}
        <div style={{ textAlign: "center", fontSize: 11, color: "var(--text3)", marginTop: 8 }}>
          ExamEdge v1.0 · Post-UTME Prep
        </div>

      </div>
    </div>
  )
}

export default Settings