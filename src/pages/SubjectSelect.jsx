import { useState } from "react"
import jambQuestions from "../data/jamb/questions"
import { POST_UTME_UNIVERSITIES } from "../data/postutme/index"

const SUBJECT_META = {
  English:     { icon: "📖", desc: "Comprehension, Lexis & Structure" },
  Mathematics: { icon: "🔢", desc: "Algebra, Geometry, Calculus, Statistics" },
  Physics:     { icon: "⚡", desc: "Mechanics, Electricity, Waves" },
  Chemistry:   { icon: "🧪", desc: "Organic, Inorganic & Physical Chemistry" },
  Biology:     { icon: "🌿", desc: "Cell Biology, Genetics, Ecology" },
  Government:  { icon: "🏛️", desc: "Politics & Constitution" },
  Economics:   { icon: "📈", desc: "Micro & Macro, Trade, Development" },
  Literature:  { icon: "📝", desc: "Prose, Drama, Poetry, Literary Principles" },
  Commerce:    { icon: "💼", desc: "Trade, Insurance, Banking, Business" },
  CRK:         { icon: "✝️", desc: "Old & New Testament, Christian Living" },
  Accounts:    { icon: "🧾", desc: "Financial Accounting, Costing, Auditing" },
}

// Default Post-UTME counts per subject
const POSTUTME_DEFAULTS = {
  English: 15,
  Mathematics: 10,
  Physics: 10,
  Chemistry: 10,
  Biology: 10,
}

const getSubjects = (questions) => {
  const set = new Set()
  questions.forEach(q => {
    if (q.subject) set.add(q.subject)
    if (q.passage && q.questions) {
      q.questions.forEach(inner => { if (inner.subject) set.add(inner.subject) })
    }
  })
  return [...set]
}

