const Progress = ({ onNavigate }) => {
  const data = JSON.parse(localStorage.getItem("progress")) || []

  // Group by subject → topic
  const subjectMap = {}
  data.forEach(item => {
    if (!item.topic) return
    const subj = item.subject || "General"
    const top = item.topic
    if (!subjectMap[subj]) subjectMap[subj] = {}
    if (!subjectMap[subj][top]) subjectMap[subj][top] = { totalScore: 0, totalQuestions: 0, attempts: 0 }
    subjectMap[subj][top].totalScore += item.score
    subjectMap[subj][top].totalQuestions += item.total
    subjectMap[subj][top].attempts += 1
  })

  const subjects = Object.entries(subjectMap)
  const hasAny = subjects.length > 0

  const hasWeakAreas = subjects.some(([_, topics]) =>
    Object.values(topics).some(s => Math.round((s.totalScore / s.totalQuestions) * 100) < 50)
  )

  return (
    <div className="ee-page">
      <header className="ee-header">
        <button className="ee-back-btn" onClick={() => onNavigate("home")}>← Back</button>
        <span style={{ fontWeight: 800, fontSize: "16px" }}>My Progress</span>
        <span style={{ width: 60 }} />
      </header>

      <div className="ee-content">
        {!hasAny ? (
          <div className="ee-empty">
            <span className="ee-empty-icon">📊</span>
            <p>No progress yet. Complete a quiz to see your stats here!</p>
            <button className="ee-btn ee-btn-primary" onClick={() => onNavigate("subjectSelect")}>
              Start Studying 📚
            </button>
          </div>
        ) : (
          <>
            <h2 className="ee-title">Your Stats 📊</h2>
            <p className="ee-subtitle">{subjects.length} subject{subjects.length !== 1 ? "s" : ""} practiced</p>

            {subjects.map(([subj, topics], si) => {
              const allTopics = Object.values(topics)
              const subjTotal = allTopics.reduce((a, t) => a + t.totalQuestions, 0)
              const subjScore = allTopics.reduce((a, t) => a + t.totalScore, 0)
              const subjPct = Math.round((subjScore / subjTotal) * 100)
              const subjColor = subjPct >= 70 ? "var(--success)" : subjPct >= 50 ? "var(--warning)" : "var(--accent)"
              const subjWeak = subjPct < 50

              return (
                <div key={si} style={{
                  background: "var(--surface)",
                  border: `1px solid ${subjWeak ? "rgba(255,107,107,0.35)" : "var(--border)"}`,
                  borderRadius: "var(--radius-lg)",
                  padding: "14px 16px",
                  marginBottom: 16
                }}>
                  {/* Subject header */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                    <span style={{ fontWeight: 800, fontSize: 16, color: "var(--text)" }}>
                      {subj}
                      {subjWeak && <span className="ee-weak-badge">Weak</span>}
                    </span>
                    <span style={{ fontWeight: 700, fontSize: 15, color: subjColor }}>{subjPct}%</span>
                  </div>
                  <div className="topic-bar" style={{ marginBottom: 10 }}>
                    <div className="topic-bar-fill" style={{ width: `${subjPct}%`, background: subjColor }} />
                  </div>
                  <div style={{ fontSize: 12, color: "var(--text2)", marginBottom: 12 }}>
                    {subjScore}/{subjTotal} correct overall
                  </div>

                  {/* Topics under this subject */}
                  {Object.entries(topics).map(([top, stats], ti) => {
                    const pct = Math.round((stats.totalScore / stats.totalQuestions) * 100)
                    const isWeak = pct < 50
                    const barColor = pct >= 70 ? "var(--success)" : pct >= 50 ? "var(--warning)" : "var(--accent)"
                    return (
                      <div key={ti} style={{
                        background: isWeak ? "var(--accent-light)" : "var(--surface2)",
                        border: `1px solid ${isWeak ? "rgba(255,107,107,0.25)" : "var(--border)"}`,
                        borderRadius: "var(--radius-md)",
                        padding: "10px 12px",
                        marginBottom: 8
                      }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                          <span style={{ fontSize: 13, fontWeight: 700, color: "var(--text)" }}>
                            {top}
                            {isWeak && <span className="ee-weak-badge">Weak</span>}
                          </span>
                          <span style={{ fontSize: 13, fontWeight: 700, color: barColor }}>{pct}%</span>
                        </div>
                        <div style={{ height: 5, background: "var(--surface3)", borderRadius: 3, overflow: "hidden", marginBottom: 5 }}>
                          <div style={{ height: "100%", width: `${pct}%`, background: barColor, borderRadius: 3 }} />
                        </div>
                        <div style={{ fontSize: 11, color: "var(--text2)" }}>
                          {stats.attempts} attempt{stats.attempts !== 1 ? "s" : ""} · {stats.totalScore}/{stats.totalQuestions} correct
                        </div>
                      </div>
                    )
                  })}
                </div>
              )
            })}

            <div className="ee-btn-row mt-8">
              {hasWeakAreas && (
                <button className="ee-btn ee-btn-danger" onClick={() => onNavigate("weak")}>
                  Practice Weak Areas 🔥
                </button>
              )}
              <button className="ee-btn ee-btn-secondary" onClick={() => onNavigate("subjectSelect")}>
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
