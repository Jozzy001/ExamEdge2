// UNIBEN Post-UTME 2010/2011 — Physics
// 10 questions (Q61–70 from General Paper)
// Faculty: Engineering & Physical Sciences
// RECURRING: projectile max range ★, nuclear fusion ★, thermometry ★
// NEW: relative density, moment of force, organ pipe ratio, free fall

const unibenPhysics2010 = [
  {
    subject: "Physics", topic: "Mechanics", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "An orange falls from a height of 20 m. How long does it take to reach the ground? (g = 10 m/s²)",
    options: ["2.0 s", "0.5 s", "1.6 s", "4.0 s"],
    answer: "2.0 s",
    explanation: "Using s = ut + ½gt²: 20 = 0 + ½×10×t² = 5t². t² = 4. t = 2.0 s."
  },
  {
    subject: "Physics", topic: "Mechanics", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "A piece of stone weighs 80 g in air and 50 g when completely immersed in water. It weighs 65 g in liquid Y. What is the relative density of liquid Y?",
    options: ["0.2", "1.5", "0.5", "2.0"],
    answer: "0.5",
    explanation: "Upthrust in water = 80−50 = 30 g. Upthrust in liquid Y = 80−65 = 15 g. Relative density of Y = upthrust in Y / upthrust in water = 15/30 = 0.5."
  },
  {
    subject: "Physics", topic: "Mechanics", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "If the perpendicular distance ST = 5 m, the moment of a force of 10 N about point S is:",
    options: ["15 Nm", "50 Nm", "5 Nm", "0 Nm"],
    answer: "50 Nm",
    explanation: "Moment = Force × perpendicular distance = 10 × 5 = 50 Nm."
  },
  {
    subject: "Physics", topic: "Mechanics", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    isHotTopic: true,
    faculty: ["engineering", "physicalsciences"],
    question: "A ball is projected so as to attain maximum range. Determine the angle of projection.",
    options: ["15°", "30°", "60°", "45°"],
    answer: "45°",
    explanation: "Maximum range in projectile motion occurs at 45° to the horizontal. R = u²sin2θ/g; maximum when sin2θ = 1 → 2θ = 90° → θ = 45°. ★ RECURRING TOPIC."
  },
  {
    subject: "Physics", topic: "Mechanics", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "A truck of mass 8 kg initially at rest is accelerated at 2 m/s² for 3 seconds. The kinetic energy of the truck is:",
    options: ["144 J", "288 J", "480 J", "96 J"],
    answer: "144 J",
    explanation: "v = u + at = 0 + 2×3 = 6 m/s. KE = ½mv² = ½×8×36 = 144 J."
  },
  {
    subject: "Physics", topic: "Thermal Physics", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The two fixed points on a thermometer are 70 cm apart. When the thermometer reads 63 cm above the ice point, the temperature is:",
    options: ["63°C", "70°C", "90°C", "100°C"],
    answer: "90°C",
    explanation: "Temperature = (L − L₀)/(L₁₀₀ − L₀) × 100. = (63/70) × 100 = 90°C."
  },
  {
    subject: "Physics", topic: "Thermal Physics", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    isHotTopic: true,
    faculty: ["engineering", "physicalsciences"],
    question: "One advantage of alcohol over mercury as a thermometric liquid is that alcohol:",
    options: [
      "Expands more uniformly than mercury",
      "Is a better conductor of heat than mercury",
      "Has a lower freezing point than mercury",
      "Has a lower specific heat capacity"
    ],
    answer: "Has a lower freezing point than mercury",
    explanation: "Mercury freezes at −39°C; alcohol freezes at −115°C. Alcohol can measure much lower temperatures — its key advantage over mercury. Mercury expands more uniformly and conducts heat better. ★ RECURRING — mercury limitations appeared in 2009/2010."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "A closed organ pipe and an open organ pipe emit notes of the same pitch. The ratio of the length of their air columns is:",
    options: ["2:1", "1:1", "1:2", "1:4"],
    answer: "1:2",
    explanation: "Fundamental frequency: closed pipe f = v/4L; open pipe f = v/2L. For same pitch (same f): v/4L_closed = v/2L_open → L_closed/L_open = 2/4 = 1:2. Closed pipe is half the length of open pipe for same note."
  },
  {
    subject: "Physics", topic: "Atomic & Nuclear Physics", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    isHotTopic: true,
    faculty: ["engineering", "physicalsciences"],
    question: "The process by which protons combine to form helium atoms with a tremendous release of energy is called:",
    options: ["Thermionic emission", "Nuclear fusion", "Thermonuclear fission", "Photoelectric emission"],
    answer: "Nuclear fusion",
    explanation: "Nuclear fusion is the process of combining light nuclei (like hydrogen/protons) to form heavier nuclei (like helium), releasing tremendous energy — this is the energy source of the sun. ★ RECURRING — nuclear fusion also appeared in 2012/2013."
  }
]

export default unibenPhysics2010
