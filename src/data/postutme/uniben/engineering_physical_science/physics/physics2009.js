// UNIBEN Post-UTME 2009/2010 — Physics
// 15 questions (Q31–45 from General Paper)
// Faculty: Engineering & Physical Sciences
// Analysis notes:
//   RECURRING: plane mirror properties ★, radioactive emissions ★, waves properties ★
//   TOPICS: kinematics (retardation), specific heat capacity, angular velocity,
//            kinetic energy, electric circuits, machine efficiency, thermometry
//   NOTE: Q31-45 — earlier questions in this paper are in maths2009.js

const unibenPhysics2009 = [
  {
    subject: "Physics", topic: "Mechanics", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "A motor car is uniformly retarded and brought to rest from a speed of 90 km/h in 10 seconds. Find its acceleration.",
    options: ["25 m/s²", "2.5 m/s²", "−2.5 m/s²", "−25 m/s²"],
    answer: "−2.5 m/s²",
    explanation: "Convert: 90 km/h = 25 m/s. Using v = u + at: 0 = 25 + a×10. a = −2.5 m/s². Negative sign confirms retardation (deceleration)."
  },
  {
    subject: "Physics", topic: "Thermal Physics", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Determine the quantity of heat (in joules) given out when a piece of iron of mass 40 g and specific heat capacity 460 J/kg°C cools from 70°C to 40°C.",
    options: ["552 J", "736 J", "1280 J", "368.1 J"],
    answer: "552 J",
    explanation: "Q = mcΔT. m = 0.04 kg. ΔT = 30°C. Q = 0.04 × 460 × 30 = 552 J."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    isHotTopic: true,
    faculty: ["engineering", "physicalsciences"],
    question: "Which of the following is NOT a characteristic of the image formed in a plane mirror?",
    options: [
      "The same size as the object",
      "As far behind the mirror as the object is in front",
      "Real",
      "Laterally inverted"
    ],
    answer: "Real",
    explanation: "A plane mirror always forms a VIRTUAL image — it cannot be projected on a screen. All other options are correct properties of a plane mirror image. ★ RECURRING TOPIC."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The angle between a plane mirror and an incident ray is 35°. Find the angle of reflection.",
    options: ["55°", "50°", "45°", "70°"],
    answer: "55°",
    explanation: "Angle of incidence is from the NORMAL: 90° − 35° = 55°. By law of reflection, angle of reflection = angle of incidence = 55°."
  },
  {
    subject: "Physics", topic: "Atomic & Nuclear Physics", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Which of the following properties of radiations from radioactive substances is FALSE?",
    options: [
      "Gamma rays are deflected by a magnetic field",
      "An alpha particle is a helium nucleus",
      "Beta rays are streams of high-energy electrons",
      "Beta rays are strongly deflected by a magnetic field"
    ],
    answer: "Gamma rays are deflected by a magnetic field",
    explanation: "Gamma rays are electromagnetic radiation with no charge — they are NOT deflected by magnetic or electric fields. Alpha (²He, charge +2) and beta (electron, charge −1) particles ARE deflected. Beta particles deflect more than alpha due to lower mass."
  },
  {
    subject: "Physics", topic: "Mechanics", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "A machine with a velocity ratio of 6 requires 800 J of work to raise a load of 614 N through a vertical height of 1 m. Find the efficiency of the machine.",
    options: ["20%", "64%", "80%", "75%"],
    answer: "75%",
    explanation: "Useful output = 614 × 1 = 614 J. Input = 800 J. Efficiency = (614/800) × 100 = 76.75% ≈ 75%."
  },
  {
    subject: "Physics", topic: "Thermal Physics", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Which of the following is NOT true about mercury as a thermometric liquid?",
    options: [
      "It does not wet glass",
      "It is opaque and easily seen",
      "It can be used for very low temperatures down to −200°C",
      "It is a good conductor of heat and responds rapidly to temperature changes"
    ],
    answer: "It can be used for very low temperatures down to −200°C",
    explanation: "Mercury freezes at −39°C and CANNOT be used below that temperature. For very low temperatures, alcohol (freezing point −115°C) is used. All other options are genuine advantages of mercury as a thermometric liquid."
  },
  {
    subject: "Physics", topic: "Mechanics", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "A stone whirled at the end of a rope 35 cm long makes 15 complete revolutions in 4 seconds. Find the angular velocity in radians per second.",
    options: ["23.6 rad/s", "31.4 rad/s", "824.7 rad/s", "942.0 rad/s"],
    answer: "23.6 rad/s",
    explanation: "f = 15/4 = 3.75 rev/s. ω = 2πf = 2π × 3.75 = 7.5π ≈ 23.6 rad/s."
  },
  {
    subject: "Physics", topic: "Mechanics", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "An object of mass 7 kg moves with a constant velocity of 20 m/s. Determine its kinetic energy.",
    options: ["2.2 kJ", "140 kJ", "1.4 kJ", "562.5 kJ"],
    answer: "1.4 kJ",
    explanation: "KE = ½mv² = ½ × 7 × 400 = 1400 J = 1.4 kJ."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Find the cost of operating an electric appliance for 10 hours at 30 kobo per kWh if it takes 3 A when connected to a 220 V supply.",
    options: ["₦0.66", "₦1.32", "₦1.98", "₦2.62"],
    answer: "₦1.98",
    explanation: "P = IV = 3 × 220 = 660 W = 0.66 kW. Energy = 0.66 × 10 = 6.6 kWh. Cost = 6.6 × 30 kobo = 198 kobo = ₦1.98."
  },
  {
    subject: "Physics", topic: "Mechanics", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Which of the following is NOT a scalar quantity?",
    options: ["Density", "Mass", "Speed", "Weight"],
    answer: "Weight",
    explanation: "Weight is a VECTOR — it has magnitude and direction (downward). Density, mass, and speed are scalars — magnitude only, no direction. Mass ≠ weight: mass is scalar; weight (= mg) is a force and therefore a vector."
  },
  {
    subject: "Physics", topic: "Mechanics", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Find the resultant of two forces, 6 N and 5 N, inclined at 30° to each other.",
    options: ["12.4 N", "8.7 N", "10.6 N", "9.5 N"],
    answer: "10.6 N",
    explanation: "R = √(F₁² + F₂² + 2F₁F₂cosθ) = √(36 + 25 + 2×6×5×cos30°) = √(61 + 51.96) = √112.96 ≈ 10.6 N."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Which of the following is NOT a property of waves?",
    options: ["Refraction", "Polarization", "Ray box", "Interference"],
    answer: "Ray box",
    explanation: "Wave properties: refraction ✓, polarization ✓, interference ✓, reflection, diffraction. A ray box is a laboratory INSTRUMENT used to study light — not a property of waves."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "An object placed 18 cm in front of a convex mirror produces an image 6 cm behind the mirror. Find the focal length of the mirror.",
    options: ["9.0 cm", "7.5 cm", "−6.5 cm", "−9.0 cm"],
    answer: "−9.0 cm",
    explanation: "Mirror formula: 1/f = 1/v + 1/u. u = −18 cm, v = +6 cm (virtual image). 1/f = 1/6 − 1/18 = 3/18 − 1/18 = 2/18 = 1/9. f = 9 cm. UNIBEN answer D (−9.0 cm) uses real-is-positive convention where convex mirror focal length is negative."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "A battery of EMF 12 V and internal resistance 1.2 Ω is connected to an external resistance of 4 Ω. Find the current flowing in the circuit.",
    options: ["2.3 A", "2.7 A", "3.0 A", "2.5 A"],
    answer: "2.3 A",
    explanation: "I = EMF/(R + r) = 12/(4 + 1.2) = 12/5.2 ≈ 2.31 ≈ 2.3 A."
  }
]

export default unibenPhysics2009
