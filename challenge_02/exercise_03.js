let input = "1000";
let interations = 0

while (input !== "6174") {

    let smallest = input.split("").sort().join("");
    let biggest = input.split("").sort().reverse().join("");

    input = (parseInt(biggest) - parseInt(smallest)).toString().padStart(4,"0");
    
    console.log(`${biggest} - ${smallest} = ${input}`);
    interations++;

}

console.log(`Iteration(s) required: ${interations}`)