const ShoppingCartCheckout = require('../src/ShoppingCartCheckout')
const Product = require('../src/Product')

describe('ShoppingCartCheckout', () => {
  test('should return shopping cart', () => {
    const shoppingCartCheckout = new ShoppingCartCheckout()

    expect(shoppingCartCheckout.getShoppingCart()).toEqual([])
  });

  test('should add product to shopping cart', () => {
    const shoppingCartCheckout = new ShoppingCartCheckout()
    const product = new Product('FR1', 'Fruit Tea', 3.11)

    shoppingCartCheckout.addProduct(product)

    const shoppingCart = shoppingCartCheckout.getShoppingCart()

    expect(shoppingCart[0]).toEqual(product)
  });

  test('should total price of cart with Fruit tea', () => {
    const shoppingCartCheckout = new ShoppingCartCheckout()
    const fruitTea = new Product('FR1', 'Fruit Tea', 3.11)

    shoppingCartCheckout.addProduct(fruitTea)

    expect(shoppingCartCheckout.totalPrice()).toEqual('£3.11')
  });

  test('should total price of cart with Strawberries', () => {
    const shoppingCartCheckout = new ShoppingCartCheckout()
    const strawberries = new Product('SR1', 'Strawberries', 5.00)

    shoppingCartCheckout.addProduct(strawberries)

    expect(shoppingCartCheckout.totalPrice()).toEqual('£5.00')
  });

    test('should total price of cart with Coffee', () => {
    const shoppingCartCheckout = new ShoppingCartCheckout()
    const coffee = new Product('CF1', 'Coffee', 11.23)

    shoppingCartCheckout.addProduct(coffee)

    expect(shoppingCartCheckout.totalPrice()).toEqual('£11.23')
  });

});
