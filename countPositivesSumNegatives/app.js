function countPositivesSumNegatives(input = 0) {
	let result = [];
	if (input == null || input.length == 0) {
		return result;
	}
	const positives = input.filter(number => Math.sign(number) == 1);
	const negatives = input.filter(number => Math.sign(number) == -1);
	const lengthOfPositives = positives.length;
	result.push(lengthOfPositives);
	const sumOfNegatives = negatives.reduce((a, b) => a + b);
	result.push(sumOfNegatives);
	return result;
}
