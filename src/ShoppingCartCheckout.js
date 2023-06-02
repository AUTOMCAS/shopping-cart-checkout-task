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

    this.shoppingCart.forEach((product) => {
      total += product.price;
    });

    return `£${total.toFixed(2)}`;
  }
}

module.exports = ShoppingCartCheckout;
