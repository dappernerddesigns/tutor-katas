# DRY CODE

Below are a couple of examples of code that might be cleaner if they were refactored
whilst thinking of the principles of DRY code
What you should do is think critically about the code as written formulate some
ideas as to how you might improve it and have a go at refactoring them.
There are no tests here to help you make those changes over time so you will have
to consider what the intent of the code could have been

### Challenge 1

```js
function printBalance(account) {
	console.log(`Debits:    ${(account.debits / 100).toFixed(2)}`);
	console.log(`Credits:   ${(account.credits / 100).toFixed(2)}`);
	if (account.fees < 0) {
		console.log(`Fees:      ${Math.abs(account.fees / 100).toFixed(2)}-`);
	} else {
		console.log(`Fees:      ${(account.fees / 100).toFixed(2)}`);
	}
	console.log(`      -----`);
	if (account.balance < 0) {
		console.log(
			`Balance:   ${Math.abs(account.balance / 100).toFixed(2)}-`
		);
	} else {
		console.log(`Balance:   ${(account.balance / 100).toFixed(2)}`);
	}
}
printBalance({ debits: 100, credits: 100, fees: -300, balance: 20 });
```

### Challenge 2

```js
function mostCommonBinAtIndex(binaries, i) {
	let count = 0;
	binaries.forEach((bin) => (count += +bin[i]));
	return count >= binaries.length / 2 ? '1' : '0';
}
function findGamma(binaries) {
	let bin = '';
	for (let i = 0; i < binaries.length; i++) {
		bin += mostCommonBinAtIndex(binaries, i);
	}
	return bin;
}
function findEpsilon(binaries) {
	let bin = '';
	for (let i = 0; i < binaries.length; i++) {
		bin += mostCommonBinAtIndex(binaries, i);
	}
	return bin;
}
```

### Challenge 3

This challenge is slightly different I want you to consider how to write an implementation
of a data structure
Write a Line class this is a straight line in a single horizontal direction, this class
will be made up of two points, should be able to set either of the points and have a
length method that returns its length
