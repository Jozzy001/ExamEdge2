// UNIBEN Post-UTME 2008/2009 — Chemistry
// 17 questions from General Paper
// Faculty: Engineering & Physical Sciences
// Analysis: CO poisoning ★RECURRING, petroleum ★RECURRING, separation techniques ★RECURRING
//           Plaster of Paris formula, tin as reducing agent, butan-2-ol oxidation

const unibenChem2008 = [
  {
    subject: "Chemistry", topic: "Organic Chemistry", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Ethanoic acid is found in:",
    options: ["Salicylic acid", "Palm wine", "Lemon", "Crude oil"],
    answer: "Palm wine",
    explanation: "Ethanoic acid (acetic acid, CH₃COOH) is produced during the fermentation of palm wine — the souring process. Lemon contains citric acid. Salicylic acid is a separate compound. Crude oil contains hydrocarbons, not ethanoic acid."
  },
  {
    subject: "Chemistry", topic: "Carbon & Its Compounds", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Graphite occurs naturally as:",
    options: ["Dolomite", "Limonite", "Plumbago", "Chalcopyrite"],
    answer: "Plumbago",
    explanation: "Graphite's natural mineral name is plumbago (also called black lead). Dolomite is CaMg(CO₃)₂; limonite is an iron ore; chalcopyrite is a copper-iron sulfide ore — none of these are forms of graphite."
  },
  {
    subject: "Chemistry", topic: "Metals & Non-Metals", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Carbon(II) oxide is poisonous to many animals because:",
    options: [
      "It combines with oxygen from the air",
      "It combines reversibly with haemoglobin",
      "It combines irreversibly with haemoglobin",
      "It forms oxalic acid in the lungs"
    ],
    answer: "It combines irreversibly with haemoglobin",
    explanation: "CO binds to haemoglobin ~250 times more strongly than O₂, forming carboxyhaemoglobin (COHb). This binding is irreversible under normal conditions — preventing haemoglobin from carrying oxygen and causing suffocation. ★ RECURRING TOPIC — appeared in 2009/2010 as well."
  },
  {
    subject: "Chemistry", topic: "Acids, Bases & Salts", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The purest form of silica is:",
    options: ["Flint", "Opal", "Quartz", "ZnSiO₃"],
    answer: "Quartz",
    explanation: "Quartz (crystalline SiO₂) is the purest natural form of silica. Flint is an impure cryptocrystalline silica. Opal contains water. ZnSiO₃ is zinc silicate, not silica."
  },
  {
    subject: "Chemistry", topic: "Water & Solutions", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Plaster of Paris (POP), used for making casts in hospitals, is:",
    options: ["CaSO₄·2H₂O", "CaSO₄·H₂O", "CaSO₄·3H₂O", "CaSO₄·4H₂O"],
    answer: "CaSO₄·H₂O",
    explanation: "Plaster of Paris is calcium sulphate hemihydrate: CaSO₄·½H₂O (often written as 2CaSO₄·H₂O). UNIBEN's answer B (CaSO₄·H₂O) is the closest representation. When mixed with water, POP sets hard by reabsorbing water to form gypsum (CaSO₄·2H₂O). ★ RECURRING TOPIC."
  },
  {
    subject: "Chemistry", topic: "Metals & Non-Metals", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Which of the following compounds of tin is a strong reducing agent?",
    options: ["SnCl₂", "SnCl₄", "SnO₂", "SnH₄"],
    answer: "SnCl₂",
    explanation: "SnCl₂ (tin(II) chloride) is a strong reducing agent because Sn²⁺ is readily oxidised to Sn⁴⁺ — it donates electrons easily. SnCl₄ is already in the +4 state (tin's maximum oxidation state) and cannot be oxidised further, so it cannot act as a reducing agent."
  },
  {
    subject: "Chemistry", topic: "Metals & Non-Metals", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Which of the following will NOT form complexes with zinc?",
    options: ["Ammonia", "Trioxonitrate(V) ions", "Cyanide ions", "Halide ions"],
    answer: "Trioxonitrate(V) ions",
    explanation: "Zinc forms well-known complexes with: ammonia [Zn(NH₃)₄]²⁺, cyanide [Zn(CN)₄]²⁻, and halide ions [ZnCl₄]²⁻. Trioxonitrate(V) (NO₃⁻) ions are poor ligands and do not form stable complexes with zinc due to their weak donor ability."
  },
  {
    subject: "Chemistry", topic: "Organic Chemistry", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Methane and paraffin wax are similar in many ways. The main reason they differ chemically is that:",
    options: [
      "One is a gas and the other is a solid",
      "Their products of complete combustion differ",
      "One is a hydrocarbon while the other is not",
      "They come from different sources"
    ],
    answer: "One is a gas and the other is a solid",
    explanation: "Both methane (CH₄) and paraffin wax (long-chain alkanes ~C₂₀-C₄₀) are hydrocarbons from the alkane family. Their combustion products are both CO₂ and H₂O. The main chemical difference is their physical state — determined by chain length, which affects intermolecular forces. UNIBEN answer is A."
  },
  {
    subject: "Chemistry", topic: "Environmental Chemistry", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Pollution from petroleum spillage in rivers and lakes can best be dispersed by:",
    options: ["Pouring detergents", "Passing ships through the water", "Pouring organic solvents", "Evaporation"],
    answer: "Pouring detergents",
    explanation: "Detergents (dispersants) are used to break up oil spills into tiny droplets that can be dispersed in water, making the oil accessible to microbial degradation. This is the standard method used in oil spill response (e.g. Corexit was used in the Deepwater Horizon spill)."
  },
  {
    subject: "Chemistry", topic: "Stoichiometry & Moles", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "A mixture of 12 g of carbon and 64 g of sulfur reacts completely to form carbon disulfide. What mass of the product is formed?",
    options: ["152 g", "15.2 g", "76 g", "760 g"],
    answer: "76 g",
    explanation: "C + 2S → CS₂. Moles C = 12/12 = 1 mol. Moles S = 64/32 = 2 mol. Ratio is exactly 1:2 — both completely consumed. M(CS₂) = 12 + 2(32) = 76 g/mol. 1 mol CS₂ = 76 g. By conservation of mass: 12 + 64 = 76 g ✓."
  },
  {
    subject: "Chemistry", topic: "Metals & Non-Metals", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Water is poured on a white solid and a colourless gas is evolved which burns with a sooty flame. The white solid is:",
    options: ["Calcium", "Calcium oxide", "Calcium carbide", "Sodium peroxide"],
    answer: "Calcium carbide",
    explanation: "Calcium carbide (CaC₂) + H₂O → Ca(OH)₂ + C₂H₂ (acetylene/ethyne). Acetylene is a colourless gas that burns with a very sooty (luminous yellow) flame due to its high carbon content. Calcium + water gives hydrogen (burns with blue flame). Calcium oxide + water gives heat only."
  },
  {
    subject: "Chemistry", topic: "Separation Techniques", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "A brand of ink containing cobalt(II) chloride and iron(II) ions can be separated into its components by:",
    options: ["Fractional crystallization", "Fractional distillation", "Sublimation", "Chromatography"],
    answer: "Chromatography",
    explanation: "Chromatography separates mixtures based on how different components move through a stationary phase when carried by a mobile phase. It is ideal for separating dissolved ionic components of ink. ★ RECURRING TOPIC — chromatography for separating similar dissolved substances."
  },
  {
    subject: "Chemistry", topic: "Rates of Reaction", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Which of the following factors does NOT affect the rate of a chemical reaction between non-gaseous reactants?",
    options: [
      "Temperature of the reaction mixture",
      "Presence of a catalyst",
      "Surface area of reactants",
      "Colour of the product"
    ],
    answer: "Colour of the product",
    explanation: "Rate of reaction depends on: temperature (more energy → more collisions), catalyst (lowers activation energy), surface area (more contact area → more collisions), concentration/pressure. Colour of the product is a physical property that has absolutely no effect on reaction rate. ★ RECURRING TOPIC."
  },
  {
    subject: "Chemistry", topic: "Organic Chemistry", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Butan-2-ol is a secondary alcohol. Its complete oxidation produces:",
    options: ["Butane", "Butanol", "Butan-2-one", "Butanoic acid"],
    answer: "Butan-2-one",
    explanation: "Secondary alcohols are oxidised to ketones (not carboxylic acids). Butan-2-ol (CH₃CHOHCH₂CH₃) → butan-2-one (CH₃COCH₂CH₃) using oxidising agents like K₂Cr₂O₇/H₂SO₄. Primary alcohols give aldehydes/carboxylic acids; secondary give ketones; tertiary cannot be easily oxidised."
  },
  {
    subject: "Chemistry", topic: "Organic Chemistry", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The main constituents of petroleum are:",
    options: ["Alkanes", "Alkynes", "Gases", "Hydrocarbons"],
    answer: "Hydrocarbons",
    explanation: "Petroleum is a complex mixture primarily of hydrocarbons — both alkanes and cycloalkanes (and some aromatic compounds). While alkanes are the most abundant type, 'hydrocarbons' is the most accurate broad answer. Alkynes are rarely found in crude oil. ★ RECURRING TOPIC."
  },
  {
    subject: "Chemistry", topic: "Acids, Bases & Salts", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The measure of the degree of disorderliness in a chemical system is known as:",
    options: ["Activation energy", "Enthalpy", "Entropy", "Free energy"],
    answer: "Entropy",
    explanation: "Entropy (S) is a thermodynamic measure of the degree of disorder or randomness in a system. High entropy = more disorder. The 2nd Law of Thermodynamics states that total entropy of the universe increases in spontaneous processes."
  },
  {
    subject: "Chemistry", topic: "Redox Reactions", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Oxidation is the process of:",
    options: ["Gain of electrons", "Loss of electrons", "Gain of hydrogen", "Loss of oxygen"],
    answer: "Loss of electrons",
    explanation: "Oxidation = Loss of electrons (OIL — Oxidation Is Loss). In terms of hydrogen and oxygen: oxidation also involves loss of hydrogen OR gain of oxygen. However, the most fundamental and universal definition is LOSS OF ELECTRONS. The electronic definition applies to all redox reactions."
  }
]

export default unibenChem2008
