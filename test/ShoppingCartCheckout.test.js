const ShoppingCartCheckout = require('../src/ShoppingCartCheckout');
const Product = require('../src/Product');

describe('ShoppingCartCheckout', () => {
  const fruitTea = new Product('FR1', 'Fruit Tea', 3.11);
  const strawberries = new Product('SR1', 'Strawberries', 5.0);
  const coffee = new Product('CF1', 'Coffee', 11.23);

  test('should return shopping cart', () => {
    const shoppingCartCheckout = new ShoppingCartCheckout();

    expect(shoppingCartCheckout.getShoppingCart()).toEqual([]);
  });

  test('should add product to shopping cart', () => {
    const shoppingCartCheckout = new ShoppingCartCheckout();

    shoppingCartCheckout.addProduct(fruitTea);

    const shoppingCart = shoppingCartCheckout.getShoppingCart();

    expect(shoppingCart[0]).toEqual(fruitTea);
  });

  test('should total price of cart with Fruit tea', () => {
    const shoppingCartCheckout = new ShoppingCartCheckout();

    shoppingCartCheckout.addProduct(fruitTea);

    expect(shoppingCartCheckout.totalPrice()).toEqual('£3.11');
  });

  test('should total price of cart with Strawberries', () => {
    const shoppingCartCheckout = new ShoppingCartCheckout();

    shoppingCartCheckout.addProduct(strawberries);

    expect(shoppingCartCheckout.totalPrice()).toEqual('£5.00');
  });

  test('should total price of cart with Coffee', () => {
    const shoppingCartCheckout = new ShoppingCartCheckout();

    shoppingCartCheckout.addProduct(coffee);

    expect(shoppingCartCheckout.totalPrice()).toEqual('£11.23');
  });

  test('should total price of cart with more than one item', () => {
    const shoppingCartCheckout = new ShoppingCartCheckout();

    shoppingCartCheckout.addProduct(fruitTea);
    shoppingCartCheckout.addProduct(strawberries);
    shoppingCartCheckout.addProduct(coffee);

    expect(shoppingCartCheckout.totalPrice()).toEqual('£19.34');
  });
});
