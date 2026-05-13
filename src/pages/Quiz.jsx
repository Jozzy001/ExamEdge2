import { useState, useRef, useMemo, useEffect } from "react"
import questions from "../data/questions"

// =============================================
// IMAGE RENDERER
// =============================================
const RenderText = ({ text }) => {
  if (!text) return null
  const parts = text.split(/(\[img:[^\]]+\])/g)
  const elements = []
  let imgGroup = []

  const flushImgGroup = () => {
    if (imgGroup.length === 0) return
    const isMultiple = imgGroup.length > 1
    elements.push(
      <div key={`grp-${elements.length}`} style={{
        display: isMultiple ? "flex" : "block",
        flexWrap: "wrap", gap: 8, margin: "10px 0"
      }}>
        {imgGroup.map((src, j) => (
          <img key={j} src={`/${src}`} alt={`Diagram ${j + 1}`} style={{
            maxWidth: isMultiple ? `calc(${100 / imgGroup.length}% - 8px)` : "100%",
            borderRadius: "var(--radius-md)", border: "1px solid var(--border)"
          }} />
        ))}
      </div>
    )
    imgGroup = []
  }

  parts.forEach((part, i) => {
    const match = part.match(/^\[img:([^\]]+)\]$/)
    if (match) {
      imgGroup.push(match[1])
    } else {
      flushImgGroup()
      if (part) elements.push(<span key={i}>{part}</span>)
    }
  })
  flushImgGroup()
  return <>{elements}</>
}

// =============================================
// CALCULATOR
// =============================================
const Calculator = ({ onClose }) => {
  const [display, setDisplay] = useState("0")
  const [prev, setPrev] = useState(null)
  const [op, setOp] = useState(null)
  const [reset, setReset] = useState(false)

  const handleNum = (n) => {
    if (display === "0" || reset) { setDisplay(String(n)); setReset(false) }
    else setDisplay(display + n)
  }
  const handleDot = () => {
    if (reset) { setDisplay("0."); setReset(false); return }
    if (!display.includes(".")) setDisplay(display + ".")
  }
  const handleOp = (o) => { setPrev(parseFloat(display)); setOp(o); setReset(true) }
  const handleEquals = () => {
    if (op === null || prev === null) return
    const cur = parseFloat(display)
    let result
    if (op === "+") result = prev + cur
    else if (op === "-") result = prev - cur
    else if (op === "×") result = prev * cur
    else if (op === "÷") result = cur !== 0 ? prev / cur : "Error"
    setDisplay(String(parseFloat(result.toFixed(10))))
    setPrev(null); setOp(null); setReset(true)
  }
  const handleClear = () => { setDisplay("0"); setPrev(null); setOp(null); setReset(false) }
  const handleDel = () => setDisplay(display.length > 1 ? display.slice(0, -1) : "0")

  const btn = (color) => ({
    padding: "14px", borderRadius: "var(--radius-md)", border: "none",
    fontSize: 16, fontWeight: 700, fontFamily: "var(--font-main)", cursor: "pointer",
    background: color === "op" ? "var(--primary)" : color === "eq" ? "var(--success)" : color === "cl" ? "var(--accent)" : "var(--surface2)",
    color: ["op","eq","cl"].includes(color) ? "#fff" : "var(--text)"
  })

  return (
    <div style={{
      position: "fixed", bottom: 80, right: 16, zIndex: 100,
      background: "var(--surface)", border: "1px solid var(--border)",
      borderRadius: "var(--radius-xl)", padding: 16, width: 260,
      boxShadow: "var(--shadow-md)"
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
        <span style={{ fontWeight: 800, fontSize: 14, color: "var(--text)" }}>Calculator</span>
        <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", fontSize: 18, color: "var(--text2)" }}>✕</button>
      </div>
      <div style={{
        background: "var(--surface2)", borderRadius: "var(--radius-md)",
        padding: "10px 14px", marginBottom: 12, textAlign: "right",
        fontSize: 22, fontWeight: 700, color: "var(--text)", minHeight: 44, wordBreak: "break-all"
      }}>
        {op && <span style={{ fontSize: 12, color: "var(--text3)", marginRight: 6 }}>{prev} {op}</span>}
        {display}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 8 }}>
        <button style={btn("cl")} onClick={handleClear}>C</button>
        <button style={btn("cl")} onClick={handleDel}>⌫</button>
        <button style={btn("op")} onClick={() => handleOp("%")}>%</button>
        <button style={btn("op")} onClick={() => handleOp("÷")}>÷</button>
        {[7,8,9].map(n => <button key={n} style={btn("")} onClick={() => handleNum(n)}>{n}</button>)}
        <button style={btn("op")} onClick={() => handleOp("×")}>×</button>
        {[4,5,6].map(n => <button key={n} style={btn("")} onClick={() => handleNum(n)}>{n}</button>)}
        <button style={btn("op")} onClick={() => handleOp("-")}>−</button>
        {[1,2,3].map(n => <button key={n} style={btn("")} onClick={() => handleNum(n)}>{n}</button>)}
        <button style={btn("op")} onClick={() => handleOp("+")}>+</button>
        <button style={{ ...btn(""), gridColumn: "span 2" }} onClick={() => handleNum(0)}>0</button>
        <button style={btn("")} onClick={handleDot}>.</button>
        <button style={btn("eq")} onClick={handleEquals}>=</button>
      </div>
    </div>
  )
}

