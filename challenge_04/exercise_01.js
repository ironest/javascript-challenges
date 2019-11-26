let me = {};

me.age = 37;

me["current location"] = "Ashfield";

console.log(`Age: ${me.age} - Current Location: ${me["current location"]}`);

me.hobbies = ["Rollerblades", "Cats", "Netflix", "Videogames"];

delete me.age;

for(let hobby of me.hobbies)
    console.log(hobby);