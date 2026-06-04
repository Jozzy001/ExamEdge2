import { useState, useEffect, useRef } from "react"

const slides = [
  {
    emoji: null,
    logo: true,
    title: "Welcome to ExamEdgeNG",
    subtitle: "The smartest way to prepare for your Post-UTME and JAMB exams",
    bg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    accent: "#fff",
  },
  {
    emoji: "📚",
    title: "20 Years of Past Questions",
    subtitle: "Practice with real past questions from 2005 to 2024. Know exactly what to expect on exam day.",
    bg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    accent: "#fff",
    stat: "3,000+ Questions",
  },
  {
    emoji: "🧪",
    title: "Real CBT Simulation",
    subtitle: "Practice in timed exam conditions — same format as the actual exam.",
    bg: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    accent: "#fff",
    stat: "Timed & Scored",
  },
  {
    emoji: "🔥",
    title: "Hot Topics & Weak Areas",
    subtitle: "Know the most repeated questions and focus on exactly what you're struggling with.",
    bg: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    accent: "#fff",
    stat: "Smart Analytics",
  },
  {
    emoji: "🚀",
    title: "Start Free Today",
    subtitle: "2 years of questions are completely free. Upgrade to unlock all 20 years for just ₦2,500.",
    bg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    accent: "#fff",
    cta: true,
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

  // Touch/swipe support
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
      {/* Skip button */}
      {current < slides.length - 1 && (
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

      {/* Main content */}
      <div style={{
        flex: 1, display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        textAlign: "center", opacity: animating ? 0 : 1,
        transform: animating ? "translateY(10px)" : "translateY(0)",
        transition: "opacity 0.2s, transform 0.2s",
        width: "100%", maxWidth: 400,
      }}>
        {/* Logo or Emoji */}
        {slide.logo ? (
          <picture>
              <source srcSet="/images/logo.webp" type="image/webp" />
              <img src="/images/logo.png" alt="ExamEdgeNG" style={{ width: 140, height: 140, objectFit: "contain", marginBottom: 24 }} />
            </picture>
        ) : (
          <div style={{
            fontSize: 80, marginBottom: 24,
            filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.2))",
          }}>
            {slide.emoji}
          </div>
        )}

        {/* Stat badge */}
        {slide.stat && (
          <div style={{
            background: "rgba(255,255,255,0.25)",
            borderRadius: 20, padding: "6px 16px",
            fontSize: 13, fontWeight: 800, color: "#fff",
            marginBottom: 16, letterSpacing: 0.5,
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
          lineHeight: 1.6, margin: 0, maxWidth: 320,
        }}>
          {slide.subtitle}
        </p>
      </div>

      {/* Bottom section */}
      <div style={{ width: "100%", maxWidth: 400 }}>
        {/* Dots */}
        <div style={{
          display: "flex", justifyContent: "center",
          gap: 8, marginBottom: 32,
        }}>
          {slides.map((_, i) => (
            <div
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === current ? 24 : 8,
                height: 8, borderRadius: 4,
                background: i === current ? "#fff" : "rgba(255,255,255,0.4)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
            />
          ))}
        </div>

        {/* CTA buttons on last slide */}
        {slide.cta ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <button
              onClick={onDone}
              style={{
                width: "100%", padding: "16px",
                background: "#fff", color: "#667eea",
                border: "none", borderRadius: 14,
                fontSize: 16, fontWeight: 800,
                cursor: "pointer", fontFamily: "var(--font-main)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
              }}
            >
              Get Started — It's Free 🚀
            </button>
            <button
              onClick={onDone}
              style={{
                width: "100%", padding: "14px",
                background: "rgba(255,255,255,0.2)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.4)",
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
              background: "rgba(255,255,255,0.25)",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.4)",
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