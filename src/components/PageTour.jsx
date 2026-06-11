import { useState, useEffect } from "react"

// Page tour component — shows tooltips on first visit to each page
const PageTour = ({ tourKey, steps, onDone }) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [visible, setVisible] = useState(false)
  const [animIn, setAnimIn] = useState(true)

  useEffect(() => {
    const seen = localStorage.getItem(`ee-tour-${tourKey}`)
    if (!seen) setVisible(true)
  }, [tourKey])

  if (!visible) return null

  const step = steps[currentStep]
  const isLast = currentStep === steps.length - 1

  const handleNext = () => {
    setAnimIn(false)
    setTimeout(() => {
      if (isLast) {
        localStorage.setItem(`ee-tour-${tourKey}`, "1")
        setVisible(false)
        if (onDone) onDone()
      } else {
        setCurrentStep(p => p + 1)
        setAnimIn(true)
      }
    }, 180)
  }

  const handleSkip = () => {
    localStorage.setItem(`ee-tour-${tourKey}`, "1")
    setVisible(false)
  }

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 3000,
      background: "rgba(0,0,0,0.7)",
      display: "flex", alignItems: "flex-end",
      backdropFilter: "blur(2px)"
    }}>
      <div style={{
        background: "var(--bg)", width: "100%",
        borderRadius: "22px 22px 0 0",
        overflow: "hidden",
        transform: animIn ? "translateY(0)" : "translateY(20px)",
        opacity: animIn ? 1 : 0,
        transition: "all 0.22s ease"
      }}>

        {/* Coloured top bar */}
        <div style={{
          height: 5,
          background: step.color || "var(--primary)",
          width: `${((currentStep + 1) / steps.length) * 100}%`,
          transition: "width 0.4s ease"
        }} />

        <div style={{ padding: "22px 24px 36px" }}>

          {/* Step dots + skip */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <div style={{ display: "flex", gap: 6 }}>
              {steps.map((_, i) => (
                <div key={i} style={{
                  width: i === currentStep ? 22 : 6,
                  height: 6, borderRadius: 3,
                  background: i === currentStep
                    ? (step.color || "var(--primary)")
                    : i < currentStep ? `${step.color || "var(--primary)"}60` : "var(--border)",
                  transition: "all 0.3s"
                }} />
              ))}
            </div>
            {!isLast && (
              <button onClick={handleSkip} style={{
                background: "none", border: "none",
                color: "var(--text3)", fontSize: 12,
                fontWeight: 700, cursor: "pointer",
                fontFamily: "var(--font-main)"
              }}>Skip</button>
            )}
          </div>

          {/* Icon */}
          <div style={{ textAlign: "center", fontSize: 52, marginBottom: 12, lineHeight: 1 }}>
            {step.icon}
          </div>

          {/* Title */}
          <h3 style={{
            textAlign: "center", fontSize: 20, fontWeight: 900,
            color: "var(--text)", margin: "0 0 10px"
          }}>
            {step.title}
          </h3>

          {/* Description */}
          <p style={{
            textAlign: "center", fontSize: 14, color: "var(--text2)",
            lineHeight: 1.75, margin: "0 0 20px",
            maxWidth: 320, marginLeft: "auto", marginRight: "auto"
          }}>
            {step.description}
          </p>

          {/* Tips list */}
          {step.tips && step.tips.length > 0 && (
            <div style={{
              background: "var(--surface)", borderRadius: "var(--radius-lg)",
              padding: "4px 14px", marginBottom: 20,
              border: "1px solid var(--border)"
            }}>
              {step.tips.map((tip, i) => (
                <div key={i} style={{
                  display: "flex", gap: 12, alignItems: "flex-start",
                  padding: "10px 0",
                  borderBottom: i < step.tips.length - 1 ? "1px solid var(--border)" : "none"
                }}>
                  <span style={{ fontSize: 18, flexShrink: 0, marginTop: 1 }}>{tip.icon}</span>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)", marginBottom: 2 }}>{tip.label}</div>
                    <div style={{ fontSize: 12, color: "var(--text2)", lineHeight: 1.5 }}>{tip.text}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Next button */}
          <button onClick={handleNext} style={{
            width: "100%", padding: "14px",
            background: step.color || "var(--primary)",
            color: "#fff", border: "none",
            borderRadius: "var(--radius-lg)",
            fontSize: 15, fontWeight: 800,
            cursor: "pointer", fontFamily: "var(--font-main)",
            boxShadow: `0 4px 14px ${step.color || "var(--primary)"}40`
          }}>
            {isLast ? "Got it! Let's go 🚀" : "Next →"}
          </button>

        </div>
      </div>
    </div>
  )
}

// ============================================================
// TOUR DEFINITIONS — one per page
// ============================================================
export const TOURS = {

  // ── CBT MODE ──
  cbt: [
    {
      icon: "🧪",
      title: "Welcome to CBT Mode",
      description: "This is as close to the real Post-UTME as it gets. Timed, all subjects together, same format — practice here and exam day will feel familiar.",
      color: "#3b82f6",
      tips: [
        { icon: "⏱", label: "Timer is running", text: "Keep an eye on the countdown. When it hits zero, the exam submits automatically." },
        { icon: "🟢", label: "Answer all questions", text: "Green = answered. Red = skipped. Don't leave any red before submitting." },
        { icon: "🔢", label: "Jump to any question", text: "Use the question grid at the bottom to navigate freely — don't get stuck." },
      ]
    },
    {
      icon: "🧮",
      title: "Tools Available",
      description: "You have a calculator and the ability to flag questions. Use both — they're there for a reason.",
      color: "#3b82f6",
      tips: [
        { icon: "🧮", label: "Calculator", text: "Tap the calculator icon in the header. Use it for Maths and Physics." },
        { icon: "📊", label: "Post-UTME score", text: "After submission, you'll see your equivalent Post-UTME score out of 100." },
        { icon: "⚠️", label: "Wrong answers saved", text: "Every question you get wrong goes straight into your Weak Areas." },
      ]
    }
  ],

  // ── STUDY MODE ──
  study: [
    {
      icon: "📚",
      title: "Welcome to Study Mode",
      description: "Practice one topic at a time with instant feedback. Every topic with a 📖 badge has a full study guide — read it before answering questions.",
      color: "#667eea",
      tips: [
        { icon: "📖", label: "Read the guide first", text: "The study guide explains the concept, common traps and exam tips before you practice." },
        { icon: "💡", label: "See explanations", text: "After each answer, tap 'Check Answer' to see why the correct answer is right." },
        { icon: "🔥", label: "Focus on weak topics", text: "Start with topics you find hardest — not the ones you already know." },
      ]
    },
    {
      icon: "🎯",
      title: "Study Smart, Not Hard",
      description: "You don't need to study everything. You need to study what UNIBEN actually tests — which is what our past questions are built from.",
      color: "#667eea",
      tips: [
        { icon: "🔥", label: "Check Hot Topics", text: "See which topics have appeared in multiple past exams — prioritise those." },
        { icon: "📊", label: "Your progress is tracked", text: "Every question you answer updates your accuracy stats in My Progress." },
      ]
    }
  ],

  // ── HOT TOPICS ──
  hotTopics: [
    {
      icon: "🔥",
      title: "Hot Topics",
      description: "These topics have appeared in UNIBEN Post-UTME papers multiple times. Master them and you've already answered a significant portion of the exam.",
      color: "#ef4444",
      tips: [
        { icon: "📅", label: "Tested across years", text: "Each topic shows how many times it's appeared — the higher the number, the more important it is." },
        { icon: "🎯", label: "Highest return on time", text: "30 minutes on a hot topic beats 2 hours on a topic that never repeats." },
        { icon: "🚀", label: "Practice immediately", text: "Tap any topic to see the repeated questions and then practice them directly." },
      ]
    }
  ],

  // ── WEAK AREAS ──
  weak: [
    {
      icon: "⚠️",
      title: "Your Weak Areas",
      description: "These are questions you got wrong in past CBT tests. They are automatically tracked and sorted by subject. This is where your marks are being lost.",
      color: "#d97706",
      tips: [
        { icon: "❌", label: "See your wrong answer", text: "Every question shows what you selected and why it was wrong." },
        { icon: "✅", label: "Learn the right answer", text: "The correct answer is shown in green with a full explanation." },
        { icon: "🔄", label: "Auto-clears on improvement", text: "Once you get a question right in a CBT, it removes itself from here." },
      ]
    }
  ],

  // ── CBT HISTORY ──
  cbtHistory: [
    {
      icon: "🕐",
      title: "Your CBT History",
      description: "Every CBT you've ever taken is saved here. Tap any attempt to review exactly what you got right and wrong. Track your improvement over time.",
      color: "#7c3aed",
      tips: [
        { icon: "📈", label: "Watch your trend", text: "Are your scores going up? If not, your Weak Areas need more attention." },
        { icon: "📖", label: "Review any attempt", text: "Tap any past CBT to see a full breakdown of every answer." },
        { icon: "🏆", label: "Personal best", text: "Your highest score is marked with a trophy — try to beat it each time." },
      ]
    }
  ],

  // ── PROGRESS ──
  progress: [
    {
      icon: "📊",
      title: "Your Progress Dashboard",
      description: "This is the most honest view of your preparation. Accuracy, speed, subject breakdown, score trend — all in one place.",
      color: "#0f766e",
      tips: [
        { icon: "🎯", label: "Accuracy", text: "How many questions you're getting right overall. Target 60%+ to pass." },
        { icon: "⚡", label: "Speed", text: "Seconds per question on average. Under 60s is good — under 30s is excellent." },
        { icon: "📈", label: "Score trend", text: "The line chart shows your last 10 CBT scores — it should be going up." },
        { icon: "🔥", label: "Streak", text: "How many days in a row you've studied. Consistency is everything." },
      ]
    }
  ],

  // ── AI TUTOR ──
  aiTutor: [
    {
      icon: "🎓",
      title: "Your Personal AI Tutor",
      description: "This tutor knows everything about you — your CBT scores, weak areas, streak, exam countdown and faculty. Every response is personalised to your situation.",
      color: "#7c3aed",
      tips: [
        { icon: "💬", label: "Coach me", text: "Ask for a study plan for today based on your actual weak areas." },
        { icon: "💡", label: "Explain a topic", text: "Name any subject or topic and get a clear explanation with UNIBEN-specific tips." },
        { icon: "🎯", label: "Am I ready?", text: "Get an honest readiness assessment and predicted Post-UTME score." },
      ]
    },
    {
      icon: "💡",
      title: "Get the Most From Your Tutor",
      description: "The more CBT tests you take, the smarter the tutor becomes. It reads your real data — not guesses.",
      color: "#7c3aed",
      tips: [
        { icon: "🧪", label: "Take CBTs first", text: "Your tutor needs real performance data to give accurate advice." },
        { icon: "📅", label: "Check it daily", text: "Ask 'what should I study today?' every morning for a daily plan." },
        { icon: "🔥", label: "Works offline", text: "No internet needed — all responses are built from your local data." },
      ]
    }
  ],

  // ── LEADERBOARD ──
  leaderboard: [
    {
      icon: "🏆",
      title: "The Leaderboard",
      description: "See how you rank against other UNIBEN students preparing for the same exam. Compete, get motivated, and push your score higher.",
      color: "#f59e0b",
      tips: [
        { icon: "🌍", label: "Global ranking", text: "Your rank among all students on the app by average CBT score." },
        { icon: "🏫", label: "Faculty ranking", text: "See how you compare with students from your own faculty." },
        { icon: "📈", label: "Improve to climb", text: "Take more CBTs and improve your scores to move up the board." },
      ]
    }
  ],

  // ── REFERRALS ──
  referrals: [
    {
      icon: "💰",
      title: "Referrals & Earnings",
      description: "Every friend you invite who pays ₦3,000 earns you ₦500 cash — paid directly to your bank account every weekend. No limit on how much you can earn.",
      color: "#10b981",
      tips: [
        { icon: "📋", label: "Copy your link", text: "Share your unique referral link via WhatsApp, SMS or anywhere." },
        { icon: "💳", label: "Paid every weekend", text: "Add your bank details to receive automatic weekend payouts." },
        { icon: "📊", label: "Track earnings", text: "See your total earned, paid out and pending balance in real time." },
      ]
    }
  ],

  // ── SETTINGS ──
  settings: [
    {
      icon: "⚙️",
      title: "Your Settings",
      description: "Manage your account, security, plan and app preferences all in one place.",
      color: "#64748b",
      tips: [
        { icon: "💰", label: "Referrals & Earnings", text: "View your earnings summary and navigate to the full referrals page." },
        { icon: "🎓", label: "Change Faculty", text: "Switch to a different department — note this clears your local progress." },
        { icon: "🌙", label: "Dark mode", text: "Toggle between light and dark theme anytime." },
        { icon: "💬", label: "Contact Support", text: "Send a message directly to the admin from here." },
      ]
    }
  ],

}

export default PageTour