// JAMB 1984 English Language Past Questions
// 100 questions — fully flattened (no passage-wrapper nesting) so every
// question is a standalone object with its own subject/topic/year/exam
// fields, matching the structure the app's counter and Quiz screen expect.

const PASSAGE_1 = "It was summer, early afternoon. Jim ran into the station. The 4.30 train was about to leave. As he ran along the platform he saw a girl just ahead of him. She was young -- about his age. He followed her into a carriage and sat down opposite her. She took out a magazine and was reading it. He took out a book and pretended to do the same. After a minute he looked up and smiled at her. She didn't smile back but gave him an encouraging look. Both returned to their reading but this time she was pretending too.\n\nHe found her attractive and wanted to see her again. But how to arrange it? He had an idea. He took an old envelope out of his pocket and wrote the following words: 'Hallo! My number is 123-4567 and my name is Jim. I would very much like to see you again. Ring me at nine.'\n\nThe train arrived at the terminal. Without looking at the girl, he handed her the envelope, or rather threw it at her, and jumped off the train.\n\nWhen he got home he made himself a cup of coffee and wondered... perhaps she was one of those naturally friendly people who smile at everybody. He was listening to the radio when the telephone rang... it was only Umaru. Nine o'clock, then 9:30 and no telephone call from the girl. Feeling miserable he went to bed early.\n\nIt was a foggy morning. 'Hallo, is that Jim? This is Joan. You...' It was two minutes past nine.";

const PASSAGE_2 = "A British electronics manufacturer has built a factory in which quartz crystals can be grown in 3 weeks. The natural growth of quartz takes 3 million years, and very often the crystals are not sufficiently pure to satisfy the precise needs of science. However, the manufactured crystal are exceptionally pure, and this is important because quartz, in transistor, is used in an astonishing number of devices where constant accuracy is required: radio and television transmitters and receivers, space satellites and computers are familiar examples. In order to make artificial quartz, very small pieces of the natural crystal imported from Brazil are placed in long, narrow, steel cylinders. A high pressure and a high temperature are maintained within the cylinders for 3 weeks, and at the end of this time the small fragments have grown to the required weight of one pound. The quartz is then ready to be made into the tiny transistors that have replaced the much larger thermionic valves.";

const PASSAGE_3 = "Every artist's work, unless he be a hermit, creating solely for his own satisfaction and with no need of sales, is to some extent 'socially conditioned'; he depends upon the approval of his patrons. Social conditioning is of course part of the field of study of the social anthropologist, yet I am not aware that the social conditioning of artists has ever been seriously studied. That such study is needed for the proper appraisal of traditional African art is evident enough when we note the ingenuous assumption, current in many writings on the subject, that the carver's hand is so closely controlled by the custom of centuries that the credit for any creative imagination which is apparent in his work is due not to him but to the long succession of his predecessors.\n\nOf course, there is an element of trust in this view of the tribal artist as copyist, but it is hardly more valid for the African than for the European artist. In both cases the work of art is the outcome of a dialectic between the informing tradition and the individual genius of the artist, and in both the relative strength of these two forces may vary almost infinitely. To assess the personal ingredient in an African carving is no easy matter, especially if one is confronted with a rare or unique piece in an unfamiliar style; but the considerations involved are much the same as those employed in European art criticism.";

const PASSAGE_4 = "One day, Alan, a friend of mine, who likes country life, was fishing in a river, when he caught a trout. He tried to pull the fish in but it slipped off the hook, flew over his head and landed in a field behind him.\n\nAlan put down his rod, went through the gate and started searching for his trout. Some people, obviously from the city, were having a picnic in the field. One of the men shouted 'What on earth are you doing?' Thinking that it was a stupid question because they could see how he was dressed, Alan replied 'Fishing'.\n\n'Don't be silly, the fish are down in the river', answered the man. 'Fish don't live in fields!' He turned to his friends, laughing, thinking that he had made a good joke.\n\n'Oh, but they do', said Alan. 'They jump out of the river to look for flies and I catch them with my hands.' At that moment he found his trout in the grass and picked it up and showed it to the picnickers. He put it in his basket and bent down, as if he was hunting for another one. The picnickers, no longer laughing, spent the rest of the day searching the field.";

