# Challenge_04

Provided by Coder Academy: [source](https://coderacademyedu.github.io/resources/unit_js_objects.html)


## Challenge
*(exercise_01.js)*
1. Assign a new empty object to a variable called me
2. On the next line, add one key 'age' and set its value to your age
3. On the next line, add one key 'current location' and set its value to your current location
4. Use console.log to display the age and current location on screen
5. Use code to add an array of hobbies to your me object
6. Use code to delete your age key
7. Iterate through me.hobbies and log each hobby to the screen

## Beast Mode
*(exercise_02.js)*

Using code:
1. Add another item to the end of the hobbies array
2. Delete the first item in the hobbies array
3. Add a mother key, set its value to an empty object
4. Add name, age and location keys to the mother object
5. Add a print_details function to the me object.
6. Call the function to log some details about yourself. I.e. me.print_details() should work
7. Note the difference between calling me.print_details and me.print_details()

## Beast Mode++
*(exercise_03.js)*

Start with the following code:
```javascript
const sydney_campus = { state: 'NSW', street: '7 Kelly St' };
const brisbane_campus = { state: 'QLD', street: '205 N Quay' };
const melbourne_campus = { state: 'VIC', street: '120 Spencer St' };
const coder_academy = { sydney: sydney_campus, melbourne: melbourne_campus, brisbane: brisbane_campus };
```
1. Use console.log and interpolation to display your campus' street and state from the coder_academy object
2. If we use code to delete the state from your campus, will your log of the coder_academy object still work? I.e. did it copy each campus object or does it reference each campus object?
3. Research: [value vs reference](https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0) (a common interview question)
