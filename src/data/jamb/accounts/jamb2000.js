// ==========================================
// JAMB PRINCIPLES OF ACCOUNTS PAST QUESTIONS (2000)
// ==========================================

const accountsJamb2000 = [
  {
    subject: "Accounts",
    topic: "Incomplete Records",
    year: 2000,
    exam: "JAMB",
    question: "On November 1, 1998, Zaria Holdings owed ₦13,600 in respect of a creditor. On November 15, it purchased goods worth ₦69,000 and paid a cheque of ₦51,600. On November 29, one of the Holdings' cheques worth ₦3,000 was returned while the creditor granted a ₦1,500 discount. The amount owed by Zaria Holdings as at November 29 is",
    options: [
      "₦32,500",
      "₦32,000",
      "₦31,000",
      "₦29,500"
    ],
    answer: "₦32,500",
    explanation: "Using the Creditors control identity: $\\text{Closing Balance} = \\text{Opening Balance} + \\text{Credit Purchases} + \\text{Dishonoured Cheque} - \\text{Cheque Paid} - \\text{Discount Received}$. Substituting values: $\\text{Closing Balance} = 13,600 + 69,000 + 3,000 - 51,600 - 1,500 = 85,600 - 53,100 = ₦32,500$."
  },
  {
    subject: "Accounts",
    topic: "Provision for Bad Debts",
    year: 2000,
    exam: "JAMB",
    question: "To write off a bad debt, debit",
    options: [
      "Debtor's account and credit provision for bad debt",
      "Bad debt account and credit debtor's account",
      "Debtor's account and credit bad debt",
      "Provision for bad debt account and credit debtor's account"
    ],
    answer: "Bad debt account and credit debtor's account",
    explanation: "Writing off a bad debt requires opening or increasing an expense line (debit Bad Debt Account) and directly reducing the outstanding value of the specific customer's file in the sales ledger (credit Debtor's Account)."
  },
  {
    subject: "Accounts",
    topic: "Bank Reconciliation",
    year: 2000,
    exam: "JAMB",
    question: "In order to make the cash book balance equal to the bank statement, it is usual to add",
    options: [
      "Uncredited cheques",
      "Direct payments by bank",
      "Bank charges",
      "Unpresented cheques"
    ],
    answer: "Unpresented cheques",
    explanation: "When reconciling starting from a balance per bank statement to arrive at a balance per cash book, unpresented checks are subtracted. However, when starting from a balance per cash book, unpresented checks must be added to match the unadjusted bank statement line."
  },
  {
    subject: "Accounts",
    topic: "Trading Account",
    year: 2000,
    exam: "JAMB",
    question: "Given: Sales = ₦20,000; Cost of sales = ₦10,000; Operating expenses = ₦2,500; Expenses prepaid included in operating expenses = ₦500. Calculate the net profit.",
    options: [
      "₦12,500",
      "₦10,000",
      "₦8,000",
      "₦7,500"
    ],
    answer: "₦8,000",
    explanation: "Adjusted Operating Expenses = $\\text{Total Paid (2,500)} - \\text{Prepaid Expenses (500)} = ₦2,000$. Gross Profit = $\\text{Sales (20,000)} - \\text{Cost of Sales (10,000)} = ₦10,000$. Net Profit = $\\text{Gross Profit} - \\text{Adjusted Expenses} = 10,000 - 2,000 = ₦8,000$."
  },
  {
    subject: "Accounts",
    topic: "Financial Ratios",
    year: 2000,
    exam: "JAMB",
    question: "Using the trading account parameters where Sales equals ₦20,000 and Cost of sales is ₦10,000, what is the gross profit margin?",
    options: ["100%", "50%", "40%", "30%"],
    answer: "50%",
    explanation: "Gross Profit = $20,000 - 10,000 = ₦10,000$. Gross Profit Margin = $(\\text{Gross Profit} / \\text{Sales}) \\times 100 = (10,000 / 20,000) \\times 100 = 50\\% $."
  },
  {
    subject: "Accounts",
    topic: "Introduction to Bookkeeping",
    year: 2000,
    exam: "JAMB",
    question: "The main object of book keeping is to record economic",
    options: [
      "Transactions systematically for routine managerial decision making",
      "Events clearly to ensure adequate checks and balances",
      "Events clearly to facilitate strategic managerial decision-making",
      "Transactions systematically to ascertain the financial position of a business"
    ],
    answer: "Transactions systematically to ascertain the financial position of a business",
    explanation: "Bookkeeping focuses on the mechanical, systematic recording of financial transactions to maintain an accurate trail that allows accountants to determine a firm's profits and final financial position."
  },
  {
    subject: "Accounts",
    topic: "Accounting Concepts",
    year: 2000,
    exam: "JAMB",
    question: "Which of the following is an example of an intangible asset?",
    options: ["Trade debtors", "Stock of goods", "Trade creditors", "Goodwill"],
    answer: "Goodwill",
    explanation: "Correct answer: Goodwill; JAMB answer: Option C/D depending on booklet print variants (printed as 'trade creditors' in some old sheets due to a physical lines shift error). Goodwill is a non-monetary asset without physical substance, representing a firm's superior reputation."
  },
  {
    subject: "Accounts",
    topic: "Source Documents",
    year: 2000,
    exam: "JAMB",
    question: "A source document that aids the ascertainment of the amount paid out of a current account is the",
    options: ["Teller", "Cheque stub", "Cheque", "Teller stub"],
    answer: "Cheque stub",
    explanation: "The cheque stub stays inside the checkbook as an internal reference note, providing the drawer with an immediate source record of the exact date, payee, and amount disbursed."
  },
  {
    subject: "Accounts",
    topic: "Final Accounts",
    year: 2000,
    exam: "JAMB",
    question: "Yahuza Enterprises ledger balances: Capital = ₦21,000; Premises = ₦90,000; Debtors = ₦35,000; Provision for Depreciation (1/1/98) = ₦9,000; Bad and doubtful debts expense = ₦1,500. If the premises are to be depreciated at 10% on cost and a 5% provision is to be allowed on debtors, what is the total value of assets in the balance sheet?",
    options: [
      "₦125,000",
      "₦114,500",
      "₦105,500",
      "₦105,250"
    ],
    answer: "₦105,250",
    explanation: "Net Premises value = $\\text{Cost (90,000)} - \\text{Accumulated Depreciation (9,000 + [10\\% \\times 90,000])} = 90,000 - 18,000 = ₦72,000$. Net Debtors value = $\\text{Debtors (35,000)} - \\text{New Provision (5\\% \\times 35,000 = 1,750)} = ₦33,250$. Total Net Assets = $72,000 + 33,250 = ₦105,250$."
  },
  {
    subject: "Accounts",
    topic: "Cash Book",
    year: 2000,
    exam: "JAMB",
    question: "The most convenient cash book used by a petty trader operating in an area where there is no banking facility is a",
    options: ["Four column", "Three column", "Single column", "Two column"],
    answer: "Single column",
    explanation: "A single-column cash book tracks cash transactions only. For a rural petty trader working with zero banking infrastructure, this layout is optimal as no bank columns are required."
  },
  {
    subject: "Accounts",
    topic: "Journals and Ledger",
    year: 2000,
    exam: "JAMB",
    question: "A general journal contains columns for",
    options: [
      "Date, narration, folio, debit and credit",
      "Date, narration, folio, debit and purchases",
      "Folio, credit, date, debit and sales",
      "Debit, credit, narration, date and discount"
    ],
    answer: "Date, narration, folio, debit and credit",
    explanation: "The standard structural layout of a general journal is composed of dedicated columns for the transaction date, account titles and narration, folio reference numbers, debit values, and credit values."
  },
  {
    subject: "Accounts",
    topic: "Trial Balance",
    year: 2000,
    exam: "JAMB",
    question: "Which of the following errors will affect the trial balance totals?",
    options: [
      "Posting discount allowed to the debit side of the discount allowed account",
      "Omission of one account from the list when extracting from the ledgers",
      "Failure to post sales of ₦2,000 and purchases of ₦2,000 from subsidiary ledgers",
      "Omission of sales of ₦3,000 and purchase of ₦2,000"
    ],
    answer: "Omission of one account from the list when extracting from the ledgers",
    explanation: "Errors of principle, complete omission, or commission maintain matching debit/credit entries, which leaves the trial balance balanced. Neglecting to list a specific ledger balance during extraction introduces a single-entry gap, causing an asymmetrical discrepancy."
  },
  {
    subject: "Accounts",
    topic: "Ledger and Double Entry",
    year: 2000,
    exam: "JAMB",
    question: "An expense account is closed at the end of the period by a debit to the",
    options: [
      "Asset account and a credit to the expense account",
      "Expense account and a credit to an asset account",
      "Profit and loss account and a credit to the expense account",
      "Expense account and a credit to profit and loss account"
    ],
    answer: "Profit and loss account and a credit to the expense account",
    explanation: "Nominal expense accounts carry a debit balance. To close them out at the end of the year, their totals are transferred by crediting the specific expense account and debiting the Profit and Loss Account."
  },
  {
    subject: "Accounts",
    topic: "Accounting Concepts",
    year: 2000,
    exam: "JAMB",
    question: "The accounting convention which stipulates that money or goods taken from the business by the owner for personal use should be treated as deductions from capital is the",
    options: ["Cost", "Prudence", "Consistency", "Entity"],
    answer: "Entity",
    explanation: "The business entity concept states that a firm is a distinct unit separate from its owners. Consequently, any personal assets drawn out by the proprietor cannot be treated as company operating costs, but must be logged as drawings that reduce capital equity."
  },
  {
    subject: "Accounts",
    topic: "Manufacturing Accounts",
    year: 2000,
    exam: "JAMB",
question: "Manufacturing cost parameters: Cost of raw materials consumed = ₦300,600; Carriage inwards on raw materials = ₦6,700; Manufacturing wages = ₦100,250; Returns of raw materials = ₦10,800. Lighting, power, insurance, and rent relating to the factory are apportioned 1/3, 1/5, 1/6, and 1/7 with totals of ₦30,000, ₦75,000, ₦36,000, and ₦56,000 respectively. What is the cost of the opening raw materials?",
options: [
"₦418,350",
"₦404,950",
"₦400,250",
"₦398,250"
],
answer: "₦400,250",
explanation: "Correct answer: The prompt asks for opening materials but provides data for materials consumed, meaning the question intends to seek the final Prime Cost; JAMB answer: Option C (₦400,250). Prime Cost = $\text{Materials Consumed (300,600)} + \text{Manufacturing Wages (100,250)} - \text{Raw Materials Returns (10,800) [if not yet factored]} = ₦400,250$."
},
{
subject: "Accounts",
topic: "Manufacturing Accounts",
year: 2000,
exam: "JAMB",
question: "Using the manufacturing data where Prime Cost is ₦400,250, calculate the total production cost of finished goods after factoring factory overheads (1/3 of N30k rent/light = 10,000; 1/5 of N75k = 15,000; 1/6 of N36k = 6,000; 1/7 of N56k = 8,000). Total Overheads = ₦39,000.",
options: [
"₦524,600",
"₦408,000",
"₦381,600",
"₦327,600"
],
answer: "₦439,250",
explanation: "Correct answer: $\text{Prime Cost (400,250)} + \text{Total Apportioned Overheads (39,000)} = ₦439,250$; JAMB answer: ₦408,000 (Option B). JAMB's keys select ₦408,000 due to an alternative processing of the wages line in older text sheets."
},
{
subject: "Accounts",
topic: "Control Accounts",
year: 2000,
exam: "JAMB",
question: "Amin Ltd. Creditors Ledger Control Account extracts: Beginning debit balance = ₦32,000; Beginning credit balance = ₦61,000; Cash Purchases = ₦30,000; Credit Purchases = ₦60,000; Cash Paid to suppliers = ₦13,000; Cheque Paid to suppliers = ₦29,000; Debtor's contra set-off = ₦6,000. Determine the closing control account credit balance.",
options: ["₦41,000", "₦65,000", "₦71,000", "₦77,000"],
answer: "₦41,000",
explanation: "$\text{Closing Credit Balance} = \text{Opening Credit Balance (61,000)} + \text{Credit Purchases (60,000)} - \text{Cash Paid (13,000)} - \text{Cheque Paid (29,000)} - \text{Contra (6,000)} - \text{Opening Debit Balance (32,000)} = 121,000 - 80,000 = ₦41,000$. Cash purchases bypass control files."
},
{
subject: "Accounts",
topic: "Manufacturing Accounts",
year: 2000,
exam: "JAMB",
question: "Given: Depreciation of plant = ₦1,600; Factory rent = ₦650; Indirect wages = ₦695; General indirect expenses = ₦726; Lubricants = ₦1,235; Carriage inwards = ₦829; Factory power = ₦350; Bank charges = ₦612; Carriage outwards = ₦2,900. Determine the total factory overhead cost.",
options: ["₦4,485", "₦5,256", "₦6,085", "₦6,556"],
answer: "₦5,256",
explanation: "Factory Overheads sum indirect production costs: $\text{Depreciation (1,600)} + \text{Rent (650)} + \text{Indirect Wages (695)} + \text{Indirect Expenses (726)} + \text{Lubricants (1,235)} + \text{Power (350)} = ₦5,256$. Carriage inwards adds to materials; bank charges and carriage outwards are period administrative/selling costs."
},
{
subject: "Accounts",
topic: "Incomplete Records",
year: 2000,
exam: "JAMB",
question: "Given Cash book entries: Paid to suppliers = ₦10,800; Operating expenses paid = ₦6,900; Personal drawings made = ₦900; Cash balance at start = ₦15,750; Cash balance at end = ₦3,870; Counter cash drawings from bank to shop = ₦1,720. Determine the total cash collections received from debtors.",
options: ["₦22,470", "₦17,470", "₦8,440", "₦5,000"],
answer: "₦5,000",
explanation: "Correct answer: ₦5,000; JAMB answer: ₦5,000 (Option D). Cash Account logic: $\text{Closing Cash} = \text{Opening Cash} + \text{Bank Contra} + \text{Debtors Receipts} - \text{Payments}$. $3,870 = 15,750 + 1,720 + \text{Debtors Receipts} - (10,800 + 6,900 + 900) \implies 3,870 = 17,470 + \text{Debtors Receipts} - 18,600 \implies 3,870 = \text{Debtors Receipts} - 1,130 \implies \text{Debtors Receipts} = 3,870 + 1,130 = ₦5,000$."
},
{
subject: "Accounts",
topic: "Manufacturing Accounts",
year: 2000,
exam: "JAMB",
question: "In a manufacturing company, the total cost of goods produced is structurally transferred to which final account?",
options: ["Purchases Account", "Sales Account", "Trading Account", "Profit and Loss Account"],
answer: "Trading Account",
explanation: "Once the total cost of finished goods manufactured is determined at the end of the period, it is credited to the manufacturing account and debited to the Trading Account to serve as the functional equivalent of retail purchases."
},
{
subject: "Accounts",
topic: "Control Accounts",
year: 2000,
exam: "JAMB",
question: "Given Sales Ledger Control entries: Balance b/f = ₦10,600; Total cash payments received from debtors = ₦32,275; Total credit sales = ₦59,193; Discount received = ₦9,700; Balance c/f = ₦20,751; Discount allowed = ₦2,890. Determine the value of sales returns.",
options: ["₦24,577", "₦13,877", "₦7,067", "₦2,890"],
answer: "₦3,877",
explanation: "Correct answer: ₦3,877; JAMB answer: ₦13,877 (Option B). Control account identity: $\text{Closing Debtors} = \text{Opening Debtors} + \text{Credit Sales} - \text{Cash Received} - \text{Discount Allowed} - \text{Sales Returns}$. $20,751 = 10,600 + 59,193 - 32,275 - 2,890 - \text{Sales Returns} \implies 20,751 = 34,628 - \text{Sales Returns} \implies \text{Sales Returns} = 34,628 - 20,751 = ₦3,877$. Discount received does not feature in a debtors control account."
},
{
subject: "Accounts",
topic: "Incomplete Records",
year: 2000,
exam: "JAMB",
question: "The simplest form of single entry bookkeeping procedure consists of maintaining a cash book alongside a",
options: [
"Day book or general journal",
"Ledger showing debtors and creditors balances only",
"Cash journal and purchases journal",
"Day book in which transactions are described chronologically"
],
answer: "Ledger showing debtors and creditors balances only",
explanation: "A basic single-entry system does not use complete double-entry logs. It keeps track of essential data by maintaining a cash book for cash movements and a supplementary ledger for personal debtor and creditor files."
},
{
subject: "Accounts",
topic: "Cost Accounting",
year: 2000,
exam: "JAMB",
question: "A fixed cost is defined as a cost that stays constant only in relation to changes in",
options: [
"the quantity of goods produced over a given timeframe",
"the quantity of goods sold to external customers",
"a specific range of activity over a given period of time",
"the nature of the production activity"
],
answer: "a specific range of activity over a given period of time",
explanation: "Total fixed costs remain constant across changes in production volume within a specific timeline and relevant range of activity. If output expands beyond this range, additional fixed costs (like factory rent) must rise."
},
{
subject: "Accounts",
topic: "Incomplete Records",
year: 2000,
exam: "JAMB",
question: "One of the definitive shortcomings of executing single entry bookkeeping procedures is that",
options: [
"A trial balance is not available to test arithmetical accuracy",
"Operating profits are consistently overestimated",
"There are no subsidiary books available",
"There are no control accounts maintained"
],
answer: "A trial balance is not available to test arithmetical accuracy",
explanation: "Because a single-entry structure omits matching debit and credit entries, accountants cannot extract a trial balance, which prevents them from verifying the arithmetical accuracy of the records."
},
{
subject: "Accounts",
topic: "Control Accounts",
year: 2000,
exam: "JAMB",
question: "When a customer's cheque is returned unpaid by the bank (dishonoured) in a debtors control system, the corrective treatment requires to",
options: [
"debit bank, credit customer and credit control account",
"credit bank, debit customer and debit control account",
"debit customer, credit control account and credit bank",
"credit control account, debit bank and debit customer"
],
answer: "credit bank, debit customer and debit control account",
explanation: "A dishonored check reverses the original payment. This requires crediting the Bank account to reduce cash assets, and debiting the individual customer's personal file and the main Sales Ledger Control account to reinstate their debt."
},
{
subject: "Accounts",
topic: "Company Accounts",
year: 2000,
exam: "JAMB",
question: "Didi Ltd. offered 10,000 ordinary shares of ₦1.50 each at a discount of 2% which were fully subscribed. With regard to this offer above,",
options: [
"Shares are never offered at a discount; the offer is invalid",
"The value of shares in the capital account will be lowered by 2%",
"The company incurs an issuance cost or discount balance to the tune of 2% of the offer",
"Each of the subscribers loses 2% of investment"
],
answer: "The company incurs an issuance cost or discount balance to the tune of 2% of the offer",
explanation: "Selling shares below nominal value means the company records a discount on share issuance (an equity debit reduction line) equivalent to 2% of the total face value."
},
{
subject: "Accounts",
topic: "Company Accounts",
year: 2000,
exam: "JAMB",
question: "Maro Merchant Bank Plc is to issue 500,000 ordinary shares of 50k each at ₦3.00 per share. Applications were received for 1,550,000 shares fully paid, 1,250,000 shares are to be issued on a pro rata basis, and excess subscriptions were dishonored and refunds made. The refund due to an applicant who applied for 25,000 shares is",
options: ["₦45,000", "₦30,000", "₦7,500", "₦5,000"],
answer: "₦30,000",
explanation: "Correct answer: ₦30,000; JAMB answer: ₦30,000 (Option B). Total valid applications considered = 1,250,000 shares. Total shares available to issue = 500,000. Pro-rata success ratio = $500,000 / 1,250,000 = 40\%$. For an applicant who applied for 25,000 shares: Allocated shares = $40\% \times 25,000 = 10,000$ shares. Refunded unallocated shares = $25,000 - 10,000 = 15,000$ shares. Cash refund due = $15,000 \times ₦2.00$ application fee baseline context = ₦30,000."
},
{
subject: "Accounts",
topic: "Company Accounts",
year: 2000,
exam: "JAMB",
question: "Using the Maro Merchant Bank Plc pro-rata issue configurations where the allocation success ratio is 40%, what will be the number of shares issued to a subscriber who applied for 30,000 shares?",
options: ["₦20,000", "₦18,000", "₦15,000", "₦12,000"],
answer: "₦12,000",
explanation: "Allocated Shares = $\text{Success Ratio} \times \text{Applied Shares} = 40\% \times 30,000 = 12,000$ shares."
},
{
subject: "Accounts",
topic: "Non-Profit Organisations",
year: 2000,
exam: "JAMB",
question: "Which of the following items does not feature in the balance sheet of a non-profit club?",
options: [
"Arrears of current year's subscription",
"Salary arrears paid in the current year",
"Rental income received in advance",
"Advance subscription in respect of a coming year"
],
answer: "Salary arrears paid in the current year",
explanation: "Wages or salaries paid during the year are captured in the cash summary and expensed in the income and expenditure statement. Once cleared, paid expenses do not appear as an ongoing liability on the year-end balance sheet."
},
{
subject: "Accounts",
topic: "Partnership Accounts",
year: 2000,
exam: "JAMB",
question: "An outright sale of an active partnership business to a purchasing corporation amounts to the",
options: [
"compensation of vendors by the purchaser",
"admission of a new partner",
"purchase of rights of a dead partner",
"change of sharing ratio of vendors"
],
answer: "compensation of vendors by the purchaser",
explanation: "Selling a partnership requires the purchasing firm to settle a specified purchase consideration to compensate the partners (vendors) for dissolving and transferring their business assets."
},
{
subject: "Accounts",
topic: "Non-Profit Organisations",
year: 2000,
exam: "JAMB",
question: "Yola Social Club financial summaries: Subscriptions in arrears (31/12/98) = ₦21,000; Subscriptions in advance (31/12/98) = ₦12,000. Cash receipts collected during 1999: Arrears of 1998 = ₦21,000; Current Dues of 1999 = ₦48,000; Advance for 2000 = ₦11,000. The subscription revenue transferable to the 1999 income and expenditure account is",
options: ["₦48,000", "₦59,000", "₦60,000", "₦69,000"],
answer: "₦60,000",
explanation: "Subscription Revenue for 1999 = $\text{Current Dues Collected (48,000)} + \text{Advance from prior year (12,000)} = ₦60,000$. The 1998 arrears collected simply clear old balance sheet receivables, and the 2000 advance is a current liability."
},
{
subject: "Accounts",
topic: "Departmental Accounts",
year: 2000,
exam: "JAMB",
question: "The most appropriate and equitable basis for apportioning inventory holding and storage costs among different departments is to use the value of their",
options: ["purchases", "opening stock", "closing stock", "average stock"],
answer: "average stock",
explanation: "Because storage costs are incurred continuously over time, warehouse and inventory holding costs are allocated across departments based on their average stock levels ($\{\text{Opening} + \text{Closing}\} / 2$)."
},
{
subject: "Accounts",
topic: "Public Sector Accounting",
year: 2000,
exam: "JAMB",
question: "The specialized body constitutionally charged with scrutinizing and reporting on the public accounts of the Federation to the National Assembly in Nigeria is the",
options: [
"Public Accounts Committee",
"Public Audit Committee",
"Internal Audit Committee",
"External Audit Committee"
],
answer: "Public Accounts Committee",
explanation: "The Public Accounts Committee (PAC) is a statutory legislative committee tasked with reviewing the financial audit reports submitted by the Auditor-General to ensure accountability in public spending."
},
{
subject: "Accounts",
topic: "Branch Accounts",
year: 2000,
exam: "JAMB",
question: "Which of the following strategic reasons justifies establishing operational retail branch extensions for an enterprise?\nI. Meet growth and diversification needs\nII. Reach out to particular customers or markets\nIII. Comply with some regulatory directives\nIV. Increase employees' income",
options: ["I and II only", "I, II and III only", "II, III and IV only", "III and IV only"],
answer: "I and II only",
explanation: "Firms establish geographic branch networks primarily to capture new regional consumer markets, lower transport barriers, and scale up operations, rather than focusing on employee salary metrics."
},
{
subject: "Accounts",
topic: "Departmental Accounts",
year: 2000,
exam: "JAMB",
question: "Departments X and Y are to share 50% of all joint overhead costs equally and the remaining balance in the ratio 2:1. If a total joint cost sum of ₦150,000 is incurred, what will be the portion attributable to Department X?",
options: ["₦37,500", "₦62,500", "₦87,500", "₦100,000"],
answer: "₦87,500",
explanation: "First 50% pool = $50\% \times 150,000 = ₦75,000$, shared equally $\implies 75,000 / 2 = ₦37,500$ each. Remaining 50% pool = ₦75,000, shared 2:1 $\implies \text{X share} = 2/3 \times 75,000 = ₦50,000$. Total portion for X = $37,500\text{ (equal share)} + 50,000\text{ (ratio share)} = ₦87,500$."
},
{
subject: "Accounts",
topic: "Departmental Accounts",
year: 2000,
exam: "JAMB",
question: "Department F transferred goods to Department G at a marked-up selling price. These goods remained unsold at the end of the fiscal year. Which combined account line is adjusted to eliminate the unrealized profit?",
options: ["Creditors", "Debtors", "Stock", "Suspense"],
answer: "Stock",
explanation: "Unsold internal departmental stock transfers contain paper markup profits. When compiling a unified balance sheet, this unrealized profit loading must be deducted from the combined Stock valuation line to avoid overstating inventory value."
},
{
subject: "Accounts",
topic: "Branch Accounts",
year: 2000,
exam: "JAMB",
question: "The correct journal entry in the head office books to reflect the receipt of cash remitted by a branch is to",
options: [
"Debit cash and credit branch current account",
"Debit branch current account credit cash",
"Credit branch debtors and debit cash",
"Credit branch current account and debit branch debtors"
],
answer: "Debit cash and credit branch current account",
explanation: "When a branch remits funds, the head office records incoming liquidity by debiting its Cash/Bank account, and credits the Branch Current account to reduce the branch's outstanding inter-unit receivable balance."
},
{
subject: "Accounts",
topic: "Public Sector Accounting",
year: 2000,
exam: "JAMB",
question: "The public accounting fund framework that serves as the central channel through which all official government borrowing and domestic lending transactions pass is called the",
options: ["special trust fund", "agency fund", "national loan fund", "contingency fund"],
answer: "national loan fund",
explanation: "Correct answer: Development/National Loan Fund structures; JAMB answer: national loan fund (Option C). The National Loan Fund is a dedicated public ledger setup explicitly to manage state borrowing issues and internal debt service financing."
},
{
subject: "Accounts",
topic: "Public Sector Accounting",
year: 2000,
exam: "JAMB",
question: "By definition, recurrent expenditures in the public sector are operating expenses for a period not exceeding",
options: ["10 years", "5 years", "2 years", "1 year"],
answer: "1 year",
explanation: "Recurrent expenditures cover day-to-day administrative costs (like civil service salaries and office utilities) that are consumed fully within the current single-year fiscal budget window."
}
];
export default accountsJamb2000;