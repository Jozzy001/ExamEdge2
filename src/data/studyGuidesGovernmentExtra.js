// EXAMEDGENG — GOVERNMENT STUDY GUIDES (EXTRA)
// Guides for Government topics that did not have one yet.
// Keys match the topic names in the question bank exactly
// (including the misspelt "Constitonial Development").
//
// HOW TO USE:
// 1. Save this file as src/data/studyGuidesGovernmentExtra.js
// 2. In src/data/studyGuides.js add at the top:
//      import GOVERNMENT_EXTRA_GUIDES from "./studyGuidesGovernmentExtra"
// 3. At the very end of the STUDY_GUIDES object (next to the other spreads), add:
//      ...GOVERNMENT_EXTRA_GUIDES,

// ------------------------------------------------------------
// Shared guides (used by more than one topic name)
// ------------------------------------------------------------

const CONSTITUTIONAL_DEVELOPMENT = {
  subject: "Government",
  title: "Nigerian Constitutional Development",
  icon: "📜",
  estimatedTime: "4 min read",
  sections: [
    { heading: "What This Topic Covers", type: "text",
      content: "This topic traces how Nigeria's constitutions changed from colonial rule to today. Exam questions ask: which constitution introduced what, who the governor was, and what the key feature of each document was. Learn the timeline in order." },
    { heading: "Colonial Constitutions", type: "cards", items: [
      { title: "Clifford Constitution 1922", body: "Governor Hugh Clifford. Created the Legislative Council. FIRST introduction of the ELECTIVE PRINCIPLE: 4 elected seats (3 for Lagos, 1 for Calabar). Led to the first political parties (NNDP, 1923). RECURRING!" },
      { title: "Richards Constitution 1946", body: "Governor Arthur Richards. Divided Nigeria into three regions (North, West, East) and created regional Houses of Assembly. First time North and South shared a legislative council. Criticised by nationalists because Nigerians were not consulted. RECURRING!" },
      { title: "Macpherson Constitution 1951", body: "Governor John Macpherson. Followed wide consultation from village to national level. Gave more Nigerian participation, regional legislatures with real powers, and a central Council of Ministers." },
      { title: "Lyttelton Constitution 1954", body: "Oliver Lyttelton (Colonial Secretary). Introduced FEDERALISM. Regions became largely self-governing, Lagos became federal territory, and a Federal Prime Minister was introduced later. RECURRING!" }
    ]},
    { heading: "Post-Independence Constitutions", type: "cards", items: [
      { title: "Independence Constitution 1960", body: "Parliamentary system. The Queen was head of state, represented by Governor-General (Nnamdi Azikiwe). Prime Minister Abubakar Tafawa Balewa headed the government. Independence on 1 October 1960." },
      { title: "Republican Constitution 1963", body: "Nigeria became a republic on 1 October 1963. The Queen was dropped. Azikiwe became the first (ceremonial) President. Still parliamentary. Mid-West Region created." },
      { title: "1979 Constitution", body: "Introduced the PRESIDENTIAL system modelled on the USA. Executive President, bicameral National Assembly, 19 states. Shagari took office on 1 October 1979. RECURRING!" },
      { title: "1989 Constitution", body: "Prepared under Babangida for a Third Republic with TWO parties (SDP and NRC). Never fully implemented after the June 1993 annulment." },
      { title: "1999 Constitution", body: "The present constitution. Presidential, federal, 36 states, FCT and 774 local governments. Came into force on 29 May 1999." }
    ]},
    { heading: "Quick Facts", type: "cards", items: [
      { title: "First elections", body: "Clifford Constitution 1922 (limited franchise in Lagos and Calabar)." },
      { title: "Regionalism introduced", body: "Richards Constitution 1946." },
      { title: "Federalism introduced", body: "Lyttelton Constitution 1954." },
      { title: "Presidential system introduced", body: "1979 Constitution." },
      { title: "Parliamentary to Republic", body: "1963, Azikiwe as first President." }
    ]},
    { heading: "Trap Answers to Avoid", type: "warning", items: [
      "Richards 1946 introduced regionalism, NOT federalism. Federalism came with Lyttelton 1954.",
      "Clifford 1922 introduced the elective principle in only Lagos and Calabar, not all over Nigeria.",
      "The 1960 and 1963 constitutions were parliamentary. Presidential began in 1979.",
      "The Governor-General (1960) and the President (1963) were ceremonial heads. The Prime Minister held executive power."
    ]},
    { heading: "Quick Tip", type: "tip",
      content: "Memorise the chain: Clifford (1922, elections) → Richards (1946, regions) → Macpherson (1951, consultation) → Lyttelton (1954, federalism) → 1960 → 1963 (republic) → 1979 (presidential) → 1999 (current)." }
  ]
}

