//? DOM - Document Object Model
//? JS make the DOM alter a website / webpage
//? global object - represents the content on the page, our html.

//* select elements of a page that is already loaded and modify them.
//* change paragraph's color... we can do that with JS.

//* select elements
//* manipulating elements
//* doing something when a user wants us to
//* click, an enter, a hover, a highlight... anything that user can do, the dom can do better. the dom can do anything better than youSER.

//* variables and constants 
const myHeading = document.getElementById("myHeading");
const input = document.getElementById("input");
const button = document.getElementById("button");

const purpleParagraphs = document.getElementsByClassName("purple")
const notPurpleParagraphs = document.getElementsByClassName("notPurple")
const paragraphs = document.getElementsByTagName("p");
//?                pay close attention to the .getElements

//* functions
myHeading.addEventListener("click", ()=> {
    console.log(`The paragraphs array length is: ${paragraphs.length}`)
    
})



button.addEventListener("click",()=> {
    //? the heading will change color to the input box's value
    // myHeading.style.color = input.value;
    //* targeted an array, the first index of the paragraphs array
    // paragraphs[0].style.color = input.value;
    // for (let i = 0; i < paragraphs.length; i++){
    //     paragraphs[i].style.color = input.value;
    // }

    for(i = 0; i < purpleParagraphs.length; i++) {
        purpleParagraphs[i].style.color = input.value;
    }
    for(i = 0; i < notPurpleParagraphs.length; i++) {
        notPurpleParagraphs[i].style.color = "orange";
    }
    for (const paragraph of purpleParagraphs) {
        console.log(paragraph)
    }
    
})

//! getElement & getElements
//? we can target the element normally with getElement
//? we have to target a particular index with getElements
//? purpleParagraphs[0] || purpleParagraphs[i] for getElements

// TODO: challenge to go here.
