// UNIBEN Post-UTME 2011/2012 — Use of English
// 40 questions
// Faculty: Engineering & Physical Sciences
// Analysis notes:
//   PASSAGE: Literary fiction — The First Rain of the Year (Achebe style)
//   IDIOMS: 11 questions — HIGHEST count across all years surveyed
//   NEW IDIOMS: set little store by, cup of tea, nose to grindstone, turning a hair,
//               go bananas, rude health, grasp the nettle, thick on ground, in a foal,
//               castles in air, fish out of water
//   VOCABULARY: 14 new words including old flame, brainwave, ball of fire, dark horse
//   GRAMMAR: condone vs console, corroborate vs collaborate, request (no 'for')

const unibenEnglish2011 = [

  // =====================
  // COMPREHENSION — The First Rain of the Year (Q1–10)
  // Analysis: Literary/descriptive passage — Achebe style writing
  // Tests: inference, vocabulary in context, author's intent
  // =====================
  {
    subject: "English", topic: "Comprehension", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    passage: "At last the rain came. It was sudden and tremendous. For two or three months, the sun had been gathering strength till it seemed to breathe a breath of fire on the earth. All the grass had long been scorched brown, and the earth felt like live coals to the feet. Evergreen trees wore dusty coats of brown. The birds were silenced in the forest, and the world lay panting under the live vibrating heat. And then came the clap of thunder. It was an angry, metallic, unrestful clap, unlike the deep and liquid rumbling of the rainy season. A mighty wind arose and filled the air with dust. Palm trees swayed as the wind combed their leaves into flying crests like strange and fantastic coiffures. When the rain finally came, it was in large solid drops of frozen water, which the people called 'the nuts of the water of heaven.' They were hard and painful on the body as they fell, yet young people ran about happily, picking up the cold nuts and putting them into their mouths to melt. The earth came to life, and the birds in the forest fluttered around and chirped merrily. A vague scent of life and green vegetation was diffused in the air as the rain began to fall more slowly and in smaller liquid drops. Children sought for shelter and all were happy, refreshed, and thankful.",
    question: "From the story above, we can deduce that:",
    options: [
      "This was the first rain of that year",
      "This was one of the numerous rains of the year",
      "The rain never fell",
      "The rain ceased and caused flooding"
    ],
    answer: "This was the first rain of that year",
    explanation: "The passage describes months of intense heat and drought before this rain. The dramatic build-up — scorched grass, silenced birds, 'live vibrating heat' — and the people's joyful reaction all suggest this was the first rain of the year, eagerly awaited after a long dry season."
  },
  {
    subject: "English", topic: "Comprehension", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    passage: "When the rain finally came, it was in large solid drops of frozen water, which the people called 'the nuts of the water of heaven.' They were hard and painful on the body as they fell, yet young people ran about happily, picking up the cold nuts and putting them into their mouths to melt.",
    question: "The falling of ice brought the people:",
    options: ["Hardship", "Sorrow", "Jest", "Pain"],
    answer: "Pain",
    explanation: "The passage explicitly states the frozen drops 'were hard and painful on the body as they fell.' Despite the pain, young people ran happily — so the ice brought both joy AND pain. However, the direct physical effect stated is pain."
  },
  {
    subject: "English", topic: "Comprehension", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    passage: "For two or three months, the sun had been gathering strength till it seemed to breathe a breath of fire on the earth.",
    question: "Months, according to the passage, mean:",
    options: ["Years", "Days", "Hours", "Months"],
    answer: "Months",
    explanation: "The passage says 'For two or three months, the sun had been gathering strength.' Months here means calendar months — the standard unit of time. The question tests whether students correctly identify the literal meaning of the word in context."
  },
  {
    subject: "English", topic: "Comprehension", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    passage: "The earth came to life, and the birds in the forest fluttered around and chirped merrily.",
    question: "According to the passage, what is the meaning of 'the earth quickly came to life'?",
    options: [
      "The otherwise dry vegetation became worse",
      "The dry vegetation regenerated",
      "The dry vegetation became watery",
      "The vegetation died as a result of wetness"
    ],
    answer: "The dry vegetation regenerated",
    explanation: "After the rain, the previously dry, scorched vegetation was revived — it came back to life. Birds chirped, scent of green vegetation was diffused. 'Came to life' means regenerated/was revived, not that it became watery or died."
  },
  {
    subject: "English", topic: "Comprehension", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    passage: "The world lay panting under the live vibrating heat.",
    question: "The expression 'live vibrating heat' means:",
    options: ["Extremely hot", "Piercingly cold", "Moderately hot", "Cool"],
    answer: "Extremely hot",
    explanation: "'Live vibrating heat' uses personification and intensity — 'live' suggests the heat was so intense it seemed alive, 'vibrating' suggests it was shimmering with intensity. Together they convey extreme, oppressive heat — far beyond moderate."
  },
  {
    subject: "English", topic: "Comprehension", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    passage: "And then came the clap of thunder. It was an angry, metallic, unrestful clap, unlike the deep and liquid rumbling of the rainy season.",
    question: "Metallic, according to the passage, means:",
    options: ["Melodious", "Mellifluous", "Harsh", "Undefined"],
    answer: "Harsh",
    explanation: "The thunder's clap is described as 'angry, metallic, unrestful' — contrasted with the 'deep and liquid rumbling of the rainy season.' Metallic in this context means harsh, sharp, and unpleasant — like striking metal. Melodious and mellifluous both mean pleasant-sounding, which is the opposite."
  },
  {
    subject: "English", topic: "Comprehension", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    passage: "Children sought for shelter and all were happy, refreshed, and thankful.",
    question: "As the rain fell, the children in the passage particularly:",
    options: [
      "Hated the rain",
      "Were indifferent to the rain",
      "Were not allowed in the rain",
      "Loved the rain"
    ],
    answer: "Loved the rain",
    explanation: "Young people 'ran about happily, picking up the cold nuts and putting them into their mouths to melt.' All were 'happy, refreshed, and thankful.' The children's joy is unmistakable — they loved the rain despite its physical pain."
  },
  {
    subject: "English", topic: "Comprehension", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    passage: "When the rain finally came, it was in large solid drops of frozen water... They were hard and painful on the body as they fell.",
    question: "The rain was 'hard and painful on the body' because:",
    options: [
      "It fell scantily",
      "It fell heavily",
      "It fell in little torrents",
      "It fell in large solid drops of frozen water"
    ],
    answer: "It fell in large solid drops of frozen water",
    explanation: "The passage directly states the rain was hard and painful because it came 'in large solid drops of frozen water' — essentially hailstones. The passage gives this as the explicit reason for the pain."
  },
  {
    subject: "English", topic: "Comprehension", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    passage: "At last the rain came. It was sudden and tremendous. For two or three months, the sun had been gathering strength...",
    question: "The most befitting title for this passage is:",
    options: [
      "The Torrential Rain",
      "The First Rain of the Year",
      "The Last Rain of the Year",
      "The Last of the Rains"
    ],
    answer: "The First Rain of the Year",
    explanation: "The passage describes the first rain after months of drought — the long dry season, the dramatic arrival, and the people's joyful response all indicate this is the eagerly awaited first rain of the year. 'The First Rain of the Year' captures the passage's essence perfectly."
  },
  {
    subject: "English", topic: "Comprehension", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    passage: "Evergreen trees wore dusty coats of brown.",
    question: "Evergreen trees wore a dusty coat of brown because:",
    options: [
      "It had just rained",
      "It was winter in the village",
      "It had not rained for a long time",
      "That was the natural colour of the plant"
    ],
    answer: "It had not rained for a long time",
    explanation: "Evergreen trees are naturally green. The fact that they wore 'dusty coats of brown' shows the prolonged drought had covered them in dust and dried them out. The passage confirms months of drought preceded the rain."
  },

  // =====================
  // IDIOMS (Q11–21)
  // Analysis: 11 questions — highest idiom count across all years ★
  // =====================
  {
    subject: "English", topic: "Idioms & Expressions", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "'It's obvious that Paul set little store by our friendship.' This means that Paul:",
    options: [
      "Does not remember our friendship",
      "Thinks it's easy to make friends",
      "Does not value our friendship",
      "We've been friends for too long"
    ],
    answer: "Does not value our friendship",
    explanation: "'Set little store by' means to consider something of little value or importance — to not value it. Paul regards the friendship as having little worth or significance."
  },
  {
    subject: "English", topic: "Idioms & Expressions", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "'Although wrestling is popular, it is not my cup of tea.' This means that wrestling:",
    options: ["Is a primitive game", "Is not lucrative", "Is rough", "Does not interest me"],
    answer: "Does not interest me",
    explanation: "'Not my cup of tea' means something that does not appeal to or interest a person — it is not to their taste. The speaker acknowledges wrestling's popularity but personally has no interest in it."
  },
  {
    subject: "English", topic: "Idioms & Expressions", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "'Voke's mother keeps her nose to the grindstone.' This means that Voke's mother:",
    options: [
      "Makes Voke grind things all the time",
      "Forces her to grind stone",
      "Keeps her hands on Voke's nose",
      "Makes Voke work all the time"
    ],
    answer: "Makes Voke work all the time",
    explanation: "'Keep someone's nose to the grindstone' means to keep someone working hard continuously without rest. Voke's mother ensures that Voke works constantly and diligently."
  },
  {
    subject: "English", topic: "Idioms & Expressions", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "'She delivered her speech without turning a hair.' This means she delivered her speech without:",
    options: ["Nodding", "Any emotion", "Looking up", "Combing her hair"],
    answer: "Any emotion",
    explanation: "'Without turning a hair' means without showing any sign of distress, nervousness, or emotion — completely calmly. She delivered the speech with absolute composure, not showing any feelings."
  },
  {
    subject: "English", topic: "Idioms & Expressions", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "'Ayor goes bananas every night she comes here.' This means that every night Ayor comes here, she:",
    options: ["Is cool and gentle", "Breaks her fast", "Prefers to be served with banana", "Is angry"],
    answer: "Is angry",
    explanation: "'Go bananas' means to become very angry, excited, or crazy. Ayor becomes extremely angry or loses her temper every night she visits."
  },
  {
    subject: "English", topic: "Idioms & Expressions", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "'Ide Mudiya is in rude health.' This means he is:",
    options: [
      "So rude and stubborn that nobody likes him",
      "In a poor state of health",
      "In very good health",
      "Arrogant"
    ],
    answer: "In very good health",
    explanation: "'In rude health' means in excellent physical health — strong and vigorous. The word 'rude' here is an archaic/formal use meaning robust or vigorous, not impolite."
  },
  {
    subject: "English", topic: "Idioms & Expressions", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "'Victor was advised to grasp the nettle.' This means he was advised to:",
    options: [
      "Avoid wasting an opportunity",
      "Deal with a difficult matter firmly",
      "Listen attentively to instructions",
      "Avoid dishonest people"
    ],
    answer: "Deal with a difficult matter firmly",
    explanation: "'Grasp the nettle' means to tackle a difficult or unpleasant situation boldly and directly. A nettle stings if touched lightly but hurts less if grasped firmly — the idiom means to deal with difficulties head-on."
  },
  {
    subject: "English", topic: "Idioms & Expressions", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "'It is obvious that civil engineers are thick on the ground.' This means civil engineers are:",
    options: ["Scarce", "Experienced", "Many", "Familiar with the ground"],
    answer: "Many",
    explanation: "'Thick on the ground' means present in large numbers — abundant and widespread. Civil engineers are very numerous/common."
  },
  {
    subject: "English", topic: "Idioms & Expressions", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "'The girl is in a foal.' This means the girl is:",
    options: ["Idle", "Pregnant", "Busy at work", "Enterprising"],
    answer: "Pregnant",
    explanation: "'In a foal' means pregnant. A foal is a young horse — 'in foal' is used for a mare that is pregnant, but the idiom is extended to mean pregnant in general colloquial usage."
  },
  {
    subject: "English", topic: "Idioms & Expressions", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "'Mr. Okon's plans are castles in the air.' This means his plans are:",
    options: [
      "Abstract",
      "Doubtful to come true",
      "Great enough to make him a pilot",
      "Well thought out"
    ],
    answer: "Doubtful to come true",
    explanation: "'Castles in the air' (also 'castles in Spain') means dreams or plans that are impractical and unlikely to be realised — built on nothing solid. Mr. Okon's plans are unrealistic fantasies."
  },
  {
    subject: "English", topic: "Idioms & Expressions", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "'In mathematics class, Olu always feels like a fish out of water.' This means that in mathematics class, Olu always:",
    options: ["Feels comfortable", "Feels shy", "Feels unrecognized", "Feels strange"],
    answer: "Feels strange",
    explanation: "'A fish out of water' describes someone who feels uncomfortable and out of place in a situation that doesn't suit them. Olu feels strange and out of his element in mathematics class — like a fish removed from its natural environment."
  },

  // =====================
  // VOCABULARY (Q22–35)
  // Analysis: rich vocabulary — old flame, brainwave, ball of fire, dark horse etc.
  // =====================
  {
    subject: "English", topic: "Vocabulary", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The traders unwittingly allowed themselves to be duped by fraudsters.",
    options: ["Knowingly", "Inadvertently", "Unfortunately", "Intentionally"],
    answer: "Inadvertently",
    explanation: "Unwittingly means without knowing or intending — not on purpose. Its nearest synonym is inadvertently — accidentally and without intention. Knowingly and intentionally are antonyms of unwittingly."
  },
  {
    subject: "English", topic: "Vocabulary", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "It was an agreeable atmosphere when the old classmates met at their reunion.",
    options: ["Congenial", "Attractive", "Palpable", "Pleasant"],
    answer: "Congenial",
    explanation: "Agreeable means pleasant and to one's liking. The most precise synonym is congenial — (of a person or atmosphere) pleasantly suited to one's taste or inclination. Both pleasant and congenial are close, but congenial best captures the social warmth of a reunion."
  },
  {
    subject: "English", topic: "Vocabulary", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "For the umpteenth time, she warned her friend to stop shouting.",
    options: [
      "First of many times",
      "Fifteenth time",
      "Last of many times",
      "Last time"
    ],
    answer: "Last of many times",
    explanation: "Umpteenth means an indefinitely large number in a sequence — the last of a very long series of repeated occurrences. It implies the warning has been given countless times before. 'For the umpteenth time' = 'for what feels like the hundredth time.'"
  },
  {
    subject: "English", topic: "Vocabulary", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The new staff member turned out to be an old flame of mine.",
    options: [
      "A former girlfriend",
      "An old acquaintance",
      "An old classmate",
      "A former neighbour"
    ],
    answer: "A former girlfriend",
    explanation: "An 'old flame' is a former romantic partner — someone with whom one previously had a romantic relationship. The term implies past romantic feelings that have since cooled."
  },
  {
    subject: "English", topic: "Vocabulary", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "It was an awful day. All our plans went haywire.",
    options: [
      "We were tied up",
      "We were disrupted",
      "Became difficult to carry out",
      "We abandoned"
    ],
    answer: "Became difficult to carry out",
    explanation: "'Went haywire' means went wrong, became chaotic, or failed to work properly. Plans that went haywire became impossible or very difficult to carry out as intended — everything fell apart."
  },
  {
    subject: "English", topic: "Vocabulary", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The material in the book is presented within an eclectic framework.",
    options: ["Simple", "Broad", "Restricted", "Clumsy"],
    answer: "Broad",
    explanation: "Eclectic means deriving ideas, style, or taste from a broad and diverse range of sources. An eclectic framework is broad — drawing from many different disciplines and perspectives rather than following a single narrow approach."
  },
  {
    subject: "English", topic: "Vocabulary", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Oyanye had a brainwave as to how she could deal with the problem.",
    options: ["An imagination", "A desire", "A headache", "An idea"],
    answer: "An idea",
    explanation: "A brainwave is a sudden clever idea or inspiration — a flash of brilliance. It is specifically a sudden good idea, not just any imagination or desire."
  },
  {
    subject: "English", topic: "Vocabulary", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Surely, Ahmed is a ball of fire.",
    options: [
      "A quarrelsome person",
      "A hot-headed activist",
      "A fiery speaker or writer",
      "A very energetic person"
    ],
    answer: "A very energetic person",
    explanation: "A 'ball of fire' describes someone who is exceptionally energetic, dynamic, and enthusiastic — full of vigour and drive. It refers to someone who moves through life with tremendous energy and enthusiasm."
  },
  {
    subject: "English", topic: "Vocabulary", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "This time, she will be competitive with a dark horse.",
    options: [
      "A weak and low-spirited person",
      "A person about whom little is known",
      "An unpopular candidate",
      "A person as strong as a horse"
    ],
    answer: "A person about whom little is known",
    explanation: "A 'dark horse' is a candidate or competitor about whom little is known but who unexpectedly succeeds. The term comes from horse racing — a horse whose form is unknown to bettors. The key element is the mystery about their capabilities."
  },
  {
    subject: "English", topic: "Vocabulary", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "In answer to the question as to how life is treating him, the stranger said, 'it never rains, but it pours.'",
    options: [
      "The blessings of life shower on him like heavy rain",
      "He is contented with his improved fortunes",
      "Things are getting decidedly worse",
      "His financial status is deteriorating"
    ],
    answer: "Things are getting decidedly worse",
    explanation: "'It never rains but it pours' means that misfortunes tend to come all at once — when things go wrong, they go very wrong. In context, the stranger is saying things are not just bad but getting significantly worse."
  },
  {
    subject: "English", topic: "Vocabulary", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "After many years of struggle as a trader, 'he struck gold'.",
    options: [
      "Became quite rich",
      "Won a big contract",
      "Became a gold miner",
      "Became a goldsmith"
    ],
    answer: "Became quite rich",
    explanation: "'Struck gold' means to find or achieve something very valuable or profitable — to become suddenly wealthy or successful after effort. After years of struggle, he finally found great success and wealth."
  },
  {
    subject: "English", topic: "Vocabulary", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "One salient character of the jet age is that it encourages people to cut corners.",
    options: [
      "Not to face problems",
      "To want to become rich quickly",
      "To avoid unnecessary hardships",
      "Not to do the proper thing at the right time"
    ],
    answer: "Not to do the proper thing at the right time",
    explanation: "'Cut corners' means to do something in the easiest and cheapest way, sacrificing quality and proper procedure. It means not doing things properly — taking shortcuts that bypass correct methods."
  },
  {
    subject: "English", topic: "Vocabulary", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Any student found guilty of examination malpractice should be allowed to stew in his own juice.",
    options: [
      "Retake the examination",
      "Suffer the consequences of his actions",
      "Bear the disgrace",
      "Forfeit further education"
    ],
    answer: "Suffer the consequences of his actions",
    explanation: "'Stew in one's own juice' means to suffer the unpleasant consequences of one's own actions without help from others. The student who cheated should face whatever consequences arise from their own wrongdoing."
  },
  {
    subject: "English", topic: "Vocabulary", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The lady who won the beauty contest had a good figure.",
    options: ["Stature", "Figure", "Elegance", "Courage"],
    answer: "Stature",
    explanation: "In this context, 'figure' refers to the shape and form of a person's body. The nearest synonym in the options is 'stature' — the height and build of a person. Note that 'figure' itself appears as option B, but UNIBEN's answer is 'stature' as the meaning of 'good figure'."
  },

  // =====================
  // SENTENCE COMPLETION (Q36–40)
  // Analysis: word choice — condone, corroborate, dampen, request
  // =====================
  {
    subject: "English", topic: "Lexis & Structure", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "I don't want to ______ your morale before the competition begins.",
    options: ["Damping", "Dump", "Dampen", "Doubt"],
    answer: "Dampen",
    explanation: "'Dampen' means to make someone feel less enthusiastic or confident — to reduce morale. 'Dampen someone's spirits/morale' is the correct collocation. 'Damping' is incorrect grammatically here. 'Dump' means to throw away. Always: dampen morale/spirits/enthusiasm."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The new president ______ the cooperation of everybody.",
    options: ["Requested", "Requested for", "Request", "Requests for"],
    answer: "Requested",
    explanation: "'Request' takes a direct object without a preposition — you request something (not 'request for something'). 'Requested for' is incorrect English. 'Request' in past tense is 'requested'. The sentence needs simple past: 'requested the cooperation'."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The man will not ______ any act of indiscipline from here.",
    options: ["Console", "Condole", "Condone", "Connote"],
    answer: "Condone",
    explanation: "Condone means to accept or allow behaviour that is considered wrong — to overlook or forgive. The man refuses to overlook/tolerate indiscipline. Console = comfort; condole = express sympathy; connote = imply a meaning — none fit the context."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Unless your excuse of alibi is ______ by a willing witness, the judge will convict you.",
    options: ["Collaborated", "Corrected", "Correlated", "Corroborated"],
    answer: "Corroborated",
    explanation: "Corroborate means to confirm or give support to a statement or theory — to verify with evidence. An alibi must be corroborated (confirmed) by a witness. Collaborate means to work together; correlate means to show a relationship. These are common confusables."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The woman complained to the police that she ______.",
    options: [
      "Has been duped",
      "Was being duped",
      "Had been duped",
      "Had been duped"
    ],
    answer: "Had been duped",
    explanation: "In reported speech, when the reporting verb is in the past ('complained'), the tense of the reported clause shifts back. 'Has been duped' (present perfect) becomes 'had been duped' (past perfect). The action of being duped happened before the complaining."
  }
]

export default unibenEnglish2011
