// JAMB 1988 Mathematics Past Questions
// Source had 50 questions (numbered 1-50, though question 43 does not appear to exist in the source document itself).
// 16 were skipped (diagrams, missing from source, or source text too garbled/ambiguous to transcribe reliably).
// See the skipped-questions list sent alongside this file.

const mathsJamb1988 = [

  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1988, exam: "JAMB",
    question: "If x is the sum of the prime numbers between 1 and 6, and y is the H.C.F of 6, 9, 15, find the product of x and y.",
    options: ["27", "30", "33", "90"],
    answer: "30",
    explanation: "Primes between 1 and 6: 2, 3, 5. Sum x = 10. H.C.F of 6, 9, 15 is y = 3. Product = 10×3 = 30."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1988, exam: "JAMB",
    question: "A 5.0g of salt was weighed by Tunde as 5.1g. What is the percentage error?",
    options: ["20", "2", "2", "0.2"],
    answer: "2",
    explanation: "Percentage error = (0.1/5.0)×100 = 2%."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1988, exam: "JAMB",
    question: "Find, correct to one decimal place: 0.24633/0.0306",
    options: ["0.8", "1.8", "8.0", "8.1"],
    answer: "8.1",
    explanation: "0.24633/0.0306 ≈ 8.05, which rounds to 8.1 (1 d.p.)."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1988, exam: "JAMB",
    question: "Two sisters, Taiwo and Kehinde, own a store. The ratio of Taiwo's share to Kehinde's is 11:9. Later Kehinde sells 2/3 of her share to Taiwo for ₦720.00. Find the value of the store.",
    options: ["₦1,080.00", "₦2,400.00", "₦3,000.00", "₦3,600.00"],
    answer: "₦2,400.00",
    explanation: "Let total = 20k (11k Taiwo, 9k Kehinde). Kehinde sells 2/3 of 9k = 6k for ₦720, so k=120. Total value = 20k = 2400."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1988, exam: "JAMB",
    question: "A basket contains green, black and blue balls in the ratio 5:2:1. If there are 10 blue balls, find the corresponding new ratio when 10 green and 10 black balls are removed from the basket.",
    options: ["1:1;1", "4:2:1", "5:1:1", "4:1:1"],
    answer: "4:1:1",
    explanation: "1 part = 10 blue balls, so green=50, black=20, blue=10. After removing 10 green and 10 black: green=40, black=10, blue=10, giving a ratio of 4:1:1."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1988, exam: "JAMB",
    question: "A taxpayer is allowed 1/8th of his income tax free, and pays 20% on the remainder. If he pays ₦490.00 tax, what is his income?",
    options: ["₦560.00", "₦2,450.00", "₦2,800.00", "₦3,920.00"],
    answer: "₦2,800.00",
    explanation: "Taxable income = 7I/8. Tax = 0.2×7I/8 = 7I/40 = 490 → I = 490×40/7 = 2800."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1988, exam: "JAMB",
    question: "If log₁₀2 = 0.3010 and log₁₀3 = 0.4771, evaluate, without using logarithm tables, log₁₀4.5",
    options: ["0.3010", "0.4771", "0.6532", "0.9542"],
    answer: "0.6532",
    explanation: "4.5 = 3²/2. log(4.5) = 2log3 - log2 = 2(0.4771)-0.3010 = 0.9542-0.3010 = 0.6532."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1988, exam: "JAMB",
    question: "The thickness of an 800-paged book is 18mm. Calculate the thickness of one leaf of the book, giving your answer in metres and in standard form. (Note: a leaf has a page on each side, so 800 pages = 400 leaves.)",
    options: ["2.25 × 10⁻⁴m", "4.50 × 10⁻⁴m", "2.25 × 10⁻⁵m", "4.50 × 10⁻⁵m"],
    answer: "4.50 × 10⁻⁵m",
    explanation: "800 pages = 400 leaves. Thickness per leaf = 18mm/400 = 0.045mm = 4.5×10⁻²mm = 4.50×10⁻⁵m."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1988, exam: "JAMB",
    question: "Simplify: (x+2)/(x+1) − (x-2)/(x+2)",
    options: ["3/(x+1)", "(3x+2)/[(x+1)(x+2)]", "(5x+6)/[(x+1)(x+2)]", "(2x²+5x+2)/[(x+1)(x+2)]"],
    answer: "(5x+6)/[(x+1)(x+2)]",
    explanation: "Over a common denominator (x+1)(x+2): [(x+2)²-(x-2)(x+1)]/[(x+1)(x+2)] = [(x²+4x+4)-(x²-x-2)]/[(x+1)(x+2)] = (5x+6)/[(x+1)(x+2)]."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1988, exam: "JAMB",
    question: "If 1/p = (a+b)²/(a-b) and 1/q = (a+b)/(a-b)², find p/q",
    options: ["(a+b)/(a-b)", "1", "(a-b)/(a+b)", "1/(a²-b²)"],
    answer: "1/(a²-b²)",
    explanation: "p=(a-b)/(a+b)², q=(a-b)²/(a+b). p/q = [(a-b)/(a+b)²]×[(a+b)/(a-b)²] = (a²-b²)/(a²-b²)² = 1/(a²-b²)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1988, exam: "JAMB",
    question: "If x varies inversely as the cube root of y and x = 1 when y = 8, find y when x = 3",
    options: ["1/3", "2/3", "8/27", "4/9"],
    answer: "8/27",
    explanation: "x=k/y^(1/3). 1=k/8^(1/3)=k/2→k=2. At x=3: 3=2/y^(1/3)→y^(1/3)=2/3→y=(2/3)³=8/27."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1988, exam: "JAMB",
    question: "If a = -3, b = 2, c = 4, calculate (a³ - b³ - c^(1/2)) / (b + 1 - c)",
    options: ["37", "-37/5", "37/5", "-37"],
    answer: "37",
    explanation: "a³=-27, b³=8, √c=2. Numerator = -27-8-2 = -37. Denominator = 2+1-4 = -1. Result = -37/-1 = 37."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1988, exam: "JAMB",
    question: "Simplify: (x - y) / (x^(1/3) - y^(1/3))",
    options: ["x² = xy + y²", "x^(2/3) + x^(1/3)y^(1/3) + y^(2/3)", "x^(2/3) - x^(1/3)y^(1/3) - y^(2/3)", "x² - xy + y²"],
    answer: "x^(2/3) + x^(1/3)y^(1/3) + y^(2/3)",
    explanation: "Let a=x^(1/3), b=y^(1/3). Then x-y=a³-b³=(a-b)(a²+ab+b²). Dividing by (a-b) leaves a²+ab+b² = x^(2/3)+x^(1/3)y^(1/3)+y^(2/3)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1988, exam: "JAMB",
    question: "List the integral values of x which satisfy the inequality 1 ≤ 5 - 2x ≤ 7",
    options: ["-1,0,1,2", "0,1,2,3", "-1,0,1,2,3", "-1,0,2,3"],
    answer: "-1,0,1,2",
    explanation: "1≤5-2x gives x≤2. 5-2x≤7 gives x≥-1. So -1≤x≤2, and the integers are -1, 0, 1, 2."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1988, exam: "JAMB",
    question: "Given that 3x - 5y - 3 = 0 and 2y - 6x + 5 = 0, find the value of (x, y)",
    options: ["(-1/8, 19/24)", "(8, 24/10)", "(-8, 24/19)", "(19/24, -1/8)"],
    answer: "(19/24, -1/8)",
    explanation: "From 3x-5y=3, x=(3+5y)/3. Substituting into 6x=2y+5: 2(3+5y)=2y+5 → 8y=-1 → y=-1/8, then x=19/24."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1988, exam: "JAMB",
    question: "The solution of the quadratic equation bx² + qx + b = 0 is",
    options: [
      "x = (-b±√(b²-4ac))/2a",
      "x = (-b±√(p²-4pb))/2a",
      "x = (-q±√(q²-4b²))/2b",
      "x = (-q±√(p²-4bp))/2p"
    ],
    answer: "x = (-q±√(q²-4b²))/2b",
    explanation: "Applying the quadratic formula to bx²+qx+b=0 (with 'a'=b, 'b'=q, 'c'=b): x = [-q±√(q²-4b·b)]/(2b) = [-q±√(q²-4b²)]/(2b)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1988, exam: "JAMB",
    question: "Simplify: 1/(x²+5x+6) + 1/(x²+3x+2)",
    options: ["(x+3)/[(x+1)(x+2)]", "1/[(x+1)(x+2)(x+3)]", "2/[(x+1)(x+3)]", "4/[(x+1)(x+3)]"],
    answer: "2/[(x+1)(x+3)]",
    explanation: "x²+5x+6=(x+2)(x+3), x²+3x+2=(x+1)(x+2). Over common denom (x+1)(x+2)(x+3): [(x+1)+(x+3)]/denom = (2x+4)/denom = 2(x+2)/denom = 2/[(x+1)(x+3)]."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1988, exam: "JAMB",
    question: "What is the solution of the equation x² - x - 1 = 0?",
    options: ["x=1.6 and x=-0.6", "x=-1.6 and x=0.6", "x=1.6 and x=0.6", "x=-1.6 and x=-0.6"],
    answer: "x=1.6 and x=-0.6",
    explanation: "Using the quadratic formula: x = (1±√5)/2 ≈ (1±2.236)/2, giving x≈1.6 or x≈-0.6."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1988, exam: "JAMB",
    question: "The solution of x² - 2x - 1 = 0 represents the points of intersection of two graphs. If one of the graphs is y = 2 + x - x², find the second graph.",
    options: ["y = 1 - x", "y = 1 + x", "y = x - 1", "y = 3x + 3"],
    answer: "y = 1 - x",
    explanation: "At intersection, 2+x-x² = f(x). We need 2+x-x²-f(x) to be equivalent to -(x²-2x-1). Solving gives f(x) = 1-x."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1988, exam: "JAMB",
    question: "If the sum of the 8th and 9th terms of an arithmetic progression is 72 and the 4th term is -6, find the common difference.",
    options: ["4", "8", "6⅔", "9⅓"],
    answer: "9⅓",
    explanation: "a8+a9 = 2a+15d = 72. a4 = a+3d = -6 → a = -6-3d. Substituting: 2(-6-3d)+15d=72 → 9d=84 → d = 9⅓."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1988, exam: "JAMB",
    question: "If 7 and 189 are the first and fourth terms of a geometric progression respectively, find the sum of the first three terms of the progression.",
    options: ["182", "91", "63", "28"],
    answer: "91",
    explanation: "ar³=189, a=7, so r³=27, r=3. Sum of first 3 terms = 7(1+3+9) = 91."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1988, exam: "JAMB",
    question: "For which of the following exterior angles is a regular polygon possible? (i) 35° (ii) 18° (iii) 115°",
    options: ["i and ii", "ii only", "ii and iii", "iii only"],
    answer: "ii only",
    explanation: "A regular polygon's exterior angle must divide 360° exactly. 360/35 and 360/115 are not integers, but 360/18=20 (a valid regular 20-gon). Only (ii) works."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1988, exam: "JAMB",
    question: "A quarter-circle of radius 6cm is cut away from each corner of a rectangle 25cm long and 18cm wide. Find the perimeter of the remaining figure.",
    options: ["38cm", "(38+12π)cm", "(86-12π)cm", "(86-6π)cm"],
    answer: "(38+12π)cm",
    explanation: "Each side loses 2×6cm (one radius at each end): the 25cm sides become 13cm each (26cm total) and the 18cm sides become 6cm each (12cm total), giving 38cm of straight edge. The four quarter-circle arcs together form a full circle of circumference 2π(6)=12π. Total = 38+12π cm."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1988, exam: "JAMB",
    question: "In the figure, PS = RS = QS and angle QSR = 50°. Find angle QPR (where P, Q, R lie on a circle centred at S).",
    options: ["25°", "40°", "50°", "65°"],
    answer: "25°",
    explanation: "Since S is equidistant from P, Q and R, it is the centre of a circle through them. Angle QSR (50°) is the central angle for arc QR, and angle QPR is the inscribed angle subtending the same arc — half the central angle, so QPR = 25°."
  },
  {
    subject: "Mathematics", topic: "Trigonometry", year: 1988, exam: "JAMB",
    question: "From a point 14√3 metres away from a tree, a man discovers that the angle of elevation of the top of the tree is 30°. If the man measures this angle of elevation from a point 2 metres above the ground, how high is the tree?",
    options: ["12m", "14m", "14√3m", "16m"],
    answer: "16m",
    explanation: "From eye level (2m up), tan30° = (h-2)/(14√3) → h-2 = 14√3 × (1/√3) = 14 → h = 16m."
  },
  {
    subject: "Mathematics", topic: "Trigonometry", year: 1988, exam: "JAMB",
    question: "Alero starts a 3km walk from P on a bearing 023°. She then walks 4km on a bearing 113° to Q. What is the bearing of Q from P?",
    options: ["26°52'", "52°8'", "76°8'", "90°"],
    answer: "76°8'",
    explanation: "The two legs are perpendicular (113°-23°=90°). Using coordinates: displacement ≈ (4.854, 1.199) north/east from P. Bearing = arctan(4.854/1.199) ≈ 76°8'."
  },
  {
    subject: "Mathematics", topic: "Trigonometry", year: 1988, exam: "JAMB",
    question: "If cot q = x/y, find cosec q",
    options: ["1/[y(x²+y²)]", "√(x²+y²)/y", "1/[y(x²+y²)]", "y/x"],
    answer: "√(x²+y²)/y",
    explanation: "If cot q = x/y, then in a right triangle the adjacent side is x, opposite is y, hypotenuse is √(x²+y²). cosec q = hypotenuse/opposite = √(x²+y²)/y."
  },
  {
    subject: "Mathematics", topic: "Trigonometry", year: 1988, exam: "JAMB",
    question: "In triangle PQR, PQ = 1cm, QR = 2cm and angle PQR = 120°. Find the longest side of the triangle.",
    options: ["3", "3√7/7", "3√7", "√7"],
    answer: "√7",
    explanation: "The side opposite the largest angle (120°, at Q) is PR. By the cosine rule: PR² = 1²+2²-2(1)(2)cos120° = 5-(-2) = 7, so PR = √7."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1988, exam: "JAMB",
    question: "If a metal pipe 10cm long has an external diameter of 12cm and a thickness of 1cm, find the volume of the metal used in making the pipe.",
    options: ["120πcm³", "110πcm³", "60πcm³", "50πcm³"],
    answer: "110πcm³",
    explanation: "External radius=6cm, internal radius=5cm. Volume = π(R²-r²)×length = π(36-25)×10 = 110π cm³."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1988, exam: "JAMB",
    question: "A solid consists of a hemisphere surmounted by a right circular cone, both with radius 3.0cm; the cone has height 6.0cm. Find the volume of the solid.",
    options: ["18πcm³", "36πcm³", "54πcm³", "108πcm³"],
    answer: "36πcm³",
    explanation: "Volume of cone = (1/3)π(3²)(6) = 18π. Volume of hemisphere = (2/3)π(3³) = 18π. Total = 18π+18π = 36π cm³."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1988, exam: "JAMB",
    question: "PQR is a triangle in which PQ = 10cm and angle QPR = 60°. S is a point equidistant from P and Q, and also equidistant from PQ and PR. If U is the foot of the perpendicular from S on PR, find the length SU in cm to one decimal place.",
    options: ["2.7", "2.9", "3.1", "3.3"],
    answer: "2.9",
    explanation: "S lies on both the perpendicular bisector of PQ and the bisector of angle P (30° from PQ). Setting coordinates with P at the origin and PQ along the x-axis, solving for the intersection and the perpendicular distance to line PR gives SU ≈ 2.9cm."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1988, exam: "JAMB",
    question: "In a class of 150 students, the sector in a pie chart representing the students offering Physics has angle 12°. How many students are offering Physics?",
    options: ["18", "15", "10", "5"],
    answer: "5",
    explanation: "Students = (12/360) × 150 = 5."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1988, exam: "JAMB",
    question: "If x and y represent the mean and the median respectively of the following set of numbers: 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, find x/y correct to one decimal place.",
    options: ["1.6", "1.2", "1.1", "1.0"],
    answer: "1.0",
    explanation: "Sum=156, mean x=15.6. Median y = average of 5th and 6th values = (15+16)/2 = 15.5. x/y = 15.6/15.5 ≈ 1.0."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1988, exam: "JAMB",
    question: "If two dice are thrown together, what is the probability of obtaining at least a score of 10?",
    options: ["1/6", "1/12", "5/6", "11/12"],
    answer: "1/6",
    explanation: "Sums of 10, 11, or 12 occur in 3+2+1=6 of the 36 outcomes. P = 6/36 = 1/6."
  }
]

export default mathsJamb1988
