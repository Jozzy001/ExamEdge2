// UNIBEN Post-UTME — Current Affairs & General Knowledge
// Collected across all years
// Faculty: All faculties
// Note: These questions test Nigerian history, geography, and current affairs
//       They appear sporadically in the General Paper

const unibenCurrentAffairs = [
  {
    subject: "Current Affairs", topic: "Nigerian History", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences", "lifesciences", "socialsciences", "arts", "law"],
    question: "How many political parties were registered for the last general election in Nigeria (as of 2011)?",
    options: ["48", "54", "25", "38"],
    answer: "48",
    explanation: "As of the 2011 general elections, 48 political parties were registered by INEC in Nigeria to participate."
  },
  {
    subject: "Current Affairs", topic: "Nigerian History", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences", "lifesciences", "socialsciences", "arts", "law"],
    question: "When was the ICJ judgement between Nigeria and Cameroon delivered?",
    options: ["October 10, 2002", "September 12, 2001", "September 11, 1999", "August 14, 2001"],
    answer: "October 10, 2002",
    explanation: "The International Court of Justice (ICJ) delivered its judgement on the Nigeria-Cameroon border dispute (regarding the Bakassi Peninsula and Lake Chad) on October 10, 2002."
  },
  {
    subject: "Current Affairs", topic: "Nigerian Government", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences", "lifesciences", "socialsciences", "arts", "law"],
    question: "Which state in Nigeria has the highest number of local government areas?",
    options: ["Katsina", "Bayelsa", "Kano", "Sokoto"],
    answer: "Kano",
    explanation: "Kano State has the highest number of local government areas in Nigeria with 44 LGAs. Katsina has 34, Borno has 27, and Bayelsa has just 8 — the fewest."
  },
  {
    subject: "Current Affairs", topic: "Nigerian History", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences", "lifesciences", "socialsciences", "arts", "law"],
    question: "General Yakubu Gowon created 12 states in Nigeria on:",
    options: ["27/5/1967", "27/6/1967", "27/7/1967", "21/11/1970"],
    answer: "27/5/1967",
    explanation: "General Yakubu Gowon created 12 states from the existing 4 regions on 27th May 1967, just before the Nigerian Civil War began. This was done partly to break up the Eastern Region and prevent secession."
  },
  {
    subject: "Current Affairs", topic: "Nigerian Government", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences", "lifesciences", "socialsciences", "arts", "law"],
    question: "Which of these countries is NOT a member of the Commonwealth of Nations?",
    options: ["Nigeria", "Canada", "India", "Niger"],
    answer: "Niger",
    explanation: "Niger (Republic of Niger) is a Francophone country and is NOT a member of the Commonwealth of Nations, which is largely made up of former British territories. Nigeria, Canada, and India are all full members."
  },
  {
    subject: "Current Affairs", topic: "Nigerian Government", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences", "lifesciences", "socialsciences", "arts", "law"],
    question: "Nigeria's first Senate President was:",
    options: ["Joseph Wayas", "Iyorchia Ayu", "Nwafor Orizu", "Aminu Tambuwal"],
    answer: "Nwafor Orizu",
    explanation: "Nwafor Orizu was Nigeria's first Senate President, serving from 1960–1966 during the First Republic. He also briefly served as Acting President when Tafawa Balewa was killed during the January 1966 coup."
  },
  {
    subject: "Current Affairs", topic: "Geography", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences", "lifesciences", "socialsciences", "arts", "law"],
    question: "The percentage of the world's earthquakes and volcanic activities that occur around the Circum-Pacific Ring of Fire is:",
    options: ["10%", "40%", "25%", "70%"],
    answer: "70%",
    explanation: "The Circum-Pacific Ring of Fire accounts for about 70% of the world's earthquakes and contains about 75% of all active volcanoes. It is a 40,000 km horseshoe-shaped zone of seismic and volcanic activity."
  },
  {
    subject: "Current Affairs", topic: "Geography", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences", "lifesciences", "socialsciences", "arts", "law"],
    question: "In which layer of the atmosphere is transmission of radio waves possible?",
    options: ["Ionosphere", "Stratosphere", "Troposphere", "Mesosphere"],
    answer: "Ionosphere",
    explanation: "The ionosphere contains ionized particles that reflect radio waves back to Earth, enabling long-distance radio communication. It extends from about 60 km to 1,000 km above Earth's surface."
  },
  {
    subject: "Current Affairs", topic: "Geography", year: 2012, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences", "lifesciences", "socialsciences", "arts", "law"],
    question: "In karst regions, limestone pavements called grikes are formed through the process of:",
    options: ["Solvent action", "Chelation", "Carbonation", "Hydrolysis"],
    answer: "Carbonation",
    explanation: "Grikes (enlarged joints in limestone pavements) are formed by carbonation — rainwater absorbs CO₂ to form carbonic acid which dissolves limestone (CaCO₃ + H₂CO₃ → Ca(HCO₃)₂). This is the dominant process in karst landscape formation."
  },
  {
    subject: "Current Affairs", topic: "Nigerian History & Culture", year: 2020, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences", "lifesciences", "socialsciences", "arts", "law"],
    question: "The first Nigerian to win the Nobel Laureate Prize in 1986 was:",
    options: ["Godwin Obaseki", "Tafawa Balewa", "Nnamdi Azikiwe", "Wole Soyinka"],
    answer: "Wole Soyinka",
    explanation: "Wole Soyinka won the Nobel Prize in Literature in 1986, becoming the first African to win the Nobel Prize in Literature. He is a celebrated playwright, poet, and essayist."
  },
  {
    subject: "Current Affairs", topic: "UNIBEN History", year: 2020, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences", "lifesciences", "socialsciences", "arts", "law"],
    question: "_____ was the first Nigerian woman to obtain a Ph.D. and also the first female Vice-Chancellor of the University of Benin.",
    options: ["Grace Alele-Williams", "Funmilayo Ransome-Kuti", "Prof. Nzeribe", "Prof. Osasu Osaretin"],
    answer: "Grace Alele-Williams",
    explanation: "Prof. Grace Alele-Williams was a pioneering Nigerian mathematician and academic. She was the first Nigerian woman to obtain a Ph.D. (in Mathematics Education, University of Chicago, 1963) and served as the first female Vice-Chancellor of the University of Benin from 1985–1991."
  },
  {
    subject: "Current Affairs", topic: "Nigerian History & Culture", year: 2020, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences", "lifesciences", "socialsciences", "arts", "law"],
    question: "The Benin Expedition of 1897 conquered the Benin Empire in:",
    options: ["1504", "1897", "1900", "1798"],
    answer: "1897",
    explanation: "The British Punitive Expedition of 1897 sacked Benin City, ending the Benin Kingdom's independence. British forces captured the Oba and took thousands of Benin Bronzes, many of which remain in the British Museum today."
  },
  {
    subject: "Current Affairs", topic: "Nigerian History & Culture", year: 2020, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences", "lifesciences", "socialsciences", "arts", "law"],
    question: "The Nigerian flag was designed by:",
    options: ["Michael Taiwo Akinkunmi", "Ahmadu Bello", "Lord Lugard", "Obafemi Awolowo"],
    answer: "Michael Taiwo Akinkunmi",
    explanation: "Michael Taiwo Akinkunmi, a 23-year-old student in London, designed the Nigerian flag in 1959. His design (green-white-green) was selected from 2,870 entries in a national competition. He received a £100 prize."
  },
  {
    subject: "Current Affairs", topic: "Nigerian Government", year: 2020, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences", "lifesciences", "socialsciences", "arts", "law"],
    question: "There are _____ local government areas in Nigeria.",
    options: ["747", "757", "774", "764"],
    answer: "774",
    explanation: "Nigeria has 774 local government areas (LGAs) spread across 36 states and the Federal Capital Territory (Abuja). This number was established by the 1999 Constitution."
  }
]

export default unibenCurrentAffairs
