// =============================================
// STRATEGIC PAYWALL SYSTEM
// =============================================

// Features and their access level
export const FEATURE_ACCESS = {
  // COMPLETELY FREE
  STUDY_MODE: { free: true, name: "Study Mode" },
  CBT_MODE: { free: true, name: "CBT Mode (Limited)" },
  SETTINGS: { free: true, name: "Settings" },
  
  // FREE BUT LIMITED
  PROGRESS_BASIC: { free: true, name: "Basic Progress (This Week)" },
  DAILY_GOAL: { free: true, name: "Daily Goal Tracking" },
  STREAK: { free: true, name: "Streak Tracking" },
  BADGES: { free: true, name: "Badge System" },
  
  // PAID ONLY
  PROGRESS_ADVANCED: { free: false, name: "Full Progress History (All Time)" },
  PROGRESS_ANALYTICS: { free: false, name: "Detailed Analytics & Trends" },
  WEAK_AREAS: { free: false, name: "Weak Areas Review" },
  HOT_TOPICS: { free: false, name: "Hot Topics (Most Repeated)" },
  CBT_HISTORY: { free: false, name: "CBT History & Review" },
  CBT_UNLIMITED: { free: false, name: "Unlimited CBT Attempts" },
  LEADERBOARD: { free: false, name: "Leaderboard" },
  AI_EXPLANATIONS: { free: false, name: "AI-Powered Explanations" }
}

// ─────────────────────────────────────────
// CHECK IF USER CAN ACCESS FEATURE
// ─────────────────────────────────────────
export const canAccessFeature = (feature, isPaid) => {
  if (isPaid) return true // Paid users get everything
  return FEATURE_ACCESS[feature]?.free === true
}

// ─────────────────────────────────────────
// PAYWALL TRIGGER LOGIC
// ─────────────────────────────────────────
export const shouldShowPaywall = (feature, isPaid, userQuizCount = 0) => {
  // Never show paywall to paid users
  if (isPaid) return false
  
  // Never show paywall for completely free features
  if (FEATURE_ACCESS[feature]?.free === true) return false
  
  // For paid features, show paywall after user has done some quizzes
  // This ensures they experience value before asking for money
  if (userQuizCount < 3) return false
  
  return true
}

// ─────────────────────────────────────────
// PAYWALL MESSAGE TEMPLATES
// ─────────────────────────────────────────
export const PAYWALL_MESSAGES = {
  WEAK_AREAS: {
    title: "See Your Weak Areas",
    description: "Review the exact questions you got wrong and learn from them. Students who use this improve 2x faster.",
    cta: "Unlock for ₦3,000",
    price: "₦3,000",
    features: ["Review all weak questions", "See your improvement", "Target your study"]
  },
  HOT_TOPICS: {
    title: "Master Hot Topics",
    description: "Questions that have appeared 3+ times in UNIBEN exams. These are the most likely to show up on your exam.",
    cta: "Unlock for ₦3,000",
    price: "₦3,000",
    features: ["50+ most repeated questions", "Ranked by exam year", "Perfect for last-minute prep"]
  },
  CBT_HISTORY: {
    title: "Review Your Attempts",
    description: "See all your past mock exams, scores, and improvements. Track your progress over time.",
    cta: "Unlock for ₦3,000",
    price: "₦3,000",
    features: ["View all past exams", "Compare scores", "See improvement trends"]
  },
  PROGRESS_ADVANCED: {
    title: "See Full Analytics",
    description: "Track your performance across all subjects, topics, and time periods. Get insights on what to study next.",
    cta: "Unlock for ₦3,000",
    price: "₦3,000",
    features: ["Full history analytics", "Detailed topic breakdown", "Score predictions"]
  },
  LEADERBOARD: {
    title: "Join the Leaderboard",
    description: "Compete with other UNIBEN takers. See how you rank and get motivated to improve.",
    cta: "Unlock for ₦3,000",
    price: "₦3,000",
    features: ["Live leaderboard", "Faculty rankings", "Beat your friends"]
  }
}

