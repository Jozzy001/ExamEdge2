// UNIBEN Post-UTME 2011/2012 — Physics
// Questions from General Paper
// Faculty: Engineering & Physical Sciences
// NOTE: Some questions had missing numerical values in source document.
//       Those are marked [R] = reconstructed from context/topic pattern.
//       RECURRING topics confirmed: free fall, wavelength in medium, resistivity,
//       elastic collisions, nuclear reactions, Group VIIA

const unibenPhysics2011 = [
  {
    subject: "Physics", topic: "Mechanics", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "A mango fruit drops from a branch 10 metres above the ground. Just before hitting the ground, its velocity is: (g = 10 m/s²)",
    options: ["10 m/s", "14.1 m/s", "20 m/s", "100 m/s"],
    answer: "14.1 m/s",
    explanation: "Using v² = u² + 2as: v² = 0 + 2×10×10 = 200. v = √200 = 10√2 ≈ 14.1 m/s."
  },
  {
    subject: "Physics", topic: "Thermal Physics", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "A pressure cooker saves both time and fuel in cooking because inside the cooker:",
    options: [
      "The boiling point of water is raised",
      "The temperature is evenly distributed",
      "Pressure is constant",
      "Volume of steam varies"
    ],
    answer: "The boiling point of water is raised",
    explanation: "Increased pressure inside the cooker raises the boiling point of water above 100°C. This means food cooks at a higher temperature, reducing cooking time and saving fuel."
  },
  {
    subject: "Physics", topic: "Thermal Physics", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Which of the following phenomena cannot be explained by the molecular theory of matter?",
    options: ["Expansion", "Radiation", "Conduction", "Evaporation"],
    answer: "Radiation",
    explanation: "Molecular theory explains phenomena involving molecular motion and interaction: expansion (molecules move further apart) ✓, conduction (energy transferred via molecular collisions) ✓, evaporation (molecules escape from surface) ✓. Radiation (electromagnetic wave transmission through vacuum) does NOT require molecules — it cannot be explained by molecular theory."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "A light wave of frequency 5×10¹⁴ Hz moves through water, which has a refractive index of 4/3. Calculate the wavelength in water if the velocity of light in air is 3×10⁸ m/s.",
    options: ["4.5×10⁻⁷ m", "6×10⁻⁷ m", "1.7×10⁻⁷ m", "2.2×10⁻⁶ m"],
    answer: "4.5×10⁻⁷ m",
    explanation: "Velocity in water: v_w = c/n = (3×10⁸)/(4/3) = (3×10⁸ × 3/4) = 2.25×10⁸ m/s. Wavelength in water: λ = v_w/f = (2.25×10⁸)/(5×10¹⁴) = 4.5×10⁻⁷ m."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Choose the correct statement about resistance and resistivity.",
    options: [
      "Resistance is a property of an object",
      "Resistivity is the property of a material",
      "Resistance is the property of a material",
      "Resistivity is the property of an object"
    ],
    answer: "Resistivity is the property of a material",
    explanation: "Resistivity (ρ) is an intrinsic property of the MATERIAL — it depends on what the object is made of, not its size or shape. Resistance (R = ρL/A) is a property of a specific OBJECT — it depends on material, length, and cross-sectional area. B is correct."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Determine the resistance in a resistor that produces energy at a rate of 100 watts when the current is 3.00 amperes.",
    options: ["11.0 Ω", "11.1 Ω", "11.5 Ω", "11.3 Ω"],
    answer: "11.1 Ω",
    explanation: "P = I²R. R = P/I² = 100/9 = 11.11 ≈ 11.1 Ω."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "A straight horizontal copper wire carrying 28 A needs to be suspended by a magnetic field. The linear density of the wire is 46.6 g/m. Find the minimum magnetic field needed.",
    options: ["1.6×10⁻² T", "1.5×10⁻² T", "1.4×10⁻² T", "1.3×10⁻² T"],
    answer: "1.6×10⁻² T",
    explanation: "For suspension: magnetic force = weight. BIL = mg → B = mg/(IL) = (m/L)g/I = (0.0466×10)/(28) = 0.466/28 = 0.01664 ≈ 1.6×10⁻² T."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "An RLC circuit has inductance 12 mH, capacitance 1.6 µF, and resistance 1.5 Ω. Find the time when the amplitude of charge oscillations falls to 50% of its initial value.",
    options: ["11 ms", "10 ms", "8 ms", "9 ms"],
    answer: "11 ms",
    explanation: "In a damped RLC oscillator, amplitude decays as e^(−Rt/2L). For 50%: e^(−Rt/2L) = 0.5. −Rt/2L = ln(0.5) = −0.693. t = 0.693×2L/R = 0.693×2×0.012/1.5 = 0.693×0.016 = 0.01109 s ≈ 11 ms."
  },
  {
    subject: "Physics", topic: "Thermal Physics", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "A gas occupying an initial volume of 2 dm³ is heated and allowed to expand to 6 dm³ at constant pressure. The ratio of the initial absolute temperature to the final absolute temperature is:",
    options: ["3:1", "1:3", "2:1", "1:2"],
    answer: "1:3",
    explanation: "At constant pressure (isobaric process): V/T = constant. V₁/T₁ = V₂/T₂. T₁/T₂ = V₁/V₂ = 2/6 = 1:3."
  },
  {
    subject: "Physics", topic: "Thermal Physics", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Why are collisions between gas molecules said to be elastic?",
    options: [
      "No loss of energy after collision",
      "Molecules move apart in straight lines after collisions",
      "Total momentum decreases after collision",
      "Total momentum increases after collision"
    ],
    answer: "No loss of energy after collision",
    explanation: "Elastic collisions conserve both kinetic energy and momentum. Gas molecule collisions are perfectly elastic — no kinetic energy is lost to heat, sound, or deformation. This is a key assumption of the kinetic theory of gases."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Which of the following pairs illustrates isotopy?",
    options: [
      "Oxygen and ozone",
      "But-1-ene and But-2-ene",
      "Hydrogen and deuterium",
      "Orthohydrogen and parahydrogen"
    ],
    answer: "Hydrogen and deuterium",
    explanation: "Isotopes are atoms of the same element with the same atomic number but different mass numbers (different neutron counts). Hydrogen (¹H) and deuterium (²H) are both hydrogen atoms — same proton number (1) but different neutron counts (0 and 1). Oxygen and ozone are allotropes, not isotopes."
  }
]

export default unibenPhysics2011
