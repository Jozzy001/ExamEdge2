import { useState, useEffect } from "react"
import { getLeaderboard, getUserRank } from "../utils/leaderboard"

const quizLabel = (n) => `${n || 0} quiz${n === 1 ? "" : "zes"}`
const fmt = (n) => `${Math.round((n || 0) * 10) / 10}%` // 85 or 85.3, never 85.0

// authUser: needed for "Your Rank" and the (You) highlight. faculty: needed for the Faculty tab.
// Pass both from App.jsx, e.g. <Leaderboard authUser={authUser} faculty={faculty} ... />
const Leaderboard = ({ onNavigate, onBack, university, faculty, isPaid, authUser }) => {
  const [leaderboard, setLeaderboard] = useState([])
  const [userRank, setUserRank] = useState(null)
  const [view, setView] = useState("global") // global, faculty
  // JAMB students have no faculty, so the Faculty tab only appears when there is one
  const tabs = faculty ? ["global", "faculty"] : ["global"]
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    // `cancelled` stops a slow response from an old tab overwriting the tab you're on now
    let cancelled = false
    const load = async () => {
      setLoading(true)
      setError("")
      try {
        const [board, rank] = await Promise.all([
          getLeaderboard(view, faculty, university),
          authUser?.uid ? getUserRank(authUser.uid, view, faculty, university) : Promise.resolve(null),
        ])
        if (!cancelled) { setLeaderboard(board || []); setUserRank(rank) }
      } catch (e) {
        console.error("Leaderboard load failed", e)
        if (!cancelled) { setLeaderboard([]); setError("Couldn't load the leaderboard. Check your connection and try again.") }
      }
      if (!cancelled) setLoading(false)
    }
    load()
    return () => { cancelled = true }
  }, [view, faculty, university, authUser?.uid])

  const getAvatarColor = (rank) => {
    if (rank === 1) return "#fbbf24" // Gold
    if (rank === 2) return "#a78bfa" // Silver
    if (rank === 3) return "#f97316" // Bronze
    return "var(--surface3, #cbd5e1)"
  }

  const isMe = (user) => !!authUser?.uid && user?.userId === authUser.uid

  // With fewer than 3 students there is no podium, so everyone goes in the list
  const hasPodium = leaderboard.length >= 3
  const listUsers = hasPodium ? leaderboard.slice(3) : leaderboard
  const listStartRank = hasPodium ? 4 : 1

  return (
    <div className="ee-page">
      <header className="ee-header">
        <button className="ee-back-btn" onClick={onBack}>← Back</button>
        <span style={{ fontWeight: 800, fontSize: 15 }}>🏆 Leaderboard</span>
        <span style={{ width: 60 }} />
      </header>

      <div className="ee-content">
        {/* Tabs */}
        <div style={{
          display: "flex",
          gap: 8,
          marginBottom: 16,
          borderBottom: "1px solid var(--border)",
          paddingBottom: 12
        }}>
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setView(tab)}
              style={{
                padding: "8px 16px",
                borderRadius: "var(--radius-pill)",
                border: view === tab ? "2px solid var(--primary)" : "1px solid var(--border)",
                background: view === tab ? "var(--primary-light)" : "transparent",
                color: view === tab ? "var(--primary)" : "var(--text2)",
                fontWeight: 700,
                fontSize: 13,
                cursor: "pointer",
                textTransform: "capitalize"
              }}
            >
              {tab === "global" ? "🌍 Global" : "🏫 Faculty"}
            </button>
          ))}
        </div>

        {loading ? (
          <div style={{ textAlign: "center", padding: "40px 20px", color: "var(--text3)" }}>
            Loading leaderboard...
          </div>
        ) : error ? (
          <div style={{ textAlign: "center", padding: "40px 20px" }}>
            <div style={{ color: "#dc2626", fontSize: 13, fontWeight: 600 }}>{error}</div>
          </div>
        ) : leaderboard.length === 0 ? (
          <div style={{ textAlign: "center", padding: "40px 20px" }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>📈</div>
            <div style={{ color: "var(--text3)" }}>
              No scores yet. Complete a quiz to appear on the leaderboard!
            </div>
          </div>
        ) : (
          <>
            {/* Top 3 Podium */}
            {hasPodium && (
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 12,
                marginBottom: 20,
                paddingBottom: 20,
                borderBottom: "2px solid var(--border)"
              }}>
                {/* 2nd Place */}
                <div style={{
                  background: "var(--surface)",
                  borderRadius: "var(--radius-lg)",
                  padding: 16,
                  textAlign: "center",
                  order: 1,
                  opacity: 0.9,
                  border: isMe(leaderboard[1]) ? "2px solid var(--primary)" : "none"
                }}>
                  <div style={{ fontSize: 40, marginBottom: 8 }}>🥈</div>
                  <div style={{ fontSize: 13, fontWeight: 800, marginBottom: 4 }}>
                    {leaderboard[1]?.name}{isMe(leaderboard[1]) && " (You)"}
                  </div>
                  <div style={{ fontSize: 20, fontWeight: 800, color: "#a78bfa", marginBottom: 4 }}>
                    {fmt(leaderboard[1]?.score)}
                  </div>
                  <div style={{ fontSize: 11, color: "var(--text3)" }}>
                    {quizLabel(leaderboard[1]?.totalQuizzes)}
                  </div>
                </div>

                {/* 1st Place */}
                <div style={{
                  background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
                  borderRadius: "var(--radius-lg)",
                  padding: 20,
                  textAlign: "center",
                  order: 0,
                  transform: "scale(1.05)",
                  outline: isMe(leaderboard[0]) ? "3px solid var(--primary)" : "none"
                }}>
                  <div style={{ fontSize: 48, marginBottom: 8 }}>👑</div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: "#fff", marginBottom: 4 }}>
                    {leaderboard[0]?.name}{isMe(leaderboard[0]) && " (You)"}
                  </div>
                  <div style={{ fontSize: 28, fontWeight: 900, color: "#fff", marginBottom: 6 }}>
                    {fmt(leaderboard[0]?.score)}
                  </div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.9)" }}>
                    {quizLabel(leaderboard[0]?.totalQuizzes)}
                  </div>
                </div>

                {/* 3rd Place */}
                <div style={{
                  background: "var(--surface)",
                  borderRadius: "var(--radius-lg)",
                  padding: 16,
                  textAlign: "center",
                  order: 2,
                  opacity: 0.9,
                  border: isMe(leaderboard[2]) ? "2px solid var(--primary)" : "none"
                }}>
                  <div style={{ fontSize: 40, marginBottom: 8 }}>🥉</div>
                  <div style={{ fontSize: 13, fontWeight: 800, marginBottom: 4 }}>
                    {leaderboard[2]?.name}{isMe(leaderboard[2]) && " (You)"}
                  </div>
                  <div style={{ fontSize: 20, fontWeight: 800, color: "#f97316", marginBottom: 4 }}>
                    {fmt(leaderboard[2]?.score)}
                  </div>
                  <div style={{ fontSize: 11, color: "var(--text3)" }}>
                    {quizLabel(leaderboard[2]?.totalQuizzes)}
                  </div>
                </div>
              </div>
            )}

            {/* Leaderboard Table */}
            <div>
              {listUsers.map((user, index) => {
                const rank = index + listStartRank
                return (
                  <div
                    key={user.userId}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "14px 16px",
                      borderBottom: "1px solid var(--border)",
                      background: isMe(user) ? "var(--primary-light)" : "var(--surface)"
                    }}
                  >
                    {/* Rank */}
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        flexShrink: 0,
                        borderRadius: "50%",
                        background: getAvatarColor(rank),
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 800,
                        color: rank <= 3 ? "#fff" : "var(--text)",
                        fontSize: 14
                      }}
                    >
                      {rank}
                    </div>

                    {/* User Info */}
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 14, fontWeight: 800, color: "var(--text)" }}>
                        {user.name}{isMe(user) && <span style={{ color: "var(--primary)" }}> (You)</span>}
                      </div>
                      <div style={{ fontSize: 11, color: "var(--text3)" }}>
                        {quizLabel(user.totalQuizzes)}
                      </div>
                    </div>

                    {/* Score */}
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: 16, fontWeight: 800, color: "var(--primary)" }}>
                        {fmt(user.score)}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Your Rank */}
            {userRank && (
              <div
                style={{
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  borderRadius: "var(--radius-lg)",
                  padding: 20,
                  marginTop: 20,
                  color: "#fff",
                  textAlign: "center"
                }}
              >
                <div style={{ fontSize: 13, opacity: 0.9, marginBottom: 4 }}>YOUR RANK</div>
                <div style={{ fontSize: 28, fontWeight: 900, marginBottom: 4 }}>
                  #{userRank.rank} out of {userRank.totalRanked}
                </div>
                <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 2 }}>
                  {fmt(userRank.score)} • {userRank.percentile}th percentile
                </div>
                <div style={{ fontSize: 12, opacity: 0.85 }}>
                  {userRank.totalRanked - userRank.rank} students behind you
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default Leaderboard