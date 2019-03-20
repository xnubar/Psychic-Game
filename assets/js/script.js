var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var guesses_left = document.getElementById("guesses-left");
var your_guesses = document.getElementById("your-guesses");
var userGuess;

var letter = randomLetter();

function reStart() {
    your_guesses.innerHTML = "";
    letter = randomLetter();
    guesses_left.innerHTML = 9;
}

function randomLetter() {
    var index = Math.floor(Math.random() * 27);
    return letters[index];
}

function won() {
    wins.innerHTML = parseInt(wins.innerHTML) + 1;
}

function lost() {
    losses.innerHTML = parseInt(losses.innerHTML) + 1;
}

function guessDecrement() {
    guesses_left.innerHTML = parseInt(guesses_left.innerHTML) - 1;
}

function updateYourGuesses() {
    if (your_guesses.innerHTML === "") {
        your_guesses.innerHTML = your_guesses.innerHTML + userGuess;
    } else {
        your_guesses.innerHTML = your_guesses.innerHTML + ", " + userGuess;
    }

}
window.onkeyup = function (event) {

    userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    updateYourGuesses();
    if (parseInt(guesses_left.innerHTML) > 0 && parseInt(guesses_left.innerHTML) <= 9&&letters.indexOf(userGuess)!=-1) {
        if (letter === userGuess) {
            won();
            reStart();
            letter = randomLetter();
        } else {
            guessDecrement();
        }
    } else {
        lost();
        reStart();
    }

}