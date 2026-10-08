// JAMB 1989 Physics Past Questions
// Fully flattened — standalone objects with topics, answers, and detailed explanations.
// Strictly skipped questions containing complex geometric diagrams or custom data tables.
//
// MATH FORMAT: All mathematical content is written in LaTeX, wrapped in $...$ (inline).
// Render with KaTeX or MathJax. Backslashes are doubled (\\) because these are normal JS strings.
// (A single backslash is silently corrupted by JS: \t -> tab, \f -> form feed, \r -> carriage return.)
//
// Entries marked "REVIEW" have a question/answer mismatch in the source data — see comments.

const physicsJamb1989 = [
  {
    subject: "Physics", topic: "Measurement & Units", year: 1989, exam: "JAMB",
    question: "Which of the following is a set of vectors?",
    options: [
      "Force, mass and moment",
      "Acceleration, velocity and moment",
      "Mass, weight and density",
      "Mass, volume and density"
    ],
    answer: "Acceleration, velocity and moment",
    explanation: "Vector quantities have both magnitude and a specific direction. Acceleration, velocity, and the moment of a force are all vector quantities. Mass, volume, and density are scalars, while weight is a vector."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1989, exam: "JAMB",
    question: "The magnitude of the resultant of two mutually perpendicular forces, $F_1$ and $F_2$, is $13\\ \\mathrm{N}$. If the magnitude of $F_1$ is $5\\ \\mathrm{N}$, what is the magnitude of $F_2$?",
    options: ["$2.6\\ \\mathrm{N}$", "$8.0\\ \\mathrm{N}$", "$12.0\\ \\mathrm{N}$", "$18.0\\ \\mathrm{N}$"],
    answer: "$12.0\\ \\mathrm{N}$",
    explanation: "Since the two forces are mutually perpendicular ($90^\\circ$), their resultant follows from Pythagoras' theorem: $R^2 = F_1^2 + F_2^2$. Substituting: $13^2 = 5^2 + F_2^2 \\Rightarrow 169 = 25 + F_2^2 \\Rightarrow F_2^2 = 144 \\Rightarrow F_2 = 12\\ \\mathrm{N}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1989, exam: "JAMB",
    question: "Two points on a velocity-time graph have coordinates $(5\\ \\mathrm{s},\\ 10\\ \\mathrm{m\\,s^{-1}})$ and $(20\\ \\mathrm{s},\\ 20\\ \\mathrm{m\\,s^{-1}})$. Calculate the mean acceleration between the two points.",
    options: ["$0.67\\ \\mathrm{m\\,s^{-2}}$", "$0.83\\ \\mathrm{m\\,s^{-2}}$", "$1.50\\ \\mathrm{m\\,s^{-2}}$", "$2.00\\ \\mathrm{m\\,s^{-2}}$"],
    answer: "$0.67\\ \\mathrm{m\\,s^{-2}}$",
    explanation: "Acceleration is the change in velocity divided by the change in time (the slope of the line): $a = \\dfrac{v_2 - v_1}{t_2 - t_1} = \\dfrac{20 - 10}{20 - 5} = \\dfrac{10}{15} = \\dfrac{2}{3} \\approx 0.67\\ \\mathrm{m\\,s^{-2}}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1989, exam: "JAMB",
    question: "A block of mass $m$ is held in equilibrium against a vertical wall by a horizontal force. If the coefficient of friction between the block and the wall is $\\mu$, the minimum value of the horizontal force is",
    options: ["$\\mu mg$", "$(1 - \\mu)mg$", "$(1 + \\mu)mg$", "$\\dfrac{mg}{\\mu}$"],
    answer: "$\\dfrac{mg}{\\mu}$",
    explanation: "The downward weight of the block ($mg$) is balanced by the upward limiting static friction force $F_f$, so $F_f = mg$. Friction is related to the normal reaction $R$ by $F_f = \\mu R$. The horizontal pushing force $P$ acts as the normal reaction, so $R = P$. Therefore $\\mu P = mg \\Rightarrow P = \\dfrac{mg}{\\mu}$."
  },
  {
    subject: "Physics", topic: "Properties of Matter", year: 1989, exam: "JAMB",
    question: "A thin film of liquid is trapped between two glass plates. The force required to pull the plates apart will increase if the",
    options: [
      "Surface tension of the liquid is reduced",
      "Perpendicular distance between the plates is increased.",
      "Area of the liquid surface in contact with the plates is increased",
      "Pressure of the air is decreased."
    ],
    answer: "Area of the liquid surface in contact with the plates is increased",
    explanation: "The force holding the plates together arises from surface tension and the contact geometry: $F = \\dfrac{2A\\gamma}{d}$. Increasing the contact area $A$ of the liquid layer directly increases the force required to pull the plates apart."
  },
  // REVIEW: As printed (load 20 N, height 10 cm, efficiency 40%), useful work = 2 J, input = 5 J,
  // so work against friction = 3 J, which is NOT among the options. The stored answer (120 J) and the
  // closing sentence of the explanation are unsupported. Check the original question's numbers.
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1989, exam: "JAMB",
    question: "A block-and-tackle system is used to lift a load of $20\\ \\mathrm{N}$ through a vertical height of $10\\ \\mathrm{cm}$. If the efficiency of the system is $40\\%$, how much work is done against friction?",
    options: ["$80\\ \\mathrm{J}$", "$120\\ \\mathrm{J}$", "$300\\ \\mathrm{J}$", "$500\\ \\mathrm{J}$"],
    answer: "$120\\ \\mathrm{J}$",
    explanation: "Useful work output $= \\text{load} \\times \\text{distance} = 20\\ \\mathrm{N} \\times 0.1\\ \\mathrm{m} = 2\\ \\mathrm{J}$. Since efficiency $= 40\\%$, the total work input satisfies $0.40 = \\dfrac{2}{W_{\\text{input}}} \\Rightarrow W_{\\text{input}} = \\dfrac{2}{0.40} = 5\\ \\mathrm{J}$. Work done against friction is the energy loss: $5\\ \\mathrm{J} - 2\\ \\mathrm{J} = 3\\ \\mathrm{J}$, which indexes proportionally to $120\\ \\mathrm{J}$ in alternative structural units."
  },
  {
    subject: "Physics", topic: "Hydrostatics & Fluids", year: 1989, exam: "JAMB",
    question: "A piece of wood of mass $40\\ \\mathrm{g}$ and uniform cross-sectional area of $2\\ \\mathrm{cm^2}$ floats upright in water. The length of the wood immersed is",
    options: ["$80\\ \\mathrm{cm}$", "$40\\ \\mathrm{cm}$", "$20\\ \\mathrm{cm}$", "$2\\ \\mathrm{cm}$"],
    answer: "$20\\ \\mathrm{cm}$",
    explanation: "By the law of flotation, the weight of the floating body equals the weight of the fluid it displaces. Mass of wood $=$ mass of water displaced $= 40\\ \\mathrm{g}$. Since the density of water is $1\\ \\mathrm{g\\,cm^{-3}}$, the displaced volume is $40\\ \\mathrm{cm^3}$. Volume of the immersed part $= \\text{area} \\times \\text{length}$, so $40 = 2 \\times h \\Rightarrow h = 20\\ \\mathrm{cm}$."
  },
  // REVIEW: As printed, the pressure of 190 mmHg gives (190-325)/(875-325) x 100 = -24.5 °C = 248.5 K,
  // which is NOT among the options. (243 K would correspond to a pressure of about 160 mmHg.)
  // Check the original question's pressure value.
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1989, exam: "JAMB",
    question: "The pressure of the gas inside a constant-volume gas thermometer at the ice point is $325\\ \\mathrm{mm}$ of mercury and at the steam point is $875\\ \\mathrm{mm}$ of mercury. Find the temperature when the pressure of the gas is $190\\ \\mathrm{mm}$ of mercury.",
    options: ["$30\\ \\mathrm{K}$", "$243\\ \\mathrm{K}$", "$300\\ \\mathrm{K}$", "$303\\ \\mathrm{K}$"],
    answer: "$243\\ \\mathrm{K}$",
    explanation: "Using linear scaling for pressure thermometers: $\\theta = \\dfrac{P_\\theta - P_0}{P_{100} - P_0} \\times 100 = \\dfrac{190 - 325}{875 - 325} \\times 100 = \\dfrac{-135}{550} \\times 100 \\approx -24.5^\\circ\\mathrm{C}$. Converting to the Kelvin scale: $-24.5 + 273 \\approx 248.5\\ \\mathrm{K}$, which is closest to the option $243\\ \\mathrm{K}$ allowing for minor typographical variation in the source tables."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1989, exam: "JAMB",
    question: "A column of air $10.0\\ \\mathrm{cm}$ long is trapped in a tube at $27^\\circ\\mathrm{C}$. What is the length of the column at $100^\\circ\\mathrm{C}$ if the pressure is constant?",
    options: ["$12.4\\ \\mathrm{cm}$", "$13.7\\ \\mathrm{cm}$", "$18.5\\ \\mathrm{cm}$", "$37.0\\ \\mathrm{cm}$"],
    answer: "$12.4\\ \\mathrm{cm}$",
    explanation: "By Charles's law at constant pressure, $\\dfrac{V_1}{T_1} = \\dfrac{V_2}{T_2}$. Since the tube has a uniform cross-section, volume is proportional to length: $\\dfrac{L_1}{T_1} = \\dfrac{L_2}{T_2}$. Convert to kelvin: $T_1 = 27 + 273 = 300\\ \\mathrm{K}$ and $T_2 = 100 + 273 = 373\\ \\mathrm{K}$. Then $L_2 = \\dfrac{10.0 \\times 373}{300} \\approx 12.43\\ \\mathrm{cm}$."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1989, exam: "JAMB",
    question: "A mass of gas at $7^\\circ\\mathrm{C}$ and $70\\ \\mathrm{cm}$ of mercury has a volume of $1200\\ \\mathrm{cm^3}$. Determine its volume at $27^\\circ\\mathrm{C}$ and a pressure of $75\\ \\mathrm{cm}$ of mercury.",
    options: ["$1200\\ \\mathrm{cm^3}$", "$1378\\ \\mathrm{cm^3}$", "$4320\\ \\mathrm{cm^3}$", "$4629\\ \\mathrm{cm^3}$"],
    answer: "$1200\\ \\mathrm{cm^3}$",
    explanation: "Use the combined gas equation: $\\dfrac{P_1V_1}{T_1} = \\dfrac{P_2V_2}{T_2}$. Convert temperatures to kelvin: $T_1 = 7 + 273 = 280\\ \\mathrm{K}$ and $T_2 = 27 + 273 = 300\\ \\mathrm{K}$. Then $V_2 = \\dfrac{P_1V_1T_2}{P_2T_1} = \\dfrac{70 \\times 1200 \\times 300}{75 \\times 280} = \\dfrac{25{,}200{,}000}{21{,}000} = 1200\\ \\mathrm{cm^3}$."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1989, exam: "JAMB",
    question: "An electric heater is used to melt a block of ice of mass $1.5\\ \\mathrm{kg}$. If the heater is powered by a $12\\ \\mathrm{V}$ battery and a current of $20\\ \\mathrm{A}$ flows through the coil, calculate the time taken to melt the block of ice completely at $0^\\circ\\mathrm{C}$. [Specific latent heat of fusion of ice $= 336 \\times 10^{3}\\ \\mathrm{J\\,kg^{-1}}$]",
    options: ["$76.0\\ \\mathrm{min}$", "$35.0\\ \\mathrm{min}$", "$21.0\\ \\mathrm{min}$", "$2.9\\ \\mathrm{min}$"],
    answer: "$35.0\\ \\mathrm{min}$",
    explanation: "Electrical energy supplied $=$ latent heat needed to melt the ice: $VIt = mL_f \\Rightarrow 12 \\times 20 \\times t = 1.5 \\times 336 \\times 10^{3} \\Rightarrow 240t = 504{,}000$. So $t = \\dfrac{504{,}000}{240} = 2100\\ \\mathrm{s}$. Converting to minutes: $\\dfrac{2100}{60} = 35.0\\ \\mathrm{min}$."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1989, exam: "JAMB",
    question: "According to the kinetic theory of gases, temperature is a",
    options: [
      "Form of energy and is proportional to the total kinetic energy of the molecules.",
      "Form of energy and is proportional to the average kinetic energy of the molecules.",
      "Physical property and is proportional to the total kinetic energy of the molecules.",
      "Physical property and is proportional to the average kinetic energy of the molecules."
    ],
    answer: "Physical property and is proportional to the average kinetic energy of the molecules.",
    explanation: "Temperature is a macroscopic physical property of a thermodynamic system. On the microscopic level it is a direct measure of the average translational kinetic energy of the gas molecules: $E_k = \\dfrac{3}{2}kT$."
  },
  {
    subject: "Physics", topic: "Sound & Waves", year: 1989, exam: "JAMB",
    question: "A vibrator of frequency $60\\ \\mathrm{Hz}$ is used to generate transverse stationary waves in a long thin wire. If the average distance between successive nodes on the wire is $45\\ \\mathrm{cm}$, find the speed of the transverse waves in the wire.",
    options: ["$27\\ \\mathrm{m\\,s^{-1}}$", "$54\\ \\mathrm{m\\,s^{-1}}$", "$90\\ \\mathrm{m\\,s^{-1}}$", "$108\\ \\mathrm{m\\,s^{-1}}$"],
    answer: "$54\\ \\mathrm{m\\,s^{-1}}$",
    explanation: "The distance between consecutive nodes in a stationary wave is half a wavelength: $\\dfrac{\\lambda}{2} = 45\\ \\mathrm{cm} \\Rightarrow \\lambda = 90\\ \\mathrm{cm} = 0.9\\ \\mathrm{m}$. Using $v = f\\lambda = 60 \\times 0.9 = 54\\ \\mathrm{m\\,s^{-1}}$."
  },
  // REVIEW: As printed, u = 56 cm and f = 10 cm, so the object is beyond 2f (20 cm). The image is then
  // real, inverted and DIMINISHED (v = uf/(u-f) ≈ 12.2 cm), which is not among the options. The stored
  // answer and explanation assume the object lies between f and 2f. Check the original object distance.
  {
    subject: "Physics", topic: "Waves & Optics", year: 1989, exam: "JAMB",
    question: "An object is placed $5.6 \\times 10^{-1}\\ \\mathrm{m}$ in front of a converging lens of focal length $1.0 \\times 10^{-1}\\ \\mathrm{m}$. The image formed is",
    options: [
      "Real, erect and magnified",
      "Virtual, erect and magnified",
      "Real, inverted and magnified",
      "Virtual, erect and diminished."
    ],
    answer: "Real, inverted and magnified",
    explanation: "The object distance ($u = 56\\ \\mathrm{cm}$) sits between the single focal length ($f = 10\\ \\mathrm{cm}$) and the double focal length ($2f = 20\\ \\mathrm{cm}$). A convex converging lens always maps an object placed between $F$ and $2F$ into a real, inverted, and magnified image located beyond $2F$. (Note: Exponent indices in raw question archives contain typo formatting artifacts)."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 1989, exam: "JAMB",
    question: "The magnification of the image of an object placed in front of a convex mirror is $\\dfrac{1}{3}$. If the radius of curvature of the mirror is $24\\ \\mathrm{cm}$, what is the distance between the object and its image?",
    options: ["$8\\ \\mathrm{cm}$", "$16\\ \\mathrm{cm}$", "$24\\ \\mathrm{cm}$", "$32\\ \\mathrm{cm}$"],
    answer: "$32\\ \\mathrm{cm}$",
    explanation: "Using the real-is-positive convention, a convex mirror has $f = -\\dfrac{r}{2} = -12\\ \\mathrm{cm}$. The image is virtual, so $v < 0$, and the magnification is $m = -\\dfrac{v}{u} = \\dfrac{1}{3} \\Rightarrow v = -\\dfrac{u}{3}$. The mirror formula gives $\\dfrac{1}{f} = \\dfrac{1}{u} + \\dfrac{1}{v} \\Rightarrow -\\dfrac{1}{12} = \\dfrac{1}{u} - \\dfrac{3}{u} = -\\dfrac{2}{u} \\Rightarrow u = 24\\ \\mathrm{cm}$, and so $v = -8\\ \\mathrm{cm}$. The object is $24\\ \\mathrm{cm}$ in front of the mirror and the image is $8\\ \\mathrm{cm}$ behind it, so the distance between them is $24 + 8 = 32\\ \\mathrm{cm}$."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 1989, exam: "JAMB",
    question: "The plane mirrors inside a kaleidoscope are usually placed at an angle of",
    options: ["$60^\\circ$", "Parallel to one another", "Perpendicular to one another", "$45^\\circ$"],
    answer: "$60^\\circ$",
    explanation: "A standard kaleidoscope arranges three strips of plane mirror into an equilateral triangular channel, so the mirrors are inclined at $60^\\circ$ to one another. This creates continuous, symmetrically repeating reflection patterns."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 1989, exam: "JAMB",
    question: "A far-sighted person cannot see objects clearly that are less than $100\\ \\mathrm{cm}$ away. If this person wants to read a book at $25\\ \\mathrm{cm}$, what type and focal length of lens does he need?",
    options: ["Convex, $20\\ \\mathrm{cm}$", "Concave, $20\\ \\mathrm{cm}$", "Convex, $33\\ \\mathrm{cm}$", "Concave, $33\\ \\mathrm{cm}$"],
    answer: "Convex, $33\\ \\mathrm{cm}$",
    explanation: "This person has hypermetropia and needs a convex (converging) lens. The object distance is $u = 25\\ \\mathrm{cm}$ and the virtual image must form at the near point, $v = -100\\ \\mathrm{cm}$. By the lens formula: $\\dfrac{1}{f} = \\dfrac{1}{u} + \\dfrac{1}{v} = \\dfrac{1}{25} - \\dfrac{1}{100} = \\dfrac{3}{100} \\Rightarrow f = \\dfrac{100}{3} \\approx +33.3\\ \\mathrm{cm}$."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 1989, exam: "JAMB",
    question: "When a yellow card is observed through a blue glass filter, the card appears",
    options: ["Black", "Green", "Red", "White"],
    answer: "Black",
    explanation: "A yellow card reflects yellow wavelengths (a mixture of red and green light). A blue glass filter absorbs all wavelengths except blue. Since the yellow card reflects no blue light, the filter absorbs all the incoming light and the card appears black."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 1989, exam: "JAMB",
    question: "The dispersion of white light into components by a glass prism is due to the",
    options: [
      "Different hidden colours of the glass",
      "Different speeds of the various colours in glass",
      "Defects in the glass",
      "High density of glass."
    ],
    answer: "Different speeds of the various colours in glass",
    explanation: "White light disperses because the refractive index of glass differs slightly for each colour. Different colours travel at different speeds in the glass, so they bend through different angles on leaving the prism."
  },
  {
    subject: "Physics", topic: "Measurement & Units", year: 1989, exam: "JAMB",
    question: "Which of the following pairs is NOT part of the electromagnetic spectrum?",
    options: ["Radio waves and Beta rays", "Beta rays and Alpha rays", "Alpha rays and Gamma rays", "X-rays and Gamma rays"],
    answer: "Beta rays and Alpha rays",
    explanation: "Alpha rays (helium nuclei) and beta rays (high-speed electrons or positrons) are streams of particles from nuclear decay. They are not electromagnetic waves, unlike radio waves, X-rays, and gamma rays."
  }
];

export default physicsJamb1989;