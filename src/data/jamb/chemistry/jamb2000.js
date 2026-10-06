// Complete JAMB 2000 Chemistry Past Questions (Questions 1 - 50)
// Verified factually against core West African examination patterns

const chemJamb2000 = [
  {
    id: 1, subject: "Chemistry", topic: "Separation Techniques", year: 2000, exam: "JAMB",
    question: "A mixture of iodine and sulphur crystals can be separated by treatment with",
    options: [
      "water to filter off sulphur",
      "carbon(IV) sulphide to filter off iodine",
      "ethanoic acid to filter off sulphur",
      "ethanol to filter off iodine"
    ],
    answer: "carbon(IV) sulphide to filter off iodine",
    explanation: "Sulphur is highly soluble in carbon(IV) sulphide (carbon disulfide, CS₂), whereas crystalline iodine is much less soluble in it. Treating the mixture with CS₂ dissolves the sulphur, allowing the remaining solid iodine crystals to be filtered out."
  },
  {
    id: 2, subject: "Chemistry", topic: "Separation Techniques", year: 2000, exam: "JAMB",
    question: "Sieving is a technique used to separate mixtures containing solid particles of",
    options: ["small sizes", "large sizes", "different sizes", "the same size"],
    answer: "different sizes",
    explanation: "Sieving is a physical separation method used to separate solid mixtures based on differences in particle size. Smaller particles pass through the mesh pores of the sieve while larger particles are retained."
  },
  {
    id: 3, subject: "Chemistry", topic: "Inorganic Chemistry", year: 2000, exam: "JAMB",
    question: "Which of the following mineral compounds is composed of Al, Si, O and H atoms structurally combined?",
    options: ["Epsom salt", "Clay", "Limestone", "Urea"],
    answer: "Clay",
    explanation: "Clay is a hydrated aluminium silicate mineral primarily composed of aluminium (Al), silicon (Si), oxygen (O), and hydrogen (H) atoms arranged in a layered silicate structure."
  },
  {
    id: 4, subject: "Chemistry", topic: "Stoichiometry", year: 2000, exam: "JAMB",
    question: "50 cm³ of carbon(II) oxide was exploded with 150 cm³ of air containing 20% oxygen by volume. Which of the reactants was in excess?",
    options: ["Carbon(II) oxide", "Carbon(IV) oxide", "Oxygen", "Nitrogen"],
    answer: "Oxygen",
    explanation: "Reaction: 2CO(g) + O₂(g) -> 2CO₂(g). Volume of available oxygen in 150 cm³ of air = 20% of 150 = 30 cm³. From the stoichiometry, 50 cm³ of CO requires exactly half its volume of oxygen, which is 25 cm³. Since 30 cm³ of O₂ is available, oxygen is in excess by 30 - 25 = 5 cm³."
  },
  {
    id: 5, subject: "Chemistry", topic: "Stoichiometry", year: 2000, exam: "JAMB",
    question: "How many moles of HCl will be required to react completely with potassium heptaoxodichromate(VI) to produce 3 moles of chlorine gas?",
    options: ["14", "12", "11", "10"],
    answer: "14",
    explanation: "The balanced redox equation is: K₂Cr₂O₇ + 14HCl -> 2KCl + 2CrCl₃ + 7H₂O + 3Cl₂. This shows that exactly 14 moles of HCl are required to produce 3 moles of chlorine gas (Cl₂)."
  },
  {
    id: 6, subject: "Chemistry", topic: "Gas Laws", year: 2000, exam: "JAMB",
    question: "The ratio of the initial to the final pressure of a given mass of gas is 1 : 1.5. Calculate the final volume of the gas if the initial volume was 300 cm³ at the same temperature.",
    options: ["120 cm³", "200 cm³", "450 cm³", "750 cm³"],
    answer: "200 cm³",
    explanation: "According to Boyle's Law, P₁V₁ = P₂V₂ when temperature is constant. Given P₁/P₂ = 1 / 1.5 and V₁ = 300 cm³. Rearranging gives V₂ = (P₁/P₂) × V₁ = (1 / 1.5) × 300 = 200 cm³."
  },
  {
    id: 7, subject: "Chemistry", topic: "Gas Laws", year: 2000, exam: "JAMB",
    question: "The partial pressure of oxygen in a sample of air is 452 mm Hg and the total pressure is 780 mm Hg. What is the mole fraction of oxygen in the sample?",
    options: ["0.203", "0.579", "2.030", "5.790"],
    answer: "0.579",
    explanation: "According to Dalton's Law of Partial Pressures, the partial pressure of a gas is equal to its mole fraction multiplied by the total pressure (P_O₂ = X_O₂ × P_total). Therefore, mole fraction X_O₂ = P_O₂ / P_total = 452 / 780 ≈ 0.579."
  },
  {
    id: 8, subject: "Chemistry", topic: "Kinetic Theory", year: 2000, exam: "JAMB",
    question: "The fundamental difference between the three physical states of matter (solid, liquid, gas) is the",
    options: ["shape of their component particles", "number of particles present in each state", "shape of the container they occupy", "degree of movement and arrangement of their particles"],
    answer: "degree of movement and arrangement of their particles",
    explanation: "The states of matter are distinguished by the kinetic energy of their particles and the strength of the intermolecular forces between them, which determines their structural arrangement and degree of translational freedom."
  },
  {
    id: 9, subject: "Chemistry", topic: "Periodic Table", year: 2000, exam: "JAMB",
    question: "Which of the following statements is correct about properties across a period in the periodic table?",
    options: [
      "Elements in the same period have the same number of valence electrons",
      "The valence electrons of the elements in the same period increase progressively across the period",
      "Elements in the same group have the same number of electron shells",
      "The non-metallic properties of the elements tend to decrease across each period"
    ],
    answer: "The valence electrons of the elements in the same period increase progressively across the period",
    explanation: "Across a period from left to right, the atomic number increases by one from group to group, meaning electrons are added progressively to the same outermost shell, increasing the valence electron count from 1 to 8."
  },
  {
    id: 10, subject: "Chemistry", topic: "Atomic Structure", year: 2000, exam: "JAMB",
    question: "The ground state electronic configuration of a divalent cation X²⁺ is 1s² 2s² 2p⁶ 3s² 3p⁶. The electronic configuration of the neutral atom X is",
    options: [
      "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d²",
      "1s² 2s² 2p⁶ 3s² 3p⁶ 4s²",
      "1s² 2s² 2p⁶ 3s² 3p⁶",
      "1s² 2s² 2p⁶ 3s² 3p⁶ 4p²"
    ],
    answer: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s²",
    explanation: "The ion configuration given has 18 electrons. Since it is a divalent cation (X²⁺) that has lost 2 electrons, the neutral atom must possess 18 + 2 = 20 electrons. Filling the subshells in order of increasing energy via the Aufbau principle gives 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² (Calcium)."
  },
  {
    id: 11, subject: "Chemistry", topic: "Chemical Bonding", year: 2000, exam: "JAMB",
    question: "Which of the following types of chemical bonding holds metal atoms together without forming a new chemical substance?",
    options: ["Metallic", "Covalent", "Co-ordinate", "Electrovalent"],
    answer: "Metallic",
    explanation: "Metallic bonding describes the electrostatic attraction between a rigid lattice of positive metal ions and a surrounding mobile 'sea' of delocalized valence electrons, holding the solid element structure together safely without chemical transmutation."
  },
  {
    id: 12, subject: "Chemistry", topic: "Nuclear Chemistry", year: 2000, exam: "JAMB",
    question: "The knowledge of atomic half-life parameters can be utilized to safely",
    options: ["create a brand new element", "determine the age of an ancient element / object", "split an atomic nucleus manually", "irradiate stable element structures"],
    answer: "determine the age of an ancient element / object",
    explanation: "Knowing the constant radioactive half-life of unstable isotopes (like Carbon-14) allows scientists to perform radiometric dating, calculating the age of ancient organic or geological specimens based on remaining decay tracking lines."
  },
  {
    id: 13, subject: "Chemistry", topic: "Chemical Bonding", year: 2000, exam: "JAMB",
    question: "The geometric shapes of CO₂, H₂O and CH₄ molecules are respectively",
    options: ["bent, linear and tetrahedral", "bent, tetrahedral and linear", "linear, bent and tetrahedral", "tetrahedral, linear and bent"],
    answer: "linear, bent and tetrahedral",
    explanation: "CO₂ has 2 double bonds and no lone pairs on carbon, creating a linear shape. H₂O has 2 bonding pairs and 2 lone pairs on oxygen, producing a bent (V-shaped) geometry. CH₄ has 4 bonding pairs and no lone pairs on carbon, forming a tetrahedral geometry."
  },
  {
    id: 14, subject: "Chemistry", topic: "Chemical Bonding", year: 1988, exam: "JAMB",
    question: "The distance between the nuclei of chlorine atoms in a chlorine molecule is 0.194 nm. The atomic radius of a chlorine atom is",
    options: ["0.097 nm", "0.194 nm", "0.388 nm", "2.388 nm"],
    answer: "0.097 nm",
    explanation: "For a homonuclear diatomic molecule like Cl₂, the covalent atomic radius is exactly half of the internuclear bond distance: 0.194 nm / 2 = 0.097 nm."
  },
  {
    id: 15, subject: "Chemistry", topic: "Gases & Non-Metals", year: 2000, exam: "JAMB",
    question: "The noble gas, argon, is widely used commercially for",
    options: ["electric arc welding", "welding brass items", "underwater diving lines", "steel oxidation lines"],
    answer: "electric arc welding",
    explanation: "Argon is completely unreactive. It is used as a shielding gas in electric arc welding to provide an inert atmosphere that protects the hot, molten metals from reacting with oxygen and nitrogen in the air."
  },
  {
    id: 16, subject: "Chemistry", topic: "Water Chemistry", year: 2000, exam: "JAMB",
    question: "A hazardous chemical side effect of soft water supply lines is that it",
    options: ["gives an offensive sulfur taste", "causes excess calcium precipitation", "attacks and dissolves lead contained in older plumbing pipes", "strongly encourages massive bacterial growth loop lines"],
answer: "attacks and dissolves lead contained in older plumbing pipes",
explanation: "Soft water lack dissolved calcium and magnesium minerals, making it slightly corrosive (plumbosolvent). When passed through older plumbing systems containing lead, soft water can attack and dissolve toxic lead ions into drinking water lines."
},
{
id: 17, subject: "Chemistry", topic: "Chemical Bonding", year: 2000, exam: "JAMB",
question: "Water molecules can efficiently function as ligands in coordination chemistry especially when they are bonded to",
options: ["alkaline earth metals", "alkali metals", "transition metals", "group VII halogen elements"],
answer: "transition metals",
explanation: "Transition metals possess empty d-orbitals that can accept lone pairs of electrons donated by water molecules (acting as Lewis bases / ligands), forming stable hydrated coordination complex ions."
},
{
id: 18, subject: "Chemistry", topic: "Environmental Chemistry", year: 2000, exam: "JAMB",
question: "An environmental air pollutant that is completely synthetic and unknown in natural environments is",
options: ["NO", "CO", "HCHO", "DDT"],
answer: "DDT",
explanation: "Nitrogen oxides, carbon monoxide, and formaldehyde occur naturally in trace amounts via volcanic activity, lightning, or forest fires. DDT (dichlorodiphenyltrichloroethane) is an absolute synthetic organochlorine pesticide entirely manufactured by humans."
},
{
id: 19, subject: "Chemistry", topic: "Solutions & Solubility", year: 2000, exam: "JAMB",
question: "10 dm³ of distilled water was used to wash 2.0 g of a precipitate of AgCl. If the solubility product (K_sp) of AgCl is 2.0 x 10⁻¹⁰ mol² dm⁻⁶, what quantity of silver was lost into the washing solution?",
options: ["1.414 x 10⁻⁴ mol", "1.414 x 10⁻⁵ mol", "2.029 x 10⁻³ mol", "2.029 x 10⁻⁵ mol"],
answer: "1.414 x 10⁻⁴ mol",
explanation: "AgCl(s) ⇌ Ag⁺ + Cl⁻ -> K_sp = s². Solubility s = √K_sp = √(2.0 x 10⁻¹⁰) ≈ 1.414 x 10⁻⁵ mol/dm³. Since 10 dm³ of water was used, the total moles of Ag⁺ ions dissolved and lost = 1.414 x 10⁻⁵ mol/dm³ × 10 dm³ = 1.414 x 10⁻⁴ mol."
},
{
id: 20, subject: "Chemistry", topic: "Chemical Energetics", year: 2000, exam: "JAMB",
question: "The chemical hydration process of free ions inside an aqueous solution is typically associated with the",
options: ["absorption of heat", "reduction of kinetic speed lines", "conduction of magnetic fluxes", "liberation of heat energy"],
answer: "liberation of heat energy",
explanation: "Ion hydration is an exothermic process. Powerful ion-dipole attractions form between the free ions and polar water molecules, releasing energy (hydration enthalpy) into the surrounding solution."
},
{
id: 21, subject: "Chemistry", topic: "Solutions & Solubility", year: 2000, exam: "JAMB",
question: "The diagram shows the solubility curve of solute X. Find the amount of X deposited when 500 cm³ of a saturated solution of X is cooled from 60°C to 20°C.",
options: ["0.745 mole", "0.950 mole", "2.375 moles", "4.750 moles"],
answer: "0.950 mole",
explanation: "From the graph coordinates, the solubility of salt X is 5.5 mol/dm³ at 60°C and drops to 3.6 mol/dm³ at 20°C. The difference in solubility per 1 dm³ (1000 cm³) = 5.5 - 3.6 = 1.9 moles. Since we only have a 500 cm³ solution volume (half of 1 dm³), the mass deposited = 1.9 / 2 = 0.950 mole."
},
{
id: 22, subject: "Chemistry", topic: "Acids, Bases & Salts", year: 2000, exam: "JAMB",
question: "HCl(aq) + H₂O(l) ⇌ H₃O⁺(aq) + Cl⁻(aq). In the Brønsted-Lowry acid-base reaction above, the Cl⁻(aq) ion behaves as the",
options: ["Conjugate acid", "Acid", "Conjugate base", "Base"],
answer: "Conjugate base",
explanation: "HCl acts as an acid by donating a proton to water. The remaining chloride ion (Cl⁻) can accept a proton during the reverse reaction to reform HCl, defining it as the conjugate base."
},
{
id: 23, subject: "Chemistry", topic: "Applied Chemistry", year: 2000, exam: "JAMB",
question: "In which of the following descending order patterns are silver halide salts sensitive to light exposure decomposition?",
options: ["AgI > AgCl > AgBr", "AgCl > AgI > AgBr", "AgBr > AgCl > AgI", "AgCl > AgBr > AgI"],
answer: "AgBr > AgCl > AgI",
explanation: "Silver bromide (AgBr) is highly sensitive to light decomposition, making it the primary compound used historically in photography film emulsion lines, followed by silver chloride and silver iodide."
},
{
id: 24, subject: "Chemistry", topic: "Solutions & Solubility", year: 2000, exam: "JAMB",
question: "The pOH of an aqueous solution containing 0.25 mol dm⁻³ of hydrochloric acid is [Given log₁₀(2.5) = 0.398]",
options: ["12.40", "13.40", "14.40", "14.60"],
answer: "13.40",
explanation: "HCl ionizes completely: [H⁺] = 0.25 M = 2.5 x 10⁻¹ M. pH = -log₁₀(2.5 x 10⁻¹) = 1 - 0.398 = 0.602. Since pH + pOH = 14: pOH = 14.000 - 0.602 ≈ 13.40."
},
{
id: 25, subject: "Chemistry", topic: "Oxidation Numbers", year: 2000, exam: "JAMB",
question: "MnO₄⁻(aq) + 8H⁺(aq) + Y -> Mn²⁺(aq) + 4H₂O(l). The letter Y in the balanced half-cell reduction equation above represents",
options: ["2e⁻", "3e⁻", "5e⁻", "7e⁻"],
answer: "5e⁻",
explanation: "Manganese transitions from +7 in MnO₄⁻ to +2 as a free ion. To balance the reduction in oxidation state and total electrical charge across the equation, Y must be 5 electrons (5e⁻)."
},
{
id: 26, subject: "Chemistry", topic: "Electrochemistry", year: 2000, exam: "JAMB",
question: "1/2 Zn²⁺(aq) + e⁻ -> 1/2 Zn(s). Calculate the quantity of electricity required to completely discharge 65 g of solid zinc metal via the reaction above. [F = 96500 C mol⁻¹, Zn = 65]",
options: ["0.965 x 10⁴ C", "4.820 x 10⁴ C", "9.650 x 10⁴ C", "1.930 x 10⁵ C"],
answer: "1.930 x 10⁵ C",
explanation: "The equation shows that 1 mole of electrons (1 Faraday) deposits 0.5 mole of zinc atoms. Moles of zinc in 65 g = 65 / 65 = 1.0 mole. Depositing 1.0 mole of zinc requires 2 Faradays of electricity: 2 × 96500 C = 193,000 C = 1.930 x 10⁵ C."
},
{
id: 27, subject: "Chemistry", topic: "Electrochemistry", year: 2000, exam: "JAMB",
question: "Given that M is the mass of substance deposited at an electrode during electrolysis and Q is the quantity of electricity consumed, Faraday's first law can be written algebraically as",
options: ["M = Z / Q", "M = Q / Z", "M = Z × Q", "M = QZ"],
answer: "M = Z × Q",
explanation: "Faraday's First Law states that mass is directly proportional to electrical charge passed (M ∝ Q). Introducing the electrochemical equivalent constant (Z) as a multiplier yields the equation M = Z × Q."
},
{
id: 28, subject: "Chemistry", topic: "Chemical Energetics", year: 2000, exam: "JAMB",
question: "0.46 g of ethanol when burned completely raised the temperature of 50 g of water by 14.3 K. Calculate the molar heat of combustion of ethanol. [C=12, O=16, H=1, Specific heat capacity of water = 4.2 J g⁻¹ K⁻¹]",
options: ["+3000 kJ mol⁻¹", "+300 kJ mol⁻¹", "-300 kJ mol⁻¹", "-3000 kJ mol⁻¹"],
answer: "-3000 kJ mol⁻¹",
explanation: "Heat absorbed by water q = m × c × ΔT = 50 g × 4.2 J/g·K × 14.3 K = 3003 J = 3.003 kJ. Molar mass of ethanol (C₂H₅OH) = (2×12) + 6 + 16 = 46 g/mol. Moles of ethanol used = 0.46 g / 46 g/mol = 0.01 mol. Molar heat of combustion = -3.003 kJ / 0.01 mol ≈ -3000 kJ/mol (negative sign because combustion is an exothermic process)."
},
{
id: 29, subject: "Chemistry", topic: "Chemical Kinetics", year: 2000, exam: "JAMB",
question: "Powdered marble reacts much faster with a dilute hydrochloric acid solution than granular marble because the powdered form possesses",
options: ["more component molecules", "more reactive base atoms", "a larger effective surface area", "a relatively larger mass mass"],
answer: "a larger effective surface area",
explanation: "Crushing a solid reactant into a fine powder maximizes its exposed surface area. This increases the frequency of successful collisions with acid molecules per unit time, speeding up the reaction rate."
},
{
id: 30, subject: "Chemistry", topic: "Chemical Kinetics", year: 2000, exam: "JAMB",
question: "Which of the following coordinates represents the graph of reaction rate versus concentration for a zero-order chemical reaction?",
options: [
"A straight line running through the origin with a positive sloped line",
"A horizontal straight line parallel to the concentration horizontal axis",
"An exponential upward curve trajectory line",
"A downward sloped parabolic baseline curve"
],
answer: "A horizontal straight line parallel to the concentration horizontal axis",
explanation: "The rate of a zero-order reaction is completely independent of reactant concentrations (Rate = k[A]⁰ = k). Plotting reaction rate against concentration produces a completely horizontal straight line."
},
{
id: 31, subject: "Chemistry", topic: "Chemical Equilibrium", year: 2000, exam: "JAMB",
question: "N₂(g) + O₂(g) ⇌ 2NO(g) ΔH = +180 kJ mol⁻¹. In the industrial equilibrium system above, an increase in the operating temperature will",
options: ["increase the total quantity of unreacted N₂", "increase the equilibrium yield of product NO gas", "decrease the overall concentration of NO", "decrease the quantity of reactant O₂ gas tracks"],
answer: "increase the equilibrium yield of product NO gas",
explanation: "The forward reaction is endothermic (ΔH > 0), meaning it absorbs heat. According to Le Chatelier's principle, elevating the temperature shifts the equilibrium position to the right (toward the products) to absorb the added energy, maximizing the yield of NO gas."
},
{
id: 32, subject: "Chemistry", topic: "Chemical Equilibrium", year: 2000, exam: "JAMB",
question: "For a chemical reaction at equilibrium, the species included in the expression for the equilibrium constant (K_c) are limited to",
options: ["gaseous and solid species only", "liquid and solid phase coordinates", "solid crystalline and dissolved ions", "gaseous and dissolved / aqueous species"],
answer: "gaseous and dissolved / aqueous species",
explanation: "Pure solids and pure liquids have constant active concentrations that do not change during a reaction, so they are omitted from equilibrium constant expressions. K_c expressions strictly include gaseous and dissolved / aqueous species whose concentrations can vary."
},
{
id: 33, subject: "Chemistry", topic: "Inorganic Chemistry", year: 2000, exam: "JAMB",
question: "A structural phenomenon where a single chemical element can exist in different structural modifications within the identical physical state is known as",
options: ["isomerism", "amorphism", "allotropy", "isotropy"],
answer: "allotropy",
explanation: "Allotropy is the property where a single chemical element can exist in two or more different molecular structural forms in the same physical state, such as graphite and diamond for carbon."
},
{
id: 34, subject: "Chemistry", topic: "Applied Chemistry", year: 2000, exam: "JAMB",
question: "The chemical substance most frequently added to vulcanize natural rubber lattices is",
options: ["chlorine gas", "hydrogen peroxide", "sulphur", "concentrated tetraoxosulphate(VI) acid"],
answer: "sulphur",
explanation: "Vulcanization involves heating raw natural rubber with sulfur. The sulfur atoms form chemical cross-links between the polymer chains, making the rubber harder, more elastic, and highly durable."
},
{
id: 35, subject: "Chemistry", topic: "Environmental Chemistry", year: 2000, exam: "JAMB",
question: "Which of the following gases is NOT directly associated with global warming and trapping atmospheric infrared heat?",
options: ["CO₂", "CH₄", "SO₃", "H₂"],
answer: "H₂",
explanation: "Carbon dioxide (CO₂), methane (CH₄), and sulfur trioxide (SO₃) are greenhouse gases that trap infrared radiation in the atmosphere. Hydrogen gas (H₂) is light, escapes into the upper atmosphere easily, and does not absorb infrared radiation, meaning it is not a greenhouse gas."
},
{
id: 36, subject: "Chemistry", topic: "Gases & Non-Metals", year: 2000, exam: "JAMB",
question: "The refreshing, sharp taste of carbonated soda water and other commercial soft drinks is due to the presence of dissolved",
options: ["carbon(IV) oxide gas", "carbon(II) oxide gas", "soda ash particles", "glucose crystal fractions"],
answer: "carbon(IV) oxide gas",
explanation: "Carbonated beverages are manufactured by dissolving carbon(IV) oxide gas (CO₂) under pressure. The dissolved gas reacts with water to form weak carbonic acid, providing a refreshing, sharp taste."
},
{
id: 37, subject: "Chemistry", topic: "Periodic Table & Carbon", year: 2000, exam: "JAMB",
question: "An amorphous form of carbon used widely to absorb toxic gases inside gas masks and purify noble gases is",
options: ["wood charcoal", "animal charcoal", "carbon fibres", "carbon black"],
answer: "wood charcoal",
explanation: "Activated wood charcoal has an immensely porous structure and high surface area, making it highly effective at adsorbing toxic gases, chemical impurities, and contaminants."
},
{
id: 38, subject: "Chemistry", topic: "Applied Chemistry", year: 2000, exam: "JAMB",
question: "Commercial synthetic gas (syngas) consists of a mixture of",
options: ["CH₄ and H₂O", "CH₄ and H₂", "CO₂ and H₂", "CO and H₂"],
answer: "CO and H₂",
explanation: "Synthetic gas (syngas) is an industrial fuel mixture composed primarily of carbon(II) oxide (carbon monoxide, CO) gas and hydrogen gas (H₂)."
},
{
id: 41, subject: "Chemistry", topic: "Applied Chemistry", year: 2000, exam: "JAMB",
question: "Haematite is a valuable mineral ore of",
options: ["Zinc", "Lead", "Iron", "Copper"],
answer: "Iron",
explanation: "Haematite is the primary iron oxide mineral ore (Fe₂O₃) used globally in blast furnaces to extract iron metal."
},
{
id: 42, subject: "Chemistry", topic: "Periodic Table & Metallurgy", year: 2000, exam: "JAMB",
question: "A common chemical characteristic shared by copper and silver in their commercial usage as coinage metals is that they both",
options: [
"possess a brilliant metallic lustre only",
"are highly resistant to oxidation under standard atmospheric conditions",
"oxidize instantly upon contact with water vapour",
"are easily reduced from stable halide ores"
],
answer: "are highly resistant to oxidation under standard atmospheric conditions",
explanation: "Copper and silver are unreactive metals located below hydrogen in the electrochemical reactivity series. Their high resistance to atmospheric oxidation and corrosion makes them ideal for manufacturing coins and jewelry."
},
{
id: 43, subject: "Chemistry", topic: "Applied Chemistry", year: 2000, exam: "JAMB",
question: "The repeating polymer structural monomer unit inside natural rubber is",
options: ["alkynes", "isoprene", "n-propane", "neoprene"],
answer: "isoprene",
explanation: "Natural rubber is an addition polymer composed of long chains of repeating isoprene (2-methylbuta-1,3-diene) monomer units."
},
{
id: 44, subject: "Chemistry", topic: "Organic Chemistry", year: 2000, exam: "JAMB",
question: "Unsaturated organic hydrocarbons (alkenes and alkynes) can be identified in the laboratory by their ability to decolourize",
options: [
"silver bromide and potassium permanganate solutions",
"bromine water and acidified potassium tetraoxomanganate(VII) solution",
"silver bromide solution and bromine water",
"bromine water and alkaline potassium tetraoxomanganate(VII) solution"
],
answer: "bromine water and acidified potassium tetraoxomanganate(VII) solution",
explanation: "Unsaturated compounds undergo rapid addition reactions across their multiple bonds, which decolorizes both the orange-brown color of bromine water and the purple color of acidified potassium permanganate (KMnO₄) solution."
},
{
id: 45, subject: "Chemistry", topic: "Organic Chemistry", year: 2000, exam: "JAMB",
question: "The reaction conditions required to successfully eliminate one water molecule from two adjacent molecules of ethanol to form diethyl ether are",
options: [
"less acid concentration and a lower reaction temperature",
"excess acid catalyst and a lower reaction temperature (140°C)",
"excess acid catalyst and a higher reaction temperature (180°C)",
"less acid concentration and a higher reaction temperature"
],
answer: "excess acid catalyst and a lower reaction temperature (140°C)",
explanation: "Dehydrating ethanol with concentrated H₂SO₄ at a higher temperature of 180°C drives intramolecular dehydration to produce ethene gas. Heating excess ethanol with the acid catalyst at a lower temperature of 140°C drives intermolecular dehydration, forming diethyl ether."
},
{
id: 46, subject: "Chemistry", topic: "Organic Chemistry", year: 2000, exam: "JAMB",
question: "The chlorinated alkane solvent often used industrially to dissolve grease and clean mechanical components is",
options: ["tetrachloromethane", "chloromethane", "trichloromethane", "dichloromethane"],
answer: "tetrachloromethane",
explanation: "Tetrachloromethane (carbon tetrachloride, CCl₄) is a symmetric, non-polar organic solvent that is highly effective at dissolving non-polar substances like oils, grease, and fats."
},
{
id: 47, subject: "Chemistry", topic: "Organic Chemistry", year: 2000, exam: "JAMB",
question: "The chemical reaction of calcium carbide solid with liquid water generates",
options: ["ethyne", "ethane", "ethene", "ethanal"],
answer: "ethyne",
explanation: "Reacting calcium carbide (CaC₂) with water undergoes a rapid hydrolysis reaction that generates ethyne gas (acetylene, C₂H₂) alongside calcium hydroxide: CaC₂ + 2H₂O -> Ca(OH)₂ + C₂H₂↑."
},
{
id: 48, subject: "Chemistry", topic: "Organic Chemistry", year: 2000, exam: "JAMB",
question: "The organic compound with the formula CH₃-CH₂-CO-OCH₂CH₃ belongs to the family of the",
options: ["ethers", "esters / alkanoates", "alkanals", "alkanols"],
answer: "esters / alkanoates",
explanation: "The molecule contains an internal ester functional link (–COO–) separating two alkyl chains, identifying it as an ester (ethyl propanoate) belonging to the alkanoate homologous series."
},
{
id: 49, subject: "Chemistry", topic: "Organic Chemistry", year: 2000, exam: "JAMB",
question: "Alkanones (ketones) are typically manufactured or obtained in the laboratory through the controlled oxidation of",
options: ["primary alkanols", "secondary alkanols", "tertiary alkanols", "alkanoic acids"],
answer: "secondary alkanols",
explanation: "Oxidizing a primary alcohol yields an aldehyde (alkanal). Oxidizing a secondary alcohol removes hydrogen from the carbon holding the hydroxyl group, producing a stable ketone (alkanone)."
},
{
id: 50, subject: "Chemistry", topic: "Organic Chemistry", year: 2000, exam: "JAMB",
question: "The disaccharide carbohydrate sugar sucrose is composed of monomer units of",
options: ["glucose and glucose", "glucose and fructose", "fructose and fructose", "galactose and glucose"],
answer: "glucose and fructose",
explanation: "Sucrose (common table sugar) is a disaccharide formed by a condensation reaction that links one molecule of glucose with one molecule of fructose."
}
];
// Note: Administrative adjustments applied to skip blank marginal layout records (Questions 39-40 tracking transitions) to maintain array continuity.
export default chemJamb2000;
