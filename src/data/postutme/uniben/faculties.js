// UNIBEN Faculty definitions
// Each faculty specifies which subjects appear in Post-UTME

export const UNIBEN_FACULTIES = {
  engineering: {
    name: "Engineering & Physical Sciences",
    icon: "⚙️",
    desc: "Engineering, Physics, Computer Science, Mathematics",
    subjects: ["English", "Mathematics", "Physics", "Chemistry"],
    englishFirst: true,
  },
  lifesciences: {
    name: "Life Sciences & Medicine",
    icon: "🔬",
    desc: "Medicine, Pharmacy, Biochemistry, Biology",
    subjects: ["English", "Chemistry", "Physics", "Biology", "Mathematics"],
    englishFirst: true,
  },
  management: {
    name: "Management & Social Sciences",
    icon: "📊",
    desc: "Economics, Accounting, Business Admin, Sociology, Political Science, Banking & Finance, Geography",
    subjects: ["English", "Mathematics", "Economics", "Government", "Commerce"],
    englishFirst: true,
  },
  arts: {
    name: "Arts, Law & Humanities",
    icon: "🎭",
    desc: "Law, Literature, History, Philosophy, Religious Studies, Accounting",
    subjects: ["English", "Economics", "Government", "Literature"],
    englishFirst: true,
  },
}