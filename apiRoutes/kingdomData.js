const express = require('express');
const api = express.Router();
const db = require("D:/Coding/KingsRoyale/API/utils/database.js");
const con = db.getConnection();

api.get('/:kname?', function (req, res) {
  var kname = req.params.kname;
  con.query("SELECT * FROM kingdoms WHERE name=?", [kname], function (err, result) {
    if (err) throw err;
    if (result[0] != null && result[0] != undefined) {
      //Just extracts the Kingdom data without [{data}] now its {data}
      res.send(result[0]);
    } else {
      res.writeHead( 900, 'Kingdom does not exist', {'content-type' : 'text/plain'});
      res.end( 'Kingdom does not exist!');
    }
  });
});

api.post('/createKingdom', function (req, res) {
  var owner = req.body.user.name;
  var pswd = req.body.user.pswd;
  var kname = req.body.kingdom.name;

  con.query("SELECT password FROM userAccounts WHERE username=?", [owner], function (error, result) {
    if (error) throw error;

    if (result[0] == null || result[0] == undefined) {
      res.writeHead( 800, 'Account does not exist', {'content-type' : 'text/plain'});
      res.end( 'Account does not exist!');
    }

  });

  con.query("SELECT * FROM kingdoms WHERE owner=?", [username], function (err, result) {
    if (err) throw err;
    if (result[0].name == null || result == undefined) {
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
