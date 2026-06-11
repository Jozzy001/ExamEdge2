import { useState, useEffect } from "react"

const TOUR_KEY = "ee-tourDone"

const STEPS = [
  {
    emoji: "🎓",
    title: "Welcome to ExamEdgeNG",
    desc: "The smartest way to prepare for your UNIBEN Post-UTME. Built from 20 years of past questions — let's get you ready to pass.",
    highlight: null,
    color: "#667eea",
    bg: "linear-gradient(135deg, #667eea, #764ba2)",
  },
  {
    emoji: "🧪",
    title: "CBT Mode",
    desc: "Simulate the real Post-UTME exam. Timed, all subjects together — exactly like the actual test. The more you practice, the calmer you'll be on exam day.",
    highlight: "📅 46 days to Post-UTME",
    color: "#3b82f6",
    bg: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
  },
  {
    emoji: "🎓",
    title: "Your AI Tutor",
    desc: "This is your secret weapon. It knows your CBT scores, weak topics, streak and exam countdown — and gives you a personalised plan every single day. No other app has this.",
    highlight: "✨ Available to everyone — free",
    color: "#7c3aed",
    bg: "linear-gradient(135deg, #7c3aed, #667eea)",
  },
  {
    emoji: "🔥",
    title: "Hot Topics",
    desc: "We analysed every UNIBEN past question from 2005 to 2024. These are the topics that repeat every year — master them and you're already ahead of 80% of candidates.",
    highlight: "🎯 Most repeated questions identified",
    color: "#ef4444",
    bg: "linear-gradient(135deg, #ef4444, #f97316)",
  },
  {
    emoji: "📊",
    title: "Weak Areas",
    desc: "Every question you get wrong is saved here automatically. Review them, understand why you failed, and watch your score climb. Students who use this improve 2x faster.",
    highlight: "⚡ Auto-updates after every CBT",
    color: "#d97706",
    bg: "linear-gradient(135deg, #d97706, #f59e0b)",
  },
  {
    emoji: "💰",
    title: "Earn ₦500 Per Referral",
    desc: "Invite your friends to ExamEdgeNG. Every time one of them pays, you earn ₦500 cash — paid directly to your bank account every weekend. No limit.",
    highlight: "🏦 Real cash, every weekend",
    color: "#10b981",
    bg: "linear-gradient(135deg, #10b981, #059669)",
  },
  {
    emoji: "🚀",
    title: "You're Ready to Begin!",
    desc: "Start with a CBT test right now to get your baseline score. Then your AI Tutor will build you a personalised study plan. Your Post-UTME is in 46 days — let's go!",
    highlight: null,
    color: "#667eea",
    bg: "linear-gradient(135deg, #667eea, #764ba2)",
  },
]

const AppTour = ({ onDone }) => {
  const [step, setStep] = useState(0)
  const [animIn, setAnimIn] = useState(true)
  const [direction, setDirection] = useState("forward")

  const current = STEPS[step]
  const isLast = step === STEPS.length - 1

  const goNext = () => {
    setAnimIn(false)
    setDirection("forward")
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
      background: "rgba(0,0,0,0.65)",
      backdropFilter: "blur(3px)"
    }}>
      <div style={{
        background: "var(--bg)",
        borderRadius: "24px 24px 0 0",
        overflow: "hidden",
        transform: animIn ? "translateY(0)" : "translateY(24px)",
        opacity: animIn ? 1 : 0,
        transition: "all 0.25s ease"
      }}>

        {/* Coloured header banner */}
        <div style={{
          background: current.bg,
          padding: "32px 24px 28px",
          textAlign: "center",
          position: "relative"
        }}>
          {/* Skip button */}
          {!isLast && (
            <button onClick={skip} style={{
              position: "absolute", top: 16, right: 16,
              background: "rgba(255,255,255,0.2)",
              border: "none", borderRadius: 20,
              padding: "5px 14px", color: "#fff",
              fontSize: 12, fontWeight: 700,
              cursor: "pointer", fontFamily: "var(--font-main)"
            }}>Skip</button>
          )}

          {/* Step counter */}
          <div style={{
            position: "absolute", top: 16, left: 16,
            fontSize: 11, fontWeight: 800, color: "rgba(255,255,255,0.7)",
            letterSpacing: "0.05em"
          }}>
            {step + 1} / {STEPS.length}
          </div>

          {/* Emoji */}
          <div style={{
            fontSize: 56, marginBottom: 14,
            filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.2))",
            lineHeight: 1
          }}>
            {current.emoji}
          </div>

          {/* Title */}
          <div style={{
            fontSize: 22, fontWeight: 900, color: "#fff",
            marginBottom: 10, lineHeight: 1.2,
            textShadow: "0 2px 8px rgba(0,0,0,0.15)"
          }}>
            {current.title}
          </div>

          {/* Highlight badge */}
          {current.highlight && (
            <div style={{
              display: "inline-block",
              background: "rgba(255,255,255,0.2)",
              borderRadius: 20, padding: "5px 14px",
              fontSize: 12, fontWeight: 700, color: "#fff",
              border: "1px solid rgba(255,255,255,0.3)"
            }}>
              {current.highlight}
            </div>
          )}
        </div>

        {/* Bottom content */}
        <div style={{ padding: "20px 24px 36px" }}>

          {/* Description */}
          <p style={{
            fontSize: 14, color: "var(--text2)", lineHeight: 1.75,
            textAlign: "center", margin: "0 0 24px",
            maxWidth: 320, marginLeft: "auto", marginRight: "auto"
          }}>
            {current.desc}
          </p>

          {/* Step dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: 6, marginBottom: 20 }}>
            {STEPS.map((_, i) => (
              <div key={i} style={{
                width: i === step ? 24 : 7, height: 7,
                borderRadius: 4,
                background: i === step ? current.color :
                            i < step ? `${current.color}60` : "var(--surface3)",
                transition: "all 0.3s ease"
              }} />
            ))}
          </div>

          {/* Next button */}
          <button onClick={goNext} style={{
            width: "100%", padding: "15px",
            background: current.bg,
            color: "#fff", border: "none",
            borderRadius: "var(--radius-lg)",
            fontWeight: 800, fontSize: 15,
            cursor: "pointer", fontFamily: "var(--font-main)",
            boxShadow: `0 4px 16px ${current.color}40`,
            transition: "all 0.2s"
          }}>
            {isLast ? "Take My First CBT Test 🚀" : "Next →"}
          </button>

        </div>
      </div>
    </div>
  )
}

export const isTourDone = () => !!localStorage.getItem(TOUR_KEY)
export const resetTour = () => localStorage.removeItem(TOUR_KEY)

export default AppTour