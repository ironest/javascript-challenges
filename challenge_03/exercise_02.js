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
        let walk = {};
        walk.location = location;
        walk.distance = distance;
        this.walks.push(walk);
    }

    display_walks(){
        for (let walk of this.walks){
            console.log(`Walked ${walk.distance}Km in ${walk.location}`);
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
d1.speak();
d1.walk("Ashield", 5);
d1.walk("Burwood", 7);
d1.walk("Summer Hills", 10);

d1.display_walks();

console.log(`Total km ${d1.total_distance()}`);