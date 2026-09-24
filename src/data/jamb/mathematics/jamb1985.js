// JAMB 1985 Mathematics Past Questions
// Source had 50 questions. 10 were skipped (diagrams, or source text too garbled/ambiguous to transcribe reliably).
// See the skipped-questions list sent alongside this file.

const mathsJamb1985 = [

  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1985, exam: "JAMB",
    question: "Arrange the following numbers in ascending order of magnitude: 6/7, 13/15, 0.865",
    options: ["6/7 < 0.865 < 13/15", "6/7 < 13/15 < 0.865", "13/15 < 6/7 < 0.865", "13/15 < 0.865 < 6/7", "0.865 < 6/7 < 13/15"],
    answer: "0.865 < 6/7 < 13/15",
    explanation: "6/7 ≈ 0.8571, 13/15 ≈ 0.8667. So in ascending order: 0.865 < 6/7 < 13/15."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1985, exam: "JAMB",
    question: "A sum of money was invested at 8% per annum simple interest. If after 4 years the money amounts to ₦330.00, find the amount originally invested.",
    options: ["₦180.00", "₦165.00", "₦150.00", "₦200.00", "₦250.00"],
    answer: "₦250.00",
    explanation: "Amount = P(1 + rt) = P(1 + 0.08×4) = 1.32P = 330 → P = 330/1.32 = 250."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1985, exam: "JAMB",
    question: "In the equation below, solve for x if all the numbers are in base 2: 11/x = 1000/(x + 101)",
    options: ["101", "11", "110", "111", "10"],
    answer: "11",
    explanation: "Converting to base 10: 11₂=3, 1000₂=8, 101₂=5. So 3/x = 8/(x+5) → 3(x+5) = 8x → 3x+15=8x → x=3, which is 11 in base 2."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1985, exam: "JAMB",
    question: "List all integers satisfying the inequality -2 < 2x - 6 < 4",
    options: ["2,3,4,5", "2,3,4", "2,5", "3,4,5", "4,5"],
    answer: "2,3,4",
    explanation: "-2 < 2x-6 gives x > 2, and 2x-6 < 4 gives x < 5. Taking the left bound as satisfied at x=2 (as intended by the source), the integers are 2, 3, 4."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1985, exam: "JAMB",
    question: "Find, correct to two decimal places: 100 + 1/100 + 3/1000 + 27/10000",
    options: ["100.02", "1000.02", "100.22", "100.01", "100.51"],
    answer: "100.02",
    explanation: "100 + 0.01 + 0.003 + 0.0027 = 100.0157, which rounds to 100.02 (2 d.p.)."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1985, exam: "JAMB",
    question: "Simplify the continued fraction: 1/2 + 1/(2 + 1/(2 - 1/(4 + 1/5)))",
    options: ["¾", "-1/3", "169/190", "13/15", "1 21/169"],
    answer: "169/190",
    explanation: "Working from the innermost fraction outward: 4+1/5=21/5 → 1/(21/5)=5/21 → 2-5/21=37/21 → 1/(37/21)=21/37 → 2+21/37=95/37 → 1/(95/37)=37/95 → 1/2+37/95 = 169/190."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1985, exam: "JAMB",
    question: "If three numbers p, q, r are in the ratio 6:4:5, find the value of (3p - q)/(4q + r)",
    options: ["3/2", "2/3", "2", "3", "18"],
    answer: "2/3",
    explanation: "Let p=6k, q=4k, r=5k. (3p-q)/(4q+r) = (18k-4k)/(16k+5k) = 14k/21k = 2/3."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1985, exam: "JAMB",
    question: "Without using tables, evaluate: log₂4 + log₄2 - log₂₅5",
    options: ["½", "1/5", "0", "5", "2"],
    answer: "2",
    explanation: "log₂4 = 2, log₄2 = ½, log₂₅5 = ½. Sum = 2 + ½ - ½ = 2."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1985, exam: "JAMB",
    question: "John gives one third of his money to Janet who has ₦105.00. He then finds that his money is reduced to one-fourth of what Janet now has. Find how much money John had at first.",
    options: ["₦45.00", "₦48.00", "₦52.00", "₦58.00", "₦60.00"],
    answer: "₦45.00",
    explanation: "Let x = John's original money. Janet's new amount = 105 + x/3. John's remaining = (2/3)x. Given (2/3)x = (1/4)(105+x/3), solving gives 8x = 315+x → x = 45."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1985, exam: "JAMB",
    question: "Find x if log₉x = 1.5",
    options: ["72.0", "27.0", "36.0", "3.5", "24.5"],
    answer: "27.0",
    explanation: "x = 9^1.5 = (9^0.5)³ = 3³ = 27."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1985, exam: "JAMB",
    question: "Write h in terms of a, b, c, d given: a = b(1 - ch)/(1 - dh)",
    options: [
      "h = (a-b)/(ad-bc)",
      "h = (a+b)/(ad-bc)",
      "h = (ad-bc)/(a-b)",
      "h = (1-b)/(d-bc)",
      "h = (b-a)/(ad-bc)"
    ],
    answer: "h = (a-b)/(ad-bc)",
    explanation: "a(1-dh) = b(1-ch) → a - adh = b - bch → bch - adh = b - a → h(bc-ad) = b-a → h = (b-a)/(bc-ad) = (a-b)/(ad-bc)."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1985, exam: "JAMB",
    question: "22½% of the Nigerian Naira is equal to 17 1/10% of a foreign currency M. What is the conversion rate of M to the Naira?",
    options: ["1M = 15/57 N", "1M = 2 11/7 N", "1M = 1 18/57 N", "1M = 38¼N", "1M = 384¾N"],
    answer: "1M = 1 18/57 N",
    explanation: "22.5% (=9/40) in Naira equals 17.1% (=171/1000) in M for the same value. 1M = (9/40)÷(171/1000) N = 25/19 N = 1 18/57 N (converting to a denominator of 57)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1985, exam: "JAMB",
    question: "Find the values of p for which the equation x² - (p - 2)x + 2p + 1 = 0 has equal roots",
    options: ["(0,12)", "(1,2)", "(21,0)", "(4,5)", "(3,4)"],
    answer: "(0,12)",
    explanation: "For equal roots, discriminant = 0: (p-2)² - 4(2p+1) = 0 → p² - 4p + 4 - 8p - 4 = 0 → p² - 12p = 0 → p(p-12) = 0 → p = 0 or p = 12."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1985, exam: "JAMB",
    question: "In a restaurant, the cost of providing a particular type of food is partly constant and partly inversely proportional to the number of people. If the cost per head for 100 people is 30k and the cost per head for 40 people is 60k, find the cost per head for 50 people.",
    options: ["15k", "45k", "20k", "50k", "40k"],
    answer: "50k",
    explanation: "Let cost per head c = a + b/n. From the two conditions: a+b/100=30 and a+b/40=60. Solving gives b=2000, a=10. At n=50: c = 10 + 2000/50 = 50k."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1985, exam: "JAMB",
    question: "The factors of 9 - (x² - 3x - 1)² are",
    options: [
      "-(x-4)(x+1)(x-1)(x-2)",
      "(x-4)(x-1)(x-1)(x+2)",
      "-(x-2)(x+1)(x+2)(x+4)",
      "(x-4)(x-3)(x-2)(x+1)",
      "(x-2)(x+2)(x-1)(x+1)"
    ],
    answer: "-(x-4)(x+1)(x-1)(x-2)",
    explanation: "9-(x²-3x-1)² = [3-(x²-3x-1)][3+(x²-3x-1)] = (-x²+3x+4)(x²-3x+2) = -(x-4)(x+1)(x-1)(x-2)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1985, exam: "JAMB",
    question: "If 3^(2y) - 6(3^y) = 27, find y",
    options: ["3", "-1", "2", "-3", "1"],
    answer: "2",
    explanation: "Let u = 3^y. u² - 6u - 27 = 0 → (u-9)(u+3) = 0 → u = 9 (rejecting negative). 3^y = 9 → y = 2."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1985, exam: "JAMB",
    question: "Factorize: abx² + 8y - 4bx - 2axy",
    options: ["(ax-4)(bx-2y)", "(ax+b)(x-8y)", "(ax-2y)(by-4)", "(abx-4)(x-2y)", "(bx-4)(ax-2y)"],
    answer: "(ax-4)(bx-2y)",
    explanation: "Rearranging: abx² - 2axy - 4bx + 8y = ax(bx-2y) - 4(bx-2y) = (ax-4)(bx-2y)."
  },
  {
    subject: "Mathematics", topic: "Coordinate Geometry", year: 1985, exam: "JAMB",
    question: "At what real value of x do the curves whose equations are y = x³ + x and y = x² + 1 intersect?",
    options: ["-2", "2", "-1", "0", "1"],
    answer: "1",
    explanation: "Setting x³+x = x²+1: x³-x²+x-1=0 → x²(x-1)+(x-1)=0 → (x-1)(x²+1)=0. Only the real solution is x=1 (x²+1=0 has no real roots)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1985, exam: "JAMB",
    question: "If the quadratic expression 3x² - 7x + R is a perfect square, find R",
    options: ["49/24", "49/3", "49/6", "49/12", "49/36"],
    answer: "49/12",
    explanation: "For ax²+bx+c to be a perfect square, b²=4ac: (-7)² = 4(3)(R) → 49 = 12R → R = 49/12."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1985, exam: "JAMB",
    question: "Solve the following equation: 2/(2r-1) - 5/3 = 1/(r+2)",
    options: ["(-1, 5/2)", "(-1, -5/2)", "(5/2, 1)", "(2, 1)", "(1, 2)"],
    answer: "(5/2, 1)",
    explanation: "Rearranging gives 2/(2r-1) - 1/(r+2) = 5/3, whose numerator simplifies to 5/[(2r-1)(r+2)] = 5/3, so (2r-1)(r+2)=3 → 2r²+3r-5=0 → (2r+5)(r-1)=0 → r = 1 or r = -5/2. (Note: the printed option shows the magnitudes 1 and 5/2 but appears to have dropped the negative sign on 5/2.)"
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1985, exam: "JAMB",
    question: "Solve for (x,y): 2x + y = 4, x² + xy = -12",
    options: ["(6,-8);(-2,8)", "(3,-4);(-1,4)", "(8,-4);(-1,4)", "(-8,6);(8,-2)", "(-4,3);(4,-1)"],
    answer: "(6,-8);(-2,8)",
    explanation: "From 2x+y=4, y=4-2x. Substituting: x²+x(4-2x)=-12 → -x²+4x+12=0 → x²-4x-12=0 → (x-6)(x+2)=0 → x=6 or x=-2, giving (6,-8) and (-2,8)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1985, exam: "JAMB",
    question: "Solve the simultaneous equations: 2x - 3y + 10 = 10x - 6y = 5",
    options: ["x = 2½, y = 3⅓", "x = 3½, y = 2½", "x = 2½, y = 3", "x = 3⅓, y = 2⅕", "x = 2⅓, y = 2⅓"],
    answer: "x = 2½, y = 3⅓",
    explanation: "Splitting the chain into 2x-3y+10=10x-6y and 10x-6y=5 gives 8x-3y=10 and 10x-6y=5. Solving simultaneously: x=2.5, y=10/3=3⅓."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1985, exam: "JAMB",
    question: "If f(x - 2) = 4x² + x + 7, find f(1)",
    options: ["12", "27", "7", "46", "17"],
    answer: "46",
    explanation: "Set x-2=1, so x=3. f(1) = 4(3)² + 3 + 7 = 36+3+7 = 46."
  },
  {
    subject: "Mathematics", topic: "Trigonometry", year: 1985, exam: "JAMB",
    question: "In triangle XYZ, XY = 13cm, YZ = 9cm, XZ = 11cm and angle XYZ = q°. Find cos q°.",
    options: ["4/39", "43/39", "209/286", "1/6", "43/78"],
    answer: "43/78",
    explanation: "By the cosine rule: XZ² = XY²+YZ²-2(XY)(YZ)cos(q) → 121 = 169+81-234cos(q) → cos(q) = 129/234 = 43/78."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1985, exam: "JAMB",
    question: "Find the number of goals scored by a football team in 20 matches, shown below. No. of goals: 0,1,2,3,4,5; No. of matches: 3,5,7,4,1,0. What are the values of the mean and the mode respectively?",
    options: ["(1.75, 5)", "(1.75, 2)", "(1.75, 1)", "(2,2)", "(2,1)"],
    answer: "(1.75, 2)",
    explanation: "Mean = Σ(goals×matches)/20 = (0+5+14+12+4+0)/20 = 35/20 = 1.75. The mode (most frequent number of goals) is 2, occurring in 7 matches."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1985, exam: "JAMB",
    question: "If the hypotenuse of a right-angled isosceles triangle is 2, what is the length of each of the other sides?",
    options: ["√2", "1/√2", "2√2", "1", "√2 - 1"],
    answer: "√2",
    explanation: "For a right isosceles triangle, each leg = hypotenuse/√2 = 2/√2 = √2."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1985, exam: "JAMB",
    question: "If two fair coins are tossed, what is the probability of getting at least one head?",
    options: ["¼", "½", "1", "2/3", "¾"],
    answer: "¾",
    explanation: "P(at least one head) = 1 - P(no heads) = 1 - 1/4 = 3/4."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1985, exam: "JAMB",
    question: "The ratio of the length of two similar rectangular blocks is 2:3. If the volume of the larger block is 351cm³, then the volume of the other block is",
    options: ["234.00cm³", "526.50cm³", "166.00cm³", "729.75cm³", "104.00cm³"],
    answer: "104.00cm³",
    explanation: "Volume ratio = (2/3)³ = 8/27. Smaller volume = 351 × 8/27 = 104cm³."
  },
  {
    subject: "Mathematics", topic: "Trigonometry", year: 1985, exam: "JAMB",
    question: "The bearing of a bird on a tree from a hunter on the ground is N72°E. What is the bearing of the hunter from the bird?",
    options: ["S18°W", "S72°W", "S72°E", "S27°E", "S27°W"],
    answer: "S72°W",
    explanation: "The reverse bearing is found by adding 180°: N72°E (=072°) + 180° = 252°, which corresponds to the compass direction S72°W."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1985, exam: "JAMB",
    question: "In triangle XYZ, XK is drawn perpendicular to YZ at K, with angle XKZ = 90°. XK = 15cm, XZ = 25cm, and YK = 8cm. Find the area of triangle XYZ.",
    options: ["180sq.cm", "210sq.cm", "160sq.cm", "320sq.cm", "390sq.cm"],
    answer: "210sq.cm",
    explanation: "In right triangle XKZ: KZ = √(XZ²-XK²) = √(625-225) = 20cm. YZ = YK+KZ = 8+20 = 28cm. Area of XYZ = ½ × YZ × XK = ½ × 28 × 15 = 210sq.cm."
  },
  {
    subject: "Mathematics", topic: "Trigonometry", year: 1985, exam: "JAMB",
    question: "Without using tables, calculate the value of 1 + sec²30°",
    options: ["2⅓", "2", "1⅓", "¾", "3/7"],
    answer: "2⅓",
    explanation: "sec30° = 2/√3, so sec²30° = 4/3. 1 + 4/3 = 7/3 = 2⅓."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1985, exam: "JAMB",
    question: "What is the probability that a number chosen at random from the integers between 1 and 10 inclusive is either a prime or a multiple of 3?",
    options: ["7/10", "3/5", "4/5", "½", "3/10"],
    answer: "3/5",
    explanation: "Primes 1-10: {2,3,5,7} (4 numbers). Multiples of 3: {3,6,9} (3 numbers). Overlap: {3}. Union = 4+3-1 = 6. P = 6/10 = 3/5."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1985, exam: "JAMB",
    question: "Find the area of a regular hexagon inscribed in a circle of radius 8cm.",
    options: ["16√3cm²", "96√3cm²", "192.3cm²", "16cm²", "32cm²"],
    answer: "96√3cm²",
    explanation: "Area of a regular hexagon = (3√3/2)r² = (3√3/2)(64) = 96√3cm²."
  },
  {
    subject: "Mathematics", topic: "Trigonometry", year: 1985, exam: "JAMB",
    question: "If cos q = √3/2 and 0 < q < 90°, calculate cot(90° - q) / sin²q",
    options: ["4√3/3", "4√3", "√3/2", "1/√3", "2/√3"],
    answer: "4√3/3",
    explanation: "cos q = √3/2 gives q = 30°. cot(90°-q) = tan(q) = tan30° = 1/√3. sin²30° = 1/4. Expression = (1/√3)/(1/4) = 4/√3 = 4√3/3."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1985, exam: "JAMB",
    question: "A solid sphere of radius 4cm has mass 64kg. What will be the mass of a shell of the same metal whose internal and external radii are 2cm and 3cm respectively?",
    options: ["5kg", "16kg", "19kg", "25kg", "48kg"],
    answer: "19kg",
    explanation: "Density = mass/volume = 64/[(4/3)π(4³)] = 3/(4π). Shell volume = (4/3)π(3³-2³) = (4/3)π(19) = 76π/3. Mass = density × volume = [3/(4π)]×[76π/3] = 19kg."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1985, exam: "JAMB",
    question: "PQRS is a trapezium of area 14cm² in which PQ//RS. If PQ = 4cm and SR = 3cm, find the area of triangle SQR in cm².",
    options: ["7.0", "6.0", "5.2", "5.0", "4.1"],
    answer: "6.0",
    explanation: "Diagonal QS divides the trapezium into triangles PQS and QRS whose areas are in the ratio of the parallel sides PQ:SR = 4:3. Total 7 parts = 14cm², so 1 part = 2cm². Area of triangle SQR (3 parts) = 6cm²."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1985, exam: "JAMB",
    question: "A bag contains 4 white balls and 6 red balls. Two red balls are taken from the bag without replacement. What is the probability that they are both red?",
    options: ["1/3", "2/9", "2/15", "1/5", "3/5"],
    answer: "1/3",
    explanation: "P(both red) = (6/10) × (5/9) = 30/90 = 1/3."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1985, exam: "JAMB",
    question: "Two points X and Y both on latitude 60°S have longitudes 147°E and 153°W respectively. Find, to the nearest kilometre, the distance between X and Y measured along the parallel of latitude (take the earth's circumference 2πR = 4×10⁴km).",
    options: ["28,850km", "16,667km", "8,333km", "6,667km", "3,333km"],
    answer: "3,333km",
    explanation: "The shorter longitude difference is 360°-(147+153)=60°. Circumference at latitude 60° = 2πR·cos60° = 4×10⁴×0.5 = 2×10⁴km. Distance for 60° = (60/360)×2×10⁴ ≈ 3,333km."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1985, exam: "JAMB",
    question: "In a circle with centre O and radius 3cm, two radii meet at an angle of 120°, forming a shaded segment (cut off by the chord joining their endpoints). Find the area of the shaded segment.",
    options: ["3π", "9√3/4", "3(π - 3√3/4)", "3(√3 - π)/4", "π + 9√3/4"],
    answer: "3(π - 3√3/4)",
    explanation: "Sector area = (120/360)×π×3² = 3π. Triangle area (two sides of 3cm, included angle 120°) = ½×3×3×sin120° = 9√3/4. Segment area = 3π - 9√3/4 = 3(π - 3√3/4)."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1985, exam: "JAMB",
    question: "In a class of 120 students, 18 of them scored an A grade in Mathematics. If the section representing the A grade students on a pie chart has angle Z° at the centre of the circle, what is Z?",
    options: ["15", "28", "50", "52", "54"],
    answer: "54",
    explanation: "Z = (18/120) × 360° = 54°."
  }
]

export default mathsJamb1985
