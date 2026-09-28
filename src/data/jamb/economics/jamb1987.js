// JAMB 1987 Physics Past Questions
// Fully flattened — standalone objects with topics, answers, and detailed explanations.
// Strictly skipped questions containing complex geometric diagrams or custom data tables.

const physicsJamb1987 = [
  {
    subject: "Physics", topic: "Measurement & Units", year: 1987, exam: "JAMB",
    question: "Which of the following units is equivalent to kg ms⁻¹?",
    options: ["Ns⁻¹", "Nms", "Ns", "Js⁻¹"],
    answer: "Ns",
    explanation: "The unit kg ms⁻¹ represents linear momentum or impulse. Since Impulse = Force × Time, its unit can be expressed as Newtons × seconds (Ns). Dimensionally, 1 N = 1 kg ms⁻², so 1 Ns = 1 kg ms⁻² × s = 1 kg ms⁻¹."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1987, exam: "JAMB",
    question: "A man walks 8km north and then 5km in a direction 60° east of north. Find his distance from his starting point.",
    options: ["11.36km", "12.36km", "13.00km", "14.36km"],
    answer: "11.36km",
    explanation: "Using the cosine rule to resolve the vector triangle: R² = A² + B² - 2AB cos(θ). The interior angle between the two paths is 180° - 60° = 120°. R² = 8² + 5² - 2(8)(5) cos(120°) = 64 + 25 - 80(-0.5) = 89 + 40 = 129. Therefore, R = √129 ≈ 11.36km."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1987, exam: "JAMB",
    question: "A jet engine develops a thrust of 270 N when the velocity of the exhaust gases relative to the engine is 300 ms⁻¹. What is the mass of the material ejected per second?",
    options: ["81.00 kg", "9.00 kg", "0.90 kg", "0.09 kg"],
    answer: "0.90 kg",
    explanation: "Thrust force is defined as the rate of change of momentum: F = (m/t) × v, where m/t is the mass ejected per second. Rearranging the formula gives m/t = F / v = 270 / 300 = 0.90 kg/s."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1987, exam: "JAMB",
    question: "A body rolls down a slope from a height of 100m. Its velocity at the foot of the slope is 20 ms⁻¹. What percentage of its initial potential energy is converted into kinetic energy? [g = 10 ms⁻²]",
    options: ["40%", "35%", "20%", "15%"],
    answer: "20%",
    explanation: "Initial Potential Energy (PE) = mgh = m × 10 × 100 = 1000m. Final Kinetic Energy (KE) = ½mv² = ½ × m × 20² = 200m. The percentage converted is (KE / PE) × 100% = (200m / 1000m) × 100% = 20%."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1987, exam: "JAMB",
    question: "An elevator of mass 4800kg is supported by a cable which can safely withstand a maximum tension of 60,000N. The maximum upward acceleration the elevator can have is [g = 10 ms⁻²]",
    options: ["2.5 ms⁻²", "5.0 ms⁻²", "7.5 ms⁻²", "10.0 ms⁻²"],
    answer: "2.5 ms⁻²",
    explanation: "For upward acceleration, the tension equation is T = m(g + a). Substituting the maximum limits: 60,000 = 4800(10 + a) → 12.5 = 10 + a → a = 2.5 ms⁻²."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1987, exam: "JAMB",
    question: "A constant force of 40N acting on a body initially at rest gives an acceleration of 0.1 ms⁻² for 4s. Calculate the work done by the force.",
    options: ["8 J", "10 J", "32 J", "160 J"],
    answer: "32 J",
    explanation: "First, find the distance travelled using s = ut + ½at² = 0 + ½(0.1)(4²) = 0.5 × 16 = 0.8m. Work done is defined as Force × Distance: W = F × s = 40 N × 0.8m = 32 J."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1987, exam: "JAMB",
    question: "The coefficient of static friction between a 40kg crate and a concrete surface is 0.25. Find the magnitude of the minimum force needed to keep the crate stationary on a concrete base inclined at 45° to the horizontal. [g = 10 ms⁻²]",
    options: ["400 N", "300 N", "283 N", "212 N"],
    answer: "212 N",
    explanation: "The component of weight acting down the incline is W_down = mg sin(45°) = 40 × 10 × 0.7071 = 282.84 N. The maximum limiting static friction force holding it up is f = μmg cos(45°) = 0.25 × 40 × 10 × 0.7071 = 70.71 N. The minimum external balancing force along the plane required to keep it from sliding down is F = W_down - f = 282.84 - 70.71 = 212.13 N ≈ 212 N."
  },
  {
    subject: "Physics", topic: "Properties of Matter", year: 1987, exam: "JAMB",
    question: "If a beaker is filled with water, it is observed that the surface of the water is not horizontal at the glass-water interface. This behaviour is due to",
    options: ["Friction", "Surface tension", "Viscosity", "Evaporation"],
    answer: "Surface tension",
    explanation: "The curved meniscus at the glass-water boundary occurs due to surface tension, which is driven by the relative strengths of adhesive forces between water and glass molecules versus cohesive forces within water molecules."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1987, exam: "JAMB",
    question: "The mechanical advantage (MA) of an inclined plane depends on",
    options: ["Its length", "Its height", "The product of its length and height", "The ratio of its length to its height"],
    answer: "The ratio of its length to its height",
    explanation: "For an ideal inclined plane with 100% efficiency, Mechanical Advantage equals Velocity Ratio. Since Velocity Ratio = Distance moved by effort / Distance moved by load = Length of incline / Height of incline, MA directly depends on the ratio of its length to its height."
  },
  {
    subject: "Physics", topic: "Properties of Matter", year: 1987, exam: "JAMB",
    question: "A load of 5N gives an extension of 0.56cm in a wire which obeys Hooke's law. What is the extension caused by a load of 20N?",
    options: ["1.12 cm", "2.14 cm", "2.24 cm", "2.52 cm"],
    answer: "2.24 cm",
    explanation: "Hooke's law states that force is directly proportional to extension (F = ke). Therefore, F₁/F₂ = e₁/e₂ → 5/20 = 0.56/e₂ → ¼ = 0.56/e₂ → e₂ = 0.56 × 4 = 2.24 cm."
  },
  {
    subject: "Physics", topic: "Hydrostatics & Fluids", year: 1987, exam: "JAMB",
    question: "A cube of side 10cm and mass 0.5kg floats in a liquid with only 1/5 of its height above the liquid surface. What is the relative density of the liquid?",
    options: ["0.125", "0.250", "0.625", "2.500"],
    answer: "0.625",
    explanation: "If 1/5 of its height is above the liquid surface, then 4/5 (80%) of the cube is submerged. By law of flotation, the fraction submerged equals the ratio of the object density to the liquid density: ρ_object / ρ_liquid = 4/5. The volume of the cube is 10³ cm³ = 1000 cm³. Density of the cube = mass/volume = 500g / 1000cm³ = 0.5 g/cm³. Thus, 0.5 / ρ_liquid = 0.8 → ρ_liquid = 0.5 / 0.8 = 0.625 g/cm³. Since relative density is relative to water (1 g/cm³), it equals 0.625."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1987, exam: "JAMB",
    question: "The distance between the fixed points of a centigrade thermometer is 20cm. What is the temperature when the mercury level is 4.5cm above the lower mark?",
    options: ["22.5°C", "29.0°C", "90.0°C", "100.0°C"],
    answer: "22.5°C",
    explanation: "Using linear scaling: θ = (l_θ / l_100) × 100°C = (4.5 / 20) × 100°C = 0.225 × 100°C = 22.5°C."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1987, exam: "JAMB",
    question: "The length of a side of a metallic cube at 20°C is 5.0cm. Given that the linear expansivity of the metal is 4.0 × 10⁻⁵ K⁻¹, find the volume of the cube at 120°C.",
    options: ["126.50 cm³", "126.25 cm³", "126.00 cm³", "125.00 cm³"],
    answer: "126.50 cm³",
    explanation: "Initial volume V₁ = 5³ = 125 cm³. Volume expansivity γ = 3α = 3 × (4.0 × 10⁻⁵) = 1.2 × 10⁻⁴ K⁻¹. Change in temperature ΔT = 120 - 20 = 100 K. Change in volume ΔV = V₁γΔT = 125 × (1.2 × 10⁻⁴) × 100 = 1.5 cm³. New volume V₂ = V₁ + ΔV = 125 + 1.5 = 126.50 cm³."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1987, exam: "JAMB",
    question: "Hot water is added to three times its mass of water at 10°C and the resulting temperature is 20°C. What is the initial temperature of the hot water?",
    options: ["50°C", "80°C", "40°C", "30°C"],
    answer: "50°C",
    explanation: "Let the mass of hot water be m, then the mass of cold water is 3m. Let the initial temperature of hot water be T. Heat lost = Heat gained → m × c × (T - 20) = 3m × c × (20 - 10). Cancelling m and c gives: T - 20 = 3(10) → T - 20 = 30 → T = 50°C."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1987, exam: "JAMB",
    question: "Calculate the amount of heat required to convert 2kg of ice at -2°C to water at 0°C. [Specific heat capacity of ice = 2090 J kg⁻¹ K⁻¹, specific latent heat of fusion = 333 kJ kg⁻¹]",
    options: ["666 J", "8360 J", "666,000 J", "674,360 J"],
    answer: "674,360 J",
    explanation: "Step 1: Heat to raise ice from -2°C to 0°C = mcΔT = 2 × 2090 × (0 - (-2)) = 2 × 2090 × 2 = 8360 J. Step 2: Heat to melt ice at 0°C = mL = 2 × 333,000 = 666,000 J. Total heat = 8360 + 666,000 = 674,360 J."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1987, exam: "JAMB",
    question: "In which of the following are the substances arranged in descending order of their thermal conductivities?",
    options: ["Copper, steel, glass", "Steel, copper, glass", "Steel, glass, copper", "Copper, glass, steel"],
    answer: "Copper, steel, glass",
    explanation: "Metals conduct heat far better than non-metals, and copper is a significantly better thermal conductor than steel. Glass is an insulator with very low conductivity, making the correct descending order: Copper, steel, glass."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1987, exam: "JAMB",
    question: "The vacuum in a Thermos flask helps to reduce heat transfer by",
    options: ["Convection and radiation", "Convection and conduction", "Conduction and radiation", "Radiation only"],
    answer: "Convection and conduction",
explanation: "Conduction and convection require a material medium (solid particles or fluid molecules) to transfer heat energy. An evacuated space (vacuum) blocks these two pathways, while radiation can still cross a vacuum."
},
{
subject: "Physics", topic: "Sound & Waves", year: 1987, exam: "JAMB",
question: "A wave has a frequency of 2 Hz and a wavelength of 30cm. The velocity of the wave is",
options: ["60.0 ms⁻¹", "6.0 ms⁻¹", "1.5 ms⁻¹", "0.6 ms⁻¹"],
answer: "0.6 ms⁻¹",
explanation: "Using the wave formula v = fλ, convert wavelength to metres: 30 cm = 0.3 m. v = 2 Hz × 0.3 m = 0.6 ms⁻¹."
},
{
subject: "Physics", topic: "Sound & Waves", year: 1987, exam: "JAMB",
question: "A boat at anchor is rocked by waves whose crests are 100m apart and whose velocity is 25 ms⁻¹. At what interval does the wave crest reach the boat?",
options: ["2,500.00s", "75.00s", "4.00s", "0.25s"],
answer: "4.00s",
explanation: "The distance between consecutive crests is the wavelength (λ = 100m). Velocity (v) = 25 ms⁻¹. The interval between crests is the period (T), where T = λ / v = 100 / 25 = 4.00s."
},
{
subject: "Physics", topic: "Sound & Waves", year: 1987, exam: "JAMB",
question: "Which of the following instruments produces a pure musical tone?",
options: ["Guitar", "Vibrating string", "Tuning fork", "Siren"],
answer: "Tuning fork",
explanation: "A tuning fork is designed to vibrate at a single fundamental frequency with almost zero overtones, producing a pure sine wave or pure tone."
}
];
export default physicsJamb1987;
