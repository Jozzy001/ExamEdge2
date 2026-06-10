// =============================================
// HOT TOPICS ANALYZER
// Identifies questions that repeat most frequently
// =============================================

import { db } from "../firebase"
import { collection, addDoc, query, getDocs, where, updateDoc, doc } from "firebase/firestore"

// ─────────────────────────────────────────
// ANALYZE ALL QUESTIONS FOR REPETITION
// ─────────────────────────────────────────
export const analyzeHotTopics = (allQuestions, faculty = "arts") => {
  const topicFrequency = {}
  const topicQuestions = {}
  
  // Count frequency by topic and store questions
  allQuestions.forEach(q => {
    const topic = q.topic || "General"
    const subject = q.subject || "General"
    const key = `${subject}::${topic}`
    
    if (!topicFrequency[key]) {
      topicFrequency[key] = { count: 0, subject, topic, years: [], questions: [] }
    }
    
    topicFrequency[key].count++
    topicFrequency[key].years.push(q.year)
    topicFrequency[key].questions.push(q)
  })

  // Filter: only topics with 3+ questions
  const hotTopics = Object.entries(topicFrequency)
    .filter(([_, data]) => data.count >= 3)
    .map(([key, data]) => ({
      id: key,
      subject: data.subject,
      topic: data.topic,
      frequency: data.count,
      yearsAppeared: [...new Set(data.years)].sort(),
      questions: selectBestQuestions(data.questions, 10), // Top 10 per topic
      difficulty: calculateDifficulty(data.questions),
      importance: calculateImportance(data.count, data.years)
    }))
    .sort((a, b) => b.importance - a.importance) // Rank by importance

  return hotTopics
}

// ─────────────────────────────────────────
// SELECT BEST QUESTIONS FROM A TOPIC
// ─────────────────────────────────────────
const selectBestQuestions = (questions, maxCount) => {
  // Prefer recent years (2015-2020) over older
  const weighted = questions.map(q => ({
    ...q,
    weight: q.year >= 2015 ? 2 : 1
  }))
  
  // Sort by year (recent first), then by question ID
  const sorted = weighted
    .sort((a, b) => {
      if (b.year !== a.year) return b.year - a.year
      return (a.id || "").localeCompare(b.id || "")
    })
    .slice(0, maxCount)

  return sorted
}

// ─────────────────────────────────────────
// CALCULATE DIFFICULTY LEVEL
// ─────────────────────────────────────────
const calculateDifficulty = (questions) => {
  // In real app, track user accuracy per question
  // For now, simple heuristic: longer questions = harder
  const avgLength = questions.reduce((sum, q) => sum + (q.question?.length || 0), 0) / questions.length
  
  if (avgLength > 300) return "Hard"
  if (avgLength > 150) return "Medium"
  return "Easy"
}

// ─────────────────────────────────────────
// CALCULATE IMPORTANCE SCORE
// ─────────────────────────────────────────
const calculateImportance = (frequency, years) => {
  let score = 0
  
  // Frequency weight (40%)
  score += Math.min(frequency, 10) * 4
  
  // Recency weight (40%) - recent years worth more
  const recentYears = years.filter(y => y >= 2015).length
  score += recentYears * 4
  
  // Consistency weight (20%) - appeared across multiple years
  const uniqueYears = new Set(years).size
  score += Math.min(uniqueYears, 5) * 2
  
  return score
}

// ─────────────────────────────────────────
// SAVE HOT TOPICS TO FIRESTORE
// ─────────────────────────────────────────
export const saveHotTopicsToFirestore = async (hotTopics, faculty = "arts") => {
  try {
    for (const topic of hotTopics.slice(0, 20)) { // Save top 20 only
      await addDoc(collection(db, "hotTopics"), {
        id: topic.id,
        faculty,
        subject: topic.subject,
        topic: topic.topic,
        frequency: topic.frequency,
        yearsAppeared: topic.yearsAppeared,
        questionIds: topic.questions.map(q => q.id),
        difficulty: topic.difficulty,
        importance: topic.importance,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      })
    }
    console.log(`Saved ${Math.min(hotTopics.length, 20)} hot topics for ${faculty}`)
  } catch (e) {
    console.error("Error saving hot topics:", e)
  }
}

// ─────────────────────────────────────────
// GET HOT TOPICS FOR USER
// ─────────────────────────────────────────
export const getHotTopicsForUser = async (faculty, userWeakTopics = []) => {
  try {
    const q = query(
      collection(db, "hotTopics"),
      where("faculty", "==", faculty)
    )
    
    const snapshot = await getDocs(q)
    let hotTopics = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))

    // Prioritize: user's weak topics first, then by importance
    hotTopics.sort((a, b) => {
      const aIsWeak = userWeakTopics.includes(a.topic)
      const bIsWeak = userWeakTopics.includes(b.topic)
      
      if (aIsWeak && !bIsWeak) return -1
      if (!aIsWeak && bIsWeak) return 1
      
      return b.importance - a.importance
    })

    return hotTopics
  } catch (e) {
    console.error("Error getting hot topics:", e)
    return []
  }
}

// ─────────────────────────────────────────
// GET HOT QUESTIONS FOR TOPIC
// ─────────────────────────────────────────
export const getHotQuestionsForTopic = (allQuestions, subject, topic) => {
  return allQuestions.filter(q => q.subject === subject && q.topic === topic)
    .sort((a, b) => (b.year || 0) - (a.year || 0))
    .slice(0, 15) // Limit to 15
}

// ─────────────────────────────────────────
// GENERATE HOT TOPICS REPORT
// ─────────────────────────────────────────
export const generateHotTopicsReport = (hotTopics, faculty) => {
  return {
    faculty,
    totalHotTopics: hotTopics.length,
    topByFrequency: [...hotTopics].sort((a, b) => b.frequency - a.frequency).slice(0, 5),
    topByImportance: hotTopics.slice(0, 5),
    byDifficulty: {
      easy: hotTopics.filter(t => t.difficulty === "Easy").length,
      medium: hotTopics.filter(t => t.difficulty === "Medium").length,
      hard: hotTopics.filter(t => t.difficulty === "Hard").length
    },
    generatedAt: new Date().toISOString()
  }
}

// ─────────────────────────────────────────
// EXPORT FOR TESTING
// ─────────────────────────────────────────
export default {
  analyzeHotTopics,
  saveHotTopicsToFirestore,
  getHotTopicsForUser,
  getHotQuestionsForTopic,
  generateHotTopicsReport
}
