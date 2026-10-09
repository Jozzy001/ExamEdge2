// Path: hotquestions/chemistry.js

export const chemistryHotQuestions = [
  // CATEGORY: MIXTURES & SEPARATION TECHNIQUES
  {
    id: 1,
    category: "Separation Techniques",
    question: "A mixture of common salt, ammonium chloride and barium sulphate can best be separated by:",
    options: {
      A: "Addition of water followed by filtration then sublimation",
      B: "Addition of water followed by sublimation then filtration",
      C: "Sublimation followed by addition of water then filtration",
      D: "Fractional distillation",
      E: "Fractional crystallization"
    },
    correctAnswer: "C",
    yearsAppeared: [1983, 1988, 1994],
    explanation: "Ammonium chloride sublimes directly from a solid to a gas when heated, so sublimation must be done first to isolate it while dry. Barium sulphate is completely insoluble in water while common salt (NaCl) dissolves readily, allowing them to be separated cleanly via subsequent water addition and filtration."
  },

  // CATEGORY: ATMOSPHERIC CHEMISTRY & GAS TESTS
  {
    id: 2,
    category: "Atmospheric Chemistry",
    question: "A stream of air was successively passed through three tubes X, Y, and Z containing a concentrated aqueous solution of KOH, red hot copper powder and fused calcium chloride respectively. What was the composition of the gas emanating from tube Z?",
    options: {
      A: "CO2 and the inert gases",
      B: "NO2 and the inert gases",
      C: "Nitrogen and the inert gases",
      D: "Water vapour, N2 and the inert gases"
    },
    correctAnswer: "C",
    yearsAppeared: [1987, 1989, 1991, 1994, 2004],
    explanation: "Concentrated potassium hydroxide (KOH) absorbs Carbon (IV) oxide, red-hot copper powder selectively strips out Oxygen by reacting to form copper (II) oxide, and fused calcium chloride absorbs residual moisture. The remaining dry gas stream contains only unreactive Nitrogen and noble/inert gases."
  },

  // CATEGORY: APPLIED ORGANIC CHEMISTRY & SAPONIFICATION
  {
    id: 3,
    category: "Organic Chemistry",
    question: "In the industrial production of soap, concentrated sodium chloride solution (common salt) is added to the boiling mixture in order to:",
    options: {
      A: "Saponify the fat and oil completely",
      B: "Emulsify the soap products",
      C: "Decrease the solubility of the soap, causing it to precipitate",
      D: "Increase the solubility of the soap",
      E: "React chemically with glycerol"
    },
    correctAnswer: "C",
    yearsAppeared: [1984, 1985, 1996, 2002, 2004],
    explanation: "The addition of concentrated sodium chloride (NaCl) increases the ionic strength of the solution, which drastically decreases the solubility of the soap molecules. This process, structurally known as 'salting out', forces the soap to precipitate out as a solid cake away from the glycerol layer."
  },

  // CATEGORY: WATER CHEMISTRY & HOMEOPHILIC PROPERTIES
  {
    id: 4,
    category: "Water Chemistry",
    question: "Water is structurally described as 'hard' if it resists lathering with soap. The principal ionic chemical species responsible for this condition are:",
    options: {
      A: "Sodium and potassium ions",
      B: "Calcium and magnesium ions",
      C: "Nitrate and chloride ions",
      D: "Carbonate and trioxosilicate ions"
    },
    correctAnswer: "B",
    yearsAppeared: [1984, 1986, 1988, 1999, 2004],
    explanation: "Hardness in natural water supplies is directly caused by dissolved divalent cations, primarily Calcium (Ca2+) and Magnesium (Mg2+). These ions react with soap molecules to form an insoluble greyish precipitate or scum, destroying the lather until they are removed."
  },

  // CATEGORY: NITROGEN COMPONENT THERMAL DECOMPOSITION
  {
    id: 5,
    category: "Inorganic Chemistry",
    question: "Which of the following gaseous configurations and water vapour are produced when ammonium trioxonitrate (V) crystals are cautiously heated in a hard glass flask?",
    options: {
      A: "NO2 and oxygen",
      B: "NH3 and oxygen",
      C: "Nitrogen gas and water",
      D: "Dinitrogen oxide (N2O) and water"
    },
    correctAnswer: "D",
    yearsAppeared: [1988, 1989, 1990, 1994],
    explanation: "Cautious thermal decomposition of pure ammonium trioxonitrate (V) (NH4NO3) yields Dinitrogen oxide gas (N2O, laughing gas) and water vapour. Stronger, uncontrolled heating can trigger explosive reactions producing alternative brown fumes of Nitrogen (IV) oxide."
  },

  // CATEGORY: ALLOTROPY OF CARBON AND SULPHUR
  {
    id: 6,
    category: "Allotropy & Structural Forms",
    question: "An element that can exist in two or more different structural forms in the same physical state, possessing similar chemical properties but different physical traits, exhibits:",
    options: {
      A: "Polymerism",
      B: "Isotropy",
      C: "Isomorphism",
      D: "Isomerism",
      E: "Allotropy"
    },
    correctAnswer: "E",
    yearsAppeared: [1984, 1985, 1994, 1996, 2000],
    explanation: "This defines allotropy. Typical examples frequently found in exams include Carbon (existing as diamond, graphite, or amorphous charcoal) and Sulphur (existing as rhombic, monoclinic, or plastic sulphur structures)."
  },

  // CATEGORY: HYDROCARBON SATURATION CHECKS
  {
    id: 7,
    category: "Organic Chemistry",
    question: "Unsaturated organic hydrocarbon compounds (such as alkenes and alkynes) can be identified in qualitative laboratory tests by their quick decolourization of:",
    options: {
      A: "Silver bromide and acidified water",
      B: "Bromine water and acidified potassium tetraoxomanganate (VII) solution",
      C: "Silver nitrate solution and bromine gas",
      D: "Alkaline sodium chloride and litmus paper"
    },
    correctAnswer: "B",
    yearsAppeared: [1984, 1985, 1986, 2000],
    explanation: "Alkenes and alkynes possess reactive carbon-to-carbon double (=) or triple (≡) bonds that undergo addition reactions. They instantly break down and decolourize the reddish-brown color of bromine water or the purple hue of acidified potassium tetraoxomanganate (VII)."
  }
];
