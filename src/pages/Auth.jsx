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
  doc, setDoc, getDoc, serverTimestamp, collection, query, where, getDocs
} from "firebase/firestore"
import { useTheme } from "../context/ThemeContext"
import { ButtonSpinner } from "../components/LoadingScreen"

const Auth = ({ onAuthDone, onGoToUpgrade }) => {
  const { dark, toggleTheme } = useTheme()
  const [mode, setMode] = useState("login") // login | signup | plan | reset | verify
  const [step, setStep] = useState(1) // signup step: 1=details, 2=referral+plan
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPass, setShowPass] = useState(false)
  const [showConfirmPass, setShowConfirmPass] = useState(false)
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [resetSent, setResetSent] = useState(false)

  // Step 2 fields
  const [referralCode, setReferralCode] = useState("")
  const [referralStatus, setReferralStatus] = useState(null) // null | valid | invalid
  const [referrerId, setReferrerId] = useState(null)
  const [checkingReferral, setCheckingReferral] = useState(false)
  const [chosenPlan, setChosenPlan] = useState(null) // "free" | "paid"
  const [isFreshSignup, setIsFreshSignup] = useState(false)
  const [pendingUserData, setPendingUserData] = useState(null)
  const [checkingVerification, setCheckingVerification] = useState(false)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        if (!user.emailVerified) { setMode("verify"); return }
        // Skip auto-login for fresh signups — let handleCheckVerification handle it
        if (isFreshSignup) return
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
  }, [isFreshSignup])

  // Check referral code with debounce
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

  // Step 1: validate details and go to step 2
  const handleNextStep = () => {
    if (!name.trim() || name.trim().length < 2) { setError("Please enter a username"); return }
    if (!email.includes("@")) { setError("Please enter a valid email address"); return }
    if (password.length < 6) { setError("Password must be at least 6 characters"); return }
    if (password !== confirmPassword) { setError("Passwords do not match"); return }
    setError("")
    setStep(2)
  }

  // Step 2: create account then handle plan choice
  const handleSignup = async () => {
    if (!chosenPlan) { setError("Please choose a plan to continue"); return }
    setError(""); setLoading(true)
    try {
      const result = await createUserWithEmailAndPassword(auth, email.trim(), password)
      const user = result.user
      await sendEmailVerification(user)

      const namePart = name.trim().split(" ")[0].toUpperCase().slice(0, 4)
      const uidPart = user.uid.slice(-4).toUpperCase()
      const referralCode_gen = `${namePart}${uidPart}`

      const userData = {
        uid: user.uid,
        name: name.trim(),
        email: user.email,
        createdAt: serverTimestamp(),
        lastLogin: serverTimestamp(),
        isPaid: false,
        referralCode: referralCode_gen,
        referralEarnings: 0,
        referralPaidOut: 0,
        referredBy: referrerId || null,
      }
      await setDoc(doc(db, "users", user.uid), userData)

      setPendingUserData({ ...userData, uid: user.uid, wantsPaid: chosenPlan === "paid" })
      setIsFreshSignup(true)
      setMode("verify")
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
          const data = userDoc.data()
          onAuthDone(data)
          if (pendingUserData?.wantsPaid && onGoToUpgrade) {
            setTimeout(() => onGoToUpgrade(), 500)
          }
        }
      } else {
        setError("Email not verified yet. Please check your inbox and click the link.")
      }
    } catch {
      setError("Could not check verification. Try again.")
    }
    setCheckingVerification(false)
  }

  const handleResendVerification = async () => {
    setError("")
    try {
      await sendEmailVerification(auth.currentUser)
      setError("✅ Verification email resent! Check your inbox.")
    } catch {
      setError("Could not resend email. Try again later.")
    }
  }

  const handleLogin = async () => {
    if (!email.includes("@")) { setError("Please enter a valid email address"); return }
    if (!password) { setError("Please enter your password"); return }
    setError(""); setLoading(true)
    try {
      const result = await signInWithEmailAndPassword(auth, email.trim(), password)
      if (!result.user.emailVerified) { setMode("verify") }
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

        {/* ===== VERIFY EMAIL ===== */}
        {mode === "verify" && (
          <>
            <div style={{ textAlign: "center", marginBottom: 24, marginTop: 16 }}>
              <div style={{ fontSize: 64, marginBottom: 16 }}>📩</div>
              <h2 className="ee-title">Check your email</h2>
              <p className="ee-subtitle">
                We sent a verification link to <strong>{auth.currentUser?.email}</strong>
              </p>
            </div>

            <div style={{
              background: "var(--surface)", border: "1px solid var(--border)",
              borderRadius: "var(--radius-lg)", padding: "16px 20px", marginBottom: 16,
            }}>
              {[
                { step: "1", text: "Open your email app — Gmail, Yahoo or whatever you use" },
                { step: "2", text: "Look for an email with subject: Verify your ExamEdgeNG account" },
                { step: "3", text: "Open the email and click the big verification button or link inside" },
                { step: "4", text: "Come back here and tap the green button below" },
              ].map((item, i) => (
                <div key={i} style={{
                  display: "flex", gap: 12, alignItems: "flex-start",
                  paddingBottom: i < 3 ? 12 : 0, marginBottom: i < 3 ? 12 : 0,
                  borderBottom: i < 3 ? "1px solid var(--border)" : "none"
                }}>
                  <div style={{
                    width: 28, height: 28, borderRadius: "50%",
                    background: "var(--primary)", color: "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 13, fontWeight: 800, flexShrink: 0
                  }}>{item.step}</div>
                  <p style={{ fontSize: 14, color: "var(--text)", lineHeight: 1.6, margin: 0 }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div style={{
              background: "rgba(255,179,71,0.12)", border: "1px solid rgba(255,179,71,0.4)",
              borderRadius: "var(--radius-md)", padding: "14px 16px", marginBottom: 16,
            }}>
              <p style={{ fontSize: 14, color: "#7a4500", lineHeight: 1.7, margin: 0 }}>
                ⚠️ <strong>Can't find the email?</strong> Check your <strong>Spam</strong> or <strong>Junk</strong> folder.
                Open it, find the email from ExamEdgeNG and click the link there.
                <br /><br />
                Still can't find it? Tap <strong>"Resend verification email"</strong> below.
              </p>
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

            <button className="ee-btn ee-btn-primary" onClick={handleCheckVerification} disabled={checkingVerification}>
              {checkingVerification ? "Checking..." : "✅ I have verified my email"}
            </button>
            <button onClick={handleResendVerification} style={{
              width: "100%", padding: "12px", background: "none",
              border: "1px solid var(--border)", borderRadius: "var(--radius-md)",
              marginTop: 10, fontSize: 13, fontWeight: 700, color: "var(--text2)",
              cursor: "pointer", fontFamily: "var(--font-main)"
            }}>📨 Resend verification email</button>
            <button onClick={async () => { await signOut(auth); setMode("login"); setError("") }} style={{
              width: "100%", padding: "10px", background: "none", border: "none",
              fontSize: 12, fontWeight: 700, color: "var(--text3)",
              cursor: "pointer", fontFamily: "var(--font-main)", marginTop: 8
            }}>← Use a different account</button>
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
              <div style={{ background: "rgba(34,201,122,0.1)", border: "1px solid rgba(34,201,122,0.3)",
                borderRadius: "var(--radius-md)", padding: "16px", textAlign: "center", marginBottom: 16 }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>✅</div>
                <p style={{ fontSize: 14, color: "var(--success)", fontWeight: 700, margin: 0 }}>Reset link sent! Check your email.</p>
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
            <button onClick={() => { setMode("login"); setResetSent(false); setError("") }} style={{
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
              <img src="/images/logo.png" alt="ExamEdgeNG" style={{ width: 100, height: 100, objectFit: "contain", marginBottom: 8 }} />
              <h2 className="ee-title">Welcome Back</h2>
              <p className="ee-subtitle">Log in to continue your exam prep.</p>
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
                background: "none", border: "none", cursor: "pointer", fontSize: 16, color: "var(--text3)"
              }}>{showPass ? "🙈" : "👁️"}</button>
            </div>

            <button onClick={() => { setMode("reset"); setError("") }} style={{
              background: "none", border: "none", color: "var(--primary)", fontWeight: 700,
              fontSize: 12, cursor: "pointer", fontFamily: "var(--font-main)",
              display: "block", textAlign: "right", width: "100%", marginBottom: 16
            }}>Forgot password?</button>

            {error && <div style={{ color: "var(--accent)", fontSize: 13, marginBottom: 12,
              background: "rgba(255,107,107,0.1)", padding: "10px 14px",
              borderRadius: "var(--radius-md)", border: "1px solid rgba(255,107,107,0.3)" }}>{error}</div>}

            <button className="ee-btn ee-btn-primary" onClick={handleLogin} disabled={loading}>
              {loading ? <><ButtonSpinner />Logging in...</> : "Log In →"}
            </button>

            <div style={{ textAlign: "center", marginTop: 20, fontSize: 13, color: "var(--text2)" }}>
              Don't have an account?{" "}
              <button onClick={() => { setMode("signup"); setStep(1); setError("") }} style={{
                background: "none", border: "none", color: "var(--primary)",
                fontWeight: 800, fontSize: 13, cursor: "pointer", fontFamily: "var(--font-main)"
              }}>Sign up free</button>
            </div>
          </>
        )}

        {/* ===== SIGNUP STEP 1: Details ===== */}
        {mode === "signup" && step === 1 && (
          <>
            <div style={{ textAlign: "center", marginBottom: 24, marginTop: 16 }}>
              <img src="/images/logo.png" alt="ExamEdgeNG" style={{ width: 80, height: 80, objectFit: "contain", marginBottom: 8 }} />
              <h2 className="ee-title">Create Account</h2>
              <p className="ee-subtitle">Step 1 of 2 — Your details</p>
            </div>

            {/* Step indicator */}
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

            <label style={labelStyle}>Email Address</label>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com" style={inputStyle} />

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
              <p style={{ fontSize: 12, color: "#ef4444", margin: "-8px 0 12px", fontWeight: 600 }}>
                ❌ Passwords do not match
              </p>
            )}
            {confirmPassword && confirmPassword === password && (
              <p style={{ fontSize: 12, color: "#22c55e", margin: "-8px 0 12px", fontWeight: 600 }}>
                ✓ Passwords match
              </p>
            )}

            {error && <div style={{ color: "var(--accent)", fontSize: 13, marginBottom: 12,
              background: "rgba(255,107,107,0.1)", padding: "10px 14px",
              borderRadius: "var(--radius-md)", border: "1px solid rgba(255,107,107,0.3)" }}>{error}</div>}

            <button className="ee-btn ee-btn-primary" onClick={handleNextStep}>
              Next →
            </button>

            <div style={{ textAlign: "center", marginTop: 20, fontSize: 13, color: "var(--text2)" }}>
              Already have an account?{" "}
              <button onClick={() => { setMode("login"); setError("") }} style={{
                background: "none", border: "none", color: "var(--primary)",
                fontWeight: 800, fontSize: 13, cursor: "pointer", fontFamily: "var(--font-main)"
              }}>Log in</button>
            </div>
          </>
        )}

        {/* ===== SIGNUP STEP 2: Referral + Plan ===== */}
        {mode === "signup" && step === 2 && (
          <>
            <div style={{ textAlign: "center", marginBottom: 24, marginTop: 16 }}>
              <h2 className="ee-title">Almost there!</h2>
              <p className="ee-subtitle">Step 2 of 2 — Referral code & choose your plan</p>
            </div>

            {/* Step indicator */}
            <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
              {[1, 2].map(s => (
                <div key={s} style={{
                  flex: 1, height: 4, borderRadius: 2,
                  background: s <= step ? "var(--primary)" : "var(--border)"
                }} />
              ))}
            </div>

            {/* Referral code */}
            <label style={labelStyle}>Referral Code (Optional)</label>
            <div style={{ position: "relative", marginBottom: 4 }}>
              <input
                value={referralCode}
                onChange={e => setReferralCode(e.target.value.toUpperCase())}
                placeholder="Enter a friend's referral code"
                maxLength={8}
                style={{
                  ...inputStyle, marginBottom: 0,
                  paddingRight: 40,
                  border: `1.5px solid ${referralStatus === "valid" ? "#22c55e" : referralStatus === "invalid" ? "#ef4444" : "var(--border)"}`,
                  fontWeight: referralCode ? 700 : 400,
                  letterSpacing: referralCode ? 2 : 0,
                }}
              />
              <span style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", fontSize: 15 }}>
                {checkingReferral ? "⏳" : referralStatus === "valid" ? "✅" : referralStatus === "invalid" ? "❌" : ""}
              </span>
            </div>
            <p style={{ fontSize: 12, color: referralStatus === "valid" ? "#22c55e" : referralStatus === "invalid" ? "#ef4444" : "var(--text3)", marginBottom: 20 }}>
              {referralStatus === "valid" ? "✓ Valid code! Your friend will earn ₦500 when you pay." :
               referralStatus === "invalid" ? "Code not found. Leave blank if you don't have one." :
               "If a friend referred you, enter their code here."}
            </p>

            {/* Plan selection */}
            <label style={labelStyle}>Choose Your Plan</label>

            {/* Free plan */}
            <div
              onClick={() => setChosenPlan("free")}
              style={{
                border: `2px solid ${chosenPlan === "free" ? "var(--primary)" : "var(--border)"}`,
                borderRadius: "var(--radius-lg)",
                padding: 16, marginBottom: 12, cursor: "pointer",
                background: chosenPlan === "free" ? "var(--primary-light, rgba(102,126,234,0.08))" : "var(--surface)",
                transition: "all 0.15s",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 20, height: 20, borderRadius: 10,
                  border: `2px solid ${chosenPlan === "free" ? "var(--primary)" : "var(--border)"}`,
                  background: chosenPlan === "free" ? "var(--primary)" : "transparent",
                  flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {chosenPlan === "free" && <div style={{ width: 8, height: 8, borderRadius: 4, background: "#fff" }} />}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 15, fontWeight: 800, color: "var(--text)" }}>
                    Free Plan <span style={{ fontSize: 13, color: "#22c55e", fontWeight: 700 }}>— ₦0</span>
                  </div>
                  <div style={{ fontSize: 12, color: "var(--text3)", marginTop: 4, lineHeight: 1.5 }}>
                    ✓ 2 years of questions (2014 & 2015){"\n"}
                    ✓ 5 questions per topic in Study Mode{"\n"}
                    ✓ Basic CBT practice{"\n"}
                    ✗ Hot Topics, Weak Areas, CBT History locked
                  </div>
                </div>
              </div>
            </div>

            {/* Paid plan */}
            <div
              onClick={() => setChosenPlan("paid")}
              style={{
                border: `2px solid ${chosenPlan === "paid" ? "#667eea" : "var(--border)"}`,
                borderRadius: "var(--radius-lg)",
                padding: 16, marginBottom: 20, cursor: "pointer",
                background: chosenPlan === "paid" ? "rgba(102,126,234,0.08)" : "var(--surface)",
                position: "relative", overflow: "hidden",
                transition: "all 0.15s",
              }}
            >
              {/* Best value badge */}
              <div style={{
                position: "absolute", top: 0, right: 0,
                background: "linear-gradient(135deg, #667eea, #764ba2)",
                color: "#fff", fontSize: 10, fontWeight: 800,
                padding: "4px 10px", borderRadius: "0 0 0 8px",
              }}>⭐ BEST VALUE</div>

              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 20, height: 20, borderRadius: 10,
                  border: `2px solid ${chosenPlan === "paid" ? "#667eea" : "var(--border)"}`,
                  background: chosenPlan === "paid" ? "#667eea" : "transparent",
                  flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {chosenPlan === "paid" && <div style={{ width: 8, height: 8, borderRadius: 4, background: "#fff" }} />}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 15, fontWeight: 800, color: "var(--text)" }}>
                    Full Access <span style={{ fontSize: 13, color: "#667eea", fontWeight: 700 }}>— ₦2,500</span>
                    <span style={{ fontSize: 11, color: "#888", marginLeft: 6, textDecoration: "line-through" }}>₦5,000</span>
                  </div>
                  <div style={{ fontSize: 12, color: "var(--text3)", marginTop: 4, lineHeight: 1.5 }}>
                    ✓ All 20 years of questions (2005–2024){"\n"}
                    ✓ Unlimited Study Mode{"\n"}
                    ✓ Hot Topics & Weak Areas{"\n"}
                    ✓ CBT History & Full Progress{"\n"}
                    ✓ One-time payment, no subscription
                  </div>
                </div>
              </div>
            </div>

            {error && <div style={{ color: "var(--accent)", fontSize: 13, marginBottom: 12,
              background: "rgba(255,107,107,0.1)", padding: "10px 14px",
              borderRadius: "var(--radius-md)", border: "1px solid rgba(255,107,107,0.3)" }}>{error}</div>}

            <button className="ee-btn ee-btn-primary" onClick={handleSignup} disabled={loading || !chosenPlan}>
              {loading ? <><ButtonSpinner />Creating account...</> : chosenPlan === "paid" ? "Create Account & Pay ₦2,500 🚀" : "Create Free Account →"}
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