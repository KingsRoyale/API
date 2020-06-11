const mysql = require("mysql");
const config = require('./credentials.js');
const connection = mysql.createConnection(config);

connection.connect(function (err) {
    if (err) {
      console.error(err);
      throw err;
   } else {
    console.log("Connection to database was successful");
  }
});

class Database {

  static getConnection() {
    return connection;
  }

}

module.exports = Database;
