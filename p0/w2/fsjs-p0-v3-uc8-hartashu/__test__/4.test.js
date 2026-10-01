const Restriction = require('hacktiv8-restriction')
const urutkanAbjad = require('../4');

describe('urutkan abjad', () => {
  it('should show the order of the letters in a word (100)', () => {
    const result = urutkanAbjad('hello');
    expect(result).toMatch(/ehllo/);

    const result2 = urutkanAbjad('truncate');
    expect(result2).toMatch(/acenrttu/);

    const result3 = urutkanAbjad('developer');
    expect(result3).toMatch(/deeeloprv/);

    const result4 = urutkanAbjad('software');
    expect(result4).toMatch(/aeforstw/);
  });

  it('should check restriction rules (-30)', async () => {
    const checkRestriction = new Restriction('../4.js');
    checkRestriction.rules = ['match', 'split', 'concat', 'pop', 'unshift', 'shift'];
    const restrictedUse = await checkRestriction.readCode();
    expect(restrictedUse).toBe(null);
  })
});