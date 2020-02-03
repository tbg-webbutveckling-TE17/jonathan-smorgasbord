var events = require("events");
var eventEmitter = new events.EventEmitter();

var myEventHandler = function() {
    console.log("Hello, is anybody there?")
}

eventEmitter.on("footsteps", myEventHandler);

eventEmitter.emit("footsteps");
