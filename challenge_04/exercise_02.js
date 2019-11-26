let me = {};

me.age = 37;

me["current location"] = "Ashfield";

console.log(`Age: ${me.age} - Current Location: ${me["current location"]}`);

me.hobbies = ["Rollerblades", "Cats", "Netflix", "Videogames"];

delete me.age;

for(let hobby of me.hobbies)
    console.log(hobby);

// This challenge starts here

//Add another item to the end of the hobbies array
me.hobbies.push("Sleeping");

//Delete the first item in the hobbies array
me.hobbies.shift();

//Add a mother key, set its value to an empty object
me.mother = {}

//Add name, age and location keys to the mother object
me.mother.name = "Federica";
me.mother.age = 65;
me.mother.location = "Milan";

//Add a print_details function to the me object.
me.print_details = () => {
    return `I live in ${me["current location"]} and my hobbies are: ${me.hobbies.join(", ")}. `+
                `My mother's name is ${me.mother.name}, she's ${me.mother.age} yo and she lives in ${me.mother.location}.`;
}

//Call the function to log some details about yourself
console.log(me.print_details());

//Note the difference between calling me.print_details and me.print_details()
console.log(me.print_details);