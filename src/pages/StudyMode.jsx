import { useState } from "react"
import questions from "../data/jamb/questions"
import { POST_UTME_UNIVERSITIES } from "../data/postutme/index"
import STUDY_GUIDES from "../data/studyGuides"
import PageTour, { TOURS } from "../components/PageTour"
import AntonymsVault from "../components/AntonymsVault"
import IdiomsVault from "../components/IdiomsVault"
import SynonymsVault from "../components/SynonymsVault"
import VocabularyVault from "../components/VocabularyVault"
import EnglishSkillsVault from "../components/EnglishSkillsVault"
import MathsVault from "../components/MathsVault"

const StudyMode = ({ subject, onNavigate, onBack, university = null, isPaid }) => {
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [showVault, setShowVault] = useState(false)
  const [showIdiomsVault, setShowIdiomsVault] = useState(false)
  const [showSynonymsVault, setShowSynonymsVault] = useState(false)
  const [showVocabVault, setShowVocabVault] = useState(false)
  const [skillsVaultTab, setSkillsVaultTab] = useState(null)
  const [mathsVaultTab, setMathsVaultTab] = useState(null)

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
        {showVault && (
          <AntonymsVault
            isPaid={isPaid}
            onClose={() => setShowVault(false)}
            onUpgrade={() => { setShowVault(false); onNavigate("upgrade") }}
          />
        )}
        {showIdiomsVault && (
          <IdiomsVault
            isPaid={isPaid}
            onClose={() => setShowIdiomsVault(false)}
            onUpgrade={() => { setShowIdiomsVault(false); onNavigate("upgrade") }}
          />
        )}
        {mathsVaultTab && (
          <MathsVault
            isPaid={isPaid}
            initialTab={mathsVaultTab}
            onClose={() => setMathsVaultTab(null)}
            onUpgrade={() => { setMathsVaultTab(null); onNavigate("upgrade") }}
          />
        )}
        {skillsVaultTab && (
          <EnglishSkillsVault
            isPaid={isPaid}
            initialTab={skillsVaultTab}
            onClose={() => setSkillsVaultTab(null)}
            onUpgrade={() => { setSkillsVaultTab(null); onNavigate("upgrade") }}
          />
        )}
        {showVocabVault && (
          <VocabularyVault
            isPaid={isPaid}
            onClose={() => setShowVocabVault(false)}
            onUpgrade={() => { setShowVocabVault(false); onNavigate("upgrade") }}
          />
        )}
        {showSynonymsVault && (
          <SynonymsVault
            isPaid={isPaid}
            onClose={() => setShowSynonymsVault(false)}
            onUpgrade={() => { setShowSynonymsVault(false); onNavigate("upgrade") }}
          />
        )}
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
                {section.type === "warning" && (
                  <div style={{
                    background: "rgba(255,107,107,0.08)", borderRadius: "var(--radius-md)",
                    padding: "14px 16px", border: "1px solid rgba(255,107,107,0.25)"
                  }}>
                    <div style={{ fontSize: 11, fontWeight: 800, color: "#dc2626", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 10 }}>
                      ⚠️ Trap Answers to Avoid
                    </div>
                    {section.items?.map((item, j) => (
                      <div key={j} style={{ display: "flex", gap: 8, marginBottom: j < section.items.length - 1 ? 8 : 0 }}>
                        <span style={{ color: "#dc2626", fontSize: 14, flexShrink: 0 }}>✗</span>
                        <p style={{ fontSize: 13, color: "var(--text)", lineHeight: 1.6, margin: 0 }}>{item}</p>
                      </div>
                    ))}
                  </div>
                )}
                {section.type === "antonyms_vault" && (
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ fontSize: 13, color: "var(--text2)", marginBottom: 10, lineHeight: 1.6 }}>
                      {section.content}
                    </div>
                    <button
                      onClick={() => setShowVault(true)}
                      style={{
                        width: "100%", padding: "14px",
                        background: "linear-gradient(135deg, #667eea, #764ba2)",
                        color: "#fff", border: "none",
                        borderRadius: "var(--radius-lg)",
                        fontSize: 14, fontWeight: 800,
                        cursor: "pointer", fontFamily: "var(--font-main)",
                        display: "flex", alignItems: "center", justifyContent: "center", gap: 8
                      }}
                    >
                      📖 View All 99 Tested Antonyms
                      {!isPaid && <span style={{ fontSize: 12, opacity: 0.85 }}>🔒</span>}
                    </button>
                  </div>
                )}

                {section.type === "maths_vault" && (
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ fontSize: 13, color: "var(--text2)", marginBottom: 10, lineHeight: 1.6 }}>
                      {section.content}
                    </div>
                    <button
                      onClick={() => setMathsVaultTab(section.tab || "algebra")}
                      style={{
                        width: "100%", padding: "14px",
                        background: "linear-gradient(135deg, #7c3aed, #059669)",
                        color: "#fff", border: "none",
                        borderRadius: "var(--radius-lg)",
                        fontSize: 14, fontWeight: 800,
                        cursor: "pointer", fontFamily: "var(--font-main)",
                        display: "flex", alignItems: "center", justifyContent: "center", gap: 8
                      }}
                    >
                      🧮 Open Maths Formula Vault
                      {!isPaid && <span style={{ fontSize: 12, opacity: 0.85 }}>🔒</span>}
                    </button>
                  </div>
                )}

                {section.type === "english_skills_vault" && (
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ fontSize: 13, color: "var(--text2)", marginBottom: 10, lineHeight: 1.6 }}>
                      {section.content}
                    </div>
                    <button
                      onClick={() => setSkillsVaultTab(section.tab || "sentences")}
                      style={{
                        width: "100%", padding: "14px",
                        background: "linear-gradient(135deg, #1d4ed8, #7c3aed)",
                        color: "#fff", border: "none",
                        borderRadius: "var(--radius-lg)",
                        fontSize: 14, fontWeight: 800,
                        cursor: "pointer", fontFamily: "var(--font-main)",
                        display: "flex", alignItems: "center", justifyContent: "center", gap: 8
                      }}
                    >
                      🎯 Open Skills Vault
                      {!isPaid && <span style={{ fontSize: 12, opacity: 0.85 }}>🔒</span>}
                    </button>
                  </div>
                )}

                {section.type === "vocab_vault" && (
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ fontSize: 13, color: "var(--text2)", marginBottom: 10, lineHeight: 1.6 }}>
                      {section.content}
                    </div>
                    <button
                      onClick={() => setShowVocabVault(true)}
                      style={{
                        width: "100%", padding: "14px",
                        background: "linear-gradient(135deg, #10b981, #059669)",
                        color: "#fff", border: "none",
                        borderRadius: "var(--radius-lg)",
                        fontSize: 14, fontWeight: 800,
                        cursor: "pointer", fontFamily: "var(--font-main)",
                        display: "flex", alignItems: "center", justifyContent: "center", gap: 8
                      }}
                    >
                      📖 View All UNIBEN-Tested Vocabulary
                      {!isPaid && <span style={{ fontSize: 12, opacity: 0.85 }}>🔒</span>}
                    </button>
                  </div>
                )}

                {section.type === "synonyms_vault" && (
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ fontSize: 13, color: "var(--text2)", marginBottom: 10, lineHeight: 1.6 }}>
                      {section.content}
                    </div>
                    <button
                      onClick={() => setShowSynonymsVault(true)}
                      style={{
                        width: "100%", padding: "14px",
                        background: "linear-gradient(135deg, #667eea, #4f46e5)",
                        color: "#fff", border: "none",
                        borderRadius: "var(--radius-lg)",
                        fontSize: 14, fontWeight: 800,
                        cursor: "pointer", fontFamily: "var(--font-main)",
                        display: "flex", alignItems: "center", justifyContent: "center", gap: 8
                      }}
                    >
                      📝 View All UNIBEN-Tested Synonyms
                      {!isPaid && <span style={{ fontSize: 12, opacity: 0.85 }}>🔒</span>}
                    </button>
                  </div>
                )}

                {section.type === "idioms_vault" && (
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ fontSize: 13, color: "var(--text2)", marginBottom: 10, lineHeight: 1.6 }}>
                      {section.content}
                    </div>
                    <button
                      onClick={() => setShowIdiomsVault(true)}
                      style={{
                        width: "100%", padding: "14px",
                        background: "linear-gradient(135deg, #f59e0b, #d97706)",
                        color: "#fff", border: "none",
                        borderRadius: "var(--radius-lg)",
                        fontSize: 14, fontWeight: 800,
                        cursor: "pointer", fontFamily: "var(--font-main)",
                        display: "flex", alignItems: "center", justifyContent: "center", gap: 8
                      }}
                    >
                      💬 View All UNIBEN-Tested Idioms
                      {!isPaid && <span style={{ fontSize: 12, opacity: 0.85 }}>🔒</span>}
                    </button>
                  </div>
                )}

                {(section.type === "quicktip" || section.type === "tip") && (
                  <div style={{
                    background: "rgba(34,197,94,0.08)", borderRadius: "var(--radius-md)",
                    padding: "14px 16px", border: "1px solid rgba(34,197,94,0.25)"
                  }}>
                    <div style={{ fontSize: 11, fontWeight: 800, color: "#16a34a", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 6 }}>
                      💡 Quick Tip
                    </div>
                    <p style={{ fontSize: 13, color: "var(--text)", lineHeight: 1.6, margin: 0 }}>{section.content}</p>
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

          {/* Smart tip for new-format guides that have no tip section */}
          {!guide.sections && (
            <div style={{
              background: "rgba(34,197,94,0.08)", borderRadius: "var(--radius-md)",
              padding: "14px 16px", border: "1px solid rgba(34,197,94,0.25)",
              marginBottom: 16
            }}>
              <div style={{ fontSize: 11, fontWeight: 800, color: "#16a34a", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 6 }}>
                💡 Quick Tip
              </div>
              <p style={{ fontSize: 13, color: "var(--text)", lineHeight: 1.6, margin: 0 }}>
                {guide.tip || (
                  subject === "Mathematics" ? "Always show your working — partial marks are awarded in some exams even if the final answer is wrong. Practice speed by timing yourself on past questions." :
                  subject === "Physics" ? "Learn the key formulas by heart. In the exam, identify what you're given and what you need to find, then pick the right formula." :
                  subject === "Chemistry" ? "Pay attention to units and balance equations before calculating. Many marks are lost to careless arithmetic, not lack of knowledge." :
                  subject === "Biology" ? "Use diagrams to remember processes like the nitrogen cycle and cell division. Drawing it out helps more than reading it." :
                  subject === "English" ? "For comprehension, always find the answer in the passage. Never use outside knowledge — the passage is your only source." :
                  "Focus on understanding the concept, not just memorising. If you understand WHY something works, you can answer any variation of the question."
                )}
              </p>
            </div>
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
      {showVault && (
        <AntonymsVault
          isPaid={isPaid}
          onClose={() => setShowVault(false)}
          onUpgrade={() => { setShowVault(false); onNavigate("upgrade") }}
        />
      )}
      <PageTour tourKey="study" steps={TOURS.study} />
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