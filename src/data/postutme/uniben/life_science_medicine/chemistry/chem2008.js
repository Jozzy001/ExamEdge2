// UNIBEN Post-UTME 2008 — Chemistry (Life Sciences & Medicine)
// 22 questions from 2008 General Paper

const unibenLifeChem2008 = [
  {
    subject: "Chemistry", topic: "Atomic Structure & Bonding", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Which of the following pairs each have the same number of electrons as argon (Ar, Z=18)?",
    options: ["Li and F", "Na⁺ and F", "Na⁺ and Cl", "K⁺ and Cl"],
    answer: "K⁺ and Cl",
    explanation: "Ar has 18 electrons. K⁺: Z=19, loses 1e → 18 electrons ✓. Cl⁻: Z=17, gains 1e → 18 electrons ✓. Both are isoelectronic with argon."
  },
  {
    subject: "Chemistry", topic: "Gases & Kinetic Theory", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "A mixture of 0.20 mol Ar, 0.20 mol Ne, and 0.30 mol He is at total pressure 2.1 atm. What is the partial pressure of He?",
    options: ["0.70 atm", "0.80 atm", "0.90 atm", "0.65 atm"],
    answer: "0.90 atm",
    explanation: "Dalton's Law: P_He = (moles He / total moles) × P_total = (0.30/0.70) × 2.1 = 0.4286 × 2.1 = 0.90 atm."
  },
  {
    subject: "Chemistry", topic: "Acids, Bases & Salts", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "The pOH of a solution is 12.23. Calculate the hydrogen ion concentration.",
    options: ["1.52×10⁻²", "1.69×10⁻²", "1.74×10⁻²", "1.87×10⁻²"],
    answer: "1.69×10⁻²",
    explanation: "pH = 14 - pOH = 14 - 12.23 = 1.77. [H⁺] = 10⁻¹·⁷⁷ = 1.70×10⁻² ≈ 1.69×10⁻²."
  },
  {
    subject: "Chemistry", topic: "Atomic Structure & Bonding", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Which of the following is an artificial element?",
    options: ["Plutonium", "Lanthanum", "Uranium", "Lithium"],
    answer: "Plutonium",
    explanation: "Plutonium (Pu, Z=94) is a transuranic element that does not occur naturally in significant amounts — it is produced artificially in nuclear reactors. Uranium, lanthanum, and lithium all occur naturally."
  },
  {
    subject: "Chemistry", topic: "Acids, Bases & Salts", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "The reaction Ba²⁺ + SO₄²⁻ → BaSO₄ occurs during:",
    options: ["Hydrolysis", "Synthesis", "Thermal association", "Double decomposition"],
    answer: "Double decomposition",
    explanation: "Double decomposition (metathesis) is when two compounds exchange ions to form new compounds. BaSO₄ is an insoluble precipitate formed when barium and sulfate ions combine. This is a classic double decomposition/precipitation reaction."
  },
  {
    subject: "Chemistry", topic: "Metals & Non-Metals", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "White phosphorus is stored under water because it:",
    options: ["Is corrosive", "Has low ignition temperature", "Reacts with carbon dioxide", "Is hydrolyzed by atmospheric moisture"],
    answer: "Has low ignition temperature",
    explanation: "White phosphorus ignites spontaneously in air at about 30°C (very low ignition temperature). Storing it under water prevents contact with oxygen and air, preventing spontaneous combustion."
  },
  {
    subject: "Chemistry", topic: "Acids, Bases & Salts", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "When aluminium oxide reacts with excess sodium hydroxide, the formula of one compound formed is:",
    options: ["AlNaO₂", "Al(OH)₄", "NaAl(OH)₄", "Na₃AlO₃"],
    answer: "NaAl(OH)₄",
    explanation: "Al₂O₃ + 2NaOH + 3H₂O → 2NaAl(OH)₄. Aluminium oxide is amphoteric — it reacts with excess NaOH to form sodium tetrahydroxoaluminate NaAl(OH)₄ (also written NaAlO₂ + 2H₂O)."
  },
  {
    subject: "Chemistry", topic: "Metals & Non-Metals", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    isHotTopic: true,
    question: "An alloy of copper and tin used for electrical conductors is:",
    options: ["Brass", "Solder", "Bronze", "Type metal"],
    answer: "Bronze",
    explanation: "Bronze = copper + tin. Used for electrical conductors, bells, and bearings. Brass = copper + zinc. Solder = lead + tin. ★ RECURRING — bronze/brass distinction appears every year."
  },
  {
    subject: "Chemistry", topic: "Organic Chemistry", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Kerosene and petrol (gasoline) are:",
    options: [
      "Hydrocarbons with kerosene having higher molecules",
      "Hydrocarbons with same size molecules but different shapes",
      "Hydrocarbons with petrol having bigger molecules",
      "Compounds of carbon, hydrogen and sulfur for kerosene"
    ],
    answer: "Hydrocarbons with kerosene having higher molecules",
    explanation: "Both kerosene and petrol are hydrocarbons from petroleum. Petrol = C₅-C₁₀ (smaller molecules, lower boiling point). Kerosene = C₁₀-C₁₆ (larger molecules, higher boiling point). Kerosene has higher/larger molecules."
  },
  {
    subject: "Chemistry", topic: "Organic Chemistry", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "The preparation of ethoxyethane (C₂H₅OC₂H₅) from ethanol can be considered as:",
    options: ["Dehydration", "Oxidation", "Hydrolysis", "Dehydrogenation"],
    answer: "Dehydration",
    explanation: "Ethoxyethane (diethyl ether) is made by intermolecular dehydration of two ethanol molecules: 2C₂H₅OH → C₂H₅OC₂H₅ + H₂O. Water is removed (dehydration) using concentrated H₂SO₄ at 140°C."
  },
  {
    subject: "Chemistry", topic: "Organic Chemistry", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Which gives the correct formula of the fatty acid present in palm oil?",
    options: ["CH₃(CH₂)₁₄COOH", "CH₃(CH₂)₁₂COOH", "CH₃(CH₂)₁₅COOH", "CH₃(CH₂)₁₇COOH"],
    answer: "CH₃(CH₂)₁₄COOH",
    explanation: "The main fatty acid in palm oil is palmitic acid = C₁₆H₃₂O₂ = CH₃(CH₂)₁₄COOH (a 16-carbon saturated fatty acid). Stearic acid = CH₃(CH₂)₁₆COOH (18 carbons). Myristic = CH₃(CH₂)₁₂COOH (14 carbons)."
  },
  {
    subject: "Chemistry", topic: "Organic Chemistry", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Glycerol has the typical properties of:",
    options: ["An acid", "A base", "An alcohol", "An ester"],
    answer: "An alcohol",
    explanation: "Glycerol (propane-1,2,3-triol) has three OH groups — it is a trihydric alcohol. It shows typical alcohol properties: forms esters with acids, undergoes oxidation, etc."
  },
  {
    subject: "Chemistry", topic: "Organic Chemistry", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    isHotTopic: true,
    question: "A certain natural product contains an ester. Glycerol and palmitic soap can be made from it by:",
    options: [
      "Passing over activated charcoal",
      "Boiling with sodium hydroxide",
      "Mixing with hydrogen",
      "Heating with glycerin"
    ],
    answer: "Boiling with sodium hydroxide",
    explanation: "Saponification: fat/oil (a natural ester) + NaOH → soap (sodium salt of fatty acid) + glycerol. Boiling with sodium hydroxide is saponification. This is how soap is manufactured. ★ RECURRING!"
  },
  {
    subject: "Chemistry", topic: "Organic Chemistry", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Which of the following is NOT a thermosetting plastic?",
    options: [
      "Terylene products",
      "Phenol-methanal products",
      "Carbamide-methanal products",
      "Melamine-methanal products"
    ],
    answer: "Terylene products",
    explanation: "Thermosetting plastics permanently harden when heated (cannot be remoulded): phenol-methanal (Bakelite), carbamide-methanal (urea-formaldehyde), and melamine-methanal are all thermosets. Terylene (polyester) is a THERMOPLASTIC — it can be softened and reshaped by heating."
  },
  {
    subject: "Chemistry", topic: "Stoichiometry & Moles", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    isHotTopic: true,
    question: "Which of the following statements is/are correct? I. 1 mol Na = 6.022×10²³ atoms weighing 23g. II. 1 mol Mg = 6.022×10²³ atoms weighing 24g. III. 1 mol O = 6.022×10²³ atoms weighing 16g.",
    options: ["I and II", "II and III", "I and III", "I, II and III"],
    answer: "I, II and III",
    explanation: "All three are correct. One mole of any element contains Avogadro's number (6.022×10²³) of atoms and has mass equal to atomic mass in grams. Na=23g, Mg=24g, O=16g. ★ RECURRING — Avogadro's number appears every year."
  },
  {
    subject: "Chemistry", topic: "Atomic Structure & Bonding", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "The difference in mass number of atoms of the same element is due to difference in:",
    options: ["Proton number", "Number of electrons", "Neutron number", "Proton and electron number"],
    answer: "Neutron number",
    explanation: "Isotopes have the same atomic number (same protons and electrons) but different mass numbers because they have different numbers of neutrons. A = protons + neutrons, so different A = different neutron count."
  },
  {
    subject: "Chemistry", topic: "Acids, Bases & Salts", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "On adding dilute H₂SO₄ to Cr₂O₇²⁻, the solution becomes:",
    options: ["Yellow", "Orange", "Pink", "Colourless"],
    answer: "Orange",
    explanation: "Dichromate (Cr₂O₇²⁻) is orange in acidic solution. In alkaline solution, chromate (CrO₄²⁻) is yellow. Adding H₂SO₄ (acid) maintains the orange dichromate form or converts yellow chromate to orange dichromate."
  },
  {
    subject: "Chemistry", topic: "Atomic Structure & Bonding", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Which statement is NOT true of hydrogen sulfide?",
    options: [
      "It is a liquid at room temperature",
      "It is covalent",
      "It is a weak acid in aqueous solution",
      "It is a stronger reducing agent than water"
    ],
    answer: "It is a liquid at room temperature",
    explanation: "H₂S is a GAS at room temperature (bp = -60°C). It is covalent, a weak acid (Ka ≈ 10⁻⁷), and a stronger reducing agent than water."
  },
  {
    subject: "Chemistry", topic: "Organic Chemistry", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Products of acid hydrolysis of sucrose are:",
    options: ["Fructose and maltose", "Glucose and cellulose", "Maltose and cellulose", "Glucose and fructose"],
    answer: "Glucose and fructose",
    explanation: "Sucrose + H₂O (acid catalyst) → glucose + fructose. Sucrose is a disaccharide of glucose and fructose. Acid hydrolysis breaks the glycosidic bond."
  },
  {
    subject: "Chemistry", topic: "Rates of Reaction", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Which of the following statements about catalysis is correct? 1. Small amount affects rate for long time. 2. Catalyst always chemically unchanged. 3. Effect enhanced by promoters. 4. Catalyst always physically unchanged. 5. Catalyst always speeds up reaction.",
    options: ["1,2,3,4,5", "1,2,3 only", "2,3,4 only", "2,4 only"],
    answer: "1,2,3 only",
    explanation: "Statement 4 is false — a catalyst can change physically (e.g. iron powder vs lump). Statement 5 is false — inhibitors (negative catalysts) slow reactions. Statements 1, 2, and 3 are correct."
  },
  {
    subject: "Chemistry", topic: "Metals & Non-Metals", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Argon is used in gas-filled lamps because it:",
    options: ["Is radioactive", "Has low pressure", "Is combustible", "Prevents oxidation"],
    answer: "Prevents oxidation",
    explanation: "Argon is chemically inert — it does not react with the tungsten filament at high temperatures, preventing oxidation and extending the lamp's life."
  },
  {
    subject: "Chemistry", topic: "Stoichiometry & Moles", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Mass of ZnSO₄ formed from reaction of ZnCO₃ with H₂SO₄:",
    options: ["32.2 g", "37.5 g", "38.6 g", "34.3 g"],
    answer: "37.5 g",
    explanation: "ZnCO₃ + H₂SO₄ → ZnSO₄ + H₂O + CO₂. Molar mass ZnCO₃=125, ZnSO₄=161. From given mass of ZnCO₃ → moles → same moles ZnSO₄ → mass. UNIBEN answer B (37.5g)."
  }
]

export default unibenLifeChem2008
