// JAMB 1991 Mathematics Past Questions (audited)
// Source had 50 questions. 5 were skipped (diagrams, or source text too garbled/ambiguous to transcribe reliably).
// One more question (the first, on mixed fractions) is commented out below because as transcribed none of its options is correct.
// Display notes: no ⅓/⅔/⅞ glyphs, no arrows, no U+2212 minus; powers typed as ^(...) for MathText.
// Items marked "// CHECK SOURCE" need the owner to verify against the original paper.

const mathsJamb1991 = [

  /* REMOVED UNTIL CHECKED AGAINST SOURCE: 3⅓ - 1¼ × ⅔ + 1⅔ equals 4 1/6, and no option matches (the options were 2 17/30, 3 9/10, 4 1/10, 4 11/36).
     The marked answer 4 1/10 is what you get if the last term is 1 3/5 instead of 1⅔, so a mixed number was probably misread.
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1991, exam: "JAMB",
    question: "Simplify: 3 1/3 - 1 1/4 × 2/3 + 1 2/3",
    options: ["2 17/30", "3 9/10", "4 1/10", "4 11/36"],
    answer: "4 1/10",
    explanation: ""
  },
  */

  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1991, exam: "JAMB",
    question: "If 2257 is the result of subtracting 4577 from 7056 in base n, find n.",
    options: ["8", "9", "10", "11"],
    answer: "8",
    explanation: "Check base 8. 7056₈ = 3584 + 0 + 40 + 6 = 3630 and 4577₈ = 2048 + 320 + 56 + 7 = 2431. The difference is 1199. And 2257₈ = 1024 + 128 + 40 + 7 = 1199, which matches. So n = 8."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1991, exam: "JAMB",
    question: "Find, correct to 3 decimal places: (1/0.05) ÷ (1/5.005) - (0.05 × 2.05)",
    options: ["99.998", "98.999", "89.899", "9.998"],
    answer: "99.998",
    explanation: "1/0.05 = 20, and 20 ÷ (1/5.005) = 20 × 5.005 = 100.1. Also 0.05 × 2.05 = 0.1025. So the result is 100.1 - 0.1025 = 99.9975, which is 99.998 to 3 d.p."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1991, exam: "JAMB",
    question: "Express 62/3 as a decimal correct to 3 significant figures.",
    options: ["20.6", "20.667", "20.67", "20.7"],
    answer: "20.7",
    explanation: "62/3 = 20.6667..., which is 20.7 to 3 s.f."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1991, exam: "JAMB",
    question: "Factory P produces 20,000 bags of cement per day while factory Q produces 15,000 bags per day. If P reduces production by 5% and Q increases production by 5%, determine the effective loss in the number of bags produced per day by the two factories.",
    options: ["250", "750", "1000", "1250"],
    answer: "250",
    explanation: "P's new output is 19,000 (a loss of 1,000). Q's new output is 15,750 (a gain of 750). The net change is -1,000 + 750 = -250, a net loss of 250 bags."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1991, exam: "JAMB",
    question: "Musa borrows ₦10.00 at 2% per month interest and repays ₦8.00 after 4 months. How much does he still owe?",
    options: ["₦10.80", "₦10.67", "₦2.80", "₦2.67"],
    answer: "₦2.80",
    explanation: "Interest for 4 months = 10 × 0.02 × 4 = 0.80, so he owes 10.80 in total. After repaying 8.00, he still owes 10.80 - 8.00 = ₦2.80."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1991, exam: "JAMB",
    question: "If 3 gallons of spirit containing 20% water are added to 5 gallons of another spirit containing 15% water, what percentage of the mixture is water?",
    options: ["24/25%", "16 7/8%", "18 1/8%", "18 7/8%"],
    answer: "16 7/8%",
    explanation: "Water = 3 × 0.2 + 5 × 0.15 = 0.6 + 0.75 = 1.35 gallons, out of 8 gallons in all. The percentage = 1.35/8 × 100 = 16.875% = 16 7/8%."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1991, exam: "JAMB",
    question: "Simplify: 2log(2/5) - log(72/125) + log9",
    options: ["1 - 4log3", "-1 + 2log3", "-1 + 5log2", "1 - 2log2"],
    answer: "1 - 2log2",
    explanation: "Combine: log[(4/25) × (125/72) × 9] = log(5/2) = log 5 - log 2. In base 10, log 5 = 1 - log 2, so the result is 1 - 2 log 2."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1991, exam: "JAMB",
    question: "Rationalize: (2√3 + 3√2) / (3√2 - 2√3)",
    options: ["5 - 2√6", "5 + 2√6", "5√3", "5"],
    answer: "5 + 2√6",
    explanation: "Multiply top and bottom by (3√2 + 2√3). The denominator becomes 18 - 12 = 6. The numerator becomes (2√3 + 3√2)² = 12 + 12√6 + 18 = 30 + 12√6. So the result is (30 + 12√6)/6 = 5 + 2√6."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1991, exam: "JAMB",
    question: "Simplify: 1/(3+√5) - 1/(3-√5)",
    options: ["-√5/2", "√5/2", "-√5/4", "0"],
    answer: "-√5/2",
    explanation: "Combine: [(3 - √5) - (3 + √5)]/[(3 + √5)(3 - √5)] = -2√5/(9 - 5) = -2√5/4 = -√5/2."
  },
  {
    // CHECK SOURCE: the x² coefficient in every option was printed -(3-a), but the product has -(3+a). I changed option 3 to -(3+a) so one option is correct.
    subject: "Mathematics", topic: "Algebra", year: 1991, exam: "JAMB",
    question: "Multiply (x² - 3x + 1) by (x - a)",
    options: [
      "x³-(3-a)x²+(1+3a)x-1",
      "x³-(3-a)x²+3ax-a",
      "x³-(3+a)x²+(1+3a)x-a",
      "x³+(3-a)x²+(1+3a)x-a"
    ],
    answer: "x³-(3+a)x²+(1+3a)x-a",
    explanation: "Expand: x³ - ax² - 3x² + 3ax + x - a = x³ - (3 + a)x² + (1 + 3a)x - a."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1991, exam: "JAMB",
    question: "Evaluate (xy² - x²y)/(x² - xy) when x = -2 and y = 3",
    options: ["-3", "-3/5", "3/5", "3"],
    answer: "-3",
    explanation: "The numerator is xy(y - x) and the denominator is x(x - y). So the expression simplifies to -y. At y = 3 it equals -3. Direct check: numerator = (-2)(9) - (4)(3) = -30, denominator = 4 + 6 = 10, and -30/10 = -3."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1991, exam: "JAMB",
    question: "A car travels from Calabar to Enugu, a distance of p km, with an average speed of u km per hour and continues to Benin, a distance of q km, with an average speed of w km per hour. Find its average speed from Calabar to Benin.",
    options: ["(p+q)/(up+wq)", "u+w", "uw(p+q)/(wp+uq)", "(wp+uq)/(u+w)"],
    answer: "uw(p+q)/(wp+uq)",
    explanation: "Total distance = p + q. Total time = p/u + q/w = (pw + qu)/(uw). Average speed = (p + q) × uw/(pw + qu)."
  },
  {
    // CHECK SOURCE: option 2 was printed "16ur = 3w(u+v)"; read as 16uv (a wrong-answer option either way).
    subject: "Mathematics", topic: "Algebra", year: 1991, exam: "JAMB",
    question: "If w varies inversely as uv/(u+v) and is equal to 8 when u = 2, v = 6, find a relationship between u, v, w.",
    options: ["uvw = 16(u+v)", "16uv = 3w(u+v)", "uvw = 12(u+v)", "12uvw = u+v"],
    answer: "uvw = 12(u+v)",
    explanation: "w = k(u + v)/(uv). When u = 2 and v = 6, 8 = k(8)/12, so k = 12. So w = 12(u + v)/(uv), which is uvw = 12(u + v)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1991, exam: "JAMB",
    question: "If g(x) = x² + 3x, find g(x+1) - g(x)",
    options: ["(x+2)", "2(x+2)", "2(x+1)", "(x+4)"],
    answer: "2(x+2)",
    explanation: "g(x + 1) = (x + 1)² + 3(x + 1) = x² + 5x + 4. So g(x + 1) - g(x) = (x² + 5x + 4) - (x² + 3x) = 2x + 4 = 2(x + 2)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1991, exam: "JAMB",
    question: "Factorize: 1 - (a-b)²",
    options: ["(1-a-b)(1-a-b)", "(1-a+b)(1+a-b)", "(1-a+b)(1-a+b)", "(1-a-b)(1+a-b)"],
    answer: "(1-a+b)(1+a-b)",
    explanation: "Difference of two squares: 1 - (a - b)² = [1 - (a - b)][1 + (a - b)] = (1 - a + b)(1 + a - b)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1991, exam: "JAMB",
    question: "Which of the following is a factor of rs + tr - pt - ps?",
    options: ["(p-s)", "(s-p)", "(r-p)", "(r+p)"],
    answer: "(r-p)",
    explanation: "Regroup: r(s + t) - p(t + s) = (s + t)(r - p). So (r - p) is a factor."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1991, exam: "JAMB",
    question: "Find the two values of y which satisfy the simultaneous equations: 3x + y = 8, x² + xy = 6",
    options: ["-1 and 5", "-5 and 1", "1 and 5", "1 and 1"],
    answer: "-1 and 5",
    explanation: "y = 8 - 3x. Substitute: x² + x(8 - 3x) = 6, so -2x² + 8x - 6 = 0, so x² - 4x + 3 = 0, so x = 1 or x = 3. Then y = 5 or y = -1."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1991, exam: "JAMB",
    question: "Find the range of values of x which satisfy the inequality (x/2 + x/3 + x/4) < 1",
    options: ["x < 12/13", "x < 13", "x < 9", "x < 13/12"],
    answer: "x < 12/13",
    explanation: "Over the denominator 12: (6x + 4x + 3x)/12 < 1, so 13x/12 < 1, so x < 12/13."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1991, exam: "JAMB",
    question: "Find the positive number n, such that thrice its square is equal to twelve times the number.",
    options: ["1", "2", "3", "4"],
    answer: "4",
    explanation: "3n² = 12n, so 3n(n - 4) = 0. So n = 4 (n = 0 is not positive)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1991, exam: "JAMB",
    question: "Solve the equation (x-2)(x-3) = 12",
    options: ["2,3", "3,6", "-1,6", "1,6"],
    answer: "-1,6",
    explanation: "x² - 5x + 6 = 12, so x² - 5x - 6 = 0, so (x - 6)(x + 1) = 0. So x = 6 or x = -1."
  },
  {
    // CHECK SOURCE: the square roots in the options were printed as "2√x(1+x)"; I read them as 2√(x(1+x)), which is what the working gives.
    subject: "Mathematics", topic: "Algebra", year: 1991, exam: "JAMB",
    question: "Simplify: (√(1+x) + √x) / (√(1+x) - √x)",
    options: ["1-2x-2√(x(1+x))", "1+2x+2√(x(1+x))", "√(x(1+x))", "1+2x-2√(x(1+x))"],
    answer: "1+2x+2√(x(1+x))",
    explanation: "Multiply top and bottom by (√(1+x) + √x). The denominator becomes (1 + x) - x = 1. The numerator becomes (√(1+x) + √x)² = (1 + x) + 2√(x(1+x)) + x = 1 + 2x + 2√(x(1+x))."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1991, exam: "JAMB",
    question: "Simplify: x²(x²-1)^(-1/2) - (x²-1)^(1/2)",
    options: ["(x²-1)^(1/2)", "(x²-1)", "(x²-1)^(-1)", "(x²-1)^(-1/2)"],
    answer: "(x²-1)^(-1/2)",
    explanation: "Factor out (x² - 1)^(-1/2): [x² - (x² - 1)] × (x² - 1)^(-1/2) = 1 × (x² - 1)^(-1/2)."
  },
  {
    // CHECK SOURCE: options 2 and 4 were both "4". I changed option 4 to "-4" (a lost minus sign is the likely cause).
    subject: "Mathematics", topic: "Coordinate Geometry", year: 1991, exam: "JAMB",
    question: "Find the gradient of the line passing through the points (-2,0) and (0,-4)",
    options: ["2", "4", "-2", "-4"],
    answer: "-2",
    explanation: "Gradient = (-4 - 0)/(0 - (-2)) = -4/2 = -2."
  },
  {
    // CHECK SOURCE: options 3 and 4 were both "4". I changed option 4 to "-4" (the minimum value of y, a likely original distractor).
    subject: "Mathematics", topic: "Algebra", year: 1991, exam: "JAMB",
    question: "At what value of x is the function y = x² - 2x - 3 minimum?",
    options: ["-1", "1", "4", "-4"],
    answer: "1",
    explanation: "The minimum of ax² + bx + c is at x = -b/(2a) = 2/2 = 1."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1991, exam: "JAMB",
    question: "What is the nth term of the progression 27, 9, 3, ...?",
    options: ["27(1/3)^(n-1)", "3^(n+2)", "27+18(n-1)", "27+6(n-1)"],
    answer: "27(1/3)^(n-1)",
    explanation: "This is a GP with a = 27 and r = 1/3. The nth term is 27(1/3)^(n-1)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1991, exam: "JAMB",
    question: "Find the sum of the 20 terms in an arithmetic progression whose first term is 7 and last term is 117",
    options: ["2480", "1240", "620", "124"],
    answer: "1240",
    explanation: "Sum = (n/2)(first + last) = (20/2)(7 + 117) = 10 × 124 = 1240."
  },
  {
    // CHECK SOURCE: this depends on a figure. I assumed a Z-shaped zigzag, where ST points the opposite way to PQ. That reading gives 130, which is an option.
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1991, exam: "JAMB",
    question: "A path zigzags from P to Q to R to S to T in a Z shape, where PQ is parallel to ST. At Q the interior angle PQR is 110°, and at S the interior angle RST is 120°. Find the interior angle QRS at R.",
    options: ["130°", "110°", "100°", "90°"],
    answer: "130°",
    explanation: "Draw a line through R parallel to PQ and ST. It splits the angle at R into two parts: 180° - 110° = 70° (with the angle at Q) and 180° - 120° = 60° (with the angle at S). So the angle at R is 70° + 60° = 130°."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1991, exam: "JAMB",
    question: "The angles of a quadrilateral are 5x-30, 4x+60, 60-x and 3x+61. Find the smallest of these angles.",
    options: ["5x-30", "4x+60", "60-x", "3x+61"],
    answer: "60-x",
    explanation: "The angles sum to 360°: 11x + 151 = 360, so x = 19. The angles are 65°, 136°, 41° and 118°. The smallest, 41°, is 60 - x."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1991, exam: "JAMB",
    question: "The area of a square is 144sq.cm. Find the length of its diagonal.",
    options: ["11√3cm", "12cm", "12√2cm", "13cm"],
    answer: "12√2cm",
    explanation: "The side = √144 = 12cm, so the diagonal = 12√2cm."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1991, exam: "JAMB",
    question: "One angle of a rhombus is 60°. The shorter of the two diagonals is 8cm long. Find the length of the longer one.",
    options: ["8√3", "16/√3", "5√3", "10/√3"],
    answer: "8√3",
    explanation: "For a rhombus with side s and an angle of 60°, the diagonals are s and s√3. The shorter diagonal s is 8cm, so the longer one is 8√3cm."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1991, exam: "JAMB",
    question: "If the exterior angles of a pentagon are x°, (x+5)°, (x+10)°, (x+15)° and (x+20)°, find x.",
    options: ["118°", "72°", "62°", "36°"],
    answer: "62°",
    explanation: "The exterior angles sum to 360°: 5x + 50 = 360, so x = 62."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1991, exam: "JAMB",
    question: "PMN and PQR are two secants of a circle, and PT is a tangent. If PM = 5cm, PN = 12cm and PQ = 4.8cm, calculate the respective lengths of PR and PT (in centimeters).",
    options: ["7.3,5.9", "7.7,12.5", "12.5,7.7", "5.9,7.336"],
    answer: "12.5,7.7",
    explanation: "PT² = PM × PN = 5 × 12 = 60, so PT = √60 ≈ 7.7cm. Also PQ × PR = PT² = 60, so PR = 60/4.8 = 12.5cm."
  },
  {
    subject: "Mathematics", topic: "Trigonometry", year: 1991, exam: "JAMB",
    question: "A flagstaff stands on the top of a vertical tower. A man standing 60m away from the tower observes that the angles of elevation of the top and bottom of the flagstaff are 64° and 62° respectively. Find the length of the flagstaff.",
    options: ["60(tan62°-tan64°)", "60(cot64°-cot62°)", "60(cot62°-cot64°)", "60(tan64°-tan62°)"],
    answer: "60(tan64°-tan62°)",
    explanation: "The tower height = 60 tan 62°. The total height (tower and flagstaff) = 60 tan 64°. So the flagstaff = 60(tan 64° - tan 62°)."
  },
  {
    // Reworded: the original referred to a figure.
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1991, exam: "JAMB",
    question: "Q, R and T lie on a straight line. S is a point such that PQ = PR = PS, and angle SRT = 68°. Find angle QPS.",
    options: ["136°", "124°", "112°", "68°"],
    answer: "136°",
    explanation: "Since PQ = PR = PS, P is the centre of a circle through Q, R and S. Angle SRQ = 180° - 68° = 112°. The angle at the centre QPS is 2 × (180° - 112°) = 136°."
  },
  {
    subject: "Mathematics", topic: "Trigonometry", year: 1991, exam: "JAMB",
    question: "Simplify: cos²x(sec²x + sec²x tan²x)",
    options: ["tan x", "tan x sec x", "sec²x", "cosec²x"],
    answer: "sec²x",
    explanation: "cos²x × sec²x = 1. So cos²x × sec²x(1 + tan²x) = 1 × sec²x = sec²x."
  },
  {
    subject: "Mathematics", topic: "Trigonometry", year: 1991, exam: "JAMB",
    question: "If cos x = √(a/b), find cosec x.",
    options: ["√b/√(b-a)", "√(b/a)", "b/√(b-a)", "√(b-a)/a"],
    answer: "√b/√(b-a)",
    explanation: "cos²x = a/b, so sin²x = (b - a)/b and sin x = √(b-a)/√b. So cosec x = 1/sin x = √b/√(b-a)."
  },
  {
    subject: "Mathematics", topic: "Trigonometry", year: 1991, exam: "JAMB",
    question: "From a point Z, 60m north of X, a man walks 60√3m eastwards to another point Y. Find the bearing of Y from X.",
    options: ["030°", "045°", "060°", "090°"],
    answer: "060°",
    explanation: "Y is 60√3m east and 60m north of X. So tan(bearing) = 60√3/60 = √3, and the bearing is 060°."
  },
  {
    subject: "Mathematics", topic: "Trigonometry", year: 1991, exam: "JAMB",
    question: "A surveyor walks 500m up a hill which slopes at an angle of 30°. Calculate the vertical height through which he rises.",
    options: ["250m", "500√3/3m", "250√2m", "250√3m"],
    answer: "250m",
    explanation: "Height = 500 × sin 30° = 500 × 0.5 = 250m."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1991, exam: "JAMB",
    question: "Find the total area of the surface of a solid cylinder whose base radius is 4cm and height is 5cm.",
    options: ["56πcm²", "72πcm²", "96πcm²", "192πcm²"],
    answer: "72πcm²",
    explanation: "Total surface area = 2πr(r + h) = 2π(4)(4 + 5) = 72π cm²."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1991, exam: "JAMB",
    question: "A solid figure consists of a cone (height x) sitting on top of a cylinder (height y), both with the same base radius a. Find the volume of the figure.",
    options: ["πa²/3", "πa²y", "πa²/3(y+x)", "(1/3)πa²x + πa²y"],
    answer: "(1/3)πa²x + πa²y",
    explanation: "Volume of the cone = (1/3)πa²x. Volume of the cylinder = πa²y. The total is (1/3)πa²x + πa²y."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1991, exam: "JAMB",
    question: "3% of a family's income is spent on electricity, 9% on food, 20% on transport, 11% on education and 7% on extended family. The angles subtended at the centre of a pie chart under education and food are respectively",
    options: ["76.8° and 25.2°", "10.8° and 224.6°", "112.4° and 72.0°", "39.6° and 32.4°"],
    answer: "39.6° and 32.4°",
    explanation: "Education: (11/100) × 360° = 39.6°. Food: (9/100) × 360° = 32.4°."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1991, exam: "JAMB",
    question: "Fifty boxes each of 50 balls were inspected for the number which were defective. Number of defective balls per box: 4, 5, 6, 7, 8, 9. Number of boxes: 2, 7, 17, 10, 8, 6. The mean and the median of the distribution are respectively",
    options: ["6.7,6", "6.7,6.5", "6,6.7", "6.5,6.7"],
    answer: "6.7,6",
    explanation: "Mean = (4×2 + 5×7 + 6×17 + 7×10 + 8×8 + 9×6)/50 = 333/50 = 6.66, which is about 6.7. For the median, the 25th and 26th values are both 6 (the running totals are 2, 9, 26), so the median is 6."
  },
  {
    // Reworded so the question stands on its own (the original said "the previous question").
    subject: "Mathematics", topic: "Statistics & Probability", year: 1991, exam: "JAMB",
    question: "Fifty boxes each of 50 balls were inspected for the number which were defective. Number of defective balls per box: 4, 5, 6, 7, 8, 9. Number of boxes: 2, 7, 17, 10, 8, 6. Find the percentage of boxes containing at least 5 defective balls each.",
    options: ["96", "94", "92", "90"],
    answer: "96",
    explanation: "Boxes with at least 5 defective balls = 7 + 17 + 10 + 8 + 6 = 48. The percentage = 48/50 × 100 = 96%."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1991, exam: "JAMB",
    question: "A crate of soft drinks contains 10 bottles of Coca-cola, 8 of Fanta and 6 of Sprite. If one bottle is selected at random, what is the probability that it is NOT a Coca-cola bottle?",
    options: ["5/12", "1/3", "¾", "7/12"],
    answer: "7/12",
    explanation: "There are 24 bottles in all. P(not Coca-cola) = 1 - 10/24 = 14/24 = 7/12."
  }
]

export default mathsJamb1991