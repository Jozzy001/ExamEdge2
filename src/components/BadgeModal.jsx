import { useState, useEffect } from "react"

// =============================================
// BADGE MODAL — pops up when a badge is earned
// =============================================
const BadgeModal = ({ badge, onClose }) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setVisible(true), 50)
    const t = setTimeout(() => {
      setVisible(false)
      setTimeout(onClose, 300)
    }, 3500)
    return () => clearTimeout(t)
  }, [])

  if (!badge) return null

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 300,
      display: "flex", alignItems: "center", justifyContent: "center",
      background: "rgba(0,0,0,0.6)",
      opacity: visible ? 1 : 0,
      transition: "opacity 0.3s"
    }} onClick={() => { setVisible(false); setTimeout(onClose, 300) }}>
      <div style={{
        background: "var(--surface)",
        borderRadius: "var(--radius-xl)",
        padding: "32px 28px",
        textAlign: "center",
        maxWidth: 280, width: "90%",
        transform: visible ? "scale(1)" : "scale(0.7)",
        transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
        border: "2px solid var(--primary)"
      }}>
        {/* Glow ring */}
        <div style={{
          width: 90, height: 90, borderRadius: "50%",
          background: "linear-gradient(135deg, var(--primary-light), var(--surface2))",
          border: "3px solid var(--primary)",
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto 16px",
          boxShadow: "0 0 30px rgba(var(--primary-rgb, 99,102,241), 0.3)"
        }}>
          <span style={{ fontSize: 44 }}>{badge.emoji}</span>
        </div>

        <div style={{
          fontSize: 11, fontWeight: 800, color: "var(--primary)",
          textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6
        }}>
          🏆 Badge Unlocked!
        </div>
        <div style={{ fontSize: 20, fontWeight: 800, color: "var(--text)", marginBottom: 6 }}>
          {badge.title}
        </div>
        <div style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.5, marginBottom: 16 }}>
          {badge.desc}
        </div>
        <div style={{ fontSize: 11, color: "var(--text3)" }}>Tap anywhere to continue</div>
      </div>
    </div>
  )
}

// =============================================
// LEVEL UP MODAL
// =============================================
export const LevelUpModal = ({ level, onClose }) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setVisible(true), 50)
    const t = setTimeout(() => {
      setVisible(false)
      setTimeout(onClose, 300)
    }, 3000)
    return () => clearTimeout(t)
  }, [])

  if (!level) return null

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 300,
      display: "flex", alignItems: "center", justifyContent: "center",
      background: "rgba(0,0,0,0.65)",
      opacity: visible ? 1 : 0,
      transition: "opacity 0.3s"
    }} onClick={() => { setVisible(false); setTimeout(onClose, 300) }}>
      <div style={{
        background: "linear-gradient(135deg, var(--primary), var(--primary-dark, var(--primary)))",
        borderRadius: "var(--radius-xl)",
        padding: "32px 28px",
        textAlign: "center",
        maxWidth: 280, width: "90%",
        transform: visible ? "scale(1)" : "scale(0.5)",
        transition: "transform 0.5s cubic-bezier(0.34,1.56,0.64,1)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
        color: "#fff"
      }}>
        <div style={{ fontSize: 56, marginBottom: 12 }}>{level.emoji}</div>
        <div style={{ fontSize: 12, fontWeight: 800, opacity: 0.8, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 6 }}>
          Level Up! 🎉
        </div>
        <div style={{ fontSize: 28, fontWeight: 800, marginBottom: 4 }}>
          {level.title}
        </div>
        <div style={{ fontSize: 13, opacity: 0.8 }}>
          You reached Level {level.level}!
        </div>
      </div>
    </div>
  )
}

// =============================================
// XP TOAST — floating +XP text
// =============================================
export const XPToast = ({ xp, onDone }) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false)
      setTimeout(onDone, 400)
    }, 1800)
    return () => clearTimeout(t)
  }, [])

  return (
    <div style={{
      position: "fixed", bottom: 100, left: "50%",
      transform: `translateX(-50%) translateY(${visible ? "-20px" : "0px"})`,
      opacity: visible ? 1 : 0,
      transition: "all 0.4s ease",
      zIndex: 250,
      background: "linear-gradient(135deg, var(--primary), var(--primary-dark, var(--primary)))",
      color: "#fff", padding: "8px 18px",
      borderRadius: "var(--radius-pill)",
      fontWeight: 800, fontSize: 15,
      boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
      pointerEvents: "none"
    }}>
      ⭐ +{xp} XP
    </div>
  )
}

// =============================================
// QUEUE — show badges one at a time
// =============================================
export const BadgeQueue = ({ badges, onAllDone }) => {
  const [queue, setQueue] = useState(badges || [])
  const [current, setCurrent] = useState(badges?.[0] || null)

  const next = () => {
    const remaining = queue.slice(1)
    setQueue(remaining)
    setCurrent(remaining[0] || null)
    if (remaining.length === 0) onAllDone?.()
  }

  if (!current) return null
  return <BadgeModal badge={current} onClose={next} />
}

export default BadgeModal
