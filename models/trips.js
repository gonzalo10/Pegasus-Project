const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tripSchema = new Schema({
  origin: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('Trips', tripSchema);