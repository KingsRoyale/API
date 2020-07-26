const db = require("D:/Coding/KingsRoyale/API/utils/database.js");
const con = db.getCurrentSeasonConnection();
const defaultGold = 10000;
const defaultWood = 1200;
const defaultIron = 800;
const defaultStone = 800;
const defaultPopulation = 700;

class KingdomManager {

  static createKingdom(owner, name, description) {
    con.query("INSERT INTO kingdoms (owner, name, description, population, attack, defense, gold, wood, iron, stone) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [owner, name, description, defaultPopulation, 0, 0, defaultGold, defaultWood, defaultIron, defaultStone], function(error, response) {
      if (error) throw error;
      console.log(`[Kingdom] Kingdom was created with the name: ${name}`);
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
