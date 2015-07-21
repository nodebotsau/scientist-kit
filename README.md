# NodeBots Day 2015 Scientist Kit

This year you have a special nodebots kit which has been custom dessigned specifically
for NodeBots day in order for you to get the most out of the day and build
interesting things.

Your kit should contain the following:

* Jumper wires
* 10K, 1K & 220 Ohm Resistor
* Potentiometer 10K
* Red, Green, Yellow, Blue & White LEDs
* RGB LED
* Breadboard
* Arduino Uno
* Mini Servo
* 74HC595 Shift Register
* Pushbuttons
* Photo Resistor
* Temperature Sensor
* Piezo buzzer
* LCD Screen
* NeoPixel Strip
* Sound sensor

As you can see - lots of things to play with, learn about and take further.

## Installation and setup

To get installed it's assumed you have the [Arduino IDE](http://arduino.cc), 
and [NodeJS](http://nodejs.org) installed. 

Clone this repository as:

```
git clone https://github.com/nodebotsau/scientist-kit.git
```

### Install arduino drivers

If you're on Windows or Mac, you'll need the CH340 drivers to talk to your
arduino. In the `drivers/` folder you can find one for OSX and one for Windows.
Just install the relevant one and you may need to restart your machine. Once done
plug in your arduino and it should be fine (you'll get an error message if not).

### Install the firmware on the arduino

The next thing you need is a special firmata so you can use all of these
components on your board because the Arduino is way too underpowered to run
javascript. Open up arduino and browse to the repo folder then
go to `firmware/sk_firmata/sk_firmata.ino`

Select from the tools->Board menu "Arduino Uno" then again from the tools menu
but this time port select the port that appears when you plug the arduino in (this
may take a couple of guesses).

Once you've got the right port, select upload and the board should flash and you're
now done.

### Install node dependencies.

From the repo folder simply:

```
npm install
```

And all your dependencies will be installed.

Assuming you've had no issues, move onto the examples.

## Examples

These examples are very simple and have little explanation. They have been
compiled from the `johnny-five` docs and from `node-ardx` package. We recommend
you visit [Johnny Five](http://johnny-five.org) and [Node-ARDX](http://node-ardx.org)
for really detailed versions of these - and the specific examples are linked 
to the appropriate location.

### Blink an LED

The hello world of hardware. [Look at the wiring instructions here](http://johnny-five.io/examples/)
for one of the most basic circuits you can make. The code is available at
[examples/led.js](examples/led.js). 

Run with:

```
node examples/led.js
```

And you should get a blinking LED.

### Write text on an LCD

Want to write some text on a screen? Maybe you could use this to write out the
contents of a tweet, or how much you love NodeBots Day.

[The wiring instructions are here in the Johnny Five docs](http://johnny-five.io/examples/lcd/)

Note:

* Your potentiometer is bigger than the one in the diagram so leave a bit more
space for it.
* Pay attention to what is power and ground on the diagram versus how you wire it up

The code is available at [examples/lcd.js](examples/lcd.js)

Run with:

```
node examples/lcd.js
```

You should see some messages appear on the screen.

### Make something move with a servo

Servos are great to make things move. In the kit is what's called a Standard Servo
and it will move 180 degrees in an arc. So you could use it to make something
wave, or pull a trigger or push something too.

[The wiring instructions are from the Johnny Five docs](http://johnny-five.io/examples/servo-prompt/)

The code is available at [](examples/servo.js)

Run with:

```
node examples/servo.js
```

When it runs you should be able to set values between 0 and 180 and hit enter
and your servo will move to that position.


