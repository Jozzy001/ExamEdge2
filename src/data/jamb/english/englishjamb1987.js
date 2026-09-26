// JAMB 1987 English Language Past Questions
// Fully flattened — every question is a standalone object with its own passage,
// subject, topic, year, and exam fields to match your screen expectations.

const PASSAGE_1 = "Passage I — The art of writing obituaries in Nigeria and 'mortuary stylistics'.";
const PASSAGE_2 = "Passage II — Excerpt from Chinua Achebe's Arrow of God (Unachukwu's speech on the white man).";
const PASSAGE_3 = "Passage III — Dialogue between a Manager and a Secretary regarding an untidy Conference Room.";
const PASSAGE_4 = "Passage IV — Primitive man's use of firebrand, lamps, and flame preservation.";
const PASSAGE_5 = "Passage V — Developments in electronic science and the transformation of record keeping.";

const englishJamb1987 = [
  // =====================
  // COMPREHENSION — PASSAGE I
  // =====================
  {
    subject: "English", topic: "Comprehension", year: 1987, exam: "JAMB", passage: PASSAGE_1,
    question: "The tone of this passage is",
    options: ["angry", "satirical", "non-committal", "pleasant"],
    answer: "satirical",
    explanation: "The author uses a mocking and ironical tone ('mortuary stylistics', 'every dead Nigerian must have been something of a saint') to critique how Nigerians exaggerate the virtues of the deceased."
  },
  {
    subject: "English", topic: "Comprehension", year: 1987, exam: "JAMB", passage: PASSAGE_1,
    question: "Mortuary 'stylistics' as used in the passage refers to the",
    options: ["art of writing obituaries", "text of obituaries", "study of obituaries", "art of eulogizing the dead"],
    answer: "art of eulogizing the dead",
    explanation: "The passage explicitly defines 'mortuary stylistics' as 'the study in the art of eulogizing the dead and making their loss sound so heart breaking'."
  },
  {
    subject: "English", topic: "Comprehension", year: 1987, exam: "JAMB", passage: PASSAGE_1,
    question: " 'One suspects that the reason why some of our newspapers still manage to break even...' suggests that some Nigerian newspapers",
    options: ["would be running at a loss but for obituaries", "are patronized only because they specialize in obituaries", "derive all their revenue from obituaries", "invest huge revenue in obituaries"],
    answer: "would be running at a loss but for obituaries",
    explanation: "To 'break even' means to cover costs without making a profit or loss; the passage notes they manage this 'because of the great amount of revenue they derive from obituaries,' implying that without it, they would run at a loss."
  },
  {
    subject: "English", topic: "Comprehension", year: 1987, exam: "JAMB", passage: PASSAGE_1,
    question: "Obituaries are very popular in Nigeria because",
    options: ["evil things are not said against the dead", "every dead Nigerian must have lived a saintly life", "only very few Nigerians die natural deaths", "Nigerians value their dead greatly"],
    answer: "Nigerians value their dead greatly",
    explanation: "The passage notes that one possible explanation for the massive volume of obituaries is that 'Nigerians value their dead greatly'."
  },

  // =====================
  // COMPREHENSION — PASSAGE II
  // =====================
  {
    subject: "English", topic: "Comprehension", year: 1987, exam: "JAMB", passage: PASSAGE_2,
    question: "The dominant subject of this passage is the",
    options: ["white man's road", "new religion", "white man's influence", "white man's weapons"],
    answer: "white man's influence",
    explanation: "The passage discusses the inescapable arrival of the white man, his religion, his roads, and his power, which collectively represent the total overrunning of local customs and lifestyle."
  },
  {
    subject: "English", topic: "Comprehension", year: 1987, exam: "JAMB", passage: PASSAGE_2,
    question: "According to the passage, the people of Umuaro and Okperi",
    options: ["are friends", "are only acquaintances", "are no friends", "can never be enemies"],
    answer: "are friends",
    explanation: "The text starts with Unachukwu stating, 'You all know how friendly we are with Okperi'."
  },
  {
    subject: "English", topic: "Comprehension", year: 1987, exam: "JAMB", passage: PASSAGE_2,
    question: " 'There is no escape from the white man' in the passage means that the",
    options: ["white man will send the people to prison", "white man can kill all the people with his gun", "people are only trying to run away from the white man", "people must accept the white man"],
    answer: "people must accept the white man",
    explanation: "The narrator points out that the white man has immense power that 'burns like fire' and will inevitably change all customs, meaning his presence is an inescapable reality the people must accept."
  },
  {
    subject: "English", topic: "Comprehension", year: 1987, exam: "JAMB", passage: PASSAGE_2,
    question: " 'Passes by your ears' in the passage means",
    options: ["piercing through your ears", "listening eagerly", "making no impression", "accepting as the truth"],
    answer: "making no impression",
    explanation: "Unachukwu says, 'I know that as I say it now it passes by your ears, but it will happen,' meaning they are ignoring his warning or not taking it seriously."
  },
  {
    subject: "English", topic: "Comprehension", year: 1987, exam: "JAMB", passage: PASSAGE_2,
    question: "Unachukwu's speech in this passage shows that he",
    options: ["is a coward", "wants his people to suffer", "loves the white man", "is wise with experience"],
    answer: "is wise with experience",
    explanation: "He speaks as an elder brother who has travelled extensively ('I have travelled in Olu and I have travelled in Igbo') and witnessed the destruction of Abame, giving him realistic foresight."
  },

  // =====================
  // COMPREHENSION — PASSAGE III
  // =====================
  {
    subject: "English", topic: "Comprehension", year: 1987, exam: "JAMB", passage: PASSAGE_3,
    question: "The relationship between the manager and his secretary, as revealed in the passage, could be said to be",
    options: ["strained", "charged", "personal", "cordial"],
    answer: "charged",
    explanation: "The dialogue consists of sharp questioning, physical excuses, and direct accountability arguments regarding a failure of duty, creating a highly tense, dynamic, and charged environment."
  },
  {
    subject: "English", topic: "Comprehension", year: 1987, exam: "JAMB", passage: PASSAGE_3,
    question: " 'I would not describe you as an inefficient worker...' suggests that the manager",
    options: ["is quite pleased with the level of diligence of his secretary", "has had cause in the past to complain against his secretary", "is dissatisfied with the level of performance of his secretary", "is non-committal over the efficiency of his secretary"],
    answer: "is quite pleased with the level of diligence of his secretary",
    explanation: "By stating he would *not* call the secretary inefficient, the manager establishes a baseline validation of the worker's usual competence, setting up his confusion as to why this specific lapse occurred."
  },
  {
    subject: "English", topic: "Comprehension", year: 1987, exam: "JAMB", passage: PASSAGE_3,
    question: "It would appear that the manager feels that the secretary",
    options: ["should have, if possible, personally cleaned the Conference Room", "should have ensured that someone else cleaned the Conference Room", "should have ensured that the cleaner did his job", "is a coward"],
    answer: "should have ensured that the cleaner did his job",
    explanation: "The manager argues that an assignment is only executed properly when it is supervised, asking: 'Was it sufficient for you to give instructions to the cleaner without ensuring that he actually carried them out?'"
  },
  {
    subject: "English", topic: "Comprehension", year: 1987, exam: "JAMB", passage: PASSAGE_3,
    question: "The secretary's attitude seems to be",
    options: [
      "Manager Sir, you employed this huge and recalcitrant cleaner and I am not going to do his job for him",
      " 'It is not the duty of a secretary to enforce the instructions he gives to his junior workers'",
      "I am a secretary by profession, not a cleaner",
      "It is not terribly important how tidy the Conference Room is for the meeting"
    ],
    answer: " 'It is not the duty of a secretary to enforce the instructions he gives to his junior workers'",
    explanation: "The secretary argues that he gave the instruction and shouldn't have to follow up or do it himself, showing he considers his duty ended once the order is issued."
  },
  {
    subject: "English", topic: "Comprehension", year: 1987, exam: "JAMB", passage: PASSAGE_3,
    question: "The last comment by the manager suggests that he",
    options: ["is going to hold the secretary responsible for what has happened", "is likely to reprimand both the secretary and the cleaner for dereliction of duty", "will punish the cleaner but warn the secretary", "will warn the cleaner and punish the secretary"],
    answer: "is going to hold the secretary responsible for what has happened",
    explanation: "The manager explicitly says, 'I shall not forget that you allowed a board meeting to take place in an untidy Conference Room,' solidifying that the responsibility stops with the secretary."
  },

  // =====================
  // COMPREHENSION — PASSAGE IV
  // =====================
  {
    subject: "English", topic: "Comprehension", year: 1987, exam: "JAMB", passage: PASSAGE_4,
    question: "Primitive man carried a firebrand during his journeys mainly for",
    options: ["illumination", "cooking of food", "flame preservation", "warmth"],
    answer: "flame preservation",
    explanation: "The text says: 'Before he discovered less laborious ways of making fire, he had to preserve it, and whenever he went on a journey he carried a firebrand with him.'"
},
{
subject: "English", topic: "Comprehension", year: 1987, exam: "JAMB", passage: PASSAGE_4,
question: "According to the passage, the torch probably developed from a",
options: ["firebrand", "twig", "lamp", "fibre"],
answer: "firebrand",
explanation: "The text notes: 'His discovery that the firebrand, from which the torch may well have developed...'"
},
{
subject: "English", topic: "Comprehension", year: 1987, exam: "JAMB", passage: PASSAGE_4,
question: "Primitive man was least concerned with fire as a",
options: ["means of cooking", "source of warmth", "source of light", "means of travelling"],
answer: "means of cooking",
explanation: "The text lists warmth, light, and preservation on journeys as primary early connections, and says his first concept of a lamp or illumination came accidentally while watching cooking fat, making active cooking a secondary or later structural development."
},
{
subject: "English", topic: "Comprehension", year: 1987, exam: "JAMB", passage: PASSAGE_4,
question: "One way early man made a lamp was by putting a lighted reed in a",
options: ["hollowed stone", "sea shell", "vessel", "molten fat"],
answer: "vessel",
explanation: "The text states: 'All he had to do was to fashion a vessel to contain fat and float a lighted reed in it.' Hollowed stones or sea shells were simply materials used to make those vessels."
},
{
subject: "English", topic: "Comprehension", year: 1987, exam: "JAMB", passage: PASSAGE_4,
question: "Primitive man preserved fire because",
options: ["he used it for illumination during his travels", "his method of making fire was laborious", "he wanted to discover how to make a lamp", "he wanted to develop the torch"],
answer: "his method of making fire was laborious",
explanation: "The text directly connects preservation to difficulty: 'Before he discovered less laborious ways of making fire, he had to preserve it...'"
},
// =====================
// COMPREHENSION — PASSAGE V
// =====================
{
subject: "English", topic: "Comprehension", year: 1987, exam: "JAMB", passage: PASSAGE_5,
question: "The author believes that electronic recording is",
options: ["superior only to mental recording", "inferior to both mental recording and writing", "superior to both mental recording and writing", "inferior to only writing"],
answer: "superior to both mental recording and writing",
explanation: "The author states that mental recording is dangerous due to memory loss/falsification, and writing isn't free from shortcomings either, but with electronic memory, 'these dangers have been largely overcome'."
},
{
subject: "English", topic: "Comprehension", year: 1987, exam: "JAMB", passage: PASSAGE_5,
question: "The writer believes that the art of record keeping has",
options: ["improved over the years", "endangered the art of writing", "changed human memory", "overcome all the problems facing it"],
answer: "improved over the years",
explanation: "The historical outline traces a clear path of improvement from vulnerable mental custody, to imperfect writing, up to clear electronic capture."
},
{
subject: "English", topic: "Comprehension", year: 1987, exam: "JAMB", passage: PASSAGE_5,
question: "How many stages of development did the writer mention while discussing the art of record keeping?",
options: ["Two", "Three", "Four", "Five"],
answer: "Three",
explanation: "The writer explicitly discusses three distinct eras: 1) Traditionally in people's minds (mental), 2) writing which replaced mental recording, and 3) the electronic memory."
},
{
subject: "English", topic: "Comprehension", year: 1987, exam: "JAMB", passage: PASSAGE_5,
question: "According to the author, human memory is unreliable because people",
options: ["die and we forget what they said", "forget events or tell lies", "do not always know when events happened", "do not always know who did what and when"],
answer: "forget events or tell lies",
explanation: "The passage notes that relying on human memory was dangerous because 'people either forgot events wholly or in part, or deliberately falsified details'."
},
{
subject: "English", topic: "Comprehension", year: 1987, exam: "JAMB", passage: PASSAGE_5,
question: "From the passage, we gather that writing is almost",
options: ["as unreliable as human memory", "as reliable as electronic memory", "more reliable than electronic recording", "not to be compared to any other recording system"],
answer: "as unreliable as human memory",
explanation: "The text says writing replaced mental records but was 'not entirely free from these shortcomings as untruths could be written... willingly or inadvertently,' putting it closer to memory issues than electronic perfection."
},
// =====================
// LEXIS AND STRUCTURE — ANTONYMS
// =====================
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "The retired General became a hard-nosed officer after fighting the war. (Opposite in meaning to hard-nosed)",
options: ["tough", "weak", "indifferent", "bed-ridden"],
answer: "weak",
explanation: "'Hard-nosed' means tough, unyielding, or uncompromising; its opposite is 'weak'."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "The house-wife was hard up before the end of each month. (Opposite in meaning to hard up)",
options: ["upset", "penniless", "borrowing", "in no need"],
answer: "in no need",
explanation: "'Hard up' means short of money or penniless; its opposite is to be wealthy or 'in no need'."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "The Lions lost the match because their goalkeeper was in a haze most of the time. (Opposite in meaning to in a haze)",
options: ["indisposed", "confused", "alert", "sleeping"],
answer: "alert",
explanation: "'In a haze' means dazed, unfocused, or confused; the opposite is being 'alert'."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "Unless we see the evils clearly, contending against them is like fighting the air. (Opposite in meaning to contending)",
options: ["avoiding", "struggling with", "combating", "repelling"],
answer: "avoiding",
explanation: "'Contend' means to engage, fight, or struggle against; the opposite action is 'avoiding'."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "The explosive growth of world population has not been caused by a sudden increase in human fertility. (Opposite in meaning to explosive)",
options: ["fantastic", "gradual", "combustible", "dangerous"],
answer: "gradual",
explanation: "'Explosive' implies an extremely rapid, sudden spike; its direct counter-concept is 'gradual'."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "It is generally believed that misers are not loved by many. (Opposite in meaning to misers)",
options: ["spendthrifts", "spenders", "hoarders", "savers"],
answer: "spendthrifts",
explanation: "A 'miser' is someone who hoards money stingily; a 'spendthrift' is a person who spends money extravagantly and wastefully."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "My brother's primary school foundation was solid and this influenced his secondary education. (Opposite in meaning to solid)",
options: ["sound", "sordid", "shaky", "weak"],
answer: "shaky",
explanation: "The direct structural opposite of a 'solid' foundation is a 'shaky' one."
},
// =====================
// LEXIS AND STRUCTURE — SYNONYMS
// =====================
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: " 'It is very difficult to know who is entitled to essential commodities these days', observed the mobbed NNSC official. (Nearest in meaning to entitled to)",
options: ["qualified for", "disqualified from", "eligible", "worthy of"],
answer: "eligible",
explanation: "Being 'entitled to' means having a rightful claim or being 'eligible' for something."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: " 'This is a miniaturized version of your house' remarked the Architect. (Nearest in meaning to miniaturized)",
options: ["compressed", "abridged", "decreased", "smaller"],
answer: "smaller",
explanation: "'Miniaturized' means made on a much smaller scale than normal."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "It is claimed that there is an extinct volcano near Pankshin. (Nearest in meaning to extinct)",
options: ["extinguished", "inactive", "dead", "disused"],
answer: "inactive",
explanation: "An 'extinct' volcano is permanently 'inactive' or dead."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "Bola has a sonorous voice. (Nearest in meaning to sonorous)",
options: ["high-pitched", "beautiful", "strong", "throaty"],
answer: "beautiful",
explanation: "'Sonorous' descriptions of a voice describe a full, rich, deep, and pleasant/beautiful sound."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "Some workers went on rampage at a trade-fair. (Nearest in meaning to went on rampage)",
options: ["turned violent", "robbed", "were angry", "demonstrated"],
answer: "turned violent",
explanation: "To 'rampage' means to move about in a destructive, wild, or violent crowd state."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "We have to identify the protagonists of the new movement. (Nearest in meaning to protagonists)",
options: ["enemies", "leading figures", "opponents", "believers"],
answer: "leading figures",
explanation: "'Protagonists' are the principal characters, advocates, or leading figures of a cause or movement."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "My nephew came in stealthily through the back gate. (Nearest in meaning to stealthily)",
options: ["briskly", "boldly", "wearily", "quietly"],
answer: "quietly",
explanation: "'Stealthily' means behaving secretly, cautiously, and quietly to avoid notice."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "The distance is not more than twenty kilometres as the crow flies. (Nearest in meaning to as the crow flies)",
options: ["by the longest route", "by the shortest route", "by air", "by the fastest means"],
answer: "by the shortest route",
explanation: "The idiom 'as the crow flies' means measuring the distance in a straight line, representing the shortest possible route."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "Your extreme patience sometimes infuriates me. (Nearest in meaning to infuriates)",
options: ["impresses", "annoys", "frustrates", "amuses"],
answer: "annoys",
explanation: "To 'infuriate' means to make extremely angry or intensely 'annoy'."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "I cannot understand how he suddenly became audacious contrary to his nature. (Nearest in meaning to audacious)",
options: ["proud", "bold", "rude", "hostile"],
answer: "bold",
explanation: "'Audacious' means showing a willingness to take surprisingly bold risks; fearless."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "His has been a life of make-belief. (Nearest in meaning to make-belief)",
options: ["faith", "fantasy", "grandeur", "religion"],
answer: "fantasy",
explanation: "A life of 'make-belief' or make-believe means living in a world of illusion and fantasy."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "Our teacher seldom comes late to school. (Nearest in meaning to seldom)",
options: ["very often", "always", "frequently", "hardly ever"],
answer: "hardly ever",
explanation: "'Seldom' means rarely or 'hardly ever'."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "At the age of 80, Musa wished he could put the clock back. (Nearest in meaning to put the clock back)",
options: ["stop the clock", "put down the clock", "go back in time", "have more time"],
answer: "go back in time",
explanation: "To 'put/turn the clock back' means to return to the past or 'go back in time'."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "The Director left his secret file to the Secretary in good faith. (Nearest in meaning to in good faith)",
options: ["with proof", "in anxiety", "in anticipation", "in trust"],
answer: "in trust",
explanation: "Entrusting something to someone 'in good faith' means doing so with honest intentions and mutual reliance, or 'in trust'."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "The Chief approached the issue with convincing disinterestedness. (Nearest in meaning to disinterestedness)",
options: ["lack of interest", "lack of personal interest", "inability to be interested", "unwillingness"],
answer: "lack of personal interest",
explanation: "'Disinterestedness' means freedom from selfish bias or personal interest; it does not mean boredom or lack of attention."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "Nothing irritates the clerk more, than being assigned miscellaneous duties. (Nearest in meaning to miscellaneous)",
options: ["classified", "confidential", "unscheduled", "assorted"],
answer: "assorted",
explanation: "'Miscellaneous' duties are mixed, varied items, or 'assorted' tasks."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "It is of fundamental importance that one sleeps properly. (Nearest in meaning to fundamental)",
options: ["undisputed", "basic", "special", "least"],
answer: "basic",
explanation: "'Fundamental' means forming a necessary base, core, or 'basic' component."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "I know you've been eaves-dropping all along. (Nearest in meaning to eaves-dropping)",
options: ["dropping gently", "paying attention", "listening secretly", "dropping all the leaves"],
answer: "listening secretly",
explanation: "'Eavesdropping' is defined explicitly as listening secretly to a private conversation."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "She showed an affected interest in the game. (Nearest in meaning to affected)",
options: ["real", "pretended", "concerned", "slight"],
answer: "pretended",
explanation: "'Affected' behavior or attitude is artificial, insincere, or 'pretended'."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "I would not like you to do the work piecemeal. (Nearest in meaning to piecemeal)",
options: ["at meal time", "bit by bit", "badly", "as a masterpiece"],
answer: "bit by bit",
explanation: "'Piecemeal' means done gradually or 'bit by bit'."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "I think I'll like to reiterate the points earlier made. (Nearest in meaning to reiterate)",
options: ["withdraw", "change", "challenge", "repeat"],
answer: "repeat",
explanation: "To 'reiterate' means to say or do something again repeatedly; to 'repeat'."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "The sudden death of the King put paid to the ambition of the Minister. (Nearest in meaning to put paid to)",
options: ["encouraged", "rewarded", "benefited", "terminated"],
answer: "terminated",
explanation: "To 'put paid to' something means to completely destroy, stop, or 'terminate' it."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "The man insisted on having no strings attached to the agreement. (Nearest in meaning to no strings attached)",
options: ["financial obligations", "documents", "conditions", "moral obligations"],
answer: "conditions",
explanation: "The idiom 'no strings attached' means an agreement has no special hidden provisos, restrictions, or 'conditions'."
},
// =====================
// LEXIS AND STRUCTURE — GAP FILLING
// =====================
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "I was.... hearing distance of the speaker.",
options: ["at", "into", "in", "within"],
answer: "within",
explanation: "'Within hearing distance' is the standard fixed prepositional phrase for proximity."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "Peter was such a skilful boxer that he was not afraid to take... anybody.",
options: ["to", "upon", "on", "in"],
answer: "on",
explanation: "To 'take on' means to confront or challenge an opponent."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "Owing to the constant harassment of the populace by armed robbers, all night guards have been instructed to shoot... every moving things.",
options: ["at sight", "by sight", "in sight", "off sight"],
answer: "at sight",
explanation: "The correct idiom is 'shoot at sight' (or on sight), meaning to shoot immediately when seen."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "My wife and I were to celebrate our silver wedding anniversary last Sunday. Unfortunately on that.... day, my father-in-law died mysteriously.",
options: ["fruitless", "faithful", "futile", "fateful"],
answer: "fateful",
explanation: "'Fateful' means having far-reaching, momentous, or typically controlled/disastrous consequences."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "The first graduation ceremony of the university was attended by men from all.... of life.",
options: ["works", "areas", "walks", "parts"],
answer: "walks",
explanation: "The correct idiomatic expression is 'walks of life' referring to various social positions or occupations."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "... guests enjoyed Joy's birthday party.",
options: ["The whole", "All the", "Every", "Those very"],
answer: "All the",
explanation: "'Guests' is plural, so it requires 'All the'. 'The whole' is used for singular mass counts."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "One would wish... missed that opportunity to be present at the graduation hall.",
options: ["to have not", "for having not", "to having", "not to have"],
answer: "not to have",
explanation: "The correct infinitive format for expressing a negative regret is 'not to have (done something)'."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "The ceremony was rounded... very late.",
options: ["up", "off", "of", "out"],
answer: "off",
explanation: "To 'round off' means to bring an event to a satisfactory close. 'Round up' means gathering scattered items or suspects."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "My... brother intends to get married in December.",
options: ["senior", "elder", "older", "oldest"],
answer: "elder",
explanation: "When comparing two siblings, 'elder' is the correct standard adjective."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "The... Affairs Officer is expecting all of us in the dining room.",
options: ["Student", "Student's", "Students", "Students'"],
answer: "Student",
explanation: "Used as a compound noun modifier, the singular attribute form 'Student Affairs Officer' is normal standard usage."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "Many a candidate... to realise the difference between written and spoken English.",
options: ["fails", "fail", "have failed", "is failing"],
answer: "fails",
explanation: "The construction 'Many a' is singular in form and strictly takes a singular verb ('fails')."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "Chinyere has not really described the Cabinet as irresponsible; she only... it in her speech.",
options: ["alluded to", "implied", "applied", "suggested"],
answer: "alluded to",
explanation: "To 'allude to' means to mention or hint at something indirectly."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: " '... at 9.30 for more news', said the announcer.",
options: ["Switch on", "Tune in", "Hook on", "Channel in"],
answer: "Tune in",
explanation: "To 'tune in' means to adjust a radio or television control to receive a specific broadcast channel or frequency."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "The way that big boy bullied his sister with relish makes me think he could be a ...",
options: ["bully", "sadist", "pugilist", "tyrant"],
answer: "sadist",
explanation: "A 'sadist' is someone who derives active pleasure from inflicting pain or humiliation on others; the sentence highlights he does it 'with relish'."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "All... well with Peter.",
options: ["are not", "have not been", "were not", "is not"],
answer: "is not",
explanation: "'All' here denotes a singular abstract state of things, thus requiring the singular 'is not'."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "One... so if she had thought it necessary.",
options: ["would have said", "would say", "may have said", "could say"],
answer: "would have said",
explanation: "The past conditional structure ('if she had thought') requires the perfect conditional main clause ('would have said')."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "We have done three quarters of the journey already, we... as well see the end of it.",
options: ["can", "might", "could", "may"],
answer: "might",
explanation: "The idiom 'might as well' or 'may as well' indicates that doing something is logical since there's no reason not to; given past contextual flow, 'might' fits perfectly."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "My little daughter has... sight, hence, she now wears glasses.",
options: ["dimunitive", "blurred", "painful", "defective"],
answer: "defective",
explanation: "Medical visual conditions requiring correction are described broadly as 'defective' sight."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "Bassey's evidence led... Okon being imprisoned for life.",
options: ["at", "into", "in", "to"],
answer: "to",
explanation: "The verb 'led' collocates with the preposition 'to' when indicating a consequence."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "My boss is usually a charming man but... he can be very irritable.",
options: ["atimes", "at times", "those times", "with times"],
answer: "at times",
explanation: "The correct standard expression is spelled as two words: 'at times' (meaning occasionally)."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "We surely ought to have an... arrangement in case somebody discovers the present strategy.",
options: ["alternate", "alternating", "alternative", "alternant"],
answer: "alternative",
explanation: "'Alternative' means available as another choice or backup plan."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "The nurse kept apologizing to mothers as she stuck her needle... every baby at the clinic.",
options: ["in", "onto", "on to", "into"],
answer: "into",
explanation: "To penetrate skin surfaces with a needle requires the dynamic preposition 'into'."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "One of the ladies who... in the premises... been asked to withdraw.",
options: ["sells/have", "sell/have", "sells/has", "sell/has"],
answer: "sell/has",
explanation: "The relative clause modifies 'the ladies' (plural), so it takes 'sell'. The main subject is 'One' (singular), so it takes 'has'."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: " 'A Tale of Two Cities'... the... we are studying for the examination.",
options: ["are/novels", "was/novel", "were/novels", "is/novel"],
answer: "is/novel",
explanation: "A book title is treated as a singular entity ('is'), and it is classified singular as a 'novel'."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "We must not take with us the feelings of inadequacy experienced during our preparations for the debate... that is always superior to any other in town.",
options: ["that were", "those were", "that was", "that is"],
answer: "that were",
explanation: "Modifying plural 'feelings of inadequacy' requires the matching plural structural marker 'that were' or 'which were'."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "Omogbai reported that the examinations... before he arrived in the hall.",
options: ["started", "have started", "had started", "are started"],
answer: "had started",
explanation: "Past perfect ('had started') is required to show an action completed before another past milestone ('arrived')."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "In my opinion, neither the players nor the coach... praise for the result of the match.",
options: ["deserves", "deserve", "are deserving", "is deserving"],
answer: "deserves",
explanation: "When using 'neither... nor', the verb agrees with the closer subject. 'The coach' is singular, so it takes 'deserves'."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "No one has said anything yet, but I think I ... be getting a salary increase next month.",
options: ["must", "can", "would", "may"],
answer: "may",
explanation: "'May' expresses speculation or a possibility regarding a future event."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "Student: Excuse me sir, must we complete the assignment before lunch? Teacher: No you...",
options: ["needn't", "mustn't", "can't", "shouldn't"],
answer: "needn't",
explanation: "When answering a question starting with 'must' in the negative to show absence of obligation, 'needn't' is the correct response."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "During the demonstration, the mobile police were instructed to break... the students' defense line.",
options: ["off", "open", "through", "down"],
answer: "through",
explanation: "To 'break through' means to forcefully pass through a barrier or defensive line."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "Roli failed because the examination was... difficult for her.",
options: ["so", "very", "highly", "too"],
answer: "too",
explanation: "'Too' indicates an excessive degree that leads to a negative result (failing)."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "My brother does not have a flair... Mathematics.",
options: ["for", "in", "at", "of"],
answer: "for",
explanation: "The noun 'flair' correctly collocates with the preposition 'for' (meaning natural ability)."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "The poor little kid has been down... fever these few days.",
options: ["with", "from", "in", "for"],
answer: "with",
explanation: "The idiom is to be 'down with' an illness or fever."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "He did not stop to ask himself why... such thing.",
options: ["should he do", "he should do", "should he have done", "did he do"],
answer: "he should do",
explanation: "An indirect question within a statement requires standard declarative word order (subject + verb: 'he should do') instead of inversion."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "The quarrel has got to a stage where someone has to...",
options: ["interrupt", "interfere", "intrude", "intervene"],
answer: "intervene",
explanation: "To 'intervene' means to step into a dispute or conflict to resolve it intentionally."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "The villages looked... their leader for good examples.",
options: ["up to", "on to", "up at", "forward to"],
answer: "up to",
explanation: "To 'look up to' someone means to respect or admire them as a role model."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "The hunter brought home... antelope.",
options: ["alive", "a life", "alive", "a living"],
answer: "a living",
explanation: "When placed before a noun as a pre-modifier, 'a living' or 'live' is grammatically used instead of predicative 'alive'."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "Do not take my books out of this office unless you... my permission to do so.",
options: ["get", "have", "had got", "are having"],
answer: "have",
explanation: "Present simple conditional structure uses 'unless you have...'"
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "The man insisted on giving unsolicited...",
options: ["advice", "advices", "advise", "advises"],
answer: "advice",
explanation: "'Advice' is an uncountable noun. It cannot take plural forms ('advices'), and 'advise' is the verb form."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "Cultural patterns are modified as they are... from one generation to the next.",
options: ["transported", "transposed", "translated", "transmitted"],
answer: "transmitted",
explanation: "Cultural values or traits are 'transmitted' (passed on) across generations."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "We discovered at the end of last term that we had to read... books before we could confidently sit for our final examination.",
options: ["more of many", "very many more", "very much more", "more very many"],
answer: "very many more",
explanation: "'Books' is a countable noun, so it requires 'many more' instead of 'much more'."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "Chinedu took his umbrella with him in case it...",
options: ["rain", "rained", "would rain", "is raining"],
answer: "rained",
explanation: "The phrase 'in case' followed by a past clause perspective takes simple past ('rained') to express precaution."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "The train was too slow so I decided to... at the next stop.",
options: ["get by", "get bye", "get off", "get of"],
answer: "get off",
explanation: "To 'get off' means to alight or exit from a train or bus vehicle."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "Dapo has made good use of some useful... on the chemical composition of chalk.",
options: ["information", "piece of information", "informations", "pieces of information"],
answer: "information",
explanation: "'Information' is an uncountable noun that does not take plural markers."
},
{
subject: "English", topic: "Lexis and Structure", year: 1987, exam: "JAMB",
question: "Tonye said that he was going to bed because he was... to do any more work.",
options: ["tired out", "very tired", "too tired", "extremely tired"],
answer: "too tired",
explanation: "The infinitive clause rule construction 'too... to' ('too tired to do...') is required here."
}
];
export default englishJamb1987;