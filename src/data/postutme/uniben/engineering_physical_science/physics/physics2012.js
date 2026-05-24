// UNIBEN Post-UTME 2012/2013 — Physics
// 14 questions from General Paper
// Faculty: Engineering & Physical Sciences
// Analysis notes:
//   NEW TOPICS: optical fibre (total internal reflection), nuclear fusion, capacitor in AC
//   RECURRING: wave equation v=fλ ★, myopia correction ★, half-life ★, EM spectrum ★
//   FORMULA: F=BQv (Lorentz force), echo velocity calculation, vernier caliper accuracy

const unibenPhysics2012 = [
  {
    subject: "Physics", topic: "Waves & Optics", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    isHotTopic: true,
    faculty: ["engineering", "physicalsciences"],
    question: "A radio wave has a velocity of 3×10⁸ m/s. A radio station broadcasts at a frequency of 8000 kHz. Find the wavelength of the broadcast.",
    options: ["267 m", "37.5 m", "400 m", "375 m"],
    answer: "37.5 m",
    explanation: "v = fλ → λ = v/f = (3×10⁸) / (8000×10³) = (3×10⁸) / (8×10⁶) = 37.5 m. ★ RECURRING — wave equation appeared in 2005, 2006, 2008."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "A wave of frequency 10 Hz forms a stationary wave pattern in a medium where the velocity is 20 cm/s. The distance between adjacent nodes is:",
    options: ["2 cm", "1 cm", "1.5 cm", "5 cm"],
    answer: "1 cm",
    explanation: "λ = v/f = 20/10 = 2 cm. Distance between adjacent nodes = λ/2 = 1 cm. In a stationary wave, nodes are separated by half a wavelength."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "A piano wire is 0.5 m long, has a total mass of 0.01 kg, and is stretched with a tension of 800 N. Calculate the frequency when it sounds its fundamental note.",
    options: ["200 Hz", "100 Hz", "4 Hz", "2 Hz"],
    answer: "200 Hz",
    explanation: "Linear density μ = m/L = 0.01/0.5 = 0.02 kg/m. Wave speed v = √(T/μ) = √(800/0.02) = √40000 = 200 m/s. Fundamental frequency f = v/2L = 200/(2×0.5) = 200 Hz."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "A concave mirror has a focal length of 12 cm. At what distance from the mirror should an object be placed to give an image exactly the same size as the object?",
    options: ["12 cm", "6 cm", "24 cm", "36 cm"],
    answer: "24 cm",
    explanation: "For a concave mirror, the image is the same size as the object when the object is placed at the centre of curvature (C = 2f). C = 2×12 = 24 cm. At the centre of curvature, magnification = 1 (same size, real, inverted image)."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The operation of optical fibre is based on the principle of:",
    options: [
      "Polarization of light",
      "Total internal reflection of light",
      "Refraction of light",
      "Interference of light"
    ],
    answer: "Total internal reflection of light",
    explanation: "Optical fibres work by total internal reflection — light travelling through the dense fibre core hits the boundary with the less dense cladding at an angle greater than the critical angle, causing it to reflect completely back into the core and travel along the fibre."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    isHotTopic: true,
    faculty: ["engineering", "physicalsciences"],
    question: "For the correction of myopic defect in the human eye, we require:",
    options: [
      "Convex lens",
      "Concave lens",
      "Combination of convex and concave lenses",
      "Concave mirror"
    ],
    answer: "Concave lens",
    explanation: "Myopia (short-sightedness) occurs when the eye focuses light in front of the retina. A concave (diverging) lens diverges the rays before they enter the eye, pushing the focal point back onto the retina. ★ RECURRING TOPIC."
  },
  {
    subject: "Physics", topic: "Atomic & Nuclear Physics", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    isHotTopic: true,
    faculty: ["engineering", "physicalsciences"],
    question: "A radioactive sample initially contains N atoms. After three half-lives, the number of atoms that have disintegrated is:",
    options: ["N/8", "3N/8", "5N/8", "7N/8"],
    answer: "7N/8",
    explanation: "After 3 half-lives, remaining atoms = N×(½)³ = N/8. Disintegrated atoms = N − N/8 = 7N/8. ★ RECURRING — half-life calculations appeared in 2005, 2009."
  },
  {
    subject: "Physics", topic: "Atomic & Nuclear Physics", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Which of the following are produced after a nuclear fusion process?\nI. Heavy nucleus  II. Neutrons  III. Protons  IV. Energy",
    options: ["I and II", "I and IV", "II and III", "II and IV"],
    answer: "I and IV",
    explanation: "Nuclear fusion combines light nuclei to form a heavier nucleus, releasing energy (E=mc²). The products are: a heavier nucleus (I) and energy (IV). Fusion of hydrogen isotopes produces helium plus energy. Neutrons may be produced in specific reactions but are not the primary products — energy and a heavy nucleus are."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Which of the following is correct about a capacitor connected to an AC source?",
    options: [
      "Current lags the voltage by 90°",
      "Current leads the voltage by 180°",
      "Voltage lags the current by 90°",
      "Voltage leads the current by 90°"
    ],
    answer: "Voltage lags the current by 90°",
    explanation: "For a pure capacitor in AC: current leads voltage by 90° (equivalently, voltage lags current by 90°). Options C and D say the same thing — voltage lags current by 90°. This is because the capacitor charges and discharges, creating a phase difference where current peaks before voltage."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Three resistors 2 Ω, 3 Ω, and 4 Ω are connected in parallel to a 5 V supply. Calculate the current in the 3 Ω resistor.",
    options: ["3/5 A", "5/3 A", "2/5 A", "5/2 A"],
    answer: "5/3 A",
    explanation: "In parallel, voltage across each resistor = supply voltage = 5 V. I = V/R = 5/3 A in the 3 Ω resistor."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Three resistors 2 Ω, 3 Ω, and x Ω are connected in parallel. If the total resistance is 0.5 Ω, find the value of the unknown resistor.",
    options: ["7/6 Ω", "5/7 Ω", "6/7 Ω", "7/5 Ω"],
    answer: "6/7 Ω",
    explanation: "1/R_total = 1/2 + 1/3 + 1/x. 1/0.5 = 2. So 1/x = 2 − 1/2 − 1/3 = 2 − 3/6 − 2/6 = 2 − 5/6 = 7/6. x = 6/7 Ω."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "A working electric motor takes a current of 1.5 A when the potential difference across it is 250 V. If its efficiency is 80%, the power output is:",
    options: ["350 W", "250 W", "200 W", "300 W"],
    answer: "300 W",
    explanation: "Power input = IV = 1.5 × 250 = 375 W. Power output = efficiency × power input = 0.80 × 375 = 300 W."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Which of these is the correct expression for the force experienced by a charge in motion?",
    options: ["F = BIV", "F = BIQ", "F = BQUV", "F = BQv"],
    answer: "F = BQv",
    explanation: "The Lorentz force on a moving charge: F = BQv, where B = magnetic field strength, Q = charge, v = velocity. This is the fundamental equation for the magnetic force on a moving charge. F = BIL applies to a current-carrying conductor, not a single charge."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "A herdsman yelling out to a fellow herdsman heard his voice reflected by a cliff four seconds later. What is the velocity of sound in air if the cliff is 680 m away?",
    options: ["170 m/s", "136 m/s", "340 m/s", "680 m/s"],
    answer: "340 m/s",
    explanation: "The sound travels to the cliff and back: total distance = 2 × 680 = 1360 m. Time = 4 s. Speed = distance/time = 1360/4 = 340 m/s. This is the standard speed of sound in air at room temperature."
  }
]

export default unibenPhysics2012
