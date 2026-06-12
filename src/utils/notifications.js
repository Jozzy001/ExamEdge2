// =============================================
// NOTIFICATIONS UTILITY
// =============================================
// NOTE: smartNotificationScheduler no longer writes to Firestore.
// Admin sends all notifications manually from the dashboard.
// =============================================

import { db } from "../firebase"
import { doc, setDoc, getDoc, collection, addDoc } from "firebase/firestore"

// ─────────────────────────────────────────
// REQUEST NOTIFICATION PERMISSION (browser)
// ─────────────────────────────────────────
export const requestNotificationPermission = async () => {
  if (!("Notification" in window)) return false
  if (Notification.permission === "granted") return true
  if (Notification.permission !== "denied") {
    const permission = await Notification.requestPermission()
    return permission === "granted"
  }
  return false
}

// ─────────────────────────────────────────
// TRACK STUDY SESSION (local only)
// ─────────────────────────────────────────
export const trackStudySession = (userId) => {
  localStorage.setItem("ee-last-study", new Date().toISOString())
  localStorage.setItem("ee-last-user-id", userId)
}

// ─────────────────────────────────────────
// SMART NOTIFICATION SCHEDULER
// ─────────────────────────────────────────
// ✅ FIXED: No longer writes to Firestore.
// Previously this was writing to the global notifications
// collection on every home page load, spamming all users.
// All notifications are now sent manually by admin only.
// ─────────────────────────────────────────
export const smartNotificationScheduler = async (userId, userGameState) => {
  // Intentionally does nothing now.
  // Use AdminDashboard → Send Notification to reach users.
  return
}

// ─────────────────────────────────────────
// GET/UPDATE NOTIFICATION PREFERENCES
// ─────────────────────────────────────────
export const getUserNotificationPrefs = async (userId) => {
  try {
    const snap = await getDoc(doc(db, "users", userId, "settings", "notifications"))
    return snap?.data() || {
      streakReminders: true,
      goalReminders: true,
      comebackReminders: true,
    }
  } catch (e) {
    return null
  }
}

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

export default {
  requestNotificationPermission,
  smartNotificationScheduler,
  trackStudySession,
  getUserNotificationPrefs,
  updateNotificationPrefs,
}