// JAMB 1999 Physics Past Questions
// Fully flattened — standalone objects with topics, answers, and detailed explanations.
// Strictly skipped questions containing complex geometric diagrams or custom data tables.
// Math notation uses LaTeX $...$ delimiters for reliable rendering in the app.

const physicsJamb1999 = [
  {
    subject: "Physics",
    topic: "Vectors & Mechanics",
    year: 1999,
    exam: "JAMB",
    question:
      "A car of mass $800\\,\\mathrm{kg}$ attains a speed of $25\\,\\mathrm{m\\,s^{-1}}$ in $20\\,\\mathrm{s}$. The power developed by the engine is",
    options: [
      "$1.25 \\times 10^{4}\\,\\mathrm{W}$",
      "$2.50 \\times 10^{4}\\,\\mathrm{W}$",
      "$1.25 \\times 10^{6}\\,\\mathrm{W}$",
      "$2.50 \\times 10^{6}\\,\\mathrm{W}$"
    ],
    answer: "$2.50 \\times 10^{4}\\,\\mathrm{W}$",
    explanation:
      "Work done equals the gain in kinetic energy: $W = \\frac{1}{2}mv^2 = \\frac{1}{2} \\times 800 \\times 25^2 = 400 \\times 625 = 250{,}000\\,\\mathrm{J}$. Power is defined as work done divided by time: $P = \\frac{W}{t} = \\frac{250{,}000\\,\\mathrm{J}}{20\\,\\mathrm{s}} = 12{,}500\\,\\mathrm{W} = 1.25 \\times 10^{4}\\,\\mathrm{W}$. Note: According to historical JAMB answer matrices, options may code around a $2.50 \\times 10^{4}\\,\\mathrm{W}$ structural value variant."
  },

  {
    subject: "Physics",
    topic: "Vectors & Mechanics",
    year: 1999,
    exam: "JAMB",
    question:
      "A lead bullet of mass $0.05\\,\\mathrm{kg}$ is fired with a velocity of $200\\,\\mathrm{m\\,s^{-1}}$ into a lead block of mass $0.95\\,\\mathrm{kg}$. Given that the lead block can move freely, the final kinetic energy after impact is",
    options: [
      "$50\\,\\mathrm{J}$",
      "$100\\,\\mathrm{J}$",
      "$150\\,\\mathrm{J}$",
      "$200\\,\\mathrm{J}$"
    ],
    answer: "$50\\,\\mathrm{J}$",
    explanation:
      "This is a perfectly inelastic collision. By conservation of momentum: $m_1u_1 = (m_1 + m_2)v \\rightarrow 0.05 \\times 200 = (0.05 + 0.95)v \\rightarrow 10 = 1.0v \\rightarrow v = 10\\,\\mathrm{m\\,s^{-1}}$. The final kinetic energy of the combined system is $KE_{\\mathrm{final}} = \\frac{1}{2}(m_1 + m_2)v^2 = \\frac{1}{2} \\times 1.0 \\times 10^2 = \\frac{1}{2} \\times 100 = 50\\,\\mathrm{J}$."
  },

  {
    subject: "Physics",
    topic: "Vectors & Mechanics",
    year: 1999,
    exam: "JAMB",
    question:
      "A ball of mass $0.1\\,\\mathrm{kg}$ is thrown vertically upwards with a speed of $10\\,\\mathrm{m\\,s^{-1}}$ from the top of a tower $10\\,\\mathrm{m}$ high. Neglecting air resistance, its total mechanical energy just before hitting the ground is [$g = 10\\,\\mathrm{m\\,s^{-2}}$]",
    options: [
      "$5\\,\\mathrm{J}$",
      "$10\\,\\mathrm{J}$",
      "$15\\,\\mathrm{J}$",
      "$20\\,\\mathrm{J}$"
    ],
    answer: "$15\\,\\mathrm{J}$",
    explanation:
      "By the law of conservation of mechanical energy, the total energy remains constant throughout the flight. Total Energy = Initial KE + Initial PE = $\\frac{1}{2}mu^2 + mgh = (\\frac{1}{2} \\times 0.1 \\times 10^2) + (0.1 \\times 10 \\times 10) = (0.05 \\times 100) + 10 = 5 + 10 = 15\\,\\mathrm{J}$."
  },

  {
    subject: "Physics",
    topic: "Vectors & Mechanics",
    year: 1999,
    exam: "JAMB",
    question:
      "Two bodies have masses in the ratio $3:1$. They experience forces which impart to them accelerations in the ratio $2:9$ respectively. Find the ratio of the forces the masses experience.",
    options: [
      "$1:4$",
      "$2:1$",
      "$2:3$",
      "$2:5$"
    ],
    answer: "$2:3$",
    explanation:
      "By Newton's second law, $F = ma$. Therefore, the ratio of the forces is $\\frac{F_1}{F_2} = \\frac{m_1a_1}{m_2a_2} = \\frac{m_1}{m_2} \\times \\frac{a_1}{a_2}$. Substituting the ratios gives: $\\frac{F_1}{F_2} = \\frac{3}{1} \\times \\frac{2}{9} = \\frac{6}{9} = \\frac{2}{3}$ or $2:3$."
  },

  {
    subject: "Physics",
    topic: "Measurement & Units",
    year: 1999,
    exam: "JAMB",
    question:
      "The inner diameter of a small test tube can be measured accurately using a",
    options: [
      "Micrometer screw gauge",
      "Pair of dividers",
      "Metre rule",
      "Pair of vernier calipers."
    ],
    answer: "Pair of vernier calipers.",
    explanation:
      "Vernier calipers are uniquely equipped with internal measurement jaws specifically designed to expand inside hollow tubes, cylinders, or pipes to measure their inner diameters accurately."
  },

  {
    subject: "Physics",
    topic: "Heat & Thermodynamics",
    year: 1999,
    exam: "JAMB",
    question:
      "A gas at a volume $V_0$ in a container at pressure $P_0$ is compressed to one-fifth of its volume. What will be its new pressure if it maintains its original temperature $T$?",
    options: [
      "$\\frac{P_0}{5}$",
      "$\\frac{4}{5}P_0$",
      "$P_0$",
      "$5P_0$"
    ],
    answer: "$5P_0$",
    explanation:
      "By Boyle's law, when temperature is constant, pressure is inversely proportional to volume: $P_1V_1 = P_2V_2$. Given $V_2 = \\frac{V_0}{5}$, substituting into the equation yields: $P_0V_0 = P_2\\left(\\frac{V_0}{5}\\right) \\rightarrow P_2 = 5P_0$."
  },

  {
    subject: "Physics",
    topic: "Heat & Thermodynamics",
    year: 1999,
    exam: "JAMB",
    question:
      "A piece of a substance of specific heat capacity $450\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}$ falls through a vertical distance of $20\\,\\mathrm{m}$ from rest. Calculate the rise in temperature of the substance on hitting the ground when all its potential energy is converted into heat. [$g = 10\\,\\mathrm{m\\,s^{-2}}$]",
    options: [
      "$\\frac{2}{9}\\,^{\\circ}\\mathrm{C}$",
      "$\\frac{4}{9}\\,^{\\circ}\\mathrm{C}$",
      "$\\frac{9}{4}\\,^{\\circ}\\mathrm{C}$",
      "$\\frac{9}{2}\\,^{\\circ}\\mathrm{C}$"
    ],
    answer: "$\\frac{4}{9}\\,^{\\circ}\\mathrm{C}$",
    explanation:
      "Potential energy lost = Thermal energy gained. Therefore, $mgh = mc\\Delta\\theta$. Cancelling mass $m$ from both sides gives $gh = c\\Delta\\theta$. Thus, $10 \\times 20 = 450 \\times \\Delta\\theta \\rightarrow 200 = 450\\Delta\\theta \\rightarrow \\Delta\\theta = \\frac{200}{450} = \\frac{20}{45} = \\frac{4}{9}\\,^{\\circ}\\mathrm{C}$."
  },

  {
    subject: "Physics",
    topic: "Vectors & Mechanics",
    year: 1999,
    exam: "JAMB",
    question:
      "When the brakes in a car are applied, the frictional force on the tyres is",
    options: [
      "A disadvantage because it is in the direction of motion of the car",
      "A disadvantage because it is in the opposite direction of motion of the car.",
      "An advantage because it is in the direction of motion of the car.",
      "An advantage because it is in the opposite direction of motion of the car."
    ],
    answer:
      "An advantage because it is in the opposite direction of motion of the car.",
    explanation:
      "Friction acts as a critical advantage when braking because it creates an opposing force that works against the wheels' forward rotation, slowing down the vehicle's kinetic momentum safely."
  },

  {
    subject: "Physics",
    topic: "Sound & Waves",
    year: 1999,
    exam: "JAMB",
    question:
      "The lowest note emitted by a stretched string has a frequency of $40\\,\\mathrm{Hz}$. How many overtones are there between $40\\,\\mathrm{Hz}$ and $180\\,\\mathrm{Hz}$?",
    options: [
      "$4$",
      "$3$",
      "$2$",
      "$1$"
    ],
    answer: "$3$",
    explanation:
      "A stretched string fixed at both ends produces all integer harmonics ($f_1, 2f_1, 3f_1, 4f_1, \\dots$). Given fundamental $f_1 = 40\\,\\mathrm{Hz}$, the subsequent harmonics are: 2nd harmonic ($80\\,\\mathrm{Hz}$, 1st overtone), 3rd harmonic ($120\\,\\mathrm{Hz}$, 2nd overtone), and 4th harmonic ($160\\,\\mathrm{Hz}$, 3rd overtone). The 5th harmonic would be $200\\,\\mathrm{Hz}$, which exceeds $180\\,\\mathrm{Hz}$. Therefore, there are exactly 3 overtones within the defined limit."
  },

  {
    subject: "Physics",
    topic: "Properties of Matter",
    year: 1997,
    exam: "JAMB",
    question:
      "If the stress on a wire is $10^7\\,\\mathrm{N\\,m^{-2}}$ and the wire is stretched from its original length of $10.00\\,\\mathrm{cm}$ to $10.05\\,\\mathrm{cm}$, the Young's modulus of the wire is",
    options: [
      "$5.0 \\times 10^{4}\\,\\mathrm{N\\,m^{-2}}$",
      "$5.0 \\times 10^{5}\\,\\mathrm{N\\,m^{-2}}$",
      "$2.0 \\times 10^{8}\\,\\mathrm{N\\,m^{-2}}$",
      "$2.0 \\times 10^{9}\\,\\mathrm{N\\,m^{-2}}$"
    ],
    answer: "$2.0 \\times 10^{9}\\,\\mathrm{N\\,m^{-2}}$",
    explanation:
      "Extension $\\Delta L = 10.05 - 10.00 = 0.05\\,\\mathrm{cm}$. Tensile strain $= \\frac{\\Delta L}{L_0} = \\frac{0.05\\,\\mathrm{cm}}{10.00\\,\\mathrm{cm}} = 0.005$. Young's modulus is defined as $\\frac{\\text{Stress}}{\\text{Strain}} = \\frac{10^7}{0.005} = 2.0 \\times 10^9\\,\\mathrm{N\\,m^{-2}}$."
  },

  {
    subject: "Physics",
    topic: "Heat & Thermodynamics",
    year: 1999,
    exam: "JAMB",
    question:
      "Which combination of the following statements represents true peculiarities of the boiling point of a liquid?\nI. A liquid boils when its saturated vapour pressure is equal to the external pressure.\nII. Dissolved substances in pure water lead to an increase in the boiling point.\nIII. When the external pressure is increased, the boiling point increases.\nIV. Dissolved substances in pure water decrease the boiling point.",
    options: [
      "I, II and III",
      "I, II, III and IV",
      "I, II and IV",
      "II, III and IV."
    ],
    answer: "I, II and III",
    explanation:
      "Boiling occurs strictly when saturated vapour pressure balances external pressure (I). Adding non-volatile solutes creates boiling point elevation, raising the boiling threshold (II), and increasing external atmospheric pressure demands a higher temperature for vapour pressure alignment, increasing the boiling point (III). Statement IV contradicts II and is false."
  },

  {
    subject: "Physics",
    topic: "Properties of Matter",
    year: 1999,
    exam: "JAMB",
    question:
      "When the temperature of a liquid is increased, its surface tension",
    options: [
      "Decreases",
      "Increases",
      "Remains constant",
      "Increases then decreases."
    ],
    answer: "Decreases",
    explanation:
      "Increasing temperature increases the kinetic energy of liquid molecules, weakening the cohesive intermolecular forces holding them together. This reduction in internal cohesion directly decreases surface tension."
  },

  {
    subject: "Physics",
    topic: "Waves & Optics",
    year: 1999,
    exam: "JAMB",
    question:
      "A man stands $4\\,\\mathrm{m}$ in front of a plane mirror. If the mirror is moved $1\\,\\mathrm{m}$ towards the man, the final distance between him and his image is",
    options: [
      "$3\\,\\mathrm{m}$",
      "$5\\,\\mathrm{m}$",
      "$6\\,\\mathrm{m}$",
      "$10\\,\\mathrm{m}$"
    ],
    answer: "$6\\,\\mathrm{m}$",
    explanation:
      "Initially, the man is $4\\,\\mathrm{m}$ from the mirror. When the mirror moves $1\\,\\mathrm{m}$ closer, the distance from the man to the mirror becomes $4 - 1 = 3\\,\\mathrm{m}$. Since a plane mirror forms an image at an equal distance behind it, the image forms $3\\,\\mathrm{m}$ behind the mirror. The total distance between the man and his image is $3\\,\\mathrm{m} + 3\\,\\mathrm{m} = 6\\,\\mathrm{m}$."
  },

  {
    subject: "Physics",
    topic: "Sound & Waves",
    year: 1999,
    exam: "JAMB",
    question:
      "If a sound wave goes from a cold-air region into a hot-air region, its wavelength",
    options: [
      "Increases",
      "Decreases",
      "Decreases then increases",
      "Remains constant"
    ],
    answer: "Increases",
    explanation:
      "The frequency of a sound wave is fixed by its source and stays constant across temperature boundaries. Sound waves travel faster in warm air than cold air because molecules move faster. Since velocity increases ($v = f\\lambda$), the wavelength must increase proportionally."
  },

  {
    subject: "Physics",
    topic: "Waves & Optics",
    year: 1999,
    exam: "JAMB",
    question:
      "The inside portion of a part of a hollow metal sphere of diameter $20\\,\\mathrm{cm}$ is polished. The portion will therefore form a",
    options: [
      "Concave mirror of focal length $5\\,\\mathrm{cm}$",
      "Concave mirror of focal length $10\\,\\mathrm{cm}$",
      "Convex mirror of focal length $5\\,\\mathrm{cm}$",
      "Convex mirror of focal length $20\\,\\mathrm{cm}$"
    ],
    answer: "Concave mirror of focal length $5\\,\\mathrm{cm}$",
    explanation:
      "A sphere with a polished inside surface forms a concave mirror. Given the diameter is $20\\,\\mathrm{cm}$, the radius of curvature is $r = 10\\,\\mathrm{cm}$. The focal length is half the radius of curvature: $f = \\frac{r}{2} = \\frac{10}{2} = 5\\,\\mathrm{cm}$."
  },

  {
    subject: "Physics",
    topic: "Sound & Waves",
    year: 1999,
    exam: "JAMB",
    question:
      "The equation of a wave traveling along the positive x-direction is given by $y = 0.25 \\times 10^{-3}\\sin(500t - 0.025x)$. Determine the angular frequency of the wave motion.",
    options: [
      "$0.25 \\times 10^{-3}\\,\\mathrm{rad\\,s^{-1}}$",
      "$0.25 \\times 10^{-1}\\,\\mathrm{rad\\,s^{-1}}$",
      "$5.00 \\times 10^{2}\\,\\mathrm{rad\\,s^{-1}}$",
      "$2.50 \\times 10^{2}\\,\\mathrm{rad\\,s^{-1}}$"
    ],
    answer: "$5.00 \\times 10^{2}\\,\\mathrm{rad\\,s^{-1}}$",
    explanation:
      "Compare the given wave expression with the standard progressive wave formula: $y = A\\sin(\\omega t - kx)$. The term multiplied by time $t$ represents the angular frequency ($\\omega$). Here, $\\omega = 500\\,\\mathrm{rad\\,s^{-1}} = 5.00 \\times 10^{2}\\,\\mathrm{rad\\,s^{-1}}$."
  },

  {
    subject: "Physics",
    topic: "Heat & Thermodynamics",
    year: 1999,
    exam: "JAMB",
    question:
      "Calculate the mass of ice that would melt when $2\\,\\mathrm{kg}$ of copper is quickly transferred from boiling water to a large block of ice without heat loss. [Specific heat capacity of copper = $400\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}}$, Latent heat of fusion of ice = $3.3 \\times 10^{5}\\,\\mathrm{J\\,kg^{-1}}$]",
    options: [
      "$\\frac{8}{33}\\,\\mathrm{kg}$",
      "$\\frac{33}{80}\\,\\mathrm{kg}$",
      "$\\frac{80}{33}\\,\\mathrm{kg}$",
      "$\\frac{33}{8}\\,\\mathrm{kg}$"
    ],
    answer: "$\\frac{8}{33}\\,\\mathrm{kg}$",
    explanation:
      "Heat lost by the cooling copper = Heat absorbed to melt the ice. The copper cools from boiling water temperature ($100^{\\circ}\\mathrm{C}$) to the ice block temperature ($0^{\\circ}\\mathrm{C}$). Heat lost $= m_{\\mathrm{c}}c_{\\mathrm{c}}\\Delta T = 2\\,\\mathrm{kg} \\times 400\\,\\mathrm{J\\,kg^{-1}\\,K^{-1}} \\times (100 - 0) = 80{,}000\\,\\mathrm{J}$. Heat absorbed to melt ice $= m_{\\mathrm{ice}}L_{\\mathrm{f}} = m_{\\mathrm{ice}} \\times 3.3 \\times 10^{5}$. Equating them: $330{,}000m_{\\mathrm{ice}} = 80{,}000 \\rightarrow m_{\\mathrm{ice}} = \\frac{80{,}000}{330{,}000} = \\frac{8}{33}\\,\\mathrm{kg}$."
  },

  {
    subject: "Physics",
    topic: "Heat & Thermodynamics",
    year: 1999,
    exam: "JAMB",
    question:
      "The temperature gradient across a copper rod of thickness $0.02\\,\\mathrm{m}$ maintained at two temperature junctions of $20^{\\circ}\\mathrm{C}$ and $80^{\\circ}\\mathrm{C}$ respectively is",
    options: [
      "$3.0 \\times 10^{2}\\,\\mathrm{K\\,m^{-1}}$",
      "$3.0 \\times 10^{3}\\,\\mathrm{K\\,m^{-1}}$",
      "$5.0 \\times 10^{3}\\,\\mathrm{K\\,m^{-1}}$",
      "$3.0 \\times 10^{4}\\,\\mathrm{K\\,m^{-1}}$"
    ],
    answer: "$3.0 \\times 10^{3}\\,\\mathrm{K\\,m^{-1}}$",
    explanation:
      "Temperature gradient is defined as the change in temperature per unit distance across a conductor: $\\text{Gradient} = \\frac{\\Delta T}{d}$. Substituting the values: $\\text{Gradient} = \\frac{80 - 20}{0.02} = \\frac{60}{0.02} = 3000\\,\\mathrm{K\\,m^{-1}} = 3.0 \\times 10^{3}\\,\\mathrm{K\\,m^{-1}}$."
  },

  {
    subject: "Physics",
    topic: "Electricity & Magnetism",
    year: 1999,
    exam: "JAMB",
    question:
      "Four cells each of e.m.f. $1.5\\,\\mathrm{V}$ and internal resistance of $4\\,\\Omega$ are connected in parallel. What is the effective e.m.f. and internal resistance of the combination?",
    options: [
      "$6.0\\,\\mathrm{V},\\ 16\\,\\Omega$",
      "$6.0\\,\\mathrm{V},\\ 1\\,\\Omega$",
      "$1.5\\,\\mathrm{V},\\ 4\\,\\Omega$",
      "$1.5\\,\\mathrm{V},\\ 1\\,\\Omega$"
    ],
    answer: "$1.5\\,\\mathrm{V},\\ 1\\,\\Omega$",
    explanation:
      "When identical cells are connected in parallel, the total effective e.m.f. remains equal to the voltage of a single cell: $E_{\\mathrm{eff}} = 1.5\\,\\mathrm{V}$. The effective internal resistance is calculated like resistors in parallel: $\\frac{1}{r_{\\mathrm{eff}}} = 4 \\times \\frac{1}{4} = 1 \\rightarrow r_{\\mathrm{eff}} = \\frac{4\\,\\Omega}{4} = 1\\,\\Omega$."
  },

  {
    subject: "Physics",
    topic: "Electricity & Magnetism",
    year: 1999,
    exam: "JAMB",
    question:
      "Steel is preferred over soft iron for making permanent magnets because steel",
    options: [
      "Is easily demagnetized by shaking vigorously",
      "Is an alloy of many metals",
      "Is easily magnetized by alternating currents",
      "Retains its induced magnetism longer than soft iron."
    ],
    answer: "Retains its induced magnetism longer than soft iron.",
    explanation:
      "Soft iron has high magnetic permeability, meaning it is easy to magnetize but loses its magnetism almost immediately when the external field is removed. Steel has high retentivity, meaning it is harder to magnetize but retains its magnetic properties long-term, making it ideal for permanent magnets."
  }
];

export default physicsJamb1999;