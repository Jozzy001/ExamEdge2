// JAMB 1993 Physics Past Questions
// Fully flattened — standalone objects with topics, answers, and detailed explanations.
// Strictly skipped questions containing complex geometric diagrams or custom data tables.

const physicsJamb1993 = [
  {
    subject: "Physics", topic: "Measurement & Units", year: 1993, exam: "JAMB",
    question: "Which of the following quantities has the same unit as the watt?",
    options: [
      "Force × time",
      "Force × distance",
      "Force × acceleration",
      "Force × velocity"
    ],
    answer: "Force × velocity",
    explanation: "The watt is the SI unit of power ($P$). Power is defined as work done per unit time ($P = W/t$). Since $\\text{Work} = \\text{Force } (F) \\times \\text{Distance } (s)$, we can substitute this to get $P = (F \\times s) / t$. Given that $\\text{Velocity } (v) = s/t$, power can be rewritten as $\\text{Force} \\times \\text{Velocity } (F \\times v)$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1993, exam: "JAMB",
    question: "Two forces of magnitudes 7N and 3N act at right angles to each other. The angle θ between the resultant and the 7N force is given by",
    options: [
      "Cos θ = 3/7",
      "Sin θ = 3/7",
      "Tan θ = 3/7",
      "Cot θ = 3/7"
    ],
    answer: "Tan θ = 3/7",
    explanation: "When two forces act at right angles, they form the sides of a right-angled vector triangle where the hypotenuse is the resultant force. The force opposite to the angle $\\theta$ is the 3N force, and the adjacent force is the 7N force. Using basic trigonometry, $\\tan \\theta = \\text{Opposite} / \\text{Adjacent} = 3/7$."
  },
  {
    subject: "Physics", topic: "Measurement & Units", year: 1993, exam: "JAMB",
    question: "The external and internal diameters of a tube are measured as $(32 \\pm 2)\\,\\text{mm}$ and $(21 \\pm 1)\\,\\text{mm}$ respectively. Determine the percentage error in the thickness of the tube.",
    options: ["27%", "14%", "9%", "3%"],
    answer: "27%",
    explanation: "The thickness ($T$) of a tube is given by half the difference between the external diameter ($D$) and internal diameter ($d$): $T = \\frac{1}{2}(D - d) = \\frac{1}{2}(32 - 21) = 5.5\\,\\text{mm}$. When subtracting quantities, their absolute errors add up: $\\Delta T = \\frac{1}{2}(\\Delta D + \\Delta d) = \\frac{1}{2}(2 + 1) = 1.5\\,\\text{mm}$. The percentage error is $(\\Delta T / T) \\times 100\\% = (1.5 / 5.5) \\times 100\\% \\approx 27.27\\%$, which corresponds to 27%."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1993, exam: "JAMB",
    question: "An aeroplane lands on a runway at a speed of $180\\,\\text{km\\,h}^{-1}$ and is brought to a stop uniformly in 30 seconds. What distance does it cover on the runway before coming to rest?",
    options: ["360m", "540m", "750m", "957m"],
    answer: "750m",
    explanation: "First, convert the initial landing speed from $\\text{km/h}$ to $\\text{m/s}$: $u = 180 \\times \\frac{5}{18} = 50\\,\\text{m/s}$. The final velocity $v = 0\\,\\text{m/s}$ at $t = 30\\,\\text{s}$. Using the linear equations of motion, the uniform distance covered is calculated as $s = \\frac{1}{2}(u + v)t = \\frac{1}{2}(50 + 0) \\times 30 = 25 \\times 30 = 750\\,\\text{m}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1993, exam: "JAMB",
    question: "A rocket burns fuel at the rate of $10\\,\\text{kg\\,s}^{-1}$ and ejects it with a velocity of $5 \\times 10^{3}\\,\\text{m\\,s}^{-1}$. The thrust exerted by the gas on the rocket is",
    options: ["$2.5 \\times 10^{4}\\,\\text{N}$", "$5.0 \\times 10^{4}\\,\\text{N}$", "$5.0 \\times 10^{2}\\,\\text{N}$", "$2.0 \\times 10^{-3}\\,\\text{N}$"],
    answer: "$5.0 \\times 10^{4}\\,\\text{N}$",
    explanation: "Thrust force is defined by Newton's second law as the rate of change of linear momentum: $F = \\frac{\\Delta p}{\\Delta t} = \\frac{\\Delta m}{\\Delta t} \\times v$. Substituting the fuel consumption rate ($\\frac{\\Delta m}{\\Delta t} = 10\\,\\text{kg/s}$) and exhaust velocity ($v = 5 \\times 10^{3}\\,\\text{m/s}$) yields $F = 10 \\times (5 \\times 10^{3}) = 50,000\\,\\text{N} = 5.0 \\times 10^{4}\\,\\text{N}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1993, exam: "JAMB",
    question: "The force experienced by an object of mass 60.0kg in the moon's gravitational field is $1.002 \\times 10^{2}\\,\\text{N}$. What is the intensity of the gravitational field?",
    options: ["$0.60\\,\\text{N\\,kg}^{-1}$", "$1.67\\,\\text{N\\,kg}^{-1}$", "$6.12 \\times 10^{2}\\,\\text{N\\,kg}^{-1}$", "$9.81\\,\\text{m\\,s}^{-1}$"],
    answer: "$1.67\\,\\text{N\\,kg}^{-1}$",
    explanation: "Gravitational field intensity ($g$) is defined as the gravitational force experienced per unit mass ($g = F / m$). Substituting the given moon parameters: $g = 100.2\\,\\text{N} / 60.0\\,\\text{kg} = 1.67\\,\\text{N\\,kg}^{-1}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1993, exam: "JAMB",
    question: "Which of the following correctly describes the energy changes in the generation of light by a hydroelectric power station?",
    options: [
      "Electrical → mechanical → potential → light.",
      "Potential → mechanical → electrical → light.",
      "Mechanical → sound → electrical → light.",
      "Kinetic → mechanical → electrical → light."
    ],
    answer: "Potential → mechanical → electrical → light.",
    explanation: "Water stored high up in a dam reservoir possesses gravitational potential energy. As it falls down, this converts to mechanical kinetic energy which rotates the turbines. The moving turbines drive a generator to convert mechanical work into electrical energy, which finally powers lamps to emit light."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1993, exam: "JAMB",
    question: "A plane inclined at an angle θ has a velocity ratio of 10:1. The inclination of the plane to the horizontal is given by",
    options: [
      "tan θ = 1/10",
      "let cot θ = 1/10",
      "cos θ = 1/10",
      "sin θ = 1/10"
    ],
    answer: "sin θ = 1/10",
    explanation: "The Velocity Ratio (VR) of an ideal inclined plane is equal to the reciprocal of the sine of its angle of inclination to the horizontal: $\\text{VR} = 1 / \\sin \\theta$. Since $\\text{VR} = 10$, we get $10 = 1 / \\sin \\theta \\rightarrow \\sin \\theta = 1 / 10$."
  },
  {
    subject: "Physics", topic: "Hydrostatics & Fluids", year: 1993, exam: "JAMB",
    question: "A weightless vessel of dimensions 4m × 3m × 2m is filled with a liquid of density $1000\\,\\text{kg\\,m}^{-3}$ and sealed. What is the maximum pressure this container can exert on a flat horizontal surface? [g = 10 ms⁻²]",
    options: ["$9 \\times 10^{4}\\,\\text{N\\,m}^{-2}$", "$4 \\times 10^{4}\\,\\text{N\\,m}^{-2}$", "$3 \\times 10^{4}\\,\\text{N\\,m}^{-2}$", "$2 \\times 10^{4}\\,\\text{N\\,m}^{-2}$"],
    answer: "$2 \\times 10^{4}\\,\\text{N\\,m}^{-2}$",
    explanation: "Pressure is force divided by area ($P = F / A$). To maximize the pressure exerted by the fluid container, the area of contact with the flat surface must be minimized. The minimum surface area is $3\\,\\text{m} \\times 2\\,\\text{m} = 6\\,\\text{m}^{2}$. Total weight of the liquid $= m \\times g = (\\text{Density} \\times \\text{Volume}) \\times g = 1000 \\times (4 \\times 3 \\times 2) \\times 10 = 1000 \\times 24 \\times 10 = 240,000\\,\\text{N}$. Maximum pressure $= 240,000\\,\\text{N} / 6\\,\\text{m}^{2} = 40,000\\,\\text{N\\,m}^{-2} = 4 \\times 10^{4}\\,\\text{N\\,m}^{-2}$."
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
    explanation: "A thermocouple works on the principle of the Seebeck effect. When two junctions of different metals are kept at different temperatures, an electromotive force (e.m.f.) is generated across them that varies linearly with the temperature gradient."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1993, exam: "JAMB",
    question: "A metal rod 800mm long is heated from 10°C to 95°C. If it expands by 1.36mm, the linear expansivity of the metal is",
    options: ["$2.0 \\times 10^{2}\\,\\text{K}^{-1}$", "$2.0 \\times 10^{-2}\\,\\text{K}^{-1}$", "$5.0 \\times 10^{-2}\\,\\text{K}^{-1}$", "$2.0 \\times 10^{-5}\\,\\text{K}^{-1}$"],
    answer: "$2.0 \\times 10^{-5}\\,\\text{K}^{-1}$",
    explanation: "Linear expansivity formula: $\\alpha = \\Delta L / (L_0 \\Delta T)$. Substituting the values ($L_0 = 800\\,\\text{mm}$, $\\Delta L = 1.36\\,\\text{mm}$, and $\\Delta T = 95 - 10 = 85^{\\circ}\\text{C}$): $\\alpha = 1.36 / (800 \\times 85) = 1.36 / 68,000 = 2.0 \\times 10^{-5}\\,\\text{K}^{-1}$."
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
    explanation: "Using the ideal gas relation: $P_1V_1 / T_1 = P_2V_2 / T_2$. We are given $V_2 = 0.5V_1$ and $T_2 = 2T_1$. Rearranging to solve for the new pressure $P_2$: $P_2 = P_1 \\times (V_1 / V_2) \\times (T_2 / T_1) = P_1 \\times (1 / 0.5) \\times (2 / 1) = P_1 \\times 2 \\times 2 = 4P_1$. Thus, the pressure increases by a factor of 4."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1993, exam: "JAMB",
    question: "200g of water at 90°C is mixed with 100g of water at 30°C. What is the final temperature?",
options: ["50°C", "60°C", "70°C", "80°C"],
answer: "70°C",
explanation: "By conservation of thermal energy: Heat lost by hot water = Heat gained by cold water. Let the final mixture temperature be $\theta$. $m_{\text{hot}} c (90 - \theta) = m_{\text{cold}} c (\theta - 30) \rightarrow 200(90 - \theta) = 100(\theta - 30) \rightarrow 2(90 - \theta) = \theta - 30 \rightarrow 180 - 2\theta = \theta - 30 \rightarrow 210 = 3\theta \rightarrow \theta = 70^{\circ}\text{C}$."
}
];
export default physicsJamb1993;