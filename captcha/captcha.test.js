const input = require('./input');
const captchaSum = require('./captcha');

describe('Captcha function', () => {
	test('Function returns a number', () => {
		const actual = captchaSum(1122);

		expect(typeof actual).toBe('number');
	});
	test('Function returns zero for no matching integers', () => {
		const actual = captchaSum(123);
		const expected = 0;

		expect(actual).toBe(expected);
	});
	test('Function correctly sums small number', () => {
		const actual = captchaSum(1123);
		const expected = 1;

		expect(actual).toBe(expected);
	});
	test('Function correctly sums more complex arrangement', () => {
		const actual = captchaSum(1122);
		const expected = 3;

		expect(actual).toBe(expected);
		expect(captchaSum(1111)).toBe(4);
		expect(captchaSum(1234)).toBe(0);
		expect(captchaSum(91212129)).toBe(9);
	});
	test('Breaking down larger input to test function', () => {
		const biggerTest = '31813174349235972159811869755166343';
		const actual = captchaSum(biggerTest);
		const expected = 15;

		expect(actual).toBe(expected);
	});
});
