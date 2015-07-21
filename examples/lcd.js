var five = require("johnny-five"),
  board, lcd;

board = new five.Board();

board.on("ready", function() {

  lcd = new five.LCD({
    // LCD pin name  RS  EN  DB4 DB5 DB6 DB7
    // Arduino pin # 7    8   9   10  11  12
    pins: [7, 8, 9, 10, 11, 12],
    rows: 2,
    cols: 16
  });

  // Tell the LCD you will use these characters:
  lcd.useChar("check");
  lcd.useChar("heart");
  lcd.useChar("duck");

  // Line 1: Hi NodeBots Day!
  lcd.clear().print("Hi Nodebots Day");
  lcd.cursor(1, 0);

  // Line 2: I <3 johnny-five
  lcd.print("I :heart: johnny-five");

  this.wait(3000, function() {
    // after 3000ms print I tick, heart 2 duck. Good for special chars.
    lcd.clear().cursor(0, 0).print("I :check::heart: 2 :duck: :)");
  });

  this.repl.inject({
    lcd: lcd
  });
});
