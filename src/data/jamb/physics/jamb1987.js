// JAMB 1987 Physics Past Questions
// Fully flattened — standalone objects with topics, answers, and detailed explanations.
// Strictly skipped questions containing complex geometric diagrams or custom data tables.
//
// MATH FORMAT: All mathematical content is written in LaTeX, wrapped in $...$ (inline).
// Render any string with KaTeX or MathJax (see renderMath helper at the bottom).
// Note: backslashes are doubled (\\) because these are normal JS strings.

const physicsJamb1987 = [
  {
    subject: "Physics", topic: "Measurement & Units", year: 1987, exam: "JAMB",
    question: "Which of the following units is equivalent to $\\mathrm{kg\\,m\\,s^{-1}}$?",
    options: ["$\\mathrm{N\\,s^{-1}}$", "$\\mathrm{N\\,m\\,s}$", "$\\mathrm{N\\,s}$", "$\\mathrm{J\\,s^{-1}}$"],
    answer: "$\\mathrm{N\\,s}$",
    explanation: "The unit $\\mathrm{kg\\,m\\,s^{-1}}$ represents linear momentum or impulse. Since impulse = force $\\times$ time, its unit can be expressed as newtons $\\times$ seconds ($\\mathrm{N\\,s}$). Dimensionally, $1\\ \\mathrm{N} = 1\\ \\mathrm{kg\\,m\\,s^{-2}}$, so $1\\ \\mathrm{N\\,s} = 1\\ \\mathrm{kg\\,m\\,s^{-2}} \\times \\mathrm{s} = 1\\ \\mathrm{kg\\,m\\,s^{-1}}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1987, exam: "JAMB",
    question: "A man walks $8\\ \\mathrm{km}$ north and then $5\\ \\mathrm{km}$ in a direction $60^\\circ$ east of north. Find his distance from his starting point.",
    options: ["$11.36\\ \\mathrm{km}$", "$12.36\\ \\mathrm{km}$", "$13.00\\ \\mathrm{km}$", "$14.36\\ \\mathrm{km}$"],
    answer: "$11.36\\ \\mathrm{km}$",
    explanation: "Using the cosine rule to resolve the vector triangle: $R^2 = A^2 + B^2 - 2AB\\cos\\theta$. The interior angle between the two paths is $180^\\circ - 60^\\circ = 120^\\circ$. So $R^2 = 8^2 + 5^2 - 2(8)(5)\\cos 120^\\circ = 64 + 25 - 80(-0.5) = 89 + 40 = 129$. Therefore, $R = \\sqrt{129} \\approx 11.36\\ \\mathrm{km}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1987, exam: "JAMB",
    question: "A jet engine develops a thrust of $270\\ \\mathrm{N}$ when the velocity of the exhaust gases relative to the engine is $300\\ \\mathrm{m\\,s^{-1}}$. What is the mass of the material ejected per second?",
    options: ["$81.00\\ \\mathrm{kg}$", "$9.00\\ \\mathrm{kg}$", "$0.90\\ \\mathrm{kg}$", "$0.09\\ \\mathrm{kg}$"],
    answer: "$0.90\\ \\mathrm{kg}$",
    explanation: "Thrust is the rate of change of momentum: $F = \\dfrac{m}{t} \\times v$, where $\\dfrac{m}{t}$ is the mass ejected per second. Rearranging gives $\\dfrac{m}{t} = \\dfrac{F}{v} = \\dfrac{270}{300} = 0.90\\ \\mathrm{kg\\,s^{-1}}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1987, exam: "JAMB",
    question: "A body rolls down a slope from a height of $100\\ \\mathrm{m}$. Its velocity at the foot of the slope is $20\\ \\mathrm{m\\,s^{-1}}$. What percentage of its initial potential energy is converted into kinetic energy? $[g = 10\\ \\mathrm{m\\,s^{-2}}]$",
    options: ["$40\\%$", "$35\\%$", "$20\\%$", "$15\\%$"],
    answer: "$20\\%$",
    explanation: "Initial potential energy: $PE = mgh = m \\times 10 \\times 100 = 1000m$. Final kinetic energy: $KE = \\tfrac{1}{2}mv^2 = \\tfrac{1}{2} \\times m \\times 20^2 = 200m$. The percentage converted is $\\dfrac{KE}{PE} \\times 100\\% = \\dfrac{200m}{1000m} \\times 100\\% = 20\\%$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1987, exam: "JAMB",
    question: "An elevator of mass $4800\\ \\mathrm{kg}$ is supported by a cable which can safely withstand a maximum tension of $60{,}000\\ \\mathrm{N}$. The maximum upward acceleration the elevator can have is $[g = 10\\ \\mathrm{m\\,s^{-2}}]$",
    options: ["$2.5\\ \\mathrm{m\\,s^{-2}}$", "$5.0\\ \\mathrm{m\\,s^{-2}}$", "$7.5\\ \\mathrm{m\\,s^{-2}}$", "$10.0\\ \\mathrm{m\\,s^{-2}}$"],
    answer: "$2.5\\ \\mathrm{m\\,s^{-2}}$",
    explanation: "For upward acceleration, $T = m(g + a)$. Substituting the maximum values: $60{,}000 = 4800(10 + a)$, so $12.5 = 10 + a$, giving $a = 2.5\\ \\mathrm{m\\,s^{-2}}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1987, exam: "JAMB",
    question: "A constant force of $40\\ \\mathrm{N}$ acting on a body initially at rest gives an acceleration of $0.1\\ \\mathrm{m\\,s^{-2}}$ for $4\\ \\mathrm{s}$. Calculate the work done by the force.",
    options: ["$8\\ \\mathrm{J}$", "$10\\ \\mathrm{J}$", "$32\\ \\mathrm{J}$", "$160\\ \\mathrm{J}$"],
    answer: "$32\\ \\mathrm{J}$",
    explanation: "First find the distance travelled using $s = ut + \\tfrac{1}{2}at^2 = 0 + \\tfrac{1}{2}(0.1)(4^2) = 0.5 \\times 16 = 0.8\\ \\mathrm{m}$. Work done is force $\\times$ distance: $W = Fs = 40 \\times 0.8 = 32\\ \\mathrm{J}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1987, exam: "JAMB",
    question: "The coefficient of static friction between a $40\\ \\mathrm{kg}$ crate and a concrete surface is $0.25$. Find the magnitude of the minimum force needed to keep the crate stationary on a concrete base inclined at $45^\\circ$ to the horizontal. $[g = 10\\ \\mathrm{m\\,s^{-2}}]$",
    options: ["$400\\ \\mathrm{N}$", "$300\\ \\mathrm{N}$", "$283\\ \\mathrm{N}$", "$212\\ \\mathrm{N}$"],
    answer: "$212\\ \\mathrm{N}$",
    explanation: "The component of weight acting down the incline is $W_{\\text{down}} = mg\\sin 45^\\circ = 40 \\times 10 \\times 0.7071 = 282.84\\ \\mathrm{N}$. The maximum limiting static friction holding it up is $f = \\mu mg\\cos 45^\\circ = 0.25 \\times 40 \\times 10 \\times 0.7071 = 70.71\\ \\mathrm{N}$. The minimum external force along the plane needed to stop it sliding down is $F = W_{\\text{down}} - f = 282.84 - 70.71 = 212.13\\ \\mathrm{N} \\approx 212\\ \\mathrm{N}$."
  },
  {
    subject: "Physics", topic: "Properties of Matter", year: 1987, exam: "JAMB",
    question: "If a beaker is filled with water, it is observed that the surface of the water is not horizontal at the glass-water interface. This behaviour is due to",
    options: ["Friction", "Surface tension", "Viscosity", "Evaporation"],
    answer: "Surface tension",
    explanation: "The curved meniscus at the glass-water boundary occurs due to surface tension, which is driven by the relative strengths of adhesive forces between water and glass molecules versus cohesive forces within water molecules."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1987, exam: "JAMB",
    question: "The mechanical advantage (MA) of an inclined plane depends on",
    options: ["Its length", "Its height", "The product of its length and height", "The ratio of its length to its height"],
    answer: "The ratio of its length to its height",
    explanation: "For an ideal inclined plane with 100% efficiency, $\\text{MA} = \\text{VR}$. Since $\\text{VR} = \\dfrac{\\text{distance moved by effort}}{\\text{distance moved by load}} = \\dfrac{\\text{length of incline}}{\\text{height of incline}}$, MA depends directly on the ratio of its length to its height."
  },
  {
    subject: "Physics", topic: "Properties of Matter", year: 1987, exam: "JAMB",
    question: "A load of $5\\ \\mathrm{N}$ gives an extension of $0.56\\ \\mathrm{cm}$ in a wire which obeys Hooke's law. What is the extension caused by a load of $20\\ \\mathrm{N}$?",
    options: ["$1.12\\ \\mathrm{cm}$", "$2.14\\ \\mathrm{cm}$", "$2.24\\ \\mathrm{cm}$", "$2.52\\ \\mathrm{cm}$"],
    answer: "$2.24\\ \\mathrm{cm}$",
    explanation: "Hooke's law states that force is directly proportional to extension ($F = ke$). Therefore $\\dfrac{F_1}{F_2} = \\dfrac{e_1}{e_2}$, so $\\dfrac{5}{20} = \\dfrac{0.56}{e_2}$, i.e. $\\dfrac{1}{4} = \\dfrac{0.56}{e_2}$, giving $e_2 = 0.56 \\times 4 = 2.24\\ \\mathrm{cm}$."
  },
  {
    subject: "Physics", topic: "Hydrostatics & Fluids", year: 1987, exam: "JAMB",
    question: "A cube of side $10\\ \\mathrm{cm}$ and mass $0.5\\ \\mathrm{kg}$ floats in a liquid with only $\\dfrac{1}{5}$ of its height above the liquid surface. What is the relative density of the liquid?",
    options: ["$0.125$", "$0.250$", "$0.625$", "$2.500$"],
    answer: "$0.625$",
    explanation: "If $\\tfrac{1}{5}$ of its height is above the surface, then $\\tfrac{4}{5}$ (80%) of the cube is submerged. By the law of flotation, the fraction submerged equals $\\dfrac{\\rho_{\\text{object}}}{\\rho_{\\text{liquid}}} = \\dfrac{4}{5}$. The volume of the cube is $10^3 = 1000\\ \\mathrm{cm^3}$, so its density is $\\dfrac{500\\ \\mathrm{g}}{1000\\ \\mathrm{cm^3}} = 0.5\\ \\mathrm{g\\,cm^{-3}}$. Thus $\\dfrac{0.5}{\\rho_{\\text{liquid}}} = 0.8$, so $\\rho_{\\text{liquid}} = \\dfrac{0.5}{0.8} = 0.625\\ \\mathrm{g\\,cm^{-3}}$. Since relative density is measured relative to water ($1\\ \\mathrm{g\\,cm^{-3}}$), it equals $0.625$."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1987, exam: "JAMB",
    question: "The distance between the fixed points of a centigrade thermometer is $20\\ \\mathrm{cm}$. What is the temperature when the mercury level is $4.5\\ \\mathrm{cm}$ above the lower mark?",
    options: ["$22.5^\\circ\\mathrm{C}$", "$29.0^\\circ\\mathrm{C}$", "$90.0^\\circ\\mathrm{C}$", "$100.0^\\circ\\mathrm{C}$"],
    answer: "$22.5^\\circ\\mathrm{C}$",
    explanation: "Using linear scaling: $\\theta = \\dfrac{l_\\theta}{l_{100}} \\times 100^\\circ\\mathrm{C} = \\dfrac{4.5}{20} \\times 100^\\circ\\mathrm{C} = 0.225 \\times 100^\\circ\\mathrm{C} = 22.5^\\circ\\mathrm{C}$."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1987, exam: "JAMB",
    question: "The length of a side of a metallic cube at $20^\\circ\\mathrm{C}$ is $5.0\\ \\mathrm{cm}$. Given that the linear expansivity of the metal is $4.0 \\times 10^{-5}\\ \\mathrm{K^{-1}}$, find the volume of the cube at $120^\\circ\\mathrm{C}$.",
    options: ["$126.50\\ \\mathrm{cm^3}$", "$126.25\\ \\mathrm{cm^3}$", "$126.00\\ \\mathrm{cm^3}$", "$125.00\\ \\mathrm{cm^3}$"],
    answer: "$126.50\\ \\mathrm{cm^3}$",
    explanation: "Initial volume: $V_1 = 5^3 = 125\\ \\mathrm{cm^3}$. Volume expansivity: $\\gamma = 3\\alpha = 3 \\times (4.0 \\times 10^{-5}) = 1.2 \\times 10^{-4}\\ \\mathrm{K^{-1}}$. Temperature change: $\\Delta T = 120 - 20 = 100\\ \\mathrm{K}$. Change in volume: $\\Delta V = V_1\\gamma\\Delta T = 125 \\times (1.2 \\times 10^{-4}) \\times 100 = 1.5\\ \\mathrm{cm^3}$. New volume: $V_2 = V_1 + \\Delta V = 125 + 1.5 = 126.50\\ \\mathrm{cm^3}$."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1987, exam: "JAMB",
    question: "Hot water is added to three times its mass of water at $10^\\circ\\mathrm{C}$ and the resulting temperature is $20^\\circ\\mathrm{C}$. What is the initial temperature of the hot water?",
    options: ["$50^\\circ\\mathrm{C}$", "$80^\\circ\\mathrm{C}$", "$40^\\circ\\mathrm{C}$", "$30^\\circ\\mathrm{C}$"],
    answer: "$50^\\circ\\mathrm{C}$",
    explanation: "Let the mass of hot water be $m$, so the mass of cold water is $3m$. Let the initial temperature of the hot water be $T$. Heat lost = heat gained: $mc(T - 20) = 3mc(20 - 10)$. Cancelling $m$ and $c$ gives $T - 20 = 3(10) = 30$, so $T = 50^\\circ\\mathrm{C}$."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1987, exam: "JAMB",
    question: "Calculate the amount of heat required to convert $2\\ \\mathrm{kg}$ of ice at $-2^\\circ\\mathrm{C}$ to water at $0^\\circ\\mathrm{C}$. [Specific heat capacity of ice $= 2090\\ \\mathrm{J\\,kg^{-1}\\,K^{-1}}$, specific latent heat of fusion $= 333\\ \\mathrm{kJ\\,kg^{-1}}$]",
    options: ["$666\\ \\mathrm{J}$", "$8360\\ \\mathrm{J}$", "$666{,}000\\ \\mathrm{J}$", "$674{,}360\\ \\mathrm{J}$"],
    answer: "$674{,}360\\ \\mathrm{J}$",
    explanation: "Step 1: heat to raise the ice from $-2^\\circ\\mathrm{C}$ to $0^\\circ\\mathrm{C}$: $mc\\Delta T = 2 \\times 2090 \\times 2 = 8360\\ \\mathrm{J}$. Step 2: heat to melt the ice at $0^\\circ\\mathrm{C}$: $mL = 2 \\times 333{,}000 = 666{,}000\\ \\mathrm{J}$. Total heat $= 8360 + 666{,}000 = 674{,}360\\ \\mathrm{J}$."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1987, exam: "JAMB",
    question: "In which of the following are the substances arranged in descending order of their thermal conductivities?",
    options: ["Copper, steel, glass", "Steel, copper, glass", "Steel, glass, copper", "Copper, glass, steel"],
    answer: "Copper, steel, glass",
    explanation: "Metals conduct heat far better than non-metals, and copper is a significantly better thermal conductor than steel. Glass is an insulator with very low conductivity, making the correct descending order: copper, steel, glass."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1987, exam: "JAMB",
    question: "The vacuum in a Thermos flask helps to reduce heat transfer by",
    options: ["Convection and radiation", "Convection and conduction", "Conduction and radiation", "Radiation only"],
    answer: "Convection and conduction",
    explanation: "Conduction and convection require a material medium (solid particles or fluid molecules) to transfer heat energy. An evacuated space (vacuum) blocks these two pathways, while radiation can still cross a vacuum."
  },
  {
    subject: "Physics", topic: "Sound & Waves", year: 1987, exam: "JAMB",
    question: "A wave has a frequency of $2\\ \\mathrm{Hz}$ and a wavelength of $30\\ \\mathrm{cm}$. The velocity of the wave is",
    options: ["$60.0\\ \\mathrm{m\\,s^{-1}}$", "$6.0\\ \\mathrm{m\\,s^{-1}}$", "$1.5\\ \\mathrm{m\\,s^{-1}}$", "$0.6\\ \\mathrm{m\\,s^{-1}}$"],
    answer: "$0.6\\ \\mathrm{m\\,s^{-1}}$",
    explanation: "Using the wave formula $v = f\\lambda$, convert the wavelength to metres: $30\\ \\mathrm{cm} = 0.3\\ \\mathrm{m}$. Then $v = 2\\ \\mathrm{Hz} \\times 0.3\\ \\mathrm{m} = 0.6\\ \\mathrm{m\\,s^{-1}}$."
  },
  {
    subject: "Physics", topic: "Sound & Waves", year: 1987, exam: "JAMB",
    question: "A boat at anchor is rocked by waves whose crests are $100\\ \\mathrm{m}$ apart and whose velocity is $25\\ \\mathrm{m\\,s^{-1}}$. At what interval does the wave crest reach the boat?",
    options: ["$2{,}500.00\\ \\mathrm{s}$", "$75.00\\ \\mathrm{s}$", "$4.00\\ \\mathrm{s}$", "$0.25\\ \\mathrm{s}$"],
    answer: "$4.00\\ \\mathrm{s}$",
    explanation: "The distance between consecutive crests is the wavelength ($\\lambda = 100\\ \\mathrm{m}$), and the velocity is $v = 25\\ \\mathrm{m\\,s^{-1}}$. The interval between crests is the period: $T = \\dfrac{\\lambda}{v} = \\dfrac{100}{25} = 4.00\\ \\mathrm{s}$."
  },
  {
    subject: "Physics", topic: "Sound & Waves", year: 1987, exam: "JAMB",
    question: "Which of the following instruments produces a pure musical tone?",
    options: ["Guitar", "Vibrating string", "Tuning fork", "Siren"],
    answer: "Tuning fork",
    explanation: "A tuning fork is designed to vibrate at a single fundamental frequency with almost no overtones, producing a pure sine wave, i.e. a pure tone."
  }
];

export default physicsJamb1987;

// ---------------------------------------------------------------------------
// OPTIONAL HELPER — render a string containing $...$ math into HTML with KaTeX.
//   npm install katex
//   import 'katex/dist/katex.min.css';
// Use it in the browser (e.g. element.innerHTML = renderMath(q.question)),
// or in React: <span dangerouslySetInnerHTML={{ __html: renderMath(text) }} />
// ---------------------------------------------------------------------------
// import katex from "katex";
//
// export function renderMath(text) {
//   return text.replace(/\$([^$]+)\$/g, (_, tex) =>
//     katex.renderToString(tex, { throwOnError: false })
//   );
// }