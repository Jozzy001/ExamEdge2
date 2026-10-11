// EXAMEDGENG — MATHEMATICS STUDY GUIDES (EXTRA)
// Guides for Maths topics that did not have one yet:
//   - Arithmetic
//   - Matrices & Determinants
// Keys match the topic names in the question bank exactly.
//
// HOW TO USE:
// 1. Save this file as src/data/studyGuidesMathsExtra.js
// 2. In src/data/studyGuides.js add at the top:
//      import MATHS_EXTRA_GUIDES from "./studyGuidesMathsExtra"
// 3. At the very end of the STUDY_GUIDES object (next to ...BIOLOGY_EXTRA_GUIDES), add:
//      ...MATHS_EXTRA_GUIDES,
//
// NOTE: studyGuides.js already has an older "Matrices & Determinants" entry
// in the summary/keyPoints format. Because ...MATHS_EXTRA_GUIDES comes at the
// END of the object, this newer version replaces the old one. That is intended.

const MATHS_EXTRA_GUIDES = {

  // ==========================================
  // MATHEMATICS — ARITHMETIC
  // ==========================================
  "Arithmetic": {
    subject: "Mathematics",
    title: "Arithmetic — Fractions, Percentages, Ratio and More",
    icon: "➕",
    estimatedTime: "4 min read",
    sections: [
      { heading: "What Arithmetic Covers", type: "text",
        content: "Arithmetic is the foundation of every Maths paper. Expect questions on BODMAS, fractions, decimals, percentages, ratio and proportion, HCF and LCM, approximation (decimal places and significant figures), standard form, and rates such as speed. These are usually quick marks, so speed and accuracy matter." },

      { heading: "BODMAS — Order of Operations", type: "cards", items: [
        { title: "The order", body: "Brackets, Orders (powers and roots), Division and Multiplication (left to right), Addition and Subtraction (left to right)." },
        { title: "Division and multiplication rank equally", body: "Work from LEFT to RIGHT. Example: 8 + 12 ÷ 4 × 2 − 3 = 8 + 3 × 2 − 3 = 8 + 6 − 3 = 11." },
        { title: "Common mistake", body: "Doing addition before division. 8 + 12 ÷ 4 is NOT 20 ÷ 4. Division comes first: 8 + 3 = 11." }
      ]},

      { heading: "Fractions", type: "cards", items: [
        { title: "Add and subtract", body: "Use a common denominator. 2/3 + 3/4 = 8/12 + 9/12 = 17/12 = 1 5/12." },
        { title: "Multiply", body: "Top × top, bottom × bottom. 2/5 × 3/4 = 6/20 = 3/10." },
        { title: "Divide", body: "Flip the second fraction and multiply. 3/5 ÷ 9/10 = 3/5 × 10/9 = 30/45 = 2/3." },
        { title: "Mixed numbers", body: "Convert to improper fractions first. 2 1/2 = 5/2. Then calculate." },
        { title: "'Of' means multiply", body: "3/4 of 80 = 3/4 × 80 = 60." }
      ]},

      { heading: "Decimals and Recurring Decimals", type: "cards", items: [
        { title: "Fraction to decimal", body: "Divide top by bottom. 3/8 = 0.375." },
        { title: "Recurring decimal to fraction (one repeating digit)", body: "0.333... = 3/9 = 1/3. Put the repeating digit over 9." },
        { title: "Recurring decimal (two repeating digits)", body: "0.4545... = 45/99 = 5/11. Put the repeating block over 99." }
      ]},

      { heading: "Percentages", type: "cards", items: [
        { title: "Percentage of a quantity", body: "x% of N = (x/100) × N. 15% of 240 = 0.15 × 240 = 36." },
        { title: "Percentage increase or decrease", body: "% change = (change ÷ ORIGINAL) × 100. From 40 to 50: 10/40 × 100 = 25% increase." },
        { title: "Increase then decrease", body: "Use multipliers. +20% then −20% = 1.2 × 0.8 = 0.96, which is a 4% DECREASE overall, not zero." },
        { title: "Finding the original", body: "If a price AFTER a 20% increase is ₦600, original = 600 ÷ 1.2 = ₦500." }
      ]},

      { heading: "Ratio and Proportion", type: "cards", items: [
        { title: "Sharing in a ratio", body: "Add the parts, then divide. Share ₦12,000 in the ratio 3:5. Total parts = 8. One part = 1,500. Shares = ₦4,500 and ₦7,500." },
        { title: "Direct proportion", body: "More of one gives more of the other. If 5 pens cost ₦250, then 8 pens cost 8 × 50 = ₦400." },
        { title: "Inverse proportion", body: "More of one gives less of the other. If 6 men finish a job in 10 days, 12 men take 6 × 10 ÷ 12 = 5 days." }
      ]},

      { heading: "HCF and LCM", type: "cards", items: [
        { title: "HCF (Highest Common Factor)", body: "Largest number that divides all the numbers. Use prime factors and take the LOWEST powers of common primes." },
        { title: "LCM (Lowest Common Multiple)", body: "Smallest number all the numbers divide into. Use prime factors and take the HIGHEST powers of all primes." },
        { title: "Example: 12 and 18", body: "12 = 2² × 3. 18 = 2 × 3². HCF = 2 × 3 = 6. LCM = 2² × 3² = 36." },
        { title: "Useful check", body: "For two numbers: HCF × LCM = product of the numbers. 6 × 36 = 216 = 12 × 18." }
      ]},

      { heading: "Approximation and Standard Form", type: "cards", items: [
        { title: "Decimal places (d.p.)", body: "Count from the decimal point. 3.4768 to 2 d.p. = 3.48 (next digit 6 rounds up)." },
        { title: "Significant figures (s.f.)", body: "Count from the FIRST NON-ZERO digit. 0.004052 to 2 s.f. = 0.0041. To 3 s.f. = 0.00405." },
        { title: "Zeros that count", body: "Leading zeros never count. Zeros between or after non-zero digits do count (in 4052 and 4.050)." },
        { title: "Standard form", body: "A × 10ⁿ with 1 ≤ A < 10. 0.00045 = 4.5 × 10⁻⁴. 36,000 = 3.6 × 10⁴." }
      ]},

      { heading: "Rates — Speed, Distance, Time", type: "steps", items: [
        "Speed = Distance ÷ Time. Distance = Speed × Time. Time = Distance ÷ Speed.",
        "Average speed = TOTAL distance ÷ TOTAL time. It is NOT the average of the two speeds.",
        "Example: 60 km at 30 km/h, then 60 km at 60 km/h.",
        "Time taken = 2 h + 1 h = 3 h. Total distance = 120 km.",
        "Average speed = 120 ÷ 3 = 40 km/h (not 45)."
      ]},

      { heading: "Watch Out!", type: "warning", items: [
        "Percentage change is always divided by the ORIGINAL value, never the new one.",
        "Average speed is total distance over total time. Do not just average the speeds.",
        "In BODMAS, multiplication and division are equal in rank. Work left to right.",
        "Leading zeros are not significant figures. 0.00405 has 3 s.f.",
        "Convert units first (minutes to hours, cm to m) before calculating."
      ]},

      { heading: "Quick Tip", type: "tip",
        content: "Turn percentages into multipliers: +15% = × 1.15, −15% = × 0.85. Chain them by multiplying. For 'find the original', DIVIDE by the multiplier. This one habit solves most percentage and profit/loss questions quickly." }
    ]
  },

  // ==========================================
  // MATHEMATICS — MATRICES & DETERMINANTS
  // ==========================================
  "Matrices & Determinants": {
    subject: "Mathematics",
    title: "Matrices & Determinants",
    icon: "🔲",
    estimatedTime: "4 min read",
    sections: [
      { heading: "What is a Matrix?", type: "text",
        content: "A matrix is a rectangular array of numbers in rows and columns. Its ORDER is rows × columns. A matrix with 2 rows and 3 columns has order 2 × 3. Questions on this topic test order, addition, multiplication, determinants, inverses and solving simultaneous equations." },

      { heading: "Order and Basic Operations", type: "cards", items: [
        { title: "Order", body: "Rows × columns. [[1,2,3],[4,5,6]] has order 2 × 3." },
        { title: "Addition and subtraction", body: "ONLY possible if both matrices have the SAME order. Add or subtract matching entries." },
        { title: "Scalar multiplication", body: "Multiply EVERY entry by the number. 3 × [[1,2],[0,4]] = [[3,6],[0,12]]." },
        { title: "Transpose", body: "Swap rows and columns. The transpose of [[1,2,3],[4,5,6]] is [[1,4],[2,5],[3,6]]." },
        { title: "Identity matrix (I)", body: "1s on the main diagonal and 0s elsewhere. For 2 × 2: [[1,0],[0,1]]. A × I = A." }
      ]},

      { heading: "Matrix Multiplication", type: "cards", items: [
        { title: "When is it possible?", body: "Columns of the FIRST must equal rows of the SECOND. (m × n) × (n × p) gives an (m × p) matrix." },
        { title: "Method", body: "Row × column: multiply matching entries and add." },
        { title: "Order matters", body: "In general AB is NOT equal to BA." }
      ]},

      { heading: "Worked Example — Multiplication", type: "steps", items: [
        "Find [[1,2],[3,4]] × [[5,6],[7,8]].",
        "Row 1 × Column 1: (1×5) + (2×7) = 19.",
        "Row 1 × Column 2: (1×6) + (2×8) = 22.",
        "Row 2 × Column 1: (3×5) + (4×7) = 43.",
        "Row 2 × Column 2: (3×6) + (4×8) = 50.",
        "Answer: [[19,22],[43,50]]."
      ]},

      { heading: "Determinant of a 2 × 2 Matrix", type: "cards", items: [
        { title: "Formula", body: "For A = [[a,b],[c,d]], det A = ad − bc. Multiply the main diagonal, subtract the other diagonal." },
        { title: "Example", body: "A = [[3,2],[1,4]]. det A = (3×4) − (2×1) = 12 − 2 = 10." },
        { title: "Singular matrix", body: "If det = 0 the matrix is SINGULAR and has NO inverse." },
        { title: "Finding an unknown", body: "Matrix [[k,2],[3,4]] is singular when 4k − 6 = 0, so k = 1.5." },
        { title: "Another example", body: "[[x,3],[2,x+1]] singular: x(x+1) − 6 = 0, so x² + x − 6 = 0, giving x = 2 or x = −3." }
      ]},

      { heading: "Inverse of a 2 × 2 Matrix", type: "steps", items: [
        "For A = [[a,b],[c,d]], first find det A = ad − bc. If it is 0, there is no inverse.",
        "Swap a and d. Change the signs of b and c. This gives [[d,−b],[−c,a]].",
        "Multiply by 1/det A.",
        "So A⁻¹ = (1/(ad−bc)) × [[d,−b],[−c,a]].",
        "Example: A = [[3,2],[1,4]], det = 10. A⁻¹ = (1/10) × [[4,−2],[−1,3]].",
        "Check: A × A⁻¹ must give the identity matrix."
      ]},

      { heading: "Solving Simultaneous Equations with Matrices", type: "steps", items: [
        "Solve 2x + y = 7 and x + 3y = 11.",
        "Write as [[2,1],[1,3]] × [[x],[y]] = [[7],[11]].",
        "det = (2×3) − (1×1) = 5. Inverse = (1/5) × [[3,−1],[−1,2]].",
        "[[x],[y]] = (1/5) × [[3,−1],[−1,2]] × [[7],[11]] = (1/5) × [[21−11],[−7+22]] = (1/5) × [[10],[15]].",
        "So x = 2 and y = 3.",
        "Check: 2(2) + 3 = 7 ✓ and 2 + 3(3) = 11 ✓."
      ]},

      { heading: "Determinant of a 3 × 3 Matrix", type: "steps", items: [
        "Expand along the first row with signs + − +.",
        "det = a(ei − fh) − b(di − fg) + c(dh − eg) for [[a,b,c],[d,e,f],[g,h,i]].",
        "Example: [[1,2,3],[0,1,4],[5,6,0]].",
        "det = 1(1×0 − 4×6) − 2(0×0 − 4×5) + 3(0×6 − 1×5).",
        "= 1(−24) − 2(−20) + 3(−5) = −24 + 40 − 15 = 1."
      ]},

      { heading: "Watch Out!", type: "warning", items: [
        "You cannot add matrices of different orders.",
        "For multiplication, check columns of the first = rows of the second BEFORE you start.",
        "AB is not generally equal to BA.",
        "In the inverse, swap a and d, but only change the SIGNS of b and c.",
        "Do not forget to divide by the determinant. If det = 0, there is no inverse.",
        "In the 3 × 3 expansion, the middle term has a MINUS sign."
      ]},

      { heading: "Quick Tip", type: "tip",
        content: "2 × 2 inverse: 'swap the diagonal, flip the signs of the other two, divide by ad − bc'. Always compute the determinant first. If it is zero, stop: the matrix is singular and there is no inverse. Check your answer by multiplying A × A⁻¹ to get the identity matrix." }
    ]
  },

}

export default MATHS_EXTRA_GUIDES
