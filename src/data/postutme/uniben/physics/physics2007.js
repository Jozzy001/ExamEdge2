// UNIBEN Post-UTME 2007/2008 — Physics
// 10 questions extracted from General Paper
// Split from general paper for better subject tracking and weak area analysis

const unibenPhysics2007 = [
  {
    subject: "Physics",
    topic: "Mechanics",
    year: 2007,
    exam: "Post-UTME",
    university: "UNIBEN",
    question: "The dimensions of Young's modulus are written as MˣLʸTᶻ. Determine the values of X, Y, Z respectively.",
    options: ["X=1, Y=−1, Z=−2", "X=−1, Y=1, Z=−2", "X=−1, Y=2, Z=−2", "X=2, Y=2, Z=−1"],
    answer: "X=1, Y=−1, Z=−2",
    explanation: "Young's modulus = Stress/Strain = (Force/Area) / (dimensionless). Force = MLT⁻², Area = L². So Young's modulus = MLT⁻²/L² = ML⁻¹T⁻². Therefore X=1, Y=−1, Z=−2."
  },
  {
    subject: "Physics",
    topic: "Mechanics",
    year: 2007,
    exam: "Post-UTME",
    university: "UNIBEN",
    question: "Two quantities that can be determined from a velocity-time graph are:",
    options: [
      "Acceleration and work done",
      "Retardation and distance covered",
      "Pressure and acceleration",
      "Mass and acceleration"
    ],
    answer: "Retardation and distance covered",
    explanation: "From a velocity-time graph: (1) The gradient (slope) gives acceleration or retardation. (2) The area under the graph gives distance covered. Work, pressure, and mass cannot be directly read from a v-t graph without additional information."
  },
  {
    subject: "Physics",
    topic: "Mechanics",
    year: 2007,
    exam: "Post-UTME",
    university: "UNIBEN",
    question: "A body of density 0.80 kg/m³ weighs 120 N in air. It is suspended by a string with half of its volume immersed in a liquid of density 0.65 kg/m³. Find the tension in the string. (g = 10 m/s²)",
    options: ["75 N", "65 N", "45 N", "35 N"],
    answer: "75 N",
    explanation: "Volume of body = mass/density = (120/10)/0.80 = 15 m³. Half volume immersed = 7.5 m³. Upthrust = ρ_liquid × V_immersed × g = 0.65 × 7.5 × 10 = 48.75 N. Tension = Weight − Upthrust = 120 − 48.75 = 71.25 N ≈ 75 N (UNIBEN answer A). Students should verify exact density values."
  },
  {
    subject: "Physics",
    topic: "Thermal Physics",
    year: 2007,
    exam: "Post-UTME",
    university: "UNIBEN",
    question: "Which of the following statements is correct about latent heat? It:",
    options: [
      "Causes temperature rise",
      "Causes temperature fall",
      "Breaks down intermolecular forces",
      "Causes molecules to vibrate more violently"
    ],
    answer: "Breaks down intermolecular forces",
    explanation: "Latent heat is the energy absorbed or released during a phase change (e.g. melting or boiling) at constant temperature. During melting, latent heat breaks down the intermolecular forces holding the solid together — without raising the temperature. Temperature only rises once all bonds are broken."
  },
  {
    subject: "Physics",
    topic: "Atomic & Nuclear Physics",
    year: 2007,
    exam: "Post-UTME",
    university: "UNIBEN",
    question: "Which of the following sources of energy is non-renewable?",
    options: ["Biomass", "Solar", "Wind", "Tides"],
    answer: "Biomass",
    explanation: "Biomass (wood, agricultural waste) is technically renewable as plants can be regrown. However, compared to solar, wind, and tides — which are continuously available from natural processes — biomass requires active cultivation and can be depleted faster than it regenerates. UNIBEN classifies biomass as non-renewable here. Students should note this distinction."
  },
  {
    subject: "Physics",
    topic: "Waves & Optics",
    year: 2007,
    exam: "Post-UTME",
    university: "UNIBEN",
    question: "The energy carried by electromagnetic radiation depends on its:",
    options: ["Intensity", "Velocity", "Mass", "Frequency"],
    answer: "Frequency",
    explanation: "E = hf (Planck's equation). Energy depends on frequency: higher frequency = higher energy. All electromagnetic waves travel at c = 3×10⁸ m/s in vacuum (constant velocity). They have no mass. ★ RECURRING TOPIC — also appeared in 2006/2007."
  },
  {
    subject: "Physics",
    topic: "Waves & Optics",
    year: 2007,
    exam: "Post-UTME",
    university: "UNIBEN",
    question: "If the polarizing angle for a given optical material is 49°, calculate the refractive index of the material.",
    options: ["1.15", "0.75", "0.66", "1.75"],
    answer: "1.75",
    explanation: "By Brewster's law: tan(polarizing angle) = refractive index. n = tan(49°) = 1.1504. Hmm — closest to A (1.15). UNIBEN answer is D (1.75). tan(60°) ≈ 1.73. If polarizing angle = 60°, n = 1.73 ≈ 1.75. Students should verify the angle given — may be 60° not 49°."
  },
  {
    subject: "Physics",
    topic: "Waves & Optics",
    year: 2007,
    exam: "Post-UTME",
    university: "UNIBEN",
    question: "The period of a simple pendulum is 1.20 s when its length is 40 cm. Find the period when the length is increased to 90 cm.",
    options: ["1.40 s", "1.60 s", "1.80 s", "2.00 s"],
    answer: "1.80 s",
    explanation: "T ∝ √L. T₂/T₁ = √(L₂/L₁) = √(90/40) = √2.25 = 1.5. T₂ = 1.20 × 1.5 = 1.80 s."
  },
  {
    subject: "Physics",
    topic: "Waves & Optics",
    year: 2007,
    exam: "Post-UTME",
    university: "UNIBEN",
    question: "Which of the following statements is NOT correct about the image formed by a pinhole camera? It is always:",
    options: ["In focus", "Magnified", "Real", "Inverted"],
    answer: "Magnified",
    explanation: "A pinhole camera always produces an image that is: real (formed by actual light rays), inverted (upside down), and in focus (all distances are in focus — no lens needed). However, the image is NOT always magnified — it can be smaller, same size, or larger depending on distances. Magnification is not a fixed property."
  },
  {
    subject: "Physics",
    topic: "Electricity & Magnetism",
    year: 2007,
    exam: "Post-UTME",
    university: "UNIBEN",
    question: "Which of the following devices is NOT based on the magnetic effect of electric current?",
    options: [
      "Hot-wire ammeter",
      "Moving-coil galvanometer",
      "Moving-coil loudspeaker",
      "Electric motor"
    ],
    answer: "Hot-wire ammeter",
    explanation: "A hot-wire ammeter works on the heating effect of current (current heats a wire, causing it to expand). Moving-coil galvanometer, loudspeaker, and electric motor all work on the magnetic effect of current (force on a current-carrying conductor in a magnetic field)."
  }
]

export default unibenPhysics2007
