class Customer {
  #ktp;
  #depositAmount;

  constructor({ name, ktp, depositAmount }) {
    this.name = name;
    // this.#ktp = ktp;
    // this.#depositAmount = depositAmount;
    this.ktp = ktp;
    this.depositAmount = depositAmount;
  }

  get ktp() {
    return this.#ktp;
  }

  set ktp(value) {
    this.#ktp = value;
  }

  get depositAmount() {
    return this.#depositAmount;
  }

  set depositAmount(value) {
    if (value < 0) {
      throw new Error("Deposit amount can't be negative!");
    }
    this.#depositAmount = value;
  }

  addInterest() {
    this.#depositAmount += Math.round(this.#depositAmount * 0.1);
  }

  depositRupiahFormat() {
    return `Rp. ${this.#depositAmount}`;
  }

  toJSON() {
    return {
      name: this.name,
      ktp: this.#ktp,
      depositAmount: this.#depositAmount,
    };
  }
}

class CustomerFactory {
  static createCustomer({ name, ktp, depositAmount }) {
    return new Customer({ name, ktp, depositAmount });
  }
}

module.exports = CustomerFactory;
