"use strict";

function square(a) {
    if (a===undefined)
        throw "Function square requires an argument!"
    console.log(a * a);
}

square(10);
// 100

square();
// BEFORE: NaN
// AFTER: Uncaught Error: Function square requires an argument!