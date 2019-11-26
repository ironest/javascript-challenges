class Walk {

    constructor(location, distance) {
        this.location = location;
        this.distance = distance;
        this.timestamp = new Date();
    }

    display(){
        console.log(`${this.timestamp.getDate()}/` +
                    `${this.timestamp.getMonth()+1}/` +
                    `${this.timestamp.getFullYear()} ` +
                    `${this.timestamp.getHours()}:` +
                    `${this.timestamp.getMinutes()}:` +
                    `${this.timestamp.getSeconds()}` +
                    ` - Walked ${this.distance}Km in ${this.location}`);
    }

}

class Dog {

    constructor(name, location) {
        this.name = name;
        this.location = location
        this.walks = [];
    }

    speak(){
        console.log(`Woof! my name is ${this.name}`);
    }

    walk(location, distance) {
        let walk = new Walk(location, distance);
        this.walks.push(walk);
    }

    display_walks() {
        for (let walk of this.walks){
            walk.display();
        }
    }

    total_distance(){
        let total = 0;
        for (let walk of this.walks)
            total += walk.distance;
        
        return total;
    }

}

d1 = new Dog("Ruben", "Ashfield");

d1.walk("Ashield", 5);
d1.walk("Burwood", 7);
d1.walk("Summer Hills", 10);

d1.display_walks();

console.log(`Total km ${d1.total_distance()}`);