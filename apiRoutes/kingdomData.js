const express = require('express');
const api = express.Router();

api.get('/:name?', function (req, res) {
  res.send(req.params.name);
});

api.post('/createKingdom', function (req, res) {
  // TODO: add mysql connection and data handling for creating a new kingdom.
});

module.exports = api
