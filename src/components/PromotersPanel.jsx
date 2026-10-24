import { useState, useEffect } from "react"
import {
  collection, getDocs, doc, setDoc, writeBatch, increment, serverTimestamp
} from "firebase/firestore"
import { db } from "../firebase"
import { REFERRAL_PAYOUT_PROMOTER, REFERRAL_PAYOUT_USER } from "../utils/appConfig"

const FREE_REFS = ["manual_admin", "free_unlock"]

const fmtDate = (ts) => {
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

// Sadmin-only. Shows every promoter, who signed up under them, who has paid, and what you owe.
export default function PromotersPanel({ users, setActionMsg, setActionError, refreshUsers }) {
  const [referrals, setReferrals] = useState([])
  const [payouts, setPayouts] = useState([])
  const [loading, setLoading] = useState(true)
  const [open, setOpen] = useState(null)
  const [busy, setBusy] = useState(false)
  const [syncing, setSyncing] = useState(false)

  const load = async () => {
    setLoading(true)
    try {
      const [rSnap, pSnap] = await Promise.all([
        getDocs(collection(db, "referrals")),
        getDocs(collection(db, "payouts")),
      ])
      setReferrals(rSnap.docs.map(d => ({ id: d.id, ...d.data() })))
      const ps = pSnap.docs.map(d => ({ id: d.id, ...d.data() }))
      ps.sort((a, b) => toMillis(b.paidAt) - toMillis(a.paidAt))
      setPayouts(ps)
    } catch (e) {
      console.error(e)
      setActionError("Failed to load promoter data: " + (e.code || e.message))
    }
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  const promoters = users.filter(u => u.role === "promoter")

  // Mark everything you owe this promoter as paid. Their balance goes to ₦0 and a payment record is saved.
  const payOut = async (p) => {
    const owed = (p.referralEarnings || 0) - (p.referralPaidOut || 0)
    if (owed <= 0) return
    if (!window.confirm(`Mark ₦${owed.toLocaleString()} as paid to ${p.name}?\n\nOnly do this after you have actually sent the money.`)) return
    setBusy(true)
    try {
      const batch = writeBatch(db)
      batch.update(doc(db, "users", p.id), {
        referralPaidOut: increment(owed),
        referralPaidOutAt: new Date().toISOString(),
      })
      batch.set(doc(collection(db, "payouts")), {
        userId: p.id,
        name: p.name || "",
        amount: owed,
        paidAt: new Date().toISOString(),
        note: "Promoter payout",
      })
      await batch.commit()
      setActionMsg(`✅ ₦${owed.toLocaleString()} marked as paid to ${p.name}`)
      await load()
      refreshUsers()
    } catch (e) {
      console.error(e)
      setActionError("Failed to record payout: " + (e.code || e.message))
    }
    setBusy(false)
  }

  // One-time catch-up for accounts created before promoters existed:
  // makes their referral codes usable at signup and creates the small referral records.
  const syncAll = async () => {
    if (!window.confirm("Sync referral data for existing accounts?\n\nThis is safe to run more than once. It only adds missing records.")) return
    setSyncing(true)
    try {
      const existing = new Set(referrals.map(r => r.id))
      const ops = []

      users.forEach(u => {
        if (u.referralCode) {
          ops.push({ ref: doc(db, "referralCodes", u.referralCode), data: { uid: u.id, createdAt: serverTimestamp() } })
        }
        if (u.referredBy && !existing.has(u.id)) {
          const paidReal = !!(u.isPaid && u.paymentRef && !FREE_REFS.includes(u.paymentRef))
          const referrer = users.find(x => x.id === u.referredBy)
          const rate = referrer?.role === "promoter" ? REFERRAL_PAYOUT_PROMOTER : REFERRAL_PAYOUT_USER
          ops.push({
            ref: doc(db, "referrals", u.id),
            data: {
              referrerId: u.referredBy,
              name: u.name || "Student",
              createdAt: u.createdAt || serverTimestamp(),
              isPaid: paidReal,
              ...(paidReal ? { paidAt: u.paidAt || null } : {}),
              ...(paidReal && u.referralCredited ? { amountEarned: rate } : {}),
            },
          })
        }
      })

      // A batch holds at most 500 writes, so send them in chunks
      for (let i = 0; i < ops.length; i += 400) {
        const batch = writeBatch(db)
        ops.slice(i, i + 400).forEach(op => batch.set(op.ref, op.data, { merge: true }))
        await batch.commit()
      }
      setActionMsg(`✅ Sync done (${ops.length} records checked)`)
      await load()
    } catch (e) {
      console.error(e)
      setActionError("Sync failed: " + (e.code || e.message))
    }
    setSyncing(false)
  }

  const totalOwed = promoters.reduce((s, p) => s + Math.max(0, (p.referralEarnings || 0) - (p.referralPaidOut || 0)), 0)

  return (
    <>
      <div style={{
        background: "var(--surface)", border: "1.5px solid var(--border)",
        borderRadius: "var(--radius-lg)", padding: "14px 16px", marginBottom: 16
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
          <div>
            <div style={{ fontSize: 14, fontWeight: 800, color: "var(--text)" }}>📣 Promoters ({promoters.length})</div>
            <div style={{ fontSize: 11, color: "var(--text3)", marginTop: 2 }}>
              They earn ₦{REFERRAL_PAYOUT_PROMOTER} per referral who pays
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 18, fontWeight: 900, color: totalOwed > 0 ? "#dc2626" : "#15803d" }}>₦{totalOwed.toLocaleString()}</div>
            <div style={{ fontSize: 10, color: "var(--text3)" }}>you owe in total</div>
          </div>
        </div>
        <div style={{ fontSize: 11, color: "var(--text3)", marginTop: 10, lineHeight: 1.6 }}>
          To add a promoter: open the <strong>Users</strong> tab, tap the person, then tap <strong>Make Promoter</strong>.
        </div>
        <button onClick={syncAll} disabled={syncing || loading} style={{
          marginTop: 10, padding: "8px 12px", background: "var(--surface2)", color: "var(--text2)",
          border: "1px solid var(--border)", borderRadius: "var(--radius-md)", fontSize: 11, fontWeight: 700,
          cursor: syncing ? "not-allowed" : "pointer", fontFamily: "var(--font-main)"
        }}>{syncing ? "Syncing..." : "🔄 Sync referral data (run once after updating)"}</button>
      </div>

      {loading ? (
        <div style={{ textAlign: "center", padding: "30px 0", color: "var(--text3)" }}>Loading promoters...</div>
      ) : promoters.length === 0 ? (
        <div className="ee-empty"><span className="ee-empty-icon">📣</span><p>No promoters yet</p></div>
      ) : (
        promoters.map(p => {
          const mine = referrals
            .filter(r => r.referrerId === p.id)
            .sort((a, b) => toMillis(b.createdAt) - toMillis(a.createdAt))
          const paidCount = mine.filter(r => r.isPaid).length
          const earned = p.referralEarnings || 0
          const paidOut = p.referralPaidOut || 0
          const owed = Math.max(0, earned - paidOut)
          const myPayouts = payouts.filter(x => x.userId === p.id)
          const isOpen = open === p.id

          return (
            <div key={p.id} style={{
              background: "var(--surface)", border: "1px solid var(--border)",
              borderRadius: "var(--radius-lg)", marginBottom: 10, overflow: "hidden"
            }}>
              <div onClick={() => setOpen(isOpen ? null : p.id)} style={{ padding: "14px 16px", cursor: "pointer" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: 14, fontWeight: 800, color: "var(--text)" }}>{p.name || "Unnamed"}</div>
                    <div style={{ fontSize: 11, color: "var(--text3)" }}>
                      Code <strong>{p.referralCode || "—"}</strong> · {mine.length} signed up · {paidCount} paid
                    </div>
                  </div>
                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    <div style={{ fontSize: 16, fontWeight: 900, color: owed > 0 ? "#dc2626" : "#15803d" }}>₦{owed.toLocaleString()}</div>
                    <div style={{ fontSize: 10, color: "var(--text3)" }}>you owe</div>
                  </div>
                </div>
              </div>

              {isOpen && (
                <div style={{ borderTop: "1px solid var(--border)", background: "var(--surface2)", padding: "14px 16px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 12 }}>
                    {[
                      { label: "Earned", value: earned },
                      { label: "Paid out", value: paidOut },
                      { label: "Owed", value: owed },
                    ].map(s => (
                      <div key={s.label} style={{ background: "var(--surface)", borderRadius: "var(--radius-md)", padding: "8px 4px", textAlign: "center" }}>
                        <div style={{ fontSize: 13, fontWeight: 800, color: "var(--text)" }}>₦{s.value.toLocaleString()}</div>
                        <div style={{ fontSize: 10, color: "var(--text3)" }}>{s.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Where to send the money */}
                  <div style={{ fontSize: 12, color: "var(--text2)", lineHeight: 1.7, marginBottom: 12 }}>
                    <strong>Pay to:</strong>{" "}
                    {p.bankAccountNumber
                      ? `${p.bankAccountName || "—"} · ${p.bankName || "—"} · ${p.bankAccountNumber}`
                      : "No bank account added yet"}
                    {p.phone && <><br /><strong>WhatsApp:</strong> 0{String(p.phone).replace(/^0+/, "")}</>}
                  </div>

                  <button onClick={() => payOut(p)} disabled={busy || owed <= 0} style={{
                    width: "100%", padding: "11px", marginBottom: 14,
                    background: owed > 0 ? "#16a34a" : "var(--surface3)", color: owed > 0 ? "#fff" : "var(--text3)",
                    border: "none", borderRadius: "var(--radius-md)", fontWeight: 800, fontSize: 13,
                    cursor: owed > 0 && !busy ? "pointer" : "not-allowed", fontFamily: "var(--font-main)"
                  }}>
                    {owed > 0 ? `💸 I've paid ₦${owed.toLocaleString()} — mark as paid` : "Nothing owed"}
                  </button>

                  <div style={{ fontSize: 12, fontWeight: 800, color: "var(--text)", marginBottom: 8 }}>
                    Referrals ({mine.length})
                  </div>
                  {mine.length === 0 ? (
                    <div style={{ fontSize: 12, color: "var(--text3)", marginBottom: 12 }}>Nobody has signed up with this code yet.</div>
                  ) : (
                    <div style={{ marginBottom: 12 }}>
                      {mine.map(r => (
                        <div key={r.id} style={{
                          display: "flex", justifyContent: "space-between", alignItems: "center",
                          padding: "7px 0", borderBottom: "1px solid var(--border)", fontSize: 12
                        }}>
                          <div>
                            <div style={{ fontWeight: 700, color: "var(--text)" }}>{r.name || "Student"}</div>
                            <div style={{ fontSize: 10, color: "var(--text3)" }}>Joined {fmtDate(r.createdAt)}</div>
                          </div>
                          <div style={{ fontWeight: 800, color: r.isPaid ? "#15803d" : "var(--text3)" }}>
                            {r.isPaid ? (r.amountEarned ? `✅ Paid · ₦${Number(r.amountEarned).toLocaleString()}` : "✅ Paid") : "⏳ Not paid"}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div style={{ fontSize: 12, fontWeight: 800, color: "var(--text)", marginBottom: 8 }}>
                    Payment history ({myPayouts.length})
                  </div>
                  {myPayouts.length === 0 ? (
                    <div style={{ fontSize: 12, color: "var(--text3)" }}>You haven't paid this promoter yet.</div>
                  ) : (
                    myPayouts.map(x => (
                      <div key={x.id} style={{
                        display: "flex", justifyContent: "space-between",
                        padding: "6px 0", borderBottom: "1px solid var(--border)", fontSize: 12
                      }}>
                        <span style={{ color: "var(--text2)" }}>{fmtDate(x.paidAt)}</span>
                        <span style={{ fontWeight: 800, color: "#dc2626" }}>-₦{Number(x.amount || 0).toLocaleString()}</span>
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          )
        })
      )}
    </>
  )
}
