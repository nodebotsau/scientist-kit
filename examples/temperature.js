var five = require("johnny-five");

// This is a custom controller for the Temperature Class. You just add
// an initialisation handler and toCelsius handler and the rest of the class
// provides the other aspects.
var LM335_controller = {
    initialize: {
        value: function (opts, dataHandler) {
            var pin = opts.pin;
            this.io.pinMode(pin, this.io.MODES.ANALOG);
            this.io.analogRead(pin, function(data) {
                dataHandler.call(this, data);
            }.bind(this));
        }
    },
    toCelsius : {
        value: function(raw) {
            var mv = (raw/1024.0) * 5000;
            var k = (mv/10);
            return (k-273.15);
        }
    },
};

five.Board().on("ready", function() {
  var temperature = new five.Temperature({
    controller: LM335_controller,
    pin: "A0",
    freq: 1000,
  });

  temperature.on("data", function(data) {
    console.log(data.celsius + "°C " + data.fahrenheit + "°F " + data.kelvin + "°K");
  });
});
