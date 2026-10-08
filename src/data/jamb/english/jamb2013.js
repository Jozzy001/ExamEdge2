// JAMB 2013 English Language Past Questions
// Structure: grouped internally, then flattened for the app

// ---------- helpers ----------
const make = (topic, reason) => (question, options, answer) => ({
  topic,
  year: 2013,
  subject: "English",
  exam: "JAMB",
  question,
  options,
  answer,
  explanation: `The correct answer is "${answer}" because ${reason}.`,
});

const comp = make(
  "Comprehension",
  "it best completes or answers the passage-based question"
);

const cloze = make(
  "Cloze Test",
  "it best completes or answers the passage-based question"
);

const lit = make(
  "Literature",
  "it is correct according to the literature question in the supplied 2013 paper"
);

const lexis = make(
  "Lexis & Structure",
  "it best matches the meaning or grammatical relationship tested in the question"
);

const fill = make(
  "Lexis & Structure",
  "it is the option that correctly completes the sentence according to the supplied question"
);

const oral = make(
  "Oral English",
  "it matches the required pronunciation or stress pattern"
);

const stress = make(
  "Stress",
  "it matches the required pronunciation or stress pattern"
);

const emph = make(
  "Emphatic Stress",
  "it correctly identifies the part of the sentence receiving the emphatic stress"
);


// ============================================================
// JAMB 2013 QUESTIONS
// ============================================================

