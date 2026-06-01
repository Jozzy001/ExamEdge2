import unibenLifeEnglish2005 from "./english/english2005"
import unibenLifeEnglish2006 from "./english/english2006"
import unibenLifeEnglish2009 from "./english/english2009"
import unibenLifeEnglish2010 from "./english/english2010"
import unibenLifeEnglish2011 from "./english/english2011"
import unibenLifeEnglish2021 from "./english/english2021"
import { english2009new } from "../engineering_physical_science/english/english2009new"
import { english2010new } from "../engineering_physical_science/english/english2010new"
import { english2011new } from "../engineering_physical_science/english/english2011new"
import { english2019 } from "../engineering_physical_science/english/english2019"
import { english2022 } from "../engineering_physical_science/english/english2022"

import unibenLifeBiology2006 from "./biology/biology2006"
import unibenLifeBiology2008 from "./biology/biology2008"
import unibenLifeBiology2010 from "./biology/biology2010"
import unibenLifeBiology2011 from "./biology/biology2011"
import unibenLifeBiology2021 from "./biology/biology2021"
import { biology2015 } from "./biology/biology2015"
import { biology2018 } from "./biology/biology2018"
import { biology2019 } from "./biology/biology2019"
import { biology2022 } from "./biology/biology2022"
import { biology2023 } from "./biology/biology2023"
import { biology2024 } from "./biology/biology2024"

import unibenLifeChem2005 from "./chemistry/chem2005"
import unibenLifeChem2006 from "./chemistry/chem2006"
import unibenLifeChem2008 from "./chemistry/chem2008"
import unibenLifeChem2009 from "./chemistry/chem2009"
import unibenLifeChem2010 from "./chemistry/chem2010"
import unibenLifeChem2011 from "./chemistry/chem2011"
import unibenLifeChem2021 from "./chemistry/chem2021"
import { chem2018 } from "../engineering_physical_science/chemistry/chem2018"
import { chem2019 } from "../engineering_physical_science/chemistry/chem2019"
import { chem2022 } from "../engineering_physical_science/chemistry/chem2022"

import unibenLifePhysics2006 from "./physics/physics2006"
import unibenLifePhysics2008 from "./physics/physics2008"
import unibenLifePhysics2009 from "./physics/physics2009"
import unibenLifePhysics2010 from "./physics/physics2010"
import unibenLifePhysics2011 from "./physics/physics2011"
import unibenLifePhysics2021 from "./physics/physics2021"
import { physics2018 } from "../engineering_physical_science/physics/physics2018"
import { physics2019 } from "../engineering_physical_science/physics/physics2019"

import unibenLifeMaths2010 from "./mathematics/maths2010"
import unibenLifeMaths2011 from "./mathematics/maths2011"
import unibenLifeMaths2021 from "./mathematics/maths2021"
import { maths2013 } from "../engineering_physical_science/mathematics/maths2013"
import { maths2019 } from "../engineering_physical_science/mathematics/maths2019"
import { maths2022 } from "../engineering_physical_science/mathematics/maths2022"

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
  ...flattenPassages(unibenLifeEnglish2005), ...flattenPassages(unibenLifeEnglish2006),
  ...flattenPassages(unibenLifeEnglish2009), ...flattenPassages(unibenLifeEnglish2010),
  ...flattenPassages(unibenLifeEnglish2011), ...flattenPassages(unibenLifeEnglish2021),
  ...flattenPassages(english2009new), ...flattenPassages(english2010new),
  ...flattenPassages(english2011new), ...flattenPassages(english2019),
  ...flattenPassages(english2022),

  ...unibenLifeBiology2006, ...unibenLifeBiology2008,
  ...unibenLifeBiology2010, ...unibenLifeBiology2011, ...unibenLifeBiology2021,
  ...biology2015, ...biology2018, ...biology2019,
  ...biology2022, ...biology2023, ...biology2024,

  ...unibenLifeChem2005, ...flattenPassages(unibenLifeChem2006),
  ...unibenLifeChem2008, ...unibenLifeChem2009, ...unibenLifeChem2010,
  ...unibenLifeChem2011, ...unibenLifeChem2021,
  ...chem2018, ...chem2019, ...chem2022,

  ...unibenLifePhysics2006, ...unibenLifePhysics2008, ...unibenLifePhysics2009,
  ...unibenLifePhysics2010, ...unibenLifePhysics2011, ...unibenLifePhysics2021,
  ...physics2018, ...physics2019,

  ...unibenLifeMaths2010, ...unibenLifeMaths2011, ...unibenLifeMaths2021,
  ...maths2013, ...maths2019, ...maths2022,
]

export default allQuestions
