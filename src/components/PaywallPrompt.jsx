// Reusable paywall prompt shown when user hits a locked feature

export default function PaywallPrompt({ type, onUpgrade, onClose }) {
  const configs = {
    studyQuestions: {
      icon: '📖',
      title: 'You\'ve used your 5 free questions',
      message: 'Upgrade to unlock unlimited questions across all topics and all 20 years.',
      cta: 'Unlock Unlimited Questions',
    },
    year: {
      icon: '📅',
      title: 'This year is locked',
      message: 'You can only access 2014 and 2015 for free. Upgrade to unlock all 20 years (2005–2024).',
      cta: 'Unlock All Years',
    },
    hotTopics: {
      icon: '🔥',
      title: 'Hot Topics is Premium',
      message: 'See the most repeated questions across all years — focus on what matters most.',
      cta: 'Unlock Hot Topics',
    },
    weakAreas: {
      icon: '📊',
      title: 'Weak Areas is Premium',
      message: 'Discover exactly which topics need more practice based on your performance.',
      cta: 'Unlock Weak Areas',
    },
    cbtHistory: {
      icon: '🕐',
      title: 'CBT History is Premium',
      message: 'Review all your past CBT attempts and track your improvement over time.',
      cta: 'Unlock CBT History',
    },
    progress: {
      icon: '📈',
      title: 'Full Progress is Premium',
      message: 'Get detailed analytics on your performance across all subjects and years.',
      cta: 'Unlock Full Progress',
    },
  }

  const config = configs[type] || configs.studyQuestions

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.6)',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      zIndex: 1000,
      padding: 16,
    }}>
      <div style={{
        background: '#fff',
        borderRadius: '24px 24px 0 0',
        padding: '32px 24px 40px',
        width: '100%',
        maxWidth: 480,
        textAlign: 'center',
        animation: 'slideUp 0.3s ease',
      }}>
        {/* Lock icon */}
        <div style={{
          width: 64,
          height: 64,
          background: 'linear-gradient(135deg, #667eea, #764ba2)',
          borderRadius: 32,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 28,
          margin: '0 auto 16px',
        }}>
          {config.icon}
        </div>

        <div style={{
          background: '#f8f0ff',
          color: '#764ba2',
          fontSize: 11,
          fontWeight: 700,
          padding: '4px 12px',
          borderRadius: 20,
          display: 'inline-block',
          marginBottom: 12,
          letterSpacing: 1,
        }}>
          🔒 PREMIUM FEATURE
        </div>

        <h2 style={{ fontSize: 20, fontWeight: 700, color: '#1a1a2e', margin: '0 0 10px' }}>
          {config.title}
        </h2>
        <p style={{ fontSize: 14, color: '#666', lineHeight: 1.5, margin: '0 0 24px' }}>
          {config.message}
        </p>

        {/* What you get */}
        <div style={{
          background: '#f8f9fa',
          borderRadius: 12,
          padding: '12px 16px',
          marginBottom: 20,
          textAlign: 'left',
        }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: '#888', margin: '0 0 8px' }}>
            UPGRADE TO GET:
          </p>
          {[
            '📚 All 20 years of questions',
            '🎯 Unlimited CBT practice',
            '🔥 Hot Topics & Weak Areas',
            '📈 Full analytics & history',
          ].map((item, i) => (
            <div key={i} style={{ fontSize: 13, color: '#333', padding: '3px 0' }}>
              {item}
            </div>
          ))}
        </div>

        {/* Price */}
        <div style={{ marginBottom: 16 }}>
          <span style={{ fontSize: 28, fontWeight: 800, color: '#667eea' }}>₦2,500</span>
          <span style={{ fontSize: 13, color: '#888', marginLeft: 8 }}>one-time payment</span>
        </div>

        <button
          onClick={onUpgrade}
          style={{
            width: '100%',
            padding: '16px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: '#fff',
            border: 'none',
            borderRadius: 12,
            fontSize: 15,
            fontWeight: 700,
            cursor: 'pointer',
            marginBottom: 12,
          }}
        >
          {config.cta} — ₦2,500
        </button>

        <button
          onClick={onClose}
          style={{
            width: '100%',
            padding: '12px',
            background: 'transparent',
            color: '#888',
            border: 'none',
            borderRadius: 12,
            fontSize: 14,
            cursor: 'pointer',
          }}
        >
          Maybe later
        </button>
      </div>
    </div>
  )
}
