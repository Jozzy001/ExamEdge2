import { useState } from "react"

const ALL_ANTONYMS = [
  { word: "ACCIDENTAL", antonym: "Premeditated", meaning: "Happening by chance, not planned", why: "'Premeditated' means planned in advance — the direct opposite of something accidental.", year: "2005" },
  { word: "ACCUSED", antonym: "Exonerated", meaning: "Charged with wrongdoing", why: "To be exonerated means to be officially cleared of blame — the opposite of being accused.", year: "2011" },
  { word: "ACCUSTOMED", antonym: "Surprising", meaning: "Familiar through use or habit", why: "Something accustomed is expected; surprising is the opposite — unexpected.", year: "2012" },
  { word: "ADMIRATION", antonym: "Disdain", meaning: "Respect and warm approval", why: "Disdain means contempt or disrespect — the complete opposite of admiration.", year: "2008" },
  { word: "ALLEVIATE", antonym: "Exacerbate", meaning: "To make suffering less severe", why: "Exacerbate means to make worse — directly opposite to alleviating a problem.", year: "2018" },
  { word: "AMPLE", antonym: "Inadequate", meaning: "More than enough", why: "Inadequate means not enough — opposite of ample.", year: "?" },
  { word: "ANIMATED", antonym: "Dull", meaning: "Full of life and excitement", why: "Dull means lacking interest or energy — opposite of animated.", year: "2009" },
  { word: "APATHY", antonym: "Enthusiasm", meaning: "Lack of interest or concern", why: "Enthusiasm is great eagerness — the opposite of apathy.", year: "?" },
  { word: "ASSUAGE", antonym: "Worsen", meaning: "To make an unpleasant feeling less intense", why: "To worsen means to make something more severe — the opposite of assuaging.", year: "2006" },
  { word: "BELLICOSE", antonym: "Gentle", meaning: "Aggressive and ready to fight", why: "Gentle means mild and kind — the opposite of bellicose behaviour.", year: "2012" },
  { word: "BEREFT", antonym: "Full", meaning: "Lacking or deprived of something", why: "Full means having plenty of something — direct opposite of being bereft.", year: "2008" },
  { word: "BULKY", antonym: "Compact", meaning: "Large and heavy; difficult to carry", why: "Compact means small and efficient — opposite of bulky.", year: "2011" },
  { word: "CALLOUS", antonym: "Compassionate", meaning: "Showing no feeling for others' suffering", why: "Compassionate means showing sympathy and concern — the opposite of being callous.", year: "2005" },
  { word: "CIRCUMSPECT", antonym: "Careless", meaning: "Careful to consider all circumstances", why: "Careless means not giving enough attention — opposite of being circumspect.", year: "2010" },
  { word: "CONCORD", antonym: "Disagreement", meaning: "Agreement or harmony between people", why: "Disagreement is a lack of consensus — directly opposite to concord.", year: "?" },
  { word: "CONSERVATIVE", antonym: "Radical", meaning: "Holding traditional views; resistant to change", why: "Radical means favouring drastic change — opposite of conservative.", year: "?" },
  { word: "CONSULTATION", antonym: "Confrontation", meaning: "Discussion to seek advice or agreement", why: "Confrontation is a hostile face-off — opposite of peaceful consultation.", year: "2008" },
  { word: "CONVALESCING", antonym: "Deteriorating", meaning: "Recovering from illness", why: "Deteriorating means getting worse — opposite of convalescing/recovering.", year: "?" },
  { word: "CONVOCATION", antonym: "Matriculation", meaning: "Graduation ceremony (end of study)", why: "Matriculation is the entry ceremony — opposite end of academic life from convocation.", year: "2008" },
  { word: "COPIOUSLY", antonym: "Very little", meaning: "In large amounts; abundantly", why: "The opposite of copiously (abundantly) is producing very little.", year: "2010" },
  { word: "CROONS", antonym: "Shouts", meaning: "Sings or hums in a soft low voice", why: "To shout is to speak/sing loudly — the opposite of crooning softly.", year: "2009" },
  { word: "DECOROUS", antonym: "Impolite", meaning: "In keeping with good taste and propriety", why: "Impolite means rude and lacking manners — opposite of decorous behaviour.", year: "2018" },
  { word: "DENOUNCE", antonym: "Lauded", meaning: "To publicly declare as wrong or evil", why: "To laud means to praise highly — the opposite of denouncing someone.", year: "2009" },
  { word: "DEROGATORY", antonym: "Complementary", meaning: "Showing a critical or disrespectful attitude", why: "Complementary means expressing praise — opposite of derogatory remarks.", year: "2012" },
  { word: "DILIGENCE", antonym: "Indolence", meaning: "Careful and persistent work or effort", why: "Indolence means laziness — the direct opposite of diligence.", year: "2006" },
  { word: "DISCREET", antonym: "Open", meaning: "Careful not to attract attention or reveal secrets", why: "Being open means not hiding things — opposite of being discreet.", year: "?" },
  { word: "DOTING", antonym: "Uncaring", meaning: "Excessively fond of someone", why: "Uncaring means showing no affection — opposite of a doting person.", year: "?" },
  { word: "ENERVATING", antonym: "Invigorating", meaning: "Causing to feel drained of energy", why: "Invigorating means giving energy and vitality — direct opposite of enervating.", year: "2005, 2006 🔥" },
  { word: "ESOTERIC", antonym: "Familiar", meaning: "Understood by only a small group", why: "Familiar means well-known and understood by all — opposite of esoteric.", year: "?" },
  { word: "ESSENTIAL", antonym: "Unnecessary", meaning: "Absolutely necessary; extremely important", why: "Unnecessary means not needed — the direct opposite of essential.", year: "2005" },
  { word: "EUPHEMISTIC", antonym: "Harsh", meaning: "Using mild words to replace blunt ones", why: "Harsh means cruel and direct — opposite of softening words euphemistically.", year: "2006" },
  { word: "EXPERT", antonym: "Novice", meaning: "A person with great skill or knowledge", why: "A novice is a beginner with no experience — the opposite of an expert.", year: "2007" },
  { word: "EXTRAVAGANCE", antonym: "Frugality", meaning: "Lack of restraint in spending money", why: "Frugality means careful management of money — opposite of extravagance.", year: "2009" },
  { word: "FLEETING", antonym: "Long", meaning: "Lasting for a very short time", why: "Long means lasting a long time — direct opposite of fleeting.", year: "2018" },
  { word: "FOREIGN", antonym: "Domestic", meaning: "Relating to another country", why: "Domestic means relating to one's own country — opposite of foreign.", year: "2005" },
  { word: "GENEROUS", antonym: "Mean", meaning: "Giving freely; showing kindness", why: "Mean means unwilling to give — the opposite of being generous.", year: "2006" },
  { word: "GIGANTIC", antonym: "Small", meaning: "Extremely large in size", why: "Small is the obvious opposite of gigantic.", year: "2005" },
  { word: "GREEN", antonym: "Experienced", meaning: "Inexperienced; new to a situation", why: "Experienced means having knowledge from practice — opposite of being green.", year: "2008" },
  { word: "HUMILITY", antonym: "Pride", meaning: "Having a modest view of one's own importance", why: "Pride means having a high opinion of oneself — opposite of humility.", year: "2010" },
  { word: "IGNOBLE", antonym: "Honourable", meaning: "Not deserving respect; dishonourable", why: "Honourable means deserving respect — the direct opposite of ignoble.", year: "2011, 2012 🔥" },
  { word: "IMPEACHED", antonym: "Inaugurated", meaning: "Charged with misconduct while in office", why: "Inaugurated means formally installed in office — opposite end of a political career.", year: "2009" },
  { word: "INDIFFERENCE", antonym: "Concern", meaning: "Lack of interest or sympathy", why: "Concern means having an interest in something — opposite of indifference.", year: "2012" },
  { word: "INDOLENT", antonym: "Industrious/Diligent", meaning: "Wanting to avoid activity; lazy", why: "Industrious means hardworking — the complete opposite of an indolent person.", year: "2011, 2020 🔥" },
  { word: "INDOMITABLE", antonym: "Weak", meaning: "Impossible to subdue or defeat", why: "Weak means easily overcome — the opposite of indomitable.", year: "2005" },
  { word: "INOPPORTUNE", antonym: "Adequate/Timely", meaning: "Occurring at an inconvenient time", why: "Adequate/timely means well-suited to the occasion — opposite of inopportune.", year: "2005" },
  { word: "INTENTIONALLY", antonym: "Unknowingly", meaning: "Done on purpose; deliberately", why: "Unknowingly means without awareness — opposite of doing something intentionally.", year: "2010" },
  { word: "INTRANSIGENT", antonym: "Compromising", meaning: "Refusing to change one's views", why: "Compromising means willing to make concessions — opposite of intransigent.", year: "?" },
  { word: "INTRIGUED", antonym: "Uninterested", meaning: "Very curious or fascinated", why: "Uninterested means not curious at all — opposite of being intrigued.", year: "?" },
  { word: "KINDLE", antonym: "Extinguish", meaning: "To light or start a fire", why: "Extinguish means to put out a fire — direct opposite of kindle.", year: "2005" },
  { word: "LACKADAISICAL", antonym: "Enthusiastic", meaning: "Lacking enthusiasm and determination", why: "Enthusiastic means showing eager interest — the opposite of lackadaisical.", year: "2006" },
  { word: "LOQUACIOUS", antonym: "Taciturn", meaning: "Talking a great deal; talkative", why: "Taciturn means habitually silent and reserved — direct opposite of loquacious.", year: "2005, 2012 🔥" },
  { word: "MUNDANE", antonym: "Great/Extraordinary", meaning: "Lacking interest; ordinary", why: "Great/extraordinary means remarkable — opposite of a mundane task.", year: "?" },
  { word: "NATURAL", antonym: "Supernatural", meaning: "Existing in nature; not artificial", why: "Supernatural means beyond natural laws — opposite of natural causes.", year: "2010" },
  { word: "NEBULOUS", antonym: "Clear", meaning: "Not clear; hazy", why: "Clear means easy to understand — the opposite of a nebulous description.", year: "?" },
  { word: "NOMADIC", antonym: "Sedentary", meaning: "Moving from place to place", why: "Sedentary means staying in one place — the direct opposite of nomadic.", year: "2005" },
  { word: "NOTORIOUS", antonym: "Illustrious", meaning: "Famous for bad qualities", why: "Illustrious means famous for good qualities — opposite of notorious.", year: "2011" },
  { word: "OBFUSCATING", antonym: "Clarifying", meaning: "Making unclear or confusing", why: "Clarifying means making something easier to understand — opposite of obfuscating.", year: "?" },
  { word: "OBSOLETE", antonym: "Up-to-date", meaning: "No longer produced or used", why: "Up-to-date means current and modern — the opposite of obsolete.", year: "2007" },
  { word: "ORDEAL", antonym: "A great pleasure", meaning: "A very painful experience", why: "A great pleasure is the most enjoyable experience — direct opposite of an ordeal.", year: "2005" },
  { word: "PALATABLE", antonym: "Unacceptable", meaning: "Agreeable to the mind", why: "Unacceptable means not satisfactory — opposite of palatable ideas.", year: "2020" },
  { word: "PARSIMONIOUS", antonym: "Generous/Extravagant", meaning: "Very unwilling to spend money; miserly", why: "Generous/extravagant means free with spending — opposite of parsimonious.", year: "2006, 2020 🔥" },
  { word: "PENCHANT", antonym: "Dislike/Aversion", meaning: "A strong liking for something", why: "Dislike/aversion means a strong feeling against — opposite of penchant.", year: "2020" },
  { word: "PERFUNCTORILY", antonym: "Carefully", meaning: "Done routinely with little care", why: "Carefully means with great attention — the opposite of doing something perfunctorily.", year: "?" },
  { word: "PERIPHERAL", antonym: "Main/Central", meaning: "Relating to the edge or outside", why: "Main/central means most important — opposite of peripheral/minor aspects.", year: "2005" },
  { word: "PLACID", antonym: "Violent", meaning: "Not easily upset; calm", why: "Violent means aggressive and forceful — opposite of a placid temperament.", year: "2008" },
  { word: "PROCURE", antonym: "Dispose of", meaning: "To obtain something", why: "To dispose of means to get rid of — the direct opposite of procuring.", year: "2007" },
  { word: "PROVOCATIVE", antonym: "Modest", meaning: "Causing strong reactions; deliberately annoying", why: "Modest means restrained and decent — opposite of provocative dressing or behaviour.", year: "2005, 2009 🔥" },
  { word: "REMARKABLE", antonym: "Ordinary", meaning: "Worthy of attention; striking", why: "Ordinary means nothing special — the opposite of remarkable.", year: "2010" },
  { word: "RESTIVE", antonym: "Calm", meaning: "Unable to keep still; nervous", why: "Calm means peaceful and still — opposite of restive behaviour.", year: "2010" },
  { word: "SEVERITY", antonym: "Mildness", meaning: "The fact of being very bad or intense", why: "Mildness means not extreme — the direct opposite of severity.", year: "2005" },
  { word: "SPURIOUS", antonym: "Genuine", meaning: "Not what it appears to be; false", why: "Genuine means truly authentic — the opposite of spurious arguments.", year: "?" },
  { word: "STAUNCH", antonym: "Disloyal", meaning: "Very loyal and committed", why: "Disloyal means not faithful — the opposite of being a staunch supporter.", year: "2008" },
  { word: "SUBSTANTIATED", antonym: "Could not prove", meaning: "Provided evidence to prove something true", why: "Could not prove is the opposite of substantiating a claim with evidence.", year: "2010" },
  { word: "SUDDEN", antonym: "Gradual", meaning: "Happening quickly and unexpectedly", why: "Gradual means happening slowly over time — opposite of sudden.", year: "2005" },
  { word: "TAUT", antonym: "Loose", meaning: "Stretched tightly; not slack", why: "Loose means not tight — the direct opposite of taut.", year: "2018" },
  { word: "TEMPERATE", antonym: "Extreme", meaning: "Showing moderation and self-restraint", why: "Extreme means going beyond what is moderate — opposite of temperate.", year: "2012" },
  { word: "VACILLATED", antonym: "Decisive", meaning: "Was uncertain; kept changing opinion", why: "Decisive means making firm decisions — the opposite of vacillating.", year: "2005" },
  { word: "VAGUE", antonym: "Specific", meaning: "Not clearly expressed or identified", why: "Specific means precise and clear — the direct opposite of vague.", year: "2011" },
  { word: "VALEDICTORY", antonym: "Inaugural", meaning: "Relating to farewell; a final address", why: "Inaugural refers to a first/opening event — opposite of valedictory/farewell.", year: "2005" },
  { word: "VERBOSE", antonym: "Concise", meaning: "Using more words than necessary", why: "Concise means using few words clearly — the opposite of verbose.", year: "?" },
  { word: "VERBOSITY", antonym: "Brevity", meaning: "The quality of using too many words", why: "Brevity means shortness of expression — the direct opposite of verbosity.", year: "2008" },
  { word: "VICES", antonym: "Virtue", meaning: "Immoral or wicked behaviour", why: "Virtue means moral excellence — the complete opposite of vices.", year: "2005" },
  { word: "VIVACIOUS", antonym: "Moody", meaning: "Attractively lively and animated", why: "Moody means having unpredictable sad moods — opposite of vivacious.", year: "2006" },
  { word: "VOCIFEROUS", antonym: "Quiet/Reserved", meaning: "Making a loud and forceful expression", why: "Quiet/reserved means not drawing attention — opposite of vociferous behaviour.", year: "2005" },
  { word: "WATERLOGGED", antonym: "Dry", meaning: "Saturated with or full of water", why: "Dry means free of water — the direct opposite of waterlogged.", year: "2010" },
  { word: "WILY", antonym: "Wise/Straightforward", meaning: "Skilled at gaining advantage; cunning", why: "Wise/straightforward means honest and direct — opposite of wily/cunning.", year: "2009" },
  { word: "WRATH", antonym: "Favour", meaning: "Extreme anger", why: "Favour means approval and kindness — the opposite of wrath.", year: "2006" },
  { word: "ZENITH", antonym: "Nadir", meaning: "The highest point reached", why: "Nadir is the lowest point — the direct opposite of the zenith.", year: "?" },
]

