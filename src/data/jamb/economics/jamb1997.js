// JAMB 1997 Physics Past Questions
// Fully flattened — standalone objects with topics, answers, and detailed explanations.
// Strictly skipped questions containing complex geometric diagrams or custom data tables.

const physicsJamb1997 = [
  {
    subject: "Physics", topic: "Measurement & Units", year: 1997, exam: "JAMB",
    question: "Which of the following is a derived unit?",
    options: ["Ampere", "Kilogramme", "Kelvin", "Newton"],
    answer: "Newton",
    explanation: "Fundamental SI units represent independent base quantities (like mass in kilograms, temperature in kelvin, and current in amperes). The Newton is a derived unit of force, mathematically defined from base units as 1 kg·m/s²."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1997, exam: "JAMB",
    question: "A ball is dropped from a height of 20 m. Calculate the time taken for it to hit the ground. [g = 10 ms⁻²]",
    options: ["1 s", "2 s", "3 s", "4 s"],
    answer: "2 s",
    explanation: "Using the linear equation of motion under gravity: s = ut + ½gt². Since the ball is dropped from rest, u = 0. Substituting the given parameters: 20 = 0 + ½(10)t² → 20 = 5t² → t² = 4 → t = 2 s."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1997, exam: "JAMB",
    question: "A constant force of 50 N acts on a body of mass 5 kg initially at rest. Calculate the kinetic energy of the body after 4 seconds.",
    options: ["1000 J", "2000 J", "3000 J", "4000 J"],
    answer: "2000 J",
    explanation: "First find acceleration: a = F/m = 50 / 5 = 10 ms⁻². Next, calculate final velocity after 4 seconds: v = u + at = 0 + (10 × 4) = 40 ms⁻¹. The final kinetic energy is KE = ½mv² = ½ × 5 × 40² = 0.5 × 5 × 1600 = 2000 J."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1997, exam: "JAMB",
    question: "An object is projected at an angle of 60° to the horizontal with a velocity of 40 ms⁻¹. Calculate the horizontal range covered. [g = 10 ms⁻²]",
    options: ["138.6 m", "160.0 m", "80.0 m", "69.3 m"],
    answer: "138.6 m",
    explanation: "The horizontal range R of a projectile is given by R = (u² sin 2θ) / g. Substituting the values: R = (40² × sin(2 × 60°)) / 10 = (1600 × sin 120°) / 10 = 160 × sin 60° = 160 × 0.8660 = 138.56 m ≈ 138.6 m."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1997, exam: "JAMB",
    question: "A simple machine with a velocity ratio of 4 requires an effort of 25 N to lift a load of 80 N. Calculate the efficiency of the machine.",
    options: ["80%", "75%", "50%", "20%"],
    answer: "80%",
    explanation: "Mechanical Advantage (MA) = Load / Effort = 80 / 25 = 3.2. Efficiency (η) = (MA / VR) × 100% = (3.2 / 4) × 100% = 0.8 × 100% = 80%."
  },
  {
    subject: "Physics", topic: "Hydrostatics & Fluids", year: 1997, exam: "JAMB",
    question: "The property of a liquid which makes it behave like an elastic stretched membrane is called",
    options: ["Capillarity", "Viscosity", "Surface tension", "Osmosis"],
    answer: "Surface tension",
    explanation: "Surface tension is the property of a liquid surface that causes it to behave like a stretched elastic skin. This phenomenon is due to the cohesive forces of attraction pulling surface molecules inward toward the bulk liquid."
  },
  {
    subject: "Physics", topic: "Properties of Matter", year: 1997, exam: "JAMB",
    question: "Young's modulus of elasticity is mathematically defined as the ratio of",
    options: ["Tensile strain to tensile stress", "Tensile stress to tensile strain", "Force to area", "Extension to original length"],
    answer: "Tensile stress to tensile strain",
    explanation: "By definition, Young's modulus (E) measures the mechanical stiffness of a solid material and is calculated as the ratio of tensile stress (force per unit area) to tensile strain (fractional deformation change in length) within the proportional elastic limit."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1997, exam: "JAMB",
    question: "The lower and upper fixed points of a mercury thermometer are 200 mm apart. What is the Celsius temperature when the mercury column stands 50 mm above the lower mark?",
    options: ["20°C", "25°C", "50°C", "75°C"],
    answer: "25°C",
    explanation: "Using linear scaling interpolation: θ = (l_θ / l_100) × 100°C. Given height above the lower fixed point is 50 mm and the total fundamental interval is 200 mm, we get: θ = (50 / 200) × 100°C = ¼ × 100°C = 25°C."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1997, exam: "JAMB",
    question: "The primary mode of heat transfer from the core of the Sun to the Earth across space is",
    options: ["Conduction", "Convection", "Radiation", "Evaporation"],
    answer: "Radiation",
    explanation: "Conduction and convection depend entirely on a material medium to transfer thermal energy. Radiation transmits energy via electromagnetic infrared waves, allowing heat to travel across the vacuum of outer space."
  },
  {
    subject: "Physics", topic: "Sound & Waves", year: 1997, exam: "JAMB",
    question: "A wave traveling in a medium has a velocity of 300 ms⁻¹ and a frequency of 150 Hz. Determine its wavelength.",
    options: ["0.5 m", "2.0 m", "4.5 m", "45.0 m"],
    answer: "2.0 m",
    explanation: "Using the fundamental wave equation: v = fλ. Rearranging the formula to isolate wavelength: λ = v / f = 300 ms⁻¹ / 150 Hz = 2.0 m."
  },
  {
    subject: "Physics", topic: "Sound & Waves", year: 1997, exam: "JAMB",
    question: "The structural distance between two consecutive antinodes in a stationary wave pattern is equal to",
    options: ["One wavelength", "Half a wavelength", "A quarter of a wavelength", "Twice the wavelength"],
    answer: "Half a wavelength",
    explanation: "In any stationary (standing) wave field, the node-to-node distance or the antinode-to-antinode distance is always exactly equal to half of a full wavelength (λ/2). The distance from a single node to its immediate neighboring antinode is a quarter wavelength (λ/4)."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 1997, exam: "JAMB",
    question: "When a ray of light passes at an angle from an optically less dense medium into an optically denser medium, it bends",
    options: ["Away from the normal", "Towards the normal", "At 90° to the interface", "Parallel to the interface"],
    answer: "Towards the normal",
    explanation: "By Snell's law of refraction, moving into a medium with a higher refractive index causes the light wave propagation speed to drop. This deceleration forces the refracted light ray to bend inward, shifting closer towards the normal line."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 1997, exam: "JAMB",
    question: "A convex mirror always produces an image that is virtual, erect, and",
    options: ["Magnified", "Diminished", "Inverted", "Real"],
    answer: "Diminished",
    explanation: "Convex diverging mirrors always reflect rays away from the principal axis. Extending these rays behind the mirror forms a virtual, upright (erect), and characteristic smaller (diminished) image regardless of the object's position."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 1997, exam: "JAMB",
    question: "The physical parameter that measures the degree of obstruction to the flow of an electric current through a material is called",
    options: ["Capacitance", "Inductance", "Resistance", "Conductivity"],
    answer: "Resistance",
    explanation: "Resistance is the specific property of an electrical conductor that opposes or obstructs the free drift of electrons through its lattice structure when a potential difference is applied across its boundaries."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 1997, exam: "JAMB",
    question: "A capacitor stores electrical energy within the region between its plates in the form of an",
    options: ["Electric field", "Magnetic field", "Electromagnetic wave", "Eddy current"],
    answer: "Electric field",
    explanation: "When a capacitor is charged, opposite electrostatic charges collect on the surface of its plates. This separation of charge sets up an internal electric field across the dielectric medium, which stores potential energy."
  },
  {
    subject: "Physics", topic: "Nuclear Physics", year: 1997, exam: "JAMB",
    question: "The chemical and physical behavior stating that isotopes of a specific element possess identical chemical properties is because they have the same",
    options: ["Number of neutrons", "Number of protons", "Mass number", "Atomic mass"],
    answer: "Number of protons",
    explanation: "Chemical reactions are governed by electron configurations, which depend directly on the atomic number or number of protons in the nucleus. Isotopes share the same number of protons but differ in their neutron count, meaning they have matching chemical properties."
  }
];

export default physicsJamb1997;