// ─────────────────────────────────────────
// GET UPGRADE BENEFIT MESSAGE
// ─────────────────────────────────────────
export const getUpgradeBenefit = (userWeakTopicCount = 0, userAvgScore = 45) => {
  return {
    title: "Upgrade to Full Access",
    mainBenefit: `You have ${userWeakTopicCount} weak areas. Fix them with targeted drilling.`,
    secondaryBenefit: `Your current score: ${userAvgScore}%. With full access: ~${Math.min(userAvgScore + 15, 85)}%.`,
    features: [
      "✅ Master weak areas",
      "✅ Hot topics (most repeated questions)",
      "✅ Full progress analytics",
      "✅ Past exam review",
      "✅ Live leaderboard"
    ]
  }
}

// ─────────────────────────────────────────
// PAYWALL TIMING STRATEGY
// ─────────────────────────────────────────
export const getPaywallTiming = (userData, quizCount) => {
  return {
    showOnFirstQuiz: false, // Never block immediately
    showAfterQuizzes: 3, // Show after 3 quizzes
    showOnWeakAreaClick: true, // Show if they try to view weak areas
    showOnHotTopicsClick: true, // Show if they try to view hot topics
    showOnProgressClick: false, // Show instead an "Upgrade for full history" upsell
    frequencyCapMs: 1000 * 60 * 5 // Don't show more than once per 5 minutes
  }
}

// ─────────────────────────────────────────
// TRACK PAYWALL IMPRESSIONS
// ─────────────────────────────────────────
export const trackPaywallImpression = (feature, isPaid) => {
  if (isPaid) return // Don't track for paid users
  
  const key = `paywall-${feature}-count`
  const count = parseInt(localStorage.getItem(key) || "0")
  localStorage.setItem(key, String(count + 1))
}

// ─────────────────────────────────────────
// TRACK PAYWALL CONVERSION
// ─────────────────────────────────────────
export const trackPaywallConversion = (feature, converted) => {
  const impressions = parseInt(localStorage.getItem(`paywall-${feature}-count`) || "0")
  
  // Track conversion rate: if 5 impressions → 1 conversion = 20% CVR
  console.log(`Feature ${feature}: ${impressions} impressions, converted: ${converted}`)
}

// ─────────────────────────────────────────
// SMART PAYWALL COPY BASED ON USER
// ─────────────────────────────────────────
export const getSmartPaywallCopy = (userStats) => {
  const { weakAreaCount, avgScore, quizCount, failedTopics } = userStats

  if (weakAreaCount >= 5) {
    return {
      title: "Fix Your Weak Areas",
      body: `You're weak in ${failedTopics.join(", ")}. Upgrade to drill these and improve fast.`,
      urgency: "high"
    }
  }

  if (avgScore < 50) {
    return {
      title: "Let's Boost Your Score",
      body: `You're at ${avgScore}%. With targeted study, you can hit ${avgScore + 20}%+.`,
      urgency: "high"
    }
  }

  if (quizCount >= 5) {
    return {
      title: "You're Making Progress!",
      body: "Upgrade to see your full analytics and take unlimited mock exams.",
      urgency: "medium"
    }
  }

  return {
    title: "Unlimited Access",
    body: "Get full access to all features and crush your exam.",
    urgency: "low"
  }
}

// ─────────────────────────────────────────
// DETERMINE IF PAYWALL IS WORKING
// ─────────────────────────────────────────
export const getPaywallHealthMetrics = () => {
  const metrics = {}
  
  // Get all paywall impression counts
  const features = ["WEAK_AREAS", "HOT_TOPICS", "CBT_HISTORY", "PROGRESS_ADVANCED"]
  
  features.forEach(feature => {
    const impressions = parseInt(localStorage.getItem(`paywall-${feature}-count`) || "0")
    metrics[feature] = { impressions }
  })

  return metrics
}

export default {
  FEATURE_ACCESS,
  canAccessFeature,
  shouldShowPaywall,
  PAYWALL_MESSAGES,
  getUpgradeBenefit,
  getPaywallTiming,
  trackPaywallImpression,
  trackPaywallConversion,
  getSmartPaywallCopy
}
