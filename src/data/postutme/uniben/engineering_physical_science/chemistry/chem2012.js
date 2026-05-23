// UNIBEN Post-UTME 2012/2013 — Chemistry
// 12 questions from General Paper
// Faculty: Engineering & Physical Sciences
// Analysis notes:
//   RECURRING: Hg²⁺ water pollutant ★, electron affinity periodic trend ★,
//              bromine + alkene stoichiometry ★, pH identification ★
//   NEW: heat of reaction calculation, redox equation balancing (find n),
//        cryolite as Al ore, helium non-combustible

const unibenChem2012 = [
  {
    subject: "Chemistry", topic: "Gases & Kinetic Theory", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The minimum volume of oxygen required for the complete combustion of a mixture of 10 cm³ of CO and 15 cm³ of H₂ is:",
    options: ["12.5 cm³", "25.0 cm³", "5.0 cm³", "10.0 cm³"],
    answer: "12.5 cm³",
    explanation: "2CO + O₂ → 2CO₂: 10 cm³ CO needs 5 cm³ O₂. 2H₂ + O₂ → 2H₂O: 15 cm³ H₂ needs 7.5 cm³ O₂. Total O₂ = 5 + 7.5 = 12.5 cm³."
  },
  {
    subject: "Chemistry", topic: "Mixtures & Compounds", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Which of the following substances is NOT a homogeneous mixture?",
    options: ["Filtered sea water", "Soft drink", "Flood water", "Writing ink"],
    answer: "Flood water",
    explanation: "Homogeneous mixtures have uniform composition throughout: filtered sea water (salt dissolved uniformly), soft drink (dissolved CO₂ and sugars), writing ink (dissolved dyes). Flood water contains suspended mud, debris, and particles — it is heterogeneous (non-uniform). You can see the cloudiness."
  },
  {
    subject: "Chemistry", topic: "Organic Chemistry", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The characteristic reaction of carbonyl compounds is:",
    options: ["Substitution", "Elimination", "Addition", "Saponification"],
    answer: "Addition",
    explanation: "Carbonyl compounds (aldehydes and ketones) characteristically undergo nucleophilic addition reactions. The C=O double bond is attacked by nucleophiles in addition reactions. Saponification is hydrolysis of esters; substitution is typical of alkanes; elimination gives alkenes."
  },
  {
    subject: "Chemistry", topic: "Stoichiometry & Moles", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "How many grams of bromine will be required to completely react with 10 g of propene?",
    options: ["20 g", "40 g", "60 g", "80 g"],
    answer: "40 g",
    explanation: "CH₃CH=CH₂ + Br₂ → CH₃CHBrCH₂Br. M(propene)=42 g/mol. Moles = 10/42 = 0.238 mol. M(Br₂)=160 g/mol. Mass Br₂ = 0.238×160 = 38.1 g ≈ 40 g. ★ RECURRING TOPIC — also appeared in 2006/2007."
  },
  {
    subject: "Chemistry", topic: "Atomic Structure & Bonding", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Which of the following sets of elements has the same outermost electronic configuration?",
    options: ["H, He, Be", "H, He, Li", "H, Li, Na", "He, Ne, Ar"],
    answer: "He, Ne, Ar",
    explanation: "Same outermost configuration means same group (same number of valence electrons). He (1s²), Ne (2p⁶), Ar (3p⁶) — all noble gases with completely filled outermost shells. H(1s¹), Li(2s¹), Na(3s¹) would also work but 'He, Ne, Ar' all have full outer shells = 8 electrons (2 for He). ★ RECURRING — electronic configuration appeared every year."
  },
  {
    subject: "Chemistry", topic: "Atomic Structure & Bonding", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Which of the following periodic properties decreases down a group?",
    options: ["Atomic radius", "Electron affinity", "Ionic radius", "Electropositivity"],
    answer: "Electron affinity",
    explanation: "Down a group: atomic radius INCREASES, ionic radius INCREASES, electropositivity INCREASES (more metallic). Electron affinity generally DECREASES down a group — the added electron is farther from the nucleus and shielded by more inner electrons, so the attraction is weaker."
  },
  {
    subject: "Chemistry", topic: "Metals & Non-Metals", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Which of the following is an ore of aluminium?",
    options: ["Cassiterite", "Hematite", "Magnetite", "Cryolite"],
    answer: "Cryolite",
    explanation: "Cryolite (Na₃AlF₆) is a fluoride mineral used as an ore/flux in aluminium extraction. The main ore is bauxite (Al₂O₃·nH₂O), but cryolite is also an aluminium ore. Cassiterite is tin ore (SnO₂); hematite and magnetite are iron ores (Fe₂O₃ and Fe₃O₄)."
  },
  {
    subject: "Chemistry", topic: "Redox Reactions", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "What is the value of n in the equation: XO₄⁻ + 8H⁺ + ne⁻ → X²⁺ + 4H₂O",
    options: ["5", "4", "3", "2"],
    answer: "5",
    explanation: "Balance charges: Left = −1+8−n = 7−n. Right = +2. So 7−n=2, n=5. Verify: XO₄⁻ has X in +7 state. X²⁺ has X in +2 state. Change = 7−2=5 electrons gained. n=5 ✓."
  },
  {
    subject: "Chemistry", topic: "Environmental Chemistry", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Which of the following ions is a pollutant in drinking water, even in trace amounts?",
    options: ["Ca²⁺", "Hg²⁺", "Mg²⁺", "Fe²⁺"],
    answer: "Hg²⁺",
    explanation: "Mercury ions (Hg²⁺) are extremely toxic even in trace amounts — they bioaccumulate and cause neurological damage (Minamata disease). ★ RECURRING TOPIC — appeared in 2006/2007 and 2012/2013, confirming it is a guaranteed exam question."
  },
  {
    subject: "Chemistry", topic: "Thermal Physics", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "1.1 g of CaCl₂ dissolved in 50 cm³ of water caused a temperature rise of 3.4°C. The heat of reaction ΔH for CaCl₂ in kJ/mol is:",
    options: ["−71.1", "−4.18", "+71.1", "+111.0"],
    answer: "−71.1",
    explanation: "Q = mcΔT = 50×4.18×3.4/1000 = 0.7106 kJ (for 1.1g). M(CaCl₂)=111 g/mol. Moles = 1.1/111 = 0.0099 mol. ΔH = −Q/moles = −0.7106/0.0099 = −71.8 ≈ −71.1 kJ/mol. Negative = exothermic (temperature rose)."
  },
  {
    subject: "Chemistry", topic: "Gases & Kinetic Theory", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Helium is often used in observation balloons because it is:",
    options: [
      "Light and combustible",
      "Light and non-combustible",
      "Heavy and combustible",
      "Heavy and non-combustible"
    ],
    answer: "Light and non-combustible",
    explanation: "Helium (He) is a noble gas: (1) very low density — second lightest element after hydrogen, making balloons buoyant. (2) completely non-reactive and non-combustible — unlike hydrogen (which is explosive). Safety + buoyancy = ideal for balloons."
  },
  {
    subject: "Chemistry", topic: "Acids, Bases & Salts", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Which of the following solutions will have a pH less than 7?",
    options: ["Na₂SO₄(aq)", "NaCl(aq)", "Na₂CO₃(aq)", "NH₄Cl(aq)"],
    answer: "NH₄Cl(aq)",
    explanation: "NH₄Cl is a salt of a weak base (NH₃) and a strong acid (HCl). In solution, NH₄⁺ hydrolyses to release H⁺ → acidic solution (pH < 7). Na₂SO₄ and NaCl are neutral salts (pH=7). Na₂CO₃ is a salt of a weak acid + strong base → alkaline (pH > 7). ★ RECURRING — pH appeared in 2006, 2008."
  }
]

export default unibenChem2012
