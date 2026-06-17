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
import Leaderboard from "./pages/Leaderboard"
import Referrals from "./pages/Referrals"
import AccountDetails from "./pages/AccountDetails"
import AITutor from "./pages/AITutor"
import { FullPageLoader, HomeSkeleton, PageTransition } from "./components/LoadingScreen"
import Splash from "./pages/Splash"
import WeakAreas from "./pages/WeakAreas"
import { doc, onSnapshot, getDoc, updateDoc } from "firebase/firestore"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth, db } from "./firebase"

const INACTIVITY_LIMIT = 60 * 60 * 1000 // 60 minutes in ms
import { UNIBEN_FACULTIES } from "./data/postutme/uniben/faculties"

function App() {
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
  const [showSplash, setShowSplash] = useState(!localStorage.getItem("ee-splash-done"))
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
  const [freeAccessMode, setFreeAccessMode] = useState(false)
  const [userData, setUserData] = useState(() => {
    try {
      const cached = localStorage.getItem("ee-cached-userdata")
      return cached ? JSON.parse(cached) : null
    } catch(e) { return null }
  })
  const [onboardingStartStep, setOnboardingStartStep] = useState(1)
  const [profileLoading, setProfileLoading] = useState(false)
  const [loggingOut, setLoggingOut] = useState(false)
  const startIndexRef = useRef(0)

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
          }).catch(() => {})
        }
      } catch(e) {}
    }
  }, [authUser])

  // Auto-send welcome DM 45 mins after first sign up
  useEffect(() => {
    if (!authUser?.uid || !userData) return

    // Only for accounts created in the last 2 hours
    const createdAt = userData.createdAt?.toDate
      ? userData.createdAt.toDate()
      : new Date(userData.createdAt || 0)
    const ageMs = Date.now() - createdAt.getTime()
    const twoHours = 2 * 60 * 60 * 1000
    if (ageMs > twoHours) return // account too old, skip

    // Check if welcome already sent
    const alreadySentKey = `ee-welcome-sent-${authUser.uid}`
    if (localStorage.getItem(alreadySentKey)) return

    // Schedule welcome DM for 45 minutes after app load
    const DELAY = 45 * 60 * 1000 // 45 minutes
    const timer = setTimeout(async () => {
      try {
        const { collection: col, addDoc: add, getDocs: get, query: q, where: w, serverTimestamp: st } = await import("firebase/firestore")
        // Check Firestore — did they already get one?
        const existing = await get(q(col(db, "messages"), w("uid", "==", authUser.uid), w("fromAdmin", "==", true)))
        if (!existing.empty) {
          localStorage.setItem(alreadySentKey, "1")
          return
        }
        const firstName = userData.name?.split(" ")[0] || "Student"
        const welcomeMessage = `Welcome to ExamEdgeNG! 🎉

Hi ${firstName}! We're so glad you joined us. We are the ExamEdgeNG team and we built this app specifically for UNIBEN Post-UTME candidates like you.

Here's how to get the most out of the app:

Step 1 — Take a CBT test first 🧪
Go to CBT Mode and do a full timed test. This gives the AI Tutor real data about you so it can tell you exactly what to focus on.

Step 2 — Ask the AI Tutor 🎓
After your CBT, open AI Tutor and ask: "What should I study today?" It will build you a personalised plan based on your actual weak areas.

Step 3 — Study daily 📚
Even 30 minutes a day consistently beats cramming. The app tracks your streak and XP to keep you motivated.

Hot Topics 🔥 are your secret weapon — questions that have repeated across multiple UNIBEN papers. Master them and you're already ahead of most candidates.

📢 Join our WhatsApp Channel for exam updates, app news and study tips:
https://whatsapp.com/channel/0029Vb7ZQAe90x2qXQY1Rw1K

If you ever have questions, go to Settings → Contact Support. We respond personally.

You've got this. UNIBEN is waiting. 🚀

— The ExamEdgeNG Team`

        await add(col(db, "messages"), {
          uid: authUser.uid,
          username: userData.name || "User",
          email: userData.email || "",
          message: welcomeMessage,
          createdAt: st(),
          status: "unread",
          fromAdmin: true,
        })
        localStorage.setItem(alreadySentKey, "1")
      } catch(e) {}
    }, DELAY)

    return () => clearTimeout(timer)
  }, [authUser?.uid, userData])

  // ── AUTO-SEND WELCOME DM 45 MINS AFTER FIRST USE ──
  useEffect(() => {
    if (!authUser?.uid || !userData) return

    // Only for accounts created in the last 2 hours
    const createdAt = userData.createdAt?.toDate
      ? userData.createdAt.toDate()
      : new Date(userData.createdAt || 0)
    const ageMs = Date.now() - createdAt.getTime()
    if (ageMs > 2 * 60 * 60 * 1000) return // older than 2 hours — skip

    // Don't send twice
    const sentKey = `ee-welcome-sent-${authUser.uid}`
    if (localStorage.getItem(sentKey)) return

    const DELAY = 45 * 60 * 1000 // 45 minutes
    const timer = setTimeout(async () => {
      try {
        const { collection: col, addDoc: add, getDocs: get, query: q, where: w, serverTimestamp: st } = await import("firebase/firestore")
        // Check Firestore in case they already got one from admin bulk send
        const existing = await get(q(col(db, "messages"), w("uid", "==", authUser.uid), w("fromAdmin", "==", true)))
        if (!existing.empty) { localStorage.setItem(sentKey, "1"); return }

        const firstName = userData.name?.split(" ")[0] || "Student"
        await add(col(db, "messages"), {
          uid: authUser.uid,
          username: userData.name || "User",
          email: userData.email || "",
          message: `Welcome to ExamEdgeNG! 🎉

Hi ${firstName}! We're so glad you joined us. We are the ExamEdgeNG team and we built this app specifically for UNIBEN Post-UTME candidates like you.

Here's how to get the most out of the app:

Step 1 — Take a CBT test first 🧪
Go to CBT Mode and do a full timed test. This gives the AI Tutor real data about you so it can tell you exactly what to focus on.

Step 2 — Ask the AI Tutor 🎓
After your CBT, open AI Tutor and ask: "What should I study today?" It will build you a personalised plan based on your actual weak areas.

Step 3 — Study daily 📚
Even 30 minutes a day consistently beats cramming. The app tracks your streak and XP to keep you motivated.

Hot Topics 🔥 are your secret weapon — questions that have repeated across multiple UNIBEN papers. Master them and you're already ahead of most candidates.

📢 Join our WhatsApp Channel — don't miss exam updates, app news and study tips:
https://whatsapp.com/channel/0029Vb7ZQAe90x2qXQY1Rw1K

If you ever have questions, go to Settings → Contact Support. We respond personally.

You've got this. UNIBEN is waiting. 🚀

— The ExamEdgeNG Team`,
          createdAt: st(),
          status: "unread",
          fromAdmin: true,
        })
        localStorage.setItem(sentKey, "1")
      } catch(e) {}
    }, DELAY)

    return () => clearTimeout(timer)
  }, [authUser?.uid, userData?.uid])

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

  // ── Inactivity logout — 60 minutes ──
  useEffect(() => {
    if (!authUser) return // only track when logged in

    let inactivityTimer

    const resetTimer = () => {
      clearTimeout(inactivityTimer)
      inactivityTimer = setTimeout(async () => {
        await signOut(auth)
        localStorage.removeItem("ee-cached-user")
        localStorage.removeItem("ee-cached-userdata")
      }, INACTIVITY_LIMIT)
    }

    // Track any user interaction
    const events = ["mousemove", "mousedown", "keydown", "touchstart", "scroll", "click"]
    events.forEach(e => window.addEventListener(e, resetTimer))
    resetTimer() // start the timer immediately

    return () => {
      clearTimeout(inactivityTimer)
      events.forEach(e => window.removeEventListener(e, resetTimer))
    }
  }, [authUser])

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (!user) {
        const cachedUser = localStorage.getItem("ee-cached-user")
        const cachedUserData = localStorage.getItem("ee-cached-userdata")
        if (cachedUser && !navigator.onLine) {
          try {
            setAuthUser(JSON.parse(cachedUser))
            setUserData(JSON.parse(cachedUserData))
            setAppLoading(false)
            return
          } catch(e) {}
        }
        setLoggingOut(false)
        setAuthUser(null)
        setUserData(null)
        setProfile(null)
        setPage("home")
        setPageHistory([])
      } else {
        // ✅ Email verification removed — all users proceed directly
        setAuthUser(user)
        localStorage.setItem("ee-cached-user", JSON.stringify({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          emailVerified: user.emailVerified
        }))
        getDoc(doc(db, "users", user.uid)).then(snap => {
          if (snap.exists()) {
            const data = snap.data()
            setUserData(data)
            localStorage.setItem("ee-cached-userdata", JSON.stringify(data))
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
            const cached = localStorage.getItem("ee-cached-userdata")
            if (cached) try { setUserData(JSON.parse(cached)) } catch(e) {}
          }
        }).catch(() => {
          const cached = localStorage.getItem("ee-cached-userdata")
          if (cached) try { setUserData(JSON.parse(cached)) } catch(e) {}
        })
      }
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
        localStorage.setItem("ee-cached-userdata", JSON.stringify(data))
      }
    }, () => {
      const cached = localStorage.getItem("ee-cached-userdata")
      if (cached) {
        try { setUserData(JSON.parse(cached)) } catch(e) {}
      }
    })
    return () => unsub()
  }, [authUser?.uid])

  // Listen to global freeAccessMode
  useEffect(() => {
    const unsub = onSnapshot(doc(db, "appSettings", "global"), (snap) => {
      if (snap.exists()) setFreeAccessMode(snap.data().freeAccessMode === true)
      else setFreeAccessMode(false)
    }, () => setFreeAccessMode(false))
    return () => unsub()
  }, [])

  // Hardware/browser back button support
  useEffect(() => {
    window.history.pushState({ appPage: page }, "", window.location.pathname)
    const handlePopState = () => {
      setPage(prev => {
        const history = pageHistory
        if (history.length === 0) return "home"
        return history[history.length - 1]
      })
      setPageHistory(prev => prev.slice(0, -1))
      setTimeout(() => {
        window.history.pushState({ appPage: page }, "", window.location.pathname)
      }, 100)
    }
    window.addEventListener("popstate", handlePopState)
    return () => window.removeEventListener("popstate", handlePopState)
  }, [page, pageHistory])

  if (appLoading) return <FullPageLoader message="Starting ExamEdgeNG..." />
  if (showSplash) return <Splash onDone={(destination) => {
    localStorage.setItem("ee-splash-done", "1")
    setShowSplash(false)
    // Pass destination (signup/login) to Auth via localStorage
    if (destination) localStorage.setItem("ee-splash-destination", destination)
  }} />

  if (!authUser) {
    return <Auth onGoToUpgrade={() => setPage("upgrade")} onAuthDone={(user) => {
      setProfileLoading(true)
      setAuthUser(user)
      setUserData(user)
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
        localStorage.removeItem("ee-examType")
        localStorage.removeItem("ee-university")
        localStorage.removeItem("ee-faculty")
        setProfile(null)
      }
      setProfileLoading(false)
    }} />
  }

  const getFacultySubjects = () => {
    if (!profile?.faculty || !profile?.university) return []
    if (profile.university === "UNIBEN") {
      return UNIBEN_FACULTIES[profile.faculty]?.subjects || []
    }
    return []
  }

  const NO_HISTORY_PAGES = ["home", "auth", "onboarding", "hotTopicsQuiz", "weak"]

  const handleNavigate = (newPage, topic = null, subject = null, subjectsOrIndex = null, uni = null, customCounts = null) => {
    startIndexRef.current = typeof subjectsOrIndex === "number" ? subjectsOrIndex : 0

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
    const uid = authUser?.uid || auth.currentUser?.uid
    if (uid && data.faculty && data.examType) {
      updateDoc(doc(db, "users", uid), {
        examType: data.examType,
        university: data.university || "UNIBEN",
        faculty: data.faculty,
      }).catch((e) => {
        console.log("Faculty save error:", e)
      })
    }
  }

  const resetOnboarding = (startStep = 1) => {
    localStorage.removeItem("ee-examType")
    localStorage.removeItem("ee-university")
    localStorage.removeItem("ee-faculty")
    setOnboardingStartStep(startStep)
    setProfile(null)
  }

  if (profileLoading || loggingOut) return <FullPageLoader message="Please wait..." />

  if (!profile) {
    return <Onboarding onDone={handleOnboardingDone} authUser={authUser} startStep={onboardingStartStep} />
  }

  const { examType, university, faculty } = profile
  const effectiveIsPaid = userData?.isPaid || freeAccessMode
  const facultySubjects = getFacultySubjects()

  const renderPage = () => {
    // ===================== JAMB =====================
    if (examType === "jamb") {
      if (page === "home") return <Home onNavigate={handleNavigate} onReset={resetOnboarding} />
      if (page === "subjectSelect") return <SubjectSelect onNavigate={handleNavigate} onBack={handleBack} mode="study" examType="jamb" />
      if (page === "cbtSubjectSelect") return <SubjectSelect onNavigate={handleNavigate} onBack={handleBack} mode="cbt" examType="jamb" />
      if (page === "study") return <StudyMode subject={selectedSubject} onNavigate={handleNavigate} onBack={handleBack} />
      if (page === "quiz") return <Quiz topic={selectedTopic} subject={selectedSubject} onNavigate={handleNavigate} onBack={handleBack} examType="jamb" startFromIndex={startIndexRef.current} />
      if (page === "progress") return <Progress onNavigate={handleNavigate} onBack={handleBack} isPaid={effectiveIsPaid} />
      if (page === "weak") return <WeakAreas onNavigate={handleNavigate} onBack={() => { setPage("home"); setPageHistory([]) }} isPaid={effectiveIsPaid} />
      if (page === "cbt") return <Quiz topic="cbt" subjects={selectedSubjects} onNavigate={handleNavigate} onBack={handleBack} examType="jamb" customCounts={cbtCounts} />
      if (page === "cbtHistory") return (
        <CBTHistory
          isPaid={effectiveIsPaid}
          onNavigate={handleNavigate}
          onBack={handleBack}
          onReview={(record) => { setReviewRecord(record); handleNavigate("cbtResult") }}
        />
      )
      if (page === "cbtResult") return <CBTResult onNavigate={handleNavigate} onBack={handleBack} record={reviewRecord} />
      if (page === "aiTutor") return (
        <AITutor
          onNavigate={handleNavigate}
          onBack={handleBack}
          userData={userData}
          authUser={authUser}
          isPaid={effectiveIsPaid}
          faculty={faculty}
          facultySubjects={facultySubjects}
        />
      )
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
          isPaid={effectiveIsPaid}
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
          isPaid={effectiveIsPaid}
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
          isPaid={effectiveIsPaid}
        />
      )
      if (page === "progress") return <Progress onNavigate={handleNavigate} onBack={handleBack} isPaid={effectiveIsPaid} />
      if (page === "weak") return <WeakAreas onNavigate={handleNavigate} onBack={() => { setPage("home"); setPageHistory([]) }} isPaid={effectiveIsPaid} />
      if (page === "cbt") return (
        <Quiz
          topic="cbt"
          subjects={selectedSubjects}
          onNavigate={handleNavigate}
          examType="postutme"
          university={university}
          englishFirst={true}
          customCounts={cbtCounts}
          isPaid={effectiveIsPaid}
        />
      )
      if (page === "cbtHistory") return (
        <CBTHistory
          isPaid={effectiveIsPaid}
          onNavigate={handleNavigate}
          onBack={handleBack}
          onReview={(record) => { setReviewRecord(record); handleNavigate("cbtResult") }}
        />
      )
      if (page === "cbtResult") return <CBTResult onNavigate={handleNavigate} onBack={handleBack} record={reviewRecord} />

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
          isPaid={effectiveIsPaid}
          hotTopicFilter={hotTopicTopic}
        />
      )

      if (page === "leaderboard") return (
        <Leaderboard
          onNavigate={handleNavigate}
          onBack={handleBack}
          university={university}
          isPaid={effectiveIsPaid}
        />
      )

      if (page === "referrals") return (
        <Referrals
          onNavigate={handleNavigate}
          onBack={handleBack}
          authUser={authUser}
        />
      )

      if (page === "accountDetails") return (
        <AccountDetails
          onNavigate={handleNavigate}
          onBack={handleBack}
          authUser={authUser}
        />
      )

      if (page === "aiTutor") return (
        <AITutor
          onNavigate={handleNavigate}
          onBack={handleBack}
          userData={userData}
          authUser={authUser}
          isPaid={effectiveIsPaid}
          faculty={faculty}
          facultySubjects={facultySubjects}
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
        onLogout={() => setLoggingOut(true)}
        authUser={authUser}
        faculty={faculty}
        university={university}
        examType={examType}
        isPaid={effectiveIsPaid}
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