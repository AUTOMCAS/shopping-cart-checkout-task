class ShoppingCartCheckout {
  constructor() {
    this.shoppingCart = [];
  }

  getShoppingCart() {
    return this.shoppingCart;
  }

  addProduct(product) {
    const existingItem = this.shoppingCart.find(
      (item) => item.product === product,
    );

    if (existingItem) {
      existingItem.quantity++;
    } else {
      const newItem = {
        product,
        quantity: 1,
      };

      this.shoppingCart.push(newItem);
    }
  }

  calculateDiscountedPrice(item) {
    if (item.product.code === 'FR1') {
      const buyOneGetOneFreePrice =
        Math.ceil(item.quantity / 2) * item.product.price;

      return buyOneGetOneFreePrice;
    }

    if (item.product.code === 'SR1' && item.quantity >= 3) {
      return 4.5 * item.quantity;
    }
    
    return item.product.price * item.quantity;
  }

  calculateTotalPrice() {
    let total = 0;

    this.shoppingCart.forEach((item) => {
      const priceAfterDiscount = this.calculateDiscountedPrice(item);

      total += priceAfterDiscount;
    });

    return total;
  }

  getTotalPrice() {
    const totalPrice = this.calculateTotalPrice();

    return `£${totalPrice.toFixed(2)}`;
  }
}

module.exports = ShoppingCartCheckout;
