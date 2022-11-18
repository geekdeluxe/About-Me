'use strict'

let Username = prompt('Hi there, what is your name?');
console.log(Username)

alert(`Welcome ${Username}, lets play a guessing game!`);

let questionOne = prompt( `${Username}, is coffee my favorite drink?`).toLowerCase();
    if (questionOne === 'yes' || questionOne === 'y') {
        alert(`That's correct, ${Username}, I love coffee!`)
    } else if (questionOne ==='no' || questionOne === 'n') {
        alert("That's not quite right, I love coffee!");
    } else {
        alert("That's not the answer I was looking for");
    } 
let questionTwo = prompt('What is my favorite season?').toLowerCase();
    if (questionTwo=== "fall") { 
       alert("That's correct, fall is my favorite season!");
    } else if (questionTwo === 'spring' || questionTwo === 'summer' || questionTwo === 'winter') {
        alert("That's not right, please try again");
    }    
    


function myFunction () {
    alert("Hello & Welcome!");
    let helloPrompt = prompt("Username, Have We Met?")
    if (helloPrompt==="Yes"){
        alert("Great! Hi again, in That Case!")
    }
    else if (helloPrompt==="No"){
        alert("That's okay! Thanks for visiting my site!")
    }
    else {
        alert("Please try again")
    }
}


myFunction(); 