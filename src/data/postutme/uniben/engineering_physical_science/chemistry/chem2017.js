// UNIBEN Post-UTME 2017/2018 — Chemistry
// 7 questions (Q25–31 from General Paper)
// Faculty: Engineering & Physical Sciences
// Analysis notes:
//   RECURRING: esterification ★, combustion products ★, hybridization ★, solubility ★
//   NEW: photochlorination of ethanoic acid, alkene oxidation to diol, basic solution definition

const unibenChem2017 = [
  {
    subject: "Chemistry", topic: "Organic Chemistry", year: 2017, exam: "Post-UTME", university: "UNIBEN",
    isHotTopic: true,
    faculty: ["engineering", "physicalsciences"],
    question: "The role played by concentrated H₂SO₄ in the esterification of ethanoic acid with an alcohol is that of a:",
    options: ["Reducing agent", "Dehydrating agent", "Catalyst", "Solvent"],
    answer: "Catalyst",
    explanation: "In esterification: CH₃COOH + ROH ⇌ CH₃COOR + H₂O. Concentrated H₂SO₄ acts primarily as a CATALYST — it speeds up the reaction. It also acts as a dehydrating agent (removing water to drive equilibrium right), but its main role in this context is as a catalyst. ★ RECURRING."
  },
  {
    subject: "Chemistry", topic: "Organic Chemistry", year: 2017, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "Which of the following is a product of the combustion of ethanol in excess air?",
    options: ["Oxygen", "Hydrogen", "Carbon(IV) oxide", "Carbon"],
    answer: "Carbon(IV) oxide",
    explanation: "Complete combustion of ethanol: C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O. In excess air (excess oxygen), complete combustion gives carbon(IV) oxide (CO₂) and water only. Incomplete combustion gives CO or carbon soot."
  },
  {
    subject: "Chemistry", topic: "Organic Chemistry", year: 2017, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "The products of the photochlorination of ethanoic acid are:",
    options: ["CH₃COOCl + HCl", "CH₃COCl + HOCl", "ClCH₂COOH + HCl", "ClCH₂COOH + HOCl"],
    answer: "ClCH₂COOH + HCl",
    explanation: "Photochlorination (free radical substitution) of ethanoic acid: CH₃COOH + Cl₂ → ClCH₂COOH + HCl (UV light). The α-hydrogen on the CH₃ group is replaced by chlorine, giving chloroethanoic acid (ClCH₂COOH) and hydrogen chloride (HCl)."
  },
  {
    subject: "Chemistry", topic: "Organic Chemistry", year: 2017, exam: "Post-UTME", university: "UNIBEN",
    isHotTopic: true,
    faculty: ["engineering", "physicalsciences"],
    question: "CH₃CH₂CH=CH₂ → CH₃CH₂CH(OH)CH₂OH. The reagent used for this conversion is:",
    options: ["Aqueous NH₃", "Aqueous NaOH", "Dilute H₂SO₄", "Acidified KMnO₄"],
    answer: "Acidified KMnO₄",
    explanation: "Converting a terminal alkene to a 1,2-diol (two adjacent OH groups) requires oxidation. Acidified KMnO₄ (cold, dilute) oxidises the C=C double bond to give a diol via dihydroxylation. This is oxidative cleavage/addition. ★ RECURRING — KMnO₄ as oxidising agent."
  },
  {
    subject: "Chemistry", topic: "Organic Chemistry", year: 2017, exam: "Post-UTME", university: "UNIBEN",
    isHotTopic: true,
    faculty: ["engineering", "physicalsciences"],
    question: "The carbon atoms in propene are:",
    options: ["Not hybridized", "sp³ hybridized", "sp² hybridized", "sp hybridized"],
    answer: "sp² hybridized",
    explanation: "Propene: CH₃−CH=CH₂. The two carbons of the C=C double bond are sp² hybridized (3 sigma bonds in a plane + 1 π bond). The terminal CH₃ carbon is sp³. UNIBEN's answer refers to the alkene carbons which are sp² hybridized. ★ RECURRING — hybridization appeared in 2012."
  },
  {
    subject: "Chemistry", topic: "Water & Solutions", year: 2017, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "What is the solubility of substance A in 50 cm³ of a saturated solution containing 8.0 g of A? (Aᵣ = 60)",
    options: ["3.67 mol/dm³", "2.67 mol/dm³", "1.67 mol/dm³", "7.67 mol/dm³"],
    answer: "2.67 mol/dm³",
    explanation: "Moles of A = mass/Mᵣ = 8.0/60 = 0.1333 mol. Volume = 50 cm³ = 0.05 dm³. Solubility = 0.1333/0.05 = 2.67 mol/dm³."
  },
  {
    subject: "Chemistry", topic: "Acids, Bases & Salts", year: 2017, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "An aqueous solution is basic if:",
    options: [
      "It contains more OH⁻ than H₂O",
      "It contains more H₂O than OH⁻",
      "Its pH value is low",
      "It has a sour taste"
    ],
    answer: "It contains more OH⁻ than H₂O",
    explanation: "A basic (alkaline) solution has [OH⁻] > [H⁺] and pH > 7. UNIBEN answer A says 'more OH⁻ than H₂O' — this is technically imprecise (H₂O is at ~55.5 mol/dm³, far exceeding OH⁻), but in this context it means OH⁻ dominates over H⁺. Low pH = acidic (C is wrong). Sour taste = acidic (D is wrong)."
  }
]

export default unibenChem2017
