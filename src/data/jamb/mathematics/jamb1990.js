// JAMB 1990 Mathematics Past Questions
// Source had 50 questions. 9 were skipped (diagrams, or source text too garbled/ambiguous to transcribe reliably).
// See the skipped-questions list sent alongside this file.

const mathsJamb1990 = [

  {
    subject: "Mathematics", topic: "Algebra", year: 1990, exam: "JAMB",
    question: "The H.C.F. of a²bx + abx² and a²b - b³ is",
    options: ["b", "a + b", "a(a+b)", "abx(a²-b²)"],
    answer: "b",
    explanation: "a²bx+abx² = abx(a+x). a²b-b³ = b(a-b)(a+b). The only common factor between these two expressions is b."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1990, exam: "JAMB",
    question: "Correct 241.34 × (3 × 10⁻³)² to 4 significant figures",
    options: ["0.0014", "0.001448", "0.0022", "0.002172"],
    answer: "0.002172",
    explanation: "(3×10⁻³)² = 9×10⁻⁶. 241.34 × 9×10⁻⁶ = 2172.06×10⁻⁶ = 0.00217206, which to 4 s.f. is 0.002172."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1990, exam: "JAMB",
    question: "At what rate would a sum of ₦100.00 deposited for 5 years raise an interest of ₦7.50?",
    options: ["1½%", "2½%", "15%", "25%"],
    answer: "1½%",
    explanation: "Using I=PRT/100: 7.5=100×R×5/100=5R → R=1.5%."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1990, exam: "JAMB",
    question: "Three children shared a basket of mangoes in such a way that the first child took ¼ of the mangoes and the second took ¾ of the remainder. What fraction of the mangoes did the third child take?",
    options: ["3/16", "7/16", "9/16", "13/16"],
    answer: "3/16",
    explanation: "First takes 1/4, leaving 3/4. Second takes (3/4) of that = 9/16. Remaining = 3/4-9/16 = 3/16."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1990, exam: "JAMB",
    question: "Simplify and express in standard form: (0.00275 × 0.00640) / (0.025 × 0.08)",
    options: ["8.8 × 10⁻¹", "8.8 × 10²", "8.8 × 10⁻³", "8.8 × 10³"],
    answer: "8.8 × 10⁻³",
    explanation: "Numerator = 1.76×10⁻⁵. Denominator = 2×10⁻³. Result = 0.88×10⁻² = 8.8×10⁻³."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1990, exam: "JAMB",
    question: "Three brothers in a business deal share the profit at the end of a contract. The first received 1/3 of the profit and the second 2/3 of the remainder. If the third received the remaining ₦12,000.00, how much profit did they share (in total)?",
    options: ["₦60,000.00", "₦54,000.00", "₦48,000.00", "₦42,000.00"],
    answer: "₦54,000.00",
    explanation: "First takes 1/3, leaving 2/3. Second takes 2/3 of that = 4/9. Remaining = 2/3-4/9 = 2/9, which equals 12,000. Total = 12000×9/2 = 54,000."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1990, exam: "JAMB",
    question: "Simplify: √27 + 3/√3",
    options: ["4√3", "4/√3", "3√3", "3√/4"],
    answer: "4√3",
    explanation: "√27 = 3√3. 3/√3 = √3 (after rationalizing). Sum = 3√3+√3 = 4√3."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1990, exam: "JAMB",
    question: "Simplify: 3log₆9 + log₆12 + log₆64 - log₆72",
    options: ["5", "7776", "log₆31", "(7776)⁶"],
    answer: "5",
    explanation: "= log₆(9³×12×64/72) = log₆(7776). Since 6⁵=7776, this equals 5."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1990, exam: "JAMB",
    question: "If a=2, b=-2 and c=-1/2, evaluate (ab²-bc²)(abc-a²c)",
    options: ["0", "28", "-30", "34"],
    answer: "34",
    explanation: "ab²=8, bc²=-0.5, so ab²-bc²=8.5. abc=2, a²c=-2, so abc-a²c=4. Product = 8.5×4 = 34."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1990, exam: "JAMB",
    question: "Y varies inversely as X², and X varies directly as Z. Find the relationship between Y and Z, if C is a constant.",
    options: ["Z²y = C", "Y = CZ²", "Y = CZ²", "Y = C"],
    answer: "Z²y = C",
    explanation: "Y=k/X², X=mZ, so Y=k/(mZ)²=K/Z² (combining constants), giving YZ²=C (a constant)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1990, exam: "JAMB",
    question: "If f(x-4) = x² + 2x + 3, find f(2)",
    options: ["6", "11", "27", "51"],
    answer: "51",
    explanation: "Set x-4=2, so x=6. f(2) = 6²+2(6)+3 = 36+12+3 = 51."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1990, exam: "JAMB",
    question: "Factorize: 9(x+y)² - 4(x-y)²",
    options: ["(x+y)(5x+y)", "(x+y)²", "(x+5y)(5x+y)", "5(x+y)²"],
    answer: "(x+5y)(5x+y)",
    explanation: "This is a difference of squares: [3(x+y)]²-[2(x-y)]² = [3(x+y)-2(x-y)][3(x+y)+2(x-y)] = (x+5y)(5x+y)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1990, exam: "JAMB",
    question: "If a² + b² = 16 and 2ab = 7, find all the possible values of (a-b)",
    options: ["3, -3", "2, -2", "1, -1", "3, -1"],
    answer: "3, -3",
    explanation: "(a-b)² = a²+b²-2ab = 16-7 = 9, so a-b = ±3."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1990, exam: "JAMB",
    question: "Divide x³ - 2x² - 5x + 6 by (x-1)",
    options: ["x² - x - 6", "x² - 5x + 6", "x² - 7x + 6", "x² - 5x - 6"],
    answer: "x² - x - 6",
    explanation: "Dividing: x³-2x²-5x+6 = (x-1)(x²-x-6)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1990, exam: "JAMB",
    question: "If x + 1/x = 4, find x² + 1/x²",
    options: ["16", "14", "12", "9"],
    answer: "14",
    explanation: "(x+1/x)² = x²+2+1/x² = 16, so x²+1/x² = 16-2 = 14."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1990, exam: "JAMB",
    question: "What must be added to 4x² - 4 to make it a perfect square (of the form (2x-1/x)²)?",
    options: ["-1/x²", "1/x²", "1", "-1"],
    answer: "1/x²",
    explanation: "(2x-1/x)² = 4x²-4+1/x². So the term 1/x² must be added to 4x²-4 to complete this perfect square."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1990, exam: "JAMB",
    question: "Find the solution of the equation x - 8√x + 15 = 0",
    options: ["3, 5", "-3, -5", "9, 25", "-9, 25"],
    answer: "9, 25",
    explanation: "Let u=√x. u²-8u+15=0 → (u-3)(u-5)=0 → u=3 or 5, so x=9 or 25."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1990, exam: "JAMB",
    question: "The lengths of the sides of a right-angled triangle are x cm, (3x-1)cm and (3x+1)cm. Find x.",
    options: ["5", "7", "8", "12"],
    answer: "12",
    explanation: "With (3x+1) as the hypotenuse: (3x+1)² = x²+(3x-1)² → 9x²+6x+1 = 10x²-6x+1 → x²-12x=0 → x=12."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1990, exam: "JAMB",
    question: "The perimeter of a rectangular lawn is 24m. If the area of the lawn is 35m², how wide is the lawn?",
    options: ["5m", "7m", "12m", "14m"],
    answer: "5m",
    explanation: "l+w=12, lw=35. Solving t²-12t+35=0 gives t=5 or 7. The width (smaller dimension) is 5m."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1990, exam: "JAMB",
    question: "Simplify: x/(x+y) + y/(x-y) - x²/(x²-y²)",
    options: ["x²/(x²-y²)", "y²/(x²-y²)", "x/(x²-y²)", "y/(x²-y²)"],
    answer: "y²/(x²-y²)",
    explanation: "Over common denom (x²-y²): [x(x-y)+y(x+y)-x²]/(x²-y²) = [x²-xy+xy+y²-x²]/(x²-y²) = y²/(x²-y²)."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1990, exam: "JAMB",
    question: "Given that x² + y² + z² = 194, calculate z if x = 7 and √y = 3",
    options: ["√10", "8", "12.2", "13.4"],
    answer: "8",
    explanation: "√y=3 means y=9, so y²=81. x²=49. z² = 194-49-81 = 64, so z=8."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1990, exam: "JAMB",
    question: "Find the sum of the first twenty terms of the arithmetic progression: log a, log a², log a³, ...",
    options: ["log a²⁰", "log a²¹", "log a²⁰⁰", "log a²¹⁰"],
    answer: "log a²¹⁰",
    explanation: "The nth term is n·log(a). Sum of first 20 terms = log(a)×(1+2+...+20) = log(a)×210 = log(a²¹⁰)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1990, exam: "JAMB",
    question: "A carpenter charges ₦40.00 per day for himself and ₦10.00 per day for his assistant. If a fleet of cars was painted for ₦2,000.00 and the carpenter worked 10 days more than his assistant, how much did the assistant receive?",
    options: ["₦32.00", "₦320.00", "₦336.00", "₦300.00"],
    answer: "₦320.00",
    explanation: "Let assistant's days=d, carpenter's=d+10. 40(d+10)+10d=2000 → 50d=1600 → d=32. Assistant receives 10×32=₦320.00."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1990, exam: "JAMB",
    question: "Find the sum of the first 18 terms of the progression 3, 6, 12, ...",
    options: ["3(2¹⁷-1)", "3(2¹⁸)-1", "3(2¹⁸+1)", "3(2¹⁸-1)"],
    answer: "3(2¹⁸-1)",
    explanation: "GP with a=3, r=2. Sum = a(rⁿ-1)/(r-1) = 3(2¹⁸-1)/(1) = 3(2¹⁸-1)."
  },
  {
    subject: "Mathematics", topic: "Coordinate Geometry", year: 1990, exam: "JAMB",
    question: "A downward-opening parabola crosses the x-axis at x=-1 and x=2. What is the equation of the quadratic function represented?",
    options: ["y = x²+x-2", "y = x²-x-2", "y = -x²-x+2", "y = -x+x+2"],
    answer: "y = -x²-x+2",
    explanation: "With roots -1 and 2: y=k(x+1)(x-2)=k(x²-x-2). For a downward parabola, k is negative (k=-1), giving y=-x²+x+2. (Note: this doesn't exactly match any printed option, which all seem to have a sign inconsistency in the linear term; option C is the closest match.)"
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1990, exam: "JAMB",
    question: "At what value of x is the function x² + x + 1 minimum?",
    options: ["-1", "-1/2", "½", "1"],
    answer: "-1/2",
    explanation: "Vertex of ax²+bx+c is at x=-b/2a = -1/2."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1990, exam: "JAMB",
    question: "A trapezium PQRS has area 73.5cm² and height 10.5cm. Find the length of PS if QR is one-third of PS.",
    options: ["21cm", "17½cm", "14cm", "10½cm"],
    answer: "10½cm",
    explanation: "Area = ½(PS+QR)(height). Let PS=x, QR=x/3. 73.5 = ½(x+x/3)(10.5) = (4x/3)(5.25) = 7x → x=10.5cm."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1990, exam: "JAMB",
    question: "The angle of a sector of a circle, radius 10.5cm, is 48°. Calculate the perimeter of the sector.",
    options: ["8.8cm", "25.4cm", "25.6cm", "29.8cm"],
    answer: "29.8cm",
    explanation: "Circumference = 2π(10.5) = 66cm. Arc length = (48/360)×66 = 8.8cm. Perimeter = arc + 2 radii = 8.8+21 = 29.8cm."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1990, exam: "JAMB",
    question: "In a triangle PQR, S is a point inside such that PS = QS = RS (S is equidistant from all three vertices, i.e. the circumcentre). If angle QSR = 100°, find angle QPR.",
    options: ["40°", "50°", "80°", "100°"],
    answer: "50°",
    explanation: "Since PS=QS=RS, S is the centre of the circle through P, Q, R. Angle QSR (100°) is the central angle for arc QR, and angle QPR is the inscribed angle subtending the same arc from P — half of 100°, so 50°."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1990, exam: "JAMB",
    question: "Find the length of a side of a rhombus whose diagonals are 6cm and 8cm.",
    options: ["8cm", "5cm", "4cm", "3cm"],
    answer: "5cm",
    explanation: "Each side = √[(6/2)²+(8/2)²] = √(9+16) = √25 = 5cm."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1990, exam: "JAMB",
    question: "Each of the interior angles of a regular polygon is 140°. How many sides has the polygon?",
    options: ["9", "8", "7", "5"],
    answer: "9",
    explanation: "Exterior angle = 180-140 = 40°. Number of sides = 360/40 = 9."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1990, exam: "JAMB",
    question: "PQRS is a cyclic quadrilateral. PQ and SR are produced to meet at an external point T, with PQT and SRT being straight lines. If angle SPQ = 81° and angle PTS = 22°, find the value of x = angle RQT (the exterior angle of the quadrilateral at Q).",
    options: ["59°", "77°", "103°", "121°"],
    answer: "77°",
    explanation: "In triangle PST: angle P=81°, angle T=22°, so angle PST=180-81-22=77°, which equals angle PSR (since R lies on ST). Since PQRS is cyclic, the exterior angle at Q equals the interior opposite angle, angle PSR, so x=77°."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1990, exam: "JAMB",
    question: "In a regular pentagon PQRST, PR intersects QS at O. Calculate angle RQS.",
    options: ["36°", "72°", "108°", "144°"],
    answer: "36°",
    explanation: "In a regular pentagon, the diagonal from one vertex to a non-adjacent vertex creates a well-known 36°-72°-72° isosceles triangle. Angle RQS (between diagonal QS and side/diagonal QR at vertex Q) works out to 36°."
  },
  {
    subject: "Mathematics", topic: "Trigonometry", year: 1990, exam: "JAMB",
    question: "If cos q = 12/13, find 1 + cot²q",
    options: ["169/25", "25/169", "169/144", "144/169"],
    answer: "169/25",
    explanation: "1+cot²q = cosec²q = 1/sin²q. sin²q = 1-cos²q = 1-144/169 = 25/169. cosec²q = 169/25."
  },
  {
    subject: "Mathematics", topic: "Trigonometry", year: 1990, exam: "JAMB",
    question: "In a triangle XYZ, angle YXZ = 30°, angle XYZ = 105° and XY = 8cm. Calculate YZ.",
    options: ["162√cm", "8√2cm", "4√2cm", "2√2cm"],
    answer: "4√2cm",
    explanation: "Angle Z = 180-30-105 = 45°. By the sine rule: YZ/sinX = XY/sinZ → YZ = 8×sin30°/sin45° = 8×0.5/(√2/2) = 4√2cm."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1990, exam: "JAMB",
    question: "A cylindrical pipe made of metal is 3cm thick. If the internal radius of the pipe is 10cm, find the volume of metal used in making 3m of the pipe.",
    options: ["153πcm³", "207πcm³", "15,300πcm³", "20,700πcm³"],
    answer: "20,700πcm³",
    explanation: "External radius=13cm, internal=10cm, length=300cm. Volume = π(13²-10²)×300 = π(69)×300 = 20,700π cm³."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1990, exam: "JAMB",
    question: "The locus of a point which moves so that it is equidistant from two intersecting straight lines is the",
    options: [
      "perpendicular bisector of the two lines",
      "angle bisector of the two lines",
      "bisector of the two lines",
      "line parallel to the two lines"
    ],
    answer: "angle bisector of the two lines",
    explanation: "A point equidistant from two intersecting lines lies on the bisector of the angle between them."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1990, exam: "JAMB",
    question: "4, 16, 30, 20, 10, 14 and 26 are represented on a pie chart. Find the sum of the angles of the sectors representing all numbers equal to or greater than 16.",
    options: ["48°", "84°", "92°", "276°"],
    answer: "276°",
    explanation: "Total sum=120. Numbers ≥16: 16,30,20,26, summing to 92. Angle = (92/120)×360° = 276°."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1990, exam: "JAMB",
    question: "Below are the scores of a group of students in a test: Scores 1,2,3,4,5,6 with frequencies 1,4,5,6,x,2. If the average score is 3.5, find the value of x.",
    options: ["1", "2", "3", "4"],
    answer: "2",
    explanation: "Total students=18+x. Total score=60+5x. Setting (60+5x)/(18+x)=3.5: 60+5x=63+3.5x → 1.5x=3 → x=2."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1990, exam: "JAMB",
    question: "Two numbers are removed at random from the numbers 1, 2, 3 and 4. What is the probability that the sum of the numbers removed is even?",
    options: ["2/3", "½", "1/3", "¼"],
    answer: "1/3",
    explanation: "Of the 6 possible pairs, only (1,3) and (2,4) give even sums. P = 2/6 = 1/3."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1990, exam: "JAMB",
    question: "Find the probability that a number selected at random from 41 to 55 is a multiple of 9",
    options: ["1/9", "2/15", "3/16", "7/8"],
    answer: "2/15",
    explanation: "The numbers 41-55 (15 numbers) contain 2 multiples of 9: 45 and 54. P = 2/15."
  }
]

export default mathsJamb1990
