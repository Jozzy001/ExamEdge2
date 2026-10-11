// EXAMEDGENG — CRK STUDY GUIDES (EXTRA)
// Guides for Christian Religious Knowledge topics that did not have one yet.
// Keys match the CRK topic list exactly.
//
// HOW TO USE:
// 1. Save as src/data/studyGuidesCRKExtra.js
// 2. In src/data/studyGuides.js add at the top:
//      import CRK_EXTRA_GUIDES from "./studyGuidesCRKExtra"
// 3. At the end of the STUDY_GUIDES object (next to the other spreads), add:
//      ...CRK_EXTRA_GUIDES,

const CRK_EXTRA_GUIDES = {

  "The Creation": {
    subject: "CRK", title: "The Creation (Genesis 1-2)",
    icon: "🌍", estimatedTime: "3 min read",
    sections: [
      { heading: "Overview", type: "text",
        content: "Genesis 1-2 tells how God made the universe and everything in it by His word, and made human beings last as the crown of creation. Two accounts are given: Genesis 1 (a sequence of six days and a day of rest) and Genesis 2 (a closer look at the creation of man, woman and the Garden of Eden)." },
      { heading: "The Six Days (Genesis 1)", type: "steps", items: [
        "Day 1: Light. God separated light from darkness (day and night).",
        "Day 2: The firmament (sky), separating the waters above from the waters below.",
        "Day 3: Dry land and seas, and then vegetation (plants and trees).",
        "Day 4: The sun, moon and stars, to mark days, seasons and years.",
        "Day 5: Sea creatures and birds.",
        "Day 6: Land animals, then MAN, male and female, in God's image.",
        "Day 7: God rested, blessed and made the seventh day holy (the Sabbath)."
      ]},
      { heading: "Creation of Man and Woman (Genesis 2)", type: "cards", items: [
        { title: "Man", body: "Formed from the dust of the ground. God breathed into his nostrils the breath of life and he became a living being." },
        { title: "Garden of Eden", body: "God planted a garden for the man to till and keep. It had the tree of life and the tree of the knowledge of good and evil. Four rivers flowed from it: Pishon, Gihon, Tigris and Euphrates." },
        { title: "Naming the animals", body: "Adam named the animals but found no suitable helper among them." },
        { title: "Woman", body: "God put Adam into a deep sleep, took a rib and made woman. Adam called her woman, because she was taken out of man." },
        { title: "Marriage", body: "A man leaves his father and mother and is joined to his wife, and they become one flesh." },
      ]},
      { heading: "Lessons", type: "cards", items: [
        { title: "God is the sole Creator", body: "Everything depends on Him. He is all-powerful and orderly." },
        { title: "Human dignity", body: "Man was made in God's image with dominion over creation. Every person has value." },
        { title: "Work is good", body: "Adam was given work to do before the fall." },
        { title: "Rest", body: "The Sabbath teaches rest and worship." },
        { title: "Marriage and family", body: "Instituted by God." },
        { title: "Stewardship", body: "Humans are to care for creation." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Man was created on the SIXTH day, after the animals.",
        "God rested on the SEVENTH day, not because He was tired but to set it apart as holy.",
        "Woman was made from Adam's rib, not from dust.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Order: light, sky, land and plants, sun-moon-stars, fish and birds, animals and man, rest. Man = dust + breath of God. Woman = rib." }
    ]
  },

  "The Fall of Man": {
    subject: "CRK", title: "The Fall of Man (Genesis 3-11)",
    icon: "🍎", estimatedTime: "3 min read",
    sections: [
      { heading: "Overview", type: "text",
        content: "God told Adam not to eat the fruit of the tree of the knowledge of good and evil, warning that he would die. Adam and Eve disobeyed, and sin and death entered the world. Genesis 3-11 shows how sin then spread: Cain, the flood and Babel." },
      { heading: "The Fall (Genesis 3)", type: "steps", items: [
        "The serpent (the tempter) questioned God's command and told Eve she would not die but would be like God.",
        "Eve saw that the fruit was good to eat, pleasing to the eye and desirable for wisdom. She ate and gave some to Adam, who also ate.",
        "They realised they were naked, sewed fig leaves and hid from God.",
        "God asked questions. Adam blamed Eve (and God), Eve blamed the serpent.",
        "God pronounced judgements and then clothed them with garments of skin.",
        "They were driven out of Eden. Cherubim and a flaming sword guarded the way to the tree of life."
      ]},
      { heading: "Consequences", type: "cards", items: [
        { title: "The serpent", body: "Cursed above all animals, to crawl on its belly. Enmity between its offspring and the woman's offspring (Genesis 3:15 points to the defeat of evil)." },
        { title: "The woman", body: "Pain in childbirth. Her desire would be for her husband, who would rule over her." },
        { title: "The man", body: "The ground was cursed. He would toil and sweat for food, among thorns and thistles. He would return to dust." },
        { title: "Both", body: "Shame, fear, broken fellowship with God, expulsion from Eden, and physical death." },
      ]},
      { heading: "Sin Spreads", type: "cards", items: [
        { title: "Cain and Abel (Genesis 4)", body: "Both brought offerings. God accepted Abel's and not Cain's. Cain killed Abel out of jealousy. God asked where Abel was and Cain answered 'Am I my brother's keeper?' Cain became a wanderer." },
        { title: "Noah and the flood (Genesis 6-9)", body: "Human wickedness grew. God sent a flood but saved Noah, his family and animals in the ark. After the flood God made a covenant, with the rainbow as its sign, never to destroy the earth by flood again." },
        { title: "Tower of Babel (Genesis 11)", body: "People built a tower out of pride. God confused their language and scattered them." },
      ]},
      { heading: "Lessons", type: "cards", items: [
        { title: "Disobedience has consequences", body: "Sin separates people from God." },
        { title: "Temptation", body: "Sin starts with doubt about God's word. Avoid blaming others." },
        { title: "God's mercy", body: "He clothed Adam and Eve, protected Cain with a mark and saved Noah." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "The Bible does not name the fruit as an apple.",
        "God said in the day you eat you will die. Spiritual death came at once and physical death later.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Fall = disobedience, shame, blame, curse, expulsion. Then Cain (jealousy), Flood (wickedness, ark, rainbow), Babel (pride)." }
    ]
  },

  "The Call of Abraham": {
    subject: "CRK", title: "The Call of Abraham",
    icon: "⭐", estimatedTime: "3 min read",
    sections: [
      { heading: "Overview", type: "text",
        content: "Abram was a descendant of Shem, born in Ur of the Chaldeans. God called him to leave his country, his relatives and his father's house and go to a land He would show him. Abraham is known as the father of faith." },
      { heading: "The Call (Genesis 12)", type: "cards", items: [
        { title: "God's command", body: "Leave your country, your people and your father's household. Go to the land I will show you." },
        { title: "God's promises", body: "A great nation, a great name, blessing, those who bless him will be blessed and those who curse him will be cursed, and all peoples on earth would be blessed through him." },
        { title: "His response", body: "Abram obeyed at the age of 75, taking his wife Sarai, his nephew Lot and their belongings. He went to Canaan and built altars to God." },
      ]},
      { heading: "Key Events", type: "cards", items: [
        { title: "Separation from Lot (Genesis 13)", body: "Quarrels between their herdsmen. Abram let Lot choose first. Lot chose the well-watered plain near Sodom." },
        { title: "Melchizedek (Genesis 14)", body: "After rescuing Lot, Abram was blessed by Melchizedek, king of Salem and priest of God Most High, and gave him a tenth." },
        { title: "The covenant (Genesis 15)", body: "God promised descendants as many as the stars. Abram believed and it was counted to him as righteousness." },
        { title: "Hagar and Ishmael (Genesis 16)", body: "Sarai gave Hagar to Abram out of impatience. Ishmael was born." },
        { title: "Circumcision (Genesis 17)", body: "Sign of the covenant. Names changed: Abram to ABRAHAM (father of many nations), Sarai to SARAH." },
        { title: "Visitors and Sodom (Genesis 18-19)", body: "Three visitors promised a son. Abraham pleaded for Sodom. Sodom was destroyed and Lot's family rescued; Lot's wife looked back and became a pillar of salt." },
        { title: "Isaac born (Genesis 21)", body: "Born when Abraham was 100 and Sarah was old. Hagar and Ishmael sent away." },
        { title: "Test of faith (Genesis 22)", body: "God told Abraham to offer Isaac on a mountain in Moriah. At the last moment an angel stopped him and a ram was provided. God renewed His promises." },
      ]},
      { heading: "Lessons", type: "cards", items: [
        { title: "Faith and obedience", body: "Abraham went without knowing where." },
        { title: "Trust in God's timing", body: "Impatience (Hagar) brings problems." },
        { title: "Generosity and peace", body: "He let Lot choose first." },
        { title: "Intercession", body: "He prayed for Sodom." },
        { title: "Total commitment", body: "He was willing to give up his only son." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Abraham was 75 when he left Haran, and 100 when Isaac was born.",
        "Circumcision, not rainbow, is the sign of Abraham's covenant. Rainbow is Noah's.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Call at 75. Promises: land, nation, blessing. Abram becomes Abraham. Isaac at 100. Moriah = the sacrifice test. Faith counted as righteousness." }
    ]
  },

  "The Patriarchs": {
    subject: "CRK", title: "The Patriarchs: Isaac and Jacob",
    icon: "🏕️", estimatedTime: "3 min read",
    sections: [
      { heading: "Overview", type: "text",
        content: "The patriarchs are Abraham, Isaac and Jacob, the fathers of the nation of Israel. God renewed the covenant promises to each of them. This guide focuses on Isaac and Jacob." },
      { heading: "Isaac", type: "cards", items: [
        { title: "Birth", body: "Son of Abraham and Sarah, born in their old age as promised by God." },
        { title: "Marriage", body: "Abraham sent his servant to Haran to find a wife from his own relatives. The servant met Rebekah at the well and she gave water to him and his camels." },
        { title: "Children", body: "Twin sons Esau (the first-born, a hunter) and Jacob. Isaac favoured Esau and Rebekah favoured Jacob." },
        { title: "Well disputes", body: "Isaac dug wells and, when herdsmen quarrelled, moved on peacefully until he reached Rehoboth." },
      ]},
      { heading: "Jacob and Esau", type: "steps", items: [
        "Esau, hungry, sold his birthright to Jacob for a meal of stew (lentil pottage).",
        "Rebekah helped Jacob disguise himself in Esau's clothes and goat skins and receive Isaac's blessing meant for Esau.",
        "Esau planned to kill Jacob, so Jacob fled to his uncle Laban in Haran.",
        "At Bethel Jacob dreamed of a ladder reaching heaven with angels. God renewed the Abrahamic promise.",
        "Jacob served Laban 14 years for Rachel (7 for Leah by trickery, then 7 for Rachel) and 6 more for flocks.",
        "On his return, Jacob wrestled with a man (God) at Peniel by the Jabbok. His name was changed to ISRAEL.",
        "He and Esau were reconciled."
      ]},
      { heading: "The Twelve Sons of Jacob", type: "cards", items: [
        { title: "Leah's sons", body: "Reuben, Simeon, Levi, Judah, Issachar, Zebulun (and a daughter, Dinah)." },
        { title: "Bilhah's sons", body: "Dan and Naphtali." },
        { title: "Zilpah's sons", body: "Gad and Asher." },
        { title: "Rachel's sons", body: "Joseph and Benjamin." },
        { title: "The tribes", body: "They became the twelve tribes of Israel. Joseph's sons Ephraim and Manasseh each became a tribe." },
      ]},
      { heading: "Lessons", type: "cards", items: [
        { title: "Favouritism and deceit", body: "Cause family conflict (Isaac and Rebekah, Jacob and Laban)." },
        { title: "God's faithfulness", body: "He kept His promise despite human faults." },
        { title: "Reconciliation", body: "Jacob and Esau made peace." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Jacob's name was changed to Israel at Peniel (Jabbok), not at Bethel.",
        "Jacob, not Esau, received the blessing, although Esau was the first-born.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Isaac and Rebekah. Esau sold birthright. Jacob deceived Isaac. Bethel = ladder dream. Peniel = wrestling, name Israel. 12 sons = 12 tribes." }
    ]
  },

  "Joseph in Egypt": {
    subject: "CRK", title: "Joseph in Egypt (Genesis 37-50)",
    icon: "🧥", estimatedTime: "4 min read",
    sections: [
      { heading: "Overview", type: "text",
        content: "Joseph, Jacob's favourite son by Rachel, was sold by his brothers into slavery in Egypt, but God raised him to be the second most powerful man in the land, and he saved his family from famine." },
      { heading: "The Story in Order", type: "steps", items: [
        "Jacob loved Joseph most and gave him a richly ornamented coat (coat of many colours). Joseph also told his brothers dreams of sheaves and of sun, moon and stars bowing to him. They hated him.",
        "Sent to check on his brothers at Dothan, they threw him in a pit. Reuben tried to save him; Judah suggested selling him. He was sold for 20 pieces of silver to Ishmaelite (Midianite) traders.",
        "The brothers dipped his coat in goat's blood and told Jacob a wild animal had killed him.",
        "In Egypt, Joseph served in Potiphar's house and prospered. Potiphar's wife tried to seduce him; he refused ('How could I sin against God?'), was falsely accused and jailed.",
        "In prison he interpreted the dreams of Pharaoh's chief cupbearer (restored) and chief baker (hanged). The cupbearer forgot him for two years.",
        "Pharaoh dreamed of seven fat cows eaten by seven lean cows and of seven good ears eaten by seven thin ears. Joseph interpreted: seven years of plenty followed by seven of famine, and advised storing grain.",
        "Pharaoh made Joseph governor over Egypt at age 30, gave him the name Zaphenath-Paneah and the wife Asenath. They had Manasseh and Ephraim.",
        "In the famine, his brothers came to buy grain. Joseph tested them, kept Simeon, demanded Benjamin and hid his silver cup in Benjamin's sack. Judah offered himself instead of Benjamin.",
        "Joseph revealed himself, forgave them and invited the family to Egypt. Jacob and his household settled in Goshen.",
        "After Jacob's death the brothers feared revenge. Joseph said: 'You meant it for evil, but God meant it for good.' He died at 110."
      ]},
      { heading: "Lessons", type: "cards", items: [
        { title: "Forgiveness", body: "Joseph forgave those who had harmed him." },
        { title: "God's providence", body: "God used evil for good and saved many lives." },
        { title: "Integrity", body: "He resisted temptation and was faithful in small and big roles." },
        { title: "Patience and faith", body: "He waited years in prison and trusted God." },
        { title: "Dangers of favouritism and jealousy", body: "They destroy families." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "It was Judah who suggested selling Joseph, and Reuben who tried to rescue him.",
        "Joseph's family settled in GOSHEN.",
        "Joseph was 30 when he became governor, and 17 when sold.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Dreams, coat, pit, sold for 20 silver pieces, Potiphar, prison, Pharaoh's dreams, governor at 30, brothers in famine, forgiveness, Goshen." }
    ]
  },

  "Moses and the Exodus": {
    subject: "CRK", title: "Moses and the Exodus",
    icon: "🔥", estimatedTime: "5 min read",
    sections: [
      { heading: "Overview", type: "text",
        content: "After Joseph's death the Israelites multiplied in Egypt and were enslaved. God called Moses to lead them out of Egypt, through the wilderness, to the edge of the Promised Land. This is the great act of deliverance in the Old Testament." },
      { heading: "Birth and Early Life", type: "cards", items: [
        { title: "Pharaoh's order", body: "Hebrew baby boys to be killed. The midwives (Shiphrah and Puah) refused." },
        { title: "Moses saved", body: "His mother hid him three months, then put him in a basket among the reeds. His sister Miriam watched. Pharaoh's daughter found him, and his own mother nursed him." },
        { title: "Flight to Midian", body: "Grown up, he killed an Egyptian who was beating a Hebrew and fled to Midian. He married Zipporah, daughter of Jethro (priest of Midian)." },
      ]},
      { heading: "The Call (Exodus 3-4)", type: "cards", items: [
        { title: "Burning bush at Horeb", body: "The bush burned but was not consumed. God told Moses to remove his sandals because the ground was holy." },
        { title: "God's name", body: "'I AM WHO I AM.' God promised to be with Moses and to bring Israel out." },
        { title: "Moses' excuses", body: "He felt unworthy and slow of speech. God gave him signs (staff to snake, leprous hand) and sent his brother AARON as spokesman." },
      ]},
      { heading: "The Ten Plagues", type: "steps", items: [
        "Water turned to blood.",
        "Frogs.",
        "Lice (gnats).",
        "Flies.",
        "Disease on livestock.",
        "Boils.",
        "Hail.",
        "Locusts.",
        "Darkness.",
        "Death of the firstborn."
      ]},
      { heading: "Passover and the Crossing", type: "cards", items: [
        { title: "Passover", body: "Each household killed a lamb, put its blood on the doorposts and ate it with unleavened bread and bitter herbs. The angel of death passed over those houses." },
        { title: "The Red Sea", body: "Pharaoh pursued. Moses stretched out his staff, the sea parted, Israel crossed on dry ground and the Egyptians drowned." },
        { title: "Guidance", body: "A pillar of cloud by day and fire by night." },
      ]},
      { heading: "In the Wilderness", type: "cards", items: [
        { title: "Marah", body: "Bitter water made sweet." },
        { title: "Manna and quail", body: "Daily bread from heaven (double on the sixth day, none on the Sabbath)." },
        { title: "Water from the rock", body: "At Rephidim Moses struck the rock." },
        { title: "Victory over Amalek", body: "Aaron and Hur held up Moses' hands." },
        { title: "Sinai", body: "The covenant and the Ten Commandments. While Moses was on the mountain, the people made a golden calf. Moses broke the tablets and interceded. New tablets made." },
        { title: "Tabernacle", body: "A portable sanctuary built, with the ark of the covenant." },
        { title: "Grumbling and unbelief", body: "Spies report; the people refused to enter Canaan, so they wandered 40 years. Moses disobeyed at Meribah (struck the rock) and died on Mount Nebo at 120 after viewing the land. Joshua succeeded him." },
      ]},
      { heading: "Lessons", type: "cards", items: [
        { title: "God hears the oppressed", body: "He delivers His people." },
        { title: "Obedience", body: "Moses' reluctance gave way to obedience." },
        { title: "God provides", body: "Manna, water, guidance." },
        { title: "Leadership and intercession", body: "Moses prayed for the people." },
        { title: "Ingratitude", body: "Complaining and idolatry bring judgement." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Moses was raised by Pharaoh's daughter but was a Hebrew (from the tribe of Levi).",
        "The last plague was the death of the FIRSTBORN. The Passover came before it.",
        "Joshua, not Moses, led Israel into Canaan.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Basket, burning bush, Aaron, 10 plagues, Passover, Red Sea, manna, Sinai, golden calf, 40 years, Nebo." }
    ]
  },

  "Joshua and the Conquest": {
    subject: "CRK", title: "Joshua and the Conquest of Canaan",
    icon: "🎺", estimatedTime: "4 min read",
    sections: [
      { heading: "Overview", type: "text",
        content: "Joshua, son of Nun, was Moses' assistant and successor. God told him to be strong and courageous. He led Israel across the Jordan and conquered much of Canaan." },
      { heading: "Key Events", type: "steps", items: [
        "Joshua sent two spies to Jericho. Rahab, a prostitute, hid them and was spared (a scarlet cord in her window).",
        "The priests carried the ark into the Jordan. The waters stopped flowing and Israel crossed on dry ground. Twelve stones were set up at Gilgal as a memorial.",
        "At Gilgal the men were circumcised, Passover was celebrated and the manna stopped.",
        "Jericho: Israel marched around the city once a day for six days, and seven times on the seventh day, with seven priests blowing trumpets. The people shouted and the walls fell.",
        "Achan took forbidden plunder from Jericho. Israel was defeated at Ai. After Achan was punished, Ai was taken.",
        "The Gibeonites deceived Joshua with old clothes and mouldy bread into a treaty.",
        "At Gibeon the sun and moon stood still while Israel defeated five Amorite kings.",
        "The land was divided among the tribes by lot. Caleb received Hebron. Cities of refuge and Levitical cities were set aside.",
        "Joshua's farewell: 'Choose this day whom you will serve... as for me and my house, we will serve the LORD.' He died at 110."
      ]},
      { heading: "Lessons", type: "cards", items: [
        { title: "Obedience", body: "Following God's strange instructions at Jericho brought victory." },
        { title: "Sin of one affects all", body: "Achan's theft caused defeat at Ai." },
        { title: "Faith", body: "Rahab's faith saved her (Hebrews 11)." },
        { title: "Be careful in treaties", body: "Joshua failed to consult God and was tricked by the Gibeonites." },
        { title: "Commitment", body: "Joshua called Israel to choose the LORD." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Moses did not enter Canaan. Joshua did.",
        "Achan, not Rahab, was punished for sin.",
        "The sun stood still at GIBEON (not Jericho).",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Rahab, Jordan crossing, 12 stones, Jericho (7 days, 7 priests, 7 times), Achan, Ai, Gibeonites, sun stood still, 'as for me and my house'." }
    ]
  },

  "The Judges": {
    subject: "CRK", title: "The Judges",
    icon: "⚔️", estimatedTime: "4 min read",
    sections: [
      { heading: "Overview", type: "text",
        content: "After Joshua died, there was no central leader. 'In those days Israel had no king; everyone did as they saw fit.' God raised up judges, who were military and spiritual leaders, to deliver Israel from oppressors." },
      { heading: "The Cycle in the Book of Judges", type: "steps", items: [
        "Israel sinned (turned to Baal and other gods).",
        "God allowed an enemy to oppress them.",
        "Israel cried out to God.",
        "God raised up a judge who delivered them.",
        "There was peace until the judge died, and then the cycle began again."
      ]},
      { heading: "Major Judges", type: "cards", items: [
        { title: "Deborah and Barak", body: "Deborah, a prophetess, judged from under a palm tree. With Barak she defeated Sisera, the Canaanite commander. JAEL killed Sisera with a tent peg." },
        { title: "Gideon (Jerubbaal)", body: "Called by an angel while threshing wheat. Tore down his father's altar of Baal. Tested God with a fleece (wet then dry). God reduced his army from 32,000 to 300 who lapped water. With trumpets, jars and torches they routed the Midianites. He refused to be king." },
        { title: "Jephthah", body: "Defeated the Ammonites. He made a rash vow and had to give up his daughter." },
        { title: "Samson", body: "A Nazirite from Dan, with great strength tied to his uncut hair. Killed a lion, burned Philistine fields with foxes, killed 1,000 men with a donkey's jawbone. Betrayed by Delilah, he lost his hair, was blinded and put to grind. At a feast in the temple of Dagon he pushed down the pillars and died with the Philistines." },
        { title: "Others", body: "Othniel, Ehud (left-handed, killed King Eglon), Shamgar, Tola, Jair, Abdon and Eli and Samuel at the end." },
      ]},
      { heading: "Lessons", type: "cards", items: [
        { title: "Disobedience brings trouble", body: "Idolatry led to defeat." },
        { title: "God's mercy", body: "He rescued them each time they repented." },
        { title: "God uses unlikely people", body: "Gideon was from the weakest clan; Deborah was a woman." },
        { title: "Strength is from God", body: "Gideon's 300 show victory is by God's power." },
        { title: "Danger of rash vows and moral weakness", body: "Jephthah and Samson." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Gideon had 300 men, not 3,000.",
        "Jael killed Sisera, not Deborah.",
        "Samson's strength was linked to his Nazirite vow (uncut hair).",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Cycle: sin, oppression, cry, judge, peace. Deborah/Jael, Gideon/300, Jephthah/vow, Samson/Delilah." }
    ]
  },

  "Samuel and the Monarchy": {
    subject: "CRK", title: "Samuel and the Beginning of the Monarchy",
    icon: "🙏", estimatedTime: "4 min read",
    sections: [
      { heading: "Overview", type: "text",
        content: "Samuel was the last judge, a prophet and priest who anointed Israel's first two kings. His story marks the move from judges to kings." },
      { heading: "Birth and Call", type: "cards", items: [
        { title: "Hannah's prayer", body: "Hannah, wife of Elkanah, was barren and prayed at Shiloh. Eli the priest thought she was drunk. She vowed to give her son to God. Samuel was born." },
        { title: "Dedication", body: "When weaned, Samuel was brought to serve in the temple under Eli. Hannah's song of praise (1 Samuel 2)." },
        { title: "Eli's sons", body: "Hophni and Phinehas were corrupt priests. Eli did not restrain them." },
        { title: "The call", body: "God called Samuel at night three times. Eli told him to answer, 'Speak, LORD, for your servant is listening.' God told him of the judgement on Eli's house." },
      ]},
      { heading: "The Ark and the Demand for a King", type: "steps", items: [
        "Israel was defeated by the Philistines at Ebenezer. The ark was captured. Hophni and Phinehas died. Eli fell and died on hearing it.",
        "The ark brought plague on the Philistines and was returned.",
        "Samuel judged Israel in his old age. His sons Joel and Abijah took bribes.",
        "The elders asked for a king 'such as all the other nations have'.",
        "Samuel was displeased and warned them what a king would take (sons, daughters, fields, taxes). The people insisted.",
        "God told Samuel to give them a king. He anointed SAUL privately at Ramah and later presented him publicly at Mizpah."
      ]},
      { heading: "Lessons", type: "cards", items: [
        { title: "Prayer", body: "Hannah's persistent prayer was answered." },
        { title: "Keeping vows", body: "Hannah gave Samuel to God." },
        { title: "Early obedience", body: "Samuel listened to God." },
        { title: "Responsibility of parents and leaders", body: "Eli's failure to correct his sons." },
        { title: "Rejecting God as King", body: "Israel's demand showed a lack of trust in God." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Samuel anointed both Saul and David.",
        "Eli's sons, not Samuel's sons, were the corrupt priests; Samuel's sons were corrupt judges.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Hannah, Eli, 'Speak, LORD', ark captured, elders demand king, Samuel anoints Saul." }
    ]
  },

  "King Saul": {
    subject: "CRK", title: "King Saul",
    icon: "👑", estimatedTime: "3 min read",
    sections: [
      { heading: "Overview", type: "text",
        content: "Saul, son of Kish of the tribe of Benjamin, was Israel's first king. He began well and was humble, but his disobedience caused God to reject him." },
      { heading: "Key Events", type: "steps", items: [
        "Saul was looking for his father's lost donkeys when he met Samuel. Samuel anointed him privately and then Saul was chosen publicly by lot at Mizpah. He was tall and hid among the baggage.",
        "He defeated the Ammonites who besieged Jabesh-gilead and was confirmed as king at Gilgal.",
        "At Gilgal, facing the Philistines, Saul grew impatient waiting for Samuel and offered the sacrifice himself. Samuel told him his kingdom would not endure.",
        "God commanded Saul to destroy the Amalekites completely. Saul spared King Agag and the best animals. Samuel said, 'To obey is better than sacrifice.' God rejected Saul as king.",
        "God sent an evil spirit to trouble Saul. David played the harp to soothe him.",
        "After David killed Goliath and won popularity, Saul grew jealous and tried to kill him with a spear and chased him through the wilderness.",
        "Saul killed the priests of Nob for helping David. Twice David spared Saul's life (in the cave at En-gedi and in the camp).",
        "Before his last battle, Saul consulted the witch (medium) of Endor, who raised Samuel's spirit.",
        "He and his sons, including Jonathan, were killed at Mount Gilboa by the Philistines. Saul fell on his sword."
      ]},
      { heading: "Lessons", type: "cards", items: [
        { title: "Obedience over ritual", body: "Partial obedience is disobedience." },
        { title: "Pride and impatience", body: "Saul took the priest's role and made excuses." },
        { title: "Jealousy destroys", body: "It drove Saul to madness." },
        { title: "Consulting mediums is forbidden", body: "Saul turned to a medium when God was silent." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Saul was rejected for two main sins: the unlawful sacrifice at Gilgal and sparing Agag.",
        "David spared Saul twice. He never killed him.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Benjamin, donkeys, Gilgal sacrifice, Amalek and Agag, 'obey is better than sacrifice', jealousy of David, Endor, Gilboa." }
    ]
  },

  "King David": {
    subject: "CRK", title: "King David",
    icon: "🎵", estimatedTime: "5 min read",
    sections: [
      { heading: "Overview", type: "text",
        content: "David, the youngest son of Jesse of Bethlehem, was a shepherd, musician and warrior who became Israel's greatest king. He is described as a man after God's own heart, though he sinned seriously." },
      { heading: "Rise to Power", type: "steps", items: [
        "Samuel anointed David secretly at Bethlehem after God rejected Jesse's older sons.",
        "He played the harp for Saul.",
        "He killed the Philistine champion GOLIATH with a sling and a stone, saying he came in the name of the LORD.",
        "He made a covenant of friendship with Saul's son JONATHAN.",
        "Saul's jealousy forced David to flee. He gathered a band of followers and twice spared Saul.",
        "After Saul's death, David was made king of Judah at Hebron, and seven years later of all Israel.",
        "He captured Jerusalem from the Jebusites and made it his capital (the city of David)."
      ]},
      { heading: "Achievements", type: "cards", items: [
        { title: "Ark to Jerusalem", body: "He brought the ark of the covenant to Jerusalem with rejoicing. Uzzah died for touching it." },
        { title: "Covenant with David (2 Samuel 7)", body: "God, through Nathan, promised David a dynasty and an everlasting kingdom. David wanted to build a temple but God said his son would." },
        { title: "Kindness", body: "He showed kindness to Jonathan's son Mephibosheth." },
        { title: "Psalms", body: "Many Psalms are attributed to him." },
      ]},
      { heading: "David's Sin and Repentance", type: "steps", items: [
        "David saw Bathsheba bathing and committed adultery with her while her husband Uriah the Hittite was at war.",
        "She became pregnant. David tried to cover it, then arranged for Uriah to be killed in battle and took Bathsheba as wife.",
        "The prophet NATHAN confronted him with the story of a rich man who took a poor man's only ewe lamb. 'You are the man!'",
        "David confessed ('I have sinned against the LORD') and prayed Psalm 51. The child died but David was forgiven. Solomon was later born to them."
      ]},
      { heading: "Family Troubles and Death", type: "cards", items: [
        { title: "Absalom's rebellion", body: "Absalom, after killing Amnon, turned the people against David. David fled Jerusalem. Absalom was killed by Joab when his hair caught in an oak. David mourned deeply." },
        { title: "Census", body: "David numbered the people against God's will and a plague followed." },
        { title: "Succession", body: "Adonijah tried to seize the throne. Nathan and Bathsheba had David proclaim Solomon. David reigned 40 years." },
      ]},
      { heading: "Lessons", type: "cards", items: [
        { title: "Courage and faith", body: "Goliath was defeated by trusting God." },
        { title: "True friendship", body: "David and Jonathan." },
        { title: "Respect for God's anointed", body: "He would not harm Saul." },
        { title: "Repentance", body: "Confession brings forgiveness but sin still has consequences." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "David was anointed three times: privately by Samuel, over Judah and over all Israel.",
        "David was NOT allowed to build the temple. Solomon did.",
        "It was Nathan who rebuked David.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Anointed, Goliath, Jonathan, Hebron then Jerusalem, ark, Nathan's promise, Bathsheba and Uriah, Nathan's parable, Psalm 51, Absalom." }
    ]
  },

  "King Solomon": {
    subject: "CRK", title: "King Solomon",
    icon: "🏛️", estimatedTime: "4 min read",
    sections: [
      { heading: "Overview", type: "text",
        content: "Solomon, son of David and Bathsheba, was Israel's third king. He reigned about 40 years, was famed for wisdom and wealth and built the temple in Jerusalem, but in later life his foreign wives led him to idolatry." },
      { heading: "Key Events", type: "steps", items: [
        "After becoming king, Solomon removed rivals (Adonijah, Joab, Shimei).",
        "At Gibeon he offered sacrifices. God appeared in a dream and told him to ask for anything. He asked for an understanding mind to govern and to discern between good and bad. God also gave him riches and honour.",
        "His wisdom was shown when two women claimed the same baby. He ordered the child to be cut in two and gave the baby to the woman who showed compassion.",
        "He built the temple in Jerusalem, starting in his fourth year and finishing in seven years. Hiram, king of Tyre, supplied cedar and craftsmen. He then built his palace (13 years).",
        "At the dedication, the ark was placed in the Most Holy Place, the glory of the LORD filled the temple, and Solomon prayed a long prayer of dedication.",
        "The queen of Sheba visited, tested him with hard questions and was amazed at his wisdom and wealth.",
        "He married many foreign wives (700 wives and 300 concubines), who led him to worship other gods and build high places for them.",
        "God said the kingdom would be torn away (except one tribe, for David's sake). Adversaries rose: Hadad, Rezon and Jeroboam. He died and Rehoboam became king."
      ]},
      { heading: "Achievements", type: "cards", items: [
        { title: "Wisdom", body: "Proverbs, Ecclesiastes and Song of Songs are linked to him." },
        { title: "Building and trade", body: "Cities, fleets, chariots and treaties." },
        { title: "Peace and prosperity", body: "Israel enjoyed peace during his reign." },
        { title: "Weaknesses", body: "Heavy taxes, forced labour and idolatry." },
      ]},
      { heading: "Lessons", type: "cards", items: [
        { title: "Seek wisdom first", body: "Wisdom is better than riches." },
        { title: "Compromise with idolatry destroys", body: "Foreign marriages drew him away." },
        { title: "Great start, poor finish", body: "Faithfulness must last to the end." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Solomon asked for WISDOM, not riches. Wealth was added.",
        "The temple took SEVEN years. His palace took thirteen.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Gibeon dream (wisdom), two mothers, temple (7 years, Hiram), queen of Sheba, foreign wives and idols, kingdom divided after him." }
    ]
  },

  "The Divided Kingdom": {
    subject: "CRK", title: "The Divided Kingdom",
    icon: "💔", estimatedTime: "4 min read",
    sections: [
      { heading: "Overview", type: "text",
        content: "After Solomon's death the united kingdom split into two: Israel in the north and Judah in the south. Both kingdoms drifted into idolatry and were eventually conquered." },
      { heading: "The Division (1 Kings 12)", type: "steps", items: [
        "Rehoboam, Solomon's son, went to Shechem to be made king. The people asked for lighter taxes and labour.",
        "The elders advised him to be kind. His young friends told him to be harsher.",
        "Rehoboam followed the young men: 'My little finger is thicker than my father's waist... my father scourged you with whips, I will scourge you with scorpions.'",
        "Ten northern tribes rejected him and made JEROBOAM king. Judah and Benjamin stayed with Rehoboam."
      ]},
      { heading: "The Two Kingdoms", type: "cards", items: [
        { title: "Israel (north)", body: "Ten tribes. Kings began with Jeroboam. Capital Shechem, later Samaria. No king was fully faithful to God." },
        { title: "Judah (south)", body: "Judah and Benjamin. Capital Jerusalem. Descendants of David ruled. Some good kings such as Hezekiah and Josiah." },
        { title: "Jeroboam's sin", body: "Fearing the people would go to Jerusalem to worship, he set up golden calves at BETHEL and DAN and made new priests and feasts." },
        { title: "Ahab and Jezebel", body: "Ahab (Israel) married Jezebel of Sidon, who promoted Baal worship. Prophet Elijah opposed them. Ahab and Jezebel took Naboth's vineyard by false accusation." },
      ]},
      { heading: "Prophets at the Time", type: "cards", items: [
        { title: "North", body: "Elijah, Elisha, Amos, Hosea." },
        { title: "South", body: "Isaiah, Micah, Jeremiah." },
        { title: "Message", body: "Return to God. Justice for the poor. Stop idolatry. Judgement is coming." },
      ]},
      { heading: "The Fall", type: "cards", items: [
        { title: "Israel falls", body: "In 722 BC the Assyrians captured Samaria and deported many people." },
        { title: "Judah falls", body: "In 586 BC the Babylonians under Nebuchadnezzar destroyed Jerusalem and the temple." },
        { title: "Good kings in Judah", body: "Hezekiah (prayed and Jerusalem was saved from the Assyrians) and Josiah (found the Book of the Law and led reforms)." },
      ]},
      { heading: "Lessons", type: "cards", items: [
        { title: "Listen to wise counsel", body: "Rehoboam's pride split the kingdom." },
        { title: "Leaders' sins affect the nation", body: "Jeroboam 'made Israel sin'." },
        { title: "Warnings are real", body: "God sent prophets before judgement." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Israel = north (ten tribes, Samaria). Judah = south (Jerusalem).",
        "Assyria took Israel (722 BC). Babylon took Judah (586 BC).",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Rehoboam's harsh answer, Jeroboam's calves at Bethel and Dan, Israel falls 722 BC to Assyria, Judah falls 586 BC to Babylon." }
    ]
  },

  "Prophet Elijah": {
    subject: "CRK", title: "Prophet Elijah",
    icon: "🔥", estimatedTime: "4 min read",
    sections: [
      { heading: "Overview", type: "text",
        content: "Elijah the Tishbite, from Gilead, prophesied in the northern kingdom during the reigns of Ahab and Jezebel, who promoted Baal worship. He called Israel back to the LORD." },
      { heading: "Key Events", type: "steps", items: [
        "He announced a drought: 'There will be neither dew nor rain in the next few years except at my word.'",
        "God sent him to the brook Cherith, where ravens fed him. When it dried up, he went to Zarephath, where a widow shared her last flour and oil. The jar of flour and jug of oil did not run out. He later raised her son.",
        "After three and a half years, Elijah challenged Ahab to bring the people and the 450 prophets of Baal (and 400 of Asherah) to Mount CARMEL.",
        "He said, 'How long will you waver between two opinions?' The prophets of Baal prayed from morning to noon with no response and Elijah mocked them.",
        "Elijah rebuilt the LORD's altar with twelve stones, drenched it with water three times and prayed. Fire fell from heaven and consumed the sacrifice, wood, stones and water. The people said, 'The LORD, he is God!' The prophets of Baal were killed. Rain came.",
        "Jezebel threatened his life. Elijah fled to Beersheba and sat under a broom (juniper) tree, asking to die. An angel fed him and he travelled 40 days to Horeb.",
        "At Horeb, God was not in the wind, earthquake or fire but in a gentle whisper (still small voice). God told him there were still 7,000 who had not bowed to Baal, and told him to anoint Hazael, Jehu and ELISHA as his successor.",
        "Elijah found Elisha ploughing and threw his cloak over him.",
        "After Naboth was killed for his vineyard, Elijah pronounced judgement on Ahab and Jezebel.",
        "Elijah was taken up to heaven in a whirlwind with a chariot and horses of fire, and Elisha received his mantle and a double portion of his spirit."
      ]},
      { heading: "Lessons", type: "cards", items: [
        { title: "Stand for God", body: "Elijah stood alone against 450 prophets." },
        { title: "Choose one God", body: "No compromise between God and idols." },
        { title: "God provides", body: "Ravens and the widow's flour." },
        { title: "Discouragement is human", body: "God restored Elijah and gave him work to do." },
        { title: "God speaks quietly too", body: "The gentle whisper." },
        { title: "Justice", body: "He condemned the murder and theft of Naboth's vineyard." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "The contest was on Mount CARMEL. The still small voice was at HOREB.",
        "Elijah did not die. He was taken up to heaven.",
        "Elisha, not Elijah, received the 'double portion'.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Drought, ravens, widow of Zarephath, Carmel and the fire, juniper tree, Horeb whisper, Elisha, Naboth, whirlwind." }
    ]
  },

  "The Babylonian Exile": {
    subject: "CRK", title: "The Babylonian Exile and Return",
    icon: "⛓️", estimatedTime: "4 min read",
    sections: [
      { heading: "Overview", type: "text",
        content: "Because of persistent idolatry and disobedience, Judah was taken into exile in Babylon. The exile lasted about 70 years. Then the Persian king Cyrus allowed the Jews to return and rebuild." },
      { heading: "Causes and Events", type: "steps", items: [
        "Judah ignored prophets such as Jeremiah, who warned of judgement.",
        "Nebuchadnezzar of Babylon attacked Jerusalem and deported groups in 605, 597 and 586 BC (including Daniel and Ezekiel in the early deportations).",
        "In 586 BC Jerusalem and Solomon's temple were destroyed and the last king, Zedekiah, was captured and blinded.",
        "In exile the people grieved (Psalm 137: 'By the rivers of Babylon we sat and wept'). Jeremiah wrote to them to build houses, plant gardens and seek the peace of the city.",
        "In 538 BC Cyrus, king of Persia, who had conquered Babylon, issued a decree allowing the Jews to return and rebuild the temple."
      ]},
      { heading: "Prophets of the Exile", type: "cards", items: [
        { title: "Jeremiah", body: "Warned of judgement. Promised a new covenant written on the heart and a return after 70 years." },
        { title: "Ezekiel", body: "Priest-prophet among the exiles. Vision of the valley of dry bones: God will restore Israel." },
        { title: "Daniel", body: "Taken to Babylon as a youth. He refused the king's food, interpreted Nebuchadnezzar's dreams, and was rescued from the lions' den. His friends SHADRACH, MESHACH and ABEDNEGO were saved from the fiery furnace for refusing to worship the golden image. Belshazzar's feast: writing on the wall." },
      ]},
      { heading: "The Return and Rebuilding", type: "cards", items: [
        { title: "Zerubbabel", body: "Led the first group back and rebuilt the temple (completed 516 BC), encouraged by prophets Haggai and Zechariah." },
        { title: "Ezra", body: "A priest and scribe who taught the Law and led religious reform." },
        { title: "Nehemiah", body: "Cupbearer to the Persian king. He rebuilt Jerusalem's walls in 52 days despite opposition from Sanballat and Tobiah." },
      ]},
      { heading: "Lessons", type: "cards", items: [
        { title: "God disciplines", body: "Disobedience has consequences." },
        { title: "God is faithful", body: "He restored the people." },
        { title: "Faithfulness under pressure", body: "Daniel and his friends." },
        { title: "Prayer and planning", body: "Nehemiah prayed and then acted." },
        { title: "God works through foreign rulers", body: "Cyrus." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Jerusalem fell in 586 BC. Cyrus's decree was in 538 BC.",
        "Zerubbabel rebuilt the temple. Nehemiah rebuilt the walls.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "586 BC fall, 70 years, Daniel (lions, furnace friends), Cyrus 538 BC, Zerubbabel temple, Ezra law, Nehemiah walls in 52 days." }
    ]
  },

  "The Birth of Jesus": {
    subject: "CRK", title: "The Birth of Jesus",
    icon: "⭐", estimatedTime: "4 min read",
    sections: [
      { heading: "Overview", type: "text",
        content: "The birth of Jesus is told in Matthew 1-2 and Luke 1-2. Jesus was born in Bethlehem to Mary, who was a virgin and engaged to Joseph of the house of David." },
      { heading: "Events Before the Birth", type: "cards", items: [
        { title: "Zechariah and Elizabeth", body: "The angel Gabriel told the priest Zechariah that his wife Elizabeth would bear a son, John, who would prepare the way for the Lord. Because Zechariah doubted, he was struck dumb until John was born." },
        { title: "The Annunciation", body: "Gabriel appeared to MARY at Nazareth: she would conceive by the Holy Spirit and bear a son to be named JESUS ('the LORD saves'). Mary said, 'I am the Lord's servant. May it be to me as you have said.'" },
        { title: "Mary visits Elizabeth", body: "Mary's song of praise, the MAGNIFICAT ('My soul glorifies the Lord')." },
        { title: "Joseph", body: "Planned to divorce Mary quietly but an angel told him in a dream to take her as wife and name the child Jesus (Emmanuel, 'God with us')." },
      ]},
      { heading: "The Birth (Luke 2)", type: "steps", items: [
        "Caesar Augustus ordered a census, so Joseph and Mary travelled from Nazareth to Bethlehem, the town of David.",
        "Jesus was born and laid in a manger because there was no room in the inn.",
        "An angel told shepherds in the fields, 'Today in the town of David a Saviour has been born to you.' A host of angels praised God.",
        "The shepherds visited the child and spread the news.",
        "On the eighth day he was circumcised and named Jesus. He was presented in the temple, where SIMEON and the prophetess ANNA blessed him."
      ]},
      { heading: "The Magi and the Escape (Matthew 2)", type: "cards", items: [
        { title: "The Magi", body: "Wise men from the east followed a star to Jerusalem and asked for the king of the Jews. Herod's scribes pointed them to Bethlehem (Micah 5:2). They gave gold, frankincense and myrrh." },
        { title: "Herod", body: "Alarmed, he ordered the killing of all boys under two in Bethlehem." },
        { title: "Flight to Egypt", body: "An angel warned Joseph in a dream. The family fled to Egypt and later settled in NAZARETH after Herod's death." },
        { title: "Boyhood", body: "At 12, Jesus was found in the temple among the teachers (Luke 2:41-52). He grew in wisdom and stature." },
      ]},
      { heading: "Lessons", type: "cards", items: [
        { title: "Humility", body: "The Saviour was born in a stable." },
        { title: "Obedience", body: "Mary and Joseph obeyed God." },
        { title: "Fulfilled prophecy", body: "Isaiah 7:14 (virgin birth) and Micah 5:2 (Bethlehem)." },
        { title: "Good news for all", body: "Shepherds and foreign Magi were among the first worshippers." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "The shepherds appear in LUKE. The Magi appear in MATTHEW.",
        "Jesus was born in Bethlehem but raised in Nazareth.",
        "The Bible doesn't say there were three Magi, only three gifts.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Gabriel, Mary, Magnificat, Joseph's dream, census, Bethlehem, manger, shepherds, Simeon and Anna, Magi, Herod, Egypt, Nazareth." }
    ]
  },

  "The Baptism of Jesus": {
    subject: "CRK", title: "The Baptism of Jesus and John the Baptist",
    icon: "🕊️", estimatedTime: "3 min read",
    sections: [
      { heading: "John the Baptist", type: "cards", items: [
        { title: "Who he was", body: "Son of Zechariah and Elizabeth, a relative of Jesus. He lived in the wilderness of Judea, wore camel's hair and ate locusts and wild honey." },
        { title: "His role", body: "The forerunner who prepared the way (Isaiah 40:3, 'a voice of one calling in the wilderness')." },
        { title: "His message", body: "'Repent, for the kingdom of heaven has come near.' He baptised in the Jordan for repentance and forgiveness of sins." },
        { title: "His teaching (Luke 3)", body: "Share clothes and food. Tax collectors collect no more than required. Soldiers should not extort or accuse falsely and should be content with wages." },
        { title: "Challenge to the leaders", body: "He called the Pharisees and Sadducees a 'brood of vipers'." },
        { title: "His humility", body: "'He must become greater; I must become less.' 'I am not worthy to untie his sandals.'" },
      ]},
      { heading: "The Baptism of Jesus (Matthew 3, Luke 3)", type: "steps", items: [
        "Jesus, about 30 years old, came from Galilee to be baptised by John in the Jordan.",
        "John objected, 'I need to be baptised by you.' Jesus said it was to 'fulfil all righteousness'.",
        "As Jesus came out of the water, heaven opened, the Spirit of God descended like a DOVE and a voice said, 'This is my beloved Son, with whom I am well pleased.'"
      ]},
      { heading: "Significance", type: "cards", items: [
        { title: "Identification with sinners", body: "Jesus took the place of humanity though sinless." },
        { title: "Beginning of his ministry", body: "He was anointed with the Spirit and publicly affirmed as Son." },
        { title: "The Trinity", body: "Father speaks, Son is baptised, Spirit descends as a dove." },
        { title: "Example", body: "Baptism shows obedience and a new beginning." },
      ]},
      { heading: "John's End", type: "text",
        content: "John criticised Herod Antipas for marrying Herodias, his brother Philip's wife. He was imprisoned and later beheaded at the request of Herodias's daughter (Salome)." },
      { heading: "Watch Out!", type: "warning", items: [
        "Jesus did not need repentance. His baptism was to fulfil righteousness.",
        "The Spirit came like a dove. It was not a literal bird in the Gospels' wording.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "John = forerunner, Jordan, repent, camel hair. Jesus' baptism: dove, voice 'my beloved Son', start of ministry. John beheaded because of Herod and Herodias." }
    ]
  },

  "The Temptation of Jesus": {
    subject: "CRK", title: "The Temptation of Jesus",
    icon: "🏜️", estimatedTime: "3 min read",
    sections: [
      { heading: "Overview", type: "text",
        content: "Immediately after His baptism, the Spirit led Jesus into the wilderness, where He fasted 40 days and nights and was tempted by the devil (Matthew 4:1-11, Luke 4:1-13). He answered each temptation with Scripture from Deuteronomy." },
      { heading: "The Three Temptations (Matthew's order)", type: "cards", items: [
        { title: "1. Stones to bread", body: "'If you are the Son of God, tell these stones to become bread.' Jesus answered, 'Man shall not live on bread alone, but on every word that comes from the mouth of God' (Deuteronomy 8:3). Temptation to use His power for His own needs." },
        { title: "2. Jump from the temple", body: "The devil took Him to the highest point of the temple, quoted Psalm 91 and told Him to throw Himself down so angels would catch Him. Jesus answered, 'Do not put the Lord your God to the test' (Deuteronomy 6:16). Temptation to test God and seek a spectacular show." },
        { title: "3. Kingdoms of the world", body: "The devil showed Him all the kingdoms and offered them if Jesus would bow down and worship him. Jesus said, 'Away from me, Satan! Worship the Lord your God and serve him only' (Deuteronomy 6:13). Temptation to gain power without suffering." },
      ]},
      { heading: "After the Temptation", type: "text",
        content: "The devil left and angels came and attended Jesus. In Luke the order of the second and third temptations is reversed (temple last)." },
      { heading: "Lessons", type: "cards", items: [
        { title: "Know Scripture", body: "Jesus defeated temptation with God's word." },
        { title: "Temptation is not sin", body: "Jesus was tempted yet without sin (Hebrews 4:15)." },
        { title: "Spiritual preparation", body: "Prayer and fasting before ministry." },
        { title: "Trust God", body: "Don't take shortcuts to power, comfort or fame." },
        { title: "Satan can misuse Scripture", body: "Test every teaching." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "The wilderness fast was 40 days and 40 nights.",
        "Jesus quoted Deuteronomy each time.",
        "The temptation followed the baptism immediately.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "40 days. Stones to bread, temple pinnacle, kingdoms for worship. All answered from Deuteronomy. 'Away from me, Satan.'" }
    ]
  },

  "The Ministry of Jesus": {
    subject: "CRK", title: "The Ministry of Jesus",
    icon: "✝️", estimatedTime: "5 min read",
    sections: [
      { heading: "Overview", type: "text",
        content: "After the temptation, Jesus began to preach in Galilee: 'Repent, for the kingdom of heaven is near.' He taught, healed, called disciples and showed the nature of God's kingdom." },
      { heading: "Calling of the Disciples", type: "cards", items: [
        { title: "First disciples", body: "Fishermen Simon Peter and Andrew, James and John (sons of Zebedee). 'Follow me and I will make you fishers of men.'" },
        { title: "Matthew (Levi)", body: "A tax collector called from his booth." },
        { title: "The Twelve", body: "Peter, Andrew, James, John, Philip, Bartholomew (Nathanael), Thomas, Matthew, James (son of Alphaeus), Thaddaeus (Judas son of James), Simon the Zealot and Judas Iscariot." },
      ]},
      { heading: "Teaching", type: "cards", items: [
        { title: "Sermon on the Mount (Matthew 5-7)", body: "The Beatitudes, salt and light, the Lord's Prayer, love your enemies, the Golden Rule, don't judge, build on rock, narrow gate." },
        { title: "Parables", body: "Stories with spiritual meaning (see The Parables)." },
        { title: "Great commandment", body: "Love God with all your heart, soul and mind and love your neighbour as yourself." },
        { title: "Nicodemus (John 3)", body: "'You must be born again.' John 3:16." },
        { title: "Woman at the well (John 4)", body: "A Samaritan woman. 'God is spirit, and his worshippers must worship in spirit and in truth.'" },
      ]},
      { heading: "Miracles", type: "cards", items: [
        { title: "Water into wine", body: "At Cana. The first sign (John 2)." },
        { title: "Healings", body: "A paralysed man lowered through the roof, a leper, the centurion's servant, Peter's mother-in-law, Jairus's daughter (raised), the woman with a flow of blood, blind Bartimaeus, ten lepers (only one, a Samaritan, returned to thank him)." },
        { title: "Nature miracles", body: "Calming the storm, feeding the 5,000 (five loaves and two fish), walking on water." },
        { title: "Exorcism", body: "The Gadarene demoniac (Legion), sent into pigs." },
        { title: "Raising the dead", body: "The widow's son at Nain, Jairus's daughter, LAZARUS (John 11)." },
      ]},
      { heading: "Turning Points", type: "cards", items: [
        { title: "Peter's confession at Caesarea Philippi", body: "'You are the Christ, the Son of the living God.' Jesus then foretold his suffering." },
        { title: "Transfiguration", body: "On the mountain with Peter, James and John. His face shone, Moses and Elijah appeared and a voice said, 'This is my Son... listen to him.'" },
        { title: "Opposition", body: "Pharisees and scribes criticised him for healing on the Sabbath, eating with sinners and claiming authority." },
        { title: "Journey to Jerusalem", body: "Triumphal entry and cleansing of the temple." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "The first miracle was at CANA (water into wine).",
        "Peter's confession was at Caesarea Philippi, before the Transfiguration.",
        "Only ONE of the ten lepers returned to say thank you.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Fishers of men, Twelve, Sermon on the Mount, miracles (healing, nature, exorcism, raising dead), Peter's confession, Transfiguration." }
    ]
  },

  "The Parables": {
    subject: "CRK", title: "The Parables of Jesus",
    icon: "📖", estimatedTime: "5 min read",
    sections: [
      { heading: "What is a Parable?", type: "text",
        content: "A parable is a short story from everyday life that carries a spiritual lesson. Jesus used parables to teach those who were ready to listen and to hide the meaning from those who were hard-hearted (Matthew 13:10-17)." },
      { heading: "Parables of the Kingdom", type: "cards", items: [
        { title: "The Sower (Matthew 13)", body: "Seed on four soils: path (devil snatches it), rocky ground (no root, falls away), thorns (worries and wealth choke it) and good soil (bears fruit). Teaches how people respond to the word." },
        { title: "Wheat and Weeds (Tares)", body: "An enemy sowed weeds among wheat. Both grow together until harvest. God will judge at the end." },
        { title: "Mustard Seed and Yeast (Leaven)", body: "The kingdom starts small and grows large and spreads quietly." },
        { title: "Hidden Treasure and Pearl", body: "The kingdom is worth giving up everything." },
        { title: "Net", body: "Good and bad fish are separated at the end." },
      ]},
      { heading: "Parables on Love and Forgiveness", type: "cards", items: [
        { title: "Good Samaritan (Luke 10)", body: "In answer to 'Who is my neighbour?'. A priest and a Levite passed by a wounded traveller; a Samaritan helped him. Love crosses social and racial barriers. 'Go and do likewise.'" },
        { title: "Prodigal (Lost) Son (Luke 15)", body: "A younger son wasted his inheritance, repented and was welcomed by his father. The elder brother resented it. Shows God's forgiveness and joy over a repentant sinner." },
        { title: "Lost Sheep and Lost Coin (Luke 15)", body: "God rejoices over every sinner who repents." },
        { title: "Unforgiving Servant (Matthew 18)", body: "A servant forgiven a huge debt refused to forgive a small one. We must forgive as we have been forgiven." },
      ]},
      { heading: "Parables on Money and Preparedness", type: "cards", items: [
        { title: "Rich Fool (Luke 12)", body: "A man stored up wealth and planned to enjoy it, but died that night. Be rich toward God." },
        { title: "Rich Man and Lazarus (Luke 16)", body: "A rich man ignored a beggar at his gate. After death their positions were reversed. Care for the poor." },
        { title: "Talents (Matthew 25)", body: "Servants given 5, 2 and 1 talents. The first two doubled theirs; the third buried his and was punished. Use gifts faithfully." },
        { title: "Ten Virgins (Matthew 25)", body: "Five wise (with oil) and five foolish. Be ready for the Lord's return." },
        { title: "Sheep and Goats (Matthew 25)", body: "Judged by how they treated 'the least of these'." },
      ]},
      { heading: "Parables on Prayer and Humility", type: "cards", items: [
        { title: "Persistent Widow (Luke 18)", body: "Keep praying and do not give up." },
        { title: "Pharisee and Tax Collector (Luke 18)", body: "The tax collector who prayed 'God, have mercy on me, a sinner' went home justified. Humility, not pride." },
        { title: "Two Builders (Matthew 7)", body: "Wise man built on rock, foolish on sand. Obey Jesus' words." },
        { title: "Workers in the Vineyard (Matthew 20)", body: "All were paid the same. God's generosity." },
        { title: "Great Banquet (Luke 14)", body: "Invited guests made excuses so the poor and outcasts were invited." },
        { title: "Wicked Tenants (Matthew 21)", body: "Warning to those who reject God's messengers and His Son." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "The Prodigal Son, Lost Sheep and Lost Coin are found in LUKE 15.",
        "Talents and Ten Virgins are in MATTHEW 25.",
        "The Good Samaritan is told in answer to 'Who is my neighbour?'.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Match each parable to its lesson: Sower = responses, Samaritan = neighbourly love, Prodigal = forgiveness, Talents = use gifts, Virgins = readiness, Tax collector = humility, Widow = persistent prayer." }
    ]
  },

  "The Passion and Resurrection": {
    subject: "CRK", title: "The Passion, Death and Resurrection of Jesus",
    icon: "✝️", estimatedTime: "5 min read",
    sections: [
      { heading: "Overview", type: "text",
        content: "The Passion refers to the suffering of Jesus in his last week: his entry into Jerusalem, last supper, arrest, trials, crucifixion and death. It ends with his resurrection on the third day." },
      { heading: "Before the Arrest", type: "cards", items: [
        { title: "Triumphal entry", body: "Jesus rode into Jerusalem on a donkey (Palm Sunday). People spread cloaks and palm branches and shouted, 'Hosanna!'" },
        { title: "Cleansing of the temple", body: "He drove out the money changers and sellers: 'My house will be called a house of prayer, but you have made it a den of robbers.'" },
        { title: "Judas's betrayal", body: "Judas Iscariot agreed with the chief priests to betray Jesus for thirty pieces of silver." },
        { title: "The Last Supper", body: "Jesus ate the Passover meal with the Twelve. He washed their feet (John 13), broke the bread and shared the cup as his body and blood of the new covenant ('Do this in remembrance of me') and predicted Judas's betrayal and Peter's denial." },
        { title: "Gethsemane", body: "He prayed in agony, 'Father, if you are willing, take this cup from me; yet not my will, but yours be done.' The disciples slept." },
      ]},
      { heading: "Arrest and Trials", type: "steps", items: [
        "Judas led the soldiers and identified Jesus with a kiss. Peter cut off the ear of Malchus, the high priest's servant. Jesus healed it. The disciples fled.",
        "Jesus was taken to Annas and then Caiaphas and the Sanhedrin, where false witnesses accused him. He admitted he was the Christ, the Son of God, and was condemned for blasphemy.",
        "Peter denied Jesus three times before the cock crowed, then wept bitterly.",
        "The Jews brought Jesus to PILATE, the Roman governor, accusing him of claiming to be a king. Pilate found no fault and sent him to Herod Antipas, who mocked him and returned him.",
        "Pilate offered to release Jesus or BARABBAS (a rebel and murderer). The crowd chose Barabbas. Pilate washed his hands and had Jesus flogged and handed over."
      ]},
      { heading: "The Crucifixion", type: "cards", items: [
        { title: "The way to the cross", body: "Soldiers mocked him with a crown of thorns and a purple robe. SIMON OF CYRENE was forced to carry the cross." },
        { title: "Golgotha ('the place of the skull')", body: "He was crucified between two criminals. The notice read 'King of the Jews'. Soldiers cast lots for his clothes." },
        { title: "Sayings from the cross", body: "'Father, forgive them.' 'Today you will be with me in paradise.' 'Woman, behold your son' (to Mary and John). 'My God, my God, why have you forsaken me?' 'I thirst.' 'It is finished.' 'Father, into your hands I commit my spirit.'" },
        { title: "Signs", body: "Darkness from noon to three, the temple curtain torn in two, an earthquake. The centurion said, 'Surely he was the Son of God.'" },
        { title: "Burial", body: "JOSEPH OF ARIMATHEA asked Pilate for the body. He and NICODEMUS wrapped it and laid it in a new tomb. A guard was posted and the tomb sealed." },
      ]},
      { heading: "The Resurrection and After", type: "steps", items: [
        "On the first day of the week, MARY MAGDALENE and other women came to the tomb and found the stone rolled away and the tomb empty. Angels told them he had risen.",
        "Jesus appeared to Mary Magdalene, then to the disciples, including on the road to Emmaus (Cleopas and another, who recognised him at the breaking of bread).",
        "THOMAS doubted until he saw the wounds: 'My Lord and my God!' Jesus said, 'Blessed are those who have not seen and yet have believed.'",
        "By the lake in Galilee Jesus restored Peter ('Do you love me? Feed my sheep').",
        "The Great Commission: 'Go and make disciples of all nations, baptising them... and teaching them to obey everything I have commanded you.'",
        "After 40 days Jesus ascended into heaven from the Mount of Olives."
      ]},
      { heading: "Meaning", type: "cards", items: [
        { title: "Atonement", body: "Jesus died for the sins of the world." },
        { title: "Victory over death", body: "The resurrection confirms his claims and gives hope of eternal life." },
        { title: "Example of obedience and forgiveness", body: "'Not my will, but yours.'" },
        { title: "Mission", body: "Believers are sent to spread the gospel." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Peter denied Jesus three times. Judas betrayed with a kiss.",
        "Barabbas was released instead of Jesus.",
        "Joseph of Arimathea and Nicodemus buried Jesus.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Palm Sunday, Last Supper, Gethsemane, Judas's kiss, Peter's denial, Pilate and Barabbas, Golgotha, seven sayings, Joseph of Arimathea, empty tomb, Thomas, Great Commission, Ascension." }
    ]
  },

  "The Acts of the Apostles": {
    subject: "CRK", title: "The Acts of the Apostles",
    icon: "🔥", estimatedTime: "5 min read",
    sections: [
      { heading: "Overview", type: "text",
        content: "Acts was written by LUKE (the same author as the Gospel of Luke) for Theophilus. It tells how the Holy Spirit empowered the apostles to spread the gospel from Jerusalem to Judea and Samaria and to the ends of the earth (Acts 1:8)." },
      { heading: "The Early Church in Jerusalem", type: "cards", items: [
        { title: "Ascension and Matthias", body: "Jesus ascended after 40 days. The apostles chose MATTHIAS by lot to replace Judas." },
        { title: "Pentecost (Acts 2)", body: "On the day of Pentecost the Holy Spirit came with a sound like a rushing wind and tongues of fire. The apostles spoke in other languages. Peter preached and about 3,000 were baptised." },
        { title: "Life of the believers", body: "They devoted themselves to the apostles' teaching, fellowship, breaking of bread and prayer, and shared their goods." },
        { title: "Healing the lame man (Acts 3)", body: "Peter and John healed a man at the Beautiful Gate: 'Silver and gold I do not have, but what I have I give you. In the name of Jesus Christ, walk.' They were arrested and told by the Sanhedrin not to preach. They replied, 'We must obey God rather than men.'" },
        { title: "Ananias and Sapphira (Acts 5)", body: "They lied about the price of their land and both died." },
        { title: "The seven deacons (Acts 6)", body: "Chosen to serve the widows who were neglected, including STEPHEN and PHILIP." },
        { title: "Stephen's martyrdom (Acts 7)", body: "Stephen preached and was stoned. He prayed, 'Lord, do not hold this sin against them.' Saul approved." },
      ]},
      { heading: "Spread of the Gospel", type: "cards", items: [
        { title: "Philip and the Ethiopian (Acts 8)", body: "Philip explained Isaiah 53 to the Ethiopian official on the road to Gaza and baptised him. Philip also preached in Samaria." },
        { title: "Saul's conversion (Acts 9)", body: "On the road to Damascus to persecute Christians, a light flashed and Jesus asked, 'Saul, Saul, why do you persecute me?' Saul was blinded. Ananias prayed for him and he received sight and was baptised." },
        { title: "Peter and Cornelius (Acts 10)", body: "Peter had a vision of a sheet with unclean animals, then preached to the Roman centurion CORNELIUS. The Gentiles received the Spirit." },
        { title: "Antioch (Acts 11)", body: "The disciples were first called CHRISTIANS at Antioch. Barnabas brought Saul there." },
        { title: "Peter's escape (Acts 12)", body: "Herod killed James and imprisoned Peter. An angel freed him." },
      ]},
      { heading: "Paul's Missionary Journeys", type: "cards", items: [
        { title: "First (Acts 13-14)", body: "Paul and Barnabas, with John Mark, sent from Antioch. Cyprus (Elymas the sorcerer, proconsul Sergius Paulus), Pisidian Antioch, Iconium, Lystra (Paul healed a cripple and was stoned) and Derbe." },
        { title: "Jerusalem Council (Acts 15)", body: "Decided Gentile converts need not be circumcised or keep the Law of Moses." },
        { title: "Second (Acts 15-18)", body: "Paul and SILAS, joined by Timothy and Luke. Philippi (Lydia converted; the jailer converted after the earthquake), Thessalonica, Berea, Athens (sermon at the Areopagus on the unknown god), Corinth (met Aquila and Priscilla)." },
        { title: "Third (Acts 18-21)", body: "Mainly Ephesus (about three years). The silversmith Demetrius led a riot. Paul said farewell to the Ephesian elders at Miletus." },
        { title: "Arrest and Rome (Acts 21-28)", body: "Arrested in Jerusalem, held at Caesarea, appealed to Caesar before Festus and Agrippa. Shipwrecked on Malta and bitten by a viper. He reached Rome and preached there under house arrest." },
      ]},
      { heading: "Lessons", type: "cards", items: [
        { title: "Power of the Holy Spirit", body: "Witnessing needs the Spirit's power." },
        { title: "Unity and sharing", body: "The early church cared for the poor." },
        { title: "Courage in persecution", body: "Peter, Stephen and Paul." },
        { title: "The gospel is for all", body: "Gentiles as well as Jews." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Stephen was the first Christian martyr.",
        "Believers were first called Christians in ANTIOCH.",
        "Barnabas went with Paul on the first journey. Silas went on the second.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Pentecost (3,000), lame man, Ananias and Sapphira, Stephen, Philip and Ethiopian, Saul on the Damascus road, Cornelius, Antioch, Council of Jerusalem, 3 journeys, Rome." }
    ]
  },

  "The Law": {
    subject: "CRK", title: "The Law",
    icon: "📜", estimatedTime: "4 min read",
    sections: [
      { heading: "Overview", type: "text",
        content: "The Law (Torah) is the first five books of the Bible (Genesis to Deuteronomy), especially the commandments God gave Israel through Moses at Mount Sinai after the Exodus. It governed Israel's worship and social life under the covenant." },
      { heading: "The Ten Commandments (Exodus 20, Deuteronomy 5)", type: "steps", items: [
        "You shall have no other gods before me.",
        "You shall not make for yourself an idol.",
        "You shall not misuse the name of the LORD your God.",
        "Remember the Sabbath day and keep it holy.",
        "Honour your father and your mother.",
        "You shall not murder.",
        "You shall not commit adultery.",
        "You shall not steal.",
        "You shall not give false testimony against your neighbour.",
        "You shall not covet."
      ]},
      { heading: "How the Commandments Divide", type: "cards", items: [
        { title: "Commandments 1 to 4", body: "Duty to God: worship, no idols, respect His name, the Sabbath." },
        { title: "Commandments 5 to 10", body: "Duty to neighbour: family, life, marriage, property, truth and contentment." },
        { title: "The covenant", body: "God said, 'I am the LORD your God who brought you out of Egypt.' The commandments were given to a people already redeemed. Israel agreed, 'We will do everything the LORD has said.'" },
        { title: "The tablets", body: "Written on two stone tablets and kept in the ark of the covenant." },
      ]},
      { heading: "Other Parts of the Law", type: "cards", items: [
        { title: "Moral law", body: "Ten Commandments and laws on justice, honesty, care for widows, orphans, foreigners and the poor." },
        { title: "Civil law", body: "Rules about property, slavery, injury and courts (the Book of the Covenant)." },
        { title: "Ceremonial law", body: "Priests, tabernacle, sacrifices, clean and unclean foods, feasts: Passover, Pentecost (Weeks), Tabernacles, Day of Atonement." },
        { title: "The Shema (Deuteronomy 6:4-5)", body: "'Hear, O Israel: The LORD our God, the LORD is one. Love the LORD your God with all your heart and with all your soul and with all your strength.'" },
        { title: "Sabbath year and Jubilee", body: "Land rested every seventh year; debts were released and land returned in the fiftieth year." },
      ]},
      { heading: "Jesus and the Law", type: "cards", items: [
        { title: "Fulfilment", body: "'I have not come to abolish the Law or the Prophets but to fulfil them' (Matthew 5:17)." },
        { title: "Summary", body: "The greatest commandments: love God and love your neighbour as yourself (Matthew 22:37-40)." },
        { title: "Deeper meaning", body: "In the Sermon on the Mount, murder includes anger and adultery includes lustful looks." },
        { title: "Sabbath", body: "'The Sabbath was made for man, not man for the Sabbath.' He healed on the Sabbath." },
        { title: "Paul", body: "The Law shows what sin is and was a custodian to lead us to Christ (Galatians 3:24). Salvation is by faith, not by works of the law." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "The Law was given AFTER the Exodus, at Sinai.",
        "The commandments about God come first (1 to 4), then about people (5 to 10).",
        "Jesus fulfilled the Law. He did not abolish it.",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Torah = first five books. Ten Commandments: 4 about God, 6 about people. Summary: love God and neighbour. Jesus fulfils the law. Law is a custodian leading to Christ." }
    ]
  },

  "The Epistles": {
    subject: "CRK", title: "The Epistles",
    icon: "✉️", estimatedTime: "5 min read",
    sections: [
      { heading: "Overview", type: "text",
        content: "The epistles are letters written by apostles to churches and individuals to teach doctrine, correct errors, encourage believers and give guidance on Christian living. There are 21 in the New Testament." },
      { heading: "Pauline Epistles (13)", type: "cards", items: [
        { title: "Romans", body: "Justification by faith. All have sinned (3:23). The wages of sin is death but the gift of God is eternal life (6:23). Faith brings peace with God (5:1). Chapter 12: offer yourselves as living sacrifices." },
        { title: "1 Corinthians", body: "Written to a divided, immoral church in Corinth. Unity, the Lord's Supper, spiritual gifts (chapter 12), LOVE (chapter 13) and the resurrection (chapter 15)." },
        { title: "2 Corinthians", body: "Paul's ministry and suffering, cheerful giving (chapter 9), reconciliation." },
        { title: "Galatians", body: "Salvation by grace through faith, not by the law or circumcision. The fruit of the Spirit (5:22-23)." },
        { title: "Ephesians", body: "Unity of the church as the body of Christ, saved by grace through faith (2:8-9), family relationships, the armour of God (chapter 6)." },
        { title: "Philippians", body: "Written in prison. Joy and humility. The example of Christ (chapter 2)." },
        { title: "Colossians", body: "The supremacy of Christ against false teaching." },
        { title: "1 and 2 Thessalonians", body: "Encouragement under persecution. The return (second coming) of Christ. Don't be idle." },
        { title: "1 and 2 Timothy, Titus", body: "Pastoral letters: qualities of elders, bishops and deacons, sound teaching, church order." },
        { title: "Philemon", body: "Paul asks Philemon to forgive and receive back his runaway slave Onesimus as a brother." },
      ]},
      { heading: "General (Catholic) Epistles", type: "cards", items: [
        { title: "Hebrews", body: "Jesus is greater than angels, Moses and the priests. Faith (chapter 11, the heroes of faith)." },
        { title: "James", body: "Faith without works is dead. Control of the tongue. Care for the poor. Patience." },
        { title: "1 and 2 Peter", body: "Suffering for Christ, holy living, submission, false teachers, the day of the Lord." },
        { title: "1, 2 and 3 John", body: "God is love. Love one another. Test the spirits. Walk in truth." },
        { title: "Jude", body: "Warning against false teachers, contend for the faith." },
      ]},
      { heading: "Fruit of the Spirit (Galatians 5:22-23)", type: "text",
        content: "Love, joy, peace, patience (forbearance), kindness, goodness, faithfulness, gentleness and self-control." },
      { heading: "Armour of God (Ephesians 6)", type: "cards", items: [
        { title: "Belt", body: "Truth." },
        { title: "Breastplate", body: "Righteousness." },
        { title: "Shoes", body: "Readiness from the gospel of peace." },
        { title: "Shield", body: "Faith." },
        { title: "Helmet", body: "Salvation." },
        { title: "Sword", body: "The word of God (sword of the Spirit)." },
      ]},
      { heading: "Spiritual Gifts and Love (1 Corinthians 12-13)", type: "cards", items: [
        { title: "Gifts", body: "Wisdom, knowledge, faith, healing, miracles, prophecy, discernment, tongues and interpretation. Different gifts, same Spirit." },
        { title: "One body", body: "Many parts, one body. Each member is needed." },
        { title: "Love", body: "The greatest of faith, hope and love is love. Love is patient, kind, not proud or self-seeking, keeps no record of wrongs and never fails." },
      ]},
      { heading: "Watch Out!", type: "warning", items: [
        "Galatians is about grace versus law. James is about faith shown by works. They do not contradict each other.",
        "Philippians was written from prison but is full of joy.",
        "Hebrews' author is unknown (not named).",
      ]},
      { heading: "Quick Tip", type: "tip",
        content: "Romans = justification by faith. 1 Cor = gifts, love (13), resurrection (15). Galatians = grace and fruit of the Spirit. Ephesians = armour of God. Philippians = joy. James = faith and works. 1 John = love." }
    ]
  },

}

export default CRK_EXTRA_GUIDES
