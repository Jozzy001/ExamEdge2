const Progress = ({ onNavigate }) => {
  const data = JSON.parse(localStorage.getItem("progress")) || []

  const grouped = {}
  data.forEach(item => {
    if (!item.topic) return
    const key = item.subject ? `${item.subject}||${item.topic}` : item.topic
    if (!grouped[key]) grouped[key] = {
      totalScore: 0, totalQuestions: 0, attempts: 0,
      topic: item.topic, subject: item.subject || null
    }
    grouped[key].totalScore += item.score
    grouped[key].totalQuestions += item.total
    grouped[key].attempts += 1
  })

  const entries = Object.entries(grouped)
  const hasWeakAreas = entries.some(([_, s]) => Math.round((s.totalScore / s.totalQuestions) * 100) < 50)

  return (
    <div className="ee-page">
      <header className="ee-header">
        <button className="ee-back-btn" onClick={() => onNavigate("home")}>← Back</button>
        <span style={{ fontWeight: 800, fontSize: "16px" }}>My Progress</span>
        <span style={{ width: 60 }} />
      </header>

      <div className="ee-content">
        {entries.length === 0 ? (
          <div className="ee-empty">
            <span className="ee-empty-icon">📊</span>
            <p>No progress yet. Complete a quiz to see your stats here!</p>
            <button className="ee-btn ee-btn-primary" onClick={() => onNavigate("study")}>
              Start Studying 📚
            </button>
          </div>
        ) : (
          <>
            <h2 className="ee-title">Your Stats 📊</h2>
            <p className="ee-subtitle">{entries.length} topic{entries.length !== 1 ? "s" : ""} practiced</p>

            {entries.map(([topic, stats], index) => {
              const pct = Math.round((stats.totalScore / stats.totalQuestions) * 100)
              const isWeak = pct < 50
              const barColor = pct >= 70
                ? "var(--success)"
                : pct >= 50
                ? "var(--warning)"
                : "var(--accent)"

              return (
                <div key={index} className={`ee-topic-card${isWeak ? " weak" : ""}`}>
                  <div className="topic-row">
                    <span className="topic-name">
                      {stats.subject && (
                        <span style={{
                          fontSize: 10, fontWeight: 800,
                          background: "var(--primary-light)",
                          color: "var(--primary-text)",
                          padding: "2px 7px", borderRadius: "var(--radius-pill)",
                          marginRight: 6
                        }}>{stats.subject}</span>
                      )}
                      {stats.topic || topic}
                      {isWeak && <span className="ee-weak-badge">Weak</span>}
                    </span>
                    <span className="topic-score" style={{ color: barColor }}>{pct}%</span>
                  </div>
                  <div className="topic-bar">
                    <div
                      className="topic-bar-fill"
                      style={{ width: `${pct}%`, background: barColor }}
                    />
                  </div>
                  <div className="topic-meta">
                    {stats.attempts} attempt{stats.attempts !== 1 ? "s" : ""} &nbsp;·&nbsp;
                    {stats.totalScore}/{stats.totalQuestions} correct
                  </div>
                </div>
              )
            })}

            <div className="ee-btn-row mt-8">
              {hasWeakAreas && (
                <button className="ee-btn ee-btn-danger" onClick={() => onNavigate("weak")}>
                  Practice Weak Areas 🔥
                </button>
              )}
              <button className="ee-btn ee-btn-secondary" onClick={() => onNavigate("study")}>
                Study More 📚
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Progress
