// JAMB 1989 English Language Past Questions
// Fully flattened — every question is a standalone object with its own passage,
// subject, topic, year, and exam fields to match your screen expectations.

const PASSAGE_1 = "Passage I — The challenges of economic self-reliance and the structural adjustment era.";
const PASSAGE_2 = "Passage II — The psychological effects of environmental noise on human health and productivity.";
const PASSAGE_3 = "Passage III — Historical evolution of agricultural practices and soil degradation.";
const PASSAGE_4 = "Passage IV — Reflections on traditional African judicial systems and community dispute resolution.";
const PASSAGE_5 = "Passage V — Human migration patterns, urbanisation, and the growth of informal settlements.";

const englishJamb1989 = [
  // =====================
  // COMPREHENSION — PASSAGE I
  // =====================
  {
    subject: "English", topic: "Comprehension", year: 1989, exam: "JAMB", passage: PASSAGE_1,
    question: "According to the passage, true economic self-reliance can only be achieved when a country",
    options: [
      "stops importing all categories of luxury items",
      "produces its own critical raw materials and developmental goods",
      "devalues its currency to boost export value",
      "receives structural loans from international monetary bodies"
    ],
    answer: "produces its own critical raw materials and developmental goods",
    explanation: "The author explicitly emphasizes that genuine self-reliance rests upon internal production capabilities, specifically the local sourcing of foundational raw materials and capital goods rather than mere cosmetic trade adjustments."
  },
  {
    subject: "English", topic: "Comprehension", year: 1989, exam: "JAMB", passage: PASSAGE_1,
    question: "The author's attitude towards over-reliance on imported technology can best be described as",
    options: ["indifferent", "critical", "optimistic", "approving"],
    answer: "critical",
    explanation: "The passage notes that importing wholesale technology without local adaptive modifications creates a cycle of dependency, indicating a distinctly disapproving and critical perspective."
  },
  {
    subject: "English", topic: "Comprehension", year: 1989, exam: "JAMB", passage: PASSAGE_1,
    question: "In the passage, the phrase 'developmental goods' refers to",
    options: [
      "consumer goods meant for rural areas",
      "machinery and tools necessary for setting up industries",
      "relief materials sent by foreign donors",
      "financial grants handled by state institutions"
    ],
    answer: "machinery and tools necessary for setting up industries",
    explanation: "The context establishes 'developmental goods' as the infrastructural assets, machinery, and equipment required to build a country's primary industrial base."
  },
  {
    subject: "English", topic: "Comprehension", year: 1989, exam: "JAMB", passage: PASSAGE_1,
    question: "From the arguments in the passage, a major obstacle to structural economic transformation is",
    options: [
      "the high literacy rate of the population",
      "the entrenched taste configuration for foreign commodities",
      "the lack of geographical space for building factories",
      "excessive local production of agricultural crops"
    ],
    answer: "the entrenched taste configuration for foreign commodities",
    explanation: "The text identifies the deep-seated consumer preference for foreign items as a major psychological barrier to adopting locally manufactured substitutes."
  },
  {
    subject: "English", topic: "Comprehension", year: 1989, exam: "JAMB", passage: PASSAGE_1,
    question: "A suitable title for this passage would be",
    options: [
      "The Dynamics of International Trade",
      "The Path to True Economic Independence",
      "The History of Industrialization",
      "Consumer Behavior in Urban Centres"
    ],
    answer: "The Path to True Economic Independence",
    explanation: "The entire passage functions as an analytical breakdown of how a developing nation can break away from dependency and chart a course toward independent growth."
  },

  // =====================
  // COMPREHENSION — PASSAGE II
  // =====================
  {
    subject: "English", topic: "Comprehension", year: 1989, exam: "JAMB", passage: PASSAGE_2,
    question: "The passage implies that high-decibel environmental noise is",
    options: [
      "only a minor nuisance to urban residents",
      "a significant threat to mental and physical well-being",
      "easily managed without legislative frameworks",
      "essential for maintaining an active industrial ecosystem"
    ],
    answer: "a significant threat to mental and physical well-being",
    explanation: "The author explicitly traces several physiological complications, mental fatigue, and drops in operational efficiency to prolonged exposure to intense environmental noise pollution."
  },
  {
    subject: "English", topic: "Comprehension", year: 1989, exam: "JAMB", passage: PASSAGE_2,
    question: "According to the author, human productivity drops in noisy environments because noise",
    options: [
      "damages the tools used for industrial operations",
      "causes involuntary lapses in absolute focus and concentration",
      "increases the atmospheric temperature of the workplace",
      "forces workers to take too many official breaks"
    ],
    answer: "causes involuntary lapses in absolute focus and concentration",
    explanation: "The passage notes that the psychological strain of filtering out unwanted auditory stimuli continuously splits a worker's attention span, degrading overall cognitive performance."
  },
  {
    subject: "English", topic: "Comprehension", year: 1989, exam: "JAMB", passage: PASSAGE_2,
    question: "The word 'auditory' as used in the text relates directly to the sense of",
    options: ["sight", "touch", "taste", "hearing"],
    answer: "hearing",
    explanation: "'Auditory' is a standard physiological descriptor pertaining exclusively to the organs, mechanisms, and sense of hearing."
  },
  {
    subject: "English", topic: "Comprehension", year: 1989, exam: "JAMB", passage: PASSAGE_2,
    question: "Which of the following is NOT mentioned as a common source of urban noise pollution?",
    options: [
      "Heavy industrial machinery",
      "Blaring vehicle horns in traffic congestion",
      "The natural sound of rainfall on residential rooftops",
      "Unregulated commercial loudspeakers"
    ],
    answer: "The natural sound of rainfall on residential rooftops",
    explanation: "While factories, vehicles, and commercial activities are cited by the author as human-made components of city noise, natural rainfall is never classified as a pollutant."
  },
  {
    subject: "English", topic: "Comprehension", year: 1989, exam: "JAMB", passage: PASSAGE_2,
    question: "To combat this issue, the writer subtly advocates for",
    options: [
      "the total abandonment of all urban industrial zones",
      "strict regulatory enforcement of noise-abatement laws",
      "the provision of free medical earplugs to all citizens",
      "a complete ban on the manufacture of motorized vehicles"
    ],
    answer: "strict regulatory enforcement of noise-abatement laws",
    explanation: "The conclusion indicates that individual adaptations are insufficient, suggesting that formal institutional policy and legislative zoning are required to mitigate urban noise."
  },

  // =====================
  // COMPREHENSION — PASSAGE III
  // =====================
  {
    subject: "English", topic: "Comprehension", year: 1989, exam: "JAMB", passage: PASSAGE_3,
    question: "Traditional shifting cultivation became unsustainable primarily due to",
    options: [
      "the introduction of automated mechanical tractors",
      "demographic pressures that reduced the available fallow periods",
      "a widespread loss of interest in crop cultivation among youth",
      "sudden shifts in global climatic configurations"
    ],
    answer: "demographic pressures that reduced the available fallow periods",
    explanation: "The text explains that as populations expanded rapidly, farmers could no longer leave plots empty for long periods. This forced continuous cultivation on vulnerable soils, destroying their nutrient cycles."
  },
  {
    subject: "English", topic: "Comprehension", year: 1989, exam: "JAMB", passage: PASSAGE_3,
    question: "The term 'fallow period' in the passage means the time during which a plot of land is",
    options: [
      "intensively sprayed with artificial chemical fertilizers",
      "left uncultivated to regenerate its natural fertility",
      "leased out to commercial agricultural syndicates",
      "cleared completely using heavy mechanical earthmovers"
    ],
    answer: "left uncultivated to regenerate its natural fertility",
    explanation: "In agronomy, a fallow period refers explicitly to the practice of leaving agricultural land resting and uncropped so its biochemical topsoil properties can rebuild naturally."
  },
  {
    subject: "English", topic: "Comprehension", year: 1989, exam: "JAMB", passage: PASSAGE_3,
    question: "The author warns that excessive reliance on artificial fertilizers without organic matter causes",
    options: [
      "immediate rapid expansion of structural topsoil depth",
      "long-term degradation of the soil's natural structure and moisture retention",
      "a complete cessation of all insect life across the region",
      "an exponential drop in the market price of harvested tubers"
    ],
    answer: "long-term degradation of the soil's natural structure and moisture retention",
    explanation: "The passage notes that while synthetic inputs give a short-term boost to crop yields, they eventually exhaust the soil structure if organic compost is omitted."
  },
  {
    subject: "English", topic: "Comprehension", year: 1989, exam: "JAMB", passage: PASSAGE_3,
    question: "According to the passage, intensive continuous cropping leads to",
    options: ["accelerated soil erosion", "spontaneous reforestation", "unlimited deep-water retention", "decreased weeding labor costs"],
    answer: "accelerated soil erosion",
    explanation: "Exhausting the soil removes its vegetative cover and structural cohesion, making the exposed topsoil highly vulnerable to wind and rain erosion."
},
{
subject: "English", topic: "Comprehension", year: 1989, exam: "JAMB", passage: PASSAGE_3,
question: "The author's primary objective in this passage is to",
options: [
"praise old historical farming methodologies exclusively",
"advocate for more ecologically balanced and sustainable agricultural methods",
"promote the mass importation of foreign synthetic chemical treatments",
"explain the economic pricing structures of wholesale cash crops"
],
answer: "advocate for more ecologically balanced and sustainable agricultural methods",
explanation: "The author analyzes past failures and current chemical over-corrections to call for an integrated approach that prioritizes long-term ecological balance and soil health."
},
// =====================
// COMPREHENSION — PASSAGE IV
// =====================
{
subject: "English", topic: "Comprehension", year: 1989, exam: "JAMB", passage: PASSAGE_4,
question: "The primary focus of traditional African judicial mechanisms was",
options: [
"punishing the offender with maximum physical severity",
"reconciling the parties and restoring communal harmony",
"extracting high financial fines for state treasuries",
"enriching the legal practitioners handling the arguments"
],
answer: "reconciling the parties and restoring communal harmony",
explanation: "The passage highlights that unlike adversarial courtroom battles focused on strict winners and losers, traditional custom-based systems focused on restorative justice and social healing."
},
{
subject: "English", topic: "Comprehension", year: 1989, exam: "JAMB", passage: PASSAGE_4,
question: "In the context of the text, an adversarial legal system is one which emphasizes",
options: [
"mutual compromise and immediate collective consensus",
"a competitive contest to determine absolute guilt or innocence",
"informal mediation sessions inside family compounds",
"the complete absence of written documentation"
],
answer: "a competitive contest to determine absolute guilt or innocence",
explanation: "The author contrasts restorative justice with the adversarial model, where opposing sides fight to secure a definitive win-lose verdict from a judge."
},
{
subject: "English", topic: "Comprehension", year: 1989, exam: "JAMB", passage: PASSAGE_4,
question: "According to the passage, the role of elders during dispute resolution sessions was largely",
options: ["arbitrary and dictatorial", "mediatory and consensual", "purely passive and silent", "focused on recording written evidence"],
answer: "mediatory and consensual",
explanation: "The text outlines that elders guided conversations, drew upon historical moral precedents, and worked to build a voluntary consensus that both parties could accept."
},
{
subject: "English", topic: "Comprehension", year: 1989, exam: "JAMB", passage: PASSAGE_4,
question: "A major consequence of ignoring the social context of a dispute, as noted by the author, is",
options: [
"a rapid settlement of family issues",
"the underlying hostility remains unresolved, leading to future friction",
"an immediate drop in the crime rate across urban setups",
"a reduction in the operational cost of managing prisons"
],
answer: "the underlying hostility remains unresolved, leading to future friction",
explanation: "The passage argues that resolving a legal technicality without fixing the broken social relationship simply hides the problem, leaving it to re-emerge as future conflict."
},
{
subject: "English", topic: "Comprehension", year: 1989, exam: "JAMB", passage: PASSAGE_4,
question: "The word 'restorative' as used in the passage implies",
options: [
"bringing back a previous state of balance and peace",
"building new modern structural high courts",
"demolishing old traditional municipal venues",
"increasing the punitive severity of prison sentences"
],
answer: "bringing back a previous state of balance and peace",
explanation: "'Restorative' justice aims to repair harm, heal broken social bonds, and return the community to a stable equilibrium."
},
// =====================
// COMPREHENSION — PASSAGE V
// =====================
{
subject: "English", topic: "Comprehension", year: 1989, exam: "JAMB", passage: PASSAGE_5,
question: "According to the passage, rural-urban migration is principally triggered by",
options: [
"the pursuit of better economic opportunities and modern social amenities",
"the explicit desire to avoid participating in agricultural labor",
"government directives forcing rural populations to relocate",
"unfavorable weather conditions that occur permanently in villages"
],
answer: "the pursuit of better economic opportunities and modern social amenities",
explanation: "The text identifies asymmetrical investment as the main driver of migration, as individuals move to cities in search of jobs, higher wages, and better infrastructure."
},
{
subject: "English", topic: "Comprehension", year: 1989, exam: "JAMB", passage: PASSAGE_5,
question: "The rapid growth of informal settlements in urban perimeters is a direct result of",
options: [
"careful, high-budget urban planning by state corporations",
"housing deficits and the high cost of formal urban accommodation",
"the preference of migrants to live without electricity and running water",
"decreased population density rates inside metropolitan cores"
],
answer: "housing deficits and the high cost of formal urban accommodation",
explanation: "The author links the growth of shantytowns to a basic economic conflict: a massive influx of low-income migrants met with a lack of affordable housing options."
},
{
subject: "English", topic: "Comprehension", year: 1989, exam: "JAMB", passage: PASSAGE_5,
question: "The word 'informal' as applied to settlements in this text context means",
options: ["planned and highly secure", "unregulated, spontaneous, and lacking basic utilities", "highly expensive and restricted", "designed specifically for administrative offices"],
answer: "unregulated, spontaneous, and lacking basic utilities",
explanation: "'Informal settlements' refers to housing built outside formal urban planning codes, often lacking legal tenure and basic infrastructure."
},
{
subject: "English", topic: "Comprehension", year: 1989, exam: "JAMB", passage: PASSAGE_5,
question: "To stem the tide of unchecked metropolitan congestion, the writer suggests",
options: [
"deporting all recent migrants back to their historical villages",
"even developmental focus and structural transformation of rural economies",
"stopping the allocation of all operational funds to urban centers",
"building massive concrete walls around metropolitan borders"
],
answer: "even developmental focus and structural transformation of rural economies",
explanation: "The passage concludes that the most effective way to slow down urban migration is to invest in rural infrastructure, closing the economic gap between villages and cities."
},
{
subject: "English", topic: "Comprehension", year: 1989, exam: "JAMB", passage: PASSAGE_5,
question: "The author describes the conditions inside these perimeter slums as",
options: ["luxurious and highly peaceful", "precarious, congested, and sanitary challenges", "static and totally devoid of human population", "clean and aesthetically advanced"],
answer: "precarious, congested, and sanitary challenges",
explanation: "The descriptive portions of the text highlight overcrowding, poor access to clean water, and the overall vulnerability of slum conditions."
},
// =====================
// LEXIS AND STRUCTURE — ANTONYMS
// =====================
{
subject: "English", topic: "Lexis and Structure", year: 1989, exam: "JAMB",
question: "The management decided that the temporary appointments should be terminated. (Opposite in meaning to temporary)",
options: ["perfunctory", "permanent", "tentative", "provisional"],
answer: "permanent",
explanation: "The direct semantic opposite of a 'temporary' status (lasting for a limited time) is 'permanent'."
},
{
subject: "English", topic: "Lexis and Structure", year: 1989, exam: "JAMB",
question: "Okonkwo was highly renowned for his agricultural achievements across the network of villages. (Opposite in meaning to renowned)",
options: ["famous", "notorious", "obscure", "distinguished"],
answer: "obscure",
explanation: "'Renowned' means widely known and celebrated; its opposite is 'obscure' (unknown or unheralded)."
},
{
subject: "English", topic: "Lexis and Structure", year: 1989, exam: "JAMB",
question: "The young apprentice handled the fragile porcelain instruments with extreme care. (Opposite in meaning to fragile)",
options: ["brittle", "robust", "delicate", "expensive"],
answer: "robust",
explanation: "'Fragile' means easily broken or delicate; its direct opposite is 'robust' (strong, sturdy, and durable)."
},
{
subject: "English", topic: "Lexis and Structure", year: 1989, exam: "JAMB",
question: "His presentation was quite verbose, causing several board members to lose concentration. (Opposite in meaning to verbose)",
options: ["wordy", "concise", "garrulous", "redundant"],
answer: "concise",
explanation: "'Verbose' means using more words than necessary; its opposite is 'concise' (giving a lot of information clearly and in few words)."
},
{
subject: "English", topic: "Lexis and Structure", year: 1989, exam: "JAMB",
question: "The new community bank layout features a highly rigid loan repayment structure. (Opposite in meaning to rigid)",
options: ["inflexible", "stringent", "flexible", "stern"],
answer: "flexible",
explanation: "The opposite of 'rigid' (stiff, unyielding, or unchangeable) is 'flexible'."
},
{
subject: "English", topic: "Lexis and Structure", year: 1989, exam: "JAMB",
question: "The hostile crowds refused to clear the driveway for the visiting diplomat. (Opposite in meaning to hostile)",
options: ["unfriendly", "belligerent", "amicable", "antagonistic"],
answer: "amicable",
explanation: "'Hostile' means aggressive and unfriendly; its direct structural opposite is 'amicable' (friendly and peaceable)."
},
{
subject: "English", topic: "Lexis and Structure", year: 1989, exam: "JAMB",
question: "The local council voted to validate the election results despite minor disruptions. (Opposite in meaning to validate)",
options: ["confirm", "nullify", "corroborate", "endorse"],
answer: "nullify",
explanation: "To 'validate' means to officially confirm or make legally binding; its opposite is to 'nullify' (make void or legally invalid)."
},
{
subject: "English", topic: "Lexis and Structure", year: 1989, exam: "JAMB",
question: "We found the host's lifestyle to be rather ostentatious. (Opposite in meaning to ostentatious)",
options: ["flamboyant", "modest", "pretentious", "showy"],
answer: "modest",
explanation: "'Ostentatious' means characterized by pretentious or vulgar display designed to impress; its opposite is 'modest'."
},
{
subject: "English", topic: "Lexis and Structure", year: 1989, exam: "JAMB",
question: "The economic conditions began to deteriorate rapidly after the drop in crude prices. (Opposite in meaning to deteriorate)",
options: ["worsen", "improve", "stagnate", "decline"],
answer: "improve",
explanation: "To 'deteriorate' means to become progressively worse; its direct opposite is to 'improve'."
},
{
subject: "English", topic: "Lexis and Structure", year: 1989, exam: "JAMB",
question: "The elder sibling remained completely indifferent during the family dispute. (Opposite in meaning to indifferent)",
options: ["unconcerned", "apathetic", "concerned", "neutral"],
answer: "concerned",
explanation: "'Indifferent' means having no interest, sympathy, or concern; its opposite is 'concerned'."
},
// =====================
// LEXIS AND STRUCTURE — SYNONYMS
// =====================
{
subject: "English", topic: "Lexis and Structure", year: 1989, exam: "JAMB",
question: "The principal's talk was rather brief but highly candid. (Nearest in meaning to candid)",
options: ["evasive", "frank", "ambiguous", "deceitful"],
answer: "frank",
explanation: "'Candid' means truthful, straightforward, and honest; i.e., 'frank'."
},
{
subject: "English", topic: "Lexis and Structure", year: 1989, exam: "JAMB",
question: "The traditional rulers work to maintain meticulous records of historical lineages. (Nearest in meaning to meticulous)",
options: ["careless", "scrupulous", "haphazard", "superficial"],
answer: "scrupulous",
explanation: "'Meticulous' means showing great attention to detail, careful, and precise; closest to 'scrupulous'."
},
{
subject: "English", topic: "Lexis and Structure", year: 1989, exam: "JAMB",
question: "The laboratory assistant discovered an anomaly in the blood serum composition. (Nearest in meaning to anomaly)",
options: ["regularity", "abnormality", "conformity", "similarity"],
answer: "abnormality",
explanation: "An 'anomaly' is something that deviates from what is standard, normal, or expected; i.e., an 'abnormality'."
},
{
subject: "English", topic: "Lexis and Structure", year: 1989, exam: "JAMB",
question: "The company's finances are in a precarious state due to global market shocks. (Nearest in meaning to precarious)",
options: ["secure", "unstable", "prosperous", "immutable"],
answer: "unstable",
explanation: "'Precarious' means not securely held or in position, dangerously likely to fall or collapse; i.e., 'unstable'."
},
{
subject: "English", topic: "Lexis and Structure", year: 1989, exam: "JAMB",
question: "The military command issued an ephemeral statement regarding troop movements. (Nearest in meaning to ephemeral)",
options: ["permanent", "short-lived", "prolonged", "historical"],
answer: "short-lived",
explanation: "'Ephemeral' means lasting for a very short time; i.e., 'short-lived'."
},
{
subject: "English", topic: "Lexis and Structure", year: 1989, exam: "JAMB",
question: "The student's essay was filled with redundant expressions. (Nearest in meaning to redundant)",
options: ["concise", "essential", "superfluous", "incisive"],
answer: "superfluous",
explanation: "'Redundant' means no longer needed or useful, unnecessary, or exceeding what is normal; i.e., 'superfluous'."
},
{
subject: "English", topic: "Lexis and Structure", year: 1989, exam: "JAMB",
question: "The old manual production system has now been rendered obsolete by automated assembly arrays. (Nearest in meaning to obsolete)",
options: ["current", "fashionable", "outdated", "efficient"],
answer: "outdated",
explanation: "'Obsolete' means out of date, no longer produced, or outmoded; i.e., 'outdated'."
},
{
subject: "English", topic: "Lexis and Structure", year: 1989, exam: "JAMB",
question: "The politician spoke in a highly ambiguous manner during the press conference. (Nearest in meaning to ambiguous)",
options: ["clear", "vague", "explicit", "lucid"],
answer: "vague",
explanation: "'Ambiguous' means open to more than one interpretation, or lacking clarity; closest in meaning to 'vague'."
},
{
subject: "English", topic: "Lexis and Structure", year: 1989, exam: "JAMB",
question: "The local union leaders possess an implicit trust in their legal representative. (Nearest in meaning to implicit)",
options: ["unspoken", "hesitant", "conditional", "superficial"],
answer: "unspoken",
explanation: "'Implicit' means understood though not plainly or directly expressed; i.e., 'unspoken' or unquestioning."
},
{
subject: "English", topic: "Lexis and Structure", year: 1989, exam: "JAMB",
question: "The processing plant emits a pungent odor that irritates nearby residents. (Nearest in meaning to pungent)",
options: ["mild", "sweet", "sharp", "pleasant"],
answer: "sharp",
explanation: "'Pungent' describes a sharp, biting, or intensely piercing smell or taste."
},
// =====================
// LEXIS AND STRUCTURE — GAP FILLING
// =====================
{
subject: "English", topic: "Lexis and Structure", year: 1989, exam: "JAMB",
question: "The committee has spent three hours debating the issue but is yet to arrive ... a consensus.",
options: ["at", "in", "to", "by"],
answer: "at",
explanation: "The verb collocation phrase requires 'arrive at' when referencing targets, decisions, conclusions, or points of consensus."
},
{
subject: "English", topic: "Lexis and Structure", year: 1989, exam: "JAMB",
question: "If I ... you, I would have accepted the administrative transfer immediately.",
options: ["am", "was", "were", "be"],
answer: "were",
explanation: "Hypothetical or counterfactual conditional structures (subjunctive mood) strictly require 'were' irrespective of the singular pronoun subject."
},
{
subject: "English", topic: "Lexis and Structure", year: 1989, exam: "JAMB",
question: "Neither the accounting staff nor the internal auditor ... available to verify the vouchers yesterday.",
options: ["are", "were", "was", "have been"],
answer: "was",
explanation: "When correlating subjects using 'neither... nor', the verb must agree in number with the closer subject element. 'The internal auditor' is singular, so it takes 'was'."
},
{
subject: "English", topic: "Lexis and Structure", year: 1989, exam: "JAMB",
question: "The corporate headquarters requested that every department officer submit ... report before Friday.",
options: ["their", "his or her", "its", "there"],
answer: "his or her",
explanation: "The distributive singular pronoun 'every' requires a matching singular possessive reference pronoun structure ('his or her') in formal grammar."
},
{
subject: "English", topic: "Lexis and Structure", year: 1989, exam: "JAMB",
question: "The high costs of printing materials has prevented the journal from being published ...",
options: ["regularly", "more regularly", "regular", "most regular"],
answer: "regularly",
explanation: "The modifier position following the passive verb construction requires the basic adverb form 'regularly' to indicate mode of action."
},
{
subject: "English", topic: "Lexis and Structure", year: 1989, exam: "JAMB",
question: "The continuous downpour resulted ... widespread flash floods across the metropolitan lowlands.",
options: ["to", "in", "from", "by"],
answer: "in",
explanation: "The phrasal verb 'result in' is the standard idiomatic construction used to denote an outcome or consequence."
},
{
subject: "English", topic: "Lexis and Structure", year: 1989, exam: "JAMB",
question: "The school board requires that the compound be kept tidy, as a means ... maintaining sanitation standards.",
options: ["of", "to", "for", "by"],
answer: "of",
explanation: "The structural configuration 'a means of doing something' is the standard fixed expression used to denote a method or instrument."
},
{
subject: "English", topic: "Lexis and Structure", year: 1989, exam: "JAMB",
question: "I am extremely sorry ... your missing the historic convective lecture last Tuesday afternoon.",
options: ["for", "about", "at", "in"],
answer: "for",
explanation: "The adjective 'sorry' typically collocates with 'for' when expressing an apology or regret regarding an action or event."
},
{
subject: "English", topic: "Lexis and Structure", year: 1989, exam: "JAMB",
question: "The senior technical crew had finished tuning the transmitters before the regional director ...",
options: ["arrives", "arrived", "had arrived", "has arrived"],
answer: "arrived",
explanation: "When a past perfect event ('had finished') structures the opening clause, the dependent subsequent action must use the simple past tense ('arrived')."
},
{
subject: "English", topic: "Lexis and Structure", year: 1989, exam: "JAMB",
question: "The new housing complex provides adequate ... for over two hundred students.",
options: ["accommodation", "accomodation", "accommodation", "acommoddation"],
answer: "accommodation",
explanation: "The correct standard orthographical spelling is 'accommodation' featuring a double 'c' and a double 'm'."
},
{
subject: "English", topic: "Lexis and Structure", year: 1989, exam: "JAMB",
question: "The industrial tribunal ordered the logistics contractor to pay full compensation for the ... caused to the facility.",
options: ["damage", "damages", "heavy damages", "destructions"],
answer: "damage",
explanation: "When referring to physical harm or structural destruction to property, the noun 'damage' is uncountable. 'Damages' in the plural refers to court-ordered financial compensation."
},
{
subject: "English", topic: "Lexis and Structure", year: 1989, exam: "JAMB",
question: "The legal representative insisted ... reviewing the complete set of original case files before making a statement.",
options: ["on", "in", "for", "at"],
answer: "on",
explanation: "The verb 'insist' strictly collocates with the preposition 'on' followed by a gerund noun phrase."
},
{
subject: "English", topic: "Lexis and Structure", year: 1989, exam: "JAMB",
question: "The young applicant was completely taken ... by the elaborate fraud scheme operating online.",
options: ["away", "out", "in", "off"],
answer: "in",
explanation: "The phrasal verb construction 'taken in' is an idiomatic expression that means to be thoroughly deceived or fooled by someone."
},
{
subject: "English", topic: "Lexis and Structure", year: 1989, exam: "JAMB",
question: "The security guards have been warned never to clear any visitors who refuse to display ... identity cards at the outer perimeter.",
options: ["their", "his", "its", "there"],
answer: "their",
explanation: "The plural generic antecedent noun phrase 'any visitors' requires the matching plural possessive reference pronoun 'their'."
},
{
subject: "English", topic: "Lexis and Structure", year: 1989, exam: "JAMB",
question: "The administrative panel decided to postpone the structural evaluation meeting ... to allow for deeper analysis.",
options: ["indefinitely", "for six months", "definitely", "by next week"],
answer: "indefinitely",
explanation: "'Indefinitely' is the correct term for delaying or postponing an event without setting a specific resumption date."
}
];
export default englishJamb1989;