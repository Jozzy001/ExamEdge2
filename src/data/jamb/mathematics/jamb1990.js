// JAMB 1990 Mathematics Past Questions (audited)
// Source had 50 questions. 9 were skipped (diagrams, or source text too garbled/ambiguous to transcribe reliably).
// Display notes: powers typed as 10^(-3), a^(210) for MathText; no arrows, no U+2212 minus, no ⁻ glyph.
// Items marked "// CHECK SOURCE" need the owner to verify against the original paper.

const mathsJamb1990 = [

  {
    subject: "Mathematics", topic: "Algebra", year: 1990, exam: "JAMB",
    question: "The H.C.F. of a²bx + abx² and a²b - b³ is",
    options: ["b", "a + b", "a(a+b)", "abx(a²-b²)"],
    answer: "b",
    explanation: "a²bx + abx² = abx(a + x), and a²b - b³ = b(a - b)(a + b). The only factor common to both is b."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1990, exam: "JAMB",
    question: "Correct 241.34 × (3 × 10^(-3))² to 4 significant figures",
    options: ["0.0014", "0.001448", "0.0022", "0.002172"],
    answer: "0.002172",
    explanation: "(3 × 10^(-3))² = 9 × 10^(-6). Then 241.34 × 9 × 10^(-6) = 2172.06 × 10^(-6) = 0.00217206, which is 0.002172 to 4 s.f."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1990, exam: "JAMB",
    question: "At what rate would a sum of ₦100.00 deposited for 5 years raise an interest of ₦7.50?",
    options: ["1½%", "2½%", "15%", "25%"],
    answer: "1½%",
    explanation: "I = PRT/100, so 7.5 = 100 × R × 5/100 = 5R. So R = 1.5%."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1990, exam: "JAMB",
    question: "Three children shared a basket of mangoes in such a way that the first child took ¼ of the mangoes and the second took ¾ of the remainder. What fraction of the mangoes did the third child take?",
    options: ["3/16", "7/16", "9/16", "13/16"],
    answer: "3/16",
    explanation: "The first takes 1/4, leaving 3/4. The second takes 3/4 of that, which is 9/16. What remains is 3/4 - 9/16 = 3/16."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1990, exam: "JAMB",
    question: "Simplify and express in standard form: (0.00275 × 0.00640) / (0.025 × 0.08)",
    options: ["8.8 × 10^(-1)", "8.8 × 10²", "8.8 × 10^(-3)", "8.8 × 10³"],
    answer: "8.8 × 10^(-3)",
    explanation: "Numerator = 1.76 × 10^(-5). Denominator = 2 × 10^(-3). The result is 0.88 × 10^(-2) = 8.8 × 10^(-3)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1990, exam: "JAMB",
    question: "Three brothers in a business deal share the profit at the end of a contract. The first received 1/3 of the profit and the second 2/3 of the remainder. If the third received the remaining ₦12,000.00, how much profit did they share (in total)?",
    options: ["₦60,000.00", "₦54,000.00", "₦48,000.00", "₦42,000.00"],
    answer: "₦54,000.00",
    explanation: "The first takes 1/3, leaving 2/3. The second takes 2/3 of that, which is 4/9. What remains is 2/3 - 4/9 = 2/9, and this equals 12,000. So the total is 12,000 × 9/2 = 54,000."
  },
  {
    // CHECK SOURCE: option 4 was printed "3√/4" (garbled); read as 3√3/4. It is a wrong-answer option either way.
    subject: "Mathematics", topic: "Number & Numeration", year: 1990, exam: "JAMB",
    question: "Simplify: √27 + 3/√3",
    options: ["4√3", "4/√3", "3√3", "3√3/4"],
    answer: "4√3",
    explanation: "√27 = 3√3, and 3/√3 = √3 after rationalizing. The sum is 3√3 + √3 = 4√3."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1990, exam: "JAMB",
    question: "Simplify: 3log₆9 + log₆12 + log₆64 - log₆72",
    options: ["5", "7776", "log₆31", "(7776)^(6)"],
    answer: "5",
    explanation: "The expression = log₆(9³ × 12 × 64/72) = log₆(7776). Since 6^(5) = 7776, this equals 5."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1990, exam: "JAMB",
    question: "If a = 2, b = -2 and c = -1/2, evaluate (ab² - bc²)(abc - a²c)",
    options: ["0", "28", "-30", "34"],
    answer: "34",
    explanation: "ab² = 8 and bc² = -0.5, so ab² - bc² = 8.5. abc = 2 and a²c = -2, so abc - a²c = 4. The product is 8.5 × 4 = 34."
  },
  {
    // CHECK SOURCE: options 2 and 3 were both "Y = CZ²". I changed option 3 to "Y = CZ" so no option is repeated. Also made "y" a capital Y to match the question.
    subject: "Mathematics", topic: "Algebra", year: 1990, exam: "JAMB",
    question: "Y varies inversely as X², and X varies directly as Z. Find the relationship between Y and Z, if C is a constant.",
    options: ["Z²Y = C", "Y = CZ²", "Y = CZ", "Y = C"],
    answer: "Z²Y = C",
    explanation: "Y = k/X² and X = mZ, so Y = k/(mZ)² = K/Z² (combining the constants). So YZ² = C, a constant."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1990, exam: "JAMB",
    question: "If f(x-4) = x² + 2x + 3, find f(2)",
    options: ["6", "11", "27", "51"],
    answer: "51",
    explanation: "Set x - 4 = 2, so x = 6. Then f(2) = 6² + 2(6) + 3 = 36 + 12 + 3 = 51."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1990, exam: "JAMB",
    question: "Factorize: 9(x+y)² - 4(x-y)²",
    options: ["(x+y)(5x+y)", "(x+y)²", "(x+5y)(5x+y)", "5(x+y)²"],
    answer: "(x+5y)(5x+y)",
    explanation: "This is a difference of two squares: [3(x+y)]² - [2(x-y)]² = [3(x+y) - 2(x-y)][3(x+y) + 2(x-y)] = (x + 5y)(5x + y)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1990, exam: "JAMB",
    question: "If a² + b² = 16 and 2ab = 7, find all the possible values of (a-b)",
    options: ["3, -3", "2, -2", "1, -1", "3, -1"],
    answer: "3, -3",
    explanation: "(a - b)² = a² + b² - 2ab = 16 - 7 = 9, so a - b = 3 or -3."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1990, exam: "JAMB",
    question: "Divide x³ - 2x² - 5x + 6 by (x-1)",
    options: ["x² - x - 6", "x² - 5x + 6", "x² - 7x + 6", "x² - 5x - 6"],
    answer: "x² - x - 6",
    explanation: "Dividing gives x³ - 2x² - 5x + 6 = (x - 1)(x² - x - 6)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1990, exam: "JAMB",
    question: "If x + 1/x = 4, find x² + 1/x²",
    options: ["16", "14", "12", "9"],
    answer: "14",
    explanation: "(x + 1/x)² = x² + 2 + 1/x² = 16, so x² + 1/x² = 16 - 2 = 14."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1990, exam: "JAMB",
    question: "What must be added to 4x² - 4 to make it a perfect square (of the form (2x-1/x)²)?",
    options: ["-1/x²", "1/x²", "1", "-1"],
    answer: "1/x²",
    explanation: "(2x - 1/x)² = 4x² - 4 + 1/x². So 1/x² must be added to 4x² - 4 to make this perfect square."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1990, exam: "JAMB",
    question: "Find the solution of the equation x - 8√x + 15 = 0",
    options: ["3, 5", "-3, -5", "9, 25", "-9, 25"],
    answer: "9, 25",
    explanation: "Let u = √x. Then u² - 8u + 15 = 0, so (u - 3)(u - 5) = 0, so u = 3 or 5. So x = 9 or 25."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1990, exam: "JAMB",
    question: "The lengths of the sides of a right-angled triangle are x cm, (3x-1)cm and (3x+1)cm. Find x.",
    options: ["5", "7", "8", "12"],
    answer: "12",
    explanation: "The longest side (3x + 1) is the hypotenuse: (3x + 1)² = x² + (3x - 1)². So 9x² + 6x + 1 = 10x² - 6x + 1, so x² - 12x = 0, so x = 12 (the sides are 12, 35 and 37)."
  },
  {
    // CHECK SOURCE: I added "the width is the shorter side" because the sides are 5m and 7m and the question doesn't say which is the width.
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1990, exam: "JAMB",
    question: "The perimeter of a rectangular lawn is 24m. If the area of the lawn is 35m², how wide is the lawn? (The width is the shorter side.)",
    options: ["5m", "7m", "12m", "14m"],
    answer: "5m",
    explanation: "l + w = 12 and lw = 35, so the sides are the roots of t² - 12t + 35 = 0, which are 5 and 7. The width, the shorter side, is 5m."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1990, exam: "JAMB",
    question: "Simplify: x/(x+y) + y/(x-y) - x²/(x²-y²)",
    options: ["x²/(x²-y²)", "y²/(x²-y²)", "x/(x²-y²)", "y/(x²-y²)"],
    answer: "y²/(x²-y²)",
    explanation: "Over the common denominator (x² - y²): [x(x - y) + y(x + y) - x²]/(x² - y²) = [x² - xy + xy + y² - x²]/(x² - y²) = y²/(x² - y²)."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1990, exam: "JAMB",
    question: "Given that x² + y² + z² = 194, calculate z if x = 7 and √y = 3",
    options: ["√10", "8", "12.2", "13.4"],
    answer: "8",
    explanation: "√y = 3 means y = 9, so y² = 81. Also x² = 49. So z² = 194 - 49 - 81 = 64, and z = 8."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1990, exam: "JAMB",
    question: "Find the sum of the first twenty terms of the arithmetic progression: log a, log a², log a³, ...",
    options: ["log a^(20)", "log a^(21)", "log a^(200)", "log a^(210)"],
    answer: "log a^(210)",
    explanation: "The nth term is n × log a. The sum of the first 20 terms = log a × (1 + 2 + ... + 20) = 210 log a = log a^(210)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1990, exam: "JAMB",
    question: "A carpenter charges ₦40.00 per day for himself and ₦10.00 per day for his assistant. If a fleet of cars was painted for ₦2,000.00 and the carpenter worked 10 days more than his assistant, how much did the assistant receive?",
    options: ["₦32.00", "₦320.00", "₦336.00", "₦300.00"],
    answer: "₦320.00",
    explanation: "Let the assistant work d days, so the carpenter works d + 10 days. Then 40(d + 10) + 10d = 2,000, so 50d = 1,600 and d = 32. The assistant receives 10 × 32 = ₦320.00."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1990, exam: "JAMB",
    question: "Find the sum of the first 18 terms of the progression 3, 6, 12, ...",
    options: ["3(2^(17)-1)", "3(2^(18))-1", "3(2^(18)+1)", "3(2^(18)-1)"],
    answer: "3(2^(18)-1)",
    explanation: "This is a GP with a = 3 and r = 2. The sum = a(r^(n) - 1)/(r - 1) = 3(2^(18) - 1)/1 = 3(2^(18) - 1)."
  },
  {
    // Fixed: the marked answer had the wrong roots, and the true answer was option 4, which was printed "y = -x+x+2" (its ² was lost).
    subject: "Mathematics", topic: "Coordinate Geometry", year: 1990, exam: "JAMB",
    question: "A downward-opening parabola crosses the x-axis at x = -1 and x = 2. What is the equation of the quadratic function represented?",
    options: ["y = x²+x-2", "y = x²-x-2", "y = -x²-x+2", "y = -x²+x+2"],
    answer: "y = -x²+x+2",
    explanation: "With roots -1 and 2, y = k(x + 1)(x - 2) = k(x² - x - 2). The parabola opens downward, so k = -1, which gives y = -x² + x + 2."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1990, exam: "JAMB",
    question: "At what value of x is the function x² + x + 1 minimum?",
    options: ["-1", "-1/2", "½", "1"],
    answer: "-1/2",
    explanation: "The minimum of ax² + bx + c is at x = -b/(2a) = -1/2."
  },
  {
    // Reworded: PS and QR stated as the parallel sides (the only reading that gives an answer).
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1990, exam: "JAMB",
    question: "A trapezium PQRS has area 73.5cm² and height 10.5cm. If PS and QR are its parallel sides and QR is one-third of PS, find the length of PS.",
    options: ["21cm", "17½cm", "14cm", "10½cm"],
    answer: "10½cm",
    explanation: "Area = ½(PS + QR) × height. Let PS = x and QR = x/3. Then 73.5 = ½(x + x/3)(10.5) = (4x/3)(5.25) = 7x, so x = 10.5cm."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1990, exam: "JAMB",
    question: "The angle of a sector of a circle, radius 10.5cm, is 48°. Calculate the perimeter of the sector. (Take π = 22/7.)",
    options: ["8.8cm", "25.4cm", "25.6cm", "29.8cm"],
    answer: "29.8cm",
    explanation: "The circumference = 2 × 22/7 × 10.5 = 66cm. The arc length = (48/360) × 66 = 8.8cm. The perimeter = arc + 2 radii = 8.8 + 21 = 29.8cm."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1990, exam: "JAMB",
    question: "S is a point inside triangle PQR such that PS = QS = RS. If angle QSR = 100°, find angle QPR.",
    options: ["40°", "50°", "80°", "100°"],
    answer: "50°",
    explanation: "Since PS = QS = RS, S is the centre of the circle through P, Q and R. Angle QSR (100°) is the angle at the centre on arc QR, and angle QPR on the circumference is half of it, so QPR = 50°."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1990, exam: "JAMB",
    question: "Find the length of a side of a rhombus whose diagonals are 6cm and 8cm.",
    options: ["8cm", "5cm", "4cm", "3cm"],
    answer: "5cm",
    explanation: "The diagonals bisect each other at right angles, so each side = √[(6/2)² + (8/2)²] = √(9 + 16) = 5cm."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1990, exam: "JAMB",
    question: "Each of the interior angles of a regular polygon is 140°. How many sides has the polygon?",
    options: ["9", "8", "7", "5"],
    answer: "9",
    explanation: "The exterior angle = 180° - 140° = 40°. The number of sides = 360°/40° = 9."
  },
  {
    // Reworded: removed "x =" from the question (it referred to a figure).
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1990, exam: "JAMB",
    question: "PQRS is a cyclic quadrilateral. PQ and SR are produced to meet at an external point T. If angle SPQ = 81° and angle PTS = 22°, find angle RQT.",
    options: ["59°", "77°", "103°", "121°"],
    answer: "77°",
    explanation: "In triangle PST, angle P = 81° and angle T = 22°, so angle PST = 180° - 81° - 22° = 77°. This is the same as angle PSR, since R lies on ST. In a cyclic quadrilateral the exterior angle at Q equals the interior opposite angle, so angle RQT = angle PSR = 77°."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1990, exam: "JAMB",
    question: "In a regular pentagon PQRST, PR intersects QS at O. Calculate angle RQS.",
    options: ["36°", "72°", "108°", "144°"],
    answer: "36°",
    explanation: "Each interior angle of a regular pentagon is 108°. Triangle QRS is isosceles with QR = RS and angle QRS = 108°, so angle RQS = (180° - 108°)/2 = 36°."
  },
  {
    subject: "Mathematics", topic: "Trigonometry", year: 1990, exam: "JAMB",
    question: "If cos q = 12/13, find 1 + cot²q",
    options: ["169/25", "25/169", "169/144", "144/169"],
    answer: "169/25",
    explanation: "1 + cot²q = cosec²q = 1/sin²q. sin²q = 1 - 144/169 = 25/169, so cosec²q = 169/25."
  },
  {
    // CHECK SOURCE: option 1 was printed "162√cm" (garbled); read as 16√2cm. It is a wrong-answer option either way.
    subject: "Mathematics", topic: "Trigonometry", year: 1990, exam: "JAMB",
    question: "In a triangle XYZ, angle YXZ = 30°, angle XYZ = 105° and XY = 8cm. Calculate YZ.",
    options: ["16√2cm", "8√2cm", "4√2cm", "2√2cm"],
    answer: "4√2cm",
    explanation: "Angle Z = 180° - 30° - 105° = 45°. By the sine rule, YZ/sin 30° = XY/sin 45°, so YZ = 8 × 0.5/(√2/2) = 4√2cm."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1990, exam: "JAMB",
    question: "A cylindrical pipe made of metal is 3cm thick. If the internal radius of the pipe is 10cm, find the volume of metal used in making 3m of the pipe.",
    options: ["153πcm³", "207πcm³", "15,300πcm³", "20,700πcm³"],
    answer: "20,700πcm³",
    explanation: "The external radius = 13cm, the internal radius = 10cm and the length = 300cm. Volume = π(13² - 10²) × 300 = π(69)(300) = 20,700π cm³."
  },
  {
    // CHECK SOURCE: options 2 and 3 mean almost the same thing ("angle bisector" vs "bisector of the two lines"). Option 3 may have originally read differently.
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
    question: "The numbers 4, 16, 30, 20, 10, 14 and 26 are represented on a pie chart. Find the sum of the angles of the sectors representing all numbers equal to or greater than 16.",
    options: ["48°", "84°", "92°", "276°"],
    answer: "276°",
    explanation: "The total is 4 + 16 + 30 + 20 + 10 + 14 + 26 = 120. The numbers 16 or more are 16, 30, 20 and 26, which add up to 92. The angle = (92/120) × 360° = 276°."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1990, exam: "JAMB",
    question: "Below are the scores of a group of students in a test. Scores: 1, 2, 3, 4, 5, 6. Frequencies: 1, 4, 5, 6, x, 2. If the average score is 3.5, find the value of x.",
    options: ["1", "2", "3", "4"],
    answer: "2",
    explanation: "The number of students = 18 + x. The total score = 1 + 8 + 15 + 24 + 5x + 12 = 60 + 5x. Setting (60 + 5x)/(18 + x) = 3.5 gives 60 + 5x = 63 + 3.5x, so 1.5x = 3 and x = 2."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1990, exam: "JAMB",
    question: "Two numbers are removed at random from the numbers 1, 2, 3 and 4. What is the probability that the sum of the numbers removed is even?",
    options: ["2/3", "½", "1/3", "¼"],
    answer: "1/3",
    explanation: "There are 6 possible pairs. Only (1,3) and (2,4) give an even sum, so P = 2/6 = 1/3."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1990, exam: "JAMB",
    question: "Find the probability that a number selected at random from 41 to 55 is a multiple of 9",
    options: ["1/9", "2/15", "3/16", "7/8"],
    answer: "2/15",
    explanation: "The numbers 41 to 55 inclusive are 15 numbers, and 2 of them are multiples of 9: 45 and 54. So P = 2/15."
  }
]

export default mathsJamb1990