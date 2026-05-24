// UNIBEN Post-UTME 2009/2010 — Chemistry
// 15 questions from General Paper
// Faculty: Engineering & Physical Sciences
// Analysis: Half-life ★RECURRING, separation techniques ★RECURRING,
//           CO poisoning ★RECURRING, alloys ★RECURRING, Bunsen flame ★RECURRING,
//           air pollutants ★RECURRING, alkyne identification

const unibenChem2009 = [
  {
    subject: "Chemistry", topic: "Separation Techniques", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    isHotTopic: true,
    faculty: ["engineering", "physicalsciences"],
    question: "A soluble salt dissolved in water can be separated by:",
    options: ["Evaporation", "Crystallization", "Filtration", "Steam distillation"],
    answer: "Crystallization",
    explanation: "A soluble salt dissolved in water is best separated by crystallization — evaporating some water to form a saturated solution, then cooling to allow crystals to form. Simple evaporation to dryness may decompose heat-sensitive salts. Filtration removes insoluble solids, not dissolved ones. ★ RECURRING TOPIC."
  },
  {
    subject: "Chemistry", topic: "Atomic Structure & Bonding", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The atomicity of ozone is:",
    options: ["1", "2", "3", "4"],
    answer: "3",
    explanation: "Atomicity is the number of atoms in one molecule. Ozone is O₃ — three oxygen atoms per molecule. Atomicity = 3. Oxygen (O₂) has atomicity 2; ozone (O₃) has atomicity 3."
  },
  {
    subject: "Chemistry", topic: "Atomic Structure & Bonding", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The nucleus of an atom is composed of:",
    options: [
      "Positively charged protons",
      "Negatively charged electrons",
      "Neutrons",
      "Protons and neutrons"
    ],
    answer: "Protons and neutrons",
    explanation: "The nucleus contains protons (positively charged) and neutrons (no charge). Electrons orbit the nucleus in shells — they are NOT in the nucleus. The total number of protons + neutrons = mass number."
  },
  {
    subject: "Chemistry", topic: "Atomic Structure & Bonding", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The following are metals EXCEPT:",
    options: ["Silicon", "Tin", "Lead", "Chromium"],
    answer: "Silicon",
    explanation: "Silicon (Si) is a metalloid/semiconductor — it has properties between metals and non-metals. It has a metallic lustre but is brittle and is a semiconductor. Tin (Sn), Lead (Pb), and Chromium (Cr) are all true metals."
  },
  {
    subject: "Chemistry", topic: "Acids, Bases & Salts", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Which of the following statements is true?\nI. All ammonium salts are soluble in water.\nII. All tetraoxocarbonate(IV) salts are insoluble in water.\nIII. Some trioxonitrate(V) salts are soluble in water.",
    options: ["I only", "II only", "III only", "I and III only"],
    answer: "I only",
    explanation: "I — TRUE: All ammonium salts (NH₄⁺) are soluble. II — FALSE: Na₂CO₃ and K₂CO₃ are soluble carbonates. III — FALSE: ALL trioxonitrate(V) (nitrate) salts are soluble — not just some. Therefore only Statement I is correct."
  },
  {
    subject: "Chemistry", topic: "Atomic Structure & Bonding", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    isHotTopic: true,
    faculty: ["engineering", "physicalsciences"],
    question: "The half-life of an element is 12 hours. If the initial mass is 50 g, what mass will remain after 2 days?",
    options: ["3.125 g", "6.25 g", "12.5 g", "25 g"],
    answer: "3.125 g",
    explanation: "2 days = 48 hours. Number of half-lives = 48/12 = 4. Remaining mass = 50 × (½)⁴ = 50 × 1/16 = 3.125 g. ★ RECURRING TOPIC — appeared in 2005/2006."
  },
  {
    subject: "Chemistry", topic: "Thermochemistry", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Water was added to sodium hydroxide in a test tube, and the test tube became cold. The reaction is:",
    options: ["Reversible", "Exothermic", "Endothermic", "Explosive"],
    answer: "Endothermic",
    explanation: "Note: NaOH dissolving in water is actually EXOTHERMIC (test tube becomes HOT, not cold). The question states 'test tube became cold' — this would indicate an endothermic reaction. If the test tube became cold, the answer is endothermic. UNIBEN answer is C. Students: NaOH + water normally gives heat — verify if the question involves a different reaction."
  },
  {
    subject: "Chemistry", topic: "Metals & Non-Metals", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    isHotTopic: true,
    faculty: ["engineering", "physicalsciences"],
    question: "Which of the following is an alloy of aluminium?",
    options: ["Brass", "Bronze", "Galena", "Magnalium"],
    answer: "Magnalium",
    explanation: "Magnalium is an alloy of aluminium (about 90%) and magnesium (about 10%). Brass is copper + zinc. Bronze is copper + tin. Galena is lead sulfide ore (PbS) — not an alloy at all. ★ RECURRING TOPIC — alloys appeared in 2005/2006."
  },
  {
    subject: "Chemistry", topic: "Organic Chemistry", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Which of the following is an alkyne?",
    options: ["C₅H₈", "C₁₀H₂₁", "C₈H₁₆", "C₅H₁₂"],
    answer: "C₅H₈",
    explanation: "Alkyne general formula: CₙH₂ₙ₋₂. C₅H₈: 2(5)−2 = 8 ✓ (pent-1-yne). C₁₀H₂₁: odd number of H — not possible for a simple hydrocarbon. C₈H₁₆: CₙH₂ₙ = alkene or cycloalkane. C₅H₁₂: CₙH₂ₙ₊₂ = alkane. Answer: C₅H₈."
  },
  {
    subject: "Chemistry", topic: "Organic Chemistry", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Pick out the odd compound.",
    options: ["Toluene", "Phenol", "Ethanol", "Benzene"],
    answer: "Ethanol",
    explanation: "Toluene (methylbenzene), phenol (hydroxybenzene), and benzene are all aromatic compounds — they contain a benzene ring. Ethanol (C₂H₅OH) is an aliphatic (non-aromatic) alcohol. Ethanol is the odd one out as it has no benzene ring."
  },
  {
    subject: "Chemistry", topic: "Gases & Kinetic Theory", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Which of the following statements is correct?",
    options: [
      "The randomness of molecules is less in liquids than in solids",
      "Diffusion does not occur in solids at all temperatures",
      "The intermolecular forces are weaker in liquids than in solids",
      "The pressure of a gas is the combined force with which gas molecules collide with one another"
    ],
    answer: "The intermolecular forces are weaker in liquids than in solids",
    explanation: "C is correct: intermolecular forces decrease from solid → liquid → gas. Solids have the strongest forces (fixed positions); liquids have weaker forces (can flow). A is wrong: liquids are MORE random than solids. B is wrong: diffusion occurs in solids (very slowly). D is wrong: gas pressure comes from collisions with container walls, not with each other."
  },
  {
    subject: "Chemistry", topic: "Laboratory Techniques", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    isHotTopic: true,
    faculty: ["engineering", "physicalsciences"],
    question: "Which of the following zones is NOT part of a non-luminous Bunsen flame?",
    options: [
      "Blue zone",
      "Unburnt gas zone",
      "Bright yellow luminous zone",
      "Non-luminous zone"
    ],
    answer: "Bright yellow luminous zone",
    explanation: "The non-luminous (blue) Bunsen flame has: unburnt gas zone (base), blue inner cone zone (partial combustion), and the outer non-luminous zone (complete combustion). The bright yellow luminous zone only appears in the LUMINOUS flame (air hole closed) — it is NOT part of the non-luminous flame. ★ RECURRING TOPIC."
  },
  {
    subject: "Chemistry", topic: "Environmental Chemistry", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    isHotTopic: true,
    faculty: ["engineering", "physicalsciences"],
    question: "Which of the following is a secondary air pollutant?",
    options: ["Particulate dust", "Sulfur oxides", "Ozone", "Chlorofluorocarbon"],
    answer: "Ozone",
    explanation: "Primary pollutants are emitted directly (dust, SO₂, NOₓ, CFCs). Secondary pollutants form in the atmosphere through reactions. Ozone (O₃) in the troposphere is a secondary pollutant formed when NOₓ and volatile organic compounds react in sunlight (photochemical smog). ★ RECURRING TOPIC."
  },
  {
    subject: "Chemistry", topic: "Metals & Non-Metals", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Ammonia can be obtained from diammonium tetraoxosulfate(VI) by heating it with:",
    options: ["Dilute HCl", "Concentrated H₂SO₄", "CuSO₄", "NaOH"],
    answer: "NaOH",
    explanation: "(NH₄)₂SO₄ + 2NaOH → Na₂SO₄ + 2NH₃ + 2H₂O. Heating ammonium salts with a strong alkali (NaOH) displaces ammonia gas. This is the standard laboratory method for producing ammonia from ammonium salts."
  },
  {
    subject: "Chemistry", topic: "Organic Chemistry", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Which of the following compounds is a soapless detergent?",
    options: ["C₁₂H₂₅OSO₃Na", "C₁₇H₃₅COONa", "C₆H₅OH", "C₄H₉COOC₂H₅"],
    answer: "C₁₂H₂₅OSO₃Na",
    explanation: "Soapless detergents are sodium alkyl sulphates (R-OSO₃Na) or sodium alkylbenzene sulphonates. C₁₂H₂₅OSO₃Na is sodium dodecyl sulphate — a classic soapless detergent. C₁₇H₃₅COONa (sodium stearate) is soap. C₆H₅OH is phenol. C₄H₉COOC₂H₅ is an ester."
  }
]

export default unibenChem2009
