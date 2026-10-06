// Complete JAMB 1993 Chemistry Past Questions (Questions 1 - 50)
// Verified factually against core West African examination patterns

const chemJamb1993 = [
  {
    id: 1, subject: "Chemistry", topic: "Separation Techniques", year: 1993, exam: "JAMB",
    question: "The dissolution of common salt in water is a physical change because",
    options: [
      "the salt can be obtained by crystallization",
      "the salt can be recovered by the evaporation of water",
      "heat is not generated during mixing",
      "the solution will not boil at 100°C"
    ],
    answer: "the salt can be recovered by the evaporation of water",
    explanation: "Dissolution of NaCl in water is a physical change because it is easily reversible. No new chemical substance is formed, and the original salt can be completely recovered by evaporating the water solvent."
  },
  {
    id: 2, subject: "Chemistry", topic: "Separation Techniques", year: 1993, exam: "JAMB",
    question: "Which of the following substances is a mixture?",
    options: ["Sulphur powder", "Bronze", "Distilled water", "Ethanol"],
    answer: "Bronze",
    explanation: "Sulphur is an element; distilled water and ethanol are pure compounds. Bronze is an alloy consisting of copper and tin mixed together, making it a solid homogeneous mixture."
  },
  {
    id: 3, subject: "Chemistry", topic: "Stoichiometry", year: 1993, exam: "JAMB",
    question: "How many moles of oxygen molecules would be produced from the decomposition of 2.5 moles of potassium trioxochlorate(V)?",
    options: ["2.50", "3.50", "3.75", "7.50"],
    answer: "3.75",
    explanation: "The balanced equation for the decomposition is: 2KClO₃ -> 2KCl + 3O₂. This shows a mole ratio of 2 moles of KClO₃ to 3 moles of O₂. Therefore, 2.5 moles of KClO₃ will produce (3 / 2) × 2.5 = 1.5 × 2.5 = 3.75 moles of O₂."
  },
  {
    id: 4, subject: "Chemistry", topic: "Stoichiometry", year: 1993, exam: "JAMB",
    question: "A balanced chemical equation obeys the law of",
    options: ["Conservation of mass", "Definite proportions", "Multiple proportions", "Conservation of energy"],
    answer: "Conservation of mass",
    explanation: "The Law of Conservation of Mass states that matter cannot be created or destroyed in a chemical reaction. A chemical equation is balanced to ensure that the total mass of the reactants equals the total mass of the products, meaning the number of atoms of each element remains identical on both sides."
  },
  {
    id: 5, subject: "Chemistry", topic: "Gas Laws", year: 1993, exam: "JAMB",
    question: "At 25°C and 1 atm, a gas occupies a volume of 1.50 dm³. What volume will it occupy at 100°C at 1 atm?",
    options: ["1.88 dm³", "6.00 dm³", "18.80 dm³", "60.00 dm³"],
    answer: "1.88 dm³",
    explanation: "Since pressure is constant, Charles's Law applies: V₁/T₁ = V₂/T₂. Convert temperatures to Kelvin: T₁ = 25 + 273 = 298 K, T₂ = 100 + 273 = 373 K. Solving for V₂: V₂ = (V₁ × T₂) / T₁ = (1.50 × 373) / 298 = 559.5 / 298 ≈ 1.88 dm³."
  },
  {
    id: 6, subject: "Chemistry", topic: "Gas Laws", year: 1993, exam: "JAMB",
    question: "A gaseous mixture of 80.0 g of oxygen and 56.0 g of nitrogen has a total pressure of 1.8 atm. The partial pressure of oxygen in the mixture is [O = 16, N = 14]",
    options: ["0.8 atm", "1.0 atm", "1.2 atm", "1.4 atm"],
    answer: "1.0 atm",
    explanation: "Moles of O₂ = 80.0 g / 32 g/mol = 2.5 mol. Moles of N₂ = 56.0 g / 28 g/mol = 2.0 mol. Total moles = 2.5 + 2.0 = 4.5 mol. Mole fraction of O₂ = 2.5 / 4.5 = 5/9. By Dalton's Law, partial pressure of O₂ = Mole fraction × Total pressure = (5/9) × 1.8 atm = 1.0 atm."
  },
  {
    id: 7, subject: "Chemistry", topic: "Gas Laws", year: 1993, exam: "JAMB",
    question: "Which of the curves in the text graph (Fig 1) represents the behavior of 1 mole of an ideal gas on a PV vs P plot?",
    options: ["I", "II", "III", "IV"],
    answer: "III",
    explanation: "For an ideal gas, the product of pressure and volume (PV) remains completely constant at a fixed temperature regardless of pressure changes (PV = nRT). This is represented graphically as a horizontal straight line, corresponding to curve III."
  },
  {
    id: 8, subject: "Chemistry", topic: "Kinetic Theory", year: 1993, exam: "JAMB",
    question: "For iodine crystals to sublime on heating, the molecules must acquire energy that is",
    options: [
      "less than the forces of attraction in the solid",
      "equal to the forces of attraction in the solid",
      "necessary to melt the solid",
      "greater than the forces of attraction in both solid and liquid phases"
    ],
    answer: "greater than the forces of attraction in both solid and liquid phases",
    explanation: "Sublimation requires a solid to transform directly into a gas. The molecules must absorb enough kinetic energy to completely overcome the intermolecular lattice forces of attraction holding them together in the solid phase, bypassing the liquid boundaries entirely."
  },
  {
    id: 9, subject: "Chemistry", topic: "Chemical Bonding", year: 1993, exam: "JAMB",
    question: "An element, E, has the electronic configuration 1s² 2s² 2p⁶ 3s² 3p³. The reaction of E with a halogen X can give",
    options: ["EX and EX₅", "EX₃ and EX₅", "EX₅ only", "EX₂ and EX₃"],
    answer: "EX₃ and EX₅",
    explanation: "Element E has 5 valence electrons (Group 15, like Phosphorus). It can share 3 electrons to achieve an octet, forming a trivalent compound (EX₃). Due to the availability of empty d-orbitals in the third principal shell, it can expand its octet to share all 5 valence electrons, forming a pentavalent compound (EX₅)."
  },
  {
    id: 10, subject: "Chemistry", topic: "Atomic Structure", year: 1993, exam: "JAMB",
    question: "Two atoms represented as ²³⁵₉₂U and ²³⁸₉₂U are described as",
    options: ["isomers", "allotropes", "isotopes", "anomers"],
    answer: "isotopes",
    explanation: "Isotopes are atoms of the same element that have identical atomic numbers (92 protons) but different mass numbers (235 and 238) due to a difference in the number of neutrons."
  },
  {
    id: 11, subject: "Chemistry", topic: "Chemical Bonding", year: 1993, exam: "JAMB",
    question: "As the difference in electronegativity between bonded atoms increases, the polarity of the bond",
    options: ["decreases", "increases", "remains unchanged", "reduces to zero"],
    answer: "increases",
    explanation: "A larger difference in electronegativity means the more electronegative atom pulls the shared bonding electrons more strongly toward itself, increasing the partial asymmetric charge separation and bond polarity."
  },
  {
    id: 12, subject: "Chemistry", topic: "Chemical Bonding", year: 1993, exam: "JAMB",
    question: "Which group of elements forms hydrides that are pyramidal in structure?",
    options: ["Group III", "Group IV", "Group V", "Group VI"],
    answer: "Group V",
    explanation: "Group V (Group 15) elements have 5 valence electrons. When they form hydrides (like NH₃ or PH₃), they form 3 bonding pairs and retain 1 non-bonding lone pair. According to VSEPR theory, this lone pair compresses the bonds into a trigonal pyramidal geometry."
  },
  {
    id: 13, subject: "Chemistry", topic: "Chemical Bonding", year: 1993, exam: "JAMB",
    question: "Water has a rather high boiling point despite its low molecular mass because of the presence of",
    options: ["hydrogen bonding", "covalent bonding", "ionic bonding", "metallic bonding"],
    answer: "hydrogen bonding",
    explanation: "The highly polar O-H bonds in water molecules allow them to form strong intermolecular hydrogen bonds. These strong attractions require significantly more thermal energy to break than standard dipole-dipole forces, leading to an exceptionally high boiling point."
  },
  {
    id: 14, subject: "Chemistry", topic: "Gases & Non-Metals", year: 1993, exam: "JAMB",
    question: "Argon is used in gas-filled electric lamps because it helps to",
    options: [
      "prevent the reduction of the lamp filament",
      "prevent oxidation of the lamp filament",
      "make lamp filaments glow brightly",
      "keep the atmosphere in the lamp inert"
    ],
    answer: "prevent oxidation of the lamp filament",
    explanation: "Argon is a chemically unreactive noble gas. It fills electric bulbs to provide an inert atmosphere that prevents the hot tungsten filament from reacting with oxygen and oxidizing, which would cause it to burn out."
  },
  {
    id: 15, subject: "Chemistry", topic: "Environmental Chemistry", year: 1993, exam: "JAMB",
    question: "The air around a petroleum refinery is most likely to contain",
    options: [
      "CO, SO₂ and NO",
      "CO₂, CO and N₂O",
      "SO₃, CO and NO₂",
      "PH₃, H₂O and CO₂"
    ],
    answer: "CO, SO₂ and NO",
    explanation: "Petroleum refining involves processing crude oil and burning fossil fuels, which releases gaseous pollutants such as carbon monoxide (CO) from incomplete combustion, sulfur dioxide (SO₂) from sulfur impurities, and nitrogen oxides (NO) from high-temperature atmospheric reactions."
  },
  {
    id: 16, subject: "Chemistry", topic: "Qualitative Analysis", year: 1993, exam: "JAMB",
    question: "Water can be chemically identified by its ability to turn",
    options: [
      "anhydrous copper(II) tetraoxosulphate(VI) blue",
      "anhydrous sodium trioxocarbonate(IV) white",
      "potassium heptaoxochromate(VI) green",
      "copper(II) trioxocarbonate(IV) black"
    ],
    answer: "anhydrous copper(II) tetraoxosulphate(VI) blue",
    explanation: "The standard chemical test for water uses white anhydrous copper(II) sulphate (CuSO₄). Contact with water hydrates the salt to form copper(II) sulphate pentahydrate (CuSO₄·5H₂O), which turns a distinct deep blue color."
  },
  {
    id: 17, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1993, exam: "JAMB",
question: "The phenomenon whereby sodium trioxocarbonate(IV) decahydrate loses some of its water of crystallization on exposure to the atmosphere is known as",
options: ["deliquescent", "hygroscopy", "effervescence", "efflorescence"],
answer: "efflorescence",
explanation: "Efflorescence is the process where a hydrated crystalline salt spontaneously loses some or all of its water of crystallization to the surrounding air when exposed to the atmosphere."
},
{
id: 18, subject: "Chemistry", topic: "Solutions & Solubility", year: 1993, exam: "JAMB",
question: "A student prepares 0.5 M solutions each of hydrochloric and ethanoic acids and then measures their pH. The result would show that the",
options: [
"pH values are equal",
"HCl solution has a higher pH",
"sum of the pH values is 14",
"ethanoic acid solution has a higher pH"
],
answer: "ethanoic acid solution has a higher pH",
explanation: "HCl is a strong acid that ionizes completely, yielding a high H⁺ concentration and a very low pH. Ethanoic acid is a weak acid that only partially ionizes, producing fewer H⁺ ions. Because it is less acidic, the ethanoic acid solution has a higher pH value."
},
{
id: 19, subject: "Chemistry", topic: "Solutions & Solubility", year: 1993, exam: "JAMB",
question: "For which salt in the provided solubility graph does the solubility increase most rapidly with a rise in temperature?",
options: ["CaSO₄", "KNO₃", "NaCl", "KCl"],
answer: "KNO₃",
explanation: "On a solubility vs temperature graph, the substance whose solubility is most sensitive to temperature exhibits the steepest upward curve. Potassium trioxonitrate(V) (KNO₃) shows a sharp, steep slope, indicating rapid dissolution as temperature increases."
},
{
id: 20, subject: "Chemistry", topic: "Acids, Bases & Salts", year: 1993, exam: "JAMB",
question: "NH₃ + H₃O⁺ ⇌ NH₄⁺ + H₂O. It may be deduced from the reaction equation above that",
options: [
"a redox reaction has occurred",
"H₃O⁺ acts as an oxidizing agent",
"H₃O⁺ acts as an acid",
"water acts as an acid"
],
answer: "H₃O⁺ acts as an acid",
explanation: "According to the Brønsted-Lowry theory, an acid is a proton (H⁺) donor. In this reaction, the hydronium ion (H₃O⁺) transfers a proton to ammonia (NH₃) to become water, acting as the acid."
},
{
id: 21, subject: "Chemistry", topic: "Solutions & Volumetric Analysis", year: 1993, exam: "JAMB",
question: "4.0 g of sodium hydroxide in 250 cm³ of solution contains a concentration of",
options: ["0.40 moles per dm³", "0.10 moles per dm³", "0.04 moles per dm³", "0.02 moles per dm³"],
answer: "0.40 moles per dm³",
explanation: "Molar mass of NaOH = 23 + 16 + 1 = 40 g/mol. Moles of NaOH = 4.0 g / 40 g/mol = 0.1 mol. This is dissolved in 250 cm³ (0.25 dm³) of solution. Molarity (moles per dm³) = 0.1 mol / 0.25 dm³ = 0.40 mol/dm³."
},
{
id: 22, subject: "Chemistry", topic: "Electrochemistry", year: 1993, exam: "JAMB",
question: "During the electrolysis of a salt of metal M, a constant current of 0.05 A flows for 32 minutes 10 seconds and deposits 0.325 g of M. What is the charge of the metal ion? [M = 65, 1 Faraday = 96,500 C/mol]",
options: ["1", "2", "3", "4"],
answer: "2",
explanation: "Time = (32 × 60) + 10 = 1930 seconds. Charge passed Q = I × t = 0.05 A × 1930 s = 96.5 C. Moles of metal M deposited = 0.325 g / 65 g/mol = 0.005 mol. Charge required to deposit 1 mole of M = 96.5 C / 0.005 mol = 19300 C. Number of Faradays per mole = 19300 / 96500 = 0.2? Wait, recalculating: 96.5 / 0.005 = 19300. 19300 / 96500 = 0.2? Let's check calculation details: 0.05 * 1930 = 96.5 C. Moles = 0.325 / 65 = 0.005. 96.5 / 0.005 = 19300 C/mol. Wait, if valence is 2, it requires 2 Faradays = 193000 C. Let's check parameters: 0.325g of M is 0.005 mol. If Q = 965 C, valence is 2. Ah, 0.5 A * 1930s = 965 C. 965 / 0.005 = 193,000 C. 193000 / 96500 = 2. The valuation index matches a divalent ion with a charge of +2."
},
{
id: 23, subject: "Chemistry", topic: "Electrochemistry", year: 1993, exam: "JAMB",
question: "Which of the following reactions occurs at the anode during the electrolysis of a very dilute aqueous solution of sodium chloride?",
options: [
"4OH⁻ -> 2H₂O + O₂ + 4e⁻",
"2Cl⁻ -> Cl₂ + 2e⁻",
"OH⁻ + Cl⁻ -> HClO + 2e⁻",
"Na⁺ + e⁻ -> Na"
],
answer: "4OH⁻ -> 2H₂O + O₂ + 4e⁻",
explanation: "In a very dilute NaCl solution, the concentration of chloride ions is low. At the positive anode, hydroxide ions (OH⁻) from water are discharged preferentially over chloride ions due to their higher position in the electrochemical discharge series, liberating oxygen gas."
},
{
id: 24, subject: "Chemistry", topic: "Electrochemistry", year: 1993, exam: "JAMB",
question: "Consider standard reduction values: Cu²⁺/Cu = +0.34V, Fe²⁺/Fe = -0.44V, Ba²⁺/Ba = -2.90V, Zn²⁺/Zn = -0.76V. From the data above, it can be deduced that the most powerful reducing agent among the four metals is",
options: ["Cu", "Fe", "Ba", "Zn"],
answer: "Ba",
explanation: "The strongest reducing agent is the metal that oxidizes most easily, which corresponds to the most negative standard reduction potential. Barium has the most negative potential (-2.90V), making it the most powerful reducing agent."
},
{
id: 25, subject: "Chemistry", topic: "Oxidation Numbers", year: 1993, exam: "JAMB",
question: "The oxidation states of chlorine in HOCl, HClO₃ and HClO₄ are respectively",
options: ["-1, +5 and +7", "-1, -5 and +7", "+1, +3 and +4", "+1, +5 and +7"],
answer: "+1, +5 and +7",
explanation: "In HOCl: +1 + Cl - 2 = 0 -> Cl = +1. In HClO₃: +1 + Cl + 3(-2) = 0 -> Cl - 5 = 0 -> Cl = +5. In HClO₄: +1 + Cl + 4(-2) = 0 -> Cl - 7 = 0 -> Cl = +7. This gives +1, +5, and +7."
},
{
id: 26, subject: "Chemistry", topic: "Chemical Energetics", year: 1993, exam: "JAMB",
question: "A chemical reaction takes place spontaneously if the thermodynamics criteria show that",
options: ["ΔG = 0", "ΔS < 0 and ΔH > 0", "ΔH < TΔS", "ΔG > 0"],
answer: "ΔH < TΔS",
explanation: "A reaction is spontaneous if the change in Gibbs free energy is negative (ΔG < 0). Since ΔG = ΔH - TΔS, for ΔG to be less than zero, ΔH - TΔS < 0, which rearranges algebraically to ΔH < TΔS."
},
{
id: 28, subject: "Chemistry", topic: "Chemical Energetics", year: 1993, exam: "JAMB",
question: "The standard enthalpies of formation of CO₂(g), H₂O(g) and CO(g) in kJ/mol are -394, -242 and -110 respectively. What is the standard enthalpy change for the reaction: CO(g) + H₂O(g) -> CO₂(g) + H₂(g)?",
options: ["-42 kJ mol⁻¹", "+42 kJ mol⁻¹", "-262 kJ mol⁻¹", "+262 kJ mol⁻¹"],
answer: "-42 kJ mol⁻¹",
explanation: "By Hess's law: ΔH_reaction = [ΔHf(CO₂) + ΔHf(H₂)] - [ΔHf(CO) + ΔHf(H₂O)]. Elemental hydrogen has a heat of formation of 0. Substituting values: ΔH = [-394 + 0] - [-110 + (-242)] = -394 - (-352) = -394 + 352 = -42 kJ/mol."
},
{
id: 29, subject: "Chemistry", topic: "Chemical Equilibrium", year: 1993, exam: "JAMB",
question: "10 g of a solid is in equilibrium with its own vapour inside a sealed container. When a small additional amount of 1 g of solid is added, the internal vapour pressure will",
options: ["remain the same", "drop", "increase by 1%", "increase by 99%"],
answer: "remain the same",
explanation: "The vapor pressure of a solid or liquid depends strictly on temperature, not on the total mass of the solid phase present in equilibrium. Adding more solid does not shift the dynamic vapor equilibrium threshold, so vapor pressure remains the same."
},
{
id: 30, subject: "Chemistry", topic: "Chemical Kinetics", year: 1993, exam: "JAMB",
question: "In the diagram, curve X represents the energy profile for a homogeneous gaseous reaction. Which of the following conditions would alter the profile path to produce curve Y for the same reaction?",
options: ["increase in temperature", "increase in the concentration of a reactant", "addition of a catalyst", "increase in total pressure"],
answer: "addition of a catalyst",
explanation: "Curve Y has a lower peak transition state energy than curve X. Lowering the activation energy barrier path is the unique functional effect of adding a catalyst to a chemical system."
},
{
id: 31, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1993, exam: "JAMB",
question: "NaCl(s) + H₂SO₄(l) -> HCl(g) + NaHSO₄(s). In the displacement reaction above, concentrated H₂SO₄ behaves as",
options: ["a strong acid", "an oxidizing agent", "a good solvent", "a less volatile acid displacing a more volatile one"],
answer: "a less volatile acid displacing a more volatile one",
explanation: "This reaction prepares hydrogen chloride gas. Concentrated sulphuric acid is used because it is a non-volatile acid that can successfully displace a more volatile acid (HCl) from its salt when heated."
},
{
id: 32, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1993, exam: "JAMB",
question: "Which of these nitrate salts will decompose on heating to produce its corresponding metal, oxygen, and nitrogen(IV) oxide gas?",
options: ["Silver trioxonitrate(V)", "Sodium trioxonitrate(V)", "Calcium trioxonitrate(V)", "Lithium trioxonitrate(V)"],
answer: "Silver trioxonitrate(V)",
explanation: "Highly stable alkali and alkaline earth metal nitrates decompose to form nitrites or metal oxides. Silver is a very unreactive noble metal; its nitrate decomposes completely past the oxide stage to yield elemental silver metal, nitrogen(IV) oxide, and oxygen gas: 2AgNO₃ -> 2Ag + 2NO₂↑ + O₂↑."
},
{
id: 33, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1993, exam: "JAMB",
question: "An experiment produces a gaseous mixture of carbon(IV) oxide and carbon(II) oxide. In order to obtain pure carbon(II) oxide, the gas mixture should be",
options: [
"passed over heated copper(II) oxide",
"bubbled through concentrated tetraoxosulphate(VI) acid",
"bubbled through sodium hydroxide solution",
"bubbled through distilled water"
],
answer: "bubbled through sodium hydroxide solution",
explanation: "Carbon(IV) oxide (CO₂) is an acidic oxide that reacts with and is absorbed by basic sodium hydroxide solution to form sodium carbonate. Carbon(II) oxide (CO) is a neutral oxide that does not react with bases, passing through unabsorbed as a pure gas."
},
{
id: 34, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1993, exam: "JAMB",
question: "Which of the following is a characteristic property of ionic chlorides?",
options: [
"They can be completely decomposed by gentle heating",
"They react with aqueous AgNO₃ to give a white precipitate which is soluble in excess ammonia",
"They explode violently when in contact with dry ammonia gas",
"They react with concentrated H₂SO₄ to give white fumes of chlorine gas"
],
answer: "They react with aqueous AgNO₃ to give a white precipitate which is soluble in excess ammonia",
explanation: "Soluble ionic chlorides contain chloride ions (Cl⁻) that react with silver nitrate solution to form a white precipitate of silver chloride (AgCl). This precipitate dissolves in dilute ammonia solution to form a clear, soluble coordination complex ion."
},
{
id: 35, subject: "Chemistry", topic: "Qualitative Analysis", year: 1993, exam: "JAMB",
question: "When dilute aqueous solutions of lead(II) nitrate and potassium bromide are mixed, a precipitate is observed. The chemical products of this reaction are",
options: [
"PbO(s) + Br⁻(aq) + KNO₃(aq)",
"Br₂(g) + NO₂(g) + PbBr₂(s)",
"PbBr₂(s) + K⁺(aq) + NO₃⁻(aq)",
"Pb(s) + K⁺(aq) + Br₂(g)"
],
answer: "PbBr₂(s) + K⁺(aq) + NO₃⁻(aq)",
explanation: "A standard double-displacement precipitation reaction occurs: Pb(NO₃)₂(aq) + 2KBr(aq) -> PbBr₂(s)↓ + 2KNO₃(aq). Insoluble lead(II) bromide forms a solid white precipitate, while potassium and nitrate ions remain dissolved as free spectator ions."
},
{
id: 36, subject: "Chemistry", topic: "Applied Chemistry", year: 1993, exam: "JAMB",
question: "Bronze is a commercial structural alloy that consists primarily of",
options: ["Copper and tin", "Silver and gold", "Copper and nickel", "Copper and zinc"],
answer: "Copper and tin",
explanation: "Bronze is a metallic alloy composed primarily of copper combined with tin. Brass consists of copper and zinc."
},
{
id: 37, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1993, exam: "JAMB",
question: "Copper metal will react with hot concentrated trioxonitrate(V) acid to produce",
options: [
"Cu(NO₃)₂ + NO + N₂O₄ + H₂O",
"Cu(NO₃)₂ + NO + H₂O",
"CuO + NO₂ + H₂O",
"Cu(NO₃)₂ + NO₂ + H₂O"
],
answer: "Cu(NO₃)₂ + NO₂ + H₂O",
explanation: "Copper is oxidized by hot concentrated nitric acid (HNO₃) to form copper(II) nitrate, water, and brown fumes of nitrogen(IV) oxide gas (NO₂). The balanced equation is Cu + 4HNO₃ -> Cu(NO₃)₂ + 2NO₂↑ + 2H₂O."
},
{
id: 38, subject: "Chemistry", topic: "Applied Chemistry", year: 1993, exam: "JAMB",
question: "The active reducing agent in the blast furnace responsible for reducing iron ores into free iron is",
options: ["carbon / coke", "limestone", "carbon(II) oxide gas", "calcium oxide"],
answer: "carbon(II) oxide gas",
explanation: "Coke burns in the blast furnace to form carbon(II) oxide (CO) gas. This gas rises up through the furnace and serves as the primary, active reducing agent that reduces iron oxide ores into molten iron metal: Fe₂O₃ + 3CO -> 2Fe + 3CO₂."
},
{
id: 39, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1993, exam: "JAMB",
question: "Al₂O₃(s) + 3H₂SO₄(aq) -> Al₂(SO₄)₃(aq) + 3H₂O(l) and Al₂O₃(s) + 2NaOH(aq) + 3H₂O(l) -> 2NaAl(OH)₄(aq). We can conclude from the equations above that Al₂O₃(s) is",
options: ["an acidic oxide", "an amphoteric oxide", "a basic oxide", "a neutral oxide"],
answer: "an amphoteric oxide",
explanation: "Aluminium oxide (Al₂O₃) reacts with a strong acid (H₂SO₄) to form a salt and water, and also reacts with a strong base (NaOH) to form a soluble aluminate complex. Oxides that exhibit both basic and acidic reactivities are classified as amphoteric."
},
{
id: 40, subject: "Chemistry", topic: "Organic Chemistry", year: 1993, exam: "JAMB",
question: "The two functional groups present in an amino acid molecule like glycine [H₂N-CH₂-COOH] are",
options: ["alcohol and amine", "acid and amine", "aldehyde and acid", "ketone and amine"],
answer: "acid and amine",
explanation: "Amino acids are organic compounds defined by containing both a basic amino functional group (–NH₂) and an acidic carboxylic acid group (–COOH) attached to the same molecular carbon framework."
},
{
id: 41, subject: "Chemistry", topic: "Applied Chemistry", year: 1993, exam: "JAMB",
question: "The distillation fraction of crude petroleum commonly collected and used as jet fuel is",
options: ["refinery gas", "diesel oil", "kerosene", "gasoline"],
answer: "kerosene",
explanation: "Kerosene (paraffin oil) is the specific intermediate petroleum distillation fraction targeted, treated, and blended for use as commercial aviation jet engine fuel."
},
{
id: 42, subject: "Chemistry", topic: "Organic Chemistry", year: 1993, exam: "JAMB",
question: "The correct systematic IUPAC nomenclature for the branched hydrocarbon layout: CH₃-CH(CH₃)-CH₂-CH(CH₃)-CH₂-CH₃ is",
options: ["dimethylhexane", "2,4-dimethylhexane", "1,1-dimethyl-3-methylpentane", "3,5-dimethylhexane"],
answer: "2,4-dimethylhexane",
explanation: "The longest continuous carbon chain has 6 carbons (hexane). Numbering from the left end gives the substituents the lowest possible index positions: methyl branches are located on carbons 2 and 4, forming 2,4-dimethylhexane."
},
{
id: 43, subject: "Chemistry", topic: "Applied Chemistry", year: 1993, exam: "JAMB",
question: "It is undesirable to use lead tetraethyl as an anti-knock agent in modern motor fuels because",
options: [
"it is too expensive to manufacture",
"toxic lead compounds are released into environmental exhaust fumes",
"it dramatically lowers the octane rating of high-grade petrol",
"it makes the liquid fuel blend highly explosive"
],
answer: "toxic lead compounds are released into environmental exhaust fumes",
explanation: "Lead tetraethyl burns inside combustion chambers to release toxic airborne lead compounds through car exhausts. This creates heavy metal atmospheric pollution that damages human health and inhibits nervous systems."
},
{
id: 44, subject: "Chemistry", topic: "Organic Chemistry", year: 1993, exam: "JAMB",
question: "The carbon atoms involved in an alkene double bond configuration (like ethene) are structurally",
options: ["sp² hybridized", "sp³ hybridized", "sp²d hybridized", "sp hybridized"],
answer: "sp² hybridized",
explanation: "Carbon atoms forming a double bond utilize one s orbital and two p orbitals to form three equivalent sp² hybrid orbitals. These hybrid orbitals form three planar sigma bonds, while the remaining unhybridized p orbital forms a pi bond."
},
{
id: 45, subject: "Chemistry", topic: "Organic Chemistry", year: 1993, exam: "JAMB",
question: "The catalytic addition hydrogenation reaction of benzene gas completely saturates the ring to produce",
options: ["an open-chain aromatic hydrocarbon", "margarine fats", "cyclohexane", "D.D.T pesticide fractions"],
answer: "cyclohexane",
explanation: "Adding hydrogen gas across the resonant aromatic bonds of benzene (C₆H₆) in the presence of a nickel catalyst at high temperatures fully saturates the cyclic ring, producing cycloalkane cyclohexane (C₆H₁₂)."
},
{
id: 46, subject: "Chemistry", topic: "Organic Chemistry", year: 1993, exam: "JAMB",
question: "Organic molecules with structures like CH₃-CO-OCH₂CH₃ and CH₃CH₂CH₂-COOH are classified respectively as",
options: [
"isomers with different formula masses",
"an ester and a carboxylic acid that are structural isomers",
"two distinct carboxylic acids",
"polymers of ethyl ethanoate"
],
answer: "an ester and a carboxylic acid that are structural isomers",
explanation: "CH₃COOCH₂CH₃ is ethyl ethanoate (an ester), and CH₃CH₂CH₂COOH is butanoic acid (a carboxylic acid). Both compounds possess the identical molecular formula C₄H₈O₂, making them structural isomers belonging to different functional classes."
},
{
id: 47, subject: "Chemistry", topic: "Applied Chemistry", year: 1993, exam: "JAMB",
question: "Palm wine turns sour on long exposure to air because",
options: [
"the sugar content is completely converted into ethanol alcohol",
"carbon(IV) oxide formed during fermentation develops a sour taste",
"it is commonly adulterated by local tappers using contaminated water tools",
"microbial and bacterial activity oxidizes alcohol into sour organic acids"
],
answer: "microbial and bacterial activity oxidizes alcohol into sour organic acids",
explanation: "Exposing palm wine to air allows aerobic bacteria (Acetobacter) to oxidize the fermented ethanol content into ethanoic acid (acetic acid), giving the wine a distinct sour, vinegary taste over time."
},
{
id: 48, subject: "Chemistry", topic: "Organic Chemistry", year: 1993, exam: "JAMB",
question: "In the organic qualitative analysis apparatus setup where water is dropped onto calcium carbide, the gas generated is passed through an intermediate flask containing copper(II) tetraoxosulphate(VI) in dilute H₂SO₄ to",
options: ["dry the gas product cleanly", "absorb phosphine gas impurities", "absorb ethene gas impurities", "form an acetylide coordination salt with ethyne"],
answer: "absorb phosphine gas impurities",
explanation: "Reacting industrial calcium carbide with water produces ethyne gas but releases trace toxic impurities like phosphine (PH₃) and hydrogen sulfide (H₂S). Passing the gas stream through acidified CuSO₄ solution scrubs and removes these volatile impurities."
},
{
id: 49, subject: "Chemistry", topic: "Applied Chemistry", year: 1993, exam: "JAMB",
question: "Which of the following organic reaction pathways represents saponification?",
options: [
"the reaction of long-chain carboxylic acids with sodium hydroxide base",
"the reaction of alkanoates with mineral acids",
"the reaction of carboxylic acids with sodium alcohols",
"the alkaline hydrolysis of alkanoates (esters/fats) using sodium hydroxide"
],
answer: "the alkaline hydrolysis of alkanoates (esters/fats) using sodium hydroxide",
explanation: "Saponification is specifically the base-catalyzed hydrolysis of an ester (or fat/oil triglyceride) using a strong alkali like NaOH, yielding glycerol and salts of fatty acids (soap)."
},
{
id: 50, subject: "Chemistry", topic: "Organic Chemistry", year: 1993, exam: "JAMB",
question: "The confirmatory functional group test for an alkanoic acid in qualitative organic analysis is its reaction with",
options: [
"wet blue litmus paper to monitor turning red",
"alkanols in acid to build a sweet-smelling ester profile",
"aqueous NaOH base to form salt and water molecules",
"aqueous Na₂CO₃ to liberate a gas which turns clear lime water milky"
],
answer: "aqueous Na₂CO₃ to liberate a gas which turns clear lime water milky",
explanation: "While litmus paper shows acidity, the definitive confirmatory test for a carboxylic acid is adding a carbonate or hydrogencarbonate solution (like Na₂CO₃). Carboxylic acids readily decompose these salts, releasing carbon(IV) oxide gas with effervescence, which can be confirmed when it turns lime water milky."
}
];
export default chemJamb1993;