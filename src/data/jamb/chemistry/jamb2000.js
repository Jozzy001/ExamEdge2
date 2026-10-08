// JAMB 2000 Chemistry Past Questions
// Fully audited - questions, answers, calculations, explanations, transcription issues, and app-safe formatting.

const chemJamb2000 = [

  {
    id: 1, subject: "Chemistry", topic: "Separation Techniques", year: 2000, exam: "JAMB",

    question: "A mixture of iodine and sulphur crystals can be separated by treatment with",

    options: [
      "water to filter off sulphur",
      "carbon(IV) sulphide to filter off iodine",
      "ethanoic acid to filter off sulphur",
      "methanol to filter off iodine"
    ],

    answer: "carbon(IV) sulphide to filter off iodine",

    explanation: "In the intended school-exam separation method, carbon(IV) sulphide dissolves the sulphur while the iodine remains as the solid residue, which can then be separated by filtration."
  },

  {
    id: 2, subject: "Chemistry", topic: "Separation Techniques", year: 2000, exam: "JAMB",

    question: "Sieving is a technique used to separate mixtures containing solid particles of",

    options: ["small sizes", "large sizes", "different sizes", "the same size"],

    answer: "different sizes",

    explanation: "Sieving separates solid particles based on differences in particle size. Smaller particles pass through the sieve while larger particles are retained."
  },

  {
    id: 3, subject: "Chemistry", topic: "Inorganic Chemistry", year: 2000, exam: "JAMB",

    question: "Which of the following mineral compounds is composed of Al, Si, O and H atoms structurally combined?",

    options: ["Epsom salt", "Clay", "Limestone", "Urea"],

    answer: "Clay",

    explanation: "Clay is mainly a hydrated aluminium silicate and contains aluminium, silicon, oxygen and hydrogen."
  },

  {
    id: 4, subject: "Chemistry", topic: "Stoichiometry", year: 2000, exam: "JAMB",

    question: "50 cm3 of carbon(II) oxide was exploded with 150 cm3 of air containing 20% oxygen by volume. Which of the reactants was in excess?",

    options: ["Carbon(II) oxide", "Carbon(IV) oxide", "Oxygen", "Nitrogen"],

    answer: "Oxygen",

    explanation: "The reaction is 2CO(g) + O2(g) -> 2CO2(g). The volume of oxygen in 150 cm3 of air is 20% x 150 = 30 cm3. Only 25 cm3 of oxygen is required to react with 50 cm3 of CO, so oxygen is in excess by 5 cm3."
  },

  {
    id: 5, subject: "Chemistry", topic: "Stoichiometry", year: 2000, exam: "JAMB",

    question: "How many moles of HCl will be required to react completely with potassium heptaoxodichromate(VI) to produce 3 moles of chlorine gas?",

    options: ["14", "12", "11", "10"],

    answer: "14",

    explanation: "The balanced equation is K2Cr2O7 + 14HCl -> 2KCl + 2CrCl3 + 7H2O + 3Cl2. Therefore, 14 moles of HCl are required to produce 3 moles of Cl2."
  },

  {
    id: 6, subject: "Chemistry", topic: "Gas Laws", year: 2000, exam: "JAMB",

    question: "The ratio of the initial to the final pressure of a given mass of gas is 1 : 1.5. Calculate the final volume of the gas if the initial volume was 300 cm3 at the same temperature.",

    options: ["120 cm3", "200 cm3", "450 cm3", "750 cm3"],

    answer: "200 cm3",

    explanation: "By Boyle's law, P1V1 = P2V2. Therefore, V2 = (P1/P2) x V1 = (1/1.5) x 300 = 200 cm3."
  },

  {
    id: 7, subject: "Chemistry", topic: "Gas Laws", year: 2000, exam: "JAMB",

    question: "The partial pressure of oxygen in a sample of air is 452 mm Hg and the total pressure is 780 mm Hg. What is the mole fraction of oxygen in the sample?",

    options: ["0.203", "0.579", "2.030", "5.790"],

    answer: "0.579",

    explanation: "By Dalton's law, mole fraction = partial pressure / total pressure = 452/780 = 0.579 approximately."
  },

  {
    id: 8, subject: "Chemistry", topic: "Kinetic Theory", year: 2000, exam: "JAMB",

    question: "The fundamental difference between the three physical states of matter (solid, liquid, gas) is the",

    options: [
      "shape of their component particles",
      "number of particles present in each state",
      "shape of the container they occupy",
      "degree of movement and arrangement of their particles"
    ],

    answer: "degree of movement and arrangement of their particles",

    explanation: "The physical states differ mainly in the arrangement, spacing and degree of movement of their particles, which are related to particle kinetic energy and intermolecular forces."
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

    explanation: "Across a period, electrons are progressively added to the outermost shell, so the number of valence electrons generally increases from left to right."
  },

  {
    id: 10, subject: "Chemistry", topic: "Atomic Structure", year: 2000, exam: "JAMB",

    question: "The ground state electronic configuration of a divalent cation X2+ is 1s2 2s2 2p6 3s2 3p6. The electronic configuration of the neutral atom X is",

    options: [
      "1s2 2s2 2p6 3s2 3p6 4s2 3d2",
      "1s2 2s2 2p6 3s2 3p6 4s2",
      "1s2 2s2 2p6 3s2 3p6",
      "1s2 2s2 2p6 3s2 3p6 4p2"
    ],

    answer: "1s2 2s2 2p6 3s2 3p6 4s2",

    explanation: "X2+ has 18 electrons. The neutral atom therefore has 20 electrons. Its ground-state configuration is 1s2 2s2 2p6 3s2 3p6 4s2, corresponding to calcium."
  },

  {
    id: 11, subject: "Chemistry", topic: "Chemical Bonding", year: 2000, exam: "JAMB",

    question: "Which of the following types of chemical bonding holds metal atoms together without forming a new chemical substance?",

    options: ["Metallic", "Covalent", "Co-ordinate", "Electrovalent"],

    answer: "Metallic",

    explanation: "Metallic bonding is the electrostatic attraction between positive metal ions and delocalized electrons within the metal."
  },

  {
    id: 12, subject: "Chemistry", topic: "Nuclear Chemistry", year: 2000, exam: "JAMB",

    question: "The knowledge of half-life can be used to",

    options: [
      "create an element",
      "detect an element",
      "split an element",
      "irradiate an element"
    ],

    answer: "detect an element",

    explanation: "The half-life of a radioactive isotope is a characteristic property that can be used in identifying and studying radioactive elements."
  },

  {
    id: 13, subject: "Chemistry", topic: "Chemical Bonding", year: 2000, exam: "JAMB",

    question: "The geometric shapes of CO2, H2O and CH4 molecules are respectively",

    options: [
      "bent, linear and tetrahedral",
      "bent, tetrahedral and linear",
      "linear, bent and tetrahedral",
      "tetrahedral, linear and bent"
    ],

    answer: "linear, bent and tetrahedral",

    explanation: "CO2 is linear, H2O is bent because of its lone pairs, and CH4 has a tetrahedral arrangement."
  },

  {
    id: 14, subject: "Chemistry", topic: "Chemical Bonding", year: 2000, exam: "JAMB",

    question: "The distance between the nuclei of chlorine atoms in a chlorine molecule is 0.194 nm. The atomic radius of a chlorine atom is",

    options: ["0.097 nm", "0.194 nm", "0.388 nm", "2.388 nm"],

    answer: "0.097 nm",

    explanation: "For Cl2, the internuclear distance is twice the covalent radius. Therefore, atomic radius = 0.194/2 = 0.097 nm."
  },

  {
    id: 15, subject: "Chemistry", topic: "Gases & Non-Metals", year: 2000, exam: "JAMB",

    question: "The noble gas, argon, is widely used commercially for",

    options: [
      "electric arc welding",
      "welding brass items",
      "underwater diving lines",
      "steel oxidation lines"
    ],

    answer: "electric arc welding",

    explanation: "Argon is chemically inert and is used as a shielding gas in electric arc welding to protect hot metal from reacting with atmospheric gases."
  },

  {
    id: 16, subject: "Chemistry", topic: "Water Chemistry", year: 2000, exam: "JAMB",

    question: "A hazardous chemical side effect of soft water supply lines is that it",

    options: [
      "gives an offensive sulfur taste",
      "causes excess calcium precipitation",
      "attacks and dissolves lead contained in older plumbing pipes",
      "strongly encourages massive bacterial growth"
    ],

    answer: "attacks and dissolves lead contained in older plumbing pipes",

    explanation: "Soft water can be more corrosive because it contains relatively low concentrations of dissolved calcium and magnesium salts. It may therefore attack lead-containing pipes and increase the amount of lead dissolved into the water."
  },

  {
    id: 17, subject: "Chemistry", topic: "Chemical Bonding", year: 2000, exam: "JAMB",

    question: "Water molecules can efficiently function as ligands in coordination chemistry especially when they are bonded to",

    options: [
      "alkaline earth metals",
      "alkali metals",
      "transition metals",
      "group VII halogen elements"
    ],

    answer: "transition metals",

    explanation: "Water can donate a lone pair of electrons to a metal ion and act as a ligand. Transition-metal ions commonly form hydrated and coordination complexes."
  },

  {
    id: 18, subject: "Chemistry", topic: "Environmental Chemistry", year: 2000, exam: "JAMB",

    question: "An environmental air pollutant that is completely synthetic and unknown in natural environments is",

    options: ["NO", "CO", "HCHO", "DDT"],

    answer: "DDT",

    explanation: "DDT is a synthetic organochlorine pesticide manufactured by humans, unlike NO, CO and formaldehyde, which can also arise naturally."
  },

  {
    id: 19, subject: "Chemistry", topic: "Solutions & Solubility", year: 2000, exam: "JAMB",

    question: "10 dm3 of distilled water was used to wash 2.0 g of a precipitate of AgCl. If the solubility product (Ksp) of AgCl is 2.0 x 10^(-10) mol2 dm^(-6), what quantity of silver was lost into the washing solution?",

    options: [
      "1.414 x 10^(-4) mol",
      "1.414 x 10^(-5) mol",
      "2.029 x 10^(-3) mol",
      "2.029 x 10^(-5) mol"
    ],

    answer: "1.414 x 10^(-4) mol",

    explanation: "For AgCl(s) -> Ag+ + Cl-, Ksp = s^2. Therefore s = sqrt(2.0 x 10^(-10)) = 1.414 x 10^(-5) mol dm^(-3). For 10 dm3, moles of Ag+ lost = 1.414 x 10^(-5) x 10 = 1.414 x 10^(-4) mol."
  },

  {
    id: 20, subject: "Chemistry", topic: "Chemical Energetics", year: 2000, exam: "JAMB",

    question: "The chemical hydration process of free ions inside an aqueous solution is typically associated with the",

    options: [
      "absorption of heat",
      "reduction of kinetic speed",
      "conduction of magnetic fluxes",
      "liberation of heat energy"
    ],

    answer: "liberation of heat energy",

    explanation: "Hydration of ions is generally exothermic because ion-dipole attractions form between the ions and polar water molecules, releasing heat."
  },

  {
    id: 21, subject: "Chemistry", topic: "Solutions & Solubility", year: 2000, exam: "JAMB",

    question: "The solubility of solute X is 5.5 mol dm-3 at 60°C and 3.6 mol dm-3 at 20°C. Find the amount of X deposited when 500 cm3 of the saturated solution is cooled from 60°C to 20°C.",

    options: ["0.745 mole", "0.950 mole", "2.375 moles", "4.750 moles"],

    answer: "0.950 mole",

    explanation: "Decrease in solubility = 5.5 - 3.6 = 1.9 mol dm-3. Since 500 cm3 = 0.5 dm3, the amount deposited is 1.9 x 0.5 = 0.950 mol."
  },

  {
    id: 22, subject: "Chemistry", topic: "Acids, Bases & Salts", year: 2000, exam: "JAMB",

    question: "HCl(aq) + H2O(l) <=> H3O+(aq) + Cl-(aq). In the Bronsted-Lowry acid-base reaction above, the Cl-(aq) ion behaves as the",

    options: ["Conjugate acid", "Acid", "Conjugate base", "Base"],

    answer: "Conjugate base",

    explanation: "HCl donates a proton to water and therefore acts as an acid. The Cl- ion is the species left after HCl loses its proton, so it is the conjugate base."
  },

  {
    id: 23, subject: "Chemistry", topic: "Applied Chemistry", year: 2000, exam: "JAMB",

    question: "In which of the following descending order patterns are silver halide salts sensitive to light exposure decomposition?",

    options: [
      "AgI > AgCl > AgBr",
      "AgCl > AgI > AgBr",
      "AgBr > AgCl > AgI",
      "AgCl > AgBr > AgI"
    ],

    answer: "AgBr > AgCl > AgI",

    explanation: "Silver bromide is highly sensitive to light and is widely known for its historical use in photographic materials. The order of light sensitivity is AgBr > AgCl > AgI."
  },

  {
    id: 24, subject: "Chemistry", topic: "Solutions & Solubility", year: 2000, exam: "JAMB",

    question: "The pOH of an aqueous solution containing 0.25 mol dm-3 of hydrochloric acid is [Given log10(2.5) = 0.398]",

    options: ["12.40", "13.40", "14.40", "14.60"],

    answer: "13.40",

    explanation: "HCl ionizes completely, so [H+] = 0.25 M = 2.5 x 10^(-1) M. pH = 1 - 0.398 = 0.602. Therefore pOH = 14.000 - 0.602 = 13.398, approximately 13.40."
  },

  {
    id: 25, subject: "Chemistry", topic: "Oxidation Numbers", year: 2000, exam: "JAMB",

    question: "MnO4-(aq) + 8H+(aq) + Y -> Mn2+(aq) + 4H2O(l). The letter Y in the balanced half-cell reduction equation above represents",

    options: ["2e-", "3e-", "5e-", "7e-"],

    answer: "5e-",

    explanation: "Manganese changes from oxidation state +7 in MnO4- to +2 in Mn2+. It therefore gains 5 electrons."
  },

  {
    id: 26, subject: "Chemistry", topic: "Electrochemistry", year: 2000, exam: "JAMB",

    question: "1/2 Zn2+(aq) + e- -> 1/2 Zn(s). Calculate the quantity of electricity required to deposit 65 g of zinc metal via the reaction above. [F = 96500 C mol-1, Zn = 65]",

    options: [
      "0.965 x 10^4 C",
      "4.820 x 10^4 C",
      "9.650 x 10^4 C",
      "1.930 x 10^5 C"
    ],

    answer: "1.930 x 10^5 C",

    explanation: "65 g of zinc is 1 mole of Zn. From the given half-reaction, 1 mole of Zn requires 2 moles of electrons. Therefore Q = 2F = 2 x 96500 = 193000 C = 1.930 x 10^5 C."
  },

  {
    id: 27, subject: "Chemistry", topic: "Electrochemistry", year: 2000, exam: "JAMB",

    question: "Given that M is the mass of substance deposited in an electrolysis and Q is the quantity of electricity consumed, Faraday's first law can be written algebraically as",

    options: [
      "M = Z/Q",
      "M = Q/Z",
      "M = Z/(2Q)",
      "M = QZ"
    ],

    answer: "M = QZ",

    explanation: "Faraday's first law states that the mass deposited is directly proportional to the quantity of electricity passed. Therefore M = ZQ, where Z is the electrochemical equivalent."
  },

  {
    id: 28, subject: "Chemistry", topic: "Chemical Energetics", year: 2000, exam: "JAMB",

    question: "0.46 g of ethanol when burned completely raised the temperature of 50 g of water by 14.3 K. Calculate the molar heat of combustion of ethanol. [C = 12, O = 16, H = 1, Specific heat capacity of water = 4.2 J g-1 K-1]",

    options: ["+3000 kJ mol-1", "+300 kJ mol-1", "-300 kJ mol-1", "-3000 kJ mol-1"],

    answer: "-300 kJ mol-1",

    explanation: "Heat absorbed by water = m x c x change in temperature = 50 x 4.2 x 14.3 = 3003 J = 3.003 kJ. Molar mass of ethanol is 46 g mol-1, so 0.46 g = 0.01 mol. Molar heat of combustion = -3.003/0.01 = -300.3 kJ mol-1, approximately -300 kJ mol-1. The negative sign indicates that combustion is exothermic."
  },

  {
    id: 29, subject: "Chemistry", topic: "Chemical Kinetics", year: 2000, exam: "JAMB",

    question: "Powdered marble reacts much faster with a dilute hydrochloric acid solution than granular marble because the powdered form possesses",

    options: [
      "more component molecules",
      "more reactive base atoms",
      "a larger effective surface area",
      "a relatively larger mass"
    ],

    answer: "a larger effective surface area",

    explanation: "Powdering the marble increases its exposed surface area, leading to more frequent effective collisions between the marble and acid particles."
  },

  {
    id: 30, subject: "Chemistry", topic: "Chemical Kinetics", year: 2000, exam: "JAMB",

    question: "Which of the following coordinates represents the graph of reaction rate versus concentration for a zero-order chemical reaction?",

    options: [
      "A straight line running through the origin with a positive slope",
      "A horizontal straight line parallel to the concentration axis",
      "An exponential upward curve",
      "A downward-sloping parabolic curve"
    ],

    answer: "A horizontal straight line parallel to the concentration axis",

    explanation: "For a zero-order reaction, rate = k[A]^0 = k. Therefore, the reaction rate is independent of concentration and the graph is horizontal."
  },

  {
    id: 31, subject: "Chemistry", topic: "Chemical Equilibrium", year: 2000, exam: "JAMB",

    question: "N2(g) + O2(g) <=> 2NO(g); change in enthalpy = +180.6 kJ mol-1. In the equilibrium system above, an increase in temperature will",

    options: [
      "increase the total quantity of unreacted N2",
      "increase the equilibrium yield of product NO gas",
      "decrease the overall concentration of NO",
      "decrease the quantity of reactant O2"
    ],

    answer: "increase the equilibrium yield of product NO gas",

    explanation: "The forward reaction is endothermic because its enthalpy change is positive. Increasing the temperature shifts the equilibrium towards the endothermic direction, increasing the yield of NO."
  },

  {
    id: 32, subject: "Chemistry", topic: "Chemical Equilibrium", year: 2000, exam: "JAMB",

    question: "For a chemical reaction at equilibrium, the species included in the expression for the equilibrium constant (Kc) are limited to",

    options: [
      "gaseous and solid species only",
      "liquid and solid phase species",
      "solid crystalline and dissolved ions",
      "gaseous and dissolved or aqueous species"
    ],

    answer: "gaseous and dissolved or aqueous species",

    explanation: "Pure solids and pure liquids are omitted from Kc expressions because their activities remain effectively constant. Gaseous and aqueous species are included because their concentrations can vary."
  },

  {
    id: 33, subject: "Chemistry", topic: "Inorganic Chemistry", year: 2000, exam: "JAMB",

    question: "A structural phenomenon where a single chemical element can exist in different structural modifications within the same physical state is known as",

    options: ["isomerism", "amorphism", "allotropy", "isotropy"],

    answer: "allotropy",

    explanation: "Allotropy is the existence of an element in two or more different forms in the same physical state. Carbon, for example, exists as diamond and graphite."
  },

  {
    id: 34, subject: "Chemistry", topic: "Applied Chemistry", year: 2000, exam: "JAMB",

    question: "The chemical substance most frequently added to vulcanize natural rubber latex is",

    options: [
      "chlorine gas",
      "hydrogen peroxide",
      "sulphur",
      "concentrated tetraoxosulphate(VI) acid"
    ],

    answer: "sulphur",

    explanation: "Vulcanization involves heating natural rubber with sulphur. Sulphur forms cross-links between polymer chains, improving strength, elasticity and durability."
  },

  {
    id: 35, subject: "Chemistry", topic: "Environmental Chemistry", year: 2000, exam: "JAMB",

    // CHECK SOURCE: The original JAMB item lists both SO3 and H2 as options and expects H2.
    // SO3 is not normally listed among the principal greenhouse gases, so the wording is scientifically imprecise.
    question: "A gas that is not associated with global warming is",

    options: ["CO2", "SO3", "CH4", "H2"],

    answer: "H2",

    explanation: "The intended JAMB answer is H2. Hydrogen gas is not a greenhouse gas because it does not significantly absorb outgoing infrared radiation. Note that SO3 is also not normally regarded as a principal greenhouse gas, making the original item scientifically imprecise."
  },

  {
    id: 36, subject: "Chemistry", topic: "Gases & Non-Metals", year: 2000, exam: "JAMB",

    question: "The refreshing, sharp taste of carbonated soda water and other commercial soft drinks is due to the presence of dissolved",

    options: [
      "carbon(IV) oxide gas",
      "carbon(II) oxide gas",
      "soda ash particles",
      "glucose crystal fractions"
    ],

    answer: "carbon(IV) oxide gas",

    explanation: "Carbonated drinks contain dissolved carbon(IV) oxide, CO2. Some of the dissolved CO2 forms carbonic acid, contributing to the characteristic sharp taste."
  },

  {
    id: 37, subject: "Chemistry", topic: "Periodic Table & Carbon", year: 2000, exam: "JAMB",

    question: "An amorphous form of carbon used widely to absorb poisonous gases inside gas masks and purify noble gases is",

    options: ["wood charcoal", "animal charcoal", "carbon fibres", "carbon black"],

    answer: "wood charcoal",

    explanation: "Wood charcoal has a porous structure and high adsorbing capacity, making it useful in gas masks and for purification of gases."
  },

  {
    id: 38, subject: "Chemistry", topic: "Applied Chemistry", year: 2000, exam: "JAMB",

    question: "Synthesis gas is a mixture of",

    options: ["CH4 and H2O", "CH4 and H2", "CO2 and H2", "CO and H2"],

    answer: "CO and H2",

    explanation: "Synthesis gas, or syngas, is mainly a mixture of carbon monoxide (CO) and hydrogen (H2)."
  },

  {
    id: 39, subject: "Chemistry", topic: "Applied Chemistry", year: 2000, exam: "JAMB",

    question: "Potassium vapour burns with a",

    options: ["blue flame", "brick-red flame", "violet flame", "golden-yellow flame"],

    answer: "violet flame",

    explanation: "Potassium produces a violet or lilac flame when heated because its electrons emit characteristic light as they return to lower energy levels."
  },

  {
    id: 40, subject: "Chemistry", topic: "Applied Chemistry", year: 2000, exam: "JAMB",

    question: "A common characteristic of copper and silver in their usage as coinage metals is that they",

    options: [
      "have high metallic lustre",
      "are not easily oxidized",
      "are easily oxidized",
      "are not easily reduced"
    ],

    answer: "are not easily oxidized",

    explanation: "Copper and silver are relatively resistant to corrosion compared with many more reactive metals, which contributes to their usefulness as coinage metals."
  },

  {
    id: 41, subject: "Chemistry", topic: "Applied Chemistry", year: 2000, exam: "JAMB",

    question: "Haematite is a valuable mineral ore of",

    options: ["Zinc", "Lead", "Iron", "Copper"],

    answer: "Iron",

    explanation: "Haematite is mainly iron(III) oxide, Fe2O3, and is an important ore from which iron is extracted."
  },

  {
    id: 42, subject: "Chemistry", topic: "Periodic Table & Metallurgy", year: 2000, exam: "JAMB",

    question: "The least easily oxidized of the metals below is",

    options: ["Ca", "Na", "Zn", "Al"],

    answer: "Al",

    explanation: "Aluminium is highly reactive thermodynamically but is protected by a thin, adherent oxide film that prevents further oxidation. This passivation makes it the least easily oxidized of the listed metals under ordinary conditions."
  },

  {
    id: 43, subject: "Chemistry", topic: "Applied Chemistry", year: 2000, exam: "JAMB",

    question: "The repeating polymer structural monomer unit in natural rubber is",

    options: ["alkynes", "isoprene", "n-propane", "neoprene"],

    answer: "isoprene",

    explanation: "Natural rubber is cis-1,4-polyisoprene, formed from repeating isoprene units."
  },

  {
    id: 44, subject: "Chemistry", topic: "Organic Chemistry", year: 2000, exam: "JAMB",

    question: "Unsaturated organic hydrocarbons (alkenes and alkynes) can be identified in the laboratory by their ability to decolourize",

    options: [
      "silver bromide and potassium tetraoxomanganate(VII) solutions",
      "bromine water and acidified potassium tetraoxomanganate(VII) solution",
      "silver bromide solution and bromine water",
      "bromine water and alkaline potassium tetraoxomanganate(VII) solution"
    ],

    answer: "bromine water and acidified potassium tetraoxomanganate(VII) solution",

    explanation: "Unsaturated compounds react at their multiple bonds and can decolourize bromine water and potassium permanganate solution."
  },

  {
    id: 45, subject: "Chemistry", topic: "Organic Chemistry", year: 2000, exam: "JAMB",

    question: "The conditions necessary for the extraction of one water molecule from two molecules of ethanol to form diethyl ether are",

    options: [
      "less concentrated acid and a lower temperature",
      "concentrated acid and a lower temperature, about 140°C",
      "concentrated acid and a higher temperature, about 180°C",
      "less concentrated acid and a higher temperature"
    ],

    answer: "concentrated acid and a lower temperature, about 140°C",

    explanation: "At about 140°C, concentrated H2SO4 catalyzes intermolecular dehydration of ethanol to form diethyl ether. At higher temperatures, around 170-180°C, dehydration mainly produces ethene."
  },

  {
    id: 46, subject: "Chemistry", topic: "Organic Chemistry", year: 2000, exam: "JAMB",

    question: "The chlorinated alkane solvent often used industrially to dissolve grease and clean mechanical components is",

    options: [
      "tetrachloromethane",
      "chloromethane",
      "trichloromethane",
      "dichloromethane"
    ],

    answer: "tetrachloromethane",

    explanation: "Tetrachloromethane, CCl4, is a non-polar solvent that dissolves grease and other non-polar substances. Its use has since been greatly restricted because of toxicity and environmental concerns."
  },

  {
    id: 47, subject: "Chemistry", topic: "Organic Chemistry", year: 2000, exam: "JAMB",

    question: "The reaction of calcium carbide with water gives",

    options: ["ethyne", "ethane", "ethene", "ethanal"],

    answer: "ethyne",

    explanation: "Calcium carbide reacts with water according to CaC2 + 2H2O -> Ca(OH)2 + C2H2. The gas produced is ethyne, also called acetylene."
  },

  {
    id: 48, subject: "Chemistry", topic: "Organic Chemistry", year: 2000, exam: "JAMB",

    question: "The organic compound with the formula CH3-CH2-CO-OCH2CH3 belongs to the family of the",

    options: ["ethers", "esters", "alkanals", "alkanols"],

    answer: "esters",

    explanation: "The compound contains the -COO- functional group, which identifies it as an ester. Its name is ethyl propanoate."
  },

  {
    id: 49, subject: "Chemistry", topic: "Organic Chemistry", year: 2000, exam: "JAMB",

    question: "Alkanones (ketones) are typically obtained by the controlled oxidation of",

    options: ["primary alkanols", "secondary alkanols", "tertiary alkanols", "alkanoic acids"],

    answer: "secondary alkanols",

    explanation: "Controlled oxidation of a secondary alcohol produces a ketone (alkanone). Primary alcohols produce aldehydes under controlled oxidation."
  },

  {
    id: 50, subject: "Chemistry", topic: "Organic Chemistry", year: 2000, exam: "JAMB",

    question: "The disaccharide carbohydrate sucrose is composed of monomer units of",

    options: [
      "glucose and glucose",
      "glucose and fructose",
      "fructose and fructose",
      "galactose and glucose"
    ],

    answer: "glucose and fructose",

    explanation: "Sucrose is a disaccharide formed from one glucose unit and one fructose unit through a condensation reaction."
  }

];

export default chemJamb2000;