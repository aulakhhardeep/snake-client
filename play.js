const connect = require('./client');
const setupInput = require('./input');

console.log("Connecting ...");
const returnConnValue = connect(); //storing object conn in a variable, conn is interacting with server

setupInput(returnConnValue); //passing object conn in order to send commands/messages to the server.