const AntonymsVault = ({ onClose, isPaid, onUpgrade }) => {
  const [search, setSearch] = useState("")
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
            The complete list of 99 UNIBEN-tested antonyms with meanings and explanations is available to paid users only.
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

  const filtered = ALL_ANTONYMS.filter(a =>
    !search || a.word.toLowerCase().includes(search.toLowerCase()) ||
    a.antonym.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 3000,
      background: "var(--bg)", display: "flex", flexDirection: "column"
    }}>
      {/* Header */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "16px 20px", borderBottom: "1px solid var(--border)",
        background: "var(--bg)", flexShrink: 0
      }}>
        <button onClick={onClose} style={{
          background: "none", border: "none", color: "var(--primary)",
          fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "var(--font-main)"
        }}>← Back</button>
        <span style={{ fontWeight: 800, fontSize: 15, color: "var(--text)" }}>
          99 Tested Antonyms 🔄
        </span>
        <span style={{ fontSize: 12, color: "var(--text3)" }}>{filtered.length}</span>
      </div>

      {/* Search */}
      <div style={{ padding: "12px 16px", borderBottom: "1px solid var(--border)", flexShrink: 0 }}>
        <input
          type="text"
          placeholder="Search word or antonym..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            width: "100%", padding: "10px 14px",
            borderRadius: "var(--radius-md)",
            border: "1.5px solid var(--border)",
            background: "var(--surface)", color: "var(--text)",
            fontSize: 13, fontFamily: "var(--font-main)",
            boxSizing: "border-box"
          }}
        />
      </div>

      {/* Info banner */}
      <div style={{
        padding: "10px 16px", background: "var(--primary-light)",
        borderBottom: "1px solid var(--border)", flexShrink: 0
      }}>
        <p style={{ fontSize: 12, color: "var(--primary)", margin: 0, fontWeight: 600 }}>
          🔥 Words with years marked are from actual UNIBEN past papers. Tap any word to see full explanation.
        </p>
      </div>

      {/* List */}
      <div style={{ overflowY: "auto", flex: 1, padding: "8px 16px 40px" }}>
        {filtered.map((item, i) => {
          const isHot = item.year.includes("🔥")
          const isExpanded2 = expanded === i
          return (
            <div
              key={i}
              onClick={() => setExpanded(isExpanded2 ? null : i)}
              style={{
                borderRadius: "var(--radius-md)", marginBottom: 8,
                background: isHot ? "rgba(245,158,11,0.06)" : "var(--surface)",
                border: `1px solid ${isHot ? "rgba(245,158,11,0.3)" : "var(--border)"}`,
                cursor: "pointer", overflow: "hidden"
              }}
            >
              {/* Row */}
              <div style={{
                display: "flex", alignItems: "center",
                padding: "12px 14px", gap: 12
              }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 14, fontWeight: 800, color: "var(--text)" }}>
                      {item.word}
                    </span>
                    {isHot && <span style={{ fontSize: 10, background: "#f59e0b", color: "#fff", padding: "1px 6px", borderRadius: 8, fontWeight: 700 }}>HOT</span>}
                  </div>
                  <div style={{ fontSize: 12, color: "var(--primary)", fontWeight: 700, marginTop: 2 }}>
                    ↔ {item.antonym}
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 10, color: "var(--text3)" }}>{item.year.replace("🔥", "")}</div>
                  <div style={{ fontSize: 14, color: "var(--text3)", marginTop: 2 }}>
                    {isExpanded2 ? "▲" : "▼"}
                  </div>
                </div>
              </div>

              {/* Expanded */}
              {isExpanded2 && (
                <div style={{
                  padding: "0 14px 14px",
                  borderTop: "1px solid var(--border)"
                }}>
                  <div style={{ marginTop: 10 }}>
                    <div style={{ fontSize: 11, fontWeight: 800, color: "var(--text2)", textTransform: "uppercase", marginBottom: 4 }}>
                      Meaning
                    </div>
                    <div style={{ fontSize: 13, color: "var(--text)", lineHeight: 1.6 }}>
                      {item.meaning}
                    </div>
                  </div>
                  <div style={{ marginTop: 10 }}>
                    <div style={{ fontSize: 11, fontWeight: 800, color: "var(--primary)", textTransform: "uppercase", marginBottom: 4 }}>
                      💡 Why "{item.antonym}" is correct
                    </div>
                    <div style={{ fontSize: 13, color: "var(--text)", lineHeight: 1.6 }}>
                      {item.why}
                    </div>
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

export default AntonymsVault
