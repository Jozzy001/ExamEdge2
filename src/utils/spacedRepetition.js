// =============================================
// SPACED REPETITION ENGINE
// Reschedules questions based on correctness
// =============================================

import { db } from "../firebase"
import { doc, updateDoc, getDoc, arrayUnion, serverTimestamp } from "firebase/firestore"

// ─────────────────────────────────────────
// SPACING INTERVALS (in days)
// ─────────────────────────────────────────
const INTERVALS = {
  FIRST_WRONG: 2, // If wrong first time → review in 2 days
  SECOND_WRONG: 1, // If wrong again → review in 1 day
  RIGHT_AFTER_WRONG: 7, // If right after being wrong → review in 7 days
  MASTERED: 30 // If consistently right → review in 30 days
}

// ─────────────────────────────────────────
// SCHEDULE A QUESTION FOR REVIEW
// ─────────────────────────────────────────
export const scheduleQuestionReview = async (userId, question, isCorrect) => {
  try {
    const userRef = doc(db, "users", userId)
    const userDoc = await getDoc(userRef)
    const userData = userDoc.data() || {}

    // Get current review history for this question
    const reviewHistory = userData.reviewHistory || {}
    const qKey = generateQuestionKey(question)
    const qHistory = reviewHistory[qKey] || {
      attempts: 0,
      correctCount: 0,
      lastReviewedAt: null,
      nextReviewAt: null
    }

    // Update attempt count
    qHistory.attempts++
    if (isCorrect) qHistory.correctCount++

    // Calculate next review date
    const successRate = qHistory.correctCount / qHistory.attempts
    let nextInterval = getNextInterval(successRate, qHistory.attempts, isCorrect)
    const nextReviewDate = new Date()
    nextReviewDate.setDate(nextReviewDate.getDate() + nextInterval)

    // Update history
    qHistory.lastReviewedAt = new Date().toISOString()
    qHistory.nextReviewAt = nextReviewDate.toISOString()
    qHistory.lastCorrect = isCorrect

    reviewHistory[qKey] = qHistory

    // Save to Firestore
    await updateDoc(userRef, {
      reviewHistory: reviewHistory,
      lastStudyAt: serverTimestamp()
    })

    return {
      scheduled: true,
      nextReviewDate,
      interval: nextInterval,
      successRate: successRate.toFixed(2)
    }
  } catch (e) {
    console.error("Error scheduling review:", e)
    return null
  }
}

// ─────────────────────────────────────────
// GET NEXT REVIEW INTERVAL
// ─────────────────────────────────────────
const getNextInterval = (successRate, attemptCount, isCorrect) => {
  // If wrong on first attempt
  if (attemptCount === 1 && !isCorrect) {
    return INTERVALS.FIRST_WRONG // 2 days
  }

  // If wrong after previous attempts
  if (!isCorrect) {
    return INTERVALS.SECOND_WRONG // 1 day
  }

  // If correct and had previous failures
  if (isCorrect && successRate < 0.8) {
    return INTERVALS.RIGHT_AFTER_WRONG // 7 days
  }

  // If consistently correct (80%+ success rate)
  if (isCorrect && successRate >= 0.8) {
    return INTERVALS.MASTERED // 30 days
  }

  return INTERVALS.FIRST_WRONG
}

// ─────────────────────────────────────────
// GET QUESTIONS DUE FOR REVIEW
// ─────────────────────────────────────────
export const getQuestionsDueForReview = async (userId) => {
  try {
    const userDoc = await getDoc(doc(db, "users", userId))
    if (!userDoc.exists()) return []

    const reviewHistory = userDoc.data().reviewHistory || {}
    const now = new Date()
    const dueTomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000)

    const dueQuestions = []

    Object.entries(reviewHistory).forEach(([qKey, history]) => {
      const nextReviewAt = new Date(history.nextReviewAt)
      
      // Question is due if: nextReviewAt <= now
      if (nextReviewAt <= now) {
        dueQuestions.push({
          key: qKey,
          daysOverdue: Math.floor((now - nextReviewAt) / (1000 * 60 * 60 * 24)),
          history
        })
      }
    })

    // Sort by days overdue (most overdue first)
    return dueQuestions.sort((a, b) => b.daysOverdue - a.daysOverdue)
  } catch (e) {
    console.error("Error getting due questions:", e)
    return []
  }
}

// ─────────────────────────────────────────
// GET REVIEW SUMMARY
// ─────────────────────────────────────────
export const getReviewSummary = async (userId) => {
  try {
    const userDoc = await getDoc(doc(db, "users", userId))
    if (!userDoc.exists()) return null

    const reviewHistory = userDoc.data().reviewHistory || {}
    const now = new Date()

    let totalQuestions = 0
    let dueToday = 0
    let dueSoon = 0
    let mastered = 0

    Object.entries(reviewHistory).forEach(([_, history]) => {
      totalQuestions++
      
      const nextReviewAt = new Date(history.nextReviewAt)
      const daysUntil = (nextReviewAt - now) / (1000 * 60 * 60 * 24)

      if (nextReviewAt <= now) dueToday++
      else if (daysUntil <= 3) dueSoon++
      
      if (history.correctCount / history.attempts >= 0.95) mastered++
    })

    return {
      totalQuestions,
      dueToday,
      dueSoon,
      mastered,
      percentMastered: Math.round((mastered / totalQuestions) * 100) || 0
    }
  } catch (e) {
    console.error("Error getting review summary:", e)
    return null
  }
}

// ─────────────────────────────────────────
// GENERATE QUESTION KEY
// ─────────────────────────────────────────
const generateQuestionKey = (question) => {
  // Use first 50 chars of question as unique key
  return (question?.id || question?.trim?.().slice(0, 50)).toLowerCase()
}

// ─────────────────────────────────────────
// GET REVIEW STATISTICS
// ─────────────────────────────────────────
export const getReviewStats = async (userId) => {
  try {
    const userDoc = await getDoc(doc(db, "users", userId))
    if (!userDoc.exists()) return null

    const reviewHistory = userDoc.data().reviewHistory || {}
    const stats = {
      totalAttempts: 0,
      totalCorrect: 0,
      accuracy: 0,
      mostReviewedTopic: null,
      topicStats: {}
    }

    Object.entries(reviewHistory).forEach(([key, history]) => {
      stats.totalAttempts += history.attempts
      stats.totalCorrect += history.correctCount
    })

    stats.accuracy = stats.totalAttempts > 0 
      ? Math.round((stats.totalCorrect / stats.totalAttempts) * 100)
      : 0

    return stats
  } catch (e) {
    console.error("Error getting review stats:", e)
    return null
  }
}

// ─────────────────────────────────────────
// CLEAR REVIEW HISTORY (for testing)
// ─────────────────────────────────────────
export const clearReviewHistory = async (userId) => {
  try {
    await updateDoc(doc(db, "users", userId), {
      reviewHistory: {}
    })
  } catch (e) {
    console.error("Error clearing review history:", e)
  }
}

export default {
  scheduleQuestionReview,
  getQuestionsDueForReview,
  getReviewSummary,
  getReviewStats,
  clearReviewHistory,
  INTERVALS
}
