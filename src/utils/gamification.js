// =============================================
// EXAMEDGENG GAMIFICATION SYSTEM
// =============================================

// --- LEVELS ---
export const LEVELS = [
  { level: 1, xp: 0,    title: "Fresher",   emoji: "🌱" },
  { level: 2, xp: 100,  title: "Student",   emoji: "📚" },
  { level: 3, xp: 250,  title: "Scholar",   emoji: "🎓" },
  { level: 4, xp: 500,  title: "Achiever",  emoji: "⭐" },
  { level: 5, xp: 800,  title: "Expert",    emoji: "🔥" },
  { level: 6, xp: 1200, title: "Master",    emoji: "💎" },
  { level: 7, xp: 1800, title: "Champion",  emoji: "🏆" },
  { level: 8, xp: 2500, title: "Legend",    emoji: "👑" },
]

export const getLevelInfo = (totalXP) => {
  let current = LEVELS[0]
  let next = LEVELS[1]
  for (let i = 0; i < LEVELS.length; i++) {
    if (totalXP >= LEVELS[i].xp) {
      current = LEVELS[i]
      next = LEVELS[i + 1] || null
    }
  }
  const xpIntoLevel = next ? totalXP - current.xp : 0
  const xpNeeded = next ? next.xp - current.xp : 1
  const progress = next ? Math.round((xpIntoLevel / xpNeeded) * 100) : 100
  return { current, next, progress, xpIntoLevel, xpNeeded }
}

// --- BADGES ---
export const ALL_BADGES = [
  { id: "first_quiz",    emoji: "🎯", title: "First Step",      desc: "Complete your first quiz" },
  { id: "perfect_score", emoji: "💯", title: "Perfectionist",   desc: "Score 100% on any quiz" },
  { id: "streak_3",      emoji: "🔥", title: "On Fire",         desc: "Study 3 days in a row" },
  { id: "streak_7",      emoji: "⚡", title: "Week Warrior",    desc: "Study 7 days in a row" },
  { id: "streak_30",     emoji: "🌟", title: "Unstoppable",     desc: "Study 30 days in a row" },
  { id: "century",       emoji: "💪", title: "Century",         desc: "Answer 100 questions total" },
  { id: "hot_streak",    emoji: "🎰", title: "Hot Streak",      desc: "5 correct answers in a row" },
  { id: "night_owl",     emoji: "🦉", title: "Night Owl",       desc: "Study after 10pm" },
  { id: "early_bird",    emoji: "🐦", title: "Early Bird",      desc: "Study before 7am" },
  { id: "level_5",       emoji: "🏅", title: "Expert Reached",  desc: "Reach level 5" },
  { id: "top_scorer",    emoji: "🥇", title: "Top Scorer",      desc: "Score 80%+ three times" },
  { id: "dedicated",     emoji: "📅", title: "Dedicated",       desc: "Complete your daily goal" },
]

// --- STORAGE HELPERS ---
const getXP = () => parseInt(localStorage.getItem("ee-xp") || "0")
const setXP = (xp) => localStorage.setItem("ee-xp", String(xp))

const getStreak = () => {
  try { return JSON.parse(localStorage.getItem("ee-streak") || '{"count":0,"lastDate":null}') }
  catch { return { count: 0, lastDate: null } }
}

const getBadges = () => {
  try { return JSON.parse(localStorage.getItem("ee-badges") || "[]") }
  catch { return [] }
}

const getDailyGoal = () => {
  try {
    const saved = JSON.parse(localStorage.getItem("ee-dailyGoal") || 'null')
    const today = new Date().toDateString()
    if (saved && saved.date === today) return saved
    // Reset for new day
    const fresh = { target: saved?.target || 20, date: today, done: 0 }
    localStorage.setItem("ee-dailyGoal", JSON.stringify(fresh))
    return fresh
  } catch {
    return { target: 20, date: new Date().toDateString(), done: 0 }
  }
}

const getTotalAnswered = () => parseInt(localStorage.getItem("ee-totalAnswered") || "0")

// --- STREAK UPDATE ---
const updateStreak = () => {
  const streak = getStreak()
  const today = new Date().toDateString()
  const yesterday = new Date(Date.now() - 86400000).toDateString()

  let newCount
  if (streak.lastDate === today) {
    // Already studied today
    return streak.count
  } else if (streak.lastDate === yesterday) {
    // Studied yesterday — extend streak
    newCount = streak.count + 1
  } else {
    // Broke streak or first time
    newCount = 1
  }

  localStorage.setItem("ee-streak", JSON.stringify({ count: newCount, lastDate: today }))
  return newCount
}

