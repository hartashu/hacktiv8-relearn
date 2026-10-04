/*
========================================================================================================
ABAIKAN BLOCK CODE INI
========================================================================================================
*/
const cariMedian = require('../2')
const Restriction = require('hacktiv8-restriction')

describe('Cari Median Challenge', () => {
  test.each([
    [[1, 2, 3, 4, 5], 3],
    [[1, 3, 4, 10, 12, 13], 7],
    [[3, 4, 7, 6, 10], 7],
    [[1, 3, 3], 3],
    [[7, 7, 8, 8], 7.5]
  ])('Should return requirement output (20)', (input, expected) => {
    const result = cariMedian(input)
    expect(result).toBe(expected)
  })

  it('should check restriction rules (-30)', async () => {
    const checkRestriction = new Restriction('../2.js')
    checkRestriction.rules = ['match', 'split', 'concat']
    const restrictedUse = await checkRestriction.readCode()
    expect(restrictedUse).toBe(null)
  })
})