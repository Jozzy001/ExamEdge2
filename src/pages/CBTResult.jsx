import { useEffect, useState } from "react"

const CBTResult = ({ onNavigate }) => {
  const [report, setReport] = useState(null)

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cbtReport"))
    setReport(data)
  }, [])

  if (!report) {
    return (
      <div className="ee-page">
        <header className="ee-header">
          <button className="ee-back-btn" onClick={() => onNavigate("home")}>← Back</button>
        </header>
        <div className="ee-content">
          <div className="ee-empty">
            <span className="ee-empty-icon">📋</span>
            <p>No CBT result found. Complete a CBT exam first.</p>
            <button className="ee-btn ee-btn-primary" onClick={() => onNavigate("cbtSubjectSelect")}>Take CBT 🧪</button>
          </div>
        </div>
      </div>
    )
  }

  const { score, total, answers, subjects } = report
  const percentage = Math.round((score / total) * 100)
  const emoji = percentage >= 70 ? "🌟" : percentage >= 50 ? "👍" : "💪"
  const msg = percentage >= 70 ? "Excellent performance!" : percentage >= 50 ? "Good effort! Keep studying." : "Keep practicing — you'll improve!"

  // =============================================
  // GROUP BY SUBJECT THEN TOPIC
  // =============================================
  const subjectStats = {}
  answers.forEach(a => {
    const subj = a.subject || "General"
    const top = a.topic || "General"
    if (!subjectStats[subj]) subjectStats[subj] = { correct: 0, total: 0, topics: {} }
    subjectStats[subj].total += 1
    if (a.isCorrect) subjectStats[subj].correct += 1
    if (!subjectStats[subj].topics[top]) subjectStats[subj].topics[top] = { correct: 0, total: 0 }
    subjectStats[subj].topics[top].total += 1
    if (a.isCorrect) subjectStats[subj].topics[top].correct += 1
  })

  const weakSubjects = Object.entries(subjectStats)
    .filter(([_, s]) => Math.round((s.correct / s.total) * 100) < 50)
    .map(([subj]) => subj)

  return (
    <div className="ee-page">
      <header className="ee-header">
        <button className="ee-back-btn" onClick={() => onNavigate("home")}>← Home</button>
        <span style={{ fontWeight: 800, fontSize: "16px" }}>CBT Result</span>
        <span style={{ width: 60 }} />
      </header>

      <div className="ee-content">

        {/* Overall score */}
        <div className="ee-result-score">
          <span className="result-emoji">{emoji}</span>
          <div className="result-fraction">{score} / {total}</div>
          <div className={`result-percent ${percentage >= 70 ? "color-success" : percentage >= 50 ? "color-warning" : "color-danger"}`}>
            {percentage}%
          </div>
          <div className="result-msg">{msg}</div>
          {subjects && subjects.length > 0 && (
            <div style={{ marginTop: 8, fontSize: 12, color: "var(--text2)" }}>
              {subjects.join(" · ")}
            </div>
          )}
        </div>

        {/* Subject-by-subject breakdown */}
        <span className="ee-label">Performance by subject</span>
        {Object.entries(subjectStats).map(([subj, stats], si) => {
          const subjPct = Math.round((stats.correct / stats.total) * 100)
          const subjColor = subjPct >= 70 ? "var(--success)" : subjPct >= 50 ? "var(--warning)" : "var(--accent)"
          const isWeakSubj = subjPct < 50
          return (
            <div key={si} style={{
              background: "var(--surface)", border: `1px solid ${isWeakSubj ? "rgba(255,107,107,0.4)" : "var(--border)"}`,
              borderRadius: "var(--radius-lg)", padding: "14px 16px", marginBottom: 12
            }}>
              {/* Subject header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <span style={{ fontWeight: 800, fontSize: 15, color: "var(--text)" }}>
                  {subj}
                  {isWeakSubj && <span className="ee-weak-badge">Weak</span>}
                </span>
                <span style={{ fontWeight: 700, fontSize: 15, color: subjColor }}>{subjPct}%</span>
              </div>
              <div className="topic-bar" style={{ marginBottom: 10 }}>
                <div className="topic-bar-fill" style={{ width: `${subjPct}%`, background: subjColor }} />
              </div>
              <div style={{ fontSize: 12, color: "var(--text2)", marginBottom: 10 }}>
                {stats.correct}/{stats.total} correct
              </div>

              {/* Topic breakdown within subject */}
              {Object.entries(stats.topics).map(([top, ts], ti) => {
                const topPct = Math.round((ts.correct / ts.total) * 100)
                const topColor = topPct >= 70 ? "var(--success)" : topPct >= 50 ? "var(--warning)" : "var(--accent)"
                return (
                  <div key={ti} style={{
                    background: "var(--surface2)", borderRadius: "var(--radius-md)",
                    padding: "8px 12px", marginBottom: 6
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                      <span style={{ fontSize: 12, fontWeight: 700, color: "var(--text)" }}>{top}</span>
                      <span style={{ fontSize: 12, fontWeight: 700, color: topColor }}>{topPct}%</span>
                    </div>
                    <div style={{ height: 4, background: "var(--surface3)", borderRadius: 2, overflow: "hidden" }}>
                      <div style={{ height: "100%", width: `${topPct}%`, background: topColor, borderRadius: 2 }} />
                    </div>
                    <div style={{ fontSize: 11, color: "var(--text3)", marginTop: 3 }}>
                      {ts.correct}/{ts.total} correct
                    </div>
                  </div>
                )
              })}
            </div>
          )
        })}

        <hr className="ee-divider" />

        {/* Answer review */}
        <span className="ee-label">Review all answers</span>
        {answers.map((a, index) => (
          <div key={index} className="ee-card-sm" style={{
            borderColor: a.isCorrect ? "var(--success)" : "rgba(255,107,107,0.4)",
            background: a.isCorrect ? "var(--success-light)" : "var(--accent-light)"
          }}>
            <div style={{ display: "flex", gap: 6, marginBottom: 6 }}>
              {a.subject && (
                <span style={{
                  fontSize: 10, fontWeight: 800, background: "var(--primary-light)",
                  color: "var(--primary-text)", padding: "2px 7px", borderRadius: "var(--radius-pill)"
                }}>{a.subject}</span>
              )}
              {a.topic && (
                <span style={{
                  fontSize: 10, fontWeight: 600, background: "var(--surface2)",
                  color: "var(--text2)", padding: "2px 7px", borderRadius: "var(--radius-pill)"
                }}>{a.topic}</span>
              )}
            </div>
            <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--text)", marginBottom: "8px" }}>
              Q{index + 1}: {a.question}
            </p>
            <p style={{ fontSize: "13px", marginBottom: "4px" }}>
              Your answer:{" "}
              <span style={{ fontWeight: 700, color: a.isCorrect ? "var(--success)" : "var(--accent)" }}>
                {a.selected === "skipped" ? "⏭ Skipped" : a.selected || "Not answered"}
              </span>
            </p>
            {!a.isCorrect && (
              <p style={{ fontSize: "13px", color: "var(--success)", fontWeight: 700, marginBottom: "4px" }}>
                Correct: {a.correct}
              </p>
            )}
            <p style={{ fontSize: "13px" }}>{a.isCorrect ? "✅ Correct" : "❌ Wrong"}</p>
            {a.explanation && (
              <div className="ee-explanation" style={{ marginTop: "10px", marginBottom: 0 }}>
                <span className="exp-heading">💡 Explanation</span>
                <p className="exp-body">{a.explanation}</p>
              </div>
            )}
          </div>
        ))}

        {/* Action buttons */}
        <div className="ee-btn-row mt-8">
          {weakSubjects.length > 0 && (
            <button className="ee-btn ee-btn-danger" onClick={() => onNavigate("weak")}>
              Practice Weak Areas 🔥
            </button>
          )}
          <button className="ee-btn ee-btn-secondary" onClick={() => onNavigate("progress")}>
            View Progress 📊
          </button>
          <button className="ee-btn ee-btn-outline" onClick={() => onNavigate("home")}>
            ← Back to Home
          </button>
        </div>

      </div>
    </div>
  )
}

export default CBTResult
