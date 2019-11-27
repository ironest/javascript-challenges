// class Mammal {
//     constructor(name) {
//         this.hair = true;
//         this.warmblooded = true;
//     }

//     breath() {
//         console.log("I love H2O");
//     }

//     speak(input) {
//         return `I am a ${input}`;
//     }
// }

function Mammal(name){
    this.hair = true;
    this.warmblooded = true;
    this.breath = function() {
        console.log("I love H2O");
    }
    this.speak = function(input){
        return `I am a ${input}`;
    }
}

function Lion(name) {
    Mammal.call(this);
    this.type = "Lion";
    this.name = name;
    this.roar = function() {
        // return super.speak(this.type) + "! Here me ROAR!";
        return this.speak(this.type) + "! Here me ROAR!";
    }
}

let simba = new Lion("simba");
console.log(simba.roar());