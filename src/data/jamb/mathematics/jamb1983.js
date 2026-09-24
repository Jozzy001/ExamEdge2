// JAMB 1983 Mathematics Past Questions
// Source had 50 questions. 20 were skipped (diagrams, or source text too garbled/ambiguous to transcribe reliably).
// See the skipped-questions list sent alongside this file.

const mathsJamb1983 = [

  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1983, exam: "JAMB",
    question: "If M represents the median and D the mode of the measurements 5, 9, 3, 5, 8, then (M, D) is",
    options: ["(6,5)", "(5,8)", "(5,7)", "(5,5)", "(7,5)"],
    answer: "(5,5)",
    explanation: "Sorted: 3, 5, 5, 8, 9. Median (middle value) = 5. Mode (most frequent value) = 5. So (M, D) = (5, 5)."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1983, exam: "JAMB",
    question: "A construction company is owned by two partners X and Y and it is agreed that their profit will be divided in the ratio 4:5 at the end of the year. Y received ₦5,000 more than X. What is the total profit of the company for the year?",
    options: ["₦20,000.00", "₦25,000.00", "₦30,000.00", "₦15,000.00", "₦45,000.00"],
    answer: "₦45,000.00",
    explanation: "Let X's share = 4k, Y's share = 5k. Y − X = k = ₦5,000. Total profit = 9k = 9 × 5,000 = ₦45,000."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1983, exam: "JAMB",
    question: "Given a regular hexagon, calculate each interior angle of the hexagon.",
    options: ["60°", "30°", "120°", "45°", "135°"],
    answer: "120°",
    explanation: "Interior angle of a regular n-gon = (n−2)×180°/n. For a hexagon, n=6: (4×180)/6 = 720/6 = 120°."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1983, exam: "JAMB",
    question: "Solve the following equations: 4x − 3 = 3x + y = 2y + 5x − 12",
    options: ["x = 5, y = 2", "x = 2, y = 5", "x = -2, y = -5", "x = 5, y = -2", "x = -5, y = -2"],
    answer: "x = 5, y = 2",
    explanation: "From 4x−3 = 3x+y: x − y = 3. From 3x+y = 2y+5x−12: 2x + y = 12. Adding/solving: x = 5, y = 2. (Option A is printed in the source as '4x = 5, y = 2', almost certainly a typo for 'x = 5, y = 2'.)"
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1983, exam: "JAMB",
    question: "If x = 1 is a root of the equation x³ − 2x² − 5x + 6 = 0, find the other roots.",
    options: ["-3 and 2", "-2 and 2", "3 and -2", "1 and 3", "-3 and 1"],
    answer: "3 and -2",
    explanation: "Dividing x³−2x²−5x+6 by (x−1) gives x² − x − 6 = (x−3)(x+2). So the other roots are x = 3 and x = −2."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1983, exam: "JAMB",
    question: "If x is jointly proportional to the cube of y and the fourth power of z, in what ratio is x increased or decreased when y is halved and z is doubled?",
    options: ["4:1 increase", "2:1 increase", "1:4 decrease", "1:1 no change", "3:4 decrease"],
    answer: "2:1 increase",
    explanation: "x = k y³z⁴. With y→y/2 and z→2z: x' = k(y/2)³(2z)⁴ = k(y³/8)(16z⁴) = 2ky³z⁴ = 2x. So x increases in the ratio 2:1."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1983, exam: "JAMB",
    question: "If 0.0000152 × 0.00042 = A × 10^B, where 1 ≤ A < 10, find A and B.",
    options: ["A = 9, B = 6.38", "A = 6.38, B = -9", "A = 6.38, B = 9", "A = 6.38, B = -1", "A = 6.38, B = 1"],
    answer: "A = 6.38, B = -9",
    explanation: "0.0000152 × 0.00042 = (1.52×10⁻⁵) × (4.2×10⁻⁴) = 6.384×10⁻⁹. So A = 6.38, B = -9."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1983, exam: "JAMB",
    question: "The value of (0.0303)³ − (0.02)³ is",
    options: ["0.019", "0.0019", "0.00019", "0.000019", "0.000035"],
    answer: "0.000019",
    explanation: "(0.0303)³ ≈ 0.0000278 and (0.02)³ = 0.000008. Difference ≈ 0.0000198, which to the given precision is 0.000019. (Note: the source prints the first number as '0.303'; using 0.303 instead gives a result far outside all options, so 0.0303 is almost certainly the intended figure.)"
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1983, exam: "JAMB",
    question: "y varies partly as the square of x and partly as the inverse of the square root of x. Write down the expression for y if y = 2 when x = 1 and y = 6 when x = 4.",
    options: [
      "y = 10x²/31 + 52/(31√x)",
      "y = x² + 1/√x",
      "y = x² + 1/x",
      "y = x²/31 + 1/(31√x)",
      "y = 10(x² + 1/√x)/31"
    ],
    answer: "y = 10x²/31 + 52/(31√x)",
    explanation: "Let y = ax² + b/√x. At x=1: a+b=2. At x=4: 16a + b/2 = 6. Solving: a = 10/31, b = 52/31, so y = (10/31)x² + (52/31)/√x."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1983, exam: "JAMB",
    question: "Simplify: [(x − 7)/(x² − 9)] × [(x² − 3x)/(x² − 49)]",
    options: ["x/[(x-3)(x+7)]", "(x+3)(x+7)/x", "x/[(x-3)(x-7)]", "x/[(x+3)(x+7)]", "x/[(x+4)(x+7)]"],
    answer: "x/[(x+3)(x+7)]",
    explanation: "x²−9=(x−3)(x+3), x²−3x=x(x−3), x²−49=(x−7)(x+7). The product becomes [x(x−3)(x−7)] / [(x−3)(x+3)(x−7)(x+7)]; cancelling (x−3) and (x−7) leaves x/[(x+3)(x+7)]."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1983, exam: "JAMB",
    question: "The lengths of the sides of a right-angled triangle are (3x + 1)cm, (3x − 1)cm and x cm. Find x.",
    options: ["2", "6", "18", "12", "0"],
    answer: "12",
    explanation: "Taking (3x+1) as the hypotenuse: (3x+1)² = (3x−1)² + x² → 9x²+6x+1 = 9x²−6x+1+x² → 12x = x² → x = 12 (x ≠ 0)."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1983, exam: "JAMB",
    question: "The scores of a set of final year students in the first semester examination in a paper are: 41, 29, 55, 21, 47, 70, 70, 40, 43, 56, 73, 23, 50, 50. Find the median of the scores.",
    options: ["47", "48½", "50", "48", "49"],
    answer: "48½",
    explanation: "Sorted (14 values): 21,23,29,40,41,43,47,50,50,55,56,70,70,73. Median = average of 7th and 8th values = (47+50)/2 = 48.5."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1983, exam: "JAMB",
    question: "If w varies inversely as V and u varies directly as w³, find the relationship between u and V given that u = 1 when V = 2.",
    options: ["u = 8V³", "u = 2√V", "V = 8/u²", "V = 8u²", "u = 8/V³"],
    answer: "u = 8/V³",
    explanation: "w = k₁/V, u = k₂w³ = k₂k₁³/V³ = K/V³. At u=1, V=2: K = 1×2³ = 8, so u = 8/V³."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1983, exam: "JAMB",
    question: "Solve the simultaneous equations for x: x² + y − 8 = 0, y + 5x − 2 = 0",
    options: ["-28,7", "6,-28", "6,-1", "-1, 7", "3,2"],
    answer: "6,-28",
    explanation: "From the second equation, y = 2 − 5x. Substituting: x² + (2−5x) − 8 = 0 → x² − 5x − 6 = 0 → (x−6)(x+1) = 0, so x = 6 or x = −1. This gives (x,y) = (6, −28) or (x,y) = (−1, 7). Both solution pairs are valid; the source's option list splits them across two separate options (B and D)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1983, exam: "JAMB",
    question: "Find the missing value in the following table for y = x³ − x + 3, given: x = -2,-1,0,1,2,3 and corresponding y = ?, 3, 3, 3, 9, 27.",
    options: ["-3", "3", "-9", "13", "9"],
    answer: "-3",
    explanation: "At x = -2: y = (-2)³ − (-2) + 3 = -8 + 2 + 3 = -3. (Check: the other listed values all satisfy y = x³ − x + 3.)"
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1983, exam: "JAMB",
    question: "Find the angle of the sectors representing each item in a pie chart of the following data: 6, 10, 14, 16, 26.",
    options: ["15°,25°,35°,40°,65°", "60°,100°,140°,160°,260°", "6°,10°,14°,16°,26°", "30°,50°,70°,80°,130°", "None of the above"],
    answer: "30°,50°,70°,80°,130°",
    explanation: "Total = 6+10+14+16+26 = 72. Each angle = (value/72)×360°, giving 30°, 50°, 70°, 80°, 130°."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1983, exam: "JAMB",
    question: "The scores of 16 students in a Mathematics test are: 65,65,55,60,60,65,60,70,75,70,65,70,60,65,65,70. What is the sum of the median and modal scores?",
    options: ["125", "130", "140", "150", "137.5"],
    answer: "130",
    explanation: "Sorted, the 8th and 9th of 16 values are both 65, so median = 65. The mode (most frequent value, appearing 6 times) is also 65. Sum = 65 + 65 = 130."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1983, exam: "JAMB",
    question: "The letters of the word MATRICULATION are cut and put into a box. One letter is drawn at random from the box. Find the probability of drawing a vowel.",
    options: ["2/13", "5/13", "6/13", "8/13", "4/13"],
    answer: "6/13",
    explanation: "MATRICULATION has 13 letters, of which 6 are vowels (A, I, U, A, I, O). P(vowel) = 6/13."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1983, exam: "JAMB",
    question: "Correct each of the numbers 59.81789 and 0.0746829 to three significant figures and multiply them, giving your answer to three significant figures.",
    options: ["4.46", "4.48", "4.47", "4.49", "4.50"],
    answer: "4.47",
    explanation: "59.81789 → 59.8 (3 s.f.), 0.0746829 → 0.0747 (3 s.f.). 59.8 × 0.0747 = 4.46706, which rounds to 4.47."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1983, exam: "JAMB",
    question: "If a rod of length 250cm is measured as 255cm in error, what is the percentage error in measurement?",
    options: ["55", "10", "5", "4", "2"],
    answer: "2",
    explanation: "Percentage error = (|255-250|/250) × 100 = (5/250) × 100 = 2%."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1983, exam: "JAMB",
    question: "If (2/3)^m (3/4)^n = 256/729, find the values of m and n.",
    options: ["m=4, n=2", "m=-4, n=-2", "m=-4, n=2", "m=4, n=-2", "m=-2, n=4"],
    answer: "m=4, n=-2",
    explanation: "256/729 = 2⁸/3⁶. Writing (2/3)^m(3/4)^n = 2^(m-2n)·3^(n-m) and matching powers gives m − 2n = 8 and n − m = −6. Solving simultaneously: m = 4, n = -2."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1983, exam: "JAMB",
    question: "Without using tables, find the numerical value of log₇49 + log₇(1/7).",
    options: ["1", "2", "3", "7", "0"],
    answer: "1",
    explanation: "log₇49 = log₇(7²) = 2. log₇(1/7) = -1. Sum = 2 + (-1) = 1."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1983, exam: "JAMB",
    question: "Factorize completely: 81a⁴ − 16b⁴",
    options: [
      "(3a + 2b)(2a − 3b)(9a² + 4b²)",
      "(3a − 2b)(2a − 3b)(4a² − 9b²)",
      "(3a − 2b)(3a − 2b)(9a² + 4b²)",
      "(3a − 2b)(2a − 3b)(9a² + 4b²)",
      "(3a − 2b)(2a − 3b)(9a² − 4b²)"
    ],
    answer: "(3a − 2b)(2a − 3b)(9a² + 4b²)",
    explanation: "81a⁴−16b⁴ = (9a²)²−(4b²)² = (9a²−4b²)(9a²+4b²) = (3a−2b)(3a+2b)(9a²+4b²). None of the printed options exactly reproduce this (each has a garbled second factor, likely an OCR/typesetting error in the source); Option D is the closest match, containing the correct third factor (9a²+4b²)."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1983, exam: "JAMB",
    question: "One interior angle of a convex hexagon is 170° and each of the remaining interior angles is equal to x°. Find x.",
    options: ["120°", "110°", "105°", "102°", "100°"],
    answer: "110°",
    explanation: "Sum of interior angles of a hexagon = 720°. Remaining sum = 720 − 170 = 550°, shared equally among 5 angles: 550/5 = 110°."
  },
  {
    subject: "Mathematics", topic: "Trigonometry", year: 1983, exam: "JAMB",
    question: "A ship H leaves a port P and sails 30km due South. Then it sails 60km due West. What is the bearing of H from P?",
    options: ["26°34'", "243°26'", "116°34'", "63°26'", "240°"],
    answer: "243°26'",
    explanation: "The resultant lies south-west of P. The angle from south towards west = arctan(60/30) = 63.43° ≈ 63°26'. Bearing = 180° + 63°26' = 243°26'."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1983, exam: "JAMB",
    question: "In a sample survey of a university community, the following table shows the distribution of the number of members per household. No. of members: 1,2,3,4,5,6,7,8; Number of households: 3,12,15,28,21,10,7,4 (Total 100). Find the modal number of members per household.",
    options: ["4", "4.5", "5", "4.5", "None"],
    answer: "4",
    explanation: "The highest frequency (28 households) corresponds to 4 members per household, so the mode is 4."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1983, exam: "JAMB",
    question: "On a square paper of length 2.524375cm is inscribed a square diagram of length 0.524375cm. Find the area of the paper not covered by the diagram, correct to 3 significant figures.",
    options: ["6.00cm²", "6.10cm²", "6cm²", "6.09cm²", "4.00cm²"],
    answer: "6.10cm²",
    explanation: "Area difference = 2.524375² − 0.524375² = 6.372469 − 0.274969 = 6.097500 ≈ 6.10cm² (3 s.f.)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1983, exam: "JAMB",
    question: "If f(x) = 1/(x−1) + (x−1)/(x²−1), find f(1−x).",
    options: ["1/x + 1/(x+2)", "x + 1/(2x−1)", "-1/x − 1/(x−2)", "-1/x + 1/(x²−1)"],
    answer: "-1/x − 1/(x−2)",
    explanation: "Since (x−1)/(x²−1) = 1/(x+1), f(x) = 1/(x−1)+1/(x+1) = 2x/(x²−1). Substituting x → 1−x gives f(1−x) = 2(1−x)/[(1−x)²−1] = 2(1−x)/[x²−2x] = -2(x−1)/[x(x−2)], which splits into partial fractions as -1/x − 1/(x−2)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1983, exam: "JAMB",
    question: "Simplify: ∛(729a⁹/8)",
    options: ["9a²/2", "9a³/2", "2/(3a²)", "2/(3a²)", "3a³/2"],
    answer: "9a³/2",
    explanation: "∛729 = 9, ∛(a⁹) = a³, ∛8 = 2. So ∛(729a⁹/8) = 9a³/2. (The source's printed radical is faint/garbled; 729 is the value that makes the numbers work out to a listed option.)"
  }
  {
    subject: "Mathematics", topic: "Algebra", year: 1983, exam: "JAMB",
    question: "A man drove for 4 hours at a certain speed, he then doubled his speed and drove for another 3 hours. Altogether he covered 600km. At what speed did he drive for the last 3 hours?",
    options: ["120km/hr", "60km/hr", "600/7km/hr", "50km/hr", "100km/hr"],
    answer: "120km/hr",
    explanation: "Let the first speed be s. Distance = 4s + 3(2s) = 10s = 600, so s = 60km/hr. The last 3 hours were driven at 2s = 120km/hr."
  }
]

export default mathsJamb1983
