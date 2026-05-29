import { useState, useEffect } from "react"

const TOUR_KEY = "ee-tourDone"

const STEPS = [
  {
    emoji: "🌱",
    title: "Your Progress Bar",
    desc: "Tap the bar at the top to see your XP, level, badges, daily goal and set your exam countdown."
  },
  {
    emoji: "🧪",
    title: "CBT Mode",
    desc: "Simulates the real Post-UTME exam — timed, all subjects together. Just like the actual test."
  },
  {
    emoji: "📚",
    title: "Study Mode",
    desc: "Practice one topic at a time. Get instant explanations after each answer. Best for learning."
  },
  {
    emoji: "💪",
    title: "Weak Areas",
    desc: "We automatically track topics where you score below 50% and bring them here for focused practice."
  },
  {
    emoji: "📊",
    title: "My Progress",
    desc: "See how you're improving across all subjects over time. Your stats are saved automatically."
  },
  {
    emoji: "🎉",
    title: "You're all set!",
    desc: "Start with CBT Mode to simulate the real exam, or use Study Mode to learn topic by topic. Good luck!"
  },
]

const AppTour = ({ onDone }) => {
  const [step, setStep] = useState(0)
  const [animIn, setAnimIn] = useState(true)

  const current = STEPS[step]
  const isLast = step === STEPS.length - 1

  const goNext = () => {
    setAnimIn(false)
    setTimeout(() => {
      if (isLast) {
        localStorage.setItem(TOUR_KEY, "1")
        onDone()
      } else {
        setStep(s => s + 1)
        setAnimIn(true)
      }
    }, 200)
  }

  const skip = () => {
    localStorage.setItem(TOUR_KEY, "1")
    onDone()
  }

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 500,
      display: "flex", flexDirection: "column",
      justifyContent: "flex-end",
      background: "rgba(0,0,0,0.55)",
      backdropFilter: "blur(2px)"
    }}>

      {/* Bottom sheet */}
      <div style={{
        background: "var(--surface)",
        borderRadius: "24px 24px 0 0",
        padding: "24px 20px 40px",
        transform: animIn ? "translateY(0)" : "translateY(20px)",
        opacity: animIn ? 1 : 0,
        transition: "all 0.25s ease"
      }}>
        {/* Step dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: 6, marginBottom: 20 }}>
          {STEPS.map((_, i) => (
            <div key={i} style={{
              width: i === step ? 20 : 7, height: 7,
              borderRadius: 4,
              background: i === step ? "var(--primary)" :
                          i < step ? "var(--primary-light)" : "var(--surface3)",
              transition: "all 0.3s"
            }} />
          ))}
        </div>

        {/* Content */}
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>{current.emoji}</div>
          <div style={{ fontSize: 20, fontWeight: 800, color: "var(--text)", marginBottom: 10 }}>
            {current.title}
          </div>
          <div style={{ fontSize: 14, color: "var(--text2)", lineHeight: 1.7, maxWidth: 300, margin: "0 auto" }}>
            {current.desc}
          </div>
        </div>

        {/* Buttons */}
        <button
          onClick={goNext}
          style={{
            width: "100%", padding: "14px",
            background: "var(--primary)", color: "#fff",
            border: "none", borderRadius: "var(--radius-lg)",
            fontWeight: 800, fontSize: 15,
            cursor: "pointer", fontFamily: "var(--font-main)",
            marginBottom: 10
          }}
        >
          {isLast ? "Let's go! 🚀" : "Next →"}
        </button>

        {!isLast && (
          <button onClick={skip} style={{
            width: "100%", padding: "10px",
            background: "none", border: "none",
            color: "var(--text3)", fontSize: 13,
            fontWeight: 700, cursor: "pointer",
            fontFamily: "var(--font-main)"
          }}>
            Skip tour
          </button>
        )}
      </div>
    </div>
  )
}

export const isTourDone = () => !!localStorage.getItem(TOUR_KEY)
export const resetTour = () => localStorage.removeItem(TOUR_KEY)

export default AppTour