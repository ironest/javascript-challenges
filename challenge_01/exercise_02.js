let students = [];

students.push("Sarah");

students.push(prompt("Enter your name"));

for (let i = 0; i < 3; i++) {
    students.push(prompt("Add another name:"));
}

for (let i = 0; i < students.length; i++) {
    alert(students[i]);
}