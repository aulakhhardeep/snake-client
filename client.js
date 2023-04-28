const net = require("net");
const {IP, PORT} = require('./constants');
const connect = function() {
  //establishing the connection with the server
  const conn = net.createConnection({ //conn is an object, it represents the connection with the server, it will also handle messages from the server.
    host: IP,
    port: PORT,
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect", () => {
    console.log("connected");
    conn.write("Name: HKA");
    //conn.write("Move: up");
    
  });

  //interpret incoming data as text
  conn.setEncoding("utf8");
  
  return conn; //returning the object conn from the connect function that allowed us to interact with the server
};


module.exports = connect;