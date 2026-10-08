// JAMB 1984 Physics Past Questions
// Flat array of standalone question objects with topics, answers and explanations.
// Questions containing complex geometric diagrams, data tables or missing images were skipped.
//
// Math display: all symbols are real Unicode characters (no LaTeX, no KaTeX needed):
//   powers 10², m⁻³   subscripts f₁ P₁   operators × ÷ − ½ ≈ →   Greek ρ λ θ η   units °C, m³, kg m⁻³
// Save and serve this file as UTF-8 (web pages: <meta charset="utf-8">).

const physicsJamb1984 = [
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1984, exam: "JAMB",
    question: "The distance travelled by a particle starting from rest is plotted against the square of the time elapsed from the commencement of motion. The resulting graph is linear. The slope of this graph is a measure of",
    options: ["Initial displacement", "Initial velocity", "Acceleration", "Half the acceleration", "Half the initial velocity"],
    answer: "Half the acceleration",
    explanation: "Starting from rest (u = 0), the distance is s = ½at². Comparing this with the straight-line equation y = mx, where y = s and x = t², the slope m equals ½a, which is half the acceleration."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1984, exam: "JAMB",
    question: "For which of the underlisted quantities is the derived unit ML²T⁻² correct?\nI. Moment of a force\nII. Work\nIII. Acceleration",
    options: ["I only", "II only", "III only", "I and II", "II and III"],
    answer: "I and II",
    explanation: "Work = force × distance = MLT⁻² × L = ML²T⁻². The moment of a force = force × perpendicular distance, which has the same dimensions, ML²T⁻². Acceleration has dimensions LT⁻². So statements I and II are correct."
  },
  {
    subject: "Physics", topic: "Hydrostatics & Fluids", year: 1984, exam: "JAMB",
    question: "What volume of alcohol with a density of 8.4 × 10² kg m⁻³ will have the same mass as 4.2 m³ of petrol whose density is 7.2 × 10² kg m⁻³?",
    options: ["1.4 m³", "3.6 m³", "4.9 m³", "5.0 m³", "5.8 m³"],
    answer: "3.6 m³",
    explanation: "Equal masses means (density of alcohol × volume of alcohol) = (density of petrol × volume of petrol). So 8.4 × 10² × V = 7.2 × 10² × 4.2, which gives V = (7.2 × 4.2)/8.4 = 3.6 m³."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 1984, exam: "JAMB",
    question: "For correcting long sight defects in the human eye we require a",
    options: ["Converging lens", "Diverging lens", "Microscope", "Periscope", "Plain glass sheet."],
    answer: "Converging lens",
    explanation: "Long-sightedness (hypermetropia) occurs when the eyeball is too short or the eye lens is too weak, so images of near objects form behind the retina. A converging (convex) lens refocuses the light rays onto the retina."
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
    explanation: "A concave mirror forms a real, inverted and diminished image only when the object is beyond the centre of curvature (C). Since the radius of curvature r is the distance from the pole to C, the object distance must be greater than r."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 1984, exam: "JAMB",
    question: "The unit quantity of electricity is called",
    options: ["The ampere", "The volt", "The coulomb", "The ammeter", "Electromotive force."],
    answer: "The coulomb",
    explanation: "The coulomb is the SI unit of electric charge (quantity of electricity). It is the charge carried in one second by a steady current of one ampere, since Q = It."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 1984, exam: "JAMB",
    question: "The resistance of a wire depends on",
    options: ["The length of the wire", "The diameter of the wire", "The temperature of the wire", "The resistivity of the wire", "All of the above."],
    answer: "All of the above.",
    explanation: "The resistance of a conductor is R = ρL/A, where ρ is the resistivity, L is the length and A is the cross-sectional area (which depends on the diameter). Resistivity and resistance also change with temperature, so all the listed factors matter."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 1984, exam: "JAMB",
    question: "Which of the following components is NOT contained in a dry Leclanché cell?",
    options: ["Carbon rod", "Paste of manganese dioxide", "Paste of ammonium chloride", "Zinc case", "Copper rod."],
    answer: "Copper rod.",
    explanation: "A dry Leclanché cell has a zinc case (negative electrode), a central carbon rod (positive electrode), an ammonium chloride paste (electrolyte) and manganese dioxide (depolarizer). A copper rod is not part of the cell."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 1984, exam: "JAMB",
    question: "Which of the following descriptions matches high-tension power transmission parameters?",
    options: ["High resistance and low voltage", "Low current and high voltage", "High current and low voltage", "High voltage and zero current", "High current and low resistance."],
    answer: "Low current and high voltage",
    explanation: "Power lost as heat in the transmission lines is P = I²R. To keep this loss small, power is stepped up to a very high voltage, which lowers the current for the same power delivered."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1984, exam: "JAMB",
    question: "The lower and upper fixed points marked on a mercury-in-glass thermometer are 210mm apart. The end of the mercury column in the tube is 49mm above the lower fixed point in a room. What is the temperature of the room in degrees Celsius?",
    options: ["55.3°C", "23.3°C", "49.0°C", "16.1°C", "76.7°C"],
    answer: "23.3°C",
    explanation: "The temperature is the fraction of the fundamental interval covered by the mercury, times 100: θ = (49/210) × 100 ≈ 23.3°C."
  },
  {
    subject: "Physics", topic: "Sound & Waves", year: 1984, exam: "JAMB",
    question: "When vibration occurs in an air column, the distance between a node and an adjacent antinode is equal to",
    options: ["One-quarter of the wavelength", "One-half of the wavelength", "The wavelength", "Twice the wavelength", "Four-times the wavelength."],
    answer: "One-quarter of the wavelength",
    explanation: "In a stationary wave, the distance between two consecutive nodes (or two consecutive antinodes) is λ/2. The distance between a node and the adjacent antinode is half of that, which is λ/4, one-quarter of the wavelength."
  },
  {
    subject: "Physics", topic: "Sound & Waves", year: 1984, exam: "JAMB",
    question: "Of two identical tuning forks with a natural frequency of 256 Hz, one is loaded so that 4 beats per second are heard when they are sounded together. What is the frequency of the loaded tuning fork?",
    options: ["260 Hz", "252 Hz", "248 Hz", "264 Hz", "258 Hz"],
    answer: "252 Hz",
    explanation: "The beat frequency is the difference between the two frequencies. Loading a fork increases its mass, which slows its vibration and lowers its frequency. So the loaded fork has a frequency of 256 − 4 = 252 Hz."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1984, exam: "JAMB",
    question: "Dew point is the temperature at which water vapour in the atmosphere",
    options: ["Turns into steam", "Solidifies into ice pellets", "First condenses into liquid form", "Is just sufficient to cause cooling", "Has a relative humidity of fifty percent."],
    answer: "First condenses into liquid form",
    explanation: "The dew point is the temperature to which air must be cooled to become saturated with water vapour (relative humidity 100%). Below this temperature the vapour begins to condense into liquid droplets."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1984, exam: "JAMB",
    question: "If a solid changes directly into a gas when heat is applied, the process is called",
    options: ["Vaporization", "Evaporation", "Sublimation", "Ionization", "Conversion."],
    answer: "Sublimation",
    explanation: "Sublimation is the change of a solid directly into a gas without passing through the liquid state, for example dry ice or camphor."
  },
  {
    subject: "Physics", topic: "Sound & Waves", year: 1984, exam: "JAMB",
    question: "Which of the following statements is/are NOT correct?\nI. Pressure changes do not affect the speed of sound in air.\nII. The velocity of sound increases with temperature.\nIII. The quality of a note depends only on its frequency.",
    options: ["I only", "II only", "III only", "I and III only", "II and III only."],
    answer: "III only",
    explanation: "Statement I is correct: at constant temperature, the speed of sound in air does not depend on pressure. Statement II is correct: the speed of sound increases with temperature (v is proportional to √T). Statement III is NOT correct: the quality (timbre) of a note depends on the overtones present, not on frequency alone."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1984, exam: "JAMB",
    question: "A machine has a velocity ratio of 5. It requires a 50kg weight to overcome a 200kg weight. The efficiency is",
    options: ["4%", "5%", "40%", "50%", "80%"],
    answer: "80%",
    explanation: "Mechanical advantage = load ÷ effort = 200/50 = 4. Efficiency = (mechanical advantage ÷ velocity ratio) × 100% = (4/5) × 100% = 80%."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 1984, exam: "JAMB",
    question: "A device that converts sound energy into electrical energy is",
    options: ["The horn of a motor car", "An A.C. generator", "A microphone", "The telephone earpiece", "A loudspeaker."],
    answer: "A microphone",
    explanation: "A microphone has a diaphragm that vibrates with the incoming sound waves. This motion is converted into a matching electrical signal."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 1984, exam: "JAMB",
    question: "Cathode rays are",
    options: ["High-energy electromagnetic waves", "Protons", "Streams of electrons", "Neutrons", "Radio waves"],
    answer: "Streams of electrons",
    explanation: "Cathode rays are streams of fast-moving electrons emitted from the negative electrode (cathode) in an evacuated discharge tube."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 1984, exam: "JAMB",
    question: "What is the apparent colour of a RED SHIRT when viewed in PURE green light?",
    options: ["Red", "Green", "Yellow", "Black", "Blue"],
    answer: "Black",
    explanation: "A red shirt looks red because it reflects red light and absorbs the other colours. In pure green light there is no red to reflect, so the shirt absorbs the green light and appears black."
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
    explanation: "When white light is dispersed by a prism, the colours appear in order of increasing frequency and decreasing wavelength: red, orange, yellow, green, blue, indigo, violet (ROYGBIV)."
  }
];

export default physicsJamb1984;