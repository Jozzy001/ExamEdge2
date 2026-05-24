// UNIBEN Post-UTME 2021 — Use of English (Biological Sciences / Life Sciences)
// 15 questions — Shortest English paper in dataset
// Format: Sentence Interpretation + Comprehension + Idioms + Fill-in-blank + Vocabulary

const unibenLifeEnglish2021 = [

  // ===== SENTENCE INTERPRETATION (Q1-5) =====
  {
    subject: "English", topic: "Lexis & Structure", year: 2021, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Had it been possible to leave the country then, I would have done so. This means that:",
    options: [
      "I have not left the country and nothing will make me leave",
      "I wanted to leave the country and I did",
      "I will definitely leave the country one day",
      "I would have liked to leave the country, but I was not able to"
    ],
    answer: "I would have liked to leave the country, but I was not able to",
    explanation: "'Had it been possible' = past perfect conditional — the condition was NOT fulfilled. It was NOT possible to leave, therefore I did NOT leave, even though I wanted to."
  },
  {
    subject: "English", topic: "Idioms & Expressions", year: 2021, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "The proprietor and his accountant have had a **running battle** over the last financial report. This means they have had:",
    options: [
      "An argument which developed into a fight",
      "A series of arguments on the report",
      "To work hard to complete the report",
      "Difficulties understanding the report"
    ],
    answer: "A series of arguments on the report",
    explanation: "A 'running battle' is an ongoing, continuous conflict or series of disputes over a period of time. The proprietor and accountant have had repeated arguments — not a single fight — over the financial report."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2021, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Unless you do not want to become a teacher, there is no reason for not accepting the sponsorship. This means that you should:",
    options: [
      "Not refuse the sponsorship if you want to become a teacher",
      "Refuse the sponsorship if you want to become a teacher",
      "Not refuse the sponsorship if you do not want to become a teacher",
      "Refuse the sponsorship whether you want to be a teacher or not"
    ],
    answer: "Not refuse the sponsorship if you want to become a teacher",
    explanation: "The sentence uses double negatives: 'unless you do NOT want' = 'if you DO want'. If you want to become a teacher, there is no reason NOT to accept — you should not refuse the sponsorship."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2021, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "His chances of passing are very slim. This means that he:",
    options: ["Will pass", "Will not pass", "May not pass", "Ought to pass"],
    answer: "May not pass",
    explanation: "'Very slim chances' = very unlikely but not impossible. 'May not pass' is the most accurate — there is a small possibility of passing, but it is unlikely. 'Will not pass' would be too definitive."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2021, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "We would never have followed his advice if we had known his reputation. This means that we:",
    options: [
      "Knew what people said about him, so we refused to obey him",
      "Trusted him, but did not need any advice",
      "Followed his advice because we did not know him well",
      "Trusted him, but did not take his advice"
    ],
    answer: "Followed his advice because we did not know him well",
    explanation: "'Would never have followed...if we had known' = third conditional, past counterfactual. We DID follow his advice (the condition was not fulfilled — we did NOT know his reputation at the time)."
  },

  // ===== COMPREHENSION — TONY'S FARM (Q6-10) =====
  {
    subject: "English", topic: "Comprehension", year: 2021, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    passage: "Tony's farm is located far from the noisy city. The farm is surrounded by natural beauty — green trees, a flowing stream, and clear fresh air. Visitors often find it to be a place of peace and quiet, away from the hustle and bustle of city life. The farm is protected by a fading barbed wire fence that has been there for many years. The animals are well cared for and receive their regular clinical attention. Farmers from nearby villages come to collect animal droppings from the farm to use as manure, expecting that their harvest will improve. The farm manager, a disciplined and hardworking man, ensures that everything runs smoothly, imitating the best practices he has observed on other successful farms.",
    question: "The second sentence suggests that Tony's farm is good:",
    options: [
      "For religious camping and meditation",
      "For escaping from city noise",
      "As a rendezvous for lovers",
      "As a location for serious meetings"
    ],
    answer: "For escaping from city noise",
    explanation: "The passage says the farm is 'far from the noisy city' surrounded by 'natural beauty, green trees, flowing stream, and clear fresh air' — a place of peace and quiet away from the city. It is ideal for escaping city noise."
  },
  {
    subject: "English", topic: "Comprehension", year: 2021, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    passage: "Tony's farm is located far from the noisy city. The farm is surrounded by natural beauty — green trees, a flowing stream, and clear fresh air. Visitors often find it to be a place of peace and quiet, away from the hustle and bustle of city life. The farm is protected by a fading barbed wire fence that has been there for many years. The animals are well cared for and receive their regular clinical attention. Farmers from nearby villages come to collect animal droppings from the farm to use as manure, expecting that their harvest will improve. The farm manager, a disciplined and hardworking man, ensures that everything runs smoothly, imitating the best practices he has observed on other successful farms.",
    question: "From the description of the farm, we can infer that the barbed wire is:",
    options: [
      "Fading because of rain",
      "An unnecessary additional protection",
      "Colourless in appearance",
      "Probably green in colour"
    ],
    answer: "Probably green in colour",
    explanation: "The farm is surrounded by green trees and natural vegetation. The 'fading' barbed wire fence that has been there for years is likely covered in moss or paint that has faded — in a green natural environment, it is probably green or has turned green."
  },
  {
    subject: "English", topic: "Comprehension", year: 2021, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    passage: "Tony's farm is located far from the noisy city. The farm is surrounded by natural beauty — green trees, a flowing stream, and clear fresh air. Visitors often find it to be a place of peace and quiet, away from the hustle and bustle of city life. The farm is protected by a fading barbed wire fence that has been there for many years. The animals are well cared for and receive their regular clinical attention. Farmers from nearby villages come to collect animal droppings from the farm to use as manure, expecting that their harvest will improve. The farm manager, a disciplined and hardworking man, ensures that everything runs smoothly, imitating the best practices he has observed on other successful farms.",
    question: "'That they receive their regular clinical attention' means that:",
    options: [
      "The animals are taken to the clinic regularly",
      "The animals are under constant observation",
      "The animals are given regular vaccination",
      "The animals have a doctor at the farm"
    ],
    answer: "The animals are given regular vaccination",
    explanation: "'Clinical attention' refers to professional medical/veterinary care. 'Regular clinical attention' most specifically means regular health checks and vaccinations — standard veterinary care on a farm."
  },
  {
    subject: "English", topic: "Comprehension", year: 2021, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    passage: "Tony's farm is located far from the noisy city. The farm is surrounded by natural beauty — green trees, a flowing stream, and clear fresh air. Visitors often find it to be a place of peace and quiet, away from the hustle and bustle of city life. The farm is protected by a fading barbed wire fence that has been there for many years. The animals are well cared for and receive their regular clinical attention. Farmers from nearby villages come to collect animal droppings from the farm to use as manure, expecting that their harvest will improve. The farm manager, a disciplined and hardworking man, ensures that everything runs smoothly, imitating the best practices he has observed on other successful farms.",
    question: "The farmers who use the animal droppings from Tony's farm think that:",
    options: [
      "Their harvest will increase",
      "Their crops will remain healthy",
      "Their farms will be inexpensive",
      "Their farms will become models"
    ],
    answer: "Their harvest will increase",
    explanation: "The passage states farmers collect animal droppings 'expecting that their harvest will improve.' Improved harvest = increased harvest — they believe using the manure will boost their crop yields."
  },
  {
    subject: "English", topic: "Comprehension", year: 2021, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    passage: "Tony's farm is located far from the noisy city. The farm is surrounded by natural beauty — green trees, a flowing stream, and clear fresh air. Visitors often find it to be a place of peace and quiet, away from the hustle and bustle of city life. The farm is protected by a fading barbed wire fence that has been there for many years. The animals are well cared for and receive their regular clinical attention. Farmers from nearby villages come to collect animal droppings from the farm to use as manure, expecting that their harvest will improve. The farm manager, a disciplined and hardworking man, ensures that everything runs smoothly, imitating the best practices he has observed on other successful farms.",
    question: "Tony's farm manager can best be described as:",
    options: [
      "A good imitator",
      "A religious person",
      "A sympathetic individual",
      "A responsible worker"
    ],
    answer: "A responsible worker",
    explanation: "The farm manager is described as 'disciplined and hardworking' and ensures 'everything runs smoothly.' These qualities define a responsible worker. While he does imitate best practices, his primary defining trait is responsibility."
  },

  // ===== IDIOMS (Q11-12) =====
  {
    subject: "English", topic: "Idioms & Expressions", year: 2021, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "He **killed the goose that lays the golden egg** when he decided to spend his capital on buying a car.",
    options: [
      "Sacrificed future profits to satisfy present needs",
      "Was bad-natured",
      "Became a poor person",
      "Became an important person"
    ],
    answer: "Sacrificed future profits to satisfy present needs",
    explanation: "'Kill the goose that lays the golden egg' = destroy a source of continuing income or profit for immediate gain. Spending business capital (the goose) on a car (immediate satisfaction) sacrifices future profits."
  },
  {
    subject: "English", topic: "Idioms & Expressions", year: 2021, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "I **laughed up my sleeve** as he told tales of his exploits.",
    options: [
      "Was very pleased",
      "Was openly making fun of him",
      "Was secretly amused",
      "Laughed myself helpless"
    ],
    answer: "Was secretly amused",
    explanation: "'Laugh up one's sleeve' means to be secretly amused — to find something funny without showing it openly. The person is hiding their amusement (literally laughing into their sleeve to hide it)."
  },

  // ===== FILL-IN-BLANK (Q13-14) =====
  {
    subject: "English", topic: "Lexis & Structure", year: 2021, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "______ the long run, we will make enough profit.",
    options: ["In", "On", "At", "For"],
    answer: "In",
    explanation: "'In the long run' is the correct fixed phrase — meaning eventually, over a long period of time. It is a collocation: 'in the long run', 'in the short term', 'in the end'."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2021, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "The congregation ______ all sorts and conditions of men.",
    options: ["Composes", "Consists", "Comprises", "Conjectures"],
    answer: "Comprises",
    explanation: "'Comprises' = consists of, is made up of. 'The congregation comprises all sorts' = the congregation is made up of all sorts. Note: 'comprise' is used without 'of' — 'comprises of' is incorrect. 'Consists of' is correct but 'consists' alone (without 'of') would be wrong."
  },

  // ===== VOCABULARY SYNONYM (Q15) =====
  {
    subject: "English", topic: "Synonyms", year: 2021, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "The effect of the new policy on the masses is rather **negligible**.",
    options: ["Unimportant", "Useful", "Insignificant", "Negligent"],
    answer: "Insignificant",
    explanation: "Negligible means so small or unimportant as to be not worth considering. The closest synonym is insignificant — too small or unimportant to matter. 'Unimportant' is close but 'insignificant' better captures the 'too small to matter' sense."
  }
]

export default unibenLifeEnglish2021
