// JAMB 1999 Mathematics Past Questions
// Fully flattened - audited standalone objects with topics, answers, and detailed explanations.
// Strictly skipped questions containing complex geometric diagrams, coordinate graphs, or custom data tables.

const mathematicsJamb1999 = [
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1999, exam: "JAMB",
    question: "A trader bought 100 oranges at 5 for ₦1.20. 20 oranges got spoilt and the remaining were sold at 4 for ₦1.50. Find the percentage gain or loss.",
    options: ["30% gain", "25% gain", "30% loss", "25% loss"],
    answer: "25% gain",
    explanation: "Cost Price (CP) = (100 / 5) × ₦1.20 = ₦24.00. Remaining oranges = 100 - 20 = 80. Selling Price (SP) = (80 / 4) × ₦1.50 = ₦30.00. Profit = ₦30.00 - ₦24.00 = ₦6.00. Percentage gain = (6 / 24) × 100% = 25% gain."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1999, exam: "JAMB",
    question: "If U = {1,2,3,4,5,6}, P = {3,4,5}, Q = {2,4,6}, and R = {1,2,3,4}, list the elements of (P intersect Q') union R.",
    options: ["{1,2,3,4,5,6}", "{1,2,3,4}", "{1,3,5}", "{1,2,3,4,5}"],
    answer: "{1,2,3,4,5}",
    explanation: "Q' = {1,3,5}. Then P intersect Q' = {3,5}. Finally, {3,5} union {1,2,3,4} = {1,2,3,4,5}."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1999, exam: "JAMB",
    question: "Divide 2434_5 by 42_5, expressing the quotient in base 5.",
    options: ["31_5", "32_5", "34_5", "23_5"],
    answer: "31_5",
    explanation: "2434_5 = 369_10 and 42_5 = 22_10. Dividing gives 369 = 22 × 16 + 17. The quotient 16_10 is 31_5. Therefore the quotient is 31_5, with remainder 17_10 = 32_5."
  },

  /*
  CHECK SOURCE: From the supplied question, log_y(3x) = 5 and log_y(x) = 3 imply log_y(3) = 2, so y^2 = 3 and y = √3 (for a valid real logarithm base). None of the supplied options is √3. Removed pending verification against the paper.
  {
    subject: "Mathematics", topic: "Algebra", year: 1999, exam: "JAMB",
    question: "If log_y x = 3 and log_y 3x = 5, find the value of y.",
    options: ["4", "3", "2", "1"],
    answer: "3",
    explanation: "log_y(3x) = log_y(3) + log_y(x), so log_y(3) = 2. Hence y^2 = 3 and y = √3."
  }
  */

  {
    subject: "Mathematics", topic: "Algebra", year: 1999, exam: "JAMB",
    question: "A group of market women sell at least one of yam, plantain and maize. 12 of them sell maize, 10 sell yam and 14 sell plantain. 5 sell plantain and maize, 4 sell yam and maize, 2 sell yam and plantain only while 3 sell all the three items. How many women are in the group?",
    options: ["25", "19", "18", "17"],
    answer: "25",
    explanation: "The pairwise intersection of yam and plantain is 2 + 3 = 5 because 2 sell those two only and 3 sell all three. Therefore n(M union Y union P) = 12 + 10 + 14 - 5 - 4 - 5 + 3 = 25."
  },

  /*
  CHECK SOURCE: The stated operation a * b = ab + b does not have 0 as a two-sided identity: 0 * b = b, but a * 0 = 0. Also, solving 2 * x = 0 gives x = 0, not the marked -2/3. None of the supplied options is a valid two-sided inverse under the operation as stated. Removed pending verification against the paper.
  {
    subject: "Mathematics", topic: "Algebra", year: 1999, exam: "JAMB",
    question: "A binary operation is defined by a * b = ab + b for any real numbers a and b. If the identity element is zero, find the inverse of 2 under this operation.",
    options: ["2/3", "-1/2", "2", "-2/3"],
    answer: "-2/3",
    explanation: "As written, the operation does not have 0 as a two-sided identity, so the question cannot be resolved consistently from the supplied statement."
  }
  */

  {
    subject: "Mathematics", topic: "Algebra", year: 1999, exam: "JAMB",
    question: "The first term of a geometric progression is twice its common ratio. Find the sum of the first two terms of the progression if its sum to infinity is 8.",
    options: ["8/5", "8/3", "72/25", "56/9"],
    answer: "72/25",
    explanation: "Given a = 2r and S_infinity = a/(1 - r) = 8. Thus 2r/(1 - r) = 8, so r = 4/5 and a = 8/5. The second term is ar = 32/25. Therefore the sum of the first two terms is 8/5 + 32/25 = 72/25."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1999, exam: "JAMB",
    question: "If m * n = m/n - n/m for real numbers m and n, evaluate -3 * 4.",
    options: ["-25/12", "-7/12", "7/12", "25/12"],
    answer: "7/12",
    explanation: "(-3) * 4 = (-3)/4 - 4/(-3) = -3/4 + 4/3 = 7/12."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1999, exam: "JAMB",
    question: "Divide 4x^3 - 3x + 1 by 2x - 1.",
    options: ["2x^2 - x + 1", "2x^2 - x - 1", "2x^2 + x + 1", "2x^2 + x - 1"],
    answer: "2x^2 + x - 1",
    explanation: "Polynomial division gives 4x^3 - 3x + 1 = (2x - 1)(2x^2 + x - 1), so the quotient is 2x^2 + x - 1."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1999, exam: "JAMB",
    question: "Three consecutive positive integers k, l and m are such that l^2 = 3(k + m). Find the value of m.",
    options: ["4", "5", "6", "7"],
    answer: "7",
    explanation: "Let k = l - 1 and m = l + 1. Then l^2 = 3[(l - 1) + (l + 1)] = 6l. Since l is positive, l = 6, so m = 7."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1999, exam: "JAMB",
    question: "Factorize completely: x^2 + 2xy + y^2 + 3x + 3y - 18",
    options: ["(x + y + 6)(x + y - 3)", "(x - y - 6)(x - y + 3)", "(x - y + 6)(x - y - 3)", "(x + y - 6)(x + y + 3)"],
    answer: "(x + y + 6)(x + y - 3)",
    explanation: "Let u = x + y. The expression becomes u^2 + 3u - 18 = (u + 6)(u - 3). Therefore the factorization is (x + y + 6)(x + y - 3)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1999, exam: "JAMB",
    question: "The sum of two numbers is twice their difference. If the difference of the numbers is P, find the larger of the two numbers.",
    options: ["P/2", "3P/2", "5P/2", "3P"],
    answer: "3P/2",
    explanation: "Let the larger and smaller numbers be x and y. Then x - y = P and x + y = 2P. Adding gives 2x = 3P, so the larger number is 3P/2."
  }
];

export default mathematicsJamb1999;