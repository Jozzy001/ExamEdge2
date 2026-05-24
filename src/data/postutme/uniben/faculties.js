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
    desc: "Economics, Sociology, Psychology, Business Admin, Banking & Finance",
    subjects: ["English", "Mathematics", "Economics", "Government", "Commerce"],
    englishFirst: true,
  },
  socialsciences: {
    name: "Social Sciences",
    icon: "🏛️",
    desc: "Political Science, Geography, Sociology, Public Administration",
    subjects: ["English", "Mathematics", "Economics", "Government"],
    englishFirst: true,
  },
  arts: {
    name: "Arts & Humanities",
    icon: "🎭",
    desc: "Literature, History, Philosophy, Religious Studies",
    subjects: ["English", "Literature", "Government", "CRK"],
    englishFirst: true,
  },
  law: {
    name: "Law & Management Sciences",
    icon: "⚖️",
    desc: "Law, Accounting, Business Administration, Banking",
    subjects: ["English", "Economics", "Government", "Literature"],
    englishFirst: true,
  },
}
