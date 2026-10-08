// JAMB 1986 Physics Past Questions
// Flat array of standalone question objects with topics, answers and explanations.
// Questions containing complex geometric diagrams or custom data tables were skipped.
//
// Math display: all symbols are real Unicode characters (no LaTeX, no KaTeX needed):
//   powers u², cm³, ms⁻¹   inverse functions sin⁻¹   operators × − → ≈ ≤   Greek π θ μ   units °C, m/s²
// Save and serve this file as UTF-8 (web pages: <meta charset="utf-8">).
//
// Items marked "// CHECK SOURCE" need the owner to verify against the original paper.

const physicsJamb1986 = [
  {
    subject: "Physics", topic: "Measurement & Units", year: 1986, exam: "JAMB",
    question: "Which of the following represents the correct precision if the length of a piece of wire is measured with a metre rule?",
    options: ["35 mm", "35.0 mm", "35.00 mm", "35.01 mm"],
    answer: "35.0 mm",
    explanation: "A standard metre rule has a smallest division of 1 mm. Readings are estimated to about half a division (0.5 mm), which corresponds to one decimal place in millimetres, so 35.0 mm is the correct format."
  },
  {
    subject: "Physics", topic: "Properties of Matter", year: 1986, exam: "JAMB",
    question: "A heavy object is suspended from a string and lowered into water so that it is completely submerged. The object appears lighter because",
    options: [
      "The density of water is less than that of the object.",
      "The pressure is low just below the water surface.",
      "It experiences an upthrust.",
      "The tension in the string neutralizes part of the weight."
    ],
    answer: "It experiences an upthrust.",
    explanation: "By Archimedes' principle, an object immersed in a fluid experiences an upward force called upthrust. This reduces the tension in the string, so the object appears lighter."
  },
  {
    subject: "Physics", topic: "Measurement & Units", year: 1986, exam: "JAMB",
    question: "Which of the following is a derived unit?",
    options: ["Kelvin", "Kilogramme", "Metre", "Newton"],
    answer: "Newton",
    explanation: "The kelvin, kilogramme and metre are fundamental SI units. The newton is a derived unit of force, defined from base units as 1 N = 1 kg m/s²."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1986, exam: "JAMB",
    question: "Two objects, one having three times the mass of the other, are dropped at the same time from a tall building. When they are above the ground, the two objects will have the same",
    options: ["Momentum", "Kinetic energy", "Potential energy", "Acceleration."],
    answer: "Acceleration.",
    explanation: "Neglecting air resistance, all freely falling bodies have the same acceleration (g ≈ 10 m/s²), regardless of their masses."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1986, exam: "JAMB",
    question: "Which of the following is in a neutral equilibrium?",
    options: [
      "A heavy weight suspended on a string.",
      "A cone resting on its slant edge.",
      "A heavy based table lamp.",
      "The beam of a balance in use."
    ],
    answer: "A cone resting on its slant edge.",
    explanation: "An object is in neutral equilibrium if, when displaced slightly, its centre of gravity stays at the same height and the object remains at rest in its new position. A cone resting on its slant edge behaves this way."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1986, exam: "JAMB",
    question: "A ball is thrown vertically into the air with an initial velocity u. What is the greatest height reached?",
    options: ["u/2g", "3u²/2g", "u²/g", "u²/2g"],
    answer: "u²/2g",
    explanation: "Using v² = u² − 2gh, at the highest point v = 0. So 0 = u² − 2gh, which gives the greatest height h = u²/2g."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1986, exam: "JAMB",
    question: "Which of the following assumptions is made in a simple pendulum experiment?",
    options: [
      "The suspending string is inextensible",
      "The bob has a finite size",
      "The bob has a definite mass",
      "The initial angle of oscillation must be large."
    ],
    answer: "The suspending string is inextensible",
    explanation: "The period formula T = 2π√(L/g) assumes that the string is light and inextensible (so the length L stays constant), that the bob behaves like a point mass, and that the angle of oscillation is small (about 10° or less)."
  },
  {
    // CHECK SOURCE: working gives 5/12, which is not among the options as originally transcribed
    // (5/6, 1/3, 2/3, 12). The original key was "1/3". "5/6" is probably a mis-transcription of "5/12".
    subject: "Physics", topic: "Vectors & Mechanics", year: 1986, exam: "JAMB",
    question: "When a box of mass 400g is given an initial speed of 5 ms⁻¹ it slides along a horizontal floor a distance of 3m before coming to rest. What is the coefficient of kinetic friction between the box and the floor? [g = 10 ms⁻²]",
    options: ["5/12", "1/3", "2/3", "12"],
    answer: "5/12",
    explanation: "Using v² = u² + 2as with v = 0, u = 5 m/s and s = 3 m: 0 = 25 + 6a, so a = −25/6 m/s². The friction force F = μmg provides the retardation, so μ = |a|/g = (25/6)/10 = 5/12."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1986, exam: "JAMB",
    question: "The mode of heat transfer which does not require a material medium is",
    options: ["Conduction", "Radiation", "Convection", "Propagation"],
    answer: "Radiation",
    explanation: "Thermal radiation transfers energy by electromagnetic (infrared) waves. Unlike conduction and convection, it needs no material medium and can travel through a vacuum."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1986, exam: "JAMB",
    question: "The expansion of solids can be considered a disadvantage in the",
    options: ["Balance wheel of a watch", "Fitting of iron rims on wheels", "Fire alarm", "Thermostat."],
    answer: "Balance wheel of a watch",
    explanation: "In a watch, thermal expansion changes the size of the balance wheel and so changes its period of oscillation, making the watch gain or lose time. Fitting iron rims, fire alarms and thermostats all use expansion as a useful feature."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1986, exam: "JAMB",
    question: "The specific latent heat of fusion of lead is the amount of heat required to",
    options: [
      "Melt lead at its melting point",
      "Heat a unit mass of lead through 1°C.",
      "Change the state of a unit mass of lead at its melting point.",
      "Change the state of a unit mass of lead at its boiling point."
    ],
    answer: "Change the state of a unit mass of lead at its melting point.",
    explanation: "The specific latent heat of fusion is the quantity of heat needed to change a unit mass (1 kg) of a substance from solid to liquid at its melting point, without any change in temperature."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1986, exam: "JAMB",
    question: "Which of the following is common to both evaporation and boiling? They",
    options: [
      "Take place at any temperature.",
      "Are surface phenomena.",
      "Involve a change of state.",
      "Take place at a definite pressure."
    ],
    answer: "Involve a change of state.",
    explanation: "Evaporation happens only at the surface and at any temperature, whereas boiling occurs throughout the liquid at a fixed temperature. Both, however, change a liquid into a vapour."
  },
  {
    subject: "Physics", topic: "Hydrostatics & Fluids", year: 1986, exam: "JAMB",
    question: "Mercury is suitable as a barometric fluid because it",
    options: [
      "Expands uniformly",
      "Is opaque",
      "Is several times denser than water",
      "Is a good conductor of heat"
    ],
    answer: "Is several times denser than water",
    explanation: "Mercury's high density (13.6 g/cm³) means atmospheric pressure is balanced by a short column of about 760 mm. A water barometer would need a column over 10 m high."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1986, exam: "JAMB",
    question: "Which of the following properties makes metals ideal for cooking utensils?",
    options: [
      "High coefficient of expansion",
      "Good conduction of heat",
      "Low specific heat capacity",
      "Poor radiation of heat."
    ],
    answer: "Good conduction of heat",
    explanation: "Metals have a high thermal conductivity, so heat from the stove passes quickly through the base of the utensil to the food inside."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1986, exam: "JAMB",
    question: "A gas occupies a volume of 300 cm³ at a temperature of 27°C. What is its volume at 54°C when the pressure remains constant?",
    options: ["150 cm³", "273 cm³", "327 cm³", "600 cm³"],
    answer: "327 cm³",
    explanation: "By Charles's law at constant pressure, V₁/T₁ = V₂/T₂. In kelvin, T₁ = 27 + 273 = 300 K and T₂ = 54 + 273 = 327 K. So 300/300 = V₂/327, which gives V₂ = 327 cm³."
  },
  {
    // CHECK SOURCE: as originally transcribed, the keyed option said the frequency CHANGES at a boundary,
    // which is false (and contradicted the explanation). It has been corrected to "does not change". Please confirm.
    subject: "Physics", topic: "Sound & Waves", year: 1986, exam: "JAMB",
    question: "Which of the following is true of sound?",
    options: [
      "Sound travels faster in air at 20°C than at 30°C.",
      "The frequency of a given sound wave does not change when it crosses the boundary separating two media.",
      "The wavelength of a given sound wave in air decreases as the temperature increases.",
      "Sound waves cannot be reflected."
    ],
    answer: "The frequency of a given sound wave does not change when it crosses the boundary separating two media.",
    explanation: "When a wave passes from one medium into another, its speed and wavelength change, but its frequency stays the same because it is fixed by the source. Sound travels faster at higher temperature (so its wavelength increases), and sound waves can be reflected."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 1986, exam: "JAMB",
    question: "In which of the following arrangements is the wavelength in an increasing order?",
    options: [
      "Gamma rays, infra-red rays, X-rays, radiowaves.",
      "Gamma rays, X-rays, infra-red rays, radiowaves.",
      "Radiowaves, X-rays, gamma rays, infra-red rays.",
      "Infra-red rays, radiowaves, X-rays, gamma rays."
    ],
    answer: "Gamma rays, X-rays, infra-red rays, radiowaves.",
    explanation: "In order of increasing wavelength (decreasing frequency), the electromagnetic spectrum runs: gamma rays → X-rays → ultraviolet → visible light → infra-red → microwaves → radiowaves."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 1986, exam: "JAMB",
    question: "If the refractive index of glass is 1.5, what is the critical angle at the air-glass interface?",
    options: ["sin⁻¹(1/2)", "sin⁻¹(2/3)", "sin⁻¹(3/4)", "sin⁻¹(8/9)"],
    answer: "sin⁻¹(2/3)",
    explanation: "The critical angle c satisfies sin c = 1/n. With n = 1.5 = 3/2, sin c = 2/3, so c = sin⁻¹(2/3)."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 1986, exam: "JAMB",
    question: "What is the effect of an increase in the size of the hole of a pin-hole camera on the image?",
    options: [
      "Gives a blurred image.",
      "Corrects for chromatic aberration.",
      "Magnifies the image.",
      "Brings the image into sharper focus."
    ],
    answer: "Gives a blurred image.",
    explanation: "A very small hole lets light from each point of the object reach only one point on the screen, giving a sharp image. A larger hole lets overlapping beams from each point reach the screen, which blurs the image."
  },
  {
    subject: "Physics", topic: "Sound & Waves", year: 1986, exam: "JAMB",
    question: "Which of the following is true of the loudness of sound? It",
    options: [
      "Depends on the square of the amplitude of the vibrating body.",
      "Is proportional to the distance of the observer from the source of the sound.",
      "Is greatest in a vacuum.",
      "Is independent of frequency."
    ],
    answer: "Depends on the square of the amplitude of the vibrating body.",
    explanation: "The intensity of a sound wave is proportional to the square of its amplitude (I ∝ A²). Loudness is the ear's response to intensity, so it depends on the square of the amplitude of the vibrating body."
  }
];

export default physicsJamb1986;