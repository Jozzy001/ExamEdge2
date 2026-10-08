// JAMB 1997 Physics Past Questions
// Fully flattened — standalone objects with topics, answers, and detailed explanations.
// Strictly skipped questions containing complex geometric diagrams or custom data tables.
//
// MATH FORMAT: All mathematical content is written in LaTeX, wrapped in $...$ (inline).
// Render with KaTeX or MathJax. Backslashes are doubled (\\) because these are normal JS strings.
// (A single backslash is silently corrupted by JS: \t -> tab, \f -> form feed, \r -> carriage return.)

const physicsJamb1997 = [
  {
    subject: "Physics", topic: "Measurement & Units", year: 1997, exam: "JAMB",
    question: "Which of the following is a derived unit?",
    options: ["Ampere", "Kilogramme", "Kelvin", "Newton"],
    answer: "Newton",
    explanation: "Fundamental SI units represent independent base quantities (current in amperes, mass in kilograms, temperature in kelvin). The newton is a derived unit of force, defined from base units as $1\\ \\mathrm{N} = 1\\ \\mathrm{kg\\,m\\,s^{-2}}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1997, exam: "JAMB",
    question: "A ball is dropped from a height of $20\\ \\mathrm{m}$. Calculate the time taken for it to hit the ground. $[g = 10\\ \\mathrm{m\\,s^{-2}}]$",
    options: ["$1\\ \\mathrm{s}$", "$2\\ \\mathrm{s}$", "$3\\ \\mathrm{s}$", "$4\\ \\mathrm{s}$"],
    answer: "$2\\ \\mathrm{s}$",
    explanation: "Using $s = ut + \\tfrac{1}{2}gt^2$ with $u = 0$ (dropped from rest): $20 = 0 + \\tfrac{1}{2}(10)t^2 \\Rightarrow 20 = 5t^2 \\Rightarrow t^2 = 4 \\Rightarrow t = 2\\ \\mathrm{s}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1997, exam: "JAMB",
    question: "A constant force of $50\\ \\mathrm{N}$ acts on a body of mass $5\\ \\mathrm{kg}$ initially at rest. Calculate the kinetic energy of the body after $4$ seconds.",
    options: ["$1000\\ \\mathrm{J}$", "$2000\\ \\mathrm{J}$", "$3000\\ \\mathrm{J}$", "$4000\\ \\mathrm{J}$"],
    answer: "$2000\\ \\mathrm{J}$",
    explanation: "First find the acceleration: $a = \\dfrac{F}{m} = \\dfrac{50}{5} = 10\\ \\mathrm{m\\,s^{-2}}$. The velocity after $4\\ \\mathrm{s}$ is $v = u + at = 0 + 10 \\times 4 = 40\\ \\mathrm{m\\,s^{-1}}$. The kinetic energy is $KE = \\tfrac{1}{2}mv^2 = \\tfrac{1}{2} \\times 5 \\times 40^2 = 2000\\ \\mathrm{J}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1997, exam: "JAMB",
    question: "An object is projected at an angle of $60^\\circ$ to the horizontal with a velocity of $40\\ \\mathrm{m\\,s^{-1}}$. Calculate the horizontal range covered. $[g = 10\\ \\mathrm{m\\,s^{-2}}]$",
    options: ["$138.6\\ \\mathrm{m}$", "$160.0\\ \\mathrm{m}$", "$80.0\\ \\mathrm{m}$", "$69.3\\ \\mathrm{m}$"],
    answer: "$138.6\\ \\mathrm{m}$",
    explanation: "The horizontal range of a projectile is $R = \\dfrac{u^2\\sin 2\\theta}{g}$. Substituting: $R = \\dfrac{40^2 \\times \\sin 120^\\circ}{10} = 160 \\times \\sin 60^\\circ = 160 \\times 0.8660 = 138.56\\ \\mathrm{m} \\approx 138.6\\ \\mathrm{m}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1997, exam: "JAMB",
    question: "A simple machine with a velocity ratio of $4$ requires an effort of $25\\ \\mathrm{N}$ to lift a load of $80\\ \\mathrm{N}$. Calculate the efficiency of the machine.",
    options: ["$80\\%$", "$75\\%$", "$50\\%$", "$20\\%$"],
    answer: "$80\\%$",
    explanation: "Mechanical advantage $\\text{MA} = \\dfrac{\\text{load}}{\\text{effort}} = \\dfrac{80}{25} = 3.2$. Efficiency $\\eta = \\dfrac{\\text{MA}}{\\text{VR}} \\times 100\\% = \\dfrac{3.2}{4} \\times 100\\% = 80\\%$."
  },
  // NOTE: topic changed from "Hydrostatics & Fluids" to "Properties of Matter" (surface tension is filed
  // there in the 1987 set). Revert if you prefer the old label.
  {
    subject: "Physics", topic: "Properties of Matter", year: 1997, exam: "JAMB",
    question: "The property of a liquid which makes it behave like an elastic stretched membrane is called",
    options: ["Capillarity", "Viscosity", "Surface tension", "Osmosis"],
    answer: "Surface tension",
    explanation: "Surface tension is the property of a liquid surface that makes it behave like a stretched elastic skin. It is caused by the cohesive forces that pull the surface molecules inward towards the bulk of the liquid."
  },
  {
    subject: "Physics", topic: "Properties of Matter", year: 1997, exam: "JAMB",
    question: "Young's modulus of elasticity is mathematically defined as the ratio of",
    options: ["Tensile strain to tensile stress", "Tensile stress to tensile strain", "Force to area", "Extension to original length"],
    answer: "Tensile stress to tensile strain",
    explanation: "Young's modulus measures the stiffness of a solid material. It is the ratio of tensile stress (force per unit area) to tensile strain (extension per unit original length) within the elastic limit: $E = \\dfrac{\\text{stress}}{\\text{strain}} = \\dfrac{F/A}{e/L}$."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1997, exam: "JAMB",
    question: "The lower and upper fixed points of a mercury thermometer are $200\\ \\mathrm{mm}$ apart. What is the Celsius temperature when the mercury column stands $50\\ \\mathrm{mm}$ above the lower mark?",
    options: ["$20^\\circ\\mathrm{C}$", "$25^\\circ\\mathrm{C}$", "$50^\\circ\\mathrm{C}$", "$75^\\circ\\mathrm{C}$"],
    answer: "$25^\\circ\\mathrm{C}$",
    explanation: "Using linear scaling: $\\theta = \\dfrac{l_\\theta}{l_{100}} \\times 100^\\circ\\mathrm{C} = \\dfrac{50}{200} \\times 100^\\circ\\mathrm{C} = \\tfrac{1}{4} \\times 100^\\circ\\mathrm{C} = 25^\\circ\\mathrm{C}$."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1997, exam: "JAMB",
    question: "The primary mode of heat transfer from the core of the Sun to the Earth across space is",
    options: ["Conduction", "Convection", "Radiation", "Evaporation"],
    answer: "Radiation",
    explanation: "Conduction and convection need a material medium to transfer heat. Radiation carries energy as electromagnetic waves, so it can travel across the vacuum of space."
  },
  {
    subject: "Physics", topic: "Sound & Waves", year: 1997, exam: "JAMB",
    question: "A wave travelling in a medium has a velocity of $300\\ \\mathrm{m\\,s^{-1}}$ and a frequency of $150\\ \\mathrm{Hz}$. Determine its wavelength.",
    options: ["$0.5\\ \\mathrm{m}$", "$2.0\\ \\mathrm{m}$", "$4.5\\ \\mathrm{m}$", "$45.0\\ \\mathrm{m}$"],
    answer: "$2.0\\ \\mathrm{m}$",
    explanation: "Using $v = f\\lambda$, the wavelength is $\\lambda = \\dfrac{v}{f} = \\dfrac{300}{150} = 2.0\\ \\mathrm{m}$."
  },
  {
    subject: "Physics", topic: "Sound & Waves", year: 1997, exam: "JAMB",
    question: "The distance between two consecutive antinodes in a stationary wave pattern is equal to",
    options: ["One wavelength", "Half a wavelength", "A quarter of a wavelength", "Twice the wavelength"],
    answer: "Half a wavelength",
    explanation: "In a stationary wave, the distance between two consecutive nodes, or two consecutive antinodes, is half a wavelength ($\\dfrac{\\lambda}{2}$). The distance from a node to the next antinode is a quarter of a wavelength ($\\dfrac{\\lambda}{4}$)."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 1997, exam: "JAMB",
    question: "When a ray of light passes at an angle from an optically less dense medium into an optically denser medium, it bends",
    options: ["Away from the normal", "Towards the normal", "At $90^\\circ$ to the interface", "Parallel to the interface"],
    answer: "Towards the normal",
    explanation: "By Snell's law, light entering a medium of higher refractive index slows down. This makes the refracted ray bend towards the normal."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 1997, exam: "JAMB",
    question: "A convex mirror always produces an image that is virtual, erect, and",
    options: ["Magnified", "Diminished", "Inverted", "Real"],
    answer: "Diminished",
    explanation: "A convex (diverging) mirror reflects rays away from the principal axis. The reflected rays appear to come from behind the mirror, forming an image that is always virtual, erect and diminished, wherever the object is placed."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 1997, exam: "JAMB",
    question: "The physical parameter that measures the degree of obstruction to the flow of an electric current through a material is called",
    options: ["Capacitance", "Inductance", "Resistance", "Conductivity"],
    answer: "Resistance",
    explanation: "Resistance is the property of a conductor that opposes the flow of electric current through it when a potential difference is applied across it."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 1997, exam: "JAMB",
    question: "A capacitor stores electrical energy within the region between its plates in the form of an",
    options: ["Electric field", "Magnetic field", "Electromagnetic wave", "Eddy current"],
    answer: "Electric field",
    explanation: "When a capacitor is charged, equal and opposite charges collect on its plates. This separation of charge sets up an electric field in the dielectric between the plates, and the energy is stored in this field."
  },
  // NOTE: question wording tidied ("The chemical and physical behavior stating that isotopes...") for grammar;
  // the meaning, options and answer are unchanged.
  {
    subject: "Physics", topic: "Nuclear Physics", year: 1997, exam: "JAMB",
    question: "Isotopes of a given element have identical chemical properties because they have the same",
    options: ["Number of neutrons", "Number of protons", "Mass number", "Atomic mass"],
    answer: "Number of protons",
    explanation: "Chemical behaviour is governed by the arrangement of electrons, which is fixed by the atomic number, i.e. the number of protons in the nucleus. Isotopes have the same number of protons but different numbers of neutrons, so they have the same chemical properties."
  }
];

export default physicsJamb1997;