const TRADITIONAL_GOVERNMENT = {
  subject: "Government",
  title: "Pre-Colonial Political Systems in Nigeria",
  icon: "👑",
  estimatedTime: "4 min read",
  sections: [
    { heading: "What This Topic Covers", type: "text",
      content: "Before colonial rule, Nigeria's peoples had three main political patterns: centralised emirates (Hausa-Fulani), centralised kingdoms with checks (Yoruba and Benin), and acephalous (headless) societies (Igbo). Learn who ruled, how power was checked, and how the British later used each system." },
    { heading: "Hausa-Fulani Emirate System", type: "cards", items: [
      { title: "Origin", body: "Established after the 1804 jihad of Usman dan Fodio, which created the Sokoto Caliphate. Earlier Hausa city-states were ruled by Sarkis." },
      { title: "Structure", body: "Sultan of Sokoto at the top (spiritual and political head). Emirs governed emirates and were appointed with the Sultan's approval. Below them: district heads (Hakimai) and village heads." },
      { title: "Law and officials", body: "Islamic (Sharia) law. Emir's council of advisers, Waziri (chief adviser/prime minister), Alkali (judge), Galadima, Madawaki. Tax: Zakat and Kharaj. RECURRING!" },
      { title: "Character", body: "Highly CENTRALISED, hierarchical and religious. Authority flowed from top to bottom. Made the system easy for the British to use through indirect rule." }
    ]},
    { heading: "Yoruba Political System", type: "cards", items: [
      { title: "The Oba", body: "Head of each kingdom (Alaafin of Oyo, Ooni of Ife). Considered sacred but his power was limited by checks." },
      { title: "Checks on the Oba", body: "Oyo Mesi (council of seven chiefs, led by the Bashorun) could ask a tyrannical Alaafin to commit suicide. Ogboni cult acted as a judicial and religious check. RECURRING!" },
      { title: "Lower levels", body: "Towns divided into quarters under chiefs. Age grades and guilds supported community work." },
      { title: "Character", body: "Monarchical but with CHECKS AND BALANCES. Hereditary rulers within ruling families." }
    ]},
    { heading: "Igbo (Acephalous) System", type: "cards", items: [
      { title: "No king", body: "Acephalous means 'without a head'. No central ruler over all Igbo people. Villages were largely independent." },
      { title: "Decision-making", body: "Village assembly (all adult males), council of elders (Ndi Ichie), lineage heads (Umunna), age grades, title-holders (Ozo), secret societies and oracles (Aro Chukwu)." },
      { title: "Character", body: "Strongly DEMOCRATIC and decentralised. Authority based on age, wealth and achievement. This made British indirect rule hard; the British created Warrant Chiefs, which led to the Aba Women's Riot (1929). RECURRING!" }
    ]},
    { heading: "Other Important Systems", type: "cards", items: [
      { title: "Benin Kingdom", body: "Ruled by the Oba. The Uzama (hereditary chiefs) and Eghaevbo n'Ore (town chiefs) checked him. Famous for bronzes and a strong administration." },
      { title: "Kanem-Bornu", body: "Ruled by the Mai (later Shehu) with a council of advisers. One of the longest-lasting states in West Africa." },
      { title: "Tiv and similar groups", body: "Also acephalous. Decisions made by elders and lineage heads." }
    ]},
    { heading: "Comparison", type: "cards", items: [
      { title: "Centralised", body: "Hausa-Fulani (Sultan/Emir), Yoruba (Oba), Benin (Oba), Kanem-Bornu (Mai)." },
      { title: "Acephalous", body: "Igbo, Tiv, Ibibio and similar peoples." },
      { title: "Best for indirect rule", body: "Hausa-Fulani. Worst result: Igboland (Warrant Chiefs)." }
    ]},
    { heading: "Trap Answers to Avoid", type: "warning", items: [
      "Acephalous is NOT the same as anarchy. Igbo society had clear rules and institutions.",
      "The Yoruba Oba was NOT an absolute ruler. He was checked by the Oyo Mesi and Ogboni.",
      "The Sultan of Sokoto is the head of the Caliphate. Emirs rule individual emirates.",
      "Warrant Chiefs were a British creation, not a traditional Igbo institution."
    ]},
    { heading: "Quick Tip", type: "tip",
      content: "Hausa-Fulani = Emir + Sharia + strict hierarchy. Yoruba = Oba checked by Oyo Mesi and Ogboni. Igbo = acephalous, village assembly and elders. Indirect rule worked in the North and failed in the East." }
  ]
}

const INTERNATIONAL_ORGANIZATIONS = {
  subject: "Government",
  title: "International Organisations",
  icon: "🌐",
  estimatedTime: "4 min read",
  sections: [
    { heading: "What This Topic Covers", type: "text",
      content: "International organisations are groups of states set up to cooperate on peace, trade, development and security. Learn the founding date, purpose, headquarters and Nigeria's role for each." },
    { heading: "The United Nations (UN)", type: "cards", items: [
      { title: "Basics", body: "Founded 24 October 1945 after World War II, replacing the League of Nations. Headquarters: New York. 193 member states. Main aim: maintain international peace and security." },
      { title: "Main organs", body: "General Assembly (all members, one vote each, recommendations only), Security Council (15 members, 5 permanent with veto: USA, UK, France, Russia, China; makes BINDING decisions), Secretariat (Secretary-General), International Court of Justice (The Hague), Economic and Social Council, Trusteeship Council." },
      { title: "Agencies", body: "UNESCO (education, science, culture), WHO (health), FAO (food and agriculture), UNICEF (children), ILO (labour), IMF and World Bank (finance)." }
    ]},
    { heading: "African Union and ECOWAS", type: "cards", items: [
      { title: "Organisation of African Unity (OAU)", body: "Founded 25 May 1963 in Addis Ababa. Aims: unity, decolonisation, defend sovereignty, end apartheid. First Secretary-General: Diallo Telli (Guinea)." },
      { title: "African Union (AU)", body: "Replaced the OAU, launched 9 July 2002 in Durban. HQ: Addis Ababa. Can intervene in member states in cases of war crimes, genocide and crimes against humanity." },
      { title: "ECOWAS", body: "Economic Community of West African States. Founded 28 May 1975 by the Treaty of Lagos. HQ: Abuja. Aim: economic integration. Nigeria and Togo led its creation. ECOMOG is its peacekeeping force." }
    ]},
    { heading: "Other Organisations", type: "cards", items: [
      { title: "Commonwealth", body: "Association of former British territories (about 56 members). Nigeria was suspended in 1995 after the execution of Ken Saro-Wiwa and readmitted in 1999." },
      { title: "OPEC", body: "Organisation of the Petroleum Exporting Countries. Founded 1960 in Baghdad. HQ: Vienna. Nigeria joined in 1971. Aim: coordinate oil policies and stabilise prices." },
      { title: "NATO", body: "North Atlantic Treaty Organisation, 1949. Western military alliance (collective defence)." },
      { title: "European Union (EU)", body: "Economic and political union of European states with a common market." },
      { title: "WTO", body: "World Trade Organisation. Regulates international trade and settles trade disputes (replaced GATT in 1995)." },
      { title: "Non-Aligned Movement", body: "Countries that did not join either the Western or Eastern bloc in the Cold War." }
    ]},
    { heading: "Trap Answers to Avoid", type: "warning", items: [
      "General Assembly resolutions are recommendations. Only the Security Council makes binding decisions.",
      "AU replaced the OAU in 2002. OAU was founded in 1963.",
      "OPEC is headquartered in Vienna, not Lagos or Abuja.",
      "ECOWAS HQ is in Abuja. AU HQ is in Addis Ababa. Do not swap them."
    ]},
    { heading: "Quick Tip", type: "tip",
      content: "UN = 1945, New York, Security Council binding. OAU = 1963, AU = 2002. ECOWAS = 1975, Treaty of Lagos, Abuja. OPEC = 1960, Vienna, Nigeria joined 1971." }
  ]
}

