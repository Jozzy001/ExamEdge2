import { useState, useEffect } from "react"
import { doc, updateDoc, getDoc } from "firebase/firestore"
import { db } from "../firebase"

const AccountDetails = ({ onNavigate, onBack, authUser }) => {
  const [accountDetails, setAccountDetails] = useState({
    bankName: "",
    accountNumber: "",
    accountHolderName: "",
    accountType: "savings"
  })
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  // Load existing account details
  useEffect(() => {
    if (authUser?.uid) {
      getDoc(doc(db, "users", authUser.uid)).then(snap => {
        if (snap.exists() && snap.data().accountDetails) {
          setAccountDetails(snap.data().accountDetails)
        }
      })
    }
  }, [authUser?.uid])

  const handleChange = (field, value) => {
    setAccountDetails(prev => ({
      ...prev,
      [field]: value
    }))
    setError(null)
  }

  const handleSave = async () => {
    // Validation
    if (!accountDetails.bankName.trim()) {
      setError("Bank name is required")
      return
    }
    if (!accountDetails.accountNumber.trim()) {
      setError("Account number is required")
      return
    }
    if (accountDetails.accountNumber.length < 10) {
      setError("Account number must be at least 10 digits")
      return
    }
    if (!accountDetails.accountHolderName.trim()) {
      setError("Account holder name is required")
      return
    }

    setSaving(true)
    try {
      await updateDoc(doc(db, "users", authUser.uid), {
        accountDetails: accountDetails,
        accountDetailsAddedAt: new Date().toISOString()
      })
      setSuccess(true)
      setTimeout(() => {
        onBack()
      }, 1500)
    } catch (e) {
      setError("Failed to save account details. Try again.")
      console.error(e)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="ee-page">
      <header className="ee-header">
        <button className="ee-back-btn" onClick={onBack}>← Back</button>
        <span style={{ fontWeight: 800, fontSize: 15 }}>🏦 Bank Account</span>
        <span style={{ width: 60 }} />
      </header>

      <div className="ee-content">
        {/* Info message */}
        <div style={{
          background: "rgba(59, 130, 246, 0.1)",
          borderRadius: "var(--radius-lg)",
          padding: "12px",
          marginBottom: 20,
          border: "1px solid rgba(59, 130, 246, 0.2)",
          fontSize: 13,
          color: "var(--text)"
        }}>
          <strong>💡 How it works:</strong> When your friends make payments after signing up with your referral code, you'll earn ₦500 per person. We'll send the money to this account every weekend.
        </div>

        {/* Form */}
        <div style={{ marginBottom: 20 }}>
          <label style={{
            display: "block",
            fontSize: 13,
            fontWeight: 700,
            marginBottom: 6,
            color: "var(--text)"
          }}>
            Bank Name *
          </label>
          <input
            type="text"
            placeholder="e.g., GTBank, Access Bank, etc."
            value={accountDetails.bankName}
            onChange={(e) => handleChange("bankName", e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--border)",
              fontSize: 14,
              boxSizing: "border-box",
              background: "var(--surface)",
              color: "var(--text)"
            }}
          />
        </div>

        <div style={{ marginBottom: 20 }}>
          <label style={{
            display: "block",
            fontSize: 13,
            fontWeight: 700,
            marginBottom: 6,
            color: "var(--text)"
          }}>
            Account Number *
          </label>
          <input
            type="text"
            placeholder="10 digits"
            value={accountDetails.accountNumber}
            onChange={(e) => handleChange("accountNumber", e.target.value.replace(/\D/g, ""))}
            maxLength="10"
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--border)",
              fontSize: 14,
              boxSizing: "border-box",
              background: "var(--surface)",
              color: "var(--text)"
            }}
          />
        </div>

        <div style={{ marginBottom: 20 }}>
          <label style={{
            display: "block",
            fontSize: 13,
            fontWeight: 700,
            marginBottom: 6,
            color: "var(--text)"
          }}>
            Account Holder Name *
          </label>
          <input
            type="text"
            placeholder="Name on your bank account"
            value={accountDetails.accountHolderName}
            onChange={(e) => handleChange("accountHolderName", e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--border)",
              fontSize: 14,
              boxSizing: "border-box",
              background: "var(--surface)",
              color: "var(--text)"
            }}
          />
        </div>

        <div style={{ marginBottom: 24 }}>
          <label style={{
            display: "block",
            fontSize: 13,
            fontWeight: 700,
            marginBottom: 6,
            color: "var(--text)"
          }}>
            Account Type
          </label>
          <select
            value={accountDetails.accountType}
            onChange={(e) => handleChange("accountType", e.target.value)}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--border)",
              fontSize: 14,
              boxSizing: "border-box",
              background: "var(--surface)",
              color: "var(--text)",
              cursor: "pointer"
            }}
          >
            <option value="savings">Savings Account</option>
            <option value="current">Current Account</option>
          </select>
        </div>

        {/* Error message */}
        {error && (
          <div style={{
            background: "rgba(239, 68, 68, 0.1)",
            color: "#dc2626",
            padding: "12px",
            borderRadius: "var(--radius-md)",
            marginBottom: 16,
            fontSize: 13,
            border: "1px solid rgba(239, 68, 68, 0.2)"
          }}>
            ⚠️ {error}
          </div>
        )}

        {/* Success message */}
        {success && (
          <div style={{
            background: "rgba(34, 197, 94, 0.1)",
            color: "#16a34a",
            padding: "12px",
            borderRadius: "var(--radius-md)",
            marginBottom: 16,
            fontSize: 13,
            border: "1px solid rgba(34, 197, 94, 0.2)"
          }}>
            ✅ Account details saved successfully!
          </div>
        )}

        {/* Save button */}
        <button
          onClick={handleSave}
          disabled={saving}
          style={{
            width: "100%",
            padding: "14px",
            background: saving ? "#9ca3af" : "var(--primary)",
            color: "#fff",
            border: "none",
            borderRadius: "var(--radius-md)",
            fontWeight: 700,
            fontSize: 14,
            cursor: saving ? "not-allowed" : "pointer",
            opacity: saving ? 0.7 : 1
          }}
        >
          {saving ? "Saving..." : "Save Account Details"}
        </button>

        {/* Info */}
        <div style={{
          marginTop: 20,
          padding: "12px",
          background: "var(--surface)",
          borderRadius: "var(--radius-md)",
          fontSize: 12,
          color: "var(--text3)",
          lineHeight: 1.6
        }}>
          <strong>📌 Important:</strong> Make sure all details are correct. We'll use this information to send your referral earnings every weekend.
        </div>
      </div>
    </div>
  )
}

export default AccountDetails
