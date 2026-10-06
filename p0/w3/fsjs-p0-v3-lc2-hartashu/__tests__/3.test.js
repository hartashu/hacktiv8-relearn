const {getArcadeResult, getPrizes, gamezone} = require('../3.js')
const Restriction = require('hacktiv8-restriction')

describe('Soal 3', () => {
  it('should return the arcade report of the player (13)', () => {
    const result = getArcadeResult([
      'Circus Ball Drop',
      'Lucky Chicken',
      'Street Basketball',
      'Circus Ball Drop',
      'Lucky Chicken',
      'Street Basketball',
      'Gold Rush',
      'Gold Rush',
      'Gold Rush',
      'Circus Ball Drop',
      'Lucky Chicken',
      'Lucky Chicken',
      'Circus Ball Drop',
      'Street Basketball',
      'Street Basketball',
      'Gold Rush',
      'Gold Rush',
      'Circus Ball Drop',
      'Circus Ball Drop'
    ])

    expect(result).toEqual({
      totalTicket: 1900,
      gameReport: {
        'Circus Ball Drop': 6,
        'Lucky Chicken': 4,
        'Street Basketball': 4,
        'Gold Rush': 5
      }
    })
  })

  it('should return the correct prize list based on the player tickets (10)', () => {
    const result = getPrizes(1900)
    const result2 = getPrizes(200)

    expect(result).toEqual(['Rautan', 'Pensil', 'Penghapus', 'Tempat Pensil', 'Celengan'])
    expect(result2).toEqual(['Rautan'])
  })

  it('should print the correct object with the right value (25)', () => {
    const result = gamezone({
      name: 'Ihsan',
      histories: [
        'Circus Ball Drop',
        'Lucky Chicken',
        'Street Basketball',
        'Circus Ball Drop',
        'Lucky Chicken',
        'Street Basketball',
        'Gold Rush',
        'Gold Rush',
        'Gold Rush',
        'Circus Ball Drop',
        'Lucky Chicken',
        'Lucky Chicken',
        'Circus Ball Drop',
        'Street Basketball',
        'Street Basketball',
        'Gold Rush',
        'Gold Rush',
        'Circus Ball Drop',
        'Circus Ball Drop'
      ]
    })

    const result2 = gamezone({
      name: 'Kosasih',
      histories: [
        'Circus Ball Drop',
        'Circus Ball Drop',
        'Street Basketball',
        'Circus Ball Drop',
        'Lucky Chicken',
        'Street Basketball',
        'Gold Rush',
        'Gold Rush',
        'Gold Rush',
        'Circus Ball Drop',
        'Lucky Chicken',
        'Lucky Chicken',
        'Circus Ball Drop',
        'Street Basketball',
        'Street Basketball',
        'Street Basketball',
        'Gold Rush',
        'Circus Ball Drop',
        'Circus Ball Drop',
        'Gold Rush',
        'Gold Rush',
        'Lucky Chicken',
        'Lucky Chicken',
        'Street Basketball',
        'Street Basketball',
        'Circus Ball Drop',
        'Circus Ball Drop',
        'Circus Ball Drop',
        'Circus Ball Drop'
      ]
    })

    const result3 = gamezone({
      name: 'Minnie',
      histories: ['Circus Ball Drop', 'Circus Ball Drop']
    })

    const result4 = gamezone({
      name: 'Marry',
      histories: ['Circus Ball Drop', 'Circus Ball Drop', 'Race to Witch Mountain']
    })

    const result5 = gamezone()

    expect(result).toEqual({
      name: 'Ihsan',
      gameReport: {
        'Circus Ball Drop': 6,
        'Lucky Chicken': 4,
        'Street Basketball': 4,
        'Gold Rush': 5
      },
      prizes: ['Rautan', 'Pensil', 'Penghapus', 'Tempat Pensil', 'Celengan']
    })

    expect(result2).toEqual({
      name: 'Kosasih',
      gameReport: {
        'Circus Ball Drop': 11,
        'Street Basketball': 7,
        'Lucky Chicken': 5,
        'Gold Rush': 6
      },
      prizes: ['Rautan', 'Pensil', 'Penghapus', 'Tempat Pensil', 'Celengan', 'Buku Tulis', 'Penjepit Rambut']
    })

    expect(result3).toEqual({
      name: 'Minnie',
      gameReport: {'Circus Ball Drop': 2},
      prizes: ['Rautan', 'Pensil']
    })

    expect(result4).toEqual('Terdapat permainan yang tidak tersedia di gamezone')

    expect(result5).toEqual('Tidak ada pemain yang bermain')
  })

  it('check restriction (-6)', async () => {
    const checkRestriction = new Restriction('../3.js')
    checkRestriction.rules = ['match', 'split', 'concat', 'search']
    const result = await checkRestriction.readCode()
    expect(result).toBe(null)
  })
})