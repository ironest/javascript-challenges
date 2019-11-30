# Challenge_08

Provided by Coder Academy: [source](https://coderacademyedu.github.io/resources/unit_ajax.html)

## Challenge
*(exercise_01.html)*

1. Create a new 'Tweeter' rails app. Scaffold 'Tweet' with a single field: 'message'
2. Start your Rails server and add a few tweets.
3. Create a new HTML document, add jQuery.
4. Use jQuery to send a request to your Rails server, GET all the tweets. You'll need to resolve the CORS issue, Google :).
5. Display all of these tweets on your page. Add some styling or use a framework to make it look more Twitter-esque
6. Replace your jQuery AJAX with Fetch.

## Beast Mode
*(exercise_02.html)*

1. Add a form to the top of the page which allows the user to create a new tweet. Once created (use AJAX), the tweet should appear at the top of your list of tweets.
2. Add a 'delete' button to each tweet. This should send a DELETE request to your server. Fade out the tweet if it is deleted successfully.
3. Update your model to include a 'starred' boolean. Users should be able to star/favorite  tweets. Add some kind of star icon on the front end.

## Beast Mode++
*(exercise_03.html)*

1. Work on authentication/multiple users
