const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

// Array.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
console.log("Exercise 1");
let bornAfter1500 = inventors.filter( (i) => {
  return (i.year >= 1500 && i.year < 1600);
});
console.log(bornAfter1500);

// Array.map()
// 2. Give us an array of the inventors' first and last names
console.log("Exercise 2");
let fullNames = inventors.map( (i) => {
  const {first, last} = i;
  return {first: first, last: last};
});
console.log(fullNames);

// Array.sort()
// 3. Sort the inventors by birth date, oldest to youngest
console.log("Exercise 3");
let sortedByDoB = inventors.sort((a, b) => a.year - b.year);
console.log(sortedByDoB);

// Array.sort()
// 4. Sort the inventors by years lived
console.log("Exercise 4");
let sortedByAgeLived = inventors.sort((a, b) => (a.passed - a.year) - (b.passed - b.year));
console.log(sortedByAgeLived);

// Array.filter()
// 5. Create a list of Boulevards in Paris that contain 'de' anywhere in the name, you'll need to create your own array
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
console.log("Exercise 5");
const boulevards = ["Boulevard Auguste-Blanqui", "Boulevard Barbès", "Boulevard Beaumarchais", "Boulevard de l'Amiral-Bruix", "Boulevard Mortier", "Boulevard Poniatowski", "Boulevard Soult", "Boulevard des Capucines", "Boulevard de la Chapelle", "Boulevard de Clichy", "Boulevard du Crime", "Boulevard du Général-d'Armée-Jean-Simon", "Boulevard Haussmann", "Boulevard de l'Hôpital", "Boulevard des Italiens", "Boulevard Lefebvre", "Boulevard de la Madeleine", "Boulevard de Magenta", "Boulevard Marguerite-de-Rochechouart", "Boulevard Montmartre", "Boulevard du Montparnasse", "Boulevard Raspail", "Boulevard Richard-Lenoir", "Boulevard Saint-Germain", "Boulevard Saint-Michel", "Boulevard de Sébastopol", "Boulevard de Strasbourg", "Boulevard du Temple", "Boulevard Voltaire", "Boulevard de la Zone"];
let boulevardsWithDe = boulevards.filter((blv) => blv.includes("de"));
console.log(boulevardsWithDe);

const peopleOne = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
// Array.sort()
// 6. Sort the peopleOne alphabetically by last name
console.log("Exercise 6");
peopleOneSorted = peopleOne.sort((a, b) => {
  if (a>b) return 1;
  if (a<b) return -1;
  return 0;
});
console.log(peopleOneSorted);

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Array.find()
// Find is like filter, but instead returns just the one you are looking for
// 7. Find the comment with the ID of 823423
console.log("Exercise 7");
let resComment = comments.find(c => c.id === 823423)
console.log(resComment);

// Array.findIndex()
// 8. Find the comment with this ID
console.log("Exercise 8");
let commentId = comments.findIndex(c => c.id === 823423)
console.log(commentId);

// 9. Delete the comment with the ID of 823423
console.log("Exercise 9");
comments.splice(commentId, 1);
console.log(comments);

const peopleTwo = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

// Array.some()
// 10. is at least one person 19 or older?
console.log("Exercise 10");
console.log(peopleTwo.some(p => {
  const currYear = new Date().getFullYear();
  return (currYear - p.year >= 19);
}));

// Array.every()
// 11. Is everyone 19 or older?
console.log("Exercise 11");
console.log(peopleTwo.every(p => {
  const currYear = new Date().getFullYear();
  return (currYear - p.year >= 19);
}));

// reduce is one of those functions that is very difficult to use at first
// give it a go and ask teachers if you need some help

// Array.reduce()
// 12. How many years did all the inventors live?
console.log("Exercise 12");
let totalYear = inventors.reduce((acc, curr) => {
  return acc + curr.passed - curr.year  
}, 0)
console.log(totalYear);

// Array.reduce()
// 13. Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

console.log("Exercise 13");

let instanceData = data.reduce((acc, curr) => {
  if (!acc[curr]) acc[curr] = 0;
  acc[curr]++; 
  return acc;
}, {});

console.log(instanceData);

// source: wes bos (edited by harrison and aaron)