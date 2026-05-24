// EXAMEDGE — STUDY GUIDES
// Mini-lessons shown before quiz in study mode
// Keyed by topic name (must match topic in question bank exactly)

const STUDY_GUIDES = {

  // ==========================================
  // ENGLISH — COMPREHENSION
  // ==========================================
  "Comprehension": {
    subject: "English",
    title: "How to Ace Comprehension",
    icon: "📖",
    estimatedTime: "3 min read",
    sections: [
      {
        heading: "What is Comprehension?",
        type: "text",
        content: "Comprehension tests your ability to read and understand a passage, then answer questions based on it. The answers are always in the passage — you never need outside knowledge."
      },
      {
        heading: "Step-by-Step Strategy",
        type: "steps",
        items: [
          "Read the questions FIRST before reading the passage — this tells you what to look for.",
          "Read the passage carefully, paying attention to the main idea and tone.",
          "For each question, go back to the relevant part of the passage to find the answer.",
          "Eliminate options that contradict the passage, even if they sound reasonable.",
          "Choose the answer that is directly supported by the passage — not your personal opinion."
        ]
      },
      {
        heading: "Common Question Types",
        type: "cards",
        items: [
          { title: "Main Idea / Best Title", body: "Ask: What is the passage mostly about? Look for the idea repeated throughout." },
          { title: "Meaning of Words/Phrases", body: "Use context clues — the surrounding sentences will hint at the meaning." },
          { title: "Author's Purpose", body: "Ask: Why did the author write this? To inform, persuade, describe, or entertain?" },
          { title: "Inference Questions", body: "The answer is not stated directly — you must read between the lines using clues in the passage." },
          { title: "Audience Questions", body: "Who is this passage written for? Look at the tone, vocabulary level, and subject matter." }
        ]
      },
      {
        heading: "Trap Answers to Avoid",
        type: "warning",
        items: [
          "Answers that are true in real life but not stated in the passage.",
          "Answers that use words from the passage but twist the meaning.",
          "Answers that are too broad or too narrow.",
          "Your personal opinion — always stick to the passage."
        ]
      },
      {
        heading: "Quick Tip",
        type: "tip",
        content: "If you're stuck between two answers, re-read the relevant paragraph. The correct answer will be the one you can point to in the text."
      }
    ]
  },

  // ==========================================
  // ENGLISH — ANTONYMS
  // ==========================================
  "Antonyms": {
    subject: "English",
    title: "Mastering Antonyms",
    icon: "🔄",
    estimatedTime: "2 min read",
    sections: [
      {
        heading: "What is an Antonym?",
        type: "text",
        content: "An antonym is a word opposite in meaning to another. JAMB and Post-UTME test your vocabulary by asking you to identify the opposite of an underlined word."
      },
      {
        heading: "Strategy",
        type: "steps",
        items: [
          "Identify the underlined word and its part of speech (noun, verb, adjective, adverb).",
          "Think of the opposite meaning before looking at the options.",
          "Beware — the correct antonym must match the same part of speech.",
          "Consider the context of the sentence — the antonym must make sense in the sentence.",
          "Eliminate options that are synonyms or unrelated words."
        ]
      },
      {
        heading: "Common Antonym Pairs You Must Know",
        type: "cards",
        items: [
          { title: "Loquacious ↔ Taciturn", body: "Loquacious = very talkative. Taciturn = habitually silent." },
          { title: "Kindle ↔ Extinguish", body: "Kindle = to start a fire. Extinguish = to put it out." },
          { title: "Valedictory ↔ Inaugural", body: "Valedictory = farewell. Inaugural = first/opening." },
          { title: "Vacillate ↔ Decisive", body: "Vacillate = to be indecisive. Decisive = firm and clear." },
          { title: "Coarse ↔ Refined", body: "Coarse = rough/crude. Refined = polished/elegant." },
          { title: "Sudden ↔ Gradual", body: "Sudden = happening quickly. Gradual = slowly over time." }
        ]
      },
      {
        heading: "Quick Tip",
        type: "tip",
        content: "Build your vocabulary daily. The more words you know, the easier antonym questions become. Read newspapers, novels, and past questions regularly."
      }
    ]
  },

  // ==========================================
  // ENGLISH — LEXIS & STRUCTURE
  // ==========================================
  "Lexis & Structure": {
    subject: "English",
    title: "Lexis & Structure Explained",
    icon: "🔤",
    estimatedTime: "3 min read",
    sections: [
      {
        heading: "What is Lexis & Structure?",
        type: "text",
        content: "Lexis refers to vocabulary — the words we use. Structure refers to grammar — how words are arranged. These questions test whether you can choose the right word to complete a sentence correctly."
      },
      {
        heading: "Types of Questions",
        type: "cards",
        items: [
          { title: "Word Choice (Diction)", body: "Choose the word that best fits the meaning and tone of the sentence. Example: 'The general needed ______ veterans' → 'seasoned' (experienced)." },
          { title: "Contrast Questions", body: "Two contrasting ideas are presented. Fill in the word that completes the contrast. Look for signals: 'but', 'while', 'instead of', 'not only...but'." },
          { title: "Collocations", body: "Some words naturally go together. 'Seasoned veteran' is natural; 'baked veteran' is not — even if the meanings might seem similar." },
          { title: "Register", body: "Formal vs informal. Academic passages require formal word choices." }
        ]
      },
      {
        heading: "Strategy",
        type: "steps",
        items: [
          "Read the complete sentence before choosing an answer.",
          "Identify the contrast or comparison signal words (but, while, however, instead).",
          "Predict the answer before looking at the options.",
          "Test your chosen word by reading the full sentence aloud — does it sound natural?",
          "Eliminate words that are the wrong part of speech or wrong tone."
        ]
      },
      {
        heading: "Signal Words to Watch",
        type: "warning",
        items: [
          "'but / however / yet / although' — signals contrast → the blank is opposite to what came before.",
          "'and / also / similarly' — signals similarity → the blank matches what came before.",
          "'instead of / rather than' — signals replacement → blank is an alternative.",
          "'not only...but also' — signals addition."
        ]
      },
      {
        heading: "Quick Tip",
        type: "tip",
        content: "When you see 'instead of' or 'not...but', the answer is almost always the opposite of the word already in the sentence."
      }
    ]
  },

  // ==========================================
  // ENGLISH — VOCABULARY
  // ==========================================
  "Vocabulary": {
    subject: "English",
    title: "Building Your Vocabulary",
    icon: "📝",
    estimatedTime: "2 min read",
    sections: [
      {
        heading: "What to Expect",
        type: "text",
        content: "Vocabulary questions give you a word or phrase in a sentence and ask you to choose the option closest in meaning. Unlike antonyms, here you find the SAME meaning, not the opposite."
      },
      {
        heading: "High-Frequency Words You Must Know",
        type: "cards",
        items: [
          { title: "Perfunctory", body: "Done without care or effort — mechanical, halfhearted." },
          { title: "Repudiate", body: "To reject, disown, or refuse to acknowledge." },
          { title: "Turmoil", body: "A state of great confusion, disorder, and uncertainty." },
          { title: "Astounding", body: "Extremely surprising or impressive — amazing." },
          { title: "Alienation", body: "The state of being isolated or estranged from others." },
          { title: "Niggardly", body: "Ungenerous with money — stingy." },
          { title: "Aversion", body: "A strong dislike of something." },
          { title: "Outspoken", body: "Frank and direct in expressing opinions." },
          { title: "Mimic", body: "To copy or imitate someone's actions or speech." },
          { title: "Die-hard", body: "Stubbornly resisting change — relentless." }
        ]
      },
      {
        heading: "Strategy",
        type: "steps",
        items: [
          "Try to determine the meaning from context before looking at options.",
          "Look for root words, prefixes, and suffixes as clues.",
          "Eliminate options that are clearly wrong in context.",
          "Check that your chosen answer fits grammatically in the sentence."
        ]
      },
      {
        heading: "Quick Tip",
        type: "tip",
        content: "Keep a vocabulary notebook. Every time you encounter an unfamiliar word in a past question, write it down with its meaning and example sentence."
      }
    ]
  },

  // ==========================================
  // ENGLISH — IDIOMS & EXPRESSIONS
  // ==========================================
  "Idioms & Expressions": {
    subject: "English",
    title: "Cracking Idioms & Expressions",
    icon: "💬",
    estimatedTime: "2 min read",
    sections: [
      {
        heading: "What are Idioms?",
        type: "text",
        content: "Idioms are phrases whose meaning cannot be understood from the individual words. 'Kick the bucket' does not mean literally kicking a bucket — it means to die. JAMB tests whether you know the true meaning of common idioms."
      },
      {
        heading: "Must-Know Idioms for JAMB/Post-UTME",
        type: "cards",
        items: [
          { title: "When the chips are down", body: "When a situation becomes critical or difficult — at a crisis point." },
          { title: "Come off", body: "To succeed or happen as planned. 'It didn't come off' = it didn't succeed." },
          { title: "At cross purposes", body: "Misunderstanding each other, working toward conflicting goals." },
          { title: "Pet aversion", body: "Something one particularly dislikes." },
          { title: "Political minefield", body: "A situation full of hidden dangers and potential problems." },
          { title: "Die-hard", body: "Someone who stubbornly refuses to change their position." },
          { title: "Go by the book", body: "To follow rules and procedures strictly." },
          { title: "Turn over a new leaf", body: "To start behaving better or make a fresh start." }
        ]
      },
      {
        heading: "Strategy",
        type: "steps",
        items: [
          "Never interpret idioms literally — the meaning is figurative.",
          "Use context to help: what situation is being described?",
          "If you don't know the idiom, eliminate options that seem too literal.",
          "Learn idioms in groups: idioms about time, money, difficulty, success, etc."
        ]
      },
      {
        heading: "Quick Tip",
        type: "tip",
        content: "Most idiom questions have one obviously literal answer (wrong) and one figurative answer (right). If you see an option that interprets words literally, it's almost never correct."
      }
    ]
  },

  // ==========================================
  // ENGLISH — STRESS PATTERN
  // ==========================================
  "Stress Pattern": {
    subject: "English",
    title: "Word Stress Made Simple",
    icon: "🎵",
    estimatedTime: "3 min read",
    sections: [
      {
        heading: "What is Word Stress?",
        type: "text",
        content: "Word stress means pronouncing one syllable of a word with more force than the others. Every English word has a stressed syllable. JAMB asks you to identify words with the same or different stress patterns."
      },
      {
        heading: "How to Mark Stress",
        type: "text",
        content: "We mark the stressed syllable with a capital letter or apostrophe before it. For example: 'calendar' = CAL-en-dar (stress on 1st syllable). 'success' = suc-CESS (stress on 2nd syllable)."
      },
      {
        heading: "Stress Rules You Must Know",
        type: "cards",
        items: [
          { title: "Two-syllable nouns & adjectives", body: "Usually stressed on the FIRST syllable. Examples: TAble, HAPpy, COMment, MAdam." },
          { title: "Two-syllable verbs", body: "Usually stressed on the SECOND syllable. Examples: arRIVE, beGIN, rePEAT." },
          { title: "Words ending in -tion, -sion, -ic", body: "Stress falls on the syllable BEFORE the suffix. Examples: naATION, muSIC, reLATion." },
          { title: "Words ending in -ate, -ise, -fy", body: "Stress usually on first syllable. Examples: CREate, REAlise, TERrify." },
          { title: "Compound words", body: "Usually stressed on the FIRST element. Examples: BLACKboard, FOOTball, AIRport." }
        ]
      },
      {
        heading: "Common Stress Patterns in JAMB",
        type: "cards",
        items: [
          { title: "1st syllable stress (●oo)", body: "calendar, blackboard, suffer, madam, comment, happy" },
          { title: "2nd syllable stress (o●o)", body: "success, contribute, embarrass, arrive, career" },
          { title: "3rd syllable stress (oo●)", body: "understand, volunteer, engineer" }
        ]
      },
      {
        heading: "Strategy for Stress Questions",
        type: "steps",
        items: [
          "Say each word aloud and feel which syllable you naturally emphasise.",
          "Count the syllables in each word first.",
          "Apply the stress rules — nouns/adjectives → 1st syllable, verbs → 2nd syllable.",
          "Look for the ODD ONE OUT — three words share a pattern, one is different.",
          "Practice by marking stress on every new word you learn."
        ]
      },
      {
        heading: "Quick Tip",
        type: "tip",
        content: "When in doubt, say the word in a sentence. The syllable that sounds wrong if you stress it is not the stressed one — your ear will guide you."
      }
    ]
  },

  // ==========================================
  // MATHEMATICS — ALGEBRA
  // ==========================================
  "Algebra": {
    subject: "Mathematics",
    title: "Algebra Essentials",
    icon: "🔢",
    estimatedTime: "4 min read",
    sections: [
      {
        heading: "Key Algebra Concepts",
        type: "text",
        content: "Algebra involves working with variables (letters representing numbers) and solving equations. The golden rule: whatever you do to one side of an equation, do the same to the other."
      },
      {
        heading: "Must-Know Formulas",
        type: "cards",
        items: [
          { title: "Difference of squares", body: "a² − b² = (a+b)(a−b)" },
          { title: "Perfect square", body: "(a+b)² = a² + 2ab + b²" },
          { title: "Sum of cubes", body: "a³ + b³ = (a+b)(a²−ab+b²)" },
          { title: "Difference of cubes", body: "a³ − b³ = (a−b)(a²+ab+b²)" },
          { title: "Quadratic formula", body: "x = [−b ± √(b²−4ac)] / 2a" }
        ]
      },
      {
        heading: "Strategy for Inequality Questions",
        type: "steps",
        items: [
          "Solve like a normal equation.",
          "IMPORTANT: When you multiply or divide by a negative number, FLIP the inequality sign.",
          "Multiply through by LCM to clear fractions before solving.",
          "Check your answer by substituting back."
        ]
      },
      {
        heading: "Quick Tip",
        type: "tip",
        content: "For 'make x the subject' questions, isolate x step by step — move everything else to the other side using inverse operations."
      }
    ]
  },

  // ==========================================
  // MATHEMATICS — CALCULUS
  // ==========================================
  "Calculus": {
    subject: "Mathematics",
    title: "Calculus Quick Guide",
    icon: "📈",
    estimatedTime: "4 min read",
    sections: [
      {
        heading: "Two Main Operations",
        type: "text",
        content: "Calculus has two branches: Differentiation (finding the rate of change/gradient) and Integration (finding area under a curve). JAMB tests both."
      },
      {
        heading: "Differentiation Rules",
        type: "cards",
        items: [
          { title: "Power rule", body: "If y = xⁿ, then dy/dx = nxⁿ⁻¹. Example: y = x³ → dy/dx = 3x²" },
          { title: "Chain rule", body: "If y = f(g(x)), dy/dx = f'(g(x)) × g'(x). Example: y = (2x+1)³ → dy/dx = 3(2x+1)² × 2 = 6(2x+1)²" },
          { title: "Product rule", body: "If y = uv, dy/dx = u(dv/dx) + v(du/dx). Example: y = x·sin(x) → dy/dx = sin(x) + x·cos(x)" },
          { title: "Trig derivatives", body: "d/dx(sin x) = cos x. d/dx(cos x) = −sin x. d/dx(tan x) = sec²x" }
        ]
      },
      {
        heading: "Integration Rules",
        type: "cards",
        items: [
          { title: "Power rule (integration)", body: "∫xⁿ dx = xⁿ⁺¹/(n+1) + C (n ≠ −1)" },
          { title: "Trig integrals", body: "∫sin(x) dx = −cos(x) + C. ∫cos(x) dx = sin(x) + C" },
          { title: "Definite integral", body: "∫ₐᵇ f(x)dx = [F(x)]ₐᵇ = F(b) − F(a)" }
        ]
      },
      {
        heading: "Finding Min/Max",
        type: "steps",
        items: [
          "Differentiate y to get dy/dx.",
          "Set dy/dx = 0 and solve for x.",
          "Differentiate again (d²y/dx²).",
          "If d²y/dx² > 0: minimum. If d²y/dx² < 0: maximum."
        ]
      },
      {
        heading: "Quick Tip",
        type: "tip",
        content: "Always add + C (constant of integration) for indefinite integrals. Forgetting C is one of the most common errors in JAMB."
      }
    ]
  },

  // ==========================================
  // PHYSICS — WAVES & OPTICS
  // ==========================================
  "Waves & Optics": {
    subject: "Physics",
    title: "Waves & Optics",
    icon: "🌊",
    estimatedTime: "3 min read",
    sections: [
      {
        heading: "Key Wave Properties",
        type: "cards",
        items: [
          { title: "Wave equation", body: "v = fλ. Speed = frequency × wavelength." },
          { title: "Transverse waves", body: "Vibration perpendicular to direction of travel. Can be polarised. Example: light, water waves." },
          { title: "Longitudinal waves", body: "Vibration parallel to direction of travel. Cannot be polarised. Example: sound." },
          { title: "Electromagnetic spectrum (short→long λ)", body: "Gamma → X-rays → UV → Visible → Infrared → Microwaves → Radio" }
        ]
      },
      {
        heading: "Optics Quick Facts",
        type: "cards",
        items: [
          { title: "Concave lens", body: "Diverging. Corrects short-sightedness (myopia). Image is virtual, upright, diminished." },
          { title: "Convex lens", body: "Converging. Corrects long-sightedness (hyperopia). Can produce real or virtual images." },
          { title: "Short-sightedness", body: "Eyeball too long → parallel rays focus in FRONT of retina. Corrected with concave lens." },
          { title: "Long-sightedness", body: "Eyeball too short → parallel rays focus BEHIND retina. Corrected with convex lens." }
        ]
      },
      {
        heading: "Quick Tip",
        type: "tip",
        content: "Remember: Gamma rays have the SHORTEST wavelength (most energy). Radio waves have the LONGEST wavelength (least energy)."
      }
    ]
  },

  // ==========================================
  // CHEMISTRY — REDOX REACTIONS
  // ==========================================
  "Redox Reactions": {
    subject: "Chemistry",
    title: "Redox Reactions",
    icon: "⚗️",
    estimatedTime: "3 min read",
    sections: [
      {
        heading: "What are Redox Reactions?",
        type: "text",
        content: "Redox (reduction-oxidation) reactions involve the transfer of electrons. Oxidation = loss of electrons. Reduction = gain of electrons. Remember: OIL RIG — Oxidation Is Loss, Reduction Is Gain."
      },
      {
        heading: "Key Terms",
        type: "cards",
        items: [
          { title: "Oxidising agent", body: "Causes oxidation in another substance — it itself gets REDUCED (gains electrons). Example: Br₂, O₂, H₂O₂" },
          { title: "Reducing agent", body: "Causes reduction in another substance — it itself gets OXIDISED (loses electrons). Example: H₂S, CO, Fe²⁺" },
          { title: "Oxidation number", body: "A measure of electron loss/gain. Elements in pure form = 0. O usually = −2. H usually = +1." }
        ]
      },
      {
        heading: "Strategy for Identifying Oxidising/Reducing Agents",
        type: "steps",
        items: [
          "Assign oxidation numbers to all atoms on both sides.",
          "Find which atom's oxidation number increased (that element is oxidised).",
          "Find which atom's oxidation number decreased (that element is reduced).",
          "The substance containing the oxidised atom is the REDUCING agent.",
          "The substance containing the reduced atom is the OXIDISING agent."
        ]
      },
      {
        heading: "Quick Tip",
        type: "tip",
        content: "The oxidising agent is always the one that gets reduced — it oxidises others by taking their electrons. This sounds backwards but remember: OIL RIG."
      }
    ]
  }

,

  // ==========================================
  // ENGLISH — SYNONYMS
  // ==========================================
  "Synonyms": {
    subject: "English", title: "Synonyms — Word Meaning in Context",
    icon: "📝", estimatedTime: "3 min read",
    sections: [
      { heading: "What are Synonyms?", type: "text",
        content: "Synonyms are words with the same or similar meaning. UNIBEN gives you a sentence with ONE key word highlighted in bold and asks you to choose the option closest in meaning to that specific word." },
      { heading: "Strategy", type: "steps", items: [
        "Focus ONLY on the highlighted/bold word — that is the word being tested.",
        "Think of words you already know that mean the same thing before looking at options.",
        "Use context — the surrounding sentence tells you which meaning of the word applies here.",
        "Eliminate options that are clearly wrong, then choose the closest match.",
        "Check: substitute your chosen synonym back into the sentence — does it still make sense?"
      ]},
      { heading: "High-Frequency Words — UNIBEN Past Questions", type: "cards", items: [
        { title: "Perfunctory", body: "Done carelessly with little effort. Synonyms: halfhearted, mechanical, cursory." },
        { title: "Repudiate", body: "To firmly reject or disown. Synonyms: reject, denounce, disown." },
        { title: "Futile", body: "Having no useful result. Synonyms: useless, unsuccessful, vain, pointless." },
        { title: "Disparaging", body: "Expressing contempt; belittling. Synonyms: critical, derogatory, scornful." },
        { title: "Diligent", body: "Hardworking and careful. Synonyms: industrious, hardworking, conscientious." },
        { title: "Invaluable", body: "Extremely useful — NOT valueless! Synonyms: indispensable, priceless." },
        { title: "Plausible", body: "Seeming reasonable or probable. Synonyms: believable, credible, reasonable." },
        { title: "Unequivocal", body: "Absolutely clear, leaving no doubt. Synonyms: clear, definite, unmistakable." },
        { title: "Obsolete", body: "No longer in use. Synonyms: outdated, outmoded, archaic." },
        { title: "Unmitigated", body: "Absolute; without any reduction. Synonyms: absolute, total, utter." },
        { title: "Ameliorate", body: "To make something bad less severe. Synonyms: improve, alleviate, ease." },
        { title: "Exhaustive", body: "Covering all possibilities; thorough. Synonyms: thorough, comprehensive, complete." },
        { title: "Mundane", body: "Dull and ordinary. Synonyms: ordinary, routine, banal, commonplace." },
        { title: "Obnoxious", body: "Extremely unpleasant. Synonyms: offensive, repulsive, disagreeable." },
        { title: "Consolidate", body: "To strengthen or combine. Synonyms: strengthen, reinforce, solidify." },
        { title: "Taciturnity", body: "The habit of being reserved and quiet. Synonyms: silence, reticence, quietness." },
        { title: "Leader (newspaper)", body: "The main editorial article. Synonym: editorial — NOT the headline!" },
        { title: "Fatal", body: "Causing death. Synonyms: deadly, lethal, mortal." },
        { title: "Respite", body: "A short period of rest from difficulty. Synonyms: temporary relief, break, reprieve." },
        { title: "Pleasantries", body: "Polite, light-hearted remarks. Synonyms: jocular remarks, small talk." },
        { title: "Obstinate/Willful", body: "Stubbornly refusing to change. Synonyms: stubborn, unyielding, obdurate." },
        { title: "Superficial", body: "Existing only on the surface; shallow. Synonyms: shallow, minor, skin-deep." },
        { title: "Eclectic", body: "Deriving from a wide range of sources. Synonyms: varied, diverse, mixed." },
        { title: "Futile", body: "Producing no result; useless. Synonyms: pointless, vain, unsuccessful." },
        { title: "Ailment", body: "An illness, especially a minor one. Synonyms: illness, disorder, complaint." }
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Invaluable means EXTREMELY valuable — NOT valueless. Very common mistake!",
        "Several (countable) = more than two → synonym is many, not some or plenty.",
        "Leader in a newspaper = editorial (opinion piece) — NOT the headline.",
        "Context matters: figure can mean a number OR a body shape — always read the full sentence."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Keep a vocabulary notebook. Write every unfamiliar word from past questions with its meaning, synonym, and antonym. Review it every night — consistency beats cramming." }
    ]
  },

  // ==========================================
  // ENGLISH — PHONETICS & STRESS
  // ==========================================
  "Phonetics & Stress": {
    subject: "English", title: "Phonetics & Word Stress",
    icon: "🎵", estimatedTime: "3 min read",
    sections: [
      { heading: "Two Types of Questions", type: "text",
        content: "UNIBEN asks two types: (1) Word Stress — which syllable is emphasised. (2) Sound questions — which word contains a specific vowel sound or which words share a consonant sound." },
      { heading: "Word Stress Rules", type: "cards", items: [
        { title: "2-syllable nouns and adjectives", body: "Stress on FIRST syllable. TA-ble, HAP-py, COM-ment, MA-dam, SU-gar." },
        { title: "2-syllable verbs", body: "Stress on SECOND syllable. ar-RIVE, be-GIN, re-PEAT, de-CIDE." },
        { title: "Words ending -tion, -sion, -ic", body: "Stress on syllable BEFORE suffix. na-TION, mu-SIC, re-LA-tion." },
        { title: "Compound words", body: "Stress on FIRST element. BLACK-board, FOOT-ball, AIR-port, HAND-bag." }
      ]},
      { heading: "English Vowel Sounds", type: "cards", items: [
        { title: "/ɑː/ — long ah sound", body: "car, father, bath, class, calm, heart, start, palm." },
        { title: "/ʌ/ — short uh sound", body: "cup, fun, run, sun, blood, love, come, done, mother." },
        { title: "/aʊ/ — ow diphthong", body: "out, how, now, brown, cow, mouth, loud, found, round." },
        { title: "/iː/ — long ee sound", body: "sweet, feet, beat, heat, meat, meet, seat, treat." }
      ]},
      { heading: "Consonant Sound Matching", type: "cards", items: [
        { title: "sh sound as in sheep", body: "Found in: shore, chef, sugar, sure, machine, nation, special." },
        { title: "th sound as in auto", body: "Voiceless /θ/ — think, three, throw, thesis, author, cloth." },
        { title: "ch sound as in chant", body: "Found in: church, chair, cheap, child, lunch, watch, match." },
        { title: "g sound as in barge", body: "Soft /dʒ/ — giant, gym, general, genius, gem." }
      ]},
      { heading: "Strategy", type: "steps", items: [
        "Say each word aloud — feel which syllable you naturally emphasise.",
        "For odd-one-out: find three words sharing a pattern, one is different.",
        "For sound questions: isolate the specific sound and find matches in options.",
        "Remember: spelling is NOT always sound. gh is often silent (night, though).",
        "For rhyming: focus on the vowel sound AND what follows it."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "For rhyming: Sweet /iːt/ rhymes with beat, heat, seat, meet. Number /ʌmbə/ rhymes with lumber, cucumber, slumber. Focus only on the vowel and consonant sounds that follow." }
    ]
  },

  // ==========================================
  // MATHEMATICS — NUMBER & NUMERATION
  // ==========================================
  "Number & Numeration": {
    subject: "Mathematics", title: "Number & Numeration",
    icon: "🔢", estimatedTime: "3 min read",
    sections: [
      { heading: "What This Topic Covers", type: "text",
        content: "Number bases, indices (powers), fractions, percentages, and standard form. These appear in almost every UNIBEN Post-UTME paper." },
      { heading: "Base Conversion", type: "cards", items: [
        { title: "Any base to Base 10", body: "Multiply each digit by base^(position) and add. 241 in base 5 = 2x25 + 4x5 + 1 = 71 in base 10." },
        { title: "Base 10 to any base", body: "Divide repeatedly by target base, read remainders bottom to top. 71 divided by 8: 71=8r7, 8=1r0, 1=0r1, read up: 107 in base 8. RECURRING!" },
        { title: "Always bridge through base 10", body: "241 base 5 to base 8: first convert to base 10 (=71), then convert 71 to base 8 (=107)." }
      ]},
      { heading: "Indices Rules", type: "cards", items: [
        { title: "Multiplication", body: "aᵐ x aⁿ = aᵐ⁺ⁿ. Example: x³ x x² = x⁵." },
        { title: "Division", body: "aᵐ divided by aⁿ = aᵐ⁻ⁿ. Example: x⁵ divided by x² = x³." },
        { title: "Zero index", body: "a⁰ = 1. Anything to the power of zero equals 1." },
        { title: "Negative index", body: "a⁻ⁿ = 1/aⁿ. Example: x⁻² = 1/x²." },
        { title: "Fraction index", body: "a^(1/n) = nth root of a. Example: 27^(1/3) = cube root of 27 = 3." }
      ]},
      { heading: "Percentage Error", type: "steps", items: [
        "Formula: % error = (|Measured minus True| / True) x 100.",
        "Example: true = 250cm, measured = 285cm.",
        "Error = |285 - 250| = 35cm.",
        "% error = (35/250) x 100 = 14%."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "ALWAYS convert through base 10 as the middle step. Never go directly from base 5 to base 8 — always: base 5 to base 10, then base 10 to base 8." }
    ]
  },

  // ==========================================
  // MATHEMATICS — STATISTICS & PROBABILITY
  // ==========================================
  "Statistics & Probability": {
    subject: "Mathematics", title: "Statistics & Probability",
    icon: "📊", estimatedTime: "4 min read",
    sections: [
      { heading: "Measures of Central Tendency", type: "cards", items: [
        { title: "Mean", body: "Sum of all values divided by count. Example: 8.4 divided by 8 = 1.05. RECURRING!" },
        { title: "Median", body: "Middle value when arranged in order. Even count: average of two middle values." },
        { title: "Mode", body: "Most frequently occurring value." },
        { title: "Variance", body: "Average of squared deviations from mean. RECURRING!" },
        { title: "Standard deviation", body: "Square root of variance." }
      ]},
      { heading: "Variance Step by Step", type: "steps", items: [
        "Find the mean of all values.",
        "Subtract the mean from each value to get each deviation.",
        "Square each deviation.",
        "Find the average of all squared deviations.",
        "That result is the variance. Take the square root for standard deviation."
      ]},
      { heading: "Probability Rules", type: "cards", items: [
        { title: "Basic probability", body: "P = Favourable outcomes divided by Total outcomes. Always between 0 and 1." },
        { title: "P(prime from 20 to 30 inclusive)", body: "Total numbers: 11. Primes: ONLY 23 and 29. P = 2/11. APPEARED IN 2011 AND 2019!" },
        { title: "Without replacement", body: "After picking, total decreases. P(both red from 4W+6R) = 6/10 x 5/9 = 1/3. RECURRING!" },
        { title: "With replacement", body: "After picking, item returned. Total stays same for every pick." }
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "1 is NOT a prime number. Primes from 20 to 30: ONLY 23 and 29.",
        "20 and 30 are INCLUSIVE so total count is 11 not 9.",
        "Without replacement: denominator decreases with each pick.",
        "Variance uses SQUARED deviations — square before averaging."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Memorise: P(prime from 20 to 30 inclusive) = 2/11. This exact question appeared in 2011 AND 2019 and will appear again. The only primes in that range are 23 and 29." }
    ]
  },

  // ==========================================
  // MATHEMATICS — GEOMETRY & MENSURATION
  // ==========================================
  "Geometry & Mensuration": {
    subject: "Mathematics", title: "Geometry & Mensuration",
    icon: "📐", estimatedTime: "4 min read",
    sections: [
      { heading: "Key Formulas to Memorise", type: "cards", items: [
        { title: "Circle", body: "Area = πr². Circumference = 2πr." },
        { title: "Sector", body: "Arc length = (θ/360) x 2πr. Sector perimeter = arc + 2r. RECURRING!" },
        { title: "Pythagoras", body: "a² + b² = c² where c is the hypotenuse. RECURRING!" },
        { title: "Cylinder", body: "Volume = πr²h. Total surface area = 2πr(r+h)." },
        { title: "Sphere", body: "Volume = (4/3)πr³. Surface area = 4πr²." }
      ]},
      { heading: "Sector Perimeter Worked Example", type: "steps", items: [
        "Given: r = 10.5cm, angle = 48 degrees, π = 22/7.",
        "Arc length = (48/360) x 2 x (22/7) x 10.5 = 8.8cm.",
        "Perimeter = arc + 2 x radius = 8.8 + 21 = 29.8cm.",
        "Always add the two straight sides (radii) to the arc length!"
      ]},
      { heading: "Ratio and Area Relationship", type: "cards", items: [
        { title: "Circumference to area", body: "If circumference ratio = 2:5, then radius ratio = 2:5. Area ratio = 4:25. RECURRING!" },
        { title: "General rule", body: "Length ratio a:b gives area ratio a²:b² and volume ratio a³:b³." }
      ]},
      { heading: "Angle Rules", type: "cards", items: [
        { title: "Straight line", body: "Angles add to 180 degrees." },
        { title: "Full rotation", body: "Angles at a point add to 360 degrees." },
        { title: "Triangle", body: "Interior angles add to 180 degrees." },
        { title: "Polygon sum", body: "(n-2) x 180 degrees total interior angles." }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Sector PERIMETER = arc + 2r. Never just calculate the arc — you must add both radii (straight sides). This is the most common mistake in sector questions." }
    ]
  },

  // ==========================================
  // MATHEMATICS — TRIGONOMETRY
  // ==========================================
  "Trigonometry": {
    subject: "Mathematics", title: "Trigonometry",
    icon: "📐", estimatedTime: "3 min read",
    sections: [
      { heading: "Key Identity — MUST KNOW", type: "text",
        content: "sec²θ + tan²θ = 3 gives θ = 45°. This exact question appeared in 2017, 2018, AND 2019 — three years in a row. It will appear again. Memorise the solution method." },
      { heading: "Key Identities", type: "cards", items: [
        { title: "Pythagorean", body: "sin²θ + cos²θ = 1. Also: 1 + tan²θ = sec²θ." },
        { title: "sec²θ + tan²θ = 3", body: "Replace sec²θ with (1+tan²θ): 2tan²θ = 2, tanθ = 1, θ = 45°. APPEARED 3 YEARS IN A ROW!" },
        { title: "Compound angle sin", body: "sin(A±B) = sinAcosB ± cosAsinB." },
        { title: "Compound angle cos", body: "cos(A±B) = cosAcosB minus/plus sinAsinB." },
        { title: "Double angle", body: "sin2A = 2sinAcosA. cos2A = cos²A - sin²A." }
      ]},
      { heading: "Special Angles", type: "cards", items: [
        { title: "30 degrees", body: "sin=1/2, cos=√3/2, tan=1/√3." },
        { title: "45 degrees", body: "sin=cos=1/√2, tan=1. Most common in UNIBEN!" },
        { title: "60 degrees", body: "sin=√3/2, cos=1/2, tan=√3." }
      ]},
      { heading: "CAST Diagram", type: "cards", items: [
        { title: "Q1 (0 to 90)", body: "ALL ratios positive." },
        { title: "Q2 (90 to 180)", body: "SIN positive only." },
        { title: "Q3 (180 to 270)", body: "TAN positive only." },
        { title: "Q4 (270 to 360)", body: "COS positive only." }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "sec²θ + tan²θ = 3 → θ = 45°. The key step is replacing sec²θ with (1+tan²θ) to get 2tan²θ = 2, then tanθ = 1, then θ = 45°. Do not attempt to solve it any other way." }
    ]
  },

  // ==========================================
  // MATHEMATICS — COORDINATE GEOMETRY
  // ==========================================
  "Coordinate Geometry": {
    subject: "Mathematics", title: "Coordinate Geometry",
    icon: "📉", estimatedTime: "3 min read",
    sections: [
      { heading: "Key Formulas", type: "cards", items: [
        { title: "Distance formula", body: "d = square root of [(x₂-x₁)² + (y₂-y₁)²]. RECURRING!" },
        { title: "Midpoint", body: "M = ((x₁+x₂)/2, (y₁+y₂)/2)." },
        { title: "Gradient", body: "m = (y₂-y₁)/(x₂-x₁). Perpendicular lines: m₁ x m₂ = -1." },
        { title: "Equation of line", body: "y - y₁ = m(x - x₁). RECURRING!" }
      ]},
      { heading: "Distance Worked Example", type: "steps", items: [
        "Points (x,3) and (-x,2), distance = 5.",
        "d² = (x-(-x))² + (3-2)² = (2x)² + 1 = 4x²+1.",
        "4x²+1 = 25, so 4x² = 24, so x² = 6, so x = √6. RECURRING!"
      ]},
      { heading: "Line Equation Worked Example", type: "steps", items: [
        "Gradient 1/2, through point (1,2).",
        "y - 2 = (1/2)(x - 1).",
        "2y - 4 = x - 1.",
        "Rearrange: x - 2y + 3 = 0.",
        "Verify: substitute (1,2): 1 - 4 + 3 = 0. Correct!"
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Parallel lines have the SAME gradient. Perpendicular lines have gradients that multiply to -1. If m₁ = 1/2, then m₂ = -2 (flip and negate the gradient)." }
    ]
  },

  // ==========================================
  // MATHEMATICS — SEQUENCES & SERIES
  // ==========================================
  "Sequences & Series": {
    subject: "Mathematics", title: "Sequences & Series",
    icon: "🔢", estimatedTime: "3 min read",
    sections: [
      { heading: "Arithmetic Progression (AP)", type: "cards", items: [
        { title: "nth term", body: "Tₙ = a + (n-1)d. a = first term, d = common difference." },
        { title: "Sum of n terms", body: "Sₙ = n/2 x [2a + (n-1)d] = n/2 x (first + last term)." },
        { title: "Identifying AP", body: "Subtract consecutive terms — if constant difference, it is AP." }
      ]},
      { heading: "Geometric Progression (GP)", type: "cards", items: [
        { title: "Common ratio", body: "r = any term divided by previous term. Constant ratio = GP." },
        { title: "nth term", body: "Tₙ = a x rⁿ⁻¹. Example: a=2, r=3, T₅ = 2 x 81 = 162." },
        { title: "Sum to infinity when |r|<1", body: "S∞ = a/(1-r)." }
      ]},
      { heading: "Finding Which Term", type: "steps", items: [
        "Set Tₙ equal to the value you are looking for.",
        "For AP: a + (n-1)d = value. Solve for n.",
        "Example: which term of 2,5,8,... is 29? Set 2 + (n-1)3 = 29, so n = 10.",
        "The 10th term is 29."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "AP: subtract consecutive terms to find d. GP: divide consecutive terms to find r. Always check the type first before applying formulas." }
    ]
  },

  // ==========================================
  // MATHEMATICS — LOGARITHMS
  // ==========================================
  "Logarithms": {
    subject: "Mathematics", title: "Logarithms",
    icon: "📊", estimatedTime: "3 min read",
    sections: [
      { heading: "What is a Logarithm?", type: "text",
        content: "A logarithm answers: to what power must I raise the base to get this number? log₂8 = 3 because 2³ = 8. Logarithms and indices are inverse operations." },
      { heading: "Key Laws", type: "cards", items: [
        { title: "Product rule", body: "log(AB) = log A + log B." },
        { title: "Quotient rule", body: "log(A/B) = log A - log B." },
        { title: "Power rule", body: "log(Aⁿ) = n times log A. Example: log(x³) = 3log(x)." },
        { title: "Change of base", body: "log_b(x) = log(x)/log(b). Example: log₂8 = log8/log2 = 3." },
        { title: "Special values", body: "log(1)=0. log₁₀(10)=1. log₁₀(10ⁿ)=n." }
      ]},
      { heading: "Solving Log Equations", type: "steps", items: [
        "Convert to index form: logₐx = b means x = aᵇ.",
        "Apply log laws to simplify the equation first.",
        "If same base both sides, drop the log and equate arguments directly.",
        "Example: log₂x = 3 means x = 2³ = 8.",
        "Example: log(x) + log(x-3) = 1 means log[x(x-3)] = 1 means x(x-3) = 10."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "log without a base written means log base 10. ln means natural log (base e). Memorise: log(1)=0, log(10)=1, log(100)=2, log(1000)=3. These shortcuts appear regularly." }
    ]
  },

  // ==========================================
  // MATHEMATICS — VARIATION
  // ==========================================
  "Variation": {
    subject: "Mathematics", title: "Variation",
    icon: "⚖️", estimatedTime: "2 min read",
    sections: [
      { heading: "Types of Variation", type: "cards", items: [
        { title: "Direct variation", body: "y is proportional to x means y = kx. As x increases, y increases proportionally." },
        { title: "Inverse variation", body: "y is proportional to 1/x means y = k/x. As x increases, y decreases." },
        { title: "Joint variation", body: "y is proportional to xz means y = kxz. Varies directly as both x and z." },
        { title: "Partial variation", body: "y = a + bx. Partly constant, partly varies with x." },
        { title: "Combined variation", body: "y is proportional to x/z means y = kx/z." }
      ]},
      { heading: "Solving Variation Problems", type: "steps", items: [
        "Write the proportional relationship using words or symbols.",
        "Replace proportional with equals k to introduce the constant.",
        "Substitute the given initial values to find k.",
        "Write the complete equation with k substituted.",
        "Use the equation to find the unknown value."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Always find k FIRST using the initial values given. Once you have k, substituting any new values gives you the answer directly. Never skip finding k." }
    ]
  }


,

  // ==========================================
  // MATHEMATICS — SETS & VENN DIAGRAMS
  // ==========================================
  "Sets & Venn Diagrams": {
    subject: "Mathematics", title: "Sets & Venn Diagrams",
    icon: "⭕", estimatedTime: "2 min read",
    sections: [
      { heading: "Key Set Notation", type: "cards", items: [
        { title: "Union (A∪B)", body: "Everything in A OR B or both. Formula: n(A∪B) = n(A) + n(B) - n(A∩B)." },
        { title: "Intersection (A∩B)", body: "Only elements in BOTH A and B." },
        { title: "Complement (A')", body: "Everything NOT in A. A' = Universal set - A." },
        { title: "Three sets formula", body: "n(A∪B∪C) = n(A)+n(B)+n(C) - n(A∩B) - n(A∩C) - n(B∩C) + n(A∩B∩C)." }
      ]},
      { heading: "Venn Diagram Strategy", type: "steps", items: [
        "Start from the INNERMOST region (where all sets overlap) and work outward.",
        "Fill in the intersection first using the given n(A∩B).",
        "Then fill the part of A only (not in B) and the part of B only (not in A).",
        "Finally fill the region outside all sets — elements in neither.",
        "Verify: all regions must add up to the total Universal set count."
      ]},
      { heading: "Finding Neither", type: "steps", items: [
        "n(neither) = n(Universal) - n(A∪B).",
        "First use the union formula to find n(A∪B).",
        "Then subtract from the total Universal set.",
        "Example: 50 students, 30 in Maths, 25 in English, 10 in both.",
        "n(M∪E) = 30+25-10 = 45. n(neither) = 50-45 = 5."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "For neither questions: always use the union formula first to find n(A∪B), then subtract from the Universal set total. Do not try to guess from the Venn diagram alone." }
    ]
  },

  // ==========================================
  // MATHEMATICS — VECTORS & MECHANICS
  // ==========================================
  "Vectors & Mechanics": {
    subject: "Mathematics", title: "Vectors & Mechanics",
    icon: "➡️", estimatedTime: "2 min read",
    sections: [
      { heading: "Vector vs Scalar", type: "cards", items: [
        { title: "Vector", body: "Has magnitude AND direction. Examples: velocity, force, displacement, acceleration." },
        { title: "Scalar", body: "Has magnitude only (no direction). Examples: speed, mass, temperature, distance." },
        { title: "Adding vectors", body: "Add corresponding components: (a,b) + (c,d) = (a+c, b+d)." },
        { title: "Magnitude", body: "|v| = √(x² + y²) for vector v = (x, y)." }
      ]},
      { heading: "Projectile Motion Key Facts", type: "cards", items: [
        { title: "Maximum range angle", body: "45 degrees gives MAXIMUM horizontal range for a projectile. RECURRING every year!" },
        { title: "Complementary angles", body: "Angles that add to 90° give the same range. 30° and 60° give equal range." },
        { title: "Horizontal component", body: "vₓ = v cosθ. Constant — no horizontal acceleration in ideal projectile." },
        { title: "Vertical component", body: "vᵧ = v sinθ. Decreases due to gravity." }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "For projectile motion: 45 degrees gives maximum range. This appears almost every year in Physics and sometimes in Maths. Complementary angles (e.g. 30 and 60) give the same range as each other." }
    ]
  },

  // ==========================================
  // MATHEMATICS — POLYNOMIALS
  // ==========================================
  "Polynomials": {
    subject: "Mathematics", title: "Polynomials",
    icon: "📈", estimatedTime: "2 min read",
    sections: [
      { heading: "Key Theorems", type: "cards", items: [
        { title: "Remainder theorem", body: "When f(x) is divided by (x-a), the remainder = f(a). Example: f(x)=x³-2x+1 divided by (x-2): remainder = f(2) = 8-4+1 = 5." },
        { title: "Factor theorem", body: "If f(a) = 0, then (x-a) is a FACTOR of f(x). The remainder is zero." },
        { title: "Degree", body: "Highest power of x in the polynomial. Degree 2 = quadratic. Degree 3 = cubic." }
      ]},
      { heading: "Solving Polynomial Questions", type: "steps", items: [
        "For remainder: substitute the value directly into f(x) and evaluate.",
        "For factor: set (x-a) = 0 to find a, then substitute into f(x). If result = 0, it IS a factor.",
        "For full factorisation: use factor theorem to find one factor, then do polynomial long division.",
        "Try x = 1, -1, 2, -2 first — these are the most common roots in exam questions."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Always try x = 1 and x = -1 first when hunting for factors. These work surprisingly often in JAMB and Post-UTME questions and save a lot of time." }
    ]
  },

  // ==========================================
  // PHYSICS — MECHANICS
  // ==========================================
  "Mechanics": {
    subject: "Physics", title: "Mechanics",
    icon: "⚙️", estimatedTime: "4 min read",
    sections: [
      { heading: "Equations of Motion (SUVAT)", type: "cards", items: [
        { title: "v = u + at", body: "Final velocity = initial velocity + (acceleration x time)." },
        { title: "s = ut + ½at²", body: "Displacement = (u x t) + half (a x t squared)." },
        { title: "v² = u² + 2as", body: "Use this when time is not given in the question." },
        { title: "s = (u+v)/2 x t", body: "Displacement = average velocity x time." }
      ]},
      { heading: "Newton's Laws", type: "cards", items: [
        { title: "1st Law", body: "Object stays at rest or moves uniformly unless a net external force acts on it." },
        { title: "2nd Law", body: "F = ma. Force = mass x acceleration. Units: Newtons (N)." },
        { title: "3rd Law", body: "Every action has an equal and opposite reaction." },
        { title: "Weight", body: "W = mg. g = 9.8 m/s² or use 10 m/s² when told to approximate." }
      ]},
      { heading: "Work, Energy and Power", type: "cards", items: [
        { title: "Work done", body: "W = mgh for vertical lift. Example: 10kg x 9.8 x 2.5m = 245J. RECURRING EVERY YEAR!" },
        { title: "Kinetic energy", body: "KE = ½mv²." },
        { title: "Potential energy", body: "PE = mgh." },
        { title: "Power", body: "P = Work/time = Fv. Units: Watts (W)." },
        { title: "Spring PE", body: "PE = ½kx² where k = spring constant and x = F/k = extension. RECURRING!" }
      ]},
      { heading: "Spring PE Worked Example", type: "steps", items: [
        "k = 1500 N/m, F = 75N.",
        "Extension x = F/k = 75/1500 = 0.05m.",
        "PE = ½kx² = ½ x 1500 x (0.05)² = 750 x 0.0025 = 1.875J ≈ 1.9J.",
        "This exact question appeared in 2019!"
      ]},
      { heading: "Projectile Motion", type: "cards", items: [
        { title: "Maximum range", body: "45 degrees gives maximum horizontal range. RECURRING every year!" },
        { title: "Horizontal", body: "vₓ = v cosθ. Constant — no horizontal acceleration." },
        { title: "Vertical", body: "vᵧ = v sinθ. Decreases due to gravity." }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "W = mgh. Example: 10kg block lifted 2.5m with g=9.8: W = 10 x 9.8 x 2.5 = 245J. This appeared in 2020. The formula never changes — memorise it and apply directly." }
    ]
  },

  // ==========================================
  // PHYSICS — ELECTRICITY & MAGNETISM
  // ==========================================
  "Electricity & Magnetism": {
    subject: "Physics", title: "Electricity & Magnetism",
    icon: "⚡", estimatedTime: "4 min read",
    sections: [
      { heading: "Basic Electrical Quantities", type: "cards", items: [
        { title: "Ohm's Law", body: "V = IR. Voltage = Current x Resistance. V in Volts, I in Amps, R in Ohms." },
        { title: "Power", body: "P = IV = I²R = V²/R. Units: Watts (W)." },
        { title: "Energy cost", body: "Energy (kWh) = Power (kW) x Time (hours). Cost = Energy x rate per kWh. RECURRING!" },
        { title: "Power transmission loss", body: "P_loss = I²R. Find current I = P/V first, then P_loss = I²R. RECURRING!" }
      ]},
      { heading: "Electricity Cost Worked Example", type: "steps", items: [
        "1A, 200V line, 24 hours, 5 kobo per kWh.",
        "Power = IV = 1 x 200 = 200W = 0.2kW.",
        "Energy = 0.2kW x 24h = 4.8kWh.",
        "Cost = 4.8 x 5k = 24 kobo. Appeared in 2019!"
      ]},
      { heading: "Power Transmission Loss Worked Example", type: "steps", items: [
        "40kW cable, 800V, 2 ohm resistor.",
        "Current I = P/V = 40,000/800 = 50A.",
        "Power loss = I²R = 50² x 2 = 2500 x 2 = 5000W = 5x10³W.",
        "Appeared in 2019! Always find I first."
      ]},
      { heading: "AC Circuits", type: "cards", items: [
        { title: "RMS from peak", body: "V_rms = V_peak divided by √2. I_rms = I_peak divided by √2." },
        { title: "Mean power in AC", body: "P = V_rms²/R = V_peak²/(2R). Example: V_peak=20V, R=10 ohms → P = 400/20 = 20W. RECURRING!" }
      ]},
      { heading: "Magnetism Key Facts", type: "cards", items: [
        { title: "Mercury amalgam zinc", body: "Used in simple cell to minimize LOCAL ACTION — internal corrosion by impurities in the zinc. RECURRING!" },
        { title: "Polarisation", body: "H₂ gas buildup on copper electrode reduces EMF. Fixed with MnO₂ depolariser." },
        { title: "Solenoid", body: "Acts like a bar magnet — one end N pole, one end S pole. When suspended freely it aligns in the N-S direction. RECURRING!" }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "For power loss in transmission: you MUST find I = P/V first before using P_loss = I²R. Never skip finding the current first. High voltage transmission reduces current, which dramatically reduces I²R losses." }
    ]
  },

  // ==========================================
  // PHYSICS — THERMAL PHYSICS
  // ==========================================
  "Thermal Physics": {
    subject: "Physics", title: "Thermal Physics",
    icon: "🌡️", estimatedTime: "3 min read",
    sections: [
      { heading: "Key Thermal Concepts", type: "cards", items: [
        { title: "Specific heat capacity", body: "Q = mcΔT. Water has HIGHEST specific heat capacity of common substances ≈ 4200 J/kg°C. RECURRING!" },
        { title: "Latent heat", body: "Q = mL. Heat needed to change STATE without changing temperature." },
        { title: "Boyle's Law", body: "P₁V₁ = P₂V₂ at constant temperature. Pressure x Volume = constant. RECURRING!" }
      ]},
      { heading: "Effect of Pressure on Gas", type: "steps", items: [
        "Boyle's Law: increasing pressure decreases volume.",
        "Same mass in smaller volume means density = mass/volume INCREASES.",
        "Kinetic energy of molecules depends on TEMPERATURE only, NOT pressure.",
        "Volume DECREASES when pressure increases — a common trick question!",
        "Increasing pressure → increases density. This appeared in 2020!"
      ]},
      { heading: "Heat Transfer Methods", type: "cards", items: [
        { title: "Conduction", body: "Through solids by vibrating particles. Metals are the best conductors." },
        { title: "Convection", body: "Through fluids by bulk movement. Hot fluid rises, cool fluid sinks." },
        { title: "Radiation", body: "By electromagnetic waves (infrared). Needs no medium. Dull black surfaces are best absorbers." }
      ]},
      { heading: "Non-Renewable vs Renewable Energy", type: "cards", items: [
        { title: "Renewable", body: "Tides, solar, wind, hydroelectric, ocean waves — replenish naturally." },
        { title: "Non-renewable", body: "Fossil fuels (coal, oil, gas), nuclear fuel — finite and depletable." },
        { title: "Biomass", body: "Can be classified as non-renewable if depleted faster than it regenerates. RECURRING!" }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Water has the HIGHEST specific heat capacity of common substances in the Nigerian curriculum. Lead and copper have LOW specific heat capacities. This is why water is used as a coolant in engines." }
    ]
  },

  // ==========================================
  // PHYSICS — ATOMIC & NUCLEAR PHYSICS
  // ==========================================
  "Atomic & Nuclear Physics": {
    subject: "Physics", title: "Atomic & Nuclear Physics",
    icon: "⚛️", estimatedTime: "3 min read",
    sections: [
      { heading: "Radioactive Emissions", type: "cards", items: [
        { title: "Alpha (α)", body: "Helium nucleus (2 protons + 2 neutrons). Stopped by paper. Deflected by electric and magnetic fields (positive charge)." },
        { title: "Beta (β)", body: "Fast electron. Stopped by aluminium. Deflected by BOTH electric AND magnetic fields (negative charge). RECURRING!" },
        { title: "Gamma (γ)", body: "Electromagnetic radiation. Stopped by thick lead. NOT deflected by any field (no charge). RECURRING!" },
        { title: "Key test", body: "Deflected by both electric and magnetic fields = Beta rays. Not deflected at all = Gamma. RECURRING!" }
      ]},
      { heading: "Half-life", type: "steps", items: [
        "Half-life = time for exactly half the radioactive atoms to decay.",
        "After n half-lives: N = N₀ x (½)ⁿ.",
        "Example: 50g starting, half-life 12 hours.",
        "After 24 hours (2 half-lives): 50 x (½)² = 50 x 0.25 = 12.5g remaining."
      ]},
      { heading: "Key Discoveries", type: "cards", items: [
        { title: "J.J. Thomson", body: "Discovered the ELECTRON in 1897 using cathode ray tube experiments. RECURRING!" },
        { title: "James Chadwick", body: "Discovered the NEUTRON in 1932." },
        { title: "Thermionic emission", body: "Heating a metal causes electrons to escape from its surface. This is why valve cathodes are heated. RECURRING!" },
        { title: "Photoelectric emission", body: "Light hitting a metal causes electrons to escape. Different from thermionic — uses light, not heat." }
      ]},
      { heading: "Nuclear Reactions", type: "cards", items: [
        { title: "Fission", body: "Heavy nucleus splits into two lighter nuclei plus energy. Used in nuclear reactors and atomic bombs." },
        { title: "Fusion", body: "Two light nuclei combine to form a heavier nucleus plus energy. Powers the sun and stars. RECURRING!" }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Beta rays are deflected by BOTH electric and magnetic fields because they are electrons (charged particles). Gamma rays are electromagnetic radiation with no charge — they are NOT deflected by any field." }
    ]
  },

  // ==========================================
  // PHYSICS — ELECTRONICS & SEMICONDUCTORS
  // ==========================================
  "Electronics & Semiconductors": {
    subject: "Physics", title: "Electronics & Semiconductors",
    icon: "💻", estimatedTime: "2 min read",
    sections: [
      { heading: "Semiconductors", type: "cards", items: [
        { title: "Intrinsic semiconductor", body: "Pure semiconductor like Silicon (Si) or Germanium (Ge). Conductivity increases with temperature." },
        { title: "p-type", body: "Doped with trivalent element like boron. Holes are the majority charge carriers (positive)." },
        { title: "n-type", body: "Doped with pentavalent element like phosphorus. Electrons are the majority charge carriers (negative)." },
        { title: "p-n junction diode", body: "Forward biased: conducts current. Reverse biased: blocks current (one-way valve)." }
      ]},
      { heading: "Logic Gates", type: "cards", items: [
        { title: "AND gate", body: "Output is 1 ONLY when ALL inputs are 1. Otherwise output is 0." },
        { title: "OR gate", body: "Output is 1 when ANY input is 1. Output is 0 only when all inputs are 0." },
        { title: "NOT gate (inverter)", body: "Output is opposite of input. 0 becomes 1, 1 becomes 0." },
        { title: "NAND gate", body: "AND followed by NOT. Output is 0 only when ALL inputs are 1." },
        { title: "NOR gate", body: "OR followed by NOT. Output is 1 only when ALL inputs are 0." }
      ]},
      { heading: "Sintering", type: "cards", items: [
        { title: "What is sintering?", body: "Converting powdered material to solid blocks by applying HEAT and PRESSURE without fully melting it. Used in metallurgy and ceramics. RECURRING!" }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Thermionic emission = heating metal causes electrons to escape. Photoelectric effect = shining light causes electrons to escape. Both involve electrons leaving metal but for completely different reasons — heat vs light." }
    ]
  }


,

  // ==========================================
  // CHEMISTRY — ORGANIC CHEMISTRY
  // ==========================================
  "Organic Chemistry": {
    subject: "Chemistry", title: "Organic Chemistry",
    icon: "🧪", estimatedTime: "4 min read",
    sections: [
      { heading: "Homologous Series General Formulas", type: "cards", items: [
        { title: "Alkanes (paraffins)", body: "CₙH₂ₙ₊₂. Saturated, single bonds only. Methane CH₄, ethane C₂H₆, propane C₃H₈. Test: 2n+2 = H count. RECURRING!" },
        { title: "Alkenes (olefins)", body: "CₙH₂ₙ. One double bond. Unsaturated. Ethene CH₂=CH₂. RECURRING!" },
        { title: "Alkynes", body: "CₙH₂ₙ₋₂. One triple bond. Ethyne HC≡CH." },
        { title: "Alcohols", body: "CₙH₂ₙ₊₁OH. Hydroxyl group (-OH). Ethanol C₂H₅OH." },
        { title: "Carboxylic acids", body: "CₙH₂ₙ₊₁COOH. Carboxyl group. Ethanoic acid CH₃COOH." }
      ]},
      { heading: "IUPAC Naming — Must Know!", type: "cards", items: [
        { title: "CH₃COOH", body: "ETHANOIC ACID. Common name: acetic acid. RECURRING every year!" },
        { title: "CH₂=CH₂", body: "ETHENE. Common name: ethylene. RECURRING every year!" },
        { title: "CH₃OH", body: "Methanol. Common name: wood alcohol." },
        { title: "C₂H₅OH", body: "Ethanol. The alcohol in drinks." },
        { title: "HCOOH", body: "Methanoic acid. Common name: formic acid." }
      ]},
      { heading: "Key Reactions", type: "cards", items: [
        { title: "Esterification", body: "Organic acid + Alcohol → Ester + Water (H₂SO₄ catalyst). RCOOH + R'OH ⇌ RCOOR' + H₂O. RECURRING!" },
        { title: "Saponification", body: "Fat + NaOH → Soap + Glycerol. Glycerol is the BY-PRODUCT. RECURRING!" },
        { title: "Hydrolysis", body: "Breaking down with water using acid or enzyme." }
      ]},
      { heading: "Natural Polymers and Petroleum", type: "cards", items: [
        { title: "Cotton = Cellulose", body: "Almost pure CELLULOSE. RECURRING every year!" },
        { title: "Starch", body: "Polysaccharide. Energy storage in plants." },
        { title: "NOT from petroleum fractions", body: "Hydrogen and ether are NOT obtained by fractional distillation of petroleum. RECURRING!" },
        { title: "Petroleum fractions low to high boiling point", body: "Refinery gas, petrol, naphtha, kerosene, diesel, lubricating oil, bitumen." }
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "C₂₄H₄₈: check 2(24)+2 = 50, which does not equal 48. So it is NOT an alkane — it fits CₙH₂ₙ (alkene or cycloalkane). RECURRING trap!",
        "Saponification is the BASE hydrolysis of a fat — the reverse of esterification.",
        "Glycerol is the by-product of soap production, not of alcohol production.",
        "IUPAC names are always preferred: ethanoic acid NOT acetic acid, ethene NOT ethylene."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "To check if a formula is an alkane: calculate 2n+2. If it matches H count it is an alkane. C₇H₁₆: 2(7)+2=16 ✓ alkane. C₂₄H₄₈: 2(24)+2=50 ≠ 48 → NOT an alkane. This exact trap appeared in 2019." }
    ]
  },

  // ==========================================
  // CHEMISTRY — ATOMIC STRUCTURE & BONDING
  // ==========================================
  "Atomic Structure & Bonding": {
    subject: "Chemistry", title: "Atomic Structure & Bonding",
    icon: "⚛️", estimatedTime: "3 min read",
    sections: [
      { heading: "Atomic Structure", type: "cards", items: [
        { title: "Atomic number (Z)", body: "Number of protons = number of electrons in a neutral atom. RECURRING! Example: Pb has Z=82." },
        { title: "Mass number (A)", body: "Protons + Neutrons. If A=209 and Z=82: neutrons = 209-82 = 127." },
        { title: "Isotopes", body: "Same atomic number Z, different mass number A. Same element, different neutron count." },
        { title: "Electron configuration", body: "Shells hold 2, 8, 8, 18 electrons. Fill from the innermost shell outward." }
      ]},
      { heading: "Types of Chemical Bonds", type: "cards", items: [
        { title: "Ionic bond", body: "Transfer of electrons. Metal LOSES electrons to become a positive cation. Non-metal GAINS to become a negative anion." },
        { title: "Covalent bond", body: "SHARING of electrons between non-metals. Single bond = 2 shared, double = 4, triple = 6." },
        { title: "Metallic bond", body: "Sea of delocalised electrons surrounding positive metal ions. Explains electrical conductivity." },
        { title: "Hydrogen bond", body: "Between H and N, O, or F atoms. Explains why water has an unusually HIGH boiling point. RECURRING!" },
        { title: "Van der Waals forces", body: "Weakest intermolecular forces. Found between all molecules, especially non-polar ones." }
      ]},
      { heading: "Oxidation States Step by Step", type: "steps", items: [
        "In neutral compounds: sum of all oxidation states = 0.",
        "In ions: sum of oxidation states = charge of the ion.",
        "O is usually -2. H is usually +1. Group I metals = +1. Group II = +2.",
        "KMnO₄: K(+1) + Mn + 4xO(-2) = 0 → +1+Mn-8=0 → Mn = +7. RECURRING!",
        "K₂Cr₂O₇: 2(+1) + 2Cr + 7(-2) = 0 → 2+2Cr-14=0 → Cr = +6."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Hydrogen bonds explain water's anomalously HIGH boiling point. Without hydrogen bonds, water would boil at -80°C. Hydrogen bonds also make ice LESS dense than liquid water, which is why ice floats." }
    ]
  },

  // ==========================================
  // CHEMISTRY — ACIDS, BASES & SALTS
  // ==========================================
  "Acids, Bases & Salts": {
    subject: "Chemistry", title: "Acids, Bases & Salts",
    icon: "🧫", estimatedTime: "3 min read",
    sections: [
      { heading: "pH Scale", type: "cards", items: [
        { title: "pH less than 7", body: "ACIDIC. Lower pH = more acidic. pH 1 is more acidic than pH 5. RECURRING!" },
        { title: "pH equal to 7", body: "NEUTRAL. Pure water at 25°C." },
        { title: "pH greater than 7", body: "BASIC or ALKALINE." },
        { title: "Comparing acidity", body: "Y(pH5) is MORE acidic than Z(pH9). Z at pH9 is BASIC not acidic. RECURRING trap!" }
      ]},
      { heading: "Thermal Decomposition of Nitrates", type: "cards", items: [
        { title: "Group I nitrates (K, Na)", body: "Produce metal NITRITE + oxygen. 2KNO₃ → 2KNO₂ + O₂. RECURRING!" },
        { title: "Mg, Fe and others above Cu", body: "Produce metal OXIDE + nitrogen dioxide + oxygen. 2Mg(NO₃)₂ → 2MgO + 4NO₂ + O₂. RECURRING!" },
        { title: "Silver and mercury nitrates", body: "Produce the METAL + nitrogen dioxide + oxygen. 2AgNO₃ → 2Ag + 2NO₂ + O₂." }
      ]},
      { heading: "Types of Salts", type: "cards", items: [
        { title: "Normal salt", body: "All replaceable H⁺ from acid has been replaced. Example: NaCl, Na₂SO₄." },
        { title: "Acid salt", body: "Only SOME H⁺ replaced. Example: NaHCO₃ (sodium hydrogencarbonate)." },
        { title: "Basic salt", body: "Contains OH⁻ alongside the salt anion. Example: Pb(OH)Cl." }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Nitrate decomposition pattern: Group I → nitrite + O₂. Others like Mg and Fe → oxide + NO₂ + O₂. Silver → silver metal + NO₂ + O₂. Each group gives a different set of products!" }
    ]
  },

  // ==========================================
  // CHEMISTRY — GASES & KINETIC THEORY
  // ==========================================
  "Gases & Kinetic Theory": {
    subject: "Chemistry", title: "Gases & Kinetic Theory",
    icon: "💨", estimatedTime: "3 min read",
    sections: [
      { heading: "Gas Laws", type: "cards", items: [
        { title: "Boyle's Law", body: "P₁V₁ = P₂V₂ at constant temperature. Pressure x Volume = constant. RECURRING!" },
        { title: "Charles' Law", body: "V₁/T₁ = V₂/T₂ at constant pressure. Temperature MUST be in Kelvin." },
        { title: "Pressure Law", body: "P₁/T₁ = P₂/T₂ at constant volume." },
        { title: "Ideal gas equation", body: "PV = nRT. n = moles, R = 8.314 J/mol/K, T in Kelvin." }
      ]},
      { heading: "Kinetic Theory Key Points", type: "cards", items: [
        { title: "Elastic collisions", body: "Gas molecule collisions are PERFECTLY elastic — no kinetic energy is lost. RECURRING!" },
        { title: "Temperature and kinetic energy", body: "Average kinetic energy of molecules is proportional to ABSOLUTE TEMPERATURE (Kelvin) only." },
        { title: "Pressure and density", body: "Increasing pressure decreases volume. Same mass in smaller volume means DENSITY INCREASES. RECURRING!" },
        { title: "Pressure and kinetic energy", body: "Pressure does NOT affect kinetic energy. Only temperature affects KE." }
      ]},
      { heading: "Air Separation with Alkaline Pyrogallol and Heated Copper", type: "steps", items: [
        "Alkaline pyrogallol absorbs all the O₂.",
        "The alkaline solution (NaOH) absorbs all the CO₂.",
        "Water vapour condenses on cooling.",
        "Heated copper absorbs any remaining O₂.",
        "Result: only RARE GASES (He, Ne, Ar) remain — they react with absolutely nothing. RECURRING!"
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Kinetic energy depends ONLY on temperature, not on pressure. Increasing pressure compresses the gas (smaller volume, higher density) but does NOT change the average kinetic energy of the molecules." }
    ]
  },

  // ==========================================
  // CHEMISTRY — METALS & NON-METALS
  // ==========================================
  "Metals & Non-Metals": {
    subject: "Chemistry", title: "Metals, Non-Metals and Reactivity",
    icon: "⚙️", estimatedTime: "3 min read",
    sections: [
      { heading: "Reactivity Series Most to Least Reactive", type: "cards", items: [
        { title: "Very reactive (K, Na, Ca)", body: "React vigorously with COLD water. Sodium + water → sodium hydroxide + hydrogen gas. Highly exothermic!" },
        { title: "Moderately reactive (Mg, Al, Zn, Fe)", body: "React with hot water or steam. Magnesium + steam → magnesium oxide + hydrogen." },
        { title: "Copper is BELOW hydrogen", body: "Copper CANNOT displace hydrogen from water or steam. RECURRING every year!" },
        { title: "Inert (Ag, Au, Pt)", body: "Do not react with water, dilute acids, or air under normal conditions." }
      ]},
      { heading: "Alloys to Memorise", type: "cards", items: [
        { title: "Bronze = Copper + Tin", body: "Cu + Sn. RECURRING every year! Used since ancient times." },
        { title: "Brass = Copper + Zinc", body: "Cu + Zn. Yellow metal used in musical instruments." },
        { title: "Steel = Iron + Carbon", body: "Fe + small amount of C. Stronger than pure iron." },
        { title: "Solder = Lead + Tin", body: "Pb + Sn. Used to join metal components in electronics." },
        { title: "Duralumin = Aluminium + Copper + Magnesium", body: "Strong and lightweight. Used in aircraft." }
      ]},
      { heading: "Hard Water", type: "cards", items: [
        { title: "Causes of hardness", body: "Ca²⁺ and Mg²⁺ ions dissolved from limestone and dolomite. These react with soap to form scum. RECURRING!" },
        { title: "Temporary hardness", body: "Caused by Ca(HCO₃)₂. Removed by simply BOILING." },
        { title: "Permanent hardness", body: "Caused by CaSO₄ and MgSO₄. NOT removed by boiling. Use Na₂CO₃ or ion exchange." }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Bronze = Tin. Brass = Zinc. Both have copper as the base metal. Remember: Bronze is from the Bronze Age — tin was the earlier discovery. Or: Brass sounds like Jazz — brass instruments are made of it." }
    ]
  },

  // ==========================================
  // CHEMISTRY — WATER & SOLUTIONS
  // ==========================================
  "Water & Solutions": {
    subject: "Chemistry", title: "Water and Solutions",
    icon: "💧", estimatedTime: "2 min read",
    sections: [
      { heading: "Three Key Water Phenomena", type: "cards", items: [
        { title: "Efflorescence", body: "Crystals LOSE water of crystallisation to dry air and crumble into white powder. Example: washing soda crystals Na₂CO₃·10H₂O → Na₂CO₃ white powder. RECURRING!" },
        { title: "Deliquescence", body: "Substance ABSORBS moisture from air and DISSOLVES in it — becomes a liquid. Example: NaOH, CaCl₂, P₂O₅." },
        { title: "Hygroscopy", body: "Substance absorbs moisture from air WITHOUT dissolving. Example: silica gel, concentrated H₂SO₄." }
      ]},
      { heading: "Solubility Rules", type: "cards", items: [
        { title: "Temperature effect on solids", body: "Most solid solutes: solubility INCREASES as temperature increases." },
        { title: "Temperature effect on gases", body: "Gas solubility DECREASES as temperature increases — why warm drinks go flat faster." },
        { title: "Saturated solution", body: "Cannot dissolve any more solute at that temperature." }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Efflorescence = crystals LOSE water and crumble (effloresce = bloom outward, lose). Deliquescence = crystals GAIN water and dissolve (deliquesce = melt away). They are exact opposites!" }
    ]
  },

  // ==========================================
  // CHEMISTRY — STOICHIOMETRY & MOLES
  // ==========================================
  "Stoichiometry & Moles": {
    subject: "Chemistry", title: "Stoichiometry and Moles",
    icon: "⚖️", estimatedTime: "3 min read",
    sections: [
      { heading: "Key Definitions", type: "cards", items: [
        { title: "Mole", body: "Amount of substance containing 6.02×10²³ particles (Avogadro's number)." },
        { title: "Moles formula", body: "n = m/M. Moles = mass in grams divided by molar mass in g/mol." },
        { title: "Molar mass", body: "Mass of 1 mole in grams. Equals the relative atomic or molecular mass in grams." }
      ]},
      { heading: "Stoichiometry Steps", type: "steps", items: [
        "Write a BALANCED chemical equation first — this is non-negotiable.",
        "Find moles of the given substance using n = m/M.",
        "Use the mole ratio from the equation to find moles of the unknown substance.",
        "Convert moles back to mass, volume, or number of particles as required.",
        "For limiting reagent: find which reactant runs out first."
      ]},
      { heading: "Comparing Masses Worked Example", type: "steps", items: [
        "Compare 0.2 mol SO₂ vs 0.2 mol CO₂.",
        "Molar mass of SO₂ = 32+16+16 = 64 g/mol.",
        "Molar mass of CO₂ = 12+16+16 = 44 g/mol.",
        "Mass of 0.2 mol SO₂ = 0.2 x 64 = 12.8g.",
        "Mass of 0.2 mol CO₂ = 0.2 x 44 = 8.8g. So SO₂ sample is heavier."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Always write a balanced equation first. The coefficients ARE the mole ratios. If 4 mol H₂ reacts with 1 mol F₂, and only 1 mol F₂ is available, then F₂ is the limiting reagent." }
    ]
  },

  // ==========================================
  // CHEMISTRY — CHEMICAL EQUILIBRIUM
  // ==========================================
  "Chemical Equilibrium": {
    subject: "Chemistry", title: "Chemical Equilibrium",
    icon: "⚖️", estimatedTime: "3 min read",
    sections: [
      { heading: "Le Chatelier's Principle", type: "text",
        content: "If a system at equilibrium is disturbed, it will shift to OPPOSE the change and restore equilibrium. This one principle governs all equilibrium questions." },
      { heading: "How Changes Affect Equilibrium", type: "cards", items: [
        { title: "Increase concentration of reactant", body: "Shifts FORWARD (toward products) to use up the extra reactant." },
        { title: "Increase pressure", body: "Shifts toward the side with FEWER moles of gas." },
        { title: "Decrease pressure", body: "Shifts toward the side with MORE moles of gas." },
        { title: "Increase temperature", body: "Shifts in the ENDOTHERMIC direction (absorbs the added heat)." },
        { title: "Decrease temperature", body: "Shifts in the EXOTHERMIC direction (releases heat to compensate)." },
        { title: "Add a catalyst", body: "Speeds up BOTH directions equally. Does NOT shift the equilibrium position at all. RECURRING!" }
      ]},
      { heading: "Haber Process N₂+3H₂⇌2NH₃ ΔH=-92kJ", type: "steps", items: [
        "The forward reaction is EXOTHERMIC (ΔH is negative).",
        "More NH₃ formed by: INCREASING pressure — 4 moles of gas on left vs 2 on right.",
        "More NH₃ formed by: DECREASING temperature — shifts exothermic (forward) direction. RECURRING!",
        "Backward reaction promoted by: DECREASED pressure + INCREASED temperature.",
        "Catalyst (iron) only increases the RATE — it does NOT change the amount of NH₃ at equilibrium."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Haber Process: LOW temperature favours more NH₃ (exothermic forward reaction). HIGH pressure favours more NH₃ (fewer moles on product side). Catalyst: no effect on equilibrium yield, only speed." }
    ]
  },

  // ==========================================
  // CHEMISTRY — THERMOCHEMISTRY
  // ==========================================
  "Thermochemistry": {
    subject: "Chemistry", title: "Thermochemistry",
    icon: "🌡️", estimatedTime: "2 min read",
    sections: [
      { heading: "Exothermic vs Endothermic", type: "cards", items: [
        { title: "Exothermic reaction", body: "RELEASES heat to surroundings. ΔH is NEGATIVE. Surroundings get HOTTER. Examples: combustion, dissolving Na in water, neutralisation. RECURRING!" },
        { title: "Endothermic reaction", body: "ABSORBS heat from surroundings. ΔH is POSITIVE. Surroundings get COLDER. Examples: photosynthesis, dissolving NH₄NO₃. RECURRING!" }
      ]},
      { heading: "Metallic Na vs NaCl in Water", type: "cards", items: [
        { title: "Metallic Na + water", body: "2Na + 2H₂O → 2NaOH + H₂. Highly EXOTHERMIC — sodium fizzes violently and may catch fire! RECURRING!" },
        { title: "NaCl in water", body: "Slightly endothermic. Solution becomes slightly cooler. Very different from Na metal!" }
      ]},
      { heading: "Heat Calculation", type: "steps", items: [
        "Q = mcΔT.",
        "m = mass of solution in grams. c = 4.18 J/g°C for water. ΔT = temperature change.",
        "If temperature RISES after dissolving — reaction is exothermic.",
        "If temperature FALLS after dissolving — reaction is endothermic."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "EXOthermic = heat EXITs the reaction (surroundings heat up). ENDOthermic = heat ENTERs the reaction (surroundings cool down). The prefix tells you the direction heat flows." }
    ]
  },

  // ==========================================
  // CHEMISTRY — RATES OF REACTION
  // ==========================================
  "Rates of Reaction": {
    subject: "Chemistry", title: "Rates of Reaction",
    icon: "⏱️", estimatedTime: "2 min read",
    sections: [
      { heading: "Factors Affecting Rate", type: "cards", items: [
        { title: "Temperature", body: "Increasing temperature increases rate. More molecules have enough energy to react. A 10°C rise roughly doubles the rate." },
        { title: "Concentration", body: "Higher concentration means more molecules in the same space, so more frequent collisions and higher rate." },
        { title: "Surface area", body: "Smaller particles have larger surface area so more collisions occur. Powder reacts faster than a lump of the same mass." },
        { title: "Catalyst", body: "Provides a pathway with lower activation energy so more molecules can react. Not consumed. Does NOT change equilibrium!" },
        { title: "Pressure (gases)", body: "Higher pressure increases concentration of gas molecules, increasing collision frequency." }
      ]},
      { heading: "Collision Theory", type: "text",
        content: "For a reaction to occur, molecules must COLLIDE with SUFFICIENT ENERGY (at least the activation energy) and with the correct ORIENTATION. Any factor that increases the frequency of effective collisions increases the reaction rate." },
      { heading: "Quick Tip", type: "tip",
        content: "Catalyst lowers activation energy — it does NOT change ΔH (enthalpy), does NOT change the equilibrium position, and is NOT consumed. It only makes equilibrium reached FASTER. These are the four most common misconceptions." }
    ]
  },

  // ==========================================
  // CHEMISTRY — ELECTROCHEMISTRY
  // ==========================================
  "Electrochemistry": {
    subject: "Chemistry", title: "Electrochemistry",
    icon: "⚡", estimatedTime: "2 min read",
    sections: [
      { heading: "Electrolysis", type: "cards", items: [
        { title: "Cathode (negative electrode)", body: "REDUCTION occurs here. Positive cations are attracted and GAIN electrons. Metals are deposited at cathode." },
        { title: "Anode (positive electrode)", body: "OXIDATION occurs here. Negative anions are attracted and LOSE electrons." },
        { title: "Faraday's law", body: "Mass deposited = (I x t x M) divided by (n x F). F = 96,500 C/mol." }
      ]},
      { heading: "Simple Electrochemical Cell", type: "cards", items: [
        { title: "Local action", body: "Internal corrosion at the zinc electrode caused by impurities forming tiny local cells. Prevented by mercury amalgam on the zinc surface. RECURRING!" },
        { title: "Polarisation", body: "Hydrogen gas builds up on the copper electrode, reducing EMF. Fixed by adding MnO₂ as a depolariser." }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Remember An Ox Red Cat: ANOde = OXidation. REDuction at CAThode. Cations (positive ions) go to the cathode (negative electrode) because opposite charges attract." }
    ]
  },

  // ==========================================
  // CHEMISTRY — SEPARATION TECHNIQUES
  // ==========================================
  "Separation Techniques": {
    subject: "Chemistry", title: "Separation Techniques",
    icon: "🔬", estimatedTime: "2 min read",
    sections: [
      { heading: "When to Use Each Technique", type: "cards", items: [
        { title: "Filtration", body: "Separates an INSOLUBLE solid from a liquid. Solid stays on filter paper (residue). Liquid passes through (filtrate)." },
        { title: "Evaporation", body: "Removes liquid to leave a dissolved SOLID behind. Use when solid does not decompose on heating." },
        { title: "Crystallisation", body: "Controlled cooling of a hot saturated solution to form pure crystals. Better than evaporation for heat-sensitive compounds." },
        { title: "Distillation", body: "Separates liquids with DIFFERENT boiling points. More volatile liquid boils off first and is collected." },
        { title: "Fractional distillation", body: "For liquids with CLOSE boiling points, like crude oil fractionation. Uses a fractionating column. RECURRING!" },
        { title: "Chromatography", body: "Separates by how far components travel with a solvent. Based on different solubility or affinity." }
      ]},
      { heading: "Petroleum Fractions", type: "cards", items: [
        { title: "Order low to high boiling point", body: "Refinery gas, petrol, naphtha, kerosene, diesel, lubricating oil, bitumen." },
        { title: "NOT from petroleum", body: "Hydrogen and diethyl ether are NOT obtained from crude oil fractionation. RECURRING!" }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Choose the technique based on the problem: solid in liquid → filtration. Two liquids → distillation or fractional distillation. Dissolved solid → evaporation or crystallisation. Mixture of dyes → chromatography." }
    ]
  },

  // ==========================================
  // CHEMISTRY — ENVIRONMENTAL CHEMISTRY
  // ==========================================
  "Environmental Chemistry": {
    subject: "Chemistry", title: "Environmental Chemistry",
    icon: "🌍", estimatedTime: "2 min read",
    sections: [
      { heading: "Air Pollutants", type: "cards", items: [
        { title: "Carbon monoxide (CO)", body: "From incomplete combustion of fuels. Toxic — binds to haemoglobin more strongly than O₂, preventing oxygen transport." },
        { title: "Sulphur dioxide (SO₂)", body: "From burning fossil fuels containing sulphur. Causes acid rain." },
        { title: "Nitrogen oxides (NOₓ)", body: "From car engines at high temperatures. Causes acid rain and photochemical smog." },
        { title: "Carbon dioxide (CO₂)", body: "Greenhouse gas. Causes global warming and climate change." },
        { title: "Mercury (Hg²⁺)", body: "From industrial effluents. Highly toxic heavy metal pollutant. Causes Minamata disease. RECURRING!" }
      ]},
      { heading: "Water Pollution", type: "cards", items: [
        { title: "Eutrophication", body: "Excess fertilisers run into water → algae bloom → depletes oxygen → fish die." },
        { title: "Heavy metals", body: "Mercury, lead, cadmium from industrial discharge. Accumulate in food chain." },
        { title: "Oil spills", body: "Harm marine life and prevent gas exchange at water surface." }
      ]},
      { heading: "Ozone Layer", type: "cards", items: [
        { title: "Ozone (O₃)", body: "Found in the stratosphere. Absorbs harmful UV radiation from the sun." },
        { title: "Ozone depletion", body: "CFCs from refrigerators and aerosols break down O₃. Chlorine radicals are the catalyst." }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Mercury (Hg²⁺) is the heavy metal ion most associated with water pollution in UNIBEN questions. It comes from industrial effluents and causes Minamata disease — a severe neurological condition." }
    ]
  },

  // ==========================================
  // CHEMISTRY — MIXTURES & COMPOUNDS
  // ==========================================
  "Mixtures & Compounds": {
    subject: "Chemistry", title: "Mixtures and Compounds",
    icon: "🔬", estimatedTime: "2 min read",
    sections: [
      { heading: "Physical vs Chemical Changes", type: "cards", items: [
        { title: "Physical change", body: "NO new substance is formed. Usually reversible. Examples: melting, boiling, dissolving salt, breaking glass, magnetising iron. RECURRING!" },
        { title: "Chemical change", body: "NEW substance or substances are formed. Usually irreversible. Examples: burning, rusting, cooking food, fermentation, electrolysis." }
      ]},
      { heading: "Mixtures vs Compounds", type: "cards", items: [
        { title: "Mixture", body: "Components are NOT chemically combined. Can be separated by physical methods. Each component keeps its own properties." },
        { title: "Compound", body: "Elements chemically combined in a FIXED ratio. Cannot be separated by physical methods. Has NEW properties different from the elements." }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Key test: if you can separate it by a simple physical method (filtration, distillation, magnetism, evaporation) then it is a MIXTURE. If a chemical reaction is needed to separate the components then it is a COMPOUND." }
    ]
  },

  // ==========================================
  // CHEMISTRY — LABORATORY TECHNIQUES
  // ==========================================
  "Laboratory Techniques": {
    subject: "Chemistry", title: "Laboratory Techniques",
    icon: "🧪", estimatedTime: "2 min read",
    sections: [
      { heading: "Common Gas Tests", type: "cards", items: [
        { title: "Test for CO₂", body: "Pass gas through limewater (Ca(OH)₂). Limewater turns MILKY or WHITE if CO₂ is present." },
        { title: "Test for O₂", body: "A glowing splint RELIGHTS in the presence of oxygen." },
        { title: "Test for H₂", body: "Burns with a SQUEAKY POP when a lighted splint is applied in the presence of air." },
        { title: "Test for Cl₂", body: "Turns damp blue litmus RED then BLEACHES it white." },
        { title: "Test for starch", body: "Iodine solution turns BLUE-BLACK in the presence of starch." },
        { title: "Test for protein", body: "Biuret test: NaOH + CuSO₄ solution turns PURPLE if protein is present." }
      ]},
      { heading: "Sintering", type: "cards", items: [
        { title: "What is sintering?", body: "Converting powdered material into solid blocks by applying HEAT and PRESSURE without fully melting it. Used in powder metallurgy and ceramics. RECURRING!" }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "For gas tests, always work in this order: limewater for CO₂ first, then glowing splint for O₂, then burning splint for H₂. Each test is specific to one gas and will not be triggered by others." }
    ]
  },

  // ==========================================
  // CHEMISTRY — LAWS OF CHEMICAL COMBINATION
  // ==========================================
  "Laws of Chemical Combination": {
    subject: "Chemistry", title: "Laws of Chemical Combination",
    icon: "⚖️", estimatedTime: "2 min read",
    sections: [
      { heading: "The Four Laws", type: "cards", items: [
        { title: "Law of Conservation of Mass", body: "Mass is neither created nor destroyed in a chemical reaction. Total mass of reactants equals total mass of products." },
        { title: "Law of Definite Proportions", body: "A pure compound always contains the same elements combined in exactly the same proportion by mass." },
        { title: "Law of Multiple Proportions", body: "When two elements form more than one compound, the masses of one that combine with a fixed mass of the other are in simple whole number ratios. Example: CO and CO₂ — oxygen ratios are 1:2." },
        { title: "Gay-Lussac's Law of Gaseous Volumes", body: "Gases react in simple whole number ratios by volume at the same temperature and pressure. 1 vol H₂ + 1 vol Cl₂ → 2 vol HCl." }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Definite Proportions = ONE compound, ONE fixed ratio always. Multiple Proportions = SAME two elements forming MORE THAN ONE compound, with the ratios between the compounds being simple whole numbers." }
    ]
  }


,

  // ==========================================
  // BIOLOGY — HUMAN PHYSIOLOGY
  // ==========================================
  "Human Physiology": {
    subject: "Biology", title: "Human Physiology",
    icon: "🫀", estimatedTime: "4 min read",
    sections: [
      { heading: "The Skeletal System", type: "cards", items: [
        { title: "Longest bone", body: "FEMUR (thigh bone) is the longest, strongest bone in the human body. RECURRING every year!" },
        { title: "Axial skeleton", body: "Skull, vertebral column, ribs, sternum. Forms the central axis of the body." },
        { title: "Appendicular skeleton", body: "Bones of the limbs and their girdles. Tibia, radius, humerus, scapula." },
        { title: "Skeletal materials", body: "Bone, cartilage, chitin (arthropod exoskeleton). MUSCLE is NOT a skeletal material." },
        { title: "Axis vertebra (C2)", body: "Has a unique ODONTOID PROCESS (dens) — allows the head to rotate. No other vertebra has this." }
      ]},
      { heading: "Circulation", type: "cards", items: [
        { title: "Arteries vs Veins", body: "Arteries: thick muscular walls, carry blood FROM heart, NO valves. Veins: thin walls, carry blood TO heart, HAVE valves to prevent backflow. RECURRING!" },
        { title: "Capillaries", body: "Blood flows SLOWLY through capillaries to allow TIME for exchange of O₂, CO₂, nutrients, and waste. RECURRING!" },
        { title: "Blood groups", body: "AB = universal RECIPIENT (no antibodies). O = universal DONOR (no antigens). RECURRING!" },
        { title: "Pulmonary artery", body: "The only artery that carries DEOXYGENATED blood (from heart to lungs). All other arteries carry oxygenated blood." }
      ]},
      { heading: "Digestion & Excretion", type: "cards", items: [
        { title: "Liver functions", body: "Produces bile, stores iron and glycogen, deaminates amino acids, detoxifies. Does NOT produce urine (kidneys do!)." },
        { title: "Pancreas", body: "Both DIGESTIVE (enzymes: amylase, lipase, protease) and ENDOCRINE (insulin, glucagon). The only organ with both functions. RECURRING!" },
        { title: "Nephron", body: "Functional unit of the KIDNEY. Each kidney has about 1 million nephrons. Filters blood and produces urine." },
        { title: "Urea production", body: "Urea is produced in the LIVER (urea cycle). Kidneys only excrete it. Mammals excrete urea NOT ammonia (too toxic)." },
        { title: "Enzymes", body: "Invertase/sucrase breaks down sucrose → glucose + fructose. Ptyalin breaks starch. Lipase breaks fats. Peptidase breaks peptides." }
      ]},
      { heading: "Nervous & Hormonal Control", type: "cards", items: [
        { title: "Nervous vs hormonal", body: "Nervous = FAST, SHORT-TERM effects, specific pathway. Hormonal = SLOW, LONG-TERM effects, travels through blood." },
        { title: "Nerve impulse ions", body: "Na⁺ rushes IN (depolarisation) and K⁺ moves OUT (repolarisation). Na⁺ and K⁺ are the key ions. RECURRING!" },
        { title: "Cerebellum", body: "Controls BALANCE and COORDINATION. Damage affects WALKING. Cerebrum = thinking. Medulla = breathing/heartbeat." },
        { title: "Hormones", body: "Prolactin → milk production. Adrenaline → fight or flight (from adrenal gland). Insulin/Glucagon → blood sugar (from pancreas). Thyroxine → metabolism (needs iodine)." }
      ]},
      { heading: "Reproduction & Growth", type: "cards", items: [
        { title: "Mitosis", body: "Cell division for GROWTH and REPAIR. Occurs in somatic cells throughout life (NOT only in young cells). Daughter cells have SAME chromosome number as parent." },
        { title: "Mitosis organelles", body: "NUCLEUS (contains chromosomes) and CENTRIOLE (forms spindle fibres) are directly involved in mitosis." },
        { title: "Growth definition", body: "Growth is IRREVERSIBLE increase in size, dry weight, or cell number. A reversible increase (e.g. swelling) is NOT growth." },
        { title: "Glycolysis", body: "C₆H₁₂O₆ → 2C₃H₄O₃ + 4H + 2ATP. One glucose → 2 pyruvate + net 2 ATP. First stage of cellular respiration." }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Femur = longest bone. Nephron = functional unit of kidney. Pancreas = both digestive and endocrine. Arteries have NO valves. Veins HAVE valves. These 5 facts come up in almost every year." }
    ]
  },

  // ==========================================
  // BIOLOGY — ECOLOGY
  // ==========================================
  "Ecology": {
    subject: "Biology", title: "Ecology",
    icon: "🌍", estimatedTime: "3 min read",
    sections: [
      { heading: "Key Ecological Concepts", type: "cards", items: [
        { title: "Autotrophs = Producers", body: "Make their own food through photosynthesis. Green plants are the primary producers. Basis of all food chains." },
        { title: "Heterotrophs = Consumers", body: "Cannot make their own food. Include herbivores (1st order), carnivores (2nd order), omnivores." },
        { title: "Decomposers", body: "Bacteria and fungi that break down dead organic matter. Yeast and fungi are decomposers, NOT producers." },
        { title: "Food chain vs Food web", body: "Food chain = linear sequence. Food web = interconnected chains. Pyramid of ENERGY best shows energy flow (always pyramid shaped). RECURRING!" }
      ]},
      { heading: "Abiotic Factors", type: "cards", items: [
        { title: "Most important abiotic factors", body: "Temperature and rainfall are the two most universally important abiotic factors for all organisms. RECURRING!" },
        { title: "Aquatic abiotic factors", body: "Light, turbidity, pH, salinity, temperature. HUMIDITY does NOT directly affect aquatic organisms (it affects terrestrial ones). RECURRING!" },
        { title: "Fully abiotic group", body: "Wind, altitude, humidity, light — ALL non-living. Bacteria, plankton, corn = living (biotic). RECURRING!" }
      ]},
      { heading: "Ecological Relationships", type: "cards", items: [
        { title: "Mutualism", body: "Both organisms BENEFIT. Example: Rhizobium bacteria and legumes (cowpea). Bacteria fix nitrogen; plant provides carbohydrates. RECURRING!" },
        { title: "Parasitism", body: "One benefits, one is harmed. Example: tapeworm in human gut, ticks on cattle." },
        { title: "Commensalism", body: "One benefits, other is unaffected. Example: cattle egret and cattle." },
        { title: "Predation", body: "Predator kills and eats prey. Example: lion and zebra." }
      ]},
      { heading: "Sampling & Succession", type: "cards", items: [
        { title: "Why sampling?", body: "Sampling is used in ecology because the study area is usually TOO LARGE to count every organism. RECURRING!" },
        { title: "Succession", body: "Natural process of change in an ecosystem over time. Can be studied in: ponds, abandoned farmland, savannah. Well-CULTIVATED land CANNOT be studied (human interference prevents natural succession). RECURRING!" },
        { title: "Halophytes", body: "Plants adapted to grow in salty environments (mangroves, salt marshes). Hydrophytes = water. Xerophytes = dry." }
      ]},
      { heading: "Pest Control & Public Health", type: "cards", items: [
        { title: "Biological control", body: "Using natural predators to control pests WITHOUT polluting the ecosystem. Increasing natural enemies = cleanest method. RECURRING!" },
        { title: "Bilharzia hosts", body: "Primary/definitive host = MAN. Intermediate host = SNAIL. Cercaria penetrate skin during swimming. RECURRING!" },
        { title: "Soil analysis", body: "Soil + water shaken and allowed to settle = determines RELATIVE DENSITY of particles (sand settles first, clay last)." }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Mutualism = BOTH benefit (Rhizobium + legume). Parasitism = one benefits, one harmed. Autotrophs = producers. Pyramid of ENERGY (not biomass) best represents energy flow. Sampling is used because areas are too large." }
    ]
  },

  // ==========================================
  // BIOLOGY — CELL BIOLOGY
  // ==========================================
  "Cell Biology": {
    subject: "Biology", title: "Cell Biology",
    icon: "🔬", estimatedTime: "3 min read",
    sections: [
      { heading: "Cell Types", type: "cards", items: [
        { title: "Prokaryotic cells", body: "NO membrane-bound nucleus. Found in Kingdom Monera (bacteria, cyanobacteria). Simple structure." },
        { title: "Eukaryotic cells", body: "Have a membrane-bound nucleus. Found in animals, plants, fungi, protists." },
        { title: "Largest human cell", body: "The OVUM (egg cell) is the largest human cell — visible to naked eye at ~0.1mm. RECURRING!" },
        { title: "Diploblastic organisms", body: "Have TWO germ layers (ectoderm + endoderm). Examples: Hydra, jellyfish (Cnidaria). Triploblastic = 3 layers (add mesoderm) = most animals." }
      ]},
      { heading: "Cell Organelles", type: "cards", items: [
        { title: "Mitochondria", body: "Powerhouse of the cell — produces ATP. More mitochondria = more metabolically ACTIVE cell. Sperm cells have the most. RECURRING!" },
        { title: "Contractile vacuole", body: "Found in freshwater protozoa (Amoeba, Paramecium). Removes EXCESS WATER by osmosis (osmoregulation)." },
        { title: "Nucleus and centriole in mitosis", body: "Nucleus = contains chromosomes. Centriole = forms spindle fibres. These TWO are directly involved in mitotic division. RECURRING!" },
        { title: "Nucleotide components", body: "A nucleotide = 5-carbon sugar (pentose) + phosphate group + nitrogenous base. A SIX-carbon sugar is NOT part of nucleotides. RECURRING!" }
      ]},
      { heading: "Cell Division", type: "cards", items: [
        { title: "Mitosis", body: "Daughter cells = SAME chromosome number as parent. Occurs in somatic cells. NOT only in young cells — occurs throughout life for growth and repair." },
        { title: "Sickle cell genetics", body: "Two carriers AS × AS → 25% AA (normal), 50% AS (carrier), 25% SS (sickle cell disease). RECURRING!" },
        { title: "Incomplete dominance", body: "Sickle cell anaemia shows incomplete dominance — heterozygote (AS) shows an INTERMEDIATE phenotype. RECURRING!" }
      ]},
      { heading: "Viruses vs Cells", type: "cards", items: [
        { title: "What viruses have in common with animal cells", body: "DNA (or RNA). Viruses do NOT have nucleus, cytoplasm, ribosomes, or mitochondria. RECURRING!" },
        { title: "Diseases NOT caused by viruses", body: "Maize rust = FUNGAL. Ringworm = fungal. Tetanus, typhoid = bacterial. Measles, Newcastle disease, cassava mosaic = viral. RECURRING!" }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Ovum = largest human cell. Sperm = most mitochondria (most active). Nucleus + centriole = mitosis organelles. Nucleotides have 5-carbon sugar (NOT 6-carbon). Virus shares DNA with animal cells." }
    ]
  },

  // ==========================================
  // BIOLOGY — PLANT BIOLOGY
  // ==========================================
  "Plant Biology": {
    subject: "Biology", title: "Plant Biology",
    icon: "🌿", estimatedTime: "3 min read",
    sections: [
      { heading: "Plant Structure & Transport", type: "cards", items: [
        { title: "Xylem", body: "Transports WATER and minerals from roots to leaves (upward). Made of DEAD cells (lignified). RECURRING!" },
        { title: "Phloem", body: "Transports SUGARS and organic compounds (both directions — up and down)." },
        { title: "Xylem vessels = dead cells", body: "Xylem vessels are made of dead lignified cells. Cambium, mesophyll, palisade = all LIVING cells. RECURRING!" },
        { title: "Photosynthesis location", body: "Photosynthesis occurs mainly in LEAVES — contain chlorophyll, large surface area, stomata for CO₂, and positioned for maximum light." }
      ]},
      { heading: "Plant Hormones & Movement", type: "cards", items: [
        { title: "Auxins", body: "Produced in YOUNG LEAVES and nodes (shoot tips/apical meristems). Control phototropism and gravitropism." },
        { title: "Tropisms", body: "Phototropism = light. Geotropism = gravity. Hydrotropism = water. Thigmotropism = touch. RECURRING!" },
        { title: "Alkaline pyrogallol", body: "Absorbs O₂. Used in photosynthesis experiments to create oxygen-free conditions. Related to PHOTOSYNTHESIS not respiration." }
      ]},
      { heading: "Plant Classification & Germination", type: "cards", items: [
        { title: "Herbs vs Shrubs", body: "Herbs do NOT become woody — they have soft green stems that die back. Shrubs have persistent woody stems. RECURRING!" },
        { title: "Epigeal germination", body: "Cotyledons emerge ABOVE soil surface. Examples: groundnut, castor bean. Hypogeal = cotyledons stay below soil: maize, millet, sorghum. RECURRING!" },
        { title: "Rhizome", body: "Horizontal UNDERGROUND stem (e.g. ginger, fern). Tuber = swollen underground stem (potato). Bulb = modified bud (onion)." },
        { title: "Yam botanical names", body: "Yellow yam = Dioscorea cayenensis. White yam = Dioscorea rotundata. Water yam = Dioscorea alata. RECURRING!" }
      ]},
      { heading: "Plant Nutrition", type: "cards", items: [
        { title: "Sulphur deficiency", body: "Causes yellowing of YOUNG leaves and slender, weak stems (unlike nitrogen deficiency which yellows OLD leaves)." },
        { title: "Vitamin D", body: "Synthesised in skin when exposed to SUNLIGHT (UV radiation). Essential for calcium absorption and bone health. RECURRING!" },
        { title: "Sudan III test", body: "Stains FATS/LIPIDS red or orange-red. Iodine = starch (blue-black). Biuret = protein (purple). Benedict's = reducing sugars (brick red)." }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Xylem = water (dead cells). Phloem = sugar (living cells). Epigeal = groundnut (above soil). Hypogeal = maize (below soil). Herbs = no woody tissue. Hydrotropism = response to water." }
    ]
  },

  // ==========================================
  // BIOLOGY — EVOLUTION
  // ==========================================
  "Evolution": {
    subject: "Biology", title: "Evolution",
    icon: "🦕", estimatedTime: "2 min read",
    sections: [
      { heading: "Darwin's Theory of Natural Selection", type: "cards", items: [
        { title: "Four components", body: "1. Overproduction — more offspring than can survive. 2. Variation — offspring differ. 3. Struggle for existence — competition for resources. 4. Survival of the fittest — best adapted survive and reproduce." },
        { title: "NOT part of Darwin's theory", body: "USE AND DISUSE — this is Lamarck's theory (organs develop through use or atrophy through disuse). MUTATION was added later in Neo-Darwinism. RECURRING!" },
        { title: "NOT evidence of evolution", body: "BEHAVIOUR is generally NOT considered direct evidence of evolution (can be learned). Fossils, anatomy, genetics, embryology ARE evidence. RECURRING!" }
      ]},
      { heading: "Evolutionary Sequences", type: "cards", items: [
        { title: "Animal evolution (most primitive → advanced)", body: "Fish → Amphibian → Reptile → Mammal. Tilapia(fish) → Bufo(frog/amphibian) → Agama(lizard/reptile) → Rattus(rat/mammal). RECURRING!" },
        { title: "Plant evolution", body: "Algae (Spirogyra) → Mosses → Ferns → Gymnosperms (Pine) → Angiosperms (Mango). From simple to complex. RECURRING!" }
      ]},
      { heading: "Mutation", type: "cards", items: [
        { title: "Causes of mutation", body: "X-rays, ultraviolet light, cosmic radiation, chemical mutagens. Mutagens is the CATEGORY NAME — not a separate cause alongside X-rays and UV. RECURRING!" },
        { title: "Genetic inheritance", body: "Sickle cell: AS × AS → 25% AA, 50% AS, 25% SS. Father(AA) × Mother(AS) → child carrier = AS. RECURRING!" }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Darwin's theory does NOT include use and disuse (that's Lamarck). Animal evolution: Fish → Amphibian → Reptile → Mammal. Behaviour is NOT evidence of evolution. Mutation is NOT part of Darwin's original theory." }
    ]
  },

  // ==========================================
  // BIOLOGY — PUBLIC HEALTH
  // ==========================================
  "Public Health": {
    subject: "Biology", title: "Public Health & Disease",
    icon: "🏥", estimatedTime: "2 min read",
    sections: [
      { heading: "Diseases & Their Causes", type: "cards", items: [
        { title: "Schistosomiasis (Bilharzia)", body: "Blood in urine after swimming. Primary host = MAN. Intermediate host = SNAIL. Cercariae penetrate skin in freshwater. RECURRING!" },
        { title: "Cholera transmission", body: "Spread through CONTAMINATED FOOD AND WATER. A person in a swamp WITHOUT food or water is LEAST likely to get cholera. RECURRING!" },
        { title: "Diseases NOT caused by viruses", body: "Maize rust = fungal. Ringworm = fungal. Measles, Newcastle disease, cassava mosaic = viral. Tetanus, typhoid = bacterial. Antibiotics treat bacterial — NOT viral diseases. RECURRING!" },
        { title: "Antibiotic resistance", body: "Measles (viral) does NOT respond to antibiotics. Tetanus, typhoid, ringworm respond to antibiotics/antifungals." }
      ]},
      { heading: "Nutrition & Deficiencies", type: "cards", items: [
        { title: "Vitamin K", body: "Essential for synthesis of BLOOD CLOTTING FACTORS. Deficiency = excessive bleeding." },
        { title: "Vitamin D", body: "Synthesised in skin exposed to SUNLIGHT. Essential for calcium absorption and bone health." },
        { title: "Fluorine in water", body: "Fluoride added to drinking water to REDUCE TOOTH DECAY (prevent dental caries). Chlorine is for killing bacteria." },
        { title: "Iodine", body: "Needed for THYROID GLAND function. Deficiency causes goitre (enlarged thyroid)." }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Schistosomiasis = blood in urine, from snail-infested water. Cholera = contaminated food/water. Measles = viral (no antibiotics). Fluorine = teeth protection. Iodine = thyroid. Vitamin K = blood clotting." }
    ]
  },

  // ==========================================
  // BIOLOGY — TAXONOMY & CLASSIFICATION
  // ==========================================
  "Taxonomy & Classification": {
    subject: "Biology", title: "Taxonomy & Classification",
    icon: "🗂️", estimatedTime: "2 min read",
    sections: [
      { heading: "Classification of Humans", type: "cards", items: [
        { title: "Taxonomic hierarchy", body: "Kingdom Animalia → Phylum Chordata → Subphylum Vertebrata → Class Mammalia → Order Primates → Family Hominidae → Genus Homo → Species sapiens. RECURRING!" },
        { title: "Prokaryotes", body: "No membrane-bound nucleus. Found in Kingdom MONERA (bacteria, cyanobacteria/blue-green algae)." },
        { title: "Blue-green algae", body: "Belong to phylum CYANOPHYTA. They are prokaryotes despite being called algae. RECURRING!" }
      ]},
      { heading: "Animal Classification", type: "cards", items: [
        { title: "Diploblastic", body: "Two germ layers. Hydra, jellyfish (Cnidaria). RECURRING!" },
        { title: "Triploblastic", body: "Three germ layers (ectoderm, mesoderm, endoderm). Insects, worms, vertebrates — most complex animals." },
        { title: "Radial symmetry", body: "Can be divided into equal halves along multiple planes. Examples: Hydra, starfish (Cnidaria, Echinodermata). RECURRING!" },
        { title: "No parasites in Molluscs", body: "Molluscs (snails, squid, oysters) have NO parasitic members. Nematodes, Annelids, and Platyhelminthes all have parasitic forms. RECURRING!" },
        { title: "Homodont dentition", body: "All teeth same shape. Found in LIZARDS (and most reptiles). Humans, sheep, cats = heterodont (different types). RECURRING!" }
      ]},
      { heading: "Plant Classification", type: "cards", items: [
        { title: "Spirogyra, Euglena, Chlamydomonas", body: "All share growth, reproduction, irritability. But Spirogyra has NO flagella — NOT MOBILE. Euglena and Chlamydomonas are motile. RECURRING!" }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Human taxonomy: Animalia → Chordata → Vertebrata → Mammalia → Primates → Hominidae → Homo → sapiens. Blue-green algae = Cyanophyta (prokaryotes). Hydra = diploblastic, radially symmetrical. Lizards = homodont." }
    ]
  },

  // ==========================================
  // BIOLOGY — GENETICS
  // ==========================================
  "Genetics": {
    subject: "Biology", title: "Genetics",
    icon: "🧬", estimatedTime: "2 min read",
    sections: [
      { heading: "Sickle Cell Genetics", type: "cards", items: [
        { title: "Genotypes", body: "AA = normal. AS = sickle cell TRAIT (carrier). SS = sickle cell DISEASE (anaemia)." },
        { title: "Two carriers", body: "AS × AS → 25% AA, 50% AS, 25% SS. Two carriers have 25% chance of SS child. RECURRING!" },
        { title: "Normal father + carrier mother", body: "AA × AS → 50% AA, 50% AS. Child with sickle cell trait = AS genotype. RECURRING!" },
        { title: "Incomplete dominance", body: "Sickle cell shows incomplete dominance — AS carrier shows intermediate phenotype (mild symptoms under low O₂). RECURRING!" }
      ]},
      { heading: "Blood Group Genetics", type: "cards", items: [
        { title: "Universal recipient", body: "Blood group AB — has both A and B antigens, NO antibodies. Can receive from any group." },
        { title: "Universal donor", body: "Blood group O — has NO antigens, has both A and B antibodies. Can donate to any group." }
      ]},
      { heading: "Mutation", type: "cards", items: [
        { title: "Causes of mutation", body: "X-rays, ultraviolet light, cosmic radiation, chemical mutagens. Mutagens is the category that INCLUDES X-rays and UV — it is not a separate cause." },
        { title: "Darwin vs Lamarck", body: "Darwin: natural selection (variation, overproduction, survival of fittest). Lamarck: use and disuse. Mutation was added to Neo-Darwinism — not part of Darwin's original theory." }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "AS × AS → 25% SS (disease). AA × AS → 0% SS (no disease). AB = universal recipient. O = universal donor. Sickle cell shows incomplete dominance. Mutation causes: X-rays, UV, cosmic rays, chemical mutagens." }
    ]
  },

  // ==========================================
  // BIOLOGY — MICROBIOLOGY
  // ==========================================
  "Microbiology": {
    subject: "Biology", title: "Microbiology",
    icon: "🦠", estimatedTime: "2 min read",
    sections: [
      { heading: "Key Microbiologists", type: "cards", items: [
        { title: "Alexander Fleming", body: "Discovered PENICILLIN (first antibiotic) in 1928 — started the antibiotic era. RECURRING!" },
        { title: "Louis Pasteur", body: "Proved spontaneous generation is FALSE (1861). Developed germ theory. Invented pasteurisation." },
        { title: "Gregor Mendel", body: "Father of genetics — discovered laws of inheritance through pea plant experiments." }
      ]},
      { heading: "Microorganisms & Disease", type: "cards", items: [
        { title: "Antibiotics work on", body: "BACTERIA only. Antibiotics have NO effect on viruses. Measles (viral) will NOT respond to antibiotic treatment. RECURRING!" },
        { title: "Rhizobium bacteria", body: "Live in root nodules of legumes (cowpea, groundnut). Fix atmospheric nitrogen → mutualistic relationship with the plant. RECURRING!" },
        { title: "Blue-green algae", body: "Phylum Cyanophyta. Prokaryotic (no nucleus). Can photosynthesise and fix nitrogen." }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Fleming = penicillin (antibiotics). Pasteur = germ theory. Antibiotics = bacteria only (NOT viruses). Rhizobium + legume = mutualism. Measles = virus = no antibiotics." }
    ]
  },

  // ==========================================
  // BIOLOGY — BOTANY
  // ==========================================
  "Botany": {
    subject: "Biology", title: "Botany — Plant Science",
    icon: "🌱", estimatedTime: "2 min read",
    sections: [
      { heading: "Yam Species", type: "cards", items: [
        { title: "Dioscorea cayenensis", body: "Yellow yam. RECURRING!" },
        { title: "Dioscorea rotundata", body: "White yam — most common in Nigeria." },
        { title: "Dioscorea alata", body: "Water yam." },
        { title: "Dioscorea dumetorum", body: "Trifoliate/bitter yam." }
      ]},
      { heading: "Plant Tissues", type: "cards", items: [
        { title: "Dead plant cells", body: "Xylem vessels are made of DEAD lignified cells. All other main tissues (cambium, mesophyll, palisade, phloem) are living. RECURRING!" },
        { title: "Cambium", body: "Meristematic tissue — divides to produce new xylem and phloem. Living cells." },
        { title: "Alkaline pyrogallol", body: "Absorbs oxygen. Used in photosynthesis experiments to remove O₂. Related to PHOTOSYNTHESIS. RECURRING!" }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Yellow yam = Dioscorea cayenensis. Xylem vessels = only DEAD plant cells in main tissues. Alkaline pyrogallol absorbs O₂ — used in photosynthesis experiments, not respiration experiments." }
    ]
  }


,

  // ==========================================
  // ENGLISH — SENTENCE INTERPRETATION
  // ==========================================
  "Sentence Interpretation": {
    subject: "English", title: "Sentence Interpretation",
    icon: "💬", estimatedTime: "3 min read",
    sections: [
      { heading: "What is Sentence Interpretation?", type: "text",
        content: "You are given a sentence and asked what it means or implies. The answer is NOT always stated directly — you must read carefully and understand the full meaning, tone, and implication of the sentence." },
      { heading: "Types of Questions", type: "cards", items: [
        { title: "Conditional sentences", body: "If-clauses tell you what IS or IS NOT true. 'If I were rich' = I am NOT rich. 'Had she known' = she did NOT know. The condition implies the OPPOSITE of reality." },
        { title: "Counterfactual past", body: "'Would have done...if...' = it did NOT happen. 'We would never have followed his advice if we had known' = we DID follow his advice because we did NOT know." },
        { title: "Double negatives", body: "'Unless you do NOT want to...' = 'If you DO want to...'. Two negatives cancel each other. Read slowly and simplify before choosing." },
        { title: "Idiomatic sentences", body: "Some sentences use figurative language. 'His chances are slim' = he may NOT pass. 'Running battle' = ongoing series of arguments, not a physical fight." },
        { title: "Implied meaning", body: "'He resigned himself to it' = he accepted whatever happens. 'Took for granted' = assumed it would be easy. Always ask: what does this behaviour or attitude IMPLY?" }
      ]},
      { heading: "Strategy", type: "steps", items: [
        "Identify the type — is it a conditional, an idiom, or a plain statement?",
        "For conditionals: determine what IS actually true (usually the opposite of the if-clause).",
        "Simplify double negatives — remove both negatives and read what remains.",
        "For idiomatic expressions: look for the figurative meaning, not the literal one.",
        "Eliminate options that are too extreme, too literal, or contradict the sentence."
      ]},
      { heading: "Key Conditional Patterns", type: "cards", items: [
        { title: "If + were/was (present unreal)", body: "'If I were rich, I would travel' = I am NOT rich and I am NOT travelling." },
        { title: "If + had + past participle (past unreal)", body: "'If she had known, she would not have married him' = she did NOT know, so she DID marry him." },
        { title: "Unless = if not", body: "'Unless you study, you will fail' = if you do NOT study, you will fail." },
        { title: "Would have + past participle", body: "Always refers to something that did NOT happen in the past." }
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Do not interpret conditional sentences literally — they almost always imply the OPPOSITE situation.",
        "'Slim chances' does NOT mean zero chances — it means unlikely but possible.",
        "Double negatives: 'not...unless not' — slow down and simplify step by step.",
        "Never choose the most extreme option unless the sentence is absolutely certain."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "For every conditional sentence, ask yourself: did this happen or not? 'If he had asked you, would you have helped?' — he did NOT ask, so you did NOT help. The answer is always the opposite of the condition stated." }
    ]
  },

  // ==========================================
  // ENGLISH — ORAL ENGLISH
  // ==========================================
  "Oral English": {
    subject: "English", title: "Oral English — Sounds, Stress & Rhythm",
    icon: "🎙️", estimatedTime: "3 min read",
    sections: [
      { heading: "What Oral English Tests", type: "text",
        content: "Oral English covers how words SOUND — not how they are spelled. Questions test vowel sounds, consonant sounds, word stress (which syllable is emphasised), rhyme (which words share the same sound), and odd-one-out patterns." },
      { heading: "Vowel Sounds (IPA)", type: "cards", items: [
        { title: "/iː/ — long EE sound", body: "beat, heat, meat, seat, feet, treat, creek, week, flee. All rhyme with 'see'." },
        { title: "/ɪ/ — short I sound", body: "bit, hit, sit, tip, chip, live, give, busy, women. Shorter than /iː/." },
        { title: "/e/ — short E sound", body: "bed, red, fed, head, bread, said, friend, many, any." },
        { title: "/æ/ — flat A sound", body: "cat, bat, hat, man, hand, lamp, black, trap, sad." },
        { title: "/ɑː/ — long AH sound", body: "car, far, bar, father, calm, palm, bath, class, heart, aunt." },
        { title: "/ɒ/ — short O sound", body: "hot, dog, pot, clock, not, stop, cough, wash, what." },
        { title: "/ɔː/ — long AW sound", body: "door, floor, more, corn, born, law, saw, caught, thought, walk." },
        { title: "/ʌ/ — short UH sound", body: "cup, bus, sun, run, fun, love, blood, come, done, enough, rough." },
        { title: "/uː/ — long OO sound", body: "food, moon, soon, blue, true, shoe, through, fruit, juice." },
        { title: "/ʊ/ — short OO sound", body: "book, cook, look, foot, good, wood, pull, full, could, should." },
        { title: "/eɪ/ — AY diphthong", body: "cake, make, late, great, break, weigh, they, eight, straight." },
        { title: "/aɪ/ — I diphthong", body: "time, fine, mine, sky, fly, buy, tie, high, eye, type." },
        { title: "/aʊ/ — OW diphthong", body: "out, now, how, cow, loud, found, round, town, mouth, doubt." },
        { title: "/əʊ/ — OH diphthong", body: "go, home, bone, road, boat, show, though, know, low." },
        { title: "/ɜː/ — ER sound", body: "bird, word, nurse, church, turn, learn, earn, sir, her, fur." }
      ]},
      { heading: "Word Stress Rules", type: "cards", items: [
        { title: "2-syllable nouns and adjectives", body: "Stress on FIRST syllable. TA-ble, HA-ppy, FA-mous, stu-DENT wait — STU-dent. BOY-friend, HA-pper. REcord (noun)." },
        { title: "2-syllable verbs", body: "Stress on SECOND syllable. re-CORD (verb), re-PEAT, be-GIN, ar-RIVE, de-CIDE, pre-SENT (verb)." },
        { title: "Words ending -tion, -sion, -ic, -ical", body: "Stress on syllable BEFORE the suffix. na-TION-al, mu-SIC, po-LIT-ic-al, e-LEC-tric." },
        { title: "Words ending -ate (3+ syllables)", body: "Stress usually on FIRST syllable. ED-u-cate, GEN-er-ate, CEL-e-brate." },
        { title: "Compound nouns", body: "Stress on FIRST element. BLACK-board, FOOT-ball, AIR-port, SUN-rise, BOOK-shop." }
      ]},
      { heading: "Consonant Sounds", type: "cards", items: [
        { title: "/θ/ — voiceless TH (think)", body: "think, three, throw, bath, cloth, truth, author, birthday, method." },
        { title: "/ð/ — voiced TH (this)", body: "this, that, the, there, though, breathe, with, father, other." },
        { title: "/ʃ/ — SH sound (ship)", body: "ship, shop, shoe, fish, wash, nation, special, machine, chef, sugar." },
        { title: "/ʒ/ — ZH sound (measure)", body: "measure, treasure, pleasure, vision, decision, occasion, usual." },
        { title: "/tʃ/ — CH sound (church)", body: "church, chair, cheap, child, lunch, watch, match, catch, teach." },
        { title: "/dʒ/ — J sound (judge)", body: "judge, jump, bridge, age, giant, gym, general, soldier, George." },
        { title: "/ŋ/ — NG sound (sing)", body: "sing, ring, hang, bang, think, drink, blank, thank, ankle." },
        { title: "Silent letters", body: "Silent K: know, knee, knife, knight. Silent GH: night, light, fight, bought, thought. Silent B: lamb, bomb, climb, thumb." }
      ]},
      { heading: "Rhyme — Same Sound, Different Spelling", type: "cards", items: [
        { title: "Common rhyming groups", body: "beat/feet/meat/heat/seat. come/some/drum/sum/dumb. though/go/show/low/know. through/blue/true/shoe/flew." },
        { title: "Tricky rhymes", body: "'Pint' rhymes with 'point'? NO — pint = /paɪnt/, point = /pɔɪnt/. 'Cough' and 'rough' do NOT rhyme — /kɒf/ vs /rʌf/." },
        { title: "Odd one out strategy", body: "Find the THREE that share a vowel/consonant sound. The one that does NOT share it is the odd one out. Always say each word aloud mentally." }
      ]},
      { heading: "Strategy", type: "steps", items: [
        "Say the word aloud in your head — never rely on spelling alone.",
        "For stress questions: feel which syllable you naturally say louder.",
        "For rhyme questions: focus only on the vowel sound and what comes after it.",
        "For odd-one-out: find three that share a pattern, the fourth is different.",
        "For consonant sounds: isolate the specific letters given and check each option."
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Spelling is NOT sound. 'Cough', 'through', 'though', 'thought', 'tough' all have different vowel sounds despite similar spelling.",
        "'Read' (present) = /riːd/ rhymes with 'feed'. 'Read' (past) = /red/ rhymes with 'bed'. Same spelling, different sounds!",
        "The letter 'c' can sound like /k/ (cat) or /s/ (city). The letter 'g' can be /g/ (go) or /dʒ/ (gem).",
        "Stress shift: REcord (noun) vs reCORD (verb). PROtest (noun) vs proTEST (verb)."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "For every Oral English question — say the word aloud in your head first. Sound always beats spelling. 'Great' and 'break' rhyme (/eɪ/) even though they look different. 'Great' and 'heat' do NOT rhyme despite looking similar." }
    ]
  }

}

export default STUDY_GUIDES
