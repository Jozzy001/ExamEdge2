// JAMB 1989 Mathematics Past Questions
// Source had 50 questions. 8 were skipped (diagrams, or source text too garbled/ambiguous to transcribe reliably).
// See the skipped-questions list sent alongside this file.

const mathsJamb1989 = [

  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1989, exam: "JAMB",
    question: "Which of the following is in descending order?",
    options: ["9/10, 4/5, 3/4, 7/10", "4/5, 9/10, 3/4, 17/20", "6/10, 17/20, 4/5, 3/4", "4/5, 9/10, 17/10, 3/4"],
    answer: "9/10, 4/5, 3/4, 7/10",
    explanation: "Converting to decimals: 9/10=0.9, 4/5=0.8, 3/4=0.75, 7/10=0.7 — these values steadily decrease, so this list is in descending order."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1989, exam: "JAMB",
    question: "Evaluate: 2,700,000 × 0.03 ÷ 18,000",
    options: ["4.5 × 10⁰", "4.5 × 10¹", "4.5 × 10²", "4.5 × 10³"],
    answer: "4.5 × 10⁰",
    explanation: "2,700,000 × 0.03 = 81,000. 81,000 ÷ 18,000 = 4.5 = 4.5×10⁰."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1989, exam: "JAMB",
    question: "The prime factors of 2,520 are",
    options: ["2,9,5", "2,9,7", "2,3,5,7", "2,3,7,9"],
    answer: "2,3,5,7",
    explanation: "2520 = 2³×3²×5×7. Its distinct prime factors are 2, 3, 5, and 7."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1989, exam: "JAMB",
    question: "Simplify: [∛(64r⁻⁶)]^(1/2)",
    options: ["r", "2r", "1/2r", "2/r"],
    answer: "2/r",
    explanation: "∛(64r⁻⁶) = 4r⁻². Taking the square root: (4r⁻²)^(1/2) = 2r⁻¹ = 2/r."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1989, exam: "JAMB",
    question: "What is the difference between 0.007685 correct to three significant figures and 0.007685 correct to four places of decimal?",
    options: ["10⁻⁵", "7 × 10⁻⁴", "8 × 10⁻⁵", "10⁻⁶"],
    answer: "10⁻⁵",
    explanation: "To 3 s.f.: 0.007685 ≈ 0.00769. To 4 d.p.: 0.007685 ≈ 0.0077. Difference = 0.0077-0.00769 = 0.00001 = 10⁻⁵."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1989, exam: "JAMB",
    question: "If a:b = 5:8 and x:y = 25:16, evaluate a/x : b/y",
    options: ["125:128", "3:5", "3:4", "2:5"],
    answer: "2:5",
    explanation: "a/x = 5/25 = 1/5. b/y = 8/16 = 1/2. Ratio (1/5):(1/2) = 2:5 (multiplying both by 10)."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1989, exam: "JAMB",
    question: "Oke deposited ₦800.00 in the bank at the rate of 12½% simple interest. After some time the total amount was one and half times the principal. For how many years was the money left in the bank?",
    options: ["2", "4", "5½", "8"],
    answer: "4",
    explanation: "Amount = 1.5×800 = 1200, so interest = 400. Using I=PRT/100: 400 = 800×12.5×T/100 = 100T → T = 4."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1989, exam: "JAMB",
    question: "If the surface area of a sphere is increased by 44%, find the percentage increase in its diameter.",
    options: ["44", "22", "30", "20"],
    answer: "20",
    explanation: "Surface area ∝ diameter². If area increases to 1.44× original, diameter increases by √1.44 = 1.2×, i.e. a 20% increase."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1989, exam: "JAMB",
    question: "Simplify: 4 - 1/(2-√3)",
    options: ["2√3", "2+√3", "-2+√3", "2-√3"],
    answer: "2-√3",
    explanation: "Rationalizing: 1/(2-√3) = (2+√3)/[(2-√3)(2+√3)] = (2+√3)/1 = 2+√3. So 4-(2+√3) = 2-√3."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1989, exam: "JAMB",
    question: "What are the values of y which satisfy the equation 9^y - 4(3^y) + 3 = 0?",
    options: ["-1 and 0", "-1 and 1", "1 and 3", "0 and 1"],
    answer: "0 and 1",
    explanation: "Let u=3^y. u²-4u+3=0 → (u-1)(u-3)=0 → u=1 or 3. So 3^y=1 (y=0) or 3^y=3 (y=1)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1989, exam: "JAMB",
    question: "The cost of dinner for a group of students is partly constant and partly varies directly as the number of students. If the cost is ₦74.00 when the number of students is 20, and ₦96.00 when the number is 30, find the cost when there are 15 students.",
    options: ["₦68.50", "₦63.00", "₦60.00", "₦52.00"],
    answer: "₦63.00",
    explanation: "Let cost=a+bn. 74=a+20b, 96=a+30b. Solving: b=2.2, a=30. At n=15: cost = 30+2.2(15) = 63."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1989, exam: "JAMB",
    question: "If f(x) = 2x² - 5x + 3, find f(x+1)",
    options: ["2x² - x", "2x² - x + 10", "4x² + 3x + 2", "4x² + 3x + 12"],
    answer: "2x² - x",
    explanation: "f(x+1) = 2(x+1)²-5(x+1)+3 = 2x²+4x+2-5x-5+3 = 2x²-x."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1989, exam: "JAMB",
    question: "Solve for the positive number x such that 2^(x³-x²-2x) = 1",
    options: ["4", "3", "2", "1"],
    answer: "2",
    explanation: "Since 2⁰=1, we need x³-x²-2x=0 → x(x-2)(x+1)=0 → x=0, 2, or -1. The positive solution is x=2."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1989, exam: "JAMB",
    question: "Simplify: (324 - 4x²) / (2x + 18)",
    options: ["2(x-9)", "2(9+x)", "81-x²", "-2(x-9)"],
    answer: "-2(x-9)",
    explanation: "324-4x² = 4(81-x²) = 4(9-x)(9+x). Denominator = 2(x+9). Simplifying: 4(9-x)(9+x)/[2(x+9)] = 2(9-x) = -2(x-9)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1989, exam: "JAMB",
    question: "Factorize completely: y³ - 4xy + xy³ - 4y",
    options: ["(x+xy)(y+2)(y-2)", "(y+xy)(y+2)(y-2)", "y(1+x)(y+2)(y-2)", "y(1-x)(y+2)(y-2)"],
    answer: "y(1+x)(y+2)(y-2)",
    explanation: "Rearranging: y³+xy³-4xy-4y = y³(1+x)-4y(x+1) = (1+x)(y³-4y) = (1+x)y(y-2)(y+2)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1989, exam: "JAMB",
    question: "If one factor of x³ - 8⁻¹ is x - 2⁻¹, the other factor is",
    options: ["x² + 2⁻¹x - 4⁻¹", "x² - 2⁻¹x - 4⁻¹", "x² + 2⁻¹x + 4⁻¹", "x² + 2⁻¹x - 4¹"],
    answer: "x² + 2⁻¹x + 4⁻¹",
    explanation: "x³-(1/2)³ = (x-1/2)(x²+x/2+1/4), using the difference-of-cubes identity. The other factor is x²+2⁻¹x+4⁻¹."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1989, exam: "JAMB",
    question: "Factorize: 4a² + 12ab - c² + 9b²",
    options: ["4a(a-3b)+(3b-c)²", "(2a+3b-c)(2a+3b+c)", "(2a-3b-c)(2a-3b+c)", "4a(a-3b)+(3b+c)²"],
    answer: "(2a+3b-c)(2a+3b+c)",
    explanation: "4a²+12ab+9b²-c² = (2a+3b)²-c² = (2a+3b-c)(2a+3b+c)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1989, exam: "JAMB",
    question: "What are K and L respectively if ½(3y-4x)² = 8x² + Kxy + Ly²?",
    options: ["-12, 9/2", "-6, 9", "6, 9", "12, 9/2"],
    answer: "-12, 9/2",
    explanation: "½(3y-4x)² = ½(16x²-24xy+9y²) = 8x²-12xy+4.5y². Matching: K=-12, L=9/2."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1989, exam: "JAMB",
    question: "Solve the pair of equations for x and y respectively: 2x⁻¹ - 3y⁻¹ = 4, 4x⁻¹ + y⁻¹ = 1",
    options: ["-1,2", "1,2", "2,1", "2,-1"],
    answer: "2,-1",
    explanation: "Let u=1/x, v=1/y. 2u-3v=4 and 4u+v=1. From the second, v=1-4u. Substituting: 2u-3(1-4u)=4 → 14u=7 → u=0.5, v=-1. So x=2, y=-1."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1989, exam: "JAMB",
    question: "What value of Q will make the expression 4x² + 5x + Q a complete square?",
    options: ["25/16", "25/64", "5/8", "5/4"],
    answer: "25/16",
    explanation: "For ax²+bx+c to be a perfect square, c=b²/4a = 25/16."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1989, exam: "JAMB",
    question: "Find the range of values of r which satisfies the inequality r/a + r/b + r/c > 1, where a, b and c are positive.",
    options: ["r > abc/(bc+ac+ab)", "r > abc", "r > 1/a + 1/b + 1/c", "r > 1/abc"],
    answer: "r > abc/(bc+ac+ab)",
    explanation: "r(1/a+1/b+1/c) > 1 → r(bc+ac+ab)/(abc) > 1 → r > abc/(ab+bc+ac)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1989, exam: "JAMB",
    question: "Express: 1/(x+1) - 1/(x-2)",
    options: ["-3/[(x+1)(2-x)]", "3/[(x+1)(2-x)]", "-1/[(x+1)(x-2)]", "1/[(x+1)(x-2)]"],
    answer: "3/[(x+1)(2-x)]",
    explanation: "Combining: [(x-2)-(x+1)]/[(x+1)(x-2)] = -3/[(x+1)(x-2)], which equals 3/[(x+1)(2-x)]."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1989, exam: "JAMB",
    question: "The sum of the first two terms of a geometric progression is x and the sum of the last two terms (of an n-term, 4-term progression) is y. Find the common ratio in terms of x and y.",
    options: ["x/y", "y/x", "(x/y)^(1/2)", "(y/x)^(1/2)"],
    answer: "(y/x)^(1/2)",
    explanation: "For a 4-term GP, ratio of (last two terms sum) to (first two terms sum) = r². So y/x = r², giving r = (y/x)^(1/2)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1989, exam: "JAMB",
    question: "If -8, m, n, 19 are in arithmetic progression, find (m, n)",
    options: ["1,10", "2,10", "3,13", "4,16"],
    answer: "1,10",
    explanation: "Four terms with common difference d: 19-(-8)=27=3d → d=9. m=-8+9=1, n=m+9=10."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1989, exam: "JAMB",
    question: "MN is a tangent to a circle at M. MR and MQ are two chords, with N, Q, R lying along a secant line from N (in that order). If angle QMN = 60° and angle MNQ = 40°, find angle RMQ.",
    options: ["120°", "11°", "60°", "20°"],
    answer: "20°",
    explanation: "By the tangent-chord angle theorem, angle QMN = angle MRQ = 60°. In triangle MNQ, angle MQN = 180-60-40 = 80°, so angle MQR (supplementary, since N,Q,R are collinear) = 100°. In triangle MQR: angle RMQ = 180-100-60 = 20°."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1989, exam: "JAMB",
    question: "In triangle PQR, HK is parallel to QR, PH = 4cm and HQ = 3cm. What is the ratio KR:PR?",
    options: ["7:3", "3:7", "3:4", "4:3"],
    answer: "3:7",
    explanation: "Since HK∥QR, triangle PHK ~ triangle PQR, with PH/PQ = PK/PR = 4/7. So KR/PR = 1-4/7 = 3/7."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1989, exam: "JAMB",
    question: "A regular polygon of (2k+1) sides has 140° as the size of each interior angle. Find k.",
    options: ["4", "4½", "8", "8½"],
    answer: "4",
    explanation: "Exterior angle = 180-140 = 40°. Number of sides = 360/40 = 9 = 2k+1, so k=4."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1989, exam: "JAMB",
    question: "In a diagram, PST is a straight line, and PQ = QS = SR, forming a chain of isosceles triangles. If angle QPS = 24°, find y (the resulting angle at the end of the chain).",
    options: ["24°", "48°", "72°", "84°"],
    answer: "72°",
    explanation: "Each isosceles triangle in the chain (PQ=QS=SR) has its exterior angle equal to the sum of the interior base angles built up so far, compounding by 24° at each stage: 24°, 48°, 72°."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1989, exam: "JAMB",
    question: "In a circle, PQ is parallel to RS and QS bisects angle PQR. If angle PQR is 60°, find x (angle QSR).",
    options: ["30°", "40°", "60°", "120°"],
    answer: "30°",
    explanation: "QS bisects the 60° angle PQR, giving 30° on each side. Since PQ∥RS, alternate angles with transversal QS are equal, so angle QSR = 30°."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1989, exam: "JAMB",
    question: "PQRS is a rhombus. If PR² + QS² = kPQ², determine k.",
    options: ["1", "2", "3", "4"],
    answer: "4",
    explanation: "In a rhombus, the diagonals bisect each other at right angles, so (PR/2)²+(QS/2)²=PQ², giving PR²+QS²=4PQ². So k=4."
  },
  {
    subject: "Mathematics", topic: "Trigonometry", year: 1989, exam: "JAMB",
    question: "In triangle XYZ, angle Y = angle Z = 30° and XZ = 3cm. Find YZ.",
    options: ["√3/2cm", "3√3/2cm", "3√3cm", "2√3cm"],
    answer: "3√3cm",
    explanation: "Since Y=Z=30°, angle X=120°. By the sine rule: YZ/sinX = XZ/sinY → YZ = 3×sin120°/sin30° = 3×(√3/2)/(0.5) = 3√3cm."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1989, exam: "JAMB",
    question: "In triangle PQR, the bisector of angle QPR meets QR at S. The line PQ is produced to V and the bisector of angle VQS meets PS produced at T. If angle QPR = 46° and angle QST = 75°, calculate angle QTS.",
    options: ["41°", "52°", "64°", "82°"],
    answer: "41°",
    explanation: "PS bisects angle P, so angle QPS=23°. Since angle QST=75° is supplementary to angle QSP (as T,S,P are collinear): angle QSP=105°, giving angle PQS=180-23-105=52° (angle PQR). Exterior angle at Q (angle VQS)=180-52=128°, bisected by QT giving angle TQS=64°. In triangle QST: angle QTS=180-75-64=41°."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1989, exam: "JAMB",
    question: "A right triangle RST (right-angled at S) has legs in the ratio x:y = 5:12, and hypotenuse z = 52cm. Find the perimeter of the triangle.",
    options: ["68cm", "84cm", "100cm", "120cm"],
    answer: "120cm",
    explanation: "The 5:12:13 Pythagorean triple scaled so the hypotenuse is 52 (13×4): legs become 20 and 48. Perimeter = 20+48+52 = 120cm."
  },
  {
    subject: "Mathematics", topic: "Trigonometry", year: 1989, exam: "JAMB",
    question: "The pilot of an aeroplane, flying 10km above the ground in the direction of a landmark, views the landmark to have angles of depression of 35° and 55° from two points along the flight path. Find the distance between the two points of observation.",
    options: ["10(sin35°-sin55°)", "10(cos35°-cos55°)", "10(tan35°-tan55°)", "10(cot35°-cot55°)"],
    answer: "10(cot35°-cot55°)",
    explanation: "Horizontal distance from a point to the landmark = height/tan(depression angle) = height×cot(angle). The distance between the two points = 10cot35° - 10cot55° = 10(cot35°-cot55°)."
  },
  {
    subject: "Mathematics", topic: "Trigonometry", year: 1989, exam: "JAMB",
    question: "4sin²x - 3 = 0, find x if 0 < x < 90°",
    options: ["30°", "45°", "60°", "90°"],
    answer: "60°",
    explanation: "sin²x = 3/4 → sinx = √3/2 → x = 60°."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1989, exam: "JAMB",
    question: "A square tile has side 30cm. How many of these tiles cover a rectangular floor of length 7.2m and width 4.2m?",
    options: ["336", "420", "576", "720"],
    answer: "336",
    explanation: "Floor area = 7.2×4.2 = 30.24m² = 302,400cm². Tile area = 30×30 = 900cm². Number of tiles = 302400/900 = 336."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1989, exam: "JAMB",
    question: "A cylindrical metal pipe 1m long has an outer diameter of 7.2cm and an inner diameter of 2.8cm. Find the volume of metal used for the cylinder.",
    options: ["440πcm³", "1,100πcm³", "4,400πcm³", "11,000πcm³"],
    answer: "1,100πcm³",
    explanation: "Outer radius=3.6cm, inner radius=1.4cm, length=100cm. Volume = π(3.6²-1.4²)×100 = π(12.96-1.96)×100 = 1100π cm³."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1989, exam: "JAMB",
    question: "OXYZW is a pyramid with a square base such that OX=OY=OZ=OW=5cm and XY=XW=YZ=WZ=6cm. Find the height OT (T being the centre of the base).",
    options: ["2√5", "3", "4", "√7"],
    answer: "√7",
    explanation: "Half-diagonal of the square base = (6√2)/2 = 3√2. Height: OT² = OX² - (3√2)² = 25-18 = 7 → OT=√7cm."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1989, exam: "JAMB",
    question: "In preparing rice cutlets, a cook used 75g of rice, 40g of margarine, 105g of meat and 20g of bread crumbs. Find the angle of the sector which represents meat in a pie chart.",
    options: ["30°", "60°", "112.5°", "157.5°"],
    answer: "157.5°",
    explanation: "Total = 75+40+105+20 = 240g. Meat's angle = (105/240)×360° = 157.5°."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1989, exam: "JAMB",
    question: "In a family of 21 people, the average age is 14 years. If the age of the grandfather is not counted, the average age drops to 12 years. What is the age of the grandfather?",
    options: ["35years", "40years", "42years", "54years"],
    answer: "54years",
    explanation: "Total age (21 people) = 21×14 = 294. Total age (20 people, excluding grandfather) = 20×12 = 240. Grandfather's age = 294-240 = 54."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1989, exam: "JAMB",
    question: "If n is the median and m is the mode of the following set of numbers: 2.4, 2.1, 1.6, 2.6, 2.6, 3.7, 2.1, 2.6, find (n, m).",
    options: ["(2.6,2.6)", "(2.5,2.6)", "(2.6,2.5)", "(2.5,2.1)"],
    answer: "(2.5,2.6)",
    explanation: "Sorted: 1.6, 2.1, 2.1, 2.4, 2.6, 2.6, 2.6, 3.7. Median (average of 4th and 5th) = (2.4+2.6)/2 = 2.5. Mode (most frequent, 2.6 appears three times) = 2.6."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1989, exam: "JAMB",
    question: "Two numbers are chosen at random from three numbers 1, 3, 6. Find the probability that the sum of the two is not odd.",
    options: ["2/3", "½", "1/3", "1/6"],
    answer: "1/3",
    explanation: "Possible pairs: (1,3) sum=4 (even), (1,6) sum=7 (odd), (3,6) sum=9 (odd). Only 1 of 3 pairs gives an even sum. P = 1/3."
  }
]

export default mathsJamb1989
