// JAMB 2003 Physics Past Questions

// Fully flattened — standalone objects with topics, answers, and detailed explanations.

// Strictly skipped questions containing complex geometric diagrams or custom data tables.

const physicsJamb2003 = [

  {
    subject: "Physics", topic: "Waves & Optics", year: 2003, exam: "JAMB",

    question: "What does not drop through an open umbrella of silk material unless the inside of the umbrella is touched?",

    options: ["Osmotic pressure", "Capillarity", "Surface tension", "Viscosity"],

    answer: "Surface tension",

    explanation: "Water molecules form a continuous, cohesive surface layer or film over the small gaps between the silk fibers of an umbrella due to surface tension. Touching the inside disrupts this structural film, causing the water to seep through."

  },

  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 2003, exam: "JAMB",

    question: "A satellite is in a parking (geostationary) orbit if its period is",

    options: [
      "More than the period of the earth",
      "Equal to the period of the earth",
      "The square of the period of the earth",
      "Less than the period of the earth"
    ],

    answer: "Equal to the period of the earth",

    explanation: "A parking or geostationary orbit requires the satellite to remain static over a fixed spot on the equator. To achieve this, its orbital period must match the Earth's rotational period exactly, which is approximately 24 hours."

  },

  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 2003, exam: "JAMB",

    question: "A piece of stone attached to one end of a string is whirled round in a horizontal circle and the string suddenly cuts. The stone will fly off in a direction",

    options: [
      "Tangential to the circular path",
      "Perpendicular to the circular path",
      "Towards the centre of the circle",
      "Parallel to the circular path."
    ],

    answer: "Tangential to the circular path",

    explanation: "When a body travels in a circular path, its instantaneous linear velocity vector is always oriented tangential to the circle. When the string breaks, centripetal force drops to zero, and the object's inertia causes it to move forward along that tangent line."

  },

  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 2003, exam: "JAMB",

    question: "If an object just begins to slide on a surface inclined at 30° to the horizontal, the coefficient of static friction is",

    options: ["$1 / \\sqrt{3}$", "$1 / 3$", "$\\sqrt{3}$", "$3 / \\sqrt{3}$"],

    answer: "$1 / \\sqrt{3}$",

    explanation: "When an object is on the verge of sliding down an inclined plane, the angle of inclination matches the angle of friction. The coefficient of static friction is equal to the tangent of this limiting angle: $\\mu = \\tan(30^{\\circ}) = 1 / \\sqrt{3}$."

  },

  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 2003, exam: "JAMB",

    question: "A force of 100N is used to kick a football of mass 0.8kg. Find the velocity with which the ball moves if the impact takes 0.8s.",

    options: ["$100\\,\\text{ms}^{-1}$", "$32\\,\\text{ms}^{-1}$", "$50\\,\\text{ms}^{-1}$", "$64\\,\\text{ms}^{-1}$"],

    answer: "$100\\,\\text{ms}^{-1}$",

    explanation: "By the impulse-momentum principle: $\\text{Impulse} = F \\times t = \\text{Change in momentum} = m(v - u)$. Assuming it starts from rest ($u = 0$): $100\\,\\text{N} \\times 0.8\\,\\text{s} = 0.8\\,\\text{kg} \\times v \\rightarrow 80 = 0.8v \\rightarrow v = 80 / 0.8 = 100\\,\\text{ms}^{-1}$."

  },

  {
    subject: "Physics", topic: "Sound & Waves", year: 2003, exam: "JAMB",

    question: "The phenomenon whereby water droplets in the atmosphere combine with dust particles in the air to significantly reduce visibility is",

    options: ["Fog", "Hail", "Mist", "Cloud"],

    answer: "Fog",

    explanation: "Fog forms when water vapor condenses into tiny liquid droplets suspended in the air near ground level, using dust particles as condensation nuclei. This dense surface suspension scatters light and significantly reduces visibility."

  },

  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 2003, exam: "JAMB",

    question: "Thermal equilibrium between two adjacent objects exists when",

    options: [
      "The heat capacities of both objects are the same",
      "One object loses heat continuously to the other",
      "The temperatures of both objects are equal",
      "The quantity of heat in both objects is the same."
    ],

    answer: "The temperatures of both objects are equal",

    explanation: "By the zeroth law of thermodynamics, thermal equilibrium means there is no net exchange of heat energy between objects in contact. This state is reached when their temperatures become equal."

  },

  {
    subject: "Physics", topic: "Sound & Waves", year: 2003, exam: "JAMB",

    question: "If the distance from a point source of sound is doubled, by what factor does the sound intensity decrease?",

    options: ["2.00", "0.25", "4.00", "0.50"],

    answer: "4.00",

    explanation: "Sound waves spread out from a point source as spherical waves, meaning intensity follows an inverse-square law: $I \\propto 1/r^2$. Doubling the distance ($2r$) spreads the same energy over four times the area, decreasing the sound intensity by a factor of $2^2 = 4$."

  },

  {
    subject: "Physics", topic: "Waves & Optics", year: 2003, exam: "JAMB",

    question: "If an object is placed between two parallel plane mirrors with their reflecting surfaces facing each other, how many images of the object will be formed?",

    options: ["Four", "Two", "Eight", "Infinite"],

    answer: "Infinite",

    explanation: "For two parallel mirrors, the angle between them approaches $0^\\circ$. Light reflects back and forth continuously between the mirrors, producing an infinite number of images."

  },

  {
    subject: "Physics", topic: "Sound & Waves", year: 2003, exam: "JAMB",

    question: "An open pipe closed at one end produces its first fundamental note. If the velocity of sound in air is v and l is the length of the pipe, the frequency of the note is",

    options: ["$v / 2l$", "$2v / l$", "$v / 5l$", "$v / 4l$"],

    answer: "$v / 4l$",

    explanation: "For an acoustic pipe closed at one end, the fundamental standing wave matches a quarter wavelength inside the tube length: $l = \\lambda / 4 \\rightarrow \\lambda = 4l$. Substituting this into the wave velocity formula gives: $f = v / \\lambda = v / 4l$."

  },

  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 2003, exam: "JAMB",

    question: "The most suitable cell configuration used for short-interval switching systems, such as inside electric domestic doorbells, is a",

    options: ["Nickel-iron accumulator", "Lead-acid accumulator", "Daniel cell", "Leclanché cell"],

    answer: "Leclanché cell",

    explanation: "The Leclanché cell (dry cell) is highly effective for intermittent operations. It can deliver quick bursts of current when the switch is closed and recover safely from polarization during rest intervals, making it ideal for doorbells."

  },

  {
    subject: "Physics", topic: "Waves & Optics", year: 2003, exam: "JAMB",

    question: "The high-speed operation of a modern fiber-optic cable is based on the optical principle of",

    options: ["Polarization of light", "Refraction of light", "Total internal reflection of light", "Dispersion of light"],

    answer: "Total internal reflection of light",

    explanation: "Optical fibers transmit data as light pulses trapped inside a glass or plastic core. Because the core has a higher refractive index than the surrounding cladding, light hitting the boundary at shallow angles undergoes continuous total internal reflection, traveling long distances without escaping."

  },

  {
    subject: "Physics", topic: "Electronics & Semiconductors", year: 2003, exam: "JAMB",

    question: "In a semiconductor p-n junction diode, when a forward-biased potential difference is applied across the boundaries, the depletion layer",

    options: ["Narrows", "Remains constant", "Widens then narrows", "Widens"],

    answer: "Narrows",

    explanation: "Forward biasing applies a positive potential to the p-type region and a negative potential to the n-type region. This configuration pushes majority carriers toward the center junction, narrowing the depletion layer and allowing current to flow easily."

  },

  {
    subject: "Physics", topic: "Nuclear Physics", year: 2003, exam: "JAMB",

    question: "When a stable atomic nucleus is formed by bringing separate protons and neutrons together, its combined final mass is slightly less than the sum of its individual constituent particles. The energy equivalent of this mass difference is termed the",

    options: ["Stability", "Lost energy", "Work function", "Binding energy"],

    answer: "Binding energy",

    explanation: "The difference in mass between a complete nucleus and its separate nucleons is called the mass defect ($\\Delta m$). According to Einstein's mass-energy equivalence equation ($E = \\Delta m c^2$), this missing mass is converted into binding energy, which holds the nucleus together."

  }

];

export default physicsJamb2003;