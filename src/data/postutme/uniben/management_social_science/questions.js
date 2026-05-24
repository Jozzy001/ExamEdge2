// UNIBEN Post-UTME — Management & Social Sciences Question Bank
// ✅ Years: 2005, 2006
// Subjects: English, Mathematics, Government, Economics, Commerce

// --- ENGLISH ---
import unibenMgtEnglish2005 from "./english/english2005"
import unibenMgtEnglish2006 from "./english/english2006"

// --- MATHEMATICS ---
import unibenMgtMaths2005 from "./mathematics/maths2005"
import unibenMgtMaths2006 from "./mathematics/maths2006"

// --- GOVERNMENT ---
import unibenMgtGovt2005 from "./government/govt2005"
import unibenMgtGovt2006 from "./government/govt2006"

// --- ECONOMICS ---
import unibenMgtEcon2005 from "./economics/econ2005"
import unibenMgtEcon2006 from "./economics/econ2006"

// --- COMMERCE ---
import unibenMgtCommerce2005 from "./commerce/commerce2005"

const unibenMgtQuestions = [
  ...unibenMgtEnglish2005, ...unibenMgtEnglish2006,
  ...unibenMgtMaths2005, ...unibenMgtMaths2006,
  ...unibenMgtGovt2005, ...unibenMgtGovt2006,
  ...unibenMgtEcon2005, ...unibenMgtEcon2006,
  ...unibenMgtCommerce2005,
]

export default unibenMgtQuestions
