const json = require('./lib/json');
const number = require('./lib/number');

module.exports = {
  isJSON: json.isJson,

  numberFormat: number.numberFormat
}