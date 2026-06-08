import { useState } from "react"

const ALL_SYNONYMS = [
  { word: "ABRIDGED", synonym: "Shortened", meaning: "Made shorter by cutting parts", year: "2010" },
  { word: "AGREEABLE", synonym: "Congenial", meaning: "Pleasant and suitable to one's taste", year: "2011" },
  { word: "AILMENT", synonym: "Illness/disorder", meaning: "A minor or chronic illness", year: "2012" },
  { word: "ALIENATION", synonym: "Isolation", meaning: "The state of being cut off from others", year: "2005" },
  { word: "AMELIORATE", synonym: "Improve", meaning: "To make something bad less severe", year: "2010 🔥" },
  { word: "ANIMATED", synonym: "Lively", meaning: "Full of life and excitement", year: "2018" },
  { word: "ANTAGONISTIC", synonym: "Critical/hostile", meaning: "Showing active opposition or hostility", year: "2010" },
  { word: "ASTOUNDING", synonym: "Amazing", meaning: "Surprisingly impressive or notable", year: "2005" },
  { word: "ASTUTE", synonym: "Shrewd", meaning: "Having ability to make good judgements", year: "2011" },
  { word: "AUGUST", synonym: "Popular/distinguished", meaning: "Respected and impressive", year: "?" },
  { word: "AVERSION", synonym: "Abhorrence/strong dislike", meaning: "A strong feeling of dislike", year: "?" },
  { word: "BASKING", synonym: "Enjoying", meaning: "Lying or sitting exposed to warmth or glory", year: "2010" },
  { word: "BELLIGERENT", synonym: "Combative/warlike", meaning: "Hostile and aggressive", year: "2011" },
  { word: "BENIGN", synonym: "Harmless", meaning: "Not harmful in effect; gentle", year: "2008" },
  { word: "BIASED", synonym: "Unscrupulous/partial", meaning: "Unfairly prejudiced for or against something", year: "2005" },
  { word: "BRACING", synonym: "Invigorating", meaning: "Fresh and stimulating", year: "?" },
  { word: "BRAINWAVE", synonym: "A sudden good idea", meaning: "A sudden clever idea or inspiration", year: "2011" },
  { word: "CELESTIAL", synonym: "Heavenly", meaning: "Belonging to or relating to heaven", year: "2006" },
  { word: "COMPLIMENT", synonym: "Praise", meaning: "To express admiration or respect", year: "2011" },
  { word: "CONTROL", synonym: "Restrain", meaning: "To hold back or keep under control", year: "2008" },
  { word: "CORROBORATED", synonym: "Confirmed", meaning: "Provided evidence to support a statement", year: "2008" },
  { word: "COUNTERFEIT", synonym: "Fake", meaning: "Made in imitation of something genuine", year: "?" },
  { word: "DELETERIOUS", synonym: "Harmful", meaning: "Causing harm or damage", year: "2011" },
  { word: "DELINQUENT", synonym: "Culprit", meaning: "A person who behaves in a criminal way", year: "?" },
  { word: "DEMENTIA", synonym: "Senility", meaning: "A chronic mental disorder causing memory loss", year: "2011" },
  { word: "DEPRECATED", synonym: "Condemned", meaning: "To express disapproval of something", year: "2006" },
  { word: "DISPARAGING", synonym: "Derogatory", meaning: "Expressing contempt or a low opinion", year: "2007 🔥" },
  { word: "DONE IN", synonym: "Exhausted", meaning: "Completely tired out", year: "?" },
  { word: "DRAINED", synonym: "Tired/exhausted", meaning: "Having had all energy or resources used up", year: "2010" },
  { word: "ECLECTIC", synonym: "Versatile/broad", meaning: "Deriving ideas from a wide range of sources", year: "2006, 2011 🔥" },
  { word: "ELIGIBLE", synonym: "Qualified", meaning: "Satisfying the conditions required", year: "2010" },
  { word: "ENSNARED", synonym: "Tricked", meaning: "To catch in a trap; to trick into a difficult situation", year: "2011" },
  { word: "EPHEMERAL", synonym: "Transient", meaning: "Lasting for a very short time", year: "2006" },
  { word: "EQUANIMITY", synonym: "Fortitude/calmness", meaning: "Mental calmness especially in difficult situations", year: "2006" },
  { word: "EXACERBATED", synonym: "Aggravated/worsened", meaning: "Made more severe or bitter", year: "2011" },
  { word: "EXHAUSTIVE", synonym: "Thorough/comprehensive", meaning: "Covering all possibilities; complete", year: "?" },
  { word: "EXTINCT", synonym: "Inactive", meaning: "No longer existing or active", year: "2005, 2012 🔥" },
  { word: "FANTASY", synonym: "Nonsense", meaning: "The faculty of imagining impossible things", year: "2005, 2011 🔥" },
  { word: "FECKLESS", synonym: "Futile/ineffective", meaning: "Lacking initiative or strength of character", year: "2006" },
  { word: "FIGURE", synonym: "Stature", meaning: "A person's body shape; also a number or diagram", year: "2011" },
  { word: "FORLORN", synonym: "Lonely and unhappy", meaning: "Pitifully sad and abandoned", year: "2011" },
  { word: "FUTILE", synonym: "Fruitless/unsuccessful", meaning: "Producing no useful result; pointless", year: "2005, 2007, 2010 🔥" },
  { word: "GARRULOUS", synonym: "Loquacious", meaning: "Excessively talkative, especially on trivial matters", year: "2006" },
  { word: "HALLUCINATION", synonym: "Delusion", meaning: "An experience of seeing something not present", year: "?" },
  { word: "HUMOROUS", synonym: "Funny", meaning: "Causing amusement; comic", year: "2005" },
  { word: "IGNOMINIOUS", synonym: "Disgraceful", meaning: "Deserving or causing public disgrace or shame", year: "2011" },
  { word: "IMPASSE", synonym: "Gridlock", meaning: "A situation in which no progress is possible", year: "2010" },
  { word: "IMPECCABLE", synonym: "Faultless", meaning: "In accordance with the highest standards; perfect", year: "?" },
  { word: "IMMODEST", synonym: "Indecent", meaning: "Not conforming to accepted standards of modesty", year: "?" },
  { word: "IMPORTUNATE", synonym: "Persistent", meaning: "Persistent in making requests; not taking no for an answer", year: "2010" },
  { word: "IMPROMPTU", synonym: "Not prepared/unrehearsed", meaning: "Done without preparation", year: "?" },
  { word: "INDISPOSED", synonym: "Unwell", meaning: "Slightly unwell; unwilling", year: "2009" },
  { word: "INDOLENT", synonym: "Lazy/diligent (opposite)", meaning: "Wanting to avoid activity; habitually lazy", year: "2006" },
  { word: "INFURIATES", synonym: "Annoys/enrages", meaning: "Makes someone extremely angry", year: "2005" },
  { word: "INGENIOUS", synonym: "Clever", meaning: "Clever, original, and inventive", year: "2005, 2011 🔥" },
  { word: "INCEPTION", synonym: "Commencement/beginning", meaning: "The establishment or starting point of an institution or activity", year: "2011" },
  { word: "INUNDATED", synonym: "Overwhelmed with", meaning: "Flooded or swamped with too much of something", year: "?" },
  { word: "INVALUABLE", synonym: "Very useful/priceless", meaning: "Extremely useful; priceless (NOT worthless!)", year: "2010 🔥" },
  { word: "INVALID", synonym: "Out of date", meaning: "No longer legally or officially acceptable", year: "2007" },
  { word: "IRREDEEMABLY", synonym: "Incurably", meaning: "In a way that cannot be corrected or improved", year: "2010" },
  { word: "LOOT", synonym: "Give up/stolen goods", meaning: "Goods taken by force or illegally", year: "2018" },
  { word: "LOUT", synonym: "Vagabond", meaning: "An uncouth and aggressive person", year: "?" },
  { word: "MARRED", synonym: "Spoiled/damaged", meaning: "Impaired the quality or appearance of something", year: "2009" },
  { word: "MINIATURIZED", synonym: "Smaller", meaning: "Made into a very small version", year: "2005" },
  { word: "MIMIC", synonym: "Imitate", meaning: "To copy or imitate someone's speech or actions", year: "2005" },
  { word: "MORTALLY", synonym: "Fatally", meaning: "In a way that causes death", year: "2008" },
  { word: "MUNDANE", synonym: "Secular/ordinary", meaning: "Lacking interest or excitement; ordinary", year: "?" },
  { word: "NEGLIGIBLE", synonym: "Insignificant", meaning: "So small as to be not worth considering", year: "2021" },
  { word: "NEGLECTED", synonym: "Ignored", meaning: "Not receiving proper care or attention", year: "2018" },
  { word: "NIGGARDLY", synonym: "Stingy", meaning: "Ungenerous with money or time", year: "2005 🔥" },
  { word: "NUISANCE", synonym: "Problem/bother", meaning: "A person or thing causing inconvenience", year: "2010" },
  { word: "OBSOLETE", synonym: "Out of date", meaning: "No longer produced or used; outmoded", year: "2010 🔥" },
  { word: "OFFHAND", synonym: "Unprepared", meaning: "Without preparation; casually", year: "2010" },
  { word: "OMENS", synonym: "Signs", meaning: "Events regarded as portents of good or evil", year: "2008" },
  { word: "OSTRACIZED", synonym: "Shut off from others", meaning: "Excluded from society or a group", year: "2005" },
  { word: "OUTSPOKEN", synonym: "Frank", meaning: "Direct and unreserved in speech", year: "2005" },
  { word: "PANACEA", synonym: "Cure", meaning: "A solution to all problems", year: "2010" },
  { word: "PARADOXICAL", synonym: "Puzzling", meaning: "Seemingly absurd but actually well-founded", year: "2011" },
  { word: "PERFUNCTORILY", synonym: "Without commitment/carelessly", meaning: "Done routinely with little effort or care", year: "2005 🔥" },
  { word: "PERPLEXED", synonym: "Confused", meaning: "Completely baffled; very puzzled", year: "2011" },
  { word: "PET AVERSION", synonym: "Something one dislikes very much", meaning: "A particular thing one strongly dislikes", year: "2005" },
  { word: "PLAUSIBLE", synonym: "Reasonable", meaning: "Seeming reasonable or probable", year: "2010 🔥" },
  { word: "REBUFFED", synonym: "Snubbed/rejected", meaning: "Rejected in an abrupt or ungracious manner", year: "?" },
  { word: "REPUDIATED", synonym: "Disowned", meaning: "Refused to accept or be associated with", year: "2005 🔥" },
  { word: "RETRENCHMENT", synonym: "Unemployment/redundancy", meaning: "Dismissal of employees to cut costs", year: "2010" },
  { word: "RILED", synonym: "Annoyed", meaning: "Made someone annoyed or irritated", year: "2006" },
  { word: "SECULAR", synonym: "Worldly", meaning: "Not connected with religious matters", year: "2008" },
  { word: "SELDOM", synonym: "Rarely", meaning: "Not often; infrequently", year: "2006" },
  { word: "SEVERANCE", synonym: "Breaking/cutting off", meaning: "The action of ending a connection", year: "2012" },
  { word: "SKINFLINT", synonym: "A niggardly/miserly person", meaning: "A person who spends as little money as possible", year: "2008" },
  { word: "STEALTHILY", synonym: "Quietly/secretly", meaning: "In a cautious and secretive manner", year: "2005" },
  { word: "SUMPTUOUS", synonym: "Expensive/lavish", meaning: "Splendid and expensive-looking", year: "2010" },
  { word: "SUPERSEDES", synonym: "Displaces/replaces", meaning: "Takes the place of something previously used", year: "2011" },
  { word: "SWOT", synonym: "Study very hard", meaning: "To study intensively for an examination", year: "2010" },
  { word: "TACTFUL", synonym: "Discreet", meaning: "Having or showing skill in dealing with sensitive issues", year: "2011" },
  { word: "TARDY", synonym: "Slow/late", meaning: "Delaying or slow; late to act", year: "2010" },
  { word: "TELL-TALE", synonym: "Revealing signs", meaning: "Revealing or betraying something hidden", year: "2005" },
  { word: "TERRESTRIAL", synonym: "Worldly", meaning: "Relating to the earth or land", year: "2009" },
  { word: "TUMULTUOUS", synonym: "Noisy/loud", meaning: "Making an uproar; very loud and unruly", year: "2011" },
  { word: "TURMOIL", synonym: "Crisis/confusion", meaning: "A state of great disturbance and uncertainty", year: "2005 🔥" },
  { word: "UMPTEENTH", synonym: "Last of many times", meaning: "Used to refer to something happening repeatedly", year: "2011" },
  { word: "UNEQUIVOCAL", synonym: "Clear and without doubt", meaning: "Leaving no doubt; unambiguous", year: "2010 🔥" },
  { word: "UNMITIGATED", synonym: "Unqualified/absolute", meaning: "Absolute; not made less severe", year: "2012" },
  { word: "UNWITTINGLY", synonym: "Inadvertently", meaning: "Without being aware; unintentionally", year: "2011" },
  { word: "VERGE", synonym: "Brink", meaning: "The edge or margin of something; about to happen", year: "2005" },
  { word: "VICISSITUDE", synonym: "Change", meaning: "Changes of circumstance in life", year: "?" },
  { word: "VINDICATED", synonym: "Proved/cleared", meaning: "Showed to be right or justified", year: "2010, 2011 🔥" },
  { word: "ZENITH", synonym: "Apex/peak", meaning: "The highest point reached; the peak of success", year: "2008" },
]

