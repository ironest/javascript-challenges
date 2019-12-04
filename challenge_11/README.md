# Challenge_11

Provided by Coder Academy:
* [source](https://coderacademy.instructure.com/courses/239/pages/promises-review-async-slash-await-and-web-storage?module_item_id=9452)
* [source](https://coderacademyedu.github.io/resources/unit_cookies.html)
* [source](https://coderacademyedu.github.io/resources/unit_web_storage.html)

## Morning Challenge
*(exercise_01.html)*

* Create a landing page that has a header, an image, some lorem ipsum in a paragraph, a button, a colour picker and an input box.
* When someone clicks the button a new random image should take the place of the first one (modify the image=0) to be random number
* When someone chooses a new colour the font colour of the paragraph text should change.
* When someone types in the header the text should change. If the box is ever empty then it should revert back to the default text
* Using the starting code below:

```html
<!DOCTYPE html>
<html>
  <head> </head>
  <body>
    <h1>Welcome!</h1>
    <div>
      <img src="https://picsum.photos/600/400?image=0" />
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin condimentum
      viverra ipsum eu eleifend. Donec tortor risus, auctor nec ultrices id,
      cursus vitae orci. Phasellus lacinia vulputate suscipit. In nec elit in
      justo pretium ultrices. Aliquam convallis maximus nisi. Nunc tempor erat a
      ultricies bibendum. Nam quis massa eget odio mollis consectetur non ut
      purus. Quisque consequat urna volutpat eros placerat pellentesque.
      Phasellus non nisi in nisi dignissim dignissim in eu dolor. Curabitur
      vulputate elit nec cursus ullamcorper. Nulla ac eleifend ante, at semper
      mauris. Quisque tincidunt mattis turpis, vel molestie ipsum pulvinar et.
      Aenean quis ex imperdiet nunc porta mollis sit amet in eros.
    </p>
    <!-- Add your controls under here -->
    <script>
      function randNumber() {
        return Math.floor(Math.random() * 1080);
      }
      //Add your code under here
    </script>
  </body>
</html>
```

## Afternoon Challenge (core)
*(exercise_01.html)*

* Continue the morning challenge, but when someone refreshes their browser all of their previous information should show up on the screen. (Not the defaults)
* When someone closes their browser then the header should return back to the default but all the other changes should remain
* After 2 minutes if someone refreshes their browser the font colour of the paragraph should return back to normal
