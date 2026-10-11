import { useState, useMemo } from "react"
import { POST_UTME_UNIVERSITIES } from "../data/postutme/index"
import jambQuestions from "../data/jamb/questions"
import { CURATED_HOT_QUESTIONS } from "../data/hotquestions/jamb/index"
import MathText from "../components/MathText"

const SUBJECT_META = {
  "English":     { icon: "📖", color: "#4a90d9", bg: "#f0f7ff" },
  "Mathematics": { icon: "🔢", color: "#48bb78", bg: "#f0fff4" },
  "Physics":     { icon: "⚡", color: "#ed8936", bg: "#fffaf0" },
  "Chemistry":   { icon: "🧪", color: "#9f7aea", bg: "#fdf5ff" },
  "Biology":     { icon: "🌿", color: "#38a169", bg: "#f0fff4" },
  "Government":  { icon: "🏛️", color: "#e53e3e", bg: "#fff5f5" },
  "Economics":   { icon: "📈", color: "#d69e2e", bg: "#fffff0" },
  "Commerce":    { icon: "💼", color: "#3182ce", bg: "#ebf8ff" },
  "Literature":  { icon: "📝", color: "#805ad5", bg: "#faf5ff" },
  "CRK":         { icon: "✝️", color: "#b7791f", bg: "#fffbeb" },
  "Accounts":    { icon: "🧾", color: "#2d3748", bg: "#f7fafc" },
  "Visual Arts": { icon: "🎨", color: "#d53f8c", bg: "#fff5f7" },
  "IRK":         { icon: "☪️", color: "#276749", bg: "#f0fff4" },
}
const DEFAULT_META = { icon: "📖", color: "#667eea", bg: "#f0f4ff" }

