import { useState, useMemo } from "react"
import { POST_UTME_UNIVERSITIES } from "../data/postutme/index"
import jambQuestions from "../data/jamb/questions"
import MathText from "../components/MathText"

const SUBJECT_META = {
  "English":     { icon: "📖", color: "#4a90d9", bg: "#f0f7ff" },
  "Mathematics": { icon: "🔢", color: "#48bb78", bg: "#f0fff4" },
  "Physics":     { icon: "⚡", color: "#ed8936", bg: "#fffaf0" },
  "Chemistry":   { icon: "🧪", color: "#9f7aea", bg: "#fdf5ff" },
  "Biology":     { icon: "🌿", color: "#38a169", bg: "#f0fff4" },
  "Government":  { icon: "🏛️", color: "#e53e3e", bg: "#fff5f5" },
  "Economics":   { icon: "📈", color: "#d69e2e", bg: "#fffff0" },
  "Commerce":    { icon: "💼", color: "#3182ce", bg: "#ebf8ff" },
  "Literature":  { icon: "📝", color: "#805ad5", bg: "#faf5ff" },
  "CRK":         { icon: "✝️", color: "#b7791f", bg: "#fffbeb" },
  "Accounts":    { icon: "🧾", color: "#2d3748", bg: "#f7fafc" },
  "Visual Arts": { icon: "🎨", color: "#d53f8c", bg: "#fff5f7" },
  "IRK":         { icon: "☪️", color: "#276749", bg: "#f0fff4" },
}
const DEFAULT_META = { icon: "📖", color: "#667eea", bg: "#f0f4ff" }

// ===== CURATED HOT TOPICS =====
// keywords: matched (lowercase, "contains") against the real topic names in your question bank,
// so the tile opens the right topic in Study Mode even if the spelling differs slightly.
const CURATED_HOT_TOPICS = {
  Biology: [
    {
      title: "Ecology & Diseases", emoji: "🟢", weight: "Extremely High",
      blurb: "The single largest chunk of repeatable questions.",
      items: [
        { topic: "Ecology", keywords: ["ecolog"],
          focus: "Abiotic/biotic interactions, Nigerian biomes (Mangrove Swamp, Guinea & Sahel Savanna), population dynamics, sampling tools (quadrat, Secchi disc, hygrometer), soil properties." },
        { topic: "Disease & Health", keywords: ["disease", "health"],
          focus: "Water-borne vectors (Schistosomiasis, Cholera, Onchocerciasis), viral vs bacterial pathogens." },
      ],
    },
    {
      title: "Genetics & Reproduction", emoji: "🟡", weight: "High",
      blurb: "Mechanical, formula-based concepts examiners love.",
      items: [
        { topic: "Genetics & Heredity", keywords: ["genetic", "heredity"],
          focus: "Monohybrid crosses (3:1), sex-linked traits, sickle-cell inheritance, blood groups, continuous vs discontinuous variation." },
        { topic: "Reproduction", keywords: ["reproduct"],
          focus: "Roles of prolactin, testosterone, progesterone; placenta vs bird/reptile egg yolk." },
      ],
    },
    {
      title: "Plant Biology", emoji: "🔵", weight: "High",
      blurb: "Transport tissues, experiments and plant hormones.",
      items: [
        { topic: "Plant Structure & Growth", keywords: ["plant structure", "plant biology", "plant"],
          focus: "Xylem (water/minerals) vs phloem (food), yam osmometer, potometer and transpiration." },
        { topic: "Growth Coordination", keywords: ["growth coord", "hormone"],
          focus: "Auxins (apical dominance, tropisms) and gibberellins (stem elongation)." },
      ],
    },
    {
      title: "Animal Physiology", emoji: "🟣", weight: "High",
      blurb: "Spread across several topics, so learn them all.",
      items: [
        { topic: "Nutrition", keywords: ["nutrition"],
          focus: "Dental formulas, Biuret and Millon's tests, pancreas as exocrine + endocrine organ." },
        { topic: "Excretion & Homeostasis", keywords: ["excretion", "homeostasis"],
          focus: "Kidney structure, ultrafiltration in Bowman's capsule, deamination in the liver." },
        { topic: "Circulatory System", keywords: ["circulat"],
          focus: "Red blood cells (no nucleus), mammalian double circulation." },
        { topic: "Respiration", keywords: ["respirat"],
          focus: "Yeast fermentation and lime water, mammalian diaphragm." },
        { topic: "Nervous System & Coordination", keywords: ["nervous"],
          focus: "Reflex arcs, cerebellum (balance) and medulla oblongata (involuntary actions)." },
      ],
    },
    {
      title: "Evolution & Diversity", emoji: "🟤", weight: "Medium-High",
      blurb: "Highly repeatable theory questions.",
      items: [
        { topic: "Evolution", keywords: ["evolution"],
          focus: "Simple-to-complex trends, Lamarck vs Darwin, homologous structures like the pentadactyl limb." },
        { topic: "Classification & Diversity", keywords: ["classification", "diversity"],
          focus: "Fern sporophyte dominance, arthropod castes (soldier vs worker termites)." },
      ],
    },
  ],
}

