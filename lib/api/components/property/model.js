"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PropertySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  gender: String,
  phone: String,
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Properties", PropertySchema);
