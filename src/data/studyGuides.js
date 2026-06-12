// EXAMEDGENG — STUDY GUIDES
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
      },
      { heading: "Skills Vault — Strategies & Traps", type: "english_skills_vault", tab: "comprehension",
        content: "See proven strategies and the most common traps in UNIBEN comprehension questions." }
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
        content: "An antonym is a word opposite in meaning to another. UNIBEN tests your vocabulary by asking you to identify the opposite of an underlined word."
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
      },
      {
        heading: "View All 99 Tested Antonyms",
        type: "antonyms_vault",
        content: "See every antonym word UNIBEN has tested in the last 20 years — with meanings, opposites and explanations."
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
      },
      { heading: "Skills Vault — Signal Words & Traps", type: "english_skills_vault", tab: "lexis",
        content: "Master signal words and collocations that UNIBEN keeps testing year after year." }
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
        content: "Idioms are phrases whose meaning cannot be understood from the individual words. 'Kick the bucket' does not mean literally kicking a bucket — it means to die. Post-UTME tests whether you know the true meaning of common idioms."
      },
      {
        heading: "Must-Know Idioms for Post-UTME",
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
      },
      {
        heading: "View All UNIBEN-Tested Idioms",
        type: "idioms_vault",
        content: "See every idiom UNIBEN has tested in the last 20 years — with meanings and real exam examples."
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
        content: "Word stress means pronouncing one syllable of a word with more force than the others. Every English word has a stressed syllable. Post-UTME asks you to identify words with the same or different stress patterns."
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
        heading: "Common Stress Patterns in Post-UTME",
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
      },
      { heading: "Skills Vault — Sounds & Stress Patterns", type: "english_skills_vault", tab: "phonetics",
        content: "Every vowel sound and stress emphasis question UNIBEN has tested — with explanations." }
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
      },
      {
        heading: "Formula & Tricks Vault",
        type: "maths_vault",
        tab: "algebra",
        content: "Key formulas, patterns and RECURRING question types from UNIBEN past papers for this topic."
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
        content: "Calculus has two branches: Differentiation (finding the rate of change/gradient) and Integration (finding area under a curve). Both topics are tested in UNIBEN Post-UTME."
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
        content: "Always add + C (constant of integration) for indefinite integrals. Forgetting C is one of the most common errors in Post-UTME."
      },
      {
        heading: "Formula & Tricks Vault",
        type: "maths_vault",
        tab: "calculus",
        content: "Key formulas, patterns and RECURRING question types from UNIBEN past papers for this topic."
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
        content: "Keep a vocabulary notebook. Write every unfamiliar word from past questions with its meaning, synonym, and antonym. Review it every night — consistency beats cramming." },
      {
        heading: "View All UNIBEN-Tested Synonyms",
        type: "synonyms_vault",
        content: "See every synonym word UNIBEN has tested in the last 20 years — with meanings and the correct answer."
      }
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
        content: "ALWAYS convert through base 10 as the middle step. Never go directly from base 5 to base 8 — always: base 5 to base 10, then base 10 to base 8." },
      {
        heading: "Formula & Tricks Vault",
        type: "maths_vault",
        tab: "numbers",
        content: "Key formulas, RECURRING patterns and exam tricks for this topic from UNIBEN past papers."
      }
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
        content: "Memorise: P(prime from 20 to 30 inclusive) = 2/11. This exact question appeared in 2011 AND 2019 and will appear again. The only primes in that range are 23 and 29." },
      {
        heading: "Formula & Tricks Vault",
        type: "maths_vault",
        tab: "stats",
        content: "Key formulas, RECURRING patterns and exam tricks for this topic from UNIBEN past papers."
      }
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
        content: "Sector PERIMETER = arc + 2r. Never just calculate the arc — you must add both radii (straight sides). This is the most common mistake in sector questions." },
      {
        heading: "Formula & Tricks Vault",
        type: "maths_vault",
        tab: "geometry",
        content: "Key formulas, RECURRING patterns and exam tricks for this topic from UNIBEN past papers."
      }
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
        content: "sec²θ + tan²θ = 3 → θ = 45°. The key step is replacing sec²θ with (1+tan²θ) to get 2tan²θ = 2, then tanθ = 1, then θ = 45°. Do not attempt to solve it any other way." },
      {
        heading: "Formula & Tricks Vault",
        type: "maths_vault",
        tab: "trig",
        content: "Key formulas, RECURRING patterns and exam tricks for this topic from UNIBEN past papers."
      }
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
        content: "Parallel lines have the SAME gradient. Perpendicular lines have gradients that multiply to -1. If m₁ = 1/2, then m₂ = -2 (flip and negate the gradient)." },
      {
        heading: "Formula & Tricks Vault",
        type: "maths_vault",
        tab: "coordinate",
        content: "Key formulas, RECURRING patterns and exam tricks for this topic from UNIBEN past papers."
      }
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
        content: "AP: subtract consecutive terms to find d. GP: divide consecutive terms to find r. Always check the type first before applying formulas." },
      {
        heading: "Formula & Tricks Vault",
        type: "maths_vault",
        tab: "sequences",
        content: "Key formulas, RECURRING patterns and exam tricks for this topic from UNIBEN past papers."
      }
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
        content: "log without a base written means log base 10. ln means natural log (base e). Memorise: log(1)=0, log(10)=1, log(100)=2, log(1000)=3. These shortcuts appear regularly." },
      {
        heading: "Formula & Tricks Vault",
        type: "maths_vault",
        tab: "logs",
        content: "Key formulas, RECURRING patterns and exam tricks for this topic from UNIBEN past papers."
      }
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
        content: "For neither questions: always use the union formula first to find n(A∪B), then subtract from the Universal set total. Do not try to guess from the Venn diagram alone." },
      {
        heading: "Formula & Tricks Vault",
        type: "maths_vault",
        tab: "sets",
        content: "Key formulas, RECURRING patterns and exam tricks for this topic from UNIBEN past papers."
      }
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
        content: "Always try x = 1 and x = -1 first when hunting for factors. These work surprisingly often in Post-UTME questions and save a lot of time." },
      {
        heading: "Formula & Tricks Vault",
        type: "maths_vault",
        tab: "polynomials",
        content: "Key formulas, RECURRING patterns and exam tricks for this topic from UNIBEN past papers."
      }
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


,

  // ==========================================
  // CHEMISTRY — ACIDS, BASES & SALTS
  // ==========================================
  "Acids, Bases & Salts": {
    subject: "Chemistry", title: "Acids, Bases & Salts",
    icon: "🧪", estimatedTime: "3 min read",
    sections: [
      { heading: "pH Scale", type: "cards", items: [
        { title: "pH and acidity", body: "pH 0-6 = ACIDIC (lower = more acidic). pH 7 = NEUTRAL. pH 8-14 = ALKALINE/BASIC. pH = -log[H⁺]. RECURRING every year!" },
        { title: "Calculating [H⁺] from pH", body: "[H⁺] = 10⁻ᵖᴴ. Example: pH 3.80 → [H⁺] = 10⁻³·⁸⁰ = 1.58×10⁻⁴ mol/dm³." },
        { title: "pOH and pH", body: "pH + pOH = 14. If pOH = 12.23 → pH = 1.77 → [H⁺] = 10⁻¹·⁷⁷ ≈ 1.70×10⁻²." },
        { title: "Phenolphthalein indicator", body: "COLOURLESS in acid (pH < 8.3). PINK/MAGENTA in alkali (pH > 8.3). At pH 2.5 = colourless. RECURRING!" },
        { title: "M is most acidic (pH 1)", body: "In questions listing pH values: lowest pH = most acidic. pH 1 = most acidic; pH 14 = most basic. RECURRING!" }
      ]},
      { heading: "Hydroxides & Salts", type: "cards", items: [
        { title: "Calcium hydroxide", body: "Ca(OH)₂ (slaked lime/limewater) DISSOLVES in water to form an ALKALINE solution. Al(OH)₃, Cu(OH)₂, Fe(OH)₃ are all INSOLUBLE. RECURRING!" },
        { title: "Aluminium oxide + NaOH", body: "Al₂O₃ is AMPHOTERIC — reacts with excess NaOH to form NaAl(OH)₄ (sodium tetrahydroxoaluminate). RECURRING!" },
        { title: "Double decomposition", body: "Ba²⁺ + SO₄²⁻ → BaSO₄ (precipitate). Two compounds exchange ions = double decomposition (metathesis). RECURRING!" }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "pH < 7 = acid. pH 7 = neutral. pH > 7 = alkali. Phenolphthalein is COLOURLESS in acid, PINK in alkali. Ca(OH)₂ is the only common soluble metal hydroxide that gives an alkaline solution. These appear every year." }
    ]
  },

  // ==========================================
  // CHEMISTRY — METALS & NON-METALS
  // ==========================================
  "Metals & Non-Metals": {
    subject: "Chemistry", title: "Metals & Non-Metals",
    icon: "⚗️", estimatedTime: "2 min read",
    sections: [
      { heading: "Key Facts", type: "cards", items: [
        { title: "Reactivity series", body: "Na > Ca > Al > Fe > Zn > Pb > H > Cu > Ag > Au. More reactive = more likely to form positive ions. Iron is LESS reactive than Al — least tendency to form positive ions among common metals. RECURRING!" },
        { title: "Bronze vs Brass", body: "Bronze = copper + TIN (used for electrical conductors, bells). Brass = copper + ZINC. Solder = lead + tin. RECURRING — most confused alloys!" },
        { title: "Argon in lamps", body: "Argon is used in gas-filled electric lamps because it is INERT — prevents oxidation of the tungsten filament. RECURRING!" },
        { title: "White phosphorus", body: "Stored UNDER WATER because it has a very LOW ignition temperature — ignites spontaneously in air at ~30°C. RECURRING!" },
        { title: "Sulphur — non-metal", body: "Sulphur is a NON-METAL (yellow solid, poor conductor). Iron, copper, zinc are metals. RECURRING!" },
        { title: "Plutonium — artificial", body: "Plutonium (Z=94) is an ARTIFICIAL element — produced in nuclear reactors, does not occur naturally. RECURRING!" }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Bronze = Cu+Sn (tin). Brass = Cu+Zn. Argon in bulbs = prevents oxidation. White phosphorus stored under water. Plutonium = artificial. These are the most tested metal/non-metal facts in UNIBEN." }
    ]
  },

  // ==========================================
  // ECONOMICS — BASIC ECONOMIC CONCEPTS
  // ==========================================
  "Basic Economic Concepts": {
    subject: "Economics", title: "Basic Economic Concepts",
    icon: "📈", estimatedTime: "3 min read",
    sections: [
      { heading: "Definitions", type: "cards", items: [
        { title: "Alfred Marshall's definition", body: "'Economics is the study of mankind in the ordinary business of life.' RECURRING every year!" },
        { title: "Lionel Robbins' definition", body: "'Economics is the science of human behaviour as a relationship between ends and scarce means.' Emphasis on SCARCITY and CHOICE." },
        { title: "Normative vs Positive", body: "POSITIVE = what IS (factual, testable). NORMATIVE = what SHOULD BE (value judgements, policy). 'Should be' = normative. RECURRING!" },
        { title: "Economic goods", body: "An economic good YIELDS UTILITY and COMMANDS A PRICE (because it is scarce). Free goods (air) yield utility but have no price." },
        { title: "Opportunity cost = Real cost", body: "Opportunity cost = the value of the next best alternative forgone. Also called REAL COST. RECURRING!" },
        { title: "Inferior goods", body: "Demand RISES as income FALLS (negative income elasticity). Examples: garri, public transport. As income rises, consumers switch to superior goods." }
      ]},
      { heading: "Production Possibility Curve (PPC)", type: "cards", items: [
        { title: "Inside the PPC", body: "Nigeria is INSIDE the PPC — resources are underutilised (unemployment, inefficiency). RECURRING!" },
        { title: "Downward slope = opportunity cost", body: "The PPC slopes downward because producing more of one good requires sacrificing another — OPPORTUNITY COST." },
        { title: "Inward shift", body: "PPC shifts INWARD when resources decrease (natural disaster, war). Shifts OUTWARD when capacity increases (technology, more resources)." }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Marshall = 'ordinary business of life'. Positive = what IS. Normative = what SHOULD BE. Opportunity cost = real cost. Nigeria is INSIDE the PPC. Inferior goods: demand rises as income falls. These definitions appear in almost every year." }
    ]
  },

  // ==========================================
  // ECONOMICS — DEMAND & SUPPLY
  // ==========================================
  "Demand & Supply": {
    subject: "Economics", title: "Demand & Supply",
    icon: "📊", estimatedTime: "3 min read",
    sections: [
      { heading: "Demand", type: "cards", items: [
        { title: "Law of demand", body: "As PRICE rises, quantity demanded FALLS (inverse relationship), ceteris paribus. Demand curve slopes downward." },
        { title: "Derived demand", body: "Factors of production (labour, capital, land) are demanded NOT for their own sake but to produce goods. Demand for inputs is DERIVED from demand for outputs. RECURRING!" },
        { title: "Price elasticity of demand", body: "PED = % change Qd ÷ % change P. Elastic (>1) = consumers very responsive to price. Inelastic (<1) = not very responsive. RECURRING — calculations!" },
        { title: "Cross elasticity for complements", body: "Cross elasticity for COMPLEMENTARY goods = NEGATIVE. For SUBSTITUTES = positive. When price of good A rises, demand for its complement B FALLS. RECURRING!" },
        { title: "At maximum total utility", body: "When TOTAL UTILITY is at maximum, MARGINAL UTILITY = ZERO. When MU becomes negative, TU starts to fall. RECURRING!" }
      ]},
      { heading: "Supply", type: "cards", items: [
        { title: "Supply curve shifts LEFT when", body: "Cost of production rises, unfavourable government policy (heavy taxes), bad weather, fewer producers. RECURRING!" },
        { title: "Supply curve shifts RIGHT when", body: "Technology improves, cost of production falls, favourable government policy, more producers." },
        { title: "Equilibrium above = excess supply", body: "Price ABOVE equilibrium → quantity supplied > quantity demanded → EXCESS SUPPLY (surplus). Price BELOW → shortage." },
        { title: "Price elasticity of supply", body: "PES = % change Qs ÷ % change P. Inelastic supply = cannot respond quickly to price changes (agriculture). RECURRING!" }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Derived demand = factors of production. Cross elasticity complements = negative. MU=0 when TU is maximum. Supply shifts LEFT = less supply (unfavourable policy, higher costs). Supply shifts RIGHT = more supply (better technology, lower costs)." }
    ]
  },

  // ==========================================
  // ECONOMICS — COSTS OF PRODUCTION
  // ==========================================
  "Costs of Production": {
    subject: "Economics", title: "Costs of Production",
    icon: "💰", estimatedTime: "2 min read",
    sections: [
      { heading: "Key Formulas", type: "cards", items: [
        { title: "TC = FC + VC", body: "Total Cost = Fixed Cost + Variable Cost. VC = TC − FC. AFC = TFC/Q. AVC = TVC/Q. AC = TC/Q. RECURRING every year!" },
        { title: "Profit = TR − TC", body: "Total Profit = Total Revenue − Total Cost. Profit per unit = AR − AC. RECURRING!" },
        { title: "Power = variable cost", body: "Power/electricity is a VARIABLE cost (changes with output). Rent, salaries, machine depreciation = FIXED costs. RECURRING!" },
        { title: "Short run vs long run", body: "SHORT RUN: some costs fixed, some variable. LONG RUN: ALL costs are variable. This distinction creates the fixed/variable cost grouping. RECURRING!" },
        { title: "AP rising → MP above it", body: "When average product RISES, marginal product is ABOVE it. When AP is at MAX, MP = AP. When AP falls, MP is below it. RECURRING!" }
      ]},
      { heading: "Returns to Scale", type: "cards", items: [
        { title: "Increasing returns", body: "Output MORE than doubles when all inputs double." },
        { title: "Constant returns", body: "Output EXACTLY doubles when all inputs double." },
        { title: "Decreasing returns", body: "Output LESS than doubles when all inputs double. Long-run production = RETURNS TO SCALE. RECURRING!" }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "VC = TC − FC. AC = TC/Q. Profit = TR − TC. Power = variable (not fixed). AP rising → MP above AP. Long run = returns to scale. These formulas appear in virtually every year's paper." }
    ]
  },

  // ==========================================
  // ECONOMICS — MONEY & BANKING
  // ==========================================
  "Money & Banking": {
    subject: "Economics", title: "Money & Banking",
    icon: "🏦", estimatedTime: "2 min read",
    sections: [
      { heading: "Central Bank Functions", type: "cards", items: [
        { title: "Lender of last resort", body: "The CENTRAL BANK is the lender of last resort — provides emergency loans to commercial banks facing liquidity crises. In Nigeria = CBN. RECURRING!" },
        { title: "Bank rate", body: "The rate at which the Central Bank REDISCOUNTS BILLS to commercial banks. Also called base rate. Key instrument of monetary policy. RECURRING!" },
        { title: "Monetary control instruments", body: "Open Market Operations (buy/sell securities), Bank Rate, Cash Reserve Ratio, Moral Suasion, Special Deposits. 'Expansionist policy' is a TYPE of policy — NOT an instrument. RECURRING!" },
        { title: "Money creation", body: "Credit multiplier = 1/cash ratio. If cash ratio = 20% (0.2), multiplier = 5. Total money created = initial deposit × multiplier. RECURRING!" }
      ]},
      { heading: "Functions of Money", type: "cards", items: [
        { title: "Store of value", body: "Money as STORE OF VALUE allows wealth to be saved for future use — including saving for old age. RECURRING!" },
        { title: "Most liquid asset", body: "CASH is the most liquid asset of a bank (it IS cash — no conversion needed). Then: money at call, treasury bills, investments." },
        { title: "Demand for money", body: "Demand for money = willingness of people to HOLD money (liquidity preference). Three Keynesian motives: transactions, precautionary, speculative." }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "CBN = lender of last resort. Bank rate = rediscount rate. Expansionist policy is NOT an instrument (it's a type). Credit multiplier = 1/cash ratio. Cash = most liquid asset. Store of value = saving for old age." }
    ]
  },

  // ==========================================
  // ECONOMICS — MARKET STRUCTURES
  // ==========================================
  "Market Structures": {
    subject: "Economics", title: "Market Structures",
    icon: "🏪", estimatedTime: "2 min read",
    sections: [
      { heading: "Types of Market", type: "cards", items: [
        { title: "Perfect competition", body: "Many buyers and sellers, identical products, free entry/exit, perfect information. Price = MC = MR in long run. No abnormal profit." },
        { title: "Monopolistic competition", body: "Features of BOTH monopoly AND perfect competition. Differentiated products, many firms, free entry. No long-run abnormal profit. RECURRING!" },
        { title: "Oligopoly", body: "Few large sellers. High barriers to entry. Products may be differentiated or homogeneous. Examples: telecoms, oil industry." },
        { title: "Monopoly", body: "Single seller. High barriers to entry. Price maker. Can earn long-run abnormal profit." },
        { title: "Imperfect competition", body: "Monopoly, duopoly, and oligopoly are ALL imperfect competition. Only perfect competition is perfectly competitive. RECURRING!" }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Monopolistic competition = features of BOTH monopoly and perfect competition. All of monopoly, duopoly, and oligopoly = imperfect competition. Last link in distributive trade = RETAILER (not consumer). RECURRING distinctions!" }
    ]
  },

  // ==========================================
  // ECONOMICS — NATIONAL INCOME & GROWTH
  // ==========================================
  "National Income & Growth": {
    subject: "Economics", title: "National Income & Growth",
    icon: "📉", estimatedTime: "2 min read",
    sections: [
      { heading: "Key Concepts", type: "cards", items: [
        { title: "APC = C/Y", body: "Average Propensity to Consume = Consumption ÷ Income = C/Y. MPC = ΔC/ΔY. APC measures the fraction of income spent. RECURRING!" },
        { title: "Multiplier = 1/(1−MPC)", body: "If MPC = 0.8 → Multiplier = 1/(1−0.8) = 5. Investment needed to raise income = ΔY/multiplier. RECURRING calculations!" },
        { title: "Economic growth", body: "Economic growth = SUSTAINED INCREASE in real GDP (output of goods and services). NOT just population or oil increase." },
        { title: "Terms of trade", body: "Terms of trade = rate at which EXPORTS exchange for IMPORTS. Favourable terms = exports buy more imports." },
        { title: "Circular flow of income", body: "Flow of payments from households to firms (buying goods) and from firms to households (wages, rent, profit). RECURRING!" }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "APC = C/Y. Multiplier = 1/(1−MPC). If MPC=0.8, multiplier=5. Economic growth = sustained increase in real GDP. Terms of trade = export/import exchange rate. ECOWAS = 90 days visa-free stay." }
    ]
  },

  // ==========================================
  // ECONOMICS — PRODUCTION
  // ==========================================
  "Production": {
    subject: "Economics", title: "Production",
    icon: "🏭", estimatedTime: "2 min read",
    sections: [
      { heading: "Production Basics", type: "cards", items: [
        { title: "Production = creating utility", body: "Production = the creation of UTILITY (usefulness/value). Not just manufacturing — includes services, transport, distribution." },
        { title: "Three sectors", body: "PRIMARY = extraction (farming, mining, fishing). SECONDARY = manufacturing/processing. TERTIARY = services (banking, transport, education). RECURRING!" },
        { title: "Localisation of industries", body: "Concentration of firms in the SAME INDUSTRY in one geographical area. Firms benefit from shared skilled labour, suppliers, infrastructure." },
        { title: "Labour intensive vs capital intensive", body: "Large labour force → use LABOUR-INTENSIVE methods. Scarce labour → use capital-intensive. Choose based on available factor of production." },
        { title: "Economies of scale", body: "INTERNAL = advantages from firm's own growth (technical, managerial, financial). EXTERNAL = benefits from being near other firms in same industry. RECURRING!" }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Production = creating utility. Primary/Secondary/Tertiary sectors. Large labour force = labour-intensive methods. Internal economies = from firm's own growth. External economies = from clustering with other firms." }
    ]
  },

  // ==========================================
  // ECONOMICS — POPULATION & LABOUR
  // ==========================================
  "Population & Labour": {
    subject: "Economics", title: "Population & Labour",
    icon: "👥", estimatedTime: "2 min read",
    sections: [
      { heading: "Labour Mobility", type: "cards", items: [
        { title: "Horizontal mobility", body: "Moving to a different job at the SAME LEVEL in a different industry but retaining skills. RECURRING!" },
        { title: "Vertical mobility", body: "Moving UP or DOWN in the same career (promotion/demotion)." },
        { title: "Occupational mobility", body: "Changing BOTH occupation AND industry — the most complete form of labour mobility. RECURRING!" },
        { title: "Geographical mobility", body: "Moving to a different location for work." }
      ]},
      { heading: "Population Theory", type: "cards", items: [
        { title: "Malthusian theory", body: "Population grows GEOMETRICALLY (1,2,4,8...). Food grows ARITHMETICALLY (1,2,3,4...). Positive checks = famine, war, disease. Preventive checks = celibacy, late marriage. Does NOT cover manpower development. RECURRING!" },
        { title: "Demographic transition Stage 1", body: "Both birth and death rates are HIGH. High death rate due to ABSENCE OF MEDICAL KNOWLEDGE. RECURRING!" },
        { title: "Population change causes", body: "Population size changes due to: BIRTHS, DEATHS, and MIGRATION — only these three direct factors. RECURRING!" }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Horizontal mobility = same level, different industry. Occupational = both job AND industry change. Malthus: geometric population, arithmetic food. Stage 1 demographic transition: high births AND deaths. Population change = births + deaths + migration only." }
    ]
  },

  // ==========================================
  // ECONOMICS — BUSINESS ORGANISATION
  // ==========================================
  "Business Organisation": {
    subject: "Economics", title: "Business Organisation",
    icon: "🏢", estimatedTime: "2 min read",
    sections: [
      { heading: "Types of Business", type: "cards", items: [
        { title: "Sole proprietorship", body: "Main handicap = INADEQUATE CAPITAL (one person cannot raise much). Simple to set up, all profit goes to owner. RECURRING!" },
        { title: "Private limited company", body: "Maximum 50 shareholders. Shares not publicly traded. Minimum = 1 shareholder (in some jurisdictions)." },
        { title: "Ordinary shares (equity)", body: "Do NOT carry fixed dividend. Dividend varies with profit. PREFERENCE shares carry fixed dividend rates. RECURRING!" },
        { title: "Public corporation", body: "A STATUTORY QUASI-AUTONOMOUS public body — government-owned, established by law, operates semi-independently. Examples: NEPA, NPA. RECURRING!" },
        { title: "First cooperative society", body: "Founded in ROCHDALE, ENGLAND in 1844 by the Rochdale Pioneers. Their principles became the foundation of the cooperative movement. RECURRING!" }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Sole proprietorship = inadequate capital. Ordinary shares = NO fixed dividend. Preference shares = fixed dividend. Public corporation = statutory quasi-autonomous body. First cooperative = Rochdale, England, 1844." }
    ]
  },

  // ==========================================
  // ECONOMICS — COMMERCE & TRADE
  // ==========================================
  "Commerce & Trade": {
    subject: "Economics", title: "Commerce & Trade",
    icon: "🤝", estimatedTime: "2 min read",
    sections: [
      { heading: "Key Commerce Concepts", type: "cards", items: [
        { title: "Warehousing enables production ahead of demand", body: "WAREHOUSING bridges the time gap — goods produced in advance can be stored until demand rises. RECURRING!" },
        { title: "Last link in distributive trade", body: "RETAILER is the last link in the distributive chain (Producer → Wholesaler → Retailer). Consumer is the endpoint but not in the trade chain. RECURRING!" },
        { title: "Structural unemployment", body: "Caused by TECHNOLOGICAL CHANGE making skills redundant (machines replacing workers). Cyclical = recession. Frictional = between jobs. Seasonal = off-season. RECURRING!" },
        { title: "Tariff", body: "A compulsory levy on imports and exports. Used to protect domestic industries or generate revenue." },
        { title: "Dumping", body: "Selling goods in a foreign market BELOW cost of production to capture market share. WTO regulations prohibit predatory dumping." }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Warehousing = enables advance production. Retailer = last distributive link. Structural unemployment = technology replacing workers. Tariff = tax on imports/exports. Dumping = selling below cost of production in foreign markets." }
    ]
  },

  // ==========================================
  // ECONOMICS — ECONOMIC SYSTEMS
  // ==========================================
  "Economic Systems": {
    subject: "Economics", title: "Economic Systems",
    icon: "🌐", estimatedTime: "2 min read",
    sections: [
      { heading: "Types of Economic System", type: "cards", items: [
        { title: "Capitalist/free market economy", body: "Prices determined by MARKET FORCES of demand and supply. Private ownership of means of production. Profit motive drives decisions. RECURRING!" },
        { title: "Socialist/command economy", body: "Government controls production and distribution. Advantage: consumer exploitation MINIMAL. No abnormal profit allowed." },
        { title: "Deregulated economy", body: "An economy where prices are determined by market forces = deregulated/free market economy. RECURRING — same as capitalist." },
        { title: "Marxist theory", body: "BOURGEOISIE = capitalist class who own means of production. PROLETARIAT = working class who own only their labour. Class struggle between the two. RECURRING!" }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Capitalist = market forces set prices. Socialist = government controls, minimal exploitation. Bourgeoisie = owners (Marxism). Proletariat = workers (Marxism). Deregulated economy = same as free market/capitalist economy." }
    ]
  },

  // ==========================================
  // ECONOMICS — INTERNATIONAL TRADE
  // ==========================================
  "International Trade": {
    subject: "Economics", title: "International Trade",
    icon: "✈️", estimatedTime: "2 min read",
    sections: [
      { heading: "Key Concepts", type: "cards", items: [
        { title: "Comparative cost advantage", body: "Countries should specialise in goods where they have the LOWEST OPPORTUNITY COST — even if another country is absolutely better at everything. Basis of international trade. RECURRING!" },
        { title: "Terms of trade", body: "Rate at which EXPORTS exchange for IMPORTS. Favourable = exports buy more imports." },
        { title: "ECOWAS — 90 days visa-free", body: "Under ECOWAS Protocol on Free Movement of Persons, citizens can enter and stay in any member country for up to 90 DAYS without a visa. RECURRING!" },
        { title: "Non-alignment", body: "Idea of staying neutral between East and West blocs. Generally credited to JAWAHARLAL NEHRU of India. RECURRING!" }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Comparative advantage = specialise where opportunity cost is lowest. ECOWAS = 90 days visa-free. Non-alignment = Nehru (India). Terms of trade = export/import exchange rate. These appear in both Economics and Government questions." }
    ]
  },

  // ==========================================
  // ECONOMICS — TAXATION
  // ==========================================
  "Taxation": {
    subject: "Economics", title: "Taxation",
    icon: "📋", estimatedTime: "1 min read",
    sections: [
      { heading: "Types of Tax", type: "cards", items: [
        { title: "Regressive tax", body: "Takes INCREASING fraction of income as income GOES DOWN. Poor pay higher percentage than rich. Example: VAT (same amount = higher % of small income). RECURRING!" },
        { title: "Progressive tax", body: "Takes increasing fraction of income as income GOES UP. Rich pay higher percentage. Example: income tax with brackets." },
        { title: "Proportional tax", body: "Takes the SAME fraction of income regardless of income level (flat tax rate)." }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Regressive = higher % on LOWER incomes (rises as income falls). Progressive = higher % on HIGHER incomes. Proportional = same % at all income levels. 'Regressive' is the most tested — remember it penalises the poor." }
    ]
  },

  // ==========================================
  // ECONOMICS — STATISTICS & DATA
  // ==========================================
  "Statistics & Data": {
    subject: "Economics", title: "Statistics & Data",
    icon: "📊", estimatedTime: "1 min read",
    sections: [
      { heading: "Charts & Graphs", type: "cards", items: [
        { title: "Compound/component bar graph", body: "A bar graph where a SINGLE BAR carries more than one information in a given period. Also called stacked bar graph. RECURRING!" },
        { title: "Percentage bar graph", body: "Can be used IN PLACE OF a PIE CHART — both show proportions of a whole. RECURRING!" },
        { title: "Rainfall and temperature", body: "Represented by BAR AND LINE GRAPHS combined (climatograph). Rainfall = bars, temperature = line." }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Compound bar = one bar with multiple info. Percentage bar = replaces pie chart. Rainfall + temperature = bar and line graph combined. Mean is most commonly used measure of central tendency." }
    ]
  },

  // ==========================================
  // ECONOMICS — AGRICULTURE & TRADE (shared)
  // ==========================================
  "Agriculture & Trade": {
    subject: "Economics", title: "Agriculture & Trade",
    icon: "🌾", estimatedTime: "2 min read",
    sections: [
      { heading: "Key Facts", type: "cards", items: [
        { title: "Why farmers can't get bank loans", body: "Farmers LACK COLLATERAL (security/assets) required by banks before granting loans. Main barrier to agricultural credit. RECURRING!" },
        { title: "Inelastic foreign demand", body: "If foreign demand is INELASTIC, increasing export supply causes price to fall MORE than quantity rises → farmers earn LESS total revenue. RECURRING!" },
        { title: "Bush fallowing", body: "Rotating cultivation land to allow natural recovery of soil fertility. A form of shifting cultivation." },
        { title: "SAP and agriculture", body: "Nigeria's Structural Adjustment Programme (1986) deregulated agricultural markets — handed to private investors, abolished marketing boards." }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Farmers cannot get loans = no collateral. Inelastic foreign demand + more exports = lower total revenue. Bush fallowing = rotating land for fertility. SAP = private investors took over agricultural markets." }
    ]
  },

  // ==========================================
  // GOVERNMENT — POLITICAL CONCEPTS
  // ==========================================
  "Political Concepts": {
    subject: "Government", title: "Political Concepts",
    icon: "🏛️", estimatedTime: "3 min read",
    sections: [
      { heading: "Key Concepts", type: "cards", items: [
        { title: "Sovereignty", body: "State CANNOT EXIST without sovereignty — it is the supreme, absolute, and uncontrollable power. A nation can exist without sovereignty (stateless nations). RECURRING!" },
        { title: "Power vs Authority", body: "POWER = ability to make people do things even against their will (Dahl). AUTHORITY = legitimate power. Sovereignty = supreme authority. RECURRING!" },
        { title: "Anarchy", body: "Absence of government = ANARCHY. No authority to maintain order. Hobbes' 'state of nature.' RECURRING!" },
        { title: "Constitutionalism", body: "Adherence to a constitution — all government actions must conform to constitutional provisions. RECURRING!" },
        { title: "Rule of law", body: "Doctrine credited to A.C. DICEY (A.V. Dicey). Three principles: supremacy of law, equality before the law, constitution as source of rights. RECURRING!" },
        { title: "Separation of powers", body: "Enables each arm (executive, legislature, judiciary) to CARRY OUT ITS CONSTITUTIONAL FUNCTIONS independently. RECURRING!" }
      ]},
      { heading: "Political Culture", type: "cards", items: [
        { title: "Participatory culture", body: "Politically aware AND active society. Citizens are involved in political life. RECURRING!" },
        { title: "Subject culture", body: "Aware of government but passive — citizens know about politics but don't actively participate." },
        { title: "Parochial culture", body: "No political awareness. Citizens have no knowledge of or interest in national politics." },
        { title: "Gerontocracy", body: "Rule by ELDERS. Democracy = people. Oligarchy = few. Theocracy = religious leaders. RECURRING!" }
      ]},
      { heading: "Philosophers", type: "cards", items: [
        { title: "Jean Bodin", body: "First to develop concept of SOVEREIGNTY — argued it should reside with the KING (absolute, perpetual, indivisible). RECURRING!" },
        { title: "Thomas Hobbes", body: "Social contract — gave power to a sovereign to avoid 'state of nature' (anarchy). Also advocated sovereignty." },
        { title: "Jean-Jacques Rousseau", body: "Popular sovereignty — power should reside with the PEOPLE (general will)." },
        { title: "A.C. Dicey", body: "Credited with the RULE OF LAW doctrine. RECURRING!" }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "State needs sovereignty. Power = making people comply. Authority = legitimate power. Rule of law = Dicey. Gerontocracy = elders rule. Jean Bodin = sovereignty to king. Participatory culture = aware AND active." }
    ]
  },

  // ==========================================
  // GOVERNMENT — ARMS OF GOVERNMENT
  // ==========================================
  "Arms of Government": {
    subject: "Government", title: "Arms of Government",
    icon: "⚖️", estimatedTime: "2 min read",
    sections: [
      { heading: "Three Arms", type: "cards", items: [
        { title: "Legislature", body: "Makes laws AND checks executive powers through oversight, budget approval, confirmation of appointments. Can amend the constitution. CANNOT: appoint civil servants, implement executive decisions. RECURRING!" },
        { title: "Executive", body: "Implements/enforces laws. Powers: budgeting, appointment of top officials, power of pardon, foreign policy." },
        { title: "Judiciary", body: "INTERPRETS the law. An independent judiciary safeguards INDIVIDUAL LIBERTIES (not just judges' rights). RECURRING!" }
      ]},
      { heading: "Presidential vs Parliamentary", type: "cards", items: [
        { title: "Presidential system", body: "Legislature and executive ELECTED SEPARATELY to FIXED TERMS. Executive does not depend on legislative confidence. RECURRING!" },
        { title: "Parliamentary system", body: "Executive (Prime Minister) depends on legislative confidence. Government falls if it loses majority." },
        { title: "Unicameral vs Bicameral", body: "Nigeria = BICAMERAL (Senate 109 members + House of Representatives 360). Ghana = UNICAMERAL. USA = bicameral. RECURRING!" }
      ]},
      { heading: "Recall vs Impeachment", type: "cards", items: [
        { title: "Recall", body: "ELECTORATE removes an elected official — voters collect signatures and hold a vote. RECURRING!" },
        { title: "Impeachment", body: "LEGISLATURE removes an official through a formal legal process." },
        { title: "Bill", body: "A PROPOSAL before the legislature (not yet law). Becomes law after passing through the legislature and executive assent." }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Legislature = makes laws + checks executive. Judiciary = interprets law. Presidential = elected separately, fixed terms. Nigeria Senate = 109. Recall = electorate removes. Impeachment = legislature removes. Bill = proposal (not yet law)." }
    ]
  },

  // ==========================================
  // GOVERNMENT — NIGERIAN CONSTITUTION
  // ==========================================
  "Nigerian Constitution": {
    subject: "Government", title: "Nigerian Constitution & History",
    icon: "📜", estimatedTime: "2 min read",
    sections: [
      { heading: "Key Constitutional Facts", type: "cards", items: [
        { title: "Land Use Act 1978", body: "Promulgated in 1978 under Obasanjo. Vested all land in the STATE GOVERNOR in trust for the people. RECURRING — appears in 2008, 2010, 2011!" },
        { title: "Richards Constitution 1946", body: "Criticised for laying the FOUNDATION OF TRIBALISM — introduced regionalisation (North, West, East). RECURRING!" },
        { title: "10 Downing Street", body: "Home of UK Prime Minister. Aso Rock = Nigeria's Presidential Villa. White House = US President. Capitol = US Congress. RECURRING!" },
        { title: "Nigeria Senate = 109 members", body: "3 senators per state × 36 states = 108 + 1 for FCT = 109. House of Reps = 360 members. RECURRING!" },
        { title: "Biafra 1967", body: "Eastern Region declared Republic of Biafra in 1967 under Ojukwu → Nigerian Civil War (1967-1970). RECURRING!" }
      ]},
      { heading: "Political History", type: "cards", items: [
        { title: "Babangida's two-party system", body: "IBB introduced ONLY TWO PARTIES: SDP and NRC. OFN = Obasanjo. WAI = Buhari. Land Use Decree = Obasanjo 1978. RECURRING!" },
        { title: "Anthony Enahoro 1953", body: "Moved the Nigerian INDEPENDENCE MOTION in 1953 in the House of Representatives (self-government motion). RECURRING!" },
        { title: "OAU became AU on 9th July 2002", body: "OAU renamed AFRICAN UNION (AU) at Durban, South Africa summit on 9th July 2002. RECURRING!" },
        { title: "Nigeria's foreign policy centrepiece", body: "AFRICA is the centrepiece of Nigeria's foreign policy. ECOWAS = 90 days visa-free. RECURRING!" }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Land Use Act = 1978 (Obasanjo). Richards Constitution = tribalism. Senate = 109. Biafra = 1967. Babangida = two-party system. Anthony Enahoro = 1953 independence motion. OAU became AU = 9th July 2002. Africa = centrepiece of Nigeria foreign policy." }
    ]
  },

  // ==========================================
  // GOVERNMENT — INTERNATIONAL RELATIONS
  // ==========================================
  "International Relations": {
    subject: "Government", title: "International Relations",
    icon: "🌍", estimatedTime: "2 min read",
    sections: [
      { heading: "Key Concepts", type: "cards", items: [
        { title: "National interest", body: "Goals a country seeks to achieve in its foreign relations. The fundamental driver of foreign policy. RECURRING!" },
        { title: "Non-alignment", body: "Staying neutral between East and West blocs. Credited to JAWAHARLAL NEHRU of India. RECURRING!" },
        { title: "OAU first Secretary-General", body: "DIALLO TELLI of Guinea (1964-1972). Edwin Kodjo was a later Secretary-General. RECURRING!" },
        { title: "Monrovia Bloc vs Casablanca Bloc", body: "Monrovia Bloc (moderate): Nigeria, Liberia, Tunisia, Cameroon. Casablanca Bloc (radical): Ghana, Egypt, Guinea, Algeria, Mali, Morocco. RECURRING!" },
        { title: "ECOWAS — Cameroon NOT a member", body: "Cameroon is NOT in ECOWAS (it's Central Africa/ECCAS). Nigeria, Liberia, Ghana, Senegal ARE members. RECURRING!" }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "National interest = goals in foreign relations. Non-alignment = Nehru. First OAU Secretary-General = Diallo Telli. Guinea was in Casablanca Bloc, not Monrovia. Cameroon is NOT in ECOWAS. These facts are repeatedly tested." }
    ]
  },

  // ==========================================
  // GOVERNMENT — NIGERIAN HISTORY (shared)
  // ==========================================
  "Nigerian History": {
    subject: "Government", title: "Nigerian Political History",
    icon: "🇳🇬", estimatedTime: "2 min read",
    sections: [
      { heading: "Key Historical Facts", type: "cards", items: [
        { title: "Regional self-government 1957", body: "Western and Eastern regions got self-government in 1957. Northern region in 1959. Full independence 1960." },
        { title: "Sputnik 1 — Soviet Union 1957", body: "First artificial satellite launched by the SOVIET UNION on October 4, 1957. Began the Space Age. RECURRING!" },
        { title: "8th Military Head of State", body: "ABDULSALAMI ABUBAKAR was Nigeria's 8th military HoS. Handed power to civilian rule in 1999. RECURRING!" },
        { title: "Acephalous = Igbo", body: "ACEPHALOUS means no centralised authority/chief. Classic example = pre-colonial IGBO society (village councils, age grades). RECURRING!" },
        { title: "Rule of law = A.C. Dicey", body: "Attributed to A.C. (A.V.) Dicey. Three principles: supremacy of law, equality before law, constitution as source of rights. RECURRING!" }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "West + East self-government = 1957. Sputnik 1 = Soviet Union 1957. Abdulsalami = 8th military HoS. Acephalous = Igbo (no central authority). Rule of law = Dicey. Bourgeoisie = owners (Marxism). Proletariat = workers." }
    ]
  },

  // ==========================================
  // GOVERNMENT — GEOGRAPHY
  // ==========================================
  "Geography": {
    subject: "Government", title: "Geography",
    icon: "🌏", estimatedTime: "3 min read",
    sections: [
      { heading: "Solar System", type: "cards", items: [
        { title: "Smallest planet = Mercury", body: "Mercury is the smallest of the 8 planets. Also closest to the Sun. RECURRING — appeared in 2008, 2010!" },
        { title: "Neptune = longest orbit", body: "Neptune is the most distant planet — longest orbital period (~165 Earth years). RECURRING!" },
        { title: "Earth's distance from sun", body: "Earth is approximately 148.8-149.6 million km from the Sun (1 Astronomical Unit). Third planet from Sun. RECURRING!" },
        { title: "Lunar eclipse", body: "EARTH comes between Sun and Moon. Earth's shadow falls on the Moon. Solar eclipse: Moon comes between Earth and Sun. RECURRING!" },
        { title: "International Date Line", body: "Crossing from West to East = GAIN a day. Crossing East to West = lose a day. Located at 180° meridian. RECURRING!" }
      ]},
      { heading: "Rocks & Weathering", type: "cards", items: [
        { title: "Granite = intrusive igneous", body: "Granite forms by SLOW cooling of magma deep within earth's crust → large crystals. Basalt = extrusive (fast cooling → fine grains). RECURRING!" },
        { title: "Exfoliation = physical weathering", body: "Exfoliation (onion-skin peeling) = PHYSICAL weathering, NOT chemical. Chemical weathering: chelation, carbonation, hydrolysis, oxidation. RECURRING!" },
        { title: "Rock metamorphism pairs", body: "Limestone→Marble. Shale→Schist. Granite→Gneiss. Sandstone→Quartzite. Clay→Slate. WRONGLY PAIRED: Granite→Quartzite (wrong!) or Quartzite→Graphite (wrong!). RECURRING!" }
      ]},
      { heading: "Geographical Features", type: "cards", items: [
        { title: "Mississippi = Bird's foot delta", body: "Mississippi River has a BIRD'S FOOT delta (long finger-like distributaries). Nile = arcuate. Thames = estuarine. RECURRING!" },
        { title: "Block mountain + rift valley", body: "Block mountains (horsts) are ALWAYS associated with RIFT VALLEYS (grabens) — complementary features. RECURRING!" },
        { title: "Isohel = equal sunshine", body: "Isohel = line joining places with equal sunshine hours. Isobar = pressure. Isotherm = temperature. Isohyet = rainfall. RECURRING!" },
        { title: "ECOWAS — Cameroon not a member", body: "Cameroon is NOT in ECOWAS. Nigeria, Liberia, Ghana are members. RECURRING!" }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Smallest planet = Mercury. Lunar eclipse = Earth between Sun and Moon. Date line West→East = gain a day. Granite = intrusive, large crystals. Exfoliation = physical. Mississippi = bird's foot delta. Isohel = sunshine. Cameroon NOT in ECOWAS." }
    ]
  },

  // ==========================================
  // COMMERCE — AGRICULTURE & TRADE
  // ==========================================
  "Agriculture & Trade": {
    subject: "Commerce", title: "Agriculture & Trade",
    icon: "🌾", estimatedTime: "2 min read",
    sections: [
      { heading: "Key Facts", type: "cards", items: [
        { title: "Bush fallowing", body: "Rotating cultivation land to allow natural recovery of soil fertility. Shifting cultivation in its traditional form. RECURRING!" },
        { title: "Sahel = drought", body: "Major environmental hazard in the Sahel and northern Sudan Savanna = DROUGHT. Causes desertification and food insecurity. RECURRING!" },
        { title: "Softwood = pulp and paper", body: "Softwood from coniferous forests (pine, spruce) is mainly used to make PULP AND PAPER. RECURRING!" },
        { title: "Industrialisation = iron and steel", body: "Iron and steel processing is the BACKBONE of industrialisation — provides raw materials for all other industries. RECURRING!" }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Bush fallowing = rotating land for fertility recovery. Sahel = drought is the main hazard. Softwood = pulp and paper. Iron and steel = foundation of industrialisation." }
    ]
  },

  // ==========================================
  // COMMERCE — COMMERCE & TRADE
  // ==========================================
  "Commerce & Trade": {
    subject: "Commerce", title: "Commerce & Trade",
    icon: "🤝", estimatedTime: "2 min read",
    sections: [
      { heading: "Key Commerce Concepts", type: "cards", items: [
        { title: "Warehousing", body: "Enables production to take place AHEAD OF DEMAND by providing storage. Bridges the time gap between production and consumption. RECURRING!" },
        { title: "Branding", body: "The process of giving a product a distinctive name/symbol to DIFFERENTIATE it from competitors. RECURRING!" },
        { title: "Baby milk = indirect advertising", body: "Baby milk (infant formula) requires INDIRECT advertising (through medical professionals) due to WHO/UNICEF code restrictions. RECURRING!" },
        { title: "Debit note for undercharge", body: "When a seller undercharges, they issue a DEBIT NOTE to charge the additional amount owed. Credit note = reduces what buyer owes. RECURRING!" },
        { title: "Transporting = commercial service", body: "Commercial services (aids to trade): transport, banking, insurance, warehousing, advertising. Garri processing, drilling, lumbering = production activities. RECURRING!" }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Warehousing = production ahead of demand. Branding = differentiate manufacturers. Baby milk = indirect advertising. Seller undercharges → issues debit note. Transport = commercial service (not production)." }
    ]
  },

  // ==========================================
  // COMMERCE — INTERNATIONAL TRADE
  // ==========================================
  "International Trade": {
    subject: "Commerce", title: "International Trade",
    icon: "✈️", estimatedTime: "1 min read",
    sections: [
      { heading: "Key Concepts", type: "cards", items: [
        { title: "Comparative cost advantage", body: "Countries specialise where they have the LOWEST OPPORTUNITY COST. Basis of international trade. RECURRING!" },
        { title: "Terms of trade", body: "Rate at which EXPORTS exchange for IMPORTS. Direction of foreign trade ≠ terms of trade." },
        { title: "OPEC non-member", body: "Mexico is sometimes listed as not a full OPEC member. Nigeria, Saudi Arabia, Venezuela ARE members." }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Comparative advantage = specialise where opportunity cost is lowest. This is the BASIS of international trade. Terms of trade = export/import exchange rate." }
    ]
  },

  // ==========================================
  // COMMERCE — INDUSTRY & PRODUCTION
  // ==========================================
  "Industry & Production": {
    subject: "Commerce", title: "Industry & Production",
    icon: "🏭", estimatedTime: "1 min read",
    sections: [
      { heading: "Nigerian Industry", type: "cards", items: [
        { title: "Rolling mills in Nigeria", body: "Major rolling mills: Katsina, Jos, Oshogbo, Delta Steel (Aladja). Jos Steel Rolling Mill is well-known. RECURRING!" },
        { title: "Iron and steel = industrialisation", body: "Iron and steel processing best promotes industrialisation — backbone of all other industries. RECURRING!" },
        { title: "Subsidiary firms", body: "Firms that RENDER SERVICES to bigger firms. Different from companies formed by merging or government subsidy." }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Jos = rolling mill. Iron and steel = backbone of industrialisation. Subsidiary firms = service providers to larger firms." }
    ]
  },

  // ==========================================
  // COMMERCE — ENVIRONMENT & RESOURCES
  // ==========================================
  "Environment & Resources": {
    subject: "Commerce", title: "Environment & Resources",
    icon: "🌿", estimatedTime: "1 min read",
    sections: [
      { heading: "Key Facts", type: "cards", items: [
        { title: "Sahel = drought", body: "Major environmental hazard in the Sahel and northern Sudan Savanna = DROUGHT, leading to desertification. RECURRING!" },
        { title: "Nylon is NOT petroleum product", body: "Candles (paraffin), plastic, diesel = petroleum products. NYLON is a synthetic polyamide — NOT from petroleum. RECURRING!" },
        { title: "Chromite ore = not energy source", body: "Chromite ore produces chromium for stainless steel — NOT an energy source. Coal, uranium, natural gas are energy sources. RECURRING!" }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Sahel = drought (not locusts or harmattan). Nylon is NOT a petroleum product. Chromite ore is NOT an energy source. These distinctions are repeatedly tested." }
    ]
  },


  "Accounting Concepts": {
    subject: "Accounts",
    summary: "Accounting concepts are the fundamental principles guiding financial records. Key concepts: going concern (business continues), accruals (match income to expenses), consistency (same methods each period), prudence (don't overstate profits), materiality (only significant items recorded), entity (business separate from owner).",
    keyPoints: ["Going concern: business will continue operating", "Accruals: match income and expenses to period", "Consistency: use same methods each year", "Prudence: don't overstate assets or profits", "Entity concept: business is separate from owner"]
  },
  "Branch Accounts": {
    subject: "Accounts",
    summary: "Branch accounts record transactions of a separate branch of a business. Head office sends goods to branch at cost or invoice price. Branch account, branch debtors account, goods sent to branch account. Loading = difference between invoice and cost price.",
    keyPoints: ["Branch receives goods from head office", "Loading = invoice price - cost price", "Branch stock at invoice price", "Unrealised profit on closing stock must be eliminated", "Branch current account in head office books"]
  },
  "Capital & Drawings": {
    subject: "Accounts",
    summary: "Capital is owner's investment in the business. Drawings are amounts taken out by owner. Capital account increases with profit and additional capital. Decreases with losses and drawings. Capital employed = fixed assets + working capital. Net worth = assets - liabilities.",
    keyPoints: ["Capital = owner's investment", "Drawings reduce capital", "Profit increases capital", "Capital account: opening capital + profit - drawings = closing capital", "Working capital = current assets - current liabilities"]
  },
  "Cash Book": {
    subject: "Accounts",
    summary: "Cash book records all cash and bank transactions. Two-column: cash and bank columns. Three-column: cash, bank and discount columns. Debit side: receipts. Credit side: payments. Bank reconciliation statement: reconciles cash book with bank statement.",
    keyPoints: ["Debit side: money received", "Credit side: money paid out", "Contra entries: cash to bank or bank to cash", "Bank reconciliation: adjusts for unpresented cheques and outstanding deposits", "Discount allowed: debit discount, credit debtors"]
  },
  "Company Accounts": {
    subject: "Accounts",
    summary: "Companies issue shares (ordinary, preference) and debentures. Share capital: authorised, issued, called-up, paid-up. Retained profits go to reserves. Final accounts: trading account, P&L account, appropriation account, balance sheet.",
    keyPoints: ["Ordinary shares: voting rights, variable dividend", "Preference shares: fixed dividend, priority on liquidation", "Debentures: loans to company with fixed interest", "Retained earnings go to general reserve", "Share premium: excess over nominal value"]
  },
  "Control Accounts": {
    subject: "Accounts",
    summary: "Control accounts summarise individual accounts in a ledger. Sales ledger control account: summarises debtors. Purchases ledger control account: summarises creditors. Used to check arithmetic accuracy. Balance = total of individual balances.",
    keyPoints: ["Sales ledger control: total debtors", "Purchases ledger control: total creditors", "Debit: opening balance + credit sales + dishonoured cheques", "Credit: payments received + discounts + returns", "Balance should equal sum of individual debtor balances"]
  },
  "Costing": {
    subject: "Accounts",
    summary: "Costing determines cost of production. Elements: material, labour, overhead. Direct costs: traceable to product. Indirect costs (overheads): allocated to products. Job costing: each job separately costed. Process costing: continuous production.",
    keyPoints: ["Prime cost = direct material + direct labour + direct expenses", "Factory cost = prime cost + factory overhead", "Cost of production = factory cost + opening WIP - closing WIP", "Marginal costing: only variable costs to product", "Absorption costing: all production costs to product"]
  },
  "Departmental Accounts": {
    subject: "Accounts",
    summary: "Departmental accounts show profit/loss of each department separately. Revenues and direct costs allocated to departments. Shared/indirect costs apportioned using suitable basis (floor area, sales, employees). Combined to give total business results.",
    keyPoints: ["Each department has separate trading account", "Direct costs: directly allocated to department", "Indirect costs: apportioned on suitable basis", "Floor area for rent, heating", "Sales value for advertising costs"]
  },
  "Depreciation": {
    subject: "Accounts",
    summary: "Depreciation spreads cost of asset over useful life. Methods: straight-line (fixed amount each year), reducing balance (fixed % of book value). Causes: wear and tear, obsolescence, time passage. Accumulated depreciation shown in balance sheet.",
    keyPoints: ["Straight-line: (Cost - Residual value) ÷ Useful life", "Reducing balance: % × book value each year", "Depreciation reduces profit and asset value", "Accumulated depreciation = total depreciation to date", "Net book value = cost - accumulated depreciation"]
  },
  "Incomplete Records": {
    subject: "Accounts",
    summary: "Incomplete records: business hasn't kept full double-entry. Find profit by comparing opening and closing capital. Net profit = closing capital + drawings - additional capital - opening capital. Use cash/bank summaries and mark-up/margin to find missing figures.",
    keyPoints: ["Profit = closing capital + drawings - opening capital - additional capital", "Mark-up: profit as % of cost price", "Margin: profit as % of selling price", "Reconstruct figures from available information", "Use control accounts to find missing debtors/creditors"]
  },
  "Manufacturing Accounts": {
    subject: "Accounts",
    summary: "Manufacturing account shows cost of producing goods. Sections: cost of raw materials used, prime cost, factory cost, cost of production. Raw materials: opening stock + purchases - closing stock. Factory overheads added to get factory cost.",
    keyPoints: ["Raw materials used = opening + purchases - closing", "Prime cost = materials + direct labour + direct expenses", "Factory overhead: indirect costs of production", "Cost of production transferred to trading account", "Work in progress: opening added, closing deducted"]
  },
  "Non-Profit Organisations": {
    subject: "Accounts",
    summary: "Clubs, societies and charities prepare receipts and payments account (cash basis) and income and expenditure account (accruals basis). Surplus = income > expenditure. Deficit = expenditure > income. Accumulated fund = net worth of organisation.",
    keyPoints: ["Receipts and payments: cash book summary", "Income and expenditure: accruals basis", "Surplus = income - expenditure (not profit)", "Accumulated fund replaces capital", "Subscriptions: adjust for arrears and prepayments"]
  },
  "Partnership Accounts": {
    subject: "Accounts",
    summary: "Partnership: two or more people in business. Partnership agreement covers profit sharing, salaries, interest on capital/drawings. Appropriation account distributes profit. Current accounts show each partner's share. Capital accounts: fixed capital method.",
    keyPoints: ["Partners share profits as agreed", "Interest on capital: reward for investment", "Partner's salary: reward for work", "Current account: running total of partner's share", "Goodwill: valued when partner joins or leaves"]
  },
  "Petty Cash": {
    subject: "Accounts",
    summary: "Petty cash handles small cash payments. Imprest system: fixed float restored to same amount periodically. Petty cash book: analysis columns for each type of expense. Vouchers support each payment. Petty cashier requests reimbursement for total spent.",
    keyPoints: ["Imprest system: fixed float amount", "Float restored to same amount each period", "Analysis columns: stationery, postage, cleaning etc", "Vouchers: evidence for each payment", "Petty cash is an asset in balance sheet"]
  },
  "Prepayments & Accruals": {
    subject: "Accounts",
    summary: "Prepayments: expenses paid in advance (asset). Accruals: expenses incurred but not yet paid (liability). Accruals concept: match expenses to period. Charge to P&L: amount for the period, not amount paid. Adjust opening and closing figures.",
    keyPoints: ["Prepayment: paid in advance, shown as asset", "Accrual: owed but not paid, shown as liability", "Charge to P&L = paid + opening accrual - closing accrual + closing prepayment - opening prepayment", "Accruals concept: match to accounting period", "Adjustments needed for final accounts"]
  },
  "Profit & Loss Account": {
    subject: "Accounts",
    summary: "P&L account shows net profit after deducting expenses from gross profit. Gross profit from trading account. Deduct selling, administration and finance expenses. Net profit = gross profit - expenses. Net loss if expenses exceed gross profit.",
    keyPoints: ["Gross profit = net sales - cost of sales", "Net profit = gross profit - expenses", "Expenses: rent, wages, depreciation, bad debts", "Net profit added to capital", "GP% = gross profit/sales × 100"]
  },
  "Public Sector Accounting": {
    subject: "Accounts",
    summary: "Government accounting differs from commercial accounting. Fund accounting: each fund has separate accounts. Revenue and capital expenditure distinguished. Appropriation: amounts approved for spending. Government follows cash basis mostly. Audit by government auditor.",
    keyPoints: ["Fund accounting: separate accounts for each purpose", "Appropriation: approved spending budget", "Surpluses go to consolidated fund", "No profit motive in government accounting", "External audit by Auditor-General"]
  },
  "Stock Valuation": {
    subject: "Accounts",
    summary: "Stock valued at lower of cost or net realisable value (SSAP 9/IAS 2). Methods: FIFO (first in first out), LIFO (last in first out), AVCO (weighted average cost). FIFO gives highest profit in rising prices. Closing stock affects profit.",
    keyPoints: ["Value at lower of cost or net realisable value", "FIFO: oldest stock sold first", "LIFO: newest stock sold first (not allowed under IFRS)", "AVCO: weighted average of all purchases", "Higher closing stock = higher gross profit"]
  },
  "Suspense Account": {
    subject: "Accounts",
    summary: "Suspense account is temporary account for errors and unresolved items. Created when trial balance doesn't balance. Errors: omission, commission, principle, compensating, original entry, reversal. Suspense account cleared when errors corrected.",
    keyPoints: ["Suspense account: temporary holding account", "Trial balance errors: casting, transposition", "Errors not affecting trial balance: omission, reversal, principle", "Journal entry used to correct errors", "Suspense account balance = 0 after all corrections"]
  },
  "Trading Account": {
    subject: "Accounts",
    summary: "Trading account calculates gross profit. Sales - Returns inward = Net sales. Opening stock + Purchases + Carriage inwards - Returns outward - Closing stock = Cost of sales. Gross profit = Net sales - Cost of sales.",
    keyPoints: ["Net sales = sales - returns inward", "Cost of sales = opening stock + purchases - closing stock", "Gross profit = net sales - cost of sales", "Carriage inwards added to purchases", "Carriage outwards is P&L expense, not trading account"]
  },
  "Acts of the Apostles": {
    subject: "CRK",
    summary: "Acts records early church history after Jesus's ascension. Written by Luke. Pentecost: Holy Spirit descends, tongues of fire, 3000 converted. Peter's miracles and preaching. Paul's conversion on Damascus road. Paul's missionary journeys. Council of Jerusalem.",
    keyPoints: ["Pentecost: Holy Spirit comes at 50 days after resurrection", "Peter heals lame man at Beautiful Gate", "Paul (Saul) converted on road to Damascus", "Three missionary journeys of Paul", "Council of Jerusalem: Gentile Christians and circumcision"]
  },
  "Creation & Patriarchs": {
    subject: "CRK",
    summary: "Genesis 1-2: God creates world in 6 days, rests on 7th. Creation order: light, sky, land/sea, plants, sun/moon/stars, animals, humans. Adam and Eve in Garden of Eden. Abraham: faith and covenant. Isaac, Jacob (Israel), Joseph in Egypt.",
    keyPoints: ["Creation: 6 days, rest on 7th", "Humans created in God's image on day 6", "Adam and Eve: fall in Garden of Eden", "Abraham: father of faith, covenant with God", "Joseph: sold by brothers, rose to power in Egypt"]
  },
  "Epistles": {
    subject: "CRK",
    summary: "Paul's letters to churches: Romans (justification by faith), Corinthians (church problems), Galatians (grace not law), Ephesians (church as body of Christ), Philippians (joy), Colossians, Thessalonians (second coming). General epistles: James, Peter, John.",
    keyPoints: ["Romans: justification by faith alone", "1 Corinthians: spiritual gifts, love (ch.13), resurrection", "Galatians: salvation by grace not law", "Ephesians: armour of God (ch.6)", "1 John: God is love, test the spirits"]
  },
  "Exodus & the Law": {
    subject: "CRK",
    summary: "Moses leads Israelites out of Egypt. Ten plagues: water to blood, frogs, lice, flies, livestock disease, boils, hail, locusts, darkness, death of firstborn. Passover. Crossing Red Sea. Ten Commandments at Sinai. Tabernacle construction.",
    keyPoints: ["Ten plagues sent to free Israelites", "Passover: death angel passes over Israelite homes", "Crossing Red Sea: waters parted by Moses", "Ten Commandments: Exodus 20", "Sabbath: seventh day holy to God"]
  },
  "Gospel of John": {
    subject: "CRK",
    summary: "John's Gospel emphasizes Jesus as Son of God. Seven 'I am' sayings: bread of life, light of the world, door, good shepherd, resurrection and life, way/truth/life, true vine. Seven signs/miracles. Prologue: Word became flesh (John 1:1-14).",
    keyPoints: ["'I am the way, truth and life' (John 14:6)", "'In the beginning was the Word' (John 1:1)", "Jesus raises Lazarus from dead", "Nicodemus: born again (John 3)", "Thomas's confession: 'My Lord and my God'"]
  },
  "Old Testament History": {
    subject: "CRK",
    summary: "Historical books: Joshua (conquest of Canaan), Judges (cycles of sin/oppression/deliverance), Samuel (Saul and David), Kings (Solomon, divided kingdom). Key events: crossing Jordan, fall of Jericho, Judges cycle, Samuel anoints Saul then David.",
    keyPoints: ["Joshua crosses Jordan, Jericho walls fall", "Judges: Gideon, Samson, Deborah", "Samuel: last judge, anoints first kings", "Saul: first king, rejected for disobedience", "David: man after God's heart, ancestor of Jesus"]
  },
  "Synoptic Gospels": {
    subject: "CRK",
    summary: "Matthew, Mark and Luke share similar content (synoptic = same view). Matthew: Jesus as King/Messiah, 5 discourses. Mark: Jesus as servant, action-focused, shortest. Luke: Jesus as perfect man, emphasis on prayer, women, poor. Synoptic problem: shared sources.",
    keyPoints: ["Synoptic: Matthew, Mark, Luke", "Matthew: Jesus as Messiah, fulfils Old Testament", "Mark: shortest, action-focused, Jesus as servant", "Luke: emphasis on prayer, women, outcasts", "Sermon on the Mount: Matthew 5-7"]
  },
  "The Monarchy": {
    subject: "CRK",
    summary: "Israel's monarchy: Saul (first king), David (greatest king), Solomon (wisdom and temple). After Solomon: divided kingdom - Israel (north) and Judah (south). Israel fell to Assyria (722BC). Judah fell to Babylon (586BC). Temple destroyed.",
    keyPoints: ["Saul: first king, tall, rejected for disobedience", "David: anointed by Samuel, kills Goliath, king of all Israel", "Solomon: wisest king, built temple in Jerusalem", "Kingdom divides after Solomon: Israel and Judah", "Both kingdoms eventually conquered"]
  },
  "The Prophets": {
    subject: "CRK",
    summary: "Prophets spoke God's message. Major: Isaiah (suffering servant), Jeremiah (new covenant), Ezekiel (dry bones), Daniel. Minor: Hosea, Amos (justice), Jonah, Micah. Themes: sin and judgment, call to repentance, hope and restoration, Messiah prophecies.",
    keyPoints: ["Isaiah: prophecies of suffering servant and Messiah", "Jeremiah: new covenant written on heart", "Amos: God demands justice for the poor", "Jonah: God's mercy extends to Gentiles (Nineveh)", "Daniel: faithfulness in captivity, apocalyptic visions"]
  },
  "Accounts & Finance": {
    subject: "Commerce",
    summary: "Business finance involves raising and managing funds. Sources: owner's capital, bank loans, overdrafts, trade credit, debentures, share issue. Short-term finance: overdraft, trade credit. Long-term: share capital, debentures, mortgages. Working capital management essential.",
    keyPoints: ["Short-term finance: overdraft, factoring, trade credit", "Long-term finance: share capital, debentures, mortgages", "Working capital = current assets - current liabilities", "Overcapitalisation: too much capital for size", "Undercapitalisation: insufficient funds for operations"]
  },
  "Agency": {
    subject: "Commerce",
    summary: "Agency: agent acts on behalf of principal. Types: general (broad authority), special (specific task), del credere (guarantees payment). Agent's duties: obey instructions, show skill, account for money, not take bribes. Principal liable for agent's acts within authority.",
    keyPoints: ["Agent acts on behalf of principal", "Principal bound by agent's authorised acts", "Del credere agent: guarantees buyer's payment", "Agent must not take secret profits", "Agency ends: completion of task, death, insanity"]
  },
  "Business Environment": {
    subject: "Commerce",
    summary: "Businesses operate in external environment: political (government policy), economic (interest rates, inflation), social (demographics, culture), technological (innovation), legal (laws) and ecological factors. PESTLE analysis. Internal environment: staff, resources, culture.",
    keyPoints: ["PESTLE: Political, Economic, Social, Technological, Legal, Environmental", "Government policies affect business operations", "Inflation increases costs of production", "Technology changes production methods", "Demographics affect demand for products"]
  },
  "Business Organisations": {
    subject: "Commerce",
    summary: "Types: sole trader (one owner, unlimited liability), partnership (2-20 partners), private limited company (Ltd, limited liability), public limited company (Plc, shares on stock exchange), cooperative (owned by members), public enterprise (government owned).",
    keyPoints: ["Sole trader: easy to set up, unlimited liability", "Partnership: shared responsibility, unlimited liability", "Ltd: limited liability, not listed on stock exchange", "Plc: listed on stock exchange, minimum share capital", "Cooperative: democratic control, profit sharing"]
  },
  "Capital Market": {
    subject: "Commerce",
    summary: "Capital market deals in long-term funds. Stock exchange: buying and selling of shares and bonds. Primary market: new issues. Secondary market: existing securities traded. NSE (Nigerian Stock Exchange). Instruments: shares, bonds, debentures, treasury bills.",
    keyPoints: ["Capital market: long-term securities (over 1 year)", "Money market: short-term funds", "Stock exchange: secondary market for securities", "Primary market: new share issues (IPO)", "SEC: Securities and Exchange Commission regulates"]
  },
  "Commerce Concepts": {
    subject: "Commerce",
    summary: "Commerce: all activities involved in exchange of goods and services. Trade (buying/selling) + Aids to trade (banking, insurance, transport, communication, warehousing, advertising). Home trade vs foreign trade. Retail vs wholesale.",
    keyPoints: ["Commerce = trade + aids to trade", "Home trade: within a country", "Foreign trade: between countries", "Retail: selling to final consumer", "Wholesale: selling to retailers in bulk"]
  },
  "Computers in Business": {
    subject: "Commerce",
    summary: "Computers improve business efficiency. Uses: accounting (spreadsheets), communication (email), data storage (databases), online trading (e-commerce), payroll, stock control. E-commerce: buying/selling online. Electronic funds transfer. Benefits: speed, accuracy, storage.",
    keyPoints: ["E-commerce: buying/selling via internet", "Electronic Data Interchange (EDI): business documents electronically", "Advantages: speed, accuracy, reduced paperwork", "Barcode scanners: automatic stock control", "Online banking: reduces need for branch visits"]
  },
  "Consumer Rights": {
    subject: "Commerce",
    summary: "Consumers have rights under law: right to safety, information, choice, redress, healthy environment. Consumer Protection Council (CPC) in Nigeria. NAFDAC regulates food, drugs. SON (Standards Organisation of Nigeria) sets standards. Caveat emptor vs caveat venditor.",
    keyPoints: ["Right to safety: products must be safe", "Right to information: accurate product information", "Right to redress: compensation for defective goods", "NAFDAC: regulates food and drugs in Nigeria", "SON: sets product standards"]
  },
  "Contract Law": {
    subject: "Commerce",
    summary: "Contract: legally binding agreement. Elements: offer, acceptance, consideration, intention, capacity, legality. Void contract: no legal effect. Voidable: one party can cancel. Types: bilateral (both parties promise), unilateral (one party promises on condition).",
    keyPoints: ["Offer: definite proposal", "Acceptance: unconditional agreement to offer", "Consideration: something of value exchanged", "Capacity: both parties must be legally competent", "Void: no legal effect from start"]
  },
  "Cooperative & Thrift Societies": {
    subject: "Commerce",
    summary: "Cooperatives: voluntary organisations owned and run by members for mutual benefit. Types: consumer, producer, credit (thrift), marketing cooperatives. Principles: voluntary membership, democratic control, surplus distributed by patronage. Credit societies provide loans to members.",
    keyPoints: ["Cooperative: owned by members", "Consumer cooperative: bulk buying for members", "Producer cooperative: shared production resources", "Credit/thrift cooperative: savings and loans", "Surplus distributed based on transactions, not shareholding"]
  },
  "Discounts": {
    subject: "Commerce",
    summary: "Trade discount: reduction off list price given to trade buyers. Not recorded in accounts separately. Cash discount: reduction for prompt payment. Discount allowed (seller's books): debit discount allowed, credit debtor. Discount received: credit discount received, debit creditor.",
    keyPoints: ["Trade discount: not recorded separately in books", "Cash discount: for early payment", "Discount allowed: given to customers (expense)", "Discount received: received from suppliers (income)", "Net price = list price - trade discount"]
  },
  "Documents of Trade": {
    subject: "Commerce",
    summary: "Trade documents: enquiry, quotation, order, invoice, credit note, debit note, statement of account, receipt. Invoice: details of goods sold, request for payment. Credit note: reduces amount owed. Proforma invoice: sent before goods dispatched.",
    keyPoints: ["Enquiry: buyer asks for price information", "Quotation: seller states price and terms", "Invoice: request for payment for goods", "Credit note: reduces amount owed by buyer", "Statement of account: summary of transactions"]
  },
  "Insurance": {
    subject: "Commerce",
    summary: "Insurance: protection against financial loss. Premium: payment for cover. Indemnity: restore to original position. Insurable interest: must have financial stake. Utmost good faith: disclose all material facts. Types: fire, marine, life, motor, accident, fidelity.",
    keyPoints: ["Premium: payment for insurance cover", "Indemnity: restore to position before loss", "Insurable interest: must stand to lose from event", "Utmost good faith: disclose all relevant facts", "Subrogation: insurer takes over insured's rights"]
  },
  "Marketing": {
    subject: "Commerce",
    summary: "Marketing: identifying and satisfying customer needs profitably. 4Ps: Product, Price, Place, Promotion. Market research: primary (surveys) and secondary (published data). Consumer goods vs industrial goods. Mass marketing vs niche marketing.",
    keyPoints: ["4Ps: Product, Price, Place, Promotion (marketing mix)", "Market research: find customer needs", "Primary research: surveys, interviews, observation", "Secondary research: existing published data", "USP: unique selling proposition"]
  },
  "Privatization & Public Enterprises": {
    subject: "Commerce",
    summary: "Public enterprises: government-owned businesses providing essential services. Problems: inefficiency, political interference, overstaffing. Privatisation: selling government enterprises to private sector. Commercialisation: government enterprise runs on commercial basis without selling.",
    keyPoints: ["Public enterprise: owned and run by government", "Problems: inefficiency, political interference", "Privatisation: transfer to private ownership", "Commercialisation: run on business lines but still government-owned", "NEPA → PHCN → privatised as distribution companies"]
  },
  "Quality & Standards": {
    subject: "Commerce",
    summary: "Quality: fitness for purpose. Quality control: checking products meet standards. Quality assurance: system to ensure quality. ISO 9000: international quality standard. SON sets Nigerian standards. NAFDAC approves food/drug quality. Consumer protection ensures quality.",
    keyPoints: ["Quality control: inspect finished products", "Quality assurance: build quality into process", "ISO 9000: international quality management standard", "SON: Standards Organisation of Nigeria", "Total Quality Management (TQM): organisation-wide quality"]
  },
  "Retailing": {
    subject: "Commerce",
    summary: "Retailer: last link in chain of distribution, sells to consumers. Types: department store (many products), supermarket (self-service food), hypermarket (very large), chain stores (many branches), mail order, e-commerce. Functions: break bulk, provide credit, advice, convenience.",
    keyPoints: ["Retailer: sells directly to consumer", "Department store: many departments under one roof", "Supermarket: self-service, mainly food", "Chain stores: same name/layout across many locations", "Mail order: buying from catalogue or online"]
  },
  "Sources of Finance": {
    subject: "Commerce",
    summary: "Short-term: overdraft, trade credit, factoring, hire purchase deposits. Medium-term: bank loans, hire purchase, leasing. Long-term: share capital, debentures, retained profits, mortgages. Internal sources: retained profit, sale of assets. External: borrowing, share issue.",
    keyPoints: ["Overdraft: short-term bank borrowing", "Hire purchase: pay in instalments, own at end", "Leasing: rent asset, never own it", "Debenture: long-term loan with fixed interest", "Retained profit: cheapest source, no interest"]
  },
  "Trade Organisations": {
    subject: "Commerce",
    summary: "Trade organisations promote business interests. Chambers of Commerce: represents businesses locally. Manufacturers Association (MAN). Trade unions: workers' organisations. Employers associations. WTO: world trade. ECOWAS: West African trade. OPEC: oil producers.",
    keyPoints: ["Chamber of Commerce: local business interests", "MAN: Manufacturers Association of Nigeria", "Trade union: workers negotiate with employers", "ECOWAS: Economic Community of West African States", "WTO: regulates international trade"]
  },
  "Transport": {
    subject: "Commerce",
    summary: "Transport moves goods and people. Types: road (flexible, door-to-door), rail (bulk goods, long distance), air (fast, expensive), water (cheap, bulk, slow), pipeline (oil/gas). Choice depends on cost, speed, nature of goods, destination.",
    keyPoints: ["Road: most flexible, door-to-door", "Rail: bulk goods, long distance, cheaper than road for bulk", "Air: fastest, most expensive", "Water: cheapest for heavy bulk goods", "Pipeline: cheapest for oil and gas"]
  },
  "Warehousing & Distribution": {
    subject: "Commerce",
    summary: "Warehouse: storage for goods between production and sale. Functions: storage, breaking bulk, grading, packaging, financing goods. Types: bonded (customs), cold storage, distribution centres. Channel of distribution: producer → wholesaler → retailer → consumer.",
    keyPoints: ["Warehouse: stores goods between production and sale", "Bonded warehouse: goods under customs control", "Cold storage: perishable goods", "Channel of distribution: route goods take to consumer", "Breaking bulk: dividing large quantities into smaller lots"]
  },
  "Agriculture & Development": {
    subject: "Economics",
    summary: "Agriculture contributes to economic development: food supply, foreign exchange (cocoa, groundnut), employment, raw materials for industry. Problems: poor infrastructure, low capital, subsistence farming. Green revolution: improved seeds, irrigation, fertilisers.",
    keyPoints: ["Agriculture employs majority in developing countries", "Export crops earn foreign exchange", "Subsistence farming: produce for own consumption", "Commercial farming: produce for sale", "Land reform: redistribute land to improve equity"]
  },
  "Consumer Theory": {
    subject: "Economics",
    summary: "Consumers maximize utility subject to budget constraint. Law of diminishing marginal utility: each extra unit gives less satisfaction. Indifference curves: combinations giving same utility. Budget line: what consumer can afford. Consumer equilibrium: highest indifference curve on budget line.",
    keyPoints: ["Utility: satisfaction from consuming goods", "Marginal utility: satisfaction from one more unit", "Diminishing marginal utility: additional units give less satisfaction", "Consumer surplus: difference between willingness to pay and price paid", "Indifference curve: combinations giving equal utility"]
  },
  "Fiscal Policy & Public Finance": {
    subject: "Economics",
    summary: "Fiscal policy: government use of taxation and spending to influence economy. Expansionary: increase spending or cut taxes (stimulates economy). Contractionary: reduce spending or raise taxes (controls inflation). Budget deficit: spending > revenue. National debt accumulates deficits.",
    keyPoints: ["Fiscal policy: government spending and taxation", "Expansionary: stimulate economy (deficit spending)", "Contractionary: reduce inflation (surplus budget)", "Budget deficit: government spends more than it earns", "Progressive tax: higher income = higher % rate"]
  },
  "Industry & Location": {
    subject: "Economics",
    summary: "Industries locate where costs are minimised. Factors: raw materials (heavy industries), labour (skilled or cheap), market (perishable goods), power, transport, government incentives. Industrial inertia: industries stay in original location despite changing factors.",
    keyPoints: ["Raw material-oriented: heavy, bulky inputs (steel, cement)", "Market-oriented: perishable or fragile products", "Labour-oriented: needs skilled or cheap labour", "Government incentives attract industries to specific areas", "Industrial inertia: cost of moving exceeds benefit"]
  },
  "National Income": {
    subject: "Economics",
    summary: "National income measures economic output. GDP: all output in country. GNP: output by country's residents worldwide. NNP = GNP - depreciation. Methods: output, income, expenditure. Per capita income = national income ÷ population. Real vs nominal GDP.",
    keyPoints: ["GDP: value of all goods/services produced in country", "GNP = GDP + net factor income from abroad", "NNP = GNP - capital consumption (depreciation)", "Income method: wages + profits + rent + interest", "Expenditure method: C + I + G + (X-M)"]
  },
  "Production & Costs": {
    subject: "Economics",
    summary: "Short run: at least one fixed factor. Long run: all factors variable. Fixed costs: don't change with output. Variable costs: change with output. Total cost = FC + VC. Average cost = TC/output. Marginal cost: cost of one more unit. Economies of scale: lower AC as output rises.",
    keyPoints: ["Fixed cost: constant regardless of output", "Variable cost: changes with output", "Average total cost = TC ÷ output", "Marginal cost: change in TC from one more unit", "Economies of scale: larger production lowers average cost"]
  },
  "Citizenship & Rights": {
    subject: "Government",
    summary: "Citizens have rights and responsibilities. Fundamental rights in Nigerian constitution: life, dignity, freedom from slavery, fair hearing, privacy, freedom of thought/religion/expression/assembly, movement, freedom from discrimination. Duties: pay taxes, obey laws, defend country.",
    keyPoints: ["Fundamental rights: life, dignity, fair hearing", "Freedom of expression, religion, movement", "Right to education and health", "Citizens' duties: pay taxes, vote, obey laws", "Rights can be limited in public interest"]
  },
  "Civil Service": {
    subject: "Government",
    summary: "Civil service: permanent, professional government employees. Headed by Head of Service. Permanent secretaries head ministries. Characteristics: permanence, neutrality, anonymity, impartiality. Recruited on merit. Problems: corruption, inefficiency, overstaffing in Nigeria.",
    keyPoints: ["Civil servants: permanent, professional, neutral", "Political neutrality: serve any government", "Anonymity: minister takes public responsibility", "Federal Civil Service Commission: recruitment and promotion", "Problems in Nigeria: corruption, inefficiency, overstaffing"]
  },
  "Colonial Administration": {
    subject: "Government",
    summary: "British colonised Nigeria using indirect rule (Lugard). Used traditional rulers to govern. Direct rule used in south (no suitable traditional structures). Problems with indirect rule in south: different political structures. Amalgamation 1914: North and South Nigeria joined.",
    keyPoints: ["Indirect rule: using existing traditional rulers", "Frederick Lugard: architect of indirect rule in Nigeria", "Direct rule: British officers govern directly", "Amalgamation 1914: North and South Nigeria merged", "Problems: indirect rule failed in southeastern Nigeria"]
  },
  "Electoral Process": {
    subject: "Government",
    summary: "Elections: choosing leaders through voting. Types: universal suffrage, direct/indirect. Electoral Commission (INEC in Nigeria). Constituency: electoral division. Proportional representation vs first-past-the-post. Problems: rigging, violence, voter apathy in Nigeria.",
    keyPoints: ["INEC: Independent National Electoral Commission", "Universal suffrage: all adults can vote", "Constituency: geographical area for election", "First-past-the-post: most votes wins", "Proportional representation: seats match vote share"]
  },
  "Federalism": {
    subject: "Government",
    summary: "Federalism divides power between central and constituent governments. Features: written constitution, independent judiciary, bicameral legislature, revenue allocation, concurrent and exclusive legislative lists. Nigeria: federal, 36 states + FCT. USA: 50 states.",
    keyPoints: ["Federal: power divided between central and state governments", "Exclusive list: only federal government legislates", "Concurrent list: both federal and state governments", "Residual powers: state governments", "Advantages: unity in diversity, protects minorities"]
  },
  "Government Systems": {
    subject: "Government",
    summary: "Types: democracy (people rule), monarchy (king/queen), republic (elected head), autocracy (absolute ruler), theocracy (religious rule), oligarchy (few rule). Presidential vs parliamentary democracy. Unitary (centralised) vs federal (divided power) systems.",
    keyPoints: ["Democracy: government by the people", "Presidential system: executive separate from legislature", "Parliamentary: executive from legislature (PM)", "Unitary: central government dominant (UK)", "Federal: power divided between levels (Nigeria, USA)"]
  },
  "International Organisations": {
    subject: "Government",
    summary: "UN: maintains world peace, 193 members, Security Council (5 permanent). AU: African Union, replaces OAU. ECOWAS: West African economic community. Commonwealth: UK and former colonies. WTO: world trade. IMF: financial stability. World Bank: development loans.",
    keyPoints: ["UN: United Nations, founded 1945", "Security Council: 5 permanent members with veto", "AU: African Union, replaced OAU in 2002", "ECOWAS: Economic Community of West African States", "IMF: International Monetary Fund, balance of payments support"]
  },
  "Legislature": {
    subject: "Government",
    summary: "Legislature makes laws. Bicameral: two chambers (Senate + House of Reps in Nigeria). Unicameral: one chamber. Functions: law-making, approving budget, oversight of executive, representation, constitutional amendment. Bills become Acts after presidential assent.",
    keyPoints: ["Bicameral: two chambers of legislature", "Senate: upper house, 109 senators in Nigeria", "House of Representatives: 360 members", "Bill: proposed law before it is passed", "Presidential assent: president signs bill into law"]
  },
  "Local Government": {
    subject: "Government",
    summary: "Third tier of government in Nigeria. 774 local government areas. Functions: primary education, primary health care, local roads, markets, birth/death registration. Revenue: federal allocation, local levies. Chairman heads local government. Elected councillors.",
    keyPoints: ["Nigeria has 774 local government areas", "Third tier of government", "Functions: primary education, health, local roads", "Revenue from federation account and local taxes", "Chairman: head of local government executive"]
  },
  "Military Rule in Nigeria": {
    subject: "Government",
    summary: "Nigeria's military coups: 1966 (Ironsi), 1966 (Gowon), 1975 (Murtala), 1976 (Obasanjo), 1983 (Buhari), 1985 (Babangida), 1993 (Abacha), 1998 (Abubakar). Military suspended constitution, ruled by decree. Return to democracy 1999.",
    keyPoints: ["First coup: January 1966, Major Nzeogwu", "Counter coup: July 1966, Gowon", "Murtala Mohammed: assassinated 1976", "Babangida: annulled June 12 1993 election", "Return to democracy: May 29, 1999, Obasanjo"]
  },
  "Nigerian Constitutional History": {
    subject: "Government",
    summary: "Nigerian constitutions: Clifford (1922), Richards (1946), Macpherson (1951), Lyttleton (1954-federalism), Independence (1960), Republic (1963), 1979 (presidential), 1999 (current). 1954 introduced true federalism. 1979 introduced presidential system.",
    keyPoints: ["Clifford 1922: first legislative council with elected members", "Richards 1946: regionalism introduced", "Macpherson 1951: increased Nigerian participation", "Lyttleton 1954: true federal structure", "1999 Constitution: current operating constitution"]
  },
  "Nigerian Federalism": {
    subject: "Government",
    summary: "Nigeria became federal state in 1954 (Lyttleton Constitution). Currently: Federal Government + 36 states + FCT + 774 LGAs. Revenue sharing: federation account shared by formula. Fiscal federalism: revenue allocation between tiers. Derivation principle for oil states.",
    keyPoints: ["Nigeria has 36 states and FCT (Abuja)", "774 local government areas", "Revenue Mobilisation Allocation and Fiscal Commission (RMAFC)", "Derivation: 13% to oil-producing states", "Exclusive, concurrent and residual legislative lists"]
  },
  "Nigerian Foreign Policy": {
    subject: "Government",
    summary: "Nigeria's foreign policy principles: African centrality, non-alignment, respect for sovereignty, peaceful resolution of conflicts, support for oppressed peoples. Institutions: Ministry of Foreign Affairs. ECOWAS leadership. African Union. Nigeria contributes to UN peacekeeping.",
    keyPoints: ["Africa as centrepiece of Nigeria's foreign policy", "Non-alignment: not committed to power blocs", "Respect for sovereignty of other nations", "Support for liberation movements (anti-apartheid)", "ECOMOG: ECOWAS military force led by Nigeria"]
  },
  "Nigerian Nationalism": {
    subject: "Government",
    summary: "Nationalism: movement for self-government and independence. Pioneers: Herbert Macaulay (NNDP 1923), Azikiwe (NCNC), Awolowo (AG), Ahmadu Bello (NPC). Nationalist newspapers, political parties, demonstrations. Independence achieved October 1, 1960.",
    keyPoints: ["Herbert Macaulay: father of Nigerian nationalism", "NNDP: first nationalist political party (1923)", "Nnamdi Azikiwe: prominent nationalist, first president", "Awolowo: led Action Group in western Nigeria", "Independence: October 1, 1960"]
  },
  "Nigerian Traditional Government": {
    subject: "Government",
    summary: "Pre-colonial governments: Emirates (Hausa-Fulani, centralised, Emir rules), Yoruba kingdoms (Oba with council of chiefs), Igbo system (village democracy, council of elders, no single ruler). Different systems required different colonial approaches.",
    keyPoints: ["Hausa-Fulani: centralised emirate system, Emir rules", "Yoruba: Oba (king) with Oyo Mesi council", "Igbo: acephalous, council of elders, no paramount chief", "Benin kingdom: powerful centralised monarchy", "Age grades system in Igbo society"]
  },
  "Political Parties": {
    subject: "Government",
    summary: "Political parties: organisations contesting elections. Functions: political education, recruitment of leaders, linking government and people, forming government. Nigeria's major parties: NPC, NCNC, AG (first republic); NPN, UPN (second); PDP, APC (current). Party system: two-party, multiparty, one-party.",
    keyPoints: ["Political party: organised group seeking political power", "Functions: recruit leaders, educate public, form government", "APC and PDP: major Nigerian parties currently", "Party primaries: internal election to choose candidates", "Proportional representation helps smaller parties"]
  },
  "Literary Appreciation": {
    subject: "Literature",
    summary: "Literary appreciation: analysing and evaluating literature. Elements: plot (sequence of events), character, setting, theme, style, point of view. Figures of speech: metaphor, simile, personification, alliteration. Tone and mood. Symbolism and imagery.",
    keyPoints: ["Plot: sequence of events with conflict and resolution", "Character: protagonist (hero), antagonist (villain)", "Setting: time and place of story", "Theme: central idea or message", "Figures of speech: metaphor, simile, personification"]
  },
  "Literary Principles": {
    subject: "Literature",
    summary: "Literature: creative writing with artistic merit. Forms: prose (novel, short story), poetry, drama. Literary devices: foreshadowing, flashback, irony (verbal, dramatic, situational), allegory, satire. Narrative perspective: first person, third person omniscient/limited.",
    keyPoints: ["Prose: novel, short story, essay", "Poetry: lyric, narrative, dramatic", "Drama: tragedy, comedy, tragicomedy", "Irony: saying/showing opposite of what is meant", "Satire: using humour to criticise"]
  },
  "Nineteen Eighty-Four": {
    subject: "Literature",
    summary: "George Orwell's dystopian novel. Winston Smith rebels against totalitarian Party led by Big Brother. Themes: totalitarianism, surveillance, propaganda, doublethink, Newspeak. Room 101: torture chamber. Thoughtcrime: illegal thinking. Warning against totalitarian government.",
    keyPoints: ["Author: George Orwell (1949)", "Big Brother: symbol of totalitarian control", "Doublethink: holding two contradictory beliefs", "Newspeak: language designed to limit thought", "Themes: freedom, oppression, truth, power"]
  },
  "Poetry": {
    subject: "Literature",
    summary: "Poetry uses language artistically. Elements: rhythm, rhyme, metre, imagery, diction. Forms: sonnet (14 lines), ode, ballad, elegy, lyric, epic. Devices: simile, metaphor, personification, alliteration, onomatopoeia, assonance. Free verse: no fixed rhyme or metre.",
    keyPoints: ["Simile: comparison using 'like' or 'as'", "Metaphor: direct comparison", "Personification: giving human qualities to non-human things", "Alliteration: repeated consonant sounds", "Onomatopoeia: words that sound like what they describe"]
  },
  "Romeo and Juliet": {
    subject: "Literature",
    summary: "Shakespeare's tragedy of young love. Romeo (Montague) and Juliet (Capulet) fall in love despite family feud. Key characters: Mercutio, Tybalt, Friar Lawrence, Nurse. Themes: love, fate, family conflict, youth vs age. Ends in double suicide. Setting: Verona, Italy.",
    keyPoints: ["Author: William Shakespeare", "Setting: Verona, Italy", "Families: Montagues (Romeo) and Capulets (Juliet)", "Friar Lawrence: plans secret marriage", "Theme: love conquers hate, but fate is cruel"]
  },
  "Sons and Daughters": {
    subject: "Literature",
    summary: "J.C. de Graft's play about conflict between traditional values and Western education. Lawyer Ababio wants children to maintain traditional values. Children want modern professions. Themes: generation conflict, tradition vs modernity, parental expectations, identity.",
    keyPoints: ["Author: J.C. de Graft (Ghanaian)", "Main character: Lawyer Ababio and his children", "Conflict: tradition vs Western education", "Themes: generation gap, cultural identity", "Resolution: compromise between old and new values"]
  },
  "The Joys of Motherhood": {
    subject: "Literature",
    summary: "Buchi Emecheta's novel about Nnu Ego, a Nigerian woman whose worth is measured by children. Moves to Lagos, struggles with poverty, cowife. Children become westernised, abandon her. Themes: women's oppression, colonialism's impact, motherhood as burden, identity.",
    keyPoints: ["Author: Buchi Emecheta (Nigerian)", "Protagonist: Nnu Ego", "Setting: Lagos, colonial Nigeria", "Theme: women's identity and suffering", "Irony: children she sacrificed for abandon her"]
  },
  "The Old Man and the Medal": {
    subject: "Literature",
    summary: "Ferdinand Oyono's satirical novel. Meka, a Cameroonian elder, sacrifices for French colonisers (land, sons die in war). Awarded medal as reward. Medal ceremony humiliating. Themes: colonial exploitation, African dignity, hypocrisy of colonialism, disillusionment.",
    keyPoints: ["Author: Ferdinand Oyono (Cameroonian)", "Protagonist: Meka, old Christian convert", "Medal: symbol of colonial manipulation", "Themes: colonialism, betrayal, African dignity", "Meka's disillusionment with colonial system"]
  },
  "International Affairs": {
    subject: "Current Affairs",
    summary: "International affairs covers global political and economic issues. Key organisations: UN, AU, ECOWAS, WTO, IMF, World Bank. Conflicts, diplomacy, trade agreements. Nigeria plays leadership role in Africa. Climate change is global challenge.",
    keyPoints: ["UN: 193 member states, maintains peace", "Security Council: 5 permanent members", "Nigeria: largest economy in Africa", "ECOWAS: 15 West African member states", "Climate change: global challenge requiring cooperation"]
  },
  "Nigerian Government": {
    subject: "Current Affairs",
    summary: "Nigeria operates presidential democracy. Three tiers: federal, state, local government. Three arms: executive (president), legislature (National Assembly), judiciary (Supreme Court). 36 states + FCT. 774 LGAs. Independent electoral commission (INEC).",
    keyPoints: ["Presidential democracy since 1999", "36 states and FCT (Abuja)", "National Assembly: Senate + House of Representatives", "INEC: conducts elections", "Supreme Court: highest court in Nigeria"]
  },
  "UNIBEN History": {
    subject: "Current Affairs",
    summary: "University of Benin founded 1970. Started as Institute of Technology 1970. Full university status 1971. Located in Benin City, Edo State. Known for Medicine, Law, Engineering faculties. Post-UTME exam for admission. Cut-off marks vary by faculty.",
    keyPoints: ["Founded: 1970 as Institute of Technology", "University status: 1971", "Location: Benin City, Edo State", "Known for Medicine, Law, Engineering", "Post-UTME determines admission alongside JAMB"]
  },

  "Nutrition": {
    subject: "Biology",
    summary: "Nutrition provides energy and materials for growth. Autotrophs make their own food via photosynthesis. Heterotrophs consume other organisms. Essential nutrients: carbohydrates (energy), proteins (growth/repair), fats (energy/insulation), vitamins, minerals, water, fibre. Malnutrition causes deficiency diseases.",
    keyPoints: ["Autotrophs: make own food (plants)", "Heterotrophs: consume other organisms", "Carbohydrates: main energy source", "Proteins: growth and repair of tissues", "Vitamins: organic substances needed in small amounts"]
  },
  "Animal Diversity & Evolution": {
    subject: "Biology",
    summary: "Animals classified into vertebrates (backbone) and invertebrates (no backbone). Evolution by natural selection: variation exists, struggle for survival, fittest survive and reproduce. Evidence: fossils, comparative anatomy, embryology. Darwin's theory explains biodiversity.",
    keyPoints: ["Vertebrates: fish, amphibians, reptiles, birds, mammals", "Invertebrates: insects, worms, molluscs", "Natural selection: survival of the fittest", "Fossils: evidence of extinct organisms", "Adaptation: features that help survival"]
  },
  "Circulatory System": {
    subject: "Biology",
    summary: "Blood circulates through heart, arteries, veins, capillaries. Double circulation: pulmonary (heart-lungs-heart) and systemic (heart-body-heart). Heart: 4 chambers (2 atria, 2 ventricles). Arteries carry blood from heart; veins carry to heart. Blood components: plasma, red/white cells, platelets.",
    keyPoints: ["Double circulation in mammals", "Arteries: thick walls, carry blood from heart", "Veins: thin walls, valves, carry blood to heart", "Capillaries: one cell thick, gas exchange", "Red blood cells: carry oxygen via haemoglobin"]
  },
  "Respiration": {
    subject: "Biology",
    summary: "Aerobic respiration: C6H12O6 + 6O2 → 6CO2 + 6H2O + 38ATP. Anaerobic (yeast): glucose → ethanol + CO2 + 2ATP. Anaerobic (muscle): glucose → lactic acid + 2ATP. Mitochondria is site of aerobic respiration. Breathing movements ventilate lungs.",
    keyPoints: ["Aerobic: needs oxygen, produces 38ATP", "Anaerobic: no oxygen, produces 2ATP only", "Yeast: glucose → ethanol + CO2", "Muscle: glucose → lactic acid (fatigue)", "Mitochondria: powerhouse of the cell"]
  },
  "Excretion & Homeostasis": {
    subject: "Biology",
    summary: "Excretion removes metabolic waste. Kidneys: urea in urine. Lungs: CO2 and water vapour. Skin: sweat. Homeostasis maintains internal balance. Kidney regulates water (osmoregulation). ADH controls water reabsorption. Blood glucose regulated by insulin and glucagon from pancreas.",
    keyPoints: ["Kidney: main excretory and osmoregulatory organ", "ADH: antidiuretic hormone, increases water reabsorption", "Insulin: lowers blood glucose (from pancreas)", "Glucagon: raises blood glucose", "Negative feedback: maintains homeostasis"]
  },
  "Nervous System & Coordination": {
    subject: "Biology",
    summary: "Nervous system coordinates responses. CNS: brain and spinal cord. PNS: peripheral nerves. Neurones transmit impulses. Reflex arc bypasses brain for fast response. Hormones: slower but longer lasting than nerve impulses. Auxins coordinate plant responses (tropisms).",
    keyPoints: ["CNS: brain and spinal cord", "Reflex arc: receptor → sensory → relay → motor → effector", "Hormones: slower, longer lasting than nerves", "Auxin: promotes cell elongation in plants", "Phototropism: shoot grows toward light (auxin redistribution)"]
  },
  "Reproduction": {
    subject: "Biology",
    summary: "Asexual: one parent, identical offspring. Sexual: two parents, genetic variation. Asexual methods: binary fission (bacteria), budding (yeast), spores (fungi), vegetative propagation (plants). Human reproductive system. Menstrual cycle. Fertilisation and development.",
    keyPoints: ["Asexual: no variation, rapid, one parent", "Sexual: variation, slower, two parents", "Binary fission: bacteria reproduce asexually", "Budding: yeast, hydra", "Menstrual cycle: approximately 28 days"]
  },
  "Musculoskeletal System": {
    subject: "Biology",
    summary: "Skeleton: support, protection, movement, blood cell production, mineral storage. Joints: ball and socket (hip), hinge (knee), pivot (neck), gliding (wrist). Antagonistic muscles: biceps/triceps. Tendons: muscle to bone. Ligaments: bone to bone.",
    keyPoints: ["Ball and socket: widest movement range (hip, shoulder)", "Hinge joint: one plane movement (knee, elbow)", "Tendons: connect muscle to bone", "Ligaments: connect bone to bone", "Antagonistic muscles work in pairs"]
  },
  "Disease & Health": {
    subject: "Biology",
    summary: "Diseases: infectious (pathogens) or non-infectious. Bacteria cause: cholera, tuberculosis, gonorrhoea. Viruses cause: malaria (no), HIV, measles, polio. Malaria: Plasmodium parasite, Anopheles mosquito vector. Antibiotics kill bacteria, not viruses. Vaccines prevent diseases.",
    keyPoints: ["Malaria: Plasmodium (parasite), Anopheles mosquito (vector)", "HIV: attacks immune system", "Cholera: contaminated water, caused by Vibrio cholerae", "Antibiotics: kill bacteria only", "Vaccines: create immunity without causing disease"]
  },
  "Genetics & Heredity": {
    subject: "Biology",
    summary: "Mendel's laws of inheritance. Dominant allele expressed over recessive. Monohybrid cross F2 ratio: 3:1. Dihybrid F2: 9:3:3:1. Sex determination: XX female, XY male. Sex-linked traits (e.g. haemophilia, colour blindness) on X chromosome. Mutations: changes in DNA.",
    keyPoints: ["Dominant masks recessive allele", "Homozygous: AA or aa; Heterozygous: Aa", "F2 monohybrid ratio: 3 dominant : 1 recessive", "Sex-linked: gene on X chromosome", "Colour blindness and haemophilia: sex-linked, more common in males"]
  },
  "Classification": {
    subject: "Biology",
    summary: "Taxonomy classifies organisms. Binomial nomenclature: Genus species (italic/underlined). Five kingdoms: Monera (bacteria), Protista (amoeba), Fungi, Plantae, Animalia. Kingdom → Phylum → Class → Order → Family → Genus → Species. Dichotomous key for identification.",
    keyPoints: ["Binomial nomenclature: two-part Latin name", "Kingdom is broadest category", "Species is most specific category", "Five kingdoms: Monera, Protista, Fungi, Plantae, Animalia", "Dichotomous key: yes/no questions to identify organism"]
  },
  "Nitrogen Cycle": {
    subject: "Biology",
    summary: "Nitrogen cycles between atmosphere and organisms. Fixation: Rhizobium (in legume root nodules) converts N2 to ammonia. Nitrification: Nitrosomonas (ammonia→nitrites), Nitrobacter (nitrites→nitrates). Plants absorb nitrates. Denitrification: returns N2 to air.",
    keyPoints: ["Rhizobium: fixes atmospheric N2 in root nodules", "Nitrosomonas: converts ammonia to nitrites", "Nitrobacter: converts nitrites to nitrates", "Plants absorb nitrates for protein synthesis", "Denitrifying bacteria return N2 to atmosphere"]
  },
  "Environmental Science": {
    subject: "Biology",
    summary: "Human activities cause pollution. Air: CO (combustion), SO2 (acid rain), NOx, CFCs (ozone depletion). Water: sewage, fertilisers (eutrophication), oil spills. Soil: pesticides, heavy metals. Deforestation: soil erosion, climate change, loss of biodiversity.",
    keyPoints: ["SO2 + H2O → H2SO4 (acid rain)", "Eutrophication: excess nutrients cause algal bloom", "Ozone depletion: CFCs break down ozone", "Deforestation: soil erosion and climate change", "Biological control: use of natural predators"]
  },
  "Sense Organs": {
    subject: "Biology",
    summary: "Eye: cornea (refracts), lens (focuses), retina (rods-dim light, cones-colour), optic nerve. Ear: pinna collects sound, ossicles amplify (malleus, incus, stapes), cochlea converts to impulse. Skin: touch, pain, temperature. Nose: smell. Tongue: taste (sweet-tip, bitter-back, sour-sides, salty-front sides).",
    keyPoints: ["Cornea: first refracts light", "Lens: adjusts focus (accommodation)", "Rods: dim light, no colour; Cones: bright light, colour", "Ossicles: malleus, incus, stapes amplify sound", "Cochlea: converts vibrations to nerve impulse"]
  },
  "Homeostasis": {
    subject: "Biology",
    summary: "Homeostasis: maintaining constant internal environment. Examples: temperature (37°C), blood glucose (80-120mg/100cm³), blood pH (7.35-7.45), water balance. Mechanism: negative feedback detects deviation, corrects it. Hypothalamus: body's thermostat. Pancreas: blood glucose control.",
    keyPoints: ["Normal body temperature: 37°C in humans", "Insulin: lowers blood glucose (beta cells)", "Glucagon: raises blood glucose (alpha cells)", "ADH: kidney tubules reabsorb more water", "Negative feedback: automatic correction mechanism"]
  },
  "Biotechnology": {
    subject: "Biology",
    summary: "Biotechnology uses living organisms for useful products. GMOs: genes inserted to improve organisms. Fermentation: yeast produces alcohol, bacteria produce yoghurt/cheese. Monoclonal antibodies: identical antibodies for diagnosis/treatment. Genetic engineering: cut-and-paste DNA technique.",
    keyPoints: ["Fermentation: yeast converts glucose to alcohol", "Yoghurt: bacteria ferment milk", "Insulin: now made by GM bacteria", "GMO crops: pest-resistant or higher yielding", "Restriction enzymes: cut DNA at specific points"]
  },
  "Metamorphosis": {
    subject: "Biology",
    summary: "Complete metamorphosis (holometabolous): egg→larva→pupa→adult. Examples: butterfly, mosquito, housefly, bee. Incomplete metamorphosis (hemimetabolous): egg→nymph→adult. Examples: grasshopper, cockroach, locust. Nymph resembles small wingless adult.",
    keyPoints: ["Complete: 4 stages - egg, larva, pupa, adult", "Butterfly and mosquito: complete metamorphosis", "Incomplete: 3 stages - egg, nymph, adult", "Grasshopper and cockroach: incomplete", "Nymph: looks like adult but smaller and wingless"]
  },
  "Plant Reproduction": {
    subject: "Biology",
    summary: "Sexual: flowers produce seeds. Pollination: transfer of pollen (wind or insect). Fertilisation: pollen tube grows to ovule, nuclei fuse. Seed dispersal: wind, water, animal, self-dispersal. Asexual: runners (strawberry), tubers (yam), bulbs (onion), rhizomes (ginger), cuttings.",
    keyPoints: ["Pollination: transfer of pollen to stigma", "Wind-pollinated: light pollen, feathery stigma", "Insect-pollinated: coloured petals, nectar, sticky pollen", "Double fertilisation in angiosperms", "Vegetative propagation: runners, tubers, bulbs"]
  },
  "Plant Physiology": {
    subject: "Biology",
    summary: "Photosynthesis: 6CO2 + 6H2O + light → C6H12O6 + 6O2. Occurs in chloroplasts. Factors limiting photosynthesis: light, CO2, temperature. Transpiration: water evaporation from leaves through stomata. Translocation: phloem transports sugars. Tropisms controlled by auxins.",
    keyPoints: ["Photosynthesis: light + CO2 + water → glucose + oxygen", "Chlorophyll: absorbs red and blue light", "Guard cells control stomata opening/closing", "Transpiration increases with temperature, light, wind", "Auxin: promotes cell elongation on shaded side"]
  },
  "Health": {
    subject: "Biology",
    summary: "WHO definition: complete physical, mental and social wellbeing, not just absence of disease. Determinants: nutrition, exercise, sleep, hygiene, environment, healthcare access. Public health: immunisation, clean water, sanitation. Personal hygiene prevents disease spread.",
    keyPoints: ["WHO: health = physical + mental + social wellbeing", "Balanced diet prevents nutritional deficiency", "Regular exercise: heart health, weight management", "Immunisation: prevents infectious diseases", "Safe water and sanitation reduce disease burden"]
  },
  "Cell Division": {
    subject: "Biology",
    summary: "Mitosis: one division → 2 identical diploid cells (growth/repair). Stages: prophase (chromosomes condense), metaphase (align at equator), anaphase (chromatids separate), telophase (new nuclei form). Meiosis: two divisions → 4 haploid cells (gametes). Introduces variation.",
    keyPoints: ["Mitosis: 2 identical daughter cells", "Meiosis: 4 genetically different cells (gametes)", "Prophase: chromosomes become visible", "Metaphase: chromosomes align at cell equator", "Meiosis halves chromosome number (46→23 in humans)"]
  },
  "Excretion": {
    subject: "Biology",
    summary: "Excretion: removal of metabolic waste products. Kidneys: filter blood, produce urine (urea, salts, water). Lungs: excrete CO2 and water vapour. Skin: sweat (water, salts, urea). Liver: produces urea from excess amino acids (deamination). Plants excrete via stomata and lenticels.",
    keyPoints: ["Kidney: main excretory organ, produces urine", "Urea: made in liver from deamination of amino acids", "Lungs: excrete CO2 and water vapour", "Skin: minor excretory organ via sweat", "Deamination: removal of amino group from amino acids"]
  },
  "Fruits": {
    subject: "Biology",
    summary: "Fruit develops from fertilised ovary. True fruit: from ovary only (mango, orange). False fruit: includes receptacle (apple, strawberry). Dispersal mechanisms: wind (light/feathery - dandelion), water (coconut), animals (fleshy fruits, hooks), explosive (peas, rubber). Seed inside fruit.",
    keyPoints: ["True fruit: develops from ovary wall only", "False fruit: includes receptacle (cashew, apple)", "Wind dispersal: light seeds, wings or parachutes", "Animal dispersal: fleshy edible fruits or hooks", "Explosive: pod bursts, scatters seeds (Pterocarpus)"]
  },
  "Parasitology": {
    subject: "Biology",
    summary: "Parasites live on/in host causing harm. Tapeworm: attaches to intestine wall, no digestive system, absorbs digested food, proglottids contain eggs. Roundworm: in intestine. Malaria: Plasmodium falciparum in red blood cells, transmitted by female Anopheles mosquito. Life cycle important.",
    keyPoints: ["Tapeworm: scolex (head) with suckers and hooks", "Tapeworm: no digestive system, absorbs host's food", "Malaria: Plasmodium falciparum (most deadly species)", "Female Anopheles: only the vector for malaria", "Liver fluke: affects cattle and sheep"]
  },
  "Plant Anatomy": {
    subject: "Biology",
    summary: "Root: absorption, anchorage. Root hair cells: increase surface area. Stem: support, transport. Leaf: photosynthesis. Xylem: dead cells, thick walls, transports water upward. Phloem: living cells, transports sugars. Cambium: meristematic tissue between xylem and phloem.",
    keyPoints: ["Root hairs: increase surface area for absorption", "Xylem: dead cells, transports water upward", "Phloem: living cells, transports sugars both ways", "Stomata: pores in leaf for gas exchange", "Cambium: produces new xylem and phloem"]
  },
  "Digestion": {
    subject: "Biology",
    summary: "Digestion breaks down food chemically and physically. Mouth: amylase (starch→maltose). Stomach: pepsin/HCl (proteins). Small intestine: lipase (fats), trypsin (proteins), maltase. Bile (liver) emulsifies fats. Absorption in small intestine (ileum). Large intestine: water reabsorption.",
    keyPoints: ["Salivary amylase: starch → maltose (mouth)", "HCl: kills bacteria, activates pepsin (stomach)", "Bile: emulsifies fats (not an enzyme)", "Trypsin: digests proteins in small intestine", "Ileum: main site of nutrient absorption"]
  },
  "Fish Biology": {
    subject: "Biology",
    summary: "Fish: cold-blooded (ectothermic) aquatic vertebrates. Gills for gas exchange in water. Lateral line: detects pressure/vibrations. Swim bladder: buoyancy control. Fins for locomotion. Cartilaginous fish (sharks, rays): no swim bladder, must swim. Bony fish: most common.",
    keyPoints: ["Ectothermic: body temperature matches environment", "Gills: gas exchange underwater", "Lateral line: detects water pressure changes", "Swim bladder: controls buoyancy in bony fish", "Sharks: cartilaginous skeleton, no swim bladder"]
  },
  "Germination": {
    subject: "Biology",
    summary: "Germination: seed sprouts into seedling. Conditions: water (activates enzymes), oxygen (aerobic respiration), warmth (enzyme activity). Light not needed. Epigeal: cotyledons above ground (bean, pumpkin). Hypogeal: cotyledons remain below ground (maize, groundnut).",
    keyPoints: ["Water: needed to activate dormant enzymes", "Oxygen: for aerobic respiration during germination", "Temperature: affects enzyme activity", "Epigeal: cotyledons emerge above soil (bean)", "Hypogeal: cotyledons stay below soil (maize)"]
  },
  "Mammals": {
    subject: "Biology",
    summary: "Mammals: warm-blooded (homoiothermic) vertebrates. Characteristics: hair/fur, mammary glands, live birth (mostly), four-chambered heart, diaphragm. Subclasses: monotremes (egg-laying - platypus), marsupials (pouch - kangaroo), placental (most mammals). Largest class.",
    keyPoints: ["Warm-blooded: constant body temperature", "Mammary glands: feed young with milk", "Hair/fur: insulation and protection", "Four-chambered heart: complete separation of blood", "Placental mammals: young develop in uterus"]
  },
  "Birds": {
    subject: "Biology",
    summary: "Birds: warm-blooded vertebrates with feathers. Adaptations for flight: hollow bones, streamlined body, forelimbs as wings, keeled sternum (for flight muscles), no teeth, one ovary. Four-chambered heart. All birds lay eggs. Descended from reptiles.",
    keyPoints: ["Warm-blooded (homoiothermic)", "Hollow bones reduce weight for flight", "Forelimbs modified as wings", "Keeled sternum: attachment for flight muscles", "All birds are oviparous (lay eggs)"]
  },
  "Biochemistry": {
    subject: "Biology",
    summary: "Biochemistry studies chemicals in living organisms. Carbohydrates: CnH2nOn, energy source (glucose, starch, glycogen). Proteins: amino acids, enzymes/structure. Lipids: fats and oils, energy/insulation. Nucleic acids: DNA (double helix, deoxyribose) and RNA. Enzymes: protein catalysts.",
    keyPoints: ["Carbohydrates: CHO in 1:2:1 ratio", "Glucose: C6H12O6, primary energy source", "Proteins: polymers of amino acids", "Enzymes: biological catalysts, specific, reusable", "DNA: double helix, contains genetic code"]
  },
  "Plant Excretion": {
    subject: "Biology",
    summary: "Plants excrete metabolic waste products. Through stomata: CO2 (night, during respiration), O2 (day, during photosynthesis), water vapour. Through lenticels in stems. Some plants store waste: tannins (bark/leaves), latex (rubber tree), resins, gums, alkaloids (stored in cells).",
    keyPoints: ["Stomata: main route for gaseous excretion", "CO2: excreted during respiration", "O2: excreted during photosynthesis", "Tannins stored in bark and leaves", "Latex: milky fluid from rubber trees"]
  },
  "Carbon Cycle": {
    subject: "Biology",
    summary: "Carbon cycles continuously. Photosynthesis removes CO2 from atmosphere. Respiration (all organisms) releases CO2. Decomposition releases CO2. Combustion of fossil fuels and wood adds CO2. Carbon stored in limestone, fossil fuels, living organisms. Human activities increasing atmospheric CO2 causing global warming.",
    keyPoints: ["Photosynthesis: removes CO2 from air", "Respiration: releases CO2 to air", "Decomposition: dead matter releases CO2", "Combustion: burning fuels releases stored carbon", "Increasing CO2: greenhouse effect, global warming"]
  },
  "Plant Kingdom": {
    subject: "Biology",
    summary: "Plant classification: Algae (no true tissues), Bryophytes (mosses - non-vascular, need water to reproduce), Pteridophytes (ferns - vascular, spores), Gymnosperms (naked seeds, no fruit - conifers, cycads), Angiosperms (seeds in fruit, flowering plants - most advanced).",
    keyPoints: ["Algae: simplest, no roots/stems/leaves", "Mosses/Liverworts: non-vascular, need water for reproduction", "Ferns: vascular, reproduce by spores", "Gymnosperms: seeds not enclosed (pine, cycad)", "Angiosperms: seeds in fruit, most complex plants"]
  },
  "Osmosis": {
    subject: "Biology",
    summary: "Osmosis: movement of water molecules through semi-permeable membrane from region of low solute concentration to high. Turgid: cell full of water (plant cells - firm). Flaccid: plant cell limp from water loss. Plasmolysis: protoplasm pulls away from wall. Haemolysis: RBC bursts in water.",
    keyPoints: ["Osmosis: water moves from dilute to concentrated solution", "Semi-permeable membrane: allows water, not solute", "Turgid: plant cell firm with water", "Plasmolysis: cell shrinks in hypertonic solution", "Haemolysis: red blood cell bursts in hypotonic solution"]
  },
  "Plant Nutrition": {
    subject: "Biology",
    summary: "Plants need mineral salts from soil. Nitrogen (N): protein/chlorophyll synthesis - deficiency causes yellowing. Phosphorus (P): ATP/DNA - poor root growth if deficient. Potassium (K): enzyme activation - weak stems. Magnesium (Mg): chlorophyll - yellowing between veins. Iron: enzyme cofactor.",
    keyPoints: ["Nitrogen: needed for protein and chlorophyll", "Nitrogen deficiency: yellowing of older leaves", "Magnesium: central atom in chlorophyll molecule", "Phosphorus: ATP synthesis and root development", "Calcium: cell wall formation"]
  },
  "Soil Science": {
    subject: "Biology",
    summary: "Soil types: sandy (large particles, good drainage, poor nutrients), clay (small particles, waterlogged, poor aeration), loam (best mixture of sand + silt + clay). Soil profile: topsoil (humus, organisms), subsoil (minerals), bedrock. Earthworms improve soil fertility and aeration.",
    keyPoints: ["Sandy: drains fast, poor water retention", "Clay: waterlogged, poor drainage and aeration", "Loam: best for agriculture (mix of sand, silt, clay)", "Humus: decomposed organic matter, improves fertility", "Earthworms: improve aeration and mix soil layers"]
  },
  "Plant Tissues": {
    subject: "Biology",
    summary: "Meristematic tissue: dividing cells, in growing regions (shoot/root tips). Permanent tissues: non-dividing. Parenchyma: storage/photosynthesis (large, thin walls). Collenchyma: flexible support (corners thickened). Sclerenchyma: rigid support (dead, thick walls). Xylem and phloem: vascular tissues.",
    keyPoints: ["Meristem: dividing cells at growing tips", "Parenchyma: storage, thin walls, most common", "Collenchyma: flexible support in young stems", "Sclerenchyma: dead cells, very thick walls", "Xylem: dead cells, water transport; Phloem: living, sugar transport"]
  },
  "Nervous System": {
    subject: "Biology",
    summary: "CNS: brain (cerebrum-thinking, cerebellum-balance, medulla-involuntary) and spinal cord. Neuron: cell body + dendrites + axon. Synapse: gap between neurons, chemical transmission. Reflex action: fast automatic response. Reflex arc: receptor→sensory→relay→motor→effector.",
    keyPoints: ["Cerebrum: conscious thought and memory", "Cerebellum: balance and coordination", "Medulla oblongata: breathing, heartbeat", "Synapse: chemical transmission between neurons", "Reflex: automatic response, does not involve brain"]
  },
  "Food Tests": {
    subject: "Biology",
    summary: "Biochemical food tests identify nutrients. Starch: iodine solution → blue-black. Reducing sugar: Benedict's solution + heat → brick red precipitate. Protein: Biuret reagent → purple/violet. Fat: Sudan III → red layer OR ethanol emulsion test → milky white. Vitamin C: DCPIP → decolourises.",
    keyPoints: ["Starch + iodine solution → blue-black colour", "Reducing sugar + Benedict's + heat → brick red", "Protein + Biuret reagent → purple/violet", "Fat + Sudan III → red layer", "Grease spot test: fat leaves translucent spot"]
  },
  "Algae": {
    subject: "Biology",
    summary: "Algae are photosynthetic protists or simple plants. Types: green (Spirogyra, Chlamydomonas), brown (Sargassum), red. Spirogyra: filamentous, spiral chloroplasts, reproduces by conjugation. Chlamydomonas: unicellular, flagella, eyespot. Euglena: both plant-like (chloroplasts) and animal-like (no cell wall). Important in aquatic food chains.",
    keyPoints: ["Spirogyra: filamentous, spiral chloroplasts", "Conjugation: sexual reproduction in Spirogyra", "Chlamydomonas: unicellular, two flagella", "Euglena: plant AND animal characteristics", "Algae: base of aquatic food chains"]
  },
  "Thermoregulation": {
    subject: "Biology",
    summary: "Warm-blooded animals regulate body temperature. Too hot: vasodilation (blood vessels widen), sweating, panting. Too cold: vasoconstriction, shivering (generates heat), piloerection (hair stands up), reduced blood to skin. Hypothalamus: body's thermostat in mammals.",
    keyPoints: ["Hypothalamus: detects and controls body temperature", "Vasodilation: more blood to skin, loses heat", "Vasoconstriction: less blood to skin, conserves heat", "Sweating: evaporation cools the body", "Shivering: rapid muscle contractions generate heat"]
  },
  "Chemical Energetics": {
    subject: "Chemistry",
    summary: "Enthalpy change (ΔH): heat content change. Exothermic: heat released, ΔH negative (combustion, neutralisation). Endothermic: heat absorbed, ΔH positive (photosynthesis, dissolving ammonium nitrate). Activation energy: minimum energy to start reaction. Bond energy calculations.",
    keyPoints: ["Exothermic: ΔH negative, heat released", "Endothermic: ΔH positive, heat absorbed", "Activation energy: energy barrier to reaction", "Catalyst: lowers activation energy", "Bond breaking: endothermic; bond forming: exothermic"]
  },
  "Chemical Reactions": {
    subject: "Chemistry",
    summary: "Types: synthesis (A+B→AB), decomposition (AB→A+B), single displacement (A+BC→AC+B), double displacement (AB+CD→AD+CB), redox (electron transfer), acid-base (neutralisation). Rate affected by: concentration, temperature, surface area, catalyst, pressure (gases).",
    keyPoints: ["Synthesis: two substances combine", "Decomposition: one substance breaks apart", "Displacement: more reactive element displaces less reactive", "Factors affecting rate: concentration, temperature, surface area", "Catalyst: speeds reaction, not consumed"]
  },
  "Solutions & Mixtures": {
    subject: "Chemistry",
    summary: "Solution: homogeneous mixture (solute in solvent). Solubility: mass dissolving in 100g solvent at temperature. Saturated: maximum dissolved. Unsaturated: more can dissolve. Supersaturated: unstable, more than normal. Concentration: mol/dm³ or g/dm³. Solubility of most solids increases with temperature.",
    keyPoints: ["Solubility: mass of solute in 100g solvent", "Saturated: no more solute dissolves", "Solubility of solids: increases with temperature", "Solubility of gases: decreases with temperature", "Concentration (molarity) = moles ÷ volume in dm³"]
  },
  "Periodic Table & Elements": {
    subject: "Chemistry",
    summary: "Elements arranged by increasing atomic number. Groups: vertical columns, same valence electrons, similar properties. Periods: horizontal rows. Group 1 (alkali metals): most reactive metals. Group 7 (halogens): most reactive non-metals. Group 0 (noble gases): full shells, very unreactive.",
    keyPoints: ["Atomic number increases across periods", "Elements in same group have similar properties", "Reactivity of metals increases down Group 1", "Reactivity of halogens decreases down Group 7", "Noble gases: full outer shells, inert"]
  },
  "Nuclear Chemistry": {
    subject: "Chemistry",
    summary: "Radioactivity: spontaneous emission from unstable nuclei. Alpha (α): ⁴₂He, least penetrating, stopped by paper. Beta (β): ⁰₋₁e, stopped by aluminium. Gamma (γ): electromagnetic, stopped by thick lead. Half-life: time for half atoms to decay. Nuclear equations must balance mass and charge numbers.",
    keyPoints: ["Alpha: 2 protons + 2 neutrons emitted", "Beta: neutron → proton + electron (emitted)", "Gamma: electromagnetic radiation, no mass/charge", "Half-life: constant for each radioactive isotope", "Nuclear fission: splitting uranium-235"]
  },
  "Alloys & Metals": {
    subject: "Chemistry",
    summary: "Metals: malleable, ductile, lustrous, good conductors. Reactivity series: K>Na>Ca>Mg>Al>Zn>Fe>Pb>H>Cu>Ag>Au. Alloys are mixtures of metals. Bronze (Cu+Sn), Brass (Cu+Zn), Steel (Fe+C). Corrosion: oxidation of metals. Rusting: iron + water + oxygen → hydrated iron(III) oxide.",
    keyPoints: ["Reactivity series: K, Na, Ca, Mg, Al, Zn, Fe, Pb, H, Cu, Ag, Au", "More reactive metal displaces less reactive from solution", "Rusting: requires both water AND oxygen", "Alloys harder/stronger than pure metals", "Galvanising: coating iron with zinc to prevent rust"]
  },
  "Physical & Chemical Changes": {
    subject: "Chemistry",
    summary: "Physical change: no new substance formed, reversible (melting, boiling, dissolving). Chemical change: new substance, usually irreversible (burning, rusting, neutralisation). Signs of chemical change: colour change, gas produced, precipitate formed, heat/light produced, smell change.",
    keyPoints: ["Physical: no new substance, reversible", "Chemical: new substance, usually irreversible", "Burning: always a chemical change", "Dissolving: usually physical (reversible by evaporation)", "Electrolysis: chemical change (new substances at electrodes"]
  },
  "Stoichiometry": {
    subject: "Chemistry",
    summary: "Stoichiometry: calculating quantities in reactions. Use balanced equation for mole ratios. Moles = mass/Mr. At STP: 1 mole gas = 22.4 dm³. Limiting reagent: runs out first, limits product. Percentage yield = (actual/theoretical) × 100. Empirical formula: simplest whole number ratio.",
    keyPoints: ["Balance equation first", "Mole ratio from balanced equation", "Limiting reagent: controls amount of product", "% yield = actual/theoretical × 100", "Empirical formula from % composition or combustion data"]
  },
  "Carbon & Its Compounds": {
    subject: "Chemistry",
    summary: "Carbon allotropes: diamond (tetrahedral, hardest, insulator), graphite (layers, conductor, lubricant), fullerene (C60). Organic compounds: hydrocarbons (alkanes CnH2n+2, alkenes CnH2n). Functional groups: -OH (alcohol), -COOH (acid), -NH2 (amine). Petroleum: mixture of hydrocarbons.",
    keyPoints: ["Diamond: tetrahedral, hardest, insulator", "Graphite: hexagonal layers, conducts electricity", "Alkanes: saturated, substitution reactions with Cl2", "Alkenes: unsaturated, addition reactions with Br2", "Test for unsaturation: decolourises bromine water"]
  },
  "Metals": {
    subject: "Chemistry",
    summary: "Properties: high melting points, malleable, ductile, conduct electricity and heat, lustrous. Extraction: electrolysis (reactive metals), reduction by carbon (moderate), found native (unreactive). Sodium: extracted by Down's process. Aluminium: by electrolysis of alumina in molten cryolite.",
    keyPoints: ["Reactive metals (K,Na,Ca,Mg,Al): extracted by electrolysis", "Moderate metals (Zn,Fe,Pb): reduced by carbon/coke", "Unreactive metals (Cu,Ag,Au): found native or easily reduced", "Blast furnace: iron extraction using coke", "Thermite reaction: Al reduces Fe2O3"]
  },
  "Volumetric Analysis": {
    subject: "Chemistry",
    summary: "Titration: measures volume to react with known solution. Acid-base: CAVA/CBVB = nA/nB. Indicator: phenolphthalein (acid-colourless, alkali-pink), methyl orange (acid-red, alkali-yellow). Primary standard: stable, pure, high Mr. Burette for measuring volume added.",
    keyPoints: ["Burette: measures exact volume dispensed", "Pipette: measures exact fixed volume", "CAVA/CBVB = nA/nB for titration calculations", "Phenolphthalein: colourless in acid, pink in alkali", "End point: indicator changes colour permanently"]
  },
  "Redox Chemistry": {
    subject: "Chemistry",
    summary: "Oxidation: loss of electrons, gain of oxygen, increase in oxidation state. Reduction: gain of electrons, loss of oxygen, decrease in oxidation state. OIL RIG. Oxidising agent: accepts electrons (gets reduced). Reducing agent: donates electrons (gets oxidised). Balance using half-equations.",
    keyPoints: ["OIL RIG: Oxidation Is Loss, Reduction Is Gain", "Oxidising agent: accepts electrons, gets reduced", "Reducing agent: donates electrons, gets oxidised", "Oxidation state of O = -2 (usually)", "Oxidation state of H = +1 (usually)"]
  },
  "Industrial Chemistry": {
    subject: "Chemistry",
    summary: "Haber process: N2 + 3H2 ⇌ 2NH3 (450°C, 200atm, iron catalyst). Contact process for H2SO4: S→SO2→SO3→H2SO4 (V2O5 catalyst, 450°C). Solvay process: Na2CO3 from NaCl. Brine electrolysis → NaOH + Cl2 + H2. Fractional distillation of petroleum.",
    keyPoints: ["Haber: iron catalyst, 450°C, 200atm for ammonia", "Contact: V2O5 catalyst, 450°C for SO3", "SO3 absorbed in H2SO4 to form oleum", "Solvay: makes sodium carbonate (washing soda)", "Brine electrolysis: Cl2 (anode), H2 (cathode), NaOH (solution)"]
  },
  "Chemistry of Non-metals": {
    subject: "Chemistry",
    summary: "Non-metals: poor conductors (except graphite), brittle. Halogens: Group 7, diatomic, reactivity decreases down group (F>Cl>Br>I). Sulphur: burns blue to form SO2. Nitrogen: 78% of air, used in fertilisers (Haber). Phosphorus: white (reactive/poisonous) and red (less reactive) allotropes.",
    keyPoints: ["Fluorine: most reactive element", "Chlorine: yellow-green gas, bleach, water purification", "Sulphur: burns with blue flame → SO2", "Nitrogen: 78% of air, very unreactive", "Phosphorus: white (spontaneously flammable), red (stable)"]
  },
  "Gas Laws": {
    subject: "Chemistry",
    summary: "Boyle's: P1V1 = P2V2 (constant T). Charles': V1/T1 = V2/T2 (constant P, T in Kelvin). Gay-Lussac's: P1/T1 = P2/T2 (constant V). Combined: P1V1/T1 = P2V2/T2. Ideal gas: PV = nRT. At STP: T=273K, P=1atm, 1 mole gas = 22.4dm³.",
    keyPoints: ["Boyle's: pressure inversely proportional to volume", "Charles': volume directly proportional to temperature (Kelvin)", "STP: 273K (0°C) and 1 atm pressure", "1 mole gas at STP = 22.4 dm³", "PV = nRT for ideal gas calculations"]
  },
  "Analytical Chemistry": {
    subject: "Chemistry",
    summary: "Qualitative analysis identifies substances. Flame tests: Li-red, Na-yellow, K-lilac/violet, Ca-brick red, Ba-apple green, Cu-blue-green. Anion tests: CO3²⁻ (CO2 with acid), Cl⁻ (white ppt AgNO3), SO4²⁻ (white ppt BaCl2), NO3⁻ (brown ring test).",
    keyPoints: ["Sodium: yellow/orange flame", "Potassium: lilac/violet flame", "Calcium: brick red flame", "Copper: blue-green flame", "Chloride: white precipitate with AgNO3 (soluble in NH3)"]
  },
  "Atomic Structure": {
    subject: "Chemistry",
    summary: "Atom: protons (+, in nucleus), neutrons (neutral, in nucleus), electrons (-, shells). Atomic number = protons. Mass number = protons + neutrons. Isotopes: same protons, different neutrons. Electron configuration: shells 2,8,8,18. Valence electrons determine chemical properties.",
    keyPoints: ["Atomic number = protons (identifies element)", "Mass number = protons + neutrons", "Isotopes: same element, different mass numbers", "Electronic configuration: 2,8,8... from inside out", "Valence electrons = Group number (for main groups)"]
  },
  "Acid-Base Chemistry": {
    subject: "Chemistry",
    summary: "Arrhenius: acids produce H+, bases produce OH-. Bronsted-Lowry: acid donates H+, base accepts H+. Strong acids fully dissociate (HCl, H2SO4, HNO3). Weak: partial dissociation (CH3COOH). pH = -log[H+]. Neutralisation: acid + base → salt + water. Buffer resists pH change.",
    keyPoints: ["Strong acid: completely dissociates in water", "Weak acid: partially dissociates", "pH = -log[H+]; pH 7 = neutral", "Neutralisation: acid + base → salt + water", "Indicator changes colour at specific pH"]
  },
  "Physical Changes": {
    subject: "Chemistry",
    summary: "Physical changes: no new chemical substance formed. State changes: melting (solid→liquid), boiling (liquid→gas), condensation (gas→liquid), freezing (liquid→solid), sublimation (solid→gas). All reversible. Dissolving is usually physical. No change in chemical formula.",
    keyPoints: ["No new substance formed in physical change", "State changes are physical changes", "Sublimation: solid→gas (iodine, dry ice, ammonium chloride)", "Dissolving: reversible physical change", "No change in chemical bonds or composition"]
  },
  "Halogens": {
    subject: "Chemistry",
    summary: "Group 7: F, Cl, Br, I, At. Diatomic molecules. Reactivity decreases down group: F2 most reactive, I2 least. Cl2: yellow-green gas, bleaching, water purification. Displacement: Cl2 displaces Br- and I-; Br2 displaces I- only. Halide ions: F-, Cl-, Br-, I-.",
    keyPoints: ["Fluorine: most reactive non-metal", "All halogens are diatomic molecules", "More reactive halogen displaces less reactive from solution", "Cl2 + 2KBr → 2KCl + Br2", "Halide identification: AgNO3 solution (Cl-white, Br-cream, I-yellow ppt)"]
  },
  "Colloids": {
    subject: "Chemistry",
    summary: "Colloids: dispersed particles (1-1000nm) in medium. Types: sol (solid/liquid), emulsion (liquid/liquid), foam (gas/liquid), aerosol (liquid/gas). Tyndall effect: scattering of light. Brownian motion: random movement. Stable due to electrostatic repulsion. Can be coagulated by heat or electrolyte.",
    keyPoints: ["Colloid particle size: 1-1000 nm", "Tyndall effect: beam visible in colloid, not solution", "Sol: solid dispersed in liquid (paint, starch)", "Emulsion: liquid in liquid (milk, mayonnaise)", "Coagulation: adding electrolyte destabilises colloid"]
  },
  "Chemical Bonding": {
    subject: "Chemistry",
    summary: "Ionic: electron transfer, usually metal+non-metal, high MP, conducts when molten. Covalent: electron sharing, usually non-metal+non-metal, lower MP, poor conductor. Dative/coordinate: both electrons from one atom (NH4+, H3O+). Metallic: sea of delocalised electrons.",
    keyPoints: ["Ionic: electron transfer forms ions", "Covalent: electrons shared between atoms", "Ionic compounds: conduct electricity when molten or dissolved", "Covalent compounds: mostly poor conductors", "Metallic bonding: explains conductivity and malleability"]
  },
  "Mole Concept": {
    subject: "Chemistry",
    summary: "Mole: 6.02×10²³ particles (Avogadro's number). Molar mass: mass of one mole in grams. Moles = mass/Mr. At STP: moles of gas = volume/22.4. Concentration (mol/dm³) = moles/volume. Empirical formula: simplest ratio. Molecular formula: actual number of atoms.",
    keyPoints: ["1 mole = 6.02×10²³ particles (Avogadro)", "Moles = mass ÷ molar mass", "At STP: 1 mole gas = 22.4 dm³", "Molarity = moles ÷ volume (dm³)", "Empirical formula: simplest whole number ratio"]
  },
  "States of Matter": {
    subject: "Chemistry",
    summary: "Solid: fixed shape/volume, particles vibrate in fixed positions, strong forces. Liquid: fixed volume, takes shape of container, particles move freely. Gas: no fixed shape/volume, particles move randomly at high speed, weak/no forces. Kinetic theory explains properties. Changes of state involve energy.",
    keyPoints: ["Solid: fixed shape, particles vibrate", "Liquid: fixed volume, particles flow", "Gas: no fixed volume, fills container", "Melting: solid→liquid, latent heat of fusion", "Boiling: liquid→gas, latent heat of vaporisation"]
  },
  "Chemical Laws": {
    subject: "Chemistry",
    summary: "Law of Conservation of Mass: total mass unchanged in reaction. Law of Definite Proportions: compound always same composition by mass. Law of Multiple Proportions: elements combine in simple ratios. Gay-Lussac's Law of Combining Volumes: gases react in simple volume ratios.",
    keyPoints: ["Conservation of mass: matter not created or destroyed", "Definite proportions: H2O always 2:1 hydrogen:oxygen", "Multiple proportions: CO and CO2 show 1:2 oxygen ratio", "Avogadro's hypothesis: equal volumes, equal molecules (same T,P)", "Gay-Lussac: 2H2 + O2 → 2H2O (2:1:2 volume ratio)"]
  },
  "Optics": {
    subject: "Physics",
    summary: "Reflection: angle of incidence = angle of reflection. Refraction: light bends at boundary, n = sin i/sin r (Snell's law). Critical angle: total internal reflection when i > critical angle. Convex lens: converging, real image (usually). Concave: diverging. Lens formula: 1/f = 1/v + 1/u.",
    keyPoints: ["Reflection: i = r (angles measured from normal)", "Snell's law: n1 sin θ1 = n2 sin θ2", "Total internal reflection: when angle > critical angle", "Convex lens: converges light, used in magnifying glass", "1/f = 1/v + 1/u (lens formula)"]
  },
  "Sound & Waves": {
    subject: "Physics",
    summary: "Sound: longitudinal mechanical wave, needs medium. Speed in air ≈ 330 m/s. Higher speed in solids > liquids > gases. Frequency = pitch, amplitude = loudness. Echo = reflected sound. Resonance: forced vibration at natural frequency. Ultrasound > 20kHz (medical imaging, sonar).",
    keyPoints: ["Sound: longitudinal, needs medium to travel", "Cannot travel in vacuum", "Speed: solids > liquids > gases", "Frequency determines pitch; amplitude determines loudness", "Ultrasound: frequency above 20,000 Hz"]
  },
  "Properties of Matter": {
    subject: "Physics",
    summary: "Matter has mass and volume. Density = mass/volume. Pressure = force/area. Pressure in fluid = hρg. Surface tension: liquid acts as elastic skin. Viscosity: resistance to flow. Archimedes' principle: upthrust = weight of fluid displaced. Capillarity: liquid rises in narrow tubes.",
    keyPoints: ["Density = mass ÷ volume (kg/m³)", "Pressure = force ÷ area (Pa or N/m²)", "Liquid pressure = hρg", "Archimedes: upthrust = weight of fluid displaced", "Capillarity: water rises, mercury falls in glass tubes"]
  },
  "Heat & Thermodynamics": {
    subject: "Physics",
    summary: "Heat: energy transferred due to temperature difference. Transfer: conduction (collisions in solids), convection (fluid movement), radiation (electromagnetic). Specific heat capacity Q = mcΔT. Latent heat: energy for state change. Thermodynamics: laws of heat and work conversion.",
    keyPoints: ["Conduction: particle vibration, best in metals", "Convection: movement of fluid particles", "Radiation: electromagnetic waves, no medium needed", "Q = mcΔT (heat = mass × SHC × temp change)", "Latent heat: energy for state change, no temp change"]
  },
  "Wave Properties": {
    subject: "Physics",
    summary: "All waves: reflection, refraction, diffraction, interference. Diffraction: spreading through gaps (significant when gap ≈ wavelength). Interference: superposition (constructive: in phase, destructive: out of phase). Polarisation: transverse waves only. Doppler effect: frequency change due to relative motion.",
    keyPoints: ["Diffraction: maximum when gap ≈ wavelength", "Constructive interference: waves in phase, amplitude adds", "Destructive interference: waves out of phase, cancel", "Polarisation: only transverse waves can be polarised", "Doppler: source approaching = higher frequency observed"]
  },
  "Nuclear Physics": {
    subject: "Physics",
    summary: "Nuclear fission: heavy nucleus splits into lighter nuclei + energy (U-235 in reactors). Fusion: light nuclei combine to form heavier + energy (sun's energy). Half-life: constant time for activity to halve. Radiation: alpha (α), beta (β), gamma (γ). Einstein: E = mc².",
    keyPoints: ["Fission: heavy nucleus splits, used in nuclear reactors", "Fusion: light nuclei combine, powers the sun", "Half-life: time for half the atoms to decay", "E = mc²: mass-energy equivalence", "Chain reaction: each fission triggers more fissions"]
  },
  "Waves": {
    subject: "Physics",
    summary: "Wave: energy transfer without matter transfer. Transverse: vibration perpendicular to direction (light, water waves). Longitudinal: vibration parallel (sound). v = fλ. Electromagnetic spectrum (longest to shortest wavelength): radio, microwave, IR, visible, UV, X-rays, gamma rays. All EM waves travel at 3×10⁸ m/s in vacuum.",
    keyPoints: ["Transverse: vibration ⊥ to direction of travel", "Longitudinal: vibration ∥ to direction of travel", "Wave equation: v = fλ", "EM waves: 3×10⁸ m/s in vacuum", "EM spectrum: radio → micro → IR → visible → UV → X → gamma"]
  },
  "Electricity": {
    subject: "Physics",
    summary: "Ohm's Law: V = IR. Series circuit: same current, voltages add, resistances add. Parallel: same voltage, currents add, 1/R = 1/R1 + 1/R2. Power P = IV = I²R = V²/R. Energy = Power × time. Domestic electricity: 240V AC in Nigeria. Fuse protects against overload.",
    keyPoints: ["Ohm's Law: V = IR", "Series: Rtotal = R1 + R2 + ...", "Parallel: 1/Rtotal = 1/R1 + 1/R2", "Power = IV = I²R = V²/R", "Kilowatt-hour (kWh): unit of electrical energy"]
  },
  "Thermal Properties": {
    subject: "Physics",
    summary: "Linear expansivity (α): ΔL = LαΔT. Cubical (volume) expansivity = 3α. Anomalous expansion: water contracts when heated from 0-4°C, maximum density at 4°C (why lakes freeze from top). Thermostat uses bimetallic strip. Thermometers use thermometric properties.",
    keyPoints: ["Linear expansion: ΔL = LαΔT", "Volume (cubic) expansivity = 3 × linear expansivity", "Water: maximum density at 4°C", "Bimetallic strip: two metals with different expansivities", "Thermostat: bimetallic strip breaks circuit when hot"]
  },
  "Atomic Physics": {
    subject: "Physics",
    summary: "Photoelectric effect: light ejects electrons from metal surface. E = hf (h = Planck's constant). Cathode rays: streams of electrons. X-rays produced when fast electrons hit metal target. Bohr's model: electrons in fixed energy shells, emit/absorb photons when changing shells.",
    keyPoints: ["Photoelectric effect: photon energy must exceed work function", "E = hf (energy = Planck's constant × frequency)", "Cathode rays: electrons, bent by magnetic/electric fields", "X-rays: short wavelength, high frequency EM radiation", "Bohr: electrons emit photons when dropping to lower shell"]
  },
  "Thermometry": {
    subject: "Physics",
    summary: "Temperature scales: Celsius (°C), Kelvin (K), Fahrenheit (°F). K = °C + 273. Thermometric properties: expansion of liquid (mercury), change in resistance (thermistor), thermoelectric EMF (thermocouple). Clinical thermometer: 35-43°C, constriction prevents mercury falling. Absolute zero: 0K = -273°C.",
    keyPoints: ["K = °C + 273; Absolute zero = 0K = -273°C", "Mercury thermometer: range -39 to 357°C", "Clinical thermometer: has constriction to keep reading", "Thermocouple: measures very high or low temperatures", "Resistance thermometer: uses change in resistance"]
  },
  "Matrices & Determinants": {
    subject: "Mathematics",
    summary: "Matrix: rectangular array. Addition/subtraction: same order only. Multiplication: rows × columns, order matters. Determinant of 2×2: |A| = ad - bc. Inverse: A⁻¹ = (1/|A|)×adj(A). Singular matrix: determinant = 0, no inverse. Used to solve simultaneous equations.",
    keyPoints: ["Matrix order: rows × columns", "Multiplication: (m×n) × (n×p) = (m×p)", "Determinant 2×2: ad - bc", "Singular: determinant = 0 (no inverse)", "A⁻¹ × A = I (identity matrix)"]
  },
  "Sets": {
    subject: "Mathematics",
    summary: "Set: well-defined collection. Union (A∪B): all elements. Intersection (A∩B): common elements. Complement (A'): not in A. Subset: all elements of A in B. Empty set: ∅. Universal set: all elements under consideration. n(A∪B) = n(A) + n(B) - n(A∩B). Venn diagrams.",
    keyPoints: ["Union: elements in A OR B", "Intersection: elements in A AND B", "Complement: elements NOT in A", "n(AUB) = n(A) + n(B) - n(A∩B)", "De Morgan: (A∪B)' = A'∩B'"]
  },
  "Combinations": {
    subject: "Mathematics",
    summary: "Combination: selection without regard to order. nCr = n!/[r!(n-r)!]. Permutation: arrangement with order. nPr = n!/(n-r)!. nC0 = nCn = 1. Pascal's triangle gives combination values. Binomial expansion: (a+b)ⁿ = ΣnCr·aⁿ⁻ʳ·bʳ.",
    keyPoints: ["nCr: combinations (order doesn't matter)", "nPr: permutations (order matters)", "nCr = n!/r!(n-r)!", "nPr = n!/(n-r)!", "nC0 = nCn = 1 always"]
  },
  "Geometry": {
    subject: "Mathematics",
    summary: "Lines, angles and shapes. Triangle: angle sum 180°. Exterior angle = sum of opposite interior angles. Polygon: interior angles sum = (n-2)×180°. Circle theorems: angle at centre = 2× angle at circumference. Pythagoras: c² = a² + b². Similar triangles: equal angles, proportional sides.",
    keyPoints: ["Triangle angles: sum = 180°", "Polygon interior angles: (n-2) × 180°", "Exterior angle of triangle: sum of two non-adjacent angles", "Angles in same segment are equal", "Angle at centre = 2 × angle at circumference"]
  },
  "Fractions": {
    subject: "Mathematics",
    summary: "Add/subtract: common denominator. Multiply: numerator × numerator, denominator × denominator. Divide: multiply by reciprocal. Mixed numbers: convert to improper fractions first. Simplify: divide by HCF. BODMAS applies. Decimal to fraction: place over appropriate power of 10.",
    keyPoints: ["Common denominator needed for addition/subtraction", "Multiply fractions: straight across", "Divide: multiply by reciprocal (flip second fraction)", "Simplify: divide numerator and denominator by HCF", "Mixed number → improper: (whole × denominator) + numerator"]
  },
  "Integration": {
    subject: "Mathematics",
    summary: "Integration: anti-differentiation. ∫xⁿdx = xⁿ⁺¹/(n+1) + C. ∫(ax+b)ⁿdx: use substitution. Definite integral: substitute limits. ∫ᵃᵇf(x)dx = F(b) - F(a). Area under curve = ∫ᵃᵇ|f(x)|dx. Integration by parts: ∫udv = uv - ∫vdu.",
    keyPoints: ["∫xⁿ dx = xⁿ⁺¹/(n+1) + C (n ≠ -1)", "Definite integral: substitute limits and subtract", "Area under curve: definite integral", "∫sin x = -cos x + C", "∫cos x = sin x + C"]
  },
  "Statistics": {
    subject: "Mathematics",
    summary: "Mean = Σx/n (sum/count). For grouped data: mean = Σfx/Σf. Median: middle value (order first). Mode: most frequent. Range = max - min. Standard deviation: √[Σ(x-x̄)²/n]. Cumulative frequency for median. Histogram: area = frequency. Ogive: cumulative frequency curve.",
    keyPoints: ["Mean = sum of values ÷ number of values", "Median: middle value when arranged in order", "Mode: most frequently occurring value", "Range = highest value - lowest value", "Standard deviation: measures spread from mean"]
  },
  "Probability": {
    subject: "Mathematics",
    summary: "P(event) = favourable outcomes/total outcomes. 0 ≤ P(A) ≤ 1. P(A') = 1 - P(A). Mutually exclusive: P(A or B) = P(A) + P(B). Independent: P(A and B) = P(A) × P(B). Conditional: P(A|B) = P(A∩B)/P(B). Tree diagrams for combined events.",
    keyPoints: ["P(event) = favourable ÷ total outcomes", "P(A') = 1 - P(A) (complementary events)", "Mutually exclusive: cannot both occur", "Independent: occurrence of one doesn't affect other", "Tree diagram: systematic listing of outcomes"]
  },
  "Sequences": {
    subject: "Mathematics",
    summary: "Arithmetic Progression (AP): constant difference d. nth term = a + (n-1)d. Sum Sn = n/2[2a + (n-1)d] = n/2(a+l). Geometric Progression (GP): constant ratio r. nth term = arⁿ⁻¹. Sum Sn = a(rⁿ-1)/(r-1). Sum to infinity (|r|<1): S∞ = a/(1-r).",
    keyPoints: ["AP: same difference between consecutive terms", "AP nth term: a + (n-1)d", "GP: constant ratio between consecutive terms", "GP nth term: arⁿ⁻¹", "GP infinite sum: a/(1-r) when |r| < 1"]
  },
  "Mensuration": {
    subject: "Mathematics",
    summary: "Areas: rectangle lw, triangle ½bh, circle πr², trapezium ½(a+b)h. Volumes: cuboid lwh, cylinder πr²h, cone ⅓πr²h, sphere ⁴⁄₃πr³. Surface areas. Arc length = rθ. Sector area = ½r²θ (θ in radians). 1 radian = 180°/π ≈ 57.3°.",
    keyPoints: ["Circle area = πr²; circumference = 2πr", "Sphere volume = (4/3)πr³", "Cone volume = (1/3)πr²h", "Cylinder volume = πr²h", "Arc length = rθ; Sector area = ½r²θ (θ in radians)"]
  },
  "Indices": {
    subject: "Mathematics",
    summary: "Laws: aᵐ×aⁿ=aᵐ⁺ⁿ, aᵐ÷aⁿ=aᵐ⁻ⁿ, (aᵐ)ⁿ=aᵐⁿ, a⁰=1, a⁻ⁿ=1/aⁿ, a^(1/n)=ⁿ√a, a^(m/n)=(ⁿ√a)ᵐ. Surds: irrational root. Simplify: √12=2√3. Rationalise denominator: multiply by conjugate.",
    keyPoints: ["aᵐ × aⁿ = aᵐ⁺ⁿ (same base)", "aᵐ ÷ aⁿ = aᵐ⁻ⁿ", "(aᵐ)ⁿ = aᵐⁿ", "a⁰ = 1 for any non-zero a", "a^(1/n) = ⁿ√a (nth root)"]
  },
  "Number Theory": {
    subject: "Mathematics",
    summary: "Prime numbers: divisible only by 1 and itself (2,3,5,7,11...). HCF: largest factor common to all numbers. LCM: smallest multiple common to all. HCF × LCM = product of two numbers. Factors, multiples, prime factorisation (express as product of primes).",
    keyPoints: ["2 is the only even prime number", "HCF: largest common factor", "LCM: smallest common multiple", "HCF × LCM = product of the two numbers", "Prime factorisation: express as product of primes"]
  },
  "Commercial Maths": {
    subject: "Mathematics",
    summary: "Profit/Loss: selling price vs cost price. %Profit = Profit/CP × 100. Simple Interest: SI = PRT/100. Compound Interest: A = P(1+r/100)ⁿ. Depreciation: value reduces each year. Hire purchase: deposit + instalments. VAT: value added tax on goods.",
    keyPoints: ["% Profit = (SP - CP)/CP × 100", "Simple interest: I = PRT/100", "Compound: A = P(1 + r/100)ⁿ", "Discount: reduction from marked/list price", "Hire purchase: total cost = deposit + all instalments"]
  },
  "Simultaneous Equations": {
    subject: "Mathematics",
    summary: "Solve two equations with two unknowns. Methods: elimination (make coefficients equal, add/subtract), substitution (express one variable, substitute). For linear-quadratic: substitute linear into quadratic, solve quadratic. Check by substituting back into both equations.",
    keyPoints: ["Elimination: multiply equations to match coefficients", "Substitution: express one variable then substitute", "Linear-quadratic: substitute to get quadratic equation", "Always check by substituting into original equations", "Infinite solutions: equations represent same line"]
  },
  "Errors": {
    subject: "Mathematics",
    summary: "Measurement always has error. Absolute error: |measured - true|. Relative error = absolute error/true value. Percentage error = relative error × 100. Maximum absolute error = ½ × least count. Rounding: to significant figures or decimal places. Truncation vs rounding.",
    keyPoints: ["Absolute error = |measured value - true value|", "Relative error = absolute error ÷ true value", "Percentage error = relative error × 100%", "Maximum error = half of smallest scale division", "Rounding: look at next digit, ≥5 round up"]
  },
  "Number Bases": {
    subject: "Mathematics",
    summary: "Denary (base 10): digits 0-9. Binary (base 2): digits 0-1. Octal (base 8): digits 0-7. Hex (base 16): 0-9, A-F. Convert to base 10: multiply digits by powers of base. Convert from base 10: repeated division by new base. Binary addition: 1+1=10, 1+1+1=11.",
    keyPoints: ["Binary: only 0 and 1", "Convert to denary: positional values", "Convert from denary: repeated division", "Binary addition: 1+1=10 (carry 1)", "Hexadecimal: uses A(10) to F(15)"]
  },
  "Ratio & Proportion": {
    subject: "Mathematics",
    summary: "Ratio: comparison of quantities (a:b). Proportion: two equal ratios. Direct proportion: y∝x, y=kx (double x, double y). Inverse proportion: y∝1/x, y=k/x (double x, halve y). Divide in ratio: total ÷ sum × each part. Maps use scale ratios.",
    keyPoints: ["Direct proportion: y = kx", "Inverse proportion: y = k/x", "Divide in ratio a:b: total × a/(a+b) and total × b/(a+b)", "Scale factor: ratio of drawing to actual", "k = constant of proportionality"]
  },
  "Sets & Algebra": {
    subject: "Mathematics",
    summary: "Combining set notation with algebra. Set builder notation: {x : x > 3}. Cartesian product A×B: all ordered pairs. Venn diagrams with algebraic expressions. Boolean algebra: AND, OR, NOT operations. Apply set operations to solve problems.",
    keyPoints: ["Set builder: {x : condition on x}", "Cartesian product: all possible ordered pairs", "|A| or n(A): number of elements in set A", "Power set: set of all subsets of A", "De Morgan's laws apply in algebra and logic"]
  },
  "Grammar": {
    subject: "English",
    summary: "Parts of speech: noun, verb, adjective, adverb, pronoun, preposition, conjunction, interjection. Subject-verb agreement: singular subject takes singular verb. Tenses: 12 forms. Reported speech: changes tense and pronouns. Active/passive voice. Conditional sentences: if...then structures.",
    keyPoints: ["Collective nouns (group, team): often take singular verb", "Neither...nor: verb agrees with nearer subject", "Each/every: always singular", "Reported speech: present → past tense", "Passive: object becomes subject + 'be' + past participle"]
  },
  "Idioms": {
    subject: "English",
    summary: "Idioms: phrases with meanings different from literal words. Examples: 'kick the bucket' (die), 'bite the bullet' (endure hardship), 'let the cat out of the bag' (reveal secret), 'break a leg' (good luck), 'hit the nail on the head' (be exactly right), 'spill the beans' (reveal secret).",
    keyPoints: ["Idioms cannot be understood from individual words alone", "Context is key to understanding idioms", "'Under the weather' = feeling ill", "'Beat around the bush' = avoid the main topic", "'Cost an arm and a leg' = very expensive"]
  },
  "Phonetics": {
    subject: "English",
    summary: "Phonetics studies speech sounds. Vowels: 12 pure vowels, 8 diphthongs. Consonants: voiced (vocal cords vibrate) and voiceless. Stress: primary (') and secondary (,) stress. Syllables: units of pronunciation. Intonation: rising (questions), falling (statements). IPA: international phonetic alphabet.",
    keyPoints: ["Pure vowels: 12 in standard British English", "Diphthongs: glide from one vowel to another (8 total)", "Voiced: /b,d,g,v,z,m,n,l,r/", "Voiceless: /p,t,k,f,s,h/", "Word stress: one syllable receives primary stress"]
  },
  "Science History": {
    subject: "Current Affairs",
    summary: "Key scientific discoveries: Newton (gravity, laws of motion), Darwin (evolution), Einstein (relativity, E=mc²), Watson & Crick (DNA structure), Pasteur (germ theory), Marie Curie (radioactivity), Fleming (penicillin), Faraday (electromagnetic induction).",
    keyPoints: ["Newton: gravity and laws of motion (17th century)", "Darwin: evolution by natural selection (1859)", "Einstein: theory of relativity (1905)", "Watson & Crick: DNA double helix (1953)", "Fleming: discovered penicillin (1928)"]
  },

  "Alloys": {
    subject: "Chemistry",
    summary: "Alloys are mixtures of metals (or metal with non-metal). Bronze: copper + tin. Brass: copper + zinc. Steel: iron + carbon. Stainless steel: iron + chromium + nickel. Solder: lead + tin. Duralumin: aluminium + copper. Alloys are harder and stronger than pure component metals.",
    keyPoints: ["Bronze: copper + tin (weapons and tools)", "Brass: copper + zinc (musical instruments, fittings)", "Steel: iron + carbon (construction)", "Stainless steel: iron + chromium + nickel (cutlery, surgery)", "Alloys: harder and stronger than pure metals"]
  },

  "Animal Diversity": {
    subject: "Biology",
    summary: "Animals classified into vertebrates (backbone) and invertebrates (no backbone). Evolution by natural selection: variation exists, struggle for survival, fittest survive and reproduce. Evidence: fossils, comparative anatomy, embryology. Darwin's theory explains biodiversity.",
    keyPoints: ["Vertebrates: fish, amphibians, reptiles, birds, mammals", "Invertebrates: insects, worms, molluscs", "Natural selection: survival of the fittest", "Fossils: evidence of extinct organisms", "Adaptation: features that help survival"]
  },


  "Equations": {
    subject: "Mathematics",
    summary: "Linear equations: isolate the variable (ax + b = c → x = (c-b)/a). Quadratic equations: ax² + bx + c = 0. Methods: factorisation, completing the square, quadratic formula x = (-b ± √(b²-4ac))/2a. Discriminant b²-4ac determines nature of roots.",
    keyPoints: ["Linear: rearrange to isolate x", "Quadratic formula: x = (-b ± √(b²-4ac))/2a", "b²-4ac > 0: two distinct real roots", "b²-4ac = 0: equal roots (one solution)", "b²-4ac < 0: no real roots"]
  },

  // ==========================================
  // ENGLISH — PHONOLOGY
  // ==========================================
  "Phonology": {
    subject: "English", title: "Phonology — Vowel & Consonant Sounds",
    icon: "🔊", estimatedTime: "3 min read",
    sections: [
      { heading: "What is Phonology?", type: "text",
        content: "Phonology studies how sounds function in a language. UNIBEN tests your ability to identify words that share the same vowel or consonant sound — regardless of spelling. The key rule: judge by SOUND, never by spelling." },
      { heading: "Common Vowel Sounds Tested", type: "cards", items: [
        { title: "/ʌ/ — short UH sound", body: "sun, cup, run, fun, love, blood, come, done, enough, rough, comfort, money, country." },
        { title: "/ɑː/ — long AH sound", body: "car, far, bar, calm, palm, bath, class, heart, father, aunt, laugh." },
        { title: "/ɔː/ — long AW sound", body: "door, floor, more, corn, born, law, saw, caught, thought, walk, talk, call." },
        { title: "/iː/ — long EE sound", body: "beat, heat, meat, feet, seat, creek, week, sweet, treat, receive, believe." },
        { title: "/ɪ/ — short I sound", body: "bit, hit, sit, tip, chip, live, give, busy, women, build, guilt." },
        { title: "/ʊ/ — short OO sound", body: "book, cook, look, foot, good, wood, pull, full, could, should, would." },
        { title: "/uː/ — long OO sound", body: "food, moon, soon, blue, true, shoe, through, fruit, juice, move, prove." },
        { title: "/e/ — short E sound", body: "bed, red, fed, head, bread, said, friend, many, any, again, bury." },
      ]},
      { heading: "Tricky Same-Sound Groups", type: "cards", items: [
        { title: "Words sounding like /ʌ/", body: "sun, son, done, won, fun, run, come, some, love, above, enough, tough, rough, blood, flood." },
        { title: "Words sounding like /iː/", body: "see, sea, me, key, quay, be, fee, free, tree, receive, believe, machine, people." },
        { title: "Words sounding like /eɪ/", body: "cake, lake, take, great, break, weigh, they, eight, straight, vein, reign, suede." },
        { title: "Silent letter traps", body: "know/no/now — know and no share /nəʊ/. Through/threw — both /θruː/. Cough/tough — DIFFERENT sounds (/kɒf/ vs /tʌf/)!" },
      ]},
      { heading: "Strategy", type: "steps", items: [
        "Say each word aloud in your head — rely on sound, never spelling.",
        "Isolate only the vowel sound being tested (usually underlined).",
        "Find all options that have that exact same vowel sound.",
        "The odd-one-out is the one whose vowel sound is different.",
        "Watch out for traps: 'cough', 'through', 'thought', 'tough' all look similar but sound different.",
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "'Cough' (/kɒf/), 'though' (/ðəʊ/), 'through' (/θruː/), 'tough' (/tʌf/), 'thought' (/θɔːt/) — same spelling pattern, 5 completely different sounds.",
        "'Sun' and 'son' sound identical (/sʌn/) — same sound, different meaning.",
        "'Read' (present) = /riːd/. 'Read' (past) = /red/. Same spelling, different sounds!",
        "Spelling with 'ou' can be /ʌ/ (enough), /uː/ (through), /ɔː/ (thought), /aʊ/ (out) — always sound it out.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "For every phonology question, say the word in your head first. The moment you read with your eyes instead of your ears, you'll fall into spelling traps. Sound always beats spelling." },
    ]
  },

  // ==========================================
  // ENGLISH — SENTENCE ANALYSIS
  // ==========================================
  "Sentence Analysis": {
    subject: "English", title: "Sentence Analysis — SVO, SVC & Clause Patterns",
    icon: "🔣", estimatedTime: "3 min read",
    sections: [
      { heading: "What is Sentence Analysis?", type: "text",
        content: "Sentence Analysis breaks a sentence into its grammatical components: Subject (S), Verb (V), Object (O), Complement (C), and Adverbial (A). You must identify the correct pattern — SVO, SVC, SVOA, SVOO, SVOC, or SVA." },
      { heading: "The 6 Sentence Patterns", type: "cards", items: [
        { title: "SV — Subject + Verb", body: "'The baby cried.' / 'She ran.' No object, no complement. The verb is intransitive and complete on its own." },
        { title: "SVC — Subject + Verb + Complement", body: "'She is a nurse.' / 'He became angry.' Complement describes or renames the subject. Linking verbs: is, are, was, were, become, seem, appear, feel, look, sound." },
        { title: "SVO — Subject + Verb + Object", body: "'She kicked the ball.' / 'He reads novels.' Object receives the action. Ask 'what?' or 'whom?' after the verb." },
        { title: "SVA — Subject + Verb + Adverbial", body: "'She came when the rain fell.' / 'He sat on the chair.' Adverbial tells when, where, how, or why." },
        { title: "SVOO — Subject + Verb + Indirect Object + Direct Object", body: "'She gave me a meal.' / 'He sent her a letter.' Two objects: indirect (me, her) + direct (meal, letter)." },
        { title: "SVOA — Subject + Verb + Object + Adverbial", body: "'He shut the door before leaving.' / 'She put the book on the table.' Object + adverbial clause or phrase." },
      ]},
      { heading: "How to Identify Each Part", type: "steps", items: [
        "SUBJECT: who or what performs the action. Usually before the verb.",
        "VERB: the action or state word.",
        "OBJECT: what receives the action. Ask 'what?' or 'whom?' after the verb.",
        "COMPLEMENT: describes/renames the subject after a linking verb (is, become, seem). It IS the subject.",
        "ADVERBIAL: tells when, where, how, why. Usually a phrase or clause starting with when, before, after, on, in, etc.",
        "If you have TWO objects (indirect + direct) → SVOO.",
      ]},
      { heading: "Quick Reference Examples", type: "cards", items: [
        { title: "SV", body: "'The baby has been crying.' S=The baby, V=has been crying. Nothing else." },
        { title: "SVC", body: "'She is a nurse.' S=She, V=is, C=a nurse. 'A nurse' = subject complement." },
        { title: "SVO", body: "'He reads novels.' S=He, V=reads, O=novels." },
        { title: "SVA", body: "'She came when the rain fell.' S=She, V=came, A=when the rain fell." },
        { title: "SVOO", body: "'She gave me a meal.' S=She, V=gave, IO=me, DO=a meal." },
        { title: "SVOA", body: "'He shut the door before leaving.' S=He, V=shut, O=the door, A=before leaving." },
      ]},
      { heading: "SVC vs SVO — Most Confused Pair", type: "warning", items: [
        "SVC: the complement DESCRIBES or IS the subject. 'She is a teacher' — teacher IS her.",
        "SVO: the object RECEIVES the action and is different from the subject. 'She teaches students' — students receive the teaching.",
        "Test: can you replace the verb with '=' ? 'She = a teacher' ✓ (SVC). 'She = students' ✗ (SVO).",
        "Linking verbs (is, become, seem, appear, feel, look) always lead to SVC — never SVO.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Start by finding the verb. Then ask: is it a linking verb (is/become/seem)? → SVC. Does it have two objects? → SVOO. Does it have an adverbial clause (when/before/after)? → SVA or SVOA. No object at all? → SV." },
    ]
  },

  // ==========================================
  // CRS — BIBLE KNOWLEDGE
  // ==========================================
  "Bible Knowledge": {
    subject: "CRS", title: "Bible Knowledge — Old & New Testament",
    icon: "✝️", estimatedTime: "4 min read",
    sections: [
      { heading: "What is Tested", type: "text",
        content: "UNIBEN CRS questions cover key events, characters, and teachings from both the Old and New Testaments. Focus areas: Creation and patriarchs, the Exodus, the Monarchy (Saul/David/Solomon), the prophets, the life of Jesus, and the early church in Acts." },
      { heading: "Old Testament — Must Know", type: "cards", items: [
        { title: "Creation (Genesis 1-2)", body: "God created in 6 days, rested on 7th. Humans created on Day 6 in God's image. Two accounts: Genesis 1 (Elohist) and Genesis 2 (Yahwist). The four rivers from Eden: Pishon, Gihon, Tigris, Euphrates." },
        { title: "The Patriarchs", body: "Abraham: covenant sealed by circumcision (Gen 17). Isaac: nearly sacrificed at Moriah. Jacob (Israel): 12 sons. Joseph: sold by brothers, rose to power in Egypt, settled family in GOSHEN." },
        { title: "The Exodus", body: "Moses led Israelites from Egypt. Ten plagues. Passover: death angel passed over Israelite homes marked with blood. Crossing Red Sea. Ten Commandments at Sinai. Manna in the wilderness." },
        { title: "Judges & Monarchy", body: "Saul: first king, rejected for disobedience at Amalek. David: man after God's heart, anointed by Samuel. Nathan rebuked David for Bathsheba/Uriah. Solomon: built the temple. Kingdom divided after Solomon." },
        { title: "The Prophets", body: "Elijah vs Baal prophets at Mount Carmel. Jeremiah: new covenant written on the heart. Amos: social justice. Isaiah: suffering servant prophecy. Jonah: God's mercy extends to Nineveh." },
      ]},
      { heading: "New Testament — Must Know", type: "cards", items: [
        { title: "Life of Jesus", body: "Birth in Bethlehem, raised in Nazareth. Baptism by John. Temptation in wilderness. 12 disciples. Miracles: healing, nature, exorcism, resurrection (Lazarus). Transfiguration: Moses and Elijah discussed His death." },
        { title: "Parables", body: "Kingdom parables: Sower, Mustard Seed, Wheat & Tares. Love parables: Prodigal Son, Good Samaritan. Stewardship: Ten Talents. The Prodigal Son best illustrates God's unconditional love and forgiveness." },
        { title: "Passion & Resurrection", body: "Last Supper. Gethsemane prayer. Arrested by Judas. Tried by Caiaphas (false charge: destroy temple in 3 days). Tried by Pilate. Crucifixion. Resurrection on third day. Women found empty tomb." },
        { title: "Acts of the Apostles", body: "Pentecost: Holy Spirit descends, tongues of fire, 3000 converted. Peter heals lame man. Stephen: first martyr. Paul converted on Damascus road. Three missionary journeys. Jerusalem Council: Gentiles and circumcision." },
        { title: "Pauline Epistles", body: "Romans: justification by faith. 1 Corinthians: spiritual gifts, love (ch.13). Galatians: grace not law (before faith, law was custodian). Ephesians: armour of God. Philippians: joy. 1 John: God is love." },
      ]},
      { heading: "High-Frequency Facts", type: "cards", items: [
        { title: "Who said what", body: "'My soul magnifies the Lord' = Mary (Magnificat). 'Nunc Dimittis' = Simeon. 'You brood of vipers' = John the Baptist (Luke) / Jesus (Matthew). 'Deal gently with Absalom' = David." },
        { title: "Numbers to remember", body: "New Testament books: 27. Rivers from Eden: 4. Days of creation: 6 + 1 rest. Disciples: 12. Plagues: 10. Commandments: 10. Missionary journeys of Paul: 3. Flood duration: 150 days." },
        { title: "Key locations", body: "Joseph settled family in GOSHEN. Abraham asked to sacrifice at MORIAH. Jesus raised in NAZARETH (Luke 4:16). Peter's confession: CAESAREA PHILIPPI. Jesus arrested at GETHSEMANE." },
        { title: "Firsts", body: "First martyr: Stephen. First king: Saul. First miracle at Cana (water to wine). First apostle to deny Jesus: Peter. First missionary journey companion: Barnabas." },
      ]},
      { heading: "Strategy", type: "steps", items: [
        "Focus on WHO did WHAT and WHERE — location and actor questions are most common.",
        "Know the parables and what each one teaches — the Prodigal Son (God's love), Sower (hearing the Word).",
        "Learn the Pauline letter themes: Romans=faith, Galatians=grace, Corinthians=gifts/love.",
        "For Old Testament: know the sequence — Creation → Patriarchs → Exodus → Judges → Kings → Prophets.",
        "For question about who said a quote — context is everything. Same words spoken by different people in different Gospels.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "The most commonly tested passage is Galatians 3:24 ('before faith came, the law was our custodian') and John 6:35 ('I am the bread of life'). Memorise the Seven I AM sayings of Jesus in John's Gospel — they appear repeatedly." },
    ]
  },

  // ==========================================
  // IRK — ISLAMIC KNOWLEDGE
  // ==========================================
  "Islamic Knowledge": {
    subject: "IRK", title: "Islamic Religious Knowledge",
    icon: "☪️", estimatedTime: "3 min read",
    sections: [
      { heading: "What is Tested", type: "text",
        content: "UNIBEN IRK questions cover the five pillars of Islam, the Qur'an, Hadith, Islamic calendar, key figures, and Islamic practices. Questions are straightforward — focus on definitions, numbers, and key facts." },
      { heading: "The Five Pillars of Islam", type: "cards", items: [
        { title: "1. Shahada — Declaration of Faith", body: "There is no god but Allah and Muhammad is His prophet. The fundamental statement of Islamic belief." },
        { title: "2. Salat — Prayer", body: "Five daily prayers: Fajr (dawn), Dhuhr (midday), Asr (afternoon), Maghrib (sunset), Isha (night). Second pillar of Islam. RECURRING!" },
        { title: "3. Zakat — Almsgiving", body: "Obligatory charity given to the poor and needy. A religious obligation treated as a form of tax. Third pillar, after Salat in Qur'anic ranking. RECURRING!" },
        { title: "4. Sawm — Fasting", body: "Fasting during the month of Ramadan (9th month of Islamic calendar). Teenagers and travellers are among those exempted. RECURRING!" },
        { title: "5. Hajj — Pilgrimage", body: "Pilgrimage to Makkah during Zul-Hijjah (12th and final month of Islamic calendar). Obligatory once in a lifetime for those who are able." },
      ]},
      { heading: "Key Islamic Facts", type: "cards", items: [
        { title: "The Qur'an", body: "Holy book of Islam. Revealed to Prophet Muhammad. Written in Arabic. Contains guidance for all aspects of life. The mother of Jesus is referred to as MARYAM in the Qur'an." },
        { title: "Islamic Calendar", body: "Al-taqwin al-hijiri (Hijri calendar). Contains 12 months. Begins with Muharram, ends with Zul-Hijjah. Lunar calendar — about 11 days shorter than solar calendar." },
        { title: "Greetings", body: "Assalamu Alaikum = 'Peace be upon you'. Response: Wa alaikum assalam. Used as a method of greeting among Muslims. RECURRING!" },
        { title: "Hijab", body: "A veil traditionally worn by Muslim women in the presence of adult males outside their immediate family. Covers head and chest." },
        { title: "Prophets in Islam", body: "Moses = MUSA. Jesus = ISA. Abraham = IBRAHIM. Joseph = YUSUF. Noah = NUH. John the Baptist = YAHYA. The Qur'an refers to Moses as Musa. RECURRING!" },
      ]},
      { heading: "Hadith", type: "cards", items: [
        { title: "What is Hadith?", body: "Sayings, actions, and approvals of Prophet Muhammad (PBUH). Second source of Islamic law after the Qur'an." },
        { title: "Six Compilers of Hadith", body: "Bukhari, Muslim, Abu Dawud, Tirmidhi, Nasai, Ibn Majah. Tirmidhi became blind before his death. RECURRING!" },
        { title: "Hadith 9 of An-Nawawi", body: "Refers to the people of the book (Quraysh) who were destroyed by asking unnecessary questions. RECURRING!" },
      ]},
      { heading: "Islamic Prohibitions & Permissions", type: "cards", items: [
        { title: "Prohibited (Haram)", body: "Alcohol consumption. Pork meat, dog meat, dead animals, and blood. Begging (Islam encourages dignity of labour instead). RECURRING!" },
        { title: "Marriage in Islam", body: "According to the Holy Qur'an, Muslims are allowed to marry up to FOUR wives, subject to conditions of fairness and equal treatment." },
        { title: "Ramadan exemptions", body: "Those exempted from fasting: the sick, travellers, pregnant/nursing women, and TEENAGERS (young children). RECURRING!" },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "The most tested IRK facts: 5 pillars (in order), Salat = 5 daily prayers, Ramadan = 9th month, Zul-Hijjah = month of Hajj, Islamic calendar = 12 months, Maryam = Mary in Qur'an, Assalamu Alaikum = peace be upon you. Learn these 7 facts and you'll answer most IRK questions." },
    ]
  },

  // ==========================================
  // VISUAL ARTS
  // ==========================================
  "Visual Arts": {
    subject: "Visual Arts", title: "Visual Arts — Elements, Techniques & History",
    icon: "🎨", estimatedTime: "3 min read",
    sections: [
      { heading: "What is Tested", type: "text",
        content: "UNIBEN Visual Arts questions cover the elements and principles of design, art techniques (drawing, painting, sculpture, ceramics, printmaking, textiles), Nigerian and African art history, and major artists. Questions are knowledge-based — learn the definitions and key facts." },
      { heading: "Elements of Art & Design", type: "cards", items: [
        { title: "Elements of Design", body: "Line, Shape, Form, Space, Texture, Colour, Value (tone). These are the basic building blocks of all visual art. RECURRING!" },
        { title: "Principles of Design", body: "Balance, Contrast, Emphasis, Movement, Pattern, Rhythm, Unity, Variety. These govern how elements are arranged." },
        { title: "Warm vs Cool Colours", body: "WARM colours (red, orange, yellow): appear to advance/come forward in a painting. COOL colours (blue, green, violet): appear to recede/go back. RECURRING!" },
        { title: "Colour mixing", body: "Primary: red, yellow, blue. Secondary: orange, green, violet. Tint = colour + white (lighter). Shade = colour + black (darker). Complementary colours are opposite on colour wheel." },
        { title: "Line", body: "The element of art that records the movement of the hand describing objects. Most basic element. RECURRING!" },
      ]},
      { heading: "Art Techniques", type: "cards", items: [
        { title: "Sculpture techniques", body: "Armature: the metal framework/skeleton inside a modelled sculpture. RECURRING! Carving: subtractive (removes material). Modelling: additive (adds material). Casting: pours molten material into mould." },
        { title: "Ceramics", body: "Throwing: shaping clay on a potter's wheel. Biscuit/Bisque ware: ceramic fired once but NOT yet glazed. RECURRING! Glazing: applying glass-like coating before second firing." },
        { title: "Printmaking", body: "Silk screen printing uses a STENCIL to block ink from passing through the mesh. RECURRING! Types: relief (lino, wood), intaglio (etching), planographic (lithography), stencil (screen printing)." },
        { title: "Textiles", body: "Warp and weft: terms used in FABRIC WEAVING (warp = vertical, weft = horizontal). Tie-dye and batik are RESIST techniques. Resist = wax/binding prevents dye penetration. RECURRING!" },
        { title: "Perspective", body: "Aerial perspective: how atmosphere changes colours at distance. Leonardo da Vinci solved perspective problems through mathematical means. Vanishing point: where parallel lines appear to meet. Horizon: where sky and earth meet." },
      ]},
      { heading: "Nigerian & African Art", type: "cards", items: [
        { title: "Nigerian art centres", body: "Ife: naturalistic terracotta and bronze heads. Benin: bronzes looted by British in 1897 Punitive Expedition. Igbo Ukwu: oldest bronzes in West Africa (9th century). Nok: earliest terracotta figures in Nigeria." },
        { title: "Famous Nigerian artists", body: "Aina Onabolu: pioneer of modern Nigerian art, created the Sango sculpture at PHCN HQ Lagos. Ben Enwonwu: sculptor and painter. Susanne Wenger (Adunni Olorisa): revived Oshogbo arts festival." },
        { title: "African art uses", body: "Masks used for social dances and ritual ceremonies. Akwaba dolls: fertility figures made by the ASHANTI of Ghana. Fulani nomads' most cherished arts: body and calabash decoration." },
        { title: "Art movements", body: "Mosaic art flourished in ROMANESQUE period (6th-15th centuries). Abstract art: does not represent visual reality — uses distorted forms, shapes, and colours. Cubism was directly influenced by African masks and sculpture." },
        { title: "Craft traditions", body: "Hausa people: renowned for leather work. Bida (Niger State): most famous centre for bead-making in Nigeria. Weaving, pottery, bronze casting are major Nigerian craft traditions." },
      ]},
      { heading: "Key Definitions", type: "cards", items: [
        { title: "Abstract art", body: "Art that does NOT attempt to represent visual reality — uses shapes, colours, forms, and gestural marks to achieve its effect. Opposite of realism/naturalism." },
        { title: "Naturalistic art", body: "Art that realistically represents the natural world. IFE art is famous for its naturalistic bronze and terracotta heads." },
        { title: "Poster design", body: "The most essential quality of a good poster is LEGIBILITY — it must be easily readable from a distance." },
        { title: "Human proportion", body: "In a proportionate drawing, a RULER is used as the standard measuring unit. The head height is the standard unit." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Most tested facts: Armature = metal framework for sculpture. Biscuit = unglazed fired ceramic. Warm colours advance, cool colours recede. Warp and weft = weaving. Igbo Ukwu = oldest bronzes in West Africa. Akwaba = Ashanti Ghana. Cubism influenced by African art." },
    ]
  },

    // ============================================================
// STUDY GUIDES ADDITIONS
// Paste these entries into your existing STUDY_GUIDES object
// in src/data/studyGuides.js — add before the closing }
// ============================================================
// HOW TO ADD:
// 1. Open src/data/studyGuides.js
// 2. Find the last entry (before the closing })
// 3. Add a comma after it
// 4. Paste all entries below
// ============================================================

  // ==========================================
  // GOVERNMENT — NEW ENTRIES
  // ==========================================

  "Sovereignty": {
    subject: "Government",
    title: "Sovereignty — Types and Concepts",
    icon: "⚖️",
    estimatedTime: "3 min read",
    sections: [
      { heading: "What is Sovereignty?", type: "text",
        content: "Sovereignty is the supreme, absolute power of the state to govern itself without interference from outside. It is the highest authority within a state — no individual, group or foreign power can override it." },
      { heading: "Types of Sovereignty", type: "cards", items: [
        { title: "Internal sovereignty", body: "Supreme authority over all people and groups WITHIN the state. The government's right to make and enforce laws domestically." },
        { title: "External sovereignty", body: "Independence from foreign control — the ability to deal with other states as equals. Also called independence." },
        { title: "Legal sovereignty", body: "The body with the LEGAL RIGHT to make laws — Parliament/Legislature. In Nigeria, the National Assembly has legal sovereignty." },
        { title: "Political sovereignty", body: "The body that ACTUALLY controls political power — in a democracy this is the ELECTORATE (voters). The people are the political sovereign." },
        { title: "De jure sovereignty", body: "Sovereignty by LAW or RIGHT — even if not effectively exercised. A recognised government has de jure sovereignty even if rebels control some areas." },
        { title: "De facto sovereignty", body: "Sovereignty in ACTUAL PRACTICE — effective control even without legal right. A military coup leader may have de facto power but lacks de jure authority." },
      ]},
      { heading: "Exam Questions", type: "cards", items: [
        { title: "De jure sovereignty means:", body: "Sovereignty based on LAW and RIGHT. Not actual control (de facto), not military, not foreign." },
        { title: "The electorate is the:", body: "POLITICAL sovereign. Parliament = legal sovereign. President = executive authority." },
        { title: "A state CANNOT exist without:", body: "SOVEREIGNTY. A nation can exist without a state, but a state requires sovereignty by definition." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Jean Bodin (16th century) first developed the concept of sovereignty — argued it should reside with the KING. Rousseau argued sovereignty belongs to the PEOPLE (popular sovereignty). De jure = by law/right. De facto = in actual practice." }
    ]
  },

  "Constitutions": {
    subject: "Government",
    title: "Constitutions — Types and Features",
    icon: "📜",
    estimatedTime: "3 min read",
    sections: [
      { heading: "What is a Constitution?", type: "text",
        content: "A constitution is the fundamental law of a state. It defines the structure of government, distributes power between the arms of government, guarantees citizens' rights, and is the supreme law that all other laws must conform to." },
      { heading: "Types of Constitutions", type: "cards", items: [
        { title: "Written constitution", body: "Contained in one formal CODIFIED document. Examples: USA, Nigeria, Germany." },
        { title: "Unwritten constitution", body: "NOT in one single document — based on conventions, traditions, statutes. Example: UK. Not that it was never written — it is not CODIFIED." },
        { title: "Rigid constitution", body: "Difficult to amend — requires special procedure. Nigeria requires 2/3 of National Assembly + 2/3 of state Houses of Assembly." },
        { title: "Flexible constitution", body: "Easy to amend — changed by ordinary legislative process. Example: UK Parliament can change any law by simple majority." },
        { title: "Federal constitution", body: "Divides power between central govt and component units. Examples: Nigeria, USA, Germany." },
        { title: "Unitary constitution", body: "Power concentrated in central government — local governments subordinate. Examples: UK, France, Ghana." },
      ]},
      { heading: "Exam Questions", type: "cards", items: [
        { title: "Nigeria's constitution is:", body: "WRITTEN and RIGID. Written = in one document. Rigid = requires special majority to amend." },
        { title: "UK constitution is unwritten because:", body: "Not contained in a SINGLE CODIFIED document. Exists in Acts of Parliament, common law, conventions — but not one document." },
        { title: "Constitutional supremacy means:", body: "All laws must conform to the constitution — any inconsistent law is VOID. Courts can strike down any law contradicting the constitution." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Nigeria = WRITTEN + RIGID + FEDERAL. UK = UNWRITTEN + FLEXIBLE + UNITARY. These contrasts appear every year. Any law inconsistent with Nigeria's constitution is void to the extent of inconsistency." }
    ]
  },

  "Separation of Powers": {
    subject: "Government",
    title: "Separation of Powers and Checks and Balances",
    icon: "⚖️",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Separation of Powers", type: "text",
        content: "Separation of powers is the doctrine that the three arms of government (executive, legislature, judiciary) should be SEPARATE and INDEPENDENT. Proposed by MONTESQUIEU in 'The Spirit of Laws' (1748) — he argued separation prevents tyranny." },
      { heading: "Checks and Balances in Nigeria", type: "cards", items: [
        { title: "Executive checks Legislature", body: "President can VETO bills passed by the National Assembly. NA can override veto with 2/3 majority." },
        { title: "Legislature checks Executive", body: "Senate confirms presidential appointments. National Assembly can IMPEACH the President for gross misconduct." },
        { title: "Legislature checks Judiciary", body: "Senate confirms Supreme Court appointments. Legislature sets judicial budget." },
        { title: "Judiciary checks Legislature", body: "Can declare laws UNCONSTITUTIONAL and void (judicial review)." },
        { title: "Judiciary checks Executive", body: "Can nullify executive actions that violate the constitution or law." },
      ]},
      { heading: "Exam Questions", type: "cards", items: [
        { title: "Separation of powers propounded by:", body: "Baron de MONTESQUIEU. In 'The Spirit of Laws' (1748). Locke = natural rights. Rousseau = general will. Hobbes = Leviathan." },
        { title: "President withholding assent to a bill is called:", body: "VETO. National Assembly can override with 2/3 majority vote." },
        { title: "Impeachment is a check on:", body: "The EXECUTIVE. Legislature uses impeachment to remove the President for gross misconduct." },
        { title: "Judicial review is the power to:", body: "Declare laws unconstitutional and VOID. Most powerful check of judiciary on other arms." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Montesquieu = separation of powers. Dicey = rule of law. Bodin = sovereignty. Locke = social contract and natural rights. VETO = executive check on legislature. IMPEACHMENT = legislative check on executive. JUDICIAL REVIEW = judicial check on both." }
    ]
  },

  "Federal vs Unitary Systems": {
    subject: "Government",
    title: "Federal, Unitary and Confederate Systems",
    icon: "🗺️",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Federal System", type: "text",
        content: "Federalism is a system where power is constitutionally DIVIDED between a central government and component units (states/regions). Both levels have their own areas of authority guaranteed by the constitution. Examples: Nigeria, USA, Germany." },
      { heading: "Comparing the Three Systems", type: "cards", items: [
        { title: "Federalism features", body: "Written constitution, division of powers (exclusive/concurrent/residual), independent judiciary, bicameral legislature, revenue sharing. Both levels guaranteed by constitution." },
        { title: "Unitary system", body: "Power concentrated in CENTRAL government. Local governments SUBORDINATE — created, altered or abolished by the centre. Examples: UK, France, Ghana, Japan." },
        { title: "Confederate system", body: "Loose union of SOVEREIGN STATES coming together for specific purposes. Central body very weak — cannot directly enforce laws on citizens. Example: USA under Articles of Confederation (1781-1789)." },
        { title: "Nigeria's legislative lists", body: "EXCLUSIVE list: federal only (defence, currency, immigration). CONCURRENT list: both federal and state. RESIDUAL: states only." },
      ]},
      { heading: "Exam Questions", type: "cards", items: [
        { title: "NOT a feature of federalism:", body: "SINGLE CENTRALISED GOVERNMENT. That describes a UNITARY system. Written constitution, division of powers, independent judiciary — all federal features." },
        { title: "Exclusive list in Nigeria legislated by:", body: "FEDERAL GOVERNMENT ONLY. Defence, immigration, currency, foreign affairs. Concurrent = both levels. Residual = states." },
        { title: "In a unitary state, local governments:", body: "Created and controlled by the CENTRAL GOVERNMENT. No guaranteed constitutional powers unlike federal states." },
        { title: "A confederation is:", body: "Loose union of SOVEREIGN STATES retaining their sovereignty. Central body cannot directly enforce laws on citizens." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Federal: both levels guaranteed by constitution (Nigeria, USA). Unitary: centre dominant, locals subordinate (UK, Ghana). Confederate: states sovereign, centre weak (early USA). Exclusive list = federal ONLY. Concurrent = both. Residual = states only." }
    ]
  },

  "Democracy": {
    subject: "Government",
    title: "Democracy — Types, Features and Rule of Law",
    icon: "🗳️",
    estimatedTime: "3 min read",
    sections: [
      { heading: "What is Democracy?", type: "text",
        content: "Democracy is government of the people, by the people, for the people — Abraham Lincoln's definition from the Gettysburg Address, 1863. Political power ultimately rests with the PEOPLE." },
      { heading: "Types of Democracy", type: "cards", items: [
        { title: "Direct democracy", body: "Citizens participate DIRECTLY in decision-making. No representatives. Ancient Athens, Swiss referenda. Impractical for large modern states." },
        { title: "Representative democracy", body: "Citizens elect REPRESENTATIVES to make decisions on their behalf. Modern democracies — Nigeria, UK, USA. Most practical for large states." },
        { title: "Liberal democracy", body: "Representative democracy WITH protection of individual rights, rule of law, and limits on government power." },
        { title: "Social democracy", body: "Combines democratic politics with strong welfare state. Government provides healthcare, education. Scandinavian countries." },
      ]},
      { heading: "Conditions for Democracy", type: "cards", items: [
        { title: "Free and fair elections", body: "Regular elections where all eligible citizens can vote without coercion or manipulation." },
        { title: "Universal suffrage", body: "All adult citizens have the right to vote regardless of race, gender or class." },
        { title: "Rule of law (A.V. Dicey 1885)", body: "Supremacy of law, equality before the law, rights protected by courts. No one above the law." },
        { title: "Independent judiciary", body: "Courts free from political interference — can check executive and legislature." },
        { title: "Political parties (multiple)", body: "Competing parties giving voters REAL choice. ONE-PARTY RULE is NOT democracy." },
        { title: "Free press", body: "Media can report and criticise without censorship. The 'Fourth Estate'." },
      ]},
      { heading: "Exam Questions", type: "cards", items: [
        { title: "Lincoln defined democracy as:", body: "'Government of the people, by the people, for the people.' Gettysburg Address, 1863. Most tested definition." },
        { title: "Modern democracy mainly practised as:", body: "REPRESENTATIVE (indirect) democracy. Direct democracy impractical for large states." },
        { title: "NOT a condition for democracy:", body: "ONE-PARTY RULE. Democracy requires MULTIPLE parties. One-party rule is the antithesis of democracy." },
        { title: "Rule of Law developed by:", body: "A.V. DICEY, 1885. Three pillars: supremacy of law, equality before law, rights from courts not just written in constitution." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Lincoln = democracy definition (1863). Dicey = Rule of Law (1885). Montesquieu = separation of powers (1748). Democracy needs multiple parties. Modern democracies are REPRESENTATIVE not direct. One-party = dictatorship not democracy." }
    ]
  },

  "Pressure Groups": {
    subject: "Government",
    title: "Pressure Groups and the Mass Media",
    icon: "📢",
    estimatedTime: "2 min read",
    sections: [
      { heading: "What are Pressure Groups?", type: "text",
        content: "Pressure groups are organised groups that seek to INFLUENCE government policy WITHOUT seeking to control government themselves. They differ from political parties — parties want POWER; pressure groups want INFLUENCE." },
      { heading: "Types and Methods", type: "cards", items: [
        { title: "Sectional groups", body: "Represent specific sections of society. NLC (labour), NBA (lawyers), NMA (doctors), ASUU (university teachers), TUC." },
        { title: "Promotional/Cause groups", body: "Promote a particular cause — Amnesty International, environmental groups, human rights organisations." },
        { title: "Methods used", body: "Lobbying politicians, strikes and protests, media campaigns, litigation (court action), financial support to candidates." },
      ]},
      { heading: "The Mass Media", type: "cards", items: [
        { title: "Information", body: "Inform citizens about government activities, policies and decisions." },
        { title: "Watchdog (Fourth Estate)", body: "Expose corruption and government abuses. Called 'Fourth Estate' — unofficial check on the three branches." },
        { title: "Agenda setting", body: "Determine what issues the public discusses and considers important." },
        { title: "Political socialisation", body: "Shape political values, opinions and civic participation." },
      ]},
      { heading: "Exam Questions", type: "cards", items: [
        { title: "Difference between pressure group and political party:", body: "Pressure groups seek to INFLUENCE policy WITHOUT seeking political power. Parties contest elections to WIN government. NLC wants better wages — not to govern Nigeria." },
        { title: "Media called 'Fourth Estate' because:", body: "Powerful unofficial check on the three branches of government. Free press is essential to democracy." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Party = wants POWER (wins elections, forms government). Pressure group = wants INFLUENCE (lobbies those in power). NLC, NBA, NMA, ASUU = pressure groups. PDP, APC = political parties. This distinction appears almost every year." }
    ]
  },

  "UN and AU": {
    subject: "Government",
    title: "United Nations, African Union and ECOWAS",
    icon: "🌍",
    estimatedTime: "3 min read",
    sections: [
      { heading: "The United Nations", type: "text",
        content: "The UN was founded on October 24, 1945 after World War II, replacing the League of Nations (1919). Headquarters: New York, USA. Currently 193 member states." },
      { heading: "UN Principal Organs", type: "cards", items: [
        { title: "General Assembly", body: "All 193 member states. Each has ONE vote. Discusses all world issues. Resolutions are NOT binding — only recommendations." },
        { title: "Security Council", body: "15 members: 5 PERMANENT (USA, UK, France, Russia, China) + 10 rotating. VETO power for P5. Makes BINDING resolutions. Maintains international peace and security." },
        { title: "International Court of Justice (ICJ)", body: "Settles legal disputes between states. Headquarters: The Hague, Netherlands." },
        { title: "Secretariat", body: "Administrative arm. Headed by Secretary-General (António Guterres, Portugal)." },
      ]},
      { heading: "AU, ECOWAS and Commonwealth", type: "cards", items: [
        { title: "African Union (AU)", body: "Established July 9, 2002, replacing OAU (founded 1963). Headquarters: Addis Ababa, Ethiopia. Broader powers than OAU including intervention in member states." },
        { title: "ECOWAS", body: "Established by Treaty of Lagos, May 28, 1975. Headquarters: Abuja, Nigeria. 15 West African member states. ECOMOG = peacekeeping force." },
        { title: "Commonwealth", body: "56 member states, mostly former British territories. London HQ. Nigeria suspended 1995 (Abacha executed Ken Saro-Wiwa and Ogoni activists), readmitted 1999." },
      ]},
      { heading: "Exam Questions", type: "cards", items: [
        { title: "UN founded in:", body: "October 24, 1945. League of Nations = 1919 (after WWI). UN = 1945 (after WWII)." },
        { title: "UN organ with binding resolutions:", body: "SECURITY COUNCIL. General Assembly = recommendations only. P5 each have veto power." },
        { title: "AU replaced:", body: "Organisation of African Unity (OAU). OAU founded 1963, renamed AU on July 9, 2002." },
        { title: "ECOWAS established by:", body: "TREATY OF LAGOS, May 28, 1975. Nigeria drove its establishment. HQ: Abuja." },
        { title: "Nigeria suspended from Commonwealth in 1995 due to:", body: "Execution of Ken Saro-Wiwa and Ogoni activists by Abacha. Readmitted 1999 under Obasanjo." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "UN = 1945, New York, Security Council = BINDING decisions, 5 permanent members with veto. AU = July 9 2002, Addis Ababa, replaced OAU (1963). ECOWAS = May 28 1975, Treaty of Lagos, Abuja HQ, 15 members. Nigeria suspended from Commonwealth 1995, readmitted 1999." }
    ]
  },

  "Nigerian Presidents": {
    subject: "Government",
    title: "Nigerian Leaders and Constitutional History",
    icon: "🇳🇬",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Nigerian Constitutions Timeline", type: "cards", items: [
        { title: "Clifford 1922", body: "First constitution with elections. Lagos and Calabar got elected seats. Led to NNDP (Herbert Macaulay, 1923) — Nigeria's first political party." },
        { title: "Richards 1946", body: "Introduced regionalism — North, East, West. First time Nigeria treated as one political unit. Nationalists criticised it as unilaterally imposed." },
        { title: "Macpherson 1951", body: "Greater Nigerian participation in drafting. Introduced regional governments. Broke down when NPC walked out over self-government motion." },
        { title: "Lyttleton 1954", body: "Full federation established. Three regions became fully autonomous. Clear federal structure — building block for independence." },
        { title: "Independence 1960 + Republic 1963", body: "Independence October 1, 1960 (Balewa PM). Republic October 1, 1963 (Azikiwe = first President). Parliamentary system." },
        { title: "1979 + 1999 Constitutions", body: "1979: 2nd Republic, PRESIDENTIAL system introduced (Shagari). 1999: Current constitution, May 29, 4th Republic (Obasanjo)." },
      ]},
      { heading: "Key Leaders", type: "cards", items: [
        { title: "Tafawa Balewa", body: "First Prime Minister (1960-1966). Killed in first military coup, January 15, 1966." },
        { title: "Nnamdi Azikiwe", body: "First President (1963-1966). Ceremonial role — Balewa had executive power." },
        { title: "Yakubu Gowon", body: "Military head 1966-1975. Led Nigeria through Civil War (1967-1970). Overthrown 1975." },
        { title: "Murtala Muhammed", body: "Military head 1975-1976. Announced Abuja as new capital. Assassinated February 13, 1976." },
        { title: "Ibrahim Babangida", body: "Military ruler 1985-1993. Annulled June 12, 1993 election won by Abiola. Now Democracy Day." },
        { title: "Sani Abacha", body: "Military ruler 1993-1998. Executed Ken Saro-Wiwa 1995. Died in office June 8, 1998." },
      ]},
      { heading: "Exam Questions", type: "cards", items: [
        { title: "First constitution with elections:", body: "CLIFFORD 1922. Led to NNDP by Herbert Macaulay, 1923." },
        { title: "Nigeria became a Republic in:", body: "1963. Independence = 1960. Republic = October 1, 1963. Azikiwe = first President." },
        { title: "Introduced regionalism:", body: "RICHARDS Constitution 1946. Three regions: North, East, West." },
        { title: "First military coup:", body: "January 15, 1966. Led by Nzeogwu. Killed Balewa and Ahmadu Bello." },
        { title: "June 12, 1993 election annulled by:", body: "IBRAHIM BABANGIDA. Abiola of SDP won. Now Democracy Day." },
        { title: "Nigeria's first President:", body: "NNAMDI AZIKIWE. Ceremonial role. Balewa was Prime Minister with executive power." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Clifford 1922=elections. Richards 1946=regionalism. Lyttleton 1954=federation. Independence=1960 parliamentary. Republic=1963. 1979=presidential. 1999=current. Civil War=1967-1970. June 12 annulled by Babangida. First coup=January 15 1966." }
    ]
  },

  // ==========================================
  // CHEMISTRY — NEW CALCULATION ENTRIES
  // ==========================================

  "Gas Laws Calculations": {
    subject: "Chemistry",
    title: "Gas Laws — Worked Calculations",
    icon: "💨",
    estimatedTime: "4 min read",
    sections: [
      { heading: "Key Formulas", type: "cards", items: [
        { title: "Boyle's Law (constant T)", body: "P₁V₁ = P₂V₂. Pressure × Volume = constant. When pressure doubles, volume halves." },
        { title: "Charles' Law (constant P)", body: "V₁/T₁ = V₂/T₂. ALWAYS convert °C to Kelvin (add 273) before using." },
        { title: "Combined Gas Law", body: "P₁V₁/T₁ = P₂V₂/T₂. Use when both pressure and temperature change." },
        { title: "Graham's Law of Diffusion", body: "Rate ∝ 1/√(vapour density). Rate_A/Rate_B = √(VD_B/VD_A). Lighter gas diffuses faster." },
      ]},
      { heading: "Worked Example — Graham's Law", type: "steps", items: [
        "30cm³ of oxygen diffuses in 7 seconds. How long for 60cm³ of chlorine? (VD: O₂=16, Cl₂=36)",
        "Step 1: Rate_O₂/Rate_Cl₂ = √(VD_Cl₂/VD_O₂) = √(36/16) = 6/4 = 3/2",
        "Step 2: Rate_Cl₂ = (2/3) × (30/7) = 20/7 cm³/s",
        "Step 3: Time for 60cm³ = 60 ÷ (20/7) = 60 × 7/20 = 21 seconds",
        "Answer: 21 seconds. Cl₂ is heavier so it diffuses SLOWER."
      ]},
      { heading: "Worked Example — Charles' Law", type: "steps", items: [
        "Gas occupies 2dm³, heated at constant pressure to expand to 6dm³. Ratio T_initial:T_final?",
        "Charles' Law: V₁/T₁ = V₂/T₂. Rearrange: T₁/T₂ = V₁/V₂ = 2/6 = 1:3",
        "Answer: T_initial:T_final = 1:3. Temperature must triple to triple the volume."
      ]},
      { heading: "Exam Questions", type: "cards", items: [
        { title: "Increasing pressure of a gas:", body: "INCREASES DENSITY. Same mass compressed into smaller volume = higher density. Volume decreases. KE depends on temperature not pressure." },
        { title: "Why gas collisions are elastic:", body: "NO LOSS OF ENERGY after collision. Kinetic energy is conserved. Total momentum also conserved." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Graham's Law: heavier gas diffuses SLOWER. Rate ratio = square root of OPPOSITE VD ratio. Boyle: P up → V down. Charles: T up → V up. ALWAYS use Kelvin for Charles' Law and combined gas law — never Celsius." }
    ]
  },

  "Mole Calculations": {
    subject: "Chemistry",
    title: "Mole Calculations — Worked Examples",
    icon: "⚗️",
    estimatedTime: "4 min read",
    sections: [
      { heading: "Key Formulas", type: "cards", items: [
        { title: "Moles from mass", body: "Moles = mass ÷ molar mass. e.g. 0.9g Al (M=27): moles = 0.9÷27 = 1/30 mol." },
        { title: "Particles from moles", body: "Particles = moles × 6.02×10²³. e.g. 1/30 mol × 6×10²³ = 2×10²² atoms." },
        { title: "Volume at STP", body: "1 mole of any gas = 22.4 dm³ at STP. Moles = volume(dm³) ÷ 22.4." },
        { title: "Percentage composition", body: "% = (mass of part ÷ total molar mass) × 100." },
      ]},
      { heading: "Worked Example 1 — Atoms in a Sample", type: "steps", items: [
        "How many atoms in 0.9g of aluminium? (Al=27)",
        "Moles of Al = 0.9 ÷ 27 = 1/30 mol",
        "Number of atoms = (1/30) × 6×10²³ = 2×10²² atoms",
        "Answer: 2.0×10²² atoms."
      ]},
      { heading: "Worked Example 2 — % Water of Crystallisation", type: "steps", items: [
        "Find % water of crystallisation in CuSO₄·5H₂O (Cu=64, S=32, O=16, H=1)",
        "Molar mass = 64 + 32 + (4×16) + (5×18) = 64+32+64+90 = 250 g/mol",
        "Mass of water = 5×18 = 90g",
        "% water = (90÷250)×100 = 36%",
        "Answer: 36%."
      ]},
      { heading: "Worked Example 3 — Empirical Formula", type: "steps", items: [
        "An oxide of nitrogen: 30.4% nitrogen. Find empirical formula. (N=14, O=16)",
        "N = 30.4%, O = 69.6%",
        "Mole ratio: N = 30.4÷14 = 2.17, O = 69.6÷16 = 4.35",
        "Divide by smallest: N = 1, O = 4.35÷2.17 = 2",
        "Empirical formula = NO₂."
      ]},
      { heading: "Worked Example 4 — Combustion Volumes", type: "steps", items: [
        "Minimum oxygen for complete combustion of 20cm³ CO + 20cm³ H₂?",
        "2CO + O₂ → 2CO₂: ratio 2:1, so 20cm³ CO needs 10cm³ O₂",
        "2H₂ + O₂ → 2H₂O: ratio 2:1, so 20cm³ H₂ needs 10cm³ O₂",
        "Total O₂ = 10 + 10 = 20cm³",
        "Answer: 20cm³."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Always: (1) write balanced equation, (2) find mole ratio, (3) calculate. CuSO₄·5H₂O = 250 g/mol, 36% water. 0.9g Al = 2×10²² atoms. Empirical formula: divide by smallest mole ratio. These calculations appear every year." }
    ]
  },

  "Titration Calculations": {
    subject: "Chemistry",
    title: "Titration and Concentration Calculations",
    icon: "🧪",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Key Formula", type: "text",
        content: "C_A × V_A / n_A = C_B × V_B / n_B. Where C = concentration (mol/dm³), V = volume, n = mole ratio from balanced equation. Convert cm³ to dm³ by dividing by 1000." },
      { heading: "Worked Example 1 — Volume of Base Needed", type: "steps", items: [
        "What volume of 0.5M NaOH neutralises 10cm³ of 1.25M H₂SO₄?",
        "Equation: H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O. Mole ratio 1:2.",
        "Moles H₂SO₄ = 1.25 × (10/1000) = 0.0125 mol",
        "Moles NaOH needed = 2 × 0.0125 = 0.025 mol",
        "Volume NaOH = 0.025 ÷ 0.5 = 0.05 dm³ = 50 cm³",
        "Answer: 50cm³."
      ]},
      { heading: "Worked Example 2 — Concentration from Mass", type: "steps", items: [
        "Find concentration of 5.3g AgNO₃ in 50cm³ solution. (Ag=108, N=14, O=16)",
        "Molar mass AgNO₃ = 108+14+(3×16) = 170 g/mol",
        "Moles = 5.3 ÷ 170 = 0.0312 mol",
        "Volume = 50 ÷ 1000 = 0.05 dm³",
        "Concentration = 0.0312 ÷ 0.05 = 0.623 mol/dm³",
        "Answer: 0.623 mol/dm³."
      ]},
      { heading: "Worked Example 3 — Heat of Reaction", type: "steps", items: [
        "1.1g CaCl₂ in 50cm³ water, temperature rises 3.4°C. Find ΔH. (CaCl₂ M=111)",
        "Q = mcΔT = 50 × 4.18 × 3.4 = 710J",
        "Moles = 1.1 ÷ 111 = 0.0099 mol",
        "ΔH = -Q/moles = -710 ÷ 0.0099 = -71,700 J/mol = -71.1 kJ/mol",
        "Negative because exothermic (temperature rose). Answer: -71.1 kJ/mol."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "For titration: write balanced equation first to get mole ratio. H₂SO₄ is DIBASIC (mole ratio 1:2 with NaOH). Q=mcΔT: use mass of solution (not solute), c=4.18 J/g°C for water. Negative ΔH = exothermic (temperature rose)." }
    ]
  },

  "Faraday Calculations": {
    subject: "Chemistry",
    title: "Faraday's Laws — Electrolysis Calculations",
    icon: "⚡",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Key Formulas", type: "cards", items: [
        { title: "Charge", body: "Q = I × t (current in amperes, time in SECONDS). Q in coulombs." },
        { title: "Moles of electrons", body: "Moles e⁻ = Q ÷ F = (I×t) ÷ 96500." },
        { title: "Moles deposited", body: "Moles deposited = moles e⁻ ÷ charge on ion. Cu²⁺ needs 2e⁻, Ag⁺ needs 1e⁻, Al³⁺ needs 3e⁻." },
        { title: "Electrochemical equivalent", body: "Z = mass deposited ÷ charge (Q). M = ZIt." },
      ]},
      { heading: "Worked Example 1 — Electricity for 64g Copper", type: "steps", items: [
        "How much electricity deposits 64g copper from CuCl₂? (Cu=64, F=96500C)",
        "Cu²⁺ + 2e⁻ → Cu. Each Cu needs 2 electrons.",
        "64g Cu = 1 mole Cu → needs 2 moles of electrons",
        "Charge = 2 × 96500 = 193,000C = 1.93×10⁵C",
        "Answer: 1.93×10⁵C."
      ]},
      { heading: "Worked Example 2 — Partial Faraday", type: "steps", items: [
        "0.1 Faraday through copper(II) solution. Mass of copper deposited?",
        "Cu²⁺ + 2e⁻ → Cu. 2 Faradays deposits 64g of copper.",
        "0.1 Faraday deposits = 64 × (0.1÷2) = 64 × 0.05 = 3.2g",
        "Answer: 3.2g."
      ]},
      { heading: "Worked Example 3 — Electrochemical Equivalent", type: "steps", items: [
        "Cathode weighs 5g. After 5A for 50s, weighs 5.01g. Find Z.",
        "Mass deposited = 5.01 - 5 = 0.01g",
        "Charge Q = 5 × 50 = 250 coulombs",
        "Z = 0.01 ÷ 250 = 0.00004 g/C = 4×10⁻⁵ g/C",
        "Answer: 4×10⁻⁵ g/C."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Cu²⁺ needs 2e⁻. Al³⁺ needs 3e⁻. Ag⁺ needs 1e⁻. Always identify ion charge first. 1 Faraday = 96500C = 1 mole electrons. CATHODE = reduction = metal deposits. ANODE = oxidation. Memory: An Ox, Red Cat." }
    ]
  },

  "Oxidation States Calculations": {
    subject: "Chemistry",
    title: "Oxidation States — Rules and Worked Examples",
    icon: "🔢",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Rules for Oxidation States", type: "cards", items: [
        { title: "Free element", body: "Oxidation state = 0. Na(s), O₂, Fe = all zero." },
        { title: "Oxygen in compounds", body: "Usually -2. Exception: peroxides = -1. In F₂O = +2." },
        { title: "Hydrogen in compounds", body: "Usually +1. Exception: metal hydrides (NaH) = -1." },
        { title: "In neutral compound", body: "Sum of all oxidation states = 0." },
        { title: "In ion", body: "Sum of oxidation states = charge of the ion." },
      ]},
      { heading: "Worked Example 1 — KMnO₄", type: "steps", items: [
        "Find oxidation state of Mn in KMnO₄.",
        "K = +1, O = -2 each. Equation: +1 + Mn + 4(-2) = 0",
        "1 + Mn - 8 = 0 → Mn = +7",
        "Answer: Mn = +7."
      ]},
      { heading: "Worked Example 2 — KClO₃", type: "steps", items: [
        "Find oxidation state of Cl in KClO₃.",
        "K = +1, O = -2 each. Equation: +1 + Cl + 3(-2) = 0",
        "1 + Cl - 6 = 0 → Cl = +5",
        "Answer: Cl = +5."
      ]},
      { heading: "Worked Example 3 — Balancing Redox", type: "steps", items: [
        "In Cr₂O₇²⁻ + 8H⁺ + ne⁻ → 2Cr³⁺ + 4H₂O. Find n.",
        "Cr in Cr₂O₇²⁻ = +6. Cr in Cr³⁺ = +3.",
        "Change per Cr = 6 - 3 = 3 electrons gained.",
        "Two Cr atoms: total = 3 × 2 = 6 electrons.",
        "Answer: n = 6."
      ]},
      { heading: "Exam Questions", type: "cards", items: [
        { title: "Oxidising agent in H₂S + Br₂ → 2HBr + S:", body: "Br₂. Br₂ is REDUCED (Br: 0 → -1). The oxidising agent = substance that gets REDUCED." },
        { title: "In Zn + Cu²⁺ → Zn²⁺ + Cu:", body: "Zn is the REDUCING AGENT. Zn is OXIDISED (0→+2). The reducing agent = substance that gets OXIDISED." },
        { title: "Oxidation is:", body: "LOSS of electrons. OIL RIG: Oxidation Is Loss, Reduction Is Gain." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "KMnO₄: Mn = +7. K₂Cr₂O₇: Cr = +6. These two appear almost every year. OIL RIG. OXIDISING agent gets REDUCED. REDUCING agent gets OXIDISED. These sound backwards — memorise the rule." }
    ]
  },

  "Organic Reactions": {
    subject: "Chemistry",
    title: "Organic Reactions — Types and Named Processes",
    icon: "🧪",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Types of Organic Reactions", type: "cards", items: [
        { title: "Substitution", body: "One atom/group REPLACES another. Alkanes + halogens in UV light. Benzene also undergoes substitution despite double bonds." },
        { title: "Addition", body: "Two molecules COMBINE to form one. Alkenes and alkynes. Alkene + Br₂ → dibromoalkane (decolourises bromine water)." },
        { title: "Elimination", body: "Small molecule REMOVED to form double bond. Dehydration of alcohols → alkene." },
        { title: "Saponification", body: "Fat + NaOH → SOAP + GLYCEROL. By-product = glycerol. NaCl salts out the soap from glycerol solution." },
        { title: "Esterification", body: "Carboxylic acid + alcohol → ester + water. Conc. H₂SO₄ = CATALYST (primary role). Reversible." },
      ]},
      { heading: "Key Rule", type: "text",
        content: "Alkanes → SUBSTITUTION. Alkenes → ADDITION. Aromatic (benzene) → SUBSTITUTION (not addition — the ring is stabilised). Carbonyl compounds (C=O in aldehydes/ketones) → ADDITION. This rule is tested repeatedly." },
      { heading: "Dehydration Temperatures", type: "cards", items: [
        { title: "140°C with conc H₂SO₄", body: "Two alcohol molecules join → DIETHYL ETHER. Intermolecular dehydration." },
        { title: "170°C with conc H₂SO₄", body: "One alcohol molecule loses water → ETHENE (alkene). Intramolecular dehydration." },
        { title: "Oxidation of alcohols", body: "Primary → aldehyde → carboxylic acid. Secondary → KETONE. Tertiary → NOT easily oxidised. Butan-2-ol (secondary) → butan-2-ONE." },
        { title: "Photochlorination of ethanoic acid", body: "CH₃COOH + Cl₂ (UV) → ClCH₂COOH + HCl. Cl replaces H on methyl group → chloroethanoic acid." },
      ]},
      { heading: "Exam Questions", type: "cards", items: [
        { title: "Benzene undergoes:", body: "SUBSTITUTION. Not addition — stable aromatic ring preserved by substitution reactions." },
        { title: "Role of conc H₂SO₄ in esterification:", body: "CATALYST. Primary role is catalyst (also dehydrating agent but catalyst is the answer)." },
        { title: "By-product of soap making:", body: "GLYCEROL. Fat + NaOH → soap + glycerol. NaCl salts out the soap." },
        { title: "Excess ethanol at 145°C with conc H₂SO₄:", body: "DIETHYL ETHER. Two molecules join at ~140°C. At 170°C = ethene (one molecule dehydrated)." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "140°C = ether, 170°C = ethene. Secondary alcohol → ketone (not acid). Soap by-product = glycerol. Benzene = substitution always. These reaction types and temperatures appear repeatedly in UNIBEN papers." }
    ]
  },

  "Hybridisation": {
    subject: "Chemistry",
    title: "Hybridisation and Molecular Shapes",
    icon: "🔬",
    estimatedTime: "2 min read",
    sections: [
      { heading: "What is Hybridisation?", type: "text",
        content: "Hybridisation describes how atomic orbitals mix to form new hybrid orbitals. Carbon's shape depends on whether it forms single, double or triple bonds." },
      { heading: "Types of Hybridisation", type: "cards", items: [
        { title: "sp³ hybridisation", body: "4 single bonds. TETRAHEDRAL shape (109.5°). Examples: methane (CH₄), ethane, all saturated alkanes, water (O), ammonia (N)." },
        { title: "sp² hybridisation", body: "3 bonds including ONE double bond. TRIGONAL PLANAR (120°). Examples: ethene (CH₂=CH₂), propene, benzene, carbonyl compounds." },
        { title: "sp hybridisation", body: "2 bonds including ONE triple bond. LINEAR (180°). Examples: ethyne (HC≡CH), propyne, CO₂, HCN." },
      ]},
      { heading: "Exam Questions", type: "cards", items: [
        { title: "Hybridisation of carbon in ethyne:", body: "SP (linear). Ethyne HC≡CH has triple bond. sp = 2 regions of electron density = linear." },
        { title: "Hybridisation of carbon in propene:", body: "sp². Propene has double bond between C2 and C3. The CH₃ carbon is sp³." },
        { title: "sp³ hybridisation gives:", body: "TETRAHEDRAL shape. Bond angle ~109.5°. 4 equivalent bonds." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Count electron regions on carbon: 4 single bonds = sp³ (tetrahedral). Double bond = sp² (trigonal planar). Triple bond = sp (linear). Or remember: sp = linear, sp² = flat triangle, sp³ = 3D tetrahedron." }
    ]
  },

  "Atomic Structure Calculations": {
    subject: "Chemistry",
    title: "Atomic Structure — Worked Calculations",
    icon: "⚛️",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Key Formulas", type: "cards", items: [
        { title: "Neutrons", body: "Neutrons = Mass number - Atomic number. ²³⁸₉₂U: neutrons = 238-92 = 146." },
        { title: "Isotope percentage", body: "Mean mass = (% × mass₁ + % × mass₂) ÷ 100. Set up equation and solve for unknown %." },
        { title: "Electronic configuration", body: "Fill shells: 1s²2s²2p⁶3s²3p⁶4s²3d... Hund's rule: fill orbitals singly before pairing." },
      ]},
      { heading: "Worked Example 1 — Neutrons in ²³⁸U", type: "steps", items: [
        "Find number of neutrons in ²³⁸₉₂U.",
        "Neutrons = Mass number - Atomic number = 238 - 92 = 146.",
        "Answer: 146."
      ]},
      { heading: "Worked Example 2 — Chlorine Isotope Percentage", type: "steps", items: [
        "Chlorine isotopes ³⁵Cl and ³⁷Cl. Mean atomic mass = 35.5. Find % of ³⁵Cl.",
        "Let % of ³⁵Cl = x, so % of ³⁷Cl = (100-x)",
        "35.5 = [35x + 37(100-x)] ÷ 100",
        "3550 = 35x + 3700 - 37x",
        "3550 = 3700 - 2x → 2x = 150 → x = 75%",
        "Answer: 75% ³⁵Cl, 25% ³⁷Cl."
      ]},
      { heading: "Worked Example 3 — Unpaired Electrons", type: "steps", items: [
        "Configuration 1s²2s²2p⁶3s²3p³. How many unpaired electrons?",
        "The 3p subshell has 3 orbitals and 3 electrons.",
        "By Hund's rule: one electron in each orbital before pairing.",
        "All 3 p electrons are UNPAIRED.",
        "Answer: 3 unpaired electrons."
      ]},
      { heading: "Exam Questions", type: "cards", items: [
        { title: "Element X: 127 neutrons, 82 electrons. Atomic number?", body: "82. Atomic number = electrons = 82. Mass number = 82+127 = 209." },
        { title: "Elements P(6e), Q(11e), R(15e), S(17e). Ionic bond with S?", body: "Q (2,8,1 = metal-like). Metal + non-metal = ionic bond. S has config 2,8,7 (non-metal)." },
        { title: "Atomic radius order for Li, Be, B, C:", body: "C < B < Be < Li. Radius DECREASES left to right across a period." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Neutrons = A - Z. Atomic number = electrons (neutral atom). Chlorine: 75% ³⁵Cl, 25% ³⁷Cl → mean = 35.5. Hund's rule: fill singly first. Atomic radius DECREASES across a period (left to right). These calculations appear every single year." }
    ]
  },

  // ============================================================
// STUDY GUIDES ADDITIONS — BATCH 2
// Physics, Mathematics and English Language
// Paste these entries into STUDY_GUIDES in src/data/studyGuides.js
// Add after existing entries (before the closing })
// ============================================================

  // ==========================================
  // PHYSICS — NEW CALCULATION ENTRIES
  // ==========================================

  "Dimensions and Units": {
    subject: "Physics",
    title: "Dimensions and Units — MLT System",
    icon: "📐",
    estimatedTime: "3 min read",
    sections: [
      { heading: "What Are Dimensions?", type: "text",
        content: "Dimensions describe the physical nature of a quantity in terms of Mass (M), Length (L) and Time (T). They are different from units. Units tell you the scale (kg, m, s). Dimensions tell you the TYPE of quantity." },
      { heading: "Key Dimension Derivations", type: "cards", items: [
        { title: "Force", body: "F = ma. Acceleration = LT⁻². Force = M × LT⁻² = MLT⁻²." },
        { title: "Pressure", body: "P = F/Area. Force = MLT⁻². Area = L². Pressure = MLT⁻²/L² = ML⁻¹T⁻²." },
        { title: "Energy/Work", body: "W = F × d = MLT⁻² × L = ML²T⁻². Energy, work, heat, torque all share ML²T⁻²." },
        { title: "Power", body: "P = Work/Time = ML²T⁻²/T = ML²T⁻³." },
        { title: "Young's Modulus", body: "Stress/Strain. Stress = Force/Area = ML⁻¹T⁻². Strain is dimensionless. Young's modulus = ML⁻¹T⁻². So X=1, Y=-1, Z=-2." },
        { title: "Momentum", body: "p = mv = M × LT⁻¹ = MLT⁻¹. Impulse = Force × time = MLT⁻² × T = MLT⁻¹ (same)." },
      ]},
      { heading: "Exam Questions", type: "cards", items: [
        { title: "Dimensions of Young's modulus M^X L^Y T^Z. Find X,Y,Z:", body: "X=1, Y=-1, Z=-2. Answer: (A). Young's modulus = ML⁻¹T⁻². Same as pressure." },
        { title: "Dimension of Power:", body: "ML²T⁻³. Answer: (C). Power = Work/Time = ML²T⁻²/T = ML²T⁻³." },
        { title: "Which pair has equivalent units?", body: "Work done and moment (torque). Answer: (A). Both = Force × distance = N·m = J. Same dimensions ML²T⁻²." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Work, Energy, Heat and Torque all have dimensions ML²T⁻². Pressure and Young's modulus both have ML⁻¹T⁻². Power = ML²T⁻³. Momentum = MLT⁻¹. These four facts cover 90% of dimension questions." }
    ]
  },

  "Equations of Motion": {
    subject: "Physics",
    title: "Equations of Motion — Worked Calculations",
    icon: "🚀",
    estimatedTime: "4 min read",
    sections: [
      { heading: "The Four Equations", type: "cards", items: [
        { title: "v = u + at", body: "Final velocity = initial velocity + (acceleration × time)." },
        { title: "s = ut + ½at²", body: "Displacement = initial velocity × time + half × acceleration × time²." },
        { title: "v² = u² + 2as", body: "Use when time is not given or needed." },
        { title: "s_n = u + a(n - ½)", body: "Distance in the nth second specifically. Very commonly tested." },
      ]},
      { heading: "Worked Example 1 — Distance in nth Second", type: "steps", items: [
        "Body starts from rest, acceleration 8m/s². Find distance in the 8th second.",
        "Formula: s_n = u + a(n - ½)",
        "u = 0 (starts from rest), a = 8, n = 8",
        "s_8 = 0 + 8(8 - 0.5) = 8 × 7.5 = 60m",
        "Answer: 60m. (D)"
      ]},
      { heading: "Worked Example 2 — Retardation", type: "steps", items: [
        "Car retarded from 90km/h to rest in 10s. Find acceleration.",
        "Convert: u = 90 × 1000/3600 = 25 m/s. v = 0.",
        "a = (v - u)/t = (0 - 25)/10 = -2.5 m/s²",
        "Negative = deceleration (retardation).",
        "Answer: -2.5 m/s². (C)"
      ]},
      { heading: "Worked Example 3 — Free Fall", type: "steps", items: [
        "Orange falls from 20m height. Time to reach ground? (g = 10m/s²)",
        "s = ut + ½gt². u = 0 (falls from rest).",
        "20 = 0 + ½ × 10 × t²",
        "t² = 4, t = 2 seconds.",
        "Answer: 2.0s. (A)"
      ]},
      { heading: "Projectile Motion", type: "cards", items: [
        { title: "Maximum range at:", body: "45° to the horizontal. Fixed rule — always 45° for maximum range." },
        { title: "Horizontal component", body: "vx = u·cosθ (constant — no acceleration horizontally)." },
        { title: "Vertical component", body: "vy = u·sinθ - gt (changes with time due to gravity)." },
        { title: "Projectile at 60m/s, 30°, after 2s (g=10):", body: "vx = 60cos30° = 30√3. vy = 60sin30° - 20 = 10. Resultant = √(2700+100) = √2800 = 20√7 m/s." },
      ]},
      { heading: "Velocity-Time Graphs", type: "cards", items: [
        { title: "Gradient of v-t graph", body: "= Acceleration (or retardation if negative slope)." },
        { title: "Area under v-t graph", body: "= Distance travelled. Cannot find work, power or pressure from v-t graph." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "s_n = u + a(n - ½) is the formula for distance in the nth second ONLY. For total distance use s = ut + ½at². Always convert km/h to m/s (÷3.6). Maximum projectile range = 45°. Free fall: u=0, a=g=10m/s²." }
    ]
  },

  "Machines Calculations": {
    subject: "Physics",
    title: "Machines — VR, MA and Efficiency Calculations",
    icon: "⚙️",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Key Formulas", type: "cards", items: [
        { title: "Velocity Ratio (VR)", body: "VR = distance moved by effort ÷ distance moved by load. Fixed by design of the machine." },
        { title: "Mechanical Advantage (MA)", body: "MA = Load ÷ Effort. Actual ratio of load lifted to effort applied." },
        { title: "Efficiency", body: "Efficiency = (MA/VR) × 100% = (Work output/Work input) × 100%." },
        { title: "Finding Effort or Load", body: "MA = Efficiency × VR. Then Load = MA × Effort. Or Effort = Load/MA." },
      ]},
      { heading: "Worked Example 1 — Find Load", type: "steps", items: [
        "Machine: efficiency 60%, VR = 5, effort = 500N. Find load P.",
        "Step 1: MA = Efficiency × VR = 0.60 × 5 = 3",
        "Step 2: MA = Load/Effort → Load = MA × Effort = 3 × 500 = 1500N",
        "Answer: 1500N. (D)"
      ]},
      { heading: "Worked Example 2 — Screw Jack VR", type: "steps", items: [
        "Screw jack: pitch 4mm, handle radius 21cm (π=22/7). Find VR.",
        "Distance effort moves (one full turn) = 2πr = 2 × (22/7) × 21 = 132cm",
        "Distance load moves (one turn) = pitch = 4mm = 0.4cm",
        "VR = 132 ÷ 0.4 = 330",
        "Answer: 330. (D)"
      ]},
      { heading: "Exam Questions", type: "cards", items: [
        { title: "Machine 800J input raises load through 1m with VR=6. Efficiency?", body: "If load=640N: Work output=640J. Efficiency=640/800×100=80%. Answer: (C)." },
        { title: "VR=5, efficiency=75%. Effort to lift 10N load?", body: "MA=0.75×5=3.75. Effort=10/3.75=2.67N. Always use: Effort=Load/MA." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Three-step method: (1) Find MA = Efficiency × VR. (2) Load = MA × Effort OR Effort = Load/MA. (3) VR of screw = circumference ÷ pitch. Always convert mm to cm or cm to m — keep units consistent." }
    ]
  },

  "Pendulum and SHM": {
    subject: "Physics",
    title: "Simple Pendulum — Period Calculations",
    icon: "🕰️",
    estimatedTime: "2 min read",
    sections: [
      { heading: "Pendulum Formula", type: "text",
        content: "Period of a simple pendulum: T = 2π√(L/g). The period depends ONLY on length and g — NOT on mass and NOT on amplitude (for small angles)." },
      { heading: "Key Rules", type: "cards", items: [
        { title: "T depends on:", body: "LENGTH of pendulum and GRAVITY only. NOT mass, NOT amplitude." },
        { title: "T ∝ √L", body: "If length doubles: T increases by factor √2. If length quadruples: T doubles." },
        { title: "Comparing two pendulums", body: "T₁/T₂ = √(L₁/L₂). Rearrange: T₂ = T₁ × √(L₂/L₁)." },
      ]},
      { heading: "Worked Example 1", type: "steps", items: [
        "Pendulum has period 1.2s when length = 40cm. Find period when length = 90cm.",
        "T₂ = T₁ × √(L₂/L₁) = 1.2 × √(90/40) = 1.2 × √2.25 = 1.2 × 1.5 = 1.8s",
        "Answer: 1.8s. (C)"
      ]},
      { heading: "Worked Example 2", type: "steps", items: [
        "Pendulum has period 2.0s. Length is doubled. Find new period.",
        "T₂ = T₁ × √(L₂/L₁) = 2.0 × √(2L/L) = 2.0 × √2 = 2.0 × 1.414 = 2.83s",
        "Answer: 2.83s. (D)"
      ]},
      { heading: "Circular Motion", type: "cards", items: [
        { title: "Angular velocity", body: "ω = 2πf = 2π/T. Unit: rad/s." },
        { title: "Centripetal force", body: "F = mv²/r = mω²r. Always directed TOWARDS the centre." },
        { title: "1000kg car, radius 30m, velocity 9m/s:", body: "F = mv²/r = 1000×81/30 = 2700N." },
        { title: "Stone 35cm rope, 15 rev in 4s:", body: "f = 15/4 = 3.75 rev/s. ω = 2π×3.75 = 23.6 rad/s." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Pendulum shortcut: T ratio = square root of length ratio. Double length → multiply T by √2 (≈1.41). Quadruple length → double T. T does NOT change if you change the mass or swing angle (for small angles)." }
    ]
  },

  "Archimedes Principle Calculations": {
    subject: "Physics",
    title: "Archimedes' Principle — Upthrust Calculations",
    icon: "🌊",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Key Formulas", type: "cards", items: [
        { title: "Upthrust", body: "Upthrust = Weight of fluid displaced = ρ_fluid × V_submerged × g." },
        { title: "Floating condition", body: "Weight of object = Upthrust. Object floats when weight = weight of fluid displaced." },
        { title: "Relative density", body: "RD = Weight in air ÷ (Weight in air − Weight in water) = Upthrust in liquid ÷ Upthrust in water." },
      ]},
      { heading: "Worked Example 1 — Relative Density of Liquid", type: "steps", items: [
        "Stone weighs 80g in air, 50g in water, 65g in liquid Y. Find relative density of Y.",
        "Upthrust in water = 80 − 50 = 30g",
        "Upthrust in Y = 80 − 65 = 15g",
        "RD of Y = Upthrust in Y ÷ Upthrust in water = 15/30 = 0.5",
        "Answer: 0.5. (C)"
      ]},
      { heading: "Worked Example 2 — Floating Sphere", type: "steps", items: [
        "Plastic sphere floats in water (ρ=1000) with 0.5 volume submerged. Floats in oil with 0.4 submerged. Find density of oil.",
        "In water: ρ_sphere × V = ρ_water × 0.5V → ρ_sphere = 500 kg/m³",
        "In oil: ρ_sphere × V = ρ_oil × 0.4V",
        "500 = ρ_oil × 0.4 → ρ_oil = 500/0.4 = 1250 kg/m³",
        "Answer: 1250 kg/m³. (C)"
      ]},
      { heading: "Worked Example 3 — Loss in Weight", type: "steps", items: [
        "Object relative density 9, weighs 25N when completely immersed. Find loss in weight.",
        "RD = W_air/Upthrust = W_air/Loss",
        "W_air − Loss = 25N (weight when immersed)",
        "W_air(1 − 1/9) = 25 → W_air × 8/9 = 25 → W_air = 28.125N",
        "Loss = 28.125/9 ≈ 3.1N",
        "Answer: 3.1N. (C)"
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Upthrust always = weight of FLUID displaced (not weight of object). Floating = weight equals upthrust. RD = weight in air ÷ loss in water. Denser liquid = more upthrust per unit volume submerged." }
    ]
  },

  "Optics Calculations": {
    subject: "Physics",
    title: "Mirrors and Lenses — Formula Calculations",
    icon: "🔭",
    estimatedTime: "4 min read",
    sections: [
      { heading: "Key Formulas", type: "cards", items: [
        { title: "Mirror/lens formula", body: "1/f = 1/v + 1/u. Real is positive convention." },
        { title: "Magnification", body: "m = v/u. If m>1 = magnified. If m<1 = diminished." },
        { title: "Refraction (Snell's Law)", body: "n₁sinθ₁ = n₂sinθ₂. n = sin(incident)/sin(refracted)." },
        { title: "Critical angle", body: "sinC = 1/n. Used when light goes from dense to less dense medium." },
        { title: "Real depth/apparent depth", body: "n = real depth ÷ apparent depth." },
        { title: "Power of lens", body: "P = 1/f (f in metres). Unit: dioptres (D)." },
      ]},
      { heading: "Worked Example 1 — Concave Mirror", type: "steps", items: [
        "Object 20cm from concave mirror, radius of curvature 30cm. Describe image.",
        "f = R/2 = 30/2 = 15cm",
        "1/v = 1/f − 1/u = 1/15 − 1/20 = 4/60 − 3/60 = 1/60",
        "v = 60cm (positive = REAL image). m = 60/20 = 3 (magnified).",
        "Image is real, magnified and inverted. Answer: (A)"
      ]},
      { heading: "Worked Example 2 — Convex Mirror", type: "steps", items: [
        "Object 18cm in front of convex mirror, image 6cm behind mirror. Find focal length.",
        "u = +18. v = −6 (virtual image, behind mirror).",
        "1/f = 1/v + 1/u = 1/(−6) + 1/18 = −3/18 + 1/18 = −2/18 = −1/9",
        "f = −9cm (negative confirms convex mirror).",
        "Answer: −9.0cm. (D)"
      ]},
      { heading: "Worked Example 3 — Refractive Index", type: "steps", items: [
        "Water appears 12m deep when viewed from above. Refractive index = 4/3. Find real depth.",
        "n = real depth ÷ apparent depth",
        "4/3 = real depth ÷ 12",
        "Real depth = 12 × 4/3 = 16m.",
        "Answer: 16m. (A)"
      ]},
      { heading: "Critical Angle and Eye Defects", type: "cards", items: [
        { title: "Refractive index √2. Critical angle?", body: "sinC = 1/√2 = 0.707. C = 45°. Answer: (A)." },
        { title: "Polarising angle 49°. Refractive index?", body: "Brewster's Law: n = tan(49°) = 1.15. Answer: (A)." },
        { title: "Myopia (short-sighted):", body: "Eyeball too long. Rays focus IN FRONT of retina. Corrected by CONCAVE (diverging) lens." },
        { title: "Hypermetropia (long-sighted):", body: "Eyeball too short. Rays focus BEHIND retina. Corrected by CONVEX (converging) lens." },
        { title: "Lens power: radius of curvature 16cm:", body: "f = R/2 = 8cm = 0.08m. P = 1/0.08 = 12.5D. Answer: (A)." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Concave mirror/convex lens = can give real images. Convex mirror/concave lens = ALWAYS virtual, upright, diminished. Same-size image from concave mirror: object at 2f. Myopia = concave lens. Hypermetropia = convex lens." }
    ]
  },

  "Electricity Calculations": {
    subject: "Physics",
    title: "Circuits, EMF and Resistance Calculations",
    icon: "⚡",
    estimatedTime: "4 min read",
    sections: [
      { heading: "Key Formulas", type: "cards", items: [
        { title: "Ohm's Law", body: "V = IR. Series: R_T = R₁+R₂. Parallel: 1/R_T = 1/R₁+1/R₂." },
        { title: "Power", body: "P = IV = I²R = V²/R." },
        { title: "Resistivity", body: "R = ρL/A (ρ=resistivity, L=length, A=cross-section area)." },
        { title: "EMF and internal resistance", body: "ε = I(R+r). Terminal voltage V = ε − Ir." },
      ]},
      { heading: "Worked Example 1 — Parallel Resistors", type: "steps", items: [
        "Three 3Ω resistors in parallel. Find equivalent resistance.",
        "1/R = 1/3 + 1/3 + 1/3 = 1",
        "R = 1Ω",
        "Answer: 1Ω. (B)"
      ]},
      { heading: "Worked Example 2 — Lamp Resistance", type: "steps", items: [
        "Lamp rated 240V, 60W. Find resistance of filament.",
        "P = V²/R → R = V²/P = 240²/60 = 57600/60 = 960Ω",
        "Answer: 960Ω. (A)"
      ]},
      { heading: "Worked Example 3 — Internal Resistance", type: "steps", items: [
        "Cell delivers 0.2A through 10Ω. When R=6Ω, current=0.3A. Find internal resistance r.",
        "Case 1: ε = 0.2(10 + r)",
        "Case 2: ε = 0.3(6 + r)",
        "Set equal: 0.2(10+r) = 0.3(6+r)",
        "2 + 0.2r = 1.8 + 0.3r → 0.2 = 0.1r → r = 2Ω",
        "Answer: 2.0Ω. (A)"
      ]},
      { heading: "Worked Example 4 — Potentiometer", type: "steps", items: [
        "Unknown EMF balances at 80cm. Daniell cell (1.08V) balances at 48cm. Find EMF.",
        "EMF/1.08 = 80/48",
        "EMF = 1.08 × 80/48 = 1.8V",
        "Answer: 1.8V. (B)"
      ]},
      { heading: "Power Transmission and AC", type: "cards", items: [
        { title: "Power loss in transmission cable:", body: "P_loss = I²R. Find I = P/V first. E.g. 40kW at 800V: I=50A. Loss=50²×2=5000W=5×10³W." },
        { title: "AC peak and RMS voltage:", body: "V_rms = V₀/√2. Mean power P = V₀²/2R. E.g. V₀=20V, R=10Ω: P=400/20=20W." },
        { title: "Cigarette lighter 12V, 33W:", body: "R = V²/P = 144/33 = 4.36Ω." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Parallel: SAME voltage, different currents. Series: SAME current, different voltages. P=V²/R when only V and R given. P=I²R when only I and R given. For internal resistance: set up two equations from two situations and solve simultaneously." }
    ]
  },

  "Transformers and Capacitors": {
    subject: "Physics",
    title: "Transformers and Capacitors — Calculations",
    icon: "🔌",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Transformer Equations", type: "cards", items: [
        { title: "Turns ratio", body: "V₁/V₂ = N₁/N₂ = I₂/I₁. Current ratio is INVERSE of voltage/turns ratio." },
        { title: "Efficiency", body: "η = (V₂I₂)/(V₁I₁) × 100%. Output power ÷ input power." },
        { title: "Step-up transformer", body: "N₂>N₁, so V₂>V₁ and I₂<I₁. Increases voltage, decreases current." },
        { title: "Step-down transformer", body: "N₂<N₁, so V₂<V₁ and I₂>I₁. Decreases voltage, increases current." },
      ]},
      { heading: "Worked Example — Transformer Efficiency", type: "steps", items: [
        "Transformer: 400 primary turns, 200 secondary. V₁=240V, I₁=3A, I₂=5A. Find efficiency.",
        "Step 1: V₂ = V₁ × N₂/N₁ = 240 × 200/400 = 120V",
        "Step 2: Output power = V₂I₂ = 120 × 5 = 600W",
        "Step 3: Input power = V₁I₁ = 240 × 3 = 720W",
        "Step 4: η = 600/720 × 100 = 83%",
        "Answer: 83%. (C)"
      ]},
      { heading: "Capacitor Rules", type: "cards", items: [
        { title: "Capacitors in parallel", body: "C_T = C₁ + C₂ + C₃. Adds directly. Same as resistors in series." },
        { title: "Capacitors in series", body: "1/C_T = 1/C₁ + 1/C₂. Inverse sum. Same as resistors in parallel." },
        { title: "Energy stored", body: "E = ½CV². C in farads, V in volts, E in joules." },
      ]},
      { heading: "Worked Example — Capacitor Combination", type: "steps", items: [
        "Two 2μF in parallel, then that combination in series with 6μF. Net capacitance?",
        "Step 1: Parallel: C = 2 + 2 = 4μF",
        "Step 2: Series with 6μF: C_T = (4 × 6)/(4 + 6) = 24/10 = 2.4μF",
        "Answer: 2.4μF. (D)"
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "CAPACITORS: parallel = add. Series = inverse sum. RESISTORS: series = add. Parallel = inverse sum. They are opposite — this is a classic trick question. Transformer current ratio is INVERSE of voltage ratio. 83% efficiency means 17% lost as heat." }
    ]
  },

  "Radioactivity Calculations": {
    subject: "Physics",
    title: "Radioactivity — Half-Life and Nuclear Equations",
    icon: "☢️",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Three Types of Radiation", type: "cards", items: [
        { title: "Alpha (α)", body: "Helium nucleus: 2 protons + 2 neutrons. Charge +2. Stopped by paper. Least penetrating. Deflected by fields." },
        { title: "Beta (β)", body: "Fast electron. Charge -1. Stopped by thin aluminium. Deflected by fields (opposite to alpha)." },
        { title: "Gamma (γ)", body: "High-energy EM wave. No charge. Stopped by thick lead. NOT deflected by magnetic or electric fields." },
      ]},
      { heading: "Half-Life Calculations", type: "cards", items: [
        { title: "Formula", body: "N = N₀ × (1/2)ⁿ where n = number of half-lives = time ÷ half-life." },
        { title: "Counting half-lives method", body: "Start → ÷2 → ÷2 → count how many steps needed. Faster and less error-prone." },
      ]},
      { heading: "Worked Example 1 — Find Half-Life", type: "steps", items: [
        "Radioactive substance: 8×10¹⁶ atoms → 2×10¹⁶ atoms in 64 minutes. Find half-life.",
        "8×10¹⁶ → 4×10¹⁶ → 2×10¹⁶",
        "That is 2 half-lives in 64 minutes.",
        "Half-life = 64/2 = 32 minutes.",
        "Answer: 32 minutes. (D)"
      ]},
      { heading: "Worked Example 2 — Find Time", type: "steps", items: [
        "Half-life 16 days, initial decay rate 32/s. Time for rate to reach 2/s.",
        "32 → 16 → 8 → 4 → 2 = 4 half-lives.",
        "Time = 4 × 16 = 64 days.",
        "Answer: 64 days. (B)"
      ]},
      { heading: "Worked Example 3 — Remaining Mass", type: "steps", items: [
        "Half-life 12hrs, initial mass 50g. Mass after 2 days (48 hours).",
        "Number of half-lives = 48/12 = 4.",
        "Mass = 50 × (1/2)⁴ = 50/16 = 3.125g.",
        "Answer: 3.125g. (A)"
      ]},
      { heading: "Nuclear Equations", type: "cards", items: [
        { title: "Conservation rules", body: "BOTH mass number (top) AND atomic number (bottom) must balance on both sides." },
        { title: "¹⁴₇N + X → ¹⁷₈O + ¹₁H. Find X:", body: "Mass: 14+4=18=17+1 ✓. Atomic: 7+2=9=8+1 ✓. X = ⁴₂He = alpha particle." },
        { title: "²³⁸₉₂U → ²³⁴₉₀Th + X:", body: "Mass difference=4, atomic number difference=2. X = ⁴₂He = alpha particle." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Gamma rays are NOT deflected by fields — no charge. Alpha and beta ARE deflected (opposite directions). Half-life counting: just keep dividing by 2 until you reach the target. Nuclear equations: top numbers balance, bottom numbers balance." }
    ]
  },

  "Photoelectric Effect": {
    subject: "Physics",
    title: "Photoelectric Effect and Modern Physics",
    icon: "🔆",
    estimatedTime: "2 min read",
    sections: [
      { heading: "Photoelectric Effect", type: "text",
        content: "Light hits a metal surface and ejects electrons IF the frequency is above a THRESHOLD FREQUENCY. Energy of emitted electrons depends on FREQUENCY, not intensity. Discovered by Hertz, explained by Einstein." },
      { heading: "Key Formulas", type: "cards", items: [
        { title: "Photon energy", body: "E = hf = hc/λ. h = 6.6×10⁻³⁴ Js. c = 3×10⁸ m/s." },
        { title: "Colour with highest KE:", body: "BLUE (highest frequency in visible spectrum listed). Violet even higher but often not in options." },
      ]},
      { heading: "Worked Example — Photon Energy", type: "steps", items: [
        "Find energy of photon with wavelength 3.30×10⁻⁷m. (h=6.6×10⁻³⁴, c=3×10⁸)",
        "E = hc/λ = (6.6×10⁻³⁴ × 3×10⁸) / (3.30×10⁻⁷)",
        "= 19.8×10⁻²⁶ / 3.30×10⁻⁷ = 6.0×10⁻¹⁹ J",
        "Answer: 6.0×10⁻¹⁹J. (B)"
      ]},
      { heading: "Key Facts", type: "cards", items: [
        { title: "X-rays discovered by:", body: "Wilhelm Röntgen in 1895. Not deflected by fields. Affect photographic film. Penetrate soft tissue." },
        { title: "Radioactivity discovered by:", body: "Henri Becquerel in 1896." },
        { title: "Bohr's model — success:", body: "Explains line spectra of HYDROGEN only. Limitation: cannot explain multi-electron atom spectra." },
        { title: "Franck-Hertz experiment:", body: "Confirms quantised energy levels in atoms. Electrons transfer only discrete amounts of energy." },
        { title: "Lenz's Law:", body: "Application of conservation of energy. Induced current opposes the change causing it." },
        { title: "DC motor uses:", body: "SPLIT RINGS (commutator). AC generator uses SLIP RINGS. Key distinction tested every year." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "E = hf = hc/λ. h = 6.6×10⁻³⁴. Shorter wavelength = higher frequency = more energy. Blue light has more energy than red. Gamma has most energy. DC motor = split rings. AC generator = slip rings. Lenz's Law = conservation of energy." }
    ]
  },

  // ==========================================
  // MATHEMATICS — NEW CALCULATION ENTRIES
  // ==========================================

  "Profit and Loss Calculations": {
    subject: "Mathematics",
    title: "Profit, Loss and Discount — Worked Examples",
    icon: "💰",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Key Formulas", type: "cards", items: [
        { title: "Profit and Loss %", body: "Profit% = (Profit/CP) × 100. Loss% = (Loss/CP) × 100. ALWAYS divide by COST PRICE, never selling price." },
        { title: "Find SP from profit%", body: "SP = CP × (100 + profit%)/100. E.g. 18% profit: SP = CP × 118/100." },
        { title: "Find CP from SP", body: "CP = SP × 100/(100 + profit%). E.g. SP=81000 at 8% profit: CP = 81000×100/108 = 75000." },
        { title: "Discount", body: "Price after discount = Original × (100 − discount%)/100." },
      ]},
      { heading: "Worked Example 1 — Chain Transactions", type: "steps", items: [
        "TV sold for ₦18,700 giving 10% profit. Find SP for 18% profit.",
        "Step 1: Find CP. 18700 = CP × 110/100 → CP = 18700×100/110 = ₦17,000",
        "Step 2: New SP = 17000 × 118/100 = ₦20,060",
        "Answer: ≈₦20,000. (C)"
      ]},
      { heading: "Worked Example 2 — Double Transaction", type: "steps", items: [
        "A sold radio to B at 10% profit. B sold for ₦2612.50 at 5% loss. Find A's cost.",
        "A's cost = P. B's cost = P × 1.10.",
        "B sells: ₦2612.50 = P × 1.10 × 0.95 = P × 1.045",
        "P = 2612.50/1.045 = ₦2,500",
        "Answer: ₦2,500. (C)"
      ]},
      { heading: "Worked Example 3 — Discount", type: "steps", items: [
        "Shirts sold at 15% discount. Ojo paid ₦76.50. Original price?",
        "76.50 = Original × 85/100",
        "Original = 76.50/0.85 = ₦90",
        "Answer: ₦90. (B)"
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Profit% and Loss% are ALWAYS on COST PRICE — never selling price. This is the most common mistake. For chain transactions: work through each step. If profit then loss: multiply by (1+p/100) then (1-l/100)." }
    ]
  },

  "Simple and Compound Interest": {
    subject: "Mathematics",
    title: "Simple and Compound Interest — Worked Examples",
    icon: "🏦",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Key Formulas", type: "cards", items: [
        { title: "Simple Interest (SI)", body: "SI = PRT/100. P=principal, R=rate%, T=time in YEARS." },
        { title: "Amount (SI)", body: "Amount = P + SI = P(1 + RT/100)." },
        { title: "Compound Interest (CI)", body: "Amount = P(1 + R/100)ⁿ. CI = Amount − P." },
        { title: "Time conversion", body: "Months → years: divide by 12. Days → years: divide by 365." },
      ]},
      { heading: "Worked Example 1 — Simple Interest", type: "steps", items: [
        "Find SI on ₦20,000 for 2 years at 13% p.a.",
        "SI = PRT/100 = 20000 × 13 × 2/100 = ₦5,200",
        "Answer: ₦5,200. (A)"
      ]},
      { heading: "Worked Example 2 — Find Principal", type: "steps", items: [
        "Man took loan at 4% p.a. After 5 years paid back ₦720. Find principal P.",
        "Amount = P(1 + RT/100) = P(1 + 4×5/100) = P × 1.2",
        "1.2P = 720 → P = ₦600",
        "Answer: ₦600. (D)"
      ]},
      { heading: "Worked Example 3 — Compound Interest", type: "steps", items: [
        "Find compound interest on ₦2,000 for 2 years at 10% p.a.",
        "Year 1: 2000 × 1.1 = ₦2,200",
        "Year 2: 2200 × 1.1 = ₦2,420",
        "CI = 2420 − 2000 = ₦420",
        "Answer: ₦420. (A)"
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Simple interest: same amount each year (doesn't compound). Compound interest: grows because each year's interest is added to principal before next year. For CI with two years: just multiply by (1+r%) twice. For more years: use (1+r/100)ⁿ." }
    ]
  },

  "Probability Calculations": {
    subject: "Mathematics",
    title: "Probability — Rules and Worked Examples",
    icon: "🎲",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Key Rules", type: "cards", items: [
        { title: "Addition rule", body: "P(A or B) = P(A) + P(B) − P(A and B). Subtract intersection to avoid double counting." },
        { title: "Multiplication rule (independent)", body: "P(A and B) = P(A) × P(B). Both events occur." },
        { title: "Without replacement", body: "Second draw depends on first. Denominator decreases by 1 each draw." },
        { title: "Combinations nCr", body: "nCr = n! / [r!(n−r)!]. Number of ways to choose r from n." },
      ]},
      { heading: "Worked Example 1 — Without Replacement", type: "steps", items: [
        "Bag: 3 red, 5 white. Two drawn without replacement. Find P(same colour).",
        "P(RR) = 3/8 × 2/7 = 6/56",
        "P(WW) = 5/8 × 4/7 = 20/56",
        "P(same) = 6/56 + 20/56 = 26/56 = 13/28",
        "Answer: 13/28. (B)"
      ]},
      { heading: "Worked Example 2 — Both Failing", type: "steps", items: [
        "P(X passing) = 1/4, P(Y passing) = 3/5. Find P(both failing).",
        "P(X fails) = 1 − 1/4 = 3/4",
        "P(Y fails) = 1 − 3/5 = 2/5",
        "P(both fail) = 3/4 × 2/5 = 6/20 = 3/10",
        "Answer: 3/10. (B)"
      ]},
      { heading: "Worked Example 3 — Divisibility", type: "steps", items: [
        "Number selected from 1-30. P(divisible by 2 or 5)?",
        "Divisible by 2: 15 numbers. By 5: 6 numbers. By both (10): 3 numbers.",
        "Union = 15 + 6 − 3 = 18.",
        "P = 18/30 = 3/5",
        "Answer: 3/5. (B)"
      ]},
      { heading: "Arrangements and Combinations", type: "cards", items: [
        { title: "Choose 3 footballers from 12:", body: "C(12,3) = 12×11×10/6 = 220 ways." },
        { title: "Arrangements of LETTERS:", body: "7 letters, 2 pairs (T and E repeated). 7!/2!2! = 5040/4 = 1260." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Without replacement: denominator reduces by 1 each time. P(A or B) = P(A) + P(B) − P(both). P(both) = P(A) × P(B) for independent events. P(not A) = 1 − P(A). Always check if events are mutually exclusive." }
    ]
  },

  "AP and GP Series": {
    subject: "Mathematics",
    title: "Arithmetic and Geometric Progressions",
    icon: "📊",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Arithmetic Progressions (AP)", type: "cards", items: [
        { title: "nth term", body: "Tₙ = a + (n−1)d. a = first term, d = common difference." },
        { title: "Sum of n terms", body: "Sₙ = n/2 [2a + (n−1)d] = n/2 (first + last)." },
        { title: "Common difference", body: "d = T₂ − T₁ = any term minus the previous term." },
      ]},
      { heading: "AP Worked Examples", type: "cards", items: [
        { title: "29th term of 3, 8, 13, 18...:", body: "a=3, d=5. T₂₉ = 3 + 28×5 = 3 + 140 = 143." },
        { title: "Sum of first 20 terms of 5, 9, 13...:", body: "a=5, d=4. S₂₀ = 10×[10+76] = 10×86 = 860." },
        { title: "Sum of first 21 terms of -10, -8, -6...:", body: "a=-10, d=2. S₂₁ = 21/2×[-20+40] = 21/2×20 = 210." },
      ]},
      { heading: "Geometric Progressions (GP)", type: "cards", items: [
        { title: "nth term", body: "Tₙ = arⁿ⁻¹. a = first term, r = common ratio." },
        { title: "Sum of n terms", body: "Sₙ = a(rⁿ−1)/(r−1) when r>1. Or a(1−rⁿ)/(1−r) when r<1." },
        { title: "Common ratio", body: "r = T₂/T₁ = any term divided by the previous term." },
      ]},
      { heading: "GP Worked Examples", type: "cards", items: [
        { title: "3rd term=63, 5th term=567. Sum of first 6:", body: "r²=567/63=9, r=3. a=63/9=7. S₆=7(3⁶−1)/2=7×728/2=2548." },
        { title: "11th term of 4, 8, 16...:", body: "a=4=2², r=2. T₁₁=2²×2¹⁰=2¹²." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "AP: add same number each time (d). GP: multiply by same number each time (r). To find r: divide consecutive terms. To find d: subtract consecutive terms. S = n/2×(first + last) works for AP only." }
    ]
  },

  "Statistics Calculations": {
    subject: "Mathematics",
    title: "Statistics — Mean, Variance and Standard Deviation",
    icon: "📈",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Key Formulas", type: "cards", items: [
        { title: "Mean", body: "Mean = Σx/n (sum of all values ÷ number of values)." },
        { title: "Variance", body: "Variance = Σ(x − mean)²/n. Find each deviation, square it, average them." },
        { title: "Standard deviation", body: "SD = √Variance. Same units as the original data." },
      ]},
      { heading: "Worked Example 1 — SD Calculation", type: "steps", items: [
        "Find standard deviation of -1, 5, 0, 2, 9.",
        "Mean = (-1+5+0+2+9)/5 = 15/5 = 3",
        "Deviations: -4, 2, -3, -1, 6. Squared: 16, 4, 9, 1, 36.",
        "Variance = (16+4+9+1+36)/5 = 66/5 = 13.2",
        "SD = √13.2 ≈ 3.6",
        "Answer: 3.6. (C)"
      ]},
      { heading: "Worked Example 2 — Variance of k, k+1, k+2", type: "steps", items: [
        "Find variance of k, k+1, k+2.",
        "Mean = (k + k+1 + k+2)/3 = (3k+3)/3 = k+1",
        "Deviations: -1, 0, +1. Squared: 1, 0, 1.",
        "Variance = (1+0+1)/3 = 2/3",
        "Answer: 2/3. (A)"
      ]},
      { heading: "Working Backwards with Mean", type: "cards", items: [
        { title: "Mean age of 20 students is 12. Teacher added, mean becomes 13. Teacher's age?", body: "Total with teacher = 21×13 = 273. Without = 20×12 = 240. Teacher = 273−240 = 33." },
        { title: "30 sellers average ₦27. 12 girls average ₦18. Boys' average?", body: "Total=810. Girls=216. Boys total=810−216=594. Boys average=594/18=₦33." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Variance = average of SQUARED deviations. SD = square root of variance. For 'working backwards': (new total) − (old total) = the new item's value. SD stays the same if you add or subtract the same number to all values." }
    ]
  },

  // ==========================================
  // ENGLISH — NEW ENTRIES
  // ==========================================

  "Emphatic Stress": {
    subject: "English",
    title: "Emphatic Stress — Management Paper Questions",
    icon: "🗣️",
    estimatedTime: "3 min read",
    sections: [
      { heading: "What Is Emphatic Stress?", type: "text",
        content: "These questions give you a statement with one word in CAPITALS (the emphasised word) and ask which question that statement best answers. The capitalised word is the KEY — it tells you what the question must be asking about." },
      { heading: "The Rule", type: "cards", items: [
        { title: "Step 1", body: "Find the CAPITALISED word in the statement — that is the emphatic word." },
        { title: "Step 2", body: "Ask yourself: what question would I be answering if I emphasised that word?" },
        { title: "Step 3", body: "The correct question is the one where the CAPITALISED word provides the essential new information." },
        { title: "Step 4", body: "Wrong answers usually change the person, change the action, or ask about a different part of the sentence." },
      ]},
      { heading: "Worked Examples", type: "cards", items: [
        { title: "'Tomi loves DODO for dinner.' Question?", body: "DODO is capitalised — question asks WHAT she loves. Correct: 'Does Tomi love fried rice for dinner?' (asking about the food, which DODO answers)." },
        { title: "'Adamu RARELY visits his old friends.' Question?", body: "RARELY is capitalised — question asks about FREQUENCY. Correct: 'Does Adamu rarely visit his old friends?' Wrong: 'Who rarely visits?' (that emphasises Adamu)." },
        { title: "'John BOUGHT the book yesterday.' Question?", body: "BOUGHT is capitalised — question asks HOW he got it. Correct: 'Did John win the book?' (contrasts with another way of getting it)." },
        { title: "'She SINGS in the choir.' Question?", body: "SINGS is capitalised — question asks about the ACTION. Correct: 'Does she dance in the choir?' (contrasts another action). Wrong: 'Who sings in the choir?' (that emphasises WHO)." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "The capitalised word is what is being CONTRASTED or CONFIRMED. The correct question is the one that would NEED that specific word as its answer. Wrong options either change the person, the time, or the action to something irrelevant." }
    ]
  },

  "Conditional Sentences": {
    subject: "English",
    title: "Interpretation of Conditional Sentences",
    icon: "🔀",
    estimatedTime: "3 min read",
    sections: [
      { heading: "The Three Conditionals", type: "cards", items: [
        { title: "Type 1 — Real (possible)", body: "'If + present, will + base.' Something that CAN happen. 'If Musa applies, he will get in' = Musa HAS THE OPPORTUNITY to apply." },
        { title: "Type 2 — Unreal present", body: "'If + past, would + base.' Hypothetical, not true now. 'If I were you, I would...' = I am NOT you." },
        { title: "Type 3 — Unreal past", body: "'If + had+pp, would have+pp.' Something that did NOT happen in the past. BOTH parts are the OPPOSITE of reality." },
      ]},
      { heading: "Type 3 — The Reversal Rule", type: "text",
        content: "In Type 3 conditional, BOTH parts describe what did NOT happen. The condition is the reverse of reality. This is the most tested interpretation in UNIBEN." },
      { heading: "Type 3 Worked Examples", type: "cards", items: [
        { title: "'Had they not spoken to their Uncle, they could have stayed in the room.'", body: "Reverse: They DID speak → they are NOT in the room. Meaning: BECAUSE they spoke to their uncle, they are now elsewhere." },
        { title: "'We would never have followed his advice if we had known his reputation.'", body: "Reverse: We did NOT know → we DID follow. Meaning: we followed his advice BECAUSE we did not know his reputation." },
        { title: "'If I had known he was a robber, I would not have married him.'", body: "Reverse: She did NOT know → she DID marry him. Meaning: she married him because she did not know." },
        { title: "'Had her father not died, Ede would have left for London.'", body: "Reverse: Father DID die → Ede did NOT leave. Meaning: Ede stayed because her father died." },
      ]},
      { heading: "Exam Questions", type: "cards", items: [
        { title: "'If Musa applies for a scholarship, he will be able to go to law school.' Musa:", body: "HAS THE OPPORTUNITY of attending law school. Answer: (B). Type 1 = real possibility. He has NOT yet applied." },
        { title: "'We would never have followed his advice if we had known him.' Means:", body: "We followed his advice BECAUSE we did not know him well. Answer: (C)." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Type 3 = BOTH parts are the opposite of reality. 'Had I known' = I did NOT know. 'Would not have done' = I DID do it. Reverse BOTH parts to find the real meaning. This appears in almost every English paper." }
    ]
  },

  "Idioms Master List": {
    subject: "English",
    title: "Idioms and Expressions — Exam Master List",
    icon: "💬",
    estimatedTime: "4 min read",
    sections: [
      { heading: "Strategy", type: "text",
        content: "NEVER interpret idioms literally. The meaning is always figurative. Idioms are a group of words whose combined meaning cannot be guessed from individual words." },
      { heading: "Money and Success Idioms", type: "cards", items: [
        { title: "Kill the goose that lays the golden egg", body: "Destroy the source of future income for immediate gain. 'Sacrificed future profits to satisfy present needs.'" },
        { title: "In the red", body: "Bank account overdrawn — owing money. 'Ekwansi's account is in the red' = his account is overdrawn." },
        { title: "The game is not worth the candle", body: "The trouble/effort is greater than the reward. Not worth doing." },
        { title: "Eye to the main chance", body: "Always looking for opportunities for personal gain or profit." },
        { title: "Feather your own nest", body: "Use your position to make yourself rich at others' expense." },
      ]},
      { heading: "Secrets and Information Idioms", type: "cards", items: [
        { title: "Spill the beans", body: "Reveal a secret that will hurt someone. 'I will reveal a secret that will hurt him.'" },
        { title: "Tongue in cheek", body: "Not sincere, saying the opposite of what you mean, ironic. 'He did not express his true feelings.'" },
        { title: "Laughed up his sleeve", body: "Secretly amused while appearing serious on the outside." },
        { title: "Hand in glove", body: "Working closely together, often with suggestion of improper activity." },
      ]},
      { heading: "Crisis and Decision Idioms", type: "cards", items: [
        { title: "Cross the Rubicon", body: "Make an irreversible decision — cannot go back. 'University is not changing its decision.'" },
        { title: "Achilles' heel", body: "The one weakness of an otherwise strong person. From Greek mythology." },
        { title: "Dyed-in-the-wool", body: "Having beliefs so deep they cannot be changed. 'Has strong opinions that will not change.'" },
        { title: "Castles in the air", body: "Plans that will never be realised — unrealistic dreams." },
      ]},
      { heading: "People and Character Idioms", type: "cards", items: [
        { title: "Man Friday", body: "A devoted and versatile helper who does everything. 'Mr. Obi slaves for the head of department.'" },
        { title: "Bull in a china shop", body: "A clumsy, careless person who causes damage wherever they go." },
        { title: "Black sheep", body: "The member of a group who brings shame or disgrace." },
        { title: "Rough diamond", body: "Person of great worth but rough, unpolished exterior." },
        { title: "Trade on someone's kindness", body: "Take unfair advantage of their good nature. 'They exploited his kindness.'" },
      ]},
      { heading: "Action and Effort Idioms", type: "cards", items: [
        { title: "Wipe the floor with", body: "Defeat someone decisively, humiliate them in a contest." },
        { title: "Give someone the bird", body: "Scorn, show contempt or dismissal toward someone." },
        { title: "Cannot see the wood for the trees", body: "Cannot understand the main point because of too many details." },
        { title: "Beat about the bush", body: "Avoid coming to the main point, talk around a subject." },
        { title: "Burn the midnight oil", body: "Work or study very late at night." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Cross the Rubicon = irreversible decision (Julius Caesar crossed it — no going back). Achilles' heel = one weakness. Kill the golden goose = destroy future income. Tongue in cheek = not sincere. Man Friday = devoted helper. These 5 appear most frequently." }
    ]
  },

  "Phonetics and Stress": {
    subject: "English",
    title: "Phonetics, Pronunciation and Stress Patterns",
    icon: "🔊",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Sounds That Trick Students", type: "cards", items: [
        { title: "The /eɪ/ sound (like 'cake')", body: "great, break, stake, weight, they — all have /eɪ/. BUT: team, beam, dream = /iː/ (different)." },
        { title: "The 'ch' — three pronunciations", body: "/tʃ/ as in church: chant, cheat, chief. /k/ as in school: character, chemistry, chorus. /ʃ/ as in machine: chef, champagne." },
        { title: "Silent 'b' in 'mb'", body: "lamb, comb, bomb, thumb, plumb, numb, climb, dumb — the 'b' is ALWAYS silent. Only /m/ sound heard." },
        { title: "The /ʃ/ (sh) sound", body: "ship, shelf (sh). official, special (ci). nation, station (ti). But vision, revision = /ʒ/ (different softer sound)." },
        { title: "The /ʒ/ sound", body: "garage (end), measure, pleasure, vision, usual, leisure — NOT the same as /ʃ/ in ship." },
        { title: "The two 'th' sounds", body: "/θ/ voiceless: think, thick, mathematics, author. /ð/ voiced: this, that, mother, rather, breathe." },
      ]},
      { heading: "Stress Pattern Rules", type: "cards", items: [
        { title: "Most 2-syllable nouns/adjectives", body: "Stress on FIRST syllable: BLACKboard, SUFfer, CALendar, THINKing." },
        { title: "Most 2-syllable verbs", body: "Stress on SECOND syllable: beLIEVE, rePORT, sucCEED, conTROL." },
        { title: "Words ending -tion/-sion", body: "Stress on syllable BEFORE ending: naVIgation, ediTION, teleSCOPE." },
        { title: "Shifting stress pairs", body: "PHOtograph (noun/adj) → phoTOGraphy (noun). REcord (noun) → reCORD (verb). CONtent (adj) → conTENT (satisfied)." },
      ]},
      { heading: "Stress Odd-One-Out Examples", type: "cards", items: [
        { title: "CALendar, BLACKboard, SUFfer, sucCESS:", body: "Odd one out: sucCESS — only word stressed on 2nd syllable. Others stress 1st." },
        { title: "enDEAvour, conFESSion, exAMple, MAGazine:", body: "Odd one out: MAGazine — stresses 3rd syllable. Others stress 2nd." },
        { title: "BOOKcase, unTIE, exCEPT, aDOPT:", body: "Odd one out: BOOKcase — stresses 1st syllable. Others stress 2nd." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Say words aloud and clap on the loud syllable. 'Chemistry' has /k/ not /tʃ/ — like 'character'. Silent letters: silent b in 'mb' (lamb), silent k in 'kn' (know), silent w in 'wr' (write). nation/station = /ʃ/ not /t/ at the 'ti'." }
    ]
  },

  "English Vocabulary Master List": {
    subject: "English",
    title: "60 Must-Know Words — Synonyms and Antonyms",
    icon: "📚",
    estimatedTime: "5 min read",
    sections: [
      { heading: "Watch Out — Common Traps", type: "cards", items: [
        { title: "INVALUABLE", body: "Means EXTREMELY VALUABLE — NOT valueless. A very common mistake. 'Invaluable advice' = advice so valuable you cannot put a price on it." },
        { title: "NEGLIGIBLE vs NEGLIGENT", body: "Negligible = too small to matter (insignificant). Negligent = careless. They look similar but mean different things." },
        { title: "PERFUNCTORY vs GRUDGINGLY", body: "Perfunctory = done without care (careless). Grudgingly = done unwillingly. NOT the same — careless ≠ unwilling." },
        { title: "DEPRECATE vs DEPRECIATE", body: "Deprecate = to express disapproval (condemn). Depreciate = to decrease in value. Different meanings." },
      ]},
      { heading: "Personality Words", type: "cards", items: [
        { title: "TACITURN / RETICENT", body: "Habitually silent, saying very little. Opposite: LOQUACIOUS / GARRULOUS (very talkative)." },
        { title: "DILIGENT / ASSIDUOUS", body: "Hardworking and careful. Opposite: INDOLENT / SLOTHFUL (lazy)." },
        { title: "PARSIMONIOUS / MISERLY", body: "Excessively stingy. Opposite: GENEROUS / EXTRAVAGANT." },
        { title: "BELLICOSE", body: "Aggressive, warlike. Opposite: PEACEFUL, PACIFIC." },
        { title: "CALLOUS", body: "Showing no feeling, cruel. Opposite: COMPASSIONATE, CARING." },
      ]},
      { heading: "Feelings and Reactions Words", type: "cards", items: [
        { title: "TUMULTUOUS", body: "Loud and disorderly. 'Tumultuous welcome' = noisy, enthusiastic welcome." },
        { title: "ANIMATED", body: "Lively, full of energy. Opposite: DULL, LIFELESS." },
        { title: "PERPLEXED", body: "Confused, unable to understand. Near: PUZZLED, BAFFLED." },
        { title: "EQUANIMITY", body: "Calmness in a difficult situation. Near: COMPOSURE." },
        { title: "ENERVATING", body: "Draining energy, weakening. Opposite: INVIGORATING (giving energy)." },
      ]},
      { heading: "Truth and Validity Words", type: "cards", items: [
        { title: "CORROBORATE", body: "To confirm or support with evidence. Opposite: CONTRADICT." },
        { title: "VINDICATE / EXONERATE", body: "To prove innocent or right. To officially clear of blame." },
        { title: "SPURIOUS", body: "False, not genuine. Near: COUNTERFEIT, FAKE." },
        { title: "FUTILE", body: "Producing no result, useless. Near: VAIN, POINTLESS." },
        { title: "REPREHENSIBLE", body: "Deserving strong condemnation. Near: DEPLORABLE, SHAMEFUL." },
      ]},
      { heading: "Status and Scope Words", type: "cards", items: [
        { title: "ZENITH vs NADIR", body: "Zenith = highest point. Nadir = lowest point. Opposite of each other." },
        { title: "VALEDICTORY vs INAUGURAL", body: "Valedictory = farewell/leaving. Inaugural = first/opening. Opposite of each other." },
        { title: "SECULAR vs SACRED", body: "Secular = non-religious, worldly. Sacred = religious, holy." },
        { title: "EPHEMERAL vs PERMANENT", body: "Ephemeral = lasting a very short time. Permanent = lasting forever." },
        { title: "OBSOLETE vs MODERN", body: "Obsolete = out of date. Modern = up-to-date." },
        { title: "VERBOSITY vs BREVITY", body: "Verbosity = using too many words. Brevity = few precise words." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Most tested pairs: diligent/indolent, extravagant/frugal, loquacious/taciturn, zenith/nadir, valedictory/inaugural, enervating/invigorating, animated/dull, corroborate/contradict. Learn each word WITH its opposite — they test both." }
    ]
  },

  "Grammar Rules": {
    subject: "English",
    title: "Grammar — Tenses, Agreement and Question Tags",
    icon: "✏️",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Subject-Verb Agreement Rules", type: "cards", items: [
        { title: "Each, every, everyone, nobody, anyone", body: "Always SINGULAR verb. 'Everyone is here.' Not 'are'." },
        { title: "'As well as', 'together with', 'along with'", body: "Do NOT make the subject plural. 'John, as well as his friends, IS coming.' Subject = John." },
        { title: "Collective nouns (class, team, committee)", body: "Usually SINGULAR verb. 'Three quarters of the class IS improving.'" },
        { title: "'Neither...nor'", body: "Verb agrees with the CLOSER noun. 'Neither John nor the students ARE to blame.'" },
      ]},
      { heading: "Conditional Tenses", type: "cards", items: [
        { title: "Type 2 conditional", body: "Use WERE (not was). 'If I were you, I would...' ALWAYS 'were' in formal written English." },
        { title: "Inverted conditional", body: "'Had I known' = 'If I had known.' 'Were I to go' = 'If I were to go.' The 'if' is removed and auxiliary moves to front." },
      ]},
      { heading: "Question Tags", type: "cards", items: [
        { title: "Positive statement + negative tag", body: "'She is coming, ISN'T she?' The tag verb matches the main verb tense." },
        { title: "Negative statement + positive tag", body: "'She isn't coming, IS she?'" },
        { title: "'I am...' → special case", body: "'I am your friend, AREN'T I?' (Not 'am I not' in spoken English)." },
        { title: "'It's been rough, _____?'", body: "'HASN'T it?' — 'It has been' = present perfect → 'hasn't it?'" },
        { title: "'She said you could eat there, _____?'", body: "'DIDN'T she?' — main verb is 'said' (past simple)." },
      ]},
      { heading: "Reported Speech Tense Changes", type: "cards", items: [
        { title: "Direct → Reported tense shifts", body: "Present → Past. Will → Would. Can → Could. May → Might. 'Tomorrow' → 'the next day'. 'Here' → 'there'." },
        { title: "'I will dance tomorrow,' he said →", body: "'He said he WOULD dance THE NEXT DAY.' Both 'will' and 'tomorrow' must change." },
        { title: "Reporting verbs", body: "'Said' = no object needed. 'Told' MUST have an object ('told me', 'told him'). Never 'told that...' alone." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Question tag tense = same as main clause. 'I am...' → 'aren't I?' (special rule). Type 2 conditional: ALWAYS 'were', never 'was' in formal English. Reported speech: one tense back, 'tomorrow' → 'the next day', 'here' → 'there'." }
    ]
  },

  // ============================================================
// STUDY GUIDES ADDITIONS — BATCH 3
// Geography — Complete Subject (Brand New)
// Paste these entries into STUDY_GUIDES in src/data/studyGuides.js
// Add after existing entries (before the closing })
// ============================================================

  // ==========================================
  // GEOGRAPHY — ALL NEW ENTRIES
  // ==========================================

  "Solar System and Earth": {
    subject: "Geography",
    title: "The Solar System and Earth's Motions",
    icon: "🌍",
    estimatedTime: "3 min read",
    sections: [
      { heading: "The Eight Planets (in order from Sun)", type: "cards", items: [
        { title: "Memory aid", body: "'My Very Excellent Mother Just Served Us Noodles' — Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune." },
        { title: "Key planet facts", body: "Jupiter = LARGEST. Venus = HOTTEST (greenhouse effect). Earth = only known life. Mars = RED planet (iron oxide). Saturn = prominent rings." },
        { title: "Mercury", body: "Closest to sun, smallest planet. No atmosphere, extreme temperature swings." },
        { title: "Neptune", body: "Furthest from sun, windiest planet." },
      ]},
      { heading: "Earth's Two Main Motions", type: "cards", items: [
        { title: "ROTATION", body: "Earth spins on its own axis. Takes 24 hours (one day). Causes: day and night, time zones, apparent movement of sun across sky." },
        { title: "REVOLUTION", body: "Earth orbits the sun. Takes 365¼ days (one year). Causes: SEASONS, variation in day length, equinoxes and solstices." },
      ]},
      { heading: "Equinoxes and Solstices", type: "cards", items: [
        { title: "Vernal (Spring) Equinox", body: "March 21. Sun directly over Equator. Day = night everywhere on Earth." },
        { title: "Autumnal Equinox", body: "September 23. Sun directly over Equator again." },
        { title: "Summer Solstice", body: "June 21. Sun directly over Tropic of Cancer (23.5°N). Longest day in Northern Hemisphere." },
        { title: "Winter Solstice", body: "December 22. Sun directly over Tropic of Capricorn (23.5°S). Shortest day in Northern Hemisphere." },
      ]},
      { heading: "Exam Questions", type: "cards", items: [
        { title: "Largest planet:", body: "JUPITER. Not Saturn (second largest, has best rings). Not Earth (medium-sized)." },
        { title: "Day and night caused by:", body: "ROTATION on its axis. Not revolution (revolution causes seasons)." },
        { title: "Seasons caused by:", body: "REVOLUTION + axial tilt (23.5°). Without the tilt, there would be no seasons." },
        { title: "Sun directly over Tropic of Cancer:", body: "SUMMER SOLSTICE, June 21. Longest day in Northern Hemisphere." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "ROTATION = day/night (24 hours). REVOLUTION = seasons (365 days). These two are the most tested distinction. Tropic of Cancer = 23.5°N (June solstice). Tropic of Capricorn = 23.5°S (December solstice)." }
    ]
  },

  "Latitude Longitude and Time": {
    subject: "Geography",
    title: "Latitude, Longitude and Time Calculations",
    icon: "🗺️",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Key Lines of Latitude", type: "cards", items: [
        { title: "Equator", body: "0° latitude. Divides Earth into Northern and Southern hemispheres. Longest parallel." },
        { title: "Tropic of Cancer", body: "23.5°N. Sun directly overhead at June 21 (summer solstice)." },
        { title: "Tropic of Capricorn", body: "23.5°S. Sun directly overhead at December 22 (winter solstice)." },
        { title: "Arctic/Antarctic Circles", body: "66.5°N and 66.5°S. Poles are 90°N and 90°S." },
        { title: "Lines of latitude = PARALLELS", body: "Run east-west. Parallel to each other. Get shorter toward poles." },
        { title: "Lines of longitude = MERIDIANS", body: "Run north-south. Converge at poles. Prime Meridian = 0° (Greenwich, London)." },
      ]},
      { heading: "Time Calculation Rule", type: "text",
        content: "Earth rotates 360° in 24 hours = 15° per hour = 1° per 4 minutes. Every 15° of longitude = 1 hour time difference. EAST of Prime Meridian = AHEAD (clocks are later). WEST = BEHIND." },
      { heading: "Worked Example 1 — Time at 60°E", type: "steps", items: [
        "A town at 60°E. What time when Greenwich (0°) is 12 noon?",
        "60°E is EAST → ahead of Greenwich.",
        "Time difference = 60 ÷ 15 = 4 hours ahead.",
        "Answer: 4:00 PM (16:00)."
      ]},
      { heading: "Worked Example 2 — Time Difference", type: "steps", items: [
        "Town A is at 45°W. Town B is at 30°E. Time difference?",
        "Total longitude difference = 45 + 30 = 75°.",
        "Time difference = 75 ÷ 15 = 5 hours.",
        "Town B (east) is 5 hours AHEAD of Town A.",
        "Answer: 5 hours. (C)"
      ]},
      { heading: "Exam Questions", type: "cards", items: [
        { title: "Prime Meridian passes through:", body: "GREENWICH, LONDON, UK. Established 1884. All time zones relative to Greenwich Mean Time (GMT)." },
        { title: "International Date Line:", body: "180° longitude. Where the calendar date changes." },
        { title: "Equator is at:", body: "0° latitude. The starting point for measuring latitude." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "15° = 1 hour. East = ahead, West = behind. To find time difference between two places: add their longitudes if one east and one west, subtract if same direction. Divide result by 15." }
    ]
  },

  "Maps and Cartography": {
    subject: "Geography",
    title: "Maps, Scale, Contours and Map Reading",
    icon: "📍",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Types of Map Scale", type: "cards", items: [
        { title: "Statement scale", body: "'1cm represents 5km' — expressed in words. Easy to understand." },
        { title: "Linear (bar) scale", body: "A drawn line divided into measured units. Works even if map is enlarged or reduced." },
        { title: "Representative Fraction (RF)", body: "1:50,000 means 1cm on map = 50,000cm = 500m on ground. Also written as fraction 1/50,000." },
      ]},
      { heading: "Large Scale vs Small Scale", type: "cards", items: [
        { title: "LARGE scale map", body: "Small RF denominator (1:5,000 or 1:10,000). Shows SMALL area in GREAT detail. Street maps, building plans." },
        { title: "SMALL scale map", body: "Large RF denominator (1:100,000 or 1:500,000). Shows LARGE area with LESS detail. Atlas maps, country maps." },
        { title: "Memory trick", body: "Large scale = zoom IN (large things look large). Small scale = zoom OUT (country fits on one page)." },
      ]},
      { heading: "Worked Example — Map Distance", type: "steps", items: [
        "Map scale 1:50,000. Two towns 10cm apart on map. Actual distance?",
        "1:50,000 means 1cm = 50,000cm = 500m.",
        "10cm × 500m = 5,000m = 5km.",
        "Answer: 5km."
      ]},
      { heading: "Contour Lines", type: "cards", items: [
        { title: "What are contours?", body: "Lines connecting points of EQUAL altitude (height above sea level). Show the shape of the land (relief)." },
        { title: "Close contours", body: "= STEEP slope. Land rises sharply over short distance." },
        { title: "Widely spaced contours", body: "= GENTLE slope. Land rises slowly." },
        { title: "V-shapes pointing UPHILL", body: "= VALLEY or RIVER. Valley cuts into the hillside." },
        { title: "V-shapes pointing DOWNHILL", body: "= RIDGE or SPUR. Ridge projects outward from hillside." },
        { title: "Closed circles", body: "= HILL (if numbers increase inward) or DEPRESSION (if numbers decrease inward)." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "1:50,000 = 1cm → 500m = 0.5km. 1:100,000 = 1cm → 1km. Close contours = steep. V pointing up (toward high numbers) = valley/river. V pointing down = ridge. Small RF number = large scale = more detail." }
    ]
  },

  "Rocks and Rock Cycle": {
    subject: "Geography",
    title: "Rocks — Types, Formation and Economic Uses",
    icon: "🪨",
    estimatedTime: "3 min read",
    sections: [
      { heading: "The Three Rock Types", type: "cards", items: [
        { title: "Igneous rocks", body: "Formed from cooling MAGMA. INTRUSIVE (slow cooling underground) = coarse-grained: GRANITE. EXTRUSIVE (fast cooling on surface) = fine-grained: BASALT, obsidian, pumice." },
        { title: "Sedimentary rocks", body: "Formed from compressed SEDIMENTS. Layered structure. Contains FOSSILS. Examples: sandstone, limestone, shale, coal, chalk." },
        { title: "Metamorphic rocks", body: "Formed when rocks are changed by HEAT and PRESSURE. Limestone → MARBLE. Sandstone → QUARTZITE. Shale → SLATE. Granite → GNEISS." },
      ]},
      { heading: "Critical Facts", type: "cards", items: [
        { title: "Fossils found ONLY in:", body: "SEDIMENTARY rocks. Organisms buried in sediment which hardened. Igneous and metamorphic rocks destroy fossils." },
        { title: "Granite vs Basalt", body: "Both igneous. Granite = INTRUSIVE (slow, coarse). Basalt = EXTRUSIVE (fast, fine). This distinction is heavily tested." },
        { title: "Limestone becomes:", body: "MARBLE (metamorphic). Used in cement production (when raw), sculpture and decorative building (as marble)." },
      ]},
      { heading: "Economic Uses", type: "cards", items: [
        { title: "Limestone", body: "Main raw material for CEMENT production. Also used in iron smelting (flux) and fertiliser. Dangote Cement uses Nigerian limestone." },
        { title: "Granite", body: "Building material, road construction, decorative purposes." },
        { title: "Coal (sedimentary)", body: "Fuel for power generation, steel production. Enugu, Nigeria." },
        { title: "Crude oil (sedimentary)", body: "Nigeria's main export. Petroleum products — petrol, diesel, kerosene, plastics." },
      ]},
      { heading: "Exam Questions", type: "cards", items: [
        { title: "Rock containing fossils:", body: "SEDIMENTARY. Not igneous (destroys fossils with heat). Not metamorphic (heat and pressure destroy fossils)." },
        { title: "Granite is:", body: "INTRUSIVE igneous rock. Slow cooling underground = large crystals = coarse-grained." },
        { title: "Limestone → intense heat and pressure becomes:", body: "MARBLE. Metamorphic equivalent of limestone." },
        { title: "Main raw material for cement:", body: "LIMESTONE (calcium carbonate, CaCO₃)." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Igneous = fire (from magma). Intrusive = inside (granite, coarse). Extrusive = outside (basalt, fine). Sedimentary = settled layers (fossils only here). Metamorphic = changed (limestone→marble, sandstone→quartzite, shale→slate)." }
    ]
  },

  "Geomorphology": {
    subject: "Geography",
    title: "Landforms and Geomorphological Processes",
    icon: "⛰️",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Types of Weathering", type: "cards", items: [
        { title: "Physical (mechanical) weathering", body: "Rock broken into smaller pieces WITHOUT chemical change. Freeze-thaw (frost action), exfoliation (onion weathering), pressure release." },
        { title: "Chemical weathering", body: "Chemical alteration of minerals. CARBONATION = limestone dissolved by carbonic acid (most tested). Also oxidation, hydrolysis, hydration." },
        { title: "Biological weathering", body: "Plant roots splitting rocks, burrowing animals, organic acids from decomposing plants." },
      ]},
      { heading: "River Landforms", type: "cards", items: [
        { title: "Upper course", body: "Erosion dominant. V-shaped valleys, waterfalls, rapids, interlocking spurs." },
        { title: "Middle course", body: "Meanders, river cliffs, flood plain begins." },
        { title: "Lower course", body: "Deposition dominant. Wide flood plains, ox-bow lakes, levees, DELTA at mouth." },
        { title: "Ox-bow lake formation", body: "Meander becomes increasingly curved → neck cut through (especially in floods) → old loop isolated = ox-bow lake." },
        { title: "Delta formation", body: "River deposits sediment at its MOUTH (where it meets the sea). Velocity drops suddenly. Niger Delta = one of world's largest." },
      ]},
      { heading: "Desert (Wind) Landforms", type: "cards", items: [
        { title: "Mushroom rocks (pedestal rocks)", body: "Wind carries more sand near ground → undercuts base of rock more than top → mushroom shape. Wind erosion concentrated at ground level." },
        { title: "Barchans", body: "Crescent-shaped sand dunes. Horns point DOWNWIND." },
        { title: "Seif dunes", body: "Long, parallel dunes aligned WITH the wind direction." },
        { title: "Zeugen", body: "Table-shaped rocks — hard rock on top, soft rock below eroded by wind." },
      ]},
      { heading: "Exam Questions", type: "cards", items: [
        { title: "Limestone weathered mainly by:", body: "CARBONATION. Rainwater + CO₂ = carbonic acid → dissolves limestone → caves, sinkholes, karst." },
        { title: "Ox-bow lakes formed by:", body: "Cutting off of river MEANDERS. Not glacial action, not volcanic, not wind." },
        { title: "Delta forms at:", body: "MOUTH of river where it meets the sea. Deposition where velocity drops." },
        { title: "Mushroom rock formed by:", body: "WIND EROSION (sandblasting) concentrated near ground level. Not rainfall or river action." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Carbonation = limestone dissolves in weak acid from rain. Ox-bow lake = cut-off meander. Delta = deposition at river mouth (Niger Delta). Mushroom rock = wind erodes base more than top. These four are the most tested landform questions." }
    ]
  },

  "Climate and Weather": {
    subject: "Geography",
    title: "Climate, Weather and Types of Rainfall",
    icon: "🌦️",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Weather vs Climate", type: "text",
        content: "WEATHER = atmospheric conditions at a specific place and time (short term — day to day). CLIMATE = average weather conditions over a long period (30+ years)." },
      { heading: "Measuring Instruments", type: "cards", items: [
        { title: "Barometer", body: "Measures ATMOSPHERIC PRESSURE (millibars/mb). High pressure = clear stable weather. Low pressure = clouds, wind, rain." },
        { title: "Thermometer", body: "Measures TEMPERATURE (°C or °F)." },
        { title: "Rain gauge", body: "Measures RAINFALL (millimetres)." },
        { title: "Hygrometer", body: "Measures HUMIDITY (relative humidity %)." },
        { title: "Anemometer", body: "Measures WIND SPEED." },
        { title: "Campbell-Stokes recorder", body: "Measures SUNSHINE HOURS. Glass sphere focuses sunlight to burn a card — burned length = sunshine duration." },
      ]},
      { heading: "Three Types of Rainfall", type: "cards", items: [
        { title: "Convectional rainfall", body: "Hot ground heats air → air rises, cools, condenses → heavy afternoon rain with thunder. TROPICAL areas, afternoons. Most common in equatorial regions." },
        { title: "Relief (orographic) rainfall", body: "Moist air forced to rise over mountains → cools → rains on WINDWARD side. LEEWARD side gets rain shadow (dry). Mountains cause this." },
        { title: "Frontal (cyclonic) rainfall", body: "Warm and cold air masses meet → warm air rises over cold → rain. Common in TEMPERATE regions (UK, Europe)." },
      ]},
      { heading: "Exam Questions", type: "cards", items: [
        { title: "Atmospheric pressure measured by:", body: "BAROMETER. Not thermometer (temperature), not hygrometer (humidity), not anemometer (wind speed)." },
        { title: "Campbell-Stokes recorder measures:", body: "SUNSHINE HOURS. Glass sphere burns a card where sun shines." },
        { title: "Tropical afternoon rainfall type:", body: "CONVECTIONAL. Hot ground → rising air → heavy afternoon thunderstorms." },
        { title: "Leeward side of mountain is dry because:", body: "RAIN SHADOW effect. Air descends, warms, dries out after raining on windward side." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Barometer = pressure. Anemometer = wind speed. Campbell-Stokes = sunshine. Rain gauge = rainfall. Hygrometer = humidity. Convectional = tropics afternoons. Relief = mountains, windward side rains, leeward is dry. Frontal = temperate regions." }
    ]
  },

  "Climate Types": {
    subject: "Geography",
    title: "World Climate Types — Equatorial, Desert, Mediterranean",
    icon: "🌡️",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Equatorial Climate", type: "cards", items: [
        { title: "Location", body: "5°N – 5°S of Equator. Congo Basin, Amazon Basin, SE Asia." },
        { title: "Temperature", body: "High year-round, 25-28°C. Very small annual temperature range." },
        { title: "Rainfall", body: "Over 2,000mm/year. Rain EVERY MONTH. NO dry season. Two rainfall peaks at equinoxes." },
        { title: "Vegetation", body: "Dense tropical RAINFOREST. Multilayered, high biodiversity." },
      ]},
      { heading: "Tropical Continental (Savanna) Climate", type: "cards", items: [
        { title: "Location", body: "5°-15° N and S. West Africa interior, Sudan, Sahel zone." },
        { title: "Rainfall", body: "500-1,500mm. ONE wet season and ONE dry season. ITCZ brings rain when overhead." },
        { title: "Vegetation", body: "SAVANNA — grassland with scattered trees (acacia, baobab)." },
        { title: "ITCZ", body: "Inter-Tropical Convergence Zone. Where NE and SE Trade Winds meet. Moves north/south following the sun → causes wet and dry seasons." },
      ]},
      { heading: "Hot Desert Climate", type: "cards", items: [
        { title: "Location", body: "15°-30° N and S. Sahara, Arabian, Kalahari deserts." },
        { title: "Rainfall", body: "Under 250mm/year. Very unreliable. May not rain for years." },
        { title: "Temperature", body: "Extreme daily (diurnal) range. Very hot days (50°C+), very COLD nights." },
        { title: "Why cold nights?", body: "NO CLOUD COVER → heat radiates rapidly into space at night. Clouds act as a blanket. Without them, deserts have extreme temperature swings." },
        { title: "Vegetation", body: "Sparse XEROPHYTES (deep roots, waxy leaves, succulent stems to store water)." },
      ]},
      { heading: "Mediterranean Climate", type: "cards", items: [
        { title: "Location", body: "30°-45° N and S. Mediterranean basin, California, SW Australia." },
        { title: "Unique pattern", body: "HOT DRY summers (subtropical high pressure). MILD WET winters (frontal rainfall from westerlies)." },
        { title: "Vegetation", body: "Maquis/garrigue — drought-resistant shrubs. Cork oak, olive trees, vines." },
      ]},
      { heading: "Exam Questions", type: "cards", items: [
        { title: "Equatorial climate:", body: "High temperatures and heavy rainfall THROUGHOUT THE YEAR with NO dry season. Not one dry season — that's savanna." },
        { title: "Desert cold nights:", body: "Absence of CLOUD COVER allows rapid heat loss. No cloud blanket to retain warmth." },
        { title: "Mediterranean climate:", body: "HOT DRY summers + MILD WET winters. Opposite of most climates." },
        { title: "ITCZ responsible for:", body: "Wet and dry seasons in West Africa. Brings rain when overhead, dry when it moves away." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Equatorial = always hot, always wet, no dry season. Savanna = wet season + dry season (ITCZ). Desert = less than 250mm, extreme temperatures, cold nights (no clouds). Mediterranean = summer dry, winter wet (reversed from what you expect)." }
    ]
  },

  "Vegetation Zones": {
    subject: "Geography",
    title: "World Vegetation Zones and Nigerian Vegetation",
    icon: "🌿",
    estimatedTime: "3 min read",
    sections: [
      { heading: "World Vegetation Zones", type: "cards", items: [
        { title: "Tropical rainforest", body: "Equatorial regions. Dense, multilayered. Tallest trees 50m+. Year-round growth. Congo, Amazon. Highest biodiversity." },
        { title: "Tropical savanna", body: "Between rainforest and desert. Tall grasses with scattered acacia, baobab. Wet and dry seasons. Serengeti, West African interior." },
        { title: "Hot desert", body: "Sahara, Arabian. Under 250mm rain. Sparse xerophytes — deep roots, waxy leaves, succulent stems." },
        { title: "Mediterranean scrub (maquis)", body: "Drought-resistant cork oak, olive trees, maquis shrubs. Mediterranean basin." },
        { title: "Coniferous forest (Taiga)", body: "Cold subarctic. Cone-bearing evergreen pine, spruce, fir. Canada, Russia." },
        { title: "Tundra", body: "Arctic. No trees. Mosses, lichens, sedges. Permafrost below surface." },
      ]},
      { heading: "Nigerian Vegetation Zones (South to North)", type: "cards", items: [
        { title: "1. Mangrove/Freshwater Swamp", body: "Coastal Niger Delta. Salt-tolerant mangrove trees with stilt roots and aerial roots. Adapts to tidal, brackish water." },
        { title: "2. Tropical Rainforest", body: "Southern Nigeria — Cross River, Edo, Ondo states. Dense multilayered forest." },
        { title: "3. Derived Savanna", body: "Transition zone. Forest cleared for farming, now secondary growth." },
        { title: "4. Guinea Savanna", body: "Middle belt. Tall grasses, woodland trees." },
        { title: "5. Sudan Savanna", body: "Northern Nigeria. Shorter grasses, fewer trees." },
        { title: "6. Sahel/Sub-Desert Scrub", body: "Far north. Very sparse vegetation, trees only near watercourses." },
      ]},
      { heading: "Exam Questions", type: "cards", items: [
        { title: "Sahara vegetation:", body: "SPARSE XEROPHYTES and oases. Not forest, not grasses, not deciduous trees." },
        { title: "Niger Delta vegetation zone:", body: "MANGROVE SWAMP FOREST. Salt-tolerant, stilt/prop roots, aerial roots for breathing in waterlogged soil." },
        { title: "Xerophytes are:", body: "Plants adapted to VERY LITTLE WATER — deep roots, waxy/spiny leaves, succulent water-storing stems." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Nigeria south to north: Mangrove → Rainforest → Derived Savanna → Guinea Savanna → Sudan Savanna → Sahel. Each zone has less rainfall as you go north. Mangrove = coastal, salt water. Tundra = no trees, permafrost. Taiga = conifer trees, cold." }
    ]
  },

  "Soils and Soil Conservation": {
    subject: "Geography",
    title: "Soils — Types, Profile and Conservation",
    icon: "🌱",
    estimatedTime: "2 min read",
    sections: [
      { heading: "Soil Formation Factors (CLORPT)", type: "cards", items: [
        { title: "Climate", body: "Rainfall and temperature control weathering rate and organic matter decomposition." },
        { title: "Organisms", body: "Plants, animals, microorganisms add organic matter." },
        { title: "Relief/Topography", body: "Slope affects drainage and erosion. Flat areas = deeper soils." },
        { title: "Parent material", body: "Underlying rock determines mineral content of soil." },
        { title: "Time", body: "Soils take thousands of years to develop properly." },
      ]},
      { heading: "Soil Profile (Horizons)", type: "cards", items: [
        { title: "O Horizon", body: "Surface organic layer — leaf litter, dead plant material." },
        { title: "A Horizon (TOPSOIL)", body: "Richest in HUMUS and NUTRIENTS. Most biological activity. MOST IMPORTANT for agriculture." },
        { title: "B Horizon (subsoil)", body: "Minerals leached from A accumulate here. Less organic matter." },
        { title: "C Horizon", body: "Weathered parent rock (regolith)." },
        { title: "D/R Horizon", body: "Solid bedrock." },
      ]},
      { heading: "Soil Conservation Methods", type: "cards", items: [
        { title: "Terracing", body: "Cutting STEPS into hillside to reduce runoff and erosion. Ancient practice — Incas, Asian rice paddies." },
        { title: "Contour ploughing", body: "Ploughing ACROSS slopes (following contours), not up/down. Reduces runoff." },
        { title: "Mulching", body: "Covering soil with organic material — protects from erosion, retains moisture." },
        { title: "Afforestation", body: "Tree planting to bind soil with roots, break wind, reduce runoff." },
        { title: "Windbreaks/shelter belts", body: "Rows of trees to reduce WIND erosion." },
        { title: "Crop rotation", body: "Alternating crops to restore nutrients (especially nitrogen fixation by legumes)." },
      ]},
      { heading: "Exam Questions", type: "cards", items: [
        { title: "Most important horizon for agriculture:", body: "A HORIZON (topsoil). Richest in humus and nutrients. Losing it through erosion is devastating." },
        { title: "Terracing involves:", body: "Cutting STEPS into a hillside. Converts steep slopes into flat platforms that hold soil and water." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "A Horizon (topsoil) = most important for farming. Terracing = steps on hillside. Contour ploughing = across slope not down. Mulching = organic cover. Afforestation = plant trees. All conservation methods reduce EROSION and water RUNOFF." }
    ]
  },

  "Rivers and Drainage": {
    subject: "Geography",
    title: "Rivers, Drainage and Major Nigerian Rivers",
    icon: "🌊",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Drainage Terminology", type: "cards", items: [
        { title: "Drainage basin", body: "Total area drained by a river and ALL its tributaries. Also called catchment area." },
        { title: "Watershed (divide)", body: "Highland boundary separating one drainage basin from another." },
        { title: "Tributary", body: "Smaller river joining a larger one." },
        { title: "Confluence", body: "Where two rivers MEET." },
        { title: "Source", body: "Where a river BEGINS (spring, highland area)." },
        { title: "Mouth", body: "Where a river ENDS (empties into sea, lake or another river)." },
      ]},
      { heading: "Major Rivers of Nigeria", type: "cards", items: [
        { title: "River Niger", body: "LONGEST river in West Africa. Originates in Guinea highlands. Forms Niger Delta in southern Nigeria. 4,180km total. Nigeria's most important river." },
        { title: "River Benue", body: "Major TRIBUTARY of Niger. Meets Niger at LOKOJA (confluence). Separates northern from southern Nigeria." },
        { title: "River Kaduna", body: "Tributary of Niger. Northern Nigeria. Shiroro Dam built on it." },
        { title: "Cross River", body: "Drains southeastern Nigeria. Cross River State named after it." },
      ]},
      { heading: "Lakes and Dams", type: "cards", items: [
        { title: "Lake Chad", body: "Shared by NIGERIA, NIGER, CHAD and CAMEROON (4 countries). Has shrunk to ~10% of 1963 size due to climate change and overuse." },
        { title: "Kainji Lake", body: "Nigeria's largest ARTIFICIAL lake. Created by Kainji Dam on River Niger (1968, under Gowon). Nigeria's largest hydroelectric dam." },
        { title: "Shiroro Dam", body: "Built on River Kaduna." },
      ]},
      { heading: "Exam Questions", type: "cards", items: [
        { title: "Confluence of Rivers Niger and Benue:", body: "LOKOJA, Kogi State. Nigeria's famous 'city at the confluence'." },
        { title: "Lake Chad shared by:", body: "Nigeria, NIGER, CHAD and CAMEROON — 4 countries. Not 3, not just 2." },
        { title: "Nigeria's largest hydroelectric dam:", body: "KAINJI DAM on River Niger in Niger State. Completed 1968." },
        { title: "Area drained by a river system:", body: "DRAINAGE BASIN (catchment area). Bounded by the watershed." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Niger = longest in West Africa. Niger + Benue meet at Lokoja. Lake Chad = 4 countries (Nigeria, Niger, Chad, Cameroon). Kainji Dam = largest in Nigeria, on Niger River, 1968. Lokoja is the confluence city." }
    ]
  },

  "Population Geography": {
    subject: "Geography",
    title: "Population — Distribution, Growth and Migration",
    icon: "👥",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Population Distribution", type: "cards", items: [
        { title: "Dense areas", body: "River valleys (Nile), fertile plains, coastal areas, industrial cities. Bangladesh, Netherlands, Lagos, Kano." },
        { title: "Sparse areas", body: "Deserts (Sahara), mountain tops, Arctic, Amazon — hostile conditions." },
        { title: "Why Nile Valley is dense:", body: "Fertile alluvial soil deposited by floods, reliable water supply, flat farmland — despite surrounding desert." },
      ]},
      { heading: "Demographic Transition Model (DTM)", type: "cards", items: [
        { title: "Stage 1", body: "HIGH birth rate, HIGH death rate → slow growth. Pre-industrial societies." },
        { title: "Stage 2", body: "HIGH birth rate, FALLING death rate → RAPID growth. Improving healthcare, no family planning yet. NIGERIA and most African countries are here." },
        { title: "Stage 3", body: "FALLING birth rate, low death rate → slowing growth. Family planning, urbanisation." },
        { title: "Stage 4", body: "LOW birth rate, LOW death rate → stable/very slow growth. Developed countries (UK, Germany)." },
      ]},
      { heading: "Migration Types", type: "cards", items: [
        { title: "Rural-urban migration", body: "Movement from countryside to city. Major trend in Nigeria — cities growing rapidly." },
        { title: "Brain drain", body: "Emigration of EDUCATED and SKILLED people (doctors, engineers, academics) to developed countries. Serious problem for Nigeria." },
        { title: "Push factors", body: "Reasons to LEAVE: unemployment, poverty, drought, conflict, lack of services." },
        { title: "Pull factors", body: "Attractions of DESTINATION: jobs, higher wages, education, healthcare, safety." },
      ]},
      { heading: "Exam Questions", type: "cards", items: [
        { title: "High birth rate + falling death rate = DTM Stage:", body: "STAGE 2. Rapid population growth. Most African countries including Nigeria." },
        { title: "Brain drain = ", body: "Emigration of EDUCATED and SKILLED professionals from developing to developed countries. Not studying abroad. Not internal migration." },
        { title: "Nile Valley densely populated because:", body: "Fertile alluvial soil, reliable water, flat terrain — despite being surrounded by desert." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Nigeria = Stage 2 of DTM (high birth rate, falling death rate = rapid growth). Brain drain = skilled people leaving. Push = bad things at home. Pull = good things at destination. Rural-urban migration is Nigeria's major internal population movement." }
    ]
  },

  "Nigerian Agriculture": {
    subject: "Geography",
    title: "Agriculture — Types and Nigerian Cash Crops",
    icon: "🌾",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Types of Agriculture", type: "cards", items: [
        { title: "Subsistence farming", body: "Farming to feed FAMILY only — no surplus for sale. Small scale, traditional methods. Common in rural Nigeria." },
        { title: "Commercial farming", body: "Farming for PROFIT — produce sold in market. Large scale, modern inputs." },
        { title: "Nomadic pastoralism", body: "Herders move livestock SEASONALLY for pasture. Fulani herdsmen in Nigeria — classic example." },
        { title: "Shifting cultivation", body: "Farmers clear, farm, exhaust land then MOVE to new plot. Traditional in forest areas." },
        { title: "Plantation agriculture", body: "Large-scale commercial growing of ONE CROP (monoculture). Cocoa, rubber, palm oil, tea." },
        { title: "Mixed farming", body: "Growing crops AND rearing livestock on the same farm." },
      ]},
      { heading: "Nigerian Cash Crops by Region", type: "cards", items: [
        { title: "Cocoa — Southwest Nigeria", body: "Ondo, Osun, Ogun, Ekiti, Cross River states. Nigeria's top agricultural export. Once world's largest producer." },
        { title: "Groundnut — Northern Nigeria", body: "Once Nigeria's top export before oil. Still important." },
        { title: "Cotton — Northern Nigeria", body: "Raw material for textile industry. Kano, Kaduna." },
        { title: "Palm oil/kernel — Southern Nigeria", body: "Palm Belt in south. Used in food, soap, margarine." },
        { title: "Rubber — Edo, Delta, Ondo states", body: "Raw material for tyres and rubber products." },
      ]},
      { heading: "Exam Questions", type: "cards", items: [
        { title: "Fulani cattle herders moving seasonally practice:", body: "NOMADIC PASTORALISM. They move livestock to find fresh pasture and water." },
        { title: "Main cash crop of southwestern Nigeria:", body: "COCOA. Groundnut and cotton are northern. Rubber is mainly Edo/Delta." },
        { title: "Farming to feed family only:", body: "SUBSISTENCE farming. No surplus for sale. Small scale." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Cocoa = southwest (Ondo, Osun, Ogun). Groundnut and Cotton = north. Palm oil = south. Rubber = Edo/Delta/Ondo. Fulani = nomadic pastoralism (move livestock). Subsistence = family use. Commercial = for sale and profit." }
    ]
  },

  "Nigerian Minerals and Industry": {
    subject: "Geography",
    title: "Mining, Energy and Industry in Nigeria",
    icon: "⛏️",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Nigeria's Key Mineral Resources", type: "cards", items: [
        { title: "Crude oil and natural gas", body: "Niger Delta (Bayelsa, Delta, Rivers, Akwa Ibom, Cross River). Dominant export earner. Africa's largest natural gas reserves." },
        { title: "Coal", body: "ENUGU State. Declining but large reserves. Powers railway historically." },
        { title: "Iron ore", body: "ITAKPE, Kogi State. Used in Ajaokuta Steel Company." },
        { title: "Tin and Columbite", body: "JOS PLATEAU, Plateau State. Historically important. Columbite used in electronics." },
        { title: "Limestone", body: "Sokoto, Benue, Ogun, Cross River. Used for CEMENT production (Dangote, BUA)." },
        { title: "Gold", body: "Zamfara, Kebbi, Niger, Osun states. Growing (mostly artisanal) mining." },
        { title: "Bitumen", body: "Ondo, Lagos, Ogun, Edo states. One of world's largest deposits." },
      ]},
      { heading: "Energy Sources", type: "cards", items: [
        { title: "Kainji Dam", body: "Nigeria's LARGEST hydroelectric dam. River Niger, Niger State. Completed 1968 under Gowon. Created Kainji Lake." },
        { title: "Shiroro Dam", body: "River Kaduna. Second major hydroelectric dam." },
        { title: "Jebba Dam", body: "River Niger. Smaller than Kainji." },
        { title: "Petroleum", body: "Nigeria's main energy source and export. Niger Delta." },
      ]},
      { heading: "Industrial Location", type: "cards", items: [
        { title: "Aluminium smelting", body: "Located near HYDROELECTRIC POWER — requires enormous electricity. Ghana's Volta Aluminium near Akosombo Dam is the classic example." },
        { title: "Iron and steel", body: "Located near raw materials — iron ore and coal/coke. Ajaokuta uses Itakpe iron ore." },
        { title: "Cement industry", body: "Located near LIMESTONE quarries. Dangote Cement Obajana (Kogi), BUA, WAPCO Ewekoro." },
        { title: "Nigeria's busiest seaport", body: "APAPA PORT, Lagos. Handles majority of Nigeria's imports. Tin Can Island also in Lagos." },
      ]},
      { heading: "Exam Questions", type: "cards", items: [
        { title: "Tin mining concentrated in:", body: "JOS PLATEAU, Plateau State. Not Enugu, not Niger Delta." },
        { title: "Coal deposits mainly in:", body: "ENUGU State. Udi coal mines. Supplied colonial railway." },
        { title: "Nigeria's largest hydroelectric dam:", body: "KAINJI DAM. River Niger, Niger State. 1968." },
        { title: "Aluminium smelting best located near:", body: "LARGE HYDROELECTRIC POWER STATIONS. Requires enormous cheap electricity." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Oil = Niger Delta. Coal = Enugu. Iron ore = Itakpe (Kogi). Tin = Jos Plateau. Limestone = cement. Kainji = largest dam (Niger State, 1968). Apapa = busiest seaport. Aluminium smelting needs hydroelectric power." }
    ]
  },

  "Nigerian Physical Geography": {
    subject: "Geography",
    title: "Nigeria — Physical Features, Climate and States",
    icon: "🇳🇬",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Nigeria's Major Landforms", type: "cards", items: [
        { title: "Coastal Lowlands", body: "Niger Delta, mangrove swamps, beach ridges along Gulf of Guinea coast." },
        { title: "Mambilla Plateau", body: "Taraba State. Contains Nigeria's HIGHEST POINT — Chappal Waddi (~2,419m). NOT Jos Plateau." },
        { title: "Jos Plateau", body: "~1,200m above sea level. Temperate climate. TIN and COLUMBITE mining. Nigeria's most famous plateau." },
        { title: "Niger-Benue Trough", body: "Central valley following the two main rivers through Nigeria." },
        { title: "Northern Plains", body: "Flat, low plains sloping to Lake Chad basin in far north." },
        { title: "Obudu Plateau", body: "Cross River State. Tourist destination. Famous Obudu Ranch." },
      ]},
      { heading: "Nigeria's Climate Features", type: "cards", items: [
        { title: "South (coast)", body: "Hot and wet. Over 3,000mm rainfall/year. Very short dry season." },
        { title: "Middle Belt", body: "Two wet seasons, one dry season. 1,000-1,500mm annual rainfall." },
        { title: "North", body: "Long dry season, short wet season. Under 750mm. Harmattan wind dominates dry season." },
        { title: "HARMATTAN WIND", body: "Dry, dusty NE Trade Wind. Blows from SAHARA toward Gulf of Guinea. November–March. Brings cool, dry, dusty conditions. Causes respiratory and skin problems." },
      ]},
      { heading: "Nigeria's States and Capital", type: "cards", items: [
        { title: "States", body: "36 states + FCT Abuja. Created gradually: 3 regions (1963) → 12 (1967) → 19 (1976) → 21 (1987) → 30 (1991) → 36 (1996)." },
        { title: "6 Geopolitical Zones", body: "North-West (7 states), North-East (6), North-Central (6+FCT), South-West (6), South-East (5), South-South (6)." },
        { title: "Federal Capital Abuja", body: "Officially replaced Lagos on DECEMBER 12, 1991 under Babangida." },
        { title: "Largest city", body: "LAGOS — estimated 15-20 million in metro area. Financial and commercial capital." },
        { title: "Nigeria's area", body: "923,768 km². Africa's most populous country (200+ million, 2023 estimate)." },
      ]},
      { heading: "Exam Questions", type: "cards", items: [
        { title: "Nigeria's highest point:", body: "MAMBILLA PLATEAU (Chappal Waddi, ~2,419m), Taraba State. NOT Jos Plateau (1,200m)." },
        { title: "How many states does Nigeria have:", body: "36 STATES plus FCT Abuja." },
        { title: "Abuja became capital officially in:", body: "DECEMBER 12, 1991. Under Babangida." },
        { title: "Harmattan blows from:", body: "SAHARA DESERT toward Gulf of Guinea. Dry, dusty NE wind. November–March." },
        { title: "Jos Plateau known for:", body: "TIN and COLUMBITE mining. Temperate climate (~1,200m). NOT Nigeria's highest point." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Mambilla = highest (2,419m). Jos = famous plateau (1,200m, tin). Harmattan = from Sahara, November-March, dry and dusty. Abuja = capital since December 12, 1991. 36 states + FCT. Lagos = largest city. Nigeria = Africa's most populous." }
    ]
  },
  
  // ============================================================
// STUDY GUIDES ADDITIONS — BATCH 4
// Biology and Economics — Complete Subjects
// Paste into STUDY_GUIDES in src/data/studyGuides.js
// Add after existing entries (before the closing })
// ============================================================

  // ==========================================
  // BIOLOGY — ALL NEW ENTRIES
  // ==========================================

  "Cell Biology": {
    subject: "Biology",
    title: "Cell Structure and Organelles",
    icon: "🔬",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Key Organelles and Functions", type: "cards", items: [
        { title: "Nucleus", body: "Controls all cell activities. Contains DNA. Site of transcription." },
        { title: "Mitochondria", body: "Site of AEROBIC RESPIRATION. Produces ATP (energy). More mitochondria = more energy needed." },
        { title: "Ribosome", body: "Site of PROTEIN SYNTHESIS. Found on rough ER and free in cytoplasm." },
        { title: "Golgi apparatus", body: "Packages and secretes proteins. Processes cell products for export." },
        { title: "Chloroplast", body: "Site of PHOTOSYNTHESIS. Contains chlorophyll. Found only in plant cells." },
        { title: "Cell membrane", body: "Controls movement of substances in/out of cell. SELECTIVELY PERMEABLE." },
        { title: "Centriole", body: "Involved in cell division (mitosis). Found in ANIMAL cells only, not plant cells." },
        { title: "Lysosome", body: "Contains digestive enzymes. Breaks down waste materials and invading bacteria." },
      ]},
      { heading: "Prokaryote vs Eukaryote", type: "cards", items: [
        { title: "Prokaryotic cells", body: "NO membrane-bound nucleus. DNA floats in cytoplasm. Examples: bacteria and blue-green algae (Kingdom Monera)." },
        { title: "Eukaryotic cells", body: "TRUE membrane-bound nucleus. All other organisms — plants, animals, fungi, protists." },
        { title: "Key defining difference", body: "ABSENCE OF NUCLEAR MEMBRANE in prokaryotes. This is the most tested distinction." },
      ]},
      { heading: "Exam Questions", type: "cards", items: [
        { title: "Controls movement of substances in/out of cell:", body: "CYTOPLASMIC (plasma) MEMBRANE. Not nuclear membrane (controls nucleus only)." },
        { title: "Cell with highest concentration of mitochondria:", body: "SPERM CELL. Needs enormous energy to swim. Red blood cells have NO mitochondria." },
        { title: "Two organelles in mitotic division:", body: "NUCLEUS (contains chromosomes) and CENTRIOLE (forms spindle fibres)." },
        { title: "Prokaryotic cells found in:", body: "MONERANS (bacteria and blue-green algae). No nuclear membrane." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Mitochondria = respiration (energy). Ribosome = protein synthesis. Chloroplast = photosynthesis. Centriole = animal cells only (cell division). Cell membrane = selectively permeable (controls entry/exit). These five are the most tested organelle functions." }
    ]
  },

  "Cell Division": {
    subject: "Biology",
    title: "Mitosis, Meiosis and Cell Processes",
    icon: "🧬",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Mitosis vs Meiosis", type: "cards", items: [
        { title: "MITOSIS", body: "Produces 2 daughter cells IDENTICAL to parent. Same chromosome number (diploid→diploid). Used for growth, repair, asexual reproduction. In somatic (body) cells." },
        { title: "MEIOSIS", body: "Produces 4 daughter cells with HALF chromosome number (diploid→haploid). Used for gamete formation. Produces genetic variation (crossing over). Two divisions." },
        { title: "Phases of mitosis", body: "Prophase → Metaphase → Anaphase → Telophase. ANAPHASE = chromosomes move to opposite poles. Metaphase = chromosomes line up at equator." },
      ]},
      { heading: "Osmosis and Diffusion", type: "cards", items: [
        { title: "Diffusion", body: "Movement of molecules from HIGH to LOW concentration. No energy needed." },
        { title: "Osmosis", body: "Movement of WATER through semi-permeable membrane from dilute to concentrated solution." },
        { title: "Active transport", body: "Movement AGAINST concentration gradient. Requires energy (ATP)." },
        { title: "Plasmolysis (plant)", body: "Cell in HYPERTONIC solution → water leaves → cell shrinks from wall. Plant cells only." },
        { title: "Crenation (animal)", body: "Red blood cells in HYPERTONIC solution → water leaves → cells shrink and become spiky." },
        { title: "Turgid", body: "Cell in HYPOTONIC solution → water enters → cell swells. Plant cells become firm (turgid)." },
      ]},
      { heading: "DNA", type: "cards", items: [
        { title: "Base pairs (Watson-Crick)", body: "A pairs with T (Adenine-Thymine). G pairs with C (Guanine-Cytosine). Double helix structure." },
        { title: "DNA location", body: "Found in: nucleus, mitochondria, and chloroplasts. Organic molecule (contains carbon)." },
      ]},
      { heading: "Exam Questions", type: "cards", items: [
        { title: "Stage where chromosomes move to opposite poles:", body: "ANAPHASE. Spindle fibres shorten and pull chromatids apart." },
        { title: "Spirogyra in strong sugar solution — cell plasmolysed:", body: "VERY STRONG sugar solution (hypertonic). External solution more concentrated than cell → water leaves → plasmolysis." },
        { title: "Red blood cells in hypertonic solution:", body: "CRENATED (shrink and become spiky). Not plasmolysed (plant term). Not haemolysed (happens in hypotonic)." },
        { title: "Watson-Crick base pair:", body: "T-A (Thymine pairs with Adenine). G-T, T-C, G-A are all WRONG pairings." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Mitosis = identical copies (2 cells). Meiosis = gametes, half chromosomes (4 cells). ANAPHASE = chromosomes move apart. Plasmolysis = plant + hypertonic. Crenation = animal + hypertonic. A-T, G-C are the only correct base pairs." }
    ]
  },

  "Classification and Taxonomy": {
    subject: "Biology",
    title: "Classification — Kingdoms and Taxonomy",
    icon: "🌿",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Levels of Classification", type: "text",
        content: "From broadest to most specific: Kingdom → Phylum → Class → Order → Family → Genus → Species. Memory aid: 'King Philip Came Over For Good Soup'. SPECIES is the LOWEST level." },
      { heading: "Five Kingdoms", type: "cards", items: [
        { title: "Monera", body: "PROKARYOTES — bacteria and blue-green algae. No nuclear membrane. Reproduce by binary fission." },
        { title: "Protista", body: "Simple eukaryotes — amoeba, paramecium, Euglena, algae. Unicellular mostly." },
        { title: "Fungi", body: "Absorb food from dead matter (saprophytes) — mushrooms, Mucor, Rhizopus. Not photosynthetic." },
        { title: "Plantae", body: "Multicellular, photosynthetic — mosses, ferns, flowering plants." },
        { title: "Animalia", body: "Multicellular, heterotrophic — sponges, worms, insects, vertebrates." },
      ]},
      { heading: "Vertebrate Classes", type: "cards", items: [
        { title: "Pisces (Fish)", body: "Cold-blooded. Gills. Scales. 2-chambered heart. Fins. Single closed circulation." },
        { title: "Amphibia (Frogs)", body: "Cold-blooded. Moist skin. Eggs in water. 3-chambered heart. Larvae have gills." },
        { title: "Reptilia (Reptiles)", body: "Cold-blooded. Dry scales. Eggs on land with shell. 3-chambered heart (incomplete)." },
        { title: "Aves (Birds)", body: "WARM-blooded. Feathers. Beak. Hard-shelled eggs. 4-chambered heart. Hollow bones." },
        { title: "Mammalia (Mammals)", body: "WARM-blooded. Hair/fur. Mammary glands. 4-chambered heart. Live birth (most)." },
      ]},
      { heading: "Evolutionary Sequence", type: "cards", items: [
        { title: "Order of evolution", body: "Fish → Amphibia → Reptilia → Aves/Mammalia. From simplest to most complex." },
        { title: "Examples", body: "Tilapia (fish) → Bufo/frog (amphibia) → Agama lizard (reptile) → Rattus/rat (mammal)." },
        { title: "Feature linking birds to reptiles", body: "SCALES — birds have scales on legs/feet. Feathers are thought to have evolved from modified scales." },
      ]},
      { heading: "Exam Questions", type: "cards", items: [
        { title: "Lowest category of classification:", body: "SPECIES. Members can interbreed to produce fertile offspring." },
        { title: "Which has mammary gland:", body: "WHALE. Dogfish, catfish and shark are fish — no mammary glands. Whale is a mammal." },
        { title: "Fish are cold-blooded because:", body: "Body temperature DEPENDENT ON SURROUNDINGS. Cannot internally regulate temperature." },
        { title: "Organism with homodont dentition:", body: "AGAMA LIZARD. All teeth same shape. Mammals (rat, cat, human) have heterodont (different tooth types)." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "4-chambered heart = birds and mammals only (no mixing of blood). 3-chambered = amphibia and reptiles. 2-chambered = fish. Warm-blooded = birds and mammals. Mammary glands = mammals only (whales are mammals, not fish)." }
    ]
  },

  "Genetics and Inheritance": {
    subject: "Biology",
    title: "Genetics — Crosses, Blood Groups and Mutations",
    icon: "🧪",
    estimatedTime: "4 min read",
    sections: [
      { heading: "Key Terms", type: "cards", items: [
        { title: "Genotype", body: "GENETIC MAKE-UP of an organism (e.g. AA, Aa, aa). What the genes actually are." },
        { title: "Phenotype", body: "PHYSICAL APPEARANCE expressed. What you can see/observe." },
        { title: "Dominant allele", body: "Expressed when present — even ONE copy. Capital letter (A)." },
        { title: "Recessive allele", body: "Only expressed when TWO copies present. Small letter (a)." },
        { title: "Homozygous", body: "Same alleles — AA (dominant homozygous) or aa (recessive homozygous)." },
        { title: "Heterozygous", body: "Different alleles — Aa. Shows dominant phenotype but carries recessive allele." },
      ]},
      { heading: "Monohybrid Cross — F2 Ratios", type: "cards", items: [
        { title: "Rr × Rr cross gives:", body: "Genotype ratio: 1 RR : 2 Rr : 1 rr. Phenotype ratio: 3 Round : 1 Wrinkled (3:1)." },
        { title: "7324 total F2 offspring:", body: "Wrinkled (rr) = 7324 × 1/4 = 1831. Round = 7324 × 3/4 = 5493." },
      ]},
      { heading: "Blood Groups (ABO System)", type: "cards", items: [
        { title: "Group O", body: "Genotype ii. No antigens. Antibodies anti-A and anti-B. UNIVERSAL DONOR." },
        { title: "Group AB", body: "Genotype IᴬIᴮ. Both antigens A and B. NO antibodies. UNIVERSAL RECIPIENT." },
        { title: "Group A", body: "Genotype IᴬIᴬ or Iᴬi. Antigen A. Antibody anti-B." },
        { title: "Group B", body: "Genotype IᴮIᴮ or Iᴮi. Antigen B. Antibody anti-A." },
        { title: "Lukas (O=ii) × Mary (AB=IᴬIᴮ):", body: "Children are Iᴬi (Group A) or Iᴮi (Group B). ZERO chance of Group O. Probability = 0." },
      ]},
      { heading: "Sickle Cell and Sex-Linked Inheritance", type: "cards", items: [
        { title: "Sickle cell genotypes", body: "HbAHbA = normal. HbAHbS = CARRIER/TRAIT (AS, usually healthy). HbSHbS = SICKLE CELL DISEASE." },
        { title: "AS × AS cross gives:", body: "1 AA (normal) : 2 AS (carrier) : 1 SS (disease). 25% chance of disease." },
        { title: "Sex-linked disease mainly in males:", body: "HAEMOPHILIA (and colour blindness). X-linked recessive. Males (XY) only need ONE defective X to have the disease." },
      ]},
      { heading: "Exam Questions", type: "cards", items: [
        { title: "Genetic make-up of organism:", body: "GENOTYPE. Not phenotype (that is what you can see/observe)." },
        { title: "Universal recipient:", body: "GROUP AB. Has no antibodies → accepts all blood types." },
        { title: "Universal donor:", body: "GROUP O. Has no antigens → no rejection reaction." },
        { title: "Sex-linked disease mainly in males:", body: "HAEMOPHILIA. X-linked recessive. Males cannot be 'carriers' — they either have it or don't." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "F2 phenotype ratio = 3:1 (dominant:recessive). Blood groups: O = universal donor (no antigens). AB = universal recipient (no antibodies). AS = carrier (healthy). SS = sickle cell disease. Haemophilia and colour blindness = X-linked, mainly males." }
    ]
  },

  "Ecology and Environment": {
    subject: "Biology",
    title: "Ecology — Food Webs, Cycles and Relationships",
    icon: "🌍",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Ecological Relationships", type: "cards", items: [
        { title: "Mutualism", body: "BOTH organisms benefit. Nitrogen-fixing bacteria (Rhizobium) in legume roots. Lichen (alga + fungus)." },
        { title: "Commensalism", body: "ONE benefits, other UNAFFECTED. Barnacles on whales. Birds on rhino." },
        { title: "Parasitism", body: "ONE benefits (parasite), other HARMED (host). Tapeworm in man. Mistletoe on tree." },
        { title: "Saprophyte", body: "Feeds on DEAD/DECAYING organic matter. Mushrooms, Mucor, Rhizopus. Decomposers." },
      ]},
      { heading: "Abiotic vs Biotic Factors", type: "cards", items: [
        { title: "Abiotic (non-living) factors", body: "Temperature, light, humidity, rainfall, pH, altitude, salinity, wind. These are ALL non-living physical factors." },
        { title: "Biotic (living) factors", body: "Predation, competition, parasitism, mutualism, grazing. Any factor involving living organisms." },
        { title: "Completely abiotic set:", body: "Wind, altitude, humidity, light — all four are non-living. Watch out for bacteria, plankton, corn — these are biotic." },
      ]},
      { heading: "Nitrogen and Carbon Cycles", type: "cards", items: [
        { title: "Nitrogen fixation", body: "N₂ → NH₃/NH₄⁺ by Rhizobium (in legume roots), Azotobacter (free living), and LIGHTNING." },
        { title: "Nitrification", body: "NH₄⁺ → NO₂⁻ → NO₃⁻ by Nitrosomonas and Nitrobacter bacteria." },
        { title: "Lightning in nitrogen cycle", body: "Energy of lightning causes O₂ and N₂ to combine → forms nitrates → absorbed by plants." },
        { title: "Photosynthesis removes CO₂", body: "Photosynthesis REMOVES CO₂ from atmosphere. Respiration, combustion, and putrefaction RELEASE CO₂." },
      ]},
      { heading: "Plant Adaptation Terms", type: "cards", items: [
        { title: "Hydrophyte", body: "Adapted to AQUATIC/WET environments. Water lily, water hyacinth." },
        { title: "Xerophyte", body: "Adapted to DRY/DESERT environments. Cactus, euphorbia. Deep roots, waxy leaves." },
        { title: "Halophyte", body: "Adapted to SALTY environments. Salt marshes, MANGROVES. Excrete or tolerate salt." },
        { title: "Epiphyte", body: "Grows ON OTHER PLANTS for support. Orchids, mosses. Not parasitic — doesn't take nutrients." },
      ]},
      { heading: "Exam Questions", type: "cards", items: [
        { title: "Nitrogen-fixing bacteria and cowpea:", body: "MUTUALISM. Rhizobium fixes N₂ for plant; plant gives shelter and food to bacteria. Both benefit." },
        { title: "Organism feeding on dead plants:", body: "SAPROPHYTE. Not parasite (needs living host). Not commensal." },
        { title: "Photosynthesis and CO₂:", body: "Photosynthesis DOES NOT introduce CO₂ — it REMOVES it. Respiration, breathing and putrefaction release CO₂." },
        { title: "Plants in salty marsh:", body: "HALOPHYTES. Not hydrophytes (water), not xerophytes (dry)." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Mutualism = both win. Commensalism = one wins, one neutral. Parasitism = one wins, one loses. Saprophyte = feeds on dead matter (decomposer). Rhizobium in legumes = mutualism. Photosynthesis REMOVES CO₂, does not release it." }
    ]
  },

  "Nutrition and Digestion": {
    subject: "Biology",
    title: "Food Tests, Digestion and Digestive Organs",
    icon: "🍎",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Food Tests", type: "cards", items: [
        { title: "Starch test", body: "IODINE SOLUTION → blue-black colour. Positive = starch present." },
        { title: "Reducing sugars test", body: "BENEDICT'S SOLUTION + heat → brick-red/orange precipitate. Positive = glucose/reducing sugar." },
        { title: "Protein test (Biuret)", body: "NaOH + CuSO₄ (Biuret reagent) → PURPLE/VIOLET colour. Positive = protein." },
        { title: "Fats and oils test", body: "SUDAN III → red/orange colour. OR ethanol emulsion test → white milky emulsion." },
        { title: "Vitamin C test", body: "DCPIP solution → DECOLOURISED (turns colourless). Positive = Vitamin C present." },
        { title: "Water test", body: "Anhydrous COBALT CHLORIDE paper: BLUE when dry → turns PINK when water present." },
      ]},
      { heading: "Digestive Organs and Functions", type: "cards", items: [
        { title: "Liver", body: "PRODUCES BILE (emulsifies fats). Stores glycogen. Detoxifies blood. Produces blood proteins." },
        { title: "Gall bladder", body: "STORES bile (does NOT produce it). This distinction is heavily tested every year." },
        { title: "Pancreas", body: "Produces pancreatic juice: amylase (starch), lipase (fats), trypsin (proteins)." },
        { title: "Stomach", body: "Pepsin → proteins to peptides. HCl kills bacteria and activates pepsin." },
        { title: "Small intestine", body: "Main site of digestion AND absorption. Villi increase surface area for absorption." },
      ]},
      { heading: "Specific Enzymes", type: "cards", items: [
        { title: "Rennin", body: "CURDLES MILK in stomach → converts caseinogen to solid casein. Important in infants." },
        { title: "Invertase", body: "Breaks down SUCROSE (cane sugar) into glucose + fructose." },
        { title: "Ptyalin (salivary amylase)", body: "Breaks starch to maltose in mouth." },
        { title: "Lipase", body: "Breaks down FATS/OILS into fatty acids and glycerol." },
      ]},
      { heading: "Exam Questions", type: "cards", items: [
        { title: "Organ that produces bile:", body: "LIVER. Gall bladder only STORES bile. This is the most common trick question in Biology." },
        { title: "Enzyme acting on milk in stomach:", body: "RENNIN. Not trypsin (works on proteins in small intestine). Rennin specifically curdles milk." },
        { title: "Enzyme breaking down cane sugar:", body: "INVERTASE (sucrase). Not lipase (fats), not ptyalin (starch)." },
        { title: "Water loss from leaf detected by:", body: "BLUE COBALT CHLORIDE paper turns PINK. Anhydrous cobalt chloride is the water indicator." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "LIVER produces bile. GALL BLADDER stores bile. This appears every year. Iodine = starch (blue-black). Benedict's = glucose (red). Biuret = protein (purple). Sudan III = fats. Rennin = curdles milk. Invertase = sucrose." }
    ]
  },

  "Respiration and Circulation": {
    subject: "Biology",
    title: "Respiration, Heart and Blood Vessels",
    icon: "❤️",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Types of Respiration", type: "cards", items: [
        { title: "Aerobic respiration", body: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + 38 ATP. In MITOCHONDRIA. More energy. Requires oxygen." },
        { title: "Anaerobic in YEAST", body: "Glucose → ETHANOL + CO₂ + 2 ATP. FERMENTATION — used in bread making and alcohol production." },
        { title: "Anaerobic in animals", body: "Glucose → LACTIC ACID + 2 ATP. Causes muscle fatigue during intense exercise." },
        { title: "Glycolysis", body: "Breakdown of glucose to pyruvate in CYTOPLASM. Produces net 2 ATP. Occurs first in both aerobic and anaerobic." },
      ]},
      { heading: "Types of Circulation", type: "cards", items: [
        { title: "Single/closed circulation", body: "FISH. Blood passes heart ONCE per cycle. 2-chambered heart. No mixing concerns." },
        { title: "Double/closed circulation", body: "MAMMALS and BIRDS. Blood passes heart TWICE (pulmonary + systemic). 4-chambered heart prevents mixing of oxygenated/deoxygenated blood." },
        { title: "Open circulation", body: "INSECTS. Blood not in closed vessels — bathes organs directly." },
      ]},
      { heading: "Blood Vessels", type: "cards", items: [
        { title: "Arteries", body: "Carry blood AWAY from heart. Thick muscular elastic walls. HIGH pressure. NO valves (except at heart origin)." },
        { title: "Veins", body: "Carry blood TO heart. Thin walls. VALVES to prevent backflow. Low pressure." },
        { title: "Capillaries", body: "ONE CELL thick. Site of exchange — O₂ and nutrients to tissues, CO₂ and waste to blood. Slow flow for adequate exchange time." },
      ]},
      { heading: "Exam Questions", type: "cards", items: [
        { title: "Anaerobic respiration in yeast produces:", body: "CO₂ and ETHANOL. Not water (that's aerobic). Used in bread making and brewing." },
        { title: "O₂ passes from alveoli to blood by:", body: "DIFFUSION. From high concentration in alveoli to low concentration in blood. Not osmosis (water only)." },
        { title: "Feature NOT in arteries:", body: "VALVES throughout length. Arteries don't have valves — VEINS have valves to prevent backflow." },
        { title: "Universal recipient:", body: "GROUP AB. No antibodies → accepts all blood. Universal DONOR = Group O (no antigens)." },
        { title: "Rats died in airtight box:", body: "Used up available OXYGEN. Not nitrogen, not CO₂ (CO₂ is toxic but lack of O₂ is primary cause)." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Aerobic = mitochondria, 38 ATP, needs O₂. Anaerobic yeast = ethanol + CO₂. Glycolysis = cytoplasm, 2 ATP. Arteries away from heart (no valves). Veins to heart (have valves). Fish = 2-chambered, single circulation. Mammals = 4-chambered, double circulation." }
    ]
  },

  "Nervous System and Hormones": {
    subject: "Biology",
    title: "Nervous System, Reflex Arc and Hormones",
    icon: "🧠",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Types of Neurons", type: "cards", items: [
        { title: "Sensory (afferent) neuron", body: "Carries impulse FROM sense organ TO brain/spinal cord." },
        { title: "Motor (efferent) neuron", body: "Carries impulse FROM brain/spinal cord TO muscle or gland." },
        { title: "Relay (connector) neuron", body: "Connects sensory to motor in spinal cord." },
      ]},
      { heading: "Reflex Arc", type: "text",
        content: "Stimulus → RECEPTOR (skin) → SENSORY NERVE → SPINAL CORD/CNS → MOTOR NERVE → EFFECTOR (muscle) → RESPONSE. This pathway is automatic — does not require conscious thought." },
      { heading: "Brain Regions and Functions", type: "cards", items: [
        { title: "Cerebrum", body: "VOLUNTARY actions, conscious thought, learning, personality, decision-making. 'Deciding to run' = cerebrum." },
        { title: "Cerebellum", body: "COORDINATION of movement, balance, posture. Damage = poor walking, ataxia." },
        { title: "Medulla oblongata", body: "Controls INVOLUNTARY actions: heartbeat, breathing, swallowing." },
        { title: "Hypothalamus", body: "Temperature regulation, hunger, thirst, links nervous system to endocrine system." },
      ]},
      { heading: "Major Hormones", type: "cards", items: [
        { title: "Thyroxine (thyroid gland)", body: "Controls METABOLIC RATE. Requires IODINE. Deficiency → goitre (enlarged thyroid)." },
        { title: "Adrenaline (adrenal gland)", body: "FIGHT-OR-FLIGHT response. Increases heart rate, dilates airways, releases glucose." },
        { title: "Insulin (pancreas)", body: "LOWERS blood glucose. Promotes storage as glycogen." },
        { title: "Glucagon (pancreas)", body: "RAISES blood glucose. Converts glycogen back to glucose." },
        { title: "Prolactin (pituitary)", body: "Stimulates MILK PRODUCTION (lactation) in nursing mothers." },
        { title: "Testosterone (testes)", body: "Male sexual development and characteristics." },
      ]},
      { heading: "Exam Questions", type: "cards", items: [
        { title: "Decision to run rather than walk:", body: "CEREBRUM (voluntary decision). Cerebellum coordinates the actual movement once decided." },
        { title: "Damage to cerebellum affects:", body: "WALKING (coordination and balance). Not vision (cerebrum), not breathing (medulla)." },
        { title: "Nursing mother not producing enough milk:", body: "Deficient in PROLACTIN. Not oestrogen (sexual development), not insulin (blood sugar)." },
        { title: "Iodine needed for:", body: "THYROID GLAND (thyroxine contains iodine). Without iodine → cannot make thyroxine → goitre." },
        { title: "Fight-or-flight response hormone:", body: "ADRENALINE from adrenal gland." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Cerebrum = voluntary. Cerebellum = coordination/balance. Medulla = involuntary (breathing, heartbeat). Reflex path: stimulus→sensory→CNS→motor→response. Prolactin = milk. Adrenaline = fight-or-flight. Thyroxine needs iodine. Insulin lowers, glucagon raises blood sugar." }
    ]
  },

  "Plants and Photosynthesis": {
    subject: "Biology",
    title: "Plants — Transport, Photosynthesis and Tropisms",
    icon: "🌱",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Xylem and Phloem", type: "cards", items: [
        { title: "Xylem", body: "Transports WATER and mineral salts from roots to leaves. Dead cells. ONE-WAY flow UPWARD. Contains tracheids, vessels, fibres." },
        { title: "Phloem", body: "Transports ORGANIC FOOD (sugars) from leaves to all parts. Living cells. TWO-WAY flow." },
      ]},
      { heading: "Photosynthesis", type: "text",
        content: "6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂. Occurs in CHLOROPLASTS. Chlorophyll absorbs RED and BLUE-VIOLET light; REFLECTS green light (which is why plants look green)." },
      { heading: "Photosynthesis Details", type: "cards", items: [
        { title: "Magnesium", body: "Central atom in CHLOROPHYLL molecule. Without Mg, plants cannot make chlorophyll → yellow leaves (chlorosis)." },
        { title: "Light reaction (light-dependent)", body: "Light SPLITS WATER (photolysis) → O₂ released, ATP and NADPH made. In thylakoid membranes." },
        { title: "Dark reaction (Calvin cycle)", body: "CO₂ fixed into glucose using ATP and NADPH. In stroma of chloroplast. Does not directly need light." },
      ]},
      { heading: "Plant Storage and Germination", type: "cards", items: [
        { title: "Rhizome", body: "Horizontal underground stem. GINGER, grass, iris. Stores food." },
        { title: "Bulb", body: "Modified leaves on underground stem. ONION, garlic, tulip." },
        { title: "Tuber", body: "Swollen stem. POTATO, cassava." },
        { title: "Epigeal germination", body: "Cotyledons raised ABOVE soil. GROUNDNUT, bean, castor oil." },
        { title: "Hypogeal germination", body: "Cotyledons remain BELOW soil. MAIZE, wheat, peas." },
      ]},
      { heading: "Plant Tropisms", type: "cards", items: [
        { title: "Phototropism", body: "Response to LIGHT. Shoots grow TOWARD light (positive). Roots grow away (negative)." },
        { title: "Geotropism", body: "Response to GRAVITY. Roots grow DOWN (positive). Shoots grow UP (negative)." },
        { title: "Hydrotropism", body: "Response to WATER. Roots grow TOWARD water (positive)." },
        { title: "Thigmotropism", body: "Response to TOUCH. Tendrils curl around support." },
        { title: "Klinostat", body: "Instrument that slowly rotates a plant so gravity effect is cancelled — used to study geotropic responses." },
      ]},
      { heading: "Exam Questions", type: "cards", items: [
        { title: "Magnesium used for:", body: "CHLOROPHYLL formation. Without Mg → cannot make chlorophyll → chlorosis (yellowing)." },
        { title: "Light required in photosynthesis to:", body: "SPLIT WATER MOLECULES (photolysis). Not to reduce CO₂ (that happens in dark reaction)." },
        { title: "Storage organ in ginger:", body: "RHIZOME. Not bulb (onion), not tuber (potato)." },
        { title: "Epigeal germination found in:", body: "GROUNDNUT. Maize shows HYPOGEAL germination (stays below soil)." },
        { title: "Curvature in response to water:", body: "HYDROTROPISM. Hydro = water." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Xylem = water upward (dead cells). Phloem = sugar both ways (living cells). Magnesium = chlorophyll. Photosynthesis removes CO₂. Light splits water (releases O₂). Ginger = rhizome. Onion = bulb. Groundnut = epigeal. Maize = hypogeal." }
    ]
  },

  "Disease and Immunity": {
    subject: "Biology",
    title: "Microorganisms, Disease and Evolution",
    icon: "🦠",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Viruses vs Bacteria", type: "cards", items: [
        { title: "Viruses", body: "NON-LIVING. Reproduce ONLY inside living host cells. Protein coat (capsid) + nucleic acid. Cannot be treated with ANTIBIOTICS." },
        { title: "Virus diseases", body: "Measles, polio, HIV/AIDS, rabies, yellow fever, COVID-19. Need antiviral drugs, not antibiotics." },
        { title: "Bacterial diseases", body: "Typhoid, cholera, tetanus, tuberculosis, gonorrhoea. Treated with ANTIBIOTICS." },
        { title: "Fungal diseases", body: "Ringworm, athlete's foot, candidiasis. Treated with ANTIFUNGALS." },
      ]},
      { heading: "Important Diseases", type: "cards", items: [
        { title: "Malaria", body: "Caused by PLASMODIUM (protozoan). Vector: ANOPHELES mosquito. Destroys red blood cells." },
        { title: "Bilharzia (Schistosomiasis)", body: "Caused by SCHISTOSOMA (flatworm). Primary host: MAN. Secondary/intermediate host: SNAIL. Blood in urine after swimming in fresh water." },
        { title: "Onchocerciasis (River blindness)", body: "Caused by filarial worm. Vector: SIMULIUM (black fly). Causes progressive blindness." },
        { title: "Sleeping sickness", body: "Caused by TRYPANOSOME. Vector: TSETSE FLY." },
        { title: "Swollen shoot disease", body: "Viral disease of COCOA. Transmitted by mealybugs. Serious threat to West African cocoa production." },
      ]},
      { heading: "Darwin's Theory of Natural Selection", type: "cards", items: [
        { title: "Darwin's key concepts", body: "Overproduction → Variation → Struggle for existence → Survival of the fittest → Inheritance of advantageous traits." },
        { title: "NOT Darwin's theory", body: "USE AND DISUSE is LAMARCK's theory (organisms develop traits through use). Darwin said variation already exists by chance." },
        { title: "Evidence for evolution", body: "Anatomy (homologous structures), Fossils, Genetics (DNA similarity). BEHAVIOUR is NOT strong evidence." },
      ]},
      { heading: "Exam Questions", type: "cards", items: [
        { title: "Infection unlikely to respond to antibiotics:", body: "MEASLES (viral disease). Antibiotics only kill bacteria, not viruses." },
        { title: "Blood in urine after swimming:", body: "SCHISTOSOMIASIS (bilharzia). Larvae penetrate skin in freshwater → damage bladder." },
        { title: "Primary and secondary hosts of bilharzia:", body: "Primary = MAN (adult worms). Secondary = SNAIL (larvae develop)." },
        { title: "NOT in Darwin's theory:", body: "USE AND DISUSE. That is Lamarck. Darwin said variation already exists — environment selects who survives." },
        { title: "NOT evidence for evolution:", body: "BEHAVIOUR. Anatomy, fossils and genetics are strong evidence." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Viruses = no antibiotics (use antivirals). Measles = viral. Typhoid = bacterial. Bilharzia: man + snail, blood in urine. Malaria: Plasmodium + Anopheles mosquito. Darwin: survival of fittest, NOT use/disuse (that's Lamarck). Behaviour = NOT evidence of evolution." }
    ]
  },

  "Reproduction and Support": {
    subject: "Biology",
    title: "Reproduction, Skeleton and Metamorphosis",
    icon: "🦋",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Types of Metamorphosis", type: "cards", items: [
        { title: "COMPLETE metamorphosis (holometabolism)", body: "Egg → LARVA → PUPA → Adult (4 stages). Butterfly, moth, bee, mosquito, housefly, beetle." },
        { title: "INCOMPLETE metamorphosis (hemimetabolism)", body: "Egg → NYMPH → Adult (3 stages). Grasshopper, cockroach, locust, dragonfly, termite." },
      ]},
      { heading: "Asexual Reproduction in Plants", type: "cards", items: [
        { title: "Sucker", body: "PLANTAIN (banana) reproduces by suckers from base of parent plant." },
        { title: "Rhizome", body: "GINGER, grass reproduce by horizontal underground stems." },
        { title: "Bulb", body: "ONION, garlic reproduce by modified underground leaves." },
        { title: "Budding", body: "Hydra, yeast — offspring grows from parent's body." },
        { title: "Binary fission", body: "Bacteria, amoeba — one organism splits into two." },
      ]},
      { heading: "Skeleton Types", type: "cards", items: [
        { title: "Exoskeleton", body: "Hard OUTER covering. Arthropods (insects, crabs, spiders). Made of chitin." },
        { title: "Endoskeleton", body: "INTERNAL skeleton. Vertebrates (fish, frogs, reptiles, birds, mammals). Bone and cartilage." },
        { title: "Hydroskeleton", body: "FLUID-FILLED body cavity. Earthworms, sea anemones." },
        { title: "Skeletal materials", body: "Chitin, cartilage, bone. MUSCLE is NOT a skeletal material — it provides movement, not support." },
      ]},
      { heading: "Excretion", type: "cards", items: [
        { title: "Excretory organs and products", body: "Lungs: CO₂ + water vapour. Kidneys: urea, excess salts, water. Skin: sweat (water + salts + urea)." },
        { title: "Functional unit of kidney", body: "NEPHRON. Contains Bowman's capsule, glomerulus, Loop of Henle, collecting duct. Bowman's capsule and glomerulus are PARTS of nephron." },
        { title: "Plant excretory products", body: "Tannin, gum, alkaloid, resin, latex. SWEAT is animal excretory product — NOT a plant product." },
      ]},
      { heading: "Exam Questions", type: "cards", items: [
        { title: "Incomplete metamorphosis in:", body: "GRASSHOPPER (also cockroach, locust). Butterfly, mosquito, housefly = complete metamorphosis." },
        { title: "Plantain reproduces asexually by:", body: "SUCKER. Not spores, not buds, not fragments." },
        { title: "Longest bone in human body:", body: "FEMUR (thigh bone). Also strongest bone." },
        { title: "Functional unit of kidney:", body: "NEPHRON. Not Bowman's capsule or glomerulus (these are PARTS of nephron)." },
        { title: "Skeletal materials EXCEPT:", body: "MUSCLE. Chitin, cartilage and bone are skeletal materials. Muscle is for movement." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Complete = 4 stages (butterfly, fly, mosquito). Incomplete = 3 stages (grasshopper, cockroach). Plantain = sucker. Ginger = rhizome. Onion = bulb. Femur = longest bone. Nephron = kidney unit. Liver = bile production. MUSCLE is not skeletal material." }
    ]
  },

  // ==========================================
  // ECONOMICS — ALL NEW ENTRIES
  // ==========================================

  "Basic Economic Concepts": {
    subject: "Economics",
    title: "Scarcity, Choice, Opportunity Cost and Economic Systems",
    icon: "💡",
    estimatedTime: "3 min read",
    sections: [
      { heading: "The Economic Problem", type: "text",
        content: "Economics studies how societies allocate SCARCE resources to satisfy UNLIMITED wants. The fundamental problem is SCARCITY — resources (land, labour, capital) are limited but human wants are infinite." },
      { heading: "Core Concepts", type: "cards", items: [
        { title: "Scarcity", body: "Resources are limited relative to unlimited human wants. The root of ALL economic problems." },
        { title: "Opportunity cost", body: "The VALUE of the NEXT BEST alternative forgone when a choice is made. NOT the money paid — the value of what you gave up." },
        { title: "Microeconomics", body: "Studies INDIVIDUAL units — a firm, a household, a single market. Price of tomatoes, wages, firm output." },
        { title: "Macroeconomics", body: "Studies the ECONOMY AS A WHOLE — inflation, GDP, unemployment, national income." },
        { title: "Positive economics", body: "What IS (factual). 'Inflation is 12%'." },
        { title: "Normative economics", body: "What OUGHT TO BE (value judgements). 'Government should reduce inflation'." },
      ]},
      { heading: "Economic Systems", type: "cards", items: [
        { title: "Free market (Capitalism)", body: "Individuals own resources. Prices set by supply and demand. No government interference. USA." },
        { title: "Command (Planned) economy", body: "Government owns and controls ALL resources. Central planning. Former USSR." },
        { title: "Mixed economy", body: "BOTH private and government sectors operate. Most countries including NIGERIA." },
      ]},
      { heading: "Exam Questions", type: "cards", items: [
        { title: "Student reads instead of watching football — opportunity cost:", body: "ENJOYMENT FORGONE from the football match. The next best alternative sacrificed." },
        { title: "Best definition of economics:", body: "Study of how scarce resources are allocated to satisfy unlimited wants." },
        { title: "Macroeconomic concept:", body: "NATIONAL INCOME. Price of tomatoes, firm output, individual wages = microeconomics." },
        { title: "Nigeria's economic system:", body: "MIXED ECONOMY. Both private sector and government sector operate." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Opportunity cost = next best alternative forgone (not money paid). Micro = individual (one firm, one market). Macro = whole economy (inflation, GDP). Nigeria = mixed economy. Positive = facts. Normative = opinions/should." }
    ]
  },

  "Demand and Supply": {
    subject: "Economics",
    title: "Demand, Supply, Elasticity and Equilibrium",
    icon: "📊",
    estimatedTime: "4 min read",
    sections: [
      { heading: "Law of Demand and Supply", type: "cards", items: [
        { title: "Law of Demand", body: "Price rises → quantity demanded FALLS. Price falls → quantity demanded RISES. Downward-sloping demand curve." },
        { title: "Law of Supply", body: "Price rises → quantity supplied RISES. Price falls → quantity supplied FALLS. Upward-sloping supply curve." },
        { title: "Exceptions to demand law", body: "Giffen goods (inferior — cassava in poor areas). Veblen goods (luxury status symbols — designer bags)." },
      ]},
      { heading: "Movement vs Shift of Curve", type: "cards", items: [
        { title: "Movement ALONG the curve", body: "Caused by change in PRICE OF THE GOOD ITSELF → quantity changes. Stay on same curve." },
        { title: "SHIFT of the curve", body: "Caused by NON-PRICE factors → entire curve moves left or right." },
        { title: "Factors that shift demand", body: "Income, price of related goods, tastes, population, price expectations." },
        { title: "Factors that shift supply", body: "Cost of production, technology, taxes, subsidies, number of sellers, weather." },
      ]},
      { heading: "Elasticity", type: "cards", items: [
        { title: "Price Elasticity of Demand (PED)", body: "PED = % change in Qd ÷ % change in Price. >1 = elastic (luxuries). <1 = inelastic (necessities)." },
        { title: "Demand for table salt", body: "INELASTIC — necessity with no close substitute. Price doubles but people still buy roughly same amount." },
        { title: "Income Elasticity (YED)", body: "YED > 0 = normal good. YED < 0 = inferior good (demand falls as income rises — garri)." },
        { title: "Perfectly inelastic supply", body: "LAND in a city — cannot produce more land regardless of price. Vertical supply curve." },
      ]},
      { heading: "Market Equilibrium and Price Controls", type: "cards", items: [
        { title: "Equilibrium", body: "Price where Qdemanded = Qsupplied. Market clearing price. No tendency to change." },
        { title: "Surplus (excess supply)", body: "Price ABOVE equilibrium → Qs > Qd → unsold stock → price falls." },
        { title: "Shortage (excess demand)", body: "Price BELOW equilibrium → Qd > Qs → buyers can't get enough → price rises." },
        { title: "Price ceiling (maximum price)", body: "Set BELOW equilibrium → causes SHORTAGE. E.g. fuel subsidy causing scarcity at petrol stations." },
        { title: "Price floor (minimum price)", body: "Set ABOVE equilibrium → causes SURPLUS. E.g. minimum wage above equilibrium wage causes unemployment." },
      ]},
      { heading: "Exam Questions", type: "cards", items: [
        { title: "What causes shift (not movement) of demand curve:", body: "Change in INCOME, advertising, price of substitutes. Change in price of THE GOOD ITSELF causes movement along curve." },
        { title: "Garri is:", body: "INFERIOR GOOD. As income rises, demand for garri FALLS (people switch to 'better' food)." },
        { title: "Government sets max price below equilibrium:", body: "SHORTAGE results. Price artificially low → consumers want more, producers supply less." },
        { title: "Minimum wage is an example of:", body: "PRICE FLOOR. Set below which wages cannot fall." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Law of demand: price up → Qd down. Price of good itself → movement. Non-price factors → shift. Elastic > 1 (luxury). Inelastic < 1 (necessity, no substitute — salt). Ceiling below equilibrium = shortage. Floor above equilibrium = surplus." }
    ]
  },

  "Production and Costs": {
    subject: "Economics",
    title: "Theory of Production, Costs and Returns",
    icon: "🏭",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Factors of Production and Rewards", type: "cards", items: [
        { title: "Land", body: "Natural resources. Reward = RENT." },
        { title: "Labour", body: "Human effort. Reward = WAGES/SALARIES." },
        { title: "Capital", body: "Man-made tools and machinery. Reward = INTEREST." },
        { title: "Entrepreneur", body: "Risk-taker who combines other factors. Reward = PROFIT." },
      ]},
      { heading: "Laws of Returns", type: "cards", items: [
        { title: "Law of Diminishing Returns (Short Run)", body: "As more VARIABLE factor (labour) added to FIXED factor (land), output eventually increases at DECREASING rate. Eventually falls." },
        { title: "Short Run", body: "At least ONE factor is FIXED (usually capital). Cannot change factory size." },
        { title: "Long Run", body: "ALL factors are VARIABLE. Can change everything — more workers AND bigger factory." },
        { title: "Economies of scale", body: "As firm grows LARGER in long run, average cost per unit FALLS. Technical, financial, managerial economies." },
      ]},
      { heading: "Cost Types", type: "cards", items: [
        { title: "Total Fixed Cost (TFC)", body: "Does NOT change with output. Rent, insurance, salaries. ALWAYS downward-sloping AFC when divided by Q." },
        { title: "Total Variable Cost (TVC)", body: "Changes WITH output. Raw materials, electricity, piece-rate wages." },
        { title: "Total Cost (TC)", body: "TC = TFC + TVC." },
        { title: "Average Total Cost (ATC)", body: "ATC = TC/Q. U-shaped curve. MC cuts ATC at its MINIMUM point." },
        { title: "Marginal Cost (MC)", body: "Extra cost of ONE more unit. MC = ΔTC/ΔQ. Cuts both AVC and ATC at their MINIMUM." },
      ]},
      { heading: "Exam Questions", type: "cards", items: [
        { title: "Reward for land:", body: "RENT. Labour=wages. Capital=interest. Entrepreneur=profit." },
        { title: "As output increases, AFC:", body: "ALWAYS DECREASES. TFC is constant ÷ by growing Q = always falls. Never rises." },
        { title: "TFC=₦10,000, TVC=₦5,000, Q=100 units. ATC?", body: "TC=15,000. ATC=15,000/100=₦150." },
        { title: "Long run — all factors variable:", body: "TRUE. In long run, firm can change ALL inputs. Short run = at least one fixed." },
        { title: "NOT an economy of scale:", body: "Poor communication as firm grows = DISECONOMY of scale (costs rise)." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Land=Rent, Labour=Wages, Capital=Interest, Entrepreneur=Profit. AFC always falls as output rises. TC=TFC+TVC. Long run = all variable. Short run = at least one fixed. Economies of scale = average cost falls as firm grows bigger." }
    ]
  },

  "Market Structures": {
    subject: "Economics",
    title: "Perfect Competition, Monopoly and Oligopoly",
    icon: "🏪",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Four Market Structures", type: "cards", items: [
        { title: "Perfect Competition", body: "MANY buyers and sellers. IDENTICAL (homogeneous) products. Free entry/exit. Perfect information. Firms are PRICE TAKERS (no power to set price)." },
        { title: "Monopoly", body: "ONE seller. NO close substitutes. HIGH barriers to entry. Firm is PRICE MAKER. Higher price, lower output than competitive market. Supernormal profit in long run." },
        { title: "Oligopoly", body: "FEW large firms dominate. High market concentration. HIGH barriers. INTERDEPENDENCE — each firm watches rivals. Nigerian banking, telecoms (MTN, Airtel, Glo)." },
        { title: "Monopolistic Competition", body: "MANY firms selling DIFFERENTIATED products. Each has a mini-monopoly on its brand. Low barriers. Examples: restaurants, clothing, salons." },
      ]},
      { heading: "Exam Questions", type: "cards", items: [
        { title: "NOT a characteristic of perfect competition:", body: "Firms are PRICE MAKERS. In perfect competition, firms are PRICE TAKERS. Price makers = monopoly." },
        { title: "Best describes a monopoly:", body: "ONE seller with NO close substitutes. Two firms = duopoly (oligopoly). Not govt-controlled prices." },
        { title: "Nigerian banking sector is:", body: "OLIGOPOLY. Few large banks dominate (Access, GTBank, Zenith, UBA, First Bank)." },
        { title: "Many firms, differentiated products:", body: "MONOPOLISTIC COMPETITION. Perfect competition = many firms but IDENTICAL products." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Perfect competition: many sellers, identical products, price takers. Monopoly: one seller, no substitute, price maker. Oligopoly: few firms, interdependent (Nigerian banks, telecoms). Monopolistic competition: many firms, different products (restaurants, salons)." }
    ]
  },

  "National Income": {
    subject: "Economics",
    title: "GDP, GNP, NNP and National Income Measurement",
    icon: "📈",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Key National Income Concepts", type: "cards", items: [
        { title: "GDP (Gross Domestic Product)", body: "Total value of all goods/services produced WITHIN a country's borders in a year. Regardless of WHO produces them (includes foreigners in Nigeria)." },
        { title: "GNP (Gross National Product)", body: "Total value produced by a country's NATIONALS (citizens) wherever they are. GNP = GDP + Net factor income from abroad." },
        { title: "NNP (Net National Product)", body: "GNP minus DEPRECIATION (wear and tear on capital). NNP = GNP − Depreciation." },
        { title: "Per Capita Income", body: "National income ÷ total population. Measures AVERAGE standard of living." },
      ]},
      { heading: "Expenditure Method Formula", type: "text",
        content: "GDP = C + I + G + (X − M). C = Consumption. I = Investment. G = Government spending. X = Exports. M = Imports. (X−M) = Net exports. Positive net exports = trade surplus." },
      { heading: "Exam Questions", type: "cards", items: [
        { title: "GNP differs from GDP by:", body: "Adding NET FACTOR INCOME FROM ABROAD. GNP = GDP + income Nigerians earn abroad − income foreigners earn in Nigeria." },
        { title: "GNP=₦500bn, Depreciation=₦50bn. NNP?", body: "NNP = 500 − 50 = ₦450bn." },
        { title: "Why value added used in output method:", body: "To AVOID DOUBLE COUNTING. Counting flour AND bread would count the flour twice." },
        { title: "Net exports = X − M = 200 − 150:", body: "Net exports = ₦50bn SURPLUS (exports exceed imports)." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "GDP = within borders (includes foreigners). GNP = by nationals (includes Nigerians abroad). GNP = GDP + net income from abroad. NNP = GNP − depreciation. Expenditure: GDP = C+I+G+(X-M). Double counting avoided by using VALUE ADDED." }
    ]
  },

  "Money and Banking": {
    subject: "Economics",
    title: "Money, Commercial Banks and Central Bank",
    icon: "🏦",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Functions of Money", type: "cards", items: [
        { title: "Medium of exchange (PRIMARY)", body: "Accepted in payment for goods and services. Eliminates barter. This is the PRIMARY function that distinguishes money." },
        { title: "Unit of account", body: "Common measure to compare values of all goods." },
        { title: "Store of value", body: "Can be saved and used later (inflation erodes this)." },
        { title: "Standard of deferred payment", body: "Allows credit and debts to be settled later." },
      ]},
      { heading: "Commercial Banks vs Central Bank", type: "cards", items: [
        { title: "Commercial banks", body: "Profit-making. Accept deposits. Grant loans and overdrafts. Foreign exchange. Safe custody. CANNOT issue currency." },
        { title: "Central Bank of Nigeria (CBN)", body: "NOT profit-seeking. Issues currency (MONOPOLY). Banker to government. Banker to commercial banks. Manages foreign exchange. Conducts monetary policy." },
        { title: "Lender of last resort", body: "CBN lends to commercial banks when they face liquidity crisis — prevents bank collapse and systemic financial crisis." },
      ]},
      { heading: "Credit Creation", type: "steps", items: [
        "Bank reserve ratio is 20%. Customer deposits ₦10,000.",
        "Money multiplier = 1/reserve ratio = 1/0.2 = 5",
        "Total money created = ₦10,000 × 5 = ₦50,000",
        "Bank keeps 20% (₦2,000) as reserve, lends 80% (₦8,000).",
        "That ₦8,000 gets deposited elsewhere and the cycle repeats."
      ]},
      { heading: "Exam Questions", type: "cards", items: [
        { title: "Primary function of money:", body: "MEDIUM OF EXCHANGE. This is what distinguishes money from other assets." },
        { title: "NOT a function of commercial bank:", body: "ISSUING CURRENCY NOTES. Only the CENTRAL BANK can issue currency (legal tender)." },
        { title: "Central Bank ONLY function:", body: "ISSUING CURRENCY. Commercial banks can accept deposits and do forex, but cannot print money." },
        { title: "Lender of last resort means:", body: "CBN lends to COMMERCIAL BANKS when they are short of funds — not to the public." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Primary function of money = medium of exchange. Only CBN issues currency — not commercial banks. Money multiplier = 1÷reserve ratio. CBN = lender of last resort (to commercial banks, not public). CBN functions: issue currency, banker to govt, banker to banks, monetary policy." }
    ]
  },

  "Inflation and Economic Policy": {
    subject: "Economics",
    title: "Inflation, Unemployment and Economic Policy",
    icon: "💹",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Types of Inflation", type: "cards", items: [
        { title: "Demand-pull inflation", body: "Too much money chasing too few goods. Excess aggregate demand. 'Too much money in the economy'." },
        { title: "Cost-push inflation", body: "Rising PRODUCTION COSTS (wages, oil prices, raw materials) push firms to raise prices." },
        { title: "Effects of inflation", body: "Hurts savers (money loses value). BENEFITS DEBTORS (repay with cheaper money). Hurts fixed-income earners and pensioners." },
      ]},
      { heading: "Types of Unemployment", type: "cards", items: [
        { title: "Frictional", body: "Temporary — between jobs, searching for better employment. Normal in any economy." },
        { title: "Structural", body: "TECHNOLOGY or economic changes make skills OBSOLETE permanently. Carpenter replaced by robots = structural. Solution: RETRAINING." },
        { title: "Cyclical (demand-deficient)", body: "Caused by RECESSION — insufficient aggregate demand. Solution: expansionary fiscal/monetary policy." },
        { title: "Seasonal", body: "Jobs available only in certain seasons — farming, tourism." },
      ]},
      { heading: "Fiscal and Monetary Policy", type: "cards", items: [
        { title: "Expansionary fiscal policy", body: "INCREASE government spending OR CUT taxes → boost aggregate demand → fight recession." },
        { title: "Contractionary fiscal policy", body: "CUT spending OR RAISE taxes → reduce aggregate demand → fight INFLATION." },
        { title: "To reduce inflation — monetary policy:", body: "RAISE monetary policy rate (interest rate). Higher rates → less borrowing → less money in economy → less spending → inflation falls." },
        { title: "Open Market Operations (OMO)", body: "CBN BUYS securities = injects money (expansionary). CBN SELLS securities = withdraws money (contractionary)." },
        { title: "Cash Reserve Ratio (CRR)", body: "Higher CRR = banks must hold more as reserves = less money to lend = reduced money supply." },
      ]},
      { heading: "Exam Questions", type: "cards", items: [
        { title: "Cost-push inflation caused by:", body: "INCREASE IN PRODUCTION COSTS (wages, oil, raw materials). Not excess government spending (that's demand-pull)." },
        { title: "Who benefits from inflation:", body: "DEBTORS. Repay loans with money worth less than when borrowed. Creditors, pensioners, fixed-income earners are hurt." },
        { title: "Carpenter replaced by robots:", body: "STRUCTURAL unemployment. Permanent job loss due to technology. Retraining is the solution." },
        { title: "To reduce structural unemployment:", body: "RETRAINING AND EDUCATION programmes. Not fiscal or monetary policy (those help cyclical unemployment)." },
        { title: "Govt increases tax and reduces spending:", body: "CONTRACTIONARY fiscal policy. Used to reduce inflation." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Demand-pull = too much money chasing goods. Cost-push = rising production costs. Debtors benefit from inflation (repay with cheaper money). Structural unemployment = technology change, needs retraining. Raise interest rates to fight inflation. OMO: buy = inject money, sell = withdraw money." }
    ]
  },

  "International Trade": {
    subject: "Economics",
    title: "Comparative Advantage, Tariffs and Trade Policy",
    icon: "🌐",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Absolute vs Comparative Advantage", type: "cards", items: [
        { title: "Absolute advantage", body: "Country produces a good using FEWER RESOURCES than another country." },
        { title: "Comparative advantage", body: "Country produces at LOWER OPPORTUNITY COST than another — even if the other has absolute advantage in everything. BASIS FOR ALL TRADE." },
        { title: "Principle of comparative advantage", body: "Countries should SPECIALISE in goods where they have the LOWEST OPPORTUNITY COST, then trade. This increases total world output." },
      ]},
      { heading: "Trade Policy Tools", type: "cards", items: [
        { title: "Tariff", body: "TAX on imported goods. Raises import price. Protects domestic industry. Consumers pay more." },
        { title: "Quota", body: "LIMIT on quantity of imports allowed." },
        { title: "Subsidy", body: "Government payment to domestic producers — makes them price-competitive against imports." },
        { title: "Embargo", body: "COMPLETE BAN on trade with a country." },
      ]},
      { heading: "Arguments for Protection", type: "cards", items: [
        { title: "Infant industry argument", body: "NEW industries in developing countries need TEMPORARY protection until they can compete internationally. Most important argument." },
        { title: "National security", body: "Essential industries (food, defence) must be produced domestically." },
        { title: "Prevent dumping", body: "Foreign firms selling below cost to destroy domestic competition." },
      ]},
      { heading: "Exam Questions", type: "cards", items: [
        { title: "Comparative advantage says countries should:", body: "SPECIALISE in goods with LOWEST OPPORTUNITY COST. Even if one country produces everything better, trade is still beneficial." },
        { title: "Tariff on imported rice:", body: "RAISES PRICE of imported rice → protects domestic producers. Consumers pay higher prices." },
        { title: "Infant industry argument says:", body: "New industries need TEMPORARY PROTECTION until they can compete internationally." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Comparative advantage = lowest opportunity cost (not just being better). Tariff = tax on imports (protects domestic, hurts consumers). Quota = import quantity limit. Embargo = complete ban. Infant industry = most common argument for protectionism in developing countries." }
    ]
  },

  "Development Economics": {
    subject: "Economics",
    title: "Economic Development, Population and Nigeria",
    icon: "🇳🇬",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Growth vs Development", type: "cards", items: [
        { title: "Economic growth", body: "Increase in real GDP over time. QUANTITATIVE measure. Can happen without improving welfare." },
        { title: "Economic development", body: "BROADER — improvement in quality of life: income + health + education + poverty reduction. HDI measures this." },
        { title: "Key distinction", body: "Growth is necessary but NOT SUFFICIENT for development. High GDP can still coexist with widespread poverty." },
      ]},
      { heading: "Population Economics", type: "cards", items: [
        { title: "Natural increase formula", body: "Natural increase = Birth rate − Death rate. E.g. Birth rate 40 − Death rate 15 = 25 per 1,000 (2.5% growth)." },
        { title: "Malthus theory", body: "Population grows GEOMETRICALLY (1,2,4,8). Food grows ARITHMETICALLY (1,2,3,4). Population would eventually outstrip food → crisis. Green Revolution largely disproved this." },
        { title: "Optimum population", body: "Population size that MAXIMISES per capita output given existing resources and technology. Not too large, not too small." },
        { title: "Overpopulation", body: "Population exceeds optimum → per capita income FALLS." },
      ]},
      { heading: "Nigeria's Economy", type: "cards", items: [
        { title: "Dominant government revenue", body: "PETROLEUM. Since 1970s oil boom, oil dominates foreign exchange earnings and government revenue." },
        { title: "Agriculture's role", body: "Provides food, employs over 70% of Nigerians, provides RAW MATERIALS for industry (cotton for textiles, rubber for tyres), earns foreign exchange." },
        { title: "Problems of Nigerian agriculture", body: "Primitive tools, land tenure issues, inadequate credit, poor rural infrastructure, rural-urban migration, erosion/desertification." },
        { title: "Import substitution (ISI)", body: "Producing DOMESTICALLY what was previously imported. Nigeria's post-independence strategy. Conserves foreign exchange." },
      ]},
      { heading: "Exam Questions", type: "cards", items: [
        { title: "Natural increase = Birth rate 40, Death rate 15:", body: "Natural increase = 40 − 15 = 25 per 1,000." },
        { title: "Malthus concluded:", body: "Population would eventually OUTSTRIP food supply leading to misery. Technology has largely disproved this." },
        { title: "Optimum population:", body: "Population that MAXIMISES per capita output given resources. Neither too large nor too small." },
        { title: "Nigeria's dominant revenue source:", body: "PETROLEUM. Agriculture employs more people but oil dominates revenue." },
        { title: "Agriculture contributes to industry by:", body: "Providing RAW MATERIALS (cotton for textiles, rubber for tyres, cocoa for chocolate)." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Development > growth (includes health, education, poverty). Natural increase = birth rate − death rate. Malthus: population grows faster than food (geometric vs arithmetic). Optimum population = maximises per capita output. Nigeria: petroleum dominates revenue. Agriculture provides raw materials for industry." }
    ]
  },

}

export default STUDY_GUIDES