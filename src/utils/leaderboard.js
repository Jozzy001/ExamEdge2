// =============================================
// LEADERBOARD SYSTEM
//
// Rankings live in their own `leaderboard/{uid}` collection (one small doc per student):
//   { name, faculty, university, averageScore, scoreSum, totalQuizzesCompleted, bestScore: {subject: pct}, updatedAt }
// This keeps phone numbers, emails and earnings in `users` out of every leaderboard query.
// Scores are percentages (0-100).
// =============================================

import { db } from "../firebase"
import {
  collection, query, orderBy, limit, getDocs, where, updateDoc, doc, getDoc,
  runTransaction, increment, serverTimestamp, getCountFromServer, FieldPath
} from "firebase/firestore"

const BOARD = "leaderboard"
const clampPct = (n) => Math.max(0, Math.min(100, Number.isFinite(n) ? n : 0))

// Turn whatever the quiz screen gives us into a 0-100 percentage
const toPercent = ({ accuracy, score, totalQuestions }) => {
  if (Number.isFinite(accuracy)) return clampPct(accuracy)
  if (totalQuestions > 0 && Number.isFinite(score) && score <= totalQuestions) return clampPct((score / totalQuestions) * 100)
  return clampPct(score)
}

// Filters used by both the list and the rank lookup, so they always agree
const scopeFilters = (type, faculty, university) => {
  const f = []
  if (type === "faculty") {
    if (faculty) f.push(where("faculty", "==", faculty))
    if (university) f.push(where("university", "==", university))
  }
  return f
}

// ─────────────────────────────────────────
// RECORD A FINISHED QUIZ (call once after each quiz / CBT)
//   recordQuizScore(uid, { subject, score, totalQuestions, accuracy, timeTaken, topics, faculty?, university?, name? })
// ─────────────────────────────────────────
export const recordQuizScore = async (userId, quizData = {}) => {
  if (!userId) return
  try {
    const { subject = "General", timeTaken } = quizData
    const pct = toPercent(quizData)

    // Name / faculty / university: use what the caller sent, else the user's profile, else local cache
    let profile = {}
    try {
      const u = await getDoc(doc(db, "users", userId))
      profile = u.exists() ? u.data() : {}
    } catch (e) {}
    const local = (k) => { try { return localStorage.getItem(k) || null } catch (e) { return null } }
    const name = quizData.name || profile.name || "Anonymous"
    const faculty = quizData.faculty || profile.faculty || local("ee-faculty") || null
    const university = quizData.university || profile.university || local("ee-university") || null

    // Transaction = two quizzes finishing at once can't overwrite each other
    const ref = doc(db, BOARD, userId)
    await runTransaction(db, async (tx) => {
      const snap = await tx.get(ref)
      const prev = snap.exists() ? snap.data() : {}
      const count = (prev.totalQuizzesCompleted || 0) + 1
      const scoreSum = (prev.scoreSum || 0) + pct
      const bestScore = { ...(prev.bestScore || {}) }
      bestScore[subject] = Math.max(bestScore[subject] || 0, Math.round(pct * 10) / 10)

      tx.set(ref, {
        name,
        faculty,
        university,
        averageScore: clampPct(Math.round((scoreSum / count) * 10) / 10),
        scoreSum,
        totalQuizzesCompleted: count,
        bestScore,
        updatedAt: serverTimestamp(),
      })
    })

    // Legacy counter on the user's own profile (kept in case another screen reads it).
    // Safe to delete once you've confirmed nothing uses users.totalQuizzes.
    try {
      await updateDoc(doc(db, "users", userId), { totalQuizzes: increment(1) })
    } catch (e) {}
  } catch (e) {
    console.error("Error recording quiz score:", e)
  }
}

// Kept so old imports don't break. Rankings are always read live now.
export const refreshLeaderboard = async () => {}

// ─────────────────────────────────────────
// GET LEADERBOARD
//   type "global"  -> everyone
//   type "faculty" -> same faculty (and same university when given)
// ─────────────────────────────────────────
export const getLeaderboard = async (type = "global", faculty = null, university = null, max = 20) => {
  try {
    if (type === "faculty" && !faculty) return []
    const q = query(
      collection(db, BOARD),
      ...scopeFilters(type, faculty, university),
      orderBy("averageScore", "desc"),
      limit(max)
    )
    const snapshot = await getDocs(q)
    return snapshot.docs.map((d, index) => {
      const data = d.data()
      return {
        rank: index + 1,
        userId: d.id,
        name: data.name || "Anonymous",
        faculty: data.faculty || null,
        score: data.averageScore || 0,
        totalQuizzes: data.totalQuizzesCompleted || 0,
      }
    })
  } catch (e) {
    // Faculty tab needs a Firestore index the first time: the console error contains a link that creates it
    console.error("Error fetching leaderboard:", e)
    throw e
  }
}

