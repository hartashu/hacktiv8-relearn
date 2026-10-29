'use strict';

// execute Calculator in here

const { Calculator } = require('./calculator');

const calculator = new Calculator();

calculator.add(5).subtract(3).square(3);

console.log(calculator);
