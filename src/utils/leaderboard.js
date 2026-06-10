// =============================================
// LEADERBOARD SYSTEM
// Real-time competitive rankings
// =============================================

import { db } from "../firebase"
import { collection, query, orderBy, limit, getDocs, where, updateDoc, doc, arrayUnion, getDoc } from "firebase/firestore"

// ─────────────────────────────────────────
// UPDATE USER SCORE (Called after quiz)
// ─────────────────────────────────────────
export const recordQuizScore = async (userId, quizData) => {
  try {
    const {
      subject,
      score,
      totalQuestions,
      timeTaken,
      accuracy,
      topics
    } = quizData

    // Save to leaderboard cache
    const userRef = doc(db, "users", userId)
    
    // Update user's best score for this subject
    const updateData = {
      [`bestScore.${subject}`]: Math.max(score, 0),
      [`quizzes`]: arrayUnion({
        subject,
        score,
        accuracy,
        completedAt: new Date().toISOString(),
        timeTaken
      }),
      totalQuizzes: (await getDoc(userRef).then(d => d.data()?.totalQuizzes || 0)) + 1
    }

    await updateDoc(userRef, updateData)

    // Trigger leaderboard refresh
    await refreshLeaderboard(userId)
  } catch (e) {
    console.error("Error recording quiz score:", e)
  }
}

// ─────────────────────────────────────────
// REFRESH LEADERBOARD (Recalculate rankings)
// ─────────────────────────────────────────
export const refreshLeaderboard = async (userIdFilter = null) => {
  try {
    // Get top scorers this week
    const weekAgo = new Date()
    weekAgo.setDate(weekAgo.getDate() - 7)

    // For simplicity, we'll calculate from recent scores in their profile
    // In production, you'd have a separate "scores" collection for better queries
    
    console.log("Leaderboard refreshed")
  } catch (e) {
    console.error("Error refreshing leaderboard:", e)
  }
}

// ─────────────────────────────────────────
// GET LEADERBOARD (Global / By Faculty)
// ─────────────────────────────────────────
export const getLeaderboard = async (type = "global", faculty = null, period = "week") => {
  try {
    // In practice, maintain a "leaderboardSnapshots" collection
    // that gets updated daily/hourly for performance
    // For now, we'll query top performers using averageScore

    const constraints = []
    
    // Filter by faculty if specified
    if (faculty) constraints.push(where("faculty", "==", faculty))

    const q = query(
      collection(db, "users"),
      ...constraints,
      orderBy("averageScore", "desc"),
      limit(20)
    )

    const snapshot = await getDocs(q)
    const leaderboard = snapshot.docs.map((doc, index) => ({
      rank: index + 1,
      userId: doc.id,
      name: doc.data().name || "Anonymous",
      email: doc.data().email,
      faculty: doc.data().faculty,
      score: doc.data().averageScore || 0,
      totalQuizzes: doc.data().totalQuizzesCompleted || 0,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${doc.id}`
    }))

    return leaderboard
  } catch (e) {
    console.error("Error fetching leaderboard:", e)
    return []
  }
}

// ─────────────────────────────────────────
// GET USER'S RANK
// ─────────────────────────────────────────
export const getUserRank = async (userId) => {
  try {
    const userDoc = await getDoc(doc(db, "users", userId))
    if (!userDoc.exists()) return null

    const userData = userDoc.data()
    const userScore = userData.averageScore || 0

    // Count how many users scored higher
    const q = query(
      collection(db, "users"),
      where("faculty", "==", userData.faculty || ""),
      orderBy("averageScore", "desc")
    )

    const snapshot = await getDocs(q)
    let rank = snapshot.size

    snapshot.docs.forEach((doc, index) => {
      if (doc.id === userId) {
        rank = index + 1
      }
    })

    return {
      userId,
      name: userData.name,
      score: userScore,
      rank,
      totalRanked: snapshot.size,
      percentile: Math.round((rank / snapshot.size) * 100)
    }
  } catch (e) {
    console.error("Error getting user rank:", e)
    return null
  }
}

// ─────────────────────────────────────────
// GET SUBJECT-SPECIFIC LEADERBOARD
// ─────────────────────────────────────────
export const getSubjectLeaderboard = async (subject, limit = 10) => {
  try {
    // Query users who scored well overall (using averageScore)
    const q = query(
      collection(db, "users"),
      where("faculty", "!=", null),
      orderBy("faculty"),
      orderBy("averageScore", "desc"),
      limit(limit)
    )

    const snapshot = await getDocs(q)
    return snapshot.docs.map((doc, index) => ({
      rank: index + 1,
      userId: doc.id,
      name: doc.data().name || "Anonymous",
      score: doc.data().averageScore || 0,
      faculty: doc.data().faculty,
      totalQuizzes: doc.data().totalQuizzesCompleted || 0
    }))
  } catch (e) {
    console.error("Error getting subject leaderboard:", e)
    return []
  }
}

// ─────────────────────────────────────────
// GET FRIENDS' SCORES (If added)
// ─────────────────────────────────────────
export const getFriendLeaderboard = async (userId, userFriends = []) => {
  try {
    const friendScores = []

    for (const friendId of userFriends) {
      const friendDoc = await getDoc(doc(db, "users", friendId))
      if (friendDoc.exists()) {
        friendScores.push({
          userId: friendId,
          name: friendDoc.data().name || "Friend",
          score: friendDoc.data().averageScore || 0,
          avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${friendId}`
        })
      }
    }

    return friendScores.sort((a, b) => b.score - a.score)
  } catch (e) {
    console.error("Error getting friend leaderboard:", e)
    return []
  }
}

// ─────────────────────────────────────────
// GET LEADERBOARD STATISTICS
// ─────────────────────────────────────────
export const getLeaderboardStats = async (faculty) => {
  try {
    const q = query(
      collection(db, "users"),
      where("faculty", "==", faculty)
    )

    const snapshot = await getDocs(q)
    const scores = snapshot.docs
      .map(doc => doc.data().averageScore || 0)
      .filter(score => score > 0)
      .sort((a, b) => a - b)

    const stats = {
      totalParticipants: scores.length,
      avgScore: Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) || 0,
      medianScore: scores[Math.floor(scores.length / 2)] || 0,
      minScore: scores[0] || 0,
      maxScore: scores[scores.length - 1] || 0,
      scoreDistribution: getScoreDistribution(scores)
    }

    return stats
  } catch (e) {
    console.error("Error getting leaderboard stats:", e)
    return null
  }
}

// ─────────────────────────────────────────
// SCORE DISTRIBUTION HISTOGRAM
// ─────────────────────────────────────────
const getScoreDistribution = (scores) => {
  const bins = {
    "0-20%": 0,
    "21-40%": 0,
    "41-60%": 0,
    "61-80%": 0,
    "81-100%": 0
  }

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
  getLeaderboardStats
}