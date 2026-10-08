// JAMB 1993 Physics Past Questions
// Fully flattened — standalone objects with topics, answers, and detailed explanations.
// Strictly skipped questions containing complex geometric diagrams or custom data tables.
//
// MATH FORMAT: All mathematical content is written in LaTeX, wrapped in $...$ (inline).
// Render with KaTeX or MathJax. Backslashes are doubled (\\) because these are normal JS strings.
// (A single backslash is silently corrupted by JS: \t -> tab, \f -> form feed, \r -> carriage return.)

const physicsJamb1993 = [
  {
    subject: "Physics", topic: "Measurement & Units", year: 1993, exam: "JAMB",
    question: "Which of the following quantities has the same unit as the watt?",
    options: [
      "$\\text{Force} \\times \\text{time}$",
      "$\\text{Force} \\times \\text{distance}$",
      "$\\text{Force} \\times \\text{acceleration}$",
      "$\\text{Force} \\times \\text{velocity}$"
    ],
    answer: "$\\text{Force} \\times \\text{velocity}$",
    explanation: "The watt is the SI unit of power. Power is work done per unit time: $P = \\dfrac{W}{t}$. Since $W = F \\times s$, we get $P = \\dfrac{F \\times s}{t}$. Because velocity is $v = \\dfrac{s}{t}$, power can be written as $P = F \\times v$, i.e. force $\\times$ velocity."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1993, exam: "JAMB",
    question: "Two forces of magnitudes $7\\ \\mathrm{N}$ and $3\\ \\mathrm{N}$ act at right angles to each other. The angle $\\theta$ between the resultant and the $7\\ \\mathrm{N}$ force is given by",
    options: [
      "$\\cos\\theta = \\dfrac{3}{7}$",
      "$\\sin\\theta = \\dfrac{3}{7}$",
      "$\\tan\\theta = \\dfrac{3}{7}$",
      "$\\cot\\theta = \\dfrac{3}{7}$"
    ],
    answer: "$\\tan\\theta = \\dfrac{3}{7}$",
    explanation: "Two forces at right angles form the sides of a right-angled vector triangle whose hypotenuse is the resultant. The $3\\ \\mathrm{N}$ force is opposite the angle $\\theta$ and the $7\\ \\mathrm{N}$ force is adjacent to it, so $\\tan\\theta = \\dfrac{\\text{opposite}}{\\text{adjacent}} = \\dfrac{3}{7}$."
  },
  {
    subject: "Physics", topic: "Measurement & Units", year: 1993, exam: "JAMB",
    question: "The external and internal diameters of a tube are measured as $(32 \\pm 2)\\ \\mathrm{mm}$ and $(21 \\pm 1)\\ \\mathrm{mm}$ respectively. Determine the percentage error in the thickness of the tube.",
    options: ["$27\\%$", "$14\\%$", "$9\\%$", "$3\\%$"],
    answer: "$27\\%$",
    explanation: "The thickness is half the difference between the external diameter $D$ and the internal diameter $d$: $T = \\tfrac{1}{2}(D - d) = \\tfrac{1}{2}(32 - 21) = 5.5\\ \\mathrm{mm}$. When quantities are subtracted, their absolute errors add: $\\Delta T = \\tfrac{1}{2}(\\Delta D + \\Delta d) = \\tfrac{1}{2}(2 + 1) = 1.5\\ \\mathrm{mm}$. The percentage error is $\\dfrac{\\Delta T}{T} \\times 100\\% = \\dfrac{1.5}{5.5} \\times 100\\% \\approx 27.27\\%$, which corresponds to $27\\%$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1993, exam: "JAMB",
    question: "An aeroplane lands on a runway at a speed of $180\\ \\mathrm{km\\,h^{-1}}$ and is brought to a stop uniformly in $30$ seconds. What distance does it cover on the runway before coming to rest?",
    options: ["$360\\ \\mathrm{m}$", "$540\\ \\mathrm{m}$", "$750\\ \\mathrm{m}$", "$957\\ \\mathrm{m}$"],
    answer: "$750\\ \\mathrm{m}$",
    explanation: "Convert the landing speed: $u = 180 \\times \\dfrac{5}{18} = 50\\ \\mathrm{m\\,s^{-1}}$. The final velocity is $v = 0$ at $t = 30\\ \\mathrm{s}$. For uniform deceleration, $s = \\tfrac{1}{2}(u + v)t = \\tfrac{1}{2}(50 + 0) \\times 30 = 750\\ \\mathrm{m}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1993, exam: "JAMB",
    question: "A rocket burns fuel at the rate of $10\\ \\mathrm{kg\\,s^{-1}}$ and ejects it with a velocity of $5 \\times 10^{3}\\ \\mathrm{m\\,s^{-1}}$. The thrust exerted by the gas on the rocket is",
    options: ["$2.5 \\times 10^{4}\\ \\mathrm{N}$", "$5.0 \\times 10^{4}\\ \\mathrm{N}$", "$5.0 \\times 10^{2}\\ \\mathrm{N}$", "$2.0 \\times 10^{-3}\\ \\mathrm{N}$"],
    answer: "$5.0 \\times 10^{4}\\ \\mathrm{N}$",
    explanation: "By Newton's second law, thrust is the rate of change of momentum: $F = \\dfrac{\\Delta m}{\\Delta t} \\times v = 10 \\times (5 \\times 10^{3}) = 50{,}000\\ \\mathrm{N} = 5.0 \\times 10^{4}\\ \\mathrm{N}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1993, exam: "JAMB",
    question: "The force experienced by an object of mass $60.0\\ \\mathrm{kg}$ in the moon's gravitational field is $1.002 \\times 10^{2}\\ \\mathrm{N}$. What is the intensity of the gravitational field?",
    options: ["$0.60\\ \\mathrm{N\\,kg^{-1}}$", "$1.67\\ \\mathrm{N\\,kg^{-1}}$", "$6.12 \\times 10^{2}\\ \\mathrm{N\\,kg^{-1}}$", "$9.81\\ \\mathrm{m\\,s^{-1}}$"],
    answer: "$1.67\\ \\mathrm{N\\,kg^{-1}}$",
    explanation: "Gravitational field intensity is the force per unit mass: $g = \\dfrac{F}{m} = \\dfrac{100.2}{60.0} = 1.67\\ \\mathrm{N\\,kg^{-1}}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1993, exam: "JAMB",
    question: "Which of the following correctly describes the energy changes in the generation of light by a hydroelectric power station?",
    options: [
      "Electrical $\\rightarrow$ mechanical $\\rightarrow$ potential $\\rightarrow$ light.",
      "Potential $\\rightarrow$ mechanical $\\rightarrow$ electrical $\\rightarrow$ light.",
      "Mechanical $\\rightarrow$ sound $\\rightarrow$ electrical $\\rightarrow$ light.",
      "Kinetic $\\rightarrow$ mechanical $\\rightarrow$ electrical $\\rightarrow$ light."
    ],
    answer: "Potential $\\rightarrow$ mechanical $\\rightarrow$ electrical $\\rightarrow$ light.",
    explanation: "Water stored high up in a dam has gravitational potential energy. As it falls, this becomes kinetic (mechanical) energy that turns the turbines. The turbines drive a generator, which converts the mechanical energy to electrical energy, and this finally powers lamps to give light."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1993, exam: "JAMB",
    question: "A plane inclined at an angle $\\theta$ has a velocity ratio of $10:1$. The inclination of the plane to the horizontal is given by",
    options: [
      "$\\tan\\theta = \\dfrac{1}{10}$",
      "$\\cot\\theta = \\dfrac{1}{10}$",
      "$\\cos\\theta = \\dfrac{1}{10}$",
      "$\\sin\\theta = \\dfrac{1}{10}$"
    ],
    answer: "$\\sin\\theta = \\dfrac{1}{10}$",
    explanation: "The velocity ratio of an inclined plane is the reciprocal of the sine of its angle of inclination: $\\text{VR} = \\dfrac{1}{\\sin\\theta}$. Since $\\text{VR} = 10$, we have $10 = \\dfrac{1}{\\sin\\theta} \\Rightarrow \\sin\\theta = \\dfrac{1}{10}$."
  },
  // NOTE: The stored answer was 2 x 10^4 N/m^2, but the question asks for the MAXIMUM pressure and the
  // original explanation itself derived 4 x 10^4 N/m^2. 2 x 10^4 is the MINIMUM pressure (resting on the
  // largest face, 12 m^2). The answer has been corrected to 4 x 10^4 N/m^2.
  {
    subject: "Physics", topic: "Hydrostatics & Fluids", year: 1993, exam: "JAMB",
    question: "A weightless vessel of dimensions $4\\ \\mathrm{m} \\times 3\\ \\mathrm{m} \\times 2\\ \\mathrm{m}$ is filled with a liquid of density $1000\\ \\mathrm{kg\\,m^{-3}}$ and sealed. What is the maximum pressure this container can exert on a flat horizontal surface? $[g = 10\\ \\mathrm{m\\,s^{-2}}]$",
    options: ["$9 \\times 10^{4}\\ \\mathrm{N\\,m^{-2}}$", "$4 \\times 10^{4}\\ \\mathrm{N\\,m^{-2}}$", "$3 \\times 10^{4}\\ \\mathrm{N\\,m^{-2}}$", "$2 \\times 10^{4}\\ \\mathrm{N\\,m^{-2}}$"],
    answer: "$4 \\times 10^{4}\\ \\mathrm{N\\,m^{-2}}$",
    explanation: "Pressure is force divided by area: $P = \\dfrac{F}{A}$. The pressure is greatest when the area of contact is smallest, i.e. when the vessel rests on its smallest face: $3\\ \\mathrm{m} \\times 2\\ \\mathrm{m} = 6\\ \\mathrm{m^2}$. The weight of the liquid (the vessel itself is weightless) is $mg = \\rho Vg = 1000 \\times (4 \\times 3 \\times 2) \\times 10 = 240{,}000\\ \\mathrm{N}$. Maximum pressure $= \\dfrac{240{,}000}{6} = 40{,}000\\ \\mathrm{N\\,m^{-2}} = 4 \\times 10^{4}\\ \\mathrm{N\\,m^{-2}}$."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1993, exam: "JAMB",
    question: "The thermometric property of the thermocouple is that its",
    options: [
      "e.m.f. changes with temperature",
      "Resistance changes with temperature",
      "Volume changes with temperature",
      "Pressure changes with resistance."
    ],
    answer: "e.m.f. changes with temperature",
    explanation: "A thermocouple works on the Seebeck effect. When the two junctions of two different metals are kept at different temperatures, an e.m.f. is produced that varies with the temperature difference."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1993, exam: "JAMB",
    question: "A metal rod $800\\ \\mathrm{mm}$ long is heated from $10^\\circ\\mathrm{C}$ to $95^\\circ\\mathrm{C}$. If it expands by $1.36\\ \\mathrm{mm}$, the linear expansivity of the metal is",
    options: ["$2.0 \\times 10^{2}\\ \\mathrm{K^{-1}}$", "$2.0 \\times 10^{-2}\\ \\mathrm{K^{-1}}$", "$5.0 \\times 10^{-2}\\ \\mathrm{K^{-1}}$", "$2.0 \\times 10^{-5}\\ \\mathrm{K^{-1}}$"],
    answer: "$2.0 \\times 10^{-5}\\ \\mathrm{K^{-1}}$",
    explanation: "Linear expansivity is $\\alpha = \\dfrac{\\Delta L}{L_0\\Delta T}$. With $L_0 = 800\\ \\mathrm{mm}$, $\\Delta L = 1.36\\ \\mathrm{mm}$ and $\\Delta T = 95 - 10 = 85\\ \\mathrm{K}$: $\\alpha = \\dfrac{1.36}{800 \\times 85} = \\dfrac{1.36}{68{,}000} = 2.0 \\times 10^{-5}\\ \\mathrm{K^{-1}}$."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1993, exam: "JAMB",
    question: "When the volume of a given mass of gas is halved and its absolute temperature doubled, the pressure",
    options: [
      "Remains constant",
      "Increases by a factor of 4",
      "Increases by a factor of 3",
      "Decreases by a factor of 4"
    ],
    answer: "Increases by a factor of 4",
    explanation: "Using $\\dfrac{P_1V_1}{T_1} = \\dfrac{P_2V_2}{T_2}$ with $V_2 = 0.5V_1$ and $T_2 = 2T_1$: $P_2 = P_1 \\times \\dfrac{V_1}{V_2} \\times \\dfrac{T_2}{T_1} = P_1 \\times \\dfrac{1}{0.5} \\times 2 = 4P_1$. The pressure increases by a factor of $4$."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1993, exam: "JAMB",
    question: "$200\\ \\mathrm{g}$ of water at $90^\\circ\\mathrm{C}$ is mixed with $100\\ \\mathrm{g}$ of water at $30^\\circ\\mathrm{C}$. What is the final temperature?",
    options: ["$50^\\circ\\mathrm{C}$", "$60^\\circ\\mathrm{C}$", "$70^\\circ\\mathrm{C}$", "$80^\\circ\\mathrm{C}$"],
    answer: "$70^\\circ\\mathrm{C}$",
    explanation: "Heat lost by the hot water equals heat gained by the cold water. Let the final temperature be $\\theta$: $m_{\\text{hot}}c(90 - \\theta) = m_{\\text{cold}}c(\\theta - 30) \\Rightarrow 200(90 - \\theta) = 100(\\theta - 30) \\Rightarrow 180 - 2\\theta = \\theta - 30 \\Rightarrow 210 = 3\\theta \\Rightarrow \\theta = 70^\\circ\\mathrm{C}$."
  }
];

export default physicsJamb1993;