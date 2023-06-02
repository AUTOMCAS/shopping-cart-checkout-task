const Coffee = require('../src/products/Coffee')

describe('Coffee', () => {
  test('should have instance variables', () => {
    const coffee = new Coffee()

    expect(coffee.code).toEqual('CF1')
    expect(coffee.name).toEqual('Coffee')
    expect(coffee.price).toEqual(11.23)
  });

});
