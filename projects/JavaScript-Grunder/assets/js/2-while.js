var answer = prompt("Are we there yet?");

while(answer.toLowerCase() != "yeah" || answer.toLowerCase() == "yes") {
    var answer = prompt("Are we there yet?");
}
alert("We are there!")