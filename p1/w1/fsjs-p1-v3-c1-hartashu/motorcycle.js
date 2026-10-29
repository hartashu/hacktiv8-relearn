'use strict';

const { Vehicle, Customer } = require('./vehicle');

class Motorcycle extends Vehicle {
  constructor(brand, model, frameType = 'Tubular Frame') {
    super(brand, model, 100_000);
    this.frameType = frameType;
  }

  increasingAge() {
    if (this.condition > 0) {
      this.age++;
      this.condition -= this.generateRandomNumberBetween(10, 40);

      if (this.condition < 0) {
        this.condition = 0;
      }
    }
  }

  rent() {
    if (this.condition >= 0) {
      const reviewers = this.generateRandomNumberBetween(5, 20);

      for (let i = 0; i < reviewers; i++) {
        this.customers.push(new MotorcycleCustomer());
      }
    }
  }
}

class MotorcycleCustomer extends Customer {}

const motorcycle = new Motorcycle('Toyota', 'Camry');
motorcycle.condition = 95;
motorcycle.frameType = 'Double-Cradle Frame';

console.log('Motorcycle rental is open! :smile:');

do {
  motorcycle.increasingAge();
  motorcycle.rent();
  motorcycle.calculate();
  console.log(
    `[Age ${motorcycle.age} Report] Condition = ${motorcycle.condition}% | ${motorcycle.report}`,
  );
  motorcycle.resetReport();
} while (motorcycle.condition > 0);

console.log('The motorcycle has met its end. :sad:');
