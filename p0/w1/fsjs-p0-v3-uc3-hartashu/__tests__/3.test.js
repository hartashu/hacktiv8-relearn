/*
========================================================================================================
ABAIKAN BLOCK CODE INI
========================================================================================================
*/
const Restriction = require('hacktiv8-restriction')
const { execSync } = require('child_process')
const fs = require('fs')
const reconstructedFilename = 'reconstructed.js'

const runTest = value => {
  let solution = fs.readFileSync('./3.js', 'utf-8')

  solution = solution.replace(
    /(let|var|const) kata .*/,
    // to handle undefined or null, it should not be quoted
    `$1 kata = ${typeof value === 'string' ? `"${value}"` : value}`
  )

  fs.writeFileSync(reconstructedFilename, solution)

  return String(execSync(`node ${reconstructedFilename}`))
}

afterAll(() => {
  if (fs.existsSync(reconstructedFilename)) {
    fs.unlinkSync(reconstructedFilename)
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
describe('balik kata', () => {
  it('should show reverse text form input string (100)', () => {
    const result1 = runTest('Javascript')
    const result2 = runTest('Hacktiv8')
    const result3 = runTest('Indonesia')
    const result4 = runTest('KMZWAY87AA')
    const result5 = runTest('whosyourdaddy')
    expect(result1).toMatch(/tpircsavaJ/i)
    expect(result2).toMatch(/8vitkcaH/i)
    expect(result3).toMatch(/aisenodnI/i)
    expect(result4).toMatch(/AA78YAWZMK/i)
    expect(result5).toMatch(/yddadruoysohw/i)
  })

  it('should check restriction rules (-30)', async () => {
    const checkRestriction = new Restriction('../3.js')
    checkRestriction.rules = [
      'match',
      'split',
      'concat',
      'pop',
      'push',
      'unshift',
      'shift'
    ]
    const restrictedUse = await checkRestriction.readCode()
    expect(restrictedUse).toBe(null)
  })
})