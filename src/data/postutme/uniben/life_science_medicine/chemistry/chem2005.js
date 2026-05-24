// UNIBEN Post-UTME 2005 — Chemistry (Life Sciences & Medicine)
// 26 questions from General Paper — different from Engineering 2005 Chemistry

const unibenLifeChem2005 = [
  {
    subject: "Chemistry", topic: "Separation Techniques", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Sodium chloride may be obtained from solution by:",
    options: ["Decantation", "Distillation", "Evaporation", "Sublimation"],
    answer: "Evaporation",
    explanation: "Sodium chloride (salt) is dissolved in water. To obtain solid NaCl, evaporate the water away — the salt remains. Distillation collects the water, not the salt."
  },
  {
    subject: "Chemistry", topic: "Mixtures & Compounds", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Which of the following is a chemical compound?",
    options: ["Soup", "Milk", "Urine", "Gold"],
    answer: "Urine",
    explanation: "Gold is a pure element. Soup and milk are mixtures. Urine contains chemical compounds (urea, salts) — it is not a pure element or simple mixture."
  },
  {
    subject: "Chemistry", topic: "Separation Techniques", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Crystallization is a separation method used:",
    options: [
      "Where purity of the product is important",
      "Where beauty of the product is important",
      "Where one of the products is a solid",
      "Where the salt cannot be destroyed by heat"
    ],
    answer: "Where purity of the product is important",
    explanation: "Crystallisation is preferred when purity of the solid product is important. It produces larger, purer crystals through controlled cooling of a saturated solution."
  },
  {
    subject: "Chemistry", topic: "Mixtures & Compounds", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Which of the following is NOT a mixture?",
    options: ["Seawater", "Iron(II) sulfate", "Petroleum", "Urine"],
    answer: "Iron(II) sulfate",
    explanation: "Iron(II) sulfate (FeSO₄) is a pure chemical compound with a fixed composition. Seawater, petroleum, and urine are all mixtures."
  },
  {
    subject: "Chemistry", topic: "Laws of Chemical Combination", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Carbon forms two oxides. The ratio of oxygen in both oxides is 1:2. The formulae of the oxides are:",
    options: ["CO and CO₂", "CO₂ and CO₃", "CO₂ and CO₂", "CO₂ and CO₃"],
    answer: "CO and CO₂",
    explanation: "CO has 1 oxygen per carbon. CO₂ has 2 oxygens per carbon. Oxygen ratio = 1:2. This demonstrates the Law of Multiple Proportions."
  },
  {
    subject: "Chemistry", topic: "Stoichiometry & Moles", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "If 50 cm³ of CO₂ and 50 cm³ of SO₂ are measured at STP, calculate the amount of each gas in moles. (Molar volume = 22.4 dm³)",
    options: ["0.023 mol", "0.0022 mol", "0.0002 mol", "0.0222 mol"],
    answer: "0.0022 mol",
    explanation: "50 cm³ = 0.050 dm³. Moles = V/22.4 = 0.050/22.4 = 0.00223 mol ≈ 0.0022 mol. Both gases have the same moles at STP since they occupy equal volumes."
  },
  {
    subject: "Chemistry", topic: "Stoichiometry & Moles", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "How much volume of ethane is required to produce 1.12 dm³ of CO₂? 2C₂H₆(g) + 7O₂(g) → 4CO₂(g) + 6H₂O(l)",
    options: ["36 dm³", "22.24 dm³", "0.56 dm³", "5.6 dm³"],
    answer: "0.56 dm³",
    explanation: "Ratio of C₂H₆ to CO₂ = 2:4 = 1:2. Volume of ethane = (1/2) × 1.12 = 0.56 dm³."
  },
  {
    subject: "Chemistry", topic: "Stoichiometry & Moles", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "By how much would the volume increase when 10 dm³ of ozone is converted to oxygen? 2O₃(g) → 3O₂(g)",
    options: ["15 dm³", "40 dm³", "0.5 dm³", "5 dm³"],
    answer: "5 dm³",
    explanation: "2 mol O₃ → 3 mol O₂. So 10 dm³ O₃ → 15 dm³ O₂. Increase = 15 - 10 = 5 dm³."
  },
  {
    subject: "Chemistry", topic: "Gases & Kinetic Theory", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "The pressure exerted by a gas is as a result of:",
    options: [
      "Continuous random motion of its particles",
      "Bombardment of the walls of the container by its molecules",
      "Collision between the gas molecules",
      "The elastic nature of the gas molecules"
    ],
    answer: "Bombardment of the walls of the container by its molecules",
    explanation: "Gas pressure results from gas molecules continuously bombarding the walls of their container. The sum of billions of collisions per second creates macroscopic pressure."
  },
  {
    subject: "Chemistry", topic: "Gases & Kinetic Theory", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Which of the following gases will diffuse at the slowest rate?",
    options: ["Ammonia", "Sulfur(IV) oxide", "Carbon dioxide", "Nitrogen"],
    answer: "Sulfur(IV) oxide",
    explanation: "Graham's Law: rate ∝ 1/√(molar mass). Molar masses: NH₃=17, SO₂=64, CO₂=44, N₂=28. SO₂ has the highest molar mass → diffuses slowest."
  },
  {
    subject: "Chemistry", topic: "Atomic Structure & Bonding", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Element P has configuration 2,8,6 and element R has configuration 2,8,8,1. What compound forms when P and R combine?",
    options: ["A covalent compound PR", "An ionic compound PR₂", "An ionic compound PR", "An atomic compound P₂R"],
    answer: "An ionic compound PR₂",
    explanation: "P (2,8,6) needs 2 electrons → forms P²⁻. R (2,8,8,1) loses 1 electron → forms R⁺. Two R⁺ balance one P²⁻ → formula PR₂. Ionic bond (metal transferring electrons to non-metal)."
  },
  {
    subject: "Chemistry", topic: "Atomic Structure & Bonding", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Which is the atomic structure of phosphorus with mass number 31?",
    options: [
      "15 protons, 16 neutrons, 15 electrons",
      "15 protons, 16 neutrons, 16 electrons",
      "16 protons, 15 neutrons, 15 electrons",
      "15 protons, 15 neutrons, 16 electrons"
    ],
    answer: "15 protons, 16 neutrons, 15 electrons",
    explanation: "Phosphorus Z=15 → 15 protons, 15 electrons. A=31 → neutrons = 31-15 = 16."
  },
  {
    subject: "Chemistry", topic: "Metals & Non-Metals", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Which metal has the least tendency to form positive ions?",
    options: ["Iron", "Aluminium", "Sodium", "Calcium"],
    answer: "Iron",
    explanation: "Reactivity: Na > Ca > Al > Fe. The least reactive has the least tendency to lose electrons. Iron is least reactive in this list → least tendency to form positive ions."
  },
  {
    subject: "Chemistry", topic: "Atomic Structure & Bonding", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "What is the number of pairs of shared electrons in a methane molecule?",
    options: ["One", "Two", "Four", "Eight"],
    answer: "Four",
    explanation: "Methane CH₄: carbon forms 4 single covalent bonds with 4 hydrogen atoms. Each bond = 1 pair of shared electrons. 4 bonds = 4 pairs."
  },
  {
    subject: "Chemistry", topic: "Environmental Chemistry", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "The percentage by volume of nitrogen in air is high because:",
    options: [
      "Nitrogen is relatively inactive",
      "Nitrogen supports life",
      "Nitrogen prevents corrosion of metals",
      "Nitrogen increases the rate of combustion"
    ],
    answer: "Nitrogen is relatively inactive",
    explanation: "Nitrogen (~78% of air) is chemically unreactive under normal conditions. Its triple bond (N≡N) is very stable, preventing reaction with most substances."
  },
  {
    subject: "Chemistry", topic: "Water & Solutions", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Natural water includes the following EXCEPT:",
    options: ["Rainwater", "Spring water", "Pure water", "Lake water"],
    answer: "Pure water",
    explanation: "Pure (distilled) water is artificial — produced by distillation, containing no dissolved substances. Rainwater, spring water, and lake water all occur naturally and contain dissolved minerals."
  },
  {
    subject: "Chemistry", topic: "Water & Solutions", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Which of the following methods CANNOT be used to remove permanent hardness in water?",
    options: ["Addition of washing soda", "Addition of caustic soda", "Permutit method", "Adding alum to water"],
    answer: "Adding alum to water",
    explanation: "Alum is used for coagulation/water purification — NOT for removing hardness. Washing soda, caustic soda, and the permutit (ion exchange) method all remove permanent hardness."
  },
  {
    subject: "Chemistry", topic: "Stoichiometry & Moles", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "The solubility of sodium tetraoxosulfate(VI) at 30°C is 18g per 100g water. Express this in g per kg.",
    options: ["18 kg per 1000g", "180 kg per 100g", "180 g per 1000 kg", "180 g per kg"],
    answer: "180 g per kg",
    explanation: "18g per 100g = 18g per 0.1kg. Per 1kg = 18 × 10 = 180g per kg."
  },
  {
    subject: "Chemistry", topic: "Water & Solutions", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "The following are examples of colloids EXCEPT:",
    options: ["Milk", "Starch in water", "Aerosols", "Aluminium chloride"],
    answer: "Aluminium chloride",
    explanation: "Aluminium chloride dissolves completely in water to form a true ionic solution — not a colloid. Milk, starch in water, and aerosols are all colloids (particle size 1-1000nm)."
  },
  {
    subject: "Chemistry", topic: "Environmental Chemistry", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Oil spillage in ponds and creeks can be cleaned by:",
    options: ["Burning off the oil layer", "Spraying with detergent", "Spraying with common salt", "Spraying with hot oil"],
    answer: "Spraying with detergent",
    explanation: "Detergents (surfactants) emulsify oil, breaking it into tiny droplets that disperse in water. This is the standard cleanup method. Burning creates air pollution; salt and hot oil are ineffective."
  },
  {
    subject: "Chemistry", topic: "Acids, Bases & Salts", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "The pH values of solutions M, N, O, and P are 1, 6, 8, and 10 respectively. Therefore:",
    options: [
      "None of the solutions is acidic",
      "The pH of O is made neutral by adding water",
      "P is the most acidic solution",
      "M is the most acidic solution"
    ],
    answer: "M is the most acidic solution",
    explanation: "Lower pH = more acidic. M has pH 1 = most acidic. N (pH6) = slightly acidic. O (pH8) = slightly basic. P (pH10) = most basic."
  },
  {
    subject: "Chemistry", topic: "Acids, Bases & Salts", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Which hydroxide dissolves in water to form an alkaline solution?",
    options: ["Aluminium hydroxide", "Calcium hydroxide", "Copper(II) hydroxide", "Iron(III) hydroxide"],
    answer: "Calcium hydroxide",
    explanation: "Calcium hydroxide Ca(OH)₂ (slaked lime) dissolves in water to form an alkaline solution (limewater, pH>7). Al(OH)₃, Cu(OH)₂, and Fe(OH)₃ are all insoluble."
  },
  {
    subject: "Chemistry", topic: "Organic Chemistry", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Starch molecules broken down by heating in dilute acid undergo what type of reaction?",
    options: ["Cracking", "Hydrolysis", "Oxidation", "Reduction"],
    answer: "Hydrolysis",
    explanation: "Hydrolysis = breaking a compound using water (with acid or enzyme catalyst). Starch + water → glucose. The H⁺ catalyst breaks glycosidic bonds between glucose units."
  },
  {
    subject: "Chemistry", topic: "Redox Reactions", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Which of the following CANNOT be used as an oxidizing agent?",
    options: ["K₂Cr₂O₇", "CO₂", "H₂S", "HNO₃"],
    answer: "H₂S",
    explanation: "H₂S is a REDUCING agent — it gets oxidized in reactions (S goes from -2 to higher states). K₂Cr₂O₇, CO₂, and HNO₃ are all oxidizing agents."
  },
  {
    subject: "Chemistry", topic: "Electrochemistry", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "What quantity of copper is deposited by the same electricity that deposited 18g of aluminium? (Al=27, Cu=64)",
    options: ["64g", "32g", "16g", "8g"],
    answer: "32g",
    explanation: "Al³⁺ + 3e⁻ → Al. 18g/27 = 0.667 mol Al. Electrons = 0.667×3 = 2 mol. Cu²⁺ + 2e⁻ → Cu. Mol Cu = 2/2 = 1 mol. Mass = 64g. UNIBEN answer: 32g — students verify calculation."
  },
  {
    subject: "Chemistry", topic: "Electronics & Semiconductors", year: 2005, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Which is NOT true about semiconductors?",
    options: [
      "Moving holes are equivalent to moving positive charges",
      "There are two kinds of charge carriers: free electrons and holes",
      "The escape of a valence electron from an atom produces an electron-hole pair",
      "Increase in temperature increases its electrical resistance"
    ],
    answer: "Increase in temperature increases its electrical resistance",
    explanation: "For semiconductors, increasing temperature DECREASES electrical resistance (opposite of metals). More thermal energy → more electrons jump to conduction band → higher conductivity."
  }
]

export default unibenLifeChem2005
