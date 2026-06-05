import { useState } from "react"
import { getCBTHistory, formatDate } from "../utils/cbtHistory"

const SUBJECT_COLORS = {
  "English":     { color: "#4a90d9", bg: "#f0f7ff" },
  "Mathematics": { color: "#48bb78", bg: "#f0fff4" },
  "Physics":     { color: "#ed8936", bg: "#fffaf0" },
  "Chemistry":   { color: "#9f7aea", bg: "#fdf5ff" },
  "Biology":     { color: "#38a169", bg: "#f0fff4" },
  "Government":  { color: "#e53e3e", bg: "#fff5f5" },
  "Economics":   { color: "#d69e2e", bg: "#fffff0" },
  "Commerce":    { color: "#3182ce", bg: "#ebf8ff" },
  "Literature":  { color: "#805ad5", bg: "#faf5ff" },
  "CRK":         { color: "#b7791f", bg: "#fffbeb" },
  "Accounts":    { color: "#2d3748", bg: "#f7fafc" },
}

const getScoreColor = (pct) => {
  if (pct >= 70) return "#16a34a"
  if (pct >= 50) return "#d97706"
  return "#dc2626"
}

const getScoreBg = (pct) => {
  if (pct >= 70) return "rgba(34,197,94,0.1)"
  if (pct >= 50) return "rgba(245,158,11,0.1)"
  return "rgba(239,68,68,0.1)"
}

