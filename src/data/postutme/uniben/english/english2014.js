// UNIBEN Post-UTME 2014/2015 — Use of English
// 40 questions
// Faculty: Engineering & Physical Sciences
// Analysis notes:
//   PASSAGE: Cloze test (fill-in-the-blank passage) — NEW FORMAT, different from previous years
//   IDIOMS: go back on words, burning midnight oil, axe to grind, pay through nose, in the red
//   ANTONYMS: valour/cowardice, optimistic/pessimistic, vague/specific
//   GRAMMAR: adjective order (brand new black Ford sports), 3rd conditional (Had I known),
//            present perfect (food prices have gone up), modal perfect (must have made)

const unibenEnglish2014 = [
  // CLOZE PASSAGE (Q1-10)
  {
    subject: "English", topic: "Comprehension", year: 2014, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Emeka had never seen so many people on the streets, or so many _____ on the road.",
    options: ["Transportation", "Vehicles", "Wagons", "Trucks"],
    answer: "Vehicles",
    explanation: "The passage describes a busy city scene during rush hour. 'Vehicles' is the most appropriate general term for the various types of transport on the road — cars, buses, taxis etc. 'Transportation' is abstract; 'wagons' and 'trucks' are too specific."
  },
  {
    subject: "English", topic: "Comprehension", year: 2014, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "One minute they would be _____ other cars, the next, stopping in the middle of the road.",
    options: ["Bypassing", "Overtaking", "Taking over", "Overtaking"],
    answer: "Overtaking",
    explanation: "Taxis overtaking other cars describes aggressive, reckless driving in traffic. 'Overtaking' is the correct driving term for passing another vehicle. 'Bypassing' means going around rather than passing."
  },
  {
    subject: "English", topic: "Comprehension", year: 2014, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Stopping in the middle of the road to pick up _____ without any signal to other drivers.",
    options: ["Bystanders", "Clients", "Passengers", "Passers-by"],
    answer: "Passengers",
    explanation: "Taxis stop to pick up passengers — people who want to ride. 'Clients' is too formal for this context; 'bystanders' are people watching; 'passers-by' are people walking past."
  },
  {
    subject: "English", topic: "Comprehension", year: 2014, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "There were long _____ of people waiting at bus stops.",
    options: ["Tiers", "Rows", "Crowd", "Queues"],
    answer: "Queues",
    explanation: "A queue is an orderly line of people waiting for something. 'Long queues' at bus stops is the correct collocation. 'Rows' and 'tiers' suggest organized seating; 'crowd' is a disorganized mass."
  },
  {
    subject: "English", topic: "Comprehension", year: 2014, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "There were long queues of people waiting at bus _____.",
    options: ["Stop", "Stations", "Parks", "Halts"],
    answer: "Stop",
    explanation: "'Bus stop' is the standard term for a designated place where buses pick up and drop off passengers. 'Bus station' is a larger terminal; 'bus park' is a parking area; 'halt' is an old-fashioned British term."
  },
  {
    subject: "English", topic: "Comprehension", year: 2014, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "_____ often seemed in danger of their lives as they tried to run across the road.",
    options: ["Walkers", "Trekkers", "Pedestrians", "Pedestrians"],
    answer: "Pedestrians",
    explanation: "Pedestrians are people travelling on foot. In the context of road crossing, 'pedestrians' is the correct technical/formal term. 'Walkers' and 'trekkers' suggest leisure; 'pedestrians' is the road safety term."
  },
  {
    subject: "English", topic: "Comprehension", year: 2014, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Emeka heard the blaring horn of a _____, then a siren as it rushed to pick up accident victims.",
    options: ["Lorry", "Omnibus", "Ambulance", "Bus"],
    answer: "Ambulance",
    explanation: "An ambulance rushes to accident victims with a blaring siren. The context — 'rushed to pick up victims of an accident' — clearly indicates an ambulance, not a lorry, bus, or omnibus."
  },
  {
    subject: "English", topic: "Comprehension", year: 2014, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "This was followed by four policemen in an open _____.",
    options: ["Keep", "Exceed", "Observe", "See"],
    answer: "Observe",
    explanation: "[Note: This question number references the police vehicle, but answer options relate to Q10 about speed limits. The vehicle would be a 'jeep' or 'van'. For the speed limit question: police 'observe' is wrong — they don't have to 'observe' (keep/follow) the speed limit in emergencies. UNIBEN answer relates to Q10.]"
  },
  {
    subject: "English", topic: "Comprehension", year: 2014, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The police did not have to _____ the speed limit in cases of emergency, but civilian drivers could be heavily _____ for speeding.",
    options: ["Keep / imprisoned", "Exceed / detained", "Observe / fined", "See / remunerated"],
    answer: "Observe / fined",
    explanation: "Police do not have to 'observe' (follow/adhere to) the speed limit in emergencies. Civilian drivers who speed can be 'fined' (penalized with a monetary penalty). 'Remunerated' means paid — the opposite of punished."
  },

  // IDIOMS (Q11-15)
  {
    subject: "English", topic: "Idioms & Expressions", year: 2014, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "I assured him I would not go back on my words.",
    options: [
      "Return to a place",
      "Return to certain words while reading",
      "Reuse my words",
      "Fail to keep my promise"
    ],
    answer: "Fail to keep my promise",
    explanation: "'Go back on your word/words' means to fail to keep a promise — to break a commitment you made. The speaker is assuring the person that they will keep their promise."
  },
  {
    subject: "English", topic: "Idioms & Expressions", year: 2014, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Burning the midnight oil is not a prerequisite for success in examinations.",
    options: [
      "Does not need to study very seriously",
      "Does not need to work late into the night",
      "Should not read at all in the night",
      "Should not burn oil while reading in the night"
    ],
    answer: "Does not need to work late into the night",
    explanation: "'Burning the midnight oil' means working or studying late into the night. The sentence says this is not necessary for exam success — so one does not need to work late into the night."
  },
  {
    subject: "English", topic: "Idioms & Expressions", year: 2014, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Adam's opponent has an axe to grind.",
    options: [
      "He has an axe to sharpen",
      "Has some selfish objectives in view",
      "Will grind with an axe",
      "Has some pepper to grind"
    ],
    answer: "Has some selfish objectives in view",
    explanation: "'Have an axe to grind' means to have a private, selfish reason for doing something — a hidden personal agenda or ulterior motive. The opponent is not acting purely out of principle but has self-interested objectives."
  },
  {
    subject: "English", topic: "Idioms & Expressions", year: 2014, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Jude paid through his nose for his new car.",
    options: [
      "Paid a very low price",
      "Paid a very high price",
      "Paid through an agent",
      "Paid throughout the year"
    ],
    answer: "Paid a very high price",
    explanation: "'Pay through the nose' means to pay an excessively high or unreasonably large amount of money for something. Jude overpaid for his car."
  },
  {
    subject: "English", topic: "Idioms & Expressions", year: 2014, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "They completely closed down the company once it was in the red.",
    options: ["In debt", "Bankrupt", "Formerly successful", "Both good and bad"],
    answer: "In debt",
    explanation: "'In the red' means operating at a loss or in debt — having spent more than earned (from the accounting practice of writing deficits in red ink). The company was closed because it was losing money/in debt."
  },

  // STRUCTURE (Q16-20)
  {
    subject: "English", topic: "Lexis & Structure", year: 2014, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The director told the staff that their hardest job was yet _____.",
    options: ["Coming", "To have come", "To come", "Come"],
    answer: "To come",
    explanation: "'Yet to come' is the correct infinitive construction meaning something has not happened yet but will happen in the future. 'To come' = yet to arrive. 'Coming' would require 'was yet coming' (awkward). 'To have come' = past — wrong tense direction."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2014, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "_____ the confusion, no one knew what to do next.",
    options: ["Despite", "Because", "Since", "Contrary to"],
    answer: "Despite",
    explanation: "'Despite the confusion' means in spite of the confusion — the confusion existed but people still didn't know what to do. 'Because of the confusion' would also work logically, but 'despite' is more precise — it shows the confusion did not help clarify things."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2014, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Paul could not tell the stranger _____ to the post office.",
    options: ["Got", "How to get", "Whether to get", "He got"],
    answer: "How to get",
    explanation: "'Tell someone how to get somewhere' is the correct structure for giving directions. 'How to get to the post office' = the route/directions. 'Whether to get' would mean deciding if one should go — not directions."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2014, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "_____ you have learned the elements of a game such as table tennis, you can enjoy watching it.",
    options: ["Or do", "Once", "Soon", "At once"],
    answer: "Once",
    explanation: "'Once you have learned...' means 'as soon as you have learned...' or 'after learning...' — it expresses a conditional/temporal relationship. Once = when/after (used for conditions). 'At once' means immediately, not conditionally."
  },

  // ANTONYMS (Q21-25)
  {
    subject: "English", topic: "Antonyms", year: 2014, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Valour and _____ are different attributes respectively.",
    options: ["Courage", "Cowardice", "Bravery", "Strength"],
    answer: "Cowardice",
    explanation: "Valour means great courage, especially in battle. Its antonym is cowardice — lack of courage, timidity. Courage and bravery are synonyms of valour, not antonyms."
  },
  {
    subject: "English", topic: "Antonyms", year: 2014, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Peter is very optimistic about the business, while his father is _____.",
    options: ["Antagonistic", "Opportunist", "Pessimistic", "Unconvinced"],
    answer: "Pessimistic",
    explanation: "Optimistic means expecting good outcomes. Its antonym is pessimistic — expecting the worst. The contrast 'while his father is...' signals the opposite attitude."
  },
  {
    subject: "English", topic: "Antonyms", year: 2014, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The testimony of the witness was so vague that it was difficult to learn the _____ details of the case.",
    options: ["Specific", "Transparent", "Hidden", "Minute"],
    answer: "Specific",
    explanation: "Vague means not clearly defined or stated — imprecise. Its antonym is specific — clearly and precisely stated. If the testimony was vague, the specific details were hard to determine."
  },

  // VOCABULARY (Q26-30)
  {
    subject: "English", topic: "Vocabulary", year: 2014, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The lawyer's argument of the case was exhaustive.",
    options: ["Thorough", "Interesting", "Exaggerating", "Fascinating"],
    answer: "Thorough",
    explanation: "Exhaustive means covering all aspects comprehensively — thorough and complete. An exhaustive argument leaves nothing out. 'Thorough' is the closest synonym."
  },
  {
    subject: "English", topic: "Vocabulary", year: 2014, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The students here are advised to be careful of mundane things.",
    options: ["Sinful", "Immoral", "Evil", "Worldly"],
    answer: "Worldly",
    explanation: "Mundane means relating to ordinary, everyday worldly matters — not spiritual or extraordinary. Its synonym is worldly — relating to material, earthly concerns."
  },
  {
    subject: "English", topic: "Vocabulary", year: 2014, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The minister described the new policy as obnoxious.",
    options: ["Unpredictable", "Offensive", "Prudent", "Affordable"],
    answer: "Offensive",
    explanation: "Obnoxious means extremely unpleasant or objectionable — offensive and repugnant. The nearest synonym is offensive — causing displeasure or moral outrage."
  },
  {
    subject: "English", topic: "Vocabulary", year: 2014, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The budget of 2014 was designed to consolidate the gains of the economic recovery programme.",
    options: ["Protect", "Support", "Strengthen", "Diversify"],
    answer: "Strengthen",
    explanation: "Consolidate means to make stronger or more solid — to combine and strengthen existing gains. 'Strengthen' is the most precise synonym here: making the gains more firmly established."
  },
  {
    subject: "English", topic: "Vocabulary", year: 2014, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The art teacher told John that his painting was so realistic that it might almost have been a photograph.",
    options: ["Clear", "Vivid", "Authentic", "Literal"],
    answer: "Vivid",
    explanation: "Realistic in art means closely resembling real life — producing a vivid impression. 'Vivid' captures the life-like quality of the painting. 'Authentic' means genuine; 'literal' means exactly as stated — neither captures 'realistic' as well as vivid."
  },

  // GRAMMAR / STRUCTURE (Q31-40)
  {
    subject: "English", topic: "Lexis & Structure", year: 2014, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "I _____ for sure that Sosses _____ one.",
    options: ["Know / exalts", "Knows / exalts", "Know / exalt", "Knows / exalt"],
    answer: "Know / exalts",
    explanation: "Subject-verb agreement: 'I' takes 'know' (no -s). 'Sosses' is 3rd person singular → takes 'exalts' (with -s). Pattern: I know... that Sosses exalts."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2014, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The speaker could not _____ his point before the bell sounded.",
    options: ["Round up", "Round off", "Round of", "Round over"],
    answer: "Round off",
    explanation: "'Round off' means to complete or bring to a satisfying conclusion. The speaker couldn't finish/conclude his point. 'Round up' means to gather or summarize; 'round of' is not standard English."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2014, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The meeting did not adjourn until it _____ all the matters before it.",
    options: ["Has discussed", "Had discussed", "Have discussed", "Will discuss"],
    answer: "Had discussed",
    explanation: "Past perfect is needed: the discussing happened before the adjournment (both past events). 'Had discussed' = past perfect = completed before another past event (adjourning). 'Has discussed' = present perfect (wrong tense)."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2014, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Mr. Oshose has bought a _____.",
    options: [
      "Brand new black sports car",
      "Ford sports new black",
      "Brand new Ford sports black",
      "Brand new black Ford sports car"
    ],
    answer: "Brand new black Ford sports car",
    explanation: "Correct adjective order: Opinion/age → Size → Age → Shape → Colour → Origin/Brand → Material → Purpose → NOUN. 'Brand new' (age/condition) → 'black' (colour) → 'Ford' (brand/origin) → 'sports' (purpose/type) → 'car' (noun). Answer D."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2014, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Food prices _____ a lot since last year.",
    options: ["Have gone up", "Had gone up", "Went up", "Go up"],
    answer: "Have gone up",
    explanation: "'Since last year' signals present perfect tense — an action that started in the past and continues to or is relevant to the present. 'Have gone up' (present perfect) is correct. 'Had gone up' (past perfect) needs a reference point further in the past."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2014, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The answer to the sum is wrong. You _____ a mistake.",
    options: ["Must make", "Must have made", "Cannot have made", "May have made"],
    answer: "Must have made",
    explanation: "'Must have made' expresses logical deduction about a past action — we are certain (must) that a mistake was made in the past (have made). 'Must make' = present obligation. 'Cannot have made' = logical impossibility."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2014, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The notes the teacher dictated this morning _____ 40 pages.",
    options: ["Ran through", "Ran over", "Ran into", "Ran for"],
    answer: "Ran into",
    explanation: "'Run into' in this context means to amount to or total — the notes amounted to 40 pages. 'Run into' = to reach or amount to (a number). 'Ran through' = reviewed/rehearsed; 'ran over' = exceeded/went beyond."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2014, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "_____ I known, I would not have come.",
    options: ["If I have known", "If I had knew", "Had I known", "Have I known"],
    answer: "Had I known",
    explanation: "3rd conditional (past hypothetical): 'If I had known, I would not have come.' When the 'if' is omitted, the auxiliary inverts: 'Had I known...' = 'If I had known...' This is formal/literary inversion of the 3rd conditional."
  }
]

export default unibenEnglish2014
