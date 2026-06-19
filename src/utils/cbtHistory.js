// =============================================
// CBT HISTORY — save, load, manage CBT records
// Saves to both localStorage AND Firestore
// =============================================

import { db } from "../firebase"
import { collection, addDoc, serverTimestamp, getDocs, query } from "firebase/firestore"

const HISTORY_KEY = "ee-cbtHistory"
const MAX_RECORDS = 50

export const saveCBTRecord = async (report, userId = null) => {
  try {
    const history = getCBTHistory()
    const record = {
      ...report,
      id: `cbt_${Date.now()}`,
      date: new Date().toISOString(),
    }

    // Save to localStorage (fast, works offline)
    const updated = [record, ...history].slice(0, MAX_RECORDS)
    localStorage.setItem(HISTORY_KEY, JSON.stringify(updated))

    // Check personal best
    const prev = history.filter(r => r.total === record.total)
    const prevBest = prev.length > 0 ? Math.max(...prev.map(r => r.percentage)) : 0
    const isPersonalBest = record.percentage > prevBest

    if (isPersonalBest) {
      localStorage.setItem("ee-cbtPersonalBest", JSON.stringify({
        score: record.score,
        total: record.total,
        percentage: record.percentage,
        date: record.date,
        id: record.id
      }))
    }

    // Save to Firestore (for admin visibility) — fire and forget
    if (userId) {
      try {
        await addDoc(collection(db, "users", userId, "cbtHistory"), {
          score: record.score,
          total: record.total,
          percentage: record.percentage,
          date: record.date,
          timeTaken: record.timeTaken || null,
          subjects: record.subjects || [],
          isPersonalBest,
          createdAt: serverTimestamp(),
          // Save subject breakdown for admin progress view
          subjectBreakdown: buildSubjectBreakdown(record.answers || []),
        })
      } catch (firestoreErr) {
        // Log the actual error instead of silently swallowing it
        console.error("CBT Firestore save failed:", firestoreErr)
      }
    }

    return { record, isPersonalBest, prevBest }
  } catch (e) {
    console.error("Failed to save CBT record", e)
    return { record: report, isPersonalBest: false, prevBest: 0 }
  }
}

// Build subject-level breakdown from answers array
const buildSubjectBreakdown = (answers) => {
  const breakdown = {}
  answers.forEach(a => {
    const subj = a.subject || "General"
    if (!breakdown[subj]) breakdown[subj] = { score: 0, total: 0 }
    breakdown[subj].total++
    if (a.isCorrect) breakdown[subj].score++
  })
  return breakdown
}

// Fetch a specific user's CBT history from Firestore (for admin)
// IMPORTANT: No orderBy on the query — subcollection orderBy queries
// require a composite index that doesn't exist, which silently fails.
// We fetch unordered and sort in JavaScript instead.
export const fetchUserCBTHistory = async (userId) => {
  try {
    const q = query(collection(db, "users", userId, "cbtHistory"))
    const snap = await getDocs(q)
    const records = snap.docs.map(d => ({ id: d.id, ...d.data() }))

    // Sort by createdAt (or date as fallback) descending in JS
    records.sort((a, b) => {
      const aTime = a.createdAt?.toDate ? a.createdAt.toDate() : new Date(a.date || 0)
      const bTime = b.createdAt?.toDate ? b.createdAt.toDate() : new Date(b.date || 0)
      return bTime - aTime
    })

    return records.slice(0, 50)
  } catch (e) {
    console.error("fetchUserCBTHistory failed:", e)
    return []
  }
}

export const getCBTHistory = () => {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]")
  } catch {
    return []
  }
}

export const getCBTPersonalBest = () => {
  try {
    return JSON.parse(localStorage.getItem("ee-cbtPersonalBest") || "null")
  } catch {
    return null
  }
}

export const deleteCBTRecord = (id) => {
  const history = getCBTHistory()
  const updated = history.filter(r => r.id !== id)
  localStorage.setItem(HISTORY_KEY, JSON.stringify(updated))
}

export const formatDate = (isoString) => {
  if (!isoString) return "—"
  const date = isoString?.toDate ? isoString.toDate() : new Date(isoString)
  return date.toLocaleDateString("en-NG", {
    day: "numeric", month: "short", year: "numeric"
  })
}

export const formatTime = (seconds) => {
  if (!seconds) return "—"
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}m ${s}s`
}