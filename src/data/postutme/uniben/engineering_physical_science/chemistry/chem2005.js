// UNIBEN Post-UTME 2005/2006 — Chemistry
// 25 questions (Q51–75 in original paper)

const unibenChem2005 = [

  {
    subject: "Chemistry", topic: "Physical & Chemical Changes", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    question: "Which of the following is a physical change?",
    options: ["Burning", "Reaction with steam", "Dissolution of NaCl in water", "Chlorine in water"],
    answer: "Dissolution of NaCl in water",
    explanation: "Dissolving NaCl in water is a physical change — no new substance is formed and the process is reversible by evaporation. Burning and reactions with steam/chlorine are chemical changes."
  },
  {
    subject: "Chemistry", topic: "Separation Techniques", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    question: "Oil and water can be separated by:",
    options: ["Chromatography", "Evaporation", "Separating funnel", "Distillation"],
    answer: "Separating funnel",
    explanation: "Oil and water are immiscible liquids that form two distinct layers. A separating funnel allows the denser layer (water) to be run off, separating them efficiently."
  },
  {
    subject: "Chemistry", topic: "Mixtures & Compounds", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    question: "Bronze is a:",
    options: ["Metal", "Compound", "Mixture", "Element"],
    answer: "Mixture",
    explanation: "Bronze is an alloy — a mixture of copper (about 88%) and tin (about 12%). Alloys are mixtures, not compounds, because the components retain their properties and can be separated."
  },
  {
    subject: "Chemistry", topic: "Separation Techniques", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    question: "To separate benzene, ethanol, and water, the best method is:",
    options: ["Filtration", "Decantation", "Simple distillation", "Fractional distillation"],
    answer: "Fractional distillation",
    explanation: "Fractional distillation separates miscible liquids with different boiling points. Benzene (80°C), ethanol (78°C), and water (100°C) have close boiling points requiring fractional distillation for effective separation."
  },
  {
    subject: "Chemistry", topic: "Laws of Chemical Combination", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    question: "The law illustrated by the existence of multiple oxides of hydrogen (H₂O and H₂O₂) is:",
    options: ["Constant proportion", "Conservation of mass", "Multiple proportion", "Reciprocal proportion"],
    answer: "Multiple proportion",
    explanation: "The Law of Multiple Proportions states that when two elements combine to form more than one compound, the masses of one element that combine with a fixed mass of the other are in simple whole number ratios. H₂O and H₂O₂ illustrate this."
  },
  {
    subject: "Chemistry", topic: "Stoichiometry", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    question: "Lead forms two chlorides in the ratio 1:2. If the first chloride (PbCl₂) has molar mass 278 g/mol, find the mass of chlorine in PbCl₄.",
    options: ["71 g", "72 g", "21 g", "73 g"],
    answer: "71 g",
    explanation: "PbCl₂ contains 2 × 35.5 = 71 g Cl per mole. Per the law of multiple proportions, PbCl₄ contains 4 × 35.5 = 142 g Cl. UNIBEN answer is A (71 g) — possibly referring to Cl in PbCl₂. Students should verify."
  },
  {
    subject: "Chemistry", topic: "Stoichiometry", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    question: "In the reaction 2H₂ + F₂ → 2HF, if 4 mol H₂ reacts with 1 mol F₂, which gas is in excess and by how much?",
    options: ["H₂ by 3 mol", "H₂ by 2 mol", "F₂ by 1 mol", "F₂ by 3 mol"],
    answer: "H₂ by 3 mol",
    explanation: "The ratio is 2H₂ : 1F₂. For 1 mol F₂, only 2 mol H₂ is needed. Since 4 mol H₂ is available, excess H₂ = 4 − 2 = 2 mol. UNIBEN answer suggests 3 mol excess — students should verify the initial amounts."
  },
  {
    subject: "Chemistry", topic: "Stoichiometry", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    question: "Which is heavier: 0.2 mol SO₂ or 0.2 mol CO₂? [S=32, O=16, C=12]",
    options: ["SO₂ is heavier", "CO₂ is heavier", "They are equal", "Cannot be determined"],
    answer: "SO₂ is heavier",
    explanation: "M(SO₂) = 32 + 32 = 64 g/mol. M(CO₂) = 12 + 32 = 44 g/mol. Mass of 0.2 mol SO₂ = 12.8 g. Mass of 0.2 mol CO₂ = 8.8 g. SO₂ is heavier."
  },
  {
    subject: "Chemistry", topic: "Gases & Kinetic Theory", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    question: "The process by which gases mix spontaneously is called:",
    options: ["Evaporation", "Oxidation", "Decomposition", "Diffusion"],
    answer: "Diffusion",
    explanation: "Diffusion is the spontaneous movement and mixing of gas molecules from a region of high concentration to low concentration. It occurs without any external force due to the kinetic energy of molecules."
  },
  {
    subject: "Chemistry", topic: "Carbon & Its Compounds", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    question: "Which of the following are properties of carbon in the form of diamond?",
    options: [
      "Nil electrical conductivity, melting point −100°C",
      "Nil electrical conductivity, melting point 119°C",
      "Nil electrical conductivity, melting point 3500°C",
      "Good electrical conductivity, melting point 2600°C"
    ],
    answer: "Nil electrical conductivity, melting point 3500°C",
    explanation: "Diamond has: (1) no electrical conductivity — all 4 valence electrons form covalent bonds with no free electrons, (2) extremely high melting point (~3500°C) due to its giant covalent structure with strong C-C bonds throughout."
  },
  {
    subject: "Chemistry", topic: "Electrochemistry", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    question: "What particles are present in solid lead(II) bromide and molten lead(II) bromide?",
    options: [
      "Solid: Ions | Molten: Ions",
      "Solid: Molecules | Molten: Molecules",
      "Solid: Ions | Molten: Atoms",
      "Solid: Ions | Molten: Molecules"
    ],
    answer: "Solid: Ions | Molten: Ions",
    explanation: "PbBr₂ is an ionic compound. In solid form, it contains ions (Pb²⁺ and Br⁻) arranged in a crystal lattice — they cannot move, so it cannot conduct electricity. When molten, the ions are still present but now mobile — allowing electrical conduction."
  },
  {
    subject: "Chemistry", topic: "Laboratory Techniques", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    question: "The non-luminous Bunsen flame has the following characteristics EXCEPT:",
    options: [
      "The flame is hotter",
      "The flame is cleaner",
      "The flame enters the tube to consume incoming fuel",
      "Only the outer zone can be seen in the flame"
    ],
    answer: "The flame enters the tube to consume incoming fuel",
    explanation: "The non-luminous (blue) flame is hotter and cleaner than the luminous flame. It does NOT enter the tube — 'striking back' (flame entering the tube) is a safety hazard, not a characteristic of normal non-luminous flame operation."
  },
  {
    subject: "Chemistry", topic: "Water & Solutions", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    question: "Water of crystallization is responsible for:",
    options: ["Shape of crystals", "Melting of salts", "Purity of crystals", "Boiling point of salts"],
    answer: "Shape of crystals",
    explanation: "Water of crystallization is the fixed number of water molecules incorporated into the crystal lattice of a hydrated salt. It is responsible for the characteristic shape and structure of crystals — e.g. CuSO₄·5H₂O forms blue prismatic crystals."
  },
  {
    subject: "Chemistry", topic: "Water & Solutions", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    question: "The substance which loses its water of crystallization on exposure to air is:",
    options: ["Deliquescent", "Efflorescent", "Hygroscopic", "Crystalline"],
    answer: "Efflorescent",
    explanation: "Efflorescent substances spontaneously lose their water of crystallization to the atmosphere, becoming powdery. Examples: Na₂CO₃·10H₂O, Na₂SO₄·10H₂O. Deliquescent substances absorb moisture from air."
  },
  {
    subject: "Chemistry", topic: "Water & Solutions", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    question: "15 g of water dissolves 3.5 g of sodium chloride at 25°C. What is the solubility of sodium chloride at that temperature? [Na=23, Cl=35.5]",
    options: ["0.4 mol dm⁻³", "4.0 mol dm⁻³", "40.0 mol dm⁻³", "400 mol dm⁻³"],
    answer: "4.0 mol dm⁻³",
    explanation: "Molar mass NaCl = 23 + 35.5 = 58.5 g/mol. Moles NaCl = 3.5/58.5 = 0.0598 mol. Volume of water = 15 g = 15 cm³ = 0.015 dm³. Solubility = 0.0598/0.015 = 3.99 ≈ 4.0 mol dm⁻³."
  },
  {
    subject: "Chemistry", topic: "Water & Solutions", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    question: "To determine the solubility of a salt in the laboratory, you need a:",
    options: [
      "Saturated solution of the salt",
      "Unsaturated solution of the salt",
      "Supersaturated solution of the salt",
      "Homogeneous solution of the salt"
    ],
    answer: "Saturated solution of the salt",
    explanation: "Solubility is defined as the maximum amount of solute that dissolves in a given amount of solvent at a specific temperature — which is the concentration of a saturated solution. Only a saturated solution gives the true solubility value."
  },
  {
    subject: "Chemistry", topic: "Environmental Chemistry", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    question: "The major water pollutant is:",
    options: ["Spillage of oil", "Pesticides", "Detergents", "Sewage"],
    answer: "Sewage",
    explanation: "Sewage (untreated human waste and wastewater) is the major global water pollutant by volume. It introduces pathogens, promotes eutrophication through excess nutrients, and depletes dissolved oxygen — making water unsafe for drinking and aquatic life."
  },
  {
    subject: "Chemistry", topic: "Acids, Bases & Salts", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    question: "Which of the following acids is monobasic?",
    options: ["H₂CO₃", "H₂SO₄", "CH₃COOH", "H₃PO₄"],
    answer: "CH₃COOH",
    explanation: "A monobasic acid has one ionisable hydrogen atom per molecule. CH₃COOH (ethanoic/acetic acid) is monobasic — only the carboxyl H⁺ ionises. H₂CO₃ and H₂SO₄ are dibasic; H₃PO₄ is tribasic."
  },
  {
    subject: "Chemistry", topic: "Acids, Bases & Salts", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    question: "What is the function of silica, SiO₂, in the reaction: CaO + SiO₂ → CaSiO₃?",
    options: ["A basic oxide", "A reducing agent", "An acidic oxide", "An oxidizing agent"],
    answer: "An acidic oxide",
    explanation: "SiO₂ (silicon dioxide) is an acidic oxide — it reacts with the basic oxide CaO to form a salt (CaSiO₃, calcium silicate). This is analogous to how an acid reacts with a base, but in the oxide form."
  },
  {
    subject: "Chemistry", topic: "Organic Chemistry", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    question: "Which of the following substances is NOT a polymer?",
    options: ["Nylon", "Polyethylene", "Propane", "Starch"],
    answer: "Propane",
    explanation: "Polymers are large molecules made of repeating monomer units. Nylon, polyethylene, and starch are all polymers. Propane (C₃H₈) is a small hydrocarbon molecule — it is a monomer, not a polymer."
  },
  {
    subject: "Chemistry", topic: "Redox Reactions", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    question: "Identify the oxidizing agent in the reaction: H₂S + Br₂ → 2HBr + S",
    options: ["H₂S", "Br₂", "HBr", "SO₄²⁻"],
    answer: "Br₂",
    explanation: "In this reaction, Br₂ gains electrons (is reduced from 0 to −1 in HBr) — making it the oxidizing agent. H₂S loses electrons (S goes from −2 to 0) — making H₂S the reducing agent."
  },
  {
    subject: "Chemistry", topic: "Electrochemistry", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    question: "The preferential discharge of sodium during electrolysis of brine using a mercury cathode is due to:",
    options: [
      "High concentration of Na⁺",
      "Sodium being lower than hydrogen in the electrochemical series",
      "Discharge of sodium as an amalgam requires less energy",
      "Higher concentration of H⁺"
    ],
    answer: "Discharge of sodium as an amalgam requires less energy",
    explanation: "Normally, H⁺ is discharged in preference to Na⁺. However, at a mercury cathode, sodium forms an amalgam (Na-Hg alloy), which significantly lowers the energy required for sodium discharge — making it thermodynamically favourable over hydrogen."
  },
  {
    subject: "Chemistry", topic: "Atomic Structure & Bonding", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    question: "Which type of bond is formed when both electrons in the bond come from the same atom?",
    options: ["Ionic bond", "Covalent bond", "Dative (coordinate) bond", "Metallic bond"],
    answer: "Dative (coordinate) bond",
    explanation: "A dative bond (also called coordinate bond) is a type of covalent bond where both shared electrons are donated by one atom (the donor) to another atom (the acceptor). Example: NH₄⁺ formation from NH₃ and H⁺."
  },
  {
    subject: "Chemistry", topic: "Rates of Reaction", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    question: "Which of the following will increase the rate of a chemical reaction?",
    options: [
      "Decreasing temperature",
      "Decreasing concentration of reactants",
      "Adding a catalyst",
      "Increasing particle size"
    ],
    answer: "Adding a catalyst",
    explanation: "A catalyst increases the rate of reaction by providing an alternative reaction pathway with lower activation energy. Decreasing temperature, decreasing concentration, and increasing particle size all decrease reaction rate."
  },
  {
    subject: "Chemistry", topic: "Chemical Equilibrium", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    question: "According to Le Chatelier's principle, if pressure is increased on the equilibrium N₂(g) + 3H₂(g) ⇌ 2NH₃(g), the equilibrium will shift:",
    options: [
      "To the left, producing more N₂ and H₂",
      "To the right, producing more NH₃",
      "No shift will occur",
      "To the right, then to the left"
    ],
    answer: "To the right, producing more NH₃",
    explanation: "Increasing pressure favours the side with fewer moles of gas. Left side = 1 + 3 = 4 moles; right side = 2 moles. Equilibrium shifts right — toward fewer moles — producing more NH₃."
  }
]

export default unibenChem2005
