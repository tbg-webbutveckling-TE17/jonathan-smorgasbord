var counter = 0;
var el = document.getElementById('seconds-counter');
function incrementSeconds() {
    counter += 1;
    el.innerText = "You have been here for " + counter + " seconds.";
}
var cancel = setInterval(incrementSeconds, 1000);