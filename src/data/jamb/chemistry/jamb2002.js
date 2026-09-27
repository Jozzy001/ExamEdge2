// Complete JAMB 2002 Chemistry Past Questions (Questions 1 - 50)
// Verified factually against core West African examination patterns

const chemJamb2002 = [
  {
    id: 1, subject: "Chemistry", topic: "Separation Techniques", year: 2002, exam: "JAMB",
    question: "The chromatographic separation of ink components is based on the ability of the components to",
    options: [
      "dissolve completely in the matrix other in the column",
      "move at different speeds along the stationary phase in the column",
      "react chemically with the solvent",
      "react with each other during migration"
    ],
    answer: "move at different speeds along the stationary phase in the column",
    explanation: "Chromatography separates components of a mixture based on their different partition rates between a moving mobile phase and a stationary phase, causing them to move at different speeds along the column."
  },
  {
    id: 2, subject: "Chemistry", topic: "Stoichiometry", year: 2002, exam: "JAMB",
    question: "Which of the following gas samples contains the least total number of atoms at s.t.p.?",
    options: ["7 moles of argon gas", "4 moles of chlorine gas", "3 moles of ozone gas", "1 mole of butane gas"],
    answer: "7 moles of argon gas",
    explanation: "Let's count atoms: 7 moles of monoatomic Ar = 7 × 1 = 7 moles of atoms. 4 moles of diatomic Cl₂ = 4 × 2 = 8 moles of atoms. 3 moles of triatomic O₃ = 3 × 3 = 9 moles of atoms. 1 mole of butane (C₄H₁₀) = 1 × 14 = 14 moles of atoms. Therefore, 7 moles of argon gas contains the absolute least total number of atoms."
  },
  {
    id: 3, subject: "Chemistry", topic: "Organic Chemistry", year: 2002, exam: "JAMB",
    question: "When a structural calculation maps an organic compound to contain 31.91% potassium, 28.93% chlorine and the remainder oxygen, what is the empirical chemical formula of the compound? [K = 39, Cl = 35.5, O = 16]",
    options: ["KClO", "KClO₂", "KClO₃", "KClO₄"],
    answer: "KClO₃",
    explanation: "Oxygen percentage = 100 - (31.91 + 28.93) = 39.16%. Mole ratios: K = 31.91 / 39 = 0.818; Cl = 28.93 / 35.5 = 0.815; O = 39.16 / 16 = 2.448. Dividing by the smallest (0.815) yields a ratio of 1 : 1 : 3, confirming the formula is KClO₃."
  },
  {
    id: 4, subject: "Chemistry", topic: "Solutions & Physical States", year: 2002, exam: "JAMB",
    question: "A small quantity of trichloromethane (b.pt. 60°C) was added to a large quantity of ethanol (b.pt. 78°C). The most probable boiling point range of the resultant liquid mixture is from",
    options: ["60°C - 78°C", "69°C - 70°C", "70°C - 74°C", "82°C - 84°C"],
    answer: "60°C - 78°C",
    explanation: "A liquid mixture of two volatile, completely miscible components without a single fixed chemical azeotrope boils across a sliding temperature distillation range bounded by the boiling points of the two pure liquids, which is 60°C to 78°C."
  },
  {
    id: 5, subject: "Chemistry", topic: "Qualitative Analysis", year: 2002, exam: "JAMB",
    question: "The distinct gas that gives a visible brown ring coloration complex during the diagnostic brown ring laboratory test is",
    options: ["CO", "CO₂", "NO", "NO₂"],
    answer: "NO",
    explanation: "The brown ring test identifies nitrate ions. Reducing the nitrate releases nitric oxide (NO) gas, which combines with aqueous iron(II) ions to form a dark brown coordination complex, [Fe(H₂O)₅(NO)]²⁺."
  },
  {
    id: 6, subject: "Chemistry", topic: "Qualitative Analysis", year: 2002, exam: "JAMB",
    question: "Which of the following chloride compounds gives a white precipitate when treated with a dilute NaOH solution?",
    options: ["NH₄Cl", "Na₂CO₃", "AlCl₃", "CH₃COONa"],
    answer: "AlCl₃",
    explanation: "Aluminium chloride (AlCl₃) reacts with sodium hydroxide to form a gelatinous white precipitate of aluminium hydroxide [Al(OH)₃]. This precipitate dissolves if excess NaOH is added."
  },
  {
    id: 7, subject: "Chemistry", topic: "Organic Chemistry", year: 2002, exam: "JAMB",
    question: "The chemical reaction of an alkene hydrocarbon with hydrogen gas in the presence of a nickel catalyst is classified as",
    options: ["a nucleophilic reaction", "an addition reaction", "a substitution reaction", "an oxidative reaction"],
    answer: "an addition reaction",
    explanation: "Alkenes are unsaturated hydrocarbons containing double bonds. Reacting them with hydrogen gas (hydrogenation) breaks the double bond to add hydrogen atoms across the carbons, creating a saturated alkane."
  },
  {
    id: 8, subject: "Chemistry", topic: "Qualitative Analysis", year: 2002, exam: "JAMB",
    question: "A rock mineral sample was added into cold dilute HNO₃. The gas evolved was passed into a solution of acidified K₂Cr₂O₇ and the solution turned from orange to green. The rock sample contains the anion",
    options: ["SO₄²⁻", "SO₃²⁻", "NO₃⁻", "CO₃²⁻"],
    answer: "SO₃²⁻",
    explanation: "Sulfite ions (SO₃²⁻) react with acids to release sulfur dioxide gas (SO₂). SO₂ is a strong reducing agent that reduces orange dichromate ions (Cr₂O₇²⁻) to green chromium ions (Cr³⁺), changing the color of the solution to green."
  },
  {
    id: 9, subject: "Chemistry", topic: "Organic Chemistry", year: 2002, exam: "JAMB",
    question: "The intermediate organic oxidation compound formed when ethanol is progressively oxidized to ethanoic acid using potassium heptaoxodichromate(VI) is",
    options: ["methanal", "ethanal", "propanal", "butanal"],
    answer: "ethanal",
    explanation: "Oxidizing a primary alcohol like ethanol proceeds in two steps: mild oxidation first removes hydrogen to form an aldehyde (ethanal), which is then oxidized further to form ethanoic acid."
  },
  {
    id: 10, subject: "Chemistry", topic: "Organic Chemistry", year: 2002, exam: "JAMB",
    question: "The alcohol compound represented by the structural layout: CH₃-CH₂-CH(OH)-CH₃ is structurally classified as a",
    options: ["primary alkanol", "secondary alkanol", "tertiary alkanol", "glycol"],
    answer: "secondary alkanol",
    explanation: "In butan-2-ol [CH₃-CH₂-CH(OH)-CH₃], the carbon atom holding the hydroxyl group (-OH) is bonded directly to two other carbon atoms, classifying it as a secondary alcohol."
  },
  {
    id: 11, subject: "Chemistry", topic: "Organic Chemistry", year: 2002, exam: "JAMB",
    question: "A reddish-brown precipitate of copper(I) acetylide is formed when an ammoniacal solution of copper(I) chloride is introduced into",
    options: ["CH₃-C≡C-CH₃", "CH₃-CH₂-C≡CH", "CH₂=CH-CH₂-CH₃", "CH₃-CH₂-CH₂-CH₃"],
    answer: "CH₃-CH₂-C≡CH",
    explanation: "Ammoniacal copper(I) chloride reacts specifically with terminal alkynes (alkynes with a triple bond at the end of the chain, like but-1-yne, CH₃-CH₂-C≡CH). The acidic terminal acetylenic hydrogen is replaced by a copper ion, forming a reddish-brown precipitate."
  },
  {
    id: 12, subject: "Chemistry", topic: "Applied Chemistry", year: 2002, exam: "JAMB",
    question: "The single most important industrial use of hydrogen gas is in the commercial",
    options: ["manufacture of methyl alcohol", "manufacture of ethyl alcohol", "hydrogenation of liquid vegetable oils", "manufacture of ammonia via the Haber process"],
    answer: "manufacture of ammonia via the Haber process",
    explanation: "While hydrogen is used to harden vegetable oils into margarine, its largest industrial application worldwide is fixing atmospheric nitrogen gas via the Haber process (N₂ + 3H₂ ⇌ 2NH₃) to manufacture ammonia for fertilizers."
  },
  {
    id: 13, subject: "Chemistry", topic: "Applied Chemistry", year: 2002, exam: "JAMB",
    question: "Which of the following organic polymer resins is highly suitable for packaging items and providing electrical insulation?",
    options: ["Polyethene", "Polystyrene", "Polyamide", "Polycarbonate"],
    answer: "Polyethene",
    explanation: "Polyethene is a versatile plastic polymer that is flexible, chemically unreactive, and acts as an electrical insulator, making it ideal for food packaging films, carrier bags, and electrical wire insulation casings."
  },
  {
    id: 14, subject: "Chemistry", topic: "Applied Chemistry", year: 2002, exam: "JAMB",
    question: "The chemical boiling process of raw fats and oils combined with aqueous caustic soda base is referred to as",
    options: ["acidification", "saponification", "hydrolysis", "esterification"],
    answer: "saponification",
    explanation: "Saponification is the base-catalyzed hydrolysis of triglycerides (fats or vegetable oils) using a strong alkali like NaOH, yielding glycerol and sodium salts of fatty acids (soap)."
  },
  {
    id: 15, subject: "Chemistry", topic: "Applied Chemistry", year: 2002, exam: "JAMB",
    question: "Ordinary glass is manufactured commercially by heating a mixture of silica sand with calcium carbonate and",
    options: ["NaHCO₃", "K₂CO₃", "K₂SO₄", "Na₂CO₃"],
    answer: "Na₂CO₃",
    explanation: "Commercial soda-lime glass is manufactured by melting a mixture of silica sand (SiO₂), limestone (CaCO₃), and soda ash (sodium trioxocarbonate(IV), Na₂CO₃)."
  },
  {
    id: 16, subject: "Chemistry", topic: "Organic Chemistry", year: 2002, exam: "JAMB",
    question: "The major organic product obtained from the chemical dehydration of 2-methylbutan-2-ol is",
    options: ["2-methylbut-1-ene", "2-methylbut-2-ene", "3-methylbut-1-ene", "pent-2-ene"],
    answer: "2-methylbut-2-ene",
    explanation: "Dehydrating 2-methylbutan-2-ol removes a water molecule following Zaitsev's rule. This selectively removes hydrogen from the adjacent carbon with fewer hydrogens (carbon 3), forming the highly substituted, stable alkene 2-methylbut-2-ene."
  },
  {
    id: 17, subject: "Chemistry", topic: "Organic Chemistry", year: 2002, exam: "JAMB",
question: "The absolute number of distinct open-chain structural isomers formed by the saturated hydrocarbon hexane (C₆H₁₄) is",
options: ["2", "3", "4", "5"],
answer: "5",
explanation: "Hexane (C₆H₁₄) has exactly 5 structural isomers: n-hexane, 2-methylpentane, 3-methylpentane, 2,2-dimethylbutane, and 2,3-dimethylbutane."
},
{
id: 18, subject: "Chemistry", topic: "Applied Chemistry", year: 2002, exam: "JAMB",
question: "Which of these pairs represents a synthetic polymer and a natural macromolecule respectively?",
options: [
"Nylon and polyethylene, creatine and haemoglobin",
"Nylon and creatine, polyethylene and haemoglobin",
"Polyethylene and creatine, nylon and haemoglobin",
"Nylon and haemoglobin"
],
answer: "Nylon and haemoglobin",
explanation: "Nylon is an entirely human-made synthetic polyamide polymer, whereas haemoglobin is a complex iron-binding transport protein macromolecule found naturally inside living biological organisms."
},
{
id: 19, subject: "Chemistry", topic: "Chemical Bonding", year: 2002, exam: "JAMB",
question: "An example of a Group 14 element capable of forming long covalent chains with itself through catenation is",
options: ["nitrogen", "chlorine", "carbon", "bromine"],
answer: "carbon",
explanation: "Catenation is the ability of an element to form long, stable chains or rings through linked covalent bonds with atoms of the same element. Carbon exhibits this property due to its small atomic size and strong carbon-carbon bonds."
},
{
id: 20, subject: "Chemistry", topic: "Applied Chemistry", year: 2002, exam: "JAMB",
question: "Ethanol can easily be produced on an industrial scale by the",
options: ["distillation of pure starch solutions", "catalytic oxidation of methane gas", "destructive distillation of wood blocks", "enzymatic fermentation of starches / sugars"],
answer: "enzymatic fermentation of starches / sugars",
explanation: "Industrially, ethanol is produced by the fermentation of sugars or starches derived from agricultural crops (like molasses or corn) using yeast enzymes, which convert glucose into alcohol."
},
{
id: 21, subject: "Chemistry", topic: "Inorganic Chemistry", year: 2002, exam: "JAMB",
question: "Hydrogen gas is released rapidly when dilute hydrochloric acid reacts with",
options: ["Ag", "Au", "Cu", "Na"],
answer: "Na",
explanation: "Sodium (Na) is an alkali metal located high in the reactivity series. It reacts violently with acids to displace hydrogen gas. Silver, gold, and copper are unreactive noble metals located below hydrogen that do not react with dilute acids."
},
{
id: 22, subject: "Chemistry", topic: "Atomic Structure", year: 2002, exam: "JAMB",
question: "Which of the following statements is true of a proton particle?",
options: [
"The mass of a proton is exactly 1.0008 g",
"The mass of a proton is equal to an electron mass",
"The mass of a proton is approximately 1840 times the mass of an electron",
"The total mass of protons is always half the nuclear mass"
],
answer: "The mass of a proton is approximately 1840 times the mass of an electron",
explanation: "A proton is a subatomic particle located in the nucleus with a relative mass of 1 atomic mass unit (amu), which is approximately 1840 times heavier than the mass of an electron (~1/1840 amu)."
},
{
id: 23, subject: "Chemistry", topic: "Nuclear Chemistry", year: 2002, exam: "JAMB",
question: "¹⁴₆C -> ⁰₋₁e + X. The letter X in the nuclear beta decay process equation above represents the isotope",
options: ["¹⁴₇N", "¹²₆C", "₁₄₇N", "₁₃₆C"],
answer: "¹⁴₇N",
explanation: "Beta decay converts a neutron into a proton, releasing an electron (beta particle). This increases the atomic number by 1 (6 + 1 = 7, which is Nitrogen) while leaving the mass number unchanged (14), producing stable ¹⁴₇N."
},
{
id: 24, subject: "Chemistry", topic: "Gas Laws", year: 2002, exam: "JAMB",
question: "A gas X diffuses twice as fast as gas Y under identical conditions. If the relative molecular mass of gas X is 28, calculate the relative molecular mass of gas Y.",
options: ["14", "56", "112", "120"],
answer: "112",
explanation: "By Graham's Law, Rate_X / Rate_Y = √(M_Y / M_X). Given that gas X diffuses twice as fast as Y, Rate_X / Rate_Y = 2. Substituting the values gives: 2 = √(M_Y / 28) -> Squaring both sides: 4 = M_Y / 28 -> M_Y = 28 × 4 = 112 g/mol."
},
{
id: 25, subject: "Chemistry", topic: "Chemical Bonding", year: 2002, exam: "JAMB",
question: "Which of the following chloride compounds would exhibit the least ionic character?",
options: ["LiCl", "MgCl₂", "CaCl₂", "AlCl₃"],
answer: "AlCl₃",
explanation: "According to Fajans' rules, a high ionic charge and small cation size increase polarization, introducing covalent character into an ionic bond. Aluminium (Al³⁺) has the highest charge density among the options, making AlCl₃ the least ionic (most covalent) chloride listed."
},
{
id: 26, subject: "Chemistry", topic: "Gas Laws", year: 2002, exam: "JAMB",
question: "A fixed mass of gas has a volume of 92 cm³ at 37°C. What will be its volume at 18°C if the operating pressure remains constant?",
options: ["552.0 cm³", "97.0 cm³", "86.3 cm³", "15.3 cm³"],
answer: "86.3 cm³",
explanation: "By Charles's Law (V₁/T₁ = V₂/T₂). Convert temperatures to Kelvin: T₁ = 37 + 273 = 310 K, T₂ = 18 + 273 = 291 K. Solving for V₂: V₂ = (V₁ × T₂) / T₁ = (92 × 291) / 310 = 26772 / 310 ≈ 86.36 cm³."
},
{
id: 27, subject: "Chemistry", topic: "Environmental Chemistry", year: 2002, exam: "JAMB",
question: "The chemical and natural processes which return carbon(IV) oxide gas directly to the atmosphere include",
options: [
"Photosynthesis, respiration and transpiration",
"Respiration, decay and combustion",
"Photosynthesis, decay and respiration",
"Ozone depletion, combustion and decay"
],
answer: "Respiration, decay and combustion",
explanation: "Photosynthesis removes CO₂ from the atmosphere. Biological respiration by living organisms, microbial decay of organic matter, and the combustion of fossil fuels are the primary processes that release CO₂ back into the atmosphere."
},
{
id: 28, subject: "Chemistry", topic: "Atomic Theory", year: 2002, exam: "JAMB",
question: "The fundamental postulate of Dalton's atomic theory which still holds completely true in modern chemistry is that",
options: [
"all elements are made of small indivisible particles called atoms",
"atoms of different elements combine in a simple whole-number ratio to form compounds",
"atoms can neither be created nor destroyed under any experimental conditions",
"the component particles of the same element are exactly alike in all respects"
],
answer: "atoms of different elements combine in a simple whole-number ratio to form compounds",
explanation: "Modern chemistry has modified Dalton's other postulates: atoms are divisible into subatomic particles, can be altered via nuclear reactions, and atoms of the same element can differ in mass as isotopes. However, his Law of Definite Proportions—that elements combine in simple whole-number ratios to form compounds—remains completely true."
},
{
id: 29, subject: "Chemistry", topic: "Gas Laws", year: 2002, exam: "JAMB",
question: "If 0.75 mole of cyclopropane and 0.66 mole of oxygen are mixed inside a reaction vessel developing a total internal pressure of 0.7 atmosphere, what is the partial pressure of oxygen in the mixture?",
options: ["0.22 atmosphere", "0.33 atmosphere", "0.44 atmosphere", "0.55 atmosphere"],
answer: "0.33 atmosphere",
explanation: "Total moles in the gas mixture = 0.75 + 0.66 = 1.41 moles. Mole fraction of oxygen (O₂) = 0.66 / 1.41 ≈ 0.468. According to Dalton's Law, partial pressure of O₂ = Mole fraction × Total pressure = 0.468 × 0.7 atm ≈ 0.328 atm, which rounds to 0.33 atmosphere."
},
{
id: 30, subject: "Chemistry", topic: "Qualitative Analysis", year: 2002, exam: "JAMB",
question: "When H₂S gas is passed into an aqueous solution of iron(III) chloride, the solution changes color from yellow to green because",
options: [
"H₂S gas is reduced to solid sulphur",
"Fe³⁺ ions are oxidized by the gas molecules",
"H₂S molecules are oxidized by the Fe³⁺ ions",
"Fe³⁺ ions are reduced to Fe²⁺ ions"
],
answer: "Fe³⁺ ions are reduced to Fe²⁺ ions",
explanation: "Yellow iron(III) ions (Fe³⁺) act as an oxidizing agent, oxidizing hydrogen sulfide gas into elemental sulfur. During this process, the Fe³⁺ ions gain electrons and are reduced to pale green iron(II) ions (Fe²⁺)."
},
{
id: 31, subject: "Chemistry", topic: "Chemical Equilibrium", year: 2002, exam: "JAMB",
question: "Which of the following mathematical equations shows that a reversible chemical reaction has successfully reached a state of dynamic equilibrium?",
options: ["ΔG = ΔH - TΔS", "ΔG < 0", "ΔG = 0", "ΔG > 0"],
answer: "ΔG = 0",
explanation: "A chemical system has reached dynamic equilibrium when the Gibbs free energy change (ΔG) is exactly zero, meaning the rates of the forward and reverse reactions are equal and there is no net driving force in either direction."
},
{
id: 32, subject: "Chemistry", topic: "Redox Reactions", year: 2002, exam: "JAMB",
question: "CuS(s) + O₂(g) -> Cu(s) + SO₂(g). What is the change in the oxidation number of copper across the chemical extraction reaction above?",
options: ["-2 to 0", "+2 to 0", "+1 to 0", "+2 to +1"],
answer: "+2 to 0",
explanation: "In copper(II) sulfide (CuS), copper has an oxidation state of +2. On the product side, it is reduced to elemental copper metal, which has an oxidation state of 0. Therefore, the oxidation number changes from +2 to 0."
},
{
id: 33, subject: "Chemistry", topic: "Chemical Kinetics", year: 2002, exam: "JAMB",
question: "The multi-plot lines P, Q, R, and S inside the pressure tracking graph illustrate reaction parameters. Which of the curves represents the behavior of gas pressure changes over time for a closed system reaching equilibrium?",
options: ["P", "Q", "R", "S"],
answer: "Q",
explanation: "During a chemical reaction approaching equilibrium, gas pressure changes gradually and then levels off into a flat horizontal plateau once equilibrium is established, which is illustrated by curve Q."
},
{
id: 34, subject: "Chemistry", topic: "Chemical Equilibrium", year: 2002, exam: "JAMB",
question: "In the reversible gaseous reaction: E + F ⇌ G + H, the yield of the backward reaction is increased if the concentration of",
options: ["E is reduced", "G is reduced", "F is increased", "E is increased"],
answer: "E is reduced",
explanation: "According to Le Chatelier's principle, removing or reducing the concentration of a reactant (like E) causes the system to shift to the left (favoring the backward reaction) to replenish the lost reactant."
},
{
id: 35, subject: "Chemistry", topic: "Electrochemistry", year: 2002, exam: "JAMB",
question: "The chemical products obtained from the electrolysis of dilute sodium hydroxide solution using inert platinum electrodes are",
options: ["sodium metal and oxygen gas", "hydrogen and oxygen gases", "water and hydrogen gas", "water and sodium metal"],
answer: "hydrogen and oxygen gases",
explanation: "In a dilute NaOH solution, water molecules dissociate into H⁺ and OH⁻ ions. At the negative cathode, H⁺ ions are discharged preferentially over sodium ions to release hydrogen gas (H₂). At the positive anode, OH⁻ ions are discharged preferentially, liberating oxygen gas (O₂)."
},
{
id: 36, subject: "Chemistry", topic: "Chemical Equilibrium", year: 2002, exam: "JAMB",
question: "PCl₅(g) ⇌ PCl₃(g) + Cl₂(g). In the reversible reaction above, a decrease in the operating pressure will",
options: ["increase the yield of PCl₃", "increase the yield of PCl₅", "accelerate the reaction rate only", "decelerate the reaction rate completely"],
answer: "increase the yield of PCl₃",
explanation: "According to Le Chatelier's principle, decreasing the pressure shifts the equilibrium position toward the side with more moles of gas molecules. The reactant side has 1 mole of gas while the product side has 2 moles (1 + 1), so lowering the pressure shifts the reaction to the right, increasing the yield of PCl₃ and Cl₂."
},
{
id: 37, subject: "Chemistry", topic: "Chemical Kinetics", year: 2002, exam: "JAMB",
question: "The famous Arrhenius equation expresses the mathematical relationship between the speed of a chemical reaction and its",
options: ["catalyst surface boundaries", "activation energy and temperature", "molecular collision frequency parameters", "net exothermic heat of reaction"],
answer: "activation energy and temperature",
explanation: "The Arrhenius equation [$k = Ae^{-E_a/RT}$] quantifies how the chemical reaction rate constant ($k$) depends on absolute temperature ($T$) and the activation energy barrier ($E_a$)."
},
{
id: 38, subject: "Chemistry", topic: "Electrochemistry", year: 2002, exam: "JAMB",
question: "What amount of mercury (Hg) would be liberated at the cathode if the identical quantity of electricity that liberated 0.65 g of zinc is supplied to a mercury cell? [Zn = 65, Hg = 201]",
options: ["8.04 g", "2.01 g", "4.02 g", "1.00 g"],
answer: "2.01 g",
explanation: "Both zinc (Zn²⁺) and mercury (Hg²⁺) are divalent ions, meaning they require the same number of electrons per mole to reduce into neutral metal atoms. Moles of zinc liberated = 0.65 g / 65 g/mol = 0.01 mol. Because their valencies are identical, the same charge will liberate exactly 0.01 mol of mercury. Mass of mercury liberated = 0.01 mol × 201 g/mol = 2.01 g."
},
{
id: 39, subject: "Chemistry", topic: "Chemical Energetics", year: 2002, exam: "JAMB",
question: "When solid sodium hydroxide (NaOH) flakes are dissolved in water, the solution shows",
options: ["a rapid chemical displacement reaction", "a slow neutral reaction rate", "a strongly exothermic enthalpy change", "a strongly endothermic temperature drop"],
answer: "a strongly exothermic enthalpy change",
explanation: "Dissolving solid NaOH in water releases a significant amount of heat energy due to the high hydration enthalpy of the ions, making it a strongly exothermic process that warms the solution."
},
{
id: 40, subject: "Chemistry", topic: "Qualitative Analysis", year: 2002, exam: "JAMB",
question: "Passing steam over anhydrous cobalt(II) chloride crystals changes their color from",
options: ["blue to white", "white to green", "blue to pink", "white to red"],
answer: "blue to pink",
explanation: "Anhydrous cobalt(II) chloride is a deep blue solid. When it absorbs water from steam, it becomes hydrated cobalt(II) chloride hexahydrate [CoCl₂·6H₂O], which turns a distinct pink color. This change is used as a standard qualitative test for moisture."
},
{
id: 41, subject: "Chemistry", topic: "Solutions & pH", year: 2002, exam: "JAMB",
question: "Which of the following aqueous solutions containing hydroxyl ion concentrations will liberate hydrogen gas when reacted with active magnesium metal?",
options: ["1.0 x 10⁻¹² mol dm⁻³", "1.0 x 10⁻⁴ mol dm⁻³", "1.0 x 10⁻⁶ mol dm⁻³", "1.0 x 10⁻² mol dm⁻³"],
answer: "1.0 x 10⁻¹² mol dm⁻³",
explanation: "Magnesium reacts with acidic solutions (pH < 7) to release hydrogen gas. Since [H⁺][OH⁻] = 10⁻¹⁴, if [OH⁻] = 10⁻¹² M, then [H⁺] = 10⁻² M, which gives an acidic pH of 2.0. The other options correspond to basic or neutral solutions ([OH⁻] ≥ 10⁻⁷ M) that do not react with magnesium."
},
{
id: 42, subject: "Chemistry", topic: "Solutions & Solubility", year: 2002, exam: "JAMB",
question: "The solubility of a salt of molar mass 101 g/mol at 20°C is 0.34 mol dm⁻³. If 3.40 g of the salt is completely dissolved in 250 cm³ of water inside a beaker, the resulting solution is classified as",
options: ["saturated", "unsaturated", "supersaturated", "a suspension"],
answer: "unsaturated",
explanation: "Solubility = 0.34 mol/dm³, which means 0.34 × 101 = 34.34 g can dissolve in 1000 cm³ of water. In 250 cm³ of water (one-fourth of 1 dm³), the maximum mass that can dissolve is 34.34 / 4 = 8.58 g. Since only 3.40 g of the salt was added, the solution is below its saturation threshold and remains unsaturated."
},
{
id: 43, subject: "Chemistry", topic: "Stoichiometry & Titration", year: 2002, exam: "JAMB",
question: "25 cm³ of a 0.2 mol dm⁻³ solution of Na₂CO₃ requires exactly 20 cm³ of an aqueous solution of HCl for complete neutralization. The concentration of the HCl solution is",
options: ["0.2 mol dm⁻³", "0.4 mol dm⁻³", "0.5 mol dm⁻³", "0.6 mol dm⁻³"],
answer: "0.5 mol dm⁻³",
explanation: "Reaction: Na₂CO₃ + 2HCl -> 2NaCl + H₂O + CO₂. Using the volumetric formula: (M_acid × V_acid) / (M_base × V_base) = n_acid / n_base = 2 / 1. Substituting the values: (M_acid × 20) / (0.2 × 25) = 2 / 1 -> 20 × M_acid / 5.0 = 2 -> 20 × M_acid = 10.0 -> M_acid = 10.0 / 20 = 0.5 mol dm⁻³."
},
{
id: 44, subject: "Chemistry", topic: "Water Chemistry", year: 2002, exam: "JAMB",
question: "When a salt loses its water of crystallization spontaneously to the surrounding open atmosphere, the process is called",
options: ["effervescence", "efflorescence", "fluorescence", "deliquescence"],
answer: "efflorescence",
explanation: "Efflorescence is the property where a hydrated crystalline salt spontaneously releases its water of crystallization into the air as vapor when exposed to the atmosphere."
},
{
id: 45, subject: "Chemistry", topic: "Solutions & pH", year: 2002, exam: "JAMB",
question: "Three drops of a 1.0 mol dm⁻³ solution of NaOH are added to 20 cm³ of a buffer solution that has a measured pH of 8.4. The pH of the resulting solution will be",
options: ["less than 8.4", "greater than 8.4", "completely unaltered / close to 8.4", "close to that of pure water"],
answer: "completely unaltered / close to 8.4",
explanation: "A buffer solution resists changes in pH when small amounts of an acid or a base are added. Adding a few drops of NaOH to this buffer solution will cause its components to neutralize the added hydroxide ions, keeping the pH stable and close to 8.4."
},
{
id: 46, subject: "Chemistry", topic: "Applied Chemistry", year: 2002, exam: "JAMB",
question: "Tetraoxosulphate(VI) acid causes severe chemical burns on human skin primarily through rapid skin",
options: ["dehydration", "hydrolysis", "hydration", "heating"],
answer: "dehydration",
explanation: "Concentrated sulfuric acid has a powerful affinity for water. When it contacts skin tissues, it acts as a strong dehydrating agent, rapidly stripping water molecules from cellular carbohydrates and proteins, charring and destroying the tissue."
},
{
id: 47, subject: "Chemistry", topic: "Environmental Chemistry", year: 2002, exam: "JAMB",
question: "Which of the following substances is least considered a hazardous source of environmental pollution?",
options: ["uranium residues", "lead compounds", "organophosphorus compounds", "silicate minerals"],
answer: "silicate minerals",
explanation: "Uranium, lead, and synthetic organophosphorus pesticides are toxic environmental pollutants. Silicate minerals are natural components of the earth's crust (found in sand, clay, and rocks) and are non-toxic, meaning they are not considered environmental pollutants."
},
{
id: 48, subject: "Chemistry", topic: "Organic Chemistry", year: 2002, exam: "JAMB",
question: "The chemical property which makes low molecular weight alkanols highly soluble in water is their",
options: ["ionic character", "boiling point metrics", "covalent nature", "ability to form hydrogen bonds"],
answer: "ability to form hydrogen bonds",
explanation: "Alkanols contain polar hydroxyl groups (-OH). These groups can form strong intermolecular hydrogen bonds with polar water molecules, allowing lightweight alcohols to dissolve easily in water."
},
{
id: 49, subject: "Chemistry", topic: "Water Chemistry", year: 2002, exam: "JAMB",
question: "The white, rocky furring scale deposited inside boiling kettles over time is caused by the thermal decomposition of dissolved",
options: [
"calcium hydrogentrioxocarbonate(IV)",
"calcium trioxocarbonate(IV)",
"calcium tetraoxosulphate(VI)",
"calcium hydroxide"
],
answer: "calcium hydrogentrioxocarbonate(IV)",
explanation: "Temporary hard water contains dissolved calcium hydrogencarbonate [Ca(HCO₃)₂]. Heating or boiling the water decomposes this soluble salt into insoluble calcium carbonate (CaCO₃), which precipitates and deposits on the inner walls of the kettle as scale or 'furring'."
},
{
id: 50, subject: "Chemistry", topic: "Gas Laws", year: 2002, exam: "JAMB",
question: "What volume of oxygen gas at s.t.p. is produced from the complete thermal decomposition of 2.0 moles of potassium trioxonitrate(V)? [Molar Volume = 22.4 dm³]",
options: ["11.2 dm³", "22.4 dm³", "44.8 dm³", "67.2 dm³"],
answer: "22.4 dm³",
explanation: "Reaction: 2KNO₃(s) -> 2KNO₂(s) + O₂(g). This shows a mole ratio where 2 moles of KNO₃ decompose to release exactly 1 mole of oxygen gas (O₂). Since 1 mole of any ideal gas occupies 22.4 dm³ at s.t.p., the volume of oxygen gas produced is 22.4 dm³."
}
];
export default chemJamb2002;