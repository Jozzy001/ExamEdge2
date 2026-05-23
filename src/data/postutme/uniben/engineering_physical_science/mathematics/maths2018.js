// UNIBEN Post-UTME 2018/2019 — Mathematics
// 10 questions (Q1–10 from General Paper)
// Faculty: Engineering & Physical Sciences
// Analysis notes:
//   RECURRING: calculus differentiation ★, minimum point ★, integration ★,
//              angle of elevation ★, Venn diagrams ★
//   NEW: father/son simultaneous equation setup, LETTERS permutation,
//        bearings (050°+140°=perpendicular), limit cancellation

const unibenMaths2018 = [
  {
    subject: "Mathematics", topic: "Algebra", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Seven years ago, a father's age was three times his son's. In six years, the son will be half the father's age. Representing present ages as X (father) and Y (son), the two equations are:",
    options: [
      "3Y−X=0, 2Y−X=0",
      "3Y−X=14, X−2Y=6",
      "3Y−X=7, X−2Y=6",
      "3Y−X=14, Y−2X=6"
    ],
    answer: "3Y−X=14, X−2Y=6",
    explanation: "7 years ago: X−7 = 3(Y−7) → X−7 = 3Y−21 → 3Y−X = −14. Hmm, sign: 3(Y−7) = X−7 → 3Y−21 = X−7 → 3Y−X = 14. ✓ In 6 years: Y+6 = ½(X+6) → 2Y+12 = X+6 → X−2Y = 6. ✓ Answer B."
  },
  {
    subject: "Mathematics", topic: "Sets & Venn Diagrams", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "In a class of 42, each student offers at least one of Mathematics and Physics. 22 offer Physics and 28 offer Mathematics. How many offer Physics only?",
    options: ["6", "8", "12", "14"],
    answer: "14",
    explanation: "n(P∩M) = n(P)+n(M)−n(P∪M) = 22+28−42 = 8. Physics only = n(P)−n(P∩M) = 22−8 = 14. ★ RECURRING — Venn diagrams every year."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Twelve men complete a job in 9 days. How many men working at the same rate will complete the job in 6 days?",
    options: ["24", "18", "12", "9"],
    answer: "18",
    explanation: "Total man-days = 12×9 = 108. Men needed = 108/6 = 18. (Inverse proportion: more men, fewer days.)"
  },
  {
    subject: "Mathematics", topic: "Calculus", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Evaluate: lim(x→2) [(x−2)(x²+3x−2)] / (x²−4)",
    options: ["0", "2", "3", "4"],
    answer: "2",
    explanation: "x²−4 = (x+2)(x−2). Cancel (x−2): limit = (x²+3x−2)/(x+2). At x=2: (4+6−2)/4 = 8/4 = 2."
  },
  {
    subject: "Mathematics", topic: "Calculus", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "If y = 2tan3x + cos2x − sin5x, find dy/dx.",
    options: [
      "2sec²3x − sin2x − cos5x",
      "6sec²3x + 2sin2x − 5cos5x",
      "6sec²3x − 2sin2x − cos5x − 5cos5x",
      "6sec²3x − 2sin2x − 5cos5x"
    ],
    answer: "6sec²3x − 2sin2x − 5cos5x",
    explanation: "d/dx(2tan3x) = 2×3sec²3x = 6sec²3x. d/dx(cos2x) = −2sin2x. d/dx(−sin5x) = −5cos5x. Total: 6sec²3x − 2sin2x − 5cos5x. ★ RECURRING — chain rule differentiation."
  },
  {
    subject: "Mathematics", topic: "Calculus", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The minimum point on the curve y = x² − 6x + 5 is at:",
    options: ["(1, 5)", "(2, 3)", "(−3, −4)", "(3, −4)"],
    answer: "(3, −4)",
    explanation: "dy/dx = 2x−6 = 0 → x = 3. y(3) = 9−18+5 = −4. Minimum at (3, −4). ★ RECURRING — quadratic minimum/maximum appeared every year."
  },
  {
    subject: "Mathematics", topic: "Calculus", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Evaluate: ∫₋₁¹ (2x+1)² dx",
    options: ["2/3", "4", "9/2", "14/3"],
    answer: "14/3",
    explanation: "∫(2x+1)²dx = ∫(4x²+4x+1)dx = [4x³/3 + 2x² + x]₋₁¹. At x=1: 4/3+2+1 = 13/3. At x=−1: −4/3+2−1 = −1/3. Total = 13/3−(−1/3) = 14/3. ★ RECURRING — definite integration every year."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "How many arrangements are there of the letters of the word LETTERS?",
    options: ["160", "240", "1,260", "3,000"],
    answer: "1,260",
    explanation: "LETTERS: L, E, T, T, E, R, S = 7 letters. Repeated: T×2, E×2. Arrangements = 7!/(2!×2!) = 5040/4 = 1,260. ★ RECURRING — permutations with repetition."
  },
  {
    subject: "Mathematics", topic: "Trigonometry", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "A girl walks 45 m at bearing 050° from Q to X, then 24 m at bearing 140° from X to Y. How far is she from Q?",
    options: ["65 m", "57 m", "51 m", "21 m"],
    answer: "51 m",
    explanation: "Bearings 050° and 140° differ by 90° — the two legs are perpendicular. Distance QY = √(45²+24²) = √(2025+576) = √2601 = 51 m. (Pythagoras applies since the directions are perpendicular.)"
  },
  {
    subject: "Mathematics", topic: "Trigonometry", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The angle of elevation of the top of a tower from a point 50 m from its foot is 60°. Find the height of the tower.",
    options: ["50√3 m", "80 m", "(80√3)/3 m", "80√3 m"],
    answer: "50√3 m",
    explanation: "tan60° = h/50 → h = 50tan60° = 50√3 m ≈ 86.6 m. ★ RECURRING — angle of elevation appeared every year."
  }
]

export default unibenMaths2018
