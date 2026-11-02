const BankModel = require('../models/BankModel');
const BankView = require('../views/BankView');

class BankController {
  static async list() {
    try {
      const banks = await BankModel.findAll();
      BankView.showList(banks);
    } catch (error) {
      BankView.showError(error);
    }
  }

  static async addCustomer({ bankId, name, ktp, depositAmount }) {
    try {
      const customerName = await BankModel.createCustomer({
        bankId: Number(bankId),
        name,
        ktp,
        depositAmount: Number(depositAmount),
      });
      BankView.showAddCustomer(customerName);
    } catch (error) {
      BankView.showError(error);
    }
  }

  static async deleteCustomer({ bankId, ktp }) {
    try {
      const customerName = await BankModel.deleteCustomer({
        bankId: Number(bankId),
        ktp,
      });
      BankView.showDeleteCustomer(customerName);
    } catch (error) {
      BankView.showError(error);
    }
  }

  static async detail({ bankId }) {
    try {
      const customers = await BankModel.findAllCustomersByBankId(
        Number(bankId),
      );
      BankView.showDetail(customers);
    } catch (error) {
      BankView.showError(error);
    }
  }

  static async addInterest({ bankId }) {
    try {
      await BankModel.updateDepositAmount(Number(bankId));
      BankView.showAddInterest();
    } catch (error) {
      BankView.showError(error);
    }
  }
}

module.exports = BankController;
