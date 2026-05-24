// UNIBEN Post-UTME 2011/2012 — Chemistry
// Questions from General Paper
// Faculty: Engineering & Physical Sciences
// RECURRING: combustion volumes ★, electrodeposition ★, rate of reaction ★,
//            electronic configuration ★, Group VIIA, spontaneity (free energy)
// NOTE: Q32 (hydrogen combustion) had missing thermochemical equation value — reconstructed.

const unibenChem2011 = [
  {
    subject: "Chemistry", topic: "Atomic Structure & Bonding", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Which of the following reactions is accompanied by the second ionization energy of an element?",
    options: [
      "X(g) → X⁻(g) + e⁻",
      "X(g) → X⁺(g) + e⁻",
      "X⁺(g) → X²⁺(g) + e⁻",
      "X⁺(g) → X⁻(g) + e⁻"
    ],
    answer: "X⁺(g) → X²⁺(g) + e⁻",
    explanation: "First ionization energy: neutral atom loses first electron → X(g) → X⁺(g) + e⁻. Second ionization energy: singly charged ion loses second electron → X⁺(g) → X²⁺(g) + e⁻. Answer C."
  },
  {
    subject: "Chemistry", topic: "Thermochemistry", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "How much heat will be liberated if 10 grams of hydrogen burns in excess oxygen? (H₂ + ½O₂ → H₂O, ΔH = −286 kJ/mol)",
    options: ["−1430 kJ", "−2860 kJ", "−5700 kJ", "−572 kJ"],
    answer: "−1430 kJ",
    explanation: "[R] Reconstructed — thermochemical equation value missing in source. M(H₂) = 2 g/mol. Moles = 10/2 = 5 mol. Heat = 5 × (−286) = −1430 kJ. UNIBEN answer A."
  },
  {
    subject: "Chemistry", topic: "Chemical Equilibrium", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Which of the following changes determines the spontaneity of a chemical reaction?",
    options: [
      "Volume of the reactants",
      "Free energy of the system",
      "Entropy of the system",
      "Enthalpy of the system"
    ],
    answer: "Free energy of the system",
    explanation: "The Gibbs free energy change (ΔG) determines spontaneity: ΔG < 0 → spontaneous. ΔG = ΔH − TΔS. Both enthalpy (ΔH) and entropy (ΔS) contribute to ΔG, but it is the free energy change that ultimately determines whether a reaction proceeds spontaneously."
  },
  {
    subject: "Chemistry", topic: "Atomic Structure & Bonding", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Which of the following statements is NOT correct of Group VIIA elements?",
    options: [
      "They are diatomic",
      "They are good oxidizing agents",
      "They are highly electronegative",
      "They have relatively low ionization potentials"
    ],
    answer: "They have relatively low ionization potentials",
    explanation: "Group VIIA (halogens): diatomic ✓ (F₂, Cl₂, Br₂, I₂), good oxidizing agents ✓ (readily gain electrons), highly electronegative ✓ (fluorine most electronegative of all elements). They have HIGH ionization potentials (not low) — they have nearly complete outer shells making it hard to remove electrons."
  },
  {
    subject: "Chemistry", topic: "Stoichiometry & Moles", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    isHotTopic: true,
    faculty: ["engineering", "physicalsciences"],
    question: "Calculate the minimum volume of oxygen required for the complete combustion of a mixture of 20 cm³ of CO and 20 cm³ of H₂.",
    options: ["10 cm³", "20 cm³", "40 cm³", "80 cm³"],
    answer: "20 cm³",
    explanation: "2CO + O₂ → 2CO₂: 20 cm³ CO needs 10 cm³ O₂. 2H₂ + O₂ → 2H₂O: 20 cm³ H₂ needs 10 cm³ O₂. Total O₂ = 10 + 10 = 20 cm³. ★ RECURRING — combustion volume calculations."
  },
  {
    subject: "Chemistry", topic: "Electrochemistry", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Calculate the quantity of electricity required to deposit 64.0 grams of copper from copper(II) chloride. (Cu = 64, F = 96,500 C)",
    options: ["3.09×10⁶ C", "1.93×10⁵ C", "9.65×10⁴ C", "6.18×10⁶ C"],
    answer: "1.93×10⁵ C",
    explanation: "Cu²⁺ + 2e⁻ → Cu. Moles of Cu = 64/64 = 1 mol. Charge = moles × n × F = 1 × 2 × 96500 = 193,000 C = 1.93×10⁵ C."
  },
  {
    subject: "Chemistry", topic: "Rates of Reaction", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    isHotTopic: true,
    faculty: ["engineering", "physicalsciences"],
    question: "Which of the reactions of marble with dilute HCl is fastest?",
    options: [
      "5 g of marble lump at 500°C",
      "5 g of marble lump at 250°C",
      "5 g of marble powder at 500°C",
      "5 g of marble powder at 250°C"
    ],
    answer: "5 g of marble powder at 500°C",
    explanation: "Rate increases with: (1) higher temperature — 500°C is faster than 250°C. (2) greater surface area — powder has far greater surface area than lumps. Option C combines BOTH: powder (maximum surface area) AND 500°C (maximum temperature) = fastest reaction. ★ RECURRING — rate factors."
  },
  {
    subject: "Chemistry", topic: "Atomic Structure & Bonding", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Which of the following pairs illustrates isotopy?",
    options: [
      "Oxygen and ozone",
      "But-1-ene and But-2-ene",
      "Hydrogen and deuterium",
      "Orthohydrogen and parahydrogen"
    ],
    answer: "Hydrogen and deuterium",
    explanation: "Isotopes: same element (same atomic number), different mass numbers (different neutron count). ¹H (hydrogen) and ²H (deuterium) are both hydrogen — atomic number 1, but different neutron counts. Oxygen and ozone are allotropes. But-1-ene and But-2-ene are positional isomers."
  }
]

export default unibenChem2011
