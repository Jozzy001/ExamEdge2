// JAMB 2003 Mathematics Past Questions
// Fully flattened — audited standalone objects with topics, answers, and detailed explanations.
// Strictly skipped questions containing complex geometric diagrams, graphs, or custom data tables.

const mathematicsJamb2003 = [
  /*
  CHECK SOURCE: The supplied expression gives 23/30, not the marked answer.
  Also, an archived 2003 source shows a different arrangement of this question
  and gives -119/60. Verify the original JAMB paper before restoring this object.
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 2003, exam: "JAMB",
    question: "Simplify: 1 - (2 1/3 × 1 1/4) ÷ 3 1/2 + 3/5",
    options: ["-2 31/60", "-2 7/15", "-1 19/60", "1 1/15"],
    answer: "-1 19/60",
    explanation: "As supplied, 2 1/3 = 7/3, 1 1/4 = 5/4 and 3 1/2 = 7/2. Therefore (7/3 × 5/4) ÷ (7/2) = 5/6. Hence 1 - 5/6 + 3/5 = 23/30, which is not among the options."
  }
  */

  {
    subject: "Mathematics", topic: "Arithmetic", year: 2003, exam: "JAMB",
    question: "A cinema hall contains a certain number of people. If 22 1/2% are children, 47 1/2% are men and 84 are women, find the number of men in the hall.",
    options: ["133", "113", "63", "84"],
    answer: "133",
    explanation: "Children and men make up 22.5% + 47.5% = 70%, so women make up 30%. If 30% is 84, the total number of people is 84/0.30 = 280. Therefore the number of men is 47.5% of 280 = 133."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 2003, exam: "JAMB",
    question: "Simplify: 213_4 × 23_4, leaving your answer in base 4.",
    options: ["13211_4", "10311_4", "10321_4", "12231_4"],
    answer: "12231_4",
    explanation: "213_4 = 2(4^2) + 1(4) + 3 = 39. Also, 23_4 = 2(4) + 3 = 11. Thus 39 × 11 = 429. Converting 429 to base 4 gives 12231_4."
  },
  {
    subject: "Mathematics", topic: "Arithmetic", year: 2003, exam: "JAMB",
    question: "A woman buys 270 oranges for ₦1,800.00 and sells them at 5 for ₦40.00. What is her total profit?",
    options: ["₦630.00", "₦360.00", "₦1,620.00", "₦2,160.00"],
    answer: "₦360.00",
    explanation: "Number of batches sold = 270/5 = 54. Selling price = 54 × ₦40 = ₦2,160. Profit = ₦2,160 - ₦1,800 = ₦360."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2003, exam: "JAMB",
    question: "Simplify: (√98 - √50) / √32",
    options: ["1/2", "1/4", "1", "3"],
    answer: "1/2",
    explanation: "√98 = 7√2, √50 = 5√2 and √32 = 4√2. Therefore (7√2 - 5√2)/(4√2) = 2√2/(4√2) = 1/2."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 2003, exam: "JAMB",
    question: "The sum of four numbers is 1214_5. What is the average of the numbers expressed in base 5?",
    options: ["411_5", "401_5", "141_5", "114_5"],
    answer: "141_5",
    explanation: "1214_5 = 1(5^3) + 2(5^2) + 1(5) + 4 = 184. The average is 184/4 = 46. Converting 46 to base 5 gives 141_5."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2003, exam: "JAMB",
    question: "Evaluate: log_(√2) 4 + log_(1/2) 16 - log_4 32",
    options: ["-2.5", "5.5", "-5.5", "2.5"],
    answer: "-2.5",
    explanation: "log_(√2) 4 = 4, log_(1/2) 16 = -4, and log_4 32 = 5/2. Therefore 4 - 4 - 5/2 = -2.5."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2003, exam: "JAMB",
    question: "In a class of 40 students, 32 offer Mathematics, 24 offer Physics, and 4 offer neither Mathematics nor Physics. How many students offer both Mathematics and Physics?",
    options: ["16", "20", "4", "8"],
    answer: "20",
    explanation: "Students offering at least one subject = 40 - 4 = 36. Therefore n(M ∩ P) = 32 + 24 - 36 = 20."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 2003, exam: "JAMB",
    question: "Find the value of (1/0.06 ÷ 1/0.042)^(-1), correct to two decimal places.",
    options: ["4.42", "3.14", "1.53", "1.43"],
    answer: "1.43",
    explanation: "1/0.06 ÷ 1/0.042 = 0.042/0.06 = 0.7. Therefore 0.7^(-1) = 1/0.7 = 10/7 ≈ 1.43."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2003, exam: "JAMB",
    question: "If 9^(2x - 1) / 27^(x + 1) = 1, find the value of x.",
    options: ["2", "8", "5", "3"],
    answer: "5",
    explanation: "Write both numbers in base 3: 9^(2x - 1) = 3^(4x - 2) and 27^(x + 1) = 3^(3x + 3). Therefore 3^(4x - 2 - 3x - 3) = 1, so x - 5 = 0 and x = 5."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2003, exam: "JAMB",
    question: "Factorize completely: 4abx - 2axy - 12b^2x + 6bxy",
    options: ["2x(3b - a)(2b - y)", "2x(a - 3b)(b - 2y)", "2x(2b - a)(3b - y)", "2x(a - 3b)(2b - y)"],
    answer: "2x(a - 3b)(2b - y)",
    explanation: "Group the terms: 2ax(2b - y) - 6b^2x(2b - y). Factor out 2x(2b - y): 2x(2b - y)(a - 3b) = 2x(a - 3b)(2b - y)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2003, exam: "JAMB",
    question: "The sum of the first n terms of an arithmetic progression is 252. If the first term is -16 and the last term is 72, find the number of terms in the series.",
    options: ["7", "9", "6", "8"],
    answer: "9",
    explanation: "S_n = n/2(a + L). Thus 252 = n/2(-16 + 72) = 28n. Therefore n = 252/28 = 9."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2003, exam: "JAMB",
    question: "The graphs of the function y = x^2 + 4 and a straight line PQ are drawn to solve the equation x^2 - 3x + 2 = 0. What is the linear equation of PQ?",
    options: ["y = 3x + 2", "y = 3x - 4", "y = 3x + 4", "y = 3x - 2"],
    answer: "y = 3x + 2",
    explanation: "From x^2 - 3x + 2 = 0, x^2 = 3x - 2. Since y = x^2 + 4, substitute x^2 = 3x - 2 to obtain y = 3x + 2."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2003, exam: "JAMB",
    question: "Find the values of x and y respectively if 3x - 5y + 5 = 0 and 4x - 7y + 8 = 0.",
    options: ["-4, -5", "5, 4", "-5, -4", "4, 5"],
    answer: "5, 4",
    explanation: "The equations are 3x - 5y = -5 and 4x - 7y = -8. Eliminating y gives x = 5, and substituting back gives y = 4."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2003, exam: "JAMB",
    question: "Find the range of values of x satisfying the inequalities: 5 + x ≤ 8 and 13 + x ≥ 7.",
    options: ["-3 ≤ x ≤ 3", "-6 ≤ x ≤ -3", "3 ≤ x ≤ 6", "-6 ≤ x ≤ 3"],
    answer: "-3 ≤ x ≤ 3",
    explanation: "From 5 + x ≤ 8, x ≤ 3. From 13 + x ≥ 7, x ≥ -6. Therefore the range is -6 ≤ x ≤ 3."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2003, exam: "JAMB",
    question: "Three consecutive terms of a geometric progression are given as n - 2, n, and n + 3. Find the common ratio.",
    options: ["2/3", "3/2", "1/2", "1/4"],
    answer: "3/2",
    explanation: "For a geometric progression, n/(n - 2) = (n + 3)/n. Hence n^2 = (n - 2)(n + 3) = n^2 + n - 6, so n = 6. Therefore the common ratio is 6/4 = 3/2."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2003, exam: "JAMB",
    question: "The length a person can jump is inversely proportional to his weight. If a 20kg person can jump 1.5m, find the constant of proportionality.",
    options: ["30", "60", "15", "20"],
    answer: "30",
    explanation: "If J is inversely proportional to W, then J = k/W. Hence k = JW = 1.5 × 20 = 30."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 2003, exam: "JAMB",
    question: "An arc of a circle subtends an angle of 30° on the circumference of a circle of radius 21cm. Find the length of the arc.",
    options: ["66cm", "44cm", "22cm", "11cm"],
    answer: "22cm",
    explanation: "The angle at the centre is twice the angle at the circumference, so it is 60°. Arc length = 60/360 × 2 × π × 21 = 22cm, using π = 22/7."
  },

  /*
  CHECK SOURCE: The supplied data give an area of 121cm² with parallel sides
  5cm and 9cm. Using A = 1/2(a + b)h gives h = 121/7cm, which is not any
  supplied option. Verify the original paper before restoring this object.
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 2003, exam: "JAMB",
    question: "A trapezium has two parallel sides of length 5cm and 9cm. If the area is 121cm^2, find the perpendicular distance between the parallel sides.",
    options: ["7cm", "3cm", "4cm", "6cm"],
    answer: "4cm",
    explanation: "Using A = 1/2(a + b)h gives 121 = 1/2(5 + 9)h = 7h, so h = 121/7cm. This does not match any option."
  }
  */

  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 2003, exam: "JAMB",
    question: "The range of the measurements 4, 3, 11, 9, 6, 15, 19, 23, 27, 24, 21 and 16 is",
    options: ["23", "24", "21", "16"],
    answer: "24",
    explanation: "Range = maximum - minimum = 27 - 3 = 24."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 2003, exam: "JAMB",
    question: "Two dice are thrown together. What is the probability that the sum of the numbers is divisible by 3?",
    options: ["1/2", "1/3", "1/4", "1/6"],
    answer: "1/3",
    explanation: "There are 36 equally likely outcomes. Sums divisible by 3 are 3, 6, 9 and 12. They have 2, 5, 4 and 1 outcomes respectively, giving 12 successful outcomes. Probability = 12/36 = 1/3."
  }
];

export default mathematicsJamb2003;