import { useState } from "react"
import { doc, updateDoc } from "firebase/firestore"
import { db } from "../firebase"

const NIGERIAN_BANKS = [
  "Access Bank", "First Bank", "GTBank", "Zenith Bank", "UBA",
  "Fidelity Bank", "Union Bank", "Sterling Bank", "Wema Bank",
  "Polaris Bank", "Keystone Bank", "Ecobank", "FCMB", "Stanbic IBTC",
  "Standard Chartered", "Heritage Bank", "Jaiz Bank", "Unity Bank",
  "Opay", "Moniepoint", "Kuda Bank", "PalmPay", "Carbon"
]

export default function BankDetailsForm({ userData, userId }) {
  const existing = userData?.bankDetails || {}
  const [bankName, setBankName] = useState(existing.bankName || "")
  const [accountNumber, setAccountNumber] = useState(existing.accountNumber || "")
  const [accountName, setAccountName] = useState(existing.accountName || "")
  const [whatsapp, setWhatsapp] = useState(existing.whatsapp || "")
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [editing, setEditing] = useState(!existing.bankName)

  const handleSave = async () => {
    if (!bankName || !accountNumber || !accountName) {
      alert("Please fill in all fields")
      return
    }
    if (accountNumber.length !== 10) {
      alert("Account number must be 10 digits")
      return
    }
    setSaving(true)
    try {
      await updateDoc(doc(db, "users", userId), {
        bankDetails: { bankName, accountNumber, accountName, whatsapp: whatsapp.trim() || null, savedAt: new Date().toISOString() }
      })
      setSaved(true)
      setEditing(false)
      setTimeout(() => setSaved(false), 3000)
    } catch(e) {
      alert("Failed to save. Please try again.")
    }
    setSaving(false)
  }

  if (!editing && existing.bankName) {
    return (
      <button
        onClick={() => setEditing(true)}
        style={{
          width: "100%", padding: "8px", borderRadius: "var(--radius-md)",
          background: "var(--surface)", border: "1px solid var(--border)",
          color: "var(--text2)", fontSize: 12, fontWeight: 700,
          cursor: "pointer", fontFamily: "var(--font-main)"
        }}
      >
        ✏️ Update Bank Details
      </button>
    )
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {/* Bank name dropdown */}
      <select
        value={bankName}
        onChange={e => setBankName(e.target.value)}
        style={{
          width: "100%", padding: "10px 12px",
          borderRadius: "var(--radius-md)",
          border: "1.5px solid var(--border)",
          background: "var(--surface)", color: "var(--text)",
          fontSize: 13, fontFamily: "var(--font-main)"
        }}
      >
        <option value="">Select Bank</option>
        {NIGERIAN_BANKS.map(b => <option key={b} value={b}>{b}</option>)}
      </select>

      {/* Account number */}
      <input
        type="number"
        placeholder="10-digit account number"
        value={accountNumber}
        onChange={e => setAccountNumber(e.target.value.slice(0, 10))}
        style={{
          width: "100%", padding: "10px 12px",
          borderRadius: "var(--radius-md)",
          border: "1.5px solid var(--border)",
          background: "var(--surface)", color: "var(--text)",
          fontSize: 13, fontFamily: "var(--font-main)",
          boxSizing: "border-box"
        }}
      />

      {/* Account name */}
      <input
        type="text"
        placeholder="Account name (as on bank)"
        value={accountName}
        onChange={e => setAccountName(e.target.value)}
        style={{
          width: "100%", padding: "10px 12px",
          borderRadius: "var(--radius-md)",
          border: "1.5px solid var(--border)",
          background: "var(--surface)", color: "var(--text)",
          fontSize: 13, fontFamily: "var(--font-main)",
          boxSizing: "border-box"
        }}
      />

      {/* Optional WhatsApp number */}
      <div style={{ position: "relative" }}>
        <input
          type="tel"
          placeholder="WhatsApp number (optional)"
          value={whatsapp}
          onChange={e => setWhatsapp(e.target.value)}
          style={{
            width: "100%", padding: "10px 12px",
            borderRadius: "var(--radius-md)",
            border: "1.5px solid var(--border)",
            background: "var(--surface)", color: "var(--text)",
            fontSize: 13, fontFamily: "var(--font-main)",
            boxSizing: "border-box"
          }}
        />
        <div style={{ fontSize: 11, color: "var(--text3)", marginTop: 4 }}>
          📱 So we can add you to our referral partners group (optional)
        </div>
      </div>

      <button
        onClick={handleSave}
        disabled={saving}
        style={{
          width: "100%", padding: "10px",
          borderRadius: "var(--radius-md)",
          background: saved ? "#16a34a" : "#d97706",
          color: "#fff", border: "none",
          fontSize: 13, fontWeight: 800,
          cursor: "pointer", fontFamily: "var(--font-main)"
        }}
      >
        {saving ? "Saving..." : saved ? "✅ Saved!" : "💾 Save Bank Details"}
      </button>
    </div>
  )
}