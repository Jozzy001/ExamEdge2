// EXAMEDGENG — CHEMISTRY STUDY GUIDES (EXTRA) — PART 2 OF 2
// Guides for Chemistry topics that did not have one yet:
//   Stoichiometry & Kinetics, Laboratory Safety, Solutions & Crystals, Laboratory Apparatus,
//   Solutions & Acids, Solutions & Conductance, Metals & Their Compounds, Metals & Alloys,
//   Laboratory Preparation of Gases, Solutions & Titration, Laboratory Collection of Gases,
//   Chemical Changes, Periodic Table & Carbon, Periodic Table & Metallurgy,
//   Laboratory Desiccants, Solutions & Physical States, Atomic Theory
// Keys match the topic names in the question bank exactly.
//
// HOW TO USE:
// 1. Save this file as src/data/studyGuidesChemistryExtra2.js
// 2. In src/data/studyGuides.js add at the top:
//      import CHEMISTRY_EXTRA_GUIDES_2 from "./studyGuidesChemistryExtra2"
// 3. At the very end of the STUDY_GUIDES object (next to ...BIOLOGY_EXTRA_GUIDES), add:
//      ...CHEMISTRY_EXTRA_GUIDES_2,
//
// (Part 1 is studyGuidesChemistryExtra.js. Use both files.)

