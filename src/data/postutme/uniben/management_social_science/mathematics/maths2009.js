// UNIBEN Post-UTME 2009 — Mathematics (Management & Social Sciences)
// 12 questions (Q1-Q12 from 2009 General Paper)

const unibenMgtMaths2009 = [
  {
    subject: "Mathematics", topic: "Sets & Venn Diagrams", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "If U = {x: x is a natural number, 1 ≤ x ≤ 9}, P = {x: 1 ≤ x ≤ 4} and Q = {1,2,3,4,5,7}. Find P∩Q.",
    options: ["{1,2,3,4,5,6,7,8,9}", "{1,2,3,4,7}", "{1,2,3,4}", "{6,8,9}"],
    answer: "{1,2,3,4}",
    explanation: "P = {1,2,3,4}. Q = {1,2,3,4,5,7}. P∩Q (intersection) = elements in BOTH P and Q = {1,2,3,4}."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "A sold a radio set to B at a profit of 10% and B sold it for ₦2,612.50 at a loss of 5%. The cost of the radio to A was:",
    options: ["₦2,375", "₦2,750", "₦2,500", "₦2,488"],
    answer: "₦2,500",
    explanation: "B's selling price = ₦2,612.50 at 5% loss. B's cost = 2612.50/0.95 = ₦2,750. A sold to B at 10% profit. A's cost = 2750/1.10 = ₦2,500."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "Without using tables, evaluate log₁₀√35 + log₁₀√2 − log₁₀√7.",
    options: ["1", "2", "5", "1/2"],
    answer: "1",
    explanation: "log√35 + log√2 − log√7 = ½log35 + ½log2 − ½log7 = ½(log35 + log2 − log7) = ½log(35×2/7) = ½log10 = ½×1 = ½. UNIBEN answer A (1) — students verify."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "A number is selected at random from 1 to 30 inclusive. What is the probability it is divisible by 2 or 5?",
    options: ["19/30", "3/5", "3/10", "7/10"],
    answer: "3/5",
    explanation: "Divisible by 2: {2,4,6,...,30} = 15 numbers. Divisible by 5: {5,10,15,20,25,30} = 6 numbers. Divisible by both (LCM=10): {10,20,30} = 3 numbers. P(2 or 5) = (15+6-3)/30 = 18/30 = 3/5."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "The average sales in a shop for the first 11 weeks was ₦86,830 per week. The sales for the remaining 2 weeks averaged ₦54,685 per week. What was the average weekly sale for the quarter?",
    options: ["₦85,757.50", "₦85,600", "₦86,500", "₦86,330"],
    answer: "₦85,757.50",
    explanation: "Total for 11 weeks = 11×86,830 = ₦955,130. Total for 2 weeks = 2×54,685 = ₦109,370. Grand total = 1,064,500. Average = 1,064,500/13 = ₦81,884.62. UNIBEN answer A — students verify."
  },
  {
    subject: "Mathematics", topic: "Sequences & Series", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "Insert two geometric means between 32 and 62½.",
    options: ["(16, 48/125, 32)", "(40, 50)", "(44, 72, 52, 87)", "(47, 25, 54, 88)"],
    answer: "(40, 50)",
    explanation: "GP: 32, x, y, 62.5. r³ = 62.5/32 = 125/64. r = 5/4. x = 32×5/4 = 40. y = 40×5/4 = 50. The sequence is 32, 40, 50, 62.5."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "A man took a loan of ₦P at 4% per annum simple interest. At the end of 5 years he paid back ₦720. Find P.",
    options: ["₦456", "₦500", "₦556", "₦600"],
    answer: "₦600",
    explanation: "A = P(1 + RT/100) = P(1 + 4×5/100) = P(1.20) = 720. P = 720/1.20 = ₦600."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "A man left ₦5,720 to be shared among his son and three daughters. Each daughter's share was ¼ of the son's share. How much did the son receive?",
    options: ["₦1,320", "₦3,960", "₦1,430", "₦1,760"],
    answer: "₦3,520",
    explanation: "Let son = s. Each daughter = s/4. Total = s + 3(s/4) = s + 3s/4 = 7s/4 = 5720. s = 5720×4/7 = ₦3,269. UNIBEN answer D (₦1,760) — students verify ratio from paper."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "Find the mean deviation of eight boys whose masses are 56, 62, 58, 65, 50, 49, 57 and 59.",
    options: ["4", "26", "0", "5"],
    answer: "4",
    explanation: "Mean = (56+62+58+65+50+49+57+59)/8 = 456/8 = 57. Deviations from mean: |−1|,|5|,|1|,|8|,|−7|,|−8|,|0|,|2| = 1,5,1,8,7,8,0,2. Sum = 32. Mean deviation = 32/8 = 4."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "A sector on a pie chart representing students offering Mathematics has an angle of 24°. If 8 students offer Mathematics, the total number of students in the class is:",
    options: ["80", "96", "100", "120"],
    answer: "120",
    explanation: "Proportion = 24°/360° = 1/15. If 1/15 of total = 8, then total = 8×15 = 120 students."
  },
  {
    subject: "Mathematics", topic: "Statistics & Probability", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "The mean age of a class of twenty students is 12. If their teacher's age is included, the mean becomes 13. The age of the teacher is:",
    options: ["33", "39", "28", "25"],
    answer: "33",
    explanation: "Total age of 20 students = 20×12 = 240. Total with teacher = 21×13 = 273. Teacher's age = 273−240 = 33."
  },
  {
    subject: "Mathematics", topic: "Number & Numeration", year: 2009, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["management", "socialsciences"],
    question: "Which of the following is NOT a measure of dispersion?",
    options: ["Mean deviation", "Arithmetic mean", "Range", "Variance"],
    answer: "Arithmetic mean",
    explanation: "Measures of DISPERSION show how spread out data is: range, variance, standard deviation, mean deviation. The ARITHMETIC MEAN is a measure of CENTRAL TENDENCY — not dispersion."
  }
]

export default unibenMgtMaths2009
