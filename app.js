function myFunction () {
    alert("Hello & Welcome!");
    let helloPrompt = prompt("Have We Met?")
    if (helloPrompt==="Yes"){
        alert("Great! Hi again, in that case!")
    }
    else if (helloPrompt==="No"){
        alert("That's okay! Thanks for visiting my site!")
    }
    else {
        alert("Please try again")
    }
}


myFunction(); 