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

    expect(shoppingCart[0].product).toEqual(fruitTea);
  });

  test('should calculate total price of cart with Fruit tea', () => {
    const shoppingCartCheckout = new ShoppingCartCheckout();

    shoppingCartCheckout.addProduct(fruitTea);

    expect(shoppingCartCheckout.getTotalPrice()).toEqual('£3.11');
  });

  test('should calculate total price of cart with Strawberries', () => {
    const shoppingCartCheckout = new ShoppingCartCheckout();

    shoppingCartCheckout.addProduct(strawberries);

    expect(shoppingCartCheckout.getTotalPrice()).toEqual('£5.00');
  });

  test('should calculate total price of cart with Coffee', () => {
    const shoppingCartCheckout = new ShoppingCartCheckout();

    shoppingCartCheckout.addProduct(coffee);

    expect(shoppingCartCheckout.getTotalPrice()).toEqual('£11.23');
  });

  test('should calculate total price of cart with more than one item', () => {
    const shoppingCartCheckout = new ShoppingCartCheckout();

    shoppingCartCheckout.addProduct(fruitTea);
    shoppingCartCheckout.addProduct(strawberries);
    shoppingCartCheckout.addProduct(coffee);

    expect(shoppingCartCheckout.getTotalPrice()).toEqual('£19.34');
  });

  test('should calculate total price of cart with more than one of same item', () => {
    const shoppingCartCheckout = new ShoppingCartCheckout();

    shoppingCartCheckout.addProduct(coffee);
    shoppingCartCheckout.addProduct(coffee);

    expect(shoppingCartCheckout.getTotalPrice()).toEqual('£22.46');
  });

  test('should calculate total price of cart with 2x Fruit Tea and buy-one-get-one-free discount', () => {
    const shoppingCartCheckout = new ShoppingCartCheckout();

    shoppingCartCheckout.addProduct(fruitTea);
    shoppingCartCheckout.addProduct(fruitTea);

    expect(shoppingCartCheckout.getTotalPrice()).toEqual('£3.11');
  });

  test('should calculate total price of cart with 7x Fruit Tea and buy-one-get-one-free discount', () => {
    const shoppingCartCheckout = new ShoppingCartCheckout();

    shoppingCartCheckout.addProduct(fruitTea);
    shoppingCartCheckout.addProduct(fruitTea);
    shoppingCartCheckout.addProduct(fruitTea);
    shoppingCartCheckout.addProduct(fruitTea);
    shoppingCartCheckout.addProduct(fruitTea);
    shoppingCartCheckout.addProduct(fruitTea);
    shoppingCartCheckout.addProduct(fruitTea);

    expect(shoppingCartCheckout.getTotalPrice()).toEqual('£12.44');
  });
});
