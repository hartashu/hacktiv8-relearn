/*
========================================================================================================
ABAIKAN BLOCK CODE INI
========================================================================================================
*/

const Restriction = require('hacktiv8-restriction')
const { execSync } = require('child_process');
const fs = require('fs');
const reconstructedFilename = 'reconstructed.js';

const runTest = (val1, val2, val3, val4) => {
  let solution = fs.readFileSync('./5.js', 'utf-8');

  solution = solution.replace(/(let|var|const) rows1 .*/, `$1 rows1 = ${val1}`);
  solution = solution.replace(/(let|var|const) rows2 .*/, `$1 rows2 = ${val2}`);
  solution = solution.replace(/(let|var|const) rows3 .*/, `$1 rows3 = ${val3}`);
  solution = solution.replace(/(let|var|const) rows4 .*/, `$1 rows4 = ${val4}`);

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
describe('asterisks looping', () => {
  it('should show asterisks patterns (100)', () => {
    const result1 = runTest(1, 1, 1, 1);
    const result2 = runTest(2, 2, 2, 2);
    const result3 = runTest(3, 3, 3, 3);
    const result4 = runTest(4, 4, 4, 4);
    const result5 = runTest(5, 5, 5, 5);
    const result6 = runTest(6, 6, 6, 6);
    const result7 = runTest(7, 7, 7, 7);
    const result8 = runTest(8, 8, 8, 8);
    const result9 = runTest(9, 9, 9, 9);
    const result10 = runTest(10, 10, 10, 10);
    expect(result1).toMatch('*\n*\n*\n*\n');
    expect(result2).toMatch('*\n*\n**\n**\n*\n**\n**\n*\n');
    expect(result3).toMatch('*\n*\n*\n***\n***\n***\n*\n**\n***\n***\n**\n*\n');
    expect(result4).toMatch('*\n*\n*\n*\n****\n****\n****\n****\n*\n**\n***\n****\n****\n***\n**\n*\n');
    expect(result5).toMatch('*\n*\n*\n*\n*\n*****\n*****\n*****\n*****\n*****\n*\n**\n***\n****\n*****\n*****\n****\n***\n**\n*\n');
    expect(result6).toMatch('*\n*\n*\n*\n*\n*\n******\n******\n******\n******\n******\n******\n*\n**\n***\n****\n*****\n******\n******\n*****\n****\n***\n**\n*\n');
    expect(result7).toMatch('*\n*\n*\n*\n*\n*\n*\n*******\n*******\n*******\n*******\n*******\n*******\n*******\n*\n**\n***\n****\n*****\n******\n*******\n*******\n******\n*****\n****\n***\n**\n*\n');
    expect(result8).toMatch('*\n*\n*\n*\n*\n*\n*\n*\n********\n********\n********\n********\n********\n********\n********\n********\n*\n**\n***\n****\n*****\n******\n*******\n********\n********\n*******\n******\n*****\n****\n***\n**\n*\n');
    expect(result9).toMatch('*\n*\n*\n*\n*\n*\n*\n*\n*\n*********\n*********\n*********\n*********\n*********\n*********\n*********\n*********\n*********\n*\n**\n***\n****\n*****\n******\n*******\n********\n*********\n*********\n********\n*******\n******\n*****\n****\n***\n**\n*\n');
    expect(result10).toMatch('*\n*\n*\n*\n*\n*\n*\n*\n*\n*\n**********\n**********\n**********\n**********\n**********\n**********\n**********\n**********\n**********\n**********\n*\n**\n***\n****\n*****\n******\n*******\n********\n*********\n**********\n**********\n*********\n********\n*******\n******\n*****\n****\n***\n**\n*\n');
  })

  it('should check restriction rules (-30)', async () => {
    const checkRestriction = new Restriction('../5.js');
    checkRestriction.rules = ['match', 'split', 'concat', 'pop', 'push', 'unshift', 'shift'];
    const restrictedUse = await checkRestriction.readCode();
    expect(restrictedUse).toBe(null);
  })
})