const foldArray = require('./index');

describe('Folding Array', () => {
	test('Function sums two numbers in a short array', () => {
		let actual = foldArray([1, 2], 1);

		expect(actual).toEqual([3]);
	});

	test('Function does not sum middle number on an odd array', () => {
		let actual = foldArray([1, 2, 3], 1);

		expect(actual).toEqual([4, 2]);
	});

	test('Function repeats n number of times', () => {
		let actual = foldArray([1, 2, 3], 2);
		expect(actual).toEqual([6]);
	});

	test('Function correctly folds a longer array', () => {
		let actual = foldArray([1, 2, 3, 10, 34, 100], 1);
		expect(actual).toEqual([101, 36, 13]);
	});

	test('More arrays', () => {
		let actual = foldArray([1, 2, 3, 10, 34, 100], 2);

		expect(actual).toEqual([114, 36]);
	});
	test('More arrays', () => {
		let actual = foldArray([1, 2, 3, 10, 34, 100], 3);

		expect(actual).toEqual([150]);
	});
});
