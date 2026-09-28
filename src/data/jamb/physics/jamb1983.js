// JAMB 1983 Physics Past Questions
// Fully flattened — standalone objects with topics, answers, and detailed explanations.
// Strictly skipped questions containing complex geometric diagrams or custom data tables.

const physicsJamb1983 = [
  {
    subject: "Physics", topic: "Sound & Waves", year: 1983, exam: "JAMB",
    question: "In a resonance tube experiment, a tube of fixed length is closed at one end and several tuning forks of increasing frequency used to obtain resonance at the open end. If the tuning fork with the lowest frequency which gave resonance had a frequency $f_{1}$ and the next tuning fork to give resonance had a frequency $f_{2}$, find the ratio $f_{2}/f_{1}.$",
    options: ["8", "3", "2", "1/2", "1/3"],
    answer: "3",
    explanation: "For a tube closed at one end, the boundary conditions restrict the acoustic resonances to odd harmonics only ($1\lambda/4, 3\lambda/4, 5\lambda/4 \\dots$). The fundamental or lowest resonant frequency is $f_{1} = v/4L$. The next higher frequency that satisfies resonance is the third harmonic, $f_{2} = 3v/4L$. Therefore, the frequency ratio $f_{2}/f_{1} = 3$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1983, exam: "JAMB",
    question: "Which of the following is NOT a vector quantity?",
    options: ["Force", "Altitude", "Weight", "Displacement", "Acceleration"],
    answer: "Altitude",
    explanation: "Vector quantities are defined by possessing both a quantitative magnitude and a specific spatial direction. Force, weight, displacement, and acceleration are all vectors. Altitude defines a vertical height coordinate relative to a baseline datum, which is a scalar quantity."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1983, exam: "JAMB",
    question: "Which of the following statements about friction is NOT correct?",
    options: [
      "The force of kinetic friction is less than the force of static friction.",
      "The force of kinetic friction between two surfaces is independent of the areas in contact provided the normal reaction is unchanged.",
      "The force of rolling friction between two surfaces is less than the force of sliding friction.",
      "The angle of friction is the angle between the normal reaction and the force of friction.",
      "Friction may be reduced by lubrication."
    ],
    answer: "The angle of friction is the angle between the normal reaction and the force of friction.",
    explanation: "The angle of friction ($\theta$) is standardly defined as the angle between the vertical normal reaction vector ($R$) and the *resultant* force vector ($S$) of the normal reaction and the limiting friction force. It is not the angle directly between the normal reaction and friction itself (which is always structurally $90^\\circ$)."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1983, exam: "JAMB",
    question: "The force with which an object is attracted to the earth is called its",
    options: ["Acceleration", "Mass", "Gravity", "Impulse", "Weight"],
    answer: "Weight",
    explanation: "Weight is defined as the gravitational force of attraction exerted by the Earth on a mass. It satisfies Newton's second law as $W = mg$, distinguishing it from mass, which is an intrinsic measurement of matter inertia."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 1983, exam: "JAMB",
    question: "The refractive index of a liquid is 1.5. If the velocity of light in vacuum is $3.0 \\times 10^{8}\\,\\text{ms}^{-1}$, the velocity of light in the liquid is",
    options: [
      "$1.5 \\times 10^{8}\\,\\text{ms}^{-1}$",
      "$2.0 \\times 10^{8}\\,\\text{ms}^{-1}$",
      "$3.0 \\times 10^{8}\\,\\text{ms}^{-1}$",
      "$4.5 \\times 10^{8}\\,\\text{ms}^{-1}$",
      "$9.0 \\times 10^{8}\\,\\text{ms}^{-1}$"
    ],
    answer: "$2.0 \\times 10^{8}\\,\\text{ms}^{-1}$",
    explanation: "The index of refraction is defined by the ratio of light velocity in a vacuum ($c$) to its velocity inside the medium ($v$): $n = c/v$. Rearranging to solve for $v$ yields $v = c/n = (3.0 \\times 10^{8}\\,\\text{ms}^{-1}) / 1.5 = 2.0 \\times 10^{8}\\,\\text{ms}^{-1}$."
  },
  {
    subject: "Physics", topic: "Hydrostatics & Fluids", year: 1983, exam: "JAMB",
    question: "If the relative density of a metal is 19, what will be the mass of $20\\,\\text{cm}^{3}$ of the metal when immersed in water?",
    options: ["380g", "360g", "400g", "39g", "180g"],
    answer: "380g",
    explanation: "Relative density is equal to the material density divided by the density of water ($1\\,\\text{g/cm}^{3}$). Thus, the actual density of the metal is $19\\,\\text{g/cm}^{3}$. Mass is independent of immersion state and is computed as $\\text{Density} \\times \\text{Volume} = 19\\,\\text{g/cm}^{3} \\times 20\\,\\text{cm}^{3} = 380\\,\\text{g}$."
  },
  {
    subject: "Physics", topic: "Hydrostatics & Fluids", year: 1983, exam: "JAMB",
    question: "Which of the following statements about liquid pressure is NOT correct? The pressure",
    options: [
      "At a point in a liquid is proportional to the depth.",
      "At any point in a liquid is the same at the same level.",
      "Is exerted equally in all directions at any point.",
      "Of a liquid at any point on the wall of its container acts in a direction perpendicular to the wall.",
      "At a particular depth depends on the shape of the vessel."
    ],
    answer: "At a particular depth depends on the shape of the vessel.",
    explanation: "Hydrostatic fluid pressure depends exclusively on the fluid density ($\\rho$), the acceleration due to gravity ($g$), and the depth coordinate ($h$) below the surface ($P = \\rho gh$). It is independent of the cross-sectional geometry or shape of the container."
  },
  {
    subject: "Physics", topic: "Sound & Waves", year: 1983, exam: "JAMB",
    question: "Which of the following statements is NOT correct?",
    options: [
      "The pitch of a sound note depends on the frequency of vibrations.",
      "The intensity of a sound note is proportional to the amplitude of vibrations.",
      "Beats are produced by two sources of sound because one wave is travelling faster than the other.",
      "When two sources of sound of frequencies 500 Hz and 502 Hz are sounded together, a beat frequency of 2 Hz is observed.",
      "The first harmonic of a note has double the frequency of the fundamental note."
    ],
    answer: "Beats are produced by two sources of sound because one wave is travelling faster than the other.",
    explanation: "Beats are generated by the physical wave interference of two acoustic signals possessing slightly different periodic frequencies moving at identical propagation speeds through a shared medium. They are not caused by variations in wave travel speeds."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 1983, exam: "JAMB",
    question: "Which of the following conditions are necessary and sufficient for total internal reflection to take place at the boundary between two optical media?\nI. Light is passing from an optically denser medium to an optically less dense medium.\nII. Light is passing from an optically less dense medium to an optically denser medium.\nIII. The angle of incidence is greater than the critical angle.\nIV. The angle of incidence is less than the critical angle.",
    options: ["I and II only", "II and III only", "III and IV only", "I and III only", "II and IV only"],
    answer: "I and III only",
    explanation: "Total internal reflection requires two strict boundary conditions: first, light rays must travel inside an optically denser core medium moving toward a boundary with a less dense medium (I). Second, the angle of incidence must exceed the characteristic critical angle of the interface (III)."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 1983, exam: "JAMB",
    question: "Which of the following statements about defects of vision is/are CORRECT?\nI. For a long-sighted person, close objects appear blurred.\nII. For a short-sighted person, distant objects appear blurred.\nIII. Short sight is corrected by using a pair of converging lenses.",
    options: ["I only", "II only", "I and II only", "II and III only", "I, II and III"],
    answer: "I and II only",
    explanation: "Hyperometropia (long-sightedness) causes close objects to appear blurred (I), and myopia (short-sightedness) causes distant objects to blur (II). Statement III is incorrect because short-sightedness requires a diverging (concave) lens, not a converging one."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 1983, exam: "JAMB",
    question: "The range of wavelengths of the visible spectrum is 400nm - 700nm. The wavelength of gamma rays is",
    options: [
      "Longer than 700nm",
      "Shorter than 700nm but longer than 400nm",
      "550nm",
      "Shorter than 400nm",
      "Infinite"
    ],
    answer: "Shorter than 400nm",
    explanation: "The electromagnetic spectrum arranges waves by frequency and wavelength. Gamma rays reside at the high-frequency end, giving them extremely short, high-energy wavelengths far below the violet border threshold of 400nm."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1983, exam: "JAMB",
    question: "If the pressure on $1000\\,\\text{cm}^{3}$ of an ideal gas is doubled while its Kelvin temperature is halved, then the new volume of the gas will become",
    options: ["$25\\,\\text{cm}^{3}$", "$50\\,\\text{cm}^{3}$", "$1000\\,\\text{cm}^{3}$", "$200\\,\\text{cm}^{3}$", "$250\\,\\text{cm}^{3}$"],
    answer: "$250\\,\\text{cm}^{3}$",
    explanation: "Using the general ideal gas law: $P_{1}V_{1}/T_{1} = P_{2}V_{2}/T_{2}$. We are given $P_{2} = 2P_{1}$ and $T_{2} = 0.5T_{1}$. Rearranging to solve for $V_{2}$ gives $V_{2} = V_{1} \\times (P_{1}/P_{2}) \\times (T_{2}/T_{1}) = 1000 \\times (1/2) \\times (1/2) = 1000 / 4 = 250\\,\\text{cm}^{3}$."
  },
  {
subject: "Physics", topic: "Vectors & Mechanics", year: 1983, exam: "JAMB",
question: "A train has an initial velocity of $44\,\text{m/s}$ and an acceleration of $-4\,\text{m/s}^{2}$. Its velocity after 10 seconds is",
options: ["$2\,\text{m/s}$", "$4\,\text{m/s}$", "$8\,\text{m/s}$", "$12\,\text{m/s}$", "$16\,\text{m/s}$"],
answer: "$4\,\text{m/s}$",
explanation: "Using the linear kinematic motion equation: $v = u + at$. Substituting the initial constraints yields $v = 44\,\text{m/s} + (-4\,\text{m/s}^{2} \times 10\,\text{s}) = 44 - 40 = 4\,\text{m/s}$."
},
{
subject: "Physics", topic: "Vectors & Mechanics", year: 1983, exam: "JAMB",
question: "A man of mass 50kg ascends a flight of stairs 5m high in 5 seconds. If acceleration due to gravity is $10\,\text{m/s}^{-2}$, the power expended is",
options: ["100W", ["300W"], "250W", "400W", "500W"],
answer: "500W",
explanation: "Work done equals the gain in gravitational potential energy: $W = mgh = 50\,\text{kg} \times 10\,\text{m/s}^{2} \times 5\,\text{m} = 2500\,\text{J}$. Power is work split over time: $P = W/t = 2500\,\text{J} / 5\,\text{s} = 500\,\text{W}$."
},
{
subject: "Physics", topic: "Waves & Optics", year: 1983, exam: "JAMB",
question: "Which of the following arrangements in the sequence shown can be used to obtain a pure spectrum of white light?",
options: [
"Source, slit, converging lens, prism, converging lens, screen.",
"Source, slit, diverging lens, screen.",
"Source, converging lens, prism, diverging lens, screen.",
"Source, slit, prism, diverging lens, screen."
],
answer: "Source, slit, converging lens, prism, converging lens, screen.",
explanation: "To project a clean, non-overlapping pure spectrum, white light passes through a slit source and is parallel-aligned using a converging collimator lens. After the prism disperses the light rays, a second converging lens focuses each color wavelength cleanly onto a targeted screen plane."
},
{
subject: "Physics", topic: "Electricity & Magnetism", year: 1983, exam: "JAMB",
question: "It is usual to transmit electric power at high voltage and low current. Which of the following are possible advantages of the method?\nI. Heat losses are reduced because the currents are small.\nII. Thin wires can be used because small currents are flowing.\nIII. The power can flow faster because the voltage is high.",
options: ["I only", "I and II only", "II and III only", "I and III only", "I, II and III"],
answer: "I and II only",
explanation: "Transmission power line losses are governed by Joule heating ($P = I^{2}R$). Reducing the current flow ($I$) directly decreases energy lost to heat (I), allowing utility networks to run lighter, thinner transmission wires safely without overheating them (II). Voltage does not change wave travel speeds (III)."
},
{
subject: "Physics", topic: "Vectors & Mechanics", year: 1983, exam: "JAMB",
question: "A force of 16N is applied to a 4.0kg block that is at rest on a smooth horizontal surface. What is the velocity of the block at $t = 5$ seconds?",
options: ["$4\,\text{m/s}$", "$10\,\text{m/s}$", "$20\,\text{m/s}$", "$50\,\text{m/s}$", "$80\,\text{m/s}$"],
answer: "20\,\text{m/s}",
explanation: "First compute the uniform linear acceleration using Newton's second law: $a = F/m = 16\,\text{N} / 4.0\,\text{kg} = 4\,\text{m/s}^{2}$. Using the kinematic equation with initial velocity $u = 0$: $v = u + at = 0 + (4\,\text{m/s}^{2} \times 5\,\text{s}) = 20\,\text{m/s}$."
},
{
subject: "Physics", topic: "Sound & Waves", year: 1983, exam: "JAMB",
question: "Ripples on water are similar to light waves in that they both",
options: [
"Have the same wavelength",
"Are longitudinal",
"Cannot be reflected",
"Travel at the same speed",
"Can be refracted and diffracted."
],
answer: "Can be refracted and diffracted.",
explanation: "Water ripples are mechanical periodic waves, and light waves are electromagnetic waves. They run at completely different velocities and wavelengths, but because both are types of wave motion, they experience refraction and diffraction."
},
{
subject: "Physics", topic: "Hydrostatics & Fluids", year: 1983, exam: "JAMB",
question: "A piece of wood is floating on water. The forces acting on the wood are",
options: [
"Upthrust and reaction.",
"Weight and reaction",
"Weight and upthrust",
"Upthrust and viscosity",
"Weight and viscosity."
],
answer: "Weight and upthrust",
explanation: "A static object floating on water is in static equilibrium under two vertical forces: its downward gravitational weight ($W$) and an equal, opposing vertical upthrust force ($U$) from the displaced fluid, satisfying Archimedes' principle."
},
{
subject: "Physics", topic: "Sound & Waves", year: 1983, exam: "JAMB",
question: "Longitudinal waves do not exhibit",
options: ["Refraction", "Reflection", "Diffraction", "Polarization", "Rarefaction"],
answer: "Polarization",
explanation: "Polarization restricts wave vibrations to a single transverse plane, which means it can only happen with transverse waves. Longitudinal waves vibrate along their line of travel, so they cannot be polarized."
}
];
export default physicsJamb1983;
