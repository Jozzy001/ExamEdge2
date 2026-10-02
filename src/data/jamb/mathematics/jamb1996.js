// JAMB 1996 Mathematics Past Questions

// Fully flattened — standalone objects with topics, answers, and detailed explanations.
// Audited for mathematical correctness, answer matching, transcription issues, and budget-Android display safety.

// CHECK SOURCE: The supplied questions match published JAMB 1986 Mathematics material,
// although this file is labelled 1996. The year has been preserved as 1996 here
// to avoid silently changing the app's dataset year.

const mathematicsJamb1996 = [

  {
    subject: "Mathematics", topic: "Algebra", year: 1996, exam: "JAMB",

    question: "The curve y = -x^2 + 3x + 4 intersects the coordinate axes at",

    options: [
      "(4, 0), (0, 0) and (-1, 0)",
      "(-4, 0), (0, 4) and (1, 1)",
      "(0, 0), (0, 1) and (1, 0)",
      "(0, 4), (4, 0) and (-1, 0)"
    ],

    answer: "(0, 4), (4, 0) and (-1, 0)",

    explanation: "For the y-intercept, set x = 0, giving (0, 4). For the x-intercepts, set y = 0: -x^2 + 3x + 4 = 0, so (x - 4)(x + 1) = 0. Thus x = 4 or x = -1, giving (4, 0) and (-1, 0)."
  },

  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1996, exam: "JAMB",

    question: "Find the smallest number by which 252 can be multiplied to obtain a perfect square.",

    options: ["2", "3", "5", "7"],

    answer: "7",

    explanation: "252 = 2^2 × 3^2 × 7. To make every prime exponent even, multiply by 7. Therefore the smallest number is 7."
  },

  // CHECK SOURCE: The supplied option 7½% is an OCR/transcription error.
  // The source gives 7 1/3%, which also follows exactly from the simple-interest calculation.

  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1996, exam: "JAMB",

    question: "Udoh deposited ₦150.00 in the bank. At the end of 5 years, the simple interest on the principal was ₦55.00. At what rate per annum was the interest paid?",

    options: ["11%", "7 1/3%", "5%", "3 1/2%"],

    answer: "7 1/3%",

    explanation: "Using simple interest, I = PRT/100. Thus 55 = (150 × R × 5)/100, so R = 55 × 100/(150 × 5) = 7 1/3%."
  },

  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1996, exam: "JAMB",

    question: "A number of pencils were shared out among Bisi, Sola and Tunde in the ratio 2:3:5 respectively. If Bisi got 5 pencils, how many were shared out in total?",

    options: ["15", "25", "30", "50"],

    answer: "25",

    explanation: "The total ratio is 2 + 3 + 5 = 10. Bisi's 2 parts equal 5 pencils, so 1 part is 2.5 pencils and 10 parts give 25 pencils."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1996, exam: "JAMB",

    question: "The ages of Tosan and Isa differ by 6 and the product of their ages is 187. Write their ages in the form (x, y), where x > y.",

    options: ["(12, 9)", "(23, 17)", "(17, 11)", "(18, 12)"],

    answer: "(17, 11)",

    explanation: "Let the ages be x and y. Then x - y = 6 and xy = 187. Hence x = y + 6, so y^2 + 6y - 187 = 0 = (y + 17)(y - 11). Since age is positive, y = 11 and x = 17."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1996, exam: "JAMB",

    question: "In 1984, Ike was 24 years old and his father was 45 years old. In what year was Ike exactly half his father's age?",

    options: ["1982", "1981", "1979", "1978"],

    answer: "1981",

    explanation: "Let t be the number of years before 1984. Then 24 - t = (45 - t)/2. Therefore 48 - 2t = 45 - t, giving t = 3. The year was 1984 - 3 = 1981."
  },

  // CHECK SOURCE: The supplied question has 'Z' and -1, but published JAMB material
  // gives log_2 4 + log_2 7 - log_2 n = 1. That version gives n = 14,
  // matching the supplied options.

  {
    subject: "Mathematics", topic: "Algebra", year: 1996, exam: "JAMB",

    question: "Find n if log_2 4 + log_2 7 - log_2 n = 1.",

    options: ["10", "14", "27", "28"],

    answer: "14",

    explanation: "Using logarithm laws, log_2(4 × 7/n) = 1. Hence 28/n = 2, so n = 14."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1996, exam: "JAMB",

    question: "If x varies directly as y^3 and x = 2 when y = 1, find x when y = 5.",

    options: ["2", "125", "10", "250"],

    answer: "250",

    explanation: "Since x varies directly as y^3, x = ky^3. From x = 2 when y = 1, k = 2. Therefore x = 2 × 5^3 = 250."
  },

  // CHECK SOURCE: The supplied question appears to have 3a where the source/options require 8a.
  // With 8a + 125ax^3, option B is the exact factorization.

  {
    subject: "Mathematics", topic: "Algebra", year: 1996, exam: "JAMB",

    question: "Factorize completely: 8a + 125ax^3.",

    options: [
      "(2a + 5x^2)(4 + 25ax)",
      "a(2 + 5x)(4 - 10x + 25x^2)",
      "(2a + 5x)(4 - 10ax + 25ax^2)",
      "a(2 + 5x)(4 + 10ax + 25ax^2)"
    ],

    answer: "a(2 + 5x)(4 - 10x + 25x^2)",

    explanation: "Factor out a: a(8 + 125x^3). Since 8 = 2^3 and 125x^3 = (5x)^3, use the sum-of-cubes identity: a(2 + 5x)(4 - 10x + 25x^2)."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1996, exam: "JAMB",

    question: "Factorize completely: x^2 + 2a + ax + 2x.",

    options: [
      "(x + 2a)(x + 1)",
      "(x + 2a)(x - 1)",
      "(x^2 - 1)(x + a)",
      "(x + 2)(x + a)"
    ],

    answer: "(x + 2)(x + a)",

    explanation: "Group the terms: x^2 + ax + 2x + 2a = x(x + a) + 2(x + a) = (x + 2)(x + a)."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1996, exam: "JAMB",

    question: "Solve the equation: 3x^2 + 6x - 2 = 0.",

    options: [
      "x = -1 ± √3/3",
      "x = -1 ± √15/3",
      "x = -2 ± 2√3/3",
      "x = -2 ± 2√15/3"
    ],

    answer: "x = -1 ± √15/3",

    explanation: "Using the quadratic formula, x = [-6 ± √(36 + 24)]/6 = [-6 ± √60]/6 = -1 ± √15/3."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1996, exam: "JAMB",

    question: "Simplify the algebraic expression: 1/(5x + 5) + 1/(7x + 7)",

    options: [
      "12 / (35 + 7)",
      "1 / [35(x + 1)]",
      "12 / [35(x + 1)]",
      "12 / (35x + 35)"
    ],

    answer: "12 / [35(x + 1)]",

    explanation: "Factor the denominators: 1/[5(x + 1)] + 1/[7(x + 1)]. The common denominator is 35(x + 1), giving [7 + 5]/[35(x + 1)] = 12/[35(x + 1)]."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1996, exam: "JAMB",

    question: "Factorize completely: (4a + 3)^2 - (3a - 2)^2.",

    options: [
      "(a + 1)(a + 5)",
      "(a - 5)(7a - 1)",
      "(a + 5)(7a + 1)",
      "a(7a + 1)"
    ],

    answer: "(a + 5)(7a + 1)",

    explanation: "Using A^2 - B^2 = (A - B)(A + B), the factors are [(4a + 3) - (3a - 2)] and [(4a + 3) + (3a - 2)], giving (a + 5)(7a + 1)."
  },

  // CHECK SOURCE: The supplied marked answer '3' is mathematically wrong.
  // Solving the two exponent equations gives x = -1 and y = 1, so 3^(x + y) = 1.

  {
    subject: "Mathematics", topic: "Algebra", year: 1996, exam: "JAMB",

    question: "If 5^(x + 2y) = 5 and 4^(x + 3y) = 16, find the value of 3^(x + y).",

    options: ["0", "1", "3", "27"],

    answer: "1",

    explanation: "The first equation gives x + 2y = 1. The second gives x + 3y = 2. Subtracting gives y = 1, so x = -1. Therefore x + y = 0 and 3^0 = 1."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1996, exam: "JAMB",

    question: "Simplify: 1/(x - 2) + 1/(x + 2) + 2x/(x^2 - 4)",

    options: [
      "2x / [(x - 2)(x + 2)(x^2 - 4)]",
      "2x / (x^2 - 4)",
      "x / (x^2 - 4)",
      "4x / (x^2 - 4)"
    ],

    answer: "4x / (x^2 - 4)",

    explanation: "The first two terms combine to 2x/(x^2 - 4). Adding the third term gives 4x/(x^2 - 4)."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 1996, exam: "JAMB",

    question: "Find the values of x which satisfy the equation: 16^x - 5 × 4^x + 4 = 0.",

    options: [
      "1 and 4",
      "-2 and 2",
      "0 and 1",
      "1 and 0"
    ],

    answer: "0 and 1",

    explanation: "Let u = 4^x. Then u^2 - 5u + 4 = 0, so (u - 4)(u - 1) = 0. Hence 4^x = 4 or 1, giving x = 1 or x = 0."
  },

  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1996, exam: "JAMB",

    question: "A regular polygon of n sides has 160° as the size of each interior angle. Find n.",

    options: ["18", "16", "14", "12"],

    answer: "18",

    explanation: "Each exterior angle is 180° - 160° = 20°. Since the exterior angles sum to 360°, n = 360/20 = 18."
  }

];

export default mathematicsJamb1996;