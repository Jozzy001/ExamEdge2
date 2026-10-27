// Classroom — live study + battle sessions
//
// STUDY  : host controls the pace (Next / End). Answers show straight away.
// BATTLE : host only sets subject/questions/time. The app runs the timer,
//          reveals answers, moves on automatically and ranks everyone.
//            - Classic    : everyone answers within the timer, faster = more points
//            - Rapid Fire : first correct answer wins the question, then it moves on
//
// Questions are always drawn randomly from the chosen subject (no topic picker).
//
// FIRESTORE READ SAVING (important):
//   - Only the HOST listens to all participants while the game is live.
//   - The host publishes a small leaderboard + option counts into the session doc.
//   - Players listen to: the session doc, and their OWN participant doc.
//   (Everyone only listens to the participant list in the waiting room.)

import { useState, useEffect, useMemo, useRef } from "react"
import { db } from "../firebase"
import {
  doc, collection, addDoc, updateDoc, onSnapshot, getDoc, getCountFromServer,
  serverTimestamp, deleteDoc, setDoc, query, where, getDocs, increment
} from "firebase/firestore"
import { POST_UTME_UNIVERSITIES } from "../data/postutme/index"
import jambQuestions from "../data/jamb/questions"
import { UPGRADE_PRICE } from "../utils/appConfig"

// ── TESTING SWITCH ──
// true  = every student can use Classroom (beta testing)
// false = Classroom is for paid users only (the "Coming Soon" screen shows for free users)
const CLASSROOM_OPEN_TO_ALL = true

const STORAGE_KEY = "classroom_session_id"
const CODE_LENGTH = 5
const COUNT_CHOICES = [5, 10, 15, 20, 30, 50]
const DEFAULT_COUNT = 10

// Battle settings
const SECONDS_CHOICES = [10, 15, 20, 30]
const DEFAULT_SECONDS = 20
const MAX_POINTS = 1000          // correct answer at 0s. Slowest correct answer is worth half.
const REVEAL_SECONDS = 6         // how long the answer is shown before the next question
const GRACE_MS = 1200            // host waits a little after time-up so late writes land

// Player cap
const PLAYER_CHOICES = [2, 5, 10, 20, 30]
const DEFAULT_MAX_PLAYERS = 20

const generateJoinCode = () => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789" // no confusing chars (0,O,1,I)
  let code = ""
  for (let i = 0; i < CODE_LENGTH; i++) code += chars[Math.floor(Math.random() * chars.length)]
  return code
}

// Unbiased shuffle
const shuffle = (arr) => {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

const stripLetter = (s) => String(s ?? "").replace(/^[A-D][\.\)\s]+/i, "").trim().toLowerCase()

// Works whether the data stores the answer as full option text, "A"/"B"/..., or text without the letter
const optionIsAnswer = (q, opt, i) => {
  const a = String(q.answer ?? "").trim()
  if (!a) return false
  if (opt === q.answer) return true
  if (a.length === 1 && /[A-Da-d]/.test(a)) return String.fromCharCode(65 + i) === a.toUpperCase()
  return stripLetter(opt) === stripLetter(a)
}

// JAMB students use the JAMB question bank, Post-UTME students use their university's bank
const getPool = (university) =>
  university === "JAMB" ? jambQuestions : (POST_UTME_UNIVERSITIES[university]?.questions || [])

// Flatten the pool (unwrapping passage groups) into usable questions for a subject.
const flattenPool = (university, subject) => {
  const flat = []
  getPool(university).forEach(item => {
    if (item.passage && item.questions) {
      item.questions.forEach(inner => flat.push({ ...inner, passage: item.passage }))
    } else {
      flat.push(item)
    }
  })
  return flat.filter(q =>
    q.question &&
    Array.isArray(q.options) && q.options.length > 0 &&
    (!subject || q.subject === subject)
  )
}

// Build a random question set for the session from the subject's question pool
// Firestore rejects `undefined`, so every field gets a safe default.
const buildQuestionSet = (university, subject, count = DEFAULT_COUNT) => {
  return shuffle(flattenPool(university, subject))
    .slice(0, count)
    .map((q, i) => ({
      index: i,
      question: q.question,
      options: q.options,
      answer: q.answer ?? "",
      explanation: q.explanation ?? "",
      subject: q.subject ?? subject ?? "General",
      topic: q.topic ?? "General",
      passage: q.passage ?? null,
    }))
}

// Higher score first; on a tie, whoever finished answering earlier ranks higher
const answeredAt = (p) => p.lastAnsweredAt?.toMillis?.() ?? Number.MAX_SAFE_INTEGER
const sortBoard = (list) =>
  [...list].sort((a, b) => (b.score || 0) - (a.score || 0) || answeredAt(a) - answeredAt(b))

// Small, Firestore-safe leaderboard that the host publishes for everyone
const buildLeaderboard = (list) =>
  sortBoard(list).map(p => ({
    id: p.id,
    name: p.name || "Student",
    score: p.score || 0,
    correct: p.correct || 0,
  }))

// Little pill button used for choosing numbers / options
const Chip = ({ active, onClick, children }) => (
  <button
    type="button"
    onClick={onClick}
    style={{
      padding: "9px 16px", borderRadius: 20, cursor: "pointer",
      border: `1.5px solid ${active ? "var(--primary)" : "var(--border)"}`,
      background: active ? "var(--primary)" : "var(--surface2)",
      color: active ? "#fff" : "var(--text)",
      fontSize: 13, fontWeight: 800, fontFamily: "var(--font-main)"
    }}
  >{children}</button>
)

