var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = []; 
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 

document.onkeyup = function(event) {
    var userGuess = event.key; 
    var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)]; 
        guessesSoFar.push(userGuess);
    if (userGuess == computerGuess) {
        wins++;
        alert("Right! You WON!");
        guessesLeft = 9; 
        guessesSoFar.length = 0; 
    }
    else if (guessesLeft == 0){
        losses++;
        alert("Wrong.. You LOST");
        guessesLeft = 9;
        guessesSoFar.length = 0;
    }
    else if (userGuess !== computerGuess){
        guessesLeft--; 
    }  
      
    var html = "<h1> Psychic Game</h1>" + 
    "<p>Guess what letter I'm thinking of.</p>" +
    "<p> Wins: " + 
    wins + 
    "</p>" +
    "<p> Losses: " + 
    losses + 
    "</p>" +
    "<p>Guesses Left: " + 
    guessesLeft + 
    "</p>" +
    "<p>Your Guesses so far: " +
    guessesSoFar +
    "</p>"
    ;
   
    document.querySelector("#game").innerHTML = html;

  
}