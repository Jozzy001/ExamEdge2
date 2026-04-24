import { useState } from "react"
import Home from "./pages/Home"
import SubjectSelect from "./pages/SubjectSelect"
import StudyMode from "./pages/StudyMode"
import Quiz from "./pages/Quiz"
import Progress from "./pages/Progress"
import CBTResult from "./pages/CBTResult"

function App() {
  const [page, setPage] = useState("home")
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [selectedSubject, setSelectedSubject] = useState(null)

  const handleNavigate = (newPage, topic = null, subject = null) => {
    setPage(newPage)
    if (topic !== null) setSelectedTopic(topic)
    if (subject !== null) setSelectedSubject(subject)
  }

  const renderPage = () => {
    if (page === "home") return <Home onNavigate={handleNavigate} />
    if (page === "subjectSelect") return <SubjectSelect onNavigate={handleNavigate} mode="study" />
    if (page === "cbtSubjectSelect") return <SubjectSelect onNavigate={handleNavigate} mode="cbt" />
    if (page === "study") return <StudyMode subject={selectedSubject} onNavigate={handleNavigate} />
    if (page === "quiz") return <Quiz topic={selectedTopic} subject={selectedSubject} onNavigate={handleNavigate} />
    if (page === "progress") return <Progress onNavigate={handleNavigate} />
    if (page === "weak") return <Quiz topic="weak" subject={selectedSubject} onNavigate={handleNavigate} />
    if (page === "cbt") return <Quiz topic="cbt" subject={selectedSubject} onNavigate={handleNavigate} />
    if (page === "cbtResult") return <CBTResult onNavigate={handleNavigate} />
    return <h2>Page not found</h2>
  }

  return <div>{renderPage()}</div>
}

export default App
