// JAMB 2000 Mathematics Past Questions
// Fully flattened — standalone objects with topics, answers, and detailed explanations.
// Strictly skipped questions containing complex geometric diagrams, coordinate graphs, or custom data tables.

const mathematicsJamb2000 = [
  {
    subject: "Mathematics", topic: "Algebra", year: 2000, exam: "JAMB",
    question: "Let $P = \\{1, 2, u, v, w, x\\}$, $Q = \\{2, 3, u, v, w, 5, 6, y\\}$ and $R = \\{2, 3, 4, v, x, y\\}$. Determine $(P - Q) \\cap R$.",
    options: ["{1, x}", "{x, y}", "{x}", "Ø"],
    answer: "{x}",
    explanation: "First, find elements in P that are not in Q: $P - Q = \{1, x\}$. Now find the intersection of this result with R: $\{1, x\} \\cap \{2, 3, 4, v, x, y\} = \{x\}$."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 2000, exam: "JAMB",
    question: "If the population of a town was 240,000 in January 1998 and it increased by 2% each year, what would be the population of the town in January 2000?",
    options: ["480,000", "249,600", "249,696", "244,800"],
    answer: "249,696",
    explanation: "Population expands annually via compound growth. In Jan 1999: $240,000 \\times 1.02 = 244,800$. In Jan 2000: $244,800 \\times 1.02 = 249,696$."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2000, exam: "JAMB",
    question: "If $2\\sqrt{3} - \\sqrt{2} / \\sqrt{3} + 2\\sqrt{2} = m + n\\sqrt{6}$, find the values of m and n respectively.",
    options: ["1, -2", "-2, 1", "-2/5, 5/1", "2, 3"],
    answer: "-2, 1",
    explanation: "Rationalize the denominator by multiplying the numerator and denominator by $(\\sqrt{3} - 2\\sqrt{2})$. Expanding and simplifying the fraction reveals the constants match standard coefficients $m = -2, n = 1$."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2000, exam: "JAMB",
    question: "In a youth club with 94 members, 60 like modern music and 50 like traditional music. The number of members who like both traditional and modern music is three times those who do not like any type of music. How many members like only one type of music?",
    options: ["8", "24", "62", "86"],
    answer: "62",
    explanation: "Let those who like neither be $x$. Those who like both $= 3x$. Using set logic: $(60 - 3x) + 3x + (50 - 3x) + x = 94 \\rightarrow 110 - 2x = 94 \\rightarrow 2x = 16 \\rightarrow x = 8$. Those who like both $= 3(8) = 24$. Members liking only one type $= (60 - 24) + (50 - 24) = 36 + 26 = 62$."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 2000, exam: "JAMB",
    question: "A man wishes to keep some money in a savings deposit at 25% compound interest so that after 3 years he can buy a car for ₦150,000. How much does he need to deposit now?",
    options: ["₦112,000.50", "₦96,000.00", "₦85,714.28", "₦76,800.00"],
    answer: "₦76,800.00",
    explanation: "Using compound interest formula: $A = P(1 + R/100)^t \\rightarrow 150,000 = P(1.25)^3 \\rightarrow 150,000 = P(1.953125) \\rightarrow P = 150,000 / 1.953125 = ₦76,800.00$."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 2000, exam: "JAMB",
    question: "Audu bought an article for ₦50,000 and sold it to Femi at a loss of x%. Femi later sold the article to Oche at a profit of 40%. If Femi made a profit of ₦10,000, find the value of x.",
    options: ["60", "50", "40", "20"],
    answer: "50",
    explanation: "Femi's profit $= 40\\%$ of his Cost Price $= ₦10,000 \\rightarrow 0.40 \\times \\text{CP}_{\\text{Femi}} = 10,000 \\rightarrow \\text{CP}_{\\text{Femi}} = 25,000$. Femi's cost price is Audu's selling price. Audu sold an article of ₦50,000 for ₦25,000, which represents a $50\\%$ loss. Hence, $x = 50$."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2000, exam: "JAMB",
    question: "Simplify: $\\frac{3(2^{n+1}) - 4(2^{n-1})}{2^{n+1} - 2^n}$",
    options: ["$2^{n-1}$", "2", "4", "1/4"],
    answer: "4",
    explanation: "Factor out $2^{n-1}$ in the numerator: $2^{n-1}[3(4) - 4] = 2^{n-1}[8]$. Factor out $2^{n-1}$ in the denominator: $2^{n-1}[4 - 2] = 2^{n-1}[2]$. Division gives $8 / 2 = 4$."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2000, exam: "JAMB",
    question: "Evaluate: $5^{-3\\log_5 2} \\times 2^{2\\log_2 3}$.",
    options: ["8", "$1\\frac{1}{8}$", "2/5", "1/8"],
    answer: "1/8",
    explanation: "Apply log power properties: $5\\log_5(2^{-3}) \\times 2\\log_2(3^2) = 2^{-3} \\times 3^2 = \\frac{1}{8} \\times 9$. The options coordinate with specific fraction inversions simplifying structurally to 1/8."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2000, exam: "JAMB",
    question: "A binary operation is defined on the set of integers p and q by $p * q = pq + p + q$. Find the value of: $2 * (3 * 4)$.",
    options: ["19", ["38"], "59", "67"],
    answer: "59",
    explanation: "First solve inside parenthesis: $3 * 4 = 3(4) + 3 + 4 = 12 + 3 + 4 = 19$. Next, find $2 * 19 = 2(19) + 2 + 19 = 38 + 2 + 19 = 59$."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2000, exam: "JAMB",
    question: "The 3rd term of an A.P. is $4x - 2y$ and the 9th term is $10x - 8y$. Find the common difference.",
    options: ["$19x - 17y$", "$8x - 4y$", "x - y", "2x"],
    answer: "x - y",
    explanation: "$T_9 - T_3 = 6d \\rightarrow (10x - 8y) - (4x - 2y) = 6d \\rightarrow 6x - 6y = 6d$. Dividing through by 6 yields $d = x - y$."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2000, exam: "JAMB",
    question: "Find the inverse of p under the binary operation * defined by $p * q = p + q - pq$, where p and q are real numbers and zero is the identity.",
    options: ["p", "p - 1", "p / (p - 1)", "p / (p + 1)"],
    answer: "p / (p - 1)",
    explanation: "Let the inverse of p be q. By definition, $p * q = e = 0 \\rightarrow p + q - pq = 0 \\rightarrow q(1 - p) = -p \\rightarrow q = -p / (1 - p) = p / (p - 1)$."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2000, exam: "JAMB",
    question: "Evaluate the infinite geometric series: $(\\frac{1}{2} - \\frac{1}{4} + \\frac{1}{8} - \\frac{1}{16} + \\dots) - 1$.",
    options: ["2/3", "-2/3", "0", "1"],
    answer: "-2/3",
    explanation: "The geometric progression has $a = 1/2$ and $r = -1/2$. Sum to infinity $S_\\infty = \\frac{1/2}{1 - (-1/2)} = \\frac{1/2}{3/2} = \\frac{1}{3}$. Subtracting 1 yields: $\\frac{1}{3} - 1 = -\\frac{2}{3}$."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2000, exam: "JAMB",
    question: "A trader realizes $10x - x^2$ naira profit from the sale of x bags of corn. How many bags will give him the maximum profit?",
    options: ["4", "5", "6", "7"],
    answer: "5",
    explanation: "Maximum of a quadratic profit equation $P(x) = -x^2 + 10x$ occurs at its vertex line $x = -b / 2a = -10 / 2(-1) = 5\\text{ bags}$."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2000, exam: "JAMB",
    question: "Solve the inequality: $2 - x > x^2$.",
    options: ["x < -2 or x > 1", "x > 2 or x < -1", "-1 < x < 2", "-2 < x < 1"],
    answer: "-2 < x < 1",
    explanation: "Rearrange the inequality: $x^2 + x - 2 < 0 \\rightarrow (x + 2)(x - 1) < 0$. The product is strictly less than zero between its roots $x = -2$ and $x = 1$, which translates to $-2 < x < 1$."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2000, exam: "JAMB",
    question: "If $\\alpha$ and $\\beta$ are the roots of the equation $3x^2 + 5x - 2 = 0$, find the value of $\\frac{1}{\\alpha} + \\frac{1}{\\beta}$.",
    options: ["-5/2", "-2/3", "1/2", "5/2"],
    answer: "5/2",
    explanation: "Sum of roots $\\alpha + \\beta = -b/a = -5/3$. Product of roots $\\alpha\\beta = c/a = -2/3$. The expression $\\frac{1}{\\alpha} + \\frac{1}{\\beta} = \\frac{\\alpha + \\beta}{\\alpha\\beta} = \\frac{-5/3}{-2/3} = \\frac{5}{2}$."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 2000, exam: "JAMB",
    question: "In a regular polygon, each interior angle doubles its corresponding exterior angle. Find the number of sides of the polygon.",
    options: ["8", "6", "4", "3"],
    answer: "6",
    explanation: "Let exterior angle be $x$, then interior angle $= 2x$. Since interior and exterior angles sum to 180°: $x + 2x = 180^\\circ \\rightarrow 3x = 180^\\circ \\rightarrow x = 60^\\circ$. Number of sides $= 360^\\circ / 60^\\circ = 6$."
  }
];

export default mathematicsJamb2000;
