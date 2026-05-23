// UNIBEN Post-UTME 2009/2010 — Use of English
// 30 questions
// Faculty: Engineering & Physical Sciences
// Analysis notes:
//   NEW IDIOMS: fire on all cylinders, beat about the bush, head over everyone
//   NEW ANTONYMS: denounce/lauded, croons/shouts
//   GRAMMAR: adjective order, phrasal verbs (give up, stand in, take down),
//             lying/laying/lain, SVA with 'as well as' and 'everybody'
//   REPORTED SPEECH: 5 full questions — highest count across all years
//   PASSAGE: humorous narrative (fishing story) — 3rd passage type after social/scientific

const unibenEnglish2009 = [

  // =====================
  // COMPREHENSION — Fishing Story (Q1–5)
  // Analysis: Humorous/narrative passage — contrast to previous scientific passages
  // =====================
  {
    subject: "English", topic: "Comprehension", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    passage: "One day, Alan, a friend of mine who likes country life, was fishing in a river when he caught a trout. As he tried to pull the fish in, it slipped off the hook, flew over his head, and landed in a field behind him. Alan put down his rod, went through the gate, and started searching for his trout. Some people, obviously from the area, were having a picnic in the field. One of the men shouted, 'What on earth are you doing?' Thinking that the question was asked because of how he was dressed, Alan replied, 'Fishing.' 'Don't be silly. Fish don't live in fields,' the man said, laughing. 'Oh, but they do,' said Alan. 'They jump out of the river to look for flies, and I catch them with my hands.' At that moment, he found his trout in the grass, picked it up, and showed it to the picnickers. He put it in his basket and bent down as if he was searching for another one. The picnickers stopped laughing and spent the rest of the day searching the field.",
    question: "Why did the fish land in the field?",
    options: ["It had wings", "It was a flying fish", "It was looking for food", "It fell off the hook"],
    answer: "It fell off the hook",
    explanation: "The passage states 'it slipped off the hook, flew over his head, and landed in a field behind him.' The fish landed in the field because it slipped off the hook with enough momentum to fly over Alan's head. It was not a flying fish and had no wings."
  },
  {
    subject: "English", topic: "Comprehension", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    passage: "Some people, obviously from the area, were having a picnic in the field.",
    question: "The picnickers were:",
    options: ["Farmers", "From the nearby village", "Tourists", "People from the city"],
    answer: "From the nearby village",
    explanation: "'Obviously from the area' means they were local people — from the nearby area/village. They were not tourists (who would be unfamiliar with the area) and the passage does not say they were farmers or city people."
  },
  {
    subject: "English", topic: "Comprehension", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    passage: "At that moment, he found his trout in the grass, picked it up, and showed it to the picnickers.",
    question: "Where was Alan looking for his fish?",
    options: ["In the grass", "In the river", "In front of the gate", "In his basket"],
    answer: "In the grass",
    explanation: "Alan found his trout in the grass — the field behind him where it had landed. He was not looking in the river (he had left it) or in his basket (the fish wasn't there yet)."
  },
  {
    subject: "English", topic: "Comprehension", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    passage: "He put it in his basket and bent down as if he was searching for another one. The picnickers stopped laughing and spent the rest of the day searching the field.",
    question: "Alan made the picnickers believe that fish jump out of the river by:",
    options: [
      "Telling them a story",
      "Showing them the trout he found",
      "Picking up a fish and pretending to search for more",
      "Taking them to the river"
    ],
    answer: "Picking up a fish and pretending to search for more",
    explanation: "Alan found the fish, showed it to them (proving his claim), then bent down pretending to look for more. It was the combination of showing a real fish AND acting as if there were more that convinced the picnickers — making them search all day."
  },
  {
    subject: "English", topic: "Comprehension", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    passage: "The picnickers stopped laughing and spent the rest of the day searching the field.",
    question: "'He laughs best who laughs last.' This proverb applies to the story because:",
    options: [
      "The picnickers were enjoying themselves",
      "Alan finally found his fish",
      "Alan played a trick on the picnickers",
      "Fishing is a pastime"
    ],
    answer: "Alan played a trick on the picnickers",
    explanation: "The picnickers initially laughed at Alan. But Alan had the last laugh — he tricked them into spending the rest of their day searching a field for fish. 'He laughs best who laughs last' means the final winner is the one who has the last advantage, which was Alan."
  },

  // =====================
  // ANTONYMS (Q6–7)
  // =====================
  {
    subject: "English", topic: "Antonyms", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Why did the teacher denounce the principal's approach to discipline? Osegi _____ the approach.",
    options: ["Renounced", "Lauded", "Condemned", "Refused"],
    answer: "Lauded",
    explanation: "Denounce means to publicly declare as wrong or evil — to condemn. Its antonym is lauded — praised highly and enthusiastically. Renounced means formally abandoned; condemned is a synonym of denounced, not an antonym."
  },
  {
    subject: "English", topic: "Antonyms", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The woman croons the words of her prayer every morning, but her husband _____.",
    options: ["Mumbles", "Prattles", "Shouts", "Counts"],
    answer: "Shouts",
    explanation: "Croon means to sing or speak in a soft, low, gentle voice. Its antonym is shouts — speaking in a loud, forceful voice. Mumbles means to speak indistinctly (still quiet); prattles means to talk at length in a foolish way — neither is the opposite of soft/gentle."
  },

  // =====================
  // VOCABULARY / SYNONYMS (Q8–11)
  // =====================
  {
    subject: "English", topic: "Vocabulary", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Are you sure the boy is indisposed now?",
    options: ["Irrational", "Erratic", "Disposed", "Unwell"],
    answer: "Unwell",
    explanation: "Indisposed means slightly unwell or not feeling well. The nearest synonym is unwell. Note: indisposed can also mean unwilling, but in this context the health meaning applies. 'Disposed' is actually an antonym of indisposed here."
  },
  {
    subject: "English", topic: "Vocabulary", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The clergy do not pay much attention to terrestrial phenomena.",
    options: ["Celestial", "Worldly", "Transparent", "Special"],
    answer: "Worldly",
    explanation: "Terrestrial means of or relating to the earth or worldly matters (as opposed to spiritual/heavenly). The synonym is worldly — relating to material, earthly concerns. Note: celestial would be the antonym (heavenly) — it is NOT a synonym here."
  },
  {
    subject: "English", topic: "Vocabulary", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Moses was a master of the game. His most victorious battles were all carefully planned.",
    options: ["Arranged", "Mapped", "Skimmed", "Worked out"],
    answer: "Worked out",
    explanation: "Carefully planned means thoroughly thought through and prepared. 'Worked out' best captures this meaning — plans that were developed and figured out in detail. 'Mapped' is close but more specific to routes; 'arranged' is more about organisation; 'skimmed' means to read quickly."
  },
  {
    subject: "English", topic: "Vocabulary", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "One of the most enormous of all monsters is the dinosaur.",
    options: ["Little", "Small", "Tiny", "Huge"],
    answer: "Huge",
    explanation: "This question asks for the nearest synonym (NOT antonym) to 'enormous'. Enormous means very large. Its synonym is huge. The options Little, Small, and Tiny are all antonyms — the question asks for nearest in meaning, so Huge is correct."
  },

  // =====================
  // IDIOMS (Q12–14)
  // =====================
  {
    subject: "English", topic: "Idioms & Expressions", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "In order to meet the deadline, the labourers decided to fire on all cylinders. This means that the labourers:",
    options: [
      "Shot at all available cylinders",
      "Threw all the cylinders into the fire",
      "Became tired of the task",
      "Used all their energy to do the job"
    ],
    answer: "Used all their energy to do the job",
    explanation: "'Fire on all cylinders' comes from engines — when all cylinders are firing, the engine operates at full power. Metaphorically, it means to use all available energy, effort, and resources to accomplish something. The labourers worked at full capacity to meet the deadline."
  },
  {
    subject: "English", topic: "Idioms & Expressions", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "When Mary was asked to state her case, she began to beat about the bush. This means that Mary:",
    options: [
      "Stated her case clearly",
      "Walked through a bushy path",
      "Felt ashamed to speak",
      "Avoided the main issue"
    ],
    answer: "Avoided the main issue",
    explanation: "'Beat about the bush' means to talk around a subject without getting to the point — avoiding the main issue. Mary was asked to state her case but instead talked around it without addressing it directly."
  },
  {
    subject: "English", topic: "Idioms & Expressions", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Since Madam Abike's promotion, she has her head over everyone else in the office. This means that Madam Abike:",
    options: [
      "Behaves in a superior manner towards others",
      "Is like a queen",
      "Looks very pretty",
      "No longer performs her duties"
    ],
    answer: "Behaves in a superior manner towards others",
    explanation: "'Has her head over everyone' means she acts as though she is superior to others — behaves in a condescending or superior manner. The promotion has made her arrogant towards her colleagues."
  },

  // =====================
  // STRUCTURE (Q15–25)
  // Analysis: adjective order, phrasal verbs, lying/laying, SVA rules
  // =====================
  {
    subject: "English", topic: "Lexis & Structure", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Suzanne was given:",
    options: [
      "A piece of long yellow and blue spotted napkin",
      "A long napkin piece of yellow and blue spotted",
      "A long piece of yellow and blue spotted napkin",
      "A yellow and blue spotted long piece of cloth"
    ],
    answer: "A long piece of yellow and blue spotted napkin",
    explanation: "English adjective order: Opinion → Size → Age → Shape → Colour → Origin → Material → Purpose + Noun. 'Long' is size; 'yellow and blue spotted' is colour/pattern. Correct order: A long piece of yellow and blue spotted napkin. The noun 'napkin' must come at the end."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The woman's _____ is always beating her.",
    options: ["Brute of a husband", "Husband's brute", "Brute's husband", "Husband brute"],
    answer: "Brute of a husband",
    explanation: "The construction 'a brute of a husband' is standard English for expressing that someone is a brute in their role as husband. This 'noun of a noun' structure is used to intensify a quality: 'a fool of a man', 'a gem of a student'. The possessive form is wrong here."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The manager could not attend the meeting, so he asked Mr. Obi to go _____ for him.",
    options: ["Stand in", "Stand out", "Stand down", "Stand up"],
    answer: "Stand in",
    explanation: "'Stand in for' means to substitute for someone — to take their place. Mr. Obi was asked to represent the manager. 'Stand out' means to be noticeable; 'stand down' means to withdraw; 'stand up' means to rise or keep a date — none mean to substitute."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Ada was unable to finish her assignment the previous day, so she gave _____ trying.",
    options: ["Up", "Down", "Out", "In"],
    answer: "Up",
    explanation: "'Give up' means to stop doing something, typically out of frustration or defeat. Ada stopped trying to complete her assignment. 'Give out' means to distribute or become exhausted; 'give in' means to surrender to pressure; 'give down' is not standard English."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Because Ngozi's dress was too long, the dressmaker said she would _____ the hem a few inches.",
    options: ["Take off", "Take in", "Take down", "Take out"],
    answer: "Take up",
    explanation: "Note: The correct answer should be 'take up' (to shorten a garment by raising the hem). However UNIBEN lists 'take in' as the answer — take in means to make a garment narrower. Students should note: 'take up' = shorten; 'take in' = make narrower; 'take down' = lower something. UNIBEN answer is B (take in)."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "I saw a twenty-naira note _____ at my feet.",
    options: ["Lain", "Lying", "Laid", "Lay"],
    answer: "Lying",
    explanation: "'Lying' is the present participle of 'lie' (to recline/be in a horizontal position). 'I saw a note lying' — the note was in the position of lying. 'Laid' is past tense of 'lay' (to place something). 'Lain' is past participle of 'lie'. The present participle 'lying' is correct here."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Trial and error _____ in success.",
    options: ["Resulting", "Result", "Resulted", "Results"],
    answer: "Results",
    explanation: "'Trial and error' is treated as a singular compound subject (one concept). It takes a singular verb: 'results' (3rd person singular present). 'Result' would be plural; 'resulted' is past tense; 'resulting' is a participle, not a finite verb."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The boy, as well as his sister, _____ going.",
    options: ["Are", "Is", "Were", "Was"],
    answer: "Is",
    explanation: "When 'as well as', 'together with', or 'along with' connects two subjects, the verb agrees with the FIRST subject only. 'The boy' is singular, so the verb is singular: 'is'. The phrase 'as well as his sister' is parenthetical and does not affect the verb number."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Everybody at home _____ staying out at night.",
    options: ["Enjoys", "Enjoyed", "Enjoy", "Enjoying"],
    answer: "Enjoys",
    explanation: "'Everybody' is an indefinite pronoun that always takes a singular verb. Even though it refers to multiple people, grammatically it is treated as singular: 'everybody enjoys'. This applies to: everyone, somebody, nobody, anyone, each, either, neither."
  },

  // =====================
  // REPORTED SPEECH (Q26–30)
  // Analysis: 5 questions — highest count across all years ★ HIGH PRIORITY
  // =====================
  {
    subject: "English", topic: "Lexis & Structure", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Emeka said, 'I do not understand this rule.' Choose the correct reported version.",
    options: [
      "Emeka said, I don't understand this rule",
      "Emeka told me, I do not understand this rule",
      "Emeka said that he did not understand that rule",
      "Emeka said that he did not know that rule"
    ],
    answer: "Emeka said that he did not understand that rule",
    explanation: "Reported speech rules: (1) 'I' → 'he'. (2) Present tense 'do not' → past tense 'did not'. (3) 'this' → 'that' (proximity shifts to distance). (4) 'said' (not 'told') when no indirect object follows. 'Did not know' changes the meaning — 'understand' must stay."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "'I will dance tomorrow,' he said. Choose the correct reported version.",
    options: [
      "He said that he would dance the next day",
      "He said he would dance tomorrow",
      "He said that he would dance tomorrow",
      "He would dance the day after today"
    ],
    answer: "He said that he would dance the next day",
    explanation: "Reported speech rules: (1) 'will' → 'would'. (2) 'tomorrow' → 'the next day' (time expression shifts). Option B keeps 'tomorrow' (wrong — direct speech time). Option C also keeps 'tomorrow' (wrong). The correct transformation is 'would dance the next day'."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Rachel said to her mother, 'You are not in the mood today.' Choose the correct reported version.",
    options: [
      "Rachel told her mother that she was not in the mood",
      "Rachel told her mother that she was not in the mood today",
      "She told her mother that she was not in the mood today",
      "She said to her mother, 'You are not in the mood today.'"
    ],
    answer: "Rachel told her mother that she was not in the mood",
    explanation: "Rules: (1) 'said to her mother' → 'told her mother'. (2) 'You' → 'she' (referring to the mother). (3) 'are' → 'was'. (4) 'today' is dropped in formal reported speech (or becomes 'that day'). Option A is correct: told + object + that + past tense, without 'today'."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Sam exclaimed, 'Goodness gracious! I don't believe it!' Choose the correct reported version.",
    options: [
      "Sam said good gracious, he does not believe it",
      "Sam exclaimed in surprise that he did not believe it",
      "Sam said that he is shocked that he did not believe it",
      "Sam was shocked that he did not believe me"
    ],
    answer: "Sam exclaimed in surprise that he did not believe it",
    explanation: "For exclamations in reported speech: the exclamatory phrase ('Goodness gracious!') is replaced by the verb of emotion + adverb: 'exclaimed in surprise'. Then: 'I don't believe it' → 'that he did not believe it'. Option B correctly captures both the emotion and the tense shift."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "John said, 'When did you return?' Choose the correct reported version.",
    options: [
      "John asked me when I returned",
      "John asked me when I had returned",
      "John asked me when will you return",
      "John said when would you return"
    ],
    answer: "John asked me when I had returned",
    explanation: "For questions in reported speech: (1) 'said' → 'asked'. (2) Inversion is removed (when did you → when I). (3) Simple past 'did return' → past perfect 'had returned'. (4) No question mark. Option B correctly applies all these rules. Option A uses simple past (insufficient tense shift for a question about a past event)."
  }
]

export default unibenEnglish2009
