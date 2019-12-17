# Challenge_20

Provided by Coder Academy: [source](https://coderacademy.instructure.com/courses/239/pages/express-cookies-sessions-and-authentication?module_item_id=9461)

## Core
*(exercise_01.js)*

// Template Literals. Create carInfo() function that will return info about each car
// A car is considered cheap if it's price is <= 20,000
// A car is considered expensive if it's price is > 20,000

```js
"use strict";

var cars = [
    { brand: "Honda", price: 13000 },
    { brand: "Rolls-Royce", price: 120000 },
    { brand: "Holden", price: 20000 }
];

// Write carInfo() function here

cars.forEach(car => console.log(carInfo(car)));
// Price of my new Honda is $13000, and it is a cheap car.
// Price of my new Rolls-Royce is $120000, and it is an expensive car.
// Price of my new Holden is $20000, and it is a cheap car.
```

## Advanced
*(exercise_02.js)*
// Check presence of the function parameters. Throw an Error when function square() is called without arguments.
// To do this, create a new function, and use it as default parameter.

```js
"use strict";

function square(a) {
    console.log(a * a);
}

square(10);
// 100

square();
// BEFORE: NaN
// AFTER: Uncaught Error: Function square requires an argument!
```