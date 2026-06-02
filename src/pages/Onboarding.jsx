import { useState } from "react"
import { useTheme } from "../context/ThemeContext"
import { UNIBEN_FACULTIES } from "../data/postutme/uniben/faculties"

const UNIVERSITIES = [
  { id: "UNIBEN", name: "University of Benin", icon: "🏛️", location: "Benin City, Edo State" },
]

const Onboarding = ({ onDone }) => {
  const { dark, toggleTheme } = useTheme()
  const [step, setStep] = useState(1) // 1=exam type, 2=university, 3=faculty
  const [examType, setExamType] = useState(null)
  const [university, setUniversity] = useState(null)
  const [faculty, setFaculty] = useState(null)

  const handleExamType = (type) => {
    setExamType(type)
    if (type === "jamb") {
      // JAMB goes straight to app
      localStorage.setItem("ee-examType", "jamb")
      localStorage.removeItem("ee-university")
      localStorage.removeItem("ee-faculty")
      onDone({ examType: "jamb", university: null, faculty: null })
    } else {
      setStep(2)
    }
  }

  const handleUniversity = (uniId) => {
    setUniversity(uniId)
    setStep(3)
  }

  const handleFaculty = (facKey) => {
    setFaculty(facKey)
    localStorage.setItem("ee-examType", "postutme")
    localStorage.setItem("ee-university", university)
    localStorage.setItem("ee-faculty", facKey)
    onDone({ examType: "postutme", university, faculty: facKey })
  }

  const faculties = university === "UNIBEN" ? UNIBEN_FACULTIES : {}

  return (
    <div className="ee-page">
      <header className="ee-header">
        <span className="ee-logo">ExamEdgeNG</span>
        <button className="ee-theme-toggle" onClick={toggleTheme}>
          {dark ? "☀️" : "🌙"}
        </button>
      </header>

      <div className="ee-content">

        {/* Step indicator */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
          {[1, 2, 3].map((s) => {
            const isActive = step === s
            const isDone = step > s
            const isVisible = examType === "postutme" || s === 1
            if (!isVisible) return null
            return (
              <div key={s} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{
                  width: 28, height: 28, borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 800, fontSize: 13,
                  background: isDone ? "var(--success)" : isActive ? "var(--primary)" : "var(--surface2)",
                  color: isDone || isActive ? "#fff" : "var(--text3)",
                  transition: "all 0.3s"
                }}>
                  {isDone ? "✓" : s}
                </div>
                <span style={{ fontSize: 12, color: isActive ? "var(--primary)" : "var(--text3)", fontWeight: isActive ? 800 : 600 }}>
                  {s === 1 ? "Exam" : s === 2 ? "University" : "Faculty"}
                </span>
                {s < 3 && (
                  <div style={{ width: 20, height: 2, background: step > s ? "var(--success)" : "var(--border)", borderRadius: 1 }} />
                )}
              </div>
            )
          })}
        </div>

        {/* ===================== STEP 1 — EXAM TYPE ===================== */}
        {step === 1 && (
          <>
            <div style={{ textAlign: "center", marginBottom: 28 }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>🎓</div>
              <h2 className="ee-title">Welcome to ExamEdgeNG</h2>
              <p className="ee-subtitle">Which exam are you preparing for?</p>
            </div>

            {[
              {
                id: "jamb",
                icon: "🇳🇬",
                title: "JAMB / UTME",
                desc: "Joint Admissions and Matriculation Board exam",
                detail: "English (60q) + up to 3 subjects (40q each)"
              },
              {
                id: "postutme",
                icon: "🏛️",
                title: "Post-UTME",
                desc: "University post-UTME screening exam",
                detail: "University-specific past questions by faculty"
              }
            ].map(opt => (
              <button key={opt.id} onClick={() => handleExamType(opt.id)} style={{
                display: "flex", alignItems: "flex-start", gap: 16,
                width: "100%", marginBottom: 12, padding: "18px 20px",
                borderRadius: "var(--radius-lg)", textAlign: "left",
                fontFamily: "var(--font-main)", cursor: "pointer",
                border: "1.5px solid var(--border)",
                background: "var(--surface)", transition: "all 0.15s"
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "var(--primary)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
              >
                <span style={{ fontSize: 32 }}>{opt.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 16, fontWeight: 800, color: "var(--text)", marginBottom: 4 }}>{opt.title}</div>
                  <div style={{ fontSize: 13, color: "var(--text2)", marginBottom: 6 }}>{opt.desc}</div>
                  <div style={{
                    fontSize: 11, fontWeight: 700, color: "var(--primary)",
                    background: "var(--primary-light)", padding: "3px 10px",
                    borderRadius: "var(--radius-pill)", display: "inline-block"
                  }}>{opt.detail}</div>
                </div>
                <span style={{ color: "var(--text3)", fontSize: 20, marginTop: 4 }}>→</span>
              </button>
            ))}
          </>
        )}

        {/* ===================== STEP 2 — UNIVERSITY ===================== */}
        {step === 2 && (
          <>
            <div style={{ marginBottom: 24 }}>
              <button onClick={() => setStep(1)} className="ee-back-btn" style={{ marginBottom: 16 }}>← Back</button>
              <div style={{ fontSize: 36, marginBottom: 8 }}>🏛️</div>
              <h2 className="ee-title">Select your university</h2>
              <p className="ee-subtitle">Choose the university you're applying to</p>
            </div>

            {UNIVERSITIES.map(uni => (
              <button key={uni.id} onClick={() => handleUniversity(uni.id)} style={{
                display: "flex", alignItems: "center", gap: 16,
                width: "100%", marginBottom: 12, padding: "18px 20px",
                borderRadius: "var(--radius-lg)", textAlign: "left",
                fontFamily: "var(--font-main)", cursor: "pointer",
                border: "1.5px solid var(--border)",
                background: "var(--surface)", transition: "all 0.15s"
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "var(--primary)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
              >
                <span style={{ fontSize: 32 }}>{uni.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 15, fontWeight: 800, color: "var(--text)", marginBottom: 3 }}>{uni.name}</div>
                  <div style={{ fontSize: 12, color: "var(--text2)" }}>{uni.location}</div>
                </div>
                <span style={{ color: "var(--text3)", fontSize: 20 }}>→</span>
              </button>
            ))}

            <div className="ee-card" style={{ marginTop: 8 }}>
              <p style={{ fontSize: 13, color: "var(--text2)" }}>
                🚀 More universities coming soon — UNILAG, UI, OAU, ABU and more!
              </p>
            </div>
          </>
        )}

        {/* ===================== STEP 3 — FACULTY ===================== */}
        {step === 3 && (
          <>
            <div style={{ marginBottom: 24 }}>
              <button onClick={() => setStep(2)} className="ee-back-btn" style={{ marginBottom: 16 }}>← Back</button>
              <div style={{ fontSize: 36, marginBottom: 8 }}>📚</div>
              <h2 className="ee-title">Select your faculty</h2>
              <p className="ee-subtitle">This determines which subjects appear in your exam</p>
            </div>

            {Object.entries(faculties).map(([key, fac]) => (
              <button key={key} onClick={() => handleFaculty(key)} style={{
                display: "flex", alignItems: "flex-start", gap: 16,
                width: "100%", marginBottom: 12, padding: "16px 18px",
                borderRadius: "var(--radius-lg)", textAlign: "left",
                fontFamily: "var(--font-main)", cursor: "pointer",
                border: "1.5px solid var(--border)",
                background: "var(--surface)", transition: "all 0.15s"
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "var(--primary)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
              >
                <span style={{ fontSize: 28 }}>{fac.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 800, color: "var(--text)", marginBottom: 3 }}>{fac.name}</div>
                  <div style={{ fontSize: 12, color: "var(--text2)", marginBottom: 8 }}>{fac.desc}</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                    {fac.subjects.map(s => (
                      <span key={s} style={{
                        fontSize: 10, fontWeight: 700, padding: "2px 8px",
                        borderRadius: "var(--radius-pill)",
                        background: "var(--primary-light)", color: "var(--primary-text)"
                      }}>{s}</span>
                    ))}
                  </div>
                </div>
                <span style={{ color: "var(--text3)", fontSize: 20, marginTop: 4 }}>→</span>
              </button>
            ))}
          </>
        )}

      </div>
    </div>
  )
}

export default Onboarding
