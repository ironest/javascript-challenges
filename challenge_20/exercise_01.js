"use strict";

var cars = [
    { brand: "Honda", price: 13000 },
    { brand: "Rolls-Royce", price: 120000 },
    { brand: "Holden", price: 20000 }
];

// Write carInfo() function here
function carInfo(obj){

    function getAdjective(amount){
        const threshold = 20000
        return (amount <= threshold) ? "a cheap" : "an expensive"
    }

    return `Price of my new Honda is $${obj.price}, and it is ${getAdjective(obj.price)} car`;
}

cars.forEach(car => console.log(carInfo(car)));
// Price of my new Honda is $13000, and it is a cheap car.
// Price of my new Rolls-Royce is $120000, and it is an expensive car.
// Price of my new Holden is $20000, and it is a cheap car.