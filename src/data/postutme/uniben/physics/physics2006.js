// UNIBEN Post-UTME 2006/2007 — Physics
// 9 questions extracted from General Paper
// Split from general paper for better subject tracking and weak area analysis

const unibenPhysics2006 = [
  {
    subject: "Physics",
    topic: "Electricity & Magnetism",
    year: 2006,
    exam: "Post-UTME",
    university: "UNIBEN",
    question: "A lamp is rated 240 V, 60 W. The resistance of the filament is:",
    options: ["960 Ω", "16 Ω", "15 Ω", "4 Ω"],
    answer: "960 Ω",
    explanation: "Using P = V²/R → R = V²/P = 240²/60 = 57600/60 = 960 Ω. This formula applies when voltage and power are given. Do not confuse with P = I²R or P = IV."
  },
  {
    subject: "Physics",
    topic: "Atomic & Nuclear Physics",
    year: 2006,
    exam: "Post-UTME",
    university: "UNIBEN",
    question: "The number of neutrons in the nucleus of ²³⁸₉₂U is:",
    options: ["92", "146", "238", "330"],
    answer: "146",
    explanation: "Number of neutrons = Mass number − Atomic number = 238 − 92 = 146. The atomic number (92) gives protons; the mass number (238) gives total nucleons (protons + neutrons)."
  },
  {
    subject: "Physics",
    topic: "Electricity & Magnetism",
    year: 2006,
    exam: "Post-UTME",
    university: "UNIBEN",
    question: "Which of the following is most suitable for use as an ammeter?",
    options: ["Mercury barometer", "Fortin barometer", "Mercury manometer", "Galvanometer"],
    answer: "Galvanometer",
    explanation: "A galvanometer measures small electric currents and is converted into an ammeter by connecting a low-resistance shunt in parallel. Barometers measure atmospheric pressure; manometers measure gas pressure — none are electrical instruments."
  },
  {
    subject: "Physics",
    topic: "Waves & Optics",
    year: 2006,
    exam: "Post-UTME",
    university: "UNIBEN",
    question: "When a plane mirror is rotated through an angle θ, the reflected ray is deflected through:",
    options: ["½θ", "θ", "2θ", "3θ"],
    answer: "2θ",
    explanation: "When a mirror rotates by θ, the normal also rotates by θ. Since the angle of incidence increases by θ, the angle of reflection also increases by θ. The total deflection of the reflected ray = 2θ. This is the mirror rotation law."
  },
  {
    subject: "Physics",
    topic: "Electricity & Magnetism",
    year: 2006,
    exam: "Post-UTME",
    university: "UNIBEN",
    question: "Which of the following obeys Ohm's law?",
    options: ["Glass", "Diode", "All electrolytes", "All metals"],
    answer: "All metals",
    explanation: "Ohm's law (V = IR, constant resistance) is obeyed by metallic conductors at constant temperature. Diodes, electrolytes, and glass all have non-linear V-I relationships — resistance changes with voltage or temperature."
  },
  {
    subject: "Physics",
    topic: "Electricity & Magnetism",
    year: 2006,
    exam: "Post-UTME",
    university: "UNIBEN",
    question: "A DC generator has essentially the same components as an AC generator except for the presence of:",
    options: ["Slip rings", "Carbon brushes", "Split ring", "Armature"],
    answer: "Split ring",
    explanation: "A DC generator uses a split-ring commutator which reverses connections every half turn, converting the alternating EMF to direct current. An AC generator uses slip rings which maintain continuous contact without reversing. The split ring (commutator) is the key difference. ★ RECURRING TOPIC"
  },
  {
    subject: "Physics",
    topic: "Electronics & Semiconductors",
    year: 2006,
    exam: "Post-UTME",
    university: "UNIBEN",
    question: "A Zener diode is used for:",
    options: ["Power amplification", "Current amplification", "Voltage regulation", "Energy conversion"],
    answer: "Voltage regulation",
    explanation: "A Zener diode operates in reverse breakdown and maintains a nearly constant voltage across it regardless of current — making it ideal for voltage regulation in power supplies."
  },
  {
    subject: "Physics",
    topic: "Electronics & Semiconductors",
    year: 2006,
    exam: "Post-UTME",
    university: "UNIBEN",
    question: "When a pure semiconductor is heated, its resistance:",
    options: ["Increases", "Decreases", "Remains the same", "Increases and then decreases"],
    answer: "Decreases",
    explanation: "Semiconductors have a negative temperature coefficient (NTC) — as temperature increases, more electron-hole pairs are generated, increasing charge carriers and decreasing resistance. This is the opposite of metallic conductors. ★ RECURRING TOPIC"
  },
  {
    subject: "Physics",
    topic: "Waves & Optics",
    year: 2006,
    exam: "Post-UTME",
    university: "UNIBEN",
    question: "The energy carried by electromagnetic radiation depends on its:",
    options: ["Intensity", "Velocity", "Mass", "Frequency"],
    answer: "Frequency",
    explanation: "E = hf (Planck's equation), where h is Planck's constant and f is frequency. Energy is directly proportional to frequency. Higher frequency = more energy (e.g. gamma rays more energetic than radio waves). Electromagnetic radiation has no mass."
  }
]

export default unibenPhysics2006
