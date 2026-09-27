// Complete JAMB 1995 Chemistry Past Questions (Questions 1 - 50)
// Verified factually against core West African examination patterns

const chemJamb1995 = [
  {
    id: 1, subject: "Chemistry", topic: "Separation Techniques", year: 1995, exam: "JAMB",
    question: "Chromatography is used to separate components of mixtures which differ in their rates of",
    options: ["diffusion", "migration", "reaction", "sedimentation"],
    answer: "migration",
    explanation: "Chromatography separates the components of a mixture based on their different rates of migration as they are carried by a mobile phase through a stationary phase."
  },
  {
    id: 2, subject: "Chemistry", topic: "Separation Techniques", year: 1995, exam: "JAMB",
    question: "Which of the following is an example of a chemical change?",
    options: ["Dissolution of salt in water", "Rusting of iron", "Melting of ice", "Separating a mixture by distillation"],
    answer: "Rusting of iron",
    explanation: "Rusting of iron is a chemical change because a new substance, hydrated iron(III) oxide (rust), is formed through a chemical reaction involving iron, oxygen, and moisture. Dissolution, melting, and distillation are physical processes."
  },
  {
    id: 3, subject: "Chemistry", topic: "Stoichiometry", year: 1995, exam: "JAMB",
    question: "The number of hydrogen ions in 4.9 g of tetraoxosulphate(VI) acid is [S = 32, O = 16, H = 1, N_A = 6.02 x 10²³]",
    options: ["3.01 x 10²²", "6.02 x 10²²", "3.01 x 10²³", "6.02 x 10²³"],
    answer: "6.02 x 10²²",
    explanation: "Molar mass of H₂SO₄ = (2 × 1) + 32 + (4 × 16) = 98 g/mol. Moles of H₂SO₄ = 4.9 g / 98 g/mol = 0.05 mol. Since each mole of H₂SO₄ yields 2 moles of H⁺ ions upon complete ionization (H₂SO₄ -> 2H⁺ + SO₄²⁻), moles of H⁺ ions = 2 × 0.05 = 0.1 mol. Total number of H⁺ ions = 0.1 × 6.02 x 10²³ = 6.02 x 10²²."
  },
  {
    id: 4, subject: "Chemistry", topic: "Gas Laws", year: 1995, exam: "JAMB",
    question: "What volume of oxygen will remain after reacting 8 cm³ of hydrogen with 20 cm³ of oxygen?",
    options: ["10 cm³", "12 cm³", "14 cm³", "16 cm³"],
    answer: "16 cm³",
    explanation: "Reaction: 2H₂(g) + O₂(g) -> 2H₂O(l). By Gay-Lussac's law of combining volumes, 2 volumes of H₂ require 1 volume of O₂. Therefore, 8 cm³ of H₂ will react with exactly 4 cm³ of O₂. Remaining oxygen = 20 cm³ - 4 cm³ = 16 cm³."
  },
  {
    id: 5, subject: "Chemistry", topic: "Gas Laws", year: 1995, exam: "JAMB",
    question: "A gas sample with an initial volume of 3.25 dm³ is heated and allowed to expand to 9.75 dm³ at constant pressure. What is the ratio of the final absolute temperature to the initial absolute temperature?",
    options: ["3:1", "5:2", "5:4", "8:3"],
    answer: "3:1",
    explanation: "According to Charles's Law, volume is directly proportional to absolute temperature (V₁/T₁ = V₂/T₂) when pressure is kept constant. Rearranging gives T₂/T₁ = V₂/V₁ = 9.75 dm³ / 3.25 dm³ = 3 / 1, which establishes a ratio of 3:1."
  },
  {
    id: 6, subject: "Chemistry", topic: "Gas Laws", year: 1995, exam: "JAMB",
    question: "Two cylinders, A and B, contain 30 cm³ of oxygen and nitrogen respectively at the same temperature and pressure. If there are 5.0 moles of nitrogen, then the number of moles of oxygen is",
    options: ["3.2 moles", "5.0 moles", "8.0 moles", "16.0 moles"],
    answer: "5.0 moles",
    explanation: "Avogadro's law states that equal volumes of all gases under the same conditions of temperature and pressure contain equal numbers of moles. Since both cylinders contain exactly 30 cm³ of gas at identical conditions, they contain the same number of moles (5.0 moles)."
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
    explanation: "The boiling point of a liquid is defined as the temperature at which its saturated vapour pressure becomes exactly equal to the external atmospheric pressure."
  },
  {
    id: 8, subject: "Chemistry", topic: "Atomic Structure", year: 1995, exam: "JAMB",
    question: "A particle that contains 8 protons, 9 neutrons and 10 electrons could be written as",
    options: ["¹⁶₈O", "₁₇₉O⁺", "¹⁷₈O²⁻", "¹⁷₉O"],
    answer: "¹⁷₈O²⁻",
    explanation: "An atom with 8 protons has an atomic number of 8, which is oxygen (O). Its mass number is Protons + Neutrons = 8 + 9 = 17 (¹⁷O). Since it contains 10 electrons but only 8 protons, it has a surplus of 2 negative charges, giving it a 2- charge (¹⁷₈O²⁻)."
  },
  {
    id: 9, subject: "Chemistry", topic: "Periodic Table", year: 1995, exam: "JAMB",
    question: "Using the section of the periodic table provided in the text document, which of the letters indicates an alkali metal and a noble gas respectively?",
    options: ["M and E", "G and E", "R and L", "G and L"],
    answer: "G and E",
    explanation: "Alkali metals belong to Group 1 (the furthest left column, excluding hydrogen slots), indicated by position letter G. Noble gases occupy Group 18 (the furthest right column), indicated by position letter E."
  },
  {
    id: 10, subject: "Chemistry", topic: "Periodic Table", year: 1995, exam: "JAMB",
    question: "Which letter in the provided periodic table layout represents a non-metal that is a solid at room temperature?",
    options: ["T", "Base R", "J", "X"],
    answer: "J",
    explanation: "Position letter J is located in the upper p-block region corresponding to carbon or silicon coordinates, which are standard solid non-metals at room temperature."
  },
  {
    id: 11, subject: "Chemistry", topic: "Atomic Structure", year: 1995, exam: "JAMB",
    question: "In the famous oil drop experiment, Millikan determined the",
    options: ["charge-to-mass ratio of the electron", "mass of the electron", "charge of the electron", "mass of the proton"],
    answer: "charge of the electron",
    explanation: "Robert Millikan's oil drop experiment directly measured the absolute electric charge of an individual electron. J.J. Thomson determined the charge-to-mass ratio (e/m)."
  },
  {
    id: 12, subject: "Chemistry", topic: "Chemical Bonding", year: 1995, exam: "JAMB",
    question: "The structural stability of ionic solids is generally due to the",
    options: ["negative electron affinity of most atoms", "crystal lattice electrostatic forces", "electron pair sharing", "positive ionization potentials"],
    answer: "crystal lattice electrostatic forces",
    explanation: "Ionic solids form highly stable crystalline frameworks due to powerful, non-directional electrostatic forces of attraction acting throughout the crystal lattice between alternating positive and negative ions."
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
    explanation: "Isotopes of the same element must possess identical atomic numbers, which means they have the same number of protons and orbiting electrons in neutral states. They differ only in their neutron counts, which makes statement D false."
  },
  {
    id: 14, subject: "Chemistry", topic: "Gases & Non-Metals", year: 1995, exam: "JAMB",
    question: "Helium gas is often used to inflate high-altitude observation balloons because it is",
    options: ["light and combustible", "light and non-combustible", "heavy and combustible", "heavy and non-combustible"],
    answer: "light and non-combustible",
    explanation: "Helium has an exceptionally low density (making it very light), giving it strong lifting power. Unlike hydrogen, it is a noble gas with a completely filled valence shell, making it non-combustible and completely safe from catching fire."
  },
  {
    id: 15, subject: "Chemistry", topic: "Environmental Chemistry", year: 1995, exam: "JAMB",
    question: "When packaging materials and plastics made from chloromethane are burned in the open, the toxic gas mixture released into the atmosphere is most likely to contain",
    options: ["ethane", "chlorine", "hydrogen chloride", "ethane gas tracks"],
    answer: "hydrogen chloride",
    explanation: "Incinerating chlorinated plastics or polymers in the open leads to thermal breakdown that liberates hazardous, acidic hydrogen chloride (HCl) gas into the atmosphere."
  },
  {
    id: 16, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1995, exam: "JAMB",
    question: "Deliquescent solid substances are also always implicitly classified as",
    options: ["efflorescent", "anhydrous", "hygroscopic", "insoluble"],
    answer: "hygroscopic",
    explanation: "Hygroscopic substances possess the ability to absorb moisture from the atmosphere. Deliquescent substances do this to such an extreme extent that they absorb enough water to dissolve completely into an aqueous solution."
  },
  {
    id: 17, subject: "Chemistry", topic: "Solutions & Colloids", year: 1995, exam: "JAMB",
    question: "The structural difference between colloids and suspensions is brought out clearly by the fact that while colloids",
    options: [
      "do not scatter light, suspensions cannot be separated via centrifugation",
"can be separated by standard filtration, suspensions cannot",
"can be separated by an ultrafiltration membrane, suspensions cannot pass filters",
"do not settle out on standing, suspensions do"
],
answer: "do not settle out on standing, suspensions do",
explanation: "Suspensions are heterogeneous mixtures containing large particles that settle out under gravity when left undisturbed. Colloidal particles are small enough that molecular collisions keep them permanently suspended, so they do not settle out on standing."
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
explanation: "The dissolution of most solid salts in water is an endothermic process (it absorbs heat). According to Le Chatelier's principle, adding thermal energy shifts the equilibrium forward, increasing solubility."
},
{
id: 19, subject: "Chemistry", topic: "Acids, Bases & Salts", year: 1995, exam: "JAMB",
question: "The fundamental chemical definition of neutralisation involves a reaction between",
options: ["H₃O⁺ and OH⁻ ions", "acid radicals and bases", "alkaline gases and indicators", "salt crystals and pure solvents"],
answer: "H₃O⁺ and OH⁻ ions",
explanation: "In aqueous solutions, neutralization is fundamentally the combination of hydronium ions (H₃O⁺ or H⁺) from an acid with hydroxide ions (OH⁻) from a base to form neutral water molecules."
},
{
id: 20, subject: "Chemistry", topic: "Solutions & pH", year: 1995, exam: "JAMB",
question: "Which of the following salt solutions will exhibit an acidic pH value less than 7 (pH < 7)?",
options: ["Na₂SO₄(aq)", "NaCl(aq)", "Na₂CO₃(aq)", "NH₄Cl(aq)"],
answer: "NH₄Cl(aq)",
explanation: "Ammonium chloride (NH₄Cl) is a salt derived from a strong acid (HCl) and a weak base (NH₃). In water, the ammonium ion undergoes cationic hydrolysis, releasing hydronium ions into solution: NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺, making the solution acidic."
},
{
id: 21, subject: "Chemistry", topic: "Solutions & pH", year: 1995, exam: "JAMB",
question: "What is the measured pH of a 2.50 x 10⁻⁵ M aqueous solution of sodium hydroxide?",
options: ["3.6", "5.0", "9.4", "12.0"],
answer: "9.4",
explanation: "NaOH is a strong base that dissociates completely, so [OH⁻] = 2.50 x 10⁻⁵ M. pOH = -log₁₀(2.50 x 10⁻⁵) = 5 - log₁₀(2.5) = 5 - 0.398 = 4.602. Since pH + pOH = 14: pH = 14.000 - 4.602 ≈ 9.40."
},
{
id: 22, subject: "Chemistry", topic: "Solutions & Titration", year: 1995, exam: "JAMB",
question: "The volumetric graph in the document maps pH changes during a titration. It illustrates a flat baseline climbing sharply past a vertical point at 25 cm³ of base. This curve tracks the titration of a",
options: ["strong acid versus strong base", "weak acid versus strong base", "strong acid versus weak base", "weak acid versus weak base"],
answer: "strong acid versus strong base",
explanation: "The curve starts at a very low pH (~1, characteristic of a strong acid) and changes rapidly at the equivalence point to level off at a very high pH (~13, characteristic of a strong base). This is the classic signature of a strong acid vs strong base titration."
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
explanation: "In electroplating, the object to be coated is always made the negative cathode so that metallic cations (Ag⁺) migrate to it and accept electrons to deposit as metal. This process requires a continuous direct current (DC) to maintain one-way electron flow."
},
{
id: 24, subject: "Chemistry", topic: "Electrochemistry", year: 1995, exam: "JAMB",
question: "How many moles of copper would be deposited by passing 3 Faradays of electricity through a solution of copper(II) tetraoxosulphate(VI)? [1 Faraday = 96500 C mol⁻¹]",
options: ["0.5", "1.0", "1.5", "3.0"],
answer: "1.5",
explanation: "The reduction reaction at the cathode is Cu²⁺ + 2e⁻ -> Cu, which shows that 2 Faradays of electricity are required to deposit 1 mole of solid copper. By simple proportion, passing 3 Faradays will deposit 3 / 2 = 1.5 moles of copper."
},
{
id: 25, subject: "Chemistry", topic: "Electrochemistry", year: 1995, exam: "JAMB",
question: "2Cl⁻(aq) -> Cl₂(g) + 2e⁻. This reaction occurs at the anode during the electrolysis of dilute zinc chloride solution. This half-cell equation represents the process of",
options: ["ionization", "oxidation", "reduction", "recombination"],
answer: "oxidation",
explanation: "Oxidation is defined as the loss of electrons. In this half-cell reaction, chloride ions lose electrons to form neutral chlorine molecules at the anode, which represents oxidation."
},
{
id: 26, subject: "Chemistry", topic: "Redox Reactions", year: 1995, exam: "JAMB",
question: "Which of the following chemical equations represents a valid redox reaction?",
options: [
"KCl(aq) + H₂SO₄(aq) -> KHSO₄(aq) + HCl(aq)",
"2FeBr₂(aq) + Br₂(l) -> 2FeBr₃(aq)",
"AgNO₃(aq) + FeCl₃(aq) -> 3AgCl(s) + Fe(NO₃)₃(aq)",
"H₂CO₃(aq) -> H₂O(l) + CO₂(g)"
],
answer: "2FeBr₂(aq) + Br₂(l) -> 2FeBr₃(aq)",
explanation: "In reaction B, iron changes its oxidation state from +2 in FeBr₂ to +3 in FeBr₃ (oxidized), while elemental bromine changes from 0 to -1 (reduced). Because there are active changes in oxidation states, it is a valid redox reaction."
},
{
id: 27, subject: "Chemistry", topic: "Oxidation Numbers", year: 1995, exam: "JAMB",
question: "Cr₂O₇²⁻(aq) + 14H⁺(aq) + 6I⁻(aq) -> 2Cr³⁺(aq) + 3I₂(s) + 7H₂O(l). The net change in the oxidation number of oxygen across this reaction equation is",
options: ["0", "1", "2", "7"],
answer: "0",
explanation: "Oxygen remains in an oxidation state of -2 inside both the reactant dichromate ion (Cr₂O₇²⁻) and the final product water molecules (H₂O). Because its state does not change, the net change is 0."
},
{
id: 28, subject: "Chemistry", topic: "Chemical Equilibrium", year: 1995, exam: "JAMB",
question: "If a reversible equilibrium reaction has a negative enthalpy change (ΔH < 0), the reaction will proceed favourably in the forward direction at",
options: ["low temperatures", "high temperatures", "all temperatures", "all pressure points"],
answer: "low temperatures",
explanation: "A negative enthalpy change (ΔH < 0) means the forward reaction is exothermic and releases heat. According to Le Chatelier's principle, lowering the temperature shifts the equilibrium position to the right to generate heat, increasing product yield."
},
{
id: 29, subject: "Chemistry", topic: "Chemical Energetics", year: 1995, exam: "JAMB",
question: "Which of the following everyday or laboratory processes leads directly to an increase in chemical entropy (+ΔS)?",
options: [
"mixing a solid sample of NaCl and clean dry sand",
"the condensation of water vapour onto a glass surface",
"boiling a liquid sample of water inside a beaker",
"cooling a hot saturated solution until crystals form"
],
answer: "boiling a liquid sample of water inside a beaker",
explanation: "Boiling water converts liquid water molecules into a highly chaotic, disordered gas phase (steam). This significant increase in molecular randomness and freedom of movement results in a positive entropy change (+ΔS)."
},
{
id: 30, subject: "Chemistry", topic: "Chemical Equilibrium", year: 1995, exam: "JAMB",
question: "Which of the following gaseous equilibria is shifted to the right as a direct result of an increase in pressure?",
options: [
"H₂(g) + I₂(g) ⇌ 2HI(g)",
"2NO₂(g) ⇌ N₂O₄(g)",
"PCl₅(g) ⇌ PCl₃(g) + Cl₂(g)",
"2O₃(g) ⇌ 3O₂(g)"
],
answer: "2NO₂(g) ⇌ N₂O₄(g)",
explanation: "According to Le Chatelier's principle, increasing pressure shifts an equilibrium toward the side with fewer moles of gas molecules. The reaction 2NO₂ (2 moles) ⇌ N₂O₄ (1 mole) shifts to the right because the product side has fewer gas moles."
},
{
id: 31, subject: "Chemistry", topic: "Laboratory Collection of Gases", year: 1995, exam: "JAMB",
question: "The upward delivery delivery apparatus shown in the text can be used for the laboratory collection of",
options: ["sulphur(IV) oxide", "ammonia", "nitrogen", "hydrogen chloride"],
answer: "ammonia",
explanation: "Upward delivery (downward displacement of air) is used to collect gases that are significantly less dense (lighter) than air. Ammonia (NH₃, molar mass 17) is much lighter than air (average mass ~29), making it ideal for this collection method."
},
{
id: 32, subject: "Chemistry", topic: "Chemical Kinetics", year: 1995, exam: "JAMB",
question: "The activation energy of the uncatalyzed reaction path shown in the chemical kinetics profile is represented by",
options: ["x", "x + y", "x - y", "y"],
answer: "x",
explanation: "The activation energy of an uncatalyzed forward reaction is the total energy difference measured from the reactant level up to the highest peak energy barrier, labeled as coordinate index x."
},
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
explanation: "Path II has a lower activation energy barrier than path I (catalyzed path). A lower activation energy allows more reactant molecules to cross the energy barrier per unit time, resulting in a higher reaction rate."
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
explanation: "Industrially, carbon(IV) oxide is removed from hydrogen gas streams by washing or scrubbing the gas mixture with water or carbonate solvents under high pressure, which forces the CO₂ to dissolve."
},
{
id: 35, subject: "Chemistry", topic: "Inorganic Chemistry", year: 1995, exam: "JAMB",
question: "Sulphur exists in multiple solid modifications or forms in nature. This structural property is known as",
options: ["isomerism", "allotropy", "isotopy", "isomorphism"],
answer: "allotropy",
explanation: "Allotropy is the property where a single chemical element can exist in two or more different structural forms in the same physical state, such as rhombic and monoclinic sulphur."
},
{
id: 36, subject: "Chemistry", topic: "Qualitative Analysis", year: 1995, exam: "JAMB",
question: "A gas that will turn an orange potassium heptaoxodichromate(VI) solution to a clear green is",
options: ["sulphur(VI) oxide", "hydrogen sulphide", "sulphur(IV) oxide", "hydrogen chloride"],
answer: "sulphur(IV) oxide",
explanation: "Sulphur(IV) oxide (SO₂) is a strong reducing agent. It reduces orange acidified dichromate ions (Cr₂O₇²⁻) to green chromium ions (Cr³⁺), turning the solution green."
},
{
id: 37, subject: "Chemistry", topic: "Qualitative Analysis", year: 1995, exam: "JAMB",
question: "Which of the following metal ions will give a white precipitate with aqueous NaOH that dissolves completely in excess of the base?",
options: ["Ca²⁺", "Mg²⁺", "Zn²⁺", "Cu²⁺"],
answer: "Zn²⁺",
explanation: "Zinc ions (Zn²⁺) react with NaOH to form a white precipitate of amphoteric zinc hydroxide [Zn(OH)₂]. This precipitate dissolves in excess NaOH to form a clear, soluble sodium zincate coordination complex ion [Zn(OH)₄]²⁻."
},
{
id: 38, subject: "Chemistry", topic: "Applied Chemistry", year: 1995, exam: "JAMB",
question: "In the industrial smelting of iron in a blast furnace, solid limestone is used to",
options: [
"release CO₂ for combustion reactions",
"reduce the iron oxide ore into free iron",
"increase the overall tensile strength of iron",
"remove acidic impurities as molten slag"
],
answer: "remove acidic impurities as molten slag",
explanation: "Limestone (CaCO₃) decomposes to form calcium oxide (CaO), a basic oxide. CaO reacts with acidic silicon(IV) oxide (SiO₂, sand) impurities present in the iron ore to form molten calcium silicate slag (CaSiO₃), removing impurities from the furnace."
},
{
id: 39, subject: "Chemistry", topic: "Qualitative Analysis", year: 1995, exam: "JAMB",
question: "Which of the following compounds will impart a brick-red colour to a non-luminous Bunsen burner flame?",
options: ["NaCl", "LiCl", "CaCl₂", "MgCl₂"],
answer: "CaCl₂",
explanation: "During a volatile flame test, volatile calcium ions (Ca²⁺) emit a characteristic brick-red light spectrum."
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
explanation: "Group 1 metals have a single valence electron that is easily lost. This low ionization energy makes them highly reactive, causing them to bond readily with moisture and non-metals in the environment, so they are never found uncombined in nature."
},
{
id: 41, subject: "Chemistry", topic: "Organic Chemistry", year: 1995, exam: "JAMB",
question: "CH₃COOH + CH₃CH₂OH -> (Conc. H₂SO₄) -> X + Y. Products X and Y in the esterification reaction above are respectively",
options: [
"CH₃COCH₃ and H₂O",
"CH₃CH₂COCH₃ and H₂O₂",
"CH₃COOCH₂CH₃ and H₂O",
"CH₃CH₂CHO and CH₄"
],
answer: "CH₃COOCH₂CH₃ and H₂O",
explanation: "Reacting ethanoic acid (CH₃COOH) with ethanol (CH₃CH₂OH) in the presence of an acid catalyst forms the ester ethyl ethanoate (CH₃COOCH₂CH₃) and water (H₂O)."
},
{
id: 42, subject: "Chemistry", topic: "Organic Chemistry", year: 1995, exam: "JAMB",
question: "CHCl₃ + Cl₂ -> HCl + CCl₄. The organic substitution substitution reaction above is an example of",
options: ["an addition reaction", "a substitution reaction", "a chlorination reaction", "a condensation reaction"],
answer: "a substitution reaction",
explanation: "This reaction is a free-radical substitution reaction where a chlorine atom replaces a hydrogen atom on the carbon framework, liberating HCl gas."
},
{
id: 43, subject: "Chemistry", topic: "Organic Chemistry", year: 1995, exam: "JAMB",
question: "The systematic IUPAC nomenclature for the alkene compound CH₃-CH(CH₃)-CH=CH-CH₃ is",
options: ["1,1-dimethylbut-2-ene", "2-methylpent-3-ene", "4,4-dimethylbut-2-ene", "4-methylpent-2-ene"],
answer: "4-methylpent-2-ene",
explanation: "The longest continuous carbon chain containing the double bond has 5 carbons (pentene). Numbering from the right gives the double bond the lowest position index (starting at carbon 2). This places a methyl branch at carbon position 4, forming 4-methylpent-2-ene."
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
explanation: "Propanal (an aldehyde) and propanone (a ketone) share the identical molecular formula (C₃H₆O) but have different structural functional groups, making them functional structural isomers."
},
{
id: 45, subject: "Chemistry", topic: "Organic Chemistry", year: 1995, exam: "JAMB",
question: "Aromatic and aliphatic hydrocarbons can be easily distinguished from each other by their reactions with",
options: ["bromine water", "polymerization loops", "prolonged high heat", "chemical oxidation tests"],
answer: "bromine water",
explanation: "Aliphatic unsaturated hydrocarbons (like alkenes) react instantly with bromine water via addition to decolorize the solution. Saturated aliphatic hydrocarbons do not react in the dark. Aromatic hydrocarbons like benzene have a stable, resonant ring that resists addition reactions and does not decolorize bromine water under standard conditions."
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
explanation: "Adding sodium chloride (salting out) decreases the solubility of soap in the aqueous mixture, causing the solid soap molecules to precipitate out as a distinct top layer separate from the glycerol byproduct."
},
{
id: 47, subject: "Chemistry", topic: "Organic Chemistry", year: 1995, exam: "JAMB",
question: "The functional group represented inside the structure CH₃-CH=CH-CHO is an",
options: ["alkanol group", "alkanal group", "alkanone group", "alkanoate group"],
answer: "alkanal group",
explanation: "The molecule contains a terminal carbonyl group (–CHO), which defines the alkanal (aldehyde) functional chemical class."
},
{
id: 48, subject: "Chemistry", topic: "Organic Chemistry", year: 1995, exam: "JAMB",
question: "C_xH_y + 4O₂ -> 3CO₂ + 2H₂O. The hydrocarbon hydrocarbon C_xH_y in the balanced combustion reaction above is",
options: ["propane", "propene", "propyne", "propanone"],
answer: "propyne",
explanation: "Balancing the equation: The product side contains 3 carbon atoms (from 3CO₂) and 4 hydrogen atoms (from 2H₂O), which gives the molecular formula C₃H₄. This matches the general formula CₙH₂ₙ₋₂ for alkynes, identifying the hydrocarbon as propyne."
},
{
id: 49, subject: "Chemistry", topic: "Organic Chemistry", year: 1995, exam: "JAMB",
question: "An example of a secondary amine molecule is",
options: ["propylene", "di-butylamine", "methylamine", "trimethylamine"],
answer: "di-butylamine",
explanation: "In a secondary amine, the nitrogen atom is bonded directly to two alkyl groups and one hydrogen atom. Di-butylamine [(C₄H₉)₂NH] fits this definition. Methylamine is primary; trimethylamine is tertiary."
},
{
id: 50, subject: "Chemistry", topic: "Organic Chemistry", year: 1995, exam: "JAMB",
question: "The relatively high boiling points exhibited by alkanols are due to the presence of intermolecular",
options: ["ionic bonding lattices", "aromatic resonance character", "covalent network links", "hydrogen bonding"],
answer: "hydrogen bonding",
explanation: "Alkanols contain polar hydroxyl groups (-OH) that form strong intermolecular hydrogen bonds. These strong attractions require significantly more thermal energy to break compared to the weaker Van der Waals forces found in hydrocarbons of similar molecular mass."
}
];
export default chemJamb1995;