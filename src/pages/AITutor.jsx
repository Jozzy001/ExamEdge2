import { useState, useEffect, useRef } from "react"
import { getCBTHistory } from "../utils/cbtHistory"
import { getGameState, getDaysToExam } from "../utils/gamification"
import STUDY_GUIDES from "../data/studyGuides"

// ============================================================
// HELPERS
// ============================================================

const SKIP_TYPES = ["antonyms_vault","synonyms_vault","idioms_vault","english_skills_vault","maths_vault","physics_vault","chemistry_vault","biology_vault"]

const extractGuideText = (guide) => {
  if (!guide) return null
  const lines = []

  // Support both old format (sections[]) and new format (keyPoints[], examQuestions[])
  const title = guide.title || guide.topic || "Study Guide"
  const subject = guide.subject || ""
  lines.push(`📘 ${subject ? subject + " — " : ""}${title}`)

  // OLD format: guide.sections array
  if (guide.sections && guide.sections.length > 0) {
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

  // NEW format: guide.summary, guide.keyPoints[], guide.examTips[], guide.examQuestions[]
  if (guide.summary) lines.push(`\n${guide.summary}`)

  if (guide.keyPoints && guide.keyPoints.length > 0) {
    lines.push("\n<strong>Key Points:</strong>")
    guide.keyPoints.slice(0, 6).forEach(p => lines.push(`• ${p}`))
  }

  if (guide.examTips && guide.examTips.length > 0) {
    lines.push("\n<strong>Exam Tips:</strong>")
    guide.examTips.slice(0, 3).forEach(t => lines.push(`💡 ${t}`))
  }

  if (guide.examQuestions && guide.examQuestions.length > 0) {
    lines.push("\n<strong>Sample Exam Questions:</strong>")
    guide.examQuestions.slice(0, 3).forEach(q => {
      lines.push(`❓ ${q.q}`)
      lines.push(`✅ Answer: <strong>${q.a}</strong>`)
      if (q.why) lines.push(`💡 ${q.why}`)
    })
  }

  return lines.join("\n")
}

// Find matching study guide (fuzzy match)
const findGuide = (topicQuery) => {
  if (!topicQuery) return null
  const q = topicQuery.toLowerCase().trim()
    .replace(/^(what is|what are|explain|tell me about|teach me|how does|define|what do you know about)\s+/i, "")
    .replace(/[?!.]/g, "")
    .trim()

  if (!q || q.length < 2) return null

  // Exact match
  const exact = Object.keys(STUDY_GUIDES).find(k => k.toLowerCase() === q)
  if (exact) return { key: exact, guide: STUDY_GUIDES[exact] }

  // Match against title field too (for new format guides)
  const titleMatch = Object.entries(STUDY_GUIDES).find(([, g]) =>
    g.title?.toLowerCase().includes(q) || q.includes(g.title?.toLowerCase() || "")
  )
  if (titleMatch) return { key: titleMatch[0], guide: titleMatch[1] }

  // Match against topic field
  const topicMatch = Object.entries(STUDY_GUIDES).find(([, g]) =>
    g.topic?.toLowerCase().includes(q) || q.includes(g.topic?.toLowerCase() || "")
  )
  if (topicMatch) return { key: topicMatch[0], guide: topicMatch[1] }

  // Partial key match
  const partial = Object.keys(STUDY_GUIDES).find(k =>
    k.toLowerCase().includes(q) || q.includes(k.toLowerCase())
  )
  if (partial) return { key: partial, guide: STUDY_GUIDES[partial] }

  // Word match on key
  const words = q.split(/\s+/).filter(w => w.length > 3)
  const wordMatch = Object.keys(STUDY_GUIDES).find(k =>
    words.some(w => k.toLowerCase().includes(w))
  )
  if (wordMatch) return { key: wordMatch, guide: STUDY_GUIDES[wordMatch] }

  // Word match on title/topic fields
  const fieldWordMatch = Object.entries(STUDY_GUIDES).find(([, g]) =>
    words.some(w =>
      g.title?.toLowerCase().includes(w) ||
      g.topic?.toLowerCase().includes(w)
    )
  )
  if (fieldWordMatch) return { key: fieldWordMatch[0], guide: fieldWordMatch[1] }

  // Content search — look inside sections
  const contentMatch = Object.entries(STUDY_GUIDES).find(([, guide]) => {
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

  // Content search — keyPoints of new format
  const kpMatch = Object.entries(STUDY_GUIDES).find(([, g]) =>
    g.keyPoints?.some(kp => kp.toLowerCase().includes(q))
  )
  if (kpMatch) return { key: kpMatch[0], guide: kpMatch[1] }

  // Single word prefix match on key
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
    .map(([key, g]) => g.title || g.topic || key)
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
// SMART RESPONSE ENGINE
// ============================================================

const getSmartResponse = (userMsg, ctx, mode, lastIntent, setLastIntent) => {
  const msg = userMsg.toLowerCase().trim()
  const { name, avgScore, weakTopics, strongTopics, streak, daysToExam, subjects, totalCBTs, trend } = ctx

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

  // Antonym / Synonym direct lookup
  const antonymOf = msg.match(/antonym of (\w+)/i) || msg.match(/opposite of (\w+)/i)
  const synonymOf = msg.match(/synonym of (\w+)/i) || msg.match(/meaning of (\w+)/i) || msg.match(/what does (\w+) mean/i)

  if (antonymOf) {
    const word = antonymOf[1]
    const antGuide = STUDY_GUIDES["Antonyms"]
    if (antGuide) {
      const cards = antGuide.sections?.find(s => s.type === "cards")?.items || []
      const match = cards.find(c => c.title.toLowerCase().includes(word.toLowerCase()))
      if (match) {
        if (setLastIntent) setLastIntent(null)
        return `The antonym of <strong>${word}</strong>:\n\n${match.title}\n${match.body}`
      }
    }
    if (setLastIntent) setLastIntent("Antonyms")
    return `I don't have a specific antonym listed for "<strong>${word}</strong>". Want me to show you the full Antonyms guide?`
  }

  if (synonymOf) {
    const word = synonymOf[1]
    const synGuide = STUDY_GUIDES["Synonyms"]
    if (synGuide) {
      const cards = synGuide.sections?.find(s => s.type === "cards")?.items || []
      const match = cards.find(c => c.title.toLowerCase().includes(word.toLowerCase()))
      if (match) return `<strong>${match.title}</strong>\n${match.body}`
    }
    if (setLastIntent) setLastIntent("Synonyms")
    return `I don't have a specific synonym entry for "<strong>${word}</strong>". Want me to show you the full Synonyms guide?`
  }

  // How to use — check BEFORE guide match so it doesn't get swallowed
  if ((msg.includes("how") && (msg.includes("app") || msg.includes("use") || msg.includes("feature"))) ||
      msg.includes("show me how") || msg.includes("tour") || msg.includes("tutorial") || msg.includes("guide me")) {
    return `Here's a quick overview of ExamEdgeNG:\n\n<strong>🏠 Home Screen</strong>\n→ Everything starts here. Tap any feature to begin.\n\n<strong>🧪 CBT Mode</strong>\nTimed exam simulation — all subjects together, exactly like the real Post-UTME. Take this daily.\n\n<strong>📚 Study Mode</strong>\nPractice topic by topic with full explanations. Great for drilling a specific weak area.\n\n<strong>🔥 Hot Topics</strong>\nQuestions that have repeated across multiple UNIBEN papers. Master these and you're ahead of 80% of candidates.\n\n<strong>📊 Weak Areas</strong>\nAutomatically tracks every wrong answer from your CBTs. The app tells you exactly what to fix.\n\n<strong>🕐 CBT History</strong>\nReview all your past attempts. See your scores, subject breakdown, and improvement over time.\n\n<strong>🎓 AI Tutor (you're here!)</strong>\nAsk me anything — a topic to explain, your study plan, your readiness score, or exam strategy.\n\n<strong>💡 Best daily routine:</strong>\n1. Ask me: "What should I study today?"\n2. Drill one weak topic in Study Mode\n3. Take a full CBT\n4. Review wrong answers before sleeping\n\nYou can also go to <strong>Settings → Replay App Tour</strong> for a visual walkthrough of every screen.`
  }

  // Topic explanation — check study guides
  const guideMatch = findGuide(userMsg)
  if (guideMatch && (
    msg.includes("explain") || msg.includes("teach") ||
    msg.includes("what is") || msg.includes("what are") ||
    msg.includes("how does") || msg.includes("how do") ||
    msg.includes("define") || msg.includes("tell me") ||
    msg.includes("understand") || mode === "explain" || userMsg.length < 40
  )) {
    const guideText = extractGuideText(guideMatch.guide)
    const studentStat = ctx.weakTopics.find(t => t.topic === guideMatch.key)
    const isWeak = studentStat && (studentStat.score / studentStat.total) < 0.5
    return `${isWeak ? `${name}, this is one of your weak areas — good that you're working on it.\n\n` : ""}Here's what you need to know:\n\n${guideText}`
  }

  // Subject topic list
  const subjectKeys = ["English", "Mathematics", "Physics", "Chemistry", "Biology",
    "Government", "Economics", "Commerce", "Accounts", "Literature", "CRS", "IRK"]
  for (const subject of subjectKeys) {
    if (msg.includes(subject.toLowerCase()) && (msg.includes("topic") || msg.includes("cover") || msg.includes("what") || msg.includes("list"))) {
      const topics = getSubjectTopics(subject)
      if (topics.length > 0) {
        return `Here are all the <strong>${subject}</strong> topics in your study guides:\n\n${topics.map(t => `• ${t}`).join("\n")}\n\nWhich one do you want me to explain?`
      }
    }
  }

  // Weak areas
  if (msg.includes("weak") || msg.includes("struggling") || msg.includes("failing") || msg.includes("improve")) {
    if (totalCBTs === 0) {
      return `${name}, I can't show you real weak areas yet because you haven't taken a CBT test. Take one now — your results will automatically appear in Weak Areas.`
    }
    if (weakTopics.length === 0) {
      return `${name}, based on your CBT history, you're scoring above 50% in all topics. Your current average is <strong>${avgScore}%</strong>. Keep taking CBTs regularly.`
    }
    const list = weakTopics.map((t, i) => {
      const pct = Math.round((t.score / t.total) * 100)
      const match = findGuide(t.topic)
      const tip = match?.guide?.examTips?.[0] || match?.guide?.keyPoints?.[0] ||
                  match?.guide?.sections?.find(s => s.type === "tip")?.content || "Practice this in Study Mode."
      return `<strong>${i+1}. ${t.topic}</strong> (${t.subject}) — ${pct}%\n💡 ${tip}`
    }).join("\n\n")
    return `${name}, here are your ${weakTopics.length} weak areas:\n\n${list}\n\nWant me to explain any of these?`
  }

  // Study plan
  if (msg.includes("plan") || msg.includes("today") || msg.includes("what should") || msg.includes("study")) {
    if (totalCBTs === 0) {
      return `${name}, you haven't taken a CBT test yet, so I can't personalise your plan.\n\n<strong>Step 1 (now):</strong> Take a full CBT with all your subjects.\n<strong>Step 2:</strong> Come back here and I'll build you a precise daily plan based on your results.`
    }
    const topWeak = weakTopics.slice(0, 2)
    const dayPlan = daysToExam !== null && daysToExam <= 7
      ? `⚠️ Only <strong>${daysToExam} days left</strong>. No new topics — drill weak areas only.`
      : daysToExam ? `You have <strong>${daysToExam} days</strong>. Enough time if you stay consistent.`
      : "Set your exam date in the XP bar for a better plan."
    const planItems = topWeak.length > 0
      ? topWeak.map((t, i) => {
          const label = i === 0 ? "Morning (30-40 mins)" : "Afternoon (20-30 mins)"
          const pct = Math.round((t.score / t.total) * 100)
          return `<strong>${label}:</strong>\n→ Drill <strong>${t.topic}</strong> (${t.subject}) — you're at ${pct}%`
        }).join("\n\n")
      : `<strong>Morning:</strong>\n→ Open Study Mode and drill your hardest topics`
    return `${name}, here's your plan for today:\n\n${dayPlan}\n\n${planItems}\n\n<strong>Evening:</strong>\n→ Full CBT. Target: beat your current ${avgScore}%.`
  }

  // Readiness
  if (msg.includes("ready") || msg.includes("predict") || msg.includes("pass") || msg.includes("chance") || msg.includes("score")) {
    if (totalCBTs === 0) {
      return `${name}, I can't predict your score yet. Take at least 3 CBTs first, then come back for a realistic readiness assessment.`
    }
    const predicted = Math.min(Math.max(avgScore + (trend === "improving" ? 5 : trend === "declining" ? -3 : 0), 0), 100)
    const statusText = predicted >= 65 ? `🟢 <strong>Strong position.</strong> Likely to pass.`
      : predicted >= 55 ? `🟡 <strong>Borderline.</strong> Keep improving.`
      : `🔴 <strong>At risk.</strong> Focus on weak areas urgently.`
    return `${name}, readiness assessment:\n\n<strong>Predicted score: ${predicted}%</strong>\n\n${statusText}\n\n• Average across ${totalCBTs} CBTs: ${avgScore}%\n• Trend: ${trend}\n• Weak topics: ${weakTopics.length}\n\n${daysToExam ? `<strong>${daysToExam} days left.</strong>` : ""}`
  }

  // Streak / Motivation
  if (msg.includes("streak") || msg.includes("motivat") || msg.includes("tired") || msg.includes("give up")) {
    if (streak === 0) {
      return `${name}, your streak is at 0. Start fresh today — one CBT or one Study Mode session. Tomorrow will be easier.`
    }
    return `${name}, you're on a <strong>${streak}-day streak</strong>. Most students give up before day 7. Your average is <strong>${avgScore}%</strong>. Keep going.`
  }

  // Countdown
  if (msg.includes("day") || msg.includes("countdown") || msg.includes("time left") || msg.includes("exam date")) {
    if (!daysToExam && daysToExam !== 0) {
      return `${name}, you haven't set your exam date yet. Tap the XP bar at the top of the home screen and set it.`
    }
    const intensity = daysToExam <= 3 ? "FINAL SPRINT" : daysToExam <= 7 ? "LAST WEEK" : daysToExam <= 14 ? "TWO WEEKS OUT" : "STEADY PREP"
    return `<strong>${intensity} — ${daysToExam} days to go.</strong>\n\nCurrent average: <strong>${avgScore}%</strong>. ${avgScore >= 60 ? "Good position. Stay consistent." : "Focus on weak areas."}`
  }

  // How to use
  if (msg.includes("how") && (msg.includes("app") || msg.includes("use") || msg.includes("feature"))) {
    return `Here's a quick overview of ExamEdgeNG:\n\n<strong>🏠 Home Screen</strong>\n→ Everything starts here. Tap any feature to begin.\n\n<strong>🧪 CBT Mode</strong>\nTimed exam simulation — all subjects together, exactly like the real Post-UTME. Take this daily.\n\n<strong>📚 Study Mode</strong>\nPractice topic by topic with full explanations. Great for drilling a specific weak area.\n\n<strong>🔥 Hot Topics</strong>\nQuestions that have repeated across multiple UNIBEN papers. Master these and you're already ahead of 80% of candidates.\n\n<strong>📊 Weak Areas</strong>\nAutomatically tracks every wrong answer from your CBTs. The app tells you exactly what to fix.\n\n<strong>🕐 CBT History</strong>\nReview all your past attempts. See your scores, subject breakdown, and improvement over time.\n\n<strong>🎓 AI Tutor (you're here!)</strong>\nAsk me anything — a topic to explain, your study plan, your readiness score, or exam strategy.\n\n<strong>💡 Best daily routine:</strong>\n1. Ask me: "What should I study today?"\n2. Drill one weak topic in Study Mode\n3. Take a full CBT\n4. Review wrong answers before sleeping\n\nYou can also go to <strong>Settings → Replay App Tour</strong> for a visual walkthrough of every screen.`
  }

  // Default
  const contextHint = totalCBTs === 0
    ? "You haven't taken a CBT yet — that's the single most important first step."
    : weakTopics.length > 0
    ? `Your biggest opportunity right now is <strong>${weakTopics[0].topic}</strong> (${weakTopics[0].subject}) where you're at ${Math.round((weakTopics[0].score/weakTopics[0].total)*100)}%.`
    : `Your average is <strong>${avgScore}%</strong> — keep drilling to push higher.`

  return `${name}, I'm ready to help. ${contextHint}\n\nJust name any topic — "Trigonometry", "Comprehension", "Organic Chemistry", "Literary Terms", "Hamlet", "Demand and Supply" — and I'll pull up the full study guide.`
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
  const [lastIntent, setLastIntent] = useState(null)
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
        : `Hi ${c.name}! 👋 You're at <strong>${c.avgScore}%</strong> average${c.daysToExam !== null ? ` with <strong>${c.daysToExam} days</strong> to your exam` : ""}. ${c.weakTopics.length > 0 ? `You have <strong>${c.weakTopics.length} weak topic${c.weakTopics.length !== 1 ? "s" : ""}</strong> that could cost you marks.` : "Your scores look solid — let's push higher."} What do you need?`,
      explain: `Which topic should I explain? I have detailed guides for English, Maths, Physics, Chemistry, Biology, Government, Economics, Literature and more. Just name a topic.`,
      ready: `Let me assess your exam readiness honestly. ${c.totalCBTs === 0 ? "You'll need to take at least one CBT first." : `Based on your ${c.totalCBTs} CBT${c.totalCBTs !== 1 ? "s" : ""}, I can predict your likely Post-UTME score.`}`,
    }

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

        {/* Stats Bar */}
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

        {/* Input */}
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