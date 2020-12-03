//every()

const words = [ "fog" , "dog" , "log" , "bag"];
const threeLetters = words.every( word => word.length === 3);
console.log(threeLetters); //true

const numbers = [ 10, 20, 30, 40, 50 ];
const tenOrMore = numbers.every( num => num > 10);
console.log(tenOrMore); //false

//some()
const books = [{
                title : "Principles",
                authors : "Ray",
                rating : 4.52
            },
            {
                title : "Harry Potter",
                authors : "J.K Rowling",
                rating : 4.81
            },
            {
                title : "Korean Foods",
                authors : "Kim",
                rating : 4.1
            },
        {
                title : "Com Sci",
                authors : "Timothy",
                rating : 4.22
        }
    ];
const kimBooks = books.some( book => book.authors.includes("Kim"))
console.log(kimBooks);//true