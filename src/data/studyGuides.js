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
}

export default STUDY_GUIDES
