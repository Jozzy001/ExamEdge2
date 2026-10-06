// JAMB 1985 Chemistry Past Questions (Questions 1 - 50)
// Audited for answer accuracy, question integrity, explanations, and app-safe formatting

const chemJamb1985 = [
  
  // CHECK SOURCE: Q1 depends on a missing Periodic Table figure, so the positions of P, Q, R, S, T, U, V, W and X cannot be independently verified.
  // {
  //     id: 1, subject: "Chemistry", topic: "Periodic Table", year: 1985, exam: "JAMB",
  //     question: "The figure shows part of the Periodic Table. Which of the elements belongs to the p-block?",
  //     options: ["S, T and U", "V, W and X", "S and T only", "P, Q and R", "V, W, X and S"],
  //     answer: "P, Q and R",
  //     explanation: "The p-block occupies the main groups on the right side of the periodic table (groups 13 to 18). Elements P, Q, and R are situated in this specific domain."
  //   },

  {
    id: 2,
    subject: "Chemistry",
    topic: "Atomic Structure",
    year: 1985,
    exam: "JAMB",
    question: "Which of the following conducts electricity?",
    options: ["Sulphur", "Graphite", "Diamond", "Red phosphorus", "Yellow phosphorus"],
    answer: "Graphite",
    explanation: "Graphite features sp² hybridized carbon atoms arranged in layers. Each carbon atom has one unhybridized valence electron that is delocalized and free to move across the layer planes, conducting electrical currents."
  },

  {
    id: 3,
    subject: "Chemistry",
    topic: "Stoichiometry",
    year: 1985,
    exam: "JAMB",
    question: "An organic compound contains 72% carbon, 12% hydrogen and 16% oxygen by mass. The empirical formula of the compound is [H = 1, C = 12, O = 16]",
    options: ["C₆H₂₂O₃", "C₆H₁₀O₃", "C₁₂H₁₂O", "C₆H₁₂O", "C₃H₁₀O"],
    answer: "C₆H₁₂O",
    explanation: "Calculating mole ratios: C = 72 / 12 = 6; H = 12 / 1 = 12; O = 16 / 16 = 1. The simple whole-number ratio is 6:12:1, which gives the empirical formula C₆H₁₂O."
  },

  {
    id: 4,
    subject: "Chemistry",
    topic: "Stoichiometry",
    year: 1985,
    exam: "JAMB",
    question: "CuSO₄.xH₂O (0.499 g), when heated to constant mass, gives a residue of 0.346 g. The value of x is [Cu = 63.5, S = 32.0, O = 16, H = 1]",
    options: ["0.5", "2.0", "3.0", "4.0", "5.0"],
    answer: "4.0",
    explanation: "Mass of water lost = 0.499 - 0.346 = 0.153 g. Moles of CuSO₄ = 0.346 / 159.5 = 0.00217 mol. Moles of H₂O = 0.153 / 18 = 0.00850 mol. The ratio H₂O : CuSO₄ is approximately 3.92:1, which corresponds to x = 4.0 among the options."
  },

  {
    id: 5,
    subject: "Chemistry",
    topic: "Separation Techniques",
    year: 1985,
    exam: "JAMB",
    question: "In an experiment, which of the following observations would suggest that a solid sample is a mixture?",
    options: [
      "The solid can be ground to a fine powder",
      "The density of the solid is 2.25 g cm⁻³",
      "The solid begins to melt at 600 K until 648 K",
      "The solid absorbs moisture from the atmosphere and turns into a liquid",
      "The solid melts sharply at 300 K"
    ],
    answer: "The solid begins to melt at 600 K until 648 K",
    explanation: "Pure solid chemical substances melt sharply at one specific temperature. Impure solid samples or mixtures melt gradually across an extended range of temperatures."
  },

  {
    id: 6,
    subject: "Chemistry",
    topic: "Gas Laws",
    year: 1985,
    exam: "JAMB",
    question: "Hydrogen diffuses through a porous plug",
    options: [
      "at the same rate as oxygen",
      "at a slower rate than oxygen",
      "twice as fast as oxygen",
      "three times as fast as oxygen",
      "four times as fast as oxygen"
    ],
    answer: "four times as fast as oxygen",
    explanation: "By Graham's law, Rate_H₂ / Rate_O₂ = square root of (Molar Mass_O₂ / Molar Mass_H₂) = square root of (32 / 2) = square root of 16 = 4. Therefore, hydrogen gas diffuses exactly four times faster than oxygen gas."
  },

  {
    id: 7,
    subject: "Chemistry",
    topic: "Stoichiometry",
    year: 1985,
    exam: "JAMB",
    question: "Given the relative atomic mass of iron is 56 and that of oxygen is 16, how many moles of Iron(III) oxide will be contained in 1 kg of the compound?",
    options: ["25.0 moles", "12.5 moles", "6.25 moles", "3.125 moles", "0.625 moles"],
    answer: "6.25 moles",
    explanation: "Iron(III) oxide is Fe₂O₃. Molar mass = (2 × 56) + (3 × 16) = 112 + 48 = 160 g/mol. Mass = 1 kg = 1000 g. Moles = 1000 / 160 = 6.25 moles."
  },

  {
    id: 8,
    subject: "Chemistry",
    topic: "Stoichiometry & Titration",
    year: 1985,
    exam: "JAMB",
    question: "3.0 g of a mixture of potassium carbonate and potassium chloride were dissolved in a 250 cm³ standard flask. 25 cm³ of this solution required 40.00 cm³ of 0.1 M HCl for neutralization. What is the percentage by weight of K₂CO₃ in the mixture? [K = 39, O = 16, C = 12]",
    options: ["60%", "72%", "82%", "89%", "92%"],
    answer: "92%",
    explanation: "Reaction: K₂CO₃ + 2HCl -> 2KCl + H₂O + CO₂. Moles of HCl in 25 cm³ aliquot = 0.1 × (40/1000) = 0.004 mol. Moles of K₂CO₃ in 25 cm³ = 0.004 / 2 = 0.002 mol. Total moles of K₂CO₃ in the original 250 cm³ flask = 0.002 × 10 = 0.02 mol. Molar mass of K₂CO₃ = 78 + 12 + 48 = 138 g/mol. Mass of K₂CO₃ = 0.02 × 138 = 2.76 g. Percentage = (2.76 / 3.0) × 100% = 92%."
  },

  // CHECK SOURCE: Q9-Q11 depend on Figure 2, but the solubility graph is not included in the supplied file. The numerical answers cannot be verified without the graph.
  // {
  //     id: 9, subject: "Chemistry", topic: "Solutions & Solubility", year: 1985, exam: "JAMB",
  //     question: "Figure 2 represents the solubility curves of two salts, X and Y, in water. Use this diagram to answer questions 9 to 11. At room temperature (300K)",
  //     options: [
  //       "Y is twice as soluble as X",
  //       "X is twice as soluble as Y",
  //       "X and Y are soluble to the same extent",
  //       "X is three times as soluble as Y",
  //       "Y is three times as soluble as X"
  //     ],
  //     answer: "Y is twice as soluble as X",
  //     explanation: "By locating 300K on the temperature horizontal axis of the provided solubility graph, the corresponding solubility value on the curve for salt Y is twice the coordinate value shown for salt X."
  //   },

  // CHECK SOURCE: Q9-Q11 depend on Figure 2, but the solubility graph is not included in the supplied file. The numerical answers cannot be verified without the graph.
  // {
  //     id: 10, subject: "Chemistry", topic: "Solutions & Solubility", year: 1985, exam: "JAMB",
  //     question: "If 80 g each of X and Y are taken up in 100 g of water at 353 K, we shall have",
  //     options: [
  //       "only 10 g of X and Y undissolved",
  //       "only 16 g of Y undissolved",
  //       "10 g of X and 16 g of Y undissolved",
  //       "all X and Y dissolved",
  //       "all X and Y undissolved"
  //     ],
  //     answer: "all X and Y dissolved",
  //     explanation: "At the high temperature of 353 K (80°C), the maximum solubility limit of both salts X and Y exceeds 80 g per 100 g of water, ensuring that both samples dissolve completely."
  //   },

  // CHECK SOURCE: Q9-Q11 depend on Figure 2, but the solubility graph is not included in the supplied file. The numerical answers cannot be verified without the graph.
  // {
  //     id: 11, subject: "Chemistry", topic: "Solutions & Solubility", year: 1985, exam: "JAMB",
  //     question: "If the molar mass of X is 36 g, the number of moles of X dissolved at 343 K is",
  //     options: ["0.2 moles", "0.7 moles", "1.5 moles", "2.0 moles", "3.0 moles"],
  //     explanation: "Locating 343 K on the grid shows a solubility of 72 g per 100 g of water for salt X. Moles of X dissolved = 72 g / 36 g/mol = 2.0 moles.",
  //     answer: "2.0 moles"
  //   },

  {
    id: 12,
    subject: "Chemistry",
    topic: "Acids, Bases & Salts",
    year: 1985,
    exam: "JAMB",
    question: "Which of the following are NOT typical properties of alkalis? (i) sour taste, (ii) slippery to touch, (iii) yields alkaline gas with ammonium salts, (iv) has pH less than 7, (v) turns phenolphthalein pink.",
    options: [
      "(i), (iv) and (v)",
      "(iv) and (v)",
      "(i) and (iv)",
      "(ii) and (v)",
      "(ii), (iii) and (v)"
    ],
    answer: "(i) and (iv)",
    explanation: "Sour taste (i) and a pH value below 7 (iv) are classic properties of acids. Alkalis are bitter, slippery, release basic ammonia gas from ammonium salts, and turn phenolphthalein indicator pink."
  },

  {
    id: 13,
    subject: "Chemistry",
    topic: "Gas Laws",
    year: 1985,
    exam: "JAMB",
    question: "A certain volume of a gas at 298K is heated such that its volume and pressure are now four times the original values. What is the new temperature?",
    options: ["18.6K", "100.0 K", "298.0 K", "1192.0 K", "4768.0 K"],
    answer: "4768.0 K",
    explanation: "By the combined gas law: (P₁ × V₁) / T₁ = (P₂ × V₂) / T₂. Substituting P₂ = 4P₁ and V₂ = 4V₁ results in 1 / 298 = 16 / T₂. T₂ = 298 × 16 = 4768.0 K."
  },

  {
    id: 14,
    subject: "Chemistry",
    topic: "Inorganic Chemistry",
    year: 1985,
    exam: "JAMB",
    question: "Hydrogen is not liberated when trioxonitrate(V) acid reacts with zinc because",
    options: [
      "Zinc is rendered passive by the acid",
      "Hydrogen produced is oxidized to water",
      "Oxides of nitrogen are produced",
      "All nitrates are soluble in water",
      "trioxonitrate(V) acid is a strong acid"
    ],
    answer: "Hydrogen produced is oxidized to water",
    explanation: "Nitric acid (HNO₃) is a powerful oxidizing agent. Any hydrogen gas initially generated at the metal surface is oxidized to water, while the acid is reduced to nitrogen oxides."
  },

  {
    id: 15,
    subject: "Chemistry",
    topic: "Gases & Physical States",
    year: 1985,
    exam: "JAMB",
    question: "The boiling points of water, ethanol, toluene and butan-2-ol are 373.0K, 351.3K, 383.6 K and 372.5 K respectively. Which liquid has the highest vapour pressure at 323.0K?",
    options: ["water", "Ethanol", "Toluene", "Butan-2-ol", "None"],
    answer: "Ethanol",
    explanation: "Vapour pressure is inversely related to boiling point. Ethanol possesses the lowest boiling point among the listed liquids (351.3K), meaning it has the weakest intermolecular attractions and develops the highest vapour pressure at any shared temperature."
  },

  {
    id: 16,
    subject: "Chemistry",
    topic: "Gases & Non-Metals",
    year: 1985,
    exam: "JAMB",
    question: "In what respect will two dry samples of nitrogen gas differ from each other if sample 1 is prepared by completely removing CO₂ and O₂ from air and sample 2 is prepared by passing purified nitrogen(I) oxide over heated copper?",
    options: [
      "Sample 1 is purer than sample 2",
      "Sample 1 is slightly denser than sample 2",
      "Sample 1 is in all respects the same as sample 2",
      "Sample 1 is colourless but sample 2 has a light brown colour",
      "Sample 1 is slightly less reactive than sample 2"
    ],
    answer: "Sample 1 is slightly denser than sample 2",
    explanation: "Atmospheric nitrogen (Sample 1) contains trace noble gases like argon, which are heavier than nitrogen gas. This makes it slightly denser than chemically pure nitrogen (Sample 2)."
  },

  {
    id: 17,
    subject: "Chemistry",
    topic: "Electrochemistry",
    year: 1985,
    exam: "JAMB",
    question: "Copper sulphate solution is electrolyzed using platinum electrodes. A current of 0.193 amperes is passed for 2 hours. How many grams of copper are deposited? [Cu = 63.5, F = 96500 coulombs]",
    options: ["0.457 g", "0.500 g", "0.882 g", "0.914 g", "1.00 g"],
    answer: "0.457 g",
    explanation: "Total charge passed Q = 0.193 × 2 × 3600 = 1389.6 C. Since copper deposition requires 2 Faradays per mole (Cu²⁺ + 2e⁻ -> Cu): Mass = (1389.6 × 63.5) / (2 × 96500) = 0.457 g."
  },

  {
    id: 18,
    subject: "Chemistry",
    topic: "Chemical Kinetics",
    year: 1985,
    exam: "JAMB",
    question: "X + Y <=> Z is an equilibrium reaction. The addition of a catalyst",
    options: [
      "increases the rate at which equilibrium is reached",
      "increases the equilibrium amount of Z",
      "changes the equilibrium constant",
      "favours the forward reaction only",
      "prevents the reverse reaction"
    ],
    answer: "increases the rate at which equilibrium is reached",
    explanation: "A catalyst speeds up both the forward and reverse reactions by lowering their activation energies. It does not change the equilibrium position, equilibrium constant, or final equilibrium amounts."
  },

  {
    id: 19,
    subject: "Chemistry",
    topic: "Oxidation Numbers",
    year: 1985,
    exam: "JAMB",
    question: "What is the formula of sodium gallate if gallium (Ga) shows an oxidation number of +3?",
    options: ["NaGaO₂", "Na₂Ga(OH)₅", "NaGa(OH)₄", "Na₃GaO₃", "NaGaO₃"],
    answer: "NaGa(OH)₄",
    explanation: "In the tetrahydroxogallate(III) ion, [Ga(OH)₄]⁻, gallium has an oxidation number of +3 and the four hydroxide ions contribute -4, giving the ion an overall charge of -1. One sodium ion is therefore required, giving Na[Ga(OH)₄]."
  },

  {
    id: 20,
    subject: "Chemistry",
    topic: "Environmental Chemistry",
    year: 1985,
    exam: "JAMB",
    question: "If the ONLY pollutants found in the atmosphere over a city are oxides of nitrogen, suspended lead compounds, carbon monoxide and high levels of methane, the probable source(s) of the pollution must be",
    options: [
      "automobile exhaust and biological decomposition",
      "combustion of coal and automobile exhaust",
      "biological decomposition only",
      "combustion of coal, automobile exhaust and biological decomposition",
      "combustion of coal and biological decomposition"
    ],
    answer: "automobile exhaust and biological decomposition",
    explanation: "Automobile exhausts release carbon monoxide, nitrogen oxides, and lead compounds, while biological decomposition of organic matter can produce methane."
  },

  {
    id: 21,
    subject: "Chemistry",
    topic: "Electrochemistry",
    year: 1985,
    exam: "JAMB",
    question: "A correct electrochemical series can be obtained from K, Na, Ca, Al, Mg, Zn, Fe, Pb, H, Cu, Hg, Ag, Au by interchanging",
    options: ["Al and Mg", "Zn and Fe", "Zn and Pb", "Pb and H", "Au and Hg"],
    answer: "Al and Mg",
    explanation: "In the standard electrochemical series, magnesium is more electropositive than aluminium. Therefore, Mg should occur before Al in the series."
  },

  {
    id: 22,
    subject: "Chemistry",
    topic: "Chemical Equilibrium",
    year: 1985,
    exam: "JAMB",
    question: "A certain industrial process is represented by the chemical equation: 2A(g) + B(g) <=> C(g) + 3D(g). The forward reaction is endothermic. Which of the following conditions will favour the yield of the products?",
    options: [
      "Increase in temperature, decrease in pressure",
      "Increase in temperature, increase in pressure",
      "Decrease in temperature, decrease in pressure",
      "Decrease in temperature, increase in pressure",
      "Constant temperature, increase in pressure"
    ],
    answer: "Increase in temperature, decrease in pressure",
    explanation: "The forward reaction is endothermic, so increasing the temperature favours the forward reaction. There are 3 moles of gas on the reactant side and 4 moles on the product side, so decreasing the pressure favours the side with more gaseous molecules."
  },

  {
    id: 23,
    subject: "Chemistry",
    topic: "Redox Reactions",
    year: 1985,
    exam: "JAMB",
    question: "2MnO₄⁻ + 10Cl⁻ + 16H⁺ -> 2Mn²⁺ + 5Cl₂ + 8H₂O. Which of the substances serves as an oxidizing agent?",
    options: ["Mn²⁺", "Cl⁻", "H⁺", "MnO₄⁻", "Cl₂"],
    answer: "MnO₄⁻",
    explanation: "The manganese atom in MnO₄⁻ decreases in oxidation state from +7 to +2. Because it gains electrons and is reduced, MnO₄⁻ acts as the oxidizing agent."
  },

  {
    id: 24,
    subject: "Chemistry",
    topic: "Chemical Equilibrium",
    year: 1985,
    exam: "JAMB",
    question: "For the reaction H₂O(l) <=> H₂(g) + 1/2O₂(g), which of the following has no effect on the equilibrium position when the volume of the system is kept constant?",
    options: [
      "Adding argon to the system",
      "Lowering the temperature",
      "Adding hydrogen to the system",
      "Decreasing the pressure",
      "Increasing the temperature"
    ],
    answer: "Adding argon to the system",
    explanation: "When an inert gas such as argon is added at constant volume, the partial pressures of the reacting gases remain unchanged. Therefore, the equilibrium position is not affected."
  },

  {
    id: 25,
    subject: "Chemistry",
    topic: "Electrochemistry",
    year: 1985,
    exam: "JAMB",
    question: "Which of the following metals will displace iron from a solution of iron(II) tetraoxosulphate(VI)?",
    options: ["copper", "mercury", "silver", "Zinc", "Gold"],
    answer: "Zinc",
    explanation: "Zinc is more electropositive and is higher than iron in the electrochemical series, so it can displace iron from a solution containing Fe²⁺ ions."
  },

  {
    id: 26,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1985,
    exam: "JAMB",
    question: "Complete hydrogenation of ethyne yields",
    options: ["benzene", "methane", "ethene", "propane", "Ethane"],
    answer: "Ethane",
    explanation: "Ethyne (C₂H₂) has a carbon-carbon triple bond. Complete hydrogenation adds two molecules of hydrogen to form ethane (C₂H₆)."
  },

  {
    id: 27,
    subject: "Chemistry",
    topic: "Applied Chemistry",
    year: 1985,
    exam: "JAMB",
    question: "Which of the following is used in the manufacture of bleaching powder?",
    options: ["sulphur dioxide", "chlorine", "hydrogen tetraoxosulphate", "hydrogen sulphide", "nitrogen dioxide"],
    answer: "chlorine",
    explanation: "Bleaching powder is manufactured by passing chlorine gas over dry slaked lime, Ca(OH)₂."
  },

  {
    id: 28,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1985,
    exam: "JAMB",
    question: "A man suspected of being drunk is made to pass his breath into acidified potassium dichromate solution. If his breath carries a significant level of ethanol, the final colour of the solution is",
    options: ["Pink", "Orange", "Green", "Purple", "Blue-black"],
    answer: "Green",
    explanation: "Ethanol reduces the orange dichromate ions containing chromium(VI) to chromium(III), which gives a green colour."
  },

  {
    id: 29,
    subject: "Chemistry",
    topic: "Kinetic Theory",
    year: 1985,
    exam: "JAMB",
    question: "When pollen grains are suspended in water and viewed through a microscope, they appear to be in a state of constant but erratic motion. This is due to",
    options: [
      "convection currents",
      "small changes in pressure",
      "small changes in temperature",
      "a chemical reaction between the pollen grains and water",
      "the bombardment of the pollen grains by molecules of water"
    ],
    answer: "the bombardment of the pollen grains by molecules of water",
    explanation: "This continuous random motion is called Brownian motion. It is caused by water molecules colliding continuously with the suspended pollen grains."
  },

  {
    id: 30,
    subject: "Chemistry",
    topic: "Chemical Energetics",
    year: 1985,
    exam: "JAMB",
    question: "The energy change (ΔH) for the reaction CO(g) + 1/2O₂(g) -> CO₂(g) is [ΔHf(CO) = -110.4 kJ/mol, ΔHf(CO₂) = -393.3 kJ/mol]",
    options: ["-503.7 kJ", "+503.7 kJ", "-282.9 kJ", "+282.9 kJ", "+393.3 kJ"],
    answer: "-282.9 kJ",
    explanation: "By Hess's law, ΔH = ΔHf(products) - ΔHf(reactants) = -393.3 - (-110.4) = -282.9 kJ/mol."
  },

  {
    id: 31,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1985,
    exam: "JAMB",
    question: "The product formed on hydrolysis of CH₃-COO-CH₂-CH₂-CH₃ in dilute hydrochloric acid is",
    options: [
      "CH₃COOH + CH₃CH₂CH₂Cl",
      "CH₃CH₂CH₂OH + CH₃COCl",
      "CH₃COOH + HOCH₂CH₂CH₃",
      "CH₃COOH + CH₃CH₃",
      "CH₃CH₂O + CH₃CH₂OH"
    ],
    answer: "CH₃COOH + HOCH₂CH₂CH₃",
    explanation: "Acid hydrolysis of an ester produces the corresponding carboxylic acid and alcohol. Propyl ethanoate produces ethanoic acid and propan-1-ol."
  },

  {
    id: 32,
    subject: "Chemistry",
    topic: "Inorganic Chemistry",
    year: 1985,
    exam: "JAMB",
    question: "The neutralization reaction between NaOH solution and nitrogen(IV) oxide (NO₂) produces water and",
    options: [
      "NaNO₂ and NaNO₃",
      "NaNO₃ and HNO₃",
      "NaNO₂",
      "NaNO₃",
      "NaN₂O₃"
    ],
    answer: "NaNO₂ and NaNO₃",
    explanation: "Nitrogen(IV) oxide is a mixed acid anhydride. When it reacts with an alkali such as NaOH, it forms sodium nitrite and sodium nitrate."
  },

  {
    id: 33,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1985,
    exam: "JAMB",
    question: "The oxidation of CH₃-CH₂-CH(OH)-CH₃ gives",
    options: ["2-butanone", "2-butanal", "butane", "butanoic acid", "3-butanal"],
    answer: "2-butanone",
    explanation: "CH₃-CH₂-CH(OH)-CH₃ is butan-2-ol, a secondary alcohol. Oxidation of a secondary alcohol produces a ketone, in this case butan-2-one."
  },

  {
    id: 34,
    subject: "Chemistry",
    topic: "Qualitative Analysis",
    year: 1985,
    exam: "JAMB",
    question: "Tetraoxosulphate(VI) ions are definitively tested using",
    options: [
      "acidified silver nitrate",
      "acidified barium chloride",
      "lime-water",
      "dilute hydrochloric acid",
      "acidified lead nitrate"
    ],
    answer: "acidified barium chloride",
    explanation: "Acidified barium chloride gives a dense white precipitate of barium sulphate when sulphate ions are present. The precipitate remains insoluble in dilute acid."
  },

  {
    id: 35,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1985,
    exam: "JAMB",
    question: "The IUPAC name for the compound CH₃-CH(CH₃)-CH=CH-CH₂-CH₃ is",
    options: [
      "5-methylhex-3-ene",
      "4-methylhex-2-ene",
      "2-methylhex-3-ene",
      "4-methylhex-3-ene",
      "2-methylpent-3-ene"
    ],
    answer: "5-methylhex-3-ene",
    explanation: "The longest chain containing the double bond has six carbon atoms. Numbering from the end nearest the double bond gives hex-3-ene, with a methyl group at carbon 5. Therefore, the IUPAC name is 5-methylhex-3-ene."
  },

  {
    id: 36,
    subject: "Chemistry",
    topic: "Qualitative Analysis",
    year: 1985,
    exam: "JAMB",
    question: "Mixing aqueous solutions of barium hydroxide and sodium tetraoxocarbonate(IV) yields a white precipitate of",
    options: [
      "barium oxide",
      "sodium tetraoxocarbonate(IV)",
      "sodium oxide",
      "sodium hydroxide",
      "barium tetraoxocarbonate(IV)"
    ],
    answer: "barium tetraoxocarbonate(IV)",
    explanation: "A double-displacement reaction occurs: Ba(OH)₂ + Na₂CO₃ -> BaCO₃ + 2NaOH. This produces insoluble barium carbonate."
  },

  {
    id: 37,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1985,
    exam: "JAMB",
    question: "An organic compound decolorized acidified KMnO₄ solution but failed to react with ammoniacal silver nitrate solution. The organic compound is likely to be",
    options: [
      "a carboxylic acid",
      "an alkane",
      "an alkene",
      "an alkyne",
      "an alkanone"
    ],
    answer: "an alkene",
    explanation: "Alkenes readily decolorize acidified KMnO₄ because of oxidation at the carbon-carbon double bond. They do not give the characteristic precipitate with ammoniacal silver nitrate that terminal alkynes can give."
  },

  {
    id: 38,
    subject: "Chemistry",
    topic: "Inorganic Chemistry",
    year: 1985,
    exam: "JAMB",
    question: "Solid sodium hydroxide on exposure to air absorbs a gas and ultimately transforms into an alkaline substance with the molecular formula",
    options: [
      "NaOH.H₂O",
      "NaOH.N₂",
      "Na₂CO₃",
      "NaHCO₃",
      "NaNO₃"
    ],
    answer: "Na₂CO₃",
    explanation: "Sodium hydroxide absorbs moisture from air and reacts with atmospheric carbon dioxide to form sodium carbonate."
  },

  {
    id: 39,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1985,
    exam: "JAMB",
    question: "Which of the following is the functional group of carboxylic acids?",
    options: ["-OH", ">C=O", "-CHO", "-COOH", "-C=N"],
    answer: "-COOH",
    explanation: "Carboxylic acids contain the carboxyl functional group, -COOH."
  },

  {
    id: 40,
    subject: "Chemistry",
    topic: "Inorganic Chemistry",
    year: 1985,
    exam: "JAMB",
    question: "Which of the following substances is the most abundant in the universe?",
    options: ["Carbon", "Water", "Air", "Oxygen", "Hydrogen"],
    answer: "Hydrogen",
    explanation: "Hydrogen is the most abundant chemical element in the universe."
  },

  {
    id: 41,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1985,
    exam: "JAMB",
    question: "A colourless organic compound X is burnt completely in excess air to give two colourless products, Y and Z. X does not decolorize bromine vapour; Y turns limewater milky, while Z turns anhydrous copper(II) tetraoxosulphate(VI) blue. Compound X is",
    options: [
      "an alkene",
      "an alkane",
      "an alkyne",
      "tetrachloromethane",
      "dichloromethane"
    ],
    answer: "an alkane",
    explanation: "Because X is a hydrocarbon that does not decolorize bromine, it is saturated and therefore an alkane. Complete combustion produces carbon dioxide and water."
  },

  {
    id: 42,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1985,
    exam: "JAMB",
    question: "A hydrocarbon burns completely in excess air to form two colourless products. One product turns limewater milky and the other turns anhydrous copper(II) sulphate blue. The two products are respectively",
    options: [
      "CO₂ and NH₃",
      "CO and NH₃",
      "SO₂ and H₂O",
      "CO₂ and H₂O",
      "SO₂ and NH₃"
    ],
    answer: "CO₂ and H₂O",
    explanation: "The product that turns limewater milky is carbon dioxide (CO₂). The product that turns anhydrous copper(II) sulphate blue is water (H₂O). Therefore, the products are CO₂ and H₂O."
  },

  {
    id: 43,
    subject: "Chemistry",
    topic: "Inorganic Chemistry",
    year: 1985,
    exam: "JAMB",
    question: "Which of the following compounds is NOT the correct product formed when the parent metal is heated in air?",
    options: [
      "Calcium oxide (CaO)",
      "Sodium oxide (Na₂O)",
      "Copper(II) oxide (CuO)",
      "Tri-iron tetroxide (Fe₃O₄)",
      "Aluminium oxide (Al₂O₃)"
    ],
    answer: "Sodium oxide (Na₂O)",
    explanation: "When sodium burns in excess air, the main product is sodium peroxide (Na₂O₂), not sodium oxide (Na₂O)."
  },

  {
    id: 44,
    subject: "Chemistry",
    topic: "Atomic Structure",
    year: 1985,
    exam: "JAMB",
    question: "The atomic number of an element whose cation, X²⁺, has the ground state electronic configuration 1s² 2s² 2p⁶ 3s² 3p⁶ is",
    options: ["16", "18", "20", "22", "24"],
    answer: "20",
    explanation: "The X²⁺ ion has 18 electrons. Since the neutral atom has two more electrons, it has 20 electrons. Therefore, its atomic number is 20."
  },

  {
    id: 45,
    subject: "Chemistry",
    topic: "Inorganic Chemistry",
    year: 1985,
    exam: "JAMB",
    question: "When marble is heated to 1473 K, another white solid is obtained which reacts vigorously with water to give an alkaline solution. The solution contains",
    options: [
      "NaOH",
      "KOH",
      "Mg(OH)₂",
      "Zn(OH)₂",
      "Ca(OH)₂"
    ],
    answer: "Ca(OH)₂",
    explanation: "Marble is mainly calcium carbonate, CaCO₃. On strong heating it decomposes to calcium oxide, CaO. Calcium oxide reacts with water to form calcium hydroxide, Ca(OH)₂."
  },

  {
    id: 46,
    subject: "Chemistry",
    topic: "Qualitative Analysis",
    year: 1985,
    exam: "JAMB",
    question: "Addition of dilute hydrochloric acid to an aqueous solution of a crystalline salt yielded a yellow precipitate and a gas which turned dichromate paper green. The crystalline salt was probably",
    options: [
      "Na₂SO₄",
      "Na₂S₂O₃.5H₂O",
      "Na₂S",
      "Na₂CO₃",
      "NaHCO₃"
    ],
    answer: "Na₂S₂O₃.5H₂O",
    explanation: "Thiosulphate salts react with dilute acids to produce yellow sulphur and sulphur dioxide gas. Sulphur dioxide reduces orange dichromate to green chromium(III) ions."
  },

  {
    id: 47,
    subject: "Chemistry",
    topic: "Applied Chemistry",
    year: 1985,
    exam: "JAMB",
    question: "The process involved in the conversion of an oil into margarine is known as",
    options: [
      "hydrogenation",
      "condensation",
      "hydrolysis",
      "dehydration",
      "cracking"
    ],
    answer: "hydrogenation",
    explanation: "Margarine is manufactured by hardening liquid vegetable oils. This is achieved through catalytic hydrogenation, which adds hydrogen across the carbon-carbon double bonds of unsaturated fatty acids."
  },

  {
    id: 48,
    subject: "Chemistry",
    topic: "Qualitative Analysis",
    year: 1985,
    exam: "JAMB",
    question: "An aqueous solution of an inorganic salt gives a white precipitate that is soluble in excess aqueous NaOH, insoluble in excess aqueous NH₃, and soluble in dilute HCl. The cation present in the salt is",
    options: [
      "NH₄⁺",
      "Ca²⁺",
      "Al³⁺",
      "Pb²⁺",
      "Cu²⁺"
    ],
    answer: "Al³⁺",
    explanation: "Aluminium ions form a white precipitate of Al(OH)₃. It dissolves in excess NaOH because the hydroxide is amphoteric, but it does not dissolve in excess aqueous ammonia."
  },

  {
    id: 49,
    subject: "Chemistry",
    topic: "Applied Chemistry",
    year: 1985,
    exam: "JAMB",
    question: "Which of the following roles does sodium chloride play in soap preparation?",
    options: [
      "It reacts with glycerol",
      "It purifies the soap",
      "It accelerates the decomposition of the fat and oil",
      "It separates the soap from the glycerol",
      "It converts the fatty acid to its sodium salt"
    ],
    answer: "It separates the soap from the glycerol",
    explanation: "Adding sodium chloride causes the soap to precipitate out of the aqueous mixture. This process is known as salting out and separates the soap from the glycerol-containing solution."
  },

  {
    id: 50,
    subject: "Chemistry",
    topic: "Applied Chemistry",
    year: 1985,
    exam: "JAMB",
    question: "The function of sulphur during the vulcanization of rubber is to",
    options: [
      "act as a catalyst for the polymerization of rubber molecules",
      "convert rubber from thermosetting to thermoplastic polymer",
      "form cross-links which bind rubber molecules together",
      "break down rubber polymer molecules",
      "shorten the chain length of rubber polymers"
    ],
    answer: "form cross-links which bind rubber molecules together",
    explanation: "Vulcanization links polymer chains together with sulphur cross-links. This cross-linking makes rubber stronger, more elastic and less sticky."
  }
];

export default chemJamb1985;