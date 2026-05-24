// UNIBEN Post-UTME 2019/2020 — Chemistry
// 10 questions (Q21–30 from General Paper)
// Faculty: Engineering & Physical Sciences
// Analysis notes:
//   RECURRING: endothermic/exothermic ★, Le Chatelier (Haber) ★, reactivity series ★,
//              esterification ★, IUPAC naming ★, homologous series ★
//   NEW: air separation (alkaline pyrogallol + heated Cu), nitrate decomposition pattern,
//        exothermic Na dissolution, backward reaction conditions

const unibenChem2019 = [
  {
    subject: "Chemistry", topic: "Gases & Kinetic Theory", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "When air (O₂, N₂, CO₂, H₂O vapour, rare gases) is passed through alkaline pyrogallol then over heated copper, the only gases left are:",
    options: [
      "Nitrogen and carbon dioxide",
      "Rare gases",
      "Nitrogen and oxygen",
      "Nitrogen, carbon dioxide, and the rare gases"
    ],
    answer: "Rare gases",
    explanation: "Alkaline pyrogallol absorbs O₂ completely. The alkaline solution (NaOH) also absorbs CO₂. Water vapour condenses. Heated copper absorbs any remaining O₂. Nitrogen reacts slowly with copper at very high temperatures. The truly inert gases left are the RARE GASES (He, Ne, Ar, Kr, Xe) — they react with nothing."
  },
  {
    subject: "Chemistry", topic: "Thermochemistry", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "When sodium chloride and metallic sodium are each dissolved in water:",
    options: [
      "Both processes are exothermic",
      "Both processes are endothermic",
      "The dissolution of metallic sodium is endothermic",
      "The dissolution of metallic sodium is exothermic"
    ],
    answer: "The dissolution of metallic sodium is exothermic",
    explanation: "2Na + 2H₂O → 2NaOH + H₂↑ is highly exothermic (sodium reacts violently with water, releasing heat and hydrogen gas). Dissolving NaCl in water is slightly endothermic (absorbs a small amount of heat — the solution becomes slightly cooler). Answer D is correct."
  },
  {
    subject: "Chemistry", topic: "Thermochemistry", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    isHotTopic: true,
    faculty: ["engineering", "physicalsciences"],
    question: "When heat is absorbed during a chemical reaction, the reaction is said to be:",
    options: ["Thermodynamic", "Exothermic", "Isothermal", "Endothermic"],
    answer: "Endothermic",
    explanation: "Endothermic reactions absorb heat from the surroundings (ΔH > 0, the system gains energy). Exothermic reactions release heat (ΔH < 0). Isothermal = constant temperature. ★ RECURRING — appeared in every thermochemistry question across all years."
  },
  {
    subject: "Chemistry", topic: "Chemical Equilibrium", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    isHotTopic: true,
    faculty: ["engineering", "physicalsciences"],
    question: "Which of the following conditions promotes the backward reaction?",
    options: [
      "Increased pressure and decreased temperature",
      "Increased pressure, increased temperature, and the presence of a catalyst",
      "Decreased pressure, decreased concentration of oxygen, and increased temperature",
      "Decreased pressure and increased concentration of oxygen"
    ],
    answer: "Decreased pressure, decreased concentration of oxygen, and increased temperature",
    explanation: "For the Haber process N₂+3H₂⇌2NH₃ (ΔH=−92 kJ): backward reaction (decomposition of NH₃) favoured by: decreased pressure (4 moles → 2 moles; less pressure favours more moles) ✓, increased temperature (backward is endothermic) ✓, reduced reactant concentration. Answer C. ★ RECURRING — Le Chatelier."
  },
  {
    subject: "Chemistry", topic: "Chemical Equilibrium", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    isHotTopic: true,
    faculty: ["engineering", "physicalsciences"],
    question: "In the manufacture of ammonia: N₂(g)+3H₂(g)⇌2NH₃(g), ΔH=−92.37 kJ. The amount of NH₃ formed at equilibrium will increase if:",
    options: [
      "The pressure decreases",
      "The temperature increases",
      "The temperature decreases",
      "A catalyst is used"
    ],
    answer: "The temperature decreases",
    explanation: "Haber process is exothermic (ΔH<0). Le Chatelier: decreasing temperature shifts equilibrium toward the exothermic direction (forward) → more NH₃ produced. Increasing pressure also increases NH₃ (4 moles→2 moles). Catalyst increases rate but doesn't shift equilibrium position. ★★ RECURRING — Haber/Le Chatelier appeared in 2010, 2017, 2019."
  },
  {
    subject: "Chemistry", topic: "Metals & Non-Metals", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    isHotTopic: true,
    faculty: ["engineering", "physicalsciences"],
    question: "Which of the following materials cannot replace hydrogen from water or steam?",
    options: ["Sodium", "Magnesium", "Iron", "Copper"],
    answer: "Copper",
    explanation: "Reactivity series: K, Na, Ca, Mg, Al, Zn, Fe, Pb, H, Cu, Ag, Au. Copper is BELOW hydrogen — it cannot displace H₂ from water or steam. Na reacts vigorously with cold water. Mg reacts with hot water/steam. Fe reacts with steam. Copper reacts with neither. ★ RECURRING."
  },
  {
    subject: "Chemistry", topic: "Acids, Bases & Salts", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["engineering", "physicalsciences"],
    question: "When each of the nitrates of potassium, magnesium, and iron is heated:",
    options: [
      "All the nitrates decompose to their oxides",
      "The nitrate of magnesium gives nitrite and oxygen",
      "The nitrates of magnesium and iron give the oxides",
      "The nitrate of iron gives nitrite and oxygen"
    ],
    answer: "The nitrates of magnesium and iron give the oxides",
    explanation: "Thermal decomposition of nitrates: Group I (K, Na) → nitrite + O₂: 2KNO₃→2KNO₂+O₂. Metals above Cu (Mg, Fe, Cu etc.) → metal oxide + NO₂ + O₂: 2Mg(NO₃)₂→2MgO+4NO₂+O₂; 4Fe(NO₃)₃→2Fe₂O₃+12NO₂+3O₂. Mg and Fe nitrates give oxides ✓. Answer C."
  },
  {
    subject: "Chemistry", topic: "Organic Chemistry", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    isHotTopic: true,
    faculty: ["engineering", "physicalsciences"],
    question: "The reaction between an organic acid and an alcohol in the presence of an acid catalyst is known as:",
    options: ["Saponification", "Dehydration", "Esterification", "Hydrolysis"],
    answer: "Esterification",
    explanation: "Esterification: RCOOH + R'OH ⇌ RCOOR' + H₂O (acid catalyst, e.g. H₂SO₄). Saponification is the BASE hydrolysis of an ester (reverse reaction). Dehydration = removal of water. Hydrolysis = breakdown by water. ★★ RECURRING — appeared in 2008, 2012, 2017, 2019."
  },
  {
    subject: "Chemistry", topic: "Organic Chemistry", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    isHotTopic: true,
    faculty: ["engineering", "physicalsciences"],
    question: "The IUPAC names for CH₃COOH and CH₂=CH₂ respectively are:",
    options: [
      "Acetic acid and ethane",
      "Ethanoic acid and ethene",
      "Methanoic acid and ethene",
      "Ethanol and ethane"
    ],
    answer: "Ethanoic acid and ethene",
    explanation: "CH₃COOH: 2-carbon carboxylic acid = ethanoic acid (acetic acid is the trivial/common name). CH₂=CH₂: 2-carbon alkene = ethene (ethylene is trivial). IUPAC always preferred: ethanoic acid and ethene. ★★ RECURRING — IUPAC naming appeared in 2008, 2012, 2017, 2019."
  },
  {
    subject: "Chemistry", topic: "Organic Chemistry", year: 2019, exam: "Post-UTME", university: "UNIBEN",
    isHotTopic: true,
    faculty: ["engineering", "physicalsciences"],
    question: "Which of the following is NOT a member of the homologous series of paraffins (alkanes)?",
    options: ["C₃H₈", "C₅H₁₂", "C₇H₁₆", "C₂₄H₄₈"],
    answer: "C₂₄H₄₈",
    explanation: "Alkane general formula: CₙH₂ₙ₊₂. Check: C₃H₈: 2(3)+2=8 ✓. C₅H₁₂: 2(5)+2=12 ✓. C₇H₁₆: 2(7)+2=16 ✓. C₂₄H₄₈: 2(24)+2=50 ≠ 48. C₂₄H₄₈ follows CₙH₂ₙ = alkene or cycloalkane, NOT alkane. ★★ RECURRING — homologous series appeared in 2008, 2012, 2019."
  }
]

export default unibenChem2019
