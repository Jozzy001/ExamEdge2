// =============================================
// REFERRAL SYSTEM (helpers)
//
// Referral MONEY is no longer handled in the browser. When a referred student pays,
// the server (api/paystack-webhook.js) credits the referrer: ₦200 for normal users,
// ₦500 for promoters. Nothing here changes anyone's balance.
// =============================================

import { db } from "../firebase"
import { doc, updateDoc, getDoc, collection, addDoc, query, where, getDocs } from "firebase/firestore"

// ─────────────────────────────────────────
// 1. GENERATE REFERRAL CODE
// ─────────────────────────────────────────
export const generateReferralCode = (userId) => {
  const random = Math.random().toString(36).substring(2, 8).toUpperCase()
  return `EXAM${random}`
}

// ─────────────────────────────────────────
// 2. VALIDATE REFERRAL CODE
// Uses the small public "referralCodes" records, so it also works before the student has an account.
// ─────────────────────────────────────────
export const validateAndGetReferrer = async (code) => {
  try {
    const snap = await getDoc(doc(db, "referralCodes", String(code).toUpperCase()))
    if (!snap.exists()) return null
    return { userId: snap.data().uid }
  } catch (e) {
    console.error("Error validating referral code:", e)
    return null
  }
}

// ─────────────────────────────────────────
// 3. CREATE USER WITH REFERRAL
// (Not used by the current signup screen, kept so nothing that imports it breaks.)
// It only links the new user to their referrer. It no longer writes to the referrer's
// document: students are not allowed to edit other people's accounts.
// ─────────────────────────────────────────
export const createUserWithReferral = async (userId, userEmail, referralCode = null) => {
  try {
    const referralData = {
      userId,
      email: userEmail,
      referralCode: generateReferralCode(userId),
      referredBy: null,
      createdAt: new Date().toISOString()
    }

    if (referralCode) {
      const referrer = await validateAndGetReferrer(referralCode)
      if (referrer) referralData.referredBy = referrer.userId
    }

    await updateDoc(doc(db, "users", userId), referralData)
    return referralData
  } catch (e) {
    console.error("Error creating user with referral:", e)
    return null
  }
}

// ─────────────────────────────────────────
// 4. GET REFERRAL STATS (own account only)
// ─────────────────────────────────────────
export const getReferralStats = async (userId) => {
  try {
    const userDoc = await getDoc(doc(db, "users", userId))
    if (!userDoc.exists()) return null

    const data = userDoc.data()
    return {
      referralCode: data.referralCode,
      referralEarnings: data.referralEarnings || 0,
      referralPaidOut: data.referralPaidOut || 0,
      referredBy: data.referredBy || null,
    }
  } catch (e) {
    console.error("Error getting referral stats:", e)
    return null
  }
}

// ─────────────────────────────────────────
// 5. SAVE A SHARED-LINK CODE
// The link looks like https://www.examedgeng.site/?ref=CODE. The signup screen picks the code
// up automatically; this helper does the same thing from other places in the app.
// ─────────────────────────────────────────
export const trackReferralClick = (code) => {
  if (!code) return
  localStorage.setItem("ee-referral-code", String(code).trim().toUpperCase().slice(0, 8))
}

// ─────────────────────────────────────────
// 6. GET REFERRAL LINK
// ─────────────────────────────────────────
export const getReferralLink = (code) => {
  const baseUrl = window.location.origin
  return `${baseUrl}/?ref=${code}`
}

// ─────────────────────────────────────────
// 7. APPLY REFERRAL ON SIGNUP (older helper, kept for compatibility)
// ─────────────────────────────────────────
export const applyReferralBonus = async (userId, code) => {
  try {
    const referrer = await validateAndGetReferrer(code)
    if (!referrer) return false

    await updateDoc(doc(db, "users", userId), {
      referredBy: referrer.userId,
      referralAppliedAt: new Date().toISOString()
    })

    return true
  } catch (e) {
    console.error("Error applying referral:", e)
    return false
  }
}

// ─────────────────────────────────────────
// 8. GET REFERRED USERS
// ─────────────────────────────────────────
export const getReferredUsers = async (userId) => {
  try {
    const q = query(collection(db, "referrals"), where("referrerId", "==", userId))
    const snapshot = await getDocs(q)

    return snapshot.docs.map(d => ({
      id: d.id,
      name: d.data().name,
      joinedAt: d.data().createdAt,
      isPaid: !!d.data().isPaid,
    }))
  } catch (e) {
    console.error("Error getting referred users:", e)
    return []
  }
}

export default {
  generateReferralCode,
  createUserWithReferral,
  validateAndGetReferrer,
  getReferralStats,
  trackReferralClick,
  getReferralLink,
  applyReferralBonus,
  getReferredUsers
}