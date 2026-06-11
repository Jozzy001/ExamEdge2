import { useState, useEffect, useRef } from "react"
import { getCBTHistory } from "../utils/cbtHistory"
import { getGameState, getDaysToExam } from "../utils/gamification"
import STUDY_GUIDES from "../data/studyGuides"

// ============================================================
// HELPERS — extract clean text from study guide sections
// ============================================================

const SKIP_TYPES = ["antonyms_vault","synonyms_vault","idioms_vault","english_skills_vault","maths_vault","physics_vault","chemistry_vault","biology_vault"]

const extractGuideText = (guide) => {
  if (!guide) return null
  const lines = []
  lines.push(`📘 ${guide.title}`)
  if (guide.sections) {
    guide.sections.forEach(section => {
      if (SKIP_TYPES.includes(section.type)) return
      if (section.heading) lines.push(`\n<strong>${section.heading}</strong>`)
      if (section.type === "text" && section.content) lines.push(section.content)
      if (section.type === "tip" && section.content) lines.push(`💡 <em>${section.content}</em>`)
      if (section.type === "steps" && section.items) {
        section.items.forEach((item, i) => lines.push(`${i + 1}. ${item}`))
      }
      if (section.type === "cards" && section.items) {
        section.items.slice(0, 5).forEach(card => lines.push(`• <strong>${card.title}:</strong> ${card.body}`))
      }
      if (section.type === "warning" && section.items) {
        lines.push("⚠️ Watch out:")
        section.items.slice(0, 3).forEach(item => lines.push(`• ${item}`))
      }
    })
  }
  if (guide.summary) lines.push(guide.summary)
  if (guide.keyPoints) {
    lines.push("\n<strong>Key Points:</strong>")
    guide.keyPoints.slice(0, 5).forEach(p => lines.push(`• ${p}`))
  }
  return lines.join("\n")
}

// Find matching study guide for a topic name (fuzzy match)
const findGuide = (topicQuery) => {
  if (!topicQuery) return null
  const q = topicQuery.toLowerCase().trim()
    .replace(/^(what is|what are|explain|tell me about|teach me|how does|define|what do you know about)\s+/i, "")
    .replace(/[?!.]/g, "")
    .trim()

  if (!q || q.length < 2) return null

  // Exact match first
  const exact = Object.keys(STUDY_GUIDES).find(k => k.toLowerCase() === q)
  if (exact) return { key: exact, guide: STUDY_GUIDES[exact] }

  // Partial match — guide key contains query or query contains guide key
  const partial = Object.keys(STUDY_GUIDES).find(k =>
    k.toLowerCase().includes(q) || q.includes(k.toLowerCase())
  )
  if (partial) return { key: partial, guide: STUDY_GUIDES[partial] }

  // Word match — any significant word in query matches guide key
  const words = q.split(/\s+/).filter(w => w.length > 3)
  const wordMatch = Object.keys(STUDY_GUIDES).find(k =>
    words.some(w => k.toLowerCase().includes(w))
  )
  if (wordMatch) return { key: wordMatch, guide: STUDY_GUIDES[wordMatch] }

  // Content search — look inside guide sections for the query word
  const contentMatch = Object.entries(STUDY_GUIDES).find(([key, guide]) => {
    if (!guide.sections) return false
    return guide.sections.some(section => {
      if (section.type === "cards" && section.items) {
        return section.items.some(card =>
          card.title?.toLowerCase().includes(q) || card.body?.toLowerCase().includes(q)
        )
      }
      if (section.content) return section.content.toLowerCase().includes(q)
      return false
    })
  })
  if (contentMatch) return { key: contentMatch[0], guide: contentMatch[1] }

  // Single word search — any word matches any word in guide key
  const singleWords = q.split(/\s+/).filter(w => w.length > 2)
  const singleMatch = Object.keys(STUDY_GUIDES).find(k =>
    singleWords.some(w => k.toLowerCase().split(/\s+/).some(kw => kw.startsWith(w) || w.startsWith(kw)))
  )
  if (singleMatch) return { key: singleMatch, guide: STUDY_GUIDES[singleMatch] }

  return null
}

