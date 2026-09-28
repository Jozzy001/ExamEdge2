// JAMB 1996 Physics Past Questions
// Fully flattened — standalone objects with topics, answers, and detailed explanations.
// Strictly skipped questions containing complex geometric diagrams or custom data tables.

const physicsJamb1996 = [
  {
    subject: "Physics", topic: "Measurement & Units", year: 1996, exam: "JAMB",
    question: "At what respective values of X, Y and Z would the unit of force, the Newton, be dimensionally equivalent to M^X L^Y T^Z?",
    options: ["-1, 1, 2", "1, 2, -2", "1, -1, 2", "1, 1, -2"],
    answer: "1, 1, -2",
    explanation: "By Newton's second law, Force = Mass × Acceleration. In base SI units, 1 Newton = 1 kg·m·s⁻². Therefore, the dimensions of force are M¹ L¹ T⁻². Matching these exponents to the expression gives X = 1, Y = 1, and Z = -2."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1996, exam: "JAMB",
    question: "The distance x (in metres) travelled by a particle in time t (in seconds) is described by the equation x = 10 + 12t². Find the average speed of the particle between the time interval t = 2s and t = 5s.",
    options: ["60 ms⁻¹", "72 ms⁻¹", "84 ms⁻¹", "108 ms⁻¹"],
    answer: "84 ms⁻¹",
    explanation: "Average speed is calculated as total change in position divided by total time interval: v_avg = (x₂ - x₁) / (t₂ - t₁). At t = 5s, x₂ = 10 + 12(5²) = 10 + 12(25) = 310m. At t = 2s, x₁ = 10 + 12(2²) = 10 + 12(4) = 58m. Therefore, v_avg = (310 - 58) / (5 - 2) = 252 / 3 = 84 ms⁻¹."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1996, exam: "JAMB",
    question: "A 5kg block is released from rest on a smooth plane inclined at an angle of 30° to the horizontal. What is its acceleration down the plane? [g = 10 ms⁻²]",
    options: ["5.0 ms⁻²", "5.8 ms⁻²", "8.7 ms⁻²", "25.0 ms⁻²"],
    answer: "5.0 ms⁻²",
    explanation: "The component of the gravitational force pulling an object down a smooth inclined plane is mg sin(θ). According to Newton's second law, the acceleration down the plane is a = g sin(θ). Substituting the given parameters yields: a = 10 ms⁻² × sin(30°) = 10 × 0.5 = 5.0 ms⁻²."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1996, exam: "JAMB",
    question: "An arrow of mass 0.1kg moving with a horizontal velocity of 15 ms⁻¹ is shot into a wooden block of mass 0.4 kg lying at rest on a smooth horizontal surface. Their common velocity after impact is",
    options: ["15.0 ms⁻¹", "7.5 ms⁻¹", "3.8 ms⁻¹", "3.0 ms⁻¹"],
    answer: "3.0 ms⁻¹",
    explanation: "This is a perfectly inelastic collision. By the law of conservation of linear momentum: m₁u₁ + m₂u₂ = (m₁ + m₂)v. Substituting the values gives: (0.1 × 15) + (0.4 × 0) = (0.1 + 0.4)v → 1.5 = 0.5v → v = 1.5 / 0.5 = 3.0 ms⁻¹."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1996, exam: "JAMB",
    question: "Two bodies X and Y are projected on the same horizontal plane, with the same initial speed but at angles 30° and 60° respectively to the horizontal. Neglecting air resistance, the ratio of the range of X to that of Y is",
    options: ["1:1", "1:2", "3:1", "1:3"],
    answer: "1:1",
    explanation: "The horizontal range of a projectile is R = (u² sin(2θ)) / g. For body X, sin(2 × 30°) = sin(60°) = √3/2. For body Y, sin(2 × 60°) = sin(120°) = sin(180° - 60°) = sin(60°) = √3/2. Since both bodies share identical initial velocities and complementary projection angles (30° + 60° = 90°), their horizontal ranges are exactly equal, making the ratio 1:1."
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
    explanation: "According to Newton's second law, Force = Mass × Acceleration (F = ma). Since mass is a scalar multiplier, the net force vector dynamically matches the direction and phase of the acceleration vector at all times during simple harmonic motion."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1996, exam: "JAMB",
    question: "A body of mass 2 kg moving vertically upwards has its velocity increased uniformly from 10 ms⁻¹ to 40 ms⁻¹ in 4s. Neglecting air resistance, calculate the upward vertical force acting on the body. [g = 10 ms⁻²]",
    options: ["15N", "20N", "35N", "45N"],
    answer: "35N",
    explanation: "First, calculate the uniform upward acceleration: a = (v - u) / t = (40 - 10) / 4 = 30 / 4 = 7.5 ms⁻². The equations of upward motion yield: net Force = F_upward - mg = ma → F_upward = m(g + a). Substituting the values: F_upward = 2 kg × (10 + 7.5) ms⁻² = 2 × 17.5 = 35N."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1996, exam: "JAMB",
    question: "A planet has mass m₁ and is at a distance r₁ from the sun. A second planet has mass m₂ = 10m₁ and is at a distance of r₂ = 2r₁ from the sun. Determine the ratio of the gravitational force experienced by the first planet to that of the second.",
    options: ["1:5", "2:5", "3:5", "4:5"],
    answer: "2:5",
    explanation: "By Newton's law of universal gravitation, F = (G × M_sun × m) / r². The force on planet 1 is F₁ = (G·M_sun·m₁) / r₁². The force on planet 2 is F₂ = (G·M_sun·(10m₁)) / (2r₁)² = (10·G·M_sun·m₁) / (4r₁²) = 2.5 × F₁. The ratio of the forces F₁ / F₂ = 1 / 2.5 = 2 / 5."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1996, exam: "JAMB",
    question: "An object of mass 100 g projected vertically upwards from ground level has a velocity of 20 ms⁻¹ at a height of 10 m. Calculate its initial kinetic energy at ground level. [g = 10 ms⁻²; neglect air resistance]",
    options: ["10J", "20J", "30J", "50J"],
    answer: "30J",
    explanation: "Convert mass to kilograms: m = 100g = 0.1 kg. By the conservation of mechanical energy, the Total Energy at ground level (purely Kinetic Energy) equals the sum of Potential Energy and Kinetic Energy at height h. KE_initial = mgh + ½mv² = (0.1 × 10 × 10) + (½ × 0.1 × 20²) = 10 + (0.05 × 400) = 10 + 20 = 30J."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1996, exam: "JAMB",
    question: "An electric water pump rated 1.5 kW lifts 200kg of water through a vertical height of 6 metres in 10 seconds. What is the efficiency of the pump? [g = 10 ms⁻²]",
    options: ["90.0%", "85.0%", "80.0%", "65.0%"],
    answer: "80.0%",
    explanation: "Useful work output done = mgh = 200 kg × 10 ms⁻² × 6 m = 12,000 J. Output power developed = Work / time = 12,000 J / 10 s = 1,200 W. Total electrical power input supplied = 1.5 kW = 1,500 W. Efficiency = (Power Output / Power Input) × 100% = (1200 / 1500) × 100% = 0.8 × 100% = 80.0%."
  },
  {
    subject: "Physics", topic: "Properties of Matter", year: 1996, exam: "JAMB",
    question: "A load of 20 N on a wire of cross-sectional area 8 × 10⁻⁷ m⁻² produces an extension of 10⁻⁴ m. Calculate Young's modulus for the material of the wire if its initial length is 3 m.",
    options: ["7.0 × 10¹¹ Nm⁻²", "7.5 × 10¹¹ Nm⁻²", "8.5 × 10¹¹ Nm⁻²", "7.5 × 10¹⁰ Nm⁻²"],
    answer: "7.5 × 10¹¹ Nm⁻²",
    explanation: "Young's modulus is given by the formula: Y = (Force × Initial Length) / (Area × Extension) = (F × L) / (A × e). Substituting the values: Y = (20 × 3) / (8 × 10⁻⁷ × 10⁻⁴) = 60 / (8 × 10⁻¹¹) = 7.5 × 10¹¹ Nm⁻²."
  },
  {
    subject: "Physics", topic: "Hydrostatics & Fluids", year: 1996, exam: "JAMB",
    question: "A cube of sides 0.1 m hangs freely from a string. What is the upthrust on the cube when totally immersed in water? [Density of water is 1000 kg m⁻³, g = 10 ms⁻²]",
    options: ["1000N", "700N", "110N", "10N"],
    answer: "10N",
    explanation: "By Archimedes' principle, Upthrust = Volume of fluid displaced × Density of fluid × g. The volume of the cube is V = 0.1³ = 0.001 m³. Substituting the values: Upthrust = 0.001 m³ × 1000 kg m⁻³ × 10 ms⁻² = 10N."
  },
  {
    subject: "Physics", topic: "Sound & Waves", year: 1996, exam: "JAMB",
    question: "The persistence of sound after its source has been removed is known as",
    options: ["Reverberation", "Acoustic vibration", "Rarefaction", "Echo"],
    answer: "Reverberation",
    explanation: "Reverberation is the prolonged persistence of sound within an enclosed space after the original source has stopped emitting, caused by the continuous overlapping reflection of sound waves from the walls and surfaces."
  },
  {
    subject: "Physics", topic: "Sound & Waves", year: 1996, exam: "JAMB",
    question: "Vibrations in a stretched spring cannot be polarized because they are",
    options: ["Longitudinal waves", "Mechanical waves", "Stationary waves", "Transverse waves."],
    answer: "Longitudinal waves",
    explanation: "Polarization is a wave property unique to transverse waves, where oscillations are restricted to a single plane perpendicular to the path of travel. Longitudinal waves vibrate parallel to their direction of propagation and cannot be polarized."
  },
  {
    subject: "Physics", topic: "Sound & Waves", year: 1996, exam: "JAMB",
    question: "Which of the following combinations of environmental variables affects the velocity of sound in air?\nI. Temperature\nII. Density of air molecules\nIII. Pressure\nIV. Pitch",
    options: ["I, II and IV only", "I and II only", "I, II, III and IV", "II and IV only."],
    answer: "I and II only",
    explanation: "The velocity of sound in an ideal gas depends on its temperature and the mass density of the gas molecules. Standard atmospheric pressure variations do not change sound velocity because any density change cancels out the pressure parameter effect."
  },
  {
subject: "Physics", topic: "Heat & Thermodynamics", year: 1996, exam: "JAMB",
question: "Water is considered a poor thermometric liquid primarily because it",
options: ["Wets glass", "Has low vapour pressure", "Is opaque", "Is a poor conductor of heat"],
answer: "Wets glass",
explanation: "Water is unsuitable for liquid-in-glass thermometers because it sticks to and wets the glass tube capillary interior walls, leading to inaccurate meniscus readings. It also has an anomalous expansion profile between 0°C and 4°C."
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
explanation: "Newton's law of cooling states that the rate of heat loss (cooling) from an object is directly proportional to the temperature differential between the object's body temperature and its immediate surrounding environment: dQ/dt ∝ (T_body - T_surroundings)."
},
{
subject: "Physics", topic: "Electricity & Magnetism", year: 1996, exam: "JAMB",
question: "An electric iron is rated 1000 W, 230 V. What is the resistance of its heating element?",
options: ["57.6 Ω", "55.9 Ω", "51.9 Ω", "52.9 Ω"],
answer: "52.9 Ω",
explanation: "Electrical power can be defined by the relation P = V² / R. Rearranging to isolate resistance gives: R = V² / P = 230² / 1000 = 52,900 / 1000 = 52.9 Ω."
},
{
subject: "Physics", topic: "Electricity & Magnetism", year: 1996, exam: "JAMB",
question: "The human eye controls the total amount of light reaching the retinal layer by dynamically adjusting the size of the",
options: ["Iris", "Cornea", "Optic nerve", "Retina"],
answer: "Iris",
explanation: "The iris functions as a muscular diaphragm. It automatically dilates or constricts the central pupillary aperture to regulate the entry of light into the lens and onto the retina."
},
{
subject: "Physics", topic: "Electricity & Magnetism", year: 1996, exam: "JAMB",
question: "When connected to a 250V power line mains, the safest minimum fuse rating required in the plug of a 1kW electric domestic appliance is",
options: ["5 A", "4 A", "3 A", "2 A"],
answer: "5 A",
explanation: "First, compute the operational current using the relation P = IV → I = P / V = 1000 W / 250 V = 4 A. A fuse rating must be slightly higher than the device's normal operational current to handle safe peaks without blowing prematurely, making 5 A the appropriate option."
}
];
export default physicsJamb1996;