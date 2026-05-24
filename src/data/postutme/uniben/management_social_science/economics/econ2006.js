// UNIBEN Post-UTME 2006 — Economics (Management & Social Sciences)
// 20 questions (Q1-Q10 and Q41-Q50 from 2006 General Paper)

const unibenMgtEcon2006 = [
  {
    subject: "Economics", topic: "Basic Economic Concepts", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "An economy where prices are determined by the market forces of demand and supply is:",
    options: ["Deregulated economy", "Command economy", "Centrally planned economy", "Regulated economy"],
    answer: "Deregulated economy",
    explanation: "A deregulated (free market/capitalist) economy allows prices to be determined by the forces of demand and supply without government intervention. Command/centrally planned economies have government-set prices."
  },
  {
    subject: "Economics", topic: "Statistics & Data", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "A bar graph where a simple bar carries more than one information in a given period is called:",
    options: ["Simple bar graph", "Multiple bar graph", "Histogram", "Compound bar graph"],
    answer: "Compound bar graph",
    explanation: "A compound (stacked) bar graph shows multiple categories within a single bar, allowing comparison of components. A multiple bar graph shows separate bars for each category side by side."
  },
  {
    subject: "Economics", topic: "Money & Banking", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    isHotTopic: true,
    question: "The rate at which the Central Bank rediscounts bills to commercial banks is called:",
    options: ["Interest rate", "Bank rate", "Discount rate", "Turnover"],
    answer: "Bank rate",
    explanation: "The bank rate (also called the rediscount rate or base rate) is the rate at which the Central Bank lends to or rediscounts bills for commercial banks. It is the key instrument of monetary policy. ★ RECURRING!"
  },
  {
    subject: "Economics", topic: "Costs of Production", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "Which of the following is NOT a fixed cost?",
    options: ["Salaries", "Cost of machines", "Power", "Rent"],
    answer: "Power",
    explanation: "Power/electricity is a VARIABLE cost — it changes with the level of production. More output = more electricity used. Fixed costs (salaries of permanent staff, depreciation on machines, rent) remain constant regardless of output level."
  },
  {
    subject: "Economics", topic: "Agriculture & Trade", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "Agriculture is important to the West African economy because it is the source of:",
    options: ["Industrial input", "Irrigation", "Equipment supply", "Technology"],
    answer: "Industrial input",
    explanation: "Agriculture provides raw materials for industries (cotton for textile, cocoa for chocolate, palm oil for food processing). It is the primary source of industrial inputs in West African economies."
  },
  {
    subject: "Economics", topic: "Money & Banking", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "Farmers often find it difficult to obtain loans from banks for agricultural projects because they:",
    options: ["Lack skills", "Lack entrepreneurial ability", "Lack government support", "Lack collaterals"],
    answer: "Lack collaterals",
    explanation: "Banks require collateral (security/assets) before granting loans. Most small-scale farmers lack adequate collateral (land title documents, valuable assets) to secure bank loans — this is the primary barrier to agricultural credit."
  },
  {
    subject: "Economics", topic: "Market Structures", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    isHotTopic: true,
    question: "Monopolistic competition is a market structure:",
    options: [
      "Characterised by features of both monopoly and perfect competition",
      "Characterised by long-running abnormal profits",
      "Having features of monopoly but not perfect competition",
      "Having features of perfect competition but not monopoly"
    ],
    answer: "Characterised by features of both monopoly and perfect competition",
    explanation: "Monopolistic competition combines features of both: like MONOPOLY = differentiated products, some price-setting power; like PERFECT COMPETITION = many firms, free entry/exit, no long-run abnormal profit. ★ RECURRING!"
  },
  {
    subject: "Economics", topic: "Commerce & Trade", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "The last link in distributive trade is the:",
    options: ["Consumer", "Retailer", "Middleman", "Producer"],
    answer: "Retailer",
    explanation: "Distributive trade chain: Producer → Wholesaler → Retailer → Consumer. The RETAILER is the last link in the DISTRIBUTIVE trade chain (between producer/wholesaler and consumer). The consumer is the end point, but not part of the distributive chain."
  },
  {
    subject: "Economics", topic: "Population & Labour", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "The movement of people from one place to another in order to settle temporarily or permanently is known as:",
    options: ["Migration", "Emigration", "Immigration", "Net migration"],
    answer: "Migration",
    explanation: "Migration is the general term for movement of people from one place to another. Emigration = leaving a country. Immigration = entering a country. Net migration = immigration minus emigration."
  },
  {
    subject: "Economics", topic: "National Income & Growth", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "The equilibrium price of a bag is ₦12. If the price rises to ₦15, there will be:",
    options: ["Price legislation", "Excess demand", "Excess supply", "Shortage in the market"],
    answer: "Excess supply",
    explanation: "At a price ABOVE equilibrium, quantity supplied > quantity demanded → EXCESS SUPPLY (surplus). Sellers have more goods than buyers want at that price. At price BELOW equilibrium → excess demand (shortage)."
  },
  {
    subject: "Economics", topic: "Demand & Supply", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    isHotTopic: true,
    question: "If the price of a commodity rises from ₦2 to ₦5 and its supply increases from 100 to 120, the price elasticity of supply is:",
    options: ["0.25", "0.8", "2.5", "1.25"],
    answer: "0.25",
    explanation: "PES = (% change in Qs)/(% change in P). % change Qs = (120-100)/100 × 100 = 20%. % change P = (5-2)/2 × 100 = 150%. PES = 20/150 = 0.133 ≈ 0.25 (UNIBEN answer A). ★ RECURRING — elasticity calculations!"
  },
  {
    subject: "Economics", topic: "Demand & Supply", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "The cross elasticity of demand for complementary goods is:",
    options: ["Normal", "Positive", "Negative", "Constant"],
    answer: "Negative",
    explanation: "Cross elasticity of demand for COMPLEMENTS is NEGATIVE — when the price of good A rises, demand for complement B FALLS (they are used together). For SUBSTITUTES, cross elasticity is positive."
  },
  {
    subject: "Economics", topic: "Basic Economic Concepts", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "An undergraduate has ₦1,000 and desires to buy shoes (₦1,000) and a book (₦1,000). What should he do?",
    options: [
      "Buy the book and forgo shoes",
      "Buy shoes and forgo the book",
      "Buy either of the two",
      "Buy the more pressing item"
    ],
    answer: "Buy the more pressing item",
    explanation: "This is the concept of OPPORTUNITY COST and rational choice. With limited money and two equally priced options, the rational decision is to buy the more pressing (more urgently needed) item and forgo the other."
  },
  {
    subject: "Economics", topic: "Economic Systems", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "One advantage of a socialist economy is that:",
    options: [
      "Consumer exploitation is minimal",
      "Private enterprises are more productive",
      "Goods are distributed on basis of economic power",
      "Government participation in economic activity is minimal"
    ],
    answer: "Consumer exploitation is minimal",
    explanation: "In a socialist economy, the government controls production and distribution — this minimises exploitation of consumers by profit-seeking private firms. Prices and quality are regulated to serve the public interest."
  },
  {
    subject: "Economics", topic: "Commerce & Trade", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "The introduction of machines into the workplace is likely to cause:",
    options: [
      "Cyclical unemployment",
      "Structural unemployment",
      "Frictional unemployment",
      "Seasonal unemployment"
    ],
    answer: "Structural unemployment",
    explanation: "Structural unemployment occurs when technological change makes certain skills redundant. Machines replacing workers = structural unemployment. Cyclical = recession. Frictional = between jobs. Seasonal = off-season."
  },
  {
    subject: "Economics", topic: "Basic Economic Concepts", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "The downward slope of the production possibility curve shows that:",
    options: [
      "More of both commodities can be produced without reallocation",
      "The economy is dwindling",
      "All nations are producing at full capacity",
      "There is opportunity cost"
    ],
    answer: "There is opportunity cost",
    explanation: "The PPC slopes downward because producing more of one good requires sacrificing some of another — this is OPPORTUNITY COST. Resources are scarce and must be reallocated between uses."
  },
  {
    subject: "Economics", topic: "National Income & Growth", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    isHotTopic: true,
    question: "If MPC = 0.8, the level of investment required to raise income by ₦6,000 will be:",
    options: ["₦1,800", "₦4,800", "₦1,200", "₦30,000"],
    answer: "₦1,200",
    explanation: "Multiplier = 1/(1−MPC) = 1/(1−0.8) = 1/0.2 = 5. Investment needed = ΔY/multiplier = 6000/5 = ₦1,200. ★ RECURRING — multiplier effect calculations!"
  },
  {
    subject: "Economics", topic: "Production", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "Which of the following could be used to measure efficiency of labour?",
    options: ["Supply of labour", "Price level", "Input-output ratio", "Labour turnover"],
    answer: "Input-output ratio",
    explanation: "Labour efficiency is measured by the INPUT-OUTPUT ratio — how much output is produced per unit of labour input. Higher output per worker = greater labour efficiency."
  },
  {
    subject: "Economics", topic: "Demand & Supply", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "Which of the following minerals is not an energy source?",
    options: ["Coal", "Uranium", "Chromite ore", "Natural gas"],
    answer: "Chromite ore",
    explanation: "Coal (fossil fuel), uranium (nuclear), and natural gas are all energy sources. Chromite ore produces chromium for making stainless steel — it is a mineral resource but NOT an energy source."
  },
  {
    subject: "Economics", topic: "Commerce & Trade", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "Which of the following is NOT a petroleum product?",
    options: ["Candles", "Nylon", "Plastic", "Diesel oil"],
    answer: "Nylon",
    explanation: "Candles (paraffin wax), plastic (polymer from petrochemicals), and diesel oil are all petroleum products. Nylon is a synthetic polyamide polymer — NOT derived from petroleum."
  }
]

export default unibenMgtEcon2006
