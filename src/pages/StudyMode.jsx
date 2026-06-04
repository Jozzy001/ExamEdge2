import { useState } from "react"
import questions from "../data/jamb/questions"
import { POST_UTME_UNIVERSITIES } from "../data/postutme/index"
import STUDY_GUIDES from "../data/studyGuides"

const StudyMode = ({ subject, onNavigate, onBack, university = null }) => {
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
            <div style={{ fontSize: 36, marginBottom: 10 }}>{guide.icon || "📖"}</div>
            <div style={{ fontSize: 11, fontWeight: 700, opacity: 0.75, marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.07em" }}>
              {subject} · {selectedTopic}
            </div>
            <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 8 }}>{guide.title || selectedTopic}</div>
            {guide.estimatedTime && (
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                background: "rgba(255,255,255,0.2)", padding: "4px 12px",
                borderRadius: "var(--radius-pill)", fontSize: 12, fontWeight: 700
              }}>
                ⏱ {guide.estimatedTime}
              </div>
            )}
          </div>

          {/* Guide content — supports both old (sections) and new (summary+keyPoints) format */}
          {guide.sections ? (
            guide.sections.map((section, i) => (
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
                {section.type === "steps" && section.items?.map((item, j) => (
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
                    {section.items?.map((card, j) => (
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
              </div>
            ))
          ) : (
            <>
              {/* Summary */}
              {guide.summary && (
                <div style={{
                  background: "var(--surface)", borderRadius: "var(--radius-lg)",
                  padding: "16px", marginBottom: 20,
                  border: "1px solid var(--border)"
                }}>
                  <div style={{ fontSize: 12, fontWeight: 800, color: "var(--text3)", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 10 }}>
                    📖 Overview
                  </div>
                  <p style={{ fontSize: 14, color: "var(--text)", lineHeight: 1.75, margin: 0 }}>{guide.summary}</p>
                </div>
              )}

              {/* Key Points */}
              {guide.keyPoints && guide.keyPoints.length > 0 && (
                <div style={{ marginBottom: 20 }}>
                  <div style={{ fontSize: 12, fontWeight: 800, color: "var(--text3)", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 12 }}>
                    🎯 Key Points to Remember
                  </div>
                  {guide.keyPoints.map((point, i) => (
                    <div key={i} style={{
                      display: "flex", gap: 10, marginBottom: 10,
                      background: "var(--surface)", borderRadius: "var(--radius-md)",
                      padding: "10px 14px", border: "1px solid var(--border)"
                    }}>
                      <span style={{
                        width: 22, height: 22, borderRadius: "50%", flexShrink: 0,
                        background: "var(--primary)", color: "#fff",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 11, fontWeight: 800
                      }}>{i + 1}</span>
                      <p style={{ fontSize: 13, color: "var(--text)", lineHeight: 1.6, margin: 0 }}>{point}</p>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {/* Action buttons */}

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
        <button className="ee-back-btn" onClick={() => onBack ? onBack() : onNavigate("subjectSelect")}>← Back</button>
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