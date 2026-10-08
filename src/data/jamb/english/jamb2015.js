// JAMB 2015 English Language Past Questions
// Flat array of question objects (all share the same shape).
// Note: Q23 (Literature) and Q71 (Lexis) are missing from the source PDF and are intentionally omitted.

const KEY = "according to the answer key in the supplied 2015 paper";

const make = (topic) => (question, options, answer, reason = KEY) => ({
  topic,
  year: 2015,
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
const lexis = make("Lexis");
const vowel = make("Vowel Sounds");
const cons = make("Consonant Sounds");
const rhyme = make("Rhymes");
const stress = make("Stress");
const emph = make("Emphatic Stress");

const jamb2015 = [
  // =====================
  // COMPREHENSION
  // =====================
  comp(
    "The expression third party, as used in the passage, means",
    ["Politician", "Intruder", "Conformist", "Mediator"],
    "Mediator",
    "a third party in conflict management helps the parties involved to resolve their conflict"
  ),
  comp(
    "From the passage, it can be deduced that",
    [
      "All nations adopt the peaceful approach",
      "All nations prefer the military option",
      "Prevailing circumstances push a warring nation to sue for peace",
      "Conflicts are noted for facilitating opportunities",
    ],
    "Conflicts are noted for facilitating opportunities"
  ),
  comp(
    "Which of the following statements can be inferred from the passage?",
    [
      "The approach to employ in conflict management depends on the state of affairs",
      "Only one conflict management approach can be applied in all situations",
      "All conflict management approaches can be applied in all situations",
      "There is a general disagreement among scholars on conflict management",
    ],
    "The approach to employ in conflict management depends on the state of affairs",
    "the passage explains that different approaches have utility in particular circumstances"
  ),
  comp(
    "According to the passage, the different approaches to conflict management are",
    ["Pernicious", "Uniform", "Misleading", "Fundamental"],
    "Fundamental"
  ),
  comp(
    "The word utility, as used in the passage, means",
    ["Difficulty", "Attitude", "Usefulness", "Management"],
    "Usefulness",
    "utility means usefulness or practical value"
  ),
  comp(
    "The word couched, as used in the passage, means",
    ["Arranged", "Expressed", "Modified", "Itemized"],
    "Expressed",
    "to couch something means to express or phrase it in a particular way"
  ),
  comp(
    "From the writer's point of view, one can conclude that",
    [
      "The only authority a society has is its language",
      "Language and culture are interwoven",
      "People of the same culture in the same society",
      "Developing people of the world have not developed their language",
    ],
    "Language and culture are interwoven",
    "it is the only option that is a complete, sensible conclusion about the link between language and society"
  ),
  comp(
    "Which of the following can be inferred from the passage?",
    [
      "The world is interpreted to us only in our native language",
      "Our native language is as important as the world around us",
      "We know more about the world around us if our language is not written",
      "The world around us is the world of people who speak the same language",
    ],
    "Our native language is as important as the world around us"
  ),
  comp(
    "What is the symbolic function of a native language, according to the passage?",
    [
      "It enables the society itself the more",
      "It promotes understanding within the group",
      "It distinguishes that society from others",
      "It alienates progress within the society and beyond",
    ],
    "It distinguishes that society from others",
    "a native language can serve as a marker of the identity of a society"
  ),
  comp(
    "From the passage, one can imply that",
    [
      "The language of instruction is ideally one's own language",
      "Native languages are difficult to use as languages of instruction",
      "No foreign language should be taught in any society",
      "No society conducts its education in a foreign language",
    ],
    "The language of instruction is ideally one's own language"
  ),

  // =====================
  // CLOZE TEST (11–20)
  // =====================
  cloze(
    "Before now, students bumped unto career by chance or through the insistence of parents. These parents had pre-conceived notions of ____ professions and gave little consideration to their children's interest, aptitude, knowledge and skills.",
    ["Insignificant", "Prestigious", "Inferior", "Debased"],
    "Prestigious",
    "parents who insist on a career for their children usually have fixed ideas about prestigious professions"
  ),
  cloze(
    "Students' career decisions were also ____ by the type of secondary schools they attended.",
    ["Influenced", "Hampered", "Subdued", "Rejected"],
    "Influenced",
    "the sentence says the type of school affected career decisions"
  ),
  cloze(
    "Over 80% of elementary and secondary schools were privately owned and competition was ____ among these schools.",
    ["High", "Minimal", "Low", "Moderate"],
    "High"
  ),
  cloze(
    "Each strived to carve an ____ for herself by excelling in sports or academics.",
    ["Attitude", "Image", "Effort", "Avenue"],
    "Image",
    "one carves an image for oneself by excelling"
  ),
  cloze(
    "Junior students tried to ____ the career choices of their seniors.",
    ["Appreciate", "Emulate", "Reject", "Denounce"],
    "Emulate",
    "juniors imitate the choices of their seniors"
  ),
  cloze(
    "One such problem is the ____ shortage of professional career development officers.",
    ["Mild", "Acute", "Slow", "Average"],
    "Acute",
    "the passage refers to a serious shortage"
  ),
  cloze(
    "These few officers are ____ given the opportunity to practice.",
    ["Seldom", "Usually", "Often", "Frequently"],
    "Seldom",
    "the passage complains about a lack of opportunity to practise"
  ),
  cloze(
    "If the government of Nigeria has ____ a guidance and counselling policy, it must be pointed out that emphasis is still at the secondary level of education.",
    ["Lauded", "Muffled", "Mumbled", "Enunciated"],
    "Enunciated"
  ),
  cloze(
    "This situation ____ the current view that career development should start at the pre-primary level and continue till adulthood.",
    ["Rejects", "Approves", "Contradicts", "Verifies"],
    "Contradicts",
    "emphasis at secondary level only runs against the view that development should start earlier"
  ),

  // =====================
  // LITERATURE — The Last Days at Forcados High School
  // =====================
  lit(
    "The information that Efua's diary had been leaked to all in the school was first made known to her by ----",
    ["Caro", "Ansa", "Nene", "Joke"],
    "Joke"
  ),
  lit(
    "\"What do you want? Doesn't it offend your pure gentle soul to be sitting beside me?\" In the excerpt above, pure and gentle soul referred to",
    ["Nene", "Jimi", "Efua", "Ansa"],
    "Nene"
  ),
  lit(
    "What did Ansa do when Efua was introduced to him for the first time",
    [
      "He smiled sheepishly",
      "He murmured awkwardly",
      "He snubbed her",
      "He embraced her",
    ],
    "He smiled sheepishly"
  ),
  lit(
    "After the graduation, Nene hoped to study",
    ["Accountancy", "Law", "Architecture", "Education"],
    "Accountancy"
  ),
  lit(
    "At one time, the closeness between Jimi and Wole heightened because they wanted to",
    [
      "Contend with Jimi adversaries at Forcados High School",
      "Unite against the bullying of the eldest brother",
      "Present a common front in their quest to learn at school",
      "Practice the act of dancing in the school choir",
    ],
    "Unite against the bullying of the eldest brother"
  ),
  lit(
    "Teacher Bade earned the nickname \"cane\" because he was",
    [
      "A Discipline master in the school",
      "Always ready to listen to student's complaints",
      "Always ready to punish offenders",
      "Always ready to appreciate students",
    ],
    "A Discipline master in the school"
  ),
  lit(
    "From the storyline, we could conclude that Forcados high school emphasized",
    ["Individuality", "Conformity", "Duplicity", "Truancy"],
    "Conformity"
  ),
  lit(
    "Despite the fact that Ansa was not as brilliant as Jimi, he still saw Jimi as a",
    [
      "Friendly and likeable person",
      "Timid and likeable person",
      "Likeable but hostile person",
      "Humble and likeable person",
    ],
    "Humble and likeable person"
  ),
  lit(
    "Jimi was able to run away from the policemen when they asked him to stop by",
    [
      "Getting help from a good Samaritan",
      "Jumping into a nearby bush",
      "Hiding under the table",
      "Jumping into a moving bus",
    ],
    "Jumping into a nearby bush"
  ),
  lit(
    "The impromptu meeting to prepare for the mid-term dinner was attended by the",
    ["School prefects", "Organizing committee", "SS3 students", "School teachers"],
    "School prefects"
  ),
  lit(
    "What did Jimi occupy himself with as he took his shower",
    ["He was whistling", "He was crying", "He was dancing", "He was brooding"],
    "He was brooding"
  ),
  lit(
    "Who was considered as a bright spark in an unspoken contest with Jimi over their chemistry results?",
    ["Eze", "Caro", "Nene", "Efua"],
    "Eze"
  ),
  lit(
    "The teacher's attitude towards Efua was that of",
    ["Recognition", "Misconception", "Misapplication", "Repression"],
    "Misconception"
  ),
  lit(
    "Which of these best describe Aunty Moni's character trait",
    ["Garrulous", "Docile", "Arrogant", "Extravagant"],
    "Extravagant"
  ),

  // =====================
  // LEXIS & STRUCTURE — meaning in context
  // =====================
  lexs(
    "The workers tightened their hold on the capital",
    [
      "They tightened a rope round their capital",
      "They controlled the capital more strictly",
      "They held unto other workers in the capital",
      "They stretched their hold on the capital and beyond.",
    ],
    "They controlled the capital more strictly"
  ),
  lexs(
    "Amedu's actions provoked severe criticism",
    [
      "His actions were seriously rejected",
      "His actions were severe and accepted",
      "His actions were itemized because he was young",
      "His actions provoked the humour",
    ],
    "His actions were seriously rejected"
  ),
  lexs(
    "I haven't seen the movie and my brother hasn't either",
    [
      "I have seen the movie but neither of my brother have",
      "My brother and I haven't seen the movie",
      "Only my brother has seen the movie",
      "My brother hasn't seen the movie but I have",
    ],
    "My brother and I haven't seen the movie"
  ),
  lexs(
    "Sule would have been given the car if his father had not complained.",
    [
      "He wasn't given the car because his father complained",
      "He was given the car because his father complained",
      "His father complained about the car and he was given.",
      "He was given the car even though his father didn't complain.",
    ],
    "He wasn't given the car because his father complained"
  ),
  lexs(
    "Adayi cannot halt the march of time.",
    [
      "She is willing to march on",
      "She cannot change the way things happen.",
      "She halts the march on time.",
      "She cannot alter the peace march.",
    ],
    "She cannot change the way things happen."
  ),
  lexs(
    "The lecture is Uye's road to Damascus.",
    [
      "The lecture is an opportunity to travel to Damascus.",
      "The lecture is an experience that changes the way she thinks",
      "The lecture talks exclusively about Damascus.",
      "The lecture is an experience that cannot be changed.",
    ],
    "The lecture is an experience that changes the way she thinks"
  ),
  lexs(
    "Ado is one of the backwoodsmen.",
    [
      "He is one of those that live in a distant and underdeveloped area",
      "He is one of the active member of the community",
      "He is one of the honest men that lives in the community",
      "He is one of those that live in the most developed part of the city.",
    ],
    "He is one of those that live in a distant and underdeveloped area",
    "a backwoodsman is someone from a remote or undeveloped area"
  ),
  lexs(
    "Bello said he would pitch his tent with the club.",
    [
      "He would support the club.",
      "He would build a pitch in the club",
      "He would build a tent on the pitch.",
      "He would distance himself from the club.",
    ],
    "He would support the club.",
    "to pitch one's tent with a group means to support or associate with it"
  ),
  lexs(
    "Try not to lose heart, said the man.",
    [
      "Try not to be bold and weak",
      "Try not to become sad and hopeless",
      "Try not to be happy and feeble",
      "Try not to be timid and hopeful.",
    ],
    "Try not to become sad and hopeless",
    "to lose heart means to become discouraged or hopeless"
  ),
  lexs(
    "Kasim would have attended the party if he had been invited.",
    [
      "He would not have attended even if he had been invited.",
      "He attended the party before he was invited.",
      "He was not invited and so, he did not attend",
      "He attended the party without invitation.",
    ],
    "He was not invited and so, he did not attend"
  ),

  // =====================
  // OPPOSITE IN MEANING
  // =====================
  lexis(
    "Adewale's arrival always triggers a media frenzy.",
    ["Violence", "Agitation", "Calm", "Excitement"],
    "Calm",
    "it is the opposite of frenzy"
  ),
  lexis(
    "She said, the experience was harrowing.",
    ["Educating", "Frightening", "Pleasant", "Strange"],
    "Pleasant",
    "it is the opposite of harrowing"
  ),
  lexis(
    "The house was invaded by the young officers.",
    ["Set up", "Put down", "Defended", "Built"],
    "Defended"
  ),
  lexis(
    "I like Adamu's weird attitude.",
    ["Buoyant", "Peculiar", "Zestful", "Normal"],
    "Normal",
    "it is the opposite of weird"
  ),
  lexis(
    "We travelled to an obscure little town.",
    ["Rugged", "Distinguished", "Secluded", "Inglorious"],
    "Distinguished"
  ),
  lexis(
    "She is known for her bizarre dressing.",
    ["Natural", "Weird", "Obsolete", "Odious"],
    "Natural"
  ),
  lexis(
    "Lami normally scurries around town.",
    ["Scampers", "Dashes", "Dawdles", "Scuttles"],
    "Dawdles",
    "it is the opposite of moving quickly or scurrying"
  ),
  lexis(
    "Sule's poem is always explicit and compelling.",
    ["Exciting", "Clear", "Ambiguous", "Long"],
    "Ambiguous",
    "it is the opposite of explicit"
  ),
  lexis(
    "Usman smiled in a scornful way.",
    ["Respectful", "Derisive", "Sarcastic", "Deluded"],
    "Respectful",
    "it is the opposite of scornful"
  ),
  lexis(
    "Alade is noted for his erratic behaviour.",
    ["Fitful", "Bizarre", "Consistent", "Euphoric"],
    "Consistent",
    "it is the opposite of erratic"
  ),
  lexis(
    "The priest knows Ochai as an abstainer.",
    [
      "Someone who never drinks alcohol",
      "Someone who holds onto his ideas",
      "Someone who reads a lot",
      "Someone who never cares about others",
    ],
    "Someone who never drinks alcohol",
    "an abstainer is someone who refrains from consuming something, especially alcohol"
  ),

  // =====================
  // NEAREST IN MEANING
  // =====================
  lexis(
    "She gave a caustic remark on the occasion.",
    ["Tangible", "Friendly", "Insignificant", "Sarcastic"],
    "Sarcastic"
  ),
  lexis(
    "It was a good try but it didn't quite work out.",
    ["Come to", "Come off", "Come from", "Come for"],
    "Come off",
    "the expression means to succeed or produce the intended result"
  ),
  lexis(
    "Garuba's performances in the competition was horrid.",
    ["Terrible", "Encouraging", "Commendable", "Rigid"],
    "Terrible",
    "it is nearest in meaning to horrid"
  ),
  lexis(
    "Just give me the basic facts without needless details.",
    ["Relevant", "Extraneous", "Essential", "Critical"],
    "Essential"
  ),
  lexis(
    "Usman likes toys made with bright and animated colours.",
    ["Dull", "Sparkling", "Black", "Deep"],
    "Sparkling"
  ),
  lexis(
    "The man has strong distaste for alcohol.",
    ["Love", "Aversion", "Desire", "Excitement"],
    "Aversion",
    "aversion means a strong dislike or distaste"
  ),
  lexis(
    "The schism in the organization is on the increase.",
    ["Disagreement", "Understanding", "Opportunity", "Rot"],
    "Disagreement",
    "schism refers to a division or disagreement"
  ),
  lexis(
    "Sule admires people who have unbending character.",
    ["Mobile", "Steady", "Wavering", "Unstable"],
    "Steady"
  ),
  lexis(
    "He detests honesty.",
    ["Likes", "Hates", "Encourages", "Commands"],
    "Hates",
    "to detest means to hate strongly"
  ),

  // =====================
  // LEXIS & STRUCTURE — sentence completion
  // =====================
  lexs(
    "The number of stores will be increased ____ twenty to thirty.",
    ["from", "on", "at", "into"],
    "from"
  ),
  lexs(
    "____ bomb had earlier been defused",
    ["A leaf", "An alive", "A life", "A live"],
    "A live"
  ),
  lexs(
    "The mechanic did not tell me the brakes ____ bad",
    ["were", "are", "is", "was"],
    "were"
  ),
  lexs(
    "Tayo could have supplied the goods but it was ____ into two",
    ["splitting", "split", "splited", "splits"],
    "split"
  ),
  lexs(
    "Had Aisha realized what marriage entails she ____",
    [
      "could have not rush into it",
      "would have rushes into it",
      "would not have rushes into it",
      "would not have rushed into it",
    ],
    "would not have rushed into it"
  ),
  lexs(
    "The company deals ____ computer software",
    ["with", "for", "in", "to"],
    "with"
  ),
  lexs(
    "There is no logic ____ any of their claims.",
    ["with", "in", "from", "up"],
    "in"
  ),
  lexs(
    "The house was an easy task for the demolition squad.",
    ["Bringing forth", "Tearing down", "Bringing up", "Tearing with"],
    "Tearing down"
  ),
  lexs(
    "The player sat on the bench ____ the match lasted.",
    ["since", "when", "that", "while"],
    "while"
  ),
  lexs(
    "He ran out when he saw the teacher, ____?",
    ["didn't he", "isn't he", "does he", "is he"],
    "didn't he"
  ),
  lexs(
    "Parents should be good examples ____ their children.",
    ["to", "at", "from", "by"],
    "to"
  ),
  lexs(
    "He travelled ____ last week",
    ["somewhat", "somewhere", "some at", "some where"],
    "somewhere"
  ),
  lexs(
    "He was present at the party, ____?",
    ["wasn't he", "did he", "could he", "didn't he"],
    "wasn't he"
  ),
  lexs(
    "The prisoners had been ____ from all contacts",
    ["kept upon", "kept apart", "kept for", "kept on"],
    "kept apart",
    "the expression means separated from others"
  ),
  lexs(
    "We detest these ____, declared the woman",
    [
      "types of programme",
      "type of programmes",
      "types of programmes",
      "type of programme",
    ],
    "types of programmes",
    "the plural 'these' needs plural 'types' and the plural noun 'programmes'"
  ),
  lexs(
    "Lima doesn't like working in the dark, ____?",
    ["has she", "does she", "will she", "did she"],
    "does she"
  ),
  lexs(
    "Oboro will always ____ his friends.",
    ["stand up for", "stand down for", "stand across for", "stand besides for"],
    "stand up for",
    "it means to support or defend someone"
  ),
  lexs(
    "She arrived ____ air for the occasion.",
    ["for", "in", "with", "by"],
    "by"
  ),
  lexs(
    "Audu overbalanced and ____ the water.",
    ["fell into", "fell from", "fell for", "fell at"],
    "fell into"
  ),

  // =====================
  // ORAL ENGLISH
  // =====================
  vowel("Bore", ["call", "curl", "slot", "hum"], "call", "both words have the vowel /ɔː/"),
  vowel("Head", ["said", "heard", "herd", "shirt"], "said"),
  vowel("Sky", ["cite", "eats", "breaks", "coil"], "cite"),

  cons("Loath", ["breathe", "that", "thaw", "tank"], "thaw"),
  cons("Van", ["of", "often", "off", "physics"], "of"),
  cons("Lodge", ["soldier", "rogue", "go", "measure"], "soldier"),

  rhyme("Suite", ["tree", "breath", "bleat", "sweet"], "sweet"),
  rhyme("Cart", ["lash", "cat", "part", "pack"], "part", "it rhymes with \"cart\""),
  rhyme("Sight", ["skate", "short", "cite", "plait"], "cite", "it rhymes with \"sight\""),

  stress(
    "Programmatic",
    ["proGRAMmatic", "PROgrammatic", "programMATIC", "programmatIC"],
    "programMATIC"
  ),
  stress(
    "Certification",
    ["certiFIcation", "CERtification", "certifiCAtion", "cerTIfication"],
    "certifiCAtion"
  ),
  stress(
    "Motivation",
    ["moTIvation", "motivaTION", "motiVAtion", "MOtivation"],
    "motiVAtion"
  ),

  emph(
    "Bukola’s UNCLE is a strict teacher",
    [
      "Is Bukola’s uncle a strict cook?",
      "Is Tunde’s uncle a strict teacher?",
      "Is Bukola’s aunt a strict teacher?",
      "Is Bukola’s uncle an easy going teacher?",
    ],
    "Is Bukola’s aunt a strict teacher?"
  ),
  emph(
    "She puts spoon on the CHAIR.",
    [
      "Did she put the fork on the chair?",
      "Did she put the spoon on the chair?",
      "Who put the spoon on the chair?",
      "Who took the spoon on the chair?",
    ],
    "Did she put the spoon on the chair?"
  ),
  emph(
    "ASA is a lawyer",
    [
      "Is Asa a robber?",
      "Who is a lawyer?",
      "Is Asa the lawyer?",
      "Was Asa the lawyer?",
    ],
    "Who is a lawyer?"
  ),
];

export default jamb2015;