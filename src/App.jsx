import { useState, useRef } from "react"
import Home from "./pages/Home"
import Onboarding from "./pages/Onboarding"
import SubjectSelect from "./pages/SubjectSelect"
import StudyMode from "./pages/StudyMode"
import Quiz from "./pages/Quiz"
import Progress from "./pages/Progress"
import CBTResult from "./pages/CBTResult"
import PostUTMEHome from "./pages/PostUTMEHome"
import HotTopics from "./pages/HotTopics"
import { UNIBEN_FACULTIES } from "./data/postutme/uniben/faculties"

function App() {
  // Load saved onboarding choices
  const savedExamType = localStorage.getItem("ee-examType")
  const savedUniversity = localStorage.getItem("ee-university")
  const savedFaculty = localStorage.getItem("ee-faculty")

  const [profile, setProfile] = useState(
    savedExamType
      ? { examType: savedExamType, university: savedUniversity, faculty: savedFaculty }
      : null
  )

  const [page, setPage] = useState("home")
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [selectedSubject, setSelectedSubject] = useState(null)
  const [selectedSubjects, setSelectedSubjects] = useState([])
  const [selectedStartIndex, setSelectedStartIndex] = useState(0)
  const startIndexRef = useRef(0)

  // Get faculty subjects for post-utme
  const getFacultySubjects = () => {
    if (!profile?.faculty || !profile?.university) return []
    if (profile.university === "UNIBEN") {
      return UNIBEN_FACULTIES[profile.faculty]?.subjects || []
    }
    return []
  }

  const handleNavigate = (newPage, topic = null, subject = null, startFromIndex = 0) => {
    startIndexRef.current = startFromIndex  // set ref immediately, before re-render
    setPage(newPage)
    if (topic !== null) setSelectedTopic(topic)
    if (subject !== null) setSelectedSubject(subject)
    setSelectedStartIndex(startFromIndex)
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
      if (page === "cbtResult") return <CBTResult onNavigate={handleNavigate} />
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
      if (page === "cbtResult") return <CBTResult onNavigate={handleNavigate} />

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

    return <h2>Page not found</h2>
  }

  return <div>{renderPage()}</div>
}

export default App