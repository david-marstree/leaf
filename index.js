const json = require('./lib/json');
const number = require('./lib/number');

module.exports = {
  ...json,
  ...number
}