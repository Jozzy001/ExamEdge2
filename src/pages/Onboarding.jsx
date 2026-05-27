import { useState } from "react"
import { useTheme } from "../context/ThemeContext"
import { UNIBEN_FACULTIES } from "../data/postutme/uniben/faculties"

const Onboarding = ({ onDone }) => {
  const { dark, toggleTheme } = useTheme()
  const [step, setStep] = useState(1) // 1=exam type, 2=faculty
  const [examType, setExamType] = useState(null)

  const handleExamType = (type) => {
    setExamType(type)
    if (type === "jamb") {
      localStorage.setItem("ee-examType", "jamb")
      localStorage.removeItem("ee-university")
      localStorage.removeItem("ee-faculty")
      onDone({ examType: "jamb", university: null, faculty: null })
    } else {
      setStep(2)
    }
  }

  const handleFaculty = (facKey) => {
    localStorage.setItem("ee-examType", "postutme")
    localStorage.setItem("ee-university", "UNIBEN")
    localStorage.setItem("ee-faculty", facKey)
    onDone({ examType: "postutme", university: "UNIBEN", faculty: facKey })
  }

  return (
    <div className="ee-page">
      <header className="ee-header">
        <span className="ee-logo">ExamEdge</span>
        <button className="ee-theme-toggle" onClick={toggleTheme}>
          {dark ? "☀️" : "🌙"}
        </button>
      </header>

      <div className="ee-content">

        {/* Step indicator */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
          {[1, 2].map((s) => {
            const isActive = step === s
            const isDone = step > s
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
                <span style={{
                  fontSize: 12, fontWeight: isActive ? 800 : 600,
                  color: isActive ? "var(--primary)" : "var(--text3)"
                }}>
                  {s === 1 ? "Exam" : "Faculty"}
                </span>
                {s < 2 && (
                  <div style={{
                    width: 20, height: 2, borderRadius: 1,
                    background: step > s ? "var(--success)" : "var(--border)"
                  }} />
                )}
              </div>
            )
          })}
        </div>

        {/* ===== STEP 1 — EXAM TYPE ===== */}
        {step === 1 && (
          <>
            <div style={{ textAlign: "center", marginBottom: 28 }}>
              <div style={{ fontSize: 48, marginBottom: 12 }}>🎓</div>
              <h2 className="ee-title">Welcome to ExamEdge</h2>
              <p className="ee-subtitle">Which exam are you preparing for?</p>
            </div>

            {[
              {
                id: "postutme",
                icon: "🏛️",
                title: "Post-UTME Screening",
                desc: "University post-UTME screening exam",
                detail: "Past questions by faculty & subject"
              },
              {
                id: "jamb",
                icon: "🇳🇬",
                title: "JAMB / UTME",
                desc: "Joint Admissions and Matriculation Board exam",
                detail: "English (60q) + up to 3 subjects (40q each)"
              },
            ].map(opt => (
              <button key={opt.id} onClick={() => handleExamType(opt.id)} style={{
                display: "flex", alignItems: "flex-start", gap: 16,
                width: "100%", marginBottom: 12, padding: "18px 20px",
                borderRadius: "var(--radius-lg)", textAlign: "left",
                fontFamily: "var(--font-main)", cursor: "pointer",
                border: "1.5px solid var(--border)",
                background: "var(--surface)", transition: "all 0.15s"
              }}>
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

        {/* ===== STEP 2 — FACULTY ===== */}
        {step === 2 && (
          <>
            <div style={{ marginBottom: 24 }}>
              <button onClick={() => setStep(1)} className="ee-back-btn" style={{ marginBottom: 16 }}>← Back</button>

              <h2 className="ee-title">Select your faculty</h2>
              <p className="ee-subtitle">This determines which subjects appear in your exam</p>
            </div>

            {Object.entries(UNIBEN_FACULTIES).map(([key, fac]) => (
              <button key={key} onClick={() => handleFaculty(key)} style={{
                display: "flex", alignItems: "flex-start", gap: 16,
                width: "100%", marginBottom: 12, padding: "16px 18px",
                borderRadius: "var(--radius-lg)", textAlign: "left",
                fontFamily: "var(--font-main)", cursor: "pointer",
                border: "1.5px solid var(--border)",
                background: "var(--surface)", transition: "all 0.15s"
              }}>
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