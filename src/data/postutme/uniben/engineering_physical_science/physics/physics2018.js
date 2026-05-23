// UNIBEN Post-UTME 2018/2019 — Physics
// 10 questions (Q11–20 from General Paper)
// Faculty: Engineering & Physical Sciences
// Analysis notes:
//   RECURRING: heater time ★, work=QV ★, centripetal force ★, floating body ★
//   NEW: capacitors in series + additional, power from charge transfer,
//        temperature Fahrenheit→Celsius range, pressure at depth ratio,
//        friction from kinetic energy, proton in magnetic field

const unibenPhysics2018 = [
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Two capacitances of 6 µF and 8 µF are connected in series. What additional capacitance connected in series gives a total capacitance of 3 µF?",
    options: ["30 µF", "10 µF", "24 µF", "16 µF"],
    answer: "24 µF",
    explanation: "Series combination of 6 µF and 8 µF: 1/C₁₂ = 1/6 + 1/8 = 4/24 + 3/24 = 7/24. C₁₂ = 24/7 µF ≈ 3.43 µF. Adding C₃ in series: 1/3 = 7/24 + 1/C₃ → 1/C₃ = 8/24 − 7/24 = 1/24. C₃ = 24 µF."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Compute the average power required to transfer 96,000 C of charge in 1 hour through a potential difference of 50 V.",
    options: ["126 W", "1.33×10³ W", "1.33×10² W", "13 W"],
    answer: "1.33×10³ W",
    explanation: "Work done W = QV = 96,000 × 50 = 4,800,000 J. Time = 1 hr = 3600 s. Power = W/t = 4,800,000/3600 = 1,333 W ≈ 1.33×10³ W."
  },
  {
    subject: "Physics", topic: "Thermal Physics", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "How long will it take to heat 2 kg of water from 25°C to 100°C using a 2200 W heater? (c = 4200 J/kg°C)",
    options: ["286 s", "572 s", "1,145 s", "2,290 s"],
    answer: "286 s",
    explanation: "Q = mcΔT = 2 × 4200 × (100−25) = 2 × 4200 × 75 = 630,000 J. Time = Q/P = 630,000/2200 = 286.4 ≈ 286 s. ★ RECURRING — heater/thermal power appeared in 2009, 2012."
  },
  {
    subject: "Physics", topic: "Thermal Physics", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Over 50 years, temperature extremes in Washington D.C. differed by 160°F. Express this range in Celsius.",
    options: ["64.4°C", "64.0°C", "64.1°C", "20.5°C"],
    answer: "64.4°C",
    explanation: "Temperature RANGE conversion: ΔT°C = ΔT°F × 5/9 = 160 × 5/9 = 88.9°C. UNIBEN answer A (64.4°C). Note: 64.4 = (160−32)×5/9 which applies to a single temperature conversion, not a range. Students: UNIBEN likely applied the point conversion formula: °C = (°F−32)×5/9. For a range, the correct answer is 88.9°C."
  },
  {
    subject: "Physics", topic: "Mechanics", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Divers A and B are at depths of 30 m and 60 m below the water surface. Atmospheric pressure = 10 m of water. Find P₂/P₁.",
    options: ["1", "2", "3", "4"],
    answer: "2",
    explanation: "P₁ = ρg(10+30) = 40ρg. P₂ = ρg(10+60) = 70ρg. P₂/P₁ = 70/40 = 7/4 = 1.75. UNIBEN answer B (2). If atmospheric pressure is excluded: P₂/P₁ = 60/30 = 2. UNIBEN likely excludes atmospheric component — students should verify."
  },
  {
    subject: "Physics", topic: "Mechanics", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "A body of mass 12 kg is thrown at 8 m/s across a horizontal surface and stops after 60 m. Find the frictional force.",
    options: ["16 N", "24 N", "9 N", "26 N"],
    answer: "6.4 N",
    explanation: "Using work-energy theorem: Friction force × distance = ½mv². F×60 = ½×12×64 = 384 J. F = 384/60 = 6.4 N. UNIBEN answer C (9 N). Using kinematics: v²=u²−2as → 0=64−2a×60 → a=64/120=0.533 m/s². F=ma=12×0.533=6.4 N. Students should verify which value UNIBEN intends."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Two points in an electric field have a potential difference of 3 V. What work is required to move a charge of 5 C between the points?",
    options: ["5 J", "14 J", "15 J", "30 J"],
    answer: "15 J",
    explanation: "W = QV = 5 × 3 = 15 J. ★ RECURRING — work done on charge appeared in 2009, 2014."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "A proton enters a magnetic field of flux density 1.5 T at velocity 2×10⁷ m/s at 30° to the field. Compute the force on the proton.",
    options: ["1.6×10⁻¹ N", "2.8×10⁻² N", "2.4×10⁻¹² N", "8.0×10⁻⁶ N"],
    answer: "2.4×10⁻¹² N",
    explanation: "F = qvBsinθ = 1.6×10⁻¹⁹ × 2×10⁷ × 1.5 × sin30° = 1.6×10⁻¹⁹ × 2×10⁷ × 1.5 × 0.5 = 1.6×10⁻¹⁹ × 1.5×10⁷ = 2.4×10⁻¹² N."
  },
  {
    subject: "Physics", topic: "Mechanics", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "A 1,000 kg car is driven around a circle of radius 30 m at 9 m/s. How much centripetal force is required?",
    options: ["700 N", "2,700 N", "3,700 N", "2,400 N"],
    answer: "2,700 N",
    explanation: "F = mv²/r = 1000 × 81/30 = 81,000/30 = 2,700 N. ★ RECURRING — centripetal force appeared in 2008, 2011."
  },
  {
    subject: "Physics", topic: "Mechanics", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "A plastic sphere floats in water (ρ=1000 kg/m³) with 0.5 of its volume submerged, and in oil with 0.4 submerged. Find the density of the oil.",
    options: ["800 kg/m³", "1200 kg/m³", "1250 kg/m³", "2000 kg/m³"],
    answer: "1250 kg/m³",
    explanation: "For floating equilibrium: weight = upthrust. In water: ρ_sphere×V×g = 0.5×ρ_water×V×g → ρ_sphere = 500 kg/m³. In oil: ρ_sphere×V×g = 0.4×ρ_oil×V×g → ρ_oil = ρ_sphere/0.4 = 500/0.4 = 1250 kg/m³. ★ RECURRING — floating/Archimedes appeared in 2009."
  }
]

export default unibenPhysics2018
