// JAMB 1990 Physics Past Questions
// Fully flattened — standalone objects with topics, answers, and detailed explanations.
// Strictly skipped questions containing complex geometric diagrams or custom data tables.
//
// MATH FORMAT: All mathematical content is written in LaTeX, wrapped in $...$ (inline).
// Render with KaTeX or MathJax. Backslashes are doubled (\\) because these are normal JS strings.
// (A single backslash is silently corrupted by JS: \t -> tab, \f -> form feed, \r -> carriage return.)

const physicsJamb1990 = [
  {
    subject: "Physics", topic: "Measurement & Units", year: 1990, exam: "JAMB",
    question: "Which of the following is a fundamental unit?",
    options: ["Newton", "Joule", "Watt", "Second"],
    answer: "Second",
    explanation: "The second is one of the seven base (fundamental) SI units and measures time. The newton (force), joule (energy), and watt (power) are all derived units built from the fundamental units."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1990, exam: "JAMB",
    question: "A car moving with a speed of $90\\ \\mathrm{km/h}$ was brought uniformly to rest by the application of the brakes in $10\\ \\mathrm{s}$. How far did the car travel after the brakes were applied?",
    options: ["$125\\ \\mathrm{m}$", "$150\\ \\mathrm{m}$", "$250\\ \\mathrm{m}$", "$15\\ \\mathrm{km}$"],
    answer: "$125\\ \\mathrm{m}$",
    explanation: "First convert the initial velocity from $\\mathrm{km/h}$ to $\\mathrm{m\\,s^{-1}}$: $u = 90 \\times \\dfrac{5}{18} = 25\\ \\mathrm{m\\,s^{-1}}$. The final velocity is $v = 0$ at $t = 10\\ \\mathrm{s}$. Using $s = \\tfrac{1}{2}(u + v)t = \\tfrac{1}{2}(25 + 0) \\times 10 = 12.5 \\times 10 = 125\\ \\mathrm{m}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1990, exam: "JAMB",
    question: "A particle of mass $M$ which is at rest splits up into two. If the mass and velocity of one of the particles are $m$ and $v$ respectively, calculate the velocity of the second particle.",
    options: ["$\\dfrac{mv}{M}$", "$\\dfrac{Mv}{M - m}$", "$\\dfrac{Mv}{M + m}$", "$-\\dfrac{mv}{M - m}$"],
    answer: "$-\\dfrac{mv}{M - m}$",
    explanation: "By conservation of linear momentum, total initial momentum equals total final momentum. The particle starts at rest, so $P_{\\text{initial}} = 0$. After splitting, the remaining mass is $M - m$. Let its velocity be $v_2$: $0 = mv + (M - m)v_2 \\Rightarrow (M - m)v_2 = -mv \\Rightarrow v_2 = -\\dfrac{mv}{M - m}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1990, exam: "JAMB",
    question: "To keep a vehicle moving at a constant speed $v$ requires power $P$ from the engine. The force provided by the engine is",
    options: ["$\\dfrac{P}{v}$", "$Pv$", "$\\tfrac{1}{2}Pv$", "$\\dfrac{P}{v^2}$"],
    answer: "$\\dfrac{P}{v}$",
    explanation: "Power is the rate of doing work, which can be written as force multiplied by velocity: $P = Fv$. Rearranging for the engine force gives $F = \\dfrac{P}{v}$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1990, exam: "JAMB",
    question: "A stone of mass $m\\ \\mathrm{kg}$ is held $h$ metres above the floor for $50\\ \\mathrm{s}$. The work done in joules over this period is",
    options: ["$mh$", "$mgh$", "$\\dfrac{mgh}{50}$", "$0$"],
    answer: "$0$",
    explanation: "Work done is force $\\times$ displacement in the direction of the force: $W = Fs$. The stone is held stationary, so its displacement is $s = 0$, and the total work done over the period is $0$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1990, exam: "JAMB",
    question: "A body of mass $10\\ \\mathrm{kg}$ rests on a rough inclined plane whose angle of tilt $\\theta$ is variable. $\\theta$ is gradually increased until the body starts to slide down the plane at $30^\\circ$. The coefficient of limiting friction between the body and the plane is",
    options: ["$0.30$", "$0.50$", "$0.58$", "$0.87$"],
    answer: "$0.58$",
    explanation: "When an object is on the verge of sliding down an incline, the angle of tilt equals the angle of friction. The coefficient of static friction is the tangent of this limiting angle: $\\mu = \\tan 30^\\circ = \\dfrac{1}{\\sqrt{3}} \\approx 0.577$, which rounds to $0.58$."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1990, exam: "JAMB",
    question: "An inclined plane which makes an angle of $30^\\circ$ with the horizontal has a velocity ratio of",
    options: ["$2$", "$1$", "$0.866$", "$0.50$"],
    answer: "$2$",
    explanation: "The velocity ratio of a simple inclined plane is $\\text{VR} = \\dfrac{1}{\\sin\\theta}$. For $\\theta = 30^\\circ$: $\\text{VR} = \\dfrac{1}{\\sin 30^\\circ} = \\dfrac{1}{0.5} = 2$."
  },
  {
    subject: "Physics", topic: "Hydrostatics & Fluids", year: 1990, exam: "JAMB",
    question: "What is the length of the liquid column in a barometer tube that would support an atmospheric pressure of $102{,}000\\ \\mathrm{N\\,m^{-2}}$ if the density of the liquid is $2600\\ \\mathrm{kg\\,m^{-3}}$? $[g = 10\\ \\mathrm{m\\,s^{-2}}]$",
    options: ["$0.75\\ \\mathrm{m}$", "$0.76\\ \\mathrm{m}$", "$3.92\\ \\mathrm{m}$", "$39.23\\ \\mathrm{m}$"],
    answer: "$3.92\\ \\mathrm{m}$",
    explanation: "Using the hydrostatic pressure formula $P = \\rho g h$: $102{,}000 = 2600 \\times 10 \\times h \\Rightarrow 102{,}000 = 26{,}000h \\Rightarrow h = \\dfrac{102{,}000}{26{,}000} \\approx 3.92\\ \\mathrm{m}$."
  },
  {
    subject: "Physics", topic: "Hydrostatics & Fluids", year: 1990, exam: "JAMB",
    question: "$40\\ \\mathrm{cm^3}$ of liquid P is mixed with $60\\ \\mathrm{cm^3}$ of another liquid Q. If the densities of P and Q are $1.0\\ \\mathrm{g\\,cm^{-3}}$ and $1.6\\ \\mathrm{g\\,cm^{-3}}$ respectively, what is the density of the mixture?",
    options: ["$0.05\\ \\mathrm{g\\,cm^{-3}}$", "$1.25\\ \\mathrm{g\\,cm^{-3}}$", "$1.36\\ \\mathrm{g\\,cm^{-3}}$", "$1.30\\ \\mathrm{g\\,cm^{-3}}$"],
    answer: "$1.36\\ \\mathrm{g\\,cm^{-3}}$",
    explanation: "Mass of P $= \\text{density} \\times \\text{volume} = 1.0 \\times 40 = 40\\ \\mathrm{g}$. Mass of Q $= 1.6 \\times 60 = 96\\ \\mathrm{g}$. Total mass $= 40 + 96 = 136\\ \\mathrm{g}$, and total volume $= 40 + 60 = 100\\ \\mathrm{cm^3}$. Density of the mixture $= \\dfrac{136}{100} = 1.36\\ \\mathrm{g\\,cm^{-3}}$."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1990, exam: "JAMB",
    question: "The resistances of a platinum wire at the ice and steam points are $0.75\\ \\Omega$ and $1.05\\ \\Omega$ respectively. Determine the temperature at which the resistance of the wire is $0.90\\ \\Omega$.",
    options: ["$43.0^\\circ\\mathrm{C}$", "$50.0^\\circ\\mathrm{C}$", "$69.9^\\circ\\mathrm{C}$", "$87.0^\\circ\\mathrm{C}$"],
    answer: "$50.0^\\circ\\mathrm{C}$",
    explanation: "Using the linear scale for resistance thermometers: $\\theta = \\dfrac{R_\\theta - R_0}{R_{100} - R_0} \\times 100 = \\dfrac{0.90 - 0.75}{1.05 - 0.75} \\times 100 = \\dfrac{0.15}{0.30} \\times 100 = 50.0^\\circ\\mathrm{C}$."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1990, exam: "JAMB",
    question: "A bar of initial length $l_0$ is heated through a temperature change $\\Delta t$ to a new length $l$. The linear expansivity, $\\alpha$, of the bar is",
    options: [
      "$\\dfrac{l - l_0}{l_0\\,\\Delta t}$",
      "$\\dfrac{l - l_0}{l\\,\\Delta t}$",
      "$l_0(1 + \\alpha\\,\\Delta t)$",
      "$\\dfrac{l - l_0}{l_0}$"
    ],
    answer: "$\\dfrac{l - l_0}{l_0\\,\\Delta t}$",
    explanation: "By definition, the coefficient of linear expansivity is the change in length per unit original length per unit change in temperature: $\\alpha = \\dfrac{\\Delta l}{l_0\\,\\Delta t}$. Since $\\Delta l = l - l_0$, this gives $\\alpha = \\dfrac{l - l_0}{l_0\\,\\Delta t}$."
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
    explanation: "Cooling a gas decreases the average kinetic energy of its molecules, so they move more slowly. At constant volume, slower molecules strike the container walls less frequently and with less force, so the pressure drops."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1990, exam: "JAMB",
    question: "$1\\ \\mathrm{kg}$ of copper is transferred quickly from boiling water to a block of ice. Calculate the mass of ice melted, neglecting heat loss. [Specific heat capacity of copper $= 390\\ \\mathrm{J\\,kg^{-1}\\,K^{-1}}$, specific latent heat of fusion of ice $= 3.3 \\times 10^{5}\\ \\mathrm{J\\,kg^{-1}}$]",
    options: ["$60\\ \\mathrm{g}$", "$67\\ \\mathrm{g}$", "$120\\ \\mathrm{g}$", "$133\\ \\mathrm{g}$"],
    answer: "$120\\ \\mathrm{g}$",
    explanation: "Heat lost by the copper $=$ heat gained by the melting ice. The copper starts at $100^\\circ\\mathrm{C}$ (boiling water) and cools to $0^\\circ\\mathrm{C}$ on the ice. Heat lost $= mc\\Delta T = 1 \\times 390 \\times 100 = 39{,}000\\ \\mathrm{J}$. Heat gained by the ice $= m_{\\text{ice}}L_f = m_{\\text{ice}} \\times 330{,}000$. Equating: $m_{\\text{ice}} = \\dfrac{39{,}000}{330{,}000} \\approx 0.118\\ \\mathrm{kg} \\approx 118\\ \\mathrm{g}$, which is closest to $120\\ \\mathrm{g}$."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1990, exam: "JAMB",
    question: "Which of the following conditions will make water boil at a temperature below $100^\\circ\\mathrm{C}$?",
    options: [
      "Increase the external pressure",
      "Reduce the external pressure",
      "Heat more rapidly at the same pressure.",
      "Add common salt to the water."
    ],
    answer: "Reduce the external pressure",
    explanation: "A liquid boils when its saturated vapour pressure equals the external pressure. Reducing the external pressure lets the vapour pressure reach it at a lower temperature, so water boils below $100^\\circ\\mathrm{C}$."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1990, exam: "JAMB",
    question: "Which of the following statements are correct?\nI. Land and sea breezes are natural convection currents.\nII. Convection may occur in liquids or gases but not in solids.\nIII. The vacuum in a thermos flask prevents heat loss due to convection only.",
    options: ["I and II only", "II and III only", "I and III only", "I, II and III"],
    answer: "I and II only",
    explanation: "Land and sea breezes are driven by density differences in heated air, which is natural convection (I). Convection needs bulk movement of the medium, so it occurs only in fluids (liquids and gases) and not in rigid solids (II). The vacuum in a thermos flask stops both conduction and convection, so statement III is incorrect."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 1990, exam: "JAMB",
    question: "A light wave of frequency $5 \\times 10^{14}\\ \\mathrm{Hz}$ moves through water which has a refractive index of $\\dfrac{4}{3}$. Calculate the wavelength in water if the velocity of light in air is $3 \\times 10^{8}\\ \\mathrm{m\\,s^{-1}}$.",
    options: ["$4.5 \\times 10^{-7}\\ \\mathrm{m}$", "$6.0 \\times 10^{-7}\\ \\mathrm{m}$", "$1.7 \\times 10^{-6}\\ \\mathrm{m}$", "$2.2 \\times 10^{-6}\\ \\mathrm{m}$"],
    answer: "$4.5 \\times 10^{-7}\\ \\mathrm{m}$",
    explanation: "Velocity of light in water: $v_w = \\dfrac{c}{n} = \\dfrac{3 \\times 10^{8}}{4/3} = 2.25 \\times 10^{8}\\ \\mathrm{m\\,s^{-1}}$. Wavelength in water: $\\lambda_w = \\dfrac{v_w}{f} = \\dfrac{2.25 \\times 10^{8}}{5 \\times 10^{14}} = 4.5 \\times 10^{-7}\\ \\mathrm{m}$."
  },
  {
    subject: "Physics", topic: "Sound & Waves", year: 1990, exam: "JAMB",
    question: "A wave disturbance travelling in air enters a medium in which its velocity is less than that in air. Which of the following statements is true about the wave in the medium?",
    options: [
      "Both the frequency of the wave and the wavelength are decreased.",
      "The frequency of the wave is decreased while the wavelength is increased.",
      "The frequency of the wave is unaltered while the wavelength is decreased.",
      "The frequency of the wave is decreased while the wavelength is unaltered."
    ],
    answer: "The frequency of the wave is unaltered while the wavelength is decreased.",
    explanation: "The frequency of a wave is fixed by its source and does not change when the wave crosses into another medium. Since the velocity decreases and $v = f\\lambda$, the wavelength must decrease in proportion."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 1990, exam: "JAMB",
    question: "Shadows and eclipses result from the",
    options: ["Refraction of light", "Rectilinear propagation of light", "Diffraction of light", "Reflection of light"],
    answer: "Rectilinear propagation of light",
    explanation: "Light travels in straight lines in a uniform medium (rectilinear propagation). When an opaque object blocks these rays, it casts a shadow or causes an eclipse, because the light cannot bend around the object to fill the space behind it."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 1990, exam: "JAMB",
    question: "An object which is $3\\ \\mathrm{cm}$ high is placed vertically $10\\ \\mathrm{cm}$ in front of a concave mirror. If this object produces an image $40\\ \\mathrm{cm}$ from the mirror, the height of the image is",
    options: ["$0.75\\ \\mathrm{cm}$", "$4.00\\ \\mathrm{cm}$", "$8.00\\ \\mathrm{cm}$", "$12.00\\ \\mathrm{cm}$"],
    answer: "$12.00\\ \\mathrm{cm}$",
    explanation: "Linear magnification is $m = \\dfrac{h_i}{h_o} = \\dfrac{v}{u}$. Substituting: $\\dfrac{h_i}{3} = \\dfrac{40}{10} = 4 \\Rightarrow h_i = 12\\ \\mathrm{cm}$."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 1990, exam: "JAMB",
    question: "What must be the distance between an object and a converging lens of focal length $20\\ \\mathrm{cm}$ to produce an erect image two times the object height?",
    options: ["$20\\ \\mathrm{cm}$", "$15\\ \\mathrm{cm}$", "$10\\ \\mathrm{cm}$", "$5\\ \\mathrm{cm}$"],
    answer: "$10\\ \\mathrm{cm}$",
    explanation: "An erect image from a converging lens is virtual, so using the real-is-positive convention, $m = -\\dfrac{v}{u} = 2 \\Rightarrow v = -2u$. The lens formula gives $\\dfrac{1}{f} = \\dfrac{1}{u} + \\dfrac{1}{v} \\Rightarrow \\dfrac{1}{20} = \\dfrac{1}{u} - \\dfrac{1}{2u} = \\dfrac{1}{2u} \\Rightarrow u = 10\\ \\mathrm{cm}$."
  },
  {
    subject: "Physics", topic: "Sound & Waves", year: 1990, exam: "JAMB",
    question: "An organ pipe closed at one end is $80\\ \\mathrm{cm}$ long. Determine the frequency of the fundamental note assuming that the speed of sound in air is $340\\ \\mathrm{m\\,s^{-1}}$.",
    options: ["$106\\ \\mathrm{Hz}$", "$213\\ \\mathrm{Hz}$", "$318\\ \\mathrm{Hz}$", "$425\\ \\mathrm{Hz}$"],
    answer: "$106\\ \\mathrm{Hz}$",
    explanation: "For a pipe closed at one end, the fundamental satisfies $L = \\dfrac{\\lambda}{4} \\Rightarrow \\lambda = 4L = 4 \\times 0.80 = 3.2\\ \\mathrm{m}$. Then $f = \\dfrac{v}{\\lambda} = \\dfrac{340}{3.2} = 106.25\\ \\mathrm{Hz} \\approx 106\\ \\mathrm{Hz}$."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 1990, exam: "JAMB",
    question: "Which of the following is a vector?",
    options: ["Electric charge", "Electric field", "Electric potential difference", "Electric capacitance"],
    answer: "Electric field",
    explanation: "Electric field is force per unit charge ($\\mathrm{N\\,C^{-1}}$ or $\\mathrm{V\\,m^{-1}}$), so it has both magnitude and direction. Charge, potential difference, and capacitance are scalar quantities."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 1990, exam: "JAMB",
    question: "The total energy required to send a unit positive charge round a complete electrical circuit is defined as the",
    options: ["Kinetic energy", "Potential difference", "Electromotive force", "Electrical energy"],
    answer: "Electromotive force",
    explanation: "The electromotive force (e.m.f.) of a source is the total work done, or electrical energy supplied, per unit charge in driving the charge round the complete circuit, including through the internal resistance of the source."
  }
];

export default physicsJamb1990;