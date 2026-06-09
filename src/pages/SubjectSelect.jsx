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
  "Visual Arts": { icon: "🎨", desc: "Painting, Sculpture, Design, Art History" },
  IRK:         { icon: "☪️", desc: "Islamic Religious Knowledge" },
}

const POSTUTME_DEFAULTS = {
  English: 15, Mathematics: 10, Physics: 10,
  Chemistry: 10, Biology: 10,
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
  const maxSubjects = examType === "jamb" ? 4 : subjects.length

  const [selected, setSelected] = useState([])
  const [counts, setCounts] = useState({})
  const [showCustomise, setShowCustomise] = useState(false)

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

  const getCount = (subj) => counts[subj] ?? getDefaultCount(subj)

  const getTotalQuestions = () =>
    selected.reduce((sum, subj) => sum + getCount(subj), 0)

  const handleStartCBT = () => {
    if (selected.length === 0) return
    const finalCounts = {}
    selected.forEach(subj => { finalCounts[subj] = getCount(subj) })
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
            {/* Info card */}
            <div className="ee-card" style={{ marginBottom: 16 }}>
              <p style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.6, margin: 0 }}>
                {examType === "jamb"
                  ? <><strong style={{ color: "var(--text)" }}>JAMB format:</strong> English + 3 other subjects</>
                  : <><strong style={{ color: "var(--text)" }}>Post-UTME:</strong> Select your subjects below.</>
                }
                {selected.length > 0 && (
                  <span style={{ color: "var(--primary)", fontWeight: 800 }}> {selected.length}/{maxSubjects} selected</span>
                )}
              </p>
            </div>

            {/* Subject selection — simple clean cards */}
            {subjects.map((subject, index) => {
              const meta = SUBJECT_META[subject] || { icon: "📚", desc: "" }
              const isSelected = selected.includes(subject)
              const isDisabled = !isSelected && selected.length >= maxSubjects
              const count = getCount(subject)
              return (
                <button
                  key={index}
                  onClick={() => !isDisabled && toggleSubject(subject)}
                  style={{
                    display: "flex", alignItems: "center", gap: 16,
                    width: "100%", padding: "14px 18px",
                    borderRadius: "var(--radius-lg)", marginBottom: 8,
                    borderTop: isSelected ? "2px solid var(--primary)" : "1.5px solid var(--border)",
                    borderLeft: isSelected ? "2px solid var(--primary)" : "1.5px solid var(--border)",
                    borderRight: isSelected ? "2px solid var(--primary)" : "1.5px solid var(--border)",
                    borderBottom: isSelected ? "2px solid var(--primary)" : "1.5px solid var(--border)",
                    background: isSelected ? "var(--primary-light)" : "var(--surface)",
                    cursor: isDisabled ? "not-allowed" : "pointer",
                    opacity: isDisabled ? 0.4 : 1,
                    fontFamily: "var(--font-main)", textAlign: "left",
                    transition: "all 0.15s"
                  }}
                >
                  <span style={{ fontSize: 26 }}>{meta.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 800, color: isSelected ? "var(--primary-text)" : "var(--text)" }}>
                      {subject}
                    </div>
                    <div style={{ fontSize: 12, color: "var(--text2)" }}>{meta.desc}</div>
                  </div>
                  {isSelected && (
                    <div style={{ fontSize: 12, fontWeight: 700, color: "var(--primary)" }}>
                      {count}q
                    </div>
                  )}
                  <div style={{
                    width: 22, height: 22, borderRadius: "50%", flexShrink: 0,
                    border: isSelected ? "none" : "1.5px solid var(--border-strong)",
                    background: isSelected ? "var(--primary)" : "transparent",
                    display: "flex", alignItems: "center", justifyContent: "center"
                  }}>
                    {isSelected && <span style={{ color: "#fff", fontSize: 12 }}>✓</span>}
                  </div>
                </button>
              )
            })}

            {/* Bottom action bar */}
            {selected.length > 0 && (
              <div style={{
                position: "sticky", bottom: 0,
                background: "var(--bg)", paddingTop: 12,
                borderTop: "1px solid var(--border)",
                marginTop: 8
              }}>
                {/* Total + customise row */}
                <div style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "10px 14px", marginBottom: 10,
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
                    onClick={() => setShowCustomise(true)}
                    style={{
                      padding: "6px 14px", borderRadius: 20,
                      border: "1.5px solid var(--primary)",
                      background: "transparent", color: "var(--primary)",
                      fontSize: 12, fontWeight: 700, cursor: "pointer",
                      fontFamily: "var(--font-main)"
                    }}
                  >
                    ✏️ Customise
                  </button>
                </div>

                <button className="ee-btn ee-btn-primary" onClick={handleStartCBT}>
                  Start CBT — {getTotalQuestions()} questions ▶
                </button>
              </div>
            )}
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

      {/* Customise modal — slides up from bottom */}
      {showCustomise && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 1000,
          background: "rgba(0,0,0,0.5)",
          display: "flex", alignItems: "flex-end"
        }}
          onClick={(e) => { if (e.target === e.currentTarget) setShowCustomise(false) }}
        >
          <div style={{
            background: "var(--bg)", width: "100%",
            borderRadius: "20px 20px 0 0",
            padding: "20px 20px 40px",
            maxHeight: "85vh", overflowY: "auto"
          }}>
            {/* Handle */}
            <div style={{
              width: 40, height: 4, borderRadius: 2,
              background: "var(--border)", margin: "0 auto 20px"
            }} />

            <div style={{
              display: "flex", alignItems: "center",
              justifyContent: "space-between", marginBottom: 20
            }}>
              <h3 style={{ fontSize: 16, fontWeight: 800, color: "var(--text)", margin: 0 }}>
                Customise Questions
              </h3>
              <button
                onClick={() => setShowCustomise(false)}
                style={{
                  background: "var(--surface2)", border: "none",
                  borderRadius: "50%", width: 32, height: 32,
                  fontSize: 16, cursor: "pointer", color: "var(--text)"
                }}
              >✕</button>
            </div>

            <p style={{ fontSize: 13, color: "var(--text2)", marginBottom: 16 }}>
              Set how many questions per subject. Min: 5, Max: 50.
            </p>

            {selected.map(subj => {
              const count = getCount(subj)
              const meta = SUBJECT_META[subj] || { icon: "📚" }
              return (
                <div key={subj} style={{
                  display: "flex", alignItems: "center", gap: 12,
                  padding: "14px 0",
                  borderBottom: "1px solid var(--border)"
                }}>
                  <span style={{ fontSize: 22 }}>{meta.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)" }}>{subj}</div>
                    <div style={{ fontSize: 11, color: "var(--text2)" }}>Default: {getDefaultCount(subj)}q</div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <button
                      onClick={() => updateCount(subj, count - 5)}
                      style={{
                        width: 36, height: 36, borderRadius: "50%",
                        border: "1.5px solid var(--primary)",
                        background: "var(--surface)", color: "var(--primary)",
                        fontSize: 20, fontWeight: 900, cursor: "pointer",
                        display: "flex", alignItems: "center", justifyContent: "center"
                      }}>−</button>
                    <span style={{ fontSize: 18, fontWeight: 800, color: "var(--text)", minWidth: 32, textAlign: "center" }}>
                      {count}
                    </span>
                    <button
                      onClick={() => updateCount(subj, count + 5)}
                      style={{
                        width: 36, height: 36, borderRadius: "50%",
                        border: "1.5px solid var(--primary)",
                        background: "var(--primary)", color: "#fff",
                        fontSize: 20, fontWeight: 900, cursor: "pointer",
                        display: "flex", alignItems: "center", justifyContent: "center"
                      }}>+</button>
                  </div>
                </div>
              )
            })}

            <div style={{ marginTop: 20 }}>
              <div style={{
                fontSize: 14, fontWeight: 800, color: "var(--primary)",
                textAlign: "center", marginBottom: 16
              }}>
                Total: {getTotalQuestions()} questions
              </div>
              <button
                className="ee-btn ee-btn-primary"
                onClick={() => setShowCustomise(false)}
              >
                ✓ Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SubjectSelect