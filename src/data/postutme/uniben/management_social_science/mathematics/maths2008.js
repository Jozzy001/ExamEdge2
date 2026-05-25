// UNIBEN Post-UTME 2008 — Mathematics (Management & Social Sciences)
// 13 questions (Q18-Q30 from 2008 General Paper)

const unibenMgtMaths2008 = [
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "Calculate the compound interest on ₦2,000 for 2 years at 10% per annum.",
    options: ["₦420", "₦400", "₦320", "₦200"],
    answer: "₦420",
    explanation: "A = P(1+r)ⁿ = 2000(1.10)² = 2000 × 1.21 = ₦2,420. CI = 2420 − 2000 = ₦420."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "A box contains 40.1m³ of air. If the box is 5.23m long and 2.34m wide, calculate its height.",
    options: ["5.35 m", "3.28 m", "0.31 m", "0.19 m"],
    answer: "3.28 m",
    explanation: "V = l × w × h. h = V/(l×w) = 40.1/(5.23×2.34) = 40.1/12.24 = 3.28 m."
  },
  {
    subject: "Mathematics", topic: "Calculus", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "Find the gradient of the curve y = 16/x where x = 8.",
    options: ["1/4", "1/3", "2", "128"],
    answer: "1/4",
    explanation: "y = 16x⁻¹. dy/dx = −16x⁻². At x=8: dy/dx = −16/64 = −1/4. Gradient = 1/4 (magnitude). UNIBEN answer A (1/4)."
  },
  {
    subject: "Mathematics", topic: "Sequences & Series", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "Every Sunday John jogs 3km. For the rest of the week, each day he jogs 1km more than the previous day. How many km does John jog in 2 weeks?",
    options: ["42", "63", "84", "117"],
    answer: "84",
    explanation: "Week pattern: Sun=3, Mon=4, Tue=5, Wed=6, Thu=7, Fri=8, Sat=9. Week total = 3+4+5+6+7+8+9 = 42. Two weeks = 42×2 = 84 km."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "A father is now twice as old as his son. Fourteen years ago he was four times as old as his son. How old are the son and father now?",
    options: ["12 yrs, 24 yrs", "21 yrs, 42 yrs", "35 yrs, 70 yrs", "23 yrs, 46 yrs"],
    answer: "21 yrs, 42 yrs",
    explanation: "Let son = s, father = 2s. 14 years ago: father = 2s−14, son = s−14. 2s−14 = 4(s−14). 2s−14 = 4s−56. 42 = 2s. s = 21. Father = 42. Son = 21 yrs, Father = 42 yrs."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "An open rectangular tank: 4m long, 3m wide and 4m high. Find the area of the metal sheet used.",
    options: ["80 m²", "64 m²", "68 m²", "76 m²"],
    answer: "68 m²",
    explanation: "Open tank (no top lid): Base = 4×3 = 12m². Two long sides = 2×(4×4) = 32m². Two short sides = 2×(3×4) = 24m². Total = 12+32+24 = 68m²."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "The width of a rectangle is 6m shorter than the length. If the area is 216m², find the perimeter.",
    options: ["30 m", "50 m", "60 m", "40 m"],
    answer: "60 m",
    explanation: "Let length = l, width = l−6. l(l−6) = 216. l²−6l−216 = 0. (l−18)(l+12) = 0. l = 18. Width = 12. Perimeter = 2(18+12) = 60 m."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "Add the same number to numerator and denominator of 3/18. If the resulting fraction is 1/2, find the number added.",
    options: ["13", "14", "15", "12"],
    answer: "12",
    explanation: "(3+n)/(18+n) = 1/2. 2(3+n) = 18+n. 6+2n = 18+n. n = 12. Check: (3+12)/(18+12) = 15/30 = 1/2 ✓"
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "The difference between 4⁵⁄₇ and 2¼ is greater than the sum of 1/14 and 1½ by:",
    options: ["23/28", "24/28", "25/28", "27/28"],
    answer: "27/28",
    explanation: "4⁵⁄₇ − 2¼ = 33/7 − 9/4 = 132/28 − 63/28 = 69/28. Sum: 1/14 + 3/2 = 1/14 + 21/14 = 22/14 = 44/28. Difference: 69/28 − 44/28 = 25/28. UNIBEN answer C (25/28)."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "30 apple sellers made an average gain of ₦27 a day. If 12 of them were girls whose average gain was ₦18, what was the average gain of the boys per day?",
    options: ["₦29", "₦33", "₦21", "₦9"],
    answer: "₦33",
    explanation: "Total gain = 30×27 = ₦810. Girls total = 12×18 = ₦216. Boys total = 810−216 = ₦594. Boys count = 30−12 = 18. Boys average = 594/18 = ₦33."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "A teacher contributes 7% of his income (₦5,500/yr) and his wife contributes 4% of her income (₦4,000/yr). Find the sum of their annual contributions.",
    options: ["₦1,045", "₦605", "₦545", "₦490"],
    answer: "₦545",
    explanation: "Husband: 7% × 5500 = ₦385. Wife: 4% × 4000 = ₦160. Total = 385+160 = ₦545."
  },
  {
    subject: "Mathematics", topic: "Sequences & Series", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    isHotTopic: true,
    question: "If 5, x, y, 40 are in geometric progression, find x and y respectively.",
    options: ["2 and 10", "20 and 10", "10 and 20", "10 and 2"],
    answer: "10 and 20",
    explanation: "GP: first term a=5, 4th term=40. r = (40/5)^(1/3) = 8^(1/3) = 2. x = 5×2 = 10. y = 10×2 = 20. ★ RECURRING — GP questions appear every year!"
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "Which of the following is a measure of central tendency?",
    options: ["Medium", "Graph", "Percentage", "Mean"],
    answer: "Mean",
    explanation: "Measures of central tendency: Mean, Median, Mode. Graph, percentage, and 'medium' are not measures of central tendency. Mean is the arithmetic average."
  }
]

export default unibenMgtMaths2008
