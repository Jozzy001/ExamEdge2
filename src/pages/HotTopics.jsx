import { useState } from "react"
import { POST_UTME_UNIVERSITIES } from "../data/postutme/index"

const SUBJECT_META = {
  "English":     { icon: "📖", color: "#4a90d9", bg: "#f0f7ff" },
  "Mathematics": { icon: "🔢", color: "#48bb78", bg: "#f0fff4" },
  "Physics":     { icon: "⚡", color: "#ed8936", bg: "#fffaf0" },
  "Chemistry":   { icon: "🧪", color: "#9f7aea", bg: "#fdf5ff" },
  "Biology":     { icon: "🌿", color: "#38a169", bg: "#f0fff4" },
  "Government":  { icon: "🏛️", color: "#e53e3e", bg: "#fff5f5" },
  "Economics":   { icon: "📈", color: "#d69e2e", bg: "#fffff0" },
  "Commerce":    { icon: "💼", color: "#3182ce", bg: "#ebf8ff" },
  "Literature":  { icon: "📝", color: "#805ad5", bg: "#faf5ff" },
  "CRK":         { icon: "✝️", color: "#b7791f", bg: "#fffbeb" },
  "Accounts":    { icon: "🧾", color: "#2d3748", bg: "#f7fafc" },
}

