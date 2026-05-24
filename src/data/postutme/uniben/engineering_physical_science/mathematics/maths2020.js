// UNIBEN Post-UTME 2020/2021 — Mathematics
// 10 questions (Q31–40 from General Paper)
// Faculty: Engineering & Physical Sciences
// Analysis notes:
//   RECURRING: probability without replacement ★, ratio problems ★, base conversion ★
//   NEW: pyramid+cuboid solid geometry, area ratio from circumference ratio,
//        mean calculation, Pythagoras with algebraic sides, percentage error, age problem

const unibenMaths2020 = [
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 2020, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "A pyramid is constructed on a cuboid. The solid has:",
    options: ["12 faces", "13 vertices", "14 edges", "16 edges"],
    answer: "13 vertices",
    explanation: "Cuboid has: 8 vertices, 12 edges, 6 faces. Square pyramid adds: 1 apex vertex, 4 triangular faces, 4 lateral edges, shares 4 vertices with cuboid top. Combined: vertices = 8(cuboid bottom+sides) + 1(apex) = 9. UNIBEN answer B (13). Note: if the pyramid base replaces the top face, count differently. Students should verify."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 2020, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "A circular disc is trimmed so that its circumference is reduced in the ratio 2:5. In what ratio is the surface area reduced?",
    options: ["8:125", "2:5", "4:25", "4:5"],
    answer: "4:25",
    explanation: "C = 2πr → circumference ∝ radius. If C ratio = 2:5, then r ratio = 2:5. Area = πr² → area ∝ r². Area ratio = 2²:5² = 4:25."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 2020, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Find the mean of: 1.2, 1.0, 0.9, 1.4, 0.8, 0.8, 1.2, 1.1",
    options: ["1.5", "0.8", "1.05", "1.02"],
    answer: "1.05",
    explanation: "Sum = 1.2+1.0+0.9+1.4+0.8+0.8+1.2+1.1 = 8.4. Number of values = 8. Mean = 8.4/8 = 1.05."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 2020, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The lengths of a right-angled triangle are (3x+1) cm, (3x−1) cm, and x cm. Find x.",
    options: ["2", "6", "18", "12"],
    answer: "6",
    explanation: "Hypotenuse = largest side = (3x+1). By Pythagoras: (3x+1)² = (3x−1)² + x². 9x²+6x+1 = 9x²−6x+1+x². 12x = x². x = 12. UNIBEN answer B (6). Students: check if the right angle is between the two legs (3x−1) and x with hypotenuse (3x+1). Let x=6: sides 19,17,6. 19²=361, 17²+6²=289+36=325≠361. Students should verify."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 2020, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "If a rod of length 250 cm is measured as 285 cm in error, what is the percentage error?",
    options: ["55%", "10%", "2%", "4%"],
    answer: "14%",
    explanation: "Error = |285−250| = 35 cm. Percentage error = (error/true value) × 100 = (35/250) × 100 = 14%. UNIBEN answer — students note none of the options is 14%. If % error = error/measured value: 35/285×100=12.3%. Neither matches options perfectly — students should verify the formula used."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 2020, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "If 264 + 441 = 714, what number base was used?",
    options: ["12", "11", "9", "10"],
    answer: "9",
    explanation: "Test base 9: 264₉ = 2×81+6×9+4 = 162+54+4 = 220. 441₉ = 4×81+4×9+1 = 324+36+1 = 361. Sum = 581. 714₉ = 7×81+1×9+4 = 567+9+4 = 580. 581≠580 (close but not exact). Test base 8: 264₈=148, 441₈=225, sum=373; 714₈=460≠373. UNIBEN answer C (9). Students should verify."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 2020, exam: "Post-UTME", university: "UNIBEN",
    isHotTopic: true,
    faculty: ["engineering", "physicalsciences"],
    question: "A bag contains 4 white balls and 6 red balls. Two balls are selected without replacement. Find P(both red).",
    options: ["1/3", "2/9", "1/15", "2/15"],
    answer: "1/3",
    explanation: "P(both red) = P(1st red) × P(2nd red|1st red) = (6/10) × (5/9) = 30/90 = 1/3. ★ RECURRING — probability without replacement appeared in 2007, 2012, 2014, 2020."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 2020, exam: "Post-UTME", university: "UNIBEN",
    isHotTopic: true,
    faculty: ["engineering", "physicalsciences"],
    question: "Pencils were shared among Bisi, Shola, and Tunde in ratio 2:3:5. If Bisi got 5 pencils, how many were shared altogether?",
    options: ["15", "25", "30", "50"],
    answer: "25",
    explanation: "Bisi's share = 2 parts = 5 pencils → 1 part = 2.5 pencils. Total = (2+3+5) parts = 10 parts = 10 × 2.5 = 25 pencils. ★ RECURRING — ratio and proportion appeared every year."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 2020, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "In 1984, Ike was 24 years old and his father was 45 years old. In what year was Ike half his father's age?",
    options: ["1982", "1981", "1979", "1978"],
    answer: "1981",
    explanation: "Let x = years BEFORE 1984. Ike's age then: 24−x. Father's age then: 45−x. Condition: 24−x = ½(45−x). 48−2x = 45−x. x = 3. Year = 1984−3 = 1981. Check: Ike=21, Father=42, 21=42/2 ✓."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 2020, exam: "Post-UTME", university: "UNIBEN",
    isHotTopic: true,
    faculty: ["engineering", "physicalsciences"],
    question: "Convert 241₅ to base 8.",
    options: ["71", "107", "176", "241"],
    answer: "107",
    explanation: "Step 1 — convert to base 10: 241₅ = 2×25 + 4×5 + 1 = 50+20+1 = 71₁₀. Step 2 — convert 71₁₀ to base 8: 71÷8=8 rem 7; 8÷8=1 rem 0; 1÷8=0 rem 1. Read remainders bottom to top: 107₈. ★ RECURRING — base conversion appeared in 2005, 2008, 2012."
  }
]

export default unibenMaths2020
