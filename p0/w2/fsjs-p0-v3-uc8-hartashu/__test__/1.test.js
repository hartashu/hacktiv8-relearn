const deepSum = require('../1')
const Restriction = require('hacktiv8-restriction')

describe('Deep Sum', () => {
  it('Should return requirement output when parameter fill with example (100)', () => {
    const result1 = deepSum([
      [
        [4, 5, 6],
        [9, 1, 2, 10],
        [9, 4, 3]
      ],
      [
        [4, 14, 31],
        [9, 10, 18, 12, 20],
        [1, 4, 90]
      ],
      [
        [2, 5, 10],
        [3, 4, 5],
        [2, 4, 5, 10]
      ]
    ])

    expect(typeof result1).toBe('number')
    expect(result1).toBe(316)

    const result2 = deepSum([
      [[20, 10], [15], [1, 1]],
      [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [2], [9, 11]],
      [[3, 5, 1], [1, 5, 3], [1]],
      [[2]]
    ])

    expect(typeof result2).toBe('number')
    expect(result2).toBe(156)

    const result3 = deepSum([])

    expect(typeof result3).toBe('string')
    expect(result3).toMatch(/no number/i)

    const result4 = deepSum([
      [[20, 10], [15], [1, 1]],
      [[1, 2, 3, 9, 10, 11], [2], [9, 11]],
      [[2]]
    ])

    expect(typeof result4).toBe('number')
    expect(result4).toBe(107)
  })
  it('should check restriction rules (-30)', async () => {
    const checkRestriction = new Restriction('../1.js');
    checkRestriction.rules = ['match', 'split', 'concat'];
    const restrictedUse = await checkRestriction.readCode();
    expect(restrictedUse).toBe(null);
  })
})