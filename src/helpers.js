import { getInput } from '@actions/core';
/*
 * Parse GitHub action config values into JavaScript values
 */
export function convertConfig(configProperties) {
	const config = {};

	configProperties.forEach(prop => {
  	let input = getInput(prop);
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
