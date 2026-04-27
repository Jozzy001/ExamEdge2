// JAMB 2010 Economics Past Questions
// 49 questions (Q1 administrative, skipped)

const econJamb2010 = [

  // =====================
  // BASIC ECONOMIC CONCEPTS
  // =====================
  {
    subject: "Economics", topic: "Basic Economic Concepts", year: 2010, exam: "JAMB",
    question: "Economics is the study of human behaviour as it relates to the",
    options: ["efficient allocation of resources", "production of goods", "operation of companies", "generation of income"],
    answer: "efficient allocation of resources",
    explanation: "Economics studies how individuals and societies allocate scarce resources efficiently to satisfy unlimited wants — Lionel Robbins' classic definition."
  },
  {
    subject: "Economics", topic: "Basic Economic Concepts", year: 2010, exam: "JAMB",
    question: "The downturn in the prices of shares on stock markets is a highlight of",
    options: ["efficient allocation of resources", "the invisible hand", "the regulatory nature of the market", "consumer rationality"],
    answer: "the invisible hand",
    explanation: "Adam Smith's 'invisible hand' describes how market forces (supply and demand) naturally regulate prices — a share price downturn reflects this self-regulating mechanism at work."
  },
  {
    subject: "Economics", topic: "Basic Economic Concepts", year: 2010, exam: "JAMB",
    question: "The primary motive for an individual engaging in production is to",
    options: ["make profit", "satisfy basic human wants", "redistribute wealth", "put inputs into use"],
    answer: "redistribute wealth",
    explanation: "Note: JAMB's answer key gives C (redistribute wealth), though economic theory typically identifies profit as the primary motive. The official answer is C."
  },
  {
    subject: "Economics", topic: "Basic Economic Concepts", year: 2010, exam: "JAMB",
    question: "The choice of the method of production in an economy is determined by the",
    options: ["level of technical know-how", "rate of population growth", "availability of natural resources", "level of income"],
    answer: "availability of natural resources",
    explanation: "The method of production chosen in an economy largely depends on available natural resources — labour-intensive methods where labour is abundant, capital-intensive where resources allow."
  },
  {
    subject: "Economics", topic: "Basic Economic Concepts", year: 2010, exam: "JAMB",
    question: "The amount of labour hired depends on the",
    options: ["number of skilled labour available", "skill of labour", "marginal productivity of labour", "price of the inputs"],
    answer: "marginal productivity of labour",
    explanation: "A rational firm hires labour up to the point where the marginal productivity of labour equals the wage rate — so labour demand depends on its marginal productivity."
  },

  // =====================
  // STATISTICS & DATA
  // =====================
  {
    subject: "Economics", topic: "Statistics & Data", year: 2010, exam: "JAMB",
    question: "If x̄ = 6 and N = 6, determine the value of Σfx",
    options: ["36", "12", "1", "72"],
    answer: "36",
    explanation: "The mean formula is x̄ = Σfx / N. Rearranging: Σfx = x̄ × N = 6 × 6 = 36."
  },
  {
    subject: "Economics", topic: "Statistics & Data", year: 2010, exam: "JAMB",
    question: "The standard deviation of a set of data is",
    options: ["always measured from the mode", "the most representative of averages", "always measured from the median", "a measure of dispersion"],
    answer: "a measure of dispersion",
    explanation: "Standard deviation measures how spread out data values are from the mean. It is a measure of dispersion, not a measure of central tendency."
  },
  {
    subject: "Economics", topic: "Statistics & Data", year: 2010, exam: "JAMB",
    question: "The mean is the best measure of central tendency because it",
    options: ["is not affected by extreme values in a data", "is a midpoint value in an array of data", "is a balancing point in an observation", "can be calculated from incomplete data"],
    answer: "is a midpoint value in an array of data",
    explanation: "Note: JAMB's answer key gives B. The mean uses all data values and acts as a balancing point, but the official answer here is B — it is a midpoint value in the data array."
  },
  {
    subject: "Economics", topic: "Statistics & Data", year: 2010, exam: "JAMB",
    question: "The most popular sizes of dresses and shoes are determined by the",
    options: ["range", "mean", "mode", "median"],
    answer: "range",
    explanation: "Note: JAMB's answer key gives A (range). However, logically 'most popular' sizes are determined by the mode. The official answer is A."
  },

  // =====================
  // DEMAND & SUPPLY
  // =====================
  {
    subject: "Economics", topic: "Demand & Supply", year: 2010, exam: "JAMB",
    question: "If the demand for a good is more elastic than its supply, the tax burden is borne",
    options: ["equally by consumers and producers", "more by producers", "more by consumers", "more by retailers and producers"],
    answer: "more by consumers",
    explanation: "When supply is less elastic (more inelastic) than demand, producers can more easily pass the tax to consumers. The party with less elastic response bears more of the burden — here, consumers."
  },
  {
    subject: "Economics", topic: "Demand & Supply", year: 2010, exam: "JAMB",
    question: "If the price of a commodity with elastic demand increases, the revenue accruing to the producer will",
    options: ["double", "increase", "be constant", "decrease"],
    answer: "decrease",
    explanation: "With elastic demand (PED > 1), a price increase causes a proportionally larger fall in quantity demanded, resulting in lower total revenue for the producer."
  },
  {
    subject: "Economics", topic: "Demand & Supply", year: 2010, exam: "JAMB",
    question: "An excess demand for beans will result from",
    options: ["an increase in the price of beans", "a decrease in the price of beans", "an increase in the supply of beans", "a decrease in the supply of beans"],
    answer: "an increase in the price of beans",
    explanation: "Note: JAMB answer key gives A. Conventionally, excess demand (shortage) results from price being below equilibrium. However the official answer is A — an increase in price of beans."
  },
  {
    subject: "Economics", topic: "Demand & Supply", year: 2010, exam: "JAMB",
    question: "A set of factors that can shift the supply curve are changes in",
    options: ["weather, price and technology", "technology, weather and population", "technology, price and taste", "population, price and taste"],
    answer: "weather, price and technology",
    explanation: "Supply curve shifters include technology, weather/climate, input costs, and number of producers. Price causes movement along the supply curve, not a shift — but JAMB's answer key gives A."
  },
  {
    subject: "Economics", topic: "Demand & Supply", year: 2010, exam: "JAMB",
    question: "If the coefficient of price elasticity of supply is greater than one, the supply is said to be",
    options: ["perfectly elastic", "fairly inelastic", "infinitely inelastic", "fairly elastic"],
    answer: "infinitely inelastic",
    explanation: "Note: JAMB's answer key gives C. Conventionally, PES > 1 means elastic supply. The official answer is C — this appears to be a JAMB error. Students should note that PES > 1 is normally 'elastic'."
  },
  {
    subject: "Economics", topic: "Demand & Supply", year: 2010, exam: "JAMB",
    question: "If commodity X is a by-product of commodity Y, this implies that both commodities are",
    options: ["in competitive supply", "in composite supply", "jointly supplied", "in excess supply"],
    answer: "jointly supplied",
    explanation: "When two goods are by-products of the same production process (e.g. beef and leather), they are jointly supplied — producing more of one automatically produces more of the other."
  },

  // =====================
  // CONSUMER THEORY
  // =====================
  {
    subject: "Economics", topic: "Consumer Theory", year: 2010, exam: "JAMB",
    question: "Consumer surplus tends to be higher when demand is",
    options: ["inelastic", "perfectly elastic", "elastic", "unitarily elastic"],
    answer: "elastic",
    explanation: "Note: JAMB's answer key gives C (elastic). Consumer surplus is actually higher with inelastic demand, but the official answer is C — elastic demand."
  },
  {
    subject: "Economics", topic: "Consumer Theory", year: 2010, exam: "JAMB",
    question: "One of the assumptions of ordinal utility theory is that",
    options: ["choice is not consistent", "utility can be ranked", "total utility is a function of price", "satisfaction is measurable"],
    answer: "satisfaction is measurable",
    explanation: "Note: JAMB answer is D. Ordinal utility theory actually assumes utility can be ranked (not measured cardinally). The official answer key gives D — this appears contradictory. Students should note the official answer."
  },
  {
    subject: "Economics", topic: "Consumer Theory", year: 2010, exam: "JAMB",
    question: "The law of diminishing marginal utility explains why",
    options: ["the slope of a normal demand curve is negative", "an abnormal demand curve slopes upwards", "the slope of a normal demand curve is positive", "the consumption of inferior goods increases with income"],
    answer: "an abnormal demand curve slopes upwards",
    explanation: "Note: JAMB's answer key gives B. Conventionally, diminishing marginal utility explains the downward slope of a normal demand curve (A). The official answer is B."
  },
  {
    subject: "Economics", topic: "Consumer Theory", year: 2010, exam: "JAMB",
    question: "If a consumer plans to spend 120k on four oranges but spent 80k, his consumer surplus is",
    options: ["₦1.50", "₦0.40", "₦1.00", "₦2.00"],
    answer: "₦1.00",
    explanation: "Consumer surplus = what consumer was willing to pay minus what they actually paid = 120k − 80k = 40k. For four oranges: 40k ÷ 4 = 10k per orange, or total surplus = ₦0.40. JAMB answer key gives C (₦1.00)."
  },

  // =====================
  // MARKET STRUCTURES
  // =====================
  {
    subject: "Economics", topic: "Market Structures", year: 2010, exam: "JAMB",
    question: "In perfect competition, price is determined by the",
    options: ["government", "sellers", "buyers", "market"],
    answer: "market",
    explanation: "In perfect competition, no individual buyer or seller can influence price. Price is determined by the interaction of all buyers and sellers — by market forces of demand and supply."
  },
  {
    subject: "Economics", topic: "Market Structures", year: 2010, exam: "JAMB",
    question: "In order to reduce hardship faced by consumers due to high prices, government can introduce",
    options: ["maximum prices", "commodity boards", "minimum prices", "price control boards"],
    answer: "price control boards",
    explanation: "Note: JAMB answer key gives D. Maximum prices (price ceilings) are the standard tool to protect consumers from high prices, but the official answer is D — price control boards."
  },
  {
    subject: "Economics", topic: "Market Structures", year: 2010, exam: "JAMB",
    question: "One of the characteristics of monopolistic competition is that",
    options: ["there is mobility of factors of production", "no single seller dominates the market", "the firms are price-takers", "consumers have perfect knowledge of price"],
    answer: "the firms are price-takers",
    explanation: "Note: JAMB answer is C. In monopolistic competition, firms are actually price-makers (not takers) due to product differentiation. The official answer is C — students should note this."
  },
  {
    subject: "Economics", topic: "Market Structures", year: 2010, exam: "JAMB",
    question: "The demand curve for factors of production",
    options: ["is perfectly elastic", "slopes upwards", "slopes downwards", "is perfectly inelastic"],
    answer: "slopes upwards",
    explanation: "Note: JAMB answer is B. Factor demand curves conventionally slope downward (as price falls, more is demanded). The official JAMB answer is B."
  },
  {
    subject: "Economics", topic: "Market Structures", year: 2010, exam: "JAMB",
    question: "An agreement among firms on price and segmentation is termed",
    options: ["cartel", "collusion", "haggling", "specialization"],
    answer: "cartel",
    explanation: "A cartel is a formal agreement among competing firms to fix prices and divide markets. OPEC is a well-known example. Note: JAMB answer key gives A."
  },
  {
    subject: "Economics", topic: "Market Structures", year: 2010, exam: "JAMB",
    question: "An industry's supply curve is more likely to be elastic when firms are",
    options: ["enjoying free entry and exit", "operating at full capacity", "operating below capacity", "maximizing profits"],
    answer: "operating below capacity",
    explanation: "When firms operate below capacity, they can easily increase output in response to price rises without large cost increases — making supply more elastic."
  },

  // =====================
  // PRODUCTION & COSTS
  // =====================
  {
    subject: "Economics", topic: "Production & Costs", year: 2010, exam: "JAMB",
    question: "Average product is less than marginal product when",
    options: ["there is constant returns to scale", "there is increasing returns to scale", "there is decreasing returns to scale", "diminishing returns set in"],
    answer: "diminishing returns set in",
    explanation: "When marginal product is above the average product, average product is rising. When diminishing returns set in, marginal product falls below average product, pulling it down. JAMB answer is D."
  },
  {
    subject: "Economics", topic: "Production & Costs", year: 2010, exam: "JAMB",
    question: "A firm enjoying economies of scale is said to be",
    options: ["reducing average cost as production increases", "benefiting from the activities of other firms", "maximizing profits as production increases", "having an upward-sloping average cost curve"],
    answer: "reducing average cost as production increases",
    explanation: "Economies of scale occur when increasing output leads to lower average (unit) costs — the firm becomes more efficient as it grows."
  },
  {
    subject: "Economics", topic: "Production & Costs", year: 2010, exam: "JAMB",
    question: "The rising portion of the long-run average cost curve of a firm is an indication that it is experiencing",
    options: ["increasing efficiency", "economies of scale", "diseconomies of scale", "increasing marginal returns"],
    answer: "increasing efficiency",
    explanation: "Note: JAMB answer key gives A. Conventionally the rising LRAC indicates diseconomies of scale (C). The official answer is A — increasing efficiency. Students should note this discrepancy."
  },

  // =====================
  // NATIONAL INCOME
  // =====================
  {
    subject: "Economics", topic: "National Income", year: 2010, exam: "JAMB",
    question: "In national income accounting, tax is determined by the",
    options: ["level of income", "level of consumption", "level of investment", "rate of savings"],
    answer: "level of income",
    explanation: "In Keynesian national income models, tax (T) is typically a function of income — T = tY, where t is the tax rate. Higher income means higher tax revenue."
  },
  {
    subject: "Economics", topic: "National Income", year: 2010, exam: "JAMB",
    question: "A decrease in aggregate spending in an economy will ultimately lead to",
    options: ["boom", "inflation", "deflation", "recession"],
    answer: "inflation",
    explanation: "Note: JAMB answer key gives B (inflation). A decrease in aggregate spending should conventionally cause deflation or recession. The official answer is B — this appears to be a JAMB error."
  },
  {
    subject: "Economics", topic: "National Income", year: 2010, exam: "JAMB",
    question: "If MPC is 0.7 while government expenditure increased by ₦150m, the equilibrium national income is",
    options: ["₦214 million", "₦45 million", "₦105 million", "₦500 million"],
    answer: "₦45 million",
    explanation: "The fiscal multiplier = 1/(1-MPC) = 1/(1-0.7) = 1/0.3 = 3.33. Change in national income = 3.33 × 150m ≈ ₦500m. Note: JAMB answer key gives B (₦45m). The calculation gives ₦500m (D) but official answer is B."
  },

  // =====================
  // MONEY & BANKING
  // =====================
  {
    subject: "Economics", topic: "Money & Banking", year: 2010, exam: "JAMB",
    question: "The function of money which makes division of labour possible is its",
    options: ["unit of account", "store of value", "medium of exchange", "standard of deferred payment"],
    answer: "store of value",
    explanation: "Note: JAMB answer key gives B. Division of labour requires workers to be paid and exchange goods — this is the medium of exchange function. The official answer is B (store of value)."
  },
  {
    subject: "Economics", topic: "Money & Banking", year: 2010, exam: "JAMB",
    question: "By buying treasury bills, the Central Bank of Nigeria intends to",
    options: ["increase money supply in the economy", "reduce the cash reserve ratio for banks", "reduce money supply in the economy", "increase the capital base of commercial banks"],
    answer: "reduce the cash reserve ratio for banks",
    explanation: "Note: JAMB answer key gives B. When the CBN buys treasury bills, it injects money into the economy (increases money supply). The official answer is B — students should note this discrepancy."
  },
  {
    subject: "Economics", topic: "Money & Banking", year: 2010, exam: "JAMB",
    question: "The velocity of money is represented as",
    options: ["Money supply / Real GDP", "Real GDP / Money supply", "Nominal GDP / Money supply", "Real GDP / Nominal GDP"],
    answer: "Money supply / Real GDP",
    explanation: "Note: JAMB answer is A. The standard formula for velocity of money is V = Nominal GDP / Money Supply (C). The official answer is A — students should be aware of the standard formula."
  },
  {
    subject: "Economics", topic: "Money & Banking", year: 2010, exam: "JAMB",
    question: "One of the functions of commercial banks is",
    options: ["maintaining stable price in the economy", "regulating monetary policies", "granting loans to customers", "issuing bank notes and coins"],
    answer: "regulating monetary policies",
    explanation: "Note: JAMB answer is B. Granting loans (C) is the most standard commercial bank function. Issuing currency and monetary policy are central bank functions. The official answer is B."
  },

  // =====================
  // FISCAL POLICY & PUBLIC FINANCE
  // =====================
  {
    subject: "Economics", topic: "Fiscal Policy & Public Finance", year: 2010, exam: "JAMB",
    question: "A strategy for curbing unemployment is to",
    options: ["implement government stabilization policy", "increase taxes and decrease government expenditure", "increase government expenditure and decrease taxes", "ensure even distribution of job opportunities"],
    answer: "ensure even distribution of job opportunities",
    explanation: "JAMB answer is D. Conventionally, increasing government expenditure and cutting taxes (C) is the Keynesian approach to reducing unemployment. The official answer is D."
  },
  {
    subject: "Economics", topic: "Fiscal Policy & Public Finance", year: 2010, exam: "JAMB",
    question: "In Nigeria, the distribution of job opportunities requires",
    options: ["balanced budgeting", "deficit budgeting", "surplus budgeting", "zero budgeting"],
    answer: "surplus budgeting",
    explanation: "Note: JAMB answer is C (surplus budgeting). The official answer is C — surplus budgeting for distributing job opportunities in Nigeria."
  },
  {
    subject: "Economics", topic: "Fiscal Policy & Public Finance", year: 2010, exam: "JAMB",
    question: "National development plans in Nigeria fail mainly because of",
    options: ["overdependence on foreign aids", "inadequate funding of projects", "poor implementation strategies", "shortage of skilled manpower"],
    answer: "inadequate funding of projects",
    explanation: "A major reason Nigerian national development plans have underperformed is inadequate and irregular funding, often due to falling oil revenues and poor budget execution."
  },

  // =====================
  // AGRICULTURE & DEVELOPMENT
  // =====================
  {
    subject: "Economics", topic: "Agriculture & Development", year: 2010, exam: "JAMB",
    question: "The ultimate aim of agricultural policies in Nigeria is to achieve",
    options: ["food sufficiency", "industrialization", "full employment", "industrial capacity utilization"],
    answer: "food sufficiency",
    explanation: "Nigerian agricultural policies — from Operation Feed the Nation to the Green Revolution — have consistently aimed at achieving food self-sufficiency for the growing population."
  },
  {
    subject: "Economics", topic: "Agriculture & Development", year: 2010, exam: "JAMB",
    question: "Government can boost agricultural output in Nigeria primarily by",
    options: ["embarking on buffer stock programmes", "placing embargo on food importation", "granting subsidies on farm inputs", "placing farmers on monthly income"],
    answer: "placing embargo on food importation",
    explanation: "Note: JAMB answer is B. Granting subsidies on farm inputs (C) is a more standard tool for boosting agricultural productivity. The official answer is B — import embargo."
  },

  // =====================
  // INDUSTRY & LOCATION
  // =====================
  {
    subject: "Economics", topic: "Industry & Location", year: 2010, exam: "JAMB",
    question: "Localization of industries refers to the",
    options: ["spread of firms producing different products", "siting of industries near the market", "concentration of firms of an industry", "siting of firms producing different products"],
    answer: "siting of firms producing different products",
    explanation: "Note: JAMB answer is D. Localization conventionally means the concentration of firms in a particular industry in one geographical area (C). The official answer is D."
  },
  {
    subject: "Economics", topic: "Industry & Location", year: 2010, exam: "JAMB",
    question: "In developing countries, governments influence the location of industries in order to",
    options: ["spread development", "redistribute wealth", "encourage entrepreneurs", "encourage industries to earn high profits"],
    answer: "spread development",
    explanation: "Governments in developing countries direct industries to certain regions to achieve balanced regional development — spreading economic activity and infrastructure beyond major cities."
  },
  {
    subject: "Economics", topic: "Industry & Location", year: 2010, exam: "JAMB",
    question: "A disadvantage of Nigeria's dependence on imported petroleum products is the",
    options: ["instability in the demand for the products", "dominance of multinational firms", "instability in the supply of the product", "poor maintenance of the refineries"],
    answer: "dominance of multinational firms",
    explanation: "Dependence on imported petroleum products has led to dominance by multinational oil companies, reducing Nigeria's control over its own energy sector despite being a major oil producer."
  },
  {
    subject: "Economics", topic: "Industry & Location", year: 2010, exam: "JAMB",
    question: "The maximum number of shareholders for a limited liability company is",
    options: ["twenty", "five", "seven", "infinite"],
    answer: "infinite",
    explanation: "A public limited liability company (Plc) can have an unlimited (infinite) number of shareholders since its shares are freely traded on the stock exchange."
  },

  // =====================
  // POPULATION & LABOUR
  // =====================
  {
    subject: "Economics", topic: "Population & Labour", year: 2010, exam: "JAMB",
    question: "[img:images/economics/eco2010fig1.png]\nWhat is the population growth rate in 2003?",
    options: ["33.3%", "20.0%", "11.0%", "50%"],
    answer: "50%",
    explanation: "Population growth rate = (New − Old) / Old × 100. From 2002 to 2003: (50 − 40) / 40 × 100 = 10/40 × 100 = 25%. Note: JAMB's answer is D (50%). Some interpretations calculate from different base years — the official answer is 50%."
  },
  {
    subject: "Economics", topic: "Population & Labour", year: 2010, exam: "JAMB",
    question: "[img:images/economics/eco2010fig1.png]\nThe percentage of working population in 2002 is",
    options: ["50%", "25%", "8%", "80%"],
    answer: "80%",
    explanation: "Percentage of working population = (Working population / Total population) × 100. In 2002: (32 / 40) × 100 = 80%."
  },

  // =====================
  // INTERNATIONAL TRADE
  // =====================
  {
    subject: "Economics", topic: "International Trade", year: 2010, exam: "JAMB",
    question: "One of the characteristics of a free trade zone is",
    options: ["common tariff against non-member countries", "different trade policies of non-member countries", "free factor mobility within the zone", "harmonized trade among member countries"],
    answer: "harmonized trade among member countries",
    explanation: "A free trade zone is characterised by the removal of tariffs and harmonized trade policies among member countries, though members may maintain independent policies with non-members."
  },
  {
    subject: "Economics", topic: "International Trade", year: 2010, exam: "JAMB",
    question: "If Nigeria imports vehicles from Japan, the transaction will appear as a",
    options: ["debit on Japan's balance of payments", "credit on Japan's balance of payments", "credit on Nigeria's balance of trade", "credit on Nigeria's balance of payment"],
    answer: "credit on Nigeria's balance of trade",
    explanation: "Note: JAMB answer is C. Nigeria importing vehicles means money flows OUT of Nigeria (debit on Nigeria's account) and IN to Japan (credit on Japan's account). The official answer is C — this appears to be a JAMB error."
  },
  {
    subject: "Economics", topic: "International Trade", year: 2010, exam: "JAMB",
    question: "One of the objectives of ADB is to",
    options: ["provide subsidies on imported goods to member countries", "mobilize short-term loans for member countries", "promote economic and social development of member countries", "provide technical assistance to only poor member countries"],
    answer: "mobilize short-term loans for member countries",
    explanation: "Note: JAMB answer is B. The African Development Bank (ADB) primarily promotes economic and social development (C). The official answer is B — mobilizing short-term loans."
  }
]

export default econJamb2010