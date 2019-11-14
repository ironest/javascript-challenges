let user = "tom";

if (user === "tom") {
    console.log("Hello Tom");
} else {
    console.log("Hello someone other than Tom");
}

let age = parseInt(prompt("Please enter your age"));

if ( age && age >= 18) {
    alert("Welcome to the casino!");
} else if ( age ) {
    alert("Entry to the casino is denied!");
} else {
    alert("That was not a valid age");
};