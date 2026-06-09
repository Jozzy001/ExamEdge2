import { useState, useEffect } from "react"
import { auth, db } from "../firebase"
import { signOut, updatePassword, EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth"
import { doc, updateDoc, collection, addDoc, serverTimestamp, query, where, getDocs } from "firebase/firestore"
import ReferralCard from "../components/ReferralCard"
import BankDetailsForm from "../components/BankDetailsForm"
import { PageTransition } from "../components/LoadingScreen"
import { useTheme } from "../context/ThemeContext"
import { resetTour } from "../components/AppTour"
import { getGameState } from "../utils/gamification"
import PageTour, { TOURS } from "../components/PageTour"

const Settings = ({ onNavigate, onBack, onReset, onLogout, authUser, faculty, university, isPaid, userData, examType }) => {
  const { dark, toggleTheme } = useTheme()
  const [editingUsername, setEditingUsername] = useState(false)
  const [newUsername, setNewUsername] = useState(userData?.name || authUser?.name || "")
  const [changingPassword, setChangingPassword] = useState(false)
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")
  const [showContactForm, setShowContactForm] = useState(false)
  const [showInbox, setShowInbox] = useState(false)
  const [contactMessage, setContactMessage] = useState("")

  const [myMessages, setMyMessages] = useState([])
  const [showMessages, setShowMessages] = useState(false)

  const gameState = getGameState()

  // Fetch user's messages and replies
  useEffect(() => {
    const fetchMyMessages = async () => {
      if (!auth.currentUser?.uid) return
      try {
        const q = query(
          collection(db, "messages"),
          where("uid", "==", auth.currentUser.uid)
        )
        const snap = await getDocs(q)
        const msgs = snap.docs.map(d => ({ id: d.id, ...d.data() }))
        msgs.sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0))
        setMyMessages(msgs)
      } catch (e) {
        console.error(e)
      }
    }
    fetchMyMessages()
  }, [])

  const handleSendMessage = async () => {
    if (!contactMessage.trim()) return
    setLoading(true); setError(""); setSuccess("")
    try {
      await addDoc(collection(db, "messages"), {
        uid: auth.currentUser.uid,
        username: userData?.name || authUser?.name || "Unknown",
        email: authUser?.email || auth.currentUser?.email || "Unknown",
        message: contactMessage.trim(),
        status: "unread",
        createdAt: serverTimestamp()
      })
      setSuccess("✅ Message sent! We'll get back to you soon.")
      setContactMessage("")
      setShowContactForm(false)
    } catch (e) {
      setError("Failed to send message. Please try again.")
    }
    setLoading(false)
  }

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
      // Show loading immediately to prevent flash
      if (onLogout) onLogout()
      // Clear all cached data on logout
      localStorage.removeItem("ee-cached-user")
      localStorage.removeItem("ee-cached-userdata")
      localStorage.removeItem("ee-examType")
      localStorage.removeItem("ee-university")
      localStorage.removeItem("ee-faculty")
      await signOut(auth)
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
    <PageTransition>
    <div className="ee-page">
      <header className="ee-header">
        <button className="ee-back-btn" onClick={() => onBack ? onBack() : onNavigate("home")}>← Back</button>
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
                setEditingUsername(false); setNewUsername(userData?.name || authUser?.name || ""); setError("")
              }} style={{ flex: 1, padding: "10px" }}>Cancel</button>
            </div>
          </div>
        ) : (
          row("😊", "Username", userData?.name || authUser?.name || "—",
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
          <button onClick={() => {
            const confirmed = window.confirm(
              "⚠️ Change Faculty?\n\nThis will clear all your progress, CBT history, weak areas and XP — this cannot be undone.\n\nAre you sure you want to continue?"
            )
            if (confirmed) {
              // Clear all local data
              const keysToKeep = ["ee-version", "ee-cached-user", "ee-cached-userdata", "ee-splash-done", "ee-read-notifs"]
              Object.keys(localStorage).forEach(key => {
                if (!keysToKeep.includes(key)) localStorage.removeItem(key)
              })
              onReset(2) // Start at step 2 (university) not step 1
            }
          }} style={{
            background: "rgba(239,68,68,0.1)", color: "#dc2626",
            border: "1px solid rgba(239,68,68,0.3)", borderRadius: "var(--radius-sm)", padding: "6px 12px",
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

        {/* ===== SUBSCRIPTION & REFERRAL ===== */}
        {sectionTitle("💎 Plan & Referral")}

        {/* Plan status */}
        {!isPaid ? (
          <div style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            borderRadius: "var(--radius-xl)", padding: 20, marginBottom: 12, color: "#fff"
          }}>
            <div style={{ fontSize: 32, marginBottom: 8 }}>🚀</div>
            <div style={{ fontSize: 16, fontWeight: 800, marginBottom: 6 }}>Upgrade to Full Access</div>
            <div style={{ fontSize: 13, opacity: 0.85, marginBottom: 16 }}>
              Unlock all 20 years · Hot Topics · Weak Areas · CBT History
            </div>
            <button onClick={() => onNavigate("upgrade")} style={{
              background: "#fff", color: "#667eea",
              border: "none", borderRadius: 10,
              padding: "12px 24px", fontWeight: 700,
              fontSize: 14, cursor: "pointer", width: "100%",
              fontFamily: "var(--font-main)"
            }}>
              Get Full Access — ₦3,000
            </button>
          </div>
        ) : (
          <div style={{
            background: "rgba(34,201,122,0.08)",
            border: "1px solid rgba(34,201,122,0.3)",
            borderRadius: "var(--radius-lg)", padding: "14px 16px", marginBottom: 12,
            display: "flex", alignItems: "center", gap: 12
          }}>
            <span style={{ fontSize: 28 }}>💎</span>
            <div>
              <div style={{ fontSize: 14, fontWeight: 800, color: "var(--text)" }}>Full Access</div>
              <div style={{ fontSize: 12, color: "#15803d", fontWeight: 600 }}>
                ✓ All features unlocked · Paid on {userData?.paidAt ? new Date(userData.paidAt).toLocaleDateString("en-NG", { day: "numeric", month: "short", year: "numeric" }) : "—"}
              </div>
            </div>
          </div>
        )}

        {/* Referral card — shown to ALL users */}
        <ReferralCard userData={userData} />
        {/* Bank details — only shown when user has pending referral earnings */}
        {((userData?.referralEarnings || 0) - (userData?.referralPaidOut || 0)) > 0 && (
          <div style={{
            background: "rgba(245,158,11,0.08)", border: "1.5px solid rgba(245,158,11,0.3)",
            borderRadius: "var(--radius-lg)", padding: "16px", margin: "12px 16px"
          }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: "#d97706", marginBottom: 8 }}>
              🏦 Add Bank Details to Receive Payment
            </div>
            <p style={{ fontSize: 12, color: "var(--text2)", lineHeight: 1.6, marginBottom: 12 }}>
              You have <strong style={{ color: "#d97706" }}>₦{((userData?.referralEarnings || 0) - (userData?.referralPaidOut || 0)).toLocaleString()}</strong> pending.
              Add your bank details so we can pay you.
            </p>
            {userData?.bankDetails ? (
              <div style={{
                background: "var(--surface)", borderRadius: "var(--radius-md)",
                padding: "10px 12px", marginBottom: 10,
                border: "1px solid var(--border)"
              }}>
                <div style={{ fontSize: 12, color: "var(--text2)" }}>Saved bank details:</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)", marginTop: 4 }}>
                  {userData.bankDetails.bankName} · {userData.bankDetails.accountNumber}
                </div>
                <div style={{ fontSize: 12, color: "var(--text2)" }}>{userData.bankDetails.accountName}</div>
              </div>
            ) : null}
            <BankDetailsForm userData={userData} userId={authUser?.uid} />
          </div>
        )}



        {/* ===== SUPPORT ===== */}
        {sectionTitle("💬 Support")}

        {/* Support inbox */}
        <div style={{
          background: "var(--surface)", border: "1px solid var(--border)",
          borderRadius: "var(--radius-lg)", overflow: "hidden", marginBottom: 8
        }}>
          {/* Collapsed button — always visible */}
          <div
            onClick={() => { setShowInbox(p => !p); setShowContactForm(false) }}
            style={{
              padding: "14px 16px", cursor: "pointer",
              display: "flex", alignItems: "center", gap: 12
            }}
          >
            <span style={{ fontSize: 20 }}>💬</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", display: "flex", alignItems: "center", gap: 8 }}>
                Contact Support
                {myMessages.some(m => m.replied || m.fromAdmin) && (
                  <span style={{
                    fontSize: 10, fontWeight: 800,
                    background: "#22c55e", color: "#fff",
                    padding: "2px 8px", borderRadius: 10,
                  }}>NEW REPLY</span>
                )}
              </div>
              <div style={{ fontSize: 11, color: "var(--text3)" }}>
                {myMessages.length === 0
                  ? "Send a message to the admin"
                  : `${myMessages.length} message${myMessages.length !== 1 ? "s" : ""} · tap to view`}
              </div>
            </div>
            <span style={{ fontSize: 16, color: "var(--text3)", transition: "transform 0.2s", transform: showInbox ? "rotate(90deg)" : "rotate(0deg)" }}>›</span>
          </div>

          {/* Expanded inbox */}
          {showInbox && (
            <div style={{ borderTop: "1px solid var(--border)" }}>

              {/* Messages thread */}
              {myMessages.length > 0 && (
                <div style={{ padding: "12px 16px" }}>
                  {myMessages.map((msg, i) => (
                    <div key={msg.id} style={{
                      marginBottom: i < myMessages.length - 1 ? 16 : 0,
                      paddingBottom: i < myMessages.length - 1 ? 16 : 0,
                      borderBottom: i < myMessages.length - 1 ? "1px solid var(--border)" : "none"
                    }}>
                      {/* User's message — hide for admin-initiated DMs */}
                      {!msg.fromAdmin && (
                        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 8 }}>
                          <div style={{
                            maxWidth: "85%",
                            background: "var(--primary)", color: "#fff",
                            borderRadius: "14px 14px 4px 14px",
                            padding: "10px 14px", fontSize: 13, lineHeight: 1.5,
                          }}>
                            <div style={{ fontSize: 10, opacity: 0.75, marginBottom: 4, fontWeight: 700 }}>
                              You · {msg.createdAt?.toDate
                                ? msg.createdAt.toDate().toLocaleDateString("en-NG", { day: "numeric", month: "short" })
                                : "—"}
                            </div>
                            {msg.message}
                          </div>
                        </div>
                      )}
                      {/* Admin reply / admin-initiated DM */}
                      {(msg.lastReply || msg.fromAdmin) ? (
                        <div style={{ display: "flex", justifyContent: "flex-start" }}>
                          <div style={{
                            maxWidth: "85%",
                            background: "var(--surface2)", border: "1px solid var(--border)",
                            borderRadius: "14px 14px 14px 4px",
                            padding: "10px 14px", fontSize: 13, lineHeight: 1.5, color: "var(--text)"
                          }}>
                            <div style={{ fontSize: 10, color: "var(--primary)", marginBottom: 4, fontWeight: 800 }}>
                              ExamEdgeNG Support · {(msg.repliedAt || msg.createdAt)
                                ? new Date(msg.fromAdmin
                                    ? (msg.createdAt?.toDate ? msg.createdAt.toDate() : new Date(msg.createdAt))
                                    : msg.repliedAt
                                  ).toLocaleDateString("en-NG", { day: "numeric", month: "short" })
                                : "—"}
                            </div>
                            {msg.fromAdmin ? msg.message : msg.lastReply}
                          </div>
                        </div>
                      ) : (
                        <div style={{ fontSize: 11, color: "var(--text3)", fontStyle: "italic", textAlign: "center", padding: "4px 0" }}>
                          ⏳ We'll reply soon...
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* New message form */}
              <div style={{ padding: "12px 16px", borderTop: myMessages.length > 0 ? "1px solid var(--border)" : "none" }}>
                {!showContactForm ? (
                  <button
                    onClick={() => setShowContactForm(true)}
                    style={{
                      width: "100%", padding: "11px",
                      background: "var(--primary)", color: "#fff",
                      border: "none", borderRadius: "var(--radius-md)",
                      fontWeight: 800, fontSize: 13,
                      cursor: "pointer", fontFamily: "var(--font-main)"
                    }}
                  >
                    + New Message
                  </button>
                ) : (
                  <>
                    <textarea
                      value={contactMessage}
                      onChange={e => setContactMessage(e.target.value)}
                      placeholder="Describe your issue or question..."
                      rows={3}
                      style={{
                        width: "100%", padding: "12px 14px",
                        border: "1.5px solid var(--primary)",
                        borderRadius: "var(--radius-md)",
                        background: "var(--surface2)", fontSize: 13,
                        fontFamily: "var(--font-main)", color: "var(--text)",
                        outline: "none", boxSizing: "border-box",
                        resize: "none", marginBottom: 8
                      }}
                    />
                    <div style={{ display: "flex", gap: 8 }}>
                      <button
                        onClick={handleSendMessage}
                        disabled={loading || !contactMessage.trim()}
                        style={{
                          flex: 2, padding: "10px",
                          background: loading || !contactMessage.trim() ? "#ccc" : "var(--primary)",
                          color: "#fff", border: "none",
                          borderRadius: "var(--radius-md)",
                          fontWeight: 800, fontSize: 13,
                          cursor: loading || !contactMessage.trim() ? "not-allowed" : "pointer",
                          fontFamily: "var(--font-main)"
                        }}
                      >
                        {loading ? "Sending..." : "Send →"}
                      </button>
                      <button
                        onClick={() => { setShowContactForm(false); setContactMessage("") }}
                        style={{
                          flex: 1, padding: "10px",
                          background: "var(--surface2)", color: "var(--text2)",
                          border: "1px solid var(--border)", borderRadius: "var(--radius-md)",
                          fontWeight: 700, fontSize: 13,
                          cursor: "pointer", fontFamily: "var(--font-main)"
                        }}
                      >Cancel</button>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>

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
          ExamEdgeNG v1.0 · {examType === "jamb" ? "JAMB Prep" : examType === "postutme" ? "Post-UTME Prep" : "Exam Prep"}
        </div>

      </div>
    </div>
    </PageTransition>
  )
}

export default Settings