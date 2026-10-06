// JAMB 1988 Chemistry Past Questions
// Fully audited — questions, answers, options, calculations, explanations, and app-safe formatting.
// Checked against multiple JAMB 1988 transcriptions; graph-dependent items were rewritten where possible
// so the question remains understandable without relying on an unavailable figure.

const chemJamb1988 = [

  {
    id: 1,
    subject: "Chemistry",
    topic: "Separation Techniques",
    year: 1988,
    exam: "JAMB",
    question: "In the experiment shown, ammonium chloride crystals deposit on the cooler walls of the tube as a result of",
    options: [
      "Evaporation",
      "Recrystallization",
      "Sublimation",
      "Fractional precipitation"
    ],
    answer: "Sublimation",
    explanation: "When ammonium chloride is heated, it changes directly from solid to vapour. The vapour reaches the cooler part of the tube and changes directly back to solid crystals. This process is sublimation."
  },

  {
    id: 2,
    subject: "Chemistry",
    topic: "Chemical Bonding",
    year: 1988,
    exam: "JAMB",
    question: "The formula of the compound formed in a reaction between a trivalent metal M and a tetravalent non-metal X is",
    options: [
      "MX",
      "M3X4",
      "M4X3",
      "M3X2"
    ],
    answer: "M4X3",
    explanation: "M has valency 3 and X has valency 4. Interchanging the valencies gives M4X3, which has equal total positive and negative charges."
  },

  {
    id: 3,
    subject: "Chemistry",
    topic: "Stoichiometry",
    year: 1988,
    exam: "JAMB",
    question: "2.25 g of a sample of an oxide of copper gave 2.0 g of copper on reduction. 2.50 g of another oxide of copper on reduction also gave 2.0 g of copper. These results are in accordance with the law of",
    options: [
      "constant composition",
      "conservation of matter",
      "multiple proportions",
      "definite proportions"
    ],
    answer: "multiple proportions",
    explanation: "In the first oxide, 2.0 g of copper combines with 0.25 g of oxygen. In the second oxide, 2.0 g of copper combines with 0.50 g of oxygen. For the same mass of copper, the masses of oxygen are in the ratio 0.25:0.50 = 1:2. This demonstrates the law of multiple proportions."
  },

  {
    id: 4,
    subject: "Chemistry",
    topic: "Stoichiometry",
    year: 1988,
    exam: "JAMB",
    question: "One mole of propane is mixed with five moles of oxygen. The mixture is ignited and the propane burns completely. What is the volume of the gaseous product at S.T.P.? [G.M.V. = 22.4 dm3 mol-1]",
    options: [
      "112.0 dm3",
      "67.2 dm3",
      "56.0 dm3",
      "44.8 dm3"
    ],
    answer: "67.2 dm3",
    explanation: "The equation is C3H8 + 5O2 -> 3CO2 + 4H2O. At S.T.P., the water formed is condensed, so the gaseous product is 3 mol of CO2. Volume = 3 x 22.4 = 67.2 dm3. The original source lists 67.2 dm3 as the correct option."
  },

  {
    id: 5,
    subject: "Chemistry",
    topic: "Gas Laws",
    year: 1988,
    exam: "JAMB",
    question: "0.9 dm3 of a gas at S.T.P. was subjected by means of a movable piston to twice the original pressure, with the temperature now kept at 364 K. What is the volume of the gas in dm3 at this pressure?",
    options: [
      "2.0",
      "4.5",
      "0.6",
      "8.3"
    ],
    answer: "0.6",
    explanation: "Using P1V1/T1 = P2V2/T2, V2 = (P1V1T2)/(P2T1). Therefore, V2 = (1 x 0.9 x 364)/(2 x 273) = 0.6 dm3. The source transcription lists 6.0 as an option, but 0.6 is the mathematically correct value."
  },

  // CHECK SOURCE: The original question uses a graph. The graph itself is not included here.
  // The following wording preserves the graph information supplied in the original dataset.
  {
    id: 6,
    subject: "Chemistry",
    topic: "Gas Laws",
    year: 1988,
    exam: "JAMB",
    question: "A graph of the volume of a fixed mass of gas against its absolute temperature is a straight line passing through the origin. Which gas law does this graph illustrate?",
    options: [
      "Boyle",
      "Charles",
      "Graham",
      "Gay-Lussac"
    ],
    answer: "Charles",
    explanation: "Charles's law states that the volume of a fixed mass of gas is directly proportional to its absolute temperature at constant pressure. Therefore, a graph of volume against absolute temperature is a straight line through the origin."
  },

  {
    id: 7,
    subject: "Chemistry",
    topic: "Gas Laws",
    year: 1988,
    exam: "JAMB",
    question: "An increase in temperature causes an increase in the pressure of a gas in a fixed-volume container due to an increase in the",
    options: [
      "average velocity of the molecules",
      "number of collisions between the molecules",
      "density of the molecules",
      "free mean path between each molecule and others"
    ],
    answer: "average velocity of the molecules",
    explanation: "Increasing temperature increases the average kinetic energy and speed of gas molecules. They therefore strike the container walls more frequently and with greater force, increasing the pressure."
  },

  {
    id: 8,
    subject: "Chemistry",
    topic: "Chemical Bonding",
    year: 1988,
    exam: "JAMB",
    question: "The forces holding naphthalene crystals together can be overcome when naphthalene is heated to 354 K and melts. These forces are known as",
    options: [
      "coulombic",
      "ionic",
      "covalent",
      "van der Waals"
    ],
    answer: "van der Waals",
    explanation: "Naphthalene is a molecular solid. Its molecules are held together mainly by weak intermolecular van der Waals forces."
  },

  {
    id: 9,
    subject: "Chemistry",
    topic: "Atomic Structure",
    year: 1988,
    exam: "JAMB",
    question: "A metallic ion X2+ with an inert-gas structure contains 18 electrons. How many protons are there in this ion?",
    options: [
      "20",
      "18",
      "16",
      "2"
    ],
    answer: "20",
    explanation: "X2+ has lost two electrons. If the ion has 18 electrons, the neutral atom had 20 electrons. A neutral atom has the same number of protons as electrons, so X has 20 protons."
  },

  {
    id: 10,
    subject: "Chemistry",
    topic: "Periodic Table",
    year: 1988,
    exam: "JAMB",
    question: "Which of the following physical properties decreases across a period from left to right in the periodic table?",
    options: [
      "Ionization potential",
      "Electron affinity",
      "Electronegativity",
      "Atomic radius"
    ],
    answer: "Atomic radius",
    explanation: "Across a period, nuclear charge increases while electrons are added to the same principal energy level. The stronger attraction pulls the electrons closer to the nucleus, so atomic radius decreases."
  },

  {
    id: 11,
    subject: "Chemistry",
    topic: "Oxidation Numbers",
    year: 1988,
    exam: "JAMB",
    question: "What are the possible oxidation numbers for an element if its atomic number is 17?",
    options: [
      "-1 and +7",
      "-1 and +6",
      "-3 and +5",
      "-2 and +6"
    ],
    answer: "-1 and +7",
    explanation: "Atomic number 17 is chlorine. Chlorine commonly has oxidation state -1 and can have a maximum oxidation state of +7 in compounds such as perchlorates."
  },

  {
    id: 12,
    subject: "Chemistry",
    topic: "Atomic Structure",
    year: 1988,
    exam: "JAMB",
    question: "The energy change accompanying the addition of an electron to a gaseous atom is called",
    options: [
      "first ionization energy",
      "second ionization energy",
      "electron affinity",
      "electronegativity"
    ],
    answer: "electron affinity",
    explanation: "Electron affinity is the energy change associated with adding an electron to an isolated gaseous atom to form a negative ion."
  },

  {
    id: 13,
    subject: "Chemistry",
    topic: "Solutions & Solubility",
    year: 1988,
    exam: "JAMB",
    question: "The molar ratio of oxygen to nitrogen in dissolved air is 2:1 whereas the ratio is 1:4 in atmospheric air because",
    options: [
      "nitrogen is less soluble than oxygen",
      "oxygen is heavier than nitrogen",
      "nitrogen has a higher partial pressure in air",
      "gases are hydrated in water"
    ],
    answer: "nitrogen is less soluble than oxygen",
    explanation: "Oxygen is more soluble in water than nitrogen. Therefore, oxygen becomes proportionally more abundant in air dissolved in water than it is in atmospheric air."
  },

  {
    id: 14,
    subject: "Chemistry",
    topic: "Environmental Chemistry",
    year: 1988,
    exam: "JAMB",
    question: "An eruption polluted an environment with a gas suspected to be H2S, a poisonous gas. A rescue team should spray the environment with",
    options: [
      "water",
      "moist SO2",
      "acidified KMnO4 and water",
      "water, acidified KMnO4 and oxygen"
    ],
    answer: "acidified KMnO4 and water",
    explanation: "H2S is a reducing gas. Acidified potassium permanganate is an oxidizing agent and can oxidize H2S, reducing its concentration in the contaminated environment."
  },

  {
    id: 15,
    subject: "Chemistry",
    topic: "Stoichiometry",
    year: 1988,
    exam: "JAMB",
    question: "1.34 g of hydrated sodium tetraoxosulphate(VI) was heated to give an anhydrous salt weighing 0.71 g. The formula of the hydrated salt is [Na = 23, S = 32, O = 16, H = 1]",
    options: [
      "Na2SO4.7H2O",
      "Na2SO4.3H2O",
      "Na2SO4.2H2O",
      "Na2SO4.H2O"
    ],
    answer: "Na2SO4.7H2O",
    explanation: "Mass of water lost = 1.34 - 0.71 = 0.63 g. Molar mass of Na2SO4 = 142 g/mol, so moles of Na2SO4 = 0.71/142 = 0.005 mol. Moles of water = 0.63/18 = 0.035 mol. Ratio of water to salt = 0.035/0.005 = 7. Therefore, the formula is Na2SO4.7H2O."
  },

  {
    id: 16,
    subject: "Chemistry",
    topic: "Water Chemistry",
    year: 1988,
    exam: "JAMB",
    question: "The ion that may be assumed to have negligible concentration in a sample of water that lathers readily with soap is",
    options: [
      "Mg2+",
      "K+",
      "CO3^2-",
      "HCO3-"
    ],
    answer: "Mg2+",
    explanation: "Magnesium ions, together with calcium ions, cause hardness of water and prevent soap from lathering readily. Therefore, Mg2+ should be present in negligible concentration in water that lathers readily."
  },

  // Corrected to the source wording.
  {
    id: 17,
    subject: "Chemistry",
    topic: "Solutions & Crystals",
    year: 1988,
    exam: "JAMB",
    question: "A substance S is isomorphous with another substance R. When a tiny crystal of S is added into a supersaturated solution of R",
    options: [
      "S dissolves in the solution",
      "crystals of R are precipitated",
      "there is no observable change",
      "R and S react to generate heat"
    ],
    answer: "crystals of R are precipitated",
    explanation: "Because S and R are isomorphous, their crystal structures are compatible. A crystal of S can act as a seed in the supersaturated solution of R, causing R to crystallize or precipitate."
  },

  {
    id: 18,
    subject: "Chemistry",
    topic: "Acids, Bases & Salts",
    year: 1988,
    exam: "JAMB",
    question: "Which of the following dilute solutions has the lowest pH value?",
    options: [
      "calcium trioxocarbonate(IV)",
      "sodium trioxocarbonate(IV)",
      "hydrochloric acid",
      "ethanoic acid"
    ],
    answer: "hydrochloric acid",
    explanation: "Hydrochloric acid is a strong acid and ionizes almost completely in water. It therefore produces the highest hydrogen-ion concentration and the lowest pH among the listed solutions."
  },

  {
    id: 19,
    subject: "Chemistry",
    topic: "Acids, Bases & Salts",
    year: 1988,
    exam: "JAMB",
    question: "Which of the following in aqueous solution is neutral to litmus?",
    options: [
      "NH4Cl",
      "Na2CO3",
      "FeCl3",
      "NaCl"
    ],
    answer: "NaCl",
    explanation: "NaCl is formed from a strong acid, HCl, and a strong base, NaOH. Its aqueous solution is approximately neutral and does not change the colour of litmus."
  },

  {
    id: 20,
    subject: "Chemistry",
    topic: "Stoichiometry",
    year: 1988,
    exam: "JAMB",
    question: "What volume of a 0.1 M H3PO4 will be required to neutralize 45.0 cm3 of a 0.2 M NaOH solution?",
    options: [
      "10.0 cm3",
      "20.0 cm3",
      "27.0 cm3",
      "30.0 cm3"
    ],
    answer: "30.0 cm3",
    explanation: "H3PO4 + 3NaOH -> Na3PO4 + 3H2O. Moles of NaOH = 0.2 x 0.045 = 0.009 mol. Moles of H3PO4 required = 0.009/3 = 0.003 mol. Volume = 0.003/0.1 = 0.030 dm3 = 30.0 cm3."
  },

  {
    id: 21,
    subject: "Chemistry",
    topic: "Acids, Bases & Salts",
    year: 1988,
    exam: "JAMB",
    question: "Which of the following substances is a basic salt?",
    options: [
      "Na2CO3",
      "Mg(OH)Cl",
      "NaHCO3",
      "K2SO4.Al2(SO4)3.24H2O"
    ],
    answer: "Mg(OH)Cl",
    explanation: "Mg(OH)Cl is a basic salt because it contains a hydroxide group that remains in the salt after partial neutralization of a base."
  },

  {
    id: 22,
    subject: "Chemistry",
    topic: "Redox Reactions",
    year: 1988,
    exam: "JAMB",
    question: "Which of the following acts both as a reducing and an oxidizing agent?",
    options: [
      "H2",
      "SO2",
      "H2S",
      "CO"
    ],
    answer: "SO2",
    explanation: "Sulphur in SO2 has oxidation state +4. It can be oxidized to +6, so SO2 can act as a reducing agent, and it can also be reduced to lower oxidation states, so it can act as an oxidizing agent."
  },

  {
    id: 23,
    subject: "Chemistry",
    topic: "Electrochemistry",
    year: 1988,
    exam: "JAMB",
    question: "Which of the following reactions takes place in the cathode compartment during the electrolysis of copper(II) chloride solution?",
    options: [
      "Cu2+(aq) + 2e- -> Cu(s)",
      "2Cl-(aq) - 2e- -> Cl2(g)",
      "Cu(s) - 2e- -> Cu2+(aq)",
      "Cu2+(aq) + 2Cl-(aq) -> CuCl2(aq)"
    ],
    answer: "Cu2+(aq) + 2e- -> Cu(s)",
    explanation: "Reduction occurs at the cathode. Cu2+ ions gain two electrons and are deposited as copper metal."
  },

  {
    id: 24,
    subject: "Chemistry",
    topic: "Electrochemistry",
    year: 1988,
    exam: "JAMB",
    question: "The mass of a substance, M, liberated at an electrode during electrolysis is directly proportional to the quantity of electricity, Q, passing through the electrolyte. The graph of M against Q is therefore",
    options: [
      "a straight line through the origin with a positive slope",
      "a horizontal line",
      "a curve that decreases as Q increases",
      "a curve that increases and then becomes horizontal"
    ],
    answer: "a straight line through the origin with a positive slope",
    explanation: "Faraday's First Law states that M is directly proportional to Q. Therefore, a graph of M against Q is a straight line passing through the origin with a positive slope."
  },

  {
    id: 25,
    subject: "Chemistry",
    topic: "Redox Reactions",
    year: 1988,
    exam: "JAMB",
    question: "A mixture of starch solution and potassium iodide was placed in a test tube. On adding dilute tetraoxosulphate(VI) acid and then K2Cr2O7 solution, a blue-black colour was produced. In this reaction, the",
    options: [
      "iodide ion is oxidized",
      "tetraoxosulphate(VI) acid acts as an oxidizing agent",
      "starch has been oxidized",
      "K2Cr2O7 is oxidized"
    ],
    answer: "iodide ion is oxidized",
    explanation: "Acidified K2Cr2O7 oxidizes iodide ions to iodine. The iodine then reacts with starch to produce the blue-black colour."
  },

  {
    id: 26,
    subject: "Chemistry",
    topic: "Chemical Energetics",
    year: 1988,
    exam: "JAMB",
    question: "Which of the following statements is TRUE concerning the dissolution of NaOH(s) in water?",
    options: [
      "The dissolution of NaOH(s) in water is endothermic",
      "The heat of solution of NaOH(s) is positive",
      "NaOH(s) gains heat from the surroundings",
      "The heat of solution of NaOH(s) is negative"
    ],
    answer: "The heat of solution of NaOH(s) is negative",
    explanation: "Dissolving solid sodium hydroxide in water releases heat. Therefore, the process is exothermic and its enthalpy change is negative."
  },

  {
    id: 27,
    subject: "Chemistry",
    topic: "Chemical Kinetics",
    year: 1988,
    exam: "JAMB",
    question: "Which of the following will produce the greatest increase in the rate of the reaction Na2S2O3(aq) + 2HCl(aq) -> 2NaCl(aq) + H2O(l) + SO2(g) + S(s)?",
    options: [
      "a decrease in temperature and an increase in the concentration of the reactants",
      "an increase in temperature and a decrease in the concentration of the reactants",
      "an increase in temperature and an increase in the concentrations of the reactants",
      "a decrease in temperature and a decrease in the concentration of the reactants"
    ],
    answer: "an increase in temperature and an increase in the concentrations of the reactants",
    explanation: "Increasing temperature increases the kinetic energy of particles, while increasing concentration increases the frequency of collisions. Both changes increase the reaction rate."
  },

  {
    id: 28,
    subject: "Chemistry",
    topic: "Chemical Kinetics",
    year: 1988,
    exam: "JAMB",
    question: "Which property of a reversible reaction is affected by the addition of a catalyst?",
    options: [
      "heat content (enthalpy)",
      "energy of activation",
      "free energy change",
      "equilibrium position"
    ],
    answer: "energy of activation",
    explanation: "A catalyst provides an alternative reaction pathway with a lower activation energy. It does not change the equilibrium position or the thermodynamic enthalpy and free-energy change."
  },

  {
    id: 29,
    subject: "Chemistry",
    topic: "Gases & Non-Metals",
    year: 1988,
    exam: "JAMB",
    question: "Which of the following gases is commonly used in portable fire extinguishers?",
    options: [
      "Carbon(II) oxide",
      "Carbon(IV) oxide",
      "Sulphur(IV) oxide",
      "Ammonia"
    ],
    answer: "Carbon(IV) oxide",
    explanation: "Carbon(IV) oxide is non-flammable and denser than air. It forms a blanket over the fire and reduces the supply of oxygen."
  },

  {
    id: 30,
    subject: "Chemistry",
    topic: "Redox Reactions",
    year: 1988,
    exam: "JAMB",
    question: "When H2S gas is passed into a solution of iron(III) chloride, the colour changes from yellow to green. This is because",
    options: [
      "H2S is reduced to S",
      "Fe3+ ions are oxidized by H2S",
      "H2S is oxidized by Fe3+",
      "Fe3+ ions are reduced to Fe2+ ions"
    ],
    answer: "Fe3+ ions are reduced to Fe2+ ions",
    explanation: "Fe3+ ions oxidize H2S to sulphur while Fe3+ gains electrons and is reduced to Fe2+. The Fe2+ ions give the solution its green colour."
  },

  {
    id: 31,
    subject: "Chemistry",
    topic: "Inorganic Chemistry",
    year: 1988,
    exam: "JAMB",
    question: "Given the reactions Fe(s) + X(NO3)2(aq) -> Fe(NO3)2(aq) + X(s) and H2(g) + XO(s) -> X(s) + H2O(g), the metal X is likely to be",
    options: [
      "copper",
      "zinc",
      "calcium",
      "lead"
    ],
    answer: "copper",
    explanation: "Iron displaces X from its salt, so iron is more reactive than X. Hydrogen also reduces the oxide of X, indicating that X is less reactive than hydrogen. Copper fits both conditions."
  },

  {
    id: 32,
    subject: "Chemistry",
    topic: "Laboratory Apparatus",
    year: 1988,
    exam: "JAMB",
    question: "Carbon(II) oxide may be collected by water displacement because it",
    options: [
      "is heavier than air",
      "is less dense than air",
      "is insoluble in water",
      "burns in oxygen to form carbon(IV) oxide"
    ],
    answer: "is insoluble in water",
    explanation: "Carbon(II) oxide is only very slightly soluble in water, so it can be collected by displacement of water."
  },

  {
    id: 33,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1988,
    exam: "JAMB",
    question: "In the reaction C5H10O5(s) + concentrated H2SO4 -> 5C(s) + 5H2O, concentrated H2SO4 is acting as",
    options: [
      "a reducing agent",
      "an oxidizing agent",
      "a dehydrating agent",
      "a catalyst"
    ],
    answer: "a dehydrating agent",
    explanation: "Concentrated sulphuric acid removes water from the carbohydrate, leaving carbon as a black residue. It therefore acts as a dehydrating agent."
  },

  {
    id: 34,
    subject: "Chemistry",
    topic: "Gases & Non-Metals",
    year: 1988,
    exam: "JAMB",
    question: "Suitable reagents for the standard laboratory preparation of nitrogen gas are",
    options: [
      "sodium trioxonitrate(III) and ammonium chloride",
      "sodium trioxonitrate(V) and ammonium chloride",
      "sodium chloride and ammonium trioxonitrate(V)",
      "sodium chloride and ammonium trioxonitrate(III)"
    ],
    answer: "sodium trioxonitrate(III) and ammonium chloride",
    explanation: "Sodium nitrite, NaNO2, reacts with ammonium chloride to form ammonium nitrite in situ. Ammonium nitrite decomposes to nitrogen gas and water."
  },

  {
    id: 35,
    subject: "Chemistry",
    topic: "Inorganic Chemistry",
    year: 1988,
    exam: "JAMB",
    question: "The thermal decomposition of copper(II) trioxonitrate(V) crystals yields copper(II) oxide, oxygen and",
    options: [
      "nitrogen(I) oxide",
      "nitrogen(II) oxide",
      "nitrogen(IV) oxide",
      "nitrogen gas"
    ],
    answer: "nitrogen(IV) oxide",
    explanation: "On heating, copper(II) nitrate decomposes according to 2Cu(NO3)2 -> 2CuO + 4NO2 + O2. Therefore, nitrogen(IV) oxide is produced."
  },

  {
    id: 36,
    subject: "Chemistry",
    topic: "Applied Chemistry",
    year: 1988,
    exam: "JAMB",
    question: "Chlorine gas is produced commercially on a large scale by the",
    options: [
      "electrolysis of dilute hydrochloric acid",
      "electrolysis of brine",
      "neutralization of hydrogen chloride",
      "heating of potassium trioxochlorate(V)"
    ],
    answer: "electrolysis of brine",
    explanation: "Chlorine is produced industrially by electrolysis of concentrated sodium chloride solution, known as brine."
  },

  {
    id: 37,
    subject: "Chemistry",
    topic: "Applied Chemistry",
    year: 1988,
    exam: "JAMB",
    question: "Which of the following compounds is used in the manufacture of glass?",
    options: [
      "Sodium chloride",
      "Sodium trioxocarbonate(IV)",
      "Sodium tetraoxosulphate(VI)",
      "Sodium trioxonitrate(V)"
    ],
    answer: "Sodium trioxocarbonate(IV)",
    explanation: "Sodium carbonate is a major raw material in the manufacture of soda-lime glass, together with silica and calcium carbonate."
  },

  {
    id: 38,
    subject: "Chemistry",
    topic: "Applied Chemistry",
    year: 1988,
    exam: "JAMB",
    question: "Aluminium is extracted commercially from its purified ore by",
    options: [
      "heating aluminium oxide with coke in a furnace",
      "the electrolysis of fused aluminium oxide in molten cryolite",
      "treating cryolite with sodium hydroxide solution under pressure",
      "heating sodium aluminium silicate to a high temperature"
    ],
    answer: "the electrolysis of fused aluminium oxide in molten cryolite",
    explanation: "Aluminium is extracted by the Hall-Heroult process. Purified aluminium oxide is dissolved in molten cryolite and electrolysed."
  },

  {
    id: 39,
    subject: "Chemistry",
    topic: "Electrochemistry",
    year: 1988,
    exam: "JAMB",
    question: "Crude copper can be purified commercially through an electrolytic cell if",
    options: [
      "platinum electrodes are used",
      "the crude copper block is made the anode of the cell",
      "the crude copper block is made the cathode of the cell",
      "crude copper electrodes are used on both sides"
    ],
    answer: "the crude copper block is made the anode of the cell",
    explanation: "During electrolytic refining, impure copper is made the anode and pure copper is deposited on the cathode. Copper atoms from the anode enter the solution as Cu2+ ions."
  },

  {
    id: 40,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1988,
    exam: "JAMB",
    question: "The correct IUPAC name for CH3-CH2-CH(CH3)-COOH is",
    options: [
      "2-methylbutanoic acid",
      "2-methyl-1-hydroxyketone",
      "2-methyl-1-hydroxy aldehyde",
      "2-methylpentanoic acid"
    ],
    answer: "2-methylbutanoic acid",
    explanation: "The longest chain containing the carboxyl carbon has four carbon atoms, giving butanoic acid. The methyl group is attached to carbon 2, so the name is 2-methylbutanoic acid."
  },

  {
    id: 41,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1988,
    exam: "JAMB",
    question: "Alkanoates are formed by the reaction of alkanoic acids with",
    options: [
      "alkyl halides",
      "alkanols",
      "ethers",
      "sodium"
    ],
    answer: "alkanols",
    explanation: "Alkanoic acids react with alkanols in the presence of an acid catalyst to form alkanoates (esters) and water."
  },

  {
    id: 42,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1988,
    exam: "JAMB",
    question: "The acidic hydrogen in the compound H-C≡C-CH=CH-CH3 is the hydrogen attached to carbon number",
    options: [
      "5",
      "3",
      "4",
      "1"
    ],
    answer: "1",
    explanation: "The hydrogen attached to carbon 1 is acidic because carbon 1 is part of a terminal alkyne. The sp-hybridized carbon has high s-character, which makes the C-H bond relatively acidic."
  },

  {
    id: 43,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1988,
    exam: "JAMB",
    question: "The four broad classes of hydrocarbons are",
    options: [
      "ethane, ethene, ethyne and benzene",
      "alkanes, alkenes, alkynes and aromatics",
      "alkanes, alkenes, alkynes and benzene",
      "methane, ethane, propane and butane"
    ],
    answer: "alkanes, alkenes, alkynes and aromatics",
    explanation: "Hydrocarbons are broadly classified as alkanes, alkenes, alkynes and aromatic hydrocarbons."
  },

  {
    id: 44,
    subject: "Chemistry",
    topic: "Applied Chemistry",
    year: 1988,
    exam: "JAMB",
    question: "The process represented by alkanes heated at about 400-700 degrees C in the presence of a catalyst to produce smaller alkanes, alkenes and hydrogen is known as",
    options: [
      "Photolysis",
      "Cracking",
      "Isomerization",
      "Reforming"
    ],
    answer: "Cracking",
    explanation: "Cracking involves breaking large hydrocarbon molecules into smaller molecules. It can produce smaller alkanes, alkenes and hydrogen."
  },

  {
    id: 45,
    subject: "Chemistry",
    topic: "Applied Chemistry",
    year: 1988,
    exam: "JAMB",
    question: "In the reaction 2(C6H10O5)n + nH2O -> nC12H22O11, the enzyme diastase is functioning as",
    options: [
      "a dehydrating agent",
      "a reducing agent",
      "an oxidizing agent",
      "a biological catalyst"
    ],
    answer: "a biological catalyst",
    explanation: "Diastase is an enzyme. It speeds up the hydrolysis of starch to maltose without being consumed, so it acts as a biological catalyst."
  },

  {
    id: 46,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1988,
    exam: "JAMB",
    question: "Which of the following compounds has the highest boiling point?",
    options: [
      "CH3-CH2-CH2-CH2-OH",
      "CH3-CH2-CH2-CHO",
      "CH3-CH2-CH2-CH3",
      "CH3-CH2-O-CH2-CH3"
    ],
    answer: "CH3-CH2-CH2-CH2-OH",
    explanation: "Butan-1-ol has an -OH group and can form hydrogen bonds between its molecules. These strong intermolecular forces give it a higher boiling point than the other compounds listed."
  },

  {
    id: 47,
    subject: "Chemistry",
    topic: "Applied Chemistry",
    year: 1988,
    exam: "JAMB",
    question: "Commercial synthetic detergents have the general structural formula",
    options: [
      "R-(CH2)n-OH",
      "R-SO3Na",
      "R-CO2Na",
      "R-CO2H"
    ],
    answer: "R-SO3Na",
    explanation: "Many synthetic detergents are sodium salts of long-chain sulphonates, represented generally as R-SO3Na."
  },

  {
    id: 48,
    subject: "Chemistry",
    topic: "Applied Chemistry",
    year: 1988,
    exam: "JAMB",
    question: "What industrial process must coal undergo to produce coal gas, coal tar, ammoniacal liquor and coke?",
    options: [
      "steam distillation",
      "destructive distillation",
      "liquefaction",
      "hydrolysis"
    ],
    answer: "destructive distillation",
    explanation: "Destructive distillation involves heating coal strongly in the absence of air. The process produces coke, coal gas, coal tar and ammoniacal liquor."
  },

  {
    id: 49,
    subject: "Chemistry",
    topic: "Separation Techniques",
    year: 1988,
    exam: "JAMB",
    question: "Which of the following observations supports the conclusion that a solid chemical sample is an impure mixture?",
    options: [
      "The solid can be ground to a fine powder",
      "The density of the solid is 2.25 g dm-3",
      "The solid has a wide melting range of 300 degrees C to 375 degrees C",
      "The solid absorbs moisture from the atmosphere"
    ],
    answer: "The solid has a wide melting range of 300 degrees C to 375 degrees C",
    explanation: "A pure crystalline substance normally has a sharp melting point. An impure solid usually melts over a range of temperatures."
  },

  {
    id: 50,
    subject: "Chemistry",
    topic: "Stoichiometry",
    year: 1988,
    exam: "JAMB",
    question: "The empirical molar ratio of carbon to hydrogen in a volatile liquid compound is 1:2. If 0.12 g of the liquid evaporated at S.T.P. gives 32 cm3 of vapour, the molecular formula of the liquid is [Molar volume = 22400 cm3, C = 12, H = 1]",
    options: [
      "CH4",
      "C3H6",
      "C4H8",
      "C6H12"
    ],
    answer: "C6H12",
    explanation: "Moles of vapour = 32/22400 = 0.0014286 mol. Molar mass = 0.12/0.0014286 = 84 g/mol. The empirical formula from the 1:2 ratio is CH2, with formula mass 14. Therefore, 84/14 = 6, so the molecular formula is C6H12."
  }

];

export default chemJamb1988;