const GOVERNMENT_EXTRA_GUIDES = {

  // ==========================================
  // GOVERNMENT — JUDICIARY
  // ==========================================
  "Judiciary": {
    subject: "Government",
    title: "The Judiciary — Courts and Independence",
    icon: "⚖️",
    estimatedTime: "4 min read",
    sections: [
      { heading: "What is the Judiciary?", type: "text",
        content: "The judiciary is the arm of government that INTERPRETS the law, settles disputes and punishes offenders. It is made up of judges and courts. Section 6 of the 1999 Constitution vests judicial power in the courts." },
      { heading: "Functions of the Judiciary", type: "cards", items: [
        { title: "Interprets laws", body: "Explains the meaning of the constitution and statutes." },
        { title: "Settles disputes", body: "Between individuals, between individuals and government, and between governments." },
        { title: "Protects fundamental rights", body: "Citizens can go to court if their rights are violated." },
        { title: "Judicial review", body: "Power to declare laws or executive actions unconstitutional and void. RECURRING!" },
        { title: "Punishes offenders", body: "Tries criminal cases and passes sentences." },
        { title: "Other duties", body: "Administers estates, hears election petitions, issues writs such as habeas corpus." }
      ]},
      { heading: "Court Structure in Nigeria (Highest to Lowest)", type: "steps", items: [
        "Supreme Court: highest court; final appeals; original jurisdiction in disputes between federal and state governments.",
        "Court of Appeal: hears appeals from lower courts (High Courts, Federal High Court, Sharia and Customary Courts of Appeal).",
        "Federal High Court, State High Courts, Sharia Court of Appeal, Customary Court of Appeal, National Industrial Court.",
        "Magistrate, District, Area, Customary and Sharia courts at the lower level."
      ]},
      { heading: "Appointment and Independence", type: "cards", items: [
        { title: "Chief Justice of Nigeria (CJN)", body: "Appointed by the President on the recommendation of the National Judicial Council (NJC), subject to confirmation by the Senate." },
        { title: "Security of tenure", body: "Judges cannot be removed at will. Removal requires due process (address by two-thirds of the Senate on NJC recommendation for superior court judges). RECURRING!" },
        { title: "Retirement age", body: "Supreme Court and Court of Appeal justices retire at 70. High Court judges retire at 65." },
        { title: "Financial independence", body: "Judges' salaries are charged to the Consolidated Revenue Fund and cannot be reduced while in office." },
        { title: "Other safeguards", body: "Immunity for judicial acts, separation of powers, and the National Judicial Council to manage discipline." }
      ]},
      { heading: "Trap Answers to Avoid", type: "warning", items: [
        "The judiciary INTERPRETS laws. The legislature MAKES laws. The executive IMPLEMENTS them.",
        "Judicial review is the power to nullify unconstitutional laws, not to make laws.",
        "The CJN is appointed by the President, not elected by judges, and needs Senate confirmation.",
        "Independence means freedom from political interference, not freedom from the law."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Judiciary = interprets law, settles disputes, judicial review. Supreme Court is the final court. CJN is appointed on NJC recommendation and confirmed by the Senate. Security of tenure and financial independence protect judges." }
    ]
  },

  // ==========================================
  // GOVERNMENT — CONSTITUTIONAL DEVELOPMENT (three topic names)
  // ==========================================
  "Constitutional Development": CONSTITUTIONAL_DEVELOPMENT,
  "Constitonial Development": CONSTITUTIONAL_DEVELOPMENT,
  "Constitutional History": CONSTITUTIONAL_DEVELOPMENT,

  // ==========================================
  // GOVERNMENT — NATIONALISM
  // ==========================================
  "Nationalism": {
    subject: "Government",
    title: "Nigerian Nationalism and the Road to Independence",
    icon: "🇳🇬",
    estimatedTime: "4 min read",
    sections: [
      { heading: "What is Nationalism?", type: "text",
        content: "Nationalism is a strong desire among a people to be free from foreign rule and to govern themselves. Nigerian nationalism grew from protests against colonial rule into political parties and finally independence on 1 October 1960." },
      { heading: "Causes of Nationalism", type: "cards", items: [
        { title: "Colonial injustices", body: "Forced taxation, racial discrimination, exclusion from top jobs, forced labour and land seizure." },
        { title: "Western education", body: "Produced an educated elite (Azikiwe, Awolowo, Macaulay) who demanded self-rule." },
        { title: "World War II", body: "Nigerian ex-servicemen saw that Europeans could be defeated and returned with new ideas. The Atlantic Charter (1941) promised self-determination. RECURRING!" },
        { title: "Pan-Africanism and the press", body: "Ideas from W.E.B. Du Bois, Marcus Garvey and Kwame Nkrumah. Newspapers like the West African Pilot (Azikiwe) spread nationalist ideas." },
        { title: "Independence of other countries", body: "India (1947) and Ghana (1957) inspired Nigerians." }
      ]},
      { heading: "Key Nationalists and Organisations", type: "cards", items: [
        { title: "Herbert Macaulay", body: "'Father of Nigerian nationalism'. Founded the Nigerian National Democratic Party (NNDP) in 1923, Nigeria's first political party." },
        { title: "Nigerian Youth Movement (NYM)", body: "Formed in 1934 as the Lagos Youth Movement. First truly national, non-ethnic nationalist group. Members: H.O. Davies, Ernest Ikoli, Samuel Akisanya." },
        { title: "NCNC", body: "National Council of Nigeria and the Cameroons, 1944. Leaders: Herbert Macaulay and Nnamdi Azikiwe." },
        { title: "Action Group (AG)", body: "1951, led by Obafemi Awolowo in the West. Emerged from Egbe Omo Oduduwa (1945)." },
        { title: "NPC", body: "Northern People's Congress, 1949 (as a party). Led by Ahmadu Bello and Tafawa Balewa. Dominant in the North." },
        { title: "NEPU", body: "Northern Elements Progressive Union, 1950, led by Aminu Kano. Radical northern party." }
      ]},
      { heading: "Road to Independence", type: "steps", items: [
        "1922 Clifford Constitution introduced elections in Lagos and Calabar.",
        "1946 Richards Constitution created three regions.",
        "1951 Macpherson Constitution increased Nigerian participation.",
        "1953 Anthony Enahoro's motion for independence in 1956. The Northern members opposed; the motion failed. Riots in Kano followed.",
        "1954 Lyttelton Constitution introduced federalism.",
        "1957 Western and Eastern regions got self-government; 1959 for the North.",
        "1 October 1960: independence. Balewa became Prime Minister."
      ]},
      { heading: "Trap Answers to Avoid", type: "warning", items: [
        "NNDP (1923) was the first party. NCNC came in 1944, AG in 1951.",
        "Enahoro's 1953 motion called for independence in 1956 and was not passed.",
        "NYM was the first nationalist movement that crossed ethnic lines.",
        "Do not confuse the Atlantic Charter (self-determination promise) with the Atlantic slave trade."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Macaulay = NNDP (1923). NYM = 1934. NCNC = 1944 (Azikiwe). AG = 1951 (Awolowo). NPC = 1949 (Ahmadu Bello). NEPU = 1950 (Aminu Kano). Enahoro motion = 1953. Independence = 1 October 1960." }
    ]
  },

  // ==========================================
  // GOVERNMENT — MILITARY RULE
  // ==========================================
  "Military Rule": {
    subject: "Government",
    title: "Military Rule in Nigeria",
    icon: "🪖",
    estimatedTime: "4 min read",
    sections: [
      { heading: "What is Military Rule?", type: "text",
        content: "Military rule is government by the armed forces after taking power by force (a coup d'etat). The constitution is suspended, rule is by decree, and the legislature is dissolved. Nigeria was under military rule for about 29 of its first 40 years of independence." },
      { heading: "Timeline of Military Heads of State", type: "cards", items: [
        { title: "Jan 1966: Major Nzeogwu / General Aguiyi-Ironsi", body: "First coup (15 January 1966) led by Major Chukwuma Nzeogwu. Balewa, Ahmadu Bello and others were killed. Ironsi became Head of State and issued Decree No. 34 (unification decree). RECURRING!" },
        { title: "July 1966: Yakubu Gowon", body: "Counter-coup. Led Nigeria through the Civil War (1967–1970). Created 12 states in 1967. Overthrown in 1975." },
        { title: "1975–76: Murtala Mohammed", body: "Overthrew Gowon. Created 19 states, started the move to Abuja, and began the return to civilian rule. Assassinated in the February 1976 Dimka coup." },
        { title: "1976–79: Olusegun Obasanjo", body: "Continued the transition. Handed power to Shagari on 1 October 1979. Introduced Land Use Act in 1978 and Operation Feed the Nation." },
        { title: "Dec 1983–85: Muhammadu Buhari", body: "Overthrew Shagari's government. Launched the War Against Indiscipline (WAI)." },
        { title: "1985–93: Ibrahim Babangida", body: "Introduced the Structural Adjustment Programme (SAP) in 1986. Created more states and a two-party system (SDP and NRC). Annulled the 12 June 1993 election won by M.K.O. Abiola. RECURRING!" },
        { title: "1993: Ernest Shonekan", body: "Led the Interim National Government for about three months before Abacha took over." },
        { title: "1993–98: Sani Abacha", body: "Dissolved elected structures. Executed Ken Saro-Wiwa and others in 1995 (Nigeria suspended from the Commonwealth). Died in June 1998." },
        { title: "1998–99: Abdulsalami Abubakar", body: "Organised the transition. Handed power to Olusegun Obasanjo on 29 May 1999." }
      ]},
      { heading: "Causes of Coups", type: "cards", items: [
        { title: "Political instability", body: "Corruption, election rigging, ethnic and regional rivalry in the First Republic." },
        { title: "Economic problems", body: "Mismanagement, inflation, unemployment." },
        { title: "Military factors", body: "Ambition of officers, promotion grievances and ethnic tension within the army." },
        { title: "Foreign influence and precedent", body: "Success of coups elsewhere in Africa." }
      ]},
      { heading: "Effects of Military Rule", type: "cards", items: [
        { title: "Positive", body: "Creation of states, infrastructure projects, ended the Civil War, ushered in Abuja and the ECOWAS vision." },
        { title: "Negative", body: "Suspension of the constitution and fundamental rights, rule by decree, corruption, repression of the press and opponents, weak democratic institutions, and a unitary slant to a federal state." }
      ]},
      { heading: "Trap Answers to Avoid", type: "warning", items: [
        "Murtala was assassinated in 1976. Obasanjo then became Head of State.",
        "Babangida annulled the June 12 election. Abacha came after the Shonekan interim period.",
        "The first coup was in January 1966 and the counter-coup in July 1966.",
        "Obasanjo handed power to a civilian (Shagari) in 1979 and later became elected President in 1999."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Ironsi (Jan 66) → Gowon (Jul 66) → Murtala (75) → Obasanjo (76) → Shagari civilian (79) → Buhari (83) → Babangida (85) → Shonekan (93) → Abacha (93) → Abubakar (98) → Obasanjo elected (99)." }
    ]
  },

  // ==========================================
  // GOVERNMENT — INTERNATIONAL ORGANIZATIONS (US spelling)
  // ==========================================
  "International Organizations": INTERNATIONAL_ORGANIZATIONS,

  // ==========================================
  // GOVERNMENT — TRADITIONAL GOVERNMENT / PRE-COLONIAL SYSTEMS
  // ==========================================
  "Traditional Government": TRADITIONAL_GOVERNMENT,
  "Pre-Colonial Systems": TRADITIONAL_GOVERNMENT,

  // ==========================================
  // GOVERNMENT — FOREIGN POLICY
  // ==========================================
  "Foreign Policy": {
    subject: "Government",
    title: "Nigerian Foreign Policy",
    icon: "🛰️",
    estimatedTime: "4 min read",
    sections: [
      { heading: "What is Foreign Policy?", type: "text",
        content: "Foreign policy is the set of goals, principles and actions a country uses to deal with other countries and international organisations. Its driving force is the NATIONAL INTEREST." },
      { heading: "Principles of Nigerian Foreign Policy", type: "cards", items: [
        { title: "Africa as the centrepiece", body: "Nigeria's relations with Africa come first. Basis for support for ECOWAS, the AU and liberation movements. RECURRING!" },
        { title: "Non-alignment", body: "Not joining the Cold War blocs (East or West) permanently." },
        { title: "Respect for sovereignty and territorial integrity", body: "No interference in the internal affairs of other states." },
        { title: "Peaceful settlement of disputes", body: "Use of negotiation, mediation and arbitration." },
        { title: "Support for decolonisation and anti-apartheid", body: "Nigeria supported liberation struggles in Angola, Mozambique, Zimbabwe, Namibia and South Africa." },
        { title: "Good neighbourliness and international cooperation", body: "Membership of the UN, Commonwealth, OPEC and others." }
      ]},
      { heading: "Key Actions and Examples", type: "cards", items: [
        { title: "Balewa era (1960–66)", body: "Pro-West and cautious. Broke relations with France over nuclear tests in the Sahara (1961). Strong Commonwealth voice against apartheid." },
        { title: "Murtala/Obasanjo era (1975–79)", body: "Radical and Africa-centred. Recognised the MPLA government in Angola (1975). Nationalised BP assets in 1979 over British policy on Rhodesia/South Africa." },
        { title: "ECOWAS (1975)", body: "Nigeria was a founding force. Peacekeeping through ECOMOG in Liberia (1990) and Sierra Leone." },
        { title: "Technical Aid Corps (1987)", body: "Nigerian professionals (teachers, doctors, engineers) sent to other African, Caribbean and Pacific countries." },
        { title: "UN peacekeeping", body: "Nigeria has contributed troops to missions in Congo, Lebanon, Liberia and elsewhere." },
        { title: "Citizen diplomacy", body: "Foreign policy aimed at protecting the interest and welfare of Nigerians abroad (introduced in the 2000s)." }
      ]},
      { heading: "Determinants of Foreign Policy", type: "cards", items: [
        { title: "Internal factors", body: "National interest, size and population, economic strength (oil), military capacity, leadership, public opinion." },
        { title: "External factors", body: "World events, Cold War, regional conflicts and relations with powerful states." }
      ]},
      { heading: "Trap Answers to Avoid", type: "warning", items: [
        "Africa is the centrepiece, not the USA, Britain or the Commonwealth.",
        "Non-alignment does NOT mean isolation. Nigeria is very active internationally.",
        "National interest is the main determinant of any country's foreign policy.",
        "ECOMOG is ECOWAS's military arm, not the UN's."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Africa = centrepiece. Non-alignment, sovereignty, peaceful settlement, anti-colonialism. ECOWAS (1975), ECOMOG (peacekeeping), Technical Aid Corps (1987), MPLA recognition (1975). National interest drives it all." }
    ]
  },

  // ==========================================
  // GOVERNMENT — ORGANS OF GOVERNMENT
  // ==========================================
  "Organs of Government": {
    subject: "Government",
    title: "Organs of Government — Executive, Legislature, Judiciary",
    icon: "🏛️",
    estimatedTime: "4 min read",
    sections: [
      { heading: "The Three Organs", type: "text",
        content: "Government has three organs: the LEGISLATURE (makes laws), the EXECUTIVE (carries out laws) and the JUDICIARY (interprets laws and settles disputes). Separation of powers, associated with Montesquieu, keeps them independent so that no one organ becomes too powerful." },
      { heading: "The Executive", type: "cards", items: [
        { title: "Role", body: "Implements and enforces laws, runs the administration, formulates policy and represents the country abroad." },
        { title: "Nigeria", body: "President (head of state AND head of government), Vice-President, Ministers, civil service." },
        { title: "Powers", body: "Appoint ministers and ambassadors (Senate confirmation), command the armed forces, pardon, veto bills, present the budget." },
        { title: "Types", body: "Presidential (single elected executive, e.g. Nigeria, USA) and parliamentary (Prime Minister from the legislature, e.g. UK)." }
      ]},
      { heading: "The Legislature", type: "cards", items: [
        { title: "Role", body: "Makes laws, approves budgets, oversees the executive, represents the people, confirms appointments and can amend the constitution. RECURRING!" },
        { title: "Nigeria's National Assembly", body: "BICAMERAL: Senate (109 members: 3 per state + 1 for FCT) and House of Representatives (360 members)." },
        { title: "Types", body: "Unicameral (one chamber, e.g. Ghana) and bicameral (two chambers, e.g. Nigeria, USA, UK)." },
        { title: "Checks on the executive", body: "Committees, questioning ministers, impeachment, refusing budget approval and overriding a veto by two-thirds." }
      ]},
      { heading: "The Judiciary", type: "cards", items: [
        { title: "Role", body: "Interprets laws, settles disputes, protects rights and exercises judicial review." },
        { title: "Independence", body: "Security of tenure, financial independence and appointment through the National Judicial Council." }
      ]},
      { heading: "Checks and Balances (Nigeria)", type: "cards", items: [
        { title: "President over legislature", body: "Can veto bills." },
        { title: "Legislature over executive", body: "Confirms appointments, approves budget, impeaches the President." },
        { title: "Judiciary over both", body: "Can declare laws or executive acts unconstitutional." }
      ]},
      { heading: "Trap Answers to Avoid", type: "warning", items: [
        "Nigeria's president is BOTH head of state and head of government. In a parliamentary system these roles are often separate.",
        "The executive does not make laws, apart from delegated legislation (e.g. regulations).",
        "Bicameral means two chambers, not two parties.",
        "Separation of powers does not mean no cooperation. It means each organ checks the others."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Legislature = make laws. Executive = implement laws. Judiciary = interpret laws. Senate = 109. House = 360. Montesquieu = separation of powers. Veto, impeachment and judicial review are the main checks." }
    ]
  },

  // ==========================================
  // GOVERNMENT — PUBLIC OPINION
  // ==========================================
  "Public Opinion": {
    subject: "Government",
    title: "Public Opinion — Meaning, Agents and Measurement",
    icon: "🗣️",
    estimatedTime: "3 min read",
    sections: [
      { heading: "What is Public Opinion?", type: "text",
        content: "Public opinion is the sum of the views, attitudes and beliefs held by the people on public issues, government policies and leaders. It is not the opinion of one person or a small group, but of a significant part of the public. In a democracy, leaders must take it into account." },
      { heading: "Agents That Shape Public Opinion", type: "cards", items: [
        { title: "Mass media", body: "Newspapers, radio, television and the internet. The most powerful agent. Called the 'Fourth Estate'. RECURRING!" },
        { title: "Pressure groups", body: "NLC, NBA, ASUU, NMA and others publicise issues and influence views." },
        { title: "Political parties", body: "Communicate manifestos and criticise opponents." },
        { title: "Family, school and religious bodies", body: "Shape basic values from childhood (political socialisation)." },
        { title: "Opinion leaders", body: "Respected figures (traditional rulers, clerics, professionals) who influence others." },
        { title: "Social media", body: "Quick spread of information and mobilisation (and misinformation)." }
      ]},
      { heading: "Methods of Measuring Public Opinion", type: "cards", items: [
        { title: "Opinion polls", body: "Survey of a SAMPLE of the population using questionnaires or interviews. Must be representative." },
        { title: "Elections and referendums", body: "Direct expression of the public's choice." },
        { title: "Media content", body: "Letters to editors, phone-in programmes, online comments." },
        { title: "Petitions, protests and demonstrations", body: "Organised expression of opinion." },
        { title: "Town hall and public hearings", body: "Legislative hearings and community meetings." }
      ]},
      { heading: "Functions and Limitations", type: "cards", items: [
        { title: "Functions", body: "Guides government policy, checks abuse of power, promotes accountability and shows what citizens want." },
        { title: "Limitations", body: "Can be manipulated by propaganda, uninformed or emotional, influenced by ethnic or religious bias, difficult to measure, and may be silenced under censorship." }
      ]},
      { heading: "Trap Answers to Avoid", type: "warning", items: [
        "Public opinion is not the view of one person or the government. It is the view of a significant part of the public.",
        "An opinion poll uses a SAMPLE. It does not question everyone.",
        "A biased sample or leading question can give a wrong picture of public opinion.",
        "Propaganda aims to shape opinion, not to measure it."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Mass media is the most powerful agent of public opinion. Opinion polls (sampling), elections and referendums are the main ways to measure it. Free press, education and political awareness make public opinion strong." }
    ]
  },

  // ==========================================
  // GOVERNMENT — PUBLIC CORPORATIONS
  // ==========================================
  "Public Corporations": {
    subject: "Government",
    title: "Public Corporations — Features, Problems and Privatisation",
    icon: "🏭",
    estimatedTime: "4 min read",
    sections: [
      { heading: "What is a Public Corporation?", type: "text",
        content: "A public corporation is a business organisation owned and controlled by government and established by an ACT OF PARLIAMENT or decree (hence 'statutory'). It provides essential goods and services and usually enjoys some freedom from the day-to-day control of the civil service. Examples: NNPC, NPA (ports), former NEPA/PHCN, former NITEL, NRC (railways)." },
      { heading: "Features", type: "cards", items: [
        { title: "Established by law", body: "Set up by a statute, which defines its powers and objectives." },
        { title: "Government ownership", body: "Capital comes mainly from government. Not owned by shareholders." },
        { title: "Board of directors", body: "Run by a board appointed by government, with a chief executive." },
        { title: "Quasi-autonomous", body: "Has legal personality and can sue and be sued, but is accountable to a supervising ministry. RECURRING!" },
        { title: "Service motive", body: "Provides essential services at affordable prices rather than maximising profit." }
      ]},
      { heading: "Reasons for Establishment", type: "cards", items: [
        { title: "Provide essential services", body: "Electricity, water, rail, ports and telecommunications that private firms may not provide cheaply." },
        { title: "Control strategic sectors", body: "Oil, steel, defence." },
        { title: "Large capital needs", body: "Projects too large for private investors." },
        { title: "Prevent private monopoly", body: "And promote national development and employment." }
      ]},
      { heading: "Problems", type: "cards", items: [
        { title: "Political interference", body: "Ministers and politicians influence appointments and decisions." },
        { title: "Corruption and mismanagement", body: "Poor accountability, embezzlement, inflated contracts." },
        { title: "Inefficiency and overstaffing", body: "Low productivity, bureaucracy, little competition." },
        { title: "Inadequate funding and poor maintenance", body: "Dependence on government subventions." },
        { title: "Loss-making", body: "Prices kept low for social reasons, so many run at a loss." }
      ]},
      { heading: "Commercialisation and Privatisation", type: "cards", items: [
        { title: "Commercialisation", body: "Government keeps ownership but the corporation is run on business lines and must cover its costs (and reduce subsidies)." },
        { title: "Privatisation", body: "Transfer of ownership of public enterprises to private individuals or companies." },
        { title: "Nigerian history", body: "The Technical Committee on Privatisation and Commercialisation (TCPC) was set up in 1988 under Babangida. The Bureau of Public Enterprises (BPE) oversees privatisation under the Public Enterprises (Privatisation and Commercialisation) Act of 1999. RECURRING!" },
        { title: "Examples", body: "Sale of power distribution companies (2013) after the unbundling of PHCN; deregulation in telecoms." }
      ]},
      { heading: "Trap Answers to Avoid", type: "warning", items: [
        "Public corporations are government-owned, not owned by shareholders.",
        "Commercialisation is NOT privatisation. Under commercialisation, the government still owns the enterprise.",
        "A public corporation is set up by an Act or decree, not by registering under the Companies Act.",
        "Profit is not the main motive of a public corporation. Service is."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Public corporation = statutory, government-owned, quasi-autonomous, service motive. Problems = political interference, corruption, inefficiency. Commercialisation = run like a business but still government-owned. Privatisation = ownership transferred to private sector (BPE oversees)." }
    ]
  },

  // ==========================================
  // GOVERNMENT — PUBLIC POLICY
  // ==========================================
  "Public Policy": {
    subject: "Government",
    title: "Public Policy — Making, Implementing and Evaluating",
    icon: "🗂️",
    estimatedTime: "3 min read",
    sections: [
      { heading: "What is Public Policy?", type: "text",
        content: "Public policy is a deliberate course of action (or inaction) taken by government to solve a problem or achieve a goal in society, for example a health policy, education policy, fuel subsidy policy or monetary policy." },
      { heading: "Stages of the Policy Process", type: "steps", items: [
        "Problem identification and agenda setting: an issue is recognised as needing government action.",
        "Policy formulation: options are drafted by the executive, ministries, commissions, experts or the legislature.",
        "Policy adoption: the policy is approved through a law, executive order, budget or decision.",
        "Policy implementation: ministries, agencies and the civil service put the policy into action.",
        "Monitoring and evaluation: results are measured and the policy is modified, continued or ended."
      ]},
      { heading: "Who Makes and Influences Policy", type: "cards", items: [
        { title: "Executive and civil service", body: "President, ministers and permanent secretaries. Civil servants advise and implement." },
        { title: "Legislature", body: "Passes laws and approves budgets that give policies legal force." },
        { title: "Judiciary", body: "Interprets policies and can strike them down if unconstitutional." },
        { title: "Political parties and pressure groups", body: "Parties promote manifestos. Pressure groups lobby (NLC, NBA, ASUU)." },
        { title: "Media, public opinion and international bodies", body: "Shape the agenda. IMF, World Bank and the UN also influence policy." }
      ]},
      { heading: "Types of Public Policy", type: "cards", items: [
        { title: "Distributive", body: "Provides benefits to groups (e.g. scholarships, subsidies)." },
        { title: "Regulatory", body: "Controls behaviour (e.g. traffic laws, environmental standards)." },
        { title: "Redistributive", body: "Transfers wealth (e.g. progressive taxation, welfare)." },
        { title: "Fiscal and monetary", body: "Fiscal = taxation and spending. Monetary = interest rates and money supply (by the Central Bank)." }
      ]},
      { heading: "Why Policies Fail", type: "cards", items: [
        { title: "Causes", body: "Corruption, poor planning, lack of funds, policy inconsistency when governments change, weak monitoring, public resistance, and poor coordination between agencies." }
      ]},
      { heading: "Trap Answers to Avoid", type: "warning", items: [
        "Policy formulation (drafting) is not the same as implementation (carrying out).",
        "The civil service implements policy. Politicians decide it.",
        "A policy is not always a law. It can be an executive decision or programme.",
        "Fiscal policy is by government (taxes, spending). Monetary policy is by the central bank (interest rates)."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Remember the cycle: identify the problem → formulate → adopt → implement → evaluate. Executive and civil service formulate and implement. Legislature adopts and funds. Judiciary reviews." }
    ]
  },

  // ==========================================
  // GOVERNMENT — AFRICAN HISTORY
  // ==========================================
  "African History": {
    subject: "Government",
    title: "African History — Empires, Colonisation and Independence",
    icon: "🌍",
    estimatedTime: "4 min read",
    sections: [
      { heading: "What This Topic Covers", type: "text",
        content: "This topic links Africa's great pre-colonial states, the European scramble and colonial rule, the rise of nationalism and independence, and post-independence organisations like the OAU and AU. Focus on dates, leaders and causes." },
      { heading: "Great Sudanic Empires", type: "cards", items: [
        { title: "Ghana Empire", body: "Earliest of the three. Wealthy from gold and the trans-Saharan trade. Capital: Kumbi Saleh. Declined after attacks by the Almoravids (11th century)." },
        { title: "Mali Empire", body: "Founded by Sundiata Keita (13th century). Reached its peak under Mansa Musa, who made the famous pilgrimage to Mecca in 1324. Timbuktu became a centre of learning." },
        { title: "Songhai Empire", body: "Rose under Sonni Ali and Askia Muhammad (Askia the Great). Gao was its capital. Fell to a Moroccan invasion in 1591." },
        { title: "Kanem-Bornu", body: "Lake Chad region. Long-lived Islamic state. Mai Idris Alooma was its most famous ruler." }
      ]},
      { heading: "European Contact, Slave Trade and Abolition", type: "cards", items: [
        { title: "Trans-Atlantic slave trade", body: "From about the 15th to the 19th century. Millions of Africans were taken to the Americas. Weakened African societies and populations." },
        { title: "Abolition", body: "Britain outlawed the slave trade in 1807. Naval patrols and 'legitimate commerce' (palm oil, groundnuts) followed. Freetown (Sierra Leone) and Liberia were settled by freed slaves." },
        { title: "Explorers and missionaries", body: "Mungo Park, Richard Lander, David Livingstone and others opened the interior to European interest." }
      ]},
      { heading: "The Scramble and Partition", type: "cards", items: [
        { title: "Causes of the scramble", body: "Industrial Revolution (raw materials and markets), national rivalry, missionary zeal, strategic and prestige motives." },
        { title: "Berlin Conference 1884–85", body: "European powers set rules for dividing Africa (effective occupation) without African representatives. RECURRING!" },
        { title: "Colonial powers", body: "Britain, France, Germany, Belgium, Portugal, Italy and Spain." },
        { title: "Colonial rule", body: "British: indirect rule (Lugard). French: assimilation and direct rule. Portuguese: assimilado policy. Belgian: paternalism (Congo)." },
        { title: "Exceptions", body: "Ethiopia defeated Italy at Adwa (1896) and stayed independent (except 1936–41). Liberia was founded by freed American slaves." }
      ]},
      { heading: "Nationalism and Independence", type: "cards", items: [
        { title: "Causes", body: "World War II, the Atlantic Charter, Pan-Africanism, educated elites and ex-servicemen, and colonial economic exploitation." },
        { title: "Ghana 1957", body: "First black African colony in sub-Saharan Africa to gain independence, led by Kwame Nkrumah." },
        { title: "1960 'Year of Africa'", body: "Many states became independent, including Nigeria, Senegal, Mali, Congo and Cameroon." },
        { title: "Struggles", body: "Algeria (war with France, independence 1962), Kenya (Mau Mau), Angola and Mozambique (Portugal, 1975), Zimbabwe (1980), Namibia (1990)." },
        { title: "Apartheid", body: "South Africa's racial segregation policy. Ended with the 1994 elections; Nelson Mandela became president." }
      ]},
      { heading: "Pan-Africanism and Unity", type: "cards", items: [
        { title: "Key figures", body: "W.E.B. Du Bois, Marcus Garvey, Kwame Nkrumah, Julius Nyerere, Haile Selassie." },
        { title: "OAU 1963", body: "Formed in Addis Ababa. Casablanca bloc (radical, Nkrumah, wanted political union) and Monrovia bloc (moderate, Nigeria) disagreed on speed of unity." },
        { title: "AU 2002", body: "Replaced OAU. Aims at stronger unity, development and conflict resolution." }
      ]},
      { heading: "Trap Answers to Avoid", type: "warning", items: [
        "The Berlin Conference did not 'start' colonialism but set the rules for partition. Africans were not invited.",
        "Mansa Musa belonged to the MALI empire, not Songhai or Ghana.",
        "Ghana (West Africa) the ancient empire is not in the same place as modern Ghana (1957).",
        "Ethiopia and Liberia are often cited as the countries not colonised."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Ghana → Mali (Mansa Musa 1324) → Songhai (fell 1591). Abolition 1807. Berlin Conference 1884–85. Ghana independent 1957. Nigeria 1960. OAU 1963. AU 2002. Apartheid ended 1994." }
    ]
  },

}

export default GOVERNMENT_EXTRA_GUIDES
