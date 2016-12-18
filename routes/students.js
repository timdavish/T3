
// Module dependencies
var express = require('express');
var monk = require('monk');

// Get database access
var db = monk('localhost:27017/T3');

// Set up the router
var router = express.Router();

// GET all trainers
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
