import { useState, useEffect } from "react"
import { getGameState, setDailyGoalTarget, setExamDate, getDaysToExam, ALL_BADGES } from "../utils/gamification"

// =============================================
// XP BAR — compact strip for home screen
// =============================================
export const XPBar = ({ onNavigate }) => {
  const [state, setState] = useState(null)
  const [showDetails, setShowDetails] = useState(false)
  const [examInput, setExamInput] = useState("")
  const [goalInput, setGoalInput] = useState(null)

  useEffect(() => {
    setState(getGameState())
    setExamInput(localStorage.getItem("ee-examDate") || "")
  }, [])

  if (!state) return null

  const { xp, levelInfo, streak, badges, goal } = state
  const { current, next, progress } = levelInfo
  const daysToExam = getDaysToExam()
  const goalPct = Math.min(100, Math.round((goal.done / goal.target) * 100))
  const goalDone = goal.done >= goal.target

  return (
    <>
      {/* Main XP strip */}
      <div
        onClick={() => setShowDetails(true)}
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-lg)",
          padding: "12px 16px",
          marginBottom: 12,
          cursor: "pointer",
          transition: "all 0.15s"
        }}
      >
        {/* Top row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 22 }}>{current.emoji}</span>
            <div>
              <div style={{ fontSize: 13, fontWeight: 800, color: "var(--text)" }}>
                {current.title}
                <span style={{ fontSize: 10, color: "var(--text3)", marginLeft: 6 }}>Lv.{current.level}</span>
              </div>
              <div style={{ fontSize: 11, color: "var(--text3)" }}>
                {next ? `${xp} / ${next.xp} XP` : `${xp} XP — MAX LEVEL`}
              </div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {/* Streak */}
            {streak > 0 && (
              <div style={{
                display: "flex", alignItems: "center", gap: 4,
                background: streak >= 7 ? "rgba(255,107,53,0.12)" : "var(--surface2)",
                padding: "4px 8px", borderRadius: "var(--radius-pill)",
                border: streak >= 7 ? "1px solid rgba(255,107,53,0.3)" : "1px solid var(--border)"
              }}>
                <span style={{ fontSize: 13 }}>🔥</span>
                <span style={{ fontSize: 12, fontWeight: 800, color: streak >= 7 ? "#e05a00" : "var(--text)" }}>
                  {streak}
                </span>
              </div>
            )}

            {/* Daily goal */}
            <div style={{
              display: "flex", alignItems: "center", gap: 4,
              background: goalDone ? "rgba(34,201,122,0.1)" : "var(--surface2)",
              padding: "4px 8px", borderRadius: "var(--radius-pill)",
              border: goalDone ? "1px solid rgba(34,201,122,0.3)" : "1px solid var(--border)"
            }}>
              <span style={{ fontSize: 12 }}>{goalDone ? "✅" : "🎯"}</span>
              <span style={{ fontSize: 11, fontWeight: 700, color: goalDone ? "var(--success)" : "var(--text2)" }}>
                {goal.done}/{goal.target}
              </span>
            </div>
          </div>
        </div>

        {/* XP progress bar */}
        {next && (
          <div style={{
            height: 6, background: "var(--surface3)",
            borderRadius: 3, overflow: "hidden"
          }}>
            <div style={{
              height: "100%", width: `${progress}%`,
              background: "linear-gradient(90deg, var(--primary), var(--primary-dark, var(--primary)))",
              borderRadius: 3, transition: "width 0.5s ease"
            }} />
          </div>
        )}

        {/* Exam countdown */}
        {daysToExam !== null && (
          <div style={{
            marginTop: 8, textAlign: "center",
            fontSize: 11, fontWeight: 700,
            color: daysToExam <= 7 ? "var(--accent)" : "var(--text3)"
          }}>
            {daysToExam === 0 ? "🎓 Exam day!" : `📅 ${daysToExam} day${daysToExam !== 1 ? "s" : ""} to exam`}
          </div>
        )}
      </div>

      {/* Details modal */}
      {showDetails && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 200,
          background: "rgba(0,0,0,0.5)",
          display: "flex", alignItems: "flex-end"
        }} onClick={() => setShowDetails(false)}>
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: "var(--bg)", borderRadius: "var(--radius-xl) var(--radius-xl) 0 0",
              padding: "20px 20px 32px", width: "100%",
              maxHeight: "85vh", overflowY: "auto"
            }}
          >
            <div style={{ textAlign: "center", marginBottom: 16 }}>
              <div style={{ fontSize: 48, marginBottom: 4 }}>{current.emoji}</div>
              <div style={{ fontWeight: 800, fontSize: 18, color: "var(--text)" }}>{current.title}</div>
              <div style={{ fontSize: 13, color: "var(--text2)" }}>Level {current.level} · {xp} XP total</div>
            </div>

            {/* XP Progress */}
            {next && (
              <div style={{ marginBottom: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--text3)", marginBottom: 6 }}>
                  <span>Progress to {next.emoji} {next.title}</span>
                  <span>{progress}%</span>
                </div>
                <div style={{ height: 10, background: "var(--surface3)", borderRadius: 5, overflow: "hidden" }}>
                  <div style={{
                    height: "100%", width: `${progress}%`,
                    background: "linear-gradient(90deg, var(--primary), var(--primary-dark, var(--primary)))",
                    borderRadius: 5, transition: "width 0.5s"
                  }} />
                </div>
              </div>
            )}

            {/* Stats row */}
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
              gap: 8, marginBottom: 20
            }}>
              {[
                { icon: "🔥", label: "Streak", value: `${streak} day${streak !== 1 ? "s" : ""}` },
                { icon: "🏆", label: "Badges", value: `${badges.length}/${12}` },
                { icon: "🎯", label: "Today", value: `${goal.done}/${goal.target}` },
              ].map((stat, i) => (
                <div key={i} style={{
                  background: "var(--surface2)", borderRadius: "var(--radius-md)",
                  padding: "12px 8px", textAlign: "center",
                  border: "1px solid var(--border)"
                }}>
                  <div style={{ fontSize: 20, marginBottom: 4 }}>{stat.icon}</div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "var(--text)" }}>{stat.value}</div>
                  <div style={{ fontSize: 10, color: "var(--text3)" }}>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Daily goal target */}
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: "var(--text3)", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 8 }}>
                Daily Goal
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 8 }}>
                {[10, 20, 30, 50].map(t => (
                  <button
                    key={t}
                    onClick={() => {
                      setDailyGoalTarget(t)
                      setState(getGameState())
                    }}
                    style={{
                      padding: "10px", borderRadius: "var(--radius-md)",
                      border: goal.target === t ? "2px solid var(--primary)" : "1px solid var(--border)",
                      background: goal.target === t ? "var(--primary-light)" : "var(--surface)",
                      color: goal.target === t ? "var(--primary-text)" : "var(--text)",
                      fontWeight: 800, fontSize: 13, cursor: "pointer",
                      fontFamily: "var(--font-main)"
                    }}
                  >{t}q</button>
                ))}
              </div>
            </div>

            {/* Exam date */}
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: "var(--text3)", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 8 }}>
                📅 Exam Date
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <input
                  type="date"
                  value={examInput}
                  onChange={e => setExamInput(e.target.value)}
                  style={{
                    flex: 1, padding: "10px 12px", borderRadius: "var(--radius-md)",
                    border: "1px solid var(--border)", background: "var(--surface)",
                    color: "var(--text)", fontSize: 13, fontFamily: "var(--font-main)"
                  }}
                />
                <button
                  onClick={() => {
                    setExamDate(examInput)
                    setState(getGameState())
                    setShowDetails(false)
                  }}
                  style={{
                    padding: "10px 16px", borderRadius: "var(--radius-md)",
                    background: "var(--primary)", color: "#fff",
                    border: "none", fontWeight: 800, fontSize: 13,
                    cursor: "pointer", fontFamily: "var(--font-main)"
                  }}
                >Set</button>
              </div>
            </div>

            {/* Badges */}
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: "var(--text3)", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 8 }}>
                Badges
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
                {(badges.length > 0 ? badges : []).length === 0
                  ? <div style={{ gridColumn: "span 3", textAlign: "center", color: "var(--text3)", fontSize: 13, padding: "16px 0" }}>
                      No badges yet — complete quizzes to earn them!
                    </div>
                  : null
                }
                {/* All badges — earned + locked */}
                {Array.from({ length: 12 }).map((_, i) => {
                  const BADGE_IDS = ["first_quiz","perfect_score","streak_3","streak_7","streak_30","century","hot_streak","night_owl","early_bird","level_5","top_scorer","dedicated"]
                  const badge = ALL_BADGES.find(b => b.id === BADGE_IDS[i])
                  if (!badge) return null
                  const earned = badges.includes(badge.id)
                  return (
                    <div key={badge.id} style={{
                      background: earned ? "var(--primary-light)" : "var(--surface2)",
                      border: earned ? "1.5px solid var(--primary)" : "1px solid var(--border)",
                      borderRadius: "var(--radius-md)",
                      padding: "10px 8px", textAlign: "center",
                      opacity: earned ? 1 : 0.4
                    }}>
                      <div style={{ fontSize: 24, marginBottom: 4 }}>{badge.emoji}</div>
                      <div style={{ fontSize: 10, fontWeight: 800, color: "var(--text)", lineHeight: 1.3 }}>{badge.title}</div>
                      <div style={{ fontSize: 9, color: "var(--text3)", marginTop: 2, lineHeight: 1.3 }}>{badge.desc}</div>
                    </div>
                  )
                })}
              </div>
            </div>

            <button
              onClick={() => setShowDetails(false)}
              className="ee-btn ee-btn-secondary"
            >Close</button>
          </div>
        </div>
      )}
    </>
  )
}

export default XPBar
