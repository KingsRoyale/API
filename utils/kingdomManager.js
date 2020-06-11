const db = require("D:/Coding/KingsRoyale/API/utils/database.js");
const con = db.getConnection();
const defaultGold = 1000;
const defaultPopulation = 100;

class KingdomManager {

  static createKingdom(owner, name) {
    con.query("INSERT INTO kingdoms (owner, name, provinces, towers, mines, gold, population) VALUES (?, ?, ?, ?, ?, ?, ?)", [owner, kname, 0, 0, 0, 1000, 100], function(error, response) {
      if (error) throw error;
      console.log(`[Kingdom] Kingdom was created with the name: ${kname}`);
    });
  }

}

module.exports = KingdomManager;
