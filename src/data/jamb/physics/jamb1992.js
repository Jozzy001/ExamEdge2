// JAMB 1992 Physics Past Questions
// Fully flattened — standalone objects with topics, answers, and detailed explanations.
// Strictly skipped questions containing complex geometric diagrams or custom data tables.
//
// MATH FORMAT: All mathematical content is written in LaTeX, wrapped in $...$ (inline).
// Render with KaTeX or MathJax. Backslashes are doubled (\\) because these are normal JS strings.
// (A single backslash is silently corrupted by JS: \t -> tab, \f -> form feed, \r -> carriage return.)

const physicsJamb1992 = [
  {
    subject: "Physics", topic: "Measurement & Units", year: 1992, exam: "JAMB",
    question: "What is the least possible error in using a rule graduated in centimetres?",
    options: ["$0.1\\ \\mathrm{cm}$", "$0.5\\ \\mathrm{cm}$", "$1.0\\ \\mathrm{cm}$", "$2.0\\ \\mathrm{cm}$"],
    answer: "$0.5\\ \\mathrm{cm}$",
    explanation: "The least possible error in a single reading is taken as half of the smallest graduation (the least count) of the instrument. For a rule graduated in centimetres, the least count is $1.0\\ \\mathrm{cm}$, so the least possible reading error is $0.5\\ \\mathrm{cm}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1992, exam: "JAMB",
    question: "Which of the following affects the period of a simple pendulum?\nI. Mass of the pendulum bob\nII. Length of the pendulum\nIII. Acceleration due to gravity.",
    options: ["I, II and III", "II and III only", "I and III only", "I and II only"],
    answer: "II and III only",
    explanation: "The period of a simple pendulum is $T = 2\\pi\\sqrt{\\dfrac{L}{g}}$, where $L$ is the length of the string and $g$ is the acceleration due to gravity. The mass of the bob does not appear in this relationship, so only II and III are correct."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1992, exam: "JAMB",
    question: "A boy sits in a train moving with uniform speed on a straight track. If from his outstretched palm he gently tosses a coin vertically upwards, the coin will fall",
    options: ["In front of his palm", "Behind his palm", "Beside his palm", "Into his palm"],
    answer: "Into his palm",
    explanation: "Because of inertia, the coin keeps the same uniform horizontal velocity as the train and the boy while it is in the air. Its horizontal position relative to the boy therefore does not change, and it drops straight back into his palm."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1992, exam: "JAMB",
    question: "A body starts from rest and moves with a uniform acceleration of $6\\ \\mathrm{m\\,s^{-2}}$. What distance does it cover in the third second?",
    options: ["$15\\ \\mathrm{m}$", "$18\\ \\mathrm{m}$", "$27\\ \\mathrm{m}$", "$30\\ \\mathrm{m}$"],
    answer: "$15\\ \\mathrm{m}$",
    explanation: "The distance covered in the $n$-th second is $s_n = u + \\tfrac{1}{2}a(2n - 1)$. For $u = 0$, $a = 6\\ \\mathrm{m\\,s^{-2}}$ and $n = 3$: $s_3 = 0 + \\tfrac{1}{2}(6)(2 \\times 3 - 1) = 3 \\times 5 = 15\\ \\mathrm{m}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1992, exam: "JAMB",
    question: "A stone Q is thrown with velocity $u$ at an angle of $75^\\circ$ to the horizontal. Another stone R is thrown with the same velocity $u$ but at an angle of $15^\\circ$ to the horizontal. The ranges covered by the stones will be",
    options: ["Greater for Q", "Greater for R", "The same for Q and R", "Greater for the heavier of the stones"],
    answer: "The same for Q and R",
    explanation: "The horizontal range of a projectile is $R = \\dfrac{u^2\\sin 2\\theta}{g}$. For stone Q, $\\sin(2 \\times 75^\\circ) = \\sin 150^\\circ = 0.5$. For stone R, $\\sin(2 \\times 15^\\circ) = \\sin 30^\\circ = 0.5$. Launch angles that sum to $90^\\circ$ (here $75^\\circ + 15^\\circ$) give the same range, so the ranges are equal."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1992, exam: "JAMB",
    question: "A man weighing $800\\ \\mathrm{N}$ climbs up a flight of stairs to a height of $15\\ \\mathrm{m}$ in $12.5\\ \\mathrm{s}$. What is the man's average power output?",
    options: ["$667\\ \\mathrm{W}$", "$810\\ \\mathrm{W}$", "$960\\ \\mathrm{W}$", "$15{,}000\\ \\mathrm{W}$"],
    answer: "$960\\ \\mathrm{W}$",
    explanation: "Work done against gravity $= Fh = 800 \\times 15 = 12{,}000\\ \\mathrm{J}$. Average power $= \\dfrac{W}{t} = \\dfrac{12{,}000}{12.5} = 960\\ \\mathrm{W}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1992, exam: "JAMB",
    question: "A machine requires $1000\\ \\mathrm{J}$ of work to raise a load of $500\\ \\mathrm{N}$ through a vertical distance of $1.5\\ \\mathrm{m}$. Calculate the efficiency of the machine.",
    options: ["$80\\%$", "$75\\%$", "$50\\%$", "$33\\%$"],
    answer: "$75\\%$",
    explanation: "Useful work output $= \\text{load} \\times \\text{distance} = 500 \\times 1.5 = 750\\ \\mathrm{J}$. Work input $= 1000\\ \\mathrm{J}$. Efficiency $\\eta = \\dfrac{\\text{work output}}{\\text{work input}} \\times 100\\% = \\dfrac{750}{1000} \\times 100\\% = 75\\%$."
  },
  {
    subject: "Physics", topic: "Properties of Matter", year: 1992, exam: "JAMB",
    question: "In an experiment to determine Young's Modulus for a wire, several loads are attached to the wire and the corresponding extensions measured. The tensile stress in each case depends on the",
    options: [
      "Load and the extension",
      "Load and the radius of the wire",
      "Radius of the wire and the extension",
      "Extension and the original length of the wire."
    ],
    answer: "Load and the radius of the wire",
    explanation: "Tensile stress is the force per unit cross-sectional area: $\\text{stress} = \\dfrac{F}{A}$. For a wire of circular cross-section, $A = \\pi r^2$, so stress depends on the load $F$ and the radius $r$ of the wire."
  },
  {
    subject: "Physics", topic: "Hydrostatics & Fluids", year: 1992, exam: "JAMB",
    question: "If a plastic sphere floats in water (density $= 1000\\ \\mathrm{kg\\,m^{-3}}$) with $0.5$ of its volume submerged and floats in an unknown oil with $0.4$ of its volume submerged, the density of the oil is",
    options: ["$800\\ \\mathrm{kg\\,m^{-3}}$", "$1200\\ \\mathrm{kg\\,m^{-3}}$", "$1250\\ \\mathrm{kg\\,m^{-3}}$", "$2000\\ \\mathrm{kg\\,m^{-3}}$"],
    answer: "$1250\\ \\mathrm{kg\\,m^{-3}}$",
    explanation: "By the law of flotation, the mass of the floating body equals the mass of fluid displaced, $M = V_{\\text{submerged}} \\times \\rho_{\\text{fluid}}$. For the same sphere of total volume $V$: $0.5V \\times 1000 = 0.4V \\times \\rho_{\\text{oil}}$. Cancelling $V$ gives $500 = 0.4\\rho_{\\text{oil}} \\Rightarrow \\rho_{\\text{oil}} = \\dfrac{500}{0.4} = 1250\\ \\mathrm{kg\\,m^{-3}}$."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1992, exam: "JAMB",
    question: "A platinum resistance thermometer wire has a resistance of $5\\ \\Omega$ at $0^\\circ\\mathrm{C}$ and $5.5\\ \\Omega$ at $100^\\circ\\mathrm{C}$. Calculate the temperature of the wire when its resistance is $5.2\\ \\Omega$.",
    options: ["$80^\\circ\\mathrm{C}$", "$60^\\circ\\mathrm{C}$", "$40^\\circ\\mathrm{C}$", "$10^\\circ\\mathrm{C}$"],
    answer: "$40^\\circ\\mathrm{C}$",
    explanation: "Using the linear scale for resistance thermometers: $\\theta = \\dfrac{R_\\theta - R_0}{R_{100} - R_0} \\times 100 = \\dfrac{5.2 - 5}{5.5 - 5} \\times 100 = \\dfrac{0.2}{0.5} \\times 100 = 40^\\circ\\mathrm{C}$."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1992, exam: "JAMB",
    question: "A bridge made of steel is $600\\ \\mathrm{m}$ long. What is the daily variation in its length if the night-time and day-time temperatures are $10^\\circ\\mathrm{C}$ and $35^\\circ\\mathrm{C}$ respectively? [The linear expansivity of steel is $1.2 \\times 10^{-5}\\ ^\\circ\\mathrm{C^{-1}}$]",
    options: ["$0.18\\ \\mathrm{cm}$", "$1.80\\ \\mathrm{cm}$", "$18.00\\ \\mathrm{cm}$", "$1800\\ \\mathrm{cm}$"],
    answer: "$18.00\\ \\mathrm{cm}$",
    explanation: "Thermal expansion is $\\Delta L = L_0\\alpha\\Delta T = 600 \\times (1.2 \\times 10^{-5}) \\times (35 - 10) = 0.18\\ \\mathrm{m}$. Converting to centimetres: $0.18 \\times 100 = 18.00\\ \\mathrm{cm}$."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1992, exam: "JAMB",
    question: "One of the most important applications of a bimetallic strip is found in the construction of",
    options: ["A thermostat", "An altimeter", "A thermocouple", "A hygrometer"],
    answer: "A thermostat",
    explanation: "A bimetallic strip is made of two metals with different linear expansivities joined together. When heated, the strip bends towards the metal that expands less. This bending is used to make or break electrical contacts in automatic switches such as thermostats."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1992, exam: "JAMB",
    question: "At constant pressure, the density of a fixed mass of gas is",
    options: ["Constant with temperature", "Proportional to its volume", "Inversely proportional to its absolute temperature", "Independent of its volume"],
    answer: "Inversely proportional to its absolute temperature",
    explanation: "By Charles's law at constant pressure, volume $V$ is directly proportional to absolute temperature $T$. For a fixed mass, density is $\\rho = \\dfrac{m}{V}$, so $\\rho \\propto \\dfrac{1}{T}$: the density is inversely proportional to the absolute temperature."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1992, exam: "JAMB",
    question: "How much heat is absorbed when a block of copper of mass $0.05\\ \\mathrm{kg}$ and specific heat capacity $390\\ \\mathrm{J\\,kg^{-1}\\,K^{-1}}$ is heated from $20^\\circ\\mathrm{C}$ to $70^\\circ\\mathrm{C}$?",
    options: ["$3.98 \\times 10^{-1}\\ \\mathrm{J}$", "$9.75 \\times 10^{2}\\ \\mathrm{J}$", "$3.98 \\times 10^{3}\\ \\mathrm{J}$", "$9.75 \\times 10^{3}\\ \\mathrm{J}$"],
    answer: "$9.75 \\times 10^{2}\\ \\mathrm{J}$",
    explanation: "Using $Q = mc\\Delta T = 0.05 \\times 390 \\times (70 - 20) = 0.05 \\times 390 \\times 50 = 975\\ \\mathrm{J} = 9.75 \\times 10^{2}\\ \\mathrm{J}$."
  },
  {
    subject: "Physics", topic: "Hydrostatics & Fluids", year: 1992, exam: "JAMB",
    question: "A block of ice floats on water inside a container. If the block of ice gets completely melted, the level of water in the container will",
    options: ["Increase", "Remain the same", "Decrease", "First decrease and then increase."],
    answer: "Remain the same",
    explanation: "By the law of flotation, the floating ice displaces water whose mass equals the mass of the ice. When the ice melts, it becomes water of the same mass, which occupies exactly the volume that was displaced. The water level therefore stays the same."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 1992, exam: "JAMB",
    question: "The equation of a travelling wave is given by $y = 0.005\\sin[\\pi(0.5x - 200t)]$, where $x$ and $y$ are in metres and $t$ is in seconds. What is the velocity of the wave?",
    options: ["$4000\\ \\mathrm{m\\,s^{-1}}$", "$400\\ \\mathrm{m\\,s^{-1}}$", "$250\\ \\mathrm{m\\,s^{-1}}$", "$40\\ \\mathrm{m\\,s^{-1}}$"],
    answer: "$400\\ \\mathrm{m\\,s^{-1}}$",
    explanation: "Expand the equation: $y = 0.005\\sin(0.5\\pi x - 200\\pi t)$. Comparing with $y = A\\sin(kx - \\omega t)$ gives wavenumber $k = 0.5\\pi$ and angular frequency $\\omega = 200\\pi$. The wave velocity is $v = \\dfrac{\\omega}{k} = \\dfrac{200\\pi}{0.5\\pi} = 400\\ \\mathrm{m\\,s^{-1}}$."
  },
  {
    subject: "Physics", topic: "Sound & Waves", year: 1992, exam: "JAMB",
    question: "Which of the following characteristics of a wave is used in the measurement of the depth of the sea?",
    options: ["Diffraction", "Interference", "Refraction", "Reflection"],
    answer: "Reflection",
    explanation: "Echo sounding (sonar) measures depth by sending a sound pulse down to the sea bed and timing how long the reflected echo takes to return."
  },
  {
    subject: "Physics", topic: "Sound & Waves", year: 1992, exam: "JAMB",
    question: "A musical note is the octave of another note if it has a",
    options: [
      "Frequency twice that of the first note",
      "Frequency half that of the first note",
      "The same frequency as the first one",
      "Frequency eight times that of the first note."
    ],
    answer: "Frequency twice that of the first note",
    explanation: "An octave is an interval in which the frequency is doubled or halved. A note is the (higher) octave of another if its frequency is exactly twice, $2f$, that of the first note."
  },
  {
    subject: "Physics", topic: "Sound & Waves", year: 1992, exam: "JAMB",
    question: "What is the frequency of the sound made by a siren having a disc with $32$ holes and making $25$ revolutions per second?",
    options: ["$80\\ \\mathrm{Hz}$", "$600\\ \\mathrm{Hz}$", "$800\\ \\mathrm{Hz}$", "$1600\\ \\mathrm{Hz}$"],
    answer: "$800\\ \\mathrm{Hz}$",
    explanation: "The frequency of a disc siren is the number of holes $N$ multiplied by the number of revolutions per second $n$: $f = Nn = 32 \\times 25 = 800\\ \\mathrm{Hz}$."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 1992, exam: "JAMB",
    question: "Which of the following properties make the convex mirror useful as a driving mirror?\nI. The image is real\nII. The image is erect\nIII. It has a wide field of view\nIV. The image is magnified",
    options: ["I, II and IV", "I, II and III", "II and III", "I and III."],
    answer: "II and III",
    explanation: "A convex mirror always forms a virtual, erect image (II). Because the surface curves outward, it collects light from a wide range of angles, giving a much wider field of view (III) than a plane or concave mirror. Its image is diminished, not magnified, and it is virtual, not real."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 1992, exam: "JAMB",
    question: "When an object is placed very close to the pole of a concave mirror, the virtual image obtained is",
    options: ["Diminished and upright", "Diminished and inverted", "Enlarged and inverted", "Enlarged and upright."],
    answer: "Enlarged and upright.",
    explanation: "When an object is placed inside the focal length of a concave mirror ($u < f$), the reflected rays diverge, and the image formed behind the mirror is virtual, upright (erect) and enlarged."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 1992, exam: "JAMB",
    question: "A concave mirror has a radius of curvature of $36\\ \\mathrm{cm}$. At what distance from the mirror should an object be placed to give a real image three times the size of the object?",
    options: ["$12\\ \\mathrm{cm}$", "$24\\ \\mathrm{cm}$", "$48\\ \\mathrm{cm}$", "$108\\ \\mathrm{cm}$"],
    answer: "$24\\ \\mathrm{cm}$",
    explanation: "Focal length $f = \\dfrac{r}{2} = \\dfrac{36}{2} = 18\\ \\mathrm{cm}$. For a real image, $m = \\dfrac{v}{u} = 3 \\Rightarrow v = 3u$. The mirror formula gives $\\dfrac{1}{f} = \\dfrac{1}{u} + \\dfrac{1}{v} \\Rightarrow \\dfrac{1}{18} = \\dfrac{1}{u} + \\dfrac{1}{3u} = \\dfrac{4}{3u}$. Cross-multiplying: $3u = 72 \\Rightarrow u = 24\\ \\mathrm{cm}$."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 1992, exam: "JAMB",
    question: "The speed of light in air is $3 \\times 10^{8}\\ \\mathrm{m\\,s^{-1}}$. What is its speed in glass with a refractive index of $1.50$?",
    options: ["$1.5 \\times 10^{8}\\ \\mathrm{m\\,s^{-1}}$", "$3.0 \\times 10^{8}\\ \\mathrm{m\\,s^{-1}}$", "$2.0 \\times 10^{8}\\ \\mathrm{m\\,s^{-1}}$", "$6.0 \\times 10^{8}\\ \\mathrm{m\\,s^{-1}}$"],
    answer: "$2.0 \\times 10^{8}\\ \\mathrm{m\\,s^{-1}}$",
    explanation: "The refractive index is $n = \\dfrac{c}{v}$, so the speed in glass is $v = \\dfrac{c}{n} = \\dfrac{3 \\times 10^{8}}{1.50} = 2.0 \\times 10^{8}\\ \\mathrm{m\\,s^{-1}}$."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 1992, exam: "JAMB",
    question: "If the refractive index of a medium relative to air is $2.0$, what is the critical angle for this medium?",
    options: ["$30^\\circ$", "$42^\\circ$", "$45^\\circ$", "$50^\\circ$"],
    answer: "$30^\\circ$",
    explanation: "The critical angle $c$ and refractive index $n$ are related by $\\sin c = \\dfrac{1}{n}$. For $n = 2.0$: $\\sin c = \\dfrac{1}{2} = 0.5 \\Rightarrow c = \\sin^{-1}(0.5) = 30^\\circ$."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 1992, exam: "JAMB",
    question: "Which of the following arrangements of the components of the electromagnetic spectrum is in ascending order of wavelengths?",
    options: [
      "Gamma rays, ultraviolet rays, X-rays, infra-red rays.",
      "Gamma rays, X-rays, ultraviolet rays, infra-red rays.",
      "Infra-red rays, ultraviolet rays, X-rays, gamma rays.",
      "Gamma rays, ultraviolet rays, infra-red rays, X-rays."
    ],
    answer: "Gamma rays, X-rays, ultraviolet rays, infra-red rays.",
    explanation: "Ascending wavelength corresponds to descending frequency. From the shortest wavelength to the longest, the order is: gamma rays $\\rightarrow$ X-rays $\\rightarrow$ ultraviolet rays $\\rightarrow$ infra-red rays."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 1992, exam: "JAMB",
    question: "Calculate the force acting on an electron of charge $1.6 \\times 10^{-19}\\ \\mathrm{C}$ placed in an electric field of intensity $10^{5}\\ \\mathrm{V\\,m^{-1}}$.",
    options: ["$1.6 \\times 10^{-11}\\ \\mathrm{N}$", "$1.6 \\times 10^{-14}\\ \\mathrm{N}$", "$1.6 \\times 10^{-16}\\ \\mathrm{N}$", "$1.0 \\times 10^{-16}\\ \\mathrm{N}$"],
    answer: "$1.6 \\times 10^{-14}\\ \\mathrm{N}$",
    explanation: "Electric field intensity is force per unit charge, $E = \\dfrac{F}{q}$, so $F = qE = 1.6 \\times 10^{-19} \\times 10^{5} = 1.6 \\times 10^{-14}\\ \\mathrm{N}$."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 1992, exam: "JAMB",
    question: "When an ebonite rod is rubbed with fur, it acquires",
    options: ["No charge at all", "A negative charge", "A positive charge", "Negative and positive charges."],
    answer: "A negative charge",
    explanation: "Fur holds its outer electrons less tightly than ebonite. When the two are rubbed together, electrons transfer from the fur to the ebonite rod, leaving the rod with an excess of electrons, i.e. a negative charge."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 1992, exam: "JAMB",
    question: "Which of the following factors has no effect on the e.m.f. of a primary cell?",
    options: ["Temperature", "Size of the cell", "Nature of the plates", "Nature of the electrolyte."],
    answer: "Size of the cell",
    explanation: "The e.m.f. of a cell is determined by the materials of its plates, its electrolyte, and the temperature. The size of the cell affects its internal resistance and how much current and charge it can deliver, but not its e.m.f."
  }
];

export default physicsJamb1992;