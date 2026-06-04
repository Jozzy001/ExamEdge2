// Old files use default exports with their own variable names
import unibenEnglish2005 from "./english/english2005"
import unibenEnglish2006 from "./english/english2006"
import unibenEnglish2007 from "./english/english2007"
import unibenEnglish2008 from "./english/english2008"
import unibenEnglish2009 from "./english/english2009"
import unibenEnglish2010 from "./english/english2010"
import unibenEnglish2011 from "./english/english2011"
import unibenEnglish2012 from "./english/english2012"
import unibenEnglish2018 from "./english/english2018"
import unibenEnglish2020 from "./english/english2020"
// New files use named exports
import { english2009new } from "./english/english2009new"
import { english2010new } from "./english/english2010new"
import { english2011new } from "./english/english2011new"
import { english2012new } from "./english/english2012new"
import { english2013 } from "./english/english2013"
import { english2014 } from "./english/english2014"
import { english2015 } from "./english/english2015"
import { english2017 } from "./english/english2017"
import { english2019 } from "./english/english2019"
import { english2022 } from "./english/english2022"
import { english2024 } from "./english/english2024"

import unibenMaths2005 from "./mathematics/maths2005"
import unibenMathematics2006 from "./mathematics/maths2006"
import unibenMathematics2007 from "./mathematics/maths2007"
import unibenMaths2008 from "./mathematics/maths2008"
import unibenMaths2009 from "./mathematics/maths2009"
import unibenMaths2010 from "./mathematics/maths2010"
import unibenMaths2011 from "./mathematics/maths2011"
import unibenMaths2012 from "./mathematics/maths2012"
import unibenMaths2014 from "./mathematics/maths2014"
import unibenMaths2017 from "./mathematics/maths2017"
import unibenMaths2018 from "./mathematics/maths2018"
import unibenMaths2020 from "./mathematics/maths2020"
import { maths2010new } from "./mathematics/maths2010new"
import { maths2011new } from "./mathematics/maths2011new"
import { maths2013 } from "./mathematics/maths2013"
import { maths2019 } from "./mathematics/maths2019"
import { maths2022 } from "./mathematics/maths2022"
import { maths2023 } from "./mathematics/maths2023"
import { maths2024 } from "./mathematics/maths2024"

import unibenPhysics2005 from "./physics/physics2005"
import unibenPhysics2006 from "./physics/physics2006"
import unibenPhysics2007 from "./physics/physics2007"
import unibenPhysics2008 from "./physics/physics2008"
import unibenPhysics2009 from "./physics/physics2009"
import unibenPhysics2010 from "./physics/physics2010"
import unibenPhysics2011 from "./physics/physics2011"
import unibenPhysics2012 from "./physics/physics2012"
import unibenPhysics2014 from "./physics/physics2014"
import unibenPhysics2017 from "./physics/physics2017"
import unibenPhysics2020 from "./physics/physics2020"
import { physics2018 } from "./physics/physics2018"
import { physics2019 } from "./physics/physics2019"
import { physics2023 } from "./physics/physics2023"
import { physics2024 } from "./physics/physics2024"

import unibenChem2005 from "./chemistry/chem2005"
import unibenChemistry2006 from "./chemistry/chem2006"
import unibenChem2007 from "./chemistry/chem2007"
import unibenChem2008 from "./chemistry/chem2008"
import unibenChem2009 from "./chemistry/chem2009"
import unibenChem2010 from "./chemistry/chem2010"
import unibenChem2011 from "./chemistry/chem2011"
import unibenChem2012 from "./chemistry/chem2012"
import unibenChem2014 from "./chemistry/chem2014"
import unibenChem2017 from "./chemistry/chem2017"
import unibenChem2020 from "./chemistry/chem2020"
import { chem2018 } from "./chemistry/chem2018"
import { chem2019 } from "./chemistry/chem2019"
import { chem2022 } from "./chemistry/chem2022"
import { chem2023 } from "./chemistry/chem2023"
import { chem2024 } from "./chemistry/chem2024"
import { maths2024extra } from "./mathematics/maths2024_extra"
import { physics2024extra } from "./physics/physics2024_extra"
import { chem2024extra } from "./chemistry/chem2024_extra"
import { englishSentenceInterpExtra } from "../english/english_sentence_interp_extra"
import { chemExtra2 } from "./chemistry/chem_extra2"
import { physicsExtra2 } from "./physics/physics_extra2"
import { mathsExtra2 } from "./mathematics/maths_extra2"


const flattenPassages = (arr) => {
  if (!arr) return []
  const result = []
  arr.forEach(item => {
    if (item.passage && item.questions) {
      item.questions.forEach(q => result.push({ ...q, passage: item.passage }))
    } else {
      result.push(item)
    }
  })
  return result
}

const allQuestions = [
  ...flattenPassages(unibenEnglish2005), ...flattenPassages(unibenEnglish2006),
  ...flattenPassages(unibenEnglish2007), ...flattenPassages(unibenEnglish2008),
  ...flattenPassages(unibenEnglish2009), ...flattenPassages(unibenEnglish2010),
  ...flattenPassages(unibenEnglish2011), ...flattenPassages(unibenEnglish2012),
  ...flattenPassages(unibenEnglish2018), ...flattenPassages(unibenEnglish2020),
  ...flattenPassages(english2009new), ...flattenPassages(english2010new),
  ...flattenPassages(english2011new), ...flattenPassages(english2012new),
  ...flattenPassages(english2013), ...flattenPassages(english2014),
  ...flattenPassages(english2015), ...flattenPassages(english2017),
  ...flattenPassages(english2019), ...flattenPassages(english2022),
  ...flattenPassages(english2024),

  ...unibenMaths2005, ...unibenMathematics2006, ...unibenMathematics2007,
  ...unibenMaths2008, ...unibenMaths2009, ...unibenMaths2010, ...unibenMaths2011,
  ...unibenMaths2012, ...unibenMaths2014, ...unibenMaths2017, ...unibenMaths2018,
  ...unibenMaths2020, ...maths2010new, ...maths2011new, ...maths2013,
  ...maths2019, ...maths2022, ...maths2023, ...maths2024,

  ...unibenPhysics2005, ...unibenPhysics2006, ...unibenPhysics2007,
  ...unibenPhysics2008, ...unibenPhysics2009, ...unibenPhysics2010,
  ...unibenPhysics2011, ...unibenPhysics2012, ...unibenPhysics2014,
  ...unibenPhysics2017, ...unibenPhysics2020,
  ...physics2018, ...physics2019, ...physics2023, ...physics2024,

  ...unibenChem2005, ...unibenChemistry2006, ...unibenChem2007, ...unibenChem2008,
  ...unibenChem2009, ...unibenChem2010, ...unibenChem2011, ...unibenChem2012,
  ...unibenChem2014, ...unibenChem2017, ...unibenChem2020,
  ...chem2018, ...chem2019, ...chem2022, ...chem2023, ...chem2024,
  ...maths2024extra, ...physics2024extra, ...chem2024extra,
  ...englishSentenceInterpExtra,
  ...chemExtra2,
  ...physicsExtra2,
  ...mathsExtra2,
]

export default allQuestions
