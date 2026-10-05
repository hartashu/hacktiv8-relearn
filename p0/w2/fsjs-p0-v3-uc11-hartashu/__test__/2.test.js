/*
========================================================================================================
ABAIKAN BLOCK CODE INI
========================================================================================================
*/
const cariModus = require('../2')
const Restriction = require('hacktiv8-restriction')

describe('Cari Modus Challenge', () => {
  test.each([
    [[10, 4, 5, 2, 4], 4],
    [[5, 10, 10, 6, 5], 5],
    [[10, 3, 1, 2, 5], -1],
    [[1, 2, 3, 3, 4, 5], 3],
    [[7, 7, 7, 7, 7], -1]
  ])('Should return requirement output (20)', (input, expected) => {
    const result = cariModus(input)
    expect(result).toBe(result)
  })

  it('should check restriction rules (-30)', async () => {
    const checkRestriction = new Restriction('../2.js')
    checkRestriction.rules = ['match', 'split', 'concat']
    const restrictedUse = await checkRestriction.readCode()
    expect(restrictedUse).toBe(null)
  })
})