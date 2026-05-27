// UNIBEN Post-UTME 2008/2009 — Use of English
// 30 questions
// Faculty: Engineering & Physical Sciences
// Analysis notes:
//   NEW IDIOMS: proof of pudding, wear a long face, say boo to a goose,
//               grain to his mill, brought down the house, rough diamond
//   NEW ANTONYMS: frugality/extravagance, staunch/disloyal, placid/violent, admiration/disdain
//   GRAMMAR: 2nd conditional subjunctive (were), prepositions with media, paradox definition
//   PASSAGE: Sunspots — scientific passage (2nd scientific passage in a row after 2007/2008)

const unibenEnglish2008 = [

  // =====================
  // ANTONYMS (Q1–6)
  // =====================
  {
    subject: "English", topic: "Antonyms", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Your _____ contrasts with your brother's **frugality**.",
    options: ["Stupidity", "Extravagance", "Frivolity", "Meanness"],
    answer: "Extravagance",
    explanation: "Frugality means being careful and economical with money. Its antonym is extravagance — spending money freely and excessively. Frivolity means lack of seriousness, which is unrelated to frugality."
  },
  {
    subject: "English", topic: "Antonyms", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "**Convocation** ceremonies are always more colourful than _____ ceremonies.",
    options: ["Registration", "Graduation", "Matriculation", "Congress"],
    answer: "Matriculation",
    explanation: "Convocation is the ceremony at the END of an academic programme (graduation). Its opposite in the academic calendar is Matriculation — the ceremony at the BEGINNING when students are formally admitted. Both are major academic ceremonies but at opposite ends."
  },
  {
    subject: "English", topic: "Antonyms", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "While he is a **staunch** supporter of the president, she is a _____ member of the president's cabinet.",
    options: ["Disloyal", "Faithful", "Vocal", "Courageous"],
    answer: "Disloyal",
    explanation: "Staunch means firmly loyal and committed. Its antonym is disloyal — not faithful or loyal to a person or cause. Faithful is a synonym of staunch, not an antonym."
  },
  {
    subject: "English", topic: "Antonyms", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "While the girl is **bereft** of ideas, the boy is _____ of ideas.",
    options: ["In need", "Bereaved", "Bankrupt", "Full"],
    answer: "Full",
    explanation: "Bereft means lacking completely — totally without something. Its antonym is full — having an abundance of. 'Bankrupt of ideas' and 'in need of ideas' are synonymous with bereft, not antonyms. Bereaved means grieving a loss."
  },
  {
    subject: "English", topic: "Antonyms", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The well-wisher is believed to have a very **placid** temperament. Achaba is notorious for his _____ temperament.",
    options: ["Platonic", "Pleasant", "Platitudinous", "Violent"],
    answer: "Violent",
    explanation: "Placid means calm, peaceful, and untroubled. Its antonym is violent — characterized by intense force or aggression. Platonic means non-physical; platitudinous means dull/clichéd — neither contrasts with placid."
  },
  {
    subject: "English", topic: "Antonyms", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The woman was full of **admiration** for her husband, but he treated her with _____.",
    options: ["Disdain", "Love", "Disgrace", "Admonition"],
    answer: "Disdain",
    explanation: "Admiration means great respect and warm approval. Its antonym is disdain — contempt, treating someone as if they are beneath consideration. Admonition means a gentle warning or reprimand — not an antonym of admiration."
  },

  // =====================
  // STRUCTURE (Q7–13)
  // =====================
  {
    subject: "English", topic: "Lexis & Structure", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Without _____, I will not accept the admission.",
    options: ["Accommodation", "Accomodation", "Accommmodation", "Accomomodation"],
    answer: "Accommodation",
    explanation: "The correct spelling is 'accommodation' — two c's and two m's. A useful memory trick: it has room for two cots and two mattresses (2c, 2m). All other options are misspellings."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Bode and Seyi are very selfish. They care only about _____.",
    options: ["Each other", "One another", "Themselves", "Them"],
    answer: "Themselves",
    explanation: "Reflexive pronouns (himself, themselves) are used when the subject and object refer to the same people. Since Bode and Seyi care about THEMSELVES (same people as subject), 'themselves' is correct. 'Each other' implies mutual care between them, which contradicts 'selfish'."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The threat that he would be expelled from school if he failed again _____ him into seriousness.",
    options: ["Coaxed", "Leered", "Incensed", "Jolted"],
    answer: "Jolted",
    explanation: "Jolted means shocked suddenly into action — startled into a new state. The threat acted like a sudden shock that pushed him into seriousness. Coaxed means persuaded gently (opposite tone). Incensed means angered. Leered means looked in a lascivious way."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "It is really a _____: the more you look, the less you see.",
    options: ["Metaphor", "Hyperbole", "Paradox", "Miracle"],
    answer: "Paradox",
    explanation: "A paradox is a statement that seems self-contradictory but may be true. 'The more you look, the less you see' seems contradictory but can be true in context. A metaphor is a comparison; hyperbole is exaggeration; a miracle is a supernatural event."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Bumi should not have taken offence at a mere _____ comment.",
    options: ["Innocuous", "Ludicrous", "Ridiculous", "Notorious"],
    answer: "Innocuous",
    explanation: "Innocuous means not harmful or offensive — harmless. The sentence implies the comment was too trivial to cause offence. Ludicrous and ridiculous mean absurd. Notorious means famous for something bad."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "I would give up smoking if I _____ you.",
    options: ["Am", "Were", "Was", "Are"],
    answer: "Were",
    explanation: "This is the 2nd conditional using the subjunctive mood. In formal English, 'if I were you' is correct — using 'were' (not 'was') for all persons in hypothetical conditions. 'If I was you' is informal/colloquial but 'were' is the grammatically correct answer here."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "I heard the news _____ the radio.",
    options: ["From", "By", "On", "Through"],
    answer: "On",
    explanation: "The correct preposition with broadcast media is 'on': heard on the radio, watched on TV, saw on the news. 'From the radio' is informal but not standard. 'By radio' is used in technical/military contexts. 'On' is the standard preposition for electronic media."
  },

  // =====================
  // INTERPRETATION (Q14–19)
  // =====================
  {
    subject: "English", topic: "Idioms & Expressions", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "No one understands better than a man who participates in a project. Thus, **the proof of the pudding is in the eating**.",
    options: [
      "To enjoy the pudding, one must eat it after hard work",
      "Only a person with experience understands what it entails",
      "People who have never eaten pudding cannot describe it",
      "Self-reliance is the best way to succeed"
    ],
    answer: "Only a person with experience understands what it entails",
    explanation: "'The proof of the pudding is in the eating' means the true value or quality of something can only be judged by trying or experiencing it — not by theory. In context, only someone who has participated in a project truly understands it. Experience is the best proof."
  },
  {
    subject: "English", topic: "Idioms & Expressions", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "When a brother has spoken the bitter truth to another, the latter often **wears a long face**.",
    options: [
      "Looks serious or unhappy",
      "Wears a gloomy expression",
      "Keeps away from him",
      "Quarrels with him"
    ],
    answer: "Looks serious or unhappy",
    explanation: "'Wear a long face' means to have a sad, serious, or unhappy expression. The options A and B are both close, but A is more precise — 'looks serious or unhappy' captures both the displeasure and the gravity of hearing a bitter truth."
  },
  {
    subject: "English", topic: "Idioms & Expressions", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "If you don't know him well enough, you would think he **couldn't say boo to a goose**.",
    options: [
      "Would run away from a goose",
      "Was very timid",
      "Didn't know how to speak",
      "Was too kind to chase a goose"
    ],
    answer: "Was very timid",
    explanation: "'Couldn't say boo to a goose' describes someone so shy and timid that they couldn't even startle a goose. It means very timid and lacking confidence — easily intimidated even by harmless things."
  },
  {
    subject: "English", topic: "Idioms & Expressions", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The businessman near our house is so resourceful that **all his grain goes to his mill**.",
    options: [
      "Everyone who goes there is disappointed",
      "He wastes everything",
      "Everything is lost there",
      "He uses everything profitably"
    ],
    answer: "He uses everything profitably",
    explanation: "'All his grain goes to his mill' means everything benefits him — he wastes nothing and turns everything to his advantage. A resourceful person uses all available resources profitably."
  },
  {
    subject: "English", topic: "Idioms & Expressions", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The famous dancer **brought down the house** with her performance.",
    options: [
      "Caused the building to collapse",
      "Brought spectators downstairs",
      "Closed down the hall",
      "Won great applause"
    ],
    answer: "Won great applause",
    explanation: "'Bring down the house' means to receive a tremendous ovation from an audience — to win great applause. The idiom refers to a performance so excellent that the audience's enthusiastic response metaphorically shakes the building."
  },
  {
    subject: "English", topic: "Idioms & Expressions", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "He used to be an object of ridicule, but later people realized he was a **rough diamond**.",
    options: [
      "A person who is rough and unrefined",
      "A rough but wealthy man",
      "A person of great worth despite a rough exterior",
      "A person with a hidden diamond"
    ],
    answer: "A person of great worth despite a rough exterior",
    explanation: "A 'rough diamond' (or diamond in the rough) describes a person of great potential and worth who appears unpolished or lacks social refinement on the surface. The value is real but hidden under a rough exterior."
  },

  // =====================
  // VOCABULARY (Q20–25)
  // =====================
  {
    subject: "English", topic: "Synonyms", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "While we were waiting for the examination results to be posted, I suffered a lot from the **suspense**.",
    options: ["Fear", "Doubt", "Uncertainty", "Delay"],
    answer: "Uncertainty",
    explanation: "Suspense in this context means a state of uncertain expectation — not knowing what will happen. Uncertainty best captures this meaning. Fear implies a specific threat; doubt implies disbelief; delay refers to time — none capture suspense as precisely as uncertainty."
  },
  {
    subject: "English", topic: "Synonyms", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Jones' master praised him for being **diligent** in his duties.",
    options: ["Sober", "Careful", "Consistent", "Industrious"],
    answer: "Industrious",
    explanation: "Diligent means hardworking and careful in one's duties. The nearest synonym is industrious — characterised by steady, hard effort. 'Careful' is too narrow; 'consistent' refers to regularity not effort; 'sober' is about demeanour not work ethic."
  },
  {
    subject: "English", topic: "Synonyms", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "We had to **control** Uli or he would have fought Abu over those words.",
    options: ["Advise", "Restrain", "Command", "Forbid"],
    answer: "Restrain",
    explanation: "To control someone physically or prevent them from doing something is to restrain them. In this context, they had to physically hold Uli back from fighting. Restrain means to hold back by force — more specific and accurate than 'advise' or 'command'."
  },
  {
    subject: "English", topic: "Synonyms", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Some people believe that black cats are **omens** of bad luck.",
    options: ["Warnings", "Signs", "Prophecies", "Promises"],
    answer: "Signs",
    explanation: "Omens are signs or portents — things believed to be indications of future events. 'Signs' is the most direct synonym. 'Warnings' imply a more active caution; 'prophecies' involve prediction; 'promises' imply certainty — omen is simply a sign/indicator."
  },
  {
    subject: "English", topic: "Synonyms", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "A monkey can **imitate** most of man's actions.",
    options: ["Perform", "Mock", "Learn", "Ape"],
    answer: "Ape",
    explanation: "To ape means to imitate or mimic — particularly in a foolish or thoughtless way. Interestingly, 'ape' as a verb comes from the primate, since apes are known for mimicking behaviour. It is the most precise synonym for imitate in this context."
  },
  {
    subject: "English", topic: "Synonyms", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The villagers were filled with **wonder** when they saw their first television.",
    options: ["Shock", "Disbelief", "Amazement", "Fear"],
    answer: "Amazement",
    explanation: "Wonder means a feeling of amazement and admiration caused by something beautiful, remarkable, or unfamiliar. Amazement is the closest synonym. Shock implies a negative surprise; disbelief implies doubt; fear implies danger — wonder is specifically positive amazement."
  },

  // =====================
  // COMPREHENSION — Sunspots (Q26–30)
  // Analysis: 2nd consecutive scientific passage — confirms pattern
  // =====================
  {
    subject: "English", topic: "Comprehension", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    passage: "According to the controversial sunspots theory, great storms on the surface of the sun hurl streams of solar particles into space and eventually into the atmosphere of our planet, causing shifts in weather on Earth and interference with radio and television communications. A typical sunspot consists of a dark central umbra surrounded by a lighter penumbra, made up of light and dark streaks extending from the centre like the spokes of a wheel. Actually, sunspots are cooler than the rest of the photosphere, which may account for their darker appearance. Typically, the temperature in a sunspot umbra is about 4,000 Kelvin, while the penumbral region is about 5,500 Kelvin, and outside the sunspot it is about 6,000 Kelvin. Sunspots range in size from tiny grains to complex structures stretching for billions of square miles. About 5% of all sunspots are large enough to be seen from Earth without instruments. They are often observed in groups, and tend to occur in pairs with opposite magnetic polarities. Sunspots also occur in cycles of about 11 years, first appearing between 20° and 40° north and south of the sun's equator, then moving closer to the equator as the cycle progresses.",
    question: "Why are solar particles hurled into space?",
    options: [
      "To determine causes on Earth",
      "Due to disturbances on the sun's surface",
      "Due to small rivers on the sun's surface",
      "Due to changes in the Earth's atmosphere"
    ],
    answer: "Due to disturbances on the sun's surface",
    explanation: "The passage states 'great storms on the surface of the sun hurl streams of solar particles into space'. The cause is surface storms/disturbances on the sun — not rivers (which don't exist on the sun) and not changes in Earth's atmosphere."
  },
  {
    subject: "English", topic: "Comprehension", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    passage: "According to the controversial sunspots theory, great storms on the surface of the sun hurl streams of solar particles into space and eventually into the atmosphere of our planet, causing shifts in weather on Earth and interference with radio and television communications.",
    question: "How can we describe the effect of matter from the sun that enters the Earth's atmosphere?",
    options: [
      "It causes volcanic eruptions on Earth",
      "It affects weather patterns on Earth",
      "It results in shadows across the Earth",
      "It produces higher temperatures on Earth"
    ],
    answer: "It affects weather patterns on Earth",
    explanation: "The passage explicitly states solar particles cause 'shifts in weather on Earth and interference with radio and television communications'. The effect on weather patterns is directly stated. Volcanic eruptions, shadows, and higher temperatures are not mentioned."
  },
  {
    subject: "English", topic: "Comprehension", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    passage: "According to the controversial sunspots theory, great storms on the surface of the sun hurl streams of solar particles into space and eventually into the atmosphere of our planet, causing shifts in weather on Earth and interference with radio and television communications. A typical sunspot consists of a dark central umbra surrounded by a lighter penumbra, made up of light and dark streaks extending from the centre like the spokes of a wheel. Actually, sunspots are cooler than the rest of the photosphere, which may account for their darker appearance. Typically, the temperature in a sunspot umbra is about 4,000 Kelvin, while the penumbral region is about 5,500 Kelvin, and outside the sunspot it is about 6,000 Kelvin. Sunspots range in size from tiny grains to complex structures stretching for billions of square miles. About 5% of all sunspots are large enough to be seen from Earth without instruments. They are often observed in groups, and tend to occur in pairs with opposite magnetic polarities. Sunspots also occur in cycles of about 11 years, first appearing between 20° and 40° north and south of the sun's equator, then moving closer to the equator as the cycle progresses.",
    question: "How would you describe most sunspots?",
    options: [
      "A dark central shadow surrounded by lighter streaks like spokes",
      "A bright wheel partly covered by a dark shadow",
      "A wheel with alternating dark and bright spokes",
      "A spoke with a bright trail partly covered by shadow"
    ],
    answer: "A dark central shadow surrounded by lighter streaks like spokes",
    explanation: "The passage describes: a dark central umbra (dark central shadow) surrounded by a lighter penumbra made of light and dark streaks like spokes. Option A accurately captures: dark centre surrounded by lighter spoke-like streaks."
  },
  {
    subject: "English", topic: "Comprehension", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    passage: "According to the controversial sunspots theory, great storms on the surface of the sun hurl streams of solar particles into space and eventually into the atmosphere of our planet, causing shifts in weather on Earth and interference with radio and television communications. A typical sunspot consists of a dark central umbra surrounded by a lighter penumbra, made up of light and dark streaks extending from the centre like the spokes of a wheel. Actually, sunspots are cooler than the rest of the photosphere, which may account for their darker appearance. Typically, the temperature in a sunspot umbra is about 4,000 Kelvin, while the penumbral region is about 5,500 Kelvin, and outside the sunspot it is about 6,000 Kelvin. Sunspots range in size from tiny grains to complex structures stretching for billions of square miles. About 5% of all sunspots are large enough to be seen from Earth without instruments. They are often observed in groups, and tend to occur in pairs with opposite magnetic polarities. Sunspots also occur in cycles of about 11 years, first appearing between 20° and 40° north and south of the sun's equator, then moving closer to the equator as the cycle progresses.",
    question: "What does the author mean by saying sunspots are cooler than the rest of the photosphere, which may account for their darker colour?",
    options: [
      "Neither sunspots nor the photosphere is hot",
      "Sunspots and the photosphere have no colour",
      "The colour of sunspots may be affected by their temperature",
      "The size of a sunspot determines its temperature"
    ],
    answer: "The colour of sunspots may be affected by their temperature",
    explanation: "The key phrase is 'may account for' — meaning the lower temperature might be the reason for the darker colour. This directly means temperature may affect/determine colour. The author is careful to say 'may' — it's a possible explanation, not a definite fact."
  },
  {
    subject: "English", topic: "Comprehension", year: 2008, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    passage: "According to the controversial sunspots theory, great storms on the surface of the sun hurl streams of solar particles into space and eventually into the atmosphere of our planet, causing shifts in weather on Earth and interference with radio and television communications. A typical sunspot consists of a dark central umbra surrounded by a lighter penumbra, made up of light and dark streaks extending from the centre like the spokes of a wheel. Actually, sunspots are cooler than the rest of the photosphere, which may account for their darker appearance. Typically, the temperature in a sunspot umbra is about 4,000 Kelvin, while the penumbral region is about 5,500 Kelvin, and outside the sunspot it is about 6,000 Kelvin. Sunspots range in size from tiny grains to complex structures stretching for billions of square miles. About 5% of all sunspots are large enough to be seen from Earth without instruments. They are often observed in groups, and tend to occur in pairs with opposite magnetic polarities. Sunspots also occur in cycles of about 11 years, first appearing between 20° and 40° north and south of the sun's equator, then moving closer to the equator as the cycle progresses.",
    question: "The sunspot theory is:",
    options: ["Not very important", "Widely accepted", "Subject to debate", "Relatively new"],
    answer: "Subject to debate",
    explanation: "The passage begins with 'According to the controversial sunspots theory'. The word 'controversial' means it is subject to debate and disagreement — not universally accepted, not proven false, and its age is not discussed. Controversial = subject to debate."
  }
]

export default unibenEnglish2008
