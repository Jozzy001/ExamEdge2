// JAMB 2000 Mathematics Past Questions
// Fully flattened - audited standalone objects with topics, answers, and detailed explanations.
// Strictly skipped questions containing complex geometric diagrams, coordinate graphs, or custom data tables.

const mathematicsJamb2000 = [
  {
    subject: "Mathematics", topic: "Algebra", year: 2000, exam: "JAMB",
    question: "Let P = {1, 2, u, v, w, x}, Q = {2, 3, u, v, w, 5, 6, y} and R = {2, 3, 4, v, x, y}. Determine (P - Q) intersect R.",
    options: ["{1, x}", "{x, y}", "{x}", "empty set"],
    answer: "{x}",
    explanation: "P - Q = {1, x}. Intersecting this with R gives {1, x} intersect {2, 3, 4, v, x, y} = {x}."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 2000, exam: "JAMB",
    question: "If the population of a town was 240,000 in January 1998 and it increased by 2% each year, what would be the population of the town in January 2000?",
    options: ["480,000", "249,600", "249,696", "244,800"],
    answer: "249,696",
    explanation: "Population in January 1999 = 240,000 × 1.02 = 244,800. Population in January 2000 = 244,800 × 1.02 = 249,696."
  },

  /*
  CHECK SOURCE: The supplied expression is ambiguous without a fraction bar. If interpreted as (2√3 - √2)/(√3 + 2√2), it does not give the marked answer -2, 1. Removed pending verification against the original paper.
  {
    subject: "Mathematics", topic: "Algebra", year: 2000, exam: "JAMB",
    question: "If 2√3 - √2 / √3 + 2√2 = m + n√6, find the values of m and n respectively.",
    options: ["1, -2", "-2, 1", "-2/5, 5/1", "2, 3"],
    answer: "-2, 1",
    explanation: "The supplied source does not make the intended fraction structure unambiguous."
  }
  */

  {
    subject: "Mathematics", topic: "Algebra", year: 2000, exam: "JAMB",
    question: "In a youth club with 94 members, 60 like modern music and 50 like traditional music. The number of members who like both traditional and modern music is three times those who do not like any type of music. How many members like only one type of music?",
    options: ["8", "24", "62", "86"],
    answer: "62",
    explanation: "Let the number who like neither type be x. Then those who like both = 3x. The total number is (60 - 3x) + 3x + (50 - 3x) + x = 94, giving x = 8. Therefore those who like both = 24, and those who like only one type = (60 - 24) + (50 - 24) = 62."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 2000, exam: "JAMB",
    question: "A man wishes to keep some money in a savings deposit at 25% compound interest so that after 3 years he can buy a car for ₦150,000. How much does he need to deposit now?",
    options: ["₦112,000.50", "₦96,000.00", "₦85,714.28", "₦76,800.00"],
    answer: "₦76,800.00",
    explanation: "Using A = P(1 + R/100)^t: 150,000 = P(1.25)^3 = P(1.953125). Therefore P = 150,000 / 1.953125 = ₦76,800.00."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 2000, exam: "JAMB",
    question: "Audu bought an article for ₦50,000 and sold it to Femi at a loss of x%. Femi later sold the article to Oche at a profit of 40%. If Femi made a profit of ₦10,000, find the value of x.",
    options: ["60", "50", "40", "20"],
    answer: "50",
    explanation: "Femi's profit of ₦10,000 is 40% of his cost price, so Femi's cost price = ₦10,000 / 0.40 = ₦25,000. Thus Audu sold the ₦50,000 article for ₦25,000, a 50% loss. Therefore x = 50."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2000, exam: "JAMB",
    question: "Simplify: [3(2^(n+1)) - 4(2^(n-1))] / [2^(n+1) - 2^n]",
    options: ["2^(n-1)", "2", "4", "1/4"],
    answer: "4",
    explanation: "Factor 2^(n-1) from the numerator: 2^(n-1)[3(4) - 4] = 8 × 2^(n-1). Factor 2^(n-1) from the denominator: 2^(n-1)[4 - 2] = 2 × 2^(n-1). Therefore the value is 8/2 = 4."
  },

  /*
  CHECK SOURCE: Direct evaluation gives 9/8, but none of the supplied options is 9/8. The supplied marked answer 1/8 omits the factor 9. Removed pending verification against the original paper.
  {
    subject: "Mathematics", topic: "Algebra", year: 2000, exam: "JAMB",
    question: "Evaluate: 5^(-3 log_5 2) × 2^(2 log_2 3).",
    options: ["8", "1 1/8", "2/5", "1/8"],
    answer: "1/8",
    explanation: "5^(-3 log_5 2) = 2^(-3) = 1/8, while 2^(2 log_2 3) = 3^2 = 9. Hence the product is 9/8."
  }
  */

  {
    subject: "Mathematics", topic: "Algebra", year: 2000, exam: "JAMB",
    question: "A binary operation is defined on the set of integers p and q by p * q = pq + p + q. Find the value of: 2 * (3 * 4).",
    options: ["19", "38", "59", "67"],
    answer: "59",
    explanation: "First, 3 * 4 = 3(4) + 3 + 4 = 19. Then 2 * 19 = 2(19) + 2 + 19 = 59."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2000, exam: "JAMB",
    question: "The 3rd term of an A.P. is 4x - 2y and the 9th term is 10x - 8y. Find the common difference.",
    options: ["19x - 17y", "8x - 4y", "x - y", "2x"],
    answer: "x - y",
    explanation: "T_9 - T_3 = 6d. Therefore (10x - 8y) - (4x - 2y) = 6d, giving 6x - 6y = 6d. Hence d = x - y."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2000, exam: "JAMB",
    question: "Find the inverse of p under the binary operation * defined by p * q = p + q - pq, where p and q are real numbers and zero is the identity.",
    options: ["p", "p - 1", "p / (p - 1)", "p / (p + 1)"],
    answer: "p / (p - 1)",
    explanation: "Let the inverse of p be q. Then p + q - pq = 0. Thus q(1 - p) = -p, so q = p/(p - 1), provided p is not 1."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2000, exam: "JAMB",
    question: "Evaluate the infinite geometric series: (1/2 - 1/4 + 1/8 - 1/16 + ...) - 1.",
    options: ["2/3", "-2/3", "0", "1"],
    answer: "-2/3",
    explanation: "The series has first term 1/2 and common ratio -1/2. Its sum to infinity is (1/2)/(1 + 1/2) = 1/3. Therefore 1/3 - 1 = -2/3."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2000, exam: "JAMB",
    question: "A trader realizes 10x - x^2 naira profit from the sale of x bags of corn. How many bags will give him the maximum profit?",
    options: ["4", "5", "6", "7"],
    answer: "5",
    explanation: "For P(x) = -x^2 + 10x, the vertex occurs at x = -b/(2a) = -10/[2(-1)] = 5. Therefore 5 bags give the maximum profit."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2000, exam: "JAMB",
    question: "Solve the inequality: 2 - x > x^2.",
    options: ["x < -2 or x > 1", "x > 2 or x < -1", "-1 < x < 2", "-2 < x < 1"],
    answer: "-2 < x < 1",
    explanation: "Rearrange to x^2 + x - 2 < 0. Factorizing gives (x + 2)(x - 1) < 0, which holds for -2 < x < 1."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2000, exam: "JAMB",
    question: "If alpha and beta are the roots of the equation 3x^2 + 5x - 2 = 0, find the value of 1/alpha + 1/beta.",
    options: ["-5/2", "-2/3", "1/2", "5/2"],
    answer: "5/2",
    explanation: "alpha + beta = -5/3 and alpha beta = -2/3. Therefore 1/alpha + 1/beta = (alpha + beta)/(alpha beta) = (-5/3)/(-2/3) = 5/2."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 2000, exam: "JAMB",
    question: "In a regular polygon, each interior angle doubles its corresponding exterior angle. Find the number of sides of the polygon.",
    options: ["8", "6", "4", "3"],
    answer: "6",
    explanation: "Let the exterior angle be x. The interior angle is 2x, and interior plus exterior angles sum to 180°. Thus 3x = 180°, so x = 60°. The number of sides is 360°/60° = 6."
  }
];

export default mathematicsJamb2000;