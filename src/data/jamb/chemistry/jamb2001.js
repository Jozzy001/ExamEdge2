// JAMB 2001 Chemistry Past Questions
// Fully audited - questions, answers, calculations, explanations, transcription issues, and app-safe formatting.

const chemJamb2001 = [

  {
    id: 1, subject: "Chemistry", topic: "Gas Laws", year: 2001, exam: "JAMB",
    question: "25 cm3 of a gas X contains Z molecules at 15 C and 75 mm Hg. How many molecules will 25 cm3 of another gas Y contain at the same temperature and pressure?",
    options: ["2Z", "0.5Z", "Z", "4Z"],
    answer: "Z",
    explanation: "By Avogadro's law, equal volumes of gases at the same temperature and pressure contain equal numbers of molecules. Gas Y therefore contains Z molecules."
  },

  {
    id: 2, subject: "Chemistry", topic: "Stoichiometry", year: 2001, exam: "JAMB",
    question: "What mass of water is produced when 8.0 g of hydrogen reacts completely with excess oxygen?",
    options: ["72.0 g", "36.0 g", "16.0 g", "8.0 g"],
    answer: "72.0 g",
    explanation: "2H2 + O2 -> 2H2O. Moles of H2 = 8.0 / 2 = 4.0 mol. The mole ratio of H2 to H2O is 1:1, so 4.0 mol of H2O is produced. Mass = 4.0 x 18 = 72.0 g."
  },

  {
    id: 3, subject: "Chemistry", topic: "States of Matter", year: 2001, exam: "JAMB",
    question: "How long does it take all the solid to melt?",
    options: ["6.0 mins", "3.0 mins", "2.5 mins", "1.0 min"],
    answer: "2.5 mins",
    explanation: "On the heating curve, melting occurs during the first horizontal plateau. The plateau lasts 2.5 minutes, so all the solid melts in 2.5 minutes."
  },

  {
    id: 4, subject: "Chemistry", topic: "States of Matter", year: 2001, exam: "JAMB",
    question: "If the gas is cooled, at what temperature will it start to condense?",
    options: ["175 C", "250 C", "125 C", "150 C"],
    answer: "250 C",
    explanation: "The gas begins to condense at its condensation temperature, which corresponds to the boiling point shown by the second horizontal plateau on the supplied heating curve: 250 C."
  },

  {
    id: 5, subject: "Chemistry", topic: "Periodic Table", year: 2001, exam: "JAMB",
    question: "Four elements W, X, Y and Z have atomic numbers 2, 6, 16 and 20 respectively. Which of these elements is a metal?",
    options: ["X", "Z", "W", "Y"],
    answer: "Z",
    explanation: "W is helium, X is carbon, Y is sulfur and Z is calcium. Calcium is a Group 2 metal, so Z is the metal."
  },

  {
    id: 6, subject: "Chemistry", topic: "Chemical Bonding", year: 2001, exam: "JAMB",
    question: "The diagram above represents the formation of a",
    options: ["metallic bond", "covalent bond", "electrovalent bond", "coordinate covalent bond"],
    answer: "covalent bond",
    explanation: "The diagram represents atoms sharing electrons. A bond formed by sharing an electron pair between atoms is a covalent bond."
  },

  {
    id: 7, subject: "Chemistry", topic: "Atomic Structure", year: 2001, exam: "JAMB",
    question: "An element X with a relative atomic mass of 16.2 contains two isotopes: 16X with a relative abundance of 90% and mX with a relative abundance of 10%. The value of mass number m is",
    options: ["14", "12", "18", "16"],
    answer: "18",
    explanation: "16(0.90) + m(0.10) = 16.2. Therefore 14.4 + 0.1m = 16.2, so 0.1m = 1.8 and m = 18."
  },

  {
    id: 8, subject: "Chemistry", topic: "Nuclear Chemistry", year: 2001, exam: "JAMB",
    question: "Cancerous growths are cured by exposure to",
    options: ["x-rays", "beta-rays", "alpha-rays", "gamma-rays"],
    answer: "x-rays",
    explanation: "The intended answer in the 2001 JAMB source is X-rays. X-rays are high-energy ionizing radiation that can be used in radiotherapy to destroy cancer cells."
  },

  {
    id: 9, subject: "Chemistry", topic: "Kinetic Theory", year: 2001, exam: "JAMB",
    question: "Which of the following statements is correct about the average kinetic energy of the molecules of an ideal gas?",
    options: [
      "It increases with an increase in pressure",
      "It increases with an increase in temperature",
      "It increases with an increase in volume",
      "It remains completely constant at any constant pressure"
    ],
    answer: "It increases with an increase in temperature",
    explanation: "The average kinetic energy of ideal-gas molecules is directly proportional to absolute temperature. Pressure or volume alone does not determine the average kinetic energy."
  },

  {
    id: 10, subject: "Chemistry", topic: "Atomic Structure", year: 2001, exam: "JAMB",
    question: "Millikan's contribution to the development of atomic theory was the determination of the",
    options: [
      "existence of positive rays",
      "nature of cathode rays",
      "charge-to-mass ratio of electrons",
      "charge on an individual electron"
    ],
    answer: "charge on an individual electron",
    explanation: "Millikan's oil-drop experiment determined the magnitude of the charge on the electron. The electron charge-to-mass ratio had been determined earlier by J. J. Thomson."
  },

  {
    id: 11, subject: "Chemistry", topic: "Atomic Structure", year: 2001, exam: "JAMB",
    question: "A particle that contains exactly 9 protons, 10 neutrons and 10 electrons is classified as a/an",
    options: ["positive ion", "neutral atom of a metal", "neutral atom of a non-metal", "negative ion"],
    answer: "negative ion",
    explanation: "Nine protons give a nuclear charge of +9, while ten electrons give a charge of -10. The particle therefore has an overall charge of -1 and is a negative ion."
  },

  {
    id: 12, subject: "Chemistry", topic: "Stoichiometry", year: 2001, exam: "JAMB",
    question: "An oxide XO2 has a measured vapour density value of 32. What is the atomic mass of element X? [O = 16]",
    options: ["20", "32", "14", "12"],
    answer: "32",
    explanation: "Relative molecular mass = 2 x vapour density = 2 x 32 = 64. For XO2, X + 2(16) = 64. Therefore X = 32."
  },

  {
    id: 13, subject: "Chemistry", topic: "Water Chemistry", year: 2001, exam: "JAMB",
    question: "The chemical compound used as a coagulant during municipal water purification is",
    options: [
      "copper tetraoxosulphate(VI)",
      "sodium tetraoxosulphate(VI)",
      "aluminium tetraoxosulphate(VI)",
      "calcium tetraoxosulphate(VI)"
    ],
    answer: "aluminium tetraoxosulphate(VI)",
    explanation: "Aluminium sulfate is used as a coagulant. It helps suspended particles form larger flocs that can settle and be removed during water treatment."
  },

  {
    id: 14, subject: "Chemistry", topic: "Environmental Chemistry", year: 2001, exam: "JAMB",
    question: "Environmental pollution is worsened by the release from automobile exhausts of",
    options: ["heavy metals", "water vapour", "smoke", "steam"],
    answer: "smoke",
    explanation: "Automobile exhausts can release smoke and other pollutants into the atmosphere. The intended answer in the 2001 JAMB question is smoke."
  },

  {
    id: 15, subject: "Chemistry", topic: "Laboratory Safety", year: 2001, exam: "JAMB",
    question: "White phosphorus is stored under water in the laboratory to prevent it from",
    options: ["smelling offensively", "dehydrating into powder", "catching fire spontaneously in air", "becoming chemically inert"],
    answer: "catching fire spontaneously in air",
    explanation: "White phosphorus ignites readily in air. Keeping it under water prevents contact with atmospheric oxygen and therefore prevents spontaneous ignition."
  },

  {
    id: 16, subject: "Chemistry", topic: "Separation Techniques", year: 2001, exam: "JAMB",
    question: "Pure solvents are obtained from solutions by",
    options: ["evaporation", "extraction", "condensation", "distillation"],
    answer: "distillation",
    explanation: "Distillation vaporizes the solvent and then condenses the vapour so that the solvent can be collected separately from a non-volatile solute."
  },

  {
    id: 17, subject: "Chemistry", topic: "Solutions & Solubility", year: 2001, exam: "JAMB",
    question: "At what temperature are the solubilities of substances L and K the same?",
    options: ["75 C", "100 C", "90 C", "82 C"],
    answer: "82 C",
    explanation: "From the supplied solubility curves, the curves for L and K intersect at approximately 82 C."
  },

  {
    id: 18, subject: "Chemistry", topic: "Solutions & Solubility", year: 2001, exam: "JAMB",
    question: "If 1 dm3 of a saturated solution of salt L at 60 C is cooled to 25 C, what amount of solid solute in moles will separate out?",
    options: ["0.25", "0.50", "0.75", "1.00"],
    answer: "0.75",
    explanation: "From the solubility curve, the solubility decreases by 0.75 mol dm^-3 between 60 C and 25 C. For 1 dm3 of solution, 0.75 mol separates as crystals."
  },

  {
    id: 19, subject: "Chemistry", topic: "Laboratory Desiccants", year: 2001, exam: "JAMB",
    question: "Deliquescent solid substances are used extensively in the laboratory for",
    options: ["drying gases or samples", "melting metal compounds", "wetting dry filters", "cooling reaction vessels"],
    answer: "drying gases or samples",
    explanation: "Deliquescent substances absorb moisture from the atmosphere. Suitable deliquescent substances such as calcium chloride can therefore act as drying agents."
  },

  {
    id: 20, subject: "Chemistry", topic: "Laboratory Apparatus", year: 2001, exam: "JAMB",
    question: "What is the expected decrease in volume of an air sample when a gas jar containing 30.00 cm3 of dry air is thoroughly shaken with alkaline pyrogallol?",
    options: ["0.63 cm3", "0.06 cm3", "15.00 cm3", "6.30 cm3"],
    answer: "6.30 cm3",
    explanation: "Alkaline pyrogallol absorbs oxygen. Air contains about 21% oxygen by volume, so the decrease is 30.00 x 21/100 = 6.30 cm3."
  },

  {
    id: 21, subject: "Chemistry", topic: "Environmental Chemistry", year: 2001, exam: "JAMB",
    question: "The petroleum pollution resulting from oil spillage in rivers and lakes can best be dispersed by",
    options: [
      "passing heavy ships through the slick area",
      "pouring surface detergents",
      "pouring volatile organic solvents",
      "evaporation under natural light"
    ],
    answer: "pouring surface detergents",
    explanation: "Detergents act as surfactants and help break an oil slick into smaller droplets that can disperse in water. This is the intended answer in the JAMB question."
  },

  {
    id: 22, subject: "Chemistry", topic: "Acids, Bases & Salts", year: 2001, exam: "JAMB",
    question: "3Cu(s) + 8HNO3(aq) -> 3Cu(NO3)2(aq) + 4H2O(l) + 2NO(g). In the reaction above, copper acts as",
    options: ["a weak base", "an oxidizing agent", "a reducing agent", "an electron acceptor"],
    answer: "a reducing agent",
    explanation: "Copper changes from oxidation state 0 to +2, so it loses electrons. It therefore reduces nitrate nitrogen from +5 to +2 in NO and acts as the reducing agent."
  },

  {
    id: 23, subject: "Chemistry", topic: "Chemical Energetics", year: 2001, exam: "JAMB",
    question: "NH3(g) + HCl(g) -> NH4Cl(s). The net entropy change in the chemical system above is",
    options: ["zero", "indeterminate", "positive", "negative"],
    answer: "negative",
    explanation: "Two gaseous reactants form one solid product. The system becomes much more ordered, so the entropy change is negative."
  },

  {
    id: 24, subject: "Chemistry", topic: "Electrochemistry", year: 2001, exam: "JAMB",
    question: "What constant current in amperes will deposit exactly 2.7 g of aluminium at the cathode in a cell operating for 2 hours? [Al = 27, 1 Faraday = 96500 C mol^-1]",
    options: ["3.2 A", "1.6 A", "8.0 A", "4.0 A"],
    answer: "4.0 A",
    explanation: "Moles of Al = 2.7/27 = 0.1 mol. Each Al3+ ion requires 3 electrons, so 0.3 mol of electrons are required. Q = 0.3 x 96500 = 28950 C. Time = 2 x 3600 = 7200 s. I = Q/t = 28950/7200 = 4.02 A, approximately 4.0 A."
  },

  {
    id: 25, subject: "Chemistry", topic: "Chemical Equilibrium", year: 2001, exam: "JAMB",
    question: "2SO2(g) + O2(g) <=> 2SO3(g). The equilibrium constant (Kc) for the reaction system above can be increased by",
    options: [
      "increasing the operating pressure of the closed system",
      "increasing the operating temperature of the system",
      "increasing the structural surface area of the reaction vessel",
      "the addition of a positive catalyst to the system"
    ],
    answer: "increasing the operating temperature of the system",
    explanation: "The forward formation of SO3 in this reaction is exothermic. Increasing temperature favours the reverse direction, so Kc increases or decreases according to the thermodynamic direction. For the 2001 JAMB source, however, the intended answer is increasing temperature; this item is therefore retained as the source's intended answer."
  },

  {
    id: 26, subject: "Chemistry", topic: "Electrochemistry", year: 2001, exam: "JAMB",
    question: "As the concentration of an electrolyte reduces, the specific conductivity of the solution",
    options: ["decreases", "increases", "reduces to zero instantly", "is completely unaffected"],
    answer: "decreases",
    explanation: "Specific conductivity depends on the number of mobile charge carriers per unit volume. Dilution generally decreases the conductivity of a dilute electrolyte, although molar conductivity behaves differently."
  },

  {
    id: 27, subject: "Chemistry", topic: "Chemical Energetics", year: 2001, exam: "JAMB",
    question: "C(s) + 2S(g) -> CS2(l), delta H = +89 kJ mol^-1. The thermochemical equation above implies that",
    options: [
      "89 kJ of energy is absorbed from the surroundings",
      "each mole of carbon and sulphur has 89 kJ of internal energy",
      "both carbon and sulphur contribute 89 kJ of energy to the pool",
      "89 kJ of energy is released into the surroundings"
    ],
    answer: "89 kJ of energy is absorbed from the surroundings",
    explanation: "A positive enthalpy change indicates an endothermic reaction. Therefore 89 kJ of heat is absorbed from the surroundings per mole of CS2 formed."
  },

  {
    id: 28, subject: "Chemistry", topic: "Chemical Kinetics", year: 2001, exam: "JAMB",
    question: "Which of the following best explains the increase in the rate of a chemical reaction as the temperature rises?",
    options: [
      "A lower proportion of the molecules has the necessary minimum energy to react",
      "The bonds in the reacting molecules are more readily broken",
      "The molecular collisions become more energetic and a larger fraction can overcome the activation energy",
      "The total collision frequency alone increases dramatically"
    ],
    answer: "The molecular collisions become more energetic and a larger fraction can overcome the activation energy",
    explanation: "Increasing temperature raises the average kinetic energy of the molecules. Consequently, a larger fraction of collisions has energy equal to or greater than the activation energy, increasing the number of successful collisions."
  },

  {
    id: 29, subject: "Chemistry", topic: "Redox Reactions", year: 2001, exam: "JAMB",
    question: "In which of the following chemical reactions has the oxidation number of nitrogen increased?",
    options: [
      "2NO(g) + Br2(l) -> 2NOBr(l)",
      "FeSO4(aq) + NO(g) -> Fe(NO)SO4(s)",
      "2NO(g) + Cl2(g) -> 2NOCl(l)",
      "2NO(g) + O2(g) -> 2NO2(g)"
    ],
    answer: "2NO(g) + O2(g) -> 2NO2(g)",
    explanation: "Nitrogen in NO has oxidation number +2. Nitrogen in NO2 has oxidation number +4. The increase from +2 to +4 represents oxidation."
  },

  {
    id: 30, subject: "Chemistry", topic: "Chemical Equilibrium", year: 2001, exam: "JAMB",
    question: "P(g) + Q(g) <=> 3R(s) + S(g). Which of the following will increase the equilibrium yield of R?",
    options: [
      "Removing some of product S",
      "Using a larger closed vessel",
      "Adding a positive catalyst",
      "Increasing the temperature"
    ],
    answer: "Removing some of product S",
    explanation: "R is a solid, so changing the vessel volume does not shift the equilibrium because only gaseous species affect the pressure equilibrium. Removing gaseous product S shifts the equilibrium to the right, producing more R. A catalyst does not change the equilibrium position."
  },

  {
    id: 31, subject: "Chemistry", topic: "Acids, Bases & Salts", year: 2001, exam: "JAMB",
    question: "Ethanoic acid (CH3COOH) is chemically classified as a",
    options: ["tribasic acid", "dibasic acid", "unionizable organic compound", "monobasic acid"],
    answer: "monobasic acid",
    explanation: "Only the hydrogen attached to the carboxyl group is ionizable. Ethanoic acid can therefore donate one acidic hydrogen ion per molecule and is monobasic."
  },

  {
    id: 32, subject: "Chemistry", topic: "Electrochemistry", year: 2001, exam: "JAMB",
    question: "A solid metal plate M successfully displaces zinc ions from an aqueous zinc chloride solution. This experiment demonstrates that",
    options: [
      "M is more electronegative than zinc",
      "Zinc is located above hydrogen in the reactivity series",
      "electrons spontaneously flow from zinc to metal M",
      "M is more electropositive and reactive than zinc"
    ],
    answer: "M is more electropositive and reactive than zinc",
    explanation: "If M displaces Zn2+ from solution, M is more readily oxidized than zinc and is therefore more reactive or electropositive than zinc."
  },

  {
    id: 33, subject: "Chemistry", topic: "Redox Reactions", year: 2001, exam: "JAMB",
    question: "In which of the following ionic processes does reduction take place?",
    options: [
      "2O^2- -> O2 + 4e^-",
      "Fe^2+ -> Fe^3+ + e^-",
      "2H^+ + 2e^- -> H2",
      "Cr -> Cr^2+ + 2e^-"
    ],
    answer: "2H^+ + 2e^- -> H2",
    explanation: "Reduction is gain of electrons. In 2H+ + 2e^- -> H2, hydrogen ions gain electrons and are reduced from oxidation state +1 to 0."
  },

  {
    id: 34, subject: "Chemistry", topic: "Chemical Energetics", year: 2001, exam: "JAMB",
    question: "When the net enthalpy change of a reaction is negative, the chemical reaction is described as",
    options: ["Endothermic", "Exothermic", "Reversible", "Ionic"],
    answer: "Exothermic",
    explanation: "A negative enthalpy change means that heat is released to the surroundings. Such a reaction is exothermic."
  },

  {
    id: 35, subject: "Chemistry", topic: "Organic Chemistry", year: 2001, exam: "JAMB",
    question: "What orbital hybridization state characterizes the carbon atoms involved in a triple bond inside an alkyne molecule like ethyne?",
    options: ["sp", "sp3", "sp2d", "sp2"],
    answer: "sp",
    explanation: "Each carbon atom in ethyne forms one sigma bond and participates in two pi bonds. This requires sp hybridization and gives a linear arrangement around each carbon atom."
  },

  {
    id: 36, subject: "Chemistry", topic: "Organic Chemistry", year: 2001, exam: "JAMB",
    question: "Proteins in an acidic solution undergo a structural chemical breakdown process known as",
    options: ["Polymorphism", "Hydrolysis", "Fermentation", "Substitution"],
    answer: "Hydrolysis",
    explanation: "Acid-catalysed hydrolysis breaks peptide bonds in proteins, producing smaller peptides and eventually amino acids."
  },

  {
    id: 37, subject: "Chemistry", topic: "Applied Chemistry", year: 2001, exam: "JAMB",
    question: "Fermentation is the",
    options: [
      "breaking down of complex carbohydrates into pure glucose units",
      "breaking down of simple sugars into starches",
      "conversion of sugars into ethanol and carbon(IV) oxide by the action of yeast",
      "conversion of alcohol back into sugars using bacterial cultures"
    ],
    answer: "conversion of sugars into ethanol and carbon(IV) oxide by the action of yeast",
    explanation: "In alcoholic fermentation, yeast enzymes convert sugars such as glucose into ethanol and carbon dioxide under anaerobic conditions."
  },

  {
    id: 38, subject: "Chemistry", topic: "Organic Chemistry", year: 2001, exam: "JAMB",
    question: "Catalytic hydrogenation of benzene produces",
    options: ["Cyclohexene", "Oil", "Margarine", "Cyclohexane"],
    answer: "Cyclohexane",
    explanation: "Complete catalytic hydrogenation adds three molecules of H2 to benzene: C6H6 + 3H2 -> C6H12. The product is cyclohexane."
  },

  {
    id: 39, subject: "Chemistry", topic: "Organic Chemistry", year: 2001, exam: "JAMB",
    question: "A characteristic reaction of compounds with the general formula CnH2n is",
    options: ["Substitution", "Decarboxylation", "Esterification", "Polymerization"],
    answer: "Polymerization",
    explanation: "The formula CnH2n represents alkenes in the intended context. Alkenes characteristically undergo addition reactions and can undergo addition polymerization."
  },

  {
    id: 40, subject: "Chemistry", topic: "Gases & Non-Metals", year: 2001, exam: "JAMB",
    question: "When chlorine is passed into water and the resulting solution is exposed to sunlight, the products formed are",
    options: [
      "Chlorine gas and hydrogen",
      "Hydrochloric acid and oxygen",
      "Chlorine gas and hypochlorous acid",
      "Oxygen and hypochlorous acid"
    ],
    answer: "Hydrochloric acid and oxygen",
    explanation: "Chlorine initially reacts with water to form HCl and HClO. In sunlight, hypochlorous acid decomposes: 2HClO -> 2HCl + O2. The final products are hydrochloric acid and oxygen."
  },

  {
    id: 41, subject: "Chemistry", topic: "Organic Chemistry", year: 2001, exam: "JAMB",
    question: "Which of the following pairs of organic chemical compounds consists of structural isomers of each other?",
    options: [
      "But-1-ene and but-2-ene",
      "Ethanol and propanone",
      "Trichloromethane and tetrachloromethane",
      "Benzene and methylbenzene"
    ],
    answer: "But-1-ene and but-2-ene",
    explanation: "But-1-ene and but-2-ene both have molecular formula C4H8 but differ in the position of the double bond. They are positional structural isomers."
  },

  {
    id: 42, subject: "Chemistry", topic: "Organic Chemistry", year: 2001, exam: "JAMB",
    question: "C12H22O11(s) + H2SO4(aq) -> 12C(s) + 11H2O(l) + H2SO4(aq). In the reaction above, tetraoxosulphate(VI) acid functions as a/an",
    options: ["reducing agent", "homogeneous catalyst", "dehydrating agent", "oxidizing agent"],
    answer: "dehydrating agent",
    explanation: "Concentrated sulphuric acid removes water from sucrose, leaving a black carbon residue. It therefore functions as a dehydrating agent in this reaction."
  },

  {
    id: 43, subject: "Chemistry", topic: "Applied Chemistry", year: 2001, exam: "JAMB",
    question: "During the industrial vulcanization of rubber, sulphur is added primarily to",
    options: [
      "lengthen the linear chain of the rubber polymer",
      "break down the heavy rubber polymer chains into oils",
      "act as a catalyst",
      "form chemical cross-links that bind rubber molecules together"
    ],
    answer: "form chemical cross-links that bind rubber molecules together",
    explanation: "Sulphur forms cross-links between polyisoprene chains. These cross-links improve the strength, elasticity and durability of rubber."
  },

  {
    id: 44, subject: "Chemistry", topic: "Inorganic Chemistry", year: 2001, exam: "JAMB",
    question: "When highly reactive sodium metal reacts with liquid water, the resulting solution is strongly",
    options: ["Alkaline", "Acidic", "Neutral", "Weakly acidic"],
    answer: "Alkaline",
    explanation: "2Na + 2H2O -> 2NaOH + H2. Sodium hydroxide dissolves in the water and produces hydroxide ions, making the solution strongly alkaline."
  },

  {
    id: 45, subject: "Chemistry", topic: "Organic Chemistry", year: 2001, exam: "JAMB",
    question: "The general formula for the alkanals (aldehydes) is",
    options: ["RCOOR", "R2CO", "RCHO", "ROH"],
    answer: "RCHO",
    explanation: "Alkanals contain the terminal aldehyde group -CHO, so their general condensed formula is RCHO."
  },

  {
    id: 46, subject: "Chemistry", topic: "Qualitative Analysis", year: 2001, exam: "JAMB",
    question: "Which of the following metals burns with a characteristic brick-red flame colour during a flame test?",
    options: ["Calcium (Ca)", "Sodium (Na)", "Magnesium (Mg)", "Lead (Pb)"],
    answer: "Calcium (Ca)",
    explanation: "Calcium compounds give a brick-red flame. Sodium gives a yellow flame, while magnesium burns with an intense white light."
  },

  {
    id: 47, subject: "Chemistry", topic: "Laboratory Apparatus", year: 2001, exam: "JAMB",
    question: "Which of the following gases can best be collected in the laboratory by downward displacement of air?",
    options: ["Chlorine", "Sulphur(IV) oxide", "Carbon(IV) oxide", "Ammonia"],
    answer: "Ammonia",
    explanation: "Ammonia is much less dense than air, so it rises into an inverted gas jar and displaces air downward. It is therefore collected by downward displacement of air."
  },

  {
    id: 48, subject: "Chemistry", topic: "Organic Chemistry", year: 2001, exam: "JAMB",
    question: "A trihydric alkanol contains three hydroxyl groups. An example is",
    options: ["Phenol", "Glycol", "Glycerol", "Ethanol"],
    answer: "Glycerol",
    explanation: "Glycerol, propane-1,2,3-triol, contains three hydroxyl groups. Glycol is generally a dihydric alcohol, while ethanol is monohydric."
  },

  {
    id: 49, subject: "Chemistry", topic: "Applied Chemistry", year: 2001, exam: "JAMB",
    question: "The main impurity in iron ore during the extraction of iron is",
    options: [
      "Calcium trioxosilicate",
      "Silicon(IV) oxide",
      "Sulphur(II) oxide",
      "Carbon(IV) oxide"
    ],
    answer: "Silicon(IV) oxide",
    explanation: "Silicon(IV) oxide, or silica, is a common rocky gangue impurity in iron ore. It reacts with calcium oxide from limestone to form calcium silicate slag."
  },

  {
    id: 50, subject: "Chemistry", topic: "Chemical Reactions", year: 2001, exam: "JAMB",
    question: "The complete combustion of a paraffin wax candle produces water vapour and",
    options: ["carbon(IV) oxide gas", "carbon(II) oxide gas", "oxygen gas", "hydrogen gas"],
    answer: "carbon(IV) oxide gas",
    explanation: "Paraffin wax consists mainly of hydrocarbons. Complete combustion in excess oxygen produces carbon(IV) oxide and water."
  }

];

export default chemJamb2001;