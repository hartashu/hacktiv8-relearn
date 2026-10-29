'use strict';

class Calculator {
  //write your code here

  total = 0;

  constructor() {}

  add(value) {
    this.total += value;
    return this;
  }

  subtract(value) {
    this.total -= value;
    return this;
  }

  multiply(value) {
    this.total *= value;
    return this;
  }

  divide(value) {
    this.total /= value;
    return this;
  }

  square(value) {
    this.total **= value;
    return this;
  }

  squareRoot(value) {
    this.total = Math.sqrt(this.total);
    return this;
  }

  areaOfTheCircle() {
    this.total = Math.PI * this.total * this.total;
    return this;
  }

  circumference(value) {
    this.total = 2 * Math.PI * this.total;
    return this;
  }
}

/**
 * you can use several features from ecmascript, such as:
 * - Classes
 * - Default Parameters
 * - Destructured Assignment
 * - Template Literals
 * - Method Chaining
 */

// execute Calculator in file index.js
module.exports = {
  Calculator,
};
