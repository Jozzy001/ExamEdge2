// EXAMEDGENG — BIOLOGY STUDY GUIDES (EXTRA)
// Guides for Biology topics that did not have one yet.
// Keys match the topic names in the question bank exactly.
//
// HOW TO USE:
// 1. Save this file as src/data/studyGuidesBiologyExtra.js
// 2. In src/data/studyGuides.js add at the top:
//      import BIOLOGY_EXTRA_GUIDES from "./studyGuidesBiologyExtra"
// 3. At the very end of the STUDY_GUIDES object (just before the closing }), add:
//      ...BIOLOGY_EXTRA_GUIDES,

const BIOLOGY_EXTRA_GUIDES = {

  // ==========================================
  // BIOLOGY — PLANT STRUCTURE & GROWTH
  // ==========================================
  "Plant Structure & Growth": {
    subject: "Biology",
    title: "Plant Structure & Growth",
    icon: "🌱",
    estimatedTime: "4 min read",
    sections: [
      { heading: "What This Topic Covers", type: "text",
        content: "This topic covers how plants are built (roots, stems, leaves), how water and food move through them, the classic experiments (yam osmometer and potometer), and the hormones that control growth. Transport tissues and plant hormones are tested almost every year." },
      { heading: "Transport Tissues", type: "cards", items: [
        { title: "Xylem", body: "Carries WATER and MINERAL SALTS from roots to leaves (upward only). Made of dead, lignified cells (vessels and tracheids). Also gives mechanical support. RECURRING!" },
        { title: "Phloem", body: "Carries manufactured FOOD (sucrose) from leaves to all parts of the plant, in BOTH directions. Made of living cells: sieve tubes and companion cells. RECURRING!" },
        { title: "Cambium", body: "Layer of dividing (meristematic) cells between xylem and phloem in dicots. Adds secondary growth: the stem gets thicker. Monocots have NO cambium." },
        { title: "Root hairs", body: "Tiny outgrowths of root epidermal cells. Increase surface area for absorption of water and mineral salts." },
      ]},
      { heading: "Monocot vs Dicot", type: "cards", items: [
        { title: "Monocots (e.g. maize, grass)", body: "One cotyledon. Parallel leaf veins. Vascular bundles SCATTERED in the stem. Fibrous roots. No cambium." },
        { title: "Dicots (e.g. bean, mango)", body: "Two cotyledons. Net-like leaf veins. Vascular bundles in a RING in the stem. Tap root. Cambium present." },
      ]},
      { heading: "Water Movement and Key Experiments", type: "cards", items: [
        { title: "Transpiration", body: "Loss of water vapour from the leaves, mainly through the STOMATA. Pulls water up the xylem. Increases with heat, wind and dry air; decreases with high humidity." },
        { title: "Potometer", body: "Measures the RATE OF WATER UPTAKE by a leafy shoot (used to estimate the rate of transpiration). The movement of an air bubble along a capillary tube is timed. RECURRING!" },
        { title: "Yam osmometer", body: "A hollowed yam tuber with sugar solution inside, placed in water. Water enters by OSMOSIS and the liquid rises in the tube. Shows that osmosis moves water into a more concentrated solution. RECURRING!" },
        { title: "Guard cells", body: "Surround each stoma. Turgid = stoma OPEN. Flaccid = stoma CLOSED." },
      ]},
      { heading: "Plant Growth and Hormones", type: "cards", items: [
        { title: "Auxins", body: "Made in shoot tips. Cause cell elongation. Responsible for apical dominance (the terminal bud stops side buds growing) and tropisms (phototropism and geotropism). RECURRING!" },
        { title: "Gibberellins", body: "Promote STEM ELONGATION. Also break seed dormancy and help germination." },
        { title: "Cytokinins", body: "Promote cell division and delay leaf ageing. Work against apical dominance." },
        { title: "Ethylene", body: "Gas that causes fruit RIPENING." },
        { title: "Abscisic acid", body: "Closes stomata in drought and keeps seeds dormant." },
        { title: "Primary vs secondary growth", body: "Primary = growth in LENGTH at root and shoot tips (apical meristems). Secondary = growth in THICKNESS from the cambium." },
      ]},
      { heading: "Trap Answers to Avoid", type: "warning", items: [
        "Xylem carries water UPWARD only. Phloem carries food in BOTH directions.",
        "Xylem vessels are DEAD cells. Phloem sieve tubes are LIVING.",
        "Auxin makes the stem grow toward light by making the shaded side elongate MORE, not by making the lit side grow more.",
        "The potometer measures water UPTAKE, which is used to estimate transpiration. It does not measure photosynthesis.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Xylem = water + minerals, upward, dead cells. Phloem = food, both ways, living cells. Auxin = apical dominance and tropisms. Gibberellin = stem elongation. Potometer = water uptake. Yam osmometer = osmosis." }
    ]
  },

  // ==========================================
  // BIOLOGY — CELL BIOLOGY & BIOCHEMISTRY
  // ==========================================
  "Cell Biology & Biochemistry": {
    subject: "Biology",
    title: "Cell Biology & Biochemistry",
    icon: "🔬",
    estimatedTime: "4 min read",
    sections: [
      { heading: "What This Topic Covers", type: "text",
        content: "The cell is the basic unit of life. This topic covers cell structure, how substances move in and out, enzymes, the chemicals that make up living things (carbohydrates, proteins, lipids, nucleic acids) and the food tests used to detect them." },
      { heading: "Cell Organelles", type: "cards", items: [
        { title: "Nucleus", body: "Controls the cell and holds the DNA (chromosomes)." },
        { title: "Mitochondria", body: "Site of AEROBIC RESPIRATION. Releases energy as ATP. Active cells (sperm, muscle) have many. RECURRING!" },
        { title: "Ribosomes", body: "Make PROTEINS." },
        { title: "Chloroplast", body: "Site of PHOTOSYNTHESIS. Plant cells only." },
        { title: "Cell membrane", body: "Selectively permeable. Controls what enters and leaves the cell." },
        { title: "Cell wall", body: "Made of cellulose in plants. Gives shape and support. Fully permeable." },
        { title: "Vacuole", body: "Large and permanent in plant cells (stores cell sap). Contractile vacuole in Amoeba and Paramecium removes excess water." },
        { title: "Centriole", body: "Forms spindle fibres in cell division. Animal cells only." },
      ]},
      { heading: "Plant Cell vs Animal Cell", type: "cards", items: [
        { title: "Only in plant cells", body: "Cell wall, chloroplasts, large permanent vacuole. Starch is stored." },
        { title: "Only in animal cells", body: "Centrioles. Small temporary vacuoles. Glycogen is stored." },
        { title: "Prokaryote vs Eukaryote", body: "Prokaryotes (bacteria, blue-green algae) have NO nuclear membrane. Eukaryotes have a true nucleus." },
        { title: "Largest human cell", body: "The OVUM (egg cell). Smallest = sperm head region. RECURRING!" },
      ]},
      { heading: "Movement of Substances", type: "cards", items: [
        { title: "Diffusion", body: "Molecules move from HIGH to LOW concentration. No energy needed." },
        { title: "Osmosis", body: "Movement of WATER through a semi-permeable membrane from a dilute solution to a concentrated solution." },
        { title: "Active transport", body: "Movement AGAINST a concentration gradient. Uses energy (ATP)." },
        { title: "Plant cell in strong solution", body: "Water leaves, cell becomes flaccid then PLASMOLYSED. In water the cell becomes TURGID." },
        { title: "Red blood cell", body: "In water it swells and bursts (haemolysis). In strong solution it shrinks (crenation)." },
      ]},
      { heading: "Enzymes", type: "cards", items: [
        { title: "What they are", body: "Biological CATALYSTS made of PROTEIN. Speed up reactions and are not used up." },
        { title: "Properties", body: "Specific to one substrate. Work best at an optimum temperature and pH. Needed in small amounts." },
        { title: "Temperature", body: "Low temperature = enzyme inactive (not destroyed). High temperature (above about 60 C) = DENATURED (destroyed for good). RECURRING!" },
        { title: "pH", body: "Pepsin works best in acid (about pH 2). Trypsin and salivary amylase work best near neutral or slightly alkaline conditions." },
      ]},
      { heading: "Biomolecules and Food Tests", type: "cards", items: [
        { title: "Carbohydrates", body: "Made of C, H, O. Glucose (monosaccharide), sucrose (disaccharide), starch and cellulose (polysaccharides)." },
        { title: "Proteins", body: "Chains of amino acids. Contain C, H, O, N. Used for growth and repair, and as enzymes." },
        { title: "Lipids", body: "Fats and oils. Fatty acids + glycerol. Energy store and insulation." },
        { title: "Nucleic acids", body: "DNA and RNA. A nucleotide = a 5-carbon sugar + phosphate + nitrogenous base. RECURRING!" },
        { title: "Starch test", body: "Iodine solution turns BLUE-BLACK." },
        { title: "Reducing sugar test", body: "Benedict's solution + heat gives a BRICK-RED precipitate." },
        { title: "Protein tests", body: "Biuret gives PURPLE/VIOLET. Millon's gives a RED/PINK colour on heating." },
        { title: "Fat test", body: "Sudan III stains fat RED. Ethanol emulsion test gives a MILKY emulsion." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Mitochondria = respiration. Ribosomes = proteins. Chloroplast = photosynthesis. High temperature DENATURES enzymes; low temperature only slows them. Iodine = starch (blue-black). Benedict's = reducing sugar (brick-red). Biuret = protein (purple)." }
    ]
  },

  // ==========================================
  // BIOLOGY — GENETICS & REPRODUCTION
  // ==========================================
  "Genetics & Reproduction": {
    subject: "Biology",
    title: "Genetics & Reproduction",
    icon: "🧬",
    estimatedTime: "5 min read",
    sections: [
      { heading: "What This Topic Covers", type: "text",
        content: "Genetics explains how traits pass from parents to offspring. Reproduction covers how new individuals are made. JAMB loves the formula-based questions here: genetic crosses, blood groups, sickle cell and sex-linked traits, plus reproductive hormones." },
      { heading: "Key Genetics Terms", type: "cards", items: [
        { title: "Gene and allele", body: "A gene is a unit of inheritance. Alleles are different forms of the same gene (e.g. T and t)." },
        { title: "Genotype vs Phenotype", body: "GENOTYPE = the genes present (TT, Tt, tt). PHENOTYPE = what you can see (tall or short). RECURRING!" },
        { title: "Homozygous vs Heterozygous", body: "Homozygous = two identical alleles (TT or tt). Heterozygous = two different alleles (Tt)." },
        { title: "Dominant vs Recessive", body: "A dominant allele shows even when only one copy is present. A recessive allele shows only when two copies are present." },
      ]},
      { heading: "Mendel's Crosses", type: "cards", items: [
        { title: "Monohybrid cross Tt x Tt", body: "Offspring genotypes: 1 TT : 2 Tt : 1 tt. Phenotypes: 3 dominant : 1 recessive (3:1). RECURRING EVERY YEAR!" },
        { title: "Test cross", body: "Cross an unknown dominant individual with a homozygous RECESSIVE (tt). If any offspring show the recessive trait, the unknown is Tt. Ratio 1:1." },
        { title: "Dihybrid cross", body: "Two traits together. F2 phenotype ratio 9:3:3:1." },
        { title: "Incomplete dominance", body: "Neither allele fully dominant, so the heterozygote looks intermediate (red x white = pink)." },
      ]},
      { heading: "Blood Groups, Sickle Cell and Sex Linkage", type: "cards", items: [
        { title: "ABO blood groups", body: "Group A (IAIA or IAi), B (IBIB or IBi), AB (IAIB), O (ii). AB = universal RECIPIENT. O = universal DONOR. RECURRING!" },
        { title: "Sickle cell", body: "AA = normal. AS = carrier (sickle cell trait). SS = sickle cell disease. AS x AS gives 25% AA, 50% AS, 25% SS. RECURRING!" },
        { title: "Sex determination", body: "Females XX, males XY. The father's sperm decides the sex of the child." },
        { title: "Sex-linked traits", body: "Haemophilia and colour blindness are carried on the X chromosome. They are more common in MALES because males have only one X. RECURRING!" },
        { title: "Continuous vs discontinuous variation", body: "Continuous = a smooth range of values (height, weight, skin colour). Discontinuous = clear-cut groups (blood group, tongue rolling, sex)." },
      ]},
      { heading: "Reproduction and Hormones", type: "cards", items: [
        { title: "Asexual reproduction", body: "One parent, identical offspring (binary fission, budding, vegetative propagation)." },
        { title: "Sexual reproduction", body: "Two parents, gametes fuse, offspring show variation." },
        { title: "Testosterone", body: "Made in the testes. Male sex characteristics and sperm production." },
        { title: "Oestrogen and progesterone", body: "Made in the ovary. Oestrogen builds the womb lining. Progesterone maintains the womb lining during pregnancy. RECURRING!" },
        { title: "FSH and LH", body: "From the pituitary. FSH ripens the egg. LH triggers ovulation (about day 14)." },
        { title: "Prolactin", body: "Pituitary hormone that stimulates MILK production. RECURRING!" },
      ]},
      { heading: "Placenta vs Egg", type: "cards", items: [
        { title: "Placenta (mammals)", body: "Passes oxygen and nutrients to the foetus and removes CO2 and waste. The embryo develops inside the mother, so the egg has very little yolk." },
        { title: "Bird and reptile egg", body: "Developing embryo feeds on the large YOLK stored in the egg. The shell protects it and the amnion holds protective fluid." },
        { title: "Fertilisation and pregnancy", body: "Fertilisation happens in the oviduct. The embryo implants in the womb. Pregnancy lasts about 9 months (40 weeks)." },
      ]},
      { heading: "Trap Answers to Avoid", type: "warning", items: [
        "Genotype is the genes. Phenotype is the appearance. Do not swap them.",
        "Haemophilia and colour blindness are X-linked, so they affect males more often. Females need two faulty copies.",
        "AS is a CARRIER (usually healthy). SS is the disease.",
        "Progesterone maintains pregnancy. Prolactin makes milk. Do not mix them up.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Monohybrid F2 = 3:1 (genotype 1:2:1). AS x AS = 25% SS. AB = universal recipient, O = universal donor. Sex-linked = X chromosome, more in males. Prolactin = milk. Progesterone = maintains pregnancy." }
    ]
  },

  // ==========================================
  // BIOLOGY — ANIMAL PHYSIOLOGY
  // ==========================================
  "Animal Physiology": {
    subject: "Biology",
    title: "Animal Physiology",
    icon: "🫀",
    estimatedTime: "5 min read",
    sections: [
      { heading: "What This Topic Covers", type: "text",
        content: "Animal physiology is how the body systems work: feeding, excretion, circulation, breathing and coordination. JAMB spreads these across many topics, so learn the key facts in each system below." },
      { heading: "Nutrition and Teeth", type: "cards", items: [
        { title: "Dental formula", body: "Written as i c pm m for the upper and lower jaw. Human: 2/2, 1/1, 2/2, 3/3 = 32 teeth. RECURRING!" },
        { title: "Carnivores (dog, cat)", body: "Large canines for tearing and special carnassial teeth for shearing meat. Dog has 42 teeth." },
        { title: "Herbivores (cow, sheep)", body: "No upper incisors or canines (a horny pad instead). Wide flat molars for grinding grass." },
        { title: "Rodents (rat, rabbit)", body: "Chisel-shaped incisors that keep growing. NO canines. A gap (diastema) in front of the molars." },
        { title: "Protein tests", body: "Biuret = purple. Millon's = red/pink on heating." },
        { title: "Pancreas", body: "Exocrine (digestive enzymes) AND endocrine (insulin and glucagon). It does both jobs. RECURRING!" },
        { title: "Liver", body: "Makes BILE. The gall bladder only STORES bile. Also stores glycogen and carries out deamination. RECURRING!" },
      ]},
      { heading: "Excretion and Homeostasis", type: "cards", items: [
        { title: "Kidney and nephron", body: "The nephron is the functional unit of the kidney. Blood is filtered under pressure at the glomerulus and Bowman's capsule (ULTRAFILTRATION). RECURRING!" },
        { title: "Selective reabsorption", body: "Glucose, amino acids and most water are taken back into the blood in the tubule." },
        { title: "ADH", body: "Controls water reabsorption in the kidney. More ADH = more water kept = less, more concentrated urine." },
        { title: "Deamination", body: "Removal of the amino group from excess amino acids in the LIVER, forming UREA. RECURRING!" },
        { title: "Insulin and glucagon", body: "Insulin lowers blood sugar. Glucagon raises blood sugar. Both from the pancreas." },
      ]},
      { heading: "Circulation", type: "cards", items: [
        { title: "Red blood cells (erythrocytes)", body: "Biconcave, carry oxygen with haemoglobin. Mammalian red cells have NO NUCLEUS. Made in the bone marrow. RECURRING!" },
        { title: "White blood cells", body: "Fight infection by engulfing germs (phagocytes) and making antibodies (lymphocytes)." },
        { title: "Platelets", body: "Help blood clot." },
        { title: "Double circulation", body: "Mammals: right side of the heart sends blood to the lungs (PULMONARY circuit). Left side sends blood to the body (SYSTEMIC circuit). RECURRING!" },
        { title: "Arteries and veins", body: "Arteries carry blood away from the heart, thick walls, no valves. Veins carry blood to the heart, thin walls, valves. The pulmonary artery carries deoxygenated blood." },
      ]},
      { heading: "Respiration and Gas Exchange", type: "cards", items: [
        { title: "Aerobic respiration", body: "Glucose + oxygen gives CO2 + water + 38 ATP, in the mitochondria." },
        { title: "Yeast fermentation", body: "Glucose gives ETHANOL + CO2 + 2 ATP. The CO2 turns lime water CLOUDY/MILKY. RECURRING!" },
        { title: "Breathing in", body: "The DIAPHRAGM contracts and flattens, the ribs move up and out, chest volume rises, pressure falls and air rushes in." },
      ]},
      { heading: "Nervous System and Coordination", type: "cards", items: [
        { title: "Reflex arc", body: "Stimulus, receptor, sensory neurone, spinal cord (relay neurone), motor neurone, effector (muscle), response. Fast and automatic. RECURRING!" },
        { title: "Cerebrum", body: "Thinking, memory and voluntary actions." },
        { title: "Cerebellum", body: "BALANCE, posture and coordination of movement. RECURRING!" },
        { title: "Medulla oblongata", body: "Controls INVOLUNTARY actions: breathing rate and heartbeat." },
        { title: "Hormones vs nerves", body: "Nerves = fast, short-lived. Hormones = slower, longer-lasting, carried in the blood." },
      ]},
      { heading: "Trap Answers to Avoid", type: "warning", items: [
        "Bile is MADE in the liver and only STORED in the gall bladder.",
        "Rodents have NO canine teeth. Carnivores have large ones.",
        "Ultrafiltration happens at the glomerulus and Bowman's capsule, NOT in the loop of Henle.",
        "Cerebellum = balance. Medulla = breathing and heartbeat. Cerebrum = thinking.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Human dental formula = 2123/2123 (32 teeth). Biuret = protein (purple). Pancreas = exocrine + endocrine. Ultrafiltration = Bowman's capsule. Deamination = liver (makes urea). Red blood cells = no nucleus. Cerebellum = balance. Medulla = involuntary." }
    ]
  },

  // ==========================================
  // BIOLOGY — CLASSIFICATION & DIVERSITY
  // ==========================================
  "Classification & Diversity": {
    subject: "Biology",
    title: "Classification & Diversity",
    icon: "🗂️",
    estimatedTime: "4 min read",
    sections: [
      { heading: "What This Topic Covers", type: "text",
        content: "Classification groups living things by shared features. This topic covers the kingdoms, the taxonomic ranks, invertebrate phyla, arthropod classes, plant groups and some social insect facts that JAMB likes to test." },
      { heading: "Taxonomic Ranks and Naming", type: "cards", items: [
        { title: "Order of ranks", body: "Kingdom, Phylum, Class, Order, Family, Genus, Species. Kingdom is the largest group. SPECIES is the smallest. RECURRING!" },
        { title: "Binomial nomenclature", body: "Two-part Latin name: Genus (capital) + species (small letter), written in italics or underlined. Example: Homo sapiens." },
        { title: "Species", body: "A group of organisms that can interbreed and produce fertile offspring." },
      ]},
      { heading: "The Five Kingdoms", type: "cards", items: [
        { title: "Monera", body: "Bacteria and blue-green algae. Prokaryotes (no nuclear membrane)." },
        { title: "Protista", body: "Simple eukaryotes: Amoeba, Paramecium, Euglena, Plasmodium." },
        { title: "Fungi", body: "Mucor, Rhizopus, mushrooms, yeast. No chlorophyll. Feed on dead or living matter." },
        { title: "Plantae", body: "Multicellular plants that make food by photosynthesis." },
        { title: "Animalia", body: "Multicellular animals that feed on other organisms." },
      ]},
      { heading: "Plant Groups", type: "cards", items: [
        { title: "Thallophyta (algae)", body: "No true roots, stems or leaves. Spirogyra, Chlamydomonas." },
        { title: "Bryophyta", body: "Mosses and liverworts. Small, no true vascular tissue. Need water for reproduction." },
        { title: "Pteridophyta (ferns)", body: "Have vascular tissue. The conspicuous plant is the SPOROPHYTE, which carries spores under its fronds. RECURRING!" },
        { title: "Gymnosperms", body: "Seeds NOT enclosed in a fruit (pine, cycad). Seeds are in cones." },
        { title: "Angiosperms", body: "Flowering plants. Seeds enclosed in a fruit. Divided into monocots and dicots." },
      ]},
      { heading: "Invertebrate Phyla", type: "cards", items: [
        { title: "Cnidaria (coelenterates)", body: "Hydra, jellyfish, sea anemone. Radial symmetry, stinging cells. Two body layers (diploblastic)." },
        { title: "Platyhelminthes", body: "FLATworms: tapeworm, liver fluke, planaria. Flat body, no body cavity." },
        { title: "Nematoda", body: "ROUNDworms: Ascaris, hookworm, guinea worm. Round, unsegmented body." },
        { title: "Annelida", body: "Segmented worms: earthworm, leech." },
        { title: "Mollusca", body: "Soft body, often with a shell: snail, slug, oyster, squid. No parasitic members in the group. RECURRING!" },
        { title: "Echinodermata", body: "Spiny skin, radial symmetry: starfish, sea urchin." },
        { title: "Arthropoda", body: "Jointed legs and an exoskeleton of chitin. The largest phylum. RECURRING!" },
      ]},
      { heading: "Arthropod Classes and Social Insects", type: "cards", items: [
        { title: "Insecta", body: "Body in 3 parts (head, thorax, abdomen). 3 pairs of legs (6 legs). Usually 2 pairs of wings and 1 pair of antennae. RECURRING!" },
        { title: "Arachnida", body: "Spiders, scorpions, ticks, mites. 4 pairs of legs (8). 2 body parts. NO antennae." },
        { title: "Crustacea", body: "Crabs, prawns, lobsters. Many legs, 2 pairs of antennae." },
        { title: "Myriapoda", body: "Centipedes and millipedes. Many body segments." },
        { title: "Termite castes", body: "QUEEN and KING (reproduction), WORKERS (feed and build, wingless), SOLDIERS (large heads and jaws, defend the colony). RECURRING!" },
        { title: "Honey bee castes", body: "Queen (lays eggs), drones (male, mate with the queen), workers (sterile females that do the work)." },
      ]},
      { heading: "Trap Answers to Avoid", type: "warning", items: [
        "A spider is NOT an insect. It has 8 legs and no antennae (Arachnida).",
        "Blue-green algae are prokaryotes (Monera), not true plants.",
        "In ferns the dominant, visible plant is the sporophyte. In mosses the dominant plant is the gametophyte.",
        "Soldier termites defend the colony. Workers do the feeding and building.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Ranks: Kingdom, Phylum, Class, Order, Family, Genus, Species. Insects = 6 legs, spiders = 8 legs. Ferns = sporophyte dominant. Mollusca = no parasites. Termites: queen, king, workers, soldiers." }
    ]
  },

  // ==========================================
  // BIOLOGY — ECOLOGY & DISEASES
  // ==========================================
  "Ecology & Diseases": {
    subject: "Biology",
    title: "Ecology & Diseases",
    icon: "🌍",
    estimatedTime: "5 min read",
    sections: [
      { heading: "What This Topic Covers", type: "text",
        content: "This is the single biggest source of repeat questions. It covers how organisms relate to each other and to their environment, how ecologists measure things, Nigerian vegetation zones, soil, and the major diseases with their causes, vectors and control." },
      { heading: "Ecological Terms and Relationships", type: "cards", items: [
        { title: "Habitat vs Niche", body: "Habitat = where an organism lives. Niche = the role it plays in the ecosystem." },
        { title: "Population, community, ecosystem", body: "Population = one species in an area. Community = all populations. Ecosystem = community + its non-living environment." },
        { title: "Abiotic vs Biotic", body: "Abiotic = non-living (temperature, light, humidity, rainfall, pH, wind). Biotic = living (predators, competitors, parasites)." },
        { title: "Mutualism", body: "Both organisms benefit (Rhizobium and legumes, lichen)." },
        { title: "Commensalism", body: "One benefits, the other is not affected." },
        { title: "Parasitism", body: "One benefits, the other is harmed." },
        { title: "Predation and competition", body: "A predator kills and eats prey. Competition is for the same limited resource." },
      ]},
      { heading: "Nigerian Vegetation Zones (South to North)", type: "cards", items: [
        { title: "Mangrove swamp forest", body: "Coastal and tidal areas. Stilt (prop) roots and breathing roots. Salt-tolerant plants (halophytes). RECURRING!" },
        { title: "Rainforest", body: "High rainfall, tall trees in layers, dense canopy." },
        { title: "Guinea savanna", body: "Tall grasses with scattered trees. One long wet season and one dry season." },
        { title: "Sudan savanna", body: "Shorter grasses, fewer trees. Less rainfall." },
        { title: "Sahel savanna", body: "Very sparse grass and thorny shrubs. Driest zone before the desert." },
      ]},
      { heading: "Sampling Instruments", type: "cards", items: [
        { title: "Quadrat", body: "A square frame laid on the ground to count plants and estimate density and percentage cover. RECURRING!" },
        { title: "Transect", body: "A line across a habitat to study changes in distribution." },
        { title: "Secchi disc", body: "Lowered into water to measure TURBIDITY (how far light penetrates). RECURRING!" },
        { title: "Hygrometer", body: "Measures HUMIDITY of the air." },
        { title: "Others", body: "Thermometer = temperature. Anemometer = wind speed. Rain gauge = rainfall. Barometer = air pressure. Pitfall trap = ground insects. Sweep net = flying insects." },
        { title: "Why sample?", body: "The study area is too large to count every organism, so a small representative part is studied." },
      ]},
      { heading: "Soil and Population", type: "cards", items: [
        { title: "Soil types", body: "Sandy = large particles, drains fast, poor water retention. Clay = tiny particles, holds water, poor drainage. LOAM = mixture, best for farming." },
        { title: "Humus", body: "Decayed organic matter. Improves fertility and water retention. Humus content (%) = (loss in mass on burning / original mass) x 100. RECURRING!" },
        { title: "Population growth", body: "Increases with births and immigration. Decreases with deaths and emigration." },
        { title: "Limiting factors", body: "Food, space, disease, predators and competition stop a population growing without limit." },
      ]},
      { heading: "Diseases, Causes and Vectors", type: "cards", items: [
        { title: "Schistosomiasis (Bilharzia)", body: "Blood fluke (Schistosoma). Man is the primary host, the freshwater SNAIL is the intermediate host. Blood in urine. Larvae enter through the skin in water. RECURRING!" },
        { title: "Cholera", body: "Bacterium Vibrio cholerae. Spread by contaminated food and water. Severe diarrhoea. RECURRING!" },
        { title: "Onchocerciasis (River blindness)", body: "Worm Onchocerca volvulus. Spread by the Simulium BLACKFLY, which breeds in fast-flowing rivers. RECURRING!" },
        { title: "Malaria", body: "Plasmodium (protozoan). Female ANOPHELES mosquito." },
        { title: "Sleeping sickness", body: "Trypanosoma. TSETSE fly." },
        { title: "Guinea worm", body: "Dracunculus. Spread by drinking water with infected water fleas (Cyclops)." },
        { title: "Typhoid and tetanus", body: "BACTERIAL. Typhoid spreads by contaminated food and water. Tetanus enters through wounds." },
      ]},
      { heading: "Viral vs Bacterial Diseases", type: "cards", items: [
        { title: "Viral", body: "Measles, polio, HIV/AIDS, rabies, yellow fever, chicken pox. Antibiotics do NOT work on viruses. RECURRING!" },
        { title: "Bacterial", body: "Cholera, typhoid, tetanus, tuberculosis, gonorrhoea. Treated with antibiotics." },
        { title: "Fungal", body: "Ringworm, athlete's foot." },
        { title: "Prevention", body: "Vaccination, clean water, good sanitation, killing vectors and avoiding contaminated water." },
      ]},
      { heading: "Trap Answers to Avoid", type: "warning", items: [
        "Antibiotics kill bacteria. They do NOT cure viral diseases like measles.",
        "In bilharzia, MAN is the primary host and the SNAIL is the intermediate host.",
        "A Secchi disc measures turbidity in WATER. A hygrometer measures humidity in AIR.",
        "Only the FEMALE Anopheles mosquito spreads malaria.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Quadrat = plant counting. Secchi disc = water turbidity. Hygrometer = humidity. Bilharzia = snail + blood in urine. Cholera = contaminated water. River blindness = blackfly. Malaria = female Anopheles. Measles = viral (no antibiotics)." }
    ]
  },

  // ==========================================
  // BIOLOGY — DEVELOPMENT & EVOLUTION
  // ==========================================
  "Development & Evolution": {
    subject: "Biology",
    title: "Development & Evolution",
    icon: "🦕",
    estimatedTime: "4 min read",
    sections: [
      { heading: "What This Topic Covers", type: "text",
        content: "Evolution is the gradual change of living things over time. This topic covers the theories of Lamarck and Darwin, the evidence for evolution, and how organisms grow and develop. Evolution questions repeat heavily." },
      { heading: "Lamarck vs Darwin", type: "cards", items: [
        { title: "Lamarck", body: "Proposed USE AND DISUSE (organs used a lot develop, unused ones waste away) and INHERITANCE OF ACQUIRED CHARACTERS. Classic example: the giraffe stretching its neck. This idea has been DISPROVED. RECURRING!" },
        { title: "Darwin", body: "Proposed NATURAL SELECTION: overproduction, variation, struggle for existence, survival of the fittest, and passing on of useful traits." },
        { title: "Key difference", body: "Lamarck: traits gained in life are inherited. Darwin: only inherited variations are passed on, and the environment selects the best adapted." },
        { title: "Neo-Darwinism", body: "Adds MUTATION and genetics. Mutation was not part of Darwin's original theory." },
      ]},
      { heading: "Evidence for Evolution", type: "cards", items: [
        { title: "Fossils", body: "Remains of dead organisms in sedimentary rock. Show how life changed through time." },
        { title: "Comparative anatomy", body: "HOMOLOGOUS structures have the same basic plan but different functions. Example: the PENTADACTYL limb in a human arm, bat wing, whale flipper and horse leg. Points to a common ancestor. RECURRING!" },
        { title: "Analogous structures", body: "Different structure, same function. Example: wing of a bird and wing of an insect." },
        { title: "Vestigial organs", body: "Reduced organs with little or no use (human appendix)." },
        { title: "Embryology and molecular biology", body: "Similar embryos and similar DNA or proteins show relationship." },
        { title: "Not evidence", body: "BEHAVIOUR is not considered direct evidence." },
      ]},
      { heading: "Evolution in Action", type: "cards", items: [
        { title: "Evolutionary trend", body: "From simple to complex. Animals: fish, amphibians, reptiles, birds and mammals. Plants: algae, mosses, ferns, gymnosperms, angiosperms. RECURRING!" },
        { title: "Industrial melanism", body: "Peppered moths: dark forms survived better on soot-covered trees, so dark moths became more common. Example of natural selection." },
        { title: "Antibiotic resistance", body: "Resistant bacteria survive treatment and multiply, so resistance spreads." },
        { title: "Causes of mutation", body: "X-rays, ultraviolet light, cosmic rays and chemical mutagens." },
        { title: "Speciation", body: "Isolated populations change until they can no longer interbreed, forming new species." },
      ]},
      { heading: "Growth and Development", type: "cards", items: [
        { title: "Growth", body: "A permanent, irreversible increase in size, dry mass or cell number." },
        { title: "Complete metamorphosis", body: "Egg, larva, pupa, adult (butterfly, housefly, mosquito)." },
        { title: "Incomplete metamorphosis", body: "Egg, nymph, adult (grasshopper, cockroach)." },
      ]},
      { heading: "Trap Answers to Avoid", type: "warning", items: [
        "Use and disuse belongs to LAMARCK, not Darwin.",
        "Acquired characters (like a stretched neck or a cut tail) are NOT inherited.",
        "Homologous = same origin, different function. Analogous = different origin, same function.",
        "Natural selection works on variation that already exists. It does not create it.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Lamarck = use and disuse. Darwin = natural selection. Pentadactyl limb = homologous structures = common ancestor. Behaviour is not evidence. Trend = simple to complex. Mutation causes: X-rays, UV, cosmic rays, chemicals." }
    ]
  },

  // ==========================================
  // BIOLOGY — ANIMAL DIVERSITY & ADAPTATIONS
  // ==========================================
  "Animal Diversity & Adaptations": {
    subject: "Biology",
    title: "Animal Diversity & Adaptations",
    icon: "🦎",
    estimatedTime: "4 min read",
    sections: [
      { heading: "What This Topic Covers", type: "text",
        content: "An adaptation is a feature that helps an organism survive in its environment. This topic links the different animal groups to how their body structure suits their habitat and way of life." },
      { heading: "Vertebrate Classes", type: "cards", items: [
        { title: "Pisces (fish)", body: "Gills, fins, scales, cold-blooded, 2-chambered heart." },
        { title: "Amphibia", body: "Moist skin, lay eggs in water, young breathe with gills, adults with lungs and skin. 3-chambered heart." },
        { title: "Reptilia", body: "Dry scaly skin, eggs with leathery shells laid on land, cold-blooded." },
        { title: "Aves (birds)", body: "Feathers, beak, hollow bones, warm-blooded, 4-chambered heart." },
        { title: "Mammalia", body: "Hair, mammary glands, warm-blooded, 4-chambered heart, most give birth to live young." },
        { title: "Cold-blooded vs warm-blooded", body: "Cold-blooded (ectotherms) body temperature follows the surroundings. Warm-blooded (endotherms) keep a constant body temperature." },
      ]},
      { heading: "Adaptations to Habitat", type: "cards", items: [
        { title: "Fish (aquatic)", body: "Streamlined body, gills for gas exchange, fins and tail for swimming, SWIM BLADDER for buoyancy, lateral line to sense water movement." },
        { title: "Birds (flight)", body: "Feathers, hollow light bones, wings as modified forelimbs, strong breast muscles, streamlined body, no teeth." },
        { title: "Desert animals", body: "Camel stores FAT in the hump, thick eyelashes and nostrils that close. Kangaroo rat makes very concentrated urine. Most are active at night." },
        { title: "Burrowing animals", body: "Strong forelimbs, small eyes and a streamlined body (mole, termite queen)." },
        { title: "Aquatic mammals", body: "Whales and dolphins breathe air through lungs, have a thick blubber layer and flippers. They are MAMMALS, not fish." },
        { title: "Frogs", body: "Webbed feet for swimming, long hind legs for jumping, moist skin for gas exchange." },
      ]},
      { heading: "Survival Strategies", type: "cards", items: [
        { title: "Camouflage", body: "Body blends with the background (chameleon, stick insect)." },
        { title: "Mimicry", body: "A harmless species looks like a harmful one to avoid being eaten." },
        { title: "Hibernation", body: "A deep sleep through a cold season to save energy." },
        { title: "Aestivation", body: "A deep sleep through a hot dry season (lungfish, snail)." },
        { title: "Migration", body: "Seasonal movement to find food or better conditions." },
      ]},
      { heading: "Parasite Adaptations", type: "cards", items: [
        { title: "Tapeworm", body: "Hooks and suckers to hold on, no gut (absorbs digested food), flat body, many eggs." },
        { title: "General parasite features", body: "Protective coat against host enzymes, huge egg production and often a second (intermediate) host." },
      ]},
      { heading: "Arthropod Features", type: "cards", items: [
        { title: "Insects", body: "6 legs, 3 body parts, tracheae and spiracles for breathing, often wings." },
        { title: "Exoskeleton", body: "Hard chitin covering. Protects and prevents water loss. Must be shed (moulting) for the animal to grow." },
      ]},
      { heading: "Trap Answers to Avoid", type: "warning", items: [
        "Whales and dolphins are MAMMALS. They have lungs, not gills.",
        "A camel's hump stores FAT, not water.",
        "Hibernation = cold season. Aestivation = hot, dry season.",
        "Cold-blooded does not mean the blood is cold. It means body temperature follows the surroundings.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Fish = gills + swim bladder. Birds = hollow bones + feathers. Camel hump = fat. Whale = mammal. Hibernation = winter, aestivation = dry season. Tapeworm = hooks, suckers, no gut. Warm-blooded = birds and mammals only." }
    ]
  },

  // ==========================================
  // BIOLOGY — RESPIRATORY SYSTEM
  // ==========================================
  "Respiratory System": {
    subject: "Biology",
    title: "Respiratory System",
    icon: "🫁",
    estimatedTime: "4 min read",
    sections: [
      { heading: "What This Topic Covers", type: "text",
        content: "Breathing (ventilation) moves air into and out of the lungs. Gas exchange happens in the alveoli. This topic covers the structure of the system, how breathing works, respiratory surfaces in different animals, and the classic experiments." },
      { heading: "Path of Air in Humans", type: "steps", items: [
        "Nostrils and nasal cavity: air is filtered by hairs and mucus, warmed and moistened.",
        "Pharynx and larynx (voice box).",
        "Trachea (windpipe): kept open by C-shaped rings of cartilage.",
        "Bronchi: two tubes, one to each lung.",
        "Bronchioles: many fine branches.",
        "Alveoli: tiny air sacs where gas exchange happens."
      ]},
      { heading: "The Alveolus: Built for Gas Exchange", type: "cards", items: [
        { title: "Large surface area", body: "Millions of alveoli in each lung." },
        { title: "Thin walls", body: "Only ONE cell thick, so gases diffuse a very short distance." },
        { title: "Moist lining", body: "Oxygen dissolves in the moisture before it diffuses." },
        { title: "Rich blood supply", body: "Dense capillary network carries oxygen away and brings CO2." },
        { title: "Diffusion", body: "Oxygen moves from the alveoli into the blood. CO2 moves from the blood into the alveoli. Both by DIFFUSION. RECURRING!" },
      ]},
      { heading: "Mechanism of Breathing", type: "cards", items: [
        { title: "Breathing IN (inspiration)", body: "DIAPHRAGM contracts and flattens. External intercostal muscles contract and pull the ribs UP and OUT. Chest volume increases, pressure falls, air rushes in. RECURRING!" },
        { title: "Breathing OUT (expiration)", body: "Diaphragm relaxes and curves upward. Ribs move down and in. Chest volume decreases, pressure rises, air is pushed out." },
        { title: "Diaphragm", body: "A sheet of muscle that separates the thorax from the abdomen. Found only in MAMMALS." },
      ]},
      { heading: "Air Composition", type: "cards", items: [
        { title: "Inhaled air", body: "About 21% oxygen, 0.04% carbon dioxide, 78% nitrogen." },
        { title: "Exhaled air", body: "About 16% oxygen, 4% carbon dioxide, 78% nitrogen, plus more water vapour. Nitrogen stays almost unchanged." },
      ]},
      { heading: "Respiratory Surfaces in Animals", type: "cards", items: [
        { title: "Amoeba", body: "Gas exchange over the whole body surface by diffusion." },
        { title: "Earthworm", body: "Moist skin. The mucus keeps the skin wet." },
        { title: "Insects", body: "TRACHEAE (air tubes) open through SPIRACLES on the body surface. Air goes straight to the tissues." },
        { title: "Fish", body: "GILLS. Water flows over gill filaments rich in blood capillaries." },
        { title: "Frog", body: "Moist skin, lining of the mouth (buccal cavity) and lungs." },
        { title: "Mammals and birds", body: "Lungs." },
      ]},
      { heading: "Classic Experiments", type: "cards", items: [
        { title: "Lime water test for CO2", body: "CO2 turns lime water CLOUDY/MILKY. Exhaled air turns it milky faster than inhaled air. RECURRING!" },
        { title: "Yeast fermentation", body: "Yeast in glucose without oxygen produces CO2 and ETHANOL. The gas bubbles through lime water and turns it cloudy. RECURRING!" },
        { title: "Germinating seeds", body: "Respiring seeds release CO2 and heat. They use up oxygen." },
        { title: "Anaerobic vs aerobic", body: "Aerobic respiration needs oxygen. Anaerobic does not and gives much less energy." },
      ]},
      { heading: "Smoking and Lung Health", type: "cards", items: [
        { title: "Carbon monoxide", body: "Binds to haemoglobin better than oxygen, so the blood carries less oxygen." },
        { title: "Tar and nicotine", body: "Tar can cause lung cancer and bronchitis. Nicotine is addictive." },
        { title: "Tuberculosis and asthma", body: "TB is a bacterial lung disease. Asthma narrows the airways." },
      ]},
      { heading: "Trap Answers to Avoid", type: "warning", items: [
        "When you breathe IN the diaphragm CONTRACTS and FLATTENS. It does not relax.",
        "Gas exchange in the lungs is by diffusion, not osmosis.",
        "Breathing is NOT the same as respiration. Breathing moves air. Respiration releases energy in cells.",
        "Fish gills work in water. Insects breathe through spiracles and tracheae, not lungs.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Breathing in = diaphragm contracts, ribs up and out, volume up, pressure down. Alveoli = one cell thick, moist, many capillaries. Insects = tracheae and spiracles. Fish = gills. Lime water turns milky with CO2. Yeast without oxygen = ethanol + CO2." }
    ]
  },

}

export default BIOLOGY_EXTRA_GUIDES
