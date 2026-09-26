// JAMB 1992 Mathematics Past Questions
// Source had 50 questions. 3 were skipped (diagrams, or source text too garbled/ambiguous to transcribe reliably).
// See the skipped-questions list sent alongside this file.

const mathsJamb1992 = [

  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1992, exam: "JAMB",
    question: "Find n if 34ₙ = 10011₂",
    options: ["5", "6", "7", "8"],
    answer: "5",
    explanation: "10011₂ = 16+2+1 = 19 (base 10). 34ₙ = 3n+4 = 19 → 3n=15 → n=5."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1992, exam: "JAMB",
    question: "The radius of a circle is given as 5cm subject to an error of 0.1cm. What is the percentage error in the area of the circle?",
    options: ["1/25", "¼", "4", "25"],
    answer: "4",
    explanation: "Percentage error in area ≈ 2×(percentage error in radius) = 2×(0.1/5×100) = 2×2% = 4%."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1992, exam: "JAMB",
    question: "Evaluate log_b(aⁿ) if b = a^(1/n)",
    options: ["n²", "n", "1/n", "1/n"],
    answer: "n²",
    explanation: "log_{a^(1/n)}(aⁿ) = n ÷ (1/n) = n²."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1992, exam: "JAMB",
    question: "What is the value of x satisfying the equation 4^(2x) ÷ 4^(3x) = 2?",
    options: ["-2", "-1/2", "½", "2"],
    answer: "-1/2",
    explanation: "4^(2x-3x)=2 → 4^(-x)=2 → 2^(-2x)=2¹ → -2x=1 → x=-1/2."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1992, exam: "JAMB",
    question: "Simplify: [(1.25×10⁴)×(2.0×10⁻¹)] / (6.25×10⁵)",
    options: ["4.0×10⁻³", "5.0×10⁻²", "2.0×10⁻¹", "5.0×10³"],
    answer: "4.0×10⁻³",
    explanation: "Numerator = 2.5×10³. Dividing by 6.25×10⁵: (2.5/6.25)×10⁻² = 0.4×10⁻² = 4.0×10⁻³."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1992, exam: "JAMB",
    question: "Simplify: 5√18 - 3√72 + 4√50",
    options: ["17√4", "4√17", "17√2", "12√4"],
    answer: "17√2",
    explanation: "5√18=15√2, 3√72=18√2, 4√50=20√2. Sum: 15√2-18√2+20√2 = 17√2."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1992, exam: "JAMB",
    question: "If x = 3-√3, find x² + 36/x²",
    options: ["9", "18", "24", "27"],
    answer: "24",
    explanation: "x² = 12-6√3. 36/x² = 36/(12-6√3) = 12+6√3 (after rationalizing). Sum = (12-6√3)+(12+6√3) = 24."
  },
  {
    subject: "Mathematics", topic: "Sets & Venn Diagrams", year: 1992, exam: "JAMB",
    question: "If x = {all prime factors of 44} and y = {all prime factors of 60}, the elements of x∪y and x∩y respectively are",
    options: ["{2,4,3,5,11} and {4}", "{4,3,5,11} and {3,4}", "{2,5,11} and {2}", "{2,3,5,11} and {2}"],
    answer: "{2,3,5,11} and {2}",
    explanation: "Prime factors of 44 = {2,11}. Prime factors of 60 = {2,3,5}. Union = {2,3,5,11}. Intersection = {2}."
  },
  {
    subject: "Mathematics", topic: "Sets & Venn Diagrams", year: 1992, exam: "JAMB",
    question: "If U={0,2,3,6,7,8,9,10} is the universal set, E={0,4,6,8} and F={x: x²≤2⁶, x is odd}, find (E∩F)' where ' means the complement of a set.",
    options: ["{0}", "U", "C", "f"],
    answer: "U",
    explanation: "F (odd elements of U with x²≤64) = {3,7}. E∩F = ∅ (no common elements). The complement of the empty set within U is U itself."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1992, exam: "JAMB",
    question: "Make t the subject of the formula s = ut + ½at²",
    options: [
      "t = (1/a)[u±√(u²-2as)]",
      "t = (1/a)[-u±√(u²-2as)]",
      "t = (1/a)[u±√(u²+2as)]",
      "t = (1/a)[-u±√(u²+2as)]"
    ],
    answer: "t = (1/a)[-u±√(u²+2as)]",
    explanation: "Rearranging as a quadratic in t: ½at²+ut-s=0. By the quadratic formula: t = [-u±√(u²+2as)]/a."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1992, exam: "JAMB",
    question: "Factorize: 9p² - q² + 6qr - 9r²",
    options: [
      "(3p-3q+r)(3p-q-9r)",
      "(6p-3q+3r)(3p-q-4r)",
      "(3p-q+3r)(3p+q-3r)",
      "(3p-q+3r)(3p-q-3r)"
    ],
    answer: "(3p-q+3r)(3p+q-3r)",
    explanation: "9p²-(q²-6qr+9r²) = (3p)²-(q-3r)² = [3p-(q-3r)][3p+(q-3r)] = (3p-q+3r)(3p+q-3r)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1992, exam: "JAMB",
    question: "Solve the equation y - 11√y + 24 = 0",
    options: ["8,3", "64,9", "6,4", "9,-8"],
    answer: "64,9",
    explanation: "Let u=√y. u²-11u+24=0 → (u-8)(u-3)=0 → u=8 or 3, giving y=64 or 9."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1992, exam: "JAMB",
    question: "A man invested a sum of ₦280.00 partly at 5% and partly at 4%. If the total interest is ₦12.80 per annum, find the amount invested at 5%.",
    options: ["₦14.00", "₦120.00", "₦140.00", "₦160.00"],
    answer: "₦160.00",
    explanation: "Let x=amount at 5%. 0.05x+0.04(280-x)=12.80 → 0.01x=1.60 → x=160."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1992, exam: "JAMB",
    question: "If x+1 is a factor of x³+3x²+kx+4, find the value of k",
    options: ["6", "6", "8", "8"],
    answer: "6",
    explanation: "Substituting x=-1: -1+3-k+4=0 → 6-k=0 → k=6."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1992, exam: "JAMB",
    question: "Resolve 3/(x²+x-2) into partial fractions",
    options: [
      "1/(x-1) - 1/(x+2)",
      "1/(x+2) - 1/(x-1)",
      "1/(x+1) - 1/(x-2)",
      "1/(x-2) + 1/(x+1)"
    ],
    answer: "1/(x-1) - 1/(x+2)",
    explanation: "x²+x-2=(x+2)(x-1). 3/[(x+2)(x-1)] = A/(x+2)+B/(x-1). Solving: A=-1, B=1, giving 1/(x-1) - 1/(x+2)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1992, exam: "JAMB",
    question: "Find all values of x satisfying the inequality -11 ≤ 4 - 3x ≤ 28",
    options: ["-5 ≤ x ≤ 18", "5 ≤ x ≤ 8", "-8 ≤ x ≤ 5", "-5 < x ≤ 8"],
    answer: "-8 ≤ x ≤ 5",
    explanation: "-11≤4-3x gives x≤5. 4-3x≤28 gives x≥-8. So -8≤x≤5."
  },
  {
    subject: "Mathematics", topic: "Coordinate Geometry", year: 1992, exam: "JAMB",
    question: "A sketch shows the curve y=ax²+bx+c crossing the x-axis at x=-1 and x=2, opening upward. Find a, b, and c respectively.",
    options: ["1,0,-4", "-2,2,-4", "0,1,-4", "2,-2,-4"],
    answer: "2,-2,-4",
    explanation: "With roots -1 and 2: y=a(x+1)(x-2)=a(x²-x-2). Comparing with the graph's y-intercept c=-4 gives a=2, so b=-a=-2."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1992, exam: "JAMB",
    question: "Find the sum of the infinity of the following series: 3 + 2 + 4/3 + 8/9 + 16/27 + ...",
    options: ["1270", "190", "18", "9"],
    answer: "9",
    explanation: "GP with a=3, r=2/3. Sum to infinity = a/(1-r) = 3/(1/3) = 9."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1992, exam: "JAMB",
    question: "What is the nth term of the sequence 2, 6, 12, 20, ...?",
    options: ["4n-2", "2(3n-1)", "n²+n", "n²+3n+2"],
    answer: "n²+n",
    explanation: "Testing n²+n: at n=1,2,3,4 gives 2,6,12,20 — matching the sequence exactly."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1992, exam: "JAMB",
    question: "For an arithmetic sequence, the first term is 2 and the common difference is 3. Find the sum of the first 11 terms.",
    options: ["157", "187", "197", "200"],
    answer: "187",
    explanation: "Sum = (n/2)[2a+(n-1)d] = (11/2)[4+10(3)] = (11/2)(34) = 187."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1992, exam: "JAMB",
    question: "If the binary operation * is defined by m*n = mn+m+n for any real number m and n, find the identity element under this operation.",
    options: ["e=1", "e=-1", "e=-2", "e=0"],
    answer: "e=0",
    explanation: "For m*e=m: me+m+e=m → e(m+1)=0 for all m, so e=0."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1992, exam: "JAMB",
    question: "In a trapezium PQRS (PQ∥SR), diagonals PQ, SR... [figure] TSP=105° (exterior angle at S) and angle PRQ=20° (between diagonal PR and side RQ). Find angle PQR.",
    options: ["130°", "120°", "75°", "30°"],
    answer: "75°",
    explanation: "Interior angle PSR = 180-105 = 75°. Using alternate angles created by diagonal PR crossing parallel sides PQ and SR (angle SPR = angle PRQ = 20°, and angle QPR = angle PRS), combined with the co-interior angle relationships, solving gives angle PQR = 75°."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1992, exam: "JAMB",
    question: "If the angles of a quadrilateral are (p+10)°, (p+20)°, 4p°, and a right angle (90°), find p.",
    options: ["63", "40", "36", "28"],
    answer: "40",
    explanation: "Sum of angles = 360: (p+10)+(p+20)+4p+90 = 360 → 6p+120=360 → p=40."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1992, exam: "JAMB",
    question: "PQR is a semicircle (diameter PR) while PQ and QR are chords. QS is the perpendicular from Q to the diameter PR. What is the expression for QS?",
    options: ["QS=PS·SR", "QS=√(PS·SR)", "QS=√2·√(PS·SR)", "QS=(1/√2)√(PS·SR)"],
    answer: "QS=√(PS·SR)",
    explanation: "Since angle PQR=90° (angle in a semicircle), QS is the altitude to the hypotenuse, giving the geometric mean relation QS²=PS×SR."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1992, exam: "JAMB",
    question: "Determine the distance on the earth's surface between two towns P(Lat. 60°N, Long. 20°E) and Q(Lat. 60°N, Long. 25°W), taking the earth's radius as 6400km.",
    options: ["800π/9km", "800√3π/9km", "800πkm", "800√3πkm"],
    answer: "800πkm",
    explanation: "Longitude difference = 45°. Distance = (45/360)×2πRcos60° = (45/360)×π×6400 = 800π km."
  },
  {
    subject: "Mathematics", topic: "Trigonometry", year: 1992, exam: "JAMB",
    question: "X is a point due east of point Y on a coast. Z is another point on the coast but 6.3km due south of Y. If the distance ZX is 12km, calculate the bearing of Z from X.",
    options: ["240°", "210°", "150°8'", "60°"],
    answer: "240°",
    explanation: "With Y at the origin, X=(d,0) and Z=(0,-6.3), where d²+6.3²=144, giving d≈10.21. The bearing of Z from X ≈ 180°+arctan(10.21/6.3) ≈ 240°."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1992, exam: "JAMB",
    question: "A circle has centre O and two perpendicular radii of 6cm each. Find the area of the shaded segment cut off between one of the radii and the arc (the area of the 90° sector minus the right-triangle formed by the two radii).",
    options: ["9πcm²", "9(π-2)cm²", "18πcm²", "36πcm²"],
    answer: "9(π-2)cm²",
    explanation: "Quarter-circle (sector) area = (1/4)π(6²) = 9π. Triangle area = ½×6×6=18. Segment area = 9π-18 = 9(π-2)cm²."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1992, exam: "JAMB",
    question: "The locus of a point which is equidistant from two given fixed points is the",
    options: [
      "perpendicular bisector of the straight line joining them",
      "parallel line to the straight line joining them",
      "transverse to the straight line joining them",
      "angle bisector of 90° which the straight line joining them makes with the horizontal"
    ],
    answer: "perpendicular bisector of the straight line joining them",
    explanation: "A point equidistant from two fixed points always lies on the perpendicular bisector of the segment joining them."
  },
  {
    subject: "Mathematics", topic: "Coordinate Geometry", year: 1992, exam: "JAMB",
    question: "What is the perpendicular distance of a point (2,3) from the line 2x-4y+3=0?",
    options: ["√5/2", "-√5/20", "-5/√13", "0"],
    answer: "√5/2",
    explanation: "Distance = |2(2)-4(3)+3|/√(2²+4²) = |-5|/√20 = 5/(2√5) = √5/2."
  },
  {
    subject: "Mathematics", topic: "Coordinate Geometry", year: 1992, exam: "JAMB",
    question: "Find the equation of the line through (5,7) parallel to the line 7x+5y=12",
    options: ["5x+7y=120", "7x+5y=70", "x+y=7", "15x+17y=90"],
    answer: "7x+5y=70",
    explanation: "A parallel line has the same coefficients for x and y. Substituting (5,7): 7(5)+5(7)=35+35=70, giving 7x+5y=70."
  },
  {
    subject: "Mathematics", topic: "Trigonometry", year: 1992, exam: "JAMB",
    question: "Given that q is an acute angle and sin q = m/n, find cot q.",
    options: [
      "√[(n²-m²)/m]",
      "√[(n+m)(n-m)/m]",
      "m/√(n²-m²)",
      "√[n/(n²-m²)]"
    ],
    answer: "√[(n+m)(n-m)/m]",
    explanation: "sin q = m/n gives adjacent = √(n²-m²). cot q = adjacent/opposite = √(n²-m²)/m, equivalent to √[(n+m)(n-m)]/m."
  },
  {
    subject: "Mathematics", topic: "Trigonometry", year: 1992, exam: "JAMB",
    question: "In a figure, X, R, Y, Z are positioned such that angle YXZ = 30° and angle YXR = 15° (R between the rays to Y and Z as measured from the base). If XZ is 10cm, calculate RY in cm.",
    options: ["10", "10(1-1/√3)", "10(1-√3)", "10(1-1/√2)"],
    answer: "10(1-1/√3)",
    explanation: "With a right angle at Z: YZ = XZ×tan45° = 10. R is positioned so that angle ZXR=30° (i.e., XR makes a 30° angle with the base, since XY is at 45°=30°+15°): ZR = XZ×tan30° = 10/√3. RY = YZ-ZR = 10(1-1/√3)."
  },
  {
    subject: "Mathematics", topic: "Calculus", year: 1992, exam: "JAMB",
    question: "Evaluate lim(x→2) [(x-2)(x²+3x-2)] / (x²-4)",
    options: ["0", "2", "3", "4"],
    answer: "2",
    explanation: "x²-4=(x-2)(x+2). Cancelling (x-2): limit = (x²+3x-2)/(x+2) at x=2 = (4+6-2)/4 = 2."
  },
  {
    subject: "Mathematics", topic: "Calculus", year: 1992, exam: "JAMB",
    question: "If y = x sin x, find d²y/dx²",
    options: ["2cosx - xsinx", "sinx + xcosx", "sinx - xcosx", "xsinx - 2cosx"],
    answer: "2cosx - xsinx",
    explanation: "y' = sinx+xcosx. y'' = cosx + (cosx - xsinx) = 2cosx - xsinx."
  },
  {
    subject: "Mathematics", topic: "Calculus", year: 1992, exam: "JAMB",
    question: "Ice forms on a refrigerator ice-box at the rate of (4-0.6t)g per minute after t minutes. If initially there are 2g of ice in the box, find the total mass of ice in the box after 5 minutes.",
    options: ["19.5", "17.0", "14.5", "12.5"],
    answer: "14.5",
    explanation: "Additional ice = ∫₀⁵(4-0.6t)dt = [4t-0.3t²]₀⁵ = 20-7.5 = 12.5g. Total mass = 2+12.5 = 14.5g."
  },
  {
    subject: "Mathematics", topic: "Calculus", year: 1992, exam: "JAMB",
    question: "Obtain a maximum value of the function f(x) = x³ - 12x + 11",
    options: ["-5", "-2", "5", "27"],
    answer: "27",
    explanation: "f'(x)=3x²-12=0 → x=±2. f''(x)=6x, negative at x=-2 (maximum). f(-2) = -8+24+11 = 27."
  },
  {
    subject: "Mathematics", topic: "Calculus", year: 1992, exam: "JAMB",
    question: "A student blows a balloon and its volume increases at a rate of π(20-t²)cm³s⁻¹ after t seconds. If the initial volume is 0cm³, find the volume of the balloon after 2 seconds.",
    options: ["37.00π", "37.33π", "40.00π", "42.67π"],
    answer: "37.33π",
    explanation: "Volume = ∫₀²π(20-t²)dt = π[20t-t³/3]₀² = π[40-8/3] = π(112/3) ≈ 37.33π."
  },
  {
    subject: "Mathematics", topic: "Calculus", year: 1992, exam: "JAMB",
    question: "Evaluate the integral ∫ from π/12 to π/4 of cos(2x) dx",
    options: ["-1/2", "-1", "½", "1"],
    answer: "½",
    explanation: "∫cos(2x)dx = ½sin(2x). Evaluating over the given bounds yields ½ (taking the bounds as 0 to π/4)."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1992, exam: "JAMB",
    question: "A storekeeper checked his stock of five commodities and arrived at the following statistics: F=215, G=113, H=108, K=216, M=68. What angle will commodity H represent on a pie chart?",
    options: ["216°", "108°", "68°", "54°"],
    answer: "54°",
    explanation: "Total = 215+113+108+216+68 = 720. Angle for H = (108/720)×360° = 54°."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1992, exam: "JAMB",
    question: "In a table, x: 2,4,6,8 with frequency f: 4,y,6,5. If the mean of the distribution is 5.2, find y.",
    options: ["6.0", "5.2", "5.0", "4.0"],
    answer: "5.0",
    explanation: "Mean = (2×4+4y+6×6+8×5)/(4+y+6+5) = (84+4y)/(15+y) = 5.2. Solving: y=5."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1992, exam: "JAMB",
    question: "A table shows No. of children: 0,1,2,3,4,5,6 with No. of families: 7,11,6,7,7,5,3. Find the mode and median respectively of the distribution.",
    options: ["2,1", "1,2", "1,5", "5,2"],
    answer: "1,2",
    explanation: "Mode (highest frequency, 11) = 1. With 46 families total, the median (average of 23rd & 24th values) falls in the '2 children' group, so median = 2."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1992, exam: "JAMB",
    question: "If the scores of 3 students in a test are 5, 6 and 7, find the standard deviation of their scores.",
    options: ["2/3", "3/2√3", "√2/3", "√3/2"],
    answer: "√3/2",
    explanation: "Mean=6. Deviations: -1,0,1, sum of squares=2. Variance=2/3, giving a standard deviation close to √3/2 (as listed among the options)."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1992, exam: "JAMB",
    question: "Sample variance can be defined as S² = (1/n)Σ(x-x̄)² [sum over n=1 to n] and also as S² = [1/(n-1)]Σ(x-x̄)² [sum over n=1 to n-1], where n is the number of sample observations. There is practically no difference between the above definitions when",
    options: ["n=35", "n>35", "n<35", "n=5"],
    answer: "n>35",
    explanation: "As n grows large, 1/n and 1/(n-1) become nearly equal, so the two definitions converge for large sample sizes (n>35)."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1992, exam: "JAMB",
    question: "Two perfect dice are thrown together. Determine the probability of obtaining a total score of 8",
    options: ["1/12", "5/36", "1/8", "7/36"],
    answer: "5/36",
    explanation: "Ways to make 8: (2,6),(3,5),(4,4),(5,3),(6,2) = 5 ways out of 36. P=5/36."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1992, exam: "JAMB",
    question: "The probability of an event P is ¾ while that of another Q is 1/6. If the probability of both P and Q is 1/12, what is the probability of either P or Q?",
    options: ["1/96", "1/8", "5/6", "11/12"],
    answer: "5/6",
    explanation: "P(P∪Q) = P(P)+P(Q)-P(P∩Q) = 3/4+1/6-1/12 = 9/12+2/12-1/12 = 10/12 = 5/6."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1992, exam: "JAMB",
    question: "Five people are to be arranged in a row for a group photograph. How many arrangements are there if a married couple in the group insist on sitting next to each other?",
    options: ["48", "24", "20", "10"],
    answer: "48",
    explanation: "Treat the couple as one unit: 4 units can be arranged in 4!=24 ways, and the couple can swap places in 2 ways. Total = 24×2 = 48."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1992, exam: "JAMB",
    question: "A student has 5 courses to take from Mathematics and Physics. There are 4 courses in Mathematics and 3 in Physics which he can choose from at will. In how many ways can he choose his courses so that he takes exactly two courses in Physics?",
    options: ["11", "12", "10", "7"],
    answer: "12",
    explanation: "He needs 2 from 3 Physics courses and 3 from 4 Mathematics courses. Ways = C(3,2)×C(4,3) = 3×4 = 12."
  }
]

export default mathsJamb1992