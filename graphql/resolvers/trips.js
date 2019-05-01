const Event = require('../../models/event');
const User = require('../../models/user');
const axios = require('axios');
const {
  transformEvent
} = require('./merge');

module.exports = {
  trips: () => {
    return ['destino1', 'destino2', 'destination3']
  }
};