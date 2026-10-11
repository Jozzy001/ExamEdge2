import { biologyHotQuestions } from "./biology"
import { chemistryHotQuestions } from "./chemistry"
import { physicsHotQuestions } from "./physics"
import { englishHotQuestions } from "./english"
import { mathematicsHotQuestions } from "./mathematics"
import { economicsHotQuestions } from "./economics"
import { governmentHotQuestions } from "./government"
import { commerceHotQuestions } from "./commerce"
import { literatureHotQuestions } from "./literature"
import { crkHotQuestions } from "./crk"
import { accountingHotQuestions } from "./accounting"

const normalize = (subject) => (q) => ({
  subject,
  topic: q.category,
  question: q.question,
  options: Object.values(q.options),
  answer: q.options[q.correctAnswer],
  explanation: q.explanation,
  years: q.yearsAppeared || [],
})

export const CURATED_HOT_QUESTIONS = {
  Biology: biologyHotQuestions.map(normalize("Biology")),
  Chemistry: chemistryHotQuestions.map(normalize("Chemistry")),
  Physics: physicsHotQuestions.map(normalize("Physics")),
  English: englishHotQuestions.map(normalize("English")),
  Mathematics: mathematicsHotQuestions.map(normalize("Mathematics")),
  Economics: economicsHotQuestions.map(normalize("Economics")),
  Government: governmentHotQuestions.map(normalize("Government")),
  Commerce: commerceHotQuestions.map(normalize("Commerce")),
  Literature: literatureHotQuestions.map(normalize("Literature")),
  CRK: crkHotQuestions.map(normalize("CRK")),
  Accounts: accountingHotQuestions.map(normalize("Accounts")),
}