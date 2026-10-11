// EXAMEDGENG — PHYSICS STUDY GUIDES (EXTRA)
// Guides for Physics topics that did not have one yet:
//   - Hydrostatics & Fluids
//   - Measurement & Units
//   - Moments & Machines
//   - Work, Energy & Power
//   - Kinetic Theory & Gases
//   - Modern Physics
// Keys match the topic names in the question bank exactly.
//
// HOW TO USE:
// 1. Save this file as src/data/studyGuidesPhysicsExtra.js
// 2. In src/data/studyGuides.js add at the top:
//      import PHYSICS_EXTRA_GUIDES from "./studyGuidesPhysicsExtra"
// 3. At the very end of the STUDY_GUIDES object (next to ...BIOLOGY_EXTRA_GUIDES), add:
//      ...PHYSICS_EXTRA_GUIDES,

const PHYSICS_EXTRA_GUIDES = {

  // ==========================================
  // PHYSICS — HYDROSTATICS & FLUIDS
  // ==========================================
  "Hydrostatics & Fluids": {
    subject: "Physics",
    title: "Hydrostatics & Fluids — Pressure, Upthrust and Floating",
    icon: "💧",
    estimatedTime: "4 min read",
    sections: [
      { heading: "What This Topic Covers", type: "text",
        content: "Hydrostatics is the study of fluids (liquids and gases) at rest. Expect questions on density and relative density, pressure in a liquid, atmospheric pressure and barometers, Pascal's principle (hydraulic press), Archimedes' principle, and floating and sinking." },

      { heading: "Key Formulas", type: "cards", items: [
        { title: "Density", body: "ρ = mass ÷ volume. Unit: kg/m³. Water = 1000 kg/m³ = 1 g/cm³." },
        { title: "Relative density", body: "RD = density of substance ÷ density of water. It has NO unit. Also = weight in air ÷ loss of weight in water." },
        { title: "Pressure", body: "P = Force ÷ Area. Unit: pascal (Pa) = N/m²." },
        { title: "Pressure in a liquid", body: "P = hρg. Depends on DEPTH, DENSITY and g only. It does NOT depend on the shape of the container or the amount of liquid." },
        { title: "Upthrust (Archimedes)", body: "Upthrust = weight of fluid displaced = ρ(fluid) × V(submerged) × g." }
      ]},

      { heading: "Pressure in a Liquid — Worked Example", type: "steps", items: [
        "Find the pressure due to water at a depth of 10 m. (ρ = 1000 kg/m³, g = 10 m/s²)",
        "P = hρg = 10 × 1000 × 10.",
        "P = 100,000 Pa = 1 × 10⁵ Pa.",
        "Total pressure at that depth = this + atmospheric pressure (about 1 × 10⁵ Pa), so about 2 × 10⁵ Pa."
      ]},

      { heading: "Atmospheric Pressure and Barometers", type: "cards", items: [
        { title: "Standard value", body: "Atmospheric pressure = 760 mmHg = about 1.01 × 10⁵ Pa." },
        { title: "Mercury barometer", body: "The height of the mercury column measures atmospheric pressure. The height does NOT change if you tilt the tube or use a wider tube." },
        { title: "Altitude", body: "Atmospheric pressure DECREASES as you go higher, so the mercury column gets shorter." },
        { title: "Why mercury?", body: "Mercury is very dense, so the column is only about 76 cm. A water barometer would need a column over 10 m tall." },
        { title: "Manometer", body: "A U-tube that measures gas pressure by comparing it with atmospheric pressure. Gas pressure = atmospheric pressure ± hρg." }
      ]},

      { heading: "Pascal's Principle — Hydraulic Press", type: "steps", items: [
        "Pascal's principle: pressure applied to an enclosed fluid is transmitted equally in all directions.",
        "So F₁/A₁ = F₂/A₂.",
        "Example: small piston area 5 cm², large piston area 200 cm², effort 50 N.",
        "F₂ = F₁ × (A₂/A₁) = 50 × (200/5) = 50 × 40 = 2000 N.",
        "The load is multiplied by 40, but the small piston moves 40 times further. Energy is not created."
      ]},

      { heading: "Archimedes' Principle — Worked Example", type: "steps", items: [
        "A solid weighs 5 N in air and 3 N when fully immersed in water. (g = 10 m/s², ρ(water) = 1000 kg/m³)",
        "Upthrust = 5 − 3 = 2 N.",
        "Volume = Upthrust ÷ (ρg) = 2 ÷ (1000 × 10) = 2 × 10⁻⁴ m³.",
        "Mass = 5 ÷ 10 = 0.5 kg. Density = 0.5 ÷ (2 × 10⁻⁴) = 2500 kg/m³.",
        "Relative density = 2500 ÷ 1000 = 2.5. (Check: 5 ÷ 2 = 2.5 ✓)"
      ]},

      { heading: "Floating and Sinking", type: "cards", items: [
        { title: "Law of flotation", body: "A floating object displaces its OWN WEIGHT of fluid. Weight of object = upthrust." },
        { title: "Floats or sinks?", body: "Density of object < density of fluid: it FLOATS. Density greater: it SINKS. Equal: it stays suspended." },
        { title: "Fraction submerged", body: "Fraction submerged = density of object ÷ density of fluid. A block of density 600 kg/m³ floats in water with 60% submerged." },
        { title: "Ships float", body: "A ship's hull encloses a lot of air, so its AVERAGE density is less than water." },
        { title: "Hydrometer", body: "Measures liquid density. It sinks MORE in a less dense liquid." },
        { title: "Apparent weight", body: "Apparent weight in a fluid = true weight − upthrust." }
      ]},

      { heading: "Watch Out!", type: "warning", items: [
        "Pressure in a liquid does NOT depend on container shape or width. Only depth, density and g matter.",
        "Upthrust equals the weight of FLUID displaced, not the weight of the object (except when floating).",
        "A heavy ship floats because of its average density, not because steel is light.",
        "Relative density has no unit.",
        "Tilting a barometer tube changes the tube length filled, not the vertical height of the column."
      ]},

      { heading: "Quick Tip", type: "tip",
        content: "Three formulas solve most questions: P = hρg, Upthrust = ρVg, and RD = weight in air ÷ (weight in air − weight in water). For floating objects, always start with: weight = upthrust." }
    ]
  },

  // ==========================================
  // PHYSICS — MEASUREMENT & UNITS
  // ==========================================
  "Measurement & Units": {
    subject: "Physics",
    title: "Measurement & Units — SI Units, Instruments and Errors",
    icon: "📏",
    estimatedTime: "4 min read",
    sections: [
      { heading: "What This Topic Covers", type: "text",
        content: "This topic tests SI base and derived units, prefixes and conversions, scalars and vectors, measuring instruments (vernier calipers, micrometer screw gauge), errors and significant figures. Many questions are straight recall, so learning the tables below earns easy marks." },

      { heading: "The SI Base Units", type: "cards", items: [
        { title: "Length", body: "metre (m)" },
        { title: "Mass", body: "kilogram (kg)" },
        { title: "Time", body: "second (s)" },
        { title: "Electric current", body: "ampere (A)" },
        { title: "Temperature", body: "kelvin (K)" },
        { title: "Amount of substance", body: "mole (mol)" },
        { title: "Luminous intensity", body: "candela (cd)" }
      ]},

      { heading: "Derived Units in Base Units", type: "cards", items: [
        { title: "Newton (force)", body: "N = kg m s⁻²" },
        { title: "Joule (work, energy)", body: "J = N m = kg m² s⁻²" },
        { title: "Watt (power)", body: "W = J/s = kg m² s⁻³" },
        { title: "Pascal (pressure)", body: "Pa = N/m² = kg m⁻¹ s⁻²" },
        { title: "Hertz (frequency)", body: "Hz = s⁻¹" },
        { title: "Coulomb (charge)", body: "C = A s" },
        { title: "Velocity and acceleration", body: "Velocity = m s⁻¹. Acceleration = m s⁻²." }
      ]},

      { heading: "Prefixes and Conversions", type: "cards", items: [
        { title: "Large prefixes", body: "kilo (k) = 10³. mega (M) = 10⁶. giga (G) = 10⁹." },
        { title: "Small prefixes", body: "centi (c) = 10⁻². milli (m) = 10⁻³. micro (μ) = 10⁻⁶. nano (n) = 10⁻⁹." },
        { title: "Speed conversion", body: "km/h to m/s: divide by 3.6. So 72 km/h = 20 m/s." },
        { title: "Volume conversion", body: "1 cm³ = 10⁻⁶ m³. 1 litre = 1000 cm³ = 10⁻³ m³." },
        { title: "Density conversion", body: "1 g/cm³ = 1000 kg/m³." }
      ]},

      { heading: "Scalars and Vectors", type: "cards", items: [
        { title: "Scalar", body: "Magnitude only. Examples: mass, speed, distance, time, energy, temperature, power, work." },
        { title: "Vector", body: "Magnitude AND direction. Examples: velocity, displacement, acceleration, force, momentum, weight." },
        { title: "Common trap", body: "Speed is a scalar but velocity is a vector. Distance is a scalar but displacement is a vector. Work and energy are scalars even though they come from force." }
      ]},

      { heading: "Vernier Calipers", type: "steps", items: [
        "Read the main scale just BEFORE the zero of the vernier scale. Example: 2.3 cm.",
        "Find the vernier division that lines up exactly with any main-scale division. Example: the 4th division.",
        "Least count is usually 0.01 cm, so the vernier contributes 4 × 0.01 = 0.04 cm.",
        "Reading = 2.3 + 0.04 = 2.34 cm.",
        "Correct for zero error if there is one."
      ]},

      { heading: "Micrometer Screw Gauge", type: "steps", items: [
        "Read the sleeve (main) scale. Example: 5.5 mm.",
        "Read the thimble scale at the reference line. Example: 28 divisions.",
        "Least count is usually 0.01 mm, so thimble = 28 × 0.01 = 0.28 mm.",
        "Reading = 5.5 + 0.28 = 5.78 mm.",
        "Correct for zero error. A micrometer is more precise than vernier calipers."
      ]},

      { heading: "Errors", type: "cards", items: [
        { title: "Systematic error", body: "Same error every time in the same direction. Examples: zero error, a wrongly calibrated instrument." },
        { title: "Random error", body: "Varies unpredictably. Reduced by REPEATING the measurement and taking the average." },
        { title: "Parallax error", body: "Reading a scale from the wrong angle. Avoid it by placing your eye directly in line with the mark." },
        { title: "Zero error correction", body: "True reading = observed reading − zero error. If the gauge reads +0.02 mm with nothing in it, SUBTRACT 0.02 mm. A negative zero error is ADDED." },
        { title: "Accuracy vs precision", body: "Accuracy = closeness to the true value. Precision = closeness of repeated readings to each other." }
      ]},

      { heading: "Watch Out!", type: "warning", items: [
        "The kilogram, not the gram, is the SI base unit of mass.",
        "Energy and work are scalars. Weight is a vector (it is a force).",
        "Zero error: subtract a positive zero error, add a negative one.",
        "Convert units BEFORE substituting into formulas (cm to m, g to kg, km/h to m/s).",
        "Time, mass and length are fundamental quantities. Force, pressure and energy are derived."
      ]},

      { heading: "Quick Tip", type: "tip",
        content: "Memorise these three: N = kg m s⁻², J = kg m² s⁻², W = kg m² s⁻³. Most unit and dimension questions reduce to them. For speeds, km/h ÷ 3.6 = m/s." }
    ]
  },

  // ==========================================
  // PHYSICS — MOMENTS & MACHINES
  // ==========================================
  "Moments & Machines": {
    subject: "Physics",
    title: "Moments & Machines — Equilibrium, Levers and Efficiency",
    icon: "⚖️",
    estimatedTime: "4 min read",
    sections: [
      { heading: "What This Topic Covers", type: "text",
        content: "This topic covers the moment of a force, the principle of moments, conditions for equilibrium, centre of gravity, levers, and simple machines (pulleys, inclined plane, wheel and axle, screw jack) with mechanical advantage, velocity ratio and efficiency." },

      { heading: "Moments", type: "cards", items: [
        { title: "Moment of a force", body: "Moment = Force × PERPENDICULAR distance from the pivot. Unit: N m." },
        { title: "Principle of moments", body: "For a body in equilibrium: sum of CLOCKWISE moments = sum of ANTICLOCKWISE moments about any point." },
        { title: "Two conditions for equilibrium", body: "(1) Resultant force is zero, so the forces balance. (2) Resultant moment about any point is zero." },
        { title: "Couple", body: "Two equal, opposite, parallel forces that do not share a line. Moment of a couple = one force × the perpendicular distance between them. It causes pure rotation." },
        { title: "Centre of gravity", body: "The point where the whole weight of a body appears to act. A body is stable if its centre of gravity is LOW and its base is WIDE." }
      ]},

      { heading: "Principle of Moments — Worked Example", type: "steps", items: [
        "A uniform seesaw is balanced at its centre. A 40 N weight sits 3 m to the left of the pivot. Where must a 60 N weight sit to balance it on the right?",
        "Anticlockwise moment = 40 × 3 = 120 N m.",
        "Clockwise moment = 60 × d.",
        "At balance: 60d = 120, so d = 2 m.",
        "Answer: 2 m to the right of the pivot."
      ]},

      { heading: "Types of Lever", type: "cards", items: [
        { title: "First class", body: "FULCRUM in the middle. Examples: seesaw, scissors, crowbar, pliers." },
        { title: "Second class", body: "LOAD in the middle. Examples: wheelbarrow, nutcracker, bottle opener." },
        { title: "Third class", body: "EFFORT in the middle. Examples: human forearm, tweezers, fishing rod." },
        { title: "Memory aid", body: "The thing in the MIDDLE names the class: Fulcrum = 1st, Load = 2nd, Effort = 3rd." }
      ]},

      { heading: "Key Machine Formulas", type: "cards", items: [
        { title: "Mechanical Advantage (MA)", body: "MA = Load ÷ Effort. It has no unit." },
        { title: "Velocity Ratio (VR)", body: "VR = distance moved by effort ÷ distance moved by load. Fixed by the design of the machine." },
        { title: "Efficiency", body: "Efficiency = (MA ÷ VR) × 100% = (work output ÷ work input) × 100%." },
        { title: "Efficiency is always below 100%", body: "Friction and the weight of moving parts waste energy, so MA is always less than VR in a real machine." },
        { title: "Link between them", body: "MA = Efficiency × VR (with efficiency as a fraction)." }
      ]},

      { heading: "VR of Common Machines", type: "cards", items: [
        { title: "Pulley system", body: "VR = number of rope sections supporting the movable block (the load)." },
        { title: "Inclined plane", body: "VR = length of slope ÷ height = 1 ÷ sinθ." },
        { title: "Wheel and axle", body: "VR = radius of wheel ÷ radius of axle." },
        { title: "Screw jack", body: "VR = circumference of the handle circle (2πr) ÷ pitch of the screw." },
        { title: "Gears", body: "VR = number of teeth on the driven gear ÷ number of teeth on the driving gear." }
      ]},

      { heading: "Inclined Plane — Worked Example", type: "steps", items: [
        "A ramp is 5 m long and 1 m high. An effort of 40 N pulls a 150 N load up the slope.",
        "VR = length ÷ height = 5 ÷ 1 = 5.",
        "MA = load ÷ effort = 150 ÷ 40 = 3.75.",
        "Efficiency = (MA ÷ VR) × 100 = (3.75 ÷ 5) × 100 = 75%.",
        "So 25% of the energy is wasted, mostly as friction."
      ]},

      { heading: "Watch Out!", type: "warning", items: [
        "Use the PERPENDICULAR distance from the pivot, not the slanted length.",
        "MA can be above 1, but it can never be higher than VR.",
        "A machine does not save work. It only changes the size or direction of the force.",
        "For pulleys, count only the ropes holding the MOVABLE block.",
        "Take moments about a point where an unknown force acts. That force then drops out of the equation."
      ]},

      { heading: "Quick Tip", type: "tip",
        content: "For moments: write 'clockwise = anticlockwise' and solve. For machines, remember the trio: MA = L/E, VR = distance ratio, Efficiency = MA/VR × 100. If a question gives efficiency and VR, find MA first, then find load or effort." }
    ]
  },

  // ==========================================
  // PHYSICS — WORK, ENERGY & POWER
  // ==========================================
  "Work, Energy & Power": {
    subject: "Physics",
    title: "Work, Energy & Power — Formulas and Conservation",
    icon: "🔋",
    estimatedTime: "4 min read",
    sections: [
      { heading: "What This Topic Covers", type: "text",
        content: "Work, energy and power appear in almost every Physics paper. Learn the definitions and formulas, the conservation of energy, the work-energy relationship, energy conversions, and how to calculate power and electrical energy cost." },

      { heading: "Key Formulas", type: "cards", items: [
        { title: "Work", body: "W = F × d × cosθ, where θ is the angle between the force and the direction of movement. Unit: joule (J)." },
        { title: "Kinetic energy", body: "KE = ½mv². Energy of motion." },
        { title: "Gravitational potential energy", body: "PE = mgh. Energy of position." },
        { title: "Power", body: "P = W ÷ t = F × v. Unit: watt (W) = 1 J/s." },
        { title: "Efficiency", body: "Efficiency = (useful energy output ÷ total energy input) × 100%." },
        { title: "Work-energy theorem", body: "Net work done on a body = change in its kinetic energy." }
      ]},

      { heading: "When is Work Done?", type: "cards", items: [
        { title: "Force along the motion (θ = 0°)", body: "W = Fd. Maximum work." },
        { title: "Force at an angle", body: "10 N at 60° to the horizontal moving a body 4 m: W = 10 × 4 × cos60° = 20 J." },
        { title: "Force perpendicular to motion (θ = 90°)", body: "ZERO work. Examples: carrying a bag horizontally, the centripetal force in circular motion." },
        { title: "No movement", body: "Pushing a wall that does not move = zero work." }
      ]},

      { heading: "Conservation of Energy — Worked Example", type: "steps", items: [
        "A 2 kg object is dropped from a height of 5 m. Find its speed just before landing. (g = 10 m/s²)",
        "Loss in PE = mgh = 2 × 10 × 5 = 100 J.",
        "This becomes KE: ½mv² = 100, so ½ × 2 × v² = 100.",
        "v² = 100, so v = 10 m/s.",
        "Shortcut: v = √(2gh) = √(2 × 10 × 5) = 10 m/s. Mass does not matter."
      ]},

      { heading: "Power — Worked Example", type: "steps", items: [
        "A motor lifts a 200 kg load through 15 m in 30 s. (g = 10 m/s²)",
        "Work done = mgh = 200 × 10 × 15 = 30,000 J.",
        "Power = W ÷ t = 30,000 ÷ 30 = 1000 W = 1 kW.",
        "If the motor is 80% efficient, input power = 1000 ÷ 0.8 = 1250 W."
      ]},

      { heading: "Work-Energy Theorem — Worked Example", type: "steps", items: [
        "A 1000 kg car speeds up from 20 m/s to 30 m/s. Find the work done by the engine (ignore friction).",
        "Work = change in KE = ½m(v² − u²).",
        "= ½ × 1000 × (900 − 400) = 500 × 500.",
        "= 250,000 J = 250 kJ."
      ]},

      { heading: "Energy Conversions and Units", type: "cards", items: [
        { title: "Common conversions", body: "Hydroelectric dam: PE to KE to electrical. Battery: chemical to electrical. Solar cell: light to electrical. Car engine: chemical to heat to KE. Microphone: sound to electrical." },
        { title: "Pendulum", body: "At the highest point: maximum PE, zero KE. At the lowest point: maximum KE, minimum PE. Total energy stays constant (ignoring air resistance)." },
        { title: "Kilowatt-hour (kWh)", body: "A unit of energy. 1 kWh = 3.6 × 10⁶ J." },
        { title: "Electricity cost", body: "Energy (kWh) = power (kW) × time (h). Cost = energy × price per kWh." },
        { title: "Horsepower", body: "1 hp is about 746 W." }
      ]},

      { heading: "Renewable and Non-Renewable Energy", type: "cards", items: [
        { title: "Renewable", body: "Solar, wind, hydro, tidal, geothermal, biomass (if replanted). They are replaced naturally." },
        { title: "Non-renewable", body: "Coal, petroleum, natural gas, nuclear fuel (uranium). They are used up faster than they form." }
      ]},

      { heading: "Watch Out!", type: "warning", items: [
        "No work is done if the force is perpendicular to the motion.",
        "Power is the RATE of doing work, not the work itself.",
        "Mass cancels out in free-fall speed: v = √(2gh).",
        "Energy is never destroyed. 'Lost' energy is converted to heat and sound.",
        "Kinetic energy depends on v², so doubling speed gives FOUR times the KE."
      ]},

      { heading: "Quick Tip", type: "tip",
        content: "Whenever a question has a height and a speed, think 'mgh = ½mv²'. Mass cancels, so v = √(2gh). For power questions, find the work first (usually mgh), then divide by time. Remember 1 kWh = 3.6 × 10⁶ J." }
    ]
  },

  // ==========================================
  // PHYSICS — KINETIC THEORY & GASES
  // ==========================================
  "Kinetic Theory & Gases": {
    subject: "Physics",
    title: "Kinetic Theory & Gases — Gas Laws and Molecular Motion",
    icon: "🎈",
    estimatedTime: "4 min read",
    sections: [
      { heading: "What This Topic Covers", type: "text",
        content: "Kinetic theory explains the behaviour of matter in terms of moving particles. For gases, you must know the assumptions of the theory, Boyle's law, Charles' law, the pressure law, the combined gas equation and the ideal gas equation. The golden rule: ALWAYS convert temperature to kelvin." },

      { heading: "Assumptions of the Kinetic Theory of Gases", type: "cards", items: [
        { title: "Particles", body: "A gas is made of a very large number of tiny molecules in constant, random motion." },
        { title: "Collisions", body: "Collisions between molecules and with the walls are perfectly ELASTIC, so no kinetic energy is lost." },
        { title: "Forces", body: "There are no forces between molecules except during collisions." },
        { title: "Volume", body: "The volume of the molecules themselves is negligible compared with the volume of the container." },
        { title: "Pressure", body: "Gas pressure is caused by molecules colliding with the walls of the container." },
        { title: "Temperature", body: "The average kinetic energy of the molecules is proportional to the absolute (kelvin) temperature." }
      ]},

      { heading: "The Gas Laws", type: "cards", items: [
        { title: "Boyle's law (constant temperature)", body: "P₁V₁ = P₂V₂. Pressure is INVERSELY proportional to volume." },
        { title: "Charles' law (constant pressure)", body: "V₁/T₁ = V₂/T₂. Volume is directly proportional to KELVIN temperature." },
        { title: "Pressure law (constant volume)", body: "P₁/T₁ = P₂/T₂. Pressure is directly proportional to KELVIN temperature." },
        { title: "Combined gas law", body: "P₁V₁/T₁ = P₂V₂/T₂. Use it when pressure, volume and temperature all change." },
        { title: "Ideal gas equation", body: "PV = nRT. n = moles, R = 8.31 J/mol/K, T in kelvin, P in Pa, V in m³." },
        { title: "Kelvin conversion", body: "T(K) = T(°C) + 273. Absolute zero = 0 K = −273°C." },
        { title: "STP", body: "Standard temperature and pressure: 273 K (0°C) and 1 atm (760 mmHg). One mole of any gas occupies 22.4 dm³ at STP." }
      ]},

      { heading: "Boyle's Law — Worked Example", type: "steps", items: [
        "A gas occupies 600 cm³ at a pressure of 2 atm. The temperature stays constant. What is its volume at 4 atm?",
        "P₁V₁ = P₂V₂, so 2 × 600 = 4 × V₂.",
        "V₂ = 1200 ÷ 4 = 300 cm³.",
        "Doubling the pressure halved the volume."
      ]},

      { heading: "Charles' Law — Worked Example", type: "steps", items: [
        "200 cm³ of gas at 300 K is heated at constant pressure to 450 K. Find the new volume.",
        "V₁/T₁ = V₂/T₂, so 200/300 = V₂/450.",
        "V₂ = 200 × 450 ÷ 300 = 300 cm³."
      ]},

      { heading: "Pressure Law — Worked Example", type: "steps", items: [
        "A sealed container holds gas at 1 atm and 27°C. It is heated to 127°C. Find the new pressure.",
        "Convert: T₁ = 27 + 273 = 300 K. T₂ = 127 + 273 = 400 K.",
        "P₁/T₁ = P₂/T₂, so 1/300 = P₂/400.",
        "P₂ = 400 ÷ 300 = 1.33 atm.",
        "Using 27 and 127 directly would give the wrong answer. Always use kelvin."
      ]},

      { heading: "Other Key Ideas", type: "cards", items: [
        { title: "Brownian motion", body: "Random zig-zag movement of smoke or pollen particles, caused by collisions with fast-moving air or water molecules. It is evidence that molecules exist and move." },
        { title: "Diffusion", body: "Spreading of one gas through another. Lighter gases diffuse FASTER. Diffusion is faster at higher temperature." },
        { title: "Effect of heating a gas", body: "At constant volume, molecules move faster, hit the walls harder and more often, so pressure rises." },
        { title: "Real vs ideal gases", body: "Real gases behave most like ideal gases at HIGH temperature and LOW pressure." },
        { title: "Effect of compressing a gas", body: "At constant temperature, smaller volume means more collisions per second with the walls, so pressure rises. Average KE does not change." }
      ]},

      { heading: "Watch Out!", type: "warning", items: [
        "ALWAYS convert °C to kelvin before using Charles' law, the pressure law or the combined gas law.",
        "Boyle's law is the only one that does not need kelvin (temperature is constant).",
        "Average kinetic energy depends ONLY on temperature, not on pressure or volume.",
        "Gas pressure comes from molecules hitting the walls, not from molecules hitting each other.",
        "In PV = nRT, use SI units: Pa and m³ (1 m³ = 1000 dm³)."
      ]},

      { heading: "Quick Tip", type: "tip",
        content: "Identify which quantity is held constant. Temperature constant: Boyle (PV). Pressure constant: Charles (V/T). Volume constant: pressure law (P/T). If all three change, use P₁V₁/T₁ = P₂V₂/T₂. Convert to kelvin every time you see a temperature." }
    ]
  },

  // ==========================================
  // PHYSICS — MODERN PHYSICS
  // ==========================================
  "Modern Physics": {
    subject: "Physics",
    title: "Modern Physics — Photons, Atoms and Radioactivity",
    icon: "⚛️",
    estimatedTime: "5 min read",
    sections: [
      { heading: "What This Topic Covers", type: "text",
        content: "Modern physics covers the photoelectric effect and photons, atomic models, X-rays, radioactivity and half-life, nuclear equations, and fission and fusion. Expect both theory and short calculations." },

      { heading: "Photons and the Photoelectric Effect", type: "cards", items: [
        { title: "Photon energy", body: "E = hf = hc/λ. h = 6.6 × 10⁻³⁴ J s (Planck's constant). c = 3 × 10⁸ m/s." },
        { title: "Photoelectric effect", body: "Light of high enough frequency shining on a metal ejects electrons." },
        { title: "Threshold frequency (f₀)", body: "Minimum frequency that can eject electrons. Below it, NO electrons are emitted, however bright the light." },
        { title: "Work function (φ)", body: "Minimum energy needed to free an electron from the metal. φ = hf₀." },
        { title: "Einstein's equation", body: "hf = φ + KE(max). The extra energy above the work function becomes the electron's kinetic energy." },
        { title: "Intensity vs frequency", body: "Higher INTENSITY gives MORE electrons per second. Higher FREQUENCY gives each electron MORE kinetic energy." },
        { title: "Electron-volt", body: "1 eV = 1.6 × 10⁻¹⁹ J. It is the energy gained by an electron through 1 volt." }
      ]},

      { heading: "Photoelectric Effect — Worked Example", type: "steps", items: [
        "Light of frequency 1.0 × 10¹⁵ Hz falls on a metal with work function 3.3 × 10⁻¹⁹ J. (h = 6.6 × 10⁻³⁴ J s)",
        "Photon energy = hf = 6.6 × 10⁻³⁴ × 1.0 × 10¹⁵ = 6.6 × 10⁻¹⁹ J.",
        "KE(max) = hf − φ = 6.6 × 10⁻¹⁹ − 3.3 × 10⁻¹⁹ = 3.3 × 10⁻¹⁹ J.",
        "Threshold frequency f₀ = φ ÷ h = 3.3 × 10⁻¹⁹ ÷ 6.6 × 10⁻³⁴ = 5.0 × 10¹⁴ Hz."
      ]},

      { heading: "Atomic Models and Discoveries", type: "cards", items: [
        { title: "J.J. Thomson", body: "Discovered the ELECTRON (1897) using cathode rays." },
        { title: "Millikan", body: "Measured the charge of the electron: e = 1.6 × 10⁻¹⁹ C (oil drop experiment)." },
        { title: "Rutherford (alpha scattering)", body: "Most alpha particles passed straight through, a few were deflected, very few bounced back. So the atom is mostly empty space, with a tiny, dense, positively charged NUCLEUS." },
        { title: "Chadwick", body: "Discovered the NEUTRON (1932)." },
        { title: "Bohr model", body: "Electrons orbit in fixed energy levels. An electron emits a photon when it FALLS to a lower level and absorbs one when it jumps UP. It explains the line spectrum of hydrogen." },
        { title: "Line spectra", body: "Each element emits only certain wavelengths, because only certain energy jumps are possible. This is evidence for quantised energy levels." }
      ]},

      { heading: "X-rays", type: "cards", items: [
        { title: "Production", body: "Fast electrons hit a metal target (such as tungsten) and are suddenly stopped." },
        { title: "Nature", body: "High-frequency electromagnetic waves. They have no charge, so they are NOT deflected by electric or magnetic fields." },
        { title: "Uses", body: "Medical imaging, security scanning, checking welds, studying crystal structure." },
        { title: "Discovered by", body: "Wilhelm Röntgen (1895)." }
      ]},

      { heading: "Radioactivity", type: "cards", items: [
        { title: "Alpha (α)", body: "Helium nucleus: 2 protons + 2 neutrons. Positive. Most ionising, least penetrating. Stopped by paper." },
        { title: "Beta (β)", body: "Fast electron from the nucleus. Negative. Stopped by a few mm of aluminium." },
        { title: "Gamma (γ)", body: "High-energy electromagnetic wave. No charge, so not deflected by fields. Least ionising, most penetrating. Reduced by thick lead." },
        { title: "Discovered by", body: "Henri Becquerel (1896)." },
        { title: "Detectors", body: "Geiger-Müller tube, cloud chamber, scintillation counter." }
      ]},

      { heading: "Half-Life — Worked Example", type: "steps", items: [
        "A sample of 80 g has a half-life of 6 days. How much remains after 18 days?",
        "Number of half-lives = 18 ÷ 6 = 3.",
        "80 → 40 → 20 → 10.",
        "Mass remaining = 10 g.",
        "Formula check: N = N₀ × (½)ⁿ = 80 × (1/8) = 10 g."
      ]},

      { heading: "Nuclear Equations", type: "steps", items: [
        "The rule: the top numbers (mass number) AND the bottom numbers (atomic number) must each balance.",
        "Alpha decay: mass number drops by 4, atomic number drops by 2.",
        "Example: ²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He. Top: 238 = 234 + 4 ✓. Bottom: 92 = 90 + 2 ✓.",
        "Beta decay: mass number unchanged, atomic number goes UP by 1.",
        "Example: ¹⁴₆C → ¹⁴₇N + ⁰₋₁e. Top: 14 = 14 + 0 ✓. Bottom: 6 = 7 − 1 ✓.",
        "Gamma emission changes neither number."
      ]},

      { heading: "Fission, Fusion and Mass-Energy", type: "cards", items: [
        { title: "Fission", body: "A heavy nucleus (uranium-235) splits into two lighter nuclei plus neutrons, releasing energy. Used in nuclear power stations and atomic bombs. A chain reaction is controlled with control rods." },
        { title: "Fusion", body: "Two light nuclei (hydrogen isotopes) join to form a heavier nucleus, releasing energy. It powers the Sun and needs extremely high temperatures." },
        { title: "Mass defect", body: "The mass of a nucleus is slightly LESS than the total mass of its separate particles. The missing mass becomes binding energy." },
        { title: "Einstein's equation", body: "E = mc². A small amount of mass converts to a very large amount of energy." }
      ]},

      { heading: "Watch Out!", type: "warning", items: [
        "Brighter light does NOT increase the kinetic energy of photoelectrons. Only higher FREQUENCY does.",
        "Below the threshold frequency, no electrons are emitted at all, even with very intense light.",
        "Gamma rays and X-rays are NOT deflected by electric or magnetic fields.",
        "Alpha is the most ionising but the least penetrating. Gamma is the opposite.",
        "In beta decay the atomic number goes UP by 1 because a neutron changes into a proton.",
        "Half-life does not depend on the amount of sample, temperature or pressure."
      ]},

      { heading: "Quick Tip", type: "tip",
        content: "Remember two equations: E = hf and hf = φ + KE(max). For decay questions, balance the top numbers and bottom numbers separately. For half-life, just keep halving: write the chain 80 → 40 → 20 → 10 and count the steps." }
    ]
  },

}

export default PHYSICS_EXTRA_GUIDES
