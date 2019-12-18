# Challenge_20

Provided by Coder Academy: [source](https://coderacademy.instructure.com/courses/239/pages/react-and-jsx-intro)

## Core
*(exercise_01.js)*

Core:
// Create a function called vowelCount.
// This function should count the number of the lowercase vowel letters and uppercase vowel letters in the string.
// Then should return the count of both of these

"use strict";

const str = "Today is best day of my LIFE!";
const str1 = "All thE vOwEls ArE spEcIAl";
const str2 = "How now brown cow? Ah, not bad, thanks.";

// Write function here

console.log(vowelsCount(str));
// {lower: 6, upper: 2}

console.log(vowelsCount(str1));
// {lower: 0, upper: 9}

console.log(vowelsCount(str2));
// {lower: 7, upper: 1}


## Afternoon Challenge
*(react_challenge/)*

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <header>
        <h1>Welcome To Sandras Profile Page</h1>
        <nav>
            <ul>
                <li><a href="#about-me">About Me</a></li>
                <li><a href="#fav-foods">Favourite Foods</a></li>
                <li><a href="#contact">Contact Details</a></li>
            </ul>
        </nav>
    </header>
    <section id="about-me">
        <h2>About Me</h2>
        <img src="https://randomuser.me/api/portraits/women/8.jpg">
        <article>
            <ol>
                <li>
                    <p>
                        <b>Pop</b> culture maven. Beer fan. Award-winning music junkie. Extreme coffee enthusiast. Thinker. Tv specialist.
                    </p>
                </li>
                <li>
                    <p>
                        <b>Friendly</b> web maven. Bacon lover. General internet specialist. Incurable travel scholar.
                    </p>
                </li>
                <li>
                    <p>
                        <b>Subtly</b> charming twitter lover. Social media fan. Incurable travel geek. Lifelong pop culture specialist. Tv scholar.
                    </p>
                </li>
                <li>
                    <p>
                        <b>Unable</b> to type with boxing gloves on. Proud bacon fan. Music junkie. Coffee ninja. Beer specialist.
                    </p>
                </li>
            </ol>
        </article>
    </section>
    <section id="fav-foods">
        <h2>Favourite Foods</h2>
        <div>
            <h4>Pizza</h4>
            <img src="https://bit.ly/2rJ4rnn" />
            <p>Best time to eat: <span>All the time</span></p>
            <p>Best place: <span>Queen Margharitas</span></p>
        </div>
        <div>
            <h4>Quesadillas</h4>
            <img src="https://bit.ly/2ryI6bZ" />
            <p>Best time to eat: <span>Afternoon Siesta</span></p>
            <p>Best place: <span>Mejico</span></p>
        </div>
        <div>
            <h4>Icecream Pancakes</h4>
            <img src="https://bit.ly/2zUznp2" />
            <p>Best time to eat: <span>Breaky</span></p>
            <p>Best place: <span>Pancakes on the Rocks</span></p>
        </div>
        <div>
            <h4>Loaded Fries</h4>
            <img src="https://bit.ly/2GdfYVK" />
            <p>Best time to eat: <span>During the game</span></p>
            <p>Best place: <span>My House</span></p>
        </div>
    </section>
    <section id="contact">
        <h2>Contact Details</h2>
        <p>
            <b>Phone:</b> <i>+12345678</i>
        </p>
         <p>
            <b>Email:</b> <i>thatsme@test.com</i>
        </p>
        <p>
            <b>Twitter:</b> <i>#superfun</i>
        </p>
    </section>
    <footer>
        <h5>Thanks for visiting my profile. Hope to here from you soon!</h5>
    </footer>
</body>
</html>
```

**Core**
Take the above file and break it down into React functional components.
Move each of those components into its own file and export/import them.

**Beast Mode**
Self guided learning
Download all the images and load them into your components where necessary.

**Beast Mode++**
Self guided learning on React props.
https://reactjs.org/docs/components-and-props.html
With this new knowledge how can you refactor your components to be more reusable.