// UNIBEN Post-UTME 2020/2021 — Physics
// 9 questions (Q41–49 from General Paper)
// Faculty: Engineering & Physical Sciences
// Analysis notes:
//   RECURRING: local action ★, pure tone/tuning fork ★, beta rays deflection ★,
//              non-renewable energy ★, work done (mgh) ★
//   NEW: converging lens power P=1/f=2/R, solenoid magnetic behaviour,
//        highest specific heat capacity, guitar string fundamental wavelength

const unibenPhysics2020 = [
  {
    subject: "Physics", topic: "Waves & Optics", year: 2020, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "A converging lens has a radius of curvature of 16.0 cm. Calculate the power of the lens.",
    options: ["12.5 D", "1.25 D", "125.0 D", "0.125 D"],
    answer: "12.5 D",
    explanation: "For a thin lens with one curved surface: f = R/2 = 16/2 = 8 cm = 0.08 m. Power P = 1/f = 1/0.08 = 12.5 D (dioptres). Note: for a biconvex lens with both radii = 16cm, power would be different. UNIBEN uses f=R/2."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 2020, exam: "Post-UTME", university: "UNIBEN",
    isHotTopic: true,
    faculty: ["engineering", "physicalsciences"],
    question: "In a simple cell, mercury amalgamated zinc is used to minimize:",
    options: ["Sparking", "Local action", "Polarization", "Back e.m.f."],
    answer: "Local action",
    explanation: "Local action occurs due to impurities in the zinc electrode — these impurities form tiny local cells that consume the zinc internally without doing useful work. Mercury amalgam covers the zinc surface, preventing local action. ★ RECURRING — electrochemistry."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 2020, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "When a steady current flows through a solenoid P:",
    options: [
      "Both ends of P are south poles",
      "Both ends of P are north poles",
      "P settles in a north-south direction",
      "There is a magnetic field only at the ends of P"
    ],
    answer: "P settles in a north-south direction",
    explanation: "A current-carrying solenoid acts like a bar magnet — one end is N, the other S. When free to rotate (suspended), it aligns with Earth's magnetic field: the N end points toward geographic North → the solenoid settles in the N-S direction. The magnetic field exists throughout the solenoid, not just at the ends."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 2020, exam: "Post-UTME", university: "UNIBEN",
    isHotTopic: true,
    faculty: ["engineering", "physicalsciences"],
    question: "Which of the following instruments produces a pure tone?",
    options: ["Vibrating string", "Tuning fork", "Siren", "Violin"],
    answer: "Tuning fork",
    explanation: "A pure tone is a single-frequency sinusoidal wave with no overtones or harmonics. A tuning fork produces virtually a pure tone. Vibrating strings, sirens, and violins all produce complex sounds containing fundamental + multiple harmonics (overtones). ★ RECURRING — sound wave properties."
  },
  {
    subject: "Physics", topic: "Atomic & Nuclear Physics", year: 2020, exam: "Post-UTME", university: "UNIBEN",
    isHotTopic: true,
    faculty: ["engineering", "physicalsciences"],
    question: "A radioactive source emits radiations that are deflected by both magnetic and electric fields. The radiations are:",
    options: ["Infrared rays", "X-rays", "Gamma rays", "Beta rays"],
    answer: "Beta rays",
    explanation: "Beta rays (fast electrons, charge −1) are deflected by both electric and magnetic fields. Gamma rays and X-rays are electromagnetic radiation (no charge) — NOT deflected by fields. Alpha particles (charge +2) are also deflected, but beta rays are specifically named here. ★ RECURRING — radioactive emission properties."
  },
  {
    subject: "Physics", topic: "Thermal Physics", year: 2020, exam: "Post-UTME", university: "UNIBEN",
    isHotTopic: true,
    faculty: ["engineering", "physicalsciences"],
    question: "Which of the following has the highest specific heat capacity?",
    options: ["Water", "Liquid hydrogen", "Copper", "Lead"],
    answer: "Water",
    explanation: "Specific heat capacities: Water ≈ 4,200 J/kg°C (highest among common substances in Nigerian curriculum). Copper ≈ 385 J/kg°C. Lead ≈ 128 J/kg°C. (Liquid hydrogen ≈ 14,300 J/kg°C is actually higher, but UNIBEN curriculum answer is water.) ★ RECURRING — water has highest specific heat capacity."
  },
  {
    subject: "Physics", topic: "Atomic & Nuclear Physics", year: 2020, exam: "Post-UTME", university: "UNIBEN",
    isHotTopic: true,
    faculty: ["engineering", "physicalsciences"],
    question: "Which of the following sources of energy is non-renewable?",
    options: ["Tides", "Solar", "Ocean waves", "Biomass"],
    answer: "Biomass",
    explanation: "Non-renewable energy sources are finite and cannot be replenished within a human timescale. Tides ✓ (renewable — driven by gravitational forces). Solar ✓ (renewable). Ocean waves ✓ (renewable). Biomass — classified as non-renewable here because it can be depleted faster than it regenerates. ★ RECURRING — energy sources appeared in 2007, 2008."
  },
  {
    subject: "Physics", topic: "Mechanics", year: 2020, exam: "Post-UTME", university: "UNIBEN",
    isHotTopic: true,
    faculty: ["engineering", "physicalsciences"],
    question: "Calculate the work done by a bricklayer who lifted a cement block of mass 10 kg to a height of 2.5 m. (g = 9.8 m/s²)",
    options: ["294.0 J", "245.0 J", "24.5 J", "25.0 J"],
    answer: "245.0 J",
    explanation: "W = mgh = 10 × 9.8 × 2.5 = 245.0 J. ★ RECURRING — work done against gravity (W=mgh) appeared in every year."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 2020, exam: "Post-UTME", university: "UNIBEN",
    isHotTopic: true,
    faculty: ["engineering", "physicalsciences"],
    question: "Determine the wavelength of the fundamental note produced by a guitar string 65 cm long.",
    options: ["65 cm", "130 cm", "295 cm", "160 cm"],
    answer: "130 cm",
    explanation: "For a string fixed at both ends, the fundamental (1st harmonic) has a node at each end with one antinode in the middle. The string length = λ/2. Therefore λ = 2L = 2 × 65 = 130 cm. ★ RECURRING — stationary waves in strings."
  }
]

export default unibenPhysics2020
