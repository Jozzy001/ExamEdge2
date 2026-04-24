import questions from "../data/questions"

const StudyMode = ({ onNavigate }) => {
  const topics = [
    ...new Set(
      questions.flatMap(q => {
        if (q.passage && q.questions) {
          return q.questions.map(inner => inner.topic).filter(Boolean)
        }
        return q.topic ? [q.topic] : []
      })
    )
  ]

  return (
    <div className="ee-page">
      <header className="ee-header">
        <button className="ee-back-btn" onClick={() => onNavigate("home")}>
          ← Back
        </button>
        <span style={{ fontWeight: 800, fontSize: "16px" }}>Study Mode</span>
        <span style={{ width: 60 }} />
      </header>

      <div className="ee-content">
        <h2 className="ee-title">Pick a topic 📚</h2>
        <p className="ee-subtitle">Choose what you want to practice today</p>

        {topics.length === 0 ? (
          <div className="ee-empty">
            <span className="ee-empty-icon">📭</span>
            <p>No topics available yet.</p>
          </div>
        ) : (
          topics.map((topic, index) => (
            <button
              key={index}
              className="ee-topic-btn"
              onClick={() => onNavigate("quiz", topic)}
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
