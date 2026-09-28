// JAMB 1984 Physics Past Questions
// Fully flattened — standalone objects with topics, answers, and detailed explanations.
// Strictly skipped questions containing complex geometric diagrams, data tables, or missing images.

const physicsJamb1984 = [
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1984, exam: "JAMB",
    question: "The distance travelled by a particle starting from rest is plotted against the square of the time elapsed from the commencement of motion. The resulting graph is linear. The slope of this graph is a measure of",
    options: ["Initial displacement", "Initial velocity", "Acceleration", "Half the acceleration", "Half the initial velocity"],
    answer: "Half the acceleration",
    explanation: "From the equation of motion starting from rest ($u = 0$), the distance is given by $s = \\frac{1}{2}at^2$. Comparing this with the equation of a straight line $y = mx$, where $y = s$ and $x = t^2$, the slope $m$ is equal to $\\frac{1}{2}a$ (half the acceleration)."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1984, exam: "JAMB",
    question: "For which of the underlisted quantities is the derived unit $ML^{2}T^{-2}$ correct?\nI. Moment of a force\nII. Work\nIII. Acceleration",
    options: ["I only", "II only", "III only", "I and II", "II and III"],
    answer: "I and II",
    explanation: "The dimensions of Work are $\\text{Force} \\times \\text{Distance} = MLT^{-2} \\times L = ML^2T^{-2}$. The dimensions of the Moment of a force are also $\\text{Force} \\times \\text{Perpendicular Distance} = ML^2T^{-2}$. Acceleration has dimensions of $LT^{-2}$, making statements I and II correct."
  },
  {
    subject: "Physics", topic: "Hydrostatics & Fluids", year: 1984, exam: "JAMB",
    question: "What volume of alcohol with a density of $8.4 \\times 10^{2}\\,\\text{kg}\\,\\text{m}^{-3}$ will have the same mass as $4.2\\,\\text{m}^{3}$ of petrol whose density is $7.2 \\times 10^{2}\\,\\text{kg}\\,\\text{m}^{-3}$?",
    options: ["$1.4\\,\\text{m}^{3}$", "$3.6\\,\\text{m}^{3}$", "$4.9\\,\\text{m}^{3}$", "$5.0\\,\\text{m}^{3}$", "$5.8\\,\\text{m}^{3}$"],
    answer: "$3.6\\,\\text{m}^{3}$",
    explanation: "Since the masses are equal, $m_{\\text{alcohol}} = m_{\\text{petrol}} \\rightarrow \\rho_{\\text{alcohol}} \\times V_{\\text{alcohol}} = \\rho_{\\text{petrol}} \\times V_{\\text{petrol}}$. Substituting the values: $8.4 \\times 10^2 \\times V_{\\text{alcohol}} = 7.2 \\times 10^2 \\times 4.2$. Solving for volume gives $V_{\\text{alcohol}} = (7.2 \\times 4.2) / 8.4 = 3.6\\,\\text{m}^{3}$."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 1984, exam: "JAMB",
    question: "For correcting long sight defects in the human eye we require a",
    options: ["Converging lens", "Diverging lens", "Microscope", "Periscope", "Plain glass sheet."],
    answer: "Converging lens",
    explanation: "Long-sightedness (hypermetropia) occurs when the eyeball is too short or the lens focal length is too long, causing images of near objects to form behind the retina. A converging (convex) lens refocused the light rays properly onto the retina."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 1984, exam: "JAMB",
    question: "For a concave mirror to form a real diminished image, the object must be placed",
    options: [
      "Behind the mirror",
      "Between the mirror and its focus",
      "Between the focus and the center of curvature",
      "At the center of curvature",
      "At a distance greater than the radius of curvature."
    ],
    answer: "At a distance greater than the radius of curvature.",
    explanation: "A concave mirror produces a real, inverted, and diminished image only when the object is positioned beyond the center of curvature ($C$). Since the radius of curvature ($r$) is the distance from the pole to $C$, the object distance must be greater than $r$."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 1984, exam: "JAMB",
    question: "The unit quantity of electricity is called",
    options: ["The ampere", "The volt", "The coulomb", "The ammeter", "Electromotive force."],
    answer: "The coulomb",
    explanation: "The Coulomb is the SI derived unit of electric charge (quantity of electricity). It is defined as the amount of electricity transported in one second by a steady current of one ampere ($Q = It$)."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 1984, exam: "JAMB",
    question: "The resistance of a wire depends on",
    options: ["The length of the wire", "The diameter of the wire", "The temperature of the wire", "The resistivity of the wire", "All of the above."],
    answer: "All of the above.",
    explanation: "The resistance of a conductor is mathematically defined by $R = \\rho L / A$, where $\\rho$ is resistivity, $L$ is length, and $A$ is the cross-sectional area (dependent on diameter). Furthermore, resistivity and resistance fluctuate dynamically with temperature variations, meaning all parameters are correct."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 1984, exam: "JAMB",
    question: "Which of the following components is NOT contained in a dry Leclanché cell?",
    options: ["Carbon rod", "Paste of manganese dioxide", "Paste of ammonium chloride", "Zinc case", "Copper rod."],
    answer: "Copper rod.",
    explanation: "A standard dry Leclanché cell comprises a zinc outer container (negative electrode), a central carbon rod (positive electrode), ammonium chloride paste (electrolyte), and manganese dioxide (polarizer). A copper rod is not part of this configuration."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 1984, exam: "JAMB",
    question: "Which of the following descriptions matches high-tension power transmission parameters?",
    options: ["High resistance and low voltage", "Low current and high voltage", "High current and low voltage", "High voltage and zero current", "High current and low resistance."],
    answer: "Low current and high voltage",
    explanation: "To minimize long-distance electrical energy transfer losses caused by line resistance wire heating ($P = I^2R$), grid power is transformed up to a very high voltage, which simultaneously lowers the current load ($I$)."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1984, exam: "JAMB",
    question: "The lower and upper fixed points marked on a mercury-in-glass thermometer are 210mm apart. The end of the mercury column in the tube is 49mm above the lower fixed point in a room. What is the temperature of the room in degrees Celsius?",
    options: ["$55.3^{\\circ}\\text{C}$", "$23.3^{\\circ}\\text{C}$", "$49.0^{\\circ}\\text{C}$", "$16.1^{\\circ}\\text{C}$", "$76.7^{\\circ}\\text{C}$"],
    answer: "$23.3^{\\circ}\\text{C}$",
    explanation: "Using the linear interpolation formula for thermometer scaling: $\\theta = (l_{\\theta} - l_0) / (l_{100} - l_0) \\times 100$. Given the fundamental interval $(l_{100} - l_0) = 210\\,\\text{mm}$ and height above ice point $= 49\\,\\text{mm}$, we get $\\theta = (49 / 210) \\times 100 \\approx 23.33^{\\circ}\\text{C}$."
  },
  {
    subject: "Physics", topic: "Sound & Waves", year: 1984, exam: "JAMB",
    question: "When vibration occurs in an air column, the distance between a node and an adjacent antinode is equal to",
    options: ["One-quarter of the wavelength", "One-half of the wavelength", "The wavelength", "Twice the wavelength", "Four-times the wavelength."],
    answer: "One-quarter of the wavelength",
    explanation: "In stationary wave patterns, the structural distance between two consecutive nodes or two consecutive antinodes is $\\frac{\\lambda}{2}$. The distance between a node and its immediate neighboring antinode is exactly a quarter of a wavelength ($\\frac{\\lambda}{4}$)."
  },
  {
    subject: "Physics", topic: "Sound & Waves", year: 1984, exam: "JAMB",
    question: "Of two identical tuning forks with a natural frequency of 256 Hz, one is loaded so that 4 beats per second are heard when they are sounded together. What is the frequency of the loaded tuning fork?",
    options: ["260 Hz", "252 Hz", "248 Hz", "264 Hz", "258 Hz"],
    answer: "252 Hz",
    explanation: "Beat frequency is the absolute difference between two interacting frequencies ($f_B = |f_1 - f_2|$). Loading a tuning fork with wax increases its mass, which slows its vibration and lowers its natural frequency. Thus, $f_{\\text{loaded}} = 256 - 4 = 252\\,\\text{Hz}$."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1984, exam: "JAMB",
    question: "Dew point is the temperature at which water vapour in the atmosphere",
    options: ["Turns into steam", "Solidifies into ice pellets", "First condenses into liquid form", "Is just sufficient to cause cooling", "Has a relative humidity of fifty percent."],
    answer: "First condenses into liquid form",
    explanation: "The dew point is the precise temperature threshold to which air must be cooled to become fully saturated with water vapour (relative humidity reaching 100%), causing excess water vapour to begin condensing into liquid droplets."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1984, exam: "JAMB",
    question: "If a solid changes directly into a gas when heat is applied, the process is called",
    options: ["Vaporization", "Evaporation", "Sublimation", "Ionization", "Conversion."],
    answer: "Sublimation",
    explanation: "Sublimation defines a specialized phase transition where a solid substance absorbs thermal energy and converts directly into a gaseous state, bypassing the intermediate liquid phase entirely (e.g., dry ice, camphor)."
  },
  {
    subject: "Physics", topic: "Sound & Waves", year: 1984, exam: "JAMB",
question: "Which of the following statements is/are NOT correct?\nI. Pressure changes do not affect the speed of sound in air.\nII. The velocity of sound increases with temperature.\nIII. The quality of a note depends only on its frequency.",
options: ["I only", "II only", "III only", "I and III only", "II and III only."],
answer: "III only",
explanation: "Statement I is correct because pressure cancel shifts do not impact sound speed if temperature is stable. Statement II is correct since sound speed is directly proportional to the square root of absolute temperature. Statement III is incorrect because the quality (timbre) of a note depends on the unique blend of overtones and harmonics present, not on the fundamental frequency alone."
},
{
subject: "Physics", topic: "Vectors & Mechanics", year: 1984, exam: "JAMB",
question: "A machine has a velocity ratio of 5. It requires a 50kg weight to overcome a 200kg weight. The efficiency is",
options: ["4%", "5%", "40%", "50%", "80%"],
answer: "80%",
explanation: "Mechanical Advantage $\text{MA} = \text{Load} / \text{Effort} = 200\,\text{kg} / 50\,\text{kg} = 4$. Efficiency $(\eta) = (\text{MA} / \text{Velocity Ratio}) \times 100\% = (4 / 5) \times 100\% = 80\%$."
},
{
subject: "Physics", topic: "Electricity & Magnetism", year: 1984, exam: "JAMB",
question: "A device that converts sound energy into electrical energy is",
options: ["The horn of a motor car", "An A.C. generator", "A microphone", "The telephone earpiece", "A loudspeaker."],
answer: "A microphone",
explanation: "A microphone utilizes a flexible diaphragm that captures incoming acoustic sound pressure waves and moves an induction coil or plate to convert those vibrations into a matching electrical signal analog."
},
{
subject: "Physics", topic: "Electricity & Magnetism", year: 1984, exam: "JAMB",
question: "Cathode rays are",
options: ["High-energy electromagnetic waves", "Protons", "Streams of electrons", "Neutrons", "Radio waves"],
answer: "Streams of electrons",
explanation: "Cathode rays are beams or continuous streams of fast-moving electrons emitted from the negative electrode (cathode) inside an evacuated vacuum discharge tube tube setup."
},
{
subject: "Physics", topic: "Waves & Optics", year: 1984, exam: "JAMB",
question: "What is the apparent colour of a RED SHIRT when viewed in PURE green light?",
options: ["Red", "Green", "Yellow", "Black", "Blue"],
answer: "Black",
explanation: "An opaque red object appears red because it selectively reflects red wavelengths while absorbing all other visible colors. When illuminated exclusively by pure green light, the red shirt absorbs the green light entirely and reflects nothing, making it appear black."
},
{
subject: "Physics", topic: "Waves & Optics", year: 1984, exam: "JAMB",
question: "The spectrum of white light consists of coloured lights arranged in which of the following sequences?",
options: [
"Blue, red, green, yellow, indigo, violet, orange.",
"Red, orange, yellow, green, blue, indigo, violet.",
"Red, orange, yellow, indigo, green, blue, violet.",
"Indigo, green, blue, violet, yellow, red, orange.",
"Yellow, blue, green, violet, orange, indigo, red."
],
answer: "Red, orange, yellow, green, blue, indigo, violet.",
explanation: "When white light is dispersed by a prism, it separates into an orderly component spectrum arranged by increasing frequency and decreasing wavelength, commonly remembered by the mnemonic ROYGBIV (Red, Orange, Yellow, Green, Blue, Indigo, Violet)."
}
];
export default physicsJamb1984;