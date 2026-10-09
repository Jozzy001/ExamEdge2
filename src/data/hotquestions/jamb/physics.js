// Path: src/data/hotquestions/jamb/physics.js

export const physicsHotQuestions = [
  // CATEGORY: MECHANICS & SPRING SYSTEMS
  {
    id: 1,
    category: "Mechanics",
    question: "A force of 15 N stretches a spring to a total length of 30 cm. An additional force of 10 N stretches the spring 5 cm further. Find the natural length of the spring.",
    options: {
      A: "25.0 cm",
      B: "22.5 cm",
      C: "20.0 cm",
      D: "15.0 cm"
    },
    correctAnswer: "B",
    yearsAppeared: [1983, 1989, 1995, 2001],
    explanation: "According to Hooke's Law, extension is directly proportional to force ($F = ke$). The additional force of 10 N caused an additional extension of 5 cm, so $k = 10\\text{ N} / 5\\text{ cm} = 2\\text{ N/cm}$. For the initial 15 N load, the extension was $15\\text{ N} / 2\\text{ N/cm} = 7.5\\text{ cm}$. Since total length = natural length + extension, the natural length is $30 - 7.5 = 22.5\\text{ cm}$."
  },

  // CATEGORY: THERMAL PHYSICS & THERMOMETRY
  {
    id: 2,
    category: "Thermal Properties",
    question: "The resistance of a platinum wire at the ice and steam points are 0.75 ohm and 1.05 ohm respectively. Determine the temperature at which the resistance of the wire is 0.90 ohm.",
    options: {
      A: "43.0 °C",
      B: "50.0 °C",
      C: "69.9 °C",
      D: "87.0 °C"
    },
    correctAnswer: "B",
    yearsAppeared: [1985, 1991, 1998, 2004],
    explanation: "Using the linear relationship of thermometric properties: $\\theta = \\frac{R_\\theta - R_0}{R_{100} - R_0} \\times 100$. Substituting the values gives: $\\theta = \\frac{0.90 - 0.75}{1.05 - 0.75} \\times 100 = \\frac{0.15}{0.30} \\times 100 = 50\\text{ °C}$."
  },

  // CATEGORY: SOUND WAVES & ECHOES
  {
    id: 3,
    category: "Waves & Sound",
    question: "A ship traveling towards a cliff receives the echo of its whistle after 3.5 seconds. A short while later, it receives the echo after 2.5 seconds. If the speed of sound in air is 250 m/s, how much closer is the ship to the cliff?",
    options: {
      A: "10 m",
      B: "125 m",
      C: "175 m",
      D: "350 m"
    },
    correctAnswer: "B",
    yearsAppeared: [1984, 1990, 1997],
    explanation: "Sound must travel to the cliff and back, so $2d = vt$, or $d = \\frac{vt}{2}$. The initial distance was $d_1 = \\frac{250 \\times 3.5}{2} = 437.5\\text{ m}$. The final distance was $d_2 = \\frac{250 \\times 2.5}{2} = 312.5\\text{ m}$. The ship moved closer by $d_1 - d_2 = 437.5 - 312.5 = 125\\text{ m}$."
  },

  // CATEGORY: OPTICS & LENSES
  {
    id: 4,
    category: "Optics",
    question: "For correcting long sight defects (hypermetropia) in the human eye, we require a:",
    options: {
      A: "Converging lens",
      B: "Diverging lens",
      C: "Plain glass sheet",
      D: "Cylindrical lens"
    },
    correctAnswer: "A",
    yearsAppeared: [1986, 1992, 1999, 2003],
    explanation: "A long-sighted person cannot focus properly on close objects because the image forms behind the retina. A converging (convex) lens bends incoming light rays inward slightly before they reach the eye, so the final image is placed sharply on the retina."
  },

  // CATEGORY: ELECTRICITY & TERMINAL POTENTIAL
  {
    id: 5,
    category: "Current Electricity",
    question: "The difference of potential between the terminals of a cell is 2.2 volts. When a 4 ohm resistor is connected across the terminals of this cell, the potential difference drops to 2.0 volts. What is the internal resistance of the cell?",
    options: {
      A: "0.10 ohms",
      B: "0.25 ohms",
      C: "0.40 ohms",
      D: "2.50 ohms"
    },
    correctAnswer: "C",
    yearsAppeared: [1987, 1993, 2000, 2004],
    explanation: "Using the internal resistance relation $r = R\\left(\\frac{E}{V} - 1\\right)$, where $E$ is the open-circuit electromotive force ($2.2\\text{ V}$), $V$ is the terminal potential difference ($2.0\\text{ V}$), and $R$ is the external load ($4\\ \\Omega$). Substituting yields: $r = 4 \\times \\left(\\frac{2.2}{2.0} - 1\\right) = 4 \\times 0.1 = 0.4\\ \\Omega$."
  },

  // CATEGORY: MODERN PHYSICS & NUCLEAR ATOMS
  {
    id: 6,
    category: "Modern Physics",
    question: "What is the total number of neutrons in the nucleus of the Uranium isotope U-238, which has mass number 238 and atomic number 92?",
    options: {
      A: "92",
      B: "146",
      C: "238",
      D: "330"
    },
    correctAnswer: "B",
    yearsAppeared: [1988, 1994, 2002],
    explanation: "The mass number ($A = 238$) is the total of protons and neutrons, while the atomic number ($Z = 92$) is the number of protons. The number of neutrons is $N = A - Z = 238 - 92 = 146$."
  },

  // CATEGORY: WAVES - POLARIZATION
  {
    id: 7,
    category: "Waves & Sound",
    question: "Which of the following wave phenomena is exhibited exclusively by transverse waves and can never be observed with longitudinal sound waves?",
    options: {
      A: "Refraction",
      B: "Reflection",
      C: "Diffraction",
      D: "Polarization"
    },
    correctAnswer: "D",
    yearsAppeared: [1983, 1989, 1996, 2001],
    explanation: "Polarization limits wave vibrations to a single plane along the path of propagation. Longitudinal waves vibrate along their direction of travel, so they cannot be restricted to a transverse plane. This makes polarization the defining test for transverse waves."
  }
];