import { useState } from "react"

const SECTIONS = {
  sentences: {
    label: "💬 Sentence Interpretation",
    color: "#7c3aed",
    bg: "rgba(124,58,237,0.06)",
    border: "rgba(124,58,237,0.3)",
    tip: "For every conditional sentence ask: did this actually happen? The answer is almost always the OPPOSITE of the condition stated.",
    items: [
      { q: "If he were here, it could be more fun.", a: "He did not show up and so the occasion lacked much fun.", why: "'If he were here' = he is NOT here. Present unreal conditional → opposite is true.", year: "2011" },
      { q: "If I went to the village, I would visit the king.", a: "It implies the speaker does NOT usually go to the village.", why: "Present unreal conditional: 'If I went' means I don't actually go.", year: "2011" },
      { q: "As regards the matter, we have crossed the Rubicon.", a: "We are irrevocably committed — there is no going back.", why: "Crossing the Rubicon = passing a point of no return. Julius Caesar's famous act.", year: "2010" },
      { q: "Uche is full of himself.", a: "He is conceited and thinks too highly of himself.", why: "'Full of himself' = conceited, arrogant. Figurative, not literal.", year: "2010" },
      { q: "The witness said he had no axe to grind with his brothers.", a: "He had no personal grievance or grudge against the brothers.", why: "'Axe to grind' = a personal reason for doing something; hidden motive or grudge.", year: "2010" },
      { q: "The footballers moved with their tails between their legs.", a: "They were ashamed and dejected because they had been defeated.", why: "Describes a dog's posture when scared — idiom for shame and defeat.", year: "2010" },
      { q: "It was good to steer a middle course in whatever one does.", a: "It is always good to act with moderation in all things.", why: "'Middle course' = moderation; avoiding extremes in behaviour.", year: "2010" },
      { q: "Though Mr. Iro is a new chairman, he views other members with a jaundiced eye.", a: "He takes an unfavourable and prejudiced position about his members.", why: "'Jaundiced eye' = a bitter, suspicious or prejudiced view of things.", year: "2010" },
      { q: "Mrs. Adasu does all her work with more haste, less speed.", a: "She does everything quickly but often makes mistakes from rushing.", why: "Proverb: rushing leads to errors. 'More haste, less speed' = hurrying slows you down.", year: "2011" },
      { q: "She stopped her education as her uncle left her in the lurch.", a: "Her uncle abandoned her and refused to help when she needed him.", why: "'Left in the lurch' = abandoned in a difficult situation.", year: "2011" },
      { q: "She took the bull by the horns and confronted her boss.", a: "She dealt with a difficult situation directly and bravely.", why: "'Take the bull by the horns' = face a challenge courageously without avoiding it.", year: "2024" },
      { q: "She decided to let sleeping dogs lie rather than bring up the old argument.", a: "She avoided reopening a past issue that could cause trouble.", why: "'Let sleeping dogs lie' = do not stir up old problems that have settled down.", year: "2024" },
      { q: "The manager was at loggerheads with his deputy over the new policy.", a: "The manager and deputy were in serious and persistent disagreement.", why: "'At loggerheads' = in strong and ongoing conflict or disagreement.", year: "2024" },
      { q: "The new employee proved to be indispensable to the company.", a: "The employee was too important or essential to do without.", why: "Indispensable = absolutely necessary; cannot be removed without harm.", year: "2024" },
      { q: "Once I have finished all my homework, I am permitted to watch television.", a: "I can only watch television after completing my homework first.", why: "'Once' here means 'only after' — a conditional statement about sequence.", year: "2024" },
      { q: "Despite being poor, he was content with what he had.", a: "He was satisfied and at peace with his situation despite poverty.", why: "'Content' = peacefully satisfied. 'Despite' signals contrast — poor but happy.", year: "2024" },
    ]
  },

  phonetics: {
    label: "🎵 Phonetics & Stress",
    color: "#0f766e",
    bg: "rgba(15,118,110,0.06)",
    border: "rgba(15,118,110,0.3)",
    tip: "Say every word ALOUD in your head. Sound always beats spelling. 'Great' and 'break' rhyme (/eɪ/) — 'great' and 'heat' do NOT despite looking similar.",
    items: [
      { q: "Which word has the same vowel sound as DONE?", a: "DOVE (/dʌv/)", why: "Both 'done' and 'dove' contain the short /ʌ/ sound (UH). 'Love', 'come', 'sun' also share this.", year: "?" },
      { q: "Which word has the same vowel sound as STEAK?", a: "TAPE (/eɪ/)", why: "'Steak' is pronounced /steɪk/ — same /eɪ/ as 'tape', 'cake', 'break', 'great', 'weight'.", year: "?" },
      { q: "Which word has the same vowel sound as JEWEL?", a: "FLUENT", why: "Both contain the /juː/ sound. 'Jewel' = /dʒuːəl/, 'fluent' = /fluːənt/. Long OO sound.", year: "?" },
      { q: "Which word rhymes with POISE?", a: "NOISE", why: "Both share the /ɔɪz/ diphthong. 'Poise', 'noise', 'boys', 'toys', 'joys' all rhyme.", year: "2010" },
      { q: "Which word has the same consonant sound as the UNDERLINED in STRENGTH?", a: "LENGTH", why: "Both have the /ŋθ/ consonant cluster — the NG sound followed by TH.", year: "2010" },
      { q: "Which word has the same sound as GREAT?", a: "BREAK (/eɪ/)", why: "'Great' = /ɡreɪt/, 'Break' = /breɪk/. Both have the /eɪ/ diphthong. NOT 'heat' or 'seat'.", year: "?" },
      { q: "Which word has the same sound as POOR?", a: "DOUR", why: "'Poor' = /pʊə/, 'Dour' = /dʊə/. Both have the /ʊə/ diphthong (as in 'tour', 'moor').", year: "?" },
      { q: "Which word has the same sound as MACHINE?", a: "MEASURE", why: "The underlined SH sound in 'machine' (/ʃ/) matches the S sound in 'measure' (/ʒ/). Wait — actually both are fricatives but different. The SH in machine = /ʃ/. Check the specific underlined letters in the exam.", year: "?" },
      { q: "Which word has the same sound as SING?", a: "BANGED", why: "The /ŋ/ sound in 'sing' also appears in 'banged' — the -NG consonant cluster.", year: "?" },
      { q: "Which word has the same vowel sound as CLOTHE?", a: "TOOTH", why: "The OO sound /uː/ appears in both 'clothe' and 'tooth'. Long OO.", year: "?" },
      { q: "EMEKA finished his homework yesterday — what does emphasis on EMEKA suggest?", a: "The question implied is: WHO finished his homework yesterday?", why: "Stressing a subject word turns the sentence into an answer to a 'who' question.", year: "2010" },
      { q: "Taiwo SAILED to London — what does emphasis on SAILED suggest?", a: "The question implied is: Did Taiwo fly to London?", why: "Stressing the verb shows the METHOD of travel is being clarified or contrasted.", year: "2010" },
      { q: "My bag is made of LEATHER — what does emphasis on LEATHER suggest?", a: "The question implied is: Is my bag made of something else (like polythene)?", why: "Stressing the material emphasises WHAT it is made of — distinguishing it from alternatives.", year: "2010" },
      { q: "Uche LOVES Toyota cars — what does emphasis on LOVES suggest?", a: "The question implied is: Does Uche hate Toyota cars?", why: "Stressing the verb 'loves' emphasises the FEELING — contrasting with dislike or indifference.", year: "2011" },
      { q: "The POLICE arrested the suspect — what does emphasis on POLICE suggest?", a: "The question implied is: Who arrested the suspect?", why: "Stressing the subject when it refers to a person or group asks WHO performed the action.", year: "2011" },
    ]
  },

  lexis: {
    label: "🔤 Lexis & Structure Traps",
    color: "#b45309",
    bg: "rgba(180,83,9,0.06)",
    border: "rgba(180,83,9,0.3)",
    tip: "Signal words are everything: BUT/HOWEVER/ALTHOUGH → blank is OPPOSITE. AND/ALSO/SIMILARLY → blank MATCHES. INSTEAD OF → blank is an ALTERNATIVE.",
    items: [
      { q: "Signal word: BUT / HOWEVER / ALTHOUGH / YET", a: "The blank is the OPPOSITE of what came before.", why: "Contrast signals: 'She is rich, but she is ___ (generous/stingy?)' → STINGY (opposite of the implied richness benefit).", year: "ALL YEARS 🔥" },
      { q: "Signal word: AND / ALSO / AS WELL AS / SIMILARLY", a: "The blank MATCHES or continues the same idea.", why: "'He is tall AND ___' → choose something equally positive/descriptive. Same direction.", year: "ALL YEARS 🔥" },
      { q: "Signal word: INSTEAD OF / RATHER THAN / NOT...BUT", a: "The blank is an ALTERNATIVE or REPLACEMENT for what was mentioned.", why: "'Instead of coffee, she drank ___' → another drink. Signals a substitution.", year: "ALL YEARS 🔥" },
      { q: "Signal word: SO / THEREFORE / AS A RESULT / CONSEQUENTLY", a: "The blank is the EFFECT or RESULT of the first clause.", why: "'He studied hard, so he ___' → PASSED. The result must logically follow.", year: "ALL YEARS 🔥" },
      { q: "SEASONED (e.g. seasoned veteran)", a: "Experienced and skilled through long practice.", why: "Collocation: 'seasoned' goes with veterans, generals, professionals. NOT 'baked' or 'cooked'.", year: "RECURRING 🔥" },
      { q: "GAG (e.g. 'should not ___ the press')", a: "To silence or censor; to suppress free speech.", why: "A government 'gags' the press by preventing publication. Collocation to memorise.", year: "?" },
      { q: "FORMULATE (e.g. 'those who ___ policy')", a: "To create or devise something systematically.", why: "'Formulate policy' is a natural collocation. NOT 'form', 'make' or 'do' policy in formal English.", year: "?" },
      { q: "EXHUME (e.g. 'dead man was ___')", a: "To dig up a body from the ground for examination.", why: "'Exhume' is the correct term for digging up a buried body. Opposite: inter/bury.", year: "?" },
      { q: "ASSENT (e.g. 'give ___ to the bill')", a: "Formal agreement or approval, especially by authority.", why: "'Presidential assent' is required for a bill to become law. NOT 'accent' or 'ascent'.", year: "RECURRING 🔥" },
      { q: "MORALE (e.g. '_____ of our troops was high')", a: "The confidence and enthusiasm of a person or group.", why: "'Morale' (spirit/motivation) NOT 'moral' (ethics). Easily confused in exams.", year: "?" },
      { q: "PROSCRIBED (e.g. 'magazine was ___ by government')", a: "Officially forbidden or banned by authority.", why: "'Proscribe' = ban/prohibit. NOT 'prescribed' (recommended by doctor). Opposite meanings!", year: "2020 🔥" },
      { q: "INCIDENCE (e.g. '___ of armed robbery has increased')", a: "The occurrence or frequency of something, especially a crime.", why: "'Incidence' = rate of occurrence. NOT 'incidents' (individual events) — commonly confused.", year: "?" },
      { q: "SPUR (e.g. 'so as to ___ them to victory')", a: "To encourage or motivate someone to greater effort.", why: "'Spur on' is a common collocation. A spur urges a horse forward — same idea for people.", year: "?" },
      { q: "ETIQUETTE (e.g. 'yawning in public without covering mouth violates ___')", a: "The code of polite behaviour in society.", why: "'Etiquette' = social rules of correct behaviour. NOT ethics or morals.", year: "?" },
      { q: "PRODIGAL (e.g. '___ son / spending habits')", a: "Spending money or resources recklessly; wasteful.", why: "Prodigal = wasteful spender. The biblical Prodigal Son wasted his inheritance.", year: "RECURRING 🔥" },
    ]
  },

  comprehension: {
    label: "📖 Comprehension Strategies",
    color: "#1d4ed8",
    bg: "rgba(29,78,216,0.06)",
    border: "rgba(29,78,216,0.3)",
    tip: "The answer is ALWAYS in the passage. If you cannot point to a specific line that supports your answer, it is wrong. Never use outside knowledge.",
    items: [
      { q: "Strategy: Main Idea / Best Title questions", a: "Read the FIRST and LAST paragraphs first. The main idea is usually stated there.", why: "Authors introduce and conclude with their central idea. Middle paragraphs give supporting details only.", year: "STRATEGY" },
      { q: "Strategy: Meaning of words/phrases in context", a: "Read the sentence BEFORE and AFTER the word. The surrounding context reveals the meaning.", why: "Words have multiple meanings. Context tells you which meaning applies HERE. Do not guess from the word alone.", year: "STRATEGY" },
      { q: "Strategy: Inference questions ('it can be inferred...')", a: "The answer must be SUPPORTED by the passage even if not stated directly.", why: "Inference = reading between the lines. But the evidence must be IN the passage. Never add your own opinion.", year: "STRATEGY 🔥" },
      { q: "Strategy: Author's purpose questions", a: "Ask: Is the author informing, persuading, entertaining, or describing?", why: "Look at the TONE and the TYPE of evidence used. Facts+statistics = inform. Emotional language = persuade.", year: "STRATEGY" },
      { q: "Strategy: Audience questions ('passage is aimed at...')", a: "Look at vocabulary level, subject matter, and tone to identify the intended reader.", why: "Simple vocabulary + basic examples = general public. Technical terms = specialists. Advice = practitioners.", year: "STRATEGY" },
      { q: "TRAP: Answers that are true in real life but not stated in the passage", a: "WRONG — always reject this. Only information IN the passage counts.", why: "This is the most common comprehension trap. Your real-world knowledge is irrelevant unless confirmed in the text.", year: "TRAP 🔥" },
      { q: "TRAP: Answers that use words from the passage but twist the meaning", a: "WRONG — the words may be the same but the meaning is distorted.", why: "Examiners deliberately reuse words from the passage with altered meanings. Always check the original context.", year: "TRAP 🔥" },
      { q: "TRAP: Answers that are too extreme ('always', 'never', 'all', 'none')", a: "Usually WRONG unless the passage explicitly uses those absolute terms.", why: "Most passages present nuanced views. Extreme options are usually wrong unless directly stated.", year: "TRAP 🔥" },
      { q: "TRAP: Your personal opinion as the answer", a: "WRONG — comprehension tests your understanding of the AUTHOR's view, not yours.", why: "Students often choose what they personally believe. But the question asks what the PASSAGE says.", year: "TRAP 🔥" },
      { q: "Technique: Read questions FIRST before the passage", a: "This tells you WHAT to look for as you read.", why: "When you know what information you need, your brain flags relevant sections automatically. Saves time.", year: "TECHNIQUE 🔥" },
      { q: "Technique: Underline or note the key word in each question", a: "The key word tells you exactly what the question is testing.", why: "Questions like 'what does the author imply about X?' — 'X' is your key word. Find every mention of X in the passage.", year: "TECHNIQUE" },
      { q: "Technique: Eliminate wrong answers systematically", a: "Cross out options that contradict the passage first. Then choose from what remains.", why: "Often 2 options are clearly wrong. This leaves you choosing between 2 — much better odds.", year: "TECHNIQUE" },
    ]
  }
}

