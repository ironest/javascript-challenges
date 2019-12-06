# Challenge_13

Provided by Coder Academy: [source](https://coderacademyedu.github.io/resources/unit_cli_tool.html)

## Challenge
*contacts/*

1. Create a new project called 'contacts'.
2. Inside 'contacts', create an app.js file, set the contents to:
`console.log('Hello World!')`
3. From your terminal, use Node.js to run app.js - you should see 'Hello World' on the screen.
4. In your project, initialize NPM.
5. Install the Chalk package and colour your Hello World message.
6. Install the Inquirer package. Ask the user for their name and then ask for their phone number.
7. Display the information back to the user on screen. Use the Chalk package to make it look cool.

## Beast Mode
*contacts/*

1. We can automatically restart the server when the code changes. Install [Nodemon](https://www.npmjs.com/package/nodemon) globally and then use it to run your code
`npm install -g nodemon`
`nodemon app.js`
2. Store the contact details in a hash.
3. Use Inquirer to display a menu to the user. Allow the user to: add a contact, remove a contact or view all contacts.
4. Instead of the app ending each time, take the user back to the menu.
5. Add a quit option to the menu.
6. Allow the user to view a specific contact. E.g. Take a name and return a number.
7. Data is lost everytime you restart the app. Persists the data by reading/writing a file.

## Beast Mode++
1. Incorporate some more features/packages into your app. Ideas: geocoding, password protection, encryption.