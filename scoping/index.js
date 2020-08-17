//? global scope

//global scoped variable
// let firstName = "Rick Sorkin";
// console.log(firstName);

const hiddenAway = () => {
}



const tellMeMyName = () => {
    let firstName = "Rick Sorkin"
    let secondName = "Tabatha"
    // console.log(`Your name is ${firstName}.`);
    console.log(`Your last name is ${secondName}`) // secondName is not defined
    // let secondName = "Bobatha" // Cannot access 'secondName' before initialization
    const cheese = {
        type: "cheddar"
    }
    console.log(cheese)
}

const againTellMeMyName = () => {
    // firstName = "Mike Ross"
    console.log(cheese)
    console.log(`Your name is ${firstName}, please listen.`)
    console.log(`Your last name is in fact ${secondName}`); // secondName is not defined
}

// tellMeMyName()
// againTellMeMyName()

//* scope chain: if JS cannot find a variable, value, anything it has been asked to locate, it looks backwards and outwards to its previous scope... 
//! IT CANNOT LOOK INSIDE ANOTHER FUNCTION. OKAY? GOT IT? YOU GET ME? ARE YOU SURE? GOOD.

//! const functionOne = () => {
//!     console.log(10)
//!     const functionTwo = () => {
//!         console.log('You have won £1,000,000')
//!     }
//!     functionTwo()
//! }

//! functionOne()


//? function scope
let stringNew = "I am a let";
var stringOld = "I am a var";

const newStringFunction = () => {
    let stringNew = "new let";
    var stringOld = "new var";

    console.log(`Inside, Matthew, I am: ${stringNew}`);
    console.log(`Inside, Matthew, I am: ${stringOld}`);
}

newStringFunction();

console.log(`Outside, Matthew, I am: ${stringNew}`);
console.log(`Outside, Matthew, I am: ${stringOld}`);

//? block scope

function letStart() {
    for (let i = 0; i < 5; i++) {
        if(true) {
            let name = "True"
            console.log(i, name);
        }
    }
    console.log(i, name); // what will this say?
}

function varStart() {
    for (var i = 0; i < 5; i++) {
        if(true) {
            if(true) {
                var secondName = "False"
                let otherThing = "something or other"
            }
            var name = "True"
            console.log(i, name);
        }
    }
    console.log(i, name, secondName); // what will this say?
}

// console.log("Ran with a let:");
// letStart()
console.log("Ran with a var:");
varStart()

function nameThing() {
    console.log(secondName)
}

nameThing()