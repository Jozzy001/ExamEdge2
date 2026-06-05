import { useState } from "react"
import { POST_UTME_UNIVERSITIES } from "../data/postutme/index"

const HotTopics = ({ onNavigate, onBack, university, facultySubjects }) => {
  const [selectedSubject, setSelectedSubject] = useState(null)

  const questionPool = POST_UTME_UNIVERSITIES[university]?.questions || []

  // Get hot topic counts per subject
  const subjectStats = facultySubjects.map(subject => {
    const count = questionPool.filter(q =>
      q.subject === subject && q.isHotTopic === true
    ).length
    return { subject, count }
  })

  const subjectIcons = {
    "English": "📝",
    "Mathematics": "📐",
    "Physics": "⚡",
    "Chemistry": "⚗️",
    "Biology": "🧬",
    "Current Affairs": "🇳🇬"
  }

  const subjectColors = {
    "English": { bg: "#f0f7ff", border: "#4a90d9", text: "#1a5fa8" },
    "Mathematics": { bg: "#f0fff4", border: "#48bb78", text: "#276749" },
    "Physics": { bg: "#fffaf0", border: "#ed8936", text: "#9c4221" },
    "Chemistry": { bg: "#fdf5ff", border: "#9f7aea", text: "#553c9a" },
    "Biology": { bg: "#f0fff4", border: "#38a169", text: "#22543d" },
    "Current Affairs": { bg: "#fff5f5", border: "#fc8181", text: "#9b2c2c" }
  }

  // If subject selected, go straight to quiz with hot topics filter
  const handleSubjectSelect = (subject) => {
    onNavigate("hotTopicsQuiz", null, subject)
  }

  return (
    <div className="ee-page">
      <header className="ee-header">
        <button className="ee-back-btn" onClick={() => onBack ? onBack() : onNavigate("home")}>← Back</button>
        <span style={{ fontWeight: 800, fontSize: "16px" }}>🔥 Hot Topics</span>
        <span style={{ width: 60 }} />
      </header>

      <div className="ee-content">

        {/* Header card */}
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
            These questions have appeared in multiple UNIBEN Post-UTME papers.
            Master these and you're already ahead.
          </div>
        </div>

        <h2 className="ee-title">Pick a subject</h2>
        <p className="ee-subtitle">Drill hot topics subject by subject</p>

        {subjectStats.map(({ subject, count }) => {
          const colors = subjectColors[subject] || { bg: "var(--surface2)", border: "var(--border)", text: "var(--text)" }
          const icon = subjectIcons[subject] || "📖"

          return (
            <button
              key={subject}
              onClick={() => handleSubjectSelect(subject)}
              disabled={count === 0}
              style={{
                width: "100%", display: "flex", alignItems: "center",
                justifyContent: "space-between", padding: "16px 18px",
                borderRadius: "var(--radius-md)", marginBottom: 10,
                background: count > 0 ? colors.bg : "var(--surface2)",
                border: `1.5px solid ${count > 0 ? colors.border : "var(--border)"}`,
                cursor: count > 0 ? "pointer" : "not-allowed",
                opacity: count > 0 ? 1 : 0.5,
                fontFamily: "var(--font-main)", transition: "all 0.15s"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span style={{ fontSize: 26 }}>{icon}</span>
                <div style={{ textAlign: "left" }}>
                  <div style={{
                    fontWeight: 800, fontSize: 15,
                    color: count > 0 ? colors.text : "var(--text3)"
                  }}>{subject}</div>
                  <div style={{ fontSize: 12, color: "var(--text3)", marginTop: 2 }}>
                    {count > 0 ? `${count} hot topic questions` : "No hot topics yet"}
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                {count > 0 && (
                  <span style={{
                    fontSize: 11, fontWeight: 800,
                    background: "linear-gradient(135deg, #ff6b35, #f7c59f)",
                    color: "#fff", padding: "3px 10px",
                    borderRadius: "var(--radius-pill)"
                  }}>🔥 {count}</span>
                )}
                <span style={{ color: "var(--text3)", fontSize: 18 }}>→</span>
              </div>
            </button>
          )
        })}

        <div style={{
          background: "var(--surface2)", borderRadius: "var(--radius-md)",
          padding: "14px 16px", marginTop: 8,
          border: "1px solid var(--border)"
        }}>
          <p style={{ fontSize: 12, color: "var(--text2)", lineHeight: 1.7, margin: 0 }}>
            💡 <strong>Pro tip:</strong> Hot topics are questions that UNIBEN has repeated across multiple years.
            Mastering these gives you the highest chance of scoring well on exam day.
          </p>
        </div>

      </div>
    </div>
  )
}

export default HotTopics