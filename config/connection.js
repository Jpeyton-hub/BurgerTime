const mysql = require('mysql2/promise');
const dotenv = require("dotenv");
dotenv.config();
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'frwahxxknm9kwy6c.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'abtohhah99q29213',
    password: process.env.PASSWORD,
    database: 'shyt4u3hmkblfp79'
  })
}

  // connection.connect((err) => {
  //   if (err) {
  //     console.error(`error connecting: ${err.stack}`);
  //     return;
  //   }
  //   console.log(`connected as id ${connection.threadId}`);
  // });

  module.exports = connection;