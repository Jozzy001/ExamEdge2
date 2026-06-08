import { useState } from "react"

const ALL_IDIOMS = [
  { idiom: "A BALL OF FIRE", meaning: "A very energetic and enthusiastic person", example: "Surely, Ahmed is a ball of fire.", year: "2011" },
  { idiom: "A BULL IN A CHINA SHOP", meaning: "A careful person who is rough and clumsy in delicate situations", example: "Macedo is a bull in a china shop.", year: "2008" },
  { idiom: "A DARK HORSE", meaning: "A person about whom little is known; an unexpected competitor", example: "She will be competitive with a dark horse.", year: "2011" },
  { idiom: "A FINGER IN EVERY PIE", meaning: "Involved in too many activities at the same time", example: "The problem with Fatai is that he has a finger in every pie.", year: "2009, 2010 🔥" },
  { idiom: "A LONG ROPE", meaning: "A great amount of freedom given to someone", example: "The rich often give their children a long rope.", year: "2009" },
  { idiom: "A NIGHT OUT", meaning: "An evening of fun and enjoyment", example: "I had a night out with Dixon.", year: "2010" },
  { idiom: "A PYRRHIC VICTORY", meaning: "A victory won at such high cost that it is almost equivalent to defeat", example: "At last, Kikuyu gained a Pyrrhic victory.", year: "2007" },
  { idiom: "A ROUGH DIAMOND", meaning: "A person of great worth and ability despite an unpolished exterior", example: "People realized he was a rough diamond.", year: "2008" },
  { idiom: "A RUNNING BATTLE", meaning: "A series of ongoing arguments or disputes", example: "The proprietor and his accountant have had a running battle.", year: "2021" },
  { idiom: "A SHOT IN THE DARK", meaning: "A wild guess with little chance of being correct", example: "It would be a shot in the dark if the conservative party wins.", year: "?" },
  { idiom: "ACHILLES' HEEL", meaning: "A weak point that makes someone vulnerable despite overall strength", example: "Taxation has become the Achilles' heel of the Governor.", year: "2010" },
  { idiom: "ALL HIS GRAIN GOES TO HIS MILL", meaning: "He uses everything profitably; wastes nothing", example: "The businessman is so resourceful that all his grain goes to his mill.", year: "2008" },
  { idiom: "ANGLING FOR", meaning: "Indirectly or cleverly trying to get something", example: "Our Governor is angling for a second term.", year: "2009, 2010 🔥" },
  { idiom: "AT THE BOTTOM OF", meaning: "The real originator or instigator of something", example: "Mr. Ajayi is at the bottom of the move to impeach the Chairman.", year: "2009" },
  { idiom: "BEAT ABOUT THE BUSH", meaning: "To avoid talking about the main point or issue", example: "When asked to state her case, she began to beat about the bush.", year: "2009" },
  { idiom: "BITE OFF MORE THAN ONE CAN CHEW", meaning: "To take on more responsibility than one can manage", example: "Many young workers bite off more than they can chew.", year: "2005" },
  { idiom: "BRING DOWN THE HOUSE", meaning: "To win very great applause from an audience", example: "The famous dancer brought down the house with her performance.", year: "2008" },
  { idiom: "BROUGHT TO BOOK", meaning: "Made to answer for one's conduct or wrongdoing", example: "The culprits should be brought to book.", year: "2005" },
  { idiom: "BURNING THE MIDNIGHT OIL", meaning: "Working or studying very late into the night", example: "Burning the midnight oil is not a prerequisite for success.", year: "2014" },
  { idiom: "BURNT OUT", meaning: "Completely exhausted from too much work or activity", example: "After the activities of the day, I was completely burnt out.", year: "2010" },
  { idiom: "CAME TO GRIEF", meaning: "Met with disaster or failure; came to a bad end", example: "The armed robbers came to grief in a shoot-out.", year: "2005" },
  { idiom: "CARRY COALS TO NEWCASTLE", meaning: "To take something to a place where it already exists in abundance", example: "To carry coals to Newcastle means to take things where they already abound.", year: "2006 🔥" },
  { idiom: "CLOSE IN ON", meaning: "Moving nearer to capture or arrest someone", example: "The police have closed in on the armed robbers.", year: "2010" },
  { idiom: "COOK THE BOOKS", meaning: "To falsify financial figures or records dishonestly", example: "The teacher said it was bad to cook the books.", year: "2009 🔥" },
  { idiom: "COOLED OFF", meaning: "Became calmer or less anxious about something", example: "After the results, Halima cooled off.", year: "2010" },
  { idiom: "CROSS THE RUBICON", meaning: "To take an irreversible decision; to pass the point of no return", example: "The University has crossed the Rubicon on this issue.", year: "2010" },
  { idiom: "CUT CORNERS", meaning: "To do things improperly in order to save time or money", example: "The jet age encourages people to cut corners.", year: "2011" },
  { idiom: "DIE-HARD", meaning: "A person who stubbornly refuses to change their habits or views", example: "Joseph is a die-hard criminal.", year: "2005" },
  { idiom: "DOWN AT HEEL", meaning: "In a poor or badly dressed condition", example: "The chief used to dress expensively but is very down at heel now.", year: "?" },
  { idiom: "DOWN MEMORY LANE", meaning: "Recalling and reflecting on past events and memories", example: "The speaker took his audience down memory lane.", year: "2018" },
  { idiom: "DYED-IN-THE-WOOL", meaning: "Having very strong, fixed opinions that will not change", example: "Dr. Amadasun is a dyed-in-the-wool academic.", year: "2010" },
  { idiom: "FEATHER ONE'S OWN NEST", meaning: "To make oneself rich, especially by dishonest means", example: "The cashier decided to feather his own nest by altering the records.", year: "?" },
  { idiom: "FELL THROUGH", meaning: "Failed to happen or be completed as planned", example: "His plans fell through.", year: "2019" },
  { idiom: "FIGHTING SHY OF", meaning: "Deliberately trying to avoid something or someone", example: "Mr. John is fighting shy of me.", year: "?" },
  { idiom: "FIRE ON ALL CYLINDERS", meaning: "To work with maximum effort and energy", example: "The labourers decided to fire on all cylinders to meet the deadline.", year: "2009" },
  { idiom: "FLY IN THE OINTMENT", meaning: "The one troublesome or spoiling element among otherwise good things", example: "Okili was the fly in the ointment in the family.", year: "2007" },
  { idiom: "GAMBLED ABOUT", meaning: "Wasted time doing nothing useful", example: "My friend gambled about all day yesterday.", year: "2007" },
  { idiom: "GIVE SOMEBODY THE BIRD", meaning: "To scorn or show contempt for someone", example: "To give somebody the bird is to scorn the person.", year: "2008" },
  { idiom: "GO BACK ON ONE'S WORDS", meaning: "To fail to keep a promise; to break one's word", example: "I assured him I would not go back on my words.", year: "2014, 2018 🔥" },
  { idiom: "GO THROUGH FIRE", meaning: "To endure very tough or difficult times", example: "He went through fire before he qualified as a doctor.", year: "2005" },
  { idiom: "HAD HIS HANDS TIED", meaning: "Unable to act freely due to circumstances or rules", example: "The judge had his hands tied in the case involving his son.", year: "2009" },
  { idiom: "HAND IN GLOVE", meaning: "Working closely together, often for illegal or dishonest purposes", example: "James and Jude are hand in glove in this Association.", year: "2010" },
  { idiom: "HAT-TRICK", meaning: "Three successive achievements of the same kind, especially three goals", example: "Osaze scored a brilliant hat-trick in the final match.", year: "2009 🔥" },
  { idiom: "HAVE HIS EYE TO THE MAIN CHANCE", meaning: "Always looking for an opportunity to make money or gain advantage", example: "David has his eye to the main chance.", year: "2008" },
  { idiom: "HOLD A CANDLE TO", meaning: "To be as good or skilled as someone else (usually in negative form)", example: "Not many employees could hold a candle to him.", year: "?" },
  { idiom: "IN DEBT / IN THE RED", meaning: "Having spent more money than one has; owing money", example: "They closed down the company once it was in the red.", year: "2014" },
  { idiom: "IN DISUNITY / AT CROSS PURPOSES", meaning: "Working against each other due to misunderstanding", example: "Members of the panel were working at cross purposes.", year: "2005" },
  { idiom: "IN THE FIRST FLIGHT", meaning: "Among the very best in a particular field", example: "He was in the first flight of footballers.", year: "2009 🔥" },
  { idiom: "KILL THE GOOSE THAT LAID THE GOLDEN EGG", meaning: "To destroy something valuable for short-term gain", example: "He killed the goose that laid the golden eggs when he spent his capital.", year: "2007, 2021 🔥" },
  { idiom: "KNEE-JERK", meaning: "An automatic, unthinking reaction or response", example: "They accused the government of knee-jerk responses.", year: "2010" },
  { idiom: "LAUGHED UP MY SLEEVE", meaning: "Secretly amused without showing it openly", example: "I laughed up my sleeve as he told tales of his exploits.", year: "2007, 2021 🔥" },
  { idiom: "LEFT IN THE LURCH", meaning: "Abandoned or deserted in a difficult situation", example: "A friend will hate his uncle forever because he left him in the lurch.", year: "2005, 2006 🔥" },
  { idiom: "LISTENED IN", meaning: "To listen secretly to a conversation not meant for you", example: "I listened in as the lecturer discussed my matter with the dean.", year: "2010" },
  { idiom: "LOOK OUT FOR", meaning: "To watch for or keep an eye open for someone or something", example: "I promised to look out for her next time she is in town.", year: "2018" },
  { idiom: "MAN FRIDAY", meaning: "A devoted and hardworking all-purpose servant or assistant", example: "The head of department uses Mr. Obi as his man Friday.", year: "2009" },
  { idiom: "ON THE EDGE OF MY SEAT", meaning: "Fully attentive and excited; eagerly watching", example: "The lecturer had me on the edge of my seat.", year: "2010" },
  { idiom: "PAID THROUGH THE NOSE", meaning: "Paid an extremely high or exorbitant price for something", example: "Jude paid through his nose for his new car.", year: "2014" },
  { idiom: "POLITICAL MINEFIELD", meaning: "A situation full of hidden dangers and potential political problems", example: "A political minefield will prove an invitation to political problems.", year: "2005" },
  { idiom: "PROOF OF THE PUDDING IS IN THE EATING", meaning: "Only a person with experience truly understands what something entails", example: "No one understands better than a man who participates in a project.", year: "2008" },
  { idiom: "PUT HIS PRIDE IN HIS POCKET", meaning: "To behave humbly and simply; to suppress one's pride", example: "We advised the boy to put his pride in his pocket at the village meeting.", year: "2006" },
  { idiom: "PUT OUT OF ONE'S JOB", meaning: "To be dismissed or sacked from employment", example: "Moses has been put out of his job by his employers.", year: "2010" },
  { idiom: "RESIGNED MYSELF TO IT", meaning: "To accept a situation passively; prepared for whatever happens", example: "Regarding admission into UNIBEN, I resigned myself to it.", year: "2010" },
  { idiom: "ROLLING IN MONEY", meaning: "Became very rich or wealthy", example: "After years of struggle as a trader, he began rolling in money.", year: "2011" },
  { idiom: "SELL SNOW TO THE ESKIMOS", meaning: "To be an extremely skilled and convincing salesperson", example: "Jide is something else! He can sell snow to the Eskimos.", year: "2009" },
  { idiom: "SEE THE WOOD FOR THE TREES", meaning: "To understand the overall situation clearly (usually in negative form)", example: "The weak students could not see the wood for the trees.", year: "2009" },
  { idiom: "SET LITTLE STORE BY", meaning: "To not value or consider something important", example: "He sets little store by our friendship.", year: "?" },
  { idiom: "SPILL THE BEANS", meaning: "To reveal a secret, often one that causes problems", example: "If he annoys me further, I will spill the beans.", year: "2010" },
  { idiom: "SPLITTING HAIRS", meaning: "Making unnecessary and overly fine distinctions about minor details", example: "You are simply splitting hairs and not making any important point.", year: "?" },
  { idiom: "STEW IN ONE'S OWN JUICE", meaning: "To suffer the consequences of one's own actions", example: "Any student found guilty should be allowed to stew in his own juice.", year: "2011" },
  { idiom: "TAKE FOR GRANTED", meaning: "To assume something will be easy without giving it proper attention", example: "Michael took the English Language examination for granted.", year: "2010 🔥" },
  { idiom: "TAKE THE WIND OUT OF HIS SAILS", meaning: "To suddenly reduce someone's confidence by forestalling their argument", example: "I took the wind out of his sail when I quoted Wilson.", year: "?" },
  { idiom: "TAKEN ABACK", meaning: "Surprised or shocked by something unexpected", example: "I was taken aback by his actions.", year: "2010" },
  { idiom: "TRADE ON", meaning: "To take advantage of someone's kindness or weakness", example: "The sales boys traded on their master's kindness.", year: "2009" },
  { idiom: "TURNED DOWN", meaning: "To refuse or reject an offer, invitation or request", example: "She turned down our invitation to the party.", year: "2010" },
  { idiom: "TURNED THE CORNER", meaning: "Started to recover or improve after a difficult period", example: "The doctor asked whether the patient had turned the corner.", year: "2008" },
  { idiom: "TURN SWORDS INTO PLOUGHSHARES", meaning: "To substitute peace and harmony for hostility and conflict", example: "The communities were advised to turn swords into ploughshares.", year: "2006" },
  { idiom: "TWIST AROUND ONE'S LITTLE FINGER", meaning: "To easily influence or persuade someone to do what you want", example: "Amanda has always been able to twist her father around her little finger.", year: "2010" },
  { idiom: "UNDER A CLOUD", meaning: "Under suspicion; with one's reputation damaged", example: "The permanent secretary left his job under a cloud.", year: "2018" },
  { idiom: "WEARS A LONG FACE", meaning: "Looks unhappy, serious or disappointed", example: "The latter often wears a long face after bitter truth is spoken.", year: "2008" },
  { idiom: "WIPED THE FLOOR WITH", meaning: "Defeated someone completely and easily in a contest", example: "Tendo wiped the floor with Abass recently.", year: "2008" },
  { idiom: "WITH HIS TONGUE IN HIS CHEEK", meaning: "Not expressing one's true feelings; speaking insincerely", example: "He discussed modern philosophy with his tongue in his cheek.", year: "2008" },
]

