//setup interface to handle user input from stdin

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); //handleUserInput is a callback, it will be triggered when key will be pressed on the keyboard.
  return stdin; //this returned object stdin will allow to listen for keyboard input and react to it.
};

const handleUserInput = function(key) {
    if(key === '\u0003') {
      process.exit();
    }
};

module.exports = setupInput;