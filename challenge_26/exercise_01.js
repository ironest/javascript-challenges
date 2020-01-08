"use strict";
let arr = [1, 1, 1, 1, -3, -6];
let arr1 = [6, -1, -1, 34, 3, 6];
let arr2 = [23, 7, -2, -23, -3, 28];
// Write function here

const positiveDominant = (arr) => {
    const uniq = [];

    for(let x of arr)
        if(!uniq.includes(x))
            uniq.push(x)

    const positive = uniq.filter(x => x>=0).length;

    return positive > uniq.length / 2;
}

console.log(positiveDominant(arr));
// false;
console.log(positiveDominant(arr1));
// true;
console.log(positiveDominant(arr2));
// false;