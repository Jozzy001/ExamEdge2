import { useState, useEffect } from "react"
import { getCBTHistory, getCBTPersonalBest, deleteCBTRecord, formatDate, formatTime } from "../utils/cbtHistory"

const CBTHistory = ({ onNavigate, onBack, onReview }) => {
  const [history, setHistory] = useState([])
  const personalBest = getCBTPersonalBest()

  useEffect(() => {
    setHistory(getCBTHistory())
  }, [])

  const handleDelete = (id, e) => {
    e.stopPropagation()
    if (window.confirm("Delete this CBT record?")) {
      deleteCBTRecord(id)
      setHistory(getCBTHistory())
    }
  }

  return (
    <div className="ee-page">
      <header className="ee-header">
        <button className="ee-back-btn" onClick={() => onBack ? onBack() : onNavigate("home")}>← Back</button>
        <span style={{ fontWeight: 800, fontSize: "16px" }}>CBT History</span>
        <span style={{ width: 60 }} />
      </header>

      <div className="ee-content">

        {/* Personal best banner */}
        {personalBest && (
          <div style={{
            background: "linear-gradient(135deg, #fff8e1, #fff3cd)",
            border: "1.5px solid #ffc107",
            borderRadius: "var(--radius-lg)",
            padding: "14px 16px",
            marginBottom: 16,
            display: "flex", alignItems: "center", gap: 12
          }}>
            <span style={{ fontSize: 28 }}>🏆</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 800, fontSize: 13, color: "#7a5800" }}>Personal Best</div>
              <div style={{ fontSize: 12, color: "#a07000", marginTop: 2 }}>
                {personalBest.score}/{personalBest.total} — <strong>{personalBest.percentage}%</strong>
                <span style={{ marginLeft: 8, opacity: 0.7 }}>{formatDate(personalBest.date)}</span>
              </div>
            </div>
          </div>
        )}

        {/* Empty state */}
        {history.length === 0 ? (
          <div className="ee-empty">
            <span className="ee-empty-icon">📋</span>
            <p style={{ fontWeight: 700, fontSize: 16, color: "var(--text)", marginBottom: 6 }}>
              No CBT history yet
            </p>
            <p style={{ fontSize: 13, color: "var(--text2)", marginBottom: 20 }}>
              Complete a CBT exam and your results will appear here.
            </p>
            <button className="ee-btn ee-btn-primary" onClick={() => onNavigate("cbtSubjectSelect")}>
              Start CBT 🧪
            </button>
          </div>
        ) : (
          <>
            <p className="ee-subtitle" style={{ marginBottom: 12 }}>
              {history.length} attempt{history.length !== 1 ? "s" : ""} — tap to review
            </p>

            {history.map((record, i) => {
              const pct = record.percentage
              const color = pct >= 70 ? "var(--success)" : pct >= 50 ? "var(--warning)" : "var(--accent)"
              const emoji = pct >= 70 ? "🌟" : pct >= 50 ? "👍" : "💪"
              const isPB = personalBest?.id === record.id

              return (
                <div
                  key={record.id}
                  onClick={() => onReview(record)}
                  style={{
                    background: "var(--surface)",
                    border: isPB ? "2px solid #ffc107" : "1px solid var(--border)",
                    borderRadius: "var(--radius-lg)",
                    padding: "14px 16px",
                    marginBottom: 10,
                    cursor: "pointer",
                    transition: "all 0.15s",
                    position: "relative"
                  }}
                >
                  {/* Personal best tag */}
                  {isPB && (
                    <div style={{
                      position: "absolute", top: -1, right: 12,
                      background: "#ffc107", color: "#7a5800",
                      fontSize: 9, fontWeight: 800, padding: "2px 8px",
                      borderRadius: "0 0 var(--radius-sm) var(--radius-sm)",
                      textTransform: "uppercase", letterSpacing: "0.05em"
                    }}>🏆 Best</div>
                  )}

                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    {/* Score circle */}
                    <div style={{
                      width: 52, height: 52, borderRadius: "50%",
                      border: `3px solid ${color}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, flexDirection: "column",
                      background: "var(--surface2)"
                    }}>
                      <span style={{ fontSize: 11, fontWeight: 800, color, lineHeight: 1 }}>{pct}%</span>
                    </div>

                    {/* Details */}
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 3 }}>
                        <span style={{ fontWeight: 800, fontSize: 15, color: "var(--text)" }}>
                          {record.score}/{record.total}
                        </span>
                        <span style={{ fontSize: 14 }}>{emoji}</span>
                      </div>
                      <div style={{ fontSize: 11, color: "var(--text3)" }}>
                        {formatDate(record.date)}
                        {record.timeTaken && (
                          <span style={{ marginLeft: 8 }}>⏱ {formatTime(record.timeTaken)}</span>
                        )}
                      </div>
                      {record.subjects && record.subjects.length > 0 && (
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 6 }}>
                          {record.subjects.map(s => (
                            <span key={s} style={{
                              fontSize: 9, fontWeight: 700, padding: "2px 6px",
                              borderRadius: "var(--radius-pill)",
                              background: "var(--primary-light)", color: "var(--primary-text)"
                            }}>{s}</span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Arrow + delete */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                      <span style={{ color: "var(--text3)", fontSize: 18 }}>›</span>
                      <button
                        onClick={(e) => handleDelete(record.id, e)}
                        style={{
                          background: "none", border: "none", cursor: "pointer",
                          fontSize: 14, color: "var(--text3)", padding: 2
                        }}
                        title="Delete record"
                      >🗑️</button>
                    </div>
                  </div>

                  {/* Mini score bar */}
                  <div style={{
                    height: 3, background: "var(--surface3)",
                    borderRadius: 2, overflow: "hidden", marginTop: 10
                  }}>
                    <div style={{
                      height: "100%", width: `${pct}%`,
                      background: color, borderRadius: 2
                    }} />
                  </div>
                </div>
              )
            })}
          </>
        )}
      </div>
    </div>
  )
}

export default CBTHistory