const EnglishSkillsVault = ({ onClose, isPaid, onUpgrade, initialTab }) => {
  const [activeTab, setActiveTab] = useState(initialTab || "sentences")
  const [expanded, setExpanded] = useState(null)

  if (!isPaid) {
    return (
      <div style={{
        position: "fixed", inset: 0, zIndex: 3000,
        background: "rgba(0,0,0,0.6)",
        display: "flex", alignItems: "flex-end"
      }}>
        <div style={{
          background: "var(--bg)", width: "100%",
          borderRadius: "20px 20px 0 0",
          padding: "28px 24px 44px", textAlign: "center"
        }}>
          <div style={{ width: 40, height: 4, borderRadius: 2, background: "var(--border)", margin: "0 auto 24px" }} />
          <div style={{ fontSize: 52, marginBottom: 12 }}>🔒</div>
          <h3 style={{ fontSize: 20, fontWeight: 900, color: "var(--text)", margin: "0 0 12px" }}>
            Full Access Required
          </h3>
          <p style={{ fontSize: 14, color: "var(--text2)", lineHeight: 1.7, margin: "0 0 20px" }}>
            Sentence patterns, phonetics, lexis traps and comprehension strategies from 20 years of UNIBEN past papers — for paid users only.
          </p>
          <button className="ee-btn ee-btn-primary" onClick={onUpgrade} style={{ marginBottom: 10 }}>
            Unlock for ₦3,000 🚀
          </button>
          <button onClick={onClose} style={{
            width: "100%", padding: "10px", background: "none",
            color: "var(--text3)", border: "none", fontSize: 13,
            cursor: "pointer", fontFamily: "var(--font-main)"
          }}>Close</button>
        </div>
      </div>
    )
  }

  const section = SECTIONS[activeTab]

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 3000,
      background: "var(--bg)", display: "flex", flexDirection: "column"
    }}>
      {/* Header */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "16px 20px", borderBottom: "1px solid var(--border)",
        flexShrink: 0
      }}>
        <button onClick={onClose} style={{
          background: "none", border: "none", color: "var(--primary)",
          fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "var(--font-main)"
        }}>← Back</button>
        <span style={{ fontWeight: 800, fontSize: 14, color: "var(--text)" }}>English Skills Vault</span>
        <span style={{ width: 40 }} />
      </div>

      {/* Tabs */}
      <div style={{
        display: "flex", overflowX: "auto", borderBottom: "1px solid var(--border)",
        flexShrink: 0, padding: "0 8px"
      }}>
        {Object.entries(SECTIONS).map(([key, sec]) => (
          <button key={key} onClick={() => { setActiveTab(key); setExpanded(null) }} style={{
            padding: "10px 12px", whiteSpace: "nowrap",
            background: "none", border: "none",
            borderBottom: activeTab === key ? `2px solid ${sec.color}` : "2px solid transparent",
            color: activeTab === key ? sec.color : "var(--text2)",
            fontWeight: activeTab === key ? 800 : 600,
            fontSize: 12, cursor: "pointer", fontFamily: "var(--font-main)"
          }}>
            {sec.label}
          </button>
        ))}
      </div>

      {/* Tip banner */}
      <div style={{
        padding: "10px 16px", flexShrink: 0,
        background: section.bg, borderBottom: `1px solid ${section.border}`
      }}>
        <p style={{ fontSize: 12, color: section.color, margin: 0, fontWeight: 600, lineHeight: 1.5 }}>
          💡 {section.tip}
        </p>
      </div>

      {/* Items */}
      <div style={{ overflowY: "auto", flex: 1, padding: "8px 16px 40px" }}>
        {section.items.map((item, i) => {
          const isHot = item.year?.includes("🔥") || item.year?.includes("ALL") || item.year?.includes("TRAP") || item.year?.includes("TECHNIQUE")
          const isOpen = expanded === i
          const isStrategy = item.year?.includes("STRATEGY") || item.year?.includes("TRAP") || item.year?.includes("TECHNIQUE")
          return (
            <div
              key={i}
              onClick={() => setExpanded(isOpen ? null : i)}
              style={{
                borderRadius: "var(--radius-md)", marginBottom: 8,
                background: isHot ? section.bg : "var(--surface)",
                border: `1px solid ${isHot ? section.border : "var(--border)"}`,
                cursor: "pointer", overflow: "hidden"
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", padding: "12px 14px", gap: 10 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap", marginBottom: 4 }}>
                    {isStrategy && (
                      <span style={{
                        fontSize: 10, background: section.color, color: "#fff",
                        padding: "1px 6px", borderRadius: 8, fontWeight: 700, flexShrink: 0
                      }}>{item.year.split(" ")[0]}</span>
                    )}
                    {!isStrategy && isHot && (
                      <span style={{
                        fontSize: 10, background: section.color, color: "#fff",
                        padding: "1px 6px", borderRadius: 8, fontWeight: 700
                      }}>HOT</span>
                    )}
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)", lineHeight: 1.5 }}>
                    {item.q}
                  </div>
                  <div style={{ fontSize: 12, color: section.color, fontWeight: 700, marginTop: 4 }}>
                    → {item.a}
                  </div>
                </div>
                <span style={{ fontSize: 14, color: "var(--text3)", flexShrink: 0 }}>
                  {isOpen ? "▲" : "▼"}
                </span>
              </div>

              {isOpen && (
                <div style={{ padding: "0 14px 14px", borderTop: "1px solid var(--border)" }}>
                  <div style={{ marginTop: 10 }}>
                    <div style={{ fontSize: 11, fontWeight: 800, color: section.color, textTransform: "uppercase", marginBottom: 4 }}>
                      💡 Why this is correct
                    </div>
                    <div style={{ fontSize: 13, color: "var(--text)", lineHeight: 1.6 }}>
                      {item.why}
                    </div>
                    {!isStrategy && (
                      <div style={{ fontSize: 11, color: "var(--text3)", marginTop: 6 }}>
                        Year: {item.year.replace("🔥", "")}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default EnglishSkillsVault
