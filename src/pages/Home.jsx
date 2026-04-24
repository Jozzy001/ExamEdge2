import { useTheme } from "../context/ThemeContext"

const Home = ({ onNavigate }) => {
  const { dark, toggleTheme } = useTheme()

  return (
    <div className="ee-page">
      <header className="ee-header">
        <span className="ee-logo">ExamEdge</span>
        <button className="ee-theme-toggle" onClick={toggleTheme}>
          {dark ? "☀️" : "🌙"}
        </button>
      </header>

      <div className="ee-content">
        <p className="ee-subtitle">Your JAMB prep companion 🇳🇬</p>

        <div className="ee-streak">
          <span className="streak-icon">🔥</span>
          <div>
            <div className="streak-title">Keep studying daily!</div>
            <div className="streak-sub">Consistent practice is the key to passing</div>
          </div>
        </div>

        <span className="ee-label">Jump into</span>

        <div className="ee-home-grid">
          {/* CBT */}
          <button className="ee-home-card primary" onClick={() => onNavigate("cbtSubjectSelect")}>
            <span className="home-card-icon">🧪</span>
            <div>
              <div className="home-card-title">CBT Mode</div>
              <div className="home-card-sub">Full timed exam simulation</div>
            </div>
          </button>

          {/* Study */}
          <button className="ee-home-card" onClick={() => onNavigate("subjectSelect")}>
            <span className="home-card-icon">📚</span>
            <div className="home-card-title">Study Mode</div>
            <div className="home-card-sub">Practice by topic</div>
          </button>

          {/* Weak */}
          <button className="ee-home-card" onClick={() => onNavigate("weak")}>
            <span className="home-card-icon">🔥</span>
            <div className="home-card-title">Weak Areas</div>
            <div className="home-card-sub">Fix what's holding you back</div>
          </button>
        </div>

        <span className="ee-label">Track yourself</span>

        <button
          className="ee-home-card"
          onClick={() => onNavigate("progress")}
          style={{ display: "flex", alignItems: "center", gap: "14px" }}
        >
          <span style={{ fontSize: "28px" }}>📊</span>
          <div>
            <div className="home-card-title">My Progress</div>
            <div className="home-card-sub">See your scores and weak topics</div>
          </div>
        </button>
      </div>
    </div>
  )
}

export default Home