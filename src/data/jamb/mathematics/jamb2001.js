// JAMB 2001 Mathematics Past Questions
// Fully flattened — audited standalone objects with topics, answers, and detailed explanations.
// Strictly skipped questions containing complex geometric diagrams, coordinate graphs, or custom data tables.

const mathematicsJamb2001 = [
  /*
  CHECK SOURCE: With the supplied amount of ₦5,000, the principal is ₦4,545.45, which is absent from the options. Archived copies also show a conflicting source variant with ₦5,500, which would make ₦5,000 the principal. Because the supplied source says ₦5,000, this object is removed rather than silently changing the question.
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 2001, exam: "JAMB",
    question: "Find the principal which amounts to ₦5,000 at simple interest in 5 years at 2% per annum.",
    options: ["₦5000", "₦4900", "₦4800", "₦4700"],
    answer: "₦4700",
    explanation: "Let principal be P. Amount A = P + I, where Simple Interest I = (P × R × T) / 100. Thus, 5,000 = P + (P × 2 × 5) / 100 = 1.1P, so P = ₦4,545.45. No supplied option matches."
  }
  */

  {
    subject: "Mathematics", topic: "Number & Numeration", year: 2001, exam: "JAMB",
    question: "A car dealer bought a second-hand car for ₦250,000.00 and spent ₦70,000.00 refurbishing it. He then sold the car for ₦400,000.00. What is the percentage gain?",
    options: ["20%", "25%", "32%", "60%"],
    answer: "25%",
    explanation: "Total cost price = ₦250,000 + ₦70,000 = ₦320,000. Profit = ₦400,000 - ₦320,000 = ₦80,000. Percentage gain = (₦80,000 / ₦320,000) × 100% = 25%."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 2001, exam: "JAMB",
    question: "Evaluate 21.05347 - 1.6324 × 0.43, correct to 3 decimal places.",
    options: ["20.351", "20.352", "20.980", "20.981"],
    answer: "20.352",
    explanation: "First, 1.6324 × 0.43 = 0.701932. Then 21.05347 - 0.701932 = 20.351538. Correct to 3 decimal places, this is 20.352."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 2001, exam: "JAMB",
    question: "Evaluate ((0.14)^2 × 0.275) / 7(0.02), correct to 3 decimal places.",
    options: ["0.033", "0.039", "0.308", "0.358"],
    answer: "0.039",
    explanation: "(0.14)^2 = 0.0196. The numerator is 0.0196 × 0.275 = 0.00539. The denominator is 7 × 0.02 = 0.14. Therefore 0.00539 / 0.14 = 0.0385, which rounds to 0.039."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2001, exam: "JAMB",
    question: "Given that p = 1 + √2 and q = 1 - √2, evaluate (p^2 - q^2) / 2pq.",
    options: ["-2(2 + √2)", "2(2 + √2)", "-2√2", "2√2"],
    answer: "-2√2",
    explanation: "p^2 - q^2 = (p - q)(p + q) = (2√2)(2) = 4√2. Also, 2pq = 2(1 + √2)(1 - √2) = -2. Hence the value is 4√2 / (-2) = -2√2."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2001, exam: "JAMB",
    question: "If y/2 = x, evaluate: (x^3 / y^3 + 1/2) ÷ (1/2 - x^2 / y^2).",
    options: ["5/16", "5/8", "5/4", "5/2"],
    answer: "5/2",
    explanation: "From y/2 = x, x/y = 1/2. Therefore the numerator is (1/2)^3 + 1/2 = 5/8, and the denominator is 1/2 - (1/2)^2 = 1/4. Hence the value is (5/8) ÷ (1/4) = 5/2."
  },

  /*
  CHECK SOURCE: The true factorization is (2x - 3y + 5)(2x + 3y + 5), but that expression is absent from the supplied options. The supplied marked answer also does not match the polynomial. Removed pending verification against the original paper.
  {
    subject: "Mathematics", topic: "Algebra", year: 2001, exam: "JAMB",
    question: "Factorize completely: 4x^2 - 9y^2 + 20x + 25.",
    options: ["(2x - 3y + 5)(2x - 3y - 5)", "(2x - 3y)(2x + 3y)", "(2x + 5)(2x - 9y + 5)", "(2x - 3y + 5)(2x + 3y + 5)"],
    answer: "(2x - 3y + 5)(2x + 3y + 5)",
    explanation: "The supplied options do not contain the true factorization."
  }
  */

  {
    subject: "Mathematics", topic: "Algebra", year: 2001, exam: "JAMB",
    question: "Solve the equations simultaneously: m^2 + n^2 = 29 and m + n = 7.",
    options: ["(5, 2) and (5, 3)", "(5, 3) and (3, 5)", "(2, 3) and (3, 5)", "(2, 5) and (5, 2)"],
    answer: "(2, 5) and (5, 2)",
    explanation: "From m + n = 7, n = 7 - m. Substituting gives m^2 + (7 - m)^2 = 29, so 2m^2 - 14m + 20 = 0, or (m - 5)(m - 2) = 0. Thus m = 5 or 2, giving (m, n) = (5, 2) and (2, 5)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2001, exam: "JAMB",
    question: "The sixth term of an arithmetic progression is half of its twelfth term. The first term is equal to",
    options: ["half of the common difference", "the common difference", "double of the common difference", "zero"],
    answer: "the common difference",
    explanation: "T_6 = a + 5d and T_12 = a + 11d. Given T_6 = (1/2)T_12: a + 5d = (a + 11d)/2. Thus 2a + 10d = a + 11d, so a = d. Therefore the first term is equal to the common difference."
  },

  /*
  CHECK SOURCE: As supplied, S_n = 580 gives 10n^2 + 90n - 580 = 0, whose positive root is about 4.35, not an integer and not any supplied option. Removed pending verification against the original paper.
  {
    subject: "Mathematics", topic: "Algebra", year: 2001, exam: "JAMB",
    question: "A man saves ₦100.00 in his first year of work and each year saves ₦20.00 more than in the preceding year. In how many years will he save ₦580.00 in total?",
    options: ["20 years", "29 years", "58 years", "100 years"],
    answer: "29 years",
    explanation: "For n years, S_n = n/2[2(100) + (n - 1)(20)]. Setting S_n = 580 gives 10n^2 + 90n - 580 = 0, which has no positive integer solution. No supplied option is valid."
  }
  */

  {
    subject: "Mathematics", topic: "Algebra", year: 2001, exam: "JAMB",
    question: "An operation * is defined on the set of real numbers by a * b = a + b + 1. If the identity element is -1, find the inverse of the element 2 under this operation.",
    options: ["-4", "0", "2", "4"],
    answer: "-4",
    explanation: "Let the inverse of 2 be x. Since the identity is -1, 2 * x = -1. Thus 2 + x + 1 = -1, so x = -4."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 2001, exam: "JAMB",
    question: "Find the number of sides of a regular polygon whose interior angle is twice the exterior angle.",
    options: ["3", "6", "8", "12"],
    answer: "6",
    explanation: "Let the exterior angle be x. Then the interior angle is 2x, and x + 2x = 180°, giving x = 60°. The number of sides is 360° / 60° = 6."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 2001, exam: "JAMB",
    question: "A cylindrical tank has a capacity of 3080 cubic meters. What is the depth of the tank if the diameter of its base is 14m?",
    options: ["20m", "22m", "23m", "25m"],
    answer: "20m",
    explanation: "Radius r = 14/2 = 7m. Using V = πr^2h with π = 22/7: 3080 = (22/7) × 49 × h = 154h. Therefore h = 20m."
  }
];

export default mathematicsJamb2001;