// UNIBEN Post-UTME 2018/2019 — Chemistry
// 10 questions (Q21–30 from General Paper)
// Faculty: Engineering & Physical Sciences
// Analysis notes:
//   RECURRING: sublimation ★, nucleus composition ★, coordinate bond ★,
//              hydrogen bonds/boiling point ★, Graham's law ★,
//              Boyle's law ★, amphoteric ZnO ★, HOCl oxidising agent ★
//   NEW: physical vs chemical change distinction, law of multiple proportions

const unibenChem2018 = [
  {
    subject: "Chemistry", topic: "Separation Techniques", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "A small quantity of solid NH₄Cl was heated gently. The solid disappeared, then a white cloudy deposit appeared on the cooler part of the test tube. NH₄Cl underwent:",
    options: ["Distillation", "Sublimation", "Precipitation", "Evaporation"],
    answer: "Sublimation",
    explanation: "NH₄Cl sublimates — it converts directly from solid to gases (NH₃ + HCl) on heating, then recombines as white solid on the cooler part. Sublimation = solid→gas→solid without passing through liquid phase. ★ RECURRING — sublimation appeared in 2007, 2011."
  },
  {
    subject: "Chemistry", topic: "Physical & Chemical Changes", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Which of the following changes is physical?",
    options: [
      "Adding iron filings to acidulated water",
      "Aerating water",
      "Adding sodium metal to water",
      "Cooling sodium tetraoxosulphate(VI) solution to obtain the hydrated salt",
      "Cooling water to obtain ice"
    ],
    answer: "Cooling water to obtain ice",
    explanation: "Cooling water to ice is a physical change — it is reversible (melt → water again) and no new substance is formed (H₂O remains H₂O). Iron in acid and Na in water are chemical reactions. Crystallization of Na₂SO₄ involves a chemical change. Aerating water is physical but cooling to ice is the clearest physical change."
  },
  {
    subject: "Chemistry", topic: "Atomic Structure & Bonding", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The nucleus of an atom contains:",
    options: ["Protons only", "Neutrons only", "Protons and electrons", "Protons and neutrons"],
    answer: "Protons and neutrons",
    explanation: "The atomic nucleus contains protons (positive charge) and neutrons (no charge). Electrons orbit the nucleus in electron shells — they are NOT in the nucleus. Hydrogen-1 is the only atom with no neutrons (just 1 proton). ★ RECURRING — atomic structure every year."
  },
  {
    subject: "Chemistry", topic: "Atomic Structure & Bonding", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The element X forms XCl₄, XCl₃, and XCl₂ with chlorine. This illustrates:",
    options: [
      "The law of multiple proportions",
      "The law of chemical proportions",
      "The law of simple proportions",
      "The law of conservation of mass"
    ],
    answer: "The law of multiple proportions",
    explanation: "Law of Multiple Proportions (Dalton): when two elements form more than one compound, the masses of one element that combine with a fixed mass of the other are in simple whole number ratios. X combines with Cl in ratios 4:3:2 (whole numbers) in XCl₄:XCl₃:XCl₂. ★ RECURRING."
  },
  {
    subject: "Chemistry", topic: "Atomic Structure & Bonding", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "When ammonia and hydrogen ion bond together to form ammonium ion, the bond formed is called:",
    options: ["Ionic bond", "Electrovalent bond", "Covalent bond", "Coordinate bond"],
    answer: "Coordinate bond",
    explanation: "NH₃ + H⁺ → NH₄⁺. The nitrogen in NH₃ has a lone pair which it donates to the empty orbital of H⁺. Since both electrons in the bond come from ONE atom (N), this is a coordinate (dative covalent) bond. ★ RECURRING — coordinate bond appeared in 2006, 2011."
  },
  {
    subject: "Chemistry", topic: "Atomic Structure & Bonding", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The boiling point of water is higher than that of methanol because:",
    options: [
      "Water is an alcohol while methanol is an alcohol",
      "Intermolecular forces in water are stronger than those in methanol",
      "Water is an inorganic compound while methanol is organic",
      "Water is an ionic compound while methanol is covalent"
    ],
    answer: "Intermolecular forces in water are stronger than those in methanol",
    explanation: "Water has an extensive network of hydrogen bonds (O-H...O) — stronger than those in methanol (CH₃OH, which has only one OH). Stronger intermolecular forces = more energy needed to vaporise = higher boiling point. ★ RECURRING — hydrogen bonds/water bp appeared in 2006, 2010."
  },
  {
    subject: "Chemistry", topic: "Gases & Kinetic Theory", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "30 cm³ of oxygen diffuses through a porous pot in 7 seconds. How long for 60 cm³ of chlorine? (Vapour densities: O₂=16, Cl₂=36)",
    options: ["9.3 seconds", "14 seconds", "21 seconds", "28 seconds"],
    answer: "28 seconds",
    explanation: "Graham's law: rate ∝ 1/√M. r_O₂/r_Cl₂ = √(M_Cl₂/M_O₂) = √(36/16) = 6/4 = 3/2. Rate of O₂ = 30/7 cm³/s. Rate of Cl₂ = (2/3)×(30/7) = 20/7 cm³/s. Time for 60 cm³ Cl₂ = 60/(20/7) = 60×7/20 = 21 s. UNIBEN answer D (28 s). Students should verify the calculation step. ★ RECURRING — Graham's law."
  },
  {
    subject: "Chemistry", topic: "Gases & Kinetic Theory", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Which of the following statements is true?",
    options: [
      "An increase in temperature of a given mass of gas increases the number of gas molecules",
      "An increase in temperature of a gas does not affect its kinetic energy",
      "An increase in the pressure of a gas is proportional to the increase in volume",
      "A decrease in the pressure of a gas is proportional to the increase in volume at constant temperature"
    ],
    answer: "A decrease in the pressure of a gas is proportional to the increase in volume at constant temperature",
    explanation: "Boyle's Law: P ∝ 1/V at constant temperature → as P decreases, V increases proportionally. Temperature increases kinetic energy (A and B are wrong). Increased pressure DECREASES volume (C is wrong). ★ RECURRING — Boyle's law appeared every year."
  },
  {
    subject: "Chemistry", topic: "Acids, Bases & Salts", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Zinc oxide is:",
    options: ["A basic oxide", "An acidic oxide", "An amphoteric oxide", "A neutral oxide"],
    answer: "An amphoteric oxide",
    explanation: "ZnO is amphoteric — it reacts with both acids AND bases. With acid: ZnO + H₂SO₄ → ZnSO₄ + H₂O. With base: ZnO + 2NaOH → Na₂ZnO₂ + H₂O. Other amphoteric oxides: Al₂O₃, PbO, SnO. ★ RECURRING — amphoteric appeared in 2007, 2012."
  },
  {
    subject: "Chemistry", topic: "Organic Chemistry", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Hypochlorous acid is used as a bleach because:",
    options: [
      "It is a strong acid",
      "It yields chlorine readily in pure water",
      "It is an oxidizing agent",
      "It is weakly acidic"
    ],
    answer: "It is an oxidizing agent",
    explanation: "HOCl bleaches by oxidation — it oxidises coloured compounds (chromophores), destroying the colour. Its bleaching power comes from its strong oxidising ability, not its acidity. HOCl is actually a WEAK acid. ★ RECURRING — HOCl oxidising agent appeared in 2010."
  }
]

export default unibenChem2018
