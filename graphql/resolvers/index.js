const authResolver = require('./auth');
const eventsResolver = require('./events');
const bookingResolver = require('./booking');
const tripsResolver = require('./trips');

const rootResolver = {
  ...authResolver,
  ...eventsResolver,
  ...bookingResolver,
  ...tripsResolver
};

module.exports = rootResolver;