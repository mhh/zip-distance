'use strict';

const readline = require('readline');
const zipcodes = require('zipcodes');

const rl = readline.createInterface({ input: process.stdin });

rl.on('line', (line) => {
	const input = line.split(',');

	if (input.length !== 2) {
		console.error('bad line:', line);
		return;
	}

	const from = get(input, 0);
	const to = get(input, 1);

	if (from && to)
		console.log(`${from} to ${to}: ${zipcodes.distance(from, to)} miles`);
});

function get(list, index) {
	const input = list[index].trim();

	if (!/^[0-9]{5}$/.test(input))
		console.error('bad zip:', input);
	else
		return input;
}
