const express = require('express');

let index_router = express.Router();
index_router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports.index_router = index_router;
