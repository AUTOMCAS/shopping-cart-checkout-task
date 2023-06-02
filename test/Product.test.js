const Product = require('../src/Product')

describe('Product', () => {
  test('should have "code" instance variable', () => {
    const product = new Product('codeExample')

    expect(product.code).toEqual('codeExample')
  });

  test('should have "name" instance variable', () => {
    const product = new Product('codeExample', 'Product Name')

    expect(product.name).toEqual('Product Name')
  });

  test('should have "price" instance variable', () => {
    const product = new Product('codeExample', 'Product Name', 3.11)

    expect(product.price).toEqual(3.11)
  });

});
