const express = require('express');
const api = express.Router();
const db = require("D:/Coding/KingsRoyale/API/utils/database.js");
const con = db.getConnection();

api.get('/:name?', function (req, res) {
  var username = req.params.name;
  var kname = "hi";

  con.query("SELECT * FROM kingdoms WHERE owner=?", [username], function (err, result) {
    if (err) throw err;

    if (result != undefined || result != null) {
      console.log("You already own a kingdom!");
    } else {
      con.query("SELECT * FROM kingdoms WHERE name=?", [kname], function (err, result) {
        console.log('executed');
      })
    }
  })

  con.query("SELECT * FROM kingdoms WHERE owner=?", [username], function (err, result) {
    if (err) throw err;
    var kingdomData;
    for (var i = 0; i < result.length; i++) {
      let kingdom = result[i];
      kingdomData = kingdom;
    }
    res.send(kingdomData);
  })
});

api.post('/createKingdom', function (req, res) {
  var owner = req.body.user.name;
  var pswd = req.body.user.pswd;
  var kname = req.body.kingdom.name;

  con.query("SELECT password FROM userAccounts WHERE username=?", [owner], function (error, result) {
    if (error) throw error;

    if (result == null || result == undefined) {
      res.statusMessage = "Account does not exist!";
      res.status(1000).end();
    }

  });

  con.query("SELECT * FROM kingdoms WHERE owner=?", [username], function (err, result) {
    if (err) throw err;
    if (result.name != null || result.name == undefined) {
      res.send("already own kingdom");
      return;
    }
  });

  con.query("SELECT * FROM kingdoms WHERE name=?", [kname], function (err, result) {
    if (result == null || result == undefined) {
      res.send("kingdom exists");
      return;
    }
  });

  //gets here if the kingdom can be created!
  con.query("INSERT INTO kingdoms (owner, name, provinces, towers, mines, gold, population) VALUES (?, ?, ?, ?, ?, ?, ?)", [owner, kname, 0, 0, 0, 1000, 100], function(error, response) {
    if (error) throw error;
    console.log(`[Kingdom] Kingdom was created with the name: ${kname}`);
  });

});

module.exports = api
