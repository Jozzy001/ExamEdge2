// JAMB 1991 Chemistry Past Questions
// Fully audited — questions, answers, calculations, explanations, source/OCR issues, and app-safe formatting.
// Questions affected by missing source images or corrupted OCR are marked with CHECK SOURCE.

const chemJamb1991 = [

  {
    id: 1,
    subject: "Chemistry",
    topic: "Separation Techniques",
    year: 1991,
    exam: "JAMB",
    question: "Which of the following can be obtained by fractional distillation?",
    options: [
      "Nitrogen from liquid air",
      "Sodium chloride from sea water",
      "Iodine from a solution of iodine in carbon tetrachloride",
      "Sulphur from a solution of sulphur in carbon disulphide"
    ],
    answer: "Nitrogen from liquid air",
    explanation: "Liquid air contains nitrogen and oxygen, which have different boiling points. Fractional distillation is used industrially to separate them."
  },

  {
    id: 2,
    subject: "Chemistry",
    topic: "Separation Techniques",
    year: 1991,
    exam: "JAMB",
    question: "Which of the following are mixtures? (i) Petroleum, (ii) Rubber latex, (iii) Vulcanizer's solution, (iv) Carbon disulphide",
    options: [
      "i, ii and iii",
      "i, ii and iv",
      "i and ii only",
      "i and iv"
    ],
    answer: "i, ii and iii",
    explanation: "Petroleum, rubber latex and vulcanizer's solution are mixtures. Carbon disulphide (CS2) is a pure compound."
  },

  {
    id: 3,
    subject: "Chemistry",
    topic: "Stoichiometry",
    year: 1991,
    exam: "JAMB",
    question: "An iron ore is known to contain 70.0% Fe2O3. The mass of iron metal which can theoretically be obtained from 80 kg of the ore is [Fe = 56, O = 16]",
    options: [
      "35.0 kg",
      "39.2 kg",
      "70.0 kg",
      "78.4 kg"
    ],
    answer: "39.2 kg",
    explanation: "Mass of Fe2O3 = 70/100 x 80 = 56 kg. Fe2O3 has a molar mass of 160 g/mol, of which 112 g is iron. Therefore, iron = (112/160) x 56 = 39.2 kg."
  },

  {
    id: 4,
    subject: "Chemistry",
    topic: "Stoichiometry",
    year: 1991,
    exam: "JAMB",
    question: "In two separate experiments, 0.36 g and 0.71 g of chlorine combine with a metal X to give compounds Y and Z respectively. An analysis showed that Y and Z contain 0.20 g and 0.40 g of X respectively. The data above represents the law of",
    options: [
      "multiple proportions",
      "conservation of mass",
      "constant composition",
      "reciprocal proportions"
    ],
    answer: "constant composition",
    explanation: "For compound Y, 0.20 g of X combines with 0.36 g of chlorine. For the same mass of X in compound Z, 0.40 g of X combines with 0.71 g of chlorine. The compositions are essentially the same within experimental limits, so the data support the law of constant composition. The commonly reproduced source gives these figures and options, although the wording is somewhat imprecise."
  },

  {
    id: 5,
    subject: "Chemistry",
    topic: "Gas Laws",
    year: 1991,
    exam: "JAMB",
    question: "30 cm3 of oxygen at 10 atmosphere pressure is placed in a 2.0 dm3 container. Calculate the new pressure if the temperature is kept constant.",
    options: [
      "6.7 atm",
      "15.0 atm",
      "0.15 atm",
      "66.0 atm"
    ],
    answer: "0.15 atm",
    explanation: "Using Boyle's law, P1V1 = P2V2. P2 = (10 x 0.030) / 2.0 = 0.15 atm."
  },

  {
    id: 6,
    subject: "Chemistry",
    topic: "Gas Laws",
    year: 1991,
    exam: "JAMB",
    question: "A given quantity of gas occupies a volume of 228 cm3 at a pressure of 750 mm Hg. What will be its volume at standard atmospheric pressure?",
    options: [
      "200 cm3",
      "225 cm3",
      "230 cm3",
      "235 cm3"
    ],
    answer: "225 cm3",
    explanation: "Using Boyle's law, V2 = (P1V1)/P2 = (750 x 228)/760 = 225 cm3."
  },

  {
    id: 7,
    subject: "Chemistry",
    topic: "Stoichiometry",
    year: 1991,
    exam: "JAMB",
    question: "Calculate the volume of carbon(IV) oxide measured at s.t.p. produced when 1 kg of potassium hydrogen trioxocarbonate(IV) is totally decomposed by heat. [G.M.V. at s.t.p. = 22.4 dm3, K = 39, O = 16, C = 12, H = 1]",
    options: [
      "28 dm3",
      "56 dm3",
      "112 dm3",
      "196 dm3"
    ],
    answer: "112 dm3",
    explanation: "2KHCO3 -> K2CO3 + H2O + CO2. The molar mass of KHCO3 is 100 g/mol, so 1000 g is 10 mol. This produces 5 mol of CO2. Volume = 5 x 22.4 = 112 dm3."
  },

  {
    id: 8,
    subject: "Chemistry",
    topic: "Gas Laws",
    year: 1991,
    exam: "JAMB",
    question: "A sample of a gas exerts a pressure of 8.2 atm when confined in a 2.93 dm3 container at 20 C. The number of moles of gas in the sample is [R = 0.082 litre atm/(mol K)]",
    options: [
      "1.00",
      "2.00",
      "3.00",
      "4.00"
    ],
    answer: "1.00",
    explanation: "Using PV = nRT, n = PV/RT = (8.2 x 2.93)/(0.082 x 293) = 1.00 mol."
  },

  {
    id: 9,
    subject: "Chemistry",
    topic: "Chemical Bonding",
    year: 1991,
    exam: "JAMB",
    question: "Atoms of element X with 2 electrons in the outer shell combine with atoms of Y with 7 electrons in the outer shell. Which of the following statements is FALSE?",
    options: [
      "The compound formed has the formula XY",
      "The compound formed is likely to be ionic",
      "The compound contains X2+ ions",
      "The compound contains Y- ions"
    ],
    answer: "The compound formed has the formula XY",
    explanation: "X forms X2+ while Y forms Y-. Two Y- ions are therefore required for each X2+ ion. The formula is XY2, not XY."
  },

  {
    id: 10,
    subject: "Chemistry",
    topic: "Atomic Structure",
    year: 1991,
    exam: "JAMB",
    question: "The ions X- and Y+ are isoelectronic, each containing a total of 10 electrons. How many protons are in the nuclei of the neutral atoms of X and Y respectively?",
    options: [
      "10 and 10",
      "9 and 9",
      "11 and 9",
      "9 and 11"
    ],
    answer: "9 and 11",
    explanation: "X- has one more electron than neutral X, so X has 9 protons. Y+ has one fewer electron than neutral Y, so Y has 11 protons."
  },

  {
    id: 11,
    subject: "Chemistry",
    topic: "Periodic Table",
    year: 1991,
    exam: "JAMB",
    question: "The electronic configuration of an element is 1s2 2s2 2p6 3s2 3p3. How many unpaired electrons are there in the atom?",
    options: [
      "5",
      "4",
      "3",
      "2"
    ],
    answer: "3",
    explanation: "The 3p subshell contains three electrons. According to Hund's rule, they occupy the three p orbitals singly before pairing, giving three unpaired electrons."
  },

  {
    id: 12,
    subject: "Chemistry",
    topic: "Chemical Bonding",
    year: 1991,
    exam: "JAMB",
    question: "Which of the following represents the type of bonding present in ammonium chloride?",
    options: [
      "Ionic only",
      "Covalent only",
      "Ionic and dative covalent",
      "Dative covalent only"
    ],
    answer: "Ionic and dative covalent",
    explanation: "Ammonium chloride contains ionic attraction between NH4+ and Cl-. The formation of NH4+ from NH3 and H+ involves a dative covalent bond. The source lists the intended answer as ionic and dative covalent."
  },

  {
    id: 13,
    subject: "Chemistry",
    topic: "Periodic Table",
    year: 1991,
    exam: "JAMB",
    question: "Which of the following is arranged in order of increasing electronegativity?",
    options: [
      "Chlorine, aluminium, magnesium, phosphorus, sodium",
      "Sodium, magnesium, aluminium, phosphorus, chlorine",
      "Chlorine, phosphorus, aluminium, magnesium, sodium",
      "Sodium, chlorine, phosphorus, magnesium, aluminium"
    ],
    answer: "Sodium, magnesium, aluminium, phosphorus, chlorine",
    explanation: "Across Period 3, electronegativity generally increases from left to right: Na < Mg < Al < P < Cl."
  },

  {
    id: 14,
    subject: "Chemistry",
    topic: "Laboratory Apparatus",
    year: 1991,
    exam: "JAMB",
    question: "A quantity of air was passed through a weighed amount of alkaline pyrogallol. An increase in the weight of the pyrogallol would result from the selective chemical absorption of",
    options: [
      "nitrogen",
      "neon",
      "argon",
      "oxygen"
    ],
    answer: "oxygen",
    explanation: "Alkaline pyrogallol absorbs oxygen from air. The absorbed oxygen causes the mass of the reagent to increase."
  },

  {
    // CHECK SOURCE: The original question refers to a missing electron-shell diagram.
    id: 15,
    subject: "Chemistry",
    topic: "Chemical Bonding",
    year: 1991,
    exam: "JAMB",
    question: "The electrons of two atoms Y and Z are arranged in shells as shown in the original diagram. Atom Y provides an unshared electron pair to complete the octet of atom Z. The bond formed between Y and Z is",
    options: [
      "ionic",
      "covalent",
      "dative",
      "metallic"
    ],
    answer: "dative",
    explanation: "A dative covalent bond is formed when the shared pair of electrons is supplied entirely by one atom. The original source contains a missing diagram, but its wording and answer choices identify dative as the intended answer."
  },

  {
    id: 16,
    subject: "Chemistry",
    topic: "Environmental Chemistry",
    year: 1991,
    exam: "JAMB",
    question: "Which of the following ions is a pollutant in drinking water even in trace amounts?",
    options: [
      "Ca2+",
      "Hg2+",
      "Mg2+",
      "Fe2+"
    ],
    answer: "Hg2+",
    explanation: "Mercury(II) ions are highly toxic heavy-metal pollutants and can cause serious biological damage even at low concentrations."
  },

  {
    id: 17,
    subject: "Chemistry",
    topic: "Solutions & Solubility",
    year: 1991,
    exam: "JAMB",
    question: "The solubility of copper(II) tetraoxosulphate(VI) is 75 g in 100 g of water at 100 C and 25 g in 100 g of water at 30 C. What mass of the salt would crystallize out if 50 g of saturated solution at 100 C were cooled to 30 C?",
    options: [
      "57.5 g",
      "42.9 g",
      "28.6 g",
      "14.3 g"
    ],
    answer: "14.3 g",
    explanation: "At 100 C, 175 g of saturated solution contains 75 g salt. Therefore 50 g solution contains 75/175 x 50 = 21.43 g salt and 28.57 g water. At 30 C, this water can dissolve 25/100 x 28.57 = 7.14 g salt. Crystallized salt = 21.43 - 7.14 = 14.29 g, approximately 14.3 g."
  },

  {
    id: 18,
    subject: "Chemistry",
    topic: "Water Chemistry",
    year: 1991,
    exam: "JAMB",
    question: "A sample of temporary hard water can be prepared in the laboratory by",
    options: [
      "dissolving calcium chloride in distilled water",
      "saturating lime water with carbon(IV) oxide gas",
      "saturating distilled water with calcium hydroxide",
      "dissolving sodium hydrogen trioxocarbonate(IV) in distilled water"
    ],
    answer: "saturating lime water with carbon(IV) oxide gas",
    explanation: "CO2 passed into lime water first forms CaCO3 and, in excess, converts it to soluble calcium hydrogencarbonate, Ca(HCO3)2, which causes temporary hardness."
  },

  {
    id: 19,
    subject: "Chemistry",
    topic: "Solutions & Solubility",
    year: 1991,
    exam: "JAMB",
    question: "A characteristic property of a colloidal dispersion which a true solution does not exhibit is",
    options: [
      "the Tyndall effect",
      "homogeneity",
      "osmotic pressure",
      "surface polarity"
    ],
    answer: "the Tyndall effect",
    explanation: "Colloidal particles scatter light, producing the Tyndall effect. True solutions do not normally show this effect."
  },

  {
    id: 20,
    subject: "Chemistry",
    topic: "Gases & Non-Metals",
    year: 1991,
    exam: "JAMB",
    question: "50 cm3 of sulphur(IV) oxide, 800 cm3 of ammonia and 450 cm3 of hydrogen chloride will respectively saturate 1.0 cm3 of water at 15 C. Which of the following is suitable for demonstrating the fountain experiment?",
    options: [
      "Sulphur(IV) oxide and hydrogen chloride",
      "Carbon(IV) oxide and ammonia",
      "Ammonia and hydrogen chloride",
      "Carbon(IV) oxide and sulphur(IV) oxide"
    ],
    answer: "Ammonia and hydrogen chloride",
    explanation: "Ammonia and hydrogen chloride are extremely soluble in water and are the classic gases used to demonstrate the fountain experiment."
  },

  {
    // CHECK SOURCE: The original question refers to a missing experimental figure.
    id: 21,
    subject: "Chemistry",
    topic: "Electrochemistry",
    year: 1991,
    exam: "JAMB",
    question: "Which of the following substances could be satisfactorily used as X in the original electrochemical-cell figure?",
    options: [
      "Ammonia and potassium hydroxide",
      "Potassium hydroxide and sodium chloride",
      "Ammonia and ethanoic acid",
      "Ethanoic acid and sodium chloride"
    ],
    answer: "Potassium hydroxide and sodium chloride",
    explanation: "The original figure is missing from the available transcription. The source answer is consistent with potassium hydroxide and sodium chloride being electrolytes that provide mobile ions."
  },

  {
    id: 22,
    subject: "Chemistry",
    topic: "Stoichiometry",
    year: 1991,
    exam: "JAMB",
    question: "What volume of CO2 at s.t.p. would be obtained by reacting 10 cm3 of a 0.1 M solution of anhydrous sodium trioxocarbonate(IV) with excess acid? [G.M.V. at s.t.p. = 22.4 dm3]",
    options: [
      "2.240 cm3",
      "22.40 cm3",
      "224.0 cm3",
      "2240 cm3"
    ],
    answer: "22.40 cm3",
    explanation: "Moles of Na2CO3 = 0.1 x 0.010 = 0.001 mol. The reaction produces CO2 in a 1:1 mole ratio. Therefore CO2 volume = 0.001 x 22.4 dm3 = 0.0224 dm3 = 22.40 cm3. The original source uses 10 cm3, not 100 cm3."
  },

  {
    id: 23,
    subject: "Chemistry",
    topic: "Electrochemistry",
    year: 1991,
    exam: "JAMB",
    question: "If a current of 1.5 A is passed for 4.00 hours through a molten tin salt and 13.3 g of tin is deposited, what is the oxidation state of the metal in the salt? [Sn = 118.7, F = 96500 C mol-1]",
    options: [
      "+1",
      "+2",
      "+3",
      "+4"
    ],
    answer: "+2",
    explanation: "Q = It = 1.5 x 4 x 3600 = 21600 C. Moles of Sn = 13.3/118.7 = 0.112 mol. The charge per mole is approximately 2F, so two electrons are required per Sn ion. Therefore the oxidation state is +2."
  },

  {
    id: 24,
    subject: "Chemistry",
    topic: "Solutions & Solubility",
    year: 1991,
    exam: "JAMB",
    question: "Which of the following aqueous salt solutions, Na2CO3, Na2SO4, FeCl3, NH4Cl and CH3COONa, have pH values greater than 7?",
    options: [
      "FeCl3 and NH4Cl",
      "Na2CO3, CH3COONa and Na2SO4",
      "Na2CO3 and CH3COONa",
      "FeCl3, CH3COONa and NH4Cl"
    ],
    answer: "Na2CO3 and CH3COONa",
    explanation: "Na2CO3 and CH3COONa are salts of strong bases and weak acids, so their anions hydrolyse in water and make the solutions alkaline."
  },

  {
    id: 25,
    subject: "Chemistry",
    topic: "Redox Reactions",
    year: 1991,
    exam: "JAMB",
    question: "MnO4- + 8H+ + ne- -> Mn2+ + 4H2O. What is the value of n in the balanced half-cell reaction?",
    options: [
      "2",
      "3",
      "4",
      "5"
    ],
    answer: "5",
    explanation: "Mn changes from oxidation state +7 in MnO4- to +2 in Mn2+. It therefore gains 5 electrons."
  },

  {
    id: 26,
    subject: "Chemistry",
    topic: "Redox Reactions",
    year: 1991,
    exam: "JAMB",
    question: "2H2S(g) + SO2(g) -> 3S(s) + 2H2O(l). The reaction equation above represents",
    options: [
      "a redox reaction in which H2S is the oxidant and SO2 is the reductant",
      "a redox reaction in which SO2 is the oxidant and H2S is the reductant",
      "not a redox reaction because there is no oxidant present",
      "not a redox reaction because there is no reductant present"
    ],
    answer: "a redox reaction in which SO2 is the oxidant and H2S is the reductant",
    explanation: "Sulphur in H2S changes from -2 to 0 and is oxidized, so H2S is the reductant. Sulphur in SO2 changes from +4 to 0 and is reduced, so SO2 is the oxidant."
  },

  {
    id: 27,
    subject: "Chemistry",
    topic: "Chemical Kinetics",
    year: 1991,
    exam: "JAMB",
    question: "Manganese(IV) oxide is known to hasten the decomposition of hydrogen peroxide. Its main action is to",
    options: [
      "increase the surface area of the reactants",
      "increase the concentration of the reactants",
      "lower the activation energy for the reaction",
      "lower the heat of reaction, H, for the reaction"
    ],
    answer: "lower the activation energy for the reaction",
    explanation: "MnO2 acts as a catalyst. A catalyst provides an alternative reaction pathway with a lower activation energy."
  },

  {
    id: 28,
    subject: "Chemistry",
    topic: "Chemical Energetics",
    year: 1991,
    exam: "JAMB",
    question: "1.1 g of CaCl2 dissolved in 50 cm3 of water caused a rise in temperature of 34 C. The heat of solution for CaCl2 in kJ per mole is [Ca = 40, Cl = 35.5, specific heat capacity of water = 4.18 J g-1 K-1]",
    options: [
      "-71.1",
      "-4.18",
      "+17.1",
      "+111.0"
    ],
    answer: "-71.1",
    explanation: "Heat released = mcDeltaT = 50 x 4.18 x 3.4 = 710.6 J = 0.7106 kJ. Moles of CaCl2 = 1.1/111 = 0.01 mol. Therefore DeltaH = -0.7106/0.01 = -71.1 kJ/mol."
  },

  {
    id: 29,
    subject: "Chemistry",
    topic: "Chemical Equilibrium",
    year: 1991,
    exam: "JAMB",
    question: "NO(g) + CO(g) <=> 1/2 N2(g) + CO2(g), DeltaH = -89.3 kJ. What conditions would favour maximum conversion of nitrogen(II) oxide and carbon(II) oxide into products?",
    options: [
      "low temperature and high pressure",
      "high temperature and low pressure",
      "high temperature and high pressure",
      "low temperature and low pressure"
    ],
    answer: "low temperature and high pressure",
    explanation: "The forward reaction is exothermic, so lower temperature favours the products. There are 2 moles of gas on the reactant side and 1.5 moles on the product side, so high pressure also favours the products."
  },

  {
    id: 30,
    subject: "Chemistry",
    topic: "Chemical Equilibrium",
    year: 1991,
    exam: "JAMB",
    question: "Which of the following gaseous equilibria is completely unaffected by a pressure change?",
    options: [
      "2NaCl(g) <=> 2Na(g) + Cl2(g)",
      "H2(g) + I2(g) <=> 2HI(g)",
      "2O3(g) <=> 3O2(g)",
      "2NO2(g) <=> N2O4(g)"
    ],
    answer: "H2(g) + I2(g) <=> 2HI(g)",
    explanation: "The reaction has 2 moles of gas on each side, so changing pressure does not shift its equilibrium position."
  },

  {
    id: 31,
    subject: "Chemistry",
    topic: "Chemical Kinetics",
    year: 1991,
    exam: "JAMB",
    question: "The initial concentration of NO is 0.001 M and the initial rate is 3.0 x 10^(-5) mol/s. When the concentration of NO is 0.002 M, the initial rate is 1.2 x 10^(-4) mol/s. Doubling the initial concentration of NO increases the rate of reaction by a factor of",
    options: [
      "two",
      "three",
      "four",
      "five"
    ],
    answer: "four",
    explanation: "Rate factor = (1.2 x 10^(-4)) / (3.0 x 10^(-5)) = 4. Therefore doubling the concentration increases the rate fourfold."
  },

  {
    id: 32,
    subject: "Chemistry",
    topic: "Gases & Non-Metals",
    year: 1991,
    exam: "JAMB",
    question: "Which of the following gases will rekindle a brightly glowing splint?",
    options: [
      "NO2",
      "NO",
      "N2O",
      "Cl2"
    ],
    answer: "N2O",
    explanation: "N2O can support combustion and can release oxygen when heated. It is therefore the intended answer in the JAMB source."
  },

  {
    id: 33,
    subject: "Chemistry",
    topic: "Inorganic Chemistry",
    year: 1991,
    exam: "JAMB",
    question: "Which of the following salts can be melted without decomposition?",
    options: [
      "Na2CO3",
      "CaCO3",
      "MgCO3",
      "ZnCO3"
    ],
    answer: "Na2CO3",
    explanation: "Sodium carbonate is thermally stable and can be melted without undergoing the decomposition characteristic of many carbonates of smaller or more highly polarizing metal ions."
  },

  {
    id: 34,
    subject: "Chemistry",
    topic: "Gases & Non-Metals",
    year: 1991,
    exam: "JAMB",
    question: "Oxygen gas can be prepared by heating",
    options: [
      "ammonium trioxonitrate(V)",
      "ammonium trioxonitrate(III)",
      "potassium trioxonitrate(V)",
      "manganese(IV) oxide"
    ],
    answer: "potassium trioxonitrate(V)",
    explanation: "On heating, potassium nitrate decomposes to potassium nitrite and oxygen: 2KNO3 -> 2KNO2 + O2."
  },

  /*
  // CHECK SOURCE:
  // The original Q35 is "The appropriate test paper to use in the above experiment is moist..."
  // but the preceding experimental context/diagram is missing from the available source.
  // None of the four paper options can be justified specifically from the oxygen-preparation
  // question in Q34. It is therefore commented out rather than assigning a guessed answer.
  {
    id: 35,
    subject: "Chemistry",
    topic: "Laboratory Tests",
    year: 1991,
    exam: "JAMB",
    question: "The appropriate test paper to use in the above experiment is moist",
    options: [
      "litmus paper",
      "potassium heptaoxodichromate(VI) paper",
      "lead(II) trioxonitrate(V) paper",
      "universal indicator paper"
    ],
    answer: "litmus paper",
    explanation: "Source context is missing, so this item should not be treated as fully verified."
  },
  */

  {
    id: 36,
    subject: "Chemistry",
    topic: "Qualitative Analysis",
    year: 1991,
    exam: "JAMB",
    question: "Addition of aqueous ammonia to a solution of Zn2+ gives a white precipitate which dissolves in excess ammonia because",
    options: [
      "zinc is amphoteric",
      "zinc hydroxide is readily soluble in water",
      "zinc forms a complex which is readily soluble in excess ammonia",
      "ammonia solution is a strong base"
    ],
    answer: "zinc forms a complex which is readily soluble in excess ammonia",
    explanation: "Zinc hydroxide initially precipitates. In excess ammonia, zinc forms the soluble complex ion [Zn(NH3)4]2+, causing the precipitate to dissolve."
  },

  {
    id: 37,
    subject: "Chemistry",
    topic: "Qualitative Analysis",
    year: 1991,
    exam: "JAMB",
    question: "Which of the following, in clear solution, forms a white precipitate when carbon(IV) oxide is bubbled into it for a short time?",
    options: [
      "KOH",
      "NaOH",
      "Ca(OH)2",
      "Al(OH)3"
    ],
    answer: "Ca(OH)2",
    explanation: "CO2 reacts with calcium hydroxide solution to form insoluble calcium carbonate, producing a white precipitate."
  },

  {
    id: 38,
    subject: "Chemistry",
    topic: "Applied Chemistry",
    year: 1991,
    exam: "JAMB",
    question: "Copper(II) tetraoxosulphate(VI) is widely used as a",
    options: [
      "fertilizer",
      "fungicide",
      "disinfectant",
      "purifier"
    ],
    answer: "fungicide",
    explanation: "Copper(II) sulphate is widely used as a fungicide, including in Bordeaux mixture."
  },

  {
    id: 39,
    subject: "Chemistry",
    topic: "Inorganic Chemistry",
    year: 1991,
    exam: "JAMB",
    question: "Which of the following metals can be prepared in samples by the thermal decomposition of their trioxonitrate(V) salts?",
    options: [
      "Copper and mercury",
      "Silver and copper",
      "Mercury and silver",
      "Magnesium and mercury"
    ],
    answer: "Mercury and silver",
    explanation: "The nitrates of mercury and silver undergo thermal decomposition and, on strong heating, can ultimately yield the metals. Copper nitrate decomposes to copper(II) oxide rather than metallic copper, while magnesium nitrate gives magnesium oxide."
  },

  {
    id: 40,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1991,
    exam: "JAMB",
    question: "Which of the following compounds can exist as geometric isomers?",
    options: [
      "2-methylbut-2-ene",
      "but-2-ene",
      "but-1-ene",
      "1,2-dibromoethene"
    ],
    answer: "but-2-ene",
    explanation: "In but-2-ene, each carbon atom of the double bond is attached to two different groups, H and CH3. Therefore cis and trans forms are possible."
  },

  {
    id: 41,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1991,
    exam: "JAMB",
    question: "How many structural isomers can be written for the alkyl bromide compound with the molecular formula C4H9Br?",
    options: [
      "3",
      "4",
      "6",
      "8"
    ],
    answer: "4",
    explanation: "The four structural isomers are 1-bromobutane, 2-bromobutane, 1-bromo-2-methylpropane and 2-bromo-2-methylpropane. The original OCR incorrectly gives C2H9Br, which is chemically impossible for an alkyl bromide."
  },

  {
    id: 42,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1991,
    exam: "JAMB",
    question: "The final products of the complete chlorination of methane in the presence of ultraviolet light are hydrogen chloride and",
    options: [
      "chloromethane",
      "tetrachloromethane",
      "trichloromethane",
      "dichloromethane"
    ],
    answer: "tetrachloromethane",
    explanation: "With excess chlorine and ultraviolet light, the four hydrogen atoms of methane can be successively replaced by chlorine atoms, giving tetrachloromethane (CCl4) and HCl."
  },

  {
    id: 43,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1991,
    exam: "JAMB",
    question: "How many grams of bromine will be required to completely react with 10 g of propyne? [C = 12, H = 1, Br = 80]",
    options: [
      "20 g",
      "40 g",
      "60 g",
      "80 g"
    ],
    answer: "80 g",
    explanation: "Propyne, C3H4, has a molar mass of 40 g/mol. Ten grams is 0.25 mol. Complete addition across the triple bond requires 2 mol of Br2 per mol of propyne, so 0.50 mol Br2 is required. Since Br2 has a molar mass of 160 g/mol, the mass required is 0.50 x 160 = 80 g."
  },

  {
    id: 44,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1991,
    exam: "JAMB",
    question: "Ethene, when passed into concentrated H2SO4, is rapidly absorbed. The product is diluted with water and then warmed to produce",
    options: [
      "ethanol",
      "diethyl ether",
      "ethanal",
      "diethyl sulphate"
    ],
    answer: "ethanol",
    explanation: "Ethene reacts with concentrated H2SO4 to form ethyl hydrogen sulphate. Hydrolysis of this intermediate with water gives ethanol."
  },

  {
    id: 45,
    subject: "Chemistry",
    topic: "Applied Chemistry",
    year: 1991,
    exam: "JAMB",
    question: "One of the advantages of detergents over soap is that detergents",
    options: [
      "are easier to manufacture",
      "foam more than soap",
      "form soluble salts with hard water",
      "are able to deter germs more than soap"
    ],
    answer: "form soluble salts with hard water",
    explanation: "Detergents form soluble salts with Ca2+ and Mg2+ ions in hard water, whereas soaps form insoluble scum."
  },

  {
    id: 46,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1991,
    exam: "JAMB",
    question: "The reaction of 2-chlorobutane with alcoholic KOH to form but-2-ene and but-1-ene is an example of",
    options: [
      "dehydration",
      "dehydrohalogenation",
      "neutralization",
      "a fission reaction"
    ],
    answer: "dehydrohalogenation",
    explanation: "Alcoholic KOH removes hydrogen and chlorine from adjacent carbon atoms of the haloalkane, forming an alkene. This elimination is called dehydrohalogenation."
  },

  {
    id: 47,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1991,
    exam: "JAMB",
    question: "A certain liquid has a high boiling point. It is viscous, non-toxic, miscible with water and very hygroscopic. This liquid is most likely to be",
    options: [
      "CH3CH2CH2CH2OH",
      "CH3CH2OH",
      "CH3CH(OH)CH2CH3",
      "CH2OHCHOHCH2OH"
    ],
    answer: "CH2OHCHOHCH2OH",
    explanation: "The compound is glycerol (propane-1,2,3-triol). Its three hydroxyl groups produce extensive hydrogen bonding, giving it a high boiling point, high viscosity, water miscibility and strong hygroscopic behaviour."
  },

  {
    id: 48,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1991,
    exam: "JAMB",
    question: "The compound CH3-CH(CH3)-CH2Cl is known as",
    options: [
      "1-chloro-2-methylbutane",
      "1-chloro-2-methylpropane",
      "2-chloromethylpropane",
      "1-chloro-2,2-dimethylethane"
    ],
    answer: "1-chloro-2-methylpropane",
    explanation: "The longest carbon chain contains three carbon atoms, so the parent is propane. Numbering from the chlorine end gives chlorine at carbon 1 and methyl at carbon 2."
  },

  {
    id: 49,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1991,
    exam: "JAMB",
    question: "Which of the following statements is TRUE of the complete hydrolysis of a glyceride by sodium hydroxide?",
    options: [
      "3 moles of NaOH are required for each mole of glyceride",
      "3 moles of glycerol are produced",
      "Only one mole of soap is formed",
      "Concentrated H2SO4 is essential for the completion of the reaction"
    ],
    answer: "3 moles of NaOH are required for each mole of glyceride",
    explanation: "A glyceride is a triester of glycerol. Complete saponification requires three moles of NaOH per mole of triglyceride and produces one mole of glycerol and three moles of soap."
  },

  {
    id: 50,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1991,
    exam: "JAMB",
    question: "Which of the following are the products of the reaction between CH3COOH and Cl2 in sunlight?",
    options: [
      "ClCH2COOH + HCl",
      "CH3COCl + HOCl",
      "CH3COOCl + HCl",
      "CH3COCl + H2O"
    ],
    answer: "ClCH2COOH + HCl",
    explanation: "In the presence of light, chlorine substitutes a hydrogen atom on the methyl group of ethanoic acid, producing chloroethanoic acid and HCl."
  }

];

export default chemJamb1991;