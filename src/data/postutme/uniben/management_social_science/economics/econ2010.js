// UNIBEN Post-UTME 2010 — Economics (Management & Social Sciences)
// 12 questions (Q31-35 and Q64-70 from 2010 General Paper)

const unibenMgtEcon2010 = [
  {
    subject: "Economics", topic: "Basic Economic Concepts", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    isHotTopic: true,
    question: "Where can Nigeria be located on the production possibility curve?",
    options: [
      "Outside the boundary",
      "On the boundary",
      "Inside the boundary",
      "It is indeterminate"
    ],
    answer: "Inside the boundary",
    explanation: "A country is ON the PPC when resources are fully and efficiently used. INSIDE = resources are underutilised (unemployment, inefficiency). Nigeria, as a developing country with widespread unemployment and underutilisation, is INSIDE the boundary. ★ RECURRING!"
  },
  {
    subject: "Economics", topic: "Costs of Production", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    isHotTopic: true,
    question: "If the total cost of producing 600 units is ₦21,000 and the average variable cost is ₦19, what is the average fixed cost?",
    options: ["₦16", "₦35", "₦9,600", "₦21"],
    answer: "₦16",
    explanation: "Average Total Cost (AC) = TC/Q = 21000/600 = ₦35. AC = AFC + AVC. ₦35 = AFC + ₦19. AFC = ₦16. ★ RECURRING — cost formula calculations!"
  },
  {
    subject: "Economics", topic: "Basic Economic Concepts", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    isHotTopic: true,
    question: "Economics is the study of human behaviour as it relates to the:",
    options: [
      "Consumption of goods",
      "Production of goods",
      "Distribution of goods",
      "Efficient allocation of resources"
    ],
    answer: "Efficient allocation of resources",
    explanation: "Economics (Robbins' definition) = the science of human behaviour in relation to the efficient allocation of scarce resources among unlimited wants. It encompasses production, consumption, and distribution — but the core is efficient allocation. ★ RECURRING!"
  },
  {
    subject: "Economics", topic: "Basic Economic Concepts", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    isHotTopic: true,
    question: "Opportunity cost is the same as:",
    options: ["Soil cost", "Real cost", "Marginal cost", "Circulating cost"],
    answer: "Real cost",
    explanation: "Opportunity cost = the real cost of a choice — what you give up when you make a decision. It represents the REAL cost of resources in terms of alternatives forgone. ★ RECURRING!"
  },
  {
    subject: "Economics", topic: "Statistics & Data", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "Which of the following is NOT a measure of dispersion?",
    options: ["Mean deviation", "Arithmetic mean", "Range", "Variance"],
    answer: "Arithmetic mean",
    explanation: "Measures of dispersion: range, variance, standard deviation, mean deviation, interquartile range. Arithmetic mean is a measure of CENTRAL TENDENCY — not dispersion."
  },
  {
    subject: "Economics", topic: "Production", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    isHotTopic: true,
    question: "Long-run production is called:",
    options: ["Returns to scale", "Economics of scale", "Large scale production", "Diminishing returns"],
    answer: "Returns to scale",
    explanation: "Returns to scale = the long-run concept of how output responds when ALL inputs are increased proportionally. In the short run, at least one factor is fixed — you get diminishing returns. In the long run, all factors vary — you get returns to scale. ★ RECURRING!"
  },
  {
    subject: "Economics", topic: "Basic Economic Concepts", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "An output combination BELOW the production possibility boundary indicates that:",
    options: [
      "Output is over produced",
      "Resources are more than enough",
      "Resources are maximised",
      "Resources are being underutilised"
    ],
    answer: "Resources are being underutilised",
    explanation: "Points INSIDE the PPC = production below full capacity. This means some resources are idle or inefficiently used — unemployment, underemployment, or productive inefficiency. Resources are being underutilised."
  },
  {
    subject: "Economics", topic: "Basic Economic Concepts", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "When all factor inputs are reduced by half, the production possibility curve will shift:",
    options: ["Upwards", "Downwards", "Inwards", "Outwards"],
    answer: "Inwards",
    explanation: "The PPC shifts OUTWARD when productive capacity increases (more resources, better technology). It shifts INWARD when capacity decreases (fewer resources, natural disaster). Reducing all inputs by half = inward shift."
  },
  {
    subject: "Economics", topic: "Business Organisation", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "The maximum number of shareholders to own a private joint stock company is:",
    options: ["7", "2", "20", "50"],
    answer: "50",
    explanation: "A PRIVATE limited company can have between 2 and 50 shareholders (members). A PUBLIC limited company has a minimum of 7 but no maximum. In Nigeria under CAMA, private companies: minimum 1, maximum 50 shareholders."
  },
  {
    subject: "Economics", topic: "Basic Economic Concepts", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "Which of the following is NOT a measure of central tendency?",
    options: ["Mean deviation", "Mode", "Median", "Mean"],
    answer: "Mean deviation",
    explanation: "The three measures of CENTRAL TENDENCY are: Mean, Median, Mode. Mean deviation is a measure of DISPERSION (shows how spread data is around the mean). This distinction is frequently tested."
  },
  {
    subject: "Economics", topic: "Costs of Production", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "The Malthusian theory of populations does NOT concern itself with:",
    options: [
      "Negative checks to population growth",
      "Positive checks to population growth",
      "Development and growth of manpower",
      "Growth of population in geometric progression"
    ],
    answer: "Development and growth of manpower",
    explanation: "Malthus's theory: population grows geometrically, food arithmetically; positive checks (famine, war, disease) and preventive checks (celibacy, late marriage) keep population in check. Manpower development was NOT part of his theory."
  },
  {
    subject: "Economics", topic: "Population & Labour", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "A system whereby an employee changes both his occupation and industry is an example of what mobility?",
    options: ["Vertical", "Horizontal", "Occupational", "Geographical"],
    answer: "Occupational",
    explanation: "Occupational mobility = changing BOTH occupation and industry. This is the most complete form of labour mobility. Horizontal = same level, perhaps different sector. Vertical = up or down within same career."
  }
]

export default unibenMgtEcon2010
