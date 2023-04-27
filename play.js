const net = require("net");

//establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({ //conn is an object, it represents the connection with the server, it will also handle messages from the server.
    host: '192.168.1.72',
    port: 50541
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  })

  //interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();