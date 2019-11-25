# Challenge_02

Provided by Coder Academy: [source](https://coderacademyedu.github.io/resources/afternoon_challenge_most_watched_movies.html)

## Challenge
*(exercise_01.js)*
1. Implement topWatchlistedMoviesAmongFriends method that will return an array of top four movie titles, that have been most watchlisted by friends of a given user.
2. If there are no such movies, then an empty list should be returned or as many movies as possible.
3. Movies that have equal watchlist count, should be ordered alphabetically.
4. Use the arrays below to test your solution:

```javascript
Added
```

**Example**
E.g. topWatchlistedMoviesAmongFriends(62289), should return: ["Schindler's List", "Pulp Fiction", "The Dark Knight", "The Shawshank Redemption"]

In the example above, user with id 62289 has two friends: user with id=15291 and with id=7001.
Schindler's List is watchlisted by both users, so it will be the most watchlisted

E.g. topWatchlistedMoviesAmongFriends(15291), should return: ["The Dark Knight", "Schindler's List", "The Shawshank Redemption", "Pulp Fiction"]

In the example above, user with id 15291 has three friends: users with id=7001, id=51417 and id=62289.
The Dark Knight is the most watched.
Schindler's and Shawshank have both been watched twice, so will be in alphabetical order.
Pulp Fiction and The Godfather have both been watched once, but Pulp fiction comes earlier alphabetically ("P.." vs "T..") so it makes the top 4.