// Get all topics for a subject
const getSubjectTopics = (subject) => {
  return Object.entries(STUDY_GUIDES)
    .filter(([, g]) => g.subject === subject || g.subject?.toLowerCase() === subject?.toLowerCase())
    .map(([key]) => key)
}

// ============================================================
// STUDENT CONTEXT BUILDER
// ============================================================

const buildStudentContext = (userData, cbtHistory, gameState, faculty, facultySubjects, daysToExam) => {
  const topicStats = {}
  cbtHistory.forEach(record => {
    if (!record.answers) return
    record.answers.forEach(a => {
      const key = `${a.subject}||${a.topic}`
      if (!topicStats[key]) topicStats[key] = { score: 0, total: 0, subject: a.subject, topic: a.topic }
      topicStats[key].total++
      if (a.isCorrect) topicStats[key].score++
    })
  })

  const weakTopics = Object.values(topicStats)
    .filter(t => t.total >= 2 && (t.score / t.total) < 0.5)
    .sort((a, b) => (a.score / a.total) - (b.score / b.total))
    .slice(0, 5)

  const strongTopics = Object.values(topicStats)
    .filter(t => t.total >= 3 && (t.score / t.total) >= 0.7)
    .sort((a, b) => (b.score / b.total) - (a.score / a.total))
    .slice(0, 3)

  const recent = cbtHistory.slice(0, 5)
  const avgScore = recent.length > 0
    ? Math.round(recent.reduce((s, r) => s + (r.percentage || 0), 0) / recent.length)
    : 0

  const trend = recent.length >= 2
    ? recent[0].percentage > recent[recent.length - 1].percentage ? "improving" : "declining"
    : "no trend yet"

  return {
    name: userData?.name?.split(" ")[0] || "Student",
    avgScore,
    trend,
    weakTopics,
    strongTopics,
    streak: gameState.streak,
    daysToExam,
    level: gameState.levelInfo.current.title,
    totalCBTs: cbtHistory.length,
    faculty,
    subjects: facultySubjects || [],
    recentScores: recent.map(r => r.percentage || 0),
  }
}

// ============================================================
// SMART RESPONSE ENGINE — now powered by your study guides
// ============================================================

