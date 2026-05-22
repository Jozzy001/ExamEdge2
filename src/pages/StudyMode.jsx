import { useState } from "react"
import questions from "../data/questions"
import { POST_UTME_UNIVERSITIES } from "../data/postutme/index"
import STUDY_GUIDES from "../data/studyGuides"

const StudyMode = ({ subject, onNavigate, university = null }) => {
  const [selectedTopic, setSelectedTopic] = useState(null)

  const questionPool = university
    ? POST_UTME_UNIVERSITIES[university]?.questions || []
    : questions

  const topics = [
    ...new Set(
      questionPool.flatMap(q => {
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

  const handleTopicClick = (topic) => {
    const hasGuide = !!STUDY_GUIDES[topic]
    if (hasGuide) {
      setSelectedTopic(topic)
    } else {
      // No guide — go straight to quiz
      onNavigate("quiz", topic, subject)
    }
  }

  // Show study guide inline before quiz
  if (selectedTopic) {
    const guide = STUDY_GUIDES[selectedTopic]
    return (
      <div className="ee-page">
        <header className="ee-header">
          <button className="ee-back-btn" onClick={() => setSelectedTopic(null)}>← Back</button>
          <span style={{ fontWeight: 800, fontSize: "15px" }}>Study Guide</span>
          <span style={{ width: 60 }} />
        </header>
        <div className="ee-content">

          {/* Guide header card */}
          <div style={{
            background: "var(--primary)", borderRadius: "var(--radius-xl)",
            padding: "20px", marginBottom: 24, color: "#fff"
          }}>
            <div style={{ fontSize: 36, marginBottom: 10 }}>{guide.icon}</div>
            <div style={{ fontSize: 11, fontWeight: 700, opacity: 0.75, marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.07em" }}>
              {subject} · {selectedTopic}
            </div>
            <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 8 }}>{guide.title}</div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: "rgba(255,255,255,0.2)", padding: "4px 12px",
              borderRadius: "var(--radius-pill)", fontSize: 12, fontWeight: 700
            }}>
              ⏱ {guide.estimatedTime}
            </div>
          </div>

          {/* Sections */}
          {guide.sections.map((section, i) => (
            <div key={i} style={{ marginBottom: 24 }}>
              {section.heading && (
                <h3 style={{
                  fontSize: 13, fontWeight: 800, color: "var(--text)",
                  marginBottom: 12, textTransform: "uppercase",
                  letterSpacing: "0.05em", opacity: 0.65
                }}>{section.heading}</h3>
              )}

              {section.type === "text" && (
                <p style={{ fontSize: 14, color: "var(--text)", lineHeight: 1.75 }}>{section.content}</p>
              )}

              {section.type === "steps" && section.items.map((item, j) => (
                <div key={j} style={{ display: "flex", gap: 12, marginBottom: 12 }}>
                  <div style={{
                    width: 26, height: 26, borderRadius: "50%", flexShrink: 0,
                    background: "var(--primary)", color: "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 12, fontWeight: 800
                  }}>{j + 1}</div>
                  <p style={{ fontSize: 14, color: "var(--text)", lineHeight: 1.65, paddingTop: 3 }}>{item}</p>
                </div>
              ))}

              {section.type === "cards" && (
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {section.items.map((card, j) => (
                    <div key={j} style={{
                      background: "var(--surface2)", borderRadius: "var(--radius-md)",
                      padding: "12px 14px", borderLeft: "3px solid var(--primary)"
                    }}>
                      <div style={{ fontSize: 13, fontWeight: 800, color: "var(--primary-text)", marginBottom: 4 }}>{card.title}</div>
                      <div style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.6 }}>{card.body}</div>
                    </div>
                  ))}
                </div>
              )}

              {section.type === "warning" && (
                <div style={{
                  background: "var(--accent-light)", borderRadius: "var(--radius-md)",
                  padding: "14px 16px", border: "1px solid rgba(255,107,107,0.25)"
                }}>
                  <div style={{ fontSize: 11, fontWeight: 800, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 10 }}>
                    ⚠️ Watch Out For
                  </div>
                  {section.items.map((item, j) => (
                    <div key={j} style={{ display: "flex", gap: 8, marginBottom: j < section.items.length - 1 ? 8 : 0 }}>
                      <span style={{ color: "var(--accent)", fontSize: 14, flexShrink: 0 }}>✗</span>
                      <p style={{ fontSize: 13, color: "var(--text)", lineHeight: 1.6 }}>{item}</p>
                    </div>
                  ))}
                </div>
              )}

              {section.type === "tip" && (
                <div style={{
                  background: "var(--success-light)", borderRadius: "var(--radius-md)",
                  padding: "14px 16px", border: "1px solid rgba(34,201,122,0.25)",
                  display: "flex", gap: 12
                }}>
                  <span style={{ fontSize: 20, flexShrink: 0 }}>💡</span>
                  <p style={{ fontSize: 13, color: "var(--text)", lineHeight: 1.65, fontWeight: 600 }}>
                    <span style={{ color: "var(--success)", fontWeight: 800 }}>Quick Tip: </span>
                    {section.content}
                  </p>
                </div>
              )}
            </div>
          ))}

          {/* Action buttons */}
          <button className="ee-btn ee-btn-primary" onClick={() => onNavigate("quiz", selectedTopic, subject)}>
            Start Practice Questions →
          </button>
          <button className="ee-btn ee-btn-secondary" style={{ marginTop: 10 }} onClick={() => setSelectedTopic(null)}>
            ← Back to Topics
          </button>
        </div>
      </div>
    )
  }

  // Topic list
  return (
    <div className="ee-page">
      <header className="ee-header">
        <button className="ee-back-btn" onClick={() => onNavigate("subjectSelect")}>← Back</button>
        <span style={{ fontWeight: 800, fontSize: "16px" }}>{subject} 📚</span>
        <span style={{ width: 60 }} />
      </header>

      <div className="ee-content">
        <h2 className="ee-title">Pick a topic</h2>
        <p className="ee-subtitle">Topics with 📖 have a study guide</p>

        {topics.length === 0 ? (
          <div className="ee-empty">
            <span className="ee-empty-icon">📭</span>
            <p>No topics available for {subject} yet.</p>
          </div>
        ) : (
          topics.map((topic, index) => {
            const hasGuide = !!STUDY_GUIDES[topic]
            return (
              <button
                key={index}
                className="ee-topic-btn"
                onClick={() => handleTopicClick(topic)}
              >
                <span>{topic}</span>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  {hasGuide && (
                    <span style={{
                      fontSize: 10, fontWeight: 800, background: "var(--primary-light)",
                      color: "var(--primary-text)", padding: "2px 8px",
                      borderRadius: "var(--radius-pill)"
                    }}>📖 Guide</span>
                  )}
                  <span className="topic-btn-arrow">→</span>
                </div>
              </button>
            )
          })
        )}
      </div>
    </div>
  )
}

export default StudyMode
