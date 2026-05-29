// =============================================
// FIREBASE CONFIG — ExamEdge
// =============================================
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB5uIo4HuZwAD3lHYwLMIueYxplRgQBT8U",
  authDomain: "examedge-2d0ce.firebaseapp.com",
  projectId: "examedge-2d0ce",
  storageBucket: "examedge-2d0ce.firebasestorage.app",
  messagingSenderId: "310977849543",
  appId: "1:310977849543:web:649c6adaeb314cb88f36e2"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
export default app
