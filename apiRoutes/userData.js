const express = require('express');
const app = express.Router();
const responseManager = require("D:/Coding/KingsRoyale/API/utils/managers/responseManager.js");
const db = require("D:/Coding/KingsRoyale/API/utils/database.js");
const con = db.getConnection();

app.post("/createAccount", function (req, res) {
  let uname = req.body.user.name;
  let pswd = req.body.user.password;

  con.query("SELECT * FROM userAccounts WHERE username=?", [uname], function(error, account) {
    if (error) throw error;
    if (account != null || accoutnt != undefined) {
      responseManager.usernameTaken(res);
    }
  })

});

module.exports = app
