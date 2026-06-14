import { useState, useEffect } from "react"
import { getGameState, setDailyGoalTarget, setExamDate, getDaysToExam, ALL_BADGES } from "../utils/gamification"

export const XPBar = ({ onNavigate }) => {
  const [state, setState] = useState(null)
  const [showDetails, setShowDetails] = useState(false)
  const [examInput, setExamInput] = useState("")
  const [timeLeft, setTimeLeft] = useState(null)

  useEffect(() => {
    setState(getGameState())
    setExamInput(localStorage.getItem("ee-examDate") || "")
  }, [])

  // Live countdown — updates every second
  useEffect(() => {
    const calcTimeLeft = () => {
      const examDate = localStorage.getItem("ee-examDate")
      if (!examDate) { setTimeLeft(null); return }
      const exam = new Date(examDate)
      exam.setHours(0, 0, 0, 0)
      const now = new Date()
      const diff = exam - now
      if (diff <= 0) {
        setTimeLeft({ done: true })
        return
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)
      setTimeLeft({ days, hours, minutes, seconds, diff })
    }
    calcTimeLeft()
    const interval = setInterval(calcTimeLeft, 1000)
    return () => clearInterval(interval)
  }, [])

  if (!state) return null

  const { xp, levelInfo, streak, badges, goal } = state
  const { current, next, progress } = levelInfo
  const goalDone = goal.done >= goal.target

  // Urgency based on days left
  const urgent = timeLeft && !timeLeft.done && timeLeft.days <= 7
  const warning = timeLeft && !timeLeft.done && timeLeft.days <= 30 && timeLeft.days > 7

  const countdownColor = !timeLeft ? "var(--text3)"
    : timeLeft.done ? "var(--primary)"
    : urgent ? "#dc2626"
    : warning ? "#d97706"
    : "var(--primary)"

  const countdownBg = !timeLeft ? "transparent"
    : timeLeft.done ? "rgba(102,126,234,0.08)"
    : urgent ? "rgba(220,38,38,0.08)"
    : warning ? "rgba(217,119,6,0.08)"
    : "rgba(102,126,234,0.08)"

  const countdownBorder = !timeLeft ? "transparent"
    : timeLeft.done ? "rgba(102,126,234,0.2)"
    : urgent ? "rgba(220,38,38,0.25)"
    : warning ? "rgba(217,119,6,0.25)"
    : "rgba(102,126,234,0.2)"

  const countdownIcon = !timeLeft ? "📅"
    : timeLeft.done ? "🎓"
    : urgent ? "⚡"
    : warning ? "⏳"
    : "📅"

  return (
    <>
      {/* Main XP strip */}
      <div
        onClick={() => setShowDetails(true)}
        style={{
          background: "var(--surface)", border: "1px solid var(--border)",
          borderRadius: "var(--radius-lg)", padding: "12px 16px",
          marginBottom: 12, cursor: "pointer", transition: "all 0.15s"
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
            {streak > 0 && (
              <div style={{
                display: "flex", alignItems: "center", gap: 4,
                background: streak >= 7 ? "rgba(255,107,53,0.12)" : "var(--surface2)",
                padding: "4px 8px", borderRadius: "var(--radius-pill)",
                border: streak >= 7 ? "1px solid rgba(255,107,53,0.3)" : "1px solid var(--border)"
              }}>
                <span style={{ fontSize: 13 }}>🔥</span>
                <span style={{ fontSize: 12, fontWeight: 800, color: streak >= 7 ? "#e05a00" : "var(--text)" }}>{streak}</span>
              </div>
            )}
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
          <div style={{ height: 6, background: "var(--surface3)", borderRadius: 3, overflow: "hidden" }}>
            <div style={{
              height: "100%", width: `${progress}%`,
              background: "linear-gradient(90deg, var(--primary), var(--primary-dark, var(--primary)))",
              borderRadius: 3, transition: "width 0.5s ease"
            }} />
          </div>
        )}

        {/* Live countdown */}
        {timeLeft && (
          <div style={{
            marginTop: 10,
            background: countdownBg,
            border: `1px solid ${countdownBorder}`,
            borderRadius: "var(--radius-md)",
            padding: "10px 14px",
          }}>
            {timeLeft.done ? (
              <div style={{ textAlign: "center", fontSize: 14, fontWeight: 800, color: countdownColor }}>
                🎓 Post-UTME day! Good luck!
              </div>
            ) : (
              <>
                {/* Label */}
                <div style={{
                  fontSize: 10, fontWeight: 800, color: countdownColor,
                  textTransform: "uppercase", letterSpacing: "0.08em",
                  textAlign: "center", marginBottom: 8, opacity: 0.8,
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 6
                }}>
                  <span>{countdownIcon}</span>
                  <span>Time to Post-UTME</span>
                  {/* Live dot */}
                  <span style={{
                    width: 6, height: 6, borderRadius: "50%",
                    background: countdownColor, display: "inline-block",
                    animation: "pulse-dot 1s infinite"
                  }} />
                </div>

                {/* D : H : M : S blocks */}
                <div style={{
                  display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr",
                  gap: 6, textAlign: "center"
                }}>
                  {[
                    { value: timeLeft.days, label: "Days" },
                    { value: timeLeft.hours, label: "Hours" },
                    { value: timeLeft.minutes, label: "Mins" },
                    { value: timeLeft.seconds, label: "Secs" },
                  ].map(({ value, label }) => (
                    <div key={label} style={{
                      background: "var(--bg)",
                      border: `1.5px solid ${countdownBorder}`,
                      borderRadius: "var(--radius-md)",
                      padding: "6px 4px"
                    }}>
                      <div style={{
                        fontSize: 22, fontWeight: 900,
                        color: countdownColor, lineHeight: 1,
                        fontVariantNumeric: "tabular-nums"
                      }}>
                        {String(value).padStart(2, "0")}
                      </div>
                      <div style={{
                        fontSize: 9, fontWeight: 700,
                        color: countdownColor, opacity: 0.7,
                        textTransform: "uppercase", letterSpacing: "0.05em",
                        marginTop: 2
                      }}>
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {/* CSS for live dot pulse */}
      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(0.7); }
        }
      `}</style>

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

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 20 }}>
              {[
                { icon: "🔥", label: "Streak", value: `${streak} day${streak !== 1 ? "s" : ""}` },
                { icon: "🏆", label: "Badges", value: `${badges.length}/${12}` },
                { icon: "🎯", label: "Today", value: `${goal.done}/${goal.target}` },
              ].map((stat, i) => (
                <div key={i} style={{
                  background: "var(--surface2)", borderRadius: "var(--radius-md)",
                  padding: "12px 8px", textAlign: "center", border: "1px solid var(--border)"
                }}>
                  <div style={{ fontSize: 20, marginBottom: 4 }}>{stat.icon}</div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "var(--text)" }}>{stat.value}</div>
                  <div style={{ fontSize: 10, color: "var(--text3)" }}>{stat.label}</div>
                </div>
              ))}
            </div>

            <div style={{
              background: "rgba(102,126,234,0.08)", border: "1px solid rgba(102,126,234,0.2)",
              borderRadius: "var(--radius-md)", padding: "10px 14px", marginBottom: 16,
              fontSize: 12, color: "var(--text2)", lineHeight: 1.6
            }}>
              📋 <strong style={{ color: "var(--primary)" }}>UNIBEN Post-UTME 2026</strong> holds from{" "}
              <strong>July 27 – August 1, 2026</strong>. Your countdown is set automatically.
              You can change it below if needed.
            </div>

            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: "var(--text3)", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 8 }}>
                Daily Goal
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 8 }}>
                {[10, 20, 30, 50].map(t => (
                  <button key={t} onClick={() => { setDailyGoalTarget(t); setState(getGameState()) }} style={{
                    padding: "10px", borderRadius: "var(--radius-md)",
                    border: goal.target === t ? "2px solid var(--primary)" : "1px solid var(--border)",
                    background: goal.target === t ? "var(--primary-light)" : "var(--surface)",
                    color: goal.target === t ? "var(--primary-text)" : "var(--text)",
                    fontWeight: 800, fontSize: 13, cursor: "pointer", fontFamily: "var(--font-main)"
                  }}>{t}q</button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: "var(--text3)", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 8 }}>
                📅 Exam Date
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <input type="date" value={examInput} onChange={e => setExamInput(e.target.value)}
                  style={{
                    flex: 1, padding: "10px 12px", borderRadius: "var(--radius-md)",
                    border: "1px solid var(--border)", background: "var(--surface)",
                    color: "var(--text)", fontSize: 13, fontFamily: "var(--font-main)"
                  }}
                />
                <button onClick={() => { setExamDate(examInput); setState(getGameState()); setShowDetails(false) }}
                  style={{
                    padding: "10px 16px", borderRadius: "var(--radius-md)",
                    background: "var(--primary)", color: "#fff",
                    border: "none", fontWeight: 800, fontSize: 13,
                    cursor: "pointer", fontFamily: "var(--font-main)"
                  }}>Set</button>
              </div>
            </div>

            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 12, fontWeight: 800, color: "var(--text3)", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: 8 }}>
                Badges
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
                {badges.length === 0 && (
                  <div style={{ gridColumn: "span 3", textAlign: "center", color: "var(--text3)", fontSize: 13, padding: "16px 0" }}>
                    No badges yet — complete quizzes to earn them!
                  </div>
                )}
                {Array.from({ length: 12 }).map((_, i) => {
                  const BADGE_IDS = ["first_quiz","perfect_score","streak_3","streak_7","streak_30","century","hot_streak","night_owl","early_bird","level_5","top_scorer","dedicated"]
                  const badge = ALL_BADGES.find(b => b.id === BADGE_IDS[i])
                  if (!badge) return null
                  const earned = badges.includes(badge.id)
                  return (
                    <div key={badge.id} style={{
                      background: earned ? "var(--primary-light)" : "var(--surface2)",
                      border: earned ? "1.5px solid var(--primary)" : "1px solid var(--border)",
                      borderRadius: "var(--radius-md)", padding: "10px 8px", textAlign: "center",
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

            <button onClick={() => setShowDetails(false)} className="ee-btn ee-btn-secondary">Close</button>
          </div>
        </div>
      )}
    </>
  )
}

export default XPBar