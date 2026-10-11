// EXAMEDGENG — ENGLISH STUDY GUIDES (EXTRA)
// Guides for English topics that did not have one yet.
// Keys match the topic names in the question bank exactly.
//
// HOW TO USE:
// 1. Save this file as src/data/studyGuidesEnglishExtra.js
// 2. In src/data/studyGuides.js add at the top:
//      import ENGLISH_EXTRA_GUIDES from "./studyGuidesEnglishExtra"
// 3. At the very end of the STUDY_GUIDES object (next to ...BIOLOGY_EXTRA_GUIDES), add:
//      ...ENGLISH_EXTRA_GUIDES,

const ENGLISH_EXTRA_GUIDES = {

  // ==========================================
  // ENGLISH — CLOZE TEST
  // ==========================================
  "Cloze Test": {
    subject: "English",
    title: "Cracking the Cloze Test",
    icon: "🧩",
    estimatedTime: "3 min read",
    sections: [
      { heading: "What is a Cloze Test?", type: "text",
        content: "A cloze test is a passage with numbered gaps. For each gap you choose the word that fits best in meaning AND grammar. It tests vocabulary, grammar and your understanding of the whole passage at the same time." },
      { heading: "Step-by-Step Strategy", type: "steps", items: [
        "Skim the WHOLE passage first (ignore the gaps) to get the topic, tone and direction.",
        "Go back to each gap and read the full sentence, not just the words next to the blank.",
        "Predict a word BEFORE looking at the options.",
        "Check grammar: does the option fit as a noun, verb, adjective or preposition? Does the tense or agreement match?",
        "Check meaning: does the option fit the idea of the sentence and the paragraph?",
        "When done, read the passage again with all your answers in place. It should sound natural from start to finish."
      ]},
      { heading: "Clues to Look For", type: "cards", items: [
        { title: "Grammatical clues", body: "Articles (a/an/the), prepositions that always go with certain words (depend ON, capable OF), tense markers (yesterday, since, already) and subject-verb agreement." },
        { title: "Signal words", body: "But, however, although, yet = contrast (opposite idea). And, also, similarly = addition (same idea). Because, so, therefore = cause and result." },
        { title: "Collocations", body: "Words that naturally go together: make a decision (not do), heavy rain (not strong), take place, pay attention, break a record." },
        { title: "Context clues", body: "The sentences before and after the gap often explain, repeat or contrast the missing word." }
      ]},
      { heading: "Trap Answers to Avoid", type: "warning", items: [
        "An option that fits the meaning but is the wrong part of speech.",
        "An option that sounds fine alone but does not match the tone of the whole passage.",
        "Choosing too fast without checking the sentence that follows the gap.",
        "Ignoring preposition and tense clues right beside the gap."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "If two options both seem right, test each in the full sentence and ask: which one also agrees with the sentence before and after? The better fit with the whole paragraph is usually correct." }
    ]
  },

  // ==========================================
  // ENGLISH — LITERATURE
  // ==========================================
  "Literature": {
    subject: "English",
    title: "Literature in English — Key Terms and Devices",
    icon: "📚",
    estimatedTime: "4 min read",
    sections: [
      { heading: "What is Tested", type: "text",
        content: "Literature questions test your knowledge of the three genres (prose, poetry, drama), literary devices, and the ability to identify theme, character, setting and tone from a passage or text. Learn the definitions below and practise recognising each device in a sentence." },
      { heading: "The Three Genres", type: "cards", items: [
        { title: "Prose", body: "Writing in ordinary sentences and paragraphs: novels, short stories, essays, biographies." },
        { title: "Poetry", body: "Writing arranged in lines and stanzas, with attention to rhythm, imagery and sound. Types: sonnet, ode, elegy, ballad, lyric, epic." },
        { title: "Drama", body: "Writing meant to be performed: acts, scenes, dialogue, stage directions. Types: tragedy, comedy, tragicomedy." }
      ]},
      { heading: "Elements of Prose and Drama", type: "cards", items: [
        { title: "Plot", body: "The sequence of events: exposition, rising action, climax, falling action, resolution." },
        { title: "Theme", body: "The central idea or message of the work (e.g. love, power, greed, tradition vs modernity)." },
        { title: "Setting", body: "Time and place of the story." },
        { title: "Protagonist and antagonist", body: "Protagonist = main character. Antagonist = the person or force opposing the protagonist." },
        { title: "Point of view", body: "First person (I), third person limited (one character's view), third person omniscient (narrator knows everything)." },
        { title: "Soliloquy and aside", body: "Soliloquy = a character speaks thoughts alone on stage. Aside = a brief remark to the audience that other characters do not hear." }
      ]},
      { heading: "Figures of Speech", type: "cards", items: [
        { title: "Simile", body: "Comparison using 'like' or 'as': 'brave as a lion'." },
        { title: "Metaphor", body: "Direct comparison without 'like' or 'as': 'time is a thief'." },
        { title: "Personification", body: "Giving human qualities to non-human things: 'the wind whispered'." },
        { title: "Hyperbole", body: "Deliberate exaggeration: 'I have told you a million times'." },
        { title: "Irony", body: "Verbal = saying the opposite of what you mean. Dramatic = the audience knows something the character does not. Situational = the outcome is the opposite of what is expected." },
        { title: "Oxymoron", body: "Two opposite words together: 'bitter sweet', 'deafening silence'." },
        { title: "Paradox", body: "A statement that seems contradictory but contains truth." },
        { title: "Alliteration, assonance, onomatopoeia", body: "Alliteration = repeated consonant sounds. Assonance = repeated vowel sounds. Onomatopoeia = words that imitate sound (buzz, bang)." },
        { title: "Euphemism", body: "A mild word used in place of a harsh one: 'passed away' for 'died'." },
        { title: "Satire", body: "Using humour or ridicule to criticise people, society or institutions." }
      ]},
      { heading: "Strategy", type: "steps", items: [
        "Read the passage or lines closely before looking at the options.",
        "For device questions, check the exact wording: 'like/as' = simile, no 'like/as' = metaphor.",
        "For theme questions, choose the idea that runs through the whole passage, not a single detail.",
        "For tone/mood questions, look at word choice: are the words gloomy, joyful, angry or sarcastic?",
        "For questions on your set texts, revise plot, main characters, setting and themes for each."
      ]},
      { heading: "Trap Answers to Avoid", type: "warning", items: [
        "Confusing simile and metaphor.",
        "Confusing theme (the message) with plot (what happens).",
        "Confusing tone (author's attitude) with mood (feeling created in the reader).",
        "Mixing up soliloquy (alone, to oneself) with aside (to the audience while others are present)."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Simile = like/as. Metaphor = is. Personification = human qualities on things. Hyperbole = exaggeration. Dramatic irony = audience knows more than the character. For any literature question, always tie your answer back to the text." }
    ]
  },

  // ==========================================
  // ENGLISH — STRESS
  // ==========================================
  "Stress": {
    subject: "English",
    title: "Stress — Word Stress and Emphatic Stress",
    icon: "🎯",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Two Kinds of Stress", type: "text",
        content: "WORD STRESS is the syllable pronounced with more force inside a single word (e.g. TEA-cher, be-GIN). EMPHATIC STRESS is the word in a sentence that the speaker stresses to show importance, usually marked in capitals (e.g. 'She bought a RED dress' means it was red, not blue)." },
      { heading: "Word Stress Rules", type: "cards", items: [
        { title: "Two-syllable nouns and adjectives", body: "Usually stressed on the FIRST syllable: TAble, HAPpy, SIStER, FAmous." },
        { title: "Two-syllable verbs", body: "Usually stressed on the SECOND syllable: reTURN, beLIEVE, deCIDE, aRRIVE." },
        { title: "Words ending in -tion, -sion, -ic, -ical, -ity", body: "Stress falls on the syllable just BEFORE the ending: eduCAtion, deciSION, ecoNOMic, ciVILity." },
        { title: "Compound nouns", body: "Usually stressed on the FIRST part: BLACKboard, FOOTball, TOOTHpaste." },
        { title: "Noun/verb pairs", body: "The same spelling can shift stress: REcord (noun) vs reCORD (verb); PREsent (noun) vs preSENT (verb)." }
      ]},
      { heading: "Emphatic Stress", type: "cards", items: [
        { title: "Rule", body: "The word in CAPITALS is the new or contrasted information. The question the sentence best answers is the one that asks about that word." },
        { title: "Example", body: "'Ada bought a BOOK.' Best answers: 'What did Ada buy?' (not 'Who bought a book?')." },
        { title: "Example", body: "'ADA bought a book.' Best answers: 'Who bought a book?'" }
      ]},
      { heading: "Strategy", type: "steps", items: [
        "Say the word aloud and feel which syllable is loudest and longest.",
        "Count the syllables, then apply the rule for its part of speech or ending.",
        "For odd-one-out, find the three words sharing a pattern. The fourth is the answer.",
        "For emphatic stress, find the capitalised word and choose the question that asks for that exact information."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Nouns and adjectives: stress the front. Verbs: stress the back. -tion/-sion/-ic: stress the syllable before the ending. Emphatic stress: the capitalised word is the answer to the hidden question." }
    ]
  },

  // ==========================================
  // ENGLISH — VOWEL SOUNDS
  // ==========================================
  "Vowel Sounds": {
    subject: "English",
    title: "Vowel Sounds — Monophthongs and Diphthongs",
    icon: "🔤",
    estimatedTime: "4 min read",
    sections: [
      { heading: "The Golden Rule", type: "text",
        content: "Vowel sound questions are about SOUND, not spelling. Always say the word in your head. The letters 'ou', 'ea', 'oo', 'a' and 'o' each represent several different sounds." },
      { heading: "Pure Vowels (Monophthongs)", type: "cards", items: [
        { title: "/iː/ as in 'seat'", body: "see, key, believe, receive, people, machine, scene." },
        { title: "/ɪ/ as in 'sit'", body: "bit, busy, women, build, pretty, village." },
        { title: "/e/ as in 'bed'", body: "head, bread, said, friend, many, any, bury." },
        { title: "/æ/ as in 'cat'", body: "man, hat, black, apple, family." },
        { title: "/ɑː/ as in 'car'", body: "father, calm, bath, heart, aunt, laugh, class." },
        { title: "/ɒ/ as in 'hot'", body: "dog, clock, cough, what, wash, watch." },
        { title: "/ɔː/ as in 'door'", body: "more, born, law, caught, thought, walk, four, war." },
        { title: "/ʊ/ as in 'book'", body: "look, foot, put, full, could, should, woman." },
        { title: "/uː/ as in 'food'", body: "moon, true, shoe, through, fruit, juice, rule." },
        { title: "/ʌ/ as in 'cup'", body: "love, blood, come, done, enough, rough, money, mother." },
        { title: "/ɜː/ as in 'bird'", body: "nurse, learn, word, turn, her, early, journey." },
        { title: "/ə/ (schwa)", body: "The weak vowel in unstressed syllables: ABOUT, TEACHer, banAna." }
      ]},
      { heading: "Diphthongs (Gliding Vowels)", type: "cards", items: [
        { title: "/eɪ/ as in 'cake'", body: "great, break, weigh, they, eight, vein, steak." },
        { title: "/aɪ/ as in 'time'", body: "fly, buy, high, eye, height, tie." },
        { title: "/ɔɪ/ as in 'boy'", body: "toy, coin, noise, voice, enjoy." },
        { title: "/aʊ/ as in 'now'", body: "out, brown, mouth, doubt, flower, hour." },
        { title: "/əʊ/ as in 'go'", body: "home, road, though, know, low, soul, toe." },
        { title: "/ɪə/ as in 'ear'", body: "here, beer, idea, fierce, cheer." },
        { title: "/eə/ as in 'air'", body: "care, bear, there, hair, their, wear." },
        { title: "/ʊə/ as in 'pure'", body: "tour, cure, poor, sure." }
      ]},
      { heading: "Strategy", type: "steps", items: [
        "Say each word aloud in your head. Ignore spelling.",
        "Isolate the vowel sound in the underlined or given word.",
        "Find the options that contain exactly the same vowel sound.",
        "Watch for look-alike traps (cough, though, through, tough, thought all differ).",
        "If stuck, find a common word with that sound (e.g. 'seat' for /iː/) and compare."
      ]},
      { heading: "Trap Answers to Avoid", type: "warning", items: [
        "'Ough' has many sounds: cough /ɒ/, tough /ʌ/, though /əʊ/, through /uː/, thought /ɔː/.",
        "'Ea' can be /iː/ (beat), /e/ (head) or /eɪ/ (great).",
        "'Oo' can be /uː/ (food) or /ʊ/ (book), and 'blood' and 'flood' are /ʌ/.",
        "Long vowels (/iː/, /uː/, /ɑː/, /ɔː/, /ɜː/) are different from short ones even when spelling looks alike."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Think of one anchor word per sound: seat, sit, bed, cat, car, hot, door, book, food, cup, bird. Then compare the test word to your anchors." }
    ]
  },

  // ==========================================
  // ENGLISH — CONSONANT SOUNDS
  // ==========================================
  "Consonant Sounds": {
    subject: "English",
    title: "Consonant Sounds — Voiced, Voiceless and Tricky Letters",
    icon: "🗣️",
    estimatedTime: "3 min read",
    sections: [
      { heading: "The Golden Rule", type: "text",
        content: "As with vowels, consonant sound questions test SOUND, not spelling. The same letter or letter pair can represent different sounds, and different letters can represent the same sound." },
      { heading: "Voiced vs Voiceless", type: "cards", items: [
        { title: "Voiceless (vocal cords do not vibrate)", body: "/p/ /t/ /k/ /f/ /θ/ /s/ /ʃ/ /tʃ/ /h/. Put a finger on your throat: no buzz." },
        { title: "Voiced (vocal cords vibrate)", body: "/b/ /d/ /g/ /v/ /ð/ /z/ /ʒ/ /dʒ/ /m/ /n/ /ŋ/ /l/ /r/ /w/ /j/. You feel a buzz." }
      ]},
      { heading: "Important Sounds", type: "cards", items: [
        { title: "/θ/ (voiceless th)", body: "think, three, bath, author, mathematics, thought." },
        { title: "/ð/ (voiced th)", body: "this, that, mother, breathe, though, weather." },
        { title: "/ʃ/ (sh)", body: "ship, nation, special, machine, sugar, chef, ocean." },
        { title: "/ʒ/ (zh)", body: "measure, vision, pleasure, garage, usual, treasure." },
        { title: "/tʃ/ (ch)", body: "church, watch, match, question, nature, picture." },
        { title: "/dʒ/ (j)", body: "judge, giant, age, bridge, gem, soldier." },
        { title: "/ŋ/ (ng)", body: "sing, think, finger, longer, tongue." },
        { title: "/k/ and /s/ for c", body: "c = /k/ before a, o, u (cat, cold). c = /s/ before e, i, y (city, cycle)." },
        { title: "/g/ and /dʒ/ for g", body: "g = /g/ in go, give. g = /dʒ/ in gem, giant, gym (but not always: get, girl)." }
      ]},
      { heading: "Silent Letters", type: "cards", items: [
        { title: "Silent k", body: "know, knee, knife, knock." },
        { title: "Silent w", body: "write, wrong, wrist, answer, two." },
        { title: "Silent b", body: "lamb, comb, thumb, doubt, debt, climb." },
        { title: "Silent gh", body: "night, light, though, daughter, neighbour." },
        { title: "Silent h", body: "hour, honest, heir, rhythm, ghost." },
        { title: "Silent l and t", body: "calm, half, walk, talk / listen, castle, often, whistle." }
      ]},
      { heading: "Strategy", type: "steps", items: [
        "Say the word aloud and isolate the sound of the underlined letters.",
        "Decide whether it is voiced or voiceless.",
        "Look for options with the same sound, not the same letters.",
        "Remember 'ch' can be /tʃ/ (church), /k/ (chemistry, school) or /ʃ/ (machine, chef)."
      ]},
      { heading: "Trap Answers to Avoid", type: "warning", items: [
        "'Th' has two sounds: think /θ/ vs this /ð/.",
        "'Ch' in 'chemistry' is /k/, not /tʃ/.",
        "'Ti' in 'nation' and 'special' is /ʃ/, not /t/ or /s/.",
        "'s' in 'measure' and 'vision' is /ʒ/, and 's' in 'sure' is /ʃ/."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Group sounds by anchor words: ship /ʃ/, measure /ʒ/, church /tʃ/, judge /dʒ/, think /θ/, this /ð/, sing /ŋ/. Match the test word to the nearest anchor." }
    ]
  },

  // ==========================================
  // ENGLISH — RHYMES
  // ==========================================
  "Rhymes": {
    subject: "English",
    title: "Rhymes — Matching End Sounds",
    icon: "🎶",
    estimatedTime: "2 min read",
    sections: [
      { heading: "What is a Rhyme?", type: "text",
        content: "Two words rhyme when their final stressed vowel sound AND everything after it are the same. Rhyme is about SOUND, not spelling: 'great' rhymes with 'weight', not with 'heat'." },
      { heading: "Common Rhyming Groups", type: "cards", items: [
        { title: "/iːt/", body: "beat, feet, meat, heat, seat, neat, receipt, complete." },
        { title: "/eɪt/", body: "great, weight, late, plate, straight, wait." },
        { title: "/ʌm/", body: "come, some, drum, thumb, numb, glum." },
        { title: "/əʊ/", body: "go, show, low, know, though, toe, sew, dough." },
        { title: "/uː/", body: "through, blue, true, shoe, flew, two, you, who." },
        { title: "/ɔːt/", body: "thought, caught, taught, bought, sort, court." },
        { title: "/aɪt/", body: "night, light, write, site, height, kite." },
        { title: "/ɑːm/ and /ɔːm/", body: "calm, palm, balm / storm, form, warm." }
      ]},
      { heading: "Strategy", type: "steps", items: [
        "Say the given word aloud and find its final vowel plus the consonants after it.",
        "Say each option aloud. Ignore the spelling.",
        "Choose the option whose ending sound matches exactly.",
        "Beware of words that look alike but do not rhyme (cough/rough/though/through)."
      ]},
      { heading: "Trap Answers to Avoid", type: "warning", items: [
        "Eye-rhymes: words spelt alike that sound different: 'cough' /kɒf/, 'rough' /rʌf/, 'though' /ðəʊ/, 'through' /θruː/.",
        "'Bomb' /bɒm/ does not rhyme with 'comb' /kəʊm/.",
        "'Pint' /paɪnt/ does not rhyme with 'mint' /mɪnt/.",
        "'Read' (present) rhymes with 'feed'. 'Read' (past) rhymes with 'bed'."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Cover the first letters and compare only the ending: 'weight' and 'great' both end in /eɪt/, so they rhyme. Always trust your ear over your eye." }
    ]
  },

  // ==========================================
  // ENGLISH — LEXIS
  // ==========================================
  "Lexis": {
    subject: "English",
    title: "Lexis — Choosing the Right Word",
    icon: "📖",
    estimatedTime: "3 min read",
    sections: [
      { heading: "What is Lexis?", type: "text",
        content: "Lexis means vocabulary. Lexis questions test whether you can choose the word that best fits the meaning, tone and grammar of a sentence, and whether you know how words combine and differ in meaning." },
      { heading: "Common Question Types", type: "cards", items: [
        { title: "Word choice", body: "Pick the word that completes the sentence best: 'The manager gave a ______ reply' (brief, not short-cut)." },
        { title: "Collocation", body: "Words that naturally partner: make a mistake, do homework, heavy traffic, strong tea, give advice, pay a visit." },
        { title: "Easily confused words", body: "affect (verb) / effect (noun); principal (head or main) / principle (rule); stationary (still) / stationery (paper); advice (noun) / advise (verb); complement (completes) / compliment (praise)." },
        { title: "Register", body: "Formal vs informal: 'purchase' (formal) vs 'buy' (neutral), 'commence' vs 'start'." },
        { title: "Word in context", body: "Choose the meaning that fits the sentence, because many words have more than one meaning (bank, bear, light, fine)." }
      ]},
      { heading: "Strategy", type: "steps", items: [
        "Read the whole sentence and understand its main idea.",
        "Predict the word you expect before checking the options.",
        "Check grammar: noun, verb, adjective, adverb needed?",
        "Check collocation: does the word naturally pair with its neighbour?",
        "Eliminate options that are too strong, too weak or wrong in tone."
      ]},
      { heading: "Trap Answers to Avoid", type: "warning", items: [
        "Words with similar spelling but different meaning (principal/principle, stationary/stationery).",
        "Words with the right meaning but wrong collocation ('do a mistake').",
        "Options that are correct words but the wrong part of speech.",
        "Extreme words (always, never, completely) when the sentence is mild."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "If you are unsure, say the sentence aloud with each option. The correct word almost always sounds natural. Build a notebook of confused-word pairs and review it often." }
    ]
  },

  // ==========================================
  // ENGLISH — OPPOSITE IN MEANING
  // ==========================================
  "Opposite in Meaning": {
    subject: "English",
    title: "Opposite in Meaning (Antonyms)",
    icon: "↔️",
    estimatedTime: "3 min read",
    sections: [
      { heading: "What is Tested", type: "text",
        content: "You are given a word (often underlined or in capitals) in a sentence and asked to choose the option that means the OPPOSITE. Read the sentence for context, because many words have more than one meaning." },
      { heading: "Strategy", type: "steps", items: [
        "Find the word being tested and decide its meaning in THIS sentence.",
        "Think of the opposite yourself before reading the options.",
        "Make sure the opposite is the same part of speech.",
        "Eliminate synonyms (same meaning) first. They are the most common trap.",
        "Put your choice into the sentence to check that it makes sense."
      ]},
      { heading: "Common Opposite Pairs", type: "cards", items: [
        { title: "Loquacious ↔ Taciturn", body: "Very talkative ↔ saying very little." },
        { title: "Diligent ↔ Indolent", body: "Hardworking ↔ lazy." },
        { title: "Generous ↔ Stingy / Parsimonious", body: "Giving freely ↔ unwilling to spend or give." },
        { title: "Extravagant ↔ Frugal", body: "Wasteful with money ↔ careful and thrifty." },
        { title: "Zenith ↔ Nadir", body: "Highest point ↔ lowest point." },
        { title: "Ephemeral ↔ Permanent", body: "Lasting a very short time ↔ lasting forever." },
        { title: "Commend ↔ Condemn", body: "Praise ↔ criticise strongly." },
        { title: "Expand ↔ Contract", body: "Grow larger ↔ shrink." },
        { title: "Candid ↔ Evasive", body: "Frank and open ↔ avoiding a direct answer." },
        { title: "Hostile ↔ Friendly", body: "Unfriendly, aggressive ↔ kind and welcoming." },
        { title: "Scarce ↔ Abundant", body: "In short supply ↔ plentiful." },
        { title: "Voluntary ↔ Compulsory", body: "By choice ↔ required." },
        { title: "Enervating ↔ Invigorating", body: "Draining energy ↔ giving energy." },
        { title: "Obscure ↔ Clear", body: "Hard to understand or little known ↔ easy to see or understand." }
      ]},
      { heading: "Trap Answers to Avoid", type: "warning", items: [
        "A synonym placed among the options to catch you when you rush.",
        "A word that is related to the topic but is not the opposite.",
        "Ignoring context: 'light' may be opposite to 'heavy' or to 'dark' depending on the sentence.",
        "Choosing a different part of speech from the tested word."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Learn every new word WITH its opposite. Prefixes help: un-, in-, im-, dis-, non-, mis- often make an opposite (honest/dishonest, possible/impossible), but check, as 'invaluable' is NOT the opposite of 'valuable'." }
    ]
  },

  // ==========================================
  // ENGLISH — NEAREST IN MEANING
  // ==========================================
  "Nearest in Meaning": {
    subject: "English",
    title: "Nearest in Meaning (Synonyms)",
    icon: "🟰",
    estimatedTime: "3 min read",
    sections: [
      { heading: "What is Tested", type: "text",
        content: "You are given a word or phrase in a sentence and asked to choose the option closest in meaning. The sentence tells you which meaning of the word applies." },
      { heading: "Strategy", type: "steps", items: [
        "Focus on the highlighted word and use the sentence to find its meaning.",
        "Think of your own synonym before reading the options.",
        "Eliminate opposites and unrelated words.",
        "Substitute your choice into the sentence. It must keep the same meaning and sound natural.",
        "If two seem close, choose the one that matches the tone (positive, negative, formal)."
      ]},
      { heading: "Frequently Tested Words", type: "cards", items: [
        { title: "Perfunctory", body: "Done without care or effort: mechanical, cursory, halfhearted." },
        { title: "Repudiate", body: "To reject firmly: disown, deny, renounce." },
        { title: "Futile", body: "Producing no result: useless, vain, pointless." },
        { title: "Diligent", body: "Hardworking and careful: industrious, assiduous." },
        { title: "Plausible", body: "Seeming reasonable: believable, credible." },
        { title: "Obsolete", body: "No longer used: outdated, outmoded, archaic." },
        { title: "Ameliorate", body: "Make better: improve, alleviate, ease." },
        { title: "Mundane", body: "Dull and ordinary: routine, commonplace, everyday." },
        { title: "Ephemeral", body: "Short-lived: fleeting, brief, transient." },
        { title: "Candid", body: "Open and honest: frank, forthright, sincere." },
        { title: "Meticulous", body: "Very careful with details: thorough, painstaking, precise." },
        { title: "Frugal", body: "Careful with money: thrifty, economical, sparing." },
        { title: "Benevolent", body: "Kind and generous: charitable, kindly, caring." },
        { title: "Arduous", body: "Difficult and tiring: strenuous, hard, laborious." },
        { title: "Corroborate", body: "Support with evidence: confirm, verify, back up." }
      ]},
      { heading: "Trap Answers to Avoid", type: "warning", items: [
        "'Invaluable' means extremely valuable, NOT valueless.",
        "'Negligible' (too small to matter) is not the same as 'negligent' (careless).",
        "An option that fits the topic but not the exact meaning.",
        "An opposite hidden among near-synonyms."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Always return to the sentence. The word 'fine' means very different things in 'a fine day', 'a fine of ₦5,000' and 'fine sand'. The nearest meaning is the one that works in context." }
    ]
  },

  // ==========================================
  // ENGLISH — SENTENCE COMPLETION
  // ==========================================
  "Sentence Completion": {
    subject: "English",
    title: "Sentence Completion",
    icon: "✍️",
    estimatedTime: "3 min read",
    sections: [
      { heading: "What is Tested", type: "text",
        content: "You are given a sentence with a gap (or an unfinished sentence) and must choose the word or phrase that completes it correctly in meaning, grammar and idiom. It combines vocabulary, grammar and logic." },
      { heading: "Strategy", type: "steps", items: [
        "Read the whole sentence and find its main idea.",
        "Look for signal words: but, although, however (contrast); and, also (addition); because, so (cause/result).",
        "Predict the missing word or kind of word.",
        "Check agreement: subject-verb, tense, singular/plural and pronouns.",
        "Check prepositions and idioms (interested IN, depend ON, different FROM).",
        "Read the finished sentence aloud to be sure it sounds right."
      ]},
      { heading: "Common Grammar Points Tested", type: "cards", items: [
        { title: "Subject-verb agreement", body: "Each, every, everybody, nobody, anyone take a SINGULAR verb. 'Neither...nor': verb agrees with the nearer subject." },
        { title: "Tenses and time words", body: "since/for with present perfect (He has lived here since 2010). Yesterday/last year with simple past." },
        { title: "Prepositions", body: "good AT, afraid OF, married TO, congratulate ON, prefer X TO Y, insist ON, participate IN." },
        { title: "Conditionals", body: "If + present, will (real). If + past, would (unreal present). If + had + past participle, would have (unreal past)." },
        { title: "Pairs of words", body: "Both...and, either...or, neither...nor, not only...but also, so...that, hardly...when, no sooner...than." },
        { title: "Comparatives", body: "Use 'than' with comparatives (more beautiful than). Use 'as...as' for equality." }
      ]},
      { heading: "Trap Answers to Avoid", type: "warning", items: [
        "Choosing a word because it sounds fancy rather than because it fits the logic.",
        "Missing a contrast signal and picking a word that continues the idea instead of reversing it.",
        "Wrong preposition after a verb or adjective.",
        "Ignoring subject-verb agreement when words come between subject and verb."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Signal words decide the direction of the sentence. After 'but' or 'although', the blank usually carries the OPPOSITE idea. After 'and' or 'also', it carries a SIMILAR idea." }
    ]
  },

  // ==========================================
  // ENGLISH — LEXIS AND STRUCTURE
  // ==========================================
  "Lexis and Structure": {
    subject: "English",
    title: "Lexis and Structure — Vocabulary Meets Grammar",
    icon: "🧱",
    estimatedTime: "3 min read",
    sections: [
      { heading: "What is Tested", type: "text",
        content: "Lexis is vocabulary (the words we choose). Structure is grammar (how words are arranged). These questions give you a sentence with a gap or an underlined word and ask for the option that is correct in both meaning and grammar." },
      { heading: "Types of Questions", type: "cards", items: [
        { title: "Word choice", body: "Choose the word that best fits meaning and tone. 'The general needed ______ veterans' → seasoned." },
        { title: "Contrast and signal words", body: "'Although he was rich, he lived ______' → frugally/simply (contrast). Read the signal word first." },
        { title: "Collocations and idioms", body: "make a decision, take a chance, kick the bucket, at cross purposes, go by the book." },
        { title: "Grammar in context", body: "Tense, agreement, prepositions, articles, conditionals, reported speech." },
        { title: "Register", body: "Formal writing needs formal words (commence, purchase). Informal speech can use simpler words." }
      ]},
      { heading: "Strategy", type: "steps", items: [
        "Read the entire sentence before looking at the options.",
        "Identify signal words (but, however, although, so, because).",
        "Predict the answer first.",
        "Eliminate options that are the wrong part of speech or wrong tone.",
        "Test your choice by reading the whole sentence aloud."
      ]},
      { heading: "Signal Words to Watch", type: "warning", items: [
        "But / however / yet / although / while = contrast. The blank is opposite to what came before.",
        "And / also / similarly / moreover = addition. The blank matches what came before.",
        "Because / since / so / therefore = cause and result.",
        "Instead of / rather than = replacement. The blank is the alternative."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "When you see 'instead of' or 'not...but', the answer is almost always the opposite of the word already in the sentence. Always check meaning AND grammar before you commit." }
    ]
  },

  // ==========================================
  // ENGLISH — WORD STRESS
  // ==========================================
  "Word Stress": {
    subject: "English",
    title: "Word Stress Made Simple",
    icon: "🔊",
    estimatedTime: "3 min read",
    sections: [
      { heading: "What is Word Stress?", type: "text",
        content: "Every English word of two or more syllables has one syllable that is pronounced with more force, length and clarity. The other syllables are weaker. Questions ask you to find the word with a different stress pattern or to identify the stressed syllable. Stress is shown in CAPITALS: TEAcher, beGIN, eduCAtion." },
      { heading: "Rules You Must Know", type: "cards", items: [
        { title: "Two-syllable nouns and adjectives", body: "Stress the FIRST syllable: TAble, WINdow, HAPpy, CLEver, MOTHer." },
        { title: "Two-syllable verbs", body: "Stress the SECOND syllable: deCIDE, reTURN, aRRIVE, beLIEVE, supPORT." },
        { title: "Endings -tion, -sion, -ic, -ical, -ity, -ify", body: "Stress the syllable BEFORE the ending: eduCAtion, comPLEtion, ecoNOmic, poLITical, ciVILity, claRIfy." },
        { title: "Compound nouns", body: "Stress the FIRST element: BLACKboard, GREENhouse, AIRport." },
        { title: "Words ending -ee, -eer, -ese", body: "Stress falls ON the ending: refuGEE, engiNEER, JapaNESE." },
        { title: "Noun vs verb pairs", body: "REcord (n) / reCORD (v); PREsent (n) / preSENT (v); OBject (n) / obJECT (v); INcrease (n) / inCREASE (v)." },
        { title: "Words ending -ate (3+ syllables)", body: "Stress usually two syllables from the end: CEleBRATE, EDucate, DEmonstrate." }
      ]},
      { heading: "Common Patterns", type: "cards", items: [
        { title: "First syllable stressed", body: "calendar, blackboard, suffer, madam, comment, happy, mother." },
        { title: "Second syllable stressed", body: "success, begin, career, embarrass, contribute, comfortable (COMfortable is an exception: first)." },
        { title: "Third syllable stressed", body: "understand, volunteer, engineer, introduce, recommend." }
      ]},
      { heading: "Strategy", type: "steps", items: [
        "Say each word aloud and tap or clap on the loudest syllable.",
        "Count the syllables and decide the part of speech (noun, verb, adjective).",
        "Apply the rules: noun/adjective = front, verb = back, -tion/-ic = before the ending.",
        "In odd-one-out questions, find the three words that share a pattern. The remaining word is the answer."
      ]},
      { heading: "Trap Answers to Avoid", type: "warning", items: [
        "Applying the verb rule to a two-syllable noun (e.g. 'success' is a noun but stressed on the second syllable).",
        "Forgetting the shift in noun/verb pairs like REcord and reCORD.",
        "Marking stress by the spelling rather than the sound.",
        "Assuming every word follows the rules. Exceptions exist, so trust your ear."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Nouns and adjectives: front. Verbs: back. -tion/-sion/-ic: stress the syllable before the ending. -ee/-eer: stress the ending. When in doubt, say the word in a sentence and listen for the loudest syllable." }
    ]
  },

  // ==========================================
  // ENGLISH — COMPLETION
  // ==========================================
  "Completion": {
    subject: "English",
    title: "Completion — Finishing Sentences Correctly",
    icon: "🧷",
    estimatedTime: "3 min read",
    sections: [
      { heading: "What is Tested", type: "text",
        content: "Completion questions give you an unfinished sentence or a sentence with a blank. You choose the option that finishes it correctly in grammar, meaning and idiom. The answer must agree with the earlier part of the sentence." },
      { heading: "Strategy", type: "steps", items: [
        "Read the complete sentence and identify its subject, verb and main idea.",
        "Look for the grammatical clue: tense, singular/plural, preposition, conditional.",
        "Look for the logical clue: does the sentence continue an idea or contrast with it?",
        "Predict the ending before reading the options.",
        "Eliminate options that break grammar, change the tense wrongly or contradict the meaning.",
        "Read the full completed sentence to make sure it sounds natural."
      ]},
      { heading: "Frequently Tested Patterns", type: "cards", items: [
        { title: "Prepositions after words", body: "interested IN, good AT, afraid OF, depend ON, listen TO, different FROM, responsible FOR, capable OF." },
        { title: "Gerund or infinitive", body: "enjoy/avoid/finish/suggest + -ing. want/decide/hope/refuse + to + verb. 'Look forward to + -ing'." },
        { title: "Conditionals", body: "If I had known, I would have come. If it rains, we will stay. If I were you, I would go." },
        { title: "Correlatives", body: "Neither...nor, either...or, both...and, not only...but also, hardly...when, no sooner...than." },
        { title: "Subject-verb agreement", body: "The number of students IS growing. A number of students ARE absent. Each of the boys HAS a book." },
        { title: "Comparison", body: "She is taller than I (am). He is as tall as his father. This is the most beautiful of all." },
        { title: "Reported speech", body: "He said that he WOULD come the NEXT DAY (will → would; tomorrow → the next day)." }
      ]},
      { heading: "Trap Answers to Avoid", type: "warning", items: [
        "Choosing an option that is grammatical but does not match the meaning of the first half.",
        "Mixing tenses within the same sentence without a time reason.",
        "'Neither...nor' with the wrong verb agreement. The verb follows the nearer subject.",
        "'Hardly/scarcely...when' and 'no sooner...than' are fixed pairs. Do not swap them."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Many completion answers are fixed pairs or fixed prepositions. Learn them as units: prefer X to Y, no sooner...than, neither...nor, look forward to + -ing." }
    ]
  },

}

export default ENGLISH_EXTRA_GUIDES