const PASSAGE_5 = "In 1973 a Japanese sericulturist arrived in Malawi with a batch of 40,000 silkworm eggs. They were taken to the Bvumbwe Agricultural Research Station in Thyolo District. In this station, work is being done to determine favourable silkworm rearing conditions and areas where mulberry trees, whose leaves the worms feed on, could grow well. According to researchers, the silkworms -- which eventually develop into cocoons from which raw silk is produced -- do well in areas with warm climatic conditions.\n\nSilk is one of the strongest of fibres. In fact, for thousands of years, silk fabrics have been regarded as the most beautiful and durable materials woven by man. Many people call silk the 'cloth of kings and queens'.\n\nThe weaving of silk originated in China. An old Chinese book, believed to be written by Confucius, tells us that the wife of Emperor Huang-ti was the first person to make fabrics of silk. Around 2640 B.C., Emperor Huang-ti asked his wife Hsi Ling-shih to study the worms that were destroying the mulberry trees in his garden. The Empress took some of the cocoons into the palace to see what they were made of. She dropped one of the cocoons into a bowl of boiling water and was amazed to see a cobweb-like tangle separate itself from the cocoon. She picked up the gauzy mass and found that one of the threads could be unwound almost without end from the cocoon. Hsi Ling-shih had discovered silk. She was delighted with the discovery and even wove a ceremonial robe for the Emperor out of the cocoon threads. After that, the officials in the Emperor's court wore brightly dyed silk robes on important occasions.\n\nPeople in other countries regarded the new fibres as something rare and beautiful. A few traders went to China to learn about making cloth from silk, but the Chinese kept their silk worms a closely guarded secret.";

