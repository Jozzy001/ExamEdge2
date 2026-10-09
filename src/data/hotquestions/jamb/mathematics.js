// Path: src/data/hotquestions/jamb/mathematics.js
// yearsAppeared = years in which this question or the same concept appeared in the
// 1983-2004 past questions PDF (1996 is not in that PDF).

export const mathematicsHotQuestions = [
  // CATEGORY: ARITHMETIC & PERCENTAGE ERROR
  {
    id: 1,
    category: "Arithmetic & Mensuration",
    question: "If a rod of length 250 cm is measured as 255 cm by error, what is the percentage error in measurement?",
    options: {
      A: "55%",
      B: "4%",
      C: "5%",
      D: "2%"
    },
    correctAnswer: "D",
    yearsAppeared: [1983, 1988, 1992, 1995],
    explanation: "Percentage error = (error / true value) × 100%. The error is 255 cm - 250 cm = 5 cm, so the percentage error = (5 / 250) × 100% = 2%."
  },

  // CATEGORY: CUBIC POLYNOMIAL ROOTS
  {
    id: 2,
    category: "Algebra",
    question: "If x = 1 is a root of the equation x³ - 2x² - 5x + 6 = 0, find the other roots.",
    options: {
      A: "-3 and 2",
      B: "-2 and 2",
      C: "-3 and 1",
      D: "3 and -2"
    },
    correctAnswer: "D",
    yearsAppeared: [1983, 1990],
    explanation: "Since x = 1 is a root, (x - 1) is a factor. Dividing x³ - 2x² - 5x + 6 by (x - 1) gives x² - x - 6. Factorizing gives (x - 3)(x + 2) = 0, so the other roots are x = 3 and x = -2."
  },

  // CATEGORY: VARIATION AND JOINT PROPORTIONALITY
  {
    id: 3,
    category: "Algebra",
    question: "If x is jointly proportional to the cube of y and the fourth power of z, in what ratio is x increased or decreased when y is halved and z is doubled?",
    options: {
      A: "4:1 increase",
      B: "2:1 increase",
      C: "1:4 decrease",
      D: "1:1 no change"
    },
    correctAnswer: "B",
    yearsAppeared: [1983, 1984, 1986, 1987, 1988, 1989, 1990, 1991, 2002, 2003, 2004],
    explanation: "The relationship is x = k × y³ × z⁴. When y is halved and z is doubled, the new value is k × (y/2)³ × (2z)⁴ = k × (y³/8) × 16z⁴ = 2 × (k × y³ × z⁴) = 2x. This is a 2:1 increase."
  },

  // CATEGORY: POLYGON GEOMETRY
  {
    id: 4,
    category: "Geometry",
    question: "Each of the interior angles of a regular polygon is 140°. How many sides has the polygon?",
    options: {
      A: "9",
      B: "8",
      C: "7",
      D: "5"
    },
    correctAnswer: "A",
    yearsAppeared: [1983, 1986, 1988, 1989, 1990, 1993, 2000, 2002],
    explanation: "Each interior angle of a regular n-sided polygon is ((n - 2) × 180) / n. Setting this equal to 140 gives 180n - 360 = 140n, so 40n = 360 and n = 9 sides."
  },

  // CATEGORY: PIE CHART ANGLE AND ALGEBRA COMBINATION
  {
    id: 5,
    category: "Statistics",
    question: "In a class of 60 pupils, the number of pupils offering Biology, History, French, Geography and Additional Mathematics is shown on a pie chart. If the sectors are (x+12)°, (2x+12)°, (3x-18)°, x° and (2x-24)°, how many pupils offer Additional Mathematics?",
    options: {
      A: "15",
      B: "12",
      C: "10",
      D: "6"
    },
    correctAnswer: "C",
    yearsAppeared: [1983, 1984, 1985, 1988, 1989, 1993, 1995, 1997, 1999, 2000, 2003, 2004],
    explanation: "Angles at the centre of a pie chart add up to 360°. So (x + 12) + (2x + 12) + (3x - 18) + x + (2x - 24) = 360, which simplifies to 9x - 18 = 360, so x = 42. The Additional Mathematics angle is 2(42) - 24 = 60°. The number of pupils is (60 / 360) × 60 = 10."
  },

  // CATEGORY: INDEX EQUATIONS
  {
    id: 6,
    category: "Algebra",
    question: "If 5^(x + 2y) = 5 and 4^(x + 3y) = 16, find the value of 3^(x + y).",
    options: {
      A: "0",
      B: "1",
      C: "3",
      D: "27"
    },
    correctAnswer: "B",
    yearsAppeared: [1986, 1997, 2003],
    explanation: "Equate the powers on each side: (1) x + 2y = 1 and (2) x + 3y = 2. Subtracting (1) from (2) gives y = 1. Substituting into (1) gives x = -1. So 3^(x + y) = 3^(-1 + 1) = 3⁰ = 1."
  },

  // CATEGORY: INDEX EQUATIONS
  {
    id: 7,
    category: "Algebra",
    question: "If 9^(2x - 1) / 27^(x + 1) = 1, find the value of x.",
    options: {
      A: "2",
      B: "8",
      C: "5",
      D: "3"
    },
    correctAnswer: "C",
    yearsAppeared: [1986, 1997, 2003],
    explanation: "Write both sides with base 3: 9^(2x - 1) = 3^(4x - 2) and 27^(x + 1) = 3^(3x + 3). So 3^(4x - 2) / 3^(3x + 3) = 3⁰, which means (4x - 2) - (3x + 3) = 0, so x - 5 = 0 and x = 5."
  }
];