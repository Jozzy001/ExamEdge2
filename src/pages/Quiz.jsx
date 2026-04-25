import { useState, useRef, useMemo, useEffect } from "react"
import questions from "../data/questions"

const Quiz = ({ topic, subject, onNavigate }) => {

  const CBT_QUESTION_COUNT = 60
  const CBT_TIME_SECONDS = 3600

  const filteredQuestions = useMemo(() => {

    if (topic === "cbt") {
  const allFlat = questions.flatMap(item => {

    if (item.passage && item.questions) {
      return item.questions
        .filter(q => !subject || q.subject === subject)
        .map(q => ({
          ...q,
          passage: item.passage,
          topic: q.topic || "General",
          subject: q.subject
        }))
    }

    if (subject && item.subject !== subject) return []

    return {
      ...item,
      topic: item.topic || "General",
      subject: item.subject
    }
  })

  return allFlat
    .sort(() => Math.random() - 0.5)
    .slice(0, CBT_QUESTION_COUNT)
}

    let base

    if (topic === "weak") {
      const progress = JSON.parse(localStorage.getItem("progress")) || []
      const grouped = {}
      progress.forEach(item => {
        if (!grouped[item.topic]) grouped[item.topic] = { score: 0, total: 0 }
        grouped[item.topic].score += item.score
        grouped[item.topic].total += item.total
      })
      const weakTopics = Object.entries(grouped)
        .filter(([_, s]) => s.total > 0 && (s.score / s.total) * 100 < 50)
        .map(([t]) => t)

      if (weakTopics.length === 0) return []

      base = questions.filter(q => {
        if (q.passage && q.questions) return q.questions.some(inner =>
          weakTopics.includes(inner.topic) && (!subject || inner.subject === subject)
        )
        return weakTopics.includes(q.topic) && (!subject || q.subject === subject)
      }).sort(() => Math.random() - 0.5)

    } else {
      base = questions.filter(q => {
        if (q.passage && q.questions) return q.questions.some(inner =>
          inner.topic === topic && (!subject || inner.subject === subject)
        )
        return q.topic === topic && (!subject || q.subject === subject)
      })
    }

    return base.flatMap(item => {
      if (item.passage && item.questions) {
        return item.questions.map(q => ({
          ...q,
          passage: item.passage,
          topic: q.topic || topic || "General"
        }))
      }
      return { ...item, topic: item.topic || topic || "General" }
    })
  }, [topic])

  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState("")
  const [showExplanation, setShowExplanation] = useState(false)
  const [finished, setFinished] = useState(false)
  const [started, setStarted] = useState(false)
  const [examTimeLeft, setExamTimeLeft] = useState(3600)

  const answersMapRef = useRef({})
  const isCBT = topic === "cbt"
  const isWeak = topic === "weak"
  const currentQuestion = filteredQuestions[currentIndex]

  const formatTime = (s) => {
    const h = String(Math.floor(s / 3600)).padStart(2, "0")
    const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0")
    const sec = String(s % 60).padStart(2, "0")
    return `${h}:${m}:${sec}`
  }

  useEffect(() => {
    if (!isCBT || !started || finished) return
    if (examTimeLeft <= 0) { setFinished(true); return }
    const t = setTimeout(() => setExamTimeLeft(p => p - 1), 1000)
    return () => clearTimeout(t)
  }, [examTimeLeft, started, finished, isCBT])

  useEffect(() => {
    if (!finished || filteredQuestions.length === 0) return

    const answers = filteredQuestions.map((q, i) => {
      const a = answersMapRef.current[i] || {}
      return {
        question: q.question,
        topic: q.topic || "General",
        subject: q.subject || subject || "English",
        selected: a.selected || "skipped",
        correct: q.answer,
        explanation: q.explanation || "",
        isCorrect: a.selected === q.answer
      }
    })

    const score = answers.filter(a => a.isCorrect).length
    const total = filteredQuestions.length

    if (isCBT) {
      localStorage.setItem("cbtReport", JSON.stringify({
        score, total,
        percentage: Math.round((score / total) * 100),
        answers
      }))
    }

    const existing = JSON.parse(localStorage.getItem("progress")) || []

    if (isCBT || isWeak) {
      const topicGroups = {}
      answers.forEach(a => {
        if (!topicGroups[a.topic]) topicGroups[a.topic] = { score: 0, total: 0, subject: a.subject || subject || "English" }
        topicGroups[a.topic].total += 1
        if (a.isCorrect) topicGroups[a.topic].score += 1
      })
      const newEntries = Object.entries(topicGroups).map(([t, s]) => ({
        topic: t, subject: s.subject || subject || "English",
        score: s.score, total: s.total, date: new Date().toISOString()
      }))
      localStorage.setItem("progress", JSON.stringify([...existing, ...newEntries]))
    } else {
      localStorage.setItem("progress", JSON.stringify([
        ...existing,
        { topic, score, total, date: new Date().toISOString() }
      ]))
    }
  }, [finished])

  // ---- EDGE CASES ----

  if (filteredQuestions.length === 0) {
    return (
      <div className="ee-page">
        <header className="ee-header">
          <button className="ee-back-btn" onClick={() => onNavigate("home")}>← Back</button>
        </header>
        <div className="ee-content">
          <div className="ee-empty">
            <span className="ee-empty-icon">{isWeak ? "🎉" : "📭"}</span>
            <p>
              {isWeak
                ? "No weak areas found! You're doing great across all topics."
                : `No questions found for: ${topic}`}
            </p>
            <button className="ee-btn ee-btn-primary" onClick={() => onNavigate("subjectSelect")}>
              Study Mode 📚
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (isCBT && !started) {
    const timeOptions = [
      { label: "15 mins", seconds: 900 },
      { label: "30 mins", seconds: 1800 },
      { label: "45 mins", seconds: 2700 },
      { label: "1 hour ⭐", seconds: 3600 },
      { label: "1.5 hours", seconds: 5400 },
      { label: "2 hours", seconds: 7200 },
    ]

    return (
      <div className="ee-page">
        <header className="ee-header">
          <button className="ee-back-btn" onClick={() => onNavigate("home")}>← Back</button>
          <span style={{ fontWeight: 800, fontSize: "16px" }}>CBT Mode</span>
          <span style={{ width: 60 }} />
        </header>
        <div className="ee-content">
          <div className="ee-result-score">
            <span className="result-emoji">🧪</span>
            <div className="result-fraction">60 Questions</div>
            <div className="result-msg color-primary">{formatTime(examTimeLeft)} selected</div>
          </div>

          {/* Time selector */}
          <span className="ee-label" style={{ marginTop: 16, display: "block" }}>Choose your time limit</span>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 16 }}>
            {timeOptions.map(opt => (
              <button
                key={opt.seconds}
                onClick={() => setExamTimeLeft(opt.seconds)}
                style={{
                  padding: "12px 8px",
                  borderRadius: "var(--radius-md)",
                  border: examTimeLeft === opt.seconds
                    ? "2px solid var(--primary)"
                    : "1.5px solid var(--border)",
                  background: examTimeLeft === opt.seconds
                    ? "var(--primary-light)"
                    : "var(--surface)",
                  color: examTimeLeft === opt.seconds
                    ? "var(--primary-text)"
                    : "var(--text)",
                  fontFamily: "var(--font-main)",
                  fontWeight: examTimeLeft === opt.seconds ? 800 : 600,
                  fontSize: 13,
                  cursor: "pointer",
                  transition: "all 0.15s"
                }}
              >
                {opt.label}
              </button>
            ))}
          </div>

          <div className="ee-card">
            <p style={{ fontSize: "14px", color: "var(--text2)", lineHeight: 1.7 }}>
              ✅ Answer all questions before time runs out<br />
              ✅ You can navigate between questions freely<br />
              ✅ Green = answered, Red = unanswered<br />
              ✅ Submit when you're ready
            </p>
          </div>

          <button className="ee-btn ee-btn-primary mt-12" onClick={() => setStarted(true)}>
            Start Exam ▶
          </button>
          <button className="ee-btn ee-btn-secondary mt-12" onClick={() => onNavigate("home")}>
            Not yet, go back
          </button>
        </div>
      </div>
    )
  }

  // ---- HELPERS ----

  const saveAnswer = (index = currentIndex, value = selected) => {
    answersMapRef.current[index] = { selected: value, correct: filteredQuestions[index].answer }
  }

  const handleSelectOption = (opt) => {
    setSelected(opt)
    setShowExplanation(false)
    saveAnswer(currentIndex, opt)
  }

  const handleCheckAnswer = () => {
    if (!selected) return
    saveAnswer()
    setShowExplanation(true)
  }

  const handleSubmitExam = () => {
    saveAnswer()
    const unanswered = filteredQuestions
      .map((_, i) => i)
      .filter(i => !answersMapRef.current[i]?.selected)

    if (unanswered.length > 0) {
      const ok = window.confirm(
        `You have ${unanswered.length} unanswered question(s): ${unanswered.map(i => `Q${i+1}`).join(", ")}.\n\nSubmit anyway?`
      )
      if (!ok) return
    }
    setFinished(true)
  }

  const goToQuestion = (i) => {
    saveAnswer()
    setShowExplanation(false)
    setCurrentIndex(i)
    setSelected(answersMapRef.current[i]?.selected || "")
  }

  // ---- RESULT SCREEN ----

  if (finished) {
    const score = filteredQuestions.filter((q, i) =>
      answersMapRef.current[i]?.selected === q.answer
    ).length
    const total = filteredQuestions.length
    const pct = Math.round((score / total) * 100)
    const emoji = pct >= 70 ? "🌟" : pct >= 50 ? "👍" : "💪"
    const msg = pct >= 70
      ? "Excellent! Keep it up."
      : pct >= 50
      ? "Good effort! Review your mistakes."
      : "Don't give up — practice more!"

    return (
      <div className="ee-page">
        <header className="ee-header">
          <button
  className="ee-back-btn"
  onClick={() =>
    onNavigate(topic === "cbt" ? "cbtSubjectSelect" : "subjectSelect")
  }
>
  ← Home
</button>
        </header>
        <div className="ee-content">
          <div className="ee-result-score">
            <span className="result-emoji">{emoji}</span>
            <div className="result-fraction">{score} / {total}</div>
            <div className={`result-percent ${pct >= 70 ? "color-success" : pct >= 50 ? "color-warning" : "color-danger"}`}>
              {pct}%
            </div>
            <div className="result-msg">{msg}</div>
          </div>

          <div className="ee-btn-row">
            {isCBT && (
              <button className="ee-btn ee-btn-primary" onClick={() => onNavigate("cbtResult")}>
                Review Answers 📖
              </button>
            )}
            <button className="ee-btn ee-btn-secondary" onClick={() => onNavigate("progress")}>
              View Progress 📊
            </button>
            <button className="ee-btn ee-btn-outline" onClick={() => onNavigate("subjectSelect")}>
              Study More 📚
            </button>
          </div>
        </div>
      </div>
    )
  }

  // ---- MAIN QUIZ UI ----

  const answeredCount = Object.values(answersMapRef.current).filter(a => a?.selected).length
  const progress = Math.round(((currentIndex + 1) / filteredQuestions.length) * 100)

  return (
    <div className="ee-page">
      <header className="ee-header">
        <button
  className="ee-back-btn"
  onClick={() => {
    if (topic === "cbt") onNavigate("cbtSubjectSelect")
    else if (topic === "weak") onNavigate("progress")
    else onNavigate("study")
  }}
>
  ← Exit
</button>
        <span style={{ fontWeight: 800, fontSize: "15px" }}>
          {isCBT ? "CBT Mode" : isWeak ? "Weak Areas" : topic}
        </span>
        {isCBT ? (
          <span className={`ee-timer${examTimeLeft < 300 ? " urgent" : ""}`}>
            ⏱ {formatTime(examTimeLeft)}
          </span>
        ) : (
          <span style={{ width: 60 }} />
        )}
      </header>

      <div className="ee-content">
        {/* Progress */}
        <div className="ee-quiz-header">
          <span className="quiz-progress-text">
            Q{currentIndex + 1} of {filteredQuestions.length}
          </span>
          {isCBT && (
            <span className="quiz-progress-text">{answeredCount} answered</span>
          )}
        </div>
        <div className="ee-progress-bar">
          <div className="ee-progress-fill" style={{ width: `${progress}%` }} />
        </div>

        {/* Passage */}
        {currentQuestion.passage && (
          <div className="ee-passage">
            <span className="passage-label">Read the passage</span>
            <p className="passage-text">{currentQuestion.passage}</p>
          </div>
        )}

        {/* Question */}
        <div className="ee-question-card">
          <span className="question-topic-tag">{currentQuestion.topic}</span>
          <p className="question-text">{currentQuestion.question}</p>
          {currentQuestion.image && (
          <img
          src={`/images/${currentQuestion.image}`}
          alt="Question figure"
          style={{
          width: "100%",
          borderRadius: "10px",
           marginTop: "10px"
            }}
          />
          )}
        </div>

        {/* Options */}
        {currentQuestion.options.map((opt, i) => {
          let cls = "ee-option"
          if (showExplanation) {
            if (opt === currentQuestion.answer) cls += " correct"
            else if (opt === selected && selected !== currentQuestion.answer) cls += " wrong"
            else cls += " disabled"
          } else if (selected === opt) {
            cls += " selected"
          }

          return (
            <button
              key={i}
              className={cls}
              onClick={() => !showExplanation && handleSelectOption(opt)}
              disabled={showExplanation}
            >
              <span className="opt-badge">{String.fromCharCode(65 + i)}</span>
              <span className="opt-label">{opt}</span>
            </button>
          )
        })}

        {/* Check answer (study mode) */}
        {!isCBT && !showExplanation && (
          <button
            className="ee-btn ee-btn-primary mt-8"
            onClick={handleCheckAnswer}
            disabled={!selected}
          >
            Check Answer ✅
          </button>
        )}

        {/* Explanation */}
        {showExplanation && currentQuestion.explanation && (
          <div className="ee-explanation">
            <span className="exp-heading">💡 Explanation</span>
            <p className="exp-body">{currentQuestion.explanation}</p>
          </div>
        )}

        {/* Navigation */}
        <div className="ee-nav-row mt-8">
          <button
            className="ee-nav-btn"
            onClick={() => goToQuestion(Math.max(currentIndex - 1, 0))}
            disabled={currentIndex === 0}
          >
            ← Prev
          </button>

          {currentIndex < filteredQuestions.length - 1 ? (
            <button
              className="ee-nav-btn"
              onClick={() => goToQuestion(currentIndex + 1)}
            >
              Next →
            </button>
          ) : isCBT ? (
            <button
              className="ee-nav-btn"
              onClick={handleSubmitExam}
              style={{ background: "var(--accent)", color: "#fff", border: "none" }}
            >
              Submit 🏁
            </button>
          ) : (
            <button
              className="ee-nav-btn"
              onClick={() => { saveAnswer(); setFinished(true) }}
              style={{ background: "var(--success)", color: "#fff", border: "none" }}
            >
              Finish ✅
            </button>
          )}
        </div>

        {/* CBT question grid */}
        {isCBT && (
          <>
            <hr className="ee-divider" />
            <span className="ee-label">Questions</span>
            <div className="ee-question-grid">
              {filteredQuestions.map((_, i) => {
                let cls = "q-dot "
                if (i === currentIndex) cls += "current"
                else if (answersMapRef.current[i]?.selected) cls += "answered"
                else cls += "unanswered"
                return (
                  <button key={i} className={cls} onClick={() => goToQuestion(i)}>
                    {i + 1}
                  </button>
                )
              })}
            </div>
            <div style={{ fontSize: "12px", color: "var(--text2)", display: "flex", gap: "16px" }}>
              <span><span style={{ color: "var(--success)" }}>■</span> Answered</span>
              <span><span style={{ color: "var(--surface3)", filter: "brightness(0.6)" }}>■</span> Unanswered</span>
              <span><span style={{ color: "var(--primary)" }}>■</span> Current</span>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Quiz
