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
            <button className="ee-btn ee-btn-primary" onClick={() => onNavigate("cbt")}>
              Take CBT 🧪
            </button>
          </div>
        </div>
      </div>
    )
  }

  const { score, total, answers } = report
  const percentage = Math.round((score / total) * 100)
  const emoji = percentage >= 70 ? "🌟" : percentage >= 50 ? "👍" : "💪"
  const msg = percentage >= 70
    ? "Excellent performance!"
    : percentage >= 50
    ? "Good effort! Keep studying."
    : "Keep practicing — you'll improve!"

  // Topic breakdown
  const topicStats = {}
  answers.forEach(a => {
    const t = a.topic || "General"
    if (!topicStats[t]) topicStats[t] = { correct: 0, total: 0 }
    topicStats[t].total += 1
    if (a.isCorrect) topicStats[t].correct += 1
  })

  const weakTopics = Object.entries(topicStats)
    .filter(([_, s]) => (s.correct / s.total) * 100 < 50)
    .map(([topic]) => topic)

  return (
    <div className="ee-page">
      <header className="ee-header">
        <button className="ee-back-btn" onClick={() => onNavigate("home")}>← Home</button>
        <span style={{ fontWeight: 800, fontSize: "16px" }}>CBT Result</span>
        <span style={{ width: 60 }} />
      </header>

      <div className="ee-content">

        {/* Score card */}
        <div className="ee-result-score">
          <span className="result-emoji">{emoji}</span>
          <div className="result-fraction">{score} / {total}</div>
          <div className={`result-percent ${percentage >= 70 ? "color-success" : percentage >= 50 ? "color-warning" : "color-danger"}`}>
            {percentage}%
          </div>
          <div className="result-msg">{msg}</div>
        </div>

        {/* Topic breakdown */}
        <span className="ee-label">Topic breakdown</span>
        {Object.entries(topicStats).map(([t, s], i) => {
          const pct = Math.round((s.correct / s.total) * 100)
          const barColor = pct >= 70 ? "var(--success)" : pct >= 50 ? "var(--warning)" : "var(--accent)"
          const isWeak = pct < 50
          return (
            <div key={i} className={`ee-topic-card${isWeak ? " weak" : ""}`}>
              <div className="topic-row">
                <span className="topic-name">
                  {t}
                  {isWeak && <span className="ee-weak-badge">Weak</span>}
                </span>
                <span className="topic-score" style={{ color: barColor }}>{pct}%</span>
              </div>
              <div className="topic-bar">
                <div className="topic-bar-fill" style={{ width: `${pct}%`, background: barColor }} />
              </div>
              <div className="topic-meta">{s.correct}/{s.total} correct</div>
            </div>
          )
        })}

        <hr className="ee-divider" />

        {/* Answer review */}
        <span className="ee-label">Review all answers</span>

        {answers.map((a, index) => (
          <div
            key={index}
            className="ee-card-sm"
            style={{
              borderColor: a.isCorrect ? "var(--success)" : "rgba(255,107,107,0.4)",
              background: a.isCorrect ? "var(--success-light)" : "var(--accent-light)"
            }}
          >
            <p style={{ fontSize: "13px", fontWeight: 700, color: "var(--text)", marginBottom: "8px" }}>
              Q{index + 1}: {a.question}
            </p>

            {a.topic && (
              <p style={{ fontSize: "11px", color: "var(--text2)", marginBottom: "6px" }}>
                {a.topic}
              </p>
            )}

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
          {weakTopics.length > 0 && (
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
