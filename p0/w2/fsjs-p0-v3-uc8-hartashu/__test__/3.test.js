const tukarBesarKecil = require('../3');

describe('tukar ukuran', () => {
  test('should show text case exchange (100)', () => {
    const result = tukarBesarKecil('Hello World')
    expect(result).toMatch(/hELLO wORLD/);

    const result2 = tukarBesarKecil('I aM aLAY');
    expect(result2).toMatch(/i Am Alay/);

    const result3 = tukarBesarKecil('My Name is Bond!!');
    expect(result3).toMatch(/mY nAME IS bOND!!/);

    const result4 = tukarBesarKecil('IT sHOULD bE me');
    expect(result4).toMatch(/it Should Be ME/);

    const result5 = tukarBesarKecil('001-A-3-5TrdYW');
    expect(result5).toMatch(/001-a-3-5tRDyw/);
  });
});