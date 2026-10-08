// JAMB 1997 Chemistry Past Questions
// Fully audited - questions, answers, calculations, explanations, OCR/transcription issues, and app-safe formatting.

const chemJamb1997 = [

  {
    id: 1,
    subject: "Chemistry",
    topic: "Gas Laws",
    year: 1997,
    exam: "JAMB",
    question: "35 cm3 of hydrogen was sparked with 12 cm3 of oxygen at 110 C and 760 mm Hg to produce steam. What percentage of the total volume of gas left after the reaction is hydrogen?",
    options: ["11%", "31%", "35%", "69%"],
    answer: "31%",
    explanation: "Reaction: 2H2(g) + O2(g) -> 2H2O(g). Two volumes of hydrogen react with one volume of oxygen. Therefore, 12 cm3 of O2 reacts with 24 cm3 of H2. Hydrogen left = 35 - 24 = 11 cm3. At 110 C, the water remains as steam, so total gas volume after reaction = 11 + 24 = 35 cm3. Percentage of hydrogen = (11 / 35) x 100 = 31.4%, approximately 31%."
  },

  {
    id: 2,
    subject: "Chemistry",
    topic: "Stoichiometry",
    year: 1997,
    exam: "JAMB",
    question: "2.85 g of an oxide of copper gave 2.52 g of copper on reduction and 1.90 g of another oxide gave 1.52 g of copper on reduction. The data above illustrates the law of",
    options: ["constant composition", "conservation of mass", "reciprocal proportions", "multiple proportions"],
    answer: "multiple proportions",
    explanation: "In the first oxide, oxygen = 2.85 - 2.52 = 0.33 g. In the second oxide, oxygen = 1.90 - 1.52 = 0.38 g. For a fixed mass of oxygen, the masses of copper that combine with it are in a simple whole-number ratio (approximately 2:1). This demonstrates the Law of Multiple Proportions."
  },

  {
    id: 3,
    subject: "Chemistry",
    topic: "States of Matter",
    year: 1997,
    exam: "JAMB",
    // CHECK SOURCE: The original cooling-curve graph OPQR is not included, so the graphical interpretation cannot be independently verified.
    question: "A sample X, solid at room temperature, was melted, heated to a temperature of 358 K and allowed to cool as shown in the cooling curve graph OPQR. The horizontal flat plateau section PQ indicates that X is",
    options: ["a mixture of salts", "a hydrated salt", "an ionic salt", "a pure compound"],
    answer: "a pure compound",
    explanation: "A pure substance changes state at a constant temperature, giving a horizontal plateau on a cooling curve. Mixtures generally change state over a range of temperatures."
  },

  {
    id: 4,
    subject: "Chemistry",
    topic: "States of Matter",
    year: 1997,
    exam: "JAMB",
    // CHECK SOURCE: The original cooling-curve graph OPQR is not included, so the graphical interpretation cannot be independently verified.
    question: "Based on the cooling curve graph OPQR, the initial sloped section OP suggests that substance X is in the",
    options: ["liquid state", "solid/liquid state", "solid state", "gaseous state"],
    answer: "liquid state",
    explanation: "If X has just been completely melted before cooling begins, the initial sloping section represents cooling of the liquid before the freezing plateau is reached."
  },

  {
    id: 5,
    subject: "Chemistry",
    topic: "Gas Laws",
    year: 1997,
    exam: "JAMB",
    question: "An element, X, forms a volatile hydride XH3 with a vapour density of 17.0. The relative atomic mass of X is [H = 1]",
    options: ["34.0", "31.0", "20.0", "14.0"],
    answer: "31.0",
    explanation: "Relative molecular mass = 2 x vapour density = 2 x 17 = 34. Since the hydride is XH3, its relative molecular mass is X + 3(1). Therefore X + 3 = 34, so X = 31.0."
  },

  {
    id: 6,
    subject: "Chemistry",
    topic: "Gas Laws",
    year: 1997,
    exam: "JAMB",
    question: "A mixture of 0.20 mole of Ar, 0.20 mole of N2 and 0.30 mole of He exerts a total pressure of 2.1 atm. The partial pressure of He in the mixture is",
    options: ["0.90 atm", "0.80 atm", "0.70 atm", "0.60 atm"],
    answer: "0.90 atm",
    explanation: "Total moles = 0.20 + 0.20 + 0.30 = 0.70 mol. Mole fraction of He = 0.30 / 0.70 = 3/7. By Dalton's law, partial pressure = mole fraction x total pressure = (3/7) x 2.1 = 0.90 atm."
  },

  {
    id: 7,
    subject: "Chemistry",
    topic: "Gas Laws",
    year: 1997,
    exam: "JAMB",
    question: "If 30 cm3 of oxygen diffuses through a porous plug in 7 s, how long will it take 60 cm3 of chlorine to diffuse through the same plug under identical conditions? [O = 16, Cl = 35.5]",
    options: ["12 s", "14 s", "21 s", "30 s"],
    answer: "21 s",
    explanation: "Rate of diffusion is proportional to 1/square root of molar mass. For O2 and Cl2, M(O2) = 32 and M(Cl2) = 71. Therefore, (30/7) / (60/t) = square root(71/32). Solving gives t approximately 20.9 s, which rounds to 21 s."
  },

  {
    id: 8,
    subject: "Chemistry",
    topic: "Kinetic Theory",
    year: 1997,
    exam: "JAMB",
    question: "The temperature of a body decreases when drops of a liquid placed on it evaporate because",
    options: [
      "the atmospheric vapour pressure has a cooling effect on the body",
      "a temperature gradient exists between the drops of liquid and the body",
      "the heat of vapourisation is drawn from the body causing it to cool",
      "the random motion of the liquid molecules causes a cooling effect on the body"
    ],
    answer: "the heat of vapourisation is drawn from the body causing it to cool",
    explanation: "Evaporation is an endothermic process. Escaping molecules require energy, and this energy is taken from the body and liquid, producing a cooling effect."
  },

  {
    id: 9,
    subject: "Chemistry",
    topic: "Periodic Table",
    year: 1997,
    exam: "JAMB",
    question: "The electronic configurations of two elements with similar chemical properties are represented by",
    options: [
      "1s2 2s2 2p5 and 1s2 2s2 2p4",
      "1s2 2s2 2p4 and 1s2 2s2 2p6 3s1",
      "1s2 2s2 2p6 3s1 and 1s2 2s1",
      "1s2 2s2 2p4 and 1s2 2s1"
    ],
    answer: "1s2 2s2 2p6 3s1 and 1s2 2s1",
    explanation: "Elements in the same group have the same number of valence electrons and generally show similar chemical properties. The two configurations have one valence electron each and represent sodium and lithium."
  },

  {
    id: 10,
    subject: "Chemistry",
    topic: "Periodic Table",
    year: 1997,
    exam: "JAMB",
    question: "In the periodic table, what is the property that decreases along a period from left to right and increases down a group?",
    options: ["Atomic number", "Electron affinity", "Ionization potential", "Atomic radius"],
    answer: "Atomic radius",
    explanation: "Atomic radius generally decreases across a period because effective nuclear charge increases. It increases down a group because additional electron shells are added."
  },

  {
    id: 11,
    subject: "Chemistry",
    topic: "Chemical Bonding",
    year: 1997,
    exam: "JAMB",
    question: "Two elements, P and Q, with atomic numbers 11 and 8 respectively, combine chemically. The formula of the compound formed is",
    options: ["PQ", "PQ2", "P2Q", "P3Q"],
    answer: "P2Q",
    explanation: "Atomic number 11 is sodium, which forms P+. Atomic number 8 is oxygen, which forms Q2-. Two P+ ions are therefore required for each Q2- ion, giving P2Q."
  },

  {
    id: 12,
    subject: "Chemistry",
    topic: "Atomic Structure",
    year: 1997,
    exam: "JAMB",
    question: "Oxygen is a mixture of two isotopes, 16O and 18O, with a relative abundance of 90% and 10% respectively. The relative atomic mass of oxygen is",
    options: ["16.0", "16.2", "17.0", "18.0"],
    answer: "16.2",
    explanation: "Relative atomic mass = (16 x 0.90) + (18 x 0.10) = 14.4 + 1.8 = 16.2."
  },

  {
    id: 13,
    subject: "Chemistry",
    topic: "Gases & Non-Metals",
    year: 1997,
    exam: "JAMB",
    question: "200 cm3 of air was passed over heated copper in a syringe several times to produce copper(II) oxide. When cooled, the final volume of air recorded was 158 cm3. Estimate the percentage of oxygen in the air sample.",
    options: ["31%", "27%", "21%", "19%"],
    answer: "21%",
    explanation: "Volume of oxygen consumed = 200 - 158 = 42 cm3. Percentage of oxygen = (42 / 200) x 100 = 21%."
  },

  {
    id: 14,
    subject: "Chemistry",
    topic: "Environmental Chemistry",
    year: 1997,
    exam: "JAMB",
    question: "Which of the following gases is classified as a highly hazardous pollutant due to its ability to bind strongly to human haemoglobin?",
    options: ["Hydrogen sulphide", "Carbon(IV) oxide", "Sulphur(IV) oxide", "Carbon(II) oxide"],
    answer: "Carbon(II) oxide",
    explanation: "Carbon(II) oxide, also called carbon monoxide (CO), binds strongly to haemoglobin to form carboxyhaemoglobin and interferes with oxygen transport in the blood."
  },

  {
    id: 15,
    subject: "Chemistry",
    topic: "Water Chemistry",
    year: 1997,
    exam: "JAMB",
    question: "A major process involved in the softening of temporary hard water is the",
    options: [
      "conversion of a soluble calcium salt to its insoluble trioxocarbonate(IV)",
      "decomposition of calcium trioxocarbonate(IV)",
      "conversion of an insoluble calcium salt to its soluble trioxocarbonate(IV)",
      "oxidation of calcium atoms to their ions"
    ],
    answer: "conversion of a soluble calcium salt to its insoluble trioxocarbonate(IV)",
    explanation: "Temporary hardness is mainly caused by soluble calcium hydrogencarbonate. On boiling, calcium hydrogencarbonate decomposes and insoluble calcium carbonate is precipitated: Ca(HCO3)2 -> CaCO3 + CO2 + H2O."
  },

  {
    id: 16,
    subject: "Chemistry",
    topic: "Stoichiometry",
    year: 1997,
    exam: "JAMB",
    question: "On recrystallization, 20 g of anhydrous magnesium tetraoxosulphate(VI) forms 41 g of magnesium tetraoxosulphate(VI) crystals, MgSO4.yH2O. The value of y is [Mg = 24, S = 32, O = 16, H = 1]",
    options: ["1", "3", "5", "7"],
    answer: "7",
    explanation: "Mass of water = 41 - 20 = 21 g. Molar mass of MgSO4 = 24 + 32 + (4 x 16) = 120 g mol^-1. Moles of MgSO4 = 20/120 = 0.1667 mol. Moles of H2O = 21/18 = 1.1667 mol. Ratio = 1.1667/0.1667 = 7. Therefore y = 7."
  },

  {
    id: 17,
    subject: "Chemistry",
    topic: "Solutions & Solubility",
    year: 1997,
    exam: "JAMB",
    question: "A saturated solution of AgCl was found to have a concentration of 1.30 x 10^(-5) mol dm^-3. The solubility product (Ksp) of AgCl therefore is",
    options: [
      "1.30 x 10^(-5) mol2 dm^-6",
      "1.30 x 10^(-7) mol2 dm^-6",
      "1.69 x 10^(-10) mol2 dm^-6",
      "2.60 x 10^(-12) mol2 dm^-6"
    ],
    answer: "1.69 x 10^(-10) mol2 dm^-6",
    explanation: "AgCl(s) <=> Ag+(aq) + Cl-(aq). Since the ions are produced in a 1:1 ratio, [Ag+] = [Cl-] = 1.30 x 10^(-5) M. Therefore Ksp = (1.30 x 10^(-5))^2 = 1.69 x 10^(-10) mol2 dm^-6."
  },

  {
    id: 18,
    subject: "Chemistry",
    topic: "Solutions & Solubility",
    year: 1997,
    exam: "JAMB",
    question: "The hydroxyl ion concentration, [OH-], in a solution of sodium hydroxide of pH 10.0 is",
    options: ["10^(-10) mol dm^-3", "10^(-6) mol dm^-3", "10^(-4) mol dm^-3", "10^(-2) mol dm^-3"],
    answer: "10^(-4) mol dm^-3",
    explanation: "At 25 C, pH + pOH = 14. Therefore pOH = 14 - 10 = 4. Hence [OH-] = 10^(-4) mol dm^-3."
  },

  {
    id: 19,
    subject: "Chemistry",
    topic: "Solutions & Solubility",
    year: 1997,
    exam: "JAMB",
    question: "Which of the aqueous solutions with the pH values below will liberate hydrogen when it reacts with magnesium metal?",
    options: ["13.0", "7.0", "6.5", "3.0"],
    answer: "3.0",
    explanation: "Magnesium reacts with sufficiently acidic solutions to liberate hydrogen gas. Among the options, pH 3.0 represents the most strongly acidic solution."
  },

  {
    id: 20,
    subject: "Chemistry",
    topic: "Solutions & Volumetric Analysis",
    year: 1997,
    exam: "JAMB",
    question: "Given that 15.00 cm3 of H2SO4 was required to completely neutralize 25.00 cm3 of 0.125 mol dm^-3 NaOH, calculate the molar concentration of the acid solution.",
    options: ["0.925 mol dm^-3", "0.156 mol dm^-3", "0.104 mol dm^-3", "0.023 mol dm^-3"],
    answer: "0.104 mol dm^-3",
    explanation: "H2SO4 + 2NaOH -> Na2SO4 + 2H2O. Moles of NaOH = 0.125 x 0.025 = 0.003125 mol. Moles of H2SO4 = 0.003125/2 = 0.0015625 mol. Concentration = 0.0015625/0.015 = 0.1042 mol dm^-3, approximately 0.104 mol dm^-3."
  },

  {
    id: 21,
    subject: "Chemistry",
    topic: "Electrochemistry",
    year: 1997,
    exam: "JAMB",
    question: "When platinum electrodes are used during the electrolysis of copper(II) tetraoxosulphate(VI) solution, the remaining solution gets progressively",
    options: ["acidic", "basic", "neutral", "amphoteric"],
    answer: "acidic",
    explanation: "Copper ions are discharged at the cathode while water is oxidized at the anode, producing oxygen and hydrogen ions. The remaining sulphate ions combine with the hydrogen ions, so the solution becomes increasingly acidic."
  },

  {
    id: 22,
    subject: "Chemistry",
    topic: "Electrochemistry",
    year: 1997,
    exam: "JAMB",
    question: "How many faradays of electricity are required to deposit 0.20 mole of nickel, if 0.10 faraday of electricity deposited 2.98 g of nickel during electrolysis of its aqueous solution? [Ni = 58.7]",
    options: ["0.20", "0.30", "0.40", "0.50"],
    answer: "0.40",
    explanation: "Nickel is deposited as Ni2+. One mole of Ni therefore requires 2 Faradays. Thus, 0.20 mole requires 0.20 x 2 = 0.40 Faraday. The experimental information also gives approximately the same result."
  },

  {
    id: 23,
    subject: "Chemistry",
    topic: "Oxidation Numbers",
    year: 1997,
    exam: "JAMB",
    question: "What is the oxidation number of Z in the complex ion K2ZCl6?",
    options: ["-3", "+3", "-6", "+4"],
    answer: "+4",
    explanation: "For neutral K2ZCl6: 2(+1) + Z + 6(-1) = 0. Therefore Z - 4 = 0, so the oxidation number of Z is +4."
  },

  {
    id: 24,
    subject: "Chemistry",
    topic: "Redox Reactions",
    year: 1997,
    exam: "JAMB",
    question: "Consider reactions: (i) 2H2S(g) + SO2(g) -> 3S(s) + 2H2O(l) and (ii) 3CuO(s) + 2NH3(g) -> 3Cu(s) + 3H2O(l) + N2(g). In these equations, the oxidizing agent in (i) and the reducing agent in (ii) respectively are",
    options: ["H2S and NH3", "SO2 and CuO", "SO2 and NH3", "H2S and CuO"],
    answer: "SO2 and NH3",
    explanation: "In reaction (i), sulphur in SO2 is reduced from +4 to 0, so SO2 is the oxidizing agent. In reaction (ii), nitrogen in NH3 is oxidized from -3 to 0, so NH3 is the reducing agent."
  },

  {
    id: 25,
    subject: "Chemistry",
    topic: "Chemical Energetics",
    year: 1997,
    exam: "JAMB",
    question: "2SO2(g) + O2(g) <=> 2SO3(g). In the reaction above, the standard heats of formation of SO2(g) and SO3(g) are -297 kJ mol^-1 and -396 kJ mol^-1 respectively. The net heat change of the reaction is",
    options: ["-99 kJ mol^-1", "-198 kJ mol^-1", "+198 kJ mol^-1", "+683 kJ mol^-1"],
    answer: "-198 kJ mol^-1",
    explanation: "Change in enthalpy = sum of enthalpies of formation of products minus sum for reactants. Therefore, change in enthalpy = [2(-396)] - [2(-297) + 0] = -792 + 594 = -198 kJ mol^-1."
  },

  {
    id: 26,
    subject: "Chemistry",
    topic: "Chemical Energetics",
    year: 1997,
    exam: "JAMB",
    question: "1/2 N2(g) + 1/2 O2(g) -> NO(g), change in enthalpy = +89 kJ mol^-1. If the entropy change for the reaction at 25 C is 11.8 J K^-1, calculate the change in free energy at 25 C.",
    options: ["88.71 kJ", "85.48 kJ", "-204.00 kJ", "-3427.40 kJ"],
    answer: "85.48 kJ",
    explanation: "Use change in free energy = change in enthalpy - T(change in entropy). T = 298 K and 11.8 J K^-1 = 0.0118 kJ K^-1. Therefore, change in free energy = 89 - (298 x 0.0118) = 85.48 kJ."
  },

  {
    id: 27,
    subject: "Chemistry",
    topic: "Chemical Kinetics",
    year: 1997,
    exam: "JAMB",
    question: "If the experimental rate law obtained for a given chemical reaction is: rate = k[X]^n[Y]^m, what is the overall order of the reaction?",
    options: ["m", "n / m", "n + m", "n - m"],
    answer: "n + m",
    explanation: "The overall order of a reaction is the sum of the powers of the concentration terms in the rate equation. Therefore, overall order = n + m."
  },

  {
    id: 28,
    subject: "Chemistry",
    topic: "Chemical Equilibrium",
    year: 1997,
    exam: "JAMB",
    question: "One method of driving the position of equilibrium of an endothermic gas reaction forward is to",
    options: [
      "increase the temperature at constant pressure",
      "decrease the system pressure at constant temperature",
      "cool down the apparatus with water",
      "decrease the temperature at constant pressure"
    ],
    answer: "increase the temperature at constant pressure",
    explanation: "An endothermic reaction absorbs heat. Increasing the temperature adds heat to the system and shifts equilibrium in the endothermic direction."
  },

  {
    id: 29,
    subject: "Chemistry",
    topic: "Applied Chemistry",
    year: 1997,
    exam: "JAMB",
    question: "Oxidation of concentrated hydrochloric acid with manganese(IV) oxide liberates a greenish-yellow halogen gas widely used in the",
    options: ["manufacture of toothpastes", "treatment of simple goiter", "vulcanization of rubber", "sterilization of municipal water"],
    answer: "sterilization of municipal water",
    explanation: "Manganese(IV) oxide reacts with concentrated hydrochloric acid to produce chlorine gas: MnO2 + 4HCl -> MnCl2 + Cl2 + 2H2O. Chlorine is widely used to disinfect and sterilize water."
  },

  {
    id: 30,
    subject: "Chemistry",
    topic: "Chemical Equilibrium",
    year: 1997,
    exam: "JAMB",
    question: "For a general equilibrium equation of the form: mE + nF <=> pG + qH, the equilibrium constant expression is given by",
    options: [
      "([E]^m[F]^n) / ([G]^p[H]^q)",
      "([E][F]) / ([G][H])",
      "([G]^p[H]^q) / ([E]^m[F]^n)",
      "([G][H]) / ([E][F])"
    ],
    answer: "([G]^p[H]^q) / ([E]^m[F]^n)",
    explanation: "For a reaction mE + nF <=> pG + qH, Kc = [G]^p[H]^q / ([E]^m[F]^n), with each concentration raised to its stoichiometric coefficient."
  },

  {
    id: 31,
    subject: "Chemistry",
    topic: "Inorganic Chemistry",
    year: 1997,
    exam: "JAMB",
    question: "A chemical compound that will NOT produce oxygen gas upon thermal heating is",
    options: ["potassium dioxonitrate(III)", "lead(IV) oxide", "potassium trioxonitrate(V)", "potassium trioxochlorate(V)"],
    answer: "potassium dioxonitrate(III)",
    explanation: "Potassium dioxonitrate(III), KNO2, is not normally decomposed by heating to produce oxygen. In contrast, lead(IV) oxide, potassium trioxonitrate(V) and potassium trioxochlorate(V) can undergo thermal decomposition involving oxygen release."
  },

  {
    id: 32,
    subject: "Chemistry",
    topic: "Applied Chemistry",
    year: 1997,
    exam: "JAMB",
    question: "Coal gas is an industrial fuel mixture composed primarily of hydrogen, carbon(II) oxide, and",
    options: ["nitrogen", "air", "argon", "methane"],
    answer: "methane",
    explanation: "Coal gas is produced by the destructive distillation of coal. Its combustible components include hydrogen, carbon(II) oxide (carbon monoxide) and methane, together with smaller amounts of other gases."
  },

  {
    id: 33,
    subject: "Chemistry",
    topic: "Laboratory Preparation of Gases",
    year: 1997,
    exam: "JAMB",
    question: "The downward delivery apparatus shown in the experiment is used to collect gas Y. Gas Y could be",
    options: ["hydrogen chloride", "oxygen", "carbon(IV) oxide", "chlorine"],
    answer: "hydrogen chloride",
    explanation: "Downward delivery, or upward displacement of air, is suitable for gases that are denser than air and cannot conveniently be collected over water. Hydrogen chloride is very soluble in water and is denser than air, so it can be collected by this method."
  },

  {
    id: 34,
    subject: "Chemistry",
    topic: "Inorganic Chemistry",
    year: 1997,
    exam: "JAMB",
    question: "2X-(aq) + MnO2(s) + 4H+(aq) -> X2(g) + Mn2+(aq) + 2H2O(l). The reaction above can be used for the laboratory preparation of all halogens EXCEPT fluorine because fluorine is",
    options: ["a highly poisonous gas", "an exceptionally powerful oxidizing agent", "strongly electronegative in nature", "highly reactive with glass containers"],
    answer: "an exceptionally powerful oxidizing agent",
    explanation: "Fluorine is an exceptionally strong oxidizing agent. It cannot be conveniently prepared by chemical oxidation of fluoride ions using manganese(IV) oxide. Fluorine is prepared by electrolysis."
  },

  {
    id: 35,
    subject: "Chemistry",
    topic: "Qualitative Analysis",
    year: 1997,
    exam: "JAMB",
    question: "The standard laboratory chemical reaction used during the qualitative test for tetraoxosulphate(VI) ions is",
    options: [
      "SO4^2-(aq) + Ba2+(aq) -> BaSO4(s)",
      "Cu + 4H+ + 2SO4^2- -> CuSO4(aq) + 2H2O + SO2(g)",
      "CuO + 2H+ + SO4^2- -> CuSO4(aq) + H2O",
      "4H+ + 2SO4^2- + 2e- -> SO4^2- + 2H2O + SO2"
    ],
    answer: "SO4^2-(aq) + Ba2+(aq) -> BaSO4(s)",
    explanation: "Sulphate ions are tested by adding a soluble barium salt, usually acidified barium chloride solution. A white precipitate of barium sulphate forms: Ba2+(aq) + SO4^2-(aq) -> BaSO4(s)."
  },

  {
    id: 36,
    subject: "Chemistry",
    topic: "Inorganic Chemistry",
    year: 1997,
    exam: "JAMB",
    question: "The chemical process used to clear and clean surface rust from iron items by dipping them into dilute tetraoxosulphate(VI) acid is based on a standard",
    options: ["hydrolysis of the iron metal", "reaction of an acid with a basic metal oxide", "oxidation of the rust layer", "dehydration of the iron framework"],
    answer: "reaction of an acid with a basic metal oxide",
    explanation: "Rust contains hydrated iron oxides, including iron(III) oxide. The acid reacts with the basic oxide component to form soluble iron salts and water, thereby removing the rust layer."
  },

  {
    id: 37,
    subject: "Chemistry",
    topic: "Applied Chemistry",
    year: 1997,
    exam: "JAMB",
    question: "Which of the following metal additives is combined with iron to manufacture high-grade corrosion-resistant stainless steel?",
    options: ["Silicon", "Sulphur and phosphorus", "Carbon", "Chromium and nickel"],
    answer: "Chromium and nickel",
    explanation: "Stainless steel is an alloy of iron containing chromium and, in many grades, nickel. Chromium forms a thin protective oxide layer that gives the steel its corrosion resistance."
  },

  {
    id: 38,
    subject: "Chemistry",
    topic: "Applied Chemistry",
    year: 1997,
    exam: "JAMB",
    question: "Sodium hydroxide is prepared commercially on a large industrial scale from concentrated sodium chloride solution (brine) by",
    options: [
      "electrolysis inside a cell using a mercury cathode",
      "high-pressure hydrolysis in steam using a catalyst",
      "electrolysis inside a cell using iron as the anode",
      "treating sodium chloride with ammonia and carbon(IV) oxide"
    ],
    answer: "electrolysis inside a cell using a mercury cathode",
    explanation: "The electrolysis of brine produces sodium hydroxide, chlorine and hydrogen. The mercury-cell process is a historical industrial process for producing sodium hydroxide. Modern plants also commonly use diaphragm or membrane cells."
  },

  {
    id: 39,
    subject: "Chemistry",
    topic: "Applied Chemistry",
    year: 1997,
    exam: "JAMB",
    question: "Which of the following compounds gives a brick-red flame test?",
    options: ["CaCl2", "NaCl", "KCl", "CuCl2"],
    answer: "CaCl2",
    explanation: "Calcium compounds give a brick-red or orange-red flame. Sodium gives yellow, potassium gives lilac, and copper compounds give a blue-green flame."
  },

  {
    id: 40,
    subject: "Chemistry",
    topic: "Applied Chemistry",
    year: 1997,
    exam: "JAMB",
    question: "An undesirable straight-chain alkane component in petroleum motor fuels which is highly prone to premature ignition and severe engine knocking is",
    options: ["iso-octane", "n-heptane", "iso-heptane", "n-octane"],
    answer: "n-heptane",
    explanation: "n-Heptane is a straight-chain alkane that has a very low octane rating and is highly prone to engine knocking. It is assigned an octane number of 0 on the standard octane scale."
  },

  {
    id: 41,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1997,
    exam: "JAMB",
    question: "The correct systematic IUPAC nomenclature for the branched hydrocarbon layout: CH3-CH(CH3)-CH(C2H5)-CH2-CH(CH3)-CH3 is",
    options: [
      "3-ethyl-2,5-dimethylhexane",
      "4-ethyl-2,5-dimethylhexane",
      "3-ethyl-1,1,4-trimethylpentane",
      "3-ethyl-2,5,5-trimethylpentane"
    ],
    answer: "3-ethyl-2,5-dimethylhexane",
    explanation: "The longest continuous carbon chain contains six carbon atoms, giving hexane. Numbering from the left gives an ethyl group at carbon 3 and methyl groups at carbons 2 and 5. Therefore the name is 3-ethyl-2,5-dimethylhexane."
  },

  {
    id: 42,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1997,
    exam: "JAMB",
    question: "The condensation reaction of an alkanol with an alkanoic acid in the presence of concentrated H2SO4 yields an organic compound family known as the",
    options: ["Alkanals", "Alkanoates", "Alkanones", "Alkynes"],
    answer: "Alkanoates",
    explanation: "An alkanol reacts with an alkanoic acid to form an ester and water. Esters derived from alkanoic acids are commonly named as alkanoates."
  },

  {
    id: 43,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1997,
    exam: "JAMB",
    question: "The final stable organic product formed from the addition reaction of ethyne gas with an excess stream of hydrogen iodide (HI) is",
    options: ["CH3-CH2I", "CH2I-CH2I", "CH3-CHI2", "CH2=CHI"],
    answer: "CH3-CHI2",
    explanation: "Ethyne reacts with two molecules of HI. The first addition gives CH2=CHI, and the second addition gives CH3-CHI2, a geminal diiodide."
  },

  {
    id: 44,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1997,
    exam: "JAMB",
    question: "How many distinct structural isomers can be written for the saturated alkane molecule pentane (C5H12)?",
    options: ["5", "4", "3", "2"],
    answer: "3",
    explanation: "Pentane has three structural isomers: n-pentane, 2-methylbutane and 2,2-dimethylpropane."
  },

  {
    id: 45,
    subject: "Chemistry",
    topic: "Applied Chemistry",
    year: 1997,
    exam: "JAMB",
    question: "Synthetic detergents are generally preferred over traditional organic soaps for laundry operations in hard water regions because",
    options: [
      "detergents are highly water-soluble while natural soaps are completely insoluble",
      "the calcium and magnesium salts of detergents are soluble in water",
      "the magnesium salts of soap are highly soluble in hard water systems",
      "detergents do not contain any long hydrocarbon terminal chains"
    ],
    answer: "the calcium and magnesium salts of detergents are soluble in water",
    explanation: "Soap reacts with Ca2+ and Mg2+ ions in hard water to form insoluble scum. Many synthetic detergents form soluble calcium and magnesium salts, so they continue to clean effectively in hard water."
  },

  {
    id: 46,
    subject: "Chemistry",
    topic: "Applied Chemistry",
    year: 1997,
    exam: "JAMB",
    question: "The synthetic rubber elastomer obtained by polymerization of chlorobutadiene is called",
    options: ["Teflon", "Isoprene", "Polythene", "Neoprene"],
    answer: "Neoprene",
    explanation: "Neoprene is the synthetic rubber produced from the polymerization of chloroprene, also called 2-chlorobuta-1,3-diene."
  },

  {
    id: 47,
    subject: "Chemistry",
    topic: "Stoichiometry",
    year: 1997,
    exam: "JAMB",
    question: "25 cm3 of a 0.02 M KOH solution completely neutralized 0.03 g of a monobasic organic acid. What is the molecular formula of the acid? [C = 12, H = 1, O = 16]",
    options: ["HCOOH", "CH3COOH", "C2H5COOH", "C3H7COOH"],
    answer: "CH3COOH",
    explanation: "Moles of KOH = 0.02 x 0.025 = 0.0005 mol. Since the acid is monobasic, moles of acid = 0.0005 mol. Molar mass = 0.03 / 0.0005 = 60 g mol^-1. CH3COOH has molar mass 60 g mol^-1, so the answer is CH3COOH."
  },

  {
    id: 48,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1997,
    exam: "JAMB",
    question: "When Fehling's solution is added to two separate isomeric carbonyl compounds X and Y with the molecular formula C5H10O, compound X yields a dense red precipitate while Y shows no reaction. It can be inferred that compound X is",
    options: [
      "CH3-CO-CH2-CH2-CH3",
      "CH3-CH2-CH2-CH2-CHO",
      "CH3-CH2-CO-CH2-CH3",
      "CH3-CH(CH3)-CO-CH3"
    ],
    answer: "CH3-CH2-CH2-CH2-CHO",
    explanation: "Fehling's solution gives a red precipitate of copper(I) oxide with aliphatic aldehydes but generally does not react with simple ketones. Therefore X is pentanal, CH3-CH2-CH2-CH2-CHO."
  },

  {
    id: 49,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1997,
    exam: "JAMB",
    question: "The aromatic molecule toluene (methylbenzene) contains",
    options: [
      "sp3 hybridized carbon atoms only",
      "sp2 hybridized carbon atoms only",
      "both sp3 and sp hybridized carbon atoms",
      "both sp3 and sp2 hybridized carbon atoms"
    ],
    answer: "both sp3 and sp2 hybridized carbon atoms",
    explanation: "The six carbon atoms in the benzene ring of toluene are sp2 hybridized, while the carbon atom in the methyl group is sp3 hybridized."
  },

  // CHECK SOURCE: The supplied question is chemically and nomenclaturally inconsistent.
  // "2-methylbutan-2-one" is not a valid name for the intended ketone, and none of the supplied options gives the correct secondary alcohol for its corresponding ketone.
  // The likely intended ketone is 3-methylbutan-2-one, which is obtained by oxidation of 3-methylbutan-2-ol.
  /*
  {
    id: 50,
    subject: "Chemistry",
    topic: "Organic Chemistry",
    year: 1997,
    exam: "JAMB",
    question: "The compound 2-methylbutan-2-one is the direct product obtained from the oxidation of",
    options: ["2-methylbutan-2-ol", "2-methylbutan-1-ol", "2,3-dimethylpropan-1-ol", "pentan-2-ol"],
    answer: "2-methylbutan-2-ol",
    explanation: "This item cannot be accepted as written. 2-methylbutan-2-ol is a tertiary alcohol and does not give the stated ketone by ordinary oxidation. Also, 2-methylbutan-2-one is not the correct IUPAC name for the corresponding five-carbon ketone. The likely intended pair is 3-methylbutan-2-one and 3-methylbutan-2-ol, but that option is absent."
  }
  */

];

export default chemJamb1997;