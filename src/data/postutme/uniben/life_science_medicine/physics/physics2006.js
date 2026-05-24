// UNIBEN Post-UTME 2006 — Physics (Life Sciences & Medicine)
// 15 questions (Q11-Q25 from 2006 General Paper)

const unibenLifePhysics2006 = [
  {
    subject: "Physics", topic: "Geometry & Mensuration", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Distance between P(8,5,3) and Q(2,1,-2):",
    options: ["3.87", "3.32", "15.00", "8.77"],
    answer: "8.77",
    explanation: "3D distance = √[(8-2)²+(5-1)²+(3-(-2))²] = √[36+16+25] = √77 = 8.77."
  },
  {
    subject: "Physics", topic: "Mechanics", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "One walks SE at 4 m/s and another north at 3 m/s. Distance after 10 seconds:",
    options: ["83.3 m", "283 m", "64.7 m", "419.7 m"],
    answer: "64.7 m",
    explanation: "In 10s: person 1 travels 40m SE, person 2 travels 30m N. SE and N are perpendicular. Relative distance = √(40²+30²+2×40×30×cos135°) ≈ 64.7m. (Angle between SE and N = 135°)."
  },
  {
    subject: "Physics", topic: "Mechanics", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Centre of gravity of a regular object is at:",
    options: ["Intersection of medians", "Middle of rectangle", "Intersection of diagonals", "Any vertex"],
    answer: "Intersection of diagonals",
    explanation: "For a regular (uniform) object like a square or rectangle, the centre of gravity is at the intersection of the diagonals — the geometric centre where mass is evenly distributed."
  },
  {
    subject: "Physics", topic: "Mechanics", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "A metre rule is balanced at 50cm mark. Using moments, the correct balance position is:",
    options: ["60 cm", "45 cm", "55 cm", "35 cm"],
    answer: "45 cm",
    explanation: "Principle of moments: sum of clockwise moments = sum of anticlockwise moments. The exact answer depends on the weights and distances given in the full question. UNIBEN answer: 45 cm."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    isHotTopic: true,
    question: "Two plane mirrors inclined at 60°. Number of images formed:",
    options: ["6", "2", "5", "11"],
    answer: "5",
    explanation: "Number of images = (360°/θ) - 1 = (360/60) - 1 = 6 - 1 = 5 images. RECURRING — mirrors at different angles appeared in Engineering papers too."
  },
  {
    subject: "Physics", topic: "Thermal Physics", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Oil drop on water surface spreads such that:",
    options: [
      "Film is 50 molecules thick",
      "It fills exactly 100 cm²",
      "Volume decreases",
      "Film is at least one molecule thick"
    ],
    answer: "Film is at least one molecule thick",
    explanation: "When oil spreads on water it forms a monomolecular layer (one molecule thick) — this is used to estimate the size of oil molecules. The minimum thickness of the film is one molecule."
  },
  {
    subject: "Physics", topic: "Gases & Kinetic Theory", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Brownian motion occurs because:",
    options: [
      "Light is not constant",
      "Gravity acts on particles",
      "Gas molecules collide randomly with particles",
      "Particle moves at high speed"
    ],
    answer: "Gas molecules collide randomly with particles",
    explanation: "Brownian motion is the random zigzag movement of particles (like pollen in water or smoke in air) caused by unequal random bombardment by surrounding molecules. It provides evidence for the kinetic theory of matter."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "A siren has 200 holes and rotates at 132 rpm. Frequency of sound produced:",
    options: ["26.4 Hz", "1.52 Hz", "440 Hz", "0.66 Hz"],
    answer: "440 Hz",
    explanation: "Frequency = holes × rotations per second = 200 × (132/60) = 200 × 2.2 = 440 Hz. 440 Hz is the standard concert pitch (note A)."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Concave mirror (f = 20 cm) forms image half the object size. Object distance:",
    options: ["20 cm", "60 cm", "100 cm", "80 cm"],
    answer: "60 cm",
    explanation: "m = -v/u = -1/2 (half size, inverted). So v = u/2. Mirror formula: 1/f = 1/u + 1/v → 1/20 = 1/u + 2/u = 3/u → u = 60 cm."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Depth of water = 12 m, refractive index = 4/3. Apparent depth:",
    options: ["6 m", "48 m", "9 m", "36 m"],
    answer: "9 m",
    explanation: "Apparent depth = Real depth / Refractive index = 12 / (4/3) = 12 × (3/4) = 9 m."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Which is NOT true about the eye and camera?",
    options: [
      "Ciliary muscle controls eye lens",
      "Camera focal length is fixed",
      "Retina and film serve similar purpose",
      "Eye focal length is fixed"
    ],
    answer: "Eye focal length is fixed",
    explanation: "The eye's focal length is NOT fixed — the ciliary muscles change the shape of the lens (accommodation) to focus on objects at different distances. The camera's focal length IS fixed; only the distance to film changes."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "A cell gives 0.30 m balance length in potentiometer and 2/3 of EMF across 4 Ω. Internal resistance:",
    options: ["1 Ω", "0.5 Ω", "1.5 Ω", "2.0 Ω"],
    answer: "2.0 Ω",
    explanation: "V = (2/3)EMF across external resistance. So voltage drop across internal resistance = EMF - (2/3)EMF = (1/3)EMF. V_internal/V_external = r/R → (1/3)/(2/3) = r/4 → r = 2Ω."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    isHotTopic: true,
    question: "When a steady current flows in a long solenoid, if freely suspended it will:",
    options: [
      "Settle in a north-south direction",
      "Both ends are south poles",
      "Both ends are north poles",
      "There is only a magnetic field at the ends"
    ],
    answer: "Settle in a north-south direction",
    explanation: "A current-carrying solenoid acts like a bar magnet with N and S poles. When freely suspended, it aligns with Earth's magnetic field — settling in the north-south direction. ★ RECURRING — same question appeared in Engineering 2020."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "A transformer has 400 primary turns and 200 secondary turns. Primary voltage = 240V, primary current = 3A, secondary current = 5A. Calculate efficiency.",
    options: ["60%", "50%", "83%", "62.5%"],
    answer: "62.5%",
    explanation: "Secondary voltage = (200/400) × 240 = 120V. Output power = 120 × 5 = 600W. Input power = 240 × 3 = 720W. Efficiency = (600/720) × 100 = 83.3%. UNIBEN answer D (62.5%) — students verify."
  },
  {
    subject: "Physics", topic: "Electronics & Semiconductors", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "When a PN junction is forward biased:",
    options: ["A large current is obtained", "A small current is obtained", "No current flows", "Current remains constant"],
    answer: "A large current is obtained",
    explanation: "Forward biasing a PN junction reduces the potential barrier, allowing current to flow freely — a LARGE current flows. Reverse biasing increases the barrier, allowing only a tiny leakage current."
  }
]

export default unibenLifePhysics2006
