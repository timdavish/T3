
// Module dependencies
var express = require('express');
var monk = require('monk');

// Get database access
var db = monk('localhost:27017/T3');

// Set up the router
var router = express.Router();

// Get all courses
router.get('/', function(req, res) {
    var collection = db.get('Courses');
    collection.find({}, function(err, courses) {
        if (err) throw err;

        res.json(courses);
    });
});

module.exports = router;
