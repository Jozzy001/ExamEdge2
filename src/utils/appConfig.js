// =============================================
// ONE PLACE TO CHANGE THE PRICE AND SWITCHES
// Every page (Home, PostUTMEHome, PaywallPrompt, Upgrade) reads from here.
// Save this file as: src/utils/appConfig.js
// =============================================

// The upgrade price in naira (just the number)
export const UPGRADE_PRICE_NUMBER = 1500

// Formatted for display, e.g. "₦1,500"
export const UPGRADE_PRICE = `\u20a6${UPGRADE_PRICE_NUMBER.toLocaleString("en-NG")}`

// Paystack works in kobo (₦1 = 100 kobo), so ₦1,500 → 150000
export const UPGRADE_AMOUNT_KOBO = UPGRADE_PRICE_NUMBER * 100

// Public key only. Put VITE_PAYSTACK_PUBLIC_KEY=pk_live_xxx in your .env file.
// NEVER put your secret key (sk_...) in the frontend.
export const PAYSTACK_PUBLIC_KEY = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY

// How many full CBT exams a free user can take before they must upgrade.
// Counted on their account (Firestore), so clearing the browser or using another phone does not reset it.
export const FREE_CBT_LIMIT = 2

// Referral card on the home screens. false = hidden, true = shown.
export const SHOW_REFERRALS = false

// ---------------------------------------------
// ACCESS PERIOD
// Everyone's Full Access runs until this date (format YYYY-MM-DD).
// Nobody's access ends before it, whatever day they paid.
// ---------------------------------------------
export const ACCESS_END_DATE = "2027-04-01"
export const ACCESS_END_LABEL = "1 April 2027"

// Whole days left until the access end date (0 or negative once it has passed)
export const daysUntilAccessEnds = () => {
  const end = new Date(`${ACCESS_END_DATE}T00:00:00`)
  return Math.ceil((end - new Date()) / (1000 * 60 * 60 * 24))
}

// ---------------------------------------------
// EXAM COUNTDOWN
// The default JAMB exam date (YYYY-MM-DD). Students can set their own date on the home screen.
// ---------------------------------------------
export const DEFAULT_EXAM_DATE = "2027-03-15"

// ---------------------------------------------
// ADMIN
// Put your admin account's User UID here (Firebase console > Authentication > Users,
// or copy it from the small "Firestore sees you as" line at the top of the admin page).
// Use the SAME UID in firestore.rules. The UID never changes, unlike the login email.
// ---------------------------------------------
export const ADMIN_UIDS = ["hsTTTa89W8UhKMtN6TyrPdkq9JA2"]

// True only for the admin account(s) listed above. Never use an email (or a "recovery email")
// to decide who is an admin: anyone can type any email into their profile.
export const isAdminUser = (user) => !!user?.uid && ADMIN_UIDS.includes(user.uid)