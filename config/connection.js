const mysql = require('mysql');
let connection;

// if we are using jawsdb on heroku
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  // local mysql server
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: process.env.mysqlUsername,
    password: process.env.mysqlPassword,
    database: "burgers_db"
  });
}




connection.connect((err) => {
  if (err) {
    console.error("error connection: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
})


module.exports = connection;