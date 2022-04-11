const input = require('./input');

function captchaSum(num) {
	const stringify = num.toString();
	//modify number input so that first number and last number can be compared
	const modString = stringify + stringify[0];

	let sum = 0;
	for (let i = 0; i < modString.length; i++) {
		if (modString[i] === modString[i + 1]) {
			sum += Number(modString[i]);
		}
	}
	return sum;
}
console.log(captchaSum(input));
module.exports = captchaSum;
