import { useState, useEffect } from "react"
import { auth, db } from "../firebase"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  sendEmailVerification,
  signOut,
  reload
} from "firebase/auth"
import {
  doc, setDoc, getDoc, serverTimestamp
} from "firebase/firestore"
import { useTheme } from "../context/ThemeContext"

const Auth = ({ onAuthDone }) => {
  const { dark, toggleTheme } = useTheme()
  const [mode, setMode] = useState("login") // login | signup | reset | verify
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [resetSent, setResetSent] = useState(false)
  const [checkingVerification, setCheckingVerification] = useState(false)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        if (!user.emailVerified) {
          setMode("verify")
          return
        }
        const userDoc = await getDoc(doc(db, "users", user.uid))
        if (userDoc.exists()) {
          const data = userDoc.data()
          // Sync faculty from localStorage if not in Firestore
          const localFaculty = localStorage.getItem("ee-faculty")
          if (!data.faculty && localFaculty) {
            await setDoc(doc(db, "users", user.uid), {
              ...data,
              faculty: localFaculty,
              examType: localStorage.getItem("ee-examType") || "postutme",
              university: localStorage.getItem("ee-university") || "UNIBEN",
              lastLogin: serverTimestamp()
            }, { merge: true })
            onAuthDone({ ...data, faculty: localFaculty })
          } else {
            await setDoc(doc(db, "users", user.uid), {
              ...data,
              lastLogin: serverTimestamp()
            }, { merge: true })
            onAuthDone(data)
          }
        }
      }
    })
    return () => unsub()
  }, [])

  const getErrorMessage = (code) => {
    switch (code) {
      case "auth/email-already-in-use": return "An account with this email already exists. Please log in."
      case "auth/invalid-email": return "Please enter a valid email address."
      case "auth/weak-password": return "Password must be at least 6 characters."
      case "auth/user-not-found": return "No account found with this email."
      case "auth/wrong-password": return "Incorrect password. Please try again."
      case "auth/invalid-credential": return "Incorrect email or password. Please try again."
      case "auth/too-many-requests": return "Too many attempts. Please try again later."
      default: return "Something went wrong. Please try again."
    }
  }

  const handleSignup = async () => {
    if (!name.trim() || name.trim().length < 2) { setError("Please enter a username"); return }
    if (!email.includes("@")) { setError("Please enter a valid email address"); return }
    if (password.length < 6) { setError("Password must be at least 6 characters"); return }

    setError(""); setLoading(true)
    try {
      const result = await createUserWithEmailAndPassword(auth, email.trim(), password)
      const user = result.user

      // Send verification email
      await sendEmailVerification(user)

      // Save user to Firestore
      const userData = {
        uid: user.uid,
        name: name.trim(),
        email: user.email,
        createdAt: serverTimestamp(),
        lastLogin: serverTimestamp(),
      }
      await setDoc(doc(db, "users", user.uid), userData)

      // Show verify screen
      setMode("verify")
    } catch (err) {
      setError(getErrorMessage(err.code))
    }
    setLoading(false)
  }

  const handleLogin = async () => {
    if (!email.includes("@")) { setError("Please enter a valid email address"); return }
    if (!password) { setError("Please enter your password"); return }

    setError(""); setLoading(true)
    try {
      const result = await signInWithEmailAndPassword(auth, email.trim(), password)
      if (!result.user.emailVerified) {
        setMode("verify")
      }
      // onAuthDone called by onAuthStateChanged if verified
    } catch (err) {
      setError(getErrorMessage(err.code))
    }
    setLoading(false)
  }

  const handleReset = async () => {
    if (!email.includes("@")) { setError("Please enter your email address"); return }
    setError(""); setLoading(true)
    try {
      await sendPasswordResetEmail(auth, email.trim())
      setResetSent(true)
    } catch (err) {
      setError(getErrorMessage(err.code))
    }
    setLoading(false)
  }

  const handleCheckVerification = async () => {
    setCheckingVerification(true)
    try {
      await reload(auth.currentUser)
      if (auth.currentUser.emailVerified) {
        const userDoc = await getDoc(doc(db, "users", auth.currentUser.uid))
        if (userDoc.exists()) {
          onAuthDone(userDoc.data())
        }
      } else {
        setError("Email not verified yet. Please check your inbox and click the link.")
      }
    } catch (e) {
      setError("Could not check verification. Try again.")
    }
    setCheckingVerification(false)
  }

  const handleResendVerification = async () => {
    setError("")
    try {
      await sendEmailVerification(auth.currentUser)
      setError("✅ Verification email resent! Check your inbox.")
    } catch (e) {
      setError("Could not resend email. Try again later.")
    }
  }

  const inputStyle = {
    width: "100%", padding: "14px 16px",
    border: "1.5px solid var(--border)",
    borderRadius: "var(--radius-md)",
    background: "var(--surface)", fontSize: 15,
    fontFamily: "var(--font-main)", color: "var(--text)",
    outline: "none", boxSizing: "border-box",
    marginBottom: 12
  }

  const labelStyle = {
    fontSize: 12, fontWeight: 800, color: "var(--text3)",
    textTransform: "uppercase", letterSpacing: "0.07em",
    display: "block", marginBottom: 6
  }

  return (
    <div className="ee-page">
      <header className="ee-header">
        <span className="ee-logo">ExamEdge</span>
        <button className="ee-theme-toggle" onClick={toggleTheme}>
          {dark ? "☀️" : "🌙"}
        </button>
      </header>

      <div className="ee-content">

        {/* ===== VERIFY EMAIL ===== */}
        {mode === "verify" && (
          <>
            <div style={{ textAlign: "center", marginBottom: 32, marginTop: 16 }}>
              <div style={{ fontSize: 56, marginBottom: 16 }}>📧</div>
              <h2 className="ee-title">Verify your email</h2>
              <p className="ee-subtitle">
                We sent a verification link to <strong>{auth.currentUser?.email}</strong>.
                Click the link in your email to continue.
              </p>
            </div>

            {/* Spam notice */}
            <div style={{
              background: "rgba(255,179,71,0.12)",
              border: "1px solid rgba(255,179,71,0.4)",
              borderRadius: "var(--radius-md)",
              padding: "12px 14px", marginBottom: 16,
              display: "flex", gap: 10, alignItems: "flex-start"
            }}>
              <span style={{ fontSize: 18, flexShrink: 0 }}>⚠️</span>
              <div style={{ fontSize: 12, color: "#7a4500", lineHeight: 1.6 }}>
                <strong>Can't find the email?</strong> Check your <strong>Spam</strong> or <strong>Junk</strong> folder — verification emails sometimes end up there. Mark it as "Not spam" so future emails come through.
              </div>
            </div>

            {error && (
              <div style={{
                background: error.startsWith("✅") ? "rgba(34,201,122,0.1)" : "rgba(255,107,107,0.1)",
                border: `1px solid ${error.startsWith("✅") ? "rgba(34,201,122,0.3)" : "rgba(255,107,107,0.3)"}`,
                borderRadius: "var(--radius-md)", padding: "10px 14px",
                fontSize: 13, color: error.startsWith("✅") ? "var(--success)" : "var(--accent)",
                marginBottom: 16
              }}>{error}</div>
            )}

            <button
              className="ee-btn ee-btn-primary"
              onClick={handleCheckVerification}
              disabled={checkingVerification}
            >
              {checkingVerification ? "Checking..." : "I've verified my email ✅"}
            </button>

            <button
              onClick={handleResendVerification}
              style={{
                width: "100%", padding: "12px",
                background: "none", border: "1px solid var(--border)",
                borderRadius: "var(--radius-md)", marginTop: 10,
                fontSize: 13, fontWeight: 700, color: "var(--text2)",
                cursor: "pointer", fontFamily: "var(--font-main)"
              }}
            >
              📨 Resend verification email
            </button>

            <button
              onClick={async () => { await signOut(auth); setMode("login"); setError("") }}
              style={{
                width: "100%", padding: "10px",
                background: "none", border: "none",
                fontSize: 12, fontWeight: 700, color: "var(--text3)",
                cursor: "pointer", fontFamily: "var(--font-main)", marginTop: 8
              }}
            >
              ← Use a different account
            </button>
          </>
        )}

        {/* ===== RESET PASSWORD ===== */}
        {mode === "reset" && (
          <>
            <div style={{ textAlign: "center", marginBottom: 32, marginTop: 16 }}>
              <div style={{ fontSize: 56, marginBottom: 16 }}>🔑</div>
              <h2 className="ee-title">Reset Password</h2>
              <p className="ee-subtitle">Enter your email and we'll send you a reset link.</p>
            </div>

            {resetSent ? (
              <div style={{
                background: "rgba(34,201,122,0.1)", border: "1px solid rgba(34,201,122,0.3)",
                borderRadius: "var(--radius-md)", padding: "16px",
                textAlign: "center", marginBottom: 16
              }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>✅</div>
                <p style={{ fontSize: 14, color: "var(--success)", fontWeight: 700, margin: 0 }}>
                  Reset link sent! Check your email.
                </p>
              </div>
            ) : (
              <>
                <label style={labelStyle}>Email Address</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com" style={inputStyle} />
                {error && <div style={{ color: "var(--accent)", fontSize: 13, marginBottom: 12 }}>{error}</div>}
                <button className="ee-btn ee-btn-primary" onClick={handleReset} disabled={loading}>
                  {loading ? "Sending..." : "Send Reset Link →"}
                </button>
              </>
            )}

            <button onClick={() => { setMode("login"); setResetSent(false); setError("") }}
              style={{ background: "none", border: "none", color: "var(--primary)", fontWeight: 700,
                fontSize: 13, cursor: "pointer", fontFamily: "var(--font-main)", marginTop: 12,
                display: "block", width: "100%", textAlign: "center" }}>
              ← Back to Login
            </button>
          </>
        )}

        {/* ===== LOGIN ===== */}
        {mode === "login" && (
          <>
            <div style={{ textAlign: "center", marginBottom: 32, marginTop: 16 }}>
              <div style={{ fontSize: 56, marginBottom: 16 }}>🎓</div>
              <h2 className="ee-title">Welcome Back</h2>
              <p className="ee-subtitle">Log in to continue your Post-UTME prep.</p>
            </div>

            <label style={labelStyle}>Email Address</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com" style={inputStyle}
              onKeyDown={e => e.key === "Enter" && handleLogin()} />

            <label style={labelStyle}>Password</label>
            <div style={{ position: "relative", marginBottom: 12 }}>
              <input type={showPass ? "text" : "password"} value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter your password"
                style={{ ...inputStyle, marginBottom: 0, paddingRight: 48 }}
                onKeyDown={e => e.key === "Enter" && handleLogin()} />
              <button onClick={() => setShowPass(p => !p)} style={{
                position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)",
                background: "none", border: "none", cursor: "pointer",
                fontSize: 16, color: "var(--text3)"
              }}>{showPass ? "🙈" : "👁️"}</button>
            </div>

            <button onClick={() => { setMode("reset"); setError("") }}
              style={{ background: "none", border: "none", color: "var(--primary)", fontWeight: 700,
                fontSize: 12, cursor: "pointer", fontFamily: "var(--font-main)",
                display: "block", textAlign: "right", width: "100%", marginBottom: 16 }}>
              Forgot password?
            </button>

            {error && <div style={{ color: "var(--accent)", fontSize: 13, marginBottom: 12,
              background: "rgba(255,107,107,0.1)", padding: "10px 14px",
              borderRadius: "var(--radius-md)", border: "1px solid rgba(255,107,107,0.3)" }}>{error}</div>}

            <button className="ee-btn ee-btn-primary" onClick={handleLogin} disabled={loading}>
              {loading ? "Logging in..." : "Log In →"}
            </button>

            <div style={{ textAlign: "center", marginTop: 20, fontSize: 13, color: "var(--text2)" }}>
              Don't have an account?{" "}
              <button onClick={() => { setMode("signup"); setError("") }}
                style={{ background: "none", border: "none", color: "var(--primary)",
                  fontWeight: 800, fontSize: 13, cursor: "pointer", fontFamily: "var(--font-main)" }}>
                Sign up free
              </button>
            </div>
          </>
        )}

        {/* ===== SIGNUP ===== */}
        {mode === "signup" && (
          <>
            <div style={{ textAlign: "center", marginBottom: 32, marginTop: 16 }}>
              <div style={{ fontSize: 56, marginBottom: 16 }}>🚀</div>
              <h2 className="ee-title">Create Account</h2>
              <p className="ee-subtitle">Join thousands preparing for Post-UTME.</p>
            </div>

            <label style={labelStyle}>Username</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)}
              placeholder="e.g. chukwuemeka01" style={inputStyle} />

            <label style={labelStyle}>Email Address</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com" style={inputStyle} />

            <label style={labelStyle}>Password</label>
            <div style={{ position: "relative", marginBottom: 12 }}>
              <input type={showPass ? "text" : "password"} value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="At least 6 characters"
                style={{ ...inputStyle, marginBottom: 0, paddingRight: 48 }}
                onKeyDown={e => e.key === "Enter" && handleSignup()} />
              <button onClick={() => setShowPass(p => !p)} style={{
                position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)",
                background: "none", border: "none", cursor: "pointer",
                fontSize: 16, color: "var(--text3)"
              }}>{showPass ? "🙈" : "👁️"}</button>
            </div>

            {error && <div style={{ color: "var(--accent)", fontSize: 13, marginBottom: 12,
              background: "rgba(255,107,107,0.1)", padding: "10px 14px",
              borderRadius: "var(--radius-md)", border: "1px solid rgba(255,107,107,0.3)" }}>{error}</div>}

            <button className="ee-btn ee-btn-primary" onClick={handleSignup} disabled={loading}>
              {loading ? "Creating account..." : "Create Account 🚀"}
            </button>

            <div style={{ textAlign: "center", marginTop: 20, fontSize: 13, color: "var(--text2)" }}>
              Already have an account?{" "}
              <button onClick={() => { setMode("login"); setError("") }}
                style={{ background: "none", border: "none", color: "var(--primary)",
                  fontWeight: 800, fontSize: 13, cursor: "pointer", fontFamily: "var(--font-main)" }}>
                Log in
              </button>
            </div>

            <div style={{ marginTop: 20, padding: "12px 14px", background: "var(--surface2)",
              borderRadius: "var(--radius-md)", border: "1px solid var(--border)" }}>
              <p style={{ fontSize: 11, color: "var(--text3)", margin: 0, lineHeight: 1.6 }}>
                🔒 By creating an account you agree that your data is stored securely. We never share your information with third parties.
              </p>
            </div>
          </>
        )}

      </div>
    </div>
  )
}

export default Auth