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
import Splash from "./pages/Splash"
import WeakAreas from "./pages/WeakAreas"
import { doc, onSnapshot, getDoc } from "firebase/firestore"
import { onAuthStateChanged } from "firebase/auth"
import { auth, db } from "./firebase"
import { UNIBEN_FACULTIES } from "./data/postutme/uniben/faculties"
function App() {
  // Load saved onboarding choices — but only use them if authUser confirms them
  // Version check — clear stale localStorage from old app versions
  const APP_VERSION = "2.0"
  const storedVersion = localStorage.getItem("ee-version")
  if (storedVersion !== APP_VERSION) {
    localStorage.removeItem("ee-examType")
    localStorage.removeItem("ee-university")
    localStorage.removeItem("ee-faculty")
    localStorage.setItem("ee-version", APP_VERSION)
  }

  const savedExamType = localStorage.getItem("ee-examType")
  const savedUniversity = localStorage.getItem("ee-university")
  const savedFaculty = localStorage.getItem("ee-faculty")

  const [appLoading, setAppLoading] = useState(true)
  const [isOnline, setIsOnline] = useState(navigator.onLine)
  const [profile, setProfile] = useState(
    savedExamType && savedUniversity && savedFaculty
      ? { examType: savedExamType, university: savedUniversity, faculty: savedFaculty }
      : null
  )
  const [showSplash, setShowSplash] = useState(!localStorage.getItem("ee-splash-done")) // Always set by onAuthDone from Firestore
  const [page, setPage] = useState("home")
  const [pageHistory, setPageHistory] = useState([])
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [selectedSubject, setSelectedSubject] = useState(null)
  const [selectedSubjects, setSelectedSubjects] = useState([])
  const [cbtCounts, setCbtCounts] = useState(null)
  const [hotTopicTopic, setHotTopicTopic] = useState(null)
  const [selectedStartIndex, setSelectedStartIndex] = useState(0)
  const [reviewRecord, setReviewRecord] = useState(null)
  const [authUser, setAuthUser] = useState(null)
  const [userData, setUserData] = useState(null)
  const [onboardingStartStep, setOnboardingStartStep] = useState(1)
  const startIndexRef = useRef(0)

  // Listen to auth state — handle logout cleanly

  // Recover any pending payments that failed to write to Firestore
  useEffect(() => {
    const pending = localStorage.getItem("ee_pending_payment")
    if (pending && authUser) {
      try {
        const { uid, ref } = JSON.parse(pending)
        if (uid === authUser.uid) {
          updateDoc(doc(db, "users", uid), {
            isPaid: true,
            paymentRef: ref,
            paidAt: new Date().toISOString(),
          }).then(() => {
            localStorage.removeItem("ee_pending_payment")
            console.log("Pending payment recovered!")
          }).catch(() => {})
        }
      } catch(e) {}
    }
  }, [authUser])

  // Online/offline detection
  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)
    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)
    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [])

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (!user) {
        // Check if we have cached user data for offline use
        const cachedUser = localStorage.getItem("ee-cached-user")
        const cachedUserData = localStorage.getItem("ee-cached-userdata")
        if (cachedUser && !navigator.onLine) {
          // Offline but previously logged in — restore from cache
          try {
            setAuthUser(JSON.parse(cachedUser))
            setUserData(JSON.parse(cachedUserData))
            setAppLoading(false)
            return
          } catch(e) {}
        }
        setAuthUser(null)
        setUserData(null)
        setPage("home")
        setPageHistory([])
      } else {
        // User is logged in
        // Check email verification
        if (!user.emailVerified) {
          // Not verified — show auth screen in verify mode
          setAuthUser(null)
          setAppLoading(false)
          return
        }
        // Set authUser so app knows someone is logged in
        setAuthUser(user)
        // Cache user for offline use
        localStorage.setItem("ee-cached-user", JSON.stringify({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          emailVerified: user.emailVerified
        }))
        // Load full user data from Firestore to get real name, faculty etc
        getDoc(doc(db, "users", user.uid)).then(snap => {
          if (snap.exists()) {
            const data = snap.data()
            setUserData(data)
            localStorage.setItem("ee-cached-userdata", JSON.stringify(data))
            // Restore profile from Firestore data
            if (data.faculty && data.examType) {
              const profileData = {
                examType: data.examType,
                university: data.university || "UNIBEN",
                faculty: data.faculty
              }
              localStorage.setItem("ee-examType", profileData.examType)
              localStorage.setItem("ee-university", profileData.university)
              localStorage.setItem("ee-faculty", profileData.faculty)
              setProfile(profileData)
            }
          } else {
            // No Firestore doc — use cached data if available
            const cached = localStorage.getItem("ee-cached-userdata")
            if (cached) try { setUserData(JSON.parse(cached)) } catch(e) {}
          }
        }).catch(() => {
          // Offline — use cached data
          const cached = localStorage.getItem("ee-cached-userdata")
          if (cached) try { setUserData(JSON.parse(cached)) } catch(e) {}
        })
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
      if (snap.exists()) {
        const data = snap.data()
        setUserData(data)
        // Cache userData for offline use
        localStorage.setItem("ee-cached-userdata", JSON.stringify(data))
      }
    }, (error) => {
      // Offline — try to use cached data
      const cached = localStorage.getItem("ee-cached-userdata")
      if (cached) {
        try { setUserData(JSON.parse(cached)) } catch(e) {}
      }
    })
    return () => unsub()
  }, [authUser?.uid])
  // Hardware/browser back button support (Android back button, browser back)
  useEffect(() => {
    // Always maintain TWO history entries so popstate always fires
    // Entry 1: the "dummy" entry we can pop back to
    // Entry 2: the current page entry (always on top)
    window.history.replaceState({ appPage: page, index: 1 }, "", window.location.pathname)
    window.history.pushState({ appPage: page, index: 2 }, "", window.location.pathname)

    const handlePopState = (e) => {
      // User pressed hardware back — call our app's back handler
      handleBack()
    }

    window.addEventListener("popstate", handlePopState)
    return () => window.removeEventListener("popstate", handlePopState)
  }, [page])



  // Show loading screen while Firebase auth resolves
  if (appLoading) return <FullPageLoader message="Starting ExamEdgeNG..." />

  // Show splash/onboarding screens on first visit
  if (showSplash) return <Splash onDone={() => { localStorage.setItem("ee-splash-done", "1"); setShowSplash(false) }} />

  // Show Auth screen first if not logged in
  if (!authUser) {
    return <Auth onGoToUpgrade={() => setPage("upgrade")} onAuthDone={(user) => {
      setAuthUser(user)
      setUserData(user)
      // Restore profile from Firestore first (most reliable)
      if (user.faculty && user.examType) {
        const profileData = {
          examType: user.examType,
          university: user.university || "UNIBEN",
          faculty: user.faculty
        }
        localStorage.setItem("ee-examType", profileData.examType)
        localStorage.setItem("ee-university", profileData.university)
        localStorage.setItem("ee-faculty", profileData.faculty)
        setProfile(profileData)
      } else {
        // No faculty in Firestore — this is a fresh signup, show onboarding
        localStorage.removeItem("ee-examType")
        localStorage.removeItem("ee-university")
        localStorage.removeItem("ee-faculty")
        setProfile(null)
      }
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
  const NO_HISTORY_PAGES = ["home", "auth", "onboarding", "hotTopicsQuiz", "weak"]

  const handleNavigate = (newPage, topic = null, subject = null, subjectsOrIndex = null, uni = null, customCounts = null) => {
    startIndexRef.current = typeof subjectsOrIndex === "number" ? subjectsOrIndex : 0

    // Don't push to history if:
    // - current page is a no-history page
    // - going to same page
    // - going back to a parent (study→quiz→study creates loop)
    const lastInHistory = pageHistory[pageHistory.length - 1]
    const isDuplicate = lastInHistory === page
    const isGoingBack = lastInHistory === newPage

    if (!NO_HISTORY_PAGES.includes(page) && !isDuplicate && !isGoingBack) {
      setPageHistory(prev => [...prev, page])
    }

    setPage(newPage)
    if (topic !== null) setSelectedTopic(topic)
    if (subject !== null) setSelectedSubject(subject)
    if (Array.isArray(subjectsOrIndex)) { setSelectedSubjects(subjectsOrIndex); setCbtCounts(customCounts) }
    if (newPage === "hotTopicsQuiz" && customCounts?.topic) { setHotTopicTopic(customCounts.topic) }
    setSelectedStartIndex(typeof subjectsOrIndex === "number" ? subjectsOrIndex : 0)
  }

  const handleBack = () => {
    if (pageHistory.length === 0) {
      setPage("home")
      return
    }
    const prev = pageHistory[pageHistory.length - 1]
    // Detect loop — if going back leads to current page, clear and go home
    if (prev === page) {
      setPageHistory([])
      setPage("home")
      return
    }
    setPageHistory(h => h.slice(0, -1))
    setPage(prev)
  }

  const handleOnboardingDone = (data) => {
    setProfile(data)
    setPage("home")
  }

  const resetOnboarding = (startStep = 1) => {
    localStorage.removeItem("ee-examType")
    localStorage.removeItem("ee-university")
    localStorage.removeItem("ee-faculty")
    setOnboardingStartStep(startStep)
    setProfile(null)
  }

  // Show onboarding if no profile yet
  if (!profile) {
    return <Onboarding onDone={handleOnboardingDone} authUser={authUser} startStep={onboardingStartStep} />
  }

  const { examType, university, faculty } = profile
  const facultySubjects = getFacultySubjects()

  const renderPage = () => {
    // Wrap lazy-loaded pages in Suspense
    // ===================== JAMB =====================
    if (examType === "jamb") {
      if (page === "home") return <Home onNavigate={handleNavigate} onReset={resetOnboarding} />
      if (page === "subjectSelect") return <SubjectSelect onNavigate={handleNavigate} onBack={handleBack} mode="study" examType="jamb" />
      if (page === "cbtSubjectSelect") return <SubjectSelect onNavigate={handleNavigate} onBack={handleBack} mode="cbt" examType="jamb" />
      if (page === "study") return <StudyMode subject={selectedSubject} onNavigate={handleNavigate} onBack={handleBack} />
      if (page === "quiz") return <Quiz topic={selectedTopic} subject={selectedSubject} onNavigate={handleNavigate} onBack={handleBack} examType="jamb" startFromIndex={startIndexRef.current} />
      if (page === "progress") return <Progress onNavigate={handleNavigate} onBack={handleBack} />
      if (page === "weak") return <WeakAreas onNavigate={handleNavigate} onBack={() => { setPage("home"); setPageHistory([]) }} />
      if (page === "cbt") return <Quiz topic="cbt" subjects={selectedSubjects} onNavigate={handleNavigate} onBack={handleBack} examType="jamb" customCounts={cbtCounts} />
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
      if (page === "weak") return <WeakAreas onNavigate={handleNavigate} onBack={() => { setPage("home"); setPageHistory([]) }} />
      if (page === "cbt") return (
        <Quiz
          topic="cbt"
          subjects={selectedSubjects}
          onNavigate={handleNavigate}
          examType="postutme"
          university={university}
          englishFirst={true}
          customCounts={cbtCounts}
          isPaid={userData?.isPaid}
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
          topic={hotTopicTopic || "hotTopics"}
          subject={selectedSubject}
          onNavigate={handleNavigate}
          onBack={() => { setPage("hotTopics"); setPageHistory([]) }}
          examType="postutme"
          university={university}
          isPaid={userData?.isPaid}
          hotTopicFilter={hotTopicTopic}
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

  return (
    <>
      {!isOnline && (
        <div style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 9999,
          background: "#f59e0b", color: "#fff",
          textAlign: "center", padding: "8px 16px",
          fontSize: 13, fontWeight: 700,
          display: "flex", alignItems: "center", justifyContent: "center", gap: 8
        }}>
          📡 You are offline — questions and progress still work!
        </div>
      )}
      <div style={{ paddingTop: isOnline ? 0 : 36 }}>
        {renderPage()}
      </div>
    </>
  )
}

export default App