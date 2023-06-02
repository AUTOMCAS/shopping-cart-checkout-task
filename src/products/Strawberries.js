const Product = require('./Product');

class Strawberries extends Product {
  constructor() {
    super('SR1', 'Strawberries', 5.00);
  }
}

module.exports = Strawberries;
