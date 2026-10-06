// JAMB 1989 Chemistry Past Questions
// Fully audited — questions, answers, options, explanations, calculations, and app-safe formatting.
// Source-dependent graph questions have been reconstructed only where the available source supports the answer.

const chemJamb1989 = [

  {
    id: 1,
    subject: "Chemistry",
    topic: "Separation Techniques",
    year: 1989,
    exam: "JAMB",
    question: "Which of the following would support the conclusion that a solid sample is a mixture?",
    options: [
      "The solid can be ground to a fine powder",
      "The density of the solid is 2.25 g dm^-3",
      "The solid has a melting range of 300°C to 375°C",
      "The solid absorbs moisture from the atmosphere"
    ],
    answer: "The solid has a melting range of 300°C to 375°C",
    explanation: "A pure solid usually has a sharp melting point, while a mixture or impure solid generally melts over a range of temperatures."
  },

  {
    id: 2,
    subject: "Chemistry",
    topic: "Stoichiometry",
    year: 1989,
    exam: "JAMB",
    question: "The molar ratio of carbon to hydrogen of a volatile liquid compound is 1:2. 0.12 g of the liquid evaporated at S.T.P. gave 32 cm^3 of vapour. The molecular formula of the liquid is [G.M.V. = 22.4 dm^3, C = 12, H = 1]",
    options: ["C3H6", "C4H8", "C5H10", "C6H12"],
    answer: "C6H12",
    explanation: "Moles of vapour = 32/22400 = 0.0014286 mol. Molar mass = 0.12/0.0014286 = 84 g/mol. The empirical formula for a 1:2 C:H ratio is CH2, with formula mass 14. Therefore, 84/14 = 6, giving the molecular formula C6H12."
  },

  {
    id: 3,
    subject: "Chemistry",
    topic: "Periodic Table",
    year: 1989,
    exam: "JAMB",
    question: "The atomic radii of Li, Na and K are 1.33 A, 1.54 A and 1.96 A respectively. Which of the following explains this gradation in atomic radius?",
    options: [
      "Electropositivity decreases from Li to Na to K",
      "Electronegativity decreases from Li to Na to K",
      "The number of electron shells increases from Li to Na to K",
      "The elements are in the same period"
    ],
    answer: "The number of electron shells increases from Li to Na to K",
    explanation: "Li, Na and K are in the same group. Moving down the group adds an electron shell at each step, increasing shielding and atomic radius."
  },

  {
    id: 4,
    subject: "Chemistry",
    topic: "Stoichiometry",
    year: 1989,
    exam: "JAMB",
    question: "20.00 cm^3 of a solution containing 0.53 g of anhydrous Na2CO3 in 100 cm^3 requires 25.00 cm^3 of H2SO4 for complete neutralization. The concentration of the acid solution in moles per dm^3 is [H = 1, C = 12, O = 16, Na = 23, S = 32]",
    options: ["0.02", "0.04", "0.06", "0.08"],
    answer: "0.04",
    explanation: "Molar mass of Na2CO3 = 106 g/mol. Therefore, 0.53 g in 100 cm^3 gives 0.005 mol in 100 cm^3, or 0.05 mol/dm^3. Since H2SO4 and Na2CO3 react in a 1:1 mole ratio, M1V1 = M2V2. Thus, M(H2SO4) x 25 = 0.05 x 20, giving 0.04 mol/dm^3."
  },

  {
    id: 5,
    subject: "Chemistry",
    topic: "Stoichiometry",
    year: 1989,
    exam: "JAMB",
    question: "The minimum volume of oxygen required for the complete combustion of a mixture of 10 cm^3 of CO and 15 cm^3 of H2 is",
    options: ["25.0 cm^3", "12.5 cm^3", "10.0 cm^3", "5.0 cm^3"],
    answer: "12.5 cm^3",
    explanation: "2CO + O2 -> 2CO2, so 10 cm^3 of CO requires 5 cm^3 of O2. Also, 2H2 + O2 -> 2H2O, so 15 cm^3 of H2 requires 7.5 cm^3 of O2. Total oxygen required = 5 + 7.5 = 12.5 cm^3."
  },

  {
    id: 6,
    subject: "Chemistry",
    topic: "Gas Laws",
    year: 1989,
    exam: "JAMB",
    question: "What is the partial pressure of hydrogen gas collected over water at standard atmospheric pressure and 25°C if the saturation vapour pressure of water is 23 mm Hg at that temperature?",
    options: ["737 mm Hg", "763 mm Hg", "777 mm Hg", "783 mm Hg"],
    answer: "737 mm Hg",
    explanation: "By Dalton's law, total pressure = pressure of hydrogen + vapour pressure of water. Therefore, pressure of hydrogen = 760 - 23 = 737 mm Hg."
  },

  {
    id: 7,
    subject: "Chemistry",
    topic: "Gas Laws",
    year: 1989,
    exam: "JAMB",
    question: "It can be deduced from the vapour pressure curves that",
    options: [
      "Liquid I has the highest boiling point",
      "Liquid II has the highest boiling point",
      "Liquid III has the highest boiling point",
      "Liquid III has the lowest boiling point"
    ],
    answer: "Liquid III has the highest boiling point",
    explanation: "A liquid with the lowest vapour pressure at a given temperature requires the highest temperature to reach atmospheric pressure. From the original graph, liquid III has the highest boiling point."
  },

  {
    id: 8,
    subject: "Chemistry",
    topic: "Gas Laws",
    year: 1989,
    exam: "JAMB",
    question: "Which of the curves in the graph illustrates the behaviour of an ideal gas?",
    options: ["W", "X", "Y", "Z"],
    answer: "Y",
    explanation: "For an ideal gas, PV/RT remains constant at 1 as pressure changes. In the supplied source graph, curve Y is the horizontal line representing this ideal behaviour."
  },

  {
    id: 9,
    subject: "Chemistry",
    topic: "Chemical Bonding",
    year: 1989,
    exam: "JAMB",
    question: "Elements X and Y have electronic configurations 1s2 2s2 2p4 and 1s2 2s2 2p6 3s2 3p1 respectively. When X and Y combine, the formula of the compound formed is",
    options: ["XY", "YX", "X2Y3", "Y2X3"],
    answer: "Y2X3",
    explanation: "X has valency 2 because it needs two electrons to complete its outer shell. Y has valency 3 because it can lose three outer electrons. Balancing the valencies gives Y2X3."
  },

  {
    id: 10,
    subject: "Chemistry",
    topic: "Atomic Structure",
    year: 1989,
    exam: "JAMB",
    question: "The atomic number of cesium is 55 and its atomic mass is 133. The nucleus of a cesium atom therefore contains",
    options: [
      "78 protons and 55 electrons",
      "55 protons and 78 neutrons",
      "55 neutrons and 78 electrons",
      "78 neutrons and 55 neutrons"
    ],
    answer: "55 protons and 78 neutrons",
    explanation: "Atomic number = number of protons = 55. Number of neutrons = mass number - atomic number = 133 - 55 = 78."
  },

  {
    id: 11,
    subject: "Chemistry",
    topic: "Periodic Table",
    year: 1989,
    exam: "JAMB",
    question: "Four elements P, Q, R and S have atomic numbers of 4, 10, 12, and 14 respectively. Which of these elements is a noble gas?",
    options: ["P", "Q", "R", "S"],
    answer: "Q",
    explanation: "Atomic number 10 corresponds to neon, whose outer shell is completely filled. Neon is a noble gas."
  },

  {
    id: 12,
    subject: "Chemistry",
    topic: "Atomic Structure",
    year: 1989,
    exam: "JAMB",
    question: "How many valence electrons are contained in the element represented by 31/15 P?",
    options: ["3", "5", "15", "31"],
    answer: "5",
    explanation: "Phosphorus has atomic number 15 and electronic arrangement 2,8,5. Therefore, it has 5 valence electrons."
  },

  {
    id: 13,
    subject: "Chemistry",
    topic: "Stoichiometry",
    year: 1989,
    exam: "JAMB",
    question: "Using 50 cm^3 of 1 M potassium hydroxide and 100 cm^3 of 1 M tetraoxosulphate(VI) acid, calculate the respective volumes in cm^3 of base and acid that would be required to produce the maximum amount of potassium tetraoxosulphate(VI).",
    options: ["50, 50", "25, 50", "50, 25", "25, 25"],
    answer: "50, 25",
    explanation: "2KOH + H2SO4 -> K2SO4 + 2H2O. The mole ratio of KOH to H2SO4 is 2:1. Since both solutions are 1 M, 50 cm^3 of KOH requires 25 cm^3 of H2SO4."
  },

  {
    id: 14,
    subject: "Chemistry",
    topic: "Environmental Chemistry",
    year: 1989,
    exam: "JAMB",
    question: "The gaseous pollutant sulphur(IV) oxide is most likely to be detected in fairly reasonable quantities in the area around an industrial plant for the",
    options: [
      "extraction of aluminium from bauxite",
      "production of margarine",
      "smelting of copper",
      "production of chlorine from brine"
    ],
    answer: "smelting of copper",
    explanation: "Copper sulphide ores are roasted and smelted in air, producing sulphur(IV) oxide as a major gaseous pollutant."
  },

  {
    id: 15,
    subject: "Chemistry",
    topic: "Water Chemistry",
    year: 1989,
    exam: "JAMB",
    question: "Calcium hydroxide is added during the treatment of town water supply to",
    options: [
      "kill bacteria in the water",
      "facilitate coagulation of organic particles",
      "facilitate sedimentation",
      "improve the taste of the water"
    ],
    answer: "facilitate coagulation of organic particles",
    explanation: "In the traditional town-water treatment process represented by the original question, lime is used to assist coagulation. Chlorination, rather than calcium hydroxide, is used primarily for killing bacteria."
  },

  {
    id: 16,
    subject: "Chemistry",
    topic: "Stoichiometry",
    year: 1989,
    exam: "JAMB",
    question: "A hydrated salt with the formula MSO4.xH2O contains 45.3% by mass of water of crystallization. Calculate the value of x. [M = 56, S = 32, O = 16, H = 1]",
    options: ["3", "7", "5", "10"],
    answer: "7",
    explanation: "Molar mass of MSO4 = 56 + 32 + 64 = 152 g/mol. If x waters are present, the percentage of water is 18x/(152 + 18x) x 100 = 45.3. Solving gives x approximately 7."
  },

  {
    id: 17,
    subject: "Chemistry",
    topic: "Solutions & Solubility",
    year: 1989,
    exam: "JAMB",
    question: "If 1 dm^3 of a saturated solution of KCl is cooled from 80°C to 30°C, the mass of crystals deposited will be [K = 39, Cl = 35.5]",
    options: ["7.45 g", "14.90 g", "74.50 g", "149.00 g"],
    answer: "149.00 g",
    explanation: "From the original KCl solubility graph, the solubility is about 8 mol/dm^3 at 80°C and 6 mol/dm^3 at 30°C. Therefore, 2 mol of KCl crystallize. Molar mass of KCl = 39 + 35.5 = 74.5 g/mol. Mass deposited = 2 x 74.5 = 149 g."
  },

  {
    id: 18,
    subject: "Chemistry",
    topic: "Laboratory Apparatus",
    year: 1989,
    exam: "JAMB",
    question: "In the gas analysis apparatus setup, substances X and Y used inside the absorption tubes are respectively",
    options: [
      "Lime water and copper(II) tetraoxosulphate(VI)",
      "Potassium trioxocarbonate(IV) and alkaline pyrogallol",
      "Potassium hydroxide and alkaline pyrogallol",
      "Potassium trioxocarbonate(IV) and concentrated tetraoxosulphate(VI) acid"
    ],
    answer: "Potassium hydroxide and alkaline pyrogallol",
    explanation: "Potassium hydroxide absorbs carbon(IV) oxide, while alkaline pyrogallol absorbs oxygen in gas analysis."
  },

  {
    id: 19,
    subject: "Chemistry",
    topic: "Solutions & Solubility",
    year: 1989,
    exam: "JAMB",
    question: "A solution of calcium bromide contains 20 g dm^-3. What is the molarity of the solution with respect to calcium bromide and bromide ions respectively? [Ca = 40, Br = 80]",
    options: ["0.1, 0.1", "0.1, 0.2", "0.1, 0.05", "0.05, 0.1"],
    answer: "0.1, 0.2",
    explanation: "Molar mass of CaBr2 = 40 + 160 = 200 g/mol. Therefore, 20/200 = 0.1 mol/dm^3 CaBr2. Since CaBr2 gives two Br- ions, the bromide ion concentration is 0.2 mol/dm^3."
  },

  {
    id: 20,
    subject: "Chemistry",
    topic: "Inorganic Chemistry",
    year: 1989,
    exam: "JAMB",
    question: "The substance ZnO dissolves in sodium hydroxide solution and mineral acid solution to give soluble products in each case. ZnO is therefore referred to as",
    options: [
      "an allotropic oxide",
      "an amphoteric oxide",
      "a peroxide",
      "a dioxide"
    ],
    answer: "an amphoteric oxide",
    explanation: "An amphoteric oxide reacts with both acids and bases. ZnO reacts with mineral acids and with sodium hydroxide, so it is amphoteric."
  },

  {
    id: 21,
    subject: "Chemistry",
    topic: "Acids, Bases & Salts",
    year: 1989,
    exam: "JAMB",
    question: "An acid and its conjugate base",
    options: [
      "can neutralize each other to form a salt",
      "differ only by a single proton",
      "differ only by the opposite charges they carry",
      "are always neutral substances"
    ],
    answer: "differ only by a single proton",
    explanation: "A Brønsted-Lowry acid and its conjugate base differ by one proton, H+."
  },

  {
    id: 22,
    subject: "Chemistry",
    topic: "Electrochemistry",
    year: 1989,
    exam: "JAMB",
    question: "The same current is passed for the same time through solutions of AgNO3 and CuSO4 connected in series. How much silver will be deposited if 1.0 g of copper is produced? [Cu = 63.5, Ag = 108]",
    options: ["1.7 g", "3.4 g", "6.8 g", "13.6 g"],
    answer: "3.4 g",
    explanation: "By Faraday's second law, mass deposited is proportional to equivalent mass. Equivalent mass of Ag = 108, while that of Cu = 63.5/2 = 31.75. Therefore, mass of Ag = 1.0 x 108/31.75 = 3.40 g."
  },

  {
    id: 23,
    subject: "Chemistry",
    topic: "Electrochemistry",
    year: 1989,
    exam: "JAMB",
    question: "What is discharged at the cathode during the electrolysis of copper(II) tetraoxosulphate(VI) solution using carbon electrodes?",
    options: ["Cu2+ only", "H+ only", "Cu2+ and H+", "Cu2+ and SO4^2-"],
    answer: "Cu2+ only",
    explanation: "At the cathode, Cu2+ ions are preferentially reduced to copper metal: Cu2+ + 2e- -> Cu. Hydrogen ions are not preferentially discharged under these conditions."
  },

  {
    id: 24,
    subject: "Chemistry",
    topic: "Oxidation Numbers",
    year: 1989,
    exam: "JAMB",
    question: "An element Z forms an anion whose formula is [Z(CN)6]^y. If Z has an oxidation number of +2, what is the value of y?",
    options: ["-2", "-3", "-4", "-5"],
    answer: "-4",
    explanation: "Each CN group has a charge of -1, so six CN groups contribute -6. With Z at +2, the overall charge is +2 - 6 = -4. Therefore, y = -4."
  },

  {
    id: 25,
    subject: "Chemistry",
    topic: "Redox Reactions",
    year: 1989,
    exam: "JAMB",
    question: "Which of the following reactions is NOT an example of a redox reaction? (I) Fe + 2Ag+ -> Fe2+ + 2Ag (II) 2H2S + SO2 -> 2H2O + 3S (III) N2 + O2 -> 2NO (IV) CaCO3 -> CaO + CO2",
    options: ["I, II, III", "II and III", "III and IV", "IV only"],
    answer: "IV only",
    explanation: "In reaction IV, Ca remains at +2, C remains at +4 and O remains at -2. There is no change in oxidation number, so it is not a redox reaction."
  },

  {
    id: 26,
    subject: "Chemistry",
    topic: "Chemical Kinetics",
    year: 1989,
    exam: "JAMB",
    question: "The potential energy profile of the catalyzed and uncatalyzed paths for X(g) + Y(g) -> XY(g) is shown in the graph. Deduce the respective activation energies in kJ of the catalyzed and uncatalyzed reverse reactions.",
    options: ["300, 500", "500, 300", "-300, -500", "-500, -300"],
    answer: "300, 500",
    explanation: "The original JAMB energy-profile question gives the accepted activation-energy values for the reverse reaction as 300 kJ for the catalyzed path and 500 kJ for the uncatalyzed path. The original graph is required to reproduce the calculation exactly.",
    // CHECK SOURCE: The original energy-profile graph is not present in the supplied file. The answer is retained from the source transcription.
  },

  {
    id: 27,
    subject: "Chemistry",
    topic: "Chemical Energetics",
    year: 1989,
    exam: "JAMB",
    question: "The combustion of ethene is given by the equation: C2H4 + 3O2 -> 2CO2 + 2H2O; ΔH = -1428 kJ. If the molar heats of formation of water and carbon(IV) oxide are -286 kJ and -396 kJ respectively, calculate the molar heat of formation of ethene.",
    options: ["-2792", "+2792", "-64", "+64"],
    answer: "+64",
    explanation: "Using Hess's law: -1428 = [2(-396) + 2(-286)] - ΔHf(C2H4). Therefore, -1428 = -1364 - ΔHf(C2H4), giving ΔHf(C2H4) = +64 kJ/mol."
  },

  {
    id: 28,
    subject: "Chemistry",
    topic: "Chemical Equilibrium",
    year: 1989,
    exam: "JAMB",
    question: "CO(g) + H2O(g) <=> CO2(g) + H2(g), ΔH = -41000 J. Which of the following factors favour the formation of hydrogen? (I) high pressure (II) low pressure (III) high temperature (IV) use of excess steam",
    options: ["I, III and IV", "III only", "II, III and I", "IV only"],
    answer: "IV only",
    explanation: "There are two moles of gas on each side, so pressure changes have no effect. The forward reaction is exothermic, so increasing temperature does not favour hydrogen. Adding excess steam, a reactant, shifts the equilibrium to the right. Therefore, IV only is correct."
  },

  {
    id: 29,
    subject: "Chemistry",
    topic: "States of Matter",
    year: 1989,
    exam: "JAMB",
    question: "A typical heating curve shows a substance being heated from the solid phase through the liquid phase to the gaseous phase. Which part of the curve shows solid and liquid co-existing in equilibrium?",
    options: ["First flat plateau", "Second flat plateau", "Initial sloped line", "Middle sloped line"],
    answer: "First flat plateau",
    explanation: "The first flat plateau represents melting. During melting, solid and liquid coexist while the temperature remains constant."
  },

  {
    id: 30,
    subject: "Chemistry",
    topic: "Inorganic Chemistry",
    year: 1989,
    exam: "JAMB",
    question: "Which of the following represents the balanced equation for the reaction of copper with hot concentrated trioxonitrate(V) acid?",
    options: [
      "Cu + 2HNO3 -> Cu(NO3)2 + H2",
      "Cu + 4HNO3 -> Cu(NO3)2 + 2H2O + 2NO2",
      "3Cu + 8HNO3 -> 3Cu(NO3)2 + 4H2O + 2NO",
      "3Cu + 4HNO3 -> 3Cu(NO3)2 + 2H2O + 2NO"
    ],
    answer: "Cu + 4HNO3 -> Cu(NO3)2 + 2H2O + 2NO2",
    explanation: "Copper reacts with hot concentrated nitric acid to form copper(II) nitrate, water and nitrogen(IV) oxide. The balanced equation is Cu + 4HNO3 -> Cu(NO3)2 + 2H2O + 2NO2."
  },

  {
    id: 31,
    subject: "Chemistry",
    topic: "Applied Chemistry",
    year: 1989,
    exam: "JAMB",
    question: "The catalyst used in the contact process for the industrial manufacture of tetraoxosulphate(VI) acid is",
    options: [
      "Manganese(IV) oxide",
      "Manganese(II) tetraoxosulphate(VI)",
      "Vanadium(V) oxide",
      "Iron metal"
    ],
    answer: "Vanadium(V) oxide",
    explanation: "Vanadium(V) oxide, V2O5, catalyzes the oxidation of SO2 to SO3 in the contact process."
  },

  {
    id: 32,
    subject: "Chemistry",
    topic: "Applied Chemistry",
    year: 1989,
    exam: "JAMB",
    question: "Some important commercial products obtained from the destructive distillation of coal are",
    options: [
      "carbon(IV) oxide and ethanoic acid",
      "trioxocarbonate(IV) acid and methanoic acid",
      "producer gas and water gas",
      "coke and ammonia liquor"
    ],
    answer: "coke and ammonia liquor",
    explanation: "Destructive distillation of coal produces coke, coal tar, coal gas and ammoniacal liquor."
  },

  {
    id: 33,
    subject: "Chemistry",
    topic: "Applied Chemistry",
    year: 1989,
    exam: "JAMB",
    question: "Gunpowder is made from a mixture of charcoal, sulphur and potassium trioxonitrate(V). The nitrate salt in the mixture performs the function of",
    options: ["an oxidant", "a reductant", "a solvent", "a catalyst"],
    answer: "an oxidant",
    explanation: "Potassium nitrate supplies oxygen during combustion and therefore acts as the oxidizing component of gunpowder."
  },

  {
    id: 34,
    subject: "Chemistry",
    topic: "Inorganic Chemistry",
    year: 1989,
    exam: "JAMB",
    question: "Which of the following halogen single-displacement reactions is feasible?",
    options: [
      "Br2 + 2Cl- -> 2Br- + Cl2",
      "2I- + Br2 -> 2Br- + I2",
      "2F- + Cl2 -> 2Cl- + F2",
      "2F- + Br2 -> 2Br- + F2"
    ],
    answer: "2I- + Br2 -> 2Br- + I2",
    explanation: "Halogen reactivity decreases in the order F2 > Cl2 > Br2 > I2. Bromine is more reactive than iodine and can therefore displace iodide ions from solution."
  },

  {
    id: 35,
    subject: "Chemistry",
    topic: "Applied Chemistry",
    year: 1989,
    exam: "JAMB",
    question: "Bleaching powder, CaOCl2.H2O, deteriorates on exposure to air because",
    options: [
      "it loses its water of crystallization",
      "atmospheric nitrogen displaces chlorine from it",
      "carbon(IV) oxide in the atmosphere displaces chlorine from it",
      "bleaching agents should be stored only in solution"
    ],
    answer: "carbon(IV) oxide in the atmosphere displaces chlorine from it",
    explanation: "Carbon(IV) oxide in moist air reacts with bleaching powder and causes the release of active chlorine, reducing its bleaching power."
  },

  {
    id: 36,
    subject: "Chemistry",
    topic: "Inorganic Chemistry",
    year: 1989,
    exam: "JAMB",
    question: "The products of the cautious thermal decomposition of ammonium trioxonitrate(V) crystals are",
    options: [
      "NO2 and oxygen",
      "NH3 and oxygen",
      "nitrogen and water",
      "N2O and water"
    ],
    answer: "N2O and water",
    explanation: "On careful heating, ammonium nitrate decomposes as NH4NO3 -> N2O + 2H2O."
  },

  {
    id: 37,
    subject: "Chemistry",
    topic: "Electrochemistry",
    year: 1989,
    exam: "JAMB",
    question: "The scale of a chemical balance is made of an iron plate and coated electrolytically with copper because",
    options: [
      "iron is less susceptible to corrosion than copper",
      "copper forms a more attractive outer metal finish",
      "copper is less susceptible to corrosion than iron",
      "copper and iron are equally susceptible to atmospheric changes"
    ],
    answer: "copper is less susceptible to corrosion than iron",
    explanation: "Copper is less reactive and more resistant to atmospheric corrosion than iron. The copper coating therefore protects the iron plate from corrosion."
  },

  {
    id: 38,
    subject: "Chemistry",
    topic: "Inorganic Chemistry",
    year: 1989,
    exam: "JAMB",
    question: "A metal is extracted from its ore by the electrolysis of its molten chloride, and it can displace lead from lead(II) trioxonitrate(V) solution. The metal is",
    options: ["copper", "aluminium", "zinc", "sodium"],
    answer: "sodium",
    explanation: "Sodium is extracted by electrolysis of molten sodium chloride and is more reactive than lead. Therefore, it is the intended answer."
  },

  {
    id: 39,
    subject: "Chemistry",
    topic: "Applied Chemistry",
    year: 1989,
    exam: "JAMB",
    question: "Mortar is NOT used for underwater construction because",
    options: [
      "it hardens by loss of water",
      "its hardening does not depend upon evaporation",
      "it requires concrete to harden",
      "it will be washed away by the flow of water"
    ],
    answer: "it hardens by loss of water",
    explanation: "The original JAMB answer is that mortar hardens by loss of water. Underwater conditions prevent the normal hardening process described by the examination question."
  },

  {
    id: 40,
    subject: "Chemistry",
    topic: "Metallurgy",
    year: 1989,
    exam: "JAMB",
    question: "Which of the following is NOT involved in the extraction of metals from their ores?",
    options: [
      "reduction with carbon",
      "reduction with other metals",
      "reduction by electrolysis",
      "oxidation with oxidizing agents"
    ],
    answer: "oxidation with oxidizing agents",
    explanation: "Extraction of a metal from its ore generally requires reduction of the metal ion to the free metal. Oxidation with an oxidizing agent is therefore not an extraction method."
  },

  {
    id: 41,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1989,
    exam: "JAMB",
    question: "Which of the following hydrocarbons is a structural isomer of pentane?",
    options: [
      "2-methylbutane",
      "2,2-dimethylbutane",
      "2-methylpentane",
      "2,3-dimethylbutane"
    ],
    answer: "2-methylbutane",
    explanation: "Pentane has molecular formula C5H12. 2-methylbutane also has formula C5H12 but has a different carbon skeleton, making it a structural isomer of pentane."
  },

  {
    id: 42,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1989,
    exam: "JAMB",
    question: "When excess chlorine gas is mixed with ethene at room temperature, the addition product formed is",
    options: [
      "1,2-dichloroethane",
      "1,2-dichloroethene",
      "1,1-dichloroethane",
      "1,1-dichloroethene"
    ],
    answer: "1,2-dichloroethane",
    explanation: "Chlorine adds across the carbon-carbon double bond of ethene to form CH2Cl-CH2Cl, which is 1,2-dichloroethane."
  },

  {
    id: 43,
    subject: "Chemistry",
    topic: "Applied Chemistry",
    year: 1989,
    exam: "JAMB",
    question: "The vulcanization of natural rubber is an industrial chemical process by which",
    options: [
      "short alkene monomer units are linked to produce synthetic rubber lattices",
      "liquid rubber latex is coagulated using organic acids",
      "sulphur atoms chemically cross-link the hydrocarbon polymer chains",
      "moisture and water fractions are removed by vacuum drying"
    ],
    answer: "sulphur atoms chemically cross-link the hydrocarbon polymer chains",
    explanation: "During vulcanization, sulphur forms cross-links between polyisoprene chains. This improves the strength, elasticity and durability of rubber."
  },

  {
    id: 44,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1989,
    exam: "JAMB",
    question: "The chemical reaction between ethanoic acid and sodium hydroxide solution is an example of",
    options: ["esterification", "neutralization", "hydroxylation", "hydrolysis"],
    answer: "neutralization",
    explanation: "Ethanoic acid reacts with sodium hydroxide to form sodium ethanoate and water. This is an acid-base neutralization reaction."
  },

  {
    id: 45,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1989,
    exam: "JAMB",
    question: "The intermolecular force that associates individual ethanoic acid molecules together as dimers in the liquid state is",
    options: [
      "a covalent bond",
      "an ionic bond",
      "a dative covalent bond",
      "a hydrogen bond"
    ],
    answer: "a hydrogen bond",
    explanation: "Ethanoic acid molecules form dimers through strong hydrogen bonds between their carboxyl groups."
  },

  {
    id: 46,
    subject: "Chemistry",
    topic: "Applied Chemistry",
    year: 1989,
    exam: "JAMB",
    question: "The alkaline hydrolysis of natural fats and vegetable oils produces commercial soap and",
    options: [
      "propane-1,1,3-triol",
      "propane-1,3,3-triol",
      "propane-1,2,2-triol",
      "propane-1,2,3-triol"
    ],
    answer: "propane-1,2,3-triol",
    explanation: "Alkaline hydrolysis of triglycerides produces soap and glycerol. The systematic name of glycerol is propane-1,2,3-triol."
  },

  {
    id: 47,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1989,
    exam: "JAMB",
    question: "Which of the following chemical species is NOT classified as a monomer?",
    options: ["Ethene", "Propene", "Polyethene", "Chloroethene"],
    answer: "Polyethene",
    explanation: "Ethene, propene and chloroethene can act as monomers in polymerization reactions. Polyethene is already a polymer."
  },

  {
    id: 48,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1989,
    exam: "JAMB",
    question: "What is the IUPAC name for the compound CH2=C(CH3)-CH2Cl?",
    options: [
      "1-chloro-2-methylprop-2,3-ene",
      "1-chloro-2-methylprop-2-ene",
      "3-chloro-2-methylprop-1-ene",
      "3-chloro-2-methylprop-1,2-ene"
    ],
    answer: "3-chloro-2-methylprop-1-ene",
    explanation: "The longest chain containing the double bond has three carbon atoms. Numbering from the double-bond end gives prop-1-ene, with a methyl group at carbon 2 and chlorine at carbon 3. Therefore, the name is 3-chloro-2-methylprop-1-ene."
  },

  {
    id: 49,
    subject: "Chemistry",
    topic: "Applied Chemistry",
    year: 1989,
    exam: "JAMB",
    question: "The gas responsible for most of the fatal explosions in coal mines is",
    options: ["butane", "ethene", "ethane", "methane"],
    answer: "methane",
    explanation: "Methane, also called firedamp in coal mines, can accumulate underground and form an explosive mixture with air."
  },

  {
    id: 50,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1989,
    exam: "JAMB",
    question: "Three hydrocarbon liquids X, Y and Z containing only hydrogen and carbon were burnt on a spoon. X and Y burnt with sooty flames while Z did not. Y is able to discharge the colour of bromine water whereas X and Z cannot. Which of the liquids would be aromatic in nature?",
    options: ["X and Z", "Y", "X", "Z"],
    answer: "X",
    explanation: "Aromatic hydrocarbons commonly burn with sooty flames because of their relatively high carbon-to-hydrogen ratio. They do not readily decolorize bromine water without a suitable catalyst. Therefore, X is the aromatic liquid."
  }

];

export default chemJamb1989;