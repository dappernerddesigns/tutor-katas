const smallestPositiveNumber = (numberArray) => {
	const min = numberArray[0];
	const max = numberArray[numberArray.length - 1];

	const fullArray = [];
	for (let i = min; i <= max; i++) {
		fullArray.push(i);
	}
	let nextNum = max * (max - 1);
	const smallestNum = (currentNumber) => {
		return nextNum % currentNumber === 0;
	};

	let result = false;

	while (result === false) {
		nextNum++;
		result = fullArray.every(smallestNum);
	}
	console.log(nextNum);
	return nextNum;
};

module.exports = smallestPositiveNumber;
