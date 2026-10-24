import { useState, useEffect } from "react"
import { collection, query, where, getDocs, updateDoc, doc } from "firebase/firestore"
import { db } from "../firebase"
import { getReferralLink } from "../utils/referrals"
import { REFERRAL_PAYOUT_PROMOTER } from "../utils/appConfig"

const formatDate = (ts) => {
  if (!ts) return "—"
  try {
    const d = ts?.toDate ? ts.toDate() : new Date(ts)
    if (isNaN(d.getTime())) return "—"
    return d.toLocaleDateString("en-NG", { day: "numeric", month: "short", year: "numeric" })
  } catch (e) { return "—" }
}

const toMillis = (ts) => {
  if (!ts) return 0
  const d = ts?.toDate ? ts.toDate() : new Date(ts)
  return isNaN(d.getTime()) ? 0 : d.getTime()
}

export default function PromoterDashboard({ onBack, onNavigate, authUser, userData }) {
  const [referrals, setReferrals] = useState([])
  const [payouts, setPayouts] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState("")
  const [copied, setCopied] = useState(false)

  // Bank details (where the Sadmin sends your money)
  const [editingBank, setEditingBank] = useState(false)
  const [bankName, setBankName] = useState(userData?.bankName || "")
  const [accountNumber, setAccountNumber] = useState(userData?.bankAccountNumber || "")
  const [accountName, setAccountName] = useState(userData?.bankAccountName || "")
  const [savingBank, setSavingBank] = useState(false)
  const [bankError, setBankError] = useState("")

  const uid = authUser?.uid
  const isPromoter = userData?.role === "promoter"

  useEffect(() => {
    if (!uid) return
    const load = async () => {
      setLoading(true)
      setLoadError("")
      try {
        const [rSnap, pSnap] = await Promise.all([
          getDocs(query(collection(db, "referrals"), where("referrerId", "==", uid))),
          getDocs(query(collection(db, "payouts"), where("userId", "==", uid))),
        ])
        const r = rSnap.docs.map(d => ({ id: d.id, ...d.data() }))
        r.sort((a, b) => toMillis(b.createdAt) - toMillis(a.createdAt))
        setReferrals(r)
        const p = pSnap.docs.map(d => ({ id: d.id, ...d.data() }))
        p.sort((a, b) => toMillis(b.paidAt) - toMillis(a.paidAt))
        setPayouts(p)
      } catch (e) {
        console.error(e)
        setLoadError("Could not load your referrals. Check your connection and try again.")
      }
      setLoading(false)
    }
    load()
  }, [uid])

  const code = userData?.referralCode
  const link = code ? getReferralLink(code) : ""
  const earned = userData?.referralEarnings || 0
  const paidOut = userData?.referralPaidOut || 0
  const pending = Math.max(0, earned - paidOut)
  const signedUp = referrals.length
  const paidCount = referrals.filter(r => r.isPaid).length

  const copyLink = () => {
    if (!link) return
    navigator.clipboard.writeText(link)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareWhatsApp = () => {
    if (!link) return
    const text = encodeURIComponent(
      `🎓 Prepare for JAMB and Post-UTME with ExamEdgeNG: 10,000+ past questions, timed CBT practice and more.\n\nSign up free with my link (my code is filled in for you):\n\n${link}`
    )
    window.open(`https://wa.me/?text=${text}`, "_blank")
  }

  const saveBank = async () => {
    const digits = accountNumber.replace(/\D/g, "")
    if (!bankName.trim() || !accountName.trim() || digits.length !== 10) {
      setBankError("Fill in all three fields. The account number must be 10 digits.")
      return
    }
    setSavingBank(true); setBankError("")
    try {
      await updateDoc(doc(db, "users", uid), {
        bankName: bankName.trim(),
        bankAccountNumber: digits,
        bankAccountName: accountName.trim(),
      })
      setAccountNumber(digits)
      setEditingBank(false)
    } catch (e) {
      setBankError("Could not save. Please try again.")
    }
    setSavingBank(false)
  }

  const inputStyle = {
    width: "100%", padding: "12px 14px", marginBottom: 10,
    border: "1.5px solid var(--border)", borderRadius: "var(--radius-md)",
    background: "var(--surface)", fontSize: 14,
    fontFamily: "var(--font-main)", color: "var(--text)",
    outline: "none", boxSizing: "border-box",
  }

  if (!isPromoter) {
    return (
      <div className="ee-page">
        <header className="ee-header">
          <button className="ee-back-btn" onClick={onBack}>← Back</button>
          <span style={{ fontWeight: 800, fontSize: 15 }}>📣 Promoter</span>
          <span style={{ width: 60 }} />
        </header>
        <div className="ee-content">
          <div className="ee-empty">
            <span className="ee-empty-icon">🔒</span>
            <p style={{ fontWeight: 700, color: "var(--text)" }}>This page is for promoters</p>
            <p style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.6 }}>
              Want to join the publicity team and earn ₦{REFERRAL_PAYOUT_PROMOTER} for every student who signs up with your link and pays?
              Contact us in Settings → Contact Support.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="ee-page">
      <header className="ee-header">
        <button className="ee-back-btn" onClick={onBack}>← Back</button>
        <span style={{ fontWeight: 800, fontSize: 15 }}>📣 Promoter</span>
        <span style={{ width: 60 }} />
      </header>

      <div className="ee-content">

        {/* ── EARNINGS ── */}
        <div style={{
          background: "linear-gradient(135deg, #10b981, #059669)",
          borderRadius: "var(--radius-xl)", padding: "20px", marginBottom: 16, color: "#fff"
        }}>
          <div style={{ fontSize: 12, fontWeight: 700, opacity: 0.85, marginBottom: 4, letterSpacing: 1 }}>
            💰 YOU ARE OWED
          </div>
          <div style={{ fontSize: 36, fontWeight: 900, marginBottom: 12 }}>₦{pending.toLocaleString()}</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: "var(--radius-md)", padding: "10px 12px" }}>
              <div style={{ fontSize: 16, fontWeight: 800 }}>₦{earned.toLocaleString()}</div>
              <div style={{ fontSize: 11, opacity: 0.85 }}>Total earned</div>
            </div>
            <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: "var(--radius-md)", padding: "10px 12px" }}>
              <div style={{ fontSize: 16, fontWeight: 800 }}>₦{paidOut.toLocaleString()}</div>
              <div style={{ fontSize: 11, opacity: 0.85 }}>Already paid to you</div>
            </div>
          </div>
          <div style={{ fontSize: 12, opacity: 0.9, marginTop: 12, lineHeight: 1.5 }}>
            You earn <strong>₦{REFERRAL_PAYOUT_PROMOTER}</strong> for every student who signs up with your code and pays for Full Access.
          </div>
        </div>

        {/* ── SHARE LINK ── */}
        <div style={{
          background: "linear-gradient(135deg, #1e293b, #334155)",
          borderRadius: "var(--radius-xl)", padding: "18px", marginBottom: 16, color: "#fff"
        }}>
          <div style={{ fontSize: 11, fontWeight: 700, opacity: 0.7, marginBottom: 4, letterSpacing: 1 }}>
            🔗 YOUR REFERRAL CODE
          </div>
          <div style={{ fontSize: 28, fontWeight: 900, letterSpacing: "0.15em", color: "#a5f3fc", marginBottom: 10 }}>
            {code || "—"}
          </div>
          <div style={{
            fontSize: 12, background: "rgba(255,255,255,0.1)", borderRadius: "var(--radius-md)",
            padding: "8px 10px", marginBottom: 12, wordBreak: "break-all", opacity: 0.9
          }}>
            {link || "Your link will appear here"}
          </div>
          <div style={{ fontSize: 11, opacity: 0.75, marginBottom: 12, lineHeight: 1.5 }}>
            When a student opens this link, your code is filled in for them automatically.
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={copyLink} style={{
              flex: 1, padding: "12px", background: "rgba(255,255,255,0.12)", color: "#fff",
              border: "1px solid rgba(255,255,255,0.2)", borderRadius: "var(--radius-md)",
              fontWeight: 700, cursor: "pointer", fontSize: 13, fontFamily: "var(--font-main)"
            }}>{copied ? "✅ Copied!" : "📋 Copy link"}</button>
            <button onClick={shareWhatsApp} style={{
              flex: 1, padding: "12px", background: "#25d366", color: "#fff",
              border: "none", borderRadius: "var(--radius-md)",
              fontWeight: 700, cursor: "pointer", fontSize: 13, fontFamily: "var(--font-main)"
            }}>💬 Share on WhatsApp</button>
          </div>
        </div>

        {/* ── BANK DETAILS ── */}
        <div style={{
          background: userData?.bankAccountNumber ? "var(--surface)" : "rgba(245,158,11,0.07)",
          border: userData?.bankAccountNumber ? "1px solid var(--border)" : "1px solid rgba(245,158,11,0.3)",
          borderRadius: "var(--radius-lg)", padding: "16px", marginBottom: 16
        }}>
          <div style={{ fontSize: 13, fontWeight: 800, color: "var(--text)", marginBottom: 8 }}>🏦 Where we send your money</div>
          {!editingBank ? (
            <>
              {userData?.bankAccountNumber ? (
                <div style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.7, marginBottom: 10 }}>
                  {userData.bankAccountName} · {userData.bankName}<br />{userData.bankAccountNumber}
                </div>
              ) : (
                <div style={{ fontSize: 12, color: "#92400e", marginBottom: 10 }}>Add your bank account so you can be paid.</div>
              )}
              <button onClick={() => setEditingBank(true)} style={{
                padding: "9px 14px", background: "var(--primary)", color: "#fff", border: "none",
                borderRadius: "var(--radius-sm)", fontSize: 12, fontWeight: 800, cursor: "pointer", fontFamily: "var(--font-main)"
              }}>{userData?.bankAccountNumber ? "Edit details" : "Add bank account"}</button>
            </>
          ) : (
            <>
              <input style={inputStyle} placeholder="Account name" value={accountName} onChange={e => setAccountName(e.target.value)} />
              <input style={inputStyle} placeholder="Bank name (e.g. GTBank)" value={bankName} onChange={e => setBankName(e.target.value)} />
              <input style={inputStyle} placeholder="10-digit account number" maxLength={10} value={accountNumber} onChange={e => setAccountNumber(e.target.value)} />
              {bankError && <p style={{ fontSize: 12, color: "var(--accent)", margin: "0 0 10px" }}>{bankError}</p>}
              <div style={{ display: "flex", gap: 8 }}>
                <button className="ee-btn ee-btn-primary" onClick={saveBank} disabled={savingBank} style={{ flex: 1, padding: "10px" }}>
                  {savingBank ? "Saving..." : "Save"}
                </button>
                <button className="ee-btn ee-btn-secondary" onClick={() => { setEditingBank(false); setBankError("") }} style={{ flex: 1, padding: "10px" }}>
                  Cancel
                </button>
              </div>
            </>
          )}
        </div>

        {/* ── COUNTS ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
          <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "14px", textAlign: "center" }}>
            <div style={{ fontSize: 26, fontWeight: 900, color: "var(--primary)" }}>{signedUp}</div>
            <div style={{ fontSize: 11, color: "var(--text3)", marginTop: 2 }}>Signed up with your code</div>
          </div>
          <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)", padding: "14px", textAlign: "center" }}>
            <div style={{ fontSize: 26, fontWeight: 900, color: "#10b981" }}>{paidCount}</div>
            <div style={{ fontSize: 11, color: "var(--text3)", marginTop: 2 }}>Have paid</div>
          </div>
        </div>

        {/* ── REFERRED STUDENTS ── */}
        <div style={{ fontSize: 13, fontWeight: 800, color: "var(--text)", marginBottom: 10 }}>👥 Your referrals</div>

        {loading ? (
          <div style={{ textAlign: "center", padding: "24px 0", color: "var(--text3)", fontSize: 13 }}>Loading...</div>
        ) : loadError ? (
          <div style={{ color: "var(--accent)", fontSize: 13, padding: "12px 0" }}>{loadError}</div>
        ) : referrals.length === 0 ? (
          <div style={{
            background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-lg)",
            padding: "24px 16px", textAlign: "center", marginBottom: 16
          }}>
            <div style={{ fontSize: 32, marginBottom: 8 }}>📣</div>
            <div style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.6 }}>
              Nobody has signed up with your code yet. Share your link above to get started.
            </div>
          </div>
        ) : (
          <div style={{ marginBottom: 16 }}>
            {referrals.map(r => (
              <div key={r.id} style={{
                display: "flex", alignItems: "center", gap: 12,
                background: r.isPaid ? "rgba(16,185,129,0.06)" : "var(--surface)",
                border: r.isPaid ? "1px solid rgba(16,185,129,0.25)" : "1px solid var(--border)",
                borderRadius: "var(--radius-md)", padding: "12px 14px", marginBottom: 8
              }}>
                <div style={{
                  width: 38, height: 38, borderRadius: "50%", flexShrink: 0,
                  background: r.isPaid ? "rgba(16,185,129,0.15)" : "var(--surface2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 16, fontWeight: 800, color: r.isPaid ? "#059669" : "var(--text3)"
                }}>{r.name?.[0]?.toUpperCase() || "?"}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 800, color: "var(--text)" }}>{r.name || "Student"}</div>
                  <div style={{ fontSize: 11, color: "var(--text3)" }}>
                    Joined {formatDate(r.createdAt)}{r.isPaid && r.paidAt ? ` · Paid ${formatDate(r.paidAt)}` : ""}
                  </div>
                </div>
                {r.isPaid ? (
                  <div style={{
                    fontSize: 12, fontWeight: 900, color: "#10b981", background: "rgba(16,185,129,0.1)",
                    padding: "4px 10px", borderRadius: 20, border: "1px solid rgba(16,185,129,0.3)", flexShrink: 0
                  }}>
                    {r.amountEarned ? `+₦${Number(r.amountEarned).toLocaleString()}` : "Paid"}
                  </div>
                ) : (
                  <div style={{
                    fontSize: 11, fontWeight: 700, color: "var(--text3)", background: "var(--surface2)",
                    padding: "4px 10px", borderRadius: 20, flexShrink: 0
                  }}>Not paid yet</div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ── PAYMENT HISTORY ── */}
        <div style={{ fontSize: 13, fontWeight: 800, color: "var(--text)", marginBottom: 10 }}>💸 Payments you've received</div>
        {payouts.length === 0 ? (
          <div style={{ fontSize: 12, color: "var(--text3)", marginBottom: 24 }}>No payments yet. They will show here once you've been paid.</div>
        ) : (
          <div style={{ marginBottom: 24 }}>
            {payouts.map(p => (
              <div key={p.id} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                background: "var(--surface)", border: "1px solid var(--border)",
                borderRadius: "var(--radius-md)", padding: "12px 14px", marginBottom: 8
              }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "var(--text)" }}>{p.note || "Payout"}</div>
                  <div style={{ fontSize: 11, color: "var(--text3)" }}>{formatDate(p.paidAt)}</div>
                </div>
                <div style={{ fontSize: 14, fontWeight: 900, color: "#10b981" }}>₦{Number(p.amount || 0).toLocaleString()}</div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  )
}
