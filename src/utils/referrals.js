// =============================================
// REFERRAL SYSTEM
// =============================================

import { db } from "../firebase"
import { doc, updateDoc, getDoc, collection, addDoc, query, where, getDocs, increment } from "firebase/firestore"

// ─────────────────────────────────────────
// 1. GENERATE REFERRAL CODE
// ─────────────────────────────────────────
export const generateReferralCode = (userId) => {
  // Format: 4 chars from name + 6 random chars
  const random = Math.random().toString(36).substring(2, 8).toUpperCase()
  const code = `EXAM${random}`
  return code
}

// ─────────────────────────────────────────
// 2. CREATE USER WITH REFERRAL
// ─────────────────────────────────────────
export const createUserWithReferral = async (userId, userEmail, referralCode = null) => {
  try {
    const referralData = {
      userId,
      email: userEmail,
      referralCode: generateReferralCode(userId),
      referredBy: null,
      referralCount: 0,
      referralRewards: 0, // in minutes of free access
      createdAt: new Date().toISOString()
    }

    if (referralCode) {
      // Validate referral code and link referrer
      const referrer = await validateAndGetReferrer(referralCode)
      if (referrer) {
        referralData.referredBy = referrer.userId
        
        // Update referrer's count
        await updateDoc(doc(db, "users", referrer.userId), {
          referralCount: increment(1),
          referralRewards: increment(1440) // +1 day free for each referral
        })

        // Check for milestone rewards
        const updatedReferrer = await getDoc(doc(db, "users", referrer.userId))
        checkReferralMilestones(referrer.userId, updatedReferrer.data().referralCount)
      }
    }

    // Save to Firestore
    await updateDoc(doc(db, "users", userId), referralData)
    
    return referralData
  } catch (e) {
    console.error("Error creating user with referral:", e)
    return null
  }
}

// ─────────────────────────────────────────
// 2B. VALIDATE REFERRAL CODE
// ─────────────────────────────────────────
export const validateAndGetReferrer = async (code) => {
  try {
    const q = query(collection(db, "users"), where("referralCode", "==", code))
    const snapshot = await getDocs(q)
    
    if (snapshot.empty) return null
    
    const referrer = snapshot.docs[0]
    return { userId: referrer.id, ...referrer.data() }
  } catch (e) {
    console.error("Error validating referral code:", e)
    return null
  }
}

// ─────────────────────────────────────────
// 3. CHECK MILESTONE REWARDS
// ─────────────────────────────────────────
const checkReferralMilestones = async (userId, referralCount) => {
  const milestones = {
    1: { bonus: 1440, message: "Your first friend joined! 🎉" },
    3: { bonus: 7 * 1440, message: "3 friends! You earned 1 week free! 🔥" },
    5: { bonus: 14 * 1440, message: "5 friends! You earned 2 weeks free! 🚀" },
    10: { bonus: 30 * 1440, message: "10 friends! You earned 1 month free! 👑" }
  }

  if (milestones[referralCount]) {
    const { bonus, message } = milestones[referralCount]
    
    // Log milestone achievement
    await addDoc(collection(db, "milestoneAchievements"), {
      userId,
      milestone: referralCount,
      bonus,
      message,
      achievedAt: new Date().toISOString()
    })

    // Notify user (trigger notification)
    return { achieved: true, ...milestones[referralCount] }
  }

  return { achieved: false }
}

// ─────────────────────────────────────────
// 4. GET REFERRAL STATS
// ─────────────────────────────────────────
export const getReferralStats = async (userId) => {
  try {
    const userDoc = await getDoc(doc(db, "users", userId))
    if (!userDoc.exists()) return null

    const data = userDoc.data()
    return {
      referralCode: data.referralCode,
      referralCount: data.referralCount || 0,
      referralRewards: data.referralRewards || 0, // in minutes
      referredBy: data.referredBy || null,
      nextMilestone: getNextMilestone(data.referralCount || 0)
    }
  } catch (e) {
    console.error("Error getting referral stats:", e)
    return null
  }
}

// ─────────────────────────────────────────
// 5. GET NEXT MILESTONE
// ─────────────────────────────────────────
const getNextMilestone = (currentCount) => {
  const milestones = [1, 3, 5, 10]
  const next = milestones.find(m => m > currentCount)
  
  if (!next) return { target: 10, remaining: 0, reward: "1 month free" }
  
  return {
    target: next,
    remaining: next - currentCount,
    reward: next === 1 ? "1 day free" : next === 3 ? "1 week free" : next === 5 ? "2 weeks free" : "1 month free"
  }
}

// ─────────────────────────────────────────
// 6. TRACK REFERRAL CLICK
// ─────────────────────────────────────────
export const trackReferralClick = (code) => {
  localStorage.setItem("ee-referral-code", code)
  
  // Log click for analytics
  addDoc(collection(db, "referralClicks"), {
    code,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent
  }).catch(e => console.error("Error tracking referral:", e))
}

// ─────────────────────────────────────────
// 7. GET REFERRAL LINK
// ─────────────────────────────────────────
export const getReferralLink = (code) => {
  const baseUrl = window.location.origin
  return `${baseUrl}?ref=${code}`
}

// ─────────────────────────────────────────
// 8. APPLY REFERRAL BONUS ON SIGNUP
// ─────────────────────────────────────────
export const applyReferralBonus = async (userId, code) => {
  try {
    const referrer = await validateAndGetReferrer(code)
    if (!referrer) return false

    // Create referral record
    await addDoc(collection(db, "referrals"), {
      referrerId: referrer.userId,
      newUserId: userId,
      code,
      timestamp: new Date().toISOString(),
      bonusApplied: false
    })

    // Mark as referred in user document
    await updateDoc(doc(db, "users", userId), {
      referredBy: referrer.userId,
      referralAppliedAt: new Date().toISOString()
    })

    return true
  } catch (e) {
    console.error("Error applying referral bonus:", e)
    return false
  }
}

// ─────────────────────────────────────────
// 9. GET REFERRED USERS
// ─────────────────────────────────────────
export const getReferredUsers = async (userId) => {
  try {
    const q = query(collection(db, "users"), where("referredBy", "==", userId))
    const snapshot = await getDocs(q)
    
    return snapshot.docs.map(doc => ({
      id: doc.id,
      email: doc.data().email,
      name: doc.data().name,
      joinedAt: doc.data().createdAt
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
