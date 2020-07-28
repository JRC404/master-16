let dayOfTheWeek = "Tuesday";

if (dayOfTheWeek == "Tuesday") {
    console.log("Yoga at 11:15");
}
else if (dayOfTheWeek == "Friday") {
    console.log("Quiz night is at 5pm");
}
else {
    console.log("Yoga is on a Tuesday at 11:15. Quiz night is on Friday.");
}

// * if a value is equal to my comparison... 
// * THEN do something

// * else if a value is equal to something else

// * ELSE that captures everything else...
// ? comparison operator: compares the value on the left with the value on the right

// ?    == equal but not type dependant. value can be right, type can be wrong
// ?    === strict equal... the value & the type have to match
// ?    != not equal 
// ?    !== strict not equal
// alexNumber = 30

// if (alexNumber == 36) { // type: number & the value 36
//     // console.log("You have matched the type and the value")
//     console.log("Your number is 36")
// }
// else if (alexNumber == 35) { //? will only be reached if the above is not matched
//     console.log("Your number is 35")
// }
// else { // anything else...
//     // if the value doesn't match condition 1 or 2, then do this...
//     console.log("I do not know your number")
// }

// let favouriteMusic = "Cher L";

// if (favouriteMusic == "Miley Cyrus") {
//     console.log("Good choice.")
// }
// else if (favouriteMusic == "Cher") {
//     console.log("Oh, Cher is a good choice too, I guess.");
// }
// else { // wildcard... it captures everything else you haven't checked for.
//     console.log("Why do you not like Miley Cyrus or Cher?")
// }

let age = 3;

if (age < 0) {
    console.log("Input an age, silly.")
}
else if (age < 18) {
    console.log("You cannot come in.");
}
else if (age <= 20) {
    console.log("Younger persons discount")
}
else if (age <= 65) {
    console.log("A few more years and you'll get the senior discount.")
}
else if (age < 100) {
    console.log("You're doing well.")
}

else {
    console.log("Well done, you qualify for 1% off entry.")
}

// let password = "SuperSecret";
// let passwordCheck = "SuperSecret123"

// if (password == passwordCheck) {
//     console.log("You are logged in")
// }
// else {
//     console.log("They don't match. Try again.")
// }

// * if the weather is sunny... say something
// * if the weather is raining... say something
// * if it is snowing, say something
// * if anything else... say something...

let weather = "sunny"
let location = "Manchester"

if (weather == "sunny" && location == "Manchester") {
    console.log("No.")
}
else if (weather == "raining" && location == "Manchester") {
    console.log("Perfect.")
}
else if (weather == "snowing" && location == "Manchester") {
    console.log("Maybe, in April.")
}
else {
    console.log("ummm... ")
}

// ? && for AND
// ? || for OR

// let firstName = "Alex";
// let lastName = "Smith"

// if (firstName == "Alex" && lastName == "Arditti") {
//     console.log("Hi, Alex Arditti.")
// }
// else {
//     console.log("Hello, someone else.")
// }
