// JAMB 1995 Chemistry Past Questions
// Fully audited — questions, answers, calculations, explanations, source/OCR issues, and app-safe formatting.
// Image/source-dependent questions are flagged with CHECK SOURCE where necessary.

const chemJamb1995 = [

  {
    id: 1, subject: "Chemistry", topic: "Separation Techniques", year: 1995, exam: "JAMB",
    question: "Chromatography is used to separate components of mixtures which differ in their rates of",
    options: ["diffusion", "migration", "reaction", "sedimentation"],
    answer: "migration",
    explanation: "Chromatography separates components of a mixture based on their different rates of migration through a stationary phase while being carried by a mobile phase."
  },

  {
    id: 2, subject: "Chemistry", topic: "Separation Techniques", year: 1995, exam: "JAMB",
    question: "Which of the following is an example of a chemical change?",
    options: ["Dissolution of salt in water", "Rusting of iron", "Melting of ice", "Separating a mixture by distillation"],
    answer: "Rusting of iron",
    explanation: "Rusting of iron is a chemical change because new substances, mainly hydrated iron(III) oxides, are formed. Dissolution, melting and distillation are physical changes."
  },

  {
    id: 3, subject: "Chemistry", topic: "Stoichiometry", year: 1995, exam: "JAMB",
    question: "The number of hydrogen ions in 4.9 g of tetraoxosulphate(VI) acid is [S = 32, O = 16, H = 1, N_A = 6.02 x 10^23]",
    options: ["3.01 x 10^22", "6.02 x 10^22", "3.01 x 10^23", "6.02 x 10^23"],
    answer: "6.02 x 10^22",
    explanation: "Molar mass of H2SO4 = 2(1) + 32 + 4(16) = 98 g/mol. Moles of H2SO4 = 4.9/98 = 0.05 mol. Each mole gives 2 moles of H+ ions, so moles of H+ = 0.10 mol. Number of H+ ions = 0.10 x 6.02 x 10^23 = 6.02 x 10^22."
  },

  {
    id: 4, subject: "Chemistry", topic: "Gas Laws", year: 1995, exam: "JAMB",
    question: "What volume of oxygen will remain after reacting 8 cm3 of hydrogen with 20 cm3 of oxygen?",
    options: ["10 cm3", "12 cm3", "14 cm3", "16 cm3"],
    answer: "16 cm3",
    explanation: "The reaction is 2H2 + O2 -> 2H2O. Two volumes of hydrogen react with one volume of oxygen. Therefore, 8 cm3 of H2 reacts with 4 cm3 of O2. Oxygen remaining = 20 - 4 = 16 cm3."
  },

  {
    id: 5, subject: "Chemistry", topic: "Gas Laws", year: 1995, exam: "JAMB",
    question: "A gas sample with an initial volume of 3.25 dm3 is heated and allowed to expand to 9.75 dm3 at constant pressure. What is the ratio of the final absolute temperature to the initial absolute temperature?",
    options: ["3:1", "5:2", "5:4", "8:3"],
    answer: "3:1",
    explanation: "By Charles's law, V1/T1 = V2/T2 at constant pressure. Therefore, T2/T1 = V2/V1 = 9.75/3.25 = 3. Hence, the ratio is 3:1."
  },

  {
    id: 6, subject: "Chemistry", topic: "Gas Laws", year: 1995, exam: "JAMB",
    question: "Two cylinders, A and B, contain 30 cm3 of oxygen and nitrogen respectively at the same temperature and pressure. If there are 5.0 moles of nitrogen, then the number of moles of oxygen is",
    options: ["3.2 moles", "5.0 moles", "8.0 moles", "16.0 moles"],
    answer: "5.0 moles",
    explanation: "By Avogadro's law, equal volumes of gases at the same temperature and pressure contain equal numbers of moles. Therefore, both gases contain 5.0 moles."
  },

  {
    id: 7, subject: "Chemistry", topic: "States of Matter", year: 1995, exam: "JAMB",
    question: "A liquid begins to boil when",
    options: [
      "its vapour pressure is equal to the vapour pressure of its solid at the given temperature",
      "molecules start escaping from its surface",
      "its vapour pressure equals the atmospheric pressure",
      "its volume is slightly increased"
    ],
    answer: "its vapour pressure equals the atmospheric pressure",
    explanation: "A liquid boils when its vapour pressure becomes equal to the external atmospheric pressure."
  },

  {
    id: 8, subject: "Chemistry", topic: "Atomic Structure", year: 1995, exam: "JAMB",
    question: "A particle that contains 8 protons, 9 neutrons and 10 electrons could be written as",
    options: ["16_8O", "17_9O+", "17_8O2-", "17_9O"],
    answer: "17_8O2-",
    explanation: "Eight protons give atomic number 8, which is oxygen. The mass number is 8 + 9 = 17. Since there are 10 electrons and only 8 protons, the particle has a 2- charge. Therefore, it is 17_8O2-."
  },

  {
    id: 9, subject: "Chemistry", topic: "Periodic Table", year: 1995, exam: "JAMB",
    question: "Using the section of the periodic table provided in the text document, which of the letters indicates an alkali metal and a noble gas respectively?",
    options: ["M and E", "G and E", "R and L", "G and L"],
    answer: "G and E",
    explanation: "The alkali metals occupy Group 1, while noble gases occupy Group 18. In the supplied layout, the positions are represented by G and E respectively."
  },

  // CHECK SOURCE: This question depends on the original periodic-table diagram.
  {
    id: 10, subject: "Chemistry", topic: "Periodic Table", year: 1995, exam: "JAMB",
    question: "Which letter in the provided periodic table layout represents a non-metal that is a solid at room temperature?",
    options: ["T", "Base R", "J", "X"],
    answer: "J",
    explanation: "According to the supplied periodic-table layout, position J represents a non-metal that is solid at room temperature."
  },

  {
    id: 11, subject: "Chemistry", topic: "Atomic Structure", year: 1995, exam: "JAMB",
    question: "In the famous oil drop experiment, Millikan determined the",
    options: ["charge-to-mass ratio of the electron", "mass of the electron", "charge of the electron", "mass of the proton"],
    answer: "charge of the electron",
    explanation: "Millikan's oil drop experiment determined the magnitude of the charge on an electron. Thomson had previously determined the charge-to-mass ratio of the electron."
  },

  {
    id: 12, subject: "Chemistry", topic: "Chemical Bonding", year: 1995, exam: "JAMB",
    question: "The structural stability of ionic solids is generally due to the",
    options: ["negative electron affinity of most atoms", "crystal lattice electrostatic forces", "electron pair sharing", "positive ionization potentials"],
    answer: "crystal lattice electrostatic forces",
    explanation: "Ionic solids are held together by strong electrostatic forces of attraction between oppositely charged ions in the crystal lattice."
  },

  {
    id: 13, subject: "Chemistry", topic: "Periodic Table", year: 1995, exam: "JAMB",
    question: "Which of the following statements is FALSE about isotopes of the same element?",
    options: [
      "They have the same number of electrons in their outermost shells",
      "They have different atomic masses",
      "They have the same atomic number and the same number of electrons",
      "They have the same atomic number but a different number of electrons"
    ],
    answer: "They have the same atomic number but a different number of electrons",
    explanation: "Isotopes of an element have the same number of protons and, in neutral atoms, the same number of electrons. They differ in their numbers of neutrons and therefore in mass number."
  },

  {
    id: 14, subject: "Chemistry", topic: "Gases & Non-Metals", year: 1995, exam: "JAMB",
    question: "Helium gas is often used to inflate high-altitude observation balloons because it is",
    options: ["light and combustible", "light and non-combustible", "heavy and combustible", "heavy and non-combustible"],
    answer: "light and non-combustible",
    explanation: "Helium has a low density, giving it good lifting power, and it is a noble gas that does not burn."
  },

  {
    id: 15, subject: "Chemistry", topic: "Environmental Chemistry", year: 1995, exam: "JAMB",
    question: "When packaging materials and plastics made from chloromethane are burned in the open, the toxic gas mixture released into the atmosphere is most likely to contain",
    options: ["ethane", "chlorine", "hydrogen chloride", "ethane gas tracks"],
    answer: "hydrogen chloride",
    explanation: "Burning chlorinated organic materials can release hydrogen chloride gas. HCl is toxic and forms an acidic solution when dissolved in water."
  },

  {
    id: 16, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1995, exam: "JAMB",
    question: "Deliquescent solid substances are also always implicitly classified as",
    options: ["efflorescent", "anhydrous", "hygroscopic", "insoluble"],
    answer: "hygroscopic",
    explanation: "Deliquescent substances absorb moisture from the atmosphere. Therefore, they are hygroscopic. They absorb enough water to dissolve completely."
  },

  {
    id: 17, subject: "Chemistry", topic: "Solutions & Solubility", year: 1995, exam: "JAMB",
    question: "The structural difference between colloids and suspensions is brought out clearly by the fact that while colloids",
    options: [
      "do not scatter light, suspensions cannot be separated via centrifugation",
      "can be separated by standard filtration, suspensions cannot",
      "can be separated by an ultrafiltration membrane, suspensions cannot pass filters",
      "do not settle out on standing, suspensions do"
    ],
    answer: "do not settle out on standing, suspensions do",
    explanation: "Suspensions contain relatively large particles that settle out when left standing. Colloidal particles are much smaller and generally remain dispersed."
  },

  {
    id: 18, subject: "Chemistry", topic: "Solutions & Solubility", year: 1995, exam: "JAMB",
    question: "In general, an increase in temperature increases the solubility of a solid solute in water because",
    options: [
      "more solute molecules collide with each other",
      "most solid solutes dissolve with the evolution of heat",
      "more solute molecules dissociate at higher temperatures",
      "most solid solutes dissolve with the absorption of heat"
    ],
    answer: "most solid solutes dissolve with the absorption of heat",
    explanation: "The dissolution of most solid solutes is endothermic. Increasing the temperature therefore tends to favour dissolution."
  },

  {
    id: 19, subject: "Chemistry", topic: "Acids, Bases & Salts", year: 1995, exam: "JAMB",
    question: "The fundamental chemical definition of neutralisation involves a reaction between",
    options: ["H3O+ and OH- ions", "acid radicals and bases", "alkaline gases and indicators", "salt crystals and pure solvents"],
    answer: "H3O+ and OH- ions",
    explanation: "In aqueous solution, neutralisation involves the reaction of hydronium ions with hydroxide ions to form water: H3O+ + OH- -> 2H2O."
  },

  {
    id: 20, subject: "Chemistry", topic: "Solutions & Solubility", year: 1995, exam: "JAMB",
    question: "Which of the following salt solutions will exhibit an acidic pH value less than 7 (pH < 7)?",
    options: ["Na2SO4(aq)", "NaCl(aq)", "Na2CO3(aq)", "NH4Cl(aq)"],
    answer: "NH4Cl(aq)",
    explanation: "NH4Cl is formed from a strong acid and a weak base. NH4+ reacts with water to produce H3O+, making the solution acidic."
  },

  {
    id: 21, subject: "Chemistry", topic: "Solutions & Solubility", year: 1995, exam: "JAMB",
    question: "What is the measured pH of a 2.50 x 10^-5 M aqueous solution of sodium hydroxide?",
    options: ["3.6", "5.0", "9.4", "12.0"],
    answer: "9.4",
    explanation: "NaOH is a strong base, so [OH-] = 2.50 x 10^-5 M. pOH = -log(2.50 x 10^-5) = 4.602. Therefore, pH = 14.000 - 4.602 = 9.398, approximately 9.4."
  },

  // CHECK SOURCE: The original titration graph is not included in the supplied text.
  {
    id: 22, subject: "Chemistry", topic: "Solutions & Titration", year: 1995, exam: "JAMB",
    question: "The volumetric graph in the document maps pH changes during a titration. It illustrates a flat baseline climbing sharply past a vertical point at 25 cm3 of base. This curve tracks the titration of a",
    options: ["strong acid versus strong base", "weak acid versus strong base", "strong acid versus weak base", "weak acid versus weak base"],
    answer: "strong acid versus strong base",
    explanation: "A titration curve that begins at very low pH and has a sharp change around the equivalence point, followed by a high final pH, is characteristic of a strong acid-strong base titration."
  },

  {
    id: 23, subject: "Chemistry", topic: "Electrochemistry", year: 1995, exam: "JAMB",
    question: "In the commercial industrial process of electroplating a metal item M with silver, the item M must be made the",
    options: [
      "anode and a direct current is used",
      "cathode and an alternating current is used",
      "anode and an alternating current is used",
      "cathode and a direct current is used"
    ],
    answer: "cathode and a direct current is used",
    explanation: "The object being plated is made the cathode so that Ag+ ions gain electrons and are deposited as silver on its surface. Direct current is used to maintain the required direction of electron flow."
  },

  {
    id: 24, subject: "Chemistry", topic: "Electrochemistry", year: 1995, exam: "JAMB",
    question: "How many moles of copper would be deposited by passing 3 Faradays of electricity through a solution of copper(II) tetraoxosulphate(VI)? [1 Faraday = 96500 C mol^-1]",
    options: ["0.5", "1.0", "1.5", "3.0"],
    answer: "1.5",
    explanation: "Cu2+ + 2e- -> Cu. Two Faradays deposit one mole of copper. Therefore, 3 Faradays deposit 3/2 = 1.5 moles of copper."
  },

  {
    id: 25, subject: "Chemistry", topic: "Electrochemistry", year: 1995, exam: "JAMB",
    question: "2Cl-(aq) -> Cl2(g) + 2e-. This reaction occurs at the anode during the electrolysis of dilute zinc chloride solution. This half-cell equation represents the process of",
    options: ["ionization", "oxidation", "reduction", "recombination"],
    answer: "oxidation",
    explanation: "Oxidation involves loss of electrons. Chloride ions lose electrons to form chlorine gas, so the process is oxidation."
  },

  {
    id: 26, subject: "Chemistry", topic: "Redox Reactions", year: 1995, exam: "JAMB",
    question: "Which of the following chemical equations represents a valid redox reaction?",
    options: [
      "KCl(aq) + H2SO4(aq) -> KHSO4(aq) + HCl(aq)",
      "2FeBr2(aq) + Br2(l) -> 2FeBr3(aq)",
      "AgNO3(aq) + FeCl3(aq) -> 3AgCl(s) + Fe(NO3)3(aq)",
      "H2CO3(aq) -> H2O(l) + CO2(g)"
    ],
    answer: "2FeBr2(aq) + Br2(l) -> 2FeBr3(aq)",
    explanation: "Iron changes from oxidation state +2 in FeBr2 to +3 in FeBr3, while bromine changes from 0 to -1. Oxidation and reduction therefore occur."
  },

  {
    id: 27, subject: "Chemistry", topic: "Oxidation Numbers", year: 1995, exam: "JAMB",
    question: "Cr2O7^2-(aq) + 14H+(aq) + 6I-(aq) -> 2Cr3+(aq) + 3I2(s) + 7H2O(l). The net change in the oxidation number of oxygen across this reaction equation is",
    options: ["0", "1", "2", "7"],
    answer: "0",
    explanation: "Oxygen has an oxidation number of -2 in both dichromate and water. Therefore, there is no change in the oxidation number of oxygen."
  },

  {
    id: 28, subject: "Chemistry", topic: "Chemical Equilibrium", year: 1995, exam: "JAMB",
    question: "If a reversible equilibrium reaction has a negative enthalpy change (delta H < 0), the reaction will proceed favourably in the forward direction at",
    options: ["low temperatures", "high temperatures", "all temperatures", "all pressure points"],
    answer: "low temperatures",
    explanation: "A negative enthalpy change means the forward reaction is exothermic. Lowering the temperature favours the exothermic direction according to Le Chatelier's principle."
  },

  {
    id: 29, subject: "Chemistry", topic: "Chemical Energetics", year: 1995, exam: "JAMB",
    question: "Which of the following everyday or laboratory processes leads directly to an increase in chemical entropy (+delta S)?",
    options: [
      "mixing a solid sample of NaCl and clean dry sand",
      "the condensation of water vapour onto a glass surface",
      "boiling a liquid sample of water inside a beaker",
      "cooling a hot saturated solution until crystals form"
    ],
    answer: "boiling a liquid sample of water inside a beaker",
    explanation: "Boiling changes liquid water into gaseous water. Gas molecules have greater freedom of movement and disorder, so entropy increases."
  },

  {
    id: 30, subject: "Chemistry", topic: "Chemical Equilibrium", year: 1995, exam: "JAMB",
    question: "Which of the following gaseous equilibria is shifted to the right as a direct result of an increase in pressure?",
    options: [
      "H2(g) + I2(g) <=> 2HI(g)",
      "2NO2(g) <=> N2O4(g)",
      "PCl5(g) <=> PCl3(g) + Cl2(g)",
      "2O3(g) <=> 3O2(g)"
    ],
    answer: "2NO2(g) <=> N2O4(g)",
    explanation: "Increasing pressure favours the side with fewer moles of gas. The left side has two moles of gas while the right side has one mole, so the equilibrium shifts right."
  },

  // CHECK SOURCE: The original collection apparatus diagram is not included in the supplied text.
  {
    id: 31, subject: "Chemistry", topic: "Laboratory Collection of Gases", year: 1995, exam: "JAMB",
    question: "The upward delivery apparatus shown in the text can be used for the laboratory collection of",
    options: ["sulphur(IV) oxide", "ammonia", "nitrogen", "hydrogen chloride"],
    answer: "ammonia",
    explanation: "Upward delivery, also called downward displacement of air, is suitable for gases less dense than air. Ammonia has a relative molecular mass of 17 compared with about 29 for air."
  },

  // CHECK SOURCE: This question depends on the original reaction-coordinate diagram.
  {
    id: 32, subject: "Chemistry", topic: "Chemical Kinetics", year: 1995, exam: "JAMB",
    question: "The activation energy of the uncatalyzed reaction path shown in the chemical kinetics profile is represented by",
    options: ["x", "x + y", "x - y", "y"],
    answer: "x",
    explanation: "Activation energy is the energy difference between the reactants and the highest point on the reaction profile. According to the supplied labels, this difference is represented by x."
  },

  // CHECK SOURCE: This question depends on the same reaction-coordinate diagram as Question 32.
  {
    id: 33, subject: "Chemistry", topic: "Chemical Kinetics", year: 1995, exam: "JAMB",
    question: "It can be deduced from the provided reaction coordinate profile that the rate of the reaction",
    options: [
      "for path I is higher than path II",
      "for path II is higher than path I",
      "is identical for both paths at all temperatures",
      "depends strictly on the values of both x and y at all pressures"
    ],
    answer: "for path II is higher than path I",
    explanation: "The path with the lower activation energy has the faster reaction rate at the same temperature. According to the supplied profile, path II has the lower activation energy."
  },

  {
    id: 34, subject: "Chemistry", topic: "Gases & Non-Metals", year: 1995, exam: "JAMB",
    question: "In the industrial production of hydrogen gas from natural gas, carbon(IV) oxide produced along with the hydrogen is removed by",
    options: [
      "washing the gas mixture under high pressure",
      "passing the gas mixture into lime water",
      "using an absorption line of ammoniacal copper(I) chloride",
      "drying the mixture over phosphorus(V) oxide"
    ],
    answer: "washing the gas mixture under high pressure",
    explanation: "Carbon dioxide can be removed from industrial hydrogen streams by absorption or scrubbing under pressure. Its greater solubility under suitable conditions allows it to be separated from hydrogen."
  },

  {
    id: 35, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1995, exam: "JAMB",
    question: "Sulphur exists in multiple solid modifications or forms in nature. This structural property is known as",
    options: ["isomerism", "allotropy", "isotopy", "isomorphism"],
    answer: "allotropy",
    explanation: "Allotropy is the existence of an element in two or more different forms in the same physical state. Rhombic and monoclinic sulphur are examples."
  },

  {
    id: 36, subject: "Chemistry", topic: "Qualitative Analysis", year: 1995, exam: "JAMB",
    question: "A gas that will turn an orange potassium heptaoxodichromate(VI) solution to a clear green is",
    options: ["sulphur(VI) oxide", "hydrogen sulphide", "sulphur(IV) oxide", "hydrogen chloride"],
    answer: "sulphur(IV) oxide",
    explanation: "Sulphur(IV) oxide, SO2, is a reducing agent. It reduces dichromate ions, Cr2O7^2-, to chromium(III) ions, Cr3+, changing the solution from orange to green."
  },

  {
    id: 37, subject: "Chemistry", topic: "Qualitative Analysis", year: 1995, exam: "JAMB",
    question: "Which of the following metal ions will give a white precipitate with aqueous NaOH that dissolves completely in excess of the base?",
    options: ["Ca2+", "Mg2+", "Zn2+", "Cu2+"],
    answer: "Zn2+",
    explanation: "Zn2+ reacts with NaOH to form white Zn(OH)2. Because zinc hydroxide is amphoteric, it dissolves in excess NaOH to form a soluble zincate complex."
  },

  {
    id: 38, subject: "Chemistry", topic: "Applied Chemistry", year: 1995, exam: "JAMB",
    question: "In the industrial smelting of iron in a blast furnace, solid limestone is used to",
    options: [
      "release CO2 for combustion reactions",
      "reduce the iron oxide ore into free iron",
      "increase the overall tensile strength of iron",
      "remove acidic impurities as molten slag"
    ],
    answer: "remove acidic impurities as molten slag",
    explanation: "Limestone, CaCO3, decomposes to CaO. The basic CaO reacts with acidic SiO2 impurities to form molten calcium silicate slag, CaSiO3."
  },

  {
    id: 39, subject: "Chemistry", topic: "Qualitative Analysis", year: 1995, exam: "JAMB",
    question: "Which of the following compounds will impart a brick-red colour to a non-luminous Bunsen burner flame?",
    options: ["NaCl", "LiCl", "CaCl2", "MgCl2"],
    answer: "CaCl2",
    explanation: "Calcium compounds give a brick-red or orange-red flame in a flame test."
  },

  {
    id: 40, subject: "Chemistry", topic: "Periodic Table", year: 1995, exam: "JAMB",
    question: "Group 1A alkali metals are never found free or uncombined in nature because they",
    options: [
      "possess exceptionally low melting and boiling points",
      "have weak metallic bonding lattices",
      "conduct electricity and heat rapidly",
      "are highly reactive elements"
    ],
    answer: "are highly reactive elements",
    explanation: "Alkali metals have one outer-shell electron which is easily lost. Their low ionization energies make them highly reactive, so they occur naturally as compounds rather than as free elements."
  },

  {
    id: 41, subject: "Chemistry", topic: "Organic Chemistry", year: 1995, exam: "JAMB",
    question: "CH3COOH + CH3CH2OH -> X + Y. In the presence of concentrated H2SO4, products X and Y are respectively",
    options: [
      "CH3COCH3 and H2O",
      "CH3CH2COCH3 and H2O2",
      "CH3COOCH2CH3 and H2O",
      "CH3CH2CHO and CH4"
    ],
    answer: "CH3COOCH2CH3 and H2O",
    explanation: "Ethanoic acid reacts with ethanol in the presence of concentrated H2SO4 to form ethyl ethanoate and water."
  },

  {
    id: 42, subject: "Chemistry", topic: "Organic Chemistry", year: 1995, exam: "JAMB",
    question: "CHCl3 + Cl2 -> HCl + CCl4. The organic substitution reaction above is an example of",
    options: ["an addition reaction", "a substitution reaction", "a chlorination reaction", "a condensation reaction"],
    answer: "a substitution reaction",
    explanation: "A hydrogen atom in CHCl3 is replaced by a chlorine atom to form CCl4, while HCl is produced. Therefore, the reaction is a substitution reaction."
  },

  {
    id: 43, subject: "Chemistry", topic: "Organic Chemistry", year: 1995, exam: "JAMB",
    question: "The systematic IUPAC nomenclature for the alkene compound CH3-CH(CH3)-CH=CH-CH3 is",
    options: ["1,1-dimethylbut-2-ene", "2-methylpent-3-ene", "4,4-dimethylbut-2-ene", "4-methylpent-2-ene"],
    answer: "4-methylpent-2-ene",
    explanation: "The longest chain containing the double bond has five carbon atoms. Numbering from the end nearest the double bond gives pent-2-ene, with a methyl group at carbon 4. The name is 4-methylpent-2-ene."
  },

  {
    id: 44, subject: "Chemistry", topic: "Organic Chemistry", year: 1995, exam: "JAMB",
    question: "Which of the following pairs of organic molecules consists of structural isomers of each other?",
    options: [
      "propanal and propanone",
      "ethanoic acid and ethyl methanoate",
      "ethanoic acid and ethane-1,2-diol",
      "2-methylbutane and 2,2-dimethylbutane"
    ],
    answer: "propanal and propanone",
    explanation: "Propanal and propanone have the same molecular formula, C3H6O, but different functional groups and structures. They are functional isomers."
  },

  {
    id: 45, subject: "Chemistry", topic: "Organic Chemistry", year: 1995, exam: "JAMB",
    question: "Aromatic and aliphatic hydrocarbons can be easily distinguished from each other by their reactions with",
    options: ["bromine water", "polymerization loops", "prolonged high heat", "chemical oxidation tests"],
    answer: "bromine water",
    explanation: "Unsaturated aliphatic hydrocarbons such as alkenes readily decolorize bromine water by addition. Benzene does not normally decolorize bromine water under ordinary conditions because its aromatic ring resists addition."
  },

  {
    id: 46, subject: "Chemistry", topic: "Applied Chemistry", year: 1995, exam: "JAMB",
    question: "The role of sodium chloride in the manufacture of soap is to",
    options: [
      "purify the raw soap material",
      "separate the soap from glycerol",
      "accelerate the chemical decomposition of the oil",
      "react with glycerol to form salt"
    ],
    answer: "separate the soap from glycerol",
    explanation: "Sodium chloride is added during soap manufacture to salt out the soap. It reduces the solubility of soap in the aqueous mixture, causing the soap to separate from the glycerol-containing solution."
  },

  {
    id: 47, subject: "Chemistry", topic: "Organic Chemistry", year: 1995, exam: "JAMB",
    question: "The functional group represented inside the structure CH3-CH=CH-CHO is an",
    options: ["alkanol group", "alkanal group", "alkanone group", "alkanoate group"],
    answer: "alkanal group",
    explanation: "The terminal -CHO group is the characteristic functional group of aldehydes, which are called alkanals."
  },

  {
    id: 48, subject: "Chemistry", topic: "Organic Chemistry", year: 1995, exam: "JAMB",
    question: "CxHy + 4O2 -> 3CO2 + 2H2O. The hydrocarbon CxHy in the balanced combustion reaction above is",
    options: ["propane", "propene", "propyne", "propanone"],
    answer: "propyne",
    explanation: "Three CO2 molecules show that the hydrocarbon contains 3 carbon atoms. Two H2O molecules contain 4 hydrogen atoms. Therefore, the hydrocarbon is C3H4, which is propyne."
  },

  {
    id: 49, subject: "Chemistry", topic: "Organic Chemistry", year: 1995, exam: "JAMB",
    question: "An example of a secondary amine molecule is",
    options: ["propylene", "di-butylamine", "methylamine", "trimethylamine"],
    answer: "di-butylamine",
    explanation: "A secondary amine has nitrogen bonded to two alkyl groups and one hydrogen atom. Di-butylamine, (C4H9)2NH, is therefore a secondary amine. Methylamine is primary and trimethylamine is tertiary."
  },

  {
    id: 50, subject: "Chemistry", topic: "Organic Chemistry", year: 1995, exam: "JAMB",
    question: "The relatively high boiling points exhibited by alkanols are due to the presence of intermolecular",
    options: ["ionic bonding lattices", "aromatic resonance character", "covalent network links", "hydrogen bonding"],
    answer: "hydrogen bonding",
    explanation: "Alkanols contain polar -OH groups which form intermolecular hydrogen bonds. These strong attractions require more energy to overcome, giving alkanols relatively high boiling points."
  }

];

export default chemJamb1995;

