/*
========================================================================================================
PASTIKAN SOLUSI YANG DITULIS SESUAI DENGAN SKENARIO DIBAWAH INI
========================================================================================================
*/
const angkaPrima = require('../1')
const Restriction = require('hacktiv8-restriction')

describe('Angka Prima Challenge', () => {
  test.each([
    [3, true],
    [7, true],
    [6, false],
    [23, true],
    [33, false]
  ])('Should return requirement output (20)', (input, expected) => {
    const result = angkaPrima(input)
    expect(result).toBe(expected)
  })

  it('should check restriction rules (-30)', async () => {
    const checkRestriction = new Restriction('../1.js')
    checkRestriction.rules = ['match', 'split', 'concat']
    const restrictedUse = await checkRestriction.readCode()
    expect(restrictedUse).toBe(null)
  })
})