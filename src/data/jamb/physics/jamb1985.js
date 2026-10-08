// JAMB 1985 Physics Past Questions
// Flat array of standalone question objects with topics, answers and explanations.
// Questions containing complex geometric diagrams, coordinate graphs or custom data tables were skipped.
//
// Math display: all symbols are real Unicode characters (no LaTeX, no KaTeX needed):
//   powers 10³, m/s²   subscripts P₁ P₂ F₁ F₂   operators × ÷ − √ ≈ →   Greek π θ μ   units °C, mm², J kg⁻¹ °C⁻¹
// Save and serve this file as UTF-8 (web pages: <meta charset="utf-8">).
//
// Items marked "// CHECK SOURCE" need the owner to verify against the original paper.

const physicsJamb1985 = [
  {
    subject: "Physics", topic: "Measurement & Units", year: 1985, exam: "JAMB",
    question: "Which of the following is NOT a fundamental S.I. unit?",
    options: ["Metre", "Ampere", "Second", "Kelvin", "Radian"],
    answer: "Radian",
    explanation: "The fundamental SI units are the metre, kilogram, second, ampere, kelvin, mole and candela. The radian is a supplementary unit used to measure plane angles, so it is not a fundamental unit."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1985, exam: "JAMB",
    question: "A simple pendulum with a period of 2.0s has its length doubled. Its new period is",
    options: ["1.00 s", "1.41 s", "2.83 s", "0.35 s", "4.00 s"],
    answer: "2.83 s",
    explanation: "The period of a simple pendulum is T = 2π√(L/g), so T is proportional to √L. If the length is doubled, the new period is 2.0 × √2 = 2.0 × 1.414 ≈ 2.83 s."
  },
  {
    subject: "Physics", topic: "Measurement & Units", year: 1985, exam: "JAMB",
    question: "Which of the following statements are true about the spring balance and the chemical balance?\nI. Both are used to measure the mass of an object.\nII. Either of them may be used to measure the weight of an object.\nIII. The spring balance works on the principle of Hooke's law while the chemical balance works on the principle of moments.\nIV. A change in gravity changes the readings of a spring balance but not that of a chemical balance.",
    options: ["I and IV", "II and III", "I, II, and III", "III and IV", "I and III"],
    answer: "III and IV",
    explanation: "The spring balance works on Hooke's law (extension proportional to force), while the chemical balance works on the principle of moments (III). The chemical balance compares the unknown mass with standard masses, so a change in gravity affects both sides equally. A spring balance reading changes with gravity (IV)."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1985, exam: "JAMB",
    question: "Which of the following types of motion are oscillatory?\nI. A diving board when used by a diver.\nII. The motion of the balance wheel of a wrist watch.\nIII. The motion of the turn-table of a record player.\nIV. The motion of the center of a ten kobo piece as it rolls down an inclined plane.\nV. The motion of the needle of a D.C. ammeter into which a low frequency A.C. current is passed.",
    options: ["I and II only", "I, II and III", "II, III and IV", "I, II and V", "III, IV, and V."],
    answer: "I, II and V",
    explanation: "Oscillatory motion is a repeated back-and-forth movement about a fixed position. A diving board vibrates (I), a balance wheel swings back and forth (II), and the needle of a D.C. ammeter carrying a low-frequency A.C. current swings either side of zero (V). A turn-table (III) rotates steadily and a rolling coin (IV) moves in one direction, so neither oscillates."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1985, exam: "JAMB",
    question: "If a car starts from rest and moves with a uniform acceleration of 10 m/s² for ten seconds, the distance it covers in the last one second of the motion is",
    options: ["95 m", "100 m", "500 m", "905 m", "1000 m"],
    answer: "95 m",
    explanation: "Distance in 10 s: s₁₀ = ½at² = ½ × 10 × 10² = 500 m. Distance in 9 s: s₉ = ½ × 10 × 9² = 5 × 81 = 405 m. Distance in the last (10th) second = 500 − 405 = 95 m."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1985, exam: "JAMB",
    question: "A block of mass 2.0kg resting on a smooth horizontal plane is acted upon simultaneously by two forces, 10N due North and 10N due East. The magnitude of the acceleration produced by the forces on the block is",
    options: ["0.10 m/s²", "7.05 m/s²", "10.00 m/s²", "14.10 m/s²", "20.00 m/s²"],
    answer: "7.05 m/s²",
    explanation: "North and East are perpendicular, so the resultant force is √(10² + 10²) = √200 ≈ 14.14 N. Then a = F/m = 14.14/2.0 ≈ 7.07 m/s², and the nearest option is 7.05 m/s²."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1985, exam: "JAMB",
    question: "A metal block of mass 5kg lies on a rough horizontal platform. If a horizontal force of 8N applied to the block through its centre of mass just slides the block on the platform, then the coefficient of limiting friction between the block and the platform is",
    options: ["0.16", "0.63", "0.80", "1.60", "2.00"],
    answer: "0.16",
    explanation: "Limiting friction F = μR. On a horizontal surface, the normal reaction is R = mg = 5 × 10 = 50 N. The block just slides at 8 N, so F = 8 N, and μ = F/R = 8/50 = 0.16."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1985, exam: "JAMB",
    question: "Which of the following is NOT a force?",
    options: ["Friction", "Tension", "Upthrust", "Weight", "Impulse"],
    answer: "Impulse",
    explanation: "Friction, tension, upthrust and weight are all forces, measured in newtons. Impulse is the product of a force and the time for which it acts (equal to the change in momentum), measured in N s, so it is not a force."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1985, exam: "JAMB",
    question: "Two masses 40g and 60g respectively, are attached firmly to the ends of a light metre rule. The centre of gravity of the system is",
    options: ["At the mid-point of the metre rule", "40cm from the lighter mass", "40cm from the heavier mass", "60cm from the heavier mass", "indeterminate because the metre-rule is light."],
    answer: "40cm from the heavier mass",
    explanation: "Put the 40g mass at the 0cm mark and the 60g mass at the 100cm mark. Taking moments about the 0cm mark, the centre of gravity is at (40 × 0 + 60 × 100)/(40 + 60) = 60cm from the lighter mass. That is 100 − 60 = 40cm from the heavier mass."
  },
  {
    // CHECK SOURCE: the original key was "10cm", but the working below gives 15cm, which is option A.
    subject: "Physics", topic: "Vectors & Mechanics", year: 1985, exam: "JAMB",
    question: "A force of 100N stretches an elastic string to a total length of 20cm. If an additional force of 100N stretches the string 5cm further, find the natural length of the string.",
    options: ["15cm", "12 cm", "10cm", "8 cm", "5 cm"],
    answer: "15cm",
    explanation: "By Hooke's law, extension is proportional to force. The additional 100N produces a 5cm extension, so the first 100N also produces a 5cm extension. The natural length is therefore 20 − 5 = 15cm. Check: with L₀ as the natural length, 100/200 = (20 − L₀)/(25 − L₀) gives L₀ = 15cm."
  },
  {
    subject: "Physics", topic: "Hydrostatics & Fluids", year: 1985, exam: "JAMB",
    question: "Two divers G and H are at depths 20m and 40m respectively below the water surface in a lake. The pressure on G is P₁ while the pressure on H is P₂. If the atmospheric pressure is equivalent to 10m of water, then the value of P₂/P₁ is",
    options: ["0.50", "0.60", "1.67", "2.00", "3.00"],
    answer: "1.67",
    explanation: "The total pressure includes atmospheric pressure. P₁ = 10 + 20 = 30 m of water and P₂ = 10 + 40 = 50 m of water. So P₂/P₁ = 50/30 = 1.67."
  },
  {
    subject: "Physics", topic: "Hydrostatics & Fluids", year: 1985, exam: "JAMB",
    question: "The areas of the effort and load pistons of a hydraulic press are 0.5 m² and 5 m² respectively. If a force F₁ of 100N is applied on the effort piston, the force F₂ on the load is",
    options: ["10 N", "100 N", "500 N", "1000 N", "5000 N"],
    answer: "1000 N",
    explanation: "By Pascal's principle, pressure is transmitted equally through the fluid: F₁/A₁ = F₂/A₂. So 100/0.5 = F₂/5, which gives F₂ = (100 × 5)/0.5 = 1000 N."
  },
  {
    subject: "Physics", topic: "Hydrostatics & Fluids", year: 1985, exam: "JAMB",
    question: "A metal cube of volume 10³ mm³ is lowered into a measuring cylinder containing water. If the internal cross-sectional area of the cylinder is 1.5 × 10² mm², by how much does the water level rise in the cylinder?",
    options: ["6.67 × 10⁰ mm", "8.50 × 10² mm", "1.15 × 10³ mm", "2.50 × 10³ mm", "1.50 × 10⁵ mm"],
    answer: "6.67 × 10⁰ mm",
    explanation: "The volume of water displaced equals the volume of the submerged cube: V = A × h. So 10³ = (1.5 × 10²) × h, which gives h = 1000/150 = 6.67 mm = 6.67 × 10⁰ mm."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1985, exam: "JAMB",
    question: "Two liquids, P at a temperature of 20°C and Q at a temperature of 80°C have specific heat capacities of 1.0 J kg⁻¹ °C⁻¹ and 1.5 J kg⁻¹ °C⁻¹ respectively. If equal masses of P and Q are mixed in a lagged calorimeter, then the equilibrium temperature is",
    options: ["44°C", "50°C", "56°C", "60°C", "70°C"],
    answer: "56°C",
    explanation: "Heat lost by Q = heat gained by P. Let the equilibrium temperature be θ. With equal masses, 1.5(80 − θ) = 1.0(θ − 20). So 120 − 1.5θ = θ − 20, which gives 140 = 2.5θ and θ = 56°C."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1985, exam: "JAMB",
    question: "A quantity of gas occupies a certain volume when the temperature is −73°C and the pressure is 1.5 atmospheres. If the pressure is increased to 4.5 atmospheres and the volume is halved at the same time, what will be the new temperature of the gas?",
    options: ["573°C", "327°C", "300°C", "110°C", "27°C"],
    answer: "27°C",
    explanation: "The initial temperature is T₁ = −73 + 273 = 200 K. Using P₁V₁/T₁ = P₂V₂/T₂ with V₂ = ½V₁: (1.5 × V₁)/200 = (4.5 × ½V₁)/T₂, so T₂ = (2.25 × 200)/1.5 = 300 K. In Celsius this is 300 − 273 = 27°C."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1985, exam: "JAMB",
    question: "Water shows anomalous behaviour",
    options: ["Below 0°C", "Between 0°C and 4°C", "At exactly 4°C", "Between 4°C and 100°C", "Above 100°C"],
    answer: "Between 0°C and 4°C",
    explanation: "Water shows anomalous expansion between 0°C and 4°C. Instead of expanding when heated, it contracts, and it reaches its maximum density at 4°C."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1985, exam: "JAMB",
    question: "A good calorimeter should be made of a material with",
    options: [
      "Low specific heat capacity and low heat conductivity.",
      "Low specific heat capacity and high heat conductivity.",
      "High specific heat capacity and low heat conductivity.",
      "High specific heat capacity and high heat conductivity.",
      "Dull surface and low heat conductivity."
    ],
    answer: "Low specific heat capacity and high heat conductivity.",
    explanation: "A calorimeter needs a low specific heat capacity so that it absorbs very little heat itself, and a high heat conductivity (as in copper) so that its contents reach thermal equilibrium quickly and evenly."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1985, exam: "JAMB",
    question: "Which of the following statements is NOT correct?",
    options: [
      "Boiling occurs when the saturated vapour pressure of the liquid involved equals the external pressure.",
      "Both the boiling point and the saturated vapour pressure of a given liquid depend on the external pressure.",
      "The saturated vapour pressure rises with an increase in temperature.",
      "The saturated vapour pressure is independent of the volume available for the vapour.",
      "It is possible to boil water at a lower temperature than 100°C at high altitudes."
    ],
    answer: "Both the boiling point and the saturated vapour pressure of a given liquid depend on the external pressure.",
    explanation: "The saturated vapour pressure of a liquid depends only on its temperature and the nature of the liquid. It does not depend on the external pressure, so saying that it does is incorrect. The boiling point does depend on external pressure."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1985, exam: "JAMB",
    question: "Which of the following phenomena CANNOT be explained by the molecular theory of matter?",
    options: ["Expansion", "Convection", "Conduction", "Radiation", "Evaporation."],
    answer: "Radiation",
    explanation: "Expansion, convection, conduction and evaporation all depend on the motion, collisions or spacing of molecules. Radiation is the transfer of energy by electromagnetic waves, which needs no material medium and so is not explained by the molecular theory."
  },
  {
    // The source file had year 1983 on this item; corrected to 1985 to match the rest of the paper.
    subject: "Physics", topic: "Sound & Waves", year: 1985, exam: "JAMB",
    question: "In order to find the depth of the sea, a ship sends out a sound wave and receives an echo after one second. If the velocity of sound in water is 1500m/s, what is the depth of the sea?",
    options: ["0.75km", "1.50km", "2.20km", "3.00km", "3.75km"],
    answer: "0.75km",
    explanation: "The sound travels to the sea bed and back, so 2d = v × t. With t = 1 s and v = 1500 m/s, 2d = 1500 and d = 750 m = 0.75 km."
  }
];

export default physicsJamb1985;