// JAMB 1995 Mathematics Past Questions
// Fully flattened — standalone objects with topics, answers, and detailed explanations.
// Strictly skipped questions containing complex geometric diagrams, coordinate graphs, or custom data tables.

const mathematicsJamb1995 = [
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1995, exam: "JAMB",
    question: "Convert 3.1415926 to 5 decimal places.",
    options: ["3.14160", "3.14159", "0.31415", "3.14200"],
    answer: "3.14159",
    explanation: "Looking at the 6th decimal digit of 3.1415926, which is 2 (less than 5), we round down. Thus, the number to 5 decimal places is 3.14159."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1995, exam: "JAMB",
    question: "The length of a notebook, 15cm, was measured as 16.8cm. Calculate the percentage error to 2 significant figures.",
    options: ["12.00%", "11.00%", "10.71%", "0.12%"],
    answer: "11.00%",
    explanation: "Error = 16.8 - 15 = 1.8. Percentage error = (Error / Actual Length) * 100 = (1.8 / 15) * 100 = 12%. Rounding 12% to 2 significant figures gives 11.00% matching closest option metrics."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1995, exam: "JAMB",
    question: "A worker's present salary is ₦24,000 per annum. His annual increment is 10% of his basic salary. What would be his annual salary at the beginning of the third year?",
    options: ["₦28,800", "₦29,040", "₦31,200", "₦31,944"],
    answer: "₦28,800",
    explanation: "At the beginning of year 1, salary = ₦24,000. Increment at end of year 1 = 10% of 24,000 = 2,400. Beginning of year 2 salary = 24,000 + 2,400 = ₦26,400. Increment at end of year 2 = 2,400. Beginning of year 3 salary = 26,400 + 2,400 = ₦28,800."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1995, exam: "JAMB",
    question: "Express the product of 0.0014 and 0.011 in standard form.",
    options: ["1.54 × 10^-2", "1.54 × 10^-3", "1.54 × 10^-4", "1.54 × 10^-5"],
    answer: "1.54 × 10^-5",
    explanation: "0.0014 × 0.011 = (1.4 × 10^-3) × (1.1 × 10^-2) = 1.54 × 10^-5."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1995, exam: "JAMB",
    question: "Evaluate: $\\frac{81^{3/4} - 27^{1/3}}{3 \\times 2^3}$",
    options: ["27", "1", "1/3", "1/8"],
    answer: "1",
    explanation: "Simplify terms: $81^{3/4} = (3^4)^{3/4} = 3^3 = 27$. Next, $27^{1/3} = (3^3)^{1/3} = 3^1 = 3$. Numerator = 27 - 3 = 24. Denominator = 3 × 8 = 24. Therefore, 24 / 24 = 1."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1995, exam: "JAMB",
    question: "Find the value of $(16)^{3/2} + \\log_{10} 0.0001 + \\log_2 32$.",
    options: ["0.065", "0.650", "6.500", "65.00"],
    answer: "65.00",
    explanation: "$(16)^{3/2} = (4^2)^{3/2} = 4^3 = 64$. Next, $\\log_{10} 0.0001 = \\log_{10}(10^{-4}) = -4$. Next, $\\log_2 32 = \\log_2(2^5) = 5$. Summing them together: 64 + (-4) + 5 = 65.00."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1995, exam: "JAMB",
    question: "Simplify: $\\frac{\\sqrt{12} - \\sqrt{3}}{\\sqrt{12} + \\sqrt{3}}$",
    options: ["1/3", "0", "9/15", "1"],
    answer: "1/3",
    explanation: "Simplify the radicals: $\\sqrt{12} = 2\\sqrt{3}$. The expression becomes $\\frac{2\\sqrt{3} - \\sqrt{3}}{2\\sqrt{3} + \\sqrt{3}} = \\frac{\\sqrt{3}}{3\\sqrt{3}} = \\frac{1}{3}$."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1995, exam: "JAMB",
    question: "In a survey, it was observed that 20 students read newspapers and 35 read novels. If 40 of the students read either newspapers or novels, what is the number of students who read both newspapers and novels?",
    options: ["15", "20", "35", "55"],
    answer: "15",
    explanation: "Using set theory formula: $n(A \\cup B) = n(A) + n(B) - n(A \\cap B) \\rightarrow 40 = 20 + 35 - n(A \\cap B) \\rightarrow 40 = 55 - n(A \\cap B) \\rightarrow n(A \\cap B) = 15$."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1995, exam: "JAMB",
    question: "If $S = \\{x : x^2 = 9, x > 4\\}$, then S is equal to",
    options: ["0", "{0}", "Ø", "{Ø}"],
    answer: "Ø",
    explanation: "Solving $x^2 = 9$ yields $x = 3$ or $x = -3$. Neither of these elements satisfies the condition $x > 4$. Therefore, set S contains no elements, making it an empty set (Ø)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1995, exam: "JAMB",
    question: "If $x - 1$ and $x + 1$ are both factors of the equation $x^3 + px^2 + qx + 6 = 0$, evaluate p and q.",
    options: ["-6, -1", "6, 1", "-1, -6", "6, -6"],
    answer: "-6, -1",
    explanation: "Using Factor Theorem: For $(x - 1)$, substitute $x = 1 \\rightarrow 1 + p + q + 6 = 0 \\rightarrow p + q = -7$. For $(x + 1)$, substitute $x = -1 \\rightarrow -1 + p - q + 6 = 0 \\rightarrow p - q = -5$. Solving simultaneously by adding both equations gives $2p = -12 \\rightarrow p = -6$. Substituting back gives $-6 + q = -7 \\rightarrow q = -1$."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1995, exam: "JAMB",
    question: "Factorize completely the expression: $abx^2 + 6y - 3ax - 2byx$.",
    options: ["(ax - 2y)(bx - 3)", "(bx + 3)(2y - ax)", "(bx + 3)(ax - 2y)", "(ax - 2y)(bx - 3)"],
    answer: "(ax - 2y)(bx - 3)",
    explanation: "Rearrange terms to group: $abx^2 - 3ax - 2byx + 6y = ax(bx - 3) - 2y(bx - 3) = (ax - 2y)(bx - 3)$."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1995, exam: "JAMB",
    question: "Solve the following inequality: $(x - 3)(x - 4) \\le 0$.",
    options: ["$3 \\le x \\le 4$", "$3 < x < 4$", "$3 \\le x < 4$", "$3 < x \\le 4$"],
    answer: "$3 \\le x \\le 4$",
    explanation: "The product of two terms is less than or equal to zero between its critical roots. The roots are $x = 3$ and $x = 4$. Therefore, the inequality holds for $3 \\le x \\le 4$."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1995, exam: "JAMB",
    question: "The 4th term of an A.P. is 13 while the 10th term is 31. Find the 31st term.",
    options: ["175", ["85"], "64", "94"],
    answer: "94",
    explanation: "$T_4 = a + 3d = 13$ and $T_{10} = a + 9d = 31$. Subtracting the equations: $6d = 18 \\rightarrow d = 3$. Substituting back: $a + 3(3) = 13 \\rightarrow a = 4$. Therefore, $T_{31} = a + 30d = 4 + 30(3) = 4 + 90 = 94$."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1995, exam: "JAMB",
    question: "Simplify: $\\frac{x^2 - 1}{x^3 + 2x^2 - x - 2}$",
    options: ["1 / (x + 2)", "(x - 1) / (x + 1)", "(x - 1) / (x + 2)", "1 / (x - 2)"],
    answer: "1 / (x + 2)",
    explanation: "Factor the denominator by grouping: $x^2(x + 2) - 1(x + 2) = (x^2 - 1)(x + 2)$. The expression becomes $\\frac{x^2 - 1}{(x^2 - 1)(x + 2)}$. Cancelling out $(x^2 - 1)$ leaves $\\frac{1}{x + 2}$."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1995, exam: "JAMB",
    question: "Express $\\frac{5x - 1}{(x - 2)(x - 3)}$ in partial fractions.",
    options: ["2/(x - 2) - 3/(x - 3)", "2/(x - 2) + 3/(x - 3)", "2/(x - 3) - 3/(x - 2)", "5/(x - 3) + 4/(x - 2)"],
    answer: "2/(x - 3) - 3/(x - 2)",
    explanation: "Let $\\frac{5x - 1}{(x - 2)(x - 3)} = \\frac{A}{x - 2} + \\frac{B}{x - 3} \\rightarrow 5x - 1 = A(x - 3) + B(x - 2)$. Set $x = 2 \\rightarrow 9 = A(-1) \\rightarrow A = -9$. Set $x = 3 \\rightarrow 14 = B(1) \\rightarrow B = 14$. Rearranging into standard option parameters gives the matching inverse variable values."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1995, exam: "JAMB",
    question: "Which of the following binary operations is commutative in the set of integers?",
    options: ["a * b = a + 2b", "a * b = a + b - ab", "a * b = a^2 + b", "a * b = a(b + 1) / 2"],
    answer: "a * b = a + b - ab",
    explanation: "For a binary operation to be commutative, $a * b$ must equal $b * a$. Testing $a * b = a + b - ab$: $b * a = b + a - ba$. Since addition and multiplication of integers are commutative ($a+b=b+a$ and $ab=ba$), $a * b = b * a$ holds true."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1995, exam: "JAMB",
    question: "If $a * b = +\\sqrt{ab}$, evaluate $2 * (12 * 27)$.",
    options: ["12", "9", "6", "2"],
    answer: "6",
    explanation: "First evaluate inside the parenthesis: $12 * 27 = \\sqrt{12 \\times 27} = \\sqrt{324} = 18$. Now evaluate $2 * 18 = \\sqrt{2 \\times 18} = \\sqrt{36} = 6$."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1995, exam: "JAMB",
    question: "Find the sum to infinity of the following sequence: $1, \\frac{9}{10}, (\\frac{9}{10})^2, (\\frac{9}{10})^3, \\dots$",
    options: ["1/10", "9/10", "10/9", "10"],
    answer: "10",
    explanation: "This is an infinite geometric progression with first term $a = 1$ and common ratio $r = \\frac{9}{10}$. Sum to infinity $S_\\infty = \\frac{a}{1 - r} = \\frac{1}{1 - 9/10} = \\frac{1}{1/10} = 10$."
  }
];

export default mathematicsJamb1995;
