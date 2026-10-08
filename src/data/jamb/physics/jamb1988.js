// JAMB 1988 Physics Past Questions
// Fully flattened — standalone objects with topics, answers, and detailed explanations.
// Strictly skipped questions containing complex geometric diagrams or custom data tables.
//
// MATH FORMAT: All mathematical content is written in LaTeX, wrapped in $...$ (inline).
// Render with KaTeX or MathJax. Backslashes are doubled (\\) because these are normal JS strings.

const physicsJamb1988 = [
  {
    subject: "Physics", topic: "Measurement & Units", year: 1988, exam: "JAMB",
    question: "Which of the following are the correct SI units of the quantities indicated?\nI. $\\mathrm{N}$ (Force)\nII. $\\mathrm{N\\,m^{-1}}$ (Torque)\nIII. Watt (Power)\nIV. $\\mathrm{kg\\,m\\,s^{-2}}$ (Momentum)",
    options: ["I and II only", "I, II and III only", "I, II and IV only", "I and III only"],
    answer: "I and III only",
    explanation: "Statement I is correct because the SI unit of force is the newton ($\\mathrm{N}$). Statement II is incorrect because torque is force $\\times$ distance, so its unit is the newton-metre ($\\mathrm{N\\,m}$), not $\\mathrm{N\\,m^{-1}}$. Statement III is correct because power is measured in watts ($\\mathrm{W}$). Statement IV is incorrect because momentum is mass $\\times$ velocity, which has the unit $\\mathrm{kg\\,m\\,s^{-1}}$, whereas $\\mathrm{kg\\,m\\,s^{-2}}$ is the base-unit form of a newton (force)."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1988, exam: "JAMB",
    question: "A lorry travels $10\\ \\mathrm{km}$ northwards, $4\\ \\mathrm{km}$ eastwards, $6\\ \\mathrm{km}$ southwards and $4\\ \\mathrm{km}$ westwards to arrive at a point T. What is the total displacement?",
    options: ["$6\\ \\mathrm{km}$ south", "$4\\ \\mathrm{km}$ north", "$6\\ \\mathrm{km}$ north", "$4\\ \\mathrm{km}$ east"],
    answer: "$4\\ \\mathrm{km}$ north",
    explanation: "Resolve the directional components independently. Horizontal (East-West): $4\\ \\mathrm{km}\\ \\text{East} - 4\\ \\mathrm{km}\\ \\text{West} = 0\\ \\mathrm{km}$. Vertical (North-South): $10\\ \\mathrm{km}\\ \\text{North} - 6\\ \\mathrm{km}\\ \\text{South} = 4\\ \\mathrm{km}\\ \\text{North}$. Thus the net displacement is exactly $4\\ \\mathrm{km}$ north."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1988, exam: "JAMB",
    question: "Two forces whose resultant is $100\\ \\mathrm{N}$ are at right angles to each other. If one of them makes an angle of $30^\\circ$ with the resultant, determine its magnitude.",
    options: ["$8.66\\ \\mathrm{N}$", "$50.0\\ \\mathrm{N}$", "$57.7\\ \\mathrm{N}$", "$86.6\\ \\mathrm{N}$"],
    answer: "$86.6\\ \\mathrm{N}$",
    explanation: "Let the force be $F$. Resolving along the direction that makes an angle of $30^\\circ$ with the $100\\ \\mathrm{N}$ resultant gives $F = R\\cos 30^\\circ = 100 \\times \\cos 30^\\circ = 100 \\times 0.866 = 86.6\\ \\mathrm{N}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1988, exam: "JAMB",
    question: "Which of the following quantities are scalars?\nI. Electrical potential\nII. Torque\nIII. Momentum\nIV. Kinetic energy",
    options: ["II and III only", "I and II only", "III and IV only", "I and IV only"],
    answer: "I and IV only",
    explanation: "Scalar quantities have magnitude only, with no spatial direction. Electrical potential (I) and kinetic energy (IV) are scalars. Torque (II) and momentum (III) are vector quantities."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1988, exam: "JAMB",
    question: "A particle starts from rest and moves with a constant acceleration of $0.5\\ \\mathrm{m\\,s^{-2}}$. The distance covered by the particle in $10\\ \\mathrm{s}$ is",
    options: ["$2.5\\ \\mathrm{m}$", "$5.0\\ \\mathrm{m}$", "$25.0\\ \\mathrm{m}$", "$50.0\\ \\mathrm{m}$"],
    answer: "$25.0\\ \\mathrm{m}$",
    explanation: "Using the equation of motion $s = ut + \\tfrac{1}{2}at^2$ with $u = 0$ (starts from rest): $s = 0 + \\tfrac{1}{2}(0.5)(10^2) = 0.25 \\times 100 = 25.0\\ \\mathrm{m}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1988, exam: "JAMB",
    question: "When taking a penalty kick, a footballer applies a force of $30.0\\ \\mathrm{N}$ for a period of $0.05\\ \\mathrm{s}$. If the mass of the ball is $0.075\\ \\mathrm{kg}$, calculate the speed with which the ball moves off.",
    options: ["$4.50\\ \\mathrm{m\\,s^{-1}}$", "$11.25\\ \\mathrm{m\\,s^{-1}}$", "$20.00\\ \\mathrm{m\\,s^{-1}}$", "$45.00\\ \\mathrm{m\\,s^{-1}}$"],
    answer: "$20.00\\ \\mathrm{m\\,s^{-1}}$",
    explanation: "By the impulse-momentum principle, impulse $= Ft = m(v - u)$. With $u = 0$: $Ft = mv \\Rightarrow 30.0 \\times 0.05 = 0.075 \\times v \\Rightarrow 1.5 = 0.075v \\Rightarrow v = \\dfrac{1.5}{0.075} = 20.00\\ \\mathrm{m\\,s^{-1}}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1988, exam: "JAMB",
    question: "A 20-toothed gear wheel drives a 60-toothed one. If the angular speed of the smaller wheel is $120\\ \\mathrm{rev\\,s^{-1}}$, the angular speed of the larger wheel is",
    options: ["$3\\ \\mathrm{rev\\,s^{-1}}$", "$40\\ \\mathrm{rev\\,s^{-1}}$", "$360\\ \\mathrm{rev\\,s^{-1}}$", "$2400\\ \\mathrm{rev\\,s^{-1}}$"],
    answer: "$40\\ \\mathrm{rev\\,s^{-1}}$",
    explanation: "For interlocking gears, the number of teeth $N$ and angular speed $\\omega$ are inversely proportional: $N_1\\omega_1 = N_2\\omega_2$. Substituting: $20 \\times 120 = 60 \\times \\omega_2 \\Rightarrow 2400 = 60\\omega_2 \\Rightarrow \\omega_2 = \\dfrac{2400}{60} = 40\\ \\mathrm{rev\\,s^{-1}}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1988, exam: "JAMB",
    question: "How long will it take a $60\\ \\mathrm{kg}$ man to climb a height of $22\\ \\mathrm{m}$ if he expends energy at the rate of $0.25\\ \\mathrm{kW}$? $[g = 10\\ \\mathrm{m\\,s^{-2}}]$",
    options: ["$5.3\\ \\mathrm{s}$", "$34.5\\ \\mathrm{s}$", "$41.6\\ \\mathrm{s}$", "$52.8\\ \\mathrm{s}$"],
    answer: "$52.8\\ \\mathrm{s}$",
    explanation: "The rate of energy expenditure is power $= \\dfrac{\\text{work done}}{\\text{time}}$. Work done $= mgh = 60 \\times 10 \\times 22 = 13{,}200\\ \\mathrm{J}$. Convert the power: $0.25\\ \\mathrm{kW} = 250\\ \\mathrm{W}$. Then $t = \\dfrac{\\text{work}}{\\text{power}} = \\dfrac{13{,}200}{250} = 52.8\\ \\mathrm{s}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1988, exam: "JAMB",
    question: "A force of $10\\ \\mathrm{N}$ drags a mass of $10\\ \\mathrm{kg}$ on a horizontal table with an acceleration of $0.2\\ \\mathrm{m\\,s^{-2}}$. If the acceleration due to gravity is $10\\ \\mathrm{m\\,s^{-2}}$, the coefficient of friction between the moving mass and the table is",
    options: ["$0.02$", "$0.08$", "$0.20$", "$0.80$"],
    answer: "$0.08$",
    explanation: "By Newton's second law, $F_{\\text{net}} = F_{\\text{applied}} - F_{\\text{friction}} = ma \\Rightarrow 10 - F_{\\text{friction}} = 10 \\times 0.2 = 2 \\Rightarrow F_{\\text{friction}} = 8\\ \\mathrm{N}$. On a horizontal surface the normal reaction is $R = mg = 10 \\times 10 = 100\\ \\mathrm{N}$. Since $F_{\\text{friction}} = \\mu R$: $8 = \\mu \\times 100 \\Rightarrow \\mu = \\dfrac{8}{100} = 0.08$."
  },
  {
    subject: "Physics", topic: "Hydrostatics & Fluids", year: 1988, exam: "JAMB",
    question: "A body whose mass is $2\\ \\mathrm{kg}$ and has a volume of $500\\ \\mathrm{cm^3}$ just floats when completely immersed in a liquid. Calculate the density of the liquid.",
    options: ["$4.0 \\times 10^{2}\\ \\mathrm{kg\\,m^{-3}}$", "$4.0 \\times 10^{3}\\ \\mathrm{kg\\,m^{-3}}$", "$1.0 \\times 10^{3}\\ \\mathrm{kg\\,m^{-3}}$", "$1.0 \\times 10^{6}\\ \\mathrm{kg\\,m^{-3}}$"],
    answer: "$4.0 \\times 10^{3}\\ \\mathrm{kg\\,m^{-3}}$",
    explanation: "When an object just floats while completely submerged, its density equals the density of the liquid. Convert to SI units: mass $= 2\\ \\mathrm{kg}$, volume $= 500\\ \\mathrm{cm^3} = 500 \\times 10^{-6}\\ \\mathrm{m^3} = 5 \\times 10^{-4}\\ \\mathrm{m^3}$. Density $= \\dfrac{\\text{mass}}{\\text{volume}} = \\dfrac{2}{5 \\times 10^{-4}} = 4000\\ \\mathrm{kg\\,m^{-3}} = 4.0 \\times 10^{3}\\ \\mathrm{kg\\,m^{-3}}$."
  },
  {
    subject: "Physics", topic: "Hydrostatics & Fluids", year: 1988, exam: "JAMB",
    question: "The product $PV$, where $P$ is pressure and $V$ is volume, has the same unit as",
    options: ["Force", "Power", "Energy", "Acceleration"],
    answer: "Energy",
    explanation: "Pressure has units $\\mathrm{N\\,m^{-2}}$ and volume has units $\\mathrm{m^3}$. Their product is $\\mathrm{N\\,m^{-2}} \\times \\mathrm{m^3} = \\mathrm{N\\,m}$ (newton-metre), which is identical to the joule, the SI unit of energy and work."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1988, exam: "JAMB",
    question: "The amount of heat needed to raise the temperature of $10\\ \\mathrm{kg}$ of copper by $1\\ \\mathrm{K}$ is its",
    options: ["Specific heat capacity", "Heat capacity", "Latent heat", "Internal heat."],
    answer: "Heat capacity",
    explanation: "Specific heat capacity is the heat required to raise the temperature of exactly $1\\ \\mathrm{kg}$ of a substance by $1\\ \\mathrm{K}$. The heat required to raise the temperature of a given mass (here $10\\ \\mathrm{kg}$) of a substance by $1\\ \\mathrm{K}$ is its heat capacity, $C = mc$."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1988, exam: "JAMB",
    question: "A tap supplies water at $25^\\circ\\mathrm{C}$ while another supplies water at $75^\\circ\\mathrm{C}$. If a man wishes to bathe with water at $40^\\circ\\mathrm{C}$, the ratio of the mass of cold water to the mass of hot water required is",
    options: ["$1 : 3$", "$15 : 8$", "$7 : 3$", "$3 : 1$"],
    answer: "$7 : 3$",
    explanation: "By conservation of energy, heat gained by the cold water equals heat lost by the hot water. Let $m_c$ be the mass of cold water and $m_h$ the mass of hot water: $m_c c(40 - 25) = m_h c(75 - 40) \\Rightarrow 15\\,m_c = 35\\,m_h \\Rightarrow \\dfrac{m_c}{m_h} = \\dfrac{35}{15} = \\dfrac{7}{3}$. The ratio is therefore $7 : 3$."
  }
];

export default physicsJamb1988;