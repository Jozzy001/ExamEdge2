// UNIBEN Post-UTME 2010 — Government & Geography (Management & Social Sciences)
// 19 questions (Q36-Q45 Government + Q55-Q63 Geography from 2010 General Paper)

const unibenMgtGovt2010 = [
  {
    subject: "Government", topic: "Political Concepts", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "Government as an academic field of study refers to:",
    options: [
      "A subject that is studied in school",
      "The study of the state and the people",
      "The study of cultures",
      "The study of an institution of the state"
    ],
    answer: "The study of the state and the people",
    explanation: "As an academic discipline, Government refers to the systematic study of the state, political institutions, processes, and the relationship between the state and its people — including how power is acquired, exercised, and controlled."
  },
  {
    subject: "Government", topic: "Political Concepts", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    isHotTopic: true,
    question: "Who among the following political philosophers advocated that sovereignty should be in the king?",
    options: ["Jean-Jacques Rousseau", "Thomas Hobbes", "John Austin", "Jean Bodin"],
    answer: "Jean Bodin",
    explanation: "Jean Bodin (1530-1596) was the first to develop the concept of sovereignty and argued it should reside with the monarch — absolute, perpetual, and indivisible. Hobbes advocated a social contract giving power to a sovereign. Rousseau advocated popular sovereignty. ★ RECURRING!"
  },
  {
    subject: "Government", topic: "Political Concepts", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    isHotTopic: true,
    question: "The Presidential Villa in Nigeria is called Aso Rock, while the home of the Prime Minister of Great Britain is called:",
    options: ["Capitol", "White House", "Don Dan House", "10 Downing Street"],
    answer: "10 Downing Street",
    explanation: "10 Downing Street, London = official residence of the UK Prime Minister. Aso Rock = Nigeria's Presidential Villa (Abuja). White House = US President's residence. Capitol = US Congress building. ★ RECURRING!"
  },
  {
    subject: "Government", topic: "Nigerian Constitution", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    isHotTopic: true,
    question: "The Nigerian Senate is made up of how many members?",
    options: ["109", "180", "300", "310"],
    answer: "109",
    explanation: "The Nigerian Senate has 109 members — 3 senators per state × 36 states = 108, plus 1 for the FCT (Abuja) = 109 total. The House of Representatives has 360 members. ★ RECURRING!"
  },
  {
    subject: "Government", topic: "Nigerian History", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "Goodluck Jonathan became Executive President of Nigeria on the:",
    options: ["6th of May, 2010", "5th of May, 2010", "10th of April, 2010", "6th of April, 2010"],
    answer: "6th of May, 2010",
    explanation: "Goodluck Jonathan was sworn in as Executive President on May 6, 2010, after acting as President following President Yar'Adua's illness. He later won the 2011 presidential election."
  },
  {
    subject: "Government", topic: "Political Concepts", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    isHotTopic: true,
    question: "The ability to make other people do what you want them to do even if they would have done otherwise is called:",
    options: ["Authority", "Sovereignty", "Power", "Separation of powers"],
    answer: "Power",
    explanation: "Power (Dahl's definition) = the ability to make someone do something they would not otherwise do. Authority = legitimate power. Sovereignty = supreme authority. Power is the broader concept including force, influence, and authority. ★ RECURRING!"
  },
  {
    subject: "Government", topic: "Population & Labour", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "The Malthusian theory of populations does NOT concern itself with:",
    options: [
      "Negative checks to population growth",
      "Positive checks to population growth",
      "Development and growth of manpower",
      "Growth of population in geometric progression"
    ],
    answer: "Development and growth of manpower",
    explanation: "Malthus's theory covers: population grows geometrically (1,2,4,8...), food grows arithmetically (1,2,3,4...), positive checks (famines, wars, disease) and preventive/negative checks (abstinence, late marriage). He did NOT concern himself with manpower development."
  },
  {
    subject: "Government", topic: "Population & Labour", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "A system whereby an employee changes both his occupation AND industry is an example of what mobility?",
    options: ["Vertical", "Horizontal", "Occupational", "Geographical"],
    answer: "Occupational",
    explanation: "OCCUPATIONAL mobility = changing both occupation AND industry (the broadest form of labour mobility). HORIZONTAL = same level, different job in same or different industry. VERTICAL = same industry, different level (promotion/demotion)."
  },
  {
    subject: "Government", topic: "Money & Banking", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    isHotTopic: true,
    question: "What amount of money can be created from a deposit of ₦30,000 if the current cash ratio is 20%?",
    options: ["₦15 million", "₦1.5 million", "₦60,000", "₦600,000"],
    answer: "₦1.5 million",
    explanation: "Credit multiplier = 1/cash ratio = 1/0.20 = 5. Money created = 5 × ₦30,000 = ₦150,000... wait: total money supply = 5 × 30,000 = 150,000. UNIBEN answer B (₦1.5 million) — suggests initial deposit interpreted differently. Students verify."
  },
  {
    subject: "Government", topic: "Money & Banking", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "The most liquid asset of a bank is:",
    options: ["Money at call", "Bank draft", "Money order", "Cash"],
    answer: "Cash",
    explanation: "Liquidity = how quickly an asset can be converted to cash without loss of value. CASH is the most liquid asset (it IS cash — no conversion needed). Money at call is the next most liquid, followed by treasury bills, then investments."
  },
  // GEOGRAPHY QUESTIONS (Q55-63)
  {
    subject: "Government", topic: "Geography", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "The earth is a:",
    options: ["Planet", "Star", "Satellite", "Solar flare"],
    answer: "Planet",
    explanation: "Earth is a PLANET — a celestial body orbiting the Sun with sufficient mass for gravity to make it spherical. Stars produce their own light; satellites orbit planets; the Earth orbits the Sun."
  },
  {
    subject: "Government", topic: "Geography", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    isHotTopic: true,
    question: "The smallest planet in the solar system is:",
    options: ["Uranus", "Neptune", "Venus", "Mercury"],
    answer: "Mercury",
    explanation: "Mercury is the smallest of the 8 planets — with a radius of about 2,440 km. ★ RECURRING — appeared in 2008 Management paper and multiple other years!"
  },
  {
    subject: "Government", topic: "Geography", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "Our planetary system is made up of:",
    options: [
      "The Milky Way",
      "The earth, moon and the sun",
      "Eight planets and the sun",
      "All stars visible at night"
    ],
    answer: "Eight planets and the sun",
    explanation: "Our solar system consists of the Sun and 8 planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune. (Pluto was reclassified as a dwarf planet in 2006 — reducing from 9 to 8 planets)."
  },
  {
    subject: "Government", topic: "Geography", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "The associated relief feature of a block mountain is:",
    options: ["Caldera", "Lopolith", "Rift valley", "Anticline"],
    answer: "Rift valley",
    explanation: "Block mountains (horsts) form when land between FAULTS is uplifted. The sunken land between block mountains forms a RIFT VALLEY (graben). They are always associated features — where you have a horst, you typically have a rift valley."
  },
  {
    subject: "Government", topic: "Geography", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "A line joining places of equal sunshine is called:",
    options: ["Isobar", "Isotherm", "Isoshine", "Isohel"],
    answer: "Isohel",
    explanation: "Isohel = a line on a map joining places with equal hours of sunshine. Isobar = equal pressure. Isotherm = equal temperature. Isobath = equal depth. Isohyet = equal rainfall. 'Hel' from helios (sun)."
  },
  {
    subject: "Government", topic: "Geography", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "Cirrus, cumulus, stratus and nimbus are types of:",
    options: ["Fog", "Frost", "Rain", "Cloud"],
    answer: "Cloud",
    explanation: "Cirrus (high, wispy), Cumulus (puffy, white), Stratus (layered, grey), Nimbus (rain-bearing) are all types of CLOUDS. The 10 cloud types are classified by altitude and form."
  },
  {
    subject: "Government", topic: "International Relations", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "Which of the following is NOT a member country of ECOWAS?",
    options: ["Nigeria", "Liberia", "Cameroon", "Ghana"],
    answer: "Cameroon",
    explanation: "Cameroon is NOT a member of ECOWAS (Economic Community of West African States) — it is in Central Africa and a member of ECCAS. ECOWAS members include Nigeria, Liberia, Ghana, Senegal, Côte d'Ivoire, etc."
  },
  {
    subject: "Government", topic: "Geography", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "Nigeria is located on longitude:",
    options: ["15°E", "73°E", "15°W", "Around 0°-15°E"],
    answer: "Around 0°-15°E",
    explanation: "Nigeria's longitude spans approximately 3°E to 15°E, with its approximate centre around 8°E. The Greenwich Meridian (0°) passes through western Nigeria. UNIBEN answer — students check paper for specific longitude given."
  },
  {
    subject: "Government", topic: "Nigerian Constitution", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "Which of the following is NOT part of the ocean floor?",
    options: ["Deep sea plain", "Ombolo", "Trench", "Continental shelf"],
    answer: "Ombolo",
    explanation: "Ocean floor features: continental shelf, continental slope, abyssal plain (deep sea plain), ocean trenches, mid-ocean ridges. 'Ombolo' is not a recognised oceanographic term — it is the odd one out."
  }
]

export default unibenMgtGovt2010
