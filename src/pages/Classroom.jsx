// Classroom — synchronized live study session
// Host controls pace, everyone sees the same question at the same time
// Stage 1: core sync only (no chat yet)

import { useState, useEffect, useRef } from "react"
import { db } from "../firebase"
import {
  doc, collection, addDoc, updateDoc, onSnapshot,
  serverTimestamp, getDoc, deleteDoc, setDoc, query, where, getDocs
} from "firebase/firestore"
import { POST_UTME_UNIVERSITIES } from "../data/postutme/index"

const generateJoinCode = () => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789" // no confusing chars (0,O,1,I)
  let code = ""
  for (let i = 0; i < 5; i++) code += chars[Math.floor(Math.random() * chars.length)]
  return code
}

// Build a question set for the session from existing question pool
const buildQuestionSet = (university, subject, count = 10) => {
  const pool = POST_UTME_UNIVERSITIES[university]?.questions || []
  const flat = []
  pool.forEach(item => {
    if (item.passage && item.questions) {
      item.questions.forEach(inner => {
        if (!subject || inner.subject === subject) {
          flat.push({ ...inner, passage: item.passage })
        }
      })
    } else if (!subject || item.subject === subject) {
      flat.push(item)
    }
  })
  // Shuffle and pick
  const shuffled = flat.sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count).map((q, i) => ({
    index: i,
    question: q.question,
    options: q.options || [],
    answer: q.answer,
    explanation: q.explanation || "",
    subject: q.subject || subject || "General",
    topic: q.topic || "General",
    passage: q.passage || null,
  }))
}

