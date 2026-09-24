// JAMB 1984 Mathematics Past Questions
// Source had 50 questions. 16 were skipped (diagrams, or source text too garbled/ambiguous to transcribe reliably).
// See the skipped-questions list sent alongside this file.

const mathsJamb1984 = [

  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1984, exam: "JAMB",
    question: "If 263 + 441 = 714, what number base has been used?",
    options: ["12", "11", "10", "9", "8"],
    answer: "9",
    explanation: "In base b: (2b²+6b+3) + (4b²+4b+1) = 7b²+b+4 → 6b²+10b+4 = 7b²+b+4 → b²-9b = 0 → b = 9 (b≠0)."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1984, exam: "JAMB",
    question: "P sold his bicycle to Q at a profit of 10%. Q sold it to R for ₦209 at a loss of 5%. How much did the bicycle cost P?",
    options: ["₦200", "₦196", "₦180", "₦205", "₦150"],
    answer: "₦200",
    explanation: "Let P's cost = x. Q's cost = 1.10x. R's price = 0.95 × 1.10x = 1.045x = 209 → x = 200."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1984, exam: "JAMB",
    question: "If the price of oranges was raised by ½k per orange, the number of oranges a customer can buy for ₦2.40 will be less by 16. What is the present price of an orange?",
    options: ["2½k", "3½k", "5½k", "20k", "21½k"],
    answer: "2½k",
    explanation: "Let price = p kobo; originally 240/p oranges are bought. At price p+0.5, 240/(p+0.5) = 240/p − 16. Solving 2p²+p−15=0 gives p = 2.5 (rejecting the negative root)."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1984, exam: "JAMB",
    question: "A man invested a total of ₦50,000 in two companies. If these companies pay dividends of 6% and 8% respectively, how much did he invest at 8% if the total yield is ₦3,700?",
    options: ["₦15,000", "₦29,600", "₦21,400", "₦27,800", "₦35,000"],
    answer: "₦35,000",
    explanation: "Let x = amount at 8%. 0.08x + 0.06(50000−x) = 3700 → 0.02x = 700 → x = 35,000."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1984, exam: "JAMB",
    question: "Thirty boys and x girls sat for a test. The mean of the boys' scores and that of the girls were respectively 6 and 8. Find x if the total score was 468.",
    options: ["38", "24", "36", "22", "41"],
    answer: "36",
    explanation: "Sum of boys' scores = 30×6 = 180. Total = 180 + 8x = 468 → 8x = 288 → x = 36."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1984, exam: "JAMB",
    question: "The cost of production of an article is made up as follows: Labour ₦70, Power ₦15, Materials ₦30, Miscellaneous ₦5. Find the angle of the sector representing labour in a pie chart.",
    options: ["210°", "105°", "175°", "150°", "90°"],
    answer: "210°",
    explanation: "Total cost = 70+15+30+5 = 120. Labour's angle = (70/120)×360° = 210°."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1984, exam: "JAMB",
    question: "Bola chooses at random a number between 1 and 300. What is the probability that the number is divisible by 4?",
    options: ["1/3", "¼", "1/5", "4/300", "1/300"],
    answer: "¼",
    explanation: "There are 75 multiples of 4 between 1 and 300. P = 75/300 = 1/4."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1984, exam: "JAMB",
    question: "Find, without using logarithm tables, the value of (log₃27 − log_(1/4)64) / log₃(1/81)",
    options: ["7/4", "-7/4", "-3/2", "7/3", "-1/4"],
    answer: "-3/2",
    explanation: "log₃27 = 3. log_(1/4)64: (1/4)^x = 64 = 4³, so x = -3, giving log_(1/4)64 = -3. Numerator = 3-(-3) = 6. log₃(1/81) = log₃(3⁻⁴) = -4. Result = 6/(-4) = -3/2."
  },
  {
    subject: "Mathematics", topic: "Coordinate Geometry", year: 1984, exam: "JAMB",
    question: "A variable point P(x, y) traces a graph in a two-dimensional plane. (0, -3) is one position of P. If x increases by 1 unit, y increases by 4 units. What is the equation of the graph?",
    options: ["-3 = y + 4/x + 1", "4y = -3 + x", "y/x = -3/4", "y + 3 = 4x", "4y = x + 3"],
    answer: "y + 3 = 4x",
    explanation: "The gradient is 4/1 = 4, and the line passes through (0,-3): y - (-3) = 4(x-0) → y + 3 = 4x."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1984, exam: "JAMB",
    question: "A trader in a country where their currency 'MONT' (M) is in base five bought 103₍₅₎ oranges at M14₍₅₎ each. If he sold the oranges at M24₍₅₎ each, what will be his gain?",
    options: ["M103₍₅₎", "M1030₍₅₎", "M102₍₅₎", "M2002₍₅₎", "M3032₍₅₎"],
    answer: "M1030₍₅₎",
    explanation: "103₅ = 28, 14₅ = 9, 24₅ = 14 (base 10). Cost = 28×9 = 252. Revenue = 28×14 = 392. Gain = 140, which converts back to base 5 as 1030₅."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1984, exam: "JAMB",
    question: "Simplify: (3ⁿ − 3ⁿ⁻¹) / (3³ × 3ⁿ − 27 × 3ⁿ⁻¹)",
    options: ["1", "0", "1/27", "3ⁿ − 3ⁿ⁻¹", "2/27"],
    answer: "1/27",
    explanation: "Numerator = 3ⁿ⁻¹(3−1) = 2×3ⁿ⁻¹. Denominator = 27×3ⁿ − 27×3ⁿ⁻¹ = 27×3ⁿ⁻¹(3−1) = 54×3ⁿ⁻¹. Ratio = 2/54 = 1/27."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1984, exam: "JAMB",
    question: "Factorise: 6x² − 14x − 12",
    options: ["2(x + 3)(3x − 2)", "6(x − 2)(x + 1)", "2(x − 3)(3x + 2)", "6(x + 2)(x − 1)", "(3x + 4)(2x + 3)"],
    answer: "2(x − 3)(3x + 2)",
    explanation: "6x²−14x−12 = 2(3x²−7x−6) = 2(3x+2)(x−3)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1984, exam: "JAMB",
    question: "A straight line y = mx meets the curve y = x² − 12x + 40 in two distinct points. If one of them is (5,5), find the other.",
    options: ["(5,6)", "(8,8)", "(8,5)", "(7,7)", "(7,5)"],
    answer: "(8,8)",
    explanation: "Since (5,5) is on y=mx, m=1, so the line is y=x. Setting x²−12x+40 = x gives x²−13x+40=0 → (x−5)(x−8)=0. The other point is (8,8)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1984, exam: "JAMB",
    question: "The table below is drawn for a graph y = x² − 3x + 1 for x from -2 to 1. From x = -2 to x = 1, the graph crosses the x-axis in the range(s):",
    options: [
      "-1 < x < 0 and 0 < x < 1",
      "-2 < x < -1 and 0 < x < 1",
      "-2 < x < -1 and 0 < x < 1",
      "0 < x < 1",
      "1 < x < 2"
    ],
    answer: "0 < x < 1",
    explanation: "y = x²−3x+1 has roots at x = (3±√5)/2 ≈ 0.38 and 2.62. Checking signs: y(-2)=11>0, y(-1)=5>0, y(0)=1>0, y(1)=-1<0. The only sign change (and hence x-axis crossing) between x=-2 and x=1 is in 0 < x < 1."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1984, exam: "JAMB",
    question: "In a racing competition, Musa covered a distance of 5x km in the first hour and (x+10)km in the next hour. He was second to Ngozi who covered a total distance of 118km in the two hours. Which of the following inequalities is correct?",
    options: ["0 < -x < 15", "-3 < x < 3", "15 < x < 18", "0 < x < 15", "0 < x < 18"],
    answer: "0 < x < 18",
    explanation: "Musa's total distance = 5x + (x+10) = 6x+10. Since Musa finished behind Ngozi, 6x+10 < 118 → x < 18. Combined with x > 0, this gives 0 < x < 18."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1984, exam: "JAMB",
    question: "2x + 3y = 1 and x − 2y = 11. Find (x + y).",
    options: ["5", "-3", "8", "2", "2"],
    answer: "2",
    explanation: "From x−2y=11, x=11+2y. Substituting into 2x+3y=1: 2(11+2y)+3y=1 → 22+7y=1 → y=-3, so x=5. x+y = 5+(-3) = 2."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1984, exam: "JAMB",
    question: "Tunde and Shola can do a piece of work in 18 days. Tunde can do it alone in x days, whilst Shola takes 15 days longer to do it alone. Which of the following equations is satisfied by x?",
    options: [
      "x² − 5x − 18 = 0",
      "x² − 20x + 360 = 0",
      "x² − 21x − 270 = 0",
      "2x² + 42x − 190 = 0",
      "3x² − 31x + 150 = 0"
    ],
    answer: "x² − 21x − 270 = 0",
    explanation: "1/x + 1/(x+15) = 1/18. Multiplying through: 18(x+15) + 18x = x(x+15) → 36x + 270 = x² + 15x → x² − 21x − 270 = 0."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1984, exam: "JAMB",
    question: "The quadratic equation whose roots are (1 − √13) and (1 + √13) is",
    options: [
      "x² + (1-√13)x + 1+√13 = 0",
      "x² + (1-√13)x + 1-√13 = 0",
      "x² + 2x + 12 = 0",
      "x² − 2x + 12 = 0",
      "x² − 2x − 12 = 0"
    ],
    answer: "x² − 2x − 12 = 0",
    explanation: "Sum of roots = 2, product = 1² − 13 = -12. Equation: x² − (sum)x + product = x² − 2x − 12 = 0."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1984, exam: "JAMB",
    question: "Find a factor which is common to all three binomial/polynomial expressions: 4a² − 9b², a³ + 27b³, (4a + 6b)²",
    options: ["4a + 6b", "4a − 6b", "2a + 3b", "2a − 3b", "none"],
    answer: "none",
    explanation: "4a²-9b² = (2a-3b)(2a+3b); a³+27b³ = (a+3b)(a²-3ab+9b²); (4a+6b)² = 4(2a+3b)². The factor (2a+3b) is common to the 1st and 3rd expressions, but a³+27b³ does not share this factor (it factors with (a+3b) instead), so there is no factor common to all three."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1984, exam: "JAMB",
    question: "If (x − 2) and (x + 1) are factors of the expression x³ + px² + qx + 1, what is the sum of p and q?",
    options: ["0", "-3", "3", "-17/3", "-2/3"],
    answer: "-3",
    explanation: "Plugging x=2: 8+4p+2q+1=0 → 2p+q=-4.5. Plugging x=-1: -1+p-q+1=0 → p=q. Solving: p=q=-1.5. Sum p+q = -3."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1984, exam: "JAMB",
    question: "A cone is formed by bending a sector of a circle having an angle of 210°. Find the radius of the base of the cone if the diameter of the circle (sector) is 12cm.",
    options: ["7.00cm", "1.75cm", "√21cm", "3.50cm", "2√21cm"],
    answer: "3.50cm",
    explanation: "Sector radius (=slant height) = 6cm. Arc length = (210/360)×2π×6 = 7π, which becomes the base circumference: 2πr = 7π → r = 3.5cm."
  },
  {
    subject: "Mathematics", topic: "Trigonometry", year: 1984, exam: "JAMB",
    question: "In triangle XYZ, angle X = 120°, side XZ = 3cm, side YZ = 5cm. Find angle XYZ (the angle at Y).",
    options: ["29°", "31°20'", "31°", "31°18'", "59°"],
    answer: "31°18'",
    explanation: "By the sine rule, YZ/sinX = XZ/sinY → 5/sin120° = 3/sinY → sinY = 3sin120°/5 ≈ 0.5196 → Y ≈ 31.3° ≈ 31°18'."
  },
  {
    subject: "Mathematics", topic: "Trigonometry", year: 1984, exam: "JAMB",
    question: "The sides of a triangle are (x+4)cm, x cm and (x-4)cm respectively. If the cosine of the largest angle is 1/5, find the value of x.",
    options: ["24cm", "20cm", "28cm", "88/7cm", "0cm"],
    answer: "24cm",
    explanation: "Using the cosine rule on the largest angle (opposite the side x+4): (x+4)² = x² + (x-4)² − 2x(x-4)(1/5). Expanding and simplifying gives 3x² − 72x = 0, so x = 24."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1984, exam: "JAMB",
    question: "If a = 2x/(1-x) and b = (1+x)/(1-x), then a² − b² in its simplest form is",
    options: ["(3x+1)/(x-1)", "(3x²-1)/(x-1)²", "(3x²+1)/(1-x)²", "(5x²-1)/(1-x)²", "(5x²-2x-1)/(1-x)²"],
    answer: "(3x+1)/(x-1)",
    explanation: "a²-b²=(a-b)(a+b). a-b = [2x-(1+x)]/(1-x) = (x-1)/(1-x) = -1. a+b = (3x+1)/(1-x). Product = -(3x+1)/(1-x) = (3x+1)/(x-1)."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1984, exam: "JAMB",
    question: "PQRSTW is a regular hexagon (vertices in order). Diagonal QS intersects diagonal RT at V. Calculate angle TVS.",
    options: ["60°", "90°", "120°", "30°", "80°"],
    answer: "60°",
    explanation: "Placing the regular hexagon on a unit circle and computing the intersection of diagonals QS and RT shows the angle between VT and VS at their intersection point is 60°."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1984, exam: "JAMB",
    question: "Find the integral values of x which satisfy the inequalities -3 < 2 - 5x < 12",
    options: ["-2, -1", "-2, 2", "-1, 0", "0,1", "1,2"],
    answer: "-1, 0",
    explanation: "-3 < 2-5x gives x < 1. 2-5x < 12 gives x > -2. So -2 < x < 1, and the integers satisfying this are -1 and 0."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1984, exam: "JAMB",
    question: "If pq + 1 = q² and t = 1/p − 1/(pq), express t in terms of q.",
    options: ["1/p − q", "1/q − 1", "1/(q+1)", "1 + q", "1/(1-q)"],
    answer: "1/(q+1)",
    explanation: "From pq+1=q², pq=q²-1. 1/(pq) = 1/(q²-1). 1/p = q/(q²-1) [since p=(q²-1)/q]. t = q/(q²-1) - 1/(q²-1) = (q-1)/(q²-1) = 1/(q+1)."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1984, exam: "JAMB",
    question: "The cumulative frequency function of the data below is given by the frequency y = cf(x). Scores(n): 3,4,5,6,7 with Frequency(f): 30,32,30,35,20. What is cf(5)?",
    options: ["30", "35", "55", "62", "92"],
    answer: "92",
    explanation: "cf(5), the cumulative frequency up to and including score 5, is 30 + 32 + 30 = 92 (summing the frequencies for scores 3, 4 and 5)."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1984, exam: "JAMB",
    question: "A right circular cone has a base radius r cm and a vertical (apex) angle 2y°. Find the height of the cone.",
    options: ["r tan y°cm", "r sin y°cm", "r cot y°cm", "r cos y°cm", "r cosec y°cm"],
    answer: "r cot y°cm",
    explanation: "Half the vertical angle is y°. In the right triangle formed by the radius, height and slant, tan(y°) = r/height, so height = r/tan(y°) = r cot(y°)."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1984, exam: "JAMB",
    question: "Two fair dice are rolled. What is the probability that both show up the same number of points?",
    options: ["1/36", "7/36", "½", "1/3", "1/6"],
    answer: "1/6",
    explanation: "There are 6 favourable outcomes (doubles) out of 36 total outcomes. P = 6/36 = 1/6."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1984, exam: "JAMB",
    question: "Find the larger value of y for which (y − 1)² = 4y − 7",
    options: ["2", "4", "6", "7", "8"],
    answer: "4",
    explanation: "Expanding: y²-2y+1 = 4y-7 → y²-6y+8=0 → (y-2)(y-4)=0. The larger value is y=4."
  },
  {
    subject: "Mathematics", topic: "Coordinate Geometry", year: 1984, exam: "JAMB",
    question: "The graph of the line y = 2x + 1 and the curve y = x² − 2x + 1 are drawn on the same axes. Find the x-coordinates of the points of intersection of the two equations.",
    options: ["1,1", "0,-4", "4,9", "0,0", "0,4"],
    answer: "0,4",
    explanation: "Setting 2x+1 = x²-2x+1: x²-4x = 0 → x(x-4) = 0 → x = 0 or x = 4."
  },
  {
    subject: "Mathematics", topic: "Trigonometry", year: 1984, exam: "JAMB",
    question: "XYZ is a triangle in which XW is perpendicular to YZ, with W on YZ. If XZ = 5cm, WZ = 4cm and YZ = 10cm, calculate XY.",
    options: ["5√3cm", "3√5cm", "3√3cm", "5cm", "6cm"],
    answer: "3√5cm",
    explanation: "In right triangle XWZ: XW = √(XZ²-WZ²) = √(25-16) = 3cm. YW = YZ-WZ = 10-4 = 6cm. In right triangle XWY: XY = √(XW²+YW²) = √(9+36) = √45 = 3√5cm."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1984, exam: "JAMB",
    question: "Measurements of the diameters (in centimeters) of 20 copper spheres are distributed as shown: Class boundary (cm): 3.35-3.45, 3.45-3.55, 3.55-3.65, 3.65-3.75; Frequency: 3, 6, 7, 4. What is the mean diameter of the copper spheres?",
    options: ["3.40cm", "3.58cm", "3.56cm", "3.62cm", "3.63cm"],
    answer: "3.56cm",
    explanation: "Using midpoints 3.40, 3.50, 3.60, 3.70: Σfx = 3(3.40)+6(3.50)+7(3.60)+4(3.70) = 71.2. Mean = 71.2/20 = 3.56cm."
  }
]

export default mathsJamb1984