// ===== CURATED HOT TOPICS =====
// keywords: matched (lowercase, "contains") against the real topic names in your question bank,
// so the tile opens the right topic in Study Mode even if the spelling differs slightly.
const CURATED_HOT_TOPICS = {
  Biology: [
    {
      title: "Ecology & Diseases", emoji: "🟢", weight: "Extremely High",
      blurb: "The single largest chunk of repeatable questions.",
      items: [
        { topic: "Ecology", keywords: ["ecolog"],
          focus: "Abiotic/biotic interactions, Nigerian biomes (Mangrove Swamp, Guinea & Sahel Savanna), population dynamics, sampling tools (quadrat, Secchi disc, hygrometer), soil properties." },
        { topic: "Disease & Health", keywords: ["disease", "health"],
          focus: "Water-borne vectors (Schistosomiasis, Cholera, Onchocerciasis), viral vs bacterial pathogens." },
      ],
    },
    {
      title: "Genetics & Reproduction", emoji: "🟡", weight: "High",
      blurb: "Mechanical, formula-based concepts examiners love.",
      items: [
        { topic: "Genetics & Heredity", keywords: ["genetic", "heredity"],
          focus: "Monohybrid crosses (3:1), sex-linked traits, sickle-cell inheritance, blood groups, continuous vs discontinuous variation." },
        { topic: "Reproduction", keywords: ["reproduct"],
          focus: "Roles of prolactin, testosterone, progesterone; placenta vs bird/reptile egg yolk." },
      ],
    },
    {
      title: "Plant Biology", emoji: "🔵", weight: "High",
      blurb: "Transport tissues, experiments and plant hormones.",
      items: [
        { topic: "Plant Structure & Growth", keywords: ["plant structure", "plant biology", "plant"],
          focus: "Xylem (water/minerals) vs phloem (food), yam osmometer, potometer and transpiration." },
        { topic: "Growth Coordination", keywords: ["growth coord", "hormone"],
          focus: "Auxins (apical dominance, tropisms) and gibberellins (stem elongation)." },
      ],
    },
    {
      title: "Animal Physiology", emoji: "🟣", weight: "High",
      blurb: "Spread across several topics, so learn them all.",
      items: [
        { topic: "Nutrition", keywords: ["nutrition"],
          focus: "Dental formulas, Biuret and Millon's tests, pancreas as exocrine + endocrine organ." },
        { topic: "Excretion & Homeostasis", keywords: ["excretion", "homeostasis"],
          focus: "Kidney structure, ultrafiltration in Bowman's capsule, deamination in the liver." },
        { topic: "Circulatory System", keywords: ["circulat"],
          focus: "Red blood cells (no nucleus), mammalian double circulation." },
        { topic: "Respiration", keywords: ["respirat"],
          focus: "Yeast fermentation and lime water, mammalian diaphragm." },
        { topic: "Nervous System & Coordination", keywords: ["nervous"],
          focus: "Reflex arcs, cerebellum (balance) and medulla oblongata (involuntary actions)." },
      ],
    },
    {
      title: "Evolution & Diversity", emoji: "🟤", weight: "Medium-High",
      blurb: "Highly repeatable theory questions.",
      items: [
        { topic: "Evolution", keywords: ["evolution"],
          focus: "Simple-to-complex trends, Lamarck vs Darwin, homologous structures like the pentadactyl limb." },
        { topic: "Classification & Diversity", keywords: ["classification", "diversity"],
          focus: "Fern sporophyte dominance, arthropod castes (soldier vs worker termites)." },
      ],
    },
  ],
  Chemistry: [
    {
      title: "Calculation-Heavy Topics", emoji: "🟢",
      blurb: "Formula-driven questions that repeat every year.",
      items: [
        { topic: "Gas Laws & Kinetic Theory", keywords: ["gas", "kinetic"],
          focus: "Quantitative and graphical calculations using Boyle's, Charles', Ideal Gas and Graham's Law of Diffusion." },
        { topic: "Stoichiometry & Chemical Calculations", keywords: ["stoichiometr", "mole", "calculation"],
          focus: "Empirical/molecular formulas, reacting masses and volumes at S.T.P, water of crystallization, limiting reactants." },
        { topic: "Electrochemistry & Electrolysis", keywords: ["electro"],
          focus: "Faraday's Laws (M = ZIt), preferential discharge at cathode and anode, the electrochemical series." },
      ],
    },
    {
      title: "Equilibrium & Energy", emoji: "🟡",
      blurb: "Reading diagrams and predicting shifts.",
      items: [
        { topic: "Chemical Equilibria & Energetics", keywords: ["equilibri", "energetic", "thermo"],
          focus: "Le Chatelier's Principle (temperature and pressure shifts), potential energy profile diagrams, enthalpy (ΔH), free energy (ΔG) and entropy." },
      ],
    },
    {
      title: "Organic & Analysis", emoji: "🔵",
      blurb: "Theory and lab-based questions.",
      items: [
        { topic: "Organic Chemistry Principles", keywords: ["organic", "hydrocarbon"],
          focus: "IUPAC naming, functional group tests, structural isomerism, cracking, saponification, polymerization, esterification." },
        { topic: "Acids, Bases, Salts & Qualitative Analysis", keywords: ["acid", "salt", "qualitative"],
          focus: "pH, deliquescence, efflorescence, hygroscopy, indicators, salt tests using BaCl₂, NaOH and NH₄OH." },
      ],
    },
  ],
  Physics: [
    {
      title: "Mechanics & Heat", emoji: "🟢",
      blurb: "Calculation-based questions that repeat across years.",
      items: [
        { topic: "Mechanics", keywords: ["mechanic", "motion", "dynamic", "equilibri"],
          focus: "Scalars vs vectors, velocity-time graphs, momentum conservation, Hooke's Law, conditions for equilibrium and moments." },
        { topic: "Thermal Properties & Gas Laws", keywords: ["thermal", "heat", "gas law", "temperature"],
          focus: "Ideal gas equation (P1V1/T1 = P2V2/T2), fixed-point thermometers, specific heat capacity, latent heat of fusion and vaporization." },
      ],
    },
    {
      title: "Waves & Optics", emoji: "🟡",
      blurb: "Formulas plus concept checks.",
      items: [
        { topic: "Waves, Sound & Resonance", keywords: ["wave", "sound", "resonan"],
          focus: "Longitudinal vs transverse waves, echo depth (d = vt/2), sonometer wires and overtones, resonance tubes." },
        { topic: "Optics (Reflection & Refraction)", keywords: ["optic", "light", "reflection", "refraction"],
          focus: "Real/virtual images in curved mirrors and lenses (1/f = 1/u + 1/v), Snell's law and refractive index, critical angle, eye defects and corrective lenses." },
      ],
    },
    {
      title: "Electricity & Modern Physics", emoji: "🔵",
      blurb: "Circuit calculations and nuclear concepts.",
      items: [
        { topic: "Current Electricity & Capacitance", keywords: ["current electric", "electric", "capacit"],
          focus: "Series and parallel resistors (V = IR), terminal p.d. vs internal resistance (E = I(R + r)), effective capacitance." },
        { topic: "Modern Physics (Atomic & Nuclear)", keywords: ["modern", "atomic", "nuclear", "radioact"],
          focus: "Radioactive decay and half-life, photoelectric effect (E = hf - W0), subatomic particles, cathode rays, X-rays and gamma rays." },
      ],
    },
  ],
  Mathematics: [
    {
      title: "Algebra & Number Work", emoji: "🟢",
      blurb: "Calculation topics that come back year after year.",
      items: [
        { topic: "Number Bases & Modular Arithmetic", keywords: ["number base", "modular", "modulo", "base"],
          focus: "Conversions up to base 12, basic operations in other bases, and finding missing values in modular arithmetic tables." },
        { topic: "Polynomials & Roots", keywords: ["polynomial", "remainder", "root", "factor"],
          focus: "Remainder theorem, finding the roots of cubic equations, and factorizing completely." },
        { topic: "Proportionality & Variation", keywords: ["variation", "proportion"],
          focus: "Direct, inverse, joint and partial variation, including problems with two constants to find." },
      ],
    },
    {
      title: "Geometry", emoji: "🟡",
      blurb: "Diagram and graph questions.",
      items: [
        { topic: "Coordinate Geometry & Linear Graphs", keywords: ["coordinate", "graph", "gradient", "straight line"],
          focus: "Gradients, midpoints, slopes of parallel and perpendicular lines, and the minimum or maximum point of a parabola." },
        { topic: "Geometric Theorems & Circle Calculations", keywords: ["circle", "geometry", "polygon", "angle"],
          focus: "Regular polygons in circles, cyclic quadrilaterals, tangents, the alternate segment theorem, arc lengths and areas of shaded segments." },
      ],
    },
    {
      title: "Data & Probability", emoji: "🔵",
      blurb: "Quick marks if you know the methods.",
      items: [
        { topic: "Data Analysis & Probability", keywords: ["statistic", "probab", "data"],
          focus: "Pie chart angles, histograms, mean, median and mode, and probability of dependent and independent selections." },
      ],
    },
  ],
  English: [
    {
      title: "Language Skills", emoji: "🟢",
      blurb: "Rules and patterns that examiners keep recycling.",
      items: [
        { topic: "Lexis and Structure (Grammar & Concord)", keywords: ["lexis", "structure", "grammar", "concord"],
          focus: "Singular/plural constraints (furniture, equipment, electronics), proximity concord (as well as, no less than, alongside), subjunctive moods (it is time we did away with...)." },
        { topic: "Idioms & Clichés", keywords: ["idiom", "expression", "cliche"],
          focus: "High-frequency figurative phrases such as cross the Rubicon, a chip off the old block, pull the wool over my eyes." },
        { topic: "Oral Forms & Phonology", keywords: ["oral", "phonolog", "sound"],
          focus: "Vowel and consonant sound matching, silent letters (indict, chalet, paradigm), identical stress patterns and emphatic stress responses." },
      ],
    },
    {
      title: "Reading Skills", emoji: "🟡",
      blurb: "Marks come from reading the passage carefully.",
      items: [
        { topic: "Comprehension & Inference", keywords: ["comprehension", "passage", "inference"],
          focus: "Textual interpretation, the author's mood or attitude, choosing a suitable title, and working out vocabulary from context." },
      ],
    },
  ],
  Economics: [
    {
      title: "Microeconomics", emoji: "🟢",
      blurb: "Demand, cost and market theory examiners return to every year.",
      items: [
        { topic: "Demand, Supply & Price Determination", keywords: ["demand", "supply", "price determination"],
          focus: "Movements along a curve vs shifts, equilibrium price and quantity (Qd = Qs), government price controls (maximum price and minimum price)." },
        { topic: "Elasticity", keywords: ["elastic"],
          focus: "Mid-point and point coefficients of price elasticity of demand and supply, and cross-elasticity to tell substitutes from complements." },
        { topic: "Theory of Consumer Behaviour", keywords: ["consumer", "utility", "behaviour"],
          focus: "Cardinal utility (diminishing marginal utility) vs ordinal utility (indifference curves and the budget line)." },
        { topic: "Theory of Production & Cost", keywords: ["production", "cost"],
          focus: "Short-run vs long-run returns to scale, when diminishing returns set in (MP = 0 at maximum TP), costs (TC = TFC + TVC)." },
        { topic: "Market Structures", keywords: ["market structure", "competition", "monopoly"],
          focus: "Profit maximization where MC = MR, features of monopoly, oligopoly (collusion, price leadership) and monopolistic competition." },
      ],
    },
    {
      title: "Macroeconomics & Data", emoji: "🟡",
      blurb: "Formula-based questions with quick marks.",
      items: [
        { topic: "National Income Accounting & Multipliers", keywords: ["national income", "income"],
          focus: "Income, expenditure and value-added approaches, and the investment multiplier K = 1 / (1 - MPC)." },
        { topic: "Economic Statistics & Data Tools", keywords: ["statistic", "data"],
          focus: "Mean, median and mode, measures of dispersion (range, standard deviation, variance), tables and pie charts." },
      ],
    },
  ],
  Government: [
    {
      title: "Concepts & Structures", emoji: "🟢",
      blurb: "The core framework of the JAMB Government exam, tested every year.",
      items: [
        { topic: "Sovereignty, Statehood & Ideologies", keywords: ["sovereign", "state", "ideolog"],
          focus: "Attributes of a state (population, territory, government, sovereignty) and political philosophies: capitalism, socialism/Marxism, fascism, feudalism, totalitarianism." },
        { topic: "Structures & Organs of Government", keywords: ["organ", "arms of government", "separation of power", "executive", "legislat"],
          focus: "Executive, legislature and judiciary, their functions and quasi-functions, separation of powers, checks and balances." },
        { topic: "Constitutional Systems & Tiers of Government", keywords: ["constitution", "federal", "parliament", "presidential"],
          focus: "Parliamentary (Westminster) vs presidential systems, unicameral vs bicameral legislatures, federal, unitary and confederal systems." },
        { topic: "Elections & Public Administration", keywords: ["election", "franchise", "civil service", "public administration"],
          focus: "Types of franchise, gerrymandering, party systems, pressure groups vs political parties, civil service principles (anonymity, neutrality, permanence)." },
      ],
    },
    {
      title: "Nigerian & International Politics", emoji: "🟡",
      blurb: "History and foreign policy that keep repeating.",
      items: [
        { topic: "Nigerian Constitutional Evolution", keywords: ["constitutional development", "constitutional history", "evolution", "constitution"],
          focus: "Clifford 1922, Richards 1946, Macpherson 1951, Lyttleton 1954, then the 1960, 1963, 1979 and 1999 constitutions." },
        { topic: "Pre-Colonial Systems & Nationalism", keywords: ["pre-colonial", "precolonial", "nationalis", "traditional"],
          focus: "Centralized Hausa-Fulani Emirate and Oyo Empire vs the acephalous Igbo system, and early nationalist leaders." },
        { topic: "International Relations & Organizations", keywords: ["international", "foreign policy", "ecowas", "united nations"],
          focus: "Nigeria's foreign policy, ECOWAS, African Union (formerly OAU), Commonwealth, OPEC and the UN Security Council." },
      ],
    },
  ],
  Commerce: [
    {
      title: "Business & Finance", emoji: "🟢",
      blurb: "Core themes tested in every Commerce paper.",
      items: [
        { topic: "Scope of Commerce & Occupations", keywords: ["scope", "occupation", "introduction"],
          focus: "Commerce as the link between production and consumption, and occupations: extractive, manufacturing, constructive and service." },
        { topic: "Business Units & Mergers", keywords: ["business unit", "partnership", "company", "merger"],
          focus: "Risks of sole proprietorships and partnerships vs limited liability companies, and vertical, horizontal, lateral and conglomerate mergers." },
        { topic: "Financial Elements & Accounting Ratios", keywords: ["account", "financial", "capital", "ratio"],
          focus: "Balance sheets: fixed and circulating capital, current ratio, acid-test ratio and working capital." },
      ],
    },
    {
      title: "Trade, Marketing & Law", emoji: "🟡",
      blurb: "Documents, calculations and regulations that keep repeating.",
      items: [
        { topic: "Aids to Trade (Banking, Insurance, Warehousing)", keywords: ["aids to trade", "bank", "insurance", "warehous"],
          focus: "Insurance principles (indemnity, subrogation, utmost good faith, proximate cause) and the roles of commercial, merchant and central banks." },
        { topic: "Trade Documentation & Commercial Math", keywords: ["document", "discount", "invoice"],
          focus: "Cash and trade discounts (e.g. 5 net 7), pro forma invoices, bills of lading, indents and consular invoices." },
        { topic: "Marketing & Promotion", keywords: ["marketing", "promotion"],
          focus: "The 4 Ps (product, price, place, promotion), sales promotion, personal selling, market segmentation and pricing." },
        { topic: "Public Utilities, Regulation & Law", keywords: ["public utilit", "regulat", "contract", "law", "agency"],
          focus: "Privatization vs nationalization vs commercialization, NAFDAC and SON, and contract law (offer, acceptance, agency)." },
      ],
    },
  ],
  Literature: [
    {
      title: "Literary Skills", emoji: "🟢",
      blurb: "Terms and devices you must be able to identify.",
      items: [
        { topic: "General Literary Principles & Terminology", keywords: ["general literary", "principles", "terminology"],
          focus: "Drama terms (aside, soliloquy, deus ex machina, proscenium, flies), narrative viewpoints (first person vs third-person omniscient), poetry types (ballad, elegy, pastoral)." },
        { topic: "Figures of Speech & Literary Devices", keywords: ["figure", "speech", "device"],
          focus: "Telling apart oxymoron, paradox, synecdoche, metonymy, chiasmus and enjambment in passages." },
        { topic: "Literary Appreciation (Tone, Mood, Rhyme)", keywords: ["appreciation", "tone", "mood", "rhyme"],
          focus: "Working out the atmosphere (apprehension, melancholy, irony), the author's attitude, and rhyme schemes (abab, abba) from poems and drama extracts." },
      ],
    },
    {
      title: "Prescribed Texts", emoji: "🟡",
      blurb: "Characters, plots and themes of the set books.",
      items: [
        { topic: "William Shakespeare", keywords: ["shakespeare", "drama"],
          focus: "Characters, plot and context in Romeo and Juliet, Othello and The Tempest." },
        { topic: "African Prose", keywords: ["african prose"],
          focus: "Generational conflict, colonialism, social expectations and domestic life in The Joys of Motherhood, Purple Hibiscus, Faceless, Lonely Days and A Woman in Her Prime." },
        { topic: "Non-African Prose", keywords: ["non-african", "non african"],
          focus: "Totalitarianism, existential struggle and survival in Nineteen Eighty-Four and The Old Man and the Sea." },
      ],
    },
  ],
  CRK: [
    {
      title: "Old Testament", emoji: "🟢",
      blurb: "Covenants, kings and prophets.",
      items: [
        { topic: "Pentateuch & Patriarchal Covenants", keywords: ["pentateuch", "genesis", "exodus", "covenant", "patriarch"],
          focus: "Creation accounts (Genesis 1-2), Abraham's circumcision covenant, Passover and the Exodus, wilderness rebellions (fiery serpents, manna, water from the rock)." },
        { topic: "The Monarchy & Divided Kingdom", keywords: ["monarchy", "samuel", "david", "solomon", "kings"],
          focus: "Saul's rejection, David's sin and Nathan's rebuke, Solomon's wisdom, temple and foreign wives, Jeroboam's golden calves at Bethel and Dan, Josiah's reforms (621 BC)." },
        { topic: "Classical Prophetic Literature", keywords: ["prophet", "amos", "hosea", "isaiah", "jeremiah", "ezekiel", "daniel"],
          focus: "Amos on social justice, Hosea and Gomer, Isaiah's vision and holiness, Jeremiah's new covenant, Ezekiel's dry bones and individual responsibility, Daniel's furnace and lions' den." },
      ],
    },
    {
      title: "New Testament", emoji: "🟡",
      blurb: "Gospels, Acts and the letters.",
      items: [
        { topic: "Synoptic Gospels & Johannine Christology", keywords: ["synoptic", "gospel", "parable", "christology"],
          focus: "Infancy narratives, temptations, major parables (Sower, Mustard Seed, Prodigal Son, Lost Sheep, Wheat and Tares, Unmerciful Servant), Triumphal Entry, trial, crucifixion and resurrection appearances." },
        { topic: "Apostolic History (Acts of the Apostles)", keywords: ["acts", "apostol"],
          focus: "Pentecost and Joel's prophecy, election of the seven deacons, Paul's conversion, the Council of Jerusalem (49 AD), Paul's journeys and trials." },
        { topic: "Pauline & General Epistles", keywords: ["epistle", "pauline", "romans", "corinthian", "james", "peter"],
          focus: "Justification by faith (Romans, Galatians), Christ's humility (Philippians), spiritual gifts and love (1 Corinthians), the royal law and faith with works (James), suffering and citizenship (1 Peter)." },
      ],
    },
  ],
  Accounts: [
    {
      title: "Bookkeeping & Records", emoji: "🟢",
      blurb: "The foundations that every paper tests.",
      items: [
        { topic: "Accounting Concepts, Conventions & Ethics", keywords: ["concept", "convention", "ethic"],
          focus: "Matching, prudence/conservatism, entity and substance over form, and regulatory bodies (ICAN and ANAN)." },
        { topic: "Double Entry & Subsidiary Books", keywords: ["double entry", "subsidiary", "cash book", "suspense"],
          focus: "Source documents, two- and three-column cash books, imprest petty cash, and correcting errors with suspense accounts." },
        { topic: "Incomplete Records & Control Accounts", keywords: ["incomplete", "control account", "single entry"],
          focus: "Opening statement of affairs, converting single entry to double entry, finding credit sales and purchases, sales and purchases ledger control accounts." },
      ],
    },
    {
      title: "Final Accounts & Reporting", emoji: "🟡",
      blurb: "Preparation and analysis of financial statements.",
      items: [
        { topic: "Manufacturing & Departmental Accounts", keywords: ["manufacturing", "departmental"],
          focus: "Prime cost, production cost, work-in-progress adjustments, and apportioning overheads and joint costs." },
        { topic: "Partnership & Non-Profit Organizations", keywords: ["partnership", "non-profit", "club", "society"],
          focus: "Capital and current accounts, interest on drawings and capital, profit sharing, subscriptions and accumulated fund, dissolution (Garner v. Murray)." },
        { topic: "Company Accounts & Financial Ratios", keywords: ["company", "ratio", "share"],
          focus: "Share issues (at par, premium, discount, calls in advance), gearing, quick and current ratios, asset valuation." },
        { topic: "Public Sector (Government) Accounting", keywords: ["public sector", "government"],
          focus: "Consolidated Revenue Fund, capital vs recurrent expenditure, warrants and the Federation Account." },
      ],
    },
  ],
}

