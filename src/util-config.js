const core = require('@actions/core');
/*
 * Parse GitHub action config values into JavaScript values
 */

module.exports = configProperties => {
	const config = {};

	configProperties.forEach(prop => {
  	let input = core.getInput(prop);
  	if (input === '') {
    	input = undefined;
  	} else if (input === 'true') {
    	input = true;
  	} else if (input === 'false') {
    	input = false;
  	}
  	config[prop] = input;
	});
	return config;
};
