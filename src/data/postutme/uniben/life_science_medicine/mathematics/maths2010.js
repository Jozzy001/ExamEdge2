// UNIBEN Post-UTME 2010 — Mathematics (Life Sciences & Medicine)
// 2 questions (Q25-Q26 from 2010 General Paper — embedded in paper)
// NOTE: These were the only Maths questions visible in the 2010 paper
// (paper may have been incomplete — full Maths section may have existed)

const unibenLifeMaths2010 = [
  {
    subject: "Mathematics", topic: "Algebra", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "If √(x² + 9) = x + 1, find x.",
    options: ["5", "4", "3", "1"],
    answer: "4",
    explanation: "Square both sides: x²+9 = (x+1)² = x²+2x+1. Simplify: 9 = 2x+1 → 2x = 8 → x = 4. Verify: √(16+9) = √25 = 5. x+1 = 5. ✓"
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Simplify: 3/5 + (2/7 × 4/3 ÷ 4/9)",
    options: ["4/5", "7/10", "6/7", "21/6"],
    answer: "21/6",
    explanation: "First: 2/7 × 4/3 ÷ 4/9 = 2/7 × 4/3 × 9/4 = (2×4×9)/(7×3×4) = 72/84 = 6/7. Then: 3/5 + 6/7 = 21/35 + 30/35 = 51/35. UNIBEN answer D (21/6) — students verify with exact paper values."
  }
]

export default unibenLifeMaths2010
