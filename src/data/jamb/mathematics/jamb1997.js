// JAMB 1997 Mathematics Past Questions
// Fully flattened — standalone objects with topics, answers, and detailed explanations.
// Strictly skipped questions containing complex geometric diagrams, coordinate graphs, or custom data tables.

const mathematicsJamb1997 = [
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1997, exam: "JAMB",
    question: "If $(1P03)_4 = 115_{10}$, find P.",
    options: ["0", "1", "2", "3"],
    answer: "3",
    explanation: "Convert $(1P03)_4$ to base 10: $1\\times4^3 + P\\times4^2 + 0\\times4^1 + 3\\times4^0 = 64 + 16P + 0 + 3 = 67 + 16P$. Set this equal to 115: $67 + 16P = 115 \\rightarrow 16P = 48 \\rightarrow P = 3$."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1997, exam: "JAMB",
    question: "Evaluate $64.764^2 - 35.236^2$ correct to 3 significant figures.",
    options: ["2960", ["2950"], "2860", "2850"],
    answer: "2950",
    explanation: "Use the difference of two squares: $A^2 - B^2 = (A - B)(A + B)$. Here, $(64.764 - 35.236)(64.764 + 35.236) = (29.528)(100) = 2952.8$. Rounding to 3 significant figures gives 2950."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1997, exam: "JAMB",
    question: "Find the value of $(0.006)^3 + (0.004)^3$ in standard form.",
    options: ["2.8 × 10^-9", "2.8 × 10^-8", "2.8 × 10^-7", "2.8 × 10^-6"],
    answer: "2.8 × 10^-7",
    explanation: "$(0.006)^3 = 0.000000216 = 2.16 \\times 10^{-7}$. $(0.004)^3 = 0.000000064 = 0.64 \\times 10^{-7}$. Summing them gives: $(2.16 + 0.64) \\times 10^{-7} = 2.8 \\times 10^{-7}$."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1997, exam: "JAMB",
    question: "Given that $\\log_a 2 = 0.693$ and $\\log_a 3 = 1.097$, find $\\log_a 13.5$.",
    options: ["1.404", "1.790", "2.598", "2.790"],
    answer: "2.598",
    explanation: "Note that $13.5 = \\frac{27}{2} = \\frac{3^3}{2}$. Thus, $\\log_a 13.5 = \\log_a(\\frac{3^3}{2}) = 3\\log_a 3 - \\log_a 2$. Substituting the values: $3(1.097) - 0.693 = 3.291 - 0.693 = 2.598$."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1997, exam: "JAMB",
    question: "Simplify: $\\log_2 96 - 2\\log_2 6$",
    options: ["2 - \\log_2 3", "3 - \\log_2 3", "\\log_2 3 - 3", "\\log_2 3 - 2"],
    answer: "3 - \\log_2 3",
    explanation: "Apply log laws: $\\log_2 96 - \\log_2 (6^2) = \\log_2 96 - \\log_2 36 = \\log_2(\\frac{96}{36}) = \\log_2(\\frac{8}{3}) = \\log_2 8 - \\log_2 3 = 3 - \\log_2 3$."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1997, exam: "JAMB",
    question: "If $8^{x/2} = [2^{3/8}][4^{3/4}]$, find x.",
    options: ["3/8", "3/4", "4/5", "5/4"],
    answer: "5/4",
    explanation: "Express everything in base 2: $(2^3)^{x/2} = 2^{3/8} \\times (2^2)^{3/4} \\rightarrow 2^{3x/2} = 2^{3/8} \\times 2^{6/4} \\rightarrow 2^{3x/2} = 2^{3/8 + 6/4} = 2^{15/8}$. Equating exponents: $\\frac{3x}{2} = \\frac{15}{8} \\rightarrow 24x = 30 \\rightarrow x = \\frac{30}{24} = \\frac{5}{4}$."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1997, exam: "JAMB",
    question: "Find the simple interest rate per cent per annum at which ₦1,000 accumulates to ₦1,240 in 3 years.",
    options: ["6%", "8%", "10%", "12%"],
    answer: "8%",
    explanation: "Interest $I = 1240 - 1000 = 240$. Formula: $I = \\frac{P \\times R \\times T}{100} \\rightarrow 240 = \\frac{1000 \\times R \\times 3}{100} \\rightarrow 240 = 30R \\rightarrow R = 8\\%$. "
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1997, exam: "JAMB",
    question: "A survey of 100 students in an institution shows that 80 students speak Hausa and 20 students speak Igbo, while only 9 students speak both languages. How many students speak neither Hausa nor Igbo?",
    options: ["0", "9", "11", "20"],
    answer: "9",
    explanation: "Using the formula: $\\text{Total} = n(H) + n(I) - n(H \\cap I) + n(H \\cup I)' \\rightarrow 100 = 80 + 20 - 9 + \\text{Neither} \\rightarrow 100 = 91 + \\text{Neither} \\rightarrow \\text{Neither} = 9$."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1997, exam: "JAMB",
    question: "If the function $f(x) = x^3 + 2x^2 + qx - 6$ is divisible by $(x + 1)$, find q.",
    options: ["-5", "-2", "2", "5"],
    answer: "-5",
    explanation: "By the Remainder Theorem, if $f(x)$ is divisible by $(x + 1)$, then $f(-1) = 0$. Substituting $x = -1$: $(-1)^3 + 2(-1)^2 + q(-1) - 6 = 0 \\rightarrow -1 + 2 - q - 6 = 0 \\rightarrow -5 - q = 0 \\rightarrow q = -5$."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1997, exam: "JAMB",
    question: "Find the minimum value of $x^2 - 3x + 2$ for all real values of x.",
    options: ["1/4", "-1/4", "-1/2", "1/2"],
    answer: "-1/4",
    explanation: "The minimum value of a quadratic curve occurs at $x = \\frac{-b}{2a} = \\frac{-(-3)}{2(1)} = \\frac{3}{2}$. Substituting $x = \\frac{3}{2}$ back into the equation: $(\\frac{3}{2})^2 - 3(\\frac{3}{2}) + 2 = \\frac{9}{4} - \\frac{9}{2} + 2 = \\frac{9 - 18 + 8}{4} = -\\frac{1}{4}$."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1997, exam: "JAMB",
    question: "What value of g will make the expression $4x^2 - 18xy + g$ a perfect square?",
    options: ["9", "9y^2/4", "81y^2", "81y^2/4"],
    answer: "81y^2/4",
    explanation: "For a quadratic expression $Ax^2 + Bx + C$ to be a perfect square, the discriminant condition is used, or simply $C = (\\frac{B}{2\\sqrt{A}})^2$. Here, $g = (\\frac{-18y}{2\\sqrt{4}})^2 = (\\frac{-18y}{4})^2 = (\\frac{-9y}{2})^2 = \\frac{81y^2}{4}$."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1997, exam: "JAMB",
    question: "Find the value of K if the expression $\\frac{5 + 2r}{(r + 1)(r - 2)}$ expanded in partial fractions is $\\frac{K}{r - 2} + \\frac{L}{r + 1}$.",
    options: ["3", "2", "1", "-1"],
    answer: "3",
    explanation: "Equating numerators: $5 + 2r = K(r + 1) + L(r - 2)$. To find K, eliminate L by setting $r = 2$: $5 + 2(2) = K(2 + 1) \\rightarrow 9 = 3K \\rightarrow K = 3$."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1997, exam: "JAMB",
    question: "Find the range of values of x which satisfies the inequality: $12x^2 < x + 1$.",
    options: ["-1/4 < x < 1/3", "1/4 < x < 1/3", "-1/3 < x < 1/4", "-1/4 < x < -1/3"],
    answer: "-1/4 < x < 1/3",
    explanation: "Rearrange the inequality: $12x^2 - x - 1 < 0 \\rightarrow (4x + 1)(3x - 1) < 0$. The roots are $x = -1/4$ and $x = 1/3$. Since the expression is strictly less than zero, the solution lies inside the roots: $-1/4 < x < 1/3$."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1997, exam: "JAMB",
    question: "The sum of the first n terms of a series is given by $S_n = n^2 - 1$. Find the nth term.",
    options: ["4n + 1", "4n - 1", "2n + 1", "2n - 1"],
    answer: "2n - 1",
    explanation: "The nth term $T_n = S_n - S_{n-1} = (n^2 - 1) - ((n-1)^2 - 1) = n^2 - 1 - (n^2 - 2n + 1 - 1) = n^2 - 1 - n^2 + 2n = 2n - 1$."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1997, exam: "JAMB",
    question: "The nth term of a sequence is given by $3^{1 - n}$. Find the sum of the first three terms of the sequence.",
    options: ["1/3", "1", "13/9", "9"],
    answer: "13/9",
    explanation: "$T_1 = 3^{1-1} = 3^0 = 1$. $T_2 = 3^{1-2} = 3^{-1} = \\frac{1}{3}$. $T_3 = 3^{1-3} = 3^{-2} = \\frac{1}{9}$. Sum $= 1 + \\frac{1}{3} + \\frac{1}{9} = \\frac{9 + 3 + 1}{9} = \\frac{13}{9}$."
  }
];

export default mathematicsJamb1997;
