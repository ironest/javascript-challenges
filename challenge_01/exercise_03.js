let students = [];

for (let i = 1; i <= 3; i++) {
    let s = {}
    s.name = prompt(`Enter a name for student ${i}`);
    s.age = parseInt(prompt(`Enter an age for student ${i}`));
    students.push(s);
}