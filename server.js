const express = require("express");
const app = express();
const kingdomData = require("./apiRoutes/kingdomData.js");
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "website",
  password: "IU*(&THHGkjhgfkjg&",
  database: "kingsroyale"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Successfully connected to the database!");

  //CREATE USERACCOUNT TABLE
  con.query("CREATE TABLE IF NOT EXISTS userAccounts (username VARCHAR(255), password VARCHAR(255))");
  //CREATE KINGDOM TABLE
  con.query("CREATE TABLE IF NOT EXISTS kingdoms (owner VARCHAR(255), name VARCHAR(255), provinces INT(2), towers INT(3), mines INT(3), gold BIGINT, population BIGINT)");
});


app.enable('verbose errors');
require('events').EventEmitter.defaultMaxListeners = 0;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api/kingdom/', kingdomData);

/*
==================
ERROR HANDLING DO NOT PUT ANYTHING BELOW THIS CODE
==================
*/

// Handle 404
app.use(function(req, res) {
  res.status(404).send('404: Page not Found');
});

// Handle 500
app.use(function(error, req, res, next) {
  res.status(500).send('500: Internal Server Error');
});

app.listen(8001, () => {
  console.log('API online!')
});
