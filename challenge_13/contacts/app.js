const chalk = require('chalk');
const inquirer = require('inquirer');
const fs = require("fs");

const getOption = {
    type: "list",
    name: "choice",
    message: "Make a choice",
    choices: [
        "Add a contact",
        "Remove a contact",
        "View all contact",
        "Look up a name",
        "Save to File",
        "Quit the app"
    ]
};

const getName = {
    type: "input",
    name: "name",
    message: "Enter a name:",
    validate: function(value) {
        if (value) {
            return true;
        }
        return 'Please enter a valid name';
    }
};

const getPhone = {
    type: "input",
    name: "phone",
    message: "Enter a phone number:",
    validate: function(value) {
        let pass = value.match(
            /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
        );
        if (pass) {
            return true;
        }
        return 'Please enter a valid phone number';
    }
};

const main = async () => {

    let contactDetails = [];
    try {
        contactDetails = JSON.parse(fs.readFileSync("./contactDetails.txt"));
    }
    catch {
        console.log(chalk.red("Error reading from file"));
    } 

    while(true){

        let answer = await inquirer.prompt(getOption);
    
        switch(answer.choice){
    
            case "Add a contact":
                answer = {
                    name: (await inquirer.prompt(getName)).name,
                    phone: (await inquirer.prompt(getPhone)).phone,
                }
                contactDetails.push(answer);
                break;
            case "Remove a contact":
                answer = await inquirer.prompt(getName);
                contactIdx = contactDetails.findIndex(element => element.name === answer.name);
                contactDetails.splice(contactIdx, 1);
                break;
            case "View all contact":
                contactDetails.forEach(element => {
                    console.log(element);
                });
                break;
            case "Look up a name":
                answer = await inquirer.prompt(getName);
                console.log(contactDetails.filter(element=>{
                    return element.name === answer.name;
                }));
                break;
            case "Save to File":
                let fd = fs.openSync("./contactDetails.txt", "w");
                fs.writeFileSync(fd, JSON.stringify(contactDetails));
                break;
            case "Quit the app":
                process.exit();
                break;
            default:
        }

        console.log("---------");

    }
}

console.log(chalk.yellow('Hello World!'));

// inquirer.prompt(questions)
// .then(answer => {
//     let name = chalk.red(answer.name);
//     let phone = chalk.green(answer.phone);
//     console.log(`Thank you ${name}, your phone number is ${phone}`);
// });

main();