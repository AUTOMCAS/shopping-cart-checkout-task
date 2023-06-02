class ShoppingCartCheckout{
  constructor() {
    this.shoppingCart = []
  }

  getShoppingCart() {
    return this.shoppingCart
  }

  addProduct(product) {
    this.shoppingCart.push(product)
  }
}

module.exports = ShoppingCartCheckout