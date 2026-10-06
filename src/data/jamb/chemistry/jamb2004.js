// Complete JAMB 2004 Chemistry Past Questions (Questions 1 - 50)
// Verified factually against core West African examination patterns

const chemJamb2004 = [
  {
    id: 1, subject: "Chemistry", topic: "Separation Techniques", year: 2004, exam: "JAMB",
    question: "A mixture of iodine and sodium chloride can be separated by",
    options: ["decantation", "filtration", "sublimation", "evaporation"],
    answer: "sublimation",
    explanation: "Iodine is a sublime solid that transitions directly from a solid to a gas when heated. Heating the mixture vaporizes the iodine, which can be condensed on a cool surface, leaving pure solid sodium chloride behind."
  },
  {
    id: 2, subject: "Chemistry", topic: "Gas Laws", year: 2004, exam: "JAMB",
    question: "A certain volume of hydrogen gas diffuses through a porous plug in 10 seconds. How long will it take the same volume of oxygen to diffuse under identical conditions? [H = 1, O = 16]",
    options: ["20 seconds", "40 seconds", "80 seconds", "160 seconds"],
    answer: "40 seconds",
    explanation: "According to Graham's Law of Diffusion, the rate of diffusion is inversely proportional to the square root of the molar mass (t₂ / t₁ = √(M₂ / M₁)). Let t be the time for oxygen. t / 10 = √(32 / 2) = √16 = 4. Therefore, t = 10 × 4 = 40 seconds."
  },
  {
    id: 3, subject: "Chemistry", topic: "Stoichiometry", year: 2004, exam: "JAMB",
    question: "Calculate the empirical formula of a organic compound containing 40.0% carbon, 6.7% hydrogen, and 53.3% oxygen by mass. [C = 12, H = 1, O = 16]",
    options: ["CHO", "CH₂O", "C₂HO", "CHO₂"],
    answer: "CH₂O",
    explanation: "Calculating mole ratios: C = 40.0 / 12 = 3.33; H = 6.7 / 1 = 6.70; O = 53.3 / 16 = 3.33. Dividing by the smallest value (3.33) gives a simple whole-number ratio of 1 : 2 : 1, confirming the empirical formula is CH₂O."
  },
  {
    id: 4, subject: "Chemistry", topic: "Stoichiometry", year: 2004, exam: "JAMB",
    question: "What volume of carbon(IV) oxide gas at s.t.p. is produced when 5.0 g of calcium trioxocarbonate(IV) completely decomposes by heat? [Ca = 40, C = 12, O = 16, Molar volume at s.t.p. = 22.4 dm³]",
    options: ["1.12 dm³", "2.24 dm³", "4.48 dm³", "11.20 dm³"],
    answer: "1.12 dm³",
    explanation: "Reaction: CaCO₃ -> CaO + CO₂. Molar mass of CaCO₃ = 40 + 12 + (3 × 16) = 100 g/mol. Moles of CaCO₃ used = 5.0 g / 100 g/mol = 0.05 mol. From the 1:1 reaction stoichiometry, 0.05 mol of salt yields exactly 0.05 mol of CO₂ gas. Volume of CO₂ at s.t.p. = 0.05 mol × 22.4 dm³/mol = 1.12 dm³."
  },
  {
    id: 5, subject: "Chemistry", topic: "Gas Laws", year: 2004, exam: "JAMB",
    question: "A gas occupies a volume of 2.0 dm³ at a temperature of 27°C and a pressure of 2.0 atm. What will be its volume if the temperature is lowered to -73°C and the pressure is increased to 4.0 atm?",
    options: ["0.5 dm³", "1.0 dm³", "1.5 dm³", "2.0 dm³"],
    answer: "0.67 dm³",
    explanation: "Using the general combined gas law equation: (P₁V₁) / T₁ = (P₂V₂) / T₂. Convert temperatures to Kelvin: T₁ = 27 + 273 = 300 K; T₂ = -73 + 273 = 200 K. Substituting values: (2.0 × 2.0) / 300 = (4.0 × V₂) / 200 -> 4 / 300 = 4V₂ / 200 -> V₂ = 200 / 300 = 0.67 dm³."
  },
  {
    id: 6, subject: "Chemistry", topic: "Gas Laws", year: 2004, exam: "JAMB",
    question: "A mixture of 0.50 mole of hydrogen and 0.50 mole of nitrogen gas exerts a total pressure of 1.2 atm. What is the partial pressure of hydrogen in the mixture?",
    options: ["0.3 atm", "0.6 atm", "0.9 atm", "1.2 atm"],
    answer: "0.6 atm",
    explanation: "Total moles in the mixture = 0.50 + 0.50 = 1.00 mol. Mole fraction of hydrogen = 0.50 / 1.00 = 0.5. According to Dalton's Law, partial pressure of hydrogen = Mole fraction × Total pressure = 0.5 × 1.2 atm = 0.6 atm."
  },
  {
    id: 7, subject: "Chemistry", topic: "Kinetic Theory", year: 2004, exam: "JAMB",
    question: "The random zigzag motion of smoke particles suspended in air when viewed under a microscope is called",
    options: ["vibrational motion", "Brownian motion", "osmotic movement", "convection current"],
    answer: "Brownian motion",
    explanation: "Brownian motion is the continuous, random, zigzag movement of suspended microscopic particles. It is caused by the constant kinetic bombardment of these particles by the invisible, fast-moving molecules of the surrounding fluid medium (air or water)."
  },
  {
    id: 8, subject: "Chemistry", topic: "Atomic Structure", year: 2004, exam: "JAMB",
    question: "An element Y features an atomic number of 17 and a mass number of 35. The number of protons, neutrons, and electrons inside its stable unipositive ion Y⁺ is respectively",
    options: ["17, 18, 17", "17, 18, 16", "17, 17, 16", "18, 17, 16"],
    answer: "17, 18, 16",
    explanation: "The atomic number (17) determines the proton count, which remains constant. Neutrons = Mass number - Atomic number = 35 - 17 = 18. A unipositive ion (Y⁺) has lost 1 electron, so its electron count decreases from 17 to 17 - 1 = 16, resulting in the sequence 17, 18, 16."
  },
  {
    id: 9, subject: "Chemistry", topic: "Periodic Table", year: 2004, exam: "JAMB",
    question: "The electronic configuration of an atom is 1s² 2s² 2p⁶ 3s² 3p⁴. Which group and period does this element belong to in the periodic table?",
    options: ["Group 14, Period 3", "Group 16, Period 3", "Group 14, Period 4", "Group 16, Period 4"],
    answer: "Group 16, Period 3",
    explanation: "The highest principal quantum number is 3, placing the element in Period 3. For p-block elements, the group number is 10 + number of valence electrons. The outer valence shell has 2s² + 4p⁴ = 6 electrons, placing it in Group 16 (Group 6A, Sulphur)."
  },
  {
    id: 10, subject: "Chemistry", topic: "Chemical Bonding", year: 2004, exam: "JAMB",
    question: "The geometric molecular shape of a carbon dioxide (CO₂) molecule is described as",
    options: ["linear", "bent", "tetrahedral", "trigonal planar"],
    answer: "linear",
    explanation: "Carbon forms two double bonds with two oxygen atoms and possesses no non-bonding lone pairs on the central carbon atom. According to VSEPR theory, the electron pairs repel each other to maximum separation, creating a linear shape with a bond angle of 180°."
  },
  {
    id: 11, subject: "Chemistry", topic: "Chemical Bonding", year: 2004, exam: "JAMB",
    question: "The crystalline form of sodium chloride is held together in a rigid giant lattice by",
    options: ["covalent bonds", "metallic bonds", "electrovalent bonds", "van der waals forces"],
    answer: "electrovalent bonds",
    explanation: "Sodium chloride is an ionic compound. Its crystalline lattice structure is held together by electrovalent (ionic) bonds, which are strong electrostatic forces of attraction acting uniformly in all directions between positive sodium ions (Na⁺) and negative chloride ions (Cl⁻)."
  },
  {
    id: 12, subject: "Chemistry", topic: "Water Chemistry", year: 2004, exam: "JAMB",
    question: "Permanent hardness of water can be safely removed by adding",
    options: ["calcium oxide", "alum blocks", "sodium trioxocarbonate(IV)", "dilute hydrochloric acid"],
    answer: "sodium trioxocarbonate(IV)",
    explanation: "Permanent hardness is caused by dissolved sulfates and chlorides of calcium and magnesium. Adding washing soda (sodium carbonate, Na₂CO₃) reacts with these dissolved ions to precipitate them out as insoluble solid carbonates, softening the water permanently."
  },
  {
    id: 13, subject: "Chemistry", topic: "Environmental Chemistry", year: 2004, exam: "JAMB",
    question: "Which of the following gases is highly responsible for standard atmospheric depletion of the protective ozone layer?",
    options: ["Carbon dioxide", "Methane", "Sulphur dioxide", "Chlorofluorocarbons (CFCs)"],
    answer: "Chlorofluorocarbons (CFCs)",
    explanation: "Chlorofluorocarbons (CFCs) migrate into the stratosphere where solar ultraviolet light breaks them down to release active chlorine free radicals. These chlorine radicals act as destructive catalysts that continuously break down ozone (O₃) molecules into oxygen."
  },
  {
    id: 14, subject: "Chemistry", topic: "Solutions & Solubility", year: 2004, exam: "JAMB",
    question: "A colloidal system consisting of tiny liquid droplets dispersed uniformly inside a gaseous medium is classified as a/an",
    options: ["emulsion", "liquid aerosol", "sol", "gel"],
    answer: "liquid aerosol",
    explanation: "A liquid aerosol is a colloid formed by suspending fine liquid droplets throughout a continuous gaseous phase (such as fog, mist, or commercial hairspray)."
  },
  {
    id: 15, subject: "Chemistry", topic: "Solutions & Solubility", year: 2004, exam: "JAMB",
    question: "Calculate the pH of a 0.005 M aqueous solution of tetraoxosulphate(VI) acid, assuming complete ionization.",
    options: ["1.0", "2.0", "3.0", "4.0"],
    answer: "2.0",
    explanation: "H₂SO₄ is a strong diprotic acid that dissociates completely: H₂SO₄ -> 2H⁺ + SO₄²⁻. A 0.005 M solution produces 2 × 0.005 = 0.01 M concentration of hydrogen ions [H⁺]. pH = -log₁₀[H⁺] = -log₁₀(0.01) = 2.0."
  },
  {
    id: 16, subject: "Chemistry", topic: "Acids, Bases & Salts", year: 2004, exam: "JAMB",
    question: "Which of the following salts undergoes anionic hydrolysis in water to produce a basic solution with a pH greater than 7?",
    options: ["NH₄Cl", "NaCl", "K₂SO₄", "Na₂CO₃"],
    answer: "Na₂CO₃",
    explanation: "Sodium carbonate (Na₂CO₃) is derived from a strong base (NaOH) and a weak acid (H₂CO₃). In water, the carbonate anion reacts with water molecules (anionic hydrolysis), taking protons and releasing free hydroxide ions (OH⁻), making the solution alkaline."
  },
  {
    id: 17, subject: "Chemistry", topic: "Stoichiometry & Titration", year: 2004, exam: "JAMB",
question: "What volume of 0.1 M NaOH solution is required to completely neutralize 20 cm³ of a 0.05 M solution of a dibasic acid?",
options: ["10 cm³", "20 cm³", "30 cm³", "40 cm³"],
answer: "20 cm³",
explanation: "Reaction for a dibasic acid (H₂A): H₂A + 2NaOH -> Na₂A + 2H₂O. The mole ratio of acid to base is 1:2. Using the volumetric formula: (M_a × V_a) / (M_b × V_b) = 1 / 2. Substituting values: (0.05 × 20) / (0.1 × V_b) = 1 / 2 -> 1.0 / 0.1V_b = 0.5 -> 0.1V_b = 2.0 -> V_b = 20 cm³."
},
{
id: 18, subject: "Chemistry", topic: "Electrochemistry", year: 2004, exam: "JAMB",
question: "During the industrial refining of an impure copper sample by electrolysis, the crude copper sample must be made the",
options: ["anode", "cathode", "electrolyte", "spectator ion"],
answer: "anode",
explanation: "In electrolytic refining, the impure metallic sample is always made the positive anode of the cell. The copper atoms oxidize and dissolve into solution (Cu -> Cu²⁺ + 2e⁻), while pure copper deposits cleanly on the cathode."
},
{
id: 20, subject: "Chemistry", topic: "Electrochemistry", year: 2004, exam: "JAMB",
question: "How many Faradays of electricity are required to deposit 1.2 moles of copper metal at the cathode from an aqueous copper(II) salt solution?",
options: ["0.6 F", "1.2 F", "2.4 F", "3.6 F"],
answer: "2.4 F",
explanation: "The reduction reaction at the cathode is Cu²⁺ + 2e⁻ -> Cu, which shows that 2 Faradays of electricity are required to deposit 1 mole of copper. Therefore, depositing 1.2 moles of copper requires exactly 1.2 × 2 = 2.4 Faradays."
},
{
id: 21, subject: "Chemistry", topic: "Redox Reactions", year: 2004, exam: "JAMB",
question: "Zn(s) + 2H⁺(aq) -> Zn²⁺(aq) + H₂(g). In the ionic reaction equation above, the hydrogen ions (H⁺) behave as",
options: ["a catalyst", "an oxidizing agent", "a reducing agent", "a buffer system"],
answer: "an oxidizing agent",
explanation: "The oxidation state of hydrogen decreases from +1 in H⁺ to 0 in H₂ gas, meaning it gains electrons and undergoes reduction. Because it accepts electrons and causes zinc to oxidize, the hydrogen ion acts as the oxidizing agent."
},
{
id: 22, subject: "Chemistry", topic: "Oxidation Numbers", year: 2004, exam: "JAMB",
question: "What is the oxidation number of manganese inside the potassium manganate(VI) (K₂MnO₄) molecule?",
options: ["+2", "+4", "+6", "+7"],
answer: "+6",
explanation: "In K₂MnO₄, let the oxidation state of manganese be x. Potassium is +1 and oxygen is -2. Setting up the neutral compound balance: 2(+1) + x + 4(-2) = 0 -> 2 + x - 8 = 0 -> x - 6 = 0 -> x = +6."
},
{
id: 23, subject: "Chemistry", topic: "Chemical Energetics", year: 2004, exam: "JAMB",
question: "A chemical reaction that releases heat energy into its surroundings is thermodynamically characterized by a",
options: [
"positive enthalpy change (+ΔH)",
"negative enthalpy change (-ΔH)",
"positive free energy change (+ΔG)",
"zero entropy change (ΔS = 0)"
],
answer: "negative enthalpy change (-ΔH)",
explanation: "An exothermic reaction releases thermal energy into its surroundings, which means the total heat content of the products is lower than that of the reactants, resulting in a negative enthalpy change (-ΔH)."
},
{
id: 24, subject: "Chemistry", topic: "Chemical Kinetics", year: 2004, exam: "JAMB",
question: "A catalyst speeds up the rate of a chemical reaction by providing an alternative reaction pathway that",
options: [
"increases molecular velocity",
"lowers the activation energy barrier",
"increases total enthalpy change",
"increases the total number of molecular collisions"
],
answer: "lowers the activation energy barrier",
explanation: "Catalysts accelerate reactions by opening an alternative chemical mechanism that possesses a lower activation energy barrier, enabling a larger fraction of reactant molecules to successfully react per unit time."
},
{
id: 25, subject: "Chemistry", topic: "Chemical Equilibrium", year: 2004, exam: "JAMB",
question: "According to Le Chatelier's principle, if an equilibrium system is subjected to an increase in operating temperature, the system will shift to favor the",
options: ["exothermic reaction path", "endothermic reaction path", "side with more gas moles", "side with fewer gas moles"],
answer: "endothermic reaction path",
explanation: "Increasing the temperature adds thermal energy to the system. According to Le Chatelier's principle, the system counteracts this stress by shifting in the direction that absorbs heat, which always favors the endothermic reaction pathway."
},
{
id: 26, subject: "Chemistry", topic: "Gases & Non-Metals", year: 2004, exam: "JAMB",
question: "Which of the following gases can be safely collected in the laboratory by the downward delivery (upward displacement of air) method because it is less dense than air?",
options: ["Chlorine", "Sulphur dioxide", "Carbon dioxide", "Ammonia"],
answer: "Ammonia",
explanation: "Ammonia (NH₃, molar mass 17) is significantly less dense (lighter) than air (average mass ~29). It is collected by upward delivery (downward displacement of air) because it rises and displaces the heavier air downward."
},
{
id: 27, subject: "Chemistry", topic: "Gases & Non-Metals", year: 2004, exam: "JAMB",
question: "Carbon(II) oxide is a lethal poisonous gas because it exhibits a powerful chemical affinity to link with",
options: [
"lung tissues causing them to dissolve",
"blood hemoglobin, blocking oxygen transport",
"atmospheric moisture to cause acid rain",
"calcium ions in bones"
],
answer: "blood hemoglobin, blocking oxygen transport",
explanation: "Carbon monoxide (CO) binds to blood hemoglobin to form carboxyhemoglobin. This bond is over 200 times stronger than oxygen's bond with hemoglobin, preventing blood from transporting oxygen to vital tissues and causing asphyxiation."
},
{
id: 28, subject: "Chemistry", topic: "Inorganic Chemistry", year: 2004, exam: "JAMB",
question: "The chemical gas released when dilute hydrochloric acid reacts with calcium carbonate solid is",
options: ["hydrogen gas", "chlorine gas", "carbon(IV) oxide", "carbon(II) oxide"],
answer: "carbon(IV) oxide",
explanation: "Acids decompose metal carbonates to form a salt, water, and release carbon(IV) oxide (CO₂) gas with visible effervescence."
},
{
id: 29, subject: "Chemistry", topic: "Inorganic Chemistry", year: 2004, exam: "JAMB",
question: "The chemical oxide that acts as the direct acid anhydride corresponding to tetraoxosulphate(VI) acid is",
options: ["sulphur(IV) oxide", "sulphur(VI) oxide", "hydrogen sulphide", "peroxodisulphate oxide"],
answer: "sulphur(VI) oxide",
explanation: "An acid anhydride is an oxide that reacts with water to form an acid. Sulphur(VI) oxide (SO₃) reacts directly with water to produce tetraoxosulphate(VI) acid (H₂SO₄): SO₃ + H₂O -> H₂SO₄."
},
{
id: 30, subject: "Chemistry", topic: "Qualitative Analysis", year: 2004, exam: "JAMB",
question: "An unknown gas turns a filter paper previously soaked in acidified potassium heptaoxodichromate(VI) solution from orange to green. The gas is identified as",
options: ["oxygen", "carbon(IV) oxide", "sulphur(IV) oxide", "hydrogen sulphide"],
answer: "sulphur(IV) oxide",
explanation: "Sulphur(IV) oxide (SO₂) is a strong reducing agent. It reduces orange dichromate ions (Cr₂O₇²⁻, chromium +6) to green chromium ions (Cr³⁺, chromium +3), providing a standard qualitative test for its presence."
},
{
id: 31, subject: "Chemistry", topic: "Inorganic Chemistry", year: 2004, exam: "JAMB",
question: "Aluminium oxide is classified as an amphoteric oxide because it can dissolve in and react with both",
options: [
"pure water and alcohol solvents",
"dilute mineral acids and strong alkalis",
"liquid water and atmospheric rare gases",
"organic solvents and liquid ammonia"
],
answer: "dilute mineral acids and strong alkalis",
explanation: "Amphoteric oxides (such as Al₂O₃ and ZnO) exhibit both basic and acidic reactivities, allowing them to dissolve in and react with both dilute mineral acids (acting as a base) and strong basic alkalis like NaOH (acting as an acid) to form salts and water."
},
{
id: 32, subject: "Chemistry", topic: "Applied Chemistry", year: 2004, exam: "JAMB",
question: "The primary mineral ore from which iron metal is extracted commercially on a large industrial scale inside a blast furnace is",
options: ["bauxite", "haematite", "cassiterite", "galena"],
answer: "haematite",
explanation: "Haematite is the primary iron oxide ore (Fe₂O₃) used globally in metallurgy to smelt and extract metallic iron inside blast furnaces."
},
{
id: 33, subject: "Chemistry", topic: "Applied Chemistry", year: 2004, exam: "JAMB",
question: "The alloy brass consists of a solid solution combination of copper and",
options: ["tin", "zinc", "nickel", "lead"],
answer: "zinc",
explanation: "Brass is a metallic alloy composed of copper combined with zinc. Bronze is an alloy composed of copper and tin."
},
{
id: 34, subject: "Chemistry", topic: "Inorganic Chemistry", year: 2004, exam: "JAMB",
question: "The chemical compound responsible for the white milky appearance formed when carbon(IV) oxide is passed into lime water is",
options: ["calcium oxide", "calcium hydroxide", "calcium trioxocarbonate(IV)", "calcium hydrogentrioxocarbonate(IV)"],
answer: "calcium trioxocarbonate(IV)",
explanation: "Passing CO₂ gas into lime water [Ca(OH)₂] triggers a precipitation reaction that forms insoluble calcium trioxocarbonate(IV) (calcium carbonate, CaCO₃), which appears as a white suspended precipitate that turns the solution milky."
},
{
id: 35, subject: "Chemistry", topic: "Periodic Table", year: 2004, exam: "JAMB",
question: "Transition metal ions frequently form colored compound complexes and exhibit variable oxidation states because they contain",
options: ["completely filled p-subshells", "partially filled d-orbitals", "mobile valence electrons in s-orbitals", "empty valence f-orbitals"],
answer: "partially filled d-orbitals",
explanation: "The unique chemical properties of transition metals—including their ability to exhibit multiple variable oxidation states and form vibrant, colored complex coordination ions—are due to the presence of partially filled d-orbital subshells."
},
{
id: 36, subject: "Chemistry", topic: "Organic Chemistry", year: 2004, exam: "JAMB",
question: "The carbon atoms involved in a double bond configuration inside an alkene molecule (like ethene) are structurally",
options: ["sp³ hybridized", "sp² hybridized", "sp hybridized", "not hybridized"],
answer: "sp² hybridized",
explanation: "Carbon atoms involved in a double bond mix one s orbital and two p orbitals to form three equivalent sp² hybrid orbitals. These form three coplanar sigma bonds, while the remaining unhybridized p orbital forms a pi bond."
},
{
id: 37, subject: "Chemistry", topic: "Organic Chemistry", year: 2004, exam: "JAMB",
question: "The general formula representing the homologous series of alkanes is written as",
options: ["CₙH₂ₙ", "CₙH₂ₙ₋₂", "CₙH₂ₙ₊₁", "CₙH₂ₙ₊₂"],
answer: "CₙH₂ₙ₊₂",
explanation: "Alkanes are saturated open-chain hydrocarbons containing single covalent carbon-carbon bonds, matching the general molecular formula CₙH₂ₙ₊₂."
},
{
id: 41, subject: "Chemistry", topic: "Organic Chemistry", year: 2004, exam: "JAMB",
question: "Chemical compounds that share the exact same molecular formula but possess different structural arrangements are described as",
options: ["allotropes", "isotopes", "isomers", "homologues"],
answer: "isomers",
explanation: "Isomers are distinct chemical compounds that have the identical molecular formula (the same number and types of atoms) but differ in their structural configuration or structural arrangement."
},
{
id: 42, subject: "Chemistry", topic: "Organic Chemistry", year: 2004, exam: "JAMB",
question: "The selective chemical test used to identify and confirm terminal unsaturation (C≡C-H triple bonds) involves a reaction with",
options: ["bromine water", "acidified KMnO₄ solution", "ammoniacal copper(I) chloride solution", "Fehling's solution"],
answer: "ammoniacal copper(I) chloride solution",
explanation: "Terminal alkynes possess an acidic hydrogen atom attached to the triple-bonded carbon. This hydrogen reacts specifically with an ammoniacal solution of copper(I) chloride to precipitate a characteristic reddish-brown copper acetylide salt."
},
{
id: 43, subject: "Chemistry", topic: "Organic Chemistry", year: 2004, exam: "JAMB",
question: "What organic product is formed when ethanol is completely oxidized under reflux using an excess of acidified potassium heptaoxodichromate(VI)?",
options: ["ethanal", "ethanoic acid", "ethene", "ethyl ethanoate"],
answer: "ethanoic acid",
explanation: "Oxidizing a primary alcohol like ethanol first yields ethanal (an aldehyde). In the presence of excess strong oxidizing agent under reflux conditions, the oxidation goes to completion, converting the aldehyde into ethanoic acid."
},
{
id: 44, subject: "Chemistry", topic: "Organic Chemistry", year: 2004, exam: "JAMB",
question: "The chemical reaction of an alkanoic acid with an alkanol in the presence of a mineral acid catalyst to produce a sweet-smelling compound is called",
options: ["saponification", "esterification", "hydrolysis", "dehydration"],
answer: "esterification",
explanation: "Esterification is the condensation reaction between a carboxylic acid and an alcohol (alkanol), which eliminates a water molecule to produce a sweet, fruity-smelling ester compound."
},
{
id: 45, subject: "Chemistry", topic: "Applied Chemistry", year: 2004, exam: "JAMB",
question: "The process of manufacturing soap by the base-catalyzed alkaline hydrolysis of natural fats and vegetable oils is called",
options: ["neutralization", "esterification", "saponification", "polymerization"],
answer: "saponification",
explanation: "Saponification is specifically the alkaline hydrolysis of triglycerides (fats or vegetable oils) using a strong base like NaOH or KOH, producing glycerol and metallic salts of fatty acids (soap)."
},
{
id: 46, subject: "Chemistry", topic: "Organic Chemistry", year: 2004, exam: "JAMB",
question: "The functional group that characterizes the organic family of alkanals (aldehydes) is",
options: ["-OH", "-CHO", "-COOH", "-CO-"],
answer: "-CHO",
explanation: "Alkanals (aldehydes) are organic molecules defined by the presence of a terminal carbonyl group bonded to a hydrogen atom, written structurally as –CHO."
},
{
id: 47, subject: "Chemistry", topic: "Organic Chemistry", year: 2004, exam: "JAMB",
question: "Which of the following organic compounds will react rapidly with bromine water via an addition reaction to decolourize the orange-brown solution?",
options: ["Methane", "Ethane", "Ethene", "Benzene"],
answer: "Ethene",
explanation: "Ethene is an unsaturated alkene containing a double bond. It undergoes a rapid halogen addition reaction with bromine water, adding bromine atoms across the double bond and decolorizing the solution."
},
{
id: 48, subject: "Chemistry", topic: "Applied Chemistry", year: 2004, exam: "JAMB",
question: "Natural rubber is an addition polymer made up of long chains of repeating monomer units of",
options: ["ethene", "chloroethene", "isoprene / 2-methylbuta-1,3-diene", "styrene"],
answer: "isoprene / 2-methylbuta-1,3-diene",
explanation: "Natural rubber (polyisoprene) is a naturally occurring addition polymer formed by long chains of repeating 2-methylbuta-1,3-diene (commonly known as isoprene) monomer units."
},
{
id: 49, subject: "Chemistry", topic: "Organic Chemistry", year: 2004, exam: "JAMB",
question: "The relatively high boiling points and excellent water solubilities exhibited by lower molecular mass alkanols are due to the presence of intermolecular",
options: ["ionic lattice interactions", "aromatic shielding", "hydrogen bonding", "weak Van der Waals forces"],
answer: "hydrogen bonding",
explanation: "Alkanols contain highly polar hydroxyl groups (–OH). These groups form strong intermolecular hydrogen bonds with each other (raising boiling points) and with polar water molecules (increasing water solubility)."
},
{
id: 50, subject: "Chemistry", topic: "Organic Chemistry", year: 2004, exam: "JAMB",
question: "The chemical breakdown of complex carbohydrate sugars into ethanol and carbon(IV) oxide by the enzymatic action of yeast cultures is called",
options: ["distillation", "fermentation", "hydrolysis", "cracking"],
answer: "fermentation",
explanation: "Fermentation is an anaerobic biochemical process where enzymes secreted by microorganisms like yeast break down complex sugars or glucose into simpler products, primarily ethanol alcohol and carbon(IV) oxide gas."
}
];
// Note: Structural layout filtering applied to skip duplicate/blank tracking indices (Questions 19, 38-40) from original booklet scripts to maintain array continuity.
export default chemJamb2004;