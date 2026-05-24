import { useState, useRef, useEffect } from "react"
import questions from "../data/jamb/questions"
import { POST_UTME_UNIVERSITIES } from "../data/postutme/index"
import STUDY_GUIDES from "../data/studyGuides"

// =============================================
// RENDER BOLD MARKERS in guide text
// =============================================
const RenderGuideText = ({ text }) => {
  if (!text) return null
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return (
    <>
      {parts.map((part, i) => {
        const match = part.match(/^\*\*([^*]+)\*\*$/)
        if (match) return (
          <strong key={i} style={{ color: "var(--primary)", fontWeight: 800 }}>
            {match[1]}
          </strong>
        )
        return <span key={i}>{part}</span>
      })}
    </>
  )
}

// =============================================
// EXPANDABLE CARD
// =============================================
const ExpandableCard = ({ title, body, index }) => {
  const [open, setOpen] = useState(false)
  const isRecurring = body.includes("RECURRING") || body.includes("★")

  return (
    <div
      onClick={() => setOpen(p => !p)}
      style={{
        background: open ? "var(--primary-light)" : "var(--surface)",
        borderRadius: "var(--radius-md)",
        border: open ? "1.5px solid var(--primary)" : "1px solid var(--border)",
        marginBottom: 8, cursor: "pointer", transition: "all 0.2s",
        overflow: "hidden"
      }}
    >
      {/* Card header */}
      <div style={{
        display: "flex", alignItems: "center", gap: 10,
        padding: "12px 14px"
      }}>
        <div style={{
          width: 28, height: 28, borderRadius: "var(--radius-sm)",
          background: open ? "var(--primary)" : "var(--surface2)",
          color: open ? "#fff" : "var(--primary)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 12, fontWeight: 800, flexShrink: 0, transition: "all 0.2s"
        }}>{index + 1}</div>
        <div style={{ flex: 1 }}>
          <div style={{
            fontSize: 13, fontWeight: 800,
            color: open ? "var(--primary-text)" : "var(--text)"
          }}>{title}</div>
          {isRecurring && !open && (
            <div style={{ fontSize: 10, color: "#c45e00", fontWeight: 700, marginTop: 2 }}>
              🔥 Recurring question
            </div>
          )}
        </div>
        <span style={{
          fontSize: 16, color: "var(--text3)", transition: "transform 0.2s",
          transform: open ? "rotate(90deg)" : "rotate(0deg)"
        }}>›</span>
      </div>

      {/* Card body */}
      {open && (
        <div style={{
          padding: "0 14px 14px 52px",
          fontSize: 13, color: "var(--text)", lineHeight: 1.7
        }}>
          <RenderGuideText text={body} />
        </div>
      )}
    </div>
  )
}

