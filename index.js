// TODO find better spot for install
const { exec } = require('@actions/exec');

exec('yarn').then(() => {
  // eslint-disable-next-line
  require = require('esm')(module);
  module.exports = require('./src/action.js');

  if (process.env.NODE_ENV !== 'TEST') {
    // execute the entry point function
    module.exports.default();
  }
});
