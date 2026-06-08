import { useState } from "react"

const SECTIONS = {
  algebra: {
    label: "Algebra",
    icon: "🔢",
    color: "#7c3aed",
    bg: "rgba(124,58,237,0.06)",
    border: "rgba(124,58,237,0.2)",
    tip: "Make the unknown the subject step by step. Whatever you do to one side, do to the other.",
    items: [
      { title: "Difference of Two Squares", formula: "a² − b² = (a+b)(a−b)", note: "RECURRING every year. Spot it quickly: two perfect squares subtracted.", example: "x² − 9 = (x+3)(x−3)" },
      { title: "Perfect Square (a+b)²", formula: "(a+b)² = a² + 2ab + b²", note: "The middle term is always 2ab — the most common mistake is forgetting it.", example: "(x+3)² = x² + 6x + 9" },
      { title: "Perfect Square (a−b)²", formula: "(a−b)² = a² − 2ab + b²", note: "Sign changes: middle term becomes negative.", example: "(x−4)² = x² − 8x + 16" },
      { title: "Sum of Cubes", formula: "a³ + b³ = (a+b)(a²−ab+b²)", note: "Note the MINUS ab in the second bracket.", example: "x³ + 8 = (x+2)(x²−2x+4)" },
      { title: "Difference of Cubes", formula: "a³ − b³ = (a−b)(a²+ab+b²)", note: "Note the PLUS ab in the second bracket. Opposite to sum.", example: "27x³ − 8y³ = (3x−2y)(9x²+6xy+4y²)" },
      { title: "Quadratic Formula", formula: "x = [−b ± √(b²−4ac)] / 2a", note: "Use when factorising is not obvious. b²−4ac > 0: two roots. = 0: equal roots. < 0: no real roots.", example: "2x²+5x−3=0 → a=2,b=5,c=−3" },
      { title: "Make subject of formula", formula: "Isolate the variable step by step", note: "Move everything else to the other side using inverse operations (÷ before −).", example: "P = M/5(x+Q)+1 → Q = (5P−Mx−5)/M" },
      { title: "Inequality — flip sign rule", formula: "Flip > or < when multiplying/dividing by a NEGATIVE number", note: "This is the most common error in inequality questions. Always check.", example: "−2x > 4 → x < −2 (sign flips!)" },
    ]
  },

  numbers: {
    label: "Numbers",
    icon: "🔣",
    color: "#b45309",
    bg: "rgba(180,83,9,0.06)",
    border: "rgba(180,83,9,0.2)",
    tip: "Always convert through base 10 as the bridge. BODMAS applies to all arithmetic. Percentage error = |error|/true × 100.",
    items: [
      { title: "Base Conversion — any base → base 10", formula: "Multiply each digit by base^position and add", note: "Position starts at 0 from the right.", example: "241₅ = 2×25 + 4×5 + 1×1 = 71₁₀" },
      { title: "Base 10 → any base", formula: "Divide repeatedly by new base, read remainders bottom to top", note: "Always go through base 10 as intermediate step.", example: "71 ÷ 8 = 8r7, 8÷8=1r0, 1÷8=0r1 → 107₈" },
      { title: "Percentage Error", formula: "% error = |measured − true| / true × 100", note: "RECURRING. Note: divide by the TRUE value, not the measured value.", example: "True=250, Measured=252 → error=0.8%" },
      { title: "Simple Interest", formula: "SI = PRT/100. Amount = P + SI", note: "P=principal, R=rate%, T=time in years.", example: "₦400 at 2% for 3 years → SI = 400×2×3/100 = ₦24" },
      { title: "Compound Interest", formula: "A = P(1 + r/100)ⁿ", note: "Compare with simple interest — compound grows faster.", example: "₦1000 at 10% for 2 years → A = 1000(1.1)² = ₦1210" },
      { title: "Indices — Multiplication", formula: "aᵐ × aⁿ = aᵐ⁺ⁿ (SAME base only)", note: "Only add exponents when base is identical.", example: "x³ × x² = x⁵" },
      { title: "Indices — Zero and Negative", formula: "a⁰ = 1 ; a⁻ⁿ = 1/aⁿ", note: "Anything to the power 0 = 1. Negative power = reciprocal.", example: "5⁰ = 1 ; 2⁻³ = 1/8" },
      { title: "Fraction Index", formula: "a^(m/n) = (ⁿ√a)ᵐ", note: "Denominator = root. Numerator = power. Root first, then power.", example: "8^(2/3) = (∛8)² = 2² = 4" },
    ]
  },

  stats: {
    label: "Statistics",
    icon: "📊",
    color: "#0f766e",
    bg: "rgba(15,118,110,0.06)",
    border: "rgba(15,118,110,0.2)",
    tip: "1 is NOT a prime. Primes from 20–30: ONLY 23 and 29 → P = 2/11. Without replacement: denominator decreases each pick.",
    items: [
      { title: "Mean (ungrouped)", formula: "Mean = Σx / n", note: "Sum of all values divided by count.", example: "2,3,5,6 → mean = 16/4 = 4" },
      { title: "Mean (grouped/frequency)", formula: "Mean = Σfx / Σf", note: "Multiply each value by its frequency, sum, then divide by total frequency.", example: "Σfx = 66, Σf = 20 → mean = 3.3" },
      { title: "Variance", formula: "Variance = Σ(x−x̄)² / n", note: "Find mean first, then square each deviation, average them. RECURRING.", example: "Data 2,3,5,6. Mean=4. Var = [(4+1+1+4)/4] = 10/4" },
      { title: "Standard Deviation", formula: "SD = √Variance", note: "Just take the square root of variance. SD = √10 for the above example.", example: "SD = √(10/4) = √2.5 ≈ 1.58" },
      { title: "Probability", formula: "P(event) = favourable / total outcomes", note: "Always between 0 and 1. P(A') = 1 − P(A).", example: "P(head on coin) = 1/2" },
      { title: "P(primes from 20 to 30 inclusive)", formula: "P = 2/11", note: "APPEARED IN 2011 AND 2019. Total numbers: 20,21...30 = 11. Primes: 23 and 29 only. 1 is NOT prime.", example: "2 primes out of 11 numbers = 2/11" },
      { title: "Without Replacement", formula: "P(2nd) = (remaining favourable) / (n−1)", note: "After each pick without replacement, total decreases by 1.", example: "6R,4W: P(both red) = 6/10 × 5/9 = 30/90 = 1/3" },
      { title: "Median", formula: "Middle value when arranged in order. Even count: average of two middle values.", note: "ALWAYS sort data first. For grouped: use cumulative frequency.", example: "1,3,5,7,9 → median = 5" },
    ]
  },

  geometry: {
    label: "Geometry",
    icon: "📐",
    color: "#1d4ed8",
    bg: "rgba(29,78,216,0.06)",
    border: "rgba(29,78,216,0.2)",
    tip: "Sector PERIMETER = arc + 2r (add both radii). Area ratio = length ratio squared. Volume ratio = length ratio cubed.",
    items: [
      { title: "Circle — Area and Circumference", formula: "Area = πr²  ;  Circumference = 2πr", note: "RECURRING every year. Use π = 22/7 unless told otherwise.", example: "r=7: Area = 22/7 × 49 = 154 cm²" },
      { title: "Sector — Arc Length", formula: "Arc length = (θ/360) × 2πr", note: "θ is the angle in degrees. For radians: arc = rθ.", example: "r=10, θ=48°: arc = (48/360)×2×(22/7)×10 = 8.8cm" },
      { title: "Sector — PERIMETER", formula: "Perimeter = arc length + 2r", note: "MOST COMMON MISTAKE: forgetting to add the two radii (straight sides).", example: "arc=8.8, r=10: Perimeter = 8.8 + 20 = 28.8cm" },
      { title: "Pythagoras", formula: "c² = a² + b²  (c = hypotenuse)", note: "RECURRING. Common triples: 3-4-5, 5-12-13, 8-15-17.", example: "sides 3,4: hyp = √(9+16) = 5" },
      { title: "Polygon — Interior Angles Sum", formula: "Sum = (n−2) × 180°", note: "n = number of sides. Each interior angle of regular polygon = sum/n.", example: "Pentagon: (5−2)×180 = 540°" },
      { title: "Cylinder", formula: "Volume = πr²h  ;  SA = 2πr(r+h)", note: "h = height. Distinguish between total SA and curved SA (= 2πrh).", example: "r=3,h=5: V=πr²h=45π" },
      { title: "Sphere", formula: "Volume = (4/3)πr³  ;  SA = 4πr²", note: "Memorise both. Volume is (4/3) NOT (2/3).", example: "r=3: V=(4/3)π(27)=36π" },
      { title: "Length/Area/Volume Ratios", formula: "Length a:b → Area a²:b² → Volume a³:b³", note: "RECURRING. If circumference ratio = 2:5, area ratio = 4:25.", example: "Ratio 3:4 → area ratio = 9:16" },
    ]
  },

  trig: {
    label: "Trigonometry",
    icon: "📐",
    color: "#dc2626",
    bg: "rgba(220,38,38,0.06)",
    border: "rgba(220,38,38,0.2)",
    tip: "sec²θ + tan²θ = 3 → θ = 45°. This appeared 3 YEARS IN A ROW. CAST diagram: All/Sin/Tan/Cos per quadrant.",
    items: [
      { title: "SOH CAH TOA", formula: "sin=O/H  cos=A/H  tan=O/A", note: "O=opposite, A=adjacent, H=hypotenuse. Foundation of all trig.", example: "sinθ=3/5: O=3,H=5 → A=4 → cosθ=4/5" },
      { title: "Special Angles", formula: "30°: sin=½, cos=√3/2, tan=1/√3\n45°: sin=cos=1/√2, tan=1\n60°: sin=√3/2, cos=½, tan=√3", note: "MUST MEMORISE. These appear every year. 45° is the most tested.", example: "sin60°+cos30°=√3/2+√3/2=√3" },
      { title: "Pythagorean Identity", formula: "sin²θ + cos²θ = 1\n1 + tan²θ = sec²θ\n1 + cot²θ = cosec²θ", note: "RECURRING. Use these to convert between trig ratios.", example: "sin²θ=9/25 → cos²θ=1−9/25=16/25" },
      { title: "sec²θ + tan²θ = 3 → θ = 45°", formula: "Replace sec²θ with (1+tan²θ):\n2tan²θ = 2 → tanθ = 1 → θ = 45°", note: "APPEARED IN 2017, 2018, 2019 — three years in a row! Will appear again.", example: "sec²θ+tan²θ=3 → always θ=45°" },
      { title: "CAST Diagram", formula: "Q1(0–90°): ALL positive\nQ2(90–180°): SIN only\nQ3(180–270°): TAN only\nQ4(270–360°): COS only", note: "RECURRING. If sinθ = 3/5 and θ is obtuse → use Q2 → cosθ is negative.", example: "sin120° = sin60° = √3/2 (Q2: sin positive)" },
      { title: "Compound Angle — sin", formula: "sin(A±B) = sinAcosB ± cosAsinB", note: "Sign MATCHES: sin(A+B) has plus, sin(A−B) has minus.", example: "sin75°=sin(45+30)=sin45cos30+cos45sin30" },
      { title: "Compound Angle — cos", formula: "cos(A±B) = cosAcosB ∓ sinAsinB", note: "Sign REVERSES: cos(A+B) has minus, cos(A−B) has plus.", example: "2cos(60°+θ) = cosθ − √3sinθ" },
      { title: "Projectile — Maximum Range", formula: "θ = 45° gives MAXIMUM range", note: "RECURRING EVERY YEAR. Complementary angles (30° & 60°) give equal range.", example: "Throw at 45° → maximum horizontal distance" },
    ]
  },

  calculus: {
    label: "Calculus",
    icon: "📈",
    color: "#7c3aed",
    bg: "rgba(124,58,237,0.06)",
    border: "rgba(124,58,237,0.2)",
    tip: "Always add +C for indefinite integrals. Differentiate to find gradient; set dy/dx=0 for turning points.",
    items: [
      { title: "Power Rule — Differentiation", formula: "If y = xⁿ, then dy/dx = nxⁿ⁻¹", note: "Multiply by power, reduce power by 1. MOST USED rule.", example: "y=x³ → dy/dx=3x²" },
      { title: "Chain Rule", formula: "If y = f(g(x)), dy/dx = f'(g(x)) × g'(x)", note: "Differentiate outer function, multiply by derivative of inner.", example: "y=(2x+1)³ → dy/dx=3(2x+1)²×2=6(2x+1)²" },
      { title: "Product Rule", formula: "If y = uv, dy/dx = u(dv/dx) + v(du/dx)", note: "RECURRING. 'First times derivative of second plus second times derivative of first'.", example: "y=xsinx → dy/dx=sinx+xcosx" },
      { title: "Min/Max — Finding Turning Points", formula: "1. Set dy/dx = 0 → find x\n2. Find d²y/dx²\n3. >0: minimum  <0: maximum", note: "RECURRING. Question: 'at what value of x does y attain minimum/maximum?'", example: "y=x²−2x−3: dy/dx=2x−2=0 → x=1 (minimum)" },
      { title: "Power Rule — Integration", formula: "∫xⁿ dx = xⁿ⁺¹/(n+1) + C", note: "Increase power by 1, divide by new power. ALWAYS add +C for indefinite.", example: "∫x³ dx = x⁴/4 + C" },
      { title: "Definite Integration", formula: "∫ₐᵇf(x)dx = [F(x)]ₐᵇ = F(b) − F(a)", note: "Substitute upper limit minus lower limit. No +C needed for definite.", example: "∫₀²x³dx=[x⁴/4]₀²=16/4−0=4" },
      { title: "Integration of Trig", formula: "∫sinx dx = −cosx + C\n∫cosx dx = sinx + C", note: "Opposite to differentiation. Note the minus sign for sin→cos.", example: "∫sin2x dx = −cos2x/2 + C" },
      { title: "Rate of Change", formula: "dy/dx = rate of change of y with respect to x", note: "Positive dy/dx = increasing function. Negative = decreasing. Zero = stationary.", example: "Find rate when x=2: substitute x=2 into dy/dx" },
    ]
  },

  sequences: {
    label: "Sequences",
    icon: "🔢",
    color: "#059669",
    bg: "rgba(5,150,105,0.06)",
    border: "rgba(5,150,105,0.2)",
    tip: "AP: subtract consecutive terms to find d. GP: divide consecutive terms to find r. Always identify the type first.",
    items: [
      { title: "AP — nth Term", formula: "Tₙ = a + (n−1)d", note: "a = first term, d = common difference. Subtract consecutive terms to find d.", example: "2,5,8,... → a=2,d=3. T₁₀=2+9×3=29" },
      { title: "AP — Sum of n terms", formula: "Sₙ = n/2 [2a+(n−1)d] = n/2(first+last)", note: "Use either form — whichever is easier given the information.", example: "Sum of first 10 terms: S₁₀=10/2(2×2+9×3)=155" },
      { title: "GP — nth Term", formula: "Tₙ = arⁿ⁻¹", note: "r = common ratio = any term ÷ previous term.", example: "2,6,18,54,... → a=2,r=3. T₅=2×3⁴=162" },
      { title: "GP — Sum to Infinity", formula: "S∞ = a/(1−r)  when |r| < 1", note: "Only works when |r| < 1 (ratio between −1 and 1). RECURRING.", example: "0.5+0.05+0.005+... → r=0.1, S∞=0.5/(0.9)=5/9" },
      { title: "Finding which term equals a value", formula: "Set Tₙ = value, solve for n", note: "For AP: a+(n−1)d=value. Solve for n.", example: "Which term of 2,5,8,... is 29? → 2+(n−1)3=29 → n=10" },
      { title: "GP — Sum of n terms (r≠1)", formula: "Sₙ = a(rⁿ−1)/(r−1) when r>1\nSₙ = a(1−rⁿ)/(1−r) when r<1", note: "Use the form that gives a positive denominator.", example: "r=2,a=3,n=4: S₄=3(2⁴−1)/(2−1)=45" },
    ]
  },

  coordinate: {
    label: "Coordinate",
    icon: "📉",
    color: "#0369a1",
    bg: "rgba(3,105,161,0.06)",
    border: "rgba(3,105,161,0.2)",
    tip: "Parallel lines: same gradient. Perpendicular: gradients multiply to −1. Midpoint is the average of coordinates.",
    items: [
      { title: "Distance Formula", formula: "d = √[(x₂−x₁)² + (y₂−y₁)²]", note: "RECURRING. Square the differences, add, then square root.", example: "(1,2) to (4,6): d=√(9+16)=√25=5" },
      { title: "Midpoint Formula", formula: "M = ((x₁+x₂)/2, (y₁+y₂)/2)", note: "Average of x-coordinates and y-coordinates separately.", example: "(1,3) and (5,7): M=(3,5)" },
      { title: "Gradient Formula", formula: "m = (y₂−y₁)/(x₂−x₁)", note: "Rise over run. Positive = upward slope. Negative = downward.", example: "P(1,1),Q(2,5): m=(5−1)/(2−1)=4" },
      { title: "Equation of Line", formula: "y−y₁ = m(x−x₁)", note: "RECURRING. Use any known point (x₁,y₁) and the gradient m.", example: "m=½, through (1,2): y−2=½(x−1) → 2y=x+3" },
      { title: "Parallel and Perpendicular", formula: "Parallel: m₁=m₂\nPerpendicular: m₁×m₂=−1", note: "Perpendicular gradient = negative reciprocal of original.", example: "m=2 → perpendicular m=−½" },
      { title: "Distance with unknown coordinate", formula: "Square both sides of distance formula to remove √", note: "RECURRING trap question. Set d²=given value² then solve.", example: "(x,3)(−x,2) dist=5: (2x)²+1=25 → x=√6" },
    ]
  },

  sets: {
    label: "Sets",
    icon: "⭕",
    color: "#b45309",
    bg: "rgba(180,83,9,0.06)",
    border: "rgba(180,83,9,0.2)",
    tip: "Start filling a Venn diagram from the INNERMOST region. Use the union formula FIRST before finding 'neither'.",
    items: [
      { title: "Union Formula", formula: "n(A∪B) = n(A) + n(B) − n(A∩B)", note: "RECURRING every year. Subtract intersection to avoid counting twice.", example: "n(A)=30, n(B)=25, n(A∩B)=10 → n(A∪B)=45" },
      { title: "Finding 'Neither'", formula: "n(neither) = n(Universal) − n(A∪B)", note: "ALWAYS find n(A∪B) first using the formula, then subtract from total.", example: "Total=50, n(A∪B)=45 → neither=5" },
      { title: "Three Sets Formula", formula: "n(A∪B∪C) = n(A)+n(B)+n(C) − n(A∩B) − n(A∩C) − n(B∩C) + n(A∩B∩C)", note: "Complex but follows the same logic — subtract pairs, add back triple.", example: "Fills in the 7 regions of a 3-set Venn diagram" },
      { title: "Complement", formula: "n(A') = n(Universal) − n(A)", note: "Everything NOT in A. A ∪ A' = Universal set.", example: "U=100, n(A)=60 → n(A')=40" },
      { title: "Venn Diagram Strategy", formula: "Fill from inside out:\n1. Intersection first\n2. Each circle only\n3. Outside all sets", note: "The intersection value is always given or calculable first.", example: "If n(A∩B)=10, then n(A only)=n(A)−10" },
    ]
  },

  logs: {
    label: "Logarithms",
    icon: "📋",
    color: "#dc2626",
    bg: "rgba(220,38,38,0.06)",
    border: "rgba(220,38,38,0.2)",
    tip: "log(1)=0. log₁₀(10)=1. Product rule, quotient rule, power rule — apply in that order.",
    items: [
      { title: "Definition", formula: "logₐx = b  means  aᵇ = x", note: "Always convert to index form to solve. logₐ is the inverse of aⁿ.", example: "log₂8=3 because 2³=8" },
      { title: "Product Rule", formula: "log(AB) = logA + logB", note: "Two logs with same base being added → combine as product.", example: "log₂4+log₂8=log₂32=5" },
      { title: "Quotient Rule", formula: "log(A/B) = logA − logB", note: "Subtraction of logs = log of division.", example: "log₃27−log₃9=log₃3=1" },
      { title: "Power Rule", formula: "log(Aⁿ) = n×logA", note: "RECURRING. Bring the power down as a multiplier.", example: "log₂16=log₂(2⁴)=4log₂2=4" },
      { title: "Special Values", formula: "log(1) = 0\nlogₐ(a) = 1\nlogₐ(aⁿ) = n", note: "MEMORISE. These shortcuts save time on exam questions.", example: "log₅1=0, log₅5=1, log₅125=3" },
      { title: "Change of Base", formula: "logₐx = log(x)/log(a)", note: "Use when calculator only has log₁₀ or ln.", example: "log₂10 = log10/log2 = 1/0.301 ≈ 3.32" },
      { title: "Solving Log Equations", formula: "1. Apply log laws to simplify\n2. Convert to index form\n3. Solve", note: "If same base on both sides, drop the log and equate arguments.", example: "log₂(x−1)+log₂(x+2)=2 → x(x+1)=4 → x=..." },
    ]
  },

  polynomials: {
    label: "Polynomials",
    icon: "📈",
    color: "#7c3aed",
    bg: "rgba(124,58,237,0.06)",
    border: "rgba(124,58,237,0.2)",
    tip: "Try x=1 and x=−1 first when looking for factors. They work surprisingly often in UNIBEN questions.",
    items: [
      { title: "Remainder Theorem", formula: "When f(x) ÷ (x−a), remainder = f(a)", note: "JUST SUBSTITUTE x=a into f(x). No need to do long division.", example: "f(x)=x³−2x+1 ÷ (x−2): f(2)=8−4+1=5. Remainder=5" },
      { title: "Factor Theorem", formula: "If f(a) = 0, then (x−a) is a factor", note: "When remainder is zero, it's a factor. Converse of remainder theorem.", example: "f(−1)=0 → (x+1) is a factor" },
      { title: "Strategy for factorising cubics", formula: "1. Try x=1,−1,2,−2 in f(x)\n2. Find factor (x−a) where f(a)=0\n3. Divide f(x) by (x−a)\n4. Factorise the quotient", note: "RECURRING in UNIBEN. Factor theorem + long division.", example: "2x³+5x²−9x−18: f(2)=0 → (x−2) is factor" },
      { title: "Sum/Product of Roots", formula: "For ax²+bx+c=0:\nSum of roots = −b/a\nProduct of roots = c/a", note: "Quick check: sum and product without actually solving.", example: "x²−5x+6=0: sum=5, product=6 → roots are 2 and 3" },
    ]
  },

  variation: {
    label: "Variation",
    icon: "⚖️",
    color: "#059669",
    bg: "rgba(5,150,105,0.06)",
    border: "rgba(5,150,105,0.2)",
    tip: "ALWAYS find k first using given values. Once you have k, the equation is complete.",
    items: [
      { title: "Direct Variation", formula: "y ∝ x  →  y = kx", note: "Double x → double y. Find k from given values, then solve.", example: "y=12 when x=3 → k=4. Find y when x=5: y=20" },
      { title: "Inverse Variation", formula: "y ∝ 1/x  →  y = k/x", note: "Double x → halve y. xy = constant = k.", example: "y=6 when x=4 → k=24. y when x=8: y=3" },
      { title: "Joint Variation", formula: "y ∝ xz  →  y = kxz", note: "y varies directly as BOTH x and z.", example: "P∝R/√Q: P=kR/√Q. Find k first." },
      { title: "Finding k", formula: "Substitute known values into the equation to find k", note: "ALWAYS the first step. Never skip finding k.", example: "y=kx, y=12, x=3 → k=12/3=4" },
    ]
  },
}

