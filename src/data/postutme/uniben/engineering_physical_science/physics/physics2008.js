// UNIBEN Post-UTME 2008/2009 — Physics
// 13 questions from General Paper
// Faculty: Engineering & Physical Sciences
// Analysis: EM spectrum ★RECURRING, gravitational inverse square ★RECURRING,
//           Franck-Hertz experiment, thermionic emission, semiconductor doping ★RECURRING

const unibenPhysics2008 = [
  {
    subject: "Physics", topic: "Waves & Optics", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Which of the following waves is both mechanical and transverse?",
    options: ["X-rays", "Water waves", "Sound waves", "Radio waves"],
    answer: "Water waves",
    explanation: "Mechanical waves require a medium to travel. Transverse waves have vibration perpendicular to direction of travel. Water waves satisfy both: they need water (mechanical) and oscillate up and down perpendicularly (transverse). Sound waves are mechanical but longitudinal. X-rays and radio waves are electromagnetic (not mechanical)."
  },
  {
    subject: "Physics", topic: "Thermal Physics", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Land and sea breezes may be explained in terms of differences in:",
    options: [
      "Specific latent heat of fusion",
      "Specific latent heat of vaporization",
      "Latent heat of vaporization",
      "Specific heat capacities"
    ],
    answer: "Specific heat capacities",
    explanation: "Land heats up and cools down faster than sea because land has a lower specific heat capacity than water. During the day, land is hotter → air rises → sea breeze blows inland. At night, land cools faster → sea is warmer → land breeze blows seaward. Specific heat capacity is the key difference."
  },
  {
    subject: "Physics", topic: "Mechanics", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "A uniform metre rule is pivoted at the 35 cm mark. A mass of 50 g is hung at the 15 cm mark and the rule balances horizontally. Find the mass of the metre rule.",
    options: ["50 g", "66.7 g", "75 g", "77.7 g"],
    answer: "66.7 g",
    explanation: "Centre of gravity of uniform rule = 50 cm mark. Taking moments about pivot (35 cm): Anticlockwise: 50g × (35−15) = 50 × 20 = 1000 g·cm. Clockwise: M × (50−35) = M × 15. Setting equal: M × 15 = 1000. M = 66.7 g."
  },
  {
    subject: "Physics", topic: "Atomic & Nuclear Physics", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Which of the following colours produces a photoelectron with the highest kinetic energy?",
    options: ["Red", "Yellow", "Blue", "Green"],
    answer: "Blue",
    explanation: "Photoelectric effect: KE = hf − φ (work function). Higher frequency = more kinetic energy. Of the options, blue light has the highest frequency (shortest wavelength). Order: Red < Yellow < Green < Blue. Blue gives the highest kinetic energy to ejected photoelectrons."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    isHotTopic: true,
    faculty: ["engineering", "physicalsciences"],
    question: "Which of the following radiations are arranged in ascending order of frequency?",
    options: [
      "Gamma rays, X-rays, Radio waves",
      "Radio waves, Visible light, X-rays",
      "Gamma rays, Radio waves, X-rays",
      "Visible light, X-rays, Radio waves"
    ],
    answer: "Radio waves, Visible light, X-rays",
    explanation: "EM spectrum in ascending frequency order: Radio < Microwave < Infrared < Visible < UV < X-rays < Gamma. From the options: Radio waves (lowest) → Visible light → X-rays (higher) is the only correctly ascending sequence. ★ RECURRING TOPIC — appeared in 2006/2007 and 2007/2008."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "A broadcasting station sends out waves of wavelength 400 m. What is the frequency? (velocity = 3.0×10⁸ m/s)",
    options: ["7.5×10⁵ Hz", "7.5×10⁶ Hz", "1.0×10⁶ Hz", "1.0×10⁵ Hz"],
    answer: "7.5×10⁵ Hz",
    explanation: "Using v = fλ: f = v/λ = (3.0×10⁸)/400 = 3.0×10⁸/4×10² = 0.75×10⁶ = 7.5×10⁵ Hz."
  },
  {
    subject: "Physics", topic: "Mechanics", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    isHotTopic: true,
    faculty: ["engineering", "physicalsciences"],
    question: "The gravitational force on a 1 kg mass at Earth's surface is 10 N. Calculate the force on a 100 kg satellite at a distance of 2R from Earth's centre.",
    options: ["250 N", "220 N", "120 N", "110 N"],
    answer: "250 N",
    explanation: "g at surface = 10 N/kg. At distance 2R: g' = g/4 = 2.5 N/kg (inverse square law). Force on 100 kg = 100 × 2.5 = 250 N. ★ RECURRING TOPIC — inverse square law appeared in 2006/2007."
  },
  {
    subject: "Physics", topic: "Atomic & Nuclear Physics", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Which experiment confirms the existence of quantized energy levels in atoms?",
    options: ["Rutherford's experiment", "Franck-Hertz experiment", "Stern's experiment", "Lenard's experiment"],
    answer: "Franck-Hertz experiment",
    explanation: "The Franck-Hertz experiment (1914) confirmed Bohr's theory of quantized energy levels by showing that electrons could only transfer specific discrete amounts of energy to mercury atoms — proving energy levels are quantized. Rutherford's experiment revealed the nuclear model."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The balance lengths of a cell of unknown EMF E and a Daniell cell of EMF 1.08 V are 80 cm and 48 cm respectively. Find E.",
    options: ["1.5 V", "1.8 V", "2.0 V", "2.5 V"],
    answer: "1.8 V",
    explanation: "In a potentiometer: E₁/E₂ = L₁/L₂. E/1.08 = 80/48. E = 1.08 × (80/48) = 1.08 × 5/3 = 1.8 V."
  },
  {
    subject: "Physics", topic: "Atomic & Nuclear Physics", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The emission of electrons due to heating is known as:",
    options: ["Field emission", "Cold cathode emission", "Thermionic emission", "Secondary emission"],
    answer: "Thermionic emission",
    explanation: "Thermionic emission is the release of electrons from a heated metal surface. Thermal energy gives electrons enough energy to overcome the work function. This is the basis of cathode ray tubes, vacuum tubes, and X-ray tubes. Field emission uses strong electric fields; secondary emission uses electron bombardment."
  },
  {
    subject: "Physics", topic: "Electronics & Semiconductors", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    isHotTopic: true,
    faculty: ["engineering", "physicalsciences"],
    question: "Doping a semiconductor with impurities:",
    options: ["Decreases conductivity", "Increases resistivity", "Increases conductivity", "Has no effect"],
    answer: "Increases conductivity",
    explanation: "Doping introduces pentavalent (n-type) or trivalent (p-type) impurities into a semiconductor, creating extra free electrons or holes. This dramatically increases the number of charge carriers and therefore increases electrical conductivity (decreases resistivity). ★ RECURRING TOPIC — appeared every year since 2005."
  },
  {
    subject: "Physics", topic: "Atomic & Nuclear Physics", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Which of the following serves as a moderator in a nuclear reactor?",
    options: ["Cadmium rods", "Boron rods", "Aluminium rods", "Heavy water"],
    answer: "Heavy water",
    explanation: "A moderator slows down fast neutrons to thermal energies to sustain the chain reaction. Heavy water (D₂O) and graphite are common moderators. Cadmium and boron rods are CONTROL rods — they absorb neutrons to regulate reaction rate. Aluminium is a structural material."
  },
  {
    subject: "Physics", topic: "Mechanics", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Which of the following statements is true of liquids and gases?\nI. Both are fluids\nII. Their particles are in constant motion\nIII. Both are compressible\nIV. Boyle's law applies to both",
    options: ["I and II only", "II only", "I and III only", "IV only"],
    answer: "I and II only",
    explanation: "I — TRUE: Both liquids and gases are fluids (they flow). II — TRUE: Kinetic theory applies to both. III — FALSE: Liquids are essentially incompressible; only gases are compressible. IV — FALSE: Boyle's law (PV=constant) applies only to ideal gases, not liquids. Answer: I and II only."
  }
]

export default unibenPhysics2008
