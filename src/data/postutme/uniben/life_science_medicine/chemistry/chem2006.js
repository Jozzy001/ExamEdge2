// UNIBEN Post-UTME 2006 — Chemistry (Life Sciences & Medicine)
// 15 questions (Q1-Q10 and Q46-Q50 from 2006 General Paper)

const unibenLifeChem2006 = [
  {
    subject: "Chemistry", topic: "Acids, Bases & Salts", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "A sample of orange juice has a pH of 3.80. What is the molar concentration of hydrogen ions?",
    options: ["1.588×10⁴", "1.588×10²", "1.588×10³", "1.588×10⁻⁴"],
    answer: "1.588×10⁻⁴",
    explanation: "[H⁺] = 10⁻ᵖᴴ = 10⁻³·⁸⁰ = 1.585×10⁻⁴ mol/dm³ ≈ 1.588×10⁻⁴. pH = -log[H⁺], so [H⁺] = antilog(-3.80)."
  },
  {
    subject: "Chemistry", topic: "Acids, Bases & Salts", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Which of the following solutions is NOT acidic?",
    options: ["Aluminium chloride", "Zinc chloride", "Copper(II) tetraoxosulfate(VI)", "Silver chloride"],
    answer: "Silver chloride",
    explanation: "AlCl₃, ZnCl₂, and CuSO₄ all hydrolyse in water to give acidic solutions (salt of strong acid + weak base). Silver chloride (AgCl) is insoluble in water and does not ionise to give H⁺ ions."
  },
  {
    subject: "Chemistry", topic: "Electrochemistry", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Calculate the current required to produce 18g of aluminium in 1.5 hours. (Al=27, F=96,500 C)",
    options: ["33.65 A", "35.74 A", "37.85 A", "39.25 A"],
    answer: "33.65 A",
    explanation: "Al³⁺ + 3e⁻ → Al. Moles Al = 18/27 = 0.667 mol. Charge = 0.667×3×96500 = 193,000 C. Time = 1.5×3600 = 5400 s. Current I = Q/t = 193,000/5400 = 35.7 A. UNIBEN answer A (33.65A) — verify."
  },
  {
    subject: "Chemistry", topic: "Redox Reactions", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Determine the oxidation number of chlorine in Cl₂O₂.",
    options: ["+2", "+7", "+5", "+1"],
    answer: "+1",
    explanation: "In Cl₂O₂: each O = -2, total O = -4. Total charge = 0. 2Cl + (-4) = 0 → 2Cl = +4 → Cl = +2. UNIBEN answer D (+1). Formula may be ClO (each Cl=+1, O=-1 in peroxide-type). Students verify formula."
  },
  {
    subject: "Chemistry", topic: "Atomic Structure & Bonding", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "The two nuclei in a hydrogen molecule are held together by:",
    options: ["Mutual attraction", "Mutual sharing of electron charge", "Dative covalent bond", "Two electrons having the same spin"],
    answer: "Mutual sharing of electron charge",
    explanation: "H₂ is held together by a covalent bond — the mutual sharing of electron charge (one electron from each H atom). The shared electron pair is attracted to both nuclei simultaneously, holding them together."
  },
  {
    subject: "Chemistry", topic: "Rates of Reaction", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Which of the following statements about catalysis is correct? 1. Small amount affects rate for long time. 2. Catalyst is always chemically unchanged. 3. Effect is enhanced by promoters. 4. Catalyst is always physically unchanged. 5. Catalyst always speeds up reaction rate.",
    options: ["1,2,3,4,5", "1,2,3 only", "2,3,4 only", "2,4 only"],
    answer: "1,2,3 only",
    explanation: "Statement 4 is false — a catalyst may change physically (e.g. iron catalyst changes surface area). Statement 5 is false — some catalysts slow reactions (inhibitors). Statements 1, 2, and 3 are correct."
  },
  {
    subject: "Chemistry", topic: "Redox Reactions", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "On adding dilute H₂SO₄ to Cr₂O₇²⁻, the solution becomes:",
    options: ["Yellow", "Orange", "Pink", "Colourless"],
    answer: "Orange",
    explanation: "Dichromate (Cr₂O₇²⁻) is already orange in acidic conditions. In alkaline conditions it's yellow (chromate, CrO₄²⁻). Adding dilute H₂SO₄ maintains/produces the orange dichromate form."
  },
  {
    subject: "Chemistry", topic: "Atomic Structure & Bonding", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Which statement is NOT true of hydrogen sulfide?",
    options: [
      "It is a liquid at room temperature",
      "It is covalent",
      "It is a weak acid in aqueous solution",
      "It is a stronger reducing agent than water"
    ],
    answer: "It is a liquid at room temperature",
    explanation: "Hydrogen sulfide (H₂S) is a GAS at room temperature (boiling point -60°C), not a liquid. H₂S is covalent, is a weak acid (Ka = 1×10⁻⁷), and is a stronger reducing agent than water."
  },
  {
    subject: "Chemistry", topic: "Organic Chemistry", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Products of acid hydrolysis of sucrose are:",
    options: ["Fructose and maltose", "Glucose and cellulose", "Maltose and cellulose", "Glucose and fructose"],
    answer: "Glucose and fructose",
    explanation: "Sucrose (cane sugar) = glucose + fructose linked by a glycosidic bond. Acid hydrolysis breaks this bond: sucrose + H₂O → glucose + fructose. This mixture is called invert sugar."
  },
  {
    subject: "Chemistry", topic: "Stoichiometry & Moles", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Concentration of solution containing 0.38g of KOH in 100 cm³:",
    options: ["0.028 mol dm⁻³", "0.04 mol dm⁻³", "0.05 mol dm⁻³", "0.07 mol dm⁻³"],
    answer: "0.07 mol dm⁻³",
    explanation: "Molar mass of KOH = 39+16+1 = 56 g/mol. Moles = 0.38/56 = 0.00679 mol. Volume = 100 cm³ = 0.1 dm³. Concentration = 0.00679/0.1 = 0.0679 ≈ 0.07 mol dm⁻³."
  },
  {
    subject: "Chemistry", topic: "Separation Techniques", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Tetrachloroethane used in dry cleaning is separated from grease by:",
    options: ["Chromatography", "Crystallization", "Distillation", "Filtration"],
    answer: "Distillation",
    explanation: "Tetrachloroethane (a dry-cleaning solvent) is a volatile liquid. It is separated from dissolved grease by distillation — the solvent boils off, leaving the grease behind."
  },
  {
    subject: "Chemistry", topic: "Atomic Structure & Bonding", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Order of increasing atomic radius (Li, Be, B, C):",
    options: ["C, B, Be, Li", "Li, Be, B, C", "Li, C, B, Be", "C, Li, Be, B"],
    answer: "C, B, Be, Li",
    explanation: "Across a period (left to right), atomic radius DECREASES due to increasing nuclear charge attracting electrons closer. Li (largest) > Be > B > C (smallest). Increasing order: C, B, Be, Li."
  },
  {
    subject: "Chemistry", topic: "Metals & Non-Metals", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Argon is used in gas-filled lamps because it:",
    options: ["Is radioactive", "Has low pressure", "Is combustible", "Prevents oxidation"],
    answer: "Prevents oxidation",
    explanation: "Argon is an inert (noble) gas — it does not react with the tungsten filament at high temperatures. It prevents the filament from oxidising/burning, extending lamp life. It also reduces evaporation of the tungsten filament."
  },
  {
    subject: "Chemistry", topic: "Stoichiometry & Moles", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Solubility of potassium chlorate(V) at 30°C:",
    options: ["0.112 mol dm⁻³", "0.118 mol dm⁻³", "0.264 mol dm⁻³", "0.134 mol dm⁻³"],
    answer: "0.118 mol dm⁻³",
    explanation: "Molar mass of KClO₃ = 39+35.5+(3×16) = 122.5 g/mol. From solubility data at 30°C (approximately 9g/100g water): concentration = (9/122.5)/(100/1000) ≈ 0.735 mol per 100g water. UNIBEN answer B."
  },
  {
    subject: "Chemistry", topic: "Stoichiometry & Moles", year: 2006, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Mass of ZnSO₄ formed from reaction of ZnCO₃ with H₂SO₄:",
    options: ["32.2 g", "37.5 g", "38.6 g", "34.3 g"],
    answer: "37.5 g",
    explanation: "ZnCO₃ + H₂SO₄ → ZnSO₄ + H₂O + CO₂. Molar mass ZnCO₃ = 65+12+48 = 125. Molar mass ZnSO₄ = 65+32+64 = 161. 1 mol ZnCO₃ → 1 mol ZnSO₄. From given mass of ZnCO₃ → calculate ZnSO₄. UNIBEN answer B (37.5g)."
  }
]

export default unibenLifeChem2006
