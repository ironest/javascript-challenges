const { toWords, toWordsOrdinal, } = require('number-to-words');

gifts = [
    "partridge in a pear tree.",
    "turtle doves,",
    "French hens,",
    "calling birds,",
    "gold rings,",
    "geese a-laying,",
    "swans a-swimming,",
    "maids a-milking,",
    "ladies dancing,",
    "lords a-leaping,",
    "pipers piping,",
    "drummers drumming,"
]

for(let i=1; i<=gifts.length; i++) {
    console.log(`\nOn the ${toWordsOrdinal(i)} day of Christmas my true love sent to me`);

    for(let j=i; j>0; j--) {

        if (j == 1 &&  i > j)
            prefix = 'and a'
        else if (j == 1)
            prefix = 'a'
        else
            prefix = `${toWords(j)}`

        prefix = prefix.charAt(0).toUpperCase() + prefix.slice(1)

        console.log(`${prefix} ${gifts[j-1]}`)
    }

}
