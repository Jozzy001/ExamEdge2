// JAMB 2002 Mathematics Past Questions
// Fully flattened — audited standalone objects with topics, answers, and detailed explanations.
// Strictly skipped questions containing complex geometric diagrams, coordinate graphs, or custom data tables.

const mathematicsJamb2002 = [
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 2002, exam: "JAMB",
    question: "A trader bought goats for ₦4,000 each. He sold them for ₦180,000 at a loss of 25%. How many goats did he buy?",
    options: ["36", "45", "50", "60"],
    answer: "60",
    explanation: "A loss of 25% means the selling price is 75% of the cost price. Therefore total cost price = ₦180,000 / 0.75 = ₦240,000. Number of goats = ₦240,000 / ₦4,000 = 60."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2002, exam: "JAMB",
    question: "Simplify: (√0.7 + √70)^2",
    options: ["217.7", "168.7", "84.7", "70.7"],
    answer: "84.7",
    explanation: "(√0.7 + √70)^2 = 0.7 + 2√(0.7 × 70) + 70 = 0.7 + 2√49 + 70 = 0.7 + 14 + 70 = 84.7."
  },

  /*
  CHECK SOURCE: The supplied question uses 0.0054 and gives 0.01286 as the answer, but direct calculation with 0.0054 gives 0.128571..., which rounds to 0.1286. An archived 2002 source gives 0.00054 instead; with 0.00054 the answer is 0.01286. Verify the original paper before choosing which transcription to retain.
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 2002, exam: "JAMB",
    question: "Evaluate: (0.21 × 0.072 × 0.0054) / (0.006 × 1.68 × 0.063) correct to four significant figures.",
    options: ["0.1286", "0.1285", "0.01286", "0.01285"],
    answer: "0.01286",
    explanation: "As supplied, the expression evaluates to 0.128571..., not 0.01286. An archived source has 0.00054 in the numerator, which gives 0.012857... and hence 0.01286."
  }
  */

  {
    subject: "Mathematics", topic: "Algebra", year: 2002, exam: "JAMB",
    question: "In a school, 220 students offer Biology or Mathematics or both. 125 offer Biology and 110 Mathematics. How many offer Biology but not Mathematics?",
    options: ["125", "110", "95", "80"],
    answer: "110",
    explanation: "Using n(B ∪ M) = n(B) + n(M) - n(B ∩ M): 220 = 125 + 110 - n(B ∩ M), so n(B ∩ M) = 15. Therefore Biology but not Mathematics = 125 - 15 = 110."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 2002, exam: "JAMB",
    question: "Simplify: 52.4 - 5.7 - 3.45 - 1.75",
    options: ["42.2", "42.1", "41.5", "41.4"],
    answer: "41.5",
    explanation: "52.4 - 5.7 = 46.7; 46.7 - 3.45 = 43.25; 43.25 - 1.75 = 41.5."
  },

  /*
  CHECK SOURCE: The supplied expression has (25)^(1/2), which gives 250. Archived 2002 sources show (25)^(-1/2), which gives 10 and matches the original option set. Verify the original paper before retaining the supplied transcription.
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 2002, exam: "JAMB",
    question: "Without using tables, evaluate: (343)^(1/3) × (0.14)^(-1) × (25)^(1/2)",
    options: ["7", "8", "10", "250"],
    answer: "250",
    explanation: "As supplied, (343)^(1/3) = 7, (0.14)^(-1) = 100/14, and (25)^(1/2) = 5. Therefore the value is 7 × 100/14 × 5 = 250. Archived sources instead show (25)^(-1/2), giving 10."
  }
  */

  {
    subject: "Mathematics", topic: "Trigonometry", year: 2002, exam: "JAMB",
    question: "If tan θ = 4/3, calculate sin^2 θ - cos^2 θ.",
    options: ["7/25", "9/25", "16/25", "24/25"],
    answer: "7/25",
    explanation: "With opposite = 4 and adjacent = 3, the hypotenuse is 5. Thus sin θ = 4/5 and cos θ = 3/5. Therefore sin^2 θ - cos^2 θ = 16/25 - 9/25 = 7/25."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2002, exam: "JAMB",
    question: "Find the value of k if the line 2y - kx + 4 = 0 is perpendicular to the line y + 1/4x - 7 = 0.",
    options: ["-8", "8", "4", "2"],
    answer: "8",
    explanation: "The first line has slope k/2. The second line has slope -1/4. For perpendicular lines, (k/2)(-1/4) = -1, so k = 8."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2002, exam: "JAMB",
    question: "Find the coordinates of the midpoint of the x and y intercepts of the line 2y = 4x - 8.",
    options: ["(-1, -2)", "(1, 2)", "(2, 0)", "(1, -2)"],
    answer: "(1, -2)",
    explanation: "The y-intercept is (0, -4), and the x-intercept is (2, 0). Their midpoint is ((0 + 2)/2, (-4 + 0)/2) = (1, -2)."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 2002, exam: "JAMB",
    question: "The sum of the interior angles of a polygon is 20 right angles. How many sides does the polygon have?",
    options: ["10", "12", "20", "40"],
    answer: "12",
    explanation: "Twenty right angles = 20 × 90° = 1800°. Since the sum of interior angles is (n - 2) × 180°, (n - 2) × 180° = 1800°, so n = 12."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 2002, exam: "JAMB",
    question: "The mean of a set of six numbers is 60. If the mean of the first five numbers is 50, find the sixth number in the set.",
    options: ["110", "105", "100", "95"],
    answer: "110",
    explanation: "The sum of all six numbers is 6 × 60 = 360. The sum of the first five is 5 × 50 = 250. Therefore the sixth number is 360 - 250 = 110."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2002, exam: "JAMB",
    question: "The time taken to do a piece of work is inversely proportional to the number of men employed. If it takes 45 men to do a piece of work in 5 days, how long will it take 25 men?",
    options: ["5 days", "9 days", "12 days", "15 days"],
    answer: "9 days",
    explanation: "Since time is inversely proportional to the number of men, T × M is constant. Thus 5 × 45 = 225. For 25 men, T = 225/25 = 9 days."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2002, exam: "JAMB",
    question: "The binary operation * is defined on the set of integers p and q by p * q = pq + p + q. Find 2 * (3 * 4).",
    options: ["19", "38", "59", "67"],
    answer: "59",
    explanation: "First, 3 * 4 = 3(4) + 3 + 4 = 19. Then 2 * 19 = 2(19) + 2 + 19 = 59."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2002, exam: "JAMB",
    question: "If -2 is the solution of the equation 2x + 1 - 3c = 2c + 3x - 7, find the value of c.",
    options: ["1", "2", "3", "4"],
    answer: "2",
    explanation: "Substitute x = -2: -4 + 1 - 3c = 2c - 6 - 7, so -3 - 3c = 2c - 13. Hence 10 = 5c and c = 2."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2002, exam: "JAMB",
    question: "The inverse of the function f(x) = 3x + 4 is",
    options: ["1/3(x + 4)", "1/4(x + 3)", "1/5(x - 5)", "1/3(x - 4)"],
    answer: "1/3(x - 4)",
    explanation: "Let y = 3x + 4. Interchanging x and y gives x = 3y + 4, so y = (x - 4)/3 = 1/3(x - 4)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2002, exam: "JAMB",
    question: "Solve for x in the cubic equation: x^3 - 5x^2 - x + 5 = 0.",
    options: ["1, 1 or 5", "-1, 1 or -5", "1, 1 or -5", "1, -1 or 5"],
    answer: "1, -1 or 5",
    explanation: "Group terms: x^2(x - 5) - 1(x - 5) = 0. Thus (x^2 - 1)(x - 5) = 0, giving (x - 1)(x + 1)(x - 5) = 0. Therefore x = 1, -1, or 5."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2002, exam: "JAMB",
    question: "If the 9th term of an A.P. is five times the 5th term, find the relationship between first term a and common difference d.",
    options: ["2a + 2d = 0", "3a + 5d = 0", "a + 3d = 0", "a + 2d = 0"],
    answer: "a + 3d = 0",
    explanation: "T_9 = a + 8d and T_5 = a + 4d. Given T_9 = 5T_5: a + 8d = 5(a + 4d), so 4a + 12d = 0. Dividing by 4 gives a + 3d = 0."
  }
];

export default mathematicsJamb2002;