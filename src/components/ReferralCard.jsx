// Shows user's referral code and earnings — shown in Settings for paid users
import { useState } from "react"
import { getReferralSummary, formatNaira } from "../utils/subscription"

export default function ReferralCard({ userData }) {
  const [copied, setCopied] = useState(false)

  const referralCode = userData?.referralCode || ''
  const referrals = userData?.referralsList || []
  const summary = getReferralSummary(referrals)
  const earnings = userData?.referralEarnings || 0
  const paidOut = userData?.referralPaidOut || 0
  const pending = earnings - paidOut

  const copyCode = () => {
    const message = `Hey! I'm using ExamEdgeNG to prepare for UNIBEN Post-UTME. It has 20 years of past questions with CBT simulation. Use my referral code ${referralCode} when you sign up to register. Download here: https://examedgeng.site`
    navigator.clipboard.writeText(message)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareCode = () => {
    const message = `Hey! I'm using ExamEdgeNG to prepare for UNIBEN Post-UTME. It has 20 years of past questions with CBT simulation. Use my referral code *${referralCode}* when you pay. Download here: https://examedgeng.site`
    if (navigator.share) {
      navigator.share({ text: message })
    } else {
      navigator.clipboard.writeText(message)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div style={{ padding: '0 16px' }}>
      {/* Referral code */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: 16,
        padding: 20,
        marginBottom: 12,
        color: '#fff',
        textAlign: 'center',
      }}>
        <p style={{ fontSize: 12, margin: '0 0 8px', opacity: 0.8, fontWeight: 600 }}>
          YOUR REFERRAL CODE
        </p>
        <div style={{
          background: 'rgba(255,255,255,0.2)',
          borderRadius: 12,
          padding: '12px 20px',
          fontSize: 28,
          fontWeight: 800,
          letterSpacing: 4,
          marginBottom: 12,
        }}>
          {referralCode}
        </div>
        <p style={{ fontSize: 12, opacity: 0.8, margin: '0 0 16px' }}>
          Earn <strong>₦500</strong> for every friend who pays using your code
        </p>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={copyCode} style={{
            flex: 1,
            padding: '10px',
            background: 'rgba(255,255,255,0.2)',
            border: '1px solid rgba(255,255,255,0.4)',
            borderRadius: 10,
            color: '#fff',
            fontSize: 13,
            fontWeight: 600,
            cursor: 'pointer',
          }}>
            {copied ? '✓ Copied!' : '📋 Copy Message'}
          </button>
          <button onClick={shareCode} style={{
            flex: 1,
            padding: '10px',
            background: '#fff',
            border: 'none',
            borderRadius: 10,
            color: '#667eea',
            fontSize: 13,
            fontWeight: 700,
            cursor: 'pointer',
          }}>
            📤 Share
          </button>
        </div>
      </div>

      {/* Earnings */}
      <div style={{
        background: '#fff',
        borderRadius: 16,
        padding: 16,
        boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
      }}>
        <p style={{ fontSize: 13, fontWeight: 700, color: '#333', margin: '0 0 12px' }}>
          💰 Referral Earnings
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginBottom: 12 }}>
          {[
            { label: 'Total Earned', value: formatNaira(earnings), color: '#22c55e' },
            { label: 'Paid Out', value: formatNaira(paidOut), color: '#667eea' },
            { label: 'Pending', value: formatNaira(pending), color: '#f59e0b' },
          ].map((stat, i) => (
            <div key={i} style={{
              background: '#f8f9fa',
              borderRadius: 10,
              padding: '10px 8px',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: 15, fontWeight: 800, color: stat.color }}>{stat.value}</div>
              <div style={{ fontSize: 10, color: '#888', marginTop: 2 }}>{stat.label}</div>
            </div>
          ))}
        </div>
        {pending > 0 && (
          <div style={{
            background: '#fff8e1',
            borderRadius: 10,
            padding: '10px 12px',
            fontSize: 12,
            color: '#856404',
          }}>
            ⏳ <strong>{formatNaira(pending)}</strong> will be paid to your bank account within 7 days.
            Make sure your bank details are in Settings.
          </div>
        )}
        {earnings === 0 && (
          <p style={{ fontSize: 12, color: '#aaa', textAlign: 'center', margin: 0 }}>
            No referrals yet. Share your code to start earning!
          </p>
        )}
      </div>
    </div>
  )
}