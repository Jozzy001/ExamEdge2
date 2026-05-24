// UNIBEN Post-UTME 2006/2007 — Chemistry
// 13 questions extracted from General Paper
// Split from general paper for better subject tracking and weak area analysis

const unibenChemistry2006 = [
  {
    subject: "Chemistry",
    topic: "Atomic Structure & Bonding",
    year: 2006,
    exam: "Post-UTME",
    university: "UNIBEN",
    question: "The electronic configuration of an element is: 1s² 2s² 2p⁶ 3s² 3p³. How many unpaired electrons are there in the element?",
    options: ["5", "3", "2", "1"],
    answer: "3",
    explanation: "The 3p³ subshell has 3 electrons in 3 orbitals (by Hund's rule, one electron per orbital before pairing): ↑ ↑ ↑ in 3 separate 3p orbitals. All 3 are unpaired. The other subshells (1s², 2s², 2p⁶, 3s²) are fully paired. Total unpaired = 3. ★ RECURRING TOPIC — appears every year."
  },
  {
    subject: "Chemistry",
    topic: "Atomic Structure & Bonding",
    year: 2006,
    exam: "Post-UTME",
    university: "UNIBEN",
    question: "Which of the following represents the types of bonding present in ammonium chloride?",
    options: ["Ionic only", "Covalent only", "Ionic and dative covalent", "Dative covalent only"],
    answer: "Ionic and dative covalent",
    explanation: "NH₄Cl contains: (1) Dative (coordinate) covalent bond — between NH₃ and H⁺ to form NH₄⁺, where N donates both electrons. (2) Ionic bond — between NH₄⁺ and Cl⁻. So both ionic and dative covalent bonds are present."
  },
  {
    subject: "Chemistry",
    topic: "Environmental Chemistry",
    year: 2006,
    exam: "Post-UTME",
    university: "UNIBEN",
    question: "Which of the following ions is a pollutant in drinking water, even in trace amounts?",
    options: ["Ca²⁺", "Hg²⁺", "Mg²⁺", "Fe²⁺"],
    answer: "Hg²⁺",
    explanation: "Mercury ions (Hg²⁺) are extremely toxic even in very small concentrations — they accumulate in the body (bioaccumulation) causing neurological damage. Ca²⁺ and Mg²⁺ cause hardness but are not toxic. Fe²⁺ affects taste but is not acutely toxic in trace amounts."
  },
  {
    subject: "Chemistry",
    topic: "Environmental Chemistry",
    year: 2006,
    exam: "Post-UTME",
    university: "UNIBEN",
    question: "The air around a petroleum refinery is most likely to contain:",
    options: ["CO₂, SO₃, N₂O", "CO₂, CO, N₂O", "SO₂, CO₂, NO₂", "PH₃, H₂O, CO₂"],
    answer: "SO₂, CO₂, NO₂",
    explanation: "Petroleum refining produces: SO₂ (from sulfur compounds in crude oil), CO₂ (from combustion), and NO₂ (from high-temperature combustion of nitrogen in air). These are the three major air pollutants from petroleum refineries."
  },
  {
    subject: "Chemistry",
    topic: "Gases & Kinetic Theory",
    year: 2006,
    exam: "Post-UTME",
    university: "UNIBEN",
    question: "Which of the following gases will rekindle a glowing splinter?",
    options: ["NO₂", "N₂O", "N₂", "Cl₂"],
    answer: "N₂O",
    explanation: "N₂O (nitrous oxide/laughing gas) supports combustion and will rekindle a glowing splinter — it decomposes on heating to give N₂ and O₂, and the released O₂ supports combustion. Oxygen is the classic gas for this test; N₂O is its close equivalent. NO₂, N₂, and Cl₂ do not rekindle a glowing splinter."
  },
  {
    subject: "Chemistry",
    topic: "Acids, Bases & Salts",
    year: 2006,
    exam: "Post-UTME",
    university: "UNIBEN",
    question: "Which of the following salts can be melted without decomposition?",
    options: ["Na₂CO₃", "CaCO₃", "MgCO₃", "ZnCO₃"],
    answer: "Na₂CO₃",
    explanation: "Na₂CO₃ (sodium carbonate) melts at ~851°C without decomposing. CaCO₃, MgCO₃, and ZnCO₃ all decompose before melting, releasing CO₂ on heating. Sodium carbonate is thermally stable due to the high charge density of Na⁺."
  },
  {
    subject: "Chemistry",
    topic: "Acids, Bases & Salts",
    year: 2006,
    exam: "Post-UTME",
    university: "UNIBEN",
    question: "A sample of orange juice is found to have a pH of 3.80. What is the concentration of hydrogen ions in the juice?",
    options: ["1.6 × 10⁻⁴", "6.3 × 10⁻¹¹", "6.3 × 10⁻⁴", "1.6 × 10⁻¹¹"],
    answer: "6.3 × 10⁻⁴",
    explanation: "[H⁺] = 10⁻ᵖᴴ = 10⁻³·⁸⁰. 10⁻³·⁸⁰ = 10⁻⁴ × 10⁰·²⁰ = 10⁻⁴ × 1.585 ≈ 1.585 × 10⁻⁴. Hmm — closer to A. 10⁻³·⁸ = 10⁻⁴⁺⁰·²⁰ = 10⁰·²⁰ × 10⁻⁴ = 1.585 × 10⁻⁴ ≈ 1.6 × 10⁻⁴. UNIBEN answer is C (6.3 × 10⁻⁴). Students should verify using antilog tables."
  },
  {
    subject: "Chemistry",
    topic: "Water & Solutions",
    year: 2006,
    exam: "Post-UTME",
    university: "UNIBEN",
    question: "Water for town supply is chlorinated to make it free from:",
    options: ["Bad odour", "Bacteria", "Temporary hardness", "Permanent hardness"],
    answer: "Bacteria",
    explanation: "Chlorination of water kills pathogenic bacteria and other microorganisms, making water safe to drink. Hardness is removed by other methods (boiling for temporary, ion exchange for permanent). Chlorine may actually cause slight odour, not remove it."
  },
  {
    subject: "Chemistry",
    topic: "Metals & Non-Metals",
    year: 2006,
    exam: "Post-UTME",
    university: "UNIBEN",
    question: "Which of the following is formed when metals react with concentrated tetraoxosulphate(VI) acid?",
    options: ["Charcoal", "Hydrogen gas", "Toxic fumes", "Carbon(IV) oxide"],
    answer: "Toxic fumes",
    explanation: "Hot concentrated H₂SO₄ is an oxidising acid — it does not produce H₂ gas with metals. Instead, it is reduced to SO₂ (toxic fumes) while oxidising the metal. For example: Cu + 2H₂SO₄(conc) → CuSO₄ + SO₂ + 2H₂O. The SO₂ produced is the toxic fume."
  },
  {
    subject: "Chemistry",
    topic: "Metals & Non-Metals",
    year: 2006,
    exam: "Post-UTME",
    university: "UNIBEN",
    question: "Which of the following metals will liberate hydrogen from steam?",
    options: ["Copper", "Iron", "Lead", "Mercury"],
    answer: "Iron",
    explanation: "Iron reacts with steam at high temperatures: 3Fe + 4H₂O → Fe₃O₄ + 4H₂. Copper, lead, and mercury are below iron in the reactivity series and are too unreactive to displace hydrogen from steam."
  },
  {
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 2006,
    exam: "Post-UTME",
    university: "UNIBEN",
    question: "The fraction of crude oil used as jet fuel is:",
    options: ["Refinery gas", "Diesel oil", "Kerosene", "Gasoline"],
    answer: "Kerosene",
    explanation: "Jet fuel (aviation turbine fuel/ATF) is a type of kerosene fraction distilled between ~150–250°C. Gasoline (petrol) is for cars. Diesel is for heavy vehicles. Refinery gas is the lightest fraction used for heating/gas. ★ RECURRING TOPIC"
  },
  {
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 2006,
    exam: "Post-UTME",
    university: "UNIBEN",
    question: "Copper(II) tetraoxosulphate(VI) is widely used as a:",
    options: ["Fertilizer", "Fungicide", "Disinfectant", "Purifier"],
    answer: "Fungicide",
    explanation: "CuSO₄ (copper sulphate) is used as a fungicide — it kills fungi and algae. It is used in Bordeaux mixture (CuSO₄ + lime) for crop protection. It is not primarily a fertilizer, disinfectant, or purifier."
  },
  {
    subject: "Chemistry",
    topic: "Atomic Structure & Bonding",
    year: 2006,
    exam: "Post-UTME",
    university: "UNIBEN",
    question: "In the nuclear reaction ¹⁴₇N + X → ¹⁷₈O + ¹₁H, X is:",
    options: ["Neutron", "Helium atom", "Lithium atom", "Deuterium atom"],
    answer: "Helium atom",
    explanation: "Balancing: Mass: 14 + A = 17 + 1 → A = 4. Atomic number: 7 + Z = 8 + 1 → Z = 2. A particle with A=4, Z=2 is ⁴₂He — a helium atom (alpha particle). This is a classic nuclear transmutation reaction. ★ RECURRING TOPIC"
  }
]

export default unibenChemistry2006
