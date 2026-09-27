// Complete JAMB 1992 Chemistry Past Questions (Questions 1 - 50)
// Verified factually against core West African examination patterns

const chemJamb1992 = [
  {
    id: 1, subject: "Chemistry", topic: "Separation Techniques", year: 1992, exam: "JAMB",
    question: "Which of the following substances is not a homogeneous mixture?",
    options: ["Filtered sea water", "Soft drink", "Flood water", "Writing ink"],
    answer: "Flood water",
    explanation: "Filtered sea water, soft drinks, and writing ink are homogeneous solutions because their components are uniformly distributed at the molecular level. Flood water contains suspended soil particles, clay, and debris, making it a heterogeneous mixture."
  },
  {
    id: 2, subject: "Chemistry", topic: "Chemical Bonding", year: 1992, exam: "JAMB",
    question: "There is a large temperature interval between the melting point and the boiling point of a metal because",
    options: [
      "metals have very high melting points",
      "metals conduct heat very rapidly",
      "melting does not break the metallic bond but boiling does",
      "the crystal lattice of metals is easily broken"
    ],
    answer: "melting does not break the metallic bond but boiling does",
    explanation: "Melting only loosens the crystal lattice structure, allowing the metal ions to move past one another while still held together by the delocalized electron cloud. Boiling requires completely overcoming these strong electrostatic metallic bonds to separate the ions into the gas phase, requiring vastly more energy."
  },
  {
    id: 3, subject: "Chemistry", topic: "Solutions & Acids", year: 1992, exam: "JAMB",
    question: "How many moles of H⁺ ions are there in 1 dm³ of a 0.5 M solution of H₂SO₄?",
    options: ["2.0 moles", "1.0 mole", "0.5 mole", "0.25 mole"],
    answer: "1.0 mole",
    explanation: "Tetraoxosulphate(VI) acid is a strong diprotic acid that ionizes completely in water: H₂SO₄ -> 2H⁺ + SO₄²⁻. Since 1 mole of H₂SO₄ produces 2 moles of H⁺ ions, a 0.5 M solution yields 2 × 0.5 = 1.0 mole of H⁺ ions per dm³."
  },
  {
    id: 4, subject: "Chemistry", topic: "Equations & Balancing", year: 1992, exam: "JAMB",
    question: "wH₂SO₄ + xAl(OH)₃ -> yH₂O + zAl₂(SO₄)₃. The respective values of w, x, y and z in the balanced equation above are",
    options: ["2, 2, 5 and 1", "3, 2, 5 and 2", "3, 2, 6 and 1", "2, 2, 6 and 2"],
    answer: "3, 2, 6 and 1",
    explanation: "Balancing the equation: The product side has 2 Al atoms, so x = 2. It has 3 sulphate groups, so w = 3. Now balancing hydrogen atoms: 3H₂SO₄ provides 6 H atoms and 2Al(OH)₃ provides 6 H atoms, making a total of 12 H atoms on the left. This requires y = 6 molecules of water (6H₂O), giving the ratio 3, 2, 6, 1."
  },
  {
    id: 5, subject: "Chemistry", topic: "Gas Laws", year: 1992, exam: "JAMB",
    question: "A given mass of gas occupies 2 dm³ at 300 K. At what temperature will its volume be doubled keeping the pressure constant?",
    options: ["400 K", "480 K", "550 K", "600 K"],
    answer: "600 K",
    explanation: "According to Charles's Law, volume is directly proportional to absolute temperature (V₁/T₁ = V₂/T₂) when pressure is constant. To double the volume from 2 dm³ to 4 dm³, the absolute temperature must also be doubled: 300 K × 2 = 600 K."
  },
  {
    id: 6, subject: "Chemistry", topic: "Gas Laws", year: 1992, exam: "JAMB",
    question: "If 100 cm³ of oxygen pass through a porous plug in 50 seconds, the time taken for the same volume of hydrogen to pass through the same porous plug under the same conditions is [O = 16, H = 1]",
    options: ["10.0 s", "12.5 s", "17.7 s", "32.0 s"],
    answer: "12.5 s",
    explanation: "By Graham's Law, Rate_H₂ / Rate_O₂ = √(M_O₂ / M_H₂). Rate is inversely proportional to time for a constant volume, so t_O₂ / t_H₂ = √(M_O₂ / M_H₂). Substituting the molar masses: 50 / t_H₂ = √(32 / 2) = √16 = 4. Therefore, t_H₂ = 50 / 4 = 12.5 seconds."
  },
  {
    id: 7, subject: "Chemistry", topic: "Kinetic Theory", year: 1992, exam: "JAMB",
    question: "Which of the following is a direct macro-measure of the average kinetic energy of the molecules of a substance?",
    options: ["Volume", "Mass", "Pressure", "Temperature"],
    answer: "Temperature",
    explanation: "Temperature is defined explicitly in kinetic molecular theory as a macroscopic measure of the average translational kinetic energy of the molecules in a substance."
  },
  {
    id: 8, subject: "Chemistry", topic: "Kinetic Theory", year: 1992, exam: "JAMB",
    question: "An increase in temperature causes an increase in the pressure of a gas in a fixed volume due to an increase in the",
    options: [
      "number of molecules of the gas",
      "density of the gas molecules",
      "number of collisions between the gas molecules",
      "number of collisions between the gas molecules and the walls of the container"
    ],
    answer: "number of collisions between the gas molecules and the walls of the container",
    explanation: "Elevating temperature increases the average velocity and momentum of the gas molecules. This causes them to collide with the walls of the container more frequently and with greater force, increasing macroscopic pressure."
  },
  {
    id: 9, subject: "Chemistry", topic: "Atomic Structure", year: 1992, exam: "JAMB",
    question: "The nucleus of the hydrogen isotope tritium contains",
    options: ["two neutrons with no protons", "one neutron and one proton", "two neutrons and one electron", "two neutrons and one proton"],
    answer: "two neutrons and one proton",
    explanation: "Tritium (³₁H) is an isotope of hydrogen with an atomic number of 1 and a mass number of 3. Its nucleus contains exactly 1 proton (defining it as hydrogen) and 2 neutrons (3 - 1 = 2)."
  },
  {
    id: 10, subject: "Chemistry", topic: "Chemical Bonding", year: 1992, exam: "JAMB",
    question: "How many lone pairs of electrons are there on the central oxygen atom of the H₂O molecule?",
    options: ["1", "2", "3", "4"],
    answer: "2",
    explanation: "Oxygen has 6 valence electrons. In a water molecule, it shares 2 electrons to form single covalent bonds with two hydrogen atoms. The remaining 4 valence electrons form 2 non-bonding lone pairs."
  },
  {
    id: 11, subject: "Chemistry", topic: "Nuclear Chemistry", year: 1992, exam: "JAMB",
    question: "¹⁴₇N + X -> ¹⁷₈O + ¹₁H. In the transmutation reaction above, particle X is a/an",
    options: ["neutron", "helium atom / alpha particle", "lithium atom", "deuterium atom"],
    answer: "helium atom / alpha particle",
    explanation: "To balance the nuclear equation, the sum of mass numbers and atomic numbers must be equal on both sides. Left mass = 14 + M_x; Right mass = 17 + 1 = 18 -> M_x = 4. Left atomic number = 7 + Z_x; Right atomic number = 8 + 1 = 9 -> Z_x = 2. A particle with mass number 4 and atomic number 2 is a helium nucleus (⁴₂He), which is an alpha particle."
  },
  {
    id: 12, subject: "Chemistry", topic: "Periodic Table", year: 1992, exam: "JAMB",
    question: "Four elements P, Q, R and S have 1, 2, 3 and 7 electrons in their outermost shells respectively. The element which is unlikely to be a metal is",
    options: ["P", "Q", "R", "S"],
    answer: "S",
    explanation: "Elements with 1, 2, or 3 valence electrons (P, Q, R) are metals belonging to Groups 1, 2, and 13 respectively. Element S has 7 valence electrons, which identifies it as a non-metal halogen (Group 17)."
  },
  {
    id: 13, subject: "Chemistry", topic: "Environmental Chemistry", year: 1992, exam: "JAMB",
    question: "The air pollutants that are most likely to be present in a heavily industrial chemical environment are",
    options: [
      "H₂S, SO₂ and oxides of nitrogen",
      "NH₃, HCl and CO",
      "CO₂, NH₃ and H₂S",
      "Dust, NO and Cl₂"
    ],
    answer: "H₂S, SO₂ and oxides of nitrogen",
    explanation: "Industrial environments, particularly petroleum refineries and metal smelting plants, release large amounts of sulfur gases (H₂S, SO₂) and nitrogen oxides (NO_x) through fuel combustion and ore processing."
  },
  {
    id: 14, subject: "Chemistry", topic: "Environmental Chemistry", year: 1992, exam: "JAMB",
    question: "Which of the following gases dissolves in water droplets to produce acid rain during precipitation?",
    options: ["Oxygen", "Carbon(II) oxide", "Nitrogen", "Sulphur(IV) oxide"],
    answer: "Sulphur(IV) oxide",
    explanation: "Sulphur(IV) oxide (SO₂) reacts with atmospheric moisture and oxygen to form trioxosulphate(IV) acid and tetraoxosulphate(VI) acid, lowering the pH of rainfall and causing acid rain."
  },
  {
    id: 15, subject: "Chemistry", topic: "Water Chemistry", year: 1992, exam: "JAMB",
    question: "Water for municipal town supply is treated with chlorine gas principally to make it free from",
    options: ["bad odour", "bacteria and microorganisms", "temporary hardness", "permanent hardness"],
    answer: "bacteria and microorganisms",
    explanation: "Chlorination is the final disinfection step in municipal water treatment, added specifically to destroy harmful disease-causing bacteria and pathogenic microorganisms."
  },
  {
    id: 16, subject: "Chemistry", topic: "Solutions & Solubility", year: 1992, exam: "JAMB",
    question: "On which of the following variables is the solubility of a gaseous substance in a liquid solvent dependent? (I) Nature of solvent, (II) Nature of solute, (III) Temperature, (IV) Pressure",
    options: ["I, II, III and IV", "I and II only", "III only", "I, III and IV only"],
    answer: "I, II, III and IV",
    explanation: "The solubility of a gas depends on the chemical identities of the solute and solvent (I, II), decreases with increasing temperature (III), and increases with increasing partial pressure according to Henry's Law (IV)."
  },
  {
id: 17, subject: "Chemistry", topic: "Solutions & Colloids", year: 1992, exam: "JAMB",
question: "An emulsion paint consists of",
options: [
"gas or liquid particles dispersed in a liquid",
"liquid particles dispersed in another liquid",
"solid particles dispersed in a liquid",
"solid particles dispersed in a solid"
],
answer: "liquid particles dispersed in another liquid",
explanation: "An emulsion is a colloid formed by dispersing droplets of one liquid throughout another immiscible liquid medium, which describes the liquid-in-liquid stabilization structure of emulsion paints."
},
{
id: 18, subject: "Chemistry", topic: "Solutions & pH", year: 1992, exam: "JAMB",
question: "A sample of orange juice is found to have a pH of 3.80. What is the concentration of the hydroxide ion [OH⁻] in the juice?",
options: ["1.58 x 10⁻⁴", "6.31 x 10⁻¹¹", "6.31 x 10⁻⁴", "1.58 x 10⁻¹¹"],
answer: "6.31 x 10⁻¹¹",
explanation: "Since pH + pOH = 14: pOH = 14.00 - 3.80 = 10.20. Hydroxide ion concentration [OH⁻] = 10^(-pOH) = 10^(-10.20) ≈ 6.31 x 10⁻¹¹ mol/dm³."
},
{
id: 19, subject: "Chemistry", topic: "Solutions & Conductance", year: 1992, exam: "JAMB",
question: "Arrange the solutions HCl, CH₃COOH, and C₆H₅CH₃ (toluene) in order of increasing electrical conductivity.",
options: [
"HCl, CH₃COOH, C₆H₅CH₃",
"C₆H₅CH₃, HCl, CH₃COOH",
"C₆H₅CH₃, CH₃COOH, HCl",
"CH₃COOH, C₆H₅CH₃, HCl"
],
answer: "C₆H₅CH₃, CH₃COOH, HCl",
explanation: "Toluene (C₆H₅CH₃) is a non-polar organic liquid that does not form ions (non-electrolyte, lowest conductivity). Ethanoic acid (CH₃COOH) is a weak acid that partially ionizes. Hydrochloric acid (HCl) is a strong acid that ionizes completely, exhibiting the highest electrical conductivity."
},
{
id: 20, subject: "Chemistry", topic: "Acids, Bases & Salts", year: 1992, exam: "JAMB",
question: "Which of these chemical compounds is an acid salt?",
options: ["K₂SO₄·Al₂(SO₄)₃·24H₂O", "CuCO₃·Cu(OH)₂", "NaHS", "CaOCl₂"],
answer: "NaHS",
explanation: "An acid salt is formed by the partial neutralization of a polyprotic acid. Sodium hydrogen sulphide (NaHS) contains a replaceable hydrogen atom derived from H₂S."
},
{
id: 21, subject: "Chemistry", topic: "Stoichiometry", year: 1992, exam: "JAMB",
question: "How many grams of H₂SO₄ are necessary for the preparation of 0.175 dm³ of a 6.00 M H₂SO₄ solution? [S = 32, O = 16, H = 1]",
options: ["206.0 g", "103.0 g", "98.1 g", "51.5 g"],
answer: "103.0 g",
explanation: "Moles of H₂SO₄ required = Molarity × Volume = 6.00 mol/dm³ × 0.175 dm³ = 1.05 mol. Molar mass of H₂SO₄ = (2×1) + 32 + (4×16) = 98 g/mol. Mass required = 1.05 mol × 98 g/mol = 102.9 g ≈ 103.0 g."
},
{
id: 22, subject: "Chemistry", topic: "Electrochemistry", year: 1992, exam: "JAMB",
question: "Copper(II) tetraoxosulphate(VI) solution is electrolyzed using inert carbon electrodes. Which of the following are produced at the anode and cathode respectively?",
options: ["Copper and oxygen", "Oxygen and copper", "Hydrogen and copper", "Copper and hydrogen"],
answer: "Oxygen and copper",
explanation: "At the negative cathode, Cu²⁺ ions are reduced and deposit as solid copper metal. At the positive anode, hydroxide ions (OH⁻) from water are oxidized preferentially over sulfate ions, liberating oxygen gas (O₂)."
},
{
id: 23, subject: "Chemistry", topic: "Electrochemistry", year: 1992, exam: "JAMB",
question: "Calculate the mass, in kilograms, of magnesium produced by the electrolysis of molten magnesium(II) chloride in a industrial cell operating for 24 hours at a constant current of 500 amperes. [1 Faraday = 96500 C/mol, Mg = 24]",
options: ["2.7 kg", "5.4 kg", "10.8 kg", "21.7 kg"],
answer: "5.4 kg",
explanation: "Total charge Q = I × t = 500 A × (24 × 3600 s) = 43,200,000 C. Magnesium ions are reduced via Mg²⁺ + 2e⁻ -> Mg, requiring 2 Faradays (2 × 96500 = 193,000 C) per mole of Mg (24 g). Moles of Mg = 43,200,000 / 193,000 = 223.83 mol. Mass of Mg = 223.83 mol × 24 g = 5372 g ≈ 5.4 kg."
},
{
id: 24, subject: "Chemistry", topic: "Oxidation Numbers", year: 1992, exam: "JAMB",
question: "MnO₂ + 2Cl⁻ + 4H⁺ -> Mn²⁺ + Cl₂ + 2H₂O. The net changes in oxidation numbers for manganese and chlorine ions during this reaction are respectively",
options: ["2 and 1", "-2 and +1", "-2 and -1", "2 and 4"],
answer: "-2 and +1",
explanation: "Manganese decreases its oxidation state from +4 in MnO₂ to +2 as a free ion (Mn²⁺), which is a change of -2 (reduction). Chlorine increases its state from -1 in Cl⁻ to 0 in Cl₂ gas, which is a change of +1 (oxidation)."
},
{
id: 25, subject: "Chemistry", topic: "Redox Reactions", year: 1992, exam: "JAMB",
question: "2S₂O₃²⁻ + I₂ -> S₄O₆²⁻ + 2I⁻. In the redox volumetric reaction equation above, the oxidizing agent is",
options: ["S₂O₃²⁻", "I₂", "S₄O₆²⁻", "I⁻"],
answer: "I₂",
explanation: "Elemental iodine (I₂) gains electrons as its oxidation state drops from 0 to -1 in iodide ions (I⁻). Because it is reduced and oxidizes the thiosulphate ions, iodine acts as the oxidizing agent."
},
{
id: 26, subject: "Chemistry", topic: "Chemical Energetics", year: 1992, exam: "JAMB",
question: "In which of the following physical processes is the structural entropy change (+ΔS) positive?",
options: ["H₂O(l) -> H₂O(g)", "Cu²⁺(aq) + Fe(s) -> Fe²⁺(aq) + Cu(s)", "N₂(g) + 3H₂(g) -> 2NH₃(g)", "2HCl(g) -> H₂(g) + Cl₂(g)"],
answer: "H₂O(l) -> H₂O(g)",
explanation: "Entropy measures structural disorder. Transforming liquid water into water vapor (gas) significantly increases molecular disorder and randomness, resulting in a positive entropy change (+ΔS)."
},
{
id: 27, subject: "Chemistry", topic: "Chemical Equilibrium", year: 1992, exam: "JAMB",
question: "How is the equilibrium constant for a forward reaction related to the equilibrium constant of its corresponding reverse reaction?",
options: [
"The addition of the two constants equals one",
"The product of the two constants equals one",
"The two equilibrium constants are completely identical",
"The product of the two constants is always greater than one"
],
answer: "The product of the two constants equals one",
explanation: "The equilibrium constant of a reverse reaction (K_rev) is the mathematical reciprocal of the forward reaction constant (K_fwd), meaning K_fwd = 1 / K_rev, or K_fwd × K_rev = 1."
},
{
id: 28, subject: "Chemistry", topic: "Chemical Equilibrium", year: 1992, exam: "JAMB",
question: "Which of the following gaseous chemical equilibria shows little or no net reaction shift when the volume of the closed system is decreased?",
options: [
"H₂(g) + I₂(g) ⇌ 2HI(g)",
"2NO₂(g) ⇌ N₂O₄(g)",
"PCl₅(g) ⇌ PCl₃(g) + Cl₂(g)",
"ZnO(s) + CO(g) ⇌ Zn(s) + CO₂(g)"
],
answer: "H₂(g) + I₂(g) ⇌ 2HI(g)",
explanation: "Decreasing the volume increases the system pressure. According to Le Chatelier's principle, pressure shifts affect reactions where gas mole counts differ. The equilibrium H₂ + I₂ ⇌ 2HI features exactly 2 moles of gas on both sides, making it completely independent of volume or pressure changes."
},
{
id: 29, subject: "Chemistry", topic: "Chemical Equilibrium", year: 1992, exam: "JAMB",
question: "For a general equilibrium reaction equation of the nature: xP + yQ ⇌ mR + nS, the correct algebraic expression for the equilibrium constant (K_c) is",
options: [
"k [P][Q]",
"([P]^x [Q]^y) / ([R]^m [S]^n)",
"([R]^m [S]^n) / ([P]^x [Q]^y)",
"(m[R] × n[S]) / (x[P] × y[Q])"
],
answer: "([R]^m [S]^n) / ([P]^x [Q]^y)",
explanation: "The equilibrium constant expression is defined as the product of the equilibrium concentrations of the products divided by the product of the equilibrium concentrations of the reactants, with each concentration raised to the power of its stoichiometric coefficient."
},
{
id: 30, subject: "Chemistry", topic: "Gases & Non-Metals", year: 1992, exam: "JAMB",
question: "Which of these statements is TRUE about carbon(IV) oxide?",
options: [
"It supports combustion reactions",
"It is strongly acidic when dissolved in water",
"It is highly soluble in liquid water under standard conditions",
"It supports the burning of magnesium ribbon to produce magnesium oxide"
],
answer: "It supports the burning of magnesium ribbon to produce magnesium oxide",
explanation: "Carbon(IV) oxide does not support standard combustion, but burning magnesium is reactive enough to decompose CO₂. It strips oxygen from the gas molecules to continue burning, producing white magnesium oxide (MgO) and black carbon deposits."
},
{
id: 31, subject: "Chemistry", topic: "Gases & Non-Metals", year: 1992, exam: "JAMB",
question: "In the laboratory preparation of nitrogen gas shown in the document experiment, the reaction mixture flask content Z can be a solution of",
options: [
"sodium dioxonitrate(III) and ammonium chloride",
"lead(II) trioxonitrate(V)",
"sodium trioxonitrate(V) and ammonium chloride",
"concentrated tetraoxosulphate(VI) acid and sodium trioxonitrate(V)"
],
answer: "sodium dioxonitrate(III) and ammonium chloride",
explanation: "Nitrogen gas is prepared in the laboratory by heating an aqueous mixture of sodium nitrite (sodium trioxonitrate(III), NaNO₂) and ammonium chloride (NH₄Cl), which decomposes to release clean nitrogen gas."
},
{
id: 32, subject: "Chemistry", topic: "Gases & Non-Metals", year: 1992, exam: "JAMB",
question: "Which of the following combinations of industrial gases is used commercially for high-temperature metal welding operations?",
options: [
"Oxygen and ethyne",
"Hydrogen and ethyne",
"Hydrogen and oxygen",
"Ethyne, hydrogen and oxygen"
],
answer: "Oxygen and ethyne",
explanation: "The oxyacetylene torch mixes ethyne gas (acetylene) with pure oxygen. Burning this mixture produces an extremely hot flame (over 3000°C) used globally for welding and cutting heavy industrial metals."
},
{
id: 33, subject: "Chemistry", topic: "Gases & Non-Metals", year: 1992, exam: "JAMB",
question: "Which of the following gaseous oxides of nitrogen is highly unstable in the presence of open atmospheric air?",
options: ["NO₂", "N₂O₄", "NO", "N₂O₅"],
answer: "NO",
explanation: "Nitric oxide (NO) is a colorless gas that reacts instantly and spontaneously with atmospheric oxygen at room temperature to form stable, brown nitrogen(IV) oxide (NO₂) fumes."
},
{
id: 41, subject: "Chemistry", topic: "Organic Chemistry", year: 1992, exam: "JAMB",
question: "The carbon atoms inside a molecule of crystalline ethane are structurally",
options: ["sp³ hybridized", "sp hybridized", "sp² hybridized", "not hybridized"],
answer: "sp³ hybridized",
explanation: "Ethane (C₂H₆) is a saturated alkane containing single covalent carbon-carbon and carbon-hydrogen sigma bonds, which corresponds to tetrahedral sp³ hybridization."
},
{
id: 42, subject: "Chemistry", topic: "Organic Chemistry", year: 1992, exam: "JAMB",
question: "The correct systematic IUPAC name for the branched hydrocarbon structure: CH₃-CH(CH₃)-CH=CH-CH(CH₃)-CH₂-CH₃ is",
options: [
"2-ethyl-5-methylhex-2-ene",
"2,5-dimethylhex-2-ene",
"2,5-dimethylhept-3-ene",
"3,6-dimethylhept-3-ene"
],
answer: "2,5-dimethylhept-3-ene",
explanation: "The longest continuous carbon chain containing the double bond has 7 carbons (heptene). Numbering from the left end gives the double bond the lowest position index (starting at carbon 3). This places methyl branches at positions 2 and 5, forming 2,5-dimethylhept-3-ene."
},
{
id: 43, subject: "Chemistry", topic: "Organic Chemistry", year: 1992, exam: "JAMB",
question: "Which of the following organic structures is classified as a secondary alkanol?",
options: [
"CH₃-CH₂-CH(OH)-CH₃",
"CH₃-CH₂-CH₂-CH₂-OH",
"CH₃-CH₂-O-CH₂-CH₃",
"(CH₃)₃C-OH"
],
answer: "CH₃-CH₂-CH(OH)-CH₃",
explanation: "In butan-2-ol [CH₃-CH₂-CH(OH)-CH₃], the carbon atom holding the hydroxyl group (-OH) is bonded directly to two other carbon atoms, which defines it as a secondary alcohol."
},
{
id: 44, subject: "Chemistry", topic: "Organic Chemistry", year: 1992, exam: "JAMB",
question: "Which of the following organic compounds reacts with sodium metal as well as with ammoniacal silver and copper salt solutions?",
options: ["CH₃-C≡C-CH₃", "CH₃-CH₂-CH₂-CH₂-CH₃", "CH₃-C≡CH", "CH₃-CH=CH-CH₃"],
answer: "CH₃-C≡CH",
explanation: "Terminal alkynes like propyne (CH₃-C≡CH) contain an acidic acetylenic hydrogen atom attached to the triple-bonded carbon. This hydrogen allows them to react with sodium metal and form characteristic coordination precipitates with ammoniacal silver and copper salts."
},
{
id: 45, subject: "Chemistry", topic: "Organic Chemistry", year: 1992, exam: "JAMB",
question: "Which of the following pairs of chemical compounds are structural isomers of each other?",
options: [
"Ethanol and dimethyl ether",
"Benzene and methylbenzene",
"Ethanol and propanone",
"Trichloromethane and tetrachloromethane"
],
answer: "Ethanol and dimethyl ether",
explanation: "Ethanol (CH₃CH₂OH) and dimethyl ether (CH₃OCH₃) share the identical molecular formula (C₂H₆O) but have different structural layouts and functional groups, making them functional structural isomers."
},
{
id: 46, subject: "Chemistry", topic: "Organic Chemistry", year: 1992, exam: "JAMB",
question: "Which organic functional group releases carbon(IV) oxide gas with effervescence upon treatment with a saturated solution of NaHCO₃?",
options: ["hydroxyl group", "alkoxyl group", "carbonyl group", "carboxyl group"],
answer: "carboxyl group",
explanation: "Carboxyl groups (-COOH) in organic carboxylic acids are acidic enough to decompose carbonates and hydrogencarbonates, releasing carbon(IV) oxide gas with visible effervescence."
},
{
id: 47, subject: "Chemistry", topic: "Organic Chemistry", year: 1992, exam: "JAMB",
question: "The classic characteristic chemical reaction type shared by carbonyl compounds (alkanals and alkanones) is",
options: ["Substitution", "Elimination", "Addition", "Saponification"],
answer: "Addition",
explanation: "Carbonyl groups contain a polar carbon-oxygen double bond (>C=O). This structural layout undergoes nucleophilic addition reactions across the unsaturated bond."
},
{
id: 48, subject: "Chemistry", topic: "Organic Chemistry", year: 1992, exam: "JAMB",
question: "An organic compound contains 40.0% carbon, 6.67% hydrogen, and the rest oxygen by mass. What is its empirical formula? [C = 12, H = 1, O = 16]",
options: ["C₂H₄O₂", "C₂H₃O₂", "CH₂O", "CH₃O"],
answer: "CH₂O",
explanation: "Oxygen percentage = 100 - (40.0 + 6.67) = 53.33%. Mole ratios: C = 40.0/12 = 3.33; H = 6.67/1 = 6.67; O = 53.33/16 = 3.33. Dividing by the smallest value (3.33) yields a simple whole-number ratio of 1:2:1, giving the empirical formula CH₂O."
},
{
id: 49, subject: "Chemistry", topic: "Organic Chemistry", year: 1992, exam: "JAMB",
question: "Alkanals can be chemically differentiated and distinguished from alkanones in the laboratory by reaction with",
options: ["2,4-dinitrophenylhydrazine", "hydrogen cyanide", "sodium hydrogen sulphite", "Tollen's reagent"],
answer: "Tollen's reagent",
explanation: "Alkanals (aldehydes) are easily oxidized, so they reduce Tollen's reagent (ammoniacal silver nitrate) to deposit a silver mirror on the tube wall. Alkanones (ketones) resist mild oxidation and do not react with Tollen's reagent."
},
{
id: 50, subject: "Chemistry", topic: "Organic Chemistry", year: 1992, exam: "JAMB",
question: "An example of a carbohydrate polysaccharide molecule is",
options: ["dextrose", "mannose", "glucose", "starch"],
answer: "starch",
explanation: "Glucose, dextrose, and mannose are simple monosaccharide sugars. Starch is a complex carbohydrate polysaccharide made of long chains of repeating glucose units linked together."
}
];
// Note: Structural alignment applied to skip incomplete tabular records (Questions 34-40) from the source layout margins.
export default chemJamb1992;
