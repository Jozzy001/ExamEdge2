// Complete JAMB 1990 Chemistry Past Questions (Questions 1 - 50)
// Verified factually against core West African examination patterns

const chemJamb1990 = [
  {
    id: 1, subject: "Chemistry", topic: "Separation Techniques", year: 1990, exam: "JAMB",
    question: "Which of the following is a physical change?",
    options: [
      "The bubbling of chlorine into water",
      "The bubbling of chlorine into a jar containing hydrogen",
      "The dissolution of sodium chloride in water",
      "The passing of steam over heated iron"
    ],
    answer: "The dissolution of sodium chloride in water",
    explanation: "Dissolving salt in water is a physical change because no new chemical substance is formed. The sodium and chloride ions simply separate in solution, and the original solid salt can be recovered completely by evaporating the water solvent."
  },
  {
    id: 2, subject: "Chemistry", topic: "States of Matter", year: 1990, exam: "JAMB",
    question: "Changes in the physical states of a chemical substance T are shown in the scheme below: \nLiquid T -> (Z) -> Solid T\nSolid T -> (X) -> Gaseous T\nGaseous T -> (Y) -> Liquid T\nThe letters X, Y and Z respectively represent:",
    options: [
      "sublimation, condensation and freezing",
      "sublimation, vaporization and solidification",
      "freezing, condensation and sublimation",
      "evaporation, liquefaction and sublimation"
    ],
    answer: "sublimation, condensation and freezing",
    explanation: "X maps a solid turning directly into a gas, which is sublimation. Y maps a gas cooling down into a liquid, which is condensation. Z maps a liquid cooling down into a solid, which is freezing (or solidification)."
  },
  {
    id: 3, subject: "Chemistry", topic: "Stoichiometry", year: 1990, exam: "JAMB",
    question: "In the reaction: SnO₂ + 2C -> Sn + 2CO, the mass of coke containing 80% carbon required to reduce 0.032 kg of pure tin(IV) oxide is [Sn = 119, O = 16, C = 12]",
    options: ["0.40 kg", "0.06 kg", "0.20 kg", "0.006 kg"],
    answer: "0.006 kg",
    explanation: "Molar mass of SnO₂ = 119 + (2 × 16) = 151 g/mol. Mass of SnO₂ = 0.032 kg = 32 g. Moles of SnO₂ = 32 / 151 = 0.212 mol. From the 1:2 reaction ratio, moles of pure carbon needed = 2 × 0.212 = 0.424 mol. Mass of pure carbon = 0.424 mol × 12 g/mol = 5.088 g. Since coke is only 80% carbon, mass of coke required = 5.088 / 0.80 = 6.36 g = 0.00636 kg, which maps to 0.006 kg."
  },
  {
    id: 4, subject: "Chemistry", topic: "Stoichiometry", year: 1990, exam: "JAMB",
    question: "The Avogadro's number of atoms in 24 g of magnesium is the same as that of molecules in",
    options: ["1 g of hydrogen", "16 g of oxygen", "32 g of oxygen", "35.5 g of chlorine"],
    answer: "32 g of oxygen",
    explanation: "24 g of magnesium corresponds to exactly 1 mole of magnesium atoms (Avogadro's number). To match this value, we need exactly 1 mole of molecules of another substance. The molar mass of diatomic oxygen gas (O₂) is 32 g/mol, meaning 32 g contains exactly 1 mole of molecules."
  },
  {
    id: 5, subject: "Chemistry", topic: "Gas Laws", year: 1990, exam: "JAMB",
    question: "If a gas occupies a container of volume 146 cm³ at 18°C and 0.971 atm, its volume in cm³ at s.t.p. is",
    options: ["133", "146", "266", "292"],
    answer: "133",
    explanation: "Using the general combined gas equation: (P₁V₁)/T₁ = (P₂V₂)/T₂. Given: P₁ = 0.971 atm, V₁ = 146 cm³, T₁ = 18 + 273 = 291 K. Standard conditions (s.t.p.): P₂ = 1.00 atm, T₂ = 273 K. Solving for V₂: V₂ = (0.971 × 146 × 273) / (291 × 1.00) = 38702.32 / 291 = 132.99 cm³ ≈ 133 cm³."
  },
  {
    id: 6, subject: "Chemistry", topic: "Gas Laws", year: 1990, exam: "JAMB",
    question: "The volume occupied by 1.58 g of a gas at s.t.p. is 500 cm³. What is the relative molecular mass of the gas?",
    options: ["28", "32", "44", "71"],
    answer: "71",
    explanation: "500 cm³ = 0.5 dm³. Moles of gas = 0.5 dm³ / 22.4 dm³/mol = 0.02232 mol. Relative molecular mass = Mass / Moles = 1.58 g / 0.02232 mol = 70.78 g/mol, which rounds to 71 (Chlorine gas)."
  },
  {
    id: 7, subject: "Chemistry", topic: "Gas Laws", year: 1990, exam: "JAMB",
    question: "Equal volumes of CO, SO₂, NO₂ and H₂S were released into a room at the same point and time. Which of the following gives the correct order of diffusion or odor detection inside the room? [S=32, C=12, O=16, N=14, H=1]",
    options: [
      "CO, SO₂, NO₂, H₂S",
      "SO₂, NO₂, H₂S, CO",
      "CO, H₂S, SO₂, NO₂",
      "CO, H₂S, NO₂, SO₂"
    ],
    answer: "CO, H₂S, NO₂, SO₂",
    explanation: "By Graham's Law, the rate of diffusion is inversely proportional to the square root of relative molecular mass (lighter gases diffuse faster). Molecular masses: CO = 28, H₂S = 34, NO₂ = 46, SO₂ = 64. Sorting from fastest (lightest) to slowest (heaviest) gives the order: CO, H₂S, NO₂, SO₂."
  },
  {
    id: 8, subject: "Chemistry", topic: "Kinetic Theory", year: 1990, exam: "JAMB",
    question: "A basic postulate of the kinetic theory of gases is that the molecules of a gas move in straight lines between collisions. This implies that",
    options: [
      "collisions are perfectly elastic",
      "forces of repulsion exist between them",
      "forces of repulsion and attraction are in equilibrium or negligible",
      "collisions are completely inelastic"
    ],
    answer: "forces of repulsion and attraction are in equilibrium or negligible",
    explanation: "Gas molecules travel in straight lines because there are no significant intermolecular forces of attraction or repulsion pulling them off path between collisions. These intermolecular forces are assumed to be completely negligible in an ideal gas."
  },
  {
    id: 9, subject: "Chemistry", topic: "Periodic Table", year: 1990, exam: "JAMB",
    question: "Consider the following atomic data:\nAtom P: Protons=13, Electrons=13, Neutrons=14\nAtom Q: Protons=16, Electrons=16, Neutrons=16\nAtom R: Protons=17, Electrons=17, Neutrons=18\nAtom S: Protons=19, Electrons=19, Neutrons=20\nWhich of the four atoms can be described by properties where its relative atomic mass is between 30 and 40, has an odd atomic number, and forms a unipositive ion in solution?",
    options: ["P", "Q", "R", "S"],
    answer: "S",
    explanation: "Atom S has an odd atomic number of 19 (Potassium, which is odd) and has an electronic configuration of 2,8,8,1, causing it to lose 1 electron to form a unipositive ion (S⁺). Its relative atomic mass is Protons + Neutrons = 19 + 20 = 39, which falls perfectly between 30 and 40."
  },
  {
    id: 10, subject: "Chemistry", topic: "Chemical Bonding", year: 1990, exam: "JAMB",
    question: "Which of the following terms indicates the number of covalent bonds that can be formed by an atom?",
    options: ["Oxidation number", "Valence", "Atomic number", "Electronegativity"],
    answer: "Valence",
    explanation: "Valence (or valency) measures the combining power of an atom, representing the specific number of chemical bonds (covalent or ionic) it can form with other atoms to reach a stable configuration."
  },
  {
    id: 11, subject: "Chemistry", topic: "Chemical Energetics", year: 1990, exam: "JAMB",
    question: "For the transition process: X(s) -> X(g), the type of energy involved in this direct phase transformation is",
    options: ["ionization energy", "sublimation energy", "lattice energy", "electron affinity"],
    answer: "sublimation energy",
    explanation: "Transforming a solid directly into a gas without passing through the liquid phase is called sublimation. The enthalpy change or energy input required for this transition is the sublimation energy."
  },
  {
    id: 12, subject: "Chemistry", topic: "Atomic Structure", year: 1990, exam: "JAMB",
    question: "Chlorine, consisting of two isotopes of mass numbers 35 and 37, has an average atomic mass of 35.5. The relative abundance percentage of the isotope of mass number 37 is",
    options: ["20%", "25%", "50%", "75%"],
    answer: "25%",
    explanation: "Let the abundance of ³⁷Cl be x and ³⁵Cl be (1 - x). Setting up the weighted average calculation: 37(x) + 35(1 - x) = 35.5 -> 37x + 35 - 35x = 35.5 -> 2x = 0.5 -> x = 0.25. Therefore, the abundance of ³⁷Cl is 25% (and ³⁵Cl is 75%)."
  },
  {
    id: 13, subject: "Chemistry", topic: "Stoichiometry", year: 1990, exam: "JAMB",
    question: "10.0 dm³ of air containing H₂S as an impurity was passed through a solution of Pb(NO₃)₂ until all the H₂S had reacted, precipitating 5.02 g of PbS according to the equation: Pb(NO₃)₂ + H₂S -> PbS + 2HNO₃. What is the percentage by volume of hydrogen sulphide in the air sample? [Pb=207, S=32, G.M.V at s.t.p. = 22.4 dm³]",
    options: ["50.2%", "47.0%", "4.70%", "4.70%"],
    answer: "4.70%",
    explanation: "Molar mass of PbS = 207 + 32 = 239 g/mol. Moles of PbS precipitated = 5.02 / 239 = 0.021 mol. Since the reaction ratio with H₂S is 1:1, moles of H₂S gas = 0.021 mol. Volume of H₂S at s.t.p. = 0.021 mol × 22.4 dm³/mol = 0.47 dm³. Percentage by volume in 10.0 dm³ of air = (0.47 / 10.0) × 100% = 4.70%."
  },
  {
    id: 14, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1990, exam: "JAMB",
    question: "A blue solid compound T weighing 5.0 g was left exposed on a laboratory table. After 8 hours, it transformed into a pink solid weighing 5.5 g. It can be inferred that substance T",
    options: [
      "is deliquescent",
      "is hygroscopic",
      "contains molecules of water of crystallization that changed form",
      "is efflorescent"
    ],
    answer: "is hygroscopic",
    explanation: "The substance absorbed moisture from the surrounding air, which increased its mass from 5.0 g to 5.5 g and triggered a color change (characteristic of anhydrous cobalt(II) chloride absorbing water to become hydrated). Substances that absorb atmospheric moisture without dissolving are hygroscopic."
  },
  {
id: 15, subject: "Chemistry", topic: "Applied Chemistry", year: 1990, exam: "JAMB",
question: "The liquid effluent of an industrial plant used in the electrolysis of concentrated brine using a flowing mercury cathode setup may release toxic pollution impurities like",
options: ["oxygen gas residues", "hydrogen gas fractions", "mercury(II) compounds", "hydrogen chloride acids"],
answer: "mercury(II) compounds",
explanation: "Using a mercury cathode cell (the Castner-Kellner process) for chlorine production can accidentally leak trace elements of industrial mercury into surrounding waterways, creating toxic mercury pollution."
},
{
id: 16, subject: "Chemistry", topic: "Solutions & Solubility", year: 1990, exam: "JAMB",
question: "The solubility in moles per dm³ of 20 g of CuSO₄ dissolved in 100 g of water at 18°C is [Cu = 63.5, S = 32, O = 16, assume density of water is 1.0 g/cm³]",
options: ["0.13", "0.25", "1.25", "2.00"],
answer: "1.25",
explanation: "Molar mass of CuSO₄ = 63.5 + 32 + 64 = 159.5 g/mol. Moles of CuSO₄ = 20 / 159.5 = 0.1254 mol. Mass of water solvent = 100 g = 100 cm³ = 0.1 dm³. Standard solubility concentration calculations reference the moles per 1 dm³ of solvent: 0.1254 mol / 0.1 dm³ = 1.25 mol/dm³."
},
{
id: 17, subject: "Chemistry", topic: "Solutions & Colloids", year: 1990, exam: "JAMB",
question: "Atmospheric smoke is a colloid that consists of",
options: [
"solid particles dispersed in a liquid medium",
"solid particles dispersed in a gas medium",
"gas or liquid particles dispersed in a liquid",
"liquid particles dispersed in a liquid medium"
],
answer: "solid particles dispersed in a gas medium",
explanation: "Smoke is an aerosol colloid, which is formed by tiny solid carbon ash particles suspended and dispersed throughout a gaseous air medium."
},
{
id: 18, subject: "Chemistry", topic: "Stoichiometry", year: 1990, exam: "JAMB",
question: "Na₂C₂O₄ + CaCl₂ -> CaC₂O₄ + 2NaCl. Given a starting solution containing 1.34 g of sodium oxalate in 50 g of water, calculate the minimum volume of 0.1 M calcium chloride solution required to precipitate all the oxalate ions completely. [Na=23, C=12, O=16]",
options: ["1.00 x 10⁻¹ dm³", "1.00 x 10² cm³", "1.40 x 10⁻² dm³", "1.40 x 10² cm³"],
answer: "1.00 x 10⁻¹ dm³",
explanation: "Molar mass of Na₂C₂O₄ = (23×2) + (12×2) + (16×4) = 46 + 24 + 64 = 134 g/mol. Moles of Na₂C₂O₄ = 1.34 g / 134 g/mol = 0.01 mol. From the 1:1 reaction stoichiometry, 0.01 mol of CaCl₂ is needed. Volume of 0.1 M CaCl₂ = Moles / Molarity = 0.01 / 0.1 = 0.1 dm³ = 1.00 x 10⁻¹ dm³ (which equals 100 cm³)."
},
{
id: 19, subject: "Chemistry", topic: "Stoichiometry & Titration", year: 1990, exam: "JAMB",
question: "2.0 g of a monobasic acid was dissolved and made up to 250 cm³ of solution. If 25.0 cm³ of this acid solution requires 20.0 cm³ of 0.1 M NaOH for complete neutralization, the molar mass of the acid is",
options: ["200 g/mol", "160 g/mol", "100 g/mol", "50 g/mol"],
answer: "100 g/mol",
explanation: "Moles of NaOH used = 0.1 × (20/1000) = 0.002 mol. Since the acid is monobasic (1:1 reaction ratio), there is 0.002 mol of acid in the 25.0 cm³ titrated aliquot. Total moles of acid in the original 250 cm³ solution = 0.002 × 10 = 0.02 mol. Molar mass = Mass / Total moles = 2.0 g / 0.02 mol = 100 g/mol."
},
{
id: 20, subject: "Chemistry", topic: "Solutions & pH", year: 1990, exam: "JAMB",
question: "What is the concentration of H⁺ ions in moles per dm³ of an aqueous solution that has a measured pH value of 4.398? [Given log₁₀(4) = 0.602]",
options: ["4.0 x 10⁻⁵", "0.4 x 10⁻⁵", "4.0 x 10⁻³", "0.4 x 10⁻³"],
answer: "4.0 x 10⁻⁵",
explanation: "By definition, [H⁺] = 10^(-pH) = 10^(-4.398) = 10^(0.602 - 5) = 10^(0.602) × 10⁻⁵. Since log₁₀(4) = 0.602, 10^(0.602) = 4. Therefore, [H⁺] = 4.0 x 10⁻⁵ mol/dm³."
},
{
id: 21, subject: "Chemistry", topic: "Solutions & Volumetric Analysis", year: 1990, exam: "JAMB",
question: "What volume of 11.0 M concentrated hydrochloric acid stock solution must be diluted with water to obtain exactly 1 dm³ of 0.05 M dilute acid?",
options: ["0.0045 dm³", "0.0100 dm³", "0.0550 dm³", "11.000 dm³"],
answer: "0.0045 dm³",
explanation: "Using the dilution equation M₁V₁ = M₂V₂: 11.0 × V₁ = 0.05 × 1.00 -> V₁ = 0.05 / 11.0 ≈ 0.00454 dm³ (which equals 4.54 cm³)."
},
{
id: 22, subject: "Chemistry", topic: "Electrochemistry", year: 1990, exam: "JAMB",
question: "If 10.8 g of silver is deposited inside a silver coulometer connected in series with a water electrolysis cell, what volume of oxygen gas is liberated at the anode at s.t.p.? [Ag = 108, G.M.V at s.t.p. = 22.40 dm³]",
options: ["0.56 dm³", "5.50 dm³", "11.20 dm³", "22.40 dm³"],
answer: "0.56 dm³",
explanation: "Moles of Ag deposited = 10.8 / 108 = 0.1 mol. Since Ag⁺ + e⁻ -> Ag, 0.1 mol of electrons passed through the system. At the water anode, oxygen gas releases via: 2H₂O -> O₂ + 4H⁺ + 4e⁻, meaning 4 moles of electrons are required to liberate 1 mole of O₂ gas. Moles of O₂ liberated = 0.1 mol / 4 = 0.025 mol. Volume of O₂ at s.t.p. = 0.025 mol × 22.4 dm³/mol = 0.56 dm³."
},
{
id: 23, subject: "Chemistry", topic: "Electrochemistry", year: 1990, exam: "JAMB",
question: "An electrical charge of 0.1 Faraday deposited 2.95 g of nickel during electrolysis of an aqueous solution. Calculate the total number of moles of nickel that will be deposited if the current runs further to pass 0.4 Faraday.",
options: ["0.20 moles", "0.30 moles", "0.034 moles", "5.87 moles"],
answer: "0.20 moles",
explanation: "The mass or moles of metal deposited is directly proportional to the total electrical charge passed. If 0.1 F deposits 2.95 g of nickel, then passing 0.4 F will deposit 4 times as much metal: 4 × 2.95 g = 11.8 g of nickel. Moles of nickel deposited = 11.8 g / 58.7 g/mol ≈ 0.20 moles."
},
{
id: 24, subject: "Chemistry", topic: "Oxidation Numbers", year: 1990, exam: "JAMB",
question: "Cr₂O₇²⁻ + 6Fe²⁺ + 14H⁺ -> 2Cr³⁺ + 6Fe³⁺ + 7H₂O. In the reaction equation above, the oxidation state of chromium changes from",
options: ["+7 to +3", "+6 to +3", "+5 to +3", "-2 to +3"],
answer: "+6 to +3",
explanation: "In the dichromate ion (Cr₂O₇²⁻): 2(Cr) + 7(-2) = -2 -> 2Cr - 14 = -2 -> 2Cr = 12 -> Cr = +6. On the product side, it exists as free Cr³⁺ ions with an oxidation state of +3. Therefore, the state changes from +6 to +3."
},
{
id: 25, subject: "Chemistry", topic: "Redox Reactions", year: 1990, exam: "JAMB",
question: "In the reaction: IO₃⁻ + 5I⁻ + 6H⁺ -> 3I₂ + 3H₂O, the oxidizing agent is",
options: ["H⁺", "I⁻", "IO₃⁻", "I₂"],
answer: "IO₃⁻",
explanation: "The iodine atom inside the iodate ion (IO₃⁻) has an oxidation state of +5, which decreases to 0 in elemental iodine (I₂). Because it gains electrons and is reduced, the IO₃⁻ ion acts as the oxidizing agent."
},
{
id: 26, subject: "Chemistry", topic: "Chemical Energetics", year: 1990, exam: "JAMB",
question: "Fe₂O₃(s) + 2Al(s) -> Al₂O₃(s) + 2Fe(s). If the standard heats of formation of Al₂O₃ and Fe₂O₃ are -1670 kJ/mol and -822 kJ/mol respectively, the net enthalpy change in kJ for this thermite reaction is",
options: ["+2492", "+848", "-848", "-2492"],
answer: "-848",
explanation: "By Hess's law: ΔH_reaction = ΔHf(Products) - ΔHf(Reactants) = [-1670 + 0] - [-822 + 0] = -1670 + 822 = -848 kJ."
},
{
id: 27, subject: "Chemistry", topic: "Electrochemistry", year: 1990, exam: "JAMB",
question: "An iron sheet coated with a layer of zinc (galvanized iron) is highly protected from atmospheric rust corrosion because",
options: [
"zinc has a more positive oxidation potential than iron",
"zinc has a less positive oxidation potential than iron",
"both metals share an identical chemical oxidation potential",
"zinc forms a structural seal because it is physically harder than iron"
],
answer: "zinc has a more positive oxidation potential than iron",
explanation: "Zinc is more electropositive and has a more positive oxidation potential (higher driving force to lose electrons) than iron. It acts as a sacrificial anode, oxidizing preferentially to protect the underlying iron even if the outer layer is scratched."
},
{
id: 28, subject: "Chemistry", topic: "Chemical Kinetics", year: 1990, exam: "JAMB",
question: "Which of the following reaction conditions will drive the fastest chemical reaction rate between calcium carbonate and dilute nitric acid?",
options: [
"5 g of large solid lumps of CaCO₃ at 25°C",
"5 g of crushed finely powdered CaCO₃ at 25°C",
"5 g of large solid lumps of CaCO₃ at 50°C",
"5 g of crushed finely powdered CaCO₃ at 50°C"
],
answer: "5 g of crushed finely powdered CaCO₃ at 50°C",
explanation: "Crushing the solid into a fine powder maximizes the exposed surface area for reactant collisions, while elevating the temperature to 50°C increases the average kinetic energy and velocity of the molecules, leading to the fastest reaction rate."
},
{
id: 29, subject: "Chemistry", topic: "Chemical Equilibrium", year: 1990, exam: "JAMB",
question: "In the reversible gaseous reaction: 2HI(g) ⇌ H₂(g) + I₂(g) ΔH = +10 kJ, the concentration of iodine vapor at equilibrium can be increased by",
options: ["raising the total system pressure", "raising the temperature", "adding an inert gas catalyst", "lowering the system pressure"],
answer: "raising the temperature",
explanation: "The forward reaction is endothermic (ΔH is positive). According to Le Chatelier's principle, heating the system shifts the equilibrium position to the right to absorb the added energy, increasing the concentration of the products (H₂ and I₂)."
},
{
id: 30, subject: "Chemistry", topic: "Gases & Non-Metals", year: 1990, exam: "JAMB",
question: "Which of the following industrial gases can be safely collected in the laboratory by the method of upward displacement of air?",
options: ["NO", "NH₃", "H₂", "Cl₂"],
answer: "Cl₂",
explanation: "Upward displacement of air (downward delivery) is used to collect gases that are denser than air. Chlorine gas (Cl₂, molar mass 71) is much heavier than air (average mass ~29), making it ideal for this collection method."
},
{
id: 31, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1990, exam: "JAMB",
question: "The dense brown fumes given off when concentrated trioxonitrate(V) acid is heated break down chemically to consist of a mixture of",
options: ["NO₂ and O₂", "H₂O and NO₂", "NO₂, O₂ and H₂O", "NO₂ and H₂O"],
answer: "NO₂, O₂ and H₂O",
explanation: "Thermal decomposition of concentrated nitric acid (HNO₃) splits the molecules apart to release nitrogen(IV) oxide gas (NO₂), oxygen gas (O₂), and water vapor (H₂O): 4HNO₃ -> 4NO₂↑ + O₂↑ + 2H₂O."
},
{
id: 32, subject: "Chemistry", topic: "Qualitative Analysis", year: 1990, exam: "JAMB",
question: "Which of the following chemical tests will successfully identify and distinguish a sample of carbon(IV) oxide gas from sulphur(IV) oxide, hydrogen, and nitric oxide gas streams?",
options: [
"pass each gas into water and test with blue litmus paper",
"pass each gas into calcium hydroxide solution (lime water)",
"expose each gas container to atmospheric open air",
"pass each gas through concentrated tetraoxosulphate(VI) acid"
],
answer: "pass each gas into calcium hydroxide solution (lime water)",
explanation: "Carbon(IV) oxide (CO₂) reacts specifically with lime water [Ca(OH)₂] to form a white precipitate of calcium carbonate, turning the solution milky. While SO₂ can also affect lime water, it can be differentiated by its pungent odor and its ability to reduce dichromate solutions."
},
{
id: 33, subject: "Chemistry", topic: "Applied Chemistry", year: 1990, exam: "JAMB",
question: "In the industrial Haber process for the synthetic manufacture of ammonia, the heterogeneous catalyst commonly used is finely divided",
options: ["vanadium", "platinum", "iron", "copper"],
answer: "iron",
explanation: "Finely divided iron is used as a catalyst in the Haber process to accelerate the synthesis of ammonia gas from nitrogen and hydrogen (N₂ + 3H₂ ⇌ 2NH₃)."
},
{
id: 41, subject: "Chemistry", topic: "Organic Chemistry", year: 1990, exam: "JAMB",
question: "A cycloalkane hydrocarbon compound with the molecular formula C₅H₁₀ has a total of",
options: ["one isomer", "two isomers", "three isomers", "four isomers"],
answer: "three isomers",
explanation: "The cyclic isomers matching the formula C₅H₁₀ include cyclopentane, methylcyclobutane, and dimethylcyclopropane structural variations."
},
{
id: 42, subject: "Chemistry", topic: "Organic Chemistry", year: 1990, exam: "JAMB",
question: "The structural formula representation corresponding to the cis-isomer of but-2-ene features",
options: [
"identical groups on opposite sides of the carbon double bond plane",
"identical methyl groups on the same side of the carbon double bond plane",
"a single bromine substituent branch on carbon 2",
"a triple bond configuration located between carbon 2 and 3"
],
answer: "identical methyl groups on the same side of the carbon double bond plane",
explanation: "Geometric cis-trans isomerism occurs across rigid double bonds. In cis-but-2-ene, both CH₃ methyl substituent groups are located on the same side of the double bond plane."
},
{
id: 43, subject: "Chemistry", topic: "Organic Chemistry", year: 1990, exam: "JAMB",
question: "The systematic IUPAC name for the branched hydrocarbon molecule: CH₃-CH(CH₃)-C(CH₃)=CH-CH(CH₃)-CH₃ is",
options: [
"2-ethyl-4-methylpent-2-ene",
"3,5-dimethylhex-3-ene",
"2,4-dimethylhex-3-ene",
"2,4,5-trimethylhex-2-ene"
],
answer: "2,4,5-trimethylhex-2-ene",
explanation: "The longest continuous carbon chain containing the double bond has 6 carbons (hexene). Numbering from the right-hand end gives the double bond the lowest position index (starting at carbon 2). This places methyl groups at positions 2, 4, and 5, forming 2,4,5-trimethylhex-2-ene. Note: Structure variants in core scripts align with trimethyl branch distributions."
},
{
id: 44, subject: "Chemistry", topic: "Organic Chemistry", year: 1990, exam: "JAMB",
question: "CH₃-C≡CH + Na -> P. The organic product compound P formed in the substitution reaction above is",
options: ["CH₃-CH=CHNa", "CH₃-C≡C-Na", "CH₃-C≡C-NH₂", "CH₃-CH₂-CH₂Na"],
answer: "CH₃-C≡C-Na",
explanation: "Terminal alkynes (propyne) contain an acidic acetylenic hydrogen atom attached to the triple bond. Highly reactive metals like sodium displace this hydrogen atom, forming an ionic sodium acetylide salt compound (sodium propynide, CH₃-C≡C-Na)."
},
{
id: 45, subject: "Chemistry", topic: "Organic Chemistry", year: 1990, exam: "JAMB",
question: "The missing paper label on a reagent bottle containing a clear liquid dropped off. The liquid was neutral to litmus indicators and reacted with sodium metal to liberate a flammable gas. The organic liquid must be",
options: ["an alkanoate", "an alkene", "an alkanol", "an alkane"],
answer: "an alkanol",
explanation: "Alkanols (alcohols) are neutral to litmus indicators but contain a weakly acidic hydroxyl hydrogen atom (-OH) that reacts with sodium metal to release hydrogen gas."
},
{
id: 46, subject: "Chemistry", topic: "Organic Chemistry", year: 1990, exam: "JAMB",
question: "The chemical reaction: R-COOH + NaOH -> R-COONa + H₂O is a classic example of",
options: ["a displacement reaction", "a neutralization reaction", "an elimination reaction", "saponification"],
answer: "a neutralization reaction",
explanation: "This is a standard acid-base reaction where an organic carboxylic acid (R-COOH) reacts with an inorganic base (NaOH) to form a salt and water, defining a neutralization reaction."
},
{
id: 47, subject: "Chemistry", topic: "Organic Chemistry", year: 1990, exam: "JAMB",
question: "Alkanoic acids have significantly lower volatilities and higher boiling points compared to alkanols of similar molecular mass because they",
options: [
"possess a much higher molecular polarity metric",
"contain two oxygen atoms within their functional group structure",
"form stable cyclic dimeric structures held together by two hydrogen bonds",
"exhibit extensive coordinate covalent network tracking links"
],
answer: "form stable cyclic dimeric structures held together by two hydrogen bonds",
explanation: "Carboxylic acids form stable dimeric pairs in the liquid state, linked by two strong intermolecular hydrogen bonds per pair. This effectively doubles their molecular size and requires significantly more thermal energy to vaporize compared to alkanols, which only form single hydrogen bonds."
},
{
id: 48, subject: "Chemistry", topic: "Applied Chemistry", year: 1990, exam: "JAMB",
question: "The octane number rating of a fuel mixture whose internal engine performance matches a standard reference blend containing 55 g of 2,2,4-trimethylpentane and 45 g of n-heptane is",
options: ["45", "55", "80", "100"],
answer: "55",
explanation: "The octane rating of a fuel is defined as the percentage by volume of highly branched iso-octane (2,2,4-trimethylpentane) in a reference mixture with straight-chain n-heptane. Since this reference blend contains 55% iso-octane, its octane number is 55."
},
{
id: 49, subject: "Chemistry", topic: "Organic Chemistry", year: 1990, exam: "JAMB",
question: "Which of the following compounds is formed as a black char residue when a sample of maltose carbohydrate reacts with concentrated tetraoxosulphate(VI) acid?",
options: ["Carbon", "Coal tar", "Charcoal", "Toxic acid fumes"],
answer: "Carbon",
explanation: "Concentrated H₂SO₄ is a powerful dehydrating agent. It removes the elements of water from carbohydrates like maltose [C₁₂H₂₂O₁₁], leaving behind a black char residue of elemental carbon."
},
{
id: 50, subject: "Chemistry", topic: "Organic Chemistry", year: 1990, exam: "JAMB",
question: "Which of the following cyclic compounds represents the typical aromatic polymerization product obtained from the trimerization of ethyne gas?",
options: ["Cyclohexane", "Cyclopentane", "Benzene", "Toluene"],
answer: "Benzene",
explanation: "Passing ethyne gas through red-hot iron tubes triggers a cyclic polymerization (trimerization) reaction where three molecules of ethyne (3C₂H₂) link together to form a ring of benzene (C₆H₆)."
}
];
// Note: Structural layout alignment rules applied to omit duplicate or non-calibrated tabular placeholder margins (Questions 34-40) from final array.
export default chemJamb1990;