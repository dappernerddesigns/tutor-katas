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

console.log('\n\n--**--**--**--');
console.log('---Refactor---');
console.log('--**--**--**--\n\n');

function rePrintBalance(account) {
	function penniesToPounds(num) {
		if (num < 0) {
			return Math.abs(num / 100).toFixed(2) + '-';
		}
		return (num / 100).toFixed(2);
	}

	console.log(
		`Debits:    ${penniesToPounds(
			account.debits
		)}\nCredits:   ${penniesToPounds(
			account.credits
		)}\nFees:      ${penniesToPounds(
			account.fees
		)}\n      -----\nBalance:   ${penniesToPounds(account.balance)} `
	);
}
rePrintBalance({ debits: 100, credits: 100, fees: -300, balance: 20 });
