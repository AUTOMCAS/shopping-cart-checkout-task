class ShoppingCartCheckout {
  constructor() {
    this.shoppingCart = [];
  }

  getShoppingCart() {
    return this.shoppingCart;
  }

  addProduct(product) {
    this.shoppingCart.push(product);
  }

  totalPrice() {
    let total = 0;

    total =+ this.shoppingCart[0].price;

    return `£${total}`;
  }
}

module.exports = ShoppingCartCheckout;