// --- AWARD XP & CHECK BADGES ---
export const processQuizResult = ({ score, total, timeTakenSeconds = null }) => {
  const earned = []   // { xp, reason }
  const newBadges = []

  // Base XP per correct answer
  const baseXP = score * 5
  earned.push({ xp: baseXP, reason: `${score} correct answers` })

  // Bonus XP
  const pct = total > 0 ? Math.round((score / total) * 100) : 0
  if (pct === 100 && total >= 5) earned.push({ xp: 20, reason: "Perfect score!" })
  else if (pct >= 70) earned.push({ xp: 10, reason: "Great score bonus" })

  // Update streak
  const streakCount = updateStreak()
  if (streakCount > 1) earned.push({ xp: 10, reason: `${streakCount}-day streak bonus` })

  // Update total XP
  const totalXPEarned = earned.reduce((s, e) => s + e.xp, 0)
  const oldXP = getXP()
  const newXP = oldXP + totalXPEarned
  setXP(newXP)

  // Update total answered
  const oldTotal = getTotalAnswered()
  const newTotal = oldTotal + total
  localStorage.setItem("ee-totalAnswered", String(newTotal))

  // Update daily goal
  const goal = getDailyGoal()
  const newDone = goal.done + total
  const goalCompleted = goal.done < goal.target && newDone >= goal.target
  if (goalCompleted) earned.push({ xp: 15, reason: "Daily goal completed! 🎯" })
  localStorage.setItem("ee-dailyGoal", JSON.stringify({ ...goal, done: newDone }))
  if (goalCompleted) setXP(newXP + 15)

  // Check level up
  const oldLevel = getLevelInfo(oldXP).current.level
  const newLevel = getLevelInfo(newXP).current.level
  const leveledUp = newLevel > oldLevel

  // --- BADGE CHECKS ---
  const existingBadges = getBadges()
  const hasBadge = (id) => existingBadges.includes(id)

  const checkBadge = (id) => {
    if (!hasBadge(id)) {
      newBadges.push(ALL_BADGES.find(b => b.id === id))
      existingBadges.push(id)
    }
  }

  // First quiz
  if (oldTotal === 0) checkBadge("first_quiz")

  // Perfect score
  if (pct === 100 && total >= 5) checkBadge("perfect_score")

  // Streaks
  if (streakCount >= 3) checkBadge("streak_3")
  if (streakCount >= 7) checkBadge("streak_7")
  if (streakCount >= 30) checkBadge("streak_30")

  // Century
  if (oldTotal < 100 && newTotal >= 100) checkBadge("century")

  // Daily goal
  if (goalCompleted) checkBadge("dedicated")

  // Level 5
  if (leveledUp && newLevel >= 5) checkBadge("level_5")

  // Top scorer (80%+ three times)
  if (pct >= 80) {
    const topCount = parseInt(localStorage.getItem("ee-topScores") || "0") + 1
    localStorage.setItem("ee-topScores", String(topCount))
    if (topCount >= 3) checkBadge("top_scorer")
  }

  // Night owl / early bird
  const hour = new Date().getHours()
  if (hour >= 22) checkBadge("night_owl")
  if (hour < 7) checkBadge("early_bird")

  // Save badges
  if (newBadges.length > 0) {
    localStorage.setItem("ee-badges", JSON.stringify(existingBadges))
  }

  return {
    xpEarned: totalXPEarned + (goalCompleted ? 15 : 0),
    earned,
    newBadges,
    leveledUp,
    newLevel: getLevelInfo(newXP).current,
    streakCount,
    goalCompleted,
    newXP,
  }
}

// --- CHECK HOT STREAK (5 in a row) ---
export const checkHotStreak = (correctInARow) => {
  if (correctInARow >= 5) {
    const existing = getBadges()
    if (!existing.includes("hot_streak")) {
      existing.push("hot_streak")
      localStorage.setItem("ee-badges", JSON.stringify(existing))
      return ALL_BADGES.find(b => b.id === "hot_streak")
    }
  }
  return null
}

// --- PUBLIC GETTERS ---
export const getGameState = () => {
  const xp = getXP()
  const levelInfo = getLevelInfo(xp)
  const streak = getStreak()
  const badges = getBadges()
  const goal = getDailyGoal()
  const totalAnswered = getTotalAnswered()

  return {
    xp,
    levelInfo,
    streak: streak.count,
    badges,
    goal,
    totalAnswered,
  }
}

export const setDailyGoalTarget = (target) => {
  const goal = getDailyGoal()
  localStorage.setItem("ee-dailyGoal", JSON.stringify({ ...goal, target }))
}

export const setExamDate = (dateString) => {
  localStorage.setItem("ee-examDate", dateString)
}

export const getExamDate = () => localStorage.getItem("ee-examDate")

export const getDaysToExam = () => {
  const examDate = getExamDate()
  if (!examDate) return null
  const diff = new Date(examDate) - new Date()
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)))
}
