// ============================================================
// Arts, Law & Humanities — Master Question Bank Index
// UNIBEN Post-UTME Past Papers 2005–2020
// 824 total questions across 6 subjects
// ============================================================

import arts2005Questions from './arts_2005_2006.js'
import arts2006Questions from './arts_2006_2007.js'
import arts2007Questions from './arts_2007_2008.js'
import arts2008Questions from './arts_2008_2009.js'
import arts2009Questions from './arts_2009_2010.js'
import arts2010Questions from './arts_2010_2011.js'
import arts2011Questions from './arts_2011_2012.js'
import arts2012Questions from './arts_2012_2013.js'
import arts2014Questions from './arts_2014_2015.js'
import arts2018Questions from './arts_2018_2019.js'
import arts2019Questions from './arts_2019_2020.js'

const allArtsQuestions = [
  ...arts2005Questions,
  ...arts2006Questions,
  ...arts2007Questions,
  ...arts2008Questions,
  ...arts2009Questions,
  ...arts2010Questions,
  ...arts2011Questions,
  ...arts2012Questions,
  ...arts2014Questions,
  ...arts2018Questions,
  ...arts2019Questions,
]

// ── Filter helpers ──────────────────────────────────────────
export const getByYear = (year) =>
  allArtsQuestions.filter(q => q.year === year)

export const getBySubject = (subject) =>
  allArtsQuestions.filter(q => q.subject === subject)

export const getByTopic = (topic) =>
  allArtsQuestions.filter(q => q.topic === topic)

export const getByYearAndSubject = (year, subject) =>
  allArtsQuestions.filter(q => q.year === year && q.subject === subject)

// ── Stats ───────────────────────────────────────────────────
export const questionStats = {
  total: allArtsQuestions.length,  // 824
  byYear: {
    2005: arts2005Questions.length,  // 104
    2006: arts2006Questions.length,  // 90
    2007: arts2007Questions.length,  // 45
    2008: arts2008Questions.length,  // 70
    2009: arts2009Questions.length,  // 75
    2010: arts2010Questions.length,  // 70
    2011: arts2011Questions.length,  // 80
    2012: arts2012Questions.length,  // 80
    2014: arts2014Questions.length,  // 120
    2018: arts2018Questions.length,  // 40
    2019: arts2019Questions.length,  // 50
  },
  bySubject: {
    English:     allArtsQuestions.filter(q => q.subject === 'English').length,     // 331
    Literature:  allArtsQuestions.filter(q => q.subject === 'Literature').length,  // 161
    Government:  allArtsQuestions.filter(q => q.subject === 'Government').length,  // 170
    CRS:         allArtsQuestions.filter(q => q.subject === 'CRS').length,         // 100
    'Visual Arts': allArtsQuestions.filter(q => q.subject === 'Visual Arts').length, // 48
    IRK:         allArtsQuestions.filter(q => q.subject === 'IRK').length,         // 14
  }
}

export default allArtsQuestions
