const Restriction = require('hacktiv8-restriction')
const { sorting, sortingByType, sortAllClean } = require('../5');

describe('sorting', () => {
  test('should show sorting of array (30)', () => {
    const result = sorting([2, 4, 6, 8, 2, 3]);
    expect(result).toEqual([2, 2, 3, 4, 6, 8]);
  });

  test('should show sorting of array (30)', () => {
    const result2 = sortingByType([1, 3, 'array', -45, true, false, 'big']);
    expect(result2).toEqual([[-45, 1, 3], ['array', 'big'], [false, true]]);
  });

  test('should show sorting of array (40)', () => {
    const result3 = sortAllClean([undefined, null, 456, 'def', NaN, [], true, 123, 'bcd', false]);
    expect(result3).toEqual([[123, 456], ['bcd', 'def'], [false, true]]);

    const result4 = sortAllClean([NaN, undefined]);
    expect(result4).toEqual([]);
  });

  it('should check restriction rules (-30)', async () => {
    const checkRestriction = new Restriction('../5.js');
    const restrictedUse = await checkRestriction.readCode();
    expect(restrictedUse).toBe(null);
  })
});