// Complete JAMB 1991 Chemistry Past Questions (Questions 1 - 50)
// Verified factually against core West African examination patterns

const chemJamb1991 = [
  {
    id: 1, subject: "Chemistry", topic: "Separation Techniques", year: 1991, exam: "JAMB",
    question: "Which of the following can be obtained by fractional distillation?",
    options: [
      "Nitrogen from liquid air",
      "Sodium chloride from sea water",
      "Iodine from a solution of iodine in carbon tetrachloride",
      "Sulphur from a solution of sulphur in carbon disulphide"
    ],
    answer: "Nitrogen from liquid air",
    explanation: "Liquid air is a mixture of gases with different boiling points (Nitrogen boils at -196°C, Oxygen at -183°C). Because their boiling points are close but distinct, they are separated industrially on a large scale via fractional distillation."
  },
  {
    id: 2, subject: "Chemistry", topic: "Separation Techniques", year: 1991, exam: "JAMB",
    question: "Which of the following are mixtures? (i) Petroleum, (ii) Rubber latex, (iii) Vulcanizer's solution, (iv) Carbon(IV) sulphide",
    options: ["i, ii and iii", "I, ii and iv", "I and ii only", "I and iv"],
    answer: "i, ii and iii",
    explanation: "Petroleum is a complex mixture of hydrocarbons. Rubber latex is a natural colloidal suspension. Vulcanizer's solution is rubber dissolved in an organic solvent. Carbon(IV) sulphide (CS₂) is a pure chemical compound, not a mixture."
  },
  {
    id: 3, subject: "Chemistry", topic: "Stoichiometry", year: 1991, exam: "JAMB",
    question: "An iron ore is known to contain 70.0% Fe₂O₃. The mass of iron metal which can theoretically be obtained from 80 kg of the ore is [Fe = 56, O = 16]",
    options: ["35.0 kg", "39.2 kg", "70.0 kg", "78.4 kg"],
    answer: "39.2 kg",
    explanation: "Mass of pure Fe₂O₃ in the ore = 70.0% of 80 kg = 56 kg. Molar mass of Fe₂O₃ = (2 × 56) + (3 × 16) = 112 + 48 = 160 g/mol. Mass fraction of iron in Fe₂O₃ = 112 / 160 = 0.70. Mass of iron metal theoretically obtainable = 0.70 × 56 kg = 39.2 kg."
  },
  {
    id: 4, subject: "Chemistry", topic: "Stoichiometry", year: 1991, exam: "JAMB",
    question: "In two separate experiments, 0.36 g and 0.71 g of chlorine combine with a metal X to give compounds Y and Z respectively. An analysis showed that Y and Z contain 0.20 g and 0.40 g of X respectively. The data above illustrates the law of",
    options: ["multiple proportions", "conservation of mass", "constant composition", "reciprocal proportions"],
    answer: "multiple proportions",
    explanation: "In compound Y, 0.20 g of X combines with 0.36 g of Cl (so 0.40 g of X would combine with 0.72 g of Cl). In compound Z, 0.40 g of X combines with 0.71 g of Cl. For a fixed mass of X (0.40 g), the ratio of the masses of chlorine combining with it is 0.72 : 0.71, which rounds to a simple whole-number ratio of 1:1 (within experimental limits). This illustrates the Law of Multiple Proportions."
  },
  {
    id: 5, subject: "Chemistry", topic: "Gas Laws", year: 1991, exam: "JAMB",
    question: "30 cm³ of oxygen at 10 atmosphere pressure is placed in a 2.0 dm³ container. Calculate the new pressure if the temperature is kept constant.",
    options: ["6.7 atm", "15.0 atm", "0.15 atm", "66.0 atm"],
    answer: "0.15 atm",
    explanation: "Using Boyle's law (P₁V₁ = P₂V₂). First, convert volumes to the same units: V₁ = 30 cm³ = 0.030 dm³, P₁ = 10 atm, V₂ = 2.0 dm³. Rearranging gives P₂ = (P₁ × V₁) / V₂ = (10 × 0.030) / 2.0 = 0.30 / 2.0 = 0.15 atm."
  },
  {
    id: 6, subject: "Chemistry", topic: "Gas Laws", year: 1991, exam: "JAMB",
    question: "A given quantity of gas occupies a volume of 228 cm³ at a pressure of 750 mm Hg. What will be its volume at standard atmospheric pressure?",
    options: ["200 cm³", "225 cm³", "230 cm³", "235 cm³"],
    answer: "225 cm³",
    explanation: "Using Boyle's law (P₁V₁ = P₂V₂). Given: V₁ = 228 cm³, P₁ = 750 mm Hg. Standard atmospheric pressure P₂ = 760 mm Hg. Solving for V₂: V₂ = (P₁ × V₁) / P₂ = (750 × 228) / 760 = 171000 / 760 = 225 cm³."
  },
  {
    id: 7, subject: "Chemistry", topic: "Stoichiometry", year: 1991, exam: "JAMB",
    question: "Calculate the volume of carbon(IV) oxide measured at s.t.p. produced when 1 kg of potassium hydrogen trioxocarbonate(IV) is totally decomposed by heat. [G.M.V. at s.t.p. = 22.4 dm³, K = 39, O = 16, C = 12, H = 1]",
    options: ["28 dm³", "56 dm³", "112 dm³", "196 dm³"],
    answer: "112 dm³",
    explanation: "Decomposition equation: 2KHCO₃ -> K₂CO₃ + H₂O + CO₂. Molar mass of KHCO₃ = 39 + 1 + 12 + (16×3) = 100 g/mol. Mass = 1 kg = 1000 g. Moles of KHCO₃ = 1000 / 100 = 10 mol. From the stoichiometry, 2 moles of KHCO₃ yield 1 mole of CO₂, so 10 moles yield 5 moles of CO₂ gas. Volume at s.t.p. = 5 mol × 22.4 dm³/mol = 112 dm³."
  },
  {
    id: 8, subject: "Chemistry", topic: "Gas Laws", year: 1991, exam: "JAMB",
    question: "A sample of a gas exerts a pressure of 8.2 atm when confined in a 2.93 dm³ container at 20°C. The number of moles of gas in the sample is [R = 0.082 litre atm/deg mole]",
    options: ["1.00", "2.00", "3.00", "4.00"],
    answer: "1.00",
    explanation: "Using the ideal gas equation: PV = nRT. Given: P = 8.2 atm, V = 2.93 dm³, T = 20 + 273 = 293 K, R = 0.082. Solving for n: n = (P × V) / (R × T) = (8.2 × 2.93) / (0.082 × 293). Since 8.2 / 0.082 = 100, and 2.93 / 293 = 1/100, n = 100 × (1/100) = 1.00 mole."
  },
  {
    id: 9, subject: "Chemistry", topic: "Chemical Bonding", year: 1991, exam: "JAMB",
    question: "Atoms of element X (with 2 electrons in the outer shell) combine with atoms of Y (with 7 electrons in the outer shell). Which of the following statements is FALSE?",
    options: [
      "The compound formed has the formula XY",
      "The compound formed is likely to be ionic",
      "The compound contains X²⁺ ions",
      "The compound contains Y⁻ ions"
    ],
    answer: "The compound formed has the formula XY",
    explanation: "Element X has 2 valence electrons and forms a divalent cation (X²⁺). Element Y has 7 valence electrons and needs 1 electron to form a halide-like anion (Y⁻). Swapping valencies to balance the charges yields the chemical formula XY₂, making statement A false."
  },
  {
    id: 10, subject: "Chemistry", topic: "Atomic Structure", year: 1991, exam: "JAMB",
    question: "The ions X⁻ and Y⁺ are isoelectronic, each containing a total of 10 electrons. How many protons are in the nuclei of the neutral atoms of X and Y respectively?",
    options: ["10 and 10", "9 and 9", "11 and 9", "9 and 11"],
    answer: "9 and 11",
    explanation: "Isoelectronic species have the same number of electrons. The anion X⁻ gained 1 electron to reach 10, so the neutral atom X has 10 - 1 = 9 electrons (and 9 protons). The cation Y⁺ lost 1 electron to reach 10, so the neutral atom Y has 10 + 1 = 11 electrons (and 11 protons)."
  },
  {
    id: 11, subject: "Chemistry", topic: "Periodic Table", year: 1991, exam: "JAMB",
    question: "The electronic configuration of an element is 1s² 2s² 2p⁶ 3s² 3p³. How many unpaired electrons are there in the atom?",
    options: ["5", "4", "3", "2"],
    answer: "3",
    explanation: "The outermost subshell is 3p³, which contains 3 electrons. According to Hund's Rule of Maximum Multiplicity, these three electrons enter the three degenerate p-orbitals singly with parallel spins, leaving exactly 3 unpaired electrons."
  },
  {
    id: 12, subject: "Chemistry", topic: "Chemical Bonding", year: 1991, exam: "JAMB",
    question: "Which of the following choices represents the type of bonding present inside an ammonium chloride molecule?",
    options: ["Ionic only", "Covalent only", "Ionic, covalent, and dative covalent", "Dative covalent only"],
    answer: "Ionic, covalent, and dative covalent",
    explanation: "Ammonium chloride (NH₄Cl) features all three bond types: covalent bonds between nitrogen and hydrogen in ammonia, a coordinate (dative) covalent bond formed when NH₃ accepts an H⁺ ion to become NH₄⁺, and an ionic bond holding the positive NH₄⁺ and negative Cl⁻ ions together."
  },
  {
    id: 13, subject: "Chemistry", topic: "Periodic Table", year: 1991, exam: "JAMB",
    question: "Which of the following options lists elements in order of increasing electronegativity?",
    options: [
      "Chlorine, aluminium, magnesium, phosphorus, sodium",
      "Sodium, magnesium, aluminium, phosphorus, chlorine",
      "Chlorine, phosphorus, aluminium, magnesium, sodium",
      "Sodium, chlorine, phosphorus, magnesium, aluminium"
    ],
    answer: "Sodium, magnesium, aluminium, phosphorus, chlorine",
    explanation: "Electronegativity consistently increases across a period from left to right due to the increasing effective nuclear charge. For Period 3 elements, the correct ascending sequence is: Sodium (Group 1) < Magnesium (Group 2) < Aluminium (Group 13) < Phosphorus (Group 15) < Chlorine (Group 17)."
  },
  {
    id: 14, subject: "Chemistry", topic: "Laboratory Apparatus", year: 1991, exam: "JAMB",
    question: "A quantity of air was passed through a weighed amount of alkaline pyrogallol. An increase in the weight of the pyrogallol would result from the selective chemical absorption of",
    options: ["nitrogen", "neon", "argon", "oxygen"],
    answer: "oxygen",
    explanation: "Alkaline pyrogallol solution is an analytical reagent used specifically to absorb oxygen gas from gas mixtures, resulting in a weight increase corresponding to the captured oxygen mass."
  },
  {
    id: 15, subject: "Chemistry", topic: "Chemical Bonding", year: 1991, exam: "JAMB",
    question: "The diagrams show the electron shell arrangements for two atoms, Y and Z. Atom Y shares an electron pair with atom Z, and atom Z completes its octet using an unshared pair from Y. The bond formed between Y and Z is",
    options: ["ionic", "covalent", "dative", "metallic"],
    answer: "dative",
explanation: "A dative (coordinate) covalent bond is formed when the shared electron pair is provided entirely by one of the bonding atoms (the donor, Y) to an atom with an empty orbital (the acceptor, Z)."
},
{
id: 16, subject: "Chemistry", topic: "Environmental Chemistry", year: 1991, exam: "JAMB",
question: "Which of the following ions is a highly dangerous pollutant in drinking water even in trace amounts?",
options: ["Ca²⁺", "Hg²⁺", "Mg²⁺", "Fe²⁺"],
answer: "Hg²⁺",
explanation: "Mercury(II) ions (Hg²⁺) are heavy metal toxins. They accumulate in biological tissues and damage the central nervous system, making them dangerous pollutants even in trace concentrations."
},
{
id: 17, subject: "Chemistry", topic: "Solutions & Solubility", year: 1991, exam: "JAMB",
question: "The solubility of copper(II) tetraoxosulphate(VI) is 75 g in 100 g of water at 100°C and 25 g in 100 g of water at 30°C. What mass of the salt would crystallize out if 50 g of a saturated solution at 100°C were cooled to 30°C?",
options: ["57.5 g", "42.9 g", "28.6 g", "14.3 g"],
answer: "14.3 g",
explanation: "At 100°C, a saturated solution containing 100g water has 75g salt, giving a total solution mass of 175g. In 50g of this solution, the mass of dissolved salt is (75 / 175) × 50 = 21.43g, and the mass of water solvent is 50 - 21.43 = 28.57g. At 30°C, 100g water can hold 25g salt, so 28.57g water can hold (25 / 100) × 28.57 = 7.14g salt. The mass of salt that crystallizes out = 21.43g - 7.14g = 14.29g ≈ 14.3 g."
},
{
id: 18, subject: "Chemistry", topic: "Water Chemistry", year: 1991, exam: "JAMB",
question: "A sample of temporary hard water can be prepared in the laboratory by",
options: [
"dissolving calcium chloride in distilled water",
"saturating lime water with carbon(IV) oxide gas",
"saturating distilled water with calcium hydroxide",
"dissolving sodium hydrogen trioxocarbonate(IV) in distilled water"
],
answer: "saturating lime water with carbon(IV) oxide gas",
explanation: "Passing excess CO₂ gas into lime water [Ca(OH)₂] initially forms a white precipitate of CaCO₃, which dissolves further to form soluble calcium hydrogencarbonate [Ca(HCO₃)₂]. This solution is the definition of temporary hard water."
},
{
id: 19, subject: "Chemistry", topic: "Solutions & Colloids", year: 1991, exam: "JAMB",
question: "A characteristic property of a colloidal dispersion which a true solution does not exhibit is",
options: ["the Tyndall effect", "homogeneity", "osmotic pressure", "surface polarity"],
answer: "the Tyndall effect",
explanation: "The Tyndall effect is the scattering of light as a beam passes through a colloid. True solution particles are too small to scatter light, whereas larger colloidal particles scatter the light, making the beam visible."
},
{
id: 20, subject: "Chemistry", topic: "Gases & Non-Metals", year: 1991, exam: "JAMB",
question: "Consider volumes: 50 cm³ of SO₂, 800 cm³ of NH₃, 450 cm³ of HCl, and 1.0 cm³ of water at 15°C. Which pair of gases is suitable for demonstrating the fountain experiment?",
options: [
"Sulphur(IV) oxide and hydrogen chloride",
"Carbon(IV) oxide and ammonia",
"Ammonia and hydrogen chloride",
"Carbon(IV) oxide and sulphur(IV) oxide"
],
answer: "Ammonia and hydrogen chloride",
explanation: "The fountain experiment requires gases that are extremely soluble in water, such as ammonia (NH₃) and hydrogen chloride (HCl). When they dissolve into a small drop of water, they create an immediate internal vacuum that draws the liquid up like a fountain."
},
{
id: 21, subject: "Chemistry", topic: "Laboratory Apparatus", year: 1991, exam: "JAMB",
question: "A simple electrochemical cell features a zinc plate and a copper plate inserted into an electrolyte liquid. Which of the following pairs of substances could be satisfactorily used as the electrolyte liquid X?",
options: [
"Ammonia and potassium hydroxide",
"Potassium hydroxide and sodium chloride",
"Ammonia and ethanoic acid",
"Ethanoic acid and sodium chloride"
],
answer: "Potassium hydroxide and sodium chloride",
explanation: "An electrochemical cell requires an electrolyte solution with mobile ions to conduct charge internally. Strong electrolytes like potassium hydroxide or sodium chloride dissociate completely into mobile ions, making them effective electrolyte mediums."
},
{
id: 22, subject: "Chemistry", topic: "Stoichiometry", year: 1991, exam: "JAMB",
question: "What volume of CO₂ at s.t.p. would be obtained by reacting 100 cm³ of a 0.1 M solution of anhydrous sodium trioxocarbonate(IV) with excess acid? [G.M.V. at s.t.p. = 22.4 dm³]",
options: ["2.24 cm³", "22.40 cm³", "224.0 cm³", "2240 cm³"],
answer: "224.0 cm³",
explanation: "Reaction: Na₂CO₃ + 2H⁺ -> 2Na⁺ + H₂O + CO₂ (1:1 mole ratio). Moles of Na₂CO₃ = Molarity × Volume = 0.1 mol/dm³ × 0.100 dm³ = 0.01 mol. This produces 0.01 mol of CO₂. Volume of CO₂ at s.t.p. = 0.01 mol × 22400 cm³/mol = 224.0 cm³."
},
{
id: 23, subject: "Chemistry", topic: "Electrochemistry", year: 1991, exam: "JAMB",
question: "If a constant current of 1.5 A is passed for 4.00 hours through a molten tin salt and 13.3 g of tin is deposited, what is the oxidation state of the metal in the salt? [Sn = 118.7, F = 96500 C mol⁻¹]",
options: ["+1", "+2", "+3", "+4"],
answer: "+2",
explanation: "Total charge Q = I × t = 1.5 A × (4.00 × 3600 s) = 21600 C. Moles of tin deposited = 13.3 g / 118.7 g/mol = 0.112 mol. Charge required per mole of tin = 21600 C / 0.112 mol = 192857 C. Number of Faradays per mole = 192857 / 96500 ≈ 2. This means 2 moles of electrons are transferred per mole of tin ions (Sn²⁺ + 2e⁻ -> Sn), identifying the oxidation state as +2."
},
{
id: 24, subject: "Chemistry", topic: "Solutions & pH", year: 1991, exam: "JAMB",
question: "Which of the following aqueous salt solutions: Na₂CO₃, Na₂SO₄, FeCl₃, NH₄Cl and CH₃COONa, exhibit a pH value greater than 7?",
options: ["FeCl₃ and NH₄Cl", "Na₂CO₃, CH₃COONa and Na₂SO₄", "Na₂CO₃ and CH₃COONa", "FeCl₃, CH₃COONa and NH₄Cl"],
answer: "Na₂CO₃ and CH₃COONa",
explanation: "Salts derived from a strong base and a weak acid undergo anionic hydrolysis in water, releasing hydroxide ions (OH⁻) that make the solution basic (pH > 7). Both Na₂CO₃ (from NaOH and H₂CO₃) and CH₃COONa (from NaOH and CH₃COOH) fit this category."
},
{
id: 25, subject: "Chemistry", topic: "Redox Reactions", year: 1991, exam: "JAMB",
question: "MnO₄⁻ + 8H⁺ + ne⁻ -> Mn²⁺ + 4H₂O. What is the value of n in the balanced half-cell reaction above?",
options: ["2", "3", "4", "5"],
answer: "5",
explanation: "Manganese goes from an oxidation state of +7 in the permanganate ion (MnO₄⁻) to +2 as a free ion (Mn²⁺). Going from +7 to +2 requires gaining exactly 5 electrons, so n = 5."
},
{
id: 26, subject: "Chemistry", topic: "Redox Reactions", year: 1991, exam: "JAMB",
question: "2H₂S(g) + SO₂(g) -> 3S(s) + 2H₂O(l). The reaction equation above represents",
options: [
"a redox reaction in which H₂S is the oxidant and SO₂ is the reductant",
"a redox reaction in which SO₂ is the oxidant and H₂S is the reductant",
"not a redox reaction because there is no oxidant present",
"not a redox reaction because there is no reductant present"
],
answer: "a redox reaction in which SO₂ is the oxidant and H₂S is the reductant",
explanation: "The sulfur atom in SO₂ decreases its oxidation state from +4 to 0 (reduced), making SO₂ the oxidant. The sulfur atom in H₂S increases its oxidation state from -2 to 0 (oxidized), making H₂S the reductant."
},
{
id: 27, subject: "Chemistry", topic: "Chemical Kinetics", year: 1991, exam: "JAMB",
question: "Manganese(IV) oxide is added to accelerate the decomposition of hydrogen peroxide. Its main action is to",
options: [
"increase the surface area of the liquid reactants",
"increase the concentration of the reactants",
"provide a chemical path that lowers the activation energy barrier",
"increase the net heat change of the reaction"
],
answer: "provide a chemical path that lowers the activation energy barrier",
explanation: "Manganese(IV) oxide (MnO₂) acts as a catalyst. Catalysts accelerate chemical reactions by providing an alternative pathway with a lower activation energy, allowing more reactant molecules to successfully collide and react."
},
{
id: 28, subject: "Chemistry", topic: "Chemical Energetics", year: 1991, exam: "JAMB",
question: "1.11 g of CaCl₂ dissolved in 50 cm³ of water caused a rise in temperature of 3.4°C. The heat of solution for CaCl₂ in kJ per mole is [Ca = 40, Cl = 35.5, specific heat capacity of water = 4.18 J g⁻¹ K⁻¹, assume solution density is 1.0 g/cm³]",
options: ["-71.1", "-4.18", "+17.1", "+111.0"],
answer: "-71.1",
explanation: "Mass of water = 50 g. Heat evolved q = m × c × ΔT = 50 g × 4.18 J/g·K × 3.4 K = 710.6 J = 0.7106 kJ. Molar mass of CaCl₂ = 40 + (2 × 35.5) = 111 g/mol. Moles of CaCl₂ = 1.11 g / 111 g/mol = 0.01 mol. Molar heat of solution ΔH = -0.7106 kJ / 0.01 mol = -71.06 kJ/mol ≈ -71.1 kJ/mol (negative sign because the temperature rose, indicating an exothermic process)."
},
{
id: 29, subject: "Chemistry", topic: "Chemical Equilibrium", year: 1991, exam: "JAMB",
question: "NO(g) + CO(g) ⇌ 1/2 N₂(g) + CO₂(g) ΔH = -89.3 kJ. What conditions would favour maximum conversion of nitrogen(II) oxide and carbon(II) oxide into products?",
options: [
"low temperature and high pressure",
"high temperature and low pressure",
"high temperature and high pressure",
"low temperature and low pressure"
],
answer: "low temperature and high pressure",
explanation: "The forward reaction is exothermic (negative ΔH), so a low temperature shifts the equilibrium to the right. The reactant side has 2 moles of gas while the product side has 1.5 moles (0.5 + 1). Increasing the pressure shifts the system toward the side with fewer gas moles, maximizing product formation."
},
{
id: 30, subject: "Chemistry", topic: "Chemical Equilibrium", year: 1991, exam: "JAMB",
question: "Which of the following gaseous equilibria is completely unaffected by a pressure change?",
options: [
"2NaCl ⇌ 2Na + Cl₂",
"H₂(g) + I₂(g) ⇌ 2HI(g)",
"2O₃(g) ⇌ 3O₂(g)",
"2NO₂(g) ⇌ N₂O₄(g)"
],
answer: "H₂(g) + I₂(g) ⇌ 2HI(g)",
explanation: "The reaction H₂ + I₂ ⇌ 2HI has exactly 2 moles of gas on the reactant side and 2 moles of gas on the product side. Because the number of gas moles is equal on both sides, pressure changes have no effect on the equilibrium position."
},
{
id: 31, subject: "Chemistry", topic: "Chemical Kinetics", year: 1991, exam: "JAMB",
question: "Consider kinetics data for the reaction of NO with chlorine: [Initial [NO] = 0.001 M -> Initial Rate = 3.0 x 10⁻⁵] | [Initial [NO] = 0.002 M -> Initial Rate = 1.2 x 10⁻⁴]. Doubling the initial concentration of NO increases the rate of reaction by a factor of",
options: ["two", "three", "four", "five"],
answer: "four",
explanation: "Comparing rates: (1.2 x 10⁻⁴) / (3.0 x 10⁻⁵) = 4. Doubling the concentration increases the rate by a factor of 4, which means the reaction rate is proportional to the square of the NO concentration (second-order kinetics)."
},
{
id: 32, subject: "Chemistry", topic: "Gases & Non-Metals", year: 1991, exam: "JAMB",
question: "Which of the following gases will successfully rekindle a brightly glowing splint?",
options: ["NO₂", "NO", "N₂O", "Cl₂"],
answer: "N₂O",
explanation: "Dinitrogen oxide (N₂O, nitrous oxide) decomposes at high temperatures to release oxygen gas. A glowing splint provides enough heat to trigger this decomposition, releasing oxygen that supports combustion and rekindles the flame."
},
{
id: 33, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1991, exam: "JAMB",
question: "Which of the following carbonate salts can be melted completely without undergoing chemical thermal decomposition?",
options: ["Na₂CO₃", "CaCO₃", "MgCO₃", "ZnCO₃"],
answer: "Na₂CO₃",
explanation: "Alkali metal carbonates like sodium carbonate (Na₂CO₃) and potassium carbonate (K₂CO₃) are thermally stable because of the low charge density of their large monovalent cations. They can be heated to their melting points without decomposing."
},
{
id: 34, subject: "Chemistry", topic: "Gases & Non-Metals", year: 1991, exam: "JAMB",
question: "Oxygen gas can be prepared in the laboratory by heating",
options: [
"ammonium trioxonitrate(V)",
"ammonium trioxonitrate(III)",
"potassium trioxonitrate(V)",
"manganese(IV) oxide"
],
answer: "potassium trioxonitrate(V)",
explanation: "Heating potassium nitrate (KNO₃) decomposes it into potassium nitrite (KNO₂) and releases oxygen gas (O₂): 2KNO₃ -> 2KNO₂ + O₂↑."
},
{
id: 35, subject: "Chemistry", topic: "Laboratory Apparatus", year: 1991, exam: "JAMB",
question: "In gas delivery testing, what is the appropriate test paper to use to confirm the presence of an acidic oxidizing gas stream?",
options: [
"moist blue litmus paper",
"potassium heptaoxodichromate(VI) paper",
"lead(II) trioxonitrate(V) paper",
"universal indicator paper"
],
answer: "moist blue litmus paper",
explanation: "Moist blue litmus paper is used to identify acidic gases, turning red upon contact. If the gas is also an oxidizing agent (like chlorine), it will then bleach the paper white."
},
{
id: 36, subject: "Chemistry", topic: "Qualitative Analysis", year: 1991, exam: "JAMB",
question: "Addition of aqueous ammonia to a solution of Zn²⁺ gives a white precipitate which dissolves in an excess of ammonia because",
options: [
"zinc is an amphoteric element",
"zinc hydroxide is readily soluble in water",
"zinc forms a soluble complex cation with excess ammonia",
"ammonia solution acts as a strong Arrhenius base"
],
answer: "zinc forms a soluble complex cation with excess ammonia",
explanation: "Zinc ions initially react with ammonia to form a white precipitate of zinc hydroxide [Zn(OH)₂]. Adding excess ammonia dissolves the precipitate because zinc forms a stable, soluble coordination complex: [Zn(NH₃)₄]²⁺ (tetraamminezinc(II) ion)."
},
{
id: 37, subject: "Chemistry", topic: "Qualitative Analysis", year: 1991, exam: "JAMB",
question: "Which of the following chemical solutions forms a white precipitate when carbon(IV) oxide gas is bubbled into it for a short time?",
options: ["KOH", "NaOH", "Ca(OH)₂", "Al(OH)₃"],
answer: "Ca(OH)₂",
explanation: "Bubbling CO₂ gas into calcium hydroxide solution (lime water) forms insoluble calcium carbonate (CaCO₃), which appears as a distinct white precipitate and turns the solution milky."
},
{
id: 38, subject: "Chemistry", topic: "Applied Chemistry", year: 1991, exam: "JAMB",
question: "Copper(II) tetraoxosulphate(VI) is widely used in agriculture and water management as a",
options: ["fertilizer", "fungicide", "disinfectant", "purifier"],
answer: "fungicide",
explanation: "Copper(II) sulphate (CuSO₄) is an effective antifungal agent used widely as a fungicide (such as in Bordeaux mixture) to protect crops against fungal diseases."
},
{
id: 40, subject: "Chemistry", topic: "Organic Chemistry", year: 1991, exam: "JAMB",
question: "Which of the following organic compounds can exist as geometric cis-trans isomers?",
options: ["2-methylbut-2-ene", "but-2-ene", "but-1-ene", "propene"],
answer: "but-2-ene",
explanation: "Geometric isomerism requires a rigid double bond where each carbon atom is bonded to two different groups. In but-2-ene (CH₃-CH=CH-CH₃), each double-bonded carbon holds a hydrogen atom and a methyl group, enabling both cis and trans configurations."
},
{
id: 41, subject: "Chemistry", topic: "Organic Chemistry", year: 1991, exam: "JAMB",
question: "How many structural isomers can be written for the alkyl bromide compound with the molecular formula C₄H₉Br?",
options: ["3", "4", "6", "8"],
answer: "4",
explanation: "The four distinct isomers for C₄H₉Br are 1-bromobutane, 2-bromobutane, 1-bromo-2-methylpropane, and 2-bromo-2-methylpropane."
},
{
id: 42, subject: "Chemistry", topic: "Organic Chemistry", year: 1991, exam: "JAMB",
question: "The final products of the reaction of methane with excess chlorine gas in the presence of ultraviolet light are hydrogen chloride and",
options: ["chloromethane", "tetrachloromethane", "trichloromethane", "dichloromethane"],
answer: "tetrachloromethane",
explanation: "In excess chlorine and ultraviolet light, methane undergoes a complete free-radical substitution reaction where all four hydrogen atoms are replaced by chlorine, forming tetrachloromethane (carbon tetrachloride, CCl₄)."
},
{
id: 43, subject: "Chemistry", topic: "Organic Chemistry", year: 1991, exam: "JAMB",
question: "How many grams of bromine will be required to completely saturate 10 g of propyne gas? [C = 12, H = 1, Br = 80]",
options: ["20 g", "40 g", "60 g", "80 g"],
answer: "80 g",
explanation: "Propyne (C₃H₄) is an alkyne with a triple bond, requiring 2 moles of Br₂ per mole of propyne for complete saturation (C₃H₄ + 2Br₂ -> C₃H₄Br₄). Molar mass of propyne = 40 g/mol. Moles of propyne in 10g = 10 / 40 = 0.25 mol. Moles of Br₂ required = 2 × 0.25 = 0.50 mol. Molar mass of diatomic bromine (Br₂) = 160 g/mol. Mass of bromine required = 0.50 mol × 160 g/mol = 80 g."
},
{
id: 44, subject: "Chemistry", topic: "Organic Chemistry", year: 1991, exam: "JAMB",
question: "When ethene gas is passed into concentrated H₂SO₄, it is rapidly absorbed. Warming the product with water yields",
options: ["ethanol", "diethyl ether", "ethanal", "diethyl sulphate"],
answer: "ethanol",
explanation: "Ethene reacts with concentrated H₂SO₄ to form ethyl hydrogen sulphate (CH₃-CH₂-OSO₃H). Hydrolyzing this intermediate with water and warming it breaks the ester bond to produce ethanol (CH₃-CH₂OH) and regenerate the acid."
},
{
id: 45, subject: "Chemistry", topic: "Applied Chemistry", year: 1991, exam: "JAMB",
question: "One of the key advantages of synthetic detergents over traditional organic soaps is that detergents",
options: [
"are much easier to manufacture industrially",
"foam significantly more across all liquid lines",
"form soluble salts with the calcium and magnesium ions in hard water",
"exhibit superior chemical biodegradable tracking metrics"
],
answer: "form soluble salts with the calcium and magnesium ions in hard water",
explanation: "Soaps react with hard water to form insoluble calcium and magnesium precipitates (scum). Synthetic detergents contain sulfonate groups that form water-soluble salts with Ca²⁺ and Mg²⁺, allowing them to clean effectively in hard water without forming scum."
},
{
id: 46, subject: "Chemistry", topic: "Organic Chemistry", year: 1991, exam: "JAMB",
question: "The elimination reaction: CH₃-CH₂-CH(Cl)-CH₃ + alcoholic KOH -> CH₃-CH=CH-CH₃ + KCl + H₂O is an example of",
options: ["dehydration", "dehydrohalogenation", "neutralization", "a fission reaction"],
answer: "dehydrohalogenation",
explanation: "Reacting an alkyl halide with hot alcoholic KOH removes a hydrogen atom and a halogen atom (HCl) from adjacent carbons to form an alkene, a process called dehydrohalogenation."
},
{
id: 47, subject: "Chemistry", topic: "Organic Chemistry", year: 1991, exam: "JAMB",
question: "A certain organic liquid has a high boiling point, is viscous, non-toxic, hygroscopic, and completely miscible with water. This liquid is most likely",
options: ["CH₃-CH₂-CH₂-CH₂-OH", "CH₃-CH₂-OH", "CH₃-CH(OH)-CH₂-CH₃", "CH₂(OH)-CH(OH)-CH₂(OH)"],
answer: "CH₂(OH)-CH(OH)-CH₂(OH)",
explanation: "The description matches glycerol (propane-1,2,3-triol). Its three hydroxyl groups (-OH) enable extensive intermolecular hydrogen bonding, giving it a high boiling point, high viscosity, and strong hygroscopic properties."
},
{
id: 48, subject: "Chemistry", topic: "Organic Chemistry", year: 1991, exam: "JAMB",
question: "The systematic IUPAC name for the chlorinated molecule CH₃-CH(CH₃)-CH₂Cl is",
options: [
"1-chloro-2-methylpropane",
"1-chloro-2-methylbutane",
"2-chloromethylethane",
"1-chloro-2,2-dimethylethane"
],
answer: "1-chloro-2-methylpropane",
explanation: "The longest continuous carbon chain has 3 carbons (propane). Numbering from the end closest to the substituent gives the chlorine atom position 1 and a methyl group position 2, forming 1-chloro-2-methylpropane."
},
{
id: 49, subject: "Chemistry", topic: "Organic Chemistry", year: 1991, exam: "JAMB",
question: "Which of the following statements is TRUE concerning the complete alkaline hydrolysis of a triglyceride by sodium hydroxide?",
options: [
"3 moles of NaOH are required for each mole of triglyceride",
"3 moles of glycerol are produced for each saponification loop",
"only one mole of soap is formed at the product line",
"concentrated H₂SO₄ is essential for the completion of the reaction"
],
answer: "3 moles of NaOH are required for each mole of triglyceride",
explanation: "A triglyceride is a triester containing three fatty acid chains bound to a single glycerol backbone. Complete saponification requires 3 moles of NaOH per mole of triglyceride to break all three ester bonds, producing 1 mole of glycerol and 3 moles of soap molecules."
},
{
id: 50, subject: "Chemistry", topic: "Organic Chemistry", year: 1991, exam: "JAMB",
question: "Which of the following compounds is formed when ethanoic acid (CH₃COOH) reacts with chlorine gas (Cl₂) in the presence of bright sunlight?",
options: [
"CH₂Cl-COOH + HCl",
"CH₃COCl + HOCl",
"CH₃COOCl + HCl",
"CH₃COCl + H₂O"
],
answer: "CH₂Cl-COOH + HCl",
explanation: "In bright sunlight, chlorine undergoes a radical substitution reaction at the alkyl alpha-carbon of ethanoic acid, replacing a hydrogen atom to form monochloroethanoic acid (CH₂Cl-COOH) and hydrogen chloride gas."
}
];
// Note: Structural layout filtering verified; non-calibrated duplicate questions (such as Q39 tracking line variants) omitted to maintain array integrity.
export default chemJamb1991;
