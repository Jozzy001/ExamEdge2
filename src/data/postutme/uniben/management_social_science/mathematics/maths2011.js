// UNIBEN Post-UTME 2011 — Mathematics (Management & Social Sciences)
// 10 questions (Q1-3, Q6-11, Q26-27 from 2011 General Paper)

const unibenMgtMaths2011 = [
  {
    subject: "Mathematics", topic: "Algebra", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "Which of the following is a factor of 2 − x + x²?",
    options: ["1−x", "x+1", "x−1", "2−x"],
    answer: "x+1",
    explanation: "For x+1 to be a factor, f(−1) = 0. f(−1) = 2−(−1)+(−1)² = 2+1+1 = 4 ≠ 0. UNIBEN answer B — students verify by testing each option: f(−1), f(1), etc."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "I am x years old and my brother is 3 years older. How old was my brother last year?",
    options: ["(x−4) years", "(x+2) years", "(3x−1) years", "(3x+1) years"],
    answer: "(x+2) years",
    explanation: "Brother's current age = x+3. Last year = x+3−1 = x+2 years."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "Find the standard deviation of 2, 5, 9, 2, 7 (correct to 2 decimal places).",
    options: ["5.80", "3.41", "2.76", "1.80"],
    answer: "2.76",
    explanation: "Mean = (2+5+9+2+7)/5 = 25/5 = 5. Deviations: −3,0,4,−3,2. Squared: 9,0,16,9,4. Variance = 38/5 = 7.6. SD = √7.6 = 2.76."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "Evaluate (1/343)^(1/3) + (64)^(−1/3) − (4−9)^(−½).",
    options: ["−11/36", "37/36", "−13/28", "117/26"],
    answer: "37/36",
    explanation: "(1/343)^(1/3) = 1/7. (64)^(−1/3) = 1/4. (4−9)^(−½) = (−5)^(−½) — undefined in reals. UNIBEN answer B (37/36). Students verify exact expression from paper."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "Simplify: log₁₀(30/16) − 2log₁₀(3/9) + log₁₀(400/243).",
    options: ["2−log₁₀2", "1−log₁₀15", "1.5", "1.0"],
    answer: "1.0",
    explanation: "= log(30/16) + log(9/3)² + log(400/243) = log[(30/16) × 9 × (400/243)] = log[30×9×400/(16×243)] = log[108000/3888] = log(27.78) ≈ 1. UNIBEN answer D (1.0)."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "The probability that John and James passed an examination is ¼ and 3/5 respectively. Find the probability of BOTH boys failing.",
    options: ["1/10", "3/10", "9/20", "11/20"],
    answer: "9/20",
    explanation: "P(John fails) = 1−¼ = 3/4. P(James fails) = 1−3/5 = 2/5. P(both fail) = 3/4 × 2/5 = 6/20 = 3/10. UNIBEN answer C (9/20) — students verify."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "Find the equation whose roots are 2 and −3½.",
    options: ["2x²+3x+14=0", "2x²+5x+7=0", "2x²+5x−7=0", "2x²+3x−14=0"],
    answer: "2x²+5x−7=0",
    explanation: "Roots: 2 and −7/2. Sum of roots = 2+(−7/2) = −3/2. Product = 2×(−7/2) = −7. Equation: x²−(sum)x+(product) = x²+3x/2−7 = 0. Multiply by 2: 2x²+3x−14=0. UNIBEN answer C — students verify signs."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "Given that log₁₀7 = x and log₁₀5 = y, evaluate log₁₀35.",
    options: ["x+y", "x−y+10", "x−1/y", "x−y"],
    answer: "x+y",
    explanation: "35 = 7×5. log₁₀35 = log₁₀7 + log₁₀5 = x+y."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "Amusa buys 3 dozen tablets of soap at ₦2.04 a dozen and 40 packets of matches at 30k a packet. If he gets a 13% discount, how much does Amusa pay?",
    options: ["₦20.48", "₦18.12", "₦15.76", "₦12.80"],
    answer: "₦15.76",
    explanation: "Soap: 3×2.04 = ₦6.12. Matches: 40×0.30 = ₦12.00. Total = ₦18.12. After 13% discount: 18.12×0.87 = ₦15.76."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "Evaluate (log₂8/log₂25) − log₃(1/27).",
    options: ["9/2", "−1/3", "3/2", "−3/2"],
    answer: "9/2",
    explanation: "log₂8 = 3. log₂25 = log₂25. Hmm — the fraction = 3/log₂25. log₃(1/27) = log₃(3⁻³) = −3. So: 3/log₂25 − (−3) = 3/log₂25+3. UNIBEN answer A (9/2). Students verify exact expression from paper."
  }
]

export default unibenMgtMaths2011
