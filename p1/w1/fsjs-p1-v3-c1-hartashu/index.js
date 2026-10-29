'use strict';

class Vehicle {
  #condition;

  constructor(brand, model, price, condition = 100, age = 0) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.#condition = condition;
    this.age = age;
    this.customers = [];
    this.totalRentDays = 0;
    this.totalRentCost = 0;
  }

  generateRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  increasingAge() {
    if (this.#condition > 0) {
      this.age++;
      this.#condition -= this.generateRandomNumberBetween(1, 30);

      if (this.#condition < 0) {
        this.#condition = 0;
      }
    }
  }

  rent() {
    if (this.#condition >= 0) {
      const reviewers = this.generateRandomNumberBetween(5, 20);

      for (let i = 0; i < reviewers; i++) {
        this.customers.push(new Customer());
      }
    }
  }

  calculate() {
    this.totalRentDays = this.customers.length;
    this.totalRentCost = this.price * this.totalRentDays;
  }

  resetReport() {
    this.customers = [];
    this.totalRentDays = 0;
    this.totalRentCost = 0;
  }

  get condition() {
    return this.#condition;
  }

  set condition(value) {
    this.#condition = value;
  }

  get report() {
    const good = this.customers.filter(
      (customer) => customer.review === 'good',
    ).length;
    const bad = this.customers.length - good;

    return `total rent days: ${this.totalRentDays}, total rent cost: ${this.totalRentCost}, reviews: ${this.customers.length}(${good} good, ${bad} bad)`;
  }
}

class Customer {
  constructor() {
    this.review = this.#getRandomReview();
  }

  #getRandomReview() {
    const number = Math.floor(Math.random() * 4);

    return number === 0 ? 'bad' : 'good';
  }
}

const vehicle = new Vehicle('Toyota', 'Camry', 200_000);

console.log('Vehicle rental is open! :smile:');

do {
  vehicle.increasingAge();
  vehicle.rent();
  vehicle.calculate();
  console.log(
    `[Age ${vehicle.age} Report] Condition = ${vehicle.condition}% | ${vehicle.report}`,
  );
  vehicle.resetReport();
} while (vehicle.condition > 0);

console.log('The vehicle has met its end. :sad:');
