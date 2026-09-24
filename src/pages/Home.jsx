import { useState, useEffect } from "react"
import "./Home.css"
import { useTheme } from "../context/ThemeContext"
import { XPBar } from "../components/XPBar"
import PaywallPrompt from "../components/PaywallPrompt"
import AppTour, { isTourDone } from "../components/AppTour"
import { PageTransition } from "../components/LoadingScreen"
import NotificationBell from "../components/NotificationBell"
import DailyQuote from "../components/DailyQuote"
import { db } from "../firebase"
import { getCBTHistory } from "../utils/cbtHistory"
import { getGameState } from "../utils/gamification"
import { collection, query, where, getDocs, updateDoc, doc } from "firebase/firestore"

// Change these in one place
const UPGRADE_PRICE = "₦2,500"
const WHATSAPP_CHANNEL = "https://whatsapp.com/channel/0029Vb7ZQAe90x2qXQY1Rw1K"

const FREE_HAVE = [
  "📅 2 years of past questions (2014 & 2015)",
  "🧪 CBT simulation mode",
  "📚 Study guides for all topics",
  "🎓 AI Tutor",
]

const FREE_MISSING = [
  "📚 18 more years of questions (2005–2013, 2016–2024)",
  "🔥 Hot Topics — questions that repeat every year",
  "📊 Weak Areas — know exactly what to fix",
  "🕐 CBT History — review every attempt",
  "📈 Full Progress analytics",
  "👥 Premium WhatsApp Study Group",
]

const greeting = () => {
  const h = new Date().getHours()
  if (h < 12) return "Good morning"
  if (h < 17) return "Good afternoon"
  return "Good evening"
}

