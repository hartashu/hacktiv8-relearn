const Restriction = require('hacktiv8-restriction')
const {convertMenu, filterMenu, statusMenu, statisticMenu, generateMenu} = require('./../index')

describe('Hacktiv Restaurant Testing', () => {
  it('Should convert an array of string into a multi dimensional array (20)', () => {
    const foods = [
      'Nasi Goreng#20000',
      'Salmon Mentai',
      'Gado Gado#10000',
      'Kupat Tahu#41000',
      'Wagyu Steak',
      'Nasi Padang#25000',
      'Papeda#15000',
      'Ayam Rebus',
      'Tempe Goreng#5000',
      'Tahu Goreng#4000'
    ]

    const result = [
      ['Nasi Goreng', '20000'],
      ['Salmon Mentai'],
      ['Gado Gado', '10000'],
      ['Kupat Tahu', '41000'],
      ['Wagyu Steak'],
      ['Nasi Padang', '25000'],
      ['Papeda', '15000'],
      ['Ayam Rebus'],
      ['Tempe Goreng', '5000'],
      ['Tahu Goreng', '4000']
    ]

    expect(convertMenu(foods)).toEqual(expect.arrayContaining(result))
  })

  it('Should filter a menu without price (20)', () => {
    const foods = [
      ['Nasi Goreng', '20000'],
      ['Salmon Mentai'],
      ['Gado gado', '10000'],
      ['Kupat tahu', '41000'],
      ['Wagyu Steak'],
      ['Nasi Padang', '25000'],
      ['Papeda', '15000'],
      ['Ayam rebus'],
      ['Tempe Goreng', '5000'],
      ['Tahu Goreng', '4000']
    ]

    const result = [
      ['Nasi Goreng', 20000],
      ['Gado gado', 10000],
      ['Kupat tahu', 41000],
      ['Nasi Padang', 25000],
      ['Papeda', 15000],
      ['Tempe Goreng', 5000],
      ['Tahu Goreng', 4000]
    ]

    expect(filterMenu(foods)).toEqual(result)
  })

  it('Should give each menu the correct status (20)', () => {
    const foods = [
      ['Nasi Goreng', 20000],
      ['Gado gado', 10000],
      ['Kupat tahu', 41000],
      ['Nasi Padang', 25000],
      ['Papeda', 15000],
      ['Tempe Goreng', 5000],
      ['Tahu Goreng', 4000]
    ]

    const result = [
      ['Nasi Goreng', 20000, 'standard'],
      ['Gado gado', 10000, 'cheap'],
      ['Kupat tahu', 41000, 'expensive'],
      ['Nasi Padang', 25000, 'standard'],
      ['Papeda', 15000, 'standard'],
      ['Tempe Goreng', 5000, 'cheap'],
      ['Tahu Goreng', 4000, 'cheap']
    ]

    expect(statusMenu(foods)).toEqual(result)
  })

  it('Should return a statistic for all menu', () => {
    const foods = [
      ['Nasi Goreng', 20000, 'standard'],
      ['Gado gado', 10000, 'cheap'],
      ['Kupat tahu', 41000, 'expensive'],
      ['Nasi Padang', 25000, 'standard'],
      ['Papeda', 15000, 'standard'],
      ['Tempe Goreng', 5000, 'cheap'],
      ['Tahu Goreng', 4000, 'cheap']
    ]

    const result = {
      standard: 3,
      cheap: 3,
      expensive: 1
    }

    expect(statisticMenu(foods)).toEqual(result)
  })

  it('Should generate a menu and statistic as an object (20)', () => {
    const foods = [
      'Nasi Goreng#20000',
      'Salmon Mentai',
      'Gado Gado#10000',
      'Kupat Tahu#41000',
      'Wagyu Steak',
      'Nasi Padang#25000',
      'Papeda#15000',
      'Ayam Rebus',
      'Tempe Goreng#5000',
      'Tahu Goreng#4000'
    ]

    const result = {
      statistic: {standard: 3, cheap: 3, expensive: 1},
      menu: [
        {name: 'Nasi Goreng', price: 20000, status: 'standard'},
        {name: 'Gado Gado', price: 10000, status: 'cheap'},
        {name: 'Kupat Tahu', price: 41000, status: 'expensive'},
        {name: 'Nasi Padang', price: 25000, status: 'standard'},
        {name: 'Papeda', price: 15000, status: 'standard'},
        {name: 'Tempe Goreng', price: 5000, status: 'cheap'},
        {name: 'Tahu Goreng', price: 4000, status: 'cheap'}
      ]
    }

    expect(generateMenu(foods)).toEqual(result)
  })

  it('Check restriction (-20)', async () => {
    const checkRestriction = new Restriction('../index.js')
    checkRestriction.rules = ['match', 'split', 'concat', 'search']
    const result = await checkRestriction.readCode()
    expect(result).toBe(null)
  })
})
