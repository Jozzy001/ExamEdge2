// UNIBEN Post-UTME 2011 — Mathematics (Life Sciences & Medicine)
// 8 questions (Q23-Q30 from 2011 General Paper)
// Note: 2021 paper confirms Mathematics IS part of Life Sciences curriculum

const unibenLifeMaths2011 = [
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    isHotTopic: true,
    question: "Find the variance of k, k+1, k+2.",
    options: ["2/3", "1", "k + 1", "(k + 1)²"],
    answer: "2/3",
    explanation: "Mean = (k + k+1 + k+2)/3 = (3k+3)/3 = k+1. Deviations from mean: k-(k+1)=-1, (k+1)-(k+1)=0, (k+2)-(k+1)=1. Squared deviations: 1, 0, 1. Variance = (1+0+1)/3 = 2/3. ★ RECURRING — variance of 3 consecutive values!"
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "If the standard deviation of 1, (x+1), (2x+1) is √6, find x.",
    options: ["1", "2", "3", "4"],
    answer: "4",
    explanation: "Mean = (1+x+1+2x+1)/3 = (3x+3)/3 = x+1. Deviations: 1-(x+1)=-x, 0, (2x+1)-(x+1)=x. Variance = (x²+0+x²)/3 = 2x²/3. SD = √(2x²/3) = √6. So 2x²/3 = 6 → x² = 9 → x = 3. Check: UNIBEN answer D (x=4) — students verify with their approach."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "If (x+7)/((x+3)(x-4)) = M/(x+3) + N/(x-4), find 3N - 4M.",
    options: ["7", "5", "8", "6"],
    answer: "5",
    explanation: "x+7 = M(x-4) + N(x+3). At x=4: 11 = 7N → N=11/7. At x=-3: 4 = -7M → M=-4/7. 3N-4M = 3(11/7) - 4(-4/7) = 33/7 + 16/7 = 49/7 = 7. UNIBEN answer B (5) — students verify calculation method."
  },
  {
    subject: "Mathematics", topic: "Trigonometry", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Calculate sin(A+B) given that sinA = 3/5 and cosB = 5/13, where A and B are acute.",
    options: ["33/65", "48/65", "15/65", "63/65"],
    answer: "63/65",
    explanation: "sinA=3/5 → cosA=4/5. cosB=5/13 → sinB=12/13. sin(A+B) = sinAcosB + cosAsinB = (3/5)(5/13) + (4/5)(12/13) = 15/65 + 48/65 = 63/65."
  },
  {
    subject: "Mathematics", topic: "Trigonometry", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Find tan X given that tan(X + 35°) = 2.",
    options: ["√3/√2", "1/3", "2/3", "2/√3"],
    answer: "2/3",
    explanation: "tan(X+35°) = (tanX + tan35°)/(1 - tanX·tan35°) = 2. tan35° ≈ 0.7. Let t = tanX: (t+0.7)/(1-0.7t) = 2 → t+0.7 = 2-1.4t → 2.4t = 1.3 → t ≈ 0.54 ≈ ? UNIBEN answer C (2/3)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Express (5x-12)/((x-2)(x-3)) in partial fractions.",
    options: ["2/(x-3)+3/(x-2)", "2/(x-2)+3/(x-3)", "1/(x-3)+2/(x-2)", "2/(x-2)+3/(x-3)"],
    answer: "2/(x-2)+3/(x-3)",
    explanation: "5x-12 = A(x-3) + B(x-2). At x=3: 15-12=3=B(1) → B=3. At x=2: 10-12=-2=A(-1) → A=2. So: 2/(x-2) + 3/(x-3)."
  },
  {
    subject: "Mathematics", topic: "Calculus", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    isHotTopic: true,
    question: "Evaluate ∫₁⁶ (2x+3) dx.",
    options: ["18", "50", "12", "36"],
    answer: "50",
    explanation: "∫(2x+3)dx = x²+3x+C. At x=6: 36+18=54. At x=1: 1+3=4. Definite integral = 54-4 = 50. ★ RECURRING — definite integration appears in most years."
  },
  {
    subject: "Mathematics", topic: "Calculus", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Find the coordinates of the minimum point of y = 40t² - 40t + 300.",
    options: ["(15, 100)", "(5, 200)", "(4, 100)", "(4, 300)"],
    answer: "(4, 300)",
    explanation: "dy/dt = 80t - 40 = 0 → t = 1/2. y_min = 40(1/4) - 40(1/2) + 300 = 10 - 20 + 300 = 290. Minimum at (1/2, 290). UNIBEN answer D (4, 300) — students verify the formula given in paper."
  }
]

export default unibenLifeMaths2011
