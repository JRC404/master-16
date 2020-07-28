// we will shorten your code soon.
let dayOfTheWeek = "Sunday";
// if (dayOfTheWeek == "Monday") {
//     console.log("Alarm set at 7am")
// } else if (dayOfTheWeek == "Tuesday") {
//     console.log("Alarm set at 7am")
// } else if (dayOfTheWeek == "Wednesday") {
//     console.log("Alarm set at 7am")
// } else if (dayOfTheWeek == "Thursday") {
//     console.log("Alarm set at 7am")
// } else if (dayOfTheWeek == "Friday") {
//     console.log("Alarm set at 7am")
// } else if (dayOfTheWeek == "Saturday") {
//     console.log("Alarm has not been set")
// } else if (dayOfTheWeek == "Sunday") {
//     console.log("Alarm has not been set")
// } else {
//     console.log("Please enter a day of the week")
// }

// * switch case statement - more efficient if else statement
switch (dayOfTheWeek) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("Wake up at 7am.")
        break;
    case "Saturday":
    case "Sunday":
        console.log("It is the weekend, have a lie in.")
        break;
    default:
        break;
}

let name = "Donna"

switch (name) {
    case "Danny":
        console.log("Hello, I am Danny.")
        break;
    case "Alex":
        console.log("Hello, I am Alex.")
        break;
    case "Donna":
        console.log("Hello, I am Donna.")
        break;
    case "Silvia":
        console.log("Hello, I am Silvia.")
        break;
    case "Janna":
        console.log("Hello, I am Janna.")
        break;
    case "Sam":
        console.log("Hello, I am Sam.")
        break;
    case "Hamza":
        console.log("Hello, I am Hamza.")
        break;
    default:
        console.log("Oh. Hello.")
        break;
}

//* if statement for your favourite pizza toppings

/**
 * if statement
 * 
 * let favouriteTopping = "topping"
 * 
 * if (favouriteTopping == "topping") {
 *  console.log("nice choice...")
 * }
 * else if (favouriteTopping == "toppingTwo") {
 *  console.log("etc etc")
 * }
 */
let favouriteTopping = "sweetcorn"
//* switch case for our favourite pizza toppings
switch (favouriteTopping) {
    case "peppers": // OR
    case "cheese": // OR
    case "jalapeno": // OR
    case "onions": // OR
        console.log(`Your topping ${favouriteTopping} is a good choice`)
        //* string interpolation... putting variables inside of strings
        break;
    case "pineapple":
    case "car tyre":
    case "sweetcorn":
        console.log(`The topping ${favouriteTopping} is a poor choice.`)
        break;
    default:
        console.log(`Your topping ${favouriteTopping} is unheard of.`)
        break;
}

let car = "Ford"
// OR
if (car == "Ford" || car == "GM") {
    console.log("You've got an American car!");
} else if (car == "Peugeot" || car == "Citroen") {
    console.log("You've got a French boy!");
} else if (car == "Honda" || car == "Toyota" || car == "Suzuki") {
    console.log("Japanese cars are dead quiet!");
} else if (car == "Mercedes") {
    console.log("You are proper posh German!");
} else if (car == "Volkswagen") {
    console.log("German aren't that bad at all!");
} else if (car == "Hyundai" || car == "Kia") {
    console.log("South Korean cars are getting popular!");
} else {
    console.log("Your car is not in the top ten companies in the world!");
}






// old way of including variables in strings
// console.log("Your favourite topping is " + favouriteTopping + " and that is a great choice. Your choice of " + favouriteTopping + " is acceptable. Oh, your name is " + name + ". That's cool.")
// new way... 
// console.log(`Your favourite topping is: ${favouriteTopping}. Oh, your name is ${name}. That's cool.`) //? you have remember the ``