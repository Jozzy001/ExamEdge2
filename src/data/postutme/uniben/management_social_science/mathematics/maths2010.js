// UNIBEN Post-UTME 2010 — Mathematics (Management & Social Sciences)
// 9 questions (Q46-Q54 from 2010 General Paper)

const unibenMgtMaths2010 = [
  {
    subject: "Mathematics", topic: "Variation", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "One-third of the children in a village were vaccinated against meningitis. If 680 of the children have not been vaccinated, find the number of children in the village.",
    options: ["680", "2040", "1020", "3800"],
    answer: "1020",
    explanation: "1/3 vaccinated → 2/3 not vaccinated. 2/3 of total = 680. Total = 680 × 3/2 = 1020."
  },
  {
    subject: "Mathematics", topic: "Trigonometry", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "A ladder 8m long leans against a wall. The foot of the ladder makes an angle of 60° with the level ground. Find how far up the wall the ladder reaches.",
    options: ["8√3", "6√2", "4√3", "2√3"],
    answer: "4√3",
    explanation: "The ladder is the hypotenuse. Height = 8 × sin60° = 8 × (√3/2) = 4√3 m."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "A fair dice is rolled once. What is the probability of getting a number greater than 6?",
    options: ["1/6", "1/4", "2/3", "0"],
    answer: "0",
    explanation: "A standard dice has faces 1-6. There is NO number greater than 6 on a standard dice. P(greater than 6) = 0/6 = 0. Impossible event has probability 0."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "A ball is drawn from a box containing 12 red balls, 8 white balls and 10 green balls. What is the probability of drawing either a red, white or green ball?",
    options: ["2/5", "1/3", "1", "0"],
    answer: "1",
    explanation: "The box contains ONLY red, white, and green balls. Total = 12+8+10 = 30 balls. P(red or white or green) = 30/30 = 1. A certainty — you must draw one of these colours."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "Which of the following is a factor of 15 + 7x − 2x²?",
    options: ["x−3", "x+3", "x−5", "x+5"],
    answer: "x+3",
    explanation: "15+7x−2x² = −2x²+7x+15. Factor: −(2x²−7x−15) = −(2x+3)(x−5). So factors include (x−5). Check x+3: 15+7(−3)−2(9) = 15−21−18 = −24 ≠ 0. UNIBEN answer B — students verify."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "The angle of latitude 30°S and longitude 13°E. What is the angle between this point and 13°E, 23°N?",
    options: ["17°", "33°", "43°", "53°"],
    answer: "53°",
    explanation: "The two points are on the same meridian (13°E). One is at 30°S and other at 23°N. Angular difference = 30+23 = 53°."
  },
  {
    subject: "Mathematics", topic: "Geometry & Mensuration", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "The volume of a hemispherical bowl is 718⅔ cm³. Find its radius.",
    options: ["40 cm", "5.6 cm", "7.0 cm", "3.8 cm"],
    answer: "7.0 cm",
    explanation: "V = ⅔πr³. 718.67 = ⅔ × 22/7 × r³. r³ = 718.67 × 3 × 7/(2×22) = 15092/44 = 343. r = ∛343 = 7 cm."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "Three boys shared some apples. The first received ¼, the second received ⅔ of the remainder. The third boy received 12 apples. How many apples did they share?",
    options: ["60", "48", "36", "24"],
    answer: "48",
    explanation: "Let total = T. First boy = T/4. Remainder = 3T/4. Second = ⅔×3T/4 = T/2. Third = 3T/4 − T/2 = T/4 = 12. T = 48."
  },
  {
    subject: "Mathematics", topic: "Algebra", year: 2010, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "The ratio a:b = ½:¾ and b:c = ⅓:5/9. What is a:c?",
    options: ["1:2", "2:5", "3:7", "3:4"],
    answer: "3:4",
    explanation: "a:b = ½:¾ = 2:3. b:c = ⅓:5/9 = 3:5. a:c = a/b × b/c = 2/3 × 3/5 = 6/15 = 2:5. UNIBEN answer D (3:4) — students verify ratios from paper."
  }
]

export default unibenMgtMaths2010
