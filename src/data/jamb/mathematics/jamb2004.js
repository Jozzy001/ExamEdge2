// JAMB 2004 Mathematics Past Questions

// Fully flattened — audited standalone objects with topics, answers, and detailed explanations.

// Strictly skipped questions containing complex geometric diagrams, coordinate graphs, or custom data tables.

const mathematicsJamb2004 = [

  {
    subject: "Mathematics", topic: "Number & Numeration", year: 2004, exam: "JAMB",
    question: "A farmer planted 5,000 grains of maize and harvested 5,000 cobs, each bearing 500 grains. What is the ratio of the number of grains sowed to the number harvested?",
    options: ["1:500", "1:5000", "1:25000", "1:250000"],
    answer: "1:500",
    explanation: "Number of grains sowed = 5,000. Total grains harvested = 5,000 × 500 = 2,500,000. Ratio = 5,000 : 2,500,000 = 1 : 500."
  },

  /*
  CHECK SOURCE: 451_7 - 305_7 = 143_7, but 143_7 is not among the supplied options.
  The original answer cannot be safely determined from the supplied option set.
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 2004, exam: "JAMB",
    question: "Find p if 451_7 - p_7 = 305_7.",
    options: ["611_7", "142_7", "116_7", "62_7"],
    answer: "142_7",
    explanation: "p_7 = 451_7 - 305_7 = 143_7. Since 143_7 is not an option, the supplied question or options contain a transcription error."
  }
  */

  {
    subject: "Mathematics", topic: "Number & Numeration", year: 2004, exam: "JAMB",
    question: "Simplify: 1/(√3 + 2) by rationalizing the denominator.",
    options: ["-2 - √3", "2 - √3", "-2 + √3", "2 + √3"],
    answer: "2 - √3",
    explanation: "Multiply numerator and denominator by the conjugate 2 - √3. This gives (2 - √3)/(4 - 3) = 2 - √3."
  },

  /*
  CHECK SOURCE: From the supplied equation,
  log_3 x - 3log_3 3 = 3log_3 0.2.
  Since 3log_3 3 = 3 and 3log_3 0.2 = log_3(0.2^3),
  log_3 x = 3 + log_3(0.008) = log_3(27 × 0.008) = log_3(27/125).
  Therefore x = 27/125, which is not among the supplied options.
  {
    subject: "Mathematics", topic: "Algebra", year: 2004, exam: "JAMB",
    question: "If log_3 x - 3log_3 3 = 3log_3 0.2, find the value of x.",
    options: ["3/8", "3/4", "4/3", "8/3"],
    answer: "8/3",
    explanation: "The supplied equation gives x = 27/125, so none of the supplied options matches."
  }
  */

  {
    subject: "Mathematics", topic: "Algebra", year: 2004, exam: "JAMB",
    question: "In a class of 40 students, each student offers at least one of Physics and Chemistry. If the number of students that offer Physics is three times the number that offer both subjects, and the number that offer Chemistry is twice the number that offer Physics, find the number of students that offer Physics only.",
    options: ["25", "15", "10", "5"],
    answer: "10",
    explanation: "Let the number offering both subjects be x. Then Physics = 3x and Chemistry = 6x. Physics only = 3x - x = 2x, while Chemistry only = 6x - x = 5x. Since everyone offers at least one subject, 2x + x + 5x = 40, so x = 5. Therefore Physics only = 2 × 5 = 10."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 2004, exam: "JAMB",
    question: "Find the remainder when 3x^3 + 5x^2 - 11x + 4 is divided by x + 3.",
    options: ["4", "1", "-1", "-4"],
    answer: "1",
    explanation: "By the Remainder Theorem, substitute x = -3. The remainder is 3(-3)^3 + 5(-3)^2 - 11(-3) + 4 = -81 + 45 + 33 + 4 = 1."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 2004, exam: "JAMB",
    question: "Factorize completely: ac - 2bc - a^2 + 4b^2",
    options: ["(a - 2b)(c + a - 2b)", "(a - 2b)(c - a - 2b)", "(a - 2b)(c + a + 2b)", "(a - 2b)(c - a + 2b)"],
    answer: "(a - 2b)(c - a - 2b)",
    explanation: "Group the terms: c(a - 2b) - (a^2 - 4b^2). Since a^2 - 4b^2 = (a - 2b)(a + 2b), the expression becomes (a - 2b)[c - (a + 2b)] = (a - 2b)(c - a - 2b)."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 2004, exam: "JAMB",
    question: "y is inversely proportional to x and y = 4 when x = 1/2. Find x when y = 10.",
    options: ["1/10", "1/5", "2", "10"],
    answer: "1/5",
    explanation: "Since y is inversely proportional to x, y = k/x. When x = 1/2 and y = 4, k = xy = 2. When y = 10, 10 = 2/x, so x = 1/5."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 2004, exam: "JAMB",
    question: "The length L of a simple pendulum varies directly as the square of its period T. If a pendulum with a period of 4 seconds is 64cm long, find the length of a pendulum whose period is 9 seconds.",
    options: ["36cm", "96cm", "144cm", "324cm"],
    answer: "324cm",
    explanation: "Since L is directly proportional to T^2, L = kT^2. From 64 = k(4^2), k = 4. Therefore when T = 9, L = 4(9^2) = 324cm."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 2004, exam: "JAMB",
    question: "What are the integral values of x which satisfy the inequality: -1 < 3 - 2x ≤ 5?",
    options: ["-2, 1, 0, -1", "-1, 0, 1, 2", "-1, 0, 1", "0, 1, 2"],
    answer: "-1, 0, 1",
    explanation: "From -1 < 3 - 2x, we get x < 2. From 3 - 2x ≤ 5, we get x ≥ -1. Thus -1 ≤ x < 2. The integral values are -1, 0 and 1."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 2004, exam: "JAMB",
    question: "Given that the first and fourth terms of a G.P. are 6 and 162 respectively, find the sum of the first three terms of the progression.",
    options: ["8", "27", "48", "78"],
    answer: "78",
    explanation: "T_1 = a = 6 and T_4 = ar^3 = 162. Thus 6r^3 = 162, so r^3 = 27 and r = 3. The first three terms are 6, 18 and 54. Their sum is 78."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 2004, exam: "JAMB",
    question: "Find the sum to infinity of the series: 1/2, 1/6, 1/18, ...",
    options: ["1", "3/4", "2/3", "1/3"],
    answer: "3/4",
    explanation: "This is a geometric series with first term a = 1/2 and common ratio r = 1/3. Since |r| < 1, S_∞ = a/(1 - r) = (1/2)/(2/3) = 3/4."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 2004, exam: "JAMB",
    question: "If the operation * on the set of integers is defined by p * q = √(pq), find the value of 4 * (8 * 32).",
    options: ["16", "8", "4", "3"],
    answer: "8",
    explanation: "First, 8 * 32 = √(8 × 32) = √256 = 16. Then 4 * 16 = √(4 × 16) = √64 = 8."
  },

  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 2004, exam: "JAMB",
    question: "The sum of the interior angles of a pentagon is 6x + 6y. Find y in terms of x.",
    options: ["y = 60 - x", "y = 90 - x", "y = 120 - x", "y = 120 - 2x"],
    answer: "y = 90 - x",
    explanation: "The sum of the interior angles of a pentagon is (5 - 2) × 180° = 540°. Therefore 6x + 6y = 540, so x + y = 90 and y = 90 - x."
  },

  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 2004, exam: "JAMB",
    question: "The shadow of a vertical pole 5√3 meters high is 5m long. Find the angle of elevation of the sun.",
    options: ["30°", "45°", "60°", "75°"],
    answer: "60°",
    explanation: "tan θ = opposite/adjacent = 5√3/5 = √3. Since tan 60° = √3, θ = 60°."
  },

  {
    subject: "Mathematics", topic: "Algebra", year: 2004, exam: "JAMB",
    question: "Find the derivative of the linear algebraic function (2 + 3x)(1 - x) with respect to x.",
    options: ["6x - 1", "1 - 6x", "6", "3"],
    answer: "1 - 6x",
    explanation: "Expand: y = (2 + 3x)(1 - x) = 2 + x - 3x^2. Therefore dy/dx = 1 - 6x."
  },

  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 2004, exam: "JAMB",
    question: "The mean age of a group of students is 15 years. When the age of a teacher, 45 years old, is added to the ages of the students, the mean of their ages becomes 18 years. Find the initial number of students in the group.",
    options: ["7", "9", "15", "42"],
    answer: "9",
    explanation: "Let the initial number of students be n. Their total age is 15n. After adding the teacher, the total is 15n + 45 and the number of people is n + 1. Thus (15n + 45)/(n + 1) = 18. Therefore 15n + 45 = 18n + 18, so 3n = 27 and n = 9."
  },

  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 2004, exam: "JAMB",
    question: "The weights of 10 pupils in a class are 15kg, 16kg, 17kg, 18kg, 16kg, 17kg, 17kg, 17kg, 18kg, and 16kg. What is the range of this distribution?",
    options: ["3", "4", "5", "6"],
    answer: "3",
    explanation: "Range = maximum value - minimum value = 18 - 15 = 3."
  }

];

export default mathematicsJamb2004;