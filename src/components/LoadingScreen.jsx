// Reusable loading screens for different pages

// Pulse animation CSS injected once
const pulseStyle = `
@keyframes ee-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}
@keyframes ee-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
@keyframes ee-slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.ee-skeleton {
  background: linear-gradient(90deg, var(--surface2) 25%, var(--border) 50%, var(--surface2) 75%);
  background-size: 200% 100%;
  animation: ee-shimmer 1.5s infinite;
  border-radius: 8px;
}
@keyframes ee-shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
`

let styleInjected = false
const injectStyle = () => {
  if (styleInjected || typeof document === 'undefined') return
  const el = document.createElement('style')
  el.textContent = pulseStyle
  document.head.appendChild(el)
  styleInjected = true
}

// Skeleton block
export const Skeleton = ({ width = '100%', height = 16, radius = 8, style = {} }) => {
  injectStyle()
  return (
    <div className="ee-skeleton" style={{
      width, height, borderRadius: radius, ...style
    }} />
  )
}

// Full page spinner — for initial app load
export const FullPageLoader = ({ message = "Loading..." }) => {
  injectStyle()
  return (
    <div style={{
      position: 'fixed', inset: 0,
      background: 'var(--bg)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      zIndex: 9999,
    }}>
      <div style={{
        fontSize: 48, marginBottom: 20,
        animation: 'ee-pulse 1.5s ease-in-out infinite'
      }}>🎓</div>
      <div style={{
        width: 40, height: 40, borderRadius: '50%',
        border: '3px solid var(--border)',
        borderTop: '3px solid var(--primary)',
        animation: 'ee-spin 0.8s linear infinite',
        marginBottom: 16,
      }} />
      <div style={{ fontSize: 14, color: 'var(--text3)', fontWeight: 600 }}>
        {message}
      </div>
    </div>
  )
}

// Home page skeleton
export const HomeSkeleton = () => {
  injectStyle()
  return (
    <div className="ee-page">
      <header className="ee-header">
        <Skeleton width={120} height={22} />
        <Skeleton width={32} height={32} radius={16} />
      </header>
      <div className="ee-content">
        {/* Greeting */}
        <Skeleton width="60%" height={24} style={{ marginBottom: 8 }} />
        <Skeleton width="40%" height={14} style={{ marginBottom: 16 }} />

        {/* XP bar */}
        <div style={{
          background: 'var(--surface)', borderRadius: 16,
          padding: 16, marginBottom: 20
        }}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 10 }}>
            <Skeleton width={40} height={40} radius={20} />
            <div style={{ flex: 1 }}>
              <Skeleton width="50%" height={14} style={{ marginBottom: 6 }} />
              <Skeleton width="100%" height={8} radius={4} />
            </div>
          </div>
        </div>

        {/* Profile card */}
        <div style={{
          background: 'var(--surface)', borderRadius: 20,
          padding: 20, marginBottom: 24
        }}>
          <Skeleton width="30%" height={12} style={{ marginBottom: 8 }} />
          <Skeleton width="50%" height={22} style={{ marginBottom: 8 }} />
          <Skeleton width="70%" height={16} style={{ marginBottom: 12 }} />
          <div style={{ display: 'flex', gap: 6 }}>
            {[80, 90, 70, 85].map((w, i) => (
              <Skeleton key={i} width={w} height={24} radius={12} />
            ))}
          </div>
        </div>

        {/* Grid buttons */}
        <div className="ee-home-grid">
          {[1,2,3,4].map(i => (
            <div key={i} style={{
              background: 'var(--surface)', borderRadius: 14,
              padding: 16, border: '1px solid var(--border)'
            }}>
              <Skeleton width={36} height={36} radius={10} style={{ marginBottom: 10 }} />
              <Skeleton width="80%" height={14} style={{ marginBottom: 6 }} />
              <Skeleton width="60%" height={11} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Quiz/question skeleton
export const QuizSkeleton = () => {
  injectStyle()
  return (
    <div className="ee-page">
      <header className="ee-header">
        <Skeleton width={60} height={30} radius={8} />
        <Skeleton width={80} height={18} />
        <Skeleton width={60} height={18} />
      </header>
      <div className="ee-content">
        {/* Progress bar */}
        <Skeleton width="100%" height={6} radius={3} style={{ marginBottom: 20 }} />

        {/* Question */}
        <div style={{
          background: 'var(--surface)', borderRadius: 16,
          padding: 20, marginBottom: 20
        }}>
          <Skeleton width="90%" height={16} style={{ marginBottom: 8 }} />
          <Skeleton width="75%" height={16} style={{ marginBottom: 8 }} />
          <Skeleton width="55%" height={16} />
        </div>

        {/* Options */}
        {[1,2,3,4].map(i => (
          <div key={i} style={{
            background: 'var(--surface)', borderRadius: 12,
            padding: '14px 16px', marginBottom: 10,
            border: '1px solid var(--border)',
            display: 'flex', alignItems: 'center', gap: 12
          }}>
            <Skeleton width={32} height={32} radius={16} />
            <Skeleton width={`${60 + i * 8}%`} height={14} />
          </div>
        ))}
      </div>
    </div>
  )
}

// Study mode topic list skeleton
export const StudySkeleton = () => {
  injectStyle()
  return (
    <div className="ee-page">
      <header className="ee-header">
        <Skeleton width={60} height={30} radius={8} />
        <Skeleton width={100} height={20} />
        <Skeleton width={60} height={20} />
      </header>
      <div className="ee-content">
        <Skeleton width="40%" height={24} style={{ marginBottom: 20 }} />
        <Skeleton width={140} height={24} radius={12} style={{ marginBottom: 12 }} />
        {[1,2,3,4,5].map(i => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 14,
            padding: '14px 16px', marginBottom: 8,
            background: 'var(--surface)', borderRadius: 12,
            border: '1px solid var(--border)'
          }}>
            <Skeleton width={36} height={36} radius={10} />
            <div style={{ flex: 1 }}>
              <Skeleton width="60%" height={14} style={{ marginBottom: 6 }} />
              <Skeleton width="40%" height={11} />
            </div>
            <Skeleton width={60} height={22} radius={12} />
          </div>
        ))}
      </div>
    </div>
  )
}

// Inline spinner for buttons
export const ButtonSpinner = () => {
  injectStyle()
  return (
    <span style={{
      display: 'inline-block',
      width: 14, height: 14,
      borderRadius: '50%',
      border: '2px solid rgba(255,255,255,0.3)',
      borderTop: '2px solid #fff',
      animation: 'ee-spin 0.7s linear infinite',
      marginRight: 8,
      verticalAlign: 'middle',
    }} />
  )
}

// Page transition wrapper
export const PageTransition = ({ children }) => {
  injectStyle()
  return (
    <div style={{ animation: 'ee-slideUp 0.25s ease' }}>
      {children}
    </div>
  )
}

export default FullPageLoader
