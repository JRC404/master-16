let car = "Peugeot";
const carSelector = (car) => {
    switch (car) {
        case "Ford":
        case "GM":
            console.log("You've got an American car!")
            break;
        case "Peugeot":
        case "Citreon":
            console.log("You've got a French boy!");
            break;
        case "Honda":
        case "Toyota":
        case "Suzuki":
            console.log("Japanese cars are dead quiet!");
            break;
        default:
            console.log("Your car is not in the top ten companies in the world!");
            break;
    }
}

// carSelector()
// carSelector()
// carSelector()

// function logger(name, age) {
//     console.log(`Your name is ${name}. Your age is ${age}.`)
// }

// logger("Jacob", 55)
// logger("Danny", 21)
// logger("Sam", 30)
// logger("Donna", 25)
// logger("Alex", 48)
// logger("Dean", 75)

// function alarmSetter(dayOfTheWeek) {
//     switch (dayOfTheWeek) {
//         case "Monday":
//         case "Tuesday":
//         case "Wednesday":
//         case "Thursday":
//         case "Friday":
//             console.log("Wake up at 7am.")
//             break;
//         case "Saturday":
//         case "Sunday":
//             console.log("It is the weekend, have a lie in.")
//             break;
//         default:
//             console.log("Set an alarm just in case")
//             break;
//     }
// }

// alarmSetter("Monday")
// alarmSetter("Tuesday")
// alarmSetter("Wednesday")
// alarmSetter("Thursday")
// alarmSetter("Sunday")

/* const takeOrder = (size, drinkType, shop) => {
    console.log(`You ordered a ${size} ${drinkType} at ${shop}`)
    switch (size) {
        // if small
        case "small":
            console.log("Your drink is $0.99.")
            break;
        // else if medium
        case "medium":
            console.log("Your drink is $0.89")
            break;
        // else if large
        case "large":
            console.log("Your drink is $0.59")
            break;
        default:
            console.log("You have inserted an incorrect drink size")
            break;
    }
} */



//* small, medium, large
//* coke, fanta, water, 7UP
//* have 5 different orders with different drinks and sizes
//* 5 console logs displayed
//* Please make the if statement a switch case

/* takeOrder("extra-large", "coke", "McDonalds")
takeOrder("medium", "fanta", "KFC")
takeOrder("large", "water", "Walmart")

const SayHello = (name, age) => {
    console.log(`Hello, ${name}. You are ${age} years old.`)
}

SayHello("Jacob", 55)
SayHello("Donna", 25)

//? Inside of the () - parameters (name, age) - parameters

//* make this a function
numberOne = 10
numberTwo = 20
console.log(numberOne + numberTwo)
numberOne = 100
numberTwo = 50
console.log(numberOne + numberTwo)

const addNumbers = (numberOne, numberTwo) => {
    console.log(numberOne + numberTwo)
} */

/* addNumbers(10, 20)
addNumbers(100, 50) */

const cashWithdrawl = (accountNumber, amountWithdrawn, balance) => {
    // accountNumber
    // amountWithdrawn
    // balance
    //? what do I have do to withdraw from account
    //? PART 1: log the parameters in the console
    if (amountWithdrawn <= balance) {
        balance -= amountWithdrawn //* takes the value of balance and amountWithdrawn and updates balance.
        console.log(`Withdrawing £${amountWithdrawn} from ${accountNumber}. You have £${balance} left.`);
    }
    // else if (amountWithdrawn > balance) {
    //     console.log("Do you want an overdraft?")
    // }
    else {
        console.log(`You don't have enough money. You tried to withdraw £${amountWithdrawn} when you only have £${balance} left.`)
    }
    // balance -= amountWithdrawn // what's the issue with this?
    // this doesn't check if there is enough money in the account...
    // * PART 2: actually take the amount away from the balance!!
}

cashWithdrawl(12345678, 1000, 1000);