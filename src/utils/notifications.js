// =============================================
// PUSH NOTIFICATIONS SYSTEM
// =============================================

import { db } from "../firebase"
import { doc, setDoc, getDoc, updateDoc, collection, addDoc, query, where, getDocs } from "firebase/firestore"

// ─────────────────────────────────────────
// 1. REGISTER DEVICE TOKEN
// ─────────────────────────────────────────
export const registerDeviceToken = async (userId, token) => {
  try {
    await setDoc(
      doc(db, "users", userId, "deviceTokens", token),
      { token, registeredAt: new Date().toISOString(), active: true }
    )
  } catch (e) {
    console.error("Error registering device token:", e)
  }
}

// ─────────────────────────────────────────
// 2. REQUEST NOTIFICATION PERMISSION
// ─────────────────────────────────────────
export const requestNotificationPermission = async () => {
  if (!("Notification" in window)) {
    console.log("Browser doesn't support notifications")
    return false
  }

  if (Notification.permission === "granted") {
    return true
  }

  if (Notification.permission !== "denied") {
    const permission = await Notification.requestPermission()
    return permission === "granted"
  }

  return false
}

// ─────────────────────────────────────────
// 3. FIREBASE MESSAGING SETUP
// ─────────────────────────────────────────
export const initializeMessaging = async () => {
  try {
    const { getMessaging, onMessage } = await import("firebase/messaging")
    const messaging = getMessaging()

    // Handle messages when app is in foreground
    onMessage(messaging, (payload) => {
      console.log("Message received:", payload)
      
      const { title, body, icon } = payload.notification || {}
      if ("serviceWorker" in navigator && title) {
        navigator.serviceWorker.getRegistrations().then((registrations) => {
          registrations[0]?.showNotification(title, {
            body,
            icon: icon || "/favicon.svg",
            badge: "/favicon.svg",
          })
        })
      }
    })

    return messaging
  } catch (e) {
    console.error("Messaging not supported:", e)
    return null
  }
}

// ─────────────────────────────────────────
// 4. NOTIFICATION TEMPLATES
// ─────────────────────────────────────────
export const NOTIFICATION_TEMPLATES = {
  STREAK_REMINDER: {
    title: "Keep your streak alive! 🔥",
    body: (streakDays) => `You're on a ${streakDays}-day streak. Study today to keep it going!`,
    data: { type: "streak_reminder" }
  },
  DAILY_GOAL: {
    title: "Daily goal waiting! 🎯",
    body: (done, target) => `${done}/${target} questions. Just ${target - done} more to complete today!`,
    data: { type: "daily_goal_reminder" }
  },
  HOT_TOPICS: {
    title: "New hot topics unlocked! 🔥",
    body: () => "Tap to see the most repeated questions",
    data: { type: "hot_topics_new" }
  },
  WEAK_AREAS: {
    title: "Ready to improve? 💪",
    body: (subject) => `Drill your weak areas in ${subject}`,
    data: { type: "weak_areas_prompt" }
  },
  LEADERBOARD: {
    title: "Someone beat your score! 🏆",
    body: () => "Can you climb the leaderboard?",
    data: { type: "leaderboard_challenge" }
  },
  REFERRAL_BONUS: {
    title: "You earned a bonus! 🎁",
    body: () => "Invite 2 more friends for 1 month free",
    data: { type: "referral_progress" }
  },
  COMEBACK: {
    title: "We miss you! 👋",
    body: () => "Your progress is waiting. Study for 10 mins today?",
    data: { type: "comeback_reminder" }
  },
  EXAM_COUNTDOWN: {
    title: "Exam in X days! 📅",
    body: (days) => `${days} days left. Time to prep harder!`,
    data: { type: "exam_countdown" }
  }
}

// ─────────────────────────────────────────
// 5. SCHEDULE NOTIFICATIONS
// ─────────────────────────────────────────
export const scheduleNotification = async (userId, template, templateData = {}, scheduleTime = null) => {
  try {
    await addDoc(collection(db, "notifications"), {
      userId,
      template: template.name || template,
      templateData,
      scheduledFor: scheduleTime || new Date(),
      sent: false,
      createdAt: new Date().toISOString()
    })
  } catch (e) {
    console.error("Error scheduling notification:", e)
  }
}