// ─────────────────────────────────────────
// GET USER'S RANK (same scope as the tab being viewed)
// Uses count queries, so it costs 2 reads instead of downloading every student.
// ─────────────────────────────────────────
export const getUserRank = async (userId, type = "global", faculty = null, university = null) => {
  try {
    const mine = await getDoc(doc(db, BOARD, userId))
    if (!mine.exists()) return null // hasn't finished a quiz yet -> unranked
    if (type === "faculty" && !faculty) return null

    const myScore = mine.data().averageScore || 0
    const filters = scopeFilters(type, faculty, university)
    const col = collection(db, BOARD)

    const [higher, total] = await Promise.all([
      getCountFromServer(query(col, ...filters, where("averageScore", ">", myScore))),
      getCountFromServer(query(col, ...filters)),
    ])
    const totalRanked = total.data().count
    const rank = higher.data().count + 1 // equal scores share a rank

    return {
      userId,
      name: mine.data().name,
      score: myScore,
      rank,
      totalRanked,
      // % of other students you out-scored (100 = top, 0 = bottom)
      percentile: totalRanked <= 1 ? 100 : Math.round(((totalRanked - rank) / (totalRanked - 1)) * 100),
    }
  } catch (e) {
    console.error("Error getting user rank:", e)
    return null
  }
}

// ─────────────────────────────────────────
// SUBJECT LEADERBOARD (best score in one subject)
// ─────────────────────────────────────────
export const getSubjectLeaderboard = async (subject, max = 10) => {
  try {
    const q = query(
      collection(db, BOARD),
      orderBy(new FieldPath("bestScore", subject), "desc"), // FieldPath handles subjects with spaces/dots
      limit(max)
    )
    const snapshot = await getDocs(q)
    return snapshot.docs.map((d, index) => ({
      rank: index + 1,
      userId: d.id,
      name: d.data().name || "Anonymous",
      score: d.data().bestScore?.[subject] || 0,
      faculty: d.data().faculty || null,
      totalQuizzes: d.data().totalQuizzesCompleted || 0,
    }))
  } catch (e) {
    console.error("Error getting subject leaderboard:", e)
    return []
  }
}

// ─────────────────────────────────────────
// FRIENDS' SCORES
// ─────────────────────────────────────────
export const getFriendLeaderboard = async (userId, userFriends = []) => {
  try {
    const docs = await Promise.all(userFriends.map(id => getDoc(doc(db, BOARD, id))))
    return docs
      .filter(d => d.exists())
      .map(d => ({
        userId: d.id,
        name: d.data().name || "Friend",
        score: d.data().averageScore || 0,
        totalQuizzes: d.data().totalQuizzesCompleted || 0,
      }))
      .sort((a, b) => b.score - a.score)
  } catch (e) {
    console.error("Error getting friend leaderboard:", e)
    return []
  }
}

// ─────────────────────────────────────────
// STATS (sampled from the top 500 so it stays cheap)
// ─────────────────────────────────────────
export const getLeaderboardStats = async (faculty = null, university = null) => {
  try {
    const q = query(
      collection(db, BOARD),
      ...scopeFilters(faculty ? "faculty" : "global", faculty, university),
      orderBy("averageScore", "desc"),
      limit(500)
    )
    const snapshot = await getDocs(q)
    const scores = snapshot.docs
      .map(d => d.data().averageScore || 0)
      .filter(s => s > 0)
      .sort((a, b) => a - b)

    if (scores.length === 0) {
      return { totalParticipants: 0, avgScore: 0, medianScore: 0, minScore: 0, maxScore: 0, scoreDistribution: getScoreDistribution([]) }
    }
    return {
      totalParticipants: scores.length,
      avgScore: Math.round(scores.reduce((a, b) => a + b, 0) / scores.length),
      medianScore: scores[Math.floor(scores.length / 2)],
      minScore: scores[0],
      maxScore: scores[scores.length - 1],
      scoreDistribution: getScoreDistribution(scores),
    }
  } catch (e) {
    console.error("Error getting leaderboard stats:", e)
    return null
  }
}

const getScoreDistribution = (scores) => {
  const bins = { "0-20%": 0, "21-40%": 0, "41-60%": 0, "61-80%": 0, "81-100%": 0 }
  scores.forEach(score => {
    if (score <= 20) bins["0-20%"]++
    else if (score <= 40) bins["21-40%"]++
    else if (score <= 60) bins["41-60%"]++
    else if (score <= 80) bins["61-80%"]++
    else bins["81-100%"]++
  })
  return bins
}

export default {
  recordQuizScore,
  refreshLeaderboard,
  getLeaderboard,
  getUserRank,
  getSubjectLeaderboard,
  getFriendLeaderboard,
  getLeaderboardStats,
}