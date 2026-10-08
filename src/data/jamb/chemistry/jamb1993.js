// JAMB 1993 Chemistry Past Questions
// Fully audited — questions, answers, calculations, explanations, source/OCR issues, and app-safe formatting.
// Missing Q27 was restored from the original 1993 question sequence.

const chemJamb1993 = [

  {
    id: 1, subject: "Chemistry", topic: "Separation Techniques", year: 1993, exam: "JAMB",

    question: "The dissolution of common salt in water is a physical change because",

    options: [
      "the salt can be obtained by crystallization",
      "the salt can be recovered by the evaporation of water",
      "heat is not generated during mixing",
      "the solution will not boil at 100 C"
    ],

    answer: "the salt can be recovered by the evaporation of water",

    explanation: "Dissolution of NaCl in water is a physical change because it is reversible. No new chemical substance is formed, and the original salt can be recovered by evaporating the water."
  },

  {
    id: 2, subject: "Chemistry", topic: "Separation Techniques", year: 1993, exam: "JAMB",

    question: "Which of the following substances is a mixture?",

    options: ["Sulphur powder", "Bronze", "Distilled water", "Ethanol"],

    answer: "Bronze",

    explanation: "Sulphur is an element, while distilled water and ethanol are pure substances. Bronze is an alloy consisting mainly of copper and tin, so it is a homogeneous mixture."
  },

  {
    id: 3, subject: "Chemistry", topic: "Stoichiometry", year: 1993, exam: "JAMB",

    question: "How many moles of oxygen molecules would be produced from the decomposition of 2.50 moles of potassium trioxochlorate(V)?",

    options: ["2.50", "3.50", "3.75", "7.50"],

    answer: "3.75",

    explanation: "The balanced equation is 2KClO3 -> 2KCl + 3O2. Therefore, 2 moles of KClO3 produce 3 moles of O2. For 2.50 moles, O2 produced = (3/2) x 2.50 = 3.75 moles."
  },

  {
    id: 4, subject: "Chemistry", topic: "Stoichiometry", year: 1993, exam: "JAMB",

    question: "A balanced chemical equation obeys the law of",

    options: [
      "Conservation of mass",
      "Definite proportions",
      "Multiple proportions",
      "Conservation of energy"
    ],

    answer: "Conservation of mass",

    explanation: "A balanced chemical equation obeys the law of conservation of mass because the number of atoms of each element is the same on both sides of the equation."
  },

  {
    id: 5, subject: "Chemistry", topic: "Gas Laws", year: 1993, exam: "JAMB",

    question: "At 25 C and 1 atm, a gas occupies a volume of 1.50 dm3. What volume will it occupy at 100 C at 1 atm?",

    options: ["1.88 dm3", "6.00 dm3", "18.80 dm3", "60.00 dm3"],

    answer: "1.88 dm3",

    explanation: "At constant pressure, Charles's law applies: V1/T1 = V2/T2. T1 = 298 K and T2 = 373 K. Therefore, V2 = (1.50 x 373) / 298 = 1.88 dm3."
  },

  {
    id: 6, subject: "Chemistry", topic: "Gas Laws", year: 1993, exam: "JAMB",

    question: "A gaseous mixture of 80.0 g of oxygen and 56.0 g of nitrogen has a total pressure of 1.8 atm. The partial pressure of oxygen in the mixture is [O = 16, N = 14]",

    options: ["0.8 atm", "1.0 atm", "1.2 atm", "1.4 atm"],

    answer: "1.0 atm",

    explanation: "Moles of O2 = 80/32 = 2.5 mol. Moles of N2 = 56/28 = 2.0 mol. Total moles = 4.5 mol. Mole fraction of O2 = 2.5/4.5 = 5/9. Partial pressure = (5/9) x 1.8 = 1.0 atm."
  },

  // CHECK SOURCE: The original question depends on a graph that is not included in the supplied data.
  // The supplied answer III is retained because it is consistent with the ideal-gas PV relationship.
  {
    id: 7, subject: "Chemistry", topic: "Gas Laws", year: 1993, exam: "JAMB",

    question: "Which of the curves in the text graph (Fig 1) represents the behavior of 1 mole of an ideal gas?",

    options: ["I", "II", "III", "IV"],

    answer: "III",

    explanation: "For an ideal gas at constant temperature, PV = nRT, so the product PV remains constant. The correct curve must therefore represent the constant PV relationship shown in the original figure."
  },

  {
    id: 8, subject: "Chemistry", topic: "Kinetic Theory", year: 1993, exam: "JAMB",

    question: "For iodine crystals to sublime on heating, the molecules must acquire energy that is",

    options: [
      "less than the forces of attraction in the solid",
      "equal to the forces of attraction in the solid",
      "necessary to melt the solid",
      "greater than the forces of attraction in both solid and liquid phases"
    ],

    answer: "greater than the forces of attraction in both solid and liquid phases",

    explanation: "Sublimation is the direct change of a solid to a gas. The particles must acquire enough energy to overcome the intermolecular attractions holding the solid together and escape into the gaseous state."
  },

  {
    id: 9, subject: "Chemistry", topic: "Chemical Bonding", year: 1993, exam: "JAMB",

    question: "An element, E, has the electronic configuration 1s2 2s2 2p6 3s2 3p3. The reaction of E with a halogen X can give",

    options: ["EX3 and EX5", "EX3 only", "EX5 only", "EX2 and EX3"],

    answer: "EX3 and EX5",

    explanation: "E has five valence electrons and belongs to Group 15. It can form compounds in which it has oxidation states +3 and +5, giving EX3 and EX5."
  },

  {
    id: 10, subject: "Chemistry", topic: "Atomic Structure", year: 1993, exam: "JAMB",

    question: "Two atoms represented as 235/92 U and 238/92 U are described as",

    options: ["isomers", "allotropes", "isotopes", "anomers"],

    answer: "isotopes",

    explanation: "The two uranium atoms have the same atomic number, 92, but different mass numbers, 235 and 238. They are therefore isotopes."
  },

  {
    id: 11, subject: "Chemistry", topic: "Chemical Bonding", year: 1993, exam: "JAMB",

    question: "As the difference in electronegativity between bonded atoms increases, the polarity of the bond",

    options: ["decreases", "increases", "remains unchanged", "reduces to zero"],

    answer: "increases",

    explanation: "A greater electronegativity difference causes a greater unequal sharing of bonding electrons, increasing bond polarity."
  },

  {
    id: 12, subject: "Chemistry", topic: "Chemical Bonding", year: 1993, exam: "JAMB",

    question: "Which group of elements forms hydrides that are pyramidal in structure?",

    options: ["Group III", "Group IV", "Group V", "Group VI"],

    answer: "Group V",

    explanation: "Group V elements have five valence electrons. Their hydrides such as NH3 have three bonding pairs and one lone pair around the central atom, giving a trigonal pyramidal shape."
  },

  {
    id: 13, subject: "Chemistry", topic: "Chemical Bonding", year: 1993, exam: "JAMB",

    question: "Water has a rather high boiling point despite its low molecular mass because of the presence of",

    options: ["hydrogen bonding", "covalent bonding", "ionic bonding", "metallic bonding"],

    answer: "hydrogen bonding",

    explanation: "Water molecules form strong intermolecular hydrogen bonds. Considerable energy is required to overcome these attractions during boiling."
  },

  {
    id: 14, subject: "Chemistry", topic: "Gases & Non-Metals", year: 1993, exam: "JAMB",

    question: "Argon is used in gas-filled electric lamps because it helps to",

    options: [
      "prevent the reduction of the lamp filament",
      "prevent oxidation of the lamp filament",
      "make lamp filaments glow brightly",
      "keep the atmosphere in the lamp inert"
    ],

    answer: "prevent oxidation of the lamp filament",

    explanation: "Argon is chemically unreactive. It provides an inert atmosphere around the hot filament and prevents the filament from reacting with oxygen."
  },

  {
    id: 15, subject: "Chemistry", topic: "Environmental Chemistry", year: 1993, exam: "JAMB",

    question: "The air around a petroleum refinery is most likely to contain",

    options: [
      "CO2, SO3 and N2O",
      "CO2, CO and N2O",
      "SO2, CO and NO2",
      "PH3, H2O and CO2"
    ],

    answer: "SO2, CO and NO2",

    explanation: "Petroleum refining and fuel combustion can release sulphur dioxide, carbon monoxide and nitrogen oxides into the surrounding atmosphere. The original question's correct combination is SO2, CO and NO2."
  },

  {
    id: 16, subject: "Chemistry", topic: "Qualitative Analysis", year: 1993, exam: "JAMB",

    question: "Water can be chemically identified by its ability to turn",

    options: [
      "anhydrous copper(II) tetraoxosulphate(VI) blue",
      "anhydrous sodium trioxocarbonate(IV) white",
      "potassium heptaoxochromate(VI) green",
      "copper(II) trioxocarbonate(IV) black"
    ],

    answer: "anhydrous copper(II) tetraoxosulphate(VI) blue",

    explanation: "Anhydrous copper(II) sulphate is white. When water is added, it becomes hydrated copper(II) sulphate and turns blue. This is a standard test for water."
  },

  {
    id: 17, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1993, exam: "JAMB",

    question: "The phenomenon whereby sodium trioxocarbonate(IV) decahydrate loses some of its water of crystallization on exposure to the atmosphere is known as",

    options: ["deliquescence", "hygroscopy", "effervescence", "efflorescence"],

    answer: "efflorescence",

    explanation: "Efflorescence is the loss of water of crystallization from a hydrated salt when it is exposed to air."
  },

  {
    id: 18, subject: "Chemistry", topic: "Solutions & Solubility", year: 1993, exam: "JAMB",

    question: "A student prepares 0.5 M solutions each of hydrochloric and ethanoic acids and then measures their pH. The result would show that the",

    options: [
      "pH values are equal",
      "HCl solution has a higher pH",
      "sum of the pH values is 14",
      "ethanoic acid solution has a higher pH"
    ],

    answer: "ethanoic acid solution has a higher pH",

    explanation: "HCl is a strong acid and ionizes almost completely, producing a high H+ concentration. Ethanoic acid is weak and ionizes only partially, so its H+ concentration is lower and its pH is higher."
  },

  // CHECK SOURCE: The answer depends on the original solubility graph, which is not included in the supplied data.
  {
    id: 19, subject: "Chemistry", topic: "Solutions & Solubility", year: 1993, exam: "JAMB",

    question: "For which salt in the provided solubility graph does the solubility increase most rapidly with a rise in temperature?",

    options: ["CaSO4", "KNO3", "NaCl", "KCl"],

    answer: "KNO3",

    explanation: "KNO3 has the steepest increase in solubility with temperature among the listed salts in the original graph."
  },

  {
    id: 20, subject: "Chemistry", topic: "Acids, Bases & Salts", year: 1993, exam: "JAMB",

    question: "NH3 + H3O+ <-> NH4+ + H2O. It may be deduced from the reaction equation above that",

    options: [
      "a redox reaction has occurred",
      "H3O+ acts as an oxidizing agent",
      "H3O+ acts as an acid",
      "water acts as an acid"
    ],

    answer: "H3O+ acts as an acid",

    explanation: "According to the Bronsted-Lowry theory, an acid is a proton donor. H3O+ donates a proton to NH3 and becomes H2O, so H3O+ acts as an acid."
  },

  {
    id: 21, subject: "Chemistry", topic: "Solutions & Volumetric Analysis", year: 1993, exam: "JAMB",

    question: "4.0 g of sodium hydroxide in 250 cm3 of solution contains a concentration of",

    options: [
      "0.40 moles per dm3",
      "0.10 moles per dm3",
      "0.04 moles per dm3",
      "0.02 moles per dm3"
    ],

    answer: "0.40 moles per dm3",

    explanation: "Molar mass of NaOH = 40 g/mol. Moles = 4.0/40 = 0.10 mol. Volume = 250 cm3 = 0.25 dm3. Concentration = 0.10/0.25 = 0.40 mol/dm3."
  },

  // CHECK SOURCE: Available 1993 transcriptions state 0.05 A, but that value gives 0.2 Faraday per mole of metal and cannot produce any listed integer charge.
  // Using 0.5 A gives Q = 965 C and a charge of +2, which matches the marked answer and the answer choices.
  {
    id: 22, subject: "Chemistry", topic: "Electrochemistry", year: 1993, exam: "JAMB",

    question: "During the electrolysis of a salt of metal M, a constant current of 0.5 A flows for 32 minutes 10 seconds and deposits 0.325 g of M. What is the charge of the metal ion? [M = 65, 1 Faraday = 96,500 C/mol]",

    options: ["1", "2", "3", "4"],

    answer: "2",

    explanation: "Time = (32 x 60) + 10 = 1930 s. Charge passed = 0.5 x 1930 = 965 C. Moles of M deposited = 0.325/65 = 0.005 mol. Therefore, charge required per mole = 965/0.005 = 193,000 C/mol. Since 1 Faraday = 96,500 C/mol, this is 2 Faradays per mole, so the metal ion has charge +2."
  },

  {
    id: 23, subject: "Chemistry", topic: "Electrochemistry", year: 1993, exam: "JAMB",

    question: "Which of the following reactions occurs at the anode during the electrolysis of a very dilute aqueous solution of sodium chloride?",

    options: [
      "4OH- -> 2H2O + O2 + 4e-",
      "2Cl- -> Cl2 + 2e-",
      "OH- + Cl- -> HClO + 2e-",
      "Na+ + e- -> Na"
    ],

    answer: "4OH- -> 2H2O + O2 + 4e-",

    explanation: "In a very dilute NaCl solution, hydroxide ions from water are preferentially discharged at the anode, producing oxygen. Oxidation occurs at the anode."
  },

  {
    id: 24, subject: "Chemistry", topic: "Electrochemistry", year: 1993, exam: "JAMB",

    question: "Consider the standard reduction potentials: Cu2+/Cu = +0.34 V, Fe2+/Fe = -0.44 V, Ba2+/Ba = -2.90 V, Zn2+/Zn = -0.76 V. From the data above, it can be deduced that the most powerful reducing agent among the four metals is",

    options: ["Cu", "Fe", "Ba", "Zn"],

    answer: "Ba",

    explanation: "The strongest reducing agent is the metal that is most easily oxidized. This corresponds to the most negative standard reduction potential. Barium has the most negative value, -2.90 V."
  },

  {
    id: 25, subject: "Chemistry", topic: "Oxidation Numbers", year: 1993, exam: "JAMB",

    question: "The oxidation states of chlorine in HOCl, HClO3 and HClO4 are respectively",

    options: [
      "-1, +5 and +7",
      "-1, -5 and +7",
      "+1, +3 and +4",
      "+1, +5 and +7"
    ],

    answer: "+1, +5 and +7",

    explanation: "In HOCl, chlorine is +1. In HClO3, chlorine is +5. In HClO4, chlorine is +7. Therefore, the oxidation states are +1, +5 and +7."
  },

  {
    id: 26, subject: "Chemistry", topic: "Chemical Energetics", year: 1993, exam: "JAMB",

    question: "A chemical reaction takes place spontaneously if the thermodynamic criteria show that",

    options: [
      "Delta G = 0",
      "Delta S < 0 and Delta H > 0",
      "Delta H < TDelta S",
      "Delta G > 0"
    ],

    answer: "Delta H < TDelta S",

    explanation: "A reaction is spontaneous when Delta G < 0. Since Delta G = Delta H - TDelta S, spontaneous reaction requires Delta H - TDelta S < 0, which means Delta H < TDelta S."
  },

  {
    id: 27, subject: "Chemistry", topic: "Chemical Energetics", year: 1993, exam: "JAMB",

    question: "In the reactions (I) H2(g) + 1/2O2(g) -> H2O(l), Delta H = -286 kJ and (II) C(s) + O2(g) -> CO2(g), Delta H = -406 kJ, the equations imply that",

    options: [
      "more heat is absorbed in (I)",
      "more heat is absorbed in (II)",
      "less heat is evolved in (I)",
      "reaction (II) proceeds faster than (I)",
      "reaction (I) proceeds faster than (II)"
    ],

    answer: "less heat is evolved in (I)",

    explanation: "Both reactions are exothermic because their Delta H values are negative. Reaction (I) releases 286 kJ, while reaction (II) releases 406 kJ. Therefore, less heat is evolved in reaction (I)."
  },

  {
    id: 28, subject: "Chemistry", topic: "Chemical Energetics", year: 1993, exam: "JAMB",

    question: "The standard enthalpies of formation of CO2(g), H2O(g) and CO(g) in kJ/mol are -394, -242 and -110 respectively. What is the standard enthalpy change for the reaction: CO(g) + H2O(g) -> CO2(g) + H2(g)?",

    options: ["-42 kJ mol-1", "+42 kJ mol-1", "-262 kJ mol-1", "+262 kJ mol-1"],

    answer: "-42 kJ mol-1",

    explanation: "Delta H = sum of Delta Hf(products) - sum of Delta Hf(reactants). Therefore, Delta H = [-394 + 0] - [-110 + (-242)] = -394 + 352 = -42 kJ/mol."
  },

  {
    id: 29, subject: "Chemistry", topic: "Chemical Equilibrium", year: 1993, exam: "JAMB",

    question: "10 g of a solid is in equilibrium with its own vapour inside a sealed container. When a small additional amount of 1 g of solid is added, the internal vapour pressure will",

    options: ["remain the same", "drop", "increase by 1%", "increase by 99%"],

    answer: "remain the same",

    explanation: "At constant temperature, the vapour pressure of a substance in equilibrium with its solid phase does not depend on the amount of solid present, provided some solid remains. Adding more solid therefore does not change the vapour pressure."
  },

  {
    id: 30, subject: "Chemistry", topic: "Chemical Kinetics", year: 1993, exam: "JAMB",

    question: "In the diagram, curve X represents the energy profile for a homogeneous gaseous reaction. Which of the following conditions would alter the profile path to produce curve Y for the same reaction?",

    options: [
      "increase in temperature",
      "increase in the concentration of a reactant",
      "addition of a catalyst",
      "increase in total pressure"
    ],

    answer: "addition of a catalyst",

    explanation: "A catalyst provides an alternative reaction pathway with a lower activation energy. It therefore changes the energy profile while leaving the overall enthalpy change unchanged."
  },

  {
    id: 31, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1993, exam: "JAMB",

    question: "NaCl(s) + H2SO4(l) -> HCl(g) + NaHSO4(s). In the displacement reaction above, concentrated H2SO4 behaves as",

    options: [
      "a strong acid",
      "an oxidizing agent",
      "a good solvent",
      "a dehydrating agent"
    ],

    answer: "a strong acid",

    explanation: "Concentrated sulphuric acid reacts with sodium chloride to liberate hydrogen chloride gas. In this reaction it acts as a strong acid. It is also less volatile than HCl, allowing it to displace the more volatile acid from its salt."
  },

  {
    id: 32, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1993, exam: "JAMB",

    question: "Which of these nitrate salts will decompose on heating to produce its corresponding metal, oxygen, and nitrogen(IV) oxide gas?",

    options: [
      "Silver trioxonitrate(V)",
      "Sodium trioxonitrate(V)",
      "Calcium trioxonitrate(V)",
      "Lithium trioxonitrate(V)"
    ],

    answer: "Silver trioxonitrate(V)",

    explanation: "Silver nitrate decomposes on heating to form silver metal, nitrogen(IV) oxide and oxygen: 2AgNO3 -> 2Ag + 2NO2 + O2."
  },

  {
    id: 33, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1993, exam: "JAMB",

    question: "An experiment produces a gaseous mixture of carbon(IV) oxide and carbon(II) oxide. In order to obtain pure carbon(II) oxide, the gas mixture should be",

    options: [
      "passed over heated copper(II) oxide",
      "bubbled through concentrated tetraoxosulphate(VI) acid",
      "bubbled through sodium hydroxide solution",
      "bubbled through distilled water"
    ],

    answer: "bubbled through sodium hydroxide solution",

    explanation: "CO2 reacts with NaOH and is absorbed, while CO does not react with NaOH under these conditions. The gas remaining is therefore mainly CO."
  },

  {
    id: 34, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1993, exam: "JAMB",

    question: "Which of the following is a characteristic property of ionic chlorides?",

    options: [
      "They can be completely decomposed by gentle heating",
      "They react with aqueous AgNO3 to give a white precipitate which is soluble in excess ammonia",
      "They explode violently when in contact with dry ammonia gas",
      "They react with concentrated H2SO4 to give white fumes of chlorine gas"
    ],

    answer: "They react with aqueous AgNO3 to give a white precipitate which is soluble in excess ammonia",

    explanation: "Chloride ions react with AgNO3 to form a white precipitate of AgCl. Silver chloride dissolves in ammonia because it forms a soluble silver-ammonia complex."
  },

  {
    id: 35, subject: "Chemistry", topic: "Qualitative Analysis", year: 1993, exam: "JAMB",

    question: "When dilute aqueous solutions of lead(II) nitrate and potassium bromide are mixed, a precipitate is observed. The chemical products of this reaction are",

    options: [
      "PbO(s) + Br-(aq) + KNO3(aq)",
      "Br2(g) + NO2(g) + PbBr2(s)",
      "PbBr2(s) + K+(aq) + NO3-(aq)",
      "Pb(s) + K+(aq) + Br2(g)"
    ],

    answer: "PbBr2(s) + K+(aq) + NO3-(aq)",

    explanation: "Pb(NO3)2 reacts with KBr by double displacement: Pb(NO3)2 + 2KBr -> PbBr2(s) + 2KNO3(aq). Lead(II) bromide forms the precipitate."
  },

  {
    id: 36, subject: "Chemistry", topic: "Applied Chemistry", year: 1993, exam: "JAMB",

    question: "Bronze is a commercial structural alloy that consists primarily of",

    options: [
      "Copper and tin",
      "Silver and gold",
      "Copper and nickel",
      "Copper and zinc"
    ],

    answer: "Copper and tin",

    explanation: "Bronze consists primarily of copper and tin. Copper and zinc form brass."
  },

  {
    id: 37, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1993, exam: "JAMB",

    question: "Copper metal will react with hot concentrated trioxonitrate(V) acid to produce",

    options: [
      "Cu(NO3)2 + NO + N2O4 + H2O",
      "Cu(NO3)2 + NO + H2O",
      "CuO + NO2 + H2O",
      "Cu(NO3)2 + NO2 + H2O"
    ],

    answer: "Cu(NO3)2 + NO2 + H2O",

    explanation: "Hot concentrated nitric acid oxidizes copper to copper(II) nitrate and is reduced mainly to NO2. The balanced equation is Cu + 4HNO3 -> Cu(NO3)2 + 2NO2 + 2H2O."
  },

  {
    id: 38, subject: "Chemistry", topic: "Applied Chemistry", year: 1993, exam: "JAMB",

    question: "The active reducing agent in the blast furnace responsible for reducing iron ores into free iron is",

    options: [
      "carbon / coke",
      "limestone",
      "carbon(II) oxide gas",
      "calcium oxide"
    ],

    answer: "carbon(II) oxide gas",

    explanation: "Carbon monoxide is the principal reducing agent in the blast furnace. It reduces iron oxides to iron, for example: Fe2O3 + 3CO -> 2Fe + 3CO2."
  },

  {
    id: 39, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1993, exam: "JAMB",

    question: "Al2O3(s) + 3H2SO4(aq) -> Al2(SO4)3(aq) + 3H2O(l) and Al2O3(s) + 2NaOH(aq) + 3H2O(l) -> 2NaAl(OH)4(aq). We can conclude from the equations above that Al2O3(s) is",

    options: [
      "an acidic oxide",
      "an amphoteric oxide",
      "a basic oxide",
      "a neutral oxide"
    ],

    answer: "an amphoteric oxide",

    explanation: "Al2O3 reacts with both acids and bases. An oxide that shows both acidic and basic behaviour is called amphoteric."
  },

  {
    id: 40, subject: "Chemistry", topic: "Organic Chemistry", year: 1993, exam: "JAMB",

    question: "The two functional groups present in an amino acid molecule like glycine (H2N-CH2-COOH) are",

    options: [
      "alcohol and amine",
      "acid and amine",
      "aldehyde and acid",
      "ketone and amine"
    ],

    answer: "acid and amine",

    explanation: "Glycine contains an amino group (-NH2) and a carboxylic acid group (-COOH). Therefore, the two functional groups are amine and carboxylic acid."
  },

  {
    id: 41, subject: "Chemistry", topic: "Applied Chemistry", year: 1993, exam: "JAMB",

    question: "The distillation fraction of crude petroleum commonly collected and used as jet fuel is",

    options: ["refinery gas", "diesel oil", "kerosene", "gasoline"],

    answer: "kerosene",

    explanation: "Kerosene is the petroleum fraction commonly used as the base for aviation turbine fuel (jet fuel)."
  },

  {
    id: 42, subject: "Chemistry", topic: "Organic Chemistry", year: 1993, exam: "JAMB",

    question: "The correct systematic IUPAC nomenclature for the branched hydrocarbon layout CH3-CH(CH3)-CH2-CH(CH3)-CH2-CH3 is",

    options: [
      "dimethylhexane",
      "2,4-dimethylhexane",
      "1,1-dimethyl-3-methylpentane",
      "3,5-dimethylhexane"
    ],

    answer: "2,4-dimethylhexane",

    explanation: "The longest continuous chain contains six carbon atoms, giving hexane. Numbering from the end nearest the first substituent gives methyl groups at carbons 2 and 4. The correct name is 2,4-dimethylhexane."
  },

  {
    id: 43, subject: "Chemistry", topic: "Applied Chemistry", year: 1993, exam: "JAMB",

    question: "It is undesirable to use lead tetraethyl as an anti-knock agent in modern motor fuels because",

    options: [
      "it is too expensive to manufacture",
      "toxic lead compounds are released into environmental exhaust fumes",
      "it dramatically lowers the octane rating of high-grade petrol",
      "it makes the liquid fuel blend highly explosive"
    ],

    answer: "toxic lead compounds are released into environmental exhaust fumes",

    explanation: "Lead tetraethyl produces toxic lead-containing exhaust emissions. This causes environmental pollution and poses serious health risks."
  },

  {
    id: 44, subject: "Chemistry", topic: "Organic Chemistry", year: 1993, exam: "JAMB",

    question: "The carbon atoms involved in an alkene double bond configuration, such as ethene, are structurally",

    options: ["sp2 hybridized", "sp3 hybridized", "sp2d hybridized", "sp hybridized"],

    answer: "sp2 hybridized",

    explanation: "Each carbon atom in an alkene double bond is sp2 hybridized. The three sp2 orbitals form sigma bonds, while the remaining unhybridized p orbital forms the pi bond."
  },

  {
    id: 45, subject: "Chemistry", topic: "Organic Chemistry", year: 1993, exam: "JAMB",

    question: "The catalytic hydrogenation of benzene completely saturates the ring to produce",

    options: [
      "an open-chain aromatic hydrocarbon",
      "margarine fats",
      "cyclohexane",
      "D.D.T pesticide fractions"
    ],

    answer: "cyclohexane",

    explanation: "Benzene reacts with hydrogen under suitable catalytic conditions to form cyclohexane: C6H6 + 3H2 -> C6H12."
  },

  {
    id: 46, subject: "Chemistry", topic: "Organic Chemistry", year: 1993, exam: "JAMB",

    question: "Organic molecules with structures like CH3-CO-O-CH2CH3 and CH3CH2CH2-COOH are classified respectively as",

    options: [
      "isomers with different formula masses",
      "an ester and a carboxylic acid that are structural isomers",
      "two distinct carboxylic acids",
      "polymers of ethyl ethanoate"
    ],

    answer: "an ester and a carboxylic acid that are structural isomers",

    explanation: "CH3COOCH2CH3 is ethyl ethanoate, an ester. CH3CH2CH2COOH is butanoic acid, a carboxylic acid. Both have molecular formula C4H8O2, so they are structural isomers."
  },

  {
    id: 47, subject: "Chemistry", topic: "Applied Chemistry", year: 1993, exam: "JAMB",

    question: "Palm wine turns sour on long exposure to air because",

    options: [
      "the sugar content is completely converted into ethanol alcohol",
      "carbon(IV) oxide formed during fermentation develops a sour taste",
      "it is commonly adulterated by local tappers using contaminated water tools",
      "microbial activity oxidizes alcohol and produces sour organic acids"
    ],

    answer: "microbial activity oxidizes alcohol and produces sour organic acids",

    explanation: "Microbial activity, especially by acetic-acid-producing bacteria, can oxidize ethanol to ethanoic acid. The formation of organic acids gives palm wine its sour taste."
  },

  // CHECK SOURCE: The original question refers to an apparatus figure that is not included in the supplied data.
  {
    id: 48, subject: "Chemistry", topic: "Organic Chemistry", year: 1993, exam: "JAMB",

    question: "In the organic qualitative analysis apparatus setup where water is dropped onto calcium carbide, the gas generated is passed through an intermediate flask containing copper(II) tetraoxosulphate(VI) in dilute H2SO4 to",

    options: [
      "dry the gas product cleanly",
      "absorb phosphine gas impurities",
      "absorb ethene gas impurities",
      "form an acetylide coordination salt with ethyne"
    ],

    answer: "absorb phosphine gas impurities",

    explanation: "The gas produced from calcium carbide contains ethyne together with impurities such as phosphine. Acidified copper(II) sulphate solution is used to remove phosphine impurity from the gas stream."
  },

  {
    id: 49, subject: "Chemistry", topic: "Applied Chemistry", year: 1993, exam: "JAMB",

    question: "Which of the following organic reaction pathways represents saponification?",

    options: [
      "the reaction of long-chain carboxylic acids with sodium hydroxide",
      "the reaction of alkanoates with mineral acids",
      "the reaction of carboxylic acids with sodium alcohols",
      "the alkaline hydrolysis of alkanoates (esters/fats) using sodium hydroxide"
    ],

    answer: "the alkaline hydrolysis of alkanoates (esters/fats) using sodium hydroxide",

    explanation: "Saponification is the alkaline hydrolysis of an ester or fat using a strong base such as NaOH, producing an alcohol such as glycerol and the salts of fatty acids (soap)."
  },

  {
    id: 50, subject: "Chemistry", topic: "Organic Chemistry", year: 1993, exam: "JAMB",

    question: "The confirmatory functional group test for an alkanoic acid in qualitative organic analysis is its reaction with",

    options: [
      "wet blue litmus paper to turn red",
      "alkanols in acid to form a sweet-smelling ester",
      "aqueous NaOH to form salt and water",
      "aqueous Na2CO3 to liberate a gas which turns clear lime water milky"
    ],

    answer: "aqueous Na2CO3 to liberate a gas which turns clear lime water milky",

    explanation: "Carboxylic acids react with sodium carbonate to release carbon dioxide gas. The gas produces effervescence and turns limewater milky, providing a confirmatory test for a carboxylic acid."
  }

];

export default chemJamb1993;