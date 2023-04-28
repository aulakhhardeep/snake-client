//setup interface to handle user input from stdin
let connection; //stores the active TCP connection object
const setupInput = (conn) => { //conn is an object, which will help interacting with server
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); //handleUserInput is a callback, it will be triggered when key will be pressed on the keyboard.
  return stdin; //this returned object stdin will allow to listen for keyboard input and react to it.
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w' || key === 'W') {
    connection.write("Move: up"); //when passing w, connection variable is sending message to server to move the object upwards
  }
  if (key === 'a' || key === 'A') {
    connection.write("Move: left");
  }
  if (key === 's' || key === 'S') {
    connection.write("Move: down");
  }
  if (key === 'd' || key === 'D') {
    connection.write("Move: right");
  }
  if (key === 'h' || key === 'H') {
    connection.write("Say: Going Home?");//displays message when pressing h
  }
  if (key === 'k' || key === 'K') {
    connection.write("Say: Slow Down");
  }
  if (key === 'p' || key === 'P') {
    connection.write("Say: Are you lost");
  }
  if (key === 'i' || key === 'I') {
    connection.write("Say: Need help");
  }
};

module.exports = setupInput;