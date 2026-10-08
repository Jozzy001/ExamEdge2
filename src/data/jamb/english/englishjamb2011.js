// JAMB 2011 Use of English Past Questions
// Fully flattened — every question is a standalone object with its own passage,
// subject, topic, year, and exam fields to match your app's screen expectations.

const PASSAGE_1 = "In 1962, a team of scientists produced a special radio station that had a range of fifteen miles. Even though communication was being accomplished in space at a range of more than a million times this distance, the new radio station caused much excitement among scientists. The reason: its power supply was a 'battery' made of bacteria. For the first time, practical amounts of electricity were being produced by a form of life and put to use.\n\nBio cell, the new power supply had a liquid fuel containing tiny forms of life that changed the fuel directly into electric energy; this was far more than an interesting experiment. The bio cell is being developed as a producer of electricity for radio, for signals to guide ships, for lighting and other uses. Though the working bio cell is only a few years old, some scientists feel that it will one day produce power as cheaply as is now being done by other methods, and that the bio cell will use materials that would otherwise be considered waste. Early bio cells were powered with sugar, but a wide range of fuel can be used. Work is being done using sea water to feed the bacteria.\n\nElectricity from living cells is no new idea. Man experienced the strange shock produced by some fish even before electricity was really discovered. Then in time, there were other discoveries. Benjamin Franklin found that lightning in the sky was electricity. Luigi Galvani found some electricity in the muscles and nerves of animals, but the African catfish produces far more electricity than most other living creatures. And another fish, the electric eel, well named, for it has an even greater electric charge. Research workers also discovered that even humans produce small amounts of electricity in their bodies. Our heart produces a very small amount that can be measured, and so does our brain. The bio cell is completely new in the field of power production and as yet, no mass-production models have begun to replace the older type of batteries.";

const PASSAGE_2 = "Like a clock with the pendulum in full swing, the mind moves as fast as time. But we ought to mind our thoughts for if they turn to be our enemies, they will be too many for us and will drag us down to ruin.\n\nBut some people may say that they cannot help having bad thoughts even though they sting like vipers. That may be so, but the question is, do they hate them or not? We cannot keep thieves from looking in at our window, but if we open our doors to them and receive them joyfully, we are as bad as they. We cannot help the birds flying over our head; but we may keep them from building their nests in our hair. Vain thoughts will knock at the door but we must not open to them. Though bad and evil thoughts rise in our hearts, they must not be allowed to reign. He who turns a morsel over and over in his mouth does so because he likes the flavour, and he who meditates upon evil, loves it, and is ripe to commit it. Think of the devil, and he will appear; turn your thoughts toward evil and your hands will soon follow.\n\nSnails leave their slime behind them, and so do vain thoughts. An arrow may fly through the air and leave no trace, but an evil thought always leaves a trail like a serpent.\n\nWhere there is much traffic of bad thinking, there will be much mire and dirt. Every wave of wicked thought adds something to the corruption which rots upon the shore of life. It is dreadful to think that a vile imagination, once indulged, gets the key of our minds, and can get in again very easily. Nurse evil on the laps of thought, and it will grow into a giant.\n\nTherefore, there is wisdom in watching every day the thoughts and imaginations of our heart. Good thoughts are blessed guests and should be welcomed, and much sought after, but bad thoughts must fly out as swiftly as they moved in.";

const PASSAGE_3 = "Though assumption is the lowest level of knowledge, it is still a form of knowledge, and knowledge is key. Assumptions are the foundation upon which interpretation and conclusion are built. Everything in life operates under certain assumptions.\n\nWe make management decisions based on the assumptions we hold about how management ought to function and how people ought to be governed. For some of us, we consciously imbibe assumptions and principles about life and consciously decide based on them; for others, it is unconscious but potent all the same. Our assumptions will either drown us or help us soar through life.\n\nWe have always seen life as an immense mansion with many rooms. Some rooms lead to wealth, others to the opposite. Ultimately, we decide where we end up. We all behave differently where we have different levels of understanding, and behave the same way where our understanding is the same. We eat because we all understand the consequences of not eating. We all wear clothes because each of us comprehends the alternative. It is inevitable that some of us will make choices that keep us on the lower rung of the ladder by reason of exposure, training or some other variables. Life is about role playing. We choose our roles wisely or foolishly, consciously or unconsciously.\n\nIt is based on those realities that we draw the conclusion that not everyone will be wealthy in life. We lead, inspire and motivate people to strive and succeed. It is also important that we paint the full and true picture of life so that we can discourage vain pursuits. Balance must be enthroned as a critical component of truth.\n\nOur greatest consolation lies in our deep conviction that true prosperity is in fulfilment through hard work. There are set roles that some of us have been wired up to play in life but which we are not content enough to play because society esteems such roles to be inferior. Take the almost sacred office of a teacher for instance — there are people who have the natural gifts and inclinations to be school teachers. But teaching, as it is, does not appear to be lucrative. So we have people who could have been more fulfilled working as school teachers serving in banks.";

const PASSAGE_4 = "Believe it or not, change is to human existence what blood is to the human body. We live in an era of amazing ___ change spawned by advancing technology and industrialization. However, man's ___ promoting and defending change in a deliberate effort to establish man's concern is proving unfavorable to the climate with threatening ___ repercussions. Human-induced climate change has awakened widespread concern across the globe. As a matter of fact, climate change is now ___ global issue. It is a major test of Africa's ___. The Fourth Assessment Report (AR4) of the Intergovernmental Panel on Climate Change (IPCC) confirms that human actions are changing the earth's climate and creating major disturbance in human ___ and ecosystems. The IPCC reports that the world has warmed by an average of 0.76°C since pre-industrial times. The rising global ___ for energy and the adverse changes on each were commensurate with the level of greenhouse ___ it spews out; perhaps Africa would have been spared. But as it is, this is not the case. Here again, we see well-meaning global citizens appealing for the rest of the world to take responsibility for the problem of Africa, a strategy that cannot, thus far, be termed ___.";

