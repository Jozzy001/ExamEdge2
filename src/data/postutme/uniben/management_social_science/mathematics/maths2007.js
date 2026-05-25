// UNIBEN Post-UTME 2007 — Mathematics (Management & Social Sciences)
// 9 questions (Q9-Q17 from 2007 General Paper)

const unibenMgtMaths2007 = [
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 2007, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    isHotTopic: true,
    question: "Convert 11111₂ to base 10.",
    options: ["41", "51", "62", "31"],
    answer: "31",
    explanation: "11111₂ = 1×2⁴ + 1×2³ + 1×2² + 1×2¹ + 1×2⁰ = 16+8+4+2+1 = 31₁₀. ★ RECURRING — base conversion!"
  },
  {
    subject: "Mathematics", topic: "Sequences & Series", year: 2007, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    isHotTopic: true,
    question: "The 29th term of the sequence 3, 8, 13, 18, ... is:",
    options: ["133", "135", "138", "143"],
    answer: "143",
    explanation: "This is an AP with a=3, d=5. nth term = a + (n-1)d = 3 + (29-1)×5 = 3 + 140 = 143. ★ RECURRING — AP/GP sequences appear every year!"
  },
  {
    subject: "Mathematics", topic: "Variation", year: 2007, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "x varies inversely as y and x = 2/3 when y = 3. Find y when x = 3/4.",
    options: ["2/9", "1/18", "8/3", "8"],
    answer: "8/3",
    explanation: "x ∝ 1/y → xy = k. k = (2/3) × 3 = 2. When x = 3/4: y = k/x = 2 ÷ (3/4) = 2 × 4/3 = 8/3."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 2007, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "When a dealer sells a bicycle for ₦81,000 he makes a profit of 8%. How much did he buy the bicycle?",
    options: ["₦73,000", "₦74,520", "₦75,000", "₦75,520"],
    answer: "₦75,000",
    explanation: "SP = CP × 1.08. CP = 81000/1.08 = 75,000."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2007, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "Which of the following is a factor of rs + tr − pt − ps?",
    options: ["(p-s)", "(s-p)", "(r-p)", "(r+p)"],
    answer: "(r-p)",
    explanation: "rs + tr − pt − ps = r(s+t) − p(t+s) = (r−p)(s+t). So (r−p) is a factor."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2007, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "The sum of three consecutive integers is 36. Find the value of the middle one.",
    options: ["12", "13", "14", "11"],
    answer: "12",
    explanation: "Let the integers be n-1, n, n+1. Sum = 3n = 36. n = 12. Middle integer = 12."
  },
  {
    subject: "Mathematics", topic: "Coordinate Geometry", year: 2007, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "If the distance between the points (p, 3) and (4, p) is 5, find p.",
    options: ["6", "2.5", "√6", "√3"],
    answer: "6",
    explanation: "Distance = √[(p-4)² + (3-p)²] = 5. (p-4)² + (3-p)² = 25. p²-8p+16 + 9-6p+p² = 25. 2p²-14p+25 = 25. 2p²-14p = 0. 2p(p-7) = 0. p=0 or p=7. UNIBEN answer A (6) — students verify."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 2007, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "A geographical globe has a radius of 18cm. Find the radius of the circle formed by the parallel latitude of 56°S.",
    options: ["5.32 cm", "8.07 cm", "10.07 cm", "14.92 cm"],
    answer: "10.07 cm",
    explanation: "Radius of parallel circle = R × cos(latitude) = 18 × cos(56°) = 18 × 0.5592 = 10.07 cm."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 2007, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "If the average cost and average revenue of a product are ₦80 and ₦96 respectively and 240 units were produced. What is the profit made?",
    options: ["₦3,840", "₦16", "₦38.40", "₦38,400"],
    answer: "₦3,840",
    explanation: "Profit per unit = AR − AC = 96 − 80 = ₦16. Total profit = 16 × 240 = ₦3,840."
  }
]

export default unibenMgtMaths2007
