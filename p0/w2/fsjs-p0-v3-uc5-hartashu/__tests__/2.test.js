/*
========================================================================================================
ABAIKAN BLOCK CODE INI
========================================================================================================
*/
const { antrian, panggilAntrian, tumpukan } = require('../2')

describe('built-in function', () => {
  test('should (100)', () => {
    let line = ['Rhaegar'];

    const result = antrian(line, 'Snow');
    expect(result).toEqual(['Rhaegar', 'Snow']);

    const result2 = panggilAntrian(line);
    expect(result2).toEqual(['Snow']);

    const result3 = tumpukan(line, 'Jon');
    expect(result3).toEqual(['Jon', 'Snow']);
  });
});