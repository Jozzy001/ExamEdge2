// UNIBEN Post-UTME 2020/2021 — Chemistry
// 10 questions (Q21–30 from General Paper)
// Faculty: Engineering & Physical Sciences
// Analysis notes:
//   RECURRING: hard water ions ★, alloys ★, oxidation states ★, cellulose ★,
//              petroleum fractions ★, efflorescence ★, soap/glycerol ★, Boyle's law ★
//   NEW: pH interpretation (Y more acidic than Z), pressure increases density

const unibenChem2020 = [
  {
    subject: "Chemistry", topic: "Water & Solutions", year: 2020, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Two metallic ions associated with hard water are:",
    options: ["Copper and zinc", "Magnesium and silver", "Calcium and magnesium", "Potassium and tin"],
    answer: "Calcium and magnesium",
    explanation: "Hardness of water is caused by dissolved Ca²⁺ (from limestone, CaCO₃) and Mg²⁺ (from dolomite, MgCO₃). These ions react with soap to form scum instead of lather. ★ RECURRING — hard water appeared in 2007, 2009."
  },
  {
    subject: "Chemistry", topic: "Metals & Non-Metals", year: 2020, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Bronze is an alloy of:",
    options: ["Copper, zinc, and nickel", "Aluminium and copper", "Copper and zinc", "Tin and copper"],
    answer: "Tin and copper",
    explanation: "Bronze = copper (Cu) + tin (Sn), typically ~88% Cu, 12% Sn. Brass = copper + zinc. Cupronickel = copper + nickel. ★ RECURRING — alloys appeared in 2005, 2009. Remember: Bronze→Tin, Brass→Zinc."
  },
  {
    subject: "Chemistry", topic: "Atomic Structure & Bonding", year: 2020, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "An element X has 127 neutrons and 82 electrons. Its atomic number is:",
    options: ["209", "105", "45", "82"],
    answer: "82",
    explanation: "Atomic number = number of protons. For a neutral atom, protons = electrons = 82. Mass number = protons + neutrons = 82 + 127 = 209. This is Lead (Pb-209). The atomic number is always the proton/electron count, not the mass number."
  },
  {
    subject: "Chemistry", topic: "Redox Reactions", year: 2020, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The oxidation state of manganese in KMnO₄ is:",
    options: ["+1", "+3", "+7", "+5"],
    answer: "+7",
    explanation: "In KMnO₄: K = +1, each O = −2 (×4 = −8). Total must be 0 (neutral compound): +1 + Mn + (−8) = 0 → Mn = +7. Permanganate (MnO₄⁻) always has Mn in +7 state. ★ RECURRING — oxidation states appeared in 2008, 2012."
  },
  {
    subject: "Chemistry", topic: "Organic Chemistry", year: 2020, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Cotton is almost pure:",
    options: ["Starch", "Cellulose", "Protein", "Animal fibre"],
    answer: "Cellulose",
    explanation: "Cotton fibres are approximately 90% cellulose — a polysaccharide made of glucose units joined by β-1,4-glycosidic bonds. Starch is also a polysaccharide but used for energy storage. Wool is protein (keratin). ★ RECURRING — natural polymers."
  },
  {
    subject: "Chemistry", topic: "Organic Chemistry", year: 2020, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Which of the following cannot be obtained by fractional distillation of petroleum?",
    options: ["Ether", "Methane", "Butane", "Hydrogen"],
    answer: "Hydrogen",
    explanation: "Petroleum fractions obtained by fractional distillation include: refinery gas (C₁-C₄: methane, ethane, propane, butane), petrol/gasoline, naphtha, kerosene, diesel, lubricating oil, bitumen. Ether and hydrogen are NOT petroleum fractions — they are produced by other processes. ★ RECURRING — petroleum fractions."
  },
  {
    subject: "Chemistry", topic: "Water & Solutions", year: 2020, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Sodium carbonate crystals, on exposure to a dry atmosphere, change to a white powder. This phenomenon is known as:",
    options: ["Efflorescence", "Hygroscopy", "Oxidation", "Deliquescence"],
    answer: "Efflorescence",
    explanation: "Efflorescence: crystals containing water of crystallization lose this water to a dry atmosphere → powder. Na₂CO₃·10H₂O (washing soda crystals) → Na₂CO₃ (white powder). Deliquescence is the opposite: substances absorb moisture from air and dissolve. Hygroscopy: absorbs moisture without dissolving. ★ RECURRING."
  },
  {
    subject: "Chemistry", topic: "Organic Chemistry", year: 2020, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The by-product obtained during the production of soap is:",
    options: ["Ethanol", "Glycerol", "Methanol", "Propanol"],
    answer: "Glycerol",
    explanation: "Saponification: fat/oil (triglyceride) + NaOH → sodium soap + glycerol. The glycerol (glycerin) is always a by-product of soap manufacture. It is used in cosmetics, pharmaceuticals, and food. ★ RECURRING — saponification products."
  },
  {
    subject: "Chemistry", topic: "Acids, Bases & Salts", year: 2020, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Solutions X, Y, and Z have pH values 3.0, 5.0, and 9.0 respectively. Which statement is correct?",
    options: [
      "All the solutions are acidic",
      "All the solutions are basic",
      "Y and Z are more acidic than water",
      "Y is more acidic than Z"
    ],
    answer: "Y is more acidic than Z",
    explanation: "pH<7=acidic, pH>7=basic, pH=7=neutral. X(pH3)=acidic ✓, Y(pH5)=acidic ✓, Z(pH9)=basic ✗. A is wrong (Z is basic). B is wrong. C is wrong (Z at pH9 is basic, less acidic than pure water). D is correct: Y(pH5) is MORE acidic than Z(pH9) because lower pH = more acidic."
  },
  {
    subject: "Chemistry", topic: "Gases & Kinetic Theory", year: 2020, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Increasing the pressure of a gas:",
    options: [
      "Lowers the average kinetic energy of the molecules",
      "Increases the density of the gas",
      "Decreases the density of the gas",
      "Increases the volume of the gas"
    ],
    answer: "Increases the density of the gas",
    explanation: "Boyle's Law: P ∝ 1/V at constant temperature. Increasing pressure → volume decreases. Same mass in smaller volume → density (mass/volume) increases. Kinetic energy is affected by temperature, not pressure. Volume DECREASES (not increases) with increased pressure. ★ RECURRING — Boyle's law."
  }
]

export default unibenChem2020
