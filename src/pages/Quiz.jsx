import { useState, useRef, useMemo, useEffect } from "react"
import jambQuestions from "../data/jamb/questions"
import { POST_UTME_UNIVERSITIES } from "../data/postutme/index"
import { processQuizResult, checkHotStreak } from "../utils/gamification"
import { XPToast, BadgeQueue, LevelUpModal } from "../components/BadgeModal"

// =============================================
// TEXT RENDERER — handles **bold** highlights and images
// =============================================
const RenderText = ({ text }) => {
  if (!text) return null

  const parseSegment = (segment, keyIndex) => {
    const boldParts = segment.split(/(\*\*[^*]+\*\*)/g)
    return boldParts.map((part, j) => {
      const boldMatch = part.match(/^\*\*([^*]+)\*\*$/)
      if (boldMatch) {
        const word = boldMatch[1]
        return (
          <strong key={`${keyIndex}-b${j}`} style={{
            color: "var(--primary)",
            background: "var(--primary-light)",
            padding: "1px 5px",
            borderRadius: "4px",
            fontWeight: 800
          }}>
            {word}
          </strong>
        )
      }
      return <span key={`${keyIndex}-t${j}`}>{part}</span>
    })
  }

  // Special handling for phonetics questions with pattern: **word** (XY sound) or **word** (XY)
  // Highlight the specific letters in the word
  const phoneticMatch = text.match(/\*\*([^*]+)\*\*\s*\(([^)]+)\)/)
  if (phoneticMatch) {
    const word = phoneticMatch[1]
    const soundHint = phoneticMatch[2] // e.g. "SH sound", "GE sound", "sh"
    // Extract just the letters to highlight (first word before "sound")
    const letters = soundHint.replace(/\s*sound\s*/i, '').replace(/\s*vowel\s*/i, '').replace(/\s*consonant\s*/i, '').trim()

    // Try to highlight those letters within the word
    const lettersLower = letters.toLowerCase()
    const wordLower = word.toLowerCase()
    const letterIdx = wordLower.indexOf(lettersLower)

    const renderedWord = letterIdx >= 0 ? (
      <strong key="pw" style={{
        color: "var(--primary)", background: "var(--primary-light)",
        padding: "1px 5px", borderRadius: "4px", fontWeight: 800,
        fontSize: "1.05em"
      }}>
        {word.substring(0, letterIdx)}
        <span style={{
          textDecoration: "underline",
          textDecorationStyle: "solid",
          textDecorationColor: "var(--accent)",
          textDecorationThickness: "2.5px",
          color: "var(--accent)",
          fontWeight: 900,
        }}>
          {word.substring(letterIdx, letterIdx + letters.length)}
        </span>
        {word.substring(letterIdx + letters.length)}
      </strong>
    ) : (
      <strong key="pw" style={{
        color: "var(--primary)", background: "var(--primary-light)",
        padding: "1px 5px", borderRadius: "4px", fontWeight: 800
      }}>{word}</strong>
    )

    // Rebuild the text replacing the **word** (hint) part
    const before = text.substring(0, text.indexOf(`**${word}**`))
    const after = text.substring(text.indexOf(`**${word}**`) + `**${word}** (${soundHint})`.length)

    return (
      <>
        <span>{before}</span>
        {renderedWord}
        <span style={{
          fontSize: 11, fontWeight: 700,
          background: "rgba(255,107,107,0.1)",
          color: "var(--accent)",
          padding: "1px 6px",
          borderRadius: "4px",
          marginLeft: 4,
          border: "1px solid rgba(255,107,107,0.25)"
        }}>
          /{letters}/
        </span>
        <span>{after}</span>
      </>
    )
  }

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
    const imgMatch = part.match(/^\[img:([^\]]+)\]$/)
    if (imgMatch) {
      imgGroup.push(imgMatch[1])
    } else {
      flushImgGroup()
      if (part) elements.push(...parseSegment(part, i))
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
const Quiz = ({ topic, subject, subjects, onNavigate, examType = "jamb", university = null, customCounts = null, englishFirst = false, startFromIndex = 0 }) => {

  const questionPool = useMemo(() => {
    if (examType === "postutme" && university) {
      return POST_UTME_UNIVERSITIES[university]?.questions || []
    }
    return jambQuestions
  }, [examType, university])

  const getDefaultCount = (subj) => {
    if (examType === "jamb") return subj === "English" ? 60 : 40
    return subj === "English" ? 13 : 40
  }

  // All state declared before any memo that reads them
  const [currentIndex, setCurrentIndex] = useState(startFromIndex)
  const [selected, setSelected] = useState("")
  const [showExplanation, setShowExplanation] = useState(false)
  const [finished, setFinished] = useState(false)
  const [started, setStarted] = useState(false)
  const [examTimeLeft, setExamTimeLeft] = useState(examType === "jamb" ? 3600 : 1800)
  const [showCalc, setShowCalc] = useState(false)
  const [qCounts, setQCounts] = useState({})
  const [customTime, setCustomTime] = useState(examType === "jamb" ? 3600 : 1800)
  // Gamification
  const [flashCorrect, setFlashCorrect] = useState(false)
  const [flashWrong, setFlashWrong] = useState(false)
  const [xpToast, setXpToast] = useState(null)
  const [newBadges, setNewBadges] = useState([])
  const [levelUpInfo, setLevelUpInfo] = useState(null)
  const correctInARowRef = useRef(0)
  const quizStartTimeRef = useRef(Date.now())
  const answersMapRef = useRef({})
  const isCBT = topic === "cbt"
  const isWeak = topic === "weak"
  const isHotTopics = topic === "hotTopics"

  const filteredQuestions = useMemo(() => {
    const subjectList = subjects && subjects.length > 0 ? subjects : (subject ? [subject] : null)

    if (topic === "cbt") {
      const bySubject = {}
      questionPool.forEach(item => {
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
      const ordered = []
      const subjectsToUse = subjectList || Object.keys(bySubject)
      const sortedSubjects = englishFirst
        ? ["English", ...subjectsToUse.filter(s => s !== "English")]
        : subjectsToUse
      sortedSubjects.forEach(subj => {
        const pool = (bySubject[subj] || []).sort(() => Math.random() - 0.5)
        // Use qCounts (user selection) first, then customCounts prop, then default
        const count = qCounts[subj] ?? customCounts?.[subj] ?? getDefaultCount(subj)
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
      base = questionPool.filter(q => {
        if (q.passage && q.questions) return q.questions.some(inner =>
          weakTopics.includes(inner.topic) && (!subjectList || subjectList.includes(inner.subject))
        )
        return weakTopics.includes(q.topic) && (!subjectList || subjectList.includes(q.subject))
      }).sort(() => Math.random() - 0.5)
    } else if (topic === "hotTopics") {
      base = questionPool.filter(q => {
        if (q.passage && q.questions) return q.questions.some(inner =>
          inner.isHotTopic === true && (!subjectList || subjectList.includes(inner.subject))
        )
        return q.isHotTopic === true && (!subjectList || subjectList.includes(q.subject))
      }).sort(() => Math.random() - 0.5)
    } else {
      base = questionPool.filter(q => {
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
  }, [topic, subject, subjects, questionPool, customCounts, qCounts])

  const currentQuestion = filteredQuestions[currentIndex]

  useEffect(() => {
    answersMapRef.current = {}
    setSelected("")
    setCurrentIndex(startFromIndex)
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
        examType, university, answers
      }))
    }
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

    // Process gamification — only for non-CBT study mode
    if (!isCBT) {
      const timeTaken = Math.round((Date.now() - quizStartTimeRef.current) / 1000)
      const result = processQuizResult({ score, total, timeTakenSeconds: timeTaken })
      if (result.xpEarned > 0) setXpToast(result.xpEarned)
      if (result.newBadges?.length > 0) setNewBadges(result.newBadges)
      if (result.leveledUp) setLevelUpInfo(result.newLevel)
    }
  }, [finished])

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
            {isWeak ? (() => {
              const hasProgress = (JSON.parse(localStorage.getItem("progress")) || []).length > 0
              return hasProgress ? (
                <>
                  <span className="ee-empty-icon">🎉</span>
                  <p style={{ fontWeight: 700, fontSize: 16, color: "var(--text)", marginBottom: 6 }}>
                    No weak areas!
                  </p>
                  <p style={{ fontSize: 13, color: "var(--text2)", marginBottom: 20 }}>
                    You're scoring above 50% in every topic. Keep it up!
                  </p>
                  <button className="ee-btn ee-btn-primary" onClick={() => onNavigate("subjectSelect")}>
                    Keep Studying 📚
                  </button>
                </>
              ) : (
                <>
                  <span className="ee-empty-icon">📋</span>
                  <p style={{ fontWeight: 700, fontSize: 16, color: "var(--text)", marginBottom: 6 }}>
                    No test taken yet
                  </p>
                  <p style={{ fontSize: 13, color: "var(--text2)", marginBottom: 20 }}>
                    Take a quiz first and we'll show your weak areas here.
                  </p>
                  <button className="ee-btn ee-btn-primary" onClick={() => onNavigate("subjectSelect")}>
                    Start a Quiz 🚀
                  </button>
                </>
              )
            })() : (
              <>
                <span className="ee-empty-icon">📭</span>
                <p>{`No questions found for: ${topic}`}</p>
                <button className="ee-btn ee-btn-primary" onClick={() => onNavigate("subjectSelect")}>Study Mode 📚</button>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }

  if (isCBT && !started) {
    const subjectList = subjects && subjects.length > 0 ? subjects : (subject ? [subject] : [])
    const timeOptions = examType === "jamb"
      ? [
          { label: "30 mins", seconds: 1800 },
          { label: "1 hour", seconds: 3600 },
          { label: "1.5 hrs", seconds: 5400 },
          { label: "2 hours", seconds: 7200 },
        ]
      : [
          { label: "30 mins", seconds: 1800 },
          { label: "45 mins", seconds: 2700 },
          { label: "1 hour", seconds: 3600 },
          { label: "1.5 hrs", seconds: 5400 },
        ]
    const totalQ = subjectList.reduce((t, s) => t + (qCounts[s] ?? getDefaultCount(s)), 0)

    return (
      <div className="ee-page">
        <header className="ee-header">
          <button className="ee-back-btn" onClick={() => onNavigate("cbtSubjectSelect")}>← Back</button>
          <span style={{ fontWeight: 800, fontSize: "16px" }}>CBT Setup</span>
          <span style={{ width: 60 }} />
        </header>
        <div className="ee-content">

          {/* Post-UTME standard info banner */}
          {examType === "postutme" && (
            <div style={{
              background: "linear-gradient(135deg, #fff8f0, #ffe8d6)",
              border: "1px solid #ffb347", borderRadius: "var(--radius-md)",
              padding: "12px 14px", marginBottom: 16,
              display: "flex", gap: 10, alignItems: "flex-start"
            }}>
              <span style={{ fontSize: 18, flexShrink: 0 }}>📋</span>
              <div>
                <div style={{ fontWeight: 800, fontSize: 12, color: "#7a4500", marginBottom: 4 }}>
                  UNIBEN Post-UTME Standard Format
                </div>
                <div style={{ fontSize: 12, color: "#7a4500", lineHeight: 1.6 }}>
                  • <strong>40 questions total</strong> in <strong>30 minutes</strong><br />
                  • English: <strong>12–15 questions</strong><br />
                  • Other subjects: <strong>~9–10 questions each</strong><br />
                  You can adjust below to your preference.
                </div>
              </div>
            </div>
          )}

          <div className="ee-result-score">
            <span className="result-emoji">🧪</span>
            <div className="result-fraction">{totalQ} Questions</div>
            <div className="result-msg" style={{ color: "var(--primary)", fontWeight: 700, marginTop: 4 }}>
              {formatTime(customTime)}
            </div>
          </div>

          <span className="ee-label" style={{ marginTop: 16, display: "block" }}>Questions per subject</span>
          {subjectList.map(subj => {
            const defaultCount = getDefaultCount(subj)
            const count = qCounts[subj] ?? defaultCount
            const hint = examType === "postutme" && subj === "English"
              ? "Standard: 12–15"
              : examType === "postutme"
              ? "Standard: ~10"
              : `Default: ${defaultCount}q`
            return (
              <div key={subj} style={{
                background: "var(--surface)", border: "1px solid var(--border)",
                borderRadius: "var(--radius-md)", padding: "12px 16px", marginBottom: 10,
                display: "flex", alignItems: "center", justifyContent: "space-between"
              }}>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 14, color: "var(--text)" }}>{subj}</div>
                  <div style={{ fontSize: 11, color: "var(--text3)" }}>{hint}</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <button onClick={() => setQCounts(p => ({ ...p, [subj]: Math.max(1, (p[subj] ?? defaultCount) - 1) }))}
                    style={{ width: 32, height: 32, borderRadius: "var(--radius-sm)", border: "1.5px solid var(--border)", background: "var(--surface2)", fontWeight: 800, fontSize: 18, cursor: "pointer", color: "var(--text)" }}>−</button>
                  <span style={{ fontWeight: 800, fontSize: 16, color: "var(--primary)", minWidth: 30, textAlign: "center" }}>{count}</span>
                  <button onClick={() => setQCounts(p => ({ ...p, [subj]: Math.min(60, (p[subj] ?? defaultCount) + 1) }))}
                    style={{ width: 32, height: 32, borderRadius: "var(--radius-sm)", border: "1.5px solid var(--border)", background: "var(--surface2)", fontWeight: 800, fontSize: 18, cursor: "pointer", color: "var(--text)" }}>+</button>
                </div>
              </div>
            )
          })}

          <span className="ee-label" style={{ marginTop: 8, display: "block" }}>Time limit</span>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 8, marginBottom: 16 }}>
            {timeOptions.map(opt => (
              <button key={opt.seconds} onClick={() => setCustomTime(opt.seconds)} style={{
                padding: "12px 6px", borderRadius: "var(--radius-md)",
                border: customTime === opt.seconds ? "2px solid var(--primary)" : "1.5px solid var(--border)",
                background: customTime === opt.seconds ? "var(--primary-light)" : "var(--surface)",
                color: customTime === opt.seconds ? "var(--primary-text)" : "var(--text)",
                fontFamily: "var(--font-main)", fontWeight: customTime === opt.seconds ? 800 : 600,
                fontSize: 12, cursor: "pointer", transition: "all 0.15s"
              }}>{opt.label}</button>
            ))}
          </div>

          <div className="ee-card">
            <p style={{ fontSize: "13px", color: "var(--text2)", lineHeight: 1.7 }}>
              ✅ Questions grouped by subject<br />
              ✅ Navigate freely between questions<br />
              ✅ Green = answered, Red = unanswered<br />
              🧮 Calculator available during exam
            </p>
          </div>
          <button className="ee-btn ee-btn-primary mt-12" onClick={() => {
            localStorage.removeItem("cbtReport")
            setExamTimeLeft(customTime)
            setStarted(true)
          }}>Start Exam ▶</button>
          <button className="ee-btn ee-btn-secondary mt-12" onClick={() => onNavigate("home")}>Not yet, go back</button>
        </div>
      </div>
    )
  }

  const saveAnswer = (index = currentIndex, value = selected) => {
    if (!filteredQuestions[index]) return
    answersMapRef.current[index] = { selected: value, correct: filteredQuestions[index].answer }
  }
  const handleSelectOption = (opt) => { setSelected(opt); setShowExplanation(false); saveAnswer(currentIndex, opt) }
  const handleCheckAnswer = () => {
    if (!selected) return
    saveAnswer()
    setShowExplanation(true)
    const isCorrect = selected === currentQuestion.answer
    if (isCorrect) {
      setFlashCorrect(true)
      setTimeout(() => setFlashCorrect(false), 600)
      correctInARowRef.current += 1
      // Check hot streak badge
      const hotBadge = checkHotStreak(correctInARowRef.current)
      if (hotBadge) setNewBadges(prev => [...prev, hotBadge])
    } else {
      setFlashWrong(true)
      setTimeout(() => setFlashWrong(false), 600)
      correctInARowRef.current = 0
    }
  }
  const handleSubmitExam = () => {
    saveAnswer()
    const unanswered = filteredQuestions.map((_, i) => i).filter(i => !answersMapRef.current[i]?.selected)
    if (unanswered.length > 0) {
      const ok = window.confirm(`You have ${unanswered.length} unanswered question(s).\n\nSubmit anyway?`)
      if (!ok) return
    }
    setFinished(true)
  }
  const goToQuestion = (i) => { saveAnswer(); setShowExplanation(false); setCurrentIndex(i); setSelected(answersMapRef.current[i]?.selected || "") }

  if (finished) {
    // Clear saved session — they completed it
    localStorage.removeItem("studySession")
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

  if (!currentQuestion) return null

  const answeredCount = Object.values(answersMapRef.current).filter(a => a?.selected).length
  const progress = Math.round(((currentIndex + 1) / filteredQuestions.length) * 100)

  return (
    <div className="ee-page" style={{
      background: flashCorrect ? "rgba(34,201,122,0.08)" : flashWrong ? "rgba(255,107,107,0.08)" : undefined,
      transition: "background 0.3s"
    }}>
      {/* Gamification overlays */}
      {xpToast && <XPToast xp={xpToast} onDone={() => setXpToast(null)} />}
      {levelUpInfo && <LevelUpModal level={levelUpInfo} onClose={() => setLevelUpInfo(null)} />}
      {!levelUpInfo && newBadges.length > 0 && (
        <BadgeQueue badges={newBadges} onAllDone={() => setNewBadges([])} />
      )}
      <header className="ee-header">
        <button className="ee-back-btn" onClick={() => {
          if (isCBT) onNavigate("cbtSubjectSelect")
          else if (isWeak) onNavigate("progress")
          else if (isHotTopics) onNavigate("hotTopics")
          else {
            // Save session for resume (study mode only, only if past Q1)
            if (currentIndex > 0 && !finished) {
              localStorage.setItem("studySession", JSON.stringify({
                topic,
                subject: subject || "General",
                university: university || null,
                currentIndex,
                totalQuestions: filteredQuestions.length,
                savedAt: Date.now()
              }))
            }
            onNavigate("study")
          }
        }}>← Exit</button>
        <span style={{ fontWeight: 800, fontSize: "15px" }}>
          {isCBT ? "CBT Mode" : isWeak ? "Weak Areas" : isHotTopics ? "🔥 Hot Topics" : topic}
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button onClick={() => setShowCalc(p => !p)} style={{
            background: showCalc ? "var(--primary)" : "var(--surface2)",
            border: "1px solid var(--border)", borderRadius: "var(--radius-md)",
            padding: "6px 10px", cursor: "pointer", fontSize: 16,
            color: showCalc ? "#fff" : "var(--text)"
          }}>🧮</button>
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

        {currentQuestion.passage && (() => {
          // For fill-in-gap questions, highlight the current blank in the passage
          const isFillGap = /___\[\d+\]___/.test(currentQuestion.passage)
          
          if (isFillGap) {
            // Find which blank number this question is asking about
            const blankMatch = currentQuestion.question.match(/___\[(\d+)\]___/)
            const blankNum = blankMatch ? blankMatch[1] : null
            
            // Split passage into parts, highlighting the current blank
            const parts = currentQuestion.passage.split(/(___\[\d+\]___)/)
            
            return (
              <div className="ee-passage">
                <span className="passage-label">📖 Read the passage — fill in each blank</span>
                <p className="passage-text" style={{ lineHeight: 2 }}>
                  {parts.map((part, i) => {
                    const numMatch = part.match(/___\[(\d+)\]___/)
                    if (numMatch) {
                      const isCurrentBlank = numMatch[1] === blankNum
                      return (
                        <span key={i} style={{
                          display: "inline-block",
                          minWidth: 70,
                          textAlign: "center",
                          borderBottom: isCurrentBlank
                            ? "2.5px solid var(--primary)"
                            : "1.5px solid var(--text3)",
                          color: isCurrentBlank ? "var(--primary)" : "var(--text3)",
                          fontWeight: isCurrentBlank ? 800 : 600,
                          fontSize: isCurrentBlank ? 13 : 11,
                          margin: "0 2px",
                          padding: "0 4px",
                          background: isCurrentBlank ? "var(--primary-light)" : "transparent",
                          borderRadius: isCurrentBlank ? "4px 4px 0 0" : 0
                        }}>
                          {isCurrentBlank ? `[${numMatch[1]}] ?` : `[${numMatch[1]}]`}
                        </span>
                      )
                    }
                    return <span key={i}>{part}</span>
                  })}
                </p>
              </div>
            )
          }
          
          // Regular passage
          return (
            <div className="ee-passage">
              <span className="passage-label">📖 Read the passage</span>
              <p className="passage-text">{currentQuestion.passage}</p>
              {currentQuestion.passage.length < 200 && (
                <div style={{
                  marginTop: 8, padding: "6px 10px",
                  background: "rgba(255,179,71,0.12)",
                  border: "1px solid rgba(255,179,71,0.3)",
                  borderRadius: "var(--radius-sm)",
                  fontSize: 11, color: "#7a4500", fontWeight: 600
                }}>
                  ⚠️ This is an excerpt. The full passage appears across related questions.
                </div>
              )}
            </div>
          )
        })()}

        <div className="ee-question-card">
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <span className="question-topic-tag">{currentQuestion.topic}</span>
            {currentQuestion.isHotTopic && (
              <span style={{
                fontSize: 10, fontWeight: 800,
                background: "linear-gradient(135deg, #ff6b35, #f7c59f)",
                color: "#fff", padding: "2px 8px",
                borderRadius: "var(--radius-pill)",
                letterSpacing: "0.04em"
              }}>🔥 Hot Topic</span>
            )}
          </div>
          <div className="question-text">
            {/* For fill-in-gap questions, show "Fill in blank [N]" instead of repeating the sentence */}
            {/___\[\d+\]___/.test(currentQuestion.question) ? (() => {
              const m = currentQuestion.question.match(/___\[(\d+)\]___/)
              return <span>Choose the word that best fills blank <strong style={{ color: "var(--primary)" }}>[{m ? m[1] : "?"}]</strong> in the passage above.</span>
            })() : <RenderText text={currentQuestion.question} />}
          </div>
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
