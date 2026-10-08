// JAMB 1998 Chemistry Past Questions
// Fully audited - questions, answers, calculations, explanations, OCR/transcription issues, and app-safe formatting.

const chemJamb1998 = [

  {
    id: 1,
    subject: "Chemistry",
    topic: "Separation Techniques",
    year: 1998,
    exam: "JAMB",
    question: "The addition of water to calcium oxide leads to",
    options: [
      "a physical change",
      "a chemical change",
      "the formation of a mixture",
      "an endothermic change"
    ],
    answer: "a chemical change",
    explanation: "Adding water to calcium oxide (quicklime) causes a chemical reaction known as slaking. Calcium hydroxide is formed and a large amount of heat is released."
  },

  {
    id: 2,
    subject: "Chemistry",
    topic: "Separation Techniques",
    year: 1998,
    exam: "JAMB",
    question: "A mixture of iron filings and sulphur powder can be separated by dissolving the mixture in",
    options: [
      "steam",
      "dilute hydrochloric acid",
      "dilute sodium hydroxide",
      "carbon(IV) sulphide"
    ],
    answer: "carbon(IV) sulphide",
    explanation: "Sulphur dissolves in carbon(IV) sulphide, while iron does not. The mixture can therefore be separated by dissolving the sulphur and then filtering off the iron."
  },

  {
    id: 3,
    subject: "Chemistry",
    topic: "Stoichiometry",
    year: 1998,
    exam: "JAMB",
    question: "8.0 g of an element X reacted with an excess of copper(II) tetraoxosulphate(VI) solution to deposit 21.3 g of copper. The correct equation for the reaction is [X = 24, Cu = 64]",
    options: [
      "X(s) + CuSO4(aq) -> Cu(s) + XSO4(aq)",
      "X(s) + 2CuSO4(aq) -> 2Cu(s) + X(SO4)2(aq)",
      "2X(s) + CuSO4(aq) -> Cu(s) + X2SO4(aq)",
      "2X(s) + 3CuSO4(aq) -> 3Cu(s) + X2(SO4)3(aq)"
    ],
    answer: "X(s) + CuSO4(aq) -> Cu(s) + XSO4(aq)",
    explanation: "Moles of X = 8.0/24 = 0.333 mol. Moles of Cu = 21.3/64 = 0.333 mol. The mole ratio of X to Cu is therefore 1:1, so X forms a divalent sulphate, giving X + CuSO4 -> Cu + XSO4."
  },

  {
    id: 4,
    subject: "Chemistry",
    topic: "Stoichiometry",
    year: 1998,
    exam: "JAMB",
    question: "C3H8(g) + 5O2(g) -> 4H2O(g) + 3CO2(g). From the equation above, the volume of oxygen at s.t.p. required to burn 50 cm3 of propane is",
    options: [
      "250 cm3",
      "150 cm3",
      "100 cm3",
      "50 cm3"
    ],
    answer: "250 cm3",
    explanation: "The equation shows that 1 volume of propane reacts with 5 volumes of oxygen. Therefore, 50 cm3 of propane requires 50 x 5 = 250 cm3 of oxygen."
  },

  {
    id: 5,
    subject: "Chemistry",
    topic: "Gas Laws",
    year: 1998,
    exam: "JAMB",
    question: "30 cm3 of hydrogen was collected over water at 27 C and 780 mm Hg. If the vapour pressure of water at the temperature of the experiment was 10 mm Hg, calculate the volume of the dry gas at 760 mm Hg and 7 C.",
    options: [
      "40.0 cm3",
      "35.7 cm3",
      "28.4 cm3",
      "25.2 cm3"
    ],
    answer: "28.4 cm3",
    explanation: "The initial pressure of dry hydrogen is 780 - 10 = 770 mm Hg. Using P1V1/T1 = P2V2/T2, with V1 = 30 cm3, T1 = 300 K, P1 = 770 mm Hg, P2 = 760 mm Hg and T2 = 280 K: V2 = (770 x 30 x 280)/(760 x 300) = 28.36 cm3, which rounds to 28.4 cm3."
  },

  {
    id: 6,
    subject: "Chemistry",
    topic: "Gas Laws",
    year: 1998,
    exam: "JAMB",
    question: "A given amount of gas occupies 10.0 dm3 at 4 atm and 273 C. The number of moles of the gas present is [Molar volume of gas at s.t.p. = 22.4 dm3]",
    options: [
      "0.89 mol",
      "1.90 mol",
      "3.80 mol",
      "5.70 mol"
    ],
    answer: "0.89 mol",
    explanation: "At 273 C, the temperature is 546 K. Using P1V1/T1 = P2V2/T2, the volume at s.t.p. is V2 = (4 x 10 x 273)/546 = 20 dm3. Number of moles = 20/22.4 = 0.893 mol, approximately 0.89 mol."
  },

  {
    id: 7,
    subject: "Chemistry",
    topic: "Gas Laws",
    year: 1998,
    exam: "JAMB",
    question: "If sulphur(IV) oxide and methane are released simultaneously at opposite ends of a narrow tube, the rates of diffusion R_SO2 and R_CH4 will be in the ratio",
    options: [
      "1:2",
      "2:1",
      "1:4",
      "1:1"
    ],
    answer: "1:2",
    explanation: "By Graham's law, R_SO2/R_CH4 = sqrt(M_CH4/M_SO2). Since CH4 has molar mass 16 and SO2 has molar mass 64, the ratio is sqrt(16/64) = 1/2. Therefore, R_SO2:R_CH4 = 1:2."
  },

  {
    id: 8,
    subject: "Chemistry",
    topic: "Kinetic Theory",
    year: 1998,
    exam: "JAMB",
    question: "A solid begins to melt when the",
    options: [
      "constituent particles acquire a greater kinetic energy",
      "energy of vibration of particles of the solid is less than the intermolecular forces",
      "constituent particles acquire energy above the average kinetic energy",
      "energy of vibration of particles of the solid equals the intermolecular forces"
    ],
    answer: "energy of vibration of particles of the solid equals the intermolecular forces",
    explanation: "As a solid is heated, its particles vibrate with increasing energy. At the melting point, the particles have sufficient energy to overcome the forces holding the solid lattice together."
  },

  {
    id: 9,
    subject: "Chemistry",
    topic: "Chemical Bonding",
    year: 1998,
    exam: "JAMB",
    question: "An element with electronic shell distribution 2, 8, 2 can combine with chlorine to form a compound held together by",
    options: [
      "a covalent bond",
      "an electrovalent bond",
      "a hydrogen bond",
      "a co-ordinate bond"
    ],
    answer: "an electrovalent bond",
    explanation: "The element has two valence electrons and readily loses them to form a 2+ ion. Chlorine gains electrons to form chloride ions, so the compound is held together by electrovalent (ionic) bonding."
  },

  {
    id: 10,
    subject: "Chemistry",
    topic: "Periodic Table",
    year: 1998,
    exam: "JAMB",
    question: "Which of the following electronic configurations indicates an atom with the highest first ionization energy?",
    options: [
      "2, 8, 7",
      "2, 8, 8, 1",
      "2, 8, 8, 2",
      "2, 8, 5"
    ],
    answer: "2, 8, 7",
    explanation: "The configuration 2, 8, 7 represents chlorine. Among the listed atoms, chlorine has the highest first ionization energy because its outer electrons are held relatively strongly by the nucleus."
  },

  {
    id: 11,
    subject: "Chemistry",
    topic: "Atomic Structure",
    year: 1998,
    exam: "JAMB",
    question: "The distinct lines observed in a simple hydrogen spectrum are due to the emission of",
    options: [
      "electrons from the atom",
      "energy by proton transitions",
      "energy by electron transitions",
      "neutrons from the atom"
    ],
    answer: "energy by electron transitions",
    explanation: "Hydrogen line spectra are produced when excited electrons move from higher energy levels to lower energy levels, emitting photons of definite energies and wavelengths."
  },

  {
    id: 12,
    subject: "Chemistry",
    topic: "Nuclear Chemistry",
    year: 1998,
    exam: "JAMB",
    question: "If an element X of atomic number Z and mass number Y is irradiated by an intense concentration of neutrons, the relevant nuclear equation is",
    options: [
      "X(Z,Y) + 1n -> X(Z+1,Y)",
      "X(Z,Y) + 1n -> X(Z,Y+1)",
      "X(Z,Y) + 1n -> X(Z+1,Y+1)",
      "X(Z,Y) + 1n -> X(Z-1,Y-1)"
    ],
    answer: "X(Z,Y) + 1n -> X(Z,Y+1)",
    explanation: "When a nucleus captures a neutron, the mass number increases by one while the atomic number remains unchanged because the number of protons does not change."
  },

  {
    id: 13,
    subject: "Chemistry",
    topic: "Gases & Non-Metals",
    year: 1998,
    exam: "JAMB",
    question: "The physical property used to extract oxygen and nitrogen industrially from liquid air is their difference in",
    options: [
      "boiling point",
      "density",
      "rate of diffusion",
      "solubility"
    ],
    answer: "boiling point",
    explanation: "Oxygen and nitrogen are separated from liquid air by fractional distillation because they have different boiling points."
  },

  {
    id: 14,
    subject: "Chemistry",
    topic: "Gases & Non-Metals",
    year: 1998,
    exam: "JAMB",
    question: "Excess phosphorus was burnt in a gas jar and the residual gas passed successively over concentrated KOH solution and concentrated H2SO4 before being collected in a flask. The gas collected is",
    options: [
      "carbon(IV) oxide, nitrogen and the rare gases",
      "nitrogen(IV) oxide and the rare gases",
      "nitrogen and the rare gases",
      "carbon(IV) oxide, nitrogen(IV) oxide and the rare gases"
    ],
    answer: "nitrogen and the rare gases",
    explanation: "Phosphorus consumes the oxygen in the gas jar. The remaining major gases are nitrogen and the rare gases. The treatment removes acidic and moisture impurities."
  },

  {
    id: 15,
    subject: "Chemistry",
    topic: "Water Chemistry",
    year: 1998,
    exam: "JAMB",
    question: "Potassium tetraoxomanganate(VII) is often added to impure water during treatment to",
    options: [
      "reduce organic impurities",
      "oxidize organic impurities",
      "destroy bacteria and algae",
      "remove permanent hardness"
    ],
    answer: "oxidize organic impurities",
    explanation: "Potassium tetraoxomanganate(VII), KMnO4, is a strong oxidizing agent and can oxidize organic impurities in water."
  },

  {
    id: 16,
    subject: "Chemistry",
    topic: "Environmental Chemistry",
    year: 1998,
    exam: "JAMB",
    question: "The soil around a battery manufacturing factory is likely to contain a high concentration of",
    options: [
      "Ca2+ salts",
      "Pb2+ salts",
      "Mg2+ salts",
      "Al3+ salts"
    ],
    answer: "Pb2+ salts",
    explanation: "Lead-acid batteries contain lead compounds. Waste from battery manufacturing can therefore contaminate surrounding soil with lead compounds and Pb2+ ions."
  },

  {
    id: 17,
    subject: "Chemistry",
    topic: "Solutions & Solubility",
    year: 1998,
    exam: "JAMB",
    question: "90.0 g of MgCl2 was placed in 50.0 cm3 of water to give a saturated solution at 298 K. If the solubility of the salt is 8.0 mol dm-3 at the same temperature, what is the mass of the salt left undissolved at the given temperature? [Mg = 24, Cl = 35.5]",
    options: [
      "52.0 g",
      "58.5 g",
      "85.5 g",
      "38.5 g"
    ],
    answer: "52.0 g",
    explanation: "Molar mass of MgCl2 = 24 + (2 x 35.5) = 95 g/mol. In 50 cm3, the amount that dissolves is 8.0 x 50/1000 = 0.4 mol. Mass dissolved = 0.4 x 95 = 38.0 g. Therefore, mass left undissolved = 90.0 - 38.0 = 52.0 g."
  },

  {
    id: 18,
    subject: "Chemistry",
    topic: "Solutions & Solubility",
    year: 1998,
    exam: "JAMB",
    question: "Soap lather is an example of a colloid in which a",
    options: [
      "liquid is dispersed in gas",
      "solid is dispersed in liquid",
      "gas is dispersed in liquid",
      "liquid is dispersed in liquid"
    ],
    answer: "gas is dispersed in liquid",
    explanation: "Soap lather is a foam in which gas bubbles are dispersed in a liquid soap solution."
  },

  {
    id: 19,
    subject: "Chemistry",
    topic: "Solutions & Solubility",
    year: 1998,
    exam: "JAMB",
    question: "The pH of a solution obtained by mixing 100 cm3 of a 0.1 M HCl solution with 100 cm3 of a 0.2 M solution of NaOH is",
    options: [
      "1.3",
      "7.0",
      "9.7",
      "12.7"
    ],
    answer: "12.7",
    explanation: "Moles of H+ = 0.1 x 0.100 = 0.010 mol. Moles of OH- = 0.2 x 0.100 = 0.020 mol. Excess OH- = 0.010 mol. Total volume = 0.200 dm3, so [OH-] = 0.010/0.200 = 0.050 M. pOH = 1.30 and pH = 14.00 - 1.30 = 12.70."
  },

  {
    id: 20,
    subject: "Chemistry",
    topic: "Solutions & Solubility",
    year: 1998,
    exam: "JAMB",
    question: "In the conductance of electrical currents through an aqueous potassium tetraoxosulphate(VI) solution, the electric charge carriers are",
    options: [
      "ions",
      "electrons",
      "hydrated ions",
      "hydrated electrons"
    ],
    answer: "ions",
    explanation: "In an aqueous electrolyte solution, electric current is carried through the movement of positive and negative ions."
  },

  {
    id: 21,
    subject: "Chemistry",
    topic: "Stoichiometry & Titration",
    year: 1998,
    exam: "JAMB",
    question: "What volume of 0.1 mol dm-3 solution of tetraoxosulphate(VI) acid would be needed to dissolve 2.86 g of sodium trioxocarbonate(IV) decahydrate crystals? [H=1, C=12, O=16, S=32, Na=23]",
    options: [
      "20 cm3",
      "40 cm3",
      "80 cm3",
      "100 cm3"
    ],
    answer: "100 cm3",
    explanation: "The reaction is Na2CO3 + H2SO4 -> Na2SO4 + H2O + CO2. Molar mass of Na2CO3.10H2O = 286 g/mol. Moles in 2.86 g = 2.86/286 = 0.01 mol. A 1:1 ratio requires 0.01 mol H2SO4. Volume = 0.01/0.1 = 0.1 dm3 = 100 cm3."
  },

  {
    id: 22,
    subject: "Chemistry",
    topic: "Electrochemistry",
    year: 1998,
    exam: "JAMB",
    question: "1.2 Faradays of electricity are passed through electrolytic cells containing Na+, Cu2+ and Al3+ in series. How many moles of each metal would be formed at the cathode of each cell?",
    options: [
      "0.6 mole of Na, 1.2 moles of Cu and 1.2 moles of Al",
      "1.2 moles of Na, 0.6 mole of Cu and 0.4 mole of Al",
      "1.2 moles of Na, 2.4 moles of Cu and 2.4 moles of Al",
      "1.2 moles of Na, 2.4 moles of Cu and 3.6 moles of Al"
    ],
    answer: "1.2 moles of Na, 0.6 mole of Cu and 0.4 mole of Al",
    explanation: "For Na+, 1 Faraday deposits 1 mole of Na. For Cu2+, 2 Faradays deposit 1 mole of Cu. For Al3+, 3 Faradays deposit 1 mole of Al. Therefore, 1.2 F gives 1.2 mol Na, 0.6 mol Cu and 0.4 mol Al."
  },

  {
    id: 23,
    subject: "Chemistry",
    topic: "Electrochemistry",
    year: 1998,
    exam: "JAMB",
    question: "What mass of gold is deposited during the electrolysis of gold(III) tetraoxosulphate(VI) when a current of 15 A is passed for 193 seconds? [Au = 197, F = 96500 C mol-1]",
    options: [
      "1.97 g",
      "3.94 g",
      "5.91 g",
      "19.70 g"
    ],
    answer: "1.97 g",
    explanation: "Charge passed Q = It = 15 x 193 = 2895 C. Gold requires 3 Faradays per mole. Mass deposited = (2895 x 197)/(3 x 96500) = 1.97 g."
  },

  {
    id: 24,
    subject: "Chemistry",
    topic: "Redox Reactions",
    year: 1998,
    exam: "JAMB",
    question: "Fe(s) + Cu2+(aq) -> Fe2+(aq) + Cu(s). From the reaction equation above, it can be inferred that",
    options: [
      "Fe is the oxidizing agent",
      "Fe is reduced",
      "Cu2+ loses electrons",
      "Cu2+ is the oxidizing agent"
    ],
    answer: "Cu2+ is the oxidizing agent",
    explanation: "Cu2+ gains electrons to form Cu and is therefore reduced. The species that is reduced acts as the oxidizing agent."
  },

  {
    id: 25,
    subject: "Chemistry",
    topic: "Redox Reactions",
    year: 1998,
    exam: "JAMB",
    question: "2FeCl2(s) + Cl2(g) -> 2FeCl3(s). The reducing agent in the reaction above is",
    options: [
      "FeCl2",
      "Cl2",
      "FeCl3",
      "Fe"
    ],
    answer: "FeCl2",
    explanation: "Iron changes from oxidation state +2 in FeCl2 to +3 in FeCl3. FeCl2 therefore loses electrons and is oxidized, making it the reducing agent."
  },

  {
    id: 26,
    subject: "Chemistry",
    topic: "Chemical Energetics",
    year: 1998,
    exam: "JAMB",
    question: "The chemical reaction that is accompanied by a distinct decrease in entropy when carried out at constant temperature is",
    options: [
      "N2O4(g) -> 2NO2(g)",
      "N2(g) + 3H2(g) -> 2NH3(g)",
      "CaCO3(s) -> CaO(s) + CO2(g)",
      "2N2H4(l) -> 3N2(g) + 4H2O(g)"
    ],
    answer: "N2(g) + 3H2(g) -> 2NH3(g)",
    explanation: "The reaction changes four moles of gaseous reactants into two moles of gaseous product. The decrease in the number of gas molecules corresponds to a decrease in entropy."
  },

  {
    id: 27,
    subject: "Chemistry",
    topic: "Chemical Energetics",
    year: 1998,
    exam: "JAMB",
    question: "32 g of anhydrous copper(II) tetraoxosulphate(VI) dissolved in 1 dm3 of water generated 13.0 kJ of heat. The molar heat of solution is [Cu = 64, S = 32, O = 16]",
    options: [
      "26.0 kJ mol-1",
      "65.0 kJ mol-1",
      "130.0 kJ mol-1",
      "260.0 kJ mol-1"
    ],
    answer: "65.0 kJ mol-1",
    explanation: "Molar mass of CuSO4 = 64 + 32 + (4 x 16) = 160 g/mol. Moles in 32 g = 32/160 = 0.2 mol. If 0.2 mol releases 13.0 kJ, then 1 mol releases 13.0/0.2 = 65.0 kJ."
  },

  {
    id: 28,
    subject: "Chemistry",
    topic: "Electrochemistry",
    year: 1998,
    exam: "JAMB",
    question: "Given standard reduction values: Mg2+ = -2.37 V, Zn2+ = -0.76 V, Cd2+ = -0.40 V, Cu2+ = +0.34 V. In this series, the strongest reducing agent is",
    options: [
      "Cu(s)",
      "Cd(s)",
      "Zn(s)",
      "Mg(s)"
    ],
    answer: "Mg(s)",
    explanation: "The strongest reducing agent is the metal that is most easily oxidized. Magnesium has the most negative standard reduction potential and is therefore the strongest reducing agent in the series."
  },

  {
    id: 29,
    subject: "Chemistry",
    topic: "Chemical Kinetics",
    year: 1998,
    exam: "JAMB",
    question: "In the diagram above, the potential energy profile for the forward reaction has a reactants baseline at 10 kJ, transition state peak at 40 kJ, and products baseline at 15 kJ. The activation energy for the backward reaction is",
    options: [
      "+5 kJ",
      "+15 kJ",
      "+25 kJ",
      "+30 kJ"
    ],
    answer: "+25 kJ",
    explanation: "The activation energy for the backward reaction is the difference between the transition-state energy and the product energy: 40 - 15 = 25 kJ."
  },

  {
    id: 30,
    subject: "Chemistry",
    topic: "Chemical Kinetics",
    year: 1998,
    exam: "JAMB",
    question: "2X + Y -> Z. In the equation above, the rate of formation of Z is found to be independent of the concentration of Y and to quadruple when the concentration of X is doubled. The rate equation for the reaction is",
    options: [
      "R = k[X][Y]",
      "R = k[X]^2[Y]",
      "R = k[X]^2[Y]^2",
      "R = k[X]^2[Y]^0"
    ],
    answer: "R = k[X]^2[Y]^0",
    explanation: "The rate is independent of Y, so the order with respect to Y is zero. Doubling X quadruples the rate, so the order with respect to X is two. Therefore, R = k[X]^2[Y]^0."
  },

  {
    id: 31,
    subject: "Chemistry",
    topic: "Chemical Equilibrium",
    year: 1998,
    exam: "JAMB",
    question: "2Cl2(g) + 2H2O(g) <=> 4HCl(g) + O2(g), change in enthalpy = +115 kJ mol-1. In the above equilibrium reaction, a decrease in temperature will",
    options: [
      "favour the reverse reaction",
      "favour the forward reaction",
      "have no effect on the equilibrium state",
      "double the rate of the forward reaction"
    ],
    answer: "favour the reverse reaction",
    explanation: "The forward reaction is endothermic because its enthalpy change is positive. Lowering the temperature favours the exothermic reverse reaction."
  },

  {
    id: 32,
    subject: "Chemistry",
    topic: "Gases & Non-Metals",
    year: 1998,
    exam: "JAMB",
    question: "The reactions: (1) 2NH3(g) + 3Cl2(g) -> 6HCl(g) + N2(g), (2) 3CuO(s) + 2NH3(g) -> 3Cu(s) + 3H2O(l) + N2(g) demonstrate the",
    options: [
      "basic properties of ammonia",
      "acidic properties of ammonia",
      "reducing properties of ammonia",
      "oxidizing properties of ammonia"
    ],
    answer: "reducing properties of ammonia",
    explanation: "In both reactions, ammonia reduces another substance while the nitrogen in ammonia is oxidized from -3 to 0 in N2. Ammonia therefore acts as a reducing agent."
  },

  {
    id: 33,
    subject: "Chemistry",
    topic: "Qualitative Analysis",
    year: 1998,
    exam: "JAMB",
    question: "A gas that turns a filter paper previously soaked in lead ethanoate solution black is",
    options: [
      "hydrogen chloride",
      "hydrogen sulphide",
      "sulphur(IV) oxide",
      "sulphur(VI) oxide"
    ],
    answer: "hydrogen sulphide",
    explanation: "Hydrogen sulphide reacts with lead ethanoate to form black lead(II) sulphide, PbS."
  },

  // CHECK SOURCE: Questions 34-40 are absent from the supplied dataset.
  // They have not been invented or reconstructed because the original question text
  // and options were not provided.

  {
    id: 41,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1998,
    exam: "JAMB",
    question: "The correct IUPAC nomenclature for the alcohol compound CH3-CH2-CH(OH)-CH(CH3)2 is",
    options: [
      "4-methylpentan-3-ol",
      "2-methylpentan-3-ol",
      "3-methylpentan-3-ol",
      "1,1-dimethylbutan-2-ol"
    ],
    answer: "2-methylpentan-3-ol",
    explanation: "The longest chain containing the hydroxyl group has five carbon atoms. Numbering from the end nearest the substituent gives the methyl group at carbon 2 and the hydroxyl group at carbon 3. The correct name is 2-methylpentan-3-ol."
  },

  {
    id: 42,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1998,
    exam: "JAMB",
    question: "The chemical dehydration of butan-1-ol (CH3-CH2-CH2-CH2-OH) with concentrated acid yields",
    options: [
      "but-1-ene",
      "but-2-ene",
      "but-1-yne",
      "but-2-yne"
    ],
    answer: "but-1-ene",
    explanation: "Dehydration of butan-1-ol removes H2O from the molecule to form an alkene. The terminal double bond gives but-1-ene."
  },

  {
    id: 43,
    subject: "Chemistry",
    topic: "Applied Chemistry",
    year: 1998,
    exam: "JAMB",
    question: "The macromolecular equation nCH2=CH2 -> (-CH2-CH2-)_n represents the commercial manufacture of",
    options: [
      "rubber",
      "polythene",
      "polystyrene",
      "butane"
    ],
    answer: "polythene",
    explanation: "Ethene molecules undergo addition polymerization to form the long-chain polymer polyethene, commonly called polythene."
  },

  {
    id: 44,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1998,
    exam: "JAMB",
    question: "One mole of a hydrocarbon contains 6 g of hydrogen. If its molecular weight is 54, the hydrocarbon belongs to the family of",
    options: [
      "alkanone",
      "alkane",
      "alkene",
      "alkyne"
    ],
    answer: "alkyne",
    explanation: "The mass of carbon is 54 - 6 = 48 g, corresponding to 48/12 = 4 mol of carbon. The hydrogen is 6 mol, giving the formula C4H6. This fits the general formula CnH(2n-2), so the compound is an alkyne."
  },

  {
    id: 45,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1998,
    exam: "JAMB",
    question: "The products obtained when a pure hydrocarbon is burned in excess oxygen are",
    options: [
      "carbon and hydrogen",
      "carbon and water",
      "carbon(II) oxide and hydrogen",
      "carbon(IV) oxide and water"
    ],
    answer: "carbon(IV) oxide and water",
    explanation: "Complete combustion of a hydrocarbon in excess oxygen produces carbon(IV) oxide and water."
  },

  {
    id: 46,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1998,
    exam: "JAMB",
    question: "How many structural isomers can be drawn for a non-cyclic alkanol with the molecular formula C4H10O?",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    answer: "4",
    explanation: "The four structural alcohol isomers are butan-1-ol, butan-2-ol, 2-methylpropan-1-ol and 2-methylpropan-2-ol."
  },

  {
    id: 47,
    subject: "Chemistry",
    topic: "Applied Chemistry",
    year: 1998,
    exam: "JAMB",
    question: "Cracking medical paraffin oil yields a lower-boiling liquid that decolorizes bromine water, along with a gas that produces a 'pop' sound with a lighted splint. The products of this cracking process are",
    options: [
      "carbon(IV) oxide and an alkyne",
      "carbon(II) oxide and an alkane",
      "hydrogen gas and an alkene",
      "hydrogen gas and an alkane"
    ],
    answer: "hydrogen gas and an alkene",
    explanation: "The gas that produces a pop sound with a lighted splint is hydrogen. The liquid decolorizes bromine water because it contains an unsaturated hydrocarbon such as an alkene."
  },

  {
    id: 48,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1998,
    exam: "JAMB",
    question: "An example of an aromatic organic compound is",
    options: [
      "C6H13Cl",
      "C6H12",
      "C6H5OH",
      "C6H14"
    ],
    answer: "C6H5OH",
    explanation: "C6H5OH is phenol. It contains a benzene ring and is therefore an aromatic compound."
  },

  {
    id: 49,
    subject: "Chemistry",
    topic: "Applied Chemistry",
    year: 1998,
    exam: "JAMB",
    question: "Terylene is synthesized from ethane-1,2-diol and benzene-1,4-dicarboxylic acid through a",
    options: [
      "addition reaction",
      "condensation reaction",
      "elimination reaction",
      "substitution reaction"
    ],
    answer: "condensation reaction",
    explanation: "Terylene is a polyester formed by condensation polymerization. Ester linkages form between the alcohol and carboxylic acid groups, with water eliminated."
  },

  {
    id: 50,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1998,
    exam: "JAMB",
    question: "Which of the following statements is true concerning the chemical properties of benzene and hexane?",
    options: [
      "Both undergo substitution reactions",
      "Both undergo addition reactions",
      "Both are solids at room temperature",
      "Both readily decolorize bromine water"
    ],
    answer: "Both undergo substitution reactions",
    explanation: "Hexane undergoes substitution reactions such as free-radical halogenation. Benzene also undergoes substitution reactions, particularly electrophilic substitution, because substitution preserves the stability of its aromatic ring."
  }

];

export default chemJamb1998;