const Classroom = ({ onNavigate, onBack, authUser, userData, university, facultySubjects, isPaid }) => {
  const [view, setView] = useState("entry") // entry | waiting | live | results
  const [sessionId, setSessionId] = useState(() => {
    try { return localStorage.getItem(STORAGE_KEY) } catch (e) { return null }
  })
  const [session, setSession] = useState(null)
  const [participants, setParticipants] = useState([])
  const [myDoc, setMyDoc] = useState(null) // my own participant doc (score + my answers)
  const [joinCodeInput, setJoinCodeInput] = useState("")
  const [error, setError] = useState("")
  const [creating, setCreating] = useState(false)
  const [joining, setJoining] = useState(false)
  const [selectedSubject, setSelectedSubject] = useState(facultySubjects?.[0] || "English")
  const [questionCount, setQuestionCount] = useState(DEFAULT_COUNT)
  const [mode, setMode] = useState("study") // study | battle
  const [battleStyle, setBattleStyle] = useState("classic") // classic | rapid
  const [battleSeconds, setBattleSeconds] = useState(DEFAULT_SECONDS)
  const [maxPlayers, setMaxPlayers] = useState(DEFAULT_MAX_PLAYERS)
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [hasAnswered, setHasAnswered] = useState(false)
  const [now, setNow] = useState(Date.now())

  // Latest values for timers/effects (so they never use stale data)
  const sessionRef = useRef(null)
  const participantsRef = useRef([])
  const phaseStartRef = useRef(Date.now()) // when THIS device first saw the current question/phase
  const actionLockRef = useRef("")         // stops the host from revealing/advancing twice
  sessionRef.current = session
  participantsRef.current = participants

  const isHost = session?.hostId === authUser?.uid
  const myName = userData?.name || authUser?.email?.split("@")[0] || "Student"

  // Subjects the host can pick from. Post-UTME students use their faculty's subjects;
  // JAMB students have none, so list every subject that exists in the question bank.
  const subjectOptions = useMemo(() => {
    if (facultySubjects?.length) return facultySubjects
    const found = new Set()
    getPool(university).forEach(item => {
      if (item.passage && item.questions) item.questions.forEach(q => q.subject && found.add(q.subject))
      else if (item.subject) found.add(item.subject)
    })
    return found.size ? [...found].sort() : ["English"]
  }, [facultySubjects, university])

  // Keep the chosen subject valid (e.g. a JAMB student whose bank has no "English" entry)
  useEffect(() => {
    if (!subjectOptions.includes(selectedSubject)) setSelectedSubject(subjectOptions[0])
  }, [subjectOptions])

  // How many questions exist for the chosen subject
  const availableCount = useMemo(
    () => flattenPool(university, selectedSubject).length,
    [university, selectedSubject]
  )

  // Count chips the host can choose from (never more than what's available)
  const countChoices = useMemo(() => {
    if (availableCount === 0) return []
    const choices = COUNT_CHOICES.filter(n => n <= availableCount)
    // If the pool is small, offer "all of them" as the top choice
    if (!choices.includes(availableCount) && availableCount < COUNT_CHOICES[COUNT_CHOICES.length - 1]) {
      choices.push(availableCount)
    }
    return choices
  }, [availableCount])

  // The count that will actually be used (stays valid when the subject changes)
  const effectiveCount = countChoices.includes(questionCount)
    ? questionCount
    : (countChoices.filter(n => n <= questionCount).pop() ?? countChoices[0] ?? 0)

  const rememberSession = (id) => {
    try {
      if (id) localStorage.setItem(STORAGE_KEY, id)
      else localStorage.removeItem(STORAGE_KEY)
    } catch (e) {}
  }

  // ── Subscribe to session document ──
  useEffect(() => {
    if (!sessionId) return
    const unsub = onSnapshot(
      doc(db, "classrooms", sessionId),
      (snap) => {
        if (!snap.exists()) {
          setError("This session has ended.")
          setView("entry")
          setSessionId(null)
          setSession(null)
          rememberSession(null)
          return
        }
        const data = snap.data()
        setSession(data)
        if (data.status === "waiting") setView("waiting")
        else if (data.status === "live") setView("live")
        else if (data.status === "ended") setView("results")
      },
      () => {
        // permission denied / network error
        setError("Couldn't connect to the session.")
        setView("entry")
        setSessionId(null)
        setSession(null)
        rememberSession(null)
      }
    )
    return () => unsub()
  }, [sessionId])

  // ── Subscribe to ALL participants ──
  // Host: always (needs everyone's answers).
  // Everyone else: only in the waiting room (to see who joined). Once the game is live
  // they stop listening — this is what saves most of the Firestore reads.
  const listenToParticipants =
    !!sessionId && (isHost || (session?.status !== "live" && session?.status !== "ended"))

  useEffect(() => {
    if (!listenToParticipants) return
    const unsub = onSnapshot(
      collection(db, "classrooms", sessionId, "participants"),
      (snap) => {
        const list = snap.docs.map(d => ({ id: d.id, ...d.data() }))
        setParticipants(sortBoard(list))
      },
      () => {}
    )
    return () => unsub()
  }, [sessionId, listenToParticipants])

  // ── Subscribe to MY OWN participant doc (cheap: only changes when I answer) ──
  useEffect(() => {
    if (!sessionId || !authUser?.uid) return
    const unsub = onSnapshot(
      doc(db, "classrooms", sessionId, "participants", authUser.uid),
      (snap) => setMyDoc(snap.exists() ? snap.data() : null),
      () => {}
    )
    return () => unsub()
  }, [sessionId, authUser?.uid])

  // Reset local answer state when question changes
  useEffect(() => {
    setSelectedIndex(null)
    setHasAnswered(false)
  }, [session?.currentQuestionIndex])

  // ── Battle countdown (runs on every device) ──
  // Each device counts down from the moment it receives the question. This avoids problems
  // with phones that have the wrong clock time. Differences are only network delay (~1s).
  const phaseKey = session ? `${session.currentQuestionIndex}-${session.phase || ""}` : ""
  useEffect(() => {
    phaseStartRef.current = Date.now()
    setNow(Date.now())
  }, [phaseKey])

  const isBattleLive = session?.mode === "battle" && session?.status === "live"
  useEffect(() => {
    if (!isBattleLive) return
    const t = setInterval(() => setNow(Date.now()), 250)
    return () => clearInterval(t)
  }, [isBattleLive])

  const battleSecs = session?.secondsPerQuestion || DEFAULT_SECONDS
  const secondsLeft = Math.max(0, Math.ceil((battleSecs * 1000 - (now - phaseStartRef.current)) / 1000))

  // =========================================================
  // HOST: battle engine (reveal → advance), only runs on the host's phone
  // =========================================================
  const battleReveal = async (idx) => {
    const s = sessionRef.current
    if (!s || s.mode !== "battle" || s.phase !== "question" || s.currentQuestionIndex !== idx) return
    const key = `${idx}-reveal`
    if (actionLockRef.current === key) return
    actionLockRef.current = key

    const list = participantsRef.current
    const q = s.questions[idx]
    const optionCounts = q.options.map((_, i) =>
      list.filter(p => p.answeredQuestions?.[idx]?.selectedIndex === i).length
    )
    const answeredCount = list.filter(p => p.answeredQuestions?.[idx]).length

    // Rapid fire: earliest correct answer gets the points
    let winner = null
    if (s.style === "rapid") {
      const correct = list
        .filter(p => p.answeredQuestions?.[idx]?.isCorrect)
        .sort((a, b) => {
          const ta = a.answeredQuestions[idx].at?.toMillis?.() ?? Date.now()
          const tb = b.answeredQuestions[idx].at?.toMillis?.() ?? Date.now()
          return ta - tb
        })
      winner = correct[0] || null
    }
    const winnerPoints = winner ? (winner.answeredQuestions[idx].points || 0) : 0

    const boardSource = list.map(p =>
      winner && p.id === winner.id
        ? { ...p, score: (p.score || 0) + winnerPoints, correct: (p.correct || 0) + 1 }
        : p
    )

    try {
      if (winner) {
        await updateDoc(doc(db, "classrooms", sessionId, "participants", winner.id), {
          score: increment(winnerPoints),
          correct: increment(1),
        })
      }
      await updateDoc(doc(db, "classrooms", sessionId), {
        phase: "reveal",
        optionCounts,
        answeredCount,
        winnerId: winner?.id ?? null,
        winnerName: winner?.name ?? null,
        winnerPoints,
        leaderboard: buildLeaderboard(boardSource),
      })
    } catch (e) {
      console.error("reveal failed", e)
      actionLockRef.current = ""
      setError("Couldn't update the battle. Check your connection.")
    }
  }

  const battleAdvance = async (idx) => {
    const s = sessionRef.current
    if (!s || s.mode !== "battle" || s.phase !== "reveal" || s.currentQuestionIndex !== idx) return
    const key = `${idx}-advance`
    if (actionLockRef.current === key) return
    actionLockRef.current = key
    try {
      const next = idx + 1
      if (next >= s.questions.length) {
        await updateDoc(doc(db, "classrooms", sessionId), { status: "ended", endedAt: serverTimestamp() })
      } else {
        await updateDoc(doc(db, "classrooms", sessionId), {
          currentQuestionIndex: next,
          phase: "question",
          optionCounts: null,
          answeredCount: 0,
          winnerId: null,
          winnerName: null,
          winnerPoints: 0,
        })
      }
    } catch (e) {
      console.error("advance failed", e)
      actionLockRef.current = ""
      setError("Couldn't move to the next question.")
    }
  }

  // Timer for each phase (question time / reveal time)
  useEffect(() => {
    if (!isHost || session?.mode !== "battle" || session?.status !== "live") return
    const idx = session.currentQuestionIndex
    const phase = session.phase
    const ms = phase === "question"
      ? (session.secondsPerQuestion || DEFAULT_SECONDS) * 1000 + GRACE_MS
      : REVEAL_SECONDS * 1000
    const t = setTimeout(() => {
      if (phase === "question") battleReveal(idx)
      else if (phase === "reveal") battleAdvance(idx)
    }, ms)
    return () => clearTimeout(t)
  }, [isHost, session?.mode, session?.status, session?.phase, session?.currentQuestionIndex])

  // Move on early: everyone has answered, or (rapid fire) someone got it right
  useEffect(() => {
    if (!isHost || session?.mode !== "battle" || session?.status !== "live" || session?.phase !== "question") return
    if (!participants.length) return
    const idx = session.currentQuestionIndex
    const answered = participants.filter(p => p.answeredQuestions?.[idx])
    const rapidWin = session.style === "rapid" && answered.some(p => p.answeredQuestions[idx].isCorrect)
    if (rapidWin || answered.length >= participants.length) battleReveal(idx)
  }, [participants, isHost, session?.mode, session?.status, session?.phase, session?.currentQuestionIndex])

  // ── HOST: Create a new session ──
  const handleCreateSession = async () => {
    setCreating(true)
    setError("")
    try {
      const questions = buildQuestionSet(university, selectedSubject, effectiveCount)
      if (questions.length === 0) {
        setError("No questions available for this subject. Try another subject.")
        setCreating(false)
        return
      }
      const joinCode = generateJoinCode()
      const topicLabel = "Random"
      const isBattle = mode === "battle"
      const ref = await addDoc(collection(db, "classrooms"), {
        hostId: authUser.uid,
        hostName: myName,
        title: `${selectedSubject} ${isBattle ? "Battle" : "Classroom"}`,
        mode,
        style: isBattle ? battleStyle : null,
        secondsPerQuestion: isBattle ? battleSeconds : null,
        maxPlayers,
        subject: selectedSubject,
        topic: topicLabel,
        questionCount: questions.length,
        university: university || "",
        status: "waiting",
        phase: null,
        currentQuestionIndex: 0,
        questions,
        leaderboard: [],
        optionCounts: null,
        answeredCount: 0,
        winnerId: null,
        winnerName: null,
        winnerPoints: 0,
        joinCode,
        createdAt: serverTimestamp(),
      })
      // Host auto-joins as a participant too
      await setDoc(doc(db, "classrooms", ref.id, "participants", authUser.uid), {
        name: myName, joinedAt: serverTimestamp(), score: 0, correct: 0, answeredQuestions: {},
      })
      rememberSession(ref.id)
      setSessionId(ref.id)
    } catch (e) {
      console.error("create session failed", e)
      setError("Failed to create session: " + (e.code || e.message))
    }
    setCreating(false)
  }

  // ── PARTICIPANT: Join via code ──
  const handleJoinSession = async () => {
    const code = joinCodeInput.trim().toUpperCase()
    if (code.length < 4) { setError("Please enter a valid join code"); return }
    setJoining(true)
    setError("")
    try {
      // Single-field query (no composite index needed); filter status client-side
      const snap = await getDocs(query(collection(db, "classrooms"), where("joinCode", "==", code)))
      const active = snap.docs.find(d => ["waiting", "live"].includes(d.data().status))
      if (!active) {
        setError("No active session found with that code. Check with your host.")
        setJoining(false)
        return
      }
      const data = active.data()
      const partRef = doc(db, "classrooms", active.id, "participants", authUser.uid)
      const existing = await getDoc(partRef)

      // Only brand-new players are checked; people rejoining keep their progress
      if (!existing.exists()) {
        if (data.mode === "battle" && data.status !== "waiting") {
          setError("This battle has already started. Ask the host for the next one.")
          setJoining(false)
          return
        }
        const countSnap = await getCountFromServer(collection(db, "classrooms", active.id, "participants"))
        if (countSnap.data().count >= (data.maxPlayers || DEFAULT_MAX_PLAYERS)) {
          setError("This session is full.")
          setJoining(false)
          return
        }
        await setDoc(partRef, {
          name: myName, joinedAt: serverTimestamp(), score: 0, correct: 0, answeredQuestions: {},
        })
      }
      rememberSession(active.id)
      setSessionId(active.id)
    } catch (e) {
      console.error("join session failed", e)
      setError("Failed to join session: " + (e.code || e.message))
    }
    setJoining(false)
  }

  // ── HOST: Start the live session ──
  const handleStartSession = async () => {
    try {
      actionLockRef.current = ""
      await updateDoc(doc(db, "classrooms", sessionId), {
        status: "live",
        currentQuestionIndex: 0,
        phase: session.mode === "battle" ? "question" : null,
      })
    } catch (e) {
      setError("Couldn't start the session.")
    }
  }

  // ── PARTICIPANT: Submit answer ──
  const handleSubmitAnswer = async (opt, i) => {
    if (hasAnswered || !session) return
    const qIndex = session.currentQuestionIndex
    if (myDoc?.answeredQuestions?.[qIndex]) return

    const isBattle = session.mode === "battle"
    const isRapid = isBattle && session.style === "rapid"
    const secs = session.secondsPerQuestion || DEFAULT_SECONDS
    const elapsed = Math.max(0, Date.now() - phaseStartRef.current)

    // Battle: only during the question phase, and only before time is up
    if (isBattle && (session.phase !== "question" || elapsed > secs * 1000)) return

    setSelectedIndex(i)
    setHasAnswered(true)

    const q = session.questions[qIndex]
    const isCorrect = optionIsAnswer(q, opt, i)

    // Study = 1 point. Battle = 500–1000 depending on speed.
    const earned = isBattle
      ? Math.max(MAX_POINTS / 2, Math.round(MAX_POINTS * (1 - (Math.min(elapsed, secs * 1000) / (secs * 1000)) / 2)))
      : 1

    const payload = {
      [`answeredQuestions.${qIndex}`]: {
        selected: opt, selectedIndex: i, isCorrect,
        points: isCorrect ? earned : 0,
        timeMs: elapsed,
        at: serverTimestamp(),
      },
      lastAnsweredAt: serverTimestamp(),
    }
    // Rapid fire: the HOST gives the points to whoever was first, so don't score here
    if (!isRapid) {
      payload.score = increment(isCorrect ? earned : 0) // atomic, no read-then-write race
      payload.correct = increment(isCorrect ? 1 : 0)
    }

    try {
      await updateDoc(doc(db, "classrooms", sessionId, "participants", authUser.uid), payload)
    } catch (e) {
      console.error("submit answer failed", e)
      setSelectedIndex(null)
      setHasAnswered(false)
      setError("Couldn't save your answer. Try again.")
    }
  }

  // ── HOST (study): Move to next question (locks unanswered as skipped) ──
  const handleNextQuestion = async () => {
    const qIndex = session.currentQuestionIndex
    const nextIndex = qIndex + 1
    const list = participantsRef.current
    await Promise.allSettled(
      list
        .filter(p => !p.answeredQuestions?.[qIndex])
        .map(p => updateDoc(doc(db, "classrooms", sessionId, "participants", p.id), {
          [`answeredQuestions.${qIndex}`]: { selected: null, selectedIndex: null, isCorrect: false, skipped: true },
        }))
    )
    try {
      const leaderboard = buildLeaderboard(list)
      if (nextIndex >= session.questions.length) {
        await updateDoc(doc(db, "classrooms", sessionId), { status: "ended", endedAt: serverTimestamp(), leaderboard })
      } else {
        await updateDoc(doc(db, "classrooms", sessionId), { currentQuestionIndex: nextIndex, leaderboard })
      }
    } catch (e) {
      setError("Couldn't advance the session.")
    }
  }

  // ── HOST: End now (study or battle) ──
  const handleEndSession = async () => {
    if (!window.confirm("End this session for everyone?")) return
    try {
      await updateDoc(doc(db, "classrooms", sessionId), {
        status: "ended",
        endedAt: serverTimestamp(),
        leaderboard: buildLeaderboard(participantsRef.current),
      })
    } catch (e) {
      setError("Couldn't end the session.")
    }
  }

  const handleLeaveSession = async () => {
    const id = sessionId
    const wasHost = isHost
    const status = session?.status
    // Leave the UI first so our own listeners don't fire "session ended" at us
    rememberSession(null)
    setSessionId(null)
    setSession(null)
    setParticipants([])
    setMyDoc(null)
    setView("entry")
    actionLockRef.current = ""
    if (!id) return
    // After the session has ended, leave data intact so others can still see results
    if (status === "ended") return
    try {
      if (wasHost) await deleteDoc(doc(db, "classrooms", id))
      else await deleteDoc(doc(db, "classrooms", id, "participants", authUser.uid))
    } catch (e) {}
  }

  const myAnswerCount = (idx) => participants.filter(p => p.answeredQuestions?.[idx]).length

  // =========================================================
  // COMING SOON GATE — only used when CLASSROOM_OPEN_TO_ALL is false
  // =========================================================
  if (!isPaid && !CLASSROOM_OPEN_TO_ALL) {
    return (
      <div className="ee-page">
        <header className="ee-header">
          <button className="ee-back-btn" onClick={onBack}>← Back</button>
          <span style={{ fontWeight: 800, fontSize: 15 }}>🏫 Classroom</span>
          <span style={{ width: 60 }} />
        </header>
        <div className="ee-content" style={{ textAlign: "center", paddingTop: 40 }}>
          <div style={{
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            borderRadius: "var(--radius-xl)", padding: "32px 24px",
            color: "#fff", marginBottom: 20
          }}>
            <div style={{ fontSize: 48, marginBottom: 12 }}>🏫</div>
            <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>
              Classroom is Coming Soon
            </div>
            <p style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.7, margin: 0 }}>
              Study live with friends — everyone answers the same question
              at the same time and competes on a real-time leaderboard.
              This feature is currently being tested and will launch soon
              for full access members.
            </p>
          </div>
          <button className="ee-btn ee-btn-primary" onClick={() => onNavigate("upgrade")}>
            🚀 Get Full Access — {UPGRADE_PRICE}
          </button>
        </div>
      </div>
    )
  }

  // =========================================================
  // ENTRY SCREEN
  // =========================================================
  if (view === "entry" || !session) {
    // `!session` covers the brief moment after joining before the first snapshot arrives
    const loadingSession = !!sessionId && !session

    const fieldLabel = {
      fontSize: 12, fontWeight: 800, color: "var(--text2)", marginBottom: 6
    }
    const selectStyle = {
      width: "100%", padding: "12px 14px", marginBottom: 14,
      border: "1.5px solid var(--border)", borderRadius: "var(--radius-md)",
      background: "var(--surface2)", color: "var(--text)", fontSize: 14,
      fontFamily: "var(--font-main)", outline: "none", boxSizing: "border-box"
    }
    const modeCard = (key, icon, title, blurb) => {
      const active = mode === key
      return (
        <button
          type="button"
          onClick={() => setMode(key)}
          style={{
            flex: 1, textAlign: "left", padding: "12px", cursor: "pointer",
            borderRadius: "var(--radius-md)", fontFamily: "var(--font-main)",
            border: `2px solid ${active ? "var(--primary)" : "var(--border)"}`,
            background: active ? "var(--primary-light)" : "var(--surface2)",
            color: "var(--text)"
          }}
        >
          <div style={{ fontSize: 20, marginBottom: 2 }}>{icon}</div>
          <div style={{ fontSize: 13, fontWeight: 800, color: active ? "var(--primary)" : "var(--text)" }}>{title}</div>
          <div style={{ fontSize: 11, color: "var(--text3)", lineHeight: 1.4, marginTop: 2 }}>{blurb}</div>
        </button>
      )
    }

    return (
      <div className="ee-page">
        <header className="ee-header">
          <button className="ee-back-btn" onClick={onBack}>← Back</button>
          <span style={{ fontWeight: 800, fontSize: 15 }}>🏫 Classroom</span>
          <span style={{ width: 60 }} />
        </header>
        <div className="ee-content">

          <div style={{
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            borderRadius: "var(--radius-xl)", padding: "24px 20px",
            marginBottom: 20, color: "#fff", textAlign: "center"
          }}>
            <div style={{ fontSize: 40, marginBottom: 8 }}>🏫</div>
            <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 6 }}>Study Together, Live</div>
            <p style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.6, margin: 0 }}>
              Study at your host's pace, or go head-to-head in a timed battle.
              See how you rank in real time.
            </p>
            {CLASSROOM_OPEN_TO_ALL && !isPaid && (
              <div style={{
                display: "inline-block", marginTop: 10, fontSize: 11, fontWeight: 800,
                background: "rgba(255,255,255,0.2)", padding: "3px 12px", borderRadius: 20
              }}>🧪 BETA · open to everyone for now</div>
            )}
          </div>

          {loadingSession && (
            <div style={{ textAlign: "center", padding: 16, fontSize: 13, color: "var(--text3)" }}>
              Connecting to session...
            </div>
          )}

          {error && (
            <div style={{
              background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.25)",
              borderRadius: "var(--radius-md)", padding: "10px 14px",
              fontSize: 13, color: "#dc2626", marginBottom: 16, fontWeight: 600
            }}>{error}</div>
          )}

          {/* Join a session */}
          <div style={{
            background: "var(--surface)", border: "1.5px solid var(--border)",
            borderRadius: "var(--radius-lg)", padding: "18px", marginBottom: 16
          }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: "var(--text)", marginBottom: 10 }}>
              🔑 Join a Session
            </div>
            <input
              value={joinCodeInput}
              onChange={e => setJoinCodeInput(e.target.value.toUpperCase())}
              placeholder="Enter join code e.g. AB3X9"
              maxLength={CODE_LENGTH}
              style={{
                width: "100%", padding: "14px 16px", marginBottom: 10,
                border: "1.5px solid var(--border)", borderRadius: "var(--radius-md)",
                background: "var(--surface2)", fontSize: 18, fontWeight: 800,
                letterSpacing: "0.15em", textAlign: "center",
                color: "var(--text)", fontFamily: "var(--font-main)",
                outline: "none", boxSizing: "border-box"
              }}
            />
            <button
              onClick={handleJoinSession}
              disabled={joining || !joinCodeInput.trim()}
              className="ee-btn ee-btn-primary"
              style={{ opacity: joining || !joinCodeInput.trim() ? 0.6 : 1 }}
            >
              {joining ? "Joining..." : "Join Session →"}
            </button>
          </div>

          {/* Create a session */}
          <div style={{
            background: "var(--surface)", border: "1.5px solid var(--border)",
            borderRadius: "var(--radius-lg)", padding: "18px"
          }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: "var(--text)", marginBottom: 6 }}>
              ➕ Start a New Session
            </div>
            <p style={{ fontSize: 12, color: "var(--text3)", marginBottom: 14, lineHeight: 1.5 }}>
              Choose a mode, set it up, and share the code with friends.
            </p>

            {/* Mode */}
            <div style={fieldLabel}>Mode</div>
            <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
              {modeCard("study", "📖", "Study", "You control the pace. Answers show instantly.")}
              {modeCard("battle", "⚔️", "Battle", "Timed. Auto-runs. Fastest and right wins.")}
            </div>

            {/* Battle style */}
            {mode === "battle" && (
              <>
                <div style={fieldLabel}>Battle style</div>
                <div style={{ display: "flex", gap: 8, marginBottom: 6 }}>
                  <Chip active={battleStyle === "classic"} onClick={() => setBattleStyle("classic")}>🎯 Classic</Chip>
                  <Chip active={battleStyle === "rapid"} onClick={() => setBattleStyle("rapid")}>⚡ Rapid Fire</Chip>
                </div>
                <div style={{ fontSize: 11, color: "var(--text3)", marginBottom: 14, lineHeight: 1.5 }}>
                  {battleStyle === "classic"
                    ? "Everyone answers before the timer ends. Faster correct answers earn more points."
                    : "First person to answer correctly wins the question, then it moves on straight away. Best with 2–15 players."}
                </div>
              </>
            )}

            {/* 1. Subject */}
            <div style={fieldLabel}>Subject</div>
            <select
              value={selectedSubject}
              onChange={e => setSelectedSubject(e.target.value)}
              style={selectStyle}
            >
              {subjectOptions.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <div style={{ fontSize: 11, color: "var(--text3)", marginTop: -8, marginBottom: 14 }}>
              {availableCount} question{availableCount === 1 ? "" : "s"} available
            </div>

            {/* 2. Number of questions */}
            <div style={fieldLabel}>Number of questions</div>
            {countChoices.length === 0 ? (
              <div style={{ fontSize: 12, color: "#dc2626", fontWeight: 600, marginBottom: 14 }}>
                No questions for this subject. Try another subject.
              </div>
            ) : (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
                {countChoices.map(n => (
                  <Chip key={n} active={n === effectiveCount} onClick={() => setQuestionCount(n)}>{n}</Chip>
                ))}
              </div>
            )}

            {/* 3. Seconds per question (battle only) */}
            {mode === "battle" && (
              <>
                <div style={fieldLabel}>Seconds per question</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
                  {SECONDS_CHOICES.map(n => (
                    <Chip key={n} active={n === battleSeconds} onClick={() => setBattleSeconds(n)}>{n}s</Chip>
                  ))}
                </div>
              </>
            )}

            {/* 4. Player limit */}
            <div style={fieldLabel}>Maximum players</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 18 }}>
              {PLAYER_CHOICES.map(n => (
                <Chip key={n} active={n === maxPlayers} onClick={() => setMaxPlayers(n)}>{n}</Chip>
              ))}
            </div>

            <button
              onClick={handleCreateSession}
              disabled={creating || effectiveCount === 0}
              className="ee-btn ee-btn-secondary"
              style={{ opacity: creating || effectiveCount === 0 ? 0.6 : 1 }}
            >
              {creating ? "Creating..." : mode === "battle" ? "Create Battle ⚔️" : "Create Session 🚀"}
            </button>
          </div>

        </div>
      </div>
    )
  }

  // =========================================================
  // WAITING ROOM
  // =========================================================
  if (view === "waiting") {
    const cap = session.maxPlayers || DEFAULT_MAX_PLAYERS
    const isBattle = session.mode === "battle"
    return (
      <div className="ee-page">
        <header className="ee-header">
          <button className="ee-back-btn" onClick={handleLeaveSession}>← Leave</button>
          <span style={{ fontWeight: 800, fontSize: 15 }}>{isBattle ? "⚔️ Battle Lobby" : "🏫 Waiting Room"}</span>
          <span style={{ width: 60 }} />
        </header>
        <div className="ee-content">

          <div style={{
            background: isBattle ? "linear-gradient(135deg, #ef4444, #b91c1c)" : "linear-gradient(135deg, #667eea, #764ba2)",
            borderRadius: "var(--radius-xl)", padding: "20px",
            marginBottom: 20, color: "#fff", textAlign: "center"
          }}>
            <div style={{ fontSize: 12, opacity: 0.8, marginBottom: 6, fontWeight: 700, letterSpacing: 1 }}>
              JOIN CODE
            </div>
            <div style={{ fontSize: 36, fontWeight: 900, letterSpacing: "0.2em", marginBottom: 8 }}>
              {session.joinCode}
            </div>
            <div style={{ fontSize: 13, opacity: 0.9 }}>
              {session.subject} · Random topics · {session.questions?.length} questions
            </div>
            {isBattle && (
              <div style={{ fontSize: 12, opacity: 0.9, marginTop: 6, fontWeight: 700 }}>
                {session.style === "rapid" ? "⚡ Rapid Fire" : "🎯 Classic"} · {session.secondsPerQuestion}s per question
              </div>
            )}
          </div>

          {error && (
            <div style={{ fontSize: 13, color: "#dc2626", marginBottom: 12, fontWeight: 600 }}>{error}</div>
          )}

          <div style={{ fontSize: 13, fontWeight: 800, color: "var(--text)", marginBottom: 12 }}>
            👥 Players ({participants.length}/{cap})
          </div>

          {participants.map(p => (
            <div key={p.id} style={{
              display: "flex", alignItems: "center", gap: 12,
              background: "var(--surface)", border: "1px solid var(--border)",
              borderRadius: "var(--radius-md)", padding: "12px 14px", marginBottom: 8
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: "50%",
                background: "var(--primary-light)", display: "flex",
                alignItems: "center", justifyContent: "center",
                fontSize: 15, fontWeight: 800, color: "var(--primary)", flexShrink: 0
              }}>{p.name?.[0]?.toUpperCase() || "?"}</div>
              <div style={{ flex: 1, fontSize: 14, fontWeight: 700, color: "var(--text)" }}>
                {p.name}
                {p.id === session.hostId && (
                  <span style={{
                    marginLeft: 8, fontSize: 10, fontWeight: 800,
                    background: "var(--primary-light)", color: "var(--primary)",
                    padding: "1px 8px", borderRadius: 10
                  }}>HOST</span>
                )}
              </div>
            </div>
          ))}

          {isHost ? (
            <button
              onClick={handleStartSession}
              className="ee-btn ee-btn-primary"
              style={{ marginTop: 16 }}
              disabled={participants.length < 1}
            >
              {isBattle ? "⚔️ Start Battle" : "▶ Start Session"}
            </button>
          ) : (
            <div style={{
              textAlign: "center", padding: "16px",
              color: "var(--text3)", fontSize: 13, marginTop: 8
            }}>
              ⏳ Waiting for host to start...
            </div>
          )}
        </div>
      </div>
    )
  }

  // =========================================================
  // LIVE SESSION
  // =========================================================
  if (view === "live") {
    const qIdx = session.currentQuestionIndex
    const q = session.questions[qIdx]
    if (!q) return null
    const total = session.questions.length
    const isBattle = session.mode === "battle"
    const isRapid = isBattle && session.style === "rapid"
    const phase = session.phase
    const myAnswer = myDoc?.answeredQuestions?.[qIdx]
    const locked = hasAnswered || !!myAnswer
    const pickedIndex = myAnswer?.selectedIndex ?? selectedIndex
    const timeUp = isBattle && phase === "question" && secondsLeft === 0
    // Battle: answers are only shown in the reveal phase. Study: right after you answer.
    const revealed = isBattle ? phase === "reveal" : locked
    const canAnswer = !locked && !(isBattle && (phase !== "question" || timeUp))
    const answeredCount = myAnswerCount(qIdx)
    // Host sees a live board; everyone else sees what the host last published
    const board = isHost ? buildLeaderboard(participants) : (session.leaderboard || [])
    const myScore = myDoc?.score || 0

    return (
      <div className="ee-page">
        <header className="ee-header">
          <button className="ee-back-btn" onClick={handleLeaveSession}>← Leave</button>
          <span style={{ fontWeight: 800, fontSize: 14 }}>{isBattle ? "⚔️ " : ""}{session.subject}</span>
          <span style={{ fontSize: 12, color: "var(--text2)" }}>{qIdx + 1}/{total}</span>
        </header>

        <div className="ee-content">
          {/* Progress bar */}
          <div style={{ height: 4, borderRadius: 2, background: "var(--border)", marginBottom: 12 }}>
            <div style={{
              height: "100%", borderRadius: 2, background: "var(--primary)",
              width: `${((qIdx + 1) / total) * 100}%`,
              transition: "width 0.3s"
            }} />
          </div>

          {/* Battle timer */}
          {isBattle && phase === "question" && (
            <div style={{ marginBottom: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
                <span style={{ fontSize: 11, fontWeight: 800, color: "var(--text3)", textTransform: "uppercase" }}>
                  {isRapid ? "⚡ Rapid Fire" : "🎯 Classic"}
                </span>
                <span style={{
                  fontSize: 26, fontWeight: 900,
                  color: secondsLeft <= 5 ? "#dc2626" : "var(--text)"
                }}>{secondsLeft}s</span>
              </div>
              <div style={{ height: 6, borderRadius: 3, background: "var(--border)" }}>
                <div style={{
                  height: "100%", borderRadius: 3,
                  background: secondsLeft <= 5 ? "#dc2626" : "var(--primary)",
                  width: `${Math.min(100, (secondsLeft / battleSecs) * 100)}%`,
                  transition: "width 0.25s linear"
                }} />
              </div>
            </div>
          )}

          {error && (
            <div style={{ fontSize: 13, color: "#dc2626", marginBottom: 12, fontWeight: 600 }}>{error}</div>
          )}

          {/* Status strip */}
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            marginBottom: 14, padding: "8px 14px",
            background: "var(--surface)", borderRadius: "var(--radius-md)",
            border: "1px solid var(--border)"
          }}>
            {isHost ? (
              <span style={{ fontSize: 12, color: "var(--text2)", fontWeight: 700 }}>
                👥 {answeredCount}/{participants.length} answered
              </span>
            ) : (
              <span style={{ fontSize: 12, color: "var(--text2)", fontWeight: 700 }}>
                ⭐ {myScore} {isBattle ? "pts" : "correct"}
              </span>
            )}
            {isHost && (
              <span style={{ fontSize: 11, color: "var(--primary)", fontWeight: 800 }}>HOST VIEW</span>
            )}
          </div>

          {/* Passage */}
          {q.passage && (
            <div style={{
              background: "var(--surface2)", borderRadius: "var(--radius-md)",
              padding: "12px 14px", marginBottom: 12,
              fontSize: 12, color: "var(--text2)", lineHeight: 1.7
            }}>{q.passage}</div>
          )}

          {/* Question */}
          <div style={{
            background: "var(--surface)", border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)", padding: "16px", marginBottom: 16,
            fontSize: 14, color: "var(--text)", lineHeight: 1.7, fontWeight: 600
          }}>{q.question}</div>

          {/* Options */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
            {q.options.map((opt, i) => {
              const cleanOpt = String(opt).replace(/^[A-D][\.\)\s]+/, "")
              let bg = "var(--surface)", border = "var(--border)", color = "var(--text)"
              if (revealed) {
                if (optionIsAnswer(q, opt, i)) { bg = "rgba(34,197,94,0.1)"; border = "#16a34a"; color = "#16a34a" }
                else if (i === pickedIndex) { bg = "rgba(239,68,68,0.08)"; border = "#dc2626"; color = "#dc2626" }
              } else if (locked && i === pickedIndex) {
                // Battle, answer sent but not revealed yet
                bg = "var(--primary-light)"; border = "var(--primary)"; color = "var(--primary)"
              }
              const count = isBattle && phase === "reveal" ? session.optionCounts?.[i] : null
              return (
                <button
                  key={i}
                  onClick={() => handleSubmitAnswer(opt, i)}
                  disabled={!canAnswer}
                  style={{
                    width: "100%", textAlign: "left", padding: "14px 16px",
                    borderRadius: "var(--radius-md)", background: bg,
                    border: `1.5px solid ${border}`, color,
                    fontSize: 13, fontWeight: 600, cursor: canAnswer ? "pointer" : "default",
                    fontFamily: "var(--font-main)", display: "flex", alignItems: "center", gap: 10,
                    opacity: !canAnswer && !locked && !revealed ? 0.6 : 1
                  }}
                >
                  <span style={{
                    width: 22, height: 22, borderRadius: "50%", flexShrink: 0,
                    background: border === "var(--border)" ? "var(--surface2)" : border,
                    color: border === "var(--border)" ? "var(--text3)" : "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 10, fontWeight: 800
                  }}>{String.fromCharCode(65 + i)}</span>
                  <span style={{ flex: 1 }}>{cleanOpt}</span>
                  {count !== null && count !== undefined && (
                    <span style={{ fontSize: 11, fontWeight: 800, opacity: 0.8 }}>👤 {count}</span>
                  )}
                </button>
              )
            })}
          </div>

          {/* Battle: result banner after the reveal */}
          {isBattle && phase === "reveal" && (
            <div style={{
              background: "var(--surface)", border: "1.5px solid var(--border)",
              borderRadius: "var(--radius-md)", padding: "12px 14px", marginBottom: 16,
              textAlign: "center", fontSize: 13, fontWeight: 700, color: "var(--text)"
            }}>
              {isRapid ? (
                session.winnerId ? (
                  session.winnerId === authUser.uid
                    ? `⚡ You got it first! +${session.winnerPoints}`
                    : `⚡ ${session.winnerName} got it first!`
                ) : "😅 Nobody got it right"
              ) : !myAnswer ? "⏱ You didn't answer in time"
                : myAnswer.isCorrect ? `✅ Correct! +${myAnswer.points || 0}`
                : "❌ Not this time"}
              <div style={{ fontSize: 11, color: "var(--text3)", marginTop: 4, fontWeight: 600 }}>
                Next question coming up...
              </div>
            </div>
          )}

          {/* Explanation once the answer is revealed */}
          {revealed && q.explanation && (
            <div style={{
              background: "var(--surface2)", borderRadius: "var(--radius-md)",
              padding: "12px 14px", marginBottom: 16,
              fontSize: 12, color: "var(--text2)", lineHeight: 1.7
            }}>💡 {q.explanation}</div>
          )}

          {/* Leaderboard */}
          <div style={{ fontSize: 12, fontWeight: 800, color: "var(--text3)", marginBottom: 8, textTransform: "uppercase" }}>
            Leaderboard {!isHost && <span style={{ textTransform: "none", fontWeight: 600 }}>(updates each question)</span>}
          </div>
          {board.length === 0 && (
            <div style={{ fontSize: 12, color: "var(--text3)", marginBottom: 8 }}>
              Scores will appear after the first question.
            </div>
          )}
          {/* Top 5, plus your own row if you're ranked lower */}
          {board.map((p, i) => ({ p, i })).filter(({ p, i }) => i < 5 || p.id === authUser.uid).map(({ p, i }) => (
            <div key={p.id} style={{
              display: "flex", alignItems: "center", gap: 10,
              padding: "8px 12px", marginBottom: 6,
              background: p.id === authUser.uid ? "var(--primary-light)" : "var(--surface)",
              borderRadius: "var(--radius-md)", border: "1px solid var(--border)"
            }}>
              <span style={{ fontSize: 12, fontWeight: 800, color: "var(--text3)", width: 18 }}>#{i + 1}</span>
              <span style={{ flex: 1, fontSize: 13, fontWeight: 700, color: "var(--text)" }}>{p.name}</span>
              <span style={{ fontSize: 13, fontWeight: 800, color: "var(--primary)" }}>{p.score || 0}pts</span>
            </div>
          ))}

          {/* Host controls */}
          {isHost && !isBattle && (
            <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
              <button onClick={handleEndSession} className="ee-btn ee-btn-secondary" style={{ flex: 1 }}>
                ⏹ End Session
              </button>
              <button onClick={handleNextQuestion} className="ee-btn ee-btn-primary" style={{ flex: 2 }}>
                {qIdx + 1 >= total ? "Finish 🏁" : "Next Question →"}
              </button>
            </div>
          )}
          {isHost && isBattle && (
            <div style={{ marginTop: 16 }}>
              <button onClick={handleEndSession} className="ee-btn ee-btn-secondary">
                ⏹ End Battle
              </button>
              <div style={{ fontSize: 11, color: "var(--text3)", textAlign: "center", marginTop: 8 }}>
                Keep this screen open — your phone runs the battle for everyone.
              </div>
            </div>
          )}

          {!isHost && !isBattle && locked && (
            <div style={{
              textAlign: "center", padding: "14px", marginTop: 12,
              color: "var(--text3)", fontSize: 13
            }}>
              ✓ Answer locked in. Waiting for host to continue...
            </div>
          )}
          {!isHost && isBattle && phase === "question" && locked && (
            <div style={{
              textAlign: "center", padding: "14px", marginTop: 12,
              color: "var(--text3)", fontSize: 13
            }}>
              ✓ Answer locked in. Waiting for the reveal...
            </div>
          )}
        </div>
      </div>
    )
  }

  // =========================================================
  // RESULTS SCREEN — top 3 podium + everyone ranked by score
  // =========================================================
  if (view === "results") {
    const total = session.questions?.length || 0
    const isBattle = session.mode === "battle"
    // Host publishes the final board. Fall back to local data if it's missing.
    const board = session.leaderboard?.length
      ? session.leaderboard
      : buildLeaderboard(participants)
    const topThree = board.slice(0, 3)

    // Podium layout: 2nd | 1st | 3rd (only the spots that actually have a player)
    const podium = [
      { rank: 1, medal: "🥈", height: 90,  color: "#94a3b8" },
      { rank: 0, medal: "🥇", height: 120, color: "#f59e0b" },
      { rank: 2, medal: "🥉", height: 70,  color: "#c2813b" },
    ].filter(slot => topThree[slot.rank])

    const scoreLabel = (p) => isBattle ? `${p.score || 0} pts` : `${p.score || 0}/${total}`

    return (
      <div className="ee-page">
        <header className="ee-header">
          <button className="ee-back-btn" onClick={handleLeaveSession}>← Done</button>
          <span style={{ fontWeight: 800, fontSize: 15 }}>🏁 Results</span>
          <span style={{ width: 60 }} />
        </header>
        <div className="ee-content">

          <div style={{
            background: "linear-gradient(135deg, #f59e0b, #d97706)",
            borderRadius: "var(--radius-xl)", padding: "24px",
            marginBottom: 20, color: "#fff", textAlign: "center"
          }}>
            <div style={{ fontSize: 40, marginBottom: 8 }}>🏆</div>
            <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 4 }}>
              {isBattle ? "Battle Complete!" : "Session Complete!"}
            </div>
            <div style={{ fontSize: 13, opacity: 0.9 }}>
              {session.subject} · Random topics · {total} questions
            </div>
          </div>

          {/* Top 3 podium */}
          {topThree.length > 0 && (
            <>
              <div style={{ fontSize: 13, fontWeight: 800, color: "var(--text)", marginBottom: 14 }}>
                🏅 Top {topThree.length === 1 ? "Performer" : topThree.length}
              </div>
              <div style={{
                display: "flex", alignItems: "flex-end", justifyContent: "center",
                gap: 10, marginBottom: 24
              }}>
                {podium.map(({ rank, medal, height, color }) => {
                  const p = topThree[rank]
                  const isMe = p.id === authUser.uid
                  return (
                    <div key={p.id} style={{ flex: 1, maxWidth: 110, textAlign: "center" }}>
                      <div style={{ fontSize: 26, marginBottom: 4 }}>{medal}</div>
                      <div style={{
                        width: 44, height: 44, borderRadius: "50%", margin: "0 auto 6px",
                        background: "var(--primary-light)", border: `2px solid ${color}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 18, fontWeight: 800, color: "var(--primary)"
                      }}>{p.name?.[0]?.toUpperCase() || "?"}</div>
                      <div style={{
                        fontSize: 12, fontWeight: 800, color: "var(--text)",
                        overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"
                      }}>
                        {p.name}{isMe && <span style={{ color: "var(--primary)" }}> (You)</span>}
                      </div>
                      <div style={{ fontSize: 11, color: "var(--text3)", marginBottom: 6 }}>
                        {scoreLabel(p)}
                      </div>
                      <div style={{
                        height, background: color, opacity: 0.9,
                        borderRadius: "10px 10px 0 0",
                        display: "flex", alignItems: "flex-start", justifyContent: "center",
                        paddingTop: 8, color: "#fff", fontSize: 20, fontWeight: 900
                      }}>{rank + 1}</div>
                    </div>
                  )
                })}
              </div>
            </>
          )}

          {/* Everyone, arranged by score */}
          <div style={{ fontSize: 13, fontWeight: 800, color: "var(--text)", marginBottom: 12 }}>
            📋 Full Ranking ({board.length})
          </div>

          {board.map((p, i) => {
            const correct = p.correct || 0
            const pct = total > 0 ? Math.round((correct / total) * 100) : 0
            const medal = i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : null
            return (
              <div key={p.id} style={{
                display: "flex", alignItems: "center", gap: 12,
                background: p.id === authUser.uid
                  ? "var(--primary-light)"
                  : i === 0 ? "rgba(245,158,11,0.08)" : "var(--surface)",
                border: i === 0 ? "1.5px solid rgba(245,158,11,0.4)" : "1px solid var(--border)",
                borderRadius: "var(--radius-lg)", padding: "14px 16px", marginBottom: 8
              }}>
                <span style={{ fontSize: 20, width: 28, textAlign: "center" }}>
                  {medal || `#${i + 1}`}
                </span>
                <div style={{
                  width: 38, height: 38, borderRadius: "50%",
                  background: "var(--primary-light)", display: "flex",
                  alignItems: "center", justifyContent: "center",
                  fontSize: 16, fontWeight: 800, color: "var(--primary)", flexShrink: 0
                }}>{p.name?.[0]?.toUpperCase() || "?"}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 800, color: "var(--text)" }}>
                    {p.name}{p.id === authUser.uid && <span style={{ color: "var(--primary)" }}> (You)</span>}
                  </div>
                  <div style={{ fontSize: 11, color: "var(--text3)" }}>{correct}/{total} correct</div>
                </div>
                <div style={{ fontSize: 16, fontWeight: 900, color: "var(--primary)" }}>
                  {isBattle ? `${p.score || 0}` : `${pct}%`}
                  {isBattle && <span style={{ fontSize: 10, fontWeight: 700 }}> pts</span>}
                </div>
              </div>
            )
          })}

          <button onClick={handleLeaveSession} className="ee-btn ee-btn-primary" style={{ marginTop: 16 }}>
            Back to Classroom 🏫
          </button>
        </div>
      </div>
    )
  }

  return null
}

export default Classroom