const HotTopics = ({ onNavigate, onBack, university = null, facultySubjects = [] }) => {
  const [selectedSubject, setSelectedSubject] = useState(null)
  const [mode, setMode] = useState(null) // "topics" | "questions"
  const [selectedTopic, setSelectedTopic] = useState(null) // only used in "questions" mode

  // Post-UTME users use their university's questions; everyone else uses the JAMB bank.
  const questionPool = useMemo(() => {
    const uni = university ? POST_UTME_UNIVERSITIES[university] : null
    const source = uni ? (uni.questions || []) : jambQuestions
    const toArray = (x) =>
      Array.isArray(x) ? x.flat(Infinity)
      : (x && typeof x === "object" ? Object.values(x).flat(Infinity) : [])
    return toArray(source).flatMap(q => {
      if (q && q.passage && q.questions) {
        return q.questions.map(inner => ({ ...inner, passage: q.passage, year: inner.year ?? q.year }))
      }
      return q ? [q] : []
    })
  }, [university])

  const canon = (name) => {
    const n = String(name || "").toLowerCase().replace(/[^a-z]/g, "")
    if (n.includes("english")) return "english"
    if (n.startsWith("math")) return "mathematics"
    if (n === "crk" || n === "crs" || n.includes("christianreligious")) return "crk"
    if (n === "irk" || n === "irs" || n.includes("islamicreligious")) return "irk"
    return n
  }

  const subjectList = useMemo(() => {
    const poolSubjects = [...new Set(questionPool.map(q => q.subject).filter(Boolean))]
    if (!facultySubjects || facultySubjects.length === 0) return poolSubjects
    const matched = facultySubjects
      .map(fs => poolSubjects.find(ps => canon(ps) === canon(fs)))
      .filter(Boolean)
    return matched.length > 0 ? [...new Set(matched)] : poolSubjects
  }, [facultySubjects, questionPool])

  // Hand-picked hot questions (JAMB only). Post-UTME users never see these.
  const getCuratedQuestions = (subject) =>
    university ? null : (CURATED_HOT_QUESTIONS[subject] || null)

  // Questions from the main bank for a topic (used by Study Mode matching)
  const getBankTopicQuestions = (subject, topic) =>
    questionPool.filter(q => q.subject === subject && q.topic === topic)

  // Auto-detected hot topics (2+ questions), or your curated list when one exists
  const getHotTopics = (subject) => {
    const curated = getCuratedQuestions(subject)
    const counts = {}
    if (curated) {
      curated.forEach(q => { if (q.topic) counts[q.topic] = (counts[q.topic] || 0) + 1 })
      return Object.entries(counts)
        .sort((a, b) => b[1] - a[1])
        .map(([topic, count]) => ({ topic, count }))
    }
    questionPool.forEach(q => {
      if (q.subject === subject && q.topic) counts[q.topic] = (counts[q.topic] || 0) + 1
    })
    return Object.entries(counts)
      .filter(([_, c]) => c >= 2)
      .sort((a, b) => b[1] - a[1])
      .map(([topic, count]) => ({ topic, count }))
  }

  const getTopicQuestions = (subject, topic) => {
    const curated = getCuratedQuestions(subject)
    return curated
      ? curated.filter(q => q.topic === topic)
      : getBankTopicQuestions(subject, topic)
  }

  // Curated groups for a subject, with each item matched to a real topic in the question bank
  const getCuratedGroups = (subject) => {
    const groups = CURATED_HOT_TOPICS[subject]
    if (!groups) return null
    const poolTopics = [...new Set(
      questionPool.filter(q => q.subject === subject && q.topic).map(q => q.topic)
    )]
    return groups.map(g => ({
      ...g,
      items: g.items.map(item => {
        const real = poolTopics.find(t =>
          item.keywords.some(k => t.toLowerCase().includes(k))
        )
        return {
          ...item,
          realTopic: real || item.topic,
          count: real ? getBankTopicQuestions(subject, real).length : 0,
        }
      }),
    }))
  }

  const subjectStats = subjectList
    .map(subject => {
      const hot = getHotTopics(subject)
      return {
        subject,
        hotTopicsCount: CURATED_HOT_TOPICS[subject]
          ? CURATED_HOT_TOPICS[subject].reduce((n, g) => n + g.items.length, 0)
          : hot.length,
        totalHotQ: hot.reduce((s, t) => s + t.count, 0),
      }
    })
    .filter(s => s.hotTopicsCount > 0)

  const handleBack = () => {
    if (selectedTopic) setSelectedTopic(null)
    else if (mode) setMode(null)
    else if (selectedSubject) setSelectedSubject(null)
    else onBack ? onBack() : onNavigate("home")
  }

  const Header = ({ title }) => (
    <header className="ee-header">
      <button className="ee-back-btn" onClick={handleBack}>← Back</button>
      <span style={{ fontWeight: 800, fontSize: 15 }}>{title}</span>
      <span style={{ width: 60 }} />
    </header>
  )

  const SubjectBanner = ({ subject, line }) => {
    const meta = SUBJECT_META[subject] || DEFAULT_META
    return (
      <div style={{
        background: `linear-gradient(135deg, ${meta.color}, ${meta.color}99)`,
        borderRadius: "var(--radius-xl)", padding: "16px 20px",
        marginBottom: 20, color: "#fff"
      }}>
        <div style={{ fontSize: 28, marginBottom: 6 }}>{meta.icon}</div>
        <div style={{ fontSize: 18, fontWeight: 800 }}>{subject}</div>
        <div style={{ fontSize: 12, opacity: 0.85, marginTop: 4 }}>{line}</div>
      </div>
    )
  }

  // ===== SCREEN 4 (Questions mode): questions under a topic =====
  if (selectedSubject && mode === "questions" && selectedTopic) {
    const questions = getTopicQuestions(selectedSubject, selectedTopic)
    const meta = SUBJECT_META[selectedSubject] || DEFAULT_META
    const isCurated = !!getCuratedQuestions(selectedSubject)
    return (
      <div className="ee-page">
        <Header title={`🔥 ${selectedTopic}`} />
        <div className="ee-content">
          <div style={{
            background: `linear-gradient(135deg, ${meta.color}, ${meta.color}99)`,
            borderRadius: "var(--radius-xl)", padding: "16px 20px",
            marginBottom: 20, color: "#fff"
          }}>
            <div style={{ fontSize: 13, opacity: 0.9, marginBottom: 4 }}>{selectedSubject} · Hot Questions</div>
            <div style={{ fontSize: 18, fontWeight: 800 }}>{selectedTopic}</div>
            <div style={{ fontSize: 12, opacity: 0.85, marginTop: 4 }}>
              🔥 {questions.length} hot question{questions.length === 1 ? "" : "s"}
            </div>
          </div>

          <p style={{ fontSize: 13, color: "var(--text2)", marginBottom: 16, lineHeight: 1.6 }}>
            These questions and concepts have appeared in multiple past exams. Master them for maximum marks.
          </p>

          <button
            className="ee-btn ee-btn-primary"
            style={{ marginBottom: 16 }}
            onClick={() => onNavigate(
              "hotTopicsQuiz", null, selectedSubject, null, university,
              isCurated ? { topic: selectedTopic, questions } : { topic: selectedTopic }
            )}
          >
            Practice These Questions 🚀
          </button>

          {questions.map((q, i) => (
            <div key={i} style={{
              background: "var(--surface)", border: "1px solid var(--border)",
              borderRadius: "var(--radius-md)", padding: "14px 16px", marginBottom: 12
            }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: meta.color, marginBottom: 8 }}>
                Q{i + 1} · {q.years?.length
                  ? `Tested ${q.years.length}× (${q.years.join(", ")})`
                  : (q.year || "Past Exam")}
              </div>

              {q.passage && (
                <div style={{
                  background: "var(--surface2)", borderRadius: "var(--radius-sm)",
                  padding: "10px 12px", marginBottom: 10,
                  borderLeft: `3px solid ${meta.color}`,
                  fontSize: 12, color: "var(--text2)", lineHeight: 1.7
                }}>
                  <div style={{ fontSize: 10, fontWeight: 800, color: meta.color, marginBottom: 4, textTransform: "uppercase" }}>
                    📖 Passage
                  </div>
                  {q.passage}
                </div>
              )}

              <div style={{ fontSize: 13, color: "var(--text)", lineHeight: 1.6, marginBottom: 10, fontWeight: 600 }}>
                <MathText text={q.question} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: q.explanation ? 10 : 0 }}>
                {q.options?.map((opt, j) => (
                  <div key={j} style={{
                    fontSize: 12, padding: "8px 12px",
                    borderRadius: "var(--radius-sm)",
                    background: opt === q.answer ? "rgba(34,197,94,0.15)" : "var(--surface2)",
                    border: `1px solid ${opt === q.answer ? "rgba(34,197,94,0.4)" : "var(--border)"}`,
                    color: opt === q.answer ? "#16a34a" : "var(--text2)",
                    fontWeight: opt === q.answer ? 700 : 400,
                    display: "flex", alignItems: "center", gap: 6
                  }}>
                    <span style={{
                      width: 18, height: 18, borderRadius: "50%", flexShrink: 0,
                      background: opt === q.answer ? "#16a34a" : "var(--border)",
                      color: opt === q.answer ? "#fff" : "var(--text3)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 10, fontWeight: 800
                    }}>{String.fromCharCode(65 + j)}</span>
                    <MathText text={opt} />
                    {opt === q.answer && <span style={{ marginLeft: "auto" }}>✓</span>}
                  </div>
                ))}
              </div>

              {q.explanation && (
                <div style={{
                  background: "rgba(102,126,234,0.08)", borderRadius: "var(--radius-sm)",
                  padding: "10px 12px", marginTop: 8, borderLeft: "3px solid var(--primary)"
                }}>
                  <div style={{ fontSize: 10, fontWeight: 800, color: "var(--primary)", marginBottom: 4, textTransform: "uppercase" }}>
                    💡 Why this answer is correct
                  </div>
                  <div style={{ fontSize: 12, color: "var(--text)", lineHeight: 1.7 }}>
                    <MathText text={q.explanation} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    )
  }

  // ===== SCREEN 3b (Questions mode): topic list =====
  if (selectedSubject && mode === "questions") {
    const hotTopics = getHotTopics(selectedSubject)
    const meta = SUBJECT_META[selectedSubject] || DEFAULT_META
    const isCurated = !!getCuratedQuestions(selectedSubject)
    return (
      <div className="ee-page">
        <Header title="🔥 Hot Questions" />
        <div className="ee-content">
          <SubjectBanner subject={selectedSubject} line={`${hotTopics.length} topics with hot questions`} />
          <h3 style={{ fontSize: 14, fontWeight: 800, color: "var(--text)", marginBottom: 12 }}>Pick a Topic</h3>

          {hotTopics.length === 0 && (
            <div className="ee-empty">
              <span className="ee-empty-icon">📭</span>
              <p>No hot questions found for {selectedSubject} yet.</p>
            </div>
          )}

          {hotTopics.map(({ topic, count }, i) => (
            <button
              key={i}
              onClick={() => setSelectedTopic(topic)}
              style={{
                width: "100%", display: "flex", alignItems: "center",
                justifyContent: "space-between", padding: "14px 16px",
                borderRadius: "var(--radius-md)", marginBottom: 8,
                background: meta.bg, border: `1.5px solid ${meta.color}40`,
                cursor: "pointer", fontFamily: "var(--font-main)", textAlign: "left"
              }}
            >
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)" }}>{topic}</div>
                <div style={{ fontSize: 11, color: "var(--text2)", marginTop: 2 }}>
                  {isCurated
                    ? `${count} hot question${count === 1 ? "" : "s"}`
                    : `Appeared ${count} times in past exams`}
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{
                  fontSize: 11, fontWeight: 800, padding: "3px 10px", borderRadius: 20,
                  background: count >= 10 ? "#ff6b35" : count >= 5 ? "#ed8936" : meta.color,
                  color: "#fff"
                }}>🔥 {count}</span>
                <span style={{ color: "var(--text3)" }}>→</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    )
  }

  // ===== SCREEN 3a (Topics mode): curated topics → Study Mode =====
  if (selectedSubject && mode === "topics") {
    const meta = SUBJECT_META[selectedSubject] || DEFAULT_META
    const groups = getCuratedGroups(selectedSubject)

    // Subjects with no curated list: fall back to auto-detected hot topics
    const fallback = !groups
      ? [{
          title: "Most Repeated Topics", emoji: "🔥", weight: "", blurb: "",
          items: getHotTopics(selectedSubject).map(({ topic, count }) => ({
            topic, realTopic: topic, count, focus: `Appeared ${count} times in past exams`,
          })),
        }]
      : null

    const list = groups || fallback
    const total = list.reduce((n, g) => n + g.items.length, 0)

    return (
      <div className="ee-page">
        <Header title="🔥 Hot Topics" />
        <div className="ee-content">
          <SubjectBanner subject={selectedSubject} line={`${total} hot topics · Tap one to study it`} />

          {list.map((group, gi) => (
            <div key={gi} style={{ marginBottom: 22 }}>
              <div style={{ marginBottom: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 16 }}>{group.emoji}</span>
                  <span style={{ fontSize: 14, fontWeight: 800, color: "var(--text)" }}>{group.title}</span>
                  {group.weight && (
                    <span style={{
                      fontSize: 10, fontWeight: 800, padding: "2px 8px", borderRadius: 20,
                      background: `${meta.color}22`, color: meta.color
                    }}>{group.weight}</span>
                  )}
                </div>
                {group.blurb && (
                  <div style={{ fontSize: 12, color: "var(--text2)", marginTop: 4 }}>{group.blurb}</div>
                )}
              </div>

              {group.items.map((item, i) => (
                <button
                  key={i}
                  // Opens this topic in Study Mode
                  onClick={() => onNavigate("studyTopic", item.realTopic, selectedSubject, null, university)}
                  style={{
                    width: "100%", display: "flex", alignItems: "center",
                    justifyContent: "space-between", gap: 10, padding: "14px 16px",
                    borderRadius: "var(--radius-md)", marginBottom: 8,
                    background: meta.bg, border: `1.5px solid ${meta.color}40`,
                    cursor: "pointer", fontFamily: "var(--font-main)", textAlign: "left"
                  }}
                >
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)" }}>{item.topic}</div>
                    <div style={{ fontSize: 11, color: "var(--text2)", marginTop: 3, lineHeight: 1.5 }}>
                      {item.focus}
                    </div>
                  </div>
                  <span style={{ color: "var(--text3)", flexShrink: 0 }}>📚 →</span>
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    )
  }

  // ===== SCREEN 2: choose Topics or Questions =====
  if (selectedSubject) {
    const meta = SUBJECT_META[selectedSubject] || DEFAULT_META
    const stats = subjectStats.find(s => s.subject === selectedSubject)
    const options = [
      { key: "topics", icon: "📚", title: "Hot Topics",
        sub: `${stats?.hotTopicsCount || 0} topics examiners keep coming back to · opens in Study Mode` },
      { key: "questions", icon: "❓", title: "Hot Questions",
        sub: `${stats?.totalHotQ || 0} hot questions with answers and explanations` },
    ]
    return (
      <div className="ee-page">
        <Header title="🔥 Hot Topics" />
        <div className="ee-content">
          <SubjectBanner subject={selectedSubject} line="What would you like to do?" />
          {options.map(o => (
            <button
              key={o.key}
              onClick={() => setMode(o.key)}
              style={{
                width: "100%", display: "flex", alignItems: "center",
                justifyContent: "space-between", gap: 12, padding: "18px",
                borderRadius: "var(--radius-md)", marginBottom: 12,
                background: meta.bg, border: `1.5px solid ${meta.color}40`,
                cursor: "pointer", fontFamily: "var(--font-main)", textAlign: "left"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span style={{ fontSize: 28 }}>{o.icon}</span>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 15, color: "var(--text)" }}>{o.title}</div>
                  <div style={{ fontSize: 12, color: "var(--text2)", marginTop: 2, lineHeight: 1.5 }}>{o.sub}</div>
                </div>
              </div>
              <span style={{ color: "var(--text3)", fontSize: 18 }}>→</span>
            </button>
          ))}
        </div>
      </div>
    )
  }

  // ===== SCREEN 1: subject selection =====
  return (
    <div className="ee-page">
      <Header title="🔥 Hot Topics" />
      <div className="ee-content">
        <div style={{
          background: "linear-gradient(135deg, #ff6b35, #f7c59f)",
          borderRadius: "var(--radius-xl)", padding: "20px", marginBottom: 24, color: "#fff"
        }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>🔥</div>
          <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 6 }}>Topics That Repeat Every Year</div>
          <div style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.6 }}>
            These topics keep showing up in past exam papers. Master them and you're already ahead of most candidates.
          </div>
        </div>

        <h3 style={{ fontSize: 14, fontWeight: 800, color: "var(--text)", marginBottom: 12 }}>Pick a Subject</h3>

        {subjectStats.length === 0 && (
          <div className="ee-empty">
            <span className="ee-empty-icon">📭</span>
            <p>No hot topics found yet.</p>
          </div>
        )}

        {subjectStats.map(({ subject, hotTopicsCount }) => {
          const meta = SUBJECT_META[subject] || DEFAULT_META
          return (
            <button
              key={subject}
              onClick={() => setSelectedSubject(subject)}
              style={{
                width: "100%", display: "flex", alignItems: "center",
                justifyContent: "space-between", padding: "16px 18px",
                borderRadius: "var(--radius-md)", marginBottom: 10,
                background: meta.bg, border: `1.5px solid ${meta.color}40`,
                cursor: "pointer", fontFamily: "var(--font-main)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span style={{ fontSize: 28 }}>{meta.icon}</span>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontWeight: 800, fontSize: 15, color: "var(--text)" }}>{subject}</div>
                  <div style={{ fontSize: 12, color: "var(--text2)", marginTop: 2 }}>
                    {hotTopicsCount} hot topics
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{
                  fontSize: 11, fontWeight: 800, padding: "3px 10px",
                  borderRadius: 20, background: meta.color, color: "#fff"
                }}>🔥 {hotTopicsCount}</span>
                <span style={{ color: "var(--text3)", fontSize: 18 }}>→</span>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default HotTopics