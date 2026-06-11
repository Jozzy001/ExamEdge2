import { useState, useRef } from "react"

const slides = [
  {
    emoji: null,
    logo: true,
    title: "Welcome to ExamEdgeNG",
    subtitle: "The smartest way to prepare for your Post-UTME exam — built from 20+ years of real past questions.",
    bg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    stat: null,
  },
  {
    emoji: "📚",
    title: "20+ Years of Past Questions",
    subtitle: "Practice with real Post-UTME past questions from 2005 till date. Know exactly what to expect on exam day.",
    bg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    stat: "3,000+ Questions",
  },
  {
    emoji: "🧪",
    title: "Real CBT Simulation",
    subtitle: "Timed, all subjects together — exactly like the actual Post-UTME. The more you practice, the calmer you'll be on exam day.",
    bg: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    stat: "Timed & Scored",
  },
  {
    emoji: "🎓",
    title: "Your Personal AI Tutor",
    subtitle: "Knows your weak areas, your streak and your exam countdown. Gives you a personalised study plan every single day — no other app has this.",
    bg: "linear-gradient(135deg, #7c3aed 0%, #667eea 100%)",
    stat: "Only on ExamEdgeNG",
  },
  {
    emoji: "🔥",
    title: "Hot Topics & Weak Areas",
    subtitle: "We identified which topics repeat every year. Master them and you're already ahead of 80% of candidates.",
    bg: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    stat: "Smart Analytics",
  },
  {
    emoji: "💰",
    title: "Refer Friends — Earn ₦500",
    subtitle: "Share your referral code now. Every friend who signs up is registered under your name — when payouts launch, you get paid for all of them.",
    bg: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
    stat: "Coming Soon",
  },
  {
    emoji: null,
    logo: false,
    cta: true,
    title: "100% Free — Start Now",
    subtitle: "No credit card. No subscription. Everything is free right now. Just sign up and start preparing.",
    bg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    stat: null,
  },
]

export default function Splash({ onDone }) {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const touchStartX = useRef(null)

  const goTo = (index) => {
    if (animating || index === current) return
    setAnimating(true)
    setTimeout(() => {
      setCurrent(index)
      setAnimating(false)
    }, 200)
  }

  const next = () => {
    if (current < slides.length - 1) goTo(current + 1)
    else onDone()
  }

  const prev = () => {
    if (current > 0) goTo(current - 1)
  }

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      if (diff > 0) next()
      else prev()
    }
    touchStartX.current = null
  }

  const slide = slides[current]
  const isLast = current === slides.length - 1

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      style={{
        minHeight: "100vh",
        background: slide.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "60px 24px 40px",
        transition: "background 0.4s ease",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative circles */}
      <div style={{
        position: "absolute", top: -60, right: -60,
        width: 220, height: 220, borderRadius: "50%",
        background: "rgba(255,255,255,0.06)", pointerEvents: "none"
      }} />
      <div style={{
        position: "absolute", bottom: -40, left: -40,
        width: 160, height: 160, borderRadius: "50%",
        background: "rgba(255,255,255,0.05)", pointerEvents: "none"
      }} />

      {/* Skip button */}
      {!isLast && (
        <button
          onClick={onDone}
          style={{
            position: "absolute", top: 20, right: 20,
            background: "rgba(255,255,255,0.2)",
            border: "none", borderRadius: 20,
            padding: "6px 16px", color: "#fff",
            fontSize: 13, fontWeight: 700,
            cursor: "pointer", fontFamily: "var(--font-main)"
          }}
        >
          Skip
        </button>
      )}

      {/* Step counter */}
      <div style={{
        position: "absolute", top: 26, left: 24,
        fontSize: 11, fontWeight: 800,
        color: "rgba(255,255,255,0.6)",
        letterSpacing: "0.05em"
      }}>
        {current + 1} / {slides.length}
      </div>

      {/* Main content */}
      <div style={{
        flex: 1, display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center",
        opacity: animating ? 0 : 1,
        transform: animating ? "translateY(12px)" : "translateY(0)",
        transition: "opacity 0.2s, transform 0.2s",
        width: "100%", maxWidth: 400,
      }}>

        {/* Logo or Emoji */}
        {slide.logo ? (
          <picture>
            <source srcSet="/images/logo.webp" type="image/webp" />
            <img
              src="/images/logo.png"
              alt="ExamEdgeNG"
              style={{ width: 130, height: 130, objectFit: "contain", marginBottom: 24 }}
            />
          </picture>
        ) : slide.emoji ? (
          <div style={{
            fontSize: 84, marginBottom: 24,
            filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.2))",
            lineHeight: 1
          }}>
            {slide.emoji}
          </div>
        ) : null}

        {/* Stat badge */}
        {slide.stat && (
          <div style={{
            background: "rgba(255,255,255,0.22)",
            borderRadius: 20, padding: "6px 18px",
            fontSize: 12, fontWeight: 800, color: "#fff",
            marginBottom: 18, letterSpacing: 0.5,
            border: "1px solid rgba(255,255,255,0.3)"
          }}>
            ✨ {slide.stat}
          </div>
        )}

        {/* Title */}
        <h1 style={{
          fontSize: 28, fontWeight: 900, color: "#fff",
          margin: "0 0 16px", lineHeight: 1.2,
          textShadow: "0 2px 12px rgba(0,0,0,0.15)",
        }}>
          {slide.title}
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: 16, color: "rgba(255,255,255,0.9)",
          lineHeight: 1.65, margin: 0, maxWidth: 320,
        }}>
          {slide.subtitle}
        </p>
      </div>

      {/* Bottom section */}
      <div style={{ width: "100%", maxWidth: 400 }}>

        {/* Dots */}
        <div style={{
          display: "flex", justifyContent: "center",
          gap: 7, marginBottom: 28,
        }}>
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === current ? 24 : 7,
                height: 7, borderRadius: 4,
                background: i === current ? "#fff" : "rgba(255,255,255,0.35)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
            />
          ))}
        </div>

        {/* CTA on last slide */}
        {slide.cta ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <button
              onClick={onDone}
              style={{
                width: "100%", padding: "16px",
                background: "#fff", color: "#667eea",
                border: "none", borderRadius: 14,
                fontSize: 16, fontWeight: 900,
                cursor: "pointer", fontFamily: "var(--font-main)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              }}
            >
              Get Started — It's Free 🚀
            </button>
            <button
              onClick={onDone}
              style={{
                width: "100%", padding: "14px",
                background: "rgba(255,255,255,0.15)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.35)",
                borderRadius: 14,
                fontSize: 15, fontWeight: 700,
                cursor: "pointer", fontFamily: "var(--font-main)",
              }}
            >
              I already have an account
            </button>
          </div>
        ) : (
          <button
            onClick={next}
            style={{
              width: "100%", padding: "16px",
              background: "rgba(255,255,255,0.22)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.35)",
              borderRadius: 14,
              fontSize: 16, fontWeight: 800,
              cursor: "pointer", fontFamily: "var(--font-main)",
            }}
          >
            Next →
          </button>
        )}
      </div>
    </div>
  )
}