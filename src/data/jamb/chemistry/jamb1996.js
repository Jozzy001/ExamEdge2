// JAMB 1996 Chemistry Past Questions
// Fully audited - questions, answers, calculations, explanations, and app-safe formatting.
// Diagram/source-dependent questions are flagged with CHECK SOURCE where necessary.

const chemJamb1996 = [

  {
    id: 1, subject: "Chemistry", topic: "Separation Techniques", year: 1996, exam: "JAMB",
    question: "A mixture of components with very close boiling points can best be separated into its individual parts by",
    options: ["simple distillation", "fractional distillation", "evaporation", "decantation"],
    answer: "fractional distillation",
    explanation: "Fractional distillation separates miscible liquids with close boiling points by repeated vaporization and condensation in a fractionating column."
  },

  {
    id: 2, subject: "Chemistry", topic: "Separation Techniques", year: 1996, exam: "JAMB",
    question: "Which of the following is a homogeneous mixture?",
    options: ["A suspension of chalk in water", "A mixture of sand and salt", "An aqueous solution of sugar", "A muddy water sample"],
    answer: "An aqueous solution of sugar",
    explanation: "An aqueous sugar solution is homogeneous because the sugar dissolves uniformly throughout the water to form one phase."
  },

  {
    id: 3, subject: "Chemistry", topic: "Stoichiometry", year: 1996, exam: "JAMB",
    question: "What volume of hydrogen gas at s.t.p. is required to completely react with 11.2 dm3 of oxygen gas to form steam? [Molar volume of gas at s.t.p. = 22.4 dm3]",
    options: ["5.6 dm3", "11.2 dm3", "22.4 dm3", "44.8 dm3"],
    answer: "22.4 dm3",
    explanation: "The reaction is 2H2 + O2 -> 2H2O. Two volumes of hydrogen react with one volume of oxygen. Therefore, 11.2 dm3 of oxygen requires 2 x 11.2 = 22.4 dm3 of hydrogen."
  },

  {
    id: 4, subject: "Chemistry", topic: "Stoichiometry", year: 1996, exam: "JAMB",
    question: "If 1.0 mole of a hydrocarbon is completely burned in excess oxygen to produce 3 moles of carbon(IV) oxide and 4 moles of water vapor, the molecular formula of the hydrocarbon is",
    options: ["CH4", "C2H6", "C3H8", "C4H10"],
    answer: "C3H8",
    explanation: "Three moles of CO2 show that the hydrocarbon contains 3 carbon atoms. Four moles of H2O contain 8 hydrogen atoms. Therefore, the formula is C3H8."
  },

  {
    id: 5, subject: "Chemistry", topic: "Gas Laws", year: 1996, exam: "JAMB",
    question: "The volume of a gas at 27 C is 200 cm3. What will be its volume at 127 C if pressure is kept constant?",
    options: ["150 cm3", "200 cm3", "266.7 cm3", "470.4 cm3"],
    answer: "266.7 cm3",
    explanation: "By Charles's law, V1/T1 = V2/T2. T1 = 300 K and T2 = 400 K. Therefore, V2 = (200 x 400)/300 = 266.7 cm3."
  },

  {
    id: 6, subject: "Chemistry", topic: "Gas Laws", year: 1996, exam: "JAMB",
    question: "The rate of diffusion of a gas is inversely proportional to the square root of its density. This law was formulated by",
    options: ["Boyle", "Charles", "Graham", "Dalton"],
    answer: "Graham",
    explanation: "Graham's law states that the rate of diffusion or effusion of a gas is inversely proportional to the square root of its density or molar mass."
  },

  {
    id: 7, subject: "Chemistry", topic: "Gas Laws", year: 1996, exam: "JAMB",
    question: "The total pressure exerted by a mixture of non-reacting gases is equal to the sum of the partial pressures of the individual gases. This principle is known as",
    options: ["Boyle's Law", "Dalton's Law", "Gay-Lussac's Law", "Avogadro's Law"],
    answer: "Dalton's Law",
    explanation: "Dalton's law of partial pressures states that the total pressure of a mixture of non-reacting gases is the sum of the partial pressures of the individual gases."
  },

  {
    id: 8, subject: "Chemistry", topic: "Atomic Structure", year: 1996, exam: "JAMB",
    question: "An atom contains 11 protons, 12 neutrons and 11 electrons. What is its mass number?",
    options: ["11", "12", "23", "34"],
    answer: "23",
    explanation: "Mass number = number of protons + number of neutrons = 11 + 12 = 23."
  },

  {
    id: 9, subject: "Chemistry", topic: "Atomic Structure", year: 1996, exam: "JAMB",
    question: "Which of the following electronic configurations represents an element with the chemical properties of an alkaline earth metal?",
    options: [
      "1s2 2s2 2p6",
      "1s2 2s2 2p6 3s1",
      "1s2 2s2 2p6 3s2",
      "1s2 2s2 2p6 3s2 3p1"
    ],
    answer: "1s2 2s2 2p6 3s2",
    explanation: "Alkaline earth metals belong to Group 2 and have two valence electrons. The configuration shown is that of magnesium."
  },

  {
    id: 10, subject: "Chemistry", topic: "Chemical Bonding", year: 1996, exam: "JAMB",
    question: "The bond formed when two identical non-metal atoms share an electron pair equally is a/an",
    options: ["ionic bond", "non-polar covalent bond", "polar covalent bond", "dative covalent bond"],
    answer: "non-polar covalent bond",
    explanation: "Identical non-metal atoms have the same electronegativity, so the shared electrons are distributed equally. This forms a non-polar covalent bond."
  },

  {
    id: 11, subject: "Chemistry", topic: "Chemical Bonding", year: 1996, exam: "JAMB",
    question: "The continuous three-dimensional network bond holding atoms together inside a crystal of diamond is",
    options: ["ionic", "metallic", "covalent", "van der waals"],
    answer: "covalent",
    explanation: "Diamond has a giant covalent structure in which each carbon atom is strongly covalently bonded to four neighbouring carbon atoms."
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
    explanation: "Across a period, electrons are added to the same principal shell while nuclear charge increases. The stronger attraction pulls the electrons closer to the nucleus."
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
    explanation: "A saturated solution contains the maximum amount of solute that can remain dissolved at a particular temperature when it is in equilibrium with undissolved solute."
  },

  {
    id: 14, subject: "Chemistry", topic: "Water Chemistry", year: 1996, exam: "JAMB",
    question: "Temporary hardness of water is caused by the presence of dissolved",
    options: ["calcium chloride", "magnesium sulphate", "calcium hydrogencarbide", "calcium hydrogentrioxocarbonate(IV)"],
    answer: "calcium hydrogentrioxocarbonate(IV)",
    explanation: "Temporary hardness is caused mainly by dissolved calcium and magnesium hydrogentrioxocarbonates. These decompose on boiling to form insoluble carbonates."
  },

  {
    id: 15, subject: "Chemistry", topic: "Water Chemistry", year: 1996, exam: "JAMB",
    question: "Which of the following processes can be used to remove permanent hardness from water?",
    options: ["Boiling", "Addition of slaked lime", "Passing through an ion-exchange resin / permutit", "Addition of alum"],
    answer: "Passing through an ion-exchange resin / permutit",
    explanation: "Permanent hardness cannot be removed by boiling. Ion-exchange materials such as permutit remove Ca2+ and Mg2+ ions by exchanging them for Na+ ions."
  },

  {
    id: 16, subject: "Chemistry", topic: "Environmental Chemistry", year: 1996, exam: "JAMB",
    question: "The gas chiefly responsible for the enhanced greenhouse effect and global warming is",
    options: ["carbon(II) oxide", "carbon(IV) oxide", "sulphur(IV) oxide", "nitrogen(I) oxide"],
    answer: "carbon(IV) oxide",
    explanation: "Carbon(IV) oxide, CO2, is a major greenhouse gas. Increased atmospheric CO2 from human activities contributes significantly to the enhanced greenhouse effect and global warming."
  },

  {
    id: 17, subject: "Chemistry", topic: "Solutions & Solubility", year: 1996, exam: "JAMB",
    question: "A colloid formed by dispersing liquid droplets inside another liquid medium is classified as a/an",
    options: ["sol", "gel", "emulsion", "foam"],
    answer: "emulsion",
    explanation: "An emulsion is a colloid in which one liquid is dispersed as droplets in another liquid that does not mix with it. Milk is a common example."
  },

  {
    id: 18, subject: "Chemistry", topic: "Acids, Bases & Salts", year: 1996, exam: "JAMB",
    question: "A basic solution can be identified by its ability to turn",
    options: ["blue litmus red", "red litmus blue", "phenolphthalein colorless", "methyl orange pink"],
    answer: "red litmus blue",
    explanation: "A basic solution turns red litmus paper blue."
  },

  {
    id: 19, subject: "Chemistry", topic: "Solutions & Solubility", year: 1996, exam: "JAMB",
    question: "What is the hydrogen ion [H+] concentration of an aqueous solution that has a measured pH of 3.0?",
    options: ["1.0 x 10^-3 M", "1.0 x 10^-7 M", "3.0 M", "1.0 x 10^3 M"],
    answer: "1.0 x 10^-3 M",
    explanation: "pH = -log[H+]. Therefore, [H+] = 10^(-3) = 1.0 x 10^-3 M."
  },

  {
    id: 20, subject: "Chemistry", topic: "Acids, Bases & Salts", year: 1996, exam: "JAMB",
    question: "An example of a normal salt formed by complete replacement of the replaceable hydrogen atoms of an acid is",
    options: ["NaHSO4", "KHCO3", "Na2CO3", "Mg(OH)Cl"],
    answer: "Na2CO3",
    explanation: "Na2CO3 is a normal salt because both acidic hydrogen atoms of H2CO3 have been replaced by sodium ions. NaHSO4 and KHCO3 are acid salts."
  },

  {
    id: 21, subject: "Chemistry", topic: "Stoichiometry & Titration", year: 1996, exam: "JAMB",
    question: "What volume of 0.2 M HCl acid solution is required to completely neutralize 25 cm3 of 0.1 M NaOH solution?",
    options: ["12.5 cm3", "25.0 cm3", "50.0 cm3", "100.0 cm3"],
    answer: "12.5 cm3",
    explanation: "HCl + NaOH -> NaCl + H2O. The mole ratio is 1:1. M1V1 = M2V2, so 0.2 x V = 0.1 x 25. Therefore, V = 12.5 cm3."
  },

  {
    id: 22, subject: "Chemistry", topic: "Electrochemistry", year: 1996, exam: "JAMB",
    question: "During the electrolysis of molten sodium chloride, the product formed at the anode is",
    options: ["sodium metal", "hydrogen gas", "chlorine gas", "oxygen gas"],
    answer: "chlorine gas",
    explanation: "At the anode, chloride ions lose electrons: 2Cl- -> Cl2 + 2e-. Therefore, chlorine gas is produced."
  },

  {
    id: 23, subject: "Chemistry", topic: "Electrochemistry", year: 1996, exam: "JAMB",
    question: "The quantity of electricity required to deposit one mole of a univalent metal ion such as Ag+ at the cathode is equal to",
    options: ["0.5 Faraday", "1.0 Faraday", "2.0 Faradays", "3.0 Faradays"],
    answer: "1.0 Faraday",
    explanation: "Ag+ + e- -> Ag. One mole of Ag+ requires one mole of electrons, which is one Faraday of electricity."
  },

  {
    id: 24, subject: "Chemistry", topic: "Redox Reactions", year: 1996, exam: "JAMB",
    question: "In the single displacement reaction: Zn(s) + CuSO4(aq) -> ZnSO4(aq) + Cu(s), zinc has been",
    options: ["oxidized", "reduced", "precipitated", "decomposed"],
    answer: "oxidized",
    explanation: "Zinc changes from oxidation state 0 to +2 by losing electrons. Loss of electrons is oxidation."
  },

  {
    id: 25, subject: "Chemistry", topic: "Oxidation Numbers", year: 1996, exam: "JAMB",
    question: "What is the oxidation number of manganese inside potassium permanganate, KMnO4?",
    options: ["+2", "+4", "+6", "+7"],
    answer: "+7",
    explanation: "In KMnO4, K = +1 and each O = -2. Therefore, +1 + Mn + 4(-2) = 0, so Mn = +7."
  },

  {
    id: 26, subject: "Chemistry", topic: "Chemical Energetics", year: 1996, exam: "JAMB",
    question: "A chemical reaction that absorbs heat energy from its surroundings is described as",
    options: ["exothermic", "endothermic", "spontaneous", "isothermal"],
    answer: "endothermic",
    explanation: "An endothermic reaction absorbs heat from its surroundings and has a positive enthalpy change."
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
    explanation: "A catalyst provides an alternative reaction pathway with a lower activation energy. It does not change the equilibrium position."
  },

  {
    id: 28, subject: "Chemistry", topic: "Chemical Equilibrium", year: 1996, exam: "JAMB",
    question: "According to Le Chatelier's principle, if an equilibrium system is subjected to an increase in temperature, the reaction will shift to favor the",
    options: ["exothermic reaction path", "endothermic reaction path", "side with more gas moles", "side with fewer gas moles"],
    answer: "endothermic reaction path",
    explanation: "Increasing temperature adds heat to the system. The equilibrium shifts in the direction that absorbs the added heat, which is the endothermic direction."
  },

  {
    id: 29, subject: "Chemistry", topic: "Gases & Non-Metals", year: 1996, exam: "JAMB",
    question: "Which of the following gases is highly soluble in water under standard conditions?",
    options: ["Oxygen", "Nitrogen", "Ammonia", "Hydrogen"],
    answer: "Ammonia",
    explanation: "Ammonia is highly soluble in water because it interacts strongly with water molecules and also reacts reversibly with water to form NH4+ and OH- ions."
  },

  {
    id: 30, subject: "Chemistry", topic: "Gases & Non-Metals", year: 1996, exam: "JAMB",
    question: "Carbon(II) oxide gas is highly dangerous and toxic to humans because it",
    options: [
      "is strongly acidic and burns lung tissues",
      "binds strongly to hemoglobin, blocking oxygen transport",
      "triggers rapid atmospheric ozone depletion",
      "decomposes into solid soot inside windpipes"
    ],
    answer: "binds strongly to hemoglobin, blocking oxygen transport",
    explanation: "Carbon(II) oxide, CO, binds strongly to haemoglobin to form carboxyhaemoglobin, reducing the blood's ability to transport oxygen."
  },

  {
    id: 31, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1996, exam: "JAMB",
    question: "The gas released when dilute hydrochloric acid reacts with calcium carbonate solid is",
    options: ["hydrogen gas", "chlorine gas", "carbon(IV) oxide", "carbon(II) oxide"],
    answer: "carbon(IV) oxide",
    explanation: "The reaction is CaCO3 + 2HCl -> CaCl2 + H2O + CO2. Therefore, carbon(IV) oxide is released."
  },

  {
    id: 32, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1996, exam: "JAMB",
    question: "The acid anhydride corresponding to tetraoxosulphate(VI) acid is",
    options: ["sulphur(IV) oxide", "sulphur(VI) oxide", "hydrogen sulphide", "peroxodisulphate oxide"],
    answer: "sulphur(VI) oxide",
    explanation: "Sulphur(VI) oxide, SO3, is the acid anhydride of H2SO4 because SO3 + H2O -> H2SO4."
  },

  {
    id: 33, subject: "Chemistry", topic: "Qualitative Analysis", year: 1996, exam: "JAMB",
    question: "A gas stream passed into an acidified solution of potassium heptaoxodichromate(VI) turns the solution from orange to green. The gas is identified as",
    options: ["oxygen", "carbon(IV) oxide", "sulphur(IV) oxide", "nitrogen(IV) oxide"],
    answer: "sulphur(IV) oxide",
    explanation: "SO2 is a reducing agent. It reduces orange dichromate ions, Cr2O7^2-, to green Cr3+ ions."
  },

  {
    id: 34, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1996, exam: "JAMB",
    question: "Aluminium oxide is classified as an amphoteric oxide because it",
    options: [
      "does not dissolve in water",
      "reacts with both acids and strong bases to form salts and water",
      "displays multiple stable structural allotropes",
      "undergoes spontaneous radioactive decay"
    ],
    answer: "reacts with both acids and strong bases to form salts and water",
    explanation: "Aluminium oxide reacts with acids and also with strong bases. This dual behaviour is characteristic of an amphoteric oxide."
  },

  {
    id: 35, subject: "Chemistry", topic: "Applied Chemistry", year: 1996, exam: "JAMB",
    question: "The major ore from which aluminium metal is extracted commercially on a large scale is",
    options: ["haematite", "bauxite", "cassiterite", "galena"],
    answer: "bauxite",
    explanation: "Bauxite is the principal ore used in the commercial extraction of aluminium. Alumina is obtained from bauxite and then electrolysed to produce aluminium."
  },

  {
    id: 36, subject: "Chemistry", topic: "Applied Chemistry", year: 1996, exam: "JAMB",
    question: "Brass is an alloy containing copper and",
    options: ["tin", "zinc", "nickel", "lead"],
    answer: "zinc",
    explanation: "Brass is mainly an alloy of copper and zinc. Copper and tin form bronze."
  },

  {
    id: 37, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1996, exam: "JAMB",
    question: "The chemical compound responsible for the white milky appearance formed when CO2 gas is bubbled briefly through lime water is",
    options: ["calcium hydroxide", "calcium oxide", "calcium trioxocarbonate(IV)", "calcium hydrogentrioxocarbonate(IV)"],
    answer: "calcium trioxocarbonate(IV)",
    explanation: "CO2 reacts with lime water, Ca(OH)2, to form insoluble calcium trioxocarbonate(IV), CaCO3, which produces the milky appearance."
  },

  {
    id: 38, subject: "Chemistry", topic: "Periodic Table", year: 1996, exam: "JAMB",
    question: "Transition metals possess special properties, such as variable oxidation states and the formation of colored complexes, because they contain",
    options: ["partially filled d-orbitals", "partially filled s-orbitals", "completely filled p-subshells", "mobile valence electrons in f-orbitals"],
    answer: "partially filled d-orbitals",
    explanation: "The presence of partially filled d-orbitals is responsible for many characteristic properties of transition metals, including variable oxidation states and coloured compounds."
  },

  {
    id: 39, subject: "Chemistry", topic: "Organic Chemistry", year: 1996, exam: "JAMB",
    question: "The carbon atoms inside a molecule of ethyne (acetylene) are structurally",
    options: ["sp3 hybridized", "sp2 hybridized", "sp hybridized", "not hybridized"],
    answer: "sp hybridized",
    explanation: "Each carbon atom in ethyne is sp hybridized. The molecule is linear and contains one sigma bond and two pi bonds between the carbon atoms."
  },

  {
    id: 40, subject: "Chemistry", topic: "Organic Chemistry", year: 1996, exam: "JAMB",
    question: "The general formula representing the homologous series of alkanes is",
    options: ["CnH2n", "CnH2n-2", "CnH2n+1", "CnH2n+2"],
    answer: "CnH2n+2",
    explanation: "Alkanes are saturated open-chain hydrocarbons containing only single bonds. Their general formula is CnH2n+2."
  },

  {
    id: 41, subject: "Chemistry", topic: "Organic Chemistry", year: 1996, exam: "JAMB",
    question: "Organic compounds that share the identical molecular formula but feature different structural arrangements are known as",
    options: ["allotropes", "isotopes", "isomers", "homologues"],
    answer: "isomers",
    explanation: "Isomers have the same molecular formula but different structural arrangements or spatial arrangements."
  },

  {
    id: 42, subject: "Chemistry", topic: "Organic Chemistry", year: 1996, exam: "JAMB",
    question: "The specific chemical test reaction used to confirm the presence of terminal unsaturation (C#C-H triple bonds) uses",
    options: ["bromine water", "acidified KMnO4 solution", "ammoniacal copper(I) chloride solution", "Fehling's reagent"],
    answer: "ammoniacal copper(I) chloride solution",
    explanation: "Terminal alkynes react with ammoniacal copper(I) chloride to form a characteristic copper acetylide precipitate. This test distinguishes terminal alkynes from many other unsaturated compounds."
  },

  {
    id: 43, subject: "Chemistry", topic: "Organic Chemistry", year: 1996, exam: "JAMB",
    question: "What organic product is formed when ethanol is oxidized completely using an excess of acidified potassium heptaoxodichromate(VI) solution?",
    options: ["ethanal", "ethanoic acid", "ethene", "ethyl ethanoate"],
    answer: "ethanoic acid",
    explanation: "Ethanol is a primary alcohol. With excess acidified dichromate and continued oxidation, it is converted through ethanal to ethanoic acid."
  },

  {
    id: 44, subject: "Chemistry", topic: "Organic Chemistry", year: 1996, exam: "JAMB",
    question: "The reaction between an organic acid and an alkanol in the presence of an acid catalyst to produce a sweet-smelling compound is known as",
    options: ["saponification", "esterification", "hydrolysis", "dehydration"],
    answer: "esterification",
    explanation: "Esterification is the reaction between a carboxylic acid and an alcohol in the presence of an acid catalyst to form an ester and water."
  },

  {
    id: 45, subject: "Chemistry", topic: "Applied Chemistry", year: 1996, exam: "JAMB",
    question: "The chemical reaction process by which soap is manufactured from the alkaline hydrolysis of fats and oils is called",
    options: ["neutralization", "esterification", "saponification", "polymerization"],
    answer: "saponification",
    explanation: "Saponification is the alkaline hydrolysis of fats or oils to produce glycerol and the salts of fatty acids, which are soaps."
  },

  {
    id: 46, subject: "Chemistry", topic: "Organic Chemistry", year: 1996, exam: "JAMB",
    question: "The functional group characterizing the family of alkanals (aldehydes) is",
    options: ["-OH", "-CHO", "-COOH", "-CO-"],
    answer: "-CHO",
    explanation: "Alkanals contain the aldehyde functional group, written as -CHO, at the end of the carbon chain."
  },

  {
    id: 47, subject: "Chemistry", topic: "Organic Chemistry", year: 1996, exam: "JAMB",
    question: "Which of the following organic compounds will react with bromine water via an addition reaction to readily discharge its reddish-brown color?",
    options: ["Methane", "Ethane", "Ethene", "Benzene"],
    answer: "Ethene",
    explanation: "Ethene contains a carbon-carbon double bond and reacts readily with bromine by addition across the double bond, decolorizing bromine water."
  },

  {
    id: 48, subject: "Chemistry", topic: "Applied Chemistry", year: 1996, exam: "JAMB",
    question: "Natural rubber is a polymer made up of repeating monomer units of",
    options: ["ethene", "chloroethene", "isoprene / 2-methylbuta-1,3-diene", "styrene"],
    answer: "isoprene / 2-methylbuta-1,3-diene",
    explanation: "Natural rubber is mainly cis-1,4-polyisoprene, formed from repeating units of isoprene, also called 2-methylbuta-1,3-diene."
  },

  {
    id: 49, subject: "Chemistry", topic: "Organic Chemistry", year: 1996, exam: "JAMB",
    question: "The relatively high boiling points and water solubilities of lower molecular mass alkanols are due to",
    options: ["ionic character", "covalent network shielding", "intermolecular hydrogen bonding", "weak van der Waals attractions"],
    answer: "intermolecular hydrogen bonding",
    explanation: "The -OH groups in alkanols form hydrogen bonds with one another and with water molecules. These interactions increase boiling points and water solubility."
  },

  {
    id: 50, subject: "Chemistry", topic: "Organic Chemistry", year: 1996, exam: "JAMB",
    question: "The conversion of glucose into ethanol and carbon(IV) oxide by the action of enzymes present in yeast is a process known as",
    options: ["distillation", "fermentation", "hydrolysis", "cracking"],
    answer: "fermentation",
    explanation: "Fermentation is the anaerobic conversion of glucose by yeast enzymes into ethanol and carbon(IV) oxide: C6H12O6 -> 2C2H5OH + 2CO2."
  }

];

export default chemJamb1996;
