// JAMB 2003 Chemistry Past Questions
// Fully audited - questions, answers, calculations, explanations, transcription issues, and app-safe formatting.
// Note: The supplied 50-question set does not match the archived 2003 JAMB Chemistry paper.

const chemJamb2003 = [

  {
    id: 1, subject: "Chemistry", topic: "Separation Techniques", year: 2003, exam: "JAMB",

    question: "A mixture of oil and water can be cleanly separated using a separating funnel because the two liquids are",

    options: [
      "miscible and have different boiling points",
      "immiscible and have different densities",
      "miscible and have the same density",
      "immiscible and have identical boiling points"
    ],

    answer: "immiscible and have different densities",

    explanation: "Oil and water are immiscible and form two distinct layers. Because they have different densities, the denser water layer settles below the oil and can be drained through the separating funnel."
  },

  {
    id: 2, subject: "Chemistry", topic: "Gas Laws", year: 2003, exam: "JAMB",

    question: "If 100 cm3 of oxygen gas at s.t.p. contains Y molecules, how many molecules will be present in 50 cm3 of hydrogen gas under the same conditions?",

    options: ["2Y", "Y", "0.5Y", "0.25Y"],

    answer: "0.5Y",

    explanation: "By Avogadro's law, equal volumes of gases under the same conditions contain equal numbers of molecules. Therefore, 50 cm3 contains half as many molecules as 100 cm3, giving 0.5Y."
  },

  {
    id: 3, subject: "Chemistry", topic: "Stoichiometry", year: 2003, exam: "JAMB",

    question: "What is the percentage by mass of nitrogen in ammonium tetraoxosulphate(VI)? [N = 14, H = 1, S = 32, O = 16]",

    options: ["12.1%", "21.2%", "24.2%", "28.4%"],

    answer: "21.2%",

    explanation: "Ammonium tetraoxosulphate(VI) is (NH4)2SO4. Its molar mass is (2 x 14) + (8 x 1) + 32 + (4 x 16) = 132 g/mol. The mass of nitrogen is 2 x 14 = 28 g. Percentage nitrogen = (28/132) x 100 = 21.2%."
  },

  {
    id: 4, subject: "Chemistry", topic: "Stoichiometry", year: 2003, exam: "JAMB",

    question: "What volume of hydrogen gas at s.t.p. will be produced when 6.5 g of zinc reacts completely with excess dilute hydrochloric acid? [Zn = 65, molar volume at s.t.p. = 22.4 dm3]",

    options: ["1.12 dm3", "2.24 dm3", "4.48 dm3", "11.20 dm3"],

    answer: "2.24 dm3",

    explanation: "Zn + 2HCl -> ZnCl2 + H2. Moles of Zn = 6.5/65 = 0.1 mol. The reaction produces hydrogen in a 1:1 mole ratio, so 0.1 mol H2 is produced. Volume = 0.1 x 22.4 = 2.24 dm3."
  },

  {
    id: 5, subject: "Chemistry", topic: "Gas Laws", year: 2003, exam: "JAMB",

    question: "A given mass of gas occupies a volume of 4.0 dm3 at 27 C and a pressure of 1.5 atm. What will be its volume if the temperature is raised to 127 C while the pressure remains constant?",

    options: ["2.5 dm3", "3.0 dm3", "4.5 dm3", "5.3 dm3"],

    answer: "5.3 dm3",

    explanation: "At constant pressure, Charles's law applies: V1/T1 = V2/T2. T1 = 27 + 273 = 300 K and T2 = 127 + 273 = 400 K. Therefore V2 = (4.0 x 400)/300 = 5.33 dm3, approximately 5.3 dm3."
  },

  {
    id: 6, subject: "Chemistry", topic: "Gas Laws", year: 2003, exam: "JAMB",

    question: "If the rate of diffusion of gas A is 4 times that of gas B, what is the ratio of the relative molecular mass of A to that of B?",

    options: ["1 : 4", "4 : 1", "1 : 16", "16 : 1"],

    answer: "1 : 16",

    explanation: "By Graham's law, Rate_A/Rate_B = sqrt(M_B/M_A). Since the rate ratio is 4, 16 = M_B/M_A. Therefore M_A/M_B = 1/16, giving a ratio of 1 : 16."
  },

  {
    id: 7, subject: "Chemistry", topic: "Gas Laws", year: 2003, exam: "JAMB",

    question: "A mixture of 4.0 g of hydrogen and 32.0 g of oxygen has a total pressure of 900 mm Hg. Calculate the partial pressure of hydrogen in the mixture. [H = 1, O = 16]",

    options: ["300 mm Hg", "450 mm Hg", "600 mm Hg", "750 mm Hg"],

    answer: "600 mm Hg",

    explanation: "Moles of H2 = 4/2 = 2 mol. Moles of O2 = 32/32 = 1 mol. Total moles = 3 mol. Mole fraction of H2 = 2/3. Partial pressure = (2/3) x 900 = 600 mm Hg."
  },

  {
    id: 8, subject: "Chemistry", topic: "Kinetic Theory", year: 2003, exam: "JAMB",

    question: "When a solid substance absorbs heat and turns directly into a gas without forming a liquid layer, the energy change is called",

    options: ["melting energy", "evaporation energy", "sublimation energy", "boiling energy"],

    answer: "sublimation energy",

    explanation: "The direct conversion of a solid to a gas without passing through the liquid state is sublimation. The energy required for this change is called sublimation energy or enthalpy of sublimation."
  },

  {
    id: 9, subject: "Chemistry", topic: "Atomic Structure", year: 2003, exam: "JAMB",

    question: "An element X has an atomic number of 15 and a mass number of 31. The number of protons, neutrons and electrons in a uninegative ion X- of the element is respectively",

    options: ["15, 16 and 15", "15, 16 and 16", "16, 15 and 16", "15, 15 and 16"],

    answer: "15, 16 and 16",

    explanation: "The atomic number gives 15 protons. Neutrons = 31 - 15 = 16. A uninegative ion X- has gained one electron, so it contains 16 electrons. Therefore the numbers are 15, 16 and 16."
  },

  {
    id: 10, subject: "Chemistry", topic: "Periodic Table", year: 2003, exam: "JAMB",

    question: "Which of the following configurations represents an element that is located in Group 15 and Period 3 of the periodic table?",

    options: [
      "1s2 2s2 2p6 3s2",
      "1s2 2s2 2p6 3s2 3p1",
      "1s2 2s2 2p6 3s2 3p3",
      "1s2 2s2 2p6 3s2 3p5"
    ],

    answer: "1s2 2s2 2p6 3s2 3p3",

    explanation: "The highest principal energy level is n = 3, so the element is in Period 3. The outer shell contains 3s2 3p3, giving five valence electrons and placing the element in Group 15. This is the configuration of phosphorus."
  },

  {
    id: 11, subject: "Chemistry", topic: "Chemical Bonding", year: 2003, exam: "JAMB",

    question: "The geometric structure of an ammonia molecule (NH3) is",

    options: ["linear", "trigonal planar", "tetrahedral", "trigonal pyramidal"],

    answer: "trigonal pyramidal",

    explanation: "The nitrogen atom has three bonding pairs and one lone pair. The lone pair repels the bonding pairs, giving NH3 a trigonal pyramidal molecular shape."
  },

  {
    id: 12, subject: "Chemistry", topic: "Chemical Bonding", year: 2003, exam: "JAMB",

    question: "A bond formed when two non-metal atoms with a significant difference in electronegativity combine chemically is likely to be",

    options: ["a non-polar covalent bond", "a polar covalent bond", "an ionic bond", "a dative covalent bond"],

    answer: "a polar covalent bond",

    explanation: "When two non-metal atoms share electrons but have different electronegativities, the shared electrons are attracted more strongly by one atom. This produces a polar covalent bond."
  },

  {
    id: 13, subject: "Chemistry", topic: "Chemical Bonding", year: 2003, exam: "JAMB",

    question: "An example of a giant covalent structure held together by a network of covalent bonds is",

    options: ["iodine", "ice", "diamond", "naphthalene"],

    answer: "diamond",

    explanation: "Diamond has a giant three-dimensional covalent structure in which each carbon atom is covalently bonded to four other carbon atoms. Iodine, ice and naphthalene have molecular structures."
  },

  {
    id: 14, subject: "Chemistry", topic: "Periodic Table", year: 2003, exam: "JAMB",

    question: "As you move down Group 17 (halogens) in the periodic table, the physical state changes from gas to liquid to solid because the",

    options: [
      "electronegativity increases down the group",
      "ionization potential decreases down the group",
      "intermolecular Van der Waals forces increase with molecular size",
      "nuclear charge decreases progressively down the group"
    ],

    answer: "intermolecular Van der Waals forces increase with molecular size",

    explanation: "Halogen molecules become larger and more polarizable down the group. Their intermolecular London dispersion forces therefore become stronger, increasing their boiling points. Thus fluorine and chlorine are gases, bromine is a liquid, and iodine is a solid at room temperature."
  },

  {
    id: 15, subject: "Chemistry", topic: "Gases & Non-Metals", year: 2003, exam: "JAMB",

    // CHECK SOURCE: The supplied wording is not chemically well-posed because both helium and argon are inert noble gases.
    question: "Which of the following noble gases is the lightest and does not support combustion?",

    options: ["Helium", "Neon", "Argon", "Krypton"],

    answer: "Helium",

    explanation: "Helium is the lightest noble gas and is chemically inert. It does not support combustion."
  },

  {
    id: 16, subject: "Chemistry", topic: "Water Chemistry", year: 2003, exam: "JAMB",

    question: "Which of the following processes or treatments can successfully remove permanent hardness from a water sample?",

    options: [
      "Boiling the water sample",
      "Adding slaked lime",
      "Adding washing soda (sodium carbonate)",
      "Adding alum blocks"
    ],

    answer: "Adding washing soda (sodium carbonate)",

    explanation: "Permanent hardness is caused mainly by soluble calcium and magnesium chlorides and sulfates. Washing soda supplies carbonate ions that precipitate calcium and magnesium as insoluble carbonates, thereby softening the water."
  },

  {
    id: 17, subject: "Chemistry", topic: "Environmental Chemistry", year: 2003, exam: "JAMB",

    question: "The atmospheric pollutant gas that combines with moisture to cause acid rain and damages architectural buildings is",

    options: ["carbon(II) oxide", "methane gas", "sulphur(IV) oxide", "nitrogen(I) oxide"],

    answer: "sulphur(IV) oxide",

    explanation: "Sulphur(IV) oxide (SO2) reacts with atmospheric moisture and can ultimately contribute to the formation of acids responsible for acid rain. Acid rain can damage limestone, marble and metallic structures."
  },

  {
    id: 18, subject: "Chemistry", topic: "Solutions & Solubility", year: 2003, exam: "JAMB",

    question: "A colloidal system consisting of tiny solid particles dispersed throughout a liquid medium is classified as a/an",

    options: ["emulsion", "sol", "gel", "foam"],

    answer: "sol",

    explanation: "A sol is a colloid in which solid particles are dispersed in a liquid continuous phase. An emulsion contains liquid droplets dispersed in another liquid, while a gel has a liquid dispersed in a solid-like network."
  },

  {
    id: 19, subject: "Chemistry", topic: "Solutions & Solubility", year: 2003, exam: "JAMB",

    question: "Calculate the hydrogen ion concentration [H+] of a solution that has a measured pH value of 4.70. [Given log10(2.0) = 0.30]",

    options: [
      "2.0 x 10^(-5) M",
      "5.0 x 10^(-5) M",
      "2.0 x 10^(-4) M",
      "5.0 x 10^(-4) M"
    ],

    answer: "2.0 x 10^(-5) M",

    explanation: "[H+] = 10^(-pH) = 10^(-4.70) = 10^(0.30) x 10^(-5). Since log10(2.0) = 0.30, 10^(0.30) = 2.0. Therefore [H+] = 2.0 x 10^(-5) M."
  },

  {
    id: 20, subject: "Chemistry", topic: "Acids, Bases & Salts", year: 2003, exam: "JAMB",

    question: "Which of the following salt samples will dissolve in water to give a solution with an alkaline pH greater than 7?",

    options: ["NH4Cl", "Na2SO4", "CH3COONa", "AlCl3"],

    answer: "CH3COONa",

    explanation: "Sodium ethanoate is formed from a strong base and a weak acid. The ethanoate ion hydrolyses in water: CH3COO- + H2O <=> CH3COOH + OH-. The resulting hydroxide ions make the solution alkaline."
  },

  {
    id: 21, subject: "Chemistry", topic: "Solutions & Volumetric Analysis", year: 2003, exam: "JAMB",

    question: "What volume of 0.5 M oxalic acid solution is required to completely neutralize 20 cm3 of a 0.1 M sodium hydroxide solution?",

    options: ["2.0 cm3", "4.0 cm3", "8.0 cm3", "10.0 cm3"],

    answer: "2.0 cm3",

    explanation: "Oxalic acid is dibasic: H2C2O4 + 2NaOH -> Na2C2O4 + 2H2O. Moles of NaOH = 0.1 x 0.020 = 0.002 mol. Therefore moles of oxalic acid required = 0.002/2 = 0.001 mol. Volume = 0.001/0.5 = 0.002 dm3 = 2.0 cm3."
  },

  {
    id: 22, subject: "Chemistry", topic: "Electrochemistry", year: 2003, exam: "JAMB",

    question: "During the industrial refining or purification of an impure copper sample by electrolysis, pure copper metal is deposited at the",

    options: [
      "anode because oxidation takes place there",
      "cathode because reduction takes place there",
      "anode because reduction takes place there",
      "cathode because oxidation takes place there"
    ],

    answer: "cathode because reduction takes place there",

    explanation: "During electrolytic refining, Cu2+ ions are reduced at the cathode: Cu2+ + 2e- -> Cu. Pure copper therefore deposits on the cathode."
  },

  {
    id: 23, subject: "Chemistry", topic: "Electrochemistry", year: 2003, exam: "JAMB",

    question: "How many Faradays of electricity are required to deposit 5.4 g of aluminium metal at the cathode from a molten aluminium salt? [Al = 27]",

    options: ["0.2 F", "0.4 F", "0.6 F", "1.2 F"],

    answer: "0.6 F",

    explanation: "Moles of Al = 5.4/27 = 0.2 mol. Each Al3+ ion requires 3 electrons for reduction to aluminium metal. Therefore Faradays required = 0.2 x 3 = 0.6 F."
  },

  {
    id: 24, subject: "Chemistry", topic: "Redox Reactions", year: 2003, exam: "JAMB",

    question: "Fe2+(aq) -> Fe3+(aq) + e-. This half-cell reaction represents a process of",

    options: ["ionization", "oxidation", "reduction", "neutralization"],

    answer: "oxidation",

    explanation: "Oxidation involves loss of electrons or an increase in oxidation number. Fe2+ loses one electron to become Fe3+, so the process is oxidation."
  },

  {
    id: 25, subject: "Chemistry", topic: "Oxidation Numbers", year: 2003, exam: "JAMB",

    question: "What is the oxidation number of chromium in the dichromate ion (Cr2O7^2-)?",

    options: ["+3", "+4", "+5", "+6"],

    answer: "+6",

    explanation: "Let the oxidation number of chromium be x. Then 2x + 7(-2) = -2. Therefore 2x - 14 = -2, so 2x = 12 and x = +6."
  },

  {
    id: 26, subject: "Chemistry", topic: "Chemical Energetics", year: 2003, exam: "JAMB",

    question: "A chemical reaction is guaranteed to be completely spontaneous at all temperatures if the thermodynamic values show that",

    options: [
      "Delta H is positive and Delta S is positive",
      "Delta H is negative and Delta S is negative",
      "Delta H is negative and Delta S is positive",
      "Delta H is positive and Delta S is negative"
    ],

    answer: "Delta H is negative and Delta S is positive",

    explanation: "Gibbs free energy is given by Delta G = Delta H - T Delta S. If Delta H is negative and Delta S is positive, both terms make Delta G negative for all temperatures above absolute zero, so the reaction is thermodynamically spontaneous."
  },

  {
    id: 27, subject: "Chemistry", topic: "Chemical Kinetics", year: 2003, exam: "JAMB",

    question: "A catalyst speeds up the rate of a chemical reaction by providing an alternative reaction pathway that",

    options: [
      "increases the average velocity of the molecules",
      "lowers the activation energy barrier",
      "increases the total enthalpy change of the reaction",
      "increases the total number of molecular collisions"
    ],

    answer: "lowers the activation energy barrier",

    explanation: "A catalyst provides an alternative reaction pathway with a lower activation energy. This allows a greater fraction of reactant particles to react successfully per unit time."
  },

  {
    id: 28, subject: "Chemistry", topic: "Chemical Equilibrium", year: 2003, exam: "JAMB",

    question: "According to Le Chatelier's principle, if an equilibrium system is subjected to a decrease in pressure, the system will shift to favour the side with",

    options: [
      "more moles of gaseous molecules",
      "fewer moles of gaseous molecules",
      "liquid and solid phase coordinates",
      "the exothermic reaction pathway"
    ],

    answer: "more moles of gaseous molecules",

    explanation: "For an equilibrium involving gases, decreasing pressure favours the side with more moles of gas because the system responds in a direction that tends to increase the pressure."
  },

  {
    id: 29, subject: "Chemistry", topic: "Gases & Non-Metals", year: 2003, exam: "JAMB",

    question: "Which of the following gases can be collected over water because it is nearly insoluble in water?",

    options: ["Ammonia", "Hydrogen chloride", "Sulphur(IV) oxide", "Hydrogen"],

    answer: "Hydrogen",

    explanation: "Hydrogen is only very slightly soluble in water, so it can be collected by downward displacement of water. Ammonia, hydrogen chloride and sulphur(IV) oxide are much more soluble in water."
  },

  {
    id: 30, subject: "Chemistry", topic: "Gases & Non-Metals", year: 2003, exam: "JAMB",

    question: "Carbon(II) oxide is a lethal poisonous gas because it has a strong affinity for",

    options: [
      "lung tissues causing them to dissolve",
      "blood haemoglobin, blocking oxygen transport",
      "atmospheric water droplets to cause acid rain",
      "white phosphorus inside the body"
    ],

    answer: "blood haemoglobin, blocking oxygen transport",

    explanation: "Carbon monoxide (CO) binds strongly to haemoglobin to form carboxyhaemoglobin. This reduces the blood's ability to transport oxygen to body tissues."
  },

  {
    id: 31, subject: "Chemistry", topic: "Inorganic Chemistry", year: 2003, exam: "JAMB",

    question: "The gas released when dilute nitric acid reacts with calcium carbonate is",

    options: ["hydrogen gas", "nitrogen(IV) oxide", "carbon(IV) oxide", "nitric oxide gas"],

    answer: "carbon(IV) oxide",

    explanation: "An acid reacts with a carbonate to form a salt, water and carbon(IV) oxide. For example: CaCO3 + 2HNO3 -> Ca(NO3)2 + H2O + CO2."
  },

  {
    id: 32, subject: "Chemistry", topic: "Inorganic Chemistry", year: 2003, exam: "JAMB",

    question: "The oxide that acts as the acid anhydride corresponding to trioxonitrate(V) acid is",

    options: ["nitrogen(I) oxide", "nitrogen(II) oxide", "nitrogen(IV) oxide", "nitrogen(V) oxide"],

    answer: "nitrogen(V) oxide",

    explanation: "Nitrogen(V) oxide, N2O5, is the acid anhydride of nitric acid: N2O5 + H2O -> 2HNO3."
  },

  {
    id: 33, subject: "Chemistry", topic: "Qualitative Analysis", year: 2003, exam: "JAMB",

    question: "An unknown gas turns filter paper soaked in acidified potassium dichromate(VI) solution from orange to green and produces no yellow sulphur residue. The gas is identified as",

    options: ["oxygen", "carbon(IV) oxide", "sulphur(IV) oxide", "hydrogen sulphide"],

    answer: "sulphur(IV) oxide",

    explanation: "Sulphur(IV) oxide is a reducing gas that changes acidified dichromate from orange to green without producing a yellow sulphur residue. Hydrogen sulphide can also reduce dichromate but produces yellow sulphur, so the added observation distinguishes the two gases."
  },

  {
    id: 34, subject: "Chemistry", topic: "Inorganic Chemistry", year: 2003, exam: "JAMB",

    question: "Zinc oxide is classified as an amphoteric oxide because it can react with both",

    options: [
      "pure water and alcohol solvents",
      "dilute mineral acids and strong alkalis",
      "liquid water and atmospheric rare gases",
      "organic solvents and liquid ammonia"
    ],

    answer: "dilute mineral acids and strong alkalis",

    explanation: "ZnO reacts with acids as a basic oxide and with strong alkalis as an acidic oxide. This ability to react with both acids and bases is characteristic of amphoteric oxides."
  },

  {
    id: 35, subject: "Chemistry", topic: "Applied Chemistry", year: 2003, exam: "JAMB",

    question: "The primary mineral ore from which iron metal is commonly extracted in a blast furnace is",

    options: ["bauxite", "haematite", "cassiterite", "galena"],

    answer: "haematite",

    explanation: "Haematite is mainly iron(III) oxide, Fe2O3, and is an important ore of iron. Iron is extracted from its ores industrially using a blast furnace."
  },

  {
    id: 36, subject: "Chemistry", topic: "Applied Chemistry", year: 2003, exam: "JAMB",

    question: "The alloy brass consists mainly of copper and",

    options: ["tin", "zinc", "nickel", "lead"],

    answer: "zinc",

    explanation: "Brass is an alloy of copper and zinc. Bronze, in contrast, is mainly an alloy of copper and tin."
  },

  {
    id: 37, subject: "Chemistry", topic: "Inorganic Chemistry", year: 2003, exam: "JAMB",

    question: "The compound responsible for the white milky appearance formed when carbon(IV) oxide is passed into lime water is",

    options: [
      "calcium oxide",
      "calcium hydroxide",
      "calcium trioxocarbonate(IV)",
      "calcium hydrogentrioxocarbonate(IV)"
    ],

    answer: "calcium trioxocarbonate(IV)",

    explanation: "Carbon(IV) oxide reacts with calcium hydroxide in lime water to form insoluble calcium trioxocarbonate(IV), CaCO3, which produces the milky appearance: CO2 + Ca(OH)2 -> CaCO3 + H2O."
  },

  {
    id: 38, subject: "Chemistry", topic: "Periodic Table", year: 2003, exam: "JAMB",

    question: "Transition metal ions frequently form coloured compounds and exhibit variable oxidation states because they contain",

    options: [
      "completely filled p-subshells",
      "partially filled d-orbitals",
      "mobile valence electrons in s-orbitals",
      "empty valence f-orbitals"
    ],

    answer: "partially filled d-orbitals",

    explanation: "The presence of partially filled d-subshells contributes to the variable oxidation states and many of the characteristic colours and complex formation of transition metals."
  },

  {
    id: 39, subject: "Chemistry", topic: "Organic Chemistry", year: 2003, exam: "JAMB",

    question: "The carbon atoms involved in a double bond in an alkene molecule such as ethene are",

    options: ["sp3 hybridized", "sp2 hybridized", "sp hybridized", "not hybridized"],

    answer: "sp2 hybridized",

    explanation: "Each carbon atom in an alkene double bond is sp2 hybridized. Three sp2 orbitals form sigma bonds, while the remaining unhybridized p orbital participates in the pi bond."
  },

  {
    id: 40, subject: "Chemistry", topic: "Organic Chemistry", year: 2003, exam: "JAMB",

    question: "The general formula representing the homologous series of open-chain alkanes is",

    options: ["CnH2n", "CnH2n-2", "CnH2n+1", "CnH2n+2"],

    answer: "CnH2n+2",

    explanation: "Open-chain saturated hydrocarbons containing only single bonds are alkanes. Their general molecular formula is CnH2n+2."
  },

  {
    id: 41, subject: "Chemistry", topic: "Organic Chemistry", year: 2003, exam: "JAMB",

    question: "Chemical compounds that have the same molecular formula but different structural arrangements are described as",

    options: ["allotropes", "isotopes", "isomers", "homologues"],

    answer: "isomers",

    explanation: "Isomers have the same molecular formula but different arrangements of their atoms. Structural isomers differ in the way their atoms are connected."
  },

  {
    id: 42, subject: "Chemistry", topic: "Organic Chemistry", year: 2003, exam: "JAMB",

    question: "The selective chemical test used to identify terminal alkynes involves reaction with",

    options: [
      "bromine water",
      "acidified KMnO4 solution",
      "ammoniacal copper(I) chloride solution",
      "Fehling's solution"
    ],

    answer: "ammoniacal copper(I) chloride solution",

    explanation: "Terminal alkynes contain an acidic hydrogen attached to a carbon of the triple bond. They react with ammoniacal copper(I) chloride to form a characteristic copper acetylide precipitate."
  },

  {
    id: 43, subject: "Chemistry", topic: "Organic Chemistry", year: 2003, exam: "JAMB",

    question: "What organic product is formed when ethanol is completely oxidized under reflux using excess acidified potassium heptaoxodichromate(VI)?",

    options: ["ethanal", "ethanoic acid", "ethene", "ethyl ethanoate"],

    answer: "ethanoic acid",

    explanation: "Ethanol is a primary alcohol. It is first oxidized to ethanal and, under reflux with excess oxidizing agent, the aldehyde is further oxidized to ethanoic acid."
  },

  {
    id: 44, subject: "Chemistry", topic: "Organic Chemistry", year: 2003, exam: "JAMB",

    question: "The reaction of an alkanoic acid with an alkanol in the presence of a mineral acid catalyst to produce a sweet-smelling compound is called",

    options: ["saponification", "esterification", "hydrolysis", "dehydration"],

    answer: "esterification",

    explanation: "Esterification is the reaction between a carboxylic acid and an alcohol to form an ester and water, usually in the presence of a strong acid catalyst."
  },

  {
    id: 45, subject: "Chemistry", topic: "Applied Chemistry", year: 2003, exam: "JAMB",

    question: "The process of manufacturing soap by the alkaline hydrolysis of natural fats and vegetable oils is called",

    options: ["neutralization", "esterification", "saponification", "polymerization"],

    answer: "saponification",

    explanation: "Saponification is the alkaline hydrolysis of fats or oils using a strong base such as NaOH or KOH. It produces glycerol and salts of fatty acids, which are soaps."
  },

  {
    id: 46, subject: "Chemistry", topic: "Organic Chemistry", year: 2003, exam: "JAMB",

    question: "The functional group that characterizes the organic family of alkanals (aldehydes) is",

    options: ["-OH", "-CHO", "-COOH", "-CO-"],

    answer: "-CHO",

    explanation: "Alkanals contain the aldehyde functional group, represented as -CHO, in which a carbonyl group is bonded to a hydrogen atom."
  },

  {
    id: 47, subject: "Chemistry", topic: "Organic Chemistry", year: 2003, exam: "JAMB",

    question: "Which of the following organic compounds will react rapidly with bromine water via an addition reaction and decolourize the orange-brown solution?",

    options: ["Methane", "Ethane", "Ethene", "Benzene"],

    answer: "Ethene",

    explanation: "Ethene contains a carbon-carbon double bond and readily undergoes addition with bromine. The reaction removes the colour of bromine water."
  },

  {
    id: 48, subject: "Chemistry", topic: "Applied Chemistry", year: 2003, exam: "JAMB",

    question: "Natural rubber is an addition polymer made from the monomer",

    options: [
      "ethene",
      "chloroethene",
      "isoprene / 2-methylbuta-1,3-diene",
      "styrene"
    ],

    answer: "isoprene / 2-methylbuta-1,3-diene",

    explanation: "Natural rubber is mainly cis-1,4-polyisoprene. Its monomer is isoprene, also called 2-methylbuta-1,3-diene."
  },

  {
    id: 49, subject: "Chemistry", topic: "Organic Chemistry", year: 2003, exam: "JAMB",

    question: "The relatively high boiling points and good water solubilities of lower molecular mass alkanols are due mainly to intermolecular",

    options: [
      "ionic lattice interactions",
      "aromatic shielding",
      "hydrogen bonding",
      "weak Van der Waals forces"
    ],

    answer: "hydrogen bonding",

    explanation: "The hydroxyl group in alkanols forms hydrogen bonds between alcohol molecules and with water molecules. These interactions increase boiling points and enhance the water solubility of lower alkanols."
  },

  {
    id: 50, subject: "Chemistry", topic: "Organic Chemistry", year: 2003, exam: "JAMB",

    question: "The biochemical conversion of sugars such as glucose into ethanol and carbon(IV) oxide by yeast is called",

    options: ["distillation", "fermentation", "hydrolysis", "cracking"],

    answer: "fermentation",

    explanation: "Fermentation is an anaerobic biochemical process in which yeast converts sugars such as glucose into ethanol and carbon(IV) oxide: C6H12O6 -> 2C2H5OH + 2CO2."
  }

];

export default chemJamb2003;