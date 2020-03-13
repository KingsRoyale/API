const express = require("express");
const app = express();
const kingdomData = require("./apiRoutes/kingdomData.js");

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
