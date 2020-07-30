let hobbies = "cars, football, coding";
let shoppingList = "chicken, milk, bread"

let drink = ["green tea", "coffee", "coke", "stella artios"];
let favouriteNumber = [17, 36, 8, 7, 313, 14, 25, 4]
// array = list
// console.log(drink) // log all values in a line
// console.table(drink) // log all values in table
// console.table(favouriteNumber)
favouriteNumber[7] = 45897.3
// console.table(favouriteNumber)
// console.log(favouriteNumber.toString())
favouriteNumber.reverse()
// favouriteNumber.findIndex(1)
// console.table(favouriteNumber)

// console.table(favouriteNumber)

//* create an array of your favourite music artists - minimum of 5 artists
let favouriteMusicArtists = ["ABBA", "Chic", "Artic Monkeys", "Kaiser Chiefs", "The Beatles"];
// * The Prodigy
// * The Red Hot Chilli Peppers
// favouriteMusicArtists[4] = "The Prodigy" // replaces the value already in [4]
favouriteMusicArtists.push("The Prodigy"); // add on to the end of an array
favouriteMusicArtists.pop(); // remove the last item in an array
favouriteMusicArtists.shift() // removes the first item in an array
favouriteMusicArtists.unshift("Chic") // adds an item to the start of an array
favouriteMusicArtists.splice(2, 2) // keep this here...
// favouriteMusicArtists.shift() // removes the first item in an array
// console.table(favouriteMusicArtists)
// splice: first parameter is the starting index... the second parameter is how many items do you want to remove?
// favouriteMusicArtists.filter() // when we look deeper into arrow syntax, we will use this

// console.table(favouriteMusicArtists)
// index - values
// 0     - green tea
// 1     - coffee
// 2     - coke
// 3     - stella artios

//? index / counting at 0
// console.log(drink[0]); // the first value in the list
// console.log(drink[1]); // the second value
// console.log(drink[2]); // the third
// console.log(drink[3]); // the fourth
// drink[3] = "magners"
// console.log(drink.length)

//? create a few arrays of your choice... anything that contains a list... football teams, favourite coding schools... 
//? append an item to the end of an array - spot on
let sampleArray = ["Hello", "World", "Cheese", "Dairy", "Milk"]
sampleArray.push("Again")
console.table(sampleArray)
//? remove an item from the end
// sampleArray.pop() // remove an item from the end
// console.table(sampleArray)
//? remove the 3rd item only from an array
// sampleArray.splice(1,4) // remove index 2... the third item.
// console.table(sampleArray)
//? remove from the front
// sampleArray.shift() // removes from the front
// console.table(sampleArray)
//? console.table specifc values... eg. index 1, index 4
// console.log(sampleArray[2])
//? sort an array
// sampleArray.sort()
// console.table(sampleArray)

//? how would we copy an array?
console.log("my new array")
let sampleArrayCopy = [...sampleArray]; // ... spread operator
let sampleArrayCopyWithSlice = sampleArray.slice(0, 6) // slice will select a portion of your array...
console.table(sampleArrayCopy) // copy of our first array
console.table(sampleArrayCopyWithSlice) // copy of our first array