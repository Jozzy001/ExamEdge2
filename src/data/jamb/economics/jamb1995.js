// JAMB 1995 Physics Past Questions
// Fully flattened — standalone objects with topics, answers, and detailed explanations.
// Strictly skipped questions containing complex geometric diagrams or custom data tables.

const physicsJamb1995 = [
  {
    subject: "Physics", topic: "Measurement & Units", year: 1995, exam: "JAMB",
    question: "Which of the following is the correct dimension of pressure?",
    options: ["ML⁻¹T⁻²", "MLT²", "ML²T⁻³", "ML⁻³"],
    answer: "ML⁻¹T⁻²",
    explanation: "Pressure is defined as Force divided by Area ($P = F/A$). Force has dimensions of $\\text{Mass} \\times \\text{Acceleration} = M \\times LT^{-2} = MLT^{-2}$. Area has dimensions of $L^2$. Therefore, the dimension of pressure is $MLT^{-2} / L^2 = ML^{-1}T^{-2}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1995, exam: "JAMB",
    question: "The length of a simple pendulum bob which passes its lowest point twice every second is [g = 10 ms⁻²]",
    options: ["0.25m", "0.45m", "0.58m", "1.00m"],
    answer: "0.25m",
    explanation: "A pendulum bob passes its lowest point twice during one complete cycle (once swinging forward, once swinging back). If it passes the lowest point twice every second, it means it completes one full cycle every second, so its period $T = 1.0\\text{ s}$. Using the period formula $T = 2\\pi\\sqrt{L/g} \\rightarrow 1 = 2\\pi\\sqrt{L/10} \\rightarrow 1 = 4\\pi^2(L/10) \\rightarrow L = 10 / (4\\pi^2) \\approx 10 / 39.478 \\approx 0.25\\text{ m}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1995, exam: "JAMB",
    question: "When a ball rolls on a smooth level ground, the motion of its centre is described as",
    options: ["Translational", "Oscillatory", "Random", "Rotational"],
    answer: "Translational",
    explanation: "As a ball rolls on a horizontal surface, the body executes a combined rotational and translational motion. However, tracking specifically the center of mass of the ball shows that it moves in a straight line path along the plane, which represents purely translational motion."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1995, exam: "JAMB",
    question: "What is the acceleration due to gravity 'g' on the moon, given that g is 10 ms⁻² on the Earth?",
    options: ["0.10 ms⁻²", "0.74 ms⁻²", "1.67 ms⁻²", "10.00 ms⁻²"],
    answer: "1.67 ms⁻²",
    explanation: "The acceleration due to gravity on the Moon's surface is approximately one-sixth ($1/6$) of the gravitational acceleration on the Earth's surface: $g_{\\text{moon}} = 10\\text{ ms}^{-2} / 6 \\approx 1.67\\text{ ms}^{-2}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1995, exam: "JAMB",
    question: "A body is projected from the Earth's surface with the intention of letting it escape from the Earth's gravitational field. What is the minimum escape velocity of the body?",
    options: ["14 km s⁻¹", "13 km s⁻¹", "12 km s⁻¹", "11 km s⁻¹"],
    answer: "11 km s⁻¹",
    explanation: "The escape velocity ($v_{\\text{e}}$) from the Earth surface is mathematically derived as $v_{\\text{e}} = \\sqrt{2gR_{\\text{E}}}$. Substituting standard baseline planetary values yields a constant minimum threshold speed of approximately $11.2\\text{ km/s}$, which corresponds closest to 11 km s⁻¹."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1995, exam: "JAMB",
    question: "A uniform rod PQ of length 1m and mass 2kg is pivoted at the end P. If a load of 14N is placed at the centre of the rod, find the force that should be applied vertically upwards at Q to maintain the rod in equilibrium horizontally. [g = 10 ms⁻²]",
    options: ["68 N", "28 N", "17 N", "7 N"],
    answer: "17 N",
    explanation: "Weight of the uniform rod itself acts at its midpoint (center of gravity at 0.5m): $W = mg = 2\\text{ kg} \\times 10\\text{ ms}^{-2} = 20\\text{ N}$. An additional 14N load is also placed at the midpoint, so total downward force at the center (0.5m from P) is $20 + 14 = 34\\text{ N}$. Take moments about the pivot point P for equilibrium: $\\text{Clockwise Moments} = \\text{Anticlockwise Moments} \\rightarrow 34\\text{ N} \\times 0.5\\text{ m} = F_{\\text{Q}} \\times 1.0\\text{ m} \\rightarrow 17 = F_{\\text{Q}} \\rightarrow F_{\\text{Q}} = 17\\text{ N}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1995, exam: "JAMB",
    question: "A vehicle of mass m is driven by an engine of power P from rest. Find the minimum time it will take to acquire a speed v.",
    options: ["mv² / P", "mv² / 2P", "mv / P", "P / mv²"],
    answer: "mv² / 2P",
    explanation: "Power is defined as work done or energy transformed per unit time ($P = E/t$). The network input transferred to a vehicle accelerating from rest equals its final kinetic energy payload: $E = \\frac{1}{2}mv^2$. Substituting this into the power equation yields: $P = (\\frac{1}{2}mv^2) / t \\rightarrow t = mv^2 / 2P$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1995, exam: "JAMB",
    question: "Which of the following statements are TRUE about frictional force?\nI. It is always a disadvantage.\nII. It is sometimes a disadvantage.\nIII. It always exists where there is relative motion of two bodies in contact.\nIV. It is sometimes very useful.",
    options: ["I and II only", "II and III only", "I, II and III", "II, III and IV"],
    answer: "II, III and IV",
    explanation: "Friction is not always a disadvantage (making statement I false); it is essential for actions like walking, vehicle braking, or belt drives, making it very useful (IV). It acts as an energetic loss or mechanical wear disadvantage in gears and pistons (II), and it naturally opposes sliding wherever two contact surfaces experience relative movement (III)."
  },
  {
    subject: "Physics", topic: "Properties of Matter", year: 1995, exam: "JAMB",
    question: "The energy contained in a wire when it is extended by 0.02m by a force of 500 N is",
    options: ["5 J", "10 J", "10³ J", "10⁴ J"],
    answer: "5 J",
    explanation: "The elastic potential energy (or strain energy) stored in a stretched wire obeying Hooke's law is given by the area under the force-extension graph: $E = \\frac{1}{2}Fe$. Substituting the values: $E = \\frac{1}{2} \\times 500\\text{ N} \\times 0.02\\text{ m} = 250 \\times 0.02 = 5\\text{ J}$."
  },
  {
    subject: "Physics", topic: "Hydrostatics & Fluids", year: 1995, exam: "JAMB",
    question: "The volume of an air bubble increases from the bottom to the top of a lake at constant temperature because",
    options: [
      "Atmospheric pressure acts on the surface of the lake.",
      "Pressure increases with depth of the lake.",
      "Density remains constant with pressure.",
      "The fluid pressure drops as the bubble approaches the surface."
    ],
    answer: "The fluid pressure drops as the bubble approaches the surface.",
    explanation: "By Boyle's law at a constant temperature, gas volume is inversely proportional to pressure ($V \\propto 1/P$). At the bottom of a lake, a bubble experiences high hydrostatic pressure ($P = P_{\\text{atm}} + \\rho gh$). As it rises, depth $h$ decreases, causing the surrounding fluid pressure to drop, which allows the bubble to expand."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1995, exam: "JAMB",
    question: "Temperature can be described molecularly as a measure of the",
    options: [
      "Quantity of heat transferred into the molecules of an object",
      "Mean kinetic energy of the molecules of the object",
      "Kinetic energy of any individual molecule of the substance.",
      "Amount of work done by the molecules of the object."
    ],
    answer: "Mean kinetic energy of the molecules of the object",
    explanation: "In kinetic theory, temperature is not defined by individual molecular speeds, but represents a macroscopic measure of the average (mean) translational kinetic energy of the entire system of moving molecules ($E_{\\text{k}} = \\frac{3}{2}kT$)."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1995, exam: "JAMB",
    question: "A rectangular metal block of volume $10^{-6}\\,\\text{m}^{3}$ is at 573K. If its coefficient of linear expansion is $1.2 \\times 10^{-5}\\,\\text{K}^{-1}$, the percentage change of its volume when cooled through 100K is",
    options: ["1.5%", "1.1%", "0.4%", "0.36%"],
    answer: "0.36%",
    explanation: "The volume expansivity is $\\gamma = 3\\alpha = 3 \\times (1.2 \\times 10^{-5}) = 3.6 \\times 10^{-5}\\,\\text{K}^{-1}$. Fractional change in volume is $\\Delta V / V_0 = \\gamma \\Delta T = (3.6 \\times 10^{-5}) \\times 100 = 3.6 \\times 10^{-3} = 0.0036$. Percentage change $= (\\Delta V / V_0) \\times 100\\% = 0.0036 \\times 100\\% = 0.36\\%$."
  },
  {
    subject: "Physics", topic: "Hydrostatics & Fluids", year: 1995, exam: "JAMB",
    question: "A piece of wood floats inside water at room temperature with a fraction of its volume above the liquid surface. As the temperature of the water is raised, the part of the wood above the surface will",
    options: [
      "Decrease because the density of water decreases with temperature.",
      "Increase because the density of water decreases with temperature.",
      "Decrease because the density of water increases with temperature.",
      "Increase because the density of water increases with temperature."
    ],
    answer: "Decrease because the density of water decreases with temperature.",
    explanation: "By the law of flotation, the fraction of an object's volume submerged is given by $V_{\\text{sub}} / V_{\\text{total}} = \\rho_{\\text{object}} / \\rho_{\\text{fluid}}$. Heating water above 4°C causes it to expand, decreasing its density ($\\rho_{\\text{fluid}}$). Because fluid density drops, the denominator decreases, forcing the submerged volume fraction to increase, which decreases the part visible above the surface."
  },
  {
subject: "Physics", topic: "Heat & Thermodynamics", year: 1995, exam: "JAMB",
question: "The equation $P^{x}V^{y}T^{z} = \text{constant}$ represents Charles' law when",
options: ["x = 1, y = -1, z = 1", "x = 0, y = 1, z = -1", "x = 1, y = 0, z = -1", "x = 0, y = 1, z = 1"],
answer: "x = 0, y = 1, z = -1",
explanation: "Charles's law states that at a constant pressure, the volume of a fixed mass of gas is directly proportional to its absolute temperature ($V \propto T \rightarrow V/T = \text{constant} \rightarrow V^1 T^{-1} = \text{constant}$). Since pressure $P$ has no effect or exponent parameter here, its power coefficient is $x = 0$. Matching terms yields $x = 0, y = 1, z = -1$."
},
{
subject: "Physics", topic: "Heat & Thermodynamics", year: 1995, exam: "JAMB",
question: "An electric kettle with negligible heat capacity is rated at 2000 W. If 2.0kg of water is put in it, how long will it take the temperature of the water to rise from 20°C to 100°C? [Specific heat capacity of water = $4200\,\text{J kg}^{-1}\text{K}^{-1}$]",
options: ["420s", "336s", "168s", "84s"],
answer: "336s",
explanation: "Thermal energy needed: $Q = mc\Delta T = 2.0\text{ kg} \times 4200\text{ J/kg\cdot K} \times (100 - 20)^{\circ}\text{C} = 8400 \times 80 = 672,000\text{ J}$. Electrical energy supplied is $\text{Power} \times t = 2000 \times t$. Equating terms: $2000t = 672,000 \rightarrow t = 672,000 / 2000 = 336\text{ seconds}$."
},
{
subject: "Physics", topic: "Heat & Thermodynamics", year: 1995, exam: "JAMB",
question: "A temperature scale has a lower fixed point of 40mm and an upper fixed point of 200mm. What is the reading on this scale when a Celsius thermometer reads 60°C?",
options: ["33.3 mm", "36.0 mm", "96.0 mm", "136.0 mm"],
answer: "136.0 mm",
explanation: "Using the linear scale property: $\frac{\theta - 0}{100 - 0} = \frac{S_{\theta} - S_0}{S_{100} - S_0} \rightarrow \frac{60}{100} = \frac{S_{\theta} - 40}{200 - 40} \rightarrow 0.6 = \frac{S_{\theta} - 40}{160}$. Cross-multiplying: $S_{\theta} - 40 = 0.6 \times 160 \rightarrow S_{\theta} - 40 = 96 \rightarrow S_{\theta} = 96 + 40 = 136.0\text{ mm}$."
},
{
subject: "Physics", topic: "Heat & Thermodynamics", year: 1995, exam: "JAMB",
question: "A quantity of ice at -10°C is heated until the temperature of the heating vessel reaches 90°C. Which of the following thermal constants is NOT required in calculating the total heat absorbed?",
options: ["Specific heat capacity of ice", "Specific heat capacity of water", "Specific latent heat of fusion", "Specific latent heat of vaporization."],
answer: "Specific latent heat of vaporization.",
explanation: "The thermal steps are: warming ice from -10°C to 0°C (requires specific heat capacity of ice), melting ice at 0°C (requires specific latent heat of fusion), and warming water from 0°C to 90°C (requires specific heat capacity of water). Because the water never reaches its 100°C boiling threshold, the specific latent heat of vaporization is not required."
},
{
subject: "Physics", topic: "Heat & Thermodynamics", year: 1995, exam: "JAMB",
question: "Which of the following statements give the TRUE differences between evaporation and boiling?\nI. Evaporation occurs at all temperatures while boiling occurs at a fixed temperature for a given pressure.\nII. Evaporation is a surface phenomenon while boiling is an interior phenomenon.\nIII. Evaporation is affected by surface area whereas boiling is not.",
options: ["I and II only", "II and III only", "I and III only", "I, II and III"],
answer: "I, II and III",
explanation: "All statements are correct. Evaporation happens dynamically at any temperature, while boiling requires a specific temperature threshold where vapour pressure matches atmospheric pressure (I). Evaporation involves only surface molecules escaping, whereas boiling involves vapor bubbles forming throughout the interior volume (II). Evaporation rates increase with a larger exposed surface area, which does not dictate the boiling point (III)."
},
{
subject: "Physics", topic: "Heat & Thermodynamics", year: 1995, exam: "JAMB",
question: "A well-lagged bar of length 100cm has its ends maintained at 100°C and 40°C respectively. What is the temperature at a point 60cm from the hotter end?",
options: ["58°C", "62°C", "64°C", "76°C"],
answer: "64°C",
explanation: "For a perfectly lagged bar in steady state, the temperature gradient is constant: $\frac{\Delta T}{\Delta x} = \text{constant} \rightarrow \frac{100 - 40}{100} = \frac{100 - \theta}{60} \rightarrow \frac{60}{100} = \frac{100 - \theta}{60} \rightarrow 0.6 = \frac{100 - \theta}{60}$. Cross-multiplying gives: $100 - \theta = 36 \rightarrow \theta = 100 - 36 = 64^{\circ}\text{C}$."
},
{
subject: "Physics", topic: "Sound & Waves", year: 1995, exam: "JAMB",
question: "Which of the following is an exclusive property of a transverse wave?",
options: ["Diffraction", "Refraction", "Compression", "Polarization"],
answer: "Polarization",
explanation: "Interference, refraction, and diffraction happen with all waves. Polarization, which limits wave vibrations to a single plane perpendicular to the direction of travel, can only happen with transverse waves, making it an exclusive property."
},
{
subject: "Physics", topic: "Sound & Waves", year: 1995, exam: "JAMB",
question: "The wavelength of a signal from a radio transmitter is 1500m and its frequency is 200kHz. What is the wavelength for a transmitter operating at 1000kHz in the same medium?",
options: ["7500m", "300 m", "75 m", "15 m"],
answer: "300 m",
explanation: "Since both signals travel through the same medium, the wave velocity ($v = f\lambda$) is constant. Therefore, $f_1 \lambda_1 = f_2 \lambda_2 \rightarrow 200\text{ kHz} \times 1500\text{ m} = 1000\text{ kHz} \times \lambda_2 \rightarrow 300,000 = 1000\lambda_2 \rightarrow \lambda_2 = 300\text{ m}$."
},
{
subject: "Physics", topic: "Sound & Waves", year: 1995, exam: "JAMB",
question: "The fundamental difference between sound waves and light waves is that sound waves",
options: [
"Are transverse while light waves are longitudinal.",
"Require a material medium to travel while light waves do not.",
"Can be diffracted but light waves cannot.",
"Cannot be reflected but light waves can."
],
answer: "Require a material medium to travel while light waves do not.",
explanation: "Sound waves are mechanical longitudinal waves that rely on particle vibrations to travel, so they cannot propagate through a vacuum. Light waves are electromagnetic transverse waves that need no material medium to travel."
},
{
subject: "Physics", topic: "Sound & Waves", year: 1995, exam: "JAMB",
question: "The pitch of an acoustic device can be increased by",
options: ["Increasing the frequency", "Increasing the amplitude", "Decreasing the loudness", "Decreasing the intensity"],
answer: "Increasing the frequency",
explanation: "Pitch is the psychological perception of sound that corresponds directly to its physical frequency. Higher wave frequency creates a higher perceived pitch, while amplitude dictates loudness parameters."
},
{
subject: "Physics", topic: "Waves & Optics", year: 1995, exam: "JAMB",
question: "A total eclipse of the Sun occurs when the",
options: [
"Earth is between the Moon and the Sun",
"Sun is between the Moon and the Earth",
"Moon is between the Sun and the Earth",
"Ozone layer is threatened"
],
answer: "Moon is between the Sun and the Earth",
explanation: "A solar eclipse happens when the Moon moves directly between the Sun and the Earth, casting its shadow onto the Earth's surface and blocking out the sunlight."
},
{
subject: "Physics", topic: "Waves & Optics", year: 1995, exam: "JAMB",
question: "What is the approximate critical angle for total internal reflection inside a diamond if the refractive index of diamond is 2.42?",
options: ["21°", "22°", "23°", "24°"],
answer: "24°",
explanation: "The equation for the critical angle is $\sin c = 1/n$. Given $n = 2.42$, we get $\sin c = 1 / 2.42 \approx 0.4132$. Taking the inverse sine: $c = \sin^{-1}(0.4132) \approx 24.4^{\circ}$, which rounds to 24°."
},
{
subject: "Physics", topic: "Waves & Optics", year: 1995, exam: "JAMB",
question: "Which of the following pairs of constituent colours gives the widest separation in a standard spectrum of white light?",
options: ["Red and violet", "Green and yellow", "Red and indigo", "Yellow and violet."],
answer: "Red and violet",
explanation: "White light splits into colors based on wavelength. Red light has the longest wavelength and bends the least, while violet light has the shortest wavelength and bends the most. Because they sit at opposite ends of the visible spectrum, they have the widest separation."
}
];
export default physicsJamb1995;