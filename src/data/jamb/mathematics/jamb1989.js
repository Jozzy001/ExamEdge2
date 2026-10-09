// JAMB 1989 Mathematics Past Questions
// Fully flattened — audited standalone objects with topics, answers, and detailed explanations.
// 41 active questions retained. 1 question commented out because its missing diagram is required.
// Strictly skipped questions containing complex geometric diagrams, coordinate graphs, or custom data tables.

const mathsJamb1989 = [

  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1989, exam: "JAMB",
    question: "Which of the following is in descending order?",
    options: ["9/10, 4/5, 3/4, 7/10", "4/5, 9/10, 3/4, 17/20", "6/10, 17/20, 4/5, 3/4", "4/5, 9/10, 17/10, 3/4"],
    answer: "9/10, 4/5, 3/4, 7/10",
    explanation: "Converting to decimals: 9/10 = 0.9, 4/5 = 0.8, 3/4 = 0.75 and 7/10 = 0.7. These values steadily decrease, so the first list is in descending order."
  },

  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1989, exam: "JAMB",
    question: "Evaluate: 2,700,000 × 0.03 ÷ 18,000",
    options: ["4.5 × 10^0", "4.5 × 10^1", "4.5 × 10^2", "4.5 × 10^3"],
    answer: "4.5 × 10^0",
    explanation: "2,700,000 × 0.03 = 81,000. Then 81,000 ÷ 18,000 = 4.5 = 4.5 × 10^0."
  },

  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1989, exam: "JAMB",
    question: "The prime factors of 2,520 are",
    options: ["2,9,5", "2,9,7", "2,3,5,7", "2,3,7,9"],
    answer: "2,3,5,7",
    explanation: "2520 = 2^3 × 3^2 × 5 × 7. Its distinct prime factors are 2, 3, 5 and 7."
  },

  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1989, exam: "JAMB",
    question: "Simplify: [(64r^(-6))^(1/3)]^(1/2)",
    options: ["r", "2r", "1/2r", "2/r"],
    answer: "2/r",
    explanation: "Assuming r > 0, (64r^(-6))^(1/3) = 4r^(-2). Taking the square root gives (4r^(-2))^(1/2) = 2r^(-1) = 2/r."
  },

  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1989, exam: "JAMB",
    question: "What is the difference between 0.007685 correct to three significant figures and 0.007685 correct to four places of decimal?",
    options: ["10^(-5)", "7 × 10^(-4)", "8 × 10^(-5)", "10^(-6)"],
    answer: "10^(-5)",
    explanation: "To 3 significant figures, 0.007685 becomes 0.00769. To 4 decimal places, it becomes 0.0077. Difference = 0.0077 - 0.00769 = 0.00001 = 10^(-5)."
  },

  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1989, exam: "JAMB",
    question: "If a:b = 5:8 and x:y = 25:16, evaluate a/x : b/y",
    options: ["125:128", "3:5", "3:4", "2:5"],
    answer: "2:5",
    explanation: "a/x = 5/25 = 1/5 and b/y = 8/16 = 1/2. Therefore (1/5):(1/2) = 2:5."
  },

  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1989, exam: "JAMB",
    question: "Oke deposited ₦800.00 in the bank at the rate of 12½% simple interest. After some time the total amount was one and half times the principal. For how many years was the money left in the bank?",
    options: ["2", "4", "5½", "8"],
    answer: "4",
    explanation: "Amount = 1.5 × 800 = 1200, so interest = 400. Using I = PRT/100: 400 = 800 × 12.5 × T/100 = 100T. Therefore T = 4 years."
  },

  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1989, exam: "JAMB",
    question: "If the surface area of a sphere is increased by 44%, find the percentage increase in its diameter.",
    options: ["44", "22", "30", "20"],
    answer: "20",
    explanation: "Surface area is proportional to diameter^2. If the area becomes 1.44 times the original, the diameter becomes √1.44 = 1.2 times the original. Therefore the increase is 20%."
  },

  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1989, exam: "JAMB",
    question: "Simplify: 4 - 1/(2 - √3)",
    options: ["2√3", "2 + √3", "-2 + √3", "2 - √3"],
    answer: "2 - √3",
    explanation: "Rationalizing, 1/(2 - √3) = (2 + √3)/[(2 - √3)(2 + √3)] = 2 + √3. Therefore 4 - (2 + √3) = 2 - √3."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1989, exam: "JAMB",
    question: "What are the values of y which satisfy the equation 9^y - 4(3^y) + 3 = 0?",
    options: ["-1 and 0", "-1 and 1", "1 and 3", "0 and 1"],
    answer: "0 and 1",
    explanation: "Let u = 3^y. Then u^2 - 4u + 3 = 0, so (u - 1)(u - 3) = 0. Hence u = 1 or u = 3. Therefore y = 0 or y = 1."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1989, exam: "JAMB",
    question: "The cost of dinner for a group of students is partly constant and partly varies directly as the number of students. If the cost is ₦74.00 when the number of students is 20, and ₦96.00 when the number is 30, find the cost when there are 15 students.",
    options: ["₦68.50", "₦63.00", "₦60.00", "₦52.00"],
    answer: "₦63.00",
    explanation: "Let cost = a + bn. Then 74 = a + 20b and 96 = a + 30b. Subtracting gives 22 = 10b, so b = 2.2. Hence a = 30. For 15 students, cost = 30 + 2.2 × 15 = ₦63."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1989, exam: "JAMB",
    question: "If f(x) = 2x^2 - 5x + 3, find f(x + 1)",
    options: ["2x^2 - x", "2x^2 - x + 10", "4x^2 + 3x + 2", "4x^2 + 3x + 12"],
    answer: "2x^2 - x",
    explanation: "f(x + 1) = 2(x + 1)^2 - 5(x + 1) + 3 = 2x^2 + 4x + 2 - 5x - 5 + 3 = 2x^2 - x."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1989, exam: "JAMB",
    question: "Solve for the positive number x such that 2^(x^3 - x^2 - 2x) = 1",
    options: ["4", "3", "2", "1"],
    answer: "2",
    explanation: "Since 2^0 = 1, we need x^3 - x^2 - 2x = 0. Factorizing gives x(x - 2)(x + 1) = 0. The positive solution is x = 2."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1989, exam: "JAMB",
    question: "Simplify: (324 - 4x^2) / (2x + 18)",
    options: ["2(x - 9)", "2(9 + x)", "81 - x^2", "-2(x - 9)"],
    answer: "-2(x - 9)",
    explanation: "324 - 4x^2 = 4(81 - x^2) = 4(9 - x)(9 + x). The denominator is 2(x + 9). Therefore the expression simplifies to 2(9 - x) = -2(x - 9)."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1989, exam: "JAMB",
    question: "Factorize completely: y^3 - 4xy + xy^3 - 4y",
    options: ["(x + xy)(y + 2)(y - 2)", "(y + xy)(y + 2)(y - 2)", "y(1 + x)(y + 2)(y - 2)", "y(1 - x)(y + 2)(y - 2)"],
    answer: "y(1 + x)(y + 2)(y - 2)",
    explanation: "Rearranging gives y^3 + xy^3 - 4xy - 4y = y^3(1 + x) - 4y(x + 1) = (1 + x)(y^3 - 4y) = y(1 + x)(y - 2)(y + 2)."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1989, exam: "JAMB",
    question: "If one factor of x^3 - 8^(-1) is x - 2^(-1), the other factor is",
    options: ["x^2 + 2^(-1)x - 4^(-1)", "x^2 - 2^(-1)x - 4^(-1)", "x^2 + 2^(-1)x + 4^(-1)", "x^2 + 2^(-1)x - 4"],
    answer: "x^2 + 2^(-1)x + 4^(-1)",
    explanation: "Since 8^(-1) = (1/2)^3, x^3 - (1/2)^3 = (x - 1/2)(x^2 + x/2 + 1/4). Therefore the other factor is x^2 + 2^(-1)x + 4^(-1)."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1989, exam: "JAMB",
    question: "Factorize: 4a^2 + 12ab - c^2 + 9b^2",
    options: ["4a(a - 3b) + (3b - c)^2", "(2a + 3b - c)(2a + 3b + c)", "(2a - 3b - c)(2a - 3b + c)", "4a(a - 3b) + (3b + c)^2"],
    answer: "(2a + 3b - c)(2a + 3b + c)",
    explanation: "4a^2 + 12ab + 9b^2 - c^2 = (2a + 3b)^2 - c^2. Therefore the factorization is (2a + 3b - c)(2a + 3b + c)."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1989, exam: "JAMB",
    question: "What are K and L respectively if 1/2(3y - 4x)^2 = 8x^2 + Kxy + Ly^2?",
    options: ["-12, 9/2", "-6, 9", "6, 9", "12, 9/2"],
    answer: "-12, 9/2",
    explanation: "1/2(3y - 4x)^2 = 1/2(16x^2 - 24xy + 9y^2) = 8x^2 - 12xy + 9/2y^2. Therefore K = -12 and L = 9/2."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1989, exam: "JAMB",
    question: "Solve the pair of equations for x and y respectively: 2x^(-1) - 3y^(-1) = 4, 4x^(-1) + y^(-1) = 1",
    options: ["-1,2", "1,2", "2,1", "2,-1"],
    answer: "2,-1",
    explanation: "Let u = 1/x and v = 1/y. Then 2u - 3v = 4 and 4u + v = 1. From the second equation, v = 1 - 4u. Substitution gives 2u - 3(1 - 4u) = 4, so 14u = 7 and u = 1/2. Hence v = -1. Therefore x = 2 and y = -1."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1989, exam: "JAMB",
    question: "What value of Q will make the expression 4x^2 + 5x + Q a complete square?",
    options: ["25/16", "25/64", "5/8", "5/4"],
    answer: "25/16",
    explanation: "Complete the square: 4x^2 + 5x + Q = (2x + 5/4)^2 when Q = (5/4)^2 = 25/16."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1989, exam: "JAMB",
    question: "Find the range of values of r which satisfies the inequality r/a + r/b + r/c > 1, where a, b and c are positive.",
    options: ["r > abc/(bc + ac + ab)", "r > abc", "r > 1/a + 1/b + 1/c", "r > 1/abc"],
    answer: "r > abc/(bc + ac + ab)",
    explanation: "r(1/a + 1/b + 1/c) > 1. Combining the fractions gives r(bc + ac + ab)/abc > 1. Since a, b and c are positive, r > abc/(bc + ac + ab)."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1989, exam: "JAMB",
    question: "Express: 1/(x + 1) - 1/(x - 2)",
    options: ["-3/[(x + 1)(2 - x)]", "3/[(x + 1)(2 - x)]", "-1/[(x + 1)(x - 2)]", "1/[(x + 1)(x - 2)]"],
    answer: "3/[(x + 1)(2 - x)]",
    explanation: "Combining the fractions gives [(x - 2) - (x + 1)]/[(x + 1)(x - 2)] = -3/[(x + 1)(x - 2)] = 3/[(x + 1)(2 - x)]."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1989, exam: "JAMB",
    question: "The sum of the first two terms of a geometric progression is x and the sum of the last two terms of a 4-term progression is y. Find the common ratio in terms of x and y.",
    options: ["x/y", "y/x", "(x/y)^(1/2)", "(y/x)^(1/2)"],
    answer: "(y/x)^(1/2)",
    explanation: "For a 4-term geometric progression, the sum of the last two terms is r^2 times the sum of the first two terms. Thus y/x = r^2, so r = (y/x)^(1/2)."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1989, exam: "JAMB",
    question: "If -8, m, n, 19 are in arithmetic progression, find (m, n)",
    options: ["1,10", "2,10", "3,13", "4,16"],
    answer: "1,10",
    explanation: "The common difference is (19 - (-8))/3 = 27/3 = 9. Therefore m = -8 + 9 = 1 and n = 1 + 9 = 10."
  },

  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1989, exam: "JAMB",
    question: "MN is a tangent to a circle at M. MR and MQ are two chords, with N, Q, R lying along a secant line from N (in that order). If angle QMN = 60° and angle MNQ = 40°, find angle RMQ.",
    options: ["120°", "11°", "60°", "20°"],
    answer: "20°",
    explanation: "By the tangent-chord theorem, angle QMN = angle MRQ = 60°. In triangle MNQ, angle MQN = 180° - 60° - 40° = 80°. Since N, Q and R are collinear, angle MQR = 180° - 80° = 100°. Therefore in triangle MQR, angle RMQ = 180° - 100° - 60° = 20°."
  },

  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1989, exam: "JAMB",
    question: "In triangle PQR, HK is parallel to QR, PH = 4cm and HQ = 3cm. What is the ratio KR:PR?",
    options: ["7:3", "3:7", "3:4", "4:3"],
    answer: "3:7",
    explanation: "Since HK is parallel to QR, triangle PHK is similar to triangle PQR. PH/PQ = PK/PR = 4/7. Therefore KR/PR = 1 - 4/7 = 3/7, so KR:PR = 3:7."
  },

  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1989, exam: "JAMB",
    question: "A regular polygon of (2k + 1) sides has 140° as the size of each interior angle. Find k.",
    options: ["4", "4½", "8", "8½"],
    answer: "4",
    explanation: "The exterior angle is 180° - 140° = 40°. Therefore the number of sides is 360°/40° = 9. Since 2k + 1 = 9, k = 4."
  },

  /*
  CHECK SOURCE: This question explicitly depends on a missing diagram.
  The supplied text does not define enough of the geometry to independently
  verify the claimed answer of 72°. The original diagram should be checked.
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1989, exam: "JAMB",
    question: "In a diagram, PST is a straight line, and PQ = QS = SR, forming a chain of isosceles triangles. If angle QPS = 24°, find y (the resulting angle at the end of the chain).",
    options: ["24°", "48°", "72°", "84°"],
    answer: "72°",
    explanation: "The answer cannot be independently verified without the original diagram because the exact positions of the points and the definition of y are missing."
  }
  */

  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1989, exam: "JAMB",
    question: "In a circle, PQ is parallel to RS and QS bisects angle PQR. If angle PQR is 60°, find x (angle QSR).",
    options: ["30°", "40°", "60°", "120°"],
    answer: "30°",
    explanation: "QS bisects the 60° angle PQR, giving 30° on each side. Since PQ is parallel to RS, alternate angles formed by QS are equal. Therefore angle QSR = 30°."
  },

  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1989, exam: "JAMB",
    question: "PQRS is a rhombus. If PR^2 + QS^2 = kPQ^2, determine k.",
    options: ["1", "2", "3", "4"],
    answer: "4",
    explanation: "The diagonals of a rhombus bisect each other at right angles. Therefore (PR/2)^2 + (QS/2)^2 = PQ^2. Multiplying by 4 gives PR^2 + QS^2 = 4PQ^2, so k = 4."
  },

  {
    subject: "Mathematics", topic: "Trigonometry", year: 1989, exam: "JAMB",
    question: "In triangle XYZ, angle Y = angle Z = 30° and XZ = 3cm. Find YZ.",
    options: ["√3/2cm", "3√3/2cm", "3√3cm", "2√3cm"],
    answer: "3√3cm",
    explanation: "Since angles Y and Z are both 30°, angle X = 120°. By the sine rule, YZ/sin120° = XZ/sin30°. Hence YZ = 3 × (√3/2)/(1/2) = 3√3cm."
  },

  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1989, exam: "JAMB",
    question: "In triangle PQR, the bisector of angle QPR meets QR at S. The line PQ is produced to V and the bisector of angle VQS meets PS produced at T. If angle QPR = 46° and angle QST = 75°, calculate angle QTS.",
    options: ["41°", "52°", "64°", "82°"],
    answer: "41°",
    explanation: "Since PS bisects angle QPR, angle QPS = 23°. Because Q, S and R are collinear and QST = 75°, angle QSP = 105°. Therefore angle PQS = 180° - 23° - 105° = 52°. The exterior angle VQS is 180° - 52° = 128°, so its bisector gives angle VQT = 64°. Hence angle QTS = 180° - 75° - 64° = 41°."
  },

  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1989, exam: "JAMB",
    question: "A right triangle RST, right-angled at S, has legs in the ratio x:y = 5:12, and hypotenuse z = 52cm. Find the perimeter of the triangle.",
    options: ["68cm", "84cm", "100cm", "120cm"],
    answer: "120cm",
    explanation: "The 5:12:13 Pythagorean triple must be scaled by 4 because the hypotenuse is 52cm. The legs are therefore 20cm and 48cm. Perimeter = 20 + 48 + 52 = 120cm."
  },

  {
    subject: "Mathematics", topic: "Trigonometry", year: 1989, exam: "JAMB",
    question: "The pilot of an aeroplane, flying 10km above the ground in the direction of a landmark, views the landmark to have angles of depression of 35° and 55° from two points along the flight path. Find the distance between the two points of observation.",
    options: ["10(sin35° - sin55°)", "10(cos35° - cos55°)", "10(tan35° - tan55°)", "10(cot35° - cot55°)"],
    answer: "10(cot35° - cot55°)",
    explanation: "For a point of observation, horizontal distance to the landmark is height/tan(angle of depression) = height × cot(angle). Therefore the required distance is 10cot35° - 10cot55° = 10(cot35° - cot55°)."
  },

  {
    subject: "Mathematics", topic: "Trigonometry", year: 1989, exam: "JAMB",
    question: "4sin^2x - 3 = 0, find x if 0 < x < 90°",
    options: ["30°", "45°", "60°", "90°"],
    answer: "60°",
    explanation: "4sin^2x = 3, so sin^2x = 3/4. Since x is between 0° and 90°, sinx = √3/2. Therefore x = 60°."
  },

  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1989, exam: "JAMB",
    question: "A square tile has side 30cm. How many of these tiles cover a rectangular floor of length 7.2m and width 4.2m?",
    options: ["336", "420", "576", "720"],
    answer: "336",
    explanation: "Floor area = 7.2 × 4.2 = 30.24m^2 = 302,400cm^2. Tile area = 30 × 30 = 900cm^2. Number of tiles = 302,400/900 = 336."
  },

  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1989, exam: "JAMB",
    question: "A cylindrical metal pipe 1m long has an outer diameter of 7.2cm and an inner diameter of 2.8cm. Find the volume of metal used for the cylinder.",
    options: ["440πcm^3", "1,100πcm^3", "4,400πcm^3", "11,000πcm^3"],
    answer: "1,100πcm^3",
    explanation: "Outer radius = 3.6cm, inner radius = 1.4cm and length = 100cm. Volume = π(3.6^2 - 1.4^2) × 100 = π(12.96 - 1.96) × 100 = 1,100πcm^3."
  },

  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1989, exam: "JAMB",
    question: "OXYZW is a pyramid with a square base such that OX = OY = OZ = OW = 5cm and XY = XW = YZ = WZ = 6cm. Find the height OT, where T is the centre of the base.",
    options: ["2√5", "3", "4", "√7"],
    answer: "√7",
    explanation: "The half-diagonal of the square base is (6√2)/2 = 3√2. In right triangle OTX, OT^2 = OX^2 - XT^2 = 25 - 18 = 7. Therefore OT = √7cm."
  },

  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1989, exam: "JAMB",
    question: "In preparing rice cutlets, a cook used 75g of rice, 40g of margarine, 105g of meat and 20g of bread crumbs. Find the angle of the sector which represents meat in a pie chart.",
    options: ["30°", "60°", "112.5°", "157.5°"],
    answer: "157.5°",
    explanation: "Total mass = 75 + 40 + 105 + 20 = 240g. Meat represents 105/240 of the total. Sector angle = (105/240) × 360° = 157.5°."
  },

  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1989, exam: "JAMB",
    question: "In a family of 21 people, the average age is 14 years. If the age of the grandfather is not counted, the average age drops to 12 years. What is the age of the grandfather?",
    options: ["35years", "40years", "42years", "54years"],
    answer: "54years",
    explanation: "Total age of 21 people = 21 × 14 = 294 years. Total age of the remaining 20 people = 20 × 12 = 240 years. Grandfather's age = 294 - 240 = 54 years."
  },

  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1989, exam: "JAMB",
    question: "If n is the median and m is the mode of the following set of numbers: 2.4, 2.1, 1.6, 2.6, 2.6, 3.7, 2.1, 2.6, find (n, m).",
    options: ["(2.6,2.6)", "(2.5,2.6)", "(2.6,2.5)", "(2.5,2.1)"],
    answer: "(2.5,2.6)",
    explanation: "In ascending order the values are 1.6, 2.1, 2.1, 2.4, 2.6, 2.6, 2.6, 3.7. The median is (2.4 + 2.6)/2 = 2.5. The mode is 2.6 because it occurs most often. Therefore (n,m) = (2.5,2.6)."
  },

  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1989, exam: "JAMB",
    question: "Two numbers are chosen at random from three numbers 1, 3, 6. Find the probability that the sum of the two is not odd.",
    options: ["2/3", "1/2", "1/3", "1/6"],
    answer: "1/3",
    explanation: "The possible pairs are (1,3), (1,6) and (3,6). Their sums are 4, 7 and 9 respectively. Only one of the three sums is even, so the probability that the sum is not odd is 1/3."
  }

];

export default mathsJamb1989;