const express = require('express');
const app = express.Router();
const db = require("D:/Coding/KingsRoyale/API/utils/database.js");
const con = db.getConnection();

app.post("/createAccount", function (req, res) {
  let uname = req.params.uname;
  let pswd = req.params.pswd;
})

module.exports = app
