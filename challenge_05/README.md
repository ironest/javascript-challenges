# Challenge_05

Provided by Coder Academy:
* [source](https://edstem.org/courses/3790/challenges/6621)
* [source](https://coderacademyedu.github.io/resources/unit_js_objects.html)

## Capitalise the Front
*(exercise_01.js)*
Create a function that will take a string as an argument. In this function, use your favourite loop to capitalise the first letter of each word, whilst making each other letter lowercase
**E.g.** capitaliseTheFront("sinGLE"), should return "Single"
**E.g.** capitaliseTheFront("TWO words"), should return "Two Words"
**E.g.** capitaliseTheFront("Quite a Long SENTENCE!"), should return "Quite A Long Sentence!"

## Rewrite code below using ES6 Classes
*(exercise_02.js)*

```javascript
"use strict";

function Food(calories) {
    this.calories = calories;
}

function Fruit(title, price, calories) {
    Food.call(this, calories);
    this.title = title;
    this.price = price;
};

Fruit.prototype = Object.create(Food.prototype);

Fruit.prototype.priceInfo = function() {
    return `Price of one ${this.title} is $${this.price}`;
};

var apple = new Fruit("Apple", 2, 150);
console.log(apple.priceInfo());

var orange = new Fruit("Orange", 3, 180);
console.log(orange.priceInfo());
```

## Rewrite this code without using ES6 Classes
*(exercise_03.js)*

```javascript
class Mammal {
    constructor(name) {
        this.hair = true;
        this.warmblooded = true;
    }

    breath() {
        console.log("I love H2O");
    }

    speak(input) {
        return `I am a ${input}`;
    }
}

class Lion extends Mammal {
    constructor(name) {
        super();
        this.type = "Lion";
        this.name = name;
    }

    roar() {
        return super.speak(this.type) + "! Here me ROAR!";
    }
}

let simba = new Lion("simba");
console.log(simba.roar());
```
