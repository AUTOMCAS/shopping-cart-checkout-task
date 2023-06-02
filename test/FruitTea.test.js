const FruitTea = require('../src/FruitTea')

describe('FruitTea', () => {
  test('should have instance variables', () => {
    const fruitTea = new FruitTea()

    expect(fruitTea.code).toEqual('FR1')
    expect(fruitTea.name).toEqual('Fruit Tea')
    expect(fruitTea.price).toEqual(3.11)
  });

});
