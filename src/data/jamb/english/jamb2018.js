// JAMB 2018 English Language Past Questions
// Flat array of question objects. The source covered Questions 1–60 only.

const KEY = "according to the answer key in the supplied 2018 paper";

const make = (topic) => (question, options, answer, reason = KEY) => ({
  topic,
  year: 2018,
  subject: "English",
  exam: "JAMB",
  question,
  options,
  answer,
  explanation: `The correct answer is "${answer}" because ${reason}.`,
});

const comp = make("Comprehension");
const cloze = make("Cloze Test");
const lit = make("Literature");
const lexs = make("Lexis and Structure");
const opp = make("Opposite in Meaning");
const compl = make("Completion");
const near = make("Nearest in Meaning");
const vowel = make("Vowel Sounds");
const stress = make("Word Stress");

const jamb2018 = [
  // =====================
  // COMPREHENSION — PASSAGE A (1–6)
  // =====================
  comp(
    "What point of view is the Geography master fond of advancing?",
    [
      "Africans are infested with all kinds of problem",
      "Only the white men are free from deadly diseases",
      "The Almighty God is punishing Africans for sins they committed long ago.",
      "God did not curse the white people.",
    ],
    "God did not curse the white people."
  ),
  comp(
    "Which of the following arguments did he not use to support his view?",
    [
      "In Africa, the mosquito causes deadly malaria whereas in Britain, it doesn't bite or cause malaria",
      "There is malaria both in Britain and in African Countries",
      "The snakes in Africa are deadly but those in Britain are harmless",
      "The sickle cell disease is peculiar to the black race.",
    ],
    "There is malaria both in Britain and in African Countries"
  ),
  comp(
    "\"...rock the boat\" What figure of speech is this expression?",
    ["Simile", "Metaphor", "Personification", "Hyperbole"],
    "Metaphor"
  ),
  comp(
    "What extra argument did the new boy offer after countering each of the master's points?",
    [
      "There are problems especially in Africa",
      "There are deadly snakes in America and Africa",
      "There are harmless snakes in Britain",
      "Many white men prefer the African climate to their own.",
    ],
    "There are deadly snakes in America and Africa"
  ),
  comp(
    "Why do you think the master fought back with his look rather than with further argument?",
    [
      "He knew that the boy's points were valid",
      "He had answers to the boy's argument",
      "He went out to sort for the boy's argument",
      "He already made up his mind on his points.",
    ],
    "He already made up his mind on his points."
  ),
  comp(
    "\"...who had no answer to this new battle\". What grammatical name is given to the above expression as it is used in the passage?",
    [
      "(non-defining) relative clause",
      "Adverbial clause",
      "Subordinate clause",
      "Main clause",
    ],
    "(non-defining) relative clause",
    "the clause begins with the relative pronoun 'who' and adds extra information about the master"
  ),

  // =====================
  // CLOZE — PASSAGE B (7–10)
  // =====================
  cloze(
    "Mankind has been ravaged by many virus and ___ diseases such as measles, but tuberculosis, diarrhoea and many others including ___ known also as the ___ cold.",
    [
      "germ / catarrh / common",
      "bacterial / runny-nose / sporadic",
      "dirty / headache / universal",
      "mosquito / influenza / regular",
    ],
    "germ / catarrh / common"
  ),
  cloze(
    "Outbreaks of many of these diseases have been brought under control in the last fifty years. Some ___ like measles and whooping cough still pose a great danger to younger children.",
    ["pains", "fevers", "infection", "traces"],
    "fevers",
    "measles and whooping cough are feverish illnesses, and 'pains' does not fit"
  ),
  cloze(
    "The ___ of measles are more easily ___ than those of whooping cough.",
    [
      "symptoms / diagnosed",
      "appearance / treated",
      "feels / dealt with",
      "signs / handled",
    ],
    "symptoms / diagnosed"
  ),
  cloze(
    "Unlike that of many others, the virus of measles more easily remains ___ for hundreds of years.",
    ["unchanged", "constant", "undiscovered", "erratic"],
    "unchanged",
    "'unchanged' fits the contrast with viruses that mutate, whereas 'erratic' would mean the opposite"
  ),

  // =====================
  // CLOZE — PASSAGE III, PREPARED SPEECH (11–20)
  // =====================
  cloze(
    "Reading aloud with meaningful ___ inflection requires the speaker to be very familiar with the text.",
    ["vocal", "bifocal", "anticipatory", "profuse"],
    "vocal"
  ),
  cloze(
    "A prepared speech is not easy to deliver, especially if it is not written by the presenter. ___ delivery is one in which the speech has been written out word for word and is read to ___.",
    [
      "quantum / an audience",
      "document / a congregation",
      "free / a gathering",
      "manuscript / an audience",
    ],
    "manuscript / an audience",
    "a manuscript delivery is one where a written speech is read out to an audience"
  ),
  cloze(
    "This kind of delivery is usually reserved for very ___ occasions when exact wording is ___ such as the State of the Union Address.",
    [
      "genuine / reportive",
      "impromptu / conclusive",
      "guaranteed / critical",
      "formal / critical",
    ],
    "formal / critical",
    "exact wording matters most on formal occasions"
  ),
  cloze(
    "The primary advantage is that speech may be highly ___ in terms of word choice, turns of phrase and development of ideas.",
    ["advanced", "analogue", "discreet", "polished"],
    "polished",
    "a carefully prepared speech can be highly polished"
  ),
  cloze(
    "Such poor delivery could have ___ effects on the carefully chosen language.",
    ["decisive", "positive", "interactive", "restrictive"],
    "restrictive"
  ),
  cloze(
    "The carefully chosen ___ could also prevent the speaker from maintaining eye contact with the people being addressed.",
    ["dialect", "language", "slang", "text"],
    "language"
  ),
  cloze(
    "Lack of familiarity with the ___ could also prevent the speaker from maintaining eye contact with the people being addressed.",
    ["text", "context", "exchange", "note"],
    "text",
    "the passage says the speaker must be very familiar with the text to read it well"
  ),

  // =====================
  // LITERATURE — The First Days at Forcados High School (21–30)
  // =====================
  lit(
    "According to the novel, Efua was in Forcados High School because",
    [
      "her stepfather was a board member",
      "of her former principal's recommendation",
      "the school needed her mother's support",
      "of aunt Muni's gift to the school",
    ],
    "the school needed her mother's support"
  ),
  lit(
    "According to the novel, who intimated Efua that there was a clash between area boys?",
    ["Miss Novi", "Mr Salami", "Mr Edet", "Mr Mallum"],
    "Mr Salami"
  ),
  lit(
    "The speculation amongst the students of Forcados High School was that Jimi was dating",
    ["Joke", "Caro", "Risikat", "Efua"],
    "Caro"
  ),
  lit(
    "The best thing that happened to Efua at the end of the term was",
    [
      "the visit of Nene's family",
      "her participation in the Christmas concert",
      "her exclusion from Miss Novi's charity group",
      "the principal's open commendation of her result",
    ],
    "the principal's open commendation of her result"
  ),
  lit(
    "When did a boy faint at Forcados High School?",
    [
      "during the prize-giving day",
      "during the Mid-term dinner",
      "during the valedictory service",
      "during the inter-house sports competition",
    ],
    "during the valedictory service"
  ),
  lit(
    "Mr Mallum, the principal, was a symbol of",
    ["freedom", "envy", "condemnation", "achievement"],
    "condemnation"
  ),
  lit(
    "Ansa decided not to like Efua because he",
    [
      "learnt she was controversial",
      "thought she was fetish",
      "felt she was snobbish",
      "thought she was wayward",
    ],
    "learnt she was controversial"
  ),
  lit(
    "In the novel, Ansa looked around glumly when Jimi was engrossed in laughter and chatter because he was",
    [
      "distracted by a boy playing on the field",
      "neglected by Jimi",
      "given twelve strokes of the cane by the principal",
      "anxious to go home",
    ],
    "distracted by a boy playing on the field"
  ),
  lit(
    "Which of the following statements captures Ansa's thought about Jimi?",
    [
      "He thought Jimi was a lucky boy",
      "He was going to break his friendship with Jimi",
      "He thought Jimi cut corners to succeed",
      "He was envious of Jimi's achievement",
    ],
    "He thought Jimi cut corners to succeed"
  ),
  lit(
    "Jimi was still trembling when he got home from the bar because",
    [
      "he ran into a team of policemen",
      "Wole's friend wanted to beat him",
      "he saw an accident on the way",
      "he was carrying illicit drugs",
    ],
    "he was carrying illicit drugs"
  ),

  // =====================
  // LEXIS AND STRUCTURE — idioms (31–33)
  // =====================
  lexs(
    "I knew Okoronkwo's father very well and I must say that his son is a chip off the old block. This means that Okoronkwo",
    [
      "has chosen the same career as his father",
      "is very much like his father",
      "is an extremely different sort of person from his father",
      "has taken up a different profession from his father's",
    ],
    "is very much like his father",
    "the expression 'a chip off the old block' means a person is very much like his parent"
  ),
  lexs(
    "The debating team was warned to make convincing points and not to play to the gallery. This means that the team should not",
    [
      "be selfish",
      "underrate opponents",
      "be over-confident",
      "attempt to win cheap popularity",
    ],
    "attempt to win cheap popularity",
    "to 'play to the gallery' means to try to gain cheap popularity or approval"
  ),
  lexs(
    "Anyone who thinks that he can succeed in life without working hard is living in a fool's paradise. This means that such a person",
    [
      "is having an illusion",
      "thinks other people are fools",
      "thinks that working is merely a joke",
      "is on the verge of insanity",
    ],
    "is having an illusion",
    "a 'fool's paradise' is a state based on false hopes or an unrealistic belief"
  ),

  // =====================
  // OPPOSITE IN MEANING (34–43)
  // =====================
  opp(
    "I am happy to inform you that your boys are conscientious.",
    ["industrious", "careless", "indomitable", "limited"],
    "careless",
    "'careless' is the opposite of conscientious"
  ),
  opp(
    "My father is a very prosperous businessman.",
    ["ungrateful", "unscrupulous", "unskilled", "unsuccessful"],
    "unsuccessful",
    "the opposite of prosperous is unsuccessful"
  ),
  opp(
    "My hostess greeted her guest in a very relaxed manner.",
    ["energetic", "athletic", "stiff", "perplexed"],
    "stiff",
    "the opposite of relaxed in this context is stiff or formal"
  ),
  opp(
    "Ayo takes his studies rather lightly.",
    ["humorously", "tediously", "carefully", "seriously"],
    "seriously",
    "the opposite of taking something lightly is taking it seriously"
  ),
  opp(
    "The doctor was very gentle with his patients in the examining room.",
    ["harsh", "rude", "rough", "unkind"],
    "harsh",
    "the opposite of gentle is harsh"
  ),
  opp(
    "The President took exception to the ignoble role the young man played in the matter.",
    ["honourable", "embarrassing", "dishonourable", "extraordinary"],
    "honourable",
    "the opposite of ignoble is honourable"
  ),
  opp(
    "The man who had been seriously ill was convalescing at a seaside resort.",
    ["regaining health", "deteriorating in health", "recuperating", "relaxing"],
    "deteriorating in health",
    "convalescing means recovering from an illness, so the opposite is deteriorating in health"
  ),
  opp(
    "For millions of years, the world resources have remained boundless.",
    ["unlimited", "scarce", "indomitable", "limited"],
    "scarce"
  ),
  opp(
    "The difference between the experimental procedures was imperceptible to me.",
    ["negligible", "significant", "obvious", "obscure"],
    "significant"
  ),
  opp(
    "His antipathy to religious ideas makes him unpopular.",
    ["remedy", "consciousness", "hostility", "receptiveness"],
    "receptiveness",
    "'antipathy' means strong dislike, so the opposite is receptiveness"
  ),

  // =====================
  // COMPLETION (44–51)
  // =====================
  compl(
    "He was ___ by the trickster.",
    ["assisted", "duped", "enjoined", "encouraged"],
    "duped",
    "to be duped means to be deceived or tricked"
  ),
  compl(
    "When the soldiers saw that resistance was ___, they stopped fighting.",
    ["inadequate", "inefficient", "futile", "successful"],
    "futile",
    "futile means incapable of producing any useful result"
  ),
  compl(
    "You should read all the ___ carefully before you decide where to go on holiday.",
    ["brochures", "prospectus", "tickets", "handouts"],
    "brochures",
    "brochures contain information about places and services, which suits holiday planning"
  ),
  compl(
    "The Emir and Conqueror of the enemy territories ___ next week.",
    ["arrives", "are to arrive", "arrive", "are arriving"],
    "arrives"
  ),
  compl(
    "We ought to have visited the Governor, ___?",
    ["isn't it", "oughtn't we", "shouldn't we", "haven't we"],
    "oughtn't we",
    "the question tag for 'ought to have' repeats 'ought' in the negative"
  ),
  compl(
    "He didn't sense Obi's presence in the room, did he?",
    ["yes, he did", "No, he did", "Yes, he didn't", "No, he didn't"],
    "No, he didn't",
    "the negative statement is correctly answered with 'No, he didn't'"
  ),
  compl(
    "You can stay here ___ as you are quiet.",
    ["as long", "so long", "in a much", "for as long"],
    "as long",
    "'as long as' means provided that"
  ),

  // =====================
  // NEAREST IN MEANING (51–55)
  // =====================
  near(
    "The witness averred that she had seen Dosun at the scene of the crime.",
    ["argued", "confirmed", "denied", "affirmed"],
    "affirmed",
    "'averred' means stated or asserted to be true, which is closest to 'affirmed'"
  ),
  near(
    "The high cost of living these days calls for a lot of frugality.",
    ["extravagance", "economy", "recklessness", "prudence"],
    "economy",
    "'frugality' means careful spending, which is closest to 'economy'"
  ),
  near(
    "Tunde's reaction underscores the points I was making.",
    ["justifies", "summarizes", "emphasizes", "clarifies"],
    "emphasizes",
    "to 'underscore' means to emphasise"
  ),
  near(
    "Everyone admired the manager's adroit handling of the crisis in the company.",
    ["emphasised", "skillful", "tactless", "clumsy"],
    "skillful",
    "'adroit' means skillful or clever in handling situations"
  ),
  near(
    "The principal took exception to the ignoble role the teacher played in the matter.",
    ["embarrassing", "honourable", "extraordinary", "dishonourable"],
    "dishonourable",
    "'ignoble' means dishonourable"
  ),

  // =====================
  // VOWEL SOUNDS (56–57)
  // =====================
  vowel(
    "Choose the option that has the same vowel sound as \"key\".",
    ["sit", "bet", "seat", "tread"],
    "seat",
    "both words contain the long /iː/ vowel"
  ),
  vowel(
    "Choose the option that has the same vowel sound as \"taught\".",
    ["law", "aunt", "count", "plateau"],
    "law",
    "both words contain the /ɔː/ vowel"
  ),

  // =====================
  // WORD STRESS (58–60)
  // =====================
  stress(
    "Choose the appropriate stress pattern for \"comfortable\".",
    ["COMfortable", "comFORtable", "comfortaBLE", "comforTABLE"],
    "COMfortable",
    "the primary stress falls on the first syllable"
  ),
  stress(
    "Choose the appropriate stress pattern for \"incapacitate\".",
    ["inCApacitate", "incaPAcitate", "INcapacitate", "incapaciTATE"],
    "incaPAcitate",
    "the primary stress falls on the third syllable"
  ),
  stress(
    "Choose the appropriate stress pattern for \"encouragement\".",
    ["ENcouragement", "enCOUragement", "encouRAgement", "encouragement"],
    "enCOUragement",
    "the primary stress falls on the second syllable"
  ),
];

export default jamb2018;