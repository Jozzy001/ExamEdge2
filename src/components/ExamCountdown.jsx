import { useState, useEffect } from "react"
import { doc, updateDoc, deleteField } from "firebase/firestore"
import { db } from "../firebase"
import { DEFAULT_EXAM_DATE } from "../utils/appConfig"

// Dates are stored as "YYYY-MM-DD" strings on the user's account (users/{uid}.examDate)
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/
const isValidDate = (v) => typeof v === "string" && DATE_RE.test(v)

const toLocalMidnight = (ymd) => new Date(`${ymd}T00:00:00`)

const todayYMD = () => {
  const d = new Date()
  const m = String(d.getMonth() + 1).padStart(2, "0")
  const day = String(d.getDate()).padStart(2, "0")
  return `${d.getFullYear()}-${m}-${day}`
}

const prettyDate = (ymd) =>
  toLocalMidnight(ymd).toLocaleDateString("en-NG", {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  })

export default function ExamCountdown({ userData, authUser, label = "JAMB" }) {
  const [now, setNow] = useState(() => new Date())
  // undefined = use the value on the account, null = reset to default
  const [optimistic, setOptimistic] = useState(undefined)
  const [editing, setEditing] = useState(false)
  const [input, setInput] = useState("")
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState("")

  // Tick every second so the seconds count down live
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  const saved = optimistic !== undefined ? optimistic : userData?.examDate
  const examDate = isValidDate(saved) ? saved : DEFAULT_EXAM_DATE
  const isCustom = examDate !== DEFAULT_EXAM_DATE

  const diff = toLocalMidnight(examDate) - now
  const isExamDay = todayYMD() === examDate
  const hasPassed = diff <= 0 && !isExamDay

  const days = Math.max(0, Math.floor(diff / 86400000))
  const hours = Math.max(0, Math.floor((diff % 86400000) / 3600000))
  const mins = Math.max(0, Math.floor((diff % 3600000) / 60000))
  const secs = Math.max(0, Math.floor((diff % 60000) / 1000))
  const pad = (n) => String(n).padStart(2, "0")

  const startEdit = () => {
    setInput(examDate)
    setError("")
    setEditing(true)
  }

  const save = async () => {
    if (!isValidDate(input)) { setError("Please pick a date"); return }
    if (input < todayYMD()) { setError("Please pick a date that has not passed yet"); return }
    setSaving(true)
    setError("")
    try {
      if (authUser?.uid) await updateDoc(doc(db, "users", authUser.uid), { examDate: input })
      setOptimistic(input)
      setEditing(false)
    } catch (e) {
      setError("Could not save. Check your connection and try again.")
    }
    setSaving(false)
  }

  const resetToDefault = async () => {
    setSaving(true)
    setError("")
    try {
      if (authUser?.uid) await updateDoc(doc(db, "users", authUser.uid), { examDate: deleteField() })
      setOptimistic(null)
      setEditing(false)
    } catch (e) {
      setError("Could not reset. Check your connection and try again.")
    }
    setSaving(false)
  }

  const box = {
    flex: 1, background: "rgba(255,255,255,0.18)", borderRadius: "var(--radius-md)",
    padding: "10px 4px", textAlign: "center",
  }
  const boxNum = { fontSize: 24, fontWeight: 900, lineHeight: 1.1 }
  const boxLabel = { fontSize: 10, fontWeight: 700, opacity: 0.85, letterSpacing: 0.5, marginTop: 2 }
  const linkBtn = {
    background: "none", border: "none", color: "#fff", cursor: "pointer",
    fontSize: 12, fontWeight: 700, textDecoration: "underline",
    fontFamily: "var(--font-main)", padding: 0,
  }

  return (
    <div style={{
      background: "linear-gradient(135deg, #667eea, #764ba2)",
      borderRadius: "var(--radius-xl)", padding: "18px 18px 16px",
      marginBottom: 16, color: "#fff",
    }}>
      <div style={{ fontSize: 11, fontWeight: 800, opacity: 0.85, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
        ⏳ Countdown to your {label}
      </div>

      {isExamDay ? (
        <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>
          🍀 Today is your exam day. You've got this!
        </div>
      ) : hasPassed ? (
        <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 8, lineHeight: 1.5 }}>
          Your exam date has passed. If you're writing later, set your new date.
        </div>
      ) : (
        <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
          <div style={box}><div style={boxNum}>{days}</div><div style={boxLabel}>DAYS</div></div>
          <div style={box}><div style={boxNum}>{pad(hours)}</div><div style={boxLabel}>HOURS</div></div>
          <div style={box}><div style={boxNum}>{pad(mins)}</div><div style={boxLabel}>MINS</div></div>
          <div style={box}><div style={boxNum}>{pad(secs)}</div><div style={boxLabel}>SECS</div></div>
        </div>
      )}

      {!editing ? (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
          <div style={{ fontSize: 12, opacity: 0.9 }}>
            {prettyDate(examDate)}{!isCustom && " (default)"}
          </div>
          <button style={linkBtn} onClick={startEdit}>✏️ Set my own date</button>
        </div>
      ) : (
        <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: "var(--radius-md)", padding: 12 }}>
          <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 8 }}>Your exam date</div>
          <input
            type="date"
            value={input}
            min={todayYMD()}
            onChange={e => { setInput(e.target.value); setError("") }}
            style={{
              width: "100%", padding: "10px 12px", borderRadius: "var(--radius-md)",
              border: "none", fontSize: 14, fontFamily: "var(--font-main)",
              boxSizing: "border-box", marginBottom: 8, background: "#fff", color: "#1a1a2e",
            }}
          />
          {error && <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 8, color: "#fecaca" }}>{error}</div>}
          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={save}
              disabled={saving}
              style={{
                flex: 2, padding: "10px", background: "#fff", color: "#667eea",
                border: "none", borderRadius: "var(--radius-md)", fontWeight: 800, fontSize: 13,
                cursor: saving ? "not-allowed" : "pointer", fontFamily: "var(--font-main)",
              }}
            >
              {saving ? "Saving..." : "Save date"}
            </button>
            <button
              onClick={() => { setEditing(false); setError("") }}
              disabled={saving}
              style={{
                flex: 1, padding: "10px", background: "rgba(255,255,255,0.2)", color: "#fff",
                border: "none", borderRadius: "var(--radius-md)", fontWeight: 700, fontSize: 13,
                cursor: "pointer", fontFamily: "var(--font-main)",
              }}
            >
              Cancel
            </button>
          </div>
          {isCustom && (
            <button style={{ ...linkBtn, marginTop: 10 }} onClick={resetToDefault} disabled={saving}>
              Reset to the default date
            </button>
          )}
        </div>
      )}
    </div>
  )
}