// UNIBEN Post-UTME 2009 — Physics (Life Sciences & Medicine)
// 14 questions (Q31-44 from 2009 General Paper)

const unibenLifePhysics2009 = [
  {
    subject: "Physics", topic: "Mechanics", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Which of the following is a vector quantity?",
    options: ["Distance", "Speed", "Energy", "Weight"],
    answer: "Weight",
    explanation: "Weight is a force (mass × g) — it has both magnitude AND direction (downward toward Earth's centre). Distance, speed, and energy are scalars (magnitude only)."
  },
  {
    subject: "Physics", topic: "Mechanics", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    isHotTopic: true,
    question: "Calculate the work done by a bricklayer who lifted a cement block of mass 10 kg to a height of 3 m. (g = 9.8 m/s²)",
    options: ["294.0 J", "240.0 J", "30.0 J", "25.0 J"],
    answer: "294.0 J",
    explanation: "W = mgh = 10 × 9.8 × 3 = 294 J. ★ RECURRING — work done by bricklayer is a standard UNIBEN question. Compare: 2020 Engineering used 2.5m giving 245J; here 3m gives 294J."
  },
  {
    subject: "Physics", topic: "Mechanics", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Find the potential energy of a diver of mass 75 kg at a height of 10 m above a swimming pool. (g = 9.8 m/s²)",
    options: ["7.35 kJ", "9.41 kJ", "8.82 kJ", "0.75 kJ"],
    answer: "7.35 kJ",
    explanation: "PE = mgh = 75 × 9.8 × 10 = 7350 J = 7.35 kJ."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    isHotTopic: true,
    question: "Determine the wavelength of the fundamental note of a guitar string 65 cm long.",
    options: ["65 cm", "260 cm", "135 cm", "130 cm"],
    answer: "130 cm",
    explanation: "For a string fixed at both ends, the fundamental mode has L = λ/2. So λ = 2L = 2 × 65 = 130 cm. ★ RECURRING — this exact question appeared in Engineering 2020."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Find the combined resistance of two wires each of resistance 8 Ω when connected in parallel.",
    options: ["16 Ω", "4 Ω", "20 Ω", "12 Ω"],
    answer: "4 Ω",
    explanation: "For two equal resistors in parallel: R_total = R/2 = 8/2 = 4 Ω. General formula: 1/R = 1/R₁ + 1/R₂ = 1/8 + 1/8 = 2/8. R = 4 Ω."
  },
  {
    subject: "Physics", topic: "Mechanics", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "A force of 300 N is used to pull a load up an inclined plane of length 6.2 m and height 3.5 m. Determine the velocity ratio.",
    options: ["0.57", "1.31", "1.57", "1.77"],
    answer: "1.77",
    explanation: "Velocity ratio (VR) of inclined plane = Length/Height = 6.2/3.5 = 1.77. VR tells how many times the effort distance is greater than the load distance."
  },
  {
    subject: "Physics", topic: "Gases & Kinetic Theory", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "120 cm³ of gas was collected at 20°C and 745 mmHg. Find the volume at STP.",
    options: ["605.7 cm³", "917.8 cm³", "305.1 cm³", "109.6 cm³"],
    answer: "109.6 cm³",
    explanation: "STP: T₂=273K, P₂=760mmHg. P₁V₁/T₁ = P₂V₂/T₂. V₂ = (P₁V₁T₂)/(T₁P₂) = (745×120×273)/(293×760) = 24,400,200/222,680 = 109.6 cm³."
  },
  {
    subject: "Physics", topic: "Thermal Physics", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "A metal rod of length 30 cm is heated through 60°C and expands to 30.04 cm. Calculate its linear expansivity.",
    options: ["4.44×10⁻⁵ K⁻¹", "2.22×10⁻⁵ K⁻¹", "3.33×10⁻⁵ K⁻¹", "1.53×10⁻⁵ K⁻¹"],
    answer: "2.22×10⁻⁵ K⁻¹",
    explanation: "Linear expansivity α = ΔL/(L₀ × ΔT) = 0.04/(30 × 60) = 0.04/1800 = 2.22×10⁻⁵ K⁻¹."
  },
  {
    subject: "Physics", topic: "Gases & Kinetic Theory", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Which of the following statements is NOT correct?",
    options: [
      "Molecules of a liquid are stationary",
      "Atoms combine to form molecules",
      "Molecules of matter are in constant motion",
      "Brownian motion is evidence of particulate nature of matter"
    ],
    answer: "Molecules of a liquid are stationary",
    explanation: "Molecules of a liquid are NOT stationary — they move continuously but less freely than gas molecules (they can slide past each other). Kinetic theory: all matter has molecules in constant motion."
  },
  {
    subject: "Physics", topic: "Mechanics", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Determine the elastic constant of a spring if a force of 1 N stretches it by 2.7 cm.",
    options: ["0.4 N/m", "40.4 N/m", "37.0 N/m", "40.0 N/m"],
    answer: "37.0 N/m",
    explanation: "Hooke's Law: F = kx. k = F/x = 1 N / 0.027 m = 37.0 N/m. (Convert cm to m: 2.7 cm = 0.027 m)."
  },
  {
    subject: "Physics", topic: "Mechanics", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Which of the following objects is NOT in stable equilibrium?",
    options: [
      "A car with wide base and low centre of gravity",
      "A ball in the middle of a bowl",
      "A car with narrow base and high centre of gravity",
      "A cone resting on its base"
    ],
    answer: "A car with narrow base and high centre of gravity",
    explanation: "Stable equilibrium requires a wide base and LOW centre of gravity. A car with a narrow base and HIGH centre of gravity is unstable — it will topple easily when disturbed."
  },
  {
    subject: "Physics", topic: "Thermal Physics", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Which of the following is NOT true of boiling?",
    options: [
      "Temperature is constant during boiling",
      "Occurs throughout the liquid",
      "Takes place at all temperatures",
      "Change from liquid to vapour at boiling point"
    ],
    answer: "Takes place at all temperatures",
    explanation: "Boiling occurs at a specific temperature (the boiling point) at a given pressure — NOT at all temperatures. Evaporation occurs at all temperatures, but boiling is specific to the boiling point."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "A swimming pool appears to be 12 m deep when viewed from above. Find the real depth. (Refractive index of water = 4/3)",
    options: ["16 m", "20 m", "10 m", "24 m"],
    answer: "16 m",
    explanation: "Real depth = Apparent depth × Refractive index = 12 × (4/3) = 16 m. (Note: apparent depth = real depth / n, so real depth = apparent depth × n.)"
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "A transformer has 500 primary turns and 400 secondary turns. Primary connected to 220 V. Find secondary voltage.",
    options: ["122 V", "160 V", "176 V", "182 V"],
    answer: "176 V",
    explanation: "Vs/Vp = Ns/Np. Vs = Vp × (Ns/Np) = 220 × (400/500) = 220 × 0.8 = 176 V."
  }
]

export default unibenLifePhysics2009
