const express = require('express');
const api = express.Router();

api.get('/:name?', function (req, res) {
  var username = req.params.name;
  var con = req.app.get('MySQLCon');

  con.query("SELECT * FROM kingdoms WHERE owner=?", [username], function (err, result) {
    if (err) throw err;
    let usernames = [];
    for (var i = 0; i < result.length; i++) {
      let kingdom = result[i];
      usernames.push(kingdom);
    }
    res.send(usernames);
  })
});

api.post('/createKingdom', function (req, res) {
  var owner = req.body.user.name;
  var pswd = req.body.user.pswd;
  var kname = req.body.kingdom.name;
  var con = req.app.get('MySQLCon');
  // TODO: add mysql connection and data handling for creating a new kingdom.
});


module.exports = api