const englishjamb1984 = [

  // =====================
  // COMPREHENSION — PASSAGE I (Jim and Joan)
  // =====================
  {
    subject: "English", topic: "Comprehension", year: 1984, exam: "JAMB", passage: PASSAGE_1,
    question: "On the train Jim was",
    options: ["reading a book", "staring at the girl", "pretending to read", "looking through a magazine", "reading a newspaper."],
    answer: "pretending to read",
    explanation: "'He took out a book and pretended to do the same' — mirroring the girl reading her magazine."
  },
  {
    subject: "English", topic: "Comprehension", year: 1984, exam: "JAMB", passage: PASSAGE_1,
    question: "He wanted to see the girl again because",
    options: ["it was summer", "she was attractive", "he wanted to read her magazine", "she smiled at him", "they had agreed to meet."],
    answer: "she was attractive",
    explanation: "'He found her attractive and wanted to see her again.'"
  },
  {
    subject: "English", topic: "Comprehension", year: 1984, exam: "JAMB", passage: PASSAGE_1,
    question: "He hoped to arrange a date with her by",
    options: ["writing a letter to her", "ringing her up", "waiting at the station", "handing in a short note in a hurry", "sending a telegram."],
    answer: "handing in a short note in a hurry",
    explanation: "He wrote a hurried note on an old envelope and 'handed it to her, or rather threw it at her, and jumped off the train.'"
  },
  {
    subject: "English", topic: "Comprehension", year: 1984, exam: "JAMB", passage: PASSAGE_1,
    question: "That evening he had a telephone call from",
    options: ["his colleague, Umaru", "the girl he met on the train", "the railway authorities", "nobody at all", "Joan."],
    answer: "his colleague, Umaru",
    explanation: "'The telephone rang... it was only Umaru' — the girl's call (Joan) came the next foggy morning, not that evening."
  },
  {
    subject: "English", topic: "Comprehension", year: 1984, exam: "JAMB", passage: PASSAGE_1,
    question: "The source of misunderstanding was",
    options: ["his natural shyness", "the station clock being out of order", "the time given by Jim -- 9 o'clock p.m.?", "the foggy morning", "Jim's faulty wrist watch."],
    answer: "the time given by Jim -- 9 o'clock p.m.?",
    explanation: "Jim wrote 'ring me at nine' without specifying a.m./p.m.; he waited that evening (p.m.), but Joan called the next morning at two minutes past nine."
  },

  // =====================
  // COMPREHENSION — PASSAGE II (Manufactured quartz)
  // =====================
  {
    subject: "English", topic: "Comprehension", year: 1984, exam: "JAMB", passage: PASSAGE_2,
    question: "The manufactured crystals have to be pure",
    options: ["because natural quartz is pure", "to maintain hygiene in factory work", "to satisfy the precise needs of importers.", "to satisfy the exact requirements of science.", "otherwise they would take 3 million years to grow."],
    answer: "to satisfy the exact requirements of science.",
    explanation: "'Very often the [natural] crystals are not sufficiently pure to satisfy the precise needs of science' — hence manufactured ones must be exceptionally pure."
  },
  {
    subject: "English", topic: "Comprehension", year: 1984, exam: "JAMB", passage: PASSAGE_2,
    question: "According to the passage, quartz is used",
    options: ["only in a few devices", "in a lot of devices", "in wrist watches", "for jewellery", "for steel cylinders."],
    answer: "in a lot of devices",
    explanation: "The passage lists 'an astonishing number of devices': radios, TVs, space satellites, computers, etc."
  },
  {
    subject: "English", topic: "Comprehension", year: 1984, exam: "JAMB", passage: PASSAGE_2,
    question: "Artificial quartz as compared with natural is",
    options: ["superior.", "inferior", "just the same", "varied", "limited in use."],
    answer: "superior.",
    explanation: "'The manufactured crystal are exceptionally pure' whereas natural crystals 'are not sufficiently pure' for science."
  },
  {
    subject: "English", topic: "Comprehension", year: 1984, exam: "JAMB", passage: PASSAGE_2,
    question: "Transistors have",
    options: ["helped to produce quartz", "made radio and television inaccessible to the working populace", "made transmitters and receivers smaller and lighter.", "retarded progress in electronics.", "made transmitters and receivers bigger and heavier."],
    answer: "made transmitters and receivers smaller and lighter.",
    explanation: "Tiny transistors 'have replaced the much larger thermionic valves,' implying smaller, lighter devices."
  },
  {
    subject: "English", topic: "Comprehension", year: 1984, exam: "JAMB", passage: PASSAGE_2,
    question: "Artificial quartz is produced",
    options: ["in Brazil", "from tiny transistors", "in an astonishing number of devices", "with the help of thermionic valves", "from natural crystals within steel cylinders."],
    answer: "from natural crystals within steel cylinders.",
    explanation: "Small natural crystal pieces (imported from Brazil) are placed in steel cylinders under heat and pressure to grow artificial quartz."
  },

  // =====================
  // COMPREHENSION — PASSAGE III (Artist and society)
  // =====================
  {
    subject: "English", topic: "Comprehension", year: 1984, exam: "JAMB", passage: PASSAGE_3,
    question: "Most artists are strongly influenced by the",
    options: ["desire for self-expression.", "need to sell their works", "tastes and wishes of the society", "creative imagination", "opinions of critics."],
    answer: "tastes and wishes of the society",
    explanation: "The artist is 'socially conditioned' and 'depends upon the approval of his patrons.'"
  },
  {
    subject: "English", topic: "Comprehension", year: 1984, exam: "JAMB", passage: PASSAGE_3,
    question: "A social anthropologist is someone who",
    options: ["studies only social conditioning", "is interested in art and artists", "studies social conditions and other things", "is interested in the community", "studies the origins of man."],
    answer: "studies social conditions and other things",
    explanation: "Social conditioning is described as only 'part of the field of study of the social anthropologist' — implying broader interests."
  },
  {
    subject: "English", topic: "Comprehension", year: 1984, exam: "JAMB", passage: PASSAGE_3,
    question: "It would be useful to study the social conditioning of artist because",
    options: ["we know that African art is entirely influenced by tradition.", "traditional art arises from the customs of the people", "an artist's predecessors solely determine the nature of his work", "we do not know the extent to which an artist is influenced by his society", "we do not know very much about how an artist's creative imagination works."],
    answer: "we do not know the extent to which an artist is influenced by his society",
    explanation: "The passage notes this study has never been seriously studied, and stresses assessing 'the personal ingredient' is 'no easy matter.'"
  },
  {
    subject: "English", topic: "Comprehension", year: 1984, exam: "JAMB", passage: PASSAGE_3,
    question: "'The work of art is the outcome of a dialectic between the informing tradition and the individual genius of the artist' means that",
    options: ["the artist is influenced both by the society and by his own creative imagination", "there is an irreconcilable conflict between an artist's creativity and the demands that society makes on him.", "the artist subordinates his individual talent to the demands of the society", "few works of art are entirely original", "the individual artist needs to be informed about the traditions of the society."],
    answer: "the artist is influenced both by the society and by his own creative imagination",
    explanation: "'Dialectic between tradition and individual genius' describes a balance of two influences, not a conflict or subordination."
  },
  {
    subject: "English", topic: "Comprehension", year: 1984, exam: "JAMB", passage: PASSAGE_3,
    question: "Which of the following represents the writer's view about African art in relation to European Art?",
    options: ["The African artist is influenced by his society, but the European artist is not", "In both African and European art there is a blend of tradition and individual creativity", "African art is tribal, but European art is not", "Although traditional influences can be seen in European art, they are much less strong than they are in African art", "African artists are more imitative than European artists."],
    answer: "In both African and European art there is a blend of tradition and individual creativity",
    explanation: "'In both cases the work of art is the outcome of a dialectic between the informing tradition and the individual genius of the artist.'"
  },

  // =====================
  // COMPREHENSION — PASSAGE IV (Alan's fishing trick)
  // =====================
  {
    subject: "English", topic: "Comprehension", year: 1984, exam: "JAMB", passage: PASSAGE_4,
    question: "Why did the fish land in the field?",
    options: ["it had wings", "it was a flying fish", "it was looking for food", "Alan pulled too hard.", "it fell off the hook."],
    answer: "Alan pulled too hard.",
    explanation: "'He tried to pull the fish in but it slipped off the hook, flew over his head and landed in a field' — the force of his pull sent it flying."
  },
  {
    subject: "English", topic: "Comprehension", year: 1984, exam: "JAMB", passage: PASSAGE_4,
    question: "The picnickers were",
    options: ["farmers", "from the nearby village", "tourists", "people from the city", "anglers like him."],
    answer: "people from the city",
    explanation: "'Some people, obviously from the city, were having a picnic in the field.'"
  },
  {
    subject: "English", topic: "Comprehension", year: 1984, exam: "JAMB", passage: PASSAGE_4,
    question: "Where was Alan looking for his fish? He was looking for the fish",
    options: ["in the grass,", "down in the river", "in front of the gate", "in his basket", "among the picnickers."],
    answer: "in the grass,",
    explanation: "'He found his trout in the grass and picked it up.'"
  },
  {
    subject: "English", topic: "Comprehension", year: 1984, exam: "JAMB", passage: PASSAGE_4,
    question: "Alan made the picnickers believe that fish jump out of the river to look for flies by",
    options: ["telling a story.", "finding his trout and showing it to them", "taking them down to the river", "watching how trout catch flies", "picking up a fish and looking for more."],
    answer: "finding his trout and showing it to them",
    explanation: "He found the trout in the grass and 'showed it to the picnickers,' convincing them of his claim."
  },
  {
    subject: "English", topic: "Comprehension", year: 1984, exam: "JAMB", passage: PASSAGE_4,
    question: "'He laughs best who laughs last' (proverb). It is true of this story because",
    options: ["the picnickers were enjoying themselves", "finally he found his fish", "Alan played a good trick on the picnickers", "fishing is a pastime", "Alan likes country life."],
    answer: "Alan played a good trick on the picnickers",
    explanation: "The picnickers laughed at Alan first, but he ultimately fooled them into searching the field pointlessly — he 'laughed last.'"
  },

  // =====================
  // COMPREHENSION — PASSAGE V (Silk and sericulture)
  // =====================
  {
    subject: "English", topic: "Comprehension", year: 1984, exam: "JAMB", passage: PASSAGE_5,
    question: "Sericulture is",
    options: ["carried out only in China", "the breeding of silkworms for the production for silk", "the research done on silkworms", "the making of cloth from the cocoons of silkworms", "the breeding of silkworms in Malawi."],
    answer: "the breeding of silkworms for the production for silk",
    explanation: "Sericulture broadly refers to silkworm rearing for silk production, as practiced in the Malawi research station and originally in China."
  },
  {
    subject: "English", topic: "Comprehension", year: 1984, exam: "JAMB", passage: PASSAGE_5,
    question: "It is implied in this passage that silk was discovered",
    options: ["after years of hard work and research by the Empress", "by accident", "in the search for a more durable fibre for making cloth.", "after some experiments carried out by the Japanese sericulturist", "by design."],
    answer: "by accident",
    explanation: "The Empress was studying worms destroying trees and accidentally dropped a cocoon into boiling water, discovering the silk thread."
  },
  {
    subject: "English", topic: "Comprehension", year: 1984, exam: "JAMB", passage: PASSAGE_5,
    question: "According to sericulturists, silkworms",
    options: ["cannot survive in a warm climate", "may be reared on any tree", "do well in areas with a warm climate", "produce the longest threads when they are fed leaves from the top of the mulberry tree", "are destroyed by heat."],
    answer: "do well in areas with a warm climate",
    explanation: "'The silkworms... do well in areas with warm climatic conditions.'"
  },
  {
    subject: "English", topic: "Comprehension", year: 1984, exam: "JAMB", passage: PASSAGE_5,
    question: "The work carried out at the Agricultural Research Station in Malawi on the silkworm eggs was to",
    options: ["try to breed cocoons which would produce more silk", "determine the survival rate of silkworms", "find out the most suitable areas and conditions for rearing silkworms", "search for better method of rearing silk worms", "find out how cocoons become silkworms."],
    answer: "find out the most suitable areas and conditions for rearing silkworms",
    explanation: "'Work is being done to determine favourable silkworm rearing conditions and areas where mulberry trees... could grow well.'"
  },
  {
    subject: "English", topic: "Comprehension", year: 1984, exam: "JAMB", passage: PASSAGE_5,
    question: "Choose the meaning which best fits the underlined phrase: Closely guarded secret",
    options: ["Carefully hidden from the knowledge of others", "Secretly processed business with armed guards", "Carefully hidden from the view of strangers", "Scarcely known", "Unknown."],
    answer: "Carefully hidden from the knowledge of others",
    explanation: "'The Chinese kept their silk worms a closely guarded secret' — deliberately withheld from outsiders' knowledge."
  },

  // =====================
  // LEXIS & STRUCTURE — NEAREST IN MEANING (Q26–38)
  // =====================
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "The meeting was cancelled because of the convocation.",
    options: ["brought up", "called off", "broken off", "dropped out", "phased out."],
    answer: "called off", explanation: "'Cancelled' is nearest in meaning to 'called off.'" },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "Our town is so small that we are always meeting our schoolmates accidentally.",
    options: ["coming across", "falling into", "knocking up", "running up", "running into."],
    answer: "running into", explanation: "'Running into someone' means meeting them unexpectedly/accidentally." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "Can you give a good explanation for your behaviour?",
    options: ["account for", "call for", "clear up", "make up", "give up."],
    answer: "account for", explanation: "'Account for' means to explain." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "Be careful! We are approaching the crossroads.",
    options: ["look up", "watch out", "look up", "hold up", "look in."],
    answer: "watch out", explanation: "'Watch out' means to be careful/alert." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "Thousands of students are candidates for the examination but only very few pass.",
    options: ["come into", "call for", "go into", "enter for", "turn up for."],
    answer: "enter for", explanation: "'Enter for an examination' is the standard collocation for being a candidate." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "He went through fire before he qualified as a doctor.",
    options: ["had a fire accident", "made a lot of fire", "suffered a lot", "underwent some purification", "required a lot of fire."],
    answer: "suffered a lot", explanation: "'Go through fire' idiomatically means to endure great hardship." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "Osyaku started playing football because he thought it would develop him physically.",
    options: ["took up football", "picked up football", "returned to football", "took up with football", "put in for football."],
    answer: "took up football", explanation: "'Take up' a sport/activity means to begin doing it." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "Once I have finished all my homework I am permitted to watch television.",
    options: ["I can watch television at anytime.", "I can only watch television after doing my homework.", "Television comes first, then homework second.", "I can only finish my homework after permission to watch television", "after watching television I finished my homework."],
    answer: "I can only watch television after doing my homework.", explanation: "'Once' here signals condition/sequence — TV comes only after homework is finished." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "For all he cared, the game was as good as lost.",
    options: ["He did not care if the game was lost", "He could not care less if the game was lost.", "He was almost certain that the game would be lost.", "He was afraid the game would be lost.", "The game was very good, and he cared very much about losing it."],
    answer: "He could not care less if the game was lost.", explanation: "'For all he cared' expresses total indifference." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "A basic objective in this respect is the attainment of self sufficiency in food in about a decade.",
    options: ["Food will soon be sufficient for every body", "Mass production of food", "We should aim at producing food for sale and consumption in ten years.", "We should be able to feed ourselves in five years.", "Our aim is to provide enough food for our needs in ten years."],
    answer: "Our aim is to provide enough food for our needs in ten years.", explanation: "'Self sufficiency in food in about a decade' means being able to meet our own food needs within roughly ten years." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "In their desire to impress their friends and relatives, many young workers bite off more than they can chew in terms of financial obligations.",
    options: ["have more money than sense", "eat more than they can digest properly", "spend too much money on food", "care too much for their relatives", "take on more responsibility than they can afford."],
    answer: "take on more responsibility than they can afford.", explanation: "'Bite off more than one can chew' means undertaking more than one can manage." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "All the efforts made to settle the quarrel were futile.",
    options: ["successful", "wicked", "reasonable", "remarkable", "fruitless."],
    answer: "fruitless.", explanation: "'Futile' means useless/unsuccessful — 'fruitless' is the closest synonym." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "The new inspector decided that the culprits should be brought to book.",
    options: ["should have their names recorded in a book", "should be brought before him to show whether they could read or not", "should be booked", "should be jailed", "should be made to answer for their conduct."],
    answer: "should be made to answer for their conduct.", explanation: "'Bring to book' means to hold someone accountable/punish them for wrongdoing." },

  // =====================
  // LEXIS & STRUCTURE — OPPOSITE IN MEANING (Q39–40)
  // =====================
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "The long straight trunk of the tree is ideal for round wood uses like railway sleepers, rafters and fence posts. (Opposite of underlined word: ideal)",
    options: ["best", "perfect", "most unsuitable", "satisfactory", "poor."],
    answer: "most unsuitable", explanation: "The opposite of 'ideal' (perfectly suited) is 'most unsuitable.'" },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "A book on style without abundant examples seems to me as ineffectual as a book on biology without abundant illustrations. (Meaning of underlined word: ineffectual)",
    options: ["useless", "difficult", "interesting", "satisfactory", "attractive."],
    answer: "useless", explanation: "'Ineffectual' means not producing the desired effect — closest in meaning to 'useless.'" },

  // =====================
  // LEXIS & STRUCTURE — REPORTED SPEECH (Q41–42)
  // =====================
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "My uncle told me, 'I have a large house and you are welcome to the protection it offers'. My uncle told me that…",
    options: ["he had a large house, and you are welcome to the protection it offers", "he have a large house, and I was welcome to the protection it offered.", "He had a large house and he was welcomed to the protection it offers", "he had a large house, and I was welcome to the protection it offered.", "he has a large house, and I am welcome to the protection it offers."],
    answer: "he had a large house, and I was welcome to the protection it offered.",
    explanation: "Reported speech shifts tense (have→had, offers→offered) and pronouns ('you'→'I')." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "The manager said that unless the employees worked harder the factory would have to be closed. The manager said that…",
    options: ["the employees were not working hard, and so the factory would be closed", "the employees should not close early so that they could produce more.", "the factory was not productive because the employees were lazy", "the factory would be shut if the employees did not increase their output", "the factory was closed because the employees did not work hard enough."],
    answer: "the factory would be shut if the employees did not increase their output",
    explanation: "This best paraphrases the original conditional: 'unless (employees worked harder) the factory would have to be closed.'" },

  // =====================
  // LEXIS & STRUCTURE — PREPOSITIONS/WORD CHOICE (Q43–60)
  // =====================
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "The student who went home without an exeat has apologized… his misconduct",
    options: ["on", "at", "to", "for", "about."], answer: "for", explanation: "'Apologize for' a wrongdoing is the correct preposition." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "The man has atoned... his sins.",
    options: ["upon", "on", "for", "at", "against."], answer: "for", explanation: "'Atone for' one's sins is the correct collocation." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "The Headmaster was interviewed in connection.. the expansion project.",
    options: ["to", "with", "for", "about", "at."], answer: "with", explanation: "'In connection with' is the fixed phrase." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "What do you want me to do now? I'm…. withdrawing and keeping quiet.",
    options: ["for", "with", "up", "off", "on."], answer: "for", explanation: "'Be for (doing something)' expresses being in favour of that option." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "I am looking …. seeing your family.",
    options: ["ahead at", "forward to", "forward on", "for to", "ahead to."], answer: "forward to", explanation: "'Looking forward to' is the fixed phrase, followed by a gerund." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "These folktales have been handed… from generation to generation.",
    options: ["into", "over", "down", "up", "across."], answer: "down", explanation: "'Handed down' means passed on through generations." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "John arrived at the airport on time but he could not get… the plane.",
    options: ["into", "over", "in", "to enter", "to."], answer: "into", explanation: "'Get into' the plane refers to boarding it." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "The young lovers first met… the University of Ibadan Havana Night dance.",
    options: ["in", "at", "in course of", "on", "inside."], answer: "at", explanation: "'At' is used for meeting someone at an event." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "I have not seen my housemaster… the beginning of this session.",
    options: ["from", "in", "for", "at", "since."], answer: "since", explanation: "'Since' is used with a present perfect referring to a starting point in time." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "The Chairman of the State School Board has advised students to desist… blackmailing college authorities.",
    options: ["from", "in", "on", "against", "by."], answer: "from", explanation: "'Desist from' is the correct collocation." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "The most stupid boy in the class passed the examination contrary.. the expectation of many people.",
    options: ["upon", "from", "on", "to", "with."], answer: "to", explanation: "'Contrary to' is the correct expression." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "The Principal remarked that it was the high standard of discipline that was instrumental…. the high percentage of passes in the school.",
    options: ["upon", "to", "with", "on", "in."], answer: "in", explanation: "'Instrumental in' is the correct collocation, meaning playing a key part in bringing something about." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "She wounded the man… the back with her knitting needle.",
    options: ["on", "in", "at", "by", "upon."], answer: "in", explanation: "'Wounded in the back' is the correct preposition when describing an injury to a body part." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "It took the father many days to get… the untimely death of his son",
    options: ["off", "over", "by", "through", "across"], answer: "over", explanation: "'Get over' a loss means to recover emotionally from it." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "While the worshippers closed their eyes in prayer, a thief made… with the collection.",
    options: ["out", "away", "up", "by", "through"], answer: "away", explanation: "'Make away with' means to steal and escape with something." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "There is no doubt that every lady takes great pride… her appearance.",
    options: ["with", "in", "at", "on", "about."], answer: "in", explanation: "'Take pride in' is the correct fixed phrase." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "If you keep playing with this door handle, it will get…",
    options: ["loose", "lose", "lost", "loosing", "loosed."], answer: "loose", explanation: "'Loose' (adjective, meaning not firmly fixed) is correct; 'lose' is a verb meaning to misplace, which doesn't fit grammatically here." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "'Have you given the patient his medicine?' The doctor asked the nurse.",
    options: ["if you have given the patient his medicine.", "had you given the patient his medicines?", "have you given the patient his medicine?", "if she had given the patient his medicine.", "if the patient is given his medicine."],
    answer: "if she had given the patient his medicine.",
    explanation: "Reported yes/no questions use 'if/whether' with statement word order and backshifted tense, and the pronoun changes from 'you' to 'she'." },

  // =====================
  // LEXIS & STRUCTURE — GENERAL GRAMMAR (Q61–100)
  // =====================
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "I was seriously disappointed when the… between the two teams ended in a goaless draw.",
    options: ["march", "marsh", "match", "mash", "martch."], answer: "match", explanation: "'Match' is the correctly spelled word for a sporting contest between two teams." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "Children's clothes have to be strong to stand … rough use.",
    options: ["with", "in through", "in for", "up to", "up for."], answer: "up to", explanation: "'Stand up to' means to withstand or endure something, fitting rough use of clothing." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "Shall I make the cheque… you or to your firm?",
    options: ["in for", "up with", "in with", "up for", "out to"], answer: "out to", explanation: "'Make a cheque out to someone' is the standard banking expression." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "The hotel... is at Wurno Road.",
    options: ["which I am staying.", "in where I am staying", "that I am staying", "at which I am staying", "I stay."], answer: "at which I am staying", explanation: "'Stay at a hotel' requires the preposition 'at' to be carried into the relative clause: 'the hotel at which I am staying'." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "…the main points of the lecture given by the Director of the Institute.",
    options: ["Those were", "That was", "There were", "This was", "That is."], answer: "Those were", explanation: "'The main points' is plural, so the demonstrative pronoun and verb must agree in the plural: 'Those were'." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "I am sure that my mother will not find out. She is so… that she will accept anything I tell her.",
    options: ["credible", "credulous", "creditable", "incredible", "incredulous."], answer: "credulous", explanation: "'Credulous' means too ready to believe things — fitting someone who will accept anything told to her." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "The boys are very naughty. They have started fighting again, ...",
    options: ["haven't they?", "isn't it?", "not so?", "have they?", "is it?"], answer: "haven't they?", explanation: "The positive statement 'have started' requires a negative tag matching subject 'they': 'haven't they?'" },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "If only I ... insured! But I wasn't. Now, I have to pay a lot of money.",
    options: ["am", "have been", "had been", "would be", "wastobe."], answer: "had been", explanation: "'If only + past perfect' expresses regret about something not done in the past." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "Do you mind if I wait for the reply? I'd rather you… again tomorrow.",
    options: ["called", "will call", "can call", "call", "were calling."], answer: "called", explanation: "'I'd rather you + past tense' is used to express a preference about another person's action." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "Olu: How do you want the money in cash or in traveller's cheques? Ali: Beg your pardon? Olu: I was asking you how ... the money?",
    options: ["do you want", "you want", "you wanted", "you are wanting", "did you want."], answer: "you wanted", explanation: "Reported questions use statement word order and backshift the tense to match the reporting verb 'was asking'." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "The young man looked carefully at the long document, but he couldn't make ... what it meant.",
    options: ["up", "out", "off", "through", "do."], answer: "out", explanation: "'Make out' means to understand or decipher something." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "The students haven't come back from the library, …",
    options: ["isn't it?", "have they?", "is it?", "had they?", "haven't they?"], answer: "have they?", explanation: "The negative statement 'haven't come' requires a positive tag: 'have they?'" },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "Give me a minute to think. I can't remember the answer…",
    options: ["out of hand", "ahead", "offhand", "to hand", "off head"], answer: "offhand", explanation: "'Offhand' means without prior thought or preparation, i.e., 'from memory right now'." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "The government suffered a ..... when they lost two by-elections.",
    options: ["check", "set-back", "hindrance", "disturbance", "recession."], answer: "set-back", explanation: "'Set-back' means a reversal or check in progress, fitting the loss of elections." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "Our Literature Master said that he would show us a film on Macbeth. The film will …",
    options: ["worth seeing", "worth seeing it", "be worth to see", "be worth seeing", "be worthy seeing."], answer: "be worth seeing", explanation: "'Be worth + gerund' is the correct grammatical structure." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "The driver of that lorry… lost his life during the collision.",
    options: ["barely", "hardly", "nearly", "closely", "narrowly."], answer: "nearly", explanation: "'Nearly lost his life' means he almost died but survived — the intended meaning here." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "The principal went to buy some… for the physics laboratory.",
    options: ["equipment", "pieces of equipments", "equipments", "items of equipments", "list of equipment."], answer: "equipment", explanation: "'Equipment' is uncountable and never takes a plural 's'." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "Wherever the leader went people struggled to catch a… of him.",
    options: ["look", "view", "glimpse", "portrait", "picture."], answer: "glimpse", explanation: "'Catch a glimpse' means to get a brief look at something/someone." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "The…. in an attempt to please the workers promised to provide .... for them as soon as possible.",
    options: ["committee/accommodation", "committee/acommodation", "committee/accomodation", "committee/acommoddation", "committee/accomondation."],
    answer: "committee/accommodation", explanation: "'Committee' and 'accommodation' are the correctly spelled words; all other options misspell 'accommodation'." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "I meant… a pencil but there was no one…. them.",
    options: ["buying/selling", "to buy/to sell", "buying/to sell", "buy/to sell", "to buy/selling."], answer: "to buy/to sell", explanation: "'Meant to buy' (infinitive after 'meant') and 'no one to sell them' (infinitive of purpose) are both correct." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "Mrs. Okoro ..... n this school since 1975.",
    options: ["taught", "is teaching", "was teaching", "teaches", "has been teaching"], answer: "has been teaching", explanation: "'Since 1975' with an action continuing to the present requires the present perfect continuous: 'has been teaching'." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "The Governor has.... to the people on many occasions.",
    options: ["broadcast", "been broadcast", "broadcasted", "being broadcast", "been broadcasted."], answer: "broadcast", explanation: "'Broadcast' is an irregular verb whose past participle is the same as its base form: 'has broadcast'." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "Paulina arrived late, she… the right route.",
    options: ["cannot have taken", "could not have taking", "cannot take.", "could not had taken", "could not have taken."], answer: "could not have taken", explanation: "'Could not have + past participle' expresses a deduction about a past action — she must not have taken the right route." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "…the medicine, he asked his daughter to take it according to the doctor's prescription.",
    options: ["Having to buy", "Having bought", "Having been bought", "Having being bought", "Having buy."], answer: "Having bought", explanation: "'Having bought' (perfect participle, active) correctly shows the subject 'he' completed the action of buying before asking his daughter." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "It was a funny episode, so I ...",
    options: ["can't help to laugh.", "couldn't help laugh", "couldn't help laughing", "couldn't help to laugh", "can't help laughing."], answer: "couldn't help laughing", explanation: "'Couldn't help + gerund' is the correct structure, and past tense matches the past narrative ('was a funny episode')." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "By the end of this year I… twenty books",
    options: ["read", "would have read", "will read", "have read", "am reading."], answer: "would have read", explanation: "This expresses an action completed by a future point in time, matching the future/conditional perfect structure among the given options." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "Leonard: We went to a hotel and had a very good dinner for N1.00. Geoffrey: You… a very good dinner if you only paid N1.00.",
    options: ["must have had", "needn't have had", "couldn't have had", "had to have", "have had."], answer: "couldn't have had", explanation: "'Couldn't have had' expresses disbelief/deduction that something was impossible given the low price paid." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "Evelyn: I've submitted eight copies. Joseph: You…eight. Three would have been enough.",
    options: ["can't have submitted", "couldn't have submited", "didn't need to submitted", "needn't have submitted", "must have submitted."], answer: "needn't have submitted", explanation: "'Needn't have + past participle' expresses that an action was done but was unnecessary." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "The present wanton display of riches… morals in our society.",
    options: ["will be affecting", "are affecting", "is affecting", "was affecting", "had been affecting."], answer: "is affecting", explanation: "The subject 'display' is singular, so it takes the singular verb form: 'is affecting'." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "The market women… profit ranges from thirty to fifty percent are making… difficult for the ordinary people",
    options: ["for who/to live", "for whom/lives", "by whose/living", "whose/life", "whose/leaving."], answer: "whose/life", explanation: "'Whose' correctly shows possession (the women's profit), and 'making life difficult' is the correct idiom." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "Town authorities have put up a railing in front of the exits… people… out of the stadium and ... straight across the road.",
    options: ["prevent/rush/dashing", "preventing/rushing/to dash", "to prevent/rushing/dashing", "to prevent/rush/dash", "to prevent/to rush/dash."], answer: "to prevent/rushing/dashing", explanation: "'To prevent' (infinitive of purpose) followed by 'people rushing... and dashing' (participles describing the people's actions) is the grammatically correct combination." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "Someone… the radio cassette since 6p.m I wish he … turn it off.",
    options: ["has been playing/would", "is playing/would", "played/will", "has played/should", "plays/will."], answer: "has been playing/would", explanation: "'Since 6p.m.' with a continuing action requires present perfect continuous ('has been playing'), and 'wish + would' expresses annoyance at a habitual action." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "If the armed robbers… caught, they would have been lynched.",
    options: ["would be", "have been", "are", "were", "had been"], answer: "had been", explanation: "This is a third conditional (unreal past): 'If... had been caught, they would have been lynched.'" },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "Had he known that it would rain, he... his umbrella with him.",
    options: ["would have taking", "was going to take", "would be taking", "would have taken", "would take."], answer: "would have taken", explanation: "This is a third conditional structure: 'Had he known... he would have taken...' expresses an unreal past result." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "Omeime was taking his dog for a walk when the dog suddenly… from its chain and escaped",
    options: ["broke through", "broke lose", "broke even.", "broke loose", "broke away."], answer: "broke loose", explanation: "'Broke loose' means became free from restraint — the correct idiom for an animal escaping its chain." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "After we have taken our share, we shall give… to them.",
    options: ["their", "their's", "theirs", "there", "there's."], answer: "theirs", explanation: "'Theirs' is the correct possessive pronoun (no apostrophe) referring to 'their share'." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "I was still sleeping when the national news … this morning.",
    options: ["were broadcast", "were broadcasted", "was broadcast", "was broadcasted", "were being broadcasted."], answer: "was broadcast", explanation: "'The national news' is treated as singular, and 'broadcast' is the correct irregular past participle form." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "Each of the contestants… a chance to win.",
    options: ["has", "have", "get", "gets", "take"], answer: "has", explanation: "'Each' is a singular pronoun and requires a singular verb: 'has'." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "I gave the book to the library attendant… I think works in the evenings.",
    options: ["whom", "whose", "which", "who", "of whom."], answer: "who", explanation: "'Who' is the correct subject relative pronoun referring to a person ('the library attendant... works in the evenings')." },
  { subject: "English", topic: "Lexis and Structure", year: 1984, exam: "JAMB",
    question: "The politicians are responsible for the… events have taken in this country.",
    options: ["course", "curse", "coarse", "cause", "corse."], answer: "course", explanation: "'The course events have taken' means the direction or path events have followed — 'course' is the correctly spelled and contextually fitting word." }

]

export default englishjamb1984