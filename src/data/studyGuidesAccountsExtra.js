// EXAMEDGENG — ACCOUNTS STUDY GUIDES (EXTRA)
// Guides for Accounts topics that did not have one yet.
// Keys match the Accounts topic list exactly.
//
// HOW TO USE:
// 1. Save as src/data/studyGuidesAccountsExtra.js
// 2. In src/data/studyGuides.js add at the top:
//      import ACCOUNTS_EXTRA_GUIDES from "./studyGuidesAccountsExtra"
// 3. At the end of the STUDY_GUIDES object (next to the other spreads), add:
//      ...ACCOUNTS_EXTRA_GUIDES,

const ACCOUNTS_EXTRA_GUIDES = {

  "Introduction to Accounting": {
    subject: "Accounts", title: "Introduction to Accounting",
    icon: "📒", estimatedTime: "3 min read",
    sections: [
      { heading: "What is Accounting?", type: "text",
        content: "Accounting is the process of identifying, recording, classifying, summarising and interpreting financial transactions so that users can make decisions. Bookkeeping is only the recording part. Accounting goes further by summarising the records into financial statements and interpreting them." },
      { heading: "Branches of Accounting", type: "cards", items: [
        { title: "Financial accounting", body: "Records transactions and prepares final accounts (income statement and balance sheet) for outside users." },
        { title: "Management accounting", body: "Provides information (budgets, forecasts, cost analysis) to managers for decisions." },
        { title: "Cost accounting", body: "Records and analyses the cost of production and services." },
        { title: "Auditing", body: "Independent examination of the accounts to check that they give a true and fair view." },
        { title: "Taxation and public sector accounting", body: "Tax computation and government accounting." },
      ]},
      { heading: "Users of Accounting Information", type: "cards", items: [
        { title: "Owners and investors", body: "Check profit, dividends and the safety of their investment." },
        { title: "Managers", body: "Planning, control and decisions." },
        { title: "Creditors and lenders (banks)", body: "Check ability to pay debts and repay loans." },
        { title: "Employees", body: "Job security and bonuses." },
        { title: "Government (FIRS)", body: "Tax assessment and statistics." },
        { title: "Customers, suppliers and the public", body: "Stability and continuity of the business." },
      ]},
      { heading: "Bookkeeping vs Accounting", type: "cards", items: [
        { title: "Bookkeeping", body: "Recording only. Routine, done by a bookkeeper or clerk." },
        { title: "Accounting", body: "Recording, summarising, analysing and interpreting. Done by an accountant." },
      ]},
      { heading: "Qualities of Good Accounting Information", type: "cards", items: [
        { title: "Relevance", body: "Useful for decisions." },
        { title: "Reliability (faithful representation)", body: "Free from error and bias." },
        { title: "Comparability", body: "Can be compared across periods and firms." },
        { title: "Understandability and timeliness", body: "Clear to users and available in time." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Bookkeeping is the recording part. Accounting includes interpretation.",
        "Auditing is separate from preparing the accounts.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Accounting = record, classify, summarise, interpret. Know the main users and what each wants from the accounts." }
    ]
  },

  "Introduction to Bookkeeping": {
    subject: "Accounts", title: "Introduction to Bookkeeping",
    icon: "📚", estimatedTime: "3 min read",
    sections: [
      { heading: "What is Bookkeeping?", type: "text",
        content: "Bookkeeping is the systematic recording of day-to-day financial transactions of a business in books of account. It supplies the raw data from which accounts are prepared." },
      { heading: "Objectives", type: "cards", items: [
        { title: "Keep a permanent record", body: "Of all transactions in an organised way." },
        { title: "Know debtors and creditors", body: "Who owes the business and whom the business owes." },
        { title: "Calculate profit or loss", body: "At the end of the period." },
        { title: "Show financial position", body: "Assets, liabilities and capital." },
        { title: "Prevent fraud and errors", body: "Records can be checked." },
        { title: "Meet legal and tax requirements", body: "Evidence for FIRS and auditors." },
      ]},
      { heading: "Systems of Recording", type: "cards", items: [
        { title: "Single entry", body: "Only one side of some transactions is recorded, mostly cash and personal accounts. Used by small traders. Incomplete." },
        { title: "Double entry", body: "Every transaction has two effects: a debit in one account and an equal credit in another. The complete system." },
      ]},
      { heading: "Books Kept", type: "cards", items: [
        { title: "Books of original entry (prime entry)", body: "Where transactions are first recorded: journals, day books, cash book, petty cash book." },
        { title: "Ledgers (books of final entry)", body: "Where transactions are classified into accounts: sales ledger, purchases ledger and general (nominal) ledger." },
      ]},
      { heading: "Types of Transaction", type: "cards", items: [
        { title: "Cash transaction", body: "Payment made at once." },
        { title: "Credit transaction", body: "Payment later. Creates a debtor (customer) or a creditor (supplier)." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Single entry is not the same as double entry. Double entry always records both sides.",
        "The ledger is the book of FINAL entry. The journal and day books are books of original entry.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Source document, then book of original entry, then ledger, then trial balance. Double entry = every debit has an equal credit." }
    ]
  },

  "Accounting Equation": {
    subject: "Accounts", title: "The Accounting Equation",
    icon: "⚖️", estimatedTime: "3 min read",
    sections: [
      { heading: "The Equation", type: "text",
        content: "Assets = Capital + Liabilities. This is the basis of double entry. It can be rearranged: Capital = Assets - Liabilities, and Liabilities = Assets - Capital. The equation must always balance after every transaction." },
      { heading: "Definitions", type: "cards", items: [
        { title: "Assets", body: "Resources owned by the business: cash, stock, debtors, land, buildings, vehicles." },
        { title: "Liabilities", body: "Amounts the business owes to outsiders: creditors, loans, bank overdraft." },
        { title: "Capital (owner's equity)", body: "Owner's investment. Capital = opening capital + profit - drawings (+ additional capital introduced)." },
        { title: "Profit and drawings", body: "Profit increases capital. Drawings decrease it." },
      ]},
      { heading: "Effect of Transactions", type: "cards", items: [
        { title: "Starts business with cash", body: "Assets up, capital up." },
        { title: "Buys goods on credit", body: "Assets (stock) up, liabilities (creditors) up." },
        { title: "Pays a creditor in cash", body: "Assets (cash) down, liabilities down." },
        { title: "Buys equipment for cash", body: "One asset up, another asset down. Total unchanged." },
        { title: "Owner takes drawings", body: "Assets down, capital down." },
        { title: "Pays an expense", body: "Assets down, capital down (profit reduced)." },
        { title: "Earns income or sells at a profit", body: "Capital up by the profit." },
      ]},
      { heading: "Worked Example", type: "steps", items: [
        "Starts with cash ₦100,000: Assets 100,000 = Capital 100,000.",
        "Buys goods on credit ₦30,000: Assets 130,000 = Capital 100,000 + Liabilities 30,000.",
        "Pays creditor ₦10,000: Assets (cash 90,000 + stock 30,000) 120,000 = Capital 100,000 + Liabilities 20,000.",
        "Sells all goods for ₦50,000 cash (cost ₦30,000): profit ₦20,000. Assets (cash 140,000) = Capital 120,000 + Liabilities 20,000."
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Drawings reduce capital. They are not an expense of the business.",
        "Buying an asset for cash changes the make-up of assets, not the total.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "A = C + L. For each transaction, write the effect on both sides. Capital = Assets - Liabilities." }
    ]
  },

  "Source Documents": {
    subject: "Accounts", title: "Source Documents",
    icon: "🧾", estimatedTime: "3 min read",
    sections: [
      { heading: "What are Source Documents?", type: "text",
        content: "Source documents are the original written evidence of a transaction. Every entry in the books should be supported by one. They are the starting point of the accounting cycle." },
      { heading: "The Documents", type: "cards", items: [
        { title: "Quotation", body: "Seller states the price and terms in reply to an enquiry." },
        { title: "Purchase order", body: "Buyer's request to buy goods at stated prices." },
        { title: "Delivery note", body: "Lists goods delivered. Signed by the buyer on receipt." },
        { title: "Invoice", body: "Seller's bill showing goods, quantities, prices, discounts, VAT and total. Sales invoice for the seller; purchase invoice for the buyer." },
        { title: "Credit note", body: "Issued by the SELLER to REDUCE the amount owed (returns, overcharge, allowance)." },
        { title: "Debit note", body: "Used to INCREASE the amount owed (undercharge), or by a buyer to notify the supplier of goods returned and ask for a credit note." },
        { title: "Statement of account", body: "Summary of transactions with a customer for a period and balance due." },
        { title: "Receipt", body: "Proof of payment received." },
        { title: "Cheque, counterfoil and pay-in slip", body: "Evidence of payment by cheque and of money paid into the bank." },
        { title: "Petty cash voucher", body: "Evidence of a small cash payment." },
        { title: "Payroll and wage sheets", body: "Evidence of wages paid." },
      ]},
      { heading: "Documents and the Books", type: "cards", items: [
        { title: "Sales invoice", body: "Entered in the sales day book." },
        { title: "Purchase invoice", body: "Entered in the purchases day book." },
        { title: "Credit note issued to a customer", body: "Returns inwards (sales returns) book." },
        { title: "Credit note received from a supplier", body: "Returns outwards (purchases returns) book." },
        { title: "Receipts, cheques and pay-in slips", body: "Cash book." },
        { title: "Petty cash vouchers", body: "Petty cash book." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Credit note = amount owed goes DOWN. Debit note = amount owed goes UP.",
        "Quotations and orders are not recorded in the books. Only invoices and similar documents lead to entries.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Transaction cycle: enquiry, quotation, order, delivery note, invoice, statement, receipt. Match each document to its book of original entry." }
    ]
  },

  "Ledger and Double Entry": {
    subject: "Accounts", title: "Ledger and Double Entry",
    icon: "📖", estimatedTime: "4 min read",
    sections: [
      { heading: "The Double Entry Rule", type: "text",
        content: "Every transaction has two effects. One account is DEBITED and another is CREDITED with the same amount. Total debits always equal total credits." },
      { heading: "Rules by Account Type", type: "cards", items: [
        { title: "Assets", body: "Increase = DEBIT. Decrease = CREDIT. (Cash, stock, debtors, equipment.)" },
        { title: "Liabilities", body: "Increase = CREDIT. Decrease = DEBIT. (Creditors, loans.)" },
        { title: "Capital", body: "Increase = CREDIT. Decrease = DEBIT." },
        { title: "Expenses and losses", body: "Increase = DEBIT. (Rent, wages, purchases, discount allowed.)" },
        { title: "Income and gains", body: "Increase = CREDIT. (Sales, commission received, discount received.)" },
        { title: "Drawings", body: "DEBIT (reduces capital)." },
      ]},
      { heading: "Classes of Account", type: "cards", items: [
        { title: "Personal accounts", body: "Of persons and organisations: debtors, creditors, owner's capital and drawings, banks. Rule: debit the receiver, credit the giver." },
        { title: "Real accounts", body: "Assets: cash, stock, land, equipment. Rule: debit what comes in, credit what goes out." },
        { title: "Nominal accounts", body: "Expenses and incomes. Rule: debit expenses and losses, credit incomes and gains." },
      ]},
      { heading: "Divisions of the Ledger", type: "cards", items: [
        { title: "Sales (debtors) ledger", body: "Accounts of customers." },
        { title: "Purchases (creditors) ledger", body: "Accounts of suppliers." },
        { title: "General (nominal) ledger", body: "Assets, liabilities, capital, income and expense accounts. Includes the control accounts." },
      ]},
      { heading: "Worked Examples", type: "steps", items: [
        "Bought goods for cash ₦5,000: Dr Purchases 5,000, Cr Cash 5,000.",
        "Sold goods on credit to Ade ₦8,000: Dr Ade 8,000, Cr Sales 8,000.",
        "Paid rent ₦2,000 by cheque: Dr Rent 2,000, Cr Bank 2,000.",
        "Ade pays ₦8,000 by cheque: Dr Bank 8,000, Cr Ade 8,000.",
        "Owner takes ₦1,000 cash for personal use: Dr Drawings 1,000, Cr Cash 1,000."
      ]},
      { heading: "Balancing an Account", type: "steps", items: [
        "Add both sides and find the larger total.",
        "Put the larger total on both sides at the same level.",
        "Insert the difference on the smaller side as 'balance c/d' (carried down).",
        "Bring the balance down on the opposite side as 'balance b/d' on the next period's first line."
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Debit means left, credit means right. It does not mean 'good' or 'bad'.",
        "A debit balance on a personal account means a DEBTOR. A credit balance means a CREDITOR.",
        "Purchases, sales and returns are nominal accounts, not stock.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Assets and expenses: debit to increase. Liabilities, capital and income: credit to increase. Always ask: what comes in (debit) and what goes out (credit)?" }
    ]
  },

  "Journals and Ledger": {
    subject: "Accounts", title: "Journals and Ledger Posting",
    icon: "📓", estimatedTime: "3 min read",
    sections: [
      { heading: "The Journal", type: "text",
        content: "The journal (general journal) is a book of original entry for transactions that do not belong in the other books: opening entries, purchase or sale of assets on credit, bad debts, corrections of errors, adjustments and closing entries. Each entry shows the debit, the credit and a narration (a short explanation)." },
      { heading: "Journal Format", type: "cards", items: [
        { title: "Columns", body: "Date, Particulars (account debited first, then the credit indented), Ledger Folio (L/F), Debit amount, Credit amount." },
        { title: "Narration", body: "A short explanation below each entry." },
        { title: "Folio", body: "A reference number linking the journal to the ledger page." },
      ]},
      { heading: "Uses of the Journal", type: "cards", items: [
        { title: "Opening entries", body: "Dr Assets, Cr Liabilities and Cr Capital (the difference)." },
        { title: "Fixed assets bought or sold on credit", body: "Dr Asset, Cr Supplier." },
        { title: "Bad debts written off", body: "Dr Bad debts, Cr Debtor." },
        { title: "Correction of errors and adjustments", body: "Depreciation, accruals, prepayments, provisions." },
        { title: "Closing entries", body: "Transfer to trading and profit and loss accounts." },
        { title: "Goods taken by the owner", body: "Dr Drawings, Cr Purchases." },
      ]},
      { heading: "Worked Example: Opening Journal", type: "steps", items: [
        "On 1 January: cash ₦20,000, stock ₦40,000, furniture ₦30,000, creditors ₦15,000.",
        "Capital = 90,000 - 15,000 = ₦75,000.",
        "Dr Cash 20,000, Dr Stock 40,000, Dr Furniture 30,000 (total 90,000).",
        "Cr Creditors 15,000, Cr Capital 75,000 (total 90,000)."
      ]},
      { heading: "Posting to the Ledger", type: "steps", items: [
        "Identify the account to be debited and credited from each journal entry.",
        "Enter the amount on the debit side of the debit account, with the name of the other account.",
        "Enter the same amount on the credit side of the credit account, with the name of the other account.",
        "Record the folio numbers to cross-reference."
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "In the journal, the account to be debited is written first.",
        "The journal's total debits must equal total credits.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Journal = book of original entry for unusual transactions. Ledger = classification into accounts. Each journal entry needs a narration." }
    ]
  },

  "Special Journals": {
    subject: "Accounts", title: "Special Journals (Day Books)",
    icon: "🗂️", estimatedTime: "3 min read",
    sections: [
      { heading: "Why Special Journals?", type: "text",
        content: "Recording every transaction in the general journal would take too long. Similar transactions are grouped in special journals (day books), and the totals are posted to the ledger. This saves time and allows division of labour." },
      { heading: "The Special Journals", type: "cards", items: [
        { title: "Sales day book", body: "Credit sales only (from sales invoices). Cash sales go to the cash book." },
        { title: "Purchases day book", body: "Credit purchases of goods for resale." },
        { title: "Returns inwards (sales returns) book", body: "Goods returned by customers (from credit notes issued)." },
        { title: "Returns outwards (purchases returns) book", body: "Goods returned to suppliers (credit notes received)." },
        { title: "Cash book and petty cash book", body: "Receipts and payments of cash and bank." },
        { title: "General journal", body: "All other entries." },
      ]},
      { heading: "Posting Rules", type: "cards", items: [
        { title: "Sales day book", body: "Debit each customer's account in the sales ledger (individual invoices). Credit the SALES account with the period total." },
        { title: "Purchases day book", body: "Credit each supplier's account (individual invoices). Debit the PURCHASES account with the period total." },
        { title: "Returns inwards book", body: "Credit each customer's account. Debit the RETURNS INWARDS account with the total." },
        { title: "Returns outwards book", body: "Debit each supplier's account. Credit the RETURNS OUTWARDS account with the total." },
        { title: "Trade discount", body: "Deducted on the invoice and NOT recorded in the books. Only the net amount is entered." },
      ]},
      { heading: "Worked Example", type: "steps", items: [
        "Sales day book for the month: Ade ₦6,000, Bola ₦4,000, Chidi ₦2,000. Total ₦12,000.",
        "Debit Ade 6,000, Bola 4,000, Chidi 2,000 (sales ledger).",
        "Credit Sales account ₦12,000 (general ledger)."
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "The sales day book records CREDIT sales of goods only. Sale of an old van on credit goes to the general journal.",
        "Trade discount is not entered in the ledger. Cash discount is.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Sales and returns inwards: debit side of customers' accounts (sales credited, returns inwards debited in total). Purchases and returns outwards: credit side of suppliers' accounts." }
    ]
  },

  "Discounts & Cash Book": {
    subject: "Accounts", title: "Discounts and the Three-Column Cash Book",
    icon: "💵", estimatedTime: "4 min read",
    sections: [
      { heading: "Types of Discount", type: "cards", items: [
        { title: "Trade discount", body: "Reduction from list price given to trade buyers. NOT recorded in the books." },
        { title: "Cash discount", body: "Reduction for prompt payment. It IS recorded in the books." },
        { title: "Discount allowed", body: "Cash discount given to CUSTOMERS. An expense to the business." },
        { title: "Discount received", body: "Cash discount received from SUPPLIERS. A gain (income)." },
      ]},
      { heading: "The Three-Column Cash Book", type: "cards", items: [
        { title: "Debit side (receipts)", body: "Columns: Discount allowed, Cash, Bank." },
        { title: "Credit side (payments)", body: "Columns: Discount received, Cash, Bank." },
        { title: "Contra entry", body: "Transfer between cash and bank. Entered on both sides of the cash book, marked 'C'. Cash paid into bank: Dr Bank, Cr Cash. Cash withdrawn from bank: Dr Cash, Cr Bank." },
        { title: "Discount columns", body: "Memorandum (side) columns. They are not part of the balance of cash or bank." },
      ]},
      { heading: "Posting", type: "cards", items: [
        { title: "Individual postings", body: "Receipt from a debtor: credit his account with cash PLUS discount allowed. Payment to a creditor: debit his account with cash PLUS discount received." },
        { title: "Period totals", body: "Total of discount allowed column: DEBIT Discount allowed account (expense). Total of discount received column: CREDIT Discount received account (income)." },
      ]},
      { heading: "Worked Example", type: "steps", items: [
        "Ade owes ₦10,000. He pays ₦9,500 in settlement and is allowed ₦500 discount.",
        "Cash book (debit side): Discount allowed 500, Bank 9,500.",
        "Ade's account (credit side): ₦9,500 bank and ₦500 discount allowed = ₦10,000, clearing the debt.",
        "At period end the discount allowed total is debited to the Discount allowed account.",
        "We owe Bola ₦6,000 and pay ₦5,800, getting ₦200 discount. Cash book (credit side): Discount received 200, Bank 5,800. Bola's account is debited ₦6,000."
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Discount ALLOWED is on the DEBIT side of the cash book. Discount RECEIVED is on the CREDIT side.",
        "Trade discount is never entered in the cash book or ledger.",
        "A contra entry has both the debit and the credit inside the cash book.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Allowed = debit side (customers). Received = credit side (suppliers). Allowed is an expense. Received is income." }
    ]
  },

  "Petty Cash Book": {
    subject: "Accounts", title: "The Petty Cash Book (Imprest System)",
    icon: "🪙", estimatedTime: "3 min read",
    sections: [
      { heading: "What is the Petty Cash Book?", type: "text",
        content: "The petty cash book records small payments such as postage, stationery, transport, refreshments and cleaning. The main cashier gives the petty cashier a fixed amount (the float), and the petty cashier pays small expenses from it." },
      { heading: "The Imprest System", type: "steps", items: [
        "The main cashier gives the petty cashier a fixed float (the imprest) at the start.",
        "Every payment is supported by a petty cash voucher.",
        "At the end of the period the petty cashier totals the payments.",
        "The cashier reimburses exactly the amount spent, restoring the float to its original amount.",
        "The cycle repeats."
      ]},
      { heading: "Layout", type: "cards", items: [
        { title: "Receipts column (left)", body: "Float received and later reimbursements." },
        { title: "Total payments column", body: "Every payment." },
        { title: "Analysis columns", body: "Stationery, postage, transport, cleaning, sundry etc. Each payment is also entered in the column for its type." },
        { title: "Ledger folio", body: "Reference to the ledger accounts." },
      ]},
      { heading: "Posting", type: "cards", items: [
        { title: "Reimbursement", body: "Cash book: credit Bank (or cash). Petty cash book: debit receipts column." },
        { title: "Analysis column totals", body: "At period end each analysis column total is DEBITED to its expense account in the general ledger. The total payments column is the sum of the analysis columns." },
      ]},
      { heading: "Worked Example", type: "steps", items: [
        "Float ₦20,000 given on 1 March.",
        "During the month: stationery ₦6,000, postage ₦3,500, transport ₦5,000 (total ₦14,500).",
        "Balance in the petty cash box = 20,000 - 14,500 = ₦5,500.",
        "Imprest reimbursement = ₦14,500, restoring the float to ₦20,000.",
        "Debit Stationery 6,000, Postage 3,500, Transport 5,000; credit the cash book (bank) 14,500."
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "The reimbursement equals the amount SPENT, not the float.",
        "Petty cash is for small amounts only. Large payments go through the main cash book.",
        "Total of analysis columns must equal the total payments column.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Imprest = fixed float. Reimburse what was spent. Voucher for every payment. Analysis totals are debited to expense accounts." }
    ]
  },

  "Bank Reconciliation": {
    subject: "Accounts", title: "Bank Reconciliation Statement",
    icon: "🏦", estimatedTime: "5 min read",
    sections: [
      { heading: "Why Reconcile?", type: "text",
        content: "The balance in the cash book (bank column) often differs from the balance on the bank statement. A bank reconciliation statement explains the differences and checks for errors or fraud. It is prepared at regular intervals, usually monthly." },
      { heading: "Causes of Differences", type: "cards", items: [
        { title: "Unpresented (outstanding) cheques", body: "Cheques issued and recorded in the cash book but not yet cleared by the bank." },
        { title: "Uncredited lodgements (deposits in transit)", body: "Money paid in and recorded but not yet credited by the bank." },
        { title: "Bank charges and interest", body: "On the statement but not yet in the cash book." },
        { title: "Direct debits and standing orders", body: "Paid by the bank without the business entering them." },
        { title: "Direct credits", body: "Transfers, dividends or customer payments paid straight into the bank but not yet entered." },
        { title: "Dishonoured cheques", body: "A customer's cheque returned unpaid." },
        { title: "Errors", body: "By either the business or the bank." },
      ]},
      { heading: "Steps", type: "steps", items: [
        "Compare the cash book with the bank statement and tick the items that match.",
        "Items on the statement but not in the cash book (charges, direct debits, direct credits, dishonoured cheques) must be entered in the cash book. This gives the UPDATED cash book balance.",
        "Start the reconciliation from the bank statement balance. Add uncredited lodgements and subtract unpresented cheques.",
        "The result must equal the updated cash book balance."
      ]},
      { heading: "Worked Example", type: "steps", items: [
        "Cash book bank balance (debit) ₦5,000.",
        "Items to update: bank charges ₦200 (credit), direct credit from a customer ₦800 (debit), dishonoured cheque ₦300 (credit).",
        "Updated cash book balance = 5,000 - 200 + 800 - 300 = ₦5,300.",
        "Unpresented cheques ₦1,500. Uncredited lodgement ₦700.",
        "Bank statement balance = 5,300 + 1,500 - 700 = ₦6,100.",
        "Check: statement balance 6,100 - unpresented cheques 1,500 + uncredited lodgements 700 = ₦5,300. This agrees with the updated cash book."
      ]},
      { heading: "Rules of Thumb", type: "cards", items: [
        { title: "Starting from the bank statement balance (favourable)", body: "ADD uncredited lodgements. DEDUCT unpresented cheques." },
        { title: "If bank statement is overdrawn", body: "The signs reverse: unpresented cheques increase the overdraft, lodgements reduce it." },
        { title: "Starting from the cash book", body: "Items already in the cash book but not yet on the statement are not adjusted in the cash book. Only items on the statement but not in the cash book are." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Unpresented cheques and uncredited lodgements do NOT change the cash book. They appear only in the reconciliation.",
        "Bank charges, direct debits and dishonoured cheques DO need entries in the cash book.",
        "A debit balance in the cash book is an asset (money at the bank). On the bank's own books it is a credit balance, so the two sides look opposite.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Update the cash book first. Then from the statement: + lodgements not yet credited, - cheques not yet presented = updated cash book balance." }
    ]
  },

  "Trial Balance": {
    subject: "Accounts", title: "The Trial Balance",
    icon: "⚖️", estimatedTime: "4 min read",
    sections: [
      { heading: "What is a Trial Balance?", type: "text",
        content: "A trial balance is a list of all ledger balances at a date, in two columns (debit and credit). If double entry has been followed correctly, the two columns agree. It is a check on the arithmetic accuracy of the books, not on every kind of error." },
      { heading: "Which Balances Go Where?", type: "cards", items: [
        { title: "Debit balances", body: "Assets (cash, bank, stock at start, debtors, equipment, premises, vehicles), expenses (wages, rent, carriage inwards), purchases, returns inwards, drawings, discount allowed." },
        { title: "Credit balances", body: "Capital, liabilities (creditors, loans), sales, returns outwards, income (commission received, discount received), provisions, accumulated depreciation." },
      ]},
      { heading: "Errors That Do NOT Affect the Trial Balance", type: "cards", items: [
        { title: "Error of omission", body: "A transaction omitted completely." },
        { title: "Error of commission", body: "Right class but wrong account (e.g. debited Ola instead of Ade)." },
        { title: "Error of principle", body: "Wrong class of account (e.g. van bought debited to purchases)." },
        { title: "Compensating errors", body: "Two errors of equal amount on opposite sides cancel out." },
        { title: "Error of original entry", body: "Wrong amount entered on both sides (e.g. 540 entered as 450)." },
        { title: "Error of reversal", body: "Debit and credit swapped between the right accounts." },
      ]},
      { heading: "Errors That DO Cause a Difference", type: "cards", items: [
        { title: "One-sided entry", body: "Only a debit or credit made." },
        { title: "Different amounts on the two sides", body: "Debit 500, credit 50." },
        { title: "Casting errors", body: "Wrong addition of an account or column." },
        { title: "Transposition", body: "Digits swapped on ONE side, e.g. 540 written as 450. The difference (90) is divisible by 9." },
        { title: "Balance extracted wrongly", body: "Wrong amount or side." },
      ]},
      { heading: "If the Trial Balance Does Not Agree", type: "steps", items: [
        "Re-add the columns.",
        "Check the difference: is it the same as a single entry (omitted balance), or half of it (item on the wrong side), or divisible by 9?",
        "Check that every balance was brought in.",
        "If the error cannot be found, put the difference in a SUSPENSE ACCOUNT so the books balance for now. Clear it once the error is found."
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "An agreeing trial balance does not prove the books are error-free.",
        "Closing stock is not in the trial balance (it appears as an adjustment). Opening stock is.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Six errors the TB misses: omission, commission, principle, compensating, original entry, reversal (OCP-CO-R). One-sided entries and casting errors are revealed." }
    ]
  },

  "Correction of Errors": {
    subject: "Accounts", title: "Correction of Errors",
    icon: "🛠️", estimatedTime: "5 min read",
    sections: [
      { heading: "How Errors Are Corrected", type: "text",
        content: "Errors found after the books have been closed are corrected through the journal. Do not erase or overwrite. Errors that affected the trial balance are first held in a suspense account, and the correcting journal clears it." },
      { heading: "Errors Not Affecting the Trial Balance", type: "cards", items: [
        { title: "Omission", body: "Sale of ₦3,000 to Ade omitted. Correct: Dr Ade 3,000, Cr Sales 3,000." },
        { title: "Commission", body: "Payment received from Bola ₦500 credited to Chidi. Correct: Dr Chidi 500, Cr Bola 500." },
        { title: "Principle", body: "Motor van ₦800,000 debited to purchases. Correct: Dr Motor van 800,000, Cr Purchases 800,000." },
        { title: "Compensating", body: "Sales overcast by ₦100 and purchases overcast by ₦100. Correct each: Dr Sales 100, Cr Purchases 100 (correct each one in its own account)." },
        { title: "Original entry", body: "Rent paid ₦540 entered as ₦450 on both sides. Correct: Dr Rent 90, Cr Cash 90." },
        { title: "Reversal", body: "Cash received from Ade ₦400 debited to Ade and credited to Cash. Correct: Dr Cash 800, Cr Ade 800 (twice the amount)." },
      ]},
      { heading: "Errors Affecting the Trial Balance", type: "cards", items: [
        { title: "One-sided entry", body: "Cash paid ₦600 for rent, credited to cash but the debit was missed. Journal: Dr Rent 600, Cr Suspense 600." },
        { title: "Casting error", body: "Sales account added ₦200 too little. Correct: Dr Suspense 200, Cr Sales 200." },
        { title: "Different amounts", body: "Debit ₦500 and credit ₦50 for the same transaction. Correct the smaller side by ₦450 with the suspense account." },
      ]},
      { heading: "Corrected Profit", type: "steps", items: [
        "Original net profit = ₦80,000.",
        "Error 1: A machine costing ₦5,000 was debited to purchases. Purchases were overstated, so profit understated: +₦5,000.",
        "Error 2: Repairs of ₦4,000 were debited to machinery. Expenses understated, so profit overstated: -₦4,000.",
        "Corrected profit = 80,000 + 5,000 - 4,000 = ₦81,000."
      ]},
      { heading: "Which Errors Affect Profit?", type: "cards", items: [
        { title: "Affect profit", body: "Errors involving expense or income accounts (purchases, sales, rent, discount) that move amounts between a nominal account and a balance sheet account (asset or liability)." },
        { title: "Do not affect profit", body: "Errors between two personal accounts, or between two asset or two liability accounts." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "For reversal errors, the correcting entry is TWICE the original amount.",
        "Always say whether profit goes up or down with the correction.",
        "Do not use the suspense account for errors that do not affect the trial balance.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Reverse the wrong entry and make the right one. Capital expenditure treated as an expense lowers profit. An expense treated as capital raises profit." }
    ]
  },

  "Provision for Bad Debts": {
    subject: "Accounts", title: "Bad Debts and Provision for Bad Debts",
    icon: "📉", estimatedTime: "4 min read",
    sections: [
      { heading: "Bad Debts and Provisions", type: "cards", items: [
        { title: "Bad debt", body: "A debt that definitely cannot be collected (customer bankrupt or untraceable). It is written off as an expense." },
        { title: "Provision (allowance) for bad debts", body: "An estimate of debts that MAY become bad, set aside out of profit. Based on prudence." },
        { title: "Bad debts recovered", body: "A debt previously written off is later paid." },
      ]},
      { heading: "Entries", type: "cards", items: [
        { title: "Writing off a bad debt", body: "Dr Bad debts account, Cr Debtor's account. At year end, bad debts are transferred to the profit and loss account." },
        { title: "Creating the provision", body: "Dr Profit and loss, Cr Provision for bad debts." },
        { title: "Increase in provision", body: "Only the INCREASE is charged to profit and loss." },
        { title: "Decrease in provision", body: "Dr Provision for bad debts, Cr Profit and loss (the decrease is a gain)." },
        { title: "Bad debt recovered", body: "Dr Cash or Bank, Cr Bad debts recovered (income)." },
        { title: "Provision for discount allowed", body: "Calculated on debtors AFTER deducting the provision for bad debts." },
      ]},
      { heading: "Worked Example", type: "steps", items: [
        "Debtors at year end ₦50,000. Bad debts of ₦2,000 to be written off. Provision is to be 5% of debtors. Old provision ₦1,500.",
        "Debtors after writing off = 50,000 - 2,000 = ₦48,000.",
        "New provision = 5% x 48,000 = ₦2,400.",
        "Increase = 2,400 - 1,500 = ₦900.",
        "Profit and loss is charged: bad debts 2,000 + increase in provision 900 = ₦2,900.",
        "Balance sheet: debtors 48,000 less provision 2,400 = ₦45,600."
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Provision is calculated on debtors AFTER bad debts have been written off.",
        "Only the change in the provision goes to profit and loss.",
        "The provision is deducted from debtors in the balance sheet. It does not reduce an individual debtor's account.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Write off first, then provide. New provision minus old provision = the amount to charge (or credit) to profit and loss." }
    ]
  },

  "Adjustments & Final Accounts": {
    subject: "Accounts", title: "Year-End Adjustments",
    icon: "🔧", estimatedTime: "5 min read",
    sections: [
      { heading: "Why Adjust?", type: "text",
        content: "Under the accruals (matching) concept, income and expenses belong to the period in which they are earned or incurred, not when cash is received or paid. So the trial balance is adjusted before final accounts are prepared. Every adjustment has a DOUBLE effect: one in the income statement (trading and profit and loss) and one in the balance sheet." },
      { heading: "Common Adjustments", type: "cards", items: [
        { title: "Closing stock", body: "Deduct from cost of goods sold in the trading account. Show as a current asset in the balance sheet." },
        { title: "Accrued expenses (owing)", body: "Add to the expense in profit and loss. Show as a current liability." },
        { title: "Prepaid expenses", body: "Deduct from the expense in profit and loss. Show as a current asset." },
        { title: "Accrued income", body: "Add to income in profit and loss. Show as a current asset." },
        { title: "Income received in advance", body: "Deduct from income. Show as a current liability." },
        { title: "Depreciation", body: "Charge as an expense. Deduct from the fixed asset in the balance sheet." },
        { title: "Bad debts", body: "Expense in profit and loss. Deduct from debtors." },
        { title: "Provision for bad debts", body: "Increase or decrease through profit and loss. Deduct from debtors." },
        { title: "Goods taken by the owner", body: "Deduct from purchases. Add to drawings." },
      ]},
      { heading: "Worked Examples", type: "steps", items: [
        "Rent paid ₦12,000 includes ₦2,000 paid in advance for next year. Profit and loss: 12,000 - 2,000 = ₦10,000. Balance sheet: prepaid rent ₦2,000 (current asset).",
        "Wages paid ₦40,000. ₦5,000 is owing. Profit and loss: 40,000 + 5,000 = ₦45,000. Balance sheet: accrued wages ₦5,000 (current liability).",
        "Machinery ₦400,000 depreciated at 10% straight line: ₦40,000 in profit and loss. Balance sheet: machinery 400,000 - 40,000 = ₦360,000 net book value.",
        "Closing stock ₦25,000: trading account (deduct from cost of sales), balance sheet (current asset)."
      ]},
      { heading: "Formula", type: "cards", items: [
        { title: "Expense for the year", body: "Cash paid + opening accrual (owed at start, paid this year)... use the simple form: Amount paid + closing accrual - closing prepayment (if there are no opening balances)." },
        { title: "With opening balances", body: "Expense = Paid - opening accrual + closing accrual + opening prepayment - closing prepayment." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Accrued = owed (liability). Prepaid = paid in advance (asset).",
        "Each adjustment appears TWICE: once in the income statement and once in the balance sheet.",
        "Closing stock appears in the trading account and in the balance sheet, but not in the trial balance.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Owing: add to expense, creditor in balance sheet. Prepaid: deduct from expense, asset in balance sheet. Depreciation: expense and reduces the asset." }
    ]
  },

  "Final Accounts": {
    subject: "Accounts", title: "Final Accounts of a Sole Trader",
    icon: "📊", estimatedTime: "5 min read",
    sections: [
      { heading: "The Three Statements", type: "cards", items: [
        { title: "Trading account", body: "Shows GROSS PROFIT: net sales less cost of goods sold." },
        { title: "Profit and loss account", body: "Shows NET PROFIT: gross profit plus other income less expenses." },
        { title: "Balance sheet", body: "Shows assets, liabilities and capital on a date." },
      ]},
      { heading: "Key Formulas", type: "cards", items: [
        { title: "Net sales", body: "Sales - returns inwards." },
        { title: "Net purchases", body: "Purchases - returns outwards." },
        { title: "Cost of goods sold", body: "Opening stock + net purchases + carriage inwards - closing stock." },
        { title: "Gross profit", body: "Net sales - cost of goods sold." },
        { title: "Net profit", body: "Gross profit + other income - total expenses." },
        { title: "Capital at end", body: "Opening capital + net profit - drawings (+ additional capital)." },
      ]},
      { heading: "Worked Example: Trading and Profit and Loss", type: "steps", items: [
        "Sales ₦100,000. Returns inwards ₦2,000. Net sales = ₦98,000.",
        "Opening stock ₦10,000. Purchases ₦60,000. Returns outwards ₦1,000. Carriage inwards ₦500. Closing stock ₦12,000.",
        "Cost of goods sold = 10,000 + 60,000 - 1,000 + 500 - 12,000 = ₦57,500.",
        "Gross profit = 98,000 - 57,500 = ₦40,500.",
        "Expenses (rent, wages, carriage outwards, depreciation) = ₦15,500.",
        "Net profit = 40,500 - 15,500 = ₦25,000."
      ]},
      { heading: "Balance Sheet Layout", type: "cards", items: [
        { title: "Fixed (non-current) assets", body: "Land and buildings, machinery, vehicles, furniture. Shown at cost, less accumulated depreciation, equals net book value." },
        { title: "Current assets", body: "Stock, debtors (less provision), prepayments, bank, cash. Listed from least liquid to most liquid." },
        { title: "Current liabilities", body: "Creditors, accruals, bank overdraft, due within a year." },
        { title: "Working capital", body: "Current assets - current liabilities." },
        { title: "Long-term liabilities", body: "Loans repayable after more than a year." },
        { title: "Financed by", body: "Capital + net profit - drawings (and long-term liabilities)." },
      ]},
      { heading: "Where Expenses Go", type: "cards", items: [
        { title: "Trading account", body: "Carriage INWARDS, import duty, wages of production, purchases." },
        { title: "Profit and loss account", body: "Carriage OUTWARDS, rent, salaries, advertising, depreciation, bad debts, discount allowed, interest." },
        { title: "Other income", body: "Discount received, commission received, rent received. Added to gross profit." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Carriage inwards goes into the trading account. Carriage outwards is a profit and loss expense.",
        "Drawings are NOT an expense. They are deducted from capital in the balance sheet.",
        "Purchases of fixed assets are not expenses.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Trading gives gross profit. Profit and loss gives net profit. Balance sheet: assets equal capital plus liabilities. Carriage inwards in trading, carriage outwards in profit and loss." }
    ]
  },

  "Fixed Assets & Depreciation": {
    subject: "Accounts", title: "Fixed Assets, Depreciation and Disposal",
    icon: "🚜", estimatedTime: "5 min read",
    sections: [
      { heading: "Fixed Assets", type: "text",
        content: "Fixed (non-current) assets are items kept for use in the business over more than one year, not for resale: land, buildings, machinery, vehicles, furniture. Spending on them is CAPITAL expenditure. Spending on day-to-day running and repairs is REVENUE expenditure." },
      { heading: "Capital vs Revenue Expenditure", type: "cards", items: [
        { title: "Capital expenditure", body: "Buying an asset, improving it or adding to its value, plus costs to bring it into use (delivery, installation, legal fees). Shown in the balance sheet." },
        { title: "Revenue expenditure", body: "Repairs, maintenance, fuel, wages, depreciation. Charged to profit and loss." },
      ]},
      { heading: "Depreciation", type: "cards", items: [
        { title: "Meaning", body: "The spreading of the cost of a fixed asset over its useful life. It is a non-cash expense." },
        { title: "Causes", body: "Wear and tear, obsolescence, passage of time, depletion." },
        { title: "Straight-line", body: "(Cost - residual value) / useful life. Same amount every year." },
        { title: "Reducing balance", body: "A fixed percentage of the net book value each year. Larger charge early, smaller later." },
        { title: "Net book value (NBV)", body: "Cost - accumulated depreciation." },
      ]},
      { heading: "Worked Examples", type: "steps", items: [
        "Machine cost ₦500,000, residual value ₦50,000, life 5 years.",
        "Straight-line: (500,000 - 50,000) / 5 = ₦90,000 a year.",
        "Reducing balance at 20%: Year 1 = 20% x 500,000 = ₦100,000, NBV 400,000. Year 2 = 20% x 400,000 = ₦80,000, NBV 320,000."
      ]},
      { heading: "Accounting Entries for Depreciation", type: "cards", items: [
        { title: "Each year", body: "Dr Depreciation expense (profit and loss), Cr Provision for depreciation (accumulated depreciation) account." },
        { title: "Balance sheet", body: "Asset shown at cost, less accumulated depreciation, equals NBV." },
      ]},
      { heading: "Disposal of a Fixed Asset", type: "steps", items: [
        "Transfer the asset at cost: Dr Disposal account, Cr Asset account.",
        "Transfer accumulated depreciation to date: Dr Provision for depreciation, Cr Disposal account.",
        "Record the proceeds: Dr Bank (or debtor), Cr Disposal account.",
        "The balance on the disposal account is the profit or loss on disposal. Credit balance of the disposal account = profit. Debit balance = loss."
      ]},
      { heading: "Worked Disposal", type: "steps", items: [
        "The machine above (cost ₦500,000, depreciated at 20% reducing balance) is sold at the end of Year 2 for ₦280,000.",
        "Accumulated depreciation = 100,000 + 80,000 = ₦180,000. NBV = ₦320,000.",
        "Disposal account: Dr cost 500,000. Cr accumulated depreciation 180,000 and proceeds 280,000 (total 460,000).",
        "Loss on disposal = 500,000 - 460,000 = ₦40,000 (equals NBV 320,000 - proceeds 280,000), charged to profit and loss."
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Depreciation does not set cash aside. It only spreads cost.",
        "Straight-line uses COST (less residual). Reducing balance uses the NBV.",
        "Profit or loss on disposal = proceeds - NBV.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Straight-line: (cost - scrap) / life. Reducing balance: % of NBV. Disposal profit = proceeds - NBV. Loss if proceeds are below NBV." }
    ]
  },

  "Financial Ratios": {
    subject: "Accounts", title: "Financial Ratios (Accounting Ratios)",
    icon: "📐", estimatedTime: "5 min read",
    sections: [
      { heading: "Why Ratios?", type: "text",
        content: "Ratios turn figures from the final accounts into relationships that make it easier to judge profitability, liquidity and efficiency, and to compare one year or one firm with another." },
      { heading: "Profitability Ratios", type: "cards", items: [
        { title: "Gross profit margin", body: "Gross profit / Net sales x 100." },
        { title: "Net profit margin", body: "Net profit / Net sales x 100." },
        { title: "Mark-up", body: "Gross profit / Cost of goods sold x 100." },
        { title: "Return on capital employed (ROCE)", body: "Net profit / Capital employed x 100. Capital employed = capital + long-term liabilities (or fixed assets + working capital)." },
        { title: "Expenses ratio", body: "A particular expense / Net sales x 100." },
      ]},
      { heading: "Liquidity Ratios", type: "cards", items: [
        { title: "Current ratio (working capital ratio)", body: "Current assets : Current liabilities. Commonly said to be ideal around 2:1." },
        { title: "Acid test (quick) ratio", body: "(Current assets - stock) : Current liabilities. Commonly said to be ideal around 1:1." },
      ]},
      { heading: "Efficiency Ratios", type: "cards", items: [
        { title: "Rate of stock turnover", body: "Cost of goods sold / Average stock. Times stock is sold and replaced in a year." },
        { title: "Debtors' collection period", body: "(Debtors / Credit sales) x 365 days." },
        { title: "Creditors' payment period", body: "(Creditors / Credit purchases) x 365 days." },
        { title: "Asset turnover", body: "Net sales / Net assets (or fixed assets)." },
      ]},
      { heading: "Worked Example", type: "steps", items: [
        "Net sales ₦200,000. Cost of goods sold ₦140,000. Net profit ₦20,000.",
        "Gross profit = 200,000 - 140,000 = ₦60,000. Gross margin = 60,000 / 200,000 = 30%.",
        "Net margin = 20,000 / 200,000 = 10%. Mark-up = 60,000 / 140,000 = 42.9%.",
        "Current assets ₦80,000 including stock ₦30,000. Current liabilities ₦40,000.",
        "Current ratio = 80,000 : 40,000 = 2:1. Acid test = (80,000 - 30,000) : 40,000 = 1.25:1.",
        "Debtors ₦24,000, credit sales ₦200,000: collection period = 24,000 / 200,000 x 365 = 43.8 days."
      ]},
      { heading: "Interpreting", type: "cards", items: [
        { title: "Falling gross margin", body: "Costs rising, selling prices cut, or stock losses." },
        { title: "Low current ratio", body: "Possible difficulty paying short-term debts." },
        { title: "Very high current ratio", body: "Idle resources, too much stock or cash." },
        { title: "Long collection period", body: "Poor credit control and risk of bad debts." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Margin uses SALES as the base. Mark-up uses COST as the base.",
        "The acid test excludes STOCK.",
        "Use credit sales (not total sales) for the debtors' collection period when given.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Margin = profit / sales. Mark-up = profit / cost. Current ratio = CA : CL. Acid test = (CA - stock) : CL. ROCE = net profit / capital employed." }
    ]
  },

  "Bills of Exchange": {
    subject: "Accounts", title: "Bills of Exchange",
    icon: "📄", estimatedTime: "5 min read",
    sections: [
      { heading: "What is a Bill of Exchange?", type: "text",
        content: "A bill of exchange is an unconditional written order from one person (the DRAWER) to another (the DRAWEE) to pay a fixed sum of money on demand or on a stated future date to a named person (the PAYEE) or to the bearer. It is a credit instrument that can be transferred." },
      { heading: "Parties", type: "cards", items: [
        { title: "Drawer", body: "The person who writes and signs the bill (usually the seller or creditor). Becomes the holder of a bill receivable." },
        { title: "Drawee", body: "The person ordered to pay (usually the buyer or debtor). Becomes the ACCEPTOR when he signs 'accepted' on it." },
        { title: "Payee", body: "The person to be paid (may be the drawer himself or another party)." },
        { title: "Endorsement", body: "The holder signs the back to transfer the bill to someone else." },
      ]},
      { heading: "Key Terms", type: "cards", items: [
        { title: "Acceptance", body: "The drawee agrees to pay by signing the bill." },
        { title: "Maturity", body: "The date the bill falls due. A 3-month bill dated 1 January matures on 1 April (older practice added 3 days of grace)." },
        { title: "Discounting", body: "The holder sells the bill to a bank before maturity for less than its face value. The difference is the discount (a financing cost)." },
        { title: "Dishonour", body: "The acceptor fails to pay on maturity." },
        { title: "Noting", body: "A notary public notes the dishonour as proof." },
        { title: "Retiring a bill", body: "The acceptor pays the bill before maturity, usually with a rebate." },
        { title: "Renewal", body: "A dishonoured or due bill is replaced by a new one, with interest." },
        { title: "Promissory note", body: "A written promise by the maker to pay a sum. Only TWO parties (maker and payee), unlike a bill (three)." },
      ]},
      { heading: "Entries in the Drawer's Books (Seller)", type: "steps", items: [
        "Sale on credit: Dr Debtor, Cr Sales.",
        "Bill accepted by the debtor: Dr Bills receivable, Cr Debtor.",
        "Bill paid at maturity: Dr Bank, Cr Bills receivable.",
        "If discounted with the bank: Dr Bank, Dr Discount on bills (expense), Cr Bills receivable.",
        "If dishonoured at maturity: Dr Debtor, Cr Bills receivable (or Bank if the bill was discounted)."
      ]},
      { heading: "Entries in the Drawee's Books (Buyer)", type: "steps", items: [
        "Purchase on credit: Dr Purchases, Cr Creditor.",
        "Bill accepted: Dr Creditor, Cr Bills payable.",
        "Bill paid at maturity: Dr Bills payable, Cr Bank.",
        "If dishonoured: Dr Bills payable, Cr Creditor."
      ]},
      { heading: "Worked Example: Discounting", type: "steps", items: [
        "A 3-month bill for ₦100,000 is discounted by the holder after 1 month at 12% per year.",
        "Remaining period = 2 months.",
        "Discount = 100,000 x 12% x 2/12 = ₦2,000.",
        "Proceeds = 100,000 - 2,000 = ₦98,000. Dr Bank 98,000, Dr Discount on bills 2,000, Cr Bills receivable 100,000."
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "The seller (drawer) has a bill RECEIVABLE (asset). The buyer (acceptor) has a bill PAYABLE (liability).",
        "Discount is charged on the face value for the unexpired period, not on the proceeds.",
        "A bill needs three parties. A promissory note needs two.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Drawer = writes. Drawee/acceptor = pays. Receivable for the drawer, payable for the acceptor. Discounting gives cash now at a cost. Dishonour puts the debt back on the debtor's account." }
    ]
  },

  "Capital & Equity": {
    subject: "Accounts", title: "Capital and Equity",
    icon: "🏛️", estimatedTime: "4 min read",
    sections: [
      { heading: "Capital and Equity", type: "text",
        content: "Capital (or equity) is the owners' claim on the business: Equity = Assets - Liabilities. For a sole trader it is called the capital account. For a company it is called shareholders' equity or shareholders' funds." },
      { heading: "Sole Trader and Partnership", type: "cards", items: [
        { title: "Sole trader capital", body: "Opening capital + additional capital + net profit - drawings = closing capital." },
        { title: "Partnership: fixed capital", body: "Capital accounts do not change. Profit, drawings and interest go through separate CURRENT accounts." },
        { title: "Partnership: fluctuating capital", body: "Profit and drawings are recorded directly in the capital account." },
      ]},
      { heading: "Company Equity", type: "cards", items: [
        { title: "Share capital", body: "Authorised (maximum allowed), issued, called-up and paid-up. Ordinary and preference shares." },
        { title: "Share premium", body: "Amount received above the nominal value of shares. Capital reserve that cannot be paid out as dividends." },
        { title: "Revenue reserves and retained earnings", body: "Profits kept in the business (general reserve, retained profit). Can be used for dividends." },
        { title: "Capital reserves", body: "Share premium and revaluation reserve. Not distributable as dividends." },
        { title: "Debentures", body: "Long-term loans, so liabilities, not equity." },
      ]},
      { heading: "Types of Share", type: "cards", items: [
        { title: "Ordinary shares", body: "Voting rights, variable dividend, higher risk." },
        { title: "Preference shares", body: "Fixed dividend paid before ordinary shares, usually no voting rights." },
        { title: "Bonus (capitalisation) issue", body: "Free shares to existing shareholders from reserves. Equity total unchanged." },
        { title: "Rights issue", body: "New shares offered to existing shareholders, usually below market price, to raise cash." },
      ]},
      { heading: "Worked Example: Issue at a Premium", type: "steps", items: [
        "A company issues 100,000 ordinary shares of ₦1 each at ₦1.50 per share, all paid.",
        "Cash received = 100,000 x 1.50 = ₦150,000.",
        "Dr Bank 150,000. Cr Ordinary share capital 100,000 (nominal value). Cr Share premium 50,000."
      ]},
      { heading: "Appropriation of Company Profit", type: "cards", items: [
        { title: "Uses of profit after tax", body: "Preference dividend, ordinary dividend, transfer to general reserve, balance carried forward as retained earnings." },
        { title: "Interim vs final dividend", body: "Interim = paid during the year. Final = proposed at the end and approved by shareholders." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Share premium is NOT profit. It cannot be distributed as dividend.",
        "Debentures are liabilities and debenture interest is an expense. Dividends are an appropriation of profit.",
        "Drawings (sole trader) reduce capital. Dividends (company) reduce retained earnings.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Equity = assets - liabilities. Sole trader: capital + profit - drawings. Company: share capital + share premium + reserves. Premium = price above nominal value." }
    ]
  },

  "Cost Accounting": {
    subject: "Accounts", title: "Cost Accounting and Break-even",
    icon: "🏷️", estimatedTime: "5 min read",
    sections: [
      { heading: "What is Cost Accounting?", type: "text",
        content: "Cost accounting records, classifies and analyses the costs of producing goods or services so that managers can control costs, fix prices and make decisions." },
      { heading: "Classification of Costs", type: "cards", items: [
        { title: "Direct costs", body: "Traced to a product: direct materials, direct labour, direct expenses. Together they make PRIME COST." },
        { title: "Indirect costs (overheads)", body: "Cannot be traced to one product: factory rent, supervisors' wages, depreciation, lighting." },
        { title: "Fixed costs", body: "Do not change with output in the short run: rent, insurance, salaries." },
        { title: "Variable costs", body: "Change in proportion to output: raw materials, piece-rate wages." },
        { title: "Semi-variable costs", body: "Part fixed, part variable, e.g. telephone rental plus call charges." },
      ]},
      { heading: "Cost Build-up", type: "cards", items: [
        { title: "Prime cost", body: "Direct materials + direct labour + direct expenses." },
        { title: "Factory (production) cost", body: "Prime cost + factory overheads." },
        { title: "Total cost", body: "Factory cost + administration, selling and distribution overheads." },
        { title: "Selling price", body: "Total cost + profit." },
      ]},
      { heading: "Costing Methods", type: "cards", items: [
        { title: "Job costing", body: "Each job or order costed separately (a building, a print order)." },
        { title: "Batch costing", body: "A batch of identical items." },
        { title: "Process costing", body: "Continuous production through several stages (cement, drinks)." },
        { title: "Absorption costing", body: "All production costs, fixed and variable, are charged to products." },
        { title: "Marginal costing", body: "Only variable costs are charged to products. Fixed costs are written off in the period." },
        { title: "Overhead absorption rate", body: "Budgeted overheads / budgeted activity (labour hours, machine hours or units)." },
      ]},
      { heading: "Break-even Analysis", type: "cards", items: [
        { title: "Contribution per unit", body: "Selling price - variable cost per unit." },
        { title: "Break-even point (units)", body: "Total fixed costs / contribution per unit." },
        { title: "Break-even point (sales value)", body: "Break-even units x selling price." },
        { title: "Margin of safety", body: "Actual (or budgeted) sales - break-even sales." },
      ]},
      { heading: "Worked Example", type: "steps", items: [
        "Selling price ₦50 per unit. Variable cost ₦30 per unit. Fixed costs ₦100,000.",
        "Contribution = 50 - 30 = ₦20 per unit.",
        "Break-even units = 100,000 / 20 = 5,000 units.",
        "Break-even sales = 5,000 x 50 = ₦250,000.",
        "If 6,500 units are sold, margin of safety = 6,500 - 5,000 = 1,500 units.",
        "Profit at 6,500 units = 1,500 x 20 = ₦30,000."
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Fixed cost per unit falls as output rises. Total fixed cost stays the same.",
        "Variable cost per unit stays the same. Total variable cost rises.",
        "Break-even divides FIXED costs by CONTRIBUTION, not by selling price.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Prime cost = direct materials + labour + expenses. BEP = fixed costs / (selling price - variable cost). Profit above break-even = extra units x contribution." }
    ]
  },

  "Accounting Systems": {
    subject: "Accounts", title: "Accounting Systems and the Accounting Cycle",
    icon: "🖥️", estimatedTime: "3 min read",
    sections: [
      { heading: "What is an Accounting System?", type: "text",
        content: "An accounting system is the set of people, records, procedures and equipment used to capture financial transactions and turn them into financial statements." },
      { heading: "The Accounting Cycle", type: "steps", items: [
        "Collect and check source documents.",
        "Record transactions in books of original entry (journals, day books, cash book).",
        "Post to the ledger accounts.",
        "Balance the accounts and prepare the trial balance.",
        "Make year-end adjustments.",
        "Prepare final accounts (trading, profit and loss, balance sheet).",
        "Close the books and start the new period."
      ]},
      { heading: "Types of System", type: "cards", items: [
        { title: "Manual system", body: "Handwritten books. Cheap and simple but slow, error-prone and hard to analyse." },
        { title: "Computerised system", body: "Software such as spreadsheets, Sage, QuickBooks or Tally. Fast, accurate, easy reports, but needs power, skilled staff, backups and security." },
        { title: "Single entry", body: "Incomplete records." },
        { title: "Double entry", body: "Complete records with both sides of each transaction." },
        { title: "Cash basis", body: "Records income and expenses when cash is received or paid." },
        { title: "Accrual basis", body: "Records them when earned or incurred, whether or not cash has moved." },
      ]},
      { heading: "Computerised Systems", type: "cards", items: [
        { title: "Advantages", body: "Speed, accuracy, automatic postings and reports, easy storage and retrieval." },
        { title: "Disadvantages", body: "Cost, power failure, viruses, fraud and hacking, staff training, data loss without backup." },
        { title: "Controls", body: "Passwords, regular backups, access limits, audit trails." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "The trial balance is prepared BEFORE adjustments and final accounts.",
        "Computerised systems still need correct inputs. Wrong input gives wrong output.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Cycle: document, journal, ledger, trial balance, adjustments, final accounts, close. Know the pros and cons of manual vs computerised systems." }
    ]
  },

  "Accounting Profession": {
    subject: "Accounts", title: "The Accounting Profession",
    icon: "🎓", estimatedTime: "3 min read",
    sections: [
      { heading: "Professional Bodies in Nigeria", type: "cards", items: [
        { title: "ICAN", body: "Institute of Chartered Accountants of Nigeria, established by Act in 1965. Members use ACA (Associate) or FCA (Fellow)." },
        { title: "ANAN", body: "Association of National Accountants of Nigeria, founded in 1979. Members use ACNA or FCNA." },
        { title: "FRC Nigeria", body: "Financial Reporting Council of Nigeria. Sets and regulates accounting and financial reporting standards." },
        { title: "International", body: "IFRS (International Financial Reporting Standards) issued by the IASB. Nigeria adopted IFRS from 2012." },
      ]},
      { heading: "Roles", type: "cards", items: [
        { title: "Bookkeeper", body: "Records transactions." },
        { title: "Financial accountant", body: "Prepares final accounts and reports." },
        { title: "Management accountant", body: "Budgeting, costing and decision support." },
        { title: "Auditor", body: "Independent check of the accounts. External (outside) or internal (employee)." },
        { title: "Tax accountant", body: "Computes and files taxes." },
        { title: "Consultant and insolvency practitioner", body: "Business advice, liquidations and receiverships." },
      ]},
      { heading: "Ethics (IESBA Code)", type: "cards", items: [
        { title: "Integrity", body: "Honest and straightforward." },
        { title: "Objectivity", body: "No bias or conflict of interest." },
        { title: "Professional competence and due care", body: "Keep knowledge up to date." },
        { title: "Confidentiality", body: "Do not disclose clients' information without authority." },
        { title: "Professional behaviour", body: "Comply with the law and avoid bringing the profession into disrepute." },
      ]},
      { heading: "Auditing", type: "cards", items: [
        { title: "Purpose", body: "To give an opinion on whether the accounts show a true and fair view." },
        { title: "Statutory (external) audit", body: "Required by law for companies. Done by an independent auditor appointed by shareholders." },
        { title: "Internal audit", body: "Done by employees to check controls and efficiency." },
        { title: "Qualified opinion", body: "The auditor has reservations. Unqualified (clean) opinion means no reservations." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "An auditor does not prepare the accounts. He examines and reports on them.",
        "Confidentiality duty has exceptions where the law requires disclosure.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "ICAN = chartered accountants (ACA, FCA). ANAN = national accountants. FRC regulates reporting. Ethics: integrity, objectivity, competence, confidentiality, professional behaviour." }
    ]
  },

  "Accounting History & Theory": {
    subject: "Accounts", title: "Accounting History and Theory",
    icon: "📜", estimatedTime: "3 min read",
    sections: [
      { heading: "History", type: "cards", items: [
        { title: "Early records", body: "Ancient civilisations (Mesopotamia, Egypt) kept records of trade, taxes and stores." },
        { title: "Luca Pacioli", body: "Italian friar and mathematician. In 1494 he published a book (Summa de Arithmetica) describing double-entry bookkeeping. He is called the 'father of accounting'." },
        { title: "Industrial Revolution", body: "Growth of companies, depreciation and cost accounting, need for reports to shareholders." },
        { title: "Twentieth century", body: "Professional bodies and standards. In Nigeria, ICAN was established in 1965." },
        { title: "Modern era", body: "Computerised accounting and IFRS." },
      ]},
      { heading: "Accounting Theory", type: "cards", items: [
        { title: "Purpose", body: "To give a logical framework (concepts, principles, standards) that guides how transactions are recorded and reported." },
        { title: "Accounting concepts", body: "Going concern, accruals, consistency, prudence, materiality, business entity, money measurement, historical cost, duality, realisation and periodicity." },
        { title: "Accounting standards", body: "Rules that ensure uniform, comparable financial statements (IFRS and the Nigerian reporting framework)." },
        { title: "Qualitative characteristics", body: "Relevance, faithful representation, comparability, verifiability, timeliness, understandability." },
      ]},
      { heading: "Key Concepts in Brief", type: "cards", items: [
        { title: "Business entity", body: "The business is separate from its owner." },
        { title: "Going concern", body: "The business will continue." },
        { title: "Money measurement", body: "Only items measurable in money are recorded." },
        { title: "Historical cost", body: "Assets are recorded at cost." },
        { title: "Prudence", body: "Do not overstate profit or assets." },
        { title: "Consistency", body: "Use the same methods from year to year." },
        { title: "Duality", body: "Every transaction has two effects." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Pacioli did not invent double entry. He first published a clear description of it.",
        "Prudence means caution, not pessimism.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Pacioli 1494 = father of accounting. ICAN 1965. Know the main concepts and what each means." }
    ]
  },

}

export default ACCOUNTS_EXTRA_GUIDES
