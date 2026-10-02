// JAMB 1998 Mathematics Past Questions
// Fully flattened — audited standalone objects with topics, answers, and detailed explanations.
// Strictly skipped questions containing complex geometric diagrams, coordinate graphs, or custom data tables.

const mathematicsJamb1998 = [
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1998, exam: "JAMB",
    question: "If 1011_2 + X_7 = 25_10, solve for X.",
    options: ["14", "20", "24", "25"],
    answer: "20",
    explanation: "Convert 1011_2 to base 10: 1 × 2^3 + 0 × 2^2 + 1 × 2^1 + 1 × 2^0 = 11. Therefore X_7 = 25 - 11 = 14_10. Converting 14_10 to base 7 gives 20_7. Hence X = 20."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1998, exam: "JAMB",
    question: "Evaluate [1/0.03 ÷ 1/0.024]^(-1) correct to 2 decimal places.",
    options: ["3.76", "1.25", "0.94", "0.75"],
    answer: "1.25",
    explanation: "Simplify inside the bracket: 1/0.03 ÷ 1/0.024 = 0.024/0.03 = 0.8. Therefore [0.8]^(-1) = 1/0.8 = 1.25."
  },

  /*
  CHECK SOURCE: The algebra gives c = a^(-3/2), but none of the supplied options is a^(-3/2).
  The marked answer a^(-1/2) is the value of c^(1/3), not c. Removed pending verification against the paper.
  {
    subject: "Mathematics", topic: "Algebra", year: 1998, exam: "JAMB",
    question: "If b^3 = a^(-3) and c^(1/3) = a^(1/2)b, express c in terms of a.",
    options: ["a^(-1/2)", "a^(1/2)", "a^(3/2)", "a^(-2/3)"],
    answer: "a^(-1/2)",
    explanation: "From b^3 = a^(-3), b = a^(-1). Then c^(1/3) = a^(1/2)a^(-1) = a^(-1/2), so c = a^(-3/2)."
  }
  */

  {
    subject: "Mathematics", topic: "Algebra", year: 1998, exam: "JAMB",
    question: "A market woman sells oils in cylindrical tins 10 cm deep and 6 cm in diameter at ₦15.00 each. If she bought a full cylindrical jug 18 cm deep and 10 cm in diameter for ₦50.00, how much did she make by selling all the oil?",
    options: ["₦62.50", "₦35.00", "₦31.00", "₦25.00"],
    answer: "₦25.00",
    explanation: "Volume of a small tin = π × 3^2 × 10 = 90π cm^3. Volume of the big jug = π × 5^2 × 18 = 450π cm^3. Number of tins filled = 450π/90π = 5. Total revenue = 5 × ₦15.00 = ₦75.00. Profit = ₦75.00 - ₦50.00 = ₦25.00."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1998, exam: "JAMB",
    question: "A man is paid r naira per hour for normal work and double rate for overtime. If he does a 35-hour week which includes q hours of overtime, what is his weekly earning in naira?",
    options: ["r(35 + q)", "q(35r - q)", "q(35r + r)", "r(35 - q)"],
    answer: "r(35 + q)",
    explanation: "Normal hours = 35 - q, so normal earnings = r(35 - q). Overtime earnings = 2rq. Therefore total weekly earnings = r(35 - q) + 2rq = 35r + rq = r(35 + q)."
  },

  /*
  CHECK SOURCE: From the supplied sets, Q ∪ R = {2,3,4,5,6}, so its complement in U is {1}.
  Thus P ∩ (Q ∪ R)' = {1}, but {1} is not among the supplied options. Removed pending verification against the paper.
  {
    subject: "Mathematics", topic: "Algebra", year: 1998, exam: "JAMB",
    question: "Given the universal set U = {1,2,3,4,5,6} and the sets P = {1,2,3,4}, Q = {3,4,5} and R = {2,4,6}. Find P ∩ (Q ∪ R)'.",
    options: ["{4}", "{1,2,3,4}", "{1,2,3,5,6}", "{1,2,3,4,5,6}"],
    answer: "{4}",
    explanation: "Q ∪ R = {2,3,4,5,6}. Therefore (Q ∪ R)' = {1}, and P ∩ (Q ∪ R)' = {1}."
  }
  */

  {
    subject: "Mathematics", topic: "Algebra", year: 1998, exam: "JAMB",
    question: "When the expression pm^2 + qm + 1 is divided by (m - 1), it has a remainder of 2, and when divided by (m + 1), the remainder is 4. Find p and q respectively.",
    options: ["2, -1", "-1, 2", "3, -2", "-2, 3"],
    answer: "2, -1",
    explanation: "By the Remainder Theorem, f(1) = 2 gives p + q = 1. Also, f(-1) = 4 gives p - q = 3. Adding the equations gives 2p = 4, so p = 2. Hence q = -1."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1998, exam: "JAMB",
    question: "Factorize completely: r^2 - r(2p + q) + 2pq",
    options: ["(r - 2q)(2r - p)", "(r - q)(r + p)", "(r - q)(r - 2p)", "(2r - q)(r + p)"],
    answer: "(r - q)(r - 2p)",
    explanation: "Expand the middle term: r^2 - 2pr - qr + 2pq. Grouping gives r(r - 2p) - q(r - 2p) = (r - q)(r - 2p)."
  },

  /*
  CHECK SOURCE: As written, √x - x√2 - 1 = 0 has no real solution. Its equivalent equation in y = √x is √2y^2 - y + 1 = 0, whose discriminant is 1 - 4√2 < 0. None of the supplied options can therefore be correct. Removed pending verification against the paper.
  {
    subject: "Mathematics", topic: "Algebra", year: 1998, exam: "JAMB",
    question: "Solve the equation: √x - (x√2) - 1 = 0.",
    options: ["3/2", "2/3", "4/9", "9/4"],
    answer: "4/9",
    explanation: "The equation has no real solution as written."
  }
  */

  // CHECK SOURCE: The supplied wording says "real", which gives -2 ≤ m ≤ 6, while the supplied option and marked answer are the strict interval -2 < m < 6. The paper may have specified distinct real roots or otherwise excluded repeated roots. Kept pending paper verification.
  {
    subject: "Mathematics", topic: "Algebra", year: 1998, exam: "JAMB",
    question: "Find the range of values of m for which the roots of the equation 3x^2 - 3mx + (m^2 - m - 3) = 0 are real.",
    options: ["-1 < m < 7", "-2 < m < 6", "-3 < m < 9", "4 < m < 8"],
    answer: "-2 < m < 6",
    explanation: "For real roots, the discriminant must satisfy b^2 - 4ac ≥ 0. Here, the discriminant is (-3m)^2 - 4(3)(m^2 - m - 3) = -3(m - 6)(m + 2). Hence -2 ≤ m ≤ 6. The supplied option -2 < m < 6 excludes the two endpoint cases, so the wording should be checked against the original paper."
  }

  // CHECK SOURCE: The algebra gives a = x(m - 1)/(m + 1), but every supplied option omits the required factor x. The first option has the correct remaining factor, so it has been repaired as the likely transcription/OCR omission.
  ,{
    subject: "Mathematics", topic: "Algebra", year: 1998, exam: "JAMB",
    question: "Make a the subject of the formula: (x + a)/(x - a) = m",
    options: ["x(m - 1)/(m + 1)", "(1 + m)/(1 - m)", "(1 - m)/(1 + m)", "(m + 1)/(m - 1)"],
    answer: "x(m - 1)/(m + 1)",
    explanation: "Cross-multiply: x + a = m(x - a). Therefore x + a = mx - ma, so a + ma = mx - x. Hence a(1 + m) = x(m - 1), giving a = x(m - 1)/(m + 1)."
  },

  /*
  CHECK SOURCE: Direct polynomial division gives quotient x^2/2 + 21x/4 + 47/8 with remainder 1/8. None of the supplied options is correct. Removed pending verification against the paper.
  {
    subject: "Mathematics", topic: "Algebra", year: 1998, exam: "JAMB",
    question: "Divide x^3 + 11x^2 + 17x + 6 by 2x + 1.",
    options: ["x^2 + 5x + 6", "2x^2 + 5x + 6", "2x^2 - 5x + 6", "x^2 - 5x + 6"],
    answer: "x^2 + 5x + 6",
    explanation: "The quotient is x^2/2 + 21x/4 + 47/8 with remainder 1/8."
  }
  */

  {
    subject: "Mathematics", topic: "Algebra", year: 1998, exam: "JAMB",
    question: "Express in partial fractions: (11x + 2)/(6x^2 - x - 1)",
    options: ["1/(3x - 1) + 3/(2x + 1)", "3/(3x - 1) - 1/(2x + 1)", "3/(3x + 1) - 1/(2x - 1)", "1/(3x + 1) + 3/(2x - 1)"],
    answer: "1/(3x + 1) + 3/(2x - 1)",
    explanation: "Factor the denominator: 6x^2 - x - 1 = (3x + 1)(2x - 1). Therefore (11x + 2)/(6x^2 - x - 1) = 1/(3x + 1) + 3/(2x - 1)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1998, exam: "JAMB",
    question: "If x is a positive real number, find the range of values for which 1/(3x) + 1/2 > 1/(4x).",
    options: ["x > -1/6", "0 < x < 4", "x > 0", "0 < x < 1/6"],
    answer: "x > 0",
    explanation: "Rearranging gives 1/(12x) + 1/2 > 0, or (1 + 6x)/(12x) > 0. Since x is given as positive, both numerator and denominator are positive. Therefore the inequality holds for all x > 0."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1998, exam: "JAMB",
    question: "If p + 1, 2p - 10, and 1 - 4p^2 are three consecutive terms of an arithmetic progression, find the possible values of p.",
    options: ["-4, 2", "-11/4, 2", "-2, 4/11", "5, -3"],
    answer: "-11/4, 2",
    explanation: "For an arithmetic progression, T_2 - T_1 = T_3 - T_2. Thus (2p - 10) - (p + 1) = (1 - 4p^2) - (2p - 10). This gives 4p^2 + 3p - 22 = 0, so (4p + 11)(p - 2) = 0. Hence p = -11/4 or p = 2."
  },

  /*
  CHECK SOURCE: The equation gives r^3 = 1/2, so the positive common ratio is the cube root of 1/2, not 1/2. None of the supplied options equals that value. Removed pending verification against the paper.
  {
    subject: "Mathematics", topic: "Algebra", year: 1998, exam: "JAMB",
    question: "The sum of the first three terms of a geometric progression is half its sum to infinity. Find the positive common ratio of the progression.",
    options: ["1/4", "1/3 * √3", "1/2", "1/3 * √2"],
    answer: "1/2",
    explanation: "S_3 = a(1 - r^3)/(1 - r) and S_∞ = a/(1 - r). Given S_3 = S_∞/2, so 1 - r^3 = 1/2. Hence r^3 = 1/2 and r is the positive cube root of 1/2."
  }
  */
];

export default mathematicsJamb1998;