const Restriction = require('hacktiv8-restriction')
const { meleeRangedGrouping, splitting } = require('../2')

describe('Melee Range Challenge', () => {
  it('should correctly returning value from splitting function (50)', () => {
    const input1 = 'Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'
    const input2 = 'Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'
    const input3 = ''
    const input4 = 'QOP-Ranged,Anti Mage-Melee'

    expect(splitting(input1).sort()).toEqual(['Razor-Ranged', 'Meepo-Melee', 'Invoker-Ranged', 'Axe-Melee', 'Sniper-Ranged'].sort())
    expect(splitting(input2).sort()).toEqual(['Drow Ranger-Ranged', 'Chen-Ranged', 'Dazzle-Ranged', 'Io-Ranged'].sort())
    expect(splitting(input3).sort()).toEqual([])
    expect(splitting(input4).sort()).toEqual(['QOP-Ranged', 'Anti Mage-Melee'].sort())
  })

  it('should correctly returning value from meleeRangedGrouping function (50)', () => {
    const input1 = 'Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'
    const input2 = 'Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'
    const input3 = ''
    const input4 = 'QOP-Ranged,Anti Mage-Melee'

    expect(meleeRangedGrouping(input1).sort()).toEqual([['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe']].sort())
    expect(meleeRangedGrouping(input2).sort()).toEqual([['Drow Ranger', 'Chen', 'Dazzle', 'Io'], []].sort())
    expect(meleeRangedGrouping(input3).sort()).toEqual([])
    expect(meleeRangedGrouping(input4).sort()).toEqual([['QOP'], ['Anti Mage']].sort())
  })

  it('should check restriction rules (-30)', async () => {
    const checkRestriction = new Restriction('../2.js');
    checkRestriction.rules = ['match', 'split', 'concat'];
    const restrictedUse = await checkRestriction.readCode();
    expect(restrictedUse).toBe(null);
  })
})