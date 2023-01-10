function nbYear(p0, percent, aug, p) {
	let result = p0;
	let counter = 0;
	const fuck = (percent / 100) * result;
	while (result < p) {
		console.log(`result before is ${result}`);
		result = result + fuck + aug;
		counter++;
		console.log(`result after is ${result}`);
	}
	return counter;
}
