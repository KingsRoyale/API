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

module.exports = {

  getConnection() {
    return connection;
  },

  getDb() {
    return config.database;
  }

};
