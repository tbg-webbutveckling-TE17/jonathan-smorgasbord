// alert("Hello");

var myName = "Jonathan";
var myAge = 18;
var isEvil = true;

if (myAge < 18) {
    alert("You are not old enough to drive");
} else {
    alert("You are old enough to drive!");
}

if (myName == "Jonathan") {
    alert("Get out");
} else {
    alert("AYE YO COME IN");
}

var hasWatched = false;

if (isEvil == true) {
    alert("Du är på den rätta sidan");
} else {
    alert("Du är på fel sida");
}

/*
    ************
    Guessing App
    ************ 
*/

var secretNumber = 7;
var correctNumber = false;

while(correctNumber === false) {
    var guessedNumber = Number(prompt("Enter a number from 1-10"));
    if (guessedNumber === secretNumber) {
        document.writeln("You guessed it!");
        correctNumber = true;
    } else if (guessedNumber === secretNumber+1 || guessedNumber === secretNumber-1) {
        document.writeln("Det bränns")
    } else if (guessedNumber < secretNumber) {
        document.writeln("Du gissade för lågt")
    } else if (guessedNumber > secretNumber) {
        document.writeln("Du gissade för högt")
    }
    else {
        document.writeln("WRONG");
    }
}

