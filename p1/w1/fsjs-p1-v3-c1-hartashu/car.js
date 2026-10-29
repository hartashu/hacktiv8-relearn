'use strict';

const { Vehicle, Customer } = require('./vehicle.js');

class Car extends Vehicle {
  constructor(brand, model) {
    super(brand, model, 300_000);
  }

  rent() {
    if (this.condition >= 0) {
      for (let i = 0; i < 15; i++) {
        this.customers.push(new CarCustomer());
      }
    }
  }
}

class CarCustomer extends Customer {}

const car = new Car('Toyota', 'Camry');
car.age = 5;

console.log('Car rental is open! :smile:');

do {
  car.increasingAge();
  car.rent();
  car.calculate();
  console.log(
    `[Age ${car.age} Report] Condition = ${car.condition}% | ${car.report}`,
  );
  car.resetReport();
} while (car.condition > 0);

console.log('The car has met its end. :sad:');