// ─────────────────────────────────────────
// 6. SMART NOTIFICATION SCHEDULER
// ─────────────────────────────────────────
export const smartNotificationScheduler = async (userId, userGameState) => {
  const { streak, goal } = userGameState

  // Morning reminder: "Keep your streak"
  if (streak > 0) {
    scheduleNotification(
      userId,
      "STREAK_REMINDER",
      { streakDays: streak },
      new Date(new Date().setHours(8, 0, 0, 0)) // 8 AM
    )
  }

  // Evening reminder: "Complete daily goal"
  if (goal.done < goal.target) {
    scheduleNotification(
      userId,
      "DAILY_GOAL",
      { done: goal.done, target: goal.target },
      new Date(new Date().setHours(18, 0, 0, 0)) // 6 PM
    )
  }

  // Streak saver: 11 PM warning
  if (streak > 0 && goal.done < 1) {
    scheduleNotification(
      userId,
      "STREAK_REMINDER",
      { streakDays: streak },
      new Date(new Date().setHours(23, 0, 0, 0)) // 11 PM
    )
  }

  // Comeback reminder: If absent 3+ days
  const lastActivityKey = localStorage.getItem("ee-last-study")
  if (lastActivityKey) {
    const daysSinceActivity = (new Date() - new Date(lastActivityKey)) / (1000 * 60 * 60 * 24)
    if (daysSinceActivity >= 3) {
      scheduleNotification(
        userId,
        "COMEBACK",
        {},
        new Date(new Date().setHours(9, 0, 0, 0)) // 9 AM
      )
    }
  }
}

// ─────────────────────────────────────────
// 7. BEHAVIORAL NOTIFICATIONS (Track events)
// ─────────────────────────────────────────
export const triggerBehavioralNotification = async (userId, event, data = {}) => {
  const triggers = {
    QUIZ_COMPLETED: () => {
      if (data.score >= 80) {
        return { title: "🎉 Excellent work!", body: `You scored ${data.score}%!` }
      }
      if (data.score >= 70) {
        return { title: "👍 Good job!", body: `${data.score}%. Keep improving!` }
      }
      return { title: "💪 Keep grinding!", body: `${data.score}%. You'll get better!` }
    },
    WEAK_AREA_FOUND: () => ({
      title: "Found a weak area 🔍",
      body: `${data.topic}: ${data.accuracy}% accuracy. Drill to improve.`
    }),
    LEVEL_UP: () => ({
      title: "🆙 Level up!",
      body: `You're now ${data.levelTitle}! Keep it up.`
    }),
    BADGE_EARNED: () => ({
      title: "🏅 Badge earned!",
      body: data.badgeTitle
    }),
    REFERRAL_SUCCESS: () => ({
      title: "🎁 Friend joined!",
      body: `${data.friendName} signed up via your link. +1 referral.`
    })
  }

  const notification = triggers[event]?.()
  if (notification) {
    await scheduleNotification(userId, "CUSTOM", notification)
  }
}

// ─────────────────────────────────────────
// 8. GET USER'S NOTIFICATION PREFERENCES
// ─────────────────────────────────────────
export const getUserNotificationPrefs = async (userId) => {
  try {
    const doc = getDoc(await collection(db, "users", userId, "settings", "notifications"))
    return doc?.data() || {
      streakReminders: true,
      goalReminders: true,
      hotTopics: true,
      comebackReminders: true,
      quietHours: { start: 22, end: 8 } // 10 PM - 8 AM
    }
  } catch (e) {
    return null
  }
}

// ─────────────────────────────────────────
// 9. UPDATE NOTIFICATION PREFERENCES
// ─────────────────────────────────────────
export const updateNotificationPrefs = async (userId, prefs) => {
  try {
    await setDoc(
      doc(db, "users", userId, "settings", "notifications"),
      prefs,
      { merge: true }
    )
  } catch (e) {
    console.error("Error updating notification prefs:", e)
  }
}

// ─────────────────────────────────────────
// 10. TRACK STUDY SESSION (For notifications)
// ─────────────────────────────────────────
export const trackStudySession = (userId) => {
  localStorage.setItem("ee-last-study", new Date().toISOString())
  localStorage.setItem("ee-last-user-id", userId)
}

export default {
  registerDeviceToken,
  requestNotificationPermission,
  initializeMessaging,
  scheduleNotification,
  smartNotificationScheduler,
  triggerBehavioralNotification,
  getUserNotificationPrefs,
  updateNotificationPrefs,
  trackStudySession
}
