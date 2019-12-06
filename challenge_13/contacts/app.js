const chalk = require('chalk');
const inquirer = require('inquirer');

const questions = [
    {
        type: "input",
        name: "name",
        message: "What's your name?",
        validate: function(value) {
            if (value) {
              return true;
            }
            return 'Please enter your name';
        }
    },
    {
        type: "input",
        name: "phone",
        message: "What's your phone number?",
        validate: function(value) {
            let pass = value.match(
              /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
            );
            if (pass) {
              return true;
            }
            return 'Please enter a valid phone number';
        }
    },
    
];

console.log(chalk.yellow('Hello World!'));

inquirer.prompt(questions)
    .then(answer => {
        let name = chalk.red(answer.name);
        let phone = chalk.green(answer.phone);
        console.log(`Thank you ${name}, your phone number is ${phone}`);
    });