const IdiomsVault = ({ onClose, isPaid, onUpgrade }) => {
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
            The complete list of UNIBEN-tested idioms with meanings and examples is available to paid users only.
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

  const filtered = ALL_IDIOMS.filter(a =>
    !search ||
    a.idiom.toLowerCase().includes(search.toLowerCase()) ||
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
          UNIBEN Tested Idioms 💬
        </span>
        <span style={{ fontSize: 12, color: "var(--text3)" }}>{filtered.length}</span>
      </div>

      {/* Search */}
      <div style={{ padding: "12px 16px", borderBottom: "1px solid var(--border)", flexShrink: 0 }}>
        <input
          type="text"
          placeholder="Search idiom or meaning..."
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
          🔥 Words with years are from actual UNIBEN past papers. Tap any idiom to see meaning and example.
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
                background: isHot ? "rgba(245,158,11,0.06)" : "var(--surface)",
                border: `1px solid ${isHot ? "rgba(245,158,11,0.3)" : "var(--border)"}`,
                cursor: "pointer", overflow: "hidden"
              }}
            >
              {/* Row */}
              <div style={{ display: "flex", alignItems: "center", padding: "12px 14px", gap: 10 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                    <span style={{ fontSize: 13, fontWeight: 800, color: "var(--text)" }}>
                      {item.idiom}
                    </span>
                    {isHot && (
                      <span style={{
                        fontSize: 10, background: "#f59e0b", color: "#fff",
                        padding: "1px 6px", borderRadius: 8, fontWeight: 700, flexShrink: 0
                      }}>HOT</span>
                    )}
                  </div>
                  <div style={{ fontSize: 11, color: "var(--text3)", marginTop: 2 }}>
                    {item.year.replace("🔥", "")}
                  </div>
                </div>
                <span style={{ fontSize: 14, color: "var(--text3)", flexShrink: 0 }}>
                  {isOpen ? "▲" : "▼"}
                </span>
              </div>

              {/* Expanded */}
              {isOpen && (
                <div style={{ padding: "0 14px 14px", borderTop: "1px solid var(--border)" }}>
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
                      💡 Example from past paper
                    </div>
                    <div style={{
                      fontSize: 13, color: "var(--text2)", lineHeight: 1.6,
                      fontStyle: "italic",
                      background: "var(--surface2)", padding: "8px 10px",
                      borderRadius: "var(--radius-sm)"
                    }}>
                      "{item.example}"
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

export default IdiomsVault
