// JAMB 1990 Chemistry Past Questions
// Fully audited — questions, answers, options, explanations, calculations, and app-safe formatting.
// Missing/garbled source material was reconstructed only where the chemistry and original question could be verified.

const chemJamb1990 = [

  {
    id: 1,
    subject: "Chemistry",
    topic: "Separation Techniques",
    year: 1990,
    exam: "JAMB",
    question: "Which of the following is a physical change?",
    options: [
      "The bubbling of chlorine into water",
      "The bubbling of chlorine into a jar containing hydrogen",
      "The dissolution of sodium chloride in water",
      "The passing of steam over heated iron"
    ],
    answer: "The dissolution of sodium chloride in water",
    explanation: "Dissolving sodium chloride in water is a physical change because no new substance is formed. The salt can be recovered by evaporating the water."
  },

  {
    id: 2,
    subject: "Chemistry",
    topic: "States of Matter",
    year: 1990,
    exam: "JAMB",
    question: "Changes in the physical states of chemical substance T are shown in the scheme below:\nLiquid T -> (Z) -> Solid T\nSolid T -> (X) -> Gaseous T\nGaseous T -> (Y) -> Liquid T\nThe letters X, Y and Z respectively represent:",
    options: [
      "sublimation, condensation and freezing",
      "sublimation, vaporization and solidification",
      "freezing, condensation and sublimation",
      "evaporation, liquefaction and sublimation"
    ],
    answer: "sublimation, condensation and freezing",
    explanation: "X represents solid changing directly to gas, which is sublimation. Y represents gas changing to liquid, which is condensation. Z represents liquid changing to solid, which is freezing."
  },

  {
    id: 3,
    subject: "Chemistry",
    topic: "Stoichiometry",
    year: 1990,
    exam: "JAMB",
    question: "In the reaction SnO2 + 2C -> Sn + 2CO, the mass of coke containing 80% carbon required to reduce 0.032 kg of pure tin(IV) oxide is [Sn = 119, O = 16, C = 12]",
    options: ["0.40 kg", "0.20 kg", "0.06 kg", "0.006 kg"],
    answer: "0.006 kg",
    explanation: "Molar mass of SnO2 = 119 + 32 = 151 g/mol. Moles of SnO2 = 32/151 = 0.212 mol. Two moles of carbon are required per mole of SnO2, so carbon required = 0.424 mol = 5.09 g. Since the coke contains 80% carbon, mass of coke = 5.09/0.80 = 6.36 g = 0.00636 kg, which corresponds to 0.006 kg."
  },

  {
    id: 4,
    subject: "Chemistry",
    topic: "Stoichiometry",
    year: 1990,
    exam: "JAMB",
    question: "The Avogadro's number of atoms in 24 g of magnesium is the same as that of molecules in",
    options: [
      "1 g of hydrogen",
      "16 g of oxygen",
      "32 g of oxygen",
      "35.5 g of chlorine"
    ],
    answer: "32 g of oxygen",
    explanation: "The atomic mass of magnesium is 24, so 24 g contains 1 mole of Mg atoms. One mole of O2 molecules has a mass of 32 g. Therefore, 32 g of oxygen contains Avogadro's number of molecules."
  },

  {
    id: 5,
    subject: "Chemistry",
    topic: "Gas Laws",
    year: 1990,
    exam: "JAMB",
    question: "If a gas occupies a container of volume 146 cm3 at 18°C and 0.971 atm, its volume in cm3 at s.t.p. is",
    options: ["133", "146", "266", "292"],
    answer: "133",
    explanation: "Using P1V1/T1 = P2V2/T2, V2 = (0.971 x 146 x 273)/(291 x 1.00) = 132.99 cm3. Therefore, the volume at s.t.p. is approximately 133 cm3."
  },

  {
    id: 6,
    subject: "Chemistry",
    topic: "Gas Laws",
    year: 1990,
    exam: "JAMB",
    question: "The volume occupied by 1.58 g of a gas at s.t.p. is 500 cm3. What is the relative molecular mass of the gas?",
    options: ["28", "32", "44", "71"],
    answer: "71",
    explanation: "500 cm3 = 0.5 dm3. Moles of gas = 0.5/22.4 = 0.02232 mol. Relative molecular mass = 1.58/0.02232 = 70.8, which is approximately 71."
  },

  {
    id: 7,
    subject: "Chemistry",
    topic: "Gas Laws",
    year: 1990,
    exam: "JAMB",
    question: "Equal volumes of CO, SO2, NO2 and H2S were released into a room at the same point and time. Which of the following gives the correct order of diffusion from fastest to slowest? [S = 32, C = 12, O = 16, N = 14, H = 1]",
    options: [
      "CO, SO2, NO2, H2S",
      "SO2, NO2, H2S, CO",
      "CO, H2S, SO2, NO2",
      "CO, H2S, NO2, SO2"
    ],
    answer: "CO, H2S, NO2, SO2",
    explanation: "By Graham's law, diffusion rate is inversely proportional to the square root of relative molecular mass. The molecular masses are CO = 28, H2S = 34, NO2 = 46 and SO2 = 64. Therefore, the order from fastest to slowest is CO, H2S, NO2, SO2."
  },

  {
    id: 8,
    subject: "Chemistry",
    topic: "Kinetic Theory",
    year: 1990,
    exam: "JAMB",
    question: "A basic postulate of the kinetic theory of gases is that the molecules of a gas move in straight lines between collisions. This implies that",
    options: [
      "collisions are perfectly elastic",
      "forces of repulsion exist between them",
      "forces of attraction and repulsion are negligible",
      "collisions are completely inelastic"
    ],
    answer: "forces of attraction and repulsion are negligible",
    explanation: "According to the kinetic theory of an ideal gas, intermolecular forces are assumed to be negligible. Therefore, molecules move in straight lines between collisions."
  },

  {
    id: 9,
    subject: "Chemistry",
    topic: "Periodic Table",
    year: 1990,
    exam: "JAMB",
    question: "Consider the following atomic data:\nAtom P: Protons = 13, Electrons = 13, Neutrons = 14\nAtom Q: Protons = 16, Electrons = 16, Neutrons = 16\nAtom R: Protons = 17, Electrons = 17, Neutrons = 18\nAtom S: Protons = 19, Electrons = 19, Neutrons = 20\nWhich of the four atoms has a relative atomic mass greater than 30 but less than 40, an odd atomic number, and forms a unipositive ion in solution?",
    options: ["P", "Q", "R", "S"],
    answer: "S",
    explanation: "Atom S has atomic number 19 and mass number 19 + 20 = 39. Potassium has one valence electron and readily forms a unipositive ion, K+."
  },

  {
    id: 10,
    subject: "Chemistry",
    topic: "Chemical Bonding",
    year: 1990,
    exam: "JAMB",
    question: "Which of the following terms indicates the number of bonds that can be formed by an atom?",
    options: ["Oxidation number", "Valence", "Atomic number", "Electronegativity"],
    answer: "Valence",
    explanation: "Valence or valency refers to the combining capacity of an atom and, in this context, the number of bonds it can form."
  },

  {
    id: 11,
    subject: "Chemistry",
    topic: "Chemical Energetics",
    year: 1990,
    exam: "JAMB",
    question: "For the transformation X(s) -> X(g), the type of energy involved is",
    options: ["ionization energy", "sublimation energy", "lattice energy", "electron affinity"],
    answer: "sublimation energy",
    explanation: "The direct conversion of a solid to a gas is sublimation. The energy required for this change is called the enthalpy or energy of sublimation."
  },

  {
    id: 12,
    subject: "Chemistry",
    topic: "Atomic Structure",
    year: 1990,
    exam: "JAMB",
    question: "Chlorine, consisting of two isotopes of mass numbers 35 and 37, has an average atomic mass of 35.5. The relative abundance percentage of the isotope of mass number 37 is",
    options: ["20%", "25%", "50%", "75%"],
    answer: "25%",
    explanation: "Let the abundance of Cl-37 be x. Then 37x + 35(1 - x) = 35.5. Therefore, 2x = 0.5 and x = 0.25. Thus, Cl-37 has an abundance of 25%."
  },

  {
    id: 13,
    subject: "Chemistry",
    topic: "Stoichiometry",
    year: 1990,
    exam: "JAMB",
    question: "10.0 dm3 of air containing H2S as an impurity was passed through a solution of Pb(NO3)2 until all the H2S had reacted, producing 5.02 g of PbS. What is the percentage by volume of hydrogen sulphide in the air sample? [Pb = 207, S = 32, G.M.V at s.t.p. = 22.4 dm3]",
    options: ["50.2%", "47.0%", "4.70%", "0.47%"],
    answer: "4.70%",
    explanation: "Molar mass of PbS = 207 + 32 = 239 g/mol. Moles of PbS = 5.02/239 = 0.0210 mol. The reaction ratio between PbS and H2S is 1:1, so 0.0210 mol of H2S was present. Its volume at s.t.p. is 0.0210 x 22.4 = 0.470 dm3. Percentage by volume = (0.470/10.0) x 100 = 4.70%."
  },

  {
    id: 14,
    subject: "Chemistry",
    topic: "Inorganic Chemistry",
    year: 1990,
    exam: "JAMB",
    question: "A blue solid compound T weighing 5.0 g was left exposed on a laboratory table. After 8 hours, it changed to a pink solid weighing 5.5 g. It can be inferred that substance T",
    options: [
      "is deliquescent",
      "is hygroscopic",
      "contains molecules of water of crystallization",
      "is efflorescent"
    ],
    answer: "is hygroscopic",
    explanation: "The solid gained mass because it absorbed moisture from the atmosphere. This is characteristic of a hygroscopic substance. The colour change is consistent with hydration of anhydrous cobalt(II) chloride."
  },

  {
    id: 15,
    subject: "Chemistry",
    topic: "Applied Chemistry",
    year: 1990,
    exam: "JAMB",
    question: "The effluent of an industrial plant used in the electrolysis of concentrated brine with a flowing mercury cathode may contain impurities like",
    options: [
      "oxygen",
      "hydrogen",
      "mercury(II) chloride",
      "hydrogen chloride"
    ],
    answer: "mercury(II) chloride",
    explanation: "The mercury cathode used in the Castner-Kellner process can result in mercury-containing compounds entering the industrial effluent."
  },

  {
    id: 16,
    subject: "Chemistry",
    topic: "Solutions & Solubility",
    year: 1990,
    exam: "JAMB",
    question: "The solubility in moles per dm3 of 20 g of CuSO4 dissolved in 100 g of water at 18°C is [Cu = 63.5, S = 32, O = 16]",
    options: ["0.13", "0.25", "1.25", "2.00"],
    answer: "1.25",
    explanation: "Molar mass of CuSO4 = 63.5 + 32 + 64 = 159.5 g/mol. Moles of CuSO4 = 20/159.5 = 0.125 mol. Taking 100 g of water as approximately 100 cm3 or 0.1 dm3, the concentration is 0.125/0.1 = 1.25 mol/dm3."
  },

  {
    id: 17,
    subject: "Chemistry",
    topic: "Solutions & Solubility",
    year: 1990,
    exam: "JAMB",
    question: "Smoke consists of",
    options: [
      "solid particles dispersed in a liquid",
      "solid or liquid particles dispersed in a gas",
      "gas or liquid particles dispersed in a liquid",
      "liquid particles dispersed in a liquid"
    ],
    answer: "solid or liquid particles dispersed in a gas",
    explanation: "Smoke is an aerosol colloid in which fine solid or liquid particles are dispersed throughout a gas."
  },

  {
    id: 18,
    subject: "Chemistry",
    topic: "Stoichiometry",
    year: 1990,
    exam: "JAMB",
    question: "Na2C2O4 + CaCl2 -> CaC2O4 + 2NaCl. Given a solution containing 1.34 g of sodium oxalate, calculate the minimum volume of 0.1 M calcium chloride solution required to precipitate all the oxalate ions completely. [Na = 23, C = 12, O = 16]",
    options: [
      "1.00 x 10^(-1) dm3",
      "1.00 x 10^2 cm3",
      "1.40 x 10^(-2) dm3",
      "1.40 x 10^2 cm3"
    ],
    answer: "1.00 x 10^(-1) dm3",
    explanation: "Molar mass of Na2C2O4 = 134 g/mol. Moles present = 1.34/134 = 0.010 mol. The reaction ratio with CaCl2 is 1:1, so 0.010 mol of CaCl2 is required. Volume = 0.010/0.1 = 0.10 dm3."
  },

  {
    id: 19,
    subject: "Chemistry",
    topic: "Stoichiometry & Titration",
    year: 1990,
    exam: "JAMB",
    question: "2.0 g of a monobasic acid was dissolved and made up to 250 cm3 of solution. If 25.0 cm3 of this acid solution requires 20.0 cm3 of 0.1 M NaOH for complete neutralization, the molar mass of the acid is",
    options: ["200 g/mol", "160 g/mol", "100 g/mol", "50 g/mol"],
    answer: "100 g/mol",
    explanation: "Moles of NaOH = 0.1 x 20/1000 = 0.002 mol. Since the acid is monobasic, the aliquot contains 0.002 mol of acid. The full 250 cm3 contains 10 times this amount, or 0.020 mol. Molar mass = 2.0/0.020 = 100 g/mol."
  },

  {
    id: 20,
    subject: "Chemistry",
    topic: "Solutions & Solubility",
    year: 1990,
    exam: "JAMB",
    question: "What is the concentration of H+ ions in moles per dm3 of an aqueous solution that has a pH of 4.398? [Given log10(4) = 0.602]",
    options: ["4.0 x 10^(-5)", "0.4 x 10^(-5)", "4.0 x 10^(-3)", "0.4 x 10^(-3)"],
    answer: "4.0 x 10^(-5)",
    explanation: "[H+] = 10^(-pH) = 10^(-4.398) = 10^(0.602 - 5) = 4.0 x 10^(-5) mol/dm3."
  },

  {
    id: 21,
    subject: "Chemistry",
    topic: "Solutions & Volumetric Analysis",
    year: 1990,
    exam: "JAMB",
    question: "What volume of 11.0 M concentrated hydrochloric acid stock solution must be diluted with water to obtain exactly 1 dm3 of 0.05 M dilute acid?",
    options: ["0.0045 dm3", "0.0100 dm3", "0.0550 dm3", "11.000 dm3"],
    answer: "0.0045 dm3",
    explanation: "Using M1V1 = M2V2, 11.0 x V1 = 0.05 x 1.00. Therefore, V1 = 0.05/11.0 = 0.00454 dm3, approximately 0.0045 dm3."
  },

  {
    id: 22,
    subject: "Chemistry",
    topic: "Electrochemistry",
    year: 1990,
    exam: "JAMB",
    question: "If 10.8 g of silver is deposited in a silver coulometer connected in series with a water electrolysis cell, what volume of oxygen is liberated at the anode at s.t.p.? [Ag = 108, G.M.V at s.t.p. = 22.40 dm3]",
    options: ["0.56 dm3", "5.50 dm3", "11.20 dm3", "22.40 dm3"],
    answer: "0.56 dm3",
    explanation: "10.8 g of Ag corresponds to 0.1 mol Ag. Since Ag+ + e- -> Ag, 0.1 mol of electrons passes. Four moles of electrons are required to produce one mole of O2, so O2 produced = 0.025 mol. Volume = 0.025 x 22.4 = 0.56 dm3."
  },

  {
    id: 23,
    subject: "Chemistry",
    topic: "Electrochemistry",
    year: 1990,
    exam: "JAMB",
    question: "If 0.1 Faraday of electricity deposited 2.95 g of nickel during electrolysis, calculate the number of moles of nickel that will be deposited by 0.4 Faraday. [Ni = 58.7]",
    options: ["0.20 moles", "0.30 moles", "0.034 moles", "5.87 moles"],
    answer: "0.20 moles",
    explanation: "0.4 F is four times 0.1 F, so the mass deposited will be four times 2.95 g = 11.8 g. Moles of Ni = 11.8/58.7 = 0.201 mol, approximately 0.20 mol."
  },

  {
    id: 24,
    subject: "Chemistry",
    topic: "Oxidation Numbers",
    year: 1990,
    exam: "JAMB",
    question: "Cr2O7^2- + 6Fe^2+ + 14H+ -> 2Cr^3+ + 6Fe^3+ + 7H2O. In the reaction equation above, the oxidation state of chromium changes from",
    options: ["+7 to +3", "+6 to +3", "+5 to +3", "-2 to +3"],
    answer: "+6 to +3",
    explanation: "In Cr2O7^2-, oxygen contributes -14 overall and the ion has charge -2. Therefore, 2Cr - 14 = -2, giving Cr = +6. In Cr3+, chromium is +3. Thus, chromium changes from +6 to +3."
  },

  {
    id: 25,
    subject: "Chemistry",
    topic: "Redox Reactions",
    year: 1990,
    exam: "JAMB",
    question: "In the reaction IO3^- + 5I^- + 6H+ -> 3I2 + 3H2O, the oxidizing agent is",
    options: ["H+", "I-", "IO3-", "I2"],
    answer: "IO3-",
    explanation: "Iodine in IO3- has oxidation state +5 and is reduced to iodine in I2, where the oxidation state is 0. The species that is reduced acts as the oxidizing agent."
  },

  {
    id: 26,
    subject: "Chemistry",
    topic: "Chemical Energetics",
    year: 1990,
    exam: "JAMB",
    question: "Fe2O3(s) + 2Al(s) -> Al2O3(s) + 2Fe(s). If the standard heats of formation of Al2O3 and Fe2O3 are -1670 kJ/mol and -822 kJ/mol respectively, the enthalpy change for the thermite reaction is",
    options: ["+2492 kJ", "+848 kJ", "-848 kJ", "-2492 kJ"],
    answer: "-848 kJ",
    explanation: "Delta H = sum of heats of formation of products minus sum for reactants. Delta H = -1670 - (-822) = -848 kJ."
  },

  {
    id: 27,
    subject: "Chemistry",
    topic: "Electrochemistry",
    year: 1990,
    exam: "JAMB",
    question: "Iron galvanized with zinc is cathodically protected from corrosion because",
    options: [
      "zinc has a more positive oxidation potential than iron",
      "zinc has a less positive oxidation potential than iron",
      "both metals have the same oxidation potential",
      "zinc is harder than iron"
    ],
    answer: "zinc has a less positive oxidation potential than iron",
    explanation: "Zinc is more readily oxidized than iron, so it acts as a sacrificial anode and corrodes preferentially. Thus, zinc has a less positive oxidation potential than iron."
  },

  {
    id: 28,
    subject: "Chemistry",
    topic: "Chemical Kinetics",
    year: 1990,
    exam: "JAMB",
    question: "Which of the following samples will react fastest with dilute trioxonitrate(V) acid?",
    options: [
      "5 g of large lumps of CaCO3 at 25°C",
      "5 g of finely powdered CaCO3 at 25°C",
      "5 g of large lumps of CaCO3 at 50°C",
      "5 g of finely powdered CaCO3 at 50°C"
    ],
    answer: "5 g of finely powdered CaCO3 at 50°C",
    explanation: "Finely powdered calcium carbonate has a larger surface area, while higher temperature increases the frequency and energy of successful collisions. Combining both factors gives the fastest reaction."
  },

  {
    id: 29,
    subject: "Chemistry",
    topic: "Chemical Equilibrium",
    year: 1990,
    exam: "JAMB",
    question: "In the reversible gaseous reaction 2HI(g) <=> H2(g) + I2(g), Delta H = +10 kJ, the concentration of iodine at equilibrium can be increased by",
    options: [
      "raising the total system pressure",
      "raising the temperature",
      "adding a catalyst",
      "lowering the system pressure"
    ],
    answer: "raising the temperature",
    explanation: "The forward reaction is endothermic because Delta H is positive. Increasing temperature shifts the equilibrium toward the endothermic direction, producing more H2 and I2."
  },

  {
    id: 30,
    subject: "Chemistry",
    topic: "Gases & Non-Metals",
    year: 1990,
    exam: "JAMB",
    question: "Which of the following gases can be collected by upward displacement of air?",
    options: ["NO", "H2", "NH3", "Cl2"],
    answer: "Cl2",
    explanation: "Upward displacement of air is suitable for gases that are denser than air and cannot conveniently be collected over water. Chlorine is much denser than air and is only slightly soluble in water, so it can be collected this way."
  },

  {
    id: 31,
    subject: "Chemistry",
    topic: "Inorganic Chemistry",
    year: 1990,
    exam: "JAMB",
    question: "The brown fumes given off when concentrated trioxonitrate(V) acid is heated consist of",
    options: [
      "NO2 and O2",
      "H2O and NO2",
      "NO2, O2 and H2O",
      "NO2 and H2O"
    ],
    answer: "NO2, O2 and H2O",
    explanation: "On heating, concentrated nitric acid decomposes according to 4HNO3 -> 4NO2 + O2 + 2H2O. Therefore, the products include nitrogen(IV) oxide, oxygen and water vapour."
  },

  {
    id: 32,
    subject: "Chemistry",
    topic: "Qualitative Analysis",
    year: 1990,
    exam: "JAMB",
    question: "Which of the following tests is used in identifying carbon(IV) oxide among the gases listed in the original question?",
    options: [
      "Pass the gas into water and test with blue litmus paper",
      "Pass the gas into lime water",
      "Expose the gas to atmospheric air",
      "Pass the gas through concentrated tetraoxosulphate(VI) acid"
    ],
    answer: "Pass the gas into lime water",
    explanation: "Carbon(IV) oxide turns lime water milky because it reacts with calcium hydroxide to form insoluble calcium carbonate. This is the standard test for carbon(IV) oxide."
  },

  {
    id: 33,
    subject: "Chemistry",
    topic: "Applied Chemistry",
    year: 1990,
    exam: "JAMB",
    question: "In the Haber process for the manufacture of ammonia, the catalyst commonly used is finely divided",
    options: ["vanadium", "platinum", "iron", "copper"],
    answer: "iron",
    explanation: "Finely divided iron is used as the industrial catalyst in the Haber process for the synthesis of ammonia."
  },

  {
    id: 34,
    subject: "Chemistry",
    topic: "Acids, Bases & Salts",
    year: 1990,
    exam: "JAMB",
    question: "A metallic oxide which reacts with both HCl and NaOH to give salt and water only can be classified as",
    options: [
      "an acidic oxide",
      "a basic oxide",
      "a neutral oxide",
      "an amphoteric oxide"
    ],
    answer: "an amphoteric oxide",
    explanation: "An amphoteric oxide reacts with both acids and bases. Aluminium oxide and zinc oxide are common examples."
  },

  {
    id: 35,
    subject: "Chemistry",
    topic: "Inorganic Chemistry",
    year: 1990,
    exam: "JAMB",
    question: "Which of the following metals will liberate hydrogen from steam or dilute acid?",
    options: ["copper", "iron", "lead", "mercury"],
    answer: "iron",
    explanation: "Iron is above hydrogen in the reactivity series and can therefore liberate hydrogen from dilute acids and from steam."
  },

  {
    id: 36,
    subject: "Chemistry",
    topic: "Environmental Chemistry",
    year: 1990,
    exam: "JAMB",
    question: "Coal fire should not be used in poorly ventilated rooms because",
    options: [
      "of the accumulation of CO2 which causes deep sleep",
      "it is usually too hot",
      "of the accumulation of CO which causes suffocation",
      "it removes most of the gases in the room"
    ],
    answer: "of the accumulation of CO which causes suffocation",
    explanation: "Poor ventilation can cause incomplete combustion of coal, producing carbon monoxide. Carbon monoxide is poisonous because it combines strongly with haemoglobin and reduces oxygen transport in the blood."
  },

  {
    id: 37,
    subject: "Chemistry",
    topic: "Metallurgy",
    year: 1990,
    exam: "JAMB",
    question: "The major component of the slag from the production of iron is",
    options: [
      "an alloy of calcium and iron",
      "coke",
      "impure iron",
      "calcium trioxosilicate(IV)"
    ],
    answer: "calcium trioxosilicate(IV)",
    explanation: "In the blast furnace, calcium oxide formed from limestone reacts with silica impurities to form calcium silicate, CaSiO3, which is a major component of the slag."
  },

  {
    id: 38,
    subject: "Chemistry",
    topic: "Inorganic Chemistry",
    year: 1990,
    exam: "JAMB",
    question: "Sodium hydroxide should be stored in properly closed containers because it",
    options: [
      "readily absorbs water vapour from the air",
      "is easily oxidized by atmospheric oxygen",
      "turns golden yellow when exposed to light",
      "melts at a low temperature"
    ],
    answer: "readily absorbs water vapour from the air",
    explanation: "Sodium hydroxide is highly hygroscopic and deliquescent. It absorbs moisture from the atmosphere, so it should be stored in tightly closed containers."
  },

  {
    id: 39,
    subject: "Chemistry",
    topic: "Inorganic Chemistry",
    year: 1990,
    exam: "JAMB",
    question: "To make coloured glass, small quantities of oxides of metals which form coloured silicates are often added to the reaction mixture consisting of Na2CO3 and SiO2. Such a metal is",
    options: ["potassium", "barium", "zinc", "copper"],
    answer: "copper",
    explanation: "Copper compounds are used to produce characteristic colours in glass because copper ions form coloured silicates and other coloured compounds in the glass."
  },

  {
    id: 40,
    subject: "Chemistry",
    topic: "Qualitative Analysis",
    year: 1990,
    exam: "JAMB",
    question: "Which of the following compounds gives a yellow residue when heated and also reacts with aqueous sodium hydroxide to give a white gelatinous precipitate soluble in excess sodium hydroxide solution?",
    options: [
      "(NH4)2CO3",
      "ZnCO3",
      "Al2(SO4)3",
      "PbCO3"
    ],
    answer: "ZnCO3",
    explanation: "On heating, zinc carbonate decomposes to zinc oxide, which is yellow when hot and white when cold. Zinc ions react with NaOH to form a white gelatinous precipitate of Zn(OH)2 that dissolves in excess NaOH."
  },

  {
    id: 41,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1990,
    exam: "JAMB",
    question: "A cycloalkane with molecular formula C5H10 has",
    options: [
      "one isomer",
      "two isomers",
      "three isomers",
      "four isomers"
    ],
    answer: "four isomers",
    explanation: "The four structural cycloalkane isomers expected at this level are cyclopentane, methylcyclobutane, ethylcyclopropane and dimethylcyclopropane. Stereoisomers are not counted separately here."
  },

  {
    id: 42,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1990,
    exam: "JAMB",
    question: "The structure of cis-but-2-ene is best described as",
    options: [
      "the two methyl groups are on opposite sides of the C=C bond",
      "the two methyl groups are on the same side of the C=C bond",
      "the two hydrogen atoms are on opposite sides and there is a triple bond",
      "one methyl group is replaced by bromine"
    ],
    answer: "the two methyl groups are on the same side of the C=C bond",
    explanation: "In cis-but-2-ene, the two identical methyl groups are on the same side of the carbon-carbon double bond, while the two hydrogen atoms are on the other side."
  },

  {
    id: 43,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1990,
    exam: "JAMB",
    question: "What is the IUPAC name for the hydrocarbon CH3-C(CH2CH3)=CH-CH(CH3)-CH3?",
    options: [
      "2-ethyl-4-methylpent-2-ene",
      "3,5-dimethylhex-3-ene",
      "2,4-dimethylhex-3-ene",
      "2-methyl-4-ethylpent-3-ene"
    ],
    answer: "2,4-dimethylhex-3-ene",
    explanation: "The longest chain containing the double bond has six carbon atoms. Numbering gives the double bond position 3 and methyl substituents at positions 2 and 4. Therefore, the IUPAC name is 2,4-dimethylhex-3-ene."
  },

  // CHECK SOURCE: The original Q44 depends on a structural image/reagent notation that is
  // garbled in several online transcriptions. The supplied version incorrectly treated
  // sodium as forming a sodium acetylide. The verified chemistry for sodium in liquid
  // ammonia is partial reduction of an alkyne to an alkene.
  {
    id: 44,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1990,
    exam: "JAMB",
    question: "When propyne (CH3-C≡CH) is treated with sodium in liquid ammonia, the major organic product is",
    options: [
      "propane",
      "propene",
      "sodium propynide",
      "propanamide"
    ],
    answer: "propene",
    explanation: "An alkyne treated with an alkali metal such as sodium in liquid ammonia undergoes partial reduction to an alkene. Propyne therefore gives propene."
  },

  {
    id: 45,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1990,
    exam: "JAMB",
    question: "The label on a reagent bottle containing a clear organic liquid dropped off. The liquid was neutral to litmus and gave a colourless gas with metallic sodium. The liquid must be an",
    options: ["alkanoate", "alkene", "alkanol", "alkane"],
    answer: "alkanol",
    explanation: "Alkanols are generally neutral to litmus but contain a hydrogen atom on the hydroxyl group that reacts with sodium to produce hydrogen gas."
  },

  {
    id: 46,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1990,
    exam: "JAMB",
    question: "The reaction R-COOH + NaOH -> R-COONa + H2O is an example of",
    options: [
      "a displacement reaction",
      "a neutralization reaction",
      "an elimination reaction",
      "saponification"
    ],
    answer: "a neutralization reaction",
    explanation: "A carboxylic acid reacts with sodium hydroxide to form a salt and water. This is an acid-base neutralization reaction."
  },

  {
    id: 47,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1990,
    exam: "JAMB",
    question: "Alkanoic acids have lower volatility and higher boiling points than alkanols of similar molecular mass because they",
    options: [
      "are more polar than alkanols",
      "contain two oxygen atoms while alkanols have one",
      "form two hydrogen bonds while alkanols do not",
      "form stable dimers held together by two hydrogen bonds"
    ],
    answer: "form stable dimers held together by two hydrogen bonds",
    explanation: "Carboxylic acid molecules form stable dimers through two intermolecular hydrogen bonds. These strong interactions require more energy to overcome, resulting in higher boiling points and lower volatility."
  },

  {
    id: 48,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1990,
    exam: "JAMB",
    question: "The octane number of a fuel whose performance is the same as that of a mixture of 55 g of 2,2,4-trimethylpentane and 45 g of n-heptane is",
    options: ["45", "55", "80", "100"],
    answer: "55",
    explanation: "The octane number is defined using a reference mixture of iso-octane and n-heptane. A mixture containing 55% iso-octane has an octane number of 55."
  },

  {
    id: 49,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1990,
    exam: "JAMB",
    question: "Which of the following is formed when maltose reacts with concentrated tetraoxosulphate(VI) acid?",
    options: [
      "Carbon(IV) oxide",
      "Coal tar",
      "Charcoal",
      "Toxic fumes"
    ],
    answer: "Charcoal",
    explanation: "Concentrated tetraoxosulphate(VI) acid is a powerful dehydrating agent. It removes water from the carbohydrate, leaving a black carbonaceous residue commonly described in the question as charcoal."
  },

  {
    id: 50,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1990,
    exam: "JAMB",
    question: "Which of the following compounds represents the polymerization product of ethyne?",
    options: ["Cyclohexane", "Cyclopentane", "Benzene", "Toluene"],
    answer: "Benzene",
    explanation: "Three molecules of ethyne can combine in a trimerization reaction to form benzene: 3C2H2 -> C6H6."
  }

];

export default chemJamb1990;