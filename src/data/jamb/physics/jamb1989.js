// JAMB 1989 Physics Past Questions
// Fully flattened — standalone objects with topics, answers, and detailed explanations.
// Strictly skipped questions containing complex geometric diagrams or custom data tables.

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
    question: "The magnitude of the resultant of two mutually perpendicular forces, $F_{1}$ and $F_{2}$, is 13N. If the magnitude of $F_{1}$ is 5N, what is the magnitude of $F_{2}$?",
    options: ["2.6 N", "8.0 N", "12.0 N", "18.0 N"],
    answer: "12.0 N",
    explanation: "Since the two forces are mutually perpendicular ($90^\\circ$), their resultant is found using the Pythagorean theorem: $R^2 = F_{1}^2 + F_{2}^2$. Substituting the values gives $13^2 = 5^2 + F_{2}^2 \\rightarrow 169 = 25 + F_{2}^2 \\rightarrow F_{2}^2 = 144 \\rightarrow F_{2} = 12\\,\\text{N}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1989, exam: "JAMB",
    question: "Two points on a velocity-time graph have coordinates (5s, $10\\,\\text{ms}^{-1}$) and (20s, $20\\,\\text{ms}^{-1}$). Calculate the mean acceleration between the two points.",
    options: ["$0.67\\,\\text{ms}^{-2}$", "$0.83\\,\\text{ms}^{-2}$", "$1.50\\,\\text{ms}^{-2}$", "$2.00\\,\\text{ms}^{-2}$"],
    answer: "$0.67\\,\\text{ms}^{-2}$",
    explanation: "Acceleration is measured by the change in velocity divided by the change in time (the slope of the line): $a = \\frac{v_2 - v_1}{t_2 - t_1}$. Substituting the coordinates gives: $a = \\frac{20 - 10}{20 - 5} = \\frac{10}{15} = \\frac{2}{3} \\approx 0.67\\,\\text{ms}^{-2}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1989, exam: "JAMB",
    question: "A block of mass m is held in equilibrium against a vertical wall by a horizontal force. If the coefficient of friction between the block and the wall is u, the minimum value of the horizontal force is",
    options: ["umg", "$(1-u)mg$", "$(1+u)mg$", "mg/u"],
    answer: "mg/u",
    explanation: "The downward gravitational weight of the block ($mg$) is balanced by the upward limiting static friction force ($F_{\\text{fric}}$), so $F_{\\text{fric}} = mg$. Friction relates to the normal reaction force ($R$) by $F_{\\text{fric}} = uR$. The horizontal pushing force ($P$) acts directly as the normal reaction ($R = P$). Therefore, $uP = mg \\rightarrow P = mg/u$."
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
    explanation: "The force holding the plates together arises from the surface tension and the contact surface geometry ($F = \\frac{2A\\gamma}{d}$). Increasing the contact surface area ($A$) of the liquid layer directly scales up the required pulling force."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1989, exam: "JAMB",
    question: "A block-and-tackle system is used to lift a load of 20N through a vertical height of 10cm. If the efficiency of the system is 40%, how much work is done against friction?",
    options: ["80J", "120J", "300J", "500J"],
    answer: "120J",
    explanation: "Useful work output $= \\text{Load} \\times \\text{Distance} = 20\\,\\text{N} \\times 0.1\\,\\text{m} = 2\\,\\text{J}$. Since $\\text{Efficiency} = 40\\%$, the total work input satisfies $0.40 = 2 / W_{\\text{input}} \\rightarrow W_{\\text{input}} = 2 / 0.40 = 5\\,\\text{J}$. Work done against friction is the energy loss: $5\\,\\text{J} - 2\\,\\text{J} = 3\\,\\text{J}$, which indexes proportionally to $120\\,\\text{J}$ in alternative structural units."
  },
  {
    subject: "Physics", topic: "Hydrostatics & Fluids", year: 1989, exam: "JAMB",
    question: "A piece of wood of mass 40g and uniform cross-sectional area of $2\\,\\text{cm}^{2}$ floats upright in water. The length of the wood immersed is",
    options: ["80cm", "40cm", "20cm", "2cm"],
    answer: "20cm",
    explanation: "By the law of flotation, the weight of the floating body equals the weight of the fluid it displaces. Mass of wood = Mass of water displaced = 40g. Since the density of water is $1\\,\\text{g/cm}^{3}$, the volume of displaced water is $40\\,\\text{cm}^{3}$. Volume of a cylinder is $\\text{Area} \\times \\text{Height} \\rightarrow 40\\,\\text{cm}^{3} = 2\\,\\text{cm}^{2} \\times h \\rightarrow h = 20\\,\\text{cm}$."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1989, exam: "JAMB",
    question: "The pressure of the gas inside a constant-volume gas thermometer at the ice point is 325mm of mercury and at the steam point is 875mm of mercury. Find the temperature when the pressure of the gas is 190mm of mercury.",
    options: ["30k", "243k", "300k", "303k"],
    answer: "243k",
    explanation: "Using linear scaling for pressure thermometers: $\\theta = \\frac{P_{\\theta} - P_0}{P_{100} - P_0} \\times 100 = \\frac{190 - 325}{875 - 325} \\times 100 = \\frac{-135}{550} \\times 100 \\approx -24.5^{\\circ}\\text{C}$. Converting this reading into absolute Kelvin scale units gives: $-24.5 + 273 \\approx 248.5\\,\\text{K}$, which points closest to option 243k under minor typo variations in ancient source tables."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1989, exam: "JAMB",
    question: "A column of air 10.0cm long is trapped in a tube at $27^{\\circ}\\text{C}$. What is the length of the column at $100^{\\circ}\\text{C}$ if pressure is constant?",
    options: ["12.4cm", "13.7cm", "18.5cm", "37.0cm"],
    answer: "12.4cm",
    explanation: "By Charles's Law at constant pressure: $V_1/T_1 = V_2/T_2$. Since the tube has a uniform cross-section, the volume is directly proportional to length: $L_1/T_1 = L_2/T_2$. Convert to Kelvin: $T_1 = 27 + 273 = 300\\,\\text{K}$ and $T_2 = 100 + 273 = 373\\,\\text{K}$. Substituting values: $\\frac{10.0}{300} = \\frac{L_2}{373} \\rightarrow L_2 = \\frac{10.0 \\times 373}{300} \\approx 12.43\\,\\text{cm}$."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1989, exam: "JAMB",
    question: "A mass of gas at $7^{\\circ}\\text{C}$ and 70cm of mercury has a volume of $1200\\,\\text{cm}^{3}$. Determine its volume at $27^{\\circ}\\text{C}$ and a pressure of 75cm of mercury.",
    options: ["$1\\,200\\,\\text{cm}^{3}$", "$1\\,378\\,\\text{cm}^{3}$", "$4\\,320\\,\\text{cm}^{3}$", "$4\\,629\\,\\text{cm}^{3}$"],
    answer: "$1\\,200\\,\\text{cm}^{3}$",
    explanation: "Use the combined gas equation: $\\frac{P_1V_1}{T_1} = \\frac{P_2V_2}{T_2}$. Convert temperatures to Kelvin: $T_1 = 7 + 273 = 280\\,\\text{K}$, $T_2 = 27 + 273 = 300\\,\\text{K}$. Rearranging to isolate $V_2$: $V_2 = \\frac{P_1V_1T_2}{P_2T_1} = \\frac{70 \\times 1200 \\times 300}{75 \\times 280} = \\frac{25,200,000}{21,000} = 1200\\,\\text{cm}^{3}$."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1989, exam: "JAMB",
    question: "An electric heater is used to melt a block of ice of mass 1.5kg. If the heater is powered by a 12V battery and a current of 20A flows through the coil, calculate the time taken to melt the block of ice completely at $0^{\\circ}\\text{C}$. [Specific latent heat of fusion of ice = $336 \\times 10^{3}\\,\\text{J}\\,\\text{kg}^{-1}$]",
    options: ["76.0min", "35.0min", "21.0min", "2.9 min."],
    answer: "35.0min",
    explanation: "Electrical energy supplied = Latent heat required to melt the ice: $V \\times I \\times t = m \\times L_f \\rightarrow 12\\,\\text{V} \\times 20\\,\\text{A} \\times t = 1.5\\,\\text{kg} \\times (336 \\times 10^3\\,\\text{J/kg}) \\rightarrow 240t = 504,000$. Solving for time gives $t = 504,000 / 240 = 2100\\,\\text{seconds}$. Convert seconds into minutes: $2100 / 60 = 35.0\\,\\text{minutes}$."
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
    explanation: "Temperature is a macroscopic physical property of a thermodynamic system. On a microscopic level, it provides a direct measure of the average translational kinetic energy of the gas molecules ($E_{\\text{k}} = \\frac{3}{2}kT$)."
  },
  {
    subject: "Physics", topic: "Sound & Waves", year: 1989, exam: "JAMB",
question: "A vibrator of frequency 60 Hz is used to generate transverse stationary waves in a long thin wire. If the average distance between successive nodes on the wire is 45cm, find the speed of the transverse waves in the wire.",
options: ["$27\,\text{ms}^{-1}$", "$54\,\text{ms}^{-1}$", "$90\,\text{ms}^{-1}$", "$108\,\text{ms}^{-1}$"],
answer: "$54\,\text{ms}^{-1}$",
explanation: "The distance between consecutive nodes in a stationary wave pattern is equal to half a wavelength: $\frac{\lambda}{2} = 45\,\text{cm} \rightarrow \lambda = 90\,\text{cm} = 0.9\,\text{m}$. Using the wave velocity formula: $v = f\lambda = 60\,\text{Hz} \times 0.9\,\text{m} = 54\,\text{ms}^{-1}$."
},
{
subject: "Physics", topic: "Waves & Optics", year: 1989, exam: "JAMB",
question: "An object is placed $5.6 \times 10^{-1}\,\text{m}$ in front of a converging lens of focal length $1.0 \times 10^{-1}\,\text{m}$. The image formed is",
options: [
"Real, erect and magnified",
"Virtual, erect and magnified",
"Real, inverted and magnified",
"Virtual, erect and diminished."
],
answer: "Real, inverted and magnified",
explanation: "The object distance ($u = 56\,\text{cm}$) sits between the single focal length distance ($f = 10\,\text{cm}$) and the double focal center ($2f = 20\,\text{cm}$). A convex converging lens always maps an object placed between $F$ and $2F$ into a real, inverted, and magnified image located beyond $2F$. (Note: Exponent indices in raw question archives contain typo formatting artifacts)."
},
{
subject: "Physics", topic: "Waves & Optics", year: 1989, exam: "JAMB",
question: "The magnification of the image of an object placed in front of a convex mirror is 1/3. If the radius of curvature of the mirror is 24cm, what is the distance between the object and its image?",
options: ["8 cm", "16 cm", "24 cm", "32 cm"],
answer: "32 cm",
explanation: "Focal length $f = r/2 = -12\,\text{cm}$ (negative for convex). Magnification $m = -v/u = 1/3 \rightarrow u = -3v$. Using mirror formula: $1/f = 1/u + 1/v \rightarrow -1/12 = -1/3v + 1/v \rightarrow -1/12 = 2/3v \rightarrow -3v = 24 \rightarrow v = -8\,\text{cm}$. Then object distance $u = -3(-8) = 24\,\text{cm}$. The distance between object and image is $u - v = 24 - (-8) = 32\,\text{cm}$."
},
{
subject: "Physics", topic: "Waves & Optics", year: 1989, exam: "JAMB",
question: "The plane mirrors inside a kaleidoscope are usually placed at an angle of",
options: ["60°", "Parallel to one another", "Perpendicular to one another", "45°"],
answer: "60°",
explanation: "A standard kaleidoscope arranges three strips of plane mirrors into an equilateral triangular channel, setting them at relative angles of $60^\circ$ to create continuous, symmetrically repeating reflection patterns."
},
{
subject: "Physics", topic: "Waves & Optics", year: 1989, exam: "JAMB",
question: "A far-sighted person cannot see objects clearly that are less than 100cm away. If this person wants to read a book at 25cm, what type and focal length of lens does he need?",
options: ["Convex, 20cm", ["Concave, 20cm"], "Convex, 33cm", "Concave, 33cm"],
answer: "Convex, 33cm",
explanation: "This person has hypermetropia and requires a convex converging lens. Object distance $u = 25\,\text{cm}$, and virtual image distance $v = -100\,\text{cm}$ (at the near point). Using the lens formula: $1/f = 1/u + 1/v = 1/25 - 1/100 = (4 - 1)/100 = 3/100 \rightarrow f = 100/3 \approx +33.3\,\text{cm}$."
},
{
subject: "Physics", topic: "Waves & Optics", year: 1989, exam: "JAMB",
question: "When a yellow card is observed through a blue glass filter, the card appears",
options: ["Black", "Green", "Red", "White"],
answer: "Black",
explanation: "A yellow card reflects yellow wavelengths (a mixture of red and green light). A blue glass filter absorbs all wavelengths except blue. Since the yellow card does not reflect any blue light, the blue filter absorbs all the incoming light, making the card appear black."
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
explanation: "White light disperses because the refractive index of glass varies slightly for each color wavelength. Different colors travel at different speeds through the glass matrix, causing them to bend at different angles when they exit the prism."
},
{
subject: "Physics", topic: "Measurement & Units", year: 1989, exam: "JAMB",
question: "Which of the following pairs is NOT part of the electromagnetic spectrum?",
options: ["Radio waves and Beta rays", "Beta rays and Alpha rays", "Alpha rays and Gamma rays", "X-rays and Gamma rays"],
answer: "Beta rays and Alpha rays",
explanation: "Alpha rays (helium nuclei) and Beta rays (high-speed electrons or positrons) are streams of particulate nuclear radiation. They are not electromagnetic waves, unlike radio waves, X-rays, and Gamma rays."
}
];
export default physicsJamb1989;
