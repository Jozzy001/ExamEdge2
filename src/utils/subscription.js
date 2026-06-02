// Subscription & Referral utility functions

// Free tier limits
export const FREE_YEARS = ['2014', '2015']
export const FREE_STUDY_QUESTIONS_LIMIT = 5
export const PRICE = 250000 // ₦2,500 in kobo (Paystack uses kobo)

// Check if user is paid
export const isPaidUser = (userData) => {
  return userData?.isPaid === true
}

// Check if a year is free
export const isYearFree = (year) => {
  return FREE_YEARS.includes(String(year))
}

// Generate referral code from user's name + uid
export const generateReferralCode = (name, uid) => {
  const namePart = name?.split(' ')[0]?.toUpperCase()?.slice(0, 4) || 'USER'
  const uidPart = uid?.slice(-4)?.toUpperCase() || '0000'
  return `${namePart}${uidPart}`
}

// Get referral earnings summary
export const getReferralSummary = (referrals) => {
  if (!referrals || referrals.length === 0) {
    return { total: 0, paid: 0, pending: 0, count: 0 }
  }
  const paid = referrals.filter(r => r.isPaid && r.referralPaid)
  const pending = referrals.filter(r => r.isPaid && !r.referralPaid)
  return {
    total: paid.length * 500,
    paid: paid.length * 500,
    pending: pending.length * 500,
    count: referrals.filter(r => r.isPaid).length,
  }
}

// Format naira
export const formatNaira = (amount) => {
  return `₦${amount.toLocaleString()}`
}
