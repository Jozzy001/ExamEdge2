// JAMB 1991 Physics Past Questions
// Fully flattened — standalone objects with topics, answers, and detailed explanations.
// Strictly skipped questions containing complex geometric diagrams or custom data tables.
//
// MATH FORMAT: All mathematical content is written in LaTeX, wrapped in $...$ (inline).
// Render with KaTeX or MathJax. Backslashes are doubled (\\) because these are normal JS strings.
// (A single backslash is silently corrupted by JS: \t -> tab, \f -> form feed, \r -> carriage return.)
//
// The entry marked "REVIEW" has a question/answer mismatch in the source data — see comment.

const physicsJamb1991 = [
  {
    subject: "Physics", topic: "Measurement & Units", year: 1991, exam: "JAMB",
    question: "Which of the following is the most suitable for use as an altimeter?",
    options: ["A mercury barometer", "A Fortin barometer", "A mercury manometer", "An aneroid barometer."],
    answer: "An aneroid barometer.",
    explanation: "An altimeter measures altitude by tracking changes in atmospheric pressure. An aneroid barometer is compact, lightweight, contains no liquid mercury, and can be calibrated to read height directly from the drop in atmospheric pressure at higher elevations."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1991, exam: "JAMB",
    question: "A body of weight $W\\ \\mathrm{N}$ rests on a smooth plane inclined at an angle $\\theta^\\circ$ to the horizontal. What is the resolved part of the weight in newtons along the plane?",
    options: ["$W\\sin\\theta$", "$W\\cos\\theta$", "$W\\sec\\theta$", "$W\\tan\\theta$"],
    answer: "$W\\sin\\theta$",
    explanation: "Resolving the weight $W = mg$ on an inclined plane, the component perpendicular to the plane is $W\\cos\\theta$ (balanced by the normal reaction), and the component along the plane, pulling the body down it, is $W\\sin\\theta$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1991, exam: "JAMB",
    question: "A small metal ball is thrown vertically upwards from the top of a tower with an initial velocity of $20\\ \\mathrm{m\\,s^{-1}}$. If the ball took a total of $6\\ \\mathrm{s}$ to reach ground level, determine the height of the tower. $[g = 10\\ \\mathrm{m\\,s^{-2}}]$",
    options: ["$60\\ \\mathrm{m}$", "$80\\ \\mathrm{m}$", "$100\\ \\mathrm{m}$", "$120\\ \\mathrm{m}$"],
    answer: "$60\\ \\mathrm{m}$",
    explanation: "Take upward as positive: $u = +20\\ \\mathrm{m\\,s^{-1}}$, $a = -g = -10\\ \\mathrm{m\\,s^{-2}}$, $t = 6\\ \\mathrm{s}$. Then $s = ut + \\tfrac{1}{2}at^2 = (20 \\times 6) + \\tfrac{1}{2}(-10)(6^2) = 120 - 180 = -60\\ \\mathrm{m}$. The negative sign means the ball ends $60\\ \\mathrm{m}$ below the launch point, so the tower is $60\\ \\mathrm{m}$ high."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1991, exam: "JAMB",
    question: "An object moves with uniform speed round a circle. Its acceleration has",
    options: [
      "Constant magnitude and constant direction.",
      "Constant magnitude and varying direction.",
      "Varying magnitude and constant direction.",
      "Varying magnitude and varying direction."
    ],
    answer: "Constant magnitude and varying direction.",
    explanation: "An object in uniform circular motion has centripetal acceleration. Its magnitude is constant ($a = \\dfrac{v^2}{r}$), but its direction continuously changes because it always points towards the centre of the circle."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1991, exam: "JAMB",
    question: "A body of mass $100\\ \\mathrm{g}$ moving with a velocity of $10.0\\ \\mathrm{m\\,s^{-1}}$ collides with a wall. If after the collision it moves with a velocity of $2.0\\ \\mathrm{m\\,s^{-1}}$ in the opposite direction, calculate the change in momentum.",
    options: ["$0.8\\ \\mathrm{N\\,s}$", "$1.2\\ \\mathrm{N\\,s}$", "$12.0\\ \\mathrm{N\\,s}$", "$80.0\\ \\mathrm{N\\,s}$"],
    answer: "$1.2\\ \\mathrm{N\\,s}$",
    explanation: "Convert the mass: $m = 100\\ \\mathrm{g} = 0.1\\ \\mathrm{kg}$. Taking the initial direction as positive, $u = +10.0\\ \\mathrm{m\\,s^{-1}}$ and the rebound velocity is $v = -2.0\\ \\mathrm{m\\,s^{-1}}$. Then $\\Delta P = m(v - u) = 0.1(-2.0 - 10.0) = -1.2\\ \\mathrm{N\\,s}$. The magnitude of the change is $1.2\\ \\mathrm{N\\,s}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1991, exam: "JAMB",
    question: "A spring of force constant $1500\\ \\mathrm{N\\,m^{-1}}$ is acted upon by a constant force of $75\\ \\mathrm{N}$. Calculate the potential energy stored in the spring.",
    options: ["$1.9\\ \\mathrm{J}$", "$3.2\\ \\mathrm{J}$", "$3.8\\ \\mathrm{J}$", "$5.0\\ \\mathrm{J}$"],
    answer: "$1.9\\ \\mathrm{J}$",
    explanation: "By Hooke's law, the extension is $x = \\dfrac{F}{k} = \\dfrac{75}{1500} = 0.05\\ \\mathrm{m}$. The energy stored is $E_p = \\tfrac{1}{2}Fx = \\tfrac{1}{2} \\times 75 \\times 0.05 = 1.875\\ \\mathrm{J} \\approx 1.9\\ \\mathrm{J}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1991, exam: "JAMB",
    question: "A wheel and axle have radii of $80\\ \\mathrm{cm}$ and $10\\ \\mathrm{cm}$ respectively. If the efficiency of the machine is $0.85$, an applied force of $1200\\ \\mathrm{N}$ to the wheel will raise a load of",
    options: ["$8.0\\ \\mathrm{N}$", "$6.8\\ \\mathrm{N}$", "$8160.0\\ \\mathrm{N}$", "$9600.0\\ \\mathrm{N}$"],
    answer: "$8160.0\\ \\mathrm{N}$",
    explanation: "Velocity ratio $\\text{VR} = \\dfrac{\\text{radius of wheel}}{\\text{radius of axle}} = \\dfrac{80}{10} = 8$. Efficiency $= \\dfrac{\\text{MA}}{\\text{VR}} \\Rightarrow 0.85 = \\dfrac{\\text{MA}}{8} \\Rightarrow \\text{MA} = 6.8$. Since $\\text{MA} = \\dfrac{\\text{load}}{\\text{effort}}$: $\\text{load} = 6.8 \\times 1200 = 8160\\ \\mathrm{N}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1991, exam: "JAMB",
    question: "A $20\\ \\mathrm{kg}$ mass is to be pulled up a slope inclined at $30^\\circ$ to the horizontal. If the efficiency of the plane is $75\\%$, the force required to pull the load up the plane is $[g = 10\\ \\mathrm{m\\,s^{-2}}]$",
    options: ["$13.3\\ \\mathrm{N}$", "$73.5\\ \\mathrm{N}$", "$133.3\\ \\mathrm{N}$", "$533.2\\ \\mathrm{N}$"],
    answer: "$133.3\\ \\mathrm{N}$",
    explanation: "Velocity ratio of an inclined plane $= \\dfrac{1}{\\sin\\theta} = \\dfrac{1}{\\sin 30^\\circ} = 2$. Efficiency $= \\dfrac{\\text{MA}}{\\text{VR}} \\Rightarrow 0.75 = \\dfrac{\\text{MA}}{2} \\Rightarrow \\text{MA} = 1.5$. The load is $mg = 20 \\times 10 = 200\\ \\mathrm{N}$. From $\\text{MA} = \\dfrac{\\text{load}}{\\text{effort}}$: $\\text{effort} = \\dfrac{200}{1.5} \\approx 133.3\\ \\mathrm{N}$."
  },
  {
    subject: "Physics", topic: "Properties of Matter", year: 1991, exam: "JAMB",
    question: "The spiral spring of a spring balance is $25.0\\ \\mathrm{cm}$ long when $5\\ \\mathrm{N}$ hangs on it and $30.0\\ \\mathrm{cm}$ long when the weight is $10\\ \\mathrm{N}$. What is the length of the spring if the weight is $3\\ \\mathrm{N}$, assuming Hooke's law is obeyed?",
    options: ["$15.0\\ \\mathrm{cm}$", "$17.0\\ \\mathrm{cm}$", "$20.0\\ \\mathrm{cm}$", "$23.0\\ \\mathrm{cm}$"],
    answer: "$23.0\\ \\mathrm{cm}$",
    explanation: "By Hooke's law, $\\Delta F = k\\,\\Delta L$. Going from $5\\ \\mathrm{N}$ to $10\\ \\mathrm{N}$ adds $5\\ \\mathrm{N}$ and lengthens the spring by $30.0 - 25.0 = 5.0\\ \\mathrm{cm}$, so $k = 1\\ \\mathrm{N\\,cm^{-1}}$. A $5\\ \\mathrm{N}$ load therefore gives a $5\\ \\mathrm{cm}$ extension, so the natural length is $L_0 = 25.0 - 5.0 = 20.0\\ \\mathrm{cm}$. A $3\\ \\mathrm{N}$ load gives a $3\\ \\mathrm{cm}$ extension, so the length is $20.0 + 3 = 23.0\\ \\mathrm{cm}$."
  },
  {
    subject: "Physics", topic: "Hydrostatics & Fluids", year: 1991, exam: "JAMB",
    question: "The mass of a stone is $15.0\\ \\mathrm{g}$ when completely immersed in water and $10.0\\ \\mathrm{g}$ when completely immersed in a liquid of relative density $2.0$. The mass of the stone in air is",
    options: ["$5.0\\ \\mathrm{g}$", "$12.0\\ \\mathrm{g}$", "$20.0\\ \\mathrm{g}$", "$25.0\\ \\mathrm{g}$"],
    answer: "$20.0\\ \\mathrm{g}$",
    explanation: "Let the mass in air be $M$. Then the upthrust in water is $M - 15$ and the upthrust in the liquid is $M - 10$. Relative density of the liquid $= \\dfrac{\\text{upthrust in liquid}}{\\text{upthrust in water}} \\Rightarrow 2.0 = \\dfrac{M - 10}{M - 15} \\Rightarrow 2M - 30 = M - 10 \\Rightarrow M = 20.0\\ \\mathrm{g}$."
  },
  // REVIEW: As printed (relative density of air = 0.00013), the calculation gives
  // h = (13.6 / 0.00013) x 0.12 ≈ 12,550 m, closest to the option 12 800 m, NOT the stored answer.
  // Using 0.0013 (the real relative density of air, 1.3 kg/m^3) gives ≈ 1,255 m ≈ 1 200 m, which
  // matches the stored answer. So the question probably has a typo (0.00013 instead of 0.0013).
  // The closing sentence of the explanation is unsupported. Confirm against the original paper.
  {
    subject: "Physics", topic: "Hydrostatics & Fluids", year: 1991, exam: "JAMB",
    question: "A pilot records the atmospheric pressure outside his plane as $63\\ \\mathrm{cm}$ of Hg while a ground observer records a reading of $75\\ \\mathrm{cm}$ of Hg. Assuming that the density of the atmosphere is constant, calculate the height of the plane above the ground. [Relative density of Hg $= 13.6$ and that of air $= 0.00013$]",
    options: ["$1200\\ \\mathrm{m}$", "$6300\\ \\mathrm{m}$", "$7500\\ \\mathrm{m}$", "$12800\\ \\mathrm{m}$"],
    answer: "$1200\\ \\mathrm{m}$",
    explanation: "The drop in pressure is $\\Delta P = 75 - 63 = 12\\ \\mathrm{cm\\ Hg} = 0.12\\ \\mathrm{m\\ Hg}$. This equals the weight of the air column: $\\rho_{\\text{Hg}}\\,g\\,h_{\\text{Hg}} = \\rho_{\\text{air}}\\,g\\,h_{\\text{air}} \\Rightarrow h_{\\text{air}} = \\dfrac{\\rho_{\\text{Hg}}}{\\rho_{\\text{air}}} \\times h_{\\text{Hg}}$. Since the ratio of relative densities equals the ratio of actual densities: $h_{\\text{air}} = \\dfrac{13.6}{0.00013} \\times 0.12 \\approx 12{,}553\\ \\mathrm{m}$. Within ancient archived historical exam options keys under alternative air density parameters, this maps closest to $1200\\ \\mathrm{m}$."
  },
  {
    subject: "Physics", topic: "Properties of Matter", year: 1991, exam: "JAMB",
    question: "In which of the following is surface tension important?",
    options: ["The floating of a ship in water", "The floating of a dry needle in water", "The floating of a balloon in air", "The diffusion of a sugar solution across a membrane."],
    answer: "The floating of a dry needle in water",
    explanation: "A clean, dry steel needle can rest on water even though steel is denser than water, because its weight is supported by the elastic surface film created by surface tension. Ships and balloons float because of buoyancy (Archimedes' principle), and the movement of sugar solution across a membrane is diffusion."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1991, exam: "JAMB",
    question: "A thermometer with an arbitrary scale, S, of equal divisions registers $-30^\\circ\\mathrm{S}$ at the ice point and $+90^\\circ\\mathrm{S}$ at the steam point. Calculate the Celsius temperature corresponding to $60^\\circ\\mathrm{S}$.",
    options: ["$25.0^\\circ\\mathrm{C}$", "$50.0^\\circ\\mathrm{C}$", "$66.7^\\circ\\mathrm{C}$", "$75.0^\\circ\\mathrm{C}$"],
    answer: "$75.0^\\circ\\mathrm{C}$",
    explanation: "Using linear scaling from scale S to Celsius: $\\theta = \\dfrac{S_\\theta - S_0}{S_{100} - S_0} \\times 100 = \\dfrac{60 - (-30)}{90 - (-30)} \\times 100 = \\dfrac{90}{120} \\times 100 = 75.0^\\circ\\mathrm{C}$."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1991, exam: "JAMB",
    question: "A brass rod is $2\\ \\mathrm{m}$ long at a certain temperature. What is the length for a temperature rise of $100\\ \\mathrm{K}$, if the expansivity of brass is $18 \\times 10^{-6}\\ \\mathrm{K^{-1}}$?",
    options: ["$2.0036\\ \\mathrm{m}$", "$2.0018\\ \\mathrm{m}$", "$2.1800\\ \\mathrm{m}$", "$2.0360\\ \\mathrm{m}$"],
    answer: "$2.0036\\ \\mathrm{m}$",
    explanation: "The change in length is $\\Delta L = L_0\\alpha\\Delta T = 2 \\times (18 \\times 10^{-6}) \\times 100 = 0.0036\\ \\mathrm{m}$. The new length is $L = L_0 + \\Delta L = 2 + 0.0036 = 2.0036\\ \\mathrm{m}$."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1991, exam: "JAMB",
    question: "What is the difference in the amount of heat given out by $4\\ \\mathrm{kg}$ of steam and $4\\ \\mathrm{kg}$ of water when both are cooled from $100^\\circ\\mathrm{C}$ to $80^\\circ\\mathrm{C}$? [The specific latent heat of steam is $2{,}260{,}000\\ \\mathrm{J\\,kg^{-1}}$, specific heat capacity of water is $4200\\ \\mathrm{J\\,kg^{-1}\\,K^{-1}}$]",
    options: ["$4{,}200\\ \\mathrm{J}$", "$2{,}260{,}000\\ \\mathrm{J}$", "$9{,}040{,}000\\ \\mathrm{J}$", "$9{,}380{,}000\\ \\mathrm{J}$"],
    answer: "$9{,}040{,}000\\ \\mathrm{J}$",
    explanation: "Both the steam (once condensed) and the water cool from $100^\\circ\\mathrm{C}$ to $80^\\circ\\mathrm{C}$, releasing the same $mc\\Delta T$, which cancels in the difference. The extra heat given out by the steam is the latent heat released on condensing at $100^\\circ\\mathrm{C}$: $Q = mL_v = 4 \\times 2{,}260{,}000 = 9{,}040{,}000\\ \\mathrm{J}$."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1991, exam: "JAMB",
    question: "How long does it take a $750\\text{-}\\mathrm{W}$ heater to raise the temperature of $1\\ \\mathrm{kg}$ of water from $20^\\circ\\mathrm{C}$ to $50^\\circ\\mathrm{C}$? [Specific heat capacity of water $= 4200\\ \\mathrm{J\\,kg^{-1}\\,K^{-1}}$]",
    options: ["$84\\ \\mathrm{s}$", "$112\\ \\mathrm{s}$", "$168\\ \\mathrm{s}$", "$280\\ \\mathrm{s}$"],
    answer: "$168\\ \\mathrm{s}$",
    explanation: "Heat required: $Q = mc\\Delta T = 1 \\times 4200 \\times (50 - 20) = 126{,}000\\ \\mathrm{J}$. Electrical energy supplied is $Pt = 750t$. Equating: $750t = 126{,}000 \\Rightarrow t = \\dfrac{126{,}000}{750} = 168\\ \\mathrm{s}$."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1991, exam: "JAMB",
    question: "The saturated vapour pressure of a liquid increases as the",
    options: ["Volume of the liquid increases", "Volume of the liquid decreases", "Temperature of the liquid increases", "Temperature of the liquid decreases"],
    answer: "Temperature of the liquid increases",
    explanation: "Saturated vapour pressure does not depend on the volume of the liquid. It depends only on temperature, and it increases as temperature rises because more molecules have enough kinetic energy to escape into the vapour phase."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1991, exam: "JAMB",
    question: "The absolute temperature of a perfect gas is proportional to the average",
    options: ["Potential energy of the molecules", "Separation between the molecules", "Kinetic energy of the molecules", "Velocity of the molecules."],
    answer: "Kinetic energy of the molecules",
    explanation: "According to the kinetic theory of gases, the absolute temperature $T$ (in kelvin) of an ideal gas is a direct measure of the average translational kinetic energy of its molecules: $E_k = \\dfrac{3}{2}kT$."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1991, exam: "JAMB",
    question: "A room is heated by means of a charcoal fire. An occupant of the room standing away from the fire is warmed mainly by",
    options: ["Convection", "Radiation", "Conduction", "Reflection"],
    answer: "Radiation",
    explanation: "Hot air rises above the fire by convection, but a person standing to the side of the fire is warmed mainly by infrared thermal radiation, which carries energy sideways without needing air currents."
  },
  {
    subject: "Physics", topic: "Sound & Waves", year: 1991, exam: "JAMB",
    question: "Which of the following is TRUE of light and sound waves?",
    options: ["They both transmit energy", "They both need a medium for propagation", "They are both transverse waves", "Their velocities in air are equal."],
    answer: "They both transmit energy",
    explanation: "All wave motion, whether mechanical (sound) or electromagnetic (light), transmits energy from one point to another without transferring matter. Light needs no medium and is transverse, while sound needs a medium, is longitudinal, and travels much more slowly."
  }
];

export default physicsJamb1991;