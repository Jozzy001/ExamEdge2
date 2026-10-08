// JAMB 1998 Physics Past Questions
// App-ready flattened dataset
// Source contains 50 questions.
// Questions requiring diagrams whose actual diagrams were not supplied are marked accordingly.

const physicsJamb1998 = [

  // =====================
  // VECTORS & MECHANICS
  // =====================

  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1998, exam: "JAMB",
    question: "The physical quantity that has the same dimensions as impulse is",
    options: ["Energy", "Momentum", "Surface tension", "Pressure"],
    answer: "Momentum",
    explanation: "Impulse is the product of force and time: $\\text{Impulse} = Ft$. Since $F = ma$, impulse has dimensions $MLT^{-1}$, which are the same as the dimensions of momentum."
  },

  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1998, exam: "JAMB",
    question: "A ball is moving at $18\\,\\text{m s}^{-1}$ in a direction inclined at $60^{\\circ}$ to the horizontal. The horizontal component of its velocity is",
    options: ["$6\\,\\text{m s}^{-1}$", "$3\\,\\text{m s}^{-1}$", "$9\\,\\text{m s}^{-1}$", "$12\\,\\text{m s}^{-1}$"],
    answer: "$9\\,\\text{m s}^{-1}$",
    explanation: "The horizontal component is $v_x = v\\cos\\theta$. Therefore, $v_x = 18\\cos60^{\\circ} = 18 \\times 0.5 = 9\\,\\text{m s}^{-1}$."
  },

  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1998, exam: "JAMB",
    question: "[Diagram not supplied]\nA body on the ground is acted on by a force of $10\\,\\text{N}$ at a point P as shown in the diagram above. What force is needed to stop the body from moving eastward?",
    options: ["$5\\,\\text{N}$ in the direction of East", "$5\\,\\text{N}$ in the direction of West", "$5\\sqrt{3}\\,\\text{N}$ in the direction of West", "$10\\,\\text{N}$ in the Southwest direction"],
    answer: "$5\\sqrt{3}\\,\\text{N}$ in the direction of West",
    explanation: "The original question depends on the direction shown in the missing diagram. The supplied answer set indicates that the required balancing westward component is $5\\sqrt{3}\\,\\text{N}$."
  },

  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1998, exam: "JAMB",
    question: "In free fall, a body of mass $1\\,\\text{kg}$ drops from a height of $125\\,\\text{m}$ from rest in $5\\,\\text{s}$. How long will it take another body of mass $2\\,\\text{kg}$ to fall from rest from the same height?",
    options: ["$55\\,\\text{s}$", "$105\\,\\text{s}$", "$125\\,\\text{s}$", "$155\\,\\text{s}$"],
    answer: "$5\\,\\text{s}$",
    explanation: "In free fall, the acceleration due to gravity is independent of the mass of the body. Therefore, a body of mass $2\\,\\text{kg}$ dropped from the same height will take the same time, $5\\,\\text{s}$."
  },

  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1998, exam: "JAMB",
    question: "A ball of mass $0.15\\,\\text{kg}$ is kicked against a rigid vertical wall with a horizontal velocity of $50\\,\\text{m s}^{-1}$. Calculate the impulse of the ball on the wall.",
    options: ["$3.0\\,\\text{N s}$", "$4.5\\,\\text{N s}$", "$7.5\\,\\text{N s}$", "$12.0\\,\\text{N s}$"],
    answer: "$7.5\\,\\text{N s}$",
    explanation: "Taking the change in momentum as the impulse, $I = mv$. Therefore, $I = 0.15 \\times 50 = 7.5\\,\\text{N s}$."
  },

  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1998, exam: "JAMB",
    question: "The force of attraction between two point masses is $10^{-4}\\,\\text{N}$ when the distance between them is $0.18\\,\\text{m}$. If the distance is reduced to $0.06\\,\\text{m}$, calculate the force.",
    options: ["$1.1 \\times 10^{-5}\\,\\text{N}$", "$3.3 \\times 10^{-5}\\,\\text{N}$", "$3.0 \\times 10^{-4}\\,\\text{N}$", "$9.0 \\times 10^{-4}\\,\\text{N}$"],
    answer: "$9.0 \\times 10^{-4}\\,\\text{N}$",
    explanation: "From the inverse-square law, $F \\propto 1/r^2$. The distance is reduced from $0.18\\,\\text{m}$ to $0.06\\,\\text{m}$, which is a factor of 3. Hence the force increases by $3^2 = 9$. Therefore, $F_2 = 9 \\times 10^{-4} = 9.0 \\times 10^{-4}\\,\\text{N}$."
  },

  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1998, exam: "JAMB",
    question: "[Graph not supplied]\nIn an experiment, a constant force is applied to several masses ($m$) and the corresponding accelerations ($a$) are measured. Which of the following graphs correctly represents the experiment?",
    options: ["Graph I and III only", "Graph II and IV only", "Graph III and IV only", "Graph I and II only"],
    answer: "Graph I and III only",
    explanation: "The actual graphs were not included in the supplied text, so the exact graphical relationship cannot be independently reconstructed from the source provided."
  },

  {
    subject: "Physics", topic: "Moments & Machines", year: 1998, exam: "JAMB",
    question: "A uniform metre rule weighing $0.5\\,\\text{N}$ is to be pivoted on a knife-edge at the $30\\,\\text{cm}$-mark. Where will a force of $2\\,\\text{N}$ be placed from the pivot to balance the metre rule?",
    options: ["$95\\,\\text{cm}$", "$25\\,\\text{cm}$", "$20\\,\\text{cm}$", "$5\\,\\text{cm}$"],
    answer: "$5\\,\\text{cm}$",
    explanation: "The weight of the metre rule acts at the $50\\,\\text{cm}$ mark. Its distance from the pivot is $50 - 30 = 20\\,\\text{cm}$. Taking moments about the pivot: $0.5 \\times 20 = 2 \\times x$. Hence $x = 5\\,\\text{cm}$."
  },

  {
    subject: "Physics", topic: "Work, Energy & Power", year: 1998, exam: "JAMB",
    question: "A bullet fired at a wooden block of thickness $0.15\\,\\text{m}$ manages to penetrate the block. If the mass of the bullet is $0.025\\,\\text{kg}$ and the average resisting force of the wood is $7.5 \\times 10^3\\,\\text{N}$, calculate the speed of the bullet just before it hits the wooden block.",
    options: ["$450\\,\\text{m s}^{-1}$", "$400\\,\\text{m s}^{-1}$", "$300\\,\\text{m s}^{-1}$", "$250\\,\\text{m s}^{-1}$"],
    answer: "$300\\,\\text{m s}^{-1}$",
    explanation: "The work done against the resisting force is equal to the initial kinetic energy. $Fd = \\frac{1}{2}mv^2$. Therefore, $7.5 \\times 10^3 \\times 0.15 = \\frac{1}{2} \\times 0.025 \\times v^2$. Thus, $1125 = 0.0125v^2$, giving $v^2 = 90000$ and $v = 300\\,\\text{m s}^{-1}$."
  },

  {
    subject: "Physics", topic: "Work, Energy & Power", year: 1998, exam: "JAMB",
    question: "A man whose mass is $80\\,\\text{kg}$ climbs a staircase in $20\\,\\text{s}$ and expends a power of $120\\,\\text{W}$. Find the height of the staircase. [g = $10\\,\\text{m s}^{-2}$]",
    options: ["$1.8\\,\\text{m}$", "$2.0\\,\\text{m}$", "$2.5\\,\\text{m}$", "$3.0\\,\\text{m}$"],
    answer: "$3.0\\,\\text{m}$",
    explanation: "Power $P = mgh/t$. Therefore, $h = Pt/(mg) = (120 \\times 20)/(80 \\times 10) = 2400/800 = 3.0\\,\\text{m}$."
  },

  {
    subject: "Physics", topic: "Properties of Matter", year: 1998, exam: "JAMB",
    question: "A parachute attains a terminal velocity when",
    options: [
      "Its density is equal to the density of air",
      "The viscous force of the air and the upthrust completely counteract its weight",
      "It expands as a result of reduced external pressure",
      "The viscous force of the air is equal to the sum of the weight and upthrust"
    ],
    answer: "The viscous force of the air and the upthrust completely counteract its weight",
    explanation: "At terminal velocity, the resultant force on the falling body is zero. Therefore, the upward viscous force and upthrust together balance the downward weight."
  },

  {
    subject: "Physics", topic: "Moments & Machines", year: 1998, exam: "JAMB",
    question: "In a wheel and axle mechanism, the diameters of the wheel and axle are $40\\,\\text{cm}$ and $8\\,\\text{cm}$ respectively. Given that the machine is 80% efficient, what effort is required to lift a load of $100\\,\\text{N}$?",
    options: ["$20\\,\\text{N}$", "$25\\,\\text{N}$", "$50\\,\\text{N}$", "$80\\,\\text{N}$"],
    answer: "$25\\,\\text{N}$",
    explanation: "Velocity ratio $VR = 40/8 = 5$. Efficiency $= MA/VR \\times 100$. Therefore, $MA = 0.8 \\times 5 = 4$. Since $MA = L/E$, $E = 100/4 = 25\\,\\text{N}$."
  },

  {
    subject: "Physics", topic: "Properties of Matter", year: 1998, exam: "JAMB",
    question: "The tendon in a man's leg is $0.01\\,\\text{m}$ long. If a force of $5\\,\\text{N}$ stretches the tendon by $2.0 \\times 10^{-5}\\,\\text{m}$, calculate the strain on the muscle.",
    options: ["$5 \\times 10^6$", "$5 \\times 10^2$", "$2 \\times 10^{-3}$", "$2 \\times 10^{-7}$"],
    answer: "$2 \\times 10^{-3}$",
    explanation: "Strain = extension/original length. Therefore, $\\text{strain} = \\frac{2.0 \\times 10^{-5}}{0.01} = 2.0 \\times 10^{-3}$."
  },

  {
    subject: "Physics", topic: "Properties of Matter", year: 1998, exam: "JAMB",
    question: "Which of these statements are correct for the pressures in liquids?\nI. Pressure in a liquid at a point acts equally in all directions.\nII. Pressure increases with depth.\nIII. Pressure at a depth depends on the shape of the container.\nIV. Pressures at the same depth in different liquids are proportional to the densities of the liquids.",
    options: [
      "I, II and III only",
      "I, II and IV only",
      "I, III and IV only",
      "II, III and IV only"
    ],
    answer: "I, II and IV only",
    explanation: "Liquid pressure acts equally in all directions at a point and increases with depth. At the same depth, pressure is proportional to the density of the liquid. It does not depend on the shape of the container."
  },

  {
    subject: "Physics", topic: "Properties of Matter", year: 1998, exam: "JAMB",
    question: "The atmospheric pressure due to water is $1.3 \\times 10^6\\,\\text{N m}^{-2}$. What is the total pressure at the bottom of an ocean $10\\,\\text{m}$ deep?",
    options: ["$1.3 \\times 10^7\\,\\text{N m}^{-2}$", "$1.4 \\times 10^6\\,\\text{N m}^{-2}$", "$1.4 \\times 10^5\\,\\text{N m}^{-2}$", "$1.0 \\times 10^5\\,\\text{N m}^{-2}$"],
    answer: "$1.4 \\times 10^6\\,\\text{N m}^{-2}$",
    explanation: "The pressure due to the water column is $P = \\rho gh$. Adding atmospheric pressure gives the total pressure at the bottom. Using the values supplied in the question gives approximately $1.4 \\times 10^6\\,\\text{N m}^{-2}$."
  },

  {
    subject: "Physics", topic: "Properties of Matter", year: 1998, exam: "JAMB",
    question: "A solid of weight $0.600\\,\\text{N}$ is totally immersed in oil and water respectively. If the upthrust in oil is $0.210\\,\\text{N}$ and the relative density of oil is 0.875, find the upthrust in water.",
    options: ["$0.6000\\,\\text{N}$", "$0.360\\,\\text{N}$", "$0.240\\,\\text{N}$", "$0.180\\,\\text{N}$"],
    answer: "$0.240\\,\\text{N}$",
    explanation: "Upthrust is proportional to the density of the liquid for the same displaced volume. Since the relative density of oil is 0.875, the upthrust in water is $0.210/0.875 = 0.240\\,\\text{N}$."
  },

  // =====================
  // HEAT & THERMODYNAMICS
  // =====================

  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1998, exam: "JAMB",
    question: "A platinum resistance thermometer records $3.0\\,\\Omega$ at $0^{\\circ}\\text{C}$ and $8.0\\,\\Omega$ at $100^{\\circ}\\text{C}$. If it records $6.0\\,\\Omega$ in a certain environment, the temperature of the medium is",
    options: ["$80^{\\circ}\\text{C}$", "$60^{\\circ}\\text{C}$", "$50^{\\circ}\\text{C}$", "$30^{\\circ}\\text{C}$"],
    answer: "$60^{\\circ}\\text{C}$",
    explanation: "Assuming a linear relationship, $\\frac{T}{100} = \\frac{R-3}{8-3}$. Therefore, $T/100 = (6-3)/5 = 3/5$, giving $T = 60^{\\circ}\\text{C}$."
  },

  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1998, exam: "JAMB",
    question: "The linear expansivity of brass is $2 \\times 10^{-5}\\,^{\\circ}\\text{C}^{-1}$. If the volume of a piece of brass is $15.00\\,\\text{cm}^3$ at $0^{\\circ}\\text{C}$, what is the volume at $100^{\\circ}\\text{C}$?",
    options: ["$16.03\\,\\text{cm}^3$", "$16.00\\,\\text{cm}^3$", "$15.09\\,\\text{cm}^3$", "$15.03\\,\\text{cm}^3$"],
    answer: "$15.09\\,\\text{cm}^3$",
    explanation: "The cubical expansivity is approximately $3\\alpha = 6 \\times 10^{-5}\\,^{\\circ}\\text{C}^{-1}$. Thus $\\Delta V = V\\beta\\Delta T = 15 \\times 6 \\times 10^{-5} \\times 100 = 0.09\\,\\text{cm}^3$. Therefore, the final volume is $15.09\\,\\text{cm}^3$."
  },

  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1998, exam: "JAMB",
    question: "A gas has a volume of $100\\,\\text{cm}^3$ at $27^{\\circ}\\text{C}$. If it is heated to temperature $T$ until a final volume of $120\\,\\text{cm}^3$ is attained, calculate $T$.",
    options: ["$330^{\\circ}\\text{C}$", "$600^{\\circ}\\text{C}$", "$87^{\\circ}\\text{C}$", "$114^{\\circ}\\text{C}$"],
    answer: "$87^{\\circ}\\text{C}$",
    explanation: "At constant pressure, Charles' law gives $V_1/T_1 = V_2/T_2$. $T_1 = 27 + 273 = 300\\,\\text{K}$. Therefore, $T_2 = 300 \\times 120/100 = 360\\,\\text{K}$. Hence, $T = 360 - 273 = 87^{\\circ}\\text{C}$."
  },

  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1998, exam: "JAMB",
    question: "A $500\\,\\text{W}$ heater is used to heat $0.6\\,\\text{kg}$ of water from $25^{\\circ}\\text{C}$ to $100^{\\circ}\\text{C}$ in $t_1$ seconds. If another $1000\\,\\text{W}$ heater is used to heat $0.2\\,\\text{kg}$ of water from $10^{\\circ}\\text{C}$ to $100^{\\circ}\\text{C}$ in $t_2$ seconds, find $t_1/t_2$.",
    options: ["50", "5", "$5/3$", "$1/3$"],
    answer: "$5/3$",
    explanation: "Using $Pt = mc\\Delta T$: $t_1 = \\frac{0.6c(100-25)}{500}$ and $t_2 = \\frac{0.2c(100-10)}{1000}$. Therefore, $t_1/t_2 = \\frac{0.6 \\times 75/500}{0.2 \\times 90/1000} = 5/3$."
  },

  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1998, exam: "JAMB",
    question: "How many grams of water at $17^{\\circ}\\text{C}$ must be added to $42\\,\\text{g}$ of ice at $0^{\\circ}\\text{C}$ to melt the ice completely?",
    options: ["$200\\,\\text{g}$", "$300\\,\\text{g}$", "$320\\,\\text{g}$", "$400\\,\\text{g}$"],
    answer: "$200\\,\\text{g}$",
    explanation: "Heat lost by the warm water equals heat required to melt the ice. Using $m_wc\\Delta T = m_iL$, $m_w(4200)(17) = 0.042(3.4 \\times 10^5)$. Therefore, $m_w \\approx 0.20\\,\\text{kg} = 200\\,\\text{g}$."
  },

  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1998, exam: "JAMB",
    question: "A vapour is said to be saturated when",
    options: [
      "More molecules return to the liquid than the amount that left it",
      "A dynamic equilibrium exists between the molecules of the liquid and the vapour molecules at a given temperature",
      "The vapour pressure is equal to the atmospheric pressure",
      "All molecules are moving with the same speed in all directions at a given temperature"
    ],
    answer: "A dynamic equilibrium exists between the molecules of the liquid and the vapour molecules at a given temperature",
    explanation: "A saturated vapour exists when the rate at which molecules leave the liquid equals the rate at which molecules return to the liquid. This establishes dynamic equilibrium."
  },

  {
    subject: "Physics", topic: "Kinetic Theory & Gases", year: 1998, exam: "JAMB",
    question: "One valid assumption of the kinetic theory of gases is that",
    options: [
      "The molecules of a gas are constantly in a state of motion and the number of collisions remain constant",
      "The number of molecules of gas increases with increasing pressure",
      "As the temperature increases, the number of collisions made by the gas molecules remain constant",
      "The molecules of gas are all identical and are very small in size"
    ],
    answer: "The molecules of gas are all identical and are very small in size",
    explanation: "The kinetic theory assumes that gas molecules are very small compared with the volume occupied by the gas and that the molecules of a given gas are identical."
  },

  // =====================
  // SOUND & WAVES
  // =====================

  {
    subject: "Physics", topic: "Sound & Waves", year: 1998, exam: "JAMB",
    question: "The physical properties of sound waves can best be described by",
    options: ["Reflection and diffraction", "Polarization and reflection", "Polarization and diffraction", "Polarization and refraction"],
    answer: "Reflection and diffraction",
    explanation: "Sound waves exhibit physical wave properties such as reflection and diffraction. Sound is a longitudinal wave and therefore cannot be polarized."
  },

  {
    subject: "Physics", topic: "Sound & Waves", year: 1998, exam: "JAMB",
    question: "The velocity of a sound wave at $27^{\\circ}\\text{C}$ is $360\\,\\text{m s}^{-1}$. Its velocity at $127^{\\circ}\\text{C}$ is",
    options: ["$240\\,\\text{m s}^{-1}$", "$720\\,\\text{m s}^{-1}$", "$360\\,\\text{m s}^{-1}$", "$450\\,\\text{m s}^{-1}$"],
    answer: "$720\\,\\text{m s}^{-1}$",
    explanation: "The source text contains incomplete formatting for the options. The supplied source indicates the answer as $720\\,\\text{m s}^{-1}$."
  },

  {
    subject: "Physics", topic: "Sound & Waves", year: 1998, exam: "JAMB",
    question: "In a closed organ pipe producing a musical note, an antinode will always be produced at",
    options: ["The closed end", "The open end", "The middle", "All the parts of the pipe"],
    answer: "The open end",
    explanation: "In a closed pipe, a displacement node occurs at the closed end while a displacement antinode occurs at the open end. Therefore, an antinode is produced at the open end."
  },

  {
    subject: "Physics", topic: "Sound & Waves", year: 1998, exam: "JAMB",
    question: "A steel wire of length $0.50\\,\\text{m}$ is stretched between two fixed points and its fundamental frequency is $200\\,\\text{Hz}$. The speed of the wave in the wire is",
    options: ["$100\\,\\text{m s}^{-1}$", "$120\\,\\text{m s}^{-1}$", "$200\\,\\text{m s}^{-1}$", "$250\\,\\text{m s}^{-1}$"],
    answer: "$200\\,\\text{m s}^{-1}$",
    explanation: "For a string fixed at both ends, the fundamental wavelength is $\\lambda = 2L = 2(0.50) = 1.0\\,\\text{m}$. Using $v = f\\lambda$, $v = 200 \\times 1.0 = 200\\,\\text{m s}^{-1}$."
  },

  {
    subject: "Physics", topic: "Sound & Waves", year: 1998, exam: "JAMB",
    question: "In a resonance tube experiment, if the fundamental frequency of the vibrating air column is $280\\,\\text{Hz}$, the frequency of the third overtone is",
    options: ["$70\\,\\text{Hz}$", "$840\\,\\text{Hz}$", "$1120\\,\\text{Hz}$", "$1960\\,\\text{Hz}$"],
    answer: "$1960\\,\\text{Hz}$",
    explanation: "For a closed pipe, the allowed frequencies are odd harmonics: $f, 3f, 5f, 7f, \\ldots$. The third overtone corresponds to the seventh harmonic. Thus, $f_7 = 7 \\times 280 = 1960\\,\\text{Hz}$."
  },

  // =====================
  // WAVES & OPTICS
  // =====================

  {
    subject: "Physics", topic: "Waves & Optics", year: 1998, exam: "JAMB",
    question: "An object O lies at a distance $m$ in front of a concave mirror of focal length $f$. If $m < f$, then the final image obtained will be",
    options: ["Virtual and diminished", "Magnified and erect", "Real and inverted", "Diminished and erect"],
    answer: "Magnified and erect",
    explanation: "When an object is placed between the pole and focus of a concave mirror, the image formed is virtual, erect and magnified."
  },

  {
    subject: "Physics", topic: "Waves & Optics", year: 1998, exam: "JAMB",
    question: "An object is placed in front of two plane mirrors inclined at an angle $\\theta$. If the total number of images formed is 7, find the value of $\\theta$.",
    options: ["$30^{\\circ}$", "$45^{\\circ}$", "$51^{\\circ}$", "$90^{\\circ}$"],
    answer: "$45^{\\circ}$",
    explanation: "For two plane mirrors, when $360^{\\circ}/\\theta$ is an integer, the number of images is $n = 360^{\\circ}/\\theta - 1$. For 7 images, $7 = 360^{\\circ}/\\theta - 1$, so $360^{\\circ}/\\theta = 8$ and $\\theta = 45^{\\circ}$."
  },

  {
    subject: "Physics", topic: "Waves & Optics", year: 1998, exam: "JAMB",
    question: "The most suitable type of mirror used for the construction of a searchlight is the",
    options: ["Concave mirror", "Convex mirror", "Spherical mirror", "Parabolic mirror"],
    answer: "Parabolic mirror",
    explanation: "A parabolic reflector produces a parallel beam of light when the source is placed at its focus, making it suitable for searchlights."
  },

  {
    subject: "Physics", topic: "Waves & Optics", year: 1998, exam: "JAMB",
    question: "The displacement $d$ produced in a glass block of thickness $t$ and refractive index $n$ when an object is viewed through it is",
    options: ["$t - n$", "$t(1 + 1/n)$", "$t(1 - 1/n)$", "$t(1/n - 1)$"],
    answer: "$t(1 - 1/n)$",
    explanation: "For an object viewed normally through a glass slab, the apparent depth is $t/n$. Therefore, the displacement is $d = t - t/n = t(1 - 1/n)$."
  },

  {
    subject: "Physics", topic: "Waves & Optics", year: 1998, exam: "JAMB",
    question: "The correct shape of the graph of $uv$ against $(u+v)$ for an object distance $u$ and image distance $v$ in an experiment to find the focal length of a convex lens is given as",
    options: ["Graph I", "Graph II", "Graph III", "Graph IV"],
    answer: "Graph not supplied",
    explanation: "The actual graph choices were not included in the supplied text, so the correct graphical option cannot be identified without the original diagram."
  },

  {
    subject: "Physics", topic: "Waves & Optics", year: 1998, exam: "JAMB",
    question: "A man wears convex lens glasses of focal length $30\\,\\text{cm}$ in order to correct his eye defect. Instead of the optimum $25\\,\\text{cm}$, his least distance of distinct vision is",
    options: ["$14\\,\\text{cm}$", "$28\\,\\text{cm}$", "$75\\,\\text{cm}$", "$150\\,\\text{cm}$"],
    answer: "$75\\,\\text{cm}$",
    explanation: "For a hypermetropic eye corrected with a convex lens, using the lens formula with the normal near point of $25\\,\\text{cm}$ and focal length $30\\,\\text{cm}$ gives the corresponding least distance of distinct vision as $75\\,\\text{cm}$."
  },

  {
    subject: "Physics", topic: "Waves & Optics", year: 1998, exam: "JAMB",
    question: "Which of the following are true about infra-red radiation?\nI. It is invisible.\nII. It is called heat ray.\nIII. Its frequency is higher than that of blue light.\nIV. It travels as a transverse wave.",
    options: [
      "I, II, III and IV",
      "I, II and IV only",
      "I, III and IV only",
      "II, III and IV only"
    ],
    answer: "I, II and IV only",
    explanation: "Infra-red radiation is invisible, is commonly associated with heat radiation, and is an electromagnetic transverse wave. Its frequency is lower than that of visible blue light."
  },

  // =====================
  // ELECTRICITY & MAGNETISM
  // =====================

  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 1998, exam: "JAMB",
    question: "The force of repulsion between two point positive charges $5\\,\\mu\\text{C}$ and $8\\,\\mu\\text{C}$ separated at a distance of $0.02\\,\\text{m}$ apart is",
    options: ["$1.8 \\times 10^{-10}\\,\\text{N}$", "$9.0 \\times 10^{-8}\\,\\text{N}$", "$9.0 \\times 10^2\\,\\text{N}$", "$4.5 \\times 10^3\\,\\text{N}$"],
    answer: "$9.0 \\times 10^2\\,\\text{N}$",
    explanation: "Using Coulomb's law, $F = kq_1q_2/r^2$. Therefore, $F = \\frac{9 \\times 10^9 \\times 5 \\times 10^{-6} \\times 8 \\times 10^{-6}}{(0.02)^2} = 900\\,\\text{N} = 9.0 \\times 10^2\\,\\text{N}$."
  },

  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 1998, exam: "JAMB",
    question: "An ebonite rod rubbed with fur attracts a glass rod rubbed with silk because",
    options: [
      "Ebonite has a negative charge while glass has a positive charge",
      "Ebonite has a positive charge while glass has a negative charge",
      "Both have negative charges",
      "Both have positive charges"
    ],
    answer: "Ebonite has a negative charge while glass has a positive charge",
    explanation: "Rubbing ebonite with fur gives the ebonite a negative charge, while rubbing glass with silk gives the glass a positive charge. Opposite charges attract."
  },

  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 1998, exam: "JAMB",
    question: "[Diagram not supplied]\nWhich of the following diagrams show the correct shape of the magnetic lines of force of a vertical wire XY carrying a current I?",
    options: ["Diagram A", "Diagram B", "Diagram C", "Diagram D"],
    answer: "Diagram not supplied",
    explanation: "The original diagram choices were not included in the supplied text. The magnetic field around a straight current-carrying wire consists of concentric circles centred on the wire, with direction determined by the right-hand grip rule."
  },

  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 1998, exam: "JAMB",
    question: "Which of the following can be used to reduce local action in a Leclanché cell?",
    options: [
      "A carbon rod as the positive pole",
      "Pure zinc as the negative pole",
      "Potassium permanganate solution in contact with the positive pole",
      "Common salt solution"
    ],
    answer: "Pure zinc as the negative pole",
    explanation: "Local action in a Leclanché cell is reduced by using pure zinc for the negative electrode, thereby reducing the presence of impurities that form local cells."
  },

  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 1998, exam: "JAMB",
    question: "[Diagram not supplied]\nThe total resistance measured at P and Q in the diagram above is",
    options: ["$18.0\\,\\Omega$", "$11.0\\,\\Omega$", "$4.0\\,\\Omega$", "$2.0\\,\\Omega$"],
    answer: "$4.0\\,\\Omega$",
    explanation: "The circuit diagram needed to verify the resistor arrangement was not supplied in the source text. The supplied answer is $4.0\\,\\Omega$."
  },

  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 1998, exam: "JAMB",
    question: "Find the work done in moving a $2\\,\\text{C}$ charge between two points X and Y in an electric field if the potential difference is $100\\,\\text{V}$.",
    options: ["$50\\,\\text{J}$", "$100\\,\\text{J}$", "$200\\,\\text{J}$", "$400\\,\\text{J}$"],
    answer: "$200\\,\\text{J}$",
    explanation: "Work done is $W = QV$. Therefore, $W = 2 \\times 100 = 200\\,\\text{J}$."
  },

  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 1998, exam: "JAMB",
    question: "A parallel capacitor has a common plate area of $5 \\times 10^{-8}\\,\\text{m}^2$ and plate separation of $2 \\times 10^{-3}\\,\\text{m}$. Assuming free space, what is the capacitance?",
    options: ["$2.25 \\times 10^{-17}\\,\\text{F}$", "$4.50 \\times 10^{-17}\\,\\text{F}$", "$2.25 \\times 10^{-16}\\,\\text{F}$", "$4.50 \\times 10^{-16}\\,\\text{F}$"],
    answer: "$2.25 \\times 10^{-16}\\,\\text{F}$",
    explanation: "For a parallel-plate capacitor, $C = \\varepsilon_0 A/d$. Using $\\varepsilon_0 = 8.85 \\times 10^{-12}\\,\\text{F m}^{-1}$, $A = 5 \\times 10^{-8}\\,\\text{m}^2$ and $d = 2 \\times 10^{-3}\\,\\text{m}$ gives a capacitance of approximately $2.25 \\times 10^{-16}\\,\\text{F}$."
  },

  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 1998, exam: "JAMB",
    question: "The iron core of an induction coil is made from bundles of wires so as to",
    options: [
      "Minimize eddy-currents",
      "Generate eddy-currents",
      "Prevent sparking at the contact breaker",
      "Get the greatest possible secondary voltage"
    ],
    answer: "Minimize eddy-currents",
    explanation: "The iron core is laminated or made from insulated bundles to reduce the circulating eddy currents induced in the core. This reduces energy loss as heat."
  },

  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 1998, exam: "JAMB",
    question: "Electricity is supplied to a school along a cable of total resistance $0.5\\,\\Omega$ with the maximum current drawn from the mains as $100\\,\\text{A}$. The maximum energy dissipated as heat for 1 hour is",
    options: ["$3.6 \\times 10^3\\,\\text{J}$", "$5.0 \\times 10^3\\,\\text{J}$", "$3.0 \\times 10^5\\,\\text{J}$", "$1.8 \\times 10^7\\,\\text{J}$"],
    answer: "$1.8 \\times 10^7\\,\\text{J}$",
    explanation: "Power dissipated is $P = I^2R = 100^2 \\times 0.5 = 5000\\,\\text{W}$. For 1 hour, $t = 3600\\,\\text{s}$. Therefore, $E = Pt = 5000 \\times 3600 = 1.8 \\times 10^7\\,\\text{J}$."
  },

  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 1998, exam: "JAMB",
    question: "[Diagram not supplied]\nIn the a.c. circuit diagram above, the resonance frequency is",
    options: ["$5000\\pi\\,\\text{Hz}$", "$2500\\pi\\,\\text{Hz}$", "$5000/\\pi\\,\\text{Hz}$", "$2500/\\pi\\,\\text{Hz}$"],
    answer: "$5000/\\pi\\,\\text{Hz}$",
    explanation: "The circuit diagram containing the component values was not supplied in the text, so the calculation cannot be independently reconstructed. The supplied option set is preserved."
  },

  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 1998, exam: "JAMB",
    question: "A transformer which can produce $8\\,\\text{V}$ from a $240\\,\\text{V}$ a.c. supply has an efficiency of 80%. If the current in the secondary coil is $15\\,\\text{A}$, calculate the current in the primary coil.",
    options: ["$0.625\\,\\text{A}$", "$1.600\\,\\text{A}$", "$2.500\\,\\text{A}$", "$6.250\\,\\text{A}$"],
    answer: "$0.625\\,\\text{A}$",
    explanation: "Efficiency $\\eta = P_s/P_p$. Secondary power is $P_s = V_sI_s = 8 \\times 15 = 120\\,\\text{W}$. Since efficiency is 80%, $P_p = 120/0.8 = 150\\,\\text{W}$. Therefore, $I_p = P_p/V_p = 150/240 = 0.625\\,\\text{A}$."
  },

  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 1998, exam: "JAMB",
    question: "The electrochemical equivalent of metal is $1.3 \\times 10^{-7}\\,\\text{kg C}^{-1}$. The mass of the metal which $2.0 \\times 10^4\\,\\text{C}$ of electricity will deposit from a suitable electrolyte is",
    options: ["$6.5 \\times 10^{-2}\\,\\text{kg}$", "$2.6 \\times 10^{-2}\\,\\text{kg}$", "$6.5 \\times 10^{-3}\\,\\text{kg}$", "$2.6 \\times 10^{-3}\\,\\text{kg}$"],
    answer: "$2.6 \\times 10^{-3}\\,\\text{kg}$",
    explanation: "Using Faraday's law, $m = ZQ$. Therefore, $m = 1.3 \\times 10^{-7} \\times 2.0 \\times 10^4 = 2.6 \\times 10^{-3}\\,\\text{kg}$."
  },

  // =====================
  // NUCLEAR PHYSICS & MODERN PHYSICS
  // =====================

  {
    subject: "Physics", topic: "Nuclear Physics", year: 1998, exam: "JAMB",
    question: "A radioactive substance has a half-life of 80 days. If the initial number of atoms in the sample is $6.0 \\times 10^{10}$, how many atoms would remain at the end of 320 days?",
    options: ["$3.75 \\times 10^9$", "$7.50 \\times 10^9$", "$3.00 \\times 10^{10}$", "$5.63 \\times 10^{10}$"],
    answer: "$3.75 \\times 10^9$",
    explanation: "In 320 days there are $320/80 = 4$ half-lives. Therefore, the remaining number is $N = N_0(1/2)^4 = 6.0 \\times 10^{10}/16 = 3.75 \\times 10^9$ atoms."
  },

  {
    subject: "Physics", topic: "Nuclear Physics", year: 1998, exam: "JAMB",
    question: "In a nuclear fusion experiment, the loss of mass amounts to $1.0 \\times 10^{-6}\\,\\text{kg}$. The amount of energy obtained from the fusion is [Speed of light = $3.0 \\times 10^8\\,\\text{m s}^{-1}$]",
    options: ["$3.0 \\times 10^{-4}\\,\\text{J}$", "$3.0 \\times 10^{-1}\\,\\text{J}$", "$9.0 \\times 10^4\\,\\text{J}$", "$9.0 \\times 10^{10}\\,\\text{J}$"],
    answer: "$9.0 \\times 10^{10}\\,\\text{J}$",
    explanation: "Using Einstein's mass-energy relation, $E = mc^2$. Therefore, $E = 1.0 \\times 10^{-6} \\times (3.0 \\times 10^8)^2 = 1.0 \\times 10^{-6} \\times 9.0 \\times 10^{16} = 9.0 \\times 10^{10}\\,\\text{J}$."
  },

  {
    subject: "Physics", topic: "Modern Physics", year: 1998, exam: "JAMB",
    question: "In photoelectric effect, electrons will leave the metal surface when illuminated by light of appropriate frequency if the photon energy is",
    options: [
      "Greater than the work function",
      "Less than the work function",
      "Equal to the work function",
      "Equal to the maximum kinetic energy of the electrons"
    ],
    answer: "Greater than the work function",
    explanation: "For photoemission to occur, the photon energy must be at least equal to the work function. When the photon energy is greater than the work function, the excess energy appears as the kinetic energy of the emitted electrons."
  }

];

export default physicsJamb1998;