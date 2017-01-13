'use strict';
var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config.js');
var alphaRoutes= require('./routes/Alpha.js');

//connect to db
mongoose.Promise = global.Promise; //temp fix for mongoose promise deprecation warning
mongoose.connect(config.url);

//confogure app to use body-parser to gte POST data
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

//default route
app.get('/api', function(req, res) {
    res.json({message: "Default route is functional"});
});

app.use('/api', alphaRoutes);

//start the server
app.listen(port);
console.log("Server listening on %s", port);