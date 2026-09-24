// JAMB 1986 Mathematics Past Questions
// Source had 50 questions. 7 were skipped (diagrams, or source text too garbled/ambiguous to transcribe reliably).
// See the skipped-questions list sent alongside this file.

const mathsJamb1986 = [

  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1986, exam: "JAMB",
    question: "Evaluate (212)₃ − (121)₃ + (222)₃",
    options: ["(313)₃", "(1000)₃", "(1020)₃", "(1222)₃"],
    answer: "(1020)₃",
    explanation: "Converting to base 10: 212₃=23, 121₃=16, 222₃=26. 23-16+26=33. Converting 33 back to base 3 gives 1020₃."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1986, exam: "JAMB",
    question: "If Musa scored 75 in Biology instead of 57, his average mark in four subjects would have been 60. What was his total mark?",
    options: ["282", "240", "222", "210"],
    answer: "222",
    explanation: "With 75, total = 60×4 = 240. The actual total (with 57 instead of 75) is 240 − (75−57) = 240−18 = 222."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1986, exam: "JAMB",
    question: "Divide the L.C.M. of 48, 64 and 80 by their H.C.F.",
    options: ["20", "30", "48", "60"],
    answer: "60",
    explanation: "48=2⁴×3, 64=2⁶, 80=2⁴×5. LCM=2⁶×3×5=960. HCF=2⁴=16. 960/16=60."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1986, exam: "JAMB",
    question: "Find the smallest number by which 252 can be multiplied to obtain a perfect square.",
    options: ["2", "3", "5", "7"],
    answer: "7",
    explanation: "252 = 2²×3²×7. Only the factor 7 has an odd power, so multiplying by 7 makes every prime's power even, giving a perfect square."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1986, exam: "JAMB",
    question: "Find the reciprocal of: (2/3) ÷ (1/2 + 1/3)",
    options: ["4/5", "5/4", "2/5", "6/7"],
    answer: "5/4",
    explanation: "1/2+1/3 = 5/6. (2/3)÷(5/6) = (2/3)×(6/5) = 4/5. The reciprocal of 4/5 is 5/4."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1986, exam: "JAMB",
    question: "Three boys shared some oranges. The first received 1/3 of the oranges, the second received 2/3 of the remainder, and the third boy received the remaining 12 oranges. How many oranges did they share?",
    options: ["60", "54", "48", "42"],
    answer: "54",
    explanation: "Let total = T. First gets T/3, leaving 2T/3. Second gets (2/3)(2T/3)=4T/9. What's left = 2T/3-4T/9 = 2T/9 = 12 → T = 54."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1986, exam: "JAMB",
    question: "Udoh deposited ₦150.00 in the bank. At the end of 5 years the simple interest on the principal was ₦55.00. At what rate per annum was the interest paid?",
    options: ["11%", "7⅓%", "5%", "3½%"],
    answer: "7⅓%",
    explanation: "Using I = PRT/100: 55 = 150×R×5/100 = 7.5R → R = 55/7.5 = 7⅓%."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1986, exam: "JAMB",
    question: "A number of pencils were shared out among Bisi, Sola and Tunde in the ratio 2:3:5 respectively. If Bisi got 5, how many were shared out?",
    options: ["15", "25", "30", "50"],
    answer: "25",
    explanation: "Bisi's 2 parts = 5, so 1 part = 2.5. Total (10 parts) = 25."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1986, exam: "JAMB",
    question: "The ages of Tosan and Isa differ by 6 and the product of their ages is 187. Write their ages in the form (x, y), where x > y.",
    options: ["(12, 9)", "(23, 17)", "(17, 11)", "(18, 12)"],
    answer: "(17, 11)",
    explanation: "Let x-y=6 and xy=187. Substituting x=y+6: y²+6y-187=0. Solving: y=11, x=17."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1986, exam: "JAMB",
    question: "In 1984, Ike was 24 years old and his father was 45 years old. In what year was Ike exactly half his father's age?",
    options: ["1982", "1981", "1979", "1978"],
    answer: "1981",
    explanation: "Let n be years from 1984. (24+n) = (45+n)/2 → 48+2n=45+n → n=-3. Year = 1984-3 = 1981."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1986, exam: "JAMB",
    question: "Simplify: [1/(√5+√3) − 1/(√5−√3)] × 1/√3",
    options: ["√3/√5", "-2/√3", "-2", "-1"],
    answer: "-1",
    explanation: "1/(√5+√3) − 1/(√5−√3) = [(√5−√3)−(√5+√3)]/[(√5+√3)(√5−√3)] = -2√3/2 = -√3. Multiplying by 1/√3 gives -1."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1986, exam: "JAMB",
    question: "Simplify: (9^(1/3) × 27^(-1/2)) / (3^(-1/6) × 3^(-2/3))",
    options: ["1/3", "1", "3", "9"],
    answer: "1",
    explanation: "9^(1/3)=3^(2/3), 27^(-1/2)=3^(-3/2). Numerator=3^(2/3-3/2)=3^(-5/6). Denominator=3^(-1/6-2/3)=3^(-5/6). Ratio=3^0=1."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1986, exam: "JAMB",
    question: "If x varies directly as y³ and x = 2 when y = 1, find x when y = 5",
    options: ["2", "10", "125", "250"],
    answer: "250",
    explanation: "x=ky³. 2=k(1)³→k=2. At y=5: x=2(125)=250."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1986, exam: "JAMB",
    question: "Factorize completely: 8a + 125ax³",
    options: [
      "(2a+5x²)(4+25ax)",
      "a(2+5x)(4-10x+25x²)",
      "(2a+5x)(4-10ax+25ax²)",
      "a(2+5x)(4+10x+25x²)"
    ],
    answer: "a(2+5x)(4-10x+25x²)",
    explanation: "8a+125ax³ = a(8+125x³) = a(2+5x)(4-10x+25x²), using the sum-of-cubes identity p³+q³=(p+q)(p²-pq+q²) with p=2, q=5x."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1986, exam: "JAMB",
    question: "If y = x/(x-3) + x/(x+4), find y when x = -2",
    options: ["-3/5", "3/5", "-7/5", "7/5"],
    answer: "-3/5",
    explanation: "y = (-2)/(-5) + (-2)/(2) = 0.4 - 1 = -0.6 = -3/5."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1986, exam: "JAMB",
    question: "Find all the numbers x which satisfy the inequality (1/3)(x+1) − 1 > (1/5)(x+4)",
    options: ["x < 11", "x < -1", "x > 6", "x > 11"],
    answer: "x > 11",
    explanation: "Multiplying through by 15: 5(x+1)-15 > 3(x+4) → 5x-10 > 3x+12 → 2x > 22 → x > 11."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1986, exam: "JAMB",
    question: "Factorize: x² + 2a + ax + 2x",
    options: ["(x+2a)(x+1)", "(x+2a)(x-1)", "(x²-1)(x+a)", "(x+2)(x+a)"],
    answer: "(x+2)(x+a)",
    explanation: "Rearranging: x²+2x+ax+2a = x(x+2)+a(x+2) = (x+2)(x+a)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1986, exam: "JAMB",
    question: "Solve the equation 3x² + 6x − 2 = 0",
    options: ["x = -1, ±√3/3", "x = -1, ±√15/3", "x = -2, ±2√3/3", "x = -2, ±2√15/3"],
    answer: "x = -1, ±√15/3",
    explanation: "Using the quadratic formula: x = [-6±√(36+24)]/6 = [-6±√60]/6 = -1 ± √15/3."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1986, exam: "JAMB",
    question: "Simplify: 1/(5x+5) + 1/(7x+7)",
    options: ["12/35 + 7", "12/[35(x+1)]", "12x/[35(x+1)]", "12/35x + 35"],
    answer: "12/[35(x+1)]",
    explanation: "1/(5x+5)+1/(7x+7) = 1/[5(x+1)] + 1/[7(x+1)] = (1/(x+1))(1/5+1/7) = (1/(x+1))(12/35) = 12/[35(x+1)]."
  },
  {
    subject: "Mathematics", topic: "Coordinate Geometry", year: 1986, exam: "JAMB",
    question: "The curve y = -x² + 3x + 4 intersects the coordinate axes at",
    options: ["(4,0)(0,0)(-1,0)", "(-4,0)(0,4)(1,1)", "(0,0)(0,1)(1,0)", "(0,4)(4,0)(-1,0)"],
    answer: "(0,4)(4,0)(-1,0)",
    explanation: "x-intercepts: -x²+3x+4=0 → x²-3x-4=0 → (x-4)(x+1)=0 → x=4 or x=-1. y-intercept: at x=0, y=4."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1986, exam: "JAMB",
    question: "Factorize: (4a+3)² − (3a-2)²",
    options: ["(a+1)(a+5)", "(a-5)(7a-1)", "(a+5)(7a+1)", "a(7a+1)"],
    answer: "(a+5)(7a+1)",
    explanation: "Using difference of squares: [(4a+3)-(3a-2)][(4a+3)+(3a-2)] = (a+5)(7a+1)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1986, exam: "JAMB",
    question: "If 5^(x+2y) = 5 and 4^(x+3y) = 16, find 3^(x+y)",
    options: ["0", "1", "3", "27"],
    answer: "1",
    explanation: "x+2y=1 and x+3y=2, so y=1, x=-1. x+y=0. 3^0=1."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1986, exam: "JAMB",
    question: "Simplify: 1/(x-2) + 1/(x+2) + 2x/(x²-4)",
    options: ["2x/[(x-2)(x+2)(x²-4)]", "2x/(x²-4)", "x/(x²-4)", "4x/(x²-4)"],
    answer: "4x/(x²-4)",
    explanation: "Combining over the common denominator x²-4: [(x+2)+(x-2)+2x]/(x²-4) = 4x/(x²-4)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1986, exam: "JAMB",
    question: "Make r the subject of the formula S² = 6/r − w/2",
    options: ["r = 6/S²", "r = 12/(2S²-w)", "r = 12/w − 2S²", "r = 12/(2S²+w)"],
    answer: "r = 12/(2S²+w)",
    explanation: "S² + w/2 = 6/r → r = 6/(S²+w/2) = 12/(2S²+w)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1986, exam: "JAMB",
    question: "Find the values of x which satisfy the equation 16ˣ − 5×4ˣ + 4 = 0",
    options: ["1 and 4", "-2 and 2", "0 and 1", "1 and 0"],
    answer: "1 and 0",
    explanation: "Let u=4ˣ. u²-5u+4=0 → (u-1)(u-4)=0 → u=1 or 4 → x=0 or x=1."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1986, exam: "JAMB",
    question: "If a/b = c/d = k, find the value of (3a² − ac + c²)/(3b² − bd + d²) in terms of k",
    options: ["3k²", "3k − k²", "17k²/4", "k²"],
    answer: "k²",
    explanation: "With a=bk, c=dk: (3a²-ac+c²) = k²(3b²-bd+d²), so the ratio simplifies to k²."
  },
  {
    subject: "Mathematics", topic: "Coordinate Geometry", year: 1986, exam: "JAMB",
    question: "At what point(s) does the straight line y = 2x + 1 intersect the curve y = 2x² + 5x − 1?",
    options: ["(-2,-3) and (1/2, 2)", "(-1/2, 0) and (2, 5)", "(1/2, 2) and (1, 3)", "(1, 3) and (2, 5)"],
    answer: "(-2,-3) and (1/2, 2)",
    explanation: "Setting 2x+1=2x²+5x-1: 2x²+3x-2=0 → (2x-1)(x+2)=0 → x=1/2 or x=-2, giving points (1/2,2) and (-2,-3)."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1986, exam: "JAMB",
    question: "A regular polygon of n sides has 160° as the size of each interior angle. Find n.",
    options: ["18", "16", "14", "12"],
    answer: "18",
    explanation: "(n-2)×180/n = 160 → 180n-360=160n → 20n=360 → n=18."
  },
  {
    subject: "Mathematics", topic: "Trigonometry", year: 1986, exam: "JAMB",
    question: "If cos q = a/b, find 1 + tan²q",
    options: ["b²/a²", "a²/b²", "(a²+b²)/(b²-a²)", "(2a²+b²)/(a²+b²)"],
    answer: "b²/a²",
    explanation: "1+tan²q = sec²q = 1/cos²q = b²/a²."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1986, exam: "JAMB",
    question: "PQ and RS are chords of a circle centre O which meet at T outside the circle. If TP = 24cm, TQ = 8cm and TS = 12cm, find TR.",
    options: ["16cm", "14cm", "12cm", "8cm"],
    answer: "16cm",
    explanation: "By the power of a point (two secants from T): TQ×TP = TS×TR → 8×24 = 12×TR → TR = 192/12 = 16cm."
  },
  {
    subject: "Mathematics", topic: "Trigonometry", year: 1986, exam: "JAMB",
    question: "The angle of elevation of the top of a vertical tower 50 metres high from a point X on the ground is 30°. From a point Y on the opposite side of the tower, the angle of elevation of the top of the tower is 60°. Find the distance between the points X and Y.",
    options: ["14.43m", "57.73m", "101.03m", "115.47m"],
    answer: "115.47m",
    explanation: "Distance from base to X = 50/tan30° ≈ 86.60m. Distance from base to Y = 50/tan60° ≈ 28.87m. Since X and Y are on opposite sides, XY = 86.60+28.87 ≈ 115.47m."
  },
  {
    subject: "Mathematics", topic: "Trigonometry", year: 1986, exam: "JAMB",
    question: "A girl walks 45 metres in the direction 050° from a point Q to a point X. She then walks 24 metres in the direction 140° from X to a point Y. How far is she then from Q?",
    options: ["69m", "57m", "51m", "21m"],
    answer: "51m",
    explanation: "Using coordinates with bearings: X ≈ (34.47, 28.94) from Q, and Y ≈ X + (15.43, -18.38) ≈ (49.90, 10.56). QY = √(49.90²+10.56²) ≈ 51m."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1986, exam: "JAMB",
    question: "PQ and PR are tangents from an external point P to a circle with centre O. If angle QRP = 34°, find the angle QOR.",
    options: ["34°", "56°", "68°", "112°"],
    answer: "68°",
    explanation: "Since PQ=PR (tangent lengths), triangle PQR is isosceles, so angle PQR = angle PRQ = 34°, giving angle QPR = 112°. In quadrilateral OQPR, angle OQP=angle ORP=90°, so angle QOR = 360-90-90-112 = 68°."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1986, exam: "JAMB",
    question: "An arc of a circle of radius 6cm is 8cm long. Find the area of the sector.",
    options: ["5⅓cm²", "24cm²", "36cm²", "48cm²"],
    answer: "24cm²",
    explanation: "Arc length = rθ → 8 = 6θ → θ = 4/3 radians. Sector area = ½r²θ = ½(36)(4/3) = 24cm²."
  },
  {
    subject: "Mathematics", topic: "Trigonometry", year: 1986, exam: "JAMB",
    question: "In triangle XYZ, XY = 4, XZ = 3, YZ = 6. Determine the cosine of angle Z.",
    options: ["¾", "29/36", "2/3", "½"],
    answer: "29/36",
    explanation: "By the cosine rule: XY² = XZ²+YZ²-2(XZ)(YZ)cosZ → 16 = 9+36-36cosZ → cosZ = 29/36."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1986, exam: "JAMB",
    question: "Find the total surface area of a solid cone of radius 2√3cm and slanting side 4√3cm.",
    options: ["8√3cm²", "24cm²", "15√3cm²", "36πcm²"],
    answer: "36πcm²",
    explanation: "Total surface area = πr² + πrl = πr(r+l) = π(2√3)(2√3+4√3) = π(2√3)(6√3) = 36π cm²."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1986, exam: "JAMB",
    question: "If U and V are two distinct fixed points and W is a variable point such that angle UWV is a right angle, what is the locus of W?",
    options: [
      "The perpendicular bisector of UV",
      "A circle with UV as radius",
      "A line parallel to the line UV",
      "A circle with the line UV as the diameter"
    ],
    answer: "A circle with the line UV as the diameter",
    explanation: "By Thales' theorem, the locus of points from which a fixed segment UV subtends a right angle is a circle having UV as its diameter."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1986, exam: "JAMB",
    question: "An open rectangular box externally measures 4m × 3m × 4m. Find the total cost of painting the box externally if it costs ₦2.00 to paint one square metre.",
    options: ["₦96.00", "₦112.00", "₦136.00", "₦160.00"],
    answer: "₦136.00",
    explanation: "Being open-topped, external area = base + 4 sides = (4×3) + 2(4×4) + 2(3×4) = 12+32+24 = 68 sq.m. Cost = 68×2 = ₦136.00."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1986, exam: "JAMB",
    question: "Of the nine hundred students admitted in a university in 1979, the distribution by state was: Anambra 185, Imo 135, Kaduna 90, Kwara 110, Ondo 155, Oyo 225. In a pie chart drawn to represent this distribution, the angle subtended at the centre by Anambra is",
    options: ["50°", "65°", "74°", "88°"],
    answer: "74°",
    explanation: "Angle = (185/900) × 360° = 74°."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1986, exam: "JAMB",
    question: "Find the median of the numbers 89, 141, 130, 161, 120, 131, 131, 100, 108 and 119",
    options: ["131", "125", "123", "120"],
    answer: "125",
    explanation: "Sorted: 89,100,108,119,120,130,131,131,141,161. Median = average of 5th and 6th values = (120+130)/2 = 125."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1986, exam: "JAMB",
    question: "Find the probability that a number selected at random from 40 to 50 is a prime",
    options: ["3/11", "5/11", "3/10", "4/11"],
    answer: "3/11",
    explanation: "The numbers 40-50 (11 numbers) contain 3 primes: 41, 43, 47. P = 3/11."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1986, exam: "JAMB",
    question: "A man kept 6 black, 5 brown and 7 purple shirts in a drawer. What is the probability of his picking a purple shirt with his eyes closed?",
    options: ["1/7", "11/18", "7/18", "7/11"],
    answer: "7/18",
    explanation: "Total shirts = 6+5+7 = 18. P(purple) = 7/18."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1986, exam: "JAMB",
    question: "The table below gives the scores of a group of students in a Mathematics test: Score: 1,2,3,4,5,6,7,8; Frequency: 2,4,7,14,12,6,4,1. If the mode is m and the number of students who scored 4 or less is S, what is (S, m)?",
    options: ["(27,4)", "(14,4)", "(13,4)", "(4,4)"],
    answer: "(27,4)",
    explanation: "The mode is 4 (highest frequency, 14). Students scoring 4 or less = 2+4+7+14 = 27. So (S,m) = (27,4)."
  }
]

export default mathsJamb1986
