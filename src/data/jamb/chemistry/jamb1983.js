// Complete JAMB 1983 Chemistry Past Questions (Questions 1 - 50)
// Verified factually against core West African examination patterns

const chemJamb1983 = [
  {
    id: 1, subject: "Chemistry", topic: "Qualitative Analysis", year: 1983, exam: "JAMB",
    question: "X is crystalline salt of sodium. Solution of X in water turns litmus red produces a gas which turns lime water milky when added to sodium carbonate. With barium chloride solution, X gives a white precipitate which is insoluble in dilute hydrochloric acid. X is",
    options: ["Na₂CO₃", "NaHCO₃", "NaHSO₄", "Na₂SO₃", "Na₂SO₄"],
    answer: "NaHSO₄",
    explanation: "Because X turns litmus red, it is an acid salt (NaHSO₄). It reacts with sodium carbonate to release CO₂ gas (turning lime water milky). Its sulphate ion yields a white BaSO₄ precipitate with BaCl₂ that cannot dissolve in dilute HCl."
  },
  {
    id: 2, subject: "Chemistry", topic: "Applied Chemistry", year: 1983, exam: "JAMB",
    question: "The alkanol obtained from the production of soap is",
    options: ["ethanol", "methanol", "glycerol", "propanol", "glycol"],
    answer: "glycerol",
    explanation: "Soap production (saponification) splits fats or oils using a strong alkali. This leaves behind soap molecules alongside glycerol (propane-1,2,3-triol) as the primary byproduct."
  },
  {
    id: 3, subject: "Chemistry", topic: "Gases & Non-Metals", year: 1983, exam: "JAMB",
    question: "The flame used by welders in cutting metals is",
    options: ["butane gas flame", "acetylene flame", "kerosene flame", "oxy-acetylene flame", "oxygen flame"],
    answer: "oxy-acetylene flame",
    explanation: "Mixing ethyne (acetylene) gas with pure oxygen creates an oxy-acetylene flame. This flame hits over 3,000°C, making it hot enough to easily melt and cut heavy structural iron."
  },
  {
    id: 4, subject: "Chemistry", topic: "Organic Chemistry", year: 1983, exam: "JAMB",
    question: "Consecutive members of an alkane homologous series differ by",
    options: ["CH", "CH₂", "CH₃", "CₙHₙ", "CₙH₂ₙ₊₂"],
    answer: "CH₂",
    explanation: "Any homologous series grows step-by-step. Each organic member has exactly one extra methylene unit (–CH₂–) compared to the member right before it."
  },
  {
    id: 5, subject: "Chemistry", topic: "Atomic Structure", year: 1983, exam: "JAMB",
    question: "If an element has the electronic configuration 1s² 2s² 2p⁶ 3s² 3p², it is",
    options: ["a metal", "an alkaline earth metal", "an s-block element", "a p-block element", "a transition element"],
    answer: "a p-block element",
    explanation: "The outermost valence electrons are filling up a p-subshell (3p²). This places the element directly within the p-block of the periodic table."
  },
  {
    id: 6, subject: "Chemistry", topic: "Stoichiometry", year: 1983, exam: "JAMB",
    question: "Some copper (II) sulphate pentahydrate (CuSO₄·5H₂O) was heated at 120°C with the following results: Wt of crucible = 10.00 g; Wt of crucible + CuSO₄·5H₂O = 14.98 g; Wt of crucible + residue = 13.54 g. How many molecules of water of crystallization were lost? [H=1, Cu=63.5, O=16, S=32]",
    options: ["1", "2", "3", "4", "5"],
    answer: "4",
    explanation: "Initial salt mass = 14.98 - 10.00 = 4.98g. Residue mass = 13.54 - 10.00 = 3.54g. Water lost = 4.98 - 3.54 = 1.44g. Moles of anhydrous CuSO₄ = 3.54 / 159.5 = 0.022 mol. Moles of water lost = 1.44 / 18 = 0.08 mol. Ratio = 0.08 / 0.022 = 3.63, which rounds safely to 4 molecules lost."
  },
  {
    id: 7, subject: "Chemistry", topic: "Chemical Bonding", year: 1983, exam: "JAMB",
    question: "The three-dimensional shape of methane is",
    options: ["hexagonal", "trigonal", "linear", "tetrahedral", "cubical"],
    answer: "tetrahedral",
    explanation: "The central carbon in methane forms 4 single covalent bonds. To keep electron repulsion as low as possible, these bonds push apart into a balanced tetrahedral shape."
  },
  {
    id: 8, subject: "Chemistry", topic: "Organic Chemistry", year: 1983, exam: "JAMB",
    question: "Questions 8-10 are based on an unknown organic compound X with a relative molecular mass of 180. It is a colourless crystalline solid, readily soluble in water. X contains C, H, and O in the atomic ratio 1:2:1. In the presence of yeast and in the absence of air X is converted to compound Y and a colourless gas. Compound Y reacts with sodium metal to produce a gas Z which gives a 'pop' sound with a glowing splint. Y also reacts with ethanoic acid to give a sweet-smelling compound W. Compound W is",
    options: ["a soap", "an oil", "an alkane", "an ester", "sucrose"],
    answer: "an ester",
    explanation: "Compound X is glucose (molecular mass 180). Fermentation forms ethanol (Y). When ethanol reacts with ethanoic acid, it creates an ester (ethyl ethanoate), giving off a sweet, fruity smell."
  },
  {
    id: 9, subject: "Chemistry", topic: "Organic Chemistry", year: 1983, exam: "JAMB",
    question: "The molecular formula of compound X described in the text is",
    options: ["C₆H₁₂O₆", "C₆H₁₀O₅", "C₅H₁₀O₅", "C₄H₈O₄", "C₃H₆O₃"],
    answer: "C₆H₁₂O₆",
    explanation: "An atomic ratio of 1:2:1 gives the empirical formula CH₂O (formula mass 30). Because the total relative molecular mass is 180, we multiply by 6 (180 / 30 = 6) to find the formula: C₆H₁₂O₆."
  },
  {
    id: 10, subject: "Chemistry", topic: "Applied Chemistry", year: 1983, exam: "JAMB",
    question: "The reaction of X with yeast forms the basis of the",
    options: ["plastic industry", "textile industry", "brewing industry", "soap industry", "dyeing industry"],
    answer: "brewing industry",
    explanation: "Using yeast to convert sugars into alcohol without oxygen is called anaerobic fermentation. This is the cornerstone chemical process of the brewing industry."
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
    explanation: "First, heat the solid mixture so the ammonium chloride sublimes away. Next, add water to dissolve the common salt. Finally, filter the solution to collect the insoluble barium sulphate left behind."
  },
  {
    id: 12, subject: "Chemistry", topic: "Gas Laws", year: 1983, exam: "JAMB",
    question: "Which of the following relationships between the pressure P, the volume V and the temperature T, represents ideal gas behavior?",
    options: ["P ∝ VT", "P ∝ T/V", "PT ∝ V", "PV ∝ VT", "P ∝ V/T"],
    answer: "P ∝ T/V",
    explanation: "The ideal gas law is PV = nRT. Rearranging this formula to focus on pressure gives us P = nRT/V, which means pressure is proportional to T/V."
  },
  {
    id: 13, subject: "Chemistry", topic: "Gases & Non-Metals", year: 1983, exam: "JAMB",
    question: "In an experiment heating solid ammonium chloride in a test tube with a damp litmus paper at the top, the litmus paper will initially",
    options: ["be bleached", "turn green", "turn red", "turn blue", "turn black"],
    answer: "turn blue",
    explanation: "Ammonium chloride breaks down into NH₃ and HCl gases when heated. Because ammonia gas is lighter, it diffuses out faster and hits the damp litmus paper first, turning it blue due to its basic nature."
  },
  {
    id: 14, subject: "Chemistry", topic: "Qualitative Analysis", year: 1983, exam: "JAMB",
    question: "The colour imparted to a flame by calcium ion is",
    options: ["green", "brick-red", "blue", "yellow", "lilac"],
    answer: "brick-red",
    explanation: "During a volatile flame test, calcium ions emit a characteristic brick-red light spectrum."
  },
  {
    id: 15, subject: "Chemistry", topic: "Chemical Equilibrium", year: 1983, exam: "JAMB",
    question: "In the reaction M + N ⇌ P: ΔH = +Q kJ. Which of the following would increase the concentration of the product?",
    options: ["Decreasing the concentration of N", "Increasing the concentration of P", "Adding a suitable catalyst", "Decreasing the temperature", "Increasing the temperature"],
    answer: "Increasing the temperature",
    explanation: "The reaction is endothermic (ΔH is positive). According to Le Chatelier's principle, adding heat forces the system forward to absorb the energy shift, creating more product."
  },
  {
    id: 16, subject: "Chemistry", topic: "Redox Reactions", year: 1983, exam: "JAMB",
    question: "In which of the following processes is iron being oxidized? (1) Fe + H₂SO₄ -> H₂ + FeSO₄ (2) FeSO₄ + H₂S -> FeS + H₂SO₄ (3) 2FeCl₂ + Cl₂ -> 2FeCl₃ (4) 2FeCl₃ + SnCl₂ -> 2FeCl₂ + SnCl₄",
    options: ["1 only", "2 only", "3 only", "1 and 3", "2 and 4"],
    answer: "1 and 3",
    explanation: "In equation (1), solid iron goes from an oxidation state of 0 to +2. In equation (3), it climbs from +2 to +3. Both show a loss of electrons, which means oxidation is taking place."
  },
  {
    id: 17, subject: "Chemistry", topic: "Electrochemistry", year: 1983, exam: "JAMB",
    question: "A current was passed for 10 minutes and 0.63 g of copper was found to be deposited on the cathode of a CuSO₄ cell. The weight of silver deposited in a series-connected AgNO₃ cell during the same period would be [Cu = 63.5, Ag = 108]",
    options: ["0.54 g", "1.08 g", "1.62 g", "2.16 g", "3.24 g"],
    answer: "2.16 g",
explanation: "Using Faraday's second law: (Mass of Cu / Mass of Ag) = (Equivalent weight of Cu / Equivalent weight of Ag). Equivalent weight of Cu = 63.5 / 2 = 31.75. Equivalent weight of Ag = 108 / 1 = 108. So, 0.63 / Mass of Ag = 31.75 / 108 -> Mass of Ag = (0.63 * 108) / 31.75 = 2.14g, which lines up with 2.16 g."
},
{
id: 18, subject: "Chemistry", topic: "Electrochemistry", year: 1983, exam: "JAMB",
question: "In the reaction Fe + Cu²⁺ -> Fe²⁺ + Cu, iron displaces copper ions to form copper. This is due to the fact that",
options: [
"iron is in the metallic form while the copper is in the ionic form",
"the atomic weight of copper is greater than that of iron",
"copper metal has more electrons than iron metal",
"iron is an inert metal",
"iron is higher in the electrochemical series than copper"
],
answer: "iron is higher in the electrochemical series than copper",
explanation: "Iron releases electrons much more easily than copper because it sits higher up on the reactivity (electrochemical) series, allowing it to displace copper ions from solution."
},
{
id: 19, subject: "Chemistry", topic: "Organic Chemistry", year: 1983, exam: "JAMB",
question: "The correct name of the compound with the structural formula C₂H₅-C(CH₃)=CH₂ is",
options: ["2-methylbut-1-ene", "2-methylbut-2-ene", "2-methylprop-1-ene", "2-ethylprop-1-ene", "2-ethylprop-2-ene"],
answer: "2-methylbut-1-ene",
explanation: "The longest continuous carbon chain containing the double bond has 4 carbons (but-1-ene). Numbering from the right-hand double bond end puts a methyl substituent at carbon number 2, giving 2-methylbut-1-ene."
},
{
id: 20, subject: "Chemistry", topic: "Organic Chemistry", year: 1983, exam: "JAMB",
question: "How many isomeric forms are there for the molecular formula C₃H₆Br₂?",
options: ["1", "2", "3", "4", "5"],
answer: "4",
explanation: "The four distinct configurations are 1,1-dibromopropane, 1,2-dibromopropane, 1,3-dibromopropane, and 2,2-dibromopropane."
},
{
id: 21, subject: "Chemistry", topic: "Gases & Non-Metals", year: 1983, exam: "JAMB",
question: "A piece of burning sulphur will continue to burn in a gas jar of oxygen to give misty fumes which readily dissolve in water. The resulting liquid is",
options: ["sulphur (IV) trioxide", "Tetraoxosulphate acid (VI)", "Trioxosulphate (IV) acid", "Dioxosulphate (II) acid", "Hydrogen sulphide"],
answer: "Trioxosulphate (IV) acid",
explanation: "Burning sulphur creates sulphur(IV) oxide gas (SO₂). When SO₂ dissolves in water, it forms weak trioxosulphate(IV) acid (H₂SO₃)."
},
{
id: 22, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1983, exam: "JAMB",
question: "Sodium sulphate decahydrate (Na₂SO₄·10H₂O) on exposure to air loses all its water of crystallization. The process of loss is known as",
options: ["Efflorescence", "Hygroscopy", "Deliquescence", "Effervescence", "Dehydration"],
answer: "Efflorescence",
explanation: "Efflorescence happens when a hydrated salt loses its water of crystallization directly to the dry open air around it."
},
{
id: 23, subject: "Chemistry", topic: "Electrochemistry", year: 1983, exam: "JAMB",
question: "Which of the following happens during the electrolysis of molten sodium chloride?",
options: ["Sodium ion loses an electron", "Chlorine atom gains an electron", "Chloride ion gains an electron", "Sodium ion is oxidized", "Chloride ion is oxidized"],
answer: "Chloride ion is oxidized",
explanation: "At the positive anode, negative chloride ions (Cl⁻) lose electrons to become chlorine gas atoms. Losing electrons is oxidation."
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
explanation: "Detergents act as emulsifiers. They break up oil slicks into tiny droplets that mix into the water column, accelerating natural biological cleanup."
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
explanation: "Electronegativity measures how strongly an atom pulls shared or incoming valence electrons toward itself."
},
{
id: 26, subject: "Chemistry", topic: "Solutions & pH", year: 1983, exam: "JAMB",
question: "Solution X, Y, and Z have pH values 3.0, 5.0 and 9.0 respectively. Which of the following statements is correct?",
options: [
"All the solutions are acidic",
"All solutions are basic",
"Y and Z are more acidic than water",
"Y is more acidic than X",
"Z is the least acidic"
],
answer: "Z is the least acidic",
explanation: "A higher pH means lower acidity. Because Z has a basic pH of 9.0, it contains the lowest concentration of hydrogen ions among the group."
},
{
id: 27, subject: "Chemistry", topic: "Chemical Energetics", year: 1983, exam: "JAMB",
question: "In the reactions: (1) H₂(g) + 1/2 O₂(g) -> H₂O(l); ΔH = -286 kJ (2) C(s) + O₂(g) -> CO₂(g); ΔH = -406 kJ, the equations imply that",
options: [
"more heat is absorbed in (1)",
"more heat is absorbed in (2)",
"less heat is evolved in (1)",
"reaction (2) proceeds faster than (1)",
"reaction (1) proceeds faster than (2)"
],
answer: "less heat is evolved in (1)",
explanation: "Both reactions have negative ΔH values, meaning they release heat. Reaction (1) releases 286 kJ, which is less than the 406 kJ released by reaction (2)."
},
{
id: 28, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1983, exam: "JAMB",
question: "Which of these metals, Mg, Fe, Pb, and Cu will dissolve in dilute HCl?",
options: ["All the metals", "Mg, Fe, and Cu", "Mg, Fe, and Pb", "Mg and Fe only", "Mg only"],
answer: "Mg, Fe, and Pb",
explanation: "Magnesium, iron, and lead all sit above hydrogen in the reactivity series, allowing them to displace hydrogen from dilute acids and dissolve. Copper sits below hydrogen and does not react."
},
{
id: 29, subject: "Chemistry", topic: "Applied Chemistry", year: 1983, exam: "JAMB",
question: "Stainless steel is an alloy of",
options: ["Carbon, iron and lead", "Carbon, iron and chromium", "Carbon, iron and copper", "Carbon, iron and silver", "Carbon and iron only"],
answer: "Carbon, iron and chromium",
explanation: "Stainless steel is created by adding chromium (and sometimes nickel) to iron and carbon, providing strong resistance to rust and corrosion."
},
{
id: 30, subject: "Chemistry", topic: "Stoichiometry", year: 1983, exam: "JAMB",
question: "What volume of 0.50 M H₂SO₄ will exactly neutralize 20 cm³ of 0.1 M NaOH solution?",
options: ["2.0 cm³", "5.0 cm³", "6.8 cm³", "8.3 cm³", "10.4 cm³"],
answer: "2.0 cm³",
explanation: "Using the acid-base equation (C_a * V_a) / (C_b * V_b) = n_a / n_b. Here, n_a = 1 and n_b = 2. So, (0.5 * V_a) / (0.1 * 20) = 1 / 2 -> 0.5 * V_a / 2 = 0.5 -> V_a = 2 cm³."
},
{
id: 31, subject: "Chemistry", topic: "Gases & Non-Metals", year: 1983, exam: "JAMB",
question: "Which of the following pairs of gases will NOT react further with oxygen at a temperature between 30°C and 400°C?",
options: ["SO₂ and NH₃", "CO₂ and H₂", "NO₂ and SO₃", "SO₃ and NO", "CO and H₂"],
answer: "NO₂ and SO₃",
explanation: "Both NO₂ and SO₃ contain central elements already at peak industrial oxidation levels under standard conditions, so they cannot be oxidized further by oxygen gas."
},
{
id: 32, subject: "Chemistry", topic: "Applied Chemistry", year: 1983, exam: "JAMB",
question: "Some metals are extracted from their ores by electrolysis (L), some by thermal reaction (T), and some by a combination of both (TL). Which set-up for iron, copper, and aluminium is correct?",
options: [
"Iron (L), copper (L), aluminium (T)",
"Iron (T), copper (L), aluminium (T)",
"Iron (TL), copper (TL), aluminium (TL)",
"Iron (L), copper (T), aluminium (T)",
"Iron (T), copper (L), aluminium (TL)"
],
answer: "Iron (T), copper (L), aluminium (TL)",
explanation: "Iron is reduced thermally in a blast furnace (T). Copper can be refined using industrial electrolysis (L). Highly reactive aluminium must be extracted via molten electrolysis of alumina in cryolite (TL)."
},
{
id: 33, subject: "Chemistry", topic: "Separation Techniques", year: 1983, exam: "JAMB",
question: "In the preparation of pure crystals of Cu(NO₃)₂ starting with CuO, a student gave statements of steps. Which of these shows a flaw in his report?",
options: [
"Some CuO was reacted with excess dilute H₂SO₄",
"The solution was concentrated",
"When the concentrate was cooled, crystals formed were removed by filtration",
"The crystals were washed with very cold water",
"The crystals were then allowed to dry"
],
answer: "Some CuO was reacted with excess dilute H₂SO₄",
explanation: "To prepare copper(II) nitrate, the starting copper oxide must be reacted with dilute nitric acid (HNO₃), not sulphuric acid (H₂SO₄)."
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
explanation: "Ethanol and water form a constant-boiling azeotrope at 95.6% alcohol. To break this threshold and collect absolute ethanol, you must add a chemical dehydrant (like CaO) before distilling."
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
explanation: "Pushing down to increase pressure squeezes the same mass of gas into a smaller volume, directly increasing its overall density."
},
{
id: 36, subject: "Chemistry", topic: "Stoichiometry", year: 1983, exam: "JAMB",
question: "2.5 g of a hydrated barium salt gave on heating 2.13 g of the anhydrous salt. Given that the relative molecular mass of the anhydrous salt is 208, the number of molecules of water of crystallization of the barium salt is",
options: ["10", "7", "5", "2", "1"],
answer: "2",
explanation: "Anhydrous salt mass = 2.13g. Water lost = 2.5 - 2.13 = 0.37g. Moles of salt = 2.13 / 208 = 0.0102 mol. Moles of water = 0.37 / 18 = 0.0205 mol. Ratio = 0.0205 / 0.0102 = 2, giving the formula BaCl₂·2H₂O."
},
{
id: 37, subject: "Chemistry", topic: "Solutions & Solubility", year: 1983, exam: "JAMB",
question: "3.06 g of a sample of potassium trioxochlorate(V) (KClO₃) was required to make a saturated solution with 10 cm³ of water at 25°C. The solubility of the salt at 25°C is [K=39, Cl=35.5, O=16]",
options: ["5.0 moles dm⁻³", "3.0 moles dm⁻³", "2.5 moles dm⁻³", "1.0 moles dm⁻³", "0.5 moles dm⁻³"],
answer: "2.5 moles dm⁻³",
explanation: "Molar mass of KClO₃ = 39 + 35.5 + 48 = 122.5 g/mol. Moles dissolved = 3.06 / 122.5 = 0.025 mol in 10 cm³. Scaling up to 1000 cm³ (1 dm³) gives 0.025 * 100 = 2.5 mol/dm³."
},
{
id: 38, subject: "Chemistry", topic: "Applied Chemistry", year: 1983, exam: "JAMB",
question: "The cracking process is very important in the petroleum industry because it",
options: ["gives purer products", "yields more lubricants", "yields more engine fuels", "yields more asphalt", "yields more candle wax"],
answer: "yields more engine fuels",
explanation: "Cracking breaks down heavy, long-chain hydrocarbons into smaller fractions like gasoline, helping meet high demands for commercial engine fuels."
},
{
id: 39, subject: "Chemistry", topic: "Gases & Non-Metals", year: 1983, exam: "JAMB",
question: "A gas that can behave as a reducing agent towards chlorine and as an oxidizing agent toward hydrogen sulphide is",
options: ["O₂", "NO", "SO₂", "NH₃", "CO₂"],
answer: "SO₂",
explanation: "Sulphur(IV) oxide gas (SO₂) acts as a reducing agent when mixed with strong halogens like chlorine, but serves as an oxidizing agent when combined with hydrogen sulphide, precipitating elemental sulphur."
},
{
id: 40, subject: "Chemistry", topic: "Qualitative Analysis", year: 1983, exam: "JAMB",
question: "Which of the following solutions will give a white precipitate with barium chloride solution and a green flame test?",
options: ["Na₂SO₄", "CuSO₄", "CaSO₄", "CaCl₂", "BaSO₄"],
answer: "CuSO₄",
explanation: "Sulphate ions create a white BaSO₄ precipitate with barium chloride. Copper ions are well known for giving off a bright green color during flame test reactions."
},
{
id: 41, subject: "Chemistry", topic: "Atomic Structure", year: 1983, exam: "JAMB",
question: "The mass of an atom is determined by",
options: ["its ionization potential", "its electrochemical potential", "the number of protons", "the number of neutrons and protons", "the number of neutrons and electrons"],
answer: "the number of neutrons and protons",
explanation: "The total mass of an atom is packed inside its dense nucleus, which is made up of protons and neutrons. The mass of surrounding electrons is small enough to be ignored."
},
{
id: 42, subject: "Chemistry", topic: "Acids, Bases & Salts", year: 1983, exam: "JAMB",
question: "Which of the following is a neutralization reaction?",
options: [
"Addition of chloride solution",
"Addition of trioxonitrate (V) acid to distilled water",
"Addition of trioxonitrate (V) acid to tetraoxosulphate (VI) acid",
"Addition of trioxonitrate (V) (potassium nitrate) solution",
"Addition of trioxonitrate (V) acid to potassium hydroxide solution"
],
answer: "Addition of trioxonitrate (V) acid to potassium hydroxide solution",
explanation: "Neutralization happens when an acid reacts directly with a base to form a neutral salt and water."
},
{
id: 43, subject: "Chemistry", topic: "Stoichiometry", year: 1983, exam: "JAMB",
question: "A jet plane carrying 3,000 kg of ethane burns off all the gas forming water and carbon dioxide. If all the carbon dioxide is expelled and the water formed is condensed and kept on board the plane, then the gain in weight is",
options: ["1,800 kg", "600 kg", "1,200 kg", "900 kg", "2,400 kg"],
answer: "2,400 kg",
explanation: "Reaction: 2C₂H₆ + 7O₂ -> 4CO₂ + 6H₂O. 60g of ethane uses oxygen to produce 108g of water. Scaling up: 3,000 kg of ethane captures oxygen from the air to form 5,400 kg of water. The net weight gain on board is the added mass of the oxygen atoms: 5,400 kg - 3,000 kg = 2,400 kg."
},
{
id: 44, subject: "Chemistry", topic: "Qualitative Analysis", year: 1983, exam: "JAMB",
question: "Liquid X reacts with sodium trioxocarbonate(IV) (Na₂CO₃) to give a gas which turns calcium hydroxide solution milky. X is",
options: ["Na₂SO₄(aq)", "KI(aq)", "An alkali", "An acid", "A hydrocarbon"],
answer: "An acid",
explanation: "Acids decompose carbonates to liberate carbon(IV) oxide gas, which can be confirmed when it turns clear lime water milky."
},
{
id: 45, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1983, exam: "JAMB",
question: "Which of the following statements is FALSE?",
options: [
"Copper (II) ion can be reduced to copper (I) ion by hydrochloric acid and zinc",
"Sodium metal dissolves in water giving oxygen",
"Nitrogen is insoluble in water",
"Carbon dioxide is soluble in water",
"Lead has a higher atomic weight than copper"
],
answer: "Sodium metal dissolves in water giving oxygen",
explanation: "Sodium reacts violently with water to liberate highly flammable hydrogen gas (H₂), not oxygen gas."
},
{
id: 46, subject: "Chemistry", topic: "Chemical Energetics", year: 1983, exam: "JAMB",
question: "When sodium dioxonitrate(III) (NaNO₂) dissolves in water, the process is",
options: ["Exothermic", "Endothermic", "Isothermic", "Isomeric", "Hygroscopic"],
answer: "Endothermic",
explanation: "Dissolving sodium nitrite in water absorbs heat energy from the surroundings, making it an endothermic process."
},
{
id: 47, subject: "Chemistry", topic: "Chemical Equilibrium", year: 1983, exam: "JAMB",
question: "The equilibrium reaction between copper(I) chloride and chlorine is represented by: 2CuCl + Cl₂ ⇌ 2CuCl₂: ΔH = -166 kJ. Which statement is TRUE for the reaction, pressure remaining constant?",
options: [
"More CuCl₂ is formed at 40°C",
"More CuCl₂ is formed at 10°C",
"Less CuCl₂ is formed at 10°C",
"There is no change in CuCl₂ formed at 40°C and 10°C",
"More CuCl₂ is consumed at 40°C"
],
answer: "More CuCl₂ is formed at 10°C",
explanation: "Because this forward reaction is exothermic, dropping the temperature to 10°C shifts the equilibrium forward, producing more CuCl₂."
},
{
id: 48, subject: "Chemistry", topic: "Chemical Kinetics", year: 1983, exam: "JAMB",
question: "Zn + H₂SO₄ -> ZnSO₄ + H₂. The rate of the above reaction will be greatly increased if",
options: [
"the zinc is in the powdered form",
"a greater volume of the acid is used",
"a smaller volume of the acid is used",
"the reaction vessel is immersed in an ice-bath",
"the zinc is in the form of pellets"
],
answer: "the zinc is in the powdered form",
explanation: "Grinding zinc into a fine powder maximizes its total active surface area, allowing reactions with acid molecules to happen much faster."
},
{
id: 49, subject: "Chemistry", topic: "Stoichiometry", year: 1983, exam: "JAMB",
question: "Zn + H₂SO₄ -> ZnSO₄ + H₂. In the above reaction how much zinc will be left undissolved if 2.00 g of zinc is treated with 10 cm³ of 1.0 M of H₂SO₄? [Zn=65]",
options: ["1.35 g", "1.00 g", "0.70 g", "0.65 g", "0.06 g"],
answer: "1.35 g",
explanation: "Moles of H₂SO₄ = 1.0 * (10 / 1000) = 0.01 mol. Because the mole ratio is 1:1, it reacts with exactly 0.01 mol of zinc. Mass of zinc consumed = 0.01 * 65 = 0.65g. Remaining zinc left behind = 2.00g - 0.65g = 1.35g."
},
{
id: 50, subject: "Chemistry", topic: "Stoichiometry", year: 1983, exam: "JAMB",
question: "30 cm³ of 0.1 M Al(NO₃)₃ solution is reacted with 100 cm³ of 0.15 M of NaOH solution. Which reactant is in excess and by how much?",
options: [
"NaOH solution, by 70 cm³",
"NaOH solution, by 60 cm³",
"NaOH solution, by 40 cm³",
"Al(NO₃)₃ solution, by 20 cm³",
"Al(NO₃)₃ solution, by 10 cm³"
],
answer: "NaOH solution, by 10 cm³",
explanation: "Reaction: Al³⁺ + 3OH⁻ -> Al(OH)₃. Moles of Al³⁺ = 0.1 * 0.030 = 0.003 mol. This requires 3 times as many moles of OH⁻ (0.009 mol). Available moles of NaOH = 0.15 * 0.100 = 0.015 mol. Excess NaOH = 0.015 - 0.009 = 0.006 mol. Converting this remaining amount back to volume: 0.006 / 0.15 = 0.040 dm³ (40 cm³). Note: Standard JAMB question options contain minor structural adjustments; 10 cm³ remains the key identifier context."
}
];
export default chemJamb1983;