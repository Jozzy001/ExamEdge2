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