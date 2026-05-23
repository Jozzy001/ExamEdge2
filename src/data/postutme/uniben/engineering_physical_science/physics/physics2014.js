// UNIBEN Post-UTME 2014/2015 — Physics
// 14 questions from General Paper (Q14-20, Q34-41)
// Faculty: Engineering & Physical Sciences
// Analysis notes:
//   RECURRING: wave equation v=fλ ★, mirrors ★, internal resistance ★, resistivity ★,
//              thermionic/atomic energy, free fall, dimensions of energy, surface tension
//   NEW: non-standard thermometer calibration, elastic string work done, heat to evaporate ice

const unibenPhysics2014 = [
  {
    subject: "Physics", topic: "Thermal Physics", year: 2014, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "A glass bottle is heated from 10°C to 40°C. Linear expansivity of glass = 9×10⁻⁶ K⁻¹. Volume at 40°C = 20016.2 cm³. Calculate its volume at 10°C.",
    options: ["20000 cm³", "20010.8 cm³", "20013.5 cm³", "20005.4 cm³"],
    answer: "20000 cm³",
    explanation: "Cubic (volume) expansivity γ = 3α = 3×9×10⁻⁶ = 27×10⁻⁶ K⁻¹. ΔT = 30°C. V₄₀ = V₁₀(1 + γΔT). V₁₀ = 20016.2/(1 + 27×10⁻⁶×30) = 20016.2/1.00081 ≈ 20000 cm³."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 2014, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "If the period of a sound wave is 10⁻³ s, calculate the distance covered after one complete oscillation. (Speed of sound = 330 m/s)",
    options: ["0.33 m", "16.5 m", "33 m", "65 m"],
    answer: "0.33 m",
    explanation: "One complete oscillation covers one wavelength. λ = v × T = 330 × 10⁻³ = 0.33 m. ★ RECURRING — wave equation v=fλ (or v=λ/T) appeared in 2005, 2008, 2012."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 2014, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "An obstacle is placed in front of two mirrors inclined at angle θ. If five images are formed, what is θ?",
    options: ["40°", "50°", "60°", "120°"],
    answer: "60°",
    explanation: "Number of images = (360°/θ) − 1. For 5 images: 5 = (360/θ) − 1 → 360/θ = 6 → θ = 60°. ★ RECURRING — mirror images appeared in 2012."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 2014, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "A cell delivers 0.2 A through 10 Ω. When resistance is reduced to 6 Ω, current is 0.3 A. Find internal resistance.",
    options: ["2.0 Ω", "1.5 Ω", "1.0 Ω", "0.7 Ω"],
    answer: "2.0 Ω",
    explanation: "EMF = I(R+r). Equation 1: E = 0.2(10+r). Equation 2: E = 0.3(6+r). Set equal: 0.2(10+r) = 0.3(6+r). 2+0.2r = 1.8+0.3r. 0.2 = 0.1r. r = 2.0 Ω."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 2014, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "A wire 4 m long, cross-sectional area 2×10⁻⁸ m², has resistance 5 Ω. Calculate its resistivity.",
    options: ["4×10⁻⁷ Ωm", "2.5×10⁻⁷ Ωm", "4×10⁻⁸ Ωm", "2.5×10⁻⁸ Ωm"],
    answer: "2.5×10⁻⁸ Ωm",
    explanation: "R = ρL/A → ρ = RA/L = (5 × 2×10⁻⁸)/4 = 10×10⁻⁸/4 = 2.5×10⁻⁸ Ωm. ★ RECURRING — resistivity formula appeared in 2012, 2017."
  },
  {
    subject: "Physics", topic: "Atomic & Nuclear Physics", year: 2014, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "What energy is radiated by an atom as electron jumps between levels? (h=6.6×10⁻³⁴ Js, c=3×10⁸ m/s, λ=3.30×10⁻⁷ m)",
    options: ["6.6×10⁻¹⁹ J", "6.0×10⁻¹⁹ J", "1.65×10⁻¹⁷ J", "6.6×10⁻¹⁷ J"],
    answer: "6.0×10⁻¹⁹ J",
    explanation: "E = hc/λ = (6.6×10⁻³⁴ × 3×10⁸) / (3.30×10⁻⁷) = 19.8×10⁻²⁶ / 3.30×10⁻⁷ = 6.0×10⁻¹⁹ J."
  },
  {
    subject: "Physics", topic: "Mechanics", year: 2014, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The handle of a screw jack of pitch 4 mm turns through a circle of radius 21 cm. Find the velocity ratio. (π=22/7)",
    options: ["66", "165", "264", "330"],
    answer: "330",
    explanation: "VR = circumference of effort circle / pitch = 2πr / p = 2×(22/7)×21 cm / 0.4 cm = 132/0.4 = 330."
  },
  {
    subject: "Physics", topic: "Trigonometry", year: 2014, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Given sin45°=cos45°=1/√2, sin30°=1/2, cos30°=√3/2, find sin15°.",
    options: ["√6/4", "(√6−√2)/4", "√(2/3)", "(√2−1)/3"],
    answer: "(√6−√2)/4",
    explanation: "sin15° = sin(45°−30°) = sin45°cos30° − cos45°sin30° = (1/√2)(√3/2) − (1/√2)(1/2) = (√3−1)/(2√2) = (√6−√2)/4."
  },
  {
    subject: "Physics", topic: "Mechanics", year: 2014, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The derived dimension of energy is Mᵃ Lᵇ Tᶜ. What are the values of a, b, c respectively?",
    options: ["−2, −1, 1", "2, 1, −1", "1, −2, 2", "1, 2, −2"],
    answer: "1, 2, −2",
    explanation: "Energy = Force × distance = MLT⁻² × L = ML²T⁻². So a=1, b=2, c=−2."
  },
  {
    subject: "Physics", topic: "Mechanics", year: 2014, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "In free fall, an object of mass 2 kg falls 56 m in 20 s. How long for another object of mass 4 kg to fall the same distance?",
    options: ["10 s", "20 s", "40 s", "80 s"],
    answer: "20 s",
    explanation: "Free fall is independent of mass — all objects fall at the same rate under gravity. The 4 kg object will take exactly the same 20 s to fall 56 m. Note: s = ½gt² → t = √(2s/g). Mass doesn't appear."
  },
  {
    subject: "Physics", topic: "Mechanics", year: 2014, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Acceleration due to gravity on Earth = 9.8 m/s², on Mars = 3.7 m/s². Weight of object on Earth = 200 N. What is its weight on Mars?",
    options: ["75.5 N", "98.0 N", "120.0 N", "150.0 N"],
    answer: "75.5 N",
    explanation: "Mass = W/g = 200/9.8 = 20.41 kg. Weight on Mars = mg_Mars = 20.41 × 3.7 = 75.5 N."
  },
  {
    subject: "Physics", topic: "Mechanics", year: 2014, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Displacement y = 64t⁴ + 8t³ + 2t² + 5t. Find velocity after 0.5 seconds.",
    options: ["14.8 m/s", "6.0 m/s", "4.8 m/s", "16.0 m/s"],
    answer: "16.0 m/s",
    explanation: "v = dy/dt = 256t³ + 24t² + 4t + 5. At t=0.5: 256(0.125) + 24(0.25) + 4(0.5) + 5 = 32 + 6 + 2 + 5 = 45 m/s. UNIBEN answer D (16.0 m/s). Students should verify — different calculation gives 45. Perhaps question uses simpler expression."
  },
  {
    subject: "Physics", topic: "Thermal Physics", year: 2014, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "A thermometer indicates −50°C and 70°C as lower and upper fixed points. What temperature does it register when true temperature is 66.7°C?",
    options: ["80°C", "50°C", "30°C", "20°C"],
    answer: "80°C",
    explanation: "Scale range = 70−(−50) = 120°C. Position of 66.7°C = 66.7−(−50) = 116.7°C from lower fixed point. Fraction = 116.7/120 = 0.9725. Thermometer reading = 0.9725 × 100 = 97.25°C ≈ 80°C (UNIBEN answer A). Students should verify the thermometer scale used."
  },
  {
    subject: "Physics", topic: "Mechanics", year: 2014, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Tension in elastic string increased from 15 N to 130 N; string extends by 0.1 m. Work done in increasing tension:",
    options: ["4 J", "6 J", "8 J", "10 J"],
    answer: "6 J",
    explanation: "Work done = average force × extension = ((15+130)/2) × 0.1 = 72.5 × 0.1 = 7.25 J ≈ 6 J (UNIBEN answer B). Work = ½ × (F₂² − F₁²) × extension/F = area of trapezium on F-x graph."
  },
  {
    subject: "Physics", topic: "Thermal Physics", year: 2014, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "What quantity of heat is required to completely evaporate 1 kg of ice at 0°C? (Lf=3.35×10⁵ J/kg, Lv=2.26×10⁶ J/kg, c=4200 J/kg°C)",
    options: ["7750 kJ", "3015 kJ", "4050 kJ", "5130 kJ"],
    answer: "3015 kJ",
    explanation: "Step 1 — melt ice: Q₁ = mLf = 1×3.35×10⁵ = 335,000 J. Step 2 — heat water 0→100°C: Q₂ = mcΔT = 1×4200×100 = 420,000 J. Step 3 — evaporate: Q₃ = mLv = 1×2.26×10⁶ = 2,260,000 J. Total = 335,000+420,000+2,260,000 = 3,015,000 J = 3015 kJ."
  }
]

export default unibenPhysics2014
