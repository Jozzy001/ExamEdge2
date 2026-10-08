// JAMB 1996 Physics Past Questions
// Fully flattened — standalone objects with topics, answers, and detailed explanations.
// Strictly skipped questions containing complex geometric diagrams or custom data tables.
//
// MATH FORMAT: All mathematical content is written in LaTeX, wrapped in $...$ (inline).
// Render with KaTeX or MathJax. Backslashes are doubled (\\) because these are normal JS strings.
// (A single backslash is silently corrupted by JS: \t -> tab, \f -> form feed, \r -> carriage return.)

const physicsJamb1996 = [
  {
    subject: "Physics", topic: "Measurement & Units", year: 1996, exam: "JAMB",
    question: "At what respective values of $X$, $Y$ and $Z$ would the unit of force, the newton, be dimensionally equivalent to $M^{X}L^{Y}T^{Z}$?",
    options: ["$-1,\\ 1,\\ 2$", "$1,\\ 2,\\ -2$", "$1,\\ -1,\\ 2$", "$1,\\ 1,\\ -2$"],
    answer: "$1,\\ 1,\\ -2$",
    explanation: "By Newton's second law, force $=$ mass $\\times$ acceleration. In base SI units, $1\\ \\mathrm{N} = 1\\ \\mathrm{kg\\,m\\,s^{-2}}$, so the dimensions of force are $M^{1}L^{1}T^{-2}$. Matching exponents gives $X = 1$, $Y = 1$ and $Z = -2$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1996, exam: "JAMB",
    question: "The distance $x$ (in metres) travelled by a particle in time $t$ (in seconds) is described by the equation $x = 10 + 12t^2$. Find the average speed of the particle between the time interval $t = 2\\ \\mathrm{s}$ and $t = 5\\ \\mathrm{s}$.",
    options: ["$60\\ \\mathrm{m\\,s^{-1}}$", "$72\\ \\mathrm{m\\,s^{-1}}$", "$84\\ \\mathrm{m\\,s^{-1}}$", "$108\\ \\mathrm{m\\,s^{-1}}$"],
    answer: "$84\\ \\mathrm{m\\,s^{-1}}$",
    explanation: "Average speed is the change in distance divided by the time interval: $v_{\\text{avg}} = \\dfrac{x_2 - x_1}{t_2 - t_1}$. At $t = 5\\ \\mathrm{s}$: $x_2 = 10 + 12(5^2) = 310\\ \\mathrm{m}$. At $t = 2\\ \\mathrm{s}$: $x_1 = 10 + 12(2^2) = 58\\ \\mathrm{m}$. So $v_{\\text{avg}} = \\dfrac{310 - 58}{5 - 2} = \\dfrac{252}{3} = 84\\ \\mathrm{m\\,s^{-1}}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1996, exam: "JAMB",
    question: "A $5\\ \\mathrm{kg}$ block is released from rest on a smooth plane inclined at an angle of $30^\\circ$ to the horizontal. What is its acceleration down the plane? $[g = 10\\ \\mathrm{m\\,s^{-2}}]$",
    options: ["$5.0\\ \\mathrm{m\\,s^{-2}}$", "$5.8\\ \\mathrm{m\\,s^{-2}}$", "$8.7\\ \\mathrm{m\\,s^{-2}}$", "$25.0\\ \\mathrm{m\\,s^{-2}}$"],
    answer: "$5.0\\ \\mathrm{m\\,s^{-2}}$",
    explanation: "The force pulling a block down a smooth incline is $mg\\sin\\theta$. By Newton's second law, the acceleration down the plane is $a = g\\sin\\theta = 10 \\times \\sin 30^\\circ = 10 \\times 0.5 = 5.0\\ \\mathrm{m\\,s^{-2}}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1996, exam: "JAMB",
    question: "An arrow of mass $0.1\\ \\mathrm{kg}$ moving with a horizontal velocity of $15\\ \\mathrm{m\\,s^{-1}}$ is shot into a wooden block of mass $0.4\\ \\mathrm{kg}$ lying at rest on a smooth horizontal surface. Their common velocity after impact is",
    options: ["$15.0\\ \\mathrm{m\\,s^{-1}}$", "$7.5\\ \\mathrm{m\\,s^{-1}}$", "$3.8\\ \\mathrm{m\\,s^{-1}}$", "$3.0\\ \\mathrm{m\\,s^{-1}}$"],
    answer: "$3.0\\ \\mathrm{m\\,s^{-1}}$",
    explanation: "This is a perfectly inelastic collision, so linear momentum is conserved: $m_1u_1 + m_2u_2 = (m_1 + m_2)v$. Substituting: $(0.1 \\times 15) + (0.4 \\times 0) = (0.1 + 0.4)v \\Rightarrow 1.5 = 0.5v \\Rightarrow v = 3.0\\ \\mathrm{m\\,s^{-1}}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1996, exam: "JAMB",
    question: "Two bodies X and Y are projected on the same horizontal plane, with the same initial speed but at angles $30^\\circ$ and $60^\\circ$ respectively to the horizontal. Neglecting air resistance, the ratio of the range of X to that of Y is",
    options: ["$1:1$", "$1:2$", "$3:1$", "$1:3$"],
    answer: "$1:1$",
    explanation: "The range of a projectile is $R = \\dfrac{u^2\\sin 2\\theta}{g}$. For X: $\\sin(2 \\times 30^\\circ) = \\sin 60^\\circ = \\dfrac{\\sqrt{3}}{2}$. For Y: $\\sin(2 \\times 60^\\circ) = \\sin 120^\\circ = \\sin 60^\\circ = \\dfrac{\\sqrt{3}}{2}$. The speeds are equal and the angles are complementary ($30^\\circ + 60^\\circ = 90^\\circ$), so the ranges are equal and the ratio is $1:1$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1996, exam: "JAMB",
    question: "Which of the following parameters are in phase with respect to a body performing simple harmonic motion?",
    options: [
      "Displacement and velocity of the body.",
      "Displacement and force on the body.",
      "Velocity and acceleration of the body.",
      "Force acting on the body and the acceleration."
    ],
    answer: "Force acting on the body and the acceleration.",
    explanation: "By Newton's second law, $F = ma$. Since the mass is a positive scalar, the net force always has the same direction and phase as the acceleration throughout simple harmonic motion."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1996, exam: "JAMB",
    question: "A body of mass $2\\ \\mathrm{kg}$ moving vertically upwards has its velocity increased uniformly from $10\\ \\mathrm{m\\,s^{-1}}$ to $40\\ \\mathrm{m\\,s^{-1}}$ in $4\\ \\mathrm{s}$. Neglecting air resistance, calculate the upward vertical force acting on the body. $[g = 10\\ \\mathrm{m\\,s^{-2}}]$",
    options: ["$15\\ \\mathrm{N}$", "$20\\ \\mathrm{N}$", "$35\\ \\mathrm{N}$", "$45\\ \\mathrm{N}$"],
    answer: "$35\\ \\mathrm{N}$",
    explanation: "The uniform acceleration is $a = \\dfrac{v - u}{t} = \\dfrac{40 - 10}{4} = 7.5\\ \\mathrm{m\\,s^{-2}}$. The net upward force is $F - mg = ma$, so $F = m(g + a) = 2 \\times (10 + 7.5) = 35\\ \\mathrm{N}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1996, exam: "JAMB",
    question: "A planet has mass $m_1$ and is at a distance $r_1$ from the sun. A second planet has mass $m_2 = 10m_1$ and is at a distance of $r_2 = 2r_1$ from the sun. Determine the ratio of the gravitational force experienced by the first planet to that of the second.",
    options: ["$1:5$", "$2:5$", "$3:5$", "$4:5$"],
    answer: "$2:5$",
    explanation: "By Newton's law of gravitation, $F = \\dfrac{GM_{\\text{sun}}m}{r^2}$. For planet 1: $F_1 = \\dfrac{GM_{\\text{sun}}m_1}{r_1^2}$. For planet 2: $F_2 = \\dfrac{GM_{\\text{sun}}(10m_1)}{(2r_1)^2} = \\dfrac{10GM_{\\text{sun}}m_1}{4r_1^2} = 2.5F_1$. So $\\dfrac{F_1}{F_2} = \\dfrac{1}{2.5} = \\dfrac{2}{5}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1996, exam: "JAMB",
    question: "An object of mass $100\\ \\mathrm{g}$ projected vertically upwards from ground level has a velocity of $20\\ \\mathrm{m\\,s^{-1}}$ at a height of $10\\ \\mathrm{m}$. Calculate its initial kinetic energy at ground level. $[g = 10\\ \\mathrm{m\\,s^{-2}};$ neglect air resistance$]$",
    options: ["$10\\ \\mathrm{J}$", "$20\\ \\mathrm{J}$", "$30\\ \\mathrm{J}$", "$50\\ \\mathrm{J}$"],
    answer: "$30\\ \\mathrm{J}$",
    explanation: "Convert the mass: $m = 100\\ \\mathrm{g} = 0.1\\ \\mathrm{kg}$. By conservation of mechanical energy, the initial kinetic energy at ground level equals the potential plus kinetic energy at height $h$: $KE_{\\text{initial}} = mgh + \\tfrac{1}{2}mv^2 = (0.1 \\times 10 \\times 10) + (\\tfrac{1}{2} \\times 0.1 \\times 20^2) = 10 + 20 = 30\\ \\mathrm{J}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1996, exam: "JAMB",
    question: "An electric water pump rated $1.5\\ \\mathrm{kW}$ lifts $200\\ \\mathrm{kg}$ of water through a vertical height of $6$ metres in $10$ seconds. What is the efficiency of the pump? $[g = 10\\ \\mathrm{m\\,s^{-2}}]$",
    options: ["$90.0\\%$", "$85.0\\%$", "$80.0\\%$", "$65.0\\%$"],
    answer: "$80.0\\%$",
    explanation: "Useful work output $= mgh = 200 \\times 10 \\times 6 = 12{,}000\\ \\mathrm{J}$. Output power $= \\dfrac{12{,}000}{10} = 1200\\ \\mathrm{W}$. Input power $= 1.5\\ \\mathrm{kW} = 1500\\ \\mathrm{W}$. Efficiency $= \\dfrac{1200}{1500} \\times 100\\% = 80.0\\%$."
  },
  // NOTE: The question originally gave the cross-sectional area as "8 x 10^-7 m^-2". The unit has been
  // corrected to m^2 (an area), which is also what the stated answer requires.
  {
    subject: "Physics", topic: "Properties of Matter", year: 1996, exam: "JAMB",
    question: "A load of $20\\ \\mathrm{N}$ on a wire of cross-sectional area $8 \\times 10^{-7}\\ \\mathrm{m^2}$ produces an extension of $10^{-4}\\ \\mathrm{m}$. Calculate Young's modulus for the material of the wire if its initial length is $3\\ \\mathrm{m}$.",
    options: ["$7.0 \\times 10^{11}\\ \\mathrm{N\\,m^{-2}}$", "$7.5 \\times 10^{11}\\ \\mathrm{N\\,m^{-2}}$", "$8.5 \\times 10^{11}\\ \\mathrm{N\\,m^{-2}}$", "$7.5 \\times 10^{10}\\ \\mathrm{N\\,m^{-2}}$"],
    answer: "$7.5 \\times 10^{11}\\ \\mathrm{N\\,m^{-2}}$",
    explanation: "Young's modulus is $Y = \\dfrac{FL}{Ae}$. Substituting: $Y = \\dfrac{20 \\times 3}{(8 \\times 10^{-7}) \\times 10^{-4}} = \\dfrac{60}{8 \\times 10^{-11}} = 7.5 \\times 10^{11}\\ \\mathrm{N\\,m^{-2}}$."
  },
  {
    subject: "Physics", topic: "Hydrostatics & Fluids", year: 1996, exam: "JAMB",
    question: "A cube of sides $0.1\\ \\mathrm{m}$ hangs freely from a string. What is the upthrust on the cube when totally immersed in water? [Density of water is $1000\\ \\mathrm{kg\\,m^{-3}}$, $g = 10\\ \\mathrm{m\\,s^{-2}}$]",
    options: ["$1000\\ \\mathrm{N}$", "$700\\ \\mathrm{N}$", "$110\\ \\mathrm{N}$", "$10\\ \\mathrm{N}$"],
    answer: "$10\\ \\mathrm{N}$",
    explanation: "By Archimedes' principle, upthrust $= \\rho Vg$. The volume of the cube is $V = 0.1^3 = 0.001\\ \\mathrm{m^3}$. So upthrust $= 1000 \\times 0.001 \\times 10 = 10\\ \\mathrm{N}$."
  },
  {
    subject: "Physics", topic: "Sound & Waves", year: 1996, exam: "JAMB",
    question: "The persistence of sound after its source has been removed is known as",
    options: ["Reverberation", "Acoustic vibration", "Rarefaction", "Echo"],
    answer: "Reverberation",
    explanation: "Reverberation is the persistence of sound in an enclosed space after the source has stopped, caused by repeated reflections of the sound from the walls and other surfaces."
  },
  {
    subject: "Physics", topic: "Sound & Waves", year: 1996, exam: "JAMB",
    question: "Vibrations in a stretched spring cannot be polarized because they are",
    options: ["Longitudinal waves", "Mechanical waves", "Stationary waves", "Transverse waves."],
    answer: "Longitudinal waves",
    explanation: "Polarization is possible only for transverse waves, whose vibrations can be confined to a single plane perpendicular to the direction of travel. Longitudinal waves vibrate along their direction of travel and cannot be polarized."
  },
  {
    subject: "Physics", topic: "Sound & Waves", year: 1996, exam: "JAMB",
    question: "Which of the following combinations of environmental variables affects the velocity of sound in air?\nI. Temperature\nII. Density of air molecules\nIII. Pressure\nIV. Pitch",
    options: ["I, II and IV only", "I and II only", "I, II, III and IV", "II and IV only."],
    answer: "I and II only",
    explanation: "The speed of sound in a gas depends on its temperature and density: $v = \\sqrt{\\dfrac{\\gamma P}{\\rho}}$. A change in pressure alone has no effect on the speed, because the density changes with it and the two effects cancel. The pitch (frequency) of the sound does not change its speed."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1996, exam: "JAMB",
    question: "Water is considered a poor thermometric liquid primarily because it",
    options: ["Wets glass", "Has low vapour pressure", "Is opaque", "Is a poor conductor of heat"],
    answer: "Wets glass",
    explanation: "Water is unsuitable for liquid-in-glass thermometers because it wets the glass, so it clings to the walls of the capillary tube and gives inaccurate readings of the meniscus. It also expands anomalously between $0^\\circ\\mathrm{C}$ and $4^\\circ\\mathrm{C}$."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1996, exam: "JAMB",
    question: "According to Newton's law of cooling, the time rate of loss of heat by a body is directly proportional to the",
    options: [
      "Temperature of its surroundings",
      "Difference in temperature between the body and its surroundings",
      "Temperature of the body",
      "Ratio of the temperature of the body to that of its surroundings."
    ],
    answer: "Difference in temperature between the body and its surroundings",
    explanation: "Newton's law of cooling states that the rate of loss of heat from a body is directly proportional to the difference between the temperature of the body and that of its surroundings: $\\dfrac{dQ}{dt} \\propto (T_{\\text{body}} - T_{\\text{surroundings}})$."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 1996, exam: "JAMB",
    question: "An electric iron is rated $1000\\ \\mathrm{W}$, $230\\ \\mathrm{V}$. What is the resistance of its heating element?",
    options: ["$57.6\\ \\Omega$", "$55.9\\ \\Omega$", "$51.9\\ \\Omega$", "$52.9\\ \\Omega$"],
    answer: "$52.9\\ \\Omega$",
    explanation: "Electrical power is $P = \\dfrac{V^2}{R}$, so $R = \\dfrac{V^2}{P} = \\dfrac{230^2}{1000} = \\dfrac{52{,}900}{1000} = 52.9\\ \\Omega$."
  },
  // NOTE: topic changed from "Electricity & Magnetism" to "Waves & Optics" (the question is about the eye).
  {
    subject: "Physics", topic: "Waves & Optics", year: 1996, exam: "JAMB",
    question: "The human eye controls the total amount of light reaching the retinal layer by dynamically adjusting the size of the",
    options: ["Iris", "Cornea", "Optic nerve", "Retina"],
    answer: "Iris",
    explanation: "The iris is a muscular diaphragm that automatically widens or narrows the pupil to regulate how much light enters the eye and reaches the retina."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 1996, exam: "JAMB",
    question: "When connected to a $250\\ \\mathrm{V}$ power line mains, the safest minimum fuse rating required in the plug of a $1\\ \\mathrm{kW}$ electric domestic appliance is",
    options: ["$5\\ \\mathrm{A}$", "$4\\ \\mathrm{A}$", "$3\\ \\mathrm{A}$", "$2\\ \\mathrm{A}$"],
    answer: "$5\\ \\mathrm{A}$",
    explanation: "The operating current is $I = \\dfrac{P}{V} = \\dfrac{1000}{250} = 4\\ \\mathrm{A}$. The fuse rating must be slightly higher than the normal current so that it does not blow during normal use, so $5\\ \\mathrm{A}$ is the appropriate choice."
  }
];

export default physicsJamb1996;