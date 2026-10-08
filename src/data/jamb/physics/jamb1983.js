// JAMB 1983 Physics Past Questions (audited)
// Questions containing complex geometric diagrams or custom data tables were skipped.
//
// Math display: every symbol is a real Unicode character, so no LaTeX/KaTeX or runtime
// conversion is needed:
//   powers      10⁸        (superscript digits ⁰¹²³⁴⁵⁶⁷⁸⁹)
//   units       m/s, m/s², cm³
//   subscripts  f₁ f₂ P₁ V₁ T₁
//   operators   × ÷ − ° and Greek letters λ θ ρ
// This file must be saved and served as UTF-8 (for web pages: <meta charset="utf-8">).
//
// Items marked "// CHECK SOURCE" need the owner to verify against the original paper.

const physicsJamb1983 = [
  {
    subject: "Physics", topic: "Sound & Waves", year: 1983, exam: "JAMB",
    question: "In a resonance tube experiment, a tube of fixed length is closed at one end and several tuning forks of increasing frequency are used to obtain resonance at the open end. If the tuning fork with the lowest frequency which gave resonance had a frequency f₁ and the next tuning fork to give resonance had a frequency f₂, find the ratio f₂/f₁.",
    options: ["8", "3", "2", "1/2", "1/3"],
    answer: "3",
    explanation: "A tube closed at one end resonates only at odd multiples of its fundamental frequency. The lowest resonance occurs when the tube length is a quarter of a wavelength (λ/4), so f₁ = v/4L. The next resonance occurs when the length is 3λ/4, so f₂ = 3v/4L. So f₂/f₁ = 3."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1983, exam: "JAMB",
    question: "Which of the following is NOT a vector quantity?",
    options: ["Force", "Altitude", "Weight", "Displacement", "Acceleration"],
    answer: "Altitude",
    explanation: "A vector has both magnitude and direction. Force, weight, displacement and acceleration are all vectors. Altitude is a height above a reference level and has no direction, so it is a scalar."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1983, exam: "JAMB",
    question: "Which of the following statements about friction is NOT correct?",
    options: [
      "The force of kinetic friction is less than the force of static friction.",
      "The force of kinetic friction between two surfaces is independent of the areas in contact provided the normal reaction is unchanged.",
      "The force of rolling friction between two surfaces is less than the force of sliding friction.",
      "The angle of friction is the angle between the normal reaction and the force of friction.",
      "Friction may be reduced by lubrication."
    ],
    answer: "The angle of friction is the angle between the normal reaction and the force of friction.",
    explanation: "The angle of friction (θ) is the angle between the normal reaction R and the resultant of R and the limiting friction force. The normal reaction and the friction force themselves are always at 90° to each other, so the statement is not correct."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1983, exam: "JAMB",
    question: "The force with which an object is attracted to the earth is called its",
    options: ["Acceleration", "Mass", "Gravity", "Impulse", "Weight"],
    answer: "Weight",
    explanation: "Weight is the gravitational force of attraction of the earth on a mass, given by W = mg. Mass, by contrast, is the amount of matter in the object and measures its inertia."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 1983, exam: "JAMB",
    question: "The refractive index of a liquid is 1.5. If the velocity of light in vacuum is 3.0 × 10⁸ m/s, the velocity of light in the liquid is",
    options: [
      "1.5 × 10⁸ m/s",
      "2.0 × 10⁸ m/s",
      "3.0 × 10⁸ m/s",
      "4.5 × 10⁸ m/s",
      "9.0 × 10⁸ m/s"
    ],
    answer: "2.0 × 10⁸ m/s",
    explanation: "The refractive index is n = c/v, where c is the speed of light in vacuum and v is its speed in the medium. So v = c/n = (3.0 × 10⁸)/1.5 = 2.0 × 10⁸ m/s."
  },
  {
    // Checked against published answer keys: the keyed answer is 380g.
    subject: "Physics", topic: "Hydrostatics & Fluids", year: 1983, exam: "JAMB",
    question: "If the relative density of a metal is 19, what will be the mass of 20cm³ of the metal when immersed in water?",
    options: ["380g", "360g", "400g", "39g", "180g"],
    answer: "380g",
    explanation: "Relative density = density of the metal ÷ density of water (1 g/cm³), so the density of the metal is 19 g/cm³. The mass of the metal does not change when it is immersed. Mass = density × volume = 19 × 20 = 380g."
  },
  {
    subject: "Physics", topic: "Hydrostatics & Fluids", year: 1983, exam: "JAMB",
    question: "Which of the following statements about liquid pressure is NOT correct? The pressure",
    options: [
      "At a point in a liquid is proportional to the depth.",
      "At any point in a liquid is the same at the same level.",
      "Is exerted equally in all directions at any point.",
      "Of a liquid at any point on the wall of its container acts in a direction perpendicular to the wall.",
      "At a particular depth depends on the shape of the vessel."
    ],
    answer: "At a particular depth depends on the shape of the vessel.",
    explanation: "The pressure in a liquid depends only on the density of the liquid (ρ), the acceleration due to gravity (g) and the depth (h): P = ρgh. It does not depend on the shape of the vessel."
  },
  {
    // CHECK SOURCE: the marked answer (beats) is clearly wrong as a statement. But option 2 is also strictly false (intensity is proportional to the square of the amplitude),
    // and option 5 depends on whether "first harmonic" means the fundamental or the first overtone. Please confirm the answer key.
    subject: "Physics", topic: "Sound & Waves", year: 1983, exam: "JAMB",
    question: "Which of the following statements is NOT correct?",
    options: [
      "The pitch of a sound note depends on the frequency of vibrations.",
      "The intensity of a sound note is proportional to the amplitude of vibrations.",
      "Beats are produced by two sources of sound because one wave is travelling faster than the other.",
      "When two sources of sound of frequencies 500 Hz and 502 Hz are sounded together, a beat frequency of 2 Hz is observed.",
      "The first harmonic of a note has double the frequency of the fundamental note."
    ],
    answer: "Beats are produced by two sources of sound because one wave is travelling faster than the other.",
    explanation: "Beats are produced when two sound waves of slightly different frequencies interfere. Both waves travel at the same speed in the same medium, so beats are not caused by one wave travelling faster than the other."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 1983, exam: "JAMB",
    question: "Which of the following conditions are necessary and sufficient for total internal reflection to take place at the boundary between two optical media?\nI. Light is passing from an optically denser medium to an optically less dense medium.\nII. Light is passing from an optically less dense medium to an optically denser medium.\nIII. The angle of incidence is greater than the critical angle.\nIV. The angle of incidence is less than the critical angle.",
    options: ["I and II only", "II and III only", "III and IV only", "I and III only", "II and IV only"],
    answer: "I and III only",
    explanation: "Total internal reflection needs two conditions. First, the light must travel from an optically denser medium towards a less dense one (I). Second, the angle of incidence must be greater than the critical angle (III)."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 1983, exam: "JAMB",
    question: "Which of the following statements about defects of vision is/are CORRECT?\nI. For a long-sighted person, close objects appear blurred.\nII. For a short-sighted person, distant objects appear blurred.\nIII. Short sight is corrected by using a pair of converging lenses.",
    options: ["I only", "II only", "I and II only", "II and III only", "I, II and III"],
    answer: "I and II only",
    explanation: "A long-sighted (hypermetropic) person sees close objects blurred (I), and a short-sighted (myopic) person sees distant objects blurred (II). Statement III is wrong because short sight is corrected with diverging (concave) lenses, not converging ones."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 1983, exam: "JAMB",
    question: "The range of wavelengths of the visible spectrum is 400nm – 700nm. The wavelength of gamma rays is",
    options: [
      "Longer than 700nm",
      "Shorter than 700nm but longer than 400nm",
      "550nm",
      "Shorter than 400nm",
      "Infinite"
    ],
    answer: "Shorter than 400nm",
    explanation: "Gamma rays are at the high-frequency end of the electromagnetic spectrum, so their wavelengths are extremely short, far below the 400nm of violet light."
  },
  {
    subject: "Physics", topic: "Heat & Thermodynamics", year: 1983, exam: "JAMB",
    question: "If the pressure on 1000cm³ of an ideal gas is doubled while its Kelvin temperature is halved, then the new volume of the gas will become",
    options: ["25cm³", "50cm³", "1000cm³", "200cm³", "250cm³"],
    answer: "250cm³",
    explanation: "Using P₁V₁/T₁ = P₂V₂/T₂ with P₂ = 2P₁ and T₂ = T₁/2: V₂ = V₁ × (P₁/P₂) × (T₂/T₁) = 1000 × (1/2) × (1/2) = 250cm³."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1983, exam: "JAMB",
    question: "A train has an initial velocity of 44 m/s and an acceleration of −4 m/s². Its velocity after 10 seconds is",
    options: ["2 m/s", "4 m/s", "8 m/s", "12 m/s", "16 m/s"],
    answer: "4 m/s",
    explanation: "Using v = u + at: v = 44 + (−4 × 10) = 44 − 40 = 4 m/s."
  },
  {
    // The question printed g as "10 m/s^-2"; the unit of g is m/s², which is what this uses.
    subject: "Physics", topic: "Vectors & Mechanics", year: 1983, exam: "JAMB",
    question: "A man of mass 50kg ascends a flight of stairs 5m high in 5 seconds. If acceleration due to gravity is 10 m/s², the power expended is",
    options: ["100W", "300W", "250W", "400W", "500W"],
    answer: "500W",
    explanation: "The work done equals the gain in potential energy: W = mgh = 50 × 10 × 5 = 2500J. Power = work ÷ time = 2500/5 = 500W."
  },
  {
    subject: "Physics", topic: "Waves & Optics", year: 1983, exam: "JAMB",
    question: "Which of the following arrangements in the sequence shown can be used to obtain a pure spectrum of white light?",
    options: [
      "Source, slit, converging lens, prism, converging lens, screen.",
      "Source, slit, diverging lens, screen.",
      "Source, converging lens, prism, diverging lens, screen.",
      "Source, slit, prism, diverging lens, screen."
    ],
    answer: "Source, slit, converging lens, prism, converging lens, screen.",
    explanation: "The light from the slit is made parallel by a converging lens, then spread out by the prism. A second converging lens then focuses each colour onto the screen, giving a pure (non-overlapping) spectrum."
  },
  {
    subject: "Physics", topic: "Electricity & Magnetism", year: 1983, exam: "JAMB",
    question: "It is usual to transmit electric power at high voltage and low current. Which of the following are possible advantages of the method?\nI. Heat losses are reduced because the currents are small.\nII. Thin wires can be used because small currents are flowing.\nIII. The power can flow faster because the voltage is high.",
    options: ["I only", "I and II only", "II and III only", "I and III only", "I, II and III"],
    answer: "I and II only",
    explanation: "The heat lost in a transmission line is P = I²R, so a smaller current means less energy lost as heat (I). A small current also allows thinner wires without overheating (II). A higher voltage does not make the power flow faster (III)."
  },
  {
    subject: "Physics", topic: "Vectors & Mechanics", year: 1983, exam: "JAMB",
    question: "A force of 16N is applied to a 4.0kg block that is at rest on a smooth horizontal surface. What is the velocity of the block at t = 5 seconds?",
    options: ["4 m/s", "10 m/s", "20 m/s", "50 m/s", "80 m/s"],
    answer: "20 m/s",
    explanation: "By Newton's second law, a = F/m = 16/4.0 = 4 m/s². Starting from rest (u = 0), v = u + at = 0 + (4 × 5) = 20 m/s."
  },
  {
    subject: "Physics", topic: "Sound & Waves", year: 1983, exam: "JAMB",
    question: "Ripples on water are similar to light waves in that they both",
    options: [
      "Have the same wavelength",
      "Are longitudinal",
      "Cannot be reflected",
      "Travel at the same speed",
      "Can be refracted and diffracted."
    ],
    answer: "Can be refracted and diffracted.",
    explanation: "Water ripples are mechanical waves and light is an electromagnetic wave, so they differ in speed and wavelength. But both are wave motions, so both can be refracted and diffracted."
  },
  {
    subject: "Physics", topic: "Hydrostatics & Fluids", year: 1983, exam: "JAMB",
    question: "A piece of wood is floating on water. The forces acting on the wood are",
    options: [
      "Upthrust and reaction.",
      "Weight and reaction",
      "Weight and upthrust",
      "Upthrust and viscosity",
      "Weight and viscosity."
    ],
    answer: "Weight and upthrust",
    explanation: "A floating piece of wood is in equilibrium under two vertical forces: its weight acting downwards and the upthrust from the displaced water acting upwards. These are equal, as Archimedes' principle states."
  },
  {
    subject: "Physics", topic: "Sound & Waves", year: 1983, exam: "JAMB",
    question: "Longitudinal waves do not exhibit",
    options: ["Refraction", "Reflection", "Diffraction", "Polarization", "Rarefaction"],
    answer: "Polarization",
    explanation: "Polarization restricts the vibrations to a single plane across the direction of travel, so only transverse waves can be polarized. Longitudinal waves vibrate along their direction of travel and cannot be polarized."
  }
];

export default physicsJamb1983;