const getSmartResponse = (userMsg, ctx, mode, lastIntent, setLastIntent) => {
  const msg = userMsg.toLowerCase().trim()
  const { name, avgScore, weakTopics, strongTopics, streak, daysToExam, subjects, totalCBTs, trend } = ctx

  // ── YES / NO FOLLOW-UP HANDLING ──
  const isYes = ["yes", "yeah", "yep", "sure", "ok", "okay", "please", "go ahead", "show me", "yes please"].includes(msg)
  const isNo = ["no", "nope", "not now", "skip", "later"].includes(msg)

  if (isYes && lastIntent) {
    const guideMatch = findGuide(lastIntent)
    if (guideMatch) {
      if (setLastIntent) setLastIntent(null)
      return extractGuideText(guideMatch.guide)
    }
  }
  if (isNo && lastIntent) {
    if (setLastIntent) setLastIntent(null)
    return `No problem ${name}. Just ask me anything else — a topic to explain, your study plan, or how you're doing.`
  }

  // ── DIRECT WORD QUESTION — antonym/synonym of a specific word ──
  const antonymOf = msg.match(/antonym of (\w+)/i) || msg.match(/opposite of (\w+)/i)
  const synonymOf = msg.match(/synonym of (\w+)/i) || msg.match(/meaning of (\w+)/i) || msg.match(/what does (\w+) mean/i)

  if (antonymOf) {
    const word = antonymOf[1]
    // Search Antonyms guide cards for this word
    const antGuide = STUDY_GUIDES["Antonyms"]
    if (antGuide) {
      const cards = antGuide.sections?.find(s => s.type === "cards")?.items || []
      const match = cards.find(c => c.title.toLowerCase().includes(word.toLowerCase()))
      if (match) {
        if (setLastIntent) setLastIntent(null)
        return `The antonym of <strong>${word}</strong>:\n\n${match.title}\n${match.body}\n\n💡 ${antGuide.sections?.find(s => s.type === "tip")?.content || "Build your vocabulary daily."}`
      }
    }
    // Common antonyms not in cards
    const commonAntonyms = {
      diligent: "lazy / indolent", loquacious: "taciturn / silent", kindle: "extinguish",
      vacillate: "decisive", coarse: "refined", valedictory: "inaugural",
      futile: "successful / fruitful", obsolete: "current / modern", mundane: "extraordinary",
      perfunctory: "thorough / diligent", plausible: "implausible / unlikely"
    }
    const direct = commonAntonyms[word.toLowerCase()]
    if (direct) {
      if (setLastIntent) setLastIntent("Antonyms")
      return `The antonym of <strong>${word}</strong> is <strong>${direct}</strong>.\n\nWant me to show you the full Antonyms guide with all the common pairs UNIBEN tests?`
    }
    return `I don't have a specific antonym listed for "<strong>${word}</strong>" but I can show you all the antonym pairs UNIBEN has tested. Type "explain antonyms" for the full guide.`
  }

  if (synonymOf) {
    const word = synonymOf[1]
    const synGuide = STUDY_GUIDES["Synonyms"]
    if (synGuide) {
      const cards = synGuide.sections?.find(s => s.type === "cards")?.items || []
      const match = cards.find(c => c.title.toLowerCase().includes(word.toLowerCase()))
      if (match) {
        return `<strong>${match.title}</strong>\n${match.body}\n\n💡 ${synGuide.sections?.find(s => s.type === "tip")?.content || "Build your vocabulary daily."}`
      }
    }
    if (setLastIntent) setLastIntent("Synonyms")
    return `I don't have a specific synonym entry for "<strong>${word}</strong>". Want me to show you all the high-frequency words UNIBEN tests in Synonyms?`
  }

  // ── TOPIC EXPLANATION — check study guides first ──
  const subjectKeys = ["English", "Mathematics", "Physics", "Chemistry", "Biology",
    "Government", "Economics", "Commerce", "Accounts", "Literature", "CRS", "IRK", "Visual Arts"]

  // Try to find an exact study guide topic match
  const guideMatch = findGuide(userMsg)
  if (guideMatch && (msg.includes("explain") || msg.includes("teach") ||
      msg.includes("what is") || msg.includes("what are") || msg.includes("what do") ||
      msg.includes("how does") || msg.includes("how do") || msg.includes("define") ||
      msg.includes("tell me") || msg.includes("understand") ||
      mode === "explain" || userMsg.length < 40)) {
    const guideText = extractGuideText(guideMatch.guide)
    const studentStat = ctx.weakTopics.find(t => t.topic === guideMatch.key)
    const isWeak = studentStat && (studentStat.score / studentStat.total) < 0.5
    return `${isWeak ? `${name}, this is one of your weak areas — good that you're working on it. ` : ""}Here's what you need to know:\n\n${guideText}\n\n${isWeak ? "\nOpen Study Mode → " + (guideMatch.guide.subject || "") + " → " + guideMatch.key + " to practice these questions." : ""}`
  }

  // ── SUBJECT-LEVEL QUESTION — list topics ──
  for (const subject of subjectKeys) {
    if (msg.includes(subject.toLowerCase()) && (msg.includes("topic") || msg.includes("cover") || msg.includes("what") || msg.includes("list"))) {
      const topics = getSubjectTopics(subject)
      if (topics.length > 0) {
        return `Here are all the <strong>${subject}</strong> topics in your study guides:\n\n${topics.map(t => `• ${t}`).join("\n")}\n\nTap any topic in Study Mode to see the full guide and practice questions. Which one do you want me to explain?`
      }
    }
  }

  // ── WEAK AREAS ──
  if (msg.includes("weak") || msg.includes("struggling") || msg.includes("failing") || msg.includes("improve")) {
    if (totalCBTs === 0) {
      return `${name}, I can't show you real weak areas yet because you haven't taken a CBT test. Take one now — your results will automatically appear in Weak Areas. The more CBTs you take, the more precisely I can target what's failing you.`
    }
    if (weakTopics.length === 0) {
      return `${name}, based on your CBT history, you're scoring above 50% in all topics I've tracked so far. That's good! Keep taking CBTs regularly. Your current average is <strong>${avgScore}%</strong>.`
    }
    const list = weakTopics.map((t, i) => {
      const pct = Math.round((t.score / t.total) * 100)
      const match = findGuide(t.topic)
      const tip = match?.guide?.sections?.find(s => s.type === "tip")?.content ||
                  match?.guide?.keyPoints?.[0] || "Practice this in Study Mode."
      return `<strong>${i+1}. ${t.topic}</strong> (${t.subject}) — ${pct}% accuracy\n💡 ${tip}`
    }).join("\n\n")

    return `${name}, here are your ${weakTopics.length} weak areas from your CBT history:\n\n${list}\n\nFix the first one before moving to the second. Want me to explain any of these topics?`
  }

  // ── STUDY PLAN / TODAY ──
  if (msg.includes("plan") || msg.includes("today") || msg.includes("what should") || msg.includes("study")) {
    if (totalCBTs === 0) {
      return `${name}, you haven't taken a CBT test yet, so I can't personalise your plan fully.\n\n<strong>Step 1 (now):</strong> Take a full CBT with all your subjects.\n<strong>Step 2 (after):</strong> Come back here and I'll build you a precise daily plan based on exactly what you got wrong.\n\nMost students waste time studying topics they already know. Your CBT result tells me exactly what to focus on.`
    }

    const topWeak = weakTopics.slice(0, 2)
    const dayPlan = daysToExam !== null && daysToExam <= 7
      ? `⚠️ Only <strong>${daysToExam} days left</strong>. No new topics — drill weak areas only.`
      : daysToExam
      ? `You have <strong>${daysToExam} days</strong>. Enough time if you stay consistent.`
      : "Set your exam date in the XP bar so I can give you better timing advice."

    const planItems = topWeak.length > 0
      ? topWeak.map((t, i) => {
          const label = i === 0 ? "Morning (30-40 mins)" : "Afternoon (20-30 mins)"
          const pct = Math.round((t.score / t.total) * 100)
          return `<strong>${label}:</strong>\n→ Drill <strong>${t.topic}</strong> in Study Mode (${t.subject}) — you're at ${pct}% here`
        }).join("\n\n")
      : `<strong>Morning:</strong>\n→ Open Study Mode and drill your strongest subject's hardest topics`

    return `${name}, here's your plan for today:\n\n${dayPlan}\n\n${planItems}\n\n<strong>Evening (25 mins):</strong>\n→ Full CBT with all subjects. Target: beat your current ${avgScore}%.\n\n<strong>Rule for today:</strong> Review every wrong answer in CBT History before sleeping.`
  }

  // ── READINESS / SCORE ──
  if (msg.includes("ready") || msg.includes("predict") || msg.includes("pass") || msg.includes("chance") || msg.includes("score")) {
    if (totalCBTs === 0) {
      return `${name}, I can't predict your score yet — you haven't taken any CBT tests. Take at least 3 CBTs first, then come back for a realistic readiness assessment.`
    }
    const predicted = Math.min(Math.max(avgScore + (trend === "improving" ? 5 : trend === "declining" ? -3 : 0), 0), 100)
    const statusText = predicted >= 65
      ? `🟢 <strong>Strong position.</strong> You're likely to pass based on current performance.`
      : predicted >= 55
      ? `🟡 <strong>Borderline.</strong> You can pass but need consistent improvement.`
      : `🔴 <strong>At risk.</strong> Focused drilling of weak areas is essential right now.`

    return `${name}, here's your honest readiness assessment:\n\n<strong>Predicted Post-UTME score: ${predicted}%</strong>\n\n${statusText}\n\n<strong>Your data:</strong>\n• Average across ${totalCBTs} CBT${totalCBTs !== 1 ? "s" : ""}: ${avgScore}%\n• Score trend: ${trend}\n• Weak topics: ${weakTopics.length}\n\n${weakTopics.slice(0, 2).map(t => `→ Fix ${t.topic} — your biggest opportunity`).join("\n") || "→ Keep drilling all subjects daily"}\n\n${daysToExam ? `<strong>${daysToExam} days left.</strong> Stay consistent.` : "Set your exam date for a countdown plan."}`
  }

  // ── STREAK / MOTIVATION ──
  if (msg.includes("streak") || msg.includes("motivat") || msg.includes("tired") || msg.includes("give up")) {
    if (streak === 0) {
      return `${name}, your streak is at 0. That's okay — but students who study daily improve 10–15% faster than those who cram.\n\nStart fresh today. One CBT or one Study Mode session. That's it. Tomorrow will be easier.`
    }
    return `${name}, you're on a <strong>${streak}-day streak</strong>. That's genuine consistency — most students give up before day 7.\n\nYour average is <strong>${avgScore}%</strong>. Keep going.`
  }

  // ── EXAM COUNTDOWN ──
  if (msg.includes("day") || msg.includes("countdown") || msg.includes("time left") || msg.includes("exam date")) {
    if (!daysToExam && daysToExam !== 0) {
      return `${name}, you haven't set your exam date yet. Tap the XP bar at the top of the home screen and set it. Once set, I can give you a precise countdown plan.`
    }
    const intensity = daysToExam <= 3 ? "FINAL SPRINT" : daysToExam <= 7 ? "LAST WEEK" : daysToExam <= 14 ? "TWO WEEKS OUT" : "STEADY PREP"
    const dailyTarget = daysToExam <= 7 ? "2 CBTs per day + weak area drills" : "1 CBT per day + 1 weak topic"
    return `<strong>${intensity} — ${daysToExam} days to go.</strong>\n\nYour daily target: <strong>${dailyTarget}</strong>\n\n${daysToExam > 7
      ? `• Drill your weak topics one by one\n• Take a full CBT daily\n• Review every wrong answer before sleeping\n• Last 3 days: Hot Topics only`
      : `• Each day: weak topic drill + full CBT\n• Review EVERY wrong answer\n• Final 2 days: Hot Topics revision only`}\n\nCurrent average: <strong>${avgScore}%</strong>. ${avgScore >= 60 ? "Good position. Stay consistent." : "Focus on weak areas — that's where marks are lost."}`
  }

  // ── HOT TOPICS ──
  if (msg.includes("hot topic") || msg.includes("repeated") || msg.includes("common") || msg.includes("likely")) {
    const subjectTips = subjects.slice(0, 4).map(subj => {
      const topics = getSubjectTopics(subj)
      if (topics.length === 0) return null
      const top = topics[0]
      const guide = STUDY_GUIDES[top]
      const tip = guide?.sections?.find(s => s.type === "tip")?.content || guide?.keyPoints?.[0] || ""
      return `<strong>${subj}:</strong> ${top}${tip ? `\n💡 ${tip.slice(0, 100)}...` : ""}`
    }).filter(Boolean).join("\n\n")

    return `${name}, here are the highest-priority topics from your study guides:\n\n${subjectTips}\n\nOpen Hot Topics from the home screen for past questions that repeated across multiple UNIBEN papers.`
  }

  // ── HOW TO USE APP ──
  if (msg.includes("how") && (msg.includes("app") || msg.includes("use") || msg.includes("feature"))) {
    return `Here's how to get maximum value from ExamEdgeNG:\n\n<strong>Daily routine that works:</strong>\n1. Ask me: "What should I study today?" → get your personalised plan\n2. Open Study Mode → drill one weak topic (20 mins)\n3. Take a full CBT with all subjects (timed)\n4. Review every wrong answer in CBT History\n\n<strong>Best features:</strong>\n• <strong>Hot Topics</strong> — questions that repeated across multiple UNIBEN papers\n• <strong>Weak Areas</strong> — auto-tracks every wrong answer\n• <strong>CBT History</strong> — review past attempts, spot your patterns\n• <strong>Study Mode</strong> — full guides + explanations before questions\n\nConsistency beats cramming. One CBT daily + reviewing answers = the fastest path to a passing score.`
  }

  // ── DEFAULT — suggest topic explanation ──
  const contextHint = totalCBTs === 0
    ? `You haven't taken a CBT yet — that's the single most important first step.`
    : weakTopics.length > 0
    ? `Your biggest opportunity right now is <strong>${weakTopics[0].topic}</strong> (${weakTopics[0].subject}) where you're at ${Math.round((weakTopics[0].score/weakTopics[0].total)*100)}%.`
    : `Your average is <strong>${avgScore}%</strong> — keep drilling to push higher.`

  return `${name}, I'm ready to help. ${contextHint}\n\nJust name any topic — like "Trigonometry", "Comprehension", "Organic Chemistry", "Ecology" — and I'll pull up the full study guide for it with exam tips and UNIBEN-specific advice.`
}

