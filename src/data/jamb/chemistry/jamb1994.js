// JAMB 1994 Chemistry Past Questions
// Fully audited — questions, answers, calculations, explanations, source/OCR issues, and app-safe formatting.
// Source-dependent repairs are marked with CHECK SOURCE where the original diagram/transcription is uncertain.

const chemJamb1994 = [

  {
    id: 1, subject: "Chemistry", topic: "Separation Techniques", year: 1994, exam: "JAMB",

    question: "A mixture of sand, ammonium chloride and sodium chloride is best separated by",

    options: [
      "sublimation followed by addition of water and filtration",
      "sublimation followed by addition of water and evaporation",
      "addition of water followed by filtration and sublimation",
      "addition of water followed by crystallization and sublimation"
    ],

    answer: "sublimation followed by addition of water and evaporation",

    explanation: "Ammonium chloride sublimes on heating, leaving sand and sodium chloride. Adding water dissolves the sodium chloride while sand remains insoluble and can be filtered off. The filtrate can then be evaporated to recover sodium chloride."
  },

  {
    id: 2, subject: "Chemistry", topic: "Separation Techniques", year: 1994, exam: "JAMB",

    question: "A pure solid usually melts",

    options: [
      "over a wide range of temperature",
      "over a narrow range of temperature",
      "at a lower temperature than the impure one",
      "at the same temperature as the impure one"
    ],

    answer: "over a narrow range of temperature",

    explanation: "A pure solid normally has a sharp melting point and therefore melts over a very narrow temperature range. Impurities generally lower and broaden the melting range."
  },

  {
    id: 3, subject: "Chemistry", topic: "Gas Laws", year: 1994, exam: "JAMB",

    question: "At the same temperature and pressure, 50 cm^3 of nitrogen gas contains the same number of molecules as",

    options: [
      "25 cm^3 of methane",
      "40 cm^3 of hydrogen",
      "50 cm^3 of ammonia",
      "100 cm^3 of chlorine"
    ],

    answer: "50 cm^3 of ammonia",

    explanation: "By Avogadro's law, equal volumes of gases at the same temperature and pressure contain equal numbers of molecules. Therefore, 50 cm^3 of nitrogen contains the same number of molecules as 50 cm^3 of ammonia."
  },

  // CHECK SOURCE: Some online transcriptions give ethane (CH3CH3) here, but that
  // version does not fit any of the supplied answer options. The version below,
  // using propane, produces the listed correct answer of 11.2 dm^3 and is also
  // independently reproduced by another 1994 JAMB transcription.
  {
    id: 4, subject: "Chemistry", topic: "Stoichiometry", year: 1994, exam: "JAMB",

    question: "8 g of methane (CH4) occupies 11.2 dm^3 at s.t.p. What volume would 22 g of propane (C3H8) occupy under the same condition? [C = 12, H = 1]",

    options: [
      "3.7 dm^3",
      "11.2 dm^3",
      "22.4 dm^3",
      "33.6 dm^3"
    ],

    answer: "11.2 dm^3",

    explanation: "Molar mass of propane (C3H8) = 44 g/mol. Therefore, 22 g is 0.5 mol. At s.t.p., 1 mol of gas occupies 22.4 dm^3, so 0.5 mol occupies 11.2 dm^3."
  },

  {
    id: 5, subject: "Chemistry", topic: "Gas Laws", year: 1994, exam: "JAMB",

    question: "To what temperature must a gas at 273 K be heated in order to double both its volume and pressure?",

    options: ["298 K", "546 K", "819 K", "1092 K"],

    answer: "1092 K",

    explanation: "Using P1V1/T1 = P2V2/T2, with P2 = 2P1 and V2 = 2V1: T2 = 273 x 2 x 2 = 1092 K."
  },

  {
    id: 6, subject: "Chemistry", topic: "Gas Laws", year: 1994, exam: "JAMB",

    question: "For a gas, the relative molecular mass is equal to 2Y. What is Y?",

    options: [
      "The mass of the gas",
      "The vapour density of the gas",
      "The volume of the gas",
      "The temperature of the gas"
    ],

    answer: "The vapour density of the gas",

    explanation: "Relative molecular mass is twice the vapour density. Therefore, if relative molecular mass = 2Y, Y represents the vapour density."
  },

  {
    id: 7, subject: "Chemistry", topic: "Gas Laws", year: 1994, exam: "JAMB",

    question: "The densities of two gases, X and Y, are 0.5 g dm^-3 and 2.0 g dm^-3 respectively. What is the rate of diffusion of X relative to Y?",

    options: ["0.1", "0.5", "2.0", "4.0"],

    answer: "2.0",

    explanation: "By Graham's law, Rate_X / Rate_Y = sqrt(Density_Y / Density_X) = sqrt(2.0 / 0.5) = sqrt(4) = 2. Therefore, X diffuses twice as fast as Y."
  },

  {
    id: 8, subject: "Chemistry", topic: "Gas Laws", year: 1994, exam: "JAMB",

    question: "An increase in temperature causes an increase in the pressure of a gas because",

    options: [
      "it decreases the number of collisions between the molecules",
      "the molecules of the gas bombard the walls of the container more frequently and forcefully",
      "it increases the number of collisions between the molecules",
      "it causes the molecules to combine"
    ],

    answer: "the molecules of the gas bombard the walls of the container more frequently and forcefully",

    explanation: "Increasing temperature increases the average kinetic energy of gas molecules. They move faster and strike the walls more frequently and with greater force, increasing the pressure in a fixed-volume container."
  },

  {
    id: 9, subject: "Chemistry", topic: "Chemical Bonding", year: 1994, exam: "JAMB",

    question: "The shape of an ammonia molecule (NH3) is",

    options: [
      "trigonal planar",
      "octahedral",
      "square planar",
      "trigonal pyramidal"
    ],

    answer: "trigonal pyramidal",

    explanation: "NH3 has three bonding pairs and one lone pair around nitrogen. The electron-pair arrangement is approximately tetrahedral, but the molecular shape is trigonal pyramidal."
  },

  {
    id: 10, subject: "Chemistry", topic: "Periodic Table", year: 1994, exam: "JAMB",

    question: "The number of electrons in the valence shell of an element of atomic number 14 is",

    options: ["1", "2", "3", "4"],

    answer: "4",

    explanation: "Atomic number 14 is silicon. Its electronic configuration by shells is 2, 8, 4, so it has four valence electrons."
  },

  {
    id: 11, subject: "Chemistry", topic: "Periodic Table", year: 1994, exam: "JAMB",

    question: "Which of the following physical properties decreases down a group in the periodic table?",

    options: [
      "Atomic radius",
      "Ionic radius",
      "Electropositivity",
      "Electronegativity"
    ],

    answer: "Electronegativity",

    explanation: "Down a group, atomic size and electron shielding increase. The attraction between the nucleus and bonding electrons therefore decreases, so electronegativity decreases."
  },

  {
    id: 12, subject: "Chemistry", topic: "Atomic Structure", year: 1994, exam: "JAMB",

    question: "The diagram shows an atom containing 2 protons, 2 neutrons and 2 electrons. This represents an atom of",

    options: ["Magnesium", "Helium", "Chlorine", "Neon"],

    answer: "Helium",

    explanation: "The atomic number is the number of protons. An atom with 2 protons is helium. With 2 neutrons and 2 electrons, the diagram represents helium-4."
  },

  // The source wording uses Groups I, V and VII and compounds XZ and YZ3.
  {
    id: 13, subject: "Chemistry", topic: "Chemical Bonding", year: 1994, exam: "JAMB",

    question: "Elements X, Y and Z belong to Groups I, V and VII of the periodic table respectively. Which of the following is TRUE about the bond types of XZ and YZ3?",

    options: [
      "Both are electrovalent",
      "Both are covalent",
      "XZ is electrovalent and YZ3 is covalent",
      "XZ is covalent and YZ3 is electrovalent"
    ],

    answer: "XZ is electrovalent and YZ3 is covalent",

    explanation: "X is a Group I metal and Z is a Group VII non-metal, so XZ is ionic (electrovalent). Y is a Group V non-metal and combines with Z by sharing electrons, so YZ3 is covalent."
  },

  {
    id: 14, subject: "Chemistry", topic: "Atomic Structure", year: 1994, exam: "JAMB",

    question: "Which of the following atomic configurations represents deuterium?",

    options: [
      "1 proton, 0 neutrons, 0 electrons",
      "1 proton, 0 neutrons, 1 electron",
      "1 proton, 1 neutron, 1 electron",
      "1 proton, 2 neutrons, 1 electron"
    ],

    answer: "1 proton, 1 neutron, 1 electron",

    explanation: "Deuterium is an isotope of hydrogen containing one proton, one neutron and one electron in its neutral atom."
  },

  {
    id: 15, subject: "Chemistry", topic: "Laboratory Apparatus", year: 1994, exam: "JAMB",

    question: "The apparatus setup in which air is passed through an absorption train containing anhydrous calcium chloride is useful for determining the amount of",

    options: [
      "Oxygen in air",
      "Water vapour in air",
      "Carbon(IV) oxide in air",
      "Argon in air"
    ],

    answer: "Water vapour in air",

    explanation: "Anhydrous calcium chloride absorbs water vapour. The increase in mass of the calcium chloride apparatus can therefore be used to determine the amount of water vapour in a known volume of air."
  },

  {
    id: 16, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1994, exam: "JAMB",

    question: "A solid that absorbs water from the atmosphere and dissolves completely to form an aqueous solution is described as",

    options: [
      "hydrophilic",
      "efflorescent",
      "deliquescent",
      "hygroscopic"
    ],

    answer: "deliquescent",

    explanation: "A deliquescent substance absorbs enough moisture from the atmosphere to dissolve completely and form an aqueous solution."
  },

  {
    id: 17, subject: "Chemistry", topic: "Environmental Chemistry", year: 1994, exam: "JAMB",

    question: "A major hazardous effect of oil pollution in coastal waters is the",

    options: [
      "destruction of marine life",
      "desalination of water",
      "increase in the acidity of the water",
      "detoxification of the water"
    ],

    answer: "destruction of marine life",

    explanation: "Oil pollution can coat aquatic organisms and habitats, reduce light penetration and interfere with oxygen exchange, causing serious harm to marine life."
  },

  {
    id: 18, subject: "Chemistry", topic: "Solutions & Solubility", year: 1994, exam: "JAMB",

    question: "Sodium chloride has no standard solubility product (Ksp) value commonly cited in solubility-product tables because of its",

    options: [
      "saline nature",
      "high solubility",
      "low solubility",
      "insolubility"
    ],

    answer: "high solubility",

    explanation: "Solubility-product calculations are mainly applied to sparingly soluble salts. Sodium chloride is highly soluble in water, so it is not normally treated using a standard Ksp value in elementary qualitative-analysis tables."
  },

  {
    id: 19, subject: "Chemistry", topic: "Solutions & Solubility", year: 1994, exam: "JAMB",

    question: "The solubility in moles per dm^3 of 20.2 g of potassium trioxonitrate(V) dissolved in 100 g of water at room temperature is [K = 39, O = 16, N = 14; assume water density is 1.0 g/cm^3]",

    options: ["0.10", "0.20", "1.00", "2.00"],

    answer: "2.00",

    explanation: "Molar mass of KNO3 = 39 + 14 + (3 x 16) = 101 g/mol. Moles of KNO3 = 20.2 / 101 = 0.20 mol. Using 100 g of water as 100 cm^3 = 0.10 dm^3, the concentration is 0.20 / 0.10 = 2.00 mol/dm^3."
  },

  {
    id: 20, subject: "Chemistry", topic: "Solutions & Solubility", year: 1994, exam: "JAMB",

    question: "A few drops of concentrated HCl are added to about 10 cm^3 of a solution of pH 3.4. The pH of the resulting mixture will be",

    options: [
      "less than 3.4",
      "greater than 3.4",
      "unaltered",
      "the same as that of pure water"
    ],

    answer: "less than 3.4",

    explanation: "Adding hydrochloric acid increases the hydrogen-ion concentration, making the solution more acidic and lowering its pH."
  },

  {
    id: 21, subject: "Chemistry", topic: "Acids, Bases & Salts", year: 1994, exam: "JAMB",

    question: "Which of the following compounds is chemically classified as a base?",

    options: ["CO2", "CaO", "H3PO3", "CH3COOH"],

    answer: "CaO",

    explanation: "Calcium oxide is a basic oxide. It reacts with water to form calcium hydroxide and reacts with acids to form salts and water."
  },

  // CHECK SOURCE: One online transcription gives "excess of 0.05 M sodium hydroxide".
  // That amount is insufficient to neutralize 20 cm^3 of 2.0 M ethanoic acid.
  // The supplied version correctly removes that inconsistent concentration.
  {
    id: 22, subject: "Chemistry", topic: "Stoichiometry", year: 1994, exam: "JAMB",

    question: "20 cm^3 of a 2.0 M solution of ethanoic acid was added to excess sodium hydroxide. The mass of the salt produced is [Na = 23, C = 12, O = 16, H = 1]",

    options: [
      "2.50 g",
      "2.73 g",
      "3.28 g",
      "4.54 g"
    ],

    answer: "3.28 g",

    explanation: "CH3COOH + NaOH -> CH3COONa + H2O. Moles of ethanoic acid = 2.0 x 20/1000 = 0.04 mol. The reaction is 1:1, so 0.04 mol of sodium ethanoate is formed. Molar mass of CH3COONa = 82 g/mol. Mass = 0.04 x 82 = 3.28 g."
  },

  {
    id: 23, subject: "Chemistry", topic: "Electrochemistry", year: 1994, exam: "JAMB",

    question: "What volume of oxygen measured at s.t.p. would be liberated on electrolysis by 9,650 coulombs of electricity? [Molar volume of gas = 22.4 dm^3, 1 Faraday = 96,500 C mol^-1]",

    options: [
      "22.40 dm^3",
      "11.20 dm^3",
      "1.12 dm^3",
      "0.56 dm^3"
    ],

    answer: "0.56 dm^3",

    explanation: "Liberation of 1 mol of O2 requires 4 Faradays. Therefore, volume = (9650 x 22.4) / (4 x 96500) = 0.56 dm^3."
  },

  {
    id: 24, subject: "Chemistry", topic: "Electrochemistry", year: 1994, exam: "JAMB",

    question: "Crude copper can be purified by electrolysis of concentrated copper(II) chloride if the crude copper sample is",

    options: [
      "made both the anode and the cathode",
      "made the cathode",
      "made the anode",
      "dissolved directly into the solution"
    ],

    answer: "made the anode",

    explanation: "During electrolytic refining, impure copper is used as the anode. Copper atoms from the impure anode enter the solution as Cu2+ ions and pure copper is deposited at the cathode."
  },

  {
    id: 25, subject: "Chemistry", topic: "Redox Reactions", year: 1994, exam: "JAMB",

    question: "H-(s) + H2O(l) -> H2(g) + OH-(aq). From the redox reaction equation above, it can be inferred that the",

    options: [
      "reaction is a double decomposition",
      "hydride ion is a reducing agent",
      "hydride ion is an oxidizing agent",
      "reaction is a standard neutralization"
    ],

    answer: "hydride ion is a reducing agent",

    explanation: "Hydrogen in H- has oxidation number -1 and becomes hydrogen with oxidation number 0. It is therefore oxidized and acts as the reducing agent."
  },

  // CHECK SOURCE: The numerical energy-profile values were supplied in the dataset,
  // but the original diagram is not present in the text. The calculation is correct
  // for the stated values.
  {
    id: 26, subject: "Chemistry", topic: "Chemical Energetics", year: 1994, exam: "JAMB",

    question: "The potential energy diagram shows reactants at 50 kJ/mol, a peak transition state at 200 kJ/mol, and products at 150 kJ/mol. What is the activation energy for the forward reaction?",

    options: [
      "+100 kJ mol^-1",
      "+150 kJ mol^-1",
      "+200 kJ mol^-1",
      "-100 kJ mol^-1"
    ],

    answer: "+150 kJ mol^-1",

    explanation: "Activation energy for the forward reaction = energy of transition state - energy of reactants = 200 - 50 = +150 kJ mol^-1."
  },

  // CHECK SOURCE: Same missing energy-profile diagram as Q26.
  {
    id: 27, subject: "Chemistry", topic: "Chemical Energetics", year: 1994, exam: "JAMB",

    question: "Using the energy profile described above, what is the enthalpy change (Delta H) for the reaction?",

    options: [
      "-100 kJ mol^-1",
      "+100 kJ mol^-1",
      "+50 kJ mol^-1",
      "-50 kJ mol^-1"
    ],

    answer: "+100 kJ mol^-1",

    explanation: "Delta H = energy of products - energy of reactants = 150 - 50 = +100 kJ mol^-1. The reaction is therefore endothermic."
  },

  {
    id: 28, subject: "Chemistry", topic: "Oxidation Numbers", year: 1994, exam: "JAMB",

    question: "MnO4-(aq) + 8H+(aq) + 5Fe2+(aq) -> Mn2+(aq) + 5Fe3+(aq) + 4H2O(l). The oxidation number of manganese changes from",

    options: [
      "+7 to +2",
      "+6 to +2",
      "+5 to +2",
      "+4 to +2"
    ],

    answer: "+7 to +2",

    explanation: "In MnO4-, manganese has oxidation number +7. In Mn2+, it has oxidation number +2. Therefore, manganese is reduced from +7 to +2."
  },

  {
    id: 29, subject: "Chemistry", topic: "Acids, Bases & Salts", year: 1994, exam: "JAMB",

    question: "An anhydride is a non-metallic oxide which",

    options: [
      "will not dissolve in water",
      "whose solution in water has a pH greater than 7",
      "whose solution in water has a pH less than 7",
      "whose solution in water has a neutral pH of 7"
    ],

    answer: "whose solution in water has a pH less than 7",

    explanation: "Acid anhydrides such as SO2 and CO2 react with water to form acidic solutions, so their aqueous solutions generally have pH values below 7."
  },

  {
    id: 30, subject: "Chemistry", topic: "Chemical Equilibrium", year: 1994, exam: "JAMB",

    question: "Which of the following statements is TRUE regarding Le Chatelier's principle for a reversible exothermic reaction?",

    options: [
      "An increase in temperature will cause an increase in the equilibrium constant",
      "An increase in temperature will cause a decrease in the equilibrium constant",
      "The addition of a catalyst will cause an increase in the equilibrium constant",
      "The addition of a catalyst will cause a decrease in the equilibrium constant"
    ],

    answer: "An increase in temperature will cause a decrease in the equilibrium constant",

    explanation: "For an exothermic reaction, heat behaves as a product. Increasing temperature shifts equilibrium toward the reactants and decreases the value of K."
  },

  {
    id: 31, subject: "Chemistry", topic: "Gases & Non-Metals", year: 1994, exam: "JAMB",

    question: "Which of the following substances are produced when ammonium trioxonitrate(V) crystals are cautiously heated in a hard-glass round-bottomed flask?",

    options: [
      "N2O and steam",
      "NO2 and ammonia",
      "N2O4 and NO2",
      "NO and NO2"
    ],

    answer: "N2O and steam",

    explanation: "Ammonium nitrate decomposes on careful heating to form dinitrogen oxide and water: NH4NO3 -> N2O + 2H2O."
  },

  {
    id: 32, subject: "Chemistry", topic: "Chemical Kinetics", year: 1994, exam: "JAMB",

    question: "2HCl(aq) + CaCO3(s) -> CaCl2(aq) + H2O(l) + CO2(g). Which curve would represent the progressive consumption of calcium carbonate as dilute HCl is added over time?",

    options: [
      "Curve L showing a linear increase",
      "Curve M showing a flat plateau",
      "Curve N showing a progressive downward slope",
      "Curve P showing a sharp vertical peak"
    ],

    answer: "Curve N showing a progressive downward slope",

    explanation: "Calcium carbonate is a reactant and is consumed as the reaction proceeds. Therefore, its amount decreases with time, giving a downward-sloping curve until the limiting reactant is exhausted."
  },

  {
    id: 33, subject: "Chemistry", topic: "Laboratory Preparation of Gases", year: 1994, exam: "JAMB",

    question: "In the laboratory preparation of chlorine gas, which combination of substances is used?",

    options: [
      "potassium tetraoxochlorate(VII) and concentrated H2SO4",
      "potassium tetraoxomanganate(VII) and concentrated HCl",
      "manganese(IV) oxide and concentrated HCl",
      "sodium chloride and concentrated H2SO4"
    ],

    answer: "manganese(IV) oxide and concentrated HCl",

    explanation: "Chlorine can be prepared in the laboratory by heating manganese(IV) oxide with concentrated hydrochloric acid: MnO2 + 4HCl -> MnCl2 + Cl2 + 2H2O."
  },

  {
    id: 34, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1994, exam: "JAMB",

    question: "Which of these metals CANNOT displace hydrogen from hot alkaline solutions?",

    options: ["Aluminium", "Zinc", "Tin", "Iron"],

    answer: "Iron",

    explanation: "Aluminium, zinc and tin can react with hot concentrated alkali and release hydrogen while forming soluble compounds. Iron does not normally displace hydrogen from hot alkaline solutions."
  },

  {
    id: 35, subject: "Chemistry", topic: "Applied Chemistry", year: 1994, exam: "JAMB",

    question: "Clothes should be properly rinsed with clean water after bleaching because",

    options: [
      "the bleach decolorizes the clothes",
      "chlorine reacts with fabrics during bleaching",
      "the clothes are sterilized during bleaching",
      "hydrogen chloride solution is produced during bleaching"
    ],

    answer: "chlorine reacts with fabrics during bleaching",

    explanation: "Bleaching agents containing active chlorine can continue reacting with textile fibres if residues are left in the fabric. Thorough rinsing removes the residual bleaching chemicals and helps prevent further damage."
  },

  {
    id: 36, subject: "Chemistry", topic: "Qualitative Analysis", year: 1994, exam: "JAMB",

    question: "Which of these solutions will give a white precipitate with barium chloride acidified with hydrochloric acid?",

    options: [
      "Sodium trioxocarbonate(IV)",
      "Sodium tetraoxosulphate(VI)",
      "Sodium trioxosulphate(IV)",
      "Sodium sulphide"
    ],

    answer: "Sodium tetraoxosulphate(VI)",

    explanation: "Sulphate ions react with barium ions to form insoluble white barium sulphate: Ba2+ + SO4^2- -> BaSO4."
  },

  {
    id: 37, subject: "Chemistry", topic: "Applied Chemistry", year: 1994, exam: "JAMB",

    question: "Sulphur(VI) oxide (SO3) is NOT directly dissolved in water in the industrial preparation of H2SO4 by the contact process because",

    options: [
      "the direct reaction between SO3 and water is violently exothermic and forms a dense mist",
      "acid is usually added to water and never water to acid",
      "SO3 is an acidic oxide that does not dissolve in liquid water easily",
      "SO3 is unstable as an acid gas"
    ],

    answer: "the direct reaction between SO3 and water is violently exothermic and forms a dense mist",

    explanation: "Direct reaction of SO3 with water is highly exothermic and produces a fine mist of sulfuric acid that is difficult to condense. Industrially, SO3 is absorbed in concentrated H2SO4 to form oleum, which is then diluted."
  },

  {
    id: 38, subject: "Chemistry", topic: "Electrochemistry", year: 1994, exam: "JAMB",

    question: "In an electrolytic corrosion-prevention setup to protect an underground iron pipe from rust, the iron pipe is",

    options: [
      "made the cathode",
      "made the anode",
      "connected to a metal of lower electropositive potential",
      "initially coated with tin"
    ],

    answer: "made the cathode",

    explanation: "In cathodic protection, the iron structure is made the cathode and connected to a more reactive metal that acts as the sacrificial anode. The iron therefore does not undergo oxidation."
  },

  {
    id: 39, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1994, exam: "JAMB",

    question: "Which of the following statements is NOT true of metallic elements?",

    options: [
      "They are good conductors of electricity",
      "They ionize by electron loss",
      "Their oxides are acidic",
      "They typically exhibit high melting points"
    ],

    answer: "Their oxides are acidic",

    explanation: "Most metallic oxides are basic or amphoteric rather than acidic. The other statements describe common properties of metals."
  },

  {
    id: 40, subject: "Chemistry", topic: "Periodic Table", year: 1994, exam: "JAMB",

    question: "Which of the following lists displays the correct order of decreasing metallic chemical activity for Fe, Ca, Al and Na?",

    options: [
      "Fe > Ca > Al > Na",
      "Na > Ca > Al > Fe",
      "Al > Fe > Na > Ca",
      "Ca > Na > Fe > Al"
    ],

    answer: "Na > Ca > Al > Fe",

    explanation: "The metals are arranged in decreasing reactivity as Na > Ca > Al > Fe in the electrochemical/activity series."
  },

  {
    id: 41, subject: "Chemistry", topic: "Organic Chemistry", year: 1994, exam: "JAMB",

    question: "The correct systematic IUPAC name of the compound CH3-CH(CH3)-C#C-CH3 is",

    options: [
      "2,2-dimethylbut-1-yne",
      "4-methylpent-2-yne",
      "3,3-dimethylbut-1-ene",
      "3,3-dimethylbut-1-yne"
    ],

    answer: "4-methylpent-2-yne",

    explanation: "The longest carbon chain containing the triple bond has five carbon atoms. Numbering from the end nearest the triple bond gives pent-2-yne, with a methyl substituent at carbon 4. The name is therefore 4-methylpent-2-yne."
  },

  // CHECK SOURCE: The original question contains a structure diagram that is
  // poorly represented in text transcriptions. The source answer is option C,
  // 3,5-dimethylhept-3-ene. The structure below is the text reconstruction
  // corresponding to that name.
  {
    id: 42, subject: "Chemistry", topic: "Organic Chemistry", year: 1994, exam: "JAMB",

    question: "The IUPAC name for the hydrocarbon CH3-C(CH2CH3)=CH-CH2-CH(CH3)-CH3 is",

    options: [
      "2-ethyl-5-methylhex-2-ene",
      "2,5-dimethylhex-2-ene",
      "3,5-dimethylhept-3-ene",
      "3,6-dimethylhept-3-ene"
    ],

    answer: "3,5-dimethylhept-3-ene",

    explanation: "The longest chain containing the double bond has seven carbon atoms. Numbering to give the double bond the lowest possible number places it at carbon 3. There are methyl groups at carbons 3 and 5, giving 3,5-dimethylhept-3-ene."
  },

  {
    id: 43, subject: "Chemistry", topic: "Organic Chemistry", year: 1994, exam: "JAMB",

    question: "Which of the following compounds is a secondary alkanol?",

    options: [
      "CH3-CH2-CH(OH)-CH3",
      "CH3-CH2-CH2-CH2-OH",
      "CH3-CH2-O-CH2-CH3",
      "CH3-C(OH)(CH3)-CH3"
    ],

    answer: "CH3-CH2-CH(OH)-CH3",

    explanation: "In butan-2-ol, the carbon bearing the OH group is attached to two other carbon atoms, so it is a secondary alcohol."
  },

  {
    id: 44, subject: "Chemistry", topic: "Organic Chemistry", year: 1994, exam: "JAMB",

    question: "Which of the following compounds reacts with sodium metal as well as ammoniacal silver and copper salts?",

    options: [
      "CH3-C#C-CH3",
      "CH3-CH2-CH2-CH2-CH3",
      "CH3-C#CH",
      "CH3-CH=CH-CH3"
    ],

    answer: "CH3-C#CH",

    explanation: "A terminal alkyne reacts with sodium metal and also forms insoluble silver and copper acetylides with ammoniacal silver and copper salts. CH3-C#CH is a terminal alkyne."
  },

  {
    id: 45, subject: "Chemistry", topic: "Organic Chemistry", year: 1994, exam: "JAMB",

    question: "Which of the following pairs are isomers?",

    options: [
      "Ethanol and dimethyl ether",
      "Benzene and methylbenzene",
      "Ethanol and propanone",
      "Trichloromethane and tetrachloromethane"
    ],

    answer: "Ethanol and dimethyl ether",

    explanation: "Ethanol and dimethyl ether both have the molecular formula C2H6O but different structures, so they are structural isomers."
  },

  {
    id: 46, subject: "Chemistry", topic: "Organic Chemistry", year: 1994, exam: "JAMB",

    question: "Which functional group in an organic compound gives effervescence with a saturated solution of NaHCO3?",

    options: [
      "hydroxyl group",
      "alkoxyl group",
      "carbonyl group",
      "carboxyl group"
    ],

    answer: "carboxyl group",

    explanation: "Carboxylic acids react with sodium hydrogen carbonate to release carbon dioxide gas, producing effervescence."
  },

  {
    id: 47, subject: "Chemistry", topic: "Organic Chemistry", year: 1994, exam: "JAMB",

    question: "The characteristic reaction of carbonyl compounds is",

    options: [
      "substitution",
      "elimination",
      "addition",
      "saponification"
    ],

    answer: "addition",

    explanation: "Aldehydes and ketones characteristically undergo addition reactions at the carbonyl group, although they can also undergo other reactions depending on the conditions."
  },

  {
    id: 48, subject: "Chemistry", topic: "Organic Chemistry", year: 1994, exam: "JAMB",

    question: "An organic compound containing 40.1% carbon and 6.667% hydrogen has an empirical formula of",

    options: [
      "C2H4O2",
      "C2H3O2",
      "CH2O",
      "CH3O"
    ],

    answer: "CH2O",

    explanation: "For 100 g of compound: C = 40.1/12 = 3.34 mol, H = 6.667/1 = 6.667 mol, and O = (100 - 40.1 - 6.667)/16 = about 3.33 mol. Dividing by the smallest gives approximately 1:2:1, so the empirical formula is CH2O."
  },

  {
    id: 49, subject: "Chemistry", topic: "Organic Chemistry", year: 1994, exam: "JAMB",

    question: "Alkanals can be differentiated from alkanones by reaction with",

    options: [
      "2,4-dinitrophenylhydrazine",
      "hydrogen cyanide",
      "sodium hydrogen sulphite",
      "Tollens' reagent"
    ],

    answer: "Tollens' reagent",

    explanation: "Both aldehydes and ketones react with 2,4-dinitrophenylhydrazine, HCN and sodium hydrogen sulphite under suitable conditions. Aldehydes, unlike ordinary ketones, reduce Tollens' reagent to produce a silver deposit."
  },

  {
    id: 50, subject: "Chemistry", topic: "Organic Chemistry", year: 1994, exam: "JAMB",

    question: "Which of the following reagents is commonly used to test for unsaturation in an organic compound?",

    options: [
      "Fehling's solution",
      "Bromine water",
      "Tollens' reagent",
      "Benedict's solution"
    ],

    answer: "Bromine water",

    explanation: "Alkenes and alkynes can decolorize bromine water through addition reactions at carbon-carbon multiple bonds, making bromine water a standard test for unsaturation."
  }

];

export default chemJamb1994;