// EXAMEDGENG — COMMERCE STUDY GUIDES (EXTRA)
// Guides for Commerce topics that did not have one yet.
// Keys match the topic names in the Commerce topic list exactly.
//
// HOW TO USE:
// 1. Save as src/data/studyGuidesCommerceExtra.js
// 2. In src/data/studyGuides.js add at the top:
//      import COMMERCE_EXTRA_GUIDES from "./studyGuidesCommerceExtra"
// 3. At the end of the STUDY_GUIDES object (next to ...BIOLOGY_EXTRA_GUIDES), add:
//      ...COMMERCE_EXTRA_GUIDES,

const COMMERCE_EXTRA_GUIDES = {

  "Introduction to Commerce": {
    subject: "Commerce", title: "Introduction to Commerce",
    icon: "🛒", estimatedTime: "3 min read",
    sections: [
      { heading: "What is Commerce?", type: "text",
        content: "Commerce is the part of business concerned with the buying and selling of goods and services (trade) and all the activities that help trade happen (aids to trade). It connects producers to consumers." },
      { heading: "Key Definitions", type: "cards", items: [
        { title: "Commerce", body: "Trade + aids to trade. Includes banking, insurance, transport, warehousing, advertising and communication." },
        { title: "Trade", body: "The actual buying and selling of goods and services. Can be home (internal) trade or foreign trade." },
        { title: "Aids to trade", body: "Services that remove obstacles to trade: banking (payment), insurance (risk), transport (distance), warehousing (time), advertising (information), communication." },
        { title: "Business", body: "Any activity carried out to make a profit. Wider than commerce because it includes industry (production)." },
        { title: "Industry", body: "Production of goods: extractive (mining, farming), manufacturing, construction." },
      ]},
      { heading: "Obstacles Commerce Removes", type: "cards", items: [
        { title: "Hindrance of PLACE", body: "Goods are made far from consumers. Removed by TRANSPORT." },
        { title: "Hindrance of TIME", body: "Goods are made before they are needed. Removed by WAREHOUSING." },
        { title: "Hindrance of RISK", body: "Fire, theft, accident. Removed by INSURANCE." },
        { title: "Hindrance of FINANCE", body: "Payment and credit. Removed by BANKING." },
        { title: "Hindrance of KNOWLEDGE", body: "Buyers need information. Removed by ADVERTISING and communication." },
      ]},
      { heading: "From Barter to Money", type: "cards", items: [
        { title: "Barter", body: "Direct exchange of goods for goods. Problem: DOUBLE COINCIDENCE OF WANTS (both parties must want what the other has)." },
        { title: "Money", body: "Introduced to solve barter problems. Functions: medium of exchange, unit of account, store of value, standard of deferred payment." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Commerce does NOT include production. Production belongs to industry.",
        "Banking, insurance and transport are AIDS to trade, not trade itself.",
        "Warehousing removes the hindrance of TIME, not place.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Commerce = trade + aids to trade. Match each aid to its hindrance: transport-place, warehousing-time, insurance-risk, banking-finance, advertising-knowledge." }
    ]
  },

  "Business Responsibilities": {
    subject: "Commerce", title: "Business Responsibilities",
    icon: "🤲", estimatedTime: "2 min read",
    sections: [
      { heading: "Social Responsibility", type: "text",
        content: "A business owes duties not only to its owners but to everyone affected by its activities. Meeting these duties is called social responsibility (or corporate social responsibility, CSR)." },
      { heading: "Responsibilities to Each Group", type: "cards", items: [
        { title: "To owners/shareholders", body: "Make a reasonable profit, pay dividends, keep honest accounts, protect their investment." },
        { title: "To employees", body: "Pay fair wages on time, safe working conditions, training, promotion, pensions, no discrimination." },
        { title: "To customers/consumers", body: "Safe goods, fair prices, honest advertising, correct weights and measures, after-sales service." },
        { title: "To government", body: "Pay taxes, obey laws, register the business, supply information, avoid smuggling and fraud." },
        { title: "To the community", body: "Avoid pollution, provide jobs, build schools, roads and clinics, support local projects." },
        { title: "To suppliers and creditors", body: "Pay debts promptly and keep promises." },
      ]},
      { heading: "Examples of CSR", type: "cards", items: [
        { title: "Community development", body: "A company in the Niger Delta building a school or health centre for host communities." },
        { title: "Environmental care", body: "Treating waste, planting trees, avoiding oil spills." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Paying tax is a responsibility to GOVERNMENT, not to the community.",
        "Making profit is a responsibility to OWNERS, but it should not be at the expense of society.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Sort every question by group: owners (profit), workers (welfare), customers (quality), government (tax), community (environment and development)." }
    ]
  },

  "Limited Liability Companies": {
    subject: "Commerce", title: "Limited Liability Companies",
    icon: "🏢", estimatedTime: "4 min read",
    sections: [
      { heading: "What is a Limited Liability Company?", type: "text",
        content: "A company is a legal person, separate from its owners. Its owners (shareholders) are liable only up to the amount unpaid on their shares, so personal property cannot be seized to pay company debts. In Nigeria companies are registered with the Corporate Affairs Commission (CAC) under the Companies and Allied Matters Act (CAMA)." },
      { heading: "Key Features", type: "cards", items: [
        { title: "Separate legal personality", body: "The company can own property, sue and be sued in its own name." },
        { title: "Limited liability", body: "Shareholders lose only what they invested (unpaid share value)." },
        { title: "Perpetual succession", body: "The company continues even if a shareholder dies or leaves." },
        { title: "Transferable shares", body: "Shares can be sold. Public company shares trade on the stock exchange." },
        { title: "Separation of ownership and control", body: "Shareholders own, directors manage." },
      ]},
      { heading: "Private vs Public Company", type: "cards", items: [
        { title: "Private limited company (Ltd)", body: "Name ends with Ltd. Cannot offer shares to the general public. Share transfer restricted. Traditionally 2 to 50 members (CAMA 2020 also allows a single-member company). Does not publish full accounts widely." },
        { title: "Public limited company (Plc)", body: "Name ends with Plc. Can invite the public to buy shares. Minimum 2 members, NO maximum. Shares may be listed on the Nigerian Exchange. Must publish accounts and hold annual general meetings." },
        { title: "Exam note", body: "For exams, private = 2 to 50 members, public = at least 2 members with no upper limit." },
      ]},
      { heading: "Formation Documents", type: "cards", items: [
        { title: "Memorandum of Association", body: "Governs the company's relationship with the OUTSIDE world: name, objects, registered office, liability, share capital." },
        { title: "Articles of Association", body: "Governs INTERNAL affairs: directors' powers, meetings, voting, dividends, share transfer." },
        { title: "Certificate of Incorporation", body: "Issued by CAC. Proves the company legally exists. For a private company it allows trading immediately." },
        { title: "Prospectus", body: "Invitation to the public to buy shares (public companies only)." },
      ]},
      { heading: "Securities Issued", type: "cards", items: [
        { title: "Ordinary (equity) shares", body: "Carry voting rights. Dividend varies with profit. Last to be paid in liquidation. Highest risk and reward." },
        { title: "Preference shares", body: "Fixed dividend rate. Paid before ordinary shareholders. Usually no voting rights." },
        { title: "Debentures", body: "Loans to the company. Fixed interest paid whether or not there is profit. Holders are CREDITORS, not owners." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Debenture holders are creditors. Shareholders are owners.",
        "Memorandum = external. Articles = internal.",
        "Dividends are paid to shareholders. Interest is paid to debenture holders.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Ltd = private, no public share offer. Plc = public, can sell shares to the public. Ordinary shares = ownership and risk. Preference = fixed dividend. Debenture = loan." }
    ]
  },

  "Business Integration": {
    subject: "Commerce", title: "Business Integration — Mergers and Combinations",
    icon: "🔗", estimatedTime: "3 min read",
    sections: [
      { heading: "What is Business Integration?", type: "text",
        content: "Business integration (combination) is when two or more firms join together to form a bigger unit, usually to cut costs, reduce competition and gain market power." },
      { heading: "Types of Integration", type: "cards", items: [
        { title: "Horizontal integration", body: "Firms at the SAME stage of production combine. Example: two bakeries or two banks merge. Aim: reduce competition, enjoy economies of scale." },
        { title: "Vertical integration", body: "Firms at DIFFERENT stages of the same chain combine. Example: a flour mill buys a bakery." },
        { title: "Backward vertical", body: "Firm takes over its SUPPLIER of raw materials (a bakery buys a flour mill)." },
        { title: "Forward vertical", body: "Firm takes over its DISTRIBUTORS or retailers (a manufacturer buys retail shops)." },
        { title: "Conglomerate (diversified)", body: "Firms in UNRELATED businesses combine. Spreads risk." },
        { title: "Lateral integration", body: "Firms making related but different products combine (e.g. soap and toothpaste)." },
      ]},
      { heading: "Methods of Combination", type: "cards", items: [
        { title: "Merger", body: "Two or more firms agree to join and one continues, absorbing the other(s)." },
        { title: "Amalgamation", body: "Firms join to form a completely NEW company and the old ones disappear." },
        { title: "Takeover (acquisition)", body: "One firm buys enough shares to control another." },
        { title: "Holding company", body: "A parent company owns controlling shares in subsidiary companies, which keep their own names." },
        { title: "Cartel", body: "Independent firms agree on price or output to avoid competition." },
      ]},
      { heading: "Advantages and Disadvantages", type: "cards", items: [
        { title: "Advantages", body: "Economies of scale, less competition, bigger market share, spread of risk, access to more capital." },
        { title: "Disadvantages", body: "Possible monopoly and higher prices, job losses, loss of identity, management problems in a very large firm." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Same stage = horizontal. Different stages of one chain = vertical (backward = supplier, forward = distributor). Unrelated = conglomerate. Merger = one survives. Amalgamation = a new firm is formed." }
    ]
  },

  "Business Liquidation": {
    subject: "Commerce", title: "Business Liquidation (Winding Up)",
    icon: "📉", estimatedTime: "3 min read",
    sections: [
      { heading: "What is Liquidation?", type: "text",
        content: "Liquidation (winding up) is the process of ending a company. Its assets are sold (turned into cash), debts are paid and any balance is shared among the shareholders. A person called the LIQUIDATOR carries it out." },
      { heading: "Types of Liquidation", type: "cards", items: [
        { title: "Compulsory liquidation", body: "Ordered by a COURT, usually on the petition of a creditor, because the company cannot pay its debts." },
        { title: "Voluntary liquidation", body: "Shareholders decide to wind up. Members' voluntary: the company is solvent (can pay its debts). Creditors' voluntary: the company is insolvent." },
        { title: "Liquidation under court supervision", body: "A voluntary liquidation continued under the court's control." },
      ]},
      { heading: "Reasons for Liquidation", type: "cards", items: [
        { title: "Inability to pay debts", body: "Insolvency is the commonest cause." },
        { title: "Others", body: "Failure to start business within a year, fewer members than the legal minimum, the purpose for which it was formed is complete, illegal activities, or a court decides it is just and fair." },
      ]},
      { heading: "Order of Payment from the Sale of Assets", type: "steps", items: [
        "Cost of liquidation (liquidator's fees and expenses).",
        "Secured creditors (holders of fixed charges, such as mortgages) from the assets pledged to them.",
        "Preferential creditors (employees' wages, taxes owed to government).",
        "Unsecured creditors (trade creditors, debenture holders without security).",
        "Preference shareholders.",
        "Ordinary shareholders share whatever remains."
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Shareholders are paid LAST. Creditors are paid before owners.",
        "Liquidation applies to companies. Dissolution is the usual word for partnerships.",
        "A liquidator, not the directors, handles the winding up.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Compulsory = by court order. Voluntary = by shareholders. Creditors always rank before shareholders, and ordinary shareholders are the very last." }
    ]
  },

  "Business Dissolution": {
    subject: "Commerce", title: "Business Dissolution",
    icon: "🔚", estimatedTime: "2 min read",
    sections: [
      { heading: "What is Dissolution?", type: "text",
        content: "Dissolution is the legal ending of a business relationship. It is most often used for PARTNERSHIPS, when the partners stop doing business together. A company is ended by liquidation (winding up)." },
      { heading: "Causes of Dissolution of a Partnership", type: "cards", items: [
        { title: "Agreement", body: "Partners agree to end it, or the fixed period or project in the deed has ended." },
        { title: "Death or bankruptcy", body: "Death or bankruptcy of a partner (unless the deed says the firm continues)." },
        { title: "Insanity", body: "A partner becomes mentally unfit." },
        { title: "Court order", body: "Because of serious misconduct, constant quarrels, or because the business can only run at a loss." },
        { title: "Illegality", body: "The business becomes illegal." },
        { title: "Withdrawal or notice", body: "A partner retires or gives notice, where the firm is at will." },
      ]},
      { heading: "Settling Accounts After Dissolution", type: "steps", items: [
        "Sell the assets (this is called realisation).",
        "Pay outside creditors first.",
        "Repay partners' loans to the firm.",
        "Return partners' capital.",
        "Share any remaining balance among partners in their profit-sharing ratio."
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Dissolution = partnerships. Liquidation = companies.",
        "Outside creditors are paid before partners get their capital back.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Death, bankruptcy, agreement, court order and expiry of the term are the key causes. Pay creditors, then partners' loans, then capital, then share the profit." }
    ]
  },

  "Capital and Accounts": {
    subject: "Commerce", title: "Capital and Basic Accounts",
    icon: "💼", estimatedTime: "3 min read",
    sections: [
      { heading: "Types of Capital", type: "cards", items: [
        { title: "Fixed capital", body: "Money tied up in long-lasting assets: land, buildings, machinery." },
        { title: "Working (circulating) capital", body: "Money for day-to-day running. Working capital = current assets - current liabilities." },
        { title: "Owned capital", body: "Supplied by the owners: share capital, retained profit." },
        { title: "Borrowed capital", body: "Loans, debentures, overdrafts." },
        { title: "Capital employed", body: "Total funds used in the business: fixed assets + working capital." },
      ]},
      { heading: "Share Capital Terms", type: "cards", items: [
        { title: "Authorised (nominal) capital", body: "Maximum share capital the company is allowed to issue, as stated in its memorandum." },
        { title: "Issued capital", body: "The part of authorised capital actually offered to shareholders." },
        { title: "Called-up capital", body: "The part of the issued capital the company has asked shareholders to pay." },
        { title: "Paid-up capital", body: "The amount actually paid by shareholders." },
      ]},
      { heading: "Basic Accounting Terms", type: "cards", items: [
        { title: "Assets", body: "What the business owns (cash, stock, buildings)." },
        { title: "Liabilities", body: "What the business owes (loans, creditors)." },
        { title: "Accounting equation", body: "Assets = Capital + Liabilities. So Capital = Assets - Liabilities." },
        { title: "Drawings", body: "Cash or goods the owner takes for personal use. They REDUCE capital." },
        { title: "Gross profit", body: "Net sales - cost of goods sold." },
        { title: "Net profit", body: "Gross profit - expenses." },
      ]},
      { heading: "Worked Example", type: "steps", items: [
        "Assets = ₦500,000. Liabilities = ₦150,000.",
        "Capital = Assets - Liabilities = ₦500,000 - ₦150,000 = ₦350,000.",
        "If the owner takes ₦20,000 drawings, capital falls to ₦330,000 (before adding profit)."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Authorised >= issued >= called-up >= paid-up. Capital = assets - liabilities. Drawings reduce capital; profit increases it." }
    ]
  },

  "Sole Proprietorship": {
    subject: "Commerce", title: "Sole Proprietorship",
    icon: "🧍", estimatedTime: "2 min read",
    sections: [
      { heading: "What is a Sole Proprietorship?", type: "text",
        content: "A business owned, financed and usually managed by ONE person. It is the oldest and commonest form of business in Nigeria: provision stores, tailoring shops, hair salons, market traders." },
      { heading: "Features", type: "cards", items: [
        { title: "One owner", body: "The owner makes all decisions and keeps all the profit." },
        { title: "Unlimited liability", body: "Business debts can be paid from the owner's personal property." },
        { title: "No legal separation", body: "The owner and the business are the same in law." },
        { title: "Easy to set up", body: "Few legal formalities. Registering the business name is advisable." },
      ]},
      { heading: "Advantages and Disadvantages", type: "cards", items: [
        { title: "Advantages", body: "Easy to start, quick decisions, owner keeps all profit, close contact with customers, secrecy, flexibility." },
        { title: "Disadvantages", body: "Limited capital (the main handicap), unlimited liability, limited skills, no continuity (ends on the owner's death), difficulty getting loans." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "The main problem of a sole trader is inadequate capital.",
        "Sole proprietorship has unlimited liability, unlike a limited company.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "One owner, all the profit, all the risk. Biggest weakness: limited capital. Biggest strength: simple, flexible and easy to start." }
    ]
  },

  "Wholesaling": {
    subject: "Commerce", title: "Wholesaling",
    icon: "📦", estimatedTime: "3 min read",
    sections: [
      { heading: "What is Wholesaling?", type: "text",
        content: "Wholesaling is buying goods in LARGE quantities from producers and selling them in smaller quantities to retailers (not to final consumers). The wholesaler is the middle link in the chain: Producer, Wholesaler, Retailer, Consumer." },
      { heading: "Services to Producers", type: "cards", items: [
        { title: "Buys in bulk", body: "Gives the producer quick, large sales and quick return of capital." },
        { title: "Storage", body: "Holds stock, so the producer does not need big warehouses." },
        { title: "Risk bearing", body: "Takes the risk of price changes, spoilage and theft." },
        { title: "Market information", body: "Tells producers what retailers and consumers want." },
        { title: "Financing", body: "Pays producers promptly." },
      ]},
      { heading: "Services to Retailers", type: "cards", items: [
        { title: "Break bulk", body: "Divides large quantities into small lots the retailer can afford." },
        { title: "Supplies variety", body: "One place to buy many brands." },
        { title: "Credit", body: "Allows retailers to buy now and pay later." },
        { title: "Advice and delivery", body: "Gives product advice and sometimes delivers." },
      ]},
      { heading: "Types of Wholesaler", type: "cards", items: [
        { title: "General wholesaler", body: "Deals in many kinds of goods." },
        { title: "Specialist wholesaler", body: "Deals in one line of goods (e.g. textiles)." },
        { title: "Cash and carry", body: "Retailers pay cash and carry the goods away. No credit or delivery." },
        { title: "Rack jobber", body: "Stocks shelves in retail shops and is paid for what sells." },
      ]},
      { heading: "Elimination of the Wholesaler", type: "text",
        content: "Producers sometimes sell directly to retailers or consumers (by-passing the wholesaler) through their own shops, mail order, e-commerce or big retailers buying direct. Result: lower prices, but producers take on storage and distribution costs." },
      { heading: "Watch Out!", type: "warning", items: [
        "Wholesalers sell to RETAILERS, not final consumers.",
        "Breaking bulk is a service to retailers.",
        "The last link in the chain is the RETAILER.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Wholesaler = bulk buyer, breaks bulk, stores, gives credit. Serves producers (bulk buying, storage) and retailers (small lots, credit, variety)." }
    ]
  },

  "Aids to Trade": {
    subject: "Commerce", title: "Aids to Trade",
    icon: "🤝", estimatedTime: "3 min read",
    sections: [
      { heading: "What are Aids to Trade?", type: "text",
        content: "Aids to trade are the supporting services that make buying and selling easier, safer and faster. They do not themselves buy and sell goods, but trade could not run well without them." },
      { heading: "The Six Main Aids", type: "cards", items: [
        { title: "Banking", body: "Safe keeping of money, payments (cheques, transfers), loans and overdrafts. Removes the hindrance of finance." },
        { title: "Insurance", body: "Protection against loss from risks like fire, theft and accident. Removes the hindrance of risk." },
        { title: "Transport", body: "Moves goods and people from producer to consumer. Removes the hindrance of place." },
        { title: "Warehousing", body: "Safe storage of goods until needed. Removes the hindrance of time." },
        { title: "Advertising", body: "Informs and persuades buyers. Removes the hindrance of knowledge." },
        { title: "Communication", body: "Telephone, post, internet, email. Links buyers and sellers." },
      ]},
      { heading: "Other Aids", type: "cards", items: [
        { title: "Packaging", body: "Protects goods and attracts buyers." },
        { title: "Agents and middlemen", body: "Brokers, auctioneers, factors and commission agents bring buyers and sellers together." },
        { title: "Tourism and hospitality", body: "Hotels and travel services support business travel." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Do not confuse aids to trade with trade itself. Wholesaling and retailing ARE trade.",
        "Warehousing = time. Transport = place. Do not swap them.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "BITWAC: Banking, Insurance, Transport, Warehousing, Advertising, Communication. Learn what hindrance each one removes." }
    ]
  },

  "Warehousing": {
    subject: "Commerce", title: "Warehousing",
    icon: "🏭", estimatedTime: "3 min read",
    sections: [
      { heading: "What is Warehousing?", type: "text",
        content: "Warehousing is the storage of goods from the time they are produced until they are needed by consumers. It removes the hindrance of TIME and lets production run ahead of demand." },
      { heading: "Functions of a Warehouse", type: "cards", items: [
        { title: "Storage", body: "Keeps goods safe from damage, theft and bad weather." },
        { title: "Price stabilisation", body: "Stocks seasonal goods (e.g. grains) to even out supply and prices through the year." },
        { title: "Breaking bulk", body: "Divides large consignments into smaller orders." },
        { title: "Grading, packing, labelling", body: "Prepares goods for sale." },
        { title: "Financing", body: "A warehouse receipt (warrant) can be used as security for a loan." },
        { title: "Production ahead of demand", body: "Lets firms produce steadily and avoid shortages." },
      ]},
      { heading: "Types of Warehouse", type: "cards", items: [
        { title: "Private warehouse", body: "Owned by a firm for its own goods." },
        { title: "Public warehouse", body: "Owned by a company that rents space to many traders." },
        { title: "Bonded warehouse", body: "Holds IMPORTED goods under customs control until import duty is paid. Used for dutiable goods like wine and tobacco." },
        { title: "Cold storage", body: "Refrigerated, for perishable goods like fish, meat and vegetables." },
        { title: "Distribution (regional) warehouse", body: "Close to markets to speed delivery." },
        { title: "Silos and cribs", body: "For grains and yams." },
      ]},
      { heading: "Documents", type: "cards", items: [
        { title: "Warehouse receipt", body: "Acknowledges that goods are in the warehouse." },
        { title: "Warehouse warrant", body: "Document of title that allows the goods to be sold or used as loan security." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Bonded warehouses hold goods until CUSTOMS DUTY is paid.",
        "Warehousing removes the hindrance of time, not place.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Warehousing = time utility. It lets production run ahead of demand and keeps prices steady. Bonded = customs. Cold storage = perishables." }
    ]
  },

  "Currency Regulations": {
    subject: "Commerce", title: "Currency Regulations and Foreign Exchange",
    icon: "💱", estimatedTime: "3 min read",
    sections: [
      { heading: "Key Terms", type: "cards", items: [
        { title: "Currency", body: "The money in use in a country. Nigeria's currency is the NAIRA (₦) and kobo (100 kobo = ₦1)." },
        { title: "Legal tender", body: "Money the law says must be accepted for settling debts. Issued by the Central Bank of Nigeria (CBN)." },
        { title: "Foreign exchange (forex)", body: "Foreign currencies used to pay for imports and other international payments." },
        { title: "Exchange rate", body: "The price of one currency in terms of another (e.g. how many naira per US dollar)." },
        { title: "Balance of payments", body: "Record of a country's money flows with the rest of the world." },
      ]},
      { heading: "Role of the CBN", type: "cards", items: [
        { title: "Issues currency", body: "Only the Central Bank can issue naira notes and coins." },
        { title: "Manages exchange rate", body: "Controls the supply and allocation of foreign exchange." },
        { title: "Monetary policy", body: "Controls the money supply and interest rates." },
        { title: "Licenses", body: "Licenses and supervises banks and bureaux de change." },
      ]},
      { heading: "Exchange Control", type: "cards", items: [
        { title: "Why governments control forex", body: "To protect the value of the local currency, conserve scarce foreign exchange, correct balance of payments deficits and discourage capital flight." },
        { title: "Methods", body: "Rationing forex, import licences, restrictions on foreign payments, fixing exchange rates." },
        { title: "Devaluation", body: "Deliberate official lowering of the value of a currency against foreign currencies. Makes exports cheaper and imports dearer." },
        { title: "Depreciation", body: "A fall in the value of a currency caused by market forces." },
        { title: "Bureau de change", body: "Licensed outlet for buying and selling foreign currency." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Devaluation is a government decision. Depreciation is caused by the market.",
        "Only the CBN issues currency. Commercial banks cannot.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "CBN issues naira and manages forex. Devaluation = official cut in value (exports cheaper, imports dearer). Exchange control protects the currency and conserves forex." }
    ]
  },

  "Banking": {
    subject: "Commerce", title: "Banking",
    icon: "🏦", estimatedTime: "4 min read",
    sections: [
      { heading: "Types of Banks", type: "cards", items: [
        { title: "Central bank (CBN)", body: "Bank of the government and of other banks. Issues currency, lender of last resort, controls money supply. Does not seek profit." },
        { title: "Commercial banks", body: "Accept deposits, give loans and overdrafts, handle payments, deal in foreign exchange. Profit-making. Examples: GTBank, Zenith, Access, UBA, First Bank." },
        { title: "Merchant banks", body: "Corporate finance, underwriting shares, advice, medium and long-term loans to firms." },
        { title: "Development banks", body: "Long-term finance for development: Bank of Industry (BOI), Bank of Agriculture, NEXIM (exports)." },
        { title: "Microfinance and mortgage banks", body: "Small loans to small businesses and individuals. Mortgage banks finance housing." },
      ]},
      { heading: "Types of Account", type: "cards", items: [
        { title: "Current account", body: "For frequent withdrawals by cheque. Usually pays no interest. May have an overdraft." },
        { title: "Savings account", body: "Pays interest. Limited withdrawals. Encourages saving." },
        { title: "Fixed (time) deposit", body: "Money locked for a fixed period at a higher interest rate." },
        { title: "Domiciliary account", body: "Holds foreign currency." },
      ]},
      { heading: "Cheques", type: "cards", items: [
        { title: "Parties", body: "Drawer (writes the cheque), drawee (the bank), payee (receives payment)." },
        { title: "Open cheque", body: "Can be cashed over the counter." },
        { title: "Crossed cheque", body: "Two parallel lines across the face. Must be paid into a bank account, not cashed. Safer against theft." },
        { title: "Special crossing", body: "Names a particular bank. Only that bank can collect it." },
        { title: "'Account payee only'", body: "Can be paid only into the account of the named payee." },
        { title: "Dishonoured cheque", body: "Returned unpaid, e.g. 'refer to drawer' (insufficient funds)." },
      ]},
      { heading: "Services of Commercial Banks", type: "cards", items: [
        { title: "Core services", body: "Accepting deposits, loans, overdrafts, safe custody, standing orders, direct debits, electronic transfers, ATMs, foreign exchange, advice." },
        { title: "Overdraft", body: "Allows a current account holder to withdraw more than the balance. Interest is on the amount overdrawn." },
        { title: "Loan", body: "A fixed sum repaid over an agreed period with interest. Often needs collateral." },
        { title: "Standing order", body: "Fixed amount paid regularly to the same person (e.g. rent)." },
        { title: "Direct debit", body: "Variable amounts collected by the payee with the customer's authority." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Only the CBN issues currency. Commercial banks do not.",
        "A crossed cheque cannot be cashed over the counter.",
        "Overdraft = current account. Savings accounts normally have no overdraft.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "CBN = banker to government and banks, lender of last resort. Commercial banks = deposits, loans, overdrafts. Crossed cheque = safer. Current = cheque and overdraft. Savings = interest. Fixed deposit = locked, higher rate." }
    ]
  },

  "Cooperative Societies": {
    subject: "Commerce", title: "Cooperative Societies",
    icon: "🤝", estimatedTime: "3 min read",
    sections: [
      { heading: "What is a Cooperative Society?", type: "text",
        content: "A cooperative is a voluntary association of people with a common need who pool resources and run a business together for mutual benefit, not primarily for profit. It started in Rochdale, England, in 1844 (the Rochdale Pioneers)." },
      { heading: "Features and Principles", type: "cards", items: [
        { title: "Voluntary and open membership", body: "Anyone with the common interest may join or leave freely." },
        { title: "One member, one vote", body: "Democratic control regardless of how many shares a member holds." },
        { title: "Limited liability", body: "Members are liable only for their shares." },
        { title: "Surplus shared by patronage", body: "Surplus is returned to members (dividend or bonus) according to how much they bought or sold through the society." },
        { title: "Limited interest on shares", body: "Capital earns only a small fixed return." },
        { title: "Self-help and mutual aid", body: "Members help themselves." },
      ]},
      { heading: "Types of Cooperative", type: "cards", items: [
        { title: "Consumer cooperative", body: "Buys goods in bulk and sells to members at fair prices." },
        { title: "Producer cooperative", body: "Members produce goods (farm produce, crafts) and the society sells them." },
        { title: "Marketing cooperative", body: "Sells members' farm produce (e.g. cocoa, groundnut) to get better prices." },
        { title: "Thrift and credit cooperative", body: "Members save regularly. Loans are given to members at low interest." },
        { title: "Housing and multipurpose cooperatives", body: "Build or buy houses; or do several of the above." },
      ]},
      { heading: "Advantages and Disadvantages", type: "cards", items: [
        { title: "Advantages", body: "Bulk buying, fair prices, cheap loans, democratic management, limited liability, encourages saving." },
        { title: "Disadvantages", body: "Limited capital, poor management (lack of skilled managers), lack of loyalty by members, slow decisions, members may default on loans." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "In a cooperative, voting is by PERSON (one member, one vote), not by number of shares.",
        "Surplus is shared by PATRONAGE, not by shareholding.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Rochdale 1844. One member, one vote. Surplus by patronage. Thrift society = savings and loans. Marketing society = sells members' produce." }
    ]
  },

  "Marketing Mix": {
    subject: "Commerce", title: "The Marketing Mix (4Ps)",
    icon: "🎯", estimatedTime: "3 min read",
    sections: [
      { heading: "What is the Marketing Mix?", type: "text",
        content: "The marketing mix is the set of tools a firm blends to satisfy customers and achieve its goals. The classic model is the 4Ps: Product, Price, Place, Promotion." },
      { heading: "The 4Ps", type: "cards", items: [
        { title: "Product", body: "What is sold: quality, design, brand name, packaging, size, warranty and after-sales service. Includes the product life cycle." },
        { title: "Price", body: "What the customer pays: pricing strategy, discounts, credit terms, payment methods." },
        { title: "Place", body: "How the product reaches the customer: channels of distribution, transport, warehousing, location of outlets." },
        { title: "Promotion", body: "How customers learn about it: advertising, personal selling, sales promotion, public relations." },
      ]},
      { heading: "Product Life Cycle", type: "steps", items: [
        "Introduction: new product, low sales, heavy advertising.",
        "Growth: sales rise quickly, profits start.",
        "Maturity: sales level off, competition is high.",
        "Decline: sales fall. Firm drops the product or revives it."
      ]},
      { heading: "Common Pricing Methods", type: "cards", items: [
        { title: "Penetration pricing", body: "LOW price at launch to win market share fast." },
        { title: "Skimming", body: "HIGH price at launch for people who will pay more, lowered later." },
        { title: "Cost-plus", body: "Cost of the product + a fixed profit margin." },
        { title: "Competitive pricing", body: "Price set close to rivals' prices." },
      ]},
      { heading: "Promotion Tools", type: "cards", items: [
        { title: "Advertising", body: "Paid, non-personal message through media (radio, TV, newspaper, billboards, social media)." },
        { title: "Sales promotion", body: "Short-term incentives: free samples, coupons, discounts, bonus packs, competitions." },
        { title: "Personal selling", body: "Face-to-face contact by sales staff." },
        { title: "Public relations", body: "Building a good image through sponsorship and goodwill." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "4Ps = Product, Price, Place, Promotion. Place is about distribution, not just location. Penetration = low launch price. Skimming = high launch price." }
    ]
  },

  "Business Law": {
    subject: "Commerce", title: "Business Law",
    icon: "⚖️", estimatedTime: "4 min read",
    sections: [
      { heading: "What is Business Law?", type: "text",
        content: "Business law is the set of rules that govern business dealings, protecting buyers, sellers, workers and the public. It covers contracts, agency, sale of goods, partnership, company law, insurance and consumer protection." },
      { heading: "Main Branches", type: "cards", items: [
        { title: "Law of contract", body: "Rules about legally binding agreements." },
        { title: "Law of agency", body: "Rules about one person acting for another." },
        { title: "Sale of goods", body: "Rules about transfer of ownership of goods for a price." },
        { title: "Company law", body: "Rules about forming and running companies (CAMA)." },
        { title: "Partnership law", body: "Rights and duties of partners." },
        { title: "Hire purchase and consumer law", body: "Instalment buying and protecting buyers." },
        { title: "Law of tort", body: "Civil wrongs such as negligence and defamation." },
      ]},
      { heading: "Sale of Goods: Implied Terms", type: "cards", items: [
        { title: "Title", body: "The seller has the right to sell the goods." },
        { title: "Description", body: "Goods must match the description given." },
        { title: "Merchantable quality", body: "Goods must be of satisfactory quality and fit for normal use." },
        { title: "Fitness for purpose", body: "Goods suit the purpose the buyer made known to the seller." },
        { title: "Sample", body: "Bulk must match the sample shown." },
        { title: "Caveat emptor", body: "'Let the buyer beware.' The buyer carries the risk, subject to these protections." },
      ]},
      { heading: "Hire Purchase vs Credit Sale", type: "cards", items: [
        { title: "Hire purchase", body: "Buyer pays a deposit and instalments. OWNERSHIP passes only after the LAST instalment. Buyer may return the goods earlier." },
        { title: "Credit sale", body: "Ownership passes to the buyer IMMEDIATELY. Payment is delayed." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Hire purchase = ownership after the last instalment. Credit sale = ownership at once. Caveat emptor = buyer beware. Contract law is covered in its own topic." }
    ]
  },

  "Business Structure Policies": {
    subject: "Commerce", title: "Business Structure Policies in Nigeria",
    icon: "🏛️", estimatedTime: "3 min read",
    sections: [
      { heading: "What are These Policies?", type: "text",
        content: "These are government policies that decide who owns, controls and runs businesses in Nigeria: indigenisation, privatisation, commercialisation, deregulation and economic reforms." },
      { heading: "Key Policies", type: "cards", items: [
        { title: "Indigenisation (Nigerian Enterprises Promotion Decree 1972, revised 1977)", body: "Transferred ownership of certain businesses from foreigners to Nigerians. Aim: give Nigerians control of their economy." },
        { title: "Privatisation", body: "Sale of government-owned enterprises (wholly or partly) to private investors. Aim: efficiency, less government burden, wider ownership. Bureau of Public Enterprises (BPE) supervises." },
        { title: "Commercialisation", body: "Government keeps ownership but the enterprise is run on commercial lines: pricing for cost recovery, profit target, less subsidy." },
        { title: "Deregulation", body: "Removal of government controls (on prices, entry, licences) so market forces decide." },
        { title: "Structural Adjustment Programme (SAP), 1986", body: "Reforms under Babangida: devaluation, removal of subsidies, trade liberalisation, privatisation and commercialisation." },
      ]},
      { heading: "Public Enterprises", type: "cards", items: [
        { title: "Why governments set up public enterprises", body: "Provide essential services (power, water), control strategic industries, create jobs, prevent private monopoly." },
        { title: "Problems", body: "Inefficiency, political interference, overstaffing, corruption, heavy subsidies." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Privatisation = ownership changes to private hands. Commercialisation = ownership stays with government.",
        "Indigenisation moves ownership from foreigners to Nigerians, not from government to private.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Indigenisation = foreign to Nigerian owners. Privatisation = government to private. Commercialisation = government still owns but runs for profit. Deregulation = fewer government controls." }
    ]
  },

  "International Trade Regulations": {
    subject: "Commerce", title: "International Trade Regulations",
    icon: "🛃", estimatedTime: "4 min read",
    sections: [
      { heading: "Why Trade is Regulated", type: "text",
        content: "Governments control foreign trade to protect local industries, earn revenue, protect consumers, save foreign exchange and safeguard national security." },
      { heading: "Trade Barriers and Tools", type: "cards", items: [
        { title: "Tariff (customs duty)", body: "A tax on imports (or exports). Raises prices of imports and earns revenue." },
        { title: "Quota", body: "A limit on the QUANTITY of a good that can be imported." },
        { title: "Embargo", body: "A complete ban on trade with a particular country or in a particular good." },
        { title: "Import licence", body: "Government permission needed to import specified goods." },
        { title: "Subsidy", body: "Government help to local producers so they can compete." },
        { title: "Exchange control", body: "Restricting access to foreign currency." },
        { title: "Dumping", body: "Selling goods abroad BELOW their cost or home price. Countries use anti-dumping duties against it." },
      ]},
      { heading: "Free Trade vs Protection", type: "cards", items: [
        { title: "Arguments for protection", body: "Protect infant industries, prevent dumping, save forex, safeguard jobs, national security, reduce over-dependence on imports." },
        { title: "Arguments for free trade", body: "Lower prices, wider choice, efficiency from competition, comparative advantage." },
      ]},
      { heading: "Regional and Global Organisations", type: "cards", items: [
        { title: "World Trade Organization (WTO)", body: "Sets rules for world trade and settles disputes. Replaced GATT in 1995. Based in Geneva." },
        { title: "ECOWAS", body: "Economic Community of West African States, created 1975 (Treaty of Lagos). Aims at free movement and trade among members." },
        { title: "AfCFTA", body: "African Continental Free Trade Area, to cut tariffs among African countries." },
        { title: "OPEC", body: "Organisation of the Petroleum Exporting Countries. Coordinates oil policies. Nigeria is a member." },
        { title: "Customs", body: "Nigeria Customs Service collects duties and checks imports and exports." },
      ]},
      { heading: "Trade Terms", type: "cards", items: [
        { title: "FOB (Free on Board)", body: "Seller pays costs up to loading the goods on the ship. Buyer pays freight and insurance after that." },
        { title: "CIF (Cost, Insurance, Freight)", body: "Seller's price includes cost, insurance and freight to the destination port." },
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Tariff = tax. Quota = quantity limit. Embargo = total ban. Dumping = selling abroad below cost. FOB = buyer pays after loading. CIF = seller includes insurance and freight." }
    ]
  },

  "Consumer Protection": {
    subject: "Commerce", title: "Consumer Protection",
    icon: "🛡️", estimatedTime: "3 min read",
    sections: [
      { heading: "Why Consumers Need Protection", type: "text",
        content: "Consumers can be cheated by false weights, fake or substandard goods, misleading adverts, hoarding and price fixing. Consumer protection is the set of laws, agencies and actions that guard buyers' interests." },
      { heading: "Nigerian Agencies", type: "cards", items: [
        { title: "FCCPC", body: "Federal Competition and Consumer Protection Commission (set up by the 2018 Act; replaced the Consumer Protection Council). Enforces consumer rights and fair competition." },
        { title: "NAFDAC", body: "National Agency for Food and Drug Administration and Control. Regulates food, drugs, cosmetics and bottled water." },
        { title: "SON", body: "Standards Organisation of Nigeria. Sets and enforces product standards." },
        { title: "NDLEA and others", body: "Control illegal drugs. Other bodies regulate weights and measures." },
      ]},
      { heading: "Consumer Rights", type: "cards", items: [
        { title: "Right to safety", body: "Protection from dangerous goods." },
        { title: "Right to be informed", body: "Truthful labels and adverts." },
        { title: "Right to choose", body: "Access to a variety of goods at fair prices." },
        { title: "Right to be heard", body: "Complaints must be considered." },
        { title: "Right to redress", body: "Compensation, repair or replacement for defective goods." },
      ]},
      { heading: "Methods of Protection", type: "cards", items: [
        { title: "Government", body: "Laws, price control, standards, inspection, product labelling, punishment of offenders." },
        { title: "Consumer associations", body: "Test goods, publish results and campaign for consumers." },
        { title: "Self-protection", body: "Check labels, NAFDAC numbers and expiry dates, keep receipts, report cheats." },
        { title: "Manufacturers", body: "Warranties, guarantees, after-sales service, quality control." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "NAFDAC = food and drugs. SON = standards. FCCPC = consumer and competition law.",
        "Caveat emptor (buyer beware) is the OLD rule that consumer protection law now limits.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Match agency to role: NAFDAC food and drugs, SON standards, FCCPC consumer complaints and competition. Keep your receipt as proof of purchase." }
    ]
  },

  "Industrial Relations": {
    subject: "Commerce", title: "Industrial Relations",
    icon: "👷", estimatedTime: "3 min read",
    sections: [
      { heading: "What is Industrial Relations?", type: "text",
        content: "Industrial relations is the relationship between employers (management) and employees (workers), including their unions and the government. Good relations bring peace and productivity." },
      { heading: "Trade Unions", type: "cards", items: [
        { title: "Trade union", body: "An association of workers formed to protect and improve their wages, conditions and job security." },
        { title: "Nigeria Labour Congress (NLC)", body: "The central labour organisation for workers' unions in Nigeria. TUC covers senior staff associations." },
        { title: "Functions", body: "Collective bargaining, representing members, welfare, training, settling disputes, political voice." },
        { title: "Employers' association", body: "e.g. Nigeria Employers' Consultative Association (NECA)." },
      ]},
      { heading: "Collective Bargaining", type: "text",
        content: "Negotiation between union representatives and employers on pay and conditions. The result is a COLLECTIVE AGREEMENT that binds both sides." },
      { heading: "Industrial Disputes", type: "cards", items: [
        { title: "Strike", body: "Workers stop work to press demands. Types: go-slow, sit-down, work-to-rule, general strike, sympathetic strike." },
        { title: "Lockout", body: "EMPLOYER shuts the workplace and keeps workers out." },
        { title: "Picketing", body: "Workers stand at the gate to persuade others not to enter." },
        { title: "Causes", body: "Low pay, poor conditions, dismissal, delayed salaries, redundancy, victimisation of union members." },
      ]},
      { heading: "Settling Disputes", type: "steps", items: [
        "Collective bargaining and negotiation.",
        "Conciliation: a neutral person helps both sides reach agreement.",
        "Mediation: a mediator suggests solutions.",
        "Arbitration: an arbitrator decides and the decision binds both sides.",
        "National Industrial Court of Nigeria (NICN) for legal settlement."
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Strike is by WORKERS. Lockout is by EMPLOYERS.",
        "Arbitration is BINDING. Conciliation and mediation are not.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Strike = workers stop. Lockout = employer closes. Collective bargaining = negotiated agreement. Arbitration = decision binds. NLC = workers' central body." }
    ]
  },

  "Trade Associations": {
    subject: "Commerce", title: "Trade Associations",
    icon: "🏷️", estimatedTime: "2 min read",
    sections: [
      { heading: "What is a Trade Association?", type: "text",
        content: "A trade association is a voluntary body of firms or traders in the same trade or industry, formed to protect and promote their common interests. It is different from a trade union, which is a body of WORKERS." },
      { heading: "Examples in Nigeria", type: "cards", items: [
        { title: "Manufacturers Association of Nigeria (MAN)", body: "Represents manufacturers." },
        { title: "Chambers of Commerce (NACCIMA)", body: "Nigerian Association of Chambers of Commerce, Industry, Mines and Agriculture. Represents traders and businesses of all kinds in a town or region." },
        { title: "Nigeria Employers' Consultative Association (NECA)", body: "Represents employers in labour matters." },
        { title: "Professional bodies", body: "e.g. Nigerian Bar Association (lawyers), Nigerian Medical Association, ICAN (accountants)." },
      ]},
      { heading: "Functions", type: "cards", items: [
        { title: "Represent members", body: "Speak to government on taxes, tariffs and regulations." },
        { title: "Information", body: "Provide trade and market information, run exhibitions and trade fairs." },
        { title: "Standards and ethics", body: "Set codes of conduct and standards for members." },
        { title: "Settle disputes", body: "Arbitrate between members." },
        { title: "Training", body: "Run courses and seminars." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Trade association = firms and traders. Trade union = workers.",
        "MAN is for manufacturers. A Chamber of Commerce covers many types of business.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Employers and firms form associations. Workers form unions. MAN = manufacturers. Chamber of Commerce = local business community." }
    ]
  },

  "Management": {
    subject: "Commerce", title: "Management",
    icon: "🧭", estimatedTime: "3 min read",
    sections: [
      { heading: "What is Management?", type: "text",
        content: "Management is the process of planning, organising, directing and controlling people and resources to achieve the goals of an organisation efficiently." },
      { heading: "Functions of Management", type: "steps", items: [
        "Planning: deciding what to do, how and when (setting objectives).",
        "Organising: arranging people, tasks and resources, and assigning authority.",
        "Staffing: recruiting, selecting and training the right people.",
        "Directing (leading): guiding, motivating and supervising workers.",
        "Controlling: comparing results with plans and correcting differences."
      ]},
      { heading: "Levels of Management", type: "cards", items: [
        { title: "Top management", body: "Board of directors, managing director. Sets goals and policy." },
        { title: "Middle management", body: "Departmental managers. Carry out policy and coordinate departments." },
        { title: "Lower (first-line) management", body: "Supervisors and foremen. Deal directly with workers day to day." },
      ]},
      { heading: "Key Concepts", type: "cards", items: [
        { title: "Authority", body: "The right to give orders." },
        { title: "Responsibility", body: "The duty to carry out a task." },
        { title: "Delegation", body: "Passing authority to a subordinate. The delegator remains accountable." },
        { title: "Span of control", body: "Number of workers one manager supervises directly." },
        { title: "Chain of command", body: "Line of authority from top to bottom." },
        { title: "Henri Fayol", body: "Early management thinker who set out the functions and principles of management." },
      ]},
      { heading: "Leadership Styles", type: "cards", items: [
        { title: "Autocratic", body: "Leader decides alone." },
        { title: "Democratic", body: "Leader consults workers before deciding." },
        { title: "Laissez-faire", body: "Leader gives workers freedom to decide." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "You can delegate authority but not ultimate accountability.",
        "Controlling comes AFTER planning. It checks results against the plan.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Functions: plan, organise, staff, direct, control. Levels: top, middle, lower. Autocratic = boss decides. Democratic = consults. Laissez-faire = free hand." }
    ]
  },

  "Business Technology": {
    subject: "Commerce", title: "Business Technology",
    icon: "💻", estimatedTime: "3 min read",
    sections: [
      { heading: "What is Business Technology?", type: "text",
        content: "Business technology is the use of computers, the internet and electronic devices to run business activities faster, cheaper and more accurately." },
      { heading: "Key Technologies", type: "cards", items: [
        { title: "E-commerce", body: "Buying and selling over the internet (e.g. Jumia, Konga). Includes online payment and delivery." },
        { title: "ATM", body: "Automated Teller Machine. Cash withdrawal and balance enquiry any time." },
        { title: "POS", body: "Point of Sale terminal. Pays for goods by card in shops." },
        { title: "Electronic funds transfer (EFT)", body: "Moving money between accounts electronically." },
        { title: "Internet and mobile banking", body: "Banking by app or website." },
        { title: "Barcode and scanners", body: "Speed up checkout and stock control." },
        { title: "Electronic data interchange (EDI)", body: "Business documents exchanged by computer." },
        { title: "Video conferencing and email", body: "Fast communication across distances." },
      ]},
      { heading: "Advantages and Disadvantages", type: "cards", items: [
        { title: "Advantages", body: "Speed, accuracy, lower costs, wider markets, better records, 24-hour service." },
        { title: "Disadvantages", body: "High set-up cost, job losses, cyber fraud and hacking, power and network failures, need for trained staff." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "E-commerce is the BUYING and SELLING online, not just advertising.",
        "Keep PINs and passwords secret. Fraud is the main risk of electronic banking.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "ATM = cash machine. POS = card payment in shop. EFT = electronic transfer. E-commerce = online trading. Biggest risks: fraud, hacking, power failure." }
    ]
  },

  "Business Structures": {
    subject: "Commerce", title: "Business Structures",
    icon: "🧱", estimatedTime: "3 min read",
    sections: [
      { heading: "Forms of Business Ownership", type: "text",
        content: "A business structure is the legal form of ownership a business takes. It decides who owns it, who controls it, how much capital can be raised and who bears the risk." },
      { heading: "Comparing the Forms", type: "cards", items: [
        { title: "Sole proprietorship", body: "One owner. Unlimited liability. Easy to start. Capital limited." },
        { title: "Partnership", body: "2 to 20 partners (general partnership). Unlimited liability. More capital and skills than a sole trader." },
        { title: "Private limited company (Ltd)", body: "Limited liability. Shares not sold to the public. Separate legal person." },
        { title: "Public limited company (Plc)", body: "Limited liability. Shares sold to the public. Raises the most capital." },
        { title: "Cooperative society", body: "Run by members for mutual benefit. One member, one vote." },
        { title: "Public enterprise (corporation)", body: "Owned by government. Provides essential services. Examples: NNPC, the former NEPA." },
      ]},
      { heading: "Choosing a Structure", type: "cards", items: [
        { title: "Factors", body: "Capital needed, liability, control, tax, continuity, legal formalities and the size of the business." },
        { title: "Limited liability", body: "Only companies (and limited partners) enjoy it." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Sole traders and general partners have UNLIMITED liability.",
        "Only the Plc may offer shares to the general public.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "More owners = more capital but more complexity. Limited liability = company. Public enterprise = government-owned. Each form is covered in its own guide." }
    ]
  },

  "Occupations": {
    subject: "Commerce", title: "Occupations",
    icon: "👔", estimatedTime: "2 min read",
    sections: [
      { heading: "What is an Occupation?", type: "text",
        content: "An occupation is any work a person does regularly to earn a living. Occupations are grouped into industrial, commercial and service occupations." },
      { heading: "Types of Occupation", type: "cards", items: [
        { title: "Industrial occupations", body: "Produce goods. Includes EXTRACTIVE (farming, fishing, mining, forestry), MANUFACTURING (making goods from raw materials) and CONSTRUCTION (building roads and houses)." },
        { title: "Commercial occupations", body: "Trade and aids to trade: wholesalers, retailers, bankers, insurers, transporters, warehouse keepers, advertisers." },
        { title: "Direct (personal and professional) services", body: "Work that gives direct service to people without producing goods: doctors, lawyers, teachers, engineers, hairdressers, entertainers, civil servants." },
      ]},
      { heading: "Primary, Secondary, Tertiary", type: "cards", items: [
        { title: "Primary", body: "Extraction from nature (farming, mining, fishing)." },
        { title: "Secondary", body: "Manufacturing and construction." },
        { title: "Tertiary", body: "Commerce and services." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Farming is an EXTRACTIVE industrial occupation, not a commercial one.",
        "Doctors and teachers provide direct services, not trade.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Extractive: take from nature. Manufacturing: make. Construction: build. Commercial: trade and aids. Direct services: professionals serving people." }
    ]
  },

  "Partnerships": {
    subject: "Commerce", title: "Partnerships",
    icon: "👥", estimatedTime: "3 min read",
    sections: [
      { heading: "What is a Partnership?", type: "text",
        content: "A partnership is a business owned by two or more people who agree to carry on business together and share profits and losses. A general partnership usually has 2 to 20 partners (professional firms such as law and accountancy firms may exceed 20)." },
      { heading: "Types of Partner", type: "cards", items: [
        { title: "Active (ordinary) partner", body: "Takes part in management and has unlimited liability." },
        { title: "Sleeping (dormant) partner", body: "Invests capital and takes a share of profit but does NOT take part in management." },
        { title: "Limited partner", body: "Liability limited to capital put in. Cannot manage the business." },
        { title: "Nominal partner", body: "Lends name to the firm but contributes nothing." },
        { title: "Secret partner", body: "Takes part in the business, but the public does not know." },
      ]},
      { heading: "The Partnership Deed", type: "cards", items: [
        { title: "What it is", body: "A written agreement signed by partners. If there is no deed, the Partnership Act rules apply." },
        { title: "Usual contents", body: "Name and address, nature of business, capital of each partner, profit-sharing ratio, salaries, interest on capital and drawings, duties, how to admit or remove partners, how to settle disputes, how to dissolve." },
        { title: "Default rules (no deed)", body: "Profits and losses shared EQUALLY. No interest on capital. No salaries for partners." },
      ]},
      { heading: "Advantages and Disadvantages", type: "cards", items: [
        { title: "Advantages", body: "More capital, shared skills, shared risk, easy to form, less legal formality than a company." },
        { title: "Disadvantages", body: "Unlimited liability (for general partners), disagreements, one partner can bind the firm, no continuity (death or exit ends it), limited capital compared with a company." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "A sleeping partner does not manage but still has unlimited liability unless a limited partner.",
        "Without a deed, profits are shared EQUALLY, even if capital differs.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "2 to 20 partners. Deed = written agreement. No deed = equal sharing. Sleeping partner = capital but no management. Limited partner = limited liability." }
    ]
  },

  "Business Financing": {
    subject: "Commerce", title: "Business Financing",
    icon: "💰", estimatedTime: "3 min read",
    sections: [
      { heading: "Why Businesses Need Finance", type: "text",
        content: "Businesses need money to start up, buy equipment, hold stock, pay wages and expand. Finance can come from inside the business (internal) or from outside (external)." },
      { heading: "By Time Period", type: "cards", items: [
        { title: "Short-term (under 1 year)", body: "Bank overdraft, trade credit, factoring, bills of exchange. For day-to-day needs." },
        { title: "Medium-term (1 to 5 years)", body: "Bank loans, hire purchase, leasing." },
        { title: "Long-term (over 5 years)", body: "Share capital, debentures, mortgages, retained profit, long-term bank loans." },
      ]},
      { heading: "Sources", type: "cards", items: [
        { title: "Owner's savings", body: "Main starting source for sole traders." },
        { title: "Retained profit (ploughed-back)", body: "Profit kept in the business. Cheapest source: no interest." },
        { title: "Sale of shares", body: "Companies raise capital without repaying." },
        { title: "Debentures", body: "Long-term loans with fixed interest." },
        { title: "Bank loans and overdrafts", body: "Common for small and medium businesses." },
        { title: "Trade credit", body: "Buying now, paying later." },
        { title: "Hire purchase and leasing", body: "Use of equipment without paying the full price at once. In leasing the firm never owns the asset." },
        { title: "Government and development institutions", body: "Bank of Industry (BOI), Bank of Agriculture, NEXIM, SMEDAN support schemes." },
        { title: "Microfinance banks and cooperatives", body: "Small loans for small traders." },
        { title: "Ajo/Esusu and friends and family", body: "Informal sources." },
      ]},
      { heading: "Choosing a Source", type: "cards", items: [
        { title: "Factors", body: "Cost (interest), the time period needed, risk, control (shares may dilute ownership), repayment ability and the security available." },
        { title: "Matching rule", body: "Use short-term finance for short-term needs and long-term finance for fixed assets." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Retained profit is internal finance. Loans and shares are external.",
        "Overdraft is SHORT-term. Debenture is LONG-term.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Match finance to need: overdraft and trade credit for the short term, loans and hire purchase for medium, shares and debentures for the long term. Retained profit is the cheapest." }
    ]
  },

  "Invoicing": {
    subject: "Commerce", title: "Invoicing",
    icon: "🧾", estimatedTime: "4 min read",
    sections: [
      { heading: "What is an Invoice?", type: "text",
        content: "An invoice is a document sent by the seller to the buyer listing the goods sold, quantities, prices and total amount due. It is the seller's request for payment and the buyer's record of purchase. It is the first document used for BOOKKEEPING in a sale (it is a source document)." },
      { heading: "Related Documents", type: "cards", items: [
        { title: "Pro forma invoice", body: "Sent BEFORE the goods are supplied (a preview of the price). Used in foreign trade to apply for import licences or letters of credit. Not a demand for payment." },
        { title: "Commercial invoice", body: "Used in international trade. Describes the goods and the price for customs." },
        { title: "Credit note", body: "Issued by the SELLER to REDUCE the amount owed (goods returned, overcharge)." },
        { title: "Debit note", body: "Issued by the SELLER to INCREASE the amount owed (undercharge)." },
        { title: "Statement of account", body: "Monthly summary of invoices, payments and balance owed." },
        { title: "Receipt", body: "Proof of payment." },
      ]},
      { heading: "Discounts and VAT on an Invoice", type: "cards", items: [
        { title: "Trade discount", body: "Deducted from the LIST price before invoicing. Not recorded in the books." },
        { title: "Cash discount", body: "For prompt payment. Recorded in the books." },
        { title: "VAT", body: "Value Added Tax, currently 7.5% in Nigeria. Charged on the price AFTER trade discount." },
      ]},
      { heading: "Worked Example", type: "steps", items: [
        "List price: 50 items at ₦400 = ₦20,000.",
        "Trade discount 10%: ₦20,000 x 10% = ₦2,000. Net price = ₦18,000.",
        "VAT 7.5%: ₦18,000 x 7.5% = ₦1,350.",
        "Invoice total = ₦18,000 + ₦1,350 = ₦19,350."
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Credit note REDUCES what the buyer owes. Debit note INCREASES it.",
        "Calculate VAT on the amount AFTER trade discount.",
        "Pro forma invoice is not a request for payment.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Order of calculation: list price, minus trade discount, then add VAT. Credit note = less. Debit note = more. Pro forma = advance quote." }
    ]
  },

  "Channels of Distribution": {
    subject: "Commerce", title: "Channels of Distribution",
    icon: "🚚", estimatedTime: "3 min read",
    sections: [
      { heading: "What is a Channel of Distribution?", type: "text",
        content: "A channel of distribution is the route goods take from the producer to the final consumer, and the middlemen who handle them along the way." },
      { heading: "Common Channels", type: "cards", items: [
        { title: "Producer to consumer (direct)", body: "Factory shops, door-to-door selling, online selling, mail order. Shortest channel." },
        { title: "Producer to retailer to consumer", body: "Large retailers (supermarkets) buy directly from the producer." },
        { title: "Producer to wholesaler to retailer to consumer", body: "The traditional and longest common channel. Used for small items and many small retailers." },
        { title: "Producer to agent to wholesaler to retailer to consumer", body: "Used when producers lack market knowledge. The agent earns commission." },
      ]},
      { heading: "Middlemen", type: "cards", items: [
        { title: "Wholesaler", body: "Buys in bulk and sells to retailers." },
        { title: "Retailer", body: "Sells to final consumers. The LAST link in the chain." },
        { title: "Agents and brokers", body: "Bring buyers and sellers together. Paid commission. Do not usually own the goods." },
        { title: "Factors, auctioneers", body: "Sell on behalf of owners." },
      ]},
      { heading: "Choosing a Channel", type: "cards", items: [
        { title: "Nature of product", body: "Perishable goods need short channels. Bulky or cheap goods may need many middlemen." },
        { title: "Market size", body: "Wide market, many buyers, longer channel." },
        { title: "Cost and control", body: "Shorter channels give the producer more control and profit but more work." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Retailer, not consumer, is the last link in the distributive trade.",
        "Cutting out the middleman lowers price only if the producer can do the distribution cheaply.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Shortest: producer to consumer. Traditional: producer to wholesaler to retailer to consumer. Perishables favour short channels." }
    ]
  },

  "Commodity Market": {
    subject: "Commerce", title: "Commodity Markets",
    icon: "🌽", estimatedTime: "3 min read",
    sections: [
      { heading: "What is a Commodity Market?", type: "text",
        content: "A commodity market is where raw materials and primary products are bought and sold, often in large quantities and by grade rather than by sample: cocoa, cotton, groundnut, palm produce, grains, crude oil, metals." },
      { heading: "Types", type: "cards", items: [
        { title: "Spot (cash) market", body: "Goods bought and delivered immediately at the current price." },
        { title: "Futures market", body: "Contracts to buy or sell a commodity at an agreed price on a future date." },
        { title: "Produce exchange", body: "A market where agricultural produce is traded in bulk by grade." },
        { title: "Commodity exchange", body: "An organised, regulated market for commodities (in Nigeria, the Nigerian Commodity Exchange)." },
      ]},
      { heading: "Key Terms", type: "cards", items: [
        { title: "Hedging", body: "Using futures to protect against future price changes. A farmer or buyer fixes the price in advance." },
        { title: "Speculator", body: "Buys and sells hoping to profit from price changes. Can add liquidity but also create instability." },
        { title: "Broker", body: "Agent who buys and sells on the exchange for clients and earns commission." },
        { title: "Grading and standardisation", body: "Goods are sorted into standard grades so buyers can buy without inspection." },
        { title: "Marketing boards", body: "Former Nigerian bodies (e.g. cocoa, groundnut boards) that bought produce from farmers and sold abroad. Abolished under SAP in 1986." },
      ]},
      { heading: "Features of Commodities", type: "cards", items: [
        { title: "Characteristics", body: "Standardised, storable, non-perishable (mostly), traded in bulk and subject to large price swings from weather and global demand." },
        { title: "Nigeria's main export commodities", body: "Crude oil, cocoa, cashew, sesame, rubber." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Futures = delivery LATER at a price fixed NOW. Spot = delivery NOW.",
        "Hedging reduces risk. Speculating takes on risk.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Spot = now. Futures = later, price fixed today. Hedging = protection. Speculation = betting on price changes. Marketing boards were abolished in 1986." }
    ]
  },

  "Services": {
    subject: "Commerce", title: "Services",
    icon: "🔧", estimatedTime: "2 min read",
    sections: [
      { heading: "What are Services?", type: "text",
        content: "A service is a benefit or activity provided for payment that you cannot hold: you consume it as it is produced. Services are INTANGIBLE, perishable (cannot be stored) and are produced and used at the same time." },
      { heading: "Types of Service", type: "cards", items: [
        { title: "Direct (personal) services", body: "Given straight to people: teaching, medicine, law, hairdressing, entertainment, security." },
        { title: "Commercial services (aids to trade)", body: "Support trade: banking, insurance, transport, warehousing, advertising, communication." },
        { title: "Public services", body: "Provided by government: roads, water, power, policing, public health." },
        { title: "Professional services", body: "Need long training and are regulated: accountants, lawyers, doctors, engineers." },
      ]},
      { heading: "Goods vs Services", type: "cards", items: [
        { title: "Goods", body: "Tangible, can be stored, ownership transfers." },
        { title: "Services", body: "Intangible, cannot be stored, no ownership transfer. Quality depends on the provider." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Services cannot be stored. A hotel room unsold tonight is revenue lost forever.",
        "Banking, insurance and transport are COMMERCIAL services.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Services = intangible, perishable, produced and consumed together. Commercial services support trade. Direct services serve people." }
    ]
  },

  "Business Calculations": {
    subject: "Commerce", title: "Business Calculations",
    icon: "🧮", estimatedTime: "4 min read",
    sections: [
      { heading: "Profit, Loss, Margin and Mark-up", type: "cards", items: [
        { title: "Profit and loss", body: "Profit = selling price - cost price. Loss = cost price - selling price." },
        { title: "Percentage profit", body: "(Profit / Cost price) x 100." },
        { title: "Mark-up", body: "Profit as a percentage of COST. Mark-up = (Profit / Cost) x 100." },
        { title: "Margin", body: "Profit as a percentage of SELLING price. Margin = (Profit / Selling price) x 100." },
        { title: "Gross profit", body: "Net sales - cost of goods sold." },
        { title: "Net profit", body: "Gross profit - expenses." },
      ]},
      { heading: "Stock and Turnover", type: "cards", items: [
        { title: "Cost of goods sold", body: "Opening stock + purchases - closing stock." },
        { title: "Average stock", body: "(Opening stock + closing stock) / 2." },
        { title: "Rate of stock turnover", body: "Cost of goods sold / average stock. How many times stock is sold and replaced in a year." },
        { title: "Turnover (sales)", body: "Total sales for the period." },
      ]},
      { heading: "Discounts, Commission and VAT", type: "cards", items: [
        { title: "Trade discount", body: "List price x discount rate. Deduct from list price." },
        { title: "Cash discount", body: "Percentage taken off the invoice for prompt payment." },
        { title: "Commission", body: "Agent's pay = sales x commission rate." },
        { title: "VAT", body: "Net price x 7.5%." },
        { title: "Simple interest", body: "I = PRT / 100." },
      ]},
      { heading: "Worked Example 1: Profit Percentage", type: "steps", items: [
        "An item costs ₦8,000 and sells for ₦10,000.",
        "Profit = ₦10,000 - ₦8,000 = ₦2,000.",
        "% profit on cost (mark-up) = (2,000 / 8,000) x 100 = 25%.",
        "Margin = (2,000 / 10,000) x 100 = 20%."
      ]},
      { heading: "Worked Example 2: Stock Turnover", type: "steps", items: [
        "Opening stock ₦40,000. Closing stock ₦60,000. Cost of goods sold ₦300,000.",
        "Average stock = (40,000 + 60,000) / 2 = ₦50,000.",
        "Rate of turnover = 300,000 / 50,000 = 6 times a year."
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Mark-up uses COST as the base. Margin uses SELLING price as the base.",
        "Percentage profit on cost price unless the question says otherwise.",
        "Rate of turnover uses cost of goods sold and AVERAGE stock.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Always identify the base: cost for mark-up and %profit, selling price for margin. Cost of goods sold = opening stock + purchases - closing stock." }
    ]
  },

  "Business Concepts": {
    subject: "Commerce", title: "Business Concepts",
    icon: "💡", estimatedTime: "3 min read",
    sections: [
      { heading: "Basic Terms", type: "cards", items: [
        { title: "Business", body: "Any activity done regularly to make a profit by providing goods or services." },
        { title: "Profit", body: "Reward for the entrepreneur: revenue - total costs." },
        { title: "Entrepreneur", body: "A person who starts a business and bears the risk." },
        { title: "Goodwill", body: "The good name and customer loyalty of a business. Valued when a business is sold." },
        { title: "Risk", body: "The chance of loss: insurable risks (fire, theft) and non-insurable risks (change in fashion)." },
        { title: "Utility", body: "The ability of a good or service to satisfy a want. Types: form, place, time, possession." },
      ]},
      { heading: "Factors of Production", type: "cards", items: [
        { title: "Land", body: "All natural resources. Reward: rent." },
        { title: "Labour", body: "Human effort. Reward: wages and salaries." },
        { title: "Capital", body: "Man-made aids to production. Reward: interest." },
        { title: "Entrepreneur", body: "Organises the others and takes risk. Reward: profit." },
      ]},
      { heading: "Business Objectives", type: "cards", items: [
        { title: "Profit maximisation", body: "Earning as much profit as possible." },
        { title: "Survival and growth", body: "Staying in business and expanding." },
        { title: "Customer satisfaction and social goals", body: "Good service and responsible behaviour." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Profit is the reward for the entrepreneur, not for labour or capital.",
        "Utility of place = moving goods to where they are needed (transport).",
        "Goodwill is an intangible asset.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Rewards: land-rent, labour-wages, capital-interest, entrepreneur-profit. Utility: form, place, time, possession." }
    ]
  },

  "Business Regulation": {
    subject: "Commerce", title: "Business Regulation in Nigeria",
    icon: "📜", estimatedTime: "3 min read",
    sections: [
      { heading: "Why Businesses Are Regulated", type: "text",
        content: "Regulation protects consumers, workers, investors and the environment, ensures fair competition, collects revenue and keeps the economy stable." },
      { heading: "Key Regulators and Laws", type: "cards", items: [
        { title: "CAC and CAMA", body: "Corporate Affairs Commission registers businesses and companies. The Companies and Allied Matters Act (CAMA, updated 2020) governs how they are formed and run." },
        { title: "FIRS and state tax boards", body: "Federal Inland Revenue Service collects company income tax, VAT and others. State boards collect personal income tax." },
        { title: "CBN", body: "Regulates banks and monetary policy." },
        { title: "NDIC", body: "Nigeria Deposit Insurance Corporation insures bank deposits." },
        { title: "SEC", body: "Securities and Exchange Commission regulates the capital market." },
        { title: "NAICOM", body: "National Insurance Commission regulates insurance companies." },
        { title: "NAFDAC, SON, FCCPC", body: "Regulate food and drugs, standards and consumer protection and competition." },
        { title: "PENCOM", body: "National Pension Commission regulates the pension system." },
        { title: "NCC", body: "Nigerian Communications Commission regulates telecoms." },
      ]},
      { heading: "Starting a Business Legally", type: "steps", items: [
        "Choose a name and check availability at the CAC.",
        "Register the business (business name or company).",
        "Obtain a Tax Identification Number (TIN) from FIRS.",
        "Obtain licences or permits needed for the specific business.",
        "Register for VAT and pension and open a business bank account."
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "CAC registers businesses. FIRS collects tax. Do not swap them.",
        "SON sets standards. NAFDAC checks food and drugs.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "CAC = registration. FIRS = tax. CBN = banks. SEC = capital market. NAICOM = insurance. NDIC = deposit insurance. NAFDAC = food and drugs." }
    ]
  },

  "Entrepreneurship": {
    subject: "Commerce", title: "Entrepreneurship",
    icon: "🚀", estimatedTime: "3 min read",
    sections: [
      { heading: "What is Entrepreneurship?", type: "text",
        content: "Entrepreneurship is the process of identifying an opportunity, organising resources and starting a business, taking on the risk in the hope of profit. An entrepreneur is the person who does this." },
      { heading: "Characteristics of an Entrepreneur", type: "cards", items: [
        { title: "Risk taking", body: "Willing to face uncertainty and possible loss." },
        { title: "Innovation", body: "Comes up with new products, methods or markets." },
        { title: "Determination and hard work", body: "Stays committed despite setbacks." },
        { title: "Leadership and decision-making", body: "Organises people and makes timely choices." },
        { title: "Self-confidence and creativity", body: "Believes in the idea and finds new solutions." },
      ]},
      { heading: "Functions of an Entrepreneur", type: "cards", items: [
        { title: "Organises factors of production", body: "Combines land, labour and capital." },
        { title: "Bears risk", body: "Takes the loss if the business fails." },
        { title: "Makes decisions", body: "What, how and for whom to produce." },
        { title: "Innovates", body: "Brings new ideas into the market." },
        { title: "Creates jobs", body: "Employs others and builds the economy." },
      ]},
      { heading: "Problems Facing Nigerian Entrepreneurs", type: "cards", items: [
        { title: "Challenges", body: "Lack of capital, poor power supply, high interest rates, poor roads, multiple taxes, insecurity, weak infrastructure, competition from imports, inadequate skills." },
        { title: "Support bodies", body: "SMEDAN (Small and Medium Enterprises Development Agency of Nigeria), Bank of Industry, microfinance banks, NDE (National Directorate of Employment)." },
      ]},
      { heading: "Starting a Small Business", type: "steps", items: [
        "Find an idea and test whether people will buy.",
        "Write a business plan: market, costs, finance, plan for growth.",
        "Raise capital.",
        "Register the business and get required licences.",
        "Choose a location, hire staff and start trading."
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "The entrepreneur's reward is PROFIT, and the entrepreneur also bears the RISK.",
        "SMEDAN supports small and medium enterprises. It is not a bank.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Entrepreneur = organiser + risk-taker + innovator. Reward = profit. SMEDAN and BOI support small businesses. Main challenges: capital, power and infrastructure." }
    ]
  },

}

export default COMMERCE_EXTRA_GUIDES