const CHEMISTRY_EXTRA_GUIDES_2 = {

  // ==========================================
  // CHEMISTRY — STOICHIOMETRY & KINETICS
  // ==========================================
  "Stoichiometry & Kinetics": {
    subject: "Chemistry",
    title: "Stoichiometry & Kinetics — Moles Meet Reaction Rates",
    icon: "📐",
    estimatedTime: "4 min read",
    sections: [
      { heading: "What is Tested", type: "text",
        content: "These questions combine mole calculations (how much product forms) with reaction rates (how fast it forms). You must first use the balanced equation to find the total amount, then divide by time to get a rate, or compare rates under different conditions." },

      { heading: "Key Formulas", type: "cards", items: [
        { title: "Average rate", body: "Rate = amount of product formed ÷ time taken (or amount of reactant used ÷ time)." },
        { title: "Units of rate", body: "mol dm⁻³ s⁻¹ for concentration change, cm³/s for gas volume, g/s for mass change." },
        { title: "Moles to gas volume", body: "Volume = moles × 22.4 dm³ at STP (or 24 dm³ at room temperature)." },
        { title: "Rate and time", body: "Rate is inversely proportional to time. If a reaction takes half the time, the rate is double." }
      ]},

      { heading: "Worked Example — Amount and Rate", type: "steps", items: [
        "0.24 g of magnesium reacts completely with excess dilute HCl in 40 s. (Mg = 24) Find the volume of H₂ at STP and the average rate.",
        "Mg + 2HCl → MgCl₂ + H₂. Ratio Mg : H₂ = 1 : 1.",
        "Moles Mg = 0.24 ÷ 24 = 0.01 mol, so moles H₂ = 0.01 mol.",
        "Volume H₂ = 0.01 × 22.4 = 0.224 dm³ = 224 cm³.",
        "Average rate = 224 ÷ 40 = 5.6 cm³/s."
      ]},

      { heading: "Comparing Rates", type: "cards", items: [
        { title: "Same total, different time", body: "Marble chips and acid: powder finishes sooner than lumps, but the TOTAL gas collected is the same if the mass and acid are the same." },
        { title: "Excess reagent decides the total", body: "The limiting reagent decides how much product forms. The other conditions decide only how fast." },
        { title: "Catalyst", body: "Speeds up the reaction but does not change the total amount of product." },
        { title: "Doubling concentration", body: "Usually increases the rate, but does NOT change the final amount if the limiting reagent is unchanged." }
      ]},

      { heading: "Half-Life Idea (First-Order)", type: "steps", items: [
        "Half-life is the time taken for the concentration of a reactant to fall to half its value.",
        "For a first-order reaction, half-life is constant.",
        "Example: half-life 20 min, starting 0.80 mol/dm³.",
        "After 20 min: 0.40. After 40 min: 0.20. After 60 min: 0.10 mol/dm³."
      ]},

      { heading: "Watch Out!", type: "warning", items: [
        "Calculate the amount of product from the LIMITING reagent, not the excess one.",
        "A faster reaction does not mean more product.",
        "Convert cm³ and dm³ carefully. 224 cm³ = 0.224 dm³.",
        "Average rate over a period is not the same as the rate at one moment."
      ]},

      { heading: "Quick Tip", type: "tip",
        content: "Do it in two stages: (1) stoichiometry, mass → moles → ratio → product amount, then (2) kinetics, divide by time for the rate. If a question changes a rate factor, the total product stays the same unless the limiting reagent changes." }
    ]
  },

  // ==========================================
  // CHEMISTRY — LABORATORY SAFETY
  // ==========================================
  "Laboratory Safety": {
    subject: "Chemistry",
    title: "Laboratory Safety — Hazards, Rules and First Aid",
    icon: "🥽",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Hazard Symbols", type: "cards", items: [
        { title: "Corrosive", body: "Burns skin and eyes, damages metals. Examples: concentrated acids, NaOH." },
        { title: "Flammable", body: "Catches fire easily. Examples: ethanol, petrol, propanone (acetone). Keep away from flames." },
        { title: "Toxic (poisonous)", body: "Can cause death or serious harm. Examples: chlorine, mercury, carbon monoxide." },
        { title: "Harmful or irritant", body: "Less serious damage such as skin irritation or discomfort." },
        { title: "Oxidising", body: "Helps other materials burn. Examples: KMnO₄, KClO₃, concentrated HNO₃." },
        { title: "Explosive", body: "May explode if heated, shocked or rubbed." },
        { title: "Environmental hazard", body: "Harmful to aquatic life, so do not pour down the sink." }
      ]},

      { heading: "General Laboratory Rules", type: "steps", items: [
        "Wear safety goggles and a lab coat. Tie back long hair.",
        "NEVER eat, drink or taste chemicals in the laboratory.",
        "Read the label of every reagent before use.",
        "Use a FUME CUPBOARD for toxic or choking gases: Cl₂, SO₂, NO₂, H₂S, NH₃.",
        "Always add ACID to WATER, never water to acid, to prevent violent spitting and burns.",
        "Heat a test tube at an angle, pointing away from yourself and others, and keep it moving.",
        "Smell gases by wafting a little towards your nose with your hand.",
        "Keep flammable liquids away from naked flames. Heat them in a water bath."
      ]},

      { heading: "Fire Safety", type: "cards", items: [
        { title: "Sand", body: "Smothers fires from burning metals (such as sodium) and from burning liquids." },
        { title: "Fire blanket", body: "Smothers small fires and clothing fires." },
        { title: "Carbon dioxide extinguisher", body: "For electrical fires and flammable liquid fires." },
        { title: "Water", body: "NEVER use water on oil, petrol or electrical fires, or on burning sodium or potassium." }
      ]},

      { heading: "First Aid", type: "cards", items: [
        { title: "Acid or alkali on skin", body: "Wash at once with LARGE amounts of running water for several minutes." },
        { title: "Chemicals in the eye", body: "Rinse with plenty of clean water and seek medical help immediately." },
        { title: "Burns from heat", body: "Cool under running cold water. Do not apply oil or butter." },
        { title: "Swallowed chemicals", body: "Do not induce vomiting. Seek medical help straight away." }
      ]},

      { heading: "Waste and Spills", type: "cards", items: [
        { title: "Solid waste", body: "Use the waste bin. Do not put insoluble solids in the sink." },
        { title: "Dilute acid or alkali spills", body: "Dilute with water, or neutralise carefully (sodium hydrogencarbonate for acid)." },
        { title: "Mercury spills", body: "Cover with powdered sulphur and collect carefully. Mercury vapour is poisonous." },
        { title: "Broken glass", body: "Sweep with a brush and pan. Do not use bare hands." }
      ]},

      { heading: "Watch Out!", type: "warning", items: [
        "Acid into water, never water into acid. Remember: 'Do as you oughta, add acid to water'.",
        "Never use water on a sodium fire. It reacts violently. Use sand.",
        "Never taste chemicals or smell them directly.",
        "Do not heat flammable liquids over a naked flame."
      ]},

      { heading: "Quick Tip", type: "tip",
        content: "Exam questions usually ask which symbol, which fire-fighting method or which action is safest. Think: corrosive = burns, flammable = fire, toxic = poison. Sand for metal fires. Acid into water. Fume cupboard for poisonous gases." }
    ]
  },

  // ==========================================
  // CHEMISTRY — SOLUTIONS & CRYSTALS
  // ==========================================
  "Solutions & Crystals": {
    subject: "Chemistry",
    title: "Solutions & Crystals — Crystallisation and Hydrates",
    icon: "🔷",
    estimatedTime: "4 min read",
    sections: [
      { heading: "Crystallisation", type: "steps", items: [
        "Heat the solution to evaporate some of the water until it is nearly saturated (the crystallisation point).",
        "Test by dipping a glass rod in and cooling it. If crystals form on the rod, stop heating.",
        "Allow the hot saturated solution to cool SLOWLY. Large, well-formed crystals result.",
        "Filter to collect the crystals.",
        "Wash with a little cold distilled water and dry between filter papers.",
        "Do NOT evaporate to dryness, because hydrated crystals would lose water."
      ]},

      { heading: "Facts About Crystals", type: "cards", items: [
        { title: "Slow cooling", body: "Gives LARGE crystals. Fast cooling gives many small crystals." },
        { title: "Seed crystal", body: "A tiny crystal added to a supersaturated solution starts crystal growth." },
        { title: "Crystals of one substance", body: "Always have the same shape and the same angles between faces." },
        { title: "Crystallisation vs evaporation", body: "Crystallisation is gentler. Evaporation to dryness can break down heat-sensitive substances." }
      ]},

      { heading: "Water of Crystallisation", type: "cards", items: [
        { title: "Hydrated salt", body: "A crystal that contains water as part of its structure, such as CuSO₄·5H₂O (blue) and MgSO₄·7H₂O." },
        { title: "Anhydrous salt", body: "The same salt with the water removed, for example white CuSO₄." },
        { title: "Heating CuSO₄·5H₂O", body: "Blue → white. CuSO₄·5H₂O → CuSO₄ + 5H₂O." },
        { title: "Adding water back", body: "White CuSO₄ turns BLUE again with a little heat given out. This is a test for water." }
      ]},

      { heading: "Percentage of Water of Crystallisation", type: "cards", items: [
        { title: "CuSO₄·5H₂O", body: "Molar mass 250. Water = 90. Percentage = 90 ÷ 250 × 100 = 36%." },
        { title: "MgSO₄·7H₂O", body: "Molar mass = 120 + 126 = 246. Water = 126. Percentage = 126 ÷ 246 × 100 = 51.2%." },
        { title: "Na₂CO₃·10H₂O", body: "Molar mass = 106 + 180 = 286. Water = 180. Percentage = 180 ÷ 286 × 100 = 62.9%." }
      ]},

      { heading: "Finding x in CuSO₄·xH₂O", type: "steps", items: [
        "2.50 g of hydrated copper(II) sulphate is heated to constant mass and 1.60 g of anhydrous CuSO₄ remains. (CuSO₄ = 160, H₂O = 18)",
        "Mass of water lost = 2.50 − 1.60 = 0.90 g.",
        "Moles of water = 0.90 ÷ 18 = 0.05 mol. Moles of CuSO₄ = 1.60 ÷ 160 = 0.01 mol.",
        "Ratio = 0.05 : 0.01 = 5 : 1.",
        "So x = 5 and the formula is CuSO₄·5H₂O."
      ]},

      { heading: "Efflorescence and Deliquescence", type: "cards", items: [
        { title: "Efflorescent", body: "Loses water of crystallisation to the air and crumbles to powder. Example: Na₂CO₃·10H₂O (washing soda)." },
        { title: "Deliquescent", body: "Absorbs water from the air and dissolves in it. Examples: NaOH, CaCl₂, FeCl₃." },
        { title: "Hygroscopic", body: "Absorbs moisture from the air. Examples: conc. H₂SO₄, anhydrous CaCl₂, silica gel." }
      ]},

      { heading: "Watch Out!", type: "warning", items: [
        "Do not evaporate to dryness when you need hydrated crystals.",
        "Include the water in the molar mass when finding percentage of water of crystallisation.",
        "Efflorescent substances LOSE water. Deliquescent substances GAIN water.",
        "The dot in CuSO₄·5H₂O means 'combined with', not multiplication."
      ]},

      { heading: "Quick Tip", type: "tip",
        content: "For 'find x' problems: find moles of water, find moles of anhydrous salt, divide to get the ratio. For percentage water: (mass of water in formula ÷ molar mass of whole hydrate) × 100. Remember CuSO₄·5H₂O = 36% water." }
    ]
  },

  // ==========================================
  // CHEMISTRY — LABORATORY APPARATUS
  // ==========================================
  "Laboratory Apparatus": {
    subject: "Chemistry",
    title: "Laboratory Apparatus — Names and Uses",
    icon: "🧫",
    estimatedTime: "4 min read",
    sections: [
      { heading: "Measuring Apparatus", type: "cards", items: [
        { title: "Burette", body: "Delivers VARIABLE volumes accurately (usually 0 to 50 cm³). Used in titrations." },
        { title: "Pipette", body: "Delivers one FIXED volume accurately (for example 25.0 cm³)." },
        { title: "Volumetric flask", body: "Prepares an exact volume of standard solution (for example 250 cm³)." },
        { title: "Measuring cylinder", body: "Measures approximate volumes of liquids. Less accurate than a pipette or burette." },
        { title: "Balance", body: "Measures mass accurately." },
        { title: "Thermometer", body: "Measures temperature." },
        { title: "Accuracy order", body: "Pipette, burette and volumetric flask are the most accurate. Measuring cylinder is less accurate. Beaker markings are only approximate." }
      ]},

      { heading: "Containers and Heating Apparatus", type: "cards", items: [
        { title: "Beaker", body: "Holds, heats and mixes liquids. Not for measuring." },
        { title: "Conical flask", body: "Holds the solution during titration. The shape allows swirling without spillage." },
        { title: "Round-bottomed flask", body: "Heating liquids evenly, as in distillation." },
        { title: "Test tube and boiling tube", body: "Small-scale reactions. Boiling tubes are larger." },
        { title: "Evaporating dish", body: "Evaporates solutions to crystallise salts." },
        { title: "Crucible", body: "Heats solids to very high temperatures." },
        { title: "Bunsen burner", body: "Heat source. Blue flame (air hole open) is hotter and cleaner. Yellow flame (air hole closed) is cooler and sooty." },
        { title: "Tripod and gauze", body: "The tripod supports apparatus. Wire gauze spreads the heat." }
      ]},

      { heading: "Separation Apparatus", type: "cards", items: [
        { title: "Filter funnel and filter paper", body: "Separates an insoluble solid from a liquid." },
        { title: "Separating funnel", body: "Separates two immiscible liquids such as oil and water." },
        { title: "Liebig condenser", body: "Cools and condenses vapour during distillation. Water enters at the BOTTOM and leaves at the TOP." },
        { title: "Fractionating column", body: "Separates liquids with close boiling points." },
        { title: "Centrifuge", body: "Spins mixtures to settle suspended solids quickly." }
      ]},

      { heading: "Gas Apparatus", type: "cards", items: [
        { title: "Thistle funnel", body: "Adds liquid to a flask while a gas is being made. The stem must dip BELOW the liquid." },
        { title: "Delivery tube", body: "Carries gas from the flask to the collecting vessel." },
        { title: "Gas jar", body: "Holds the collected gas." },
        { title: "Gas syringe", body: "Measures the volume of gas produced." },
        { title: "Desiccator", body: "Keeps substances dry. Contains a drying agent such as silica gel." },
        { title: "Kipp's apparatus", body: "Gives a continuous supply of gas (H₂, CO₂, H₂S) without heating." }
      ]},

      { heading: "Watch Out!", type: "warning", items: [
        "A pipette measures a FIXED volume. A burette measures variable volumes.",
        "In a Liebig condenser, water enters at the bottom and leaves at the top.",
        "A measuring cylinder is not accurate enough for titration.",
        "A Bunsen burner gives the hottest flame with the air hole OPEN (blue flame)."
      ]},

      { heading: "Quick Tip", type: "tip",
        content: "Match each apparatus to a single job: pipette = fixed volume, burette = variable volume, conical flask = titration, separating funnel = immiscible liquids, Liebig condenser = distillation, thistle funnel = adding liquid during gas preparation." }
    ]
  },

  // ==========================================
  // CHEMISTRY — SOLUTIONS & ACIDS
  // ==========================================
  "Solutions & Acids": {
    subject: "Chemistry",
    title: "Solutions & Acids — Strength, pH and Dilution",
    icon: "🍋",
    estimatedTime: "5 min read",
    sections: [
      { heading: "What is an Acid?", type: "text",
        content: "An acid is a substance that produces hydrogen ions (H⁺) in water, or in the Bronsted-Lowry definition, a proton donor. Acids taste sour, turn blue litmus red, and have a pH below 7." },

      { heading: "Strong and Weak Acids", type: "cards", items: [
        { title: "Strong acids", body: "IONISE COMPLETELY in water. Examples: HCl, HNO₃, H₂SO₄." },
        { title: "Weak acids", body: "Ionise only PARTLY in water. Examples: ethanoic acid (CH₃COOH), carbonic acid (H₂CO₃), hydrogen sulphide (H₂S)." },
        { title: "Strong vs concentrated", body: "Strength is about how much the acid ionises. Concentration is about how much acid is dissolved per dm³. A dilute solution of a strong acid can still be strong." },
        { title: "Basicity", body: "The number of H⁺ ions one molecule can give. HCl and HNO₃ are monobasic. H₂SO₄ is dibasic. H₃PO₄ is tribasic." }
      ]},

      { heading: "Reactions of Acids", type: "cards", items: [
        { title: "With reactive metals", body: "Acid + metal → salt + hydrogen. Zn + 2HCl → ZnCl₂ + H₂." },
        { title: "With bases and alkalis", body: "Acid + base → salt + water (neutralisation)." },
        { title: "With carbonates", body: "Acid + carbonate → salt + water + carbon dioxide." },
        { title: "With hydrogencarbonates", body: "Same products: salt + water + carbon dioxide." },
        { title: "Not all metals react", body: "Copper, silver and gold do not react with dilute acids." }
      ]},

      { heading: "pH Scale", type: "cards", items: [
        { title: "Definition", body: "pH = −log[H⁺]." },
        { title: "Range", body: "Below 7 acidic, 7 neutral, above 7 alkaline." },
        { title: "Examples", body: "0.01 mol/dm³ HCl: [H⁺] = 10⁻², so pH = 2. 0.001 mol/dm³ HCl: pH = 3." },
        { title: "Alkalis", body: "pH + pOH = 14. For 0.01 mol/dm³ NaOH: pOH = 2, so pH = 12." },
        { title: "Each pH unit", body: "A change of one pH unit means a TENFOLD change in [H⁺]." },
        { title: "Indicators", body: "Methyl orange is red in acid and yellow in alkali. Phenolphthalein is colourless in acid and pink in alkali." }
      ]},

      { heading: "Dilution — Worked Example", type: "steps", items: [
        "How much water must be added to 50 cm³ of 2.0 M HCl to make it 0.5 M?",
        "Use C₁V₁ = C₂V₂: 2.0 × 50 = 0.5 × V₂.",
        "V₂ = 100 ÷ 0.5 = 200 cm³.",
        "Water to add = 200 − 50 = 150 cm³."
      ]},

      { heading: "Watch Out!", type: "warning", items: [
        "Strong does not mean concentrated. Strength is about ionisation, concentration is about amount per dm³.",
        "A LOWER pH means MORE acidic.",
        "H₂SO₄ is dibasic, so it neutralises twice as much alkali as a monobasic acid of the same concentration.",
        "Add acid to water when diluting, never water to acid."
      ]},

      { heading: "Quick Tip", type: "tip",
        content: "For pH, count the power of ten: [H⁺] = 10⁻ⁿ gives pH = n. For dilution, moles stay the same, so C₁V₁ = C₂V₂. And remember the three acid reactions: metal gives H₂, carbonate gives CO₂, base gives water." }
    ]
  },

  // ==========================================
  // CHEMISTRY — SOLUTIONS & CONDUCTANCE
  // ==========================================
  "Solutions & Conductance": {
    subject: "Chemistry",
    title: "Solutions & Conductance — Electrolytes and Electrolysis",
    icon: "🔌",
    estimatedTime: "5 min read",
    sections: [
      { heading: "Electrolytes and Non-Electrolytes", type: "cards", items: [
        { title: "Electrolyte", body: "A compound that conducts electricity when MOLTEN or in AQUEOUS solution, because it contains free-moving IONS." },
        { title: "Non-electrolyte", body: "Does not conduct. Examples: sugar solution, ethanol, pure water, petrol, molten wax." },
        { title: "Strong electrolytes", body: "Fully ionised: HCl, H₂SO₄, NaOH, NaCl solution. Good conductors." },
        { title: "Weak electrolytes", body: "Partly ionised: ethanoic acid, ammonia solution, pure water (very poor)." },
        { title: "Solid ionic compounds", body: "Do NOT conduct because the ions are fixed in place. They conduct when molten or dissolved." },
        { title: "Metals and graphite", body: "Conduct by free ELECTRONS, not ions. They are not electrolytes." }
      ]},

      { heading: "Factors Affecting Conductance", type: "cards", items: [
        { title: "Concentration of ions", body: "More ions means better conduction." },
        { title: "Charge on the ions", body: "Higher charge carries more current (Al³⁺ more than Na⁺)." },
        { title: "Temperature", body: "Higher temperature increases the speed of ions, so conductance rises. Metals are the opposite: their conductance falls as temperature rises." },
        { title: "Degree of ionisation", body: "A strong electrolyte conducts better than a weak one of the same concentration." }
      ]},

      { heading: "Electrolysis Basics", type: "cards", items: [
        { title: "Cathode", body: "NEGATIVE electrode. Cations are reduced here. Metal or hydrogen is formed." },
        { title: "Anode", body: "POSITIVE electrode. Anions are oxidised here. Non-metal or oxygen is formed." },
        { title: "Memory aid", body: "An Ox, Red Cat: ANode = OXidation. REDuction at CAThode." },
        { title: "Inert electrodes", body: "Platinum or graphite. They do not react." },
        { title: "Faraday's law", body: "Mass deposited is proportional to the charge (current × time). Q = It. One mole of electrons = 96,500 C." }
      ]},

      { heading: "Selective Discharge", type: "cards", items: [
        { title: "Cations at the cathode", body: "The LESS reactive ion is discharged first. Order of ease: Ag⁺, Cu²⁺, H⁺, Pb²⁺, Fe²⁺, Zn²⁺, Al³⁺, Mg²⁺, Na⁺, K⁺. So Cu²⁺ is discharged before H⁺, and H⁺ before Na⁺." },
        { title: "Anions at the anode", body: "Order of ease: I⁻, Br⁻, Cl⁻, OH⁻, SO₄²⁻, NO₃⁻. OH⁻ is discharged in preference to SO₄²⁻ and NO₃⁻." },
        { title: "Concentration effect", body: "In CONCENTRATED brine Cl⁻ is discharged (Cl₂ forms). In DILUTE NaCl, OH⁻ is discharged (O₂ forms)." },
        { title: "Electrode material", body: "Active electrodes (copper) can themselves dissolve at the anode." }
      ]},

      { heading: "Common Electrolysis Products", type: "cards", items: [
        { title: "Concentrated NaCl (brine)", body: "Cathode: H₂. Anode: Cl₂. Solution left: NaOH." },
        { title: "Dilute H₂SO₄ (acidified water)", body: "Cathode: H₂. Anode: O₂. Volume ratio H₂ : O₂ = 2 : 1." },
        { title: "CuSO₄ solution with inert electrodes", body: "Cathode: copper is deposited. Anode: O₂. The solution fades from blue and becomes acidic." },
        { title: "CuSO₄ with copper electrodes", body: "Anode dissolves, cathode gains copper. Used to PURIFY copper and for electroplating." },
        { title: "Molten PbBr₂", body: "Cathode: lead metal. Anode: bromine vapour." }
      ]},

      { heading: "Watch Out!", type: "warning", items: [
        "Solid ionic compounds do not conduct. They conduct when molten or dissolved.",
        "Metals conduct using electrons. Electrolytes conduct using ions.",
        "Concentrated brine gives chlorine. Dilute NaCl gives oxygen.",
        "In electrolysis the cathode is NEGATIVE and the anode is POSITIVE (the reverse of a battery cell, where the anode is negative).",
        "Sugar solution and ethanol are non-electrolytes even though they dissolve."
      ]},

      { heading: "Quick Tip", type: "tip",
        content: "For electrolysis questions, list the ions present, including H⁺ and OH⁻ from water. Then pick the winner at each electrode using the discharge order and the concentration. Positive ions go to the cathode, negative ions go to the anode." }
    ]
  },

  // ==========================================
  // CHEMISTRY — METALS & THEIR COMPOUNDS
  // ==========================================
  "Metals & Their Compounds": {
    subject: "Chemistry",
    title: "Metals & Their Compounds — Sodium, Calcium, Aluminium, Iron, Copper",
    icon: "🪙",
    estimatedTime: "5 min read",
    sections: [
      { heading: "Sodium and its Compounds", type: "cards", items: [
        { title: "Sodium", body: "Soft, stored under oil, reacts violently with water: 2Na + 2H₂O → 2NaOH + H₂. Burns with a golden yellow flame." },
        { title: "Sodium hydroxide (NaOH)", body: "Made by electrolysis of brine. Used for soap, paper and aluminium extraction. Deliquescent." },
        { title: "Sodium carbonate (Na₂CO₃)", body: "Washing soda (Na₂CO₃·10H₂O) softens water. Made by the Solvay process. Used in glass making." },
        { title: "Sodium hydrogencarbonate (NaHCO₃)", body: "Baking soda. Used in baking powder and antacids. Decomposes on heating: 2NaHCO₃ → Na₂CO₃ + H₂O + CO₂." },
        { title: "Sodium chloride (NaCl)", body: "Common salt. Used for food, and as the source of NaOH, Cl₂ and Na." }
      ]},

      { heading: "Calcium and its Compounds", type: "cards", items: [
        { title: "Limestone (CaCO₃)", body: "Used for cement, and heated to give lime: CaCO₃ → CaO + CO₂." },
        { title: "Quicklime (CaO)", body: "Basic oxide. Reacts with water giving heat: CaO + H₂O → Ca(OH)₂. Used as a drying agent for ammonia." },
        { title: "Slaked lime (Ca(OH)₂)", body: "Neutralises acidic soil. Limewater is its solution. Ca(OH)₂ + CO₂ → CaCO₃ + H₂O (milky)." },
        { title: "Gypsum (CaSO₄·2H₂O)", body: "Heated gently it gives plaster of Paris (CaSO₄·½H₂O), used for casts and moulds." },
        { title: "Calcium chloride (CaCl₂)", body: "Drying agent, and used to de-ice roads." }
      ]},

      { heading: "Magnesium and Aluminium", type: "cards", items: [
        { title: "Magnesium", body: "Burns with a bright white flame to form MgO. Reacts with steam. Used in flares and alloys." },
        { title: "Epsom salt", body: "MgSO₄·7H₂O. Used as a laxative." },
        { title: "Aluminium", body: "Protected by a thin layer of Al₂O₃. Light, a good conductor, and does not corrode easily." },
        { title: "Aluminium oxide", body: "AMPHOTERIC. It reacts with both acid and alkali. Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O." },
        { title: "Aluminium uses", body: "Aircraft, cooking pots, power cables, foil, cans." }
      ]},

      { heading: "Iron, Copper, Zinc and Lead", type: "cards", items: [
        { title: "Iron", body: "Forms Fe²⁺ (green) and Fe³⁺ (brown) compounds. Rusts in the presence of water AND oxygen." },
        { title: "Copper", body: "Reddish-brown, an excellent conductor. Does not react with dilute acids. Copper(II) sulphate is BLUE. Copper(II) oxide is BLACK." },
        { title: "Zinc", body: "Galvanising (coating on iron), brass, dry cells. ZnO is amphoteric." },
        { title: "Lead", body: "Dense and soft. Used for car batteries and radiation shielding. PbO is amphoteric. Lead compounds are poisonous." },
        { title: "Mercury", body: "Liquid metal at room temperature. Used in thermometers. Poisonous." }
      ]},

      { heading: "General Properties of Metals", type: "cards", items: [
        { title: "Physical", body: "Shiny, malleable, ductile, good conductors of heat and electricity, high melting points (except Hg), sonorous." },
        { title: "Chemical", body: "Form positive ions by losing electrons. Their oxides are basic. They displace less reactive metals from solutions." }
      ]},

      { heading: "Watch Out!", type: "warning", items: [
        "Washing soda is Na₂CO₃·10H₂O. Baking soda is NaHCO₃. They are different.",
        "Quicklime is CaO. Slaked lime is Ca(OH)₂.",
        "Al₂O₃ and ZnO are AMPHOTERIC, not simply basic.",
        "Copper is BELOW hydrogen in the reactivity series and does not react with dilute HCl.",
        "Sodium burns with a golden-yellow flame but potassium burns lilac."
      ]},

      { heading: "Quick Tip", type: "tip",
        content: "Remember the sets: quicklime (CaO) + water = slaked lime Ca(OH)₂, limestone heated = quicklime + CO₂, washing soda = Na₂CO₃·10H₂O, baking soda = NaHCO₃, gypsum heated = plaster of Paris." }
    ]
  },

  // ==========================================
  // CHEMISTRY — METALS & ALLOYS
  // ==========================================
  "Metals & Alloys": {
    subject: "Chemistry",
    title: "Metals & Alloys — Composition, Uses and Corrosion",
    icon: "🔩",
    estimatedTime: "4 min read",
    sections: [
      { heading: "What is an Alloy?", type: "text",
        content: "An alloy is a mixture of a metal with one or more other elements, usually other metals, designed to have better properties than the pure metal. Alloys are usually HARDER, STRONGER and more resistant to corrosion than the pure metals." },

      { heading: "Important Alloys", type: "cards", items: [
        { title: "Brass", body: "Copper + ZINC. Used for musical instruments, door handles, taps and ornaments." },
        { title: "Bronze", body: "Copper + TIN. Used for statues, bells, medals and ship propellers." },
        { title: "Steel", body: "Iron + a little CARBON. Used for construction, machines and tools." },
        { title: "Stainless steel", body: "Iron + chromium + nickel. Resists rusting. Used for cutlery, sinks and surgical instruments." },
        { title: "Solder", body: "Lead + tin. Low melting point. Used to join electrical components." },
        { title: "Duralumin", body: "Aluminium + copper + magnesium. Strong and light. Used in aircraft." },
        { title: "Amalgam", body: "Mercury + another metal. Used in dental fillings." },
        { title: "Nichrome", body: "Nickel + chromium. High resistance and melting point. Used for heating elements." },
        { title: "Type metal", body: "Lead + antimony + tin. Used for printing type." }
      ]},

      { heading: "Types of Iron and Steel", type: "cards", items: [
        { title: "Cast iron", body: "About 2 to 4% carbon. Hard but brittle. Used for engine blocks, pipes and cooking pots." },
        { title: "Mild steel", body: "Low carbon (about 0.1 to 0.3%). Easy to shape. Used for car bodies and nails." },
        { title: "High-carbon steel", body: "Harder and more brittle. Used for tools and knives." },
        { title: "Wrought iron", body: "Almost pure iron. Soft and malleable. Used for gates and railings." }
      ]},

      { heading: "Why Alloys Are Harder", type: "cards", items: [
        { title: "Explanation", body: "In a pure metal, layers of identical atoms slide over each other easily. In an alloy, atoms of different sizes disrupt the layers, so they cannot slide easily." }
      ]},

      { heading: "Corrosion and Protection", type: "cards", items: [
        { title: "Rusting", body: "Iron + oxygen + water → hydrated iron(III) oxide. BOTH oxygen AND water are needed." },
        { title: "Speeded up by", body: "Salt water, acid rain and warm temperatures." },
        { title: "Painting, oiling, greasing", body: "Keep out air and water." },
        { title: "Galvanising", body: "Coating iron with ZINC. Zinc also protects the iron by sacrificial protection if scratched." },
        { title: "Tin plating", body: "Protects only while the coating is intact. If it is scratched, iron rusts faster." },
        { title: "Sacrificial protection", body: "A more reactive metal (Zn or Mg) corrodes in place of iron." }
      ]},

      { heading: "Watch Out!", type: "warning", items: [
        "Brass has ZINC. Bronze has TIN. Both contain copper. This is the most common mix-up.",
        "Steel is iron with a small amount of carbon, not a pure element.",
        "Solder is lead and tin and has a LOW melting point.",
        "Galvanising uses zinc, not tin."
      ]},

      { heading: "Quick Tip", type: "tip",
        content: "Remember the four pairs: copper + zinc = brass, copper + tin = bronze, iron + carbon = steel, lead + tin = solder. Bronze and brass both start with copper, so the question is always which second metal: tin (bronze) or zinc (brass)." }
    ]
  },

  // ==========================================
  // CHEMISTRY — LABORATORY PREPARATION OF GASES
  // ==========================================
  "Laboratory Preparation of Gases": {
    subject: "Chemistry",
    title: "Laboratory Preparation of Gases — Reagents and Equations",
    icon: "⚗️",
    estimatedTime: "6 min read",
    sections: [
      { heading: "What is Tested", type: "text",
        content: "For each common gas you should know the reagents, the conditions (is heat needed?), the balanced equation, how the gas is dried and how it is collected. This guide gives the preparations; the 'Laboratory Collection of Gases' guide gives the collection methods in detail." },

      { heading: "Oxygen", type: "cards", items: [
        { title: "From hydrogen peroxide", body: "2H₂O₂ → 2H₂O + O₂. Catalyst: manganese(IV) oxide (MnO₂). No heating needed." },
        { title: "From potassium chlorate", body: "2KClO₃ → 2KCl + 3O₂. Heat with MnO₂ catalyst." },
        { title: "Collection", body: "Over water, since it is only slightly soluble." }
      ]},

      { heading: "Hydrogen", type: "cards", items: [
        { title: "Reaction", body: "Zn + 2HCl → ZnCl₂ + H₂, or Zn + H₂SO₄ → ZnSO₄ + H₂. Use zinc granules and dilute acid. No heat." },
        { title: "Copper sulphate", body: "A few drops of CuSO₄ solution speed up the reaction." },
        { title: "Collection", body: "Over water, or by upward delivery (downward displacement of air), since H₂ is lighter than air." }
      ]},

      { heading: "Carbon Dioxide", type: "cards", items: [
        { title: "Reaction", body: "CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂. Marble chips and dilute hydrochloric acid. No heat." },
        { title: "Why not sulphuric acid?", body: "It forms insoluble CaSO₄ that coats the marble and stops the reaction." },
        { title: "Washing and drying", body: "Wash with water or NaHCO₃ solution to remove HCl spray. Dry with conc. H₂SO₄ or anhydrous CaCl₂." },
        { title: "Collection", body: "Downward delivery (upward displacement of air). It is denser than air. Can also be collected over water, but some dissolves." }
      ]},

      { heading: "Ammonia", type: "cards", items: [
        { title: "Reaction", body: "2NH₄Cl + Ca(OH)₂ → CaCl₂ + 2H₂O + 2NH₃. Heat a mixture of ammonium chloride and calcium hydroxide." },
        { title: "Drying", body: "Quicklime (CaO) or soda lime. NOT conc. H₂SO₄, CaCl₂ or P₄O₁₀, which react with ammonia." },
        { title: "Collection", body: "Upward delivery (downward displacement of air). It is lighter than air and extremely soluble in water, so NOT over water." }
      ]},

      { heading: "Chlorine and Hydrogen Chloride", type: "cards", items: [
        { title: "Chlorine", body: "MnO₂ + 4HCl → MnCl₂ + 2H₂O + Cl₂. Heat manganese(IV) oxide with conc. HCl. Alternatively KMnO₄ + conc. HCl at room temperature." },
        { title: "Chlorine purification", body: "Wash with water to remove HCl, then dry with conc. H₂SO₄." },
        { title: "Chlorine collection", body: "Downward delivery (denser than air). Do it in a fume cupboard because it is poisonous." },
        { title: "Hydrogen chloride", body: "NaCl + H₂SO₄ → NaHSO₄ + HCl. Heat sodium chloride with conc. sulphuric acid." },
        { title: "HCl drying and collection", body: "Dry with conc. H₂SO₄. Collect by downward delivery. NOT over water because it is extremely soluble." }
      ]},

      { heading: "Sulphur Dioxide, Nitrogen Oxides and H₂S", type: "cards", items: [
        { title: "Sulphur dioxide", body: "Na₂SO₃ + 2HCl → 2NaCl + H₂O + SO₂, or Cu + 2H₂SO₄ (conc.) → CuSO₄ + SO₂ + 2H₂O (heat). Dry with conc. H₂SO₄. Collect by downward delivery." },
        { title: "Nitrogen dioxide", body: "Cu + 4HNO₃ (conc.) → Cu(NO₃)₂ + 2NO₂ + 2H₂O. Brown gas. Collect by downward delivery." },
        { title: "Nitrogen monoxide", body: "3Cu + 8HNO₃ (dilute) → 3Cu(NO₃)₂ + 2NO + 4H₂O. Collect over water (it is insoluble)." },
        { title: "Hydrogen sulphide", body: "FeS + 2HCl → FeCl₂ + H₂S. Collect by downward delivery. Poisonous, so use a fume cupboard." },
        { title: "Ethyne", body: "CaC₂ + 2H₂O → Ca(OH)₂ + C₂H₂. Collect over water." },
        { title: "Ethene", body: "Heat ethanol with excess conc. H₂SO₄ at about 170°C. Collect over water." }
      ]},

      { heading: "Watch Out!", type: "warning", items: [
        "Do not use dilute H₂SO₄ with marble for CO₂, as the insoluble CaSO₄ coating stops the reaction.",
        "Do not dry ammonia with conc. H₂SO₄, CaCl₂ or P₄O₁₀.",
        "Cl₂, HCl, SO₂, NO₂ and H₂S are poisonous: use a fume cupboard.",
        "Dilute HNO₃ with copper gives NO, but conc. HNO₃ gives brown NO₂.",
        "Do not mix up cold and hot: H₂O₂ needs no heat but KClO₃ needs heat."
      ]},

      { heading: "Quick Tip", type: "tip",
        content: "Think of each gas as three decisions: (1) which reagents, (2) is heat needed, (3) how to dry and collect. Heat is needed for: O₂ from KClO₃, NH₃, Cl₂ from MnO₂, HCl, and SO₂ from copper. No heat is needed for H₂, CO₂ and H₂S." }
    ]
  },

  // ==========================================
  // CHEMISTRY — SOLUTIONS & TITRATION
  // ==========================================
  "Solutions & Titration": {
    subject: "Chemistry",
    title: "Solutions & Titration — Method, Indicators and Calculations",
    icon: "🧴",
    estimatedTime: "5 min read",
    sections: [
      { heading: "What is Titration?", type: "text",
        content: "Titration finds the unknown concentration of one solution by reacting it exactly with a solution of known concentration (a standard solution). The point where the reaction is just complete is the END POINT, shown by an indicator." },

      { heading: "Making a Standard Solution", type: "steps", items: [
        "Calculate the mass of solute needed: mass = concentration × volume (dm³) × molar mass.",
        "Weigh the solid accurately in a weighing bottle.",
        "Dissolve it in a small amount of distilled water in a beaker.",
        "Transfer to a volumetric flask, rinsing the beaker into the flask.",
        "Add distilled water up to the mark. Stopper and invert to mix."
      ]},

      { heading: "Choice of Indicator", type: "cards", items: [
        { title: "Strong acid + strong base", body: "Any indicator works: methyl orange or phenolphthalein." },
        { title: "Strong acid + weak base", body: "Use METHYL ORANGE (red to yellow). Example: HCl with ammonia." },
        { title: "Weak acid + strong base", body: "Use PHENOLPHTHALEIN (colourless to pink). Example: ethanoic acid with NaOH." },
        { title: "Weak acid + weak base", body: "No suitable indicator." }
      ]},

      { heading: "Worked Example", type: "steps", items: [
        "25.0 cm³ of 0.05 M Na₂CO₃ is titrated with HCl. The average titre is 20.0 cm³. Find the concentration of the acid.",
        "Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂.",
        "Moles Na₂CO₃ = 0.05 × 0.025 = 0.00125 mol.",
        "Moles HCl = 2 × 0.00125 = 0.00250 mol.",
        "Concentration of HCl = 0.00250 ÷ 0.0200 = 0.125 mol/dm³."
      ]},

      { heading: "Handling Results", type: "cards", items: [
        { title: "Titre", body: "The volume run from the burette to reach the end point." },
        { title: "Concordant results", body: "Two or more titres within 0.10 cm³ of each other." },
        { title: "Mean titre", body: "Average only the concordant titres. Do not include the rough trial." },
        { title: "Rough titration", body: "A quick first run to find the approximate end point. Then repeat slowly, adding drop by drop near the end." },
        { title: "Reading the burette", body: "Read at eye level at the bottom of the meniscus." }
      ]},

      { heading: "Sources of Error", type: "cards", items: [
        { title: "Air bubble in the burette tip", body: "Gives a falsely large titre." },
        { title: "Overshooting the end point", body: "Gives a falsely large titre." },
        { title: "Rinsing the pipette with water", body: "Dilutes the solution and gives a falsely low amount of solute." },
        { title: "Rinsing the conical flask with water", body: "Is fine, because it does not change the moles of solute." },
        { title: "Too much indicator", body: "Indicators are weak acids or bases and can affect the result." }
      ]},

      { heading: "Watch Out!", type: "warning", items: [
        "Rinse the burette with the solution it will hold, and the pipette with the solution it will measure.",
        "Rinsing the conical flask with distilled water is acceptable.",
        "Average ONLY the concordant titres.",
        "Check the mole ratio from the balanced equation before calculating."
      ]},

      { heading: "Quick Tip", type: "tip",
        content: "Choose the indicator by the strengths: strong acid with weak base uses methyl orange, weak acid with strong base uses phenolphthalein. For calculations: moles of known solution, mole ratio, moles of unknown, then concentration." }
    ]
  },

  // ==========================================
  // CHEMISTRY — LABORATORY COLLECTION OF GASES
  // ==========================================
  "Laboratory Collection of Gases": {
    subject: "Chemistry",
    title: "Laboratory Collection of Gases — Which Method to Use",
    icon: "🏺",
    estimatedTime: "4 min read",
    sections: [
      { heading: "The Three Methods", type: "cards", items: [
        { title: "Over water", body: "For gases that are INSOLUBLE or only slightly soluble in water. Gas bubbles up and pushes water out of an inverted jar." },
        { title: "Downward delivery (upward displacement of air)", body: "For gases DENSER than air. The gas sinks and pushes air upward out of the jar, which is held upright." },
        { title: "Upward delivery (downward displacement of air)", body: "For gases LIGHTER than air. The gas rises and pushes air downward out of an inverted jar." }
      ]},

      { heading: "Gases and Their Methods", type: "cards", items: [
        { title: "Over water", body: "H₂, O₂, N₂, CO, NO, CH₄, C₂H₂, C₂H₄ (all insoluble). CO₂ can also be collected over water, but some dissolves." },
        { title: "Downward delivery", body: "CO₂, Cl₂, HCl, SO₂, NO₂, H₂S (denser than air). HCl, SO₂ and Cl₂ are also quite soluble." },
        { title: "Upward delivery", body: "NH₃ and H₂ (lighter than air)." },
        { title: "Gas syringe", body: "Used when you need to MEASURE the volume of gas as well as collect it." },
        { title: "Over mercury", body: "For gases that are soluble in water but that must be kept dry and do not react with mercury." }
      ]},

      { heading: "How to Decide", type: "steps", items: [
        "Ask: is the gas soluble in water? If it is very soluble (NH₃, HCl, SO₂), do NOT use water.",
        "If it is insoluble, collect over water. This is the simplest method and shows when the jar is full.",
        "If soluble, compare its density with air. Air has an average molar mass of about 29.",
        "Molar mass above 29: heavier, so use downward delivery (jar upright). Molar mass below 29: lighter, so use upward delivery (jar inverted).",
        "Check: CO₂ (44) heavier, Cl₂ (71) heavier, SO₂ (64) heavier, NH₃ (17) lighter, H₂ (2) lighter, CH₄ (16) lighter."
      ]},

      { heading: "Collection Setup Tips", type: "cards", items: [
        { title: "Delivery tube position", body: "For downward delivery the tube reaches near the BOTTOM of the jar. For upward delivery it reaches near the TOP of the inverted jar." },
        { title: "Over water", body: "Wait a little before collecting so the air in the apparatus is flushed out first." },
        { title: "Suck-back", body: "When heating, remove the delivery tube from the water BEFORE removing the heat. Otherwise water is sucked back and cracks the hot tube." },
        { title: "Poisonous gases", body: "Collect in a fume cupboard." },
        { title: "Gas tests", body: "Test each gas once collected: H₂ pop, O₂ relights a glowing splint, CO₂ turns limewater milky." }
      ]},

      { heading: "Watch Out!", type: "warning", items: [
        "NH₃, HCl and SO₂ are very soluble. Never collect them over water.",
        "Ammonia is LIGHTER than air, so it needs upward delivery, unlike HCl, which is heavier.",
        "Always lift the delivery tube out of the water before removing the heat.",
        "CO₂ is denser than air but slightly soluble, so downward delivery is better than collecting over water."
      ]},

      { heading: "Quick Tip", type: "tip",
        content: "Memory aid: soluble gases (NH₃, HCl, SO₂) cannot go over water. Lighter than air (NH₃, H₂, CH₄) goes up, so jar inverted. Heavier than air (CO₂, Cl₂, SO₂, HCl, NO₂) goes down, so jar upright." }
    ]
  },

  // ==========================================
  // CHEMISTRY — CHEMICAL CHANGES
  // ==========================================
  "Chemical Changes": {
    subject: "Chemistry",
    title: "Chemical Changes — Types of Reactions and Signs",
    icon: "🔥",
    estimatedTime: "4 min read",
    sections: [
      { heading: "Physical vs Chemical Change", type: "cards", items: [
        { title: "Physical change", body: "NO new substance forms. Usually reversible. Examples: melting, boiling, dissolving salt, breaking glass, magnetising iron." },
        { title: "Chemical change", body: "A NEW substance forms with different properties. Usually hard to reverse. Examples: burning, rusting, cooking, fermentation, electrolysis." },
        { title: "Signs of a chemical change", body: "Colour change, gas given off, precipitate formed, heat or light produced, new smell." }
      ]},

      { heading: "Types of Chemical Reaction", type: "cards", items: [
        { title: "Combination (synthesis)", body: "Two or more substances join. 2Mg + O₂ → 2MgO." },
        { title: "Decomposition", body: "One substance breaks into two or more. CaCO₃ → CaO + CO₂." },
        { title: "Displacement", body: "A more reactive element replaces a less reactive one. Zn + CuSO₄ → ZnSO₄ + Cu." },
        { title: "Double decomposition", body: "Two compounds swap partners. AgNO₃ + NaCl → AgCl + NaNO₃." },
        { title: "Neutralisation", body: "Acid + base → salt + water." },
        { title: "Redox", body: "Electron transfer, with one species oxidised and another reduced." },
        { title: "Precipitation", body: "An insoluble solid forms when two solutions are mixed." }
      ]},

      { heading: "Exothermic and Endothermic", type: "cards", items: [
        { title: "Exothermic", body: "Releases heat. ΔH is NEGATIVE and the surroundings warm up. Examples: burning, neutralisation, rusting, Na + water." },
        { title: "Endothermic", body: "Absorbs heat. ΔH is POSITIVE and the surroundings cool down. Examples: photosynthesis, thermal decomposition of CaCO₃, dissolving NH₄NO₃." }
      ]},

      { heading: "Reversible Reactions", type: "cards", items: [
        { title: "Hydrated copper(II) sulphate", body: "CuSO₄·5H₂O ⇌ CuSO₄ + 5H₂O. Blue on heating turns white. Adding water turns it blue again." },
        { title: "Ammonium chloride", body: "NH₄Cl ⇌ NH₃ + HCl. It breaks into two gases on heating, which recombine on cooling. This is a reversible CHEMICAL change that looks like sublimation." },
        { title: "Haber process", body: "N₂ + 3H₂ ⇌ 2NH₃." },
        { title: "Equilibrium", body: "Reached in a closed system when forward and backward rates are equal." }
      ]},

      { heading: "Colour Changes to Know", type: "cards", items: [
        { title: "Green CuCO₃ on heating", body: "Turns BLACK as CuO forms and CO₂ is given off." },
        { title: "Yellow-when-hot, white-when-cold ZnO", body: "Zinc oxide is yellow when hot and white when cold. This is a reversible change." },
        { title: "Red-brown Fe₂O₃", body: "Rust and haematite." },
        { title: "Lead(II) nitrate on heating", body: "Gives brown NO₂ and yellow PbO." }
      ]},

      { heading: "Watch Out!", type: "warning", items: [
        "Dissolving salt in water is usually a PHYSICAL change, because evaporation recovers the salt.",
        "Burning is always a chemical change.",
        "Ammonium chloride heating looks like sublimation but it is a reversible chemical reaction.",
        "Exothermic does NOT mean the reaction happens fast. It means heat is released."
      ]},

      { heading: "Quick Tip", type: "tip",
        content: "Ask one question: has a new substance formed? If yes, it is a chemical change. Look for gas bubbles, colour change, precipitate or heat. For reaction type, look at the pattern: A + B → AB (combination), AB → A + B (decomposition), A + BC → AC + B (displacement)." }
    ]
  },

  // ==========================================
  // CHEMISTRY — PERIODIC TABLE & CARBON
  // ==========================================
  "Periodic Table & Carbon": {
    subject: "Chemistry",
    title: "Periodic Table & Carbon — Group 14 and Carbon Compounds",
    icon: "◼️",
    estimatedTime: "4 min read",
    sections: [
      { heading: "Group 14 (Group IV)", type: "cards", items: [
        { title: "Members", body: "Carbon (C), Silicon (Si), Germanium (Ge), Tin (Sn), Lead (Pb). All have 4 outer electrons." },
        { title: "Trend down the group", body: "Metallic character INCREASES. C is a non-metal, Si and Ge are metalloids (semiconductors), Sn and Pb are metals." },
        { title: "Oxides", body: "CO₂ and SiO₂ are acidic. SnO and PbO are amphoteric." },
        { title: "Silicon", body: "Used in computer chips and glass. SiO₂ (silica or sand) is a giant covalent structure with a high melting point." }
      ]},

      { heading: "Why Carbon is Special", type: "cards", items: [
        { title: "Catenation", body: "Carbon atoms form long chains and rings with each other. This gives millions of organic compounds." },
        { title: "Four covalent bonds", body: "Single, double and triple bonds are all possible." },
        { title: "Allotropes", body: "Diamond (hard, insulator), graphite (soft, conducts), fullerene (C₆₀)." },
        { title: "Amorphous forms", body: "Charcoal, coke, soot and lampblack." }
      ]},

      { heading: "Carbon Dioxide", type: "cards", items: [
        { title: "Properties", body: "Colourless, denser than air, slightly soluble in water, giving weak carbonic acid. Does not support combustion." },
        { title: "Limewater test", body: "CO₂ + Ca(OH)₂ → CaCO₃ + H₂O (milky). Excess CO₂ makes it clear again: CaCO₃ + H₂O + CO₂ → Ca(HCO₃)₂." },
        { title: "With sodium hydroxide", body: "CO₂ + 2NaOH → Na₂CO₃ + H₂O. With excess CO₂ you get NaHCO₃." },
        { title: "Uses", body: "Fire extinguishers, fizzy drinks, dry ice for cooling." },
        { title: "Effect", body: "A greenhouse gas that contributes to global warming." }
      ]},

      { heading: "Carbon Monoxide", type: "cards", items: [
        { title: "Formation", body: "From INCOMPLETE combustion of carbon-containing fuels (poor oxygen supply)." },
        { title: "Danger", body: "Very poisonous. It binds to haemoglobin more strongly than oxygen. Colourless and odourless." },
        { title: "Properties", body: "A neutral oxide. A good reducing agent, used in the blast furnace." },
        { title: "Burns", body: "2CO + O₂ → 2CO₂ with a blue flame." }
      ]},

      { heading: "Carbonates", type: "cards", items: [
        { title: "Test", body: "Dilute acid releases CO₂ (fizzing, limewater milky)." },
        { title: "Heating", body: "Most carbonates → oxide + CO₂. Sodium and potassium carbonates do not decompose." },
        { title: "Hydrogencarbonates", body: "Decompose easily: 2NaHCO₃ → Na₂CO₃ + H₂O + CO₂." },
        { title: "Limestone", body: "CaCO₃ is used to make cement, lime and in iron extraction." }
      ]},

      { heading: "Watch Out!", type: "warning", items: [
        "CO is a NEUTRAL oxide while CO₂ is ACIDIC.",
        "Excess CO₂ turns milky limewater clear again.",
        "Graphite conducts electricity but diamond does not.",
        "Carbon monoxide comes from INCOMPLETE combustion, and CO₂ from COMPLETE combustion."
      ]},

      { heading: "Quick Tip", type: "tip",
        content: "Link carbon's story: four outer electrons give four bonds, which gives chains and millions of compounds. In Group 14 metallic character rises down the group. For gases: CO is toxic and neutral, CO₂ is acidic and gives milky limewater." }
    ]
  },

  // ==========================================
  // CHEMISTRY — PERIODIC TABLE & METALLURGY
  // ==========================================
  "Periodic Table & Metallurgy": {
    subject: "Chemistry",
    title: "Periodic Table & Metallurgy — Position, Reactivity and Extraction",
    icon: "🧭",
    estimatedTime: "4 min read",
    sections: [
      { heading: "Position Decides the Extraction Method", type: "text",
        content: "The more reactive a metal, the more strongly it holds on to its oxygen or other partner, so the harder it is to extract. Reactivity depends on how easily the metal loses its outer electrons, which depends on its position in the periodic table." },

      { heading: "Extraction Methods by Position", type: "cards", items: [
        { title: "Group 1 and Group 2 metals", body: "Na, K, Mg, Ca. Very reactive, so extracted by ELECTROLYSIS of the molten chloride (or other compound)." },
        { title: "Aluminium (Group 13)", body: "Extracted by ELECTROLYSIS of molten alumina in cryolite." },
        { title: "Transition metals Fe, Zn, Pb, Sn", body: "Extracted by REDUCTION of the oxide with carbon or carbon monoxide." },
        { title: "Cu, Ag, Au, Pt", body: "Very low reactivity. Often found NATIVE or extracted by simple heating." },
        { title: "Rule", body: "The higher the metal in the reactivity series, the more energy-expensive its extraction." }
      ]},

      { heading: "Trends in Metal Reactivity", type: "cards", items: [
        { title: "Down Group 1 and Group 2", body: "Reactivity INCREASES because the outer electron is further from the nucleus and is lost more easily." },
        { title: "Across Period 3", body: "Reactivity of metals DECREASES from Na to Mg to Al." },
        { title: "Electropositivity", body: "The tendency to form positive ions. It follows the reactivity series." },
        { title: "Ion charge", body: "Group 1 forms 1+, Group 2 forms 2+, and Al forms 3+." }
      ]},

      { heading: "Key Extraction Equations", type: "cards", items: [
        { title: "Iron", body: "Fe₂O₃ + 3CO → 2Fe + 3CO₂ (in the blast furnace)." },
        { title: "Zinc", body: "Roast ZnS: 2ZnS + 3O₂ → 2ZnO + 2SO₂. Then ZnO + C → Zn + CO." },
        { title: "Aluminium", body: "Cathode: Al³⁺ + 3e⁻ → Al. Anode: 2O²⁻ → O₂ + 4e⁻." },
        { title: "Sodium", body: "Cathode: Na⁺ + e⁻ → Na. Anode: 2Cl⁻ → Cl₂ + 2e⁻ (Down's cell)." },
        { title: "Copper (purification)", body: "Impure copper anode dissolves and pure copper deposits on the cathode." }
      ]},

      { heading: "Non-Metals by Position", type: "cards", items: [
        { title: "Chlorine", body: "Extracted by electrolysis of concentrated brine." },
        { title: "Bromine", body: "Obtained from sea water by displacement with chlorine: Cl₂ + 2Br⁻ → 2Cl⁻ + Br₂." },
        { title: "Sulphur", body: "Obtained by the Frasch process (superheated water forced underground) from underground deposits." }
      ]},

      { heading: "Transition Metals in Metallurgy", type: "cards", items: [
        { title: "Properties", body: "Hard, dense, high melting points, strong, variable oxidation states, form coloured compounds and good catalysts." },
        { title: "Uses", body: "Iron for steel, copper for wiring, zinc for galvanising, and nickel, chromium and manganese in alloys." }
      ]},

      { heading: "Watch Out!", type: "warning", items: [
        "Aluminium is in the top part of the reactivity series, so carbon cannot extract it.",
        "Roast sulphide ores to oxides FIRST, before reducing with carbon.",
        "Electrolysis is used for reactive metals and needs a lot of electricity.",
        "Copper may be found native in nature, but zinc and iron are not."
      ]},

      { heading: "Quick Tip", type: "tip",
        content: "Use the reactivity ladder to predict: Group 1, Group 2 and aluminium = electrolysis. Zn, Fe, Pb = carbon reduction. Cu, Ag, Au = heat or native. A sulphide ore is roasted first, a carbonate is calcined first." }
    ]
  },

  // ==========================================
  // CHEMISTRY — LABORATORY DESICCANTS
  // ==========================================
  "Laboratory Desiccants": {
    subject: "Chemistry",
    title: "Laboratory Desiccants — Drying Agents and Which Gas to Dry",
    icon: "🧊",
    estimatedTime: "3 min read",
    sections: [
      { heading: "What is a Desiccant?", type: "text",
        content: "A desiccant (drying agent) removes water or water vapour. The key rule: the drying agent must NOT react with the gas being dried. Acidic drying agents cannot dry basic gases, and basic drying agents cannot dry acidic gases." },

      { heading: "Common Drying Agents", type: "cards", items: [
        { title: "Concentrated sulphuric acid (H₂SO₄)", body: "Acidic. Dries H₂, O₂, N₂, CO₂, Cl₂, HCl, SO₂, NO₂. NOT for NH₃ (it reacts) and NOT for H₂S (it is oxidised)." },
        { title: "Anhydrous calcium chloride (CaCl₂)", body: "Dries most gases. NOT for NH₃, because it forms CaCl₂·8NH₃." },
        { title: "Phosphorus(V) oxide (P₄O₁₀)", body: "Very efficient and acidic. NOT for NH₃." },
        { title: "Quicklime (CaO)", body: "Basic. Dries NH₃. NOT for acidic gases such as CO₂, SO₂, HCl and Cl₂." },
        { title: "Soda lime (NaOH + CaO)", body: "Basic. Dries NH₃. NOT for acidic gases." },
        { title: "Silica gel", body: "A general drying agent for desiccators. Often has blue cobalt chloride indicator that turns pink when wet." },
        { title: "Anhydrous CuSO₄", body: "Mainly a TEST for water (white to blue), not an efficient drying agent." }
      ]},

      { heading: "Gas-by-Gas Quick Guide", type: "cards", items: [
        { title: "Ammonia (NH₃)", body: "Dry with QUICKLIME (CaO) or soda lime only." },
        { title: "Hydrogen chloride (HCl)", body: "Dry with conc. H₂SO₄. NOT with CaO or soda lime." },
        { title: "Carbon dioxide (CO₂)", body: "Dry with conc. H₂SO₄ or CaCl₂. NOT with CaO or soda lime, since they absorb CO₂." },
        { title: "Chlorine (Cl₂)", body: "Dry with conc. H₂SO₄ or CaCl₂." },
        { title: "Hydrogen sulphide (H₂S)", body: "Dry with CaCl₂ or P₄O₁₀. NOT with conc. H₂SO₄, which oxidises it." },
        { title: "Hydrogen, oxygen, nitrogen", body: "Most drying agents work." }
      ]},

      { heading: "Related Terms", type: "cards", items: [
        { title: "Hygroscopic", body: "Absorbs water from air (conc. H₂SO₄, CaCl₂, silica gel)." },
        { title: "Deliquescent", body: "Absorbs so much water that it dissolves (NaOH, CaCl₂)." },
        { title: "Efflorescent", body: "Loses water of crystallisation to the air." },
        { title: "Desiccator", body: "A sealed container with a drying agent used to keep substances dry or to cool them without taking up moisture." },
        { title: "Drying liquids", body: "Anhydrous MgSO₄ or Na₂SO₄ is used to dry organic liquids." }
      ]},

      { heading: "Watch Out!", type: "warning", items: [
        "Ammonia is the key exception: it is basic, so use only a basic drying agent (CaO or soda lime).",
        "Do not use acidic drying agents (conc. H₂SO₄, P₄O₁₀) for ammonia.",
        "Do not use basic drying agents (CaO, soda lime) for CO₂, SO₂, HCl or Cl₂.",
        "Conc. H₂SO₄ is not suitable for H₂S because it oxidises it to sulphur."
      ]},

      { heading: "Quick Tip", type: "tip",
        content: "Match like with like: acidic gases with acidic drying agents (conc. H₂SO₄), basic gas (NH₃) with basic drying agents (CaO). Always ask: will the drying agent react with the gas? If yes, choose another." }
    ]
  },

  // ==========================================
  // CHEMISTRY — SOLUTIONS & PHYSICAL STATES
  // ==========================================
  "Solutions & Physical States": {
    subject: "Chemistry",
    title: "Solutions & Physical States — Mixtures, Colloids and Colligative Effects",
    icon: "🥛",
    estimatedTime: "4 min read",
    sections: [
      { heading: "Solutions, Suspensions and Colloids", type: "cards", items: [
        { title: "True solution", body: "Particles are very small (under 1 nm). Transparent, does not settle, cannot be filtered out. Example: salt in water." },
        { title: "Suspension", body: "Large particles (over 1000 nm). Cloudy, settles on standing, CAN be filtered. Example: muddy water, chalk in water." },
        { title: "Colloid", body: "Medium particles (1 to 1000 nm). Does not settle, cannot be filtered, shows the TYNDALL EFFECT. Examples: milk, fog, smoke, jelly, blood, mayonnaise." },
        { title: "Tyndall effect", body: "A beam of light is scattered and visible in a colloid, but not in a true solution." }
      ]},

      { heading: "Types of Colloid", type: "cards", items: [
        { title: "Sol", body: "Solid in liquid (paint, ink)." },
        { title: "Gel", body: "Liquid in solid (jelly, cheese)." },
        { title: "Emulsion", body: "Liquid in liquid (milk, mayonnaise). An emulsifier keeps them mixed." },
        { title: "Foam", body: "Gas in liquid or solid (whipped cream, shaving foam)." },
        { title: "Aerosol", body: "Solid or liquid in gas (smoke, fog, clouds)." }
      ]},

      { heading: "Dissolving Gases", type: "cards", items: [
        { title: "Effect of temperature", body: "Gas solubility DECREASES as temperature rises. Warm drinks lose fizz faster." },
        { title: "Effect of pressure", body: "Gas solubility INCREASES with pressure (Henry's law). Fizzy drinks are bottled under pressure." },
        { title: "Very soluble gases", body: "NH₃, HCl (they react with or ionise in water)." },
        { title: "Slightly soluble gases", body: "O₂, N₂, H₂, CO₂ (fish rely on dissolved oxygen)." }
      ]},

      { heading: "Effect of Dissolved Solute (Colligative Effects)", type: "cards", items: [
        { title: "Boiling point elevation", body: "A dissolved solute RAISES the boiling point of the solvent. Salty water boils above 100°C." },
        { title: "Freezing point depression", body: "A dissolved solute LOWERS the freezing point. Salt on icy roads melts ice. Antifreeze protects car engines." },
        { title: "Vapour pressure lowering", body: "The solute lowers the vapour pressure of the solvent." },
        { title: "More particles", body: "The more solute particles dissolved, the bigger the effect. NaCl gives two particles per formula unit, so it has twice the effect of an equal amount of sugar." }
      ]},

      { heading: "Purity and Physical States", type: "cards", items: [
        { title: "Pure substance", body: "Has a SHARP melting point and boiling point." },
        { title: "Impure substance", body: "Melts over a RANGE of temperatures, lower than the pure value, and boils at a higher temperature." },
        { title: "Test for purity", body: "Measure the melting or boiling point." },
        { title: "Chromatography", body: "A single spot shows a pure substance. Multiple spots show a mixture." }
      ]},

      { heading: "Watch Out!", type: "warning", items: [
        "Colloids cannot be filtered out, but suspensions can.",
        "Dissolved solutes RAISE the boiling point but LOWER the freezing point.",
        "Gas solubility falls with temperature, the opposite of most solids.",
        "Impure solids melt at a LOWER temperature over a range, not higher."
      ]},

      { heading: "Quick Tip", type: "tip",
        content: "Test the mixture: settles and filters = suspension, scatters light and does not settle = colloid, clear and stable = true solution. For colligative effects remember 'salt up, salt down': boiling point goes UP, freezing point goes DOWN." }
    ]
  },

  // ==========================================
  // CHEMISTRY — ATOMIC THEORY
  // ==========================================
  "Atomic Theory": {
    subject: "Chemistry",
    title: "Atomic Theory — Models, Particles and Electron Configuration",
    icon: "⚛️",
    estimatedTime: "5 min read",
    sections: [
      { heading: "Development of the Atomic Model", type: "cards", items: [
        { title: "Dalton (1808)", body: "Atoms are tiny, solid, indivisible spheres. Atoms of one element are identical. Compounds form by atoms combining in whole-number ratios. Later corrected: atoms ARE divisible and isotopes exist." },
        { title: "Thomson (1897)", body: "Discovered the ELECTRON using cathode rays. 'Plum pudding' model: electrons scattered in a positive sphere." },
        { title: "Rutherford (1911)", body: "Gold foil experiment. Most alpha particles passed straight through, a few were deflected, and very few bounced back. Conclusion: a tiny, dense, positive NUCLEUS surrounded by mostly empty space." },
        { title: "Bohr (1913)", body: "Electrons orbit the nucleus in fixed energy levels (shells). Energy is emitted or absorbed when an electron jumps between levels." },
        { title: "Quantum model", body: "Electrons are found in ORBITALS, regions where there is a high probability of finding an electron." },
        { title: "Chadwick (1932)", body: "Discovered the NEUTRON." }
      ]},

      { heading: "Sub-atomic Particles", type: "cards", items: [
        { title: "Proton", body: "Charge +1. Relative mass 1. In the nucleus." },
        { title: "Neutron", body: "Charge 0. Relative mass 1. In the nucleus." },
        { title: "Electron", body: "Charge −1. Relative mass about 1/1840. Outside the nucleus." },
        { title: "Atomic number (Z)", body: "Number of protons. Identifies the element." },
        { title: "Mass number (A)", body: "Protons + neutrons. Neutrons = A − Z." }
      ]},

      { heading: "Isotopes and Relative Atomic Mass", type: "steps", items: [
        "Isotopes are atoms of the same element with the SAME protons but DIFFERENT neutrons.",
        "Relative atomic mass = (sum of isotopic mass × percentage abundance) ÷ 100.",
        "Chlorine: 75% ³⁵Cl and 25% ³⁷Cl. (75 × 35 + 25 × 37) ÷ 100 = (2625 + 925) ÷ 100 = 35.5.",
        "Boron: 20% ¹⁰B and 80% ¹¹B. (20 × 10 + 80 × 11) ÷ 100 = 10.8.",
        "Isotopes have the SAME chemical properties but slightly different physical properties (such as density)."
      ]},

      { heading: "Electron Configuration Rules", type: "cards", items: [
        { title: "Shell capacity", body: "Maximum electrons in shell n = 2n². Shell 1 holds 2, shell 2 holds 8, shell 3 holds 18." },
        { title: "Subshell capacity", body: "s holds 2, p holds 6, d holds 10, f holds 14." },
        { title: "Aufbau principle", body: "Fill the lowest energy subshell first. Order: 1s 2s 2p 3s 3p 4s 3d 4p." },
        { title: "Pauli exclusion principle", body: "Each orbital holds a maximum of 2 electrons, with OPPOSITE spins." },
        { title: "Hund's rule", body: "Electrons fill orbitals of equal energy singly before pairing up." }
      ]},

      { heading: "Configuration Examples", type: "cards", items: [
        { title: "Sodium (Z = 11)", body: "1s² 2s² 2p⁶ 3s¹ (or 2, 8, 1)." },
        { title: "Chlorine (Z = 17)", body: "1s² 2s² 2p⁶ 3s² 3p⁵ (or 2, 8, 7)." },
        { title: "Iron (Z = 26)", body: "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶." },
        { title: "Chromium (Z = 24)", body: "[Ar] 3d⁵ 4s¹. An exception: a half-filled d subshell is extra stable." },
        { title: "Copper (Z = 29)", body: "[Ar] 3d¹⁰ 4s¹. An exception: a full d subshell is extra stable." },
        { title: "Ions", body: "Na⁺ is 2, 8 (loses one electron). Cl⁻ is 2, 8, 8 (gains one electron)." }
      ]},

      { heading: "Orbital Shapes", type: "cards", items: [
        { title: "s orbital", body: "Spherical. One per subshell." },
        { title: "p orbitals", body: "Dumb-bell shaped. Three per subshell (px, py, pz)." },
        { title: "d and f", body: "Five d orbitals and seven f orbitals per subshell." }
      ]},

      { heading: "Watch Out!", type: "warning", items: [
        "Isotopes differ in neutrons, NOT in protons or electrons.",
        "In transition metals, 4s fills BEFORE 3d, but 4s electrons are lost FIRST when forming ions.",
        "Cr and Cu are exceptions: Cr is 3d⁵ 4s¹ and Cu is 3d¹⁰ 4s¹.",
        "Atomic number is protons, mass number is protons + neutrons.",
        "Relative atomic mass is a weighted AVERAGE, which is why it is not a whole number."
      ]},

      { heading: "Quick Tip", type: "tip",
        content: "For configuration, fill in the order 1s 2s 2p 3s 3p 4s 3d 4p and count electrons until you reach Z. For ions, adjust the electron count: subtract for positive ions, add for negative ions. For isotopes, use the weighted average." }
    ]
  },

}

export default CHEMISTRY_EXTRA_GUIDES_2
