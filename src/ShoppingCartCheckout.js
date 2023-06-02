class ShoppingCartCheckout {
  constructor() {
    this.shoppingCart = [];
  }

  getShoppingCart() {
    return this.shoppingCart;
  }

  addProduct(product) {
    const existingProduct = this.shoppingCart.find(
      (item) => item.product === product,
    );

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      const newProduct = {
        product,
        quantity: 1,
      };
      this.shoppingCart.push(newProduct);
    }
  }

  getTotalPrice() {
    let total = 0;

    this.shoppingCart.forEach((item) => {
      if (item.product.code === 'FR1') {
        let discountedPrice = 0;

        discountedPrice = Math.ceil(item.quantity / 2) * item.product.price;

        total += discountedPrice;
      } else {
        total += item.product.price * item.quantity;
      }
    });

    return `£${total.toFixed(2)}`;
  }
}

module.exports = ShoppingCartCheckout;