const Progress = ({ onNavigate, onBack }) => {
  const [expandedSubject, setExpandedSubject] = useState(null)
  const history = getCBTHistory()

  // Build stats from CBT history answers
  const subjectTopicMap = {}
  let totalAnswered = 0
  let totalCorrect = 0
  let totalTimeSpent = 0

  history.forEach(record => {
    if (record.timeTaken) totalTimeSpent += record.timeTaken
    if (record.answers) {
      record.answers.forEach(a => {
        totalAnswered++
        if (a.isCorrect) totalCorrect++
        const subj = a.subject || "General"
        const top = a.topic || "General"
        if (!subjectTopicMap[subj]) subjectTopicMap[subj] = {}
        if (!subjectTopicMap[subj][top]) subjectTopicMap[subj][top] = { score: 0, total: 0 }
        subjectTopicMap[subj][top].total++
        if (a.isCorrect) subjectTopicMap[subj][top].score++
      })
    }
  })

  const subjects = Object.entries(subjectTopicMap)
  const hasAny = history.length > 0
  const overallPct = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0

  // Weak areas — topics below 50%
  const weakAreas = []
  subjects.forEach(([subj, topics]) => {
    Object.entries(topics).forEach(([topic, stats]) => {
      const pct = Math.round((stats.score / stats.total) * 100)
      if (pct < 50) weakAreas.push({ subject: subj, topic, pct, ...stats })
    })
  })
  weakAreas.sort((a, b) => a.pct - b.pct)

  // Streak calculation
  const streak = (() => {
    if (history.length === 0) return 0
    const dates = history.map(r => new Date(r.date).toDateString())
    const unique = [...new Set(dates)]
    let count = 0
    const today = new Date()
    for (let i = 0; i < 30; i++) {
      const d = new Date(today)
      d.setDate(d.getDate() - i)
      if (unique.includes(d.toDateString())) count++
      else break
    }
    return count
  })()

  if (!hasAny) {
    return (
      <div className="ee-page">
        <header className="ee-header">
          <button className="ee-back-btn" onClick={() => onBack ? onBack() : onNavigate("home")}>← Back</button>
          <span style={{ fontWeight: 800, fontSize: 16 }}>My Progress 📊</span>
          <span style={{ width: 60 }} />
        </header>
        <div className="ee-content">
          <div className="ee-empty">
            <span className="ee-empty-icon">📊</span>
            <p style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>No CBT tests taken yet!</p>
            <p style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.6, marginBottom: 20 }}>
              Take CBT tests regularly so we can track your progress, identify your weak areas,
              and show you how much you're improving over time. 🚀
            </p>
            <button className="ee-btn ee-btn-primary" onClick={() => onNavigate("cbtSubjectSelect")}>
              Take Your First CBT Test 🧪
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="ee-page">
      <header className="ee-header">
        <button className="ee-back-btn" onClick={() => onBack ? onBack() : onNavigate("home")}>← Back</button>
        <span style={{ fontWeight: 800, fontSize: 16 }}>My Progress 📊</span>
        <span style={{ width: 60 }} />
      </header>

      <div className="ee-content">

        {/* Overall Score Card */}
        <div style={{
          background: `linear-gradient(135deg, ${getScoreColor(overallPct)}22, ${getScoreColor(overallPct)}11)`,
          border: `1.5px solid ${getScoreColor(overallPct)}44`,
          borderRadius: "var(--radius-xl)", padding: "20px",
          marginBottom: 20
        }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text2)", marginBottom: 8 }}>
            Overall Performance
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div style={{
              width: 80, height: 80, borderRadius: "50%",
              background: `conic-gradient(${getScoreColor(overallPct)} ${overallPct * 3.6}deg, var(--border) 0deg)`,
              display: "flex", alignItems: "center", justifyContent: "center",
              position: "relative"
            }}>
              <div style={{
                width: 64, height: 64, borderRadius: "50%",
                background: "var(--surface)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 18, fontWeight: 900, color: getScoreColor(overallPct)
              }}>{overallPct}%</div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <div>
                  <div style={{ fontSize: 20, fontWeight: 900, color: "var(--text)" }}>{totalCorrect}</div>
                  <div style={{ fontSize: 11, color: "var(--text2)" }}>Correct</div>
                </div>
                <div>
                  <div style={{ fontSize: 20, fontWeight: 900, color: "var(--text)" }}>{totalAnswered}</div>
                  <div style={{ fontSize: 11, color: "var(--text2)" }}>Total</div>
                </div>
                <div>
                  <div style={{ fontSize: 20, fontWeight: 900, color: "#f59e0b" }}>{streak}🔥</div>
                  <div style={{ fontSize: 11, color: "var(--text2)" }}>Day streak</div>
                </div>
                <div>
                  <div style={{ fontSize: 20, fontWeight: 900, color: "var(--text)" }}>{history.length}</div>
                  <div style={{ fontSize: 11, color: "var(--text2)" }}>CBT Tests</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Over Time */}
        {history.length > 1 && (
          <div style={{
            background: "var(--surface)", border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)", padding: "16px", marginBottom: 20
          }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: "var(--text)", marginBottom: 12 }}>
              📈 Performance Over Time
            </div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 80 }}>
              {history.slice(-10).reverse().map((r, i) => {
                const pct = r.percentage || 0
                const height = Math.max(8, (pct / 100) * 72)
                return (
                  <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                    <div style={{ fontSize: 9, color: "var(--text3)", fontWeight: 700 }}>{pct}%</div>
                    <div style={{
                      width: "100%", height, borderRadius: "4px 4px 0 0",
                      background: getScoreColor(pct),
                      opacity: 0.85,
                      transition: "height 0.3s"
                    }} />
                    <div style={{ fontSize: 8, color: "var(--text3)" }}>
                      {new Date(r.date).toLocaleDateString("en-NG", { day: "numeric", month: "short" })}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Subject Performance */}
        <div style={{ fontSize: 14, fontWeight: 800, color: "var(--text)", marginBottom: 12 }}>
          📚 Subject Performance
        </div>
        {subjects.map(([subj, topics]) => {
          const allTopics = Object.values(topics)
          const subjTotal = allTopics.reduce((a, t) => a + t.total, 0)
          const subjScore = allTopics.reduce((a, t) => a + t.score, 0)
          const subjPct = subjTotal > 0 ? Math.round((subjScore / subjTotal) * 100) : 0
          const meta = SUBJECT_COLORS[subj] || { color: "#667eea", bg: "#f0f4ff" }
          const isExpanded = expandedSubject === subj

          return (
            <div key={subj} style={{
              background: "var(--surface)", border: "1px solid var(--border)",
              borderRadius: "var(--radius-lg)", marginBottom: 10, overflow: "hidden"
            }}>
              {/* Subject header */}
              <button
                onClick={() => setExpandedSubject(isExpanded ? null : subj)}
                style={{
                  width: "100%", padding: "14px 16px",
                  background: "none", border: "none",
                  display: "flex", alignItems: "center", gap: 12,
                  cursor: "pointer", fontFamily: "var(--font-main)"
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                    <span style={{ fontSize: 14, fontWeight: 800, color: "var(--text)" }}>{subj}</span>
                    <span style={{
                      fontSize: 13, fontWeight: 800, color: getScoreColor(subjPct)
                    }}>{subjPct}%</span>
                  </div>
                  {/* Progress bar */}
                  <div style={{
                    height: 8, borderRadius: 4,
                    background: "var(--border)", overflow: "hidden"
                  }}>
                    <div style={{
                      height: "100%", width: `${subjPct}%`,
                      borderRadius: 4,
                      background: getScoreColor(subjPct),
                      transition: "width 0.5s"
                    }} />
                  </div>
                  <div style={{ fontSize: 11, color: "var(--text2)", marginTop: 4 }}>
                    {subjScore}/{subjTotal} correct · {Object.keys(topics).length} topics
                  </div>
                </div>
                <span style={{ color: "var(--text3)", fontSize: 14 }}>{isExpanded ? "▲" : "▼"}</span>
              </button>

              {/* Topic breakdown */}
              {isExpanded && (
                <div style={{ padding: "0 16px 14px", borderTop: "1px solid var(--border)" }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "var(--text2)", margin: "10px 0 8px" }}>
                    Topic Breakdown (weakest first)
                  </div>
                  {Object.entries(topics)
                    .map(([topic, stats]) => ({
                      topic,
                      pct: Math.round((stats.score / stats.total) * 100),
                      ...stats
                    }))
                    .sort((a, b) => a.pct - b.pct)
                    .map(({ topic, pct, score, total }) => (
                      <div key={topic} style={{
                        display: "flex", alignItems: "center", gap: 10,
                        padding: "8px 10px", borderRadius: "var(--radius-sm)",
                        background: getScoreBg(pct), marginBottom: 6
                      }}>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--text)" }}>{topic}</div>
                          <div style={{ fontSize: 10, color: "var(--text2)" }}>{score}/{total} correct</div>
                        </div>
                        <div style={{
                          fontSize: 13, fontWeight: 900,
                          color: getScoreColor(pct),
                          minWidth: 40, textAlign: "right"
                        }}>{pct}%</div>
                        {pct < 50 && (
                          <span style={{
                            fontSize: 10, fontWeight: 700, padding: "2px 6px",
                            borderRadius: 10, background: "#dc262620", color: "#dc2626"
                          }}>Weak</span>
                        )}
                      </div>
                    ))
                  }
                </div>
              )}
            </div>
          )
        })}

        {/* Weak Areas Summary */}
        {weakAreas.length > 0 && (
          <div style={{
            background: "rgba(239,68,68,0.05)", border: "1.5px solid rgba(239,68,68,0.2)",
            borderRadius: "var(--radius-lg)", padding: "16px", marginTop: 8, marginBottom: 16
          }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: "#dc2626", marginBottom: 12 }}>
              ⚠️ Weak Areas ({weakAreas.length} topics below 50%)
            </div>
            {weakAreas.slice(0, 5).map(({ subject, topic, pct }, i) => (
              <div key={i} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "8px 0", borderBottom: i < 4 ? "1px solid rgba(239,68,68,0.1)" : "none"
              }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)" }}>{topic}</div>
                  <div style={{ fontSize: 11, color: "var(--text2)" }}>{subject}</div>
                </div>
                <span style={{
                  fontSize: 13, fontWeight: 900, color: "#dc2626"
                }}>{pct}%</span>
              </div>
            ))}
            <button
              className="ee-btn ee-btn-danger"
              style={{ marginTop: 12 }}
              onClick={() => onNavigate("weak")}
            >
              Practice Weak Areas 🔥
            </button>
          </div>
        )}

      </div>
    </div>
  )
}

export default Progress