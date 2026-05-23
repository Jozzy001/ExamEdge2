// UNIBEN Post-UTME 2019/2020 — Physics
// 10 questions (Q11–20 from General Paper)
// Faculty: Engineering & Physical Sciences
// Analysis notes:
//   RECURRING: thermionic emission ★, parallel mirrors→infinity ★, power transmission ★
//   NEW: magnifying glass M=1+D/f, sintering, AC mean power, spring PE,
//        frequency from wavelength, electricity cost calculation

const unibenPhysics2019 = [
  {
    subject: "Physics", topic: "Waves & Optics", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "An observer with normal eyesight views an object with a magnifying glass of focal length 5 cm. The angular magnification is:",
    options: ["−6", "−5", "5", "6"],
    answer: "6",
    explanation: "Angular magnification for magnifying glass (image at near point D=25 cm): M = 1 + D/f = 1 + 25/5 = 1 + 5 = 6. (When image is at near point, M = 1+D/f. When image at infinity, M = D/f = 5.)"
  },
  {
    subject: "Physics", topic: "Mechanics", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The conversion of powdered magnet to solid blocks by the application of heat and great pressure is called:",
    options: ["Hardening", "Sintering", "Fluxing", "Magnetization"],
    answer: "Sintering",
    explanation: "Sintering is the process of compacting and forming a solid mass of material by heat and/or pressure without melting it to the point of liquefaction. Used in powder metallurgy to create solid magnetic blocks from powder."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "A 40 kW electric cable transmits electricity through a 2 Ω resistor at 800 V. Power loss as internal energy:",
    options: ["5×10² W", "4×10³ W", "5×10³ W", "4×10² W"],
    answer: "5×10³ W",
    explanation: "Current I = P/V = 40,000/800 = 50 A. Power loss = I²R = 50² × 2 = 2500 × 2 = 5,000 W = 5×10³ W. ★ This shows why high-voltage transmission is preferred — same power at higher V means lower I and much lower I²R losses."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "BEDC charges 5k per kWh. Cost of operating for 24 hours a lamp requiring 1 A on a 200 V line:",
    options: ["24k", "55k", "40k", "26k"],
    answer: "24k",
    explanation: "Power = IV = 1 × 200 = 200 W = 0.2 kW. Energy = P × t = 0.2 × 24 = 4.8 kWh. Cost = 4.8 × 5 kobo = 24 kobo."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "A sinusoidal AC with peak voltage 20 V is connected across a 10 Ω resistor. Mean power dissipated:",
    options: ["10 W", "40 W", "20 W", "16 W"],
    answer: "20 W",
    explanation: "V_rms = V_peak/√2 = 20/√2. P_mean = V_rms²/R = (20/√2)²/10 = 400/2/10 = 200/10 = 20 W. Alternatively: P = V_peak²/(2R) = 400/20 = 20 W."
  },
  {
    subject: "Physics", topic: "Atomic & Nuclear Physics", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Electrons were discovered by:",
    options: ["Dalton", "James Chadwick", "J.J. Thomson", "Niels Bohr"],
    answer: "J.J. Thomson",
    explanation: "J.J. Thomson discovered the electron in 1897 through cathode ray tube experiments, showing cathode rays were streams of negatively charged particles. James Chadwick discovered the neutron (1932). Dalton proposed atomic theory (no sub-atomic particles). Bohr proposed the orbital model. ★ RECURRING — atomic history."
  },
  {
    subject: "Physics", topic: "Atomic & Nuclear Physics", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The reason for heating a valve cathode is to:",
    options: [
      "Indicate that it is switched on",
      "Cause photoelectric emission",
      "Cause thermionic emission",
      "Prevent secondary emission"
    ],
    answer: "Cause thermionic emission",
    explanation: "Thermionic emission: when a metal is heated sufficiently, electrons gain enough thermal energy to escape from the metal surface. A valve cathode is heated precisely to release electrons by thermionic emission. Photoelectric emission uses light, not heat. ★ RECURRING — thermionic emission appeared in 2005, 2009."
  },
  {
    subject: "Physics", topic: "Atomic & Nuclear Physics", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "A radioactive source emits X-rays of wavelength 10⁻¹¹ m. What is the frequency of these rays?",
    options: ["2×10¹⁸ Hz", "3×10¹⁹ Hz", "3×10²⁰ Hz", "3×10²¹ Hz"],
    answer: "3×10¹⁹ Hz",
    explanation: "f = c/λ = (3×10⁸)/(10⁻¹¹) = 3×10⁸⁺¹¹ = 3×10¹⁹ Hz. ★ RECURRING — wave equation v=fλ appeared every year."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "A man standing between two parallel mirrors in a barber's shop will see the following number of his own images:",
    options: ["8", "2", "4", "Infinity"],
    answer: "Infinity",
    explanation: "Two parallel plane mirrors facing each other create an infinite series of reflections — each image is reflected again in the opposite mirror, creating images within images without end. Theoretically infinite images are formed. ★ RECURRING — mirror images appeared in 2014 (inclined)."
  },
  {
    subject: "Physics", topic: "Mechanics", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "A spring of force constant 1500 N/m is acted upon by a constant force of 75 N. Calculate the potential energy stored in the spring.",
    options: ["1.9 J", "3.2 J", "3.8 J", "5.0 J"],
    answer: "1.9 J",
    explanation: "Extension x = F/k = 75/1500 = 0.05 m. PE = ½kx² = ½ × 1500 × (0.05)² = 750 × 0.0025 = 1.875 J ≈ 1.9 J. ★ RECURRING — spring potential energy appeared in 2008."
  }
]

export default unibenPhysics2019
