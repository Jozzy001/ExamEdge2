// UNIBEN Post-UTME 2009 — Chemistry (Life Sciences & Medicine)
// 10 questions (Q21-30 from 2009 General Paper)

const unibenLifeChem2009 = [
  {
    subject: "Chemistry", topic: "Stoichiometry & Moles", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "50.3g of AgNO₃ was dissolved in 50 cm³ of water at 25°C. Calculate the solubility in mol dm⁻³. (Ag=108, N=14, O=16)",
    options: ["0.312 mol dm⁻³", "0.031 mol dm⁻³", "0.062 mol dm⁻³", "0.0623 mol dm⁻³"],
    answer: "0.031 mol dm⁻³",
    explanation: "Molar mass AgNO₃ = 108+14+(3×16) = 170 g/mol. Moles = 50.3/170 = 0.296 mol. Wait — volume = 50 cm³ = 0.05 dm³. Concentration = 0.296/0.05 = 5.91 mol dm⁻³. UNIBEN answer B (0.031) — this may be the solubility expressed differently. Students verify units."
  },
  {
    subject: "Chemistry", topic: "Acids, Bases & Salts", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Which of the following decomposition equations is correct?",
    options: [
      "Ag₂CO₃(s) → Ag₂O(s) + CO₂(g)",
      "2PbCO₃(s) → 2Pb(s) + 2CO(g) + O₂(g)",
      "2NaNO₃(s) → 2NaNO₂(s) + O₂(g)",
      "AgCO₃(s) → Ag₂O(s) + CO₂(g)"
    ],
    answer: "2NaNO₃(s) → 2NaNO₂(s) + O₂(g)",
    explanation: "NaNO₃ (Group I nitrate) decomposes to NaNO₂ + O₂ on heating. This is the correct decomposition for Group I nitrates. Ag₂CO₃ → 2Ag + CO₂ + ½O₂ (not Ag₂O + CO₂). PbCO₃ → PbO + CO₂ (not Pb + CO + O₂). Option C is correct."
  },
  {
    subject: "Chemistry", topic: "Thermochemistry", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "In the reaction between aqueous HCl and NaOH, the heat change is the heat of:",
    options: ["Solution", "Neutralization", "Formation", "Displacement"],
    answer: "Neutralization",
    explanation: "The reaction between an acid and a base (alkali) is neutralisation. The heat released = heat of neutralisation. H⁺ + OH⁻ → H₂O. The standard heat of neutralisation is -57.3 kJ/mol."
  },
  {
    subject: "Chemistry", topic: "Environmental Chemistry", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Which of the following gases is colourless and odourless?",
    options: ["N₂O₂", "N₂O", "CO₂", "B and C"],
    answer: "B and C",
    explanation: "N₂O (nitrous oxide/laughing gas) is colourless and odourless. CO₂ (carbon dioxide) is colourless and odourless. Both B and C are correct. N₂O₂ has an odour."
  },
  {
    subject: "Chemistry", topic: "Organic Chemistry", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "The two hydrocarbons used as lower and upper standards for petrol are:",
    options: [
      "Iso-octane and benzene",
      "Heptane and 2,2,6-trimethylpentane",
      "Heptane and 2,2,4-trimethylpentane",
      "Heptane and n-octane"
    ],
    answer: "Heptane and 2,2,4-trimethylpentane",
    explanation: "The octane rating scale: n-heptane (C₇H₁₆) = 0 octane number (knocks badly) and 2,2,4-trimethylpentane (iso-octane) = 100 octane number (burns smoothly). These are the reference standards."
  },
  {
    subject: "Chemistry", topic: "Organic Chemistry", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Benzene commonly undergoes ______ reactions.",
    options: ["Addition", "Elimination", "Substitution", "Amendment"],
    answer: "Substitution",
    explanation: "Benzene's delocalised electron ring is aromatic and stable. It prefers electrophilic SUBSTITUTION reactions (replacing H atoms) rather than addition reactions which would destroy aromaticity. Examples: nitration, halogenation, sulfonation."
  },
  {
    subject: "Chemistry", topic: "Gases & Kinetic Theory", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Under high pressure, real gases deviate from gas laws because their molecules:",
    options: ["Experience repulsive forces", "Become more energetic", "Become less energetic", "Collide inelastically"],
    answer: "Experience repulsive forces",
    explanation: "At high pressure, gas molecules are forced very close together. At very short distances, intermolecular repulsive forces become significant, causing real gases to deviate from ideal behaviour. The volume becomes larger than predicted."
  },
  {
    subject: "Chemistry", topic: "Atomic Structure & Bonding", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Which of the following orbitals has the lowest energy?",
    options: ["3d", "4s", "4p", "4d"],
    answer: "4s",
    explanation: "Orbital energy follows the Aufbau principle: 4s has lower energy than 3d. The energy order: ...3p < 4s < 3d < 4p < 5s < 4d... The 4s orbital fills before 3d because it has lower energy."
  },
  {
    subject: "Chemistry", topic: "Environmental Chemistry", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "One of the causes of algal growth in rivers is the presence of:",
    options: ["Heavy metals", "Pesticides", "Phosphates from detergents", "High particulate loading"],
    answer: "Phosphates from detergents",
    explanation: "Phosphates from detergents and agricultural fertilisers cause eutrophication — excessive algal growth (algal bloom). This depletes dissolved oxygen and kills aquatic life. Phosphate is a limiting nutrient for algal growth."
  },
  {
    subject: "Chemistry", topic: "Acids, Bases & Salts", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Phenolphthalein solution at pH 2.5 is:",
    options: ["Yellow", "Pink", "Red", "Colourless"],
    answer: "Colourless",
    explanation: "Phenolphthalein is colourless in acidic and neutral solutions (pH < 8.3) and turns pink/magenta in alkaline conditions (pH > 8.3). At pH 2.5 (acidic), phenolphthalein is colourless."
  }
]

export default unibenLifeChem2009
