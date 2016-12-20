
// Module dependencies
var express = require('express');

// Set up the router
var router = express.Router();

// Get home page
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
