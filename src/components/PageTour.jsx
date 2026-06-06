import { useState, useEffect } from "react"

// Page tour component — shows tooltips on first visit to each page
const PageTour = ({ tourKey, steps, onDone }) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const seen = localStorage.getItem(`ee-tour-${tourKey}`)
    if (!seen) setVisible(true)
  }, [tourKey])

  if (!visible) return null

  const step = steps[currentStep]
  const isLast = currentStep === steps.length - 1

  const handleNext = () => {
    if (isLast) {
      localStorage.setItem(`ee-tour-${tourKey}`, "1")
      setVisible(false)
      if (onDone) onDone()
    } else {
      setCurrentStep(p => p + 1)
    }
  }

  const handleSkip = () => {
    localStorage.setItem(`ee-tour-${tourKey}`, "1")
    setVisible(false)
  }

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 3000,
      background: "rgba(0,0,0,0.75)",
      display: "flex", alignItems: "flex-end"
    }}>
      {/* Tour card */}
      <div style={{
        background: "var(--bg)", width: "100%",
        borderRadius: "20px 20px 0 0",
        padding: "24px 24px 40px",
        animation: "slideUp 0.3s ease"
      }}>
        {/* Step indicator */}
        <div style={{
          display: "flex", justifyContent: "center", gap: 6, marginBottom: 20
        }}>
          {steps.map((_, i) => (
            <div key={i} style={{
              width: i === currentStep ? 20 : 6,
              height: 6, borderRadius: 3,
              background: i === currentStep ? "var(--primary)" : "var(--border)",
              transition: "all 0.3s"
            }} />
          ))}
        </div>

        {/* Icon */}
        <div style={{ textAlign: "center", fontSize: 52, marginBottom: 12 }}>
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
          lineHeight: 1.7, margin: "0 0 24px"
        }}>
          {step.description}
        </p>

        {/* Tips list if any */}
        {step.tips && (
          <div style={{ marginBottom: 20 }}>
            {step.tips.map((tip, i) => (
              <div key={i} style={{
                display: "flex", gap: 10, alignItems: "flex-start",
                padding: "8px 0",
                borderBottom: i < step.tips.length - 1 ? "1px solid var(--border)" : "none"
              }}>
                <span style={{ fontSize: 16, flexShrink: 0 }}>{tip.icon}</span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)" }}>{tip.label}</div>
                  <div style={{ fontSize: 12, color: "var(--text2)" }}>{tip.text}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Buttons */}
        <button
          onClick={handleNext}
          style={{
            width: "100%", padding: "14px",
            background: "var(--primary)", color: "#fff",
            border: "none", borderRadius: "var(--radius-lg)",
            fontSize: 15, fontWeight: 800, cursor: "pointer",
            fontFamily: "var(--font-main)", marginBottom: 10
          }}
        >
          {isLast ? "Got it! Let's go 🚀" : "Next →"}
        </button>

        <button
          onClick={handleSkip}
          style={{
            width: "100%", padding: "10px",
            background: "none", color: "var(--text3)",
            border: "none", fontSize: 13, cursor: "pointer",
            fontFamily: "var(--font-main)"
          }}
        >
          Skip tour
        </button>
      </div>
    </div>
  )
}

// Tour definitions for each page
export const TOURS = {
  cbt: [
    {
      icon: "🧪",
      title: "Welcome to CBT Mode",
      description: "This simulates the real Post-UTME exam experience. You'll answer questions under timed conditions — just like the real thing.",
      tips: [
        { icon: "⏱", label: "Timer", text: "The clock counts down. Keep an eye on it!" },
        { icon: "🔢", label: "Question Grid", text: "Tap the grid icon to jump to any question" },
        { icon: "🟢", label: "Green = Answered", text: "Red = unanswered. Try to answer all before time runs out" },
      ]
    },
    {
      icon: "💡",
      title: "CBT Tips",
      description: "Answer the easy questions first, then come back to the hard ones. Use the navigator to track which ones you've skipped.",
      tips: [
        { icon: "🧮", label: "Calculator", text: "Available for Maths and Physics questions" },
        { icon: "📊", label: "Results", text: "See your Post-UTME equivalent score after submission" },
        { icon: "⚠️", label: "Weak Areas", text: "Questions you get wrong are saved to your Weak Areas" },
      ]
    }
  ],

  study: [
    {
      icon: "📚",
      title: "Welcome to Study Mode",
      description: "Learn each topic properly before practicing. Every topic has a study guide written specifically to help you understand and remember.",
      tips: [
        { icon: "📖", label: "Read the guide first", text: "Understand the concept before answering questions" },
        { icon: "💡", label: "Quick Tips", text: "Look out for trap answers and common exam tricks" },
        { icon: "✅", label: "Check Answer", text: "See the correct answer and explanation after each question" },
      ]
    },
    {
      icon: "🎯",
      title: "How to Study Effectively",
      description: "Pick the topics you're weakest in first. Do all the questions, check your answers, then move to the next topic.",
      tips: [
        { icon: "🔥", label: "Hot Topics", text: "Check Hot Topics to see which topics repeat every year" },
        { icon: "📊", label: "Track progress", text: "Your scores are tracked automatically in My Progress" },
      ]
    }
  ],

  weak: [
    {
      icon: "⚠️",
      title: "Your Weak Areas",
      description: "These are questions you got wrong in past CBT tests. Reviewing them is the fastest way to improve your score.",
      tips: [
        { icon: "❌", label: "Your wrong answer", text: "Shown in red — see exactly what you got wrong" },
        { icon: "✅", label: "Correct answer", text: "Shown in green with a full explanation" },
        { icon: "🔄", label: "Auto-removes", text: "Questions disappear once you get them right in a CBT test" },
      ]
    }
  ],

  cbtHistory: [
    {
      icon: "🏆",
      title: "Your CBT History",
      description: "Every CBT test you take is saved here. Use it to track your improvement over time and review past mistakes.",
      tips: [
        { icon: "📈", label: "Track improvement", text: "Compare your scores across multiple attempts" },
        { icon: "📖", label: "Review answers", text: "Tap any attempt to see what you got right and wrong" },
        { icon: "🎯", label: "Target 60%+", text: "Most UNIBEN Post-UTME cutoffs are around 50-60%" },
      ]
    }
  ],

  progress: [
    {
      icon: "📊",
      title: "Your Progress Dashboard",
      description: "See exactly how you're performing across all subjects and topics. The more CBT tests you take, the more accurate this becomes.",
      tips: [
        { icon: "🎯", label: "Accuracy", text: "Percentage of questions you answer correctly" },
        { icon: "⚡", label: "Speed", text: "Average seconds per question — aim for under 60s" },
        { icon: "📈", label: "Line chart", text: "Shows your score improvement across your last 10 tests" },
        { icon: "🔥", label: "Streak", text: "Days in a row you've practiced — keep it going!" },
      ]
    }
  ],

  settings: [
    {
      icon: "⚙️",
      title: "Your Settings",
      description: "Manage your account, referrals and app preferences here.",
      tips: [
        { icon: "💰", label: "Earn with us", text: "Share your referral code to earn ₦500 per paid friend" },
        { icon: "🏦", label: "Bank details", text: "Add your bank details to receive your referral payments" },
        { icon: "🎓", label: "Change Faculty", text: "Switch department — note this clears your progress" },
        { icon: "🌙", label: "Dark mode", text: "Toggle between light and dark theme" },
      ]
    }
  ]
}

export default PageTour
