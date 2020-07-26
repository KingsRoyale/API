const mysql = require("mysql");

function connectDatabase(config) {
  const connection = mysql.createConnection(config);
  connection.connect(function (err) {
      if (err) {
        console.error(err);
        throw err;
     } else {
      console.log(`Connected to database: ${config.database}`);
    }
  });
}

let settings = {
  prevousSeason: 0,
  currentSeason: 1
};

let mainConfig = {
  host: "localhost",
  user: "website",
  password: "IU*(&THHGkjhgfkjg&",
  database: `kingsroyale-${settings.currentSeason}`
};
const mainConnection = connectDatabase(mainConfig);


class Database {

  static getMainConnection() {
    return mainConnection;
  }

  static getCurrentSeasonConnection() {
    return currentSeasonConnection;
  }

  static getPreviousSeasonConnection() {
    return previousSeasonConnection
  }

}

module.exports = Database;
