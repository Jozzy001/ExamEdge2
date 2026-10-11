// EXAMEDGENG — LITERATURE STUDY GUIDES (EXTRA)
// Guides for Literature texts that did not have one yet.
// Keys match the topic names in the question bank exactly.
//
// HOW TO USE:
// 1. Save this file as src/data/studyGuidesLiteratureExtra.js
// 2. In src/data/studyGuides.js add at the top:
//      import LITERATURE_EXTRA_GUIDES from "./studyGuidesLiteratureExtra"
// 3. At the very end of the STUDY_GUIDES object (next to the other spreads), add:
//      ...LITERATURE_EXTRA_GUIDES,
//
// IMPORTANT — VERIFY BEFORE PUBLISHING:
// The guides for "The Tempest", "Othello", "Purple Hibiscus", "The Old Man and the Sea"
// and "Native Son" are based on well-documented plots.
// The guides for "Women of Owu", "A Woman in Her Prime", "Harvest of Corruption",
// "Faceless", "Lonely Days" and "Wives Revolt" are deliberately kept to broad themes and
// confirmed basics. Check character names, events and quotations against YOUR prescribed
// edition and add detail where needed. These guides carry a "Check your text" note.

const LITERATURE_EXTRA_GUIDES = {

  // ==========================================
  // LITERATURE — WOMEN OF OWU
  // ==========================================
  "Women of Owu": {
    subject: "Literature",
    title: "Women of Owu — Femi Osofisan",
    icon: "🔥",
    estimatedTime: "4 min read",
    sections: [
      { heading: "Overview", type: "text",
        content: "Women of Owu is a play by the Nigerian dramatist Femi Osofisan (2004), adapted from Euripides' Greek tragedy The Trojan Women. It is set during the 19th-century Owu War in Yorubaland, when the town of Owu was besieged and destroyed by an alliance of rival Yoruba forces. The play focuses on the women who survive the fall of the city and wait to be shared out as slaves and spoils of war." },
      { heading: "Check Your Text", type: "warning", items: [
        "Confirm the names of the main characters and the order of scenes in your edition before an exam.",
        "This guide gives the safe, widely known basics: author, source, setting, themes and style."
      ]},
      { heading: "Background Facts", type: "cards", items: [
        { title: "Author", body: "Femi Osofisan, Nigerian playwright, poet and scholar, known for socially engaged drama." },
        { title: "Source text", body: "Adapted from Euripides' The Trojan Women (about women after the fall of Troy). Osofisan relocates the story to Yoruba history. RECURRING!" },
        { title: "Setting", body: "The Owu War in the early 19th century (about 1820s), in the Yoruba region of present-day Nigeria. The war and the destruction of Owu are linked to the later rise of Ibadan and the shifting of Yoruba power." },
        { title: "Form", body: "A tragedy in the Greek tradition with a chorus, mixed with Yoruba performance elements (song, drum, dance and ritual)." }
      ]},
      { heading: "Major Themes", type: "cards", items: [
        { title: "The brutality and futility of war", body: "The play shows who really suffers in war: women and children lose homes, husbands, sons and freedom." },
        { title: "Suffering and endurance of women", body: "The women are treated as spoils, yet show courage, grief, dignity and resilience." },
        { title: "Greed and abuse of power", body: "Leaders and conquerors act out of ambition and pride, with little care for human cost." },
        { title: "Slavery and loss of freedom", body: "Defeated women face being shared out as slaves." },
        { title: "Justice, revenge and the role of the gods", body: "Characters question why the gods allow such cruelty and whether revenge solves anything." },
        { title: "Universality of human suffering", body: "A Greek story and a Yoruba story show that the pain of war is the same across cultures." }
      ]},
      { heading: "Style and Techniques", type: "cards", items: [
        { title: "Chorus", body: "A group of women who comment on events, express grief and give the community's voice." },
        { title: "Songs and rituals", body: "Music, dirge and ceremony make the performance communal and emotional." },
        { title: "Adaptation and local setting", body: "Greek tragedy is rooted in Yoruba history and idiom." },
        { title: "Irony and tragic reversal", body: "Fortune moves from power to ruin for the defeated." }
      ]},
      { heading: "Likely Exam Questions", type: "cards", items: [
        { title: "Who wrote Women of Owu?", body: "Femi Osofisan." },
        { title: "Which Greek play is it adapted from?", body: "The Trojan Women by Euripides." },
        { title: "What is the central theme?", body: "The suffering caused by war, especially to women." },
        { title: "What is the function of the chorus?", body: "Comment on action, express collective grief and link audience and stage." }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "For any theme question, state the theme, give one event from the play, then explain what it shows. Always link back to war, women's suffering and abuse of power." }
    ]
  },

  // ==========================================
  // LITERATURE — THE TEMPEST
  // ==========================================
  "The Tempest": {
    subject: "Literature",
    title: "The Tempest — William Shakespeare",
    icon: "🌪️",
    estimatedTime: "5 min read",
    sections: [
      { heading: "Overview", type: "text",
        content: "The Tempest is a play by William Shakespeare, written around 1610–11 and often called one of his last plays. It is usually classed as a romance or tragicomedy. Prospero, the rightful Duke of Milan, lives in exile on an island with his daughter Miranda. He uses magic to bring his enemies to the island, test them, and finally forgive them." },
      { heading: "Main Characters", type: "cards", items: [
        { title: "Prospero", body: "Rightful Duke of Milan, overthrown by his brother. A scholar and magician who controls the island with his books and staff." },
        { title: "Miranda", body: "Prospero's daughter, innocent and compassionate. Raised on the island, she falls in love with Ferdinand." },
        { title: "Ariel", body: "A spirit who serves Prospero (freed by him from the tree where the witch Sycorax trapped him). Longs for freedom." },
        { title: "Caliban", body: "Son of the witch Sycorax; the island's original inhabitant, enslaved by Prospero. He claims the island as his own." },
        { title: "Antonio", body: "Prospero's brother, who usurped the dukedom." },
        { title: "Alonso", body: "King of Naples who helped Antonio; father of Ferdinand." },
        { title: "Ferdinand", body: "Alonso's son. Falls in love with Miranda, passes Prospero's tests." },
        { title: "Sebastian", body: "Alonso's brother, who plots with Antonio to kill the king." },
        { title: "Gonzalo", body: "Honest old counsellor who once helped Prospero." },
        { title: "Stephano and Trinculo", body: "A drunken butler and a jester who plot with Caliban to overthrow Prospero." }
      ]},
      { heading: "Plot Summary", type: "steps", items: [
        "Twelve years earlier, Antonio, helped by Alonso, took Prospero's dukedom and set Prospero and baby Miranda adrift at sea. Gonzalo secretly supplied them with food, water and books.",
        "They land on an island. Prospero frees Ariel and enslaves Caliban.",
        "Prospero raises a tempest (storm) with Ariel's help to shipwreck Alonso, Antonio, Sebastian and their company.",
        "The survivors are scattered. Ferdinand meets Miranda and they fall in love. Prospero tests Ferdinand with hard labour.",
        "Antonio and Sebastian plot to kill Alonso; Ariel stops them. Caliban, Stephano and Trinculo plot to kill Prospero; Prospero's spirits frustrate them.",
        "Prospero confronts his enemies. He chooses forgiveness instead of revenge.",
        "He frees Ariel, gives up his magic (breaks his staff and drowns his book), and plans to return to Milan. The play ends with Prospero's epilogue asking the audience for applause and release."
      ]},
      { heading: "Major Themes", type: "cards", items: [
        { title: "Forgiveness and reconciliation", body: "Prospero chooses mercy over revenge. This is the central moral resolution. RECURRING!" },
        { title: "Power, control and usurpation", body: "Antonio usurps Prospero; Prospero rules the island; Caliban is subjugated; Antonio and Sebastian plot to seize power." },
        { title: "Colonialism and slavery", body: "Prospero's rule over Caliban and Ariel invites readings of colonial domination. Caliban says the island was his by inheritance from his mother." },
        { title: "Freedom and servitude", body: "Ariel works toward freedom; Caliban resents bondage; Prospero finally releases Ariel." },
        { title: "Magic and illusion", body: "Magic shapes events; the line between reality and illusion is blurred." },
        { title: "Nature vs nurture", body: "Can Caliban be educated, or is he naturally savage? Miranda is shaped by upbringing." },
        { title: "Love", body: "The love of Ferdinand and Miranda helps heal the old quarrel between Milan and Naples." }
      ]},
      { heading: "Setting and Style", type: "cards", items: [
        { title: "Setting", body: "A remote enchanted island, between Tunis and Naples in the story's world. The action takes place in a short time (about three hours in play-time), following the classical unities." },
        { title: "Symbols", body: "The tempest (disorder before order), Prospero's books and staff (power and knowledge), the island (a testing ground)." },
        { title: "Language", body: "Mostly blank verse, with prose for comic and low-status characters. Songs by Ariel add magic." },
        { title: "Play within the play (masque)", body: "A celebratory masque for Ferdinand and Miranda is staged by spirits, then Prospero reflects that life is like a dream." }
      ]},
      { heading: "Trap Answers to Avoid", type: "warning", items: [
        "Prospero is the rightful Duke of MILAN, not Naples. Alonso is King of Naples.",
        "Caliban is the son of Sycorax, not Prospero's son.",
        "Prospero ends by forgiving his enemies, not punishing them.",
        "Ariel is a spirit who serves Prospero. Caliban is a native of the island treated as a slave."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Remember: usurped duke + magic island + storm + forgiveness. Prospero (Milan), Antonio (usurper), Alonso (Naples), Ferdinand/Miranda (lovers), Ariel (spirit, freed), Caliban (enslaved native)." }
    ]
  },

  // ==========================================
  // LITERATURE — A WOMAN IN HER PRIME
  // ==========================================
  "A Woman in Her Prime": {
    subject: "Literature",
    title: "A Woman in Her Prime — Asare Konadu",
    icon: "🌺",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Overview", type: "text",
        content: "A Woman in Her Prime is a novel by the Ghanaian writer Asare Konadu (published in the 1960s). It is set in a traditional Akan village in Ghana and centres on a woman, Pokuwaa, and her desire for a child. It looks closely at marriage, motherhood, childlessness, belief in traditional religion and the pressure of village opinion on women." },
      { heading: "Check Your Text", type: "warning", items: [
        "Confirm the names of secondary characters, the exact sequence of events and the ending in your prescribed edition.",
        "This guide concentrates on the author, setting, central character and the main themes."
      ]},
      { heading: "Key Facts", type: "cards", items: [
        { title: "Author", body: "Asare Konadu, Ghanaian novelist and writer in the Akan tradition." },
        { title: "Setting", body: "A rural Akan community in Ghana, where tradition, family and shrines shape daily life." },
        { title: "Central character", body: "Pokuwaa, a woman whose worth in her community is closely tied to motherhood." },
        { title: "Genre", body: "African prose fiction (novel) with a realistic village setting." }
      ]},
      { heading: "Major Themes", type: "cards", items: [
        { title: "Motherhood and childlessness", body: "In the village, a woman's standing depends on having children. Barrenness brings shame and pressure." },
        { title: "Marriage and family expectations", body: "Husband, relatives and elders judge and influence the couple's life." },
        { title: "Tradition and belief", body: "Traditional religion, shrines and priests play a major role in how people explain and respond to problems." },
        { title: "Status of women", body: "Women's value is measured through marriage and children; the novel highlights the burdens they carry." },
        { title: "Community and gossip", body: "Public opinion, rumour and neighbours' judgements add to private suffering." },
        { title: "Faith, hope and perseverance", body: "The central character holds on to hope despite pressure." }
      ]},
      { heading: "Style", type: "cards", items: [
        { title: "Narrative", body: "Straightforward third-person storytelling with a realistic village background." },
        { title: "Local colour", body: "Proverbs, customs and rituals show Akan culture." }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "For essay questions, link every point to the same core ideas: motherhood, a woman's status, tradition versus personal feeling, and community pressure. Support each point with a specific incident from your copy." }
    ]
  },

  // ==========================================
  // LITERATURE — PURPLE HIBISCUS
  // ==========================================
  "Purple Hibiscus": {
    subject: "Literature",
    title: "Purple Hibiscus — Chimamanda Ngozi Adichie",
    icon: "🌸",
    estimatedTime: "5 min read",
    sections: [
      { heading: "Overview", type: "text",
        content: "Purple Hibiscus (2003) is the first novel by Nigerian writer Chimamanda Ngozi Adichie. It is narrated by fifteen-year-old Kambili Achike, who lives in Enugu in a wealthy home ruled by her strict, violent and deeply religious father, Eugene. A visit to her aunt in Nsukka shows her a different, freer way of life." },
      { heading: "Main Characters", type: "cards", items: [
        { title: "Kambili Achike", body: "The narrator, a quiet teenager who has been trained to silence and obedience. She grows in confidence." },
        { title: "Jaja (Chukwuka)", body: "Kambili's older brother. He eventually rebels openly against their father." },
        { title: "Eugene Achike (Papa)", body: "Wealthy factory owner and newspaper publisher, a respected public figure and generous donor, but a harsh, abusive father and husband. Rigid Catholic who rejects traditional Igbo religion." },
        { title: "Beatrice (Mama)", body: "Eugene's wife, who endures years of beatings in silence." },
        { title: "Aunty Ifeoma", body: "Eugene's sister, a university lecturer in Nsukka. Warm, outspoken, independent; raises her children with love and freedom despite little money." },
        { title: "Amaka, Obiora and Chima", body: "Ifeoma's children. Amaka is bold and teaches Kambili to speak her mind." },
        { title: "Papa-Nnukwu", body: "Eugene's father. A traditionalist who follows Igbo beliefs; Eugene refuses to accept him." },
        { title: "Father Amadi", body: "A young, cheerful priest who awakens Kambili's first feelings of love and shows a gentler faith." }
      ]},
      { heading: "Plot Summary", type: "steps", items: [
        "The story opens with the 'breaking' of the family on Palm Sunday, when Jaja refuses to go to communion and Eugene throws a missal at him, shattering the figurines on the étagère.",
        "Flashbacks show life in Enugu: strict schedules, prayers, harsh punishments, and Papa's public image as a defender of free speech through his newspaper, the Standard.",
        "Kambili and Jaja visit Aunty Ifeoma in Nsukka. They discover laughter, debate, a modest home and a more tolerant faith. Kambili meets Father Amadi and learns to speak and laugh.",
        "Back in Enugu, Eugene's violence escalates when he finds out that Kambili kept a painting of Papa-Nnukwu. He badly injures her, and she nearly dies.",
        "Ifeoma takes the children away; Kambili recovers. Ifeoma's family later migrates to the United States because of political repression and hardship at the university.",
        "Mama poisons Papa's tea. Jaja takes the blame and goes to prison.",
        "In the end Jaja is released and the family prepares for a new beginning. The novel closes with hope that Jaja's release will be like the long-awaited rain."
      ]},
      { heading: "Major Themes", type: "cards", items: [
        { title: "Domestic violence and abuse of power", body: "Eugene's rule over his family shows how power can turn into cruelty. RECURRING!" },
        { title: "Religious extremism vs tolerance", body: "Eugene's rigid Catholicism contrasts with Ifeoma's more open faith and Papa-Nnukwu's Igbo beliefs." },
        { title: "Freedom and silence", body: "Kambili's silence is gradually replaced by speech and laughter. Voice means freedom. RECURRING!" },
        { title: "Postcolonial identity", body: "Eugene's contempt for Igbo traditions shows internalised colonial attitudes." },
        { title: "Political oppression", body: "A military coup and a dictatorship form the political background; Eugene's newspaper challenges the regime." },
        { title: "Coming of age and love", body: "Kambili matures; her feelings for Father Amadi mark her emotional awakening." },
        { title: "Family and loyalty", body: "Jaja's sacrifice and Mama's desperate act show family loyalty under pressure." }
      ]},
      { heading: "Symbols and Style", type: "cards", items: [
        { title: "The purple hibiscus", body: "Rare flower grown by Aunty Ifeoma and her son; symbol of freedom, hope and new possibilities. RECURRING!" },
        { title: "Red hibiscus", body: "Common flower in the Achike garden; symbol of the ordinary and controlled life at home." },
        { title: "Palm Sunday and the missal", body: "Jaja's defiance and the broken figurines mark the start of the family's collapse and change." },
        { title: "Rain", body: "Rain is a sign of renewal and relief at the end." },
        { title: "Narrative technique", body: "First-person narration by Kambili, with flashbacks. Her restrained, observant voice shows what she cannot say aloud. Igbo words and proverbs add local colour." },
        { title: "Setting", body: "Enugu (the Achike home), Nsukka (Ifeoma's home), Abba (the family's ancestral village), all in Nigeria." }
      ]},
      { heading: "Trap Answers to Avoid", type: "warning", items: [
        "Eugene is Kambili's FATHER. Aunty Ifeoma is his sister, not his wife.",
        "Mama poisons Eugene; Jaja takes the blame and goes to prison.",
        "Papa-Nnukwu is Eugene's father, whom Eugene refuses to call a Christian.",
        "Kambili, not Jaja, is the narrator."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Purple Hibiscus = freedom. Palm Sunday = the break. Nsukka = freedom and warmth. Enugu = control and fear. Kambili's voice grows from silence to speech. Eugene is respected in public but abusive at home." }
    ]
  },

  // ==========================================
  // LITERATURE — THE OLD MAN AND THE SEA
  // ==========================================
  "The Old Man and the Sea": {
    subject: "Literature",
    title: "The Old Man and the Sea — Ernest Hemingway",
    icon: "🎣",
    estimatedTime: "4 min read",
    sections: [
      { heading: "Overview", type: "text",
        content: "The Old Man and the Sea (1952) is a short novel by the American writer Ernest Hemingway. It tells of Santiago, an old Cuban fisherman, who battles a huge marlin far out in the Gulf Stream. It won the Pulitzer Prize in 1953 and contributed to Hemingway's Nobel Prize for Literature in 1954. Do not confuse it with The Old Man and the Medal (Ferdinand Oyono)." },
      { heading: "Main Characters", type: "cards", items: [
        { title: "Santiago", body: "Elderly Cuban fisherman, skilled, proud, patient and determined. He has gone 84 days without catching a fish." },
        { title: "Manolin", body: "A young boy whom Santiago taught to fish. His parents made him move to a luckier boat, but he still loves and helps the old man." },
        { title: "The marlin", body: "A giant fish, Santiago's worthy opponent, whom he respects and calls his brother." },
        { title: "Sharks", body: "Attack the dead marlin tied to the boat and eat most of it." },
        { title: "Joe DiMaggio", body: "Baseball star Santiago admires; a symbol of endurance and excellence." }
      ]},
      { heading: "Plot Summary", type: "steps", items: [
        "Santiago has gone 84 days without a catch and is thought unlucky. Manolin has been sent to another boat but looks after the old man.",
        "On the 85th day Santiago sails far out alone.",
        "A huge marlin takes his bait. For about three days and nights the fish drags the skiff while Santiago holds the line, suffering cramps and cuts.",
        "He finally harpoons and kills the marlin and lashes it to the side of the boat.",
        "Sharks attack the carcass. Santiago fights them with his harpoon, knife and club but loses the marlin's flesh.",
        "He returns to harbour with only the skeleton, exhausted. He sleeps and dreams of lions on an African beach.",
        "Manolin finds him, cries, and promises to fish with him again."
      ]},
      { heading: "Major Themes", type: "cards", items: [
        { title: "Perseverance and endurance", body: "Santiago refuses to give up despite age, pain and hunger. RECURRING!" },
        { title: "Dignity in defeat", body: "'A man can be destroyed but not defeated.' Santiago loses the fish but keeps his honour." },
        { title: "Man versus nature", body: "The struggle with the marlin and sharks shows human courage against natural forces." },
        { title: "Pride and respect", body: "Santiago's pride drives him far out, yet he respects the marlin as an equal." },
        { title: "Friendship and mentorship", body: "The bond between Santiago and Manolin." },
        { title: "Isolation and loneliness", body: "Santiago spends days alone at sea." },
        { title: "Skill and experience", body: "Old age has not removed Santiago's knowledge of the sea." }
      ]},
      { heading: "Symbols and Style", type: "cards", items: [
        { title: "Santiago as a Christ-like figure", body: "His suffering, bleeding hands and carrying the mast up the hill echo the Crucifixion." },
        { title: "The marlin", body: "Symbol of the ideal, the great achievement and nature's nobility." },
        { title: "The sharks", body: "Forces that destroy achievement; critics link them to greed, critics and the cost of success." },
        { title: "Lions on the beach", body: "Symbol of youth, strength and hope." },
        { title: "Style", body: "Simple, spare prose and short sentences ('iceberg theory'). Third-person narrator, with Santiago's thoughts and speech to himself." }
      ]},
      { heading: "Trap Answers to Avoid", type: "warning", items: [
        "Santiago is Cuban, and the author is American.",
        "He goes 84 days without a fish and sets out on the 85th day.",
        "Santiago kills the marlin but sharks eat most of it. He returns with the skeleton.",
        "Do not confuse this with The Old Man and the Medal, set in colonial Cameroon."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "84 days, 3 days and nights, marlin, sharks, skeleton. Theme: 'A man can be destroyed but not defeated.' Manolin = loyalty. Lions = youth and hope." }
    ]
  },

  // ==========================================
  // LITERATURE — HARVEST OF CORRUPTION
  // ==========================================
  "Harvest of Corruption": {
    subject: "Literature",
    title: "Harvest of Corruption — Frank Ogodo Ogbeche",
    icon: "💰",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Overview", type: "text",
        content: "Harvest of Corruption is a Nigerian play by Frank Ogodo Ogbeche. It is a social satire on corruption in Nigerian public life and on the suffering of ordinary people under greedy and selfish leaders. Its title suggests that corruption, once planted, produces a bitter harvest for society." },
      { heading: "Check Your Text", type: "warning", items: [
        "Confirm the names of characters, the order of scenes and the ending in your prescribed edition.",
        "This guide gives the author, genre, setting and the themes that are safe to learn."
      ]},
      { heading: "Key Facts", type: "cards", items: [
        { title: "Author", body: "Frank Ogodo Ogbeche, Nigerian playwright." },
        { title: "Genre", body: "Drama with satire and social criticism." },
        { title: "Setting", body: "Contemporary Nigerian society, with its offices, homes and public life." },
        { title: "Purpose", body: "To expose corrupt leaders and urge honesty, justice and good governance." }
      ]},
      { heading: "Major Themes", type: "cards", items: [
        { title: "Corruption and abuse of office", body: "Public funds and positions are used for private gain. RECURRING!" },
        { title: "Poverty and suffering of the masses", body: "Ordinary citizens bear the cost of leaders' greed." },
        { title: "Greed and materialism", body: "The pursuit of wealth and status leads to moral decay." },
        { title: "Bad leadership", body: "Leaders neglect duty and serve themselves." },
        { title: "Hypocrisy", body: "People preach virtue publicly while acting dishonestly." },
        { title: "Justice and retribution", body: "Corruption brings consequences; the play calls for accountability." },
        { title: "Moral decay and need for reform", body: "The play urges citizens to reject dishonesty and demand change." }
      ]},
      { heading: "Style", type: "cards", items: [
        { title: "Satire", body: "Ridicules the behaviour of corrupt officials to provoke reform." },
        { title: "Irony", body: "Gap between respectable appearance and corrupt reality." },
        { title: "Dialogue and local speech", body: "Everyday Nigerian speech makes the characters believable." }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "The title is a metaphor: corruption is the seed and society reaps a bitter harvest. In any answer, link each theme to a specific character's action in your own copy of the text." }
    ]
  },

  // ==========================================
  // LITERATURE — OTHELLO
  // ==========================================
  "Othello": {
    subject: "Literature",
    title: "Othello — William Shakespeare",
    icon: "🗡️",
    estimatedTime: "5 min read",
    sections: [
      { heading: "Overview", type: "text",
        content: "Othello (about 1603–04) is a tragedy by William Shakespeare. Othello, a Moorish general serving Venice, secretly marries Desdemona, a Venetian senator's daughter. His ensign Iago, angry at being passed over for promotion, manipulates him into believing that Desdemona is unfaithful with Cassio. Othello's jealousy leads him to murder his innocent wife; when he learns the truth, he kills himself." },
      { heading: "Main Characters", type: "cards", items: [
        { title: "Othello", body: "Moorish general in the Venetian army. Noble, respected and trusting, but insecure as an outsider. His fall is caused by jealousy and credulity." },
        { title: "Desdemona", body: "Brabantio's daughter. Loving, loyal and innocent; chooses Othello despite her father's objection." },
        { title: "Iago", body: "Othello's ensign (standard-bearer). Cunning, deceitful and motiveless in appearance, though he cites the lost promotion and suspicion that Othello slept with his wife Emilia. Called 'honest Iago' by others. RECURRING!" },
        { title: "Cassio", body: "Othello's lieutenant, young and educated. Iago uses him to trap Othello." },
        { title: "Emilia", body: "Iago's wife and Desdemona's attendant. She picks up the handkerchief, and in the end exposes Iago's treachery." },
        { title: "Roderigo", body: "A foolish Venetian in love with Desdemona, used and exploited by Iago." },
        { title: "Brabantio", body: "Desdemona's father, a Venetian senator, who opposes the marriage." },
        { title: "Bianca", body: "Cassio's mistress, who is given the handkerchief by Cassio to copy." },
        { title: "The Duke of Venice and Lodovico", body: "Representatives of Venetian authority." }
      ]},
      { heading: "Plot Summary", type: "steps", items: [
        "Act 1 (Venice): Othello and Desdemona secretly marry. Iago and Roderigo rouse Brabantio, who accuses Othello. Othello defends himself before the Duke. He is sent to Cyprus to defend it against the Turks.",
        "Act 2 (Cyprus): The Turkish fleet is wrecked in a storm. Iago gets Cassio drunk, leading to a brawl, and Othello dismisses Cassio.",
        "Act 3: Iago persuades Cassio to ask Desdemona to plead for him. He then hints to Othello that Desdemona and Cassio are having an affair. Emilia finds Desdemona's handkerchief (Othello's first gift) and gives it to Iago, who plants it with Cassio.",
        "Act 4: Othello is driven into a rage and strikes Desdemona publicly. He orders Iago to kill Cassio.",
        "Act 5: Roderigo's attack on Cassio fails; Iago kills Roderigo. Othello smothers Desdemona in bed. Emilia reveals the truth about the handkerchief and is killed by Iago. Othello learns the truth, wounds Iago, and stabs himself, dying beside Desdemona.",
        "Iago is arrested; Cassio is made governor of Cyprus; Lodovico sends Iago for punishment."
      ]},
      { heading: "Major Themes", type: "cards", items: [
        { title: "Jealousy", body: "The 'green-eyed monster' destroys Othello's love and judgement. RECURRING!" },
        { title: "Deception and manipulation", body: "Iago's lies and half-truths turn trust into suspicion." },
        { title: "Appearance versus reality", body: "'Honest Iago' is a villain, while Desdemona seems guilty but is innocent." },
        { title: "Race and prejudice", body: "Othello is an outsider in Venice; racial insults and fears are used against him." },
        { title: "Love and trust", body: "The marriage collapses when love gives way to suspicion." },
        { title: "Reputation and honour", body: "Cassio and Othello are both obsessed with reputation." },
        { title: "Gender and women's roles", body: "Desdemona and Emilia are judged and controlled by men; Emilia's speech exposes double standards." },
        { title: "Evil and its consequences", body: "Iago's wickedness brings death to many, but he is finally caught." }
      ]},
      { heading: "Symbols and Style", type: "cards", items: [
        { title: "The handkerchief", body: "Othello's first gift to Desdemona. It symbolises love and fidelity, and becomes the 'ocular proof' that Iago uses." },
        { title: "Light and dark; black and white", body: "Used to suggest innocence, evil and race." },
        { title: "Animal imagery", body: "Iago uses animal and beast images to degrade Othello and Desdemona." },
        { title: "Soliloquy", body: "Iago's soliloquies show his plans to the audience, creating dramatic irony." },
        { title: "Dramatic irony", body: "The audience knows Iago is a liar while Othello trusts him." },
        { title: "Setting", body: "Venice (order and law) and Cyprus (isolation, war and passion)." }
      ]},
      { heading: "Trap Answers to Avoid", type: "warning", items: [
        "Iago is Othello's ENSIGN, not his lieutenant. Cassio is the lieutenant.",
        "Emilia is Iago's wife and Desdemona's maid, not Cassio's wife.",
        "Othello smothers Desdemona; he does not stab her. He stabs himself at the end.",
        "Othello is a Moor in Venetian service, and the setting moves from Venice to Cyprus."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Remember the chain: promotion denied → Iago's revenge → handkerchief → jealousy → murder → truth → suicide. Key words: jealousy, deceit, trust, race, honour. Iago = ensign, Cassio = lieutenant." }
    ]
  },

  // ==========================================
  // LITERATURE — FACELESS
  // ==========================================
  "Faceless": {
    subject: "Literature",
    title: "Faceless — Amma Darko",
    icon: "🏙️",
    estimatedTime: "4 min read",
    sections: [
      { heading: "Overview", type: "text",
        content: "Faceless (2003) is a novel by the Ghanaian writer Amma Darko. It is set in Accra and exposes the life of street children who are abused, exploited and neglected, and the adults and institutions that fail them. The title refers to the many 'faceless' victims whom society ignores." },
      { heading: "Check Your Text", type: "warning", items: [
        "Confirm the names, relationships and chronology of events against your prescribed edition.",
        "This guide covers the safe basics: author, setting, issues and themes, with the best-known characters."
      ]},
      { heading: "Key Facts", type: "cards", items: [
        { title: "Author", body: "Amma Darko, Ghanaian novelist known for social-realist fiction (also wrote Beyond the Horizon)." },
        { title: "Setting", body: "Accra, Ghana, including the Agbogbloshie area known as 'Sodom and Gomorrah', a slum and street-life world of poverty and danger." },
        { title: "Subject", body: "Street children, child abuse and exploitation, poverty, neglect and the weakness of social systems." },
        { title: "Best-known characters", body: "Fofo (a street girl), Baby T (a young street child), Maa Tsuru (Fofo's mother), Kabria (a young woman linked to the story through an NGO called MUTE), and Poison/Odarkwei and other adults who exploit children." }
      ]},
      { heading: "Major Themes", type: "cards", items: [
        { title: "Child abuse and exploitation", body: "Children on the streets are abused physically and sexually by adults who profit from them. RECURRING!" },
        { title: "Poverty and its consequences", body: "Poverty pushes families and children into the streets and into danger." },
        { title: "Parental neglect and broken families", body: "Failure of parents and guardians leaves children unprotected." },
        { title: "Social injustice and failure of institutions", body: "Police, officials and society overlook the children's plight." },
        { title: "Role of NGOs and activism", body: "Organisations like MUTE work to rescue children and expose abusers; the novel shows both their value and their limits." },
        { title: "Urban decay and inequality", body: "The contrast between the wealthy and the slum-dwellers." },
        { title: "Women's suffering and resilience", body: "Mothers and young women struggle for survival." },
        { title: "Hope and justice", body: "Efforts of caring individuals to bring abusers to account." }
      ]},
      { heading: "Style", type: "cards", items: [
        { title: "Realism and social criticism", body: "Direct, unsentimental language portraying harsh realities." },
        { title: "Multiple viewpoints", body: "The story is told through different characters and moves between past and present." },
        { title: "Local language and setting", body: "Ghanaian expressions and street slang add authenticity." }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "The 'faceless' are the ignored victims. In answers, link each incident to abuse of children, poverty, or the failure of adults and institutions, and mention how an NGO such as MUTE brings the story to light." }
    ]
  },

  // ==========================================
  // LITERATURE — LONELY DAYS
  // ==========================================
  "Lonely Days": {
    subject: "Literature",
    title: "Lonely Days — Bayo Adebowale",
    icon: "🕯️",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Overview", type: "text",
        content: "Lonely Days is a Nigerian novel by Bayo Adebowale. It centres on Yabisi, a young widow in a Yoruba community, and shows how widowhood exposes her to harsh traditional practices and mistreatment by her late husband's family. It is a protest against cruelty to widows and the unfair treatment of women." },
      { heading: "Check Your Text", type: "warning", items: [
        "Confirm the names of other characters, the order of events and the ending in your prescribed edition.",
        "This guide concentrates on the author, setting, main character and the themes that are widely recognised."
      ]},
      { heading: "Key Facts", type: "cards", items: [
        { title: "Author", body: "Bayo Adebowale, Nigerian novelist and academic." },
        { title: "Main character", body: "Yabisi, a widow who suffers loneliness, abuse and exploitation." },
        { title: "Setting", body: "A Yoruba community in Nigeria, with traditional customs of widowhood, burial rites and inheritance." },
        { title: "Genre", body: "Prose fiction with social protest." }
      ]},
      { heading: "Major Themes", type: "cards", items: [
        { title: "Widowhood and loneliness", body: "A widow is isolated and judged after her husband's death. The title reflects her emotional suffering. RECURRING!" },
        { title: "Mistreatment by in-laws", body: "Relatives of the dead husband deprive and humiliate the widow." },
        { title: "Harmful traditional practices", body: "Customs that demean widows and deny them property or voice are criticised." },
        { title: "Inheritance and property rights", body: "Women are often denied a fair share of a husband's estate." },
        { title: "Patriarchy and the status of women", body: "Men and elders control decisions while women have little power." },
        { title: "Greed and cruelty", body: "Relatives are driven by selfishness and the wish to seize property." },
        { title: "Courage and resilience", body: "The widow faces hardship with strength and hope." },
        { title: "Tradition versus change", body: "The novel urges reform of unjust customs." }
      ]},
      { heading: "Style", type: "cards", items: [
        { title: "Social realism", body: "Describes everyday life in a Yoruba community." },
        { title: "Proverbs and cultural references", body: "Yoruba sayings and customs enrich the narrative." },
        { title: "Sympathetic narration", body: "The narrator invites sympathy for the widow and condemns injustice." }
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Link every theme to widowhood: loneliness, in-law cruelty, property denial and harmful customs. Use specific incidents from your copy to support each point." }
    ]
  },

  // ==========================================
  // LITERATURE — NATIVE SON
  // ==========================================
  "Native Son": {
    subject: "Literature",
    title: "Native Son — Richard Wright",
    icon: "⛓️",
    estimatedTime: "5 min read",
    sections: [
      { heading: "Overview", type: "text",
        content: "Native Son (1940) is a novel by the African-American writer Richard Wright. It is set in Chicago's South Side in the 1930s and follows Bigger Thomas, a poor young Black man who accidentally kills a white woman and then deliberately kills his girlfriend. The novel is a powerful study of how racism, poverty and fear shape violence and identity. It is divided into three books: Fear, Flight and Fate." },
      { heading: "Main Characters", type: "cards", items: [
        { title: "Bigger Thomas", body: "Twenty-year-old Black youth living in a cramped apartment with his mother, brother Buddy and sister Vera. Angry, frightened and trapped by the limits placed on Black people." },
        { title: "Mr Dalton", body: "Wealthy white real-estate owner who hires Bigger as a chauffeur. Gives money to Black charities, yet profits from overpriced housing for Black families." },
        { title: "Mrs Dalton", body: "Mr Dalton's blind wife, who is kindly and paternalistic." },
        { title: "Mary Dalton", body: "Daughter of the Daltons, rebellious and sympathetic to Communism." },
        { title: "Jan Erlone", body: "Mary's boyfriend, a Communist who tries to befriend Bigger but unknowingly makes him uncomfortable." },
        { title: "Bessie Mears", body: "Bigger's girlfriend. Bigger forces her to help him and then kills her." },
        { title: "Boris Max", body: "A Communist lawyer who defends Bigger in court and argues that society is responsible." },
        { title: "Buckley", body: "The state's attorney who prosecutes Bigger and appeals to racial fear." }
      ]},
      { heading: "Plot Summary", type: "steps", items: [
        "Book One — Fear: Bigger gets a job as the Daltons' chauffeur. He drives Mary and Jan around Chicago; Mary, drunk, is helped to her room by Bigger.",
        "Afraid of being found in her bedroom by Mrs Dalton, Bigger accidentally smothers Mary with a pillow. He burns her body in the furnace.",
        "Bigger tries to throw suspicion on Jan and fakes a kidnapping note demanding ransom.",
        "Book Two — Flight: Bigger tells Bessie. When the body is discovered, Bigger flees. He rapes and murders Bessie, fearing she will betray him, and throws her body down an air shaft.",
        "A police hunt captures him. Book Three — Fate: At the trial, Max argues that Bigger is the product of a racist society, but the court sentences him to death.",
        "In the end, Bigger accepts his identity and what he has done, and awaits execution."
      ]},
      { heading: "Major Themes", type: "cards", items: [
        { title: "Racism and its psychological effect", body: "Racial segregation and discrimination limit Bigger's life and create fear, rage and shame. RECURRING!" },
        { title: "Poverty and environment", body: "Cramped housing and no opportunity shape Bigger's choices." },
        { title: "Fear and violence", body: "Fear drives Bigger's actions, hence the title of Book One." },
        { title: "Identity and self-realisation", body: "Bigger feels free and alive only after the killings; he finally defines himself." },
        { title: "Social injustice and the legal system", body: "The trial shows prejudice, with the press and prosecution appealing to racial fear." },
        { title: "Hypocrisy of white liberalism and charity", body: "Mr Dalton gives to Black charities while profiting from Black poverty." },
        { title: "Communism and ideology", body: "Jan and Max represent left-wing responses to racism; Bigger remains suspicious of them." },
        { title: "Gender and violence", body: "Mary and Bessie are both victims of Bigger's desperation." }
      ]},
      { heading: "Symbols and Style", type: "cards", items: [
        { title: "The furnace", body: "Symbol of hidden guilt and the destruction of evidence; also the engine of Bigger's fate." },
        { title: "The rat (opening scene)", body: "Foreshadows Bigger's own trapped state and violent response." },
        { title: "Blindness (Mrs Dalton)", body: "White society's blindness to Black suffering." },
        { title: "The white cat", body: "Appears at the murder scene and unsettles Bigger, symbolising guilt and the hidden watching eye of whiteness." },
        { title: "Naturalism", body: "Environment and social forces shape character and fate." },
        { title: "Structure", body: "Three books: Fear, Flight, Fate." }
      ]},
      { heading: "Trap Answers to Avoid", type: "warning", items: [
        "Bigger kills Mary accidentally (fear of discovery) but kills Bessie deliberately.",
        "Max defends Bigger. Buckley is the prosecutor.",
        "Mr Dalton owns property and hires Bigger as a chauffeur. He is not a politician.",
        "The setting is Chicago in the 1930s, not the American South."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Three books: Fear → Flight → Fate. Mary (accident, furnace), Bessie (murder, air shaft), Max (defence lawyer), Buckley (prosecutor). Core themes: racism, fear, poverty, injustice and identity." }
    ]
  },

  // ==========================================
  // LITERATURE — WIVES REVOLT
  // ==========================================
  "Wives Revolt": {
    subject: "Literature",
    title: "Wives' Revolt — Themes and Study Notes",
    icon: "✊",
    estimatedTime: "3 min read",
    sections: [
      { heading: "Overview", type: "text",
        content: "Wives' Revolt is a drama text about women's protest against injustice, inequality or unfair treatment in the home and community. Plays on this subject usually show women uniting to challenge male authority, harmful customs or abuse of power, and ask whether tradition should change." },
      { heading: "Check Your Text", type: "warning", items: [
        "I have not confirmed the exact author, character names or plot details of this text.",
        "Before publishing this guide, replace the general notes below with the verified details from your prescribed edition: author, main characters, plot summary and key quotations."
      ]},
      { heading: "Themes Commonly Explored in This Kind of Play", type: "cards", items: [
        { title: "Women's rights and protest", body: "Women organise to demand fair treatment, respect and a voice." },
        { title: "Male authority and patriarchy", body: "Husbands and elders hold power; the play questions whether that power is always just." },
        { title: "Marriage and gender roles", body: "Expectations for wives and husbands, and the strain when roles are challenged." },
        { title: "Tradition versus change", body: "Customs are examined and the need for reform is considered." },
        { title: "Solidarity and unity", body: "Women's collective action succeeds where individual protest may fail." },
        { title: "Conflict and resolution", body: "The revolt creates a crisis that leads to dialogue, compromise or reform." }
      ]},
      { heading: "How to Answer Questions", type: "steps", items: [
        "Identify the theme asked about (for example gender roles, protest or tradition).",
        "Name the character or episode in the play that shows it.",
        "Explain what that incident shows about the issue.",
        "Link it to the play's overall message.",
        "Finish with a brief judgement of whether the author supports change."
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "For any play, always answer with: theme, character, event and message. Add your verified plot and character notes to this guide so that you can revise from it." }
    ]
  },

}

export default LITERATURE_EXTRA_GUIDES
