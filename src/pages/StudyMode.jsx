import questions from "../data/questions"

const StudyMode = ({ subject, onNavigate }) => {
  // Derive topics for the selected subject only
  const topics = [
    ...new Set(
      questions.flatMap(q => {
        if (q.passage && q.questions) {
          return q.questions
            .filter(inner => !subject || inner.subject === subject)
            .map(inner => inner.topic)
            .filter(Boolean)
        }
        if (subject && q.subject !== subject) return []
        return q.topic ? [q.topic] : []
      })
    )
  ]

  return (
    <div className="ee-page">
      <header className="ee-header">
        <button className="ee-back-btn" onClick={() => onNavigate("subjectSelect")}>
          ← Back
        </button>
        <span style={{ fontWeight: 800, fontSize: "16px" }}>{subject} 📚</span>
        <span style={{ width: 60 }} />
      </header>

      <div className="ee-content">
        <h2 className="ee-title">Pick a topic</h2>
        <p className="ee-subtitle">Choose what you want to practice today</p>

        {topics.length === 0 ? (
          <div className="ee-empty">
            <span className="ee-empty-icon">📭</span>
            <p>No topics available for {subject} yet.</p>
          </div>
        ) : (
          topics.map((topic, index) => (
            <button
              key={index}
              className="ee-topic-btn"
              onClick={() => onNavigate("quiz", topic, subject)}
            >
              <span>{topic}</span>
              <span className="topic-btn-arrow">→</span>
            </button>
          ))
        )}
      </div>
    </div>
  )
}

export default StudyMode
