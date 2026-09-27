/*
========================================================================================================
ABAIKAN BLOCK CODE INI
========================================================================================================
*/
const { execSync } = require('child_process')
const fs = require('fs')

const reconstructedFilename = 'reconstructed.js'

const loopString = () => {
  let solution = fs.readFileSync('./2.js', 'utf-8')

  fs.writeFileSync(reconstructedFilename, solution)

  let result = String(execSync(`node ${reconstructedFilename}`)).toLowerCase().replace(/[ .]/g, '')

  return result
}

const countLoop = () => {
  let solution = fs.readFileSync('./2.js', 'utf-8')

  let countFor = (solution.toLowerCase().match(/for/g) || []).length;
  let countWhile = (solution.toLowerCase().match(/while/g) || []).length;

  return { countFor, countWhile }
}

const hasil = () => {
  return `1-ganjil
4-genap
7-ganjil
10-genap
13-ganjil
16-genap
19-ganjil
22-genap
25-ganjil
28-genap
31-ganjil
34-genap
37-ganjil
40-genap
43-ganjil
46-genap
49-ganjil
52-genap
55-ganjil
58-genap
61-ganjil
64-genap
67-ganjil
70-genap
73-ganjil
76-genap
79-ganjil
82-genap
85-ganjil
88-genap
91-ganjil
94-genap
97-ganjil
100-genap
50-tidakbisadibagi3
55-tidakbisadibagi3
60-faktor3
65-tidakbisadibagi3
70-tidakbisadibagi3
75-faktor3
80-tidakbisadibagi3
85-tidakbisadibagi3
90-faktor3
95-tidakbisadibagi3
100-tidakbisadibagi3
105-faktor3
110-tidakbisadibagi3
115-tidakbisadibagi3
120-faktor3
125-tidakbisadibagi3
130-tidakbisadibagi3
135-faktor3
140-tidakbisadibagi3
145-tidakbisadibagi3
150-faktor3
155-tidakbisadibagi3
160-tidakbisadibagi3
165-faktor3
170-tidakbisadibagi3
175-tidakbisadibagi3
180-faktor3
185-tidakbisadibagi3
190-tidakbisadibagi3
195-faktor3
200-tidakbisadibagi3
128
184`
}

afterAll(() => {
  if (fs.existsSync(reconstructedFilename)) {
    fs.unlinkSync(reconstructedFilename)
  }
})

describe('Odd Even Numbers', () => {
  describe('Check loops and message', () => {
    it('should have minimum 2 for or 2 while loops', () => {
      const { countFor, countWhile } = countLoop()
      expect(countFor >= 2 || countWhile >= 2).toBe(true)
    })
    it('should correctly print out message', () => {
      const result = loopString()
      expect(result).toMatch(hasil())
    })
  })
})

