/*
========================================================================================================
ABAIKAN BLOCK CODE INI
========================================================================================================
*/
const Restriction = require('hacktiv8-restriction');
const { execSync } = require('child_process');
const fs = require('fs');
const reconstructedFilename = 'reconstructed.js';

const runTest = (value) => {
  let solution = fs.readFileSync('./4.js', 'utf-8');

  solution = solution.replace(
    /(let|var|const) kata .*/,
    // to handle undefined or null, it should not be quoted
    `$1 kata = ${typeof value === 'string' ? `"${value}"` : value}`
  );

  fs.writeFileSync(reconstructedFilename, solution);

  return String(execSync(`node ${reconstructedFilename}`));
}

afterAll(() => {
  if (fs.existsSync(reconstructedFilename)) {
    fs.unlinkSync(reconstructedFilename);
  }
})
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
describe('xo', () => {
  it('should show true when the sum of x and o is the same, otherwise it show false (100)', () => {
    const result1 = runTest('xoxoxo');
    const result2 = runTest('oxooxox');
    const result3 = runTest('xoxoxo');
    const result4 = runTest('xo');
    const result5 = runTest('xoxoooxx');
    const result6 = runTest('xoxoxoox');
    const result7 = runTest('oxooxoxxx');
    const result8 = runTest('oxoxxoxox');
    const result9 = runTest('xooxoxoo');
    const result10 = runTest('oxoxooo');
    expect(result1).toMatch(/true/i);
    expect(result2).toMatch(/false/i);
    expect(result3).toMatch(/true/i);
    expect(result4).toMatch(/true/i);
    expect(result5).toMatch(/true/i);
    expect(result6).toMatch(/true/i);
    expect(result7).toMatch(/false/i);
    expect(result8).toMatch(/false/i);
    expect(result9).toMatch(/false/i);
    expect(result10).toMatch(/false/i);
  });

  it('should check restriction rules (-30)', async () => {
    const checkRestriction = new Restriction('../4.js');
    checkRestriction.rules = ['match', 'split', 'concat', 'pop', 'push', 'unshift', 'shift', 'reverse'];
    const restrictedUse = await checkRestriction.readCode();
    expect(restrictedUse).toBe(null);
  });
});