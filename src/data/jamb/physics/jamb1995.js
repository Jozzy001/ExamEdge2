// JAMB 1995 Physics Past Questions
// Fully flattened — standalone objects with topics, answers, and detailed explanations.
// Strictly skipped questions containing complex geometric diagrams or custom data tables.
//
// MATH FORMAT: All mathematical content is written in LaTeX, wrapped in $...$ (inline).
// Render with KaTeX or MathJax. Backslashes are doubled (\\) because these are normal JS strings.
// (A single backslash is silently corrupted by JS: \t -> tab, \f -> form feed, \r -> carriage return.)

const physicsJamb1995 = [
  {
    subject: "Physics", topic: "Measurement & Units", year: 1995, exam: "JAMB",
    question: "Which of the following is the correct dimension of pressure?",
    options: ["$ML^{-1}T^{-2}$", "$MLT^{2}$", "$ML^{2}T^{-3}$", "$ML^{-3}$"],
    answer: "$ML^{-1}T^{-2}$",
    explanation: "Pressure is force divided by area: $P = \\dfrac{F}{A}$. Force has dimensions $\\text{mass} \\times \\text{acceleration} = M \\times LT^{-2} = MLT^{-2}$, and area has dimensions $L^2$. Therefore the dimension of pressure is $\\dfrac{MLT^{-2}}{L^2} = ML^{-1}T^{-2}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1995, exam: "JAMB",
    question: "The length of a simple pendulum bob which passes its lowest point twice every second is $[g = 10\\ \\mathrm{m\\,s^{-2}}]$",
    options: ["$0.25\\ \\mathrm{m}$", "$0.45\\ \\mathrm{m}$", "$0.58\\ \\mathrm{m}$", "$1.00\\ \\mathrm{m}$"],
    answer: "$0.25\\ \\mathrm{m}$",
    explanation: "A pendulum bob passes its lowest point twice during one complete cycle (once in each direction). If it passes the lowest point twice every second, it completes one full cycle per second, so the period is $T = 1.0\\ \\mathrm{s}$. From $T = 2\\pi\\sqrt{\\dfrac{L}{g}}$: $1 = 2\\pi\\sqrt{\\dfrac{L}{10}} \\Rightarrow 1 = 4\\pi^2\\dfrac{L}{10} \\Rightarrow L = \\dfrac{10}{4\\pi^2} \\approx \\dfrac{10}{39.478} \\approx 0.25\\ \\mathrm{m}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1995, exam: "JAMB",
    question: "When a ball rolls on a smooth level ground, the motion of its centre is described as",
    options: ["Translational", "Oscillatory", "Random", "Rotational"],
    answer: "Translational",
    explanation: "A rolling ball combines rotational and translational motion. However, its centre of mass moves along a straight line over the ground, which is purely translational motion."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1995, exam: "JAMB",
    question: "What is the acceleration due to gravity $g$ on the moon, given that $g$ is $10\\ \\mathrm{m\\,s^{-2}}$ on the Earth?",
    options: ["$0.10\\ \\mathrm{m\\,s^{-2}}$", "$0.74\\ \\mathrm{m\\,s^{-2}}$", "$1.67\\ \\mathrm{m\\,s^{-2}}$", "$10.00\\ \\mathrm{m\\,s^{-2}}$"],
    answer: "$1.67\\ \\mathrm{m\\,s^{-2}}$",
    explanation: "The acceleration due to gravity on the Moon's surface is about one-sixth of that on the Earth's surface: $g_{\\text{moon}} = \\dfrac{10}{6} \\approx 1.67\\ \\mathrm{m\\,s^{-2}}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1995, exam: "JAMB",
    question: "A body is projected from the Earth's surface with the intention of letting it escape from the Earth's gravitational field. What is the minimum escape velocity of the body?",
    options: ["$14\\ \\mathrm{km\\,s^{-1}}$", "$13\\ \\mathrm{km\\,s^{-1}}$", "$12\\ \\mathrm{km\\,s^{-1}}$", "$11\\ \\mathrm{km\\,s^{-1}}$"],
    answer: "$11\\ \\mathrm{km\\,s^{-1}}$",
    explanation: "The escape velocity from the Earth's surface is $v_e = \\sqrt{2gR_E}$. Substituting the Earth's values gives about $11.2\\ \\mathrm{km\\,s^{-1}}$, which is closest to $11\\ \\mathrm{km\\,s^{-1}}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1995, exam: "JAMB",
    question: "A uniform rod PQ of length $1\\ \\mathrm{m}$ and mass $2\\ \\mathrm{kg}$ is pivoted at the end P. If a load of $14\\ \\mathrm{N}$ is placed at the centre of the rod, find the force that should be applied vertically upwards at Q to maintain the rod in equilibrium horizontally. $[g = 10\\ \\mathrm{m\\,s^{-2}}]$",
    options: ["$68\\ \\mathrm{N}$", "$28\\ \\mathrm{N}$", "$17\\ \\mathrm{N}$", "$7\\ \\mathrm{N}$"],
    answer: "$17\\ \\mathrm{N}$",
    explanation: "The weight of the uniform rod acts at its midpoint: $W = mg = 2 \\times 10 = 20\\ \\mathrm{N}$. The $14\\ \\mathrm{N}$ load is also at the midpoint, so the total downward force $0.5\\ \\mathrm{m}$ from P is $20 + 14 = 34\\ \\mathrm{N}$. Taking moments about the pivot P: $34 \\times 0.5 = F_Q \\times 1.0 \\Rightarrow F_Q = 17\\ \\mathrm{N}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1995, exam: "JAMB",
    question: "A vehicle of mass $m$ is driven by an engine of power $P$ from rest. Find the minimum time it will take to acquire a speed $v$.",
    options: ["$\\dfrac{mv^2}{P}$", "$\\dfrac{mv^2}{2P}$", "$\\dfrac{mv}{P}$", "$\\dfrac{P}{mv^2}$"],
    answer: "$\\dfrac{mv^2}{2P}$",
    explanation: "Power is energy transferred per unit time: $P = \\dfrac{E}{t}$. The energy given to a vehicle accelerating from rest equals its final kinetic energy, $E = \\tfrac{1}{2}mv^2$. So $P = \\dfrac{\\tfrac{1}{2}mv^2}{t} \\Rightarrow t = \\dfrac{mv^2}{2P}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1995, exam: "JAMB",
    question: "Which of the following statements are TRUE about frictional force?\nI. It is always a disadvantage.\nII. It is sometimes a disadvantage.\nIII. It always exists where there is relative motion of two bodies in contact.\nIV. It is sometimes very useful.",
    options: ["I and II only", "II and III only", "I, II and III", "II, III and IV"],
    answer: "II, III and IV",
    explanation: "Friction is not always a disadvantage, so I is false: it is essential for walking, braking and belt drives, so it is sometimes very useful (IV). It is a disadvantage when it causes energy loss and wear in gears and pistons (II), and it always opposes sliding where two surfaces in contact move relative to each other (III)."
  },
  {
    subject: "Physics", topic: "Properties of Matter", year: 1995, exam: "JAMB",
    question: "The energy contained in a wire when it is extended by $0.02\\ \\mathrm{m}$ by a force of $500\\ \\mathrm{N}$ is",
    options: ["$5\\ \\mathrm{J}$", "$10\\ \\mathrm{J}$", "$10^{3}\\ \\mathrm{J}$", "$10^{4}\\ \\mathrm{J}$"],
    answer: "$5\\ \\mathrm{J}$",
    explanation: "The strain energy stored in a stretched wire obeying Hooke's law is the area under the force-extension graph: $E = \\tfrac{1}{2}Fe = \\tfrac{1}{2} \\times 500 \\times 0.02 = 5\\ \\mathrm{J}$."
  },
  {
    subject: "Physics", topic: "Hydrostatics & Fluids", year: 1995, exam: "JAMB",
    question: "The volume of an air bubble increases from the bottom to the top of a lake at constant temperature because",
    options: [
      "Atmospheric pressure acts on the surface of the lake.",
      "Pressure increases with depth of the lake.",
      "Density remains constant with pressure.",
      "The fluid pressure drops as the bubble approaches the surface."
    ],
    answer: "The fluid pressure drops as the bubble approaches the surface.",
    explanation: "By Boyle's law at constant temperature, the volume of a gas is inversely proportional to its pressure: $V \\propto \\dfrac{1}{P}$. At the bottom of the lake the bubble is under a high pressure, $P = P_{\\text{atm}} + \\rho gh$. As it rises, the depth $h$ decreases, so the surrounding pressure drops and the bubble expands."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1995, exam: "JAMB",
    question: "Temperature can be described molecularly as a measure of the",
    options: [
      "Quantity of heat transferred into the molecules of an object",
      "Mean kinetic energy of the molecules of the object",
      "Kinetic energy of any individual molecule of the substance.",
      "Amount of work done by the molecules of the object."
    ],
    answer: "Mean kinetic energy of the molecules of the object",
    explanation: "In the kinetic theory, temperature is not set by the speed of any one molecule. It is a measure of the average (mean) translational kinetic energy of all the molecules: $E_k = \\dfrac{3}{2}kT$."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1995, exam: "JAMB",
    question: "A rectangular metal block of volume $10^{-6}\\ \\mathrm{m^3}$ is at $573\\ \\mathrm{K}$. If its coefficient of linear expansion is $1.2 \\times 10^{-5}\\ \\mathrm{K^{-1}}$, the percentage change of its volume when cooled through $100\\ \\mathrm{K}$ is",
    options: ["$1.5\\%$", "$1.1\\%$", "$0.4\\%$", "$0.36\\%$"],
    answer: "$0.36\\%$",
    explanation: "The volume expansivity is $\\gamma = 3\\alpha = 3 \\times (1.2 \\times 10^{-5}) = 3.6 \\times 10^{-5}\\ \\mathrm{K^{-1}}$. The fractional change in volume is $\\dfrac{\\Delta V}{V_0} = \\gamma\\Delta T = (3.6 \\times 10^{-5}) \\times 100 = 3.6 \\times 10^{-3}$. The percentage change is $0.0036 \\times 100\\% = 0.36\\%$."
  },
  {
    subject: "Physics", topic: "Hydrostatics & Fluids", year: 1995, exam: "JAMB",
    question: "A piece of wood floats inside water at room temperature with a fraction of its volume above the liquid surface. As the temperature of the water is raised, the part of the wood above the surface will",
    options: [
      "Decrease because the density of water decreases with temperature.",
      "Increase because the density of water decreases with temperature.",
      "Decrease because the density of water increases with temperature.",
      "Increase because the density of water increases with temperature."
    ],
    answer: "Decrease because the density of water decreases with temperature.",
    explanation: "By the law of flotation, the fraction of the object submerged is $\\dfrac{V_{\\text{sub}}}{V_{\\text{total}}} = \\dfrac{\\rho_{\\text{object}}}{\\rho_{\\text{fluid}}}$. Heating water above $4^\\circ\\mathrm{C}$ makes it expand, so $\\rho_{\\text{fluid}}$ decreases. The submerged fraction therefore increases, and the part of the wood above the surface decreases."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1995, exam: "JAMB",
    question: "The equation $P^{x}V^{y}T^{z} = \\text{constant}$ represents Charles' law when",
    options: ["$x = 1,\\ y = -1,\\ z = 1$", "$x = 0,\\ y = 1,\\ z = -1$", "$x = 1,\\ y = 0,\\ z = -1$", "$x = 0,\\ y = 1,\\ z = 1$"],
    answer: "$x = 0,\\ y = 1,\\ z = -1$",
    explanation: "Charles's law says that at constant pressure the volume of a fixed mass of gas is proportional to its absolute temperature: $V \\propto T \\Rightarrow \\dfrac{V}{T} = \\text{constant} \\Rightarrow V^{1}T^{-1} = \\text{constant}$. Pressure does not appear, so its exponent is $x = 0$. Hence $x = 0,\\ y = 1,\\ z = -1$."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1995, exam: "JAMB",
    question: "An electric kettle with negligible heat capacity is rated at $2000\\ \\mathrm{W}$. If $2.0\\ \\mathrm{kg}$ of water is put in it, how long will it take the temperature of the water to rise from $20^\\circ\\mathrm{C}$ to $100^\\circ\\mathrm{C}$? [Specific heat capacity of water $= 4200\\ \\mathrm{J\\,kg^{-1}\\,K^{-1}}$]",
    options: ["$420\\ \\mathrm{s}$", "$336\\ \\mathrm{s}$", "$168\\ \\mathrm{s}$", "$84\\ \\mathrm{s}$"],
    answer: "$336\\ \\mathrm{s}$",
    explanation: "Heat needed: $Q = mc\\Delta T = 2.0 \\times 4200 \\times (100 - 20) = 672{,}000\\ \\mathrm{J}$. Electrical energy supplied is $Pt = 2000t$. Equating: $2000t = 672{,}000 \\Rightarrow t = 336\\ \\mathrm{s}$."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1995, exam: "JAMB",
    question: "A temperature scale has a lower fixed point of $40\\ \\mathrm{mm}$ and an upper fixed point of $200\\ \\mathrm{mm}$. What is the reading on this scale when a Celsius thermometer reads $60^\\circ\\mathrm{C}$?",
    options: ["$33.3\\ \\mathrm{mm}$", "$36.0\\ \\mathrm{mm}$", "$96.0\\ \\mathrm{mm}$", "$136.0\\ \\mathrm{mm}$"],
    answer: "$136.0\\ \\mathrm{mm}$",
    explanation: "Using the linear scale relation: $\\dfrac{\\theta - 0}{100 - 0} = \\dfrac{S_\\theta - S_0}{S_{100} - S_0} \\Rightarrow \\dfrac{60}{100} = \\dfrac{S_\\theta - 40}{200 - 40} \\Rightarrow 0.6 = \\dfrac{S_\\theta - 40}{160}$. So $S_\\theta - 40 = 0.6 \\times 160 = 96$, giving $S_\\theta = 136.0\\ \\mathrm{mm}$."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1995, exam: "JAMB",
    question: "A quantity of ice at $-10^\\circ\\mathrm{C}$ is heated until the temperature of the heating vessel reaches $90^\\circ\\mathrm{C}$. Which of the following thermal constants is NOT required in calculating the total heat absorbed?",
    options: ["Specific heat capacity of ice", "Specific heat capacity of water", "Specific latent heat of fusion", "Specific latent heat of vaporization."],
    answer: "Specific latent heat of vaporization.",
    explanation: "The steps are: warming the ice from $-10^\\circ\\mathrm{C}$ to $0^\\circ\\mathrm{C}$ (needs the specific heat capacity of ice), melting the ice at $0^\\circ\\mathrm{C}$ (needs the specific latent heat of fusion), and warming the water from $0^\\circ\\mathrm{C}$ to $90^\\circ\\mathrm{C}$ (needs the specific heat capacity of water). The water never reaches its boiling point of $100^\\circ\\mathrm{C}$, so the specific latent heat of vaporization is not needed."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1995, exam: "JAMB",
    question: "Which of the following statements give the TRUE differences between evaporation and boiling?\nI. Evaporation occurs at all temperatures while boiling occurs at a fixed temperature for a given pressure.\nII. Evaporation is a surface phenomenon while boiling is an interior phenomenon.\nIII. Evaporation is affected by surface area whereas boiling is not.",
    options: ["I and II only", "II and III only", "I and III only", "I, II and III"],
    answer: "I, II and III",
    explanation: "All three statements are correct. Evaporation occurs at any temperature, whereas boiling occurs at a fixed temperature for a given pressure, when the vapour pressure equals the external pressure (I). Evaporation involves molecules escaping from the surface, whereas boiling involves bubbles of vapour forming throughout the liquid (II). Evaporation increases with a larger exposed surface area, but boiling does not depend on it (III)."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1995, exam: "JAMB",
    question: "A well-lagged bar of length $100\\ \\mathrm{cm}$ has its ends maintained at $100^\\circ\\mathrm{C}$ and $40^\\circ\\mathrm{C}$ respectively. What is the temperature at a point $60\\ \\mathrm{cm}$ from the hotter end?",
    options: ["$58^\\circ\\mathrm{C}$", "$62^\\circ\\mathrm{C}$", "$64^\\circ\\mathrm{C}$", "$76^\\circ\\mathrm{C}$"],
    answer: "$64^\\circ\\mathrm{C}$",
    explanation: "For a well-lagged bar in the steady state, the temperature gradient is constant: $\\dfrac{100 - 40}{100} = \\dfrac{100 - \\theta}{60} \\Rightarrow 0.6 = \\dfrac{100 - \\theta}{60}$. So $100 - \\theta = 36$, giving $\\theta = 64^\\circ\\mathrm{C}$."
  },
  {
    subject: "Physics", topic: "Sound & Waves", year: 1995, exam: "JAMB",
    question: "Which of the following is an exclusive property of a transverse wave?",
    options: ["Diffraction", "Refraction", "Compression", "Polarization"],
    answer: "Polarization",
    explanation: "Diffraction, refraction and interference occur with all kinds of waves. Polarization, which confines the vibrations to a single plane perpendicular to the direction of travel, occurs only with transverse waves, so it is an exclusive property of them."
  },
  {
    subject: "Physics", topic: "Sound & Waves", year: 1995, exam: "JAMB",
    question: "The wavelength of a signal from a radio transmitter is $1500\\ \\mathrm{m}$ and its frequency is $200\\ \\mathrm{kHz}$. What is the wavelength for a transmitter operating at $1000\\ \\mathrm{kHz}$ in the same medium?",
    options: ["$7500\\ \\mathrm{m}$", "$300\\ \\mathrm{m}$", "$75\\ \\mathrm{m}$", "$15\\ \\mathrm{m}$"],
    answer: "$300\\ \\mathrm{m}$",
    explanation: "Both signals travel in the same medium, so the wave speed $v = f\\lambda$ is the same: $f_1\\lambda_1 = f_2\\lambda_2 \\Rightarrow 200 \\times 1500 = 1000 \\times \\lambda_2 \\Rightarrow \\lambda_2 = \\dfrac{300{,}000}{1000} = 300\\ \\mathrm{m}$."
  },
  {
    subject: "Physics", topic: "Sound & Waves", year: 1995, exam: "JAMB",
    question: "The fundamental difference between sound waves and light waves is that sound waves",
    options: [
      "Are transverse while light waves are longitudinal.",
      "Require a material medium to travel while light waves do not.",
      "Can be diffracted but light waves cannot.",
      "Cannot be reflected but light waves can."
    ],
    answer: "Require a material medium to travel while light waves do not.",
    explanation: "Sound waves are mechanical, longitudinal waves that depend on the vibration of particles of a medium, so they cannot travel through a vacuum. Light waves are electromagnetic, transverse waves that need no material medium."
  },
  {
    subject: "Physics", topic: "Sound & Waves", year: 1995, exam: "JAMB",
    question: "The pitch of an acoustic device can be increased by",
    options: ["Increasing the frequency", "Increasing the amplitude", "Decreasing the loudness", "Decreasing the intensity"],
    answer: "Increasing the frequency",
    explanation: "Pitch is how high or low a note sounds, and it corresponds to the frequency of the sound. A higher frequency gives a higher pitch, while amplitude affects loudness."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 1995, exam: "JAMB",
    question: "A total eclipse of the Sun occurs when the",
    options: [
      "Earth is between the Moon and the Sun",
      "Sun is between the Moon and the Earth",
      "Moon is between the Sun and the Earth",
      "Ozone layer is threatened"
    ],
    answer: "Moon is between the Sun and the Earth",
    explanation: "A solar eclipse occurs when the Moon passes directly between the Sun and the Earth, so that its shadow falls on the Earth's surface and blocks the sunlight."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 1995, exam: "JAMB",
    question: "What is the approximate critical angle for total internal reflection inside a diamond if the refractive index of diamond is $2.42$?",
    options: ["$21^\\circ$", "$22^\\circ$", "$23^\\circ$", "$24^\\circ$"],
    answer: "$24^\\circ$",
    explanation: "The critical angle satisfies $\\sin c = \\dfrac{1}{n}$. With $n = 2.42$: $\\sin c = \\dfrac{1}{2.42} \\approx 0.4132$, so $c = \\sin^{-1}(0.4132) \\approx 24.4^\\circ$, which rounds to $24^\\circ$."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 1995, exam: "JAMB",
    question: "Which of the following pairs of constituent colours gives the widest separation in a standard spectrum of white light?",
    options: ["Red and violet", "Green and yellow", "Red and indigo", "Yellow and violet."],
    answer: "Red and violet",
    explanation: "White light splits according to wavelength. Red has the longest wavelength and is deviated the least, while violet has the shortest wavelength and is deviated the most. Since they lie at opposite ends of the spectrum, they show the widest separation."
  }
];

export default physicsJamb1995;