// ============================================================
// AI TUTOR COMPONENT
// ============================================================

const AITutor = ({ onNavigate, onBack, userData, authUser, isPaid, faculty, facultySubjects }) => {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [mode, setMode] = useState("coach")
  const [studentCtx, setStudentCtx] = useState(null)
  const [quickBtns, setQuickBtns] = useState([])
  const [lastIntent, setLastIntent] = useState(null) // tracks follow-up context
  const chatEndRef = useRef(null)

  useEffect(() => {
    const cbtHistory = getCBTHistory()
    const gameState = getGameState()
    const daysToExam = getDaysToExam()
    const ctx = buildStudentContext(userData, cbtHistory, gameState, faculty, facultySubjects || [], daysToExam)
    setStudentCtx(ctx)
    initMode("coach", ctx)
  }, [])

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping])

  const initMode = (m, ctx) => {
    const c = ctx || studentCtx
    if (!c) return

    const welcomes = {
      coach: c.totalCBTs === 0
        ? `Hi ${c.name}! 👋 I'm your personal Post-UTME tutor. I've studied every topic in your study guides. Before I can help you properly, take a CBT test first — that gives me your real data to work with. Want to start one now?`
        : `Hi ${c.name}! 👋 I can see your data — you're at <strong>${c.avgScore}%</strong> average${c.daysToExam !== null ? ` with <strong>${c.daysToExam} days</strong> to your exam` : ""}. ${c.weakTopics.length > 0 ? `You have <strong>${c.weakTopics.length} weak topic${c.weakTopics.length !== 1 ? "s" : ""}</strong> that could cost you marks.` : "Your scores look solid — let's push higher."} What do you need?`,
      explain: `Which topic should I explain? I have detailed guides for every subject — English, Maths, Physics, Chemistry, Biology, Government, Economics and more. Just name a topic and I'll teach it to you.`,
      ready: `Let me assess your exam readiness honestly. ${c.totalCBTs === 0 ? "You'll need to take at least one CBT first so I have real data." : `Based on your ${c.totalCBTs} CBT${c.totalCBTs !== 1 ? "s" : ""}, I can predict your likely Post-UTME score.`}`,
    }

    const allTopics = Object.keys(STUDY_GUIDES).slice(0, 6)
    const btns = {
      coach: c.totalCBTs === 0
        ? [
            { icon: "🧪", text: "Take my first CBT test" },
            { icon: "📚", text: "Show me how to use this app" },
            { icon: "📖", text: "Explain Trigonometry" },
          ]
        : [
            { icon: "📋", text: "Build my study plan for today" },
            { icon: "⚠️", text: "Show me my weak areas" },
            { icon: "📈", text: "How can I improve fast?" },
          ],
      explain: (c.subjects || []).slice(0, 3).map(s => ({ icon: "📖", text: `Explain ${getSubjectTopics(s)[0] || s}` }))
        .concat([{ icon: "📋", text: "List all topics for a subject" }]),
      ready: [
        { icon: "🎯", text: "Check my exam readiness" },
        { icon: "📊", text: "Predict my Post-UTME score" },
        { icon: "⏰", text: c.daysToExam !== null ? `Make a ${c.daysToExam}-day plan` : "Build a countdown plan" },
      ],
    }

    setMode(m)
    setMessages([{ role: "ai", text: welcomes[m] }])
    setQuickBtns(btns[m] || [])
  }

  const sendMessage = (text) => {
    if (!text.trim() || !studentCtx) return
    setMessages(prev => [...prev, { role: "user", text }])
    setQuickBtns([])
    setInput("")
    setIsTyping(true)

    const delay = 600 + Math.random() * 600
    setTimeout(() => {
      const response = getSmartResponse(text, studentCtx, mode, lastIntent, setLastIntent)
      setMessages(prev => [...prev, { role: "ai", text: response }])
      setIsTyping(false)
      if (text.toLowerCase().includes("first cbt") || text.toLowerCase().includes("take my first")) {
        setTimeout(() => onNavigate("cbtSubjectSelect"), 1500)
      }
    }, delay)
  }

  const renderText = (text) => (
    <span dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, "<br/>") }} />
  )

  if (!studentCtx) {
    return (
      <div className="ee-page">
        <header className="ee-header">
          <button className="ee-back-btn" onClick={onBack}>← Back</button>
          <span style={{ fontWeight: 800, fontSize: 15 }}>🎓 AI Tutor</span>
          <span style={{ width: 60 }} />
        </header>
        <div className="ee-content" style={{ textAlign: "center", paddingTop: 60 }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>🎓</div>
          <div style={{ fontSize: 14, color: "var(--text2)" }}>Loading your tutor...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="ee-page">
      <header className="ee-header">
        <button className="ee-back-btn" onClick={onBack}>← Back</button>
        <span style={{ fontWeight: 800, fontSize: 15 }}>🎓 AI Tutor</span>
        <span style={{ width: 60 }} />
      </header>

      <div className="ee-content" style={{ paddingBottom: 0, display: "flex", flexDirection: "column", height: "calc(100vh - 56px)" }}>

        {/* Student Stats Bar */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 6, marginBottom: 12, flexShrink: 0 }}>
          {[
            { label: "Average", value: `${studentCtx.avgScore}%`, color: studentCtx.avgScore >= 60 ? "#15803d" : studentCtx.avgScore >= 50 ? "#d97706" : "#dc2626" },
            { label: "Days left", value: studentCtx.daysToExam !== null ? String(studentCtx.daysToExam) : "—", color: studentCtx.daysToExam !== null && studentCtx.daysToExam <= 7 ? "#dc2626" : "var(--primary)" },
            { label: "Weak areas", value: String(studentCtx.weakTopics.length), color: studentCtx.weakTopics.length > 3 ? "#dc2626" : "#d97706" },
            { label: "Streak", value: `${studentCtx.streak}🔥`, color: studentCtx.streak >= 3 ? "#d97706" : "var(--text2)" },
          ].map((s, i) => (
            <div key={i} style={{
              background: "var(--surface)", borderRadius: "var(--radius-md)",
              padding: "8px 6px", textAlign: "center", border: "1px solid var(--border)"
            }}>
              <div style={{ fontSize: 15, fontWeight: 800, color: s.color }}>{s.value}</div>
              <div style={{ fontSize: 10, color: "var(--text3)" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Mode Tabs */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6, marginBottom: 12, flexShrink: 0 }}>
          {[
            { key: "coach", icon: "💬", label: "Coach me" },
            { key: "explain", icon: "💡", label: "Explain topic" },
            { key: "ready", icon: "🎯", label: "Am I ready?" },
          ].map(tab => (
            <button key={tab.key} onClick={() => initMode(tab.key, studentCtx)} style={{
              padding: "8px 4px",
              border: mode === tab.key ? "1.5px solid var(--primary)" : "1px solid var(--border)",
              borderRadius: "var(--radius-md)",
              background: mode === tab.key ? "var(--primary-light)" : "var(--surface)",
              color: mode === tab.key ? "var(--primary-text)" : "var(--text2)",
              fontWeight: mode === tab.key ? 800 : 600,
              fontSize: 11, cursor: "pointer",
              fontFamily: "var(--font-main)", textAlign: "center", lineHeight: 1.4
            }}>
              <div style={{ fontSize: 16, marginBottom: 2 }}>{tab.icon}</div>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Chat Area */}
        <div style={{
          flex: 1, overflowY: "auto",
          background: "var(--surface)", borderRadius: "var(--radius-lg)",
          padding: "12px", marginBottom: 10,
          display: "flex", flexDirection: "column", gap: 10
        }}>
          {messages.map((msg, i) => (
            <div key={i} style={{
              display: "flex",
              flexDirection: msg.role === "user" ? "row-reverse" : "row",
              alignItems: "flex-start", gap: 8
            }}>
              <div style={{
                width: 28, height: 28, borderRadius: "50%",
                background: msg.role === "ai" ? "var(--primary-light)" : "var(--primary)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: msg.role === "ai" ? 15 : 11,
                fontWeight: 800, color: msg.role === "ai" ? "var(--primary)" : "#fff",
                flexShrink: 0, marginTop: 2
              }}>
                {msg.role === "ai" ? "🎓" : "You"}
              </div>
              <div style={{
                padding: "10px 13px",
                borderRadius: msg.role === "ai" ? "4px 12px 12px 12px" : "12px 4px 12px 12px",
                background: msg.role === "ai" ? "var(--bg)" : "var(--primary)",
                border: msg.role === "ai" ? "1px solid var(--border)" : "none",
                color: msg.role === "ai" ? "var(--text)" : "#fff",
                fontSize: 13, lineHeight: 1.65, maxWidth: "86%"
              }}>
                {renderText(msg.text)}
              </div>
            </div>
          ))}

          {isTyping && (
            <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
              <div style={{
                width: 28, height: 28, borderRadius: "50%",
                background: "var(--primary-light)",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15
              }}>🎓</div>
              <div style={{
                padding: "12px 14px", borderRadius: "4px 12px 12px 12px",
                background: "var(--bg)", border: "1px solid var(--border)",
                display: "flex", gap: 5, alignItems: "center"
              }}>
                {[0, 1, 2].map(i => (
                  <div key={i} style={{
                    width: 7, height: 7, borderRadius: "50%",
                    background: "var(--text3)",
                    animation: `bounce 1.2s infinite ${i * 0.2}s`
                  }} />
                ))}
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Quick Buttons */}
        {quickBtns.length > 0 && !isTyping && (
          <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 8, flexShrink: 0 }}>
            {quickBtns.map((btn, i) => (
              <button key={i} onClick={() => sendMessage(btn.text)} style={{
                padding: "9px 12px", border: "1px solid var(--border)",
                borderRadius: "var(--radius-md)", background: "var(--surface)",
                color: "var(--text)", fontSize: 12, cursor: "pointer",
                fontFamily: "var(--font-main)", display: "flex", alignItems: "center", gap: 8, textAlign: "left"
              }}>
                <span style={{ fontSize: 14 }}>{btn.icon}</span>
                {btn.text}
              </button>
            ))}
          </div>
        )}

        {/* Input Row */}
        <div style={{ display: "flex", gap: 8, flexShrink: 0, paddingBottom: 12 }}>
          <input
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && !isTyping && sendMessage(input)}
            placeholder="Ask about any topic or your progress..."
            style={{
              flex: 1, padding: "10px 13px",
              border: "1px solid var(--border)", borderRadius: "var(--radius-md)",
              background: "var(--surface)", color: "var(--text)", fontSize: 13,
              fontFamily: "var(--font-main)"
            }}
          />
          <button
            onClick={() => !isTyping && sendMessage(input)}
            disabled={isTyping || !input.trim()}
            style={{
              padding: "10px 16px",
              background: isTyping || !input.trim() ? "var(--surface3)" : "var(--primary)",
              color: isTyping || !input.trim() ? "var(--text3)" : "#fff",
              border: "none", borderRadius: "var(--radius-md)",
              fontSize: 13, fontWeight: 700,
              cursor: isTyping || !input.trim() ? "not-allowed" : "pointer",
              fontFamily: "var(--font-main)"
            }}
          >Send</button>
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-5px); }
        }
      `}</style>
    </div>
  )
}

export default AITutor