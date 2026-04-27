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
}

const getSubjects = () => {
  const set = new Set()
  questions.forEach(q => {
    if (q.subject) set.add(q.subject)
    if (q.passage && q.questions) {
      q.questions.forEach(inner => {
        if (inner.subject) set.add(inner.subject)
      })
    }
  })
  return [...set]
}

const SubjectSelect = ({ onNavigate, mode }) => {
  const subjects = getSubjects()
  const isCBT = mode === "cbt"

  const handleSelect = (subject) => {
    if (isCBT) onNavigate("cbt", null, subject)
    else onNavigate("study", null, subject)
  }

  return (
    <div className="ee-page">
      <header className="ee-header">
        <button className="ee-back-btn" onClick={() => onNavigate("home")}>
          ← Back
        </button>
        <span style={{ fontWeight: 800 }}>
          {isCBT ? "CBT Mode 🧪" : "Study Mode 📚"}
        </span>
        <span style={{ width: 60 }} />
      </header>

      <div className="ee-content">
        <h2 className="ee-title">Pick a subject</h2>

        {subjects.map((subject, index) => {
          const meta = SUBJECT_META[subject] || { icon: "📚", desc: "" }
          return (
            <button
              key={index}
              className="ee-home-card"
              onClick={() => handleSelect(subject)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                width: "100%",
                marginBottom: 10,
                padding: "16px 18px"
              }}
            >
              <span style={{ fontSize: 28 }}>{meta.icon}</span>
              <div style={{ textAlign: "left" }}>
                <div className="home-card-title">{subject}</div>
                <div className="home-card-sub">{meta.desc}</div>
              </div>
              <span style={{ marginLeft: "auto" }}>→</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default SubjectSelect
