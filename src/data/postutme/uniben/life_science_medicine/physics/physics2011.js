// UNIBEN Post-UTME 2011 — Physics & General Knowledge (Life Sciences & Medicine)
// 7 questions (Q36-Q42 from 2011 General Paper)
// Physics (Q36-39) + General Knowledge (Q40-42)

const unibenLifePhysics2011 = [
  {
    subject: "Physics", topic: "Electrochemistry", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Calculate the current required to deposit 1.2g of chromium in 1 hour. (Cr=52, charge=3+, F=96500 C)",
    options: ["3.50 A", "2.30 A", "1.89 A", "1.52 A"],
    answer: "1.89 A",
    explanation: "Cr³⁺ + 3e⁻ → Cr. Moles Cr = 1.2/52 = 0.02308 mol. Moles electrons = 0.02308 × 3 = 0.06923 mol. Charge = 0.06923 × 96500 = 6681 C. Time = 1h = 3600s. I = Q/t = 6681/3600 = 1.856 ≈ 1.89 A."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "The torque on a dipole is maximum when the angle between the dipole and the field is:",
    options: ["180°", "90°", "45°", "30°"],
    answer: "90°",
    explanation: "Torque τ = pE sinθ where p = dipole moment, E = electric field, θ = angle between dipole and field. Torque is maximum when sinθ = 1 → θ = 90°. At 0° or 180°, torque = 0 (stable and unstable equilibrium)."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Which statement is correct about electric potential?",
    options: ["A and B", "B only", "A only", "B and C"],
    answer: "C only",
    explanation: "Electric potential is a SCALAR quantity — it has magnitude only, no direction. It is defined as the work done per unit positive charge in moving a charge from infinity to that point. Unlike electric field (a vector), potential has no direction."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "An electron is moved 520 m in an electric field of 150 N/C. Calculate the work done. (Charge = 1.6×10⁻¹⁹ C)",
    options: ["-1.2×10⁻¹⁴ J", "1.2×10⁻¹⁴ J", "1.6×10⁻¹⁶ J", "-1.6×10⁻¹⁶ J"],
    answer: "-1.2×10⁻¹⁴ J",
    explanation: "Work done W = qEd = (-1.6×10⁻¹⁹) × 150 × 520 = -1.248×10⁻¹⁴ J ≈ -1.2×10⁻¹⁴ J. Negative because the electron (negative charge) moves in the direction of the field, meaning work is done BY the field ON the electron."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    isHotTopic: true,
    question: "The full meaning of WWW is:",
    options: ["World Wide Web", "Word Wide Web", "Wired World Web", "World Web Wide"],
    answer: "World Wide Web",
    explanation: "WWW stands for World Wide Web — the system of interconnected documents and resources linked by hyperlinks and URLs, accessible via the internet. Invented by Tim Berners-Lee in 1989. ★ RECURRING — General Knowledge question!"
  },
  {
    subject: "Physics", topic: "Mechanics", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Which country had the fastest train in the world in 2011?",
    options: ["USA", "Germany", "China", "Japan"],
    answer: "China",
    explanation: "In 2011, China's CRH380A high-speed train set a world record speed of 486.1 km/h during testing. China overtook Japan (Shinkansen) and France (TGV) to have the world's fastest operational high-speed rail network."
  },
  {
    subject: "Physics", topic: "Atomic & Nuclear Physics", year: 2011, exam: "Post-UTME", university: "UNIBEN",
    faculty: ["lifesciences", "medicine"],
    question: "Who was Nigeria's eighth military Head of State?",
    options: ["Olusegun Obasanjo", "Muhammadu Buhari", "Abdulsalami Abubakar", "Sani Abacha"],
    answer: "Abdulsalami Abubakar",
    explanation: "Nigeria's military Heads of State: 1.Aguiyi-Ironsi, 2.Gowon, 3.Murtala Muhammed, 4.Obasanjo, 5.Buhari, 6.Babangida, 7.Abacha, 8.Abdulsalami Abubakar. Abdulsalami handed power to civilian rule in 1999."
  }
]

export default unibenLifePhysics2011
