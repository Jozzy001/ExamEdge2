// UNIBEN Post-UTME 2021 — Physics (Life Sciences & Medicine)
// 12 questions (Q5-10 and Q20-25 from 2021 General Paper)
// NOTE: 6 of these are IDENTICAL to Engineering 2020 — confirmed recurring!

const unibenLifePhysics2021 = [
  {
    subject: "Physics", topic: "Mechanics", year: 2021, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "A motor car is uniformly retarded and brought to rest from a speed of 90 km/h in 10 seconds. Find its acceleration.",
    options: ["25 m/s²", "2.5 m/s²", "-2.5 m/s²", "-25 m/s²"],
    answer: "-2.5 m/s²",
    explanation: "Convert: 90 km/h = 90×1000/3600 = 25 m/s. a = (v-u)/t = (0-25)/10 = -2.5 m/s². Negative because it is decelerating (retardation)."
  },
  {
    subject: "Physics", topic: "Thermal Physics", year: 2021, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Determine the quantity of heat, in joules, given out when a piece of iron of mass 40g and specific heat capacity 460 J/kgK cools from 70°C to 40°C.",
    options: ["552 J", "736 J", "1288 J", "368 J"],
    answer: "552 J",
    explanation: "Q = mcΔT = 0.040 kg × 460 J/kgK × (70-40) K = 0.040 × 460 × 30 = 552 J."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 2021, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    isHotTopic: true,
    question: "Which of the following is NOT a characteristic of the image formed in a plane mirror?",
    options: [
      "It is the same size as the object",
      "It is as far behind the mirror as the object is in front",
      "It is real",
      "It is laterally inverted"
    ],
    answer: "It is real",
    explanation: "A plane mirror forms a VIRTUAL image — it cannot be projected on a screen. All other characteristics are correct: same size, same distance behind mirror, laterally inverted. Virtual = the light rays do NOT actually pass through the image point. ★ RECURRING!"
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 2021, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "The angle between a plane mirror and an incident ray is 35°. Find the angle of reflection.",
    options: ["55°", "50°", "45°", "70°"],
    answer: "55°",
    explanation: "The angle of INCIDENCE is measured from the NORMAL (perpendicular to mirror). If the angle between the ray and the mirror is 35°, then the angle of incidence = 90° - 35° = 55°. By the law of reflection, angle of reflection = angle of incidence = 55°."
  },
  {
    subject: "Physics", topic: "Atomic & Nuclear Physics", year: 2021, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    isHotTopic: true,
    question: "Which of the following properties of radiations from radioactive substances is FALSE?",
    options: [
      "Gamma rays are deflected by a magnetic field",
      "Alpha particles are helium nuclei",
      "Beta rays are streams of high-energy electrons",
      "Beta rays are strongly deflected by a magnetic field"
    ],
    answer: "Gamma rays are deflected by a magnetic field",
    explanation: "Gamma rays are electromagnetic radiation with NO charge — they are NOT deflected by electric or magnetic fields. Alpha and beta particles ARE deflected (they are charged). Beta rays (electrons, negative charge) ARE strongly deflected by magnetic fields. ★★★ RECURRING — same question as Engineering 2019, 2020!"
  },
  {
    subject: "Physics", topic: "Mechanics", year: 2021, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "A machine with a velocity ratio of 6 requires 800J of work to raise a load of 640N through a vertical distance of 1m. Find the efficiency of the machine.",
    options: ["20%", "64%", "80%", "75%"],
    answer: "80%",
    explanation: "Useful work output = Force × distance = 640 × 1 = 640J. Efficiency = (useful output/input) × 100 = (640/800) × 100 = 80%."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 2021, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    isHotTopic: true,
    question: "Which of the following instruments produces a pure tone?",
    options: ["Vibrating strings", "Tuning fork", "Siren", "Violin"],
    answer: "Tuning fork",
    explanation: "A tuning fork produces a pure tone — a single frequency sinusoidal wave with no overtones or harmonics. Violins, vibrating strings, and sirens all produce complex tones with multiple harmonics. ★★★ RECURRING — appeared in Engineering 2020 and now 2021!"
  },
  {
    subject: "Physics", topic: "Atomic & Nuclear Physics", year: 2021, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    isHotTopic: true,
    question: "A certain radioactive source emits radiations that are deflected by both magnetic and electric fields. The radiations are:",
    options: ["Infrared rays", "X-rays", "Gamma rays", "Beta rays"],
    answer: "Beta rays",
    explanation: "Beta rays (fast-moving electrons) are negatively charged — they are deflected by BOTH electric and magnetic fields. Alpha particles are also deflected by both fields (positively charged). Gamma rays and infrared/X-rays are not deflected (no charge). ★★★ RECURRING — Engineering 2019, 2020, and now 2021!"
  },
  {
    subject: "Physics", topic: "Thermal Physics", year: 2021, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    isHotTopic: true,
    question: "Which of the following has the highest specific heat capacity?",
    options: ["Water", "Liquid hydrogen", "Copper", "Lead"],
    answer: "Water",
    explanation: "Water has the highest specific heat capacity of common substances ≈ 4200 J/kg°C. Copper ≈ 385, Lead ≈ 128. ★★★ RECURRING — Engineering 2018, 2019, 2020, AND now 2021!"
  },
  {
    subject: "Physics", topic: "Thermal Physics", year: 2021, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    isHotTopic: true,
    question: "Which of the following sources of energy is non-renewable?",
    options: ["Tides", "Solar", "Ocean waves", "Biomass"],
    answer: "Biomass",
    explanation: "Tides, solar, and ocean waves are renewable. Biomass can be classified as non-renewable when consumed faster than it regenerates. ★★★ RECURRING — Engineering 2020 and now 2021!"
  },
  {
    subject: "Physics", topic: "Mechanics", year: 2021, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    isHotTopic: true,
    question: "Calculate the work done by a bricklayer who lifted a cement block of mass 10 kg from the floor to a height of 2.5 m. (g = 9.8 m/s²)",
    options: ["284.0 J", "245.0 J", "224.5 J", "25.0 J"],
    answer: "245.0 J",
    explanation: "W = mgh = 10 × 9.8 × 2.5 = 245 J. ★★★ RECURRING — EXACT same question as Engineering 2020! Appeared in Life Sciences 2021 confirming this is the most tested Physics question in UNIBEN."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 2021, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    isHotTopic: true,
    question: "Determine the wavelength of the fundamental note of a guitar string 65 cm long.",
    options: ["65 cm", "260 cm", "195 cm", "130 cm"],
    answer: "130 cm",
    explanation: "For a string fixed at both ends: L = λ/2 → λ = 2L = 2 × 65 = 130 cm. ★★★ RECURRING — EXACT same question as Engineering 2020, Life Sciences 2009! Most tested Waves question in UNIBEN."
  }
]

export default unibenLifePhysics2021
