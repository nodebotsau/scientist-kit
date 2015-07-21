var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var mic = new five.Sensor("A0");

  mic.on("data", function() {
    console.log(this.value);
  });
});
