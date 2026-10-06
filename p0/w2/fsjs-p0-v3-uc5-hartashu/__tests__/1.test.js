/*
========================================================================================================
ABAIKAN BLOCK CODE INI
========================================================================================================
*/
const Restriction = require('hacktiv8-restriction')
const { shoutOut, calculateMultiply, processSentence } = require('../1');
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
describe('shout out', () => {
  it('should show "Halo Function!" (25)', () => {
    const result = shoutOut();
    expect(result).toMatch(/Halo Function!/);
  })

  it('should show the results of multiplication (25)', () => {
    const result = calculateMultiply(5, 6);
    const result2 = calculateMultiply(7, 9);
    const result3 = calculateMultiply(100, 0);
    const result4 = calculateMultiply(5, 5);
    const result5 = calculateMultiply(8, 10);
    expect(result).toBe(30);
    expect(result2).toBe(63);
    expect(result3).toBe(0);
    expect(result4).toBe(25);
    expect(result5).toBe(80);
  })

  it('should show the combined results of words (25)', () => {
    const result = processSentence('Agus', 30, 'Jln. Malioboro, Yogjakarta', 'gaming');
    const result2 = processSentence('Arnold', 17, 'Jl. Kebayoran No. 2, Jakarta', 'ngoding');
    const result3 = processSentence('Dimas', 21, 'Jl. Menteng, Jakarta Pusat', 'anime');
    const result4 = processSentence('Adiel', 20, 'Jln. Riau, Kota Bandung', 'anime');
    const result5 = processSentence('Daniel', 41, 'Jl. Setiabudhi, Bandung', 'tidur');
    expect(result).toMatch(/Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!/);
    expect(result2).toMatch(/Nama saya Arnold, umur saya 17 tahun, alamat saya di Jl. Kebayoran No. 2, Jakarta, dan saya punya hobby yaitu ngoding!/);
    expect(result3).toMatch(/Nama saya Dimas, umur saya 21 tahun, alamat saya di Jl. Menteng, Jakarta Pusat, dan saya punya hobby yaitu anime!/);
    expect(result4).toMatch(/Nama saya Adiel, umur saya 20 tahun, alamat saya di Jln. Riau, Kota Bandung, dan saya punya hobby yaitu anime!/);
    expect(result5).toMatch(/Nama saya Daniel, umur saya 41 tahun, alamat saya di Jl. Setiabudhi, Bandung, dan saya punya hobby yaitu tidur!/);
  })

  it('shold return right data type (25)', () => {
    const result = shoutOut();
    const result2 = calculateMultiply(5, 6);
    const result3 = processSentence('Agus', 30, 'Jln. Malioboro, Yogjakarta', 'gaming');
    expect(typeof result).toBe('string');
    expect(typeof result2).toBe('number');
    expect(typeof result3).toBe('string');
  })

  it('should check restriction rules (-30)', async () => {
    const checkRestriction = new Restriction('../1.js');
    checkRestriction.rules = ['match', 'split', 'concat', 'pop', 'push', 'unshift', 'shift'];
    const restrictedUse = await checkRestriction.readCode();
    expect(restrictedUse).toBe(null);
  })
})