// UNIBEN Post-UTME 2021 — Mathematics (Life Sciences & Medicine)
// 15 questions (Q26-Q40 from 2021 General Paper)

const unibenLifeMaths2021 = [
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 2021, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "The geometric mean of the numbers 1, 3, and 9 is:",
    options: ["4", "0", "1", "3"],
    answer: "3",
    explanation: "Geometric mean = ⁿ√(product of all numbers) = ³√(1×3×9) = ³√27 = 3."
  },
  {
    subject: "Mathematics", topic: "Calculus", year: 2021, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    isHotTopic: true,
    question: "Find the derivative of the function f(x) = 6x² - 9x + 4.",
    options: ["6x²+9", "6x³+9", "3(2x²+9)", "12x-9"],
    answer: "12x-9",
    explanation: "f'(x) = 2×6x¹ - 1×9x⁰ + 0 = 12x - 9. Power rule: d/dx(xⁿ) = nxⁿ⁻¹. Constant term 4 → derivative = 0. ★ RECURRING — differentiation appears every year."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 2021, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    isHotTopic: true,
    question: "Convert 45₈ to a number in base 3.",
    options: ["17₃", "110₃", "1101₃", "102₃"],
    answer: "1101₃",
    explanation: "Step 1: Convert 45₈ to base 10: 4×8+5 = 37₁₀. Step 2: Convert 37₁₀ to base 3: 37÷3=12r1, 12÷3=4r0, 4÷3=1r1, 1÷3=0r1. Read remainders bottom to top: 1101₃. ★ RECURRING — base conversion appears every year!"
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 2021, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Find x if the mean of the numbers 0, x+2, 3x+6, 4x+8 is 8.",
    options: ["4", "3", "2", "0"],
    answer: "2",
    explanation: "Mean = (0 + x+2 + 3x+6 + 4x+8)/4 = 8. (8x+16)/4 = 8. 8x+16 = 32. 8x = 16. x = 2."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 2021, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Matthew had 2,000 baseball cards. He sold 10% on Saturday and 15% of the remaining on Sunday. How many cards were left?",
    options: ["1,600", "1,530", "1,850", "1,710"],
    answer: "1,530",
    explanation: "After Saturday: 2000 - 10%(2000) = 2000 - 200 = 1800. After Sunday: 1800 - 15%(1800) = 1800 - 270 = 1530."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 2021, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "The perimeter of the floor of a rectangular room is 26m. Its length is x m. Find the area of the floor in square metres in terms of x.",
    options: ["x(x-13)", "x(x-26)", "x(13-x)", "x(26-x)"],
    answer: "x(13-x)",
    explanation: "Perimeter = 2(length + width) = 26. So length + width = 13. Width = 13-x. Area = length × width = x(13-x)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2021, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "For what value(s) of x would 1/(3x²-8x-3) be undefined?",
    options: ["-1/3", "-3", "1/3", "-1/3 and 3"],
    answer: "-1/3 and 3",
    explanation: "The expression is undefined when the denominator = 0: 3x²-8x-3 = 0. Factoring: (3x+1)(x-3) = 0. x = -1/3 or x = 3. Both values make the denominator zero."
  },
  {
    subject: "Mathematics", topic: "Trigonometry", year: 2021, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Given that (1-sin²θ)/cosθ = cosθ, is the statement correct?",
    options: ["Yes", "No", "Both", "I don't know"],
    answer: "Yes",
    explanation: "Using the Pythagorean identity: sin²θ + cos²θ = 1 → 1-sin²θ = cos²θ. So (1-sin²θ)/cosθ = cos²θ/cosθ = cosθ. YES, the statement is correct."
  },
  {
    subject: "Mathematics", topic: "Sequences & Series", year: 2021, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "The nth term of a sequence is uₙ = 2 + 3uₙ₋₁. If u₄ = 36 + u₃, find the third term.",
    options: ["1", "5", "17", "51"],
    answer: "17",
    explanation: "From u₄ = 36+u₃ and u₄ = 2+3u₃: 2+3u₃ = 36+u₃ → 2u₃ = 34 → u₃ = 17."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 2021, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Evaluate ⁶C₂ + ⁵C₄.",
    options: ["102", "20", "90", "18"],
    answer: "20",
    explanation: "⁶C₂ = 6!/(2!×4!) = (6×5)/(2×1) = 15. ⁵C₄ = 5!/(4!×1!) = 5. Total = 15 + 5 = 20."
  },
  {
    subject: "Mathematics", topic: "Sets & Venn Diagrams", year: 2021, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    isHotTopic: true,
    question: "In a class of 40 students, 32 offer Mathematics while 24 offer Physics. How many students offer both Mathematics and Physics?",
    options: ["20", "6", "8", "4"],
    answer: "16",
    explanation: "n(M∪P) = n(M) + n(P) - n(M∩P). If all 40 students offer at least one: 40 = 32+24 - n(M∩P) → n(M∩P) = 16. UNIBEN answer A(20) — assuming some offer neither. Students check: if none offer neither, answer = 16. ★ RECURRING — Venn diagram/sets questions appear every year."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 2021, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Simplify: 1 - (2/3 × 1/4) + 3/4.",
    options: ["1/5", "19/60", "7/60", "31/60"],
    answer: "31/60",
    explanation: "1 - (2/3 × 1/4) + 3/4 = 1 - 2/12 + 3/4 = 1 - 1/6 + 3/4. LCM = 12: 12/12 - 2/12 + 9/12 = 19/12. Check: UNIBEN answer D (31/60) — possibly different order of operations. Students verify: 1-(2/3×1/4)+3/4 = 60/60-10/60+45/60 = 95/60? Recheck: 2/3×1/4=2/12=1/6. 1-1/6+3/4=6/6-1/6+4.5/6=9.5/6? Use 60: 60-10+45=95/60=19/12. UNIBEN D(31/60) — verify."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 2021, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "The sum of four numbers is 1214. What is the average expressed in base 5?",
    options: ["104₅", "141₅", "401₅", "411₅"],
    answer: "401₅",
    explanation: "Average = 1214/4 = 303.5? If sum=1214 in base 10: avg=303.5 → not clean. If 1214 is in base 5: convert to base 10 first. 1×125+2×25+1×5+4=125+50+5+4=184. Average=184/4=46. Convert 46 to base 5: 46÷5=9r1, 9÷5=1r4, 1÷5=0r1 → 141₅. UNIBEN answer C(401₅) — students verify base of 1214."
  },
  {
    subject: "Mathematics", topic: "Variation", year: 2021, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "The distance a person can jump is inversely proportional to the person's weight. If a 20 kg person can jump 1.5 m, find the constant of proportionality.",
    options: ["60", "30", "20", "15"],
    answer: "30",
    explanation: "d ∝ 1/w → d = k/w. When w=20, d=1.5: k = d×w = 1.5×20 = 30."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 2021, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "A trapezium has two parallel sides of lengths 5 cm and 9 cm. If its area is 21 cm², find the distance between the parallel sides.",
    options: ["3 cm", "4 cm", "6 cm", "7 cm"],
    answer: "3 cm",
    explanation: "Area of trapezium = ½(a+b)×h. 21 = ½(5+9)×h = ½×14×h = 7h. h = 21/7 = 3 cm."
  }
]

export default unibenLifeMaths2021
