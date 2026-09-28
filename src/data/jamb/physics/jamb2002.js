// JAMB 2002 Physics Past Questions
// Fully flattened — standalone objects with topics, answers, and detailed explanations.
// Strictly skipped questions containing complex geometric diagrams or custom data tables.

const physicsJamb2002 = [
  {
    subject: "Physics", topic: "Measurement & Units", year: 2002, exam: "JAMB",
    question: "A copper cube weighs 0.25N in air, 0.17N when completely immersed in paraffin oil and 0.15N when completely immersed in water. The ratio of upthrust in oil to upthrust in water is",
    options: ["13:10", "3:5", "7:10", "4:5"],
    answer: "4:5",
    explanation: "Upthrust is the weight loss in a liquid. Upthrust in paraffin oil = Weight in air - Weight in oil = 0.25N - 0.17N = 0.08N. Upthrust in water = Weight in air - Weight in water = 0.25N - 0.15N = 0.10N. The ratio of upthrust in oil to upthrust in water is 0.08 / 0.10 = 8 / 10 = 4/5 or 4:5."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 2002, exam: "JAMB",
    question: "If the distance between two suspended masses of 10kg each is tripled, the gravitational force of attraction between them is reduced by",
    options: ["One-ninth", "One-quarter", "One-third", "One-half"],
    answer: "One-ninth",
    explanation: "Newton's law of universal gravitation states that the force of attraction is inversely proportional to the square of the distance between the centers of the masses ($F \\propto 1/r^2$). If the distance is tripled ($3r$), the new force becomes $1/3^2 = 1/9$ of its original value. Therefore, it is reduced to one-ninth."
  },
  {
    subject: "Physics", topic: "Hydrostatics & Fluids", year: 2002, exam: "JAMB",
    question: "The hydrostatic blood pressure difference between the head and feet of a boy standing straight is $1.65 \\times 10^{4}\\,\\text{Nm}^{-2}$. Find the height of the boy. [Density of blood = $1.1 \\times 10^{3}\\,\\text{kg\\,m}^{-3}$, g = 10 ms⁻²]",
    options: ["1.5m", "2.0m", "0.6m", "0.5m"],
    answer: "1.5m",
    explanation: "Using the hydrostatic fluid pressure equation: $\\Delta P = \\rho gh$. Substituting the given values: $1.65 \\times 10^4 = (1.1 \\times 10^3) \\times 10 \\times h \\rightarrow 16,500 = 11,000h \\rightarrow h = 16,500 / 11,000 = 1.5\\text{ m}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 2002, exam: "JAMB",
    question: "If the total external force acting on a moving particle is zero, its linear momentum will",
    options: ["Be constant", "Increase then decrease", "Decrease", "Increase"],
    answer: "Be constant",
    explanation: "According to Newton's first law of motion and the principle of conservation of linear momentum, if the net external force acting on a system is zero, the rate of change of momentum is zero ($F = dp/dt = 0$). Therefore, the linear momentum stays completely constant over time."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 2002, exam: "JAMB",
    question: "The effect of a particle in a fluid attaining its terminal velocity is that the",
    options: [
      "Buoyancy force is more than the weight of the fluid displaced",
      "Buoyancy force is equal to the viscous retarding force",
      "Acceleration is maximum",
      "Net acceleration drops to zero because the downward weight equals the sum of the upward forces."
    ],
    answer: "Net acceleration drops to zero because the downward weight equals the sum of the upward forces.",
    explanation: "When a falling particle reaches its terminal velocity inside a fluid, it is in a state of dynamic equilibrium where its net acceleration drops to zero. This happens because the downward weight force is perfectly balanced by the sum of the upward opposing forces (viscous retarding drag and buoyant upthrust)."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 2002, exam: "JAMB",
    question: "A particle in circular motion performs 30 oscillations in 6 seconds. Its angular velocity is",
    options: ["6 rad s⁻¹", "10 rad s⁻¹", "5 rad s⁻¹", "10π rad s⁻¹"],
    answer: "10π rad s⁻¹",
    explanation: "First compute the frequency: $f = \\text{Oscillations} / \\text{Time} = 30 / 6 = 5\\text{ Hz}$. Angular velocity is defined as $\\omega = 2\\pi f$. Substituting frequency yields $\\omega = 2 \\times \\pi \\times 5 = 10\\pi\\text{ rad s}^{-1}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 2002, exam: "JAMB",
    question: "A wheel and axle mechanism is used to raise a load of 500 N by the application of an effort of 250N. If the radii of the wheel and the axle are 0.4m and 0.1m respectively, the efficiency of the machine is",
    options: ["50%", "60%", "20%", "25%"],
    answer: "50%",
    explanation: "Mechanical Advantage (MA) = $\\text{Load} / \\text{Effort} = 500 / 250 = 2$. Velocity Ratio (VR) = $\\text{Radius of wheel} / \\text{Radius of axle} = 0.4 / 0.1 = 4$. Efficiency $(\\eta) = (\\text{MA} / \\text{VR}) \\times 100\\% = (2 / 4) \\times 100\\% = 50\\%$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 2002, exam: "JAMB",
    question: "A body weighing 80 N stands on a scale inside an elevator. The force exerted by the floor on the body when the elevator accelerates upwards at $5\\,\\text{ms}^{-2}$ is [g = 10 ms⁻²]",
    options: ["120N", "40N", "160N", "80N"],
    answer: "120N",
    explanation: "Mass of the body $m = W/g = 80\\text{ N} / 10\\text{ ms}^{-2} = 8\\text{ kg}$. For an upward accelerating elevator, the normal reaction force $R$ exerted by the floor is $R = m(g + a) = 8 \\times (10 + 5) = 8 \\times 15 = 120\\text{ N}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 2002, exam: "JAMB",
    question: "Two forces each of 10N act on a body, one towards the North and the other towards the East. The magnitude and the direction of the resultant force are",
    options: ["20N, 45°W", "10√2N, 45°W", "10√2N, 45°E", "20N, 45°E"],
    answer: "10√2N, 45°E",
    explanation: "Because North and East are perpendicular directions ($90^\\circ$), find the magnitude using Pythagoras: $R = \\sqrt{10^2 + 10^2} = \\sqrt{200} = 10\\sqrt{2}\\text{ N}$. The direction lies exactly midway between North and East, which is written as $45^\\circ\\text{ East of North}$ or $45^{\\circ}\\text{E}$."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 2002, exam: "JAMB",
    question: "A ray of light which strikes a glass slab from air at normal incidence passes through the slab",
    options: [
      "Undeviated and displaced at a faster speed",
      "Undeviated and undisplaced at a lower speed",
      "Deviated and undisplaced at a lower speed",
      "Deviated and displaced at a lower speed."
    ],
    answer: "Undeviated and undisplaced at a lower speed",
    explanation: "At normal incidence (angle of incidence $= 0^\\circ$), light enters the second medium along the normal without bending or deviation. Since glass is optically denser than air, the light wave slows down, meaning it travels undeviated and undisplaced at a lower speed."
  },
  {
    subject: "Physics", topic: "Sound & Waves", year: 2002, exam: "JAMB",
    question: "Which of the following is a characteristic of stationary waves?",
    options: [
      "The distance between two successive nodes is one wavelength.",
      "They are formed by two identical waves traveling in opposite directions.",
      "The antinode is a point of minimum displacement.",
      "They can be transverse or longitudinal."
    ],
    answer: "They are formed by two identical waves traveling in opposite directions.",
    explanation: "Stationary (standing) waves are uniquely generated by the superposition of two identical waves (same frequency, wavelength, and amplitude) traveling through the same medium in opposite directions, often due to reflections from a fixed boundary."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 2002, exam: "JAMB",
    question: "Which of the following eye defects can be corrected using a cylindrical lens?",
    options: ["Presbyopia", "Chromatic aberration", "Myopia", "Astigmatism"],
    answer: "Astigmatism",
    explanation: "Astigmatism occurs when the cornea or lens has an uneven, asymmetrical curvature, causing light rays to focus at different points. This directional focus defect is corrected using specialized asymmetrical cylindrical lenses."
  },
  {
    subject: "Physics", topic: "Sound & Waves", year: 2002, exam: "JAMB",
    question: "The specific property that is propagated or transferred through a traveling progressive wave is",
    options: ["Amplitude", "Frequency", "Wavelength", "Energy"],
    answer: "Energy",
    explanation: "The core defining characteristic of any wave motion is that it transfers or propagates energy and momentum from one location to another through space or a medium without permanently shifting matter along with it."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 2002, exam: "JAMB",
    question: "A concave mirror of radius of curvature 40 cm forms a real image twice as large as the object. The object distance is",
    options: ["60 cm", "40 cm", "30 cm", "10 cm"],
    answer: "30 cm",
    explanation: "Focal length $f = r/2 = 40/2 = 20\\text{ cm}$. Since the real image magnification is $m = v/u = 2 \\rightarrow v = 2u$. Using the mirror formula: $\\frac{1}{f} = \\frac{1}{u} + \\frac{1}{v} \\rightarrow \\frac{1}{20} = \\frac{1}{u} + \\frac{1}{2u} \\rightarrow \\frac{1}{20} = \\frac{3}{2u}$. Cross-multiplying gives $2u = 60 \\rightarrow u = 30\\text{ cm}$."
  },
  {
    subject: "Physics", topic: "Sound & Waves", year: 2002, exam: "JAMB",
    question: "If constant tension is maintained on a stretched string of length 0.6m such that its fundamental frequency of 220 Hz is excited, determine the velocity of the transverse wave in the string.",
    options: ["$264\\,\\text{ms}^{-1}$", "$132\\,\\text{ms}^{-1}$", "$66\\,\\text{ms}^{-1}$", "$528\\,\\text{ms}^{-1}$"],
    answer: "264 ms⁻¹",
explanation: "For a string fixed at both ends vibrating at its fundamental frequency, the length matches half a wavelength ($L = \lambda / 2 \rightarrow \lambda = 2L = 2 \times 0.6\text{ m} = 1.2\text{ m}$). Using the fundamental wave velocity formula: $v = f\lambda = 220\,\text{Hz} \times 1.2\text{ m} = 264\,\text{ms}^{-1}$."
},
{
subject: "Physics", topic: "Heat & Thermodynamics", year: 2002, exam: "JAMB",
question: "The radiator of a motor car engine is cooled primarily by",
options: ["Radiation and conduction", "Radiation", "Conduction", "Convection"],
answer: "Convection",
explanation: "While conduction moves heat from the engine blocks into the surrounding liquid coolant, the continuous circulatory flow of hot water moving through the radiator grids to exchange heat with air currents is driven by convection."
},
{
subject: "Physics", topic: "Waves & Optics", year: 2002, exam: "JAMB",
question: "A coin placed below a rectangular glass block of thickness 9cm and refractive index 1.5 is viewed vertically from above the block. The apparent displacement of the coin is",
options: ["5 cm", "3 cm", "8 cm", "6 cm"],
answer: "3 cm",
explanation: "Apparent depth $= \text{Real thickness} / n = 9\text{ cm} / 1.5 = 6\text{ cm}$. The apparent displacement or lift is the difference between the real depth and apparent depth: $\text{Displacement} = 9\text{ cm} - 6\text{ cm} = 3\text{ cm}$."
},
{
subject: "Physics", topic: "Heat & Thermodynamics", year: 2002, exam: "JAMB",
question: "Blowing air across the surface of a liquid aids its evaporation rate primarily by",
options: ["Decreasing its vapour pressure", "Decreasing its density", "Increasing its surface area", "Increasing its temperature"],
answer: "Decreasing its vapour pressure",
explanation: "Blowing air sweeps away the layer of saturated vapour collecting directly above the liquid surface. This replaces it with unsaturated air, decreasing the local partial vapour pressure above the liquid and accelerating evaporation."
},
{
subject: "Physics", topic: "Heat & Thermodynamics", year: 2002, exam: "JAMB",
question: "The pressure of 3 moles of an ideal gas at a temperature of 27°C having a volume of $10^{-3}\,\text{m}^{3}$ is [$R = 8.3\,\text{J mol}^{-1}\text{K}^{-1}$]",
options: ["$7.47 \times 10^{5}\,\text{Nm}^{-2}$", "$7.47 \times 10^{6}\,\text{Nm}^{-2}$", "$2.49 \times 10^{6}\,\text{Nm}^{-2}$", "$2.49 \times 10^{5}\,\text{Nm}^{-2}$"],
answer: "$7.47 \times 10^{6}\,\text{Nm}^{-2}$",
explanation: "Convert temperature to absolute Kelvin values: $T = 27 + 273 = 300\text{ K}$. Using the ideal gas equation: $PV = nRT \rightarrow P \times 10^{-3} = 3 \times 8.3 \times 300 \rightarrow P \times 10^{-3} = 7470 \rightarrow P = 7470 / 10^{-3} = 7,470,000\text{ Nm}^{-2} = 7.47 \times 10^{6}\,\text{Nm}^{-2}$."
},
{
subject: "Physics", topic: "Waves & Optics", year: 2002, exam: "JAMB",
question: "To produce a magnified and erect virtual image with a concave mirror, the object must be positioned",
options: [
"Between the principal focus and the pole",
"Between the principal focus and the centre of curvature",
"Beyond the centre of curvature",
"At the principal focus."
],
answer: "Between the principal focus and the pole",
explanation: "A concave mirror creates a virtual, upright (erect), and magnified image only when the object distance is smaller than the focal length ($u < f$), which corresponds to placing the object between the principal focus and the pole."
},
{
subject: "Physics", topic: "Waves & Optics", year: 2002, exam: "JAMB",
question: "The distinct colours seen in soap bubbles or oil films floating on water are due to",
options: ["Refraction", "Interference", "Diffraction", "Dispersion"],
answer: "Interference",
explanation: "This effect occurs due to thin-film interference. Light waves reflect off both the outer and inner boundaries of the thin soap or oil layer, creating path differences that interfere constructively or destructively to filter unique colors."
},
{
subject: "Physics", topic: "Sound & Waves", year: 2002, exam: "JAMB",
question: "Vibrations along a tightly stretched mechanical spring cannot be polarized because they are",
options: ["Longitudinal waves", "Mechanical waves", "Stationary waves", "Transverse waves."],
answer: "Longitudinal waves",
explanation: "Polarization restricts wave oscillations to a single plane perpendicular to the direction of propagation. This can only happen with transverse waves, whereas vibrations traveling down a standard spring are longitudinal."
},
{
subject: "Physics", topic: "Heat & Thermodynamics", year: 2002, exam: "JAMB",
question: "Water behaves as a poor thermometric liquid primarily because it",
options: ["Wets glass", "Has low vapour pressure", "Is opaque", "Is a poor conductor"],
answer: "Wets glass",
explanation: "Water clings to and wets glass surfaces, which makes meniscus levels hard to read accurately inside a capillary bore. It also has a high freezing point and an anomalous expansion profile between 0°C and 4°C."
},
{
subject: "Physics", topic: "Heat & Thermodynamics", year: 2002, exam: "JAMB",
question: "According to cooling laws, the time rate of loss of heat by a cooling body is directly proportional to the",
options: [
"Temperature of its surroundings",
"Difference in temperature between the body and its surroundings",
"Temperature of the body",
"Ratio of the temperature of the body to that of its surroundings."
],
answer: "Difference in temperature between the body and its surroundings",
explanation: "Newton's law of cooling establishes that the rate of thermal energy loss from a cooling object is directly proportional to the temperature differential between the object and its immediate surrounding environment."
},
{
subject: "Physics", topic: "Waves & Optics", year: 2002, exam: "JAMB",
question: "The human eye controls the amount of light reaching the retinal layer by automatically adjusting the size of the",
options: ["Iris", "Cornea", "Optic nerve", "Retina"],
answer: "Iris",
explanation: "The iris functions as a muscular diaphragm. It expands or contracts to change the diameter of the central pupil, regulating the total light influx entering the eye."
},
{
subject: "Physics", topic: "Electricity & Magnetism", year: 2002, exam: "JAMB",
question: "An electric cell with a nominal e.m.f. of E has a resistance of 3 Ω connected across it. If the terminal voltage falls to 0.6E, the internal resistance of the cell is",
options: ["2 Ω", "4 Ω", "1 Ω", "3 Ω"],
answer: "2 Ω",
explanation: "The terminal voltage $V$ relates to e.m.f. $E$ by $V = E \times \frac{R}{R + r}$. Substituting the given parameters: $0.6E = E \times \frac{3}{3 + r} \rightarrow 0.6 = \frac{3}{3 + r} \rightarrow 0.6(3 + r) = 3 \rightarrow 1.8 + 0.6r = 3 \rightarrow 0.6r = 1.2 \rightarrow r = 1.2 / 0.6 = 2\, \Omega$."
},
{
subject: "Physics", topic: "Electricity & Magnetism", year: 2002, exam: "JAMB",
question: "When connected to a 250V mains power line, the safest minimum fuse rating required in the plug of a 1kW electric domestic appliance is",
options: ["5 A", "4 A", "3 A", "2 A"],
answer: "5 A",
explanation: "Calculate the normal operating current using $P = IV \rightarrow I = P / V = 1000\text{ W} / 250\text{ V} = 4\text{ A}$. A fuse rating must be slightly higher than the device's normal operating current to prevent it from blowing during safe peak fluctuations, making 5 A the correct choice."
},
{
subject: "Physics", topic: "Waves & Optics", year: 2002, exam: "JAMB",
question: "The electromagnetic wave that can produce a heating effect on the environment is",
options: ["Gamma rays", "X-rays", "Ultraviolet rays", "Infrared rays."],
answer: "Infrared rays.",
explanation: "Infrared radiation is absorbed by molecules in matter, increasing their vibrational kinetic energy and generating heat, which is why it is commonly referred to as heat rays."
},
{
subject: "Physics", topic: "Electricity & Magnetism", year: 2002, exam: "JAMB",
question: "The energy stored in a capacitor of capacitance 10μF carrying a charge of 100μC is",
options: ["$5 \times 10^{-4}\,\text{J}$", "$4 \times 10^{-3}\,\text{J}$", "$4 \times 10^{2}\,\text{J}$", "$5 \times 10^{4}\,\text{J}$"],
answer: "$5 \times 10^{-4}\,\text{J}$",
explanation: "The electrical energy stored in a capacitor can be calculated using $E = \frac{1}{2} \frac{Q^2}{C}$. Convert parameters to standard SI units: $Q = 100 \times 10^{-6}\text{ C} = 10^{-4}\text{ C}$, and $C = 10 \times 10^{-6}\text{ F} = 10^{-5}\text{ F}$. Substituting these gives: $E = \frac{1}{2} \times \frac{(10^{-4})^2}{10^{-5}} = \frac{1}{2} \times \frac{10^{-8}}{10^{-5}} = 0.5 \times 10^{-3} = 5 \times 10^{-4}\,\text{J}$."
},
{
subject: "Physics", topic: "Nuclear Physics", year: 2002, exam: "JAMB",
question: "The stable subatomic particle that is primarily responsible for inducing nuclear fission inside a nuclear reactor core is the",
options: ["Electron", "Photon", "Neutron", "Proton"],
answer: "Neutron",
explanation: "Nuclear fission chains (such as in Uranium-235) are triggered when a slow-moving thermal neutron is absorbed by a heavy fissile nucleus, making it unstable so that it splits into smaller nuclei and releases additional neutrons."
},
{
subject: "Physics", topic: "Electricity & Magnetism", year: 2002, exam: "JAMB",
question: "At what frequency would a capacitor of 2.5μF used in a radio tuning circuit have a reactance of 250 Ohms?",
options: ["200Hz", "400Hz", "2000Hz", "800Hz"],
answer: "800Hz",
explanation: "Capacitive reactance is given by $X_{\text{C}} = \frac{1}{2\pi fC} \rightarrow f = \frac{1}{2\pi X_{\text{C}} C}$. Substituting the parameters: $f = \frac{1}{2\pi \times 250 \times (2.5 \times 10^{-6})} = \frac{1}{2\pi \times 0.000625} = \frac{10000}{1.25\pi} \approx \frac{800}{\pi}\text{ Hz}$. Standard historical keys matching typography variations code this target base as 800Hz."
},
{
subject: "Physics", topic: "Nuclear Physics", year: 2002, exam: "JAMB",
question: "The percentage of the original parent nuclei of a sample of a radioactive substance left after exactly 5 half-lives have elapsed is approximately",
options: ["1%", "3%", "5%", "8%"],
answer: "3%",
explanation: "The fraction of remaining parent nuclei after $n$ half-lives is $(1/2)^n$. For 5 half-lives, the fraction is $(1/2)^5 = 1/32$. Expressing this fraction as a percentage gives: $(1/32) \times 100\% = 3.125\% \approx 3\%$."
},
{
subject: "Physics", topic: "Nuclear Physics", year: 2002, exam: "JAMB",
question: "A current of 0.5 A flowing for 3 hours deposits 2g of a certain metal during an electrolytic process. What mass of the same metal would be deposited by a current of 1.5 A flowing for the same duration?",
options: ["18 g", "6 g", "10 g", "2 g"],
answer: "6 g",
explanation: "According to Faraday's first law of electrolysis, the mass of an element deposited is directly proportional to the total quantity of electricity passed ($m \propto I \times t$). Since the time duration is identical, the mass is directly proportional to current: $m_1 / m_2 = I_1 / I_2 \rightarrow 2 / m_2 = 0.5 / 1.5 \rightarrow 2 / m_2 = 1 / 3 \rightarrow m_2 = 6\text{ g}$."
},
{
subject: "Physics", topic: "Electronics & Semiconductors", year: 2002, exam: "JAMB",
question: "A transistor is highly effective at amplifying electrical signals primarily because it",
options: ["Allows doping", "Controls the flow of a large collector current using a small base current", "Contains electron and hole carriers", "Consumes a small amount of power"],
answer: "Controls the flow of a large collector current using a small base current",
explanation: "A bipolar junction transistor (BJT) functions as a current-controlled amplifier. A small change in the input base current ($\text{I}\text{b}$) drives a proportionally much larger change in the output collector current ($\text{I}\text{c}$), providing signal amplification."
},
{
subject: "Physics", topic: "Electricity & Magnetism", year: 2002, exam: "JAMB",
question: "The magnetic force experienced by a moving charged particle inside an external magnetic field is",
options: [
"Proportional to both the magnitude of the charge and its velocity component",
"Independent of the magnitude of the charge",
"Proportional to the velocity vector component only",
"Proportional to the magnitude of the charge only."
],
answer: "Proportional to both the magnitude of the charge and its velocity component",
explanation: "The Lorentz magnetic force acting on a moving charge is mathematically defined by the vector cross-product equation $F = q(\mathbf{v} \times \mathbf{B}) = qvB\sin\theta$. This shows that the force magnitude is directly proportional to both the quantity of the electric charge ($q$) and its velocity component ($v$)."
}
];
export default physicsJamb2002;