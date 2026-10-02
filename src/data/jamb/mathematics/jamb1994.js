// JAMB 1994 Mathematics Past Questions

// Fully flattened - standalone objects with topics, answers, and detailed explanations.
// Audited for mathematical correctness, answer matching, transcription issues, and budget-Android display safety.

// Strictly skipped questions containing complex geometric diagrams, coordinate graphs, or custom data tables.

const mathematicsJamb1994 = [

  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1994, exam: "JAMB",
    question: "Evaluate: 1/3 ÷ [5/7 (9/10 - 1 + 3/4)]",
    options: ["28/39", "39/28", "13/84", "84/13"],
    answer: "28/39",
    explanation: "First evaluate inside the bracket: 9/10 - 1 + 3/4 = 18/20 - 20/20 + 15/20 = 13/20. Next, multiply by 5/7: (5/7) × (13/20) = 13/28. Finally, 1/3 ÷ 13/28 = 1/3 × 28/13 = 28/39."
  },

  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1994, exam: "JAMB",
    question: "Evaluate: (0.36 × 5.4 × 0.63)/(4.2 × 9.0 × 2.4) correct to 2 significant figures.",
    options: ["0.013", "0.014", "0.13", "0.14"],
    answer: "0.014",
    explanation: "The numerator is 1.22472 and the denominator is 90.72. Therefore the value is approximately 0.0135, which rounds to 0.014 correct to 2 significant figures."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1994, exam: "JAMB",
    question: "Evaluate: (log_3 18 - log_3 2)/log_5 0.04",
    options: ["1", "-1", "2/3", "-2/3"],
    answer: "-1",
    explanation: "The numerator is log_3(18/2) = log_3 9 = 2. Also, 0.04 = 1/25 = 5^(-2), so log_5 0.04 = -2. Therefore the value is 2/(-2) = -1."
  },

  // CHECK SOURCE: 8x^(-2) = 2/25 gives x^2 = 100, so both x = 10 and x = -10 satisfy the equation.
  // The supplied options contain only 10. The original paper should be checked to see whether x was
  // intended to be positive or whether an option was lost during transcription.
  {
    subject: "Mathematics", topic: "Algebra", year: 1994, exam: "JAMB",
    question: "Without using tables, solve the equation: 8x^(-2) = 2/25",
    options: ["4", "6", "8", "10"],
    answer: "10",
    explanation: "Since x^(-2) = 1/x^2, the equation becomes 8/x^2 = 2/25. Cross-multiplying gives 200 = 2x^2, so x^2 = 100. Hence x = ±10. The supplied options contain 10 only."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1994, exam: "JAMB",
    question: "Simplify: √48 - 9/√3 + √75",
    options: ["5√3", "6√3", "8√3", "18√3"],
    answer: "6√3",
    explanation: "√48 = 4√3, 9/√3 = 3√3, and √75 = 5√3. Therefore 4√3 - 3√3 + 5√3 = 6√3."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1994, exam: "JAMB",
    question: "In a science class of 42 students, each offers at least one of Mathematics and Physics. If 22 students offer Physics and 28 students offer Mathematics, find how many students offer Physics only.",
    options: ["6", "8", "12", "14"],
    answer: "14",
    explanation: "Let x be the number offering both subjects. By inclusion-exclusion, 42 = 22 + 28 - x, so x = 8. Therefore the number offering Physics only is 22 - 8 = 14."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1994, exam: "JAMB",
    question: "Given that for sets A and B in a universal set E, A ⊂ B, then A ∩ (A ∩ B)' is",
    options: ["A", "Ø", "B", "E"],
    answer: "Ø",
    explanation: "Since A ⊂ B, A ∩ B = A. Therefore (A ∩ B)' = A', and A ∩ A' is the empty set, Ø."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1994, exam: "JAMB",
    question: "Solve for x if 25^x + 3(5^x) = 4.",
    options: ["1 or -4", "1", "0", "-4 or 0"],
    answer: "0",
    explanation: "Let y = 5^x. Then 25^x = y^2, so y^2 + 3y - 4 = 0 = (y + 4)(y - 1). Since 5^x is positive, y = -4 is impossible. Thus y = 1, so 5^x = 1 = 5^0 and x = 0."
  },

  /*
  Removed: expanding and factoring gives 3(m^2 - u^2)/[5(m^2 - u^2)] = 3/5,
  but 3/5 is not among the supplied options. The original paper/source should be checked
  because the expression or one of the options was likely transcribed incorrectly.

  {
    subject: "Mathematics", topic: "Algebra", year: 1994, exam: "JAMB",
    question: "Simplify the algebraic fraction expression: [(2m - u)^2 - (m - 2u)^2]/(5m^2 - 5u^2)",
    options: ["3/4", "(2m - u)/(5m + u)", "2/5", "(m - 2u)/(m + 5u)"],
    answer: "3/4",
    explanation: "The numerator is 3(m^2 - u^2) and the denominator is 5(m^2 - u^2), giving 3/5."
  },
  */

  {
    subject: "Mathematics", topic: "Algebra", year: 1994, exam: "JAMB",
    question: "Factorize completely: a^2x - b^2y - b^2x + a^2y",
    options: ["(a - b)(x + y)", "(y - x)(a - b)(a + b)", "(x - y)(a - b)(a + b)", "(x + y)(a - b)(a + b)"],
    answer: "(x + y)(a - b)(a + b)",
    explanation: "Group the terms: x(a^2 - b^2) + y(a^2 - b^2) = (x + y)(a^2 - b^2). Using the difference of two squares gives (x + y)(a - b)(a + b)."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1994, exam: "JAMB",
    question: "Find the values of p and q such that (x - 1) and (x - 3) are factors of px^3 + qx^2 + 11x - 6.",
    options: ["-1, -6", "1, 6", "1, -6", "6, -1"],
    answer: "1, -6",
    explanation: "By the Factor Theorem, substituting x = 1 gives p + q + 11 - 6 = 0, so p + q = -5. Substituting x = 3 gives 27p + 9q + 33 - 6 = 0, so 3p + q = -3. Subtracting gives 2p = 2, hence p = 1. Then q = -6."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1994, exam: "JAMB",
    question: "If a = 1, b = 3, solve for x in the equation: a/(a - x) = b/(x - b)",
    options: ["4/3", "2/3", "3/2", "3/4"],
    answer: "3/2",
    explanation: "Substituting a = 1 and b = 3 gives 1/(1 - x) = 3/(x - 3). Cross-multiplying gives x - 3 = 3(1 - x), so 4x = 6 and x = 3/2."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1994, exam: "JAMB",
    question: "Solve for r in the following equation: 1/(r - 1) + 2/(r + 1) = 3/r",
    options: ["3", "4", "5", "6"],
    answer: "3",
    explanation: "Combining the left side gives [r + 1 + 2(r - 1)]/(r^2 - 1) = (3r - 1)/(r^2 - 1). Equating this to 3/r gives r(3r - 1) = 3(r^2 - 1). Thus 3r^2 - r = 3r^2 - 3, so r = 3."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1994, exam: "JAMB",
    question: "Find P if (x - 3)/[(1 - x)(x + 2)] = P/(1 - x) + Q/(x + 2)",
    options: ["-2/3", "5/3", "2/3", "9/2"],
    answer: "-2/3",
    explanation: "Multiplying through by (1 - x)(x + 2) gives x - 3 = P(x + 2) + Q(1 - x). Set x = 1 to eliminate Q: -2 = 3P, so P = -2/3."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1994, exam: "JAMB",
    question: "Find the range of values of x for which 1/x > 2 is true.",
    options: ["x < 1/2", "x < 0 or x > 1/2", "0 < x < 1/2", "1 < x < 2"],
    answer: "0 < x < 1/2",
    explanation: "Since 1/x > 2 > 0, x must be positive. Multiplying by positive x gives 1 > 2x, so x < 1/2. Therefore 0 < x < 1/2."
  }

];

export default mathematicsJamb1994;