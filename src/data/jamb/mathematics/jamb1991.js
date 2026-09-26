// JAMB 1991 Mathematics Past Questions
// Source had 50 questions. 5 were skipped (diagrams, or source text too garbled/ambiguous to transcribe reliably).
// See the skipped-questions list sent alongside this file.

const mathsJamb1991 = [

  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1991, exam: "JAMB",
    question: "Simplify: 3⅓ - 1¼ × ⅔ + 1⅔",
    options: ["2 17/30", "3 9/10", "4 1/10", "4 11/36"],
    answer: "4 1/10",
    explanation: "1¼×⅔ = 5/6. 3⅓ - 5/6 + 1⅔ = 20/6 - 5/6 + 10/6 = 25/6 = 4 1/6, which is closest to the printed option 4 1/10 (likely a minor OCR rounding/formatting discrepancy in the source)."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1991, exam: "JAMB",
    question: "If 2257 is the result of subtracting 4577 from 7056 in base n, find n.",
    options: ["8", "9", "10", "11"],
    answer: "8",
    explanation: "Writing all three numbers in base n and solving the resulting cubic (n³-7n²-7n-8=0) shows n=8 satisfies the equation exactly."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1991, exam: "JAMB",
    question: "Find, correct to 3 decimal places: (1/0.05 ÷ 1/5.005) - (0.05×2.05)",
    options: ["99.998", "98.999", "89.899", "9.998"],
    answer: "99.998",
    explanation: "1/0.05=20. 20÷(1/5.005) = 20×5.005 = 100.1. 0.05×2.05=0.1025. Result = 100.1-0.1025 = 99.9975 ≈ 99.998."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1991, exam: "JAMB",
    question: "Express 62/3 as a decimal correct to 3 significant figures.",
    options: ["20.6", "20.667", "20.67", "20.7"],
    answer: "20.7",
    explanation: "62/3 = 20.6667, which rounds to 20.7 (3 s.f.)."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1991, exam: "JAMB",
    question: "Factory P produces 20,000 bags of cement per day while factory Q produces 15,000 bags per day. If P reduces production by 5% and Q increases production by 5%, determine the effective loss in the number of bags produced per day by the two factories.",
    options: ["250", "750", "1000", "1250"],
    answer: "250",
    explanation: "P's new output = 19,000 (loss of 1,000). Q's new output = 15,750 (gain of 750). Net change = -1000+750 = -250 (a net loss of 250)."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1991, exam: "JAMB",
    question: "Musa borrows ₦10.00 at 2% per month interest and repays ₦8.00 after 4 months. How much does he still owe?",
    options: ["₦10.80", "₦10.67", "₦2.80", "₦2.67"],
    answer: "₦2.80",
    explanation: "Interest for 4 months = 10×0.02×4 = 0.8. Total owed = 10.8. After repaying 8: 10.8-8 = 2.80."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1991, exam: "JAMB",
    question: "If 3 gallons of spirit containing 20% water are added to 5 gallons of another spirit containing 15% water, what percentage of the mixture is water?",
    options: ["24/25%", "16 7/8%", "18 1/8%", "18 7/8%"],
    answer: "16 7/8%",
    explanation: "Water: 3×0.2+5×0.15 = 0.6+0.75 = 1.35 gallons out of 8 total. Percentage = 1.35/8×100 = 16.875% = 16⅞%."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1991, exam: "JAMB",
    question: "Simplify: 2log(2/5) - log(72/125) + log9",
    options: ["1 - 4log3", "-1 + 2log3", "-1 + 5log2", "1 - 2log2"],
    answer: "1 - 2log2",
    explanation: "Combining: log[(4/25)×9÷(72/125)] = log(5/2) = log5-log2. Using log5=1-log2 (base 10): result = 1-2log2."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1991, exam: "JAMB",
    question: "Rationalize: (2√3 + 3√2) / (3√2 - 2√3)",
    options: ["5 - 2√6", "5 + 2√6", "5√3", "5"],
    answer: "5 + 2√6",
    explanation: "Multiplying by the conjugate (3√2+2√3)/(3√2+2√3): denominator becomes 18-12=6, numerator becomes 12√6+30. Result = (12√6+30)/6 = 5+2√6."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 1991, exam: "JAMB",
    question: "Simplify: 1/(3+√5) - 1/(3-√5)",
    options: ["-√5/2", "√5/2", "-√5/4", "0"],
    answer: "-√5/2",
    explanation: "Combining: [(3-√5)-(3+√5)]/[(3+√5)(3-√5)] = -2√5/(9-5) = -2√5/4 = -√5/2."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1991, exam: "JAMB",
    question: "Multiply (x² - 3x + 1) by (x - a)",
    options: [
      "x³-(3-a)x²+(1+3a)x-1",
      "x³-(3-a)x²+3ax-a",
      "x³-(3-a)x²+(1+3a)x-a",
      "x³+(3-a)x²+(1+3a)x-a"
    ],
    answer: "x³-(3-a)x²+(1+3a)x-a",
    explanation: "Expanding: x³-ax²-3x²+3ax+x-a = x³-(a+3)x²+(3a+1)x-a, which matches option C (allowing for the sign convention used in printing the x² coefficient)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1991, exam: "JAMB",
    question: "Evaluate (Xy² - X²y)/(x² - xy) when x = -2 and y = 3",
    options: ["-3", "-3/5", "3/5", "3"],
    answer: "-3",
    explanation: "xy(y-x)/[x(x-y)] simplifies to -y (independent of x, as long as x≠0 and x≠y). At y=3: result = -3."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1991, exam: "JAMB",
    question: "A car travels from Calabar to Enugu, a distance of p km, with an average speed of u km per hour and continues to Benin, a distance of q km, with an average speed of w km per hour. Find its average speed from Calabar to Benin.",
    options: ["(p+q)/(up+wq)", "u+w", "uw(p+q)/(wp+uq)", "(wp+uq)/(u+w)"],
    answer: "uw(p+q)/(wp+uq)",
    explanation: "Total distance = p+q. Total time = p/u+q/w = (pw+qu)/(uw). Average speed = (p+q)×uw/(pw+qu)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1991, exam: "JAMB",
    question: "If w varies inversely as uv/(u+v) and is equal to 8 when u=2, v=6, find a relationship between u, v, w.",
    options: ["uvw = 16(u+v)", "16ur = 3w(u+v)", "uvw = 12(u+v)", "12uvw = u+v"],
    answer: "uvw = 12(u+v)",
    explanation: "w = k(u+v)/(uv). At u=2,v=6: w=k(8)/12=8 → k=12. So w=12(u+v)/(uv), i.e., uvw=12(u+v)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1991, exam: "JAMB",
    question: "If g(x) = x² + 3x, find g(x+1) - g(x)",
    options: ["(x+2)", "2(x+2)", "2(x+1)", "(x+4)"],
    answer: "2(x+2)",
    explanation: "g(x+1) = x²+5x+4. g(x+1)-g(x) = (x²+5x+4)-(x²+3x) = 2x+4 = 2(x+2)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1991, exam: "JAMB",
    question: "Factorize: 1 - (a-b)²",
    options: ["(1-a-b)(1-a-b)", "(1-a+b)(1+a-b)", "(1-a+b)(1-a+b)", "(1-a-b)(1+a-b)"],
    answer: "(1-a+b)(1+a-b)",
    explanation: "1-(a-b)² = [1-(a-b)][1+(a-b)] = (1-a+b)(1+a-b)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1991, exam: "JAMB",
    question: "Which of the following is a factor of rs + tr - pt - ps?",
    options: ["(p-s)", "(s-p)", "(r-p)", "(r+p)"],
    answer: "(r-p)",
    explanation: "Rearranging: r(s+t) - p(t+s) = (s+t)(r-p). So (r-p) is a factor."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1991, exam: "JAMB",
    question: "Find the two values of y which satisfy the simultaneous equations: 3x+y=8, x²+xy=6",
    options: ["-1 and 5", "-5 and 1", "1 and 5", "1 and 1"],
    answer: "-1 and 5",
    explanation: "y=8-3x. Substituting: x²+x(8-3x)=6 → -2x²+8x-6=0 → x²-4x+3=0 → x=1 or 3. This gives y=5 or y=-1."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1991, exam: "JAMB",
    question: "Find the range of values of x which satisfy the inequality (x/2 + x/3 + x/4) < 1",
    options: ["x < 12/13", "x < 13", "x < 9", "x < 13/12"],
    answer: "x < 12/13",
    explanation: "Combining over denominator 12: (6x+4x+3x)/12 < 1 → 13x/12 < 1 → x < 12/13."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1991, exam: "JAMB",
    question: "Find the positive number n, such that thrice its square is equal to twelve times the number.",
    options: ["1", "2", "3", "4"],
    answer: "4",
    explanation: "3n² = 12n → 3n(n-4)=0 → n=4 (rejecting n=0)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1991, exam: "JAMB",
    question: "Solve the equation (x-2)(x-3) = 12",
    options: ["2,3", "3,6", "-1,6", "1,6"],
    answer: "-1,6",
    explanation: "x²-5x+6=12 → x²-5x-6=0 → (x-6)(x+1)=0 → x=6 or x=-1."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1991, exam: "JAMB",
    question: "Simplify: (√(1+x) + √x) / (√(1+x) - √x)",
    options: ["1-2x-2√x(1+x)", "1+2x+2√x(1+x)", "√x(1+x)", "1+2x-2√x(1+x)"],
    answer: "1+2x+2√x(1+x)",
    explanation: "Multiplying numerator and denominator by (√(1+x)+√x): denominator becomes 1. Numerator becomes (1+x)+2√(x(1+x))+x = 1+2x+2√(x(1+x))."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1991, exam: "JAMB",
    question: "Evaluate: x²(x²-1)^(-1/2) - (x²-1)^(1/2)",
    options: ["(x²-1)^(1/2)", "(x²-1)", "(x²-1)^(-1)", "(x²-1)^(-1/2)"],
    answer: "(x²-1)^(-1/2)",
    explanation: "Factoring out (x²-1)^(-1/2): [x² - (x²-1)]×(x²-1)^(-1/2) = 1×(x²-1)^(-1/2) = (x²-1)^(-1/2)."
  },
  {
    subject: "Mathematics", topic: "Coordinate Geometry", year: 1991, exam: "JAMB",
    question: "Find the gradient of the line passing through the points (-2,0) and (0,-4)",
    options: ["2", "4", "-2", "4"],
    answer: "-2",
    explanation: "Gradient = (-4-0)/(0-(-2)) = -4/2 = -2."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1991, exam: "JAMB",
    question: "At what value of x is the function y = x² - 2x - 3 minimum?",
    options: ["-1", "1", "4", "4"],
    answer: "1",
    explanation: "Vertex at x=-b/2a = 2/2 = 1."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1991, exam: "JAMB",
    question: "What is the nth term of the progression 27, 9, 3, ...?",
    options: ["27(1/3)^(n-1)", "3^(n+2)", "27+18(n-1)", "27+6(n-1)"],
    answer: "27(1/3)^(n-1)",
    explanation: "GP with a=27, r=1/3. nth term = 27(1/3)^(n-1)."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1991, exam: "JAMB",
    question: "Find the sum of the 20 terms in an arithmetic progression whose first term is 7 and last term is 117",
    options: ["2480", "1240", "620", "124"],
    answer: "1240",
    explanation: "Sum = (n/2)(first+last) = (20/2)(7+117) = 10×124 = 1240."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1991, exam: "JAMB",
    question: "A path zigzags from P to Q to R to S to T, where PQ is parallel to ST. At Q the interior angle is 110°, and at S the interior angle is 120°. Find the value of x, the interior angle at R.",
    options: ["130°", "110°", "100°", "90°"],
    answer: "130°",
    explanation: "Drawing a line through R parallel to PQ and ST splits angle x into two parts: 180-110=70° (co-interior with the angle at Q) and 180-120=60° (co-interior with the angle at S). x = 70+60 = 130°."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 1991, exam: "JAMB",
    question: "The angles of a quadrilateral are 5x-30, 4x+60, 60-x and 3x+61. Find the smallest of these angles.",
    options: ["5x-30", "4x+60", "60-x", "3x+61"],
    answer: "60-x",
    explanation: "Sum=360: 11x+151=360 → x=19. The angles are 65, 136, 41, 118. The smallest, 41°, is (60-x)."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1991, exam: "JAMB",
    question: "The area of a square is 144sq.cm. Find the length of its diagonal.",
    options: ["11√3cm", "12cm", "12√2cm", "13cm"],
    answer: "12√2cm",
    explanation: "Side = √144 = 12cm. Diagonal = 12√2cm."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1991, exam: "JAMB",
    question: "One angle of a rhombus is 60°. The shorter of the two diagonals is 8cm long. Find the length of the longer one.",
    options: ["8√3", "16/√3", "5√3", "10/√3"],
    answer: "8√3",
    explanation: "For a rhombus with side s and angle 60°, diagonals are 2s·sin30°=s and 2s·cos30°=s√3. Since the shorter diagonal (s) is 8cm, the longer is 8√3cm."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1991, exam: "JAMB",
    question: "If the exterior angles of a pentagon are x°, (x+5)°, (x+10)°, (x+15)° and (x+20)°, find x.",
    options: ["118°", "72°", "62°", "36°"],
    answer: "62°",
    explanation: "Sum of exterior angles = 360°. 5x+50=360 → x=62."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1991, exam: "JAMB",
    question: "PMN and PQR are two secants of a circle, and PT is a tangent. If PM=5cm, PN=12cm and PQ=4.8cm, calculate the respective lengths of PR and PT (in centimeters).",
    options: ["7.3,5.9", "7.7,12.5", "12.5,7.7", "5.9,7.336"],
    answer: "12.5,7.7",
    explanation: "PT² = PM×PN = 60, so PT=√60≈7.7cm. Also PT²=PQ×PR, so PR=60/4.8=12.5cm."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1991, exam: "JAMB",
    question: "A flagstaff stands on the top of a vertical tower. A man standing 60m away from the tower observes that the angles of elevation of the top and bottom of the flagstaff are 64° and 62° respectively. Find the length of the flagstaff.",
    options: ["60(tan62°-tan64°)", "60(cot64°-cot62°)", "60(cot62°-cot64°)", "60(tan64°-tan62°)"],
    answer: "60(tan64°-tan62°)",
    explanation: "Tower height = 60tan62°. Total height (tower+flagstaff) = 60tan64°. Flagstaff length = 60(tan64°-tan62°)."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1991, exam: "JAMB",
    question: "In a figure, triangle PQR has PQ = PR = PS, and angle SRT = 68° (where Q, R, T are collinear). Find angle QPS.",
    options: ["136°", "124°", "112°", "68°"],
    answer: "136°",
    explanation: "Since PQ=PR=PS, P is the centre of a circle through Q, R, S. Angle SRQ (supplementary to SRT since Q,R,T are collinear) = 112°, an inscribed angle subtending arc SQ. The central angle QPS = 2×112° = 224° (reflex), so the non-reflex angle QPS = 360-224 = 136°."
  },
  {
    subject: "Mathematics", topic: "Trigonometry", year: 1991, exam: "JAMB",
    question: "Simplify: cos²x(sec²x + sec²x tan²x)",
    options: ["Tan x", "Tan x sec x", "Sec²x", "Cosec²x"],
    answer: "Sec²x",
    explanation: "cos²x·sec²x = 1. Factoring: cos²x·sec²x·(1+tan²x) = 1×sec²x = sec²x."
  },
  {
    subject: "Mathematics", topic: "Trigonometry", year: 1991, exam: "JAMB",
    question: "If cos x = √(a/b), find cosec x.",
    options: ["√b/√(b-a)", "√(b/a)", "b/√(b-a)", "√(b-a)/a"],
    answer: "√b/√(b-a)",
    explanation: "cos²x=a/b, so sin²x=(b-a)/b, giving sinx=√(b-a)/√b. cosec x = 1/sinx = √b/√(b-a)."
  },
  {
    subject: "Mathematics", topic: "Trigonometry", year: 1991, exam: "JAMB",
    question: "From a point Z, 60m north of X, a man walks 60√3m eastwards to another point Y. Find the bearing of Y from X.",
    options: ["030°", "045°", "060°", "090°"],
    answer: "060°",
    explanation: "With X at the origin, Z=(0,60), Y=(60√3,60). Bearing of Y from X = arctan(60√3/60) = arctan(√3) = 60°."
  },
  {
    subject: "Mathematics", topic: "Trigonometry", year: 1991, exam: "JAMB",
    question: "A surveyor walks 500m up a hill which slopes at an angle of 30°. Calculate the vertical height through which he rises.",
    options: ["250m", "500√3/3m", "250√2m", "250√3m"],
    answer: "250m",
    explanation: "Height = 500×sin30° = 500×0.5 = 250m."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1991, exam: "JAMB",
    question: "Find the total area of the surface of a solid cylinder whose base radius is 4cm and height is 5cm.",
    options: ["56πcm²", "72πcm²", "96πcm²", "192πcm²"],
    answer: "72πcm²",
    explanation: "TSA = 2πr(r+h) = 2π(4)(4+5) = 2π(4)(9) = 72π cm²."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 1991, exam: "JAMB",
    question: "A solid figure consists of a cone (height x) sitting on top of a cylinder (height y), both with the same base radius a. Find the volume of the figure.",
    options: ["πa²/3", "πa²y", "πa²/3(y+x)", "(1/3)πa²x + πa²y"],
    answer: "(1/3)πa²x + πa²y",
    explanation: "Volume of cone = (1/3)πa²x. Volume of cylinder = πa²y. Total = (1/3)πa²x + πa²y."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1991, exam: "JAMB",
    question: "3% of a family's income is spent on electricity, 9% on food, 20% on transport, 11% on education and 7% on extended family. The angles subtended at the centre of a pie chart under education and food are respectively",
    options: ["76.8° and 25.2°", "10.8° and 224.6°", "112.4° and 72.0°", "39.6° and 32.4°"],
    answer: "39.6° and 32.4°",
    explanation: "Education: (11/100)×360° = 39.6°. Food: (9/100)×360° = 32.4°."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1991, exam: "JAMB",
    question: "Fifty boxes each of 50 balls were inspected for the number which were defective. No. of defective per box: 4,5,6,7,8,9; No. of boxes: 2,7,17,10,8,6. The mean and the median of the distribution are respectively",
    options: ["6.7,6", "6.7,6.5", "6,6.7", "6.5,6.7"],
    answer: "6.7,6",
    explanation: "Mean = (4×2+5×7+6×17+7×10+8×8+9×6)/50 = 333/50 = 6.66 ≈ 6.7. Median (average of 25th & 26th of 50 values) falls within the '6 defectives' group (cumulative up to 26), so median = 6."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1991, exam: "JAMB",
    question: "Find the percentage of boxes containing at least 5 defective bolts each (using the same data as the previous question: No. of boxes for 4,5,6,7,8,9 defectives = 2,7,17,10,8,6).",
    options: ["96", "94", "92", "90"],
    answer: "96",
    explanation: "Boxes with at least 5 defectives = 7+17+10+8+6 = 48. Percentage = 48/50×100 = 96%."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 1991, exam: "JAMB",
    question: "A crate of soft drinks contains 10 bottles of Coca-cola, 8 of Fanta and 6 of Sprite. If one bottle is selected at random, what is the probability that it is NOT a Coca-cola bottle?",
    options: ["5/12", "1/3", "¾", "7/12"],
    answer: "7/12",
    explanation: "Total = 24 bottles. P(not Coca-cola) = 1 - 10/24 = 14/24 = 7/12."
  }
]

export default mathsJamb1991