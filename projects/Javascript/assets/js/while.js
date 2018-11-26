var modifyText = "";
var i = 0;

// while(i <= 10000) {
//     var userInput = Number(prompt("Get a high enough number! Your current number is " + i));
//     i += userInput;
// }
// document.writeln("You got out with " + i + "!")

i = 0;
while(i <= 10000 ) {
    modifyText += "Current number: " + i + "<br/>";
    i = i + 1000;
}
document.getElementById("modifyObject").innerHTML = modifyText;