// JAMB 2000 Physics Past Questions
// Fully flattened — standalone objects with topics, answers, and detailed explanations.
// Strictly skipped questions containing complex geometric diagrams or custom data tables.

const physicsJamb2000 = [
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 2000, exam: "JAMB",
    question: "A catapult used to hold a stone of mass 500g is extended by 20cm with an applied force F. If the stone leaves with a velocity of 40 ms⁻¹, the value of F is",
    options: ["4.0 × 10⁴ N", "4.0 × 10³ N", "2.0 × 10³ N", "4.0 × 10² N"],
    answer: "4.0 × 10³ N",
    explanation: "By conservation of energy, the elastic potential energy stored in the stretched catapult equals the kinetic energy gained by the stone: ½Fe = ½mv². Convert units to SI: m = 0.5 kg, e = 0.2 m. Substitute values: ½ × F × 0.2 = ½ × 0.5 × 40² → 0.1F = 0.25 × 1600 → 0.1F = 400 → F = 400 / 0.1 = 4000 N = 4.0 × 10³ N."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 2000, exam: "JAMB",
    question: "A hand bag containing some load weighing 162N is carried by two students each holding the handle of the bag next to him. If each handle is pulled at 60° to the vertical, find the force on each student's arm.",
    options: ["324 N", "162 N", "121 N", "81 N"],
    answer: "162 N",
    explanation: "Let the tension force in each arm be T. Resolving the two forces vertically to balance the downward weight gives: T cos(60°) + T cos(60°) = 162 → 2T cos(60°) = 162. Since cos(60°) = 0.5, we get: 2T × 0.5 = 162 → T = 162 N."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 2000, exam: "JAMB",
    question: "Which combination of the following statements is true of sliding friction?\nI. The frictional force is independent of the area of the surfaces in contact.\nII. The frictional force depends on the nature of the surfaces in contact.\nIII. The frictional force depends on the speed of sliding.\nIV. The frictional force is directly proportional to the normal reaction.",
    options: ["I, II and IV", "I, II and III", "I, III and IV", "II, III and IV"],
    answer: "I, II and IV",
    explanation: "By the laws of solid friction, sliding (kinetic) friction is directly proportional to the normal reaction (IV) and depends entirely on the nature and roughness of the materials in contact (II). It is independent of the area of the surfaces in contact (I) and is largely independent of sliding velocity within normal limits (making III false)."
  },
  {
    subject: "Physics", topic: "Hydrostatics & Fluids", year: 2000, exam: "JAMB",
    question: "When a ship sails from salt water into fresh water, the fraction of its volume above the water surface will",
    options: ["Remain the same", "Increase", "Decrease", "Increase then decrease."],
    answer: "Decrease",
    explanation: "Salt water is denser than fresh water ($\rho_{\\text{salt}} > \rho_{\\text{fresh}}$). By the law of flotation, the volume fraction submerged is given by $V_{\\text{submerged}}/V_{\\text{total}} = \rho_{\\text{ship}}/ \rho_{\\text{fluid}}$. Moving into less dense fresh water increases the submerged fraction of the ship, which means the fraction remaining above the surface decreases."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 2000, exam: "JAMB",
    question: "A simple pendulum has a period of 17.0s. When the length is shortened by 1.5m, its period is 8.5s. Calculate the original length of the pendulum.",
    options: ["1.5m", "2.0m", "3.0m", "4.0m"],
    answer: "2.0m",
    explanation: "The period is proportional to the square root of length ($T \\propto \\sqrt{L} \\rightarrow T^2 \\propto L$). Therefore, $(T_1/T_2)^2 = L_1/L_2$. Substituting the values: $(17.0 / 8.5)^2 = L / (L - 1.5) \\rightarrow 2^2 = L / (L - 1.5) \\rightarrow 4 = L / (L - 1.5) \\rightarrow 4L - 6 = L \\rightarrow 3L = 6 \\rightarrow L = 2.0\\text{ m}$."
  },
  {
    subject: "Physics", topic: "Hydrostatics & Fluids", year: 2000, exam: "JAMB",
    question: "At a fixed point below a liquid surface, the pressure downward is $P_{1}$ and the pressure upward is $P_{2}$. It can be deduced that",
    options: ["$P_{1} = P_{2}$", "$P_{1} > P_{2}$", "$P_{1} < P_{2}$", "$P_{1} \\ge P_{2}$"],
    answer: "$P_{1} = P_{2}$",
    explanation: "According to Pascal's law, fluid pressure at any specific depth point inside a static liquid is transmitted equally and acts with identical magnitude in all directions. Therefore, the downward pressure $P_{1}$ must be equal to the upward pressure $P_{2}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 2000, exam: "JAMB",
    question: "Which combination of the following statements is true of a body moving with constant speed in a circular track?\nI. Its velocity is constant.\nII. No work is done on the body.\nIII. It has constant acceleration away from the center.\nIV. The centripetal force is directed towards the center.",
    options: ["I and III", "I and IV", "II and III", "II and IV"],
    answer: "II and IV",
    explanation: "Velocity continuously varies because its direction changes (making I false). Since centripetal force acts perpendicular ($90^\\circ$) to the tangential displacement, the work done on the body is zero (II). The centripetal acceleration and force always point inward *towards* the center (IV), not away from it (making III false)."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 2000, exam: "JAMB",
    question: "The velocity v of a particle in time t is given by the equation $v = 10 + 2t^{2}$. Find the instantaneous acceleration after 5 seconds.",
    options: ["$10\\text{ ms}^{-2}$", "$15\\text{ ms}^{-2}$", "$20\\text{ ms}^{-2}$", "$60\\text{ ms}^{-2}$"],
    answer: "$20\\text{ ms}^{-2}$",
    explanation: "Instantaneous acceleration is the derivative of velocity with respect to time ($a = dv/dt$). Differentiating $v = 10 + 2t^2$ gives $a = 4t$. Substituting $t = 5\\text{ s}$ yields $a = 4(5) = 20\\text{ ms}^{-2}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 2000, exam: "JAMB",
    question: "If the force and the velocity on a system are each reduced simultaneously by half, the power of the system is",
    options: ["Doubled", "Constant", "Reduced to a quarter", "Reduced by half"],
    answer: "Reduced to a quarter",
    explanation: "Power is defined as Force multiplied by Velocity ($P = F \\times v$). If both variables are halved, the new power is $P_{\\text{new}} = (0.5F) \\times (0.5v) = 0.25Fv = \\frac{1}{4}P$, reducing it to a quarter of its original value."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 2000, exam: "JAMB",
    question: "The velocity ratio of a machine is 5 and its efficiency is 75%. What effort would be needed to lift a load of 150N with the machine?",
    options: ["50 N", "40 N", "30 N", "20 N"],
    answer: "40 N",
    explanation: "Efficiency $= \\text{MA}/\\text{VR} \\rightarrow 0.75 = \\text{MA}/5 \\rightarrow \\text{MA} = 3.75$. Mechanical Advantage is defined as $\\text{Load}/\\text{Effort} \\rightarrow 3.75 = 150/\\text{Effort} \\rightarrow \\text{Effort} = 150 / 3.75 = 40\\text{ N}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 2000, exam: "JAMB",
    question: "A rope is being used to pull a mass of 10kg vertically upward. Determine the tension in the rope if, starting from rest, the mass acquires a velocity of $4\\text{ ms}^{-1}$ in 8s. [g = 10 ms⁻²]",
    options: ["105 N", "95 N", "50 N", "5 N"],
    answer: "105 N",
    explanation: "First, compute the linear acceleration: $a = (v - u)/t = (4 - 0)/8 = 0.5\\text{ ms}^{-2}$. For vertical upward acceleration, the equation of motion is $T - mg = ma \\rightarrow T = m(g + a)$. Substituting values: $T = 10 \\times (10 + 0.5) = 10 \\times 10.5 = 105\\text{ N}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 2000, exam: "JAMB",
    question: "A stream is flowing at $0.75\\text{ ms}^{-1}$ and a boat heading perpendicular to the stream landed at the opposite bank at an angle of 30° to the bank. Calculate the velocity of the boat.",
    options: ["$0.65\\text{ ms}^{-1}$", "$0.86\\text{ ms}^{-1}$", "$1.00\\text{ ms}^{-1}$", "$1.50\\text{ ms}^{-1}$"],
    answer: "1.50 ms⁻¹",
    explanation: "Let the resultant velocity of the boat be $v$. The stream velocity ($0.75\\text{ ms}^{-1}$) acts parallel to the bank. If the landing path makes 30° with the bank, then $\\sin(30^{\\circ}) = \\text{Opposite}/\\text{Hypotenuse} = v_{\\text{stream}}/v \\rightarrow 0.5 = 0.75/v \\rightarrow v = 0.75 / 0.5 = 1.50\\text{ ms}^{-1}$."
  },
  {
    subject: "Physics", topic: "Sound & Waves", year: 2000, exam: "JAMB",
    question: "Which of the following conditions are necessary to produce distinct interference fringes?\nI. Coherence\nII. Same frequency\nIII. Same wavelength\nIV. Same intensity",
    options: ["I, II and III", "I, II and IV", "I, III and IV", "II and III"],
    answer: "I, II and III",
    explanation: "To observe a clear, stable interference pattern, the two wave sources must be coherent (I), which implies they must have the same frequency (II) and the same wavelength (III). While similar intensities produce a clearer contrast, it is not a strict prerequisite for producing fringes."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 2000, exam: "JAMB",
    question: "An engineer intends to deviate a light ray from its path by 120° through reflection from a plane mirror. Calculate the angle of incidence.",
    options: ["20°", "30°", "40°", "60°"],
    answer: "30°",
    explanation: "The angle of deviation ($d$) for a plane mirror reflection is given by $d = 180^{\\circ} - 2i$. Substituting the deviation angle: $120^{\\circ} = 180^{\\circ} - 2i \\rightarrow 2i = 60^{\\circ} \\rightarrow i = 30^{\\circ}$."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 2000, exam: "JAMB",
question: "Total internal reflection occurs only when light moves from",
options: ["Air to water", "Water to glass", "A dense medium to a less dense medium", "A less dense medium to a dense medium"],
answer: "A dense medium to a less dense medium",
explanation: "Total internal reflection requires two strict optical parameters: first, light rays must travel inside an optically denser medium moving toward an interface with a less dense medium. Second, the incident angle must exceed the critical angle."
},
{
subject: "Physics", topic: "Sound & Waves", year: 2000, exam: "JAMB",
question: "One end of a long wire is fixed while a vibrator is attached to the other end. When the vibrator is energized, the types of waves generated along the wire are",
options: ["Stationary and transverse", "Progressive", "Stationary and longitudinal", "Progressive and longitudinal"],
answer: "Progressive",
explanation: "Because the wire is long and energy continuously travels away from the vibrator source down the line without hitting a nearby reflecting boundary to set up static loops, the waves propagating along the wire are progressive transverse waves."
},
{
subject: "Physics", topic: "Sound & Waves", year: 2000, exam: "JAMB",
question: "A sonometer wire is vibrating at frequency $f_{0}$. If the tension in the wire is doubled while the length and mass per unit length are kept constant, the new frequency of vibration is",
options: ["$f_{0} / 2$", "$f_{0} / \sqrt{2}$", "$\sqrt{2} f_{0}$", "$2 f_{0}$"],
answer: "$\sqrt{2} f_{0}$",
explanation: "The fundamental frequency of a stretched string is directly proportional to the square root of its tension ($f \propto \sqrt{T}$). If the tension $T$ is doubled ($2T$), the new frequency shifts to $f_{\text{new}} = \sqrt{2}f_{0}$."
},
{
subject: "Physics", topic: "Waves & Optics", year: 2000, exam: "JAMB",
question: "A boy spots a piece of stone at the bottom of a river 6.0m deep. If he looks vertically down from the surface, what is the apparent distance of the stone from him? [Refractive index of water = 4/3]",
options: ["4.5m", "5.0m", "5.5m", "8.0m"],
answer: "4.5m",
explanation: "Refractive index can be defined by the ratio of real depth to apparent depth ($n = d_{\text{real}} / d_{\text{apparent}}$). Substituting the values: $4/3 = 6.0 / d_{\text{apparent}} \rightarrow 4d_{\text{apparent}} = 18.0 \rightarrow d_{\text{apparent}} = 4.5\text{ m}$."
},
{
subject: "Physics", topic: "Heat & Thermodynamics", year: 2000, exam: "JAMB",
question: "The primary reason for making the protective cover of a vacuum flask airtight is to prevent heat loss by",
options: ["Conduction", "Evaporation", "Radiation", "Convection"],
answer: "Convection",
explanation: "An airtight stopper prevents warm water vapor from escaping or circulating with cooler air currents, effectively eliminating heat loss via convection and evaporation through the top opening."
},
{
subject: "Physics", topic: "Sound & Waves", year: 2000, exam: "JAMB",
question: "A transverse wave is applied to a string whose mass per unit length is $3 \times 10^{-2}\text{ kg m}^{-1}$. If the string is under a tension of 12N, the speed of propagation of the wave is",
options: ["$40\text{ ms}^{-1}$", "$30\text{ ms}^{-1}$", "$20\text{ ms}^{-1}$", "$5\text{ ms}^{-1}$"],
answer: "20 ms⁻¹",
explanation: "The velocity of a transverse wave along a stretched string is given by $v = \sqrt{T / \mu}$. Substituting the values: $v = \sqrt{12 / (3 \times 10^{-2})} = \sqrt{4 / 10^{-2}} = \sqrt{400} = 20\text{ ms}^{-1}$."
},
{
subject: "Physics", topic: "Heat & Thermodynamics", year: 2000, exam: "JAMB",
question: "A thin wire with heavy weights attached to both ends is hung over a block of ice resting on two supports. The wire cuts completely through the ice block while the block remains solid behind it. This process is called",
options: ["Fusion", "Condensation", "Sublimation", "Regelation"],
answer: "Regelation",
explanation: "Regelation is the phenomenon where ice melts under high pressure (beneath the heavy wire) and refreezes immediately once the pressure is released (behind the wire), allowing the wire to pass completely through the solid block."
},
{
subject: "Physics", topic: "Measurement & Units", year: 2000, exam: "JAMB",
question: "An instrument that can be used to measure internal resistance or e.m.f. without drawing any current from the cell at balance is the",
options: ["Ohm-meter", "Potentiometer", "Electroscope", "Metre bridge"],
answer: "Potentiometer",
explanation: "A potentiometer operates on a null-balance principle. When balanced, no current flows from the test cell through the galvanometer, allowing its true e.m.f. to be measured accurately without any internal voltage drops."
},
{
subject: "Physics", topic: "Electricity & Magnetism", year: 2000, exam: "JAMB",
question: "A 2H inductor has negligible resistance and is connected to a 50/π Hz a.c. power line supply. The inductive reactance of the inductor is",
options: ["200 Ω", "100 Ω", "50 Ω", "25 Ω"],
answer: "200 Ω",
explanation: "Inductive reactance is calculated as $X_{\text{L}} = 2\pi fL$. Substituting the values: $X_{\text{L}} = 2\pi \times (50/\pi) \times 2 = 2 \times 50 \times 2 = 200\, \Omega$."
},
{
subject: "Physics", topic: "Electricity & Magnetism", year: 2000, exam: "JAMB",
question: "A cell of internal resistance 1 Ω supplies current to an external resistor of 3 Ω. The electrical efficiency of the cell is",
options: ["75%", "50%", "33%", "25%"],
answer: "75%",
explanation: "The efficiency ($\eta$) of an electrical cell is given by the ratio of the external load resistance ($R$) to the total resistance ($R + r$): $\eta = \frac{R}{R + r} \times 100\% = \frac{3}{3 + 1} \times 100\% = \frac{3}{4} \times 100\% = 75\%$."
}
];
export default physicsJamb2000;
