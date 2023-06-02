const ShoppingCartCheckout = require('../src/ShoppingCartCheckout')
const Product = require('../src/Product')

describe('ShoppingCartCheckout', () => {
  test('should return shopping cart', () => {
    const shoppingCartCheckout = new ShoppingCartCheckout()

    expect(shoppingCartCheckout.getShoppingCart()).toEqual([])
  });

});
