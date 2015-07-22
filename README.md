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

Things to note:

* Pin 13 is special because it has a resistor attached to it which means you 
won't blow up an LED by connecting it directly. If you want to use an LED on
any other pin, connect it with a resistor between the LED and the digital pin
on the arduino.

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

Things to note:

* Servos aren't really accurate so don't expect to see perfect changes between 
41 and 42 degrees. they are designed for high torque and big movements.
* Lots of servos will overload your arduino so if you are using more than 2 at 
a time then consider a dedicated battery pack.

The code is available at [examples/servo.js](examples/servo.js)

Run with:

```
node examples/servo.js
```

When it runs you should be able to set values between 0 and 180 and hit enter
and your servo will move to that position.

### Make a light display with neopixels

NeoPixels or WS2812 LEDs are individually controllable LEDs that come in a strip.
The wonderful thing about these LEDs is that they are both RGB so you can set
the colour but they are individually addressable. On the strip you have in your
kit you have 8 so you can set each one to be a separate colour.

[Detailed instructions are available from the node-pixel docs](https://github.com/ajfisher/node-pixel/blob/master/docs/installation.md#hardware-installation)

A simple wiring guide is below:

![](https://raw.github.com/ajfisher/node-pixel/master/docs/custom_firmata_bb.png)

Things to note:

* The more updates you make to the strip the more data has to be processed best
to do all your processing JS side and then send the changes to the arduino when
you're ready to display.

The code is available at [examples/neopixel.js](examples/neopixel.js)

Run with:

```
node examples/neopixel.js
```

When it runs you should see some pixels chasing each other up the strip and
changing colour as they go.

### Make some noise

The sound sensor is a very simple microphone that outputs an analog signal. In
Johnny Five this can be represented very simply as a `Sensor` object. 

[Wiring instructions can be found in the Johnny Five docs](http://johnny-five.io/examples/microphone/)

Things to note:

* Use the F-M wires and connect to the back of the board. S is Signal and goes
to A0, G is Ground and goes to GND, V is voltage and goes to 5V.
* You can't really record something with this type of mic as it doesn't have
much range.

The code is available at [examples/sound.js](examples/sound.js)

Run with

```
node examples/sound.js
```

When it runs if you make some noise like clapping your hands you'll see the values
spike upwards.

### Play that (squeaky) music....

A long term crowd pleaser at every NodeBots event is the Piezo buzzer. This little
bundle of squeaky goodness will play whatever high pitched squawky notes you can
throw at it.

[Here's the wiring diagram from Node-ARDX](http://node-ardx.org/exercises/6)

Things to note (if you pardon the pun):

* Piezo's aren't very loud so you need to be quiet to hear them properly.
* There is a + marked on one side, this goes to the pin, the other side goes to ground
* Piezo's only work on PWM pins - they are the ones marked with `~` on them

The code is available at [examples/piezo.js](examples/piezo.js)

Run with:

```
node examples/piezo.js
```

When it runs you should hear a really squeaky and possibly irritating "tune".

### Is it cold in here or is it just me?

Temperature sensors are great place to start to start measuring environmental
variables as they are pretty accurate for such a small and cheap package. They
are pretty easy to set up too. Have a look at the wiring diagram below.

![Wiring diagram](images/temperature.png)

Things to note:

* Check the direction of the temperature sensor to make sure you have the pins
the right way around. Pins are determined by looking at the "face" of the sensor,
ie the bit with the writing on it and they go from left to right.
* The sensor requires a 2KΩ but you can use 2x1KΩ resistors in series as they
"add up" to 2KΩ when used together like this.
* The code we have here uses a custom controller. In Johnny-Five all components
use controllers so we have generalised classes such as `Temperature Sensor` and 
we can then implement the details and drivers of these for each chip or different
sensor. The LM335 we are using measures directly in °K so needs the `toCelsius`
method provided to do that conversion.
* This circuit is what is known as a [Voltage Divider](https://en.wikipedia.org/wiki/Voltage_divider)
which are really useful for all kinds of sensor measurement circuits.

The code is available at [examples/temperature.js](examples/temperature.js)

Run with:

```
node examples/temperature.js
```

When the code runs you should see the temperature print out in °C, °F & °K.

### Other components and what they do

The other components don't have specific examples but here are some notes around them:

* An RGB LED is simply a red, green and blue LED in one package. Wire it up to 
three digital pins and change the colour. The one in your kit is a `Common Cathode`
RGB LED. [There's a code and wiring example here](http://johnny-five.io/examples/led-rgb/)
* A potentiometer is a variable resistor. In your kit there are two and they
look like dials you can turn. The two outer pins connect to 5V and GND (doesn't
matter which way) and the centre pin connects to an analog pin on the arduino
which you can then read with the [Sensor class](http://johnny-five.io/examples/potentiometer/)
* Push buttons are what you'd expect - buttons you can push and then detect
them. There's a [Button class](http://johnny-five.io/examples/button/) that has
you covered. Use the 10K resistor to pull down the voltage.
* The little computer chip is called a [Shift Register](http://johnny-five.io/examples/shift-register/)
and they are very helpful to drive a lot of LEDs off only a couple of pins on the
arduino. Great if you want to make a countdown or a [binary clock display](https://en.wikipedia.org/wiki/Binary_clock)
* A light sensor is great for looking at ambient light levels in the environment.
It is just another example of the `Sensor Class` and a [great example is in
Node-ARDX](http://node-ardx.org/exercises/9)


