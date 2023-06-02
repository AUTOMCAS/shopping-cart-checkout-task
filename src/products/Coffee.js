const Product = require('./Product');

class Coffee extends Product {
  constructor() {
    super('CF1', 'Coffee', 11.23);
  }
}

module.exports = Coffee;
