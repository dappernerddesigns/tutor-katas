const smallestPositiveNumber = require('./index');

describe('Smallest positive, divisible number', () => {
	const numberRange = [1, 20];

	test('Function returns a number', () => {
		const actual = smallestPositiveNumber(numberRange);

		expect(typeof actual).toBe('number');
	});
	test('Function returns 12 when passed 1 and 4', () => {
		const actual = smallestPositiveNumber([1, 4]);
		const expected = 24;

		expect(actual).toBe(expected);
	});
	test('Function returns 2520 when passed 1,10', () => {
		const actual = smallestPositiveNumber([1, 10]);
		const expected = 2520;

		expect(actual).toBe(expected);
	});
});
