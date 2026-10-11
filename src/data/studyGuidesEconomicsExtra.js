// EXAMEDGENG — ECONOMICS STUDY GUIDES (EXTRA)
// Guides for Economics topics that did not have one yet.
// Keys match the topic names in the question bank exactly.
//
// HOW TO USE:
// 1. Save this file as src/data/studyGuidesEconomicsExtra.js
// 2. In src/data/studyGuides.js add at the top:
//      import ECONOMICS_EXTRA_GUIDES from "./studyGuidesEconomicsExtra"
// 3. At the very end of the STUDY_GUIDES object (next to the other spreads), add:
//      ...ECONOMICS_EXTRA_GUIDES,

// ------------------------------------------------------------
// Shared guides (used by more than one topic name)
// ------------------------------------------------------------

const FISCAL_POLICY = {
  subject: "Economics",
  title: "Fiscal Policy and Public Finance",
  icon: "🏛️",
  estimatedTime: "5 min read",
  sections: [
    { heading: "What This Topic Covers", type: "text",
      content: "Public finance is how government raises money (taxes, borrowing, other revenue) and spends it. Fiscal policy is the use of government spending, taxation and borrowing to influence the economy: to control inflation, reduce unemployment and promote growth." },
    { heading: "Sources of Government Revenue", type: "cards", items: [
      { title: "Tax revenue", body: "Direct taxes (on income and profit) and indirect taxes (on goods and services). The main source in most countries." },
      { title: "Non-tax revenue", body: "Oil royalties and rents, licence fees, fines, profits of public enterprises, grants and aid." },
      { title: "Borrowing", body: "Internal (from citizens, banks, by issuing bonds and treasury bills) and external (from IMF, World Bank, other countries)." },
      { title: "Nigeria", body: "Petroleum revenue dominates. Revenue is paid into the Federation Account and shared among federal, state and local governments." }
    ]},
    { heading: "Types of Tax", type: "cards", items: [
      { title: "Direct tax", body: "Paid directly by the person it is levied on; cannot be shifted. Examples: personal income tax (PAYE), company income tax, capital gains tax. RECURRING!" },
      { title: "Indirect tax", body: "Collected from one person but the burden can be shifted to another (consumer). Examples: VAT, excise duty, import duty (customs). RECURRING!" },
      { title: "Progressive tax", body: "Rate INCREASES as income increases (rich pay a higher percentage). Personal income tax is usually progressive." },
      { title: "Regressive tax", body: "Takes a higher percentage of income from low earners (e.g. flat taxes on goods like VAT/excise on necessities)." },
      { title: "Proportional tax", body: "Same percentage at every income level." },
      { title: "Impact and incidence", body: "Impact = who pays the tax first. Incidence = who finally bears the burden." }
    ]},
    { heading: "Canons (Principles) of Taxation — Adam Smith", type: "cards", items: [
      { title: "Equity", body: "Tax should be based on ability to pay." },
      { title: "Certainty", body: "Taxpayer must know how much, when and how to pay." },
      { title: "Convenience", body: "Time and method of payment should suit the taxpayer." },
      { title: "Economy", body: "Cost of collection should be small compared with the yield." }
    ]},
    { heading: "Government Budget", type: "cards", items: [
      { title: "Balanced budget", body: "Revenue = expenditure." },
      { title: "Budget deficit", body: "Expenditure > revenue. Financed by borrowing or printing money. Used in a recession (expansionary)." },
      { title: "Budget surplus", body: "Revenue > expenditure. Used to fight inflation (contractionary)." },
      { title: "Recurrent vs capital expenditure", body: "Recurrent = day-to-day (salaries, maintenance). Capital = long-term projects (roads, dams, schools)." }
    ]},
    { heading: "Fiscal Policy Tools", type: "cards", items: [
      { title: "Expansionary", body: "Increase government spending and/or cut taxes. Raises demand, output and employment. Used in recession and high unemployment." },
      { title: "Contractionary", body: "Cut spending and/or raise taxes. Reduces demand and inflation. Used when inflation is high." },
      { title: "Public debt", body: "Total government borrowing. Internal debt is owed within the country. External debt is owed to foreigners and must be repaid in foreign exchange." },
      { title: "Debt burden", body: "Debt servicing (interest + repayment) can crowd out spending on development." }
    ]},
    { heading: "Trap Answers to Avoid", type: "warning", items: [
      "Fiscal policy is run by GOVERNMENT (taxes, spending). Monetary policy is run by the CENTRAL BANK (interest rates, money supply).",
      "Direct tax cannot be shifted. Indirect tax can be shifted to the consumer.",
      "Progressive means a higher PERCENTAGE for richer people, not just a higher amount.",
      "A budget deficit does not always mean a bad economy. It can be a deliberate tool in a recession."
    ]},
    { heading: "Quick Tip", type: "tip",
      content: "Direct = income, company, capital gains (cannot be shifted). Indirect = VAT, excise, customs (can be shifted). Deficit = spend more than earn (expansionary). Surplus = earn more (contractionary). Fiscal = government. Monetary = central bank." }
  ]
}

