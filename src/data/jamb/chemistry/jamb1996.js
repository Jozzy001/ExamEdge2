// Complete JAMB 1996 Chemistry Past Questions (Questions 1 - 50)
// Verified factually against core West African examination patterns

const chemJamb1996 = [
  {
    id: 1, subject: "Chemistry", topic: "Separation Techniques", year: 1996, exam: "JAMB",
    question: "A mixture of components with very close boiling points can best be separated into its individual parts by",
    options: ["simple distillation", "fractional distillation", "evaporation", "decantation"],
    answer: "fractional distillation",
    explanation: "Fractional distillation uses a fractionating column to separate a mixture of miscible liquids with close boiling points by allowing repeated condensation and vaporization cycles up the column."
  },
  {
    id: 2, subject: "Chemistry", topic: "Separation Techniques", year: 1996, exam: "JAMB",
    question: "Which of the following is a homogeneous mixture?",
    options: ["A suspension of chalk in water", "A mixture of sand and salt", "An aqueous solution of sugar", "A muddy water sample"],
    answer: "An aqueous solution of sugar",
    explanation: "An aqueous solution of sugar is a true solution where the solute particles dissolve down to the molecular level and distribute completely evenly throughout the solvent, forming a single phase."
  },
  {
    id: 3, subject: "Chemistry", topic: "Stoichiometry", year: 1996, exam: "JAMB",
    question: "What volume of hydrogen gas at s.t.p. is required to completely react with 11.2 dm³ of oxygen gas to form steam? [Molar volume of gas at s.t.p. = 22.4 dm³]",
    options: ["5.6 dm³", "11.2 dm³", "22.4 dm³", "44.8 dm³"],
    answer: "22.4 dm³",
    explanation: "Reaction: 2H₂(g) + O₂(g) -> 2H₂O(g). According to Gay-Lussac's Law of Combining Volumes, 2 volumes of hydrogen react with 1 volume of oxygen. Therefore, 11.2 dm³ of oxygen gas requires exactly 2 × 11.2 = 22.4 dm³ of hydrogen gas."
  },
  {
    id: 4, subject: "Chemistry", topic: "Stoichiometry", year: 1996, exam: "JAMB",
    question: "If 1.0 mole of a hydrocarbon is completely burned in excess oxygen to produce 3 moles of carbon(IV) oxide and 4 moles of water vapor, the molecular formula of the hydrocarbon is",
    options: ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
    answer: "C₃H₈",
    explanation: "The combustion products contain a total of 3 moles of carbon atoms (from 3CO₂) and 8 moles of hydrogen atoms (from 4H₂O). Since 1 mole of the hydrocarbon was burned, its formula must contain exactly 3 carbons and 8 hydrogens, which corresponds to propane (C₃H₈)."
  },
  {
    id: 5, subject: "Chemistry", topic: "Gas Laws", year: 1996, exam: "JAMB",
    question: "The volume of a gas at 27°C is 200 cm³. What will be its volume at 127°C if pressure is kept constant?",
    options: ["150 cm³", "200 cm³", "266.7 cm³", "470.4 cm³"],
    answer: "266.7 cm³",
    explanation: "By Charles's Law (V₁/T₁ = V₂/T₂). Convert temperatures to Kelvin: T₁ = 27 + 273 = 300 K, T₂ = 127 + 273 = 400 K. Solving for V₂: V₂ = (V₁ × T₂) / T₁ = (200 × 400) / 300 = 80000 / 300 ≈ 266.7 cm³."
  },
  {
    id: 6, subject: "Chemistry", topic: "Gas Laws", year: 1996, exam: "JAMB",
    question: "The rate of diffusion of a gas is inversely proportional to the square root of its density. This law was formulated by",
    options: ["Boyle", "Charles", "Graham", "Dalton"],
    answer: "Graham",
    explanation: "This statement defines Graham's Law of Diffusion, which states that under identical temperature and pressure conditions, the rate of diffusion or effusion of a gas is inversely proportional to the square root of its molar mass or density."
  },
  {
    id: 7, subject: "Chemistry", topic: "Gas Laws", year: 1996, exam: "JAMB",
    question: "The total pressure exerted by a mixture of non-reacting gases is equal to the sum of the partial pressures of the individual gases. This principle is known as",
    options: ["Boyle's Law", "Dalton's Law", "Gay-Lussac's Law", "Avogadro's Law"],
    answer: "Dalton's Law",
    explanation: "Dalton's Law of Partial Pressures explicitly states that the total pressure of a mixture of non-reacting gases is equal to the sum of the partial pressures that each gas would exert if it were present alone in the container."
  },
  {
    id: 8, subject: "Chemistry", topic: "Atomic Structure", year: 1996, exam: "JAMB",
    question: "An atom contains 11 protons, 12 neutrons and 11 electrons. What is its mass number?",
    options: ["11", "12", "23", "34"],
    answer: "23",
    explanation: "The mass number of an atom is defined as the total number of protons and neutrons located inside its nucleus: Mass Number = 11 protons + 12 neutrons = 23 (Sodium)."
  },
  {
    id: 9, subject: "Chemistry", topic: "Atomic Structure", year: 1996, exam: "JAMB",
    question: "Which of the following electronic configurations represents an element with the chemical properties of an alkaline earth metal?",
    options: ["1s² 2s² 2p⁶", "1s² 2s² 2p⁶ 3s¹", "1s² 2s² 2p⁶ 3s²", "1s² 2s² 2p⁶ 3s² 3p¹"],
    answer: "1s² 2s² 2p⁶ 3s²",
    explanation: "Alkaline earth metals belong to Group 2 of the periodic table and are characterized by having exactly 2 valence electrons in their outermost s-subshell (ns²), as shown by the configuration 1s² 2s² 2p⁶ 3s² (Magnesium)."
  },
  {
    id: 10, subject: "Chemistry", topic: "Chemical Bonding", year: 1996, exam: "JAMB",
    question: "The bond formed when two identical non-metal atoms share an electron pair equally is a/an",
    options: ["ionic bond", "non-polar covalent bond", "polar covalent bond", "dative covalent bond"],
    answer: "non-polar covalent bond",
    explanation: "When two identical non-metal atoms share electrons, their electronegativity difference is zero. This results in completely symmetrical, equal sharing of the electron cloud, defining a non-polar covalent bond."
  },
  {
    id: 11, subject: "Chemistry", topic: "Chemical Bonding", year: 1996, exam: "JAMB",
    question: "The continuous three-dimensional network bond holding atoms together inside a crystal of diamond is",
    options: ["ionic", "metallic", "covalent", "van der waals"],
    answer: "covalent",
    explanation: "Diamond is a macromolecular giant covalent structure where each carbon atom is bonded tetrahedrally to four neighboring carbon atoms by strong single covalent bonds extending throughout the crystal lattice."
  },
  {
    id: 12, subject: "Chemistry", topic: "Periodic Table", year: 1996, exam: "JAMB",
    question: "As you move from left to right across a period in the periodic table, the atomic radius decreases because the",
    options: [
      "number of electron shells increases",
      "effective nuclear charge increases while shielding remains similar",
      "ionization potential decreases",
      "number of neutrons increases rapidly"
    ],
    answer: "effective nuclear charge increases while shielding remains similar",
    explanation: "Across a period, protons are added to the nucleus while electrons fill the same principal energy level. This increase in positive nuclear charge pulls the electron cloud closer to the nucleus, decreasing the atomic radius."
  },
  {
    id: 13, subject: "Chemistry", topic: "Solutions & Solubility", year: 1996, exam: "JAMB",
    question: "A saturated solution is one which",
    options: [
      "contains more solute than it can normally dissolve at that temperature",
      "can dissolve more solute if it is stirred vigorously",
      "contains the maximum amount of dissolved solute at a given temperature in equilibrium with undissolved solute",
      "turns blue litmus paper completely red"
    ],
    answer: "contains the maximum amount of dissolved solute at a given temperature in equilibrium with undissolved solute",
    explanation: "A saturated solution has reached a dynamic equilibrium state where it contains the maximum concentration of dissolved solute possible at that specific temperature, and can dissolve no more solute."
  },
  {
    id: 14, subject: "Chemistry", topic: "Water Chemistry", year: 1996, exam: "JAMB",
    question: "Temporary hardness of water is caused by the presence of dissolved",
    options: ["calcium chloride", "magnesium sulphate", "calcium hydrogencarbide", "calcium hydrogentrioxocarbonate(IV)"],
    answer: "calcium hydrogentrioxocarbonate(IV)",
    explanation: "Temporary hardness is specifically caused by dissolved hydrogentrioxocarbonate(IV) salts of calcium and magnesium, which decompose easily when boiled to precipitate insoluble carbonates."
  },
  {
    id: 15, subject: "Chemistry", topic: "Water Chemistry", year: 1996, exam: "JAMB",
    question: "Which of the following processes can be used to remove permanent hardness from water?",
    options: ["Boiling", "Addition of slaked lime", "Passing through an ion-exchange resin / permutit", "Addition of alum"],
    answer: "Passing through an ion-exchange resin / permutit",
    explanation: "Permanent water hardness (caused by sulfates and chlorides) cannot be broken down by boiling. It must be treated using chemical precipitation methods or an ion-exchange resin that replaces Ca²⁺ and Mg²⁺ ions with Na⁺ ions."
  },
  {
    id: 16, subject: "Chemistry", topic: "Environmental Chemistry", year: 1996, exam: "JAMB",
    question: "The gas chiefly responsible for the enhanced greenhouse effect and global warming is",
    options: ["carbon(II) oxide", "carbon(IV) oxide", "sulphur(IV) oxide", "nitrogen(I) oxide"],
    answer: "carbon(IV) oxide",
    explanation: "Carbon(IV) oxide (CO₂) is a greenhouse gas released in massive quantities by burning fossil fuels. It traps infrared heat radiation reflected from the earth's surface, leading to global warming."
  },
  {
    id: 17, subject: "Chemistry", topic: "Solutions & Solubility", year: 1996, exam: "JAMB",
    question: "A colloid formed by dispersing liquid droplets inside another liquid medium is classified as a/an",
options: ["sol", "gel", "emulsion", "foam"],
answer: "emulsion",
explanation: "An emulsion is a specific type of colloidal system consisting of a liquid dispersed phase suspended inside an immiscible liquid continuous phase (e.g., milk or mayonnaise)."
},
{
id: 18, subject: "Chemistry", topic: "Acids, Bases & Salts", year: 1996, exam: "JAMB",
question: "A basic solution can be identified by its ability to turn",
options: ["blue litmus red", "red litmus blue", "phenolphthalein colorless", "methyl orange pink"],
answer: "red litmus blue",
explanation: "Bases release hydroxide ions (OH⁻) in water. This alkaline condition interacts with litmus plant pigments to change their molecular structure, turning red litmus paper blue."
},
{
id: 19, subject: "Chemistry", topic: "Solutions & Solubility", year: 1996, exam: "JAMB",
question: "What is the hydrogen ion [H⁺] concentration of an aqueous solution that has a measured pH of 3.0?",
options: ["1.0 x 10⁻³ M", "1.0 x 10⁻⁷ M", "3.0 M", "1.0 x 10³ M"],
answer: "1.0 x 10⁻³ M",
explanation: "By mathematical definition, pH = -log₁₀[H⁺]. Therefore, [H⁺] = 10^(-pH) = 10⁻³ = 1.0 x 10⁻³ M."
},
{
id: 20, subject: "Chemistry", topic: "Acids, Bases & Salts", year: 1996, exam: "JAMB",
question: "An example of a normal salt formed by complete replacement of the replaceable hydrogen atoms of an acid is",
options: ["NaHSO₄", "KHCO₃", "Na₂CO₃", "Mg(OH)Cl"],
answer: "Na₂CO₃",
explanation: "Na₂CO₃ (sodium carbonate) is a normal salt because all acidic hydrogen atoms from the parent acid (H₂CO₃) have been completely replaced by sodium ions. NaHSO₄ and KHCO₃ are acid salts, while Mg(OH)Cl is a basic salt."
},
{
id: 21, subject: "Chemistry", topic: "Stoichiometry & Titration", year: 1996, exam: "JAMB",
question: "What volume of 0.2 M HCl acid solution is required to completely neutralize 25 cm³ of 0.1 M NaOH solution?",
options: ["12.5 cm³", "25.0 cm³", "50.0 cm³", "100.0 cm³"],
answer: "12.5 cm³",
explanation: "Reaction: HCl + NaOH -> NaCl + H₂O (1:1 mole ratio). Using M_acid × V_acid = M_base × V_base: 0.2 × V_acid = 0.1 × 25 -> V_acid = 2.5 / 0.2 = 12.5 cm³."
},
{
id: 22, subject: "Chemistry", topic: "Electrochemistry", year: 1996, exam: "JAMB",
question: "During the electrolysis of molten sodium chloride, the product formed at the anode is",
options: ["sodium metal", "hydrogen gas", "chlorine gas", "oxygen gas"],
answer: "chlorine gas",
explanation: "At the positive anode, negative chloride ions (Cl⁻) lose electrons (undergo oxidation) to form neutral chlorine gas molecules: 2Cl⁻ -> Cl₂ + 2e⁻."
},
{
id: 23, subject: "Chemistry", topic: "Electrochemistry", year: 1996, exam: "JAMB",
question: "The quantity of electricity required to deposit one mole of a univalent metal ion (such as Ag⁺) at the cathode is equal to",
options: ["0.5 Faraday", "1.0 Faraday", "2.0 Faradays", "3.0 Faradays"],
answer: "1.0 Faraday",
explanation: "A univalent cation requires exactly 1 electron per ion to reduce into a neutral metal atom (Ag⁺ + e⁻ -> Ag). Depositing 1 mole of these atoms requires 1 mole of electrons, which is equal to 1.0 Faraday (96,500 C)."
},
{
id: 24, subject: "Chemistry", topic: "Redox Reactions", year: 1996, exam: "JAMB",
question: "In the single displacement reaction: Zn(s) + CuSO₄(aq) -> ZnSO₄(aq) + Cu(s), zinc has been",
options: ["oxidized", "reduced", "precipitated", "decomposed"],
answer: "oxidized",
explanation: "Zinc changes its oxidation state from 0 as a free solid metal to +2 inside zinc sulphate (Zn²⁺), which means it has lost electrons and undergone oxidation."
},
{
id: 25, subject: "Chemistry", topic: "Oxidation Numbers", year: 1996, exam: "JAMB",
question: "What is the oxidation number of manganese inside the potassium permanganate (KMnO₄) molecule?",
options: ["+2", "+4", "+6", "+7"],
answer: "+7",
explanation: "In KMnO₄: K = +1, O = -2 (×4 = -8). Setting up the neutral compound balance: +1 + Mn + (-8) = 0 -> Mn - 7 = 0 -> Mn = +7."
},
{
id: 26, subject: "Chemistry", topic: "Chemical Energetics", year: 1996, exam: "JAMB",
question: "A chemical reaction that absorbs heat energy from its surroundings is described as",
options: ["exothermic", "endothermic", "spontaneous", "isothermal"],
answer: "endothermic",
explanation: "Endothermic reactions absorb thermal energy from their surroundings, which results in a positive change in enthalpy (+ΔH) and causes local temperatures to drop."
},
{
id: 27, subject: "Chemistry", topic: "Chemical Kinetics", year: 1996, exam: "JAMB",
question: "A catalyst increases the speed of a chemical reaction by",
options: [
"increasing the kinetic energy of the reacting molecules",
"increasing the number of molecular collisions",
"providing an alternative pathway with a lower activation energy",
"shifting the equilibrium position towards the products"
],
answer: "providing an alternative pathway with a lower activation energy",
explanation: "A catalyst speeds up a reaction by providing an alternative reaction pathway that has a lower activation energy barrier, allowing more reactant molecules to collide successfully per unit time."
},
{
id: 28, subject: "Chemistry", topic: "Chemical Equilibrium", year: 1996, exam: "JAMB",
question: "According to Le Chatelier's principle, if an equilibrium system is subjected to an increase in temperature, the reaction will shift to favor the",
options: ["exothermic reaction path", "endothermic reaction path", "side with more gas moles", "side with fewer gas moles"],
answer: "endothermic reaction path",
explanation: "Increasing temperature adds heat energy to the system. According to Le Chatelier's principle, the system shifts in the direction that absorbs this added heat, favoring the endothermic reaction path."
},
{
id: 29, subject: "Chemistry", topic: "Gases & Non-Metals", year: 1996, exam: "JAMB",
question: "Which of the following gases is highly soluble inside water under standard conditions?",
options: ["Oxygen", "Nitrogen", "Ammonia", "Hydrogen"],
answer: "Ammonia",
explanation: "Ammonia (NH₃) is an asymmetrical molecule that can form strong hydrogen bonds with water molecules, making it exceptionally soluble in water compared to symmetrical gases like O₂, N₂, and H₂."
},
{
id: 30, subject: "Chemistry", topic: "Gases & Non-Metals", year: 1996, exam: "JAMB",
question: "Carbon(II) oxide gas is highly dangerous and toxic to humans because it",
options: [
"is strongly acidic and burns lung tissues",
"binds strongly to hemoglobin, blocking oxygen transport",
"triggers rapid atmospheric ozone depletion loops",
"decomposes into solid soot inside windpipes"
],
answer: "binds strongly to hemoglobin, blocking oxygen transport",
explanation: "Carbon monoxide (CO) binds to hemoglobin to form carboxyhemoglobin. This bond is over 200 times stronger than oxygen's bond with hemoglobin, preventing blood from transporting oxygen and leading to cellular suffocation."
},
{
id: 31, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1996, exam: "JAMB",
question: "The chemical gas released when dilute hydrochloric acid reacts with calcium carbonate solid is",
options: ["hydrogen gas", "chlorine gas", "carbon(IV) oxide", "carbon(II) oxide"],
answer: "carbon(IV) oxide",
explanation: "Acids decompose metal carbonates to form a salt, water, and release carbon(IV) oxide (CO₂) gas with visible effervescence."
},
{
id: 32, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1996, exam: "JAMB",
question: "The acid anhydride corresponding to tetraoxosulphate(VI) acid is",
options: ["sulphur(IV) oxide", "sulphur(VI) oxide", "hydrogen sulphide", "peroxodisulphate oxide"],
answer: "sulphur(VI) oxide",
explanation: "An acid anhydride is an oxide that forms an acid when dissolved in water. Sulphur(VI) oxide (SO₃) reacts directly with water to produce tetraoxosulphate(VI) acid (H₂SO₄): SO₃ + H₂O -> H₂SO₄."
},
{
id: 33, subject: "Chemistry", topic: "Qualitative Analysis", year: 1996, exam: "JAMB",
question: "A chemical gas stream passed into an acidified solution of potassium heptaoxodichromate(VI) turns the solution from orange to green. The gas is identified as",
options: ["oxygen", "carbon(IV) oxide", "sulphur(IV) oxide", "nitrogen(IV) oxide"],
answer: "sulphur(IV) oxide",
explanation: "Sulphur(IV) oxide (SO₂) acts as a reducing agent, reducing orange dichromate ions (Cr₂O₇²⁻, Cr⁺⁶) to green chromium ions (Cr³⁺), changing the color of the solution to green."
},
{
id: 34, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1996, exam: "JAMB",
question: "Aluminium oxide is classified as an amphoteric oxide because it",
options: [
"does not dissolve in water solvents",
"reacts with both acids and strong bases to form salts and water",
"displays multiple stable structural allotropes",
"undergoes spontaneous radioactive decay paths"
],
answer: "reacts with both acids and strong bases to form salts and water",
explanation: "Amphoteric oxides (like Al₂O₃ and ZnO) exhibit both basic and acidic properties, allowing them to dissolve in and react with both strong acids and strong alkalis to form salts and water."
},
{
id: 35, subject: "Chemistry", topic: "Applied Chemistry", year: 1996, exam: "JAMB",
question: "The major ore from which aluminium metal is extracted commercially on a large scale is",
options: ["haematite", "bauxite", "cassiterite", "galena"],
answer: "bauxite",
explanation: "Bauxite is the primary sedimentary mineral ore used worldwide to extract aluminium oxide (alumina), which is then electrolyzed via the Hall-Héroult process to produce pure aluminium."
},
{
id: 36, subject: "Chemistry", topic: "Applied Chemistry", year: 1996, exam: "JAMB",
question: "Brass is an alloy containing copper and",
options: ["tin", "zinc", "nickel", "lead"],
answer: "zinc",
explanation: "Brass is a solid solution alloy composed primarily of copper combined with zinc. Bronze is made of copper and tin."
},
{
id: 37, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1996, exam: "JAMB",
question: "The chemical compound responsible for the white milky appearance formed when CO₂ gas is bubbled briefly through lime water is",
options: ["calcium hydroxide", "calcium oxide", "calcium trioxocarbonate(IV)", "calcium hydrogentrioxocarbonate(IV)"],
answer: "calcium trioxocarbonate(IV)",
explanation: "Bubbling CO₂ through lime water [Ca(OH)₂] triggers a precipitation reaction that forms insoluble calcium carbonate (CaCO₃), which appears as a white suspended precipitate that turns the solution milky."
},
{
id: 38, subject: "Chemistry", topic: "Periodic Table", year: 1996, exam: "JAMB",
question: "Transition metals possess special properties, such as variable oxidation states and the formation of colored complexes, because they contain",
options: ["partially filled d-orbitals", "partially filled s-orbitals", "completely filled p-subshells", "mobile valence electrons in f-orbitals"],
answer: "partially filled d-orbitals",
explanation: "The unique chemical properties of transition metals—including catalytic activity, variable oxidation states, and colored compounds—are due to the presence of partially filled d-subshell electron orbitals."
},
{
id: 39, subject: "Chemistry", topic: "Organic Chemistry", year: 1996, exam: "JAMB",
question: "The carbon atoms inside a molecule of ethyne (acetylene) are structurally",
options: ["sp³ hybridized", "sp² hybridized", "sp hybridized", "not hybridized"],
answer: "sp hybridized",
explanation: "Ethyne (C₂H₂) contains a carbon-carbon triple bond composed of one sigma bond and two pi bonds, creating a linear geometry that corresponds to sp orbital hybridization."
},
{
id: 40, subject: "Chemistry", topic: "Organic Chemistry", year: 1996, exam: "JAMB",
question: "The general formula representing the homologous series of alkanes is",
options: ["CₙH₂ₙ", "CₙH₂ₙ₋₂", "CₙH₂ₙ₊₁", "CₙH₂ₙ₊₂"],
answer: "CₙH₂ₙ₊₂",
explanation: "Alkanes are saturated open-chain hydrocarbons characterized by single covalent carbon-carbon bonds, matching the general molecular formula CₙH₂ₙ₊₂."
},
{
id: 41, subject: "Chemistry", topic: "Organic Chemistry", year: 1996, exam: "JAMB",
question: "Organic compounds that share the identical molecular formula but feature different structural arrangements are known as",
options: ["allotropes", "isotopes", "isomers", "homologues"],
answer: "isomers",
explanation: "Isomers are chemical compounds that have the exact same molecular formula (identical number and types of atoms) but differ in their structural layout or spatial orientation."
},
{
id: 42, subject: "Chemistry", topic: "Organic Chemistry", year: 1996, exam: "JAMB",
question: "The specific chemical test reaction used to confirm the presence of terminal unsaturation (C≡C-H triple bonds) uses",
options: ["bromine water", "acidified KMnO₄ solution", "ammoniacal copper(I) chloride solution", "Fehling's reagent"],
answer: "ammoniacal copper(I) chloride solution",
explanation: "Terminal alkynes contain an acidic hydrogen atom on the triple-bonded carbon. This hydrogen reacts with an ammoniacal solution of copper(I) chloride to form a characteristic reddish-brown copper acetylide precipitate."
},
{
id: 43, subject: "Chemistry", topic: "Organic Chemistry", year: 1996, exam: "JAMB",
question: "What organic product is formed when ethanol is oxidized completely using an excess of acidified potassium heptaoxodichromate(VI) solution?",
options: ["ethanal", "ethanoic acid", "ethene", "ethyl ethanoate"],
answer: "ethanoic acid",
explanation: "Oxidizing a primary alcohol like ethanol first forms ethanal (an aldehyde). Continued oxidation under reflux conditions with an excess oxidizing agent completes the process, converting it into ethanoic acid."
},
{
id: 44, subject: "Chemistry", topic: "Organic Chemistry", year: 1996, exam: "JAMB",
question: "The reaction between an organic acid and an alkanol in the presence of an acid catalyst to produce a sweet-smelling compound is known as",
options: ["saponification", "esterification", "hydrolysis", "dehydration"],
answer: "esterification",
explanation: "Esterification is the condensation reaction between a carboxylic acid and an alcohol (alkanol), which eliminates a water molecule to produce a sweet, fruity-smelling ester."
},
{
id: 45, subject: "Chemistry", topic: "Applied Chemistry", year: 1996, exam: "JAMB",
question: "The chemical reaction process by which soap is manufactured from the alkaline hydrolysis of fats and oils is called",
options: ["neutralization", "esterification", "saponification", "polymerization"],
answer: "saponification",
explanation: "Saponification is the base-catalyzed hydrolysis of triglycerides (fats or oils) using a strong alkali (like NaOH or KOH) to yield glycerol and metallic salts of fatty acids (soap)."
},
{
id: 46, subject: "Chemistry", topic: "Organic Chemistry", year: 1996, exam: "JAMB",
question: "The functional group characterizing the family of alkanals (aldehydes) is",
options: ["-OH", "-CHO", "-COOH", "-CO-"],
answer: "-CHO",
explanation: "Alkanals (aldehydes) are organic compounds characterized by containing a terminal carbonyl group bonded to a hydrogen atom, written structurally as –CHO."
},
{
id: 47, subject: "Chemistry", topic: "Organic Chemistry", year: 1996, exam: "JAMB",
question: "Which of the following organic compounds will react with bromine water via an addition reaction to readily discharge its reddish-brown color?",
options: ["Methane", "Ethane", "Ethene", "Benzene"],
answer: "Ethene",
explanation: "Ethene is an unsaturated alkene containing a double bond. It undergoes a rapid halogen addition reaction with bromine water, adding bromine atoms across the double bond and decolorizing the solution."
},
{
id: 48, subject: "Chemistry", topic: "Applied Chemistry", year: 1996, exam: "JAMB",
question: "Natural rubber is a polymer made up of repeating monomer units of",
options: ["ethene", "chloroethene", "isoprene / 2-methylbuta-1,3-diene", "styrene"],
answer: "isoprene / 2-methylbuta-1,3-diene",
explanation: "Natural rubber (polyisoprene) is an addition polymer formed by long chains of repeating 2-methylbuta-1,3-diene (isoprene) monomer units."
},
{
id: 49, subject: "Chemistry", topic: "Organic Chemistry", year: 1996, exam: "JAMB",
question: "The relatively high boiling points and water solubilities of lower molecular mass alkanols are due to",
options: ["ionic character", "covalent network shielding", "intermolecular hydrogen bonding", "weak van der waals attractions"],
answer: "intermolecular hydrogen bonding",
explanation: "Alkanols contain highly polar hydroxyl groups (–OH). These groups form strong intermolecular hydrogen bonds with each other (raising boiling points) and with water molecules (increasing solubility)."
},
{
id: 50, subject: "Chemistry", topic: "Organic Chemistry", year: 1996, exam: "JAMB",
question: "The conversion of glucose into ethanol and carbon(IV) oxide by the action of enzymes present in yeast is a process known as",
options: ["distillation", "fermentation", "hydrolysis", "cracking"],
answer: "fermentation",
explanation: "Fermentation is the enzymatic, anaerobic breakdown of carbohydrates (like glucose) by microorganisms like yeast into simpler products, primarily ethanol and carbon(IV) oxide gas."
}
];
export default chemJamb1996;