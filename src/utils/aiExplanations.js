// =============================================
// AI EXPLANATIONS
// Generate improved explanations using Claude
// =============================================

// NOTE: In production, call Claude API from your backend
// This prevents exposing your API key to the client
// Set up a Cloud Function that calls this

export const generateEnhancedExplanation = async (question, options, correctAnswer, originalExplanation) => {
  try {
    // Call your backend endpoint instead
    // POST /api/explain
    const response = await fetch("/api/explain", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        question,
        options,
        correctAnswer,
        originalExplanation
      })
    })

    if (!response.ok) throw new Error("Failed to generate explanation")
    
    const data = await response.json()
    return data.explanation
  } catch (e) {
    console.error("Error generating explanation:", e)
    return null
  }
}

// ─────────────────────────────────────────
// GENERATE SIMILAR QUESTIONS
// ─────────────────────────────────────────
export const generateSimilarQuestions = async (question, topic, allQuestions = []) => {
  try {
    // Find questions with same topic
    const similar = allQuestions
      .filter(q => q.topic === topic && q.id !== question.id)
      .sort(() => Math.random() - 0.5) // Shuffle
      .slice(0, 3)

    return similar
  } catch (e) {
    console.error("Error finding similar questions:", e)
    return []
  }
}

// ─────────────────────────────────────────
// GENERATE "WHY YOU GOT THIS WRONG" ANALYSIS
// ─────────────────────────────────────────
export const analyzeUserError = async (question, userAnswer, correctAnswer, explanation) => {
  try {
    // Could use Claude to analyze the user's mistake
    // For now, return pattern-based analysis
    
    return {
      error_type: categorizeError(question, userAnswer, correctAnswer),
      reasoning: generateErrorReasoning(userAnswer, correctAnswer),
      tip: generateStudyTip(question.topic)
    }
  } catch (e) {
    console.error("Error analyzing user error:", e)
    return null
  }
}

// ─────────────────────────────────────────
// CATEGORIZE ERROR TYPE
// ─────────────────────────────────────────
const categorizeError = (question, userAnswer, correctAnswer) => {
  if (!userAnswer) return "SKIPPED"
  if (userAnswer === correctAnswer) return "CORRECT"
  
  // Could add more sophisticated error categorization
  return "INCORRECT"
}

// ─────────────────────────────────────────
// GENERATE ERROR REASONING
// ─────────────────────────────────────────
const generateErrorReasoning = (userAnswer, correctAnswer) => {
  return {
    yourAnswer: userAnswer,
    correctAnswer: correctAnswer,
    whyWrong: "This was incorrect. Review the explanation above and try similar questions."
  }
}

// ─────────────────────────────────────────
// GENERATE STUDY TIP
// ─────────────────────────────────────────
const generateStudyTip = (topic) => {
  const tips = {
    "Comprehension": "Read the passage carefully. Look for key words and the main idea.",
    "Antonyms": "Think of words with opposite meanings. Remember prefixes like 'un-', 'dis-'.",
    "Synonyms": "Find words with similar meanings. Context matters.",
    "Idioms & Expressions": "Learn common idioms. They have special meanings beyond literal words.",
    "Sentence Analysis": "Identify subject, verb, object. Check sentence structure.",
    "Government": "Remember key concepts: democracy, constitution, voting, rights.",
    "Economics": "Understand supply & demand, inflation, GDP, opportunity cost.",
    "Physics": "Focus on formulas and units. Draw diagrams for visualization.",
    "Chemistry": "Balance equations. Understand atomic structure and reactions.",
    "Biology": "Memorize cell parts. Understand photosynthesis and respiration."
  }
  
  return tips[topic] || "Review this topic and practice more questions."
}

// ─────────────────────────────────────────
// CACHE EXPLANATIONS (Local)
// ─────────────────────────────────────────
const EXPLANATION_CACHE = {}

export const cacheExplanation = (questionId, explanation) => {
  EXPLANATION_CACHE[questionId] = {
    explanation,
    cachedAt: new Date().toISOString()
  }
}

export const getCachedExplanation = (questionId) => {
  return EXPLANATION_CACHE[questionId]?.explanation || null
}

// ─────────────────────────────────────────
// TRACK EXPLANATION USAGE
// ─────────────────────────────────────────
export const trackExplanationUsage = async (userId, questionId, topic) => {
  try {
    // Track which explanations users are reading
    // Helps identify difficult topics
    localStorage.setItem(`explanation-${questionId}`, new Date().toISOString())
  } catch (e) {
    console.error("Error tracking explanation:", e)
  }
}

export default {
  generateEnhancedExplanation,
  generateSimilarQuestions,
  analyzeUserError,
  cacheExplanation,
  getCachedExplanation,
  trackExplanationUsage
}
