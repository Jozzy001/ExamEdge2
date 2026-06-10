import { useState, useEffect } from "react"
import { getLeaderboard, getUserRank, getLeaderboardStats } from "../utils/leaderboard"

const Leaderboard = ({ onNavigate, onBack, university, isPaid }) => {
  const [leaderboard, setLeaderboard] = useState([])
  const [userRank, setUserRank] = useState(null)
  const [stats, setStats] = useState(null)
  const [view, setView] = useState("global") // global, faculty, friends
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadLeaderboard()
  }, [view])

  const loadLeaderboard = async () => {
    setLoading(true)
    const board = await getLeaderboard(view, university)
    setLeaderboard(board)
    setLoading(false)
  }

  const getAvatarColor = (rank) => {
    if (rank === 1) return "#fbbf24" // Gold
    if (rank === 2) return "#a78bfa" // Silver
    if (rank === 3) return "#f97316" // Bronze
    return "#e5e7eb"
  }

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
          {["global", "faculty"].map(tab => (
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
            {leaderboard.slice(0, 3).length === 3 && (
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
                  opacity: 0.9
                }}>
                  <div style={{ fontSize: 40, marginBottom: 8 }}>🥈</div>
                  <div style={{ fontSize: 13, fontWeight: 800, marginBottom: 4 }}>
                    {leaderboard[1]?.name}
                  </div>
                  <div style={{ fontSize: 20, fontWeight: 800, color: "#a78bfa", marginBottom: 4 }}>
                    {leaderboard[1]?.score}%
                  </div>
                  <div style={{ fontSize: 11, color: "var(--text3)" }}>
                    {leaderboard[1]?.totalQuizzes} quizzes
                  </div>
                </div>

                {/* 1st Place */}
                <div style={{
                  background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
                  borderRadius: "var(--radius-lg)",
                  padding: 20,
                  textAlign: "center",
                  order: 0,
                  transform: "scale(1.05)"
                }}>
                  <div style={{ fontSize: 48, marginBottom: 8 }}>👑</div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: "#fff", marginBottom: 4 }}>
                    {leaderboard[0]?.name}
                  </div>
                  <div style={{ fontSize: 28, fontWeight: 900, color: "#fff", marginBottom: 6 }}>
                    {leaderboard[0]?.score}%
                  </div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.9)" }}>
                    {leaderboard[0]?.totalQuizzes} quizzes
                  </div>
                </div>

                {/* 3rd Place */}
                <div style={{
                  background: "var(--surface)",
                  borderRadius: "var(--radius-lg)",
                  padding: 16,
                  textAlign: "center",
                  order: 2,
                  opacity: 0.9
                }}>
                  <div style={{ fontSize: 40, marginBottom: 8 }}>🥉</div>
                  <div style={{ fontSize: 13, fontWeight: 800, marginBottom: 4 }}>
                    {leaderboard[2]?.name}
                  </div>
                  <div style={{ fontSize: 20, fontWeight: 800, color: "#f97316", marginBottom: 4 }}>
                    {leaderboard[2]?.score}%
                  </div>
                  <div style={{ fontSize: 11, color: "var(--text3)" }}>
                    {leaderboard[2]?.totalQuizzes} quizzes
                  </div>
                </div>
              </div>
            )}

            {/* Leaderboard Table */}
            <div>
              {leaderboard.slice(3).map((user, index) => (
                <div
                  key={user.userId}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "14px 16px",
                    borderBottom: "1px solid var(--border)",
                    background: "var(--surface)"
                  }}
                >
                  {/* Rank */}
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: getAvatarColor(index + 4),
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 800,
                      color: "#fff",
                      fontSize: 14
                    }}
                  >
                    {index + 4}
                  </div>

                  {/* User Info */}
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 800, color: "var(--text)" }}>
                      {user.name}
                    </div>
                    <div style={{ fontSize: 11, color: "var(--text3)" }}>
                      {user.totalQuizzes} quiz{user.totalQuizzes !== 1 ? "zes" : ""}
                    </div>
                  </div>

                  {/* Score */}
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 16, fontWeight: 800, color: "var(--primary)" }}>
                      {user.score}%
                    </div>
                  </div>
                </div>
              ))}
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
                  {userRank.score}% • {userRank.percentile}th percentile
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
