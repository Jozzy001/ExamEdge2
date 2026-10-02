// JAMB 1995 Mathematics Past Questions

// Fully flattened - standalone objects with topics, answers, and detailed explanations.
// Audited for mathematical correctness, answer matching, transcription issues, and budget-Android display safety.

// Strictly skipped questions containing complex geometric diagrams, coordinate graphs, or custom data tables.

const mathematicsJamb1995 = [

  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1995, exam: "JAMB",
    question: "Convert 3.1415926 to 5 decimal places.",
    options: ["3.14160", "3.14159", "0.31415", "3.14200"],
    answer: "3.14159",
    explanation: "The sixth decimal digit of 3.1415926 is 2, so the fifth decimal digit is not rounded up. Therefore the answer is 3.14159."
  },

  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1995, exam: "JAMB",
    question: "The length of a notebook, 15 cm, was measured as 16.8 cm. Calculate the percentage error to 2 significant figures.",
    options: ["12.00%", "11.00%", "10.71%", "0.12%"],
    answer: "12.00%",
    explanation: "Error = 16.8 - 15 = 1.8 cm. Percentage error = (1.8/15) × 100 = 12%. To 2 significant figures, this is 12%."
  },

  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1995, exam: "JAMB",
    question: "A worker's present salary is ₦24,000 per annum. His annual increment is 10% of his basic salary. What would be his annual salary at the beginning of the third year?",
    options: ["₦28,800", "₦29,040", "₦31,200", "₦31,944"],
    answer: "₦28,800",
    explanation: "The annual increment is 10% of ₦24,000, which is ₦2,400. Beginning of the second year: ₦24,000 + ₦2,400 = ₦26,400. Beginning of the third year: ₦26,400 + ₦2,400 = ₦28,800."
  },

  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1995, exam: "JAMB",
    question: "Express the product of 0.0014 and 0.011 in standard form.",
    options: ["1.54 × 10^(-2)", "1.54 × 10^(-3)", "1.54 × 10^(-4)", "1.54 × 10^(-5)"],
    answer: "1.54 × 10^(-5)",
    explanation: "0.0014 = 1.4 × 10^(-3) and 0.011 = 1.1 × 10^(-2). Therefore their product is 1.54 × 10^(-5)."
  },

  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1995, exam: "JAMB",
    question: "Evaluate: [81^(3/4) - 27^(1/3)]/(3 × 2^3)",
    options: ["27", "1", "1/3", "1/8"],
    answer: "1",
    explanation: "81^(3/4) = (3^4)^(3/4) = 27 and 27^(1/3) = 3. Thus the numerator is 24. The denominator is 3 × 8 = 24, so the value is 1."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1995, exam: "JAMB",
    question: "Find the value of (16)^(3/2) + log_10 0.0001 + log_2 32.",
    options: ["0.065", "0.650", "6.500", "65.00"],
    answer: "65.00",
    explanation: "(16)^(3/2) = 64, log_10 0.0001 = -4, and log_2 32 = 5. Therefore 64 - 4 + 5 = 65."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1995, exam: "JAMB",
    question: "Simplify: (√12 - √3)/(√12 + √3)",
    options: ["1/3", "0", "9/15", "1"],
    answer: "1/3",
    explanation: "Since √12 = 2√3, the expression becomes (2√3 - √3)/(2√3 + √3) = √3/(3√3) = 1/3."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1995, exam: "JAMB",
    question: "In a survey, it was observed that 20 students read newspapers and 35 read novels. If 40 of the students read either newspapers or novels, what is the number of students who read both newspapers and novels?",
    options: ["15", "20", "35", "55"],
    answer: "15",
    explanation: "Using the union formula, number reading either = number reading newspapers + number reading novels - number reading both. Therefore 40 = 20 + 35 - number reading both, giving 15."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1995, exam: "JAMB",
    question: "If S = {x : x^2 = 9, x > 4}, then S is equal to",
    options: ["0", "{0}", "empty set", "{empty set}"],
    answer: "empty set",
    explanation: "x^2 = 9 gives x = 3 or x = -3. Neither value is greater than 4. Therefore S has no elements and is the empty set."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1995, exam: "JAMB",
    question: "If x - 1 and x + 1 are both factors of the equation x^3 + px^2 + qx + 6 = 0, evaluate p and q.",
    options: ["-6, -1", "6, 1", "-1, -6", "6, -6"],
    answer: "-6, -1",
    explanation: "For x = 1, 1 + p + q + 6 = 0, so p + q = -7. For x = -1, -1 + p - q + 6 = 0, so p - q = -5. Adding gives 2p = -12, so p = -6 and q = -1."
  },

  // CHECK SOURCE: Options 1 and 4 were identical in the supplied data.
  // The factorization is certain, but the intended fourth distractor cannot be recovered with certainty.
  // The fourth option below is a likely distractor based on changing the sign of the first factor.

  {
    subject: "Mathematics", topic: "Algebra", year: 1995, exam: "JAMB",
    question: "Factorize completely the expression: abx^2 + 6y - 3ax - 2byx.",
    options: ["(ax - 2y)(bx - 3)", "(bx + 3)(2y - ax)", "(bx + 3)(ax - 2y)", "(ax + 2y)(bx - 3)"],
    answer: "(ax - 2y)(bx - 3)",
    explanation: "Group the terms: abx^2 - 3ax - 2byx + 6y = ax(bx - 3) - 2y(bx - 3). Therefore the expression factorizes to (ax - 2y)(bx - 3)."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1995, exam: "JAMB",
    question: "Solve the following inequality: (x - 3)(x - 4) ≤ 0.",
    options: ["3 ≤ x ≤ 4", "3 < x < 4", "3 ≤ x < 4", "3 < x ≤ 4"],
    answer: "3 ≤ x ≤ 4",
    explanation: "The roots are x = 3 and x = 4. The product is less than or equal to zero between and including the roots. Therefore 3 ≤ x ≤ 4."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1995, exam: "JAMB",
    question: "The 4th term of an A.P. is 13 while the 10th term is 31. Find the 31st term.",
    options: ["175", "85", "64", "94"],
    answer: "94",
    explanation: "T_4 = a + 3d = 13 and T_10 = a + 9d = 31. Subtracting gives 6d = 18, so d = 3. Hence a = 4 and T_31 = a + 30d = 4 + 90 = 94."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1995, exam: "JAMB",
    question: "Simplify: (x^2 - 1)/(x^3 + 2x^2 - x - 2)",
    options: ["1/(x + 2)", "(x - 1)/(x + 1)", "(x - 1)/(x + 2)", "1/(x - 2)"],
    answer: "1/(x + 2)",
    explanation: "The denominator factors as x^2(x + 2) - 1(x + 2) = (x^2 - 1)(x + 2). Cancelling x^2 - 1 gives 1/(x + 2), subject to the original restrictions x ≠ 1, -1, -2."
  },

  /*
  Removed: The stated expression decomposes as -9/(x - 2) + 14/(x - 3),
  but none of the supplied options matches. The original paper/source should be checked
  because the expression or options were likely transcribed incorrectly.

  {
    subject: "Mathematics", topic: "Algebra", year: 1995, exam: "JAMB",
    question: "Express (5x - 1)/[(x - 2)(x - 3)] in partial fractions.",
    options: ["2/(x - 2) - 3/(x - 3)", "2/(x - 2) + 3/(x - 3)", "2/(x - 3) - 3/(x - 2)", "5/(x - 3) + 4/(x - 2)"],
    answer: "2/(x - 3) - 3/(x - 2)",
    explanation: "Let the expression be A/(x - 2) + B/(x - 3). Then 5x - 1 = A(x - 3) + B(x - 2). Setting x = 2 gives A = -9; setting x = 3 gives B = 14. Thus the correct decomposition is -9/(x - 2) + 14/(x - 3)."
  },
  */

  {
    subject: "Mathematics", topic: "Algebra", year: 1995, exam: "JAMB",
    question: "Which of the following binary operations is commutative in the set of integers?",
    options: ["a * b = a + 2b", "a * b = a + b - ab", "a * b = a^2 + b", "a * b = a(b + 1)/2"],
    answer: "a * b = a + b - ab",
    explanation: "For a commutative operation, a * b must equal b * a. For a * b = a + b - ab, reversing a and b gives b + a - ba, which is equal to a + b - ab. Thus this operation is commutative."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1995, exam: "JAMB",
    question: "If a * b = +√(ab), evaluate 2 * (12 * 27).",
    options: ["12", "9", "6", "2"],
    answer: "6",
    explanation: "First, 12 * 27 = √(12 × 27) = √324 = 18. Then 2 * 18 = √(2 × 18) = √36 = 6."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1995, exam: "JAMB",
    question: "Find the sum to infinity of the following sequence: 1, 9/10, (9/10)^2, (9/10)^3, ...",
    options: ["1/10", "9/10", "10/9", "10"],
    answer: "10",
    explanation: "This is an infinite geometric progression with first term a = 1 and common ratio r = 9/10. Therefore the sum to infinity is a/(1 - r) = 1/(1 - 9/10) = 10."
  }

];

export default mathematicsJamb1995;