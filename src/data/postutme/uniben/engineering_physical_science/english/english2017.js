// UNIBEN Post-UTME 2017/2018 — Use of English
// 40 questions
// Faculty: Engineering & Physical Sciences
// Analysis notes:
//   PASSAGE: Population control and birth/death rate — social science
//   NEW: Phonetics with IPA symbols (/ɑː/, /ʌ/, /eː/, /aʊ/), Rhyming words
//   GRAMMAR: Question tags, passive voice, comparatives/superlatives, possessives
//   VOCAB: taciturnity=reticence ★RECURRING concept, inexpressible=ineffable

const unibenEnglish2017 = [
  // COMPREHENSION (Q1-5)
  {
    subject: "English", topic: "Comprehension", year: 2017, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    passage: "All over the world still lately, and in most of the world still today, mankind has been following the course of nature, that is to say, it has been breeding up to the maximum and letting nature take her extravagant course in the reproduction of the human race. It may have made sense in an age in which people were also letting nature take her course in decimating mankind by the casualties of war, pestilence, and famine. Being human, we have at last revolted against this senseless waste. We have started to impose on nature's heartless play a humanized new order of our own. But once man has begun to interfere with nature, he cannot afford to stop halfway. We cannot with impunity cut down the death rate and at the same time allow birth rates to go on taking nature's course. We must consciously try to establish equilibrium or sooner or later famine will stalk abroad again.",
    question: "The author observes that:",
    options: [
      "War, pestilence, and famine are caused by the extravagant course of nature",
      "Nature was heartless and senseless",
      "There was a time when uncontrolled birth made sense",
      "It was wise in a time when mankind did not interfere with normal reproduction"
    ],
    answer: "There was a time when uncontrolled birth made sense",
    explanation: "The author states 'It may have made sense in an age in which people were also letting nature take her course in decimating mankind.' When death rates were naturally high, high birth rates balanced them — so uncontrolled birth 'made sense' at that time."
  },
  {
    subject: "English", topic: "Comprehension", year: 2017, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    passage: "We must consciously try to establish equilibrium or sooner or later famine will stalk abroad again.",
    question: "Which statement does NOT express the opinion of the author?",
    options: [
      "Mankind has started to interfere with the work of nature",
      "Mankind has died in the past through want and diseases",
      "Mankind should not have the maximum number of children possible",
      "Man's present relationship with nature in matters of birth and death is a happy one"
    ],
    answer: "Man's present relationship with nature in matters of birth and death is a happy one",
    explanation: "The author argues that man's interference with death rates (reducing them) without controlling birth rates creates an imbalance leading to famine. The relationship is NOT happy — it is precarious and demands conscious action."
  },
  {
    subject: "English", topic: "Comprehension", year: 2017, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    passage: "We have started to impose on nature's heartless play a humanized new order of our own.",
    question: "'Humane' as used in the passage means:",
    options: ["Sensible", "Wise", "Human", "Benevolent"],
    answer: "Benevolent",
    explanation: "Humane means showing compassion and benevolence. The 'humanized new order' refers to a compassionate, benevolent approach to managing nature — treating human life with care and kindness rather than letting nature's harshness prevail."
  },
  {
    subject: "English", topic: "Comprehension", year: 2017, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    passage: "We must consciously try to establish an equilibrium.",
    question: "'We must consciously try to establish an equilibrium' implies that mankind must:",
    options: [
      "Realistically find an equation",
      "Strive not to be wasteful",
      "Deliberately try to fight nature",
      "Purposely find a balance"
    ],
    answer: "Purposely find a balance",
    explanation: "'Consciously' = purposely/deliberately. 'Equilibrium' = balance. Together: mankind must purposely find a balance between birth rates and death rates to prevent future famine."
  },
  {
    subject: "English", topic: "Comprehension", year: 2017, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    passage: "We cannot with impunity cut down the death rate and at the same time allow birth rates to go on taking nature's course.",
    question: "The main idea of the passage is that:",
    options: [
      "Nature is heartless",
      "Man should control the birth rate",
      "Mankind will soon perish of starvation",
      "Man should change nature's course gradually"
    ],
    answer: "Man should control the birth rate",
    explanation: "The central argument is that since man has already interfered with the death rate (medicine, sanitation), he MUST also control the birth rate to maintain equilibrium. Failing to do so leads to famine."
  },
  // VOCABULARY (Q6-15)
  {
    subject: "English", topic: "Synonyms", year: 2017, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "No wonder Peter later became a detective. He had always been very **observant**.",
    options: ["Curious", "Perceptive", "Inductive", "Inquisitive"],
    answer: "Perceptive",
    explanation: "Observant means quick to notice details. Its synonym is perceptive — having a ready insight into things. A detective needs perceptive observation skills."
  },
  {
    subject: "English", topic: "Synonyms", year: 2017, exam: "Post-UTME", university: "UNIBEN",
    isHotTopic: true,
    faculty: ["engineering", "physicalsciences"],
    question: "The man's painting was so **realistic** that it could almost have been a photograph.",
    options: ["Pictorial", "Concrete", "Lively", "Authentic"],
    answer: "Authentic",
    explanation: "Realistic means resembling reality closely. 'Authentic' captures the genuine, true-to-life quality — so real it looked like an actual photograph. ★ RECURRING — similar question appeared in 2014/2015."
  },
  {
    subject: "English", topic: "Synonyms", year: 2017, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "**Courteously**, he stood back to let his teacher go first through the door.",
    options: ["Patiently", "Politely", "Carefully", "Calmly"],
    answer: "Politely",
    explanation: "Courteously means in a polite, respectful, and considerate manner. 'Politely' is the most direct synonym — showing good manners and respect."
  },
  {
    subject: "English", topic: "Synonyms", year: 2017, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Many people used to live in **poverty**.",
    options: ["Instability", "Want", "Difficulty", "The slums"],
    answer: "Want",
    explanation: "Poverty means the state of being extremely poor — living in want (lacking necessities). 'Want' as a noun means severe lack of basic needs. This is a formal/literary synonym for poverty."
  },
  {
    subject: "English", topic: "Synonyms", year: 2017, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The **fateful** decision changed the company's outlook in many ways.",
    options: ["Wonderful", "Disastrous", "Important", "External"],
    answer: "Disastrous",
    explanation: "Fateful means having far-reaching and typically disastrous consequences. A fateful decision leads to disaster or major negative consequences — 'disastrous' is the most accurate synonym in this context."
  },
  {
    subject: "English", topic: "Synonyms", year: 2017, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Yassin's victim received a **superficial** wound from the crash.",
    options: ["Serious", "Painless", "Internal", "External"],
    answer: "External",
    explanation: "Superficial means on the surface — not deep or serious. A superficial wound is on the surface of the skin (external) and does not penetrate deeply. 'External' is the physical synonym here."
  },
  {
    subject: "English", topic: "Synonyms", year: 2017, exam: "Post-UTME", university: "UNIBEN",
    isHotTopic: true,
    faculty: ["engineering", "physicalsciences"],
    question: "His **taciturnity** amused everyone in the court during the legal tussle.",
    options: ["Obliviousness", "Reticence", "Sensibility", "Anxiety"],
    answer: "Reticence",
    explanation: "Taciturnity means the quality of being reserved and saying little. Its synonym is reticence — unwillingness to speak freely. ★ RECURRING — taciturn/taciturnity has appeared across multiple years as a key vocabulary word."
  },
  {
    subject: "English", topic: "Idioms & Expressions", year: 2017, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "We **made a pile** in the business deal.",
    options: ["Made a lot of money", "Earned a lot of money", "Broke even", "Cut corners"],
    answer: "Made a lot of money",
    explanation: "'Make a pile' means to earn or accumulate a large sum of money. In a business context, making a pile means becoming very wealthy from the deal."
  },
  {
    subject: "English", topic: "Synonyms", year: 2017, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The greatness of the creator of the universe is always **inexpressible** to many adherents of certain faiths.",
    options: ["Inevitable", "Wonderful", "Ineffable", "Unbearable"],
    answer: "Ineffable",
    explanation: "Inexpressible means too great or extreme to be expressed in words. Its precise synonym is ineffable — too great for words, beyond description or expression. This is a high-level vocabulary word."
  },
  // GRAMMAR (Q16-31)
  {
    subject: "English", topic: "Lexis & Structure", year: 2017, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "He was convicted _____ stealing some bags of cocoa.",
    options: ["With", "In", "Of", "For"],
    answer: "Of",
    explanation: "'Convicted of' is the correct legal preposition. One is convicted OF a crime — 'convicted of stealing'. 'Convicted for' is a common error but 'of' is standard English."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2017, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "_____ normal circumstances, it is rare to get all registered voters to vote.",
    options: ["On", "By", "In", "Under"],
    answer: "Under",
    explanation: "'Under normal circumstances' is the correct fixed expression. 'Under' is used with conditions/circumstances: under pressure, under normal conditions, under the circumstances."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2017, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Samuel has tried to live _____ to his parents' expectations.",
    options: ["Over", "On", "True", "Up"],
    answer: "Up",
    explanation: "'Live up to expectations' means to meet or match the standard expected. 'Up to' = meeting/matching. 'Live true to' is not standard; 'live on' = to continue living; 'live over' = not standard."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2017, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "As at yesterday, only nomination papers _____ in respect of three candidates.",
    options: ["Have been filled", "Being filled", "Had been filled", "Has been filled"],
    answer: "Had been filled",
    explanation: "'As at yesterday' = up to yesterday (past reference point). Past perfect 'had been filled' = completed before the past reference point (yesterday). Present perfect 'have been filled' is wrong — we need past perspective."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2017, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "They embraced passionately as if they _____ seen each other for ten years.",
    options: ["Had", "Had not", "Have", "Have not"],
    answer: "Had not",
    explanation: "'As if they had not seen each other for ten years' — they embraced warmly because they hadn't seen each other for a long time. 'Had not' (past perfect negative) is correct for a hypothetical/real past condition."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2017, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "You are not sure where you placed the hook, ___?",
    options: ["Isn't it?", "Aren't you?", "Didn't you?", "Are you?"],
    answer: "Aren't you?",
    explanation: "Question tag for 'You are not sure...' — the main clause is negative ('not sure') and uses 'are', so the tag is positive 'aren't you?' Wait — the clause is already negative, so tag should be positive: 'are you?' UNIBEN answer is B (aren't you?). Students should verify."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2017, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "She doesn't know you like your food hot, ___?",
    options: ["Does she?", "Shouldn't she?", "Didn't she?", "Wasn't it?"],
    answer: "Does she?",
    explanation: "Question tag for 'She doesn't know...' — negative clause with 'doesn't', so tag is positive 'does she?' ★ Question tags: positive clause → negative tag; negative clause → positive tag."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2017, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "_____ of what he said made no sense.",
    options: ["Much", "Majority", "Plenty", "Many"],
    answer: "Much",
    explanation: "'Much' is used with uncountable nouns. 'What he said' is a mass/uncountable concept — speech/content. 'Much of what he said' is correct. 'Many' is for countable nouns; 'majority' needs 'the' and a specific countable group."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2017, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Many students find Mathematics _____ than English.",
    options: ["Difficult", "Too difficult", "Very difficult", "More difficult"],
    answer: "More difficult",
    explanation: "Comparative adjective with 'than' requires 'more difficult'. 'More difficult than' = comparative construction. 'Difficult than' is incorrect — 'than' requires the comparative form."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2017, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The _____ came here last week.",
    options: [
      "Handsome tall young man",
      "Young tall handsome man",
      "Tall handsome young man",
      "Young handsome tall man"
    ],
    answer: "Tall handsome young man",
    explanation: "Adjective order: Opinion → Size → Age → Shape → Colour → Origin → Material. 'Handsome' (opinion) → 'tall' (size) → 'young' (age). Correct: 'tall handsome young man'. Wait — opinion should come first: handsome (opinion), tall (size), young (age) → 'handsome tall young man'. UNIBEN answer C (tall handsome young man). Students should note this."
  },
  // PHONETICS (Q32-35)
  {
    subject: "English", topic: "Phonetics & Stress", year: 2017, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Choose the word that contains the sound /ɑː/",
    options: ["Card", "Fat", "Fact", "Sack"],
    answer: "Card",
    explanation: "The /ɑː/ sound is a long open back vowel — as in 'car', 'far', 'bar', 'card'. 'Fat', 'fact', 'sack' all contain the short /æ/ sound (as in 'cat'). 'Card' contains the long /ɑː/ sound."
  },
  {
    subject: "English", topic: "Phonetics & Stress", year: 2017, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Choose the word that contains the sound /ʌ/",
    options: ["Dough", "Wonder", "Wander", "Cough"],
    answer: "Wonder",
    explanation: "The /ʌ/ sound is a short central vowel — as in 'cup', 'run', 'sun', 'wonder'. 'Dough' has /əʊ/; 'wander' has /ɒ/ (British) or /ɑː/ (American); 'cough' has /ɒ/. 'Wonder' = /ˈwʌndə/."
  },
  {
    subject: "English", topic: "Phonetics & Stress", year: 2017, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Choose the word that contains the sound /aʊ/",
    options: ["Hot", "Bean", "Rooster", "Down"],
    answer: "Down",
    explanation: "The /aʊ/ sound is a diphthong — as in 'now', 'cow', 'down', 'out'. 'Down' = /daʊn/ ✓. 'Hot' = /hɒt/; 'bean' = /biːn/; 'rooster' = /ˈruːstə/."
  },
  // RHYMING WORDS (Q36-40)
  {
    subject: "English", topic: "Phonetics & Stress", year: 2017, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Choose the word that rhymes with 'Sweet'",
    options: ["Suit", "Sweet", "Suite", "Twice"],
    answer: "Suit",
    explanation: "'Sweet' is pronounced /swiːt/. 'Suit' is pronounced /suːt/ — hmm, not identical. 'Suite' is also /swiːt/ but identical to 'sweet' — not a rhyme, a homophone. UNIBEN answer A (suit). Students should verify the intended rhyme."
  },
  {
    subject: "English", topic: "Phonetics & Stress", year: 2017, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Choose the word that rhymes with 'Number'",
    options: ["Plumb", "Bomber", "Climb", "Camp"],
    answer: "Bomber",
    explanation: "'Number' = /ˈnʌmbə/. 'Bomber' = /ˈbɒmə/ — both end in the /mbə/ sound. Rhymes with 'number'. 'Plumb' ends in /m/ sound; 'climb' ends in /m/; 'camp' ends in /mp/."
  }
]

export default unibenEnglish2017
