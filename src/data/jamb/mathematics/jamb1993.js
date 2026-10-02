// JAMB 1993 Mathematics Past Questions
// Audited for mathematical correctness, answer matching, OCR/transcription issues, and budget-Android display safety.

// Fully flattened - standalone objects with topics, answers, and detailed explanations.
// Audit result: 13 questions retained; 4 questions commented out pending source-paper verification.
// Strictly skipped questions containing complex geometric diagrams or custom data tables.

const mathematicsJamb1993 = [

  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1993, exam: "JAMB",
    question: "Change 71 (base 10) to base 8.",
    options: ["107 (base 8)", "106 (base 8)", "71 (base 8)", "17 (base 8)"],
    answer: "107 (base 8)",
    explanation: "Divide 71 by 8 successively: 71 ÷ 8 = 8 remainder 7; 8 ÷ 8 = 1 remainder 0; 1 ÷ 8 = 0 remainder 1. Reading the remainders upwards gives 107 (base 8)."
  },

  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1993, exam: "JAMB",
    question: "Evaluate 3524 / 0.05 correct to 3 significant figures.",
    options: ["705", "70000", "70480", "70500"],
    answer: "70500",
    explanation: "3524 / 0.05 = 3524 × 20 = 70480. Rounding 70480 to 3 significant figures gives 70500."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1993, exam: "JAMB",
    question: "If 9^(x - 1/2) = 3^(x^2), find the value of x.",
    options: ["12", "1", "2", "3"],
    answer: "1",
    explanation: "Express both sides in base 3: (3^2)^(x - 1/2) = 3^(x^2), so 3^(2x - 1) = 3^(x^2). Equating exponents gives x^2 - 2x + 1 = 0, so (x - 1)^2 = 0. Hence x = 1."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1993, exam: "JAMB",
    question: "Solve for y in the equation: 10^y × 5^(2y - 2) × 4^(y - 1) = 1.",
    options: ["3/4", "2/3", "1", "5/4"],
    answer: "2/3",
    explanation: "Break down into prime factors: (2 × 5)^y × 5^(2y - 2) × (2^2)^(y - 1) = 1. This gives 2^(3y - 2) × 5^(3y - 2) = 1, so 10^(3y - 2) = 1. Therefore 3y - 2 = 0 and y = 2/3."
  },

  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1993, exam: "JAMB",
    question: "Simplify: 1/(3 - √2) - 1/(3 + √2).",
    options: ["2√2/7", "√2/7", "2√2/3", "4√2/5"],
    answer: "2√2/7",
    explanation: "Use a common denominator: [(3 + √2) - (3 - √2)] / [(3 - √2)(3 + √2)] = 2√2 / (9 - 2) = 2√2/7."
  },

  /*
  Removed: the equation 2 log_3 y + log_3 x^2 = 4 requires x ≠ 0 and y > 0.
  It gives y = 9/|x|, which is not one of the supplied options. The supplied option ±9/x
  is not equivalent because negative y is not allowed by log_3 y.
  The original paper/source should be checked before restoring this question.

  {
    subject: "Mathematics", topic: "Algebra", year: 1993, exam: "JAMB",
    question: "If 2log_3 y + log_3 x^2 = 4, then y is equal to",
    options: ["(4 - log_3 x^2)/2", "4/log_3 x^2", "2/x", "±9/x"],
    answer: "±9/x",
    explanation: "The supplied answer is not valid under the logarithm domain restrictions."
  },
  */

  {
    subject: "Mathematics", topic: "Algebra", year: 1993, exam: "JAMB",
    question: "Solve without using mathematical tables: log_5 62.5 - log_5 0.5.",
    options: ["3", "4", "5", "8"],
    answer: "3",
    explanation: "Apply the quotient law: log_5(62.5/0.5) = log_5 125 = log_5(5^3) = 3."
  },

  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1993, exam: "JAMB",
    question: "If ₦225.00 yields ₦27.00 simple interest in x years at 4% per annum, find x.",
    options: ["3", "4", "12", "27"],
    answer: "3",
    explanation: "I = PRT/100, so 27 = (225 × 4 × x)/100 = 9x. Therefore x = 3 years."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1993, exam: "JAMB",
    question: "If √(x^2 + 9) = x + 1, solve for x.",
    options: ["5", "4", "3", "1"],
    answer: "4",
    explanation: "Square both sides: x^2 + 9 = (x + 1)^2 = x^2 + 2x + 1. Hence 9 = 2x + 1, so x = 4. Checking gives √25 = 5 = 4 + 1."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1993, exam: "JAMB",
    question: "Which of the following is a factor of 15 + 7x - 2x^2?",
    options: ["x - 3", "x + 3", "x - 5", "x + 5"],
    answer: "x - 5",
    explanation: "15 + 7x - 2x^2 = (2x + 3)(5 - x) = -(2x + 3)(x - 5). Thus x - 5 is a factor."
  },

  /*
  Removed: expanding the supplied expression gives 4x + 4 = 4(x + 1),
  but none of the four options equals this expression.
  The original paper/source should be checked; the question or an option was likely transcribed incorrectly.

  {
    subject: "Mathematics", topic: "Algebra", year: 1993, exam: "JAMB",
    question: "Evaluate: (x + 1/x + 1)^2 - (x - 1/x - 1)^2.",
    options: ["4x^2", "4", "(2/x + 2)^2", "4(x + 1/x)"],
    answer: "4(x + 1/x)",
    explanation: "Direct expansion gives 4x + 4, not the supplied answer."
  },
  */

  // CHECK SOURCE: The equations give x = 1 and x = -8, so the supplied option "-1, 8"
  // appears to have both signs/transcription reversed. Replaced it with "-8, 1".
  {
    subject: "Mathematics", topic: "Algebra", year: 1993, exam: "JAMB",
    question: "Solve the following simultaneous equations for values of x: x^2 + y - 5 = 0 and y - 7x + 3 = 0.",
    options: ["-2, 4", "-8, 1", "2, 4", "1, -8"],
    answer: "-8, 1",
    explanation: "From y - 7x + 3 = 0, y = 7x - 3. Substituting into x^2 + y - 5 = 0 gives x^2 + 7x - 8 = 0 = (x + 8)(x - 1). Hence x = -8 or x = 1."
  },

  /*
  Removed: solving (3x - 1)(5x - 4) = (3x - 2)^2 gives x = 0 or x = 5/6.
  Neither value is among the supplied options.
  The original paper/source should be checked before restoring this question.

  {
    subject: "Mathematics", topic: "Algebra", year: 1993, exam: "JAMB",
    question: "Solve the following equation for x: (3x - 1)(5x - 4) = (3x - 2)^2.",
    options: ["1", "-4", "2/11", "4/5"],
    answer: "2/11",
    explanation: "Expansion gives 6x^2 - 5x = 0, so x = 0 or x = 5/6."
  },
  */

  {
    subject: "Mathematics", topic: "Algebra", year: 1993, exam: "JAMB",
    question: "If the function f is defined by f(x + 2) = 2x^2 + 7x - 5, find f(-1).",
    options: ["-10", "4", "-8", "10"],
    answer: "-8",
    explanation: "For f(-1), set x + 2 = -1, giving x = -3. Then f(-1) = 2(-3)^2 + 7(-3) - 5 = 18 - 21 - 5 = -8."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1993, exam: "JAMB",
    question: "Divide the expression x^3 + 7x^2 - x - 7 by -1 + x^2.",
    options: ["-x^3 + 7x^2 - x - 7", "-x^3 - 7x + 7", "x - 7", "x + 7"],
    answer: "x + 7",
    explanation: "Factorize the numerator by grouping: x^2(x + 7) - 1(x + 7) = (x^2 - 1)(x + 7). Dividing by x^2 - 1 leaves x + 7."
  },

  /*
  Removed: simplifying the supplied expression gives
  (q - p - p^2 - q^2)/(pq), which does not match any supplied option.
  The original paper/source should be checked; the expression or options were likely transcribed incorrectly.

  {
    subject: "Mathematics", topic: "Algebra", year: 1993, exam: "JAMB",
    question: "Simplify: 1/p - 1/q - p/q - q/p.",
    options: ["1/(p - q)", "1/pq", "-1/(p + q)", "1/[pq(p - q)]"],
    answer: "1/pq",
    explanation: "Combining the terms over pq gives (q - p - p^2 - q^2)/(pq), not 1/pq."
  },
  */

  {
    subject: "Mathematics", topic: "Algebra", year: 1993, exam: "JAMB",
    question: "Solve the inequality: y^2 - 3y > 18.",
    options: ["-2 < y < 6", "y < -3 or y > 6", "y > -3 or y > 6", "y < -3 or y < 6"],
    answer: "y < -3 or y > 6",
    explanation: "Rearrange to y^2 - 3y - 18 > 0. Factorizing gives (y - 6)(y + 3) > 0. Therefore y < -3 or y > 6."
  }

];

export default mathematicsJamb1993;