const HotTopics = ({ onNavigate, onBack, university, facultySubjects }) => {
  const [selectedSubject, setSelectedSubject] = useState(null)
  const [selectedTopic, setSelectedTopic] = useState(null)

  const questionPool = POST_UTME_UNIVERSITIES[university]?.questions || []

  // Get hot topics per subject — topics with 2+ questions
  const getHotTopics = (subject) => {
    const topicCounts = {}
    questionPool.forEach(q => {
      if (q.subject === subject) {
        topicCounts[q.topic] = (topicCounts[q.topic] || 0) + 1
      }
    })
    return Object.entries(topicCounts)
      .filter(([_, count]) => count >= 2)
      .sort((a, b) => b[1] - a[1])
      .map(([topic, count]) => ({ topic, count }))
  }

  // Get questions for a specific topic (repeated ones)
  const getTopicQuestions = (subject, topic) => {
    return questionPool.filter(q => q.subject === subject && q.topic === topic)
  }

  // Get subject stats
  const subjectStats = facultySubjects.map(subject => {
    const hotTopics = getHotTopics(subject)
    const totalHotQ = hotTopics.reduce((sum, t) => sum + t.count, 0)
    return { subject, hotTopicsCount: hotTopics.length, totalHotQ }
  }).filter(s => s.hotTopicsCount > 0)

  const handleBack = () => {
    if (selectedTopic) {
      setSelectedTopic(null)
    } else if (selectedSubject) {
      setSelectedSubject(null)
    } else {
      onBack ? onBack() : onNavigate("home")
    }
  }

  // ===== SCREEN 3: Questions under a topic =====
  if (selectedSubject && selectedTopic) {
    const questions = getTopicQuestions(selectedSubject, selectedTopic)
    const meta = SUBJECT_META[selectedSubject] || { icon: "📖", color: "#667eea", bg: "#f0f4ff" }
    return (
      <div className="ee-page">
        <header className="ee-header">
          <button className="ee-back-btn" onClick={handleBack}>← Back</button>
          <span style={{ fontWeight: 800, fontSize: 15 }}>🔥 {selectedTopic}</span>
          <span style={{ width: 60 }} />
        </header>
        <div className="ee-content">
          <div style={{
            background: `linear-gradient(135deg, ${meta.color}, ${meta.color}99)`,
            borderRadius: "var(--radius-xl)", padding: "16px 20px",
            marginBottom: 20, color: "#fff"
          }}>
            <div style={{ fontSize: 13, opacity: 0.9, marginBottom: 4 }}>{selectedSubject} · Hot Topic</div>
            <div style={{ fontSize: 18, fontWeight: 800 }}>{selectedTopic}</div>
            <div style={{ fontSize: 12, opacity: 0.85, marginTop: 4 }}>
              🔥 {questions.length} repeated questions · Tested {questions.length}+ times
            </div>
          </div>

          <p style={{ fontSize: 13, color: "var(--text2)", marginBottom: 16, lineHeight: 1.6 }}>
            These questions have appeared in multiple past exams. Master them for maximum marks.
          </p>

          <button
            className="ee-btn ee-btn-primary"
            style={{ marginBottom: 16 }}
            onClick={() => onNavigate("hotTopicsQuiz", null, selectedSubject, null, university, { topic: selectedTopic })}
          >
            Practice These Questions 🚀
          </button>

          {questions.map((q, i) => (
            <div key={i} style={{
              background: "var(--surface)", border: "1px solid var(--border)",
              borderRadius: "var(--radius-md)", padding: "14px 16px",
              marginBottom: 10
            }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: meta.color, marginBottom: 6 }}>
                Q{i + 1} · {q.year || "Past Exam"}
              </div>
              <div style={{ fontSize: 13, color: "var(--text)", lineHeight: 1.6, marginBottom: 10 }}>
                {q.question}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {q.options?.map((opt, j) => (
                  <span key={j} style={{
                    fontSize: 12, padding: "4px 10px",
                    borderRadius: 20,
                    background: opt === q.answer ? "rgba(34,197,94,0.15)" : "var(--surface2)",
                    border: `1px solid ${opt === q.answer ? "rgba(34,197,94,0.4)" : "var(--border)"}`,
                    color: opt === q.answer ? "#16a34a" : "var(--text2)",
                    fontWeight: opt === q.answer ? 700 : 400
                  }}>
                    {opt === q.answer ? "✓ " : ""}{opt}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // ===== SCREEN 2: Topics for selected subject =====
  if (selectedSubject) {
    const hotTopics = getHotTopics(selectedSubject)
    const meta = SUBJECT_META[selectedSubject] || { icon: "📖", color: "#667eea", bg: "#f0f4ff" }
    return (
      <div className="ee-page">
        <header className="ee-header">
          <button className="ee-back-btn" onClick={handleBack}>← Back</button>
          <span style={{ fontWeight: 800, fontSize: 15 }}>🔥 Hot Topics</span>
          <span style={{ width: 60 }} />
        </header>
        <div className="ee-content">
          <div style={{
            background: `linear-gradient(135deg, ${meta.color}, ${meta.color}99)`,
            borderRadius: "var(--radius-xl)", padding: "16px 20px",
            marginBottom: 20, color: "#fff"
          }}>
            <div style={{ fontSize: 28, marginBottom: 6 }}>{meta.icon}</div>
            <div style={{ fontSize: 18, fontWeight: 800 }}>{selectedSubject}</div>
            <div style={{ fontSize: 12, opacity: 0.85, marginTop: 4 }}>
              {hotTopics.length} hot topics · Topics that repeat every year
            </div>
          </div>

          <h3 style={{ fontSize: 14, fontWeight: 800, color: "var(--text)", marginBottom: 12 }}>
            Pick a Topic
          </h3>

          {hotTopics.map(({ topic, count }, i) => (
            <button
              key={i}
              onClick={() => setSelectedTopic(topic)}
              style={{
                width: "100%", display: "flex", alignItems: "center",
                justifyContent: "space-between", padding: "14px 16px",
                borderRadius: "var(--radius-md)", marginBottom: 8,
                background: meta.bg,
                border: `1.5px solid ${meta.color}40`,
                cursor: "pointer", fontFamily: "var(--font-main)",
                textAlign: "left"
              }}
            >
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)" }}>{topic}</div>
                <div style={{ fontSize: 11, color: "var(--text2)", marginTop: 2 }}>
                  Appeared {count} times in past exams
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{
                  fontSize: 11, fontWeight: 800, padding: "3px 10px",
                  borderRadius: 20,
                  background: count >= 10 ? "#ff6b35" : count >= 5 ? "#ed8936" : meta.color,
                  color: "#fff"
                }}>
                  🔥 {count}
                </span>
                <span style={{ color: "var(--text3)" }}>→</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    )
  }

  // ===== SCREEN 1: Subject selection =====
  return (
    <div className="ee-page">
      <header className="ee-header">
        <button className="ee-back-btn" onClick={handleBack}>← Back</button>
        <span style={{ fontWeight: 800, fontSize: 15 }}>🔥 Hot Topics</span>
        <span style={{ width: 60 }} />
      </header>
      <div className="ee-content">
        <div style={{
          background: "linear-gradient(135deg, #ff6b35, #f7c59f)",
          borderRadius: "var(--radius-xl)", padding: "20px",
          marginBottom: 24, color: "#fff"
        }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>🔥</div>
          <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 6 }}>
            Questions That Repeat Every Year
          </div>
          <div style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.6 }}>
            These topics have appeared in multiple past exam papers.
            Master these and you're already ahead of 80% of candidates.
          </div>
        </div>

        <h3 style={{ fontSize: 14, fontWeight: 800, color: "var(--text)", marginBottom: 12 }}>
          Pick a Subject
        </h3>

        {subjectStats.map(({ subject, hotTopicsCount, totalHotQ }) => {
          const meta = SUBJECT_META[subject] || { icon: "📖", color: "#667eea", bg: "#f0f4ff" }
          return (
            <button
              key={subject}
              onClick={() => setSelectedSubject(subject)}
              style={{
                width: "100%", display: "flex", alignItems: "center",
                justifyContent: "space-between", padding: "16px 18px",
                borderRadius: "var(--radius-md)", marginBottom: 10,
                background: meta.bg,
                border: `1.5px solid ${meta.color}40`,
                cursor: "pointer", fontFamily: "var(--font-main)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span style={{ fontSize: 28 }}>{meta.icon}</span>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontWeight: 800, fontSize: 15, color: "var(--text)" }}>{subject}</div>
                  <div style={{ fontSize: 12, color: "var(--text2)", marginTop: 2 }}>
                    {hotTopicsCount} hot topics · {totalHotQ} repeated questions
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{
                  fontSize: 11, fontWeight: 800, padding: "3px 10px",
                  borderRadius: 20, background: meta.color, color: "#fff"
                }}>🔥 {hotTopicsCount}</span>
                <span style={{ color: "var(--text3)", fontSize: 18 }}>→</span>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default HotTopics