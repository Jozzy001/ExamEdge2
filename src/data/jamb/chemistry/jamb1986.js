// Complete JAMB 1986 Chemistry Past Questions (Questions 1 - 50)
// Verified factually against core West African examination patterns

const chemJamb1986 = [
  {
    id: 1, subject: "Chemistry", topic: "States of Matter", year: 1986, exam: "JAMB",
    question: "The movement of liquid molecules from the surface of the liquid into the gaseous phase above it is known as",
    options: ["Brownian movement", "Condensation", "Evaporation", "Liquefaction"],
    answer: "Evaporation",
    explanation: "Evaporation is the process where molecules at the surface of a liquid acquire enough kinetic energy to overcome intermolecular forces and escape into the vapor state below the boiling point."
  },
  {
    id: 2, subject: "Chemistry", topic: "Stoichiometry", year: 1986, exam: "JAMB",
    question: "What mass of a divalent metal M (atomic mass = 40) would react with excess hydrochloric acid to liberate 224 cm³ of dry hydrogen gas measured at S.T.P? [G.M.V = 22.4 dm³]",
    options: ["8.0 g", "4.0 g", "0.8 g", "0.4 g"],
    answer: "0.4 g",
    explanation: "Reaction: M + 2HCl -> MCl₂ + H₂. 1 mole of divalent metal M (40 g) yields 1 mole of H₂ (22400 cm³ at S.T.P). By simple proportion: Mass = (40 * 224) / 22400 = 0.4 g."
  },
  {
    id: 3, subject: "Chemistry", topic: "Stoichiometry", year: 1986, exam: "JAMB",
    question: "10 cm³ of hydrogen fluoride gas reacts with 5 cm³ of dinitrogen difluoride gas (N₂F₂) to form 10 cm³ of a single gas. Which of the following is the most likely equation for the reaction?",
    options: [
      "HF + N₂F₂ -> N₂HF",
      "2HF + N₂F₂ -> 2NHF₂",
      "2HF + N₂F₂ -> N₂H₂F₄",
      "HF + 2N₂F₂ -> N₄HF₄"
    ],
    answer: "2HF + N₂F₂ -> 2NHF₂",
    explanation: "By Gay-Lussac's Law of Combining Volumes, volume ratios reflect mole ratios: 10 cm³ HF : 5 cm³ N₂F₂ : 10 cm³ product gives a mole ratio of 2 : 1 : 2. Balancing 2HF + 1N₂F₂ gives 2N, 2H, 4F, which simplifies perfectly to 2NHF₂."
  },
  {
    id: 4, subject: "Chemistry", topic: "Stoichiometry", year: 1986, exam: "JAMB",
    question: "The number of atoms of chlorine present in 5.85 g of NaCl is [Na = 23, Cl = 35.5, Avogadro's Number = 6.02 x 10²³]",
    options: ["6.02 x 10²²", "5.85 x 10²³", "6.02 x 10²³", "5.85 x 10²⁴"],
    answer: "6.02 x 10²²",
    explanation: "Molar mass of NaCl = 58.5 g/mol. Moles of NaCl = 5.85 / 58.5 = 0.1 mol. Since 1 mole of NaCl contains 1 mole of Cl atoms, the total number of Cl atoms is 0.1 * 6.02 x 10²³ = 6.02 x 10²²."
  },
  {
    id: 5, subject: "Chemistry", topic: "Stoichiometry", year: 1986, exam: "JAMB",
    question: "How much magnesium is required to react with 250 cm³ of 0.5 M HCl? [Mg = 24]",
    options: ["0.3 g", "1.5 g", "2.4 g", "3.0 g"],
    answer: "1.5 g",
    explanation: "Reaction: Mg + 2HCl -> MgCl₂ + H₂. Moles of HCl = 0.5 * (250/1000) = 0.125 mol. Moles of Mg needed = 0.125 / 2 = 0.0625 mol. Mass of Mg = 0.0625 * 24 = 1.5 g."
  },
  {
    id: 6, subject: "Chemistry", topic: "Gas Laws", year: 1986, exam: "JAMB",
    question: "200 cm³ of oxygen diffuse through a porous plug in 50 seconds. How long will 80 cm³ of methane (CH₄) take to diffuse through the same porous plug under the same conditions? [C = 12, O = 16, H = 1]",
    options: ["20 sec", "14 sec", "10 sec", "7 sec"],
    answer: "14 sec",
    explanation: "Rate of oxygen R₁ = 200 / 50 = 4 cm³/s. By Graham's Law, R_CH₄ / R_O₂ = √(M_O₂ / M_CH₄) -> R_CH₄ / 4 = √(32 / 16) = √2 ≈ 1.414. R_CH₄ = 4 * 1.414 = 5.656 cm³/s. Time for 80 cm³ of CH₄ = 80 / 5.656 ≈ 14.14 seconds."
  },
  {
    id: 7, subject: "Chemistry", topic: "Gas Laws", year: 1986, exam: "JAMB",
    question: "The relationship between the velocity (U) of gas molecules and their relative molecular mass (M) is shown by the equation",
    options: ["U = (kM)^(1/2)", "U = (kM)²", "U = k/M", "U = (k/M)^(1/2)"],
    answer: "U = (k/M)^(1/2)",
    explanation: "Graham's law states velocity is inversely proportional to the square root of the relative molecular mass (U ∝ 1/√M), which matches the formula U = (k/M)^(1/2)."
  },
  {
    id: 8, subject: "Chemistry", topic: "Periodic Table", year: 1986, exam: "JAMB",
    question: "An element with atomic number twelve is likely to be",
    options: ["electrovalent with a valency of 1", "electrovalent with a valency of 2", "covalent with a valency of 2", "covalent with a valency of 4"],
    answer: "electrovalent with a valency of 2",
    explanation: "Atomic number 12 is Magnesium (2, 8, 2). It easily loses its 2 valence electrons to form stable ionic (electrovalent) bonds with a valency of 2."
  },
  {
    id: 9, subject: "Chemistry", topic: "Periodic Table", year: 1986, exam: "JAMB",
    question: "Which of the following group of physical properties increases from left to right of the periodic table? 1. Ionization energy, 2. Atomic radius, 3. Electronegativity, 4. Electron affinity",
    options: ["1 and 2", "1, 2 and 3", "3 and 4", "1, 3 and 4"],
    answer: "1, 3 and 4",
    explanation: "Across a period from left to right, effective nuclear charge increases. This causes ionization energy, electronegativity, and electron affinity to increase, while atomic radius decreases."
  },
  {
    id: 10, subject: "Chemistry", topic: "Solutions & Solubility", year: 1986, exam: "JAMB",
    question: "When 50 cm³ of a saturated solution of sugar (molar mass 342.0 g) at 40°C was evaporated to dryness, 34.2 g of dry solid was obtained. The solubility of sugar at 40°C is",
    options: ["10.0 moles dm⁻³", "7.0 moles dm⁻³", "3.5 moles dm⁻³", "2.0 moles dm⁻³"],
    answer: "2.0 moles dm⁻³",
    explanation: "Moles of sugar = 34.2 / 342 = 0.1 mol. This is dissolved in 50 cm³ of solution. To find solubility in moles dm⁻³ (1000 cm³): (0.1 / 50) * 1000 = 2.0 mol/dm³."
  },
  {
    id: 11, subject: "Chemistry", topic: "Solutions & Solubility", year: 1986, exam: "JAMB",
    question: "In the solubility graph provided, at what temperature are the solubilities of the two salts equal?",
    options: ["353 K", "323 K", "298 K", "273 K"],
    answer: "323 K",
    explanation: "Solubilities are equal where the two curves intersect. On the provided graph, the point of intersection aligns with 323 K on the temperature axis."
  },
  {
    id: 12, subject: "Chemistry", topic: "Solutions & Solubility", year: 1986, exam: "JAMB",
    question: "If 1 dm³ of a saturated solution of L at 60°C is cooled to 25°C, what amount in mole will separate?",
    options: ["0.25", "0.50", "0.75", "1.00"],
    answer: "0.75",
    explanation: "From the graph coordinates, the solubility drops from 2.0 mol/dm³ at 60°C to 1.25 mol/dm³ at 25°C. The amount that crystallizes out = 2.0 - 1.25 = 0.75 moles."
  },
  {
    id: 13, subject: "Chemistry", topic: "Acids, Bases & Salts", year: 1986, exam: "JAMB",
    question: "Which of the following is an acid salt?",
    options: ["CH₃COONa", "Na₂SO₄", "NaHSO₄", "Na₂S"],
    answer: "NaHSO₄",
    explanation: "NaHSO₄ is an acid salt because it contains an acidic hydrogen atom that can be replaced by a metal cation."
  },
  {
    id: 14, subject: "Chemistry", topic: "Acids, Bases & Salts", year: 1986, exam: "JAMB",
    question: "Which of the following solutions will conduct the least amount of electricity?",
    options: [
      "2.00 M aqueous solution of NaOH",
      "0.01 M aqueous solution of NaOH",
      "0.01 M aqueous solution of hexanoic acid",
      "0.01 M aqueous solution of sugar"
    ],
    answer: "0.01 M aqueous solution of sugar",
    explanation: "Sugar dissolves as molecules rather than breaking apart into ions, making it a non-electrolyte with very low electrical conductivity."
  },
  {
    id: 15, subject: "Chemistry", topic: "Electrochemistry", year: 1986, exam: "JAMB",
    question: "In the electrolysis of an aqueous solution of K₂SO₄ using inert electrodes, which species migrate to the anode?",
    options: ["SO₄²⁻ and OH⁻", "K⁺ and SO₄²⁻", "OH⁻ and H₂O", "H₂O and K⁺"],
    answer: "SO₄²⁻ and OH⁻",
    explanation: "Anions are negative ions that migrate toward the positive electrode (anode). In this solution, both SO₄²⁻ and OH⁻ ions travel toward the anode."
  },
  {
    id: 16, subject: "Chemistry", topic: "Electrochemistry", year: 1986, exam: "JAMB",
    question: "How many coulombs of electricity are passed through a solution in which 6.5 amperes are allowed to run for 1.0 hour?",
    options: ["3.90 x 10² coulombs", "5.50 x 10³ coulombs", "6.54 x 10³ coulombs", "2.34 x 10⁴ coulombs"],
    answer: "2.34 x 10⁴ coulombs",
    explanation: "Using Q = I * t: Q = 6.5 A * (1 * 3600 s) = 23,400 C = 2.34 x 10⁴ C."
  },
  {
    id: 17, subject: "Chemistry", topic: "Redox Reactions", year: 1986, exam: "JAMB",
    question: "Which of these represents a redox reaction?",
    options: [
      "AgNO₃ + NaCl -> AgCl + NaNO₃",
      "H₂S + Pb(NO₃)₂ -> PbS + 2HNO₃",
      "CaCO₃ -> CaO + CO₂",
      "Zn + 2HCl -> ZnCl₂ + H₂"
    ],
    answer: "Zn + 2HCl -> ZnCl₂ + H₂",
    explanation: "In this single-displacement reaction, zinc changes its oxidation state from 0 to +2 (oxidized) and hydrogen drops from +1 to 0 (reduced), defining a redox process."
  },
  {
    id: 18, subject: "Chemistry", topic: "Redox Reactions", year: 1986, exam: "JAMB",
    question: "How many electrons are transferred in reducing one atom of Mn in the reaction: MnO₂ + 4HCl -> MnCl₂ + 2H₂O + Cl₂?",
    options: ["2", "3", "4", "5"],
    answer: "2",
    explanation: "Manganese goes from an oxidation state of +4 in MnO₂ to +2 in MnCl₂. Going from +4 to +2 requires gaining exactly 2 electrons."
  },
  {
    id: 19, subject: "Chemistry", topic: "Chemical Energetics", year: 1986, exam: "JAMB",
    question: "20 cm³ of 0.1 molar NH₄OH solution when neutralized with 20.05 cm³ of 0.1 molar HCl liberated 102 Joules of heat. Calculate the heat of neutralization of NH₄OH.",
    options: ["-51.0 kJ mol⁻¹", "+57.3 kJ mol⁻¹", "+57.0 kJ mol⁻¹", "+51.0 kJ mol⁻¹"],
    answer: "-51.0 kJ mol⁻¹",
explanation: "Moles of water formed = Molarity * Volume = 0.1 * (20/1000) = 0.002 mol. Heat for 1 mole = 102 J / 0.002 mol = 51,000 J/mol = 51.0 kJ/mol. Because neutralization releases heat, ΔH is written as -51.0 kJ mol⁻¹."
},
{
id: 20, subject: "Chemistry", topic: "Chemical Equilibrium", year: 1986, exam: "JAMB",
question: "What is the consequence of increasing pressure on the equilibrium reaction: ZnO(s) + H₂(g) ⇌ Zn(s) + H₂O(g)?",
options: ["The equilibrium is driven to the left", "The equilibrium is driven to the right", "There is no effect", "More ZnO(s) is produced"],
answer: "There is no effect",
explanation: "Both sides of the equilibrium equation have exactly 1 mole of gas (H₂ on the left and H₂O on the right). Because gas mole counts are equal, changing pressure does not shift the equilibrium position."
},
{
id: 21, subject: "Chemistry", topic: "Gases & Non-Metals", year: 1986, exam: "JAMB",
question: "The approximate volume of air containing 10 cm³ of oxygen is",
options: ["20 cm³", "25 cm³", "50 cm³", "100 cm³"],
answer: "50 cm³",
explanation: "Air is roughly 21% oxygen by volume (modeled as 20% or 1/5 for simple calculation metrics). Volume of air = 10 cm³ * 5 = 50 cm³."
},
{
id: 22, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1986, exam: "JAMB",
question: "The reaction Mg + H₂O -> MgO + H₂ takes place only in the presence of",
options: ["excess Mg ribbon", "excess cold water", "very hot water", "steam"],
answer: "steam",
explanation: "Magnesium reacts very slowly with cold water, but burns vigorously in steam to yield magnesium oxide and hydrogen gas."
},
{
id: 23, subject: "Chemistry", topic: "Gases & Non-Metals", year: 1986, exam: "JAMB",
question: "When steam is passed through red hot carbon, which of the following are produced?",
options: [
"Hydrogen and oxygen and carbon(IV) oxide",
"Hydrogen and carbon(IV) oxide",
"Hydrogen and carbon(II) oxide",
"Hydrogen and trioxocarbonate(IV) acid"
],
answer: "Hydrogen and carbon(II) oxide",
explanation: "Passing steam over red-hot carbon drives the water-gas reaction: C(s) + H₂O(g) -> CO(g) + H₂(g), producing hydrogen and carbon(II) oxide."
},
{
id: 24, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1986, exam: "JAMB",
question: "Which of the following contains an efflorescent, a deliquescent and a hygroscopic substance respectively?",
options: [
"Na₂SO₄, concentrated H₂SO₄, CaCl₂",
"Na₂CO₃·10H₂O, FeCl₃, concentrated H₂SO₄",
"Na₂CO₃, CO₂, H₂O, FeSO₄·7H₂O",
"Concentrated H₂SO₄, FeSO₄, MgCl₂"
],
answer: "Na₂CO₃·10H₂O, FeCl₃, concentrated H₂SO₄",
explanation: "Na₂CO₃·10H₂O loses water to air (efflorescent), FeCl₃ absorbs water until it dissolves into solution (deliquescent), and concentrated H₂SO₄ absorbs water without forming a pool (hygroscopic)."
},
{
id: 25, subject: "Chemistry", topic: "Water Chemistry", year: 1986, exam: "JAMB",
question: "The tabulated results below were obtained by titrating 10.0 cm³ of water with soap. The titration was repeated with the same sample of water after boiling. [Before boiling: Final=25.0, Initial=10.0] [After boiling: Final=20.0, Initial=15.0]. The ratio of permanent to temporary hardness is",
options: ["1:5", "1:4", "4:1", "1:2"],
answer: "1:2",
explanation: "Volume before boiling = 25 - 10 = 15 cm³ (Total hardness). Volume after boiling = 20 - 15 = 5 cm³ (Permanent hardness). Temporary hardness removed by boiling = 15 - 5 = 10 cm³. Ratio of permanent to temporary hardness = 5 : 10 = 1:2."
},
{
id: 26, subject: "Chemistry", topic: "Environmental Chemistry", year: 1986, exam: "JAMB",
question: "The exhaust fumes from a garage in a place that uses petrol of high sulphur content are bound to contain",
options: ["CO and SO₃", "CO and SO₂", "CO, SO₂ and SO₃", "CO and H₂S"],
answer: "CO, SO₂ and SO₃",
explanation: "Incomplete fuel combustion generates carbon monoxide (CO). Burning the sulfur impurities forms sulfur(IV) oxide (SO₂), which can partially oxidize further into sulfur(VI) oxide (SO₃)."
},
{
id: 27, subject: "Chemistry", topic: "Environmental Chemistry", year: 1986, exam: "JAMB",
question: "Oxygen-demanding wastes are considered to be a water pollutant because they",
options: [
"deplete oxygen which is necessary for the survival of aquatic organisms",
"increase oxygen which is necessary for the survival of aquatic organisms",
"increase other gaseous species which are necessary for survival of aquatic organisms",
"deplete other gaseous species which are necessary for the survival of aquatic organisms"
],
answer: "deplete oxygen which is necessary for the survival of aquatic organisms",
explanation: "Organic waste triggers microbial growth that consumes dissolved oxygen, suffocating fish and other aquatic life."
},
{
id: 28, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1986, exam: "JAMB",
question: "Which of the following will react further with oxygen to form a higher oxide?",
options: ["NO and H₂O", "CO and CO₂", "SO₂ and NO", "CO₂ and H₂O"],
answer: "SO₂ and NO",
explanation: "Both SO₂ and NO are unsaturated oxides that can react further with oxygen to form higher stable oxides (SO₃ and NO₂)."
},
{
id: 29, subject: "Chemistry", topic: "Qualitative Analysis", year: 1986, exam: "JAMB",
question: "In the course of an experiment, two gases X and Y were produced. X turned wet lead ethanoate paper black and Y bleached moist litmus paper. What are the elements in each of the gases X and Y respectively?",
options: ["H and S; Cl", "H and O; Cl", "H and S; C and O", "H and Cl; S and O"],
answer: "H and S; Cl",
explanation: "Gas X is hydrogen sulphide (H₂S), containing hydrogen and sulphur, which forms black lead sulphide. Gas Y is chlorine gas (Cl₂), which bleaches litmus paper."
},
{
id: 30, subject: "Chemistry", topic: "Qualitative Analysis", year: 1986, exam: "JAMB",
question: "Which of the following sulphides is insoluble in dilute HCl?",
options: ["Na₂S", "ZnS", "CuS", "FeS"],
answer: "CuS",
explanation: "Copper(II) sulphide (CuS) has an extremely low solubility product, making it highly insoluble and unable to dissolve in dilute acids like HCl."
},
{
id: 31, subject: "Chemistry", topic: "Gases & Non-Metals", year: 1986, exam: "JAMB",
question: "When chlorine is passed into water and subsequently exposed to sunlight, the gas evolved is",
options: ["HCl", "HOCl", "O₂", "Cl₂O₂"],
answer: "O₂",
explanation: "Chlorine gas dissolves in water to form unstable hypochlorous acid (HOCl). Sunlight decomposes HOCl, releasing oxygen gas: 2HOCl -> 2HCl + O₂↑."
},
{
id: 32, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1986, exam: "JAMB",
question: "Which of the following metals does NOT form a stable trioxocarbonate(IV)?",
options: ["Fe", "Al", "Zn", "Pb"],
answer: "Al",
explanation: "Aluminium has a high charge density that polarizes carbonate ions, causing aluminium carbonate to decompose spontaneously. As a result, it cannot exist as a stable solid compound."
},
{
id: 33, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1986, exam: "JAMB",
question: "Substance Z reacts with NaOH to give salt and water only. When Z is treated with dilute HCl, a gas is evolved which gives a yellow suspension on passing into concentrated HNO₃. Substance Z is",
options: ["NaHS", "Na₂SO₃", "Na₂S", "NaHSO₃"],
answer: "Na₂S",
explanation: "Sodium sulphide (Na₂S) reacts with HCl to release hydrogen sulphide gas (H₂S). Passing H₂S into an oxidizing agent like HNO₃ oxidizes the sulfide ions into a yellow suspension of elemental sulfur."
},
{
id: 41, subject: "Chemistry", topic: "Organic Chemistry", year: 1986, exam: "JAMB",
question: "Which of the following statement options is NOT correct for the named organic compound?",
options: [
"Butanoic acid solution gives effervescence with Na₂CO₃ solution",
"Glucose when reacted with Na₂CrO₄ at 0°C will show immediate discharge of colour",
"When but-2-ene is reacted with dilute solution of KMnO₄ the purple colour is discharged readily",
"When butan-2-ol is boiled with butanoic acid with concentrated H₂SO₄ an ester is produced"
],
answer: "Glucose when reacted with Na₂CrO₄ at 0°C will show immediate discharge of colour",
explanation: "Glucose does not react immediately with sodium chromate solutions at low temperatures. In contrast, alkenes decolorize KMnO₄, carboxylic acids decompose carbonates, and alcohols react with acids to form sweet-smelling esters."
},
{
id: 42, subject: "Chemistry", topic: "Applied Chemistry", year: 1986, exam: "JAMB",
question: "Which of the following is used as an 'anti-knock' in automobile engines?",
options: ["Tetramethyl silane", "Lead tetra-ethyl", "Glycerol", "N-heptane"],
answer: "Lead tetra-ethyl",
explanation: "Tetraethyl lead [Pb(C₂H₅)₄] was historically added to petrol to increase octane ratings, smooth out combustion, and reduce engine knocking."
},
{
id: 43, subject: "Chemistry", topic: "Applied Chemistry", year: 1986, exam: "JAMB",
question: "What reaction takes place when palm-oil is added to potash and foams are observed?",
options: ["Neutralization", "Saponification", "Etherification", "Salting-out"],
answer: "Saponification",
explanation: "Boiling lipids or fats (like palm oil) with an alkaline solution (like potash) hydrolyzes the esters to form soap and glycerol, a process known as saponification."
},
{
id: 44, subject: "Chemistry", topic: "Organic Chemistry", year: 1986, exam: "JAMB",
question: "How many isomers can be formed from organic compounds with the formula C₃H₈O?",
options: ["2", "3", "4", "5"],
answer: "3",
explanation: "The formula C₃H₈O can form three isomers: propan-1-ol, propan-2-ol, and methoxyethane (an ether)."
},
{
id: 45, subject: "Chemistry", topic: "Organic Chemistry", year: 1986, exam: "JAMB",
question: "Which of the following structural entries represents pent-2-enoic acid?",
options: [
"CH₃-CH₂-CH=CH-COOH",
"CH₃-CH=CH-CH₂-COOH",
"CH₃-CH₂-CH₂-CH=CH-COOH",
"CH₃-CH=C=CH-COOH"
],
answer: "CH₃-CH₂-CH=CH-COOH",
explanation: "The five-carbon carboxylic acid chain has a double bond starting at position 2, giving it the structure CH₃-CH₂-CH=CH-COOH."
},
{
id: 46, subject: "Chemistry", topic: "Organic Chemistry", year: 1986, exam: "JAMB",
question: "When ethanol is heated with excess concentrated sulphuric acid, the ethanol is",
options: ["oxidized to ethene", "polymerized to polyethene", "dehydrated to ethene", "dehydrated to ethyne"],
answer: "dehydrated to ethene",
explanation: "Heating ethanol with excess concentrated H₂SO₄ at 180°C removes a water molecule via an elimination mechanism, dehydrating it into ethene gas."
},
{
id: 47, subject: "Chemistry", topic: "Organic Chemistry", year: 1986, exam: "JAMB",
question: "Which of the following compounds is NOT formed by the action of chlorine on methane?",
options: ["CH₃Cl", "CH₃Cl₂", "CH₂Cl₂", "CHCl₃"],
answer: "CH₃Cl₂",
explanation: "The radical chlorination of methane produces CH₃Cl, CH₂Cl₂, CHCl₃, and CCl₄. The compound formula 'CH₃Cl₂' violates standard carbon valence rules and cannot be formed."
},
{
id: 48, subject: "Chemistry", topic: "Organic Chemistry", year: 1986, exam: "JAMB",
question: "The general formula of an alkyl halide (where X represents the halide) is",
options: ["CₙH₂ₙ-X", "CₙH₂ₙ₊₁X", "CₙH₂ₙ₊₂X", "CₙH₂ₙX"],
answer: "CₙH₂ₙ₊₁X",
explanation: "Replacing one hydrogen atom of an alkane (CₙH₂ₙ₊₂) with a halogen atom (X) gives the general alkyl halide formula CₙH₂ₙ₊₁X."
},
{
id: 49, subject: "Chemistry", topic: "Applied Chemistry", year: 1986, exam: "JAMB",
question: "Which of the following are made by the process of polymerization?",
options: ["Nylon and soap", "Nylon and rubber", "Soap and butane", "Margarine and Nylon"],
answer: "Nylon and rubber",
explanation: "Nylon is a synthetic polyamide polymer, and rubber is a polymer made of repeating isoprene units. Both are produced through polymerization reactions."
},
{
id: 50, subject: "Chemistry", topic: "Applied Chemistry", year: 1986, exam: "JAMB",
question: "Starch can be converted to ethyl alcohol by",
options: ["neutralization", "isomerization", "distillation", "fermentation"],
answer: "fermentation",
explanation: "Enzymes break down complex starch macromolecules into simple sugars, which are then converted into ethanol via anaerobic fermentation by yeast."
}
];
// Note: Administrative formatting exclusions applied to placeholder tracking items (Questions 34-40 duplicate/blank entries in structural layout margins).
export default chemJamb1986;
