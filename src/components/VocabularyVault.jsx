import { useState } from "react"

const ALL_VOCAB = [
  { word: "AFFLUENCE", meaning: "Great wealth and abundance", synonym: "Wealth/prosperity", year: "2020" },
  { word: "AILMENT", meaning: "A minor or recurring illness", synonym: "Chronic illness/disorder", year: "2012" },
  { word: "ALIENATION", meaning: "The state of being isolated or estranged from others", synonym: "Isolation", year: "2005" },
  { word: "AMELIORATE", meaning: "To make something bad less severe or more tolerable", synonym: "Improve", year: "2010 🔥" },
  { word: "AMBIDEXTROUS", meaning: "Able to use both hands equally well", synonym: "Equally skilled with both hands", year: "2011" },
  { word: "ANIMATED", meaning: "Full of life, excitement and energy", synonym: "Lively", year: "2018" },
  { word: "ANOMALOUS", meaning: "Deviating from what is standard or normal; irregular", synonym: "Irregular/abnormal", year: "2011" },
  { word: "ARTISAN", meaning: "A worker skilled in a particular craft", synonym: "Craftsman", year: "2011" },
  { word: "ASSIDUOUSLY", meaning: "With great care and persistent effort", synonym: "Diligently/thoroughly", year: "2011" },
  { word: "ASTOUNDING", meaning: "Extremely surprising or impressive", synonym: "Amazing", year: "2005" },
  { word: "ATTRITION", meaning: "Gradual wearing down of strength by sustained attack", synonym: "Gradual wearing down", year: "2011" },
  { word: "AUTHENTIC", meaning: "Of undisputed origin; genuine", synonym: "Genuine/real", year: "2017" },
  { word: "BALL OF FIRE", meaning: "A very energetic and enthusiastic person", synonym: "Very energetic person", year: "2011" },
  { word: "BRAINWAVE", meaning: "A sudden clever idea or inspiration", synonym: "A sudden good idea", year: "2011" },
  { word: "CALIGYNEPHOBIA", meaning: "Fear of beautiful women", synonym: "Phobia of beautiful women", year: "?" },
  { word: "COLLAPSE", meaning: "To suddenly fall down or give way", synonym: "Fall down/crumble", year: "2020" },
  { word: "CONSOLIDATE", meaning: "To make something stronger or more secure", synonym: "Strengthen/reinforce", year: "2014" },
  { word: "COUNTERACT", meaning: "To act against something in order to reduce its effect", synonym: "Neutralise/offset", year: "2011" },
  { word: "COURTEOUSLY", meaning: "In a polite and respectful manner", synonym: "Politely", year: "2017" },
  { word: "CUT CORNERS", meaning: "To do things improperly to save time or effort", synonym: "Take shortcuts", year: "2011" },
  { word: "DARK HORSE", meaning: "A person about whom little is known; an unexpected rival", synonym: "Unknown competitor", year: "2011" },
  { word: "DEADLY", meaning: "Causing or able to cause death", synonym: "Fatal/lethal", year: "2019" },
  { word: "DELETE", meaning: "To remove or erase something written", synonym: "Remove/erase", year: "2011" },
  { word: "DIGRESSIVE", meaning: "Tending to stray from the main subject", synonym: "Wandering/off-topic", year: "2011" },
  { word: "DISPARAGING", meaning: "Expressing contempt or a low opinion of someone", synonym: "Derogatory/belittling", year: "2007 🔥" },
  { word: "DISASTROUS", meaning: "Causing great damage; catastrophic", synonym: "Catastrophic/ruinous", year: "2017" },
  { word: "ECLECTIC", meaning: "Deriving ideas from a wide range of sources", synonym: "Broad/varied/versatile", year: "2011" },
  { word: "EDITORIAL", meaning: "The leader article in a newspaper expressing the editor's opinion", synonym: "Leader article", year: "2019 🔥" },
  { word: "ENORMOUS", meaning: "Very large in size or quantity", synonym: "Huge/gigantic", year: "2009" },
  { word: "EPITHET", meaning: "A descriptive word or phrase expressing a quality of a person", synonym: "Descriptive title/label", year: "?" },
  { word: "EXONERATED", meaning: "Officially cleared of blame or wrongdoing", synonym: "Cleared/acquitted", year: "2011" },
  { word: "EXTERMINATING", meaning: "Destroying completely; killing off entirely", synonym: "Wiping out/destroying", year: "2011" },
  { word: "EXTRAVAGANCE", meaning: "Excessive spending; lack of financial restraint", synonym: "Wastefulness/excess", year: "?" },
  { word: "FATEFUL", meaning: "Having far-reaching and often disastrous consequences", synonym: "Disastrous/momentous", year: "2017" },
  { word: "FIGURE", meaning: "A person's body shape; also a number or important person", synonym: "Stature", year: "2011 🔥" },
  { word: "FUTILE", meaning: "Producing no result; pointless and unsuccessful", synonym: "Fruitless/unsuccessful", year: "2007, 2010 🔥" },
  { word: "GAZED", meaning: "Looked steadily and intently at something", synonym: "Stared/looked fixedly", year: "2019" },
  { word: "HAYWIRE", meaning: "Out of control; in a state of disorder", synonym: "Out of control", year: "2011" },
  { word: "INEFFABLE", meaning: "Too great or extreme to be expressed in words", synonym: "Inexpressible/indescribable", year: "2017" },
  { word: "INDIGNATION", meaning: "Anger or annoyance provoked by what is unfair", synonym: "Outrage/anger", year: "2020" },
  { word: "INDISPOSED", meaning: "Slightly unwell; not feeling well enough to do something", synonym: "Unwell/ill", year: "2009" },
  { word: "INEFFABLE", meaning: "Too great to be expressed in words; unspeakable", synonym: "Inexpressible", year: "2017" },
  { word: "INNOCUOUS", meaning: "Not harmful or offensive; harmless", synonym: "Harmless/inoffensive", year: "2020 🔥" },
  { word: "IMPORTUNATE", meaning: "Persistent and demanding in making requests", synonym: "Persistent/pressing", year: "2010" },
  { word: "INVALUABLE", meaning: "Extremely useful; priceless (NOT worthless!)", synonym: "Very useful/priceless", year: "2010 🔥" },
  { word: "JOCULAR", meaning: "Fond of or characterized by joking; playful", synonym: "Humorous/playful", year: "2019" },
  { word: "LOOT", meaning: "Goods stolen or taken by force; to steal", synonym: "Stolen goods/plunder", year: "2018" },
  { word: "MUNDANE", meaning: "Lacking interest or excitement; relating to ordinary life", synonym: "Worldly/ordinary", year: "2014" },
  { word: "NEGLECTED", meaning: "Suffering lack of proper care or attention", synonym: "Ignored/overlooked", year: "2018" },
  { word: "NEGLIGIBLE", meaning: "So small or unimportant as to be not worth considering", synonym: "Insignificant/trivial", year: "2021" },
  { word: "NIGGARDLY", meaning: "Ungenerous with money; stingy and mean", synonym: "Stingy/miserly", year: "2005 🔥" },
  { word: "OBNOXIOUS", meaning: "Extremely unpleasant; offensive to others", synonym: "Offensive/repulsive", year: "2014" },
  { word: "OBSERVANT", meaning: "Quick to notice things; watchful and attentive", synonym: "Perceptive/alert", year: "2017" },
  { word: "OBSOLETE", meaning: "No longer produced or used; out of date", synonym: "Out of date/outdated", year: "2010 🔥" },
  { word: "OBSTINATE", meaning: "Stubbornly refusing to change one's opinion", synonym: "Unyielding/obdurate", year: "2019 🔥" },
  { word: "ONSET", meaning: "The beginning of something, especially something unpleasant", synonym: "Beginning/start", year: "?" },
  { word: "OSTRACIZE", meaning: "To exclude someone from a society or group", synonym: "Exclude/shun", year: "2011" },
  { word: "OUTSPOKEN", meaning: "Direct and frank in speech; not afraid to speak one's mind", synonym: "Frank/direct", year: "2005" },
  { word: "PERFUNCTORILY", meaning: "Done as a routine duty with little care or effort", synonym: "Without commitment/carelessly", year: "2005 🔥" },
  { word: "PERCEPTIVE", meaning: "Having or showing insight and understanding", synonym: "Observant/insightful", year: "2017" },
  { word: "PLAUSIBLE", meaning: "Seeming reasonable or probable; believable", synonym: "Reasonable/credible", year: "2010 🔥" },
  { word: "POVERTY/WANT", meaning: "The state of being extremely poor; serious lack", synonym: "Want/deprivation", year: "2017" },
  { word: "PROPITIATE", meaning: "To win favour of someone by doing something to please them", synonym: "Appease/pacify", year: "2011" },
  { word: "PROSCRIBED", meaning: "Officially forbidden or banned", synonym: "Banned/prohibited", year: "2020" },
  { word: "RETICENCE", meaning: "The quality of being reserved or uncommunicative", synonym: "Taciturnity/silence", year: "2017" },
  { word: "REPREHENSIBLE", meaning: "Deserving censure or condemnation; blameworthy", synonym: "Blameworthy/disgraceful", year: "2011" },
  { word: "REPRISAL", meaning: "An act of retaliation", synonym: "Retaliation/revenge", year: "2011" },
  { word: "REPUDIATED", meaning: "Refused to accept; disowned or denied", synonym: "Disowned/rejected", year: "2005 🔥" },
  { word: "RESOURCEFUL", meaning: "Having the ability to find quick and clever solutions", synonym: "Ingenious/capable", year: "?" },
  { word: "RESPITE", meaning: "A short period of rest or relief from something difficult", synonym: "Temporary relief/break", year: "2019 🔥" },
  { word: "SALIENT", meaning: "Most noticeable or important; prominent", synonym: "Notable/prominent", year: "2011" },
  { word: "SIMULATE", meaning: "To imitate or reproduce the appearance of something", synonym: "Imitate/pretend", year: "2011" },
  { word: "SPORADICALLY", meaning: "Occurring at irregular intervals; not regularly", synonym: "Irregularly/occasionally", year: "2011" },
  { word: "STEW IN ONE'S OWN JUICE", meaning: "To suffer the consequences of one's own actions", synonym: "Face consequences", year: "2011" },
  { word: "STRINGENT", meaning: "Very strict or severe; leaving no room for error", synonym: "Strict/severe", year: "2011" },
  { word: "SUCCINCT", meaning: "Briefly and clearly expressed; concise", synonym: "Concise/brief", year: "2011" },
  { word: "TACITURNITY", meaning: "The habit of being reserved and saying little", synonym: "Reticence/silence", year: "2017 🔥" },
  { word: "TERRESTRIAL", meaning: "Relating to the earth or land (not water or air)", synonym: "Worldly/earthly", year: "2009" },
  { word: "TURMOIL", meaning: "A state of great disturbance, confusion and uncertainty", synonym: "Crisis/upheaval", year: "2005 🔥" },
  { word: "ULTERIOR", meaning: "Existing beyond what is obvious; hidden or secret", synonym: "Hidden/concealed", year: "2011" },
  { word: "UMPTEENTH", meaning: "Denoting something that has happened many times before", synonym: "The last of many times", year: "2011" },
  { word: "UNEQUIVOCAL", meaning: "Leaving no doubt; clear and decisive", synonym: "Clear and definite", year: "2010 🔥" },
  { word: "UNMITIGATED", meaning: "Absolute; not reduced or lessened in any way", synonym: "Absolute/complete", year: "2012" },
  { word: "UNWITTINGLY", meaning: "Without being aware; not intentionally", synonym: "Inadvertently/unknowingly", year: "2011" },
  { word: "VIVID", meaning: "Producing powerful feelings or clear images; bright", synonym: "Clear/striking/realistic", year: "2014" },
  { word: "WILLFUL", meaning: "Intentional; stubbornly determined to do as one wants", synonym: "Obstinate/deliberate", year: "2019" },
]

