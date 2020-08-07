//? template for our objects. 

class Bunny {
    // parameters - we have to pass the value through to the new instance
    constructor(name, breed, feet) {// differentiation between objects and classes {
        this.name = name; // to be given a value
        this.breed = breed; // to be given a value
        this.feet = feet;
        this.hops = 0; // what's different about hops?
        // every new bunny will start with 0 hops.
        // but each bunny will need a name and a breed.
    }
    increaseHops() {
        this.hops++
    }
    decreaseHops() {
        this.hops--
    }
}
// console.log(Bunny())
// new keyword... to create a new instance of our bunny class
const nina = new Bunny("Nina", "floppy-ear", true)
const alex = new Bunny()
// nina.increaseHops()
// console.log(nina)
// const cookie = new Bunny("Cookie", "floppy-ear", 5)
// // console.log(nina)
// console.log(cookie) // hops = 0
// cookie.increaseHops()
// console.log(cookie) // hops = 1
// cookie.decreaseHops()
// console.log(cookie); // hops = 0
// const stuart = new Bunny("Little", "floppy-ear", 3)
// stuart.decreaseHops()
// console.log(stuart) // what should the value of hops be for stuart?

class CodeNation {
    constructor(name, role, location) {
    this.name = name;
    this.role = role;
    this.location = location;
    this.employer = "Code Nation";
    }
}

// student extends CodeNation
// staff extends CodeNation

// const neil = new CodeNationStaff("Neil", ["Senior Guru", "Mentor", "Instructor"], "Manchester")
// console.log(neil.role)

class Animal {
    constructor(name, demo) {
        this.name = name;
        this.demo = demo;
        this.hunger = 100; // higher is worse
        this.thirst = 100; // higher is worse
        this.tiredness = 100; // higher is worse
    }

    eat() {
        this.hunger --; // everytime the animal eats, it gets less hungry
        // hunger goes down by one
    }
    drink() {
        this.thirst--; // everytime the animal drinks, it gets less thirsty
        // thirst goes down by one
    }
    sleep() {
        this.tiredness--;
    }
    makeNoise() {
        console.log(this.noise);
    }
    
}

class Cat extends Animal {
    constructor(name, aloofLevel) {
        super(name); // looks above, and takes the parameters required / requested
        this.aloofLevel = aloofLevel;
        this.noise = "Meow";
    }
    aloofIncreaser() {
        this.aloofLevel++;
    }
}

const whiksers = new Cat("Whiskers", 50)
whiksers.makeNoise()
console.log(whiksers)
// whiksers.sleep()
// whiksers.aloofIncreaser()
// whiksers.meow();
// console.log(whiksers.name)
// console.log(whiksers.aloofLevel)
/* 
Cat {
  name: 'Whiskers',
  hunger: 100,
  thirst: 100,
  tiredness: 100,
  aloofLevel: 50
}
Dog {
  name: 'Buddy',
  hunger: 100,
  thirst: 100,
  tiredness: 100,
  excitementLevel: 100000
}

*/

class Dog extends Animal {
    constructor(name, excitementLevel) {
        super(name)
        this.excitementLevel = excitementLevel;
        this.noise = "Bark"
    }
    excitementIncreaser() {
        this.excitementLevel++
    }
}

const buddy = new Dog("Buddy", 100000);
// buddy.sleep()
// buddy.bark()
// console.log(buddy)
// buddy.sleep()
// buddy.excitementIncreaser()
// console.log(buddy)

//DRY principle - don't repeat yourself. don't repeat yourself. don't repeat yourself. LOL.
// WET principle