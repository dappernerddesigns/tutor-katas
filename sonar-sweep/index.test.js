const sonarSweep = require('./index');

describe('Sonar Sweep', () => {
	test('Function returns a number', () => {
		const actual = sonarSweep([1, 2, 3]);

		expect(typeof actual).toBe('number');
	});
	test('Function increases count when passed an array with increasing numbers', () => {
		const actual = sonarSweep([1, 2]);
		const expected = 1;

		expect(actual).toBe(expected);
	});
	test('Function returns 0 with decreasing numbers', () => {
		const actual = sonarSweep([2, 1, 0]);
		const expected = 0;

		expect(actual).toBe(expected);
	});
	test('Function performs as expected with a longer array', () => {
		const nums = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
		const actual = sonarSweep(nums);
		const expected = 7;

		expect(actual).toBe(expected);
	});
});
