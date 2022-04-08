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
