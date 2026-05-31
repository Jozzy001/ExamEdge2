import { useState, useRef, useEffect } from "react"
import Home from "./pages/Home"
import Onboarding from "./pages/Onboarding"
import Auth from "./pages/Auth"
import SubjectSelect from "./pages/SubjectSelect"
import StudyMode from "./pages/StudyMode"
import Quiz from "./pages/Quiz"
import Progress from "./pages/Progress"
import CBTResult from "./pages/CBTResult"
import CBTHistory from "./pages/CBTHistory.jsx"
import PostUTMEHome from "./pages/PostUTMEHome"
import HotTopics from "./pages/HotTopics"
import Settings from "./pages/Settings"
import AdminDashboard from "./pages/AdminDashboard"
import { UNIBEN_FACULTIES } from "./data/postutme/uniben/faculties"
function App() {
  // Load saved onboarding choices — but only use them if authUser confirms them
  const savedExamType = localStorage.getItem("ee-examType")
  const savedUniversity = localStorage.getItem("ee-university")
  const savedFaculty = localStorage.getItem("ee-faculty")

  const [profile, setProfile] = useState(null)
  const [page, setPage] = useState("home")
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [selectedSubject, setSelectedSubject] = useState(null)
  const [selectedSubjects, setSelectedSubjects] = useState([])
  const [selectedStartIndex, setSelectedStartIndex] = useState(0)
  const [reviewRecord, setReviewRecord] = useState(null)
  const [authUser, setAuthUser] = useState(null)
  const startIndexRef = useRef(0)

  // Show Auth screen first if not logged in
  if (!authUser) {
    return <Auth onAuthDone={(user) => {
      setAuthUser(user)
      // Use faculty from Firestore if available, otherwise show onboarding
      if (user.faculty && user.examType) {
        localStorage.setItem("ee-examType", user.examType)
        localStorage.setItem("ee-university", user.university || "UNIBEN")
        localStorage.setItem("ee-faculty", user.faculty)
        setProfile({ examType: user.examType, university: user.university || "UNIBEN", faculty: user.faculty })
      }
      // If no faculty in Firestore, profile stays null → shows onboarding
    }} />
  }

  // Get faculty subjects for post-utme
  const getFacultySubjects = () => {
    if (!profile?.faculty || !profile?.university) return []
    if (profile.university === "UNIBEN") {
      return UNIBEN_FACULTIES[profile.faculty]?.subjects || []
    }
    return []
  }

  const handleNavigate = (newPage, topic = null, subject = null, subjectsOrIndex = null, uni = null) => {
    startIndexRef.current = typeof subjectsOrIndex === "number" ? subjectsOrIndex : 0
    setPage(newPage)
    if (topic !== null) setSelectedTopic(topic)
    if (subject !== null) setSelectedSubject(subject)
    if (Array.isArray(subjectsOrIndex)) setSelectedSubjects(subjectsOrIndex)
    setSelectedStartIndex(typeof subjectsOrIndex === "number" ? subjectsOrIndex : 0)
  }

  const handleOnboardingDone = (data) => {
    setProfile(data)
    setPage("home")
  }

  const resetOnboarding = () => {
    localStorage.removeItem("ee-examType")
    localStorage.removeItem("ee-university")
    localStorage.removeItem("ee-faculty")
    setProfile(null)
  }

  // Show onboarding if no profile yet
  if (!profile) {
    return <Onboarding onDone={handleOnboardingDone} />
  }

  const { examType, university, faculty } = profile
  const facultySubjects = getFacultySubjects()

  const renderPage = () => {
    // ===================== JAMB =====================
    if (examType === "jamb") {
      if (page === "home") return <Home onNavigate={handleNavigate} onReset={resetOnboarding} />
      if (page === "subjectSelect") return <SubjectSelect onNavigate={handleNavigate} mode="study" examType="jamb" />
      if (page === "cbtSubjectSelect") return <SubjectSelect onNavigate={handleNavigate} mode="cbt" examType="jamb" />
      if (page === "study") return <StudyMode subject={selectedSubject} onNavigate={handleNavigate} />
      if (page === "quiz") return <Quiz topic={selectedTopic} subject={selectedSubject} onNavigate={handleNavigate} examType="jamb" startFromIndex={startIndexRef.current} />
      if (page === "progress") return <Progress onNavigate={handleNavigate} />
      if (page === "weak") return <Quiz topic="weak" onNavigate={handleNavigate} examType="jamb" />
      if (page === "cbt") return <Quiz topic="cbt" subjects={selectedSubjects} onNavigate={handleNavigate} examType="jamb" />
      if (page === "cbtHistory") return (
        <CBTHistory
          onNavigate={handleNavigate}
          onReview={(record) => { setReviewRecord(record); handleNavigate("cbtResult") }}
        />
      )
      if (page === "cbtResult") return <CBTResult onNavigate={handleNavigate} record={reviewRecord} />
    }

    // ===================== POST-UTME =====================
    if (examType === "postutme") {
      if (page === "home") return (
        <PostUTMEHome
          onNavigate={handleNavigate}
          onReset={resetOnboarding}
          university={university}
          faculty={faculty}
          facultySubjects={facultySubjects}
          authUser={authUser}
        />
      )
      if (page === "subjectSelect") return (
        <SubjectSelect
          onNavigate={handleNavigate}
          mode="study"
          examType="postutme"
          university={university}
          allowedSubjects={facultySubjects}
        />
      )
      if (page === "cbtSubjectSelect") return (
        <SubjectSelect
          onNavigate={handleNavigate}
          mode="cbt"
          examType="postutme"
          university={university}
          allowedSubjects={facultySubjects}
        />
      )
      if (page === "study") return (
        <StudyMode
          subject={selectedSubject}
          onNavigate={handleNavigate}
          university={university}
        />
      )
      if (page === "quiz") return (
        <Quiz
          topic={selectedTopic}
          subject={selectedSubject}
          onNavigate={handleNavigate}
          examType="postutme"
          university={university}
          startFromIndex={startIndexRef.current}
        />
      )
      if (page === "progress") return <Progress onNavigate={handleNavigate} />
      if (page === "weak") return (
        <Quiz
          topic="weak"
          onNavigate={handleNavigate}
          examType="postutme"
          university={university}
        />
      )
      if (page === "cbt") return (
        <Quiz
          topic="cbt"
          subjects={selectedSubjects}
          onNavigate={handleNavigate}
          examType="postutme"
          university={university}
          englishFirst={true}
        />
      )
      if (page === "cbtHistory") return (
        <CBTHistory
          onNavigate={handleNavigate}
          onReview={(record) => { setReviewRecord(record); handleNavigate("cbtResult") }}
        />
      )
      if (page === "cbtResult") return <CBTResult onNavigate={handleNavigate} record={reviewRecord} />

      // ── HOT TOPICS ──
      if (page === "hotTopics") return (
        <HotTopics
          onNavigate={handleNavigate}
          university={university}
          facultySubjects={facultySubjects}
        />
      )
      if (page === "hotTopicsQuiz") return (
        <Quiz
          topic="hotTopics"
          subject={selectedSubject}
          onNavigate={handleNavigate}
          examType="postutme"
          university={university}
        />
      )
    }

      if (page === "settings") return (
        <Settings
          onNavigate={handleNavigate}
          onReset={resetOnboarding}
          authUser={authUser}
          faculty={faculty}
          university={university}
        />
      )

      if (page === "admin") return (
        <AdminDashboard
          onNavigate={handleNavigate}
          authUser={authUser}
        />
      )

    return <h2>Page not found</h2>
  }

  return <div>{renderPage()}</div>
}

export default App