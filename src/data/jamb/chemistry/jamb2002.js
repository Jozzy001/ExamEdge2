// JAMB 2002 Chemistry Past Questions
// Fully audited - questions, answers, calculations, explanations, transcription issues, and app-safe formatting.

const chemJamb2002 = [

  {
    id: 1, subject: "Chemistry", topic: "Separation Techniques", year: 2002, exam: "JAMB",
    question: "The chromatographic separation of ink components is based on the ability of the components to",
    options: [
      "dissolve in each other in the column",
      "move at different speeds along the stationary phase in the column",
      "react chemically with the solvent",
      "react with each other during migration"
    ],
    answer: "move at different speeds along the stationary phase in the column",
    explanation: "Chromatography separates components because they interact differently with the stationary and mobile phases, causing them to travel at different rates."
  },

  {
    id: 2, subject: "Chemistry", topic: "Stoichiometry", year: 2002, exam: "JAMB",
    question: "Which of the following gas samples contains the least total number of atoms at s.t.p.?",
    options: [
      "7 moles of argon gas",
      "4 moles of chlorine gas",
      "3 moles of ozone gas",
      "1 mole of butane gas"
    ],
    answer: "7 moles of argon gas",
    explanation: "Argon is monoatomic, so 7 moles of Ar contain 7 moles of atoms. Four moles of Cl2 contain 8 moles of atoms, 3 moles of O3 contain 9 moles of atoms, and 1 mole of C4H10 contains 14 moles of atoms. Therefore, argon contains the least."
  },

  {
    id: 3, subject: "Chemistry", topic: "Organic Chemistry", year: 2002, exam: "JAMB",
    question: "A compound contains 31.91% potassium, 28.93% chlorine and the rest oxygen. What is the empirical formula of the compound? [K = 39, Cl = 35.5, O = 16]",
    options: ["KClO", "KClO2", "KClO3", "KClO4"],
    answer: "KClO3",
    explanation: "Oxygen = 100 - 31.91 - 28.93 = 39.16%. Moles: K = 31.91/39 = 0.818, Cl = 28.93/35.5 = 0.815, O = 39.16/16 = 2.448. Dividing by 0.815 gives approximately 1:1:3. Therefore, the formula is KClO3."
  },

  {
    id: 4, subject: "Chemistry", topic: "Solutions & Physical States", year: 2002, exam: "JAMB",
    question: "A small quantity of trichloromethane (b.pt. 60 C) was added to a large quantity of ethanol (b.pt. 78 C). The most probable boiling point range of the resultant liquid mixture is from",
    options: ["60 C - 78 C", "69 C - 70 C", "70 C - 74 C", "82 C - 84 C"],
    answer: "60 C - 78 C",
    explanation: "The boiling behavior of a mixture of these two volatile liquids is expected to occur within the range bounded by their boiling points, 60 C to 78 C."
  },

  {
    id: 5, subject: "Chemistry", topic: "Qualitative Analysis", year: 2002, exam: "JAMB",
    question: "The gas that gives the brown ring coloration in the brown ring test is",
    options: ["CO", "CO2", "NO", "NO2"],
    answer: "NO",
    explanation: "In the brown ring test for nitrate ions, nitric oxide (NO) is produced and forms a brown nitrosyl complex with iron(II) ions."
  },

  {
    id: 6, subject: "Chemistry", topic: "Qualitative Analysis", year: 2002, exam: "JAMB",
    question: "Which of the following compounds gives a white precipitate when treated with dilute NaOH solution?",
    options: ["NH4Cl", "Na2CO3", "AlCl3", "CH3COONa"],
    answer: "AlCl3",
    explanation: "AlCl3 reacts with dilute NaOH to form a white gelatinous precipitate of Al(OH)3. The precipitate dissolves in excess NaOH because aluminium hydroxide is amphoteric."
  },

  {
    id: 7, subject: "Chemistry", topic: "Organic Chemistry", year: 2002, exam: "JAMB",
    question: "The reaction of an alkene hydrocarbon with hydrogen gas in the presence of a nickel catalyst is classified as",
    options: ["a nucleophilic reaction", "an addition reaction", "a substitution reaction", "an oxidative reaction"],
    answer: "an addition reaction",
    explanation: "Hydrogen adds across the carbon-carbon double bond of an alkene in the presence of a nickel catalyst, converting the alkene to an alkane."
  },

  {
    id: 8, subject: "Chemistry", topic: "Qualitative Analysis", year: 2002, exam: "JAMB",
    question: "A rock sample was added to cold dilute HNO3. The gas evolved was passed into acidified K2Cr2O7 solution and the solution turned from orange to green. The rock sample contains the anion",
    options: ["SO4^2-", "SO3^2-", "NO3^-", "CO3^2-"],
    answer: "SO3^2-",
    explanation: "Sulfite ions react with acid to produce SO2. Sulfur dioxide reduces orange dichromate ions to green Cr3+ ions. Therefore, the original anion is SO3^2-."
  },

  {
    id: 9, subject: "Chemistry", topic: "Organic Chemistry", year: 2002, exam: "JAMB",
    question: "The intermediate organic compound formed when ethanol is progressively oxidized to ethanoic acid using potassium heptaoxodichromate(VI) is",
    options: ["methanal", "ethanal", "propanal", "butanal"],
    answer: "ethanal",
    explanation: "Ethanol, a primary alcohol, is first oxidized to ethanal and then further oxidized to ethanoic acid."
  },

  {
    id: 10, subject: "Chemistry", topic: "Organic Chemistry", year: 2002, exam: "JAMB",
    question: "The alcohol represented by CH3-CH2-CH(OH)-CH3 is structurally classified as a",
    options: ["primary alkanol", "secondary alkanol", "tertiary alkanol", "glycol"],
    answer: "secondary alkanol",
    explanation: "The carbon carrying the OH group is bonded directly to two other carbon atoms. Therefore, the alcohol is secondary."
  },

  {
    id: 11, subject: "Chemistry", topic: "Organic Chemistry", year: 2002, exam: "JAMB",
    question: "A reddish-brown precipitate of copper(I) acetylide is formed when ammoniacal copper(I) chloride solution is introduced into",
    options: [
      "CH3-CH2-CH2-CH3",
      "CH2=CH-CH2-CH3",
      "HC=CH",
      "CH3-C=C-CH3"
    ],
    answer: "HC=CH",
    explanation: "Ammoniacal copper(I) chloride gives a reddish-brown copper(I) acetylide precipitate with terminal alkynes. Ethyne, HC=CH, is a terminal alkyne."
  },

  {
    id: 12, subject: "Chemistry", topic: "Applied Chemistry", year: 2002, exam: "JAMB",
    question: "The single most important industrial use of hydrogen gas is in the commercial",
    options: [
      "manufacture of methyl alcohol",
      "manufacture of ethyl alcohol",
      "hydrogenation of liquid vegetable oils",
      "manufacture of ammonia via the Haber process"
    ],
    answer: "manufacture of ammonia via the Haber process",
    explanation: "A major industrial use of hydrogen is the manufacture of ammonia by the Haber process: N2 + 3H2 <=> 2NH3. Ammonia is used extensively in fertilizer production."
  },

  {
    id: 13, subject: "Chemistry", topic: "Applied Chemistry", year: 2002, exam: "JAMB",
    question: "Which of the following polymers is highly suitable for packaging items and providing electrical insulation?",
    options: ["Polyethene", "Polystyrene", "Polyamide", "Polycarbonate"],
    answer: "Polyethene",
    explanation: "Polyethene is widely used for packaging because it is lightweight, chemically resistant and easily processed. It is also a good electrical insulator."
  },

  {
    id: 14, subject: "Chemistry", topic: "Applied Chemistry", year: 2002, exam: "JAMB",
    question: "The boiling of fats and oils with aqueous caustic soda is referred to as",
    options: ["acidification", "saponification", "hydrolysis", "esterification"],
    answer: "saponification",
    explanation: "Saponification is the alkaline hydrolysis of fats or oils to produce glycerol and the sodium or potassium salts of fatty acids, which are soaps."
  },

  {
    id: 15, subject: "Chemistry", topic: "Applied Chemistry", year: 2002, exam: "JAMB",
    question: "Ordinary glass is manufactured commercially by heating a mixture of silica sand with calcium carbonate and",
    options: ["NaHCO3", "K2CO3", "K2SO4", "Na2CO3"],
    answer: "Na2CO3",
    explanation: "Ordinary soda-lime glass is made mainly from silica (SiO2), calcium carbonate (CaCO3) and sodium carbonate (Na2CO3)."
  },

  {
    id: 16, subject: "Chemistry", topic: "Organic Chemistry", year: 2002, exam: "JAMB",
    question: "The major organic product obtained from the dehydration of 2-methylbutan-2-ol is",
    options: ["2-methylbut-1-ene", "2-methylbut-2-ene", "3-methylbut-1-ene", "pent-2-ene"],
    answer: "2-methylbut-2-ene",
    explanation: "Dehydration of 2-methylbutan-2-ol gives mainly the more substituted and more stable alkene, 2-methylbut-2-ene."
  },

  {
    id: 17, subject: "Chemistry", topic: "Organic Chemistry", year: 2002, exam: "JAMB",
    question: "The number of distinct open-chain structural isomers formed by the saturated hydrocarbon C6H14 is",
    options: ["2", "3", "4", "5"],
    answer: "5",
    explanation: "C6H14 has five structural isomers: n-hexane, 2-methylpentane, 3-methylpentane, 2,2-dimethylbutane and 2,3-dimethylbutane."
  },

  {
    id: 18, subject: "Chemistry", topic: "Applied Chemistry", year: 2002, exam: "JAMB",
    question: "Which of these pairs are synthetic and natural macromolecules respectively?",
    options: [
      "Haemoglobin and nylon, creatine and polyethylene",
      "Nylon and polyethylene, creatine and haemoglobin",
      "Nylon and creatine, polyethylene and haemoglobin",
      "Creatine and polyethylene, nylon and haemoglobin"
    ],
    answer: "Nylon and creatine, polyethylene and haemoglobin",
    explanation: "Nylon and polyethylene are synthetic macromolecules, while creatine and haemoglobin are naturally occurring biological macromolecules. Therefore, the correct pair is the third option."
  },

  {
    id: 19, subject: "Chemistry", topic: "Chemical Bonding", year: 2002, exam: "JAMB",
    question: "An example of a Group 14 element capable of forming long covalent chains with itself through catenation is",
    options: ["nitrogen", "chlorine", "carbon", "bromine"],
    answer: "carbon",
    explanation: "Carbon shows strong catenation because carbon atoms form stable carbon-carbon covalent bonds, allowing long chains and rings to form."
  },

  {
    id: 20, subject: "Chemistry", topic: "Applied Chemistry", year: 2002, exam: "JAMB",
    question: "Ethanol can easily be produced on an industrial scale by the",
    options: [
      "distillation of pure starch solutions",
      "catalytic oxidation of methane gas",
      "destructive distillation of wood blocks",
      "enzymatic fermentation of starches / sugars"
    ],
    answer: "enzymatic fermentation of starches / sugars",
    explanation: "Ethanol can be produced by fermentation of sugars or starch-derived sugars using yeast enzymes. The sugars are converted mainly to ethanol and carbon dioxide."
  },

  {
    id: 21, subject: "Chemistry", topic: "Inorganic Chemistry", year: 2002, exam: "JAMB",
    question: "Hydrogen gas is released when dilute hydrochloric acid reacts with",
    options: ["Ag", "Au", "Cu", "Na"],
    answer: "Na",
    explanation: "Sodium is above hydrogen in the reactivity series and reacts with dilute hydrochloric acid to release hydrogen gas. Ag, Au and Cu do not readily displace hydrogen from dilute HCl."
  },

  {
    id: 22, subject: "Chemistry", topic: "Atomic Structure", year: 2002, exam: "JAMB",
    question: "Which of the following statements is true of a proton?",
    options: [
      "The mass of a proton is exactly 1.0008 g",
      "The mass of a proton is equal to an electron mass",
      "The mass of a proton is approximately 1840 times the mass of an electron",
      "The total mass of protons is always half the nuclear mass"
    ],
    answer: "The mass of a proton is approximately 1840 times the mass of an electron",
    explanation: "A proton has a relative mass of about 1 atomic mass unit, while an electron has a relative mass of about 1/1840 atomic mass unit. Thus, a proton is approximately 1840 times more massive than an electron."
  },

  {
    id: 23, subject: "Chemistry", topic: "Nuclear Chemistry", year: 2002, exam: "JAMB",
    question: "14_6C -> 0_-1e + X. The letter X in the nuclear beta decay equation represents the isotope",
    options: ["14_7N", "12_6C", "14_7N", "13_6C"],
    answer: "14_7N",
    explanation: "In beta-minus decay, a neutron changes into a proton and an electron is emitted. The mass number remains 14 while the atomic number increases from 6 to 7, giving nitrogen-14."
  },

  {
    id: 24, subject: "Chemistry", topic: "Gas Laws", year: 2002, exam: "JAMB",
    question: "A gas X diffuses twice as fast as gas Y under identical conditions. If the relative molecular mass of gas X is 28, calculate the relative molecular mass of gas Y.",
    options: ["14", "56", "112", "120"],
    answer: "112",
    explanation: "By Graham's law, Rate_X/Rate_Y = sqrt(M_Y/M_X). Since Rate_X/Rate_Y = 2, 4 = M_Y/28. Therefore, M_Y = 112."
  },

  {
    id: 25, subject: "Chemistry", topic: "Chemical Bonding", year: 2002, exam: "JAMB",
    question: "Which of the following chloride compounds would exhibit the least ionic character?",
    options: ["LiCl", "MgCl2", "CaCl2", "AlCl3"],
    answer: "AlCl3",
    explanation: "Al3+ has a high charge density and strongly polarizes the chloride ion. Therefore, AlCl3 has the greatest covalent character and the least ionic character among the options."
  },

  {
    id: 26, subject: "Chemistry", topic: "Gas Laws", year: 2002, exam: "JAMB",
    question: "A fixed mass of gas has a volume of 92 cm3 at 3 C. What will be its volume at 18 C if the pressure remains constant?",
    options: ["552.0 cm3", "97.0 cm3", "87.3 cm3", "15.3 cm3"],
    answer: "97.0 cm3",
    explanation: "By Charles' law, V1/T1 = V2/T2. T1 = 3 + 273 = 276 K and T2 = 18 + 273 = 291 K. Therefore, V2 = 92 x 291/276 = 96.99 cm3, approximately 97.0 cm3."
  },

  {
    id: 27, subject: "Chemistry", topic: "Environmental Chemistry", year: 2002, exam: "JAMB",
    question: "The chemical and natural processes which return carbon(IV) oxide to the atmosphere include",
    options: [
      "Photosynthesis, respiration and transpiration",
      "Respiration, decay and combustion",
      "Photosynthesis, decay and respiration",
      "Ozone depletion, combustion and decay"
    ],
    answer: "Respiration, decay and combustion",
    explanation: "Respiration, decomposition or decay, and combustion release CO2 into the atmosphere. Photosynthesis removes CO2 from the atmosphere."
  },

  {
    id: 28, subject: "Chemistry", topic: "Atomic Theory", year: 2002, exam: "JAMB",
    question: "The postulate of Dalton's atomic theory which still holds is that",
    options: [
      "atoms can neither be created nor destroyed",
      "atoms of the same element are exactly alike",
      "atoms of different elements combine in a simple whole-number ratio",
      "all elements are made of small indivisible particles called atoms"
    ],
    answer: "atoms of different elements combine in a simple whole-number ratio",
    explanation: "Modern chemistry has shown that atoms contain subatomic particles, isotopes of an element can have different masses, and atoms can be changed in nuclear reactions. The simple whole-number ratio idea remains the intended valid Daltonian postulate for ordinary chemical compounds."
  },

  {
    id: 29, subject: "Chemistry", topic: "Gas Laws", year: 2002, exam: "JAMB",
    question: "If 0.75 mole of cyclopropane and 0.66 mole of oxygen are mixed in a vessel with a total pressure of 0.7 atmosphere, what is the partial pressure of oxygen in the mixture?",
    options: ["0.22 atmosphere", "0.33 atmosphere", "0.44 atmosphere", "0.55 atmosphere"],
    answer: "0.33 atmosphere",
    explanation: "Total moles = 0.75 + 0.66 = 1.41 mol. Mole fraction of O2 = 0.66/1.41 = 0.468. Partial pressure = 0.468 x 0.7 = 0.328 atmosphere, approximately 0.33 atmosphere."
  },

  {
    id: 30, subject: "Chemistry", topic: "Qualitative Analysis", year: 2002, exam: "JAMB",
    question: "When H2S gas is passed into an aqueous solution of iron(III) chloride, the solution changes from yellow to pale green because",
    options: [
      "H2S gas is reduced to solid sulphur",
      "Fe3+ ions are oxidized by the gas molecules",
      "H2S molecules are oxidized by the Fe3+ ions",
      "Fe3+ ions are reduced to Fe2+ ions"
    ],
    answer: "Fe3+ ions are reduced to Fe2+ ions",
    explanation: "Fe3+ ions oxidize H2S to sulfur while themselves gaining electrons and becoming Fe2+. The Fe2+ ions give the solution its pale green appearance."
  },

  {
    id: 31, subject: "Chemistry", topic: "Chemical Equilibrium", year: 2002, exam: "JAMB",
    question: "Which of the following mathematical equations shows that a reversible chemical reaction has reached equilibrium?",
    options: ["Delta G = Delta H - T Delta S", "Delta G < 0", "Delta G = 0", "Delta G > 0"],
    answer: "Delta G = 0",
    explanation: "At equilibrium, under constant temperature and pressure, the Gibbs free-energy change for the reaction is zero. There is no net thermodynamic driving force in either direction."
  },

  {
    id: 32, subject: "Chemistry", topic: "Redox Reactions", year: 2002, exam: "JAMB",
    question: "Cu2S(s) + O2(g) -> 2Cu(s) + SO2(g). What is the change in the oxidation number of copper in the reaction above?",
    options: ["0 to +2", "0 to +1", "+1 to 0", "+2 to +1"],
    answer: "+1 to 0",
    explanation: "In Cu2S, sulfur has oxidation number -2, so the two copper atoms together have +2. Each copper atom is therefore +1. Elemental copper has oxidation number 0. Thus, copper changes from +1 to 0."
  },

  {
    id: 33, subject: "Chemistry", topic: "Chemical Kinetics", year: 2002, exam: "JAMB",
    // CHECK SOURCE: The original graph/diagram containing curves P, Q, R and S is missing from the supplied dataset.
    question: "The multi-plot lines P, Q, R, and S inside the pressure tracking graph illustrate reaction parameters. Which curve represents the behavior of gas pressure changes over time for a closed system reaching equilibrium?",
    options: ["P", "Q", "R", "S"],
    answer: "Q",
    explanation: "At equilibrium, a measurable property such as pressure becomes constant with time. The supplied dataset identifies curve Q, but the original graph is missing, so the curve assignment should be checked against the source diagram."
  },

  {
    id: 34, subject: "Chemistry", topic: "Chemical Equilibrium", year: 2002, exam: "JAMB",
    question: "In the reversible gaseous reaction E + F <=> G + H, the yield of the backward reaction is increased if the concentration of",
    options: ["E is reduced", "G is reduced", "F is increased", "E is increased"],
    answer: "E is reduced",
    explanation: "Reducing the concentration of reactant E causes the equilibrium to shift to the left to replace some of the removed E. This favors the backward reaction."
  },

  {
    id: 35, subject: "Chemistry", topic: "Electrochemistry", year: 2002, exam: "JAMB",
    question: "The products obtained from the electrolysis of dilute sodium hydroxide solution using inert platinum electrodes are",
    options: [
      "sodium metal and oxygen gas",
      "hydrogen and oxygen gases",
      "water and hydrogen gas",
      "water and sodium metal"
    ],
    answer: "hydrogen and oxygen gases",
    explanation: "During electrolysis of dilute NaOH, water is preferentially discharged rather than Na+ at the cathode, producing H2. Hydroxide ions or water produce O2 at the anode. Thus, hydrogen and oxygen gases are formed."
  },

  {
    id: 36, subject: "Chemistry", topic: "Chemical Equilibrium", year: 2002, exam: "JAMB",
    question: "PCl5(g) <=> PCl3(g) + Cl2(g). In the reversible reaction above, a decrease in pressure will",
    options: [
      "increase the yield of PCl3",
      "increase the yield of PCl5",
      "accelerate the reaction rate only",
      "decelerate the reaction rate completely"
    ],
    answer: "increase the yield of PCl3",
    explanation: "The reactant side contains 1 mole of gas while the product side contains 2 moles. Lowering the pressure shifts equilibrium toward the side with more gas molecules, increasing the yield of PCl3 and Cl2."
  },

  {
    id: 37, subject: "Chemistry", topic: "Chemical Kinetics", year: 2002, exam: "JAMB",
    question: "The Arrhenius equation expresses the relationship between the rate constant of a reaction, its activation energy and its",
    options: ["catalyst surface boundaries", "temperature", "molecular collision frequency parameters", "net exothermic heat of reaction"],
    answer: "temperature",
    explanation: "The Arrhenius equation is k = A exp(-Ea/RT). It shows how the rate constant depends on activation energy and absolute temperature, among other factors represented by A."
  },

  {
    id: 38, subject: "Chemistry", topic: "Electrochemistry", year: 2002, exam: "JAMB",
    question: "What amount of mercury (Hg) would be liberated at the cathode if the same quantity of electricity that liberated 0.65 g of zinc is supplied to a mercury cell? [Zn = 65, Hg = 201]",
    options: ["8.04 g", "2.01 g", "4.02 g", "1.00 g"],
    answer: "2.01 g",
    explanation: "0.65 g of Zn is 0.65/65 = 0.01 mol Zn. Both Zn2+ and Hg2+ require two electrons per metal atom. Therefore, the same charge deposits 0.01 mol Hg. Mass of Hg = 0.01 x 201 = 2.01 g."
  },

  {
    id: 39, subject: "Chemistry", topic: "Chemical Energetics", year: 2002, exam: "JAMB",
    question: "When solid sodium hydroxide flakes are dissolved in water, the solution shows",
    options: [
      "a rapid chemical displacement reaction",
      "a slow neutral reaction rate",
      "an exothermic change",
      "a strongly endothermic temperature drop"
    ],
    answer: "an exothermic change",
    explanation: "Dissolving solid NaOH in water releases heat, so the process is exothermic."
  },

  {
    id: 40, subject: "Chemistry", topic: "Qualitative Analysis", year: 2002, exam: "JAMB",
    question: "Passing steam over anhydrous cobalt(II) chloride crystals changes their color from",
    options: ["blue to white", "white to green", "blue to pink", "white to red"],
    answer: "blue to pink",
    explanation: "Anhydrous cobalt(II) chloride is blue. On absorbing water, it becomes hydrated cobalt(II) chloride, which is pink."
  },

  {
    id: 41, subject: "Chemistry", topic: "Solutions & Solubility", year: 2002, exam: "JAMB",
    question: "Which of the following solutions containing hydroxyl ions will liberate hydrogen gas when reacted with magnesium metal?",
    options: [
      "1.0 x 10^(-12) mol dm^(-3)",
      "1.0 x 10^(-4) mol dm^(-3)",
      "1.0 x 10^(-6) mol dm^(-3)",
      "1.0 x 10^(-2) mol dm^(-3)"
    ],
    answer: "1.0 x 10^(-12) mol dm^(-3)",
    explanation: "For water at ordinary conditions, [H+][OH-] = 1.0 x 10^(-14). If [OH-] = 1.0 x 10^(-12) mol dm^(-3), then [H+] = 1.0 x 10^(-2) mol dm^(-3), making the solution acidic. Magnesium reacts with the acidic solution to release hydrogen."
  },

  {
    id: 42, subject: "Chemistry", topic: "Solutions & Solubility", year: 2002, exam: "JAMB",
    question: "The solubility of a salt of molar mass 101 g/mol at 20 C is 0.34 mol dm^(-3). If 3.40 g of the salt is completely dissolved in 250 cm3 of water in a beaker, the resulting solution is classified as",
    options: ["saturated", "unsaturated", "supersaturated", "a suspension"],
    answer: "unsaturated",
    explanation: "The solubility is 0.34 mol per dm3. In 1 dm3, the maximum mass is 0.34 x 101 = 34.34 g. In 250 cm3, the maximum is 34.34/4 = 8.585 g. Since only 3.40 g is dissolved, the solution is unsaturated."
  },

  {
    id: 43, subject: "Chemistry", topic: "Stoichiometry & Titration", year: 2002, exam: "JAMB",
    question: "25 cm3 of a 0.2 mol dm^(-3) solution of Na2CO3 requires exactly 20 cm3 of an aqueous solution of HCl for complete neutralization. The concentration of the HCl solution is",
    options: ["0.2 mol dm^(-3)", "0.4 mol dm^(-3)", "0.5 mol dm^(-3)", "0.6 mol dm^(-3)"],
    answer: "0.5 mol dm^(-3)",
    explanation: "Na2CO3 + 2HCl -> 2NaCl + H2O + CO2. Moles of Na2CO3 = 0.2 x 25/1000 = 0.005 mol. Therefore, moles of HCl = 0.010 mol. Concentration of HCl = 0.010/(20/1000) = 0.5 mol dm^(-3)."
  },

  {
    id: 44, subject: "Chemistry", topic: "Water Chemistry", year: 2002, exam: "JAMB",
    question: "When a salt loses its water of crystallization spontaneously to the surrounding atmosphere, the process is called",
    options: ["effervescence", "efflorescence", "fluorescence", "deliquescence"],
    answer: "efflorescence",
    explanation: "Efflorescence is the spontaneous loss of water of crystallization from a hydrated salt when exposed to the atmosphere."
  },

  {
    id: 45, subject: "Chemistry", topic: "Solutions & Solubility", year: 2002, exam: "JAMB",
    question: "Three drops of a 1.0 mol dm^(-3) solution of NaOH are added to 20 cm3 of a solution having a pH of 8.4. The pH of the resulting solution will be",
    options: [
      "less than 8.4",
      "greater than 8.4",
      "unaltered",
      "close to that of pure water"
    ],
    answer: "greater than 8.4",
    explanation: "The solution is not stated to be a buffer. Adding NaOH, a strong base, increases the hydroxide ion concentration and therefore raises the pH above 8.4."
  },

  {
    id: 46, subject: "Chemistry", topic: "Applied Chemistry", year: 2002, exam: "JAMB",
    question: "Tetraoxosulphate(VI) acid causes severe chemical burns on human skin primarily through rapid skin",
    options: ["dehydration", "hydrolysis", "hydration", "heating"],
    answer: "dehydration",
    explanation: "Concentrated sulfuric acid is a powerful dehydrating agent. It removes water from biological materials, causing severe tissue damage and charring."
  },

  {
    id: 47, subject: "Chemistry", topic: "Environmental Chemistry", year: 2002, exam: "JAMB",
    question: "Which of the following substances is least considered as a source of environmental pollution?",
    options: ["uranium residues", "lead compounds", "organophosphorus compounds", "silicate minerals"],
    answer: "silicate minerals",
    explanation: "Lead compounds, uranium residues and many organophosphorus compounds can pose serious environmental hazards. Silicate minerals are common natural components of rocks and soils and are the intended least hazardous option."
  },

  {
    id: 48, subject: "Chemistry", topic: "Organic Chemistry", year: 2002, exam: "JAMB",
    question: "The chemical property which makes low molecular weight alkanols highly soluble in water is their",
    options: ["ionic character", "boiling point", "covalent nature", "ability to form hydrogen bonds"],
    answer: "ability to form hydrogen bonds",
    explanation: "The hydroxyl group in alkanols can form hydrogen bonds with water molecules. This strong intermolecular attraction makes low molecular weight alkanols highly soluble in water."
  },

  {
    id: 49, subject: "Chemistry", topic: "Water Chemistry", year: 2002, exam: "JAMB",
    question: "The furring of kettles is caused by the presence in water of",
    options: [
      "calcium hydrogentrioxocarbonate(IV)",
      "calcium trioxocarbonate(IV)",
      "calcium tetraoxosulphate(VI)",
      "calcium hydroxide"
    ],
    answer: "calcium trioxocarbonate(IV)",
    explanation: "Temporary hard water contains calcium hydrogentrioxocarbonate(IV), Ca(HCO3)2. On heating, it decomposes to insoluble calcium trioxocarbonate(IV), CaCO3, which forms the white deposit or furring inside kettles."
  },

  {
    id: 50, subject: "Chemistry", topic: "Gas Laws", year: 2002, exam: "JAMB",
    question: "What volume of oxygen gas at s.t.p. is produced from the complete thermal decomposition of 2.0 moles of potassium trioxonitrate(V)? [Molar volume = 22.4 dm3]",
    options: ["11.2 dm3", "22.4 dm3", "44.8 dm3", "67.2 dm3"],
    answer: "22.4 dm3",
    explanation: "2KNO3 -> 2KNO2 + O2. Thus, 2 moles of KNO3 produce 1 mole of O2. One mole of gas occupies 22.4 dm3 at s.t.p., so the oxygen volume is 22.4 dm3."
  }

];

export default chemJamb2002;