# Challenge_10

Provided by Coder Academy:
* [source](https://gist.github.com/harrisonmalone/0db3c8d53bcb47a5aee1a850a6ceb394)
* [source](https://coderacademyedu.github.io/resources/unit_dom_and_web_apis.html)

## Array methods review
*(exercise_01.js)*


## Challenge
*(exercise_02.html)*

Let's build a todo list. Only use plain old vanilla JavaScript, don't use any JS frameworks. Don't worry about styling for now. [Here's what we're building](https://coderacademyedu.github.io/resources/vanilla_js_todo_demo.html).

We'll build an ugly version first before we worry about styling.

1. Add an input box and a button to your app.
2. When the user clicks the button, make a new todo item appear on the page.
3. Set the input box back to an empty value when a task is added.
4. Show the total number of tasks somewhere.
5. We should be using forms with our input! Wrap your input box and button in a form. Make sure the button is a submit button. You'll need to update your event listener from `on button click` to `on form submit`. Pro tip: preventDefault will be helpful here.
6. We can remove the button. Pressing enter will submit the form.
7. Use [Bootstrap](http://getbootstrap.com/) to make it look similar to the demo.

## Beast Mode
*(exercise_03.html)*

1. Allow tasks to be marked as complete.
2. Add a progress bar to show % of tasks completed.
3. Allow tasks to be removed.

## Beast Mode++
*(exercise_04.html)*

1. Update the input functionality. It should also search the tasks as a user types.
2. Refreshing the page wipes all our data! Find a way to persist data.