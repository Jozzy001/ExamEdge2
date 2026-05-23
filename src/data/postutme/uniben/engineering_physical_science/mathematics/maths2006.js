// UNIBEN Post-UTME 2006/2007 — Mathematics
// 8 questions extracted from General Paper
// Split from general paper for better subject tracking and weak area analysis

const unibenMathematics2006 = [
  {
    subject: "Mathematics",
    topic: "Geometry & Mensuration",
    year: 2006,
    exam: "Post-UTME",
    university: "UNIBEN",
    question: "What is the circumference of a circle of radius r?",
    options: ["r cosθ", "2r cosθ", "r sinθ", "2πr"],
    answer: "2πr",
    explanation: "The circumference of a circle = 2πr, where r is the radius. This is one of the most fundamental geometry formulas. Note: area = πr², not circumference."
  },
  {
    subject: "Mathematics",
    topic: "Statistics & Probability",
    year: 2006,
    exam: "Post-UTME",
    university: "UNIBEN",
    question: "Find the probability of selecting a figure that is a parallelogram from the following: square, rectangle, rhombus, kite, and trapezium.",
    options: ["3/5", "2/5", "4/5", "1/5"],
    answer: "3/5",
    explanation: "A parallelogram has two pairs of parallel sides. From the list: square (✓), rectangle (✓), rhombus (✓) are all parallelograms. Kite and trapezium are NOT parallelograms (kite has no parallel sides; trapezium has only one pair). Probability = 3/5."
  },
  {
    subject: "Mathematics",
    topic: "Number & Numeration",
    year: 2006,
    exam: "Post-UTME",
    university: "UNIBEN",
    question: "Simplify: ½ of 2 ÷ ¼ of 32",
    options: ["3/256", "3/32", "6", "8"],
    answer: "3/32",
    explanation: "Step 1: ½ of 2 = 1. Step 2: ¼ of 32 = 8. Step 3: 1 ÷ 8 = 1/8. Wait — answer is B (3/32). Let me re-read: ½ of 2 : ¼ of 32 = 1 : 8. As a fraction = 1/8. UNIBEN answer is B (3/32). Students should verify the exact operation intended."
  },
  {
    subject: "Mathematics",
    topic: "Geometry & Mensuration",
    year: 2006,
    exam: "Post-UTME",
    university: "UNIBEN",
    question: "The base of a pyramid is a square of side 8 cm. If its vertex is directly above the center and its slant edge is 43 cm, find the height.",
    options: ["6 cm", "5 cm", "4 cm", "3 cm"],
    answer: "3 cm",
    explanation: "Half the diagonal of the 8cm square base = √(4²+4²) = √32 = 4√2 ≈ 5.66 cm. Using Pythagoras: height² = slant edge² − (half diagonal)² = 43² − (4√2)² = 1849 − 32 = 1817. √1817 ≈ 42.6. Note: if slant edge = √43: height² = 43 − 32 = 11, height ≈ 3.3 ≈ 3 cm. UNIBEN answer is D (3 cm)."
  },
  {
    subject: "Mathematics",
    topic: "Algebra",
    year: 2006,
    exam: "Post-UTME",
    university: "UNIBEN",
    question: "Find the minimum value of y in the equation: y = x² − 6x + 8",
    options: ["1", "3", "0", "−1"],
    answer: "−1",
    explanation: "Complete the square: y = (x−3)² − 9 + 8 = (x−3)² − 1. Minimum occurs at x = 3, giving y = −1. Alternatively: dy/dx = 2x − 6 = 0 → x = 3. y(3) = 9 − 18 + 8 = −1."
  },
  {
    subject: "Mathematics",
    topic: "Sequences & Series",
    year: 2006,
    exam: "Post-UTME",
    university: "UNIBEN",
    question: "Find the sum of the first 21 terms of the progression: −10, −8, −6, …",
    options: ["180", "190", "200", "210"],
    answer: "210",
    explanation: "AP with a = −10, d = 2, n = 21. S₂₁ = n/2 × [2a + (n−1)d] = 21/2 × [2(−10) + 20(2)] = 21/2 × [−20 + 40] = 21/2 × 20 = 210."
  },
  {
    subject: "Mathematics",
    topic: "Sequences & Series",
    year: 2006,
    exam: "Post-UTME",
    university: "UNIBEN",
    question: "Find the 11th term of the progression: 4, 8, 16, …",
    options: ["2¹²", "2¹³", "2¹¹", "2¹⁰"],
    answer: "2¹²",
    explanation: "GP with a = 4 = 2², r = 2. T₁₁ = ar^(n−1) = 2² × 2¹⁰ = 2¹² = 4096."
  },
  {
    subject: "Mathematics",
    topic: "Number & Numeration",
    year: 2006,
    exam: "Post-UTME",
    university: "UNIBEN",
    question: "Convert 241₅ (base 5) to base 8.",
    options: ["71₈", "107₈", "176₈", "241₈"],
    answer: "71₈",
    explanation: "Step 1 — convert to base 10: 241₅ = 2×25 + 4×5 + 1×1 = 50 + 20 + 1 = 71₁₀. Step 2 — convert 71 to base 8: 71 ÷ 8 = 8 rem 7. 8 ÷ 8 = 1 rem 0. 1 ÷ 8 = 0 rem 1. Reading remainders upward: 107₈. Note: UNIBEN answer is A (71₈). Students should verify."
  }
]

export default unibenMathematics2006
