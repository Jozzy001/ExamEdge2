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
import { getCBTHistory } from "../utils/cbtHistory"
import { collection, query, where, getDocs, orderBy, updateDoc, doc } from "firebase/firestore"

const PostUTMEHome = ({ onNavigate, onReset, university, faculty, facultySubjects, isPaid, userData, authUser }) => {
  const { dark, toggleTheme } = useTheme()
  const [paywallType, setPaywallType] = useState(null)
  const [showTour, setShowTour] = useState(false)
  const [adminMessage, setAdminMessage] = useState(null)
  const [showFullMessage, setShowFullMessage] = useState(false)
  const [cbtCount, setCbtCount] = useState(0)
  const [showFreePrompt, setShowFreePrompt] = useState(false)
  // Nudge resets every 3 CBTs so it re-appears at 2, 5, 8, 11...
  const nudgeMilestone = Math.floor(cbtCount / 3)
  const [nudgeDismissed, setNudgeDismissed] = useState(
    () => localStorage.getItem("ee-upgrade-nudge-dismissed") === String(nudgeMilestone)
  )

  // WhatsApp number prompt for existing users
  const [showPhonePrompt, setShowPhonePrompt] = useState(false)
  const [phoneInput, setPhoneInput] = useState("")
  const [savingPhone, setSavingPhone] = useState(false)
  const [phoneError, setPhoneError] = useState("")

  useEffect(() => {
    // Load CBT count for upgrade nudge
    try {
      const history = getCBTHistory()
      setCbtCount(history.length)
    } catch(e) {}
  }, [])

  // Show free user prompt once per session on login
  useEffect(() => {
    if (isPaid) return
    const sessionKey = "ee-free-prompt-shown"
    if (!sessionStorage.getItem(sessionKey)) {
      // Small delay so it doesn't stack with other popups
      const t = setTimeout(() => {
        setShowFreePrompt(true)
        sessionStorage.setItem(sessionKey, "1")
      }, 1500)
      return () => clearTimeout(t)
    }
  }, [isPaid])

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
        // Simplified query — no orderBy to avoid needing a composite index
        const q = query(
          collection(db, "messages"),
          where("uid", "==", authUser.uid),
          where("fromAdmin", "==", true),
          where("status", "==", "unread")
        )
        const snap = await getDocs(q)
        if (!snap.empty) {
          // Get the most recent one manually
          const msgs = snap.docs.map(d => ({ id: d.id, ...d.data() }))
          msgs.sort((a, b) => {
            const aTime = a.createdAt?.toDate ? a.createdAt.toDate() : new Date(a.createdAt || 0)
            const bTime = b.createdAt?.toDate ? b.createdAt.toDate() : new Date(b.createdAt || 0)
            return bTime - aTime
          })
          setAdminMessage(msgs[0])
        }
      } catch(e) {
        console.error("Admin message check failed:", e)
      }
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
    setShowFullMessage(false)
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

      {/* ===== ADMIN MESSAGE NOTIFICATION PROMPT ===== */}
      {adminMessage && !showFullMessage && (
        <div style={{
          position: "fixed", bottom: 24, left: 16, right: 16, zIndex: 9999,
          background: "var(--bg)",
          border: "2px solid var(--primary)",
          borderRadius: "var(--radius-xl)",
          padding: "16px 18px",
          boxShadow: "0 8px 32px rgba(102,126,234,0.25)",
          display: "flex", alignItems: "center", gap: 12
        }}>
          <div style={{
            width: 42, height: 42, borderRadius: "50%", flexShrink: 0,
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 20
          }}>📩</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: "var(--text)", marginBottom: 2 }}>
              New message from ExamEdgeNG
            </div>
            <div style={{ fontSize: 11, color: "var(--text3)" }}>
              The team sent you a message
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, flexShrink: 0 }}>
            <button onClick={() => setShowFullMessage(true)} style={{
              padding: "7px 14px",
              background: "var(--primary)", color: "#fff",
              border: "none", borderRadius: "var(--radius-md)",
              fontSize: 12, fontWeight: 800, cursor: "pointer",
              fontFamily: "var(--font-main)"
            }}>View</button>
            <button onClick={handleDismissAdminMessage} style={{
              padding: "7px 14px",
              background: "none", color: "var(--text3)",
              border: "1px solid var(--border)", borderRadius: "var(--radius-md)",
              fontSize: 12, fontWeight: 700, cursor: "pointer",
              fontFamily: "var(--font-main)"
            }}>Skip</button>
          </div>
        </div>
      )}

      {/* ===== ADMIN MESSAGE FULL VIEW ===== */}
      {adminMessage && showFullMessage && (
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

      {/* ===== FREE USER LOGIN PROMPT ===== */}
      {showFreePrompt && !isPaid && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 9997,
          background: "rgba(0,0,0,0.6)",
          display: "flex", alignItems: "flex-end",
          justifyContent: "center"
        }}>
          <div style={{
            background: "var(--bg)",
            borderRadius: "24px 24px 0 0",
            width: "100%", maxWidth: 480,
            overflow: "hidden",
            boxShadow: "0 -8px 40px rgba(0,0,0,0.3)"
          }}>
            {/* Header */}
            <div style={{
              background: "linear-gradient(135deg, #667eea, #764ba2)",
              padding: "20px 20px 16px",
              textAlign: "center"
            }}>
              <div style={{ fontSize: 36, marginBottom: 6 }}>🔓</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: "#fff", marginBottom: 2 }}>
                You're on the Free Plan
              </div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>
                Here's what you're missing out on
              </div>
            </div>

            <div style={{ padding: "20px 20px 8px" }}>
              {/* What they have */}
              <div style={{
                background: "rgba(34,201,122,0.07)",
                border: "1px solid rgba(34,201,122,0.25)",
                borderRadius: "var(--radius-lg)",
                padding: "12px 14px", marginBottom: 10
              }}>
                <div style={{ fontSize: 12, fontWeight: 800, color: "#059669", marginBottom: 8 }}>
                  ✅ What you have now:
                </div>
                {[
                  "📅 2 years of past questions (2014 & 2015)",
                  "🧪 CBT simulation mode",
                  "📚 Study guides for all topics",
                  "🎓 AI Tutor",
                ].map((item, i) => (
                  <div key={i} style={{ fontSize: 12, color: "#166534", fontWeight: 600, padding: "2px 0" }}>
                    {item}
                  </div>
                ))}
              </div>

              {/* What they're missing */}
              <div style={{
                background: "rgba(102,126,234,0.06)",
                border: "1px solid rgba(102,126,234,0.2)",
                borderRadius: "var(--radius-lg)",
                padding: "12px 14px", marginBottom: 16
              }}>
                <div style={{ fontSize: 12, fontWeight: 800, color: "var(--primary)", marginBottom: 8 }}>
                  🔒 What you're missing — unlock for ₦2,500:
                </div>
                {[
                  "📚 18 more years of questions (2005–2013, 2016–2024)",
                  "🔥 Hot Topics — questions that repeat every year",
                  "📊 Weak Areas — know exactly what to fix",
                  "🕐 CBT History — review every attempt",
                  "📈 Full Progress analytics",
                ].map((item, i) => (
                  <div key={i} style={{
                    fontSize: 12, color: "var(--text2)", fontWeight: 600,
                    padding: "2px 0", opacity: 0.85
                  }}>
                    {item}
                  </div>
                ))}
                <div style={{
                  marginTop: 8, fontSize: 11, color: "var(--text3)",
                  fontWeight: 700, textAlign: "center"
                }}>
                  One-time payment · No subscription · No hidden fees
                </div>
              </div>

              {/* Buttons */}
              <button
                onClick={() => { setShowFreePrompt(false); onNavigate("upgrade") }}
                style={{
                  width: "100%", padding: "14px",
                  background: "linear-gradient(135deg, #667eea, #764ba2)",
                  color: "#fff", border: "none",
                  borderRadius: "var(--radius-lg)",
                  fontSize: 15, fontWeight: 800,
                  cursor: "pointer", fontFamily: "var(--font-main)",
                  marginBottom: 10
                }}
              >
                Upgrade Now — ₦2,500 🚀
              </button>

              <button
                onClick={() => setShowFreePrompt(false)}
                style={{
                  width: "100%", padding: "12px",
                  background: "none", color: "var(--text3)",
                  border: "none", borderRadius: "var(--radius-lg)",
                  fontSize: 14, fontWeight: 700,
                  cursor: "pointer", fontFamily: "var(--font-main)",
                  marginBottom: 16
                }}
              >
                Continue with free plan
              </button>
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

        {/* ── UPGRADE NUDGE — shows after 2+ CBTs for free users ── */}
        {!isPaid && cbtCount >= 1 && !nudgeDismissed && (
          <div style={{
            background: "linear-gradient(135deg, rgba(102,126,234,0.12), rgba(118,75,162,0.12))",
            border: "2px solid var(--primary)",
            borderRadius: "var(--radius-xl)",
            padding: "16px 18px",
            marginBottom: 16,
            position: "relative"
          }}>
            {/* Dismiss button */}
            <button
              onClick={() => {
                setNudgeDismissed(true)
                localStorage.setItem("ee-upgrade-nudge-dismissed", String(Math.floor(getCBTHistory().length / 3)))
              }}
              style={{
                position: "absolute", top: 10, right: 12,
                background: "none", border: "none",
                fontSize: 16, color: "var(--text3)",
                cursor: "pointer", lineHeight: 1
              }}
            >✕</button>

            <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <div style={{
                fontSize: 28, flexShrink: 0, marginTop: 2
              }}>📊</div>
              <div style={{ flex: 1, paddingRight: 16 }}>
                <div style={{ fontSize: 14, fontWeight: 800, color: "var(--primary)", marginBottom: 4 }}>
                  You've used your free CBT attempt — unlock unlimited practice
                </div>
                <div style={{ fontSize: 12, color: "var(--text2)", lineHeight: 1.65, marginBottom: 12 }}>
                  You completed your free CBT attempt with <strong>2014 & 2015</strong> questions.
                  Upgrade to take unlimited CBT exams across all <strong>20 years</strong>,
                  plus Hot Topics, Weak Areas tracking and CBT History.
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <button
                    onClick={() => onNavigate("upgrade")}
                    style={{
                      flex: 2, padding: "10px 14px",
                      background: "var(--primary)", color: "#fff",
                      border: "none", borderRadius: "var(--radius-md)",
                      fontWeight: 800, fontSize: 13,
                      cursor: "pointer", fontFamily: "var(--font-main)"
                    }}
                  >Unlock All 20 Years — ₦2,500 →</button>
                  <button
                    onClick={() => {
                      setNudgeDismissed(true)
                      localStorage.setItem("ee-upgrade-nudge-dismissed", String(Math.floor(getCBTHistory().length / 3)))
                    }}
                    style={{
                      flex: 1, padding: "10px",
                      background: "none", color: "var(--text3)",
                      border: "1px solid var(--border)",
                      borderRadius: "var(--radius-md)",
                      fontWeight: 700, fontSize: 12,
                      cursor: "pointer", fontFamily: "var(--font-main)"
                    }}
                  >Not now</button>
                </div>
              </div>
            </div>
          </div>
        )}

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
          <button className="ee-home-card primary" onClick={() => {
            if (!isPaid && cbtCount >= 1) { handleLockedFeature("cbtMode"); return }
            onNavigate("cbtSubjectSelect")
          }}>
            <span className="home-card-icon">🧪</span>
            <div>
              <div className="home-card-title">CBT Mode {!isPaid && cbtCount >= 1 && "🔒"}</div>
              <div className="home-card-sub">
                {!isPaid && cbtCount >= 1 ? "Upgrade for unlimited CBTs" : "Timed exam simulation"}
              </div>
            </div>
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
            <div style={{ fontSize: 14, fontWeight: 800 }}>₦2,500 →</div>
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