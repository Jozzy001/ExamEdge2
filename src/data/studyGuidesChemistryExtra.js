// EXAMEDGENG — CHEMISTRY STUDY GUIDES (EXTRA) — PART 1 OF 2
// Guides for Chemistry topics that did not have one yet:
//   Qualitative Analysis, Applied Chemistry, Gases & Non-Metals, Inorganic Chemistry,
//   Solutions & Solubility, Chemical Kinetics, Solutions & Volumetric Analysis,
//   Kinetic Theory, Equations & Balancing, Periodic Table & Allotropy,
//   Gases & Balancing, Periodic Table, Water Chemistry, Stoichiometry & Titration,
//   Gases & Physical States, Oxidation Numbers, Metallurgy
// Keys match the topic names in the question bank exactly.
//
// HOW TO USE:
// 1. Save this file as src/data/studyGuidesChemistryExtra.js
// 2. In src/data/studyGuides.js add at the top:
//      import CHEMISTRY_EXTRA_GUIDES from "./studyGuidesChemistryExtra"
// 3. At the very end of the STUDY_GUIDES object (next to ...BIOLOGY_EXTRA_GUIDES), add:
//      ...CHEMISTRY_EXTRA_GUIDES,

const CHEMISTRY_EXTRA_GUIDES = {

  // ==========================================
  // CHEMISTRY — QUALITATIVE ANALYSIS
  // ==========================================
  "Qualitative Analysis": {
    subject: "Chemistry",
    title: "Qualitative Analysis — Identifying Ions and Gases",
    icon: "🔎",
    estimatedTime: "5 min read",
    sections: [
      { heading: "What is Tested", type: "text",
        content: "Qualitative analysis identifies WHAT is present in a sample. Learn three tables: cation tests (with NaOH and NH3 solutions), anion tests, and gas tests. Most questions ask for the colour of a precipitate, whether it dissolves in excess, or which reagent gives a test." },

      { heading: "Cations with Sodium Hydroxide (NaOH)", type: "cards", items: [
        { title: "Ca²⁺", body: "White precipitate. INSOLUBLE in excess NaOH." },
        { title: "Mg²⁺", body: "White precipitate. INSOLUBLE in excess." },
        { title: "Al³⁺", body: "White precipitate. DISSOLVES in excess NaOH (amphoteric)." },
        { title: "Zn²⁺", body: "White precipitate. DISSOLVES in excess NaOH." },
        { title: "Pb²⁺", body: "White precipitate. DISSOLVES in excess NaOH." },
        { title: "Cu²⁺", body: "BLUE precipitate. Insoluble in excess." },
        { title: "Fe²⁺", body: "DIRTY GREEN precipitate. Insoluble in excess." },
        { title: "Fe³⁺", body: "REDDISH-BROWN precipitate. Insoluble in excess." },
        { title: "NH₄⁺", body: "No precipitate. Warm gently: ammonia gas is given off (turns damp red litmus blue)." }
      ]},

      { heading: "Cations with Ammonia Solution (NH₃)", type: "cards", items: [
        { title: "Zn²⁺", body: "White precipitate that DISSOLVES in excess ammonia." },
        { title: "Al³⁺ and Pb²⁺", body: "White precipitate, INSOLUBLE in excess ammonia." },
        { title: "Cu²⁺", body: "Pale blue precipitate that dissolves in excess to give a DEEP BLUE solution." },
        { title: "Fe²⁺ and Fe³⁺", body: "Dirty green and reddish-brown precipitates. Insoluble in excess." },
        { title: "Key separator", body: "Zn²⁺ and Al³⁺ both dissolve in excess NaOH, but only Zn²⁺ dissolves in excess NH₃." }
      ]},

      { heading: "Anion Tests", type: "cards", items: [
        { title: "Cl⁻ (chloride)", body: "Add dilute HNO₃ then AgNO₃: WHITE precipitate, soluble in dilute NH₃." },
        { title: "Br⁻ (bromide)", body: "CREAM precipitate with AgNO₃, partly soluble in NH₃." },
        { title: "I⁻ (iodide)", body: "YELLOW precipitate with AgNO₃, insoluble in NH₃." },
        { title: "SO₄²⁻ (sulphate)", body: "Add dilute HCl then BaCl₂: WHITE precipitate of BaSO₄, insoluble in acid." },
        { title: "CO₃²⁻ (carbonate)", body: "Add dilute acid: fizzing; the gas turns limewater milky (CO₂)." },
        { title: "SO₃²⁻ (sulphite)", body: "Add dilute acid and warm: SO₂ gas turns acidified potassium dichromate from orange to green." },
        { title: "NO₃⁻ (nitrate)", body: "Brown ring test: add fresh FeSO₄ solution, then pour conc. H₂SO₄ carefully down the side. A BROWN RING forms at the junction." }
      ]},

      { heading: "Gas Tests", type: "cards", items: [
        { title: "Hydrogen (H₂)", body: "Burning splint gives a SQUEAKY POP." },
        { title: "Oxygen (O₂)", body: "Glowing splint RELIGHTS." },
        { title: "Carbon dioxide (CO₂)", body: "Turns limewater MILKY." },
        { title: "Ammonia (NH₃)", body: "Turns damp red litmus BLUE. Gives dense white fumes with HCl." },
        { title: "Chlorine (Cl₂)", body: "Turns damp blue litmus red, then BLEACHES it." },
        { title: "Sulphur dioxide (SO₂)", body: "Turns acidified K₂Cr₂O₇ from orange to GREEN." },
        { title: "Hydrogen sulphide (H₂S)", body: "Smell of rotten eggs. Turns lead(II) ethanoate paper BLACK." },
        { title: "Nitrogen dioxide (NO₂)", body: "Brown gas with a choking smell." }
      ]},

      { heading: "Flame Tests", type: "cards", items: [
        { title: "Na⁺", body: "Golden yellow." },
        { title: "K⁺", body: "Lilac (violet)." },
        { title: "Ca²⁺", body: "Brick red." },
        { title: "Cu²⁺", body: "Blue-green." },
        { title: "Li⁺", body: "Crimson red." },
        { title: "Ba²⁺", body: "Apple green." }
      ]},

      { heading: "Strategy", type: "steps", items: [
        "Note the colour and state of the unknown (blue solution suggests Cu²⁺, green suggests Fe²⁺).",
        "Add NaOH, drop by drop, then in excess. Record colour and whether it dissolves.",
        "Add NH₃ the same way to separate Zn²⁺ from Al³⁺ and Pb²⁺.",
        "Test for the anion separately with AgNO₃, BaCl₂ or dilute acid.",
        "Confirm any gas given off using the gas tests."
      ]},

      { heading: "Watch Out!", type: "warning", items: [
        "Al³⁺, Zn²⁺ and Pb²⁺ all give a white precipitate that dissolves in excess NaOH. Use NH₃ to tell them apart.",
        "Ca²⁺ gives a white precipitate with NaOH that does NOT dissolve in excess.",
        "For the chloride test, add dilute nitric acid first to remove carbonates, which would also give a precipitate.",
        "Do not use HCl before testing for chloride, and do not use H₂SO₄ before testing for sulphate.",
        "Fe²⁺ is dirty GREEN. Fe³⁺ is reddish-BROWN."
      ]},

      { heading: "Quick Tip", type: "tip",
        content: "Colour tells you a lot straight away: blue precipitate = Cu²⁺, dirty green = Fe²⁺, reddish-brown = Fe³⁺. White precipitates need the excess test: dissolves in excess NaOH means Al, Zn or Pb. Does not dissolve means Ca or Mg." }
    ]
  },

  // ==========================================
  // CHEMISTRY — APPLIED CHEMISTRY
  // ==========================================
  "Applied Chemistry": {
    subject: "Chemistry",
    title: "Applied Chemistry — Soaps, Fertilisers, Cement, Glass and Polymers",
    icon: "🏭",
    estimatedTime: "4 min read",
    sections: [
      { heading: "What is Tested", type: "text",
        content: "Applied chemistry links chemistry to everyday industry. Learn the raw materials, the main reaction and the product for soap, fertilisers, cement, glass, polymers, fermentation, and petroleum products." },

      { heading: "Soaps and Detergents", type: "cards", items: [
        { title: "Soap making (saponification)", body: "Fat or oil + NaOH (or KOH) → soap + GLYCEROL. Glycerol is the by-product. Salt (NaCl) is added to 'salt out' the soap." },
        { title: "Sodium soap vs potassium soap", body: "NaOH gives hard soap (bar soap). KOH gives soft soap (liquid soap)." },
        { title: "Soap in hard water", body: "Ca²⁺ and Mg²⁺ ions react with soap to form insoluble SCUM, so no lather forms." },
        { title: "Soapless detergents", body: "Made from petroleum. They do NOT form scum in hard water. Problem: some are not biodegradable and cause foaming in rivers." }
      ]},

      { heading: "Fertilisers", type: "cards", items: [
        { title: "NPK", body: "Plants need Nitrogen (N), Phosphorus (P) and Potassium (K). 'NPK 15-15-15' means equal percentages of each." },
        { title: "Nitrogen fertilisers", body: "Urea CO(NH₂)₂ (46% N), ammonium nitrate NH₄NO₃ (35% N), ammonium sulphate (NH₄)₂SO₄." },
        { title: "Phosphorus fertiliser", body: "Superphosphate, made by treating phosphate rock with sulphuric acid." },
        { title: "Potassium fertiliser", body: "Potassium chloride KCl or potassium nitrate KNO₃." },
        { title: "Problem", body: "Excess fertiliser washes into rivers and causes EUTROPHICATION (algal bloom, oxygen depletion, fish die)." }
      ]},

      { heading: "Cement and Glass", type: "cards", items: [
        { title: "Cement", body: "Limestone (CaCO₃) and clay are heated in a kiln to make clinker. Clinker is ground with a little gypsum (CaSO₄) to slow setting." },
        { title: "Glass", body: "Sand (SiO₂) + sodium carbonate + limestone (CaCO₃) heated to a high temperature. Cooling gives soda-lime glass." },
        { title: "Coloured glass", body: "Metal oxides are added. Cobalt gives blue, and iron gives green or brown." }
      ]},

      { heading: "Polymers", type: "cards", items: [
        { title: "Addition polymers", body: "Made from alkene monomers with no by-product. Ethene → polythene. Chloroethene → PVC. Phenylethene → polystyrene." },
        { title: "Condensation polymers", body: "Monomers join and lose a small molecule such as water. Examples: nylon, terylene (polyester), proteins." },
        { title: "Thermosetting plastics", body: "Do not soften on reheating. Example: Bakelite." },
        { title: "Natural polymers", body: "Starch, cellulose, proteins, rubber (from latex)." }
      ]},

      { heading: "Fermentation and Petroleum", type: "cards", items: [
        { title: "Fermentation", body: "C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂. Yeast enzyme (zymase) acts on glucose. Used for alcohol and bread." },
        { title: "Fractional distillation of petroleum", body: "Fractions from top (lowest boiling point) to bottom: refinery gas, petrol, naphtha, kerosene, diesel, lubricating oil, bitumen." },
        { title: "Cracking", body: "Breaking long-chain alkanes into shorter alkanes and alkenes using heat and a catalyst. Gives more petrol." },
        { title: "Hydrogenation of oils", body: "Vegetable oil + H₂ with a nickel catalyst gives margarine (hardened fat)." }
      ]},

      { heading: "Watch Out!", type: "warning", items: [
        "Glycerol is the by-product of soap making, not of fermentation.",
        "Soap forms scum in hard water. Soapless detergents do not.",
        "Addition polymerisation gives only the polymer. Condensation polymerisation also releases a small molecule.",
        "Cement is made from limestone and clay. Glass is made from sand, soda ash and limestone."
      ]},

      { heading: "Quick Tip", type: "tip",
        content: "Link each product to its raw materials: soap = fat + NaOH, cement = limestone + clay, glass = sand + Na₂CO₃ + CaCO₃, polythene = ethene, margarine = oil + H₂ with nickel. This one-line approach answers most applied chemistry questions." }
    ]
  },

  // ==========================================
  // CHEMISTRY — GASES & NON-METALS
  // ==========================================
  "Gases & Non-Metals": {
    subject: "Chemistry",
    title: "Gases & Non-Metals — Properties, Uses and Industrial Processes",
    icon: "💨",
    estimatedTime: "5 min read",
    sections: [
      { heading: "What is Tested", type: "text",
        content: "This topic covers the properties and uses of common gases and non-metals: oxygen, hydrogen, nitrogen, carbon dioxide, chlorine, ammonia, sulphur dioxide and hydrogen chloride, plus the industrial Haber and Contact processes." },

      { heading: "Properties of Common Gases", type: "cards", items: [
        { title: "Oxygen (O₂)", body: "Colourless, odourless, slightly soluble, supports combustion. Used in welding, respiration and steel making." },
        { title: "Hydrogen (H₂)", body: "Lightest gas, burns with a pop, insoluble. Used in the Haber process, margarine, and as a fuel." },
        { title: "Nitrogen (N₂)", body: "About 78% of air, very unreactive. Used for fertilisers and as an inert atmosphere." },
        { title: "Carbon dioxide (CO₂)", body: "Denser than air, turns limewater milky, slightly acidic. Used in fire extinguishers, fizzy drinks and dry ice." },
        { title: "Chlorine (Cl₂)", body: "Yellow-green, poisonous, bleaches damp litmus. Used for water purification, bleach and PVC." },
        { title: "Ammonia (NH₃)", body: "Colourless, pungent, very soluble, the only common alkaline gas. Used for fertilisers and cleaning." },
        { title: "Sulphur dioxide (SO₂)", body: "Choking gas, bleaches, causes acid rain. Used to make sulphuric acid and as a preservative." },
        { title: "Hydrogen chloride (HCl)", body: "Colourless, very soluble, gives white fumes with ammonia. Its solution is hydrochloric acid." }
      ]},

      { heading: "Haber Process (Ammonia)", type: "cards", items: [
        { title: "Equation", body: "N₂ + 3H₂ ⇌ 2NH₃ (exothermic)." },
        { title: "Conditions", body: "About 450°C, 200 atm, iron catalyst." },
        { title: "Why 450°C?", body: "A compromise: lower temperature gives a better yield but too slow a rate." },
        { title: "Uses of ammonia", body: "Fertilisers (ammonium nitrate, urea), nitric acid, explosives." }
      ]},

      { heading: "Contact Process (Sulphuric Acid)", type: "steps", items: [
        "Burn sulphur (or roast sulphide ores) to make SO₂: S + O₂ → SO₂.",
        "Oxidise SO₂ to SO₃: 2SO₂ + O₂ ⇌ 2SO₃, using a V₂O₅ catalyst at about 450°C.",
        "Dissolve SO₃ in concentrated H₂SO₄ to form oleum (H₂S₂O₇). SO₃ is NOT dissolved directly in water because that makes an acid mist.",
        "Dilute the oleum with water to get sulphuric acid."
      ]},

      { heading: "Concentrated Sulphuric and Nitric Acid", type: "cards", items: [
        { title: "Conc. H₂SO₄ as a dehydrating agent", body: "Removes water from sugar (turns black carbon) and from hydrated copper(II) sulphate (blue → white)." },
        { title: "Conc. H₂SO₄ as an oxidising agent", body: "Oxidises hot copper: Cu + 2H₂SO₄ → CuSO₄ + SO₂ + 2H₂O." },
        { title: "Nitric acid", body: "A strong oxidising agent. Copper with conc. HNO₃ gives brown NO₂. With dilute HNO₃ it gives NO." },
        { title: "Nitrogen cycle link", body: "Ostwald process: 4NH₃ + 5O₂ → 4NO + 6H₂O (platinum catalyst) is the first step to nitric acid." }
      ]},

      { heading: "Watch Out!", type: "warning", items: [
        "Ammonia is the only common ALKALINE gas. All the other gases listed are neutral or acidic.",
        "CO₂ turns limewater milky, but in EXCESS the milkiness clears (soluble calcium hydrogencarbonate forms).",
        "SO₃ is absorbed in conc. H₂SO₄, not water.",
        "Higher pressure favours more ammonia in the Haber process because there are fewer gas molecules on the right.",
        "Chlorine bleaches damp litmus; dry chlorine does not."
      ]},

      { heading: "Quick Tip", type: "tip",
        content: "Link each gas with its test: H₂ pop, O₂ relights splint, CO₂ limewater, NH₃ damp red litmus blue, Cl₂ bleaches litmus, SO₂ turns dichromate green. Remember Haber = iron catalyst and Contact = V₂O₅ catalyst." }
    ]
  },

  // ==========================================
  // CHEMISTRY — INORGANIC CHEMISTRY
  // ==========================================
  "Inorganic Chemistry": {
    subject: "Chemistry",
    title: "Inorganic Chemistry — Oxides, Metal Reactions and Key Compounds",
    icon: "🧱",
    estimatedTime: "5 min read",
    sections: [
      { heading: "What is Tested", type: "text",
        content: "Inorganic chemistry covers the reactions of metals and non-metals and their compounds. Focus on the nature of oxides, how metals react with water and acids, halogen reactions, and thermal decomposition of nitrates and carbonates." },

      { heading: "Nature of Oxides", type: "cards", items: [
        { title: "Basic oxides", body: "Metal oxides such as Na₂O, MgO, CaO, CuO. They react with acids to form a salt and water. Soluble ones form alkalis in water." },
        { title: "Acidic oxides", body: "Non-metal oxides such as CO₂, SO₂, SO₃, P₄O₁₀, NO₂. They react with bases to form salts. With water they form acids." },
        { title: "Amphoteric oxides", body: "Al₂O₃, ZnO, PbO. They react with BOTH acids and bases." },
        { title: "Neutral oxides", body: "CO, N₂O, H₂O. They do not react with acids or bases." },
        { title: "Across Period 3", body: "Oxides change from basic (Na₂O, MgO) to amphoteric (Al₂O₃) to acidic (SiO₂, P₄O₁₀, SO₂, Cl₂O₇)." }
      ]},

      { heading: "Reactions of Metals", type: "cards", items: [
        { title: "With cold water", body: "K, Na react violently, Ca reacts steadily. Products: metal hydroxide + hydrogen." },
        { title: "With steam", body: "Mg, Zn, Fe react with steam to give the metal oxide + hydrogen." },
        { title: "With dilute acids", body: "Metals above hydrogen in the reactivity series give a salt + hydrogen. Copper, silver and gold do NOT react." },
        { title: "Displacement", body: "A more reactive metal displaces a less reactive one from its salt solution. Zn + CuSO₄ → ZnSO₄ + Cu." },
        { title: "Reactivity series", body: "K, Na, Ca, Mg, Al, Zn, Fe, Pb, H, Cu, Ag, Au (most to least reactive)." }
      ]},

      { heading: "Thermal Decomposition", type: "cards", items: [
        { title: "Carbonates", body: "Most carbonates → metal oxide + CO₂. Group 1 carbonates (except lithium) do NOT decompose on ordinary heating." },
        { title: "Nitrates of K and Na", body: "Give the nitrite + O₂. 2NaNO₃ → 2NaNO₂ + O₂." },
        { title: "Nitrates of Mg, Zn, Fe, Pb, Cu", body: "Give the metal oxide + NO₂ + O₂. 2Pb(NO₃)₂ → 2PbO + 4NO₂ + O₂." },
        { title: "Nitrates of Ag and Hg", body: "Give the METAL + NO₂ + O₂." },
        { title: "Hydrogencarbonates", body: "2NaHCO₃ → Na₂CO₃ + H₂O + CO₂." }
      ]},

      { heading: "Halogens (Group 7)", type: "cards", items: [
        { title: "States at room temperature", body: "Fluorine and chlorine: gases. Bromine: liquid. Iodine: solid (sublimes to purple vapour)." },
        { title: "Reactivity", body: "DECREASES down the group: F₂ > Cl₂ > Br₂ > I₂." },
        { title: "Displacement", body: "A more reactive halogen displaces a less reactive one from its halide. Cl₂ + 2KBr → 2KCl + Br₂." },
        { title: "Hydrogen halides", body: "HF, HCl, HBr, HI. Very soluble, forming acids. HF is a weak acid, the others are strong." }
      ]},

      { heading: "Watch Out!", type: "warning", items: [
        "Group 1 carbonates (Na₂CO₃, K₂CO₃) do not decompose when heated, but most other carbonates do.",
        "Al₂O₃ and ZnO are amphoteric. They are not simply basic.",
        "Halogen reactivity DECREASES down Group 7, the opposite of Group 1 metals.",
        "Copper does not react with dilute HCl or dilute H₂SO₄ because it is below hydrogen.",
        "CO is a NEUTRAL oxide, not acidic."
      ]},

      { heading: "Quick Tip", type: "tip",
        content: "Metal oxide = basic, non-metal oxide = acidic, and Al/Zn/Pb oxides = amphoteric. For nitrate decomposition, think of three groups: K/Na give nitrite, middle metals give oxide + NO₂ + O₂, and Ag/Hg give the metal." }
    ]
  },

  // ==========================================
  // CHEMISTRY — SOLUTIONS & SOLUBILITY
  // ==========================================
  "Solutions & Solubility": {
    subject: "Chemistry",
    title: "Solutions & Solubility — Curves, Calculations and Rules",
    icon: "🧂",
    estimatedTime: "4 min read",
    sections: [
      { heading: "Key Definitions", type: "cards", items: [
        { title: "Solution", body: "A homogeneous mixture of a solute dissolved in a solvent." },
        { title: "Saturated solution", body: "Contains the MAXIMUM amount of solute at that temperature. More solute will not dissolve." },
        { title: "Unsaturated solution", body: "Can still dissolve more solute at that temperature." },
        { title: "Supersaturated solution", body: "Contains MORE solute than normal at that temperature. It is unstable, and crystals form if a seed crystal is added." },
        { title: "Solubility", body: "The mass of solute that saturates 100 g of solvent at a given temperature. Unit: g/100 g water." }
      ]},

      { heading: "Factors Affecting Solubility", type: "cards", items: [
        { title: "Temperature and solids", body: "Solubility of most solids INCREASES as temperature rises (exception: calcium hydroxide, which decreases)." },
        { title: "Temperature and gases", body: "Solubility of gases DECREASES as temperature rises." },
        { title: "Pressure and gases", body: "Solubility of a gas INCREASES with pressure (Henry's law). That is why fizzy drinks hiss when opened." },
        { title: "Nature of solvent", body: "Like dissolves like: ionic and polar substances dissolve in water. Non-polar substances such as oil and grease dissolve in organic solvents." }
      ]},

      { heading: "Solubility Calculation", type: "steps", items: [
        "20 g of salt just saturates 50 g of water at 30°C. Find its solubility.",
        "Solubility = mass of salt per 100 g water.",
        "Scale up: 20 × (100 ÷ 50) = 40 g.",
        "Solubility at 30°C = 40 g per 100 g of water."
      ]},

      { heading: "Solubility Rules for Salts", type: "cards", items: [
        { title: "Always soluble", body: "ALL nitrates, and ALL salts of sodium, potassium and ammonium." },
        { title: "Chlorides", body: "Soluble, except silver chloride (AgCl) and lead(II) chloride (PbCl₂, soluble in hot water)." },
        { title: "Sulphates", body: "Soluble, except barium sulphate (BaSO₄), lead(II) sulphate (PbSO₄), and calcium sulphate (slightly)." },
        { title: "Carbonates", body: "Insoluble, except sodium, potassium and ammonium carbonates." },
        { title: "Hydroxides", body: "Insoluble, except sodium, potassium and barium hydroxides (calcium hydroxide is slightly soluble)." }
      ]},

      { heading: "Preparing Salts", type: "cards", items: [
        { title: "Soluble salt from a metal or base", body: "Add excess metal, oxide or carbonate to acid, filter, then crystallise the filtrate." },
        { title: "Soluble salt from an alkali", body: "Titrate acid with alkali, then evaporate the solution (no excess to filter)." },
        { title: "Insoluble salt", body: "PRECIPITATION: mix two soluble salt solutions, filter, wash and dry the precipitate." }
      ]},

      { heading: "Watch Out!", type: "warning", items: [
        "Gas solubility falls as temperature rises. This is the opposite of most solids.",
        "Solubility is always quoted per 100 g of SOLVENT, not per 100 g of solution.",
        "Chlorides are mostly soluble. The exceptions are Ag and Pb.",
        "A saturated solution at one temperature may be unsaturated at a higher temperature."
      ]},

      { heading: "Quick Tip", type: "tip",
        content: "For any salt-solubility question remember 'nitrates and Na/K/NH₄ salts are always soluble'. For a precipitate question, ask which pair of ions can form an insoluble salt. For calculations, always scale to 100 g of water." }
    ]
  },

  // ==========================================
  // CHEMISTRY — CHEMICAL KINETICS
  // ==========================================
  "Chemical Kinetics": {
    subject: "Chemistry",
    title: "Chemical Kinetics — Rates, Collision Theory and Catalysts",
    icon: "⏱️",
    estimatedTime: "4 min read",
    sections: [
      { heading: "Rate of Reaction", type: "text",
        content: "Rate of reaction measures how quickly reactants are used up or products are formed. Rate = change in concentration ÷ time, with unit mol dm⁻³ s⁻¹. For gas-producing reactions, rate can be measured as volume of gas per unit time (cm³/s)." },

      { heading: "Collision Theory", type: "cards", items: [
        { title: "Condition 1", body: "Particles must COLLIDE." },
        { title: "Condition 2", body: "They must collide with at least the ACTIVATION ENERGY (Eₐ), the minimum energy needed to react." },
        { title: "Condition 3", body: "They must collide with the correct ORIENTATION." },
        { title: "Effective collision", body: "A collision that meets all conditions and leads to reaction." }
      ]},

      { heading: "Factors Affecting Rate", type: "cards", items: [
        { title: "Concentration / pressure", body: "More particles in the same volume means MORE frequent collisions, so a higher rate." },
        { title: "Temperature", body: "Particles move faster and MORE have energy ≥ Eₐ. Rate roughly doubles for each 10°C rise." },
        { title: "Surface area", body: "Smaller pieces expose more surface, so powder reacts faster than a lump of the same mass." },
        { title: "Catalyst", body: "Provides an alternative route with LOWER activation energy. It is not used up and does not change the final yield." },
        { title: "Light", body: "Speeds up photochemical reactions such as silver bromide darkening or H₂ + Cl₂." }
      ]},

      { heading: "Catalysts — Common Examples", type: "cards", items: [
        { title: "Iron", body: "Haber process." },
        { title: "Vanadium(V) oxide, V₂O₅", body: "Contact process." },
        { title: "Manganese(IV) oxide, MnO₂", body: "Decomposition of hydrogen peroxide into water and oxygen." },
        { title: "Platinum", body: "Ostwald process and catalytic converters." },
        { title: "Nickel", body: "Hydrogenation of oils to make margarine." },
        { title: "Enzymes", body: "Biological catalysts, for example zymase in fermentation." }
      ]},

      { heading: "Rate Law and Order — Worked Example", type: "steps", items: [
        "The rate law is rate = k[A]ⁿ, where n is the order of reaction with respect to A.",
        "If doubling [A] DOUBLES the rate, n = 1 (first order).",
        "If doubling [A] makes the rate FOUR times bigger, n = 2 (second order).",
        "If changing [A] has NO effect on the rate, n = 0 (zero order).",
        "Example: [A] triples and the rate increases ninefold, so 3ⁿ = 9, n = 2, rate = k[A]²."
      ]},

      { heading: "Reading a Rate Graph", type: "cards", items: [
        { title: "Steep curve", body: "High rate. The curve is steepest at the START when reactant concentration is highest." },
        { title: "Curve levels off", body: "The reaction has finished (one reactant used up)." },
        { title: "Comparing two curves", body: "A steeper curve means a faster rate. If both end at the same height, the same total product formed." }
      ]},

      { heading: "Watch Out!", type: "warning", items: [
        "A catalyst changes the RATE, not the equilibrium yield or the amount of product.",
        "Raising temperature raises rate mainly because more particles have energy above Eₐ, not just because they collide more often.",
        "Reaction order must be found from experiments, not from the balanced equation.",
        "A larger surface area means a faster reaction for the same mass."
      ]},

      { heading: "Quick Tip", type: "tip",
        content: "Link every factor to collisions: more concentration = more collisions, more temperature = more energetic collisions, more surface area = more exposed particles, catalyst = lower Eₐ. For order: compare how the rate changes when concentration changes." }
    ]
  },

  // ==========================================
  // CHEMISTRY — SOLUTIONS & VOLUMETRIC ANALYSIS
  // ==========================================
  "Solutions & Volumetric Analysis": {
    subject: "Chemistry",
    title: "Solutions & Volumetric Analysis — Titration Calculations",
    icon: "🧪",
    estimatedTime: "5 min read",
    sections: [
      { heading: "Key Formulas", type: "cards", items: [
        { title: "Concentration in mol/dm³", body: "C = n ÷ V, where n = moles and V is in dm³. So n = C × V." },
        { title: "Concentration in g/dm³", body: "g/dm³ = mol/dm³ × molar mass." },
        { title: "Cm³ to dm³", body: "Divide by 1000. 25 cm³ = 0.025 dm³." },
        { title: "Titration formula", body: "(C_A × V_A) ÷ (C_B × V_B) = n_A ÷ n_B, where n_A and n_B are the mole ratio from the balanced equation." },
        { title: "Dilution", body: "C₁V₁ = C₂V₂ (moles of solute stay the same)." },
        { title: "Standard solution", body: "A solution of accurately known concentration." }
      ]},

      { heading: "Worked Example 1 — Simple Titration", type: "steps", items: [
        "25 cm³ of NaOH solution needs 20 cm³ of 0.1 M HCl for neutralisation. Find the concentration of NaOH.",
        "HCl + NaOH → NaCl + H₂O. Mole ratio 1:1.",
        "(C_A × V_A) ÷ (C_B × V_B) = 1, so 0.1 × 20 = C_B × 25.",
        "C_B = 2 ÷ 25 = 0.08 mol/dm³.",
        "In g/dm³: 0.08 × 40 = 3.2 g/dm³ (NaOH = 40)."
      ]},

      { heading: "Worked Example 2 — Mole Ratio 1:2", type: "steps", items: [
        "25 cm³ of 0.05 M Na₂CO₃ needs 20 cm³ of HCl. Find the concentration of HCl.",
        "Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂. Ratio Na₂CO₃ : HCl = 1 : 2.",
        "Moles Na₂CO₃ = 0.05 × 0.025 = 0.00125 mol.",
        "Moles HCl = 2 × 0.00125 = 0.0025 mol.",
        "C(HCl) = 0.0025 ÷ 0.020 = 0.125 mol/dm³."
      ]},

      { heading: "Indicators", type: "cards", items: [
        { title: "Methyl orange", body: "RED in acid, YELLOW in alkali. Use for strong acid + weak base." },
        { title: "Phenolphthalein", body: "COLOURLESS in acid, PINK in alkali. Use for weak acid + strong base." },
        { title: "Strong acid + strong base", body: "Either indicator works." },
        { title: "Litmus", body: "RED in acid, BLUE in alkali. Not precise enough for titration." }
      ]},

      { heading: "Titration Technique", type: "steps", items: [
        "Rinse the burette with the solution it will hold, and the pipette with the solution it will measure.",
        "Pipette 25.0 cm³ of one solution into a conical flask. Add 2 to 3 drops of indicator.",
        "Run the other solution from the burette, swirling, until the end point (permanent colour change).",
        "Repeat until two readings agree within 0.10 cm³ (concordant). Average only the concordant readings.",
        "Read the burette at eye level at the bottom of the meniscus."
      ]},

      { heading: "Watch Out!", type: "warning", items: [
        "Always balance the equation first to get the mole ratio. H₂SO₄ is dibasic, so ratio with NaOH is 1:2.",
        "Convert cm³ to dm³ before finding moles. Skip this only when the formula has V on both sides.",
        "Do not rinse the conical flask with the solution. Rinsing with water is fine because it does not change the moles.",
        "Average ONLY the concordant titres."
      ]},

      { heading: "Quick Tip", type: "tip",
        content: "Three-step method: (1) moles of the known solution = C × V, (2) use the equation's mole ratio to get moles of the unknown, (3) concentration = moles ÷ volume. Convert to g/dm³ last by multiplying by molar mass." }
    ]
  },

  // ==========================================
  // CHEMISTRY — KINETIC THEORY
  // ==========================================
  "Kinetic Theory": {
    subject: "Chemistry",
    title: "Kinetic Theory — States of Matter, Diffusion and Graham's Law",
    icon: "🔵",
    estimatedTime: "4 min read",
    sections: [
      { heading: "The Kinetic Theory", type: "text",
        content: "The kinetic theory says all matter is made of tiny particles that are always moving. The more energy they have, the faster they move. This explains the properties of solids, liquids and gases, and changes between them." },

      { heading: "The Three States", type: "cards", items: [
        { title: "Solid", body: "Particles are packed closely in a fixed pattern. They only VIBRATE. Fixed shape and volume. Cannot be compressed." },
        { title: "Liquid", body: "Particles are close but can slide past each other. Fixed volume, takes the shape of the container. Almost incompressible." },
        { title: "Gas", body: "Particles are far apart and move rapidly in all directions. No fixed shape or volume. Easily compressed." }
      ]},

      { heading: "Changes of State", type: "cards", items: [
        { title: "Melting and freezing", body: "Solid ⇌ liquid at the melting point. Heat is absorbed on melting and released on freezing." },
        { title: "Boiling and condensation", body: "Liquid ⇌ gas at the boiling point." },
        { title: "Sublimation", body: "Solid → gas directly. Examples: iodine, dry ice (solid CO₂), ammonium chloride, naphthalene." },
        { title: "Temperature stays constant", body: "During a change of state the temperature stays CONSTANT. The energy supplied (latent heat) breaks forces between particles instead of raising temperature." },
        { title: "Evaporation vs boiling", body: "Evaporation happens at any temperature, only at the surface. Boiling happens at one temperature, throughout the liquid." }
      ]},

      { heading: "Brownian Motion and Diffusion", type: "cards", items: [
        { title: "Brownian motion", body: "Random zig-zag movement of tiny visible particles (smoke, pollen) caused by unequal bombardment by invisible fast-moving molecules. It is evidence for the kinetic theory." },
        { title: "Diffusion", body: "The spreading of particles from a region of high concentration to a region of low concentration until evenly mixed." },
        { title: "Faster diffusion", body: "Gases diffuse faster than liquids. Higher temperature increases the rate. Lighter gases diffuse faster." }
      ]},

      { heading: "Graham's Law of Diffusion", type: "steps", items: [
        "Rate of diffusion is inversely proportional to the SQUARE ROOT of molar mass (or density).",
        "Rate₁ ÷ Rate₂ = √(M₂ ÷ M₁).",
        "Example: compare hydrogen (M = 2) and oxygen (M = 32).",
        "Rate(H₂) ÷ Rate(O₂) = √(32 ÷ 2) = √16 = 4.",
        "Hydrogen diffuses 4 times faster than oxygen.",
        "Time taken is the inverse: oxygen takes 4 times as long."
      ]},

      { heading: "Watch Out!", type: "warning", items: [
        "Temperature does NOT rise during melting or boiling. Do not confuse this with heating a single state.",
        "In Graham's law, the LIGHTER gas diffuses faster.",
        "Use the square root of the molar mass. Do not forget the square root.",
        "Particles in a solid still vibrate. They do not stand still.",
        "Brownian motion is movement of the visible particles, caused by the invisible molecules."
      ]},

      { heading: "Quick Tip", type: "tip",
        content: "For Graham's law put the heavier mass on top: Rate(light) ÷ Rate(heavy) = √(M heavy ÷ M light). The answer must be greater than 1, which gives a quick check. Link every observation to particle movement and energy." }
    ]
  },

  // ==========================================
  // CHEMISTRY — EQUATIONS & BALANCING
  // ==========================================
  "Equations & Balancing": {
    subject: "Chemistry",
    title: "Equations & Balancing — Chemical and Ionic Equations",
    icon: "⚖️",
    estimatedTime: "4 min read",
    sections: [
      { heading: "Why Balance Equations?", type: "text",
        content: "By the law of conservation of mass, atoms are never created or destroyed. A balanced equation has the SAME number of each type of atom on both sides. You balance by changing the big numbers in front (coefficients), NEVER the small subscripts inside formulae." },

      { heading: "Balancing Steps", type: "steps", items: [
        "Write the correct formulae for all reactants and products.",
        "Count the atoms of each element on both sides.",
        "Balance one element at a time using coefficients. Leave hydrogen and oxygen for last.",
        "Recount every element to check.",
        "Add state symbols: (s) solid, (l) liquid, (g) gas, (aq) aqueous."
      ]},

      { heading: "Worked Examples", type: "cards", items: [
        { title: "Iron and oxygen", body: "4Fe + 3O₂ → 2Fe₂O₃." },
        { title: "Aluminium and hydrochloric acid", body: "2Al + 6HCl → 2AlCl₃ + 3H₂." },
        { title: "Burning propane", body: "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O." },
        { title: "Sodium and water", body: "2Na + 2H₂O → 2NaOH + H₂." },
        { title: "Neutralisation", body: "H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O." },
        { title: "Thermal decomposition", body: "2KClO₃ → 2KCl + 3O₂." }
      ]},

      { heading: "Ionic Equations", type: "steps", items: [
        "Write the full balanced equation with state symbols.",
        "Split all aqueous (aq) ionic compounds into their ions. Keep solids, liquids and gases together.",
        "Cancel the SPECTATOR ions, which appear unchanged on both sides.",
        "What remains is the ionic equation.",
        "Example: AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq).",
        "Full ions: Ag⁺ + NO₃⁻ + Na⁺ + Cl⁻ → AgCl(s) + Na⁺ + NO₃⁻.",
        "Cancel Na⁺ and NO₃⁻ (spectators): Ag⁺(aq) + Cl⁻(aq) → AgCl(s)."
      ]},

      { heading: "Common Ionic Equations", type: "cards", items: [
        { title: "Neutralisation", body: "H⁺(aq) + OH⁻(aq) → H₂O(l)." },
        { title: "Barium sulphate precipitate", body: "Ba²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s)." },
        { title: "Displacement", body: "Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)." },
        { title: "Carbonate and acid", body: "CO₃²⁻ + 2H⁺ → H₂O + CO₂." }
      ]},

      { heading: "Watch Out!", type: "warning", items: [
        "Never change subscripts to balance. Changing H₂O to H₂O₂ makes a different compound.",
        "Check the CHARGES balance in ionic equations as well as the atoms.",
        "Diatomic elements are written as molecules: H₂, N₂, O₂, F₂, Cl₂, Br₂, I₂.",
        "Insoluble compounds and gases are NOT split into ions."
      ]},

      { heading: "Quick Tip", type: "tip",
        content: "Balance metals first, then non-metals, then hydrogen, then oxygen. If a fraction appears (such as ½O₂), multiply the whole equation by 2 to clear it. Always recount atoms at the end." }
    ]
  },

  // ==========================================
  // CHEMISTRY — PERIODIC TABLE & ALLOTROPY
  // ==========================================
  "Periodic Table & Allotropy": {
    subject: "Chemistry",
    title: "Periodic Table & Allotropy — Trends and Allotropes",
    icon: "💎",
    estimatedTime: "4 min read",
    sections: [
      { heading: "What is Allotropy?", type: "text",
        content: "Allotropy is the existence of an element in two or more different forms in the SAME physical state, with different structures and physical properties but the same chemical properties. The forms are called allotropes." },

      { heading: "Allotropes of Carbon", type: "cards", items: [
        { title: "Diamond", body: "Each carbon bonds to 4 others in a giant tetrahedral structure. Hardest natural substance. Does NOT conduct electricity. Used in cutting tools and jewellery." },
        { title: "Graphite", body: "Layers of carbon atoms in hexagons. Each carbon bonds to 3 others, leaving a free electron. CONDUCTS electricity. Soft and slippery because layers slide. Used as a lubricant, in pencils and as electrodes." },
        { title: "Fullerene (buckminsterfullerene)", body: "C₆₀ molecules shaped like a football. Used in nanotechnology." },
        { title: "Amorphous carbon", body: "Charcoal, soot and coke have no regular structure." }
      ]},

      { heading: "Allotropes of Sulphur, Phosphorus and Oxygen", type: "cards", items: [
        { title: "Sulphur", body: "Rhombic sulphur (stable below 96°C) and monoclinic sulphur (stable above 96°C). Both are made of S₈ rings." },
        { title: "Phosphorus", body: "WHITE phosphorus is very reactive and poisonous, and is stored under water. RED phosphorus is less reactive and is used in matches." },
        { title: "Oxygen", body: "Dioxygen (O₂) and ozone (O₃). Ozone in the stratosphere absorbs harmful UV radiation." },
        { title: "Tin", body: "Grey tin and white tin." }
      ]},

      { heading: "Trends Across a Period (Left to Right)", type: "cards", items: [
        { title: "Atomic radius", body: "DECREASES. The nuclear charge increases and pulls electrons closer." },
        { title: "Ionisation energy", body: "INCREASES (it gets harder to remove an electron)." },
        { title: "Electronegativity", body: "INCREASES." },
        { title: "Metallic character", body: "DECREASES, changing from metals to non-metals." }
      ]},

      { heading: "Trends Down a Group", type: "cards", items: [
        { title: "Atomic radius", body: "INCREASES because there are more shells." },
        { title: "Ionisation energy", body: "DECREASES. The outer electron is further from the nucleus and more shielded." },
        { title: "Metallic character", body: "INCREASES." },
        { title: "Group 1 reactivity", body: "INCREASES down the group." },
        { title: "Group 7 reactivity", body: "DECREASES down the group." }
      ]},

      { heading: "Watch Out!", type: "warning", items: [
        "Graphite conducts but diamond does not. Graphite has free (delocalised) electrons.",
        "Allotropes have different PHYSICAL properties but the SAME chemical properties.",
        "Group 1 reactivity INCREASES going down the group, but Group 7 reactivity DECREASES going down.",
        "Isotopes are different atoms of the same element, while allotropes are different forms of the same element."
      ]},

      { heading: "Quick Tip", type: "tip",
        content: "Diamond = 4 bonds, hard, insulator. Graphite = 3 bonds, layers, conductor. Same element, different structure. For trends, say 'across: radius down, IE up' and 'down: radius up, IE down'." }
    ]
  },

  // ==========================================
  // CHEMISTRY — GASES & BALANCING
  // ==========================================
  "Gases & Balancing": {
    subject: "Chemistry",
    title: "Gases & Balancing — Gas Volumes from Equations",
    icon: "🧯",
    estimatedTime: "4 min read",
    sections: [
      { heading: "Key Laws", type: "cards", items: [
        { title: "Gay-Lussac's law", body: "Gases react in simple whole-number ratios by VOLUME, at the same temperature and pressure." },
        { title: "Avogadro's law", body: "Equal volumes of all gases at the same temperature and pressure contain equal numbers of molecules." },
        { title: "Molar volume", body: "One mole of any gas occupies 22.4 dm³ at STP (0°C, 1 atm) and about 24 dm³ at room temperature and pressure." },
        { title: "Key idea", body: "In a balanced equation, the coefficients of gases are ALSO the volume ratios." }
      ]},

      { heading: "Worked Example 1 — Volume Ratio", type: "steps", items: [
        "What volume of oxygen is needed to burn 20 cm³ of hydrogen completely?",
        "2H₂ + O₂ → 2H₂O. Ratio H₂ : O₂ = 2 : 1.",
        "Volume of O₂ = 20 ÷ 2 = 10 cm³."
      ]},

      { heading: "Worked Example 2 — Burning Methane", type: "steps", items: [
        "10 cm³ of methane burns completely in oxygen. Find the oxygen used and the CO₂ formed.",
        "CH₄ + 2O₂ → CO₂ + 2H₂O. Ratio CH₄ : O₂ : CO₂ = 1 : 2 : 1.",
        "Oxygen used = 20 cm³.",
        "CO₂ formed = 10 cm³.",
        "Water is liquid at room temperature, so it takes up negligible volume."
      ]},

      { heading: "Worked Example 3 — Mass to Volume", type: "steps", items: [
        "Find the volume of CO₂ at STP from heating 10 g of CaCO₃. (Ca = 40, C = 12, O = 16)",
        "CaCO₃ → CaO + CO₂. Ratio 1 : 1.",
        "Molar mass CaCO₃ = 100. Moles = 10 ÷ 100 = 0.1 mol.",
        "Moles CO₂ = 0.1 mol.",
        "Volume = 0.1 × 22.4 = 2.24 dm³."
      ]},

      { heading: "Common Gas Volume Conversions", type: "cards", items: [
        { title: "Volume to moles", body: "moles = volume (dm³) ÷ 22.4 at STP. 11.2 dm³ = 0.5 mol." },
        { title: "Moles to volume", body: "volume = moles × 22.4 dm³ at STP." },
        { title: "Volume to mass", body: "Convert to moles first, then mass = moles × molar mass." },
        { title: "Gas density", body: "Density = molar mass ÷ molar volume. CO₂ at STP: 44 ÷ 22.4 ≈ 1.96 g/dm³." }
      ]},

      { heading: "Watch Out!", type: "warning", items: [
        "Volume ratios only work for GASES. Solids and liquids do not count.",
        "Water formed at room temperature is liquid, so do not add it to the gas volume.",
        "Balance the equation BEFORE reading ratios.",
        "22.4 dm³ applies at STP only. Use 24 dm³ at room temperature."
      ]},

      { heading: "Quick Tip", type: "tip",
        content: "For all-gas reactions you can skip moles: the equation coefficients ARE the volume ratios. For mass-and-gas questions: mass → moles → ratio → moles of gas → volume (× 22.4)." }
    ]
  },

  // ==========================================
  // CHEMISTRY — PERIODIC TABLE
  // ==========================================
  "Periodic Table": {
    subject: "Chemistry",
    title: "The Periodic Table — Groups, Periods and Trends",
    icon: "🧬",
    estimatedTime: "5 min read",
    sections: [
      { heading: "Structure of the Periodic Table", type: "cards", items: [
        { title: "Order", body: "Elements are arranged by increasing ATOMIC NUMBER (number of protons)." },
        { title: "Groups", body: "Vertical columns. Elements in a group have the same number of OUTER electrons and similar chemical properties." },
        { title: "Periods", body: "Horizontal rows. The period number equals the number of electron SHELLS." },
        { title: "Group number", body: "For main groups (1, 2, 13 to 18), the group number tells you the outer electrons (Group 1 = 1, Group 2 = 2, Group 17 = 7, Group 18 = 8)." }
      ]},

      { heading: "Key Groups", type: "cards", items: [
        { title: "Group 1 — alkali metals", body: "Li, Na, K. Soft, low density, react vigorously with water to give hydrogen and an alkali. Stored under oil. Reactivity INCREASES down the group." },
        { title: "Group 2 — alkaline earth metals", body: "Be, Mg, Ca, Ba. Less reactive than Group 1. Form 2+ ions." },
        { title: "Group 17 — halogens", body: "F, Cl, Br, I. Diatomic non-metals. Form 1− ions. Reactivity DECREASES down the group." },
        { title: "Group 18 — noble gases", body: "He, Ne, Ar, Kr. Full outer shell, very unreactive, monatomic." },
        { title: "Transition metals", body: "Between Groups 2 and 13. Hard, dense, high melting points, form coloured compounds, variable oxidation states, good catalysts." }
      ]},

      { heading: "Periodic Trends", type: "cards", items: [
        { title: "Atomic radius", body: "Across a period: decreases. Down a group: increases." },
        { title: "First ionisation energy", body: "Across a period: generally increases. Down a group: decreases." },
        { title: "Electronegativity", body: "Across a period: increases. Down a group: decreases. Fluorine is the most electronegative." },
        { title: "Metallic character", body: "Decreases across a period, increases down a group." },
        { title: "Exceptions in ionisation energy", body: "Be to B and N to O show small dips caused by sub-shell structure." }
      ]},

      { heading: "Electron Configuration and Position", type: "steps", items: [
        "Write the electron arrangement, for example sodium (Z = 11): 2, 8, 1.",
        "The number of occupied shells = the period. Sodium: 3 shells, Period 3.",
        "The number of outer electrons gives the group. Sodium: 1 outer electron, Group 1.",
        "Chlorine (Z = 17): 2, 8, 7. Period 3, Group 17.",
        "Metals lose outer electrons to form positive ions. Non-metals gain electrons to form negative ions."
      ]},

      { heading: "Watch Out!", type: "warning", items: [
        "Group 1 gets MORE reactive down the group, but Group 17 gets LESS reactive.",
        "The period number is the number of shells, NOT the outer electrons.",
        "Noble gases are unreactive because they have a full outer shell, not because they are rare.",
        "Hydrogen is placed in Group 1 but is a non-metal."
      ]},

      { heading: "Quick Tip", type: "tip",
        content: "Position tells the story. Down a group: more shells, bigger atoms, easier to lose electrons. Across a period: more protons, smaller atoms, harder to lose electrons. Match the pattern to radius, ionisation energy and metallic character." }
    ]
  },

  // ==========================================
  // CHEMISTRY — WATER CHEMISTRY
  // ==========================================
  "Water Chemistry": {
    subject: "Chemistry",
    title: "Water Chemistry — Hardness, Treatment and Hydrates",
    icon: "🚰",
    estimatedTime: "4 min read",
    sections: [
      { heading: "Hard and Soft Water", type: "cards", items: [
        { title: "Soft water", body: "Lathers easily with soap. Contains few dissolved Ca²⁺ and Mg²⁺ ions. Rain water is soft." },
        { title: "Hard water", body: "Does not lather easily with soap, forming SCUM. Contains dissolved calcium and magnesium salts." },
        { title: "Temporary hardness", body: "Caused by calcium or magnesium HYDROGENCARBONATES. Removed by BOILING: Ca(HCO₃)₂ → CaCO₃ + H₂O + CO₂. Causes kettle fur." },
        { title: "Permanent hardness", body: "Caused by calcium or magnesium SULPHATES and CHLORIDES. NOT removed by boiling." }
      ]},

      { heading: "Softening Water", type: "cards", items: [
        { title: "Boiling", body: "Removes temporary hardness only." },
        { title: "Adding washing soda (Na₂CO₃)", body: "Removes both types: Ca²⁺ + CO₃²⁻ → CaCO₃(s). The precipitate is filtered off." },
        { title: "Adding slaked lime (Clark's method)", body: "Removes temporary hardness." },
        { title: "Ion exchange (permutit)", body: "Resin swaps Ca²⁺ and Mg²⁺ for Na⁺. Removes both types. Resin is regenerated using concentrated NaCl." },
        { title: "Distillation", body: "Gives the purest water by removing all dissolved salts." }
      ]},

      { heading: "Water Treatment for Drinking", type: "steps", items: [
        "Screening removes large solids.",
        "Sedimentation: aluminium sulphate is added to make small particles clump and settle (coagulation).",
        "Filtration through sand beds removes small particles.",
        "Chlorination kills bacteria.",
        "Fluoride is sometimes added to prevent tooth decay."
      ]},

      { heading: "Tests for Water", type: "cards", items: [
        { title: "Anhydrous copper(II) sulphate", body: "WHITE → BLUE when water is added." },
        { title: "Cobalt(II) chloride paper", body: "BLUE → PINK when water is added." },
        { title: "Pure water", body: "Boils at exactly 100°C and freezes at 0°C at 1 atm. Test with a thermometer." }
      ]},

      { heading: "Hydrates and Water Behaviour", type: "cards", items: [
        { title: "Water of crystallisation", body: "Water that is part of the crystal structure, such as CuSO₄·5H₂O (blue) and Na₂CO₃·10H₂O." },
        { title: "Efflorescence", body: "Crystals LOSE water to the air and turn to powder (washing soda)." },
        { title: "Deliquescence", body: "A substance ABSORBS water from air and dissolves in it (NaOH, CaCl₂, FeCl₃)." },
        { title: "Hygroscopic", body: "A substance that absorbs water from the air without necessarily dissolving (conc. H₂SO₄, silica gel)." }
      ]},

      { heading: "Watch Out!", type: "warning", items: [
        "Boiling removes only TEMPORARY hardness.",
        "Rain water is soft but is not completely pure (it contains dissolved CO₂).",
        "Efflorescent = loses water. Deliquescent = gains water and dissolves.",
        "Permanent hardness is caused by sulphates and chlorides, not hydrogencarbonates."
      ]},

      { heading: "Quick Tip", type: "tip",
        content: "Temporary = hydrogencarbonate = boiling removes it. Permanent = sulphate or chloride = need washing soda or ion exchange. Water test: white CuSO₄ turns blue, blue cobalt chloride paper turns pink." }
    ]
  },

  // ==========================================
  // CHEMISTRY — STOICHIOMETRY & TITRATION
  // ==========================================
  "Stoichiometry & Titration": {
    subject: "Chemistry",
    title: "Stoichiometry & Titration — Moles, Purity and Yield",
    icon: "🧮",
    estimatedTime: "5 min read",
    sections: [
      { heading: "The Mole Toolkit", type: "cards", items: [
        { title: "Moles from mass", body: "n = mass ÷ molar mass." },
        { title: "Moles from solution", body: "n = concentration (mol/dm³) × volume (dm³)." },
        { title: "Moles from gas volume", body: "n = volume ÷ 22.4 dm³ at STP." },
        { title: "Percentage purity", body: "(mass of pure substance ÷ mass of impure sample) × 100." },
        { title: "Percentage yield", body: "(actual yield ÷ theoretical yield) × 100." }
      ]},

      { heading: "Worked Example 1 — Mole Ratio 1:2", type: "steps", items: [
        "What volume of 0.2 M NaOH neutralises 25 cm³ of 0.1 M H₂SO₄?",
        "H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O. Ratio 1 : 2.",
        "Moles H₂SO₄ = 0.1 × 0.025 = 0.0025 mol.",
        "Moles NaOH = 2 × 0.0025 = 0.005 mol.",
        "Volume = 0.005 ÷ 0.2 = 0.025 dm³ = 25 cm³."
      ]},

      { heading: "Worked Example 2 — Percentage Purity", type: "steps", items: [
        "2.0 g of impure NaOH is neutralised by 40 cm³ of 1.0 M HCl. Find the percentage purity. (NaOH = 40)",
        "HCl + NaOH → NaCl + H₂O. Ratio 1 : 1.",
        "Moles HCl = 1.0 × 0.040 = 0.040 mol, so moles NaOH = 0.040 mol.",
        "Mass of pure NaOH = 0.040 × 40 = 1.6 g.",
        "Purity = (1.6 ÷ 2.0) × 100 = 80%."
      ]},

      { heading: "Worked Example 3 — Percentage Yield", type: "steps", items: [
        "Heating 10 g of CaCO₃ gave 4.2 g of CaO. Find the percentage yield. (Ca = 40, C = 12, O = 16)",
        "CaCO₃ → CaO + CO₂. Moles CaCO₃ = 10 ÷ 100 = 0.1 mol.",
        "Theoretical CaO = 0.1 × 56 = 5.6 g.",
        "Percentage yield = (4.2 ÷ 5.6) × 100 = 75%."
      ]},

      { heading: "Limiting Reagent", type: "steps", items: [
        "Write the balanced equation.",
        "Find the moles of each reactant.",
        "Divide each by its coefficient. The SMALLEST value is the limiting reagent.",
        "The limiting reagent decides how much product forms.",
        "Example: 2H₂ + O₂ → 2H₂O with 4 mol H₂ and 1 mol O₂. 4 ÷ 2 = 2 and 1 ÷ 1 = 1, so O₂ is limiting."
      ]},

      { heading: "Watch Out!", type: "warning", items: [
        "Always use the mole RATIO from the balanced equation, not 1:1 by default.",
        "Purity uses the mass of the whole impure sample in the denominator.",
        "Convert cm³ to dm³ before multiplying by concentration.",
        "Theoretical yield is calculated from the limiting reagent."
      ]},

      { heading: "Quick Tip", type: "tip",
        content: "Always follow the same chain: mass or volume → moles → mole ratio from equation → moles of the unknown → mass, volume or concentration. Writing each step stops arithmetic mistakes." }
    ]
  },

  // ==========================================
  // CHEMISTRY — GASES & PHYSICAL STATES
  // ==========================================
  "Gases & Physical States": {
    subject: "Chemistry",
    title: "Gases & Physical States — Gas Laws and Changes of State",
    icon: "🌡️",
    estimatedTime: "4 min read",
    sections: [
      { heading: "The Gas Laws", type: "cards", items: [
        { title: "Boyle's law", body: "P₁V₁ = P₂V₂ at constant temperature." },
        { title: "Charles' law", body: "V₁/T₁ = V₂/T₂ at constant pressure. T must be in KELVIN." },
        { title: "Pressure law", body: "P₁/T₁ = P₂/T₂ at constant volume. T must be in KELVIN." },
        { title: "Combined gas law", body: "P₁V₁/T₁ = P₂V₂/T₂." },
        { title: "Kelvin", body: "T(K) = T(°C) + 273. STP = 273 K and 760 mmHg (1 atm)." }
      ]},

      { heading: "Worked Example — Volume at STP", type: "steps", items: [
        "500 cm³ of a gas at 27°C and 700 mmHg. Find its volume at STP.",
        "T₁ = 27 + 273 = 300 K. T₂ = 273 K. P₁ = 700. P₂ = 760.",
        "V₂ = (P₁ × V₁ × T₂) ÷ (T₁ × P₂).",
        "V₂ = (700 × 500 × 273) ÷ (300 × 760).",
        "V₂ = 95,550,000 ÷ 228,000 ≈ 419 cm³."
      ]},

      { heading: "Behaviour of Gases", type: "cards", items: [
        { title: "Gas pressure", body: "Caused by gas particles hitting the container walls." },
        { title: "Ideal gas", body: "Obeys the gas laws perfectly. Real gases behave most ideally at HIGH temperature and LOW pressure." },
        { title: "Graham's law", body: "Lighter gases diffuse faster. Rate is inversely proportional to √(molar mass)." },
        { title: "Dalton's law of partial pressures", body: "Total pressure of a gas mixture = sum of the partial pressures of the individual gases." },
        { title: "Gases collected over water", body: "Total pressure = pressure of the dry gas + water vapour pressure." }
      ]},

      { heading: "Physical States and Changes", type: "cards", items: [
        { title: "Melting point", body: "Temperature at which a solid becomes a liquid. A pure substance has a SHARP melting point." },
        { title: "Boiling point", body: "Temperature at which vapour pressure equals external pressure." },
        { title: "Effect of impurities", body: "Impurities LOWER the melting point and RAISE the boiling point, and make the change occur over a range." },
        { title: "Effect of pressure on boiling point", body: "Higher pressure raises the boiling point (pressure cooker). Lower pressure at high altitude lowers it." },
        { title: "Sublimation", body: "Solid to gas without becoming liquid (iodine, dry ice, naphthalene, ammonium chloride)." }
      ]},

      { heading: "Watch Out!", type: "warning", items: [
        "Always convert °C to kelvin. Using Celsius is the most common error.",
        "At STP the pressure is 760 mmHg, which equals 1 atmosphere.",
        "Impurities make a substance melt over a RANGE of temperature.",
        "In Boyle's law, pressure and volume change in OPPOSITE directions."
      ]},

      { heading: "Quick Tip", type: "tip",
        content: "Use the combined gas law when more than one quantity changes. Write the data in a table: P₁, V₁, T₁ (kelvin) and P₂, V₂, T₂ (kelvin). Put the unknown on one side and multiply or divide carefully." }
    ]
  },

  // ==========================================
  // CHEMISTRY — OXIDATION NUMBERS
  // ==========================================
  "Oxidation Numbers": {
    subject: "Chemistry",
    title: "Oxidation Numbers — Rules, Calculations and Redox",
    icon: "🔢",
    estimatedTime: "4 min read",
    sections: [
      { heading: "Rules for Oxidation Numbers", type: "cards", items: [
        { title: "Free elements", body: "Oxidation number = 0 (Na, O₂, Cl₂, S₈, Fe)." },
        { title: "Simple ions", body: "Equals the charge. Na⁺ = +1, Cl⁻ = −1, Fe³⁺ = +3." },
        { title: "Oxygen", body: "Usually −2. In peroxides (H₂O₂) it is −1. In OF₂ it is +2." },
        { title: "Hydrogen", body: "Usually +1. In metal hydrides (NaH) it is −1." },
        { title: "Group 1 and Group 2 metals", body: "Always +1 and +2." },
        { title: "Neutral compound", body: "Sum of oxidation numbers = 0." },
        { title: "Polyatomic ion", body: "Sum of oxidation numbers = the charge on the ion." }
      ]},

      { heading: "Worked Examples", type: "cards", items: [
        { title: "Mn in KMnO₄", body: "+1 + Mn + 4(−2) = 0, so Mn = +7." },
        { title: "Cr in K₂Cr₂O₇", body: "2(+1) + 2Cr + 7(−2) = 0, so 2Cr = +12, Cr = +6." },
        { title: "S in H₂SO₄", body: "2(+1) + S + 4(−2) = 0, so S = +6." },
        { title: "N in HNO₃", body: "+1 + N + 3(−2) = 0, so N = +5." },
        { title: "N in NH₃", body: "N + 3(+1) = 0, so N = −3." },
        { title: "Cl in KClO₃", body: "+1 + Cl + 3(−2) = 0, so Cl = +5." },
        { title: "S in SO₂", body: "S + 2(−2) = 0, so S = +4." },
        { title: "Mn in MnO₄⁻", body: "Mn + 4(−2) = −1, so Mn = +7." },
        { title: "Cr in Cr₂O₇²⁻", body: "2Cr + 7(−2) = −2, so 2Cr = +12, Cr = +6." }
      ]},

      { heading: "Oxidation, Reduction and Agents", type: "steps", items: [
        "OIL RIG: Oxidation Is Loss of electrons. Reduction Is Gain of electrons.",
        "Oxidation = oxidation number INCREASES. Reduction = oxidation number DECREASES.",
        "The OXIDISING agent is the substance that is REDUCED (it takes electrons).",
        "The REDUCING agent is the substance that is OXIDISED (it gives electrons).",
        "Example: Zn + Cu²⁺ → Zn²⁺ + Cu. Zn goes 0 → +2 (oxidised, reducing agent). Cu goes +2 → 0 (reduced, oxidising agent)."
      ]},

      { heading: "Naming with Roman Numerals", type: "cards", items: [
        { title: "Iron(II) and iron(III)", body: "FeCl₂ is iron(II) chloride (Fe²⁺). FeCl₃ is iron(III) chloride (Fe³⁺)." },
        { title: "Copper(II) sulphate", body: "CuSO₄ contains Cu²⁺." },
        { title: "Manganate(VII)", body: "KMnO₄ is potassium manganate(VII)." },
        { title: "Dichromate(VI)", body: "K₂Cr₂O₇ is potassium dichromate(VI)." }
      ]},

      { heading: "Watch Out!", type: "warning", items: [
        "The oxidising agent gets REDUCED. The reducing agent gets OXIDISED. It sounds backwards but it is the rule.",
        "Oxidation numbers are written with the sign first (+7, −2), charges with the number first (2+, 2−).",
        "Hydrogen peroxide has oxygen at −1, not −2.",
        "In a polyatomic ion the oxidation numbers add up to the ion's charge, not zero."
      ]},

      { heading: "Quick Tip", type: "tip",
        content: "Always write the equation 'sum = charge' and solve for the unknown. Remember the three big ones: Mn in KMnO₄ is +7, Cr in K₂Cr₂O₇ is +6, S in H₂SO₄ is +6. They appear almost every year." }
    ]
  },

  // ==========================================
  // CHEMISTRY — METALLURGY
  // ==========================================
  "Metallurgy": {
    subject: "Chemistry",
    title: "Metallurgy — Extracting Metals from Ores",
    icon: "⛏️",
    estimatedTime: "5 min read",
    sections: [
      { heading: "Method Depends on Reactivity", type: "cards", items: [
        { title: "Very reactive metals (K, Na, Ca, Mg, Al)", body: "Extracted by ELECTROLYSIS of the molten compound. Carbon is not strong enough to reduce them." },
        { title: "Moderately reactive metals (Zn, Fe, Pb, Sn)", body: "Extracted by REDUCTION of the oxide with carbon or carbon monoxide." },
        { title: "Unreactive metals (Cu, Ag, Au)", body: "Found native (uncombined) or easily extracted by heating compounds." },
        { title: "General rule", body: "The higher the metal in the reactivity series, the harder it is to extract." }
      ]},

      { heading: "Common Ores", type: "cards", items: [
        { title: "Aluminium", body: "Bauxite (Al₂O₃·2H₂O)." },
        { title: "Iron", body: "Haematite (Fe₂O₃), magnetite (Fe₃O₄)." },
        { title: "Tin", body: "Cassiterite (SnO₂)." },
        { title: "Zinc", body: "Zinc blende (ZnS)." },
        { title: "Lead", body: "Galena (PbS)." },
        { title: "Copper", body: "Copper pyrites or chalcopyrite (CuFeS₂), malachite (CuCO₃·Cu(OH)₂)." },
        { title: "Sodium", body: "Rock salt (NaCl)." },
        { title: "Calcium", body: "Limestone (CaCO₃)." }
      ]},

      { heading: "Ore Preparation", type: "cards", items: [
        { title: "Froth flotation", body: "Concentrates sulphide ores. The ore sticks to the oil-based froth while the rock sinks." },
        { title: "Magnetic separation", body: "Separates magnetic ores (such as magnetite) from non-magnetic rock." },
        { title: "Roasting", body: "Heating a sulphide ore in air to give the oxide and SO₂. 2ZnS + 3O₂ → 2ZnO + 2SO₂." },
        { title: "Calcination", body: "Heating a carbonate or hydroxide ore in limited air to give the oxide. ZnCO₃ → ZnO + CO₂." }
      ]},

      { heading: "The Blast Furnace (Iron)", type: "steps", items: [
        "Raw materials: haematite (Fe₂O₃), coke (carbon), limestone (CaCO₃), and hot air.",
        "Coke burns: C + O₂ → CO₂. Then CO₂ + C → 2CO.",
        "Reduction of iron ore by carbon monoxide: Fe₂O₃ + 3CO → 2Fe + 3CO₂.",
        "Limestone decomposes: CaCO₃ → CaO + CO₂.",
        "Slag formation removes impurities: CaO + SiO₂ → CaSiO₃. Slag floats on molten iron and is tapped off separately.",
        "Molten iron collects at the bottom and is run off (pig iron)."
      ]},

      { heading: "Aluminium by Electrolysis", type: "cards", items: [
        { title: "Electrolyte", body: "Pure aluminium oxide (alumina) dissolved in molten CRYOLITE (Na₃AlF₆)." },
        { title: "Why cryolite?", body: "It lowers the melting point (from about 2000°C to about 950°C) and improves conductivity, saving energy." },
        { title: "Cathode (−)", body: "Al³⁺ + 3e⁻ → Al. Molten aluminium collects at the bottom." },
        { title: "Anode (+)", body: "2O²⁻ → O₂ + 4e⁻. The graphite anodes burn away to form CO₂ and must be replaced." },
        { title: "Sodium", body: "Extracted by electrolysis of molten NaCl in the Down's cell. Calcium chloride is added to lower the melting point." }
      ]},

      { heading: "Corrosion and Protection", type: "cards", items: [
        { title: "Rusting needs", body: "BOTH oxygen AND water. Rust is hydrated iron(III) oxide." },
        { title: "Prevention", body: "Painting, greasing, plating (tin or chromium), galvanising (zinc coating), alloying (stainless steel)." },
        { title: "Sacrificial protection", body: "A more reactive metal (zinc or magnesium) is attached to iron and corrodes instead." }
      ]},

      { heading: "Watch Out!", type: "warning", items: [
        "Aluminium is NOT extracted using carbon. It is too reactive, so electrolysis is needed.",
        "In the blast furnace, the actual reducing agent is carbon MONOXIDE.",
        "Limestone removes impurities (sand) as slag. It is not a source of iron.",
        "Rusting needs both oxygen AND water, not just one.",
        "Roasting is for sulphides. Calcination is for carbonates."
      ]},

      { heading: "Quick Tip", type: "tip",
        content: "Think of the reactivity series as a ladder: top metals (K, Na, Ca, Mg, Al) = electrolysis, middle metals (Zn, Fe, Pb) = carbon reduction, bottom metals (Cu, Ag, Au) = heat or found native. For iron, remember the four raw materials: ore, coke, limestone, hot air." }
    ]
  },

}

export default CHEMISTRY_EXTRA_GUIDES
