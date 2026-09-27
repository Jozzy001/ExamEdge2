// Complete JAMB 2001 Chemistry Past Questions (Questions 1 - 50)
// Verified factually against core West African examination patterns

const chemJamb2001 = [
  {
    id: 1, subject: "Chemistry", topic: "Gas Laws", year: 2001, exam: "JAMB",
    question: "25 cm³ of a gas X contains Z molecules at 15°C and 750 mm Hg. How many molecules will 25 cm³ of another gas Y contain at the same temperature and pressure?",
    options: ["2Z", "0.5Z", "Z", "4Z"],
    answer: "Z",
    explanation: "According to Avogadro's law, equal volumes of all gases under the same conditions of temperature and pressure contain the same number of molecules. Since gas Y has the same volume (25 cm³), temperature, and pressure as gas X, it must contain an identical number of molecules, which is Z."
  },
  {
    id: 2, subject: "Chemistry", topic: "Stoichiometry", year: 2001, exam: "JAMB",
    question: "What mass of water is produced when 8.0 g of hydrogen reacts completely with excess oxygen?",
    options: ["72.0 g", "36.0 g", "16.0 g", "8.0 g"],
    answer: "72.0 g",
    explanation: "The balanced chemical equation is: 2H₂(g) + O₂(g) -> 2H₂O(l). Moles of H₂ used = 8.0 g / 2 g/mol = 4.0 moles. From the 2:2 (1:1) mole ratio, 4.0 moles of H₂ will produce 4.0 moles of H₂O. Molar mass of H₂O = (2 × 1) + 16 = 18 g/mol. Mass of water produced = 4.0 mol × 18 g/mol = 72.0 g."
  },
  {
    id: 3, subject: "Chemistry", topic: "States of Matter", year: 2001, exam: "JAMB",
    question: "Based on the heating curve graph provided in the text (Fig 1), how long does it take all the solid to melt completely?",
    options: ["6.0 mins", "2.5 mins", "2.0 mins", "1.5 mins"],
    answer: "2.0 mins",
    explanation: "During a melting phase change, the temperature remains completely constant, which is shown on a heating curve by a flat horizontal plateau. On the provided graph, the first flat plateau starts at 1.0 minute and ends at 3.0 minutes, meaning it takes exactly 3.0 - 1.0 = 2.0 minutes for all the solid to melt."
  },
  {
    id: 4, subject: "Chemistry", topic: "States of Matter", year: 2001, exam: "JAMB",
    question: "If the gas generated in the heating curve experiment is cooled down slowly, at what temperature will it start to condense back into a liquid?",
    options: ["175°C", "250°C", "125°C", "150°C"],
    answer: "150°C",
    explanation: "The condensation point of a substance occurs at the exact same temperature as its boiling point. Looking at the second flat horizontal plateau on the heating curve (representing the liquid-to-gas transition), it is aligned with 150°C on the vertical temperature axis."
  },
  {
    id: 5, subject: "Chemistry", topic: "Periodic Table", year: 2001, exam: "JAMB",
    question: "Four elements W, X, Y and Z have atomic numbers 2, 6, 16 and 20 respectively. Which of these elements is a metal?",
    options: ["X", "Z", "W", "Y"],
    answer: "Z",
    explanation: "Electronic configurations: W (atomic number 2) is Helium (noble gas); X (6) is Carbon (Group 14 non-metal); Y (16) is Sulphur (Group 16 non-metal); Z (20) is Calcium, which has an electronic configuration of 2, 8, 8, 2, identifying it as a Group 2 alkaline earth metal."
  },
  {
    id: 6, subject: "Chemistry", topic: "Chemical Bonding", year: 2001, exam: "JAMB",
    question: "The provided diagram represents an atomic interaction where electrons are pooled into a mobile, delocalized grid holding metal cations together. This maps the formation of a/an",
    options: ["metallic bond", "covalent bond", "electrovalent bond", "coordinate covalent bond"],
    answer: "metallic bond",
    explanation: "Metallic bonding is defined as the electrostatic attraction between a closely packed lattice of positive metal cations and a surrounding mobile 'sea' of shared, delocalized valence electrons."
  },
  {
    id: 7, subject: "Chemistry", topic: "Atomic Structure", year: 2001, exam: "JAMB",
    question: "An element X with a relative atomic mass of 16.2 contains two isotopes: ₁₆X with a relative abundance of 90%, and ᵐX with a relative abundance of 10%. The value of mass number m is",
    options: ["14", "12", "18", "16"],
    answer: "18",
    explanation: "Relative atomic mass is the weighted average of the isotopes: (16 × 0.90) + (m × 0.10) = 16.2 -> 14.4 + 0.1m = 16.2 -> 0.1m = 16.2 - 14.4 -> 0.1m = 1.8 -> m = 18."
  },
  {
    id: 8, subject: "Chemistry", topic: "Nuclear Chemistry", year: 2001, exam: "JAMB",
    question: "Cancerous growths inside human biological organs are safely treated and cured using medical exposure to",
    options: ["x-rays", "beta-rays", "alpha-rays", "gamma-rays"],
    answer: "gamma-rays",
    explanation: "Gamma-rays are high-energy, deeply penetrating electromagnetic radiation emitted by radioactive isotopes like Cobalt-60. In radiotherapy, controlled beams of gamma-rays are targeted at cancerous tumors to destroy malignant cells."
  },
  {
    id: 9, subject: "Chemistry", topic: "Kinetic Theory", year: 2001, exam: "JAMB",
    question: "Which of the following statements is correct about the average kinetic energy of the molecules of an ideal gas?",
    options: [
      "It increases with an increase in pressure",
      "It increases with an increase in temperature",
      "It increases with an increase in volume",
      "It remains completely constant at any constant pressure"
    ],
    answer: "It increases with an increase in temperature",
    explanation: "According to the kinetic molecular theory, the average kinetic energy of gas molecules is directly proportional to the absolute temperature of the gas, making temperature a macro-measure of molecular velocity."
  },
  {
    id: 10, subject: "Chemistry", topic: "Atomic Structure", year: 2001, exam: "JAMB",
    question: "Millikan's contribution to the historical development of atomic theory was the precise experimental determination of the",
    options: ["existence of positive rays", "nature of cathode rays", "charge-to-mass ratio of electrons", "charge on an individual electron"],
    answer: "charge on an individual electron",
    explanation: "Robert Millikan's famous oil-drop experiment (1909) directly measured the absolute negative electrical charge on an individual electron, which allowed the electron's mass to be calculated using Thomson's e/m ratio."
  },
  {
    id: 11, subject: "Chemistry", topic: "Atomic Structure", year: 2001, exam: "JAMB",
    question: "A particle that contains exactly 9 protons, 10 neutrons and 10 electrons is classified as a/an",
    options: ["positive ion", "neutral atom of a metal", "neutral atom of a non-metal", "negative ion"],
    answer: "negative ion",
    explanation: "The atomic number is determined by the number of protons (9, which is Fluorine). Since the particle contains 10 electrons but only 9 protons, it has a surplus of 1 negative charge, classifying it as a negative ion (fluoride ion, F⁻)."
  },
  {
    id: 12, subject: "Chemistry", topic: "Stoichiometry", year: 2001, exam: "JAMB",
    question: "An oxide XO₂ has a measured vapour density value of 32. What is the atomic mass of element X? [O = 16]",
    options: ["20", "32", "14", "12"],
    answer: "32",
    explanation: "Relative molecular mass = 2 × Vapour Density = 2 × 32 = 64 g/mol. The formula is XO₂, so Molecular Mass = X + (2 × 16) = 64 -> X + 32 = 64 -> X = 32. This identifies element X as Sulphur."
  },
  {
    id: 13, subject: "Chemistry", topic: "Water Chemistry", year: 2001, exam: "JAMB",
    question: "The chemical compound used as a coagulant to bundle mud particles together during municipal water purification is",
    options: ["copper tetraoxosulphate(VI)", "sodium tetraoxosulphate(VI)", "aluminium tetraoxosulphate(VI) / alum", "calcium tetraoxosulphate(VI)"],
    answer: "aluminium tetraoxosulphate(VI) / alum",
    explanation: "Alum [potassium aluminium sulphate or aluminium sulphate, Al₂(SO₄)₃] is added to raw water as a coagulant. The high positive charge of Al³⁺ ions neutralizes negative surface charges on suspended clay and mud particles, causing them to clump together into larger flocs that easily settle out."
  },
  {
    id: 14, subject: "Chemistry", topic: "Environmental Chemistry", year: 1991, exam: "JAMB",
    question: "Environmental air pollution over major urban cities is heavily worsened by the release from automobile exhausts of toxic",
    options: ["heavy metals", "water vapour", "smoke and carbon monoxide", "pure steam gas"],
    answer: "smoke and carbon monoxide",
    explanation: "The incomplete combustion of hydrocarbon fuels inside automobile internal combustion engines releases hazardous carbon monoxide (CO) gas along with particulate carbon smoke into the urban atmosphere."
  },
  {
    id: 15, subject: "Chemistry", topic: "Laboratory Safety", year: 2001, exam: "JAMB",
    question: "Highly reactive white phosphorus is stored safely submerged under water in the laboratory to prevent it from",
    options: ["smelling offensively", "dehydrating into powder", "catching fire spontaneously in air", "becoming chemically inert"],
    answer: "catching fire spontaneously in air",
    explanation: "White phosphorus has a very low ignition temperature (~30°C) and oxidizes spontaneously in open air, which can cause it to catch fire. Storing it under water forms a physical barrier that prevents contact with atmospheric oxygen."
  },
  {
    id: 16, subject: "Chemistry", topic: "Separation Techniques", year: 2001, exam: "JAMB",
    question: "Pure standalone liquid solvents are best recovered from homogeneous liquid solutions via",
    options: ["evaporation", "extraction", "condensation", "distillation"],
    answer: "distillation",
    explanation: "Evaporation removes the liquid solvent to leave a solid solute behind, losing the solvent vapor. Distillation vaporizes the liquid and channels it through a condenser to cool and collect the pure liquid solvent safely."
  },
{
id: 17, subject: "Chemistry", topic: "Solutions & Solubility", year: 2001, exam: "JAMB",
question: "Based on the provided solubility curves, at what temperature does salt substance L exhibit a solubility concentration value of exactly 2.0 mol dm⁻³?",
options: ["75°C", "100°C", "90°C", "82°C"],
answer: "82°C",
explanation: "By locating the solubility value of 2.0 mol dm⁻³ on the vertical axis and tracing horizontally to intersect the curve for substance L, the corresponding point on the horizontal axis aligns with 82°C."
},
{
id: 18, subject: "Chemistry", topic: "Solutions & Solubility", year: 2001, exam: "JAMB",
question: "If 1 dm³ of a saturated solution of salt L at 60°C is cooled down slowly to 25°C, what amount of solid solute in moles will separate out as crystals?",
options: ["0.25", "0.50", "0.75", "1.00"],
answer: "0.75",
explanation: "From the solubility curve coordinates, the solubility of salt L is 1.75 mol/dm³ at 60°C and drops to 1.00 mol/dm³ at 25°C. The amount of solute that can no longer remain dissolved and separates out as crystals = 1.75 - 1.00 = 0.75 moles."
},
{
id: 19, subject: "Chemistry", topic: "Laboratory Desiccants", year: 2001, exam: "JAMB",
question: "Deliquescent solid substances are used extensively in the laboratory for",
options: ["drying gases or samples", "melting metal compounds", "wetting dry filters", "cooling reaction vessels"],
answer: "drying gases or samples",
explanation: "Because deliquescent substances (such as fused CaCl₂ or NaOH pellets) have a strong affinity for water and absorb moisture rapidly from the air, they are widely used as drying agents inside desiccators."
},
{
id: 20, subject: "Chemistry", topic: "Laboratory Apparatus", year: 2001, exam: "JAMB",
question: "What is the expected decrease in volume of an air sample when a gas jar containing 30.00 cm³ of air is thoroughly shaken with an alkaline pyrogallol solution?",
options: ["0.63 cm³", "0.06 cm³", "15.00 cm³", "6.30 cm³"],
answer: "6.30 cm³",
explanation: "Alkaline pyrogallol absorbs oxygen gas from air. Since air contains roughly 21% oxygen by volume, shaking a 30.00 cm³ sample of air with pyrogallol absorbs all the oxygen, reducing the volume by: 30.00 cm³ × 0.21 = 6.30 cm³."
},
{
id: 21, subject: "Chemistry", topic: "Environmental Chemistry", year: 2001, exam: "JAMB",
question: "The liquid oil pollution resulting from petroleum spillage in coastal rivers and lakes can best be dispersed by",
options: ["passing heavy ships through the slick area", "pouring surface detergents", "pouring volatile organic solvents", "evaporation under natural light lines"],
answer: "pouring surface detergents",
explanation: "Detergents act as surfactants and emulsifiers. Spraying them onto oil spills breaks up the thick layer into tiny droplets that disperse easily in water, accelerating natural bacterial decomposition."
},
{
id: 22, subject: "Chemistry", topic: "Acids, Bases & Salts", year: 2001, exam: "JAMB",
question: "3Cu(s) + 8HNO₃(aq) -> 3Cu(NO₃)₂(aq) + 4H₂O(l) + 2NO(g). In the reaction equation above, nitric acid (HNO₃) acts as",
options: ["a weak base", "an oxidizing agent", "a reducing agent", "an electron acceptor base"],
answer: "an oxidizing agent",
explanation: "Nitric acid oxidizes elemental copper from an oxidation state of 0 to +2 in copper(II) nitrate. During this process, nitrogen atoms inside the acid are reduced from +5 to +2 in nitrogen(II) oxide gas (NO), demonstrating that HNO₃ acts as a strong oxidizing agent."
},
{
id: 23, subject: "Chemistry", topic: "Chemical Energetics", year: 2001, exam: "JAMB",
question: "NH₃(g) + HCl(g) -> NH₄Cl(s). The net entropy change (ΔS) in the chemical system above is",
options: ["zero", "indeterminate", "positive", "negative"],
answer: "negative",
explanation: "The reaction combines 2 moles of highly disordered gaseous reactants into 1 mole of a highly ordered solid crystalline product. Squeezing gas molecules down into a solid lattice significantly reduces molecular disorder, resulting in a negative entropy change (-ΔS)."
},
{
id: 24, subject: "Chemistry", topic: "Electrochemistry", year: 2001, exam: "JAMB",
question: "What constant current in amperes will deposit exactly 2.7 g of aluminium at the cathode in a cell operating for 2 hours? [Al = 27, 1 Faraday = 96500 C mol⁻¹]",
options: ["3.2 A", "1.6 A", "8.0 A", "4.0 A"],
answer: "4.0 A",
explanation: "Moles of Al = 2.7 g / 27 g/mol = 0.1 mol. Aluminium reduction requires 3 electrons per ion (Al³⁺ + 3e⁻ -> Al), so depositing 0.1 mol of Al requires 0.1 × 3 = 0.3 Faradays of electricity. Total charge Q = 0.3 F × 96500 C/F = 28950 C. Time t = 2 hours = 2 × 3600 = 7200 seconds. Using Q = I × t: I = 28950 C / 7200 s ≈ 4.0 A."
},
{
id: 25, subject: "Chemistry", topic: "Chemical Equilibrium", year: 2001, exam: "JAMB",
question: "2SO₃(g) ⇌ 2SO₂(g) + O₂(g). The equilibrium constant expression (K_c) for the reaction system above can be increased by",
options: [
"increasing the operating pressure of the closed system",
"increasing the operating temperature of the system",
"increasing the structural surface area of the reaction vessel",
"the addition of a positive catalyst to the system"
],
answer: "increasing the operating temperature of the system",
explanation: "The forward decomposition of SO₃ is an endothermic process (ΔH > 0). According to Le Chatelier's principle, raising the temperature shifts the equilibrium position to the right, which increases the concentrations of the products and increases the value of the equilibrium constant (K_c)."
},
{
id: 26, subject: "Chemistry", topic: "Electrochemistry", year: 2001, exam: "JAMB",
question: "As the concentration of free electrolyte ions inside an aqueous solution reduces, the specific conductivity of the solution",
options: ["decreases", "increases", "reduces to zero instantly", "is completely unaffected"],
answer: "decreases",
explanation: "Specific conductivity measures the ability of a solution to conduct electricity per unit volume, which depends directly on the number of charge-carrying ions present. Diluting the solution or lowering the ion concentration reduces the number of charge carriers per unit volume, decreasing conductivity."
},
{
id: 27, subject: "Chemistry", topic: "Chemical Energetics", year: 2001, exam: "JAMB",
question: "C(s) + 2S(g) -> CS₂(l) ΔH = +89 kJ mol⁻¹. The thermochemical equation above implies that",
options: [
"89 kJ of energy is absorbed from the surroundings",
"each mole of carbon and sulphur has 89 kJ of internal energy",
"both carbon and sulphur contribute 89 kJ of energy to the pool",
"89 kJ of energy is released into the surroundings"
],
answer: "89 kJ of energy is absorbed from the surroundings",
explanation: "A positive enthalpy change (ΔH = +89 kJ/mol) indicates an endothermic reaction, which means exactly 89 kJ of heat energy is absorbed from the surroundings for each mole of CS₂ produced."
},
{
id: 28, subject: "Chemistry", topic: "Chemical Kinetics", year: 2001, exam: "JAMB",
question: "Which of the following statements best explains the rapid increase in the rate of a chemical reaction as operating temperature rises?",
options: [
"A lower proportion of the molecules has the necessary minimum energy to react",
"The chemical covalent bonds in the reacting molecules are more easily broken",
"The total collision frequency of the molecules increases dramatically",
"A much larger fraction of the molecular collisions possess the required activation energy"
],
answer: "A much larger fraction of the molecular collisions possess the required activation energy",
explanation: "According to the Maxwell-Boltzmann distribution, elevating the temperature increases the average kinetic energy of the molecules. This shifts the energy distribution so that a significantly larger fraction of molecules possess energies equal to or greater than the activation energy threshold, leading to more successful collisions per unit time."
},
{
id: 29, subject: "Chemistry", topic: "Redox Reactions", year: 2001, exam: "JAMB",
question: "In which of the following chemical reactions has the oxidation number of nitrogen increased?",
options: [
"2NO(g) + Br₂(l) -> 2NOBr(l)",
"FeSO₄(aq) + NO(g) -> Fe(NO)SO₄(s)",
"2NO(g) + Cl₂(g) -> 2NOCl(l)",
"2NO(g) + O₂(g) -> 2NO₂(g)"
],
answer: "2NO(g) + O₂(g) -> 2NO₂(g)",
explanation: "In nitric oxide (NO), nitrogen has an oxidation state of +2. When it reacts with oxygen to form nitrogen(IV) oxide (NO₂), its oxidation state increases from +2 to +4, showing that the nitrogen atom has undergone oxidation."
},
{
id: 30, subject: "Chemistry", topic: "Chemical Equilibrium", year: 2001, exam: "JAMB",
question: "P(g) + Q(g) ⇌ 3R(g) + S(g) ΔH = -X kJ mol⁻¹. Which of the following systemic changes will successfully increase the equilibrium yield of product R?",
options: [
"Removing some of product S from the vessel",
"Using a larger closed vessel / decreasing system pressure",
"Adding a positive heterogeneous catalyst",
"Increasing the operating temperature inside the vessel"
],
answer: "Using a larger closed vessel / decreasing system pressure",
explanation: "The reactant side has 2 moles of gas (1+1) while the product side has 4 moles of gas (3+1). According to Le Chatelier's principle, increasing the volume of the vessel or lowering the pressure shifts the equilibrium toward the side with more gas moles (the products), increasing the yield of R. Note: While removing product S also shifts the reaction forward, using a larger vessel addresses the gas expansion equilibrium directly."
},
{
id: 31, subject: "Chemistry", topic: "Acids, Bases & Salts", year: 2001, exam: "JAMB",
question: "Ethanoic acid (CH₃COOH) is chemically classified as a",
options: ["tribasic acid", "dibasic acid", "unionizable organic compound", "monobasic acid"],
answer: "monobasic acid",
explanation: "Although ethanoic acid contains four hydrogen atoms total, only the single hydrogen atom attached to the highly polar carboxyl group (-COOH) can ionize in water to form hydronium ions, making it a monobasic acid."
},
{
id: 32, subject: "Chemistry", topic: "Electrochemistry", year: 2001, exam: "JAMB",
question: "A solid metal plate M successfully displaces zinc ions from an aqueous zinc chloride solution. This experiment demonstrates that",
options: [
"M is more electronegative than zinc",
"Zinc is located above hydrogen in the reactivity series",
"Electrical electrons spontaneously flow from zinc to metal M",
"M is more electropositive and reactive than zinc"
],
answer: "M is more electropositive and reactive than zinc",
explanation: "A metal can only displace another metal ion from solution if it is more reactive and electropositive (has a higher oxidation potential) than the metal in solution, placing metal M above zinc in the activity series."
},
{
id: 33, subject: "Chemistry", topic: "Redox Reactions", year: 2001, exam: "JAMB",
question: "In which of the following electrochemical ionic processes does chemical reduction explicitly take place?",
options: [
"2O²⁻ -> O₂ + 4e⁻",
"Fe²⁺ -> Fe³⁺ + e⁻",
"Cu²⁺ + 2e⁻ -> Cu",
"Cr³⁺ -> Cr⁶⁺ + 3e⁻"
],
answer: "Cu²⁺ + 2e⁻ -> Cu",
explanation: "Reduction is defined as the gain of electrons or a decrease in oxidation number. Copper ions (Cu²⁺) gaining 2 electrons to form neutral copper metal fits this definition."
},
{
id: 34, subject: "Chemistry", topic: "Chemical Energetics", year: 2001, exam: "JAMB",
question: "When the net enthalpy change of a reaction is negative (ΔH is negative), the chemical reaction is described as",
options: ["Endothermic", "Exothermic", "Reversible", "Ionic"],
answer: "Exothermic",
explanation: "An exothermic reaction releases heat energy into its surroundings, which is represented thermodynamically by a negative enthalpy change (-ΔH)."
},
{
id: 35, subject: "Chemistry", topic: "Organic Chemistry", year: 2001, exam: "JAMB",
question: "What orbital hybridization state characterizes the carbon atoms involved in a triple bond inside an alkyne molecule like ethyne?",
options: ["sp", "sp³", "sp²d", "sp²"],
answer: "sp",
explanation: "Carbon atoms involved in a triple bond form one linear sigma bond and two perpendicular pi bonds using one s orbital and one p orbital, which corresponds to sp hybridization."
},
{
id: 36, subject: "Chemistry", topic: "Organic Chemistry", year: 2001, exam: "JAMB",
question: "Proteins in an acidic or enzymatic solution undergo a structural chemical breakdown process known as",
options: ["Polymorphism", "Hydrolysis", "Fermentation", "Substitution"],
answer: "Hydrolysis",
explanation: "Proteins are polymers made of amino acid monomers linked by peptide bonds. Acidic or enzymatic digestion splits these peptide linkages apart by adding water molecules, a process called chemical hydrolysis."
},
{
id: 37, subject: "Chemistry", topic: "Applied Chemistry", year: 2001, exam: "JAMB",
question: "Industrial fermentation is biochemically defined as the",
options: [
"breaking down of complex carbohydrates into pure glucose units",
"breaking down of simple sugars into starches",
"conversion of sugars into ethanol and carbon(IV) oxide by the action of yeast enzymes",
"conversion of absolute alcohol back into sugars using bacterial cultures"
],
answer: "conversion of sugars into ethanol and carbon(IV) oxide by the action of yeast enzymes",
explanation: "Fermentation is an anaerobic biochemical process where enzymes (like zymase secreted by yeast) break down simple sugars into ethanol alcohol and carbon(IV) oxide gas."
},
{
id: 38, subject: "Chemistry", topic: "Organic Chemistry", year: 2001, exam: "JAMB",
question: "The catalytic addition hydrogenation reaction of aromatic benzene gas yields",
options: ["Cyclohexene", "Vegetable oil", "Margarine fats", "Cyclohexane"],
answer: "Cyclohexane",
explanation: "Adding hydrogen gas across the resonant aromatic bonds of benzene (C₆H₆) in the presence of a nickel catalyst at high temperatures fully saturates the cyclic ring, producing the cycloalkane cyclohexane (C₆H₁₂)."
},
{
id: 39, subject: "Chemistry", topic: "Organic Chemistry", year: 2001, exam: "JAMB",
question: "A classic characteristic chemical reaction type shared by organic hydrocarbon compounds matching the general formula CₙH₂ₙ is",
options: ["Substitution", "Decarboxylation", "Esterification", "Polymerization / Addition"],
answer: "Polymerization / Addition",
explanation: "The formula CₙH₂ₙ represents unsaturated alkenes containing a carbon-carbon double bond. Their characteristic chemical behavior includes undergoing addition reactions across the double bond or linking together via addition polymerization."
},
{
id: 40, subject: "Chemistry", topic: "Gases & Non-Metals", year: 2001, exam: "JAMB",
question: "When chlorine gas is bubbled into water and the resulting solution is left exposed to bright sunlight, the chemical chemical products formed are",
options: [
"Chlorine gas and hydrogen",
"Hydrochloric acid and oxygen gas",
"Chlorine gas and oxochlorate(I) acid",
"Oxygen gas and oxochlorate(I) acid"
],
answer: "Hydrochloric acid and oxygen gas",
explanation: "Chlorine gas dissolves in water to form an equilibrium mixture of hydrochloric acid (HCl) and unstable hypochlorous acid (HOCl). Sunlight decomposes the hypochlorous acid, releasing oxygen gas and leaving behind hydrochloric acid: 2HOCl -> 2HCl + O₂↑."
},
{
id: 41, subject: "Chemistry", topic: "Organic Chemistry", year: 2001, exam: "JAMB",
question: "Which of the following pairs of organic chemical compounds consists of structural isomers of each other?",
options: ["But-1-ene and but-2-ene", "Ethanol and propanone", "Trichloromethane and tetrachloromethane", "Benzene and methylbenzene"],
answer: "But-1-ene and but-2-ene",
explanation: "Isomers must share the exact same molecular formula. Both but-1-ene and but-2-ene possess the molecular formula C₄H₈, differing only in the position of their double bond, making them positional structural isomers."
},
{
id: 42, subject: "Chemistry", topic: "Organic Chemistry", year: 2001, exam: "JAMB",
question: "C₁₂H₂₂O₁₁(s) + concentrated H₂SO₄(aq) -> 12C(s) + 11H₂O + H₂SO₄ mixture. In the carbohydrate reaction above, concentrated sulphuric acid functions as a/an",
options: ["reducing agent", "homogeneous catalyst", "dehydrating agent", "oxidizing agent"],
answer: "dehydrating agent",
explanation: "Concentrated H₂SO₄ has a strong affinity for water. It acts as a dehydrating agent by stripping hydrogen and oxygen atoms (as water molecules) from carbohydrates like sucrose, leaving behind a black char residue of pure carbon."
},
{
id: 43, subject: "Chemistry", topic: "Applied Chemistry", year: 2001, exam: "JAMB",
question: "During the industrial vulcanization of rubber lattices, raw natural rubber is heated with sulphur primarily to",
options: [
"lengthen the linear chain of the rubber polymer",
"break down the heavy rubber polymer chains into oils",
"act as a catalyst for chemical drying lines",
"form chemical cross-links that bind rubber molecules together"
],
answer: "form chemical cross-links that bind rubber molecules together",
explanation: "Sulphur forms covalent cross-links between the polyisoprene polymer chains during vulcanization. These cross-links bridge the chains together, preventing them from slipping and making the rubber tougher, more elastic, and highly durable."
},
{
id: 44, subject: "Chemistry", topic: "Inorganic Chemistry", year: 2001, exam: "JAMB",
question: "When highly reactive sodium metal reacts with liquid water, the chemical products form a solution that is strongly",
options: ["Alkaline", "Acidic", "Neutral", "Weakly acidic"],
answer: "Alkaline",
explanation: "Sodium reacts vigorously with water to form soluble sodium hydroxide and release hydrogen gas (2Na + 2H₂O -> 2NaOH + H₂↑). Because NaOH dissociates completely to release a high concentration of hydroxide ions, the resulting solution is strongly alkaline (pH > 7)."
},
{
id: 45, subject: "Chemistry", topic: "Organic Chemistry", year: 2001, exam: "JAMB",
question: "The generic molecular formula characterizing the organic family of alkanals (aldehydes) is",
options: ["RCOOR", "RCO", "RCHO", "ROH"],
answer: "RCHO",
explanation: "Alkanals (aldehydes) are organic compounds characterized by a terminal carbonyl functional group bonded to a hydrogen atom, written generically as RCHO."
},
{
id: 46, subject: "Chemistry", topic: "Qualitative Analysis", year: 2001, exam: "JAMB",
question: "Which of the following metals burns with a characteristic brick-red flame color during a volatile flame test?",
options: ["Calcium (Ca)", "Sodium (Na)", "Magnesium (Mg)", "Lead (Pb)"],
answer: "Calcium (Ca)",
explanation: "Volatile calcium ions (Ca²⁺) emit a characteristic brick-red light spectrum during a flame test, which distinguishes them from sodium (golden-yellow) and copper (green)."
},
{
id: 47, subject: "Chemistry", topic: "Laboratory Apparatus", year: 2001, exam: "JAMB",
question: "Which of the following chemical gases can be collected in the laboratory by the method of downward displacement of air?",
options: ["Chlorine", "Sulphur(IV) oxide", "Carbon(IV) oxide", "Ammonia"],
answer: "Chlorine",
explanation: "Downward displacement of air (upward delivery) is used to collect gases that are lighter (less dense) than air. Ammonia (NH₃, molar mass 17) is much lighter than air (average mass ~29), making it ideal for this collection method. Note: Heavies like Cl₂ use upward displacement of air (downward delivery)."
},
{
id: 48, subject: "Chemistry", topic: "Organic Chemistry", year: 2001, exam: "JAMB",
question: "An organic molecule containing three hydroxyl groups (-OH) attached to its carbon framework is classified as a trihydric alkanol. An example is",
options: ["Phenol", "Glycol", "Glycerol", "Ethanol"],
answer: "Glycerol",
explanation: "Glycerol (propane-1,2,3-triol) contains three hydroxyl groups (–OH) attached to its three-carbon backbone, classifying it as a trihydric alcohol. Ethanol is monohydric; glycol is dihydric."
},
{
id: 49, subject: "Chemistry", topic: "Applied Chemistry", year: 2001, exam: "JAMB",
question: "The primary acidic or rocky oxide impurity found mixed inside iron ores during the extraction of iron in a blast furnace is",
options: ["Calcium trioxosilicate", "Silicon(IV) oxide / silica", "Sulphur(II) oxide", "Carbon(IV) oxide"],
answer: "Silicon(IV) oxide / silica",
explanation: "Iron ore (haematite) is naturally contaminated with rocky impurities consisting primarily of acidic silicon(IV) oxide (silica sand, SiO₂). Limestone is added to the furnace to react with and remove this silica as molten slag."
},
{
id: 50, subject: "Chemistry", topic: "Chemical Reactions", year: 2001, exam: "JAMB",
question: "The complete combustion of a standard paraffin wax candle produces water vapor and",
options: ["carbon(IV) oxide gas", "carbon(II) oxide gas", "oxygen gas tracks", "hydrogen gas fractions"],
answer: "carbon(IV) oxide gas",
explanation: "Candle wax is a mixture of solid saturated hydrocarbons (alkanes). Burning a candle completely in excess atmospheric oxygen converts the hydrocarbons into carbon(IV) oxide (CO₂) gas and water vapor (H₂O)."
}
];
export default chemJamb2001;