// =============================================
// SECTION RENDERER
// =============================================
const GuideSection = ({ section, sectionIndex }) => {
  const sectionColors = {
    text:    { bg: "var(--surface)",       border: "var(--border)",                  accent: "var(--primary)" },
    steps:   { bg: "var(--surface)",       border: "var(--border)",                  accent: "var(--primary)" },
    cards:   { bg: "transparent",          border: "transparent",                    accent: "var(--primary)" },
    warning: { bg: "rgba(255,107,107,0.06)", border: "rgba(255,107,107,0.2)",        accent: "#e53e3e" },
    tip:     { bg: "rgba(34,201,122,0.06)", border: "rgba(34,201,122,0.2)",          accent: "var(--success)" },
  }

  return (
    <div style={{ marginBottom: 28 }}>

      {/* Section heading */}
      {section.heading && (
        <div style={{
          display: "flex", alignItems: "center", gap: 10, marginBottom: 14
        }}>
          <div style={{
            width: 3, height: 18, borderRadius: 2,
            background: "var(--primary)", flexShrink: 0
          }} />
          <h3 style={{
            fontSize: 12, fontWeight: 800, color: "var(--text)",
            textTransform: "uppercase", letterSpacing: "0.07em", margin: 0
          }}>{section.heading}</h3>
        </div>
      )}

      {/* TEXT */}
      {section.type === "text" && (
        <div style={{
          background: "var(--surface2)", borderRadius: "var(--radius-md)",
          padding: "16px 18px", borderLeft: "3px solid var(--primary)"
        }}>
          <p style={{ fontSize: 14, color: "var(--text)", lineHeight: 1.8, margin: 0 }}>
            <RenderGuideText text={section.content} />
          </p>
        </div>
      )}

      {/* STEPS */}
      {section.type === "steps" && (
        <div style={{
          background: "var(--surface)", borderRadius: "var(--radius-md)",
          border: "1px solid var(--border)", overflow: "hidden"
        }}>
          {section.items.map((item, j) => (
            <div key={j} style={{
              display: "flex", gap: 14, padding: "12px 16px",
              borderBottom: j < section.items.length - 1 ? "1px solid var(--border)" : "none",
              background: j % 2 === 0 ? "transparent" : "var(--surface2)"
            }}>
              <div style={{
                width: 24, height: 24, borderRadius: "50%", flexShrink: 0,
                background: "var(--primary)", color: "#fff",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 11, fontWeight: 800, marginTop: 1
              }}>{j + 1}</div>
              <p style={{ fontSize: 13, color: "var(--text)", lineHeight: 1.7, margin: 0, paddingTop: 2 }}>
                <RenderGuideText text={item} />
              </p>
            </div>
          ))}
        </div>
      )}

      {/* CARDS — expandable */}
      {section.type === "cards" && (
        <div>
          {section.items.map((card, j) => (
            <ExpandableCard key={j} title={card.title} body={card.body} index={j} />
          ))}
        </div>
      )}

      {/* WARNING */}
      {section.type === "warning" && (
        <div style={{
          background: "rgba(255,107,107,0.06)",
          borderRadius: "var(--radius-md)",
          padding: "14px 16px",
          border: "1px solid rgba(255,107,107,0.2)"
        }}>
          <div style={{
            fontSize: 11, fontWeight: 800, color: "#e53e3e",
            textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 12,
            display: "flex", alignItems: "center", gap: 6
          }}>
            ⚠️ Watch Out For
          </div>
          {section.items.map((item, j) => (
            <div key={j} style={{
              display: "flex", gap: 10,
              marginBottom: j < section.items.length - 1 ? 10 : 0,
              paddingBottom: j < section.items.length - 1 ? 10 : 0,
              borderBottom: j < section.items.length - 1 ? "1px solid rgba(255,107,107,0.15)" : "none"
            }}>
              <span style={{ color: "#e53e3e", fontSize: 14, flexShrink: 0, marginTop: 1 }}>✗</span>
              <p style={{ fontSize: 13, color: "var(--text)", lineHeight: 1.65, margin: 0 }}>
                <RenderGuideText text={item} />
              </p>
            </div>
          ))}
        </div>
      )}

      {/* TIP */}
      {section.type === "tip" && (
        <div style={{
          background: "rgba(34,201,122,0.06)",
          borderRadius: "var(--radius-md)",
          padding: "16px 18px",
          border: "1px solid rgba(34,201,122,0.2)",
          display: "flex", gap: 14
        }}>
          <div style={{
            width: 36, height: 36, borderRadius: "var(--radius-md)",
            background: "rgba(34,201,122,0.15)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 18, flexShrink: 0
          }}>💡</div>
          <div>
            <div style={{
              fontSize: 11, fontWeight: 800, color: "var(--success)",
              textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 6
            }}>Quick Tip</div>
            <p style={{ fontSize: 13, color: "var(--text)", lineHeight: 1.7, margin: 0 }}>
              <RenderGuideText text={section.content} />
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

// =============================================
// TABLE OF CONTENTS
// =============================================
const TableOfContents = ({ sections, activeSection }) => (
  <div style={{
    background: "var(--surface2)", borderRadius: "var(--radius-md)",
    padding: "14px 16px", marginBottom: 24,
    border: "1px solid var(--border)"
  }}>
    <div style={{
      fontSize: 11, fontWeight: 800, color: "var(--text3)",
      textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 10
    }}>📋 Contents</div>
    {sections.filter(s => s.heading).map((section, i) => (
      <div key={i} style={{
        display: "flex", alignItems: "center", gap: 8,
        padding: "4px 0",
        borderBottom: i < sections.filter(s => s.heading).length - 1
          ? "1px solid var(--border)" : "none"
      }}>
        <div style={{
          width: 6, height: 6, borderRadius: "50%",
          background: "var(--primary)", flexShrink: 0, opacity: 0.5
        }} />
        <span style={{ fontSize: 12, color: "var(--text2)", lineHeight: 1.5 }}>
          {section.heading}
        </span>
      </div>
    ))}
  </div>
)

// =============================================
// STUDY GUIDE VIEW
// =============================================
const GuideView = ({ guide, topic, subject, onStartQuiz, onBack }) => {
  const [expandAll, setExpandAll] = useState(false)
  const contentRef = useRef(null)

  const cardSections = guide.sections.filter(s => s.type === "cards")
  const totalCards = cardSections.reduce((sum, s) => sum + s.items.length, 0)

  return (
    <div className="ee-page">
      <header className="ee-header">
        <button className="ee-back-btn" onClick={onBack}>← Back</button>
        <span style={{ fontWeight: 800, fontSize: "14px" }}>Study Guide</span>
        <button
          onClick={() => setExpandAll(p => !p)}
          style={{
            background: "none", border: "1px solid var(--border)",
            borderRadius: "var(--radius-sm)", padding: "4px 10px",
            fontSize: 11, fontWeight: 700, color: "var(--text2)", cursor: "pointer",
            fontFamily: "var(--font-main)"
          }}
        >
          {expandAll ? "Collapse" : "Expand All"}
        </button>
      </header>

      <div className="ee-content" ref={contentRef}>

        {/* Hero card */}
        <div style={{
          background: "linear-gradient(135deg, var(--primary), var(--primary-dark, var(--primary)))",
          borderRadius: "var(--radius-xl)", padding: "24px 20px",
          marginBottom: 20, color: "#fff", position: "relative", overflow: "hidden"
        }}>
          {/* Background decoration */}
          <div style={{
            position: "absolute", right: -20, top: -20,
            fontSize: 80, opacity: 0.1, lineHeight: 1
          }}>{guide.icon}</div>

          <div style={{ fontSize: 36, marginBottom: 12 }}>{guide.icon}</div>
          <div style={{
            fontSize: 10, fontWeight: 800, opacity: 0.75,
            textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4
          }}>
            {subject} · Study Guide
          </div>
          <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 12, lineHeight: 1.2 }}>
            {guide.title}
          </div>

          {/* Stats row */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {[
              { icon: "⏱", label: guide.estimatedTime },
              { icon: "📌", label: `${guide.sections.length} sections` },
              { icon: "🃏", label: `${totalCards} key concepts` },
            ].map((stat, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.18)",
                borderRadius: "var(--radius-pill)",
                padding: "4px 10px", fontSize: 11, fontWeight: 700,
                display: "flex", alignItems: "center", gap: 5
              }}>
                <span>{stat.icon}</span>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Exam tip banner */}
        <div style={{
          background: "linear-gradient(135deg, #fff8f0, #ffe8d6)",
          border: "1px solid #ffb347", borderRadius: "var(--radius-md)",
          padding: "10px 14px", marginBottom: 20,
          display: "flex", alignItems: "center", gap: 10
        }}>
          <span style={{ fontSize: 18 }}>🎯</span>
          <p style={{ fontSize: 12, color: "#7a4500", margin: 0, fontWeight: 600, lineHeight: 1.5 }}>
            Read through the guide, then tap <strong>Start Practice Questions</strong> to test yourself.
            Cards marked <strong>🔥 Recurring</strong> appear frequently in UNIBEN exams.
          </p>
        </div>

        {/* Table of contents */}
        <TableOfContents sections={guide.sections} />

        {/* Divider */}
        <div style={{
          height: 1, background: "var(--border)", marginBottom: 24
        }} />

        {/* All sections */}
        {guide.sections.map((section, i) => (
          <GuideSection key={i} section={section} sectionIndex={i} />
        ))}

        {/* Bottom CTA */}
        <div style={{
          background: "var(--surface2)", borderRadius: "var(--radius-xl)",
          padding: "20px", marginTop: 8, marginBottom: 8,
          border: "1px solid var(--border)", textAlign: "center"
        }}>
          <div style={{ fontSize: 28, marginBottom: 8 }}>✅</div>
          <div style={{ fontSize: 15, fontWeight: 800, color: "var(--text)", marginBottom: 4 }}>
            Ready to practice?
          </div>
          <div style={{ fontSize: 13, color: "var(--text2)", marginBottom: 16 }}>
            Test what you've learned with past questions on <strong>{topic}</strong>
          </div>
          <button className="ee-btn ee-btn-primary" onClick={onStartQuiz}>
            Start Practice Questions →
          </button>
          <button
            className="ee-btn ee-btn-secondary"
            style={{ marginTop: 10 }}
            onClick={onBack}
          >
            ← Back to Topics
          </button>
        </div>

      </div>
    </div>
  )
}

// =============================================
// STUDY MODE — TOPIC LIST
// =============================================
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
    if (STUDY_GUIDES[topic]) {
      setSelectedTopic(topic)
    } else {
      onNavigate("quiz", topic, subject)
    }
  }

  // Show guide
  if (selectedTopic) {
    const guide = STUDY_GUIDES[selectedTopic]
    return (
      <GuideView
        guide={guide}
        topic={selectedTopic}
        subject={subject}
        onStartQuiz={() => onNavigate("quiz", selectedTopic, subject)}
        onBack={() => setSelectedTopic(null)}
      />
    )
  }

  // Topic list
  const guidedTopics = topics.filter(t => STUDY_GUIDES[t])
  const unguidedTopics = topics.filter(t => !STUDY_GUIDES[t])

  return (
    <div className="ee-page">
      <header className="ee-header">
        <button className="ee-back-btn" onClick={() => onNavigate("subjectSelect")}>← Back</button>
        <span style={{ fontWeight: 800, fontSize: "16px" }}>{subject} 📚</span>
        <span style={{ width: 60 }} />
      </header>

      <div className="ee-content">
        <h2 className="ee-title">Pick a topic</h2>

        {/* Guided topics */}
        {guidedTopics.length > 0 && (
          <>
            <div style={{
              display: "flex", alignItems: "center", gap: 8, marginBottom: 10
            }}>
              <div style={{
                fontSize: 10, fontWeight: 800, color: "var(--primary-text)",
                background: "var(--primary-light)", padding: "3px 10px",
                borderRadius: "var(--radius-pill)", textTransform: "uppercase",
                letterSpacing: "0.06em"
              }}>📖 With Study Guide</div>
            </div>

            {guidedTopics.map((topic, i) => {
              const guide = STUDY_GUIDES[topic]
              return (
                <button key={i} onClick={() => handleTopicClick(topic)} style={{
                  display: "flex", alignItems: "center", gap: 14,
                  width: "100%", marginBottom: 8, padding: "14px 16px",
                  borderRadius: "var(--radius-md)",
                  border: "1.5px solid var(--border)",
                  background: "var(--surface)", cursor: "pointer",
                  fontFamily: "var(--font-main)", textAlign: "left",
                  transition: "all 0.15s"
                }}>
                  <span style={{ fontSize: 24, flexShrink: 0 }}>{guide.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 800, color: "var(--text)" }}>{topic}</div>
                    <div style={{ fontSize: 11, color: "var(--text3)", marginTop: 2 }}>
                      {guide.estimatedTime} · {guide.sections.length} sections
                    </div>
                  </div>
                  <div style={{
                    fontSize: 10, fontWeight: 800, color: "var(--primary-text)",
                    background: "var(--primary-light)", padding: "3px 8px",
                    borderRadius: "var(--radius-pill)", flexShrink: 0
                  }}>Guide →</div>
                </button>
              )
            })}
          </>
        )}

        {/* Unguided topics */}
        {unguidedTopics.length > 0 && (
          <>
            <div style={{
              fontSize: 10, fontWeight: 800, color: "var(--text3)",
              textTransform: "uppercase", letterSpacing: "0.06em",
              marginTop: 16, marginBottom: 10
            }}>Practice Only</div>

            {unguidedTopics.map((topic, i) => (
              <button key={i} className="ee-topic-btn" onClick={() => handleTopicClick(topic)}>
                <span>{topic}</span>
                <span className="topic-btn-arrow">→</span>
              </button>
            ))}
          </>
        )}

        {topics.length === 0 && (
          <div className="ee-empty">
            <span className="ee-empty-icon">📭</span>
            <p>No topics available for {subject} yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default StudyMode
