let journal = [];

while (true) {

    let key = prompt("Enter a topic you'd like to record");

    if (!key)
        break;

    let value = prompt(`What about ${key}?`);
    let tmp = {};
    tmp[key] = value;

    journal.unshift(tmp);

    if (journal.length > 5)
        journal.length = 5;

    console.log(...journal);

}