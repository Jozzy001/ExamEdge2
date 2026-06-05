// Weak Areas — shows questions the user previously got wrong
// Like Study Mode but only with failed questions and their correct answers

import { useState } from "react"
import { getCBTHistory } from "../utils/cbtHistory"

const WeakAreas = ({ onNavigate, onBack }) => {
  const [selectedSubject, setSelectedSubject] = useState(null)
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)

  const history = getCBTHistory()

  // Get failed questions from CBT history
  // A question is "failed" if the user got it wrong in their most recent attempt
  // If they got it RIGHT in the latest CBT, remove it from weak areas
  const failedQuestions = []
  const questionStatus = {} // question key -> {failed: bool, lastAttempt: date}

  // Process history oldest to newest so latest attempt wins
  const sortedHistory = [...history].sort((a, b) => new Date(a.date) - new Date(b.date))
  
  sortedHistory.forEach(record => {
    if (!record.answers) return
    record.answers.forEach(a => {
      if (!a.question) return
      const key = a.question.trim().slice(0, 60)
      questionStatus[key] = {
        failed: !a.isCorrect,
        question: a.question,
        options: a.options || [],
        answer: a.correct || a.answer,
        explanation: a.explanation || "",
        topic: a.topic || "General",
        subject: a.subject || "General",
        selected: a.selected,
        year: a.year,
      }
    })
  })

  // Only include questions where the LATEST attempt was wrong
  const seen = new Set()
  Object.values(questionStatus).forEach(q => {
    if (q.failed) {
      const key = q.question.trim().slice(0, 60)
      if (!seen.has(key)) {
        seen.add(key)
        failedQuestions.push(q)
      }
    }
  })

  // Group by subject then topic
  const bySubject = {}
  failedQuestions.forEach(q => {
    if (!bySubject[q.subject]) bySubject[q.subject] = {}
    if (!bySubject[q.subject][q.topic]) bySubject[q.subject][q.topic] = []
    bySubject[q.subject][q.topic].push(q)
  })

  const subjects = Object.keys(bySubject)

  const handleBack = () => {
    if (selectedTopic) {
      setSelectedTopic(null)
      setCurrentIndex(0)
      setShowAnswer(false)
    } else if (selectedSubject) {
      setSelectedSubject(null)
    } else {
      onBack ? onBack() : onNavigate("home")
    }
  }

  // ===== SCREEN 3: Questions for selected topic =====
  if (selectedSubject && selectedTopic) {
    const questions = bySubject[selectedSubject][selectedTopic]
    const q = questions[currentIndex]
    const total = questions.length

    return (
      <div className="ee-page">
        <header className="ee-header">
          <button className="ee-back-btn" onClick={handleBack}>← Back</button>
          <span style={{ fontWeight: 800, fontSize: 14 }}>{selectedTopic}</span>
          <span style={{ fontSize: 12, color: "var(--text2)" }}>{currentIndex + 1}/{total}</span>
        </header>

        <div className="ee-content">
          {/* Progress bar */}
          <div style={{ height: 4, borderRadius: 2, background: "var(--border)", marginBottom: 20 }}>
            <div style={{
              height: "100%", borderRadius: 2, background: "var(--primary)",
              width: `${((currentIndex + 1) / total) * 100}%`,
              transition: "width 0.3s"
            }} />
          </div>

          {/* Subject tag */}
          <div style={{
            display: "inline-block", padding: "3px 10px", borderRadius: 20,
            background: "var(--primary-light)", color: "var(--primary)",
            fontSize: 11, fontWeight: 700, marginBottom: 12
          }}>{selectedSubject}</div>

          {/* Wrong answer notice */}
          <div style={{
            background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)",
            borderRadius: "var(--radius-md)", padding: "8px 12px",
            fontSize: 12, color: "#dc2626", fontWeight: 600, marginBottom: 14
          }}>
            ❌ You answered: <strong>{q.selected || "Skipped"}</strong>
          </div>

          {/* Question */}
          <div style={{
            background: "var(--surface)", border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)", padding: "16px", marginBottom: 16,
            fontSize: 14, color: "var(--text)", lineHeight: 1.7, fontWeight: 600
          }}>
            {q.question}
          </div>

          {/* Options */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
            {q.options?.map((opt, i) => {
              const isCorrect = opt === q.answer
              const isWrong = opt === q.selected && !isCorrect
              return (
                <div key={i} style={{
                  padding: "12px 14px", borderRadius: "var(--radius-md)",
                  background: isCorrect ? "rgba(34,197,94,0.1)" : isWrong ? "rgba(239,68,68,0.08)" : "var(--surface)",
                  border: `1.5px solid ${isCorrect ? "rgba(34,197,94,0.4)" : isWrong ? "rgba(239,68,68,0.3)" : "var(--border)"}`,
                  display: "flex", alignItems: "center", gap: 10
                }}>
                  <span style={{
                    width: 24, height: 24, borderRadius: "50%", flexShrink: 0,
                    background: isCorrect ? "#16a34a" : isWrong ? "#dc2626" : "var(--border)",
                    color: isCorrect || isWrong ? "#fff" : "var(--text3)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 11, fontWeight: 800
                  }}>
                    {isCorrect ? "✓" : isWrong ? "✗" : String.fromCharCode(65 + i)}
                  </span>
                  <span style={{
                    fontSize: 13, color: isCorrect ? "#16a34a" : isWrong ? "#dc2626" : "var(--text)",
                    fontWeight: isCorrect ? 700 : 400
                  }}>
                    {opt.replace(/^[A-D][\.\)\s]+/, "")}
                  </span>
                  {isCorrect && <span style={{ marginLeft: "auto", fontSize: 11, fontWeight: 800, color: "#16a34a" }}>✓ Correct</span>}
                </div>
              )
            })}
          </div>

          {/* Show/Hide explanation */}
          <button
            onClick={() => setShowAnswer(p => !p)}
            style={{
              width: "100%", padding: "10px",
              borderRadius: "var(--radius-md)",
              border: "1.5px solid var(--primary)",
              background: showAnswer ? "var(--primary)" : "transparent",
              color: showAnswer ? "#fff" : "var(--primary)",
              fontSize: 13, fontWeight: 700,
              cursor: "pointer", fontFamily: "var(--font-main)",
              marginBottom: showAnswer ? 12 : 0
            }}
          >
            {showAnswer ? "Hide Explanation ▲" : "💡 Show Explanation ▼"}
          </button>

          {showAnswer && q.explanation && (
            <div style={{
              background: "rgba(102,126,234,0.08)", borderRadius: "var(--radius-md)",
              padding: "14px", border: "1px solid var(--primary)33",
              marginBottom: 16
            }}>
              <div style={{ fontSize: 11, fontWeight: 800, color: "var(--primary)", marginBottom: 6, textTransform: "uppercase" }}>
                💡 Why the correct answer is right
              </div>
              <p style={{ fontSize: 13, color: "var(--text)", lineHeight: 1.7, margin: 0 }}>
                {q.explanation}
              </p>
            </div>
          )}

          {/* Navigation */}
          <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
            <button
              onClick={() => { setCurrentIndex(p => p - 1); setShowAnswer(false) }}
              disabled={currentIndex === 0}
              className="ee-btn ee-btn-secondary"
              style={{ flex: 1, opacity: currentIndex === 0 ? 0.4 : 1 }}
            >← Prev</button>
            {currentIndex < total - 1 ? (
              <button
                onClick={() => { setCurrentIndex(p => p + 1); setShowAnswer(false) }}
                className="ee-btn ee-btn-primary"
                style={{ flex: 1 }}
              >Next →</button>
            ) : (
              <button
                onClick={handleBack}
                className="ee-btn ee-btn-primary"
                style={{ flex: 1 }}
              >✓ Done!</button>
            )}
          </div>
        </div>
      </div>
    )
  }

  // ===== SCREEN 2: Topics for selected subject =====
  if (selectedSubject) {
    const topics = bySubject[selectedSubject]
    return (
      <div className="ee-page">
        <header className="ee-header">
          <button className="ee-back-btn" onClick={handleBack}>← Back</button>
          <span style={{ fontWeight: 800, fontSize: 15 }}>⚠️ {selectedSubject}</span>
          <span style={{ width: 60 }} />
        </header>
        <div className="ee-content">
          <p style={{ fontSize: 13, color: "var(--text2)", marginBottom: 16, lineHeight: 1.6 }}>
            Pick a topic to review questions you got wrong:
          </p>
          {Object.entries(topics).map(([topic, qs]) => (
            <button
              key={topic}
              onClick={() => { setSelectedTopic(topic); setCurrentIndex(0); setShowAnswer(false) }}
              style={{
                width: "100%", display: "flex", alignItems: "center",
                justifyContent: "space-between", padding: "14px 16px",
                borderRadius: "var(--radius-md)", marginBottom: 8,
                background: "var(--surface)", border: "1.5px solid rgba(239,68,68,0.2)",
                cursor: "pointer", fontFamily: "var(--font-main)"
              }}
            >
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)" }}>{topic}</div>
                <div style={{ fontSize: 11, color: "#dc2626" }}>{qs.length} failed question{qs.length !== 1 ? "s" : ""}</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{
                  fontSize: 11, fontWeight: 800, padding: "3px 10px",
                  borderRadius: 20, background: "rgba(239,68,68,0.1)", color: "#dc2626"
                }}>❌ {qs.length}</span>
                <span style={{ color: "var(--text3)" }}>→</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    )
  }

  // ===== SCREEN 1: Subject selection =====
  const totalFailed = failedQuestions.length

  if (totalFailed === 0) {
    return (
      <div className="ee-page">
        <header className="ee-header">
          <button className="ee-back-btn" onClick={handleBack}>← Back</button>
          <span style={{ fontWeight: 800, fontSize: 15 }}>⚠️ Weak Areas</span>
          <span style={{ width: 60 }} />
        </header>
        <div className="ee-content">
          <div className="ee-empty">
            <span className="ee-empty-icon">🎉</span>
            {history.length === 0 ? (
              <>
                <p style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>No CBT tests taken yet!</p>
                <p style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.6, marginBottom: 20 }}>
                  Take CBT tests regularly and we'll show you every question you got wrong so you can revise them.
                </p>
                <button className="ee-btn ee-btn-primary" onClick={() => onNavigate("cbtSubjectSelect")}>
                  Take a CBT Test 🧪
                </button>
              </>
            ) : (
              <>
                <p style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>No wrong answers found!</p>
                <p style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.6 }}>
                  You got everything right in your CBT tests. Keep it up! 🌟
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="ee-page">
      <header className="ee-header">
        <button className="ee-back-btn" onClick={handleBack}>← Back</button>
        <span style={{ fontWeight: 800, fontSize: 15 }}>⚠️ Weak Areas</span>
        <span style={{ width: 60 }} />
      </header>
      <div className="ee-content">
        <div style={{
          background: "rgba(239,68,68,0.08)", border: "1.5px solid rgba(239,68,68,0.2)",
          borderRadius: "var(--radius-xl)", padding: "16px 20px", marginBottom: 20
        }}>
          <div style={{ fontSize: 28, marginBottom: 8 }}>❌</div>
          <div style={{ fontSize: 18, fontWeight: 800, color: "#dc2626", marginBottom: 4 }}>
            {totalFailed} Questions to Revise
          </div>
          <div style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.6 }}>
            These are questions you got wrong in past CBT tests.
            Study them carefully — they are likely to appear again!
          </div>
        </div>

        <h3 style={{ fontSize: 14, fontWeight: 800, color: "var(--text)", marginBottom: 12 }}>
          Pick a Subject
        </h3>

        {subjects.map(subject => {
          const topicCount = Object.keys(bySubject[subject]).length
          const questionCount = Object.values(bySubject[subject]).reduce((sum, qs) => sum + qs.length, 0)
          return (
            <button
              key={subject}
              onClick={() => setSelectedSubject(subject)}
              style={{
                width: "100%", display: "flex", alignItems: "center",
                justifyContent: "space-between", padding: "16px 18px",
                borderRadius: "var(--radius-md)", marginBottom: 10,
                background: "var(--surface)",
                border: "1.5px solid rgba(239,68,68,0.2)",
                cursor: "pointer", fontFamily: "var(--font-main)"
              }}
            >
              <div style={{ textAlign: "left" }}>
                <div style={{ fontWeight: 800, fontSize: 15, color: "var(--text)" }}>{subject}</div>
                <div style={{ fontSize: 12, color: "var(--text2)", marginTop: 2 }}>
                  {topicCount} topic{topicCount !== 1 ? "s" : ""} · {questionCount} failed question{questionCount !== 1 ? "s" : ""}
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{
                  fontSize: 12, fontWeight: 800, padding: "3px 10px",
                  borderRadius: 20, background: "rgba(239,68,68,0.1)", color: "#dc2626"
                }}>❌ {questionCount}</span>
                <span style={{ color: "var(--text3)", fontSize: 18 }}>→</span>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default WeakAreas