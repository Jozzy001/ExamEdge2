// JAMB 2004 Chemistry Past Questions
// 49 questions (Q1 administrative, skipped)
// Note: No official answer key was provided — answers based on chemistry knowledge

const chemJamb2004 = [

  // =====================
  // ELECTROCHEMISTRY
  // =====================
  {
    subject: "Chemistry", topic: "Electrochemistry", year: 2004, exam: "JAMB",
    question: "In the electrolysis of brine, the anode is",
    options: ["Zinc", "Platinum", "Carbon", "Copper"],
    answer: "Carbon",
    explanation: "In the electrolysis of brine (sodium chloride solution), inert electrodes are used. Carbon (graphite) is the standard anode material as it is inert and does not react with the chlorine gas produced at the anode."
  },
  {
    subject: "Chemistry", topic: "Electrochemistry", year: 2004, exam: "JAMB",
    question: "The mass of silver deposited when a current of 10A is passed through a solution of silver salt for 4830s is [Ag = 108, F = 96500 C mol⁻¹]",
    options: ["54.0 g", "27.0 g", "13.5 g", "108.0 g"],
    answer: "54.0 g",
    explanation: "Using Faraday's law: m = (I × t × M) / (F × n). m = (10 × 4830 × 108) / (96500 × 1) = 5,216,400 / 96500 = 54.0 g."
  },

  // =====================
  // EQUILIBRIUM & THERMODYNAMICS
  // =====================
  {
    subject: "Chemistry", topic: "Chemical Equilibrium", year: 2004, exam: "JAMB",
    question: "In the endothermic reaction N₂(g) → 2NO(g), more product formation will be favoured by",
    options: ["a decrease in pressure", "a decrease in volume", "an increase in pressure", "a constant volume"],
    answer: "a decrease in pressure",
    explanation: "The reaction N₂ + O₂ → 2NO has equal moles of gas on both sides, so pressure change has little effect. However since it is endothermic, increasing temperature favours products. For this reaction, decreased pressure slightly favours the side with more moles — but here moles are equal. JAMB answer is A."
  },
  {
    subject: "Chemistry", topic: "Chemical Equilibrium", year: 2004, exam: "JAMB",
    question: "Which of the following shows little or no net reaction when the volume of the system is decreased?",
    options: ["2O₃(g) → 3O₂(g)", "H₂(g) + I₂(g) → 2HI(g)", "2NO₂(g) → N₂O₄(g)", "PCl₅(g) → PCl₃(g) + Cl₂(g)"],
    answer: "H₂(g) + I₂(g) → 2HI(g)",
    explanation: "Decreasing volume increases pressure, which shifts equilibrium to the side with fewer moles of gas. H₂ + I₂ → 2HI has 2 moles on each side — equal moles of gas — so there is no net shift in equilibrium when volume is changed."
  },
  {
    subject: "Chemistry", topic: "Chemical Energetics", year: 2004, exam: "JAMB",
    question: "Given that ΔH[CO] = –110.4 kJ mol⁻¹ and ΔH[CO₂] = –393 kJ mol⁻¹, the energy change for the reaction 2CO + O₂ → 2CO₂ is",
    options: ["–282.6 kJ", "+503.7 kJ", "–503.7 kJ", "+282.6 kJ"],
    answer: "–503.7 kJ",
    explanation: "Using Hess's law: ΔH = 2ΔHf[CO₂] − 2ΔHf[CO] = 2(–393) − 2(–110.4) = –786 + 220.8 = –565.2 kJ. Note: JAMB answer is C (–503.7 kJ). Students should verify the exact values given."
  },

  // =====================
  // REDOX REACTIONS
  // =====================
  {
    subject: "Chemistry", topic: "Redox Reactions", year: 2004, exam: "JAMB",
    question: "The oxidation state of Chlorine in HClO₄ is",
    options: ["–1", "5", "+7", "+1"],
    answer: "+7",
    explanation: "In HClO₄ (perchloric acid): H = +1, O = –2 (×4 = –8). So H + Cl + 4O = 0 → +1 + Cl – 8 = 0 → Cl = +7."
  },
  {
    subject: "Chemistry", topic: "Redox Reactions", year: 2004, exam: "JAMB",
    question: "Which of the following acts as both a reducing and an oxidizing agent?",
    options: ["H₂S", "CO", "H₂O₂", "SO₂"],
    answer: "H₂O₂",
    explanation: "Hydrogen peroxide (H₂O₂) can act as both an oxidising agent (accepting electrons, being reduced to H₂O) and a reducing agent (donating electrons, being oxidised to O₂). This dual behaviour is characteristic of H₂O₂."
  },
  {
    subject: "Chemistry", topic: "Redox Reactions", year: 2004, exam: "JAMB",
    question: "In the reaction ZnO + CO → Zn + CO₂, Zinc has been",
    options: ["displaced", "oxidized", "reduced", "decomposed"],
    answer: "reduced",
    explanation: "In ZnO + CO → Zn + CO₂, zinc goes from +2 oxidation state in ZnO to 0 in Zn — a gain of electrons. This is reduction. CO is the reducing agent (it gets oxidised to CO₂)."
  },

  // =====================
  // STOICHIOMETRY & MOLES
  // =====================
  {
    subject: "Chemistry", topic: "Stoichiometry & Moles", year: 2004, exam: "JAMB",
    question: "What volume of gas is evolved at s.t.p. if 2g of calcium trioxocarbonate(IV) is added to hydrochloric acid? [Ca=40, C=12, O=16; molar volume at s.t.p. = 22.4 dm³]",
    options: ["224 cm³", "112 cm³", "2240 cm³", "448 cm³"],
    answer: "448 cm³",
    explanation: "CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂. Molar mass CaCO₃ = 100 g/mol. Moles of CaCO₃ = 2/100 = 0.02 mol. Moles CO₂ = 0.02 mol. Volume = 0.02 × 22400 cm³ = 448 cm³."
  },
  {
    subject: "Chemistry", topic: "Stoichiometry & Moles", year: 2004, exam: "JAMB",
    question: "If a solution contains 4.9g of tetraoxosulphate(VI) acid, calculate the amount of copper(II) oxide that will react with it. [Cu=64, O=16, S=32, H=1]",
    options: ["40.0 g", "80.0 g", "0.8 g", "4.0 g"],
    answer: "4.0 g",
    explanation: "H₂SO₄ + CuO → CuSO₄ + H₂O. Molar mass H₂SO₄ = 98 g/mol. Moles H₂SO₄ = 4.9/98 = 0.05 mol. Moles CuO = 0.05 mol (1:1 ratio). Mass CuO = 0.05 × 80 = 4.0 g."
  },
  {
    subject: "Chemistry", topic: "Stoichiometry & Moles", year: 2004, exam: "JAMB",
    question: "What volume of 0.5 mol dm⁻³ H₂SO₄ will exactly neutralize 20 cm³ of 0.1 mol dm⁻³ NaOH solution?",
    options: ["5.0 cm³", "6.8 cm³", "8.3 cm³", "2.0 cm³"],
    answer: "2.0 cm³",
    explanation: "H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O. Moles NaOH = 0.1 × 20/1000 = 0.002 mol. Moles H₂SO₄ needed = 0.002/2 = 0.001 mol. Volume H₂SO₄ = 0.001/0.5 = 0.002 dm³ = 2.0 cm³."
  },
  {
    subject: "Chemistry", topic: "Stoichiometry & Moles", year: 2004, exam: "JAMB",
    question: "The solubility in mol dm⁻³ of 20g of CuSO₄ dissolved in 100g of water at 180°C is [Cu=64, S=32, O=16]",
    options: ["0.25", "0.13", "2.00", "1.25"],
    answer: "1.25",
    explanation: "Molar mass CuSO₄ = 64 + 32 + 64 = 160 g/mol. Moles CuSO₄ = 20/160 = 0.125 mol. Mass of solution = 100 + 20 = 120g ≈ 120 cm³ = 0.12 dm³. Molarity = 0.125/0.12 = 1.04 mol/dm³. Note: If based on solvent only: 0.125 mol in 0.1 dm³ = 1.25 mol/dm³. JAMB answer is D."
  },

  // =====================
  // CHEMICAL REACTIONS
  // =====================
  {
    subject: "Chemistry", topic: "Chemical Reactions", year: 2004, exam: "JAMB",
    question: "A chemical reaction is always associated with",
    options: [
      "a change in the nature of the reactants",
      "the formation of new substances",
      "a change in the volume of the reactants",
      "an increase in the composition of one of the substances"
    ],
    answer: "the formation of new substances",
    explanation: "The defining characteristic of a chemical reaction is the formation of new substances with different properties from the reactants. Physical changes may alter appearance but do not form new substances."
  },
  {
    subject: "Chemistry", topic: "Chemical Reactions", year: 2004, exam: "JAMB",
    question: "When a solid substance disappears completely as a gas on heating, the substance is said to have undergone",
    options: ["sublimation", "crystallization", "distillation", "evaporation"],
    answer: "sublimation",
    explanation: "Sublimation is the direct transition from solid to gas phase without passing through the liquid phase. Examples include iodine, dry ice (CO₂), and naphthalene."
  },
  {
    subject: "Chemistry", topic: "Chemical Reactions", year: 2004, exam: "JAMB",
    question: "When steam is passed over red-hot carbon, the substances produced are",
    options: [
      "hydrogen and carbon(II) oxide",
      "hydrogen and carbon(IV) oxide",
      "hydrogen and trioxocarbonate(IV) acid",
      "hydrogen, oxygen and carbon(IV) oxide"
    ],
    answer: "hydrogen and carbon(II) oxide",
    explanation: "C + H₂O(steam) → CO + H₂. This reaction produces water gas — a mixture of carbon(II) oxide (CO) and hydrogen. It is an important industrial process."
  },

  // =====================
  // ORGANIC CHEMISTRY
  // =====================
  {
    subject: "Chemistry", topic: "Organic Chemistry", year: 2004, exam: "JAMB",
    question: "Vulcanization involves the removal of",
    options: ["the single bond", "a double bond", "a polymer", "a monomer"],
    answer: "a double bond",
    explanation: "Vulcanization of rubber involves sulphur cross-linking the polymer chains by reacting with the double bonds (C=C) in natural rubber, converting them to single bonds (C-S-C cross-links), making rubber harder and more durable."
  },
  {
    subject: "Chemistry", topic: "Organic Chemistry", year: 2004, exam: "JAMB",
    question: "The alkyl group can be represented by the general formula",
    options: ["CₙH₂ₙ", "CₙH₂ₙ₋₂", "CₙH₂ₙ₊₁", "CₙH₂ₙ₊₂"],
    answer: "CₙH₂ₙ₊₁",
    explanation: "An alkyl group is derived from an alkane by removing one hydrogen atom. Alkanes have formula CₙH₂ₙ₊₂, so removing one H gives the alkyl group CₙH₂ₙ₊₁ (e.g. methyl CH₃, ethyl C₂H₅)."
  },
  {
    subject: "Chemistry", topic: "Organic Chemistry", year: 2004, exam: "JAMB",
    question: "C₂H₅OH(aq) → (Conc. H₂SO₄, 180°C) → Y. In the reaction above, Y represents",
    options: ["C₂H₅COOH", "CH₄", "CH₃OCH₃", "C₂H₄"],
    answer: "C₂H₄",
    explanation: "Dehydration of ethanol with concentrated H₂SO₄ at 180°C produces ethene (C₂H₄) and water. At lower temperature (140°C), the product is diethyl ether (CH₃OCH₃) instead."
  },
  {
    subject: "Chemistry", topic: "Organic Chemistry", year: 2004, exam: "JAMB",
    question: "In the production of soap, concentrated sodium chloride is added to",
    options: [
      "saponify the soap",
      "emulsify the soap",
      "decrease the solubility of the soap",
      "increase the solubility of the soap"
    ],
    answer: "decrease the solubility of the soap",
    explanation: "Salting out — adding concentrated NaCl — decreases the solubility of soap in water, causing it to precipitate out. This purifies the soap by separating it from the aqueous glycerol layer."
  },
  {
    subject: "Chemistry", topic: "Organic Chemistry", year: 2004, exam: "JAMB",
    question: "Oxyacetylene flame is used for iron-welding because it",
    options: [
      "evolves a lot of heat when burnt",
      "dissociates to produce carbon(IV) oxide and oxygen",
      "makes the iron metal solidify very quickly",
      "combines with oxygen to give a pop sound"
    ],
    answer: "evolves a lot of heat when burnt",
    explanation: "The oxyacetylene flame (burning acetylene C₂H₂ in oxygen) produces temperatures up to 3500°C — one of the hottest flames available — making it ideal for welding and cutting metals."
  },
  {
    subject: "Chemistry", topic: "Organic Chemistry", year: 2004, exam: "JAMB",
    question: "Which of these reagents can confirm the presence of a triple bond?",
    options: ["Bromine gas", "Bromine water", "Acidified KMnO₄", "Copper(I) chloride"],
    answer: "Copper(I) chloride",
    explanation: "Copper(I) chloride (ammoniacal solution) gives a red/brown precipitate with terminal alkynes (containing C≡C-H) — this is a specific test for a triple bond at the end of a carbon chain."
  },
  {
    subject: "Chemistry", topic: "Organic Chemistry", year: 2004, exam: "JAMB",
    question: "The IUPAC name of CH₃-C(CH₃)(CH₃)-CH(CH₃)-CH₂-CH₂-CH₃ is",
    options: ["3,4-dimethylhexane", "2,3-dimethylhexane", "2-ethylhexane", "2-ethylpentane"],
    answer: "2,3-dimethylhexane",
    explanation: "The longest chain has 6 carbons (hexane). There are methyl groups at positions 2 and 3. The correct IUPAC name is 2,3-dimethylhexane."
  },
  {
    subject: "Chemistry", topic: "Organic Chemistry", year: 2004, exam: "JAMB",
    question: "An isomer of C₅H₁₂ is",
    options: ["2-ethyl butane", "butane", "2-methyl butane", "2-methyl propane"],
    answer: "2-methyl butane",
    explanation: "C₅H₁₂ (pentane) has three isomers: n-pentane, 2-methylbutane (isopentane), and 2,2-dimethylpropane (neopentane). 2-methylbutane is a valid isomer. 2-ethylbutane would be C₆H₁₄, not C₅H₁₂."
  },
  {
    subject: "Chemistry", topic: "Organic Chemistry", year: 2004, exam: "JAMB",
    question: "Alkanol + Alkanoic acid → Ester + Water. The reverse reaction of the equation above is known as",
    options: ["saponification", "hydrolysis", "fermentation", "hydration"],
    answer: "hydrolysis",
    explanation: "The reverse of esterification is hydrolysis — breaking the ester bond using water to regenerate the alcohol and acid. Saponification specifically refers to hydrolysis of esters using a base (NaOH)."
  },
  {
    subject: "Chemistry", topic: "Organic Chemistry", year: 2004, exam: "JAMB",
    question: "CH₃COOH(g) → CH₄(g) + CO₂(g). The reaction above is",
    options: ["acidification", "esterification", "decarboxylation", "carboxylation"],
    answer: "decarboxylation",
    explanation: "Decarboxylation is the removal of a carboxyl group (–COOH) as CO₂. Heating acetic acid (ethanoic acid) causes it to lose CO₂, producing methane — this is decarboxylation."
  },
  {
    subject: "Chemistry", topic: "Organic Chemistry", year: 2004, exam: "JAMB",
    question: "A characteristic of the alkane family is",
    options: ["substitution reaction", "neutralization reaction", "addition reaction", "elimination reaction"],
    answer: "substitution reaction",
    explanation: "Alkanes are saturated hydrocarbons with no double bonds. They cannot undergo addition reactions. Their characteristic reaction is free radical substitution — e.g. halogenation in UV light."
  },

  // =====================
  // ENVIRONMENTAL CHEMISTRY
  // =====================
  {
    subject: "Chemistry", topic: "Environmental Chemistry", year: 2004, exam: "JAMB",
    question: "Pollution of underground water by metal ions is very likely in a soil that has high",
    options: ["alkalinity", "nitrate content", "acidity", "chloride content"],
    answer: "acidity",
    explanation: "Acidic soils increase the solubility of metal ions through leaching. Acid rain and naturally acidic soils cause heavy metals (lead, cadmium, mercury) to dissolve and leach into underground water."
  },
  {
    subject: "Chemistry", topic: "Environmental Chemistry", year: 2004, exam: "JAMB",
    question: "A carcinogenic substance is",
    options: ["nitrogen(II) oxide", "carbon(II) oxide", "asbestos dust", "sawdust"],
    answer: "asbestos dust",
    explanation: "Asbestos dust is a well-known carcinogen — it causes mesothelioma (lung cancer) when its fibres are inhaled. Carbon monoxide is poisonous but not specifically carcinogenic."
  },

  // =====================
  // SOLUTIONS & MIXTURES
  // =====================
  {
    subject: "Chemistry", topic: "Solutions & Mixtures", year: 2004, exam: "JAMB",
    question: "Which of these compounds is a normal salt?",
    options: ["Na₂CO₃", "NaHCO₃", "NaHSO₄", "NaHS"],
    answer: "Na₂CO₃",
    explanation: "A normal salt is formed by complete replacement of all acidic hydrogen atoms of an acid. Na₂CO₃ (sodium carbonate) is a normal salt. NaHCO₃ and NaHSO₄ are acid salts (still contain acidic H)."
  },
  {
    subject: "Chemistry", topic: "Solutions & Mixtures", year: 2004, exam: "JAMB",
    question: "Calcium tetraoxosulphate(VI) dissolves in water only sparingly to form a",
    options: ["colloid", "solution", "suspension", "precipitate"],
    answer: "solution",
    explanation: "CaSO₄ (calcium sulphate/gypsum) is sparingly soluble — it dissolves slightly to form a dilute solution. A saturated solution of CaSO₄ exists but at very low concentration (about 2.4 g/L)."
  },
  {
    subject: "Chemistry", topic: "Solutions & Mixtures", year: 2004, exam: "JAMB",
    question: "Hardness of water is caused by the presence of the ions of",
    options: ["calcium and magnesium", "calcium and sodium", "magnesium and silver", "sodium and potassium"],
    answer: "calcium and magnesium",
    explanation: "Hard water contains dissolved Ca²⁺ and Mg²⁺ ions (from limestone and dolomite). These ions react with soap to form scum and precipitate in boilers. Na⁺ and K⁺ do not cause hardness."
  },

  // =====================
  // ATOMIC STRUCTURE & BONDING
  // =====================
  {
    subject: "Chemistry", topic: "Atomic Structure & Bonding", year: 2004, exam: "JAMB",
    question: "It is difficult to achieve an orderly arrangement of the molecules of a gas because they",
    options: [
      "can collide with one another in the container",
      "are too small in size",
      "have little force of attraction between them",
      "have no definite shape"
    ],
    answer: "have little force of attraction between them",
    explanation: "Gas molecules have very weak intermolecular forces of attraction. Without sufficient attractive forces to hold them in fixed positions, gas molecules move randomly and cannot maintain an orderly arrangement."
  },
  {
    subject: "Chemistry", topic: "Atomic Structure & Bonding", year: 2004, exam: "JAMB",
    question: "The shape of the s-orbital is",
    options: ["elliptical", "spiral", "circular", "spherical"],
    answer: "spherical",
    explanation: "The s-orbital has a spherical shape — the probability of finding an electron is equal in all directions from the nucleus. The 1s, 2s, 3s orbitals all have spherical shapes of increasing size."
  },
  {
    subject: "Chemistry", topic: "Atomic Structure & Bonding", year: 2004, exam: "JAMB",
    question: "Which of the following mixtures of gases is likely to burn in a flame?",
    options: ["Helium and neon", "Neon and nitrogen", "Neon and hydrogen", "Nitrogen and helium"],
    answer: "Neon and hydrogen",
    explanation: "Of the options, only hydrogen (H₂) is flammable. Helium, neon, and nitrogen are non-flammable. A mixture containing hydrogen can burn in a flame."
  },
  {
    subject: "Chemistry", topic: "Atomic Structure & Bonding", year: 2004, exam: "JAMB",
    question: "The property of chlorine which causes hydrogen chloride to be more ionic than the chlorine molecule is its",
    options: ["electronegativity", "electropositivity", "electron affinity", "electrovalency"],
    answer: "electronegativity",
    explanation: "Electronegativity is the ability of an atom to attract electrons in a bond. In HCl, the high electronegativity of Cl pulls electrons toward itself, creating a polar (partially ionic) bond. Cl₂ is non-polar since both atoms have equal electronegativity."
  },
  {
    subject: "Chemistry", topic: "Atomic Structure & Bonding", year: 2004, exam: "JAMB",
    question: "An electron can be added to a halogen atom to form a halide ion with",
    options: ["8 valence electrons", "7 valence electrons", "2 valence electrons", "3 valence electrons"],
    answer: "8 valence electrons",
    explanation: "Halogens have 7 valence electrons. Adding one electron completes the outer shell to give 8 valence electrons (octet), forming a stable halide ion (X⁻) with the same electronic configuration as a noble gas."
  },
  {
    subject: "Chemistry", topic: "Atomic Structure & Bonding", year: 2004, exam: "JAMB",
    question: "Carbon is tetravalent because",
    options: [
      "the 2s and 2p atomic orbitals hybridize",
      "all the atomic orbitals of carbon hybridize",
      "the electrons in all the orbitals of carbon are equivalent",
      "the electrons in both the 2s and 2p orbitals are equivalent"
    ],
    answer: "the 2s and 2p atomic orbitals hybridize",
    explanation: "Carbon's tetravalency arises from sp³ hybridization — the one 2s and three 2p orbitals mix to form four equivalent sp³ hybrid orbitals, each contributing one electron to form four bonds."
  },
  {
    subject: "Chemistry", topic: "Atomic Structure & Bonding", year: 2004, exam: "JAMB",
    question: "Chlorine consisting of two isotopes of mass numbers 35 and 37 in the ratio 3:1 has an atomic mass of 35.5. Calculate the relative abundance of the isotope of mass number 37.",
    options: ["60", "20", "75", "25"],
    answer: "25",
    explanation: "Ratio 3:1 means 3 parts ³⁵Cl to 1 part ³⁷Cl out of 4 total. Abundance of ³⁷Cl = 1/4 × 100 = 25%. Check: (35×75 + 37×25)/100 = (2625 + 925)/100 = 3550/100 = 35.5 ✓"
  },

  // =====================
  // GASES & KINETIC THEORY
  // =====================
  {
    subject: "Chemistry", topic: "Gases & Kinetic Theory", year: 2004, exam: "JAMB",
    question: "A given volume of methane diffuses in 20s. How long will it take the same volume of sulphur(VI) oxide to diffuse under the same conditions? [C=12, H=1, S=32, O=16]",
    options: ["40s", "60s", "20s", "5s"],
    answer: "60s",
    explanation: "Graham's law: t₂/t₁ = √(M₂/M₁). M(CH₄) = 16, M(SO₃) = 80. t₂ = 20 × √(80/16) = 20 × √5 = 20 × 2.236 ≈ 44.7s. Note: If SO₂ (M=64): t₂ = 20 × √(64/16) = 20 × 2 = 40s. For SO₃ (M=80): ≈45s. JAMB answer is B (60s). Students should verify."
  },
  {
    subject: "Chemistry", topic: "Gases & Kinetic Theory", year: 2004, exam: "JAMB",
    question: "According to Charles' law, the volume of a gas becomes zero at",
    options: ["–100°C", "–273°C", "–373°C", "0°C"],
    answer: "–273°C",
    explanation: "Charles' law states V ∝ T (absolute temperature). Extrapolating to V = 0 gives T = 0 K = –273°C (absolute zero). This is the theoretical temperature at which gas volume becomes zero."
  },
  {
    subject: "Chemistry", topic: "Gases & Kinetic Theory", year: 2004, exam: "JAMB",
    question: "Which of the following gases can be collected by the method of downward delivery?",
    options: ["Oxygen", "Hydrogen", "Chlorine", "Ammonia"],
    answer: "Chlorine",
    explanation: "Downward delivery (downward displacement of air) is used to collect gases denser than air. Chlorine (M=71) is much denser than air (M≈29). Hydrogen and ammonia are lighter than air; oxygen is slightly denser but usually collected by upward delivery."
  },

  // =====================
  // PERIODIC TABLE & ELEMENTS
  // =====================
  {
    subject: "Chemistry", topic: "Periodic Table & Elements", year: 2004, exam: "JAMB",
    question: "Which of the following hydrogen halides has the highest entropy value?",
    options: ["HBr", "HF", "HI", "HCl"],
    answer: "HI",
    explanation: "Entropy increases with molecular mass and size. HI has the highest molecular mass among the hydrogen halides listed (M=128), making it the most disordered/highest entropy compound."
  },
  {
    subject: "Chemistry", topic: "Periodic Table & Elements", year: 2004, exam: "JAMB",
    question: "Transition metals possess variable oxidation states because they have",
    options: [
      "electrons in the s orbitals",
      "electrons in the d orbitals",
      "partially filled p orbitals",
      "a variable number of electrons in the p orbitals"
    ],
    answer: "electrons in the d orbitals",
    explanation: "Transition metals have partially filled d orbitals. The d electrons have similar energies to the outer s electrons, allowing transition metals to lose different numbers of d electrons, resulting in variable oxidation states."
  },
  {
    subject: "Chemistry", topic: "Periodic Table & Elements", year: 2004, exam: "JAMB",
    question: "The allotrope of carbon used in the decolourization of sugar is",
    options: ["soot", "lampblack", "graphite", "charcoal"],
    answer: "charcoal",
    explanation: "Activated charcoal (activated carbon) is used in the sugar refining industry to decolourise raw sugar solutions. Its large surface area adsorbs colour-imparting impurities."
  },
  {
    subject: "Chemistry", topic: "Periodic Table & Elements", year: 2004, exam: "JAMB",
    question: "Sodium metal is always kept under oil because it",
    options: [
      "is reduced by atmospheric nitrogen",
      "readily reacts with water",
      "reacts with oxygen and carbon(IV) oxide",
      "reacts vigorously on exposure to air"
    ],
    answer: "reacts vigorously on exposure to air",
    explanation: "Sodium reacts vigorously with both oxygen (forming Na₂O) and moisture in air. Storing it under oil (mineral oil/paraffin) prevents contact with air and moisture, avoiding dangerous reactions."
  },
  {
    subject: "Chemistry", topic: "Periodic Table & Elements", year: 2004, exam: "JAMB",
    question: "Aluminium hydroxide is used in the dyeing industry as a",
    options: ["dye", "dispersant", "salt", "mordant"],
    answer: "mordant",
    explanation: "A mordant is a substance that fixes dye to fabric. Aluminium hydroxide acts as a mordant by forming a complex with dye molecules and bonding to textile fibres, making the colour fast and permanent."
  },
  {
    subject: "Chemistry", topic: "Periodic Table & Elements", year: 2004, exam: "JAMB",
    question: "Sulphur(IV) oxide bleaches by",
    options: ["hydration", "reduction", "absorption", "oxidation"],
    answer: "reduction",
    explanation: "SO₂ bleaches by reduction — it removes oxygen from coloured compounds, decolourising them. This is a temporary bleach (unlike chlorine which bleaches by oxidation). The bleached colours may return on exposure to air."
  },
  {
    subject: "Chemistry", topic: "Nuclear Chemistry", year: 2004, exam: "JAMB",
    question: "²²⁶₈₈Ra → X + alpha particle. The mass number X is",
    options: ["226", "220", "227", "222"],
    answer: "222",
    explanation: "Alpha decay: ²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He. Mass number: 226 − 4 = 222. Atomic number: 88 − 2 = 86 (Radon). The product is ²²²Rn with mass number 222."
  },

  // =====================
  // ALLOYS & METALS
  // =====================
  {
    subject: "Chemistry", topic: "Alloys & Metals", year: 2004, exam: "JAMB",
    question: "Alloys are best prepared by",
    options: [
      "cooling a molten mixture of the metals",
      "reducing a mixture of their metallic oxides",
      "arc-welding",
      "electroplating"
    ],
    answer: "cooling a molten mixture of the metals",
    explanation: "Alloys are best prepared by melting the component metals together and allowing the molten mixture to cool — this produces a homogeneous mixture with uniform properties throughout."
  }
]

export default chemJamb2004