const HotTopics = ({ onNavigate, onBack, university = null, facultySubjects = [] }) => {
  const [selectedSubject, setSelectedSubject] = useState(null)
  const [mode, setMode] = useState(null) // "topics" | "questions"
  const [selectedTopic, setSelectedTopic] = useState(null) // only used in "questions" mode

  // Post-UTME users use their university's questions; everyone else uses the JAMB bank.
  const questionPool = useMemo(() => {
    const uni = university ? POST_UTME_UNIVERSITIES[university] : null
    const source = uni ? (uni.questions || []) : jambQuestions
    const toArray = (x) =>
      Array.isArray(x) ? x.flat(Infinity)
      : (x && typeof x === "object" ? Object.values(x).flat(Infinity) : [])
    return toArray(source).flatMap(q => {
      if (q && q.passage && q.questions) {
        return q.questions.map(inner => ({ ...inner, passage: q.passage }))
      }
      return q ? [q] : []
    })
  }, [university])

  const canon = (name) => {
    const n = String(name || "").toLowerCase().replace(/[^a-z]/g, "")
    if (n.includes("english")) return "english"
    if (n.startsWith("math")) return "mathematics"
    if (n === "crk" || n === "crs" || n.includes("christianreligious")) return "crk"
    if (n === "irk" || n === "irs" || n.includes("islamicreligious")) return "irk"
    return n
  }

  const subjectList = useMemo(() => {
    const poolSubjects = [...new Set(questionPool.map(q => q.subject).filter(Boolean))]
    if (!facultySubjects || facultySubjects.length === 0) return poolSubjects
    const matched = facultySubjects
      .map(fs => poolSubjects.find(ps => canon(ps) === canon(fs)))
      .filter(Boolean)
    return matched.length > 0 ? [...new Set(matched)] : poolSubjects
  }, [facultySubjects, questionPool])

  // Auto-detected hot topics (2+ questions)
  const getHotTopics = (subject) => {
    const counts = {}
    questionPool.forEach(q => {
      if (q.subject === subject && q.topic) counts[q.topic] = (counts[q.topic] || 0) + 1
    })
    return Object.entries(counts)
      .filter(([_, c]) => c >= 2)
      .sort((a, b) => b[1] - a[1])
      .map(([topic, count]) => ({ topic, count }))
  }

  const getTopicQuestions = (subject, topic) =>
    questionPool.filter(q => q.subject === subject && q.topic === topic)

  // Curated groups for a subject, with each item matched to a real topic in the question bank
  const getCuratedGroups = (subject) => {
    const groups = CURATED_HOT_TOPICS[subject]
    if (!groups) return null
    const poolTopics = [...new Set(
      questionPool.filter(q => q.subject === subject && q.topic).map(q => q.topic)
    )]
    return groups.map(g => ({
      ...g,
      items: g.items.map(item => {
        const real = poolTopics.find(t =>
          item.keywords.some(k => t.toLowerCase().includes(k))
        )
        return {
          ...item,
          realTopic: real || item.topic,
          count: real ? getTopicQuestions(subject, real).length : 0,
        }
      }),
    }))
  }

  const subjectStats = subjectList
    .map(subject => {
      const hot = getHotTopics(subject)
      return {
        subject,
        hotTopicsCount: CURATED_HOT_TOPICS[subject]
          ? CURATED_HOT_TOPICS[subject].reduce((n, g) => n + g.items.length, 0)
          : hot.length,
        totalHotQ: hot.reduce((s, t) => s + t.count, 0),
      }
    })
    .filter(s => s.hotTopicsCount > 0)

  const handleBack = () => {
    if (selectedTopic) setSelectedTopic(null)
    else if (mode) setMode(null)
    else if (selectedSubject) setSelectedSubject(null)
    else onBack ? onBack() : onNavigate("home")
  }

  const Header = ({ title }) => (
    <header className="ee-header">
      <button className="ee-back-btn" onClick={handleBack}>← Back</button>
      <span style={{ fontWeight: 800, fontSize: 15 }}>{title}</span>
      <span style={{ width: 60 }} />
    </header>
  )

  const SubjectBanner = ({ subject, line }) => {
    const meta = SUBJECT_META[subject] || DEFAULT_META
    return (
      <div style={{
        background: `linear-gradient(135deg, ${meta.color}, ${meta.color}99)`,
        borderRadius: "var(--radius-xl)", padding: "16px 20px",
        marginBottom: 20, color: "#fff"
      }}>
        <div style={{ fontSize: 28, marginBottom: 6 }}>{meta.icon}</div>
        <div style={{ fontSize: 18, fontWeight: 800 }}>{subject}</div>
        <div style={{ fontSize: 12, opacity: 0.85, marginTop: 4 }}>{line}</div>
      </div>
    )
  }

  // ===== SCREEN 4 (Questions mode): questions under a topic =====
  if (selectedSubject && mode === "questions" && selectedTopic) {
    const questions = getTopicQuestions(selectedSubject, selectedTopic)
    const meta = SUBJECT_META[selectedSubject] || DEFAULT_META
    return (
      <div className="ee-page">
        <Header title={`🔥 ${selectedTopic}`} />
        <div className="ee-content">
          <div style={{
            background: `linear-gradient(135deg, ${meta.color}, ${meta.color}99)`,
            borderRadius: "var(--radius-xl)", padding: "16px 20px",
            marginBottom: 20, color: "#fff"
          }}>
            <div style={{ fontSize: 13, opacity: 0.9, marginBottom: 4 }}>{selectedSubject} · Hot Topic</div>
            <div style={{ fontSize: 18, fontWeight: 800 }}>{selectedTopic}</div>
            <div style={{ fontSize: 12, opacity: 0.85, marginTop: 4 }}>
              🔥 {questions.length} repeated questions
            </div>
          </div>

          <p style={{ fontSize: 13, color: "var(--text2)", marginBottom: 16, lineHeight: 1.6 }}>
            These questions have appeared in multiple past exams. Master them for maximum marks.
          </p>

          <button
            className="ee-btn ee-btn-primary"
            style={{ marginBottom: 16 }}
            onClick={() => onNavigate("hotTopicsQuiz", null, selectedSubject, null, university, { topic: selectedTopic })}
          >
            Practice These Questions 🚀
          </button>

          {questions.map((q, i) => (
            <div key={i} style={{
              background: "var(--surface)", border: "1px solid var(--border)",
              borderRadius: "var(--radius-md)", padding: "14px 16px", marginBottom: 12
            }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: meta.color, marginBottom: 8 }}>
                Q{i + 1} · {q.year || "Past Exam"}
              </div>

              {q.passage && (
                <div style={{
                  background: "var(--surface2)", borderRadius: "var(--radius-sm)",
                  padding: "10px 12px", marginBottom: 10,
                  borderLeft: `3px solid ${meta.color}`,
                  fontSize: 12, color: "var(--text2)", lineHeight: 1.7
                }}>
                  <div style={{ fontSize: 10, fontWeight: 800, color: meta.color, marginBottom: 4, textTransform: "uppercase" }}>
                    📖 Passage
                  </div>
                  {q.passage}
                </div>
              )}

              <div style={{ fontSize: 13, color: "var(--text)", lineHeight: 1.6, marginBottom: 10, fontWeight: 600 }}>
                <MathText text={q.question} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: q.explanation ? 10 : 0 }}>
                {q.options?.map((opt, j) => (
                  <div key={j} style={{
                    fontSize: 12, padding: "8px 12px",
                    borderRadius: "var(--radius-sm)",
                    background: opt === q.answer ? "rgba(34,197,94,0.15)" : "var(--surface2)",
                    border: `1px solid ${opt === q.answer ? "rgba(34,197,94,0.4)" : "var(--border)"}`,
                    color: opt === q.answer ? "#16a34a" : "var(--text2)",
                    fontWeight: opt === q.answer ? 700 : 400,
                    display: "flex", alignItems: "center", gap: 6
                  }}>
                    <span style={{
                      width: 18, height: 18, borderRadius: "50%", flexShrink: 0,
                      background: opt === q.answer ? "#16a34a" : "var(--border)",
                      color: opt === q.answer ? "#fff" : "var(--text3)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 10, fontWeight: 800
                    }}>{["A","B","C","D"][j]}</span>
                    <MathText text={opt} />
                    {opt === q.answer && <span style={{ marginLeft: "auto" }}>✓</span>}
                  </div>
                ))}
              </div>

              {q.explanation && (
                <div style={{
                  background: "rgba(102,126,234,0.08)", borderRadius: "var(--radius-sm)",
                  padding: "10px 12px", marginTop: 8, borderLeft: "3px solid var(--primary)"
                }}>
                  <div style={{ fontSize: 10, fontWeight: 800, color: "var(--primary)", marginBottom: 4, textTransform: "uppercase" }}>
                    💡 Why this answer is correct
                  </div>
                  <div style={{ fontSize: 12, color: "var(--text)", lineHeight: 1.7 }}>
                    <MathText text={q.explanation} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    )
  }

  // ===== SCREEN 3b (Questions mode): topic list =====
  if (selectedSubject && mode === "questions") {
    const hotTopics = getHotTopics(selectedSubject)
    const meta = SUBJECT_META[selectedSubject] || DEFAULT_META
    return (
      <div className="ee-page">
        <Header title="🔥 Hot Questions" />
        <div className="ee-content">
          <SubjectBanner subject={selectedSubject} line={`${hotTopics.length} topics with repeated questions`} />
          <h3 style={{ fontSize: 14, fontWeight: 800, color: "var(--text)", marginBottom: 12 }}>Pick a Topic</h3>

          {hotTopics.length === 0 && (
            <div className="ee-empty">
              <span className="ee-empty-icon">📭</span>
              <p>No repeated questions found for {selectedSubject} yet.</p>
            </div>
          )}

          {hotTopics.map(({ topic, count }, i) => (
            <button
              key={i}
              onClick={() => setSelectedTopic(topic)}
              style={{
                width: "100%", display: "flex", alignItems: "center",
                justifyContent: "space-between", padding: "14px 16px",
                borderRadius: "var(--radius-md)", marginBottom: 8,
                background: meta.bg, border: `1.5px solid ${meta.color}40`,
                cursor: "pointer", fontFamily: "var(--font-main)", textAlign: "left"
              }}
            >
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)" }}>{topic}</div>
                <div style={{ fontSize: 11, color: "var(--text2)", marginTop: 2 }}>
                  Appeared {count} times in past exams
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{
                  fontSize: 11, fontWeight: 800, padding: "3px 10px", borderRadius: 20,
                  background: count >= 10 ? "#ff6b35" : count >= 5 ? "#ed8936" : meta.color,
                  color: "#fff"
                }}>🔥 {count}</span>
                <span style={{ color: "var(--text3)" }}>→</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    )
  }

  // ===== SCREEN 3a (Topics mode): curated topics → Study Mode =====
  if (selectedSubject && mode === "topics") {
    const meta = SUBJECT_META[selectedSubject] || DEFAULT_META
    const groups = getCuratedGroups(selectedSubject)

    // Subjects with no curated list: fall back to auto-detected hot topics
    const fallback = !groups
      ? [{
          title: "Most Repeated Topics", emoji: "🔥", weight: "", blurb: "",
          items: getHotTopics(selectedSubject).map(({ topic, count }) => ({
            topic, realTopic: topic, count, focus: `Appeared ${count} times in past exams`,
          })),
        }]
      : null

    const list = groups || fallback
    const total = list.reduce((n, g) => n + g.items.length, 0)

    return (
      <div className="ee-page">
        <Header title="🔥 Hot Topics" />
        <div className="ee-content">
          <SubjectBanner subject={selectedSubject} line={`${total} hot topics · Tap one to study it`} />

          {list.map((group, gi) => (
            <div key={gi} style={{ marginBottom: 22 }}>
              <div style={{ marginBottom: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 16 }}>{group.emoji}</span>
                  <span style={{ fontSize: 14, fontWeight: 800, color: "var(--text)" }}>{group.title}</span>
                  {group.weight && (
                    <span style={{
                      fontSize: 10, fontWeight: 800, padding: "2px 8px", borderRadius: 20,
                      background: `${meta.color}22`, color: meta.color
                    }}>{group.weight}</span>
                  )}
                </div>
                {group.blurb && (
                  <div style={{ fontSize: 12, color: "var(--text2)", marginTop: 4 }}>{group.blurb}</div>
                )}
              </div>

              {group.items.map((item, i) => (
                <button
                  key={i}
                  // Opens this topic in Study Mode (see the StudyMode change)
                  onClick={() => onNavigate("studyTopic", item.realTopic, selectedSubject, null, university)}
                  style={{
                    width: "100%", display: "flex", alignItems: "center",
                    justifyContent: "space-between", gap: 10, padding: "14px 16px",
                    borderRadius: "var(--radius-md)", marginBottom: 8,
                    background: meta.bg, border: `1.5px solid ${meta.color}40`,
                    cursor: "pointer", fontFamily: "var(--font-main)", textAlign: "left"
                  }}
                >
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)" }}>{item.topic}</div>
                    <div style={{ fontSize: 11, color: "var(--text2)", marginTop: 3, lineHeight: 1.5 }}>
                      {item.focus}
                    </div>
                  </div>
                  <span style={{ color: "var(--text3)", flexShrink: 0 }}>📚 →</span>
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    )
  }

  // ===== SCREEN 2: choose Topics or Questions =====
  if (selectedSubject) {
    const meta = SUBJECT_META[selectedSubject] || DEFAULT_META
    const stats = subjectStats.find(s => s.subject === selectedSubject)
    const options = [
      { key: "topics", icon: "📚", title: "Hot Topics",
        sub: `${stats?.hotTopicsCount || 0} topics examiners keep coming back to · opens in Study Mode` },
      { key: "questions", icon: "❓", title: "Hot Questions",
        sub: `${stats?.totalHotQ || 0} repeated questions with answers and explanations` },
    ]
    return (
      <div className="ee-page">
        <Header title="🔥 Hot Topics" />
        <div className="ee-content">
          <SubjectBanner subject={selectedSubject} line="What would you like to do?" />
          {options.map(o => (
            <button
              key={o.key}
              onClick={() => setMode(o.key)}
              style={{
                width: "100%", display: "flex", alignItems: "center",
                justifyContent: "space-between", gap: 12, padding: "18px",
                borderRadius: "var(--radius-md)", marginBottom: 12,
                background: meta.bg, border: `1.5px solid ${meta.color}40`,
                cursor: "pointer", fontFamily: "var(--font-main)", textAlign: "left"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span style={{ fontSize: 28 }}>{o.icon}</span>
                <div>
                  <div style={{ fontWeight: 800, fontSize: 15, color: "var(--text)" }}>{o.title}</div>
                  <div style={{ fontSize: 12, color: "var(--text2)", marginTop: 2, lineHeight: 1.5 }}>{o.sub}</div>
                </div>
              </div>
              <span style={{ color: "var(--text3)", fontSize: 18 }}>→</span>
            </button>
          ))}
        </div>
      </div>
    )
  }

  // ===== SCREEN 1: subject selection =====
  return (
    <div className="ee-page">
      <Header title="🔥 Hot Topics" />
      <div className="ee-content">
        <div style={{
          background: "linear-gradient(135deg, #ff6b35, #f7c59f)",
          borderRadius: "var(--radius-xl)", padding: "20px", marginBottom: 24, color: "#fff"
        }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>🔥</div>
          <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 6 }}>Topics That Repeat Every Year</div>
          <div style={{ fontSize: 13, opacity: 0.9, lineHeight: 1.6 }}>
            These topics keep showing up in past exam papers. Master them and you're already ahead of most candidates.
          </div>
        </div>

        <h3 style={{ fontSize: 14, fontWeight: 800, color: "var(--text)", marginBottom: 12 }}>Pick a Subject</h3>

        {subjectStats.length === 0 && (
          <div className="ee-empty">
            <span className="ee-empty-icon">📭</span>
            <p>No hot topics found yet.</p>
          </div>
        )}

        {subjectStats.map(({ subject, hotTopicsCount }) => {
          const meta = SUBJECT_META[subject] || DEFAULT_META
          return (
            <button
              key={subject}
              onClick={() => setSelectedSubject(subject)}
              style={{
                width: "100%", display: "flex", alignItems: "center",
                justifyContent: "space-between", padding: "16px 18px",
                borderRadius: "var(--radius-md)", marginBottom: 10,
                background: meta.bg, border: `1.5px solid ${meta.color}40`,
                cursor: "pointer", fontFamily: "var(--font-main)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span style={{ fontSize: 28 }}>{meta.icon}</span>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontWeight: 800, fontSize: 15, color: "var(--text)" }}>{subject}</div>
                  <div style={{ fontSize: 12, color: "var(--text2)", marginTop: 2 }}>
                    {hotTopicsCount} hot topics
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{
                  fontSize: 11, fontWeight: 800, padding: "3px 10px",
                  borderRadius: 20, background: meta.color, color: "#fff"
                }}>🔥 {hotTopicsCount}</span>
                <span style={{ color: "var(--text3)", fontSize: 18 }}>→</span>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default HotTopics