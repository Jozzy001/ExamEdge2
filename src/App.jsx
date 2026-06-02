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
import Upgrade from "./pages/Upgrade"
import { FullPageLoader, HomeSkeleton, PageTransition } from "./components/LoadingScreen"
import { doc, onSnapshot } from "firebase/firestore"
import { onAuthStateChanged } from "firebase/auth"
import { auth, db } from "./firebase"
import { UNIBEN_FACULTIES } from "./data/postutme/uniben/faculties"
function App() {
  // Load saved onboarding choices — but only use them if authUser confirms them
  const savedExamType = localStorage.getItem("ee-examType")
  const savedUniversity = localStorage.getItem("ee-university")
  const savedFaculty = localStorage.getItem("ee-faculty")

  // Initialize profile from localStorage immediately to avoid flash of onboarding
  const [appLoading, setAppLoading] = useState(true)
  const [profile, setProfile] = useState(
    savedExamType && savedFaculty
      ? { examType: savedExamType, university: savedUniversity || "UNIBEN", faculty: savedFaculty }
      : null
  )
  const [page, setPage] = useState("home")
  const [pageHistory, setPageHistory] = useState([])
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [selectedSubject, setSelectedSubject] = useState(null)
  const [selectedSubjects, setSelectedSubjects] = useState([])
  const [selectedStartIndex, setSelectedStartIndex] = useState(0)
  const [reviewRecord, setReviewRecord] = useState(null)
  const [authUser, setAuthUser] = useState(null)
  const [userData, setUserData] = useState(null)
  const startIndexRef = useRef(0)

  // Listen to auth state — handle logout cleanly
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (!user) {
        setAuthUser(null)
        setUserData(null)
        setPage("home")
        setPageHistory([])
      }
      // Auth has resolved — hide loading screen
      setAppLoading(false)
    })
    return () => unsub()
  }, [])

  // Listen to userData realtime so isPaid updates immediately after payment
  useEffect(() => {
    if (!authUser?.uid) return
    const unsub = onSnapshot(doc(db, "users", authUser.uid), (snap) => {
      if (snap.exists()) setUserData(snap.data())
    })
    return () => unsub()
  }, [authUser?.uid])

  // Show loading screen while Firebase auth resolves
  if (appLoading) return <FullPageLoader message="Starting ExamEdgeNG..." />

  // Show Auth screen first if not logged in
  if (!authUser) {
    return <Auth onGoToUpgrade={() => setPage("upgrade")} onAuthDone={(user) => {
      setAuthUser(user)
      setUserData(user)
      // Restore profile — check Firestore first, then localStorage
      const examT = user.examType || localStorage.getItem("ee-examType")
      const fac   = user.faculty   || localStorage.getItem("ee-faculty")
      const uni   = user.university || localStorage.getItem("ee-university") || "UNIBEN"

      if (examT && fac) {
        // Save to localStorage to keep it fresh
        localStorage.setItem("ee-examType", examT)
        localStorage.setItem("ee-university", uni)
        localStorage.setItem("ee-faculty", fac)
        setProfile({ examType: examT, university: uni, faculty: fac })
      }
      // If nothing found anywhere, profile stays as-is (may already be set from useState init)
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

  // Pages that should NOT be pushed to history (no back needed)
  const NO_HISTORY_PAGES = ["home", "auth", "onboarding"]

  const handleNavigate = (newPage, topic = null, subject = null, subjectsOrIndex = null, uni = null) => {
    startIndexRef.current = typeof subjectsOrIndex === "number" ? subjectsOrIndex : 0
    // Push current page to history before navigating
    if (!NO_HISTORY_PAGES.includes(page)) {
      setPageHistory(prev => [...prev, page])
    }
    setPage(newPage)
    if (topic !== null) setSelectedTopic(topic)
    if (subject !== null) setSelectedSubject(subject)
    if (Array.isArray(subjectsOrIndex)) setSelectedSubjects(subjectsOrIndex)
    setSelectedStartIndex(typeof subjectsOrIndex === "number" ? subjectsOrIndex : 0)
  }

  const handleBack = () => {
    if (pageHistory.length === 0) {
      setPage("home")
      return
    }
    const prev = pageHistory[pageHistory.length - 1]
    setPageHistory(h => h.slice(0, -1))
    setPage(prev)
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
    return <Onboarding onDone={handleOnboardingDone} authUser={authUser} />
  }

  const { examType, university, faculty } = profile
  const facultySubjects = getFacultySubjects()

  const renderPage = () => {
    // ===================== JAMB =====================
    if (examType === "jamb") {
      if (page === "home") return <Home onNavigate={handleNavigate} onReset={resetOnboarding} />
      if (page === "subjectSelect") return <SubjectSelect onNavigate={handleNavigate} onBack={handleBack} mode="study" examType="jamb" />
      if (page === "cbtSubjectSelect") return <SubjectSelect onNavigate={handleNavigate} onBack={handleBack} mode="cbt" examType="jamb" />
      if (page === "study") return <StudyMode subject={selectedSubject} onNavigate={handleNavigate} onBack={handleBack} />
      if (page === "quiz") return <Quiz topic={selectedTopic} subject={selectedSubject} onNavigate={handleNavigate} onBack={handleBack} examType="jamb" startFromIndex={startIndexRef.current} />
      if (page === "progress") return <Progress onNavigate={handleNavigate} onBack={handleBack} />
      if (page === "weak") return <Quiz topic="weak" onNavigate={handleNavigate} onBack={handleBack} examType="jamb" />
      if (page === "cbt") return <Quiz topic="cbt" subjects={selectedSubjects} onNavigate={handleNavigate} onBack={handleBack} examType="jamb" />
      if (page === "cbtHistory") return (
        <CBTHistory
          onNavigate={handleNavigate}
          onBack={handleBack}
          onReview={(record) => { setReviewRecord(record); handleNavigate("cbtResult") }}
        />
      )
      if (page === "cbtResult") return <CBTResult onNavigate={handleNavigate} onBack={handleBack} record={reviewRecord} />
    }

    // ===================== POST-UTME =====================
    if (examType === "postutme") {
      if (page === "home") return (
        <PostUTMEHome
          onNavigate={handleNavigate}
          onBack={handleBack}
          onReset={resetOnboarding}
          university={university}
          faculty={faculty}
          facultySubjects={facultySubjects}
          authUser={authUser}
          isPaid={userData?.isPaid}
          userData={userData}
        />
      )
      if (page === "subjectSelect") return (
        <SubjectSelect
          onNavigate={handleNavigate}
          onBack={handleBack}
          mode="study"
          examType="postutme"
          university={university}
          allowedSubjects={facultySubjects}
        />
      )
      if (page === "cbtSubjectSelect") return (
        <SubjectSelect
          onNavigate={handleNavigate}
          onBack={handleBack}
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
          onBack={handleBack}
          university={university}
        />
      )
      if (page === "quiz") return (
        <Quiz
          topic={selectedTopic}
          subject={selectedSubject}
          onNavigate={handleNavigate}
          onBack={handleBack}
          examType="postutme"
          university={university}
          startFromIndex={startIndexRef.current}
          isPaid={userData?.isPaid}
        />
      )
      if (page === "progress") return <Progress onNavigate={handleNavigate} onBack={handleBack} />
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
          onBack={handleBack}
          onReview={(record) => { setReviewRecord(record); handleNavigate("cbtResult") }}
        />
      )
      if (page === "cbtResult") return <CBTResult onNavigate={handleNavigate} onBack={handleBack} record={reviewRecord} />

      // ── HOT TOPICS ──
      if (page === "hotTopics") return (
        <HotTopics
          onNavigate={handleNavigate}
          onBack={handleBack}
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

      if (page === "upgrade") return (
        <Upgrade
          user={authUser}
          userData={userData}
          onSuccess={() => { setPageHistory([]); setPage("home") }}
          onBack={handleBack}
        />
      )

      if (page === "settings") return (
        <Settings
          onNavigate={handleNavigate}
          onBack={handleBack}
          onReset={resetOnboarding}
          authUser={authUser}
          faculty={faculty}
          university={university}
          examType={examType}
          isPaid={userData?.isPaid}
          userData={userData}
        />
      )

      if (page === "admin") return (
        <AdminDashboard
          onNavigate={handleNavigate}
          onBack={handleBack}
          authUser={authUser}
        />
      )

    return <h2>Page not found</h2>
  }

  return <div>{renderPage()}</div>
}

export default App