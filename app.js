'use strict';

let Username = prompt('Hi there, what is your name?');

let correctGuesses = 0;




alert(`Welcome ${Username}, lets play a guessing game!`);




let questionOne = prompt(`${Username}, is coffee my favorite drink?`).toLowerCase();
if (questionOne === 'yes' || questionOne === 'y') {
   alert(`That's correct, ${Username}, I love coffee!`)
   correctGuesses += 1
} else if (questionOne === 'no' || questionOne === 'n') {
   alert("That's not quite right, I love coffee!");
} else {
   alert("That's not the answer I was looking for");
}

let questionTwo = prompt('What is my favorite season?').toLowerCase();
if (questionTwo === "fall") {
   alert("That's correct, fall is my favorite season!");
   correctGuesses += 1
} else if (questionTwo === 'spring' || questionTwo === 'summer' || questionTwo === 'winter') {
   alert("That's not right, please try again");
}

let questionThree = prompt('What is my favorite kind of music?').toLowerCase();
if (questionThree === "soul") {
   alert("That's right! Soul (especially from the 50s-60s) is my favorite kind of music!");
   correctGuesses += 1
} else if (questionThree === 'rock' || questionThree === 'rock & roll' || questionThree === 'rock and roll') {
   alert("That's not right, please try again");
}

let questionFour = prompt('Do I love the rain?').toLowerCase();
if (questionFour === 'yes') {
   alert("That's correct! I love to drink coffee in the fall while listening to soul and enjoying the rain!");
   correctGuesses += 1
} else if (questionFour === 'no' || questionFour === 'n') {
   alert("That's not quite right, please try again");
}

let questionFive = prompt('Do I have a cat?').toLowerCase();
if (questionFive === 'yes' || questionFive === 'y') {
   alert("That's right! I do have a cat, named Mister!");
   correctGuesses += 1
} else if (questionFive === 'no' || questionFive === 'n') {
   alert("That's not quite right, I do have a cat, named Mister");
}

let questionSix = prompt('Am I From the Midwest?').toLowerCase();
if (questionSix === 'yes' || questionSix === 'y') {
   alert("That's right, I'm from Kansas!");
   correctGuesses += 1
} else if (questionSix === 'no' || questionSix === 'n') {
   alert("Nice guess, but I'm actually from Kansas");
}

let questionSeven = prompt('Do I Collect Books?').toLowerCase();
if (questionSeven === 'no' || questionSeven === 'n') {
   alert("That's not quite right. I do collect (and read) books. I enjoy mostly fiction and literature.");
} else if (questionSeven === 'yes' || questionSeven === 'y') {
   alert("That's right! I love to read and I collect books");
   correctGuesses += 1
}

let questionEight = 'Guess a number between 1 and 10'

let guesses = 4 

let correctAnswer = 8;
let response = null 

while (response != correctAnswer) {
   if (guesses === 0) {
      alert("You've run out of guesses, the correct answer is 8")
      break;
   }
   response = parseInt(prompt(questionEight));
   guesses -= 1
   if (response === correctAnswer) {
      alert("That's correct!");
      correctGuesses += 1 
   } else if (response < correctAnswer) {
      alert("That's too low, please try again");
   } else (response > correctAnswer); {
      alert("That's too high, please try again");
   }
 
   }



var favoriteCountries = ["Denmark", "Netherlands", "France", "Spain", "Italy", "New Zealand"];

let Countriesguesses = 6

for (let i = 0; i < Countriesguesses; i++) {
   let questionNine = prompt('Which of the following countries do I want to visit? (guess one): Netherlands, France, Spain, Italy, Bolivia, New Zealand');
   if (favoriteCountries.includes(questionNine)) {
      alert("Correct!")
      correctGuesses++
      break;
   }
   else {
      alert("Sorry, that's not right");
   }
}
alert(`Congrats! You guessed ${correctGuesses} answers correctly`);
