// =============================================
// EXAMEDGE — CENTRAL QUESTION BANK
// =============================================

// --- ENGLISH ---
import jamb2010 from "./english/jamb2010"
import jamb2011 from "./english/jamb2011"
// import jamb2012 from "./english/jamb2012"
// import jamb2013 from "./english/jamb2013"
// import jamb2014 from "./english/jamb2014"
// import jamb2015 from "./english/jamb2015"
// import jamb2016 from "./english/jamb2016"
// import jamb2017 from "./english/jamb2017"
// import jamb2018 from "./english/jamb2018"

// --- MATHEMATICS ---
// import mathsjamb2010 from "./mathematics/jamb2010"
// import mathsjamb2011 from "./mathematics/jamb2011"

// --- PHYSICS ---
// import physicsjamb2010 from "./physics/jamb2010"

// --- CHEMISTRY ---
// import chemistryjamb2010 from "./chemistry/jamb2010"

// --- BIOLOGY ---
// import biologyjamb2010 from "./biology/jamb2010"

// --- GOVERNMENT ---
 import govtJamb2010 from "./government/jamb2010"

const questions = [
  ...jamb2010,
  ...jamb2011,
  ...govtJamb2010,
  // ...mathsjamb2010,
]

export default questions
