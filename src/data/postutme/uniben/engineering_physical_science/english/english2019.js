// UNIBEN Post-UTME 2019/2020 — Use of English
// 20 questions
// Faculty: Engineering & Physical Sciences
// Analysis notes:
//   FORMAT: Section A=Antonyms, Section B=Idiom meaning, Section C=Vocabulary — NO passage
//   RECURRING: rural/urban ★, voluntary/compulsory ★, affluence/poverty ★, fell through ★
//   NEW ANTONYMS: pride/humility, refined/crude, extinction/existence, ratified/refuted,
//                 agony/ecstasy, permitted/prohibited
//   NEW VOCAB: respite=temporary relief, pleasantries=jocular remarks, gullible=simple-minded

const unibenEnglish2019 = [
  // SECTION A — ANTONYMS (Q1-10)
  {
    subject: "English", topic: "Antonyms", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "There is no doubt that **pride** is a less desirable quality than ______.",
    options: ["Arrogance", "Honesty", "Efficiency", "Humility"],
    answer: "Humility",
    explanation: "Pride (excessive self-admiration) is contrasted with humility — modesty and low opinion of one's own importance. Pride and humility are classic moral opposites. Arrogance is a synonym of pride."
  },
  {
    subject: "English", topic: "Antonyms", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    isHotTopic: true,
    faculty: ["engineering", "physicalsciences"],
    question: "Few people prefer the **rural** to the ______ area.",
    options: ["Modern", "Urban", "Pastoral", "Rustic"],
    answer: "Urban",
    explanation: "Rural means relating to the countryside — farms, villages, open land. Its antonym is urban — relating to cities and towns. Pastoral and rustic are synonyms of rural. ★ RECURRING — rural/urban contrast appeared in 2018."
  },
  {
    subject: "English", topic: "Antonyms", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Dan is quite **refined** in his manners, but his colleagues are rather ______.",
    options: ["Arrogant", "Crude", "Cultured", "Unskillful"],
    answer: "Crude",
    explanation: "Refined means cultured, polished, and elegant in manner. Its antonym is crude — rough, unpolished, and lacking refinement or sophistication. Cultured is a synonym of refined, not its antonym."
  },
  {
    subject: "English", topic: "Antonyms", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Instead of helping to **preserve** our culture, the youth engage in activities that ______ it.",
    options: ["Denounce", "Alter", "Conserve", "Destroy"],
    answer: "Destroy",
    explanation: "Preserve means to maintain something in its original state — to protect from harm or change. Its antonym here is destroy — to damage or ruin completely. 'Conserve' is a synonym of preserve."
  },
  {
    subject: "English", topic: "Antonyms", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    isHotTopic: true,
    faculty: ["engineering", "physicalsciences"],
    question: "We should regard donations as ______ and not **compulsory**.",
    options: ["Mandatory", "Necessary", "Voluntary", "Destructive"],
    answer: "Voluntary",
    explanation: "Compulsory means required by law or rule — obligatory. Its antonym is voluntary — done by free choice, not under compulsion. Mandatory is a synonym of compulsory. ★ RECURRING — voluntary/compulsory pair."
  },
  {
    subject: "English", topic: "Antonyms", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    isHotTopic: true,
    faculty: ["engineering", "physicalsciences"],
    question: "The **affluence** of the politician contrasts with the ______ of the masses.",
    options: ["Poverty", "Suffering", "Hunger", "Hardship"],
    answer: "Poverty",
    explanation: "Affluence means great wealth and material abundance. Its direct antonym is poverty — the state of being extremely poor. The sentence sets up a contrast, making poverty the logical opposite. ★ RECURRING — affluence/poverty pair appeared in 2020."
  },
  {
    subject: "English", topic: "Antonyms", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The importation of rice is **permitted**, while that of wheat is ______.",
    options: ["Allowed", "Suspended", "Prohibited", "Approved"],
    answer: "Prohibited",
    explanation: "Permitted means officially allowed or authorised. Its antonym is prohibited — officially forbidden by law or rule. 'Allowed' and 'approved' are synonyms of permitted."
  },
  {
    subject: "English", topic: "Antonyms", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The goals scored lifted the team from the **agony** of defeat to the ______ of victory.",
    options: ["Approval", "Celebration", "Ceremony", "Ecstasy"],
    answer: "Ecstasy",
    explanation: "Agony means extreme physical or mental suffering. Its antonym is ecstasy — an overwhelming feeling of joy and happiness. The sentence contrasts the pain of defeat with the joy of victory — agony ↔ ecstasy."
  },
  {
    subject: "English", topic: "Antonyms", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "One species of animal has gone into **extinction**, while the other is still in ______.",
    options: ["Extinction", "Antiquity", "Existence", "Irrelevance"],
    answer: "Existence",
    explanation: "Extinction means the state of no longer existing — a species that has died out completely. Its antonym is existence — the state of being alive and present. A species in existence is still alive."
  },
  {
    subject: "English", topic: "Antonyms", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The council **ratified** the controversial recommendation, which we thought would be ______.",
    options: ["Refuted", "Rejoiced", "Authenticated", "Corroborated"],
    answer: "Refuted",
    explanation: "Ratified means officially approved or confirmed — given formal acceptance. Its antonym is refuted — rejected, disproved, or denied. We expected rejection (refutation) but got approval (ratification). Authenticated and corroborated are synonyms of ratified."
  },

  // SECTION B — EXPRESSION MEANING (Q11-15)
  {
    subject: "English", topic: "Idioms & Expressions", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "As he was **gullible**, his followers took advantage of him.",
    options: [
      "He was weak and unable to enforce his authority",
      "He was partial and unfair in dispensing justice",
      "He was simple-minded to a fault",
      "He was slow to act"
    ],
    answer: "He was simple-minded to a fault",
    explanation: "Gullible means easily deceived or cheated — too trusting and naive. A gullible person is simple-minded to a fault — naively accepting what others say without questioning. 'To a fault' means excessively so."
  },
  {
    subject: "English", topic: "Idioms & Expressions", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "He spoke with **his heart in his mouth**.",
    options: [
      "Courageously",
      "With unusual cowardice",
      "Without confusion in his speech",
      "Without being able to make up his mind"
    ],
    answer: "With unusual cowardice",
    explanation: "'With your heart in your mouth' means in a state of extreme anxiety or fear — so frightened that your heart seems to leap into your throat. Speaking this way implies great nervousness and fear (cowardice), not courage."
  },
  {
    subject: "English", topic: "Synonyms", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The **leader** in today's issue of Punch newspaper focuses on inflation.",
    options: ["President", "Headline", "Editorial", "Columnist"],
    answer: "Editorial",
    explanation: "A 'leader' in journalism is another word for a leading article or editorial — an article expressing the opinion of the editor/editorial board on an important issue. It is not the headline (a title) or a column by a columnist."
  },
  {
    subject: "English", topic: "Idioms & Expressions", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    isHotTopic: true,
    faculty: ["engineering", "physicalsciences"],
    question: "His plans **fell through**.",
    options: ["Failed", "Were accomplished", "Had to be reviewed", "Were rejected"],
    answer: "Failed",
    explanation: "'Fall through' means to fail to happen or be completed — plans that fell through are plans that collapsed and did not materialise. ★ RECURRING — 'fell through' is a high-priority phrasal verb."
  },
  {
    subject: "English", topic: "Synonyms", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "He **stared** at her.",
    options: ["Glanced", "Peeped", "Looked", "Gazed"],
    answer: "Gazed",
    explanation: "Stared means looked fixedly and intently for a long time. 'Gazed' is the most accurate synonym — gazing is a steady, prolonged look. 'Glanced' = a brief look; 'peeped' = looked secretly through a small opening; 'looked' is too general."
  },

  // SECTION C — VOCABULARY SYNONYMS (Q16-20)
  {
    subject: "English", topic: "Synonyms", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The man was able to persuade his **willful and obstinate** daughter.",
    options: [
      "Intelligent but arrogant",
      "Hardworking and intelligent",
      "Unyielding and obdurate",
      "Obscure and odious"
    ],
    answer: "Unyielding and obdurate",
    explanation: "Willful = determined to have one's own way, unyielding. Obstinate = stubbornly refusing to change = obdurate. Both words describe extreme stubbornness — 'unyielding and obdurate' is the correct synonym pair."
  },
  {
    subject: "English", topic: "Synonyms", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "That punch by the young boxer proved to be **fatal**.",
    options: ["Effective", "Belated", "Harsh", "Deadly"],
    answer: "Deadly",
    explanation: "Fatal means causing death. Its synonym is deadly — capable of causing or resulting in death. 'Effective' means successful; 'belated' means delayed; 'harsh' means severe but not necessarily lethal."
  },
  {
    subject: "English", topic: "Synonyms", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The patient was told that he would need **several** more pints of blood if he was to survive.",
    options: ["Plenty", "Some", "Much", "Many"],
    answer: "Many",
    explanation: "Several means more than two but not very many — used with countable nouns. 'Pints' are countable → use 'many' (for countable). 'Much' is for uncountable; 'plenty' means a large amount (less precise); 'many' matches 'several' for countable items."
  },
  {
    subject: "English", topic: "Synonyms", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "In spite of her grim situation, the young widow smiled beautifully at the visitors' **pleasantries**.",
    options: ["Uncanny comments", "Sad jokes", "Condolence messages", "Jocular remarks"],
    answer: "Jocular remarks",
    explanation: "Pleasantries are polite, light-hearted, or amusing remarks — casual small talk designed to be pleasant. 'Jocular remarks' = playful, joking comments. Visitors making pleasantries to a widow would use light, friendly humour to ease tension."
  },
  {
    subject: "English", topic: "Synonyms", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The presence of the security men in the area will provide a moment of **respite** for the residents.",
    options: ["Enduring reprieve", "Temporary relief", "Lasting security", "Smooth relaxation"],
    answer: "Temporary relief",
    explanation: "Respite means a short period of rest or relief from something difficult or unpleasant. 'Temporary relief' is the most accurate synonym — it is brief (temporary) and provides ease from hardship (relief). 'Enduring reprieve' implies permanence which contradicts 'moment'."
  }
]

export default unibenEnglish2019
