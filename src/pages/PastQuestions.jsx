import { useMemo, useState } from "react"
import "./PastQuestions.css"
import { PageTransition } from "../components/LoadingScreen"

// ⚠️ CHANGE THIS PATH to wherever your central question bank file lives
// (the file that imports jamb2010, jamb2011... and exports `questions`)
import questions from "../data/jamb/questions"

// Free users can only open these years. Set to null to open every year to everyone.
// Example: const FREE_YEARS = [2010, 2011]
const FREE_YEARS = null

const LETTERS = ["A", "B", "C", "D", "E", "F"]

const SUBJECT_EMOJI = [
  ["english", "📖"], ["math", "➗"], ["bio", "🧬"], ["chem", "⚗️"], ["phys", "⚛️"],
  ["econ", "📈"], ["gov", "🏛️"], ["lit", "📕"], ["commerce", "🛒"], ["crk", "✝️"],
  ["irk", "☪️"], ["account", "🧾"], ["geo", "🌍"], ["agric", "🌾"], ["history", "📜"],
]
const TONES = ["tone-primary", "tone-accent", "tone-success", "tone-warning"]

const emojiFor = (subject) => {
  const s = subject.toLowerCase()
  const hit = SUBJECT_EMOJI.find(([key]) => s.includes(key))
  return hit ? hit[1] : "📘"
}

// Reads a question no matter which common field names it uses
const normalize = (q) => {
  const text = q.question ?? q.text ?? q.q ?? ""

  let options = q.options ?? q.choices ?? q.opts ?? []
  if (!Array.isArray(options) && options && typeof options === "object") options = Object.values(options)
  options = options.map(o => (o && typeof o === "object" ? (o.text ?? o.label ?? o.value ?? "") : o)).map(String)

  let correct = -1
  const a = q.answer ?? q.correctAnswer ?? q.correct ?? q.ans
  if (typeof a === "number") correct = a
  else if (typeof a === "string") {
    const t = a.trim()
    const letterIdx = LETTERS.indexOf(t.toUpperCase())
    correct = t.length === 1 && letterIdx >= 0
      ? letterIdx
      : options.findIndex(o => o.trim().toLowerCase() === t.toLowerCase())
  }

  return {
    text: String(text),
    options,
    correct: correct >= 0 && correct < options.length ? correct : -1,
    explanation: q.explanation ?? q.solution ?? q.reason ?? "",
    topic: q.topic ?? "",
    subject: String(q.subject ?? "Other").trim(),
    year: q.year ? String(q.year) : "Unknown",
  }
}

// { subject: { year: [question, ...] } }
const buildBank = () => {
  const bank = {}
  questions.forEach(raw => {
    const q = normalize(raw)
    if (!q.text || q.options.length < 2) return
    bank[q.subject] = bank[q.subject] || {}
    bank[q.subject][q.year] = bank[q.subject][q.year] || []
    bank[q.subject][q.year].push(q)
  })
  return bank
}

const sortYears = (years) =>
  years.sort((a, b) => (Number(b) || -1) - (Number(a) || -1))

