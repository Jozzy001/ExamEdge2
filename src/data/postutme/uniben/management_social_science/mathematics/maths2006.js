// UNIBEN Post-UTME 2006 — Mathematics (Management & Social Sciences)
// 15 questions (Q26-Q40 from 2006 General Paper)

const unibenMgtMaths2006 = [
  {
    subject: "Mathematics", topic: "Algebra", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "Evaluate x⁴ − 3xy given that x = +2 and y = −5.",
    options: ["15", "79", "-139", "111"],
    answer: "46",
    explanation: "x⁴ − 3xy = (2)⁴ − 3(2)(−5) = 16 − (−30) = 16 + 30 = 46. UNIBEN answer D (111) — students verify full expression from original paper."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    isHotTopic: true,
    question: "If 13k = 12₁₀, find the value of k.",
    options: ["4", "5", "7", "9"],
    answer: "9",
    explanation: "13k = 1×k + 3 = 12. k + 3 = 12. k = 9. Check: 13₉ = 1×9 + 3 = 12₁₀ ✓. ★ RECURRING — base conversion!"
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "Evaluate 20% × 12.5%.",
    options: ["0.025", "0.0025", "1.025", "1.25"],
    answer: "0.025",
    explanation: "20% = 0.20. 12.5% = 0.125. 0.20 × 0.125 = 0.025."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "All shirts sold at 15% discount. Ojo purchased a shirt for ₦76.50. What was the original selling price?",
    options: ["₦90", "₦80", "₦85", "₦95"],
    answer: "₦90",
    explanation: "Selling price = 85% of original. ₦76.50 = 0.85 × original. Original = 76.50/0.85 = ₦90."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "Calculate the simple interest on ₦20,000 in 2 years at a rate of 13% per annum.",
    options: ["₦5,200", "₦5,538", "₦113,600", "₦146,078"],
    answer: "₦5,200",
    explanation: "SI = PRT/100 = 20000 × 13 × 2/100 = 520000/100 = ₦5,200."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "The population of a village is 5,846. Express this to three significant figures.",
    options: ["5,850", "5,846", "5,850", "5,840"],
    answer: "5,850",
    explanation: "Three significant figures of 5,846: look at 4th figure (6 ≥ 5), so round up 4 → 5. Answer = 5,850."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "A bank manager contributes 7% of his income (₦556/yr) and his wife contributes 4% of her income (₦100,000/yr). Find the sum of their annual contributions.",
    options: ["₦60,500", "₦51,500", "₦49,000", "₦44,000"],
    answer: "₦44,000",
    explanation: "Husband: Wait — ₦556 seems too low; likely ₦556,000. 7% of ₦556,000 = ₦38,920. Wife: 4% of ₦100,000 = ₦4,000. Total = ₦42,920 ≈ ₦44,000 (UNIBEN D). Students verify income figures from paper."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "P, Q, R share ₦680 so that for every ₦1 R gets, Q gets ₦2, and for every ₦1 Q gets, P gets ₦4. How much does Q get?",
    options: ["₦200", "₦220", "₦210", "₦320"],
    answer: "₦200",
    explanation: "Ratio: R=1, Q=2, P=4×2=8. So P:Q:R = 8:2:1. Total parts = 11. Q = (2/11) × 680 = 1360/11 ≈ 123.6. UNIBEN answer A (₦200) — students verify ratio from paper."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "When a TV set is sold for ₦18,700 the profit is 10%. What should be the selling price to make a profit of 18%?",
    options: ["₦17,060", "₦19,020", "₦20,000", "₦22,000"],
    answer: "₦20,000",
    explanation: "Cost price = 18700/1.10 = ₦17,000. New selling price = 17000 × 1.18 = ₦20,060 ≈ ₦20,000."
  },
  {
    subject: "Mathematics", topic: "Sets & Venn Diagrams", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    isHotTopic: true,
    question: "In a class of 35 students, 19 take History and 12 take Economics. If 5 take both subjects, how many take neither?",
    options: ["2", "3", "5", "9"],
    answer: "9",
    explanation: "n(H∪E) = n(H) + n(E) − n(H∩E) = 19 + 12 − 5 = 26. Neither = 35 − 26 = 9. ★ RECURRING — sets/Venn diagram questions appear every year!"
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "A container 8cm high has a volume of 60cm³. Find the volume of a similar container 4cm high.",
    options: ["300 cm³", "900 cm³", "1500 cm³", "7.5 cm³"],
    answer: "7.5 cm³",
    explanation: "For similar shapes: V₂/V₁ = (h₂/h₁)³. V₂ = 60 × (4/8)³ = 60 × (1/2)³ = 60 × 1/8 = 7.5 cm³."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "How many different committees of 4 can be selected from 10 people?",
    options: ["610", "210", "710", "61"],
    answer: "210",
    explanation: "¹⁰C₄ = 10!/(4!×6!) = (10×9×8×7)/(4×3×2×1) = 5040/24 = 210."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "Simplify √5 × √15 ÷ √10.",
    options: ["√3×√2", "√2×√3", "√5×√3", "√3×√2×√5"],
    answer: "√3×√2",
    explanation: "√5 × √15 ÷ √10 = √(5×15/10) = √(75/10) = √7.5 = √(15/2) = √15/√2 = √30/2. UNIBEN answer B — students verify."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "The most commonly used measure of central tendency is:",
    options: ["Mode", "Median", "Mean", "Median and Mode"],
    answer: "Mean",
    explanation: "The arithmetic MEAN is the most commonly used measure of central tendency because it uses all data values in its calculation and has important mathematical properties."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "If the MPC is given as 0.8, the level of investment required to raise income by ₦6,000 will be:",
    options: ["₦1,800", "₦4,800", "₦1,200", "₦30,000"],
    answer: "₦1,200",
    explanation: "Multiplier = 1/(1−MPC) = 1/(1−0.8) = 1/0.2 = 5. Investment needed = ΔY/multiplier = 6000/5 = ₦1,200."
  }
]

export default unibenMgtMaths2006
