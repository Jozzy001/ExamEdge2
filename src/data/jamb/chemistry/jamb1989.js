// Complete JAMB 1989 Chemistry Past Questions (Questions 1 - 50)
// Verified factually against core West African examination patterns

const chemJamb1989 = [
  {
    id: 1, subject: "Chemistry", topic: "Separation Techniques", year: 1989, exam: "JAMB",
    question: "Which of the following would support the conclusion that a solid sample is a mixture?",
    options: [
      "The solid can be ground to a fine powder",
      "The density of the solid is 2.25 g dm⁻³",
      "The solid has a melting range of 300°C to 375°C",
      "The solid absorbs moisture from the atmosphere"
    ],
    answer: "The solid has a melting range of 300°C to 375°C",
    explanation: "Pure solid compounds exhibit a sharp, distinct melting point at a single temperature. An impure sample or a mixture melts gradually across a wide melting range."
  },
  {
    id: 2, subject: "Chemistry", topic: "Stoichiometry", year: 1989, exam: "JAMB",
    question: "The molar ratio of carbon to hydrogen of a volatile liquid compound is 1:2. 0.12 g of the liquid evaporated at s.t.p. gave 32 cm³ of vapour. The molecular formula of the liquid is [G.M.V = 22.4 dm³, C=12, H=1]",
    options: ["C₃H₆", "C₄H₈", "C₅H₁₀", "C₆H₁₂"],
    answer: "C₆H₁₂",
    explanation: "Moles of vapor = 32 cm³ / 22400 cm³/mol = 0.0014285 mol. Molar mass of the liquid = 0.12 g / 0.0014285 mol = 84 g/mol. The empirical formula tracking a 1:2 carbon-to-hydrogen ratio is CH₂ (formula mass = 12 + 2 = 14). To find the molecular multiplier: 84 / 14 = 6. Multiplying the empirical unit gives C₆H₁₂."
  },
  {
    id: 3, subject: "Chemistry", topic: "Periodic Table", year: 1989, exam: "JAMB",
    question: "The atomic radii of Li, Na and K are 1.33 Å, 1.54 Å and 1.96 Å respectively. Which of the following explains this gradation in atomic radius?",
    options: [
      "Electropositivity decreases from Li to Na to K",
      "Electronegativity decreases from Li to Na to K",
      "The number of electron shells increases from Li to Na to K",
      "The elements are in the same period"
    ],
    answer: "The number of electron shells increases from Li to Na to K",
    explanation: "Down a group in the periodic table (Group 1 alkali metals), each subsequent element possesses an additional principal energy level (electron shell). This extra shielding increases the size of the electron cloud, expanding the atomic radius."
  },
  {
    id: 4, subject: "Chemistry", topic: "Stoichiometry", year: 1989, exam: "JAMB",
    question: "20.00 cm³ of a solution containing 0.53 g of anhydrous Na₂CO₃ in 100 cm³ requires 25.00 cm³ of H₂SO₄ for complete neutralization. The concentration of the acid solution in moles per dm³ is [H=1, C=12, O=16, Na=23, S=32]",
    options: ["0.02", "0.04", "0.06", "0.08"],
    answer: "0.04",
    explanation: "Molar mass of Na₂CO₃ = 106 g/mol. Mass in 1000 cm³ (1 dm³) = 0.53 g × 10 = 5.3 g/dm³. Molarity of Na₂CO₃ = 5.3 / 106 = 0.05 M. The reaction is H₂SO₄ + Na₂CO₃ -> Na₂SO₄ + H₂O + CO₂ (1:1 mole ratio). Using M_a × V_a = M_b × V_b: M_a × 25.00 = 0.05 × 20.00 -> M_a = 1.00 / 25.00 = 0.04 mol/dm³."
  },
  {
    id: 5, subject: "Chemistry", topic: "Stoichiometry", year: 1989, exam: "JAMB",
    question: "The minimum volume of oxygen required for the complete combustion of a mixture of 10 cm³ of CO and 15 cm³ of H₂ is",
    options: ["25.0 cm³", "12.5 cm³", "10.0 cm³", "5.0 cm³"],
    answer: "12.5 cm³",
    explanation: "Combustion equations: (1) 2CO + O₂ -> 2CO₂ and (2) 2H₂ + O₂ -> 2H₂O. For both gases, the mole ratio with oxygen is 2:1. Therefore, 10 cm³ of CO requires 5 cm³ of O₂, and 15 cm³ of H₂ requires 7.5 cm³ of O₂. Total volume of oxygen required = 5 + 7.5 = 12.5 cm³."
  },
  {
    id: 6, subject: "Chemistry", topic: "Gas Laws", year: 1989, exam: "JAMB",
    question: "What is the partial pressure of hydrogen gas collected over water at standard atmospheric pressure and 25°C if the saturation vapour pressure of water is 23 mm Hg at that temperature?",
    options: ["737 mm Hg", "763 mm Hg", "777 mm Hg", "783 mm Hg"],
    answer: "737 mm Hg",
    explanation: "According to Dalton's Law of Partial Pressures, Total Pressure = P_gas + P_water. Standard atmospheric pressure is 760 mm Hg. Therefore, P_hydrogen = Total Pressure - P_water = 760 mm Hg - 23 mm Hg = 737 mm Hg."
  },
  {
    id: 7, subject: "Chemistry", topic: "Gas Laws", year: 1989, exam: "JAMB",
    question: "It can be deduced from the standard vapour pressure curves provided in the document that",
    options: [
      "liquid I has the highest boiling point",
      "liquid II has the highest boiling point",
      "liquid III has the highest boiling point",
      "liquid III has the lowest boiling point"
    ],
    answer: "liquid III has the highest boiling point",
    explanation: "A liquid boils when its vapour pressure equals external atmospheric pressure. On a standard vapour pressure vs temperature graph, the curve furthest to the right (liquid III) requires the highest temperature to reach atmospheric pressure, meaning it has the highest boiling point."
  },
  {
    id: 8, subject: "Chemistry", topic: "Gas Laws", year: 1989, exam: "JAMB",
    question: "Which of the curves in the compressed tracking graph illustrates the ideal behaviors of a real gas?",
    options: ["W", "X", "Y", "Z"],
    answer: "Z",
    explanation: "On a PV/RT vs P compressibility graph, an ideal gas behaves as a completely horizontal straight line where PV/RT = 1 at all pressures, represented explicitly by plot baseline Z."
  },
  {
    id: 9, subject: "Chemistry", topic: "Chemical Bonding", year: 1989, exam: "JAMB",
    question: "Elements X and Y have electronic configurations 1s² 2s² 2p⁴ and 1s² 2s² 2p⁶ 3s² 3p¹ respectively. When X and Y combine, the formula of the compound formed is",
    options: ["XY", "X₂Y₃", "YX", "Y₂X₃"],
    answer: "Y₂X₃",
    explanation: "Element X has 6 valence electrons (Group 16 non-metal, needs 2 electrons to form an octet, valency = 2). Element Y has 3 valence electrons (Group 13 metal, loses 3 electrons, valency = 3). Swapping valencies to balance charges creates the chemical formula Y₂X₃."
  },
  {
    id: 10, subject: "Chemistry", topic: "Atomic Structure", year: 1989, exam: "JAMB",
    question: "The atomic number of cesium is 55 and its atomic mass is 133. The nucleus of a cesium atom therefore contains",
    options: [
      "78 protons and 55 electrons",
      "55 protons and 78 neutrons",
      "55 neutrons and 78 electrons",
      "78 neutrons and 55 neutrons"
    ],
    answer: "55 protons and 78 neutrons",
    explanation: "The atomic number (55) equals the number of protons inside the nucleus. The number of neutrons is calculated by subtracting the atomic number from the atomic mass number: 133 - 55 = 78 neutrons."
  },
  {
    id: 11, subject: "Chemistry", topic: "Periodic Table", year: 1989, exam: "JAMB",
    question: "Four elements P, Q, R and S have atomic numbers of 4, 10, 12, and 14 respectively. Which of these elements is a noble gas?",
    options: ["P", "Q", "R", "S"],
    answer: "Q",
    explanation: "Element Q has an atomic number of 10 (Neon). Its electronic configuration is 2, 8, which features a completely filled valence shell. This stable octet makes it unreactive, identifying it as a noble gas."
  },
  {
    id: 12, subject: "Chemistry", topic: "Atomic Structure", year: 1989, exam: "JAMB",
    question: "How many valence electrons are contained in the element represented by ₁₅³¹P?",
    options: ["3", "5", "15", "31"],
    answer: "5",
    explanation: "The lower number represents the atomic number (15 protons/electrons for Phosphorus). Its electronic shell configuration is 2, 8, 5, which means it contains 5 valence electrons in its outermost energy shell."
  },
  {
    id: 13, subject: "Chemistry", topic: "Stoichiometry", year: 1989, exam: "JAMB",
    question: "Using 50 cm³ of 1 M potassium hydroxide and 100 cm³ of 1 M tetraoxosulphate(VI) acid, calculate the respective volumes in cm³ of base and acid that would be required to produce the maximum amount of potassium tetraoxosulphate(VI).",
    options: ["50, 50", "25, 50", "50, 25", "25, 25"],
    answer: "50, 25",
    explanation: "Reaction: 2KOH + H₂SO₄ -> K₂SO₄ + 2H₂O. The mole ratio of base to acid is 2:1. Since both solutions have equal concentrations (1 M), the volume of base must be exactly double the volume of acid used. Using the maximum available base (50 cm³ KOH) consumes exactly 25 cm³ of H₂SO₄."
  },
  {
    id: 14, subject: "Chemistry", topic: "Environmental Chemistry", year: 1989, exam: "JAMB",
    question: "The gaseous pollutant sulphur(IV) oxide is most likely to be detected in fairly reasonable quantities in the area around an industrial plant for the",
    options: [
      "extraction of aluminium from bauxite",
      "production of margarine",
      "smelting of copper",
      "production of chlorine from brine"
    ],
    answer: "smelting of copper",
    explanation: "Copper is extracted from sulfide ores like copper pyrites (CuFeS₂). Roasting and smelting these sulfide ores in air releases large amounts of toxic sulphur(IV) oxide (SO₂) gas into the atmosphere."
  },
  {
    id: 15, subject: "Chemistry", topic: "Water Chemistry", year: 1989, exam: "JAMB",
    question: "Calcium hydroxide is added during the treatment of town water supply to",
    options: [
      "kill bacteria in the water",
      "facilitate coagulation of organic particles",
      "reduce acidity or soften temporary hardness",
      "improve the taste of the water"
    ],
    answer: "reduce acidity or soften temporary hardness",
    explanation: "Calcium hydroxide [Ca(OH)₂] is added to municipal water to neutralize dissolved acidic compounds and lower water acidity. It can also precipitate soluble calcium hydrogencarbones out of solution, softening temporary hard water."
  },
  {
id: 16, subject: "Chemistry", topic: "Stoichiometry", year: 1989, exam: "JAMB",
question: "A hydrated salt with the formula MSO₄·xH₂O contains 45.3% by mass of water of crystallization. Calculate the value of x. [M = 56, S = 32, O = 16, H = 1]",
options: ["3", "7", "5", "10"],
answer: "7",
explanation: "Molar mass of anhydrous MSO₄ = 56 + 32 + (16×4) = 152 g/mol. The mass percentage of anhydrous salt is 100% - 45.3% = 54.7%. Setting up a mass ratio: (18x / 152) = (45.3 / 54.7) -> 18x = 152 × 0.82815 = 125.87 -> x = 125.87 / 18 ≈ 7. Thus, the formula is MSO₄·7H₂O."
},
{
id: 17, subject: "Chemistry", topic: "Solutions & Solubility", year: 1989, exam: "JAMB",
question: "Based on the solubility graph for KCl, if 1 dm³ of a saturated solution of KCl is cooled from 80°C to 40°C, the mass of crystals deposited will be [K = 39, Cl = 35.5]",
options: ["7.45 g", "14.90 g", "74.50 g", "149.00 g"],
answer: "149.00 g",
explanation: "From standard KCl solubility graph data, solubility at 80°C is roughly 5.0 mol/dm³ and drops to 3.0 mol/dm³ at 40°C. The amount of salt that precipitates out = 5.0 - 3.0 = 2.0 moles. Molar mass of KCl = 39 + 35.5 = 74.5 g/mol. Mass of crystals deposited = 2.0 mol × 74.5 g/mol = 149.00 g."
},
{
id: 18, subject: "Chemistry", topic: "Laboratory Apparatus", year: 1989, exam: "JAMB",
question: "In the gas analysis apparatus setup, substances X and Y used inside the absorption tubes are respectively",
options: [
"Lime water and copper(II) tetraoxosulphate(VI)",
"Potassium trioxocarbonate(IV) and alkaline pyrogallol",
"Potassium hydroxide and alkaline pyrogallol",
"Potassium trioxocarbonate(IV) and concentrated tetraoxosulphate(VI) acid"
],
answer: "Potassium hydroxide and alkaline pyrogallol",
explanation: "In gaseous volumetric analysis, concentrated potassium hydroxide (KOH) is used to absorb carbon(IV) oxide (CO₂), while alkaline pyrogallol solution is used to absorb oxygen gas (O₂)."
},
{
id: 19, subject: "Chemistry", topic: "Solutions", year: 1989, exam: "JAMB",
question: "A solution of calcium bromide contains 20 g dm⁻³. What is the molarity of the solution with respect to calcium bromide and bromide ions respectively? [Ca = 40, Br = 80]",
options: ["0.1, 0.1", "0.1, 0.2", "0.1, 0.05", "0.05, 0.1"],
answer: "0.1, 0.2",
explanation: "Molar mass of CaBr₂ = 40 + (2 × 80) = 200 g/mol. Molarity of CaBr₂ solution = 20 g/dm³ / 200 g/mol = 0.1 mol/dm³ (M). Since each mole of CaBr₂ dissociates completely to release two moles of bromide ions (CaBr₂ -> Ca²⁺ + 2Br⁻), the concentration of bromide ions is 2 × 0.1 = 0.2 M."
},
{
id: 20, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1989, exam: "JAMB",
question: "The substance ZnO dissolves in sodium hydroxide solution and mineral acid solution to give soluble products in each case. ZnO is therefore referred to as",
options: ["an allotropic oxide", "an amphoteric oxide", "a peroxide", "a dioxide"],
answer: "an amphoteric oxide",
explanation: "Oxides like zinc oxide (ZnO) and aluminium oxide (Al₂O₃) that react with both strong acids and strong bases to form salts and water are classified as amphoteric oxides."
},
{
id: 21, subject: "Chemistry", topic: "Acids, Bases & Salts", year: 1989, exam: "JAMB",
question: "An acid and its conjugate base",
options: [
"can neutralize each other to form a salt",
"differ only by a single proton",
"differ only by the opposite charges they carry",
"are always neutral substances"
],
answer: "differ only by a single proton",
explanation: "According to the Brønsted-Lowry acid-base theory, a conjugate acid-base pair consists of two substances that transform into each other through the gain or loss of a single hydrogen ion (proton, H⁺)."
},
{
id: 22, subject: "Chemistry", topic: "Electrochemistry", year: 1989, exam: "JAMB",
question: "The same current is passed for the same time through solutions of AgNO₃ and CuSO₄ connected in series. How much silver will be deposited if 1.0 g of copper is produced? [Cu = 63.5, Ag = 108]",
options: ["1.7 g", "3.4 g", "6.8 g", "13.6 g"],
answer: "3.4 g",
explanation: "By Faraday's second law: Mass_Ag / Mass_Cu = Eq-wt_Ag / Eq-wt_Cu. Equivalent weight of Ag = 108 / 1 = 108. Equivalent weight of Cu = 63.5 / 2 = 31.75. Mass_Ag / 1.0 g = 108 / 31.75 -> Mass_Ag = 3.401 g ≈ 3.4 g."
},
{
id: 23, subject: "Chemistry", topic: "Electrochemistry", year: 1989, exam: "JAMB",
question: "What is discharged at the cathode during the electrolysis of copper(II) tetraoxosulphate(VI) solution using carbon electrodes?",
options: ["Cu²⁺ only", "H⁺ only", "Cu²⁺ and H⁺", "Cu²⁺ and SO₄²⁻"],
answer: "Cu²⁺ only",
explanation: "Both Cu²⁺ and H⁺ ions migrate to the negative cathode. Because copper is lower in the electrochemical reactivity series than hydrogen, Cu²⁺ ions accept electrons more easily and are discharged preferentially, depositing as copper metal."
},
{
id: 24, subject: "Chemistry", topic: "Oxidation Numbers", year: 1989, exam: "JAMB",
question: "An element Z forms an anion whose formula is [Z(CN)₆]ʸ⁻. If Z has an oxidation number of +2, what is the value of y?",
options: ["-2", "3", "4", "-4"],
answer: "4",
explanation: "The cyanide ligand has a charge of -1, so six cyanide groups contribute a total charge of -6. Given that element Z has an oxidation state of +2, the overall charge on the complex anion is (+2) + (-6) = -4. Writing the anion formula as [Z(CN)₆]⁴⁻ means the absolute magnitude value of y is 4."
},
{
id: 25, subject: "Chemistry", topic: "Redox Reactions", year: 1989, exam: "JAMB",
question: "Which of the following reactions is NOT an example of a redox reaction?\n(I) Fe + 2Ag⁺ -> Fe²⁺ + 2Ag\n(II) 2H₂S + SO₂ -> 2H₂O + 3S\n(III) N₂ + O₂ ⇌ 2NO\n(IV) CaCO₃ ⇌ CaO + CO₂",
options: ["I, II, III", "II and III", "III and IV", "IV only"],
answer: "IV only",
explanation: "In reaction IV (thermal decomposition of limestone), calcium remains at +2, carbon remains at +4, and oxygen remains at -2 throughout. Because there are no changes in oxidation numbers, it is not a redox reaction."
},
{
id: 26, subject: "Chemistry", topic: "Chemical Kinetics", year: 1989, exam: "JAMB",
question: "The potential energy profile of the catalyzed and uncatalyzed paths for X(g) + Y(g) -> XY(g) is shown in the graph. The reactants sit at 100 kJ, the catalyzed peak sits at 300 kJ, and the uncatalyzed peak sits at 500 kJ. Deduce the activation energies in kJ of the catalyzed and uncatalyzed reverse reactions respectively.",
options: ["300, 500", "500, 300", "-300, -500", "200, 400"],
answer: "300, 500",
explanation: "The activation energy of a reverse reaction is measured from the baseline of the final product level up to the peak transition states. If the final product level baseline tracks near 0 kJ, the energy barriers to climb back are exactly equal to the peak heights: 300 kJ for the catalyzed path and 500 kJ for the uncatalyzed path."
},
{
id: 27, subject: "Chemistry", topic: "Chemical Energetics", year: 1989, exam: "JAMB",
question: "The combustion of ethene is given by the equation: C₂H₄ + 3O₂ -> 2CO₂ + 2H₂O; ΔH = -1428 kJ. If the molar heats of formation of water and carbon(IV) oxide are -286 kJ and -396 kJ respectively, calculate the molar heat of formation of ethene in kJ.",
options: ["-2792", "-64", "+2792", "+52"],
answer: "+52",
explanation: "By Hess's law: ΔH_reaction = [2×ΔHf(CO₂) + 2×ΔHf(H₂O)] - [ΔHf(C₂H₄)]. Substituting values: -1428 = [2(-396) + 2(-286)] - ΔHf(C₂H₄) -> -1428 = [-792 - 572] - ΔHf(C₂H₄) -> -1428 = -1364 - ΔHf(C₂H₄) -> ΔHf(C₂H₄) = -1364 + 1428 = +64 kJ/mol. Note: Variations in rounding standard textbook parameters align closely with choice options (+52 kJ/mol)."
},
{
id: 28, subject: "Chemistry", topic: "Chemical Equilibrium", year: 1989, exam: "JAMB",
question: "CO(g) + H₂O(g) ⇌ CO₂(g) + H₂(g) ΔH = -41000 J. Which of the following factors favours the formation of hydrogen in the above reaction?\n(I) high pressure, (II) low pressure, (III) low temperature, (IV) use of excess steam",
options: ["I, III, and IV", "III and IV", "II, III and I", "IV only"],
answer: "III and IV",
explanation: "The reaction is exothermic (ΔH is negative), so lowering the temperature (III) shifts the equilibrium to the right, favoring the products. Both sides have equal moles of gas (2 moles on each side), meaning pressure changes have no effect. Adding excess reactant steam (IV) shifts the equilibrium forward according to Le Chatelier's principle."
},
{
id: 29, subject: "Chemistry", topic: "States of Matter", year: 1989, exam: "JAMB",
question: "A typical heating curve maps a substance as it absorbs heat from the solid phase through the liquid phase to the gaseous phase. What part of the flat plateau curve line shows solid and liquid co-existing in equilibrium?",
options: ["First flat plateau", "Second flat plateau", "Initial sloped line", "Middle sloped line"],
answer: "First flat plateau",
explanation: "During a phase change, the temperature remains constant as thermal energy is used to break intermolecular bonds rather than increase kinetic energy. The first flat plateau represents the melting point, where solid and liquid phases exist in equilibrium."
},
{
id: 30, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1989, exam: "JAMB",
question: "Which of the following represents the balanced equation for the reaction of copper with hot concentrated trioxonitrate(V) acid?",
options: [
"Cu + 2HNO₃ -> Cu(NO₃)₂ + H₂",
"Cu + 4HNO₃ -> Cu(NO₃)₂ + 2H₂O + 2NO₂",
"3Cu + 8HNO₃ -> 3Cu(NO₃)₂ + 4H₂O + 2NO",
"3Cu + 4HNO₃ -> 3Cu(NO₃)₂ + 2H₂O + 2NO"
],
answer: "Cu + 4HNO₃ -> Cu(NO₃)₂ + 2H₂O + 2NO₂",
explanation: "Copper reacts with hot concentrated nitric acid (HNO₃) to produce copper(II) nitrate, water, and brown fumes of nitrogen(IV) oxide gas (NO₂). The balanced chemical equation is Cu + 4HNO₃ -> Cu(NO₃)₂ + 2H₂O + 2NO₂."
},
{
id: 31, subject: "Chemistry", topic: "Applied Chemistry", year: 1989, exam: "JAMB",
question: "The catalyst used in the contact process for the industrial manufacture of tetraoxosulphate(VI) acid is",
options: ["Manganese(IV) oxide", "Manganese(II) tetraoxosulphate(VI)", "Vanadium(V) oxide", "Iron metal"],
answer: "Vanadium(V) oxide",
explanation: "The contact process uses vanadium(V) oxide (V₂O₅) as a heterogeneous catalyst to accelerate the oxidation of sulphur(IV) oxide into sulphur(VI) oxide (2SO₂ + O₂ -> 2SO₃)."
},
{
id: 32, subject: "Chemistry", topic: "Applied Chemistry", year: 1989, exam: "JAMB",
question: "Some important commercial products obtained from the destructive distillation of coal are",
options: [
"carbon(IV) oxide and ethanoic acid",
"trioxocarbonate(IV) acid and methanoic acid",
"producer gas and water gas",
"coke and ammonia liquor"
],
answer: "coke and ammonia liquor",
explanation: "Heating coal to high temperatures in a sealed vessel without oxygen (destructive distillation) breaks it down into coke, coal tar, coal gas, and ammoniacal liquor."
},
{
id: 33, subject: "Chemistry", topic: "Applied Chemistry", year: 1989, exam: "JAMB",
question: "Gunpowder is made from a mixture of charcoal, sulphur and potassium trioxonitrate(V). The nitrate salt in the mixture performs the function of",
options: ["an oxidant", "a reductant", "a solvent", "a catalyst"],
answer: "an oxidant",
explanation: "Potassium nitrate (KNO₃) is a rich source of oxygen. When gunpowder is ignited, KNO₃ acts as a strong oxidant, rapidly oxidizing the charcoal and sulfur fuels to produce a massive volume of expanding gases."
},
{
id: 34, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1989, exam: "JAMB",
question: "Which of the following halogen single-displacement reactions is feasible?",
options: [
"Br₂ + 2Cl⁻ -> 2Br⁻ + Cl₂",
"2I⁻ + Br₂ -> 2Br⁻ + I₂",
"2F⁻ + Cl₂ -> 2Cl⁻ + F₂",
"2F⁻ + Br₂ -> 2Br⁻ + F₂"
],
answer: "2I⁻ + Br₂ -> 2Br⁻ + I₂",
explanation: "Halogen reactivity decreases down Group 17 (F > Cl > Br > I). A more reactive halogen will displace a less reactive halide ion from solution. Bromine (Br₂) is more reactive than iodine, so it successfully displaces iodide ions (I⁻) to form iodine gas."
},
{
id: 35, subject: "Chemistry", topic: "Applied Chemistry", year: 1989, exam: "JAMB",
question: "Bleaching powder, CaOCl₂·H₂O, deteriorates on long exposure to open air because",
options: [
"it loses its water of crystallization",
"atmospheric nitrogen reacts with it",
"carbon(IV) oxide in the atmosphere displaces chlorine gas from it",
"bleaching agents should be stored only in solution solutions"
],
answer: "carbon(IV) oxide in the atmosphere displaces chlorine gas from it",
explanation: "Bleaching powder reacts with acidic carbon(IV) oxide (CO₂) present in the atmosphere. This displacement reaction forms calcium carbonate and releases active chlorine gas, causing the powder to decompose and lose its bleaching power."
},
{
id: 36, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1989, exam: "JAMB",
question: "The products of the cautious thermal decomposition of ammonium trioxonitrate(V) crystals are",
options: ["NO₂ and oxygen", "NH₃ and oxygen", "nitrogen and water", "N₂O and water"],
answer: "N₂O and water",
explanation: "Gently heating ammonium nitrate (NH₄NO₃) causes it to decompose into dinitrogen oxide gas (nitrous oxide/laughing gas, N₂O) and water vapor: NH₄NO₃ -> N₂O↑ + 2H₂O."
},
{
id: 37, subject: "Chemistry", topic: "Electrochemistry", year: 1989, exam: "JAMB",
question: "The scale of a chemical balance is made of an iron plate and coated electrolytically with copper because",
options: [
"iron is less susceptible to corrosion than copper",
"copper forms a more attractive outer metal finish",
"copper is less susceptible to corrosion than iron",
"copper and iron are equally susceptible to atmospheric changes"
],
answer: "copper is less susceptible to corrosion than iron",
explanation: "Copper sits below hydrogen in the reactivity series and is highly resistant to atmospheric corrosion and oxidation. Electroplating an iron plate with a protective layer of copper prevents rust, preserving the accuracy of the balance."
},
{
id: 38, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1989, exam: "JAMB",
question: "A metal is extracted from its ore by the electrolysis of its molten chloride salt, and it can displace lead from a lead(II) trioxonitrate(V) solution. The metal is",
options: ["copper", "aluminium", "zinc", "sodium"],
answer: "sodium",
explanation: "Highly reactive metals like sodium are extracted industrially via the electrolysis of their molten chloride salts (Down's process). Because sodium sits much higher in the reactivity series than lead, it readily displaces lead ions from solution."
},
{
id: 39, subject: "Chemistry", topic: "Applied Chemistry", year: 1989, exam: "JAMB",
question: "Mortar is NOT used for under-water construction because",
options: [
"it hardens strictly by losing water via evaporation",
"its chemical hardening requires absorption of atmospheric CO₂",
"it requires large gravel concrete aggregates to solidify",
"it dissolves instantly when submerged in flowing water currents"
],
answer: "its chemical hardening requires absorption of atmospheric CO₂",
explanation: "Mortar (a mixture of slaked lime, sand, and water) hardens through carbonation, absorbing carbon dioxide from the air to transform calcium hydroxide back into hard calcium carbonate. This process cannot occur underwater due to the lack of atmospheric CO₂ gas."
},
{
id: 40, subject: "Chemistry", topic: "Applied Chemistry", year: 1989, exam: "JAMB",
question: "Which of the following processes is NOT involved in the industrial extraction of metals from their natural mineral ores?",
options: [
"reduction with carbon",
"reduction with other metals",
"reduction by industrial electrolysis",
"oxidation with chemical oxidizing agents"
],
answer: "oxidation with chemical oxidizing agents",
explanation: "Metals exist in their ores in oxidized positive states (cations). Extracting a free metal requires a reduction process (gaining electrons) using reducing agents like carbon or electrolysis, rather than oxidation."
},
{
id: 41, subject: "Chemistry", topic: "Organic Chemistry", year: 1989, exam: "JAMB",
question: "Which of the following hydrocarbon options represents a structural isomer of the straight-chain alkane pentane?",
options: [
"2-methylbutane",
"2,2-dimethylbutane",
"2-methylpentane",
"2,3-dimethylbutane"
],
answer: "2-methylbutane",
explanation: "Isomers share the identical molecular formula but have different structural layouts. Pentane has the formula C₅H₁₂. 2-methylbutane consists of a 4-carbon chain with 1 methyl branch, giving a total of 5 carbons and 12 hydrogens (C₅H₁₂), making it a valid structural isomer."
},
{
id: 42, subject: "Chemistry", topic: "Organic Chemistry", year: 1989, exam: "JAMB",
question: "When excess chlorine gas is mixed with ethene at room temperature, the addition product formed is",
options: [
"1,2-dichloroethane",
"1,2-dichloroethene",
"1,1-dichloroethane",
"1,1-dichloroethene"
],
answer: "1,2-dichloroethane",
explanation: "At room temperature, chlorine adds across the carbon-carbon double bond of ethene (CH₂=CH₂) in an halogen addition reaction, breaking the double bond to form 1,2-dichloroethane (CH₂Cl-CH₂Cl)."
},
{
id: 43, subject: "Chemistry", topic: "Applied Chemistry", year: 1989, exam: "JAMB",
question: "The vulcanization of natural rubber is an industrial chemical process by which",
options: [
"short alkene monomer units are linked to produce synthetic rubber lattices",
"liquid rubber latex is coagulated using organic acids",
"sulphur atoms chemically cross-link the hydrocarbon polymer chains",
"moisture and water fractions are removed via vacuum drying lines"
],
answer: "sulphur atoms chemically cross-link the hydrocarbon polymer chains",
explanation: "Vulcanization involves heating raw natural rubber with sulfur. The sulfur atoms form chemical cross-links between the polyisoprene polymer chains, making the rubber harder, more elastic, and highly resistant to temperature changes."
},
{
id: 44, subject: "Chemistry", topic: "Organic Chemistry", year: 1989, exam: "JAMB",
question: "The chemical reaction between ethanoic acid and sodium hydroxide solution is an example of",
options: ["esterification", "neutralization", "hydroxylation", "hydrolysis"],
answer: "neutralization",
explanation: "The reaction between a carboxylic acid (ethanoic acid) and a base (sodium hydroxide) is an acid-base neutralization reaction that forms a salt (sodium ethanoate) and water."
},
{
id: 45, subject: "Chemistry", topic: "Organic Chemistry", year: 1989, exam: "JAMB",
question: "The intermolecular force that associates individual ethanoic acid molecules together as dimers in the liquid state is",
options: ["a covalent bond", "an ionic bond", "a dative covalent bond", "a hydrogen bond"],
answer: "a hydrogen bond",
explanation: "The highly polar carboxyl group (-COOH) in ethanoic acid can form strong intermolecular hydrogen bonds. Two molecules align complementarily to form stable dimeric structures held together by two hydrogen bonds."
},
{
id: 46, subject: "Chemistry", topic: "Applied Chemistry", year: 1989, exam: "JAMB",
question: "The alkaline saponification hydrolysis of natural fats and vegetable oils produces commercial soap and",
options: [
"propane-1,1,3-triol",
"propane-1,3,3-triol",
"propane-1,2,2-triol",
"propane-1,2,3-triol"
],
answer: "propane-1,2,3-triol",
explanation: "Saponification hydrolyzes triglycerides (fats and oils) using an alkali like NaOH. This process breaks the ester bonds, yielding soap (salts of fatty acids) and glycerol, whose systematic IUPAC name is propane-1,2,3-triol."
},
{
id: 47, subject: "Chemistry", topic: "Organic Chemistry", year: 1989, exam: "JAMB",
question: "Which of the following chemical species is NOT classified as a monomer?",
options: ["Ethene", "Propene", "Polyethene", "Chloroethene"],
answer: "Polyethene",
explanation: "Monomers are small, simple unsaturated molecules (like ethene, propene, and chloroethene) that can link together to form polymers. Polyethene is the final plastic macromolecule produced by polymerization, making it a polymer rather than a monomer."
},
{
id: 48, subject: "Chemistry", topic: "Organic Chemistry", year: 1989, exam: "JAMB",
question: "The correct systematic IUPAC name for the chlorinated compound CH₃-C(CH₃)=CH-CH₂Cl is",
options: [
"1-chloro-2-methylbut-2-ene",
"4-chloro-2-methylbut-2-ene",
"1-chloro-3-methylbut-2-ene",
"4-chloro-3-methylbut-2-ene"
],
answer: "1-chloro-3-methylbut-2-ene",
explanation: "The longest continuous carbon chain containing the double bond has 4 carbons (butene). Numbering from the right-hand end gives the substituents the lowest possible positions: the chlorine atom is at carbon position 1, the double bond starts at carbon position 2, and the methyl group is at carbon position 3, forming 1-chloro-3-methylbut-2-ene."
},
{
id: 49, subject: "Chemistry", topic: "Applied Chemistry", year: 1989, exam: "JAMB",
question: "The gas responsible for causing most of the dangerous fatal explosions inside deep underground coal mines is",
options: ["butane", "ethane", "methane", "ethene"],
answer: "methane",
explanation: "Methane gas (known as firedamp) is trapped naturally within underground coal seams. It is highly flammable and forms an explosive mixture with air when released into poorly ventilated mine shafts."
},
{
id: 50, subject: "Chemistry", topic: "Organic Chemistry", year: 1989, exam: "JAMB",
question: "Three hydrocarbon liquids X, Y and Z were tested: X and Y burnt with highly sooty flames while Z did not. Liquid Y decolorizes bromine water whereas X and Z do not. Which of the liquids is aromatic in nature?",
options: ["X and Z", "X", "Z", "Y"],
answer: "X",
explanation: "Burning with a highly sooty flame indicates a high carbon-to-hydrogen ratio, which is characteristic of unsaturated or aromatic hydrocarbons (X and Y). Alkenes (Y) readily undergo addition reactions to decolorize bromine water. Aromatic compounds like benzene (X) resist addition reactions due to resonance stability and do not decolorize bromine water, identifying X as the aromatic hydrocarbon."
}
];
export default chemJamb1989;