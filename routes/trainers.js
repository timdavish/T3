
// Module dependencies
var express = require('express');
var monk = require('monk');

// Get database access
var db = monk('localhost:27017/T3');

// Set up the router
var router = express.Router();

// Create new trainer
router.post('/', function(req, res) {
    var collection = db.get('Trainers');
    collection.insert({
        name: req.body.name,
        bio: req.body.bio
    }, function(err, trainer) {
        if (err) throw err;

        res.json(trainer);
    });
});

// Get all trainers
router.get('/', function(req, res) {
    var collection = db.get('Trainers');
    collection.find({}, function(err, trainers) {
        if (err) throw err;

        res.json(trainers);
    });
});

// Get one trainer
router.get('/:id', function(req, res) {
    var collection = db.get('Trainers');
    collection.findOne({ _id: req.params.id }, function(err, trainer) {
        if (err) throw err;

        res.json(trainer);
    });
});

// Update one trainer
router.put('/:id', function(req, res) {
    var collection = db.get('Trainers');
    collection.Update({
        _id: req.params._id
    },
    {
        name: req.body.name,
        bio: req.body.bio
    }, function(err, trainer) {
        if (err) throw err;
        res.json(trainer)
    });
});

module.exports = router;
