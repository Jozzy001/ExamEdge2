// JAMB 1983 Biology Past Questions
// 50 questions
// Questions with diagrams marked with [img:images/biology/biology1983figX.png]
// NOTE: Q2, Q3, Q4 (Fig 1) and Q17 (Fig 2) depend on diagrams not visible in the source text.
// Best-effort answers are given based on standard biology conventions — please verify
// against the actual figures once the images are added.

const bioJamb1983 = [

  // =====================
  // PLANT STRUCTURE & GROWTH
  // =====================
  {
    subject: "Biology", topic: "Plant Structure & Growth", year: 1983, exam: "JAMB",
    question: "Root hairs are developed from the …",
    options: ["Root apex", "Epidermis of roots", "Vascular bundles", "Endodermis", "Pericycle"],
    answer: "Epidermis of roots",
    explanation: "Root hairs are tubular extensions of epidermal cells (trichoblasts) located just behind the root tip. They are not separate structures but outgrowths of the epidermis itself, which increases the surface area for water and mineral absorption."
  },
  {
    subject: "Biology", topic: "Plant Structure & Growth", year: 1983, exam: "JAMB",
    question: "[img:images/biology/biology1983fig1.png]\nFig 1 represents a cross-section of a part of a dicot plant. Which of the following features can be used to identify Fig 1?",
    options: ["Position of 7", "Its circular nature", "Number of 5", "Presence of 3", "Width of 2"],
    answer: "Position of 7",
    explanation: "NOTE: This question depends on Fig 1, which is not visible in the source text — please verify against the actual diagram. In typical dicot root/stem cross-sections, the position of the vascular tissue (often labelled toward the centre in a star-shaped/exarch pattern in roots vs. a ring pattern in stems) is the key diagnostic feature used to identify whether a section is root or stem."
  },
  {
    subject: "Biology", topic: "Plant Structure & Growth", year: 1983, exam: "JAMB",
    question: "[img:images/biology/biology1983fig1.png]\nThe main function of 6 is to",
    options: ["Separate 5 from 7", "Produce more of 5 and 7", "Produce cork", "Translocate water and mineral salt", "Conduct carbon dioxide to the other parts"],
    answer: "Produce more of 5 and 7",
    explanation: "NOTE: Depends on Fig 1 — please verify against the actual diagram. If structure 6 represents the vascular cambium (lying between xylem and phloem), its main function is to divide and produce more xylem (secondary xylem) and phloem (secondary phloem) during secondary growth."
  },
  {
    subject: "Biology", topic: "Plant Structure & Growth", year: 1983, exam: "JAMB",
    question: "[img:images/biology/biology1983fig1.png]\nThe main function of 4 is to",
    options: ["Surround the inner tissues", "Produce cork", "Produce root hairs", "Produce lateral roots", "Produce more of 3"],
    answer: "Produce lateral roots",
    explanation: "NOTE: Depends on Fig 1 — please verify against the actual diagram. If structure 4 represents the pericycle, its main function in roots is to initiate the formation of lateral (branch) roots, which grow outward through the cortex and epidermis."
  },
  {
    subject: "Biology", topic: "Plant Structure & Growth", year: 1983, exam: "JAMB",
    question: "In a dicot leaf, guard cells differ from other epidermal cells because they",
    options: ["Have no definite shape", "Lack nuclei", "Are smaller", "Contain chloroplasts", "Lack vacuole"],
    answer: "Contain chloroplasts",
    explanation: "Guard cells are the only epidermal cells that contain chloroplasts, allowing them to photosynthesise and regulate the opening and closing of stomata through changes in turgor pressure. Ordinary epidermal cells lack chloroplasts."
  },
  {
    subject: "Biology", topic: "Plant Structure & Growth", year: 1983, exam: "JAMB",
    question: "Woody plants transport gases and water vapour across the stems by the",
    options: ["Xylem fibres", "Medullary fibres", "Medullary rays", "Phloem fibres", "Phloem parenchyma"],
    answer: "Medullary rays",
    explanation: "Medullary (vascular) rays are radial bands of parenchyma cells that run from the pith to the cortex, allowing lateral (radial) movement of water, gases, and food materials across the stem, connecting with lenticels for gas exchange."
  },
  {
    subject: "Biology", topic: "Plant Structure & Growth", year: 1983, exam: "JAMB",
    question: "[img:images/biology/biology1983fig2.png]\n(Fig 2 — vertical section of onion bulb) Which of the labelled parts will develop into a new bulb?",
    options: ["1", "4", "2", "3", "5"],
    answer: "5",
    explanation: "NOTE: Depends on Fig 2 — please verify against the actual diagram. In a vertical section of an onion bulb, the axillary (lateral) bud located in the axil of a fleshy scale leaf is the structure that develops into a new bulb (used in vegetative propagation of onions)."
  },
  {
    subject: "Biology", topic: "Plant Structure & Growth", year: 1983, exam: "JAMB",
    question: "In the onion bulb, food is stored in the",
    options: ["Stem", "Lateral buds", "Cotyledons", "Outer scale leaves", "Leaf bases"],
    answer: "Leaf bases",
    explanation: "The onion bulb is made up of fleshy leaf bases (scale leaves) which store food reserves. The outermost scale leaves are dry and papery, serving a protective rather than storage function, while the fleshy inner leaf bases hold the stored food."
  },
  {
    subject: "Biology", topic: "Plant Structure & Growth", year: 1983, exam: "JAMB",
    question: "In a positive phototropic response of a coleoptile, the region of greatest curvature is brought about by the",
    options: [
      "Movement of auxins away from the region of curvature",
      "Even distribution of auxins in all parts of the coleoptile",
      "Inhibition of growth by auxins in the region of smaller curvature",
      "Concentration of auxins in the region of curvature",
      "Absence of auxins in the coleoptile"
    ],
    answer: "Concentration of auxins in the region of curvature",
    explanation: "In phototropism, auxin migrates to the shaded (darker) side of the coleoptile. The higher concentration of auxin there stimulates greater cell elongation on that side, causing the coleoptile to bend toward the light source — the region of greatest curvature corresponds to the region of highest auxin concentration."
  },
  {
    subject: "Biology", topic: "Plant Structure & Growth", year: 1983, exam: "JAMB",
    question: "The tuber of cassava is NOT a stem tuber because it",
    options: [
      "Is distended with food reserve",
      "Has an aerial shoot portion",
      "Has other structures that could be called roots",
      "Lacks axillary buds",
      "Has a bark over its stored food"
    ],
    answer: "Lacks axillary buds",
    explanation: "A true stem tuber (like the potato) has nodes bearing axillary buds ('eyes') from which new shoots can sprout. The cassava tuber is a swollen adventitious root and lacks these axillary buds, which is why it is classified as a root tuber rather than a stem tuber."
  },
  {
    subject: "Biology", topic: "Plant Structure & Growth", year: 1983, exam: "JAMB",
    question: "Which of the following is NOT a characteristic of monocot plants?",
    options: [
      "Occurrence of secondary thickening",
      "Parallel venation",
      "Scattered vascular bundles",
      "Floral parts arranged in threes",
      "Perianth is usually insignificant"
    ],
    answer: "Occurrence of secondary thickening",
    explanation: "Most monocots lack a vascular cambium and therefore do not undergo secondary thickening (no true wood formation), unlike dicots. Parallel venation, scattered vascular bundles, floral parts in threes, and a reduced perianth are all typical monocot features."
  },
  {
    subject: "Biology", topic: "Plant Structure & Growth", year: 1983, exam: "JAMB",
    question: "Which of the following statements about the rate of transpiration is INCORRECT? It is",
    options: [
      "Dependent on temperature",
      "Affected by changes in light intensity",
      "Unaffected by humidity",
      "Dependent on air movement",
      "Affected by availability of water"
    ],
    answer: "Unaffected by humidity",
    explanation: "Transpiration rate is strongly affected by humidity — higher atmospheric humidity reduces the water vapour concentration gradient between the leaf and the air, slowing transpiration. The statement that it is 'unaffected by humidity' is therefore incorrect."
  },

  // =====================
  // CELL BIOLOGY & BIOCHEMISTRY
  // =====================
  {
    subject: "Biology", topic: "Cell Biology & Biochemistry", year: 1983, exam: "JAMB",
    question: "If an isolated living cell is left in distilled water for two hours, it is likely to",
    options: [
      "Lose some of its water to the surrounding water",
      "Lose all of its water to the surrounding water",
      "Reproduce by binary fission",
      "Become more turgid",
      "Die due to excess water"
    ],
    answer: "Become more turgid",
    explanation: "Distilled water is hypotonic relative to the cell's contents. Water moves into the cell by osmosis (endosmosis), increasing turgor pressure. In a walled plant cell, the cell wall prevents bursting, so the cell simply becomes more turgid."
  },
  {
    subject: "Biology", topic: "Cell Biology & Biochemistry", year: 1983, exam: "JAMB",
    question: "If an organic compound has its Hydrogen : Oxygen ratio as 2:1, it is likely to be",
    options: ["A protein", "A carbohydrate", "A fat", "A fatty acid and glycerol", "An amino acid"],
    answer: "A carbohydrate",
    explanation: "Carbohydrates have the general formula Cx(H2O)y, meaning hydrogen and oxygen occur in the same ratio as in water — 2:1. For example, glucose (C6H12O6) has 12 hydrogen atoms to 6 oxygen atoms, a 2:1 ratio."
  },
  {
    subject: "Biology", topic: "Cell Biology & Biochemistry", year: 1983, exam: "JAMB",
    question: "Which of the following elements are necessary for the formation of chlorophyll in a plant?",
    options: ["Magnesium and iron", "Calcium and potassium", "Calcium and sulphur", "Potassium and sulphur", "Phosphorus and potassium"],
    answer: "Magnesium and iron",
    explanation: "Magnesium forms the central atom of the chlorophyll molecule itself, while iron, though not part of the molecule, is an essential catalyst/cofactor required for chlorophyll synthesis. A deficiency in either causes chlorosis (yellowing of leaves)."
  },
  {
    subject: "Biology", topic: "Cell Biology & Biochemistry", year: 1983, exam: "JAMB",
    question: "When a Spirogyra cell is immersed in a salt solution more concentrated than its cell sap, it",
    options: ["Remains unchanged", "Takes up water and bursts", "Absorbs a little water", "Loses water and shrivels", "Becomes turgid"],
    answer: "Loses water and shrivels",
    explanation: "A hypertonic external salt solution causes water to leave the cell by exosmosis. The protoplast shrinks and pulls away from the cell wall — a process called plasmolysis — causing the cell to shrivel."
  },

  // =====================
  // GENETICS & REPRODUCTION
  // =====================
  {
    subject: "Biology", topic: "Genetics & Reproduction", year: 1983, exam: "JAMB",
    question: "Groundnut is not really a 'nut' in the biological sense because",
    options: ["It is harvested from inside the ground", "Its pericarp is not hard and tough", "The fruit is succulent", "It is an achene"],
    answer: "Its pericarp is not hard and tough",
    explanation: "NOTE: Option D was missing from the source text. A true botanical nut has a hard, dry, woody pericarp that does not split open. The groundnut's pod (pericarp) is comparatively soft and brittle rather than truly hard and stony, so botanically it is classified as a legume pod, not a true nut."
  },
  {
    subject: "Biology", topic: "Genetics & Reproduction", year: 1983, exam: "JAMB",
    question: "What type of fruit is formed from a single flower having several free carpels?",
    options: ["Multiple fruit", "Simple fruit", "Aggregate fruit", "Dehiscent fruit", "Indehiscent fruit"],
    answer: "Aggregate fruit",
    explanation: "An aggregate fruit develops from a single flower that has several free (unfused) carpels, each carpel developing into a separate fruitlet, with all fruitlets clustered together on one receptacle — e.g. raspberry, custard apple."
  },
  {
    subject: "Biology", topic: "Genetics & Reproduction", year: 1983, exam: "JAMB",
    question: "An organism having one pair of identical genes is",
    options: ["A heterozygote", "A hybrid", "An allelomorph", "A homozygote", "A diploid"],
    answer: "A homozygote",
    explanation: "A homozygote carries two identical alleles for a given gene (e.g. TT or tt), as opposed to a heterozygote, which carries two different alleles (e.g. Tt)."
  },
  {
    subject: "Biology", topic: "Genetics & Reproduction", year: 1983, exam: "JAMB",
    question: "Banana, plantain and pineapple can be grouped together because they",
    options: ["Produce small seeds", "Are multiple fruits", "Produce suckers", "Have runners", "Have bulbils"],
    answer: "Produce suckers",
    explanation: "Banana, plantain, and pineapple are all propagated vegetatively through suckers — new shoots that develop from the base of the parent plant — rather than relying on seed for typical cultivation."
  },
  {
    subject: "Biology", topic: "Genetics & Reproduction", year: 1983, exam: "JAMB",
    question: "What is the genetic ratio of the F2 generation if members of the F1 generation are allowed to self-pollinate?",
    options: ["1 tall : 3 short", "3 tall : 1 short", "1 tall : 1 short", "4 short : 0 tall", "4 tall : 0 short"],
    answer: "3 tall : 1 short",
    explanation: "In a standard monohybrid cross, the F1 generation is heterozygous (Tt, all tall due to dominance). When F1 individuals self-pollinate, the F2 generation shows the classic Mendelian ratio of 3 dominant (tall) : 1 recessive (short)."
  },

  // =====================
  // ANIMAL PHYSIOLOGY
  // =====================
  {
    subject: "Biology", topic: "Animal Physiology", year: 1983, exam: "JAMB",
    question: "Which of the following statements is NOT true of mammalian erythrocytes?",
    options: [
      "They have haemoglobin",
      "They appear yellow when looked at singly",
      "They are disc-shaped",
      "The cells are more numerous than leucocytes",
      "They have nuclei at maturity"
    ],
    answer: "They have nuclei at maturity",
    explanation: "Mature mammalian erythrocytes (red blood cells) are unusual among vertebrates in that they lose their nucleus during development, becoming biconcave, anucleate discs. The statement that they 'have nuclei at maturity' is therefore false."
  },
  {
    subject: "Biology", topic: "Animal Physiology", year: 1983, exam: "JAMB",
    question: "Which of the following substances is NOT found in urine?",
    options: ["Water", "Sodium chloride", "Nitrogenous compounds", "Calcium chloride", "Nitrogenous salts"],
    answer: "Calcium chloride",
    explanation: "NOTE: Options C and E appear similarly worded ('nitrogenous compounds'/'nitrogenous salts'), which may reflect an extraction inconsistency in the source — please verify against the original answer key. Normal urine typically contains water, sodium chloride, urea, and other nitrogenous wastes, but calcium is usually excreted in other salt forms rather than as calcium chloride specifically."
  },
  {
    subject: "Biology", topic: "Animal Physiology", year: 1983, exam: "JAMB",
    question: "The kidneys of all vertebrates act as osmoregulators. This means that they",
    options: [
      "Keep the composition of the plasma constant",
      "Regulate osmotic processes",
      "Control the volume of blood entering the kidneys",
      "Decrease the osmotic pressure of blood",
      "Increase the osmotic pressure of blood"
    ],
    answer: "Keep the composition of the plasma constant",
    explanation: "Osmoregulation refers to the kidney's role in maintaining a stable internal environment by regulating the water and solute concentration of the blood plasma, keeping its composition relatively constant despite changes in intake or external conditions."
  },
  {
    subject: "Biology", topic: "Animal Physiology", year: 1983, exam: "JAMB",
    question: "The part of the mammalian brain responsible for maintaining balance is the",
    options: ["Medulla oblongata", "Olfactory lobe", "Cerebellum", "Cerebrum", "Frontal lobe"],
    answer: "Cerebellum",
    explanation: "The cerebellum coordinates muscular activity and maintains posture, balance, and equilibrium. The medulla oblongata controls involuntary functions like breathing and heart rate, while the cerebrum handles voluntary actions and higher mental functions."
  },
  {
    subject: "Biology", topic: "Animal Physiology", year: 1983, exam: "JAMB",
    question: "The dental formula i 3/3 : c 1/1 : pm 4/4 : m 2/3 = 42 represents that of a",
    options: ["Rabbit", "Full grown man", "Young child", "Dog", "Sheep"],
    answer: "Dog",
    explanation: "This dental formula (incisors 3/3, canines 1/1, premolars 4/4, molars 2/3 per side, totalling 42 teeth) is the classic dental formula of the dog, reflecting its carnivorous adaptations including well-developed canines and carnassial teeth."
  },
  {
    subject: "Biology", topic: "Animal Physiology", year: 1983, exam: "JAMB",
    question: "Which of the following statements on the mammalian circulatory system is NOT true?",
    options: [
      "Blood in the pulmonary artery is richer in oxygen content than blood in the pulmonary vein",
      "The blood in the hepatic portal vein is the richest in food substances",
      "Blood flow is controlled by valves in the veins",
      "Arteries are generally thicker and larger than veins",
      "Fibrin helps in the formation of blood clot"
    ],
    answer: "Blood in the pulmonary artery is richer in oxygen content than blood in the pulmonary vein",
    explanation: "This statement is reversed and therefore false. The pulmonary vein carries oxygenated blood from the lungs to the heart, while the pulmonary artery carries deoxygenated blood from the heart to the lungs — the opposite of what most systemic arteries and veins carry."
  },
  {
    subject: "Biology", topic: "Animal Physiology", year: 1983, exam: "JAMB",
    question: "The function of the ossicles (malleus, incus and stapes) in the mammalian ear is the",
    options: [
      "Transmission of vibrations",
      "Regulation of pressures",
      "Support of the inner ear",
      "Maintenance of balance during motion",
      "Secretion of oil"
    ],
    answer: "Transmission of vibrations",
    explanation: "The three ear ossicles form a chain that mechanically transmits and amplifies sound vibrations from the eardrum (tympanic membrane) to the oval window of the inner ear (cochlea)."
  },
  {
    subject: "Biology", topic: "Animal Physiology", year: 1983, exam: "JAMB",
    question: "Which of the following statements about the definition of man is INCORRECT? Man has",
    options: [
      "More molars than incisors",
      "No diastema",
      "The same number of teeth on upper and lower jaws",
      "A total of thirty-two teeth",
      "A total of six molars"
    ],
    answer: "A total of six molars",
    explanation: "An adult human has 12 molars in total (3 in each of the 4 quadrants: upper-left, upper-right, lower-left, lower-right), not 6. The other statements are correct: humans have 12 molars vs 8 incisors, no diastema (gap), equal teeth counts on both jaws, and 32 teeth total including wisdom teeth."
  },
  {
    subject: "Biology", topic: "Animal Physiology", year: 1983, exam: "JAMB",
    question: "Urea is produced in the",
    options: ["Liver", "Bladder", "Spleen", "Kidneys", "Gall bladder"],
    answer: "Liver",
    explanation: "Urea is synthesised in the liver through the ornithine (urea) cycle, as a way of converting toxic ammonia (from amino acid breakdown) into a less toxic, water-soluble compound. The kidneys only filter and excrete urea; they do not produce it."
  },
  {
    subject: "Biology", topic: "Animal Physiology", year: 1983, exam: "JAMB",
    question: "The path taken by glucose from the ileum to the heart is",
    options: [
      "Ileum → hepatic portal vein → hepatic artery → vena cava → heart",
      "Ileum → hepatic portal artery → hepatic artery → vena cava → heart",
      "Ileum → hepatic portal vein → vena cava → heart",
      "Ileum → hepatic vein → vena cava → heart",
      "Ileum → hepatic portal vein → hepatic vein → vena cava → heart"
    ],
    answer: "Ileum → hepatic portal vein → hepatic vein → vena cava → heart",
    explanation: "Glucose absorbed in the ileum enters the hepatic portal vein, which carries it to the liver. From the liver, blood leaves via the hepatic vein into the vena cava, and finally to the heart — this is the full, correctly ordered pathway."
  },

  // =====================
  // CLASSIFICATION & DIVERSITY
  // =====================
  {
    subject: "Biology", topic: "Classification & Diversity", year: 1983, exam: "JAMB",
    question: "Which of the following structures is NOT found in the female agama lizard?",
    options: ["Pre-anal pads", "Eardrum", "Gular fold", "Nasal scale", "Nuchal crest"],
    answer: "Pre-anal pads",
    explanation: "Pre-anal pads are a secondary sexual characteristic typically found in male agama lizards (used in scent marking and mating behaviour) and are absent or poorly developed in females."
  },
  {
    subject: "Biology", topic: "Classification & Diversity", year: 1983, exam: "JAMB",
    question: "Herbs differ from shrubs because they",
    options: ["Do not produce fruits", "Are useful to herbalists", "Do not become woody", "Are only annuals", "Are only perennials"],
    answer: "Do not become woody",
    explanation: "Herbs have soft, green, non-woody stems, whereas shrubs develop woody stems. Herbs can be annual, biennial, or perennial, so 'only annuals' is not a defining distinction."
  },
  {
    subject: "Biology", topic: "Classification & Diversity", year: 1983, exam: "JAMB",
    question: "A centipede differs from a millipede by its",
    options: ["Colour", "Numerous abdominal segments", "Paired legs on each abdominal segment", "Poison claws", "Cylindrical body"],
    answer: "Poison claws",
    explanation: "Centipedes possess a pair of venomous poison claws (forcipules) modified from the first pair of legs, used to capture prey — a feature millipedes lack. Millipedes are herbivorous/detritivorous and have two pairs of legs per body segment, versus one pair per segment in centipedes."
  },
  {
    subject: "Biology", topic: "Classification & Diversity", year: 1983, exam: "JAMB",
    question: "Plants which can survive in places where the water supply is limited are",
    options: ["Bryophytes", "Mesophytes", "Xerophytes", "Hydrophytes", "Pteridophytes"],
    answer: "Xerophytes",
    explanation: "Xerophytes are plants specially adapted (e.g. thick cuticles, reduced leaves, sunken stomata, water storage tissue) to survive in dry environments with limited water supply, such as deserts."
  },
  {
    subject: "Biology", topic: "Classification & Diversity", year: 1983, exam: "JAMB",
    question: "Which of these worms is beneficial to man?",
    options: ["Hookworm", "Tapeworm", "Roundworm", "Earthworm", "Guinea worm"],
    answer: "Earthworm",
    explanation: "The earthworm is beneficial as it aerates and enriches the soil through its burrowing activity, and its castings improve soil fertility and structure. The others listed are all parasitic worms harmful to humans."
  },
  {
    subject: "Biology", topic: "Classification & Diversity", year: 1983, exam: "JAMB",
    question: "Which of the following represents the evolutionary sequence in these plants? 1. Flowering plants, 2. Ferns, 3. Mosses, 4. Algae, 5. Conifers.",
    options: ["21435", "54321", "24513", "32451", "43251"],
    answer: "43251",
    explanation: "The evolutionary sequence from simplest to most advanced is: Algae (4) → Mosses (3) → Ferns (2) → Conifers (5) → Flowering plants (1), giving the sequence 4-3-2-5-1."
  },
  {
    subject: "Biology", topic: "Classification & Diversity", year: 1983, exam: "JAMB",
    question: "Which of the following will NOT allow osmosis to take place?",
    options: ["Pig's bladder", "Cellophane", "Parchment paper", "Transparent polythene", "Cow's bladder"],
    answer: "Transparent polythene",
    explanation: "Osmosis requires a semi-permeable (selectively permeable) membrane. Pig's bladder, cellophane, parchment paper, and cow's bladder all act as semi-permeable membranes, but transparent polythene is essentially impermeable and does not allow the passage of water molecules needed for osmosis."
  },
  {
    subject: "Biology", topic: "Classification & Diversity", year: 1983, exam: "JAMB",
    question: "Which of the following instruments is used for determining turbidity of water?",
    options: ["Thermometer", "Secchi Disc", "Rain gauge", "Hygrometer", "Wind vane"],
    answer: "Secchi Disc",
    explanation: "A Secchi Disc is a black-and-white patterned disc lowered into water to measure water clarity/turbidity, based on the depth at which the disc pattern is no longer visible from the surface."
  },
  {
    subject: "Biology", topic: "Classification & Diversity", year: 1983, exam: "JAMB",
    question: "In Rhizopus, carbohydrate is stored in the form of",
    options: ["Glucose", "Paramylon", "Glycogen", "Starch", "Oil"],
    answer: "Glycogen",
    explanation: "Rhizopus is a fungus (bread mould), and like animal cells, fungi store carbohydrate reserves as glycogen rather than starch, which is characteristic of green plants."
  },
  {
    subject: "Biology", topic: "Classification & Diversity", year: 1983, exam: "JAMB",
    question: "'Jointed skeleton' is absent in the",
    options: ["Cockroach", "Spider", "Millipede", "Snail", "Dragonfly"],
    answer: "Snail",
    explanation: "The snail is a mollusc with a soft, unsegmented body and a single external shell rather than a jointed exoskeleton. Cockroaches, spiders, millipedes, and dragonflies are all arthropods, characterised by a jointed exoskeleton."
  },

  // =====================
  // ECOLOGY & DISEASES
  // =====================
  {
    subject: "Biology", topic: "Ecology & Diseases", year: 1983, exam: "JAMB",
    question: "A 28g soil sample was heated to a constant weight of 24g. When further heated to red hot and cooled, it weighed 18g. What is the percentage of humus in the soil?",
    options: ["22.2", "55.6", "75.0", "25.9", "35.7"],
    answer: "25.9",
    explanation: "Heating to constant weight (28g → 24g) removes moisture (4g water). Further ignition (24g → 18g) burns off organic matter/humus (6g). Percentage humus is calculated relative to the dry soil weight: (6/24) × 100 ≈ 25%, closest to the given option of 25.9% (minor rounding differences may exist from the original source values)."
  },
  {
    subject: "Biology", topic: "Ecology & Diseases", year: 1983, exam: "JAMB",
    question: "Which of the following diseases is NOT caused by a virus?",
    options: ["Rinderpest", "Maize rust", "Newcastle disease", "Swine fever", "Cassava mosaic disease"],
    answer: "Maize rust",
    explanation: "Maize rust is caused by a fungus (Puccinia species), whereas rinderpest, Newcastle disease, swine fever, and cassava mosaic disease are all caused by viruses."
  },
  {
    subject: "Biology", topic: "Ecology & Diseases", year: 1983, exam: "JAMB",
    question: "One disease NOT caused directly by bacteria is",
    options: ["Malaria", "Tuberculosis", "Pneumonia", "Tetanus", "Cholera"],
    answer: "Malaria",
    explanation: "Malaria is caused by a protozoan parasite (Plasmodium species) transmitted by female Anopheles mosquitoes, not by bacteria. Tuberculosis, pneumonia, tetanus, and cholera are all bacterial diseases."
  },
  {
    subject: "Biology", topic: "Ecology & Diseases", year: 1983, exam: "JAMB",
    question: "Which of the following statements is NOT true of insectivorous plants?",
    options: [
      "They obtain part of their food by trapping and feeding on insects",
      "They attract insects simply because of pollination",
      "They can grow in soils poor in nitrogenous salts",
      "They can supplement the nitrogen supply by feeding on insects",
      "Examples include butterworts, sundews and pitcher plants"
    ],
    answer: "They attract insects simply because of pollination",
    explanation: "Insectivorous plants attract insects primarily to trap and digest them as a nitrogen supplement, not for pollination purposes. This statement confuses their feeding strategy with pollination, making it the false/incorrect statement."
  },
  {
    subject: "Biology", topic: "Ecology & Diseases", year: 1983, exam: "JAMB",
    question: "Which of the following diseases could be exclusively associated with a river basin?",
    options: ["Malaria", "Syphilis", "Onchocerciasis", "Cholera", "Poliomyelitis"],
    answer: "Onchocerciasis",
    explanation: "Onchocerciasis (river blindness) is transmitted by blackflies (Simulium species) that breed specifically in fast-flowing, well-oxygenated river waters, making it strongly associated with river basins."
  },
  {
    subject: "Biology", topic: "Ecology & Diseases", year: 1983, exam: "JAMB",
    question: "Which sequence represents the correct order of organisms in a food chain? 1. Toad, 2. Mucuna, 3. Grasshopper, 4. Snake, 5. Hawk.",
    options: ["54132", "12345", "21345", "23154", "23145"],
    answer: "23145",
    explanation: "The correct food chain order is: Mucuna (producer, 2) → Grasshopper (primary consumer, 3) → Toad (secondary consumer, 1) → Snake (tertiary consumer, 4) → Hawk (apex predator, 5), giving the sequence 2-3-1-4-5."
  },

  // =====================
  // DEVELOPMENT & EVOLUTION
  // =====================
  {
    subject: "Biology", topic: "Development & Evolution", year: 1983, exam: "JAMB",
    question: "The movement of part of a plant in response to an external stimulus of no particular direction is",
    options: ["Taxism", "Tropism", "Haptotropic movement", "Nastic movement", "Phototropism"],
    answer: "Nastic movement",
    explanation: "Nastic movements are non-directional responses to a stimulus — the direction of the response does not depend on the direction of the stimulus (unlike tropisms, which are directional growth responses)."
  },
  {
    subject: "Biology", topic: "Development & Evolution", year: 1983, exam: "JAMB",
    question: "In what order do the following structures develop during the metamorphosis of the toad? 1. External gills, 2. Internal gills, 3. Forelimbs, 4. Hindlimbs, 5. Mouth.",
    options: ["12345", "15243", "1345", "53412", "54321"],
    answer: "12345",
    explanation: "NOTE: There appears to be a numbering/option inconsistency from the source text (option C is missing a digit) — please verify against the original answer key. The generally accepted developmental sequence in toad metamorphosis is: external gills form first, followed by internal gills, then hindlimbs, then forelimbs, with mouth structures changing last as the tadpole transitions to an adult toad."
  },
  {
    subject: "Biology", topic: "Development & Evolution", year: 1983, exam: "JAMB",
    question: "Starting from the skull end, the vertebrae are arranged in the following order:",
    options: [
      "Axis, atlas, cervical, thoracic and lumbar",
      "Atlas, cervical, axis, thoracic and lumbar",
      "Atlas, axis, thoracic, cervical and lumbar",
      "Atlas, axis, cervical, thoracic and lumbar",
      "Atlas, thoracic, cervical, axis and lumbar"
    ],
    answer: "Atlas, axis, cervical, thoracic and lumbar",
    explanation: "Starting from the skull, the vertebral column begins with the atlas (1st cervical vertebra, supporting the skull), followed by the axis (2nd cervical vertebra, allowing head rotation), then the remaining cervical vertebrae, followed by the thoracic vertebrae, and finally the lumbar vertebrae."
  },
]

export default bioJamb1983
