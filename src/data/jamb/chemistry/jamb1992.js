// JAMB 1992 Chemistry Past Questions
// Fully audited — questions, answers, calculations, explanations, source/OCR issues, and app-safe formatting.
// Questions 34-40 restored from the original 1992 source transcription.

const chemJamb1992 = [

  {
    id: 1,
    subject: "Chemistry",
    topic: "Separation Techniques",
    year: 1992,
    exam: "JAMB",
    question: "Which of the following substances is not a homogeneous mixture?",
    options: ["Filtered sea water", "Soft drink", "Flood water", "Writing ink"],
    answer: "Flood water",
    explanation: "Filtered sea water, soft drinks, and writing ink are treated as homogeneous mixtures because their components are uniformly distributed. Flood water contains suspended soil, clay, and other particles, so it is heterogeneous."
  },

  {
    id: 2,
    subject: "Chemistry",
    topic: "Chemical Bonding",
    year: 1992,
    exam: "JAMB",
    question: "There is a large temperature interval between the melting point and the boiling point of a metal because",
    options: [
      "metals have very high melting points",
      "metals conduct heat very rapidly",
      "melting does not break the metallic bond but boiling does",
      "the crystal lattice of metals is easily broken"
    ],
    answer: "melting does not break the metallic bond but boiling does",
    explanation: "In the usual examination model, melting disrupts the crystal lattice while metallic attraction remains important in the liquid. Boiling requires much greater energy to separate the particles into the gas phase."
  },

  {
    id: 3,
    subject: "Chemistry",
    topic: "Solutions & Acids",
    year: 1992,
    exam: "JAMB",
    question: "How many moles of H+ ions are there in 1 dm3 of a 0.5 M solution of H2SO4?",
    options: ["2.0 moles", "1.0 mole", "0.5 mole", "0.25 mole"],
    answer: "1.0 mole",
    explanation: "H2SO4 is diprotic. One mole of H2SO4 gives two moles of H+ ions. Therefore, 0.5 mole of H2SO4 gives 2 x 0.5 = 1.0 mole of H+ ions."
  },

  {
    id: 4,
    subject: "Chemistry",
    topic: "Equations & Balancing",
    year: 1992,
    exam: "JAMB",
    question: "wH2SO4 + xAl(OH)3 -> yH2O + zAl2(SO4)3. The respective values of w, x, y and z in the balanced equation above are",
    options: [
      "2, 2, 5 and 1",
      "3, 2, 5 and 2",
      "3, 2, 6 and 1",
      "2, 2, 6 and 2"
    ],
    answer: "3, 2, 6 and 1",
    explanation: "The balanced equation is 3H2SO4 + 2Al(OH)3 -> 6H2O + Al2(SO4)3. Therefore, w = 3, x = 2, y = 6 and z = 1."
  },

  {
    id: 5,
    subject: "Chemistry",
    topic: "Gas Laws",
    year: 1992,
    exam: "JAMB",
    question: "A given mass of gas occupies 2 dm3 at 300 K. At what temperature will its volume be doubled keeping the pressure constant?",
    options: ["400 K", "480 K", "550 K", "600 K"],
    answer: "600 K",
    explanation: "By Charles's law, V1/T1 = V2/T2 at constant pressure. Doubling the volume requires doubling the absolute temperature: T2 = 300 x 2 = 600 K."
  },

  {
    id: 6,
    subject: "Chemistry",
    topic: "Gas Laws",
    year: 1992,
    exam: "JAMB",
    question: "If 100 cm3 of oxygen pass through a porous plug in 50 seconds, the time taken for the same volume of hydrogen to pass through the same porous plug under the same conditions is [O = 16, H = 1]",
    options: ["10.0 s", "12.5 s", "17.7 s", "32.0 s"],
    answer: "12.5 s",
    explanation: "By Graham's law, rate is inversely proportional to the square root of molar mass. Therefore, t(O2) / t(H2) = sqrt(32 / 2) = 4. Hence, t(H2) = 50 / 4 = 12.5 s."
  },

  {
    id: 7,
    subject: "Chemistry",
    topic: "Kinetic Theory",
    year: 1992,
    exam: "JAMB",
    question: "Which of the following is a direct measure of the average kinetic energy of the molecules of a substance?",
    options: ["Volume", "Mass", "Pressure", "Temperature"],
    answer: "Temperature",
    explanation: "Temperature is directly related to the average kinetic energy of the particles of a substance."
  },

  {
    id: 8,
    subject: "Chemistry",
    topic: "Kinetic Theory",
    year: 1992,
    exam: "JAMB",
    question: "An increase in temperature causes an increase in the pressure of a gas in a fixed volume due to an increase in the",
    options: [
      "number of molecules of the gas",
      "density of the gas molecules",
      "number of collisions between the gas molecules",
      "number of collisions between the gas molecules and the walls of the container"
    ],
    answer: "number of collisions between the gas molecules and the walls of the container",
    explanation: "Increasing temperature increases the average kinetic energy and speed of gas molecules. They therefore collide with the container walls more frequently and with greater force, increasing pressure."
  },

  {
    id: 9,
    subject: "Chemistry",
    topic: "Atomic Structure",
    year: 1992,
    exam: "JAMB",
    question: "The nucleus of the hydrogen isotope tritium contains",
    options: [
      "two neutrons with no protons",
      "one neutron and one proton",
      "two neutrons and one electron",
      "two neutrons and one proton"
    ],
    answer: "two neutrons and one proton",
    explanation: "Tritium has atomic number 1 and mass number 3. Its nucleus therefore contains 1 proton and 3 - 1 = 2 neutrons."
  },

  {
    id: 10,
    subject: "Chemistry",
    topic: "Chemical Bonding",
    year: 1992,
    exam: "JAMB",
    question: "How many lone pairs of electrons are there on the central oxygen atom of the H2O molecule?",
    options: ["1", "2", "3", "4"],
    answer: "2",
    explanation: "Oxygen has six valence electrons. Two are used in bonding with hydrogen, leaving four non-bonding electrons, which form two lone pairs."
  },

  {
    id: 11,
    subject: "Chemistry",
    topic: "Nuclear Chemistry",
    year: 1992,
    exam: "JAMB",
    question: "14N + X -> 17O + 1H. In the transmutation reaction above, particle X is a/an",
    options: [
      "neutron",
      "helium atom / alpha particle",
      "lithium atom",
      "deuterium atom"
    ],
    answer: "helium atom / alpha particle",
    explanation: "Mass numbers give 14 + A = 17 + 1, so A = 4. Atomic numbers give 7 + Z = 8 + 1, so Z = 2. Therefore X is a helium nucleus, or alpha particle."
  },

  {
    id: 12,
    subject: "Chemistry",
    topic: "Periodic Table",
    year: 1992,
    exam: "JAMB",
    question: "Four elements P, Q, R and S have 1, 2, 3 and 7 electrons in their outermost shells respectively. The element which is unlikely to be a metal is",
    options: ["P", "Q", "R", "S"],
    answer: "S",
    explanation: "Elements with 1, 2 or 3 valence electrons are commonly metals. An element with 7 valence electrons is a halogen and is normally a non-metal."
  },

  {
    id: 13,
    subject: "Chemistry",
    topic: "Environmental Chemistry",
    year: 1992,
    exam: "JAMB",
    question: "The air pollutants that are most likely to be present in a heavily industrial chemical environment are",
    options: [
      "H2S, SO2 and oxides of nitrogen",
      "NH3, HCl and CO",
      "CO2, NH3 and H2S",
      "Dust, NO and Cl2"
    ],
    answer: "H2S, SO2 and oxides of nitrogen",
    explanation: "Industrial combustion and chemical processing can release sulfur compounds such as H2S and SO2 as well as nitrogen oxides."
  },

  {
    id: 14,
    subject: "Chemistry",
    topic: "Environmental Chemistry",
    year: 1992,
    exam: "JAMB",
    question: "Which of the following gases dissolves in water droplets to produce acid rain during precipitation?",
    options: ["Oxygen", "Carbon(II) oxide", "Nitrogen", "Sulphur(IV) oxide"],
    answer: "Sulphur(IV) oxide",
    explanation: "SO2 dissolves in atmospheric moisture and can be oxidized further to sulfuric acid, contributing to acid rain."
  },

  {
    id: 15,
    subject: "Chemistry",
    topic: "Water Chemistry",
    year: 1992,
    exam: "JAMB",
    question: "Water for municipal town supply is treated with chlorine gas principally to make it free from",
    options: ["bad odour", "bacteria and microorganisms", "temporary hardness", "permanent hardness"],
    answer: "bacteria and microorganisms",
    explanation: "Chlorination is used primarily to disinfect water by destroying harmful bacteria and other microorganisms."
  },

  {
    id: 16,
    subject: "Chemistry",
    topic: "Solutions & Solubility",
    year: 1992,
    exam: "JAMB",
    question: "On which of the following variables is the solubility of a gaseous substance in a liquid solvent dependent? (I) Nature of solvent, (II) Nature of solute, (III) Temperature, (IV) Pressure",
    options: [
      "I, II, III and IV",
      "I and II only",
      "III only",
      "I, III and IV only"
    ],
    answer: "I, II, III and IV",
    explanation: "Gas solubility depends on the nature of the gas and solvent, temperature, and pressure. In general, increasing pressure increases gas solubility while increasing temperature usually decreases it."
  },

  {
    id: 17,
    subject: "Chemistry",
    topic: "Solutions & Solubility",
    year: 1992,
    exam: "JAMB",
    question: "An emulsion paint consists of",
    options: [
      "gas or liquid particles dispersed in a liquid",
      "liquid particles dispersed in another liquid",
      "solid particles dispersed in a liquid",
      "solid particles dispersed in a solid"
    ],
    answer: "liquid particles dispersed in another liquid",
    explanation: "An emulsion is a dispersion of droplets of one liquid throughout another immiscible liquid."
  },

  {
    id: 18,
    subject: "Chemistry",
    topic: "Solutions & Solubility",
    year: 1992,
    exam: "JAMB",
    question: "A sample of orange juice is found to have a pH of 3.80. What is the concentration of the hydroxide ion [OH-] in the juice?",
    options: [
      "1.58 x 10^(-4)",
      "6.31 x 10^(-11)",
      "6.31 x 10^(-4)",
      "1.58 x 10^(-11)"
    ],
    answer: "6.31 x 10^(-11)",
    explanation: "pOH = 14.00 - 3.80 = 10.20. Therefore, [OH-] = 10^(-10.20) = approximately 6.31 x 10^(-11) mol/dm3."
  },

  {
    id: 19,
    subject: "Chemistry",
    topic: "Solutions & Conductance",
    year: 1992,
    exam: "JAMB",
    question: "Arrange the solutions HCl, CH3COOH, and C6H5CH3 (toluene) in order of increasing electrical conductivity.",
    options: [
      "HCl, CH3COOH, C6H5CH3",
      "C6H5CH3, HCl, CH3COOH",
      "C6H5CH3, CH3COOH, HCl",
      "CH3COOH, C6H5CH3, HCl"
    ],
    answer: "C6H5CH3, CH3COOH, HCl",
    explanation: "Toluene is a non-electrolyte and has the lowest conductivity. Ethanoic acid is a weak electrolyte, while HCl is a strong electrolyte and has the highest conductivity, assuming comparable concentrations."
  },

  {
    id: 20,
    subject: "Chemistry",
    topic: "Acids, Bases & Salts",
    year: 1992,
    exam: "JAMB",
    question: "Which of these chemical compounds is an acid salt?",
    options: [
      "K2SO4.Al2(SO4)3.24H2O",
      "CuCO3.Cu(OH)2",
      "NaHS",
      "CaOCl2"
    ],
    answer: "NaHS",
    explanation: "NaHS is formed from the partial neutralization of the diprotic acid H2S and still contains a replaceable hydrogen atom."
  },

  {
    id: 21,
    subject: "Chemistry",
    topic: "Stoichiometry",
    year: 1992,
    exam: "JAMB",
    question: "How many grams of H2SO4 are necessary for the preparation of 0.175 dm3 of a 6.00 M H2SO4 solution? [S = 32, O = 16, H = 1]",
    options: ["206.0 g", "103.0 g", "98.1 g", "51.5 g"],
    answer: "103.0 g",
    explanation: "Moles = M x V = 6.00 x 0.175 = 1.05 mol. Molar mass of H2SO4 = 98 g/mol. Mass = 1.05 x 98 = 102.9 g, approximately 103.0 g."
  },

  {
    id: 22,
    subject: "Chemistry",
    topic: "Electrochemistry",
    year: 1992,
    exam: "JAMB",
    question: "Copper(II) tetraoxosulphate(VI) solution is electrolyzed using inert carbon electrodes. Which of the following are produced at the anode and cathode respectively?",
    options: [
      "Copper and oxygen",
      "Oxygen and copper",
      "Hydrogen and copper",
      "Copper and hydrogen"
    ],
    answer: "Oxygen and copper",
    explanation: "At the cathode, Cu2+ ions are reduced to copper metal. At the anode, water or hydroxide ions are oxidized to produce oxygen."
  },

  {
    id: 23,
    subject: "Chemistry",
    topic: "Electrochemistry",
    year: 1992,
    exam: "JAMB",
    question: "Calculate the mass, in kilograms, of magnesium produced by the electrolysis of molten magnesium(II) chloride in an industrial cell operating for 24 hours at a constant current of 500 amperes. [1 Faraday = 96500 C/mol, Mg = 24]",
    options: ["2.7 kg", "5.4 kg", "10.8 kg", "21.7 kg"],
    answer: "5.4 kg",
    explanation: "Q = It = 500 x 24 x 3600 = 43,200,000 C. Mg2+ requires 2 electrons per mole, so moles of Mg = 43,200,000 / (2 x 96,500) = 223.8 mol. Mass = 223.8 x 24 = about 5371 g = 5.4 kg."
  },

  {
    id: 24,
    subject: "Chemistry",
    topic: "Oxidation Numbers",
    year: 1992,
    exam: "JAMB",
    question: "MnO2 + 2Cl- + 4H+ -> Mn2+ + Cl2 + 2H2O. The net changes in oxidation numbers for manganese and chlorine ions during this reaction are respectively",
    options: ["2 and 1", "-2 and +1", "-2 and -1", "2 and 4"],
    answer: "-2 and +1",
    explanation: "Manganese changes from +4 in MnO2 to +2 in Mn2+, a change of -2. Chlorine changes from -1 in Cl- to 0 in Cl2, a change of +1."
  },

  {
    id: 25,
    subject: "Chemistry",
    topic: "Redox Reactions",
    year: 1992,
    exam: "JAMB",
    question: "2S2O3^2- + I2 -> S4O6^2- + 2I-. In the redox volumetric reaction equation above, the oxidizing agent is",
    options: ["S2O3^2-", "I2", "S4O6^2-", "I-"],
    answer: "I2",
    explanation: "I2 gains electrons to form I-, so iodine is reduced. The substance that is reduced acts as the oxidizing agent."
  },

  {
    id: 26,
    subject: "Chemistry",
    topic: "Chemical Energetics",
    year: 1992,
    exam: "JAMB",
    question: "In which of the following physical processes is the structural entropy change (+Delta S) positive?",
    options: [
      "H2O(l) -> H2O(g)",
      "Cu2+(aq) + Fe(s) -> Fe2+(aq) + Cu(s)",
      "N2(g) + 3H2(g) -> 2NH3(g)",
      "2HCl(g) -> H2(g) + Cl2(g)"
    ],
    answer: "H2O(l) -> H2O(g)",
    explanation: "Changing liquid water to gaseous water greatly increases molecular freedom and disorder, giving a positive entropy change."
  },

  {
    id: 27,
    subject: "Chemistry",
    topic: "Chemical Equilibrium",
    year: 1992,
    exam: "JAMB",
    question: "How is the equilibrium constant for a forward reaction related to the equilibrium constant of its corresponding reverse reaction?",
    options: [
      "The addition of the two constants equals one",
      "The product of the two constants equals one",
      "The two equilibrium constants are completely identical",
      "The product of the two constants is always greater than one"
    ],
    answer: "The product of the two constants equals one",
    explanation: "The equilibrium constant of the reverse reaction is the reciprocal of that of the forward reaction. Therefore, K_forward x K_reverse = 1."
  },

  {
    id: 28,
    subject: "Chemistry",
    topic: "Chemical Equilibrium",
    year: 1992,
    exam: "JAMB",
    question: "Which of the following gaseous chemical equilibria shows little or no net reaction shift when the volume of the closed system is decreased?",
    options: [
      "H2(g) + I2(g) <=> 2HI(g)",
      "2NO2(g) <=> N2O4(g)",
      "PCl5(g) <=> PCl3(g) + Cl2(g)",
      "ZnO(s) + CO(g) <=> Zn(s) + CO2(g)"
    ],
    answer: "H2(g) + I2(g) <=> 2HI(g)",
    explanation: "There are two moles of gaseous reactants and two moles of gaseous products, so a volume change does not shift this equilibrium."
  },

  {
    id: 29,
    subject: "Chemistry",
    topic: "Chemical Equilibrium",
    year: 1992,
    exam: "JAMB",
    question: "For a general equilibrium reaction of the form xP + yQ <=> mR + nS, the correct algebraic expression for the equilibrium constant (Kc) is",
    options: [
      "Kc[P]^x[Q]^y",
      "([P]^x[Q]^y) / ([R]^m[S]^n)",
      "([R]^m[S]^n) / ([P]^x[Q]^y)",
      "(m[R] x n[S]) / (x[P] x y[Q])"
    ],
    answer: "([R]^m[S]^n) / ([P]^x[Q]^y)",
    explanation: "Kc is the product of the equilibrium concentrations of the products, each raised to its stoichiometric coefficient, divided by the corresponding expression for the reactants."
  },

  {
    id: 30,
    subject: "Chemistry",
    topic: "Gases & Non-Metals",
    year: 1992,
    exam: "JAMB",
    question: "Which of these statements is TRUE about carbon(IV) oxide?",
    options: [
      "It supports combustion reactions",
      "It is strongly acidic when dissolved in water",
      "It is highly soluble in liquid water under standard conditions",
      "It supports the burning of magnesium ribbon to produce magnesium oxide"
    ],
    answer: "It supports the burning of magnesium ribbon to produce magnesium oxide",
    explanation: "CO2 does not normally support combustion, but highly reactive burning magnesium can continue to burn in CO2, producing MgO and carbon."
  },

  {
    id: 31,
    subject: "Chemistry",
    topic: "Gases & Non-Metals",
    year: 1992,
    exam: "JAMB",
    question: "In the laboratory preparation of nitrogen gas, the reaction mixture Z can be a solution of",
    options: [
      "sodium dioxonitrate(III) and ammonium chloride",
      "lead(II) trioxonitrate(V)",
      "sodium trioxonitrate(V) and ammonium chloride",
      "concentrated tetraoxosulphate(VI) acid and sodium trioxonitrate(V)"
    ],
    answer: "sodium dioxonitrate(III) and ammonium chloride",
    explanation: "Heating sodium nitrite (NaNO2) with ammonium chloride produces nitrogen gas: NH4Cl + NaNO2 -> N2 + NaCl + 2H2O."
  },

  {
    id: 32,
    subject: "Chemistry",
    topic: "Gases & Non-Metals",
    year: 1992,
    exam: "JAMB",
    question: "Which combination of gases is commonly used for high-temperature metal welding?",
    options: [
      "Oxygen and ethyne",
      "Hydrogen and ethyne",
      "Hydrogen and oxygen",
      "Ethyne, hydrogen and oxygen"
    ],
    answer: "Oxygen and ethyne",
    explanation: "The oxy-ethyne flame produces a very high temperature and is widely used for welding and cutting metals."
  },

  {
    id: 33,
    subject: "Chemistry",
    topic: "Gases & Non-Metals",
    year: 1992,
    exam: "JAMB",
    question: "Which of the following gaseous oxides of nitrogen is highly unstable in the presence of open atmospheric air?",
    options: ["NO2", "N2O4", "NO", "N2O5"],
    answer: "NO",
    explanation: "Nitric oxide, NO, reacts readily with oxygen in air to form nitrogen(IV) oxide, NO2."
  },

  {
    id: 34,
    subject: "Chemistry",
    topic: "Gases & Non-Metals",
    year: 1992,
    exam: "JAMB",
    question: "The gas formed when ammonium trioxonitrate(V) is heated with sodium hydroxide is",
    options: ["hydrogen", "nitrogen(IV) oxide", "oxygen", "ammonia"],
    answer: "ammonia",
    explanation: "Ammonium salts react with strong alkalis on heating to release ammonia gas. NH4NO3 + NaOH produces NH3 among the products."
  },

  {
    id: 35,
    subject: "Chemistry",
    topic: "Applied Chemistry",
    year: 1992,
    exam: "JAMB",
    question: "Safety matches contain sulphur and",
    options: [
      "potassium trioxochlorate(V)",
      "potassium trioxonitrate(V)",
      "charcoal",
      "phosphorus sulphide"
    ],
    answer: "potassium trioxochlorate(V)",
    explanation: "Potassium chlorate (KClO3) is an oxidizing agent commonly used in the match head together with combustible substances such as sulfur."
  },

  {
    id: 36,
    subject: "Chemistry",
    topic: "Qualitative Analysis",
    year: 1992,
    exam: "JAMB",
    question: "Addition of an aqueous solution of barium chloride to the aqueous solution of a salt gives a white precipitate. The salt is likely to be a",
    options: ["nitrate", "carbonate", "chloride", "sulphide"],
    answer: "carbonate",
    explanation: "Carbonate ions react with Ba2+ ions to form insoluble white barium carbonate. Barium nitrate and barium chloride are soluble, while barium sulfide is not the intended precipitate in this question."
  },

  {
    id: 37,
    subject: "Chemistry",
    topic: "Metals & Their Compounds",
    year: 1992,
    exam: "JAMB",
    question: "Sodium hydroxide solution can be conveniently stored in a container made of",
    options: ["lead", "zinc", "aluminium", "copper"],
    answer: "copper",
    explanation: "Aqueous sodium hydroxide attacks metals such as aluminium and zinc. Copper is sufficiently resistant under ordinary storage conditions and is therefore the intended choice."
  },

  {
    id: 38,
    subject: "Chemistry",
    topic: "Industrial Chemistry",
    year: 1992,
    exam: "JAMB",
    question: "Which of the following is NOT used as a raw material in the Solvay process?",
    options: [
      "Ammonia",
      "Sodium chloride",
      "Calcium trioxocarbonate(IV)",
      "Sodium trioxocarbonate(VI)"
    ],
    answer: "Sodium trioxocarbonate(VI)",
    explanation: "The Solvay process uses brine, ammonia and limestone as important raw materials. Sodium carbonate is the product, not a raw material."
  },

  {
    id: 39,
    subject: "Chemistry",
    topic: "Metals & Alloys",
    year: 1992,
    exam: "JAMB",
    question: "Duralumin consists of aluminium, copper,",
    options: [
      "zinc and gold",
      "lead and manganese",
      "nickel and silver",
      "manganese and magnesium"
    ],
    answer: "manganese and magnesium",
    explanation: "Duralumin is an aluminium-based alloy containing mainly aluminium and copper, with magnesium and manganese among its important alloying elements."
  },

  {
    id: 40,
    subject: "Chemistry",
    topic: "Chemical Energetics",
    year: 1992,
    exam: "JAMB",
    question: "CaO(s) + H2O(l) -> Ca(OH)2(s), Delta H = -65 kJ. The process represented by the equation above is known as",
    options: ["dissolution", "slaking", "liming", "mortaring"],
    answer: "slaking",
    explanation: "The reaction of quicklime (CaO) with water to form calcium hydroxide is called slaking of lime."
  },

  {
    id: 41,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1992,
    exam: "JAMB",
    question: "The carbon atoms inside a molecule of ethane are structurally",
    options: ["sp3 hybridized", "sp hybridized", "sp2 hybridized", "not hybridized"],
    answer: "sp3 hybridized",
    explanation: "Each carbon atom in ethane forms four single sigma bonds. Its carbon orbitals are therefore sp3 hybridized."
  },

  {
    id: 42,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1992,
    exam: "JAMB",
    // CHECK SOURCE: The original question depends on a structure image that is not present in the supplied text.
    // The structure below is based on the transcription supplied with this file.
    question: "The correct systematic IUPAC name for the hydrocarbon structure CH3-CH(CH3)-CH=CH-CH(CH3)-CH2-CH3 is",
    options: [
      "2-ethyl-5-methylhex-2-ene",
      "2,5-dimethylhex-2-ene",
      "2,5-dimethylhept-3-ene",
      "3,6-dimethylhept-3-ene"
    ],
    answer: "2,5-dimethylhept-3-ene",
    explanation: "The longest chain containing the double bond has seven carbon atoms. Numbering gives the double bond position 3 and methyl substituents at positions 2 and 5. The correct name is 2,5-dimethylhept-3-ene."
  },

  {
    id: 43,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1992,
    exam: "JAMB",
    question: "Which of the following organic structures is classified as a secondary alkanol?",
    options: [
      "CH3-CH2-CH(OH)-CH3",
      "CH3-CH2-CH2-CH2-OH",
      "CH3-CH2-O-CH2-CH3",
      "(CH3)3C-OH"
    ],
    answer: "CH3-CH2-CH(OH)-CH3",
    explanation: "In butan-2-ol, the carbon carrying the OH group is bonded to two other carbon atoms. Therefore, it is a secondary alcohol."
  },

  {
    id: 44,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1992,
    exam: "JAMB",
    question: "Which of the following organic compounds reacts with sodium metal as well as with ammoniacal silver and copper salt solutions?",
    options: [
      "CH3-C#C-CH3",
      "CH3-CH2-CH2-CH2-CH3",
      "CH3-C#CH",
      "CH3-CH=CH-CH3"
    ],
    answer: "CH3-C#CH",
    explanation: "Propyne is a terminal alkyne and contains an acidic hydrogen attached to the triple-bonded carbon. It can react with sodium and form acetylides with ammoniacal silver and copper salts."
  },

  {
    id: 45,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1992,
    exam: "JAMB",
    question: "Which of the following pairs of chemical compounds are structural isomers of each other?",
    options: [
      "Ethanol and dimethyl ether",
      "Benzene and methylbenzene",
      "Ethanol and propanone",
      "Trichloromethane and tetrachloromethane"
    ],
    answer: "Ethanol and dimethyl ether",
    explanation: "Ethanol and dimethyl ether both have molecular formula C2H6O but have different structural arrangements and functional groups. They are structural isomers."
  },

  {
    id: 46,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1992,
    exam: "JAMB",
    question: "Which organic functional group releases carbon(IV) oxide gas with effervescence upon treatment with a saturated solution of NaHCO3?",
    options: ["hydroxyl group", "alkoxyl group", "carbonyl group", "carboxyl group"],
    answer: "carboxyl group",
    explanation: "Carboxylic acids react with sodium hydrogencarbonate to produce a salt, water and carbon(IV) oxide gas. The gas causes visible effervescence."
  },

  {
    id: 47,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1992,
    exam: "JAMB",
    question: "The characteristic chemical reaction type shared by carbonyl compounds (alkanals and alkanones) is",
    options: ["Substitution", "Elimination", "Addition", "Saponification"],
    answer: "Addition",
    explanation: "The polar C=O bond in aldehydes and ketones readily undergoes nucleophilic addition reactions."
  },

  {
    id: 48,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1992,
    exam: "JAMB",
    question: "An organic compound contains 40.0% carbon, 6.67% hydrogen, and the rest oxygen by mass. What is its empirical formula? [C = 12, H = 1, O = 16]",
    options: ["C2H4O2", "C2H3O2", "CH2O", "CH3O"],
    answer: "CH2O",
    explanation: "Oxygen = 100 - 40.0 - 6.67 = 53.33%. Moles: C = 40/12 = 3.33, H = 6.67/1 = 6.67, O = 53.33/16 = 3.33. Dividing by 3.33 gives 1:2:1, so the empirical formula is CH2O."
  },

  {
    id: 49,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1992,
    exam: "JAMB",
    question: "Alkanals can be chemically differentiated from alkanones in the laboratory by reaction with",
    options: [
      "2,4-dinitrophenylhydrazine",
      "hydrogen cyanide",
      "sodium hydrogen sulphite",
      "Tollen's reagent"
    ],
    answer: "Tollen's reagent",
    explanation: "Alkanals reduce Tollen's reagent to metallic silver, producing the characteristic silver mirror. Alkanones generally do not give this reaction."
  },

  {
    id: 50,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1992,
    exam: "JAMB",
    question: "An example of a carbohydrate polysaccharide molecule is",
    options: ["dextrose", "mannose", "glucose", "starch"],
    answer: "starch",
    explanation: "Dextrose and glucose are forms of glucose, while mannose is also a monosaccharide. Starch is a polysaccharide made from many glucose units."
  }

];

export default chemJamb1992;