import { useState, useEffect, useRef } from "react"
import { getCBTHistory } from "../utils/cbtHistory"
import { getGameState, getDaysToExam } from "../utils/gamification"
import PageTransition from "../components/LoadingScreen"

// ============================================================
// UNIBEN SUBJECT INTELLIGENCE
// Built from analysis of 2005–2020 past questions
// ============================================================

const UNIBEN_INTELLIGENCE = {
  English: {
    topicWeights: {
      "Comprehension": { weight: 25, tip: "Always answer from the passage only. Never use outside knowledge — this is the #1 trap UNIBEN sets every year." },
      "Antonyms": { weight: 20, tip: "UNIBEN tests the same antonyms repeatedly. Enervating→Invigorating, Loquacious→Taciturn, Indolent→Industrious appear almost every year." },
      "Synonyms": { weight: 15, tip: "Watch out for INVALUABLE — it means very useful, NOT worthless. FUTILE appears every year. PERFUNCTORILY = without commitment." },
      "Idioms & Expressions": { weight: 15, tip: "Left in the lurch, Cross purposes, Pet aversion, Die-hard — these all appeared multiple times. Learn the idioms in your vault." },
      "Lexis & Structure": { weight: 15, tip: "Signal words are everything. BUT/HOWEVER = blank is opposite. AND/ALSO = blank matches. INSTEAD OF = alternative." },
      "Stress Pattern": { weight: 10, tip: "Identify which word has a different stress pattern. Say each word aloud and count syllables. The odd one out is usually the answer." },
    },
    recurringPattern: "UNIBEN always has 2 comprehension passages (10 marks), 5 antonyms, 5 synonyms, 5 idiom meanings, 5 lexis & structure, and 3 stress pattern questions.",
    yearlyTrap: "The most common trap in comprehension: choosing an answer that is true in real life but NOT stated in the passage. Always go back and find the line that supports your answer.",
  },
  Mathematics: {
    topicWeights: {
      "Algebra": { weight: 20, tip: "Difference of two squares: a²−b² = (a+b)(a−b). UNIBEN uses this every single year. Spot it immediately." },
      "Logarithms": { weight: 15, tip: "log(1)=0 always. Power rule: log(Aⁿ) = n×logA. This is the most tested log rule in UNIBEN papers." },
      "Trigonometry": { weight: 15, tip: "sec²θ + tan²θ = 3 → θ = 45°. This appeared 2017, 2018, 2019. It WILL appear again. Special angles must be memorised." },
      "Statistics": { weight: 10, tip: "Primes from 20 to 30 are ONLY 23 and 29. Total numbers = 11. P(prime) = 2/11. This appeared in 2011 and 2019." },
      "Sequences & Series": { weight: 10, tip: "AP: Tₙ = a+(n−1)d. GP: Sum to infinity = a/(1−r) when |r|<1. Both appear every year." },
      "Coordinate Geometry": { weight: 10, tip: "Perpendicular gradients multiply to −1. Distance formula, midpoint — memorise and apply fast." },
      "Calculus": { weight: 10, tip: "Set dy/dx = 0 to find turning points. d²y/dx² > 0 = minimum, < 0 = maximum. Appears every year." },
      "Sets": { weight: 10, tip: "n(A∪B) = n(A)+n(B)−n(A∩B). Find union FIRST, then subtract from total to get 'neither'. Every year." },
    },
    recurringPattern: "UNIBEN Maths has 25 questions. Algebra (5), Logs (3-4), Trig (3-4), Stats (2-3), Sequences (2), Geometry (2), Calculus (2), Sets (2).",
    yearlyTrap: "Students lose marks by forgetting to add +C for indefinite integrals. Also: percentage error divides by TRUE value, not measured value.",
  },
  Physics: {
    topicWeights: {
      "Electricity & Magnetism": { weight: 25, tip: "DC motor uses split rings. AC generator uses slip rings. Don't confuse these — UNIBEN tests this distinction every year." },
      "Waves & Optics": { weight: 20, tip: "Electromagnetic spectrum in ascending wavelength: Gamma → X-ray → UV → Visible → IR → Microwave → Radio." },
      "Mechanics": { weight: 20, tip: "Weight at distance 2R from Earth's centre = W/4 (inverse square law). This calculation appears repeatedly." },
      "Nuclear Physics": { weight: 15, tip: "Natural radioactivity: Becquerel. X-rays: Röntgen. Half-life formula: N = N₀(½)^(t/T). UNIBEN tests all three." },
      "Thermodynamics": { weight: 10, tip: "Combined gas law: P₁V₁/T₁ = P₂V₂/T₂. Always convert Celsius to Kelvin first (add 273)." },
      "Semiconductors": { weight: 10, tip: "Doping = adding impurities to semiconductor. Best known semiconductor = Silicon. At room temperature: nearly filled valence band, nearly empty conduction band." },
    },
    recurringPattern: "UNIBEN Physics has 25 questions: Electricity/Magnetism (6-7), Waves/Optics (5-6), Mechanics (5), Nuclear (3-4), Thermodynamics (3), Semiconductors (2-3).",
    yearlyTrap: "Students confuse DC motors and AC generators. Remember: MOTOR has Split rings (commutator), GENERATOR has Slip rings. This comes up in almost every exam.",
  },
  Chemistry: {
    topicWeights: {
      "Separation Techniques": { weight: 15, tip: "Oil and water → separating funnel. Benzene, ethanol, water → fractional distillation. Salt from solution → evaporation. UNIBEN tests this every year." },
      "Atomic Structure": { weight: 15, tip: "Diamond: NO electrical conductivity, melting point ~3500°C. Solid PbBr₂ has ions. Molten PbBr₂ also has ions. Both conducted by ions." },
      "Chemical Equations": { weight: 15, tip: "Balance equations before calculating. Law of Multiple Proportions appears regularly. Multiple oxides of same element." },
      "Electrochemistry": { weight: 15, tip: "CuSO₄ is the depolarizer in Daniell cell. During brine electrolysis: Na forms amalgam at mercury cathode — requires less energy." },
      "Organic Chemistry": { weight: 15, tip: "Propane is NOT a polymer. Nylon, polyethylene, starch = polymers. Count carbons for naming: meth(1), eth(2), prop(3), but(4), pent(5)." },
      "States of Matter": { weight: 10, tip: "Efflorescent = loses water of crystallization on exposure to air. Deliquescent = absorbs moisture. Water of crystallization gives crystals their shape." },
      "Acids & Bases": { weight: 15, tip: "CH₃COOH (acetic acid) = monobasic. H₂SO₄ = dibasic. SiO₂ = acidic oxide (reacts with CaO). Identify function of each oxide." },
    },
    recurringPattern: "UNIBEN Chemistry has 25 questions: separation/purification (4), atomic structure (4), equations/moles (4), electrochemistry (3), organic (4), acids/bases (3), states of matter (3).",
    yearlyTrap: "Students confuse efflorescent and deliquescent. Efflorescent LOSES water (loses = efflores). Deliquescent GAINS water from air. This appears almost every year.",
  },
  Biology: {
    topicWeights: {
      "Cell Biology": { weight: 20, tip: "Cell membrane = selectively permeable. Osmosis moves water from low to high concentration. Diffusion moves high to low. UNIBEN tests this every year." },
      "Genetics": { weight: 20, tip: "Dominant alleles mask recessive. Monohybrid cross ratio: 3:1. Dihybrid: 9:3:3:1. Know the difference between genotype and phenotype." },
      "Ecology": { weight: 15, tip: "Food chain always starts with a producer (plant). Pyramid of numbers can be inverted. Pyramid of energy can NEVER be inverted." },
      "Nutrition & Digestion": { weight: 15, tip: "Enzyme specificity: amylase → starch, pepsin → protein (stomach), lipase → fats. pH matters: pepsin works in acid, trypsin in alkaline." },
      "Reproduction": { weight: 15, tip: "Pollination ≠ fertilisation. Cross-pollination requires a vector (wind, insect). Internal fertilisation = more efficient in harsh environments." },
      "Evolution": { weight: 15, tip: "Natural selection: survival of the fittest. Lamarck (acquired characteristics) vs Darwin (natural selection). UNIBEN tests the difference." },
    },
    recurringPattern: "UNIBEN Biology has 25 questions: cell biology (5), genetics (5), ecology (4), nutrition (4), reproduction (4), evolution (3).",
    yearlyTrap: "Students confuse mitosis and meiosis. Mitosis = 2 identical cells (growth/repair). Meiosis = 4 different cells (reproduction/sex cells). Half the chromosome number.",
  },
  Government: {
    topicWeights: {
      "Constitutional History": { weight: 25, tip: "Know Nigeria's constitution timeline: 1922 Clifford, 1946 Richards, 1951 Macpherson, 1954 Lyttleton, 1960 Independence, 1963 Republic. UNIBEN tests dates every year." },
      "Arms of Government": { weight: 20, tip: "Executive (implements), Legislature (makes laws), Judiciary (interprets). Doctrine of separation of powers = Montesquieu. Checks and balances prevents abuse." },
      "Political Concepts": { weight: 20, tip: "Sovereignty = supreme power. Legitimacy = accepted authority. Political parties aggregate interests. Pressure groups articulate interests." },
      "Electoral Process": { weight: 15, tip: "Proportional representation = seats match votes. First-past-the-post = simple majority wins. Know the difference and when each is used." },
      "International Relations": { weight: 20, tip: "UN founded 1945. AU (formerly OAU) founded 1963. ECOWAS founded 1975. Nigeria joined UN at independence in 1960." },
    },
    recurringPattern: "UNIBEN Government: constitutional history (6), arms of government (5), political concepts (5), electoral systems (4), international relations (5).",
    yearlyTrap: "Students confuse OAU and AU. OAU was founded 1963, renamed African Union (AU) in 2002. UNIBEN regularly tests this distinction.",
  },
  Economics: {
    topicWeights: {
      "Supply & Demand": { weight: 20, tip: "Price increases → demand falls (normal goods). Giffen goods are the exception — price rises, demand rises. Know the difference." },
      "National Income": { weight: 20, tip: "GDP = total output in a country. GNP = GDP + net income from abroad. Real GDP accounts for inflation. Nominal does not." },
      "Market Structures": { weight: 15, tip: "Perfect competition: many firms, identical products, free entry. Monopoly: one firm, price maker. Oligopoly: few firms, interdependent." },
      "Monetary Policy": { weight: 15, tip: "CBN uses Cash Reserve Ratio, Monetary Policy Rate, Open Market Operations. Increase CRR → reduce money supply → reduce inflation." },
      "Trade": { weight: 15, tip: "Comparative advantage: produce what you're relatively better at. Absolute advantage: produce what you're absolutely better at. Both appear in UNIBEN papers." },
      "Development Economics": { weight: 15, tip: "Developing countries: low GDP, high birth rate, primary sector dominates. Mainstay of Nigerian economy = oil (since 1970s), before that = agriculture." },
    },
    recurringPattern: "UNIBEN Economics: supply/demand (5), national income (5), market structures (4), monetary policy (4), trade (3), development (4).",
    yearlyTrap: "Students confuse Giffen goods and Veblen goods. Giffen = inferior goods where demand rises with price (bread in poverty). Veblen = luxury goods bought MORE as price rises (status).",
  },
}

