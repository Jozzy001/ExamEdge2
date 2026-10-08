// JAMB 2004 Chemistry Past Questions
// Audited - questions, answers, calculations, explanations, transcription issues, and app-safe formatting.
// NOTE: Questions 19, 38, 39, and 40 were absent from the supplied dataset.
// NOTE: Question 50 was removed because its required structural diagram was not supplied.

const chemJamb2004 = [
  {
    id: 1,
    subject: "Chemistry",
    topic: "Separation Techniques",
    year: 2004,
    exam: "JAMB",
    question: "A mixture of iodine and sodium chloride can be separated by",
    options: ["decantation", "filtration", "sublimation", "evaporation"],
    answer: "sublimation",
    explanation: "Iodine sublimes when heated, changing directly from solid to vapour. The iodine vapour can be condensed on a cool surface, leaving sodium chloride behind."
  },
  {
    id: 2,
    subject: "Chemistry",
    topic: "Gas Laws",
    year: 2004,
    exam: "JAMB",
    question: "A certain volume of hydrogen gas diffuses through a porous plug in 10 seconds. How long will it take the same volume of oxygen to diffuse under identical conditions? [H = 1, O = 16]",
    options: ["20 seconds", "40 seconds", "80 seconds", "160 seconds"],
    answer: "40 seconds",
    explanation: "By Graham's law, t2/t1 = sqrt(M2/M1). For H2, M = 2, and for O2, M = 32. Therefore, t2/10 = sqrt(32/2) = sqrt(16) = 4, so t2 = 40 seconds."
  },
  {
    id: 3,
    subject: "Chemistry",
    topic: "Stoichiometry",
    year: 2004,
    exam: "JAMB",
    question: "Calculate the empirical formula of an organic compound containing 40.0% carbon, 6.7% hydrogen, and 53.3% oxygen by mass. [C = 12, H = 1, O = 16]",
    options: ["CHO", "CH2O", "C2HO", "CHO2"],
    answer: "CH2O",
    explanation: "Assuming 100 g of the compound: C = 40/12 = 3.33 mol, H = 6.7/1 = 6.7 mol, and O = 53.3/16 = 3.33 mol. Dividing by 3.33 gives a ratio of approximately 1:2:1. The empirical formula is CH2O."
  },
  {
    id: 4,
    subject: "Chemistry",
    topic: "Stoichiometry",
    year: 2004,
    exam: "JAMB",
    question: "What volume of carbon(IV) oxide gas at s.t.p. is produced when 5.0 g of calcium trioxocarbonate(IV) completely decomposes by heat? [Ca = 40, C = 12, O = 16, Molar volume at s.t.p. = 22.4 dm3]",
    options: ["1.12 dm3", "2.24 dm3", "4.48 dm3", "11.20 dm3"],
    answer: "1.12 dm3",
    explanation: "CaCO3 -> CaO + CO2. The molar mass of CaCO3 is 100 g/mol. Therefore, 5.0 g is 0.05 mol and produces 0.05 mol of CO2. At s.t.p., volume = 0.05 x 22.4 = 1.12 dm3."
  },
  {
    id: 5,
    subject: "Chemistry",
    topic: "Gas Laws",
    year: 2004,
    exam: "JAMB",
    question: "A gas occupies a volume of 2.0 dm3 at a temperature of 27 C and a pressure of 2.0 atm. What will be its volume if the temperature is lowered to -73 C and the pressure is increased to 4.0 atm?",
    options: ["0.67 dm3", "1.0 dm3", "1.5 dm3", "2.0 dm3"],
    answer: "0.67 dm3",
    explanation: "Using the combined gas law, P1V1/T1 = P2V2/T2. T1 = 300 K and T2 = 200 K. Therefore, (2 x 2)/300 = (4 x V2)/200, giving V2 = 0.67 dm3."
  },
  {
    id: 6,
    subject: "Chemistry",
    topic: "Gas Laws",
    year: 2004,
    exam: "JAMB",
    question: "A mixture of 0.50 mole of hydrogen and 0.50 mole of nitrogen gas exerts a total pressure of 1.2 atm. What is the partial pressure of hydrogen in the mixture?",
    options: ["0.3 atm", "0.6 atm", "0.9 atm", "1.2 atm"],
    answer: "0.6 atm",
    explanation: "The total number of moles is 1.00 mol. The mole fraction of hydrogen is 0.50/1.00 = 0.5. By Dalton's law, partial pressure = mole fraction x total pressure = 0.5 x 1.2 = 0.6 atm."
  },
  {
    id: 7,
    subject: "Chemistry",
    topic: "Kinetic Theory",
    year: 2004,
    exam: "JAMB",
    question: "The random zigzag motion of smoke particles suspended in air when viewed under a microscope is called",
    options: ["vibrational motion", "Brownian motion", "osmotic movement", "convection current"],
    answer: "Brownian motion",
    explanation: "Brownian motion is the continuous random movement of tiny suspended particles caused by collisions with rapidly moving molecules of the surrounding medium."
  },
  {
    id: 8,
    subject: "Chemistry",
    topic: "Atomic Structure",
    year: 2004,
    exam: "JAMB",
    question: "An element Y has an atomic number of 17 and a mass number of 35. The number of protons, neutrons, and electrons in its stable unipositive ion Y+ is respectively",
    options: ["17, 18, 17", "17, 18, 16", "17, 17, 16", "18, 17, 16"],
    answer: "17, 18, 16",
    explanation: "The atomic number gives 17 protons. Neutrons = 35 - 17 = 18. A Y+ ion has lost one electron, so it has 16 electrons."
  },
  {
    id: 9,
    subject: "Chemistry",
    topic: "Periodic Table",
    year: 2004,
    exam: "JAMB",
    question: "The electronic configuration of an atom is 1s2 2s2 2p6 3s2 3p4. Which group and period does this element belong to in the periodic table?",
    options: ["Group 14, Period 3", "Group 16, Period 3", "Group 14, Period 4", "Group 16, Period 4"],
    answer: "Group 16, Period 3",
    explanation: "The highest occupied principal energy level is n = 3, so the element is in Period 3. It has six valence electrons, giving Group 16. The element is sulphur."
  },
  {
    id: 10,
    subject: "Chemistry",
    topic: "Chemical Bonding",
    year: 2004,
    exam: "JAMB",
    question: "The geometric molecular shape of a carbon dioxide (CO2) molecule is described as",
    options: ["linear", "bent", "tetrahedral", "trigonal planar"],
    answer: "linear",
    explanation: "The carbon atom in CO2 has two regions of electron density and no lone pair on the central atom. The two C=O bonds therefore arrange themselves linearly with a bond angle of 180 degrees."
  },
  {
    id: 11,
    subject: "Chemistry",
    topic: "Chemical Bonding",
    year: 2004,
    exam: "JAMB",
    question: "The crystalline form of sodium chloride is held together in a rigid giant lattice by",
    options: ["covalent bonds", "metallic bonds", "electrovalent bonds", "van der Waals forces"],
    answer: "electrovalent bonds",
    explanation: "Sodium chloride is an ionic compound. Its giant lattice is held together by strong electrostatic attractions between Na+ and Cl- ions."
  },
  {
    id: 12,
    subject: "Chemistry",
    topic: "Water Chemistry",
    year: 2004,
    exam: "JAMB",
    question: "Permanent hardness of water can be safely removed by adding",
    options: ["calcium oxide", "alum blocks", "sodium trioxocarbonate(IV)", "dilute hydrochloric acid"],
    answer: "sodium trioxocarbonate(IV)",
    explanation: "Sodium carbonate, commonly called washing soda, removes permanent hardness by precipitating calcium and magnesium ions as insoluble carbonates."
  },
  {
    id: 13,
    subject: "Chemistry",
    topic: "Environmental Chemistry",
    year: 2004,
    exam: "JAMB",
    question: "Which of the following gases is highly responsible for depletion of the protective ozone layer?",
    options: ["Carbon dioxide", "Methane", "Sulphur dioxide", "Chlorofluorocarbons (CFCs)"],
    answer: "Chlorofluorocarbons (CFCs)",
    explanation: "CFCs can release chlorine radicals in the stratosphere when broken down by ultraviolet radiation. The chlorine radicals catalytically destroy ozone."
  },
  {
    id: 14,
    subject: "Chemistry",
    topic: "Solutions & Solubility",
    year: 2004,
    exam: "JAMB",
    question: "A colloidal system consisting of tiny liquid droplets dispersed uniformly inside a gaseous medium is classified as a/an",
    options: ["emulsion", "liquid aerosol", "sol", "gel"],
    answer: "liquid aerosol",
    explanation: "A liquid aerosol is a colloid in which fine liquid droplets are dispersed in a gas. Fog and mist are examples."
  },
  {
    id: 15,
    subject: "Chemistry",
    topic: "Solutions & Solubility",
    year: 2004,
    exam: "JAMB",
    question: "Calculate the pH of a 0.005 M aqueous solution of tetraoxosulphate(VI) acid, assuming complete ionization.",
    options: ["1.0", "2.0", "3.0", "4.0"],
    answer: "2.0",
    explanation: "Under the stated assumption of complete ionization, 0.005 M H2SO4 gives 0.010 M H+. Therefore pH = -log10(0.010) = 2.0."
  },
  {
    id: 16,
    subject: "Chemistry",
    topic: "Acids, Bases & Salts",
    year: 2004,
    exam: "JAMB",
    question: "Which of the following salts undergoes anionic hydrolysis in water to produce a basic solution with a pH greater than 7?",
    options: ["NH4Cl", "NaCl", "K2SO4", "Na2CO3"],
    answer: "Na2CO3",
    explanation: "Carbonate ions react with water and produce hydroxide ions. Therefore, aqueous sodium carbonate is alkaline."
  },
  {
    id: 17,
    subject: "Chemistry",
    topic: "Stoichiometry & Titration",
    year: 2004,
    exam: "JAMB",
    question: "What volume of 0.1 M NaOH solution is required to completely neutralize 20 cm3 of a 0.05 M solution of a dibasic acid?",
    options: ["10 cm3", "20 cm3", "30 cm3", "40 cm3"],
    answer: "20 cm3",
    explanation: "For H2A + 2NaOH -> Na2A + 2H2O, 1 mole of the dibasic acid reacts with 2 moles of NaOH. Moles of acid = 0.05 x 0.020 = 0.001 mol. Moles of NaOH required = 0.002 mol. Volume = 0.002/0.1 = 0.020 dm3 = 20 cm3."
  },

  {
    id: 18,
    subject: "Chemistry",
    topic: "Electrochemistry",
    year: 2004,
    exam: "JAMB",
    question: "During the industrial refining of an impure copper sample by electrolysis, the crude copper sample must be made the",
    options: ["anode", "cathode", "electrolyte", "spectator ion"],
    answer: "anode",
    explanation: "In electrolytic refining, impure copper is used as the anode. Copper atoms from the anode dissolve as Cu2+ ions, while pure copper is deposited at the cathode."
  },

  {
    id: 20,
    subject: "Chemistry",
    topic: "Electrochemistry",
    year: 2004,
    exam: "JAMB",
    question: "How many Faradays of electricity are required to deposit 1.2 moles of copper metal at the cathode from an aqueous copper(II) salt solution?",
    options: ["0.6 F", "1.2 F", "2.4 F", "3.6 F"],
    answer: "2.4 F",
    explanation: "Cu2+ + 2e- -> Cu. One mole of copper requires two moles of electrons, equivalent to 2 Faradays. Therefore, 1.2 moles require 1.2 x 2 = 2.4 Faradays."
  },

  {
    id: 21,
    subject: "Chemistry",
    topic: "Redox Reactions",
    year: 2004,
    exam: "JAMB",
    question: "Zn(s) + 2H+(aq) -> Zn2+(aq) + H2(g). In the ionic reaction equation above, the hydrogen ions (H+) behave as",
    options: ["a catalyst", "an oxidizing agent", "a reducing agent", "a buffer system"],
    answer: "an oxidizing agent",
    explanation: "H+ gains electrons to form H2. A species that gains electrons and causes another species to be oxidized acts as an oxidizing agent."
  },

  {
    id: 22,
    subject: "Chemistry",
    topic: "Oxidation Numbers",
    year: 2004,
    exam: "JAMB",
    question: "What is the oxidation number of manganese in potassium manganate(VI), K2MnO4?",
    options: ["+2", "+4", "+6", "+7"],
    answer: "+6",
    explanation: "Let manganese have oxidation number x. 2(+1) + x + 4(-2) = 0. Therefore x = +6."
  },

  {
    id: 23,
    subject: "Chemistry",
    topic: "Chemical Energetics",
    year: 2004,
    exam: "JAMB",
    question: "A chemical reaction that releases heat energy into its surroundings is thermodynamically characterized by a",
    options: [
      "positive enthalpy change (+dH)",
      "negative enthalpy change (-dH)",
      "positive free energy change (+dG)",
      "zero entropy change (dS = 0)"
    ],
    answer: "negative enthalpy change (-dH)",
    explanation: "An exothermic reaction releases heat to the surroundings, so its enthalpy change is negative."
  },

  {
    id: 24,
    subject: "Chemistry",
    topic: "Chemical Kinetics",
    year: 2004,
    exam: "JAMB",
    question: "A catalyst speeds up the rate of a chemical reaction by providing an alternative reaction pathway that",
    options: [
      "increases molecular velocity",
      "lowers the activation energy barrier",
      "increases total enthalpy change",
      "increases the total number of molecular collisions"
    ],
    answer: "lowers the activation energy barrier",
    explanation: "A catalyst provides an alternative reaction pathway with a lower activation energy, allowing more reactant particles to react successfully."
  },

  {
    id: 25,
    subject: "Chemistry",
    topic: "Chemical Equilibrium",
    year: 2004,
    exam: "JAMB",
    question: "According to Le Chatelier's principle, if an equilibrium system is subjected to an increase in temperature, the system will shift to favor the",
    options: ["exothermic reaction path", "endothermic reaction path", "side with more gas moles", "side with fewer gas moles"],
    answer: "endothermic reaction path",
    explanation: "Increasing temperature adds heat to the system. The equilibrium shifts in the direction that absorbs heat, which is the endothermic direction."
  },

  {
    id: 26,
    subject: "Chemistry",
    topic: "Gases & Non-Metals",
    year: 2004,
    exam: "JAMB",
    question: "Which of the following gases can be safely collected in the laboratory by the downward delivery method because it is less dense than air?",
    options: ["Chlorine", "Sulphur dioxide", "Carbon dioxide", "Ammonia"],
    answer: "Ammonia",
    explanation: "Ammonia has a relative molecular mass of 17, while air has an average relative molecular mass of about 29. Therefore, ammonia is less dense than air and can be collected by downward delivery."
  },

  {
    id: 27,
    subject: "Chemistry",
    topic: "Gases & Non-Metals",
    year: 2004,
    exam: "JAMB",
    question: "Carbon(II) oxide is a lethal poisonous gas because it exhibits a powerful chemical affinity to link with",
    options: [
      "lung tissues causing them to dissolve",
      "blood haemoglobin, blocking oxygen transport",
      "atmospheric moisture to cause acid rain",
      "calcium ions in bones"
    ],
    answer: "blood haemoglobin, blocking oxygen transport",
    explanation: "Carbon monoxide binds strongly to haemoglobin to form carboxyhaemoglobin, reducing the blood's ability to transport oxygen."
  },

  {
    id: 28,
    subject: "Chemistry",
    topic: "Inorganic Chemistry",
    year: 2004,
    exam: "JAMB",
    question: "The gas released when dilute hydrochloric acid reacts with calcium carbonate solid is",
    options: ["hydrogen gas", "chlorine gas", "carbon(IV) oxide", "carbon(II) oxide"],
    answer: "carbon(IV) oxide",
    explanation: "CaCO3 + 2HCl -> CaCl2 + H2O + CO2. The gas released is carbon(IV) oxide."
  },

  {
    id: 29,
    subject: "Chemistry",
    topic: "Inorganic Chemistry",
    year: 2004,
    exam: "JAMB",
    question: "The oxide that acts as the direct acid anhydride corresponding to tetraoxosulphate(VI) acid is",
    options: ["sulphur(IV) oxide", "sulphur(VI) oxide", "hydrogen sulphide", "peroxodisulphate oxide"],
    answer: "sulphur(VI) oxide",
    explanation: "Sulphur(VI) oxide, SO3, reacts with water to form H2SO4: SO3 + H2O -> H2SO4."
  },

  // CHECK SOURCE: As written, both SO2 and H2S can reduce acidified dichromate(VI)
  // from orange to green. The supplied question therefore does not uniquely identify SO2.
  {
    id: 30,
    subject: "Chemistry",
    topic: "Qualitative Analysis",
    year: 2004,
    exam: "JAMB",
    question: "An unknown gas turns a filter paper previously soaked in acidified potassium heptaoxodichromate(VI) solution from orange to green. The gas is identified as",
    options: ["oxygen", "carbon(IV) oxide", "sulphur(IV) oxide", "hydrogen sulphide"],
    answer: "sulphur(IV) oxide",
    explanation: "SO2 is a reducing agent and reduces dichromate(VI) ions to Cr3+, changing the colour from orange to green. However, H2S can also reduce acidified dichromate, so the supplied wording is not uniquely diagnostic."
  },

  {
    id: 31,
    subject: "Chemistry",
    topic: "Inorganic Chemistry",
    year: 2004,
    exam: "JAMB",
    question: "Aluminium oxide is classified as an amphoteric oxide because it can dissolve in and react with both",
    options: [
      "pure water and alcohol solvents",
      "dilute mineral acids and strong alkalis",
      "liquid water and atmospheric rare gases",
      "organic solvents and liquid ammonia"
    ],
    answer: "dilute mineral acids and strong alkalis",
    explanation: "Al2O3 reacts with acids as a basic oxide and with strong alkalis as an acidic oxide. It is therefore amphoteric."
  },

  {
    id: 32,
    subject: "Chemistry",
    topic: "Applied Chemistry",
    year: 2004,
    exam: "JAMB",
    question: "The primary mineral ore from which iron metal is extracted commercially on a large industrial scale inside a blast furnace is",
    options: ["bauxite", "haematite", "cassiterite", "galena"],
    answer: "haematite",
    explanation: "Haematite, Fe2O3, is an important iron ore used in the extraction of iron in a blast furnace."
  },

  {
    id: 33,
    subject: "Chemistry",
    topic: "Applied Chemistry",
    year: 2004,
    exam: "JAMB",
    question: "The alloy brass consists of a solid solution combination of copper and",
    options: ["tin", "zinc", "nickel", "lead"],
    answer: "zinc",
    explanation: "Brass is an alloy of copper and zinc. Bronze, by comparison, is mainly copper and tin."
  },

  {
    id: 34,
    subject: "Chemistry",
    topic: "Inorganic Chemistry",
    year: 2004,
    exam: "JAMB",
    question: "The chemical compound responsible for the white milky appearance formed when carbon(IV) oxide is passed into lime water is",
    options: [
      "calcium oxide",
      "calcium hydroxide",
      "calcium trioxocarbonate(IV)",
      "calcium hydrogentrioxocarbonate(IV)"
    ],
    answer: "calcium trioxocarbonate(IV)",
    explanation: "CO2 reacts with calcium hydroxide in lime water to form insoluble calcium carbonate, CaCO3, which appears as a white precipitate."
  },

  {
    id: 35,
    subject: "Chemistry",
    topic: "Periodic Table",
    year: 2004,
    exam: "JAMB",
    question: "Transition metal ions frequently form coloured compounds and exhibit variable oxidation states because they contain",
    options: [
      "completely filled p-subshells",
      "partially filled d-orbitals",
      "mobile valence electrons in s-orbitals",
      "empty valence f-orbitals"
    ],
    answer: "partially filled d-orbitals",
    explanation: "Partially filled d-orbitals are associated with many characteristic properties of transition metals, including variable oxidation states and the formation of coloured ions."
  },

  {
    id: 36,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 2004,
    exam: "JAMB",
    question: "The carbon atoms involved in a double bond configuration inside an alkene molecule such as ethene are structurally",
    options: ["sp3 hybridized", "sp2 hybridized", "sp hybridized", "not hybridized"],
    answer: "sp2 hybridized",
    explanation: "Each carbon atom in an alkene double bond is sp2 hybridized. The remaining unhybridized p orbital forms the pi bond."
  },

  {
    id: 37,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 2004,
    exam: "JAMB",
    question: "The general formula representing the homologous series of alkanes is written as",
    options: ["CnH2n", "CnH2n-2", "CnH2n+1", "CnH2n+2"],
    answer: "CnH2n+2",
    explanation: "Open-chain saturated hydrocarbons, called alkanes, have the general formula CnH2n+2."
  },

  {
    id: 41,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 2004,
    exam: "JAMB",
    question: "Chemical compounds that share the same molecular formula but possess different structural arrangements are described as",
    options: ["allotropes", "isotopes", "isomers", "homologues"],
    answer: "isomers",
    explanation: "Isomers have the same molecular formula but different structural arrangements or structures."
  },

  {
    id: 42,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 2004,
    exam: "JAMB",
    question: "The selective chemical test used to identify terminal unsaturation (C#C-H triple bonds) involves a reaction with",
    options: [
      "bromine water",
      "acidified KMnO4 solution",
      "ammoniacal copper(I) chloride solution",
      "Fehling's solution"
    ],
    answer: "ammoniacal copper(I) chloride solution",
    explanation: "Terminal alkynes react with ammoniacal copper(I) chloride to form copper acetylide. This provides a test for terminal alkynes."
  },

  {
    id: 43,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 2004,
    exam: "JAMB",
    question: "What organic product is formed when ethanol is completely oxidized under reflux using an excess of acidified potassium heptaoxodichromate(VI)?",
    options: ["ethanal", "ethanoic acid", "ethene", "ethyl ethanoate"],
    answer: "ethanoic acid",
    explanation: "A primary alcohol such as ethanol is first oxidized to ethanal and, under reflux with excess oxidizing agent, is further oxidized to ethanoic acid."
  },

  {
    id: 44,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 2004,
    exam: "JAMB",
    question: "The chemical reaction of an alkanoic acid with an alkanol in the presence of a mineral acid catalyst to produce a sweet-smelling compound is called",
    options: ["saponification", "esterification", "hydrolysis", "dehydration"],
    answer: "esterification",
    explanation: "Esterification is the reaction between an alkanoic acid and an alkanol to form an ester and water, usually in the presence of a strong acid catalyst."
  },

  {
    id: 45,
    subject: "Chemistry",
    topic: "Applied Chemistry",
    year: 2004,
    exam: "JAMB",
    question: "The process of manufacturing soap by the alkaline hydrolysis of natural fats and vegetable oils is called",
    options: ["neutralization", "esterification", "saponification", "polymerization"],
    answer: "saponification",
    explanation: "Saponification is the alkaline hydrolysis of fats or oils to produce glycerol and salts of fatty acids, which are soaps."
  },

  {
    id: 46,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 2004,
    exam: "JAMB",
    question: "The functional group that characterizes the organic family of alkanals (aldehydes) is",
    options: ["-OH", "-CHO", "-COOH", "-CO-"],
    answer: "-CHO",
    explanation: "Alkanals contain the terminal aldehyde functional group -CHO."
  },

  {
    id: 47,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 2004,
    exam: "JAMB",
    question: "Which of the following organic compounds will react rapidly with bromine water via an addition reaction to decolourize the orange-brown solution?",
    options: ["Methane", "Ethane", "Ethene", "Benzene"],
    answer: "Ethene",
    explanation: "Ethene contains a carbon-carbon double bond and rapidly reacts with bromine by addition across the double bond, causing the bromine colour to disappear."
  },

  {
    id: 48,
    subject: "Chemistry",
    topic: "Applied Chemistry",
    year: 2004,
    exam: "JAMB",
    question: "Natural rubber is an addition polymer made up of long chains of repeating monomer units of",
    options: ["ethene", "chloroethene", "isoprene / 2-methylbuta-1,3-diene", "styrene"],
    answer: "isoprene / 2-methylbuta-1,3-diene",
    explanation: "Natural rubber is mainly cis-polyisoprene, formed from repeating units of isoprene, also called 2-methylbuta-1,3-diene."
  },

  {
    id: 49,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 2004,
    exam: "JAMB",
    question: "The relatively high boiling points and good water solubilities exhibited by lower molecular mass alkanols are due mainly to the presence of intermolecular",
    options: [
      "ionic lattice interactions",
      "aromatic shielding",
      "hydrogen bonding",
      "weak Van der Waals forces"
    ],
    answer: "hydrogen bonding",
    explanation: "The polar -OH groups of alkanols form hydrogen bonds with one another and with water molecules. These interactions increase boiling points and improve water solubility."
  }
];

export default chemJamb2004;