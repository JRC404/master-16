//* take a look at objects, what they are, what they do...
//* adding functions to them (all being well.)
//* this keyword... (all being well.)

//* containers - data and functions

//? key-value pair basis
//? name: "Jacob"
//? key: value

const objectDemo = {
    name: "Object Demo",
    key: "value"
}

const staff = {
    // key : value
    name: "Neil",
    role: ["Senior Instructor", "Guru", "Mentor", "Mind-blower"], // 
    languages: ["Python", "JavaScript", "LISP", "SQL", "MongoDB", "Node", "Everything under the sun", "Git"],
    location: "Manchester Campus",
    mood: "Delighted",
    age: 2345,
    drink: "Irn Bru",
    employed: true
}

// staff.name = "Dean"

console.log(staff.name)

let currentTime = 1122;
const developer = {
    name: "Alex",
    role: "Developer",
    hobbies: ["cricket", "DJ", "reading"],
    languages: ["English", "JavaScript", "If I have to, HTML", "Python"],
    laptop: "Windows something or other",
    startingTime: 1000,
    startWork() { // arrow syntax
        console.log("I am starting work.")
    },
    finishWork() { // ES6 syntax object
        // return "Cheese";
        console.log("I am finished with work for the day.")
    },
    roleCheck() {
        if(this.role == "Junior Developer") {
            console.log(`Your role is ${this.role}`)
        }
        else if (this.role == "Senior Developer") {
            console.log(`Your role is ${this.role}`)
        }
        else {
            console.log("Do you even go here?... She doesn't even go here.")
        }
    },
    namePrint() {
        console.log(`Your name is ${this.name}`)
    }

}
// this changes to the object name
developer.roleCheck()
console.log(developer)
// if (developer.laptop == "MacBook Pro") {
//     console.log("Really good choice. I like it.")
// }
// else if (developer.laptop == "Windows something or other") {
//     console.log("It's okay, no one is judging you here, I promise.")
// }
// else {
//     console.log("It's a Chromebook, isn't it?")
// }

// create a starbucks coffee shop object...
/*

    1. Information about store, obvs.
    2. Products it holds (not all of them... unless?)
    3. Special offers on?
    4. Method to check special offers...
        A. If there is a special offer, display it to the user
        B. If there isn't... tell them to come back with a hipster hat on.
    5. Opening and closing times
        A. Open? Closed? (you'll need a variable for the current time)
    6. Seating available
    7. Drive Thru? Does this need a method?
    8. Costa rivals nearby? Duel at dawn?

    Keep it simple. :-)

*/