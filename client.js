const net = require("net");
const connect = function() {
  const conn = net.createConnection({ //conn is an object, it represents the connection with the server, it will also handle messages from the server.
    host: '192.168.1.72',
    port: 50541
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  })

  conn.on("connect", () => {
    conn.write("Name: HKA");
  })

  //interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;