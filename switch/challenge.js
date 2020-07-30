/* let car = "GM";

switch (car) {
    case "Ford", "GM":
        console.log("You've got an American car!")
        break;
    case "Peugeot", "Citreon":
        console.log("You've got a French boy!");
        break;
    case "Honda", "Toyota", "Suzuki":
        console.log("Japanese cars are dead quiet!");
        break;
    default:
        console.log("Your car is not in the top ten companies in the world!");
        break;
} */

//? cinema goers!

/** 
 * Write an if statement that checks the ages of
cinema goers, and display the ticket prices:
- Child (below age of 18): £8
- Adult (18+): £10.95
- Senior (60+): £7.50
 */

let age = 18;
let childPrice = 8;
let adultPrice = 10.95;
let seniorPrice = 7.50;

const ageVerification = (age) => {
    if (age < 18) {
        console.log(`Your ticket will be £${childPrice}`);
    } else if (age < 60) {
        console.log(`Your ticket will be £${adultPrice}`);
    } else if (age >= 60) {
        console.log(`Your ticket is £${seniorPrice}`);
    } else {
        console.log("We didn't understand your age.");
    }
}

let small = 0.99;
let medium = 0.89;
let large = 0.59

const takeOrder = (size, drinkType, shop) => {
    console.log(`You ordered a ${size} ${drinkType} at ${shop}`)
    switch (size) {
        // if small
        case "small":
            console.log(`Your drink is $${small}`);
            break;
        // else if medium
        case "medium":
            console.log(`Your drink is $${medium}`)
            break;
        // else if large
        case "large":
            console.log(`Your drink is $${large}`)
            break;
        default:
            console.log("You have inserted an incorrect drink size")
            break;
    }
}

const total = () => {
    takeOrder("small", "coke", "Odeon")
    ageVerification(17); // 8
}

// ageVerification(25); // 10/95
// ageVerification(65); // 7.50
// ageVerification("cheese"); // We didn't understand your age

total()