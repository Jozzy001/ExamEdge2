// JAMB 2010 Biology Past Questions
// 49 questions (Q1 administrative, skipped)
// Questions 6,7,9,10,12,13,42,43 reference diagrams — marked with [Fig X]
// Replace [Fig X] references with actual images when available

const bioJamb2010 = [

  // =====================
  // CELL BIOLOGY
  // =====================
  {
    subject: "Biology", topic: "Cell Biology", year: 2010, exam: "JAMB",
    question: "Which of the following characterizes a mature plant cell?",
    options: [
      "the cytoplasm fills up the entire cell space",
      "the nucleus is pushed to the centre of the cell",
      "the cell wall is made up of cellulose",
      "the nucleus is small and irregular in shape"
    ],
    answer: "the cell wall is made up of cellulose",
    explanation: "A mature plant cell is characterised by a cell wall made of cellulose, a large central vacuole that pushes the nucleus to the periphery (not centre), and cytoplasm lining the cell wall."
  },
  {
    subject: "Biology", topic: "Cell Biology", year: 2010, exam: "JAMB",
    question: "Which of the following is NOT a function of the nucleus of a cell?",
    options: [
      "it controls the life processes of the cell",
      "it translates genetic information for the manufacture of proteins",
      "it stores and carries hereditary information",
      "it is a reservoir of energy for the cell"
    ],
    answer: "it is a reservoir of energy for the cell",
    explanation: "The nucleus controls life processes, stores hereditary information (DNA), and directs protein synthesis. Energy storage and production is the function of mitochondria — not the nucleus."
  },
  {
    subject: "Biology", topic: "Cell Biology", year: 2010, exam: "JAMB",
    question: "Which of the following groups of cells is devoid of true nuclei?",
    options: ["algae", "monera", "fungi", "viruses"],
    answer: "viruses",
    explanation: "Viruses are acellular (not true cells) and lack nuclei entirely. Monera (bacteria) are prokaryotes with no membrane-bound nucleus. JAMB's answer key gives D (viruses) — they have no cellular structure at all."
  },

  // =====================
  // PLANT BIOLOGY
  // =====================
  {
    subject: "Biology", topic: "Plant Biology", year: 2010, exam: "JAMB",
    question: "The dominant phase in the life cycle of a fern is the",
    options: ["gametophyte", "prothallus", "sporophyte", "antheridium"],
    answer: "sporophyte",
    explanation: "In ferns, the sporophyte (diploid, 2n) generation is the dominant and conspicuous phase — the large leafy plant we see. The gametophyte (prothallus) is small and inconspicuous."
  },
  {
    subject: "Biology", topic: "Plant Biology", year: 2010, exam: "JAMB",
    question: "Which of the following is true of the transverse section of a dicot stem?",
    options: [
      "the epidermis is completely encircled by the cortex",
      "the xylem is more interiorly located than the phloem",
      "the cambium lies between the cortex and the vascular bundles",
      "the vascular bundles are randomly scattered within the cortex"
    ],
    answer: "the xylem is more interiorly located than the phloem",
    explanation: "In a dicot stem cross-section, vascular bundles are arranged in a ring. Within each bundle, the xylem is on the inner side (toward the centre) and phloem is on the outer side, with cambium between them."
  },
  {
    subject: "Biology", topic: "Plant Biology", year: 2010, exam: "JAMB",
    question: "[img:images/biology/bio2010fig2.png]\nThe movement of material in the xylem and phloem tissues of the plant are represented by the arrows labelled",
    options: [
      "III and IV respectively",
      "II and I respectively",
      "I and II respectively",
      "I and III respectively"
    ],
    answer: "III and IV respectively",
    explanation: "In the plant transport diagram (Fig 2), xylem carries water and minerals upward from roots, while phloem transports manufactured food (sugars) from leaves to other parts. The arrows III and IV represent these movements respectively."
  },
  {
    subject: "Biology", topic: "Plant Biology", year: 2010, exam: "JAMB",
    question: "[img:images/biology/bio2010fig2.png]\nDuring photosynthesis, the arrow labelled II represents the",
    options: [
      "escape of mineral salts",
      "absorption of energy from the sun",
      "release of carbon (IV) oxide",
      "release of oxygen as a by-product"
    ],
    answer: "release of oxygen as a by-product",
    explanation: "During photosynthesis, oxygen is released as a by-product through the stomata. Arrow II in the diagram represents this outward movement of oxygen gas from the leaf."
  },

  // =====================
  // NUTRITION
  // =====================
  {
    subject: "Biology", topic: "Nutrition", year: 2010, exam: "JAMB",
    question: "Which of the following is lacking in the diet of a person with kwashiorkor?",
    options: ["vitamins", "proteins", "carbohydrates", "minerals"],
    answer: "proteins",
    explanation: "Kwashiorkor is a severe form of protein-energy malnutrition caused specifically by protein deficiency. It is characterised by oedema (swelling), a distended belly, and depigmented hair."
  },
  {
    subject: "Biology", topic: "Nutrition", year: 2010, exam: "JAMB",
    question: "The mode of nutrition of sundew and bladderwort can be described as",
    options: ["autotrophic", "saprophytic", "holozoic", "chemosynthetic"],
    answer: "holozoic",
    explanation: "Sundew (Drosera) and bladderwort (Utricularia) are carnivorous plants that trap and digest insects. This mode of nutrition — ingesting and digesting solid organic matter — is holozoic, supplementing their photosynthesis."
  },
  {
    subject: "Biology", topic: "Nutrition", year: 2010, exam: "JAMB",
    question: "When the mixture of a food substance and Benedict's solution was warmed, the solution changed from blue to brick-red. This indicates the presence of",
    options: ["reducing sugar", "fatty acid", "sucrose", "amino acid"],
    answer: "reducing sugar",
    explanation: "Benedict's test detects reducing sugars (e.g. glucose, maltose). A colour change from blue to brick-red (or orange-red) upon heating confirms the presence of a reducing sugar."
  },
  {
    subject: "Biology", topic: "Nutrition", year: 2010, exam: "JAMB",
    question: "The part of the human gut that has an acidic content is the",
    options: ["stomach", "duodenum", "ileum", "colon"],
    answer: "stomach",
    explanation: "The stomach secretes hydrochloric acid (HCl), making its contents strongly acidic (pH 1.5–3.5). This acidity activates pepsinogen to pepsin and helps kill pathogens."
  },
  {
    subject: "Biology", topic: "Nutrition", year: 2010, exam: "JAMB",
    question: "Chemosynthetic organisms are capable of manufacturing their food from simple inorganic substances through the process of",
    options: ["oxidation", "denitrification", "reduction", "phosphorylation"],
    answer: "phosphorylation",
    explanation: "Note: JAMB answer is D (phosphorylation). Conventionally, chemosynthesis involves oxidation of inorganic compounds (A). The official answer is D — students should note this."
  },

  // =====================
  // ANIMAL DIVERSITY & EVOLUTION
  // =====================
  {
    subject: "Biology", topic: "Animal Diversity & Evolution", year: 2010, exam: "JAMB",
    question: "Parental care is exhibited by",
    options: ["toads", "snails", "earthworms", "birds"],
    answer: "birds",
    explanation: "Birds exhibit the most developed parental care among the listed organisms — building nests, incubating eggs, and feeding their young. Toads, snails, and earthworms generally abandon their eggs after laying."
  },
  {
    subject: "Biology", topic: "Animal Diversity & Evolution", year: 2010, exam: "JAMB",
    question: "[img:images/biology/bio2010fig1.png]\nWith respect to their decreasing dependence on aquatic conditions for reproduction, which of the following is the correct arrangement of the animals represented?",
    options: ["I, IV, II and III", "IV, III, II and I", "I, II, IV and III", "III, II, IV and I"],
    answer: "IV, III, II and I",
    explanation: "In Fig 1, the arrangement from most to least dependent on water for reproduction is: fish (IV) → amphibians (III) → reptiles (II) → mammals/birds (I). Fish require water entirely; mammals are least dependent."
  },
  {
    subject: "Biology", topic: "Animal Diversity & Evolution", year: 2010, exam: "JAMB",
    question: "[img:images/biology/bio2010fig1.png]\nWhich of the animals represents the oldest creatures in terms of evolutionary history?",
    options: ["III", "II", "I", "IV"],
    answer: "IV",
    explanation: "In Fig 1, organism IV represents fish — the oldest vertebrates in evolutionary history, having appeared approximately 500 million years ago, long before amphibians, reptiles, or mammals."
  },
  {
    subject: "Biology", topic: "Animal Diversity & Evolution", year: 2010, exam: "JAMB",
    question: "[img:images/biology/bio2010fig3.png]\nThe main function of the feathers covering the part labelled I is to",
    options: [
      "prevent ectoparasites from attacking the animal",
      "generate heat to keep the animal warm",
      "provide some power for flight",
      "serve as insulator to maintain body heat"
    ],
    answer: "serve as insulator to maintain body heat",
    explanation: "The contour and down feathers covering the body (labelled I in Fig 3) primarily serve as insulation — trapping air to maintain the bird's body temperature. Flight power comes from the wing feathers."
  },
  {
    subject: "Biology", topic: "Animal Diversity & Evolution", year: 2010, exam: "JAMB",
    question: "[img:images/biology/bio2010fig3.png]\nBased on the shape and structure of the beak and feet, the bird represented is likely to feed mainly on",
    options: ["flesh", "fruits", "seeds", "nectar"],
    answer: "flesh",
    explanation: "In Fig 3, the bird has a hooked beak and talons characteristic of birds of prey (raptors). These adaptations are for catching, killing, and tearing flesh — not for cracking seeds or probing flowers."
  },
  {
    subject: "Biology", topic: "Animal Diversity & Evolution", year: 2010, exam: "JAMB",
    question: "The flippers of a whale and the fins of a fish are examples of",
    options: ["divergent evolution", "coevolution", "continuous variation", "convergent evolution"],
    answer: "convergent evolution",
    explanation: "Convergent evolution occurs when unrelated organisms independently evolve similar structures due to similar environmental pressures. Whale flippers and fish fins serve the same function but evolved independently."
  },
  {
    subject: "Biology", topic: "Animal Diversity & Evolution", year: 2010, exam: "JAMB",
    question: "Which of the following organisms is mainly found in the marine habitat?",
    options: ["Achatina", "Tilapia", "Dog fish", "Tortoise"],
    answer: "Dog fish",
    explanation: "Dog fish (Squalus) is a small shark found in marine (saltwater) habitats. Achatina is a land snail, Tilapia is a freshwater fish, and tortoises are largely terrestrial."
  },

  // =====================
  // CIRCULATORY SYSTEM
  // =====================
  {
    subject: "Biology", topic: "Circulatory System", year: 2010, exam: "JAMB",
    question: "The primary structure responsible for pumping blood for circulation through the mammalian circulatory system is the",
    options: ["veins", "right auricle", "arteries", "left ventricle"],
    answer: "arteries",
    explanation: "Note: JAMB answer is C (arteries). The left ventricle is conventionally the primary pumping chamber. Arteries carry blood away from the heart. The official answer is C."
  },
  {
    subject: "Biology", topic: "Circulatory System", year: 2010, exam: "JAMB",
    question: "Circulation of blood to all parts of the body except the lungs is through",
    options: ["the pulmonary artery", "systemic circulation", "the lymphatic system", "pulmonary circulation"],
    answer: "systemic circulation",
    explanation: "Systemic circulation carries oxygenated blood from the left ventricle to all body tissues except the lungs. Pulmonary circulation handles the lung circuit separately."
  },
  {
    subject: "Biology", topic: "Circulatory System", year: 2010, exam: "JAMB",
    question: "The blood component that has the greatest affinity for oxygen is the",
    options: ["lymphocytes", "leucocytes", "erythrocytes", "thrombocytes"],
    answer: "erythrocytes",
    explanation: "Erythrocytes (red blood cells) contain haemoglobin, which has a very high affinity for oxygen. This makes them the primary carriers of oxygen in the bloodstream."
  },
  {
    subject: "Biology", topic: "Circulatory System", year: 2010, exam: "JAMB",
    question: "The barrier between maternal and foetal blood is the",
    options: ["placenta", "liver", "umbilical chord", "uterine wall"],
    answer: "placenta",
    explanation: "The placenta acts as a selective barrier between maternal and foetal blood — allowing exchange of nutrients, oxygen, and waste products without the two blood supplies directly mixing."
  },

  // =====================
  // RESPIRATION
  // =====================
  {
    subject: "Biology", topic: "Respiration", year: 2010, exam: "JAMB",
    question: "Yeast respires anaerobically to convert simple sugar to carbon (IV) oxide and",
    options: ["alcohol", "acid", "oxygen", "water"],
    answer: "alcohol",
    explanation: "Anaerobic respiration in yeast (fermentation) converts glucose into ethanol (alcohol) and carbon dioxide. This process is exploited in bread making and brewing."
  },
  {
    subject: "Biology", topic: "Respiration", year: 2010, exam: "JAMB",
    question: "The sheet of muscle that separates the thoracic and the abdominal cavities is the",
    options: ["diaphragm", "intercostal muscle", "pleural membrane", "pericardium"],
    answer: "diaphragm",
    explanation: "The diaphragm is a dome-shaped muscular sheet that separates the thoracic (chest) cavity from the abdominal cavity. It is the primary muscle of breathing."
  },
  {
    subject: "Biology", topic: "Respiration", year: 2010, exam: "JAMB",
    question: "Which of the structures is correctly matched with the organism in which it is found?\nI. Stomata → Spirogyra\nII. Alveoli → Earthworm\nIII. Malpighian tubule → Mammal\nIV. Contractile vacuole → Protozoa",
    options: ["III", "II", "I", "IV"],
    answer: "IV",
    explanation: "Contractile vacuoles are found in Protozoa (e.g. Amoeba, Paramecium) for osmoregulation — expelling excess water. Stomata are in land plants, alveoli in mammals, and Malpighian tubules in insects."
  },

  // =====================
  // EXCRETION & HOMEOSTASIS
  // =====================
  {
    subject: "Biology", topic: "Excretion & Homeostasis", year: 2010, exam: "JAMB",
    question: "The oily substance that lubricates the mammalian hair to keep it flexible and water repellent is secreted by the",
    options: ["sweat glands", "sebaceous glands", "fatty cells", "granular layer"],
    answer: "sebaceous glands",
    explanation: "Sebaceous glands in the skin secrete sebum — an oily substance that lubricates the hair and skin, keeping them flexible and providing a waterproof coating."
  },
  {
    subject: "Biology", topic: "Excretion & Homeostasis", year: 2010, exam: "JAMB",
    question: "The outer layer of the kidney where the Bowman's capsules are found is the",
    options: ["cortex", "pelvis", "medulla", "pyramid"],
    answer: "cortex",
    explanation: "The renal cortex is the outer region of the kidney where the Malpighian bodies (Bowman's capsule + glomerulus) are located. Filtration begins here."
  },

  // =====================
  // NERVOUS SYSTEM & COORDINATION
  // =====================
  {
    subject: "Biology", topic: "Nervous System & Coordination", year: 2010, exam: "JAMB",
    question: "Which of the following stimuli is likely to elicit a nastic response in an organism?",
    options: ["Touch", "Light intensity", "Chemical substances", "Gravity"],
    answer: "Chemical substances",
    explanation: "Note: JAMB answer is C. Nastic responses are non-directional responses to stimuli. Touch causes thigmonasty (e.g. Mimosa). The official answer is C — chemical substances."
  },

  // =====================
  // REPRODUCTION
  // =====================
  {
    subject: "Biology", topic: "Reproduction", year: 2010, exam: "JAMB",
    question: "In the male reproductive system of a mammal, sperm is stored in the",
    options: ["vas deferens", "urethra", "epididymis", "seminiferous tubules"],
    answer: "epididymis",
    explanation: "Sperm cells are produced in the seminiferous tubules but mature and are stored in the epididymis — a coiled tube attached to the back of each testis."
  },
  {
    subject: "Biology", topic: "Reproduction", year: 2010, exam: "JAMB",
    question: "At what stage in the life history of a mammal is the sex of an individual set?",
    options: ["at adolescence", "at puberty", "at birth", "at conception"],
    answer: "at conception",
    explanation: "Sex is determined at fertilisation (conception) by whether the sperm carries an X or Y chromosome. An XX combination produces female; XY produces male."
  },

  // =====================
  // ECOLOGY
  // =====================
  {
    subject: "Biology", topic: "Ecology", year: 2010, exam: "JAMB",
    question: "A food chain always begins with a",
    options: ["consumer", "decomposer", "producer", "primary consumer"],
    answer: "producer",
    explanation: "A food chain always starts with a producer (usually a green plant or photosynthetic organism) that converts solar energy into chemical energy, which then passes to consumers."
  },
  {
    subject: "Biology", topic: "Ecology", year: 2010, exam: "JAMB",
    question: "Mycorrhizae promote plant growth by",
    options: [
      "absorbing inorganic ions from the soil",
      "protecting it from infection",
      "helping it to utilize atmospheric nitrogen",
      "serving as a growth regulator"
    ],
    answer: "absorbing inorganic ions from the soil",
    explanation: "Mycorrhizae are symbiotic fungi associated with plant roots. They greatly increase the root surface area, enhancing the plant's ability to absorb water and inorganic ions (especially phosphates) from the soil."
  },
  {
    subject: "Biology", topic: "Ecology", year: 2010, exam: "JAMB",
    question: "The activity of an organism which affects the survival of another organism in the same habitat constitutes",
    options: ["an edaphic factor", "an abiotic factor", "a biotic factor", "a physiographic factor"],
    answer: "a biotic factor",
    explanation: "Biotic factors are the living components of an ecosystem — interactions between organisms such as predation, competition, and symbiosis. These affect the survival of other organisms."
  },
  {
    subject: "Biology", topic: "Ecology", year: 2010, exam: "JAMB",
    question: "The average number of individuals of a species per unit area of the habitat is the",
    options: ["population density", "population frequency", "population size", "population distribution"],
    answer: "population density",
    explanation: "Population density is defined as the number of individuals of a species per unit area (or volume) of habitat. It is a key measure in ecology for studying crowding and resource use."
  },
  {
    subject: "Biology", topic: "Ecology", year: 2010, exam: "JAMB",
    question: "Low annual rainfall, sparse vegetation, high diurnal temperatures and cold nights are characteristic features of the",
    options: ["tropical rainforest", "desert", "montane forest", "guinea savanna"],
    answer: "desert",
    explanation: "Deserts are characterised by very low annual rainfall (less than 250mm), extreme temperature fluctuations between day and night, sparse vegetation, and sandy or rocky terrain."
  },
  {
    subject: "Biology", topic: "Ecology", year: 2010, exam: "JAMB",
    question: "Which of the following are ways in which desert animals adapt to the extreme heat of the environment?\nI. Adoption of appropriate nocturnal habits\nII. Burrowing\nIII. Adjusting their internal body temperature\nIV. Possession of many sweat pores",
    options: ["I and IV only", "II and III only", "I and II only", "I, II and III only"],
    answer: "I and II only",
    explanation: "Desert animals adapt by being nocturnal (active at night when it's cooler) and burrowing underground to escape the heat. Most desert animals cannot regulate internal temperature (they are ectotherms)."
  },
  {
    subject: "Biology", topic: "Ecology", year: 2010, exam: "JAMB",
    question: "The loss of soil through erosion can be reduced by",
    options: ["watering", "crop rotation", "manuring", "irrigation"],
    answer: "watering",
    explanation: "Note: JAMB answer is A (watering). Conventionally, soil erosion is reduced by afforestation, terracing, mulching, or contour ploughing. The official answer is A."
  },

  // =====================
  // MUSCULOSKELETAL SYSTEM
  // =====================
  {
    subject: "Biology", topic: "Musculoskeletal System", year: 2010, exam: "JAMB",
    question: "The two halves of the pelvic girdle are joined together at the",
    options: ["pubic symphysis", "ilium", "pubis", "obturator foramen"],
    answer: "pubic symphysis",
    explanation: "The two halves of the pelvic girdle (os coxae) are joined anteriorly at the pubic symphysis — a cartilaginous joint in the midline of the body."
  },

  // =====================
  // DISEASE & HEALTH
  // =====================
  {
    subject: "Biology", topic: "Disease & Health", year: 2010, exam: "JAMB",
    question: "The vector for yellow fever is",
    options: ["Aedes mosquito", "Anopheles mosquito", "tsetse fly", "blackfly"],
    answer: "Aedes mosquito",
    explanation: "Yellow fever is transmitted by the Aedes aegypti mosquito. Anopheles transmits malaria, tsetse fly transmits sleeping sickness, and blackfly transmits river blindness (onchocerciasis)."
  },
  {
    subject: "Biology", topic: "Disease & Health", year: 2010, exam: "JAMB",
    question: "The protozoan Plasmodium falciparum is transmitted by",
    options: [
      "female Anopheles mosquitoes",
      "female Aedes mosquitoes",
      "female Culex mosquitoes",
      "female blackfly"
    ],
    answer: "female Anopheles mosquitoes",
    explanation: "Plasmodium falciparum — the most dangerous malaria parasite — is transmitted exclusively by the bite of infected female Anopheles mosquitoes. Only females bite as they need blood for egg development."
  },

  // =====================
  // GENETICS & HEREDITY
  // =====================
  {
    subject: "Biology", topic: "Genetics & Heredity", year: 2010, exam: "JAMB",
    question: "A dilute solution of phenylthiocarbamide tastes bitter to some people and is tasteless to others. This is an example of",
    options: ["taste bud variation", "discontinuous variation", "morphological variation", "continuous variation"],
    answer: "discontinuous variation",
    explanation: "PTC tasting ability is a classic example of discontinuous (qualitative) variation — individuals fall into distinct categories (tasters vs non-tasters) with no intermediate forms, controlled by a single gene."
  },
  {
    subject: "Biology", topic: "Genetics & Heredity", year: 2010, exam: "JAMB",
    question: "Thyroxine and adrenalin are examples of hormones which control",
    options: ["blood grouping", "tongue rolling", "behavioural patterns", "colour variation"],
    answer: "behavioural patterns",
    explanation: "Thyroxine controls metabolic rate and overall body activity, while adrenalin triggers the fight-or-flight response. Both hormones significantly influence behavioural patterns and physiological responses."
  },
  {
    subject: "Biology", topic: "Genetics & Heredity", year: 2010, exam: "JAMB",
    question: "A pair of genes that control a trait is referred to as",
    options: ["an allele", "recessive", "dominant", "a hybrid"],
    answer: "an allele",
    explanation: "Alleles are alternative forms of a gene that occupy the same locus on homologous chromosomes. A pair of alleles controls the expression of a trait — one inherited from each parent."
  },
  {
    subject: "Biology", topic: "Genetics & Heredity", year: 2010, exam: "JAMB",
    question: "The chromosome number of a cell before and after the process of meiosis is conventionally represented as",
    options: ["2n → 2n", "n → n", "n → 2n", "2n → n"],
    answer: "2n → n",
    explanation: "Meiosis is a reduction division — it halves the chromosome number. A diploid cell (2n) undergoes meiosis to produce haploid gametes (n). For humans: 46 chromosomes → 23 chromosomes."
  },
  {
    subject: "Biology", topic: "Genetics & Heredity", year: 2010, exam: "JAMB",
    question: "If both parents are heterozygous for a trait, the probability that an offspring will be recessive for that trait is",
    options: ["3/4", "1/2", "1/4", "1"],
    answer: "1/4",
    explanation: "When both parents are heterozygous (Aa × Aa), the offspring ratio is 1AA : 2Aa : 1aa. The probability of the recessive phenotype (aa) is 1 out of 4 = 25% or 1/4."
  },
  {
    subject: "Biology", topic: "Genetics & Heredity", year: 2010, exam: "JAMB",
    question: "The main distinguishing features between the soldier termite and other members of the caste are the",
    options: [
      "presence of wings, possession of a small head and large thorax",
      "presence of wings, possession of a large thorax and a small head",
      "absence of wings, possession of strong mandibles and a large head",
      "absence of wings, possession of big head and the absence of mandible"
    ],
    answer: "absence of wings, possession of strong mandibles and a large head",
    explanation: "Soldier termites are wingless, with a distinctively large head and powerful mandibles (jaws) used for defence of the colony. They are sterile and cannot reproduce — their sole role is protection."
  },

  // =====================
  // VARIATION & DIAGRAMS
  // =====================
  {
    subject: "Biology", topic: "Genetics & Heredity", year: 2010, exam: "JAMB",
    question: "[img:images/biology/bio2010fig4.png]\nIn which plantation are all the trees between the height of 2-4m?",
    options: ["III", "II", "I", "IV"],
    answer: "III",
    explanation: "From Fig 4 (plantation height distribution diagram), Plantation III contains all trees within the 2–4m height range, showing a uniform and restricted height distribution."
  },
  {
    subject: "Biology", topic: "Genetics & Heredity", year: 2010, exam: "JAMB",
    question: "[img:images/biology/bio2010fig4.png]\nWhich of the following is a true feature of plantation II?",
    options: [
      "it has the highest number of trees of about 2m high",
      "it has the highest number of trees",
      "it has the highest number of tall trees",
      "the height of all its trees range between 2m and 6m"
    ],
    answer: "it has the highest number of trees of about 2m high",
    explanation: "From Fig 4, Plantation II has the highest frequency of trees at approximately 2m height — showing the peak of its distribution curve at the 2m mark."
  }
]

export default bioJamb2010
