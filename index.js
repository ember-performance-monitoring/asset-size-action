// TODO find better spot for install
const { execSync } = require('child_process');

execSync('yarn');
// eslint-disable-next-line
require = require('esm')(module);
module.exports = require('./src/action.js');

if (process.env.NODE_ENV !== 'TEST') {
  // execute the entry point function
  module.exports.default();
}
