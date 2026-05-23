// UNIBEN Post-UTME 2010/2011 — Chemistry
// 16 questions (Q31–46 from General Paper)
// Faculty: Engineering & Physical Sciences
// RECURRING: NaCl conductivity, hydrogen bonds, Avogadro, redox,
//            Le Chatelier, fractional distillation, rate factors
// NEW: Graham's law, water gas, crucible use, pressure conversion

const unibenChem2010 = [
  {
    subject: "Chemistry", topic: "Atomic Structure & Bonding", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "If 12 and 19 are the atomic numbers of elements P and Q respectively, the interatomic bond between them is:",
    options: ["Coordinate covalent", "Neutral", "Covalent", "Ionic"],
    answer: "Ionic",
    explanation: "Atomic number 12 = Magnesium (metal, loses electrons). Atomic number 19 = Potassium (metal, loses electrons). When a metal bonds with a non-metal, electron transfer occurs = ionic bond. UNIBEN classifies this as ionic."
  },
  {
    subject: "Chemistry", topic: "Electrochemistry", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "All the following statements are true about sodium chloride in the solid state EXCEPT:",
    options: [
      "It exists as an aggregate of ions",
      "It conducts electric current",
      "It exists as discrete molecules",
      "Its ions are linked by metallic bonds"
    ],
    answer: "It conducts electric current",
    explanation: "Solid NaCl contains ions in a fixed crystal lattice — ions cannot move freely, so it CANNOT conduct electricity. In molten or aqueous state, mobile ions allow conduction. UNIBEN answer is B."
  },
  {
    subject: "Chemistry", topic: "Atomic Structure & Bonding", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The abnormally high boiling point of water is due to:",
    options: ["Its high molecular mass", "The presence of metallic bonds", "The presence of hydrogen bonds", "The presence of covalent bonds"],
    answer: "The presence of hydrogen bonds",
    explanation: "Water's M.mass = 18 (very small) yet boils at 100°C. The unusually strong intermolecular hydrogen bonds between water molecules explain this. ★ RECURRING."
  },
  {
    subject: "Chemistry", topic: "Gases & Kinetic Theory", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "'The rate of diffusion of a gas is inversely proportional to the square root of its density.' This statement is known as:",
    options: ["Law of conservation of mass", "Graham's law of diffusion", "General gas law", "Gay-Lussac's law"],
    answer: "Graham's law of diffusion",
    explanation: "Graham's law: r ∝ 1/√M. The lighter the gas, the faster it diffuses. Used to compare diffusion rates of different gases."
  },
  {
    subject: "Chemistry", topic: "Gases & Kinetic Theory", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The pressure of a given gas is 30 mmHg. What will the pressure be in newtons per square metre?",
    options: ["3000 N/m²", "3999.7 N/m²", "309.37 N/m²", "288 N/m²"],
    answer: "3999.7 N/m²",
    explanation: "1 mmHg = 133.322 Pa. 30 × 133.322 = 3999.7 N/m²."
  },
  {
    subject: "Chemistry", topic: "Stoichiometry & Moles", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Calculate the volume of oxygen required to burn completely 20 cm³ of carbon monoxide.",
    options: ["10 cm³", "20 cm³", "30 cm³", "40 cm³"],
    answer: "10 cm³",
    explanation: "2CO + O₂ → 2CO₂. 2 vol CO : 1 vol O₂. For 20 cm³ CO → 10 cm³ O₂. ★ RECURRING."
  },
  {
    subject: "Chemistry", topic: "Atomic Structure & Bonding", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "One mole of a substance contains _____.",
    options: ["Atomic number of particles", "Faraday's number of particles", "Avogadro's number of particles", "Quantum number of particles"],
    answer: "Avogadro's number of particles",
    explanation: "One mole = 6.022×10²³ particles = Avogadro's number. ★ RECURRING fundamental concept."
  },
  {
    subject: "Chemistry", topic: "Redox Reactions", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "From the reaction Zn + Cu²⁺ → Zn²⁺ + Cu, it can be deduced that:",
    options: ["Zn is the reducing agent", "Zn is the oxidizing agent", "Cu²⁺ loses electrons", "Cu²⁺ is the reducing agent"],
    answer: "Zn is the reducing agent",
    explanation: "Zn loses electrons (oxidised) → reducing agent. Cu²⁺ gains electrons (reduced) → oxidising agent. OIL RIG. ★ RECURRING."
  },
  {
    subject: "Chemistry", topic: "Rates of Reaction", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The following are factors affecting the rate of chemical reactions EXCEPT:",
    options: ["Surface area", "Catalyst", "Nature of reactants", "Activation energy"],
    answer: "Activation energy",
    explanation: "Activation energy is a property of the reaction (threshold energy) — not a variable factor you change to affect rate. Catalysts lower activation energy but activation energy itself doesn't 'affect' rate as a controllable factor. ★ RECURRING."
  },
  {
    subject: "Chemistry", topic: "Rates of Reaction", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The unit of the rate of chemical reaction is:",
    options: ["mol dm⁻³ s⁻¹", "mol s⁻¹", "molar mol s⁻¹", "s mol⁻¹"],
    answer: "mol dm⁻³ s⁻¹",
    explanation: "Rate = change in concentration ÷ time = mol dm⁻³ ÷ s = mol dm⁻³ s⁻¹."
  },
  {
    subject: "Chemistry", topic: "Metals & Non-Metals", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Which of the following mixtures will produce water gas?",
    options: ["CO₂ and H₂", "CO₂ and N₂", "CO and H₂", "CO and N₂"],
    answer: "CO and H₂",
    explanation: "Water gas = CO + H₂. Produced by: C + H₂O → CO + H₂ (steam over hot coke). Used as industrial fuel."
  },
  {
    subject: "Chemistry", topic: "Laboratory Techniques", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "What is the main use of a crucible in the laboratory?",
    options: ["Filtering precipitates", "Igniting precipitates", "Drying salts", "Condensing vapour"],
    answer: "Igniting precipitates",
    explanation: "A crucible is a heat-resistant container used to ignite (strongly heat/calcine) substances at very high temperatures."
  },
  {
    subject: "Chemistry", topic: "Organic Chemistry", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Methane, ethane, propane, butane and pentane are the five simplest:",
    options: ["Alkenes", "Alkynes", "Alkanes", "Olefins"],
    answer: "Alkanes",
    explanation: "Methane–pentane are all saturated hydrocarbons (CₙH₂ₙ₊₂) = alkanes. Olefins is another name for alkenes."
  },
  {
    subject: "Chemistry", topic: "Chemical Equilibrium", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "When a system at equilibrium is disturbed, the equilibrium adjusts itself to counteract the effect of the disturbance. This is known as:",
    options: ["The law of chemical equilibrium", "Le Chatelier's principle", "The law of entropy", "The law of enthalpy"],
    answer: "Le Chatelier's principle",
    explanation: "Le Chatelier's principle: disturbing an equilibrium causes it to shift to counteract the disturbance. ★ RECURRING."
  },
  {
    subject: "Chemistry", topic: "Acids, Bases & Salts", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The reaction between KOH and NO₂ produces water and:",
    options: ["KNO₃", "HNO₃", "KNO₂", "KNO₃ and KNO₂"],
    answer: "KNO₃ and KNO₂",
    explanation: "2KOH + 2NO₂ → KNO₂ + KNO₃ + H₂O. Disproportionation: NO₂ acts as both oxidising and reducing agent."
  },
  {
    subject: "Chemistry", topic: "Organic Chemistry", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Which of these methods is employed in the separation of hydrocarbons in petroleum?",
    options: ["Catalytic cracking", "Polymerization", "Fractional distillation", "Hydrogenation"],
    answer: "Fractional distillation",
    explanation: "Crude oil fractions are separated by fractional distillation — different fractions condense at different temperatures. ★ RECURRING — appeared 2006, 2008, 2010."
  }
]

export default unibenChem2010
