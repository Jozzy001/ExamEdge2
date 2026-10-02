// JAMB 1997 Mathematics Past Questions
// Fully flattened — audited, with standalone objects, topics, answers, and detailed explanations.
// Strictly skipped questions containing complex geometric diagrams, coordinate graphs, or custom data tables.

const mathematicsJamb1997 = [
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1997, exam: "JAMB",
    question: "If (1P03)_4 = 115_10, find P.",
    options: ["0", "1", "2", "3"],
    answer: "3",
    explanation: "Convert (1P03)_4 to base 10: 1 × 4^3 + P × 4^2 + 0 × 4^1 + 3 × 4^0 = 64 + 16P + 0 + 3 = 67 + 16P. Set this equal to 115: 67 + 16P = 115, so 16P = 48, so P = 3."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1997, exam: "JAMB",
    question: "Evaluate 64.764^2 - 35.236^2 correct to 3 significant figures.",
    options: ["2960", "2950", "2860", "2850"],
    answer: "2950",
    explanation: "Use the difference of two squares: A^2 - B^2 = (A - B)(A + B). Here, (64.764 - 35.236)(64.764 + 35.236) = (29.528)(100) = 2952.8. Rounding to 3 significant figures gives 2950."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1997, exam: "JAMB",
    question: "Find the value of (0.006)^3 + (0.004)^3 in standard form.",
    options: ["2.8 × 10^(-9)", "2.8 × 10^(-8)", "2.8 × 10^(-7)", "2.8 × 10^(-6)"],
    answer: "2.8 × 10^(-7)",
    explanation: "(0.006)^3 = 0.000000216 = 2.16 × 10^(-7). (0.004)^3 = 0.000000064 = 0.64 × 10^(-7). Summing them gives (2.16 + 0.64) × 10^(-7) = 2.8 × 10^(-7)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1997, exam: "JAMB",
    question: "Given that log_a 2 = 0.693 and log_a 3 = 1.097, find log_a 13.5.",
    options: ["1.404", "1.790", "2.598", "2.790"],
    answer: "2.598",
    explanation: "Note that 13.5 = 27/2 = 3^3/2. Thus, log_a 13.5 = log_a(3^3/2) = 3 log_a 3 - log_a 2. Substituting the values: 3(1.097) - 0.693 = 3.291 - 0.693 = 2.598."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1997, exam: "JAMB",
    question: "Simplify: log₂ 96 - 2 log₂ 6",
    options: ["2 - log₂ 3", "3 - log₂ 3", "log₂ 3 - 3", "log₂ 3 - 2"],
    answer: "3 - log₂ 3",
    explanation: "Apply log laws: log₂ 96 - log₂(6^2) = log₂ 96 - log₂ 36 = log₂(96/36) = log₂(8/3) = log₂ 8 - log₂ 3 = 3 - log₂ 3."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1997, exam: "JAMB",
    question: "If 8^(x/2) = [2^(3/8)][4^(3/4)], find x.",
    options: ["3/8", "3/4", "4/5", "5/4"],
    answer: "5/4",
    explanation: "Express everything in base 2: (2^3)^(x/2) = 2^(3/8) × (2^2)^(3/4), so 2^(3x/2) = 2^(3/8) × 2^(6/4) = 2^(3/8 + 6/4) = 2^(15/8). Equating exponents: 3x/2 = 15/8, so x = 5/4."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1997, exam: "JAMB",
    question: "Find the simple interest rate per cent per annum at which ₦1,000 accumulates to ₦1,240 in 3 years.",
    options: ["6%", "8%", "10%", "12%"],
    answer: "8%",
    explanation: "Interest I = 1240 - 1000 = 240. Formula: I = (P × R × T)/100, so 240 = (1000 × R × 3)/100 = 30R. Therefore R = 8%."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1997, exam: "JAMB",
    question: "A survey of 100 students in an institution shows that 80 students speak Hausa and 20 students speak Igbo, while only 9 students speak both languages. How many students speak neither Hausa nor Igbo?",
    options: ["0", "9", "11", "20"],
    answer: "9",
    explanation: "The number who speak at least one language is 80 + 20 - 9 = 91. Therefore the number who speak neither is 100 - 91 = 9."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1997, exam: "JAMB",
    question: "If the function f(x) = x^3 + 2x^2 + qx - 6 is divisible by (x + 1), find q.",
    options: ["-5", "-2", "2", "5"],
    answer: "-5",
    explanation: "By the Remainder Theorem, if f(x) is divisible by (x + 1), then f(-1) = 0. Substituting x = -1: (-1)^3 + 2(-1)^2 + q(-1) - 6 = 0, so -1 + 2 - q - 6 = 0, giving -5 - q = 0 and q = -5."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1997, exam: "JAMB",
    question: "Find the minimum value of x^2 - 3x + 2 for all real values of x.",
    options: ["1/4", "-1/4", "-1/2", "1/2"],
    answer: "-1/4",
    explanation: "The minimum value of a quadratic occurs at x = -b/(2a) = -(-3)/(2 × 1) = 3/2. Substituting x = 3/2: (3/2)^2 - 3(3/2) + 2 = 9/4 - 9/2 + 2 = (9 - 18 + 8)/4 = -1/4."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1997, exam: "JAMB",
    question: "What value of g will make the expression 4x^2 - 18xy + g a perfect square?",
    options: ["9", "9y^2/4", "81y^2", "81y^2/4"],
    answer: "81y^2/4",
    explanation: "For 4x^2 - 18xy + g to be a perfect square, complete the square: (2x - 9y/2)^2 = 4x^2 - 18xy + 81y^2/4. Therefore g = 81y^2/4."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1997, exam: "JAMB",
    question: "Find the value of K if the expression (5 + 2r)/[(r + 1)(r - 2)] expanded in partial fractions is K/(r - 2) + L/(r + 1).",
    options: ["3", "2", "1", "-1"],
    answer: "3",
    explanation: "Equating numerators: 5 + 2r = K(r + 1) + L(r - 2). To find K, set r = 2: 5 + 2(2) = K(2 + 1), so 9 = 3K and K = 3."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1997, exam: "JAMB",
    question: "Find the range of values of x which satisfies the inequality: 12x^2 < x + 1.",
    options: ["-1/4 < x < 1/3", "1/4 < x < 1/3", "-1/3 < x < 1/4", "-1/4 < x < -1/3"],
    answer: "-1/4 < x < 1/3",
    explanation: "Rearrange the inequality: 12x^2 - x - 1 = (4x + 1)(3x - 1), so (4x + 1)(3x - 1) < 0. The roots are x = -1/4 and x = 1/3. Since the expression is strictly less than zero, the solution lies between the roots: -1/4 < x < 1/3."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1997, exam: "JAMB",
    question: "The sum of the first n terms of a series is given by S_n = n^2 - 1. Find the nth term.",
    options: ["4n + 1", "4n - 1", "2n + 1", "2n - 1"],
    answer: "2n - 1",
    explanation: "The nth term T_n = S_n - S_(n-1) = (n^2 - 1) - ((n - 1)^2 - 1) = n^2 - 1 - (n^2 - 2n + 1 - 1) = 2n - 1."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1997, exam: "JAMB",
    question: "The nth term of a sequence is given by 3^(1 - n). Find the sum of the first three terms of the sequence.",
    options: ["1/3", "1", "13/9", "9"],
    answer: "13/9",
    explanation: "T_1 = 3^(1 - 1) = 3^0 = 1. T_2 = 3^(1 - 2) = 3^(-1) = 1/3. T_3 = 3^(1 - 3) = 3^(-2) = 1/9. Sum = 1 + 1/3 + 1/9 = 13/9."
  }
];

export default mathematicsJamb1997;