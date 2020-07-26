const mysql = require("mysql");
const settings = require("./config.js");

function connectDatabase(config) {
  if (config.database === "kingsroyale0") {
    console.log(`${config.database} could not be generated as that season does not exist in the database!`);
    return null;
  }
  const connection = mysql.createConnection(config);
  connection.connect(function (err) {
      if (err) {
        console.error(err);
        throw err;
     } else {
      console.log(`Connected to database: ${config.database}`);
    }
  });

  return connection;
}

const mainConnection = connectDatabase(settings.mainConnection);
const currentSeasonConnection = connectDatabase(settings.currentSeasonConnection);
const prevousSeasonConnection = connectDatabase(settings.prevousSeasonConnection);

class Database {

  static getMainConnection() {
    return mainConnection;
  }

  static getCurrentSeasonConnection() {
    return currentSeasonConnection;
  }

  static getPreviousSeasonConnection() {
    return previousSeasonConnection;
  }

}

module.exports = Database;
