const ShoppingCartCheckout = require('../src/ShoppingCartCheckout');

const FruitTea = require('../src/products/FruitTea');
const Strawberries = require('../src/products/Strawberries');
const Coffee = require('../src/products/Coffee');


describe('ShoppingCartCheckout', () => {
  const fruitTea = new FruitTea();
  const strawberries = new Strawberries();
  const coffee = new Coffee();

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

  test('should calculate total price of cart with 3x Strawberries discounted at £4.50 each', () => {
    const shoppingCartCheckout = new ShoppingCartCheckout();

    shoppingCartCheckout.addProduct(strawberries);
    shoppingCartCheckout.addProduct(strawberries);
    shoppingCartCheckout.addProduct(strawberries);

    expect(shoppingCartCheckout.getTotalPrice()).toEqual('£13.50');
  });


  test('should calculate total price of cart with multiple items and discounts', () => {
    const shoppingCartCheckout = new ShoppingCartCheckout();

    shoppingCartCheckout.addProduct(strawberries);
    shoppingCartCheckout.addProduct(strawberries);
    shoppingCartCheckout.addProduct(strawberries);

    shoppingCartCheckout.addProduct(fruitTea);
    shoppingCartCheckout.addProduct(fruitTea);

    shoppingCartCheckout.addProduct(coffee);

    expect(shoppingCartCheckout.getTotalPrice()).toEqual('£27.84');
  });
});
