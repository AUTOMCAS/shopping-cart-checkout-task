# Shopping Cart Checkout technical challenge

## Task

Time: 1-2 hours.

Implement a checkout that scans items in and calculates total prices correctly for any combination of the products and offers below.

In our quest to stay in touch with what's going on in the commercial world we've decided to open a supermarket - we sell only three products:

Product code    Name            Price
FR1             Fruit tea       £3.11
SR1             Strawberries    £5.00
CF1             Coffee          £11.23

- Our CEO is a big fan of buy-one-get-one-free offers. She wants us to add a rule to apply this rule to fruit tea.
- The COO, though, likes low prices and wants people buying strawberries to get a price discount for bulk purchases. If you buy 3 or more strawberries, the price should drop to £4.50 each.
- Our checkout can scan items in any order.
- The CEO and COO change their minds often, so ideally this should be a flexible solution (if you have time). For example, we might want to apply the offers to different products, or add products to our range, as the supermarket grows.



## Solution

Commits were made only after successful test passes.

The solution allows:

- Adding of products in any order.
- Calculation of total price.
- Calculation of discounts for buy-one-get-one-free for Fruit tea.
- Calculation of discounted price of £4.50 each when buying 3 or more Strawberries.
- Extension of additional products using product classes.
- Future discounts to be added during price calculation.

Further improvements:

- Extraction of discounts to allow better extension without modification.


## Planning

<!-- Excalidraw link -->

## Setup

Install dependencies from within the project directory:

```bash
npm install
```

## Tests

Run tests
```bash
npm test
```

Run tests with coverage
```bash
npm run coverage
```

<!-- Tests link -->

## Running the solution

From the main directory start node REPL:
```bash
node
```

Copy and paste the below code to setup the Shopping Cart Checkout. 
```bash
const ShoppingCartCheckout = require('./src/ShoppingCartCheckout');
const shoppingCartCheckout = new ShoppingCartCheckout();

const FruitTea = require('./src/products/FruitTea');
const Strawberries = require('./src/products/Strawberries');
const Coffee = require('./src/products/Coffee');

const fruitTea = new FruitTea();
const strawberries = new Strawberries();
const coffee = new Coffee();


```
To add items:

```bash
shoppingCartCheckout.addProduct(strawberries);

shoppingCartCheckout.addProduct(fruitTea);

shoppingCartCheckout.addProduct(coffee);
```

To calculate total:

```bash
shoppingCartCheckout.getTotalPrice()
```

To exit press `Ctrl + C` twice

