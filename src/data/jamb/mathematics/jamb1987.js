// JAMB 1987 Mathematics Past Questions
// Source had 50 questions. 9 were skipped (diagrams, or source text too garbled/ambiguous to transcribe reliably).
// See the skipped-questions list sent alongside this file.

const mathsJamb1987 = [

  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1987, exam: "JAMB",
    question: "Convert 241 in base 5 to base 8",
    options: ["71₈", "107₈", "176₈", "241₈"],
    answer: "107₈",
    explanation: "241₅ = 2(25)+4(5)+1 = 71 (base 10). Converting 71 to base 8: 71 = 1(64)+0(8)+7(1) = 107₈."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1987, exam: "JAMB",
    question: "Find the least length of a rod which can be cut into exactly equal strips, each of either 40cm or 48cm in length.",
    options: ["120cm", "240cm", "360cm", "480cm"],
    answer: "240cm",
    explanation: "This is the LCM of 40 and 48. 40=2³×5, 48=2⁴×3. LCM = 2⁴×3×5 = 240cm."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1987, exam: "JAMB",
    question: "A rectangular lawn has an area of 1815 square yards. If its length is 50 metres, find its width in metres. (Given that 1 metre = 1.1 yards.)",
    options: ["39.93", "35.00", "33.00", "30.00"],
    answer: "30.00",
    explanation: "Length in yards = 50×1.1 = 55 yards. Width in yards = 1815/55 = 33 yards. Width in metres = 33/1.1 = 30 metres."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1987, exam: "JAMB",
    question: "Reduce each number to two significant figures and then evaluate: (0.02174 × 1.2047) / 0.023789",
    options: ["0.8", "0.9", "1.1", "1.2"],
    answer: "1.1",
    explanation: "Rounding: 0.02174→0.022, 1.2047→1.2, 0.023789→0.024. (0.022×1.2)/0.024 = 0.0264/0.024 = 1.1."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1987, exam: "JAMB",
    question: "A train moves from P to Q at an average speed of 90km/hr and immediately returns from Q to P through the same route at an average speed of 45km/h. Find the average speed for the entire journey.",
    options: ["55.00km/hr", "60.00km/hr", "67.50km/hr", "75.00km/hr"],
    answer: "60.00km/hr",
    explanation: "Average speed for a round trip = 2×v₁×v₂/(v₁+v₂) = 2×90×45/135 = 8100/135 = 60km/hr."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1987, exam: "JAMB",
    question: "If the length of a square is increased by 20% while its width is decreased by 20% to form a rectangle, what is the ratio of the area of the rectangle to the area of the square?",
    options: ["6.5", "25.24", "5.6", "24.25"],
    answer: "24.25",
    explanation: "New area = 1.2s × 0.8s = 0.96s², original = s². Ratio = 0.96 = 24/25, i.e., 24:25."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1987, exam: "JAMB",
    question: "Two brothers invested a total of ₦5,000.00 on a farm project. The farm yield was sold for ₦15,000.00 at the end of the season. If the profit was shared in the ratio 2:3, what is the difference in the amount of profit received by the brothers?",
    options: ["₦2,000.00", "₦4,000.00", "₦6,000.00", "₦10,000.00"],
    answer: "₦2,000.00",
    explanation: "Profit = 15000-5000 = 10000. Split 2:3 (5 parts): each part = 2000. Brothers get 4000 and 6000. Difference = 2000."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1987, exam: "JAMB",
    question: "Peter's weekly wages are ₦20.00 for the first 20 weeks and ₦36.00 for the next 24 weeks. Find his average weekly wage for the remaining 8 weeks of the year, if his average weekly wage for the whole year is ₦30.00.",
    options: ["₦37.00", "₦35.00", "₦30.00", "₦5.00"],
    answer: "₦37.00",
    explanation: "Total year earnings = 30×52 = 1560. First 44 weeks earn 20×20+36×24 = 400+864 = 1264. Remaining 8 weeks earn 1560-1264=296. Average = 296/8 = 37."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1987, exam: "JAMB",
    question: "A man invests a sum of money at 4% per annum simple interest. After 3 years, the principal amounts to ₦7,000.00. Find the sum invested.",
    options: ["₦7,840.00", "₦6,250.00", "₦6,160.00", "₦5,833.33"],
    answer: "₦6,250.00",
    explanation: "Amount = P(1+rt) = P(1.12) = 7000 → P = 7000/1.12 = 6250."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1987, exam: "JAMB",
    question: "By selling 20 oranges for ₦1.35 a trader makes a profit of 8%. What is his percentage gain or loss if he sells the same 20 oranges for ₦1.10?",
    options: ["8%", "10%", "12%", "15%"],
    answer: "12%",
    explanation: "Cost price = 1.35/1.08 = 1.25. Selling at 1.10 gives (1.10-1.25)/1.25 × 100 = -12% (a 12% loss)."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1987, exam: "JAMB",
    question: "Instead of writing 35/6 as a decimal correct to 3 significant figures, a student wrote it correct to 3 places of decimals. Find his error in standard form.",
    options: ["0.003", "3.0 × 10⁻³", "0.3 × 10²", "0.3 × 10⁻³"],
    answer: "3.0 × 10⁻³",
    explanation: "35/6 = 5.8333... Correct to 3 s.f.: 5.83. Correct to 3 d.p.: 5.833. Error = 5.833-5.83 = 0.003 = 3.0×10⁻³."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1987, exam: "JAMB",
    question: "Simplify without using tables: (log₂6 − log₂3) / (log₂8 − 2log₂(1/2))",
    options: ["1/5", "½", "-1/2", "log₂3/log₂7"],
    answer: "1/5",
    explanation: "log₂6-log₂3 = log₂2 = 1. log₂8=3, 2log₂(1/2)=-2, so denominator = 3-(-2)=5. Result = 1/5."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1987, exam: "JAMB",
    question: "Simplify without using tables: (2√14 × 3√21) / (7√24 × 2√98)",
    options: ["3√14/4", "3√21/4", "3√14/28", "3√2/28"],
    answer: "3√2/28",
    explanation: "Numerator = 6√294 = 6×7√6 = 42√6. Denominator = 14√2352 = 14×28√3 = 392√3. Ratio = 42√6/392√3 = (3/28)√2."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1987, exam: "JAMB",
    question: "If p = (2/3)(1-r²)/n², find n when r = √(1/3) and p = 1",
    options: ["3/2", "3", "1/3", "2/3"],
    answer: "2/3",
    explanation: "r²=1/3, so 1-r²=2/3. p = (2/3)(2/3)/n² = (4/9)/n². Setting p=1: n² = 4/9 → n = 2/3."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1987, exam: "JAMB",
    question: "If a = U² − 3V² and b = 2UV + V², evaluate |(2a-b)(a²-b³)| when U = 1 and V = -1",
    options: ["9", "15", "27", "33"],
    answer: "15",
    explanation: "a = 1-3 = -2. b = -2+1 = -1. 2a-b = -4+1 = -3. a²-b³ = 4-(-1) = 5. Product magnitude = |-3×5| = 15."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1987, exam: "JAMB",
    question: "The formula Q = 15 + 0.5n gives the cost Q (in Naira) of feeding n people for a week. Find, in kobo, the extra cost of feeding one additional person.",
    options: ["350k", "200k", "150k", "50k"],
    answer: "50k",
    explanation: "The coefficient of n is 0.5 Naira, i.e. 50 kobo — the extra cost per additional person."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1987, exam: "JAMB",
    question: "If P varies inversely as V and V varies directly as R², find the relationship between P and R given that R = 7 when P = 2",
    options: ["P = 98R²", "PR² = 98", "P = 1/98R²", "P = R²/98"],
    answer: "PR² = 98",
    explanation: "V=kR², P=c/V=C/R² (combining constants), so PR²=C. At R=7,P=2: C=2(49)=98, giving PR²=98."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1987, exam: "JAMB",
    question: "Make y the subject of the formula Z = x² + 1/y³",
    options: ["y = 1/(z-x²)³", "y = 1/(Z+x³)^(1/3)", "y = 1/(Z-x²)^(1/3)", "y = 1/(∛Z - ∛x²)"],
    answer: "y = 1/(Z-x²)^(1/3)",
    explanation: "1/y³ = Z-x² → y³ = 1/(Z-x²) → y = [1/(Z-x²)]^(1/3) = 1/(Z-x²)^(1/3)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1987, exam: "JAMB",
    question: "Find the values of m which make the following a perfect square: x² + 2(m+1)x + m+3",
    options: ["-1, 1", "-1, 2", "1, -2", "2, -2"],
    answer: "1, -2",
    explanation: "For a perfect square, discriminant = 0: [2(m+1)]²-4(m+3)=0 → 4(m+1)²=4(m+3) → (m+1)²=m+3 → m²+m-2=0 → (m+2)(m-1)=0 → m=1 or -2."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1987, exam: "JAMB",
    question: "Find two values of y which satisfy the simultaneous equations: x + y = 5, x² − 2y² = 1",
    options: ["12, -2", "-12, 12", "-12, 2", "2, -2"],
    answer: "-12, 2",
    explanation: "x=5-y. Substituting: (5-y)²-2y²=1 → -y²-10y+24=0 → y²+10y-24=0 → (y+12)(y-2)=0 → y=-12 or y=2."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1987, exam: "JAMB",
    question: "A cubic function f(x) has a graph that crosses the x-axis at x = -1, 0, and 1. What are the values of the independent variable for which the function vanishes?",
    options: ["-1, 0, 1", "-1 < x < 1", "x, -1", "x > 1"],
    answer: "-1, 0, 1",
    explanation: "The function vanishes (equals zero) exactly where its graph crosses the x-axis, i.e. at x = -1, 0, and 1."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1987, exam: "JAMB",
    question: "Solve the inequality x − 1 > 4(x + 2)",
    options: ["x > -3", "x < -3", "2 < x < 3", "-3 < x < -2"],
    answer: "x < -3",
    explanation: "x-1 > 4x+8 → -9 > 3x → x < -3."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1987, exam: "JAMB",
    question: "Simplify: (x² - y²) / (2x² + xy - y²)",
    options: ["(x-y)/(2x+y)", "(x+y)/(2x-y)", "(x-y)/(2x-y)", "(x-y)/(2x+y)"],
    answer: "(x-y)/(2x-y)",
    explanation: "Numerator = (x-y)(x+y). Denominator = (2x-y)(x+y). Cancelling (x+y): (x-y)/(2x-y)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1987, exam: "JAMB",
    question: "The minimum value of y in the equation y = x² - 6x + 8 is",
    options: ["8", "3", "0", "-1"],
    answer: "-1",
    explanation: "Vertex at x=3: y = 9-18+8 = -1."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1987, exam: "JAMB",
    question: "Find the sum of the first 21 terms of the progression -10, -8, -6, ...",
    options: ["180", "190", "200", "210"],
    answer: "210",
    explanation: "AP with a=-10, d=2, n=21. Sum = (n/2)[2a+(n-1)d] = (21/2)[-20+40] = 21×10 = 210."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1987, exam: "JAMB",
    question: "Find the eleventh term of the progression 4, 8, 16, ...",
    options: ["2¹³", "2¹²", "2¹¹", "2¹⁰"],
    answer: "2¹²",
    explanation: "GP with a=4=2², r=2. Term_n = 2²×2^(n-1) = 2^(n+1). Term 11 = 2¹²."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1987, exam: "JAMB",
    question: "In a triangle PQR (apex P), a line QR is drawn parallel to the base TS (T and S being on the two sides from P), with QR:TS = 2:3. Find the ratio of the area of triangle PQR to the area of the trapezium QRST.",
    options: ["4:9", "4:5", "1:3", "2:3"],
    answer: "4:5",
    explanation: "Since QR∥TS with the same apex P, triangles PQR and PTS are similar with area ratio (2/3)²=4/9. If area PQR=4k and area PTS=9k, then trapezium QRST = 9k-4k=5k, giving a ratio of 4:5."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1987, exam: "JAMB",
    question: "Three angles of a nonagon are equal and the sum of the six other angles is 1110°. Calculate the size of one of the equal angles.",
    options: ["210°", "150°", "105°", "50°"],
    answer: "50°",
    explanation: "Sum of interior angles of a nonagon = (9-2)×180=1260°. The three equal angles sum to 1260-1110=150°, so each is 150/3=50°."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1987, exam: "JAMB",
    question: "In a triangle XYZ, angle XYZ = 90°, and T is the foot of the perpendicular from Y to XZ (so angle YTZ = 90°). If XT = 9cm and TZ = 16cm, find YZ.",
    options: ["25cm", "20cm", "16cm", "9cm"],
    answer: "20cm",
    explanation: "Using the geometric mean relation for a right triangle with an altitude to the hypotenuse: YZ² = TZ × XZ = 16 × (9+16) = 16×25 = 400 → YZ = 20cm."
  },
  {
    subject: "Mathematics", topic: "Trigonometry", year: 1987, exam: "JAMB",
    question: "The sine, cosine and tangent of 210° are respectively",
    options: ["-1/2, -√3/2, √3/3", "1/2, √3/2, √3/3", "√3/2, √3/3, 1", "3/2, √72, 1"],
    answer: "-1/2, -√3/2, √3/3",
    explanation: "210° = 180°+30°. sin210° = -sin30° = -1/2. cos210° = -cos30° = -√3/2. tan210° = tan30° = √3/3."
  },
  {
    subject: "Mathematics", topic: "Trigonometry", year: 1987, exam: "JAMB",
    question: "If tan q = (m²-n²)/(2mn), find sec q",
    options: ["(m²+n²)/(m²-n²)", "(m²+n²)/2mn", "mn/2(m²-n²)", "m²n²/(m²-n²)"],
    answer: "(m²+n²)/2mn",
    explanation: "sec²q = 1+tan²q = [(2mn)²+(m²-n²)²]/(2mn)² = (m²+n²)²/(2mn)². Taking the positive square root: sec q = (m²+n²)/2mn."
  },
  {
    subject: "Mathematics", topic: "Trigonometry", year: 1987, exam: "JAMB",
    question: "From two points X and Y, 8m apart and in line with a pole, the angles of elevation of the top of the pole are 30° and 60° respectively. Find the height of the pole, assuming that X, Y and the foot of the pole are on the same horizontal plane.",
    options: ["4m", "8√3/2m", "4√3m", "8√3m"],
    answer: "4√3m",
    explanation: "Let d = distance from Y (nearer point) to the pole. tan60°=h/d and tan30°=h/(d+8). Solving: h(√3-1/√3)=8 → h(2/√3)=8 → h=4√3m."
  },
  {
    subject: "Mathematics", topic: "Trigonometry", year: 1987, exam: "JAMB",
    question: "A room is 12m long, 9m wide and 8m high. Find the cosine of the angle which a diagonal of the room makes with the floor of the room.",
    options: ["15/17", "8/17", "8/15", "12/17"],
    answer: "15/17",
    explanation: "Floor diagonal = √(12²+9²) = 15m. Room's space diagonal = √(15²+8²) = 17m. cos(angle) = floor diagonal/space diagonal = 15/17."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1987, exam: "JAMB",
    question: "What is the circumference of a circle of radius R at a latitude where the angle from the equatorial plane is q, on a sphere (e.g. the earth) of radius R?",
    options: ["R cos q", "2πR cos q", "R sin q", "2πR sin q"],
    answer: "2πR cos q",
    explanation: "At latitude q, the radius of the circle of latitude is Rcos q, so its circumference is 2πRcos q."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1987, exam: "JAMB",
    question: "The figure shown is a construction made using compass arcs centred at two points on a line, intersecting above and below the line to give two points joined by a line crossing the original line. This is an example of the construction of a",
    options: [
      "perpendicular bisector to a given straight line",
      "perpendicular from a given point to a given line",
      "perpendicular to a line from a given point on that line",
      "given angle"
    ],
    answer: "perpendicular bisector to a given straight line",
    explanation: "Drawing equal-radius arcs centred at the two endpoints of a segment, intersecting on both sides, and joining the intersection points gives the classic straightedge-and-compass construction of the perpendicular bisector of that segment."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1987, exam: "JAMB",
    question: "What is the locus of the mid-points of all chords of length 6cm within a circle of radius 5cm and with centre O?",
    options: [
      "A circle of radius 4cm and with centre O",
      "The perpendicular bisector of the chords",
      "A straight line passing through centre O",
      "A circle of radius 6cm and with centre O"
    ],
    answer: "A circle of radius 4cm and with centre O",
    explanation: "The distance from the centre to a chord of length 6cm is √(5²-3²) = √16 = 4cm, which is constant, so the midpoints trace a circle of radius 4cm centred at O."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1987, exam: "JAMB",
    question: "Taking the period of daylight on a certain day to be from 5.30a.m to 7.00p.m, calculate the period of daylight and of darkness on that day (in degrees, where 24 hours = 360°).",
    options: ["187°30' 172°30'", "135°225'", "202°30' 157°30'", "195°165'"],
    answer: "202°30' 157°30'",
    explanation: "Daylight = 13.5 hours = 13.5×15° = 202.5° = 202°30'. Darkness = 10.5 hours = 157.5° = 157°30'."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1987, exam: "JAMB",
    question: "The goals scored by 40 football teams from three league divisions are recorded below. Number of goals: 0,1,2,3,4,5,6; Frequency: 4,3,15,16,1,0,1. What is the total number of goals scored by all the teams?",
    options: ["21", "40", "91", "96"],
    answer: "91",
    explanation: "Total goals = Σ(goals×frequency) = 0+3+30+48+4+0+6 = 91."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1987, exam: "JAMB",
    question: "The numbers 3,2,8,5,7,12,9 and 14 are the marks scored by a group of students in a class test. If P is the mean and Q the median, P+Q is",
    options: ["18", "17½", "16", "15"],
    answer: "15",
    explanation: "Sum=60, mean P=60/8=7.5. Sorted: 2,3,5,7,8,9,12,14. Median Q = (7+8)/2 = 7.5. P+Q = 15."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1987, exam: "JAMB",
    question: "Below are the scores of a group of students in a music test: Scores: 1,2,3,4,5,6,7,8,9; No. of students: 3,6,10,8,6,5,2,4,12. If CF(x) is the number of students with scores less than or equal to x, find CF(6).",
    options: ["40", "38", "33", "5"],
    answer: "38",
    explanation: "CF(6) = 3+6+10+8+6+5 = 38 (sum of frequencies for scores 1 through 6)."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1987, exam: "JAMB",
    question: "Find the probability of selecting a figure which is a parallelogram from a square, a rectangle, a rhombus, a kite and a trapezium.",
    options: ["3/5", "2/5", "4/5", "1/5"],
    answer: "3/5",
    explanation: "Of the 5 figures, the square, rectangle and rhombus are parallelograms (3 out of 5); the kite and trapezium are not. P = 3/5."
  }
]

export default mathsJamb1987
