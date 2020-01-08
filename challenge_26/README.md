# Challenge_26

## Morning Challenge
*(exercise_01.js)*

Core:
**Positive Dominant**
An array is positive dominant if there are more unqiue positive numbers than there are unique negative numbers
Write a function that will return a boolean of whether or not the array is positive dominant

```js
"use strict";
let arr = [1, 1, 1, 1, -3, -6];
let arr1 = [6, -1, -1, 34, 3, 6];
let arr2 = [23, 7, -2, -23, -3, 28];
// Write function here
console.log(positiveDominant(arr));
// false;
console.log(positiveDominant(arr1));
// true;
console.log(positiveDominant(arr2));
// false;
```
