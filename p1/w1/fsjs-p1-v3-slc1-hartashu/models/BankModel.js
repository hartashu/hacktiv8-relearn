const fs = require('fs').promises;
const path = require('path');
const CustomerFactory = require('./CustomerFactory');
const BankFactory = require('./BankFactory');

class BankModel {
  static #filePath = path.join(__dirname, '../data.json');

  static async findAll() {
    const rawData = await fs.readFile(this.#filePath, 'utf-8');
    const parsedData = JSON.parse(rawData);
    const data = parsedData.map(
      ({ id, name, type, customers: rawCustomers }) => {
        return BankFactory.createBank({
          id,
          name,
          type,
          customers: rawCustomers.map((customer) =>
            CustomerFactory.createCustomer(customer),
          ),
        });
      },
    );

    return data;
  }

  static async findBankById(bankId, banksSource) {
    const banks = banksSource || (await this.findAll());

    const foundBank = banks.find(({ id }) => id === bankId);
    if (!foundBank) {
      throw new Error(`Bank with id ${bankId} is not available`);
    }

    return foundBank;
  }

  static async createCustomer({ bankId, name, ktp, depositAmount }) {
    const banks = await this.findAll();

    const foundBank = await this.findBankById(bankId, banks);

    if (!name || !ktp || !depositAmount) {
      throw new Error('Data must be complete!');
    }

    if (foundBank.customers.length >= foundBank.limit) {
      throw new Error("You can't add more Customer to this Bank");
    }

    const foundCustomer = foundBank.customers.find(
      (customer) => customer.ktp === ktp,
    );
    if (foundCustomer) {
      throw new Error(`Customer with KTP ${ktp} is already registered`);
    }

    foundBank.customers.push(
      CustomerFactory.createCustomer({ name, ktp, depositAmount }),
    );

    await this.save(banks);

    return name;
  }

  static async deleteCustomer({ bankId, ktp: targetKtp }) {
    const banks = await this.findAll();

    const foundBank = await this.findBankById(bankId, banks);

    const foundCustomer = foundBank.customers.find(
      ({ ktp }) => ktp === targetKtp,
    );
    if (!foundCustomer) {
      throw new Error(`Customer with ktp ${targetKtp} is not found`);
    }

    const filteredCustomer = foundBank.customers.filter(
      (customer) => customer.ktp !== targetKtp,
    );
    foundBank.customers = filteredCustomer;

    await this.save(banks);

    return foundCustomer.name;
  }

  static async findAllCustomersByBankId(bankId) {
    const banks = await this.findAll();

    const foundBank = await this.findBankById(bankId, banks);

    return foundBank.customers;
  }

  static async updateDepositAmount(bankId) {
    const banks = await this.findAll();

    const foundBank = await this.findBankById(bankId, banks);

    foundBank.customers.forEach((customer) => {
      customer.addInterest();
    });

    await this.save(banks);
  }

  static async save(data) {
    await fs.writeFile(this.#filePath, JSON.stringify(data, null, 2));
  }
}

module.exports = BankModel;
