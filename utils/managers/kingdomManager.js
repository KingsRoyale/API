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

  static deleteKingdom(name) {
    con.query("DELETE FROM kingdoms WHERE name=?", [name], function(error, response) {
      if (error) throw error;
      console.log(`[KINGDOM] Kingdom has been deleted with the name: ${name}`);
    });
  }

  static updateKingdom(name, field, value) {
    con.query("UPDATE kingdoms SET ?=? WHERE name=?", [field, value, name], function(error, response) {
      if (error) throw error;
      console.log(`[KINGDOM] ${field} has been set to ${value} for kingdom: ${name}`);
    })
  }

}

module.exports = KingdomManager;