// Optional prop: subjects = the student's 4 JAMB subjects, e.g. ["English", "Maths", "Physics", "Chemistry"]
const Home = ({ onNavigate, isPaid, userData, authUser, subjects = [] }) => {
  const { dark, toggleTheme } = useTheme()

  const [paywallType, setPaywallType] = useState(null)
  const [showTour, setShowTour] = useState(false)
  const [adminMessage, setAdminMessage] = useState(null)
  const [showFullMessage, setShowFullMessage] = useState(false)
  const [cbtCount, setCbtCount] = useState(0)
  const [showFreePrompt, setShowFreePrompt] = useState(false)

  // Upgrade nudge re-appears every 3 CBTs (at 1, 3, 6...)
  const nudgeMilestone = Math.floor(cbtCount / 3)
  const [nudgeDismissed, setNudgeDismissed] = useState(
    () => localStorage.getItem("ee-upgrade-nudge-dismissed") === String(nudgeMilestone)
  )

  // WhatsApp number prompt for existing users
  const [showPhonePrompt, setShowPhonePrompt] = useState(false)
  const [phoneInput, setPhoneInput] = useState("")
  const [savingPhone, setSavingPhone] = useState(false)
  const [phoneError, setPhoneError] = useState("")

  const streak = getGameState().streak || 0

  // CBT count for the upgrade nudge and CBT lock
  useEffect(() => {
    try { setCbtCount(getCBTHistory().length) } catch (e) {}
  }, [])

  // Free-plan prompt, once per session
  useEffect(() => {
    if (isPaid) return
    const sessionKey = "ee-free-prompt-shown"
    if (!sessionStorage.getItem(sessionKey)) {
      const t = setTimeout(() => {
        setShowFreePrompt(true)
        sessionStorage.setItem(sessionKey, "1")
      }, 1500)
      return () => clearTimeout(t)
    }
  }, [isPaid])

  // App tour
  useEffect(() => {
    if (!isTourDone()) {
      const timer = setTimeout(() => setShowTour(true), 800)
      return () => clearTimeout(timer)
    }
  }, [])

  // Unread admin messages
  useEffect(() => {
    if (!authUser?.uid) return
    const checkAdminMessages = async () => {
      try {
        const q = query(
          collection(db, "messages"),
          where("uid", "==", authUser.uid),
          where("fromAdmin", "==", true),
          where("status", "==", "unread")
        )
        const snap = await getDocs(q)
        if (!snap.empty) {
          const msgs = snap.docs.map(d => ({ id: d.id, ...d.data() }))
          msgs.sort((a, b) => {
            const aTime = a.createdAt?.toDate ? a.createdAt.toDate() : new Date(a.createdAt || 0)
            const bTime = b.createdAt?.toDate ? b.createdAt.toDate() : new Date(b.createdAt || 0)
            return bTime - aTime
          })
          setAdminMessage(msgs[0])
        }
      } catch (e) {
        console.error("Admin message check failed:", e)
      }
    }
    checkAdminMessages()
  }, [authUser?.uid])

  // Existing users with no phone number
  useEffect(() => {
    if (!userData || !authUser?.uid) return
    if (!userData.phone) {
      const timer = setTimeout(() => setShowPhonePrompt(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [userData, authUser?.uid])

  const handleDismissAdminMessage = async () => {
    if (!adminMessage) return
    try {
      await updateDoc(doc(db, "messages", adminMessage.id), { status: "read" })
    } catch (e) {}
    setAdminMessage(null)
    setShowFullMessage(false)
  }

  const handleSavePhone = async () => {
    const digits = phoneInput.replace(/\D/g, "")
    if (digits.length < 10 || digits.length > 14) {
      setPhoneError("Please enter a valid WhatsApp number")
      return
    }
    setSavingPhone(true)
    try {
      await updateDoc(doc(db, "users", authUser.uid), { phone: digits })
      setShowPhonePrompt(false)
      setPhoneInput("")
      setPhoneError("")
    } catch (e) {
      setPhoneError("Failed to save. Please try again.")
    }
    setSavingPhone(false)
  }

  const dismissNudge = () => {
    setNudgeDismissed(true)
    localStorage.setItem("ee-upgrade-nudge-dismissed", String(Math.floor(getCBTHistory().length / 3)))
  }

  // Send free users to the paywall, paid users to the feature
  const gated = (type, screen) => () => {
    if (!isPaid) { setPaywallType(type); return }
    onNavigate(screen)
  }

  const firstName =
    userData?.name?.split(" ")[0] ||
    authUser?.displayName?.split(" ")[0] ||
    authUser?.email?.split("@")[0] ||
    "Student"

  const cbtLocked = !isPaid && cbtCount >= 1

  // Subscription expiry warning (last 7 days)
  let expiryBanner = null
  if (userData?.isPaid && userData?.paidAt) {
    const expiry = new Date(new Date(userData.paidAt).getTime() + 30 * 24 * 60 * 60 * 1000)
    const daysLeft = Math.ceil((expiry - new Date()) / (1000 * 60 * 60 * 24))
    if (daysLeft <= 7) {
      expiryBanner = (
        <div className={`hm-alert ${daysLeft <= 3 ? "danger" : "warn"}`}>
          ⏰ Your subscription expires in <strong>{daysLeft} day{daysLeft !== 1 ? "s" : ""}</strong>.
          {daysLeft <= 3 ? " Renew now to keep full access!" : " Renew soon to avoid losing access."}
        </div>
      )
    }
  }

  return (
    <PageTransition>
    <div className="ee-page hm">

      {/* ===== ADMIN MESSAGE: PROMPT ===== */}
      {adminMessage && !showFullMessage && (
        <div className="hm-toast">
          <span className="hm-toast-icon">📩</span>
          <div className="hm-toast-text">
            <div className="hm-toast-title">New message from ExamEdgeNG</div>
            <div className="hm-toast-sub">The team sent you a message</div>
          </div>
          <div className="hm-toast-actions">
            <button className="hm-btn-sm solid" onClick={() => setShowFullMessage(true)}>View</button>
            <button className="hm-btn-sm" onClick={handleDismissAdminMessage}>Skip</button>
          </div>
        </div>
      )}

      {/* ===== ADMIN MESSAGE: FULL VIEW ===== */}
      {adminMessage && showFullMessage && (
        <div className="hm-overlay" style={{ zIndex: 9999 }}>
          <div className="hm-modal">
            <div className="hm-modal-head violet">
              <span className="big">📩</span>
              <div className="hm-modal-title">Message from ExamEdgeNG</div>
              <div className="hm-modal-sub">The team has something to tell you</div>
            </div>
            <div className="hm-modal-body">
              <div className="hm-msg-text">{adminMessage.message}</div>
              <div className="hm-modal-note">Sent by ExamEdgeNG Admin</div>
              <button className="hm-cta violet" onClick={handleDismissAdminMessage}>Got it ✓</button>
            </div>
          </div>
        </div>
      )}

      {/* ===== FREE PLAN PROMPT ===== */}
      {showFreePrompt && !isPaid && (
        <div className="hm-overlay sheet">
          <div className="hm-modal">
            <div className="hm-modal-head violet">
              <span className="big">🔓</span>
              <div className="hm-modal-title">You're on the Free Plan</div>
              <div className="hm-modal-sub">Here's what you're missing out on</div>
            </div>
            <div className="hm-modal-body">
              <div className="hm-box have">
                <div className="hm-box-title" style={{ color: "var(--success)" }}>✅ What you have now:</div>
                {FREE_HAVE.map((item, i) => <div key={i} className="hm-line">{item}</div>)}
              </div>
              <div className="hm-box miss">
                <div className="hm-box-title" style={{ color: "var(--primary)" }}>
                  🔒 What you're missing — unlock for {UPGRADE_PRICE}:
                </div>
                {FREE_MISSING.map((item, i) => <div key={i} className="hm-line">{item}</div>)}
                <div className="hm-modal-note" style={{ marginTop: 8, marginBottom: 0 }}>
                  One-time payment · Bank transfer · No hidden fees
                </div>
              </div>
              <button className="hm-cta violet" style={{ marginTop: 6 }}
                onClick={() => { setShowFreePrompt(false); onNavigate("upgrade") }}>
                Upgrade Now — {UPGRADE_PRICE} 🚀
              </button>
              <button className="hm-ghost" onClick={() => setShowFreePrompt(false)}>
                Continue with free plan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===== WHATSAPP NUMBER PROMPT ===== */}
      {showPhonePrompt && !adminMessage && (
        <div className="hm-overlay" style={{ zIndex: 9998 }}>
          <div className="hm-modal">
            <div className="hm-modal-head wa">
              <span className="big">📱</span>
              <div className="hm-modal-title">Add Your WhatsApp Number</div>
              <div className="hm-modal-sub">We've updated our login system</div>
            </div>
            <div className="hm-modal-body">
              <p className="hm-modal-p">
                You can now log in with your <strong>WhatsApp number</strong> instead of your email.
                Add your number below so you can use it next time.
              </p>
              <input
                className={`hm-input ${phoneError ? "error" : ""}`}
                type="tel"
                value={phoneInput}
                onChange={e => setPhoneInput(e.target.value)}
                placeholder="e.g. 08012345678"
              />
              {phoneError && <p className="hm-input-error">{phoneError}</p>}
              <button className="hm-cta wa" onClick={handleSavePhone}
                disabled={savingPhone || !phoneInput.trim()}>
                {savingPhone ? "Saving..." : "Save WhatsApp Number ✓"}
              </button>
              <p className="hm-modal-note">📌 This is required to continue using your account.</p>
            </div>
          </div>
        </div>
      )}

      {/* ===== HEADER ===== */}
      <header className="ee-header">
        <div>
          <div className="hm-hello">{greeting()}, {firstName} 👋</div>
          <span className="ee-logo">ExamEdgeNG</span>
        </div>
        <div className="hm-header-actions">
          <NotificationBell userId={authUser?.uid} onNavigate={onNavigate} />
          <button
            className="ee-theme-toggle"
            onClick={toggleTheme}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      </header>

      <div className="ee-content">
        {expiryBanner}

        <div className="hm-subrow">
          <p className="ee-subtitle" style={{ marginBottom: 0 }}>Your JAMB prep companion 🇳🇬</p>
          {isPaid ? (
            <span className="hm-plan paid">Full Access ✅</span>
          ) : (
            <button className="hm-plan free" onClick={() => onNavigate("upgrade")}>
              Free Plan 🔒 Upgrade
            </button>
          )}
        </div>

        <DailyQuote />

        <XPBar onNavigate={onNavigate} />

        {/* Streak banner */}
        <div className="hm-streak">
          <span className="hm-streak-icon">🔥</span>
          <div className="hm-streak-text">
            <div className="hm-streak-title">
              {streak > 0 ? `${streak}-day streak. Keep it going!` : "Keep studying daily!"}
            </div>
            <div className="hm-streak-sub">Consistent practice is the key to passing</div>
          </div>
          {streak > 0 && <span className="hm-streak-count">{streak}</span>}
        </div>

        {/* Upgrade nudge — free users after their first CBT */}
        {!isPaid && cbtCount >= 1 && !nudgeDismissed && (
          <div className="hm-nudge">
            <button className="hm-nudge-x" onClick={dismissNudge} aria-label="Dismiss">✕</button>
            <div className="hm-nudge-row">
              <span className="hm-nudge-emoji">📊</span>
              <div>
                <div className="hm-nudge-title">
                  You've used your free CBT attempt. Unlock unlimited practice
                </div>
                <div className="hm-nudge-text">
                  You completed your free CBT attempt with <strong>2014 & 2015</strong> questions.
                  Upgrade to take unlimited CBT exams across all <strong>20 years</strong>,
                  plus Hot Topics, Weak Areas tracking and CBT History.
                </div>
                <div className="hm-nudge-buttons">
                  <button className="hm-nudge-cta" onClick={() => onNavigate("upgrade")}>
                    Unlock All 20 Years — {UPGRADE_PRICE} →
                  </button>
                  <button className="hm-nudge-later" onClick={dismissNudge}>Not now</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* JAMB info card */}
        <div className="hm-jamb">
          <div className="hm-jamb-label">JAMB UTME Prep</div>
          <div className="hm-jamb-title">Get ready for exam day</div>
          <div className="hm-jamb-chips">
            {subjects.length > 0
              ? subjects.map(s => <span key={s}>{s}</span>)
              : ["4 subjects", "180 questions", "2 hours"].map(s => <span key={s}>{s}</span>)}
          </div>
        </div>

        <span className="ee-label">Jump into</span>

        {/* AI Tutor */}
        <button className="hm-banner soft" onClick={() => onNavigate("aiTutor")}>
          <span className="hm-banner-emoji">🎓</span>
          <span className="hm-banner-body">
            <span className="hm-banner-title">AI Tutor</span>
            <span className="hm-banner-sub">Ask me what to study today. I know your weak areas</span>
          </span>
          <span className="hm-banner-go">›</span>
        </button>

        <div className="hm-grid">
          {/* CBT hero */}
          <button
            className="hm-card hm-hero"
            onClick={() => {
              if (cbtLocked) { setPaywallType("cbtMode"); return }
              onNavigate("cbtSubjectSelect")
            }}
          >
            <span className="hm-hero-emoji">🧪</span>
            <span className="hm-hero-body">
              <span className="hm-hero-title">CBT Mode {cbtLocked && "🔒"}</span>
              <span className="hm-hero-sub">
                {cbtLocked ? "Upgrade for unlimited CBTs" : "Full timed exam simulation"}
              </span>
            </span>
            <span className="hm-hero-go">{cbtLocked ? "Unlock" : "Start"}</span>
          </button>

          <button className="hm-card hm-tile" onClick={() => onNavigate("subjectSelect")}>
            <span className="hm-emoji tone-primary">📚</span>
            <span className="hm-tile-title">Study Mode</span>
            <span className="hm-tile-sub">Practice by topic</span>
            <span className="hm-arrow" aria-hidden="true">›</span>
          </button>

          <button className="hm-card hm-tile" onClick={gated("hotTopics", "hotTopics")}>
            <span className="hm-emoji tone-warning">🔥</span>
            <span className="hm-tile-title">Hot Topics {!isPaid && "🔒"}</span>
            <span className="hm-tile-sub">Most repeated questions</span>
            <span className="hm-arrow" aria-hidden="true">›</span>
          </button>

          <button className="hm-card hm-tile" onClick={gated("weakAreas", "weak")}>
            <span className="hm-emoji tone-accent">🎯</span>
            <span className="hm-tile-title">Weak Areas {!isPaid && "🔒"}</span>
            <span className="hm-tile-sub">Fix what's holding you back</span>
            <span className="hm-arrow" aria-hidden="true">›</span>
          </button>

          <button className="hm-card hm-tile" onClick={gated("cbtHistory", "cbtHistory")}>
            <span className="hm-emoji tone-success">🕐</span>
            <span className="hm-tile-title">CBT History {!isPaid && "🔒"}</span>
            <span className="hm-tile-sub">Review your past attempts</span>
            <span className="hm-arrow" aria-hidden="true">›</span>
          </button>
        </div>

        {/* Classroom */}
        <button className="hm-banner soft" onClick={() => onNavigate("classroom")}>
          <span className="hm-banner-emoji">🏫</span>
          <span className="hm-banner-body">
            <span className="hm-banner-title">Classroom {!isPaid && "🔒"}</span>
            <span className="hm-banner-sub">Study live with friends. Same question, same time</span>
          </span>
          <span className="hm-banner-go">›</span>
        </button>

        <span className="ee-label" style={{ marginTop: 22 }}>Track yourself</span>

        <button className="hm-card hm-row hm-row-tight" onClick={gated("progress", "progress")}>
          <span className="hm-emoji tone-primary">📈</span>
          <span className="hm-row-body">
            <span className="hm-tile-title">My Progress {!isPaid && "🔒"}</span>
            <span className="hm-tile-sub">See your scores and weak topics</span>
          </span>
          <span className="hm-arrow-inline" aria-hidden="true">›</span>
        </button>

        <button className="hm-card hm-row" onClick={() => onNavigate("leaderboard")}>
          <span className="hm-emoji tone-warning">🏆</span>
          <span className="hm-row-body">
            <span className="hm-tile-title">Leaderboard</span>
            <span className="hm-tile-sub">See how you rank against others</span>
          </span>
          <span className="hm-arrow-inline" aria-hidden="true">›</span>
        </button>

        {/* Referrals */}
        <button className="hm-banner green" onClick={() => onNavigate("referrals")}>
          <span className="hm-banner-emoji">💰</span>
          <span className="hm-banner-body">
            <span className="hm-banner-title">Refer Friends. Earn ₦500 at Launch 🚀</span>
            <span className="hm-banner-sub">Share your code now · Get paid when we fully launch</span>
          </span>
          <span className="hm-banner-go">›</span>
        </button>

        {/* Upgrade */}
        {!isPaid && (
          <button className="hm-banner violet" onClick={() => onNavigate("upgrade")}>
            <span className="hm-banner-emoji">🚀</span>
            <span className="hm-banner-body">
              <span className="hm-banner-title">Unlock Full Access</span>
              <span className="hm-banner-sub">All 20 years · Hot Topics · Weak Areas</span>
            </span>
            <span className="hm-banner-price">{UPGRADE_PRICE} ›</span>
          </button>
        )}

        {/* WhatsApp channel */}
        <button className="hm-banner wa" onClick={() => window.open(WHATSAPP_CHANNEL, "_blank")}>
          <span className="hm-banner-emoji">📢</span>
          <span className="hm-banner-body">
            <span className="hm-banner-title">Follow Our WhatsApp Channel</span>
            <span className="hm-banner-sub">Get exam news, app updates and study tips</span>
          </span>
          <span className="hm-banner-go">›</span>
        </button>

        {/* Settings */}
        <button className="hm-card hm-row" onClick={() => onNavigate("settings")}>
          <span className="hm-emoji tone-primary">⚙️</span>
          <span className="hm-row-body">
            <span className="hm-tile-title">Settings</span>
            <span className="hm-tile-sub">Account, plan, referrals and support</span>
          </span>
          <span className="hm-arrow-inline" aria-hidden="true">›</span>
        </button>
      </div>

      {showTour && <AppTour onDone={() => setShowTour(false)} onNavigate={onNavigate} />}

      {paywallType && (
        <PaywallPrompt
          type={paywallType}
          onUpgrade={() => { setPaywallType(null); onNavigate("upgrade") }}
          onClose={() => setPaywallType(null)}
        />
      )}
    </div>
    </PageTransition>
  )
}

export default Home