const INDUSTRY_LOCATION = {
  subject: "Economics",
  title: "Industry, Location and Resources",
  icon: "🏭",
  estimatedTime: "4 min read",
  sections: [
    { heading: "What This Topic Covers", type: "text",
      content: "Industry covers the production of goods and services. This topic explains where firms choose to locate, why industries cluster, the role of natural resources, and the problems of industrialisation in developing countries such as Nigeria." },
    { heading: "Types of Industry", type: "cards", items: [
      { title: "Primary", body: "Extraction of natural resources: farming, fishing, mining, forestry, oil drilling." },
      { title: "Secondary", body: "Manufacturing and construction: processing raw materials into finished goods." },
      { title: "Tertiary", body: "Services: banking, transport, insurance, trade, education, health." },
      { title: "Light vs heavy industry", body: "Light = small, consumer goods (food, clothing). Heavy = large-scale, capital goods (steel, cement, shipbuilding)." }
    ]},
    { heading: "Factors Affecting Location of Industry", type: "cards", items: [
      { title: "Raw materials", body: "Industries using heavy, bulky or weight-losing materials (cement, sugar, tin) locate NEAR the raw materials. RECURRING!" },
      { title: "Market", body: "Perishable or fragile goods, and weight-gaining products (bottled drinks, bread) locate near the market." },
      { title: "Power supply", body: "Aluminium smelting needs cheap electricity (hydroelectric power). Access to energy affects every industry." },
      { title: "Labour", body: "Availability, skill and cost of labour." },
      { title: "Transport and communication", body: "Roads, rail, ports and telecoms reduce costs." },
      { title: "Capital and banking facilities", body: "Access to finance and insurance." },
      { title: "Government policy", body: "Incentives, tax holidays, industrial estates, free trade zones, political stability." },
      { title: "Climate, land and water", body: "Land cost, water for processing, climate conditions." }
    ]},
    { heading: "Key Concepts", type: "cards", items: [
      { title: "Localisation of industry", body: "Concentration of firms in the same industry in one area, giving external economies (skilled labour, suppliers, infrastructure). Example: Kano leather, Lagos industrial estates." },
      { title: "Industrial inertia", body: "An industry stays in its original location even after the reasons for choosing it have disappeared." },
      { title: "Footloose industry", body: "Not tied to any particular location (e.g. electronics, light assembly)." },
      { title: "Diversification", body: "Spreading industrial activity across many products and regions to reduce risk." },
      { title: "Industrial estate", body: "Planned area with shared facilities for factories (e.g. Ikeja, Trans-Amadi)." }
    ]},
    { heading: "Natural Resources and Industrialisation in Nigeria", type: "cards", items: [
      { title: "Resources", body: "Crude oil and gas (Niger Delta), coal (Enugu), tin and columbite (Jos Plateau), limestone (cement), iron ore (Itakpe), bitumen and agricultural products." },
      { title: "Renewable vs non-renewable", body: "Renewable: forests, fish, solar, water. Non-renewable: oil, coal, tin. Non-renewable resources need careful use." },
      { title: "Importance of industrialisation", body: "Creates jobs, earns and saves foreign exchange, adds value to raw materials, and reduces dependence on imports." },
      { title: "Problems", body: "Poor power supply, weak infrastructure, shortage of capital and skilled labour, small markets, multiple taxes, importation and smuggling, policy inconsistency." },
      { title: "Solutions", body: "Improve electricity and transport, provide credit, encourage local raw materials, strengthen incentives and policy stability, and protect infant industries." }
    ]},
    { heading: "Trap Answers to Avoid", type: "warning", items: [
      "Weight-LOSING materials favour a location near the raw material. Weight-GAINING products favour a location near the market.",
      "Localisation is about firms of the same industry clustering, not about government placing them.",
      "Industrial inertia is the staying power of an industry in an old location.",
      "Secondary industry is manufacturing, not extraction (that is primary)."
    ]},
    { heading: "Quick Tip", type: "tip",
      content: "Raw material orientation = bulky, weight-losing (cement, sugar). Market orientation = perishable, weight-gaining (bread, bottled drinks). Localisation = clustering and external economies. Industrial inertia = stays put after reasons vanish." }
  ]
}

const GOVERNMENT_FISCAL = FISCAL_POLICY

