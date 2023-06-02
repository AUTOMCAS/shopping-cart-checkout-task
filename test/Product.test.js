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

});
