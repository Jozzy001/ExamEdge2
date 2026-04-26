// EXAMEDGE — CENTRAL QUESTION BANK

// --- ENGLISH ---
import engjamb2010 from "./english/jamb2010"
import engjamb2011 from "./english/jamb2011"

// --- GOVERNMENT ---
import govtJamb2010 from "./government/jamb2010"

// --- ECONOMICS ---
import econJamb2010 from "./economics/jamb2010"

// --- BIOLOGY ---
import bioJamb2010 from "./biology/jamb2010"

// --- LITERATURE ---
import litJamb2010 from "./literature/jamb2010"

// --- MATHEMATICS ---
import mathsJamb2010 from "./maths/jamb2010"

const questions = [
  ...engjamb2010,
  ...engjamb2011,
  ...govtJamb2010,
  ...econJamb2010,
  ...bioJamb2010,
  ...litJamb2010,
  ...mathsJamb2010,
]

export default questions
