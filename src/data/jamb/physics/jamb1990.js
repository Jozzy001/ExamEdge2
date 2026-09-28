// JAMB 1990 Physics Past Questions
// Fully flattened — standalone objects with topics, answers, and detailed explanations.
// Strictly skipped questions containing complex geometric diagrams or custom data tables.

const physicsJamb1990 = [
  {
    subject: "Physics", topic: "Measurement & Units", year: 1990, exam: "JAMB",
    question: "Which of the following is a fundamental unit?",
    options: ["Newton", "Joule", "Watt", "Second"],
    answer: "Second",
    explanation: "The second is one of the seven base (fundamental) SI units used to measure time. The Newton (force), Joule (energy), and Watt (power) are all derived units mathematically constructed from fundamental units."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1990, exam: "JAMB",
    question: "A car moving with a speed of 90 km/h was brought uniformly to rest by the application of the brakes in 10s. How far did the car travel after the brakes were applied?",
    options: ["125 m", "150 m", "250 m", "15 km"],
    answer: "125 m",
    explanation: "First, convert the initial velocity from km/h to m/s: $u = 90 \\times \\frac{5}{18} = 25\\text{ m/s}$. The final velocity $v = 0$ at $t = 10\\text{ s}$. Using the linear motion equation for distance: $s = \\frac{1}{2}(u + v)t = \\frac{1}{2}(25 + 0) \\times 10 = 12.5 \\times 10 = 125\\text{ m}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1990, exam: "JAMB",
    question: "A particle of mass M which is at rest splits up into two. If the mass and velocity of one of the particles are m and v respectively, calculate the velocity of the second particle.",
    options: ["mv / M", "Mv / (M - m)", "Mv / (M + m)", "-mv / (M - m)"],
    answer: "-mv / (M - m)",
    explanation: "By the law of conservation of linear momentum, the total initial momentum equals total final momentum. Since the particle starts at rest, $P_{\\text{initial}} = 0$. After splitting, the remaining mass is $M - m$. Let the velocity of this second mass be $v_{2}$. So, $0 = mv + (M - m)v_{2} \\rightarrow (M - m)v_{2} = -mv \\rightarrow v_{2} = -mv / (M - m)$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1990, exam: "JAMB",
    question: "To keep a vehicle moving at a constant speed v requires power P from the engine. The force provided by the engine is",
    options: ["P / v", "Pv", "1/2 Pv", "P / v²"],
    answer: "P / v",
    explanation: "Power ($P$) is defined as the rate of doing work, which can be written as force multiplied by velocity ($P = F \\times v$). Rearranging to isolate the engine force gives $F = P / v$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1990, exam: "JAMB",
    question: "A stone of mass m kg is held h metres above the floor for 50s. The work done in joules over this period is",
    options: ["mh", "mgh", "mgh / 50", "0"],
    answer: "0",
    explanation: "Work done is defined as the product of force and displacement in the direction of the force ($W = F \\times s$). Since the stone is strictly held stationary at a constant position, its displacement $s = 0$, meaning the total work done over the period is 0."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1990, exam: "JAMB",
    question: "A body of mass 10kg rests on a rough inclined plane whose angle of tilt θ is variable. θ is gradually increased until the body starts to slide down the plane at 30°. The coefficient of limiting friction between the body and the plane is",
    options: ["0.30", "0.50", "0.58", "0.87"],
    answer: "0.58",
    explanation: "When an object is on the verge of sliding down an inclined plane, the angle of tilt corresponds to the angle of friction. The coefficient of static friction is equal to the tangent of this limiting angle: $\\mu = \\tan(30^{\\circ}) = \\frac{1}{\\sqrt{3}} \\approx 0.577$, which rounds to 0.58."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1990, exam: "JAMB",
    question: "An inclined plane which makes an angle of 30° with the horizontal has a velocity ratio of",
    options: ["2", "1", "0.866", "0.50"],
    answer: "2",
    explanation: "The velocity ratio (VR) of a simple inclined plane is defined by $\\text{VR} = \\frac{1}{\\sin \\theta}$. Substituting the given angle of inclination gives $\\text{VR} = \\frac{1}{\\sin(30^{\\circ})} = \\frac{1}{0.5} = 2$."
  },
  {
    subject: "Physics", topic: "Hydrostatics & Fluids", year: 1990, exam: "JAMB",
    question: "What is the length of the liquid column in a barometer tube that would support an atmospheric pressure of $102,000\\text{ Nm}^{-2}$ if the density of the liquid is $2600\\text{ kg m}^{-3}$? [g = 10 ms⁻²]",
    options: ["0.75m", "0.76m", "3.92m", "39.23m"],
    answer: "3.92m",
    explanation: "Using the hydrostatic pressure formula: $P = \\rho gh$. Substituting the given values: $102,000 = 2600 \\times 10 \\times h \\rightarrow 102,000 = 26,000h \\rightarrow h = 102,000 / 26,000 \\approx 3.92\\text{ m}$."
  },
  {
    subject: "Physics", topic: "Hydrostatics & Fluids", year: 1990, exam: "JAMB",
    question: "$40\\text{ cm}^{3}$ of liquid P is mixed with $60\\text{ cm}^{3}$ of another liquid Q. If the density of P and Q are $1.0\\text{ g cm}^{-3}$ and $1.6\\text{ g cm}^{-3}$ respectively, what is the density of the mixture?",
    options: ["$0.05\\text{ g cm}^{-3}$", "$1.25\\text{ g cm}^{-3}$", "$1.36\\text{ g cm}^{-3}$", "$1.30\\text{ g cm}^{-3}$"],
    answer: "$1.36\\text{ g cm}^{-3}$",
    explanation: "Mass of liquid P $= \\text{Density} \\times \\text{Volume} = 1.0 \\times 40 = 40\\text{ g}$. Mass of liquid Q $= 1.6 \\times 60 = 96\\text{ g}$. Total mass of the mixture $= 40 + 96 = 136\\text{ g}$. Total volume of the mixture $= 40 + 60 = 100\\text{ cm}^{3}$. Density of the mixture $= \\text{Total mass} / \\text{Total volume} = 136 / 100 = 1.36\\text{ g cm}^{-3}$."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1990, exam: "JAMB",
    question: "The resistances of a platinum wire at the ice and steam points are 0.75 ohm and 1.05 ohm respectively. Determine the temperature at which the resistance of the wire is 0.90 ohm.",
    options: ["43.0°C", "50.0°C", "69.9°C", "87.0°C"],
    answer: "50.0°C",
    explanation: "Using the linear scale formula for resistance thermometers: $\\theta = \\frac{R_{\\theta} - R_0}{R_{100} - R_0} \\times 100$. Substituting the parameters: $\\theta = \\frac{0.90 - 0.75}{1.05 - 0.75} \\times 100 = \\frac{0.15}{0.30} \\times 100 = 0.5 \\times 100 = 50.0^{\\circ}\\text{C}$."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1990, exam: "JAMB",
    question: "A bar of initial length $l_{0}$ is heated through a temperature change Δt to a new length l. The linear expansivity, α, of the bar is",
    options: ["(l - l₀) / (l₀ Δt)", "(l - l₀) / (l Δt)", "l₀(1 + α Δt)", "(l - l₀) / l₀"],
    answer: "(l - l₀) / (l₀ Δt)",
    explanation: "By definition, the coefficient of linear expansivity ($\\alpha$) is the change in length per unit initial length per unit change in temperature: $\\alpha = \\frac{\\Delta l}{l_0 \\Delta t}$. Since $\\Delta l = l - l_0$, it isolates as $\\alpha = (l - l_0) / (l_0 \\Delta t)$."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1990, exam: "JAMB",
    question: "The pressure of a gas when cooled at constant volume will decrease because the molecules",
    options: [
      "Collide less frequently with the walls of the container.",
      "Have the same average kinetic energy.",
      "Break up into smaller molecules.",
      "Decrease in number."
    ],
    answer: "Collide less frequently with the walls of the container.",
    explanation: "Cooling a gas decreases the average kinetic energy of its molecules, lowering their velocities. At a constant volume, slower-moving molecules hit the container walls with less force and strike them less frequently, causing pressure to drop."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1990, exam: "JAMB",
    question: "1 kg of copper is transferred quickly from boiling water to a block of ice. Calculate the mass of ice melted, neglecting heat loss. [Specific heat capacity of copper = $390\\text{ J kg}^{-1}\\text{K}^{-1}$, Specific latent heat of fusion of ice = $3.3 \\times 10^{5}\\,\\text{J kg}^{-1}$]",
    options: ["60g", "67g", "120g", "133g"],
    answer: "120g",
    explanation: "Heat lost by the cooling copper = Heat gained by the melting ice. The boiling water sets the initial copper temperature to $100^{\\circ}\\text{C}$, dropping down to $0^{\\circ}\\text{C}$ on the ice. Heat lost $= m_{\\text{c}} c_{\\text{c}} \\Delta T = 1 \\times 390 \\times (100 - 0) = 39,000\\text{ J}$. Heat gained to melt ice $= m_{\\text{ice}} L_{\\text{f}} = m_{\\text{ice}} \\times 330,000$. Equating them: $330,000 m_{\\text{ice}} = 39,000 \\rightarrow m_{\\text{ice}} = 39,000 / 330,000 \\approx 0.1181\\text{ kg} \\approx 120\\text{g}$ under typical historical test value configurations."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1990, exam: "JAMB",
    question: "Which of the following conditions will make water boil at a temperature below 100°C?",
    options: [
      "Increase the external pressure",
      "Reduce the external pressure",
      "Heat more rapidly at the same pressure.",
      "Add common salt to the water."
    ],
    answer: "Reduce the external pressure",
    explanation: "A liquid boils when its saturated vapour pressure equals the external atmospheric pressure. Lowering or reducing the external environmental pressure allows the vapour pressure to match it at a lower temperature threshold, causing water to boil below 100°C."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1990, exam: "JAMB",
question: "Which of the following statements are correct?\nI. Land and sea breezes are natural convection currents.\nII. Convection may occur in liquids or gases but not in solids.\nIII. The vacuum in a thermos flask prevents heat loss due to convection only.",
options: ["I and II only", "II and III only", "I and III only", "I, II and III"],
answer: "I and II only",
explanation: "Land and sea breezes are driven by cyclical fluid density differentials under heating, matching natural convection properties (I). Convection requires bulk molecular displacement flows, restricting it to fluids (liquids/gases) and making it impossible in rigid solids (II). The vacuum in a thermos flask stops both conduction and convection, making statement III incorrect."
},
{
subject: "Physics", topic: "Waves & Optics", year: 1990, exam: "JAMB",
question: "A light wave of frequency $5 \times 10^{14}$ Hz moves through water which has a refractive index of 4/3. Calculate the wavelength in water if the velocity of light in air is $3 \times 10^{8}\,\text{ms}^{-1}$.",
options: ["$4.5 \times 10^{-7}\text{ m}$", "$6.0 \times 10^{-7}\text{ m}$", "$1.7 \times 10^{-6}\text{ m}$", "$2.2 \times 10^{-6}\text{ m}$"],
answer: "$4.5 \times 10^{-7}\text{ m}$",
explanation: "Velocity of light in water: $v_{\text{w}} = c / n = (3 \times 10^{8}) / (4/3) = 2.25 \times 10^{8}\,\text{ms}^{-1}$. Wavelength in water: $\lambda_{\text{w}} = v_{\text{w}} / f = (2.25 \times 10^{8}\,\text{ms}^{-1}) / (5 \times 10^{14}\,\text{Hz}) = 0.45 \times 10^{-6}\text{ m} = 4.5 \times 10^{-7}\text{ m}$."
},
{
subject: "Physics", topic: "Sound & Waves", year: 1990, exam: "JAMB",
question: "A wave disturbance traveling in air enters a medium in which its velocity is less than that in air. Which of the following statements is true about the wave in the medium?",
options: [
"Both the frequency of the wave and the wavelength are decreased.",
"The frequency of the wave is decreased while the wavelength is increased.",
"The frequency of the wave is unaltered while the wavelength is decreased.",
"The frequency of the wave is decreased while the wavelength is unaltered."
],
answer: "The frequency of the wave is unaltered while the wavelength is decreased.",
explanation: "The frequency of a wave is determined entirely by its source and remains constant (unaltered) when crossing boundaries between different media. Because velocity decreases ($v = f\lambda$), the wavelength must decrease proportionally to satisfy the relation."
},
{
subject: "Physics", topic: "Waves & Optics", year: 1990, exam: "JAMB",
question: "Shadows and eclipses result from the",
options: ["Refraction of light", "Rectilinear propagation of light", "Diffraction of light", "Reflection of light"],
answer: "Rectilinear propagation of light",
explanation: "Light travels along straight lines in a uniform medium (rectilinear propagation). When an opaque object blocks these linear rays, it casts a shadow or generates an eclipse downstream, as light cannot bend sharply around the object to fill the space."
},
{
subject: "Physics", topic: "Waves & Optics", year: 1990, exam: "JAMB",
question: "An object which is 3cm high is placed vertically 10cm in front of a concave mirror. If this object produces an image 40cm from the mirror, the height of the image is",
options: ["0.75 cm", "4.00 cm", "8.00 cm", "12.00 cm"],
answer: "12.00 cm",
explanation: "Linear magnification formula is $m = \text{Image height } (h_{\text{i}}) / \text{Object height } (h_{\text{o}}) = \text{Image distance } (v) / \text{Object distance } (u)$. Substituting the parameters: $h_{\text{i}} / 3 = 40 / 10 \rightarrow h_{\text{i}} / 3 = 4 \rightarrow h_{\text{i}} = 12\text{ cm}$."
},
{
subject: "Physics", topic: "Waves & Optics", year: 1990, exam: "JAMB",
question: "What must be the distance between an object and a converging lens of focal length 20cm to produce an erect image two times the object height?",
options: ["20cm", "15cm", "10cm", "5cm"],
answer: "10cm",
explanation: "An erect image produced by a converging lens is always virtual, meaning magnification $m = -v/u = 2 \rightarrow v = -2u$. Using the lens formula: $\frac{1}{f} = \frac{1}{u} + \frac{1}{v} \rightarrow \frac{1}{20} = \frac{1}{u} - \frac{1}{2u} \rightarrow \frac{1}{20} = \frac{1}{2u} \rightarrow 2u = 20 \rightarrow u = 10\text{ cm}$."
},
{
subject: "Physics", topic: "Sound & Waves", year: 1990, exam: "JAMB",
question: "An organ pipe closed at one end is 80cm long. Determine the frequency of the fundamental note assuming that the speed of sound in air is $340\text{ ms}^{-1}$.",
options: ["106 Hz", "213 Hz", "318 Hz", "425 Hz"],
answer: "106 Hz",
explanation: "For an acoustic pipe closed at one end, the fundamental length satisfies $L = \lambda / 4 \rightarrow \lambda = 4L = 4 \times 0.80\text{ m} = 3.2\text{ m}$. Using the wave velocity formula: $f = v / \lambda = 340 / 3.2 = 106.25\text{ Hz} \approx 106\text{ Hz}$."
},
{
subject: "Physics", topic: "Electricity & Magnetism", year: 1990, exam: "JAMB",
question: "Which of the following is a vector?",
options: ["Electric charge", "Electric field", "Electric potential difference", "Electric capacitance"],
answer: "Electric field",
explanation: "An electric field is defined as force per unit charge ($\text{N/C}$ or $\text{V/m}$), giving it both a quantitative magnitude and a definite spatial vector direction. Charge, potential difference, and capacitance are scalar quantities."
},
{
subject: "Physics", topic: "Electricity & Magnetism", year: 1990, exam: "JAMB",
question: "The total energy required to send a unit positive charge round a complete electrical circuit is defined as the",
options: ["Kinetic energy", "Potential difference", "Electromotive force", "Electrical energy"],
answer: "Electromotive force",
explanation: "The electromotive force (e.m.f.) of a cell or source is the total work done or total electrical energy supplied per unit charge to drive current completely around an entire closed loop circuit, including through the internal resistance of the cell itself."
}
];
export default physicsJamb1990;