const ECONOMICS_EXTRA_GUIDES = {

  // ==========================================
  // ECONOMICS — NATIONAL INCOME ACCOUNTING
  // ==========================================
  "National Income Accounting": {
    subject: "Economics",
    title: "National Income Accounting",
    icon: "📈",
    estimatedTime: "4 min read",
    sections: [
      { heading: "What is National Income?", type: "text",
        content: "National income is the total value of goods and services produced by a country in a period (usually a year). National income accounting measures this using three equivalent methods, because every naira produced is also someone's income and someone's spending." },
      { heading: "Key Measures", type: "cards", items: [
        { title: "GDP", body: "Gross Domestic Product: value of all final goods and services produced WITHIN a country's borders in a year, by citizens and foreigners alike." },
        { title: "GNP / GNI", body: "GNP = GDP + net income from abroad (income earned by citizens abroad minus income earned by foreigners in the country)." },
        { title: "NNP", body: "Net National Product = GNP − depreciation (capital consumption)." },
        { title: "National income", body: "NNP at factor cost = NNP − indirect taxes + subsidies." },
        { title: "Per capita income", body: "National income ÷ population. Average income per person; a rough measure of living standards." },
        { title: "Real vs nominal", body: "Nominal GDP uses current prices. Real GDP is adjusted for inflation using a price index (GDP deflator). Use real GDP to compare years." }
      ]},
      { heading: "Three Methods of Measurement", type: "cards", items: [
        { title: "Output (product) method", body: "Add the VALUE ADDED at each stage of production across all sectors. Counting only final goods or value added avoids double counting. RECURRING!" },
        { title: "Income method", body: "Add all incomes earned: wages and salaries, rent, interest and profit (plus mixed income). Excludes transfer payments." },
        { title: "Expenditure method", body: "GDP = C + I + G + (X − M). C = consumption, I = investment, G = government spending, X = exports, M = imports." }
      ]},
      { heading: "Worked Example", type: "steps", items: [
        "Given: C = ₦600bn, I = ₦200bn, G = ₦150bn, X = ₦100bn, M = ₦80bn.",
        "GDP = C + I + G + (X − M).",
        "GDP = 600 + 200 + 150 + (100 − 80) = 970.",
        "GDP = ₦970 billion.",
        "If net income from abroad = −₦20bn, GNP = 970 − 20 = ₦950bn.",
        "If depreciation = ₦50bn, NNP = 950 − 50 = ₦900bn."
      ]},
      { heading: "Problems of Measuring National Income", type: "cards", items: [
        { title: "Non-marketed output", body: "Subsistence farming, housework and unpaid services are hard to count." },
        { title: "Informal sector and underground economy", body: "Unrecorded activity, tax evasion, smuggling." },
        { title: "Poor data and illiteracy", body: "Weak record keeping in developing countries." },
        { title: "Double counting and price changes", body: "Intermediate goods counted twice, and inflation distorts comparisons." },
        { title: "Transfer payments", body: "Pensions, grants and gifts are not production and should be excluded." }
      ]},
      { heading: "Trap Answers to Avoid", type: "warning", items: [
        "GDP is about production WITHIN borders; GNP is about production by NATIONALS anywhere.",
        "Transfer payments (pensions, gifts) are not part of national income.",
        "Sales of second-hand goods and shares are not included in GDP.",
        "Higher per capita income does not guarantee equal income distribution."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "GNP = GDP + net income from abroad. NNP = GNP − depreciation. Expenditure: GDP = C + I + G + (X − M). Use value added to avoid double counting. Always compare real, not nominal, GDP." }
    ]
  },

  // ==========================================
  // ECONOMICS — INDUSTRY AND LOCATION / INDUSTRY & RESOURCES
  // ==========================================
  "Industry and Location": INDUSTRY_LOCATION,
  "Industry & Resources": INDUSTRY_LOCATION,

  // ==========================================
  // ECONOMICS — POPULATION AND LABOUR
  // ==========================================
  "Population and Labour": {
    subject: "Economics",
    title: "Population and Labour",
    icon: "👥",
    estimatedTime: "4 min read",
    sections: [
      { heading: "What This Topic Covers", type: "text",
        content: "Population studies the size, structure and growth of people in a country. Labour is the human effort used in production. Together they determine how much a country can produce and how well people live." },
      { heading: "Population Concepts", type: "cards", items: [
        { title: "Census", body: "Official count of the population with details such as age, sex and occupation, usually every ten years." },
        { title: "Birth rate and death rate", body: "Number of births (or deaths) per 1,000 people per year." },
        { title: "Natural increase", body: "Birth rate − death rate (per 1,000). Add net migration to get total population change." },
        { title: "Population structure", body: "Age and sex distribution. A wide base (many young) shows a young, fast-growing population like Nigeria's." },
        { title: "Dependency ratio", body: "(Young under 15 + elderly 65 and over) ÷ working-age population (15–64) × 100. A high ratio means a heavy burden on workers. RECURRING!" },
        { title: "Optimum population", body: "The size that gives the highest output per head with existing resources and technology. Overpopulation: too many people, falling living standards. Underpopulation: resources not fully used." }
      ]},
      { heading: "Malthusian Theory", type: "cards", items: [
        { title: "Claim", body: "Population grows GEOMETRICALLY (1, 2, 4, 8) while food grows ARITHMETICALLY (1, 2, 3, 4), so population eventually outstrips food." },
        { title: "Checks", body: "Positive checks: famine, war, disease. Preventive checks: late marriage, moral restraint." },
        { title: "Criticism", body: "Technology and the green revolution raised food output; family planning slowed growth." }
      ]},
      { heading: "Labour Force and Mobility", type: "cards", items: [
        { title: "Labour force", body: "People who are able and willing to work (usually 15–64) and either employed or seeking work. Students, full-time housewives and the retired are NOT in the labour force." },
        { title: "Geographical mobility", body: "Movement of labour from one place to another (e.g. rural to urban)." },
        { title: "Occupational mobility", body: "Movement from one job or occupation to another." },
        { title: "Barriers to mobility", body: "Family ties, lack of skills, housing cost, language, culture, poor information, cost of training." },
        { title: "Division of labour", body: "Breaking production into tasks done by specialists. Advantages: higher output, skill. Disadvantages: boredom, over-dependence, unemployment from technology." }
      ]},
      { heading: "Unemployment", type: "cards", items: [
        { title: "Frictional", body: "Between jobs, searching for a better one." },
        { title: "Structural", body: "Skills no longer needed because of technology or industry change. Needs retraining." },
        { title: "Cyclical", body: "Caused by a recession and weak demand." },
        { title: "Seasonal", body: "Work only available in certain seasons (e.g. farming)." },
        { title: "Disguised", body: "More workers than needed; removing some does not reduce output (common in agriculture)." },
        { title: "Underemployment", body: "Working fewer hours or below one's skill level." }
      ]},
      { heading: "Trap Answers to Avoid", type: "warning", items: [
        "Natural increase is birth rate minus death rate, not birth rate plus immigration.",
        "Optimum population is not the largest population. It is the one that maximises output per head.",
        "Students and housewives are not part of the labour force.",
        "Structural unemployment is caused by technology change. Cyclical unemployment is caused by recession."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Dependency ratio = (young + old) ÷ working-age × 100. Malthus = geometric vs arithmetic. Structural = technology, needs retraining. Cyclical = recession. Disguised = surplus labour in agriculture." }
    ]
  },

  // ==========================================
  // ECONOMICS — PRODUCTION ALTERNATIVES
  // ==========================================
  "Production Alternatives": {
    subject: "Economics",
    title: "Production Alternatives — Scarcity, Choice and the PPC",
    icon: "⚖️",
    estimatedTime: "4 min read",
    sections: [
      { heading: "The Basic Problem", type: "text",
        content: "Resources are scarce but wants are unlimited. Society must choose what to produce, how to produce and for whom. Each choice has an opportunity cost: the next best alternative given up. The production possibility curve (PPC) shows these choices." },
      { heading: "Key Terms", type: "cards", items: [
        { title: "Scarcity", body: "Limited resources relative to unlimited wants. It is the root of the economic problem." },
        { title: "Scale of preference", body: "A list of wants arranged in order of importance. The most urgent is satisfied first." },
        { title: "Choice", body: "Because of scarcity we must choose among alternatives." },
        { title: "Opportunity cost", body: "The value of the best alternative forgone. Also called real cost. RECURRING!" },
        { title: "Factors of production", body: "Land (rent), labour (wages), capital (interest), entrepreneur (profit)." }
      ]},
      { heading: "Production Possibility Curve (PPC)", type: "cards", items: [
        { title: "Definition", body: "A curve showing the maximum combinations of two goods that can be produced with all resources fully and efficiently used." },
        { title: "Points on the curve", body: "Efficient: resources fully employed. Moving along the curve shows opportunity cost: more of one good means less of the other." },
        { title: "Points inside the curve", body: "Possible but inefficient: unemployment or underused resources." },
        { title: "Points outside the curve", body: "Unattainable with current resources and technology." },
        { title: "Shape", body: "Usually bowed outward (concave) because of INCREASING opportunity cost. A straight line means constant opportunity cost." },
        { title: "Outward shift", body: "Economic growth: more resources, better technology, education, capital accumulation. RECURRING!" },
        { title: "Inward shift", body: "Loss of resources: war, natural disaster, emigration of skilled workers." }
      ]},
      { heading: "Worked Example", type: "steps", items: [
        "A country can produce: A = 100 rice, 0 cars; B = 80 rice, 20 cars; C = 50 rice, 40 cars.",
        "Moving from A to B: gives up 20 rice to gain 20 cars. Opportunity cost of 1 car = 1 rice.",
        "Moving from B to C: gives up 30 rice to gain 20 cars. Opportunity cost of 1 car = 1.5 rice.",
        "The opportunity cost is rising, so the PPC is concave to the origin."
      ]},
      { heading: "Economic Systems — Solving the Problem", type: "cards", items: [
        { title: "Market (capitalist)", body: "Prices and private choice decide. Efficient but may be unequal." },
        { title: "Command (socialist)", body: "Government plans production. Equal distribution intended but can be inefficient." },
        { title: "Mixed", body: "Both private sector and government (Nigeria)." }
      ]},
      { heading: "Trap Answers to Avoid", type: "warning", items: [
        "Opportunity cost is the value of the NEXT BEST alternative, not the money spent.",
        "A point inside the PPC shows unemployment or inefficiency, not growth.",
        "Growth shifts the PPC outward. Moving along the curve is NOT growth.",
        "The PPC applies to a full-employment economy using given technology."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "On the curve = efficient. Inside = wasted resources. Outside = impossible for now. Outward shift = growth. Concave shape = rising opportunity cost. Scarcity → choice → opportunity cost." }
    ]
  },

  // ==========================================
  // ECONOMICS — INFLATION
  // ==========================================
  "Inflation": {
    subject: "Economics",
    title: "Inflation — Causes, Effects and Control",
    icon: "💹",
    estimatedTime: "4 min read",
    sections: [
      { heading: "What is Inflation?", type: "text",
        content: "Inflation is a persistent rise in the general price level, which reduces the purchasing power of money. It is measured by the rate of change of a price index such as the Consumer Price Index (CPI). A one-time price rise of a single item is not inflation." },
      { heading: "Measuring Inflation", type: "cards", items: [
        { title: "Consumer Price Index (CPI)", body: "Measures the cost of a typical basket of goods and services bought by households over time." },
        { title: "Inflation rate", body: "[(CPI this year − CPI last year) ÷ CPI last year] × 100." },
        { title: "Worked example", body: "CPI rises from 120 to 132. Rate = (132 − 120) ÷ 120 × 100 = 10%." },
        { title: "Related terms", body: "Deflation = persistent fall in prices. Disinflation = falling rate of inflation. Hyperinflation = extremely rapid inflation. Stagflation = inflation with high unemployment and low growth." }
      ]},
      { heading: "Causes of Inflation", type: "cards", items: [
        { title: "Demand-pull", body: "Too much money chasing too few goods: excess aggregate demand from government spending, easy credit or high incomes. RECURRING!" },
        { title: "Cost-push", body: "Rising costs of production (wages, fuel, raw materials, imported inputs) push prices up. RECURRING!" },
        { title: "Monetary", body: "Excessive growth in the money supply, as in printing money." },
        { title: "Imported inflation", body: "Rising prices of imports or a fall in the exchange rate." },
        { title: "Structural", body: "Inefficient supply (poor roads, food shortage, bottlenecks)." }
      ]},
      { heading: "Effects of Inflation", type: "cards", items: [
        { title: "Who loses", body: "Savers, fixed-income earners (pensioners), lenders and creditors, wage earners whose pay lags prices." },
        { title: "Who gains", body: "Debtors (repay with cheaper money), owners of real assets (land, houses), speculators and some producers." },
        { title: "Economy-wide", body: "Falling real value of money, reduced savings, uncertainty, reduced exports, balance of payments problems, and 'menu costs' and shoe-leather costs." }
      ]},
      { heading: "Control of Inflation", type: "cards", items: [
        { title: "Monetary policy", body: "Raise interest rates and the cash reserve ratio; sell securities (open market operations); reduce credit. Done by the Central Bank." },
        { title: "Fiscal policy", body: "Cut government spending and raise taxes (contractionary)." },
        { title: "Supply-side measures", body: "Raise output, improve infrastructure, remove import bottlenecks, increase productivity." },
        { title: "Direct controls", body: "Price controls, rationing, wage restraint." }
      ]},
      { heading: "Trap Answers to Avoid", type: "warning", items: [
        "Inflation is a CONTINUOUS rise in the general price level. One price rise is not inflation.",
        "Debtors benefit from inflation; creditors and savers lose.",
        "Cost-push comes from the supply side (costs). Demand-pull comes from excess demand.",
        "To fight inflation, the Central Bank raises (not lowers) interest rates."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Demand-pull = too much money chasing goods. Cost-push = rising production costs. Debtors gain, savers lose. Control = higher interest rates, lower spending, higher taxes, more supply. Inflation rate = change in CPI ÷ old CPI × 100." }
    ]
  },

  // ==========================================
  // ECONOMICS — TRADE AND DISTRIBUTION
  // ==========================================
  "Trade and Distribution": {
    subject: "Economics",
    title: "Trade and Distribution",
    icon: "🚚",
    estimatedTime: "4 min read",
    sections: [
      { heading: "What This Topic Covers", type: "text",
        content: "Trade is the buying and selling of goods and services. Distribution is the process of moving goods from producers to consumers. This topic covers home trade, the channels of distribution, middlemen and the aids to trade." },
      { heading: "Chain of Distribution", type: "cards", items: [
        { title: "Normal channel", body: "Producer → Wholesaler → Retailer → Consumer." },
        { title: "Shorter channels", body: "Producer → Retailer → Consumer. Producer → Consumer (direct selling, factory shops, online, mail order)." },
        { title: "Wholesaler", body: "Buys in bulk from producers and sells in smaller lots to retailers. Functions: breaks bulk, stores goods, gives credit, offers advice and market information, absorbs risk of price changes." },
        { title: "Retailer", body: "Last link in the chain; sells to final consumers in small quantities. Functions: stocks variety, gives credit, advice, after-sales service, convenience. RECURRING!" },
        { title: "Middlemen", body: "Traders (wholesalers, retailers, agents) between producer and consumer. They are sometimes accused of raising prices; eliminating them can shorten the chain but the functions still must be done." }
      ]},
      { heading: "Types of Retail Outlet", type: "cards", items: [
        { title: "Small independent shops and kiosks", body: "Close to homes, credit and personal service." },
        { title: "Supermarket", body: "Large self-service shop, wide range." },
        { title: "Department store", body: "Large shop with many sections under one roof." },
        { title: "Chain store / multiple shop", body: "Many branches under one ownership." },
        { title: "Mail order and e-commerce", body: "Selling by catalogue or online with home delivery." },
        { title: "Hawkers and markets", body: "Traders without a fixed shop; open markets." }
      ]},
      { heading: "Aids to Trade", type: "cards", items: [
        { title: "Warehousing", body: "Storage that bridges the time gap between production and consumption; allows production ahead of demand." },
        { title: "Transport", body: "Moves goods (road, rail, water, air, pipeline) and bridges the place gap." },
        { title: "Banking and insurance", body: "Provide finance, payment services and protection against risk." },
        { title: "Advertising", body: "Informs and persuades consumers." },
        { title: "Communication", body: "Phones, internet, post speed up trade." }
      ]},
      { heading: "Home Trade vs Foreign Trade", type: "cards", items: [
        { title: "Home (domestic) trade", body: "Buying and selling within one country: retail and wholesale." },
        { title: "Foreign trade", body: "Between countries: imports and exports." },
        { title: "Entrepot trade", body: "Importing goods to re-export them (e.g. Singapore, Hong Kong)." },
        { title: "Visible vs invisible", body: "Visible trade = goods. Invisible trade = services (shipping, banking, tourism, insurance)." }
      ]},
      { heading: "Trap Answers to Avoid", type: "warning", items: [
        "The retailer is the last link in the chain of distribution, not the consumer.",
        "Eliminating middlemen does not remove the functions they perform. Someone must still do them.",
        "Warehousing bridges TIME. Transport bridges PLACE.",
        "Wholesalers sell to retailers, not mainly to the final consumer."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Producer → wholesaler → retailer → consumer. Wholesaler breaks bulk. Retailer is the last link. Warehousing = time, transport = place. Visible trade = goods. Invisible trade = services." }
    ]
  },

  // ==========================================
  // ECONOMICS — BUSINESS ORGANIZATIONS
  // ==========================================
  "Business Organizations": {
    subject: "Economics",
    title: "Business Organisations",
    icon: "🏢",
    estimatedTime: "5 min read",
    sections: [
      { heading: "What This Topic Covers", type: "text",
        content: "Business organisations are the forms in which firms are owned and run. You must know the features, advantages and disadvantages of each type, and be able to compare them." },
      { heading: "Sole Proprietorship (One-Man Business)", type: "cards", items: [
        { title: "Features", body: "Owned and controlled by one person. Simple to set up. UNLIMITED liability." },
        { title: "Advantages", body: "Easy to start, quick decisions, owner keeps all profit, personal contact with customers, privacy." },
        { title: "Disadvantages", body: "Limited capital (main handicap), unlimited liability, owner's illness or death may end the business, difficulty expanding. RECURRING!" }
      ]},
      { heading: "Partnership", type: "cards", items: [
        { title: "Features", body: "Two or more people (traditionally up to 20) carry on business together to make profit. Governed by a partnership deed. Partners usually have UNLIMITED liability." },
        { title: "Types of partners", body: "Active, sleeping (dormant: invests but takes no part), nominal, and limited partner (in a limited partnership)." },
        { title: "Advantages", body: "More capital and skills, shared risk and workload." },
        { title: "Disadvantages", body: "Unlimited liability, disagreements, one partner's action binds all, may end on death or withdrawal." }
      ]},
      { heading: "Limited Liability Companies", type: "cards", items: [
        { title: "Features", body: "Separate legal entity from owners. Ownership is by shares. LIMITED liability: shareholders lose only what they invested. Perpetual succession. Registered with the Corporate Affairs Commission (CAC)." },
        { title: "Private limited company (Ltd)", body: "Shares not offered to the public and transfer is restricted. Fewer shareholders." },
        { title: "Public limited company (Plc)", body: "Shares offered to the public and traded on the stock exchange. Raises large capital." },
        { title: "Ordinary shares", body: "Voting rights; dividend varies with profit; paid last on liquidation. Part of equity capital." },
        { title: "Preference shares", body: "Fixed dividend paid before ordinary shareholders; usually no voting rights." },
        { title: "Debentures", body: "A LOAN to the company (not ownership). Fixed interest paid whether or not profit is made. Debenture holders are creditors." },
        { title: "Advantages / disadvantages", body: "Advantages: large capital, limited liability, continuity, expert managers. Disadvantages: legal formalities, separation of ownership and control, less secrecy, profits shared." }
      ]},
      { heading: "Cooperative Societies", type: "cards", items: [
        { title: "Meaning", body: "Voluntary association of people with a common need to help themselves. Based on the Rochdale Pioneers (England, 1844)." },
        { title: "Principles", body: "Voluntary membership, democratic control (one member, one vote), limited interest on capital, surplus shared by patronage, cash trading and education." },
        { title: "Types", body: "Consumer, producer (marketing), thrift and credit, and housing cooperatives." }
      ]},
      { heading: "Public Enterprises", type: "cards", items: [
        { title: "Public corporation", body: "Set up by an Act or decree; owned by government; provides essential services (e.g. NNPC, NPA)." },
        { title: "Joint venture", body: "Government and private investors share ownership (e.g. oil joint ventures)." },
        { title: "Privatisation and commercialisation", body: "Privatisation = sale to private owners. Commercialisation = run on business lines but still government-owned." }
      ]},
      { heading: "Growth of Firms", type: "cards", items: [
        { title: "Merger", body: "Two firms combine into one." },
        { title: "Takeover (acquisition)", body: "One firm buys another." },
        { title: "Horizontal integration", body: "Firms at the same stage of production join (e.g. two banks)." },
        { title: "Vertical integration", body: "Firms at different stages join (e.g. a miller buying a farm)." },
        { title: "Conglomerate", body: "Firms in unrelated industries join." }
      ]},
      { heading: "Trap Answers to Avoid", type: "warning", items: [
        "Debenture holders are CREDITORS, not owners. Shareholders are owners.",
        "Ordinary shares carry no fixed dividend. Preference shares carry a fixed rate.",
        "Limited liability protects owners' personal property in a company, not in a sole proprietorship.",
        "Privatisation changes ownership; commercialisation does not."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Sole trader = unlimited liability, limited capital. Partnership = shared capital, unlimited liability. Company = separate legal entity, limited liability, shares. Debenture = loan. Cooperative = Rochdale 1844, one member one vote." }
    ]
  },

  // ==========================================
  // ECONOMICS — FISCAL POLICY (two topic names)
  // ==========================================
  "Fiscal Policy and Public Finance": GOVERNMENT_FISCAL,
  "Fiscal Policy": GOVERNMENT_FISCAL,

  // ==========================================
  // ECONOMICS — AGRICULTURE AND DEVELOPMENT
  // ==========================================
  "Agriculture and Development": {
    subject: "Economics",
    title: "Agriculture and Economic Development",
    icon: "🌾",
    estimatedTime: "4 min read",
    sections: [
      { heading: "Role of Agriculture in Development", type: "cards", items: [
        { title: "Food supply", body: "Feeds the growing population." },
        { title: "Employment", body: "Employs a large share of the labour force in developing countries." },
        { title: "Raw materials", body: "Cotton for textiles, rubber for tyres, cocoa for chocolate, palm oil for soap." },
        { title: "Foreign exchange", body: "Export of cocoa, rubber, groundnut, palm produce." },
        { title: "Market for industry and source of revenue", body: "Farmers buy inputs and consumer goods, and agriculture contributes to national income and taxes." }
      ]},
      { heading: "Types of Agriculture", type: "cards", items: [
        { title: "Subsistence", body: "Farm output mainly consumed by the farmer's family." },
        { title: "Commercial", body: "Produce for sale in the market." },
        { title: "Shifting cultivation and bush fallowing", body: "Land is farmed then left to recover fertility. Needs plenty of land and low population." },
        { title: "Mixed farming and plantation", body: "Mixed = crops and livestock together. Plantation = large estate growing one cash crop." },
        { title: "Peasant farming", body: "Small-scale farming with simple tools and family labour." }
      ]},
      { heading: "Problems of Nigerian Agriculture", type: "cards", items: [
        { title: "Land tenure and fragmentation", body: "Small scattered plots and unclear ownership limit mechanisation." },
        { title: "Lack of capital and credit", body: "Farmers lack collateral for bank loans. RECURRING!" },
        { title: "Primitive tools and methods", body: "Hoes and cutlasses, little machinery, low yields." },
        { title: "Poor infrastructure and storage", body: "Bad roads and weak storage cause post-harvest losses." },
        { title: "Climate and pests", body: "Dependence on rainfall, drought, floods, pests and diseases." },
        { title: "Rural-urban drift and ageing farmers", body: "Young people leave farms for cities." },
        { title: "Price fluctuations", body: "Unstable prices of agricultural products; demand for them is inelastic." },
        { title: "Neglect of agriculture", body: "Oil dominance reduced attention to agriculture." }
      ]},
      { heading: "Government Policies and Programmes", type: "cards", items: [
        { title: "Marketing boards (1947–1986)", body: "Bought export crops at fixed prices, stabilised producer prices and earned revenue. Abolished in 1986 under the Structural Adjustment Programme." },
        { title: "Agricultural Credit Guarantee Scheme (1977)", body: "Guarantees bank loans to farmers." },
        { title: "Operation Feed the Nation (1976) and Green Revolution (1980)", body: "Campaigns to raise food production." },
        { title: "Agricultural Development Projects (ADPs) and River Basin Authorities", body: "Provide extension services, inputs and irrigation." },
        { title: "Land Use Act (1978)", body: "Vested land in the state governor in trust for the people to improve access to land." },
        { title: "Other measures", body: "Subsidised fertiliser, research institutes, agricultural banks, cooperatives, mechanisation." }
      ]},
      { heading: "Trap Answers to Avoid", type: "warning", items: [
        "Farmers' main handicap in getting bank loans is lack of collateral (security).",
        "Marketing boards were abolished in 1986. They no longer set farm prices.",
        "Subsistence farming mainly feeds the farmer's family; commercial farming is for sale.",
        "Demand for farm produce is generally inelastic, so bumper harvests can reduce farmers' income."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Agriculture gives food, jobs, raw materials, foreign exchange. Problems: land tenure, low capital and collateral, poor storage, weather. Marketing boards 1947–1986. ACGS 1977. Land Use Act 1978." }
    ]
  },

  // ==========================================
  // ECONOMICS — STATISTICS AND DATA
  // ==========================================
  "Statistics and Data": {
    subject: "Economics",
    title: "Statistics and Data — Collection, Presentation and Averages",
    icon: "📊",
    estimatedTime: "4 min read",
    sections: [
      { heading: "Data Collection", type: "cards", items: [
        { title: "Primary data", body: "Collected first-hand by the researcher through questionnaires, interviews and observation. Accurate and up to date but costly and slow." },
        { title: "Secondary data", body: "Already collected by others (government publications, CBN reports, journals). Cheaper and quicker but may be outdated or unsuitable. RECURRING!" },
        { title: "Census vs sample", body: "Census covers the whole population. A sample is a representative part. Sampling is cheaper and faster." },
        { title: "Sampling methods", body: "Random (every item has an equal chance), stratified (groups sampled proportionally), systematic (every nth item), quota and cluster." }
      ]},
      { heading: "Presenting Data", type: "cards", items: [
        { title: "Frequency table", body: "Lists values and how often each occurs." },
        { title: "Bar chart", body: "Rectangular bars compare separate categories. Component (stacked) bar charts show parts of a whole in each bar." },
        { title: "Pie chart", body: "Circle divided into sectors showing proportions. Angle of sector = (value ÷ total) × 360°." },
        { title: "Histogram", body: "Bars without gaps for continuous data; area shows frequency." },
        { title: "Line graph", body: "Shows change over time (trends)." },
        { title: "Pictogram and ogive", body: "Pictogram uses symbols. Ogive = cumulative frequency curve used to find the median and quartiles." }
      ]},
      { heading: "Measures of Central Tendency", type: "cards", items: [
        { title: "Mean", body: "Sum of values ÷ number of values. For grouped data: Σfx ÷ Σf. Uses all data but is affected by extreme values." },
        { title: "Median", body: "Middle value when data are arranged in order. Not affected by extremes." },
        { title: "Mode", body: "Most frequent value. Useful for the 'most popular' item." },
        { title: "Range", body: "Highest − lowest. A simple measure of spread." }
      ]},
      { heading: "Worked Example", type: "steps", items: [
        "Data: 4, 6, 6, 8, 11.",
        "Mean = (4 + 6 + 6 + 8 + 11) ÷ 5 = 35 ÷ 5 = 7.",
        "Median = middle value = 6.",
        "Mode = 6 (appears twice).",
        "Range = 11 − 4 = 7."
      ]},
      { heading: "Index Numbers", type: "cards", items: [
        { title: "Meaning", body: "A figure showing the change in a variable (price, output) over time relative to a base year (base = 100)." },
        { title: "Formula", body: "Index = (current value ÷ base value) × 100." },
        { title: "Example", body: "Price rises from ₦50 (base) to ₦65. Index = 65 ÷ 50 × 100 = 130. Prices rose by 30%." },
        { title: "Use", body: "Consumer Price Index measures inflation. Index numbers measure changes in cost of living." }
      ]},
      { heading: "Trap Answers to Avoid", type: "warning", items: [
        "Pie chart angle = (value ÷ total) × 360°. Do not use 100 as the total.",
        "The mean is affected by extreme values. The median is not.",
        "Histogram bars touch each other. Bar chart bars have gaps.",
        "An index of 130 means a 30% rise from the base, not 130%."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Primary = first-hand, secondary = existing. Mean = sum ÷ count. Median = middle. Mode = most frequent. Pie angle = value/total × 360. Index = current/base × 100. Line graph for trends, bar for comparison, pie for shares." }
    ]
  },

  // ==========================================
  // ECONOMICS — ECONOMIC GROWTH & DEVELOPMENT
  // ==========================================
  "Economic Growth & Development": {
    subject: "Economics",
    title: "Economic Growth and Development",
    icon: "🚀",
    estimatedTime: "4 min read",
    sections: [
      { heading: "Growth vs Development", type: "cards", items: [
        { title: "Economic growth", body: "A sustained increase in real GDP (or real GDP per capita) over time. A quantitative measure. RECURRING!" },
        { title: "Economic development", body: "Broader and qualitative: growth PLUS improvements in living standards, health, education, income equality and reduction of poverty and unemployment." },
        { title: "Key difference", body: "Growth is necessary but not sufficient for development. A country can grow rapidly while many people remain poor." }
      ]},
      { heading: "Indicators", type: "cards", items: [
        { title: "Real GDP and GDP per capita", body: "Measure output and average income." },
        { title: "Human Development Index (HDI)", body: "Combines life expectancy (health), education (schooling) and income per head." },
        { title: "Other indicators", body: "Literacy rate, life expectancy, infant mortality, calories per person, doctors per population, access to clean water." },
        { title: "Limits of GDP per capita", body: "Ignores income distribution, non-market work, environmental damage and quality of life." }
      ]},
      { heading: "Characteristics of Developing Countries", type: "cards", items: [
        { title: "Economic", body: "Low per capita income, dependence on agriculture and primary exports, narrow industrial base, high unemployment and underemployment, heavy external debt." },
        { title: "Social", body: "High population growth, poor health and education, poor housing and high illiteracy." },
        { title: "Structural", body: "Weak infrastructure (power, roads), weak institutions and corruption, unequal income distribution." }
      ]},
      { heading: "Factors Promoting Growth", type: "cards", items: [
        { title: "Capital accumulation", body: "Savings and investment in machinery and infrastructure." },
        { title: "Education and skills (human capital)", body: "A trained labour force raises productivity." },
        { title: "Technology and innovation", body: "Improves efficiency." },
        { title: "Natural resources and entrepreneurship", body: "Use of land, minerals and enterprise." },
        { title: "Stable government and good policy", body: "Peace, rule of law, sound institutions and infrastructure." },
        { title: "Trade and foreign investment", body: "Larger markets, technology transfer and capital inflow." }
      ]},
      { heading: "Strategies and Obstacles in Nigeria", type: "cards", items: [
        { title: "Import substitution industrialisation (ISI)", body: "Producing at home what was imported to save foreign exchange." },
        { title: "Export promotion", body: "Encouraging non-oil exports to earn foreign exchange." },
        { title: "Structural Adjustment Programme (SAP), 1986", body: "Market reforms: deregulation, devaluation, privatisation and trade liberalisation." },
        { title: "Obstacles", body: "Corruption, poor infrastructure, over-dependence on oil, debt burden, insecurity, capital flight, low savings and weak institutions." }
      ]},
      { heading: "Trap Answers to Avoid", type: "warning", items: [
        "Growth ≠ development. Development includes health, education and reduced poverty.",
        "Rising GDP per capita does not mean income is evenly shared.",
        "HDI includes health, education AND income, not income alone.",
        "ISI replaces imports with local production. Export promotion increases exports."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Growth = more real GDP. Development = growth + better lives. HDI = health + education + income. Obstacles: low capital, poor infrastructure, oil dependence, corruption. SAP = 1986 reforms." }
    ]
  },

  // ==========================================
  // ECONOMICS — MACROECONOMICS
  // ==========================================
  "Macroeconomics": {
    subject: "Economics",
    title: "Macroeconomics — The Economy as a Whole",
    icon: "🌐",
    estimatedTime: "5 min read",
    sections: [
      { heading: "What is Macroeconomics?", type: "text",
        content: "Macroeconomics studies the economy as a whole: total output, employment, general price level, government policy and trade with other countries. Microeconomics studies individual consumers, firms and markets." },
      { heading: "Macroeconomic Objectives", type: "cards", items: [
        { title: "Full employment", body: "Low unemployment." },
        { title: "Price stability", body: "Low and stable inflation." },
        { title: "Economic growth", body: "Rising real national output." },
        { title: "Balance of payments equilibrium", body: "Exports and imports roughly in balance." },
        { title: "Fair income distribution", body: "Reduce inequality and poverty." }
      ]},
      { heading: "Circular Flow of Income", type: "cards", items: [
        { title: "Two-sector model", body: "Households supply factors to firms and receive income. Firms supply goods; households spend income on them." },
        { title: "Leakages (withdrawals)", body: "Savings (S), taxes (T), imports (M)." },
        { title: "Injections", body: "Investment (I), government spending (G), exports (X)." },
        { title: "Equilibrium", body: "Income is stable when leakages equal injections: S + T + M = I + G + X." }
      ]},
      { heading: "Consumption, Saving and the Multiplier", type: "cards", items: [
        { title: "APC and APS", body: "APC = C ÷ Y. APS = S ÷ Y. APC + APS = 1." },
        { title: "MPC and MPS", body: "MPC = change in C ÷ change in Y. MPS = change in S ÷ change in Y. MPC + MPS = 1." },
        { title: "Multiplier", body: "k = 1 ÷ (1 − MPC) = 1 ÷ MPS. A change in injection changes income by k times. RECURRING!" },
        { title: "Worked example", body: "MPC = 0.8. k = 1 ÷ (1 − 0.8) = 5. If investment rises by ₦20m, income rises by 5 × 20 = ₦100m." }
      ]},
      { heading: "Aggregate Demand and Supply", type: "cards", items: [
        { title: "Aggregate demand (AD)", body: "Total planned spending: C + I + G + (X − M)." },
        { title: "Aggregate supply (AS)", body: "Total output firms are willing to produce at each price level." },
        { title: "Equilibrium", body: "Where AD = AS, determining the price level and output." },
        { title: "Shifts", body: "Rise in AD: more spending, more inflation or growth. Fall in AS: costs rise and output falls (cost-push)." }
      ]},
      { heading: "Macroeconomic Policies", type: "cards", items: [
        { title: "Fiscal policy", body: "Government taxes and spending." },
        { title: "Monetary policy", body: "Central Bank controls money supply and interest rates (open market operations, cash reserve ratio, bank rate)." },
        { title: "Supply-side policy", body: "Improve productivity, infrastructure, education and competition." },
        { title: "Exchange rate and trade policy", body: "Devaluation, tariffs, quotas and exchange controls." }
      ]},
      { heading: "Trap Answers to Avoid", type: "warning", items: [
        "Macroeconomics is about the whole economy. A single firm's output is microeconomics.",
        "Savings, taxes and imports are leakages. Investment, government spending and exports are injections.",
        "Multiplier = 1 ÷ (1 − MPC) = 1 ÷ MPS. A larger MPC gives a larger multiplier.",
        "MPC + MPS = 1 always."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Macro = whole economy (GDP, inflation, unemployment). Leakages: S, T, M. Injections: I, G, X. Multiplier = 1/(1−MPC). AD = C + I + G + (X−M). MPC + MPS = 1." }
    ]
  },

}

export default ECONOMICS_EXTRA_GUIDES
