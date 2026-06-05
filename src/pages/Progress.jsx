import { useState } from "react"
import { getCBTHistory, formatDate, formatTime } from "../utils/cbtHistory"

const SUBJECT_COLORS = {
  "English":     "#4a90d9",
  "Mathematics": "#48bb78",
  "Physics":     "#ed8936",
  "Chemistry":   "#9f7aea",
  "Biology":     "#38a169",
  "Government":  "#e53e3e",
  "Economics":   "#d69e2e",
  "Commerce":    "#3182ce",
  "Literature":  "#805ad5",
  "CRK":         "#b7791f",
  "Accounts":    "#2d3748",
}

const getScoreColor = (pct) => pct >= 70 ? "#16a34a" : pct >= 50 ? "#d97706" : "#dc2626"
const getScoreBg = (pct) => pct >= 70 ? "rgba(34,197,94,0.1)" : pct >= 50 ? "rgba(245,158,11,0.1)" : "rgba(239,68,68,0.1)"

const Progress = ({ onNavigate, onBack }) => {
  const [expandedSubject, setExpandedSubject] = useState(null)
  const history = getCBTHistory()
  const hasAny = history.length > 0

  // Build stats from CBT history
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
  const overallPct = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0

  // Speed metric — avg seconds per question
  const avgSecondsPerQ = totalAnswered > 0 && totalTimeSpent > 0
    ? Math.round(totalTimeSpent / totalAnswered)
    : null
  const speedRating = avgSecondsPerQ
    ? avgSecondsPerQ <= 30 ? { label: "Fast ⚡", color: "#16a34a" }
    : avgSecondsPerQ <= 60 ? { label: "Average 🟡", color: "#d97706" }
    : { label: "Slow 🐢", color: "#dc2626" }
    : null

  // Accuracy rating
  const accuracyRating = overallPct >= 70 ? { label: "High 🎯", color: "#16a34a" }
    : overallPct >= 50 ? { label: "Medium ⚠️", color: "#d97706" }
    : { label: "Low ❌", color: "#dc2626" }

  // Weak areas
  const weakAreas = []
  subjects.forEach(([subj, topics]) => {
    Object.entries(topics).forEach(([topic, stats]) => {
      const pct = Math.round((stats.score / stats.total) * 100)
      if (pct < 50) weakAreas.push({ subject: subj, topic, pct, ...stats })
    })
  })
  weakAreas.sort((a, b) => a.pct - b.pct)

  // Streak
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

  // Performance over time data (last 10 tests)
  const timelineData = history.slice(0, 10).reverse()

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
              and show how much you're improving over time. 🚀
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
          marginBottom: 16
        }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text2)", marginBottom: 12 }}>
            Overall Performance
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            {/* Donut */}
            <div style={{
              width: 80, height: 80, borderRadius: "50%",
              background: `conic-gradient(${getScoreColor(overallPct)} ${overallPct * 3.6}deg, var(--border) 0deg)`,
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
            }}>
              <div style={{
                width: 62, height: 62, borderRadius: "50%",
                background: "var(--surface)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 17, fontWeight: 900, color: getScoreColor(overallPct)
              }}>{overallPct}%</div>
            </div>
            <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {[
                { label: "Correct", value: totalCorrect, color: "#16a34a" },
                { label: "Total Qs", value: totalAnswered, color: "var(--text)" },
                { label: "Tests", value: history.length, color: "var(--primary)" },
                { label: "Streak 🔥", value: `${streak}d`, color: "#f59e0b" },
              ].map((s, i) => (
                <div key={i}>
                  <div style={{ fontSize: 18, fontWeight: 900, color: s.color }}>{s.value}</div>
                  <div style={{ fontSize: 10, color: "var(--text2)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Speed & Accuracy */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
          {/* Accuracy */}
          <div style={{
            background: "var(--surface)", border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)", padding: "14px"
          }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text2)", marginBottom: 6 }}>🎯 ACCURACY</div>
            <div style={{ fontSize: 22, fontWeight: 900, color: accuracyRating.color }}>{overallPct}%</div>
            <div style={{ fontSize: 12, fontWeight: 700, color: accuracyRating.color }}>{accuracyRating.label}</div>
            <div style={{ height: 4, borderRadius: 2, background: "var(--border)", marginTop: 8 }}>
              <div style={{ height: "100%", width: `${overallPct}%`, borderRadius: 2, background: accuracyRating.color }} />
            </div>
          </div>

          {/* Speed */}
          <div style={{
            background: "var(--surface)", border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)", padding: "14px"
          }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text2)", marginBottom: 6 }}>⚡ SPEED</div>
            {avgSecondsPerQ ? (
              <>
                <div style={{ fontSize: 22, fontWeight: 900, color: speedRating.color }}>{avgSecondsPerQ}s</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: speedRating.color }}>
                  {speedRating.label} per question
                </div>
                <div style={{ height: 4, borderRadius: 2, background: "var(--border)", marginTop: 8 }}>
                  <div style={{
                    height: "100%",
                    width: `${Math.min(100, Math.round((60 / avgSecondsPerQ) * 100))}%`,
                    borderRadius: 2, background: speedRating.color
                  }} />
                </div>
              </>
            ) : (
              <div style={{ fontSize: 12, color: "var(--text2)" }}>Complete a timed CBT to measure speed</div>
            )}
          </div>
        </div>

        {/* Performance Over Time — Line Chart */}
        {timelineData.length > 1 && (
          <div style={{
            background: "var(--surface)", border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)", padding: "16px", marginBottom: 16
          }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: "var(--text)", marginBottom: 16 }}>
              📈 Performance Over Time
            </div>
            <div style={{ position: "relative", height: 120 }}>
              {/* Y axis labels */}
              {[100, 75, 50, 25, 0].map(y => (
                <div key={y} style={{
                  position: "absolute", left: 0, top: `${(100 - y) / 100 * 100}%`,
                  fontSize: 9, color: "var(--text3)", transform: "translateY(-50%)"
                }}>{y}%</div>
              ))}
              {/* Grid lines */}
              {[75, 50, 25].map(y => (
                <div key={y} style={{
                  position: "absolute", left: 24, right: 0,
                  top: `${(100 - y)}%`, height: 1,
                  borderTop: "1px dashed var(--border)"
                }} />
              ))}
              {/* 50% pass line */}
              <div style={{
                position: "absolute", left: 24, right: 0,
                top: "50%", height: 1,
                borderTop: "2px dashed #d97706",
                opacity: 0.6
              }} />
              {/* Line chart */}
              <svg style={{ position: "absolute", left: 24, right: 0, top: 0, bottom: 0, width: "calc(100% - 24px)", height: "100%", overflow: "visible" }}>
                {/* Line path */}
                <polyline
                  fill="none"
                  stroke="var(--primary)"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                  points={timelineData.map((r, i) => {
                    const x = timelineData.length === 1 ? 50 : (i / (timelineData.length - 1)) * 100
                    const y = 100 - (r.percentage || 0)
                    return `${x}%,${y}%`
                  }).join(" ")}
                />
                {/* Area fill */}
                <polygon
                  fill="var(--primary)"
                  opacity="0.1"
                  points={[
                    ...timelineData.map((r, i) => {
                      const x = timelineData.length === 1 ? 50 : (i / (timelineData.length - 1)) * 100
                      const y = 100 - (r.percentage || 0)
                      return `${x}%,${y}%`
                    }),
                    "100%,100%", "0%,100%"
                  ].join(" ")}
                />
                {/* Data points */}
                {timelineData.map((r, i) => {
                  const x = timelineData.length === 1 ? 50 : (i / (timelineData.length - 1)) * 100
                  const y = 100 - (r.percentage || 0)
                  const color = getScoreColor(r.percentage || 0)
                  return (
                    <g key={i}>
                      <circle cx={`${x}%`} cy={`${y}%`} r="5" fill="white" stroke={color} strokeWidth="2.5" />
                      <text x={`${x}%`} y={`${y}%`} dy="-10" textAnchor="middle" fontSize="10" fill={color} fontWeight="700">
                        {r.percentage}%
                      </text>
                    </g>
                  )
                })}
              </svg>
            </div>
            {/* X axis dates */}
            <div style={{ display: "flex", justifyContent: "space-between", marginLeft: 24, marginTop: 8 }}>
              {timelineData.map((r, i) => (
                <div key={i} style={{ fontSize: 9, color: "var(--text3)", textAlign: "center", flex: 1 }}>
                  {new Date(r.date).toLocaleDateString("en-NG", { day: "numeric", month: "short" })}
                </div>
              ))}
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
          const isExpanded = expandedSubject === subj
          const color = SUBJECT_COLORS[subj] || "#667eea"

          return (
            <div key={subj} style={{
              background: "var(--surface)", border: "1px solid var(--border)",
              borderRadius: "var(--radius-lg)", marginBottom: 10, overflow: "hidden"
            }}>
              <button onClick={() => setExpandedSubject(isExpanded ? null : subj)} style={{
                width: "100%", padding: "14px 16px",
                background: "none", border: "none",
                display: "flex", alignItems: "center", gap: 12,
                cursor: "pointer", fontFamily: "var(--font-main)"
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: "50%", flexShrink: 0,
                  background: `${color}22`, border: `2px solid ${color}44`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 18, fontWeight: 900, color
                }}>{subjPct}%</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                    <span style={{ fontSize: 14, fontWeight: 800, color: "var(--text)" }}>{subj}</span>
                    <span style={{ fontSize: 12, color: "var(--text2)" }}>{subjScore}/{subjTotal}</span>
                  </div>
                  <div style={{ height: 6, borderRadius: 3, background: "var(--border)" }}>
                    <div style={{ height: "100%", width: `${subjPct}%`, borderRadius: 3, background: color, transition: "width 0.5s" }} />
                  </div>
                </div>
                <span style={{ color: "var(--text3)", fontSize: 12 }}>{isExpanded ? "▲" : "▼"}</span>
              </button>

              {isExpanded && (
                <div style={{ padding: "0 16px 14px", borderTop: "1px solid var(--border)" }}>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "var(--text2)", margin: "10px 0 8px" }}>
                    Topics — weakest first
                  </div>
                  {Object.entries(topics)
                    .map(([topic, stats]) => ({
                      topic, pct: Math.round((stats.score / stats.total) * 100), ...stats
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
                        <div style={{ fontSize: 13, fontWeight: 900, color: getScoreColor(pct), minWidth: 40, textAlign: "right" }}>
                          {pct}%
                        </div>
                        {pct < 50 && (
                          <span style={{
                            fontSize: 10, fontWeight: 700, padding: "2px 6px",
                            borderRadius: 10, background: "#dc262620", color: "#dc2626"
                          }}>Weak</span>
                        )}
                      </div>
                    ))}
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
            {weakAreas.map(({ subject, topic, pct }, i) => (
              <div key={i} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "8px 0", borderBottom: i < weakAreas.length - 1 ? "1px solid rgba(239,68,68,0.1)" : "none"
              }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)" }}>{topic}</div>
                  <div style={{ fontSize: 11, color: "var(--text2)" }}>{subject}</div>
                </div>
                <span style={{ fontSize: 13, fontWeight: 900, color: "#dc2626" }}>{pct}%</span>
              </div>
            ))}
            <button
              className="ee-btn ee-btn-danger"
              style={{ marginTop: 12 }}
              onClick={() => onNavigate("weak", null, null, null, null, null)}
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