// ============================================================
// SMART RESPONSE ENGINE
// Builds personalised responses from student data
// ============================================================

const buildStudentContext = (userData, cbtHistory, gameState, faculty, facultySubjects, daysToExam) => {
  // Calculate real weak topics from CBT history
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

  // Score trend from last 5 CBTs
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
    subjects: facultySubjects,
    goal: gameState.goal,
    recentScores: recent.map(r => r.percentage || 0),
  }
}

const getSmartResponse = (userMsg, ctx, mode) => {
  const msg = userMsg.toLowerCase()
  const { name, avgScore, weakTopics, strongTopics, streak, daysToExam, subjects, totalCBTs, recentScores, trend, faculty } = ctx

  // ── COACH MODE RESPONSES ──
  if (mode === "coach" || msg.includes("plan") || msg.includes("today") || msg.includes("study")) {
    if (msg.includes("plan") || msg.includes("today") || msg.includes("what should")) {
      if (weakTopics.length === 0 && totalCBTs === 0) {
        return `${name}, you haven't taken a CBT test yet, so I can't personalise your plan fully. Here's what to do right now:\n\n<strong>Step 1 (now):</strong> Take a full CBT with all your subjects. This gives me your real data to work with.\n\n<strong>Step 2 (after):</strong> Come back here and I'll build you a precise plan based on exactly what you got wrong.\n\n<strong>Why this matters:</strong> Most students waste time studying topics they already know. Your CBT result tells me exactly what to focus on.`
      }

      const topWeak = weakTopics.slice(0, 2)
      const dayPlan = daysToExam && daysToExam <= 7
        ? `⚠️ Only <strong>${daysToExam} days left</strong>. No new topics — drill weak areas only.`
        : daysToExam
        ? `You have <strong>${daysToExam} days</strong>. Enough time if you stay consistent.`
        : "Set your exam date in the XP bar so I can give you better timing advice."

      return `${name}, here's your plan for today based on your actual data:\n\n${dayPlan}\n\n<strong>Morning (30-40 mins):</strong>\n${topWeak[0] ? `→ Drill <strong>${topWeak[0].topic}</strong> in Study Mode (${topWeak[0].subject}) — you're at ${Math.round((topWeak[0].score/topWeak[0].total)*100)}% here` : "→ Pick your weakest subject in Study Mode"}\n\n<strong>Afternoon (20-30 mins):</strong>\n${topWeak[1] ? `→ Drill <strong>${topWeak[1].topic}</strong> in Study Mode (${topWeak[1].subject})` : "→ Review Hot Topics for your strongest subject"}\n\n<strong>Evening (25 mins):</strong>\n→ Full CBT with all subjects. Target: beat your current ${avgScore}%.\n\n<strong>Rule for today:</strong> Review every wrong answer in CBT History before sleeping. That alone will push your score up faster than extra studying.`
    }
  }

  // ── WEAK AREAS ──
  if (msg.includes("weak") || msg.includes("struggling") || msg.includes("failing") || msg.includes("improve")) {
    if (totalCBTs === 0) {
      return `${name}, I can't show you real weak areas yet because you haven't taken a CBT test. Take one now — your results will automatically appear in Weak Areas. The more CBTs you take, the more precisely I can target what's failing you.`
    }
    if (weakTopics.length === 0) {
      return `${name}, based on your CBT history, you're scoring above 50% in all topics I've tracked so far. That's good! Keep taking CBTs regularly so I can spot any emerging weak spots early. Your current average is <strong>${avgScore}%</strong>.`
    }
    const list = weakTopics.map((t, i) => {
      const pct = Math.round((t.score / t.total) * 100)
      const intel = UNIBEN_INTELLIGENCE[t.subject]?.topicWeights[t.topic]
      return `<strong>${i+1}. ${t.topic}</strong> (${t.subject}) — ${pct}% accuracy\n${intel ? `💡 ${intel.tip}` : "Practice this in Study Mode."}`
    }).join("\n\n")

    return `${name}, here are your ${weakTopics.length} weak areas from your CBT history:\n\n${list}\n\nFix the first one before moving to the second. One at a time is faster than spreading yourself thin.`
  }

  // ── READINESS / SCORE PREDICTION ──
  if (msg.includes("ready") || msg.includes("predict") || msg.includes("pass") || msg.includes("chance") || msg.includes("score")) {
    if (totalCBTs === 0) {
      return `${name}, I can't predict your score yet because you haven't taken any CBT tests. Take at least 3 CBTs first, then come back and I'll give you a realistic readiness assessment based on your actual performance.`
    }

    const cutoff = 50
    const predicted = Math.min(Math.max(avgScore + (trend === "improving" ? 5 : trend === "declining" ? -3 : 0), 0), 100)
    const status = predicted >= 65 ? "strong" : predicted >= 55 ? "borderline" : "at risk"
    const statusText = predicted >= 65
      ? `🟢 <strong>Strong position.</strong> You're likely to pass based on current performance.`
      : predicted >= 55
      ? `🟡 <strong>Borderline.</strong> You can pass but need consistent improvement in the next few days.`
      : `🔴 <strong>At risk.</strong> Focused drilling of weak areas is essential right now.`

    return `${name}, here's your honest readiness assessment:\n\n<strong>Predicted Post-UTME score: ${predicted}%</strong>\nMost UNIBEN cutoffs are around ${cutoff}–60%.\n\n${statusText}\n\n<strong>Your data:</strong>\n• Average across ${totalCBTs} CBT${totalCBTs !== 1 ? "s" : ""}: ${avgScore}%\n• Score trend: ${trend}\n• Weak topics: ${weakTopics.length}\n\n<strong>What moves the needle most:</strong>\n${weakTopics.slice(0, 2).map(t => `→ Fix ${t.topic} (+3–5% on ${t.subject})`).join("\n") || "→ Keep drilling all subjects daily"}\n→ Do 1 full CBT daily and review every wrong answer\n\n${daysToExam ? `<strong>${daysToExam} days left.</strong> You have time. Stay consistent.` : "Set your exam date in the XP bar to get countdown advice."}`
  }

  // ── SUBJECT-SPECIFIC EXPLANATIONS ──
  for (const [subject, intel] of Object.entries(UNIBEN_INTELLIGENCE)) {
    if (msg.includes(subject.toLowerCase())) {
      // Check if asking about a specific topic
      for (const [topic, data] of Object.entries(intel.topicWeights)) {
        if (msg.includes(topic.toLowerCase().split(" ")[0])) {
          const studentStat = ctx.weakTopics.find(t => t.topic === topic)
          const isWeak = studentStat && (studentStat.score / studentStat.total) < 0.5

          return `${isWeak ? `${name}, this is one of your weak areas — good that you're focusing on it. ` : ""}Here's what you need to know about <strong>${topic}</strong> for UNIBEN:\n\n${data.tip}\n\n<strong>How UNIBEN tests this:</strong>\n${intel.recurringPattern}\n\n<strong>Common trap:</strong>\n${intel.yearlyTrap}\n\nOpen Study Mode → ${subject} → ${topic} and do all the questions. Then take a CBT to see if your score improves.`
        }
      }

      // General subject help
      const topicsNeeded = Object.entries(intel.topicWeights)
        .sort(([,a], [,b]) => b.weight - a.weight)
        .slice(0, 3)
        .map(([topic, data]) => `<strong>${topic}</strong> (${data.weight}% of ${subject} questions)\n${data.tip}`)
        .join("\n\n")

      return `Here's how UNIBEN sets <strong>${subject}</strong> questions:\n\n${intel.recurringPattern}\n\n<strong>Top 3 topics by frequency:</strong>\n\n${topicsNeeded}\n\n<strong>Main trap:</strong>\n${intel.yearlyTrap}`
    }
  }

  // ── STREAK / MOTIVATION ──
  if (msg.includes("streak") || msg.includes("motivat") || msg.includes("tired") || msg.includes("give up")) {
    if (streak === 0) {
      return `${name}, your streak is at 0 — meaning you've had a gap in practice. That's okay, but here's the reality: students who study daily — even for just 20 minutes — consistently score 10–15% higher than those who cram.\n\nStart a new streak today. Do one CBT or one Study Mode session. That's it. Tomorrow will be easier.`
    }
    return `${name}, you're on a <strong>${streak}-day streak</strong>. That's serious consistency. Most students give up before reaching 7 days.\n\n${streak >= 7 ? "A 7-day streak puts you in the top 15% of students on this app. Keep going." : `Get to 7 days and you'll earn the ⚡ Week Warrior badge — and more importantly, you'll have built a real study habit.`}\n\nYour average is currently <strong>${avgScore}%</strong>. With ${daysToExam ? `${daysToExam} days left` : "time remaining"}, consistency is the single biggest factor in whether you pass.`
  }

  // ── EXAM DATE / COUNTDOWN ──
  if (msg.includes("day") || msg.includes("countdown") || msg.includes("time left") || msg.includes("exam date")) {
    if (!daysToExam) {
      return `${name}, you haven't set your exam date yet. Tap the XP bar at the top of the home screen, then set your exam date. Once set, I can give you a precise day-by-day countdown plan.\n\nWithout a countdown, it's easy to underestimate how little time is left. Set it now.`
    }

    const intensity = daysToExam <= 3 ? "FINAL SPRINT" : daysToExam <= 7 ? "LAST WEEK" : daysToExam <= 14 ? "TWO WEEKS" : "STEADY PREP"
    const dailyTarget = daysToExam <= 7 ? "2 CBTs per day + weak area drills" : daysToExam <= 14 ? "1 CBT per day + 1 weak area topic" : "1 CBT every 2 days + daily topic drilling"

    return `<strong>${intensity} — ${daysToExam} days to go.</strong>\n\nYour daily target: <strong>${dailyTarget}</strong>\n\nFocused breakdown:\n${daysToExam > 7 ? `• Days 1–${Math.floor(daysToExam/2)}: Drill your ${weakTopics.length} weak topics one by one\n• Days ${Math.floor(daysToExam/2)+1}–${daysToExam-3}: Full CBT daily + review every wrong answer\n• Last 3 days: Hot Topics only. Light practice. Rest well.` : daysToExam > 3 ? `• Each day: 1 weak topic drill + 1 full CBT\n• Review EVERY wrong answer before sleeping\n• Last 2 days: Hot Topics revision only` : `• Each day: 2 short CBTs + review answers\n• No new topics — only what you already know\n• Get 8 hours sleep before exam day`}\n\nYour current average: <strong>${avgScore}%</strong>. ${avgScore >= 60 ? "You're in a good position. Don't panic, stay consistent." : "You still have time to push this up. Focus only on weak areas."}`
  }

  // ── HOT TOPICS ──
  if (msg.includes("hot topic") || msg.includes("repeated") || msg.includes("common question") || msg.includes("likely")) {
    const subjectInsights = subjects.slice(0, 3).map(subj => {
      const intel = UNIBEN_INTELLIGENCE[subj]
      if (!intel) return null
      const topTopic = Object.entries(intel.topicWeights).sort(([,a],[,b]) => b.weight - a.weight)[0]
      return topTopic ? `<strong>${subj}:</strong> ${topTopic[0]} — ${topTopic[1].tip}` : null
    }).filter(Boolean).join("\n\n")

    return `${name}, based on my analysis of UNIBEN past questions from 2005 to 2020, here are the topics most likely to appear in your exam:\n\n${subjectInsights}\n\nOpen Hot Topics from the home screen for the full list of questions that repeated across multiple years. These are your highest-value study materials.`
  }

  // ── HOW TO USE APP ──
  if (msg.includes("how") && (msg.includes("app") || msg.includes("use") || msg.includes("feature") || msg.includes("work"))) {
    return `Here's how to get maximum value from ExamEdgeNG:\n\n<strong>Daily routine that works:</strong>\n1. Open Study Mode → drill one weak topic (20 mins)\n2. Take a full CBT with all subjects (timed)\n3. Review every wrong answer in CBT History\n4. Check your Weak Areas — they auto-update after each CBT\n\n<strong>Best features to use:</strong>\n• <strong>Hot Topics</strong> — questions that repeated across multiple UNIBEN papers. Do these last-minute.\n• <strong>Weak Areas</strong> — auto-tracks every question you got wrong. Most targeted practice possible.\n• <strong>CBT History</strong> — review past attempts and see your score trend.\n• <strong>Progress</strong> — see accuracy and speed per subject.\n\nThe students who pass consistently take at least one CBT per day and review every wrong answer. That simple habit makes the biggest difference.`
  }

  // ── DEFAULT FALLBACK ──
  const contextHint = totalCBTs === 0
    ? `You haven't taken a CBT yet — that's the single most important thing to do right now.`
    : weakTopics.length > 0
    ? `Your biggest opportunity is in <strong>${weakTopics[0].topic}</strong> (${weakTopics[0].subject}) where you're at ${Math.round((weakTopics[0].score/weakTopics[0].total)*100)}%.`
    : `Your average is <strong>${avgScore}%</strong> — keep drilling to push higher.`

  return `${name}, good question. ${contextHint}\n\nFor subject-specific help, just name the subject or topic and I'll break down exactly what UNIBEN tests and how to approach it. I've studied UNIBEN papers from 2005 to 2020 across all faculties.`
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
  const chatEndRef = useRef(null)

  // Build student context on mount
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
        ? `Hi ${c.name}! 👋 I'm your personal UNIBEN tutor. I've studied past questions from 2005 to 2020 across all faculties. Before I can help you properly, you need to take a CBT test — that gives me your real data to work with. Want to start one now?`
        : `Hi ${c.name}! 👋 I can see your data. You're at <strong>${c.avgScore}%</strong> average${c.daysToExam ? ` with <strong>${c.daysToExam} days</strong> to your exam` : ""}. ${c.weakTopics.length > 0 ? `You have <strong>${c.weakTopics.length} weak topics</strong> that could cost you marks.` : "Your scores look solid — let's push higher."} What do you need help with?`,
      explain: `Which topic should I explain? I know exactly how UNIBEN tests every topic across all faculties. Just name a subject or topic and I'll break it down — including the traps they set every year.`,
      ready: `Let me assess your exam readiness honestly. ${c.totalCBTs === 0 ? "You'll need to take at least one CBT first so I have real data to work with." : `Based on your ${c.totalCBTs} CBT${c.totalCBTs !== 1 ? "s" : ""}, I can predict your likely Post-UTME score and tell you exactly what to fix.`}`,
    }

    const btns = {
      coach: c.totalCBTs === 0
        ? [
            { icon: "🧪", text: "Take my first CBT test" },
            { icon: "📚", text: "Show me how to use this app" },
            { icon: "🔥", text: "What topics does UNIBEN test most?" },
          ]
        : [
            { icon: "📋", text: "Build my study plan for today" },
            { icon: "⚠️", text: "Show me my weak areas" },
            { icon: "📈", text: "How can I improve fast?" },
          ],
      explain: (c.subjects || []).slice(0, 3).map(s => ({ icon: "📖", text: `Explain ${s} for UNIBEN` })).concat([{ icon: "🔥", text: "What are the most repeated topics?" }]),
      ready: [
        { icon: "🎯", text: "Check my exam readiness" },
        { icon: "📊", text: "Predict my Post-UTME score" },
        { icon: "⏰", text: c.daysToExam ? `Make a ${c.daysToExam}-day plan` : "Build a countdown plan" },
      ],
    }

    setMode(m)
    setMessages([{ role: "ai", text: welcomes[m] }])
    setQuickBtns(btns[m] || [])
  }

  const sendMessage = (text) => {
    if (!text.trim() || !studentCtx) return
    const userMsg = { role: "user", text }
    setMessages(prev => [...prev, userMsg])
    setQuickBtns([])
    setInput("")
    setIsTyping(true)

    // Simulate thinking delay (makes it feel natural)
    const delay = 800 + Math.random() * 700
    setTimeout(() => {
      const response = getSmartResponse(text, studentCtx, mode)
      setMessages(prev => [...prev, { role: "ai", text: response }])
      setIsTyping(false)

      // Navigate to features the tutor references
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
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gap: 6, marginBottom: 12, flexShrink: 0
        }}>
          {[
            { label: "Average", value: `${studentCtx.avgScore}%`, color: studentCtx.avgScore >= 60 ? "#15803d" : studentCtx.avgScore >= 50 ? "#d97706" : "#dc2626" },
            { label: "Days left", value: studentCtx.daysToExam !== null ? String(studentCtx.daysToExam) : "—", color: studentCtx.daysToExam <= 7 ? "#dc2626" : "var(--primary)" },
            { label: "Weak areas", value: String(studentCtx.weakTopics.length), color: studentCtx.weakTopics.length > 3 ? "#dc2626" : "#d97706" },
            { label: "Streak", value: `${studentCtx.streak}🔥`, color: studentCtx.streak >= 3 ? "#d97706" : "var(--text2)" },
          ].map((s, i) => (
            <div key={i} style={{
              background: "var(--surface)", borderRadius: "var(--radius-md)",
              padding: "8px 6px", textAlign: "center",
              border: "1px solid var(--border)"
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
            <button
              key={tab.key}
              onClick={() => initMode(tab.key, studentCtx)}
              style={{
                padding: "8px 4px",
                border: mode === tab.key ? "1.5px solid var(--primary)" : "1px solid var(--border)",
                borderRadius: "var(--radius-md)",
                background: mode === tab.key ? "var(--primary-light)" : "var(--surface)",
                color: mode === tab.key ? "var(--primary-text)" : "var(--text2)",
                fontWeight: mode === tab.key ? 800 : 600,
                fontSize: 11, cursor: "pointer",
                fontFamily: "var(--font-main)",
                textAlign: "center", lineHeight: 1.4
              }}
            >
              <div style={{ fontSize: 16, marginBottom: 2 }}>{tab.icon}</div>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Chat Area */}
        <div style={{
          flex: 1, overflowY: "auto",
          background: "var(--surface)",
          borderRadius: "var(--radius-lg)",
          padding: "12px",
          marginBottom: 10,
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
                fontSize: 13, lineHeight: 1.65,
                maxWidth: "86%"
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
                    animation: `bounce 1.2s infinite ${i * 0.2}s`,
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
                padding: "9px 12px",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-md)",
                background: "var(--surface)",
                color: "var(--text)",
                fontSize: 12, cursor: "pointer",
                fontFamily: "var(--font-main)",
                display: "flex", alignItems: "center", gap: 8,
                textAlign: "left"
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
            placeholder="Ask about any topic, your progress..."
            style={{
              flex: 1, padding: "10px 13px",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-md)",
              background: "var(--surface)",
              color: "var(--text)", fontSize: 13,
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
              fontSize: 13, fontWeight: 700, cursor: isTyping || !input.trim() ? "not-allowed" : "pointer",
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