const MathsVault = ({ onClose, isPaid, onUpgrade, initialTab }) => {
  const [activeTab, setActiveTab] = useState(initialTab || "algebra")
  const [expanded, setExpanded] = useState(null)

  if (!isPaid) {
    return (
      <div style={{
        position: "fixed", inset: 0, zIndex: 3000,
        background: "rgba(0,0,0,0.6)",
        display: "flex", alignItems: "flex-end"
      }}>
        <div style={{
          background: "var(--bg)", width: "100%",
          borderRadius: "20px 20px 0 0",
          padding: "28px 24px 44px", textAlign: "center"
        }}>
          <div style={{ width: 40, height: 4, borderRadius: 2, background: "var(--border)", margin: "0 auto 24px" }} />
          <div style={{ fontSize: 52, marginBottom: 12 }}>🔒</div>
          <h3 style={{ fontSize: 20, fontWeight: 900, color: "var(--text)", margin: "0 0 12px" }}>
            Full Access Required
          </h3>
          <p style={{ fontSize: 14, color: "var(--text2)", lineHeight: 1.7, margin: "0 0 20px" }}>
            All Maths formulas, tricks and RECURRING patterns from UNIBEN past papers — paid users only.
          </p>
          <button className="ee-btn ee-btn-primary" onClick={onUpgrade} style={{ marginBottom: 10 }}>
            Unlock for ₦3,000 🚀
          </button>
          <button onClick={onClose} style={{
            width: "100%", padding: "10px", background: "none",
            color: "var(--text3)", border: "none", fontSize: 13,
            cursor: "pointer", fontFamily: "var(--font-main)"
          }}>Close</button>
        </div>
      </div>
    )
  }

  const section = SECTIONS[activeTab]

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 3000,
      background: "var(--bg)", display: "flex", flexDirection: "column"
    }}>
      {/* Header */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "16px 20px", borderBottom: "1px solid var(--border)", flexShrink: 0
      }}>
        <button onClick={onClose} style={{
          background: "none", border: "none", color: "var(--primary)",
          fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "var(--font-main)"
        }}>← Back</button>
        <span style={{ fontWeight: 800, fontSize: 14, color: "var(--text)" }}>
          Maths Formula Vault 🧮
        </span>
        <span style={{ width: 40 }} />
      </div>

      {/* Tabs */}
      <div style={{
        display: "flex", overflowX: "auto", borderBottom: "1px solid var(--border)",
        flexShrink: 0, padding: "0 4px"
      }}>
        {Object.entries(SECTIONS).map(([key, sec]) => (
          <button key={key} onClick={() => { setActiveTab(key); setExpanded(null) }} style={{
            padding: "10px 10px", whiteSpace: "nowrap",
            background: "none", border: "none",
            borderBottom: activeTab === key ? `2px solid ${sec.color}` : "2px solid transparent",
            color: activeTab === key ? sec.color : "var(--text2)",
            fontWeight: activeTab === key ? 800 : 600,
            fontSize: 11, cursor: "pointer", fontFamily: "var(--font-main)"
          }}>
            {sec.icon} {sec.label}
          </button>
        ))}
      </div>

      {/* Tip banner */}
      <div style={{
        padding: "10px 16px", flexShrink: 0,
        background: section.bg, borderBottom: `1px solid ${section.border}`
      }}>
        <p style={{ fontSize: 12, color: section.color, margin: 0, fontWeight: 600, lineHeight: 1.5 }}>
          💡 {section.tip}
        </p>
      </div>

      {/* Items */}
      <div style={{ overflowY: "auto", flex: 1, padding: "8px 16px 40px" }}>
        {section.items.map((item, i) => {
          const isRecurring = item.note?.includes("RECURRING") || item.note?.includes("every year") || item.note?.includes("APPEARED")
          const isOpen = expanded === i
          return (
            <div
              key={i}
              onClick={() => setExpanded(isOpen ? null : i)}
              style={{
                borderRadius: "var(--radius-md)", marginBottom: 8,
                background: isRecurring ? section.bg : "var(--surface)",
                border: `1px solid ${isRecurring ? section.border : "var(--border)"}`,
                cursor: "pointer", overflow: "hidden"
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", padding: "12px 14px", gap: 10 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                    <span style={{ fontSize: 13, fontWeight: 800, color: "var(--text)" }}>
                      {item.title}
                    </span>
                    {isRecurring && (
                      <span style={{
                        fontSize: 10, background: section.color, color: "#fff",
                        padding: "1px 6px", borderRadius: 8, fontWeight: 700, flexShrink: 0
                      }}>🔥 HOT</span>
                    )}
                  </div>
                  <div style={{
                    fontSize: 13, color: section.color, fontWeight: 700,
                    fontFamily: "monospace", lineHeight: 1.6, whiteSpace: "pre-line"
                  }}>
                    {item.formula}
                  </div>
                </div>
                <span style={{ fontSize: 14, color: "var(--text3)", flexShrink: 0 }}>
                  {isOpen ? "▲" : "▼"}
                </span>
              </div>

              {isOpen && (
                <div style={{ padding: "0 14px 14px", borderTop: "1px solid var(--border)" }}>
                  <div style={{ marginTop: 10 }}>
                    <div style={{ fontSize: 11, fontWeight: 800, color: "var(--text2)", textTransform: "uppercase", marginBottom: 4 }}>
                      📝 Key Note
                    </div>
                    <div style={{ fontSize: 13, color: "var(--text)", lineHeight: 1.6 }}>
                      {item.note}
                    </div>
                  </div>
                  <div style={{
                    marginTop: 10, background: "var(--surface2)",
                    padding: "8px 10px", borderRadius: "var(--radius-sm)"
                  }}>
                    <div style={{ fontSize: 11, fontWeight: 800, color: section.color, textTransform: "uppercase", marginBottom: 4 }}>
                      💡 Example
                    </div>
                    <div style={{ fontSize: 13, color: "var(--text)", fontFamily: "monospace", lineHeight: 1.6 }}>
                      {item.example}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MathsVault
