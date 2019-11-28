# Challenge_07

Provided by Coder Academy:
* [source](https://edstem.org/courses/3790/challenges/6691)
* [source](https://edstem.org/courses/3790/challenges/6691)

## Arguments
*(exercise_01.js)*

Create a function that will take any number of arguments. Multiply all these arguments together, and return the result. If no arguments are entered, return 0.

**E.g.** multipleArguments(1, 2, 3, 4, 5, 6, 7), should return 5040

## Challenge
*(exercise_02.html)*
Sometime we need random user data in our app. There's an app for that! Random User

1. Save a copy of [this file](https://coderacademyedu.github.io/resources/unit_callbacks_randomuser.html) to your machine.
2. Open the file in your editor.
3. Examine the code. Think about what might happen when you run the file.
4. Open the file in your browser to validate your expectations.
5. With console open, refresh and you should see a response object after a second or two.
6. Examine the response object in console, find the property which contains the response JSON.
7. Update your console.log to log only the response JSON, not the entire object.
8. Create a new function: parseRandomUser
9. Update your code to use a callback i.e. pass getRandomUser the parseRandomUser function. Your goal is to get parseRandomUser logging the random user details.
10. Read about [error-first callbacks](http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/). Can you implement error handling? The Random User request might not always respond the way we expect.

## Beast Mode
*(exercise_03.html)*
1. Display random user details in the browser
2. Add a button to grab a new random user

## Beast Mode++
Learn more about callbacks: http://callbackhell.com/
Look under the hood: What the heck is the event loop anyway?