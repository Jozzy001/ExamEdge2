import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { ThemeProvider } from "./context/ThemeContext"
import "./styles/theme.css"
import App from "./App"

// =============================================
// SERVICE WORKER REGISTRATION
// For Firebase Cloud Messaging (push notifications)
// =============================================
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').catch(e => {
    console.log('Service Worker registration failed:', e)
  })
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
)
