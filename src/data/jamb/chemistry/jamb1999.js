// JAMB 1999 Chemistry Past Questions
// Fully audited - questions, answers, calculations, explanations, transcription issues, and app-safe formatting.

const chemJamb1999 = [

  {
    id: 1, subject: "Chemistry", topic: "Stoichiometry", year: 1999, exam: "JAMB",

    question: "200 cm3 each of 0.1 M solution of lead(II) trioxonitrate(V) and hydrochloric acid were mixed. Assuming that lead(II) chloride is completely insoluble, calculate the mass of lead(II) chloride that will be precipitated. [Pb = 207, Cl = 35.5, N = 14, O = 16]",

    options: ["2.78 g", "5.56 g", "8.34 g", "11.12 g"],

    answer: "2.78 g",

    explanation: "Reaction: Pb(NO3)2 + 2HCl -> PbCl2 + 2HNO3. Moles of Pb(NO3)2 = 0.1 x 0.200 = 0.020 mol. Moles of HCl = 0.1 x 0.200 = 0.020 mol. HCl is the limiting reactant because 2 mol of HCl react with 1 mol of Pb(NO3)2. Therefore, 0.020 mol of HCl produces 0.010 mol of PbCl2. Molar mass of PbCl2 = 207 + (2 x 35.5) = 278 g/mol. Mass of PbCl2 = 0.010 x 278 = 2.78 g."
  },

  {
    id: 2, subject: "Chemistry", topic: "Gas Laws", year: 1999, exam: "JAMB",

    question: "56.00 cm3 of a gas at s.t.p. weighed 0.11 g. What is the vapour density of the gas? [Molar volume of a gas at s.t.p. = 22.4 dm3]",

    options: ["11.00", "22.00", "33.00", "44.00"],

    answer: "22.00",

    explanation: "Moles of gas = 56.00 / 22400 = 0.0025 mol. Molar mass = 0.11 / 0.0025 = 44 g/mol. Vapour density = relative molecular mass / 2 = 44 / 2 = 22.00."
  },

  {
    id: 3, subject: "Chemistry", topic: "Gas Laws", year: 1999, exam: "JAMB",

    question: "Which of the following gases will diffuse fastest when passed through a porous plug?",

    options: ["Propane", "Oxygen", "Methane", "Ammonia"],

    answer: "Methane",

    explanation: "According to Graham's law, the rate of diffusion is inversely proportional to the square root of molar mass. Methane, CH4, has the lowest molar mass among the options: CH4 = 16, NH3 = 17, O2 = 32 and C3H8 = 44. Therefore, methane diffuses fastest."
  },

  {
    id: 4, subject: "Chemistry", topic: "Chemical Changes", year: 1999, exam: "JAMB",

    question: "Which of the following will have its mass increased when heated in air?",

    options: ["Helium", "Magnesium", "Copper pyrites", "Glass"],

    answer: "Magnesium",

    explanation: "Magnesium combines with oxygen when heated in air to form magnesium oxide: 2Mg + O2 -> 2MgO. Oxygen from the air becomes part of the solid product, so the mass increases."
  },

  {
    id: 5, subject: "Chemistry", topic: "Gas Laws", year: 1999, exam: "JAMB",

    question: "What is the temperature of a given mass of gas initially at 0 C and 9 atm, if the pressure is reduced to 3 atm at constant volume?",

    options: ["91 K", "182 K", "273 K", "819 K"],

    answer: "91 K",

    explanation: "At constant volume, P1/T1 = P2/T2. T1 = 273 K. Therefore, T2 = (P2 x T1) / P1 = (3 x 273) / 9 = 91 K."
  },

  {
    id: 6, subject: "Chemistry", topic: "Separation Techniques", year: 1999, exam: "JAMB",

    // CHECK SOURCE: The original question depends on a solubility graph that was not included in the supplied dataset.
    question: "In the solubility graph provided, a hot solution containing a mixture of two solid substances P and Q is allowed to cool. This separation technique is known as",

    options: ["distillation", "fractional distillation", "crystallization", "fractional crystallization"],

    answer: "fractional crystallization",

    explanation: "Fractional crystallization separates soluble solids by taking advantage of differences in their solubilities as temperature changes. The original question is graph-dependent, but the supplied source identifies fractional crystallization as the intended method."
  },

  {
    id: 7, subject: "Chemistry", topic: "Stoichiometry", year: 1999, exam: "JAMB",

    question: "Mg(s) + 2HCl(aq) -> MgCl2(aq) + H2(g). From the equation above, the mass of magnesium required to react completely with 250 cm3 of 0.5 M HCl is [Mg = 24]",

    options: ["0.3 g", "1.5 g", "2.4 g", "3.0 g"],

    answer: "1.5 g",

    explanation: "Moles of HCl = 0.5 x 0.250 = 0.125 mol. From the equation, 2 mol of HCl react with 1 mol of Mg. Therefore, moles of Mg = 0.125 / 2 = 0.0625 mol. Mass of Mg = 0.0625 x 24 = 1.5 g."
  },

  {
    id: 8, subject: "Chemistry", topic: "Stoichiometry", year: 1999, exam: "JAMB",

    question: "A gaseous metallic chloride MClx consists of 20.22% of M by mass. If the relative atomic mass of M is 27, what is the formula of the chloride? [Cl = 35.5]",

    options: ["MCl", "MCl2", "MCl3", "M2Cl6"],

    answer: "MCl3",

    explanation: "Percentage of chlorine = 100 - 20.22 = 79.78%. Moles of M = 20.22 / 27 = 0.75. Moles of Cl = 79.78 / 35.5 = about 2.25. Dividing by 0.75 gives a ratio of 1:3. Therefore, the formula is MCl3."
  },

  {
    id: 9, subject: "Chemistry", topic: "States of Matter", year: 1999, exam: "JAMB",

    question: "In which of the following states are water molecules in the most disorderly arrangement?",

    options: ["Ice at -10 C", "Ice at 0 C", "Water at 100 C", "Steam at 100 C"],

    answer: "Steam at 100 C",

    explanation: "Gas particles have the greatest freedom of movement and the least ordered arrangement. Therefore, steam has the most disorderly arrangement."
  },

  {
    id: 10, subject: "Chemistry", topic: "Atomic Structure", year: 1999, exam: "JAMB",

    question: "In order to remove one electron from the 3s-orbital of a gaseous sodium atom, about 496 kJ mol-1 of energy is required. This energy is referred to as",

    options: ["electron affinity", "ionization energy", "activation energy", "electronegativity"],

    answer: "ionization energy",

    explanation: "Ionization energy is the minimum energy required to remove an electron from an isolated gaseous atom in its ground state."
  },

  {
    id: 11, subject: "Chemistry", topic: "Periodic Table", year: 1999, exam: "JAMB",

    question: "Nitrogen obtained from the liquefaction of air has a higher density than that obtained from nitrogen-containing compounds because the former contains",

    options: ["water vapour", "oxygen", "carbon(IV) oxide", "rare gases"],

    answer: "rare gases",

    explanation: "Nitrogen obtained from air contains small amounts of heavier rare gases, especially argon. Their presence increases the average density of the nitrogen sample."
  },

  {
    id: 12, subject: "Chemistry", topic: "Water Chemistry", year: 1999, exam: "JAMB",

    question: "The method that can be used to convert hard water to soft water is",

    options: ["chlorination", "passage over activated charcoal", "the use of an ion-exchange resin", "aeration"],

    answer: "the use of an ion-exchange resin",

    explanation: "Ion-exchange resins remove hardness-producing calcium and magnesium ions by exchanging them for ions such as sodium. This can remove both temporary and permanent hardness."
  },

  {
    id: 13, subject: "Chemistry", topic: "Chemical Bonding", year: 1999, exam: "JAMB",

    // CHECK SOURCE: The original periodic-table grid is not present in the supplied dataset.
    question: "Use the periodic-table layout in the original source to answer this question. The element that is likely to participate in covalent rather than ionic bonding is",

    options: ["Z", "Y", "X", "W"],

    answer: "X",

    explanation: "The original source identifies X as the correct position. The missing table prevents the question from being completely self-contained in the app."
  },

  {
    id: 14, subject: "Chemistry", topic: "Periodic Table", year: 1999, exam: "JAMB",

    // CHECK SOURCE: The original periodic-table grid is not present in the supplied dataset.
    question: "Use the periodic-table layout in the original source to answer this question. The least reactive element is",

    options: ["W", "X", "Y", "Z"],

    answer: "Z",

    explanation: "The original source identifies Z as the least reactive position. The table itself must be supplied with the question for students to see the basis of the answer."
  },

  {
    id: 15, subject: "Chemistry", topic: "Periodic Table", year: 1999, exam: "JAMB",

    question: "An element has the ground-state electronic configuration 1s2 2s2 2p6 3s2 3p6 3d7 4s2. This element is classified as a",

    options: ["non-metal", "metal", "transition element", "group two element"],

    answer: "transition element",

    explanation: "The presence of a partially filled 3d subshell identifies the element as a d-block transition element."
  },

  {
    id: 16, subject: "Chemistry", topic: "Chemical Bonding", year: 1999, exam: "JAMB",

    question: "Given that electronegativity increases across a period and decreases down a group in the periodic table, in which of the following compounds will the molecules be held together by the strongest hydrogen bond?",

    options: ["HF(g)", "NH3(g)", "CH4(g)", "HCl(g)"],

    answer: "HF(g)",

    explanation: "Hydrogen bonding is strongest when hydrogen is bonded to a highly electronegative atom. Fluorine is more electronegative than nitrogen, so HF forms the strongest hydrogen bonds among the options."
  },

  {
    id: 17, subject: "Chemistry", topic: "Stoichiometry & Titration", year: 1999, exam: "JAMB",

    question: "0.25 mole of hydrogen chloride was dissolved in distilled water and the volume made up to 0.50 dm3. If 15.00 cm3 of this acid solution requires 12.50 cm3 of aqueous sodium trioxocarbonate(IV) for complete neutralization, calculate the concentration of the basic solution in mol dm-3.",

    options: ["0.30 mol dm-3", "0.40 mol dm-3", "0.50 mol dm-3", "0.60 mol dm-3"],

    answer: "0.30 mol dm-3",

    explanation: "Concentration of HCl = 0.25 / 0.50 = 0.50 mol dm-3. Reaction: 2HCl + Na2CO3 -> 2NaCl + H2O + CO2. Moles of HCl in 15.00 cm3 = 0.50 x 0.015 = 0.0075 mol. Therefore, moles of Na2CO3 = 0.0075 / 2 = 0.00375 mol. Concentration = 0.00375 / 0.0125 = 0.30 mol dm-3."
  },

  {
    id: 18, subject: "Chemistry", topic: "Oxidation Numbers", year: 1999, exam: "JAMB",

    question: "The correct order of increasing oxidation number of the central transition metal ions for the compounds K2Cr2O7, V2O5 and KMnO4 is",

    options: [
      "V2O5 < K2Cr2O7 < KMnO4",
      "K2Cr2O7 < KMnO4 < V2O5",
      "KMnO4 < K2Cr2O7 < V2O5",
      "KMnO4 < V2O5 < K2Cr2O7"
    ],

    answer: "V2O5 < K2Cr2O7 < KMnO4",

    explanation: "In V2O5, vanadium is +5. In K2Cr2O7, chromium is +6. In KMnO4, manganese is +7. Therefore, the increasing order is +5 < +6 < +7."
  },

  {
    id: 19, subject: "Chemistry", topic: "Environmental Chemistry", year: 1999, exam: "JAMB",

    question: "The set of pollutants that is most likely to be produced when petrol is accidentally spilled on plastic materials such as PVC and ignited is",

    options: [
      "CO, CO2 and SO2",
      "CO, HCl and SO2",
      "CO, CO2 and HCl",
      "SO2, CO2 and HCl"
    ],

    answer: "CO, CO2 and HCl",

    explanation: "Incomplete combustion of petrol can produce CO and CO2. Burning chlorine-containing plastics such as PVC can release HCl. Therefore, CO, CO2 and HCl is the intended combination."
  },

  {
    id: 20, subject: "Chemistry", topic: "Qualitative Analysis", year: 1999, exam: "JAMB",

    question: "What is observed when aqueous solutions of tetraoxosulphate(VI) acid, potassium trioxoiodate(V) and potassium iodide are mixed together?",

    options: [
      "a dense white precipitate is formed",
      "a bright green precipitate is formed",
      "the mixture remains colourless",
      "the mixture turns reddish-brown"
    ],

    answer: "the mixture turns reddish-brown",

    explanation: "In the acidic medium, iodate ions oxidize iodide ions to iodine. Iodine gives the mixture a reddish-brown colour."
  },

  {
    id: 21, subject: "Chemistry", topic: "Solutions & Solubility", year: 1999, exam: "JAMB",

    // CHECK SOURCE: This question depends on a solubility graph that was omitted from the supplied dataset.
    question: "Based on the solubility curve provided, the mass of crystals deposited when 1 dm3 of a saturated solution of NaCl is cooled from 80 C to 60 C is [Na = 23, Cl = 35.5]",

    options: ["117.00 g", "58.50 g", "11.70 g", "5.85 g"],

    answer: "117.00 g",

    explanation: "The original graph indicates a decrease in solubility corresponding to 2.00 mol of NaCl per dm3 of solution over the stated temperature range. Molar mass of NaCl = 23 + 35.5 = 58.5 g/mol. Mass deposited = 2.00 x 58.5 = 117.00 g."
  },

  {
    id: 22, subject: "Chemistry", topic: "Solutions & Solubility", year: 1999, exam: "JAMB",

    question: "The solution with the lowest pH value is",

    options: [
      "5 ml of M/10 HCl",
      "10 ml of M/10 HCl",
      "15 ml of M/5 HCl",
      "20 ml of M/8 HCl"
    ],

    answer: "15 ml of M/5 HCl",

    explanation: "For a strong acid, pH depends on hydrogen-ion concentration, not the volume of the sample. M/10 HCl has concentration 0.1 M, M/5 HCl has concentration 0.2 M, and M/8 HCl has concentration 0.125 M. The M/5 HCl solution therefore has the highest hydrogen-ion concentration and the lowest pH."
  },

  {
    id: 23, subject: "Chemistry", topic: "Solutions & Solubility", year: 1999, exam: "JAMB",

    question: "The solubility product (Ksp) of Cu(IO3)2 is 1.08 x 10^(-7). Assuming that neither ion reacts appreciably with water to form H+ and OH-, what is the solubility of this salt in mol dm-3?",

    options: ["2.7 x 10^(-8) mol dm-3", "9.0 x 10^(-8) mol dm-3", "3.0 x 10^(-3) mol dm-3", "9.0 x 10^(-3) mol dm-3"],

    answer: "3.0 x 10^(-3) mol dm-3",

    explanation: "Cu(IO3)2 dissolves as Cu(IO3)2 -> Cu2+ + 2IO3-. If the solubility is s, then [Cu2+] = s and [IO3-] = 2s. Therefore Ksp = s(2s)^2 = 4s^3. Thus 4s^3 = 1.08 x 10^(-7), so s^3 = 2.70 x 10^(-8) and s = 3.0 x 10^(-3) mol dm-3."
  },

  {
    id: 24, subject: "Chemistry", topic: "Chemical Energetics", year: 1999, exam: "JAMB",

    question: "The chemical terms entropy and enthalpy of a thermodynamic system are measures of",

    options: [
      "the degree of molecular disorderliness and heat content respectively",
      "the heat content and degree of molecular disorderliness respectively",
      "the internal heat content of a system only",
      "the molecular degree of disorderliness only"
    ],

    answer: "the degree of molecular disorderliness and heat content respectively",

    explanation: "Entropy is associated with the degree of disorder or randomness in a system, while enthalpy is commonly described as the heat content of a system at constant pressure."
  },

  {
    id: 25, subject: "Chemistry", topic: "Applied Chemistry", year: 1999, exam: "JAMB",

    question: "2SO2(g) + O2(g) <=> 2SO3(g). In the industrial chemical reaction above, the substance that will increase the rate of production of sulphur(VI) oxide is",

    options: ["manganese(IV) oxide", "finely divided iron", "vanadium(V) oxide", "nickel"],

    answer: "vanadium(V) oxide",

    explanation: "Vanadium(V) oxide, V2O5, is the catalyst used in the Contact Process to increase the rate of oxidation of sulphur(IV) oxide to sulphur(VI) oxide."
  },

  {
    id: 26, subject: "Chemistry", topic: "Chemical Equilibrium", year: 1999, exam: "JAMB",

    question: "N2O4(g) <=> 2NO2(g). An increase in the total system pressure of the gaseous equilibrium reaction above will",

    options: [
      "produce more of the NO2(g) gas component in the mixture",
      "convert all of the N2O4(g) completely into NO2(g)",
      "have no effect on the concentrations of N2O4(g) and NO2(g)",
      "produce more of the N2O4(g) molecule component in the mixture"
    ],

    answer: "produce more of the N2O4(g) molecule component in the mixture",

    explanation: "Increasing pressure shifts a gaseous equilibrium toward the side with fewer gas molecules. The left side has one mole of gas while the right side has two, so the equilibrium shifts left and produces more N2O4."
  },

  {
    id: 27, subject: "Chemistry", topic: "Electrochemistry", year: 1999, exam: "JAMB",

    question: "What quantity of electricity will liberate 0.125 mole of oxygen molecules during the electrolysis of dilute sodium chloride solution? [1 Faraday = 96,500 C mol-1]",

    options: ["24,125 coulombs", "48,250 coulombs", "72,375 coulombs", "96,500 coulombs"],

    answer: "48,250 coulombs",

    explanation: "At the anode, 2H2O -> O2 + 4H+ + 4e-. Therefore, 1 mol of O2 requires 4 Faradays. For 0.125 mol O2, electricity required = 0.125 x 4 = 0.50 F. Charge = 0.50 x 96,500 = 48,250 C."
  },

  {
    id: 28, subject: "Chemistry", topic: "Chemical Kinetics", year: 1999, exam: "JAMB",

    question: "X + Y -> Z. The experimental rate equation for the chemical reaction above is rate = k[X]^2[Y]. The overall order of this reaction is",

    options: ["0", "1", "2", "3"],

    answer: "3",

    explanation: "The overall order is the sum of the powers of the concentration terms in the rate equation: 2 + 1 = 3."
  },

  {
    id: 29, subject: "Chemistry", topic: "Electrochemistry", year: 1999, exam: "JAMB",

    question: "When a constant current I is passed through an electrolyte solution for 40 minutes, a mass of X g of a univalent metal is deposited at the cathode. What mass of the identical metal will be deposited if a current of 2I is passed through the solution for 10 minutes?",

    options: ["X/4 g", "X/2 g", "2X g", "4X g"],

    answer: "X/2 g",

    explanation: "According to Faraday's first law, deposited mass is proportional to charge passed. First experiment: Q1 = I x 40 = 40I. Second experiment: Q2 = 2I x 10 = 20I. The second charge is half the first, so the deposited mass is X/2 g."
  },

  {
    id: 30, subject: "Chemistry", topic: "Chemical Energetics", year: 1999, exam: "JAMB",

    question: "RS(aq) + HF(aq) -> RF(aq) + HS(aq), change in enthalpy = -65.7 kJ mol-1. From the thermochemical equation above, it can be deduced that the",

    options: [
      "total heat content of the products is lower than that of the reactants",
      "total heat content of the reactants is lower than that of the products",
      "reaction rate proceeds exceptionally slowly",
      "reaction requires a large amount of heat to be absorbed"
    ],

    answer: "total heat content of the products is lower than that of the reactants",

    explanation: "A negative enthalpy change indicates an exothermic reaction. Heat is released, so the products have lower enthalpy than the reactants."
  },

  {
    id: 31, subject: "Chemistry", topic: "Electrochemistry", year: 1999, exam: "JAMB",

    question: "Which of the following statements is TRUE concerning the electrochemical series of metals?",

    options: [
      "The electropositivity of metallic elements increases down the series",
      "The electropositivity of non-metals decreases down the series",
      "The electronegativity of non-metals increases down the series",
      "The electropositivity of metals decreases down the series"
    ],

    answer: "The electropositivity of metals decreases down the series",

    explanation: "The electrochemical series is arranged according to the tendency of substances to gain or lose electrons. Metallic electropositivity decreases down the series."
  },

  {
    id: 32, subject: "Chemistry", topic: "Qualitative Analysis", year: 1999, exam: "JAMB",

    question: "Which of the following gases will form a white precipitate when bubbled into an acidified solution of silver trioxonitrate(V)?",

    options: ["NH3", "SO2", "CO2", "HCl"],

    answer: "HCl",

    explanation: "HCl dissolves in water to provide chloride ions. The chloride ions react with Ag+ to form insoluble white AgCl: Ag+ + Cl- -> AgCl."
  },

  {
    id: 33, subject: "Chemistry", topic: "Periodic Table", year: 1999, exam: "JAMB",

    question: "The halogen elements chlorine, bromine and iodine resemble one another chemically in that they all",

    options: [
      "dissolve readily in aqueous bases or alkalis",
      "react violently with hydrogen at room temperature without heating",
      "exist as liquids at standard room conditions",
      "displace one another interchangeably from all salt solutions"
    ],

    answer: "dissolve readily in aqueous bases or alkalis",

    explanation: "Halogens react with aqueous alkalis. Their reactivities differ down the group, so they do not displace one another interchangeably from all salt solutions."
  },

  {
    id: 34, subject: "Chemistry", topic: "Qualitative Analysis", year: 1999, exam: "JAMB",

    question: "Which of the following salt solutions reacts with dilute hydrochloric acid to release a pungent-smelling gas that decolorizes acidified purple potassium tetraoxomanganate(VII) solution?",

    options: ["Na2SO4", "Na2SO3", "Na2S", "Na2CO3"],

    answer: "Na2SO3",

    explanation: "Na2SO3 reacts with dilute HCl to release SO2. Sulphur(IV) oxide is a reducing agent and decolorizes acidified potassium permanganate solution."
  },

  {
    id: 35, subject: "Chemistry", topic: "Gases & Non-Metals", year: 1999, exam: "JAMB",

    question: "Which pair of compounds can be used to generate a gas that has a physiological effect on human beings?",

    options: [
      "sodium trioxonitrate(V) and calcium chloride",
      "sodium dioxonitrate(III) and ammonium chloride",
      "sodium trioxonitrate(V) and ammonium chloride",
      "sodium dioxonitrate(III) and potassium chloride"
    ],

    answer: "sodium trioxonitrate(V) and ammonium chloride",

    explanation: "Sodium nitrate and ammonium chloride can form ammonium nitrate. On controlled heating, ammonium nitrate decomposes to produce nitrous oxide, N2O, a gas with an anaesthetic physiological effect."
  },

  {
    id: 36, subject: "Chemistry", topic: "Applied Chemistry", year: 1999, exam: "JAMB",

    question: "Hydrogen gas is used in oxy-hydrogen flames for high-temperature metal melting because it",

    options: [
      "evolves a large amount of heat energy when burned in oxygen",
      "combines explosively with oxygen molecules at any concentration",
      "is the lightest known element in the universe",
      "serves as an efficient high-energy rocket propulsion fuel"
    ],

    answer: "evolves a large amount of heat energy when burned in oxygen",

    explanation: "Hydrogen burns very exothermically in oxygen, producing a very hot flame suitable for high-temperature heating and metalworking."
  },

  {
    id: 37, subject: "Chemistry", topic: "Laboratory Apparatus", year: 1999, exam: "JAMB",

    // CHECK SOURCE: The original laboratory diagram is missing from the supplied dataset.
    question: "In the laboratory preparation of ammonia, the mixture heated to produce ammonia consists of",

    options: [
      "calcium hydroxide and ammonium chloride",
      "calcium hydroxide and sodium chloride",
      "sodium chloride and ammonium trioxonitrate(V)",
      "sodium dioxonitrate(III) and ammonium chloride"
    ],

    answer: "calcium hydroxide and ammonium chloride",

    explanation: "Ammonia is prepared in the laboratory by heating ammonium chloride with calcium hydroxide: 2NH4Cl + Ca(OH)2 -> CaCl2 + 2NH3 + 2H2O."
  },

  {
    id: 38, subject: "Chemistry", topic: "Applied Chemistry", year: 1999, exam: "JAMB",

    question: "Which of the following properties of the alloy duralumin makes it more useful than its constituent metals?",

    options: [
      "it is exceptionally heavy with a high structural melting point",
      "it exhibits high malleability combined with a dense structural framework",
      "it is remarkably strong yet retains a very low density",
      "it is structurally hard and extremely ductile across all temperatures"
    ],

    answer: "it is remarkably strong yet retains a very low density",

    explanation: "Duralumin is a strong, lightweight aluminium alloy. Its high strength-to-weight ratio makes it useful in aircraft construction."
  },

  {
    id: 39, subject: "Chemistry", topic: "Applied Chemistry", year: 1999, exam: "JAMB",

    question: "Which pair of metals in the reactivity series is usually extracted by electrolysis of their ores?",

    options: ["Magnesium and zinc", "Magnesium and calcium", "Copper and zinc", "Lead and calcium"],

    answer: "Magnesium and calcium",

    explanation: "Highly reactive metals such as magnesium and calcium cannot be readily extracted by reduction with carbon. They are commonly obtained by electrolysis of molten compounds."
  },

  {
    id: 40, subject: "Chemistry", topic: "Applied Chemistry", year: 1999, exam: "JAMB",

    question: "Which of the following commercial metals can be extracted from the mineral ore cassiterite?",

    options: ["calcium", "magnesium", "tin", "copper"],

    answer: "tin",

    explanation: "Cassiterite is mainly tin(IV) oxide, SnO2, and is the principal ore of tin."
  },

  {
    id: 41, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1999, exam: "JAMB",

    question: "Which of the following metals becomes passive when dipped into concentrated trioxonitrate(V) acid?",

    options: ["iron", "tin", "copper", "zinc"],

    answer: "iron",

    explanation: "Concentrated nitric acid passivates iron by forming a thin protective oxide layer on its surface, preventing further reaction under ordinary conditions."
  },

  {
    id: 42, subject: "Chemistry", topic: "Organic Chemistry", year: 1999, exam: "JAMB",

    question: "Which of the following hydrocarbons burns in air with a sooty flame?",

    options: ["C6H6", "C3H6", "C4H10", "C6H6"],

    answer: "C6H6",

    explanation: "Benzene, C6H6, has a relatively high carbon-to-hydrogen ratio and burns with a characteristic smoky or sooty flame."
  },

  {
    id: 43, subject: "Chemistry", topic: "Organic Chemistry", year: 1999, exam: "JAMB",

    question: "The branched alkene 2-methylprop-1-ene is a structural isomer of",

    options: ["but-2-ene", "pent-1-ene", "2-methylbutene", "2-methylbut-1-ene"],

    answer: "but-2-ene",

    explanation: "2-methylprop-1-ene has molecular formula C4H8. But-2-ene also has molecular formula C4H8, but the carbon arrangements are different. Therefore, they are structural isomers."
  },

  {
    id: 44, subject: "Chemistry", topic: "Organic Chemistry", year: 1999, exam: "JAMB",

    question: "Which of the following organic solvents is used as a solvent for perfumes?",

    options: ["C5H12", "C4H6", "CH3COOH", "C2H5OH"],

    answer: "C2H5OH",

    explanation: "Ethanol is a volatile organic solvent widely used in perfumes because it dissolves many fragrance substances and evaporates readily."
  },

  {
    id: 45, subject: "Chemistry", topic: "Organic Chemistry", year: 1999, exam: "JAMB",

    question: "When excess ethanol is heated to about 145 C in the presence of concentrated H2SO4, the product is",

    options: ["ethyne", "diethyl sulphate", "diethyl ether", "acetone"],

    answer: "diethyl ether",

    explanation: "At about 140-145 C, concentrated H2SO4 promotes intermolecular dehydration of ethanol to form diethyl ether (ethoxyethane): 2C2H5OH -> C2H5OC2H5 + H2O."
  },

  {
    id: 46, subject: "Chemistry", topic: "Organic Chemistry", year: 1999, exam: "JAMB",

    question: "How many grams of bromine will saturate 5.2 g of but-1-ene-3-yne? [C = 12, H = 1, Br = 80]",

    options: ["64.0 g", "48.0 g", "32.0 g", "16.0 g"],

    answer: "48.0 g",

    explanation: "But-1-ene-3-yne has formula C4H4 and contains one C=C bond and one C=C triple bond. Complete addition requires 3 mol of Br2 per mole of C4H4. Molar mass of C4H4 = (4 x 12) + 4 = 52 g/mol. Moles of C4H4 in 5.2 g = 5.2 / 52 = 0.10 mol. Therefore, Br2 required = 3 x 0.10 = 0.30 mol. Molar mass of Br2 = 160 g/mol. Mass = 0.30 x 160 = 48.0 g."
  },

  {
    id: 47, subject: "Chemistry", topic: "Applied Chemistry", year: 1999, exam: "JAMB",

    question: "Polyvinyl chloride (PVC) is widely used to manufacture",

    options: ["loaves of bread", "graphite pencils", "writing ink", "water pipes and electrical conduits"],

    answer: "water pipes and electrical conduits",

    explanation: "PVC is a durable, chemically resistant polymer commonly used for water pipes, drainage pipes and electrical conduit."
  },

  {
    id: 48, subject: "Chemistry", topic: "Organic Chemistry", year: 1999, exam: "JAMB",

    question: "An unknown organic compound does not undergo a chemical addition or substitution reaction with both hydrogen cyanide (HCN) and hydroxylamine. This compound can be classified as an",

    options: ["alkene", "alkanal", "alkanone", "alkanoic acid"],

    answer: "alkanoic acid",

    explanation: "Aldehydes and ketones contain carbonyl groups that undergo addition reactions with HCN and hydroxylamine. Alkanoic acids do not undergo these characteristic carbonyl addition reactions."
  },

  {
    id: 49, subject: "Chemistry", topic: "Organic Chemistry", year: 1999, exam: "JAMB",

    question: "When the two end alkyl groups of ethyl ethanoate are interchanged, the compound formed is known as",

    options: ["methyl ethanoate", "ethyl propanoate", "methyl propanoate", "propyl ethanoate"],

    answer: "methyl propanoate",

    explanation: "Ethyl ethanoate has the structure CH3COOCH2CH3. Interchanging the methyl group on the acid side with the ethyl group on the alcohol side gives CH3CH2COOCH3, which is methyl propanoate."
  }

  /*
  Q50 REMOVED - CHECK SOURCE

  The original question depends on a structural-formula diagram that is not
  contained in the supplied dataset. The available source diagram contains
  structures whose bromination behaviour does not match the supplied answer
  "III only", and the available answer choices do not provide a clearly
  correct option from the structures as transcribed.

  Do not restore Q50 until the original diagram is supplied.
  */

];

export default chemJamb1999;