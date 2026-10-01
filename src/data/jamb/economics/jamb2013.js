const econJamb2013 = [
  // =====================
  // BASIC ECONOMIC CONCEPTS & SYSTEMS
  // =====================
  {
    subject: "Economics", topic: "Basic Economic Concepts", year: 2013, exam: "JAMB",
    question: "An economy in which both the public and private sectors contribute to economic growth is as",
    options: ["feudal economy", "capitalist economy", "socialist economy", "mixed economy"],
    answer: "mixed economy",
    explanation: "A mixed economy combines private market enterprise and state public intervention, allowing both sectors to participate in economic growth."
  },
  {
    subject: "Economics", topic: "Basic Economic Concepts", year: 2013, exam: "JAMB",
    question: "The main concern of economists is to",
    options: ["control the growth of population", "redistribute income between the rich and the poor", "satisfy all human wants", "allocate scarce resources to satisfy human wants."],
    answer: "allocate scarce resources to satisfy human wants.",
    explanation: "The core foundation of economic science is resolving the problem of scarcity — how to best allocate limited productive resources to satisfy unlimited human wants."
  },

  // =====================
  // STATISTICS & METHODS
  // =====================
  {
    subject: "Economics", topic: "Statistics & Data", year: 2013, exam: "JAMB",
    question: "If the standard deviation of a given data is 53, what is the variance?",
    options: ["2,082", "2,809", "2,808", "2,209"],
    answer: "2,809",
    explanation: "Variance is simply the square of the standard deviation. Therefore: $53^2 = 53 \\times 53 = 2,809$."
  },
  {
    subject: "Economics", topic: "Statistics & Data", year: 2013, exam: "JAMB",
    question: "Which of the following set of statistical tools is used for further economic analysis?",
    options: ["the median and standard deviation", "the mean and mode", "the mean and standard deviation", "the mode and median"],
    answer: "the mean and standard deviation",
    explanation: "The mean and standard deviation serve as key mathematical baselines needed for advanced statistical analyses, such as calculating z-scores, variances, and confidence intervals."
  },
  {
    subject: "Economics", topic: "Statistics & Data", year: 2013, exam: "JAMB",
    question: "An advantage of the range as a measure of dispersion is that it",
    options: ["can be used to calculate open-ended distribution", "make use of all values of observations in a distribution", "takes all values into consideration", "is useful for further statistical calculation"],
    answer: "can be used to calculate open-ended distribution",
    explanation: "Note: JAMB lists A. (Conventionally, the range is highly sensitive to extreme data points and *cannot* be computed from open-ended distributions because the absolute boundaries are undefined; its primary merit is being very simple to calculate)."
  },
  {
    subject: "Economics", topic: "Statistics & Data", year: 2013, exam: "JAMB",
    question: "Find the median of the following set of data 35, 10, 14, 38, 15, 18, 22, 30 and 28",
    options: ["10", "38", "35", "22"],
    answer: "22",
    explanation: "First, arrange the array in ascending order: 10, 14, 15, 18, 22, 28, 30, 35, 38. With 9 numbers, the middle (5th) position value is exactly 22."
  },

  // =====================
  // DEMAND & SUPPLY
  // =====================
  {
    subject: "Economics", topic: "Demand & Supply", year: 2013, exam: "JAMB",
    question: "An increase in demand without a corresponding change in supply will lead to",
    options: [
      "a decrease in equilibrium price and increase in equilibrium quantity",
      "an increase in equilibrium price and quantity",
      "a decrease in equilibrium price and quantity",
      "an increase in equilibrium price and a decrease in equilibrium quantity"
    ],
    answer: "an increase in equilibrium price and quantity",
    explanation: "When consumer demand expands (shifts right) while supply stays stationary, it creates a shortage at the old price, pulling the new balance clearing point upward in price and outward in quantity."
  },
  {
    subject: "Economics", topic: "Demand & Supply", year: 2013, exam: "JAMB",
    question: "An increase in the price of a commodity will result in",
    options: ["a decrease in the quantity demanded", "an increase in demand", "an increase in quantity demanded", "a decrease in demand"],
    answer: "a decrease in the quantity demanded",
    explanation: "According to the law of demand, an upward change in price causes a contraction movement along the stationary demand curve, resulting in a decrease in the quantity demanded."
  },
  {
    subject: "Economics", topic: "Demand & Supply", year: 2013, exam: "JAMB",
    question: "If the price of a bicycle changes from ₦120 to ₦80 and quantity bought changes from 300 to 500 units, the elasticity of demand for bicycle is",
    options: ["66.7", "0.5", "1.5", "2.0"],
    answer: "2.0",
    explanation: "Percentage change in quantity = ((500-300)/300) = 66.67%. Percentage change in price = ((80-120)/120) = -33.33%. Elasticity = |66.67% / -33.33%| = 2.0 (Elastic)."
  },
  {
    subject: "Economics", topic: "Demand & Supply", year: 2013, exam: "JAMB",
    question: "A vertical demand curve running parallel to the price axis denotes that the price elasticity of demand is",
    options: ["unitarily elastic", "perfectly elastic", "perfectly inelastic", "fairly inelastic"],
    answer: "perfectly inelastic",
    explanation: "A vertical demand curve means quantity demanded remains perfectly fixed regardless of price changes, representing an elasticity coefficient of exactly zero (perfectly inelastic)."
  },
  {
    subject: "Economics", topic: "Demand & Supply", year: 2013, exam: "JAMB",
    question: "One of the major factors that brings about changes in supply is",
    options: ["market discrimination", "availability of storage facilities", "the cost of storage", "incentives granted to workers"],
    answer: "availability of storage facilities",
    explanation: "Note: JAMB lists B. Better storage capabilities protect inventory over time, helping producers change their market output flow smoothly when environmental metrics shift."
  },
  {
    subject: "Economics", topic: "Demand & Supply", year: 2013, exam: "JAMB",
    question: "If P = 1/4(Qs + 10). What is the quantity supplied at ₦14?",
    options: ["14", "60", "46", "32"],
    answer: "46",
    explanation: "Substitute P = 14 into the equation: $14 = \\frac{1}{4}(Q_s + 10) \\implies 56 = Q_s + 10 \\implies Q_s = 56 - 10 = 46$."
  },
  {
    subject: "Economics", topic: "Demand & Supply", year: 2013, exam: "JAMB",
    question: "If the supply of a product is elastic, a small reduction in price will",
    options: ["reduce the cost of production", "reduce the quantity supplied", "increase the quantity supplied", "lead to no change in the quantity supplied"],
    answer: "reduce the quantity supplied",
    explanation: "Elastic supply ($PES > 1$) means quantity supplied is highly sensitive to price changes. A drop in market price causes a proportionally larger cut in the quantity supplied."
  },
  {
    subject: "Economics", topic: "Demand & Supply", year: 2013, exam: "JAMB",
    question: "The supply of beverages by firms in a monopolistic market is an example of",
    options: ["derived demand", "competitive supply", "composite supply", "joint demand"],
    answer: "competitive supply",
    explanation: "Firms use shared factory resources to create different brand lines. Scaling up the output of one beverage line uses up materials, putting them in competitive supply with alternative lines."
  },
  {
    subject: "Economics", topic: "Demand & Supply", year: 2013, exam: "JAMB",
    question: "If the price of a commodity is fixed below equilibrium, this will lead to",
    options: ["excess demand", "a decrease in price", "an increase in price", "excess supply"],
    answer: "excess demand",
    explanation: "Setting a maximum price ceiling below the natural market balance line artificially increases consumer demand while discouraging output, resulting in a market shortage (excess demand)."
  },
  {
    subject: "Economics", topic: "Demand & Supply", year: 2013, exam: "JAMB",
    question: "In Nigeria, government can reduce the cost of accommodation by fixing rent",
    options: ["at the prevailing rate", "at the equilibrium price", "above the equilibrium price", "below the equilibrium price"],
    answer: "below the equilibrium price",
    explanation: "To protect low-income tenants, the state must implement a price ceiling capped below the market-clearing equilibrium rate to lower housing costs."
  },

  // =====================
  // CONSUMER THEORY
  // =====================
  {
    subject: "Economics", topic: "Consumer Theory", year: 2013, exam: "JAMB",
    question: "One of the assumptions of the cardinalist approach is",
    options: ["diminishing marginal rate of substitution", "the consistency and transitivity of choice", "that total utility depends on the quantity of the commodities consumed", "unstable marginal utility of money"],
    answer: "that total utility depends on the quantity of the commodities consumed",
    explanation: "The cardinal framework states that total utility is an additive function directly calculated from the quantities of commodities consumed ($TU = f(x_1, x_2, ...)$), assuming a constant marginal utility of money."
  },
  {
    subject: "Economics", topic: "Consumer Theory", year: 2013, exam: "JAMB",
    question: "Utility is the satisfaction derived from the",
    options: ["distribution of goods and services", "use of goods and services", "demand of goods and services", "production of goods and services"],
    answer: "use of goods and services",
    explanation: "Utility measures the personal psychological satisfaction or benefit an individual receives from consuming or using goods and services."
  },

// =====================
// PRODUCTION & COSTS
// =====================
{
subject: "Economics", topic: "Production & Costs", year: 2013, exam: "JAMB",
question: "If a refinery achieves a reduction in cost by purchasing and transporting crude oil in large quantities, it enjoys",
options: ["economies of scale", "specialization", "division of labour", "diseconomies of scale"],
answer: "economies of scale",
explanation: "Buying and transporting materials in huge bulk quantities lowers the long-run unit cost of inputs, which is a classic internal marketing economy of scale."
},
{
subject: "Economics", topic: "Production & Costs", year: 2013, exam: "JAMB",
question: "An isoquant lying above to the right of another represents",
options: ["a higher output level", "constant returns to scale", "over-capacity utilization", "a lower output level"],
answer: "a higher output level",
explanation: "In production theory, an isoquant map scales upward toward the top-right. Any curve sitting further out to the right requires more input combinations and represents a higher level of total output."
},
// =====================
// MARKET STRUCTURES & PRICE MECHANISM
// =====================
{
subject: "Economics", topic: "Market Structures", year: 2013, exam: "JAMB",
question: "One of the criticisms of the price mechanism is that",
options: ["producers are sovereign", "it provides low degree of freedom", "it widens the inequitable gap", "consumers are sovereign"],
answer: "it widens the inequitable gap",
explanation: "Because free price mechanisms rely strictly on absolute voting power through money, they ignore public welfare and naturally widen the wealth gap over time."
},
// =====================
// NATIONAL INCOME & MACROECONOMICS
// =====================
{
subject: "Economics", topic: "National Income", year: 2013, exam: "JAMB",
question: "A measure of national income used as comparison of standard of living among nations is",
options: ["net national product", "gross domestic product", "gross national product", "per capita income"],
answer: "per capita income",
explanation: "Dividing total national income by the country's population gives the per capita income, which is the standard baseline index used to compare material welfare across different countries."
},
{
subject: "Economics", topic: "National Income", year: 2013, exam: "JAMB",
question: "The speculative demand for money is inversely related to the",
options: ["interest rate", "level of income", "exchange rate", "inflation rate"],
answer: "interest rate",
explanation: "When market interest rates are high, holding idle cash has a high opportunity cost compared to bonds, so speculative money demand falls."
},
{
subject: "Economics", topic: "National Income", year: 2013, exam: "JAMB",
question: "If Mr. K obtains a ₦50.000 loan from a bank for the purpose of providing household needs, the demand for money is said to be",
options: ["transactionary", "speculative", "precautionary and speculative", "transactional and speculative"],
answer: "transactionary",
explanation: "Note: JAMB lists A. Demanding liquid cash to settle recurring everyday domestic bills and home purchases represents a transactional demand for money."
},
// =====================
// MONETARY & FISCAL POLICIES
// =====================
{
subject: "Economics", topic: "Money & Banking", year: 2013, exam: "JAMB",
question: "Which of the following is used by the Central Bank of Nigeria to control inflation?",
options: ["Tariff on imports", "Tax rate", "Exchange rate", "Discount rate"],
answer: "Discount rate",
explanation: "Adjusting the bank discount rate allows the central bank to regulate commercial credit expansion. Raising this baseline interest rate helps contract the domestic money supply to curb inflation."
},
{
subject: "Economics", topic: "Money & Banking", year: 2013, exam: "JAMB",
question: "If CBN reduces money supply, the interest rate will",
options: ["fluctuate", "rise", "fall", "remain unchanged"],
answer: "rise",
explanation: "When the apex bank restricts money availability, the liquidity supply curve shifts left against money demand, driving up the cost of borrowing (interest rates)."
},
{
subject: "Economics", topic: "Fiscal Policy & Public Finance", year: 2013, exam: "JAMB",
question: "An example of an expansionary fiscal policy action is",
options: ["decrease in the corporate profit tax rates", "decrease in welfare payments", "purchase of government securities", "decrease in the bank rate"],
answer: "decrease in the corporate profit tax rates",
explanation: "Cutting corporate tax rates leaves more profit margins in private hands, expanding systemic investment and aggregate marketplace spending."
},
{
subject: "Economics", topic: "Fiscal Policy & Public Finance", year: 2013, exam: "JAMB",
question: "A tax on land will ultimately fall",
options: ["partly on agents and users", "entirely on users", "entirely on owners", "partly on users and owners"],
answer: "entirely on owners",
explanation: "Because physical land is completely fixed in total geographic supply (perfectly inelastic supply), landowners cannot shift the tax burden, forcing it to fall entirely on the owners."
},
{
subject: "Economics", topic: "Economic Growth & Development", year: 2013, exam: "JAMB",
question: "One of the goals of development plans in Nigeria is to",
options: ["increase the profitability of multinational businesses", "improve the country's GDP", "achieve higher standard of living for the citizens", "deregulate the economy"],
answer: "achieve higher standard of living for the citizens",
explanation: "The ultimate long-term structural goal of launching national economic development roadmaps is to improve public living standards and societal welfare."
},
{
subject: "Economics", topic: "Money & Banking", year: 2013, exam: "JAMB",
question: "Life insurance companies contribute to economic development by holding a part of their assets in",
options: ["long-term financial instruments", "money market instruments", "cash and near money", "short-term financial instruments"],
answer: "long-term financial instruments",
explanation: "Note: JAMB lists C (cash and near money), though finance theory outlines that insurance firms leverage their long-term liabilities to buy long-term structural development bonds."
},
// =====================
// PRODUCTIVE SECTORS & INDUSTRY
// =====================
{
subject: "Economics", topic: "Agriculture & Development", year: 2013, exam: "JAMB",
question: "In order to add value to Nigeria agricultural produce, there is need to",
options: ["cultivate high breed crops", "process them into finished goods", "adopt modern storage methods", "advertise them in European markets"],
answer: "process them into finished goods",
explanation: "Raw farm crops gain significant economic value when processed locally into finished, packaged industrial consumer goods instead of being exported as raw materials."
},
{
subject: "Economics", topic: "Agriculture & Development", year: 2013, exam: "JAMB",
question: "The main reason for low agricultural produce in West Africa is the",
options: ["presence of large-scale agro-allied industries", "high dependency ratio", "over dependence on agriculture for subsistence", "the use of crude implements in farming process"],
answer: "the use of crude implements in farming process",
explanation: "West African farming yields are severely limited because smallholder farms still rely heavily on labor-intensive hand tools like hoes and cutlasses instead of mechanical tractors."
},
{
subject: "Economics", topic: "Industry & Location", year: 2013, exam: "JAMB",
question: "The most important determinant for the location of a brick industry is the availability of",
options: ["market", "power supply", "water", "raw materials"],
answer: "raw materials",
explanation: "Clay brick manufacturing uses heavy, bulk inputs that are highly expensive to transport. This forces factories to sit directly next to clay pits (raw materials) to cut logistics costs."
},
{
subject: "Economics", topic: "Industry & Location", year: 2013, exam: "JAMB",
question: "In Nigeria, efficiency in public corporations can be achieved through",
options: ["public offer", "indigenization", "privatization", "nationalization"],
answer: "privatization",
explanation: "Selling underperforming state enterprises to private firms introduces competitive profit incentives and strict management, reducing administrative waste."
},
{
subject: "Economics", topic: "Industry & Resources", year: 2013, exam: "JAMB",
question: "Government participation in the oil industry was necessitated by the",
options: ["annual increase in production", "formation of OPEC", "high demand for crude oil", "huge investment outlay"],
answer: "formation of OPEC",
explanation: "Note: JAMB lists B. Joining OPEC required member states to set up institutional public oil corporations (like the NNPC) to oversee national output quotas directly."
},
{
subject: "Economics", topic: "Industry & Resources", year: 2013, exam: "JAMB",
question: "The deregulation of the petroleum sector in Nigeria will bring about",
options: ["efficiency in pricing and distribution of the products", "an end to the importation of fuel", "an end to foreign firms' dominance", "fixing appropriate production quotas"],
answer: "efficiency in pricing and distribution of the products",
explanation: "Removing state price controls lets market competition balance values, which improves cost efficiency and fixes regional product distribution bottlenecks."
},
// =====================
// ENTERPRISES & HUMAN CAPITAL
// =====================
{
subject: "Economics", topic: "Business Organizations", year: 2013, exam: "JAMB",
question: "A distinguishing characteristic of consumer co-operative society is that",
options: ["the maximum number of shareholders is 20", "members are the owners", "members are the workers", "the minimum number of shareholders is 5"],
answer: "members are the owners",
explanation: "Cooperative structures are democratically organized networks owned entirely by the members, who buy shares to pull mutual shopping advantages."
},
{
subject: "Economics", topic: "Business Organizations", year: 2013, exam: "JAMB",
question: "A major disadvantage of partnership business is",
options: ["difficulty in the transfer of shares", "distrust among members", "limited liability", "large capital outlay"],
answer: "distrust among members",
explanation: "Note: JAMB lists B. Because partners carry unlimited joint and several liabilities, internal disagreements or business distrust can break up the firm completely."
},
{
subject: "Economics", topic: "Population & Labour", year: 2013, exam: "JAMB",
question: "The quality of labour force in Nigeria can be improved by",
options: ["establishing more tertiary institutions", "creating sufficient job opportunities", "encouraging the study of science and technology", "establishing more skills acquisition centres"],
answer: "establishing more skills acquisition centres",
explanation: "Deploying technical skills acquisition centers sharpens practical industrial craftsmanship, directly boosting real workplace productivity."
},
{
subject: "Economics", topic: "Population & Labour", year: 2013, exam: "JAMB",
question: "The effect of emigration on a country's population is",
options: ["decrease in the population", "decrease in job opportunities", "increase in population", "increase in dependency ratio"],
answer: "decrease in the population",
explanation: "Emigration describes the long-term movement of individuals outward to live abroad, which directly reduces the total domestic population count."
},
// =====================
// INTERNATIONAL ECO-NETWORKS
// =====================
{
subject: "Economics", topic: "International Trade", year: 2013, exam: "JAMB",
question: "A measure for preventing the external value of the naira from falling is for the government to",
options: ["increase its spending with foreign Reserve", "sell its own currency", "reduce interest rate", "buy its currency with foreign reserve"],
answer: "sell its own currency",
explanation: "Note: JAMB lists B. (Conventionally, to prop up a falling currency exchange tier, the central bank must buy its own currency using foreign reserves to contract supply and lift its market value)."
},
{
subject: "Economics", topic: "International Trade", year: 2013, exam: "JAMB",
question: "A fiscal policy instrument that can influence the demand pattern in an economy is",
options: ["government spending", "interest rate", "income tax", "tariff"],
answer: "income tax",
explanation: "Note: JAMB lists C. Adjusting direct income tax rates modifies personal disposable income, which alters public purchasing power and consumer demand choices."
},
{
subject: "Economics", topic: "International Trade", year: 2013, exam: "JAMB",
question: "One of the main achievements of the Economic Commission for Africa is",
options: ["eliminating trade restrictions among States", "encouraging transport and communication development", "guaranteeing a steady flow of foreign investment into Africa", "providing the machinery for collaboration on monetary issues"],
answer: "eliminating trade restrictions among States",
explanation: "Note: JAMB lists A. The Economic Commission for Africa ($ECA$) has focused on building regional trade cooperation frameworks to lower economic trade barriers."
},
{
subject: "Economics", topic: "Population & Labour", year: 2013, exam: "JAMB",
question: "The rate of interest change on loans depends largely on",
options: ["the prevailing exchange rate", "marginal efficiency of capital", "the risk associated with the loan", "the prevailing tax rate"],
answer: "the risk associated with the loan",
explanation: "Financial risk premiums dictate loan pricing. Lenders demand higher interest rates on credit lines that carry a high danger of borrower default."
},
{
subject: "Economics", topic: "Population & Labour", year: 2013, exam: "JAMB",
question: "A valid explanation for real wage growth is",
options: ["an increase in the rate of productivity", "the rising cost of capital accumulation", "a contraction of employment in service industries", "an increase in the quantity of labour"],
answer: "an increase in the rate of productivity",
explanation: "When the marginal output value generated per worker increments (growth in productivity), it provides the structural economic foundation for sustained real wage increases."
},
{
subject: "Economics", topic: "Population & Labour", year: 2013, exam: "JAMB",
question: "If Mr. X lost his clerical job at a store and searched for a similar job for ten months before finding one, this implies that Mr. X was",
options: ["structurally unemployed", "frictionally unemployed", "seasonally unemployed", "cyclically unemployed"],
answer: "frictionally unemployed",
explanation: "Frictional unemployment encompasses standard search periods when a worker is temporarily in transit between matching jobs."
}
];

export default econJamb2013;