// JAMB 1994 Physics Past Questions
// Fully flattened — standalone objects with topics, answers, and detailed explanations.
// Strictly skipped questions containing complex geometric diagrams or custom data tables.
//
// MATH FORMAT: All mathematical content is written in LaTeX, wrapped in $...$ (inline).
// Render with KaTeX or MathJax. Backslashes are doubled (\\) because these are normal JS strings.
// (A single backslash is silently corrupted by JS: \t -> tab, \f -> form feed, \r -> carriage return.)
//
// Entries marked "REVIEW" have a question/answer mismatch in the source data — see comments.

const physicsJamb1994 = [
  {
    subject: "Physics", topic: "Measurement & Units", year: 1994, exam: "JAMB",
    question: "If it takes $5.0$ hours to drain a container of $540.0\\ \\mathrm{cm^3}$ of water, what is the mass flow rate of water from the container in $\\mathrm{kg\\,s^{-1}}$? [Density of water $= 1000\\ \\mathrm{kg\\,m^{-3}}$]",
    options: ["$3.0 \\times 10^{-5}$", "$3.0 \\times 10^{-4}$", "$3.1 \\times 10^{-5}$", "$3.2 \\times 10^{-5}$"],
    answer: "$3.0 \\times 10^{-5}$",
    explanation: "First convert volume to mass: $\\text{mass} = \\rho V = 1000 \\times (540.0 \\times 10^{-6}) = 0.54\\ \\mathrm{kg}$. Convert the time: $5.0\\ \\text{hours} = 5.0 \\times 3600 = 18{,}000\\ \\mathrm{s}$. Mass flow rate $= \\dfrac{0.54}{18{,}000} = 3.0 \\times 10^{-5}\\ \\mathrm{kg\\,s^{-1}}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1994, exam: "JAMB",
    question: "An object is projected with a velocity of $80\\ \\mathrm{m\\,s^{-1}}$ at an angle of $30^\\circ$ to the horizontal. The maximum height reached is $[g = 10\\ \\mathrm{m\\,s^{-2}}]$",
    options: ["$20\\ \\mathrm{m}$", "$80\\ \\mathrm{m}$", "$160\\ \\mathrm{m}$", "$320\\ \\mathrm{m}$"],
    answer: "$80\\ \\mathrm{m}$",
    explanation: "The maximum height of a projectile is $H = \\dfrac{u^2\\sin^2\\theta}{2g}$. Substituting: $H = \\dfrac{80^2 \\times \\sin^2 30^\\circ}{2 \\times 10} = \\dfrac{6400 \\times 0.25}{20} = \\dfrac{1600}{20} = 80\\ \\mathrm{m}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1994, exam: "JAMB",
    question: "A motor vehicle is brought to rest from a speed of $15\\ \\mathrm{m\\,s^{-1}}$ in $20$ seconds. Calculate the magnitude of its retardation.",
    options: ["$0.75\\ \\mathrm{m\\,s^{-2}}$", "$1.33\\ \\mathrm{m\\,s^{-2}}$", "$5.00\\ \\mathrm{m\\,s^{-2}}$", "$7.50\\ \\mathrm{m\\,s^{-2}}$"],
    answer: "$0.75\\ \\mathrm{m\\,s^{-2}}$",
    explanation: "Using $v = u + at$ with $v = 0$, $u = 15\\ \\mathrm{m\\,s^{-1}}$ and $t = 20\\ \\mathrm{s}$: $0 = 15 + 20a \\Rightarrow a = -0.75\\ \\mathrm{m\\,s^{-2}}$. The magnitude of the retardation is $0.75\\ \\mathrm{m\\,s^{-2}}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1994, exam: "JAMB",
    question: "Which of the following is TRUE of a particle moving in a horizontal circle with constant angular velocity?",
    options: [
      "The energy is constant but the linear momentum varies.",
      "The linear momentum is constant but the energy varies.",
      "Both energy and linear momentum are constant.",
      "The speed and the linear velocity are both constant."
    ],
    answer: "The energy is constant but the linear momentum varies.",
    explanation: "In uniform circular motion the speed is constant, so the kinetic energy is constant. However, the direction of the velocity changes continuously, so the linear momentum (a vector) varies."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1994, exam: "JAMB",
    question: "An object of mass $50\\ \\mathrm{kg}$ is released from a height of $2\\ \\mathrm{m}$. Find its kinetic energy just before it strikes the ground. $[g = 10\\ \\mathrm{m\\,s^{-2}}]$",
    options: ["$250\\ \\mathrm{J}$", "$1000\\ \\mathrm{J}$", "$10{,}000\\ \\mathrm{J}$", "$100{,}000\\ \\mathrm{J}$"],
    answer: "$1000\\ \\mathrm{J}$",
    explanation: "By conservation of energy, the kinetic energy just before impact equals the initial potential energy: $KE = PE = mgh = 50 \\times 10 \\times 2 = 1000\\ \\mathrm{J}$."
  },
  // REVIEW: The stored answer is "Increased", but the explanation concludes that a tilt LOWERS the cone's
  // centre of gravity and so DECREASES its potential energy. These contradict each other. Physically, a
  // cone balanced on its apex (unstable equilibrium) loses potential energy when displaced, which points
  // to "Decreased" — but the question text looks incomplete (it does not say "when slightly displaced").
  // Check the original wording before changing the answer.
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1994, exam: "JAMB",
    question: "A cone in an unstable equilibrium has its potential energy",
    options: ["Decreased", "Unchanged", "Increased", "Oscillating"],
    answer: "Increased",
    explanation: "An object in unstable equilibrium is balanced in such a way that its center of gravity is at its maximum potential height relative to immediate displacements. Slight tilt movements lower its center of gravity, decreasing its potential energy."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1994, exam: "JAMB",
    question: "Calculate the magnitude of the force required to just move a $20\\ \\mathrm{kg}$ object along a horizontal surface if the coefficient of static friction is $0.2$. $[g = 10\\ \\mathrm{m\\,s^{-2}}]$",
    options: ["$400.0\\ \\mathrm{N}$", "$40.0\\ \\mathrm{N}$", "$4.0\\ \\mathrm{N}$", "$0.4\\ \\mathrm{N}$"],
    answer: "$40.0\\ \\mathrm{N}$",
    explanation: "Limiting friction is $F = \\mu R$. On a horizontal surface the normal reaction is $R = mg = 20 \\times 10 = 200\\ \\mathrm{N}$. So $F = 0.2 \\times 200 = 40.0\\ \\mathrm{N}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1994, exam: "JAMB",
    question: "Calculate the velocity ratio of a screw jack of pitch $0.3\\ \\mathrm{cm}$ if the length of the tommy bar is $21\\ \\mathrm{cm}$.",
    options: ["$140$", "$14$", "$70$", "$440$"],
    answer: "$440$",
    explanation: "The velocity ratio of a screw jack is the circumference traced by the tommy bar divided by the pitch of the screw: $\\text{VR} = \\dfrac{2\\pi L}{p}$. Substituting (with $\\pi = \\tfrac{22}{7}$): $\\text{VR} = \\dfrac{2 \\times \\tfrac{22}{7} \\times 21}{0.3} = \\dfrac{132}{0.3} = 440$."
  },
  {
    subject: "Physics", topic: "Properties of Matter", year: 1994, exam: "JAMB",
    question: "A spring of length $25\\ \\mathrm{cm}$ is extended to $30\\ \\mathrm{cm}$ by a load of $150\\ \\mathrm{N}$ attached to one of its ends. What is the energy stored in the spring?",
    options: ["$3750\\ \\mathrm{J}$", "$2500\\ \\mathrm{J}$", "$3.75\\ \\mathrm{J}$", "$2.50\\ \\mathrm{J}$"],
    answer: "$3.75\\ \\mathrm{J}$",
    explanation: "The extension is $e = 30 - 25 = 5\\ \\mathrm{cm} = 0.05\\ \\mathrm{m}$. For a spring obeying Hooke's law, the stored energy is $E = \\tfrac{1}{2}Fe = \\tfrac{1}{2} \\times 150 \\times 0.05 = 3.75\\ \\mathrm{J}$."
  },
  // REVIEW: The stored answer, 351 K, is NOT one of the options (78 + 273 = 351 K is correct).
  // The option "315 K" is probably a transposed-digit typo for "351 K". Fix the option (or confirm
  // the original) so that the answer matches one of the choices.
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1994, exam: "JAMB",
    question: "The melting point of naphthalene is $78^\\circ\\mathrm{C}$. What is this temperature in kelvin?",
    options: ["$100\\ \\mathrm{K}$", "$315\\ \\mathrm{K}$", "$378\\ \\mathrm{K}$", "$444\\ \\mathrm{K}$"],
    answer: "$351\\ \\mathrm{K}$",
    explanation: "To convert from Celsius to kelvin, use $T(\\mathrm{K}) = \\theta(^\\circ\\mathrm{C}) + 273$. Substituting: $78 + 273 = 351\\ \\mathrm{K}$. Note: Option variants in historical archives match minor printing shifts targeting $351\\ \\mathrm{K}$."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1994, exam: "JAMB",
    question: "A motor tyre is inflated to a pressure of $2.0 \\times 10^{5}\\ \\mathrm{N\\,m^{-2}}$ when the temperature of the air is $27^\\circ\\mathrm{C}$. What will be the pressure inside it at $87^\\circ\\mathrm{C}$, assuming that the volume of the tyre does not change?",
    options: ["$2.6 \\times 10^{5}\\ \\mathrm{N\\,m^{-2}}$", "$2.4 \\times 10^{5}\\ \\mathrm{N\\,m^{-2}}$", "$2.2 \\times 10^{5}\\ \\mathrm{N\\,m^{-2}}$", "$1.3 \\times 10^{5}\\ \\mathrm{N\\,m^{-2}}$"],
    answer: "$2.4 \\times 10^{5}\\ \\mathrm{N\\,m^{-2}}$",
    explanation: "By the pressure law at constant volume, $\\dfrac{P_1}{T_1} = \\dfrac{P_2}{T_2}$. Convert to kelvin: $T_1 = 27 + 273 = 300\\ \\mathrm{K}$ and $T_2 = 87 + 273 = 360\\ \\mathrm{K}$. Then $P_2 = P_1 \\times \\dfrac{T_2}{T_1} = (2.0 \\times 10^{5}) \\times \\dfrac{360}{300} = 2.4 \\times 10^{5}\\ \\mathrm{N\\,m^{-2}}$."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1994, exam: "JAMB",
    question: "When $100\\ \\mathrm{g}$ of liquid $L_1$ at $78^\\circ\\mathrm{C}$ was mixed with $X\\ \\mathrm{g}$ of liquid $L_2$ at $50^\\circ\\mathrm{C}$, the final temperature was $66^\\circ\\mathrm{C}$. Given that the specific heat capacity of $L_2$ is half that of $L_1$, find $X$.",
    options: ["$50\\ \\mathrm{g}$", "$100\\ \\mathrm{g}$", "$150\\ \\mathrm{g}$", "$200\\ \\mathrm{g}$"],
    answer: "$150\\ \\mathrm{g}$",
    explanation: "Heat lost by $L_1$ equals heat gained by $L_2$. Let $c_1$ be the specific heat capacity of $L_1$, so $c_2 = 0.5c_1$. Then $m_1c_1(78 - 66) = m_2c_2(66 - 50) \\Rightarrow 100 \\times c_1 \\times 12 = X \\times 0.5c_1 \\times 16 \\Rightarrow 1200 = 8X \\Rightarrow X = 150\\ \\mathrm{g}$."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1994, exam: "JAMB",
    question: "Heat is supplied to a test tube containing $100\\ \\mathrm{g}$ of ice at its melting point. The ice melts completely in $1\\ \\mathrm{min}$. What is the power rating of the source of heat? [Latent heat of fusion of ice $= 336\\ \\mathrm{J\\,g^{-1}}$]",
    options: ["$336\\ \\mathrm{W}$", "$450\\ \\mathrm{W}$", "$560\\ \\mathrm{W}$", "$600\\ \\mathrm{W}$"],
    answer: "$560\\ \\mathrm{W}$",
    explanation: "Energy needed to melt the ice: $mL_f = 100 \\times 336 = 33{,}600\\ \\mathrm{J}$. Time $= 1\\ \\mathrm{min} = 60\\ \\mathrm{s}$. Power $= \\dfrac{33{,}600}{60} = 560\\ \\mathrm{W}$."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1994, exam: "JAMB",
    question: "If a room is saturated with water vapour, the temperature of the room must be",
    options: ["at $0^\\circ\\mathrm{C}$", "above the dew point", "at $100^\\circ\\mathrm{C}$", "below or at the dew point."],
    answer: "below or at the dew point.",
    explanation: "Saturated air has a relative humidity of $100\\%$, which is reached at the dew point. If a room is saturated with water vapour, its temperature must therefore be at or below the dew point."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 1994, exam: "JAMB",
    question: "An object $3.0\\ \\mathrm{cm}$ high is placed $60.0\\ \\mathrm{cm}$ from a converging lens whose focal length is $20.0\\ \\mathrm{cm}$. Calculate the size of the image formed.",
    options: ["$0.5\\ \\mathrm{cm}$", "$1.5\\ \\mathrm{cm}$", "$2.0\\ \\mathrm{cm}$", "$6.0\\ \\mathrm{cm}$"],
    answer: "$1.5\\ \\mathrm{cm}$",
    explanation: "Using the lens formula: $\\dfrac{1}{f} = \\dfrac{1}{u} + \\dfrac{1}{v} \\Rightarrow \\dfrac{1}{20} = \\dfrac{1}{60} + \\dfrac{1}{v} \\Rightarrow \\dfrac{1}{v} = \\dfrac{3 - 1}{60} = \\dfrac{1}{30} \\Rightarrow v = 30\\ \\mathrm{cm}$. Magnification $m = \\dfrac{v}{u} = \\dfrac{30}{60} = 0.5$. Since $m = \\dfrac{h_i}{h_o}$: $h_i = 0.5 \\times 3.0 = 1.5\\ \\mathrm{cm}$."
  },
  {
    subject: "Physics", topic: "Sound & Waves", year: 1994, exam: "JAMB",
    question: "A pipe of length $45\\ \\mathrm{cm}$ is closed at one end. Calculate the fundamental frequency of the sound wave generated in the pipe if the velocity of sound in air is $360\\ \\mathrm{m\\,s^{-1}}$ (neglect end corrections).",
    options: ["$55\\ \\mathrm{Hz}$", "$148.5\\ \\mathrm{Hz}$", "$200.0\\ \\mathrm{Hz}$", "$550.0\\ \\mathrm{Hz}$"],
    answer: "$200.0\\ \\mathrm{Hz}$",
    explanation: "For a pipe closed at one end, the fundamental satisfies $L = \\dfrac{\\lambda}{4} \\Rightarrow \\lambda = 4L = 4 \\times 0.45 = 1.8\\ \\mathrm{m}$. Then $f = \\dfrac{v}{\\lambda} = \\dfrac{360}{1.8} = 200\\ \\mathrm{Hz}$."
  },
  {
    subject: "Physics", topic: "Sound & Waves", year: 1994, exam: "JAMB",
    question: "The note produced by a stretched string has a fundamental frequency of $400\\ \\mathrm{Hz}$. If the length of the string is doubled while the tension in the string is increased by a factor of $4$, the frequency is",
    options: ["$200\\ \\mathrm{Hz}$", "$400\\ \\mathrm{Hz}$", "$800\\ \\mathrm{Hz}$", "$1600\\ \\mathrm{Hz}$"],
    answer: "$400\\ \\mathrm{Hz}$",
    explanation: "The fundamental frequency of a stretched string is $f = \\dfrac{1}{2L}\\sqrt{\\dfrac{T}{\\mu}}$. With $L' = 2L$ and $T' = 4T$: $f' = \\dfrac{1}{2(2L)}\\sqrt{\\dfrac{4T}{\\mu}} = \\dfrac{1}{4L} \\times 2\\sqrt{\\dfrac{T}{\\mu}} = \\dfrac{1}{2L}\\sqrt{\\dfrac{T}{\\mu}} = f$. The frequency is unchanged at $400\\ \\mathrm{Hz}$."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 1994, exam: "JAMB",
    question: "To produce a parallel beam of light from a concave mirror, the distance at which the lamp should be placed from the mirror is equal to",
    options: ["the focal length", "two times the focal length", "the distance of the image", "two times the radius of curvature."],
    answer: "the focal length",
    explanation: "By the reversibility of light rays, a lamp placed exactly at the principal focus (a distance equal to the focal length from the mirror) sends out rays that are reflected parallel to the principal axis."
  }
];

export default physicsJamb1994;