// UNIBEN Post-UTME 2012/2013 — Use of English
// 30 questions
// Faculty: Engineering & Physical Sciences
// Analysis notes:
//   PASSAGE: Why students fail JAMB/Post-UTME — argumentative (directly relevant to students!)
//   NEW FEATURE: Phonetics/consonant sound questions — first time in UNIBEN papers
//   RECURRING ANTONYMS: loquacious/quiet (2005, 2012), derogatory/complementary (2005, 2012)
//   NEW ANTONYMS: temperate/extreme, invaluable/useless, bellicose/gentle, ignoble/honourable
//   GRAMMAR: morale vs moral, laid vs lain, armed to the teeth, diagnose

const unibenEnglish2012 = [

  // =====================
  // COMPREHENSION — Why Students Fail JAMB/Post-UTME (Q1–5)
  // Analysis: Argumentative passage — directly about the exam students are sitting!
  // Very motivating and relatable — tests analytical reading
  // =====================
  {
    subject: "English", topic: "Comprehension", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    passage: "From one examination year to another, students seeking admission into Nigerian higher institutions of learning perform poorly in their examination papers, particularly in the English Language and Mathematics papers. Often, they blame JAMB and schools for their poor performance. In turn, JAMB and schools blame students for lack of seriousness and a number of other personal factors that make students perform poorly in English and Mathematics. Apart from the apathy that students have for these and other subjects, inadequate preparation for examinations is a major bane of good performance in JAMB and Post-UME examinations. Perhaps we should quickly mention students' heavy reliance on sharp practices of different types which they commit before, during and after examinations. Miscomprehension of questions and violation of instructions are no less a factor. Besides, are students even conscious that minor mistakes they make when they complete forms and share materials on the internet and during examinations can rob them of excellence and consequently admission?",
    question: "A suitable title for this passage is:",
    options: [
      "Students' Complaints About Poor Performance",
      "Why Students Perform Poorly in JAMB and Post-UME",
      "Students' and JAMB's Feelings About Poor Performance",
      "Factors That Can Enhance Good Performance in Examination"
    ],
    answer: "Why Students Perform Poorly in JAMB and Post-UME",
    explanation: "The passage analyses the various reasons why students perform poorly in JAMB and Post-UME examinations — including apathy, inadequate preparation, malpractice, and miscomprehension. Option B is the most accurate title as it directly addresses the passage's central focus."
  },
  {
    subject: "English", topic: "Comprehension", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    passage: "From one examination year to another, students seeking admission into Nigerian higher institutions of learning perform poorly... Often, they blame JAMB and schools for their poor performance. In turn, JAMB and schools blame students for lack of seriousness...",
    question: "Which of the following points is NOT implied in the passage?",
    options: [
      "Performance is generally poor in JAMB and Post-UME",
      "Students have their share of the blame",
      "Examination bodies are not to blame",
      "Performance in language and calculation subjects is worse"
    ],
    answer: "Examination bodies are not to blame",
    explanation: "The passage says JAMB and schools ALSO blame students — but it does not say examination bodies are completely blameless. Students blame JAMB; JAMB blames students. The passage presents blame going both ways, so C (examination bodies are not to blame) is NOT implied."
  },
  {
    subject: "English", topic: "Comprehension", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    passage: "Apart from the apathy that students have for these and other subjects, inadequate preparation for examinations is a major bane... students' heavy reliance on sharp practices... Miscomprehension of questions and violation of instructions are no less a factor.",
    question: "By implication in the passage, the least factor responsible for poor performance is:",
    options: [
      "Misunderstanding of questions and flouting instructions",
      "The examination body",
      "The students themselves",
      "Examination malpractice at different stages"
    ],
    answer: "The examination body",
    explanation: "The passage focuses primarily on student-related factors: apathy, inadequate preparation, malpractice, miscomprehension. The examination body (JAMB) is mentioned only as something students blame — not as an actual cause. Therefore, the examination body is the least implicated factor."
  },
  {
    subject: "English", topic: "Comprehension", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    passage: "Apart from the apathy that students have for these and other subjects, inadequate preparation for examinations is a major bane of good performance in JAMB and Post-UME examinations.",
    question: "What is the leading pre-examination factor that the writer holds responsible for failure in English and Mathematics?",
    options: [
      "Lack of preparation",
      "Apathy for the subjects",
      "Attitude of the examining body",
      "Reliance on illegal aids and materials"
    ],
    answer: "Apathy for the subjects",
    explanation: "The passage lists factors with 'Apart from the apathy... inadequate preparation is a major bane.' By saying 'apart from apathy,' the writer acknowledges apathy first — making it the primary/leading factor, ahead of inadequate preparation."
  },
  {
    subject: "English", topic: "Comprehension", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    passage: "Apart from the apathy that students have for these and other subjects...",
    question: "As used in the passage, the word apathy suggests:",
    options: [
      "Fear of some subjects",
      "Animosity towards some subjects",
      "Laziness and complexity of some subjects",
      "Lack of interest in and love for some subjects"
    ],
    answer: "Lack of interest in and love for some subjects",
    explanation: "Apathy means a lack of interest, enthusiasm, or concern. In this context, students' apathy towards English and Mathematics means they have no interest in or love for the subjects — they don't care about them. Fear and animosity are stronger, more specific emotions than apathy."
  },

  // =====================
  // VOCABULARY / SYNONYMS (Q6–10)
  // =====================
  {
    subject: "English", topic: "Synonyms", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The tenure of the principal was an **unmitigated** disaster.",
    options: ["Unfortunate", "Unexpected", "Unqualified", "Unprecedented"],
    answer: "Unqualified",
    explanation: "Unmitigated means absolute, complete, and without any qualification or exception — used to intensify a negative noun. 'An unmitigated disaster' = a total, complete disaster. The synonym is 'unqualified' — also meaning absolute/complete. Unprecedented means never happened before."
  },
  {
    subject: "English", topic: "Synonyms", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Among the mountains in Cameroon, there is an **extinct** volcano.",
    options: ["Inactive", "Expired", "Extinguished", "Obsolete"],
    answer: "Inactive",
    explanation: "An extinct volcano is one that has not erupted in recorded history and is unlikely to erupt again — it is inactive. 'Expired' and 'extinguished' suggest a process of ending; 'obsolete' means out of date — none fit as precisely as 'inactive'."
  },
  {
    subject: "English", topic: "Synonyms", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The dispute between the two countries had resulted in the **severance** of diplomatic relations.",
    options: ["Stopping", "Breaking", "Redrawing", "Counselling"],
    answer: "Breaking",
    explanation: "Severance means the action of ending a connection or relationship — cutting it off. The severance of diplomatic relations means breaking those ties. 'Breaking' is the most accurate synonym — it captures the decisive, clean ending of the relationship."
  },
  {
    subject: "English", topic: "Synonyms", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The loud noise of the police **siren** woke us up.",
    options: ["Clamour", "Ding-dong", "Whistle", "Wail"],
    answer: "Wail",
    explanation: "A siren makes a wailing sound — a long, high-pitched, fluctuating cry. 'Wail' is the most accurate description of the sound a police/ambulance siren makes. A clamour is general loud noise; ding-dong is a bell sound; a whistle is shorter and sharper."
  },
  {
    subject: "English", topic: "Synonyms", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The patient is suffering from an **ailment** that keeps recurring.",
    options: [
      "A chronic ailment",
      "A frequent ailment",
      "An acute ailment",
      "A constant ailment"
    ],
    answer: "A chronic ailment",
    explanation: "An ailment that keeps recurring is one that comes back repeatedly over a long period — this is the definition of a chronic condition. Chronic means persisting for a long time or constantly recurring. Acute means sudden and severe (opposite). Frequent is close but chronic is the precise medical term."
  },

  // =====================
  // SENTENCE COMPLETION (Q11–15)
  // =====================
  {
    subject: "English", topic: "Lexis & Structure", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The rise in workers' pay is truly a _____ booster.",
    options: ["Morale", "Moral", "Soul", "Spirit"],
    answer: "Morale",
    explanation: "Morale = the confidence, enthusiasm, and discipline of a group. A 'morale booster' is something that increases the team's spirit and confidence. 'Moral' relates to right and wrong behaviour — 'a moral booster' is not standard. These two are very commonly confused."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "For the sake of clarity, the professor was asked to _____ on the hypothesis.",
    options: ["Expand sheet", "Expand", "Expand it", "Explicate"],
    answer: "Explicate",
    explanation: "Explicate means to analyse and develop an idea in detail — to explain and clarify something complex. 'Expand on' is also correct but none of the options say 'expand on'. 'Explicate' is the most precise single-word answer for making a hypothesis clearer."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The doctor did not find it difficult to _____ the patient's ailment.",
    options: ["Discover", "Diagnose", "Divine", "Diagnose"],
    answer: "Diagnose",
    explanation: "Diagnose means to identify an illness or problem through examination. A doctor diagnoses an ailment — this is the specific medical term for identifying what is wrong with a patient. 'Discover' is too general; 'divine' means to guess supernaturally."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The new riot squad was armed to the _____.",
    options: ["Head", "Neck", "Teeth", "Feet"],
    answer: "Teeth",
    explanation: "'Armed to the teeth' is a fixed idiom meaning heavily armed with weapons. It is an established English expression — the preposition and body part are fixed. No other combination (head, neck, feet) is the accepted idiom."
  },
  {
    subject: "English", topic: "Lexis & Structure", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The controversy has been _____ to rest.",
    options: ["Lean", "Lead", "Laid", "Lain"],
    answer: "Laid",
    explanation: "'Lay to rest' means to end or resolve something — to put it at peace. Past participle of 'lay' is 'laid': 'has been laid to rest.' 'Lain' is the past participle of 'lie' (to recline) — wrong verb here. 'Lead' and 'lean' are completely unrelated."
  },

  // =====================
  // ANTONYMS (Q16–25)
  // Analysis: 10 antonym questions — includes 2 RECURRING words from 2005/2006
  // =====================
  {
    subject: "English", topic: "Antonyms", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The officer asked for a more **temperate** assessment of the matter.",
    options: ["Extreme", "Moderate", "Radical", "Humane"],
    answer: "Extreme",
    explanation: "Temperate means showing moderation and self-restraint — calm and measured. Its antonym is extreme — going to the maximum point, showing no moderation. Moderate is actually a synonym of temperate, not an antonym."
  },
  {
    subject: "English", topic: "Antonyms", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The father's advice to me was quite **invaluable**.",
    options: ["Useless", "Useful", "Helpful", "Unflinching"],
    answer: "Useless",
    explanation: "Invaluable means extremely valuable — so precious as to be beyond price. Its antonym is useless — having no value or practical use. Be careful: 'invalid' ≠ 'invaluable'. Invaluable = very valuable (not valueless). Useful and helpful are synonyms, not antonyms."
  },
  {
    subject: "English", topic: "Antonyms", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Musa hates Hadiza for her constant **bellicose** behaviour.",
    options: ["Violent", "Gentle", "Meek", "Troublesome"],
    answer: "Gentle",
    explanation: "Bellicose means aggressive and eager to fight — warlike. Its antonym is gentle — mild, kind, and peaceful. Meek is also close but implies excessive submission; gentle captures the true opposite of bellicose aggression. Violent and troublesome are synonyms."
  },
  {
    subject: "English", topic: "Antonyms", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "There is much more **indifference** than continuity in his behaviour.",
    options: ["Concern", "Nonchalance", "Willingness", "Inconsistency"],
    answer: "Concern",
    explanation: "Indifference means lack of interest, concern, or sympathy. Its antonym is concern — active interest and care. Nonchalance is a synonym of indifference (casual lack of concern). Willingness is related but less precise than concern as the direct opposite."
  },
  {
    subject: "English", topic: "Antonyms", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    isHotTopic: true,
    faculty: ["engineering", "physicalsciences"],
    question: "My brother married a **loquacious** woman.",
    options: ["Quiet", "Busy", "Talkative", "Beautiful"],
    answer: "Quiet",
    explanation: "Loquacious means very talkative — talking a great deal. Its antonym is quiet — not talking much, reserved in speech. Note: taciturn is the more precise antonym but is not given as an option here. ★ RECURRING — loquacious also appeared in 2005/2006 (antonym: taciturn)."
  },
  {
    subject: "English", topic: "Antonyms", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    isHotTopic: true,
    faculty: ["engineering", "physicalsciences"],
    question: "Abdul is fond of the teachings of his teacher, though his substitute makes **derogatory** remarks about him.",
    options: ["Unpleasant", "Complementary", "Expensive", "Insulting"],
    answer: "Complementary",
    explanation: "Derogatory means showing a critical or disrespectful attitude — insulting. Its antonym is complementary — expressing admiration or approval. Note: 'complementary' (with an 'e') means expressing praise; 'complimentary' is the more common spelling. ★ RECURRING — appeared in 2005/2006."
  },
  {
    subject: "English", topic: "Antonyms", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The minister has finally been dropped from the present cabinet because of his **ignoble** act.",
    options: ["Criminal", "Ignorant", "Honourable", "Selfish"],
    answer: "Honourable",
    explanation: "Ignoble means not honourable in character or purpose — base, dishonorable. Its antonym is honourable — bringing or deserving honour and respect. Criminal and selfish describe types of wrongdoing; ignorant means lacking knowledge — none are antonyms of ignoble."
  },
  {
    subject: "English", topic: "Antonyms", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "His **cruelty** to his brother defies logical explanation.",
    options: ["Demands", "Offers", "Projects", "Precludes"],
    answer: "Demands",
    explanation: "Defy means to resist, challenge, or go against — to make something impossible. Its antonym in this context is demands — to require or call for. If cruelty 'defies explanation' (makes explanation impossible), the antonym would be 'demands explanation' (makes explanation necessary/required)."
  },
  {
    subject: "English", topic: "Antonyms", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Orenia balances the pan on her head with **accustomed** ease.",
    options: ["Convincing", "Surprising", "Unweary", "Casual"],
    answer: "Surprising",
    explanation: "Accustomed means familiar with something through habit — customary. 'Accustomed ease' means the ease that comes from long practice/habit (expected). Its antonym is surprising — something unexpected and remarkable. If something is accustomed/expected, its opposite is surprising/unexpected."
  },

  // =====================
  // PHONETICS — Consonant Sounds (Q26–30)
  // Analysis: NEW topic — first time phonetics appeared in UNIBEN papers ★
  // =====================
  {
    subject: "English", topic: "Phonetics & Stress", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Which word has the same consonant sound as the underlined letters in 'sheep' (sh)?",
    options: ["Official", "Vision", "Seizure", "Revision"],
    answer: "Official",
    explanation: "The 'sh' in 'sheep' represents the /ʃ/ sound (voiceless palato-alveolar fricative). In 'official', the 'ci' makes the same /ʃ/ sound: of-fi-cial. 'Vision', 'seizure', and 'revision' all contain the /ʒ/ sound (voiced equivalent) — not /ʃ/."
  },
  {
    subject: "English", topic: "Phonetics & Stress", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Which word has the same consonant sound as the underlined letters in 'auto' (th)?",
    options: ["Rather", "Mother", "Do", "That"],
    answer: "Do",
    explanation: "Note: 'auto' does not typically contain 'th'. This question likely refers to the /θ/ or /ð/ sound. The voiceless 'th' /θ/ in words like 'think' corresponds to 'do' if the question tests the /d/ sound vs 'th'. UNIBEN answer is C (do). Students should verify the exact word and underlined letters."
  },
  {
    subject: "English", topic: "Phonetics & Stress", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Which word has the same consonant sound as the underlined letters in 'chant' (ch)?",
    options: ["Cheat", "Character", "Chief", "Chemistry"],
    answer: "Cheat",
    explanation: "The 'ch' in 'chant' represents the /tʃ/ sound (as in church). 'Cheat' also uses /tʃ/: /tʃiːt/. 'Character' uses /k/ (Greek-origin word). 'Chemistry' also uses /k/. 'Chief' uses /tʃ/ — but UNIBEN answer is A (cheat). Both cheat and chief have /tʃ/ — cheat is the standard answer."
  },
  {
    subject: "English", topic: "Phonetics & Stress", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Which word has the same consonant sound as the underlined letters in 'behind' (h)?",
    options: ["War", "Hour", "Honour", "Honest"],
    answer: "War",
    explanation: "The 'h' in 'behind' is pronounced /h/. In 'hour', 'honour', and 'honest', the 'h' is silent (these are French-origin words). 'War' starts with /w/ — not /h/. UNIBEN answer is A (war). This question is testing which word does NOT have a silent 'h' — but war has no 'h' at all. Students should verify."
  },
  {
    subject: "English", topic: "Phonetics & Stress", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Which word has the same consonant sound as the underlined letters in 'barge' (g)?",
    options: ["Gin", "Guest", "Gasp", "Grade"],
    answer: "Gin",
    explanation: "The 'g' in 'barge' represents the soft /dʒ/ sound (like the 'j' in 'judge'). 'Gin' also uses soft g: /dʒɪn/. 'Guest', 'gasp', and 'grade' all use hard g: /g/. The soft /dʒ/ sound appears before 'e', 'i', and 'y' in words of Latin/French origin."
  }
]

export default unibenEnglish2012