const jamb2013Groups = [

  // ==========================================================
  // PASSAGE I — Pottery Training Centre
  // ==========================================================
  {
    passage:
      "In 1951, the Government decided to start a Pottery Training Centre where new and more advanced technical methods, especially glazing, could be taught. The centre was intended to serve the whole of the defunct Northern Region, and there were several reasons for choosing Abuja. The first was the excellence of the traditional pottery made in the Emirate. Secondly, fire-wood is plentiful; this is a most important consideration, because in the making of glazed pottery, more firewood than clay is required. Thirdly, there are good clays, and good local sources for the raw materials needed for the glazes. Fourthly, water, which is another important raw material, is plentiful. Finally, Abuja is in a central position for the whole region and is a town where learners from many different parts can find a congenial temporary home, and where the Emir and his Council are actively interested in the project. Nearly all the making is done by a process called ‘throwing’, so called because the lumps of clay are thrown by the potter onto a wheel head. They are weighed out so that each pot will be roughly the same size; for example, for making pint-sized jugs, the lumps of clay will be one and a half kilogrammes. The potter sits on the saddle of the wheel and spins it by pushing a pedal with his left foot. He has a bowl of water, a loofah, a bamboo knife, a pointed stick or porcupine quill, a wooden-smoothing tool which potters call a rib, and a piece of wire-like object that is used for wedging. He makes the wheel head slightly damp, and throws the lumps into the middle. The first work is to force the lump to the centre, then he presses his thumb into the middle of the lump, using water to keep it slippery. When the bottom is of the right thickness, he begins to draw up the walls until they are of the right height. Then he shapes the belly and shoulder of the pot. He trims off any waste clay. In this way, a small and medium-sized pot can be made more quickly and accurately.",

    questions: [
      comp(
        "Which question Paper Type of Uses of English is given to you?",
        ["Type D", "Type I", "Type B", "Type U"],
        "Type B"
      ),

      comp(
        "Which of the following is true according to the passage?",
        [
          "Anyone, with almost no training, can run pots on a wheel.",
          "Pots can be made quickly and correctly.",
          "A pot thrown on a wheel is less likely to break.",
          "The potter does not have to work hard if he uses the wheel.",
        ],
        "Pots can be made quickly and correctly."
      ),

      comp(
        "From the passage, how does a potter make several pots of almost identical size?",
        [
          "By having the knowledge of different pots.",
          "By weighing the lumps of clay.",
          "By having the right tools",
          "By knowing what to do from experience.",
        ],
        "By weighing the lumps of clay."
      ),

      comp(
        "The phrase trims off any waste clay, as used in the passage, means to---",
        [
          "cut away unnecessary parts",
          "force the clay to the centre",
          "divide the clay into two",
          "wash away different colours.",
        ],
        "cut away unnecessary parts"
      ),

      comp(
        "The word congenial, as used in the passage, means---",
        ["congested", "precise", "similar", "nice"],
        "nice"
      ),
    ],
  },


  // ==========================================================
  // PASSAGE II — Music
  // ==========================================================
  {
    passage:
      "Music plays a vital role in human society. Good music provides entertainment and emotional release, and it accompanies activities ranging from dances to religious ceremonies. Music is heard everywhere; in auditoriums, homes, elevators, schools, sports arenas and on the streets. Recorded performance is a sensational innovation elevation of the twentieth century. Thanks to modern technology like compact disc (CD) digital video disc (DVD) and the MP 3 player, music can now be heard in diverse places. Such places include living rooms and cars, jogging paths can also function as new kinds of concert halls where we can hear what we want as often as we want. Live performances provide a special excitement. In a live performance artistes put themselves on the line. To avoid embarrassment, the artiste must train before hand and ensure that technical difficulties are avoided and that the listeners are actively involved. What is performed, how it sounds to the excitement of such a moment and feelings are exchanged between stage and hall. Our response to a musical performance or an artiste is subjective and rooted in deep feelings. Even professional critics can differ strongly in their evaluations of a performance. There is no one ''Truth'' about what we hear and feel. Does the performed project a concept, an overall idea, or an emotion? Do some sections of a piece, but not others, communicate something to you? Can you figure out why? It is up to us as listeners to evaluate performances of music so that we can fully enjoy it. People listen to music in many different ways. For instance, music can be a barely perceived background as in a film or a totally absorbing experience as in a concert. Adapted from Roger, K. (1990) An Appreciation Music: Fourth Brief Edition, McGrow-Hill Higher Education.",

    questions: [
      comp(
        "Which of the following is true according to the passage?",
        [
          "Music can enhance evaluation performance",
          "All listeners are music makers",
          "All artistes are objective in their feelings.",
          "Music influences feelings at different levels",
        ],
        "Music can enhance evaluation performance"
      ),

      comp(
        "The expression…..stage and hall, as used in the passage, means the",
        [
          "artiste and his music",
          "artiste and the audience",
          "producer and the director",
          "director and the audience",
        ],
        "artiste and the audience"
      ),

      comp(
        "From the passage, it can be deduced that music Is –",
        [
          "appreciated as the environment dictates .",
          "better appreciated in a crowd",
          "better appreciated when we are happy",
          "better appreciated by professional critics",
        ],
        "appreciated as the environment dictates ."
      ),

      comp(
        "According to the writer, live performances provide a special excitement because they are",
        ["stage-managed", "interactive", "error-free and original", "educative"],
        "interactive"
      ),

      comp(
        "According to the passage, music plays a vital role in human society because--",
        [
          "music provides enjoyment and relief",
          "it is easy to appreciate music",
          "stage performance is the most popular music opportunity.",
          "everybody can listen to music through the CD, MP3 and DVD.",
        ],
        "music provides enjoyment and relief"
      ),
    ],
  },


  // ==========================================================
  // PASSAGE III — Hydrogen Bomb / Cloze
  // ==========================================================
  {
    passage:
      "Whatever may be its wider imputations, the explosion of hydrogen bomb is, for the meteorologist, simply another atmospheric disturbance. It should therefore be classified with certain rare natural…..11…… (A. programmes B. occurrences C. resources D. laws), such as volcanic…12….[A. insurrection B. exhaustion C. eruption D. expulsion]. But there are certain features of a man-made disturbance that requires special examination. As with all events on this…13… [A. scanner B. skate C. snow D. scale), it is impossible to describe what happens in details. However we can be reasonably sure of the main effects, and the most impressive of these arises from…14….. (A. pressure waves B. pressure volume C. pressure air D. pressure gauge ). The immediate result of the…15… (A. reduction B. commotion C. detonation D. distortion) is that the air surrounding the bomb is raised very rapidly to an enormously high…16… (A. way B. temperature C. class D. profile]. The hot gases expand violently as great…17…(A firearms B. fireballs C. fireworks D. firesmokes), compressing the air around them into what is called…18…[A. shock jocks B. shock therapy C. shock waves D. shock troops), or blast wave that is responsible for much of terrible destructive power of-the weapon. Another kind of wave arises because of the weight of the air. The force of the explosion lifts the…19… (A. form B. atmosphere C. space D. height around the bomb. The gravity waves can also resemble ordinary…..20….. (A. stream B. lake C. ocean D. river) waves. Waves of this type are normally felt by human beings and they have their effect on the weather.",

    questions: [
      cloze(
        "It should therefore be classified with certain rare natural _____.",
        ["programmes", "occurrences", "resources", "laws"],
        "occurrences"
      ),

      cloze(
        "...such as volcanic _____",
        ["insurrection", "exhaustion", "eruption", "expulsion"],
        "eruption"
      ),

      cloze(
        "As with all events on this _____, it is impossible to describe what happens in details.",
        ["scanner", "skate", "snow", "scale"],
        "scale"
      ),

      cloze(
        "...the most impressive of these arises from _____.",
        ["pressure waves", "pressure volume", "pressure air", "pressure gauge"],
        "pressure waves"
      ),

      cloze(
        "The immediate result of the _____ is that the air surrounding the bomb is raised...",
        ["reduction", "commotion", "detonation", "distortion"],
        "detonation"
      ),

      cloze(
        "...to an enormously high _____.",
        ["way", "temperature", "class", "profile"],
        "temperature"
      ),

      cloze(
        "The hot gases expand violently as great _____.",
        ["firearms", "fireballs", "fireworks", "firesmokes"],
        "fireballs"
      ),

      cloze(
        "...into what is called _____.",
        ["shock jocks", "shock therapy", "shock waves", "shock troops"],
        "shock waves"
      ),

      cloze(
        "The force of the explosion lifts the _____ around the bomb.",
        ["form", "atmosphere", "space", "height"],
        "atmosphere"
      ),

      cloze(
        "The gravity waves can also resemble ordinary _____ waves.",
        ["stream", "lake", "ocean", "river"],
        "ocean"
      ),
    ],
  },


  // ==========================================================
  // LITERATURE
  // ==========================================================
  {
    passage: null,

    questions: [
      lit(
        "In their preparation for the masquerade, David and others agreed to exercise extra caution in their dealings with Samuel because he would.",
        [
          "force them to dance with the masquerade.",
          "try his tricks on them to know their secrets",
          "prepare well ahead of them",
          "put them to shame.",
        ],
        "try his tricks on them to know their secrets"
      ),

      lit(
        "In the novel; Nwomiko was famous for her",
        [
          "lack of fighting spirit",
          "spiritual powers",
          "political struggles",
          "lack of spiritual values",
        ],
        "spiritual powers"
      ),

      lit(
        "With remarkable agility, he mounted The Fallen Goliath and went on to stuff his mouth with earth. Who was the Fallen Goliath in the excerpt above?",
        ["Cromwell", "David", "Polycarp", "Samuel"],
        "Samuel"
      ),

      lit(
        "If you have not beheld your chi in his stark nakedness, be prepared to do so as soon as you set foot in that man’s house. From the excerpt above, whose house was being referred to?",
        ["Mazi Nwokike", "Teacher Zaccheus", "Mazi Okeke", "Mazi Laze"],
        "Teacher Zaccheus"
      ),

      lit(
        "In the novel, the people of Umuchukwu likened samuel to",
        ["a swimmer", "an ancestral spirit", "a chief priest", "a fisherman"],
        "an ancestral spirit"
      ),

      lit(
        "Obu dashed out of the school building because",
        [
          "he was given a prize by the headmaster",
          "his teacher wanted to flog him",
          "he came top of Standard I",
          "his teacher sent him on an errand.",
        ],
        "his teacher wanted to flog him"
      ),

      lit(
        "In the novel, Bright lived with Teacher because",
        [
          "his father had gone on a long journey",
          "he was Teacher’s nephew",
          "his father was indebted to Teacher",
          "he wanted to become a teacher.",
        ],
        "his father had gone on a long journey"
      ),

      lit(
        "According to the novel, Obu was good at",
        ["Jokes", "proverbs", "cricket", "games"],
        "cricket"
      ),

      lit(
        "Uke was conscripted into the military because",
        [
          "he wanted to travel to Burma",
          "he was a social nuisance",
          "he loved the British soldiers",
          "his grandfather was a military man.",
        ],
        "he was a social nuisance"
      ),

      lit(
        "In the novel, the ‘pad’ was a symbol of",
        ["love", "success", "unity", "failure"],
        "love"
      ),

      lit(
        "It can be inferred from the novel that Mr. Eze was Terkura Atsen’s",
        ["business partner", "uncle", "role model", "boss."],
        "role model"
      ),

      lit(
        "From the novel, David thought Ifenne should be involved in politics because he wanted him to ………",
        [
          "make a ‘name’ for posterity",
          "rig the election for someone",
          "take part in the election process",
          "extort money from the people.",
        ],
        "make a ‘name’ for posterity"
      ),

      lit(
        "The civil war created business opportunities for people like Owiocho because",
        [
          "he became the supplier of all essential commodities",
          "the Ibos were conscripted into the army",
          "the exit of the Ibos created a vacuum",
          "the Ibos had ventured into other businesses.",
        ],
        "the exit of the Ibos created a vacuum"
      ),

      lit(
        "My boy, your future is bright, you can be anything you want to be …. The statement above was made because Ifenne had",
        [
          "purchased his first bus",
          "been working for others to make profit",
          "been planning to excel",
          "proven himself faithful and committed.",
        ],
        "proven himself faithful and committed."
      ),

      lit(
        "The departure of Ibo competitors to the East had favoured",
        [
          "Okoh’s marriage",
          "Mama Okoh’s business",
          "Torkwase at Otukpo",
          "Sgt. Onyilo in the war front.",
        ],
        "Mama Okoh’s business"
      ),
    ],
  },


  // ==========================================================
  // LEXIS & STRUCTURE / ORAL ENGLISH
  // ==========================================================
  {
    passage: null,

    questions: [

      // ---------- Idioms / Meaning ----------
      lexis(
        "The team’s poor performance at the tournament plumb the depths of horror.",
        [
          "The team’s performance took them to the next round.",
          "The team’s performance was enjoyed by all",
          "The team’s performance was full of disappointment.",
          "The team’s performance was rewarded.",
        ],
        "The team’s performance was full of disappointment."
      ),

      lexis(
        "Tolu and Chinedu live in each other’s pockets.",
        [
          "They are long-term business partners",
          "They steal from each other.",
          "They blackmail each other.",
          "They are very close to each other.",
        ],
        "They are very close to each other."
      ),

      lexis(
        "As the drama unfolded, Olatinuke was advised",
        [
          "She was advised to wear her shirt",
          "She was advised to commit herself",
          "She was advised to stay calm.",
          "She was advised to join the club.",
        ],
        "She was advised to stay calm."
      ),

      lexis(
        "He is a clinging child.",
        [
          "He is a handsome young man",
          "He is possessive",
          "He likes to cling with his sister",
          "He is a bully.",
        ],
        "He is possessive"
      ),

      lexis(
        "Zinana’s examination result was not unfavorable.",
        [
          "She failed her examination",
          "Her examination did not meet her expectation.",
          "She was successful in the examination",
          "Her result could not earn her admission.",
        ],
        "She was successful in the examination"
      ),

      lexis(
        "You need to brush up on your Spanish.",
        [
          "You need to study the history of Spain",
          "You need to improve your skills",
          "You need a brush from Spain",
          "You need to learn to play with a Spaniard.",
        ],
        "You need to improve your skills"
      ),

      lexis(
        "Amaka Would pass for a beauty queen",
        [
          "She would pass the drink to the queen who is sitting next to her.",
          "She would be accepted by all as a beauty queen.",
          "She walked past the beauty queen.",
          "She was acting as a beauty queen.",
        ],
        "She would be accepted by all as a beauty queen."
      ),

      lexis(
        "‘I can’t wait to become a mother,’ The new bride declared",
        [
          "She sees motherhood as a burden",
          "She is excited about motherhood",
          "She is not keen on becoming a mother",
          "She will be patient as a mother.",
        ],
        "She is excited about motherhood"
      ),

      lexis(
        "Usman needs to get his acts together if he wants to pass the examination.",
        [
          "He needs to put all points down in the examination",
          "He needs to organize himself.",
          "He needs to be fast when writing the examination.",
          "He needs to put on his stage costume.",
        ],
        "He needs to organize himself."
      ),

      lexis(
        "Ramatu expressed her feelings in no uncertain terms.",
        [
          "She expressed it clearly and strongly.",
          "She expressed it secretly and courageously.",
          "She expressed it quietly and cautiously.",
          "She expressed it feebly and sickly.",
        ],
        "She expressed it clearly and strongly."
      ),


      // ---------- Synonyms / Antonyms ----------
      lexis(
        "Chibuzor gave a curt nod and walked away.",
        ["gentle.", "rude.", "polite.", "shocking."],
        "polite."
      ),

      lexis(
        "The girl took a cursory glance at the letter and hid it.",
        ["sententious.", "concise.", "brief.", "lasting."],
        "lasting."
      ),

      lexis(
        "The relationship between the couple has been frosty.",
        ["fraudulent.", "cordial.", "amenable.", "frugal."],
        "cordial."
      ),

      lexis(
        "The Nobel laureate’s activity in the field of science is heinous.",
        ["indelible.", "laudable.", "deplorable.", "forgettable."],
        "laudable."
      ),

      lexis(
        "The accused was eventually convicted.",
        ["initially.", "consequently.", "subsequently.", "finally."],
        "initially."
      ),

      lexis(
        "The plebs can be found in every society of the world.",
        ["masses", "middle class", "elite", "politicians"],
        "elite"
      ),

      lexis(
        "Everyone’s condition was appalling.",
        ["simple", "cloudy", "pleasant", "complex"],
        "pleasant"
      ),

      lexis(
        "The man’s mordant wit is apparent to the entire village.",
        ["Kind", "scathing", "caustic", "withering"],
        "Kind"
      ),

      lexis(
        "The war against malaria keeps waxing.",
        ["happening", "decreasing", "increasing", "wavering"],
        "decreasing"
      ),

      lexis(
        "The soldiers tried in their dogged defence of the city.",
        ["indifferent", "strong", "miserable", "classical"],
        "indifferent"
      ),

      lexis(
        "Ayodeji is an ardent supporter of education for the girl child.",
        ["an optimistic", "a cogent", "a passionate", "an ignorant"],
        "a passionate"
      ),

      lexis(
        "The scholars’ epitaph was demolished.",
        ["monument", "embodiment", "farmland", "book"],
        "monument"
      ),

      lexis(
        "Mohammed does his work with so much ardour.",
        ["enthusiasm", "discouragement", "knowledge", "indifference"],
        "enthusiasm"
      ),

      lexis(
        "The athlete is proud to be in the vanguard of sports development.",
        [
          "unforgettable position",
          "leading position",
          "destructive position",
          "emerging position",
        ],
        "leading position"
      ),

      lexis(
        "Nwankwo was on the verge of signing a two-year contract with the club.",
        ["shore", "brink", "summit", "height"],
        "brink"
      ),

      lexis(
        "I am tired of your eternal argument",
        ["open", "constant", "strong", "useless"],
        "constant"
      ),

      lexis(
        "The lamb is a feeble little animal.",
        ["fat", "quiet", "loving", "weak"],
        "weak"
      ),

      lexis(
        "The actress screamed when she noticed an object behind her",
        ["wailed", "protested", "waded in", "stormed out"],
        "wailed"
      ),

      lexis(
        "The exhibition was an eye opener to all.",
        ["dispatch", "display", "style", "examination"],
        "display"
      ),

      lexis(
        "As a journalist, Bala has always had a nose for stories.",
        ["soft comment", "cynical statement", "an instinct", "a command"],
        "an instinct"
      ),


      // ---------- Sentence Completion ----------
      fill(
        "The girl says she is averse _____ what others admire.",
        ["for", "from", "to", "with"],
        "to"
      ),

      fill(
        "Our teacher defined _____ in his introductory...",
        ["onomatopiea", "onomatopeia", "onomatopoeia", "onomatopea"],
        "onomatopoeia"
      ),

      fill(
        "The philanthropist devoted himself _____ the poor",
        ["to helping", "in helping", "by helping", "to be helping"],
        "to helping"
      ),

      fill(
        "Tinu likes apples _____ she does not like oranges.",
        ["or", "for", "so", "but"],
        "but"
      ),

      fill(
        "The students had a _____ on Independence Day.",
        ["march past", "match pass", "march pass", "match past"],
        "march past"
      ),

      fill(
        "Do you mind _____ another hour or two",
        ["to wait", "to have waited", "wait", "waiting"],
        "waiting"
      ),

      fill(
        "The continuous rain has really _____ the soil.",
        ["melted up", "mopped up", "satiated", "saturated"],
        "saturated"
      ),

      fill(
        "The police described the boy as being _____ hand",
        ["on by", "up to", "over at", "out of"],
        "out of"
      ),

      fill(
        "It was very easy for the two political parties to form a _____ government",
        ["co-operative", "colonial", "collusion", "coalition"],
        "coalition"
      ),

      fill(
        "All farmers were encouraged _____ carry out fumigation on their farms",
        ["to", "from", "in", "with"],
        "to"
      ),

      fill(
        "There are lots of _____ in the park.",
        [
          "luxury buses moving fast",
          "luxury buses fast moving",
          "moving fast luxury buses",
          "fast-moving luxury buses",
        ],
        "fast-moving luxury buses"
      ),

      fill(
        "Yours is to command _____ is to obey",
        ["their", "theirs", "theirs'", "their's"],
        "theirs"
      ),

      fill(
        "Local governments are authorized to pass _____",
        ["bye's-law", "bye-law", "bye-laws", "byes'-laws"],
        "bye-laws"
      ),

      fill(
        "Umar: I have never visited the dentist. Aliyu: _____",
        ["neither have I", "I also never", "neither myself", "I myself haven't"],
        "neither have I"
      ),

      fill(
        "Usman would have won the race _____",
        [
          "if he had run fast",
          "although he ran faster",
          "only if he could run fast",
          "if he had run faster",
        ],
        "if he had run faster"
      ),

      fill(
        "My father told me to take the money from _____ it",
        [
          "ever who offers",
          "whoever offers",
          "whomever offers",
          "whomsoever offer",
        ],
        "whoever offers"
      ),

      fill(
        "Our teacher defined _____ as the killing of one's mother.",
        ["patriach", "matricide", "matriarch", "patricide"],
        "matricide"
      ),

      fill(
        "If you are confused _____ anything, phone my office.",
        ["about", "for", "of", "with"],
        "about"
      ),

      fill(
        "We have a family mutiny _____ our hands.",
        ["from", "of", "on", "for"],
        "on"
      ),

      fill(
        "We should try to help _____",
        [
          "the less fortunate",
          "this less fortunate",
          "the less fortunates",
          "less fortunate.",
        ],
        "the less fortunate"
      ),


      // ---------- Oral English ----------
      oral(
        "glacier",
        ["gleam", "flat", "feign", "glass"],
        "feign"
      ),

      oral(
        "laud",
        ["lavatory", "loud", "lathe", "core"],
        "core"
      ),

      oral(
        "coma",
        ["colonel", "cogent", "come", "comma"],
        "cogent"
      ),

      oral(
        "lose",
        ["mouse", "nurse", "noise", "horse"],
        "noise"
      ),

      oral(
        "guitar",
        ["jam", "strange", "judge", "rogue"],
        "rogue"
      ),

      oral(
        "loose",
        ["sell", "fuse", "close", "rouse"],
        "sell"
      ),

      oral(
        "rite",
        ["list", "wit", "wright", "rim"],
        "wright"
      ),

      oral(
        "Joys",
        ["elbow", "pots", "boys", "stays"],
        "boys"
      ),

      oral(
        "Call",
        ["wall", "quail", "dull", "slate"],
        "wall"
      ),


      // ---------- Word Stress ----------
      stress(
        "dedication",
        ["dedicaTION", "deDIcation", "dediCAtion", "DEdication"],
        "dediCAtion"
      ),

      stress(
        "international",
        ["interNAtional", "internaTIONal", "INternational", "inTERnational"],
        "interNAtional"
      ),

      stress(
        "information",
        ["inforMAtion", "INformation", "informaTION", "inFORmation"],
        "inforMAtion"
      ),


      // ---------- Emphatic Stress ----------
      emph(
        "Adamu is leaving a CAR behind.",
        [
          "What is Adamu leaving behind?",
          "Is Adamu driving the car in front?",
          "Who is leaving a car behind?",
          "Where is Adamu leaving a car?",
        ],
        "What is Adamu leaving behind?"
      ),

      emph(
        "Lambusa TOOK OFF the wig.",
        [
          "Who took off the wig?",
          "What did Lambusa do?",
          "Did Lambusa take off a wig?",
          "Did Lambusa take off the ring?",
        ],
        "What did Lambusa do?"
      ),

      emph(
        "The bed is IN the room",
        [
          "Is the bed in the parlour?",
          "Was the bed in the room?",
          "What is in the room?",
          "Where is the bed?",
        ],
        "Where is the bed?"
      ),
    ],
  },
];


// ============================================================
// IMPORTANT FIX
// ============================================================
// The original file exported the groups directly.
// Your app expects one flat array containing question objects.
//
// This converts:
//
// [
//   { passage: "...", questions: [...] },
//   { passage: "...", questions: [...] }
// ]
//
// into:
//
// [
//   question1,
//   question2,
//   question3,
//   ...
// ]

const jamb2013 = jamb2013Groups.flatMap(
  group => group.questions
);


// ============================================================
// EXPORT
// ============================================================

export default jamb2013;