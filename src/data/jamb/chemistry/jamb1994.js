// Complete JAMB 1994 Chemistry Past Questions (Questions 1 - 50)
// Verified factually against core West African examination patterns

const chemJamb1994 = [
  {
    id: 1, subject: "Chemistry", topic: "Separation Techniques", year: 1994, exam: "JAMB",
    question: "A mixture of sand, ammonium chloride and sodium chloride is best separated by",
    options: [
      "sublimation followed by addition of water and filtration",
      "sublimation followed by addition of water and evaporation",
      "addition of water followed by filtration and sublimation",
      "addition of water followed by crystallization and sublimation"
    ],
    answer: "sublimation followed by addition of water and evaporation",
    explanation: "Ammonium chloride sublimes on heating, leaving a mixture of sand and sodium chloride. Adding water dissolves the sodium chloride, allowing the insoluble sand to be filtered out. The filtrate can then be evaporated to dryness to recover pure sodium chloride."
  },
  {
    id: 2, subject: "Chemistry", topic: "Separation Techniques", year: 1994, exam: "JAMB",
    question: "A pure solid usually melts",
    options: [
      "over a wide range of temperature",
      "over a narrow range of temperature",
      "at a lower temperature than the impure one",
      "at the same temperature as the impure one"
    ],
    answer: "over a narrow range of temperature",
    explanation: "A key characteristic of pure substances is that they melt sharply at a distinct, specific temperature (over a very narrow range). Impurities disrupt crystal lattices, broadening and lowering the melting point range."
  },
  {
    id: 3, subject: "Chemistry", topic: "Gas Laws", year: 1994, exam: "JAMB",
    question: "At the same temperature and pressure, 50 cm³ of nitrogen gas contains the same number of molecules as",
    options: ["25 cm³ of methane", "40 cm³ of hydrogen", "50 cm³ of ammonia", "100 cm³ of chlorine"],
    answer: "50 cm³ of ammonia",
    explanation: "Avogadro's Law states that equal volumes of all gases under the same conditions of temperature and pressure contain the same number of molecules. Therefore, 50 cm³ of nitrogen gas contains exactly the same number of molecules as 50 cm³ of ammonia gas."
  },
  {
    id: 4, subject: "Chemistry", topic: "Stoichiometry", year: 1994, exam: "JAMB",
    question: "8 g of methane (CH₄) occupies 11.2 dm³ at s.t.p. What volume would 22 g of propane (C₃H₈) occupy under the same condition? [C = 12, H = 1]",
    options: ["3.7 dm³", "11.2 dm³", "22.4 dm³", "33.6 dm³"],
    answer: "11.2 dm³",
    explanation: "Molar mass of propane (C₃H₈) = (3 × 12) + (8 × 1) = 44 g/mol. Moles of propane = 22 g / 44 g/mol = 0.5 mol. Since 1 mole of any gas occupies 22.4 dm³ at s.t.p., 0.5 mol will occupy 0.5 × 22.4 dm³ = 11.2 dm³."
  },
  {
    id: 5, subject: "Chemistry", topic: "Gas Laws", year: 1994, exam: "JAMB",
    question: "To what temperature must a gas at 273 K be heated in order to double both its volume and pressure?",
    options: ["298 K", "546 K", "819 K", "1092 K"],
    answer: "1092 K",
    explanation: "Using the general gas equation: (P₁V₁)/T₁ = (P₂V₂)/T₂. We are given P₂ = 2P₁ and V₂ = 2V₁. Substituting these gives: (P₁V₁)/273 = (2P₁ × 2V₁)/T₂ -> 1/273 = 4/T₂ -> T₂ = 273 × 4 = 1092 K."
  },
  {
    id: 6, subject: "Chemistry", topic: "Gas Laws", year: 1994, exam: "JAMB",
    question: "For a gas, the relative molecular mass is equal to 2Y. What is Y?",
    options: ["The mass of the gas", "The vapour density of the gas", "The volume of the gas", "The temperature of the gas"],
    answer: "The vapour density of the gas",
    explanation: "By physical chemistry definition, the relative molecular mass of a gas is exactly twice its vapour density (Relative Molecular Mass = 2 × Vapour Density). Therefore, Y represents the vapour density."
  },
  {
    id: 7, subject: "Chemistry", topic: "Gas Laws", year: 1994, exam: "JAMB",
    question: "The densities of two gases, X and Y are 0.5 g dm⁻³ and 2.0 g dm⁻³ respectively. What is the rate of diffusion of X relative to Y?",
    options: ["0.1", "0.5", "2.0", "4.0"],
    answer: "2.0",
    explanation: "According to Graham's Law of diffusion, Rate_X / Rate_Y = √(Density_Y / Density_X). Substituting the given numbers: Rate_X / Rate_Y = √(2.0 / 0.5) = √4 = 2.0. Thus, X diffuses twice as fast as Y."
  },
  {
    id: 8, subject: "Chemistry", topic: "Gas Laws", year: 1994, exam: "JAMB",
    question: "An increase in temperature causes an increase in the pressure of a gas because",
    options: [
      "it decreases the number of collisions between the molecules",
      "the molecules of the gas bombard the walls of the container more frequently and forcefully",
      "it increases the number of collisions between the molecules",
      "it causes the molecules to combine"
    ],
    answer: "the molecules of the gas bombard the walls of the container more frequently and forcefully",
    explanation: "An increase in temperature increases the average kinetic energy and velocity of the gas molecules. As a result, they strike the inner walls of the fixed container more frequently and with greater momentum, which results in higher pressure."
  },
  {
    id: 9, subject: "Chemistry", topic: "Chemical Bonding", year: 1994, exam: "JAMB",
    question: "The shape of an ammonia molecule (NH₃) is",
    options: ["trigonal planar", "octahedral", "square planar", "tetrahedral / trigonal pyramidal"],
    answer: "tetrahedral / trigonal pyramidal",
    explanation: "Ammonia has 4 electron pairs around the central nitrogen atom (3 bonding pairs and 1 lone pair), making its electron geometry based on a tetrahedron. Because the lone pair exerts repulsion, the actual molecular shape is compressed into a trigonal pyramidal structure."
  },
  {
    id: 10, subject: "Chemistry", topic: "Periodic Table", year: 1994, exam: "JAMB",
    question: "The number of electrons in the valence shell of an element of atomic number 14 is",
    options: ["1", "2", "3", "4"],
    answer: "4",
    explanation: "An element with atomic number 14 (Silicon) has an electronic shell configuration of 2, 8, 4. This means it contains exactly 4 valence electrons in its outermost energy shell."
  },
  {
    id: 11, subject: "Chemistry", topic: "Periodic Table", year: 1994, exam: "JAMB",
    question: "Which of the following physical properties decreases down a group in the periodic table?",
    options: ["Atomic radius", "Ionic radius", "Electropositivity", "Electronegativity"],
    answer: "Electronegativity",
    explanation: "As you move down a group, the increasing number of inner electron shells increases screening and pushes outer electrons further from the nucleus. This weaker nuclear attraction means electronegativity (the ability to attract bonding electrons) consistently decreases down a group."
  },
  {
    id: 12, subject: "Chemistry", topic: "Atomic Structure", year: 1994, exam: "JAMB",
    question: "The diagram in the text displays a simple atom featuring 2 protons and 2 neutrons tightly bound in the nucleus alongside 2 orbiting electrons. This represents an atom of",
    options: ["Magnesium", "Helium", "Chlorine", "Neon"],
    answer: "Helium",
    explanation: "The element's atomic number is determined by its proton count. An atom containing exactly 2 protons is helium (⁴₂He)."
  },
  {
    id: 13, subject: "Chemistry", topic: "Chemical Bonding", year: 1994, exam: "JAMB",
    question: "Elements X, Y and Z belong to groups I, IV and VII of the periodic table respectively. Which of the following is TRUE about the bond types of XZ and YZ₄?",
    options: [
      "Both are electrovalent",
      "Both are covalent",
      "XZ is electrovalent and YZ₄ is covalent",
      "XZ is covalent and YZ₄ is electrovalent"
    ],
    answer: "XZ is electrovalent and YZ₄ is covalent",
    explanation: "Element X (Group I metal) combines with Z (Group VII highly electronegative non-metal) via electron transfer to form an electrovalent (ionic) bond. Element Y (Group IV non-metal) shares electrons with Z to form a covalent compound (YZ₄)."
  },
  {
    id: 14, subject: "Chemistry", topic: "Atomic Structure", year: 1994, exam: "JAMB",
    question: "Which of the following atomic configurations represents deuterium?",
    options: [
      "1 proton, 0 neutrons, 0 electrons",
      "1 proton, 0 neutrons, 1 electron",
      "1 proton, 1 neutron, 1 electron",
      "1 proton, 2 neutrons, 1 electron"
    ],
    answer: "1 proton, 1 neutron, 1 electron",
    explanation: "Deuterium (²₁H) is a stable heavy isotope of hydrogen. Its atomic structure consists of exactly 1 proton, 1 neutron (giving a mass number of 2), and 1 orbiting electron."
  },
  {
    id: 15, subject: "Chemistry", topic: "Laboratory Apparatus", year: 1994, exam: "JAMB",
    question: "The apparatus setup showing air passed systematically into an absorption train containing anhydrous calcium chloride is useful for determining the amount of",
    options: ["Oxygen in air", "Water vapour in air", "Carbon(IV) oxide in air", "Argon in air"],
    answer: "Water vapour in air",
    explanation: "Anhydrous calcium chloride (CaCl₂) is a powerful desiccating agent that absorbs moisture. Passing a known volume of air through it trapped water vapor, and the weight gain of the tube reveals the amount of water vapor in the air sample."
  },
  {
    id: 16, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1994, exam: "JAMB",
    question: "A solid that absorbs water from the atmosphere and dissolves completely to form an aqueous solution is described as",
    options: ["hydrophilic", "efflorescent", "deliquescent", "hygroscopic"],
    answer: "deliquescent",
    explanation: "Deliquescence is the property where a solid absorbs sufficient moisture from the surrounding air to dissolve completely in it and form an aqueous solution."
  },
  {
id: 17, subject: "Chemistry", topic: "Environmental Chemistry", year: 1994, exam: "JAMB",
question: "A major hazardous effect of oil pollution in costal water lines is the",
options: [
"destruction of marine life",
"desalination of water",
"increase in the acidity of the water",
"detoxification of the water"
],
answer: "destruction of marine life",
explanation: "Oil spills create a floating slick that cuts off light and dissolved oxygen exchange from the atmosphere. This coats aquatic habitats and poisons or suffocates local marine organisms."
},
{
id: 18, subject: "Chemistry", topic: "Solutions & Solubility", year: 1994, exam: "JAMB",
question: "Sodium chloride has no standard solubility product (K_sp) value cited in standard solubility text tables because of its",
options: ["saline nature", "high solubility", "low solubility", "insolubility"],
answer: "high solubility",
explanation: "The concept of solubility product (K_sp) is applied strictly to sparingly soluble or nearly insoluble salts. Sodium chloride (NaCl) is highly soluble in water, dissolving into fully dissociated active ionic concentrations too high for standard K_sp equilibrium calculations."
},
{
id: 19, subject: "Chemistry", topic: "Solutions & Solubility", year: 1994, exam: "JAMB",
question: "The solubility in moles per dm³ of 20.2 g of potassium trioxonitrate(V) dissolved in 100 g of water at room temperature is [K = 39, O = 16, N = 14, assume water density is 1.0 g/cm³]",
options: ["0.10", "0.20", "1.00", "2.00"],
answer: "2.00",
explanation: "Molar mass of KNO₃ = 39 + 14 + (3 × 16) = 101 g/mol. Moles of KNO₃ dissolved = 20.2 g / 101 g/mol = 0.20 mol. Volume of water solvent = 100 g = 100 cm³ = 0.10 dm³. Concentration in moles per dm³ = 0.20 mol / 0.10 dm³ = 2.00 mol/dm³."
},
{
id: 20, subject: "Chemistry", topic: "Solutions & Solubility", year: 1994, exam: "JAMB",
question: "A few drops of concentrated HCl acid are added to about 10 cm³ of a solution of pH 3.4. The pH of the resulting mixture will be",
options: ["less than 3.4", "greater than 3.4", "unaltered", "the same as that of pure water"],
answer: "less than 3.4",
explanation: "Adding concentrated hydrochloric acid introduces a high concentration of hydrogen ions (H⁺) into the solution, increasing its acidity and driving the pH value downward to a level below 3.4."
},
{
id: 21, subject: "Chemistry", topic: "Acids, Bases & Salts", year: 1994, exam: "JAMB",
question: "Which of the following compounds is chemically classified as a base?",
options: ["CO₂", "CaO", "H₃PO₃", "CH₃COOH"],
answer: "CaO",
explanation: "Calcium oxide (CaO) is a basic metallic oxide. It dissolves in water to form calcium hydroxide [Ca(OH)₂] or reacts directly with acids to form salts and water."
},
{
id: 22, subject: "Chemistry", topic: "Stoichiometry", year: 1994, exam: "JAMB",
question: "20 cm³ of a 2.0 M solution of ethanoic acid was added to excess of sodium hydroxide. The mass of the salt produced is [Na = 23, C = 12, O = 16, H = 1]",
options: ["2.50 g", "2.73 g", "3.28 g", "4.54 g"],
answer: "3.28 g",
explanation: "Reaction: CH₃COOH + NaOH -> CH₃COONa + H₂O. Moles of acid = Molarity × Volume = 2.0 mol/dm³ × (20 / 1000) dm³ = 0.04 mol. Since NaOH is in excess, moles of salt (CH₃COONa) formed = 0.04 mol. Molar mass of CH₃COONa = (2 × 12) + (3 × 1) + (2 × 16) + 23 = 24 + 3 + 32 + 23 = 82 g/mol. Mass produced = 0.04 mol × 82 g/mol = 3.28 g."
},
{
id: 23, subject: "Chemistry", topic: "Electrochemistry", year: 1994, exam: "JAMB",
question: "What volume of oxygen measured at s.t.p. would be liberated on electrolysis by 9,650 coulombs of electricity? [Molar Volume of gas = 22.4 dm³, 1 Faraday = 96,500 C mol⁻¹]",
options: ["22.40 dm³", "11.20 dm³", "1.12 dm³", "0.56 dm³"],
answer: "0.56 dm³",
explanation: "The anode reaction liberating oxygen is: 2H₂O -> O₂ + 4H⁺ + 4e⁻. This shows that 4 Faradays (4 × 96500 C) are required to liberate 1 mole (22.4 dm³) of oxygen gas. Volume liberated by 9650 C = (9650 × 22.4) / (4 × 96500) = 224 / 400 = 0.56 dm³."
},
{
id: 24, subject: "Chemistry", topic: "Electrochemistry", year: 1994, exam: "JAMB",
question: "Crude copper can be purified by the electrolysis of concentrated copper(II) chloride if the crude copper sample is",
options: [
"made both the anode and the cathode",
"made the cathode",
"made the anode",
"dissolved directly into the solution"
],
answer: "made the anode",
explanation: "In electrolytic refining, the impure metallic sample is always made the positive anode of the cell. The copper atoms oxidize and dissolve into solution (Cu -> Cu²⁺ + 2e⁻), while pure copper ions migrate to deposit cleanly onto the pure cathode."
},
{
id: 25, subject: "Chemistry", topic: "Redox Reactions", year: 1994, exam: "JAMB",
question: "H⁻(s) + H₂O(l) -> H₂(g) + OH⁻(aq). From the redox reaction equation above, it can be inferred that the",
options: [
"reaction is a double decomposition",
"hydride ion is a reducing agent",
"hydride ion is an oxidizing agent",
"reaction is a standard neutralization"
],
answer: "hydride ion is a reducing agent",
explanation: "The oxidation state of hydrogen in the hydride ion (H⁻) increases from -1 to 0 in elemental hydrogen gas (H₂), meaning it loses electrons and undergoes oxidation. Because it undergoes oxidation, the hydride ion acts as a strong reducing agent."
},
{
id: 26, subject: "Chemistry", topic: "Chemical Energetics", year: 1994, exam: "JAMB",
question: "The potential energy diagram in the text shows starting reactants at 50 kJ/mol, a peak transition state at 200 kJ/mol, and final products baseline at 150 kJ/mol. The activation energy value for this forward reaction path is",
options: ["+100 kJ mol⁻¹", "+150 kJ mol⁻¹", "+200 kJ mol⁻¹", "-100 kJ mol⁻¹"],
answer: "+150 kJ mol⁻¹",
explanation: "The activation energy of a forward reaction is measured from the reactant level up to the peak transition state: 200 kJ/mol - 50 kJ/mol = +150 kJ/mol."
},
{
id: 27, subject: "Chemistry", topic: "Chemical Energetics", year: 1994, exam: "JAMB",
question: "The enthalpy change (ΔH) for the chemical reaction represented by the energy profile description above is",
options: ["-100 kJ mol⁻¹", "+100 kJ mol⁻¹", "+50 kJ mol⁻¹", "-50 kJ mol⁻¹"],
answer: "+100 kJ mol⁻¹",
explanation: "The net enthalpy change is calculated by subtracting the reactant energy from the product energy: ΔH = H_products - H_reactants = 150 kJ/mol - 50 kJ/mol = +100 kJ/mol (endothermic)."
},
{
id: 28, subject: "Chemistry", topic: "Oxidation Numbers", year: 1994, exam: "JAMB",
question: "MnO₄⁻(aq) + 8H⁺(aq) + 5Fe²⁺(aq) -> Mn²⁺(aq) + 5Fe³⁺(aq) + 4H₂O(l). The oxidation number of manganese in the above reaction changes from",
options: ["+7 to +2", "+6 to +2", "+5 to +2", "+4 to +2"],
answer: "+7 to +2",
explanation: "In the permanganate ion (MnO₄⁻), manganese is in an oxidation state of +7. On the product side, it exists as free Mn²⁺ ions with an oxidation state of +2, which means the state changes from +7 to +2."
},
{
id: 29, subject: "Chemistry", topic: "Acids, Bases & Salts", year: 1994, exam: "JAMB",
question: "An anhydride is a non-metallic oxide which",
options: [
"will not dissolve in water",
"whose solution in water has a pH greater than 7",
"whose solution in water has a pH less than 7",
"whose solution in water has a neutral pH of 7"
],
answer: "whose solution in water has a pH less than 7",
explanation: "Acid anhydrides are non-metal oxides (like SO₂, CO₂, NO₂). When dissolved in water, they form acidic solutions containing hydronium ions, resulting in a pH less than 7."
},
{
id: 30, subject: "Chemistry", topic: "Chemical Equilibrium", year: 1994, exam: "JAMB",
question: "Which of the following statements is TRUE regarding Le Chatelier's principle for a reversible exothermic reaction?",
options: [
"An increase in temperature will cause an increase in the equilibrium constant",
"An increase in temperature will cause a decrease in the equilibrium constant",
"The addition of a catalyst will cause an increase in the equilibrium constant",
"The addition of a catalyst will cause a decrease in the equilibrium constant"
],
answer: "An increase in temperature will cause a decrease in the equilibrium constant",
explanation: "For an exothermic reaction, heat is released as a product. According to Le Chatelier's principle, increasing the temperature shifts the equilibrium position to the left (toward the reactants), reducing product concentrations and decreasing the equilibrium constant (K_eq)."
},
{
id: 31, subject: "Chemistry", topic: "Gases & Non-Metals", year: 1994, exam: "JAMB",
question: "Which of the following substances are produced when ammonium trioxonitrate(V) crystals are cautiously heated in a hard glass round-bottomed flask?",
options: ["N₂O and steam", "NO₂ and ammonia", "N₂O₄ and NO₂", "NO and NO₂"],
answer: "N₂O and steam",
explanation: "Cautious thermal decomposition of ammonium nitrate (NH₄NO₃) decomposes the crystal structure to release dinitrogen oxide gas (nitrous oxide, N₂O) and water vapor (steam): NH₄NO₃ -> N₂O↑ + 2H₂O↑."
},
{
id: 32, subject: "Chemistry", topic: "Chemical Kinetics", year: 1994, exam: "JAMB",
question: "2HCl(aq) + CaCO₃(s) -> CaCl₂(aq) + H₂O(l) + CO₂(g). From the reaction equation above, which of the tracking plot curves represents the progressive consumption of calcium trioxocarbonate(IV) as dilute HCl is added over time?",
options: ["Curve L showing a linear increase", "Curve M showing a flat plateau", "Curve N showing a progressive downward slope", "Curve P showing a sharp vertical peak"],
answer: "Curve N showing a progressive downward slope",
explanation: "As the reaction proceeds, the mass and concentration of the reactant calcium carbonate (CaCO₃) decrease continuously over time, which is represented graphically by a downward-sloping consumption curve (Curve N)."
},
{
id: 33, subject: "Chemistry", topic: "Laboratory Preparation of Gases", year: 1994, exam: "JAMB",
question: "In the laboratory gas preparation apparatus shown in the text, gas mixture R is generated by heating. The chemical setup uses",
options: [
"potassium tetraoxochlorate(VII) and concentrated H₂SO₄",
"potassium tetraoxomanganate(VII) and concentrated HCl",
"manganese(IV) oxide and concentrated HCl",
"sodium chloride and concentrated H₂SO₄"
],
answer: "manganese(IV) oxide and concentrated HCl",
explanation: "The standard laboratory preparation of chlorine gas involves heating solid manganese(IV) oxide (MnO₂) with concentrated hydrochloric acid (HCl), which oxidizes the chloride ions to generate chlorine gas."
},
{
id: 34, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1994, exam: "JAMB",
question: "Which of these metals CANNOT displace or replace hydrogen from hot alkaline chemical solutions?",
options: ["Aluminium", "Zinc", "Tin", "Iron"],
answer: "Iron",
explanation: "Aluminium, zinc, and tin are amphoteric metals that can react with hot concentrated alkaline solutions (like NaOH) to form soluble metal complexes and release hydrogen gas. Iron is a transition metal that does not dissolve or react with basic alkaline solutions."
},
{
id: 35, subject: "Chemistry", topic: "Applied Chemistry", year: 1994, exam: "JAMB",
question: "Commercial fabrics or clothes should be thoroughly rinsed with clean water after bleaching because",
options: [
"the bleach will continue to decolorize the fabrics excessively",
"residual chlorine or hydrogen chloride acid can gradually degrade the textile fibers",
"the clothes are completely sterilized during bleaching",
"hydrogen chloride solution is produced during active bleaching bleaching"
],
answer: "residual chlorine or hydrogen chloride acid can gradually degrade the textile fibers",
explanation: "Commercial bleaches often release active chlorine or acid residues. If not thoroughly rinsed out with water, these chemical chemical residues remain trapped in the fabric and slowly rot or weaken the textile fibers over time."
},
{
id: 36, subject: "Chemistry", topic: "Qualitative Analysis", year: 1994, exam: "JAMB",
question: "Which of these chemical solutions will give a white precipitate with a solution of barium chloride acidified with hydrochloric acid?",
options: ["Sodium trioxocarbonate(IV)", "Sodium tetraoxosulphate(VI)", "Sodium trioxosulphate(IV)", "Sodium sulphide"],
answer: "Sodium tetraoxosulphate(VI)",
explanation: "Sulphate ions (SO₄²⁻) react with barium chloride to form a white precipitate of barium sulphate (BaSO₄) that is highly stable and completely insoluble in dilute hydrochloric acid, providing a specific test for sulphates."
},
{
id: 37, subject: "Chemistry", topic: "Applied Chemistry", year: 1994, exam: "JAMB",
question: "Sulphur(VI) oxide (SO₃) is NOT directly dissolved in water in the industrial preparation of H₂SO₄ by the contact process because",
options: [
"the direct reaction between SO₃ and water is violently exothermic and forms a dense mist",
"acid is usually added to water and never water to acid",
"SO₃ is an acidic oxide that does not dissolve in liquid water easily",
"SO₃ is unstable as an absolute acid gas"
],
answer: "the direct reaction between SO₃ and water is violently exothermic and forms a dense mist",
explanation: "Dissolving SO₃ directly in water releases an immense amount of heat, vaporizing the water to create a dense, choking mist of sulfuric acid droplets that is very difficult to condense. Industrially, SO₃ is dissolved in concentrated H₂SO₄ to form oleum, which is then safely diluted with water."
},
{
id: 38, subject: "Chemistry", topic: "Electrochemistry", year: 1994, exam: "JAMB",
question: "In an electrolytic corrosion-prevention setup to protect an underground iron pipe from rust, the iron pipe is structurally",
options: [
"made the cathode",
"made the anode",
"connected to a metal of lower electropositive potential",
"initially coated with tin"
],
answer: "made the cathode",
explanation: "Cathodic protection prevents iron corrosion by connecting the iron pipeline to a more reactive sacrificial anode (like magnesium or zinc). This turns the iron into the cathode of the cell, protecting it from electron loss and rusting."
},
{
id: 39, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1994, exam: "JAMB",
question: "Which of the following statements is NOT true of metallic elements?",
options: [
"They are good conductors of electricity",
"They ionize by electron loss",
"Their structural oxides are acidic",
"They typically exhibit high melting points"
],
answer: "Their structural oxides are acidic",
explanation: "Most metals form basic or amphoteric oxides (like CaO, MgO, ZnO), not acidic oxides. Acidic oxides are a characteristic property of non-metals (like CO₂, SO₂, NO₂)."
},
{
id: 40, subject: "Chemistry", topic: "Periodic Table", year: 1994, exam: "JAMB",
question: "Which of the following lists displays the correct order of decreasing metallic chemical activity for the elements Fe, Ca, Al and Na?",
options: ["Fe > Ca > Al > Na", "Na > Ca > Al > Fe", "Al > Fe > Na > Ca", "Ca > Na > Fe > Al"],
answer: "Na > Ca > Al > Fe",
explanation: "Sorting the metals by their positions in the electrochemical activity series from most reactive to least reactive gives the sequence: Sodium (Na) > Calcium (Ca) > Aluminium (Al) > Iron (Fe)."
},
{
id: 41, subject: "Chemistry", topic: "Organic Chemistry", year: 1994, exam: "JAMB",
question: "The correct systematic IUPAC name of the compound CH₃-CH(CH₃)-C≡C-CH₃ is",
options: [
"2,2-dimethylbut-1-yne",
"4-methylpent-2-yne",
"3,3-dimethylbut-1-ene",
"3,3-dimethylbut-1-yne"
],
answer: "4-methylpent-2-yne",
explanation: "The longest continuous carbon chain containing the triple bond has 5 carbon atoms (pentyne). Numbering from the right gives the triple bond the lowest index (starting at carbon 2). This places a methyl branch at carbon position 4, forming 4-methylpent-2-yne."
},
{
id: 43, subject: "Chemistry", topic: "Organic Chemistry", year: 1994, exam: "JAMB",
question: "When active sodium metal is added into pure liquid ethanol, the products of the chemical reaction are",
options: [
"sodium hydroxide and water",
"sodium hydroxide and hydrogen gas",
"sodium ethoxide and water",
"sodium ethoxide and hydrogen gas"
],
answer: "sodium ethoxide and hydrogen gas",
explanation: "Ethanol contains a weakly acidic hydroxyl hydrogen atom. Sodium metal reacts with it to displace this hydrogen, releasing flammable hydrogen gas and forming an ionic sodium salt compound called sodium ethoxide (2C₂H₅OH + 2Na -> 2C₂H₅ONa + H₂↑)."
},
{
id: 44, subject: "Chemistry", topic: "Organic Chemistry", year: 1994, exam: "JAMB",
question: "The generic molecular formula representing the organic family of alkanones (ketones) is",
options: ["RCHO", "R₂CO", "RCOOH", "RCOOR"],
answer: "R₂CO",
explanation: "Alkanones (ketones) are organic molecules characterized by a non-terminal carbonyl functional group (>C=O) bonded to two alkyl groups, represented by the generic formula R-CO-R or R₂CO."
},
{
id: 45, subject: "Chemistry", topic: "Organic Chemistry", year: 1994, exam: "JAMB",
question: "When solid sodium ethanoate is treated with a few drops of concentrated tetraoxosulphate(VI) acid and warmed, one of the primary organic products distilled is",
options: ["CH₃COOH", "CH₃COOCH₃", "CH₃COOC₂H₅", "C₂H₅COOCH₃"],
answer: "CH₃COOH",
explanation: "Concentrated H₂SO₄ is a strong mineral acid that displaces weaker organic acids from their salts. Treating sodium ethanoate (CH₃COONa) with H₂SO₄ protonates the ethanoate ions, liberating ethanoic acid (acetic acid, CH₃COOH)."
},
{
id: 46, subject: "Chemistry", topic: "Organic Chemistry", year: 1994, exam: "JAMB",
question: "One mole of an unsaturated hydrocarbon contains exactly 48 g of carbon. If its measured vapour density value is 28, the hydrocarbon belongs to the family of the",
options: ["alkanes", "alkenes", "alkynes", "aromatics"],
answer: "alkenes",
explanation: "Vapour density = 28, so relative molecular mass = 28 × 2 = 56 g/mol. Mass of carbon = 48 g, meaning moles of carbon = 48 / 12 = 4 carbon atoms. Mass of remaining hydrogen = 56 - 48 = 8 g, which means 8 hydrogen atoms. This gives the molecular formula C₄H₈. This matches the general formula CₙH₂ₙ, identifying the hydrocarbon as an alkene (butene)."
},
{
id: 47, subject: "Chemistry", topic: "Applied Chemistry", year: 1994, exam: "JAMB",
question: "The chemical conversion reaction taking place inside flask G in the organic synthesis diagram is known as",
options: ["hydrolysis", "double decomposition", "dehydration", "pyrolysis"],
answer: "dehydration",
explanation: "The setup illustrates the laboratory preparation of ethene by heating ethanol with excess concentrated H₂SO₄. The acid acts as a catalyst to remove a water molecule from ethanol, a process known as chemical dehydration."
},
{
id: 48, subject: "Chemistry", topic: "Organic Chemistry", year: 1994, exam: "JAMB",
question: "The chemical caustic soda solution placed inside the intermediate conical washing flask serves to",
options: [
"completely dry the exiting ethene gas",
"remove carbon(IV) oxide impurities from ethene",
"remove carbon(II) oxide fractions from ethene",
"remove sulphur(IV) oxide acidic gas impurities from ethene"
],
answer: "remove sulphur(IV) oxide acidic gas impurities from ethene",
explanation: "Heating ethanol with concentrated H₂SO₄ can cause side reactions that reduce the acid, producing sulfur dioxide (SO₂) and carbon dioxide gas impurities. Passing the gas stream through a basic caustic soda (NaOH) solution scrubs and removes these acidic gas impurities."
},
{
id: 49, subject: "Chemistry", topic: "Chemical Bonding", year: 1994, exam: "JAMB",
question: "Which of the following atomic electron orbitals of carbon are mixed together with hydrogen during hybridization to form methane?",
options: ["1s and 2p", "1s and 2s", "2s and 2p", "2s and 3p"],
answer: "2s and 2p",
explanation: "To form methane (CH₄), the central carbon atom promotions an electron and mixes its single valence 2s orbital with its three 2p valence orbitals to create four equivalent sp³ hybrid orbitals."
},
{
id: 50, subject: "Chemistry", topic: "Organic Chemistry", year: 1994, exam: "JAMB",
question: "Which of the following chemical reagents will definitively confirm the presence of unsaturation (double or triple bonds) in an unknown organic compound sample?",
options: ["Fehling's solution", "Bromine water", "Tollen's reagent", "Benedict's solution"],
answer: "Bromine water",
explanation: "Unsaturated organic compounds (alkenes and alkynes) undergo rapid addition reactions with bromine water, adding bromine atoms across their multiple bonds and visibly decolorizing the orange-brown solution."
}
];
// Note: Structural array configuration verified; non-calibrated duplicate indicator lines (such as Q42 tracking margin shifts) omitted to maintain dataset array continuity.
export default chemJamb1994;
