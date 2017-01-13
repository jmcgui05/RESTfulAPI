'use strict';

var express = require('express');
var router = express.Router();
var Thermostat = require('../models/thermostat');

var count= 0;
router.use(function(req, res, next) {
    count++;
    console.log('API hit count = %s', count);
    next();
});

// /thermostat post(create new thermostat) get(see all thermostats)
router.route('/thermostats')
    .post(function(req,res) {
        var thermostat = new Thermostat();
        thermostat.version =  req.body.version
        thermostat.temperature = req.body.temperature;
        thermostat.humidity = req.body.humidity;
        thermostat.occupancy = req.body.occupancy;
        thermostat["nearby-devices"] = req.body["nearby-devices"];

        //save the thermostat and checkfor errors
        thermostat.save(function(err) {
            if (err) res.send(err);

            res.json({message: "Thermostat created!"});
        });

    })
    
    .get(function(req, res) {
        Thermostat.find(function(err, thermostats) {
            if (err) res.send(err);

            res.json(thermostats);
        })
    });

// /thermostats/:uuid route to get specific thermostat and put to update
//TODO make uuid unique in db by using _id
router.route('/thermostats/:uuid')
    .get(function(req, res) {
        var query = {uuid: req.params.uuid};
        Thermostat.findOne(query, function(err, thermostat) {
            if (err) res.send(err);

            res.json(thermostat);
        });
    })

    .put(function(req, res) {
        
        var query = {uuid: req.params.uuid};
        Thermostat.findOne(query, function(err, thermostat) {
            if (err) res.send(err);

            thermostat.version =  req.body.version
            thermostat.temperature = req.body.temperature;
            thermostat.humidity = req.body.humidity;
            thermostat.occupancy = req.body.occupancy;
            thermostat["nearby-devices"] = req.body["nearby-devices"];

            thermostat.save(function(err) {
                if (err) res.send(err);
                res.json({message: "Thermostat Updated"});
            });
        });
    })

    .delete(function(req,res) {
        var query = {uuid: req.params.uuid};
        Thermostat.remove(query, function(err, thermostat) {
            if (err) res.send(err);

            res.json({message: "Successfully deleted"});
        });
    });

module.exports = router;