// UNIBEN Post-UTME 2018/2019 — Use of English
// 20 questions
// Faculty: Engineering & Physical Sciences
// Analysis notes:
//   FORMAT: NO comprehension passage — direct vocabulary, idioms, antonyms
//   NEW ANTONYMS: decorous/impolite, taut/loose, unfathomable/predictable,
//                 fleeting/long, alleviate/exacerbate, under a cloud/with clear record
//   RECURRING: go back on words ★ (3rd appearance: 2014, 2018)

const unibenEnglish2018 = [
  // FILL IN BLANK (Q1-6)
  {
    subject: "English", topic: "Lexis & Structure", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "After the accused was found guilty by the court, his counsel _____ before sentence was passed.",
    options: ["Begged for mercy", "Made a plea for mitigation", "Made an ovation", "Made a plea for litigation"],
    answer: "Made a plea for mitigation",
    explanation: "A plea in mitigation is a formal legal submission asking the court to reduce the sentence — presenting reasons why a lighter punishment is appropriate. 'Mitigation' = reduction of severity. 'Litigation' = the process of taking legal action. 'Ovation' = applause."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Four persons accused of currency _____ have been held by the security agents.",
    options: ["Smuggling", "Counterfeiting", "Laundering", "Hoarding"],
    answer: "Counterfeiting",
    explanation: "Currency counterfeiting means illegally producing fake/forged money. Laundering = disguising illegally obtained money as legitimate. Smuggling = illegally transporting goods across borders. Hoarding = storing goods excessively. Counterfeiting specifically means faking currency."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Engineer Linus found that thieves had entered his house. He went to the police to report the _____.",
    options: ["Break out", "Break up", "Break in", "Break into"],
    answer: "Break in",
    explanation: "A 'break-in' (noun) is an illegal forced entry into a building. When used as a noun: 'He reported the break-in.' 'Break out' = escape; 'break up' = end a relationship/split; 'break into' is a verb phrase, not the noun for the crime."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "He did not attend the funeral rites because he was unable to _____ from work.",
    options: ["Absent himself", "Excuse himself", "Remove himself", "Excuse work"],
    answer: "Excuse himself",
    explanation: "'Excuse himself from work' means to formally obtain permission to be absent. 'Absent himself' is also grammatically correct but 'excuse himself' is the more natural expression for obtaining time off from a workplace obligation."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The officer was compelled to _____ the suspect's car.",
    options: ["Seize", "Arrest", "Kidnap", "Detain"],
    answer: "Seize",
    explanation: "'Seize' means to take hold of or confiscate by legal authority — a car can be seized. 'Arrest' applies to persons, not objects. 'Kidnap' means to take someone illegally. 'Detain' means to keep in custody — again applies to persons. A vehicle is seized, not arrested."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "If you are going to the market, may I _____ you?",
    options: ["Follow", "Accompany", "Pursue", "Join"],
    answer: "Accompany",
    explanation: "'Accompany' means to go somewhere with someone as a companion — the most formal and precise synonym here. 'Follow' implies going behind. 'Pursue' implies chasing. 'Join' is informal and also possible, but 'accompany' is the more correct choice in this context."
  },

  // VOCABULARY (Q7-13)
  {
    subject: "English", topic: "Synonyms", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The culprits will surrender their **loot** to the customs officials.",
    options: ["Give away", "Give out", "Give in", "Give up"],
    answer: "Give up",
    explanation: "'Surrender' means to hand over possession of something — to yield it to another. 'Give up' = to relinquish or hand over. 'Give away' = to give for free; 'give in' = to yield to pressure/demands; 'give out' = to distribute. 'Give up' best captures the meaning of surrendering something."
  },
  {
    subject: "English", topic: "Synonyms", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The discussion became **animated**.",
    options: ["Specialized", "Lively", "Intellectual", "Unruly"],
    answer: "Lively",
    explanation: "'Animated' means full of life, interest, and enthusiasm. 'Lively' is the most direct synonym — an animated discussion is energetic, vigorous, and engaging. 'Unruly' implies disorder/lack of control which is stronger than animated."
  },
  {
    subject: "English", topic: "Synonyms", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Poor citizens are often **neglected** in many ways.",
    options: ["Beggarly", "Sordid", "Ignored", "Pompous"],
    answer: "Ignored",
    explanation: "'Neglected' means not given proper care or attention — overlooked and ignored. 'Ignored' is the most direct synonym. 'Beggarly' means very poor; 'sordid' means morally ignoble; 'pompous' means self-important — none of these match 'neglected'."
  },
  {
    subject: "English", topic: "Synonyms", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The musician's popularity is beginning to **decline**.",
    options: ["Increase", "Fade", "Disappear", "Improve"],
    answer: "Fade",
    explanation: "'Decline' means to gradually become less, weaker, or smaller. 'Fade' captures this gradual reduction — popularity fades over time. 'Disappear' implies complete vanishing (too strong). 'Increase' and 'improve' are antonyms."
  },
  {
    subject: "English", topic: "Idioms & Expressions", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "I promised to **look out for** her next time she is in town.",
    options: ["Watch for", "Visit", "Greet", "Take care of"],
    answer: "Watch for",
    explanation: "'Look out for' someone means to watch for them — to keep an eye out and notice when they arrive. In this context it means 'watch for her appearance/arrival'. 'Take care of' implies providing care (slightly different meaning). 'Watch for' is the most direct synonym."
  },
  {
    subject: "English", topic: "Idioms & Expressions", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    isHotTopic: true,
    faculty: ["engineering", "physicalsciences"],
    question: "Finally, I assured him that I would not **go back on my words**.",
    options: ["Return to a place", "Return to certain words", "Reuse my words", "Fail to keep my promise"],
    answer: "Fail to keep my promise",
    explanation: "'Go back on your word/words' means to break a promise — to fail to honour a commitment you made. ★ RECURRING — this exact idiom appeared in 2014/2015 and 2019/2020. UNIBEN consistently tests this idiom."
  },
  {
    subject: "English", topic: "Idioms & Expressions", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The speaker took his audience **down memory lane** before he went to the topic of his lecture.",
    options: [
      "Took his audience on a journey through a street called Memory Lane",
      "Recalled events from the past",
      "Told a tale about a place called Memory Lane",
      "Gave an outline of his lecture"
    ],
    answer: "Recalled events from the past",
    explanation: "'Down memory lane' means revisiting or recalling past memories and experiences. Taking an audience down memory lane = sharing nostalgic recollections of past events before moving to the main topic."
  },

  // ANTONYMS (Q14-20)
  {
    subject: "English", topic: "Antonyms", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Common sense requires that one should be **decorous** at formal gatherings.",
    options: ["Contagious", "Careful", "Impolite", "Curious"],
    answer: "Impolite",
    explanation: "Decorous means behaving in a polite, proper, and socially appropriate manner. Its antonym is impolite — lacking courtesy and good manners. 'Careful' and 'curious' describe different traits; 'contagious' is unrelated."
  },
  {
    subject: "English", topic: "Antonyms", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The string was **taut**.",
    options: ["Stretched", "Loose", "Firm", "Tight"],
    answer: "Loose",
    explanation: "Taut means stretched tight, not slack. Its antonym is loose — not tight or taut, having slack. 'Stretched' and 'tight' are synonyms of taut, not antonyms."
  },
  {
    subject: "English", topic: "Antonyms", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The athlete's **diminutive** figure bounced over the track with unfathomable lightness.",
    options: ["Irresistible", "Predictable", "Invigorating", "Impressive"],
    answer: "Predictable",
    explanation: "Unfathomable means impossible to measure, understand, or predict — beyond comprehension. Its antonym is predictable — able to be foreseen or easily understood. 'Irresistible', 'invigorating', and 'impressive' describe qualities unrelated to 'unfathomable'."
  },
  {
    subject: "English", topic: "Antonyms", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The teacher announced that the class would be making a **fleeting** visit to the zoo.",
    options: ["Long", "Routine", "Brief", "Guarded"],
    answer: "Long",
    explanation: "Fleeting means lasting for a very short time — momentary and brief. Its antonym is long — lasting for an extended period. 'Brief' is a synonym of fleeting, not an antonym."
  },
  {
    subject: "English", topic: "Antonyms", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "We intend to make the reception a **detailed** event.",
    options: ["Annual", "Weekly", "Monthly", "Short"],
    answer: "Short",
    explanation: "Detailed means thorough, comprehensive, involving many particulars. Its antonym in this context is short — brief and concise, lacking elaboration. The options 'annual', 'weekly', 'monthly' relate to frequency, not detail."
  },
  {
    subject: "English", topic: "Antonyms", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The project is designed to **alleviate** poverty in the country.",
    options: ["Exacerbate", "Assuage", "Eradicate", "Tackle"],
    answer: "Exacerbate",
    explanation: "Alleviate means to make suffering or a problem less severe — to ease or relieve. Its antonym is exacerbate — to make worse or more severe. Note: 'assuage' is a synonym of alleviate (not antonym); 'eradicate' means to completely remove."
  },
  {
    subject: "English", topic: "Idioms & Expressions", year: 2018, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The permanent secretary left his job **under a cloud**.",
    options: ["With a clear record", "On a sunny day", "In disgrace", "On a cloudy day"],
    answer: "With a clear record",
    explanation: "★ NOTE: This is an ANTONYM question. 'Under a cloud' means in a state of disgrace, suspicion, or disfavour — having left under negative circumstances. Its opposite is 'with a clear record' — leaving with no blemish or scandal. The question asks for the antonym of 'under a cloud', not its meaning."
  }
]

export default unibenEnglish2018
