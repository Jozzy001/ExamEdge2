import { useEffect, useState } from "react"
import { saveCBTRecord, formatDate, formatTime } from "../utils/cbtHistory"
import { processQuizResult } from "../utils/gamification"
import { XPToast, BadgeQueue, LevelUpModal } from "../components/BadgeModal"

const CBTResult = ({ onNavigate, record = null }) => {
  const [report, setReport] = useState(null)
  const [isPersonalBest, setIsPersonalBest] = useState(false)
  const [prevBest, setPrevBest] = useState(0)
  const [xpToast, setXpToast] = useState(null)
  const [newBadges, setNewBadges] = useState([])
  const [levelUpInfo, setLevelUpInfo] = useState(null)
  const [showAllAnswers, setShowAllAnswers] = useState(false)
  const isHistoryReview = !!record

  useEffect(() => {
    if (isHistoryReview) { setReport(record); return }
    const data = JSON.parse(localStorage.getItem("cbtReport") || "null")
    if (!data) return
    setReport(data)
    const { isPersonalBest: isPB, prevBest: pb } = saveCBTRecord(data)
    setIsPersonalBest(isPB)
    setPrevBest(pb)
    const result = processQuizResult({ score: data.score, total: data.total })
    if (isPB && data.total >= 10) {
      const extra = Math.round((data.percentage - pb) / 2)
      if (extra > 0) result.xpEarned += extra
    }
    if (result.xpEarned > 0) setXpToast(result.xpEarned)
    if (result.newBadges?.length > 0) setNewBadges(result.newBadges)
    if (result.leveledUp) setLevelUpInfo(result.newLevel)
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

  const { score, total, answers = [], subjects = [] } = report
  const percentage = report.percentage || Math.round((score / total) * 100)
  const emoji = percentage >= 70 ? "🌟" : percentage >= 50 ? "👍" : "💪"
  const msg = percentage >= 70 ? "Excellent performance!" : percentage >= 50 ? "Good effort! Keep studying." : "Keep practicing — you'll improve!"

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

  const wrongAnswers = answers.filter(a => !a.isCorrect)

  return (
    <div className="ee-page">
      {!isHistoryReview && xpToast && <XPToast xp={xpToast} onDone={() => setXpToast(null)} />}
      {!isHistoryReview && levelUpInfo && <LevelUpModal level={levelUpInfo} onClose={() => setLevelUpInfo(null)} />}
      {!isHistoryReview && !levelUpInfo && newBadges.length > 0 && (
        <BadgeQueue badges={newBadges} onAllDone={() => setNewBadges([])} />
      )}

      <header className="ee-header">
        <button className="ee-back-btn" onClick={() => onNavigate(isHistoryReview ? "cbtHistory" : "home")}>
          ← {isHistoryReview ? "History" : "Home"}
        </button>
        <span style={{ fontWeight: 800, fontSize: "16px" }}>
          {isHistoryReview ? "CBT Review" : "CBT Result"}
        </span>
        <span style={{ width: 60 }} />
      </header>

      <div className="ee-content">

        {isHistoryReview && report.date && (
          <div style={{ textAlign: "center", fontSize: 12, color: "var(--text3)", marginBottom: 8 }}>
            📅 {formatDate(report.date)}
            {report.timeTaken && <span style={{ marginLeft: 10 }}>⏱ {formatTime(report.timeTaken)}</span>}
          </div>
        )}

        {isPersonalBest && !isHistoryReview && (
          <div style={{
            background: "linear-gradient(135deg, #fff8e1, #fff3cd)",
            border: "1.5px solid #ffc107", borderRadius: "var(--radius-lg)",
            padding: "12px 16px", marginBottom: 16,
            display: "flex", alignItems: "center", gap: 10
          }}>
            <span style={{ fontSize: 24 }}>🏆</span>
            <div>
              <div style={{ fontWeight: 800, fontSize: 13, color: "#7a5800" }}>New Personal Best!</div>
              <div style={{ fontSize: 12, color: "#a07000" }}>
                {prevBest > 0 ? `Up from ${prevBest}% — great improvement!` : "Your first CBT record!"}
              </div>
            </div>
          </div>
        )}

        <div className="ee-result-score">
          <span className="result-emoji">{emoji}</span>
          <div className="result-fraction">{score} / {total}</div>
          <div className={`result-percent ${percentage >= 70 ? "color-success" : percentage >= 50 ? "color-warning" : "color-danger"}`}>
            {percentage}%
          </div>
          <div className="result-msg">{msg}</div>
          {subjects.length > 0 && (
            <div style={{ marginTop: 8, fontSize: 12, color: "var(--text2)" }}>{subjects.join(" · ")}</div>
          )}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 20 }}>
          {[
            { icon: "✅", label: "Correct", value: score },
            { icon: "❌", label: "Wrong", value: wrongAnswers.length },
            { icon: "⏭", label: "Skipped", value: answers.filter(a => a.selected === "skipped").length },
          ].map((stat, i) => (
            <div key={i} style={{
              background: "var(--surface2)", borderRadius: "var(--radius-md)",
              padding: "12px 8px", textAlign: "center", border: "1px solid var(--border)"
            }}>
              <div style={{ fontSize: 18, marginBottom: 2 }}>{stat.icon}</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: "var(--text)" }}>{stat.value}</div>
              <div style={{ fontSize: 10, color: "var(--text3)" }}>{stat.label}</div>
            </div>
          ))}
        </div>

        <span className="ee-label">Performance by subject</span>
        {Object.entries(subjectStats).map(([subj, stats], si) => {
          const subjPct = Math.round((stats.correct / stats.total) * 100)
          const subjColor = subjPct >= 70 ? "var(--success)" : subjPct >= 50 ? "var(--warning)" : "var(--accent)"
          const isWeakSubj = subjPct < 50
          return (
            <div key={si} style={{
              background: "var(--surface)",
              border: `1px solid ${isWeakSubj ? "rgba(255,107,107,0.4)" : "var(--border)"}`,
              borderRadius: "var(--radius-lg)", padding: "14px 16px", marginBottom: 12
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <span style={{ fontWeight: 800, fontSize: 15, color: "var(--text)" }}>
                  {subj}{isWeakSubj && <span className="ee-weak-badge">Weak</span>}
                </span>
                <span style={{ fontWeight: 700, fontSize: 15, color: subjColor }}>{subjPct}%</span>
              </div>
              <div className="topic-bar" style={{ marginBottom: 10 }}>
                <div className="topic-bar-fill" style={{ width: `${subjPct}%`, background: subjColor }} />
              </div>
              <div style={{ fontSize: 12, color: "var(--text2)", marginBottom: 10 }}>{stats.correct}/{stats.total} correct</div>
              {Object.entries(stats.topics).map(([top, ts], ti) => {
                const topPct = Math.round((ts.correct / ts.total) * 100)
                const topColor = topPct >= 70 ? "var(--success)" : topPct >= 50 ? "var(--warning)" : "var(--accent)"
                return (
                  <div key={ti} style={{ background: "var(--surface2)", borderRadius: "var(--radius-md)", padding: "8px 12px", marginBottom: 6 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                      <span style={{ fontSize: 12, fontWeight: 700, color: "var(--text)" }}>{top}</span>
                      <span style={{ fontSize: 12, fontWeight: 700, color: topColor }}>{topPct}%</span>
                    </div>
                    <div style={{ height: 4, background: "var(--surface3)", borderRadius: 2, overflow: "hidden" }}>
                      <div style={{ height: "100%", width: `${topPct}%`, background: topColor, borderRadius: 2 }} />
                    </div>
                    <div style={{ fontSize: 11, color: "var(--text3)", marginTop: 3 }}>{ts.correct}/{ts.total} correct</div>
                  </div>
                )
              })}
            </div>
          )
        })}

        {weakSubjects.length > 0 && (
          <div style={{
            background: "rgba(255,107,107,0.06)", border: "1px solid rgba(255,107,107,0.25)",
            borderRadius: "var(--radius-md)", padding: "14px 16px", marginBottom: 20
          }}>
            <div style={{ fontWeight: 800, fontSize: 12, color: "var(--accent)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em" }}>
              ⚠️ Weak Areas
            </div>
            {weakSubjects.map((s, i) => (
              <div key={i} style={{ fontSize: 13, color: "var(--text)", marginBottom: 4 }}>• {s} — needs more practice</div>
            ))}
          </div>
        )}

        <hr className="ee-divider" />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <span className="ee-label" style={{ margin: 0 }}>Review answers ({answers.length})</span>
          <button onClick={() => setShowAllAnswers(p => !p)} style={{
            background: "var(--primary-light)", color: "var(--primary-text)",
            border: "none", borderRadius: "var(--radius-pill)",
            padding: "4px 12px", fontSize: 11, fontWeight: 800,
            cursor: "pointer", fontFamily: "var(--font-main)"
          }}>
            {showAllAnswers ? "Wrong only" : "Show all"}
          </button>
        </div>

        {(showAllAnswers ? answers : wrongAnswers).map((a, index) => (
          <div key={index} className="ee-card-sm" style={{
            borderColor: a.isCorrect ? "var(--success)" : "rgba(255,107,107,0.4)",
            background: a.isCorrect ? "var(--success-light)" : "var(--accent-light)",
            marginBottom: 10
          }}>
            <div style={{ display: "flex", gap: 6, marginBottom: 6 }}>
              {a.subject && (
                <span style={{ fontSize: 10, fontWeight: 800, background: "var(--primary-light)", color: "var(--primary-text)", padding: "2px 7px", borderRadius: "var(--radius-pill)" }}>{a.subject}</span>
              )}
              {a.topic && (
                <span style={{ fontSize: 10, fontWeight: 600, background: "var(--surface2)", color: "var(--text2)", padding: "2px 7px", borderRadius: "var(--radius-pill)" }}>{a.topic}</span>
              )}
              <span style={{ fontSize: 10, fontWeight: 800, marginLeft: "auto", color: a.isCorrect ? "var(--success)" : "var(--accent)" }}>
                {a.isCorrect ? "✅" : a.selected === "skipped" ? "⏭" : "❌"}
              </span>
            </div>
            <p style={{ fontSize: 13, fontWeight: 700, color: "var(--text)", marginBottom: 8 }}>
              Q{answers.indexOf(a) + 1}: {a.question}
            </p>
            <p style={{ fontSize: 13, marginBottom: 4 }}>
              Your answer: <span style={{ fontWeight: 700, color: a.isCorrect ? "var(--success)" : "var(--accent)" }}>
                {a.selected === "skipped" ? "⏭ Skipped" : a.selected || "Not answered"}
              </span>
            </p>
            {!a.isCorrect && a.selected !== "skipped" && (
              <p style={{ fontSize: 13, color: "var(--success)", fontWeight: 700, marginBottom: 4 }}>Correct: {a.correct}</p>
            )}
            {a.explanation && (
              <div className="ee-explanation" style={{ marginTop: 10, marginBottom: 0 }}>
                <span className="exp-heading">💡 Explanation</span>
                <p className="exp-body">{a.explanation}</p>
              </div>
            )}
          </div>
        ))}

        {wrongAnswers.length === 0 && !showAllAnswers && (
          <div style={{ textAlign: "center", padding: "20px 0", color: "var(--text3)", fontSize: 13 }}>
            🎉 No wrong answers!
          </div>
        )}

        <div className="ee-btn-row mt-8">
          {!isHistoryReview && weakSubjects.length > 0 && (
            <button className="ee-btn ee-btn-danger" onClick={() => onNavigate("weak")}>Practice Weak Areas 🔥</button>
          )}
          <button className="ee-btn ee-btn-secondary" onClick={() => onNavigate("cbtHistory")}>📋 CBT History</button>
          {!isHistoryReview && (
            <button className="ee-btn ee-btn-outline" onClick={() => onNavigate("home")}>← Home</button>
          )}
        </div>

      </div>
    </div>
  )
}

export default CBTResult
