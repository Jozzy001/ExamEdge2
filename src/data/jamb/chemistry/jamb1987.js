// JAMB 1987 Chemistry Past Questions
// Fully audited — questions, answers, options, explanations, calculations, and app-safe formatting.
// Source-dependent corrections and reconstructed wording are marked with CHECK SOURCE.

const chemJamb1987 = [

  {
    id: 1,
    subject: "Chemistry",
    topic: "Separation Techniques",
    year: 1987,
    exam: "JAMB",
    question: "A brand of ink containing cobalt (II), copper (II) and iron ions can best be separated into its various components by",
    options: [
      "fractional crystallization",
      "fractional distillation",
      "sublimation",
      "chromatography"
    ],
    answer: "chromatography",
    explanation: "Chromatography is used to separate components of a mixture based on their different rates of movement between a stationary phase and a mobile phase."
  },

  {
    id: 2,
    subject: "Chemistry",
    topic: "Separation Techniques",
    year: 1987,
    exam: "JAMB",
    question: "Which of the following substances is a mixture?",
    options: [
      "Granulated sugar",
      "Sea-water",
      "Sodium chloride",
      "Iron filings"
    ],
    answer: "Sea-water",
    explanation: "Sea-water is a mixture because it contains water and several dissolved salts and other substances. Sodium chloride and sugar are pure compounds, while iron filings consist of an element."
  },

  {
    id: 3,
    subject: "Chemistry",
    topic: "Stoichiometry",
    year: 1987,
    exam: "JAMB",
    question: "The number of molecules of carbon(IV) oxide produced when 10.0 g of CaCO3 is treated with 0.2 dm3 of 1 M HCl according to the equation CaCO3 + 2HCl -> CaCl2 + H2O + CO2 is [Ca = 40, O = 16, C = 12, N_A = 6.02 x 10^23]",
    options: [
      "1.00 x 10^23",
      "6.02 x 10^23",
      "6.02 x 10^22",
      "6.02 x 10^21"
    ],
    answer: "6.02 x 10^22",
    explanation: "Moles of CaCO3 = 10.0 / 100 = 0.1 mol. Moles of HCl = 1 x 0.2 = 0.2 mol. The reaction requires 2 mol of HCl for every 1 mol of CaCO3, so 0.1 mol of CaCO3 reacts completely and produces 0.1 mol of CO2. Number of CO2 molecules = 0.1 x 6.02 x 10^23 = 6.02 x 10^22."
  },

  // CHECK SOURCE: The original scanned question is badly transcribed as
  // "mass of solid acetylene gas" and omits the quantity of acetylene.
  // The published answer/options indicate that 1000 cm3 of acetylene was intended.
  {
    id: 4,
    subject: "Chemistry",
    topic: "Stoichiometry",
    year: 1987,
    exam: "JAMB",
    question: "In the reaction CaC2 + 2H2O -> Ca(OH)2 + C2H2, what mass of calcium carbide is required to produce 1000 cm3 of acetylene gas at S.T.P.? [C = 12, Ca = 40, G.M.V. = 22400 cm3]",
    options: [
      "3.8 g",
      "2.9 g",
      "2.0 g",
      "1.0 g"
    ],
    answer: "2.9 g",
    explanation: "At S.T.P., 22400 cm3 of acetylene represents 1 mol. Therefore, 1000 cm3 represents 1000 / 22400 = 0.04464 mol of C2H2. The reaction has a 1:1 mole ratio between CaC2 and C2H2. Molar mass of CaC2 = 40 + (2 x 12) = 64 g/mol. Mass of CaC2 = 0.04464 x 64 = 2.86 g, which is approximately 2.9 g."
  },

  {
    id: 5,
    subject: "Chemistry",
    topic: "Gas Laws",
    year: 1987,
    exam: "JAMB",
    question: "If the quantity of oxygen occupying a 2.76 litre container at a pressure of 0.825 atmosphere and 300 K is reduced by one-half, what is the pressure exerted by the remaining gas if volume and temperature remain constant?",
    options: [
      "1.650 atm",
      "0.825 atm",
      "0.413 atm",
      "0.275 atm"
    ],
    answer: "0.413 atm",
    explanation: "At constant volume and temperature, pressure is directly proportional to the quantity of gas. Reducing the quantity by one-half therefore reduces the pressure by one-half. P = 0.825 / 2 = 0.4125 atm, approximately 0.413 atm."
  },

  {
    id: 6,
    subject: "Chemistry",
    topic: "Gas Laws",
    year: 1987,
    exam: "JAMB",
    question: "Which of the following substances has the lowest vapour density? [O = 16, Cl = 35.5, H = 1, C = 12]",
    options: [
      "Ethanoic acid",
      "Propanol",
      "Dichloromethane",
      "Ethanal"
    ],
    answer: "Ethanal",
    explanation: "Vapour density is relative molecular mass divided by 2. Ethanal, CH3CHO, has a relative molecular mass of 44 and a vapour density of 22. Ethanoic acid and propanol each have a relative molecular mass of 60, while dichloromethane has a relative molecular mass of about 85. Therefore, ethanal has the lowest vapour density."
  },

  {
    id: 7,
    subject: "Chemistry",
    topic: "Gas Laws",
    year: 1987,
    exam: "JAMB",
    question: "If d represents the density of a gas and K is a constant, the rate of gaseous diffusion is related by the equation",
    options: [
      "r = k/d",
      "r = kd",
      "r = k/sqrt(d)",
      "r = k sqrt(d)"
    ],
    answer: "r = k/sqrt(d)",
    explanation: "Graham's law states that the rate of diffusion of a gas is inversely proportional to the square root of its density. Therefore, r = k/sqrt(d)."
  },

  {
    id: 8,
    subject: "Chemistry",
    topic: "Atomic Structure",
    year: 1987,
    exam: "JAMB",
    question: "An isotope has an atomic number of 17 and a mass number of 36. Which of the following gives the correct number of neutrons and protons in an atom of the isotope?",
    options: [
      "Neutrons = 53, Protons = 17",
      "Neutrons = 17, Protons = 36",
      "Neutrons = 19, Protons = 17",
      "Neutrons = 36, Protons = 17"
    ],
    answer: "Neutrons = 19, Protons = 17",
    explanation: "The atomic number gives the number of protons, so there are 17 protons. Number of neutrons = mass number - atomic number = 36 - 17 = 19."
  },

  {
    id: 9,
    subject: "Chemistry",
    topic: "Chemical Bonding",
    year: 1987,
    exam: "JAMB",
    question: "The atomic numbers of two elements X and Y are 12 and 9 respectively. The bond in the compound formed between the atoms of these two elements is",
    options: [
      "ionic",
      "covalent",
      "neutral",
      "co-ordinate"
    ],
    answer: "ionic",
    explanation: "Atomic number 12 is magnesium, which readily loses two electrons. Atomic number 9 is fluorine, which gains electrons. Electron transfer between the two elements produces an ionic bond."
  },

  {
    id: 10,
    subject: "Chemistry",
    topic: "Atomic Structure",
    year: 1987,
    exam: "JAMB",
    question: "An element Z contains 90% of Z-16 and 10% of Z-18. Its relative atomic mass is",
    options: [
      "16.0",
      "16.2",
      "17.0",
      "17.8"
    ],
    answer: "16.2",
    explanation: "Relative atomic mass = (16 x 0.90) + (18 x 0.10) = 14.4 + 1.8 = 16.2."
  },

  {
    id: 11,
    subject: "Chemistry",
    topic: "Chemical Bonding",
    year: 1987,
    exam: "JAMB",
    question: "The greater the difference in electronegativity between bonded atoms, the",
    options: [
      "lower the polarity of the bond",
      "higher the polarity of the bond",
      "weaker the bond",
      "higher the possibility of the substance formed being a molecule"
    ],
    answer: "higher the polarity of the bond",
    explanation: "A greater difference in electronegativity causes a greater unequal sharing of bonding electrons, resulting in a more polar bond."
  },

  {
    id: 12,
    subject: "Chemistry",
    topic: "Gases & Non-Metals",
    year: 1987,
    exam: "JAMB",
    question: "A stream of air was successively passed through three tubes X, Y and Z containing concentrated aqueous KOH, red-hot copper powder and fused calcium chloride respectively. What was the composition of the gas emanating from tube Z?",
    options: [
      "CO2 and the inert gases",
      "N2, CO2 and the inert gases",
      "N2 and the inert gases",
      "Water vapour, N2 and the inert gases"
    ],
    answer: "N2 and the inert gases",
    explanation: "Concentrated KOH removes CO2 from the air. Red-hot copper removes oxygen by reacting with it. Fused calcium chloride removes water vapour. The remaining gases are mainly nitrogen and the inert gases."
  },

  {
    id: 13,
    subject: "Chemistry",
    topic: "Water Chemistry",
    year: 1987,
    exam: "JAMB",
    question: "In the purification of town water supply, alum is used principally to",
    options: [
      "kill bacteria",
      "control the pH of water",
      "improve the taste of the water",
      "coagulate small particles of mud"
    ],
    answer: "coagulate small particles of mud",
    explanation: "Alum acts as a coagulant. It helps suspended mud and clay particles combine into larger particles that can settle or be filtered out."
  },

  {
    id: 14,
    subject: "Chemistry",
    topic: "Water Chemistry",
    year: 1987,
    exam: "JAMB",
    question: "Which of the following water samples will have the highest titre value when titrated for Ca2+ ions using standard soap solution?",
    options: [
      "Permanently hard water after boiling",
      "Temporarily hard water after boiling",
      "Rain water stored in a glass jar for two years",
      "Permanently hard water passed through permutit"
    ],
    answer: "Permanently hard water after boiling",
    explanation: "Boiling removes temporary hardness but does not remove permanent hardness. Therefore, permanently hard water retains its calcium ions and requires the greatest amount of soap solution."
  },

  {
    id: 15,
    subject: "Chemistry",
    topic: "Environmental Chemistry",
    year: 1987,
    exam: "JAMB",
    question: "Oil spillage in ponds and creeks can be cleaned up by",
    options: [
      "burning off the oil layer",
      "spraying with detergent",
      "dispersal with compressed air",
      "spraying with hot water"
    ],
    answer: "spraying with detergent",
    explanation: "Detergents act as surface-active agents that disperse an oil slick into smaller droplets, making it easier for natural processes to break down the oil."
  },

  {
    id: 16,
    subject: "Chemistry",
    topic: "Solutions & Solubility",
    year: 1987,
    exam: "JAMB",
    question: "The solubility of Na3AsO4.12H2O is 38.9 g per 100 g H2O. What is the percentage of Na3AsO4 in the saturated solution? [As = 75, Na = 23, O = 16, H = 1]",
    options: [
      "87.2%",
      "38.9%",
      "19.1%",
      "13.7%"
    ],
    answer: "13.7%",
    explanation: "Molar mass of Na3AsO4 = (3 x 23) + 75 + (4 x 16) = 208 g/mol. Molar mass of Na3AsO4.12H2O = 208 + (12 x 18) = 424 g/mol. Therefore, 38.9 g of the hydrate contains 38.9 x 208/424 = 19.08 g of Na3AsO4. Total mass of saturated solution = 100 + 38.9 = 138.9 g. Percentage of Na3AsO4 = (19.08 / 138.9) x 100 = 13.7%."
  },

  {
    id: 17,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1987,
    exam: "JAMB",
    question: "Which is the correct set of results for tests conducted respectively on fresh lime juice and ethanol?",
    options: [
      "Add NaHCO3 crystals: Gas evolved with lime juice | No gas evolved with ethanol",
      "Test with methyl orange: Turns colourless | No change",
      "Taste: Bitter | Sour",
      "Add a piece of sodium: No gas evolved | H2 evolved"
    ],
    answer: "Add NaHCO3 crystals: Gas evolved with lime juice | No gas evolved with ethanol",
    explanation: "Lime juice contains acids that react with sodium hydrogencarbonate to release CO2. Ethanol does not react with sodium hydrogencarbonate to produce gas under these conditions."
  },

  {
    id: 18,
    subject: "Chemistry",
    topic: "Acids, Bases & Salts",
    year: 1987,
    exam: "JAMB",
    question: "Which of the following options arranges the aqueous solutions of each substance correctly in order of decreasing acidity?",
    options: [
      "Ethanoic acid, milk of magnesia, sodium chloride, hydrochloric acid and sodium hydroxide",
      "Ethanoic acid, hydrochloric acid, milk of magnesia, sodium chloride and sodium hydroxide",
      "Hydrochloric acid, ethanoic acid, sodium chloride, milk of magnesia and sodium hydroxide",
      "Hydrochloric acid, sodium hydroxide, sodium chloride, ethanoic acid and milk of magnesia"
    ],
    answer: "Hydrochloric acid, ethanoic acid, sodium chloride, milk of magnesia and sodium hydroxide",
    explanation: "Decreasing acidity means moving from the strongest acid toward the strongest base. Hydrochloric acid is strongly acidic, ethanoic acid is weakly acidic, sodium chloride is approximately neutral, milk of magnesia is basic, and sodium hydroxide is strongly basic."
  },

  {
    id: 19,
    subject: "Chemistry",
    topic: "Acids, Bases & Salts",
    year: 1987,
    exam: "JAMB",
    question: "The basicity of tetraoxophosphate(V) acid is",
    options: [
      "7",
      "5",
      "4",
      "3"
    ],
    answer: "3",
    explanation: "Tetraoxophosphate(V) acid is H3PO4. It has three replaceable hydrogen atoms, so its basicity is 3."
  },

  {
    id: 20,
    subject: "Chemistry",
    topic: "Stoichiometry",
    year: 1987,
    exam: "JAMB",
    question: "If 24.83 cm3 of 0.15 M NaOH is titrated to its end point with 39.45 cm3 of HCl, what is the molarity of the HCl?",
    options: [
      "0.094 M",
      "0.150 M",
      "0.940 M",
      "1.500 M"
    ],
    answer: "0.094 M",
    explanation: "HCl reacts with NaOH in a 1:1 ratio. M1V1 = M2V2. Therefore, M(HCl) = (0.15 x 24.83) / 39.45 = 0.094 M."
  },

  {
    id: 21,
    subject: "Chemistry",
    topic: "Electrochemistry",
    year: 1987,
    exam: "JAMB",
    question: "A quantity of electricity liberates 3.6 g of silver from its salt. What mass of aluminium will be liberated from its salt by the same quantity of electricity? [Ag = 108, Al = 27]",
    options: [
      "2.7 g",
      "1.2 g",
      "0.9 g",
      "0.3 g"
    ],
    answer: "0.3 g",
    explanation: "Equivalent mass of Ag = 108/1 = 108. Equivalent mass of Al = 27/3 = 9. By Faraday's law, mass of Al / mass of Ag = 9/108. Therefore, mass of Al = 3.6 x 9/108 = 0.3 g."
  },

  {
    id: 22,
    subject: "Chemistry",
    topic: "Electrochemistry",
    year: 1987,
    exam: "JAMB",
    question: "Which of the following statements is CORRECT if 1 Faraday of electricity is passed through 1 M CuSO4 solution for 1 minute?",
    options: [
      "The pH of the solution at the cathode decreases",
      "The pH of the solution at the anode decreases",
      "1 mole of Cu will be liberated at the cathode",
      "60 moles of Cu will be liberated at the anode"
    ],
    answer: "The pH of the solution at the anode decreases",
    explanation: "At the anode, water is oxidized and H+ ions are produced: 2H2O -> O2 + 4H+ + 4e-. The increase in H+ concentration lowers the pH around the anode."
  },

  {
    id: 23,
    subject: "Chemistry",
    topic: "Electrochemistry",
    year: 1987,
    exam: "JAMB",
    question: "What mass of magnesium would be obtained by passing a current of 2 amperes for 2 hrs 30 mins through molten magnesium chloride? [1 Faraday = 96500 C, Mg = 24]",
    options: [
      "1.12 g",
      "2.00 g",
      "2.24 g",
      "4.48 g"
    ],
    answer: "2.24 g",
    explanation: "Time = 2.5 x 3600 = 9000 s. Charge passed = It = 2 x 9000 = 18000 C. Magnesium requires 2 Faradays per mole. Mass deposited = (18000 x 24) / (2 x 96500) = 2.24 g."
  },

  {
    id: 24,
    subject: "Chemistry",
    topic: "Stoichiometry & Kinetics",
    year: 1987,
    exam: "JAMB",
    question: "In the reaction 3CuO + 2NH3 -> 3Cu + 3H2O + N2, how many electrons are transferred for each mole of copper produced?",
    options: [
      "4.0 x 10^-23",
      "3.0 x 10^-23",
      "1.2 x 10^24",
      "6.0 x 10^24"
    ],
    answer: "1.2 x 10^24",
    explanation: "Copper changes from oxidation state +2 in CuO to 0 in metallic copper. Each Cu2+ ion therefore gains 2 electrons. One mole of copper requires 2 moles of electrons, which is 2 x 6.02 x 10^23 = 1.204 x 10^24 electrons."
  },

  {
    id: 25,
    subject: "Chemistry",
    topic: "Gases & Non-Metals",
    year: 1987,
    exam: "JAMB",
    question: "Z is a solid substance which liberates carbon(IV) oxide on treatment with concentrated H2SO4 and decolourizes purple KMnO4 solution. The solid substance Z is",
    options: [
      "sodium hydrogen trioxocarbonate(IV)",
      "ethanoic acid",
      "iron(II) trioxocarbonate(IV)",
      "ethanedioic acid (oxalic acid)"
    ],
    answer: "ethanedioic acid (oxalic acid)",
    explanation: "Oxalic acid is a solid reducing agent. It can decolourize acidified KMnO4 and, on treatment with concentrated H2SO4, decomposes to produce carbon oxides and water."
  },

  {
    id: 26,
    subject: "Chemistry",
    topic: "Chemical Energetics",
    year: 1987,
    exam: "JAMB",
    question: "5 g of ammonium trioxonitrate(V) on dissolution in water cooled its surroundings and container by 1.6 kJ. What is the heat of solution of NH4NO3? [N = 14, O = 16, H = 1]",
    options: [
      "+25.6 kJ mol^-1",
      "+51.4 kJ mol^-1",
      "+12.9 kJ mol^-1",
      "-6.4 kJ mol^-1"
    ],
    answer: "+25.6 kJ mol^-1",
    explanation: "Molar mass of NH4NO3 = 80 g/mol. Moles dissolved = 5/80 = 0.0625 mol. Since the dissolution causes cooling, heat is absorbed. Heat of solution = 1.6/0.0625 = +25.6 kJ mol^-1."
  },

  {
    id: 27,
    subject: "Chemistry",
    topic: "Chemical Energetics",
    year: 1987,
    exam: "JAMB",
    question: "Tetraoxosulphate(VI) acid is prepared using the reaction SO3(g) + H2O(l) -> H2SO4(l). Given the heats of formation for SO3(g), H2O(l) and H2SO4(l) as -395 kJ/mol, -286 kJ/mol and -811 kJ/mol respectively, the heat change for the reaction is",
    options: [
      "-1032 kJ",
      "-130 kJ",
      "+130 kJ",
      "+1032 kJ"
    ],
    answer: "-130 kJ",
    explanation: "Delta H = sum of heats of formation of products - sum of heats of formation of reactants. Delta H = -811 - [(-395) + (-286)] = -811 + 681 = -130 kJ/mol."
  },

  {
    id: 28,
    subject: "Chemistry",
    topic: "Chemical Kinetics",
    year: 1987,
    exam: "JAMB",
    question: "The times taken for a visible change to appear in a reaction mixture at various temperatures are as follows: 25°C = 72 s, 35°C = 36 s, 45°C = 18 s. These results suggest that",
    options: [
      "for a 10°C rise in temperature, the rate of reaction is doubled",
      "for a 10°C rise in temperature, the rate of reaction is halved",
      "the time taken for a change to appear does not depend on temperature",
      "for a 10°C rise in temperature, the rate of reaction is tripled"
    ],
    answer: "for a 10°C rise in temperature, the rate of reaction is doubled",
    explanation: "Reaction rate is inversely related to the time taken for the same observable change. When temperature rises by 10°C, the time falls from 72 s to 36 s, so the rate doubles."
  },

  {
    id: 29,
    subject: "Chemistry",
    topic: "Chemical Equilibrium",
    year: 1987,
    exam: "JAMB",
    question: "The reaction between sulphur(IV) oxide and oxygen is represented by the equilibrium reaction 2SO2(g) + O2(g) <=> 2SO3(g), Delta H = -196 kJ. What factor would influence increased production of SO3(g)?",
    options: [
      "Addition of a suitable catalyst",
      "Increase in the temperature of the reaction",
      "Decrease in the temperature of the reaction system",
      "Decrease in the concentration of SO2(g)"
    ],
    answer: "Decrease in the temperature of the reaction system",
    explanation: "The forward reaction is exothermic. Lowering the temperature favours the exothermic direction and shifts the equilibrium toward SO3."
  },

  {
    id: 30,
    subject: "Chemistry",
    topic: "Gases & Non-Metals",
    year: 1987,
    exam: "JAMB",
    question: "Which of the following equations correctly represents the action of hot concentrated alkaline solution on chlorine gas?",
    options: [
      "Cl2 + 2OH- -> OCl- + Cl- + H2O",
      "Cl2 + 6OH- -> ClO3- + 5Cl- + 3H2O",
      "3Cl2 + 6OH- -> ClO3- + 5Cl- + 3H2O",
      "3Cl2 + 6OH- -> 5ClO3- + Cl- + 3H2O"
    ],
    answer: "3Cl2 + 6OH- -> ClO3- + 5Cl- + 3H2O",
    explanation: "Hot concentrated alkali causes chlorine to disproportionate into chloride and chlorate(V). The balanced ionic equation is 3Cl2 + 6OH- -> ClO3- + 5Cl- + 3H2O."
  },

  {
    id: 31,
    subject: "Chemistry",
    topic: "Qualitative Analysis",
    year: 1987,
    exam: "JAMB",
    question: "A magnesium ribbon was allowed to burn inside a given gas P, leaving a white solid residue Q. Addition of water to Q liberated a gas which produced dense white fumes with a drop of hydrochloric acid. The gas P was",
    options: [
      "nitrogen",
      "chlorine",
      "oxygen",
      "sulphur(IV) oxide"
    ],
    answer: "nitrogen",
    explanation: "Magnesium burns in nitrogen to form magnesium nitride, Mg3N2. When water is added, magnesium nitride produces ammonia, NH3. Ammonia reacts with HCl to produce dense white fumes of ammonium chloride."
  },

  {
    id: 32,
    subject: "Chemistry",
    topic: "Laboratory Safety",
    year: 1987,
    exam: "JAMB",
    question: "The best treatment for a student who accidentally poured concentrated tetraoxosulphate(VI) acid on his skin in the laboratory is to wash the skin immediately with plenty of",
    options: [
      "cold water",
      "sodium trioxocarbonate solution",
      "iodine solution",
      "sodium hydroxide solution"
    ],
    answer: "cold water",
    explanation: "The affected skin should immediately be flushed with plenty of cold running water. This dilutes and removes the acid and helps reduce further injury."
  },

  {
    id: 33,
    subject: "Chemistry",
    topic: "Periodic Table & Allotropy",
    year: 1987,
    exam: "JAMB",
    question: "In which of the following pairs of elements is allotropy exhibited by each element?",
    options: [
      "Phosphorus and hydrogen",
      "Oxygen and chlorine",
      "Sulphur and nitrogen",
      "Oxygen and sulphur"
    ],
    answer: "Oxygen and sulphur",
    explanation: "Oxygen exists as O2 and O3, while sulphur has several allotropes, including rhombic and monoclinic sulphur."
  },

  {
    id: 34,
    subject: "Chemistry",
    topic: "Gases & Non-Metals",
    year: 1987,
    exam: "JAMB",
    question: "Which of the following gases can best be used for demonstrating the fountain experiment? (1) Nitrogen, (2) Ammonia, (3) Nitrogen(I) oxide, (4) Hydrogen chloride",
    options: [
      "2 and 3",
      "1 and 3",
      "2 and 4",
      "2 only"
    ],
    answer: "2 and 4",
    explanation: "Ammonia and hydrogen chloride are highly soluble in water. Their rapid dissolution creates a pressure difference that can draw water into the apparatus as a fountain."
  },

  {
    id: 35,
    subject: "Chemistry",
    topic: "Inorganic Chemistry",
    year: 1987,
    exam: "JAMB",
    question: "When calcium hydroxide is heated with ammonium tetraoxosulphate(VI), the gas given off may be purified and collected by",
    options: [
      "bubbling it through concentrated H2SO4",
      "bubbling it through water and then passing it through calcium oxide",
      "passing it directly through calcium oxide",
      "passing it directly through calcium chloride"
    ],
    answer: "passing it directly through calcium oxide",
    explanation: "The reaction produces ammonia. Ammonia is highly soluble in water and reacts with acidic drying agents such as concentrated H2SO4. Calcium oxide is suitable for drying ammonia."
  },

  // The original 1987 source has Al, Mg, Ag and Mn as the options.
  // CHECK SOURCE: Some online transcriptions give conflicting answer keys,
  // but the chemistry and the original option set support aluminium as the intended answer.
  {
    id: 36,
    subject: "Chemistry",
    topic: "Inorganic Chemistry",
    year: 1987,
    exam: "JAMB",
    question: "Which of the following elements will form an oxide which dissolves in both dilute HNO3 and NaOH solution to form salts?",
    options: [
      "Al",
      "Mg",
      "Ag",
      "Mn"
    ],
    answer: "Al",
    explanation: "Aluminium oxide, Al2O3, is amphoteric. It reacts with dilute nitric acid to form aluminium nitrate and reacts with NaOH to form an aluminate compound."
  },

  {
    id: 37,
    subject: "Chemistry",
    topic: "Applied Chemistry",
    year: 1987,
    exam: "JAMB",
    question: "Stainless steel is an alloy of",
    options: [
      "iron, carbon and silver",
      "iron, carbon and lead",
      "iron, carbon and chromium",
      "iron and carbon only"
    ],
    answer: "iron, carbon and chromium",
    explanation: "Stainless steel is mainly iron with carbon and chromium. Chromium forms a protective oxide layer that gives the steel high resistance to corrosion."
  },

  {
    id: 38,
    subject: "Chemistry",
    topic: "Applied Chemistry",
    year: 1987,
    exam: "JAMB",
    question: "Alloys are best prepared by",
    options: [
      "high temperature arc welding of the metals",
      "electrolysis using the major metallic component as cathode",
      "reducing a mixture of the oxides of the elements",
      "cooling a molten mixture of the necessary elements"
    ],
    answer: "cooling a molten mixture of the necessary elements",
    explanation: "The constituent metals are melted together to form a homogeneous molten mixture and then cooled to produce the alloy."
  },

  {
    id: 39,
    subject: "Chemistry",
    topic: "Electrochemistry",
    year: 1987,
    exam: "JAMB",
    question: "Corrosion is exhibited by",
    options: [
      "iron only",
      "electropositive metals",
      "metals below hydrogen in the electrochemical series",
      "all metals"
    ],
    answer: "electropositive metals",
    explanation: "Electropositive metals readily lose electrons and are therefore susceptible to oxidation and corrosion under suitable environmental conditions."
  },

  {
    id: 40,
    subject: "Chemistry",
    topic: "Chemical Bonding",
    year: 1987,
    exam: "JAMB",
    question: "In spite of its ground-state electronic configuration 1s2 2s2 2p2, carbon behaves as a tetravalent element because",
    options: [
      "the electrons in both 2s and 2p orbitals have equal energy",
      "the electrons in both 2s and 2p orbitals are equivalent",
      "both the 2s and 2p orbitals hybridize",
      "the six orbitals hybridize to four"
    ],
    answer: "both the 2s and 2p orbitals hybridize",
    explanation: "During bonding, carbon promotes an electron from the 2s orbital to a 2p orbital and then hybridizes its one 2s and three 2p orbitals to form four equivalent sp3 hybrid orbitals."
  },

  {
    id: 41,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1987,
    exam: "JAMB",
    question: "Which of the following compounds will form a precipitate when treated with an aqueous ammoniacal solution of copper(I) chloride?",
    options: [
      "CH3-CH=CH-CH3",
      "CH3-C≡C-CH3",
      "CH≡C-CH2-CH3",
      "CH2=CH-CH=CH2"
    ],
    answer: "CH≡C-CH2-CH3",
    explanation: "Terminal alkynes contain an acidic hydrogen attached to the triple-bonded carbon. They react with ammoniacal copper(I) chloride to form an insoluble copper acetylide precipitate."
  },

  {
    id: 42,
    subject: "Chemistry",
    topic: "Applied Chemistry",
    year: 1987,
    exam: "JAMB",
    question: "The efficiency of petrol as a fuel in high-compression internal combustion engines improves with an increase in the proportion of",
    options: [
      "branched-chain alkanes",
      "straight-chain alkanes",
      "cycloalkanes",
      "halogenated hydrocarbons"
    ],
    answer: "branched-chain alkanes",
    explanation: "Branched-chain alkanes have higher octane ratings and are more resistant to knocking in high-compression engines."
  },

  {
    id: 43,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1987,
    exam: "JAMB",
    question: "A palm wine seller stoppered a bottle of palm wine. After a few hours, the bottle burst open due to gas pressure. Which of the following equations represents the chemical reaction that occurred?",
    options: [
      "C6H12O6 -> 2C2H5OH + 2CO2",
      "C2H5OH -> CH2=CH2 + H2O",
      "C2H5OH + H2SO4 -> C2H5OSO2OH",
      "2C6H12O6 -> C12H22O11 + H2O"
    ],
    answer: "C6H12O6 -> 2C2H5OH + 2CO2",
    explanation: "Yeast ferments glucose to ethanol and carbon dioxide. In a stoppered bottle, the carbon dioxide accumulates and increases the pressure inside the bottle."
  },

  {
    id: 44,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1987,
    exam: "JAMB",
    question: "Ethanol reacts with aqueous sodium hypoiodite to give a bright yellow solid with a characteristic smell. The product is",
    options: [
      "trichloromethane",
      "triiodomethane",
      "iodoethane",
      "ethanal"
    ],
    answer: "triiodomethane",
    explanation: "Ethanol gives the iodoform reaction with hypoiodite. The yellow solid formed is triiodomethane, CHI3."
  },

  {
    id: 45,
    subject: "Chemistry",
    topic: "Applied Chemistry",
    year: 1987,
    exam: "JAMB",
    question: "The most volatile fraction obtained from the fractional distillation of crude petroleum contains",
    options: [
      "butane, propane and kerosene",
      "butane, propane and petrol",
      "ethane, methane and benzene",
      "ethane, methane and propane"
    ],
    answer: "ethane, methane and propane",
    explanation: "The most volatile petroleum components are the lightest hydrocarbons with the lowest boiling points, such as methane, ethane and propane."
  },

  {
    id: 46,
    subject: "Chemistry",
    topic: "Applied Chemistry",
    year: 1987,
    exam: "JAMB",
    question: "Local black soap is manufactured by boiling palm oil with the liquid extract of plant ash. The function of the ash extract is to provide the necessary",
    options: [
      "acid",
      "ester of alkanoic acid",
      "alkali",
      "alkanol"
    ],
    answer: "alkali",
    explanation: "Plant ash contains alkaline substances, especially potassium compounds. The alkali reacts with the fats in palm oil during saponification to produce soap."
  },

  {
    id: 47,
    subject: "Chemistry",
    topic: "Applied Chemistry",
    year: 1987,
    exam: "JAMB",
    question: "Synthetic rubber is manufactured by the polymerization of",
    options: [
      "2-methylbuta-1,3-diene",
      "2-methylbuta-1,2-diene",
      "2-methylbut-1-ene",
      "2-methylbut-2-ene"
    ],
    answer: "2-methylbuta-1,3-diene",
    explanation: "2-methylbuta-1,3-diene, commonly called isoprene, is a diene that can polymerize to form polyisoprene rubber."
  },

  {
    id: 48,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1987,
    exam: "JAMB",
    question: "Complete oxidation of propan-1-ol gives",
    options: [
      "propanal",
      "propan-2-al",
      "propan-1-one",
      "propanoic acid"
    ],
    answer: "propanoic acid",
    explanation: "Propan-1-ol is a primary alcohol. Complete oxidation converts it first to propanal and then to propanoic acid."
  },

  {
    id: 49,
    subject: "Chemistry",
    topic: "Gases & Non-Metals",
    year: 1987,
    exam: "JAMB",
    question: "When water is added to calcium carbide, the gas produced is acetylene. When acetylene burns with oxygen, the flame used for cutting metals is known as the",
    options: [
      "oxyethylene flame",
      "oxyhydrocarbon flame",
      "oxyacetylene flame",
      "oxymethane flame"
    ],
    answer: "oxyacetylene flame",
    explanation: "Calcium carbide reacts with water to produce acetylene, C2H2. Burning acetylene with oxygen produces the very hot oxyacetylene flame used for welding and cutting metals."
  },

  {
    id: 50,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1987,
    exam: "JAMB",
    question: "The carboxyl group in benzoic acid is directly bonded to a",
    options: [
      "methyl radical",
      "phenyl ring",
      "hydroxyl radical",
      "propyl radical"
    ],
    answer: "phenyl ring",
    explanation: "Benzoic acid has the formula C6H5COOH. The carboxyl group, -COOH, is directly attached to a phenyl ring."
  }

];

export default chemJamb1987;