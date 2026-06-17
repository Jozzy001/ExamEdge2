import { useState, useEffect } from "react"
import { auth, db } from "../firebase"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signOut
} from "firebase/auth"
import {
  doc, setDoc, getDoc, serverTimestamp, collection, query, where, getDocs
} from "firebase/firestore"
import { useTheme } from "../context/ThemeContext"
import { ButtonSpinner } from "../components/LoadingScreen"

const phoneToEmail = (phone) => {
  const digits = phone.replace(/\D/g, "")
  return `${digits}@examedgeng.com`
}

const isValidPhone = (input) => {
  const digits = input.replace(/\D/g, "")
  return digits.length >= 10 && digits.length <= 14 && !input.includes("@")
}

const isEmail = (input) => input.includes("@")

const Auth = ({ onAuthDone, onGoToUpgrade }) => {
  const { dark, toggleTheme } = useTheme()
  const splashDestination = localStorage.getItem("ee-splash-destination")
  if (splashDestination) localStorage.removeItem("ee-splash-destination")
  const [mode, setMode] = useState(splashDestination === "signup" ? "signup" : "login")
  const [step, setStep] = useState(1)
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [loginInput, setLoginInput] = useState("")
  const [password, setPassword] = useState("")
  const [showPass, setShowPass] = useState(false)
  const [showConfirmPass, setShowConfirmPass] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [resetSent, setResetSent] = useState(false)
  const [resetEmail, setResetEmail] = useState("")
  const [referralCode, setReferralCode] = useState("")
  const [referralStatus, setReferralStatus] = useState(null)
  const [referrerId, setReferrerId] = useState(null)
  const [checkingReferral, setCheckingReferral] = useState(false)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid))
        if (userDoc.exists()) {
          const data = userDoc.data()
          if (data.disabled) {
            await signOut(auth)
            setError("Your account has been disabled. Please contact support.")
            setMode("login")
            return
          }
          await setDoc(doc(db, "users", user.uid), { ...data, lastLogin: serverTimestamp() }, { merge: true })
          onAuthDone(data)
        }
      }
    })
    return () => unsub()
  }, [])

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!referralCode || referralCode.length < 6) {
        setReferralStatus(null); setReferrerId(null); return
      }
      setCheckingReferral(true)
      try {
        const q = query(collection(db, "users"), where("referralCode", "==", referralCode.toUpperCase()))
        const snap = await getDocs(q)
        if (!snap.empty) {
          setReferralStatus("valid"); setReferrerId(snap.docs[0].id)
        } else {
          setReferralStatus("invalid"); setReferrerId(null)
        }
      } catch { setReferralStatus("invalid") }
      setCheckingReferral(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [referralCode])

  const getErrorMessage = (code) => {
    switch (code) {
      case "auth/email-already-in-use": return "An account with this WhatsApp number already exists. Please log in."
      case "auth/invalid-email": return "Please enter a valid WhatsApp number or email."
      case "auth/weak-password": return "Password must be at least 6 characters."
      case "auth/user-not-found": return "No account found. Please check your WhatsApp number or email."
      case "auth/wrong-password": return "Incorrect password. Please try again."
      case "auth/invalid-credential": return "Incorrect details. Please check and try again."
      case "auth/too-many-requests": return "Too many attempts. Please try again later."
      default: return "Something went wrong. Please try again."
    }
  }

  const handleNextStep = () => {
    if (!name.trim() || name.trim().length < 2) { setError("Please enter a username"); return }
    if (!isValidPhone(phone)) { setError("Please enter a valid WhatsApp number"); return }
    if (password.length < 6) { setError("Password must be at least 6 characters"); return }
    if (password !== confirmPassword) { setError("Passwords do not match"); return }
    if (email && !email.includes("@")) { setError("Please enter a valid email address or leave it blank"); return }
    setError("")
    setStep(2)
  }

  const handleSignup = async () => {
    setError(""); setLoading(true)
    try {
      const fakeEmail = phoneToEmail(phone)
      const result = await createUserWithEmailAndPassword(auth, fakeEmail, password)
      const user = result.user
      const namePart = name.trim().split(" ")[0].toUpperCase().slice(0, 4)
      const uidPart = user.uid.slice(-4).toUpperCase()
      const referralCode_gen = `${namePart}${uidPart}`
      const userData = {
        uid: user.uid,
        name: name.trim(),
        phone: phone.replace(/\D/g, ""),
        email: email.trim() || null,
        authEmail: fakeEmail,
        createdAt: serverTimestamp(),
        lastLogin: serverTimestamp(),
        isPaid: false,
        referralCode: referralCode_gen,
        referralEarnings: 0,
        referralPaidOut: 0,
        referredBy: referrerId || null,
      }
      await setDoc(doc(db, "users", user.uid), userData)
      onAuthDone({ ...userData, uid: user.uid })
    } catch (err) {
      setError(getErrorMessage(err.code))
    }
    setLoading(false)
  }

  const handleLogin = async () => {
    if (!loginInput.trim()) { setError("Please enter your WhatsApp number or email"); return }
    if (!password) { setError("Please enter your password"); return }
    setError(""); setLoading(true)
    try {
      if (isEmail(loginInput)) {
        await signInWithEmailAndPassword(auth, loginInput.trim(), password)
      } else if (isValidPhone(loginInput)) {
        const digits = loginInput.replace(/\D/g, "")
        const fakeEmail = phoneToEmail(loginInput)
        try {
          await signInWithEmailAndPassword(auth, fakeEmail, password)
        } catch (firstErr) {
          if (firstErr.code === "auth/user-not-found" || firstErr.code === "auth/invalid-credential") {
            try {
              const q = query(collection(db, "users"), where("phone", "==", digits))
              const snap = await getDocs(q)
              if (!snap.empty) {
                const data = snap.docs[0].data()
                const realEmail = data.authEmail || data.email
                if (realEmail) {
                  await signInWithEmailAndPassword(auth, realEmail, password)
                } else {
                  setError("Account found but no login email on record. Please log in with your email address.")
                }
              } else {
                setError("No account found with this WhatsApp number. Try logging in with your email instead.")
              }
            } catch (lookupErr) {
              setError(getErrorMessage(lookupErr.code))
            }
          } else {
            setError(getErrorMessage(firstErr.code))
          }
        }
      } else {
        setError("Please enter a valid WhatsApp number or email address")
      }
    } catch (err) {
      setError(getErrorMessage(err.code))
    }
    setLoading(false)
  }

  const handleReset = async () => {
    if (!resetEmail.includes("@")) { setError("Please enter your recovery email address"); return }
    setError(""); setLoading(true)
    try {
      await sendPasswordResetEmail(auth, resetEmail.trim())
      setResetSent(true)
    } catch (err) {
      setError("Could not send reset email. Contact us on WhatsApp if you need help.")
    }
    setLoading(false)
  }

  const inputStyle = {
    width: "100%", padding: "14px 16px",
    border: "1.5px solid var(--border)",
    borderRadius: "var(--radius-md)",
    background: "var(--surface)", fontSize: 15,
    fontFamily: "var(--font-main)", color: "var(--text)",
    outline: "none", boxSizing: "border-box", marginBottom: 12
  }

  const labelStyle = {
    fontSize: 12, fontWeight: 800, color: "var(--text3)",
    textTransform: "uppercase", letterSpacing: "0.07em",
    display: "block", marginBottom: 6
  }

  return (
    <div className="ee-page">
      <header className="ee-header">
        <span className="ee-logo">ExamEdgeNG</span>
        <button className="ee-theme-toggle" onClick={toggleTheme}>
          {dark ? "☀️" : "🌙"}
        </button>
      </header>

      <div className="ee-content">

        {/* ===== RESET PASSWORD ===== */}
        {mode === "reset" && (
          <>
            <div style={{ textAlign: "center", marginBottom: 32, marginTop: 16 }}>
              <div style={{ fontSize: 56, marginBottom: 16 }}>🔑</div>
              <h2 className="ee-title">Reset Password</h2>
              <p className="ee-subtitle">Enter the recovery email you provided when signing up.</p>
            </div>
            {resetSent ? (
              <div style={{
                background: "rgba(34,201,122,0.1)", border: "1px solid rgba(34,201,122,0.3)",
                borderRadius: "var(--radius-md)", padding: "16px", textAlign: "center", marginBottom: 16
              }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>✅</div>
                <p style={{ fontSize: 14, color: "var(--success)", fontWeight: 700, margin: 0 }}>
                  Reset link sent! Check your email.
                </p>
              </div>
            ) : (
              <>
                <label style={labelStyle}>Recovery Email</label>
                <input type="email" value={resetEmail} onChange={e => setResetEmail(e.target.value)}
                  placeholder="your@email.com" style={inputStyle} />
                <div style={{
                  background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.3)",
                  borderRadius: "var(--radius-md)", padding: "12px 14px", marginBottom: 16,
                  fontSize: 12, color: "#92400e", lineHeight: 1.6
                }}>
                  ⚠️ <strong>Didn't add a recovery email?</strong> Contact us and we'll help reset your account.{" "}
                  <a href="https://whatsapp.com/channel/0029Vb7ZQAe90x2qXQY1Rw1K" target="_blank" rel="noreferrer"
                    style={{ color: "var(--primary)", fontWeight: 700, textDecoration: "none" }}>WhatsApp us</a>
                  {" "}or email{" "}
                  <a href="mailto:jce680@gmail.com" style={{ color: "var(--primary)", fontWeight: 700, textDecoration: "none" }}>
                    jce680@gmail.com
                  </a>
                </div>
                {error && <div style={{ color: "var(--accent)", fontSize: 13, marginBottom: 12 }}>{error}</div>}
                <button className="ee-btn ee-btn-primary" onClick={handleReset} disabled={loading}>
                  {loading ? "Sending..." : "Send Reset Link →"}
                </button>
              </>
            )}
            <button onClick={() => { setMode("login"); setResetSent(false); setError(""); setResetEmail("") }} style={{
              background: "none", border: "none", color: "var(--primary)", fontWeight: 700,
              fontSize: 13, cursor: "pointer", fontFamily: "var(--font-main)",
              marginTop: 12, display: "block", width: "100%", textAlign: "center"
            }}>← Back to Login</button>
          </>
        )}

        {/* ===== LOGIN ===== */}
        {mode === "login" && (
          <>
            <div style={{ textAlign: "center", marginBottom: 32, marginTop: 16 }}>
              <picture>
                <source srcSet="/images/logo.webp" type="image/webp" />
                <img src="/images/logo.png" alt="ExamEdgeNG" style={{ width: 100, height: 100, objectFit: "contain", marginBottom: 8 }} />
              </picture>
              <h2 className="ee-title">Welcome Back</h2>
              <p className="ee-subtitle">Log in to continue your exam prep.</p>
            </div>

            <label style={labelStyle}>WhatsApp Number or Email</label>
            <input type="text" value={loginInput} onChange={e => setLoginInput(e.target.value)}
              placeholder="08012345678 or your@email.com" style={inputStyle}
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
                background: "none", border: "none", cursor: "pointer", fontSize: 16, color: "var(--text3)"
              }}>{showPass ? "🙈" : "👁️"}</button>
            </div>

            <button onClick={() => { setMode("reset"); setError("") }} style={{
              background: "none", border: "none", color: "var(--primary)", fontWeight: 700,
              fontSize: 12, cursor: "pointer", fontFamily: "var(--font-main)",
              display: "block", textAlign: "right", width: "100%", marginBottom: 16
            }}>Forgot password?</button>

            {error && (
              <div style={{
                color: "var(--accent)", fontSize: 13, marginBottom: 12,
                background: "rgba(255,107,107,0.1)", padding: "10px 14px",
                borderRadius: "var(--radius-md)", border: "1px solid rgba(255,107,107,0.3)"
              }}>{error}</div>
            )}

            <button className="ee-btn ee-btn-primary" onClick={handleLogin} disabled={loading}>
              {loading ? <><ButtonSpinner />Logging in...</> : "Log In →"}
            </button>

            {/* Sign up CTA — prominent so users don't miss it */}
            <div style={{
              marginTop: 20, background: "var(--surface)",
              border: "2px solid var(--primary)",
              borderRadius: "var(--radius-lg)", padding: "16px", textAlign: "center"
            }}>
              <div style={{ fontSize: 13, color: "var(--text2)", marginBottom: 10 }}>
                Don't have an account yet?
              </div>
              <button onClick={() => { setMode("signup"); setStep(1); setError("") }} style={{
                width: "100%", padding: "13px",
                background: "var(--primary)", color: "#fff",
                border: "none", borderRadius: "var(--radius-md)",
                fontWeight: 800, fontSize: 15, cursor: "pointer",
                fontFamily: "var(--font-main)"
              }}>✨ Create Free Account — Start Preparing</button>
            </div>

            <div style={{
              textAlign: "center", marginTop: 12, padding: "10px 14px",
              borderRadius: "var(--radius-md)",
              background: "var(--surface2)", border: "1px solid var(--border)"
            }}>
              <div style={{ fontSize: 12, color: "var(--text2)", lineHeight: 1.6 }}>
                📱 <strong style={{ color: "var(--text)" }}>Coming soon on</strong> Google Play & App Store
              </div>
              <div style={{ fontSize: 11, color: "var(--text3)", marginTop: 2 }}>
                For now, open <strong>examedgeng.site</strong> in your browser
              </div>
            </div>

            <p style={{ textAlign: "center", fontSize: 12, color: "var(--text3)", marginTop: 10 }}>
              Need help?{" "}
              <a href="mailto:jce680@gmail.com" style={{ color: "var(--primary)", fontWeight: 700, textDecoration: "none" }}>
                Contact us
              </a>
            </p>
          </>
        )}

        {/* ===== SIGNUP STEP 1 ===== */}
        {mode === "signup" && step === 1 && (
          <>
            <div style={{ textAlign: "center", marginBottom: 24, marginTop: 16 }}>
              <picture>
                <source srcSet="/images/logo.webp" type="image/webp" />
                <img src="/images/logo.png" alt="ExamEdgeNG" style={{ width: 80, height: 80, objectFit: "contain", marginBottom: 8 }} />
              </picture>
              <h2 className="ee-title">Create Account</h2>
              <p className="ee-subtitle">Step 1 of 2 — Your details</p>
            </div>

            <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
              {[1, 2].map(s => (
                <div key={s} style={{
                  flex: 1, height: 4, borderRadius: 2,
                  background: s <= step ? "var(--primary)" : "var(--border)"
                }} />
              ))}
            </div>

            <label style={labelStyle}>Username</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)}
              placeholder="e.g. chukwuemeka01" style={inputStyle} />

            <label style={labelStyle}>WhatsApp Number</label>
            <input type="tel" value={phone} onChange={e => setPhone(e.target.value)}
              placeholder="e.g. 08012345678" style={inputStyle} />
            <p style={{ fontSize: 11, color: "var(--text3)", marginTop: -8, marginBottom: 14, lineHeight: 1.5 }}>
              📌 This is your login ID. Use your active WhatsApp number.
            </p>

            <label style={labelStyle}>Password</label>
            <div style={{ position: "relative", marginBottom: 12 }}>
              <input type={showPass ? "text" : "password"} value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="At least 6 characters"
                style={{ ...inputStyle, marginBottom: 0, paddingRight: 48 }}
                onKeyDown={e => e.key === "Enter" && handleNextStep()} />
              <button onClick={() => setShowPass(p => !p)} style={{
                position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)",
                background: "none", border: "none", cursor: "pointer", fontSize: 16, color: "var(--text3)"
              }}>{showPass ? "🙈" : "👁️"}</button>
            </div>

            <label style={labelStyle}>Confirm Password</label>
            <div style={{ position: "relative", marginBottom: 12 }}>
              <input type={showConfirmPass ? "text" : "password"} value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                placeholder="Re-enter your password"
                style={{
                  ...inputStyle, marginBottom: 0, paddingRight: 48,
                  border: confirmPassword && confirmPassword !== password
                    ? "1.5px solid #ef4444"
                    : confirmPassword && confirmPassword === password
                    ? "1.5px solid #22c55e"
                    : "1.5px solid var(--border)"
                }}
                onKeyDown={e => e.key === "Enter" && handleNextStep()} />
              <button onClick={() => setShowConfirmPass(p => !p)} style={{
                position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)",
                background: "none", border: "none", cursor: "pointer", fontSize: 16, color: "var(--text3)"
              }}>{showConfirmPass ? "🙈" : "👁️"}</button>
            </div>

            {confirmPassword && confirmPassword !== password && (
              <p style={{ fontSize: 12, color: "#ef4444", margin: "-8px 0 12px", fontWeight: 600 }}>❌ Passwords do not match</p>
            )}
            {confirmPassword && confirmPassword === password && (
              <p style={{ fontSize: 12, color: "#22c55e", margin: "-8px 0 12px", fontWeight: 600 }}>✓ Passwords match</p>
            )}

            {/* Optional recovery email */}
            <div style={{
              background: "rgba(102,126,234,0.06)",
              border: "1px solid rgba(102,126,234,0.2)",
              borderRadius: "var(--radius-lg)",
              padding: "14px 16px", marginBottom: 16
            }}>
              <label style={{ ...labelStyle, color: "var(--primary)", marginBottom: 4 }}>
                Email Address{" "}
                <span style={{ fontWeight: 600, fontSize: 10, textTransform: "none", letterSpacing: 0, color: "var(--text3)" }}>
                  (Optional)
                </span>
              </label>
              <p style={{ fontSize: 12, color: "var(--text2)", marginBottom: 10, lineHeight: 1.6 }}>
                🔒 <strong>For account recovery only.</strong> We will never use your email for marketing or share it with anyone. Only needed if you forget your password.
              </p>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com (optional)"
                style={{ ...inputStyle, marginBottom: 0, background: "var(--bg)" }} />
            </div>

            {error && (
              <div style={{
                color: "var(--accent)", fontSize: 13, marginBottom: 12,
                background: "rgba(255,107,107,0.1)", padding: "10px 14px",
                borderRadius: "var(--radius-md)", border: "1px solid rgba(255,107,107,0.3)"
              }}>{error}</div>
            )}

            <button className="ee-btn ee-btn-primary" onClick={handleNextStep}>Next →</button>

            <div style={{ textAlign: "center", marginTop: 20, fontSize: 13, color: "var(--text2)" }}>
              Already have an account?{" "}
              <button onClick={() => { setMode("login"); setError("") }} style={{
                background: "none", border: "none", color: "var(--primary)",
                fontWeight: 800, fontSize: 13, cursor: "pointer", fontFamily: "var(--font-main)"
              }}>Log in</button>
            </div>
          </>
        )}

        {/* ===== SIGNUP STEP 2 ===== */}
        {mode === "signup" && step === 2 && (
          <>
            <div style={{ textAlign: "center", marginBottom: 24, marginTop: 16 }}>
              <div style={{ fontSize: 56, marginBottom: 12 }}>🎉</div>
              <h2 className="ee-title">Almost there!</h2>
              <p className="ee-subtitle">Step 2 of 2 — Do you have a referral code?</p>
            </div>

            <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
              {[1, 2].map(s => (
                <div key={s} style={{
                  flex: 1, height: 4, borderRadius: 2,
                  background: s <= step ? "var(--primary)" : "var(--border)"
                }} />
              ))}
            </div>

            <label style={labelStyle}>Referral Code (Optional)</label>
            <div style={{ position: "relative", marginBottom: 4 }}>
              <input
                value={referralCode}
                onChange={e => setReferralCode(e.target.value.toUpperCase())}
                placeholder="Enter a friend's referral code"
                maxLength={8}
                style={{
                  ...inputStyle, marginBottom: 0, paddingRight: 40,
                  border: `1.5px solid ${referralStatus === "valid" ? "#22c55e" : referralStatus === "invalid" ? "#ef4444" : "var(--border)"}`,
                  fontWeight: referralCode ? 700 : 400,
                  letterSpacing: referralCode ? 2 : 0,
                }}
              />
              <span style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", fontSize: 15 }}>
                {checkingReferral ? "⏳" : referralStatus === "valid" ? "✅" : referralStatus === "invalid" ? "❌" : ""}
              </span>
            </div>
            <p style={{
              fontSize: 12, marginBottom: 24,
              color: referralStatus === "valid" ? "#22c55e" : referralStatus === "invalid" ? "#ef4444" : "var(--text3)"
            }}>
              {referralStatus === "valid" ? "✓ Valid code! Your friend will earn when you upgrade." :
               referralStatus === "invalid" ? "Code not found. Leave blank if you don't have one." :
               "If a friend referred you, enter their code here. Otherwise leave blank."}
            </p>

            {/* Free vs Paid breakdown */}
            <div style={{
              border: "1.5px solid rgba(34,201,122,0.4)",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden", marginBottom: 24,
            }}>
              {/* Free tier */}
              <div style={{
                background: "rgba(34,201,122,0.08)",
                padding: "14px 16px",
                borderBottom: "1px solid rgba(34,201,122,0.2)"
              }}>
                <div style={{ fontSize: 13, fontWeight: 800, color: "#15803d", marginBottom: 8 }}>
                  ✅ Your Free Account Includes:
                </div>
                {[
                  "📅 2 years of past questions (2014 & 2015)",
                  "🧪 CBT simulation mode",
                  "📚 Study guides for all topics",
                  "🎓 AI Tutor access",
                ].map((item, i) => (
                  <div key={i} style={{
                    fontSize: 13, color: "#166534", fontWeight: 600,
                    padding: "3px 0", display: "flex", alignItems: "center", gap: 6
                  }}>{item}</div>
                ))}
              </div>
              {/* Paid tier */}
              <div style={{
                background: "rgba(102,126,234,0.06)",
                padding: "14px 16px"
              }}>
                <div style={{ fontSize: 13, fontWeight: 800, color: "var(--primary)", marginBottom: 8 }}>
                  🔒 Upgrade for ₦2,500 to Unlock:
                </div>
                {[
                  "📚 All 20 years of questions (2005–2024)",
                  "🔥 Hot Topics — most repeated questions",
                  "📊 Weak Areas & full progress tracking",
                  "🕐 CBT History — review past attempts",
                ].map((item, i) => (
                  <div key={i} style={{
                    fontSize: 13, color: "var(--text2)", fontWeight: 600,
                    padding: "3px 0", display: "flex", alignItems: "center", gap: 6
                  }}>{item}</div>
                ))}
                <div style={{
                  marginTop: 10, fontSize: 11, color: "var(--text3)",
                  fontWeight: 700, textAlign: "center"
                }}>
                  One-time payment · No subscription · No hidden fees
                </div>
              </div>
            </div>

            {error && (
              <div style={{
                color: "var(--accent)", fontSize: 13, marginBottom: 12,
                background: "rgba(255,107,107,0.1)", padding: "10px 14px",
                borderRadius: "var(--radius-md)", border: "1px solid rgba(255,107,107,0.3)"
              }}>{error}</div>
            )}

            <button className="ee-btn ee-btn-primary" onClick={handleSignup} disabled={loading}>
              {loading ? <><ButtonSpinner />Creating account...</> : "Create Free Account →"}
            </button>

            <button onClick={() => { setStep(1); setError("") }} style={{
              background: "none", border: "none", color: "var(--text3)", fontWeight: 700,
              fontSize: 13, cursor: "pointer", fontFamily: "var(--font-main)",
              marginTop: 12, display: "block", width: "100%", textAlign: "center"
            }}>← Back</button>
          </>
        )}

      </div>
    </div>
  )
}

export default Auth