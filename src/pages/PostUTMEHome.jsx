import { useState, useEffect } from "react"
import { useTheme } from "../context/ThemeContext"
import { UNIBEN_FACULTIES } from "../data/postutme/uniben/faculties"
import { XPBar } from "../components/XPBar"
import PaywallPrompt from "../components/PaywallPrompt"
import AppTour, { isTourDone } from "../components/AppTour"
import { PageTransition } from "../components/LoadingScreen"
import NotificationBell from "../components/NotificationBell"
import DailyQuote from "../components/DailyQuote"
import { db } from "../firebase"
import { collection, query, where, getDocs, orderBy, updateDoc, doc } from "firebase/firestore"

const PostUTMEHome = ({ onNavigate, onReset, university, faculty, facultySubjects, isPaid, userData, authUser }) => {
  const { dark, toggleTheme } = useTheme()
  const [paywallType, setPaywallType] = useState(null)
  const [showTour, setShowTour] = useState(false)
  const [adminMessage, setAdminMessage] = useState(null)

  // WhatsApp number prompt for existing users
  const [showPhonePrompt, setShowPhonePrompt] = useState(false)
  const [phoneInput, setPhoneInput] = useState("")
  const [savingPhone, setSavingPhone] = useState(false)
  const [phoneError, setPhoneError] = useState("")

  useEffect(() => {
    const existing = localStorage.getItem("ee-examDate")
    if (!existing) localStorage.setItem("ee-examDate", "2026-07-27")
  }, [])

  useEffect(() => {
    if (!isTourDone()) {
      const timer = setTimeout(() => setShowTour(true), 800)
      return () => clearTimeout(timer)
    }
  }, [])

  // Check for unread admin DMs
  useEffect(() => {
    if (!authUser?.uid) return
    const checkAdminMessages = async () => {
      try {
        const q = query(
          collection(db, "messages"),
          where("uid", "==", authUser.uid),
          where("fromAdmin", "==", true),
          where("status", "==", "unread"),
          orderBy("createdAt", "desc")
        )
        const snap = await getDocs(q)
        if (!snap.empty) {
          setAdminMessage({ id: snap.docs[0].id, ...snap.docs[0].data() })
        }
      } catch(e) {}
    }
    checkAdminMessages()
  }, [authUser?.uid])

  // Check if existing user has no phone number
  useEffect(() => {
    if (!userData || !authUser?.uid) return
    // Only show prompt if user has no phone AND hasn't dismissed it this session
    if (!userData.phone) {
      // Small delay so it doesn't compete with admin message popup
      const timer = setTimeout(() => setShowPhonePrompt(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [userData, authUser?.uid])

  const handleDismissAdminMessage = async () => {
    if (!adminMessage) return
    try {
      await updateDoc(doc(db, "messages", adminMessage.id), { status: "read" })
    } catch(e) {}
    setAdminMessage(null)
  }

  const handleSavePhone = async () => {
    const digits = phoneInput.replace(/\D/g, "")
    if (digits.length < 10 || digits.length > 14) {
      setPhoneError("Please enter a valid WhatsApp number")
      return
    }
    setSavingPhone(true)
    try {
      await updateDoc(doc(db, "users", authUser.uid), { phone: digits })
      setShowPhonePrompt(false)
      setPhoneInput("")
      setPhoneError("")
    } catch(e) {
      setPhoneError("Failed to save. Please try again.")
    }
    setSavingPhone(false)
  }

  const handleLockedFeature = (type) => setPaywallType(type)
  const faculties = university === "UNIBEN" ? UNIBEN_FACULTIES : {}
  const facultyInfo = faculties[faculty]
  const firstName = userData?.name?.split(" ")[0] || authUser?.displayName?.split(" ")[0] || authUser?.email?.split("@")[0] || "Student"

  return (
    <PageTransition>
    <div className="ee-page">

      {/* ===== ADMIN MESSAGE POPUP ===== */}
      {adminMessage && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 9999,
          background: "rgba(0,0,0,0.65)",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "24px"
        }}>
          <div style={{
            background: "var(--bg)", borderRadius: "var(--radius-xl)",
            width: "100%", maxWidth: 400, overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0,0,0,0.4)"
          }}>
            <div style={{
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              padding: "20px 20px 16px", textAlign: "center"
            }}>
              <div style={{ fontSize: 40, marginBottom: 8 }}>📩</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: "#fff", marginBottom: 4 }}>
                Message from ExamEdgeNG
              </div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>
                The team has something to tell you
              </div>
            </div>
            <div style={{ padding: "20px" }}>
              <div style={{
                background: "var(--surface)", border: "1px solid var(--border)",
                borderRadius: "var(--radius-lg)", padding: "16px", marginBottom: 16,
                fontSize: 14, color: "var(--text)", lineHeight: 1.7, whiteSpace: "pre-wrap"
              }}>
                {adminMessage.message}
              </div>
              <div style={{ fontSize: 11, color: "var(--text3)", textAlign: "center", marginBottom: 16 }}>
                Sent by ExamEdgeNG Admin
              </div>
              <button onClick={handleDismissAdminMessage} style={{
                width: "100%", padding: "14px",
                background: "linear-gradient(135deg, #667eea, #764ba2)",
                color: "#fff", border: "none", borderRadius: "var(--radius-lg)",
                fontSize: 15, fontWeight: 800, cursor: "pointer", fontFamily: "var(--font-main)"
              }}>Got it ✓</button>
            </div>
          </div>
        </div>
      )}

      {/* ===== WHATSAPP NUMBER PROMPT (for existing users) ===== */}
      {showPhonePrompt && !adminMessage && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 9998,
          background: "rgba(0,0,0,0.6)",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: "24px"
        }}>
          <div style={{
            background: "var(--bg)", borderRadius: "var(--radius-xl)",
            width: "100%", maxWidth: 400, overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0,0,0,0.4)"
          }}>
            {/* Header */}
            <div style={{
              background: "linear-gradient(135deg, #25d366, #128c7e)",
              padding: "20px", textAlign: "center"
            }}>
              <div style={{ fontSize: 40, marginBottom: 8 }}>📱</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: "#fff", marginBottom: 4 }}>
                Add Your WhatsApp Number
              </div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.85)", lineHeight: 1.5 }}>
                We've updated our login system
              </div>
            </div>

            <div style={{ padding: "20px" }}>
              <p style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.7, marginBottom: 16 }}>
                You can now log in with your <strong>WhatsApp number</strong> instead of your email. Add your number below so you can use it next time.
              </p>

              <input
                type="tel"
                value={phoneInput}
                onChange={e => setPhoneInput(e.target.value)}
                placeholder="e.g. 08012345678"
                style={{
                  width: "100%", padding: "14px 16px",
                  border: `1.5px solid ${phoneError ? "#ef4444" : "var(--border)"}`,
                  borderRadius: "var(--radius-md)",
                  background: "var(--surface)", fontSize: 15,
                  fontFamily: "var(--font-main)", color: "var(--text)",
                  outline: "none", boxSizing: "border-box", marginBottom: 8
                }}
              />
              {phoneError && (
                <p style={{ fontSize: 12, color: "#ef4444", marginBottom: 12, fontWeight: 600 }}>
                  {phoneError}
                </p>
              )}

              <button
                onClick={handleSavePhone}
                disabled={savingPhone || !phoneInput.trim()}
                style={{
                  width: "100%", padding: "13px",
                  background: "linear-gradient(135deg, #25d366, #128c7e)",
                  color: "#fff", border: "none",
                  borderRadius: "var(--radius-lg)",
                  fontSize: 14, fontWeight: 800,
                  cursor: savingPhone || !phoneInput.trim() ? "not-allowed" : "pointer",
                  fontFamily: "var(--font-main)",
                  opacity: !phoneInput.trim() ? 0.6 : 1,
                  marginBottom: 10
                }}
              >
                {savingPhone ? "Saving..." : "Save WhatsApp Number ✓"}
              </button>

              <p style={{ fontSize: 11, color: "var(--text3)", textAlign: "center", marginTop: 8, lineHeight: 1.5 }}>
                📌 This is required to continue using your account.
              </p>
            </div>
          </div>
        </div>
      )}

      <header className="ee-header">
        <span className="ee-logo">ExamEdgeNG</span>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <NotificationBell userId={authUser?.uid} onNavigate={onNavigate} />
          <button className="ee-theme-toggle" onClick={toggleTheme}>
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      </header>

      <div className="ee-content">

        {userData?.isPaid && userData?.paidAt && (() => {
          const expiryDate = new Date(new Date(userData.paidAt).getTime() + 30*24*60*60*1000)
          const daysLeft = Math.ceil((expiryDate - new Date()) / (1000*60*60*24))
          if (daysLeft > 7) return null
          return (
            <div style={{
              background: daysLeft <= 3 ? "rgba(239,68,68,0.1)" : "rgba(245,158,11,0.1)",
              border: `1px solid ${daysLeft <= 3 ? "rgba(239,68,68,0.3)" : "rgba(245,158,11,0.3)"}`,
              borderRadius: "var(--radius-md)", padding: "10px 14px",
              marginBottom: 12, fontSize: 13,
              color: daysLeft <= 3 ? "#dc2626" : "#d97706", fontWeight: 600
            }}>
              ⏰ Your subscription expires in <strong>{daysLeft} day{daysLeft !== 1 ? "s" : ""}</strong>.
              {daysLeft <= 3 ? " Renew now to keep full access!" : " Renew soon to avoid losing access."}
            </div>
          )
        })()}

        <div style={{ fontSize: 20, fontWeight: 800, color: "var(--text)", marginBottom: 4 }}>
          Hi, {firstName}! 👋
        </div>
        <div style={{ fontSize: 13, color: "var(--text3)", marginBottom: 16 }}>
          {isPaid ? "Full Access ✅" : "Free Plan — Tap to upgrade 🔒"}
        </div>

        {/* Daily Bible Quote */}
        <DailyQuote />

        <XPBar onNavigate={onNavigate} />

        <div style={{
          background: "var(--primary)", borderRadius: "var(--radius-xl)",
          padding: "20px", marginBottom: 24, color: "#fff"
        }}>
          <div style={{ fontSize: 11, fontWeight: 800, opacity: 0.75, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>
            Post-UTME Prep
          </div>
          <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 4 }}>{university}</div>
          <div style={{ fontSize: 14, opacity: 0.85, marginBottom: 12 }}>
            {facultyInfo?.icon} {facultyInfo?.name}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {facultySubjects.map(s => (
              <span key={s} style={{
                fontSize: 11, fontWeight: 700, padding: "3px 10px",
                borderRadius: "var(--radius-pill)",
                background: "rgba(255,255,255,0.2)", color: "#fff"
              }}>{s}</span>
            ))}
          </div>
        </div>

        <span className="ee-label">Jump into</span>

        <button className="ee-home-card" onClick={() => onNavigate("aiTutor")} style={{
          display: "flex", alignItems: "center", gap: 14,
          width: "100%", padding: "16px 18px", marginBottom: 12,
          background: "linear-gradient(135deg, rgba(102,126,234,0.15), rgba(118,75,162,0.15))",
          border: "1.5px solid rgba(102,126,234,0.35)", borderRadius: "var(--radius-lg)",
        }}>
          <span style={{ fontSize: 32 }}>🎓</span>
          <div style={{ flex: 1 }}>
            <div className="home-card-title" style={{ color: "var(--primary)", fontSize: 15 }}>AI Tutor</div>
            <div className="home-card-sub">Ask me what to study today — I know your weak areas</div>
          </div>
          <span style={{ fontSize: 18, color: "var(--primary)", opacity: 0.7 }}>→</span>
        </button>

        <div className="ee-home-grid">
          <button className="ee-home-card primary" onClick={() => onNavigate("cbtSubjectSelect")}>
            <span className="home-card-icon">🧪</span>
            <div><div className="home-card-title">CBT Mode</div><div className="home-card-sub">Timed exam simulation</div></div>
          </button>

          <button className="ee-home-card" onClick={() => onNavigate("subjectSelect")}>
            <span className="home-card-icon">📚</span>
            <div className="home-card-title">Study Mode</div>
            <div className="home-card-sub">Practice by topic</div>
          </button>

          <button className="ee-home-card" onClick={() => { if (!isPaid) { handleLockedFeature("hotTopics"); return } onNavigate("hotTopics") }}>
            <span className="home-card-icon">🔥</span>
            <div><div className="home-card-title">Hot Topics {!isPaid && "🔒"}</div><div className="home-card-sub">Most repeated questions</div></div>
          </button>

          <button className="ee-home-card" onClick={() => { if (!isPaid) { handleLockedFeature("weakAreas"); return } onNavigate("weak") }}>
            <span className="home-card-icon">📊</span>
            <div><div className="home-card-title">Weak Areas {!isPaid && "🔒"}</div><div className="home-card-sub">Fix what's holding you back</div></div>
          </button>

          <button className="ee-home-card" onClick={() => { if (!isPaid) { handleLockedFeature("cbtHistory"); return } onNavigate("cbtHistory") }}>
            <span className="home-card-icon">🕐</span>
            <div><div className="home-card-title">CBT History {!isPaid && "🔒"}</div><div className="home-card-sub">Review your past attempts</div></div>
          </button>
        </div>

        <span className="ee-label">Track yourself</span>
        <button className="ee-home-card" onClick={() => { if (!isPaid) { handleLockedFeature("progress"); return } onNavigate("progress") }}
          style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: 10 }}>
          <span style={{ fontSize: "28px" }}>📈</span>
          <div><div className="home-card-title">My Progress {!isPaid && "🔒"}</div><div className="home-card-sub">See your scores and weak topics</div></div>
        </button>

        <button className="ee-home-card" onClick={() => onNavigate("leaderboard")}
          style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: 20 }}>
          <span style={{ fontSize: "28px" }}>🏆</span>
          <div><div className="home-card-title">Leaderboard</div><div className="home-card-sub">See how you rank against others</div></div>
        </button>

        <button onClick={() => onNavigate("referrals")} style={{
          background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
          borderRadius: "var(--radius-lg)", padding: "14px 16px", marginBottom: 16,
          color: "#fff", border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", gap: 12, width: "100%",
          fontSize: 14, fontWeight: 700, boxShadow: "0 4px 14px rgba(16,185,129,0.3)"
        }}>
          <span style={{ fontSize: 24 }}>💰</span>
          <div style={{ flex: 1, textAlign: "left" }}>
            <div style={{ fontSize: 14, fontWeight: 800 }}>Refer Friends — Earn ₦500 at Launch 🚀</div>
            <div style={{ fontSize: 11, opacity: 0.9, fontWeight: 600 }}>Share your code now · Get paid when we fully launch</div>
          </div>
          <span style={{ fontSize: 18, opacity: 0.85 }}>→</span>
        </button>

        {!isPaid && (
          <div onClick={() => onNavigate("upgrade")} style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            borderRadius: "var(--radius-xl)", padding: "16px 20px", marginBottom: 16,
            color: "#fff", display: "flex", alignItems: "center", gap: 12, cursor: "pointer",
          }}>
            <span style={{ fontSize: 28 }}>🚀</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 800 }}>Unlock Full Access</div>
              <div style={{ fontSize: 12, opacity: 0.85 }}>All 20 years · Hot Topics · Weak Areas</div>
            </div>
            <div style={{ fontSize: 14, fontWeight: 800 }}>₦3,000 →</div>
          </div>
        )}

        <div onClick={() => window.open("https://whatsapp.com/channel/0029Vb7ZQAe90x2qXQY1Rw1K", "_blank")} style={{
          background: "linear-gradient(135deg, #25d366, #128c7e)",
          borderRadius: "var(--radius-lg)", padding: "14px 18px",
          marginBottom: 8, cursor: "pointer", color: "#fff",
          display: "flex", alignItems: "center", gap: 14
        }}>
          <span style={{ fontSize: 26 }}>📢</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 2 }}>Follow Our WhatsApp Channel</div>
            <div style={{ fontSize: 12, opacity: 0.9, lineHeight: 1.5 }}>Get exam news, app updates and study tips</div>
          </div>
          <span style={{ fontSize: 16, opacity: 0.8 }}>→</span>
        </div>

        <button className="ee-btn ee-btn-secondary" onClick={() => onNavigate("settings")}>
          ⚙️ Settings
        </button>

      </div>

      {showTour && <AppTour onDone={() => setShowTour(false)} onNavigate={onNavigate} />}

      {paywallType && (
        <PaywallPrompt
          type={paywallType}
          onUpgrade={() => { setPaywallType(null); onNavigate("upgrade") }}
          onClose={() => setPaywallType(null)}
        />
      )}
    </div>
    </PageTransition>
  )
}

export default PostUTMEHome