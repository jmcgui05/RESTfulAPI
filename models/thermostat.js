var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var thermostatSchema = new Schema({
  "uuid": String,
  "version": Number,
  "temperature": Number,
  "humidity": Number,
  "occupancy": Boolean,
  "nearby-devices":[
  {
    "uuid": String,
    "rssi": String
  },
]
});

module.exports = mongoose.model('Thermostat', thermostatSchema);