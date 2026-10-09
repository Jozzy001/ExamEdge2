// Path: hotquestions/biology.js

export const biologyHotQuestions = [
  // CATEGORY: CELL BIOLOGY & TRANSPORT EXPERIMENTS
  {
    id: 1,
    category: "Cell Biology & Biochemistry",
    question: "A hollowed-out yam tuber containing a strong sugar solution is placed in a beaker of distilled water. After several hours, the level of the liquid inside the yam will:",
    options: {
      A: "Decrease significantly",
      B: "Remain completely the same",
      C: "Rise as water moves inward",
      D: "Change to a blue-black coloration"
    },
    correctAnswer: "C",
    yearsAppeared: [1983, 1991, 2004],
    explanation: "This classic setup demonstrates osmosis. Water molecules move from a region of higher water potential (the hypotonic distilled water in the beaker) to a region of lower water potential (the hypertonic strong sugar solution inside the yam) across the semi-permeable cell membranes of the living yam tissues, causing the inner fluid level to rise."
  },
  {
    id: 2,
    category: "Respiration",
    question: "In an experiment to demonstrate anaerobic respiration in yeast, the gas evolved which turns lime water milky/cloudy is:",
    options: {
      A: "Oxygen",
      B: "Carbon (IV) oxide",
      C: "Nitrogen",
      D: "Hydrogen"
    },
    correctAnswer: "B",
    yearsAppeared: [1984, 1991, 2001, 2010, 2011],
    explanation: "Anaerobic respiration (fermentation) of glucose by yeast cells produces ethanol and carbon (IV) oxide (CO2). When this gas is funneled into calcium hydroxide solution (lime water), it reacts chemically to form an insoluble white precipitate of calcium carbonate, which turns the clear liquid milky."
  },
  {
    id: 3,
    category: "Cell Biology & Biochemistry",
    question: "Which of the following cellular organelles is correctly referred to as the powerhouse of the cell?",
    options: {
      A: "Nucleus",
      B: "Ribosome",
      C: "Mitochondrion",
      D: "Golgi apparatus"
    },
    correctAnswer: "C",
    yearsAppeared: [1989, 1991, 1992, 1997, 2013, 2016],
    explanation: "The mitochondrion is the site of aerobic cellular respiration. It is structurally responsible for breaking down respiratory substrates to release cellular energy, storing it in the high-energy chemical bonds of Adenosine Triphosphate (ATP)."
  },

  // CATEGORY: GENETICS & HEREDITY
  {
    id: 4,
    category: "Genetics & Heredity",
    question: "A man who is a carrier of the sickle-cell trait (AS) marries a woman who is also a carrier (AS). What is the statistical probability of them giving birth to a child with normal hemoglobin (AA)?",
    options: {
      A: "25%",
      B: "50%",
      C: "75%",
      D: "100%"
    },
    correctAnswer: "A",
    yearsAppeared: [1986, 1997, 2003, 2010],
    explanation: "A monohybrid cross between two heterozygous individuals (AS x AS) yields a Mendelian genotypic ratio of 1 AA : 2 AS : 1 SS. Therefore, there is a 1-in-4 or 25% chance of producing a normal child (AA), a 50% chance of a carrier child (AS), and a 25% chance of a child with sickle-cell anemia (SS)."
  },
  {
    id: 5,
    category: "Genetics & Heredity",
    question: "Which of the following sets of human characteristics are typical examples of discontinuous variation?",
    options: {
      A: "Height and skin color",
      B: "Body weight and intelligence",
      C: "Blood groups and tongue-rolling ability",
      D: "Foot length and hair thickness"
    },
    correctAnswer: "C",
    yearsAppeared: [1986, 1993, 2010],
    explanation: "Discontinuous variation describes traits with distinct, separate categories and no intermediate values (e.g., you can either roll your tongue or you cannot, and you belong to one specific blood group). Continuous variations like height and weight show a gradual range of values and are heavily influenced by environmental factors."
  },
  {
    id: 6,
    category: "Genetics & Heredity",
    question: "During a blood emergency, an individual belonging to Blood Group AB is considered a universal recipient because their blood plasma contains:",
    options: {
      A: "No anti-A or anti-B antibodies",
      B: "Both A and B surface antigens",
      C: "Only anti-A antibodies",
      D: "High concentrations of fibrinogen"
    },
    correctAnswer: "A",
    yearsAppeared: [1985, 1990, 2013],
    explanation: "Blood group AB individuals possess both A and B antigens on their red blood cell surfaces, meaning their blood serum lacks both anti-A and anti-B antibodies. Consequently, they can receive red blood cells from any blood donor group (A, B, AB, or O) without triggering an immune agglutination (clumping) reaction."
  },

  // CATEGORY: ANIMAL PHYSIOLOGY (DIGESTION, EXCRETION, CIRCULATION)
  {
    id: 7,
    category: "Excretion & Homeostasis",
    question: "In the mammalian kidney, the specific site where ultrafiltration takes place under high hydrostatic pressure is the:",
    options: {
      A: "Loop of Henle",
      B: "Bowman's capsule and glomerulus",
      C: "Distal convoluted tubule",
      D: "Collecting duct"
    },
    correctAnswer: "B",
    yearsAppeared: [1985, 1990, 2000, 2010, 2012, 2015],
    explanation: "Ultrafiltration occurs in the renal cortex where blood entering the glomerulus via the wide afferent arteriole leaves through a narrower efferent arteriole. This structural difference creates high hydrostatic pressure, forcing water, glucose, salts, and urea across the semi-permeable membranes into the Bowman's capsule as glomerular filtrate."
  },
  {
    id: 8,
    category: "Nutrition",
    question: "Which of the following organs plays a dual role in mammals by acting as both a digestive exocrine gland and a homeostatic endocrine organ?",
    options: {
      A: "Liver",
      B: "Spleen",
      C: "Pancreas",
      D: "Gall bladder"
    },
    correctAnswer: "C",
    yearsAppeared: [1983, 1987, 1990, 1995, 1999, 2002],
    explanation: "The pancreas is a dual-purpose organ. Its exocrine tissue secretes pancreatic juice containing digestive enzymes (trypsin, amylase, lipase) into the duodenum. Simultaneously, its endocrine tissue (Islets of Langerhans) secretes hormones directly into the bloodstream (insulin and glucagon) to regulate blood glucose levels."
  },
  {
    id: 9,
    category: "Circulatory System",
    question: "A unique distinguishing characteristic of mature mammalian erythrocytes (red blood cells) compared to other body cells is that they:",
    options: {
      A: "Are actively phagocytic",
      B: "Lack a nucleus at maturity",
      C: "Possess numerous flagella",
      D: "Shed their cell membranes"
    },
    correctAnswer: "B",
    yearsAppeared: [1983, 1998, 2002, 2010],
    explanation: "During maturation, mammalian red blood cells expel their nuclei and other organelles. This distinct evolutionary adaptation creates a biconcave disc shape, maximizing the cellular surface-area-to-volume ratio and clearing extra internal space to pack more oxygen-carrying hemoglobin."
  },

  // CATEGORY: EVOLUTION & DIVERSITY
  {
    id: 10,
    category: "Evolution",
    question: "The basic anatomical similarities found among the limbs of whales, birds, humans, and bats (the pentadactyl limb structure) offer concrete support for evolution through:",
    options: {
      A: "Spontaneous generation",
      B: "Homology and common ancestry",
      C: "The law of use and disuse",
      D: "Convergent evolution"
    },
    correctAnswer: "B",
    yearsAppeared: [1993, 1994, 2002],
    explanation: "The pentadactyl (five-digited) limb layout is an example of homologous structures—organs sharing a similar fundamental skeletal architecture inherited from a common ancestor, even though they have modified across millions of years to serve diverse functions like swimming, flying, running, or grasping."
  }
];
