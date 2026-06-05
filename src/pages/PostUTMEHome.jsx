import { useState, useEffect } from "react"
import { useTheme } from "../context/ThemeContext"
import { UNIBEN_FACULTIES } from "../data/postutme/uniben/faculties"
import { XPBar } from "../components/XPBar"
import PaywallPrompt from "../components/PaywallPrompt"
import AppTour, { isTourDone } from "../components/AppTour"
import { PageTransition } from "../components/LoadingScreen"

const PostUTMEHome = ({ onNavigate, onReset, university, faculty, facultySubjects, isPaid, userData, authUser }) => {
  const { dark, toggleTheme } = useTheme()
  const [paywallType, setPaywallType] = useState(null)
  const [showTour, setShowTour] = useState(false)

  // Show tour on first visit
  useEffect(() => {
    if (!isTourDone()) {
      const timer = setTimeout(() => setShowTour(true), 800)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleLockedFeature = (type) => {
    setPaywallType(type)
  }

  const faculties = university === "UNIBEN" ? UNIBEN_FACULTIES : {}
  const facultyInfo = faculties[faculty]

  const firstName = authUser?.name?.split(" ")[0] || authUser?.email?.split("@")[0] || "Student"

  return (
    <PageTransition>
    <div className="ee-page">
      <header className="ee-header">
        <span className="ee-logo">ExamEdgeNG</span>
        <button className="ee-theme-toggle" onClick={toggleTheme}>
          {dark ? "☀️" : "🌙"}
        </button>
      </header>

      <div className="ee-content">

        {/* Greeting */}
        <div style={{ fontSize: 20, fontWeight: 800, color: "var(--text)", marginBottom: 4 }}>
          Hi, {firstName}! 👋
        </div>
        <div style={{ fontSize: 13, color: "var(--text3)", marginBottom: 16 }}>
          {isPaid ? "Full Access ✅" : "Free Plan — Tap to upgrade 🔒"}
        </div>

        {/* XP / Gamification Bar */}
        <XPBar onNavigate={onNavigate} />

        {/* Profile card */}
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

        <div className="ee-home-grid">
          <button className="ee-home-card primary" onClick={() => onNavigate("cbtSubjectSelect")}>
            <span className="home-card-icon">🧪</span>
            <div>
              <div className="home-card-title">CBT Mode</div>
              <div className="home-card-sub">Timed exam simulation</div>
            </div>
          </button>

          <button className="ee-home-card" onClick={() => onNavigate("subjectSelect")}>
            <span className="home-card-icon">📚</span>
            <div className="home-card-title">Study Mode</div>
            <div className="home-card-sub">Practice by topic</div>
          </button>

          <button className="ee-home-card" onClick={() => {
            if (!isPaid) { handleLockedFeature("hotTopics"); return }
            onNavigate("hotTopics")
          }}>
            <span className="home-card-icon">🔥</span>
            <div>
              <div className="home-card-title">Hot Topics {!isPaid && "🔒"}</div>
              <div className="home-card-sub">Most repeated questions</div>
            </div>
          </button>

          <button className="ee-home-card" onClick={() => {
            if (!isPaid) { handleLockedFeature("weakAreas"); return }
            onNavigate("weak")
          }}>
            <span className="home-card-icon">📊</span>
            <div>
              <div className="home-card-title">Weak Areas {!isPaid && "🔒"}</div>
              <div className="home-card-sub">Fix what's holding you back</div>
            </div>
          </button>

          {/* CBT History — full width */}
          <button
            className="ee-home-card"
            onClick={() => {
              if (!isPaid) { handleLockedFeature("cbtHistory"); return }
              onNavigate("cbtHistory")
            }}
          >
            <span className="home-card-icon">🕐</span>
            <div>
              <div className="home-card-title">CBT History {!isPaid && "🔒"}</div>
              <div className="home-card-sub">Review your past attempts</div>
            </div>
          </button>
        </div>

        <span className="ee-label">Track yourself</span>
        <button
          className="ee-home-card"
          onClick={() => {
            if (!isPaid) { handleLockedFeature("progress"); return }
            onNavigate("progress")
          }}
          style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: 20 }}
        >
          <span style={{ fontSize: "28px" }}>📈</span>
          <div>
            <div className="home-card-title">My Progress {!isPaid && "🔒"}</div>
            <div className="home-card-sub">See your scores and weak topics</div>
          </div>
        </button>

        {/* Upgrade banner for free users */}
        {!isPaid && (
          <div
            onClick={() => onNavigate("upgrade")}
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              borderRadius: "var(--radius-xl)",
              padding: "16px 20px",
              marginBottom: 16,
              color: "#fff",
              display: "flex",
              alignItems: "center",
              gap: 12,
              cursor: "pointer",
            }}
          >
            <span style={{ fontSize: 28 }}>🚀</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 800 }}>Unlock Full Access</div>
              <div style={{ fontSize: 12, opacity: 0.85 }}>All 20 years · Hot Topics · Weak Areas</div>
            </div>
            <div style={{ fontSize: 14, fontWeight: 800 }}>₦2,500 →</div>
          </div>
        )}

        {/* Settings */}
        <button className="ee-btn ee-btn-secondary" onClick={() => onNavigate("settings")}>
          ⚙️ Settings
        </button>

      </div>

      {showTour && <AppTour onDone={() => setShowTour(false)} />}

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