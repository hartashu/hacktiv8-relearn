/*
========================================================================================================
ABAIKAN BLOCK CODE INI
========================================================================================================
*/
const graduates = require('../1')
const Restriction = require('hacktiv8-restriction')

const sortStudentScoreByClass = students => {
  let temp = { ...students }
  Object.keys(temp).forEach(keys =>
    temp[keys].sort((a, b) => a.name.localeCompare(b.name))
  )
  return temp
}
/*
========================================================================================================
ABAIKAN BLOCK CODE INI
========================================================================================================
*/

/*
========================================================================================================
PASTIKAN SOLUSI YANG DITULIS SESUAI DENGAN SKENARIO DIBAWAH INI
========================================================================================================
*/
describe('Graduates Challenge', () => {
  test('should return requirement output when parameter fill with test case (100)', async () => {
    const result1 = graduates([
      {
        name: 'Dimitri',
        score: 90,
        class: 'foxes'
      },
      {
        name: 'Alexei',
        score: 85,
        class: 'wolves'
      },
      {
        name: 'Sergei',
        score: 74,
        class: 'foxes'
      },
      {
        name: 'Anastasia',
        score: 78,
        class: 'wolves'
      }
    ])

    expect(sortStudentScoreByClass(result1)).toEqual(
      sortStudentScoreByClass({
        foxes: [{ name: 'Dimitri', score: 90 }],
        wolves: [
          { name: 'Alexei', score: 85 },
          { name: 'Anastasia', score: 78 }
        ]
      })
    )

    const result2 = graduates([
      {
        name: 'Alexander',
        score: 100,
        class: 'foxes'
      },
      {
        name: 'Alisa',
        score: 76,
        class: 'wolves'
      },
      {
        name: 'Vladimir',
        score: 92,
        class: 'foxes'
      },
      {
        name: 'Albert',
        score: 71,
        class: 'wolves'
      },
      {
        name: 'Viktor',
        score: 80,
        class: 'tigers'
      }
    ])

    expect(sortStudentScoreByClass(result2)).toEqual(
      sortStudentScoreByClass({
        foxes: [
          { name: 'Alexander', score: 100 },
          { name: 'Vladimir', score: 92 }
        ],
        wolves: [{ name: 'Alisa', score: 76 }],
        tigers: [{ name: 'Viktor', score: 80 }]
      })
    )

    const result3 = graduates([])
    expect(result3).toEqual({})

    const result4 = graduates([
      {
        name: 'Rin',
        score: 100,
        class: 'foxes'
      },
      {
        name: 'Saber',
        score: 80,
        class: 'wolves'
      },
      {
        name: 'Gilgamesh',
        score: 30,
        class: 'foxes'
      },
      {
        name: 'Ishtar',
        score: 50,
        class: 'wolves'
      }
    ])

    expect(sortStudentScoreByClass(result4)).toEqual(
      sortStudentScoreByClass({
        foxes: [{ name: 'Rin', score: 100 }],
        wolves: [{ name: 'Saber', score: 80 }]
      })
    )
  })
  test('should check restriction rules (-30)', async () => {
    const checkRestriction = new Restriction('../1.js')
    checkRestriction.rules = ['match', 'split', 'concat']
    const restrictedUse = await checkRestriction.readCode()
    expect(restrictedUse).toBe(null)
  })
})