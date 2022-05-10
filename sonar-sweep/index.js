const fs = require('fs');
const numsArray = fs.readFileSync('./input.txt').toString().split('\n');

const convertedArray = [];
const convertFunction = (numsArray) => {
	for (let i = 0; i < numsArray.length; i++) {
		convertedArray.push(Number(numsArray[i]));
	}
	return convertedArray;
};
console.log(convertFunction(numsArray).length);
console.log(convertedArray.length);

const sonarSweep = (array) => {
	let count = 0;

	for (let i = 0; i < array.length; i++) {
		if (array[i] < array[i + 1]) {
			count++;
		}
	}
	return count;
};
console.log(sonarSweep(convertedArray));
module.exports = sonarSweep;
