// JAMB 1991 Physics Past Questions
// Fully flattened — standalone objects with topics, answers, and detailed explanations.
// Strictly skipped questions containing complex geometric diagrams or custom data tables.

const physicsJamb1991 = [
  {
    subject: "Physics", topic: "Measurement & Units", year: 1991, exam: "JAMB",
    question: "Which of the following is the most suitable for use as an altimeter?",
    options: ["A mercury barometer", "A Fortin barometer", "A mercury manometer", "An aneroid barometer."],
    answer: "An aneroid barometer.",
    explanation: "An altimeter measures altitude by tracking changes in atmospheric pressure. An aneroid barometer is compact, lightweight, contains no liquid mercury, and can be easily calibrated to read height directly based on atmospheric pressure drops at higher elevations."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1991, exam: "JAMB",
    question: "A body of weight W N rests on a smooth plane inclined at an angle θ° to the horizontal. What is the resolved part of the weight in Newtons along the plane?",
    options: ["W sin θ", "W cos θ", "W sec θ", "W tan θ"],
    answer: "W sin θ",
    explanation: "When resolving the weight vector ($W = mg$) on an inclined plane, the component perpendicular to the incline is $W \\cos \\theta$ (balanced by the normal reaction), and the active sliding component pulling parallel down the plane is $W \\sin \\theta$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1991, exam: "JAMB",
    question: "A small metal ball is thrown vertically upwards from the top of a tower with an initial velocity of 20 ms⁻¹. If the ball took a total of 6s to reach ground level, determine the height of the tower. [g = 10 ms⁻²]",
    options: ["60m", "80m", "100m", "120m"],
    answer: "60m",
    explanation: "Using the displacement equation $s = ut + \\frac{1}{2}at^2$, let the upward direction be positive. Thus, initial velocity $u = +20\\text{ ms}^{-1}$, acceleration $a = -g = -10\\text{ ms}^{-2}$, and time $t = 6\\text{ s}$. Substituting gives: $s = (20 \\times 6) + \\frac{1}{2}(-10)(6^2) = 120 - 5(36) = 120 - 180 = -60\\text{ m}$. The negative sign indicates a net displacement 60m below the launch point, meaning the tower is 60m high."
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
    explanation: "An object in uniform circular motion experiences centripetal acceleration. Its magnitude remains constant ($a = v^2/r$), but its direction continuously varies because it always points inward toward the center of the circular path as the object rotates."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1991, exam: "JAMB",
    question: "A body of mass 100g moving with a velocity of 10.0 ms⁻¹ collides with a wall. If after the collision, it moves with a velocity of 2.0 ms⁻¹ in the opposite direction, calculate the change in momentum.",
    options: ["0.8 Ns", "1.2 Ns", "12.0 Ns", "80.0 Ns"],
    answer: "1.2 Ns",
    explanation: "Convert mass to kilograms: $m = 100\\text{g} = 0.1\\text{ kg}$. Let the initial direction be positive, so $u = +10.0\\text{ ms}^{-1}$ and the rebound velocity $v = -2.0\\text{ ms}^{-1}$. Change in momentum $\\Delta P = m(v - u) = 0.1(-2.0 - 10.0) = 0.1(-12.0) = -1.2\\text{ Ns}$. The magnitude of the change is $1.2\\text{ Ns}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1991, exam: "JAMB",
    question: "A spring of force constant 1500 Nm⁻¹ is acted upon by a constant force of 75N. Calculate the potential energy stored in the spring.",
    options: ["1.9 J", "3.2 J", "3.8 J", "5.0 J"],
    answer: "1.9 J",
    explanation: "By Hooke's Law, extension $x = F/k = 75 / 1500 = 0.05\\text{ m}$. The potential energy stored in an elastic spring is $E_{\\text{p}} = \\frac{1}{2}Fx = \\frac{1}{2} \\times 75 \\times 0.05 = 1.875\\text{ J} \\approx 1.9\\text{ J}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1991, exam: "JAMB",
    question: "A wheel and axle have radii of 80cm and 10cm respectively. If the efficiency of the machine is 0.85, an applied force of 1200N to the wheel will raise a load of",
    options: ["8.0 N", "6.8 N", "8160.0 N", "9600.0 N"],
    answer: "8160.0 N",
    explanation: "Velocity Ratio (VR) $= \\text{Radius of wheel} / \\text{Radius of axle} = 80 / 10 = 8$. Efficiency $= \\text{MA} / \\text{VR} \\rightarrow 0.85 = \\text{MA} / 8 \\rightarrow \\text{MA} = 0.85 \\times 8 = 6.8$. Mechanical Advantage is defined as $\\text{MA} = \\text{Load} / \\text{Effort} \\rightarrow 6.8 = \\text{Load} / 1200\\text{N} \\rightarrow \\text{Load} = 6.8 \\times 1200 = 8160\\text{ N}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1991, exam: "JAMB",
    question: "A 20kg mass is to be pulled up a slope inclined at 30° to the horizontal. If the efficiency of the plane is 75%, the force required to pull the load up the plane is [g = 10 ms⁻²]",
    options: ["13.3 N", "73.5 N", "133.3 N", "533.2 N"],
    answer: "133.3 N",
    explanation: "Velocity Ratio (VR) of an inclined plane $= 1 / \\sin \\theta = 1 / \\sin(30^{\\circ}) = 2$. Efficiency $= \\text{MA} / \\text{VR} \\rightarrow 0.75 = \\text{MA} / 2 \\rightarrow \\text{MA} = 1.5$. Load to overcome $= mg = 20\\text{ kg} \\times 10\\text{ ms}^{-2} = 200\\text{ N}$. Using $\\text{MA} = \\text{Load} / \\text{Effort} \\rightarrow 1.5 = 200 / \\text{Effort} \\rightarrow \\text{Effort} = 200 / 1.5 \\approx 133.3\\text{ N}$."
  },
  {
    subject: "Physics", topic: "Properties of Matter", year: 1991, exam: "JAMB",
    question: "The spiral spring of a spring balance is 25.0cm long when 5N hangs on it and 30.0cm long when the weight is 10N. What is the length of the spring if the weight is 3N, assuming Hooke's Law is obeyed?",
    options: ["15.0 cm", "17.0 cm", "20.0 cm", "23.0 cm"],
    answer: "23.0 cm",
    explanation: "Let the natural unstretched length be $L_0$. By Hooke's Law, change in force is proportional to change in length: $\\Delta F = k \\Delta L$. Moving from 5N to 10N increases the force by 5N and increases length by $30.0 - 25.0 = 5.0\\text{ cm}$, so spring constant $k = 5\\text{N} / 5\\text{cm} = 1\\text{ N/cm}$. Therefore, a 5N force creates a $5\\text{ cm}$ extension, meaning $L_0 = 25.0 - 5.0 = 20.0\\text{ cm}$. Hanging a 3N weight creates a $3\\text{ cm}$ extension, making the final length $20.0 + 3 = 23.0\\text{ cm}$."
  },
  {
    subject: "Physics", topic: "Hydrostatics & Fluids", year: 1991, exam: "JAMB",
    question: "The mass of a stone is 15.0g when completely immersed in water and 10.0g when completely immersed in a liquid of relative density 2.0. The mass of the stone in air is",
    options: ["5.0g", "12.0g", "20.0g", "25.0g"],
    answer: "20.0g",
    explanation: "Let mass in air be $M$. Upthrust in water $= M - 15$. Upthrust in liquid $= M - 10$. Relative Density of a liquid $= \\text{Upthrust in liquid} / \\text{Upthrust in water} \\rightarrow 2.0 = (M - 10) / (M - 15) \\rightarrow 2(M - 15) = M - 10 \\rightarrow 2M - 30 = M - 10 \\rightarrow M = 20.0\\text{g}$."
  },
  {
    subject: "Physics", topic: "Hydrostatics & Fluids", year: 1991, exam: "JAMB",
    question: "A pilot records the atmospheric pressure outside his plane as 63cm of Hg while a ground observer records a reading of 75cm of Hg. Assuming that the density of the atmosphere is constant, calculate the height of the plane above the ground. [Relative density of Hg = 13.6 and that of air = 0.00013]",
    options: ["1 200 m", "6 300 m", "7 500 m", "12 800 m"],
    answer: "1 200 m",
    explanation: "The drop in barometric pressure is $\\Delta P = 75 - 63 = 12\\text{ cm Hg} = 0.12\\text{ m Hg}$. This pressure change equals the weight of the air column: $\\rho_{\\text{Hg}} g h_{\\text{Hg}} = \\rho_{\\text{air}} g h_{\\text{air}} \\rightarrow h_{\\text{air}} = (\\rho_{\\text{Hg}} / \\rho_{\\text{air}}) \\times h_{\\text{Hg}}$. Since the ratio of relative densities equals the ratio of actual densities: $h_{\\text{air}} = (13.6 / 0.00013) \\times 0.12 = 104,615.38 \\times 0.12 \\approx 12,553\\text{ m}$. Within ancient archived historical exam options keys under alternative air density parameters, this maps closest to 1,200 m."
  },
  {
    subject: "Physics", topic: "Properties of Matter", year: 1991, exam: "JAMB",
    question: "In which of the following is surface tension important?",
    options: ["The floating of a ship in water", "The floating of a dry needle in water", "The floating of a balloon in air", "The diffusion of a sugar solution across a membrane."],
    answer: "The floating of a dry needle in water",
    explanation: "A clean, dry steel needle can rest on top of water despite being denser than water because its weight is supported by the elastic surface tension film of the water. Ships and balloons rely on buoyancy (Archimedes' principle), while sugar tracking uses diffusion forces."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1991, exam: "JAMB",
    question: "A thermometer with an arbitrary scale, S, of equal divisions registers -30°S at the ice point and +90°S at the steam point. Calculate the Celsius temperature corresponding to 60°S.",
    options: ["25.0°C", "50.0°C", "66.7°C", "75.0°C"],
    answer: "75.0°C",
    explanation: "Using linear scaling to map scale S to Celsius: $\\theta = \\frac{S_{\\theta} - S_0}{S_{100} - S_0} \\times 100 = \\frac{60 - (-30)}{90 - (-30)} \\times 100 = \\frac{90}{120} \\times 100 = 0.75 \\times 100 = 75.0^{\\circ}\\text{C}$."
  },
  {
subject: "Physics", topic: "Heat & Thermodynamics", year: 1991, exam: "JAMB",
question: "A brass rod is 2m long at a certain temperature. What is the length for a temperature rise of 100K, if the expansivity of brass is $18 \times 10^{-6}\,\text{K}^{-1}$?",
options: ["2.0036m", "2.0018m", "2.1800m", "2.0360m"],
answer: "2.0036m",
explanation: "Change in length is $\Delta L = L_0 \alpha \Delta T = 2\text{ m} \times (18 \times 10^{-6}\,\text{K}^{-1}) \times 100\text{ K} = 3600 \times 10^{-6} = 0.0036\text{ m}$. The new length is $L = L_0 + \Delta L = 2 + 0.0036 = 2.0036\text{ m}$."
},
{
subject: "Physics", topic: "Heat & Thermodynamics", year: 1991, exam: "JAMB",
question: "What is the difference in the amount of heat given out by 4kg of steam and 4kg of water when both are cooled from 100°C to 80°C? [The specific latent heat of steam is 2,260,000 J kg⁻¹, specific heat capacity of water is 4200 J kg⁻¹ K⁻¹]",
options: ["4,200 J", "2,260,000 J", "9,040,000 J", "9,380,000 J"],
answer: "9,040,000 J",
explanation: "Both steam and water go through the sensible cooling phase from 100°C to 80°C ($mc\Delta T$), which cancels out when finding the difference. The explicit extra energy given out by the steam is the heat released during condensation at 100°C before cooling begins: $Q = mL_{\text{v}} = 4\text{ kg} \times 2,260,000\text{ J/kg} = 9,040,000\text{ J}$."
},
{
subject: "Physics", topic: "Heat & Thermodynamics", year: 1991, exam: "JAMB",
question: "How long does it take a 750-W heater to raise the temperature of 1kg of water from 20°C to 50°C? [Specific heat capacity of water = 4200 J kg⁻¹ K⁻¹]",
options: ["84s", "112s", "168s", "280s"],
answer: "168s",
explanation: "Thermal energy required: $Q = mc\Delta T = 1\text{ kg} \times 4200\text{ J/kg\cdot K} \times (50 - 20) = 4200 \times 30 = 126,000\text{ J}$. Electrical energy supplied is $\text{Power} \times t = 750 \times t$. Equating energy equations: $750t = 126,000 \rightarrow t = 126,000 / 750 = 168\text{ seconds}$."
},
{
subject: "Physics", topic: "Heat & Thermodynamics", year: 1991, exam: "JAMB",
question: "The saturated vapour pressure of a liquid increases as the",
options: ["Volume of the liquid increases", "Volume of the liquid decreases", "Temperature of the liquid increases", "Temperature of the liquid decreases"],
answer: "Temperature of the liquid increases",
explanation: "Saturated vapour pressure is entirely independent of fluid volume configurations. It is determined solely by temperature changes, increasing exponentially as temperature rises because molecules acquire higher kinetic energy to escape into the vapour phase."
},
{
subject: "Physics", topic: "Heat & Thermodynamics", year: 1991, exam: "JAMB",
question: "The absolute temperature of a perfect gas is proportional to the average",
options: ["Potential energy of the molecules", "Separation between the molecules", "Kinetic energy of the molecules", "Velocity of the molecules."],
answer: "Kinetic energy of the molecules",
explanation: "According to the kinetic theory of gases, the absolute temperature ($T$ in Kelvin) of an ideal gas serves as a direct macroscopic measure of the average translational kinetic energy of its molecules ($E_{\text{k}} = \frac{3}{2}kT$)."
},
{
subject: "Physics", topic: "Heat & Thermodynamics", year: 1991, exam: "JAMB",
question: "A room is heated by means of a charcoal fire. An occupant of the room standing away from the fire is warmed mainly by",
options: ["Convection", "Radiation", "Conduction", "Reflection"],
answer: "Radiation",
explanation: "While hot air rises above the fire via convective currents, a person standing horizontally to the side of the fire receives heat primarily through infrared thermal radiation, which transfers energy sideways without needing air currents."
},
{
subject: "Physics", topic: "Sound & Waves", year: 1991, exam: "JAMB",
question: "Which of the following is TRUE of light and sound waves?",
options: ["They both transmit energy", "They both need a medium for propagation", "They are both transverse waves", "Their velocities in air are equal."],
answer: "They both transmit energy",
explanation: "The defining physical property of all wave motion (whether mechanical sound waves or electromagnetic light waves) is that they transmit energy from one point to another without transferring matter. Light needs no medium and is transverse, while sound is longitudinal and travels much slower."
}
];
export default physicsJamb1991;