// =============================================
// QUIZ
// =============================================
const Quiz = ({ topic, subject, subjects, onNavigate }) => {

  const filteredQuestions = useMemo(() => {
    const subjectList = subjects && subjects.length > 0 ? subjects : (subject ? [subject] : null)

    if (topic === "cbt") {
      // Build pool per subject
      const bySubject = {}
      questions.forEach(item => {
        const addQ = (q) => {
          const subj = q.subject || "General"
          if (!bySubject[subj]) bySubject[subj] = []
          bySubject[subj].push({ ...q, topic: q.topic || "General", subject: subj })
        }
        if (item.passage && item.questions) {
          item.questions.forEach(q => addQ({ ...q, passage: item.passage }))
        } else {
          addQ(item)
        }
      })
      // English = 60, others = 40, ordered by subject selection
      const ordered = []
      const subjectsToUse = subjectList || Object.keys(bySubject)
      subjectsToUse.forEach(subj => {
        const pool = (bySubject[subj] || []).sort(() => Math.random() - 0.5)
        const count = subj === "English" ? 60 : 40
        ordered.push(...pool.slice(0, count))
      })
      return ordered
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
          weakTopics.includes(inner.topic) && (!subjectList || subjectList.includes(inner.subject))
        )
        return weakTopics.includes(q.topic) && (!subjectList || subjectList.includes(q.subject))
      }).sort(() => Math.random() - 0.5)
    } else {
      base = questions.filter(q => {
        if (q.passage && q.questions) return q.questions.some(inner =>
          inner.topic === topic && (!subjectList || subjectList.includes(inner.subject))
        )
        return q.topic === topic && (!subjectList || subjectList.includes(q.subject))
      })
    }

    return base.flatMap(item => {
      if (item.passage && item.questions) {
        return item.questions.map(q => ({
          ...q, passage: item.passage,
          topic: q.topic || topic || "General",
          subject: q.subject || subject || "General"
        }))
      }
      return { ...item, topic: item.topic || topic || "General", subject: item.subject || subject || "General" }
    })
  }, [topic, subject, subjects])

  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState("")
  const [showExplanation, setShowExplanation] = useState(false)
  const [finished, setFinished] = useState(false)
  const [started, setStarted] = useState(false)
  const [examTimeLeft, setExamTimeLeft] = useState(3600)
  const [showCalc, setShowCalc] = useState(false)

  const answersMapRef = useRef({})
  const isCBT = topic === "cbt"
  const isWeak = topic === "weak"
  const currentQuestion = filteredQuestions[currentIndex]

  // Reset all state when topic/subject changes (prevents bleed between sessions)
  useEffect(() => {
    answersMapRef.current = {}
    setSelected("")
    setCurrentIndex(0)
    setShowExplanation(false)
    setFinished(false)
    setStarted(false)
  }, [topic, subject, subjects])

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
        question: q.question, topic: q.topic || "General",
        subject: q.subject || subject || "General",
        selected: a.selected || "skipped", correct: q.answer,
        explanation: q.explanation || "", isCorrect: a.selected === q.answer
      }
    })
    const score = answers.filter(a => a.isCorrect).length
    const total = filteredQuestions.length
    if (isCBT) {
      localStorage.setItem("cbtReport", JSON.stringify({
        score, total, percentage: Math.round((score / total) * 100),
        subjects: subjects || (subject ? [subject] : []),
        answers
      }))
    }
    // Save progress — only from this session
    const existing = JSON.parse(localStorage.getItem("progress")) || []
    if (isCBT || isWeak) {
      const topicGroups = {}
      answers.forEach(a => {
        const key = `${a.subject}||${a.topic}`
        if (!topicGroups[key]) topicGroups[key] = { score: 0, total: 0, subject: a.subject, topic: a.topic }
        topicGroups[key].total += 1
        if (a.isCorrect) topicGroups[key].score += 1
      })
      const newEntries = Object.values(topicGroups).map(s => ({
        topic: s.topic, subject: s.subject, score: s.score, total: s.total, date: new Date().toISOString()
      }))
      localStorage.setItem("progress", JSON.stringify(newEntries))
    } else {
      const newEntry = { topic, subject: subject || "General", score, total, date: new Date().toISOString() }
      localStorage.setItem("progress", JSON.stringify([...existing, newEntry]))
    }
  }, [finished])

  // EDGE CASES
  if (filteredQuestions.length === 0) {
    return (
      <div className="ee-page">
        <header className="ee-header">
          <button className="ee-back-btn" onClick={() => onNavigate("home")}>← Back</button>
          <span style={{ fontWeight: 800, fontSize: "16px" }}>{isWeak ? "Weak Areas" : topic}</span>
          <span style={{ width: 60 }} />
        </header>
        <div className="ee-content">
          <div className="ee-empty">
            <span className="ee-empty-icon">{isWeak ? "🎉" : "📭"}</span>
            <p>{isWeak ? "No weak areas found! You're doing great." : `No questions found for: ${topic}`}</p>
            <button className="ee-btn ee-btn-primary" onClick={() => onNavigate("subjectSelect")}>Study Mode 📚</button>
          </div>
        </div>
      </div>
    )
  }

  // CBT START SCREEN
  if (isCBT && !started) {
    const subjectList = subjects && subjects.length > 0 ? subjects : (subject ? [subject] : [])
    const totalQ = subjectList.reduce((t, s) => t + (s === "English" ? 60 : 40), 0)
    const timeOptions = [
      { label: "30 mins", seconds: 1800 },
      { label: "1 hour", seconds: 3600 },
      { label: "1.5 hrs ⭐", seconds: 5400 },
      { label: "2 hours", seconds: 7200 },
    ]
    return (
      <div className="ee-page">
        <header className="ee-header">
          <button className="ee-back-btn" onClick={() => onNavigate("cbtSubjectSelect")}>← Back</button>
          <span style={{ fontWeight: 800, fontSize: "16px" }}>CBT Mode</span>
          <span style={{ width: 60 }} />
        </header>
        <div className="ee-content">
          <div className="ee-result-score">
            <span className="result-emoji">🧪</span>
            <div className="result-fraction">{totalQ} Questions</div>
            <div style={{ fontSize: 12, color: "var(--text2)", marginTop: 8, lineHeight: 1.8 }}>
              {subjectList.map(s => (
                <span key={s} style={{ display: "inline-block", marginRight: 8 }}>
                  <span style={{ fontWeight: 800, color: "var(--text)" }}>{s}</span>
                  <span style={{ color: "var(--text3)" }}> ({s === "English" ? 60 : 40}q)</span>
                </span>
              ))}
            </div>
            <div className="result-msg" style={{ color: "var(--primary)", fontWeight: 700, marginTop: 4 }}>
              {formatTime(examTimeLeft)} selected
            </div>
          </div>
          <span className="ee-label" style={{ marginTop: 16, display: "block" }}>Choose your time limit</span>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 8, marginBottom: 16 }}>
            {timeOptions.map(opt => (
              <button key={opt.seconds} onClick={() => setExamTimeLeft(opt.seconds)} style={{
                padding: "12px 6px", borderRadius: "var(--radius-md)",
                border: examTimeLeft === opt.seconds ? "2px solid var(--primary)" : "1.5px solid var(--border)",
                background: examTimeLeft === opt.seconds ? "var(--primary-light)" : "var(--surface)",
                color: examTimeLeft === opt.seconds ? "var(--primary-text)" : "var(--text)",
                fontFamily: "var(--font-main)", fontWeight: examTimeLeft === opt.seconds ? 800 : 600,
                fontSize: 12, cursor: "pointer", transition: "all 0.15s"
              }}>{opt.label}</button>
            ))}
          </div>
          <div className="ee-card">
            <p style={{ fontSize: "14px", color: "var(--text2)", lineHeight: 1.7 }}>
              ✅ Questions grouped by subject<br />
              ✅ Navigate freely between questions<br />
              ✅ Green = answered, Red = unanswered<br />
              🧮 Calculator available during exam
            </p>
          </div>
          <button className="ee-btn ee-btn-primary mt-12" onClick={() => {
            localStorage.removeItem("cbtReport")
            setStarted(true)
          }}>Start Exam ▶</button>
          <button className="ee-btn ee-btn-secondary mt-12" onClick={() => onNavigate("home")}>Not yet, go back</button>
        </div>
      </div>
    )
  }

  // HELPERS
  const saveAnswer = (index = currentIndex, value = selected) => {
    answersMapRef.current[index] = { selected: value, correct: filteredQuestions[index].answer }
  }
  const handleSelectOption = (opt) => { setSelected(opt); setShowExplanation(false); saveAnswer(currentIndex, opt) }
  const handleCheckAnswer = () => { if (!selected) return; saveAnswer(); setShowExplanation(true) }
  const handleSubmitExam = () => {
    saveAnswer()
    const unanswered = filteredQuestions.map((_, i) => i).filter(i => !answersMapRef.current[i]?.selected)
    if (unanswered.length > 0) {
      const ok = window.confirm(`You have ${unanswered.length} unanswered question(s): ${unanswered.map(i => `Q${i + 1}`).join(", ")}.\n\nSubmit anyway?`)
      if (!ok) return
    }
    setFinished(true)
  }
  const goToQuestion = (i) => { saveAnswer(); setShowExplanation(false); setCurrentIndex(i); setSelected(answersMapRef.current[i]?.selected || "") }

  // RESULT SCREEN
  if (finished) {
    const score = filteredQuestions.filter((q, i) => answersMapRef.current[i]?.selected === q.answer).length
    const total = filteredQuestions.length
    const pct = Math.round((score / total) * 100)
    const emoji = pct >= 70 ? "🌟" : pct >= 50 ? "👍" : "💪"
    const msg = pct >= 70 ? "Excellent! Keep it up." : pct >= 50 ? "Good effort! Review your mistakes." : "Don't give up — practice more!"
    return (
      <div className="ee-page">
        <header className="ee-header">
          <button className="ee-back-btn" onClick={() => onNavigate("home")}>← Home</button>
          <span style={{ fontWeight: 800, fontSize: "16px" }}>Result</span>
          <span style={{ width: 60 }} />
        </header>
        <div className="ee-content">
          <div className="ee-result-score">
            <span className="result-emoji">{emoji}</span>
            <div className="result-fraction">{score} / {total}</div>
            <div className={`result-percent ${pct >= 70 ? "color-success" : pct >= 50 ? "color-warning" : "color-danger"}`}>{pct}%</div>
            <div className="result-msg">{msg}</div>
          </div>
          <div className="ee-btn-row">
            {isCBT && <button className="ee-btn ee-btn-primary" onClick={() => onNavigate("cbtResult")}>Review Answers 📖</button>}
            <button className="ee-btn ee-btn-secondary" onClick={() => onNavigate("progress")}>View Progress 📊</button>
            <button className="ee-btn ee-btn-outline" onClick={() => onNavigate("subjectSelect")}>Study More 📚</button>
          </div>
        </div>
      </div>
    )
  }

  // MAIN QUIZ UI
  const answeredCount = Object.values(answersMapRef.current).filter(a => a?.selected).length
  const progress = Math.round(((currentIndex + 1) / filteredQuestions.length) * 100)

  return (
    <div className="ee-page">
      <header className="ee-header">
        <button className="ee-back-btn" onClick={() => {
          if (isCBT) onNavigate("cbtSubjectSelect")
          else if (isWeak) onNavigate("progress")
          else onNavigate("study")
        }}>← Exit</button>
        <span style={{ fontWeight: 800, fontSize: "15px" }}>
          {isCBT ? "CBT Mode" : isWeak ? "Weak Areas" : topic}
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button onClick={() => setShowCalc(p => !p)} style={{
            background: showCalc ? "var(--primary)" : "var(--surface2)",
            border: "1px solid var(--border)", borderRadius: "var(--radius-md)",
            padding: "6px 10px", cursor: "pointer", fontSize: 16,
            color: showCalc ? "#fff" : "var(--text)"
          }} title="Calculator">🧮</button>
          {isCBT && (
            <span className={`ee-timer${examTimeLeft < 300 ? " urgent" : ""}`}>
              ⏱ {formatTime(examTimeLeft)}
            </span>
          )}
        </div>
      </header>

      {showCalc && <Calculator onClose={() => setShowCalc(false)} />}

      <div className="ee-content">
        <div className="ee-quiz-header">
          <span className="quiz-progress-text">Q{currentIndex + 1} of {filteredQuestions.length}</span>
          {isCBT && <span className="quiz-progress-text">{answeredCount} answered</span>}
        </div>
        <div className="ee-progress-bar">
          <div className="ee-progress-fill" style={{ width: `${progress}%` }} />
        </div>

        {isCBT && currentQuestion.subject && (
          <div style={{ marginBottom: 8 }}>
            <span style={{
              fontSize: 11, fontWeight: 800, background: "var(--primary-light)",
              color: "var(--primary-text)", padding: "3px 10px", borderRadius: "var(--radius-pill)"
            }}>{currentQuestion.subject}</span>
          </div>
        )}

        {currentQuestion.passage && (
          <div className="ee-passage">
            <span className="passage-label">Read the passage</span>
            <p className="passage-text">{currentQuestion.passage}</p>
          </div>
        )}

        <div className="ee-question-card">
          <span className="question-topic-tag">{currentQuestion.topic}</span>
          <div className="question-text"><RenderText text={currentQuestion.question} /></div>
        </div>

        {currentQuestion.options.map((opt, i) => {
          let cls = "ee-option"
          if (showExplanation) {
            if (opt === currentQuestion.answer) cls += " correct"
            else if (opt === selected && selected !== currentQuestion.answer) cls += " wrong"
            else cls += " disabled"
          } else if (selected === opt) cls += " selected"
          return (
            <button key={i} className={cls} onClick={() => !showExplanation && handleSelectOption(opt)} disabled={showExplanation}>
              <span className="opt-badge">{String.fromCharCode(65 + i)}</span>
              <span className="opt-label">{opt}</span>
            </button>
          )
        })}

        {!isCBT && !showExplanation && (
          <button className="ee-btn ee-btn-primary mt-8" onClick={handleCheckAnswer} disabled={!selected}>
            Check Answer ✅
          </button>
        )}

        {showExplanation && currentQuestion.explanation && (
          <div className="ee-explanation">
            <span className="exp-heading">💡 Explanation</span>
            <p className="exp-body">{currentQuestion.explanation}</p>
          </div>
        )}

        <div className="ee-nav-row mt-8">
          <button className="ee-nav-btn" onClick={() => goToQuestion(Math.max(currentIndex - 1, 0))} disabled={currentIndex === 0}>← Prev</button>
          {currentIndex < filteredQuestions.length - 1 ? (
            <button className="ee-nav-btn" onClick={() => goToQuestion(currentIndex + 1)}>Next →</button>
          ) : isCBT ? (
            <button className="ee-nav-btn" onClick={handleSubmitExam} style={{ background: "var(--accent)", color: "#fff", border: "none" }}>Submit 🏁</button>
          ) : (
            <button className="ee-nav-btn" onClick={() => { saveAnswer(); setFinished(true) }} style={{ background: "var(--success)", color: "#fff", border: "none" }}>Finish ✅</button>
          )}
        </div>

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
                return <button key={i} className={cls} onClick={() => goToQuestion(i)}>{i + 1}</button>
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