const SynonymsVault = ({ onClose, isPaid, onUpgrade }) => {
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
            The complete list of UNIBEN-tested synonyms with meanings is available to paid users only.
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

  const filtered = ALL_SYNONYMS.filter(a =>
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
          UNIBEN Tested Synonyms 📝
        </span>
        <span style={{ fontSize: 12, color: "var(--text3)" }}>{filtered.length}</span>
      </div>

      {/* Search */}
      <div style={{ padding: "12px 16px", borderBottom: "1px solid var(--border)", flexShrink: 0 }}>
        <input
          type="text"
          placeholder="Search word or synonym..."
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
          🔥 HOT = tested multiple times. Tap any word to see full meaning. Remember: INVALUABLE = very useful (NOT worthless)!
        </p>
      </div>

      {/* List */}
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
                background: isHot ? "rgba(102,126,234,0.06)" : "var(--surface)",
                border: `1px solid ${isHot ? "rgba(102,126,234,0.3)" : "var(--border)"}`,
                cursor: "pointer", overflow: "hidden"
              }}
            >
              {/* Row */}
              <div style={{ display: "flex", alignItems: "center", padding: "12px 14px", gap: 10 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                    <span style={{ fontSize: 14, fontWeight: 800, color: "var(--text)" }}>
                      {item.word}
                    </span>
                    {isHot && (
                      <span style={{
                        fontSize: 10, background: "#667eea", color: "#fff",
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

              {/* Expanded */}
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

export default SynonymsVault
