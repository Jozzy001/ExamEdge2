// JAMB 2016 English Language Past Questions
// Default export: the main paper (flat array of question objects).
// Named export `englishjamb2016Alt`: the second, alternate set of Q66-100 that was in the original file.

const KEY = "according to the answer key in the supplied 2016 paper";

const make = (topic) => (question, options, answer, reason = KEY) => ({
  topic,
  year: 2016,
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
const lexs = make("Lexis & Structure");
const opp = make("Opposite in Meaning");
const near = make("Nearest in Meaning");
const vowel = make("Vowel Sounds");
const cons = make("Consonant Sounds");
const rhyme = make("Rhymes");
const stress = make("Stress");
const emph = make("Emphatic Stress");

const englishjamb2016 = [
  // =====================
  // COMPREHENSION — PASSAGE I
  // =====================
  comp(
    "The view expressed by the writer in the last paragraph is that",
    [
      "the number of alcoholics and smokers is certainly increasing",
      "more people appear to take to drinking and smoking",
      "sales of alcohol and tobacco products have improved tremendously",
      "more people now abstain from drinking and smoking",
    ],
    "more people appear to take to drinking and smoking"
  ),
  comp(
    "It can be concluded from the passage that morality, religion and economy are",
    [
      "somewhat interconnected",
      "clearly interconnected",
      "certainly different",
      "certainly unrelated",
    ],
    "somewhat interconnected"
  ),
  comp(
    "According to the passage, the moralist idea is that",
    [
      "the smoking of cigarettes is bad and unacceptable",
      "it is typically African not to smoke cigarettes",
      "people should accept a point of view only when they are convinced",
      "smoking is not good but a little alcohol may be permitted",
    ],
    "the smoking of cigarettes is bad and unacceptable"
  ),
  comp(
    "Which of the following statements is true according to the passage?",
    [
      "total abstinence from drinking and smoking is a religious obligation",
      "smoking and drinking may have positive effects on the economy",
      "everyone ignores the moralist view on drinking and smoking",
      "people who drink or smoke surely die of cancer",
    ],
    "smoking and drinking may have positive effects on the economy"
  ),
  comp(
    "The positions maintained by the moralist and the economist can be described as being",
    ["quite indifferent", "very agreeable", "very passionate", "at variance"],
    "at variance"
  ),

  // =====================
  // COMPREHENSION — PASSAGE II
  // =====================
  comp(
    "The sentence \"There will be twice as many of us before most of us are dead\" means",
    [
      "some increase in human and animal population growth rates",
      "mankind is fast spreading across the earth",
      "the population growth rate will double before our death",
      "many of us will die as a result of population explosion",
    ],
    "the population growth rate will double before our death",
    "\"twice as many of us\" means the population will double within our lifetime"
  ),
  comp(
    "Which of the following statements is true according to the passage?",
    [
      "man kills animal only when he can afford to do so",
      "man eats all categories of animals",
      "man cannot spare those animals that eat his kind",
      "man poses the greatest threat to nature",
    ],
    "man poses the greatest threat to nature"
  ),
  comp(
    "The basic causes of the elimination of certain animals from the earth include",
    [
      "a deliberate battle against nature and the quest for leopard skin",
      "man's decision to live in cities and the development of large farm lands",
      "man's penchant for meat and the sale of animals for meat and hides",
      "extensive killing of animals and the fast disappearance of their favourable habitats",
    ],
    "extensive killing of animals and the fast disappearance of their favourable habitats"
  ),
  comp(
    "The expression \"when man evolved a conscience\" means when",
    [
      "man's intellect improved tremendously",
      "man became a critical creature",
      "man developed an awareness of right and wrong",
      "man acquired new habits",
    ],
    "man developed an awareness of right and wrong"
  ),
  comp(
    "From the passage, the attitude of the writer can be described as",
    ["indifferent", "partial", "optimistic", "pessimistic"],
    "pessimistic"
  ),

  // =====================
  // CLOZE TEST (11–20)
  // =====================
  cloze(
    "A prepared speech is not easy to deliver, especially if it is not written by the presenter. A _____ delivery is one in which the speech has been written out word for word and is read to an audience.",
    ["vocal", "bifocal", "anticipatory", "profuse"],
    "vocal"
  ),
  cloze(
    "The speech has been written out word for word and is read to _____",
    ["an audience", "a congregation", "a gathering", "a conference"],
    "an audience"
  ),
  cloze(
    "This kind of delivery is usually reserved for very _____ occasions",
    ["genuine", "impromptu", "guaranteed", "formal"],
    "formal"
  ),
  cloze(
    "When exact wording is _____, such as the State of the Union Address or speeches before the United Nations General...",
    ["reportive", "conclusive", "critical", "trivial"],
    "critical"
  ),
  cloze(
    "...speeches before the United Nations General _____",
    ["assembly", "organisation", "negotiation", "conference"],
    "assembly"
  ),
  cloze(
    "The primary advantage is that speech may be highly _____ in terms of word choice, turns of phrase and development of ideas.",
    ["advanced", "analogue", "discreet", "polished"],
    "polished"
  ),
  cloze(
    "The hot gases expand violently as great _____",
    ["firearms", "fireballs", "fireworks", "firesmokes"],
    "fireballs",
    "the hot gases of an explosion form fireballs"
  ),
  cloze(
    "Compressing the air around them into what is called _____, or blast wave",
    ["shock jocks", "shock therapy", "shock waves", "shock troops"],
    "shock waves"
  ),
  cloze(
    "The force of the explosion lifts the _____ around the bomb.",
    ["form", "atmosphere", "space", "height"],
    "atmosphere",
    "an explosion lifts the atmosphere around it"
  ),
  cloze(
    "The gravity waves can also resemble ordinary _____ waves.",
    ["stream", "lake", "ocean", "river"],
    "ocean",
    "gravity waves in the air resemble ordinary ocean waves"
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
      "of Aunt Muni's gift to the school",
    ],
    "of her former principal's recommendation"
  ),
  lit(
    "According to the novel, who intimated Efua that there was a clash between area boys?",
    ["Miss Novi", "Mr Salami", "Mr Edet", "Mr Mallum"],
    "Miss Novi"
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
    "during the Mid-term dinner"
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
    "felt she was snobbish"
  ),
  lit(
    "In the novel, Ansa looked around glumly when Jimi was engrossed in laughter and chatter because he was",
    [
      "distracted by a ball being played on the field",
      "neglected by Jimi",
      "given twelve strokes of the cane by the principal",
      "anxious to go home",
    ],
    "distracted by a ball being played on the field"
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
    "he ran into a team of policemen"
  ),

  // =====================
  // LITERATURE (31–35)
  // =====================
  lit(
    "After listening to Jimi's explanation on the stolen laboratory equipment, Mr Mallum decided to",
    [
      "get in touch with Jimi's relations",
      "punish Jimi for the wrong doings",
      "put an end to the matter",
      "contact the police for Jimi's release",
    ],
    "get in touch with Jimi's relations"
  ),
  lit(
    "Which of the following best describes Mr Mallum?",
    [
      "He was a small, wiry man with odd accent",
      "He was a tall, wiry man with good diction",
      "He was crude, rash and impatient",
      "He was a fat, tall man with wimpish behaviour",
    ],
    "He was a small, wiry man with odd accent"
  ),
  lit(
    "How did Nene feel when she saw Efua's painting by Ansa?",
    [
      "She became friendly",
      "She acted timidly",
      "She was delighted",
      "She was surprised",
    ],
    "She was surprised"
  ),
  lit(
    "Which of the following best describes the relationship between the students and Mr Mallum?",
    [
      "The students regarded him as a symbol of achievement",
      "The students regarded him as a symbol of freedom",
      "The students regarded him as a symbol of condemnation",
      "The students regarded him as a symbol of envy",
    ],
    "The students regarded him as a symbol of condemnation"
  ),

  // =====================
  // LEXIS & STRUCTURE — meaning in context (36–45)
  // =====================
  lexs(
    "Ramatu expressed her feelings in no uncertain terms.",
    [
      "She expressed it feebly and sickly",
      "She expressed it quietly and cautiously",
      "She expressed it secretly and courageously",
      "She expressed it clearly and strongly",
    ],
    "She expressed it clearly and strongly",
    "the expression 'in no uncertain terms' means clearly and strongly"
  ),
  lexs(
    "Usman needs to get his act together if he wants to pass the examination.",
    [
      "He needs to put on his stage costume",
      "He needs to be fast when writing the examination",
      "He needs to organise himself",
      "He needs to put all points down in the examination",
    ],
    "He needs to organise himself",
    "to 'get one's act together' means to organise oneself and become properly prepared"
  ),
  lexs(
    "As the drama unfolded, Olatinuke was advised to keep her shirt on.",
    [
      "She was advised to stay calm",
      "She was advised to commit herself",
      "She was advised to join the club",
      "She was advised to wear her shirt",
    ],
    "She was advised to stay calm",
    "the expression 'keep your shirt on' means to remain calm and patient"
  ),
  lexs(
    "The team's poor performance at the tournament plumbed the depths of horror.",
    [
      "The team's performance was rewarded",
      "The team's performance took them to the next round",
      "The team's performance was enjoyed by all",
      "The team's performance was full of disappointment",
    ],
    "The team's performance was full of disappointment",
    "to 'plumb the depths of horror' means to reach an extremely disappointing or dreadful level"
  ),
  lexs(
    "He is a clinging child.",
    [
      "He is a bully",
      "He likes to cling with his sister",
      "He is possessive",
      "He is a handsome young man",
    ],
    "He is possessive",
    "a clinging person is excessively dependent or possessive toward another person"
  ),
  lexs(
    "You need to brush up on your Spanish.",
    [
      "You need a brush from Spain",
      "You need to study the history of Spain",
      "You need to learn to play with a Spaniard",
      "You need to improve your skills",
    ],
    "You need to improve your skills",
    "to 'brush up on' something means to improve or refresh one's knowledge or skill in it"
  ),
  lexs(
    "Tolu and Chinedu live in each other's pockets.",
    [
      "They are long-term business partners",
      "They are very close to each other",
      "They blackmail each other",
      "They steal from each other",
    ],
    "They are very close to each other",
    "to 'live in each other's pockets' means to spend a great deal of time together and be very close"
  ),
  lexs(
    "Zinana's examination result was not unfavourable.",
    [
      "She failed her examination",
      "Her examination did not meet her expectation",
      "Her result could not earn her admission",
      "She was successful in the examination",
    ],
    "She was successful in the examination",
    "'not unfavourable' indicates a successful or satisfactory result"
  ),
  lexs(
    "I can't wait to become a mother, the new bride declared.",
    [
      "She sees motherhood as a burden",
      "She will be patient as a mother",
      "She is not keen on becoming a mother",
      "She is excited about motherhood",
    ],
    "She is excited about motherhood",
    "'can't wait' shows eagerness and excitement"
  ),
  lexs(
    "Amaka would pass for a beauty queen.",
    [
      "She was acting as a beauty queen",
      "She would pass the drink to the queen who is sitting next to her",
      "She would be accepted by all as a beauty queen",
      "She walked past the beauty queen",
    ],
    "She would be accepted by all as a beauty queen",
    "to 'pass for' someone means to be considered or accepted as that person or type of person"
  ),

  // =====================
  // OPPOSITE IN MEANING (46–55)
  // =====================
  opp(
    "The relationship between the couple has been frosty.",
    ["amenable", "fraudulent", "frugal", "cordial"],
    "cordial",
    "'frosty' means cold or unfriendly, and its opposite is 'cordial', meaning warm and friendly"
  ),
  opp(
    "The dressmaker unpicked the seam of the shirt.",
    ["tore up", "sewed up", "threaded", "picked up"],
    "sewed up",
    "to 'unpick' a seam means to undo the stitches, and the opposite is to sew it up"
  ),
  opp(
    "Some of my neighbours have an antipathy to dogs.",
    ["enmity towards", "alarm for", "acronym", "affection for"],
    "affection for",
    "'antipathy' means a strong dislike, and its opposite is affection"
  ),
  opp(
    "Chibuzor gave a curt nod and walked away.",
    ["rude", "polite", "gentle", "shocking"],
    "polite",
    "'curt' means brief and abrupt, often rude, and the opposite among the options is 'polite'"
  ),
  opp(
    "The girl took a cursory glance at the letter and hid it.",
    ["brief", "sententious", "lasting", "concise"],
    "lasting",
    "'cursory' means quick and not thorough, and 'lasting' represents the opposite idea among the options"
  ),
  opp(
    "The accused was eventually convicted.",
    ["initially", "finally", "subsequently", "consequently"],
    "initially",
    "'eventually' refers to the end, while 'initially' refers to the beginning"
  ),
  opp(
    "My niece has an unquenchable thirst for adventure stories.",
    ["an illegitimate", "a spurious", "an inextinguishable", "a reduced"],
    "a reduced",
    "'unquenchable' means impossible to satisfy, and 'reduced' expresses the opposite idea of diminished intensity"
  ),
  opp(
    "Musa is a gifted but erratic player.",
    ["regular", "strong", "unstable", "unpredictable"],
    "regular",
    "'erratic' means irregular or unpredictable, and 'regular' is its opposite"
  ),
  opp(
    "The testimony of the witness was vague.",
    ["real", "factual", "true", "clear"],
    "clear",
    "'vague' means unclear or imprecise, and the opposite is 'clear'"
  ),
  opp(
    "As a student, Isa tried communal living for a few years.",
    ["shared", "private", "collective", "general"],
    "private",
    "'communal' means shared by a group, and its opposite is 'private'"
  ),

  // =====================
  // NEAREST IN MEANING (56–65)
  // =====================
  near(
    "The lamb is a feeble little animal.",
    ["fat", "weak", "loving", "quiet"],
    "weak",
    "'feeble' means weak or lacking strength"
  ),
  near(
    "The chairman admires incessant meetings.",
    ["planned", "unusual", "irregular", "constant"],
    "constant",
    "'incessant' means continuing without stopping"
  ),
  near(
    "The exhibition was an eye opener to all.",
    ["dispatch", "examination", "style", "display"],
    "display",
    "an exhibition is a public display of something"
  ),
  near(
    "The first round of the tournament was a doddle.",
    ["exasperating", "balanced", "dodgy", "easy"],
    "easy",
    "a 'doddle' is something that is very easy to do"
  ),
  near(
    "As a journalist, Bala has always had a nose for stories.",
    ["a command", "cynical statement", "soft comment", "an instinct"],
    "an instinct",
    "to have a 'nose for' something means to have a natural instinct for finding it"
  ),
  near(
    "The actress screamed when she noticed an object behind her.",
    ["wailed", "protested", "waded in", "stormed out"],
    "wailed",
    "'wailed' means to cry out loudly, which is closest in meaning to 'screamed' among the options"
  ),
  near(
    "Today's weather is favourable for a game of tennis.",
    ["impartial", "abnormal", "encouraging", "disapproving"],
    "encouraging",
    "'favourable' means suitable, helpful or encouraging for a particular activity"
  ),
  near(
    "All the candidates looked aghast at the first reading of the questions.",
    ["fulfilled", "dismayed", "satisfied", "again"],
    "dismayed",
    "'aghast' means shocked or dismayed"
  ),
  near(
    "I am tired of your eternal argument.",
    ["open", "strong", "constant", "useless"],
    "constant",
    "'eternal' here means seemingly endless, and 'constant' is the nearest option"
  ),
  near(
    "Joke gave Muhammad a jaunty smile.",
    ["frightful", "cheerful", "discouraging", "inviting"],
    "cheerful",
    "'jaunty' describes a lively, confident and cheerful manner"
  ),

  // =====================
  // LEXIS & STRUCTURE — sentence completion (66–85)
  // =====================
  lexs(
    "The House and The Senate will _____ at noon next Wednesday to hear address by the president.",
    ["convene", "adjourn", "rise", "collude"],
    "convene",
    "it means to meet or assemble formally"
  ),
  lexs(
    "At the _____ of the century many ways of doing things were introduced.",
    ["turn", "event", "birth", "sight"],
    "turn",
    "'at the turn of the century' refers to the beginning of a new century"
  ),
  lexs(
    "You may have the pencil, but you can't have the ballpoint _____",
    ["either", "furthermore", "also", "as well"],
    "either",
    "it is used with a negative statement to indicate another alternative"
  ),
  lexs(
    "The president said that the country was not out of the _____ yet.",
    ["forest", "fog", "water", "wood"],
    "wood",
    "the idiom 'out of the woods' means to have escaped a difficult situation"
  ),
  lexs(
    "He went to the restaurant to enjoy the special _____",
    ["suite", "cuisine", "a la carte", "chef"],
    "cuisine",
    "it refers to a style or type of cooking and food"
  ),
  lexs(
    "The invigilator _____ to know how long the examination _____ going on.",
    ["wanted/has been", "wants/had been", "wants/have been", "wanted/had been"],
    "wanted/had been",
    "the reporting verb is in the past and the examination had already been in progress"
  ),
  lexs(
    "The guard spent all the night pacing _____",
    ["from and to", "fro and to", "to and from", "to and fro"],
    "to and fro",
    "the correct expression is 'to and fro', meaning repeatedly moving back and forth"
  ),
  lexs(
    "The woman refused to testify _____ her husband.",
    ["in", "at", "against", "from"],
    "against",
    "one testifies against another person"
  ),
  lexs(
    "Abike must have found the very interesting movies quite _____",
    ["absolving", "absorbing", "nauseating", "perverting"],
    "absorbing",
    "something absorbing is very interesting and holds one's attention"
  ),
  lexs(
    "The words _____ divided between the end of one line.",
    ["have been", "have being", "has been", "has being"],
    "have been",
    "'words' is plural and takes the plural auxiliary"
  ),
  lexs(
    "Those _____ are very beautiful.",
    ["flowers of her", "flowers of her's", "our flower", "flowers ours"],
    "flowers ours"
  ),
  lexs(
    "Cooking has never been Jumoke's _____",
    ["recital", "purview", "style", "forte"],
    "forte",
    "a person's forte is something they do particularly well"
  ),
  lexs(
    "When the strike is over, there will probably be an increase in wages and a _____ increase in prices.",
    ["sporadic", "concordant", "concurrent", "chronic"],
    "concurrent",
    "it means occurring at the same time"
  ),
  lexs(
    "My mother was _____ annoyed with me for coming late.",
    ["very", "neither", "hotly", "just"],
    "very",
    "it appropriately modifies the adjective 'annoyed'"
  ),
  lexs(
    "The chairman is too much _____ an idealist for this government.",
    ["from", "about", "of", "with"],
    "of",
    "the correct expression is 'too much of an idealist'"
  ),
  lexs(
    "The clock _____ 12 o'clock two hours ago.",
    ["strikes", "strike", "struck", "striking"],
    "struck",
    "the sentence refers to an event that happened two hours ago"
  ),
  lexs(
    "What is the jury's _____ the matter?",
    ["verdict on", "verdict from", "verdict at", "verdict with"],
    "verdict on",
    "the correct expression is 'verdict on the matter'"
  ),
  lexs(
    "The unconscious man was _____ after receiving first aid.",
    ["reawakened", "reformed", "restored", "revived"],
    "revived",
    "it means brought back to consciousness or life"
  ),
  lexs(
    "The laughter _____ his face for a moment.",
    ["improved", "controlled", "animated", "remade"],
    "animated",
    "laughter can make a person's face lively or expressive"
  ),
  lexs(
    "She traced her family history _____ matrilineal descent.",
    ["in", "by", "with", "at"],
    "by",
    "the phrase is 'by matrilineal descent'"
  ),

  // =====================
  // ORAL ENGLISH (86–100)
  // =====================
  vowel(
    "Choose the option that has the same vowel sound as the one represented by the underlined letters in \"cool\".",
    ["full", "luke", "look", "should"],
    "luke",
    "both words contain the long /uː/ vowel"
  ),
  vowel(
    "Choose the option that has the same vowel sound as the one represented by the underlined letters in \"odour\".",
    ["flow", "sugar", "hold", "floor"],
    "flow",
    "both words contain the /əʊ/ vowel"
  ),
  vowel(
    "Choose the option that has the same vowel sound as the one represented by the underlined letters in \"palm\".",
    ["ranch", "florid", "lunch", "plait"],
    "ranch",
    "both words contain the long /ɑː/ vowel"
  ),
  cons(
    "Choose the option that has the same consonant sound as the one represented by the underlined letters in \"vision\".",
    ["instruction", "mansion", "nation", "enclosure"],
    "enclosure",
    "both words contain the /ʒ/ sound"
  ),
  cons(
    "Choose the option that has the same consonant sound as the one represented by the underlined letters in \"gnash\".",
    ["forge", "new", "king", "ring"],
    "new",
    "the 'gn' in gnash and the 'n' in new are both pronounced /n/"
  ),
  cons(
    "Choose the option that has the same consonant sound as the one represented by the underlined letters in \"epitaph\".",
    ["pseudo", "fan", "paper", "pneumonia"],
    "fan",
    "the 'ph' in epitaph is pronounced /f/, as in fan"
  ),
  rhyme(
    "Choose the option that rhymes with \"ever\".",
    ["favour", "fever", "never", "heavier"],
    "never",
    "the final sounds of the two words match"
  ),
  rhyme(
    "Choose the option that rhymes with \"keep\".",
    ["reap", "seethe", "threat", "dead"],
    "reap",
    "both words end in the same vowel and consonant sound"
  ),
  rhyme(
    "Choose the option that rhymes with \"tax\".",
    ["box", "lacks", "back", "ask"],
    "lacks",
    "both words end in /æks/"
  ),
  stress(
    "Choose the most appropriate stress pattern for \"valedictory\".",
    ["VAledictory", "valeDICtory", "valedicTORY", "vaLEdictory"],
    "valeDICtory",
    "the primary stress falls on the third syllable"
  ),
  stress(
    "Choose the most appropriate stress pattern for \"congratulation\".",
    ["congraTUlation", "congratuLAtion", "CONgratulation", "conGRAtulation"],
    "congratuLAtion",
    "the primary stress falls on the syllable before the -tion ending"
  ),
  stress(
    "Choose the most appropriate stress pattern for \"conspiracy\".",
    ["conspiRAcy", "conspiraCY", "consPIracy", "CONspiracy"],
    "consPIracy",
    "the primary stress falls on the second syllable"
  ),
  emph(
    "My mother brought a BICYCLE yesterday.",
    [
      "What did your mother buy yesterday?",
      "Whose mother bought a bicycle yesterday?",
      "Did my mother steal a bicycle yesterday?",
      "When did my mother buy a bicycle?",
    ],
    "What did your mother buy yesterday?",
    "the emphatic stress on BICYCLE asks what item the mother bought"
  ),
  emph(
    "AMINA went to Abuja by air.",
    [
      "Is Amina going to Abuja by air?",
      "Who went to Abuja by air?",
      "Did Amina go to Abuja by road?",
      "Did Amina go to Jos by air?",
    ],
    "Who went to Abuja by air?",
    "the emphatic stress on AMINA asks who went to Abuja by air"
  ),
  emph(
    "Musa is STAYING in Enugu.",
    [
      "Is Musa passing through Enugu?",
      "Is Musa staying on the outskirt of Enugu?",
      "Is Audu staying in Enugu?",
      "Was Musa staying in Enugu?",
    ],
    "Is Musa passing through Enugu?",
    "the emphatic stress on STAYING contrasts staying with merely passing through"
  ),
];

// =====================
// ALTERNATE SET (second version of Q66–100 found in the original file)
// =====================
export const englishjamb2016Alt = [
  lexs(
    "You live in the city now, _____?",
    ["are you", "don't you", "didn't you", "haven't you"],
    "don't you",
    "the statement is positive and in the simple present tense"
  ),
  lexs(
    "Concrete is made of _____",
    ["sand and cement", "a sand and a cement", "sand and a cement", "a sand and cement"],
    "sand and cement",
    "these materials are uncountable substances in this context"
  ),
  lexs(
    "Suana _____ that hexagons had five sides, but later he knew they were six-sided figures.",
    ["would have believed", "had believed", "believes", "has believed"],
    "had believed",
    "the past perfect describes an earlier belief that was later changed"
  ),
  lexs(
    "The _____ to the fallen heroes was erected at the market square.",
    ["exhibition", "monument", "myth", "picture"],
    "monument",
    "a monument is a structure erected to commemorate a person or event"
  ),
  lexs(
    "The Flying Eagles of Nigeria couldn't have won the match if they hadn't prepared well, _____?",
    ["can't they", "couldn't they", "could they", "can they"],
    "could they",
    "the statement is negative, so the tag is positive"
  ),
  lexs(
    "They all gathered to exhume the _____ musician's corpse for examination.",
    ["posthumous", "post-mortem", "post-natal", "orthopaedic"],
    "post-mortem",
    "'post-mortem' refers to an examination performed after death"
  ),
  lexs(
    "I have been doing this exercise _____",
    ["for five minutes", "five minutes ago", "since five minutes", "during five minutes"],
    "for five minutes",
    "'for' is used with a period of time to indicate duration"
  ),
  lexs(
    "Oloyede always sleeps like a baby, _____?",
    ["does he", "could he", "doesn't he", "did he"],
    "doesn't he",
    "the statement is positive and in the simple present tense"
  ),
  lexs(
    "The man was given _____ degree despite the fact that he did not attend a university.",
    ["an honorary", "an honourable", "a ceremonial", "a ceremonious"],
    "an honorary",
    "an honorary degree is awarded without the usual academic requirements"
  ),
  lexs(
    "My father has just bought _____",
    ["a peugeot brand new car", "a car brand new peugeot", "a new brand peugeot car", "brand new peugeot"],
    "brand new peugeot"
  ),
  lexs(
    "The university is a corporate body made _____ different colleges.",
    ["in with", "with", "up of", "up from"],
    "up of",
    "'made up of' means composed of"
  ),
  lexs(
    "The secretary hadn't _____ money left.",
    ["any", "anything", "none", "no"],
    "any",
    "'any' is the determiner used with an uncountable noun in a negative sentence"
  ),
  lexs(
    "The King was recognised _____ the scar on his face.",
    ["with", "to", "by", "for"],
    "by",
    "'by' indicates the feature through which the King was identified"
  ),
  lexs(
    "Nkiru has lots of friends, but I have _____",
    ["only a little", "little", "only a few", "few"],
    "few",
    "'friends' is countable, so 'few' is required and 'little' is not"
  ),
  lexs(
    "The HOD says she considers her degree certificate _____ than as a prize through labour.",
    ["rather as a gift of God", "rather God as a gift", "as a gift rather of God", "as a rather gift of God"],
    "rather God as a gift"
  ),
  lexs(
    "Mr Ojo instructed his son to replace the faulty _____ tube.",
    ["flurescent", "flourescent", "fluorescent", "florescent"],
    "fluorescent",
    "it is the correctly spelt word"
  ),
  lexs(
    "The employer, not the salesmen _____ responsible for the loss.",
    ["have been", "was", "were", "will be"],
    "was",
    "the subject 'the employer' is singular"
  ),
  lexs(
    "She was _____ as anyone could have had.",
    ["as patient as teacher", "as a patient a teacher", "as patient teacher", "a patient a teacher"],
    "as a patient a teacher"
  ),
  lexs(
    "There was a serious _____ between the new couple over feeding allowance.",
    ["arguement", "argeument", "arguemant", "argument"],
    "argument",
    "it is the correctly spelt word"
  ),
  lexs(
    "They thought Musa _____ agree if they altered some of the conditions.",
    ["can", "may", "might", "ought"],
    "might",
    "'might' expresses possibility in a past context"
  ),
  vowel(
    "Choose the option that has the same vowel sound as the underlined sound in \"waiter\".",
    ["flavour", "cite", "road", "hair"],
    "flavour",
    "both words contain the /eɪ/ vowel"
  ),
  vowel(
    "Choose the option that has the same vowel sound as the underlined sound in \"flee\".",
    ["field", "skate", "faith", "rid"],
    "field",
    "both words contain the long /iː/ vowel"
  ),
  vowel(
    "Choose the option that has the same vowel sound as the underlined sound in \"palm\".",
    ["florid", "ranch", "blunt", "lunch"],
    "ranch",
    "both words contain the long /ɑː/ vowel"
  ),
  cons(
    "Choose the option that has the same consonant sound as the underlined sound in \"phantom\".",
    ["physics", "pew", "phew", "party"],
    "physics",
    "'ph' is pronounced /f/ in both words"
  ),
  cons(
    "Choose the option that has the same consonant sound as the underlined sound in \"chest\".",
    ["fixture", "school", "charisma", "mass"],
    "fixture",
    "both contain the /tʃ/ sound"
  ),
  cons(
    "Choose the option that has the same consonant sound as the underlined sound in \"epitaph\".",
    ["pneumonia", "fan", "paper", "pseudo"],
    "fan",
    "the 'ph' in epitaph is pronounced /f/, as in fan"
  ),
  rhyme(
    "Choose the option that rhymes with \"ever\".",
    ["never", "heavier", "fever", "favour"],
    "never",
    "the final sounds of the two words match"
  ),
  rhyme(
    "Choose the option that rhymes with \"cable\".",
    ["bible", "mabel", "able", "marble"],
    "able",
    "both words end in /eɪbl/"
  ),
  rhyme(
    "Choose the option that rhymes with \"mail\".",
    ["bale", "slate", "girl", "galle"],
    "bale",
    "both words end in /eɪl/"
  ),
  stress(
    "Choose the appropriate stress pattern for \"advantages\".",
    ["advantaGES", "adVANtages", "ADvantages", "advanTAges"],
    "adVANtages",
    "the primary stress falls on the second syllable"
  ),
  stress(
    "Choose the appropriate stress pattern for \"intentional\".",
    ["inTENtional", "INtentional", "intentionAL", "intentioNAL"],
    "inTENtional",
    "the primary stress falls on the second syllable"
  ),
  stress(
    "Choose the option that is stressed on the first syllable.",
    ["guitar", "guilty", "confuse", "relief"],
    "guilty",
    "'guilty' has its primary stress on the first syllable"
  ),
  emph(
    "I left my bag on the TABLE.",
    [
      "Is the bag left under the table?",
      "Did I leave the shoe on the table?",
      "Who left the bag on the table?",
      "Where did I leave the bag?",
    ],
    "Where did I leave the bag?",
    "the emphatic stress on TABLE asks about the location"
  ),
  emph(
    "Kanu can play FOOTBALL.",
    [
      "Who can play football?",
      "What can Kanu play?",
      "What can Kanu do with football?",
      "Why should Kanu play football?",
    ],
    "What can Kanu play?",
    "the emphatic stress on FOOTBALL asks what Kanu can play"
  ),
  emph(
    "Aisha plays TENNIS always.",
    [
      "Who plays tennis always?",
      "Does Aisha watch tennis always?",
      "What does Aisha play always?",
      "When does Aisha play tennis?",
    ],
    "What does Aisha play always?",
    "the emphatic stress on TENNIS asks what Aisha plays"
  ),
];

export default englishjamb2016;