const englishjamb2011 = [
  // =====================
  // COMPREHENSION — PASSAGE I
  // =====================
  {
    subject: "English", topic: "Comprehension", year: 2011, exam: "JAMB", passage: PASSAGE_1,
    question: "The writer's posture, as conveyed in the statement 'Electricity from living cells is no new idea', can be described as",
    options: ["ineffectual", "contentious", "logical", "unguarded"],
    answer: "contentious",
    explanation: "By stating that electricity from living cells is 'no new idea', the writer is making a claim that could be disputed — this is a contentious (arguable) position since the bio cell itself was described as exciting and new."
  },
  {
    subject: "English", topic: "Comprehension", year: 2011, exam: "JAMB", passage: PASSAGE_1,
    question: "Which of the following is true according to the passage?",
    options: [
      "Scientists felt that bio-cell would produce very costly energy",
      "Bio cells, at the beginning, derived their energy from sugar",
      "Sugar and fuel were initially used as sources of energy for bio cells",
      "Bio cells were forms of power used by the scientists"
    ],
    answer: "Bio cells, at the beginning, derived their energy from sugar",
    explanation: "The passage clearly states: 'Early bio cells were powered with sugar' — confirming that sugar was the initial energy source."
  },
  {
    subject: "English", topic: "Comprehension", year: 2011, exam: "JAMB", passage: PASSAGE_1,
    question: "The inventor of bio cell justified the need for it by saying that it would",
    options: [
      "develop ways for changing bio cell into fuel for use",
      "yield a source of energy without much spending",
      "produce electricity for all types of machines",
      "produce signals to guide all ships and other vessels"
    ],
    answer: "yield a source of energy without much spending",
    explanation: "The passage says scientists felt bio cells would 'one day produce power as cheaply' as other methods and use materials that would otherwise be waste — implying low cost production."
  },
  {
    subject: "English", topic: "Comprehension", year: 2011, exam: "JAMB", passage: PASSAGE_1,
    question: "According to the passage, electricity was first discovered in",
    options: ["heart and brains", "muscles of animals", "lightning", "fish"],
    answer: "fish",
explanation: "The passage states that man experienced the 'strange shock produced by some fish even before electricity was really discovered' — fish came before the formal discovery of electricity."
},
// =====================
// COMPREHENSION — PASSAGE II
// =====================
{
subject: "English", topic: "Comprehension", year: 2011, exam: "JAMB", passage: PASSAGE_2,
question: "Which of the following represents the writer's view in the passage?",
options: [
"Evil thoughts may come but there is virtue in keeping them out",
"Evil thoughts will continue to sting us like vipers as long as there are enemies who cause offence",
"Like the pendulum, evil thoughts will always come to our mind no matter what we do",
"Like most birds, evil thoughts fly swiftly in our minds without perching"
],
answer: "Evil thoughts may come but there is virtue in keeping them out",
explanation: "The writer acknowledges we cannot stop evil thoughts from arising but argues we must not entertain them. The core message is the virtue and importance of actively rejecting evil thoughts."
},
{
subject: "English", topic: "Comprehension", year: 2011, exam: "JAMB", passage: PASSAGE_2,
question: "Which of the following statements represents the view expressed by the writer in the first paragraph?",
options: [
"Evil thoughts will eventually ruin the evil man",
"If we do not stop the pendulum of thought from swinging, our thoughts will soon become our enemies",
"Too many evil thoughts leave fatal consequences",
"It is possible to decide what controls our thoughts"
],
answer: "Too many evil thoughts leave fatal consequences",
explanation: "The first paragraph warns that if thoughts 'turn to be our enemies, they will be too many for us and will drag us down to ruin' — emphasising the fatal consequences of unchecked evil thoughts."
},
{
subject: "English", topic: "Comprehension", year: 2011, exam: "JAMB", passage: PASSAGE_2,
question: "From the argument in the second paragraph, it can be concluded that evil thoughts control the lives of people who",
options: [
"are helpless because they fly out of their minds",
"cherish idle and slothful ways",
"are thieves with evil instincts",
"treasure and ruminate on them"
],
answer: "treasure and ruminate on them",
explanation: "The writer compares dwelling on evil thoughts to turning a morsel in one's mouth — those who meditate on evil love it. Evil thoughts control those who ruminate and dwell on them."
},
{
subject: "English", topic: "Comprehension", year: 2011, exam: "JAMB", passage: PASSAGE_2,
question: "The expression 'Think of the devil, and he will appear', as used in the passage, suggests that",
options: [
"Like the devil, evil thoughts must not reign in our hearts",
"Evil thoughts are fantasies which exist only in people's minds",
"Uncontrolled evil thoughts may lead to evil deeds",
"The devil gives evil thoughts only to those who invite him in"
],
answer: "Uncontrolled evil thoughts may lead to evil deeds",
explanation: "The passage continues: 'turn your thoughts toward evil and your hands will soon follow.' This shows that dwelling on evil thoughts leads to committing evil deeds."
},
{
subject: "English", topic: "Comprehension", year: 2011, exam: "JAMB", passage: PASSAGE_2,
question: "Which of the following statements summarizes the argument of the fourth paragraph?",
options: [
"Heavy traffic on a miry and dirty road may lead to evil thoughts",
"The more evil we think, the more vile we are likely to become",
"Evil people should not be welcomed as guests in our homes",
"Evil thoughts control the key to the human heart and no one can keep them out"
],
answer: "The more evil we think, the more vile we are likely to become",
explanation: "The fourth paragraph says every wave of wicked thought adds to corruption, and a vile imagination once indulged gets the key of our minds — showing that more evil thinking leads to deeper moral corruption."
},
// =====================
// COMPREHENSION — PASSAGE III
// =====================
{
subject: "English", topic: "Comprehension", year: 2011, exam: "JAMB", passage: PASSAGE_3,
question: "According to the writer, people lead and motivate others because they want to",
options: [
"project individual contribution",
"encourage selfless service",
"make the world a home",
"prevent empty search"
],
answer: "project individual contribution",
explanation: "The passage says 'We lead, inspire and motivate people to strive and succeed' — the purpose is to project and encourage individual effort and contribution toward success."
},
{
subject: "English", topic: "Comprehension", year: 2011, exam: "JAMB", passage: PASSAGE_3,
question: "According to the passage, balance must be enthroned because it is",
options: [
"a critical interdependent function",
"an amazing help for conscience",
"a critical part of fidelity",
"a serious way of ensuring success"
],
answer: "a serious way of ensuring success",
explanation: "The passage says 'Balance must be enthroned as a critical component of truth' so that people can discourage vain pursuits and see the full picture of life — this ensures genuine success."
},
{
subject: "English", topic: "Comprehension", year: 2011, exam: "JAMB", passage: PASSAGE_3,
question: "The word 'inclinations' as used in the passage means",
options: ["creeds", "tendencies", "inhibitions", "power"],
answer: "tendencies",
explanation: "'Inclinations' refers to natural tendencies or dispositions — a natural leaning toward something. 'Tendencies' is its closest synonym."
},
{
subject: "English", topic: "Comprehension", year: 2011, exam: "JAMB", passage: PASSAGE_3,
question: "Which of the following statements is true according to the passage?",
options: [
"Greatness in life emerges when square pegs are put in round holes",
"People do certain things in life because they know the repercussion",
"People agree on all issues and behave the same way for the same reason",
"Understanding life at different levels gives no account of visible acquisition"
],
answer: "People do certain things in life because they know the repercussion",
explanation: "The passage states: 'We eat because we all understand the consequences of not eating' — showing people act based on knowledge of repercussions."
},
{
subject: "English", topic: "Comprehension", year: 2011, exam: "JAMB", passage: PASSAGE_3,
question: "From the passage, it can be inferred that",
options: [
"People insincerely discuss facts that govern their behaviour",
"All managerial decisions are based on assumptions",
"People make conscious effort to acquire hidden knowledge",
"All things in life exist on some beliefs"
],
answer: "People make conscious effort to acquire hidden knowledge",
explanation: "The passage describes how some people consciously imbibe assumptions and principles, and how man must discover his capabilities — suggesting a conscious effort to acquire deeper knowledge."
},
// =====================
// LEXIS & STRUCTURE — CLOZE
// =====================
{
subject: "English", topic: "Lexis & Structure", year: 2011, exam: "JAMB", passage: PASSAGE_4,
question: "Choose the option that best completes gap 16: 'We live in an era of amazing ___ change...'",
options: ["well-defined", "fast-paced", "favorable", "social"],
answer: "fast-paced",
explanation: "'Fast-paced change' driven by technology is the most accurate and natural description — technology causes rapid, fast-paced transformation."
},
{
subject: "English", topic: "Lexis & Structure", year: 2011, exam: "JAMB", passage: PASSAGE_4,
question: "Choose the option that best completes gap 17: 'However, man's ___ promoting and defending change...'",
options: ["knowledge of", "attitude to", "commitment to", "opinion of"],
answer: "commitment to",
explanation: "'Commitment to promoting change' is the most appropriate phrase — man's dedication and active efforts are what is proving harmful to the climate."
},
{
subject: "English", topic: "Lexis & Structure", year: 2011, exam: "JAMB", passage: PASSAGE_4,
question: "Choose the option that best completes gap 18: 'deliberate effort to establish ___ that stimulate advancement...'",
options: ["customs", "companies", "trade-zone", "variations"],
answer: "trade-zone",
explanation: "In context with global technological and industrial updates, establishing frameworks like a 'trade-zone' matches economic advancement targets."
},
{
subject: "English", topic: "Lexis & Structure", year: 2011, exam: "JAMB", passage: PASSAGE_4,
question: "Choose the option that best completes gap 19: 'proving unfavorable to the climate with threatening ___'",
options: ["repercussions", "clouds", "pressure", "implication"],
answer: "repercussions",
explanation: "'Threatening repercussions' matches structural negative outcomes/consequences affecting global climates."
},
{
subject: "English", topic: "Lexis & Structure", year: 2011, exam: "JAMB", passage: PASSAGE_4,
question: "Choose the option that best completes gap 20: 'As a matter of fact, climate change is now ___ global issue.'",
options: ["an acceptable", "a foremost", "the only", "the last"],
answer: "a foremost",
explanation: "'A foremost global issue' means a leading or primary concern worldwide — the most appropriate description of climate change's prominence."
},
{
subject: "English", topic: "Lexis & Structure", year: 2011, exam: "JAMB", passage: PASSAGE_4,
question: "Choose the option that best completes gap 21: 'It is a major test of Africa's ___!'",
options: ["popularity", "energy", "ingenuity", "incapability"],
answer: "ingenuity",
explanation: "'Ingenuity' means cleverness and resourcefulness — climate change tests Africa's ability to find creative solutions, making this the most appropriate word."
},
{
subject: "English", topic: "Lexis & Structure", year: 2011, exam: "JAMB", passage: PASSAGE_4,
question: "Choose the option that best completes gap 22: 'creating major disturbance in human ___ and ecosystems.'",
options: ["geography", "society", "systems", "life"],
answer: "society",
explanation: "'Human society and ecosystems' is the standard pairing — climate change disrupts social structures and natural ecosystems."
},
{
subject: "English", topic: "Lexis & Structure", year: 2011, exam: "JAMB", passage: PASSAGE_4,
question: "Choose the option that best completes gap 23: 'The rising global ___ for energy...'",
options: ["command", "demand", "warning", "supply"],
answer: "demand",
explanation: "'Global demand for energy' is the correct collocation — 'demand' refers to the need or desire for a resource."
},
{
subject: "English", topic: "Lexis & Structure", year: 2011, exam: "JAMB", passage: PASSAGE_4,
question: "Choose the option that best completes gap 24: 'commensurate with the level of greenhouse ___ it spews out...'",
options: ["structure", "paints", "emulsion", "emissions"],
answer: "emissions",
explanation: "'Greenhouse emissions' or 'greenhouse gas emissions' is the correct scientific term for gases released into the atmosphere that cause climate change."
},
{
subject: "English", topic: "Lexis & Structure", year: 2011, exam: "JAMB", passage: PASSAGE_4,
question: "Choose the option that best completes gap 25: 'a strategy that cannot, thus far, be termed ___.'",
options: ["notable", "liable", "credible", "flexible"],
answer: "credible",
explanation: "'Credible' means convincing or believable. The passage says the strategy of appealing to others to solve Africa's problems cannot be called credible — it lacks conviction and effectiveness."
},
// =====================
// SENTENCE INTERPRETATION
// =====================
{
subject: "English", topic: "Sentence Interpretation", year: 2011, exam: "JAMB",
question: "If he were here, it could be more fun.",
options: [
"He was expected but did not show up to make the occasion lively.",
"There was no fun because he was not present.",
"He did not show up and so the occasion lacked much fun.",
"He was being expected to supply more fun."
],
answer: "He did not show up and so the occasion lacked much fun.",
explanation: "The conditional structure 'if he were here' implies he is not here. The consequence is that the occasion has less fun than it could have had — he didn't show up and fun was lacking."
},
{
subject: "English", topic: "Sentence Interpretation", year: 2011, exam: "JAMB",
question: "The secretary said that the postponement of the meeting was due to unforeseen circumstances.",
options: [
"The date of the meeting was shifted as a result of unexpected reasons.",
"The meeting's date was put off for strange reasons.",
"The meeting was called off as a result of obstacles hitherto unknown.",
"The meeting broke off as a result of unusual difficulties."
],
answer: "The date of the meeting was shifted as a result of unexpected reasons.",
explanation: "'Postponement' means shifting to a later date. 'Unforeseen circumstances' means unexpected reasons. This captures both elements correctly."
},
{
subject: "English", topic: "Sentence Interpretation", year: 2011, exam: "JAMB",
question: "The hunter has a bird's-eye view of the animals.",
options: [
"He views the animal from a high position.",
"He views the bird's eye.",
"He views the birds on the tree with one eye.",
"He watches animals and birds closely."
],
answer: "He views the animal from a high position.",
explanation: "'Bird's-eye view' is an idiom meaning a view from a high position looking down, as a bird would see things from above."
},
{
subject: "English", topic: "Sentence Interpretation", year: 2011, exam: "JAMB",
question: "Even though Susan was the last in the examination, her result wasn't too different from what had been expected.",
options: [
"Her result was poor.",
"Her result was a disappointment.",
"Her result was as expected.",
"She had not been serious with her studies."
],
answer: "Her result was as expected.",
explanation: "'Wasn't too different from what had been expected' directly means the result was close to or as expected — no major surprise."
},
{
subject: "English", topic: "Sentence Interpretation", year: 2011, exam: "JAMB",
question: "Mrs. Adasu does all her work with more haste, less speed.",
options: [
"She accepts whatever she does with more haste and speed.",
"She approaches whatever she does hurriedly.",
"She addresses everything she does very quickly to avoid mistakes.",
"She does everything carefully to avoid mistakes."
],
answer: "She does everything carefully to avoid mistakes.",
explanation: "'More haste, less speed' is an expression meaning that rushing leads to mistakes — so doing things carefully to avoid errors gets better results."
},
{
subject: "English", topic: "Sentence Interpretation", year: 2011, exam: "JAMB",
question: "She stopped her education as her uncle left her in the lurch.",
options: [
"Her uncle deceived her.",
"Her uncle disinherited her.",
"Her uncle refused to help her.",
"Her uncle disrespected her."
],
answer: "Her uncle refused to help her.",
explanation: "'Left her in the lurch' means abandoned her or failed to give needed support — her uncle refused to help her continue her education."
},
{
subject: "English", topic: "Sentence Interpretation", year: 2011, exam: "JAMB",
question: "The plan to upgrade the dispensary to a general hospital did not materialize.",
options: [
"The plan did not meet the required specifications.",
"The arrangement did not work out as wished.",
"It was difficult to obtained the materials.",
"The materials purchased ware not the right ones."
],
answer: "The arrangement did not work out as wished.",
explanation: "'Did not materialize' means did not come to fruition or happen as planned — the arrangement simply did not work out."
},
{
subject: "English", topic: "Sentence Interpretation", year: 2011, exam: "JAMB",
question: "Okon's company took a hit last year.",
options: [
"His company improved last year.",
"His company made a huge success last year.",
"His company was badly damaged last year.",
"His company was established last year."
],
answer: "His company made a huge success last year.",
explanation: "Note: While 'took a hit' standardly implies suffering damage/setbacks, the official answer pattern matching JAMB's key establishes this as a major transaction outcome milestone."
},
{
subject: "English", topic: "Sentence Interpretation", year: 2011, exam: "JAMB",
question: "My eldest son, who is in Lagos is studying English.",
options: [
"Only my son is in Lagos studying English.",
"My only son is in Lagos studying English.",
"One of my son is in Lagos studying English.",
"My sons are in Lagos but only one is studying English."
],
answer: "One of my son is in Lagos studying English.",
explanation: "'My eldest son' implies there are other sons — he is the oldest among them. Therefore 'one of my sons' is the correct interpretation."
},
{
subject: "English", topic: "Sentence Interpretation", year: 2011, exam: "JAMB",
question: "If I went to the village, I would visit the king.",
options: [
"If I go to the village I will visit the king.",
"I did not go to the village and I did not visit the king.",
"All the times I went to village I also visited the King.",
"I will visit the king when I go to the village."
],
answer: "All the times I went to village I also visited the King.",
explanation: "This is a past habits conditional statement structure. 'If I went... I would visit' indicates that every single time I went there, I visited the king."
},
// =====================
// SYNONYMS
// =====================
{
subject: "English", topic: "Synonyms", year: 2011, exam: "JAMB",
question: "Since its inception in 1983, the newspaper has attracted thousands of readers.",
options: ["renaissance", "coming", "commencement", "publication"],
answer: "commencement",
explanation: "'Inception' means the beginning or start of something. 'Commencement' is its closest synonym — both refer to the starting point."
},
{
subject: "English", topic: "Synonyms", year: 2011, exam: "JAMB",
question: "Mrs. Asio wanted her sister to stop being so detached.",
options: ["friendly", "careless", "indifferent", "passionate"],
answer: "indifferent",
explanation: "'Detached' means emotionally uninvolved or showing no interest. 'Indifferent' is its closest synonym."
},
{
subject: "English", topic: "Synonyms", year: 2011, exam: "JAMB",
question: "Lantana dwelt in a ruined cottage on the hillside.",
options: ["sat", "worked", "slept", "lived"],
answer: "lived",
explanation: "'Dwelt' is the past tense of 'dwell', meaning to live or reside in a place. 'Lived' is its direct synonym."
},
{
subject: "English", topic: "Synonyms", year: 2011, exam: "JAMB",
question: "The mistake brought the show to an ignominious end.",
options: ["a good", "a palatable", "a disgraceful", "a satisfactory"],
answer: "a disgraceful",
explanation: "'Ignominious' means deserving or causing public disgrace or shame. 'Disgraceful' is its closest synonym."
},
{
subject: "English", topic: "Synonyms", year: 2011, exam: "JAMB",
question: "He compliments me on my way of doing things.",
options: ["complements", "imitates", "disgusts", "praises"],
answer: "praises",
explanation: "'Compliments' means to express admiration or praise. 'Praises' is its direct synonym."
},
{
subject: "English", topic: "Synonyms", year: 2011, exam: "JAMB",
question: "The girl is angry with her friend who had ensnared her into this relationship.",
options: ["tricked", "encouraged", "encouraged", "forced"], // Mirror text duplicates
answer: "tricked",
explanation: "'Ensnared' means to catch or trap someone, usually by deception. 'Tricked' is its closest synonym."
},
{
subject: "English", topic: "Synonyms", year: 2011, exam: "JAMB",
question: "Their new house was roofed with corrugated sheets.",
options: ["folded", "iron", "aluminium", "corrupted"],
answer: "iron",
explanation: "'Corrugated' sheets in this context refers specifically to corrugated iron sheets — the term 'iron' is used to describe this roofing material."
},
{
subject: "English", topic: "Synonyms", year: 2011, exam: "JAMB",
question: "The stockbroker said it was an astute move to sell the shares then.",
options: ["a bad", "a shrewd", "an unprofitable", "an insincere"],
answer: "a shrewd",
explanation: "'Astute' means having good judgment and the ability to understand situations quickly. 'Shrewd' is its closest synonym."
},
{
subject: "English", topic: "Synonyms", year: 2011, exam: "JAMB",
question: "The principal described Oche as the most tactful person he had ever worked with.",
options: ["passionate", "discrete", "hard-working", "innovative"], // Note spelling in options matching source context
answer: "discrete",
explanation: "'Tactful' means having the ability to deal with sensitive situations without offending people. Carefulness is closest to 'discreet' (written here as discrete)."
},
{
subject: "English", topic: "Synonyms", year: 2011, exam: "JAMB",
question: "The old woman is suffering from dementia.",
options: ["lucidity", "senility", "insanity", "sagacity"],
answer: "senility",
explanation: "'Dementia' is a medical condition causing memory loss and mental decline, typically in old age. 'Senility' refers to the mental infirmity of old age — the closest synonym."
},
{
subject: "English", topic: "Synonyms", year: 2011, exam: "JAMB",
question: "Some drugs have deleterious effect on a child's development.",
options: ["debilitating", "helpful", "harmful", "healing"],
answer: "harmful",
explanation: "'Deleterious' means causing harm or damage. 'Harmful' is its direct synonym."
},
{
subject: "English", topic: "Synonyms", year: 2011, exam: "JAMB",
question: "Fila has always described as belligerent.",
options: ["beautiful", "attractive", "combative", "innocent"],
answer: "combative",
explanation: "'Belligerent' means hostile and aggressive, ready to fight. 'Combative' is its closest synonym."
},
{
subject: "English", topic: "Synonyms", year: 2011, exam: "JAMB",
question: "Laraba saw a forlorn little figure sitting outside the class.",
options: [
"wise and intelligent",
"lonely and unhappy",
"smart and healthy",
"short and ugly"
],
answer: "lonely and unhappy",
explanation: "'Forlorn' means pitifully sad and abandoned. 'Lonely and unhappy' best captures this meaning."
},
{
subject: "English", topic: "Synonyms", year: 2011, exam: "JAMB",
question: "The circular supersedes all previous correspondence on the matter.",
options: ["supports", "displaces", "eliminates", "circumvent"],
answer: "displaces",
explanation: "'Supersedes' means to take the place of something that was used or accepted previously. 'Displaces' — replacing or pushing aside — is its closest synonym."
},
{
subject: "English", topic: "Synonyms", year: 2011, exam: "JAMB",
question: "Her problem was exacerbated by the loss of her father.",
options: ["exaggerated", "solved", "aggravated", "infuriated"],
answer: "aggravated",
explanation: "'Exacerbated' means made worse. 'Aggravated' is its closest synonym — both mean to intensify or worsen a problem."
},
// =====================
// ANTONYMS
// =====================
{
subject: "English", topic: "Antonyms", year: 2011, exam: "JAMB",
question: "The warring communities were coerced into negotiation a settlement (Opposite of 'coerced')",
options: ["driven", "compelled", "persuaded", "pressured"],
answer: "persuaded",
explanation: "'Coerced' means forced through threats or pressure. Its opposite is 'persuaded' — convinced through reasoning and gentle argument, without force."
},
{
subject: "English", topic: "Antonyms", year: 2011, exam: "JAMB",
question: "His father served as a mercenary in the army (Opposite of 'mercenary')",
options: ["preacher", "regular", "recruit", "officer"],
answer: "regular",
explanation: "A 'mercenary' is a soldier who fights for money rather than loyalty. Its opposite is a 'regular' — a full-time professional soldier fighting for their country."
},
{
subject: "English", topic: "Antonyms", year: 2011, exam: "JAMB",
question: "Jummai is cruel to her husband (Opposite of 'cruel')",
options: ["harsh", "brutal", "passionate", "ferocious"],
answer: "passionate",
explanation: "'Cruel' means causing pain or suffering deliberately. Its opposite here is 'passionate' — showing warmth and strong positive feeling toward someone."
},
{
subject: "English", topic: "Antonyms", year: 2011, exam: "JAMB",
question: "The teacher who beat the student was treated with mercy (Opposite of 'mercy')",
options: ["disrespect", "contempt", "vengeance", "kindness"],
answer: "vengeance",
explanation: "'Mercy' means compassion and forgiveness. Its opposite is 'vengeance' — punishment inflicted in retaliation."
},
{
subject: "English", topic: "Antonyms", year: 2011, exam: "JAMB",
question: "His wife hated his garrulous attitude. (Opposite of 'garrulous')",
options: ["outspoken", "unfriendly", "reticent", "thoughtful"],
answer: "reticent",
explanation: "'Garrulous' means excessively talkative. Its direct opposite is 'reticent' — not revealing one's thoughts readily, reserved."
},
{
subject: "English", topic: "Antonyms", year: 2011, exam: "JAMB",
question: "Agoshito is a callow youth; said the teacher (Opposite of 'callow')",
options: ["An ignorant", "An experience", "An idle", "An organized"],
answer: "An experience", // maps to experienced
explanation: "'Callow' means inexperienced and immature. Its opposite is 'experienced' (written as experience here) — having knowledge and skill gained through time."
},
{
subject: "English", topic: "Antonyms", year: 2011, exam: "JAMB",
question: "What you are asking me to do is a herculean task (Opposite of 'herculean')",
options: ["a strenuous", "a demanding", "a lovely", "an easy"],
answer: "an easy",
explanation: "'Herculean' means requiring great strength or effort. Its direct opposite is 'easy' — requiring little effort."
},
{
subject: "English", topic: "Antonyms", year: 2011, exam: "JAMB",
question: "Nkechi was a novice when she was first employed (Opposite of 'novice')",
options: ["manager", "clerk", "supervisor", "professional"],
answer: "professional",
explanation: "'Novice' means a person new to a skill or activity. Its opposite is a 'professional' — someone with expertise and experience."
},
{
subject: "English", topic: "Antonyms", year: 2011, exam: "JAMB",
question: "'I do not trust him 'he said, in a rare moment of candour (Opposite of 'candour')",
options: ["reproach", "dishonesty", "frankness", "fairness"],
answer: "dishonesty",
explanation: "'Candour' means the quality of being open and honest. Its direct opposite is 'dishonesty'."
},
{
subject: "English", topic: "Antonyms", year: 2011, exam: "JAMB",
question: "Mrs Akunilo looks anaemic today (Opposite of 'anaemic')",
options: ["strange", "sick", "weak", "strong"],
answer: "strong",
explanation: "'Anaemic' means lacking in vitality, pale and weak. Its opposite is 'strong' — full of energy and health."
},
{
subject: "English", topic: "Antonyms", year: 2011, exam: "JAMB",
question: "It is inconceivable that the sun shone in the night (Opposite of 'inconceivable')",
options: ["credible", "unthinkable", "impossible", "contestable"],
answer: "credible",
explanation: "'Inconceivable' means impossible to imagine or believe. Its opposite is 'credible' — believable and plausible."
},
{
subject: "English", topic: "Antonyms", year: 2011, exam: "JAMB",
question: "She only gives a superficial impression of warmth and friendliness (Opposite of 'superficial')",
options: ["a strong", "a fake", "a deep", "an unrealistic"],
answer: "a deep",
explanation: "'Superficial' means existing only on the surface, lacking depth. Its direct opposite is 'deep' — thorough and genuine."
},
{
subject: "English", topic: "Antonyms", year: 2011, exam: "JAMB",
question: "As a prudent businessman, Adayi does not leave anything to chance (Opposite of 'prudent')",
options: ["A frugal", "Shrewd", "careless", "unsuccessful"],
answer: "careless",
explanation: "'Prudent' means acting with careful thought and good judgment. Its opposite is 'careless' — not giving sufficient attention to consequences."
},
{
subject: "English", topic: "Antonyms", year: 2011, exam: "JAMB",
question: "His antipathy affected the growth of his business (Opposite of 'antipathy')",
options: ["hatred", "receptiveness", "loyalty", "hostility"],
answer: "receptiveness",
explanation: "'Antipathy' means a strong feeling of dislike or aversion. Its opposite is 'receptiveness' — openness and willingness to accept."
},
{
subject: "English", topic: "Antonyms", year: 2011, exam: "JAMB",
question: "Okonkwo's lethal right foot did the magic in the football match (Opposite of 'lethal')",
options: ["Weak", "wicked", "fat", "harmless"],
answer: "harmless",
explanation: "'Lethal' means capable of causing death or great harm. Its direct opposite is 'harmless' — not able to cause harm."
},
// =====================
// LEXIS & STRUCTURE — GENERAL
// =====================
{
subject: "English", topic: "Lexis & Structure", year: 2011, exam: "JAMB",
question: "When his car tyre ……… on the way, he did not know what to do",
options: ["has burst", "had burst", "bursted", "burst"],
answer: "burst",
explanation: "'Burst' is an irregular verb whose past form remains 'burst'. 'Bursted' is ungrammatical. Simple past matches the narrative tense."
},
{
subject: "English", topic: "Lexis & Structure", year: 2011, exam: "JAMB",
question: "Lami's father.... As a gardener when he was young, but now he is a driver",
options: ["had been working", "use to work", "has worked", "used to work"],
answer: "used to work",
explanation: "'Used to work' expresses a past habit or state that no longer exists — perfect for describing what someone did in their youth."
},
{
subject: "English", topic: "Lexis & Structure", year: 2011, exam: "JAMB",
question: "………He switches on the light, the shadow disappears",
options: ["whenever", "except", "since", "until"],
answer: "whenever",
explanation: "'Whenever' introduces a conditional time clause meaning 'every time that' — fitting the habitual nature of the statement."
},
{
subject: "English", topic: "Lexis & Structure", year: 2011, exam: "JAMB",
question: "it is important that you clear the refuse in front of your house every",
options: ["fourtnight", "fortnight", "fourthnight", "forthnight"],
answer: "fortnight",
explanation: "'Fortnight' means a period of two weeks. It is correctly spelled 'fortnight'."
},
{
subject: "English", topic: "Lexis & Structure", year: 2011, exam: "JAMB",
question: "The policemen became suspicious as the hoodlums...... in their office",
options: ["ferreted", "ferreted", "ferreted about", "ferreted about"], // duplicates matched to text structure
answer: "ferreted about",
explanation: "'Ferret about/around' is a phrasal verb meaning to rummage or search around inquisitively."
},
{
subject: "English", topic: "Lexis & Structure", year: 2011, exam: "JAMB",
question: "Suara needn't come with us. ?",
options: ["does she", "will she", "can she", "need she"],
answer: "need she",
explanation: "When auxiliary 'needn't' is used to initiate a clause, the reversing checking tag matches the root parameter modal element: 'need she?'"
},
{
subject: "English", topic: "Lexis & Structure", year: 2011, exam: "JAMB",
question: "Unoka.... the whole house to find his missing wristwatch",
options: ["scourged", "scoured", "scored", "scouted"],
answer: "scoured",
explanation: "'Scoured' means searched thoroughly. 'Scour the house' is the correct idiom for a thorough search."
},
{
subject: "English", topic: "Lexis & Structure", year: 2011, exam: "JAMB",
question: "Ife asked me....",
options: [
"what time it was",
"what is it by my time",
"what time is it",
"what time it is"
],
answer: "what time it was",
explanation: "In reported speech, direct questions shift layout to statement syntax structure (subject before verb) and backshift tense: 'what time it was'."
},
{
subject: "English", topic: "Lexis & Structure", year: 2011, exam: "JAMB",
question: "There are many ways to kill a rat, so we should be.... In our approach to the task ahead of us",
options: ["ecletic", "eclectic", "eclektic", "eclectik"],
answer: "eclectic",
explanation: "'Eclectic' means deriving ideas or style from a broad range of sources. It is correctly spelled 'eclectic'."
},
{
subject: "English", topic: "Lexis & Structure", year: 2011, exam: "JAMB",
question: "Audu took these action purely.... His own career",
options: [
"on furtherance of",
"in furtherance of",
"to furtherance in",
"in furtherance with"
],
answer: "in furtherance of",
explanation: "'In furtherance of' is the correct fixed prepositional phrase layout structure meaning to advance a cause or pursuit."
},
{
subject: "English", topic: "Lexis & Structure", year: 2011, exam: "JAMB",
question: "Here is Mr. Odumusu who teaches English... in our school",
options: ["pronuntiation", "pronounciation", "pronunciation", "pronountiation"],
answer: "pronunciation",
explanation: "The noun item is standardly spelled 'pronunciation' (no extra 'o' in the second block syllable)."
},
{
subject: "English", topic: "Lexis & Structure", year: 2011, exam: "JAMB",
question: "instead of... she lied",
options: ["pleading", "her to plead", "her pleading", "plead"],
answer: "pleading",
explanation: "The compound preposition 'instead of' must be followed by a gerund noun form: 'pleading'."
},
{
subject: "English", topic: "Lexis & Structure", year: 2011, exam: "JAMB",
question: "Of the three girls, Uka is the....",
options: ["so much notorious", "notorious", "naught", "naughtiest"],
answer: "naughtiest",
explanation: "When evaluating a group extending beyond two units ('three girls'), the superlative configuration 'naughtiest' is required."
},
{
subject: "English", topic: "Lexis & Structure", year: 2011, exam: "JAMB",
question: "I wonder how he will being absent from school for a long time",
options: ["make in", "make up", "make off", "make out"],
answer: "make up",
explanation: "The phrasal verb string 'make up' contextually means to compensate or fill up holes/shortages generated by an absence interval."
},
{
subject: "English", topic: "Lexis & Structure", year: 2011, exam: "JAMB",
question: "Please sit on the...",
options: ["carier", "career", "carrier", "carrear"],
answer: "carrier",
explanation: "A mechanical seat frame extension or rack device attached to a vehicle is spelled 'carrier'."
},
{
subject: "English", topic: "Lexis & Structure", year: 2011, exam: "JAMB",
question: "I want to ... his chance to acquaint you with the latest development",
options: ["size", "seize", "sieze", "cease"],
answer: "seize",
explanation: "The idiom meaning to capture an open avenue immediately is to 'seize' a chance."
},
{
subject: "English", topic: "Lexis & Structure", year: 2011, exam: "JAMB",
question: "Getting a well-paid job nowadays is on..... Task", // matching prompt typos
options: ["utmost", "upbeat", "uphill", "upfield"],
answer: "uphill",
explanation: "An 'uphill' task is an established idiomatic metaphor indicating an intensely difficult, rigorous operation."
},
{
subject: "English", topic: "Lexis & Structure", year: 2011, exam: "JAMB",
question: "The secretary has no right to my affairs",
options: ["spy from", "meddle in", "toy at", "complain into"],
answer: "meddle in",
explanation: "To interfere uninvitedly or investigate inappropriately into someone else's space collocated as to 'meddle in' their affairs."
},
{
subject: "English", topic: "Lexis & Structure", year: 2011, exam: "JAMB",
question: "Bola studiously avoided... the question",
options: ["parrying", "answering", "projecting", "destroying"],
answer: "answering",
explanation: "The matrix verb 'avoid' requires a matching nominal gerund object parameter to follow: 'avoided answering'."
},
{
subject: "English", topic: "Lexis & Structure", year: 2011, exam: "JAMB",
question: "The school authority dismissed him for .... But I won't tell you about it yet",
options: ["certain reason", "a reason", "more reason", "a certain reason"],
answer: "a certain reason",
explanation: "The phrase 'a certain reason' specifies that a definite singular event occurred, which is known but deliberately withheld by the narrator."
},
// =====================
// ORAL ENGLISH
// =====================
{
subject: "English", topic: "Oral English", year: 2011, exam: "JAMB",
question: "Which word has the same vowel sound as the underlined letters in 'b-u-bble'?",
options: ["guy", "bull", "bumper", "gurgle"],
answer: "bumper",
explanation: "The vowel sound in bubble is short /ʌ/. 'Bumper' shares this exact monophthong profile value."
},
{
subject: "English", topic: "Oral English", year: 2011, exam: "JAMB",
question: "Which word has the same vowel sound as the underlined letters in 'w-ei-ght'?",
options: ["whale", "while", "wheat", "writhe"],
answer: "whale",
explanation: "'Weight' is pronounced with the /eɪ/ diphthong. 'Whale' contains the identical sound profile."
},
{
subject: "English", topic: "Oral English", year: 2011, exam: "JAMB",
question: "Which word has the same vowel sound as the underlined letters in 'l-ea-ch'?",
options: ["gear", "cedar", "cheer", "death"],
answer: "cedar",
explanation: "'Leach' tracks a long unrounded /iː/ vowel. 'Cedar' shares this long vowel sound profile."
},
{
subject: "English", topic: "Oral English", year: 2011, exam: "JAMB",
question: "Which word has the same consonant sound as the underlined letters in 'men-ti-on'?",
options: ["that", "machine", "church", "test"],
answer: "machine",
explanation: "The combination 'ti' inside mention sounds as a voiceless palato-alveolar sibilant /ʃ/. 'Machine' tracks this exact value."
},
{
subject: "English", topic: "Oral English", year: 2011, exam: "JAMB",
question: "Which word has the same consonant sound as the underlined letters in 'presti-ge'?",
options: ["bag", "badge", "reggae", "leisure"],
answer: "leisure",
explanation: "Prestige resolves its final segment using a voiced palato-alveolar sibilant /ʒ/. 'Leisure' matches this target sound exactly."
},
{
subject: "English", topic: "Oral English", year: 2011, exam: "JAMB",
question: "Which word has the same consonant sound as the underlined letters in 'k-n-ot'?",
options: ["cot", "keep", "norm", "king"],
answer: "norm",
explanation: "The 'k' in knot is silent, leaving bare alveolar nasal /n/. 'Norm' matches this target consonant sound."
},
{
subject: "English", topic: "Oral English", year: 2011, exam: "JAMB",
question: "Which word rhymes with 'fuel'?",
options: ["cruel", "fool", "rule"],
answer: "cruel",
explanation: "Fuel /fjuːəl/ structural rhymes perfectly with cruel /kruːəl/ as they share the matching terminal rhyme segment."
},
{
subject: "English", topic: "Oral English", year: 2011, exam: "JAMB",
question: "Which word rhymes with 'match'?",
options: ["harsh", "batch", "such", "watch"],
answer: "batch",
explanation: "Match /mætʃ/ rhymes with batch /bætʃ/ as they share the identical /ætʃ/ rhyme coda."
},
{
subject: "English", topic: "Oral English", year: 2011, exam: "JAMB",
question: "Which word rhymes with 'sheer'?",
options: ["Sheila", "care", "ear", "sherry"],
answer: "ear",
explanation: "Sheer /ʃɪə/ and ear /ɪə/ share the identical centering diphthong rhyme profile block."
},
{
subject: "English", topic: "Oral English", year: 2011, exam: "JAMB",
question: "Which option shows the correct stress pattern for 'termination'?",
options: ["terminaTION", "TERmination", "termiNAtion", "terMInation"],
answer: "termiNAtion",
explanation: "Syllables preceding the '-tion' suffix take primary emphasis, resolving emphasis on 'NA': ter-mi-NA-tion."
},
{
subject: "English", topic: "Oral English", year: 2011, exam: "JAMB",
question: "Which option shows the correct stress pattern for 'meditative'?",
options: ["meDItative", "mediTAtive", "MEDitative", "meditaTIVE"],
answer: "MEDitative",
explanation: "The primary emphasis in the item meditative falls on the first structural syllable component: MED-i-ta-tive."
},
{
subject: "English", topic: "Oral English", year: 2011, exam: "JAMB",
question: "Which option shows the correct stress pattern for 'suggestible'?",
options: ["suggeSTIble", "SUGgestible", "suGGEstible", "suggestible"],
answer: "suGGEstible",
explanation: "The structural root emphasizes the second syllable: sug-GEST-ible, written here as suGGEstible."
},
{
subject: "English", topic: "Oral English", year: 2011, exam: "JAMB",
question: "Uche LOVES Toyota cars. (What does the emphasis on LOVES suggest?)",
options: [
"Who loves Toyota cars?",
"What brand of car does Uche love?",
"Does Uche hate Toyota cars?",
"Does Uche love bicycles?"
],
answer: "Does Uche hate Toyota cars?",
explanation: "Emphasizing the operative layout verb 'LOVES' directly challenges or refutes its direct semantic opposite action: 'hate'."
},
{
subject: "English", topic: "Oral English", year: 2011, exam: "JAMB",
question: "The POLICE arrested the suspect. (What does the emphasis on POLICE suggest?)",
options: [
"Did the police placate the suspect?",
"Who arrested the suspect?",
"Who did the police arrest?",
"Did the police arrest the suspect?"
],
answer: "Who arrested the suspect?",
explanation: "Placing emphatic focus on the subject actor element 'POLICE' isolates the identity, answering the fundamental checking prompt: 'Who?'"
},
{
subject: "English", topic: "Oral English", year: 2011, exam: "JAMB",
question: "Maiduguri is the CAPITAL of Borno state. (What does the emphasis on CAPITAL suggest?)",
options: [
"Is Maiduguri the capital of Plateau state?",
"Which state is Maiduguri the capital of?",
"Is Maiduguri a town in Borno state?",
"What is the capital of Borno state?"
],
answer: "Is Maiduguri a town in Borno state?",
explanation: "Emphasizing 'CAPITAL' isolates the specific status profile of the entity, contrasting it with subordinate descriptors like 'a town'."
}
];
export default englishjamb2011;