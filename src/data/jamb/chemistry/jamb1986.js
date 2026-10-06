// JAMB 1986 Chemistry Past Questions
// Fully audited — questions, answers, options, explanations, calculations, and app-safe formatting.
// Missing graph-dependent questions are commented out where the supplied source does not contain the required figure.

const chemJamb1986 = [

  {
    id: 1,
    subject: "Chemistry",
    topic: "States of Matter",
    year: 1986,
    exam: "JAMB",
    question: "The movement of liquid molecules from the surface of a liquid into the gaseous phase above it is known as",
    options: ["Brownian movement", "Condensation", "Evaporation", "Liquefaction"],
    answer: "Evaporation",
    explanation: "Evaporation is the escape of molecules from the surface of a liquid into the gaseous state. It can occur below the boiling point."
  },

  {
    id: 2,
    subject: "Chemistry",
    topic: "Stoichiometry",
    year: 1986,
    exam: "JAMB",
    question: "What mass of a divalent metal M (atomic mass = 40) would react with excess hydrochloric acid to liberate 224 cm³ of dry hydrogen gas measured at S.T.P.? [G.M.V. = 22.4 dm³]",
    options: ["8.0 g", "4.0 g", "0.8 g", "0.4 g"],
    answer: "0.4 g",
    explanation: "M + 2HCl -> MCl₂ + H₂. One mole of M produces one mole of H₂. At S.T.P., 22400 cm³ of H₂ represents 1 mole, so 224 cm³ represents 0.01 mol. Therefore, mass of M = 0.01 × 40 = 0.4 g."
  },

  {
    id: 3,
    subject: "Chemistry",
    topic: "Stoichiometry",
    year: 1986,
    exam: "JAMB",
    question: "10 cm³ of hydrogen fluoride gas reacts with 5 cm³ of dinitrogen difluoride gas (N₂F₂) to form 10 cm³ of a single gas. Which of the following is the most likely equation for the reaction?",
    options: [
      "HF + N₂F₂ -> N₂HF₃",
      "2HF + N₂F₂ -> 2NHF₂",
      "2HF + N₂F₂ -> N₂H₂F₄",
      "HF + 2N₂F₂ -> N₄HF₄"
    ],
    answer: "2HF + N₂F₂ -> 2NHF₂",
    explanation: "The gas-volume ratio is 10:5:10, which simplifies to 2:1:2. Therefore, the equation that matches the observed volumes is 2HF + N₂F₂ -> 2NHF₂."
  },

  {
    id: 4,
    subject: "Chemistry",
    topic: "Stoichiometry",
    year: 1986,
    exam: "JAMB",
    question: "The number of chlorine atoms present in 5.85 g of NaCl is [Na = 23, Cl = 35.5, Avogadro's number = 6.02 × 10²³]",
    options: [
      "6.02 × 10²²",
      "5.85 × 10²³",
      "6.02 × 10²³",
      "5.85 × 10²⁴"
    ],
    answer: "6.02 × 10²²",
    explanation: "Molar mass of NaCl = 23 + 35.5 = 58.5 g/mol. Moles of NaCl = 5.85 / 58.5 = 0.1 mol. Each NaCl unit contains one chlorine atom, so the number of chlorine atoms is 0.1 × 6.02 × 10²³ = 6.02 × 10²²."
  },

  {
    id: 5,
    subject: "Chemistry",
    topic: "Stoichiometry",
    year: 1986,
    exam: "JAMB",
    question: "How much magnesium is required to react completely with 250 cm³ of 0.5 M HCl? [Mg = 24]",
    options: ["0.3 g", "1.5 g", "2.4 g", "3.0 g"],
    answer: "1.5 g",
    explanation: "Mg + 2HCl -> MgCl₂ + H₂. Moles of HCl = 0.5 × 0.250 = 0.125 mol. Moles of Mg = 0.125 / 2 = 0.0625 mol. Mass of Mg = 0.0625 × 24 = 1.5 g."
  },

  {
    id: 6,
    subject: "Chemistry",
    topic: "Gas Laws",
    year: 1986,
    exam: "JAMB",
    question: "200 cm³ of oxygen diffuse through a porous plug in 50 seconds. How long will 80 cm³ of methane (CH₄) take to diffuse through the same porous plug under the same conditions? [C = 12, O = 16, H = 1]",
    options: ["20 sec", "14 sec", "10 sec", "7 sec"],
    answer: "14 sec",
    explanation: "Rate of O₂ = 200 / 50 = 4 cm³/s. By Graham's law, Rate(CH₄) / Rate(O₂) = √(32 / 16) = √2. Therefore, Rate(CH₄) = 4√2 ≈ 5.66 cm³/s. Time = 80 / 5.66 ≈ 14.1 s, so the answer is 14 sec."
  },

  {
    id: 7,
    subject: "Chemistry",
    topic: "Gas Laws",
    year: 1986,
    exam: "JAMB",
    question: "The relationship between the velocity (U) of gas molecules and their relative molecular mass (M) is shown by the equation",
    options: [
      "U = (kM)^(1/2)",
      "U = (kM)^2",
      "U = k/M",
      "U = (k/M)^(1/2)"
    ],
    answer: "U = (k/M)^(1/2)",
    explanation: "The velocity of gas molecules is inversely proportional to the square root of their relative molecular mass. Therefore, U = (k/M)^(1/2)."
  },

  {
    id: 8,
    subject: "Chemistry",
    topic: "Periodic Table",
    year: 1986,
    exam: "JAMB",
    question: "An element with atomic number twelve is likely to be",
    options: [
      "electrovalent with a valency of 1",
      "electrovalent with a valency of 2",
      "covalent with a valency of 2",
      "covalent with a valency of 4"
    ],
    answer: "electrovalent with a valency of 2",
    explanation: "Atomic number 12 is magnesium. Its electron arrangement is 2,8,2, so it readily loses two electrons to form Mg²⁺ and commonly forms electrovalent compounds with valency 2."
  },

  {
    id: 9,
    subject: "Chemistry",
    topic: "Periodic Table",
    year: 1986,
    exam: "JAMB",
    question: "Which of the following groups of physical properties generally increases from left to right across a period of the periodic table? 1. Ionization energy 2. Atomic radius 3. Electronegativity 4. Electron affinity",
    options: [
      "1 and 2",
      "1, 2 and 3",
      "3 and 4",
      "1, 3 and 4"
    ],
    answer: "1, 3 and 4",
    explanation: "Across a period, effective nuclear charge generally increases. Ionization energy and electronegativity increase, while atomic radius decreases. Electron affinity generally becomes more favorable across a period."
  },

  {
    id: 10,
    subject: "Chemistry",
    topic: "Solutions & Solubility",
    year: 1986,
    exam: "JAMB",
    question: "When 50 cm³ of a saturated solution of sugar (molar mass = 342.0 g) at 40°C was evaporated to dryness, 34.2 g of dry solid was obtained. The solubility of sugar at 40°C is",
    options: [
      "10.0 moles dm⁻³",
      "7.0 moles dm⁻³",
      "3.5 moles dm⁻³",
      "2.0 moles dm⁻³"
    ],
    answer: "2.0 moles dm⁻³",
    explanation: "Moles of sugar = 34.2 / 342 = 0.1 mol. This amount was present in 50 cm³. Therefore, in 1000 cm³: (0.1 / 50) × 1000 = 2.0 mol dm⁻³."
  },

  // CHECK SOURCE: Q11 depends on a solubility graph that is not included in the supplied file.
  // The answer cannot be independently verified without the original graph.
  /*
  {
    id: 11,
    subject: "Chemistry",
    topic: "Solutions & Solubility",
    year: 1986,
    exam: "JAMB",
    question: "From the solubility curve, at what temperature are the solubilities of the two salts equal?",
    options: ["353 K", "323 K", "298 K", "273 K"],
    answer: "323 K",
    explanation: "The solubilities are equal at the temperature where the two curves intersect. The supplied source does not contain the graph, so the answer should be checked against the original paper."
  },
  */

  // CHECK SOURCE: Q12 depends on a solubility graph that is not included in the supplied file.
  /*
  {
    id: 12,
    subject: "Chemistry",
    topic: "Solutions & Solubility",
    year: 1986,
    exam: "JAMB",
    question: "If 1 dm³ of a saturated solution of L at 60°C is cooled to 25°C, what amount in moles will separate?",
    options: ["0.25", "0.50", "0.75", "1.00"],
    answer: "0.75",
    explanation: "The amount that crystallizes depends on the solubilities read from the missing graph. Check the original graph before restoring this question."
  },
  */

  {
    id: 13,
    subject: "Chemistry",
    topic: "Acids, Bases & Salts",
    year: 1986,
    exam: "JAMB",
    question: "Which of the following is an acid salt?",
    options: ["CH₃COONa", "Na₂SO₄", "NaHSO₄", "Na₂S"],
    answer: "NaHSO₄",
    explanation: "NaHSO₄ is an acid salt because it contains hydrogen that can still be replaced by a metal or another positive ion."
  },

  {
    id: 14,
    subject: "Chemistry",
    topic: "Acids, Bases & Salts",
    year: 1986,
    exam: "JAMB",
    question: "Which of the following solutions will conduct the least amount of electricity?",
    options: [
      "2.00 M aqueous solution of NaOH",
      "0.01 M aqueous solution of NaOH",
      "0.01 M aqueous solution of hexanoic acid",
      "0.01 M aqueous solution of sugar"
    ],
    answer: "0.01 M aqueous solution of sugar",
    explanation: "Sugar is a non-electrolyte. It dissolves in water as molecules rather than producing ions, so its solution has very low electrical conductivity."
  },

  {
    id: 15,
    subject: "Chemistry",
    topic: "Electrochemistry",
    year: 1986,
    exam: "JAMB",
    question: "In the electrolysis of an aqueous solution of K₂SO₄ using inert electrodes, which species migrate to the anode?",
    options: [
      "SO₄²⁻ and OH⁻",
      "K⁺ and SO₄²⁻",
      "OH⁻ and H₃O⁺",
      "H₃O⁺ and K⁺"
    ],
    answer: "SO₄²⁻ and OH⁻",
    explanation: "The anode is positively charged, so negatively charged ions migrate toward it. The main anions present are SO₄²⁻ and OH⁻."
  },

  {
    id: 16,
    subject: "Chemistry",
    topic: "Electrochemistry",
    year: 1986,
    exam: "JAMB",
    question: "How many coulombs of electricity are passed through a solution when a current of 6.5 amperes is allowed to flow for 1.0 hour?",
    options: [
      "3.90 × 10² coulombs",
      "5.50 × 10³ coulombs",
      "6.54 × 10³ coulombs",
      "2.34 × 10⁴ coulombs"
    ],
    answer: "2.34 × 10⁴ coulombs",
    explanation: "Q = It. Therefore, Q = 6.5 × 3600 = 23400 C = 2.34 × 10⁴ C."
  },

  {
    id: 17,
    subject: "Chemistry",
    topic: "Redox Reactions",
    year: 1986,
    exam: "JAMB",
    question: "Which of these represents a redox reaction?",
    options: [
      "AgNO₃ + NaCl -> AgCl + NaNO₃",
      "H₂S + Pb(NO₃)₂ -> PbS + 2HNO₃",
      "CaCO₃ -> CaO + CO₂",
      "Zn + 2HCl -> ZnCl₂ + H₂"
    ],
    answer: "Zn + 2HCl -> ZnCl₂ + H₂",
    explanation: "Zinc changes from oxidation state 0 to +2, while hydrogen changes from +1 to 0. Since oxidation and reduction occur together, the reaction is a redox reaction."
  },

  {
    id: 18,
    subject: "Chemistry",
    topic: "Redox Reactions",
    year: 1986,
    exam: "JAMB",
    question: "How many electrons are transferred when one atom of manganese is reduced in the reaction MnO₂ + 4HCl -> MnCl₂ + 2H₂O + Cl₂?",
    options: ["2", "3", "4", "5"],
    answer: "2",
    explanation: "Manganese has oxidation state +4 in MnO₂ and +2 in MnCl₂. It therefore gains 2 electrons."
  },

  {
    id: 19,
    subject: "Chemistry",
    topic: "Chemical Energetics",
    year: 1986,
    exam: "JAMB",
    question: "20 cm³ of 0.1 M NH₄OH solution is neutralized by 20.05 cm³ of 0.1 M HCl and 102 J of heat is liberated. Calculate the heat of neutralization of NH₄OH.",
    options: [
      "-51.0 kJ mol⁻¹",
      "+57.3 kJ mol⁻¹",
      "+57.0 kJ mol⁻¹",
      "+51.0 kJ mol⁻¹"
    ],
    answer: "-51.0 kJ mol⁻¹",
    explanation: "Moles of NH₄OH = 0.1 × 20/1000 = 0.002 mol. Heat released per mole = 102 / 0.002 = 51000 J mol⁻¹ = 51.0 kJ mol⁻¹. Since heat is released, ΔH = -51.0 kJ mol⁻¹."
  },

  {
    id: 20,
    subject: "Chemistry",
    topic: "Chemical Equilibrium",
    year: 1986,
    exam: "JAMB",
    question: "What is the consequence of increasing pressure on the equilibrium reaction ZnO(s) + H₂(g) ⇌ Zn(s) + H₂O(g)?",
    options: [
      "The equilibrium is driven to the left",
      "The equilibrium is driven to the right",
      "There is no effect",
      "More ZnO(s) is produced"
    ],
    answer: "There is no effect",
    explanation: "There is one mole of gaseous substance on each side of the equation. Therefore, changing pressure does not shift the equilibrium position."
  },

  {
    id: 21,
    subject: "Chemistry",
    topic: "Gases & Non-Metals",
    year: 1986,
    exam: "JAMB",
    question: "The approximate volume of air containing 10 cm³ of oxygen is",
    options: ["20 cm³", "25 cm³", "50 cm³", "100 cm³"],
    answer: "50 cm³",
    explanation: "Oxygen makes up approximately one-fifth of air by volume. Therefore, the volume of air containing 10 cm³ of oxygen is approximately 10 × 5 = 50 cm³."
  },

  {
    id: 22,
    subject: "Chemistry",
    topic: "Inorganic Chemistry",
    year: 1986,
    exam: "JAMB",
    question: "The reaction Mg + H₂O -> MgO + H₂ takes place when magnesium reacts with",
    options: ["excess Mg ribbon", "excess cold water", "very hot water", "steam"],
    answer: "steam",
    explanation: "Magnesium reacts very slowly with cold water but reacts readily with steam to form magnesium oxide and hydrogen."
  },

  {
    id: 23,
    subject: "Chemistry",
    topic: "Gases & Non-Metals",
    year: 1986,
    exam: "JAMB",
    question: "When steam is passed over red-hot carbon, which of the following are produced?",
    options: [
      "Hydrogen, oxygen and carbon(IV) oxide",
      "Hydrogen and carbon(IV) oxide",
      "Hydrogen and carbon(II) oxide",
      "Hydrogen and trioxocarbonate(IV) acid"
    ],
    answer: "Hydrogen and carbon(II) oxide",
    explanation: "The reaction is C + H₂O -> CO + H₂. This is the water-gas reaction and produces hydrogen and carbon(II) oxide."
  },

  {
    id: 24,
    subject: "Chemistry",
    topic: "Inorganic Chemistry",
    year: 1986,
    exam: "JAMB",
    question: "Which of the following contains an efflorescent, a deliquescent and a hygroscopic substance respectively?",
    options: [
      "Na₂SO₄, concentrated H₂SO₄, CaCl₂",
      "Na₂CO₃.H₂O, FeSO₄.7H₂O, concentrated H₂SO₄",
      "Na₂CO₃.10H₂O, FeCl₃, concentrated H₂SO₄",
      "Concentrated H₂SO₄, FeSO₄.7H₂O, MgCl₂"
    ],
    answer: "Na₂CO₃.10H₂O, FeCl₃, concentrated H₂SO₄",
    explanation: "Na₂CO₃.10H₂O is efflorescent because it loses water of crystallization in air. FeCl₃ is deliquescent because it absorbs enough moisture to dissolve. Concentrated H₂SO₄ is hygroscopic because it absorbs moisture from the air."
  },

  {
    id: 25,
    subject: "Chemistry",
    topic: "Water Chemistry",
    year: 1986,
    exam: "JAMB",
    question: "The following titration results were obtained when 10.0 cm³ of water was titrated with soap before and after boiling. Before boiling: final reading = 25.0 cm³, initial reading = 10.0 cm³. After boiling: final reading = 20.0 cm³, initial reading = 15.0 cm³. The ratio of permanent to temporary hardness is",
    options: ["1:5", "1:4", "4:1", "1:2"],
    answer: "1:2",
    explanation: "Total hardness = 25.0 - 10.0 = 15.0 cm³. Permanent hardness = 20.0 - 15.0 = 5.0 cm³. Temporary hardness = 15.0 - 5.0 = 10.0 cm³. Therefore, permanent : temporary hardness = 5:10 = 1:2."
  },

  {
    id: 26,
    subject: "Chemistry",
    topic: "Environmental Chemistry",
    year: 1986,
    exam: "JAMB",
    question: "The exhaust fumes from a garage in a place that uses petrol of high sulphur content are most likely to contain",
    options: [
      "CO and SO₃",
      "CO and SO₂",
      "CO, SO₂ and SO₃",
      "CO and H₂S"
    ],
    answer: "CO and SO₂",
    explanation: "Incomplete combustion of petrol produces carbon monoxide. Sulphur impurities in petrol burn mainly to form sulphur(IV) oxide, SO₂. Therefore, CO and SO₂ are the most appropriate answer."
  },

  {
    id: 27,
    subject: "Chemistry",
    topic: "Environmental Chemistry",
    year: 1986,
    exam: "JAMB",
    question: "Oxygen-demanding wastes are considered to be water pollutants because they",
    options: [
      "deplete oxygen which is necessary for the survival of aquatic organisms",
      "increase oxygen which is necessary for the survival of aquatic organisms",
      "increase other gaseous species which are necessary for survival of aquatic organisms",
      "deplete other gaseous species which are necessary for the survival of aquatic organisms"
    ],
    answer: "deplete oxygen which is necessary for the survival of aquatic organisms",
    explanation: "Microorganisms use dissolved oxygen while decomposing oxygen-demanding wastes. This reduces the oxygen available to aquatic organisms."
  },

  {
    id: 28,
    subject: "Chemistry",
    topic: "Inorganic Chemistry",
    year: 1986,
    exam: "JAMB",
    question: "Which of the following will react further with oxygen to form a higher oxide?",
    options: [
      "NO and H₂O",
      "CO and CO₂",
      "SO₂ and NO",
      "CO₂ and H₂O"
    ],
    answer: "SO₂ and NO",
    explanation: "SO₂ reacts with oxygen to form SO₃, while NO reacts with oxygen to form NO₂. Both are therefore capable of further oxidation."
  },

  {
    id: 29,
    subject: "Chemistry",
    topic: "Qualitative Analysis",
    year: 1986,
    exam: "JAMB",
    question: "In an experiment, two gases X and Y were produced. X turned wet lead ethanoate paper black and Y bleached moist litmus paper. What are the elements in each of the gases X and Y respectively?",
    options: [
      "H and S; Cl",
      "H and O; Cl",
      "H and S; C and O",
      "H and Cl; S and O"
    ],
    answer: "H and S; Cl",
    explanation: "Gas X is hydrogen sulphide, H₂S, which reacts with lead ethanoate to form black lead sulphide. Gas Y is chlorine, Cl₂, which bleaches moist litmus paper."
  },

  {
    id: 30,
    subject: "Chemistry",
    topic: "Qualitative Analysis",
    year: 1986,
    exam: "JAMB",
    question: "Which of the following sulphides is insoluble in dilute HCl?",
    options: ["Na₂S", "ZnS", "CuS", "FeS"],
    answer: "CuS",
    explanation: "Copper(II) sulphide is highly insoluble in dilute hydrochloric acid, unlike the other listed sulphides which dissolve more readily."
  },

  {
    id: 31,
    subject: "Chemistry",
    topic: "Gases & Non-Metals",
    year: 1986,
    exam: "JAMB",
    question: "When chlorine is passed into water and the solution is subsequently exposed to sunlight, the gas evolved is",
    options: ["HCl", "HOCl", "O₂", "Cl₂O₂"],
    answer: "O₂",
    explanation: "Chlorine reacts with water to form hydrochloric acid and hypochlorous acid. Sunlight decomposes hypochlorous acid, releasing oxygen: 2HOCl -> 2HCl + O₂."
  },

  {
    id: 32,
    subject: "Chemistry",
    topic: "Inorganic Chemistry",
    year: 1986,
    exam: "JAMB",
    question: "Which of the following metals does NOT form a stable trioxocarbonate(IV)?",
    options: ["Fe", "Al", "Zn", "Pb"],
    answer: "Al",
    explanation: "Aluminium carbonate is not stable under ordinary conditions because it hydrolyses readily. Aluminium therefore does not form a stable simple carbonate like the other listed metals."
  },

  {
    id: 33,
    subject: "Chemistry",
    topic: "Acids, Bases & Salts",
    year: 1986,
    exam: "JAMB",
    question: "Substance Z reacts with NaOH to give salt and water only. When Z is treated with dilute HCl, a gas is evolved which gives a yellow suspension when passed into concentrated H₂SO₄. Substance Z is",
    options: ["NaHS", "Na₂SO₃", "Na₂S", "NaHSO₃"],
    answer: "NaHS",
    explanation: "NaHS is an acid salt and reacts with NaOH to form Na₂S and water. With dilute HCl, NaHS releases H₂S. Hydrogen sulphide reacts with concentrated H₂SO₄ as a reducing agent, producing sulphur, which appears yellow."
  },

  {
    id: 34,
    subject: "Chemistry",
    topic: "Gas Laws",
    year: 1986,
    exam: "JAMB",
    question: "Ammonia gas is normally dried with",
    options: [
      "concentrated sulphuric acid",
      "quicklime",
      "anhydrous calcium chloride",
      "magnesium sulphate"
    ],
    answer: "quicklime",
    explanation: "Quicklime, CaO, removes moisture from ammonia without reacting significantly with the gas. Concentrated sulphuric acid and some other drying agents can react with ammonia."
  },

  {
    id: 35,
    subject: "Chemistry",
    topic: "Redox Reactions",
    year: 1986,
    exam: "JAMB",
    question: "What are the values of x, y and z respectively in the equation xCu + yHNO₃ -> xCu(NO₃)₂ + 4H₂O + zNO?",
    options: [
      "4; 1; 2",
      "3; 8; 2",
      "2; 8; 3",
      "8; 3; 2"
    ],
    answer: "3; 8; 2",
    explanation: "Balancing 3Cu + 8HNO₃ -> 3Cu(NO₃)₂ + 4H₂O + 2NO gives x = 3, y = 8 and z = 2."
  },

  {
    id: 36,
    subject: "Chemistry",
    topic: "Metallurgy",
    year: 1986,
    exam: "JAMB",
    question: "The iron(III) oxide impurity in bauxite can be removed by",
    options: [
      "fractional crystallization in acid solution",
      "dissolution in sodium hydroxide and filtration",
      "extraction with concentrated ammonia and re-precipitation",
      "electrolysis of the molten mixture"
    ],
    answer: "dissolution in sodium hydroxide and filtration",
    explanation: "In the Bayer process, aluminium oxide dissolves in concentrated NaOH, while iron(III) oxide remains insoluble and can be separated by filtration."
  },

  {
    id: 37,
    subject: "Chemistry",
    topic: "Metallurgy",
    year: 1986,
    exam: "JAMB",
    question: "The major component of the slag from the production of iron is",
    options: [
      "an alloy of calcium and iron",
      "coke",
      "impure iron",
      "calcium trioxosilicate(V)"
    ],
    answer: "calcium trioxosilicate(V)",
    explanation: "In the blast furnace, limestone decomposes to calcium oxide, which reacts with silica impurities to form calcium silicate, the main component of the slag."
  },

  {
    id: 38,
    subject: "Chemistry",
    topic: "Inorganic Chemistry",
    year: 1986,
    exam: "JAMB",
    question: "Sodium hydroxide should be stored in properly closed containers because it",
    options: [
      "readily absorbs water vapour from the air",
      "is easily oxidized by atmospheric oxygen",
      "turns golden yellow when exposed to light",
      "melts at a low temperature"
    ],
    answer: "readily absorbs water vapour from the air",
    explanation: "Sodium hydroxide is highly hygroscopic and deliquescent. It readily absorbs moisture from the atmosphere, so it should be kept in tightly closed containers."
  },

  {
    id: 39,
    subject: "Chemistry",
    topic: "Stoichiometry",
    year: 1986,
    exam: "JAMB",
    question: "A sample of a substance containing only carbon and hydrogen burns completely in excess oxygen to yield 4.4 g of CO₂ and 2.7 g of H₂O. The empirical formula of the substance is [C = 12, O = 16, H = 1]",
    options: ["CH₃", "CH₂", "CH₄", "C₂H₅"],
    answer: "CH₃",
    explanation: "Moles of carbon = 4.4 / 44 = 0.1 mol. Moles of H₂O = 2.7 / 18 = 0.15 mol, giving 0.30 mol of hydrogen atoms. Ratio C:H = 0.1:0.3 = 1:3. Therefore, the empirical formula is CH₃."
  },

  {
    id: 40,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1986,
    exam: "JAMB",
    question: "An undesirable paraffin in the petroleum industry which is particularly prone to knocking is",
    options: ["iso-octane", "n-heptane", "iso-heptane", "n-octane"],
    answer: "n-heptane",
    explanation: "Straight-chain alkanes are more prone to knocking than branched-chain alkanes. N-heptane is assigned an octane number of zero and is therefore highly prone to knocking."
  },

  {
    id: 41,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1986,
    exam: "JAMB",
    question: "Which of the following statements is NOT correct about the named organic compounds?",
    options: [
      "Butanoic acid solution gives effervescence with Na₂CO₃ solution",
      "Glucose when reacted with Na₂CrO₄ at 0°C will show immediate discharge of colour",
      "When but-2-ene is reacted with dilute KMnO₄ solution, the purple colour is discharged readily",
      "When butan-2-ol is boiled with butanoic acid in the presence of concentrated H₂SO₄, an ester is produced"
    ],
    answer: "Glucose when reacted with Na₂CrO₄ at 0°C will show immediate discharge of colour",
    explanation: "The other statements describe expected reactions. Butanoic acid reacts with carbonate to release CO₂, but-2-ene decolorizes dilute KMnO₄, and butan-2-ol reacts with butanoic acid under acidic conditions to form an ester. The glucose statement is not correct as written."
  },

  {
    id: 42,
    subject: "Chemistry",
    topic: "Applied Chemistry",
    year: 1986,
    exam: "JAMB",
    question: "Which of the following is used as an anti-knock agent in automobile engines?",
    options: [
      "Tetramethyl silane",
      "Lead tetra-ethyl",
      "Glycerol",
      "N-heptane"
    ],
    answer: "Lead tetra-ethyl",
    explanation: "Tetraethyl lead was historically added to petrol as an anti-knock agent because it improved the fuel's resistance to premature ignition. Its use has largely been discontinued because of its toxicity."
  },

  {
    id: 43,
    subject: "Chemistry",
    topic: "Applied Chemistry",
    year: 1986,
    exam: "JAMB",
    question: "What reaction takes place when palm oil is added to potash and foam is observed?",
    options: [
      "Neutralization",
      "Saponification",
      "Etherification",
      "Salting-out"
    ],
    answer: "Saponification",
    explanation: "Palm oil contains triglycerides. Heating it with an alkali such as potash hydrolyses the triglycerides to form soap and glycerol. This reaction is called saponification."
  },

  {
    id: 44,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1986,
    exam: "JAMB",
    question: "How many structural isomers can be formed from organic compounds with the formula C₃H₈O?",
    options: ["2", "3", "4", "5"],
    answer: "3",
    explanation: "The three structural isomers are propan-1-ol, propan-2-ol and methoxyethane."
  },

  {
    id: 45,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1986,
    exam: "JAMB",
    question: "Which of the following structural formulae represents pent-2-enoic acid?",
    options: [
      "CH₃-CH₂-CH=CH-COOH",
      "CH₃-CH=CH-CH₂-COOH",
      "CH₃-CH₂-CH₂-CH=CH-COOH",
      "CH₃-CH=C=CH-COOH"
    ],
    answer: "CH₃-CH₂-CH=CH-COOH",
    explanation: "Numbering begins from the carboxyl carbon. In CH₃-CH₂-CH=CH-COOH, the double bond is between carbon 2 and carbon 3, so the compound is pent-2-enoic acid."
  },

  {
    id: 46,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1986,
    exam: "JAMB",
    question: "When ethanol is heated with excess concentrated sulphuric acid, the ethanol is",
    options: [
      "oxidized to ethene",
      "polymerized to polyethene",
      "dehydrated to ethene",
      "dehydrated to ethyne"
    ],
    answer: "dehydrated to ethene",
    explanation: "Concentrated sulphuric acid acts as a dehydrating agent. When ethanol is heated strongly with it, water is removed to form ethene."
  },

  {
    id: 47,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1986,
    exam: "JAMB",
    question: "Which of the following compounds is NOT formed by the action of chlorine on methane?",
    options: [
      "CH₃Cl",
      "C₂H₅Cl",
      "CH₂Cl₂",
      "CHCl₃"
    ],
    answer: "C₂H₅Cl",
    explanation: "Chlorination of methane produces chloromethane, dichloromethane, trichloromethane and eventually tetrachloromethane. C₂H₅Cl is chloroethane and is not a product of direct chlorination of methane."
  },

  {
    id: 48,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1986,
    exam: "JAMB",
    question: "The general formula of an alkyl halide, where X represents the halogen, is",
    options: [
      "CₙH₂ₙ₋₂X",
      "CₙH₂ₙ₊₁X",
      "CₙH₂ₙ₊₂X",
      "CₙH₂ₙX"
    ],
    answer: "CₙH₂ₙ₊₁X",
    explanation: "Alkyl halides are derived from alkanes, CₙH₂ₙ₊₂, by replacing one hydrogen atom with a halogen atom X. Their general formula is therefore CₙH₂ₙ₊₁X."
  },

  {
    id: 49,
    subject: "Chemistry",
    topic: "Applied Chemistry",
    year: 1986,
    exam: "JAMB",
    question: "Which of the following are made by the process of polymerization?",
    options: [
      "Nylon and soap",
      "Nylon and rubber",
      "Soap and butane",
      "Margarine and nylon"
    ],
    answer: "Nylon and rubber",
    explanation: "Nylon is a synthetic polymer, while natural and synthetic rubbers are polymeric materials. Soap and margarine are not polymers."
  },

  {
    id: 50,
    subject: "Chemistry",
    topic: "Applied Chemistry",
    year: 1986,
    exam: "JAMB",
    question: "Starch can be converted to ethyl alcohol by",
    options: [
      "distillation",
      "fermentation",
      "isomerization",
      "cracking"
    ],
    answer: "fermentation",
    explanation: "Starch is first broken down into fermentable sugars, which yeast converts to ethanol and carbon dioxide during fermentation."
  }

];

export default chemJamb1986;