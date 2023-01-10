function sumDigPow(a, b) {
	let result = [];
	for (let i = a; i <= b; i++) {
		if (i > 0 && i < 10) {
			result.push(i);
		} else {
			const splittedI = Array.from(String(i));
			const newI = splittedI.map((number, index) => Math.pow(number, index + 1));
			const newNumber = newI.reduce((a, b) => a + b);
			if (i == newNumber) {
				result.push(i);
			}
		}
	}
	return result;
}
