import { useState } from "react"
import { useTheme } from "../context/ThemeContext"
import { UNIBEN_FACULTIES } from "../data/postutme/uniben/faculties"
import { XPBar } from "../components/XPBar"
import AppTour, { isTourDone } from "../components/AppTour"

const PostUTMEHome = ({ onNavigate, onReset, university, faculty, facultySubjects, authUser }) => {
  const { dark, toggleTheme } = useTheme()
  const [showTour, setShowTour] = useState(!isTourDone())

  const faculties = university === "UNIBEN" ? UNIBEN_FACULTIES : {}
  const facultyInfo = faculties[faculty]

  return (
    <div className="ee-page">
      <header className="ee-header">
        <span className="ee-logo">ExamEdge</span>
        <button className="ee-theme-toggle" onClick={toggleTheme}>
          {dark ? "☀️" : "🌙"}
        </button>
      </header>

      <div className="ee-content">

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
          <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 4 }}>
            {authUser?.name ? `Hi, ${authUser.name}! 👋` : "Post-UTME Prep"}
          </div>
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

        <div className="ee-streak">
          <span className="streak-icon">🎯</span>
          <div>
            <div className="streak-title">Keep studying daily!</div>
            <div className="streak-sub">Consistent practice is the key to passing</div>
          </div>
        </div>

        <span className="ee-label">Jump into</span>

        <div className="ee-home-grid">
          <button ref={null} className="ee-home-card primary" onClick={() => onNavigate("cbtSubjectSelect")}>
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

          <button className="ee-home-card" onClick={() => onNavigate("weak")}>
            <span className="home-card-icon">💪</span>
            <div className="home-card-title">Weak Areas</div>
            <div className="home-card-sub">Fix what's holding you back</div>
          </button>

          <button className="ee-home-card" onClick={() => onNavigate("progress")}>
            <span className="home-card-icon">📊</span>
            <div className="home-card-title">My Progress</div>
            <div className="home-card-sub">Track your performance</div>
          </button>

          <button className="ee-home-card" onClick={() => onNavigate("cbtHistory")}>
            <span className="home-card-icon">📋</span>
            <div className="home-card-title">CBT History</div>
            <div className="home-card-sub">Review past exams</div>
          </button>
        </div>

        {/* CBT History removed from here - now in grid above */}

        {/* Hot Topics — full width card */}
        <button
          className="ee-home-card"
          onClick={() => onNavigate("hotTopics")}
          style={{
            display: "flex", alignItems: "center", gap: "14px",
            marginBottom: 16, width: "100%",
            background: "linear-gradient(135deg, #fff8f0, #ffe8d6)",
            border: "1.5px solid #ffb347"
          }}
        >
          <span style={{ fontSize: "28px" }}>🔥</span>
          <div>
            <div className="home-card-title" style={{ color: "#c45e00" }}>Hot Topics</div>
            <div className="home-card-sub">Questions that appear every year</div>
          </div>
        </button>

        {/* Change exam type */}
        <button className="ee-btn ee-btn-secondary" onClick={() => onNavigate("settings")}>
          ⚙️ Settings
        </button>
      </div>

      {/* App Tour — first time only */}
      {showTour && (
        <AppTour onDone={() => setShowTour(false)} />
      )}
    </div>
  )
}

export default PostUTMEHome