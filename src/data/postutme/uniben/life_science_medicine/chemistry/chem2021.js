// UNIBEN Post-UTME 2021 — Chemistry (Life Sciences & Medicine)
// 4 questions (Q1-Q4 from 2021 General Paper)

const unibenLifeChem2021 = [
  {
    subject: "Chemistry", topic: "Laboratory Techniques", year: 2021, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Which of the following zones is NOT part of the non-luminous flame?",
    options: ["Bright blue zone", "Blue zone", "Blue-yellow luminous zone", "Non-luminous zone"],
    answer: "Blue-yellow luminous zone",
    explanation: "A non-luminous (Bunsen burner) flame has: an inner dark zone (unburned gas), a blue zone (partial combustion), and a pale blue/violet outer zone. The blue-yellow LUMINOUS zone is characteristic of a luminous (safety) flame where incomplete combustion produces glowing carbon particles — it is NOT part of the non-luminous flame."
  },
  {
    subject: "Chemistry", topic: "Environmental Chemistry", year: 2021, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    isHotTopic: true,
    question: "Which of the following is a secondary air pollutant?",
    options: ["Particulate dust", "Sulphur dioxide", "Ozone", "Chlorofluorocarbons"],
    answer: "Ozone",
    explanation: "Secondary pollutants are NOT directly emitted — they form in the atmosphere through chemical reactions of primary pollutants. Ozone (O₃) at ground level is formed by photochemical reactions between NOₓ and volatile organic compounds in sunlight. Primary pollutants: SO₂, dust, CFCs — emitted directly. ★ RECURRING topic!"
  },
  {
    subject: "Chemistry", topic: "Acids, Bases & Salts", year: 2021, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Ammonia can be obtained from ammonium tetraoxosulphate(VI) by heating it with:",
    options: ["Dilute HCl", "Concentrated H₂SO₄", "CuSO₄", "NaOH"],
    answer: "NaOH",
    explanation: "(NH₄)₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O + 2NH₃↑. Heating any ammonium salt with a strong alkali (NaOH) displaces ammonia gas. This is the standard laboratory preparation of ammonia."
  },
  {
    subject: "Chemistry", topic: "Organic Chemistry", year: 2021, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Which of the following compounds is a soapless detergent?",
    options: ["C₁₂H₂₅OSO₃Na", "C₁₇H₃₅COONa", "C₁₂H₂₅C₆H₄SO₃Na", "C₄H₉COOC₂H₅"],
    answer: "C₁₂H₂₅OSO₃Na",
    explanation: "Soapless detergents (synthetic detergents) are sodium alkyl sulphates or sulphonates — they work in hard water unlike soap. C₁₂H₂₅OSO₃Na = sodium dodecyl sulphate (SDS) = a soapless detergent. C₁₇H₃₅COONa = sodium stearate = soap (fatty acid salt)."
  }
]

export default unibenLifeChem2021