export default function PastQuestions({ onBack, onNavigate, isPaid }) {
  const bank = useMemo(buildBank, [])
  const [subject, setSubject] = useState(null)
  const [year, setYear] = useState(null)
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState({})   // { [index]: { selected, checked } }
  const [finished, setFinished] = useState(false)

  const subjects = Object.keys(bank).sort()
  const list = subject && year ? bank[subject][year] : []

  const resetQuiz = () => { setIndex(0); setAnswers({}); setFinished(false) }

  const goBack = () => {
    if (year) { setYear(null); resetQuiz(); return }
    if (subject) { setSubject(null); return }
    onBack()
  }

  const openYear = (y) => {
    if (FREE_YEARS && !isPaid && !FREE_YEARS.includes(Number(y))) { onNavigate("upgrade"); return }
    resetQuiz()
    setYear(y)
  }

  const title = year ? `${subject} · ${year}` : subject || "Past Questions"

  // ---------- quiz helpers ----------
  const cur = list[index]
  const ans = answers[index] || {}
  const isLast = index === list.length - 1

  const select = (i) => {
    if (ans.checked) return
    setAnswers(a => ({ ...a, [index]: { selected: i, checked: false } }))
  }

  const primaryAction = () => {
    if (!ans.checked) {
      if (ans.selected == null) return
      setAnswers(a => ({ ...a, [index]: { ...a[index], checked: true } }))
    } else if (isLast) setFinished(true)
    else setIndex(index + 1)
  }

  const dotClass = (i) => {
    if (i === index) return "q-dot current"
    const a = answers[i]
    if (a?.checked) return `q-dot ${a.selected === list[i].correct ? "answered" : "wrong"}`
    return "q-dot unanswered"
  }

  const score = list.reduce((n, q, i) => n + (answers[i]?.checked && answers[i].selected === q.correct ? 1 : 0), 0)
  const answeredCount = Object.values(answers).filter(a => a.checked).length

  return (
    <PageTransition>
    <div className="ee-page pq">
      <header className="ee-header">
        <button className="ee-back-btn" onClick={goBack}>← Back</button>
        <span className="pq-title">{title}</span>
        <span style={{ width: 60 }} />
      </header>

      <div className="ee-content">

        {/* ===== 1. SUBJECTS ===== */}
        {!subject && (
          <>
            <p className="ee-subtitle">Choose a subject to see its past questions, year by year.</p>
            {subjects.length === 0 && (
              <div className="ee-empty">
                <span className="ee-empty-icon">📭</span>
                <p>No past questions found yet.</p>
              </div>
            )}
            <div className="pq-list">
              {subjects.map((s, i) => {
                const years = Object.keys(bank[s])
                const total = years.reduce((n, y) => n + bank[s][y].length, 0)
                return (
                  <button key={s} className="pq-row" onClick={() => setSubject(s)}>
                    <span className={`pq-emoji ${TONES[i % TONES.length]}`}>{emojiFor(s)}</span>
                    <span className="pq-row-body">
                      <span className="pq-row-title">{s}</span>
                      <span className="pq-row-sub">{total} questions · {years.length} year{years.length !== 1 ? "s" : ""}</span>
                    </span>
                    <span className="pq-chevron" aria-hidden="true">›</span>
                  </button>
                )
              })}
            </div>
          </>
        )}

        {/* ===== 2. YEARS ===== */}
        {subject && !year && (
          <>
            <p className="ee-subtitle">Pick a year to practise {subject} past questions.</p>
            <div className="pq-year-grid">
              {sortYears(Object.keys(bank[subject])).map(y => {
                const locked = FREE_YEARS && !isPaid && !FREE_YEARS.includes(Number(y))
                return (
                  <button key={y} className={`pq-year ${locked ? "locked" : ""}`} onClick={() => openYear(y)}>
                    <span className="pq-year-num">{y}</span>
                    <span className="pq-year-count">
                      {bank[subject][y].length} questions {locked && "🔒"}
                    </span>
                  </button>
                )
              })}
            </div>
          </>
        )}

        {/* ===== 3. QUESTIONS ===== */}
        {subject && year && !finished && cur && (
          <>
            <div className="ee-quiz-header">
              <span className="quiz-progress-text">Question {index + 1} of {list.length}</span>
              <span className="ee-timer">{answeredCount} checked</span>
            </div>
            <div className="ee-progress-bar">
              <div className="ee-progress-fill" style={{ width: `${((index + 1) / list.length) * 100}%` }} />
            </div>

            <div className="ee-question-card">
              {cur.topic && <span className="question-topic-tag">{cur.topic}</span>}
              <div className="question-text pq-qtext">{cur.text}</div>
            </div>

            {cur.options.map((opt, i) => {
              let cls = "ee-option"
              if (ans.checked) {
                if (i === cur.correct) cls += " correct"
                else if (i === ans.selected) cls += " wrong"
              } else if (i === ans.selected) cls += " selected"
              return (
                <button key={i} className={cls} onClick={() => select(i)} disabled={!!ans.checked}>
                  <span className="opt-badge">{LETTERS[i]}</span>
                  <span className="opt-label">{opt}</span>
                </button>
              )
            })}

            {ans.checked && (
              <div className="ee-explanation">
                <span className="exp-heading">
                  {cur.correct < 0
                    ? "Answer not available"
                    : ans.selected === cur.correct ? "✅ Correct" : `❌ Wrong. The answer is ${LETTERS[cur.correct]}`}
                </span>
                {cur.explanation && <div className="exp-body pq-exp">{cur.explanation}</div>}
              </div>
            )}

            <div className="ee-nav-row">
              <button className="ee-nav-btn" disabled={index === 0} onClick={() => setIndex(index - 1)}>← Prev</button>
              <button
                className="ee-btn ee-btn-primary pq-primary"
                disabled={!ans.checked && ans.selected == null}
                onClick={primaryAction}
              >
                {!ans.checked ? "Check answer" : isLast ? "See results" : "Next →"}
              </button>
            </div>

            <div className="pq-grid-title">Jump to a question</div>
            <div className="ee-question-grid">
              {list.map((_, i) => (
                <button key={i} className={dotClass(i)} onClick={() => setIndex(i)}>{i + 1}</button>
              ))}
            </div>

            <button className="pq-link" onClick={() => setFinished(true)}>Finish now and see my score</button>
          </>
        )}

        {/* ===== 4. RESULTS ===== */}
        {subject && year && finished && (
          <>
            <div className="ee-result-score">
              <span className="result-emoji">
                {score / list.length >= 0.7 ? "🎉" : score / list.length >= 0.5 ? "👍" : "💪"}
              </span>
              <div className="result-fraction">{score}/{list.length}</div>
              <div className="result-percent" style={{ color: score / list.length >= 0.5 ? "var(--success)" : "var(--accent)" }}>
                {Math.round((score / list.length) * 100)}%
              </div>
              <div className="result-msg">
                {subject} · {year}
                {answeredCount < list.length && ` · ${list.length - answeredCount} not checked`}
              </div>
            </div>
            <button className="ee-btn ee-btn-primary" onClick={() => { setFinished(false); setIndex(0) }}>
              Review my answers
            </button>
            <div className="ee-btn-row">
              <button className="ee-btn ee-btn-secondary" style={{ flex: 1 }} onClick={resetQuiz}>Try again</button>
              <button className="ee-btn ee-btn-secondary" style={{ flex: 1 }} onClick={() => { setYear(null); resetQuiz() }}>
                Other years
              </button>
            </div>
          </>
        )}
      </div>
    </div>
    </PageTransition>
  )
}
