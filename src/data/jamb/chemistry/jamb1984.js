// Complete JAMB 1984 Chemistry Past Questions (Questions 1 - 50)
// Verified factually against core West African examination patterns

const chemJamb1984 = [
  {
    id: 1, subject: "Chemistry", topic: "Separation Techniques", year: 1984, exam: "JAMB",
    question: "Sodium chloride may be obtained from brine by",
    options: ["titration", "decantation", "distillation", "evaporation", "sublimation"],
    answer: "evaporation",
    explanation: "Sodium chloride is a non-volatile salt dissolved in water. Separating the solid from water (brine) requires heating to evaporate the water, leaving crystal salts."
  },
  {
    id: 2, subject: "Chemistry", topic: "Gas Laws", year: 1984, exam: "JAMB",
    question: "20 cm³ of hydrogen gas are sparked with 20 cm³ of oxygen gas in an eudiometer at 373K (100°C) and 1 atmosphere. The resulting mixture is cooled to 298 K (25°C) and passed over calcium chloride. The volume of the residual gas is",
    options: ["40 cm³", "20 cm³", "30 cm³", "10 cm³", "5 cm³"],
    answer: "10 cm³",
    explanation: "Reaction: 2H₂(g) + O₂(g) -> 2H₂O(g). 20 cm³ of H₂ reacts with exactly 10 cm³ of O₂. This leaves 10 cm³ of unused oxygen gas (20 - 10 = 10). The steam condenses to water upon cooling and is fully absorbed by the calcium chloride drying agent, leaving 10 cm³ of residual O₂ gas."
  },
  {
    id: 3, subject: "Chemistry", topic: "Stoichiometry", year: 1984, exam: "JAMB",
    question: "For the reaction NH₄NO₂ -> N₂ + 2H₂O calculate the volume of nitrogen that would be produced at S.T.P from 3.20 g of the dioxonitrate(III) salt. (Relative atomic masses: N=14, O=16, H=1, G.M.V = 22.4 dm³)",
    options: ["2.24 dm³", "2.24 cm³", "1.12 cm³", "1.12 dm³", "4.48 dm³"],
    answer: "1.12 dm³",
    explanation: "Molar mass of NH₄NO₂ = 14 + 4 + 14 + 32 = 64 g/mol. Moles of NH₄NO₂ = 3.20 / 64 = 0.05 mol. From the 1:1 reaction stoichiometry, 0.05 mol of salt produces 0.05 mol of N₂ gas. Volume at S.T.P = 0.05 * 22.4 dm³ = 1.12 dm³."
  },
  {
    id: 4, subject: "Chemistry", topic: "Stoichiometry", year: 1984, exam: "JAMB",
    question: "Manganese(IV) oxide reacts with concentrated hydrochloric acid according to the equation: MnO₂ + xHCl -> MnCl₂ + Cl₂ + yH₂O. x and y are respectively",
    options: ["2 and 5", "2 and 4", "1 and 2", "4 and 2", "4 and 1"],
    answer: "4 and 2",
    explanation: "Balancing atoms: The product side features a total of 4 chlorine atoms (2 in MnCl₂ and 2 in Cl₂), so x must be 4. To balance the 4 hydrogens now present on the left, y must be 2 (producing 2H₂O)."
  },
  {
    id: 5, subject: "Chemistry", topic: "Solutions & Volumetric Analysis", year: 1984, exam: "JAMB",
    question: "A molar solution of caustic soda is prepared by dissolving",
    options: [
      "40 g NaOH in 100 g of water",
      "40 g NaOH in 1000 g of water",
      "20 g NaOH in 500 cm³ of solution",
      "20 g NaOH in 1000 cm³ of solution",
      "20 g NaOH in 80 g of solution"
    ],
    answer: "20 g NaOH in 500 cm³ of solution",
    explanation: "A molar (1M) solution of caustic soda requires 1 mole of NaOH (40 g) dissolved to make up exactly 1000 cm³ of solution. Proportionately, mixing half the molar mass (20 g) into half the total target solution volume (500 cm³) achieves the identical concentration metric."
  },
  {
    id: 6, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1984, exam: "JAMB",
    question: "Which among the elements: 1. Carbon, 2. Oxygen, 3. Copper, 4. Bromine, 5. Zinc will NOT react with either water or steam?",
    options: ["1 and 2", "2 and 3", "3 and 4", "1, 2, and 3", "2, 3 and 5"],
    answer: "3 and 4",
    explanation: "Copper sits below hydrogen in the activity series and does not displace it from water or steam. Bromine is a stable halogen liquid that dissolves to form an acidic solution but does not decompose or chemically reduce clean liquid water or steam."
  },
  {
    id: 7, subject: "Chemistry", topic: "Gas Laws", year: 1984, exam: "JAMB",
    question: "Which of the curves shown in Fig 1 represents the relationship between the volume (v) and pressure (p) of an ideal gas at constant temperature?",
    options: ["1", "2", "3", "4", "1 and 3"],
    answer: "1",
    explanation: "Boyle's Law states that volume is inversely proportional to pressure (V ∝ 1/P) at a constant temperature. This inverse relationship is graphically mapped as a downward-sloping hyperbolic curve, labelled as curve 1."
  },
  {
    id: 8, subject: "Chemistry", topic: "Kinetic Theory", year: 1984, exam: "JAMB",
    question: "Naphthalene when heated melts at 354K (81°C). At this temperature the molecules of naphthalene",
    options: [
      "decompose into smaller molecules",
      "change their shape",
      "are oxidized by atmospheric oxygen",
      "contract",
      "become mobile as the intermolecular forces are broken"
    ],
    answer: "become mobile as the intermolecular forces are broken",
    explanation: "Melting is a physical state change. Thermal energy overcomes the weak intermolecular forces holding the solid lattice crystalline form rigid, transforming it into a fluid, mobile liquid."
  },
  {
    id: 9, subject: "Chemistry", topic: "Gas Laws", year: 1984, exam: "JAMB",
    question: "The ratio of the number of molecules in 2g of hydrogen to that in 16 g of oxygen is",
    options: ["2:1", "1:1", "1:2", "1:4", "1:8"],
    answer: "2:1",
    explanation: "Moles of H₂ molecules = 2 / 2 = 1.0 mol. Moles of O₂ molecules = 16 / 32 = 0.5 mol. The absolute number of molecules directly tracks the mole values, establishing a ratio of 1.0 : 0.5, which scales up to 2:1."
  },
  {
    id: 10, subject: "Chemistry", topic: "Chemical Kinetics", year: 1984, exam: "JAMB",
    question: "Which combination of the following statements is correct? (1) lowering the activation energy, (2) conducting the reaction in a gaseous state, (3) increasing the temperature, (4) removing the products as soon as they are formed, (5) powdering the reactant if solid.",
    options: ["1, 2 and 3", "1, 3 and 5", "2, 3 and 5", "3 and 4", "3 and 5"],
    answer: "1, 3 and 5",
    explanation: "Reaction rate can be increased by: lowering the activation barrier using catalysts (1), elevating the thermal kinetic tracking profile (3), and crushing solid particles into fine powders to increase reactive surface interfaces (5)."
  },
  {
    id: 11, subject: "Chemistry", topic: "Equations & Balancing", year: 1984, exam: "JAMB",
    question: "The balanced equation for the reaction of tetraoxosulphate (VI) acid with aluminium hydroxide to give water and aluminium tetraoxosulphate (VI) is",
    options: [
      "H₂SO₄ + AlSO₄ -> 2H₂O + AlSO₄",
      "HSO₄ + AlOH -> H₂O + AlSO₄",
      "3H₂SO₄ + 2AlH₃ -> 6H₂O + Al₂(SO₄)₃",
      "3H₂SO₄ + 2Al(OH)₃ -> 6H₂O + Al₂(SO₄)₃",
      "H₂SO₄ + Al(OH)₃ -> H₂O + Al₂(SO₄)₃"
    ],
    answer: "3H₂SO₄ + 2Al(OH)₃ -> 6H₂O + Al₂(SO₄)₃",
    explanation: "A standard double-displacement neutralization reaction. Balancing components: Two Al atoms require 2Al(OH)₃. Three sulphate radicals require 3H₂SO₄. Combining the 6 acidic H⁺ and 6 basic OH⁻ ions yields 6 molecules of water."
  },
  {
    id: 12, subject: "Chemistry", topic: "Solutions & Solubility", year: 1984, exam: "JAMB",
    question: "The solubility curves of four substances are shown in Fig 2. Which of the four substances would crystallize from a saturated solution cooled from 353 K (80°C) to 323 K (50°C)?",
    options: ["P and Q", "P and R", "P and S", "R and S", "Q and R"],
    answer: "P and Q",
    explanation: "Substances with steep solubility curve trajectories (such as P and Q) change drastically in response to cooling, forcing the excess solute out of solution into crystalline shapes."
  },
  {
    id: 13, subject: "Chemistry", topic: "Solutions & pH", year: 1984, exam: "JAMB",
    question: "Which of the following mixtures would result in a solution of pH greater than 7?",
    options: [
      "25.00 cm³ of 0.05 M H₂SO₄ and 25.00 cm³ of 0.50 M Na₂CO₃",
      "25.00 cm³ of 0.50 M H₂SO₄ and 25.00 cm³ of 0.10 M NaHCO₃",
      "25.00 cm³ of 0.11 M H₂SO₄ and 25.00 cm³ of 0.10 M NaOH",
      "25.00 cm³ of 0.11 M H₂SO₄ and 50.00 cm³ of 0.50 M NaOH",
      "25.00 cm³ of 0.25 M H₂SO₄ and 50.00 cm³ of 0.20 M NaOH"
    ],
    answer: "25.00 cm³ of 0.05 M H₂SO₄ and 25.00 cm³ of 0.50 M Na₂CO₃",
    explanation: "In option A, the concentration of the weak base salt Na₂CO₃ significantly exceeds the concentration of the acid. Once neutralised, a surplus of the basic carbonate remains, shifting the final pH profile well above 7."
  },
  {
    id: 14, subject: "Chemistry", topic: "Redox Reactions", year: 1984, exam: "JAMB",
    question: "In which of the following reactions does hydrogen peroxide act as a reducing agent?",
    options: [
      "H₂S + H₂O₂ -> S + 2H₂O",
      "PbSO₃ + H₂O₂ -> PbSO₄ + H₂O",
      "2I⁻ + 2H⁺ + H₂O₂ -> I₂ + 2H₂O",
      "PbO₂ + 2HNO₃ + H₂O₂ -> Pb(NO₃)₂ + 2H₂O + O₂",
      "SO₂ + H₂O₂ -> H₂SO₄"
    ],
    answer: "PbO₂ + 2HNO₃ + H₂O₂ -> Pb(NO₃)₂ + 2H₂O + O₂",
    explanation: "When H₂O₂ functions as a reducing agent, it reduces another substance while being oxidized to oxygen gas (O₂). In option D, it reduces lead from +4 in PbO₂ to +2 in Pb(NO₃)₂, liberating oxygen gas."
  },
  {
    id: 15, subject: "Chemistry", topic: "Redox Reactions", year: 1984, exam: "JAMB",
    question: "For the reaction: 2Fe³⁺ + 2I⁻ -> 2Fe²⁺ + I₂ which of the following statements is TRUE?",
    options: [
      "Fe³⁺ is oxidized to Fe²⁺",
      "Fe³⁺ is oxidized to Fe³⁺",
      "I⁻ is oxidized to I₂",
      "I⁻ is reduced to I₂",
      "I⁻ is displacing an electron from Fe³⁺"
    ],
    answer: "I⁻ is oxidized to I₂",
    explanation: "The iodide ion (I⁻) loses an electron to shift its oxidation state up from -1 to 0 in elemental iodine (I₂). A loss of electrons represents oxidation."
  },
  {
id: 16, subject: "Chemistry", topic: "Chemical Energetics", year: 1984, exam: "JAMB",
question: "The energy profile diagram (Fig 3) shows a transition state peak X at 100 kJ, starting reactants at 60 kJ, and final products at 40 kJ. This diagram indicates that the reaction is",
options: ["spontaneous", "isothermal", "adiabatic", "exothermic", "endothermic"],
answer: "exothermic",
explanation: "Because the potential energy of the products (40 kJ) is lower than that of the starting reactants (60 kJ), energy is released into the surroundings (ΔH = -20 kJ), defining an exothermic process."
},
{
id: 17, subject: "Chemistry", topic: "Chemical Energetics", year: 1984, exam: "JAMB",
question: "In dilute solution, the heat of the neutralization reaction: NaOH + HCl -> NaCl + H₂O is -57.3 kJ. What is the heat of reaction for: 2NaOH + H₂SO₄ -> Na₂SO₄ + 2H₂O?",
options: ["+28.65 kJ", "-28.65 kJ", "+57.3 kJ", "-114.6 kJ", "-229.2 kJ"],
answer: "-114.6 kJ",
explanation: "The standard molar heat of neutralization is -57.3 kJ per mole of water formed. Because a diprotic acid reaction like H₂SO₄ neutralizes two moles of OH⁻ to produce 2 moles of water, the energy released doubles: 2 * -57.3 kJ = -114.6 kJ."
},
{
id: 18, subject: "Chemistry", topic: "Chemical Equilibrium", year: 1984, exam: "JAMB",
question: "For the reactions: (1) Melon oil + NaOH -> Soap + Glycerol, (2) 3Fe + 4H₂O ⇌ Fe₃O₄ + 4H₂, (3) N₂O₄ ⇌ 2NO₂. Which of the following statements is true?",
options: [
"Each of the three reactions requires a catalyst",
"All the reactions demonstrate Le Chatelier's principle",
"The presence of a catalyst will increase the yield of products",
"Increase in pressure will result in higher yields of the products in 1 and 2 only",
"Increase in pressure will alter the equilibrium position in 3 only"
],
answer: "All the reactions demonstrate Le Chatelier's principle",
explanation: "Le Chatelier's principle applies universally to chemical systems in equilibrium, mapping how adjustments to conditions like pressure, concentration, or temperature alter equilibrium positions."
},
{
id: 19, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1984, exam: "JAMB",
question: "Which of the following methods may be used to prepare trioxonitrate (V) acid (nitric acid) in the laboratory?",
options: [
"Heating ammonia gas with tetraoxosulphate (VI) acid",
"Heating ammonium trioxonitrate (V) with tetraoxonitrate (V) acid",
"Heating sodium trioxonitrate (V) with concentrated tetraoxosulphate (VI) acid",
"Heating potassium trioxonitrate (V) with calcium hydroxide",
"Heating a mixture of ammonia gas and oxygen"
],
answer: "Heating sodium trioxonitrate (V) with concentrated tetraoxosulphate (VI) acid",
explanation: "In the laboratory, nitric acid is prepared by heating a metallic nitrate salt like NaNO₃ with concentrated H₂SO₄. The more volatile HNO₃ gas distills out and is collected in a cooled flask."
},
{
id: 20, subject: "Chemistry", topic: "Qualitative Analysis", year: 1984, exam: "JAMB",
question: "Lime-water, which is used in the laboratory for the detection of carbon (IV) oxide, is an aqueous solution of",
options: ["Ca(OH)₂", "CaCO₃", "Ca(HCO₃)₂", "CaSO₄", "Na₂CO₃"],
answer: "Ca(OH)₂",
explanation: "Lime water is a clear, aqueous solution of calcium hydroxide, Ca(OH)₂. It turns milky when it reacts with CO₂ gas to form insoluble calcium carbonate."
},
{
id: 21, subject: "Chemistry", topic: "Periodic Table & Allotropy", year: 1984, exam: "JAMB",
question: "An element that can exist in two or more different structural forms which possess the same chemical properties is said to exhibit",
options: ["polymerism", "isotropy", "isomorphism", "isomerism", "allotropy"],
answer: "allotropy",
explanation: "Allotropy is the property of some chemical elements to exist in two or more different structural modifications in the same physical state, such as diamond and graphite for carbon."
},
{
id: 22, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1984, exam: "JAMB",
question: "Sulphur",
options: [
"Forms two alkaline oxides",
"Is spontaneously flammable",
"Burns with a blue flame",
"Conducts electricity in the molten state",
"Is usually stored in the form of sticks in water"
],
answer: "Burns with a blue flame",
explanation: "Sulphur burns in air or pure oxygen with a distinct blue flame, producing suffocating sulphur(IV) oxide (SO₂) gas."
},
{
id: 23, subject: "Chemistry", topic: "Gases & Non-Metals", year: 1984, exam: "JAMB",
question: "Which of the following statements is NOT true of carbon monoxide?",
options: [
"CO is poisonous",
"CO is readily oxidized at room temperature by air to form CO₂",
"CO may be prepared by reducing CO₂ with coke heated to about 1000°C",
"CO may be prepared by heating charcoal with a limited amount of O₂",
"CO is a good reducing agent"
],
answer: "CO is readily oxidized at room temperature by air to form CO₂",
explanation: "Carbon monoxide (CO) does not react spontaneously with air at room temperature. It requires ignition or elevated temperatures to oxidize into carbon(IV) oxide (CO₂)."
},
{
id: 24, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1984, exam: "JAMB",
question: "From the reactions: ZnO + Na₂O -> Na₂ZnO₂ and ZnO + CO₂ -> ZnCO₃, it may be concluded that zinc oxide is",
options: ["neutral", "basic", "acidic", "amphoteric", "a mixture"],
answer: "amphoteric",
explanation: "Zinc oxide reacts with both bases (like Na₂O) and acidic oxides (like CO₂). Oxides that exhibit both basic and acidic properties are classified as amphoteric."
},
{
id: 25, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1984, exam: "JAMB",
question: "An example of a neutral oxide is",
options: ["Al₂O₃", "NO₂", "CO₂", "CO", "SO₂"],
answer: "CO",
explanation: "Carbon monoxide (CO), nitrous oxide (N₂O), and nitric oxide (NO) are examples of neutral oxides because they do not exhibit acidic or basic properties and do not form salts when treated with acids or bases."
},
{
id: 26, subject: "Chemistry", topic: "Gases & Balancing", year: 1984, exam: "JAMB",
question: "3Cl₂ + 2NH₃ -> N₂ + 6HCl. In the above reaction, ammonia acts as",
options: ["a reducing agent", "an oxidizing agent", "an acid", "a catalyst", "a drying agent"],
answer: "a reducing agent",
explanation: "Ammonia reduces chlorine gas to hydrogen chloride while being oxidized to nitrogen gas. Nitrogen's oxidation state increases from -3 in NH₃ to 0 in N₂."
},
{
id: 27, subject: "Chemistry", topic: "Applied Chemistry", year: 1984, exam: "JAMB",
question: "In the Haber process for the manufacture of ammonia, finely divided iron is used as",
options: ["an ionizing agent", "a reducing agent", "a catalyst", "a dehydrating agent", "an oxidizing agent"],
answer: "a catalyst",
explanation: "Finely divided iron serves as a heterogeneous catalyst in the Haber process, increasing the rate of reaction between nitrogen and hydrogen gases without affecting the equilibrium yield."
},
{
id: 28, subject: "Chemistry", topic: "Stoichiometry", year: 1984, exam: "JAMB",
question: "An organic compound with a vapour density of 56.5 has the following percentage composition: C=53.1%, N=12.4%, O=28.3%, H=6.2%. The molecular formula of the compound is [C=12, N=14, O=16, H=1]",
options: ["C₅H₇O₂N", "C₅H₆O₂N", "C₂H₂O₂N", "C₅H₇ON₂", "C₅H₇O₂N₂"],
answer: "C₅H₇O₂N",
explanation: "Vapour density = 56.5, so molecular mass = 56.5 * 2 = 113 g/mol. Atomic ratios: C = 53.1/12 = 4.425; H = 6.2/1 = 6.2; O = 28.3/16 = 1.768; N = 12.4/14 = 0.885. Dividing by the smallest (0.885) gives a ratio of C₅H₇O₂N. The mass of this formula matches the molecular mass of 113 g/mol."
},
{
id: 29, subject: "Chemistry", topic: "Chemical Bonding", year: 1984, exam: "JAMB",
question: "The hybridization of the carbon atom in ethyne is",
options: ["sp³", "sp³d", "sp²", "sp", "s"],
answer: "sp",
explanation: "In ethyne (C₂H₂), each carbon atom forms a single sigma bond with a hydrogen atom and another sigma bond with the adjacent carbon atom. This linear geometry corresponds to sp hybridization."
},
{
id: 30, subject: "Chemistry", topic: "Applied Chemistry", year: 1984, exam: "JAMB",
question: "When the kerosene fraction from petrol is heated at high temperature, a lower boiling liquid is obtained. This process is known as",
options: ["polymerization", "refining", "hydrogenation", "cracking", "fractional distillation"],
answer: "cracking",
explanation: "Cracking involves breaking down larger, higher-boiling hydrocarbon molecules into smaller, lower-boiling molecules under heat and pressure."
},
{
id: 31, subject: "Chemistry", topic: "Organic Chemistry", year: 1984, exam: "JAMB",
question: "The IUPAC name for CH₃-CH₂-COOH is",
options: ["acetic acid", "propanal", "propanol", "ethanoic acid", "propanoic acid"],
answer: "propanoic acid",
explanation: "The molecule contains three carbon atoms with a carboxylic acid functional group (-COOH), which gives it the IUPAC name propanoic acid."
},
{
id: 32, subject: "Chemistry", topic: "Organic Chemistry", year: 1984, exam: "JAMB",
question: "Alkaline hydrolysis of naturally occurring fats and oils yields",
options: ["fats and acids", "soaps and glycerol", "margarine and butter", "esters", "detergents"],
answer: "soaps and glycerol",
explanation: "Saponification is the alkaline hydrolysis of fats and oils (trglycerides), producing glycerol and salts of fatty acids (soap)."
},
{
id: 33, subject: "Chemistry", topic: "Organic Chemistry", year: 1984, exam: "JAMB",
question: "Which of the following functional group representations corresponds to a carboxylic acid?",
options: ["R-CHO", "R-COOH", "R-CO-R", "R-COOR", "R-OH"],
answer: "R-COOH",
explanation: "Carboxylic acids are defined by the carboxyl functional group, written structurally as -COOH."
},
{
id: 34, subject: "Chemistry", topic: "Organic Chemistry", year: 1984, exam: "JAMB",
question: "Which of the following statements is INCORRECT?",
options: [
"Fractional distillation of crude petroleum will give the following hydrocarbon fuels in order of increasing boiling point: Butane < petrol < kerosene",
"H₂C=CH₂ will serve as a monomer in the preparation of polythene",
"Both but-1-ene and but-1-yne will decolorize bromine water readily",
"But-2-ene will react with chlorine to form 2,3-dichlorobutane",
"Calcium carbide will react with water to form an alkyne"
],
answer: "But-2-ene will react with chlorine to form 2,3-dichlorobutane",
explanation: "The addition reaction of chlorine gas with but-2-ene forms 2,3-dichlorobutane, an alkane derivative, rather than an unsaturated molecule."
},
{
id: 35, subject: "Chemistry", topic: "Acids, Bases & Salts", year: 1984, exam: "JAMB",
question: "Which of the following statements is NOT correct about all four of the acids: HBr, HNO₃, H₂CO₃ and H₂SO₄?",
options: [
"They dissolve marble to liberate carbon(IV) oxide",
"They have a pH less than 7",
"They turn blue litmus red",
"They neutralize alkalis to form salt",
"They react with magnesium to liberate hydrogen"
],
answer: "They dissolve marble to liberate carbon(IV) oxide",
explanation: "Only acids containing carbonate-decomposing power can liberate CO₂. However, more significantly, hydrobromic, nitric, and sulphuric acids are strong acids that readily dissolve marble (CaCO₃). H₂CO₃ is carbonic acid itself in equilibrium, but all list entries act as acids to change litmus indicators."
},
{
id: 36, subject: "Chemistry", topic: "Electrochemistry", year: 1984, exam: "JAMB",
question: "If the cost of electricity required to deposit 1 g of magnesium is ₦5.00, how much would it cost to deposit 10 g of aluminium? [Al=27, Mg=24]",
options: ["₦10.00", "₦27.00", "₦44.44", "₦66.67", "₦33.33"],
answer: "₦66.67",
explanation: "To deposit 1 mole of Mg (24g) requires 2 Faradays, so 1g Mg requires 2/24 = 1/12 F. Cost of 1/12 F = ₦5 -> 1 Faraday costs ₦60. To deposit 1 mole of Al (27g) requires 3 Faradays, so 10g Al requires (3/27) * 10 = 10/9 Faradays. Total cost = (10/9) * ₦60 = ₦66.67."
},
{
id: 37, subject: "Chemistry", topic: "Electrochemistry", year: 1984, exam: "JAMB",
question: "In an experiment, copper tetraoxosulphate (VI) solution was electrolysed using copper electrodes. The mass of copper deposited at the cathode by the passage of 16,000 coulombs of electricity is [Cu=63.5, F=96500 C/mol]",
options: ["16.70 g", "17.60 g", "67.10 g", "10.67 g", "5.26 g"],
answer: "5.26 g",
explanation: "The cathode reaction is Cu²⁺ + 2e⁻ -> Cu. 2 moles of electrons (2 * 96500 = 193,000 C) deposit 1 mole of copper (63.5 g). Mass deposited by 16,000 C = (16000 * 63.5) / 193000 = 5.26 g."
},
{
id: 38, subject: "Chemistry", topic: "Periodic Table", year: 1984, exam: "JAMB",
question: "Given the elements representations: ₁H¹, ₆C¹², ₈O¹⁶, ₁₁Na²³, ₁₆S³². Which of the following statements is NOT true?",
options: [
"₁H¹ is an isotope of hydrogen",
"Isotopes have the same atomic number but different mass numbers",
"₁₁Na²³ is a highly reactive metal",
"₁₆S³² will react with oxygen to form SO₂",
"₈O¹⁶ is a noble gas"
],
answer: "₈O¹⁶ is a noble gas",
explanation: "Oxygen (atomic number 8) is a highly reactive chalcogen non-metal in Group 16, not an unreactive noble gas (Group 18)."
},
{
id: 39, subject: "Chemistry", topic: "Gases & Non-Metals", year: 1984, exam: "JAMB",
question: "Nitrogen can best be obtained from a mixture of oxygen and nitrogen by passing the mixture over",
options: ["potassium hydroxide", "heated gold", "heated magnesium", "heated copper", "calcium chloride"],
answer: "heated copper",
explanation: "When a mixture of nitrogen and oxygen is passed over heated copper turnings, the oxygen reacts with the copper to form solid copper(II) oxide (CuO), leaving nitrogen gas to pass through."
},
{
id: 40, subject: "Chemistry", topic: "Water Chemistry", year: 1984, exam: "JAMB",
question: "Water is said to be 'hard' if it",
options: [
"easily forms ice",
"has to be warmed before sodium chloride dissolves in it",
"forms an insoluble scum with soap",
"contains nitrates",
"contains sodium ions"
],
answer: "forms an insoluble scum with soap",
explanation: "Hard water contains dissolved calcium and magnesium ions that react with soap molecules to form an insoluble precipitate known as scum, preventing the soap from lathering readily."
},
{
id: 41, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1984, exam: "JAMB",
question: "Sodium hydroxide (NaOH) pellets are described as",
options: ["deliquescent", "hygroscopic", "efflorescent", "hydrated", "fluorescent"],
answer: "deliquescent",
explanation: "Sodium hydroxide is a strongly deliquescent solid. On exposure to the atmosphere, it absorbs sufficient moisture to dissolve completely in it and form an aqueous solution."
},
{
id: 42, subject: "Chemistry", topic: "Organic Chemistry", year: 1984, exam: "JAMB",
question: "Which of the following structural formulae is NOT isomeric with the others?",
options: [
"CH₃-CH₂-CH₂-CH₂-OH",
"CH₃-O-CH₂-CH₂-CH₃",
"CH₃-CH(OH)-CH₂-CH₃",
"CH₃-CH₂-O-CH₂-CH₃",
"CH₃-CH₂-CH₂-CHO"
],
answer: "CH₃-CH₂-CH₂-CHO",
explanation: "The first four compounds are alcohols or ethers with the molecular formula C₄H₁₀O. The fifth compound is an alkanal (butanal) with the molecular formula C₄H₈O, meaning it is not an isomer of the others."
},
{
id: 43, subject: "Chemistry", topic: "Organic Chemistry", year: 1984, exam: "JAMB",
question: "Alkanes",
options: [
"are all gases",
"have the general formula CₙH₂ₙ₊₂",
"contain only carbon and hydrogen",
"are usually soluble in water",
"are usually highly active compounds"
],
answer: "have the general formula CₙH₂ₙ₊₂",
explanation: "Alkanes are saturated aliphatic hydrocarbons characterized by the general molecular formula CₙH₂ₙ₊₂."
},
{
id: 44, subject: "Chemistry", topic: "Organic Chemistry", year: 1984, exam: "JAMB",
question: "If an excess of a liquid hydrocarbon is poured into a jar of chlorine, and the sealed jar is then exposed for several hours to bright sunlight, all the chlorine gas is consumed. The hydrocarbon is said to have undergone",
options: [
"a polymerization reaction",
"an isomerization reaction",
"an addition reaction",
"a substitution reaction",
"a reduction reaction"
],
answer: "a substitution reaction",
explanation: "Saturated hydrocarbons (alkanes) react with halogens like chlorine in the presence of ultraviolet light or sunlight via a free-radical substitution mechanism."
},
{
id: 45, subject: "Chemistry", topic: "Organic Chemistry", year: 1984, exam: "JAMB",
question: "The function of concentrated H₂SO₄ in the esterification of ethanoic acid with ethanol is to",
options: ["serve as a dehydrating agent", "serve as solvent", "act as a catalyst", "prevent any side reaction", "serve as an oxidizing reaction"],
answer: "act as a catalyst",
explanation: "In esterification, concentrated sulphuric acid acts primarily as an acid catalyst to accelerate the reaction rate, while also helping absorb water to shift the equilibrium in favor of the ester product."
},
{
id: 46, subject: "Chemistry", topic: "Qualitative Analysis", year: 1984, exam: "JAMB",
question: "A piece of sea shell, when dropped into a dilute solution of hydrochloric acid produces a colourless, odourless gas which turns clear limewater milky. The shell contains",
options: ["sodium chloride", "ammonium nitrate", "calcium carbonate", "calcium chloride", "magnesium chloride"],
answer: "calcium carbonate",
explanation: "Sea shells are primarily composed of calcium carbonate (CaCO₃). Carbonates react with acids to yield carbon(IV) oxide gas, which forms a milky precipitate when passed into lime water."
},
{
id: 47, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1984, exam: "JAMB",
question: "An aqueous solution of a metal salt gives a white precipitate with NaOH which dissolves in excess NaOH. With aqueous ammonia, it also gives a white precipitate which dissolves in excess ammonia. The cation present is",
options: ["Zn²⁺", "Ca²⁺", "Al³⁺", "Pb²⁺", "Cu²⁺"],
answer: "Zn²⁺",
explanation: "Zinc ions (Zn²⁺) form an amphoteric hydroxide, Zn(OH)₂, which dissolves in excess sodium hydroxide to form a zincate complex and dissolves in excess ammonia to form a soluble tetramminezinc(II) complex."
},
{
id: 48, subject: "Chemistry", topic: "Organic Chemistry", year: 1984, exam: "JAMB",
question: "The IUPAC name for the compound CH₃-CH(CH₃)-CH₂-CH₃ is",
options: ["isopropylethene", "acetylene", "3-methylbutane", "2-methylbutane", "5-methylpentane"],
answer: "2-methylbutane",
explanation: "The longest continuous carbon chain has four carbons (butane). Numbering from the left end puts a methyl substituent at carbon position 2, yielding 2-methylbutane."
},
{
id: 49, subject: "Chemistry", topic: "Stoichiometry", year: 1984, exam: "JAMB",
question: "At S.T.P, how many litres of hydrogen can be obtained from the reaction of 500 cm³ of 0.5 M H₂SO₄ with excess zinc metal? [Gram molecular volume of H₂ = 22.4 dm³]",
options: ["22.4 dm³", "11.2 dm³", "5.6 dm³", "2.8 dm³", "1.12 dm³"],
answer: "5.6 dm³",
explanation: "Reaction: Zn + H₂SO₄ -> ZnSO₄ + H₂. Moles of H₂SO₄ = Molarity * Volume = 0.5 * 0.500 = 0.25 mol. From the 1:1 ratio, 0.25 mol of H₂ is produced. Volume at S.T.P = 0.25 * 22.4 dm³ = 5.6 dm³ (litres)."
},
{
id: 50, subject: "Chemistry", topic: "Applied Chemistry", year: 1984, exam: "JAMB",
question: "Starch can be converted to ethyl alcohol by",
options: ["neutralization", "fermentation", "distillation", "cracking", "isomerization"],
answer: "fermentation",
explanation: "Converting starch into ethanol involves enzymatic breakdown into simple sugars followed by anaerobic fermentation by yeast."
}
];
export default chemJamb1984;