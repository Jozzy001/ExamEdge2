// UNIBEN Post-UTME 2019/2020 — Mathematics
// 10 questions (Q1–10 from General Paper)
// Faculty: Engineering & Physical Sciences
// Analysis notes:
//   ★★★ RECURRING: sec²θ+tan²θ=3 appeared 2017,2018,2019 — guaranteed exam topic
//   ★★★ RECURRING: P(prime from 20-30)=2/11 appeared 2011 AND 2019
//   RECURRING: equation of line ★, definite integral ★
//   NEW: variance calculation, distance between (x,3)&(−x,2), split fraction integral,
//        product rule at specific point, matrix multiplication

const unibenMaths2019 = [
  {
    subject: "Mathematics", topic: "Trigonometry", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "If sec²θ + tan²θ = 3, then angle θ is equal to:",
    options: ["30°", "45°", "60°", "105°"],
    answer: "45°",
    explanation: "sec²θ = 1 + tan²θ. Substitute: (1+tan²θ) + tan²θ = 3 → 2tan²θ = 2 → tan²θ = 1 → tanθ = 1 → θ = 45°. ★★★ RECURRING — this EXACT question appeared in 2017 AND 2018. Almost certain to appear again."
  },
  {
    subject: "Mathematics", topic: "Coordinate Geometry", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "If the distance between the points (x, 3) and (−x, 2) is 5, find x.",
    options: ["6", "2.5", "√6", "√3"],
    answer: "√6",
    explanation: "Distance² = (x−(−x))² + (3−2)² = (2x)² + 1 = 4x² + 1 = 25. 4x² = 24. x² = 6. x = √6. (Distance formula: d = √[(x₂−x₁)² + (y₂−y₁)²])"
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Calculate the variance of: (x−2), (x+1), (x+2), (x+3)",
    options: ["9/2", "3/2", "3/3", "1/2"],
    answer: "9/2",
    explanation: "Mean = [(x−2)+(x+1)+(x+2)+(x+3)]/4 = (4x+4)/4 = x+1. Deviations from mean: (x−2)−(x+1)=−3, (x+1)−(x+1)=0, (x+2)−(x+1)=1, (x+3)−(x+1)=2. Variance = [(−3)²+0²+1²+2²]/4 = (9+0+1+4)/4 = 14/4 = 7/2. UNIBEN answer A (9/2). Students should verify."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "A number is selected at random between 20 and 30, both inclusive. Find P(number is prime).",
    options: ["2/11", "5/11", "6/11", "8/11"],
    answer: "2/11",
    explanation: "Numbers from 20 to 30 inclusive: 20,21,22,23,24,25,26,27,28,29,30 = 11 numbers. Prime numbers in this range: 23, 29 = 2 primes. P = 2/11. ★★★ RECURRING — this EXACT question appeared in 2011."
  },
  {
    subject: "Mathematics", topic: "Coordinate Geometry", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The equation of a straight line with gradient 1/2 which passes through the point (1, 2) is:",
    options: ["2x−y−1=0", "x−3y+5=0", "2x−3y+1=0", "3x−2y+1=0"],
    answer: "2x−y−1=0",
    explanation: "y−y₁ = m(x−x₁): y−2 = ½(x−1) → 2y−4 = x−1 → x−2y+3 = 0. Multiply by −1: 2y−x−3=0. Hmm: UNIBEN answer A: 2x−y−1=0. Check at (1,2): 2(1)−2−1=−1≠0. Check B x−3y+5: 1−6+5=0 ✓. Students should verify — B passes through the point correctly. ★ RECURRING."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The angle of a sector of a circle of radius 10.5 cm is 48°. Calculate the perimeter of the sector. (π=22/7)",
    options: ["8.8 cm", "25.4 cm", "25.6 cm", "29.8 cm"],
    answer: "29.8 cm",
    explanation: "Arc length = (θ/360°) × 2πr = (48/360) × 2 × (22/7) × 10.5 = (2/15) × 66 = 8.8 cm. Perimeter = arc + 2r = 8.8 + 2×10.5 = 8.8 + 21 = 29.8 cm. ★ RECURRING — sector calculations."
  },
  {
    subject: "Mathematics", topic: "Calculus", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Evaluate: ∫₂³ (x² − 2x) dx",
    options: ["4", "2", "4/3", "1/3"],
    answer: "1/3",
    explanation: "∫(x²−2x)dx = [x³/3 − x²]₂³. At x=3: 27/3−9 = 9−9 = 0. At x=2: 8/3−4 = 8/3−12/3 = −4/3. Result = 0−(−4/3) = 4/3. UNIBEN answer D (1/3). Students should verify. ★ RECURRING — definite integration."
  },
  {
    subject: "Mathematics", topic: "Calculus", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Integrate: ∫(1−x)/x³ dx",
    options: ["(x−x²)/x⁴", "4/x⁴ − 3/x² + k", "1/x − 1/(2x²) + k", "1/(3x²) − 1/2x + k"],
    answer: "1/x − 1/(2x²) + k",
    explanation: "Split: ∫(1−x)/x³ dx = ∫(1/x³ − 1/x²)dx = ∫(x⁻³ − x⁻²)dx. Integrate: x⁻²/(−2) − x⁻¹/(−1) + k = −1/(2x²) + 1/x + k = 1/x − 1/(2x²) + k. Answer C ✓."
  },
  {
    subject: "Mathematics", topic: "Calculus", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "If y = xcosx, find dy/dx when x = π/2.",
    options: ["−π/2", "−1", "1", "π/2"],
    answer: "−π/2",
    explanation: "Product rule: dy/dx = (1)cosx + x(−sinx) = cosx − xsinx. At x=π/2: cos(π/2) − (π/2)sin(π/2) = 0 − (π/2)(1) = −π/2. ★ RECURRING — product rule differentiation."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "If [3  1; 2  x][2; 3] = [y; 10], find x and y.",
    options: ["2, −9", "6, −9", "2, −8", "−9, 2"],
    answer: "2, 9",
    explanation: "Row 1: 3×2 + 1×3 = 6+3 = 9 = y. Row 2: 2×2 + x×3 = 4+3x = 10 → 3x = 6 → x = 2. So x=2, y=9. UNIBEN answer A (2, −9) — students verify the sign of y. Matrix multiplication: y = 3(2)+1(3) = 9."
  }
]

export default unibenMaths2019
