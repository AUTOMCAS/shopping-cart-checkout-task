const Strawberries = require('../src/products/Strawberries')

describe('Strawberries', () => {
  test('should have instance variables', () => {
    const strawberries = new Strawberries()

    expect(strawberries.code).toEqual('SR1')
    expect(strawberries.name).toEqual('Strawberries')
    expect(strawberries.price).toEqual(5.00)
  });

});
