// JAMB 1992 Mathematics Past Questions (audited)
// Source had 50 questions. 3 were skipped (diagrams, or source text too garbled/ambiguous to transcribe reliably).
// Two more (the trapezium angle question and the X, R, Y, Z triangle question) are commented out below because their text is too garbled to solve.
// Display notes: no ₙ ⁻ ⁿ glyphs, no ∪ ∩ ∅ ∫ symbols, no arrows, no U+2212 minus; powers typed as ^(...) for MathText.
// Items marked "// CHECK SOURCE" need the owner to verify against the original paper.

const mathsJamb1992 = [

  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1992, exam: "JAMB",
    question: "Find the base n if the number 34 in base n is equal to 10011₂",
    options: ["5", "6", "7", "8"],
    answer: "5",
    explanation: "10011₂ = 16 + 2 + 1 = 19 in base 10. Also 34 in base n is 3n + 4. So 3n + 4 = 19, which gives 3n = 15 and n = 5."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1992, exam: "JAMB",
    question: "The radius of a circle is given as 5cm subject to an error of 0.1cm. What is the percentage error in the area of the circle?",
    options: ["1/25", "¼", "4", "25"],
    answer: "4",
    explanation: "The area is proportional to r², so its percentage error is about 2 times the percentage error in the radius: 2 × (0.1/5 × 100) = 2 × 2% = 4%."
  },
  {
    // CHECK SOURCE: options 3 and 4 were both "1/n". I changed option 4 to "1/n²" so no option is repeated.
    subject: "Mathematics", topic: "Algebra", year: 1992, exam: "JAMB",
    question: "Evaluate the logarithm of a^(n) to the base b, if b = a^(1/n)",
    options: ["n²", "n", "1/n", "1/n²"],
    answer: "n²",
    explanation: "The logarithm of a^(n) to the base a^(1/n) is n ÷ (1/n) = n²."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1992, exam: "JAMB",
    question: "What is the value of x satisfying the equation 4^(2x) ÷ 4^(3x) = 2?",
    options: ["-2", "-1/2", "½", "2"],
    answer: "-1/2",
    explanation: "4^(2x - 3x) = 2, so 4^(-x) = 2. Then 2^(-2x) = 2^(1), so -2x = 1 and x = -1/2."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1992, exam: "JAMB",
    question: "Simplify: [(1.25 × 10^(4)) × (2.0 × 10^(-1))] / (6.25 × 10^(5))",
    options: ["4.0 × 10^(-3)", "5.0 × 10^(-2)", "2.0 × 10^(-1)", "5.0 × 10^(3)"],
    answer: "4.0 × 10^(-3)",
    explanation: "The numerator = 2.5 × 10^(3). Dividing by 6.25 × 10^(5) gives (2.5/6.25) × 10^(-2) = 0.4 × 10^(-2) = 4.0 × 10^(-3)."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1992, exam: "JAMB",
    question: "Simplify: 5√18 - 3√72 + 4√50",
    options: ["17√4", "4√17", "17√2", "12√4"],
    answer: "17√2",
    explanation: "5√18 = 15√2, 3√72 = 18√2 and 4√50 = 20√2. The sum is 15√2 - 18√2 + 20√2 = 17√2."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1992, exam: "JAMB",
    question: "If x = 3 - √3, find x² + 36/x²",
    options: ["9", "18", "24", "27"],
    answer: "24",
    explanation: "x² = 9 - 6√3 + 3 = 12 - 6√3. Then 36/x² = 36/(12 - 6√3) = 6/(2 - √3) = 6(2 + √3) = 12 + 6√3 after rationalizing. The sum is (12 - 6√3) + (12 + 6√3) = 24."
  },
  {
    subject: "Mathematics", topic: "Sets & Venn Diagrams", year: 1992, exam: "JAMB",
    question: "If x = {all prime factors of 44} and y = {all prime factors of 60}, the elements of the union of x and y, and of the intersection of x and y, respectively are",
    options: ["{2,4,3,5,11} and {4}", "{4,3,5,11} and {3,4}", "{2,5,11} and {2}", "{2,3,5,11} and {2}"],
    answer: "{2,3,5,11} and {2}",
    explanation: "The prime factors of 44 are {2, 11} and those of 60 are {2, 3, 5}. The union is {2, 3, 5, 11} and the intersection is {2}."
  },
  {
    // CHECK SOURCE: options 3 and 4 were printed "C" and "f", which are garbled (probably the empty-set symbol). I read option 4 as "the empty set" and option 3 as "E".
    // Note also that E = {0,4,6,8} contains 4, which is not in U. This does not change the answer, so the question is left as printed.
    subject: "Mathematics", topic: "Sets & Venn Diagrams", year: 1992, exam: "JAMB",
    question: "If U = {0,2,3,6,7,8,9,10} is the universal set, E = {0,4,6,8} and F = {x: x² ≤ 2^(6), x is odd}, find the complement of the intersection of E and F.",
    options: ["{0}", "U", "E", "the empty set"],
    answer: "U",
    explanation: "The odd elements of U with x² ≤ 64 are 3 and 7, so F = {3, 7}. E and F have no common element, so their intersection is the empty set. The complement of the empty set is the whole universal set U."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1992, exam: "JAMB",
    question: "Make t the subject of the formula s = ut + ½at²",
    options: [
      "t = (1/a)[u ± √(u²-2as)]",
      "t = (1/a)[-u ± √(u²-2as)]",
      "t = (1/a)[u ± √(u²+2as)]",
      "t = (1/a)[-u ± √(u²+2as)]"
    ],
    answer: "t = (1/a)[-u ± √(u²+2as)]",
    explanation: "Write it as a quadratic in t: ½at² + ut - s = 0. By the quadratic formula, t = [-u ± √(u² + 2as)]/a."
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
    explanation: "9p² - (q² - 6qr + 9r²) = (3p)² - (q - 3r)² = [3p - (q - 3r)][3p + (q - 3r)] = (3p - q + 3r)(3p + q - 3r)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1992, exam: "JAMB",
    question: "Solve the equation y - 11√y + 24 = 0",
    options: ["8,3", "64,9", "6,4", "9,-8"],
    answer: "64,9",
    explanation: "Let u = √y. Then u² - 11u + 24 = 0, so (u - 8)(u - 3) = 0, so u = 8 or 3. So y = 64 or 9."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1992, exam: "JAMB",
    question: "A man invested a sum of ₦280.00 partly at 5% and partly at 4%. If the total interest is ₦12.80 per annum, find the amount invested at 5%.",
    options: ["₦14.00", "₦120.00", "₦140.00", "₦160.00"],
    answer: "₦160.00",
    explanation: "Let x be the amount at 5%. Then 0.05x + 0.04(280 - x) = 12.80, so 0.01x + 11.20 = 12.80, so x = 160."
  },
  {
    // CHECK SOURCE: the options were printed "6, 6, 8, 8" (two pairs of duplicates). I read them as 6, -6, 8, -8 (lost minus signs).
    subject: "Mathematics", topic: "Algebra", year: 1992, exam: "JAMB",
    question: "If x+1 is a factor of x³+3x²+kx+4, find the value of k",
    options: ["6", "-6", "8", "-8"],
    answer: "6",
    explanation: "Put x = -1: -1 + 3 - k + 4 = 0, so 6 - k = 0 and k = 6."
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
    explanation: "x² + x - 2 = (x + 2)(x - 1). Write 3/[(x+2)(x-1)] = A/(x+2) + B/(x-1), so 3 = A(x - 1) + B(x + 2). Put x = 1 to get B = 1, and x = -2 to get A = -1. So the result is 1/(x-1) - 1/(x+2)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1992, exam: "JAMB",
    question: "Find all values of x satisfying the inequality -11 ≤ 4 - 3x ≤ 28",
    options: ["-5 ≤ x ≤ 18", "5 ≤ x ≤ 8", "-8 ≤ x ≤ 5", "-5 < x ≤ 8"],
    answer: "-8 ≤ x ≤ 5",
    explanation: "-11 ≤ 4 - 3x gives x ≤ 5. And 4 - 3x ≤ 28 gives x ≥ -8. So -8 ≤ x ≤ 5."
  },
  {
    // CHECK SOURCE: the original used a sketch. I added the y-intercept (-4) from the old explanation so that the question has one answer.
    subject: "Mathematics", topic: "Coordinate Geometry", year: 1992, exam: "JAMB",
    question: "A curve y = ax² + bx + c opens upward, crosses the x-axis at x = -1 and x = 2, and cuts the y-axis at y = -4. Find a, b and c respectively.",
    options: ["1,0,-4", "-2,2,-4", "0,1,-4", "2,-2,-4"],
    answer: "2,-2,-4",
    explanation: "With roots -1 and 2, y = a(x + 1)(x - 2) = a(x² - x - 2). The y-intercept is c = -2a = -4, so a = 2 and b = -a = -2."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1992, exam: "JAMB",
    question: "Find the sum of the infinity of the following series: 3 + 2 + 4/3 + 8/9 + 16/27 + ...",
    options: ["1270", "190", "18", "9"],
    answer: "9",
    explanation: "This is a GP with a = 3 and r = 2/3. The sum to infinity = a/(1 - r) = 3/(1/3) = 9."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1992, exam: "JAMB",
    question: "What is the nth term of the sequence 2, 6, 12, 20, ...?",
    options: ["4n-2", "2(3n-1)", "n²+n", "n²+3n+2"],
    answer: "n²+n",
    explanation: "Testing n² + n for n = 1, 2, 3, 4 gives 2, 6, 12, 20, which matches the sequence."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1992, exam: "JAMB",
    question: "For an arithmetic sequence, the first term is 2 and the common difference is 3. Find the sum of the first 11 terms.",
    options: ["157", "187", "197", "200"],
    answer: "187",
    explanation: "Sum = (n/2)[2a + (n-1)d] = (11/2)[4 + 10(3)] = (11/2)(34) = 187."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1992, exam: "JAMB",
    question: "If the binary operation * is defined by m*n = mn+m+n for any real number m and n, find the identity element under this operation.",
    options: ["e=1", "e=-1", "e=-2", "e=0"],
    answer: "e=0",
    explanation: "For m*e = m we need me + m + e = m, so e(m + 1) = 0 for all m. So e = 0."
  },

  /* REMOVED UNTIL CHECKED AGAINST SOURCE: the trapezium question. Its text was garbled ("diagonals PQ, SR... [figure]"). With only angle TSP = 105 degrees and angle PRQ = 20 degrees,
     the angle PQR cannot be worked out, and the old explanation was hand-waving. The marked answer was 75 degrees (options were 130, 120, 75, 30).
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1992, exam: "JAMB",
    question: "(needs the original wording)",
    options: ["130°", "120°", "75°", "30°"],
    answer: "75°",
    explanation: ""
  },
  */

  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1992, exam: "JAMB",
    question: "If the angles of a quadrilateral are (p+10)°, (p+20)°, 4p°, and a right angle (90°), find p.",
    options: ["63", "40", "36", "28"],
    answer: "40",
    explanation: "The angles sum to 360°: (p + 10) + (p + 20) + 4p + 90 = 360, so 6p + 120 = 360 and p = 40."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1992, exam: "JAMB",
    question: "PQR is a semicircle on the diameter PR, with PQ and QR as chords. S is the point on PR such that QS is perpendicular to PR. What is the expression for QS?",
    options: ["QS=PS·SR", "QS=√(PS·SR)", "QS=√2·√(PS·SR)", "QS=(1/√2)√(PS·SR)"],
    answer: "QS=√(PS·SR)",
    explanation: "Angle PQR = 90° (angle in a semicircle), so QS is the altitude to the hypotenuse of a right triangle. This gives QS² = PS × SR, so QS = √(PS·SR)."
  },
  {
    // CHECK SOURCE: I added "measured along the parallel of latitude". Only that reading gives an option (800π km).
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1992, exam: "JAMB",
    question: "Determine the distance on the earth's surface between two towns P(Lat. 60°N, Long. 20°E) and Q(Lat. 60°N, Long. 25°W), measured along the parallel of latitude, taking the earth's radius as 6400km.",
    options: ["800π/9km", "800√3π/9km", "800πkm", "800√3πkm"],
    answer: "800πkm",
    explanation: "The longitude difference is 20° + 25° = 45°. Distance = (45/360) × 2πR cos 60° = (1/8) × 2π × 6400 × ½ = 800π km."
  },
  {
    // CHECK SOURCE: ZX was printed as 12km, which gives a bearing of 238.3 degrees. 12.6km (6.3 is exactly half of it) gives exactly 240 degrees, the marked answer, so I assumed a misread.
    subject: "Mathematics", topic: "Trigonometry", year: 1992, exam: "JAMB",
    question: "X is a point due east of point Y on a coast. Z is another point on the coast but 6.3km due south of Y. If the distance ZX is 12.6km, calculate the bearing of Z from X.",
    options: ["240°", "210°", "150°8'", "60°"],
    answer: "240°",
    explanation: "In the right triangle XYZ, sin(angle ZXY) = ZY/ZX = 6.3/12.6 = ½, so angle ZXY = 30°. Z lies south-west of X, so the bearing of Z from X is 270° - 30° = 240°."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1992, exam: "JAMB",
    question: "A circle has centre O and two radii of length 6cm which are perpendicular to each other. Find the area of the segment cut off by the chord joining the ends of the two radii.",
    options: ["9πcm²", "9(π-2)cm²", "18πcm²", "36πcm²"],
    answer: "9(π-2)cm²",
    explanation: "The sector with angle 90° has area (1/4)π(6²) = 9π. The right triangle formed by the two radii has area ½ × 6 × 6 = 18. The segment = 9π - 18 = 9(π - 2)cm²."
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
    explanation: "Distance = |2(2) - 4(3) + 3|/√(2² + 4²) = |-5|/√20 = 5/(2√5) = √5/2."
  },
  {
    subject: "Mathematics", topic: "Coordinate Geometry", year: 1992, exam: "JAMB",
    question: "Find the equation of the line through (5,7) parallel to the line 7x+5y=12",
    options: ["5x+7y=120", "7x+5y=70", "x+y=7", "15x+17y=90"],
    answer: "7x+5y=70",
    explanation: "A parallel line has the same x and y coefficients. Putting in (5, 7): 7(5) + 5(7) = 35 + 35 = 70, so the line is 7x + 5y = 70."
  },
  {
    // CHECK SOURCE: options 1 and 2 were both printed as the square root of (n²-m²)/m, which are the same value and both wrong. I put the bracket on option 2 correctly,
    // as √[(n+m)(n-m)]/m (the marked answer), and replaced option 1 with the cosine, √(n²-m²)/n.
    subject: "Mathematics", topic: "Trigonometry", year: 1992, exam: "JAMB",
    question: "Given that q is an acute angle and sin q = m/n, find cot q.",
    options: [
      "√(n²-m²)/n",
      "√[(n+m)(n-m)]/m",
      "m/√(n²-m²)",
      "√[n/(n²-m²)]"
    ],
    answer: "√[(n+m)(n-m)]/m",
    explanation: "sin q = m/n, so the adjacent side = √(n² - m²). Then cot q = adjacent/opposite = √(n² - m²)/m = √[(n+m)(n-m)]/m."
  },

  /* REMOVED UNTIL CHECKED AGAINST SOURCE: the X, R, Y, Z triangle question. The text said angle YXZ = 30 degrees and angle YXR = 15 degrees, but the old explanation needed
     angle ZXY = 45 degrees and angle ZXR = 30 degrees, so the angles were misread and it depends on a figure. The marked answer was 10(1 - 1/√3).
  {
    subject: "Mathematics", topic: "Trigonometry", year: 1992, exam: "JAMB",
    question: "(needs the original wording)",
    options: ["10", "10(1-1/√3)", "10(1-√3)", "10(1-1/√2)"],
    answer: "10(1-1/√3)",
    explanation: ""
  },
  */

  {
    subject: "Mathematics", topic: "Calculus", year: 1992, exam: "JAMB",
    question: "Evaluate the limit, as x tends to 2, of [(x-2)(x²+3x-2)] / (x²-4)",
    options: ["0", "2", "3", "4"],
    answer: "2",
    explanation: "x² - 4 = (x - 2)(x + 2). Cancel (x - 2) to get (x² + 3x - 2)/(x + 2). At x = 2 this is (4 + 6 - 2)/4 = 2."
  },
  {
    subject: "Mathematics", topic: "Calculus", year: 1992, exam: "JAMB",
    question: "If y = x sin x, find d²y/dx²",
    options: ["2cosx - xsinx", "sinx + xcosx", "sinx - xcosx", "xsinx - 2cosx"],
    answer: "2cosx - xsinx",
    explanation: "y' = sin x + x cos x. Then y'' = cos x + (cos x - x sin x) = 2 cos x - x sin x."
  },
  {
    subject: "Mathematics", topic: "Calculus", year: 1992, exam: "JAMB",
    question: "Ice forms on a refrigerator ice-box at the rate of (4-0.6t)g per minute after t minutes. If initially there are 2g of ice in the box, find the total mass of ice in the box after 5 minutes.",
    options: ["19.5", "17.0", "14.5", "12.5"],
    answer: "14.5",
    explanation: "The ice added is found by integrating (4 - 0.6t) from t = 0 to t = 5: [4t - 0.3t²] = 20 - 7.5 = 12.5g. The total mass is 2 + 12.5 = 14.5g."
  },
  {
    subject: "Mathematics", topic: "Calculus", year: 1992, exam: "JAMB",
    question: "Obtain a maximum value of the function f(x) = x³ - 12x + 11",
    options: ["-5", "-2", "5", "27"],
    answer: "27",
    explanation: "f'(x) = 3x² - 12 = 0 gives x = ±2. f''(x) = 6x, which is negative at x = -2, so that is a maximum. f(-2) = -8 + 24 + 11 = 27."
  },
  {
    subject: "Mathematics", topic: "Calculus", year: 1992, exam: "JAMB",
    question: "A student blows a balloon and its volume increases at a rate of π(20-t²) cm³ per second after t seconds. If the initial volume is 0cm³, find the volume of the balloon after 2 seconds.",
    options: ["37.00π", "37.33π", "40.00π", "42.67π"],
    answer: "37.33π",
    explanation: "Volume = π[20t - t³/3] from t = 0 to t = 2 = π(40 - 8/3) = π(112/3), which is about 37.33π."
  },
  {
    // CHECK SOURCE: the lower limit was printed as π/12, which gives 1/4 (not an option). With a lower limit of 0 the answer is exactly 1/2, the marked answer, so I assumed a misread.
    subject: "Mathematics", topic: "Calculus", year: 1992, exam: "JAMB",
    question: "Evaluate the integral of cos(2x) dx from x = 0 to x = π/4",
    options: ["-1/2", "-1", "½", "1"],
    answer: "½",
    explanation: "The integral of cos 2x is ½ sin 2x. At x = π/4 this is ½ sin(π/2) = ½, and at x = 0 it is 0. So the value is ½."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1992, exam: "JAMB",
    question: "A storekeeper checked his stock of five commodities and arrived at the following statistics: F=215, G=113, H=108, K=216, M=68. What angle will commodity H represent on a pie chart?",
    options: ["216°", "108°", "68°", "54°"],
    answer: "54°",
    explanation: "The total = 215 + 113 + 108 + 216 + 68 = 720. The angle for H = (108/720) × 360° = 54°."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1992, exam: "JAMB",
    question: "The table shows x: 2, 4, 6, 8 with frequency f: 4, y, 6, 5. If the mean of the distribution is 5.2, find y.",
    options: ["6.0", "5.2", "5.0", "4.0"],
    answer: "5.0",
    explanation: "Mean = (2×4 + 4y + 6×6 + 8×5)/(4 + y + 6 + 5) = (84 + 4y)/(15 + y) = 5.2. So 84 + 4y = 78 + 5.2y, which gives 1.2y = 6 and y = 5."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1992, exam: "JAMB",
    question: "The table shows the number of children in a group of families. Number of children: 0, 1, 2, 3, 4, 5, 6. Number of families: 7, 11, 6, 7, 7, 5, 3. Find the mode and median respectively of the distribution.",
    options: ["2,1", "1,2", "1,5", "5,2"],
    answer: "1,2",
    explanation: "The mode is the value with the highest frequency (11), which is 1 child. There are 46 families, so the median is the average of the 23rd and 24th values. The running totals are 7, 18, 24, so both fall in the group with 2 children. The median is 2."
  },
  {
    // CHECK SOURCE: the old answer was √3/2 (about 0.866), but the standard deviation of 5, 6, 7 is √(2/3) (about 0.816). The old explanation admitted it was only "close". Option 3 was printed "√2/3",
    // which I read as √(2/3) and made the answer. Option 2 was printed "3/2√3", which I wrote as 3/(2√3) (equal to √3/2, a wrong option).
    subject: "Mathematics", topic: "Statistics & Probability", year: 1992, exam: "JAMB",
    question: "If the scores of 3 students in a test are 5, 6 and 7, find the standard deviation of their scores.",
    options: ["2/3", "3/(2√3)", "√(2/3)", "√3/2"],
    answer: "√(2/3)",
    explanation: "The mean is 6. The deviations are -1, 0 and 1, so the sum of squares is 2. The variance = 2/3, so the standard deviation = √(2/3), which is about 0.816."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1992, exam: "JAMB",
    question: "Sample variance can be defined as S² = (1/n) × Σ(x - mean)² and also as S² = [1/(n-1)] × Σ(x - mean)², where each sum is over all the observations and n is the number of sample observations. There is practically no difference between the two definitions when",
    options: ["n=35", "n>35", "n<35", "n=5"],
    answer: "n>35",
    explanation: "As n gets large, 1/n and 1/(n-1) become nearly equal, so the two definitions agree for large samples (n greater than 35)."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1992, exam: "JAMB",
    question: "Two perfect dice are thrown together. Determine the probability of obtaining a total score of 8",
    options: ["1/12", "5/36", "1/8", "7/36"],
    answer: "5/36",
    explanation: "The ways to make 8 are (2,6), (3,5), (4,4), (5,3) and (6,2), which is 5 ways out of 36. So P = 5/36."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1992, exam: "JAMB",
    question: "The probability of an event P is ¾ while that of another Q is 1/6. If the probability of both P and Q is 1/12, what is the probability of either P or Q?",
    options: ["1/96", "1/8", "5/6", "11/12"],
    answer: "5/6",
    explanation: "P(P or Q) = P(P) + P(Q) - P(P and Q) = 3/4 + 1/6 - 1/12 = 9/12 + 2/12 - 1/12 = 10/12 = 5/6."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1992, exam: "JAMB",
    question: "Five people are to be arranged in a row for a group photograph. How many arrangements are there if a married couple in the group insist on sitting next to each other?",
    options: ["48", "24", "20", "10"],
    answer: "48",
    explanation: "Treat the couple as one unit. The 4 units can be arranged in 4! = 24 ways, and the couple can swap places in 2 ways. The total is 24 × 2 = 48."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1992, exam: "JAMB",
    question: "A student has 5 courses to take from Mathematics and Physics. There are 4 courses in Mathematics and 3 in Physics which he can choose from at will. In how many ways can he choose his courses so that he takes exactly two courses in Physics?",
    options: ["11", "12", "10", "7"],
    answer: "12",
    explanation: "He needs 2 of the 3 Physics courses and 3 of the 4 Mathematics courses. The number of ways = C(3,2) × C(4,3) = 3 × 4 = 12."
  }
]

export default mathsJamb1992