const SubjectSelect = ({ onNavigate, onBack, mode, examType = "jamb", university = null, allowedSubjects = null }) => {
  const questionPool = examType === "postutme" && university
    ? POST_UTME_UNIVERSITIES[university]?.questions || []
    : jambQuestions

  const allSubjects = getSubjects(questionPool)
  const subjects = allowedSubjects
    ? allSubjects.filter(s => allowedSubjects.includes(s))
    : allSubjects

  const isCBT = mode === "cbt"
  const [selected, setSelected] = useState([])
  const [counts, setCounts] = useState({})
  const [showCounts, setShowCounts] = useState(false)

  const maxSubjects = examType === "jamb" ? 4 : subjects.length

  const getDefaultCount = (subj) => {
    if (examType === "postutme") return POSTUTME_DEFAULTS[subj] || 10
    return subj === "English" ? 60 : 40
  }

  const toggleSubject = (subject) => {
    setSelected(prev =>
      prev.includes(subject)
        ? prev.filter(s => s !== subject)
        : prev.length < maxSubjects ? [...prev, subject] : prev
    )
  }

  const updateCount = (subj, val) => {
    const num = Math.max(5, Math.min(50, parseInt(val) || getDefaultCount(subj)))
    setCounts(prev => ({ ...prev, [subj]: num }))
  }

  const getFinalCounts = () => {
    const result = {}
    selected.forEach(subj => {
      result[subj] = counts[subj] ?? getDefaultCount(subj)
    })
    return result
  }

  const getTotalQuestions = () =>
    selected.reduce((sum, subj) => sum + (counts[subj] ?? getDefaultCount(subj)), 0)

  const handleStartCBT = () => {
    if (selected.length === 0) return
    const finalCounts = getFinalCounts()
    onNavigate("cbt", null, null, selected, university, finalCounts)
  }

  const handleStudySelect = (subject) => {
    onNavigate("study", null, subject, null, university)
  }

  const uniName = university ? POST_UTME_UNIVERSITIES[university]?.name : null

  return (
    <div className="ee-page">
      <header className="ee-header">
        <button className="ee-back-btn" onClick={() => onBack ? onBack() : onNavigate("home")}>← Back</button>
        <span style={{ fontWeight: 800 }}>{isCBT ? "CBT Mode 🧪" : "Study Mode 📚"}</span>
        <span style={{ width: 60 }} />
      </header>

      <div className="ee-content">
        <h2 className="ee-title">Pick a subject</h2>
        {uniName && <p className="ee-subtitle">{uniName}</p>}

        {isCBT ? (
          <>
            <div className="ee-card" style={{ marginBottom: 16 }}>
              <p style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.6 }}>
                {examType === "jamb"
                  ? <><strong style={{ color: "var(--text)" }}>JAMB format:</strong> English + 3 other subjects</>
                  : <><strong style={{ color: "var(--text)" }}>Post-UTME:</strong> Select subjects and set question counts.</>
                }
                {selected.length > 0 && (
                  <span style={{ color: "var(--primary)", fontWeight: 800 }}> {selected.length}/{maxSubjects} selected</span>
                )}
              </p>
            </div>

            {/* Subject selection */}
            {subjects.map((subject, index) => {
              const meta = SUBJECT_META[subject] || { icon: "📚", desc: "" }
              const isSelected = selected.includes(subject)
              const isDisabled = !isSelected && selected.length >= maxSubjects
              const count = counts[subject] ?? getDefaultCount(subject)
              return (
                <div key={index} style={{ marginBottom: 10 }}>
                  <button onClick={() => !isDisabled && toggleSubject(subject)} style={{
                    display: "flex", alignItems: "center", gap: 16,
                    width: "100%", padding: "14px 18px",
                    borderRadius: isSelected && showCounts ? "var(--radius-lg) var(--radius-lg) 0 0" : "var(--radius-lg)",
                    borderTop: isSelected ? "2px solid var(--primary)" : "1.5px solid var(--border)",
                    borderLeft: isSelected ? "2px solid var(--primary)" : "1.5px solid var(--border)",
                    borderRight: isSelected ? "2px solid var(--primary)" : "1.5px solid var(--border)",
                    borderBottom: isSelected && showCounts ? "1px solid var(--border)" : isSelected ? "2px solid var(--primary)" : "1.5px solid var(--border)",
                    background: isSelected ? "var(--primary-light)" : "var(--surface)",
                    cursor: isDisabled ? "not-allowed" : "pointer",
                    opacity: isDisabled ? 0.4 : 1,
                    transition: "all 0.15s", fontFamily: "var(--font-main)", textAlign: "left"
                  }}>
                    <span style={{ fontSize: 26 }}>{meta.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 14, fontWeight: 800, color: isSelected ? "var(--primary-text)" : "var(--text)" }}>{subject}</div>
                      <div style={{ fontSize: 12, color: "var(--text2)" }}>{meta.desc}</div>
                    </div>
                    {isSelected && showCounts && (
                      <div style={{ fontSize: 12, fontWeight: 700, color: "var(--primary)", marginRight: 8 }}>
                        {count}q
                      </div>
                    )}
                    <div style={{
                      width: 22, height: 22, borderRadius: "50%",
                      border: isSelected ? "none" : "1.5px solid var(--border-strong)",
                      background: isSelected ? "var(--primary)" : "transparent",
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
                    }}>
                      {isSelected && <span style={{ color: "#fff", fontSize: 12 }}>✓</span>}
                    </div>
                  </button>

                  {/* Question count input - shows when subject selected and showCounts is on */}
                  {isSelected && showCounts && (
                    <div style={{
                      padding: "12px 18px",
                      background: "var(--primary-light)",
                      border: "2px solid var(--primary)",
                      borderTop: "none",
                      borderRadius: "0 0 var(--radius-lg) var(--radius-lg)",
                      display: "flex", alignItems: "center", gap: 12
                    }}>
                      <span style={{ fontSize: 12, color: "var(--text2)", flex: 1 }}>Questions for {subject}:</span>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <button
                          onClick={(e) => { e.stopPropagation(); updateCount(subject, count - 5) }}
                          style={{
                            width: 28, height: 28, borderRadius: "50%",
                            border: "1.5px solid var(--primary)", background: "var(--surface)",
                            color: "var(--primary)", fontWeight: 900, fontSize: 16,
                            cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center"
                          }}>−</button>
                        <span style={{ fontSize: 15, fontWeight: 800, color: "var(--text)", minWidth: 28, textAlign: "center" }}>
                          {count}
                        </span>
                        <button
                          onClick={(e) => { e.stopPropagation(); updateCount(subject, count + 5) }}
                          style={{
                            width: 28, height: 28, borderRadius: "50%",
                            border: "1.5px solid var(--primary)", background: "var(--surface)",
                            color: "var(--primary)", fontWeight: 900, fontSize: 16,
                            cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center"
                          }}>+</button>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}

            {/* Customise counts toggle + total */}
            {selected.length > 0 && (
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "12px 16px", marginBottom: 12,
                background: "var(--surface)", borderRadius: "var(--radius-lg)",
                border: "1.5px solid var(--border)"
              }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)" }}>
                    Total: <span style={{ color: "var(--primary)" }}>{getTotalQuestions()} questions</span>
                  </div>
                  <div style={{ fontSize: 11, color: "var(--text2)" }}>
                    {selected.join(" + ")}
                  </div>
                </div>
                <button
                  onClick={() => setShowCounts(prev => !prev)}
                  style={{
                    padding: "6px 12px", borderRadius: 20,
                    border: "1.5px solid var(--primary)",
                    background: showCounts ? "var(--primary)" : "transparent",
                    color: showCounts ? "#fff" : "var(--primary)",
                    fontSize: 12, fontWeight: 700, cursor: "pointer",
                    fontFamily: "var(--font-main)"
                  }}>
                  {showCounts ? "✓ Custom" : "Customise"}
                </button>
              </div>
            )}

            <div style={{ position: "sticky", bottom: 20, marginTop: 8 }}>
              <button className="ee-btn ee-btn-primary" onClick={handleStartCBT} disabled={selected.length === 0}>
                Start CBT — {getTotalQuestions()} questions ▶
              </button>
            </div>
          </>
        ) : (
          subjects.map((subject, index) => {
            const meta = SUBJECT_META[subject] || { icon: "📚", desc: "" }
            return (
              <button key={index} className="ee-home-card" onClick={() => handleStudySelect(subject)}
                style={{ display: "flex", alignItems: "center", gap: 16, width: "100%", marginBottom: 10, padding: "16px 18px" }}>
                <span style={{ fontSize: 28 }}>{meta.icon}</span>
                <div style={{ textAlign: "left" }}>
                  <div className="home-card-title">{subject}</div>
                  <div className="home-card-sub">{meta.desc}</div>
                </div>
                <span style={{ marginLeft: "auto" }}>→</span>
              </button>
            )
          })
        )}
      </div>
    </div>
  )
}

export default SubjectSelect