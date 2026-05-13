import { useState } from "react"
import questions from "../data/questions"

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

const getSubjects = () => {
  const set = new Set()
  questions.forEach(q => {
    if (q.subject) set.add(q.subject)
    if (q.passage && q.questions) {
      q.questions.forEach(inner => { if (inner.subject) set.add(inner.subject) })
    }
  })
  return [...set]
}

const SubjectSelect = ({ onNavigate, mode }) => {
  const subjects = getSubjects()
  const isCBT = mode === "cbt"
  const [selected, setSelected] = useState([])

  const toggleSubject = (subject) => {
    setSelected(prev =>
      prev.includes(subject)
        ? prev.filter(s => s !== subject)
        : prev.length < 4 ? [...prev, subject] : prev
    )
  }

  const handleStartCBT = () => {
    if (selected.length === 0) return
    onNavigate("cbt", null, null, selected)
  }

  const handleStudySelect = (subject) => {
    onNavigate("study", null, subject)
  }

  return (
    <div className="ee-page">
      <header className="ee-header">
        <button className="ee-back-btn" onClick={() => onNavigate("home")}>← Back</button>
        <span style={{ fontWeight: 800 }}>{isCBT ? "CBT Mode 🧪" : "Study Mode 📚"}</span>
        <span style={{ width: 60 }} />
      </header>

      <div className="ee-content">
        <h2 className="ee-title">Pick a subject</h2>

        {isCBT ? (
          <>
            <div className="ee-card" style={{ marginBottom: 16 }}>
              <p style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.6 }}>
                🎓 <strong style={{ color: "var(--text)" }}>JAMB format:</strong> English + 3 other subjects<br />
                Select up to <strong style={{ color: "var(--primary)" }}>4 subjects</strong> for your CBT session.
                {selected.length > 0 && (
                  <span style={{ color: "var(--primary)", fontWeight: 800 }}> {selected.length}/4 selected</span>
                )}
              </p>
            </div>

            {subjects.map((subject, index) => {
              const meta = SUBJECT_META[subject] || { icon: "📚", desc: "" }
              const isSelected = selected.includes(subject)
              const isDisabled = !isSelected && selected.length >= 4
              return (
                <button
                  key={index}
                  onClick={() => !isDisabled && toggleSubject(subject)}
                  style={{
                    display: "flex", alignItems: "center", gap: 16,
                    width: "100%", marginBottom: 10, padding: "14px 18px",
                    borderRadius: "var(--radius-lg)",
                    border: isSelected ? "2px solid var(--primary)" : "1.5px solid var(--border)",
                    background: isSelected ? "var(--primary-light)" : "var(--surface)",
                    cursor: isDisabled ? "not-allowed" : "pointer",
                    opacity: isDisabled ? 0.4 : 1,
                    transition: "all 0.15s",
                    fontFamily: "var(--font-main)",
                    textAlign: "left"
                  }}
                >
                  <span style={{ fontSize: 26 }}>{meta.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 800, color: isSelected ? "var(--primary-text)" : "var(--text)" }}>
                      {subject}
                    </div>
                    <div style={{ fontSize: 12, color: "var(--text2)" }}>{meta.desc}</div>
                  </div>
                  <div style={{
                    width: 22, height: 22, borderRadius: "50%",
                    border: isSelected ? "none" : "1.5px solid var(--border-strong)",
                    background: isSelected ? "var(--primary)" : "transparent",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0
                  }}>
                    {isSelected && <span style={{ color: "#fff", fontSize: 12 }}>✓</span>}
                  </div>
                </button>
              )
            })}

            <div style={{ position: "sticky", bottom: 20, marginTop: 16 }}>
              <button
                className="ee-btn ee-btn-primary"
                onClick={handleStartCBT}
                disabled={selected.length === 0}
              >
                Start CBT with {selected.length > 0 ? selected.length : ""} subject{selected.length !== 1 ? "s" : ""} ▶
              </button>
            </div>
          </>
        ) : (
          subjects.map((subject, index) => {
            const meta = SUBJECT_META[subject] || { icon: "📚", desc: "" }
            return (
              <button
                key={index}
                className="ee-home-card"
                onClick={() => handleStudySelect(subject)}
                style={{ display: "flex", alignItems: "center", gap: 16, width: "100%", marginBottom: 10, padding: "16px 18px" }}
              >
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