const VocabularyVault = ({ onClose, isPaid, onUpgrade }) => {
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
            The complete vocabulary list of UNIBEN-tested words with meanings is available to paid users only.
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

  const filtered = ALL_VOCAB.filter(a =>
    !search ||
    a.word.toLowerCase().includes(search.toLowerCase()) ||
    a.synonym.toLowerCase().includes(search.toLowerCase()) ||
    a.meaning.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 3000,
      background: "var(--bg)", display: "flex", flexDirection: "column"
    }}>
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
          UNIBEN Vocabulary Bank 📝
        </span>
        <span style={{ fontSize: 12, color: "var(--text3)" }}>{filtered.length}</span>
      </div>

      <div style={{ padding: "12px 16px", borderBottom: "1px solid var(--border)", flexShrink: 0 }}>
        <input
          type="text"
          placeholder="Search word, meaning or synonym..."
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

      <div style={{
        padding: "10px 16px", background: "var(--primary-light)",
        borderBottom: "1px solid var(--border)", flexShrink: 0
      }}>
        <p style={{ fontSize: 12, color: "var(--primary)", margin: 0, fontWeight: 600 }}>
          🔥 HOT = tested multiple times. ⚠️ INVALUABLE = very useful (NOT worthless!). LEADER = editorial (NOT headline).
        </p>
      </div>

      <div style={{ overflowY: "auto", flex: 1, padding: "8px 16px 40px" }}>
        {filtered.map((item, i) => {
          const isHot = item.year.includes("🔥")
          const isOpen = expanded === i
          return (
            <div
              key={i}
              onClick={() => setExpanded(isOpen ? null : i)}
              style={{
                borderRadius: "var(--radius-md)", marginBottom: 8,
                background: isHot ? "rgba(16,185,129,0.06)" : "var(--surface)",
                border: `1px solid ${isHot ? "rgba(16,185,129,0.3)" : "var(--border)"}`,
                cursor: "pointer", overflow: "hidden"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", padding: "12px 14px", gap: 10 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                    <span style={{ fontSize: 14, fontWeight: 800, color: "var(--text)" }}>
                      {item.word}
                    </span>
                    {isHot && (
                      <span style={{
                        fontSize: 10, background: "#10b981", color: "#fff",
                        padding: "1px 6px", borderRadius: 8, fontWeight: 700
                      }}>HOT</span>
                    )}
                  </div>
                  <div style={{ fontSize: 12, color: "var(--primary)", fontWeight: 700, marginTop: 2 }}>
                    → {item.synonym}
                  </div>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontSize: 10, color: "var(--text3)" }}>{item.year.replace("🔥", "")}</div>
                  <div style={{ fontSize: 14, color: "var(--text3)", marginTop: 2 }}>
                    {isOpen ? "▲" : "▼"}
                  </div>
                </div>
              </div>
              {isOpen && (
                <div style={{ padding: "0 14px 14px", borderTop: "1px solid var(--border)" }}>
                  <div style={{ marginTop: 10 }}>
                    <div style={{ fontSize: 11, fontWeight: 800, color: "var(--text2)", textTransform: "uppercase", marginBottom: 4 }}>
                      Full Meaning
                    </div>
                    <div style={{ fontSize: 13, color: "var(--text)", lineHeight: 1.6 }}>
                      {item.meaning}
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

export default VocabularyVault
