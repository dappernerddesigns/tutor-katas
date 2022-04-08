function foldArray(array, n) {
	//n = number of folds return array if n is less than 1
	if (n < 1) return array;

	//copy array to new variable
	let arr = [...array];
	let length = arr.length;

	//middle of array
	let midpoint = Math.floor(length / 2);

	//loop to the middle of the array summing outside to in
	for (let i = 0; i < midpoint; i++) {
		arr[i] += arr[length - (i + 1)];
	}
	//assign fold variable the middle index dependant on odd or even length
	const fold = length % 2 === 0 ? midpoint : midpoint + 1;

	let folded = arr.slice(0, fold);

	return foldArray(folded, n - 1);
}
module.exports = foldArray;
