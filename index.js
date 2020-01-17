// eslint-disable-next-line
require = require('esm')(module);
module.exports = require('./src/action.js');

if (process.env.NODE_ENV !== 'TEST') {
  // execute the entry point function
  module.exports.default();
}
