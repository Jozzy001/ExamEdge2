// JAMB 1983 Chemistry Past Questions
// Audited against the supplied JAMB Chemistry 1983-2004 source.
// Corrected factual errors, calculation errors, OCR/transcription errors, and explanations.
// Questions referring to figures have been reworded only where the supplied numerical/textual data
// are sufficient to determine the answer.

const chemJamb1983 = [

  {
    id: 1, subject: "Chemistry", topic: "Qualitative Analysis", year: 1983, exam: "JAMB",

    question: "X is a crystalline salt of sodium. Solution of X in water turns litmus red and produces a gas which turns lime water milky when added to sodium carbonate. With barium chloride solution, X gives a white precipitate which is insoluble in dilute hydrochloric acid. X is",

    options: ["Na2CO3", "NaHCO3", "NaHSO4", "Na2SO3", "Na2SO4"],

    answer: "NaHSO4",

    explanation: "X gives an acidic solution, reacts with sodium carbonate to release carbon dioxide, and contains sulphate ions because it gives an insoluble white BaSO4 precipitate with barium chloride. Therefore, X is NaHSO4."
  },

  {
    id: 2, subject: "Chemistry", topic: "Applied Chemistry", year: 1983, exam: "JAMB",

    question: "The alkanol obtained from the production of soap is",

    options: ["ethanol", "methanol", "glycerol", "propanol", "glycol"],

    answer: "glycerol",

    explanation: "Saponification of fats or oils with an alkali produces soap and glycerol as the alkanol by-product."
  },

  {
    id: 3, subject: "Chemistry", topic: "Gases & Non-Metals", year: 1983, exam: "JAMB",

    question: "The flame used by welders in cutting metals is",

    options: ["butane gas flame", "acetylene flame", "kerosene flame", "oxy-acetylene flame", "oxygen flame"],

    answer: "oxy-acetylene flame",

    explanation: "An oxy-acetylene flame is produced by burning acetylene in oxygen. It reaches a very high temperature and is suitable for cutting and welding metals."
  },

  {
    id: 4, subject: "Chemistry", topic: "Organic Chemistry", year: 1983, exam: "JAMB",

    question: "Consecutive members of an alkane homologous series differ by",

    options: ["CH", "CH2", "CH3", "CnHn", "CnH2n+2"],

    answer: "CH2",

    explanation: "Successive members of a homologous series differ by one -CH2- unit."
  },

  {
    id: 5, subject: "Chemistry", topic: "Atomic Structure", year: 1983, exam: "JAMB",

    question: "If an element has the electronic configuration 1s2 2s2 2p6 3s2 3p2, it is",

    options: ["a metal", "an alkaline earth metal", "an s-block element", "a p-block element", "a transition element"],

    answer: "a p-block element",

    explanation: "The last electron enters a p-subshell, 3p2. Therefore, the element belongs to the p-block."
  },

  {
    id: 6, subject: "Chemistry", topic: "Stoichiometry", year: 1983, exam: "JAMB",

    question: "Some copper(II) sulphate pentahydrate (CuSO4.5H2O) was heated at 120°C with the following results: Wt of crucible = 10.00 g; Wt of crucible + CuSO4.5H2O = 14.98 g; Wt of crucible + residue = 13.54 g. How many molecules of water of crystallization were lost? [H=1, Cu=63.5, O=16, S=32]",

    options: ["1", "2", "3", "4", "5"],

    answer: "4",

    explanation: "Mass of hydrated salt = 14.98 - 10.00 = 4.98 g. Mass of residue = 13.54 - 10.00 = 3.54 g. Water lost = 4.98 - 3.54 = 1.44 g. Moles of CuSO4 = 3.54/159.5 = 0.0222 mol. Moles of H2O lost = 1.44/18 = 0.0800 mol. The ratio is approximately 0.0800/0.0222 = 3.6, which corresponds to about 4 molecules of water per formula unit."
  },

  {
    id: 7, subject: "Chemistry", topic: "Chemical Bonding", year: 1983, exam: "JAMB",

    question: "The three-dimensional shape of methane is",

    options: ["hexagonal", "trigonal", "linear", "tetrahedral", "cubical"],

    answer: "tetrahedral",

    explanation: "Methane has four bonding pairs around carbon. These bonds arrange themselves tetrahedrally to minimize electron-pair repulsion."
  },

  {
    id: 8, subject: "Chemistry", topic: "Organic Chemistry", year: 1983, exam: "JAMB",

    question: "Questions 8-10 are based on an unknown organic compound X with a relative molecular mass of 180. It is a colourless crystalline solid, readily soluble in water. X contains C, H and O in the atomic ratio 1:2:1. In the presence of yeast and in the absence of air, X is converted to compound Y and a colourless gas. Compound Y reacts with sodium metal to produce a gas Z which gives a 'pop' sound with a glowing splint. Y also reacts with ethanoic acid to give a sweet-smelling compound W. Compound W is",

    options: ["a soap", "an oil", "an alkane", "an ester", "sucrose"],

    answer: "an ester",

    explanation: "X is glucose and ferments to ethanol, Y. Ethanol reacts with ethanoic acid to form an ester, ethyl ethanoate, which has a sweet smell."
  },

  {
    id: 9, subject: "Chemistry", topic: "Organic Chemistry", year: 1983, exam: "JAMB",

    question: "The molecular formula of compound X described in the text is",

    options: ["C6H12O6", "C6H10O5", "C5H10O5", "C4H8O4", "C3H6O3"],

    answer: "C6H12O6",

    explanation: "The atomic ratio 1:2:1 gives the empirical formula CH2O, with relative formula mass 30. Since Mr = 180, the molecular formula is (CH2O)6 = C6H12O6."
  },

  {
    id: 10, subject: "Chemistry", topic: "Applied Chemistry", year: 1983, exam: "JAMB",

    question: "The reaction of X with yeast forms the basis of the",

    options: ["plastic industry", "textile industry", "brewing industry", "soap industry", "dyeing industry"],

    answer: "brewing industry",

    explanation: "Yeast ferments sugars anaerobically to produce ethanol and carbon dioxide. This process is fundamental to brewing."
  },

  {
    id: 11, subject: "Chemistry", topic: "Separation Techniques", year: 1983, exam: "JAMB",

    question: "A mixture of common salt, ammonium chloride and barium sulphate can best be separated by",

    options: [
      "addition of water followed by filtration then sublimation",
      "addition of water followed by sublimation then filtration",
      "sublimation followed by addition of water then filtration",
      "fractional distillation",
      "fractional crystallization"
    ],

    answer: "sublimation followed by addition of water then filtration",

    explanation: "Ammonium chloride is first removed by sublimation. Water is then added to dissolve sodium chloride, and filtration separates the insoluble barium sulphate."
  },

  {
    id: 12, subject: "Chemistry", topic: "Gas Laws", year: 1983, exam: "JAMB",

    question: "Which of the following relationships between the pressure P, the volume V and the temperature T represents ideal gas behaviour?",

    options: ["P proportional to VT", "P proportional to T/V", "PT proportional to V", "PV proportional to VT", "P proportional to V/T"],

    answer: "P proportional to T/V",

    explanation: "From PV = nRT, for a fixed amount of gas, P = nRT/V. Therefore, P is proportional to T/V."
  },

  {
    id: 13, subject: "Chemistry", topic: "Gases & Non-Metals", year: 1983, exam: "JAMB",

    question: "In an experiment in which solid ammonium chloride is heated in a test tube with damp litmus paper at the top, the litmus paper will initially",

    options: ["be bleached", "turn green", "turn red", "turn blue", "turn black"],

    answer: "turn blue",

    explanation: "On heating ammonium chloride, ammonia and hydrogen chloride are produced. Ammonia diffuses faster and reaches the damp litmus paper first, turning it blue."
  },

  {
    id: 14, subject: "Chemistry", topic: "Qualitative Analysis", year: 1983, exam: "JAMB",

    question: "The colour imparted to a flame by calcium ion is",

    options: ["green", "blue", "brick-red", "yellow", "lilac"],

    answer: "brick-red",

    explanation: "Calcium ions give a characteristic brick-red flame colour."
  },

  {
    id: 15, subject: "Chemistry", topic: "Chemical Equilibrium", year: 1983, exam: "JAMB",

    question: "In the reaction M + N ⇌ P; ΔH = +Q kJ. Which of the following would increase the concentration of the product?",

    options: ["Decreasing the concentration of N", "Increasing the concentration of P", "Adding a suitable catalyst", "Decreasing the temperature", "Increasing the temperature"],

    answer: "Increasing the temperature",

    explanation: "The forward reaction is endothermic because ΔH is positive. Increasing the temperature shifts the equilibrium toward the products."
  },

  {
    id: 16, subject: "Chemistry", topic: "Redox Reactions", year: 1983, exam: "JAMB",

    question: "In which of the following processes is iron being oxidized? (1) Fe + H2SO4 -> H2 + FeSO4 (2) FeSO4 + H2S -> FeS + H2SO4 (3) 2FeCl2 + Cl2 -> 2FeCl3 (4) 2FeCl3 + SnCl2 -> 2FeCl2 + SnCl4",

    options: ["1 only", "2 only", "3 only", "1 and 3", "2 and 4"],

    answer: "1 and 3",

    explanation: "In reaction 1, iron changes from oxidation state 0 to +2. In reaction 3, iron changes from +2 to +3. Both are oxidations."
  },

  {
    id: 17, subject: "Chemistry", topic: "Electrochemistry", year: 1983, exam: "JAMB",

    question: "A current was passed for 10 minutes and 0.63 g of copper was found to be deposited on the cathode of a CuSO4 cell. The weight of silver deposited in a series-connected AgNO3 cell during the same period would be [Cu = 63, Ag = 108]",

    options: ["0.54 g", "1.08 g", "1.62 g", "2.16 g", "3.24 g"],

    answer: "2.16 g",

    explanation: "Using Faraday's law, equivalent weight of Cu = 63/2 = 31.5 and equivalent weight of Ag = 108. Therefore, mass of Ag = 0.63 x 108/31.5 = 2.16 g."
  },

  {
    id: 18, subject: "Chemistry", topic: "Electrochemistry", year: 1983, exam: "JAMB",

    question: "In the reaction Fe + Cu2+ -> Fe2+ + Cu, iron displaces copper ions to form copper. This is due to the fact that",

    options: [
      "iron is in the metallic form while the copper is in the ionic form",
      "the atomic weight of copper is greater than that of iron",
      "copper metal has more electrons than iron metal",
      "iron is an inert metal",
      "iron is higher in the electrochemical series than copper"
    ],

    answer: "iron is higher in the electrochemical series than copper",

    explanation: "Iron is more readily oxidized than copper because iron is higher than copper in the electrochemical series. It therefore displaces Cu2+ from solution."
  },

  {
    id: 19, subject: "Chemistry", topic: "Organic Chemistry", year: 1983, exam: "JAMB",

    question: "The correct name of the compound with the structural formula C2H5-C(CH3)=CH2 is",

    options: ["2-methylbut-1-ene", "2-methylbut-2-ene", "2-methylprop-1-ene", "2-ethylprop-1-ene", "2-ethylprop-2-ene"],

    answer: "2-methylbut-1-ene",

    explanation: "The longest chain containing the double bond has four carbon atoms. Numbering from the end nearest the double bond gives but-1-ene with a methyl group at carbon 2."
  },

  {
    id: 20, subject: "Chemistry", topic: "Organic Chemistry", year: 1983, exam: "JAMB",

    question: "How many isomeric forms are there for the molecular formula C3H6Br2?",

    options: ["1", "2", "3", "4", "5"],

    answer: "4",

    explanation: "The four structural isomers are 1,1-dibromopropane, 1,2-dibromopropane, 1,3-dibromopropane and 2,2-dibromopropane."
  },

  {
    id: 21, subject: "Chemistry", topic: "Gases & Non-Metals", year: 1983, exam: "JAMB",

    question: "A piece of burning sulphur will continue to burn in a gas jar of oxygen to give misty fumes which readily dissolve in water. The resulting liquid is",

    options: ["sulphur(IV) trioxide", "tetraoxosulphate(VI) acid", "trioxosulphate(IV) acid", "dioxosulphate(II) acid", "hydrogen sulphide"],

    answer: "trioxosulphate(IV) acid",

    explanation: "Sulphur burns in oxygen to form sulphur(IV) oxide, SO2. Dissolving SO2 in water forms trioxosulphate(IV) acid, H2SO3."
  },

  {
    id: 22, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1983, exam: "JAMB",

    question: "Sodium sulphate decahydrate (Na2SO4.10H2O) on exposure to air loses all its water of crystallization. The process of loss is known as",

    options: ["Efflorescence", "Hygroscopy", "Deliquescence", "Effervescence", "Dehydration"],

    answer: "Efflorescence",

    explanation: "Efflorescence is the spontaneous loss of water of crystallization from a hydrated salt when exposed to air."
  },

  {
    id: 23, subject: "Chemistry", topic: "Electrochemistry", year: 1983, exam: "JAMB",

    question: "Which of the following happens during the electrolysis of molten sodium chloride?",

    options: ["Sodium ion loses an electron", "Chlorine atom gains an electron", "Chloride ion gains an electron", "Sodium ion is oxidized", "Chloride ion is oxidized"],

    answer: "Chloride ion is oxidized",

    explanation: "At the anode, chloride ions lose electrons to form chlorine. Loss of electrons is oxidation."
  },

  {
    id: 24, subject: "Chemistry", topic: "Applied Chemistry", year: 1983, exam: "JAMB",

    question: "Crude petroleum pollutant usually seen on some Nigerian creeks and waterways can be dispersed or removed by",

    options: [
      "heating the affected parts in order to boil off the petroleum",
      "mechanically stirring to dissolve the petroleum in water",
      "pouring organic solvents to dissolve the petroleum",
      "spraying the water with detergents",
      "cooling to freeze out the petroleum"
    ],

    answer: "spraying the water with detergents",

    explanation: "Detergents can emulsify oil, breaking an oil slick into smaller droplets and helping disperse it."
  },

  {
    id: 25, subject: "Chemistry", topic: "Atomic Structure", year: 1983, exam: "JAMB",

    question: "An element is electronegative if",

    options: [
      "it has a tendency to exist in the gaseous form",
      "its ions dissolve readily in water",
      "it has a tendency to lose electrons",
      "it has a tendency to gain electrons",
      "it readily forms covalent bonds"
    ],

    answer: "it has a tendency to gain electrons",

    explanation: "Among the given options, the tendency to gain electrons is the closest description of an electronegative element. More precisely, electronegativity is the tendency of an atom to attract shared electrons toward itself."
  },

  {
    id: 26, subject: "Chemistry", topic: "Solutions & Solubility", year: 1983, exam: "JAMB",

    question: "Solution X, Y and Z have pH values 3.0, 5.0 and 9.0 respectively. Which of the following statements is correct?",

    options: [
      "All the solutions are acidic",
      "All the solutions are basic",
      "Y and Z are more acidic than water",
      "Y is more acidic than X",
      "Z is the least acidic"
    ],

    answer: "Z is the least acidic",

    explanation: "A higher pH corresponds to a lower hydrogen-ion concentration. Z has the highest pH, 9.0, so it is the least acidic."
  },

  {
    id: 27, subject: "Chemistry", topic: "Chemical Energetics", year: 1983, exam: "JAMB",

    question: "In the reactions: (1) H2(g) + 1/2O2(g) -> H2O(l); ΔH = -286 kJ (2) C(s) + O2(g) -> CO2(g); ΔH = -406 kJ, the equations imply that",

    options: [
      "more heat is absorbed in (1)",
      "more heat is absorbed in (2)",
      "less heat is evolved in (1)",
      "reaction (2) proceeds faster than (1)",
      "reaction (1) proceeds faster than (2)"
    ],

    answer: "less heat is evolved in (1)",

    explanation: "Both reactions are exothermic. Reaction 1 releases 286 kJ, while reaction 2 releases 406 kJ. Therefore, less heat is evolved in reaction 1."
  },

  {
    id: 28, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1983, exam: "JAMB",

    question: "Which of these metals, Mg, Fe, Pb and Cu will dissolve in dilute HCl?",

    options: ["All the metals", "Mg, Fe and Cu", "Mg, Fe and Pb", "Mg and Fe only", "Mg only"],

    answer: "Mg, Fe and Pb",

    explanation: "Mg, Fe and Pb are above hydrogen in the electrochemical series and can react with dilute hydrochloric acid. Copper is below hydrogen and does not normally displace it."
  },

  {
    id: 29, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1983, exam: "JAMB",

    question: "Stainless steel is an alloy of",

    options: ["Carbon, iron and lead", "Carbon, iron and chromium", "Carbon, iron and copper", "Carbon, iron and silver", "Carbon and iron only"],

    answer: "Carbon, iron and chromium",

    explanation: "Stainless steel is primarily an alloy of iron containing chromium, with carbon and sometimes other alloying elements."
  },

  {
    id: 30, subject: "Chemistry", topic: "Stoichiometry", year: 1983, exam: "JAMB",

    question: "What volume of 0.50 M H2SO4 will exactly neutralize 20 cm3 of 0.1 M NaOH solution?",

    options: ["2.0 cm3", "5.0 cm3", "6.8 cm3", "8.3 cm3", "10.4 cm3"],

    answer: "2.0 cm3",

    explanation: "H2SO4 + 2NaOH -> Na2SO4 + 2H2O. Moles of NaOH = 0.1 x 0.020 = 0.002 mol. Required H2SO4 = 0.001 mol. Volume = 0.001/0.50 = 0.002 dm3 = 2.0 cm3."
  },

  {
    id: 31, subject: "Chemistry", topic: "Gases & Non-Metals", year: 1983, exam: "JAMB",

    question: "Which of the following pairs of gases will NOT react further with oxygen at a temperature between 30°C and 400°C?",

    options: ["SO2 and NH3", "CO2 and H2", "NO2 and SO3", "SO3 and NO", "CO and H2"],

    answer: "NO2 and SO3",

    explanation: "In NO2, nitrogen is already in a high oxidation state, and SO3 contains sulphur in its highest common oxidation state of +6. Neither is readily oxidized further by oxygen under the stated conditions."
  },

  {
    id: 32, subject: "Chemistry", topic: "Applied Chemistry", year: 1983, exam: "JAMB",

    question: "Some metals are extracted from their ores after preliminary treatments by electrolysis (L), some by thermal reaction (T) and some by a combination of both processes (TL). Which set-up for the extraction of iron, copper and aluminium is correct?",

    options: [
      "Iron (L), copper (L), aluminium (T)",
      "Iron (T), copper (L), aluminium (T)",
      "Iron (TL), copper (TL), aluminium (TL)",
      "Iron (L), copper (T), aluminium (T)",
      "Iron (T), copper (L), aluminium (TL)"
    ],

    answer: "Iron (T), copper (L), aluminium (TL)",

    explanation: "Iron is extracted thermally in a blast furnace. Copper undergoes thermal extraction followed by electrolytic refining, while aluminium is extracted by electrolysis after preliminary treatment of its ore."
  },

  {
    id: 33, subject: "Chemistry", topic: "Separation Techniques", year: 1983, exam: "JAMB",

    question: "In the preparation of pure crystals of Cu(NO3)2 starting with CuO, a student gave the following statements as steps he employed. Which of these shows a flaw in his report?",

    options: [
      "Some CuO was reacted with excess dilute H2SO4",
      "The solution was concentrated",
      "When the concentrate was cooled, crystals formed were removed by filtration",
      "The crystals were washed with very cold water",
      "The crystals were then allowed to dry"
    ],

    answer: "Some CuO was reacted with excess dilute H2SO4",

    explanation: "Copper(II) nitrate should be prepared by reacting CuO with dilute nitric acid, HNO3. Using H2SO4 would produce copper(II) sulphate instead."
  },

  {
    id: 34, subject: "Chemistry", topic: "Separation Techniques", year: 1983, exam: "JAMB",

    question: "Which of the following separation processes is most likely to yield high quality ethanol (>95%) from palm wine?",

    options: [
      "Fractional distillation without a dehydrant",
      "Simple distillation without a dehydrant",
      "Fractional distillation with a dehydrant",
      "Column chromatography",
      "Evaporation"
    ],

    answer: "Fractional distillation with a dehydrant",

    explanation: "Fractional distillation concentrates ethanol, but ethanol and water form an azeotrope near 95.6% ethanol. A dehydrating agent is needed to obtain ethanol above this concentration."
  },

  {
    id: 35, subject: "Chemistry", topic: "Gas Laws", year: 1983, exam: "JAMB",

    question: "Increasing the pressure of a gas",

    options: [
      "lowers the average kinetic energy of the molecules",
      "decreases the density of the gas",
      "decreases the temperature of the gas",
      "increases the density of the gas",
      "increases the volume of the gas"
    ],

    answer: "increases the density of the gas",

    explanation: "If the pressure is increased by compressing a gas while its mass remains constant, its volume decreases. Since density is mass divided by volume, its density increases."
  },

  {
    id: 36, subject: "Chemistry", topic: "Stoichiometry", year: 1983, exam: "JAMB",

    question: "2.5 g of a hydrated barium salt gave on heating 2.13 g of the anhydrous salt. Given that the relative molecular mass of the anhydrous salt is 208, the number of molecules of water of crystallization of the barium salt is",

    options: ["10", "7", "5", "2", "1"],

    answer: "2",

    explanation: "Water lost = 2.50 - 2.13 = 0.37 g. Moles of anhydrous salt = 2.13/208 = 0.01024 mol. Moles of water = 0.37/18 = 0.02056 mol. Ratio of water to salt = 0.02056/0.01024 ≈ 2. Therefore, the hydrate contains 2 molecules of water of crystallization."
  },

  {
    id: 37, subject: "Chemistry", topic: "Solutions & Solubility", year: 1983, exam: "JAMB",

    question: "3.06 g of a sample of potassium trioxochlorate(V) (KClO3) was required to make a saturated solution with 10 cm3 of water at 25°C. The solubility of the salt at 25°C is [K=39, Cl=35.5, O=16]",

    options: ["5.0 moles dm-3", "3.0 moles dm-3", "2.5 moles dm-3", "1.0 moles dm-3", "0.5 moles dm-3"],

    answer: "2.5 moles dm-3",

    explanation: "Mr of KClO3 = 39 + 35.5 + 48 = 122.5. Moles in 10 cm3 = 3.06/122.5 = 0.025 mol. Therefore, in 1 dm3 the amount is 0.025 x 100 = 2.5 mol. Solubility = 2.5 mol dm-3."
  },

  {
    id: 38, subject: "Chemistry", topic: "Applied Chemistry", year: 1983, exam: "JAMB",

    question: "The cracking process is very important in the petroleum industry because it",

    options: ["gives purer products", "yields more lubricants", "yields more engine fuels", "yields more asphalt", "yields more candle wax"],

    answer: "yields more engine fuels",

    explanation: "Cracking breaks large hydrocarbon molecules into smaller molecules, increasing the supply of useful engine fuels."
  },

  {
    id: 39, subject: "Chemistry", topic: "Gases & Non-Metals", year: 1983, exam: "JAMB",

    question: "A gas that can behave as a reducing agent towards chlorine and as an oxidizing agent toward hydrogen sulphide is",

    options: ["O2", "NO", "SO2", "NH3", "CO2"],

    answer: "SO2",

    explanation: "SO2 can reduce chlorine to chloride while being oxidized to sulphate. It can also oxidize H2S, with sulphur being formed."
  },

  {
    id: 40, subject: "Chemistry", topic: "Qualitative Analysis", year: 1983, exam: "JAMB",

    question: "Which of the following solutions will give a white precipitate with barium chloride solution and a green flame test?",

    options: ["Na2SO4", "CuSO4", "CaSO4", "CaCl2", "(NH4)2SO4"],

    answer: "CuSO4",

    explanation: "CuSO4 contains sulphate ions, which form a white BaSO4 precipitate with barium chloride. Copper compounds can give a blue-green or green flame colour."
  },

  {
    id: 41, subject: "Chemistry", topic: "Atomic Structure", year: 1983, exam: "JAMB",

    question: "The mass of an atom is determined by",

    options: [
      "its ionization potential",
      "its electrochemical potential",
      "the number of protons",
      "the number of neutrons and protons",
      "the number of neutrons and electrons"
    ],

    answer: "the number of neutrons and protons",

    explanation: "Almost all of an atom's mass is concentrated in its nucleus, which contains protons and neutrons. The electron mass is negligible in comparison."
  },

  {
    id: 42, subject: "Chemistry", topic: "Acids, Bases & Salts", year: 1983, exam: "JAMB",

    question: "Which of the following is a neutralization reaction?",

    options: [
      "Addition of chloride solution",
      "Addition of trioxonitrate(V) acid (nitric acid) to distilled water",
      "Addition of trioxonitrate(V) acid (nitric acid) to tetraoxosulphate(VI) acid (sulphuric acid)",
      "Addition of trioxonitrate(V) (potassium nitrate) solution",
      "Addition of trioxonitrate(V) acid (nitric acid) to potassium hydroxide solution"
    ],

    answer: "Addition of trioxonitrate(V) acid (nitric acid) to potassium hydroxide solution",

    explanation: "Neutralization is the reaction between an acid and a base to form a salt and water. HNO3 reacts with KOH to form KNO3 and H2O."
  },

  {
    id: 43, subject: "Chemistry", topic: "Stoichiometry", year: 1983, exam: "JAMB",

    question: "A jet plane carrying 3,000 kg of ethane burns off all the gas forming water and carbon dioxide. If all the carbon dioxide is expelled and the water formed is condensed and kept on board the plane, then the gain in weight is",

    options: ["1,800 kg", "900 kg", "600 kg", "2,400 kg", "1,200 kg"],

    answer: "2,400 kg",

    explanation: "The combustion equation is 2C2H6 + 7O2 -> 4CO2 + 6H2O. Thus 60 g of ethane produces 108 g of water. Therefore 3,000 kg of ethane produces 5,400 kg of water. Since the original 3,000 kg of ethane is burned and the CO2 is expelled, the net gain in mass retained on board is 5,400 - 3,000 = 2,400 kg."
  },

  {
    id: 44, subject: "Chemistry", topic: "Qualitative Analysis", year: 1983, exam: "JAMB",

    question: "Liquid X reacts with sodium trioxocarbonate(IV) (Na2CO3) to give a gas which turns calcium hydroxide solution milky. X is",

    options: ["Na2SO4(aq)", "KI(aq)", "An alkali", "An acid", "A hydrocarbon"],

    answer: "An acid",

    explanation: "An acid reacts with a carbonate to release carbon dioxide. Carbon dioxide turns calcium hydroxide solution milky."
  },

  {
    id: 45, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1983, exam: "JAMB",

    question: "Which of the following statements is FALSE?",

    options: [
      "Copper(II) ion can be reduced to copper(I) ion by hydrochloric acid and zinc",
      "Sodium metal dissolves in water giving oxygen",
      "Nitrogen is insoluble in water",
      "Carbon dioxide is soluble in water",
      "Lead has a higher atomic weight than copper"
    ],

    answer: "Sodium metal dissolves in water giving oxygen",

    explanation: "Sodium reacts with water to produce sodium hydroxide and hydrogen gas, not oxygen. Therefore, the statement that sodium gives oxygen is false."
  },

  {
    id: 46, subject: "Chemistry", topic: "Chemical Energetics", year: 1983, exam: "JAMB",

    question: "When sodium dioxonitrate(III) (NaNO2) dissolves in water, the process is",

    options: ["Exothermic", "Endothermic", "Isothermic", "Isomeric", "Hygroscopic"],

    answer: "Endothermic",

    explanation: "Dissolving sodium nitrite in water absorbs heat from the surroundings, so the process is endothermic."
  },

  {
    id: 47, subject: "Chemistry", topic: "Chemical Equilibrium", year: 1983, exam: "JAMB",

    question: "The equilibrium reaction between copper(I) chloride and chlorine is represented by: 2CuCl + Cl2 ⇌ 2CuCl2; ΔH = -166 kJ. Which statement is TRUE for the reaction, pressure remaining constant?",

    options: [
      "More CuCl2 is formed at 40°C",
      "More CuCl2 is formed at 10°C",
      "Less CuCl2 is formed at 10°C",
      "There is no change in CuCl2 formed at 40°C and 10°C",
      "More CuCl2 is consumed at 40°C"
    ],

    answer: "More CuCl2 is formed at 10°C",

    explanation: "The forward reaction is exothermic. Lowering the temperature favours the exothermic forward reaction, so more CuCl2 is formed at 10°C."
  },

  {
    id: 48, subject: "Chemistry", topic: "Chemical Kinetics", year: 1983, exam: "JAMB",

    question: "Zn + H2SO4 -> ZnSO4 + H2. The rate of the above reaction will be greatly increased if",

    options: [
      "the zinc is in the powdered form",
      "a greater volume of the acid is used",
      "a smaller volume of the acid is used",
      "the reaction vessel is immersed in an ice-bath",
      "the zinc is in the form of pellets"
    ],

    answer: "the zinc is in the powdered form",

    explanation: "Powdered zinc has a much larger surface area than pellets, increasing the frequency of effective collisions and therefore increasing the reaction rate."
  },

  {
    id: 49, subject: "Chemistry", topic: "Stoichiometry", year: 1983, exam: "JAMB",

    question: "Zn + H2SO4 -> ZnSO4 + H2. In the above reaction how much zinc will be left undissolved if 2.00 g of zinc is treated with 10 cm3 of 1.0 M H2SO4? [Zn=65]",

    options: ["1.35 g", "1.00 g", "0.70 g", "0.65 g", "0.06 g"],

    answer: "1.35 g",

    explanation: "Moles of H2SO4 = 1.0 x 0.010 = 0.010 mol. The reaction ratio between Zn and H2SO4 is 1:1, so 0.010 mol Zn reacts. Mass of Zn consumed = 0.010 x 65 = 0.65 g. Remaining Zn = 2.00 - 0.65 = 1.35 g."
  },

  {
    id: 50, subject: "Chemistry", topic: "Stoichiometry", year: 1983, exam: "JAMB",

    question: "30 cm3 of 0.1 M Al(NO3)3 solution is reacted with 100 cm3 of 0.15 M NaOH solution. Which reactant is in excess and by how much?",

    options: [
      "NaOH solution, by 70 cm3",
      "NaOH solution, by 60 cm3",
      "NaOH solution, by 40 cm3",
      "Al(NO3)3 solution, by 20 cm3",
      "Al(NO3)3 solution, by 10 cm3"
    ],

    answer: "NaOH solution, by 40 cm3",

    explanation: "Al3+ + 3OH- -> Al(OH)3. Moles of Al3+ = 0.1 x 0.030 = 0.003 mol. Required OH- = 3 x 0.003 = 0.009 mol. Available NaOH = 0.15 x 0.100 = 0.015 mol. Excess OH- = 0.006 mol. Volume of 0.15 M NaOH containing 0.006 mol = 0.006/0.15 = 0.040 dm3 = 40 cm3."
  }

];

export default chemJamb1983;

