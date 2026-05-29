// =============================================
// CBT HISTORY — save, load, manage CBT records
// =============================================

const HISTORY_KEY = "ee-cbtHistory"
const MAX_RECORDS = 50  // keep last 50 CBTs

export const saveCBTRecord = (report) => {
  try {
    const history = getCBTHistory()
    const record = {
      ...report,
      id: `cbt_${Date.now()}`,
      date: new Date().toISOString(),
    }
    const updated = [record, ...history].slice(0, MAX_RECORDS)
    localStorage.setItem(HISTORY_KEY, JSON.stringify(updated))

    // Check personal best
    const prev = history.filter(r => r.total === record.total)
    const prevBest = prev.length > 0 ? Math.max(...prev.map(r => r.percentage)) : 0
    const isPersonalBest = record.percentage > prevBest

    // Update personal best record
    if (isPersonalBest) {
      localStorage.setItem("ee-cbtPersonalBest", JSON.stringify({
        score: record.score,
        total: record.total,
        percentage: record.percentage,
        date: record.date,
        id: record.id
      }))
    }

    return { record, isPersonalBest, prevBest }
  } catch (e) {
    console.error("Failed to save CBT record", e)
    return { record: report, isPersonalBest: false, prevBest: 0 }
  }
}

export const getCBTHistory = () => {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]")
  } catch {
    return []
  }
}

export const getCBTPersonalBest = () => {
  try {
    return JSON.parse(localStorage.getItem("ee-cbtPersonalBest") || "null")
  } catch {
    return null
  }
}

export const deleteCBTRecord = (id) => {
  const history = getCBTHistory()
  const updated = history.filter(r => r.id !== id)
  localStorage.setItem(HISTORY_KEY, JSON.stringify(updated))
}

export const formatDate = (isoString) => {
  const date = new Date(isoString)
  return date.toLocaleDateString("en-NG", {
    day: "numeric", month: "short", year: "numeric"
  })
}

export const formatTime = (seconds) => {
  if (!seconds) return "—"
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}m ${s}s`
}
