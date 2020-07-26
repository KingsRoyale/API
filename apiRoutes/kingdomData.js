const express = require('express');
const api = express.Router();
const kingdomManager = require("D:/Coding/KingsRoyale/API/utils/managers/kingdomManager.js");
const responseManager = require("D:/Coding/KingsRoyale/API/utils/managers/responseManager.js");
const db = require("D:/Coding/KingsRoyale/API/utils/database.js");
const con = db.getCurrentSeasonConnection();
const hash = require('object-hash');

api.get('/:kname?', function (req, res) {
  var kname = req.params.kname;
  con.query("SELECT * FROM kingdoms WHERE name=?", [kname], function (err, result) {
    if (err) throw err;
    if (result[0] != null && result[0] != undefined) res.send(result[0]);
    else responseManager.kingdomNotExist(res);
  });
});

api.post('/createKingdom', function (req, res) {
  let owner = req.body.user.name;
  let pswdUnhashed = req.body.user.pswd;
  let kname = req.body.kingdom.name;
  let pswd = hash(pswdUnhashed);

  //Verify the person has an account/their who they say they are.
  con.query("SELECT * FROM userAccounts WHERE username=?", [owner], function (error, result) {
    if (error) throw error;
    let account = result[0];
    if (account == null || account == undefined) responseManager.accountNotExist(res);
    else {
      if (account.password != pswd) responseManager.credentialsWrong(res);
    }
  });

  //Check if the person already has a kingdom
  con.query("SELECT * FROM kingdoms WHERE owner=?", [username], function (err, result) {
    if (err) throw err;
    let kingdom = result[0];
    if (kingdom != null || kingdom != undefined) responseManager.ownerOwnsKingdom(res);
  });

  //Check if kingdom name is taken
  con.query("SELECT * FROM kingdoms WHERE name=?", [kname], function (err, result) {
    if (err) throw err;
    let kingdom = result[0];
    if (kingdom != null || kingdom != undefined) responseManager.kingdomNameTaken(res);
  });

  //Calls if the user is able to create a kingdom.
  kingdomManager.createKingdom(owner, kname);
});

api.post("/deleteKingdom/:kname?/:pswd?/", function(req, res) {
  let kname = req.params.kname;
  let pswdUnhashed = req.params.kname;
  let pswd = hash(pswdUnhashed);

  //Check the kingdom EXISTS
  con.query("SELECT * FROM kingdoms WHERE name=?", [kname], function(error, result) {
    if (error) throw error;
    let kingdom = result[0];
    if (kingdom == null || kingdom == undefined) responseManager.kingdomNotExist(res);
  })

  con.query("SELECT * FROM userAccounts WHERE password=?", [pswd], function(error, result) {
    if (error) throw error;
    let user = result[0];
    if (user == null || user == undefined) responseManager.accountNotExist(res);
  })

  con.query("SELECT * FROM kingdoms WHERE name=?", [kname], function(error, kingdom) {
    if (error) throw error;
    let username = kingdom[0].owner;
    con.query("SELECT * FROM userAccounts WHERE username=?", [username], function(error, user) {
      let password = user[0].password;
      if (password != pswd) responseManager.credentialsWrong(res);
    })
  })

  kingdomManager.deleteKingdom(kname);

})

module.exports = api