const Classroom = ({ onNavigate, onBack, authUser, userData, university, facultySubjects, isPaid }) => {
  const [view, setView] = useState("entry") // entry | waiting | live | results
  const [sessionId, setSessionId] = useState(null)
  const [session, setSession] = useState(null)
  const [participants, setParticipants] = useState([])
  const [joinCodeInput, setJoinCodeInput] = useState("")
  const [error, setError] = useState("")
  const [creating, setCreating] = useState(false)
  const [joining, setJoining] = useState(false)
  const [selectedSubject, setSelectedSubject] = useState(facultySubjects?.[0] || "English")
  const [selectedOption, setSelectedOption] = useState(null)
  const [hasAnswered, setHasAnswered] = useState(false)

  const isHost = session?.hostId === authUser?.uid
  const myName = userData?.name || authUser?.email?.split("@")[0] || "Student"

  // ── Subscribe to session document ──
  useEffect(() => {
    if (!sessionId) return
    const unsub = onSnapshot(doc(db, "classrooms", sessionId), (snap) => {
      if (!snap.exists()) {
        setError("This session has ended.")
        setView("entry")
        setSessionId(null)
        return
      }
      const data = snap.data()
      setSession(data)
      if (data.status === "waiting") setView("waiting")
      else if (data.status === "live") setView("live")
      else if (data.status === "ended") setView("results")
    })
    return () => unsub()
  }, [sessionId])

  // ── Subscribe to participants ──
  useEffect(() => {
    if (!sessionId) return
    const unsub = onSnapshot(collection(db, "classrooms", sessionId, "participants"), (snap) => {
      const list = snap.docs.map(d => ({ id: d.id, ...d.data() }))
      list.sort((a, b) => (b.score || 0) - (a.score || 0))
      setParticipants(list)
    })
    return () => unsub()
  }, [sessionId])

  // Reset answer state when question changes
  useEffect(() => {
    setSelectedOption(null)
    setHasAnswered(false)
  }, [session?.currentQuestionIndex])

  // ── HOST: Create a new session ──
  const handleCreateSession = async () => {
    setCreating(true)
    setError("")
    try {
      const questions = buildQuestionSet(university, selectedSubject, 10)
      if (questions.length === 0) {
        setError("No questions available for this subject. Try another.")
        setCreating(false)
        return
      }
      const joinCode = generateJoinCode()
      const newSession = {
        hostId: authUser.uid,
        hostName: myName,
        title: `${selectedSubject} Classroom`,
        subject: selectedSubject,
        university,
        status: "waiting",
        currentQuestionIndex: 0,
        questions,
        joinCode,
        createdAt: serverTimestamp(),
      }
      const ref = await addDoc(collection(db, "classrooms"), newSession)
      // Host auto-joins as a participant too
      await setDoc(doc(db, "classrooms", ref.id, "participants", authUser.uid), {
        name: myName, joinedAt: serverTimestamp(), score: 0, answeredQuestions: {},
      })
      setSessionId(ref.id)
    } catch (e) {
      setError("Failed to create session. Please try again.")
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
      const q = query(collection(db, "classrooms"), where("joinCode", "==", code), where("status", "in", ["waiting", "live"]))
      const snap = await getDocs(q)
      if (snap.empty) {
        setError("No active session found with that code. Check with your host.")
        setJoining(false)
        return
      }
      const sessionDoc = snap.docs[0]
      await setDoc(doc(db, "classrooms", sessionDoc.id, "participants", authUser.uid), {
        name: myName, joinedAt: serverTimestamp(), score: 0, answeredQuestions: {},
      }, { merge: true })
      setSessionId(sessionDoc.id)
    } catch (e) {
      setError("Failed to join session. Please try again.")
    }
    setJoining(false)
  }

  // ── HOST: Start the live session ──
  const handleStartSession = async () => {
    await updateDoc(doc(db, "classrooms", sessionId), { status: "live", currentQuestionIndex: 0 })
  }

  // ── PARTICIPANT: Submit answer ──
  const handleSubmitAnswer = async (option) => {
    if (hasAnswered) return
    setSelectedOption(option)
    setHasAnswered(true)
    const q = session.questions[session.currentQuestionIndex]
    const isCorrect = option === q.answer
    try {
      const partRef = doc(db, "classrooms", sessionId, "participants", authUser.uid)
      const partSnap = await getDoc(partRef)
      const currentScore = partSnap.exists() ? (partSnap.data().score || 0) : 0
      await updateDoc(partRef, {
        [`answeredQuestions.${session.currentQuestionIndex}`]: { selected: option, isCorrect },
        score: isCorrect ? currentScore + 1 : currentScore,
        lastAnsweredAt: serverTimestamp(),
      })
    } catch (e) {}
  }

  // ── HOST: Move to next question (locks unanswered as skipped) ──
  const handleNextQuestion = async () => {
    const nextIndex = session.currentQuestionIndex + 1
    // Lock any unanswered participants as skipped for current question
    for (const p of participants) {
      if (!p.answeredQuestions?.[session.currentQuestionIndex]) {
        try {
          await updateDoc(doc(db, "classrooms", sessionId, "participants", p.id), {
            [`answeredQuestions.${session.currentQuestionIndex}`]: { selected: null, isCorrect: false, skipped: true },
          })
        } catch (e) {}
      }
    }
    if (nextIndex >= session.questions.length) {
      await updateDoc(doc(db, "classrooms", sessionId), { status: "ended", endedAt: serverTimestamp() })
    } else {
      await updateDoc(doc(db, "classrooms", sessionId), { currentQuestionIndex: nextIndex })
    }
  }

  const handleEndSession = async () => {
    if (!window.confirm("End this session for everyone?")) return
    await updateDoc(doc(db, "classrooms", sessionId), { status: "ended", endedAt: serverTimestamp() })
  }

  const handleLeaveSession = async () => {
    if (isHost) {
      try { await deleteDoc(doc(db, "classrooms", sessionId)) } catch (e) {}
    } else {
      try { await deleteDoc(doc(db, "classrooms", sessionId, "participants", authUser.uid)) } catch (e) {}
    }
    setSessionId(null)
    setSession(null)
    setView("entry")
  }

  const myAnswerCount = (idx) => participants.filter(p => p.answeredQuestions?.[idx]).length

  // =========================================================
  // COMING SOON GATE — Classroom is paid-only and still in beta
  // =========================================================
  if (!isPaid) {
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
            🚀 Get Full Access — ₦2,500
          </button>
        </div>
      </div>
    )
  }

  // =========================================================
  // ENTRY SCREEN
  // =========================================================
  if (view === "entry") {
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
              Join a live classroom session — everyone answers the same question
              at the same time. See how you rank in real time.
            </p>
          </div>

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
              maxLength={6}
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
            <div style={{ fontSize: 14, fontWeight: 800, color: "var(--text)", marginBottom: 10 }}>
              ➕ Start a New Session
            </div>
            <p style={{ fontSize: 12, color: "var(--text3)", marginBottom: 12, lineHeight: 1.5 }}>
              Pick a subject — you'll get a code to share with friends.
            </p>
            <select
              value={selectedSubject}
              onChange={e => setSelectedSubject(e.target.value)}
              style={{
                width: "100%", padding: "12px 14px", marginBottom: 12,
                border: "1.5px solid var(--border)", borderRadius: "var(--radius-md)",
                background: "var(--surface2)", color: "var(--text)", fontSize: 14,
                fontFamily: "var(--font-main)", outline: "none", boxSizing: "border-box"
              }}
            >
              {(facultySubjects || ["English", "Mathematics"]).map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            <button
              onClick={handleCreateSession}
              disabled={creating}
              className="ee-btn ee-btn-secondary"
              style={{ opacity: creating ? 0.6 : 1 }}
            >
              {creating ? "Creating..." : "Create Session 🚀"}
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
    return (
      <div className="ee-page">
        <header className="ee-header">
          <button className="ee-back-btn" onClick={handleLeaveSession}>← Leave</button>
          <span style={{ fontWeight: 800, fontSize: 15 }}>🏫 Waiting Room</span>
          <span style={{ width: 60 }} />
        </header>
        <div className="ee-content">

          <div style={{
            background: "linear-gradient(135deg, #667eea, #764ba2)",
            borderRadius: "var(--radius-xl)", padding: "20px",
            marginBottom: 20, color: "#fff", textAlign: "center"
          }}>
            <div style={{ fontSize: 12, opacity: 0.8, marginBottom: 6, fontWeight: 700, letterSpacing: 1 }}>
              JOIN CODE
            </div>
            <div style={{ fontSize: 36, fontWeight: 900, letterSpacing: "0.2em", marginBottom: 8 }}>
              {session?.joinCode}
            </div>
            <div style={{ fontSize: 13, opacity: 0.9 }}>
              {session?.subject} · {session?.questions?.length} questions
            </div>
          </div>

          <div style={{ fontSize: 13, fontWeight: 800, color: "var(--text)", marginBottom: 12 }}>
            👥 Participants ({participants.length})
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
                {p.id === session?.hostId && (
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
              ▶ Start Session
            </button>
          ) : (
            <div style={{
              textAlign: "center", padding: "16px",
              color: "var(--text3)", fontSize: 13, marginTop: 8
            }}>
              ⏳ Waiting for host to start the session...
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
    const q = session.questions[session.currentQuestionIndex]
    const total = session.questions.length
    const answeredCount = myAnswerCount(session.currentQuestionIndex)
    const myAnswer = participants.find(p => p.id === authUser.uid)?.answeredQuestions?.[session.currentQuestionIndex]

    return (
      <div className="ee-page">
        <header className="ee-header">
          <button className="ee-back-btn" onClick={handleLeaveSession}>← Leave</button>
          <span style={{ fontWeight: 800, fontSize: 14 }}>{session.subject}</span>
          <span style={{ fontSize: 12, color: "var(--text2)" }}>{session.currentQuestionIndex + 1}/{total}</span>
        </header>

        <div className="ee-content">
          {/* Progress bar */}
          <div style={{ height: 4, borderRadius: 2, background: "var(--border)", marginBottom: 16 }}>
            <div style={{
              height: "100%", borderRadius: 2, background: "var(--primary)",
              width: `${((session.currentQuestionIndex + 1) / total) * 100}%`,
              transition: "width 0.3s"
            }} />
          </div>

          {/* Live answer count */}
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            marginBottom: 14, padding: "8px 14px",
            background: "var(--surface)", borderRadius: "var(--radius-md)",
            border: "1px solid var(--border)"
          }}>
            <span style={{ fontSize: 12, color: "var(--text2)", fontWeight: 700 }}>
              👥 {answeredCount}/{participants.length} answered
            </span>
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
              const cleanOpt = opt.replace(/^[A-D][\.\)\s]+/, "")
              let bg = "var(--surface)", border = "var(--border)", color = "var(--text)"
              if (hasAnswered || myAnswer) {
                const selected = myAnswer?.selected ?? selectedOption
                if (opt === q.answer) { bg = "rgba(34,197,94,0.1)"; border = "#16a34a"; color = "#16a34a" }
                else if (opt === selected) { bg = "rgba(239,68,68,0.08)"; border = "#dc2626"; color = "#dc2626" }
              } else if (opt === selectedOption) {
                bg = "var(--primary-light)"; border = "var(--primary)"
              }
              return (
                <button
                  key={i}
                  onClick={() => handleSubmitAnswer(opt)}
                  disabled={hasAnswered || !!myAnswer}
                  style={{
                    width: "100%", textAlign: "left", padding: "14px 16px",
                    borderRadius: "var(--radius-md)", background: bg,
                    border: `1.5px solid ${border}`, color,
                    fontSize: 13, fontWeight: 600, cursor: hasAnswered || myAnswer ? "default" : "pointer",
                    fontFamily: "var(--font-main)", display: "flex", alignItems: "center", gap: 10
                  }}
                >
                  <span style={{
                    width: 22, height: 22, borderRadius: "50%", flexShrink: 0,
                    background: border === "var(--border)" ? "var(--surface2)" : border,
                    color: border === "var(--border)" ? "var(--text3)" : "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 10, fontWeight: 800
                  }}>{String.fromCharCode(65 + i)}</span>
                  {cleanOpt}
                </button>
              )
            })}
          </div>

          {/* Live leaderboard */}
          <div style={{ fontSize: 12, fontWeight: 800, color: "var(--text3)", marginBottom: 8, textTransform: "uppercase" }}>
            Live Leaderboard
          </div>
          {participants.slice(0, 5).map((p, i) => (
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

          {isHost && (
            <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
              <button onClick={handleEndSession} className="ee-btn ee-btn-secondary" style={{ flex: 1 }}>
                ⏹ End Session
              </button>
              <button onClick={handleNextQuestion} className="ee-btn ee-btn-primary" style={{ flex: 2 }}>
                {session.currentQuestionIndex + 1 >= total ? "Finish 🏁" : "Next Question →"}
              </button>
            </div>
          )}

          {!isHost && (hasAnswered || myAnswer) && (
            <div style={{
              textAlign: "center", padding: "14px", marginTop: 12,
              color: "var(--text3)", fontSize: 13
            }}>
              ✓ Answer locked in. Waiting for host to continue...
            </div>
          )}
        </div>
      </div>
    )
  }

  // =========================================================
  // RESULTS SCREEN
  // =========================================================
  if (view === "results") {
    const total = session?.questions?.length || 0
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
            <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 4 }}>Session Complete!</div>
            <div style={{ fontSize: 13, opacity: 0.9 }}>{session?.subject} · {total} questions</div>
          </div>

          <div style={{ fontSize: 13, fontWeight: 800, color: "var(--text)", marginBottom: 12 }}>
            🏅 Final Leaderboard
          </div>

          {participants.map((p, i) => {
            const pct = total > 0 ? Math.round((p.score / total) * 100) : 0
            const medal = i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : null
            return (
              <div key={p.id} style={{
                display: "flex", alignItems: "center", gap: 12,
                background: i === 0 ? "rgba(245,158,11,0.08)" : "var(--surface)",
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
                  <div style={{ fontSize: 11, color: "var(--text3)" }}>{p.score || 0}/{total} correct</div>
                </div>
                <div style={{ fontSize: 16, fontWeight: 900, color: "var(--primary)" }}>{pct}%</div>
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