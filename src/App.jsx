import { useState } from "react"
import Home from "./pages/Home"
import StudyMode from "./pages/StudyMode"
import Quiz from "./pages/Quiz"
import Progress from "./pages/Progress"
import CBTResult from "./pages/CBTResult"

function App() {
  const [page, setPage] = useState("home")
  const [selectedTopic, setSelectedTopic] = useState(null)

  const handleNavigate = (newPage, topic = null) => {
    setPage(newPage)
    if (topic !== null) setSelectedTopic(topic)
  }

  const renderPage = () => {
    if (page === "home") return <Home onNavigate={handleNavigate} />
    if (page === "study") return <StudyMode onNavigate={handleNavigate} />
    if (page === "quiz") return <Quiz topic={selectedTopic} onNavigate={handleNavigate} />
    if (page === "progress") return <Progress onNavigate={handleNavigate} />
    if (page === "weak") return <Quiz topic="weak" onNavigate={handleNavigate} />
    if (page === "cbt") return <Quiz topic="cbt" onNavigate={handleNavigate} />
    if (page === "cbtResult") return <CBTResult onNavigate={handleNavigate} />
    return <h2>Page not found</h2>
  }

  return <div>{renderPage()}</div>
}

export default App
