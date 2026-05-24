// EXAMEDGE — CENTRAL QUESTION BANK

// --- ENGLISH ---
import jamb2010 from "./english/jamb2010"
import jamb2011 from "./english/jamb2011"

// --- GOVERNMENT ---
import govtJamb2010 from "./government/jamb2010"

// --- ECONOMICS ---
import econJamb2010 from "./economics/jamb2010"

// --- BIOLOGY ---
import bioJamb2010 from "./biology/jamb2010"

// --- LITERATURE ---
import litJamb2010 from "./literature/jamb2010"

// --- MATHEMATICS ---
import mathsJamb2010 from "./mathematics/jamb2010"

// --- PHYSICS ---
import physicsJamb2004 from "./physics/jamb2004"

// --- CHEMISTRY ---
import chemJamb2004 from "./chemistry/jamb2004"

// --- COMMERCE ---
import comJamb2004 from "./commerce/jamb2004"

// --- CRK ---
import crkJamb2004 from "./crk/jamb2004"

// --- ACCOUNTS ---
import accountsJamb2004 from "./accounts/jamb2004"

const questions = [
  ...jamb2010,
  ...jamb2011,
  ...govtJamb2010,
  ...econJamb2010,
  ...bioJamb2010,
  ...litJamb2010,
  ...mathsJamb2010,
  ...physicsJamb2004,
  ...chemJamb2004,
  ...comJamb2004,
  ...crkJamb2004,
  ...accountsJamb2004,
]

export default questions
