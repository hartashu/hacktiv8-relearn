class Bank {
  constructor({ id, name, type, limit, customers = [] }) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.limit = limit;
    this.customers = customers;
  }
}

class LocalBank extends Bank {
  constructor({ id, name, customers = [] }) {
    super({ id, name, type: 'LocalBank', limit: 3, customers });
  }
}

class NationalBank extends Bank {
  constructor({ id, name, customers = [] }) {
    super({ id, name, type: 'NationalBank', limit: 5, customers });
  }
}

class BankFactory {
  static createBank({ id, name, type, customers = [] }) {
    if (type === 'LocalBank') {
      return new LocalBank({ id, name, customers });
    } else if (type === 'NationalBank') {
      return new NationalBank({ id, name, customers });
    }

    throw new Error('Available banks are only LocalBank and NationalBank');
  }
}

module.exports = BankFactory;
