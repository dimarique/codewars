function digital_root(n) {
	const reducer = (total, number) => total + number;
	let result = n.toString().split("").map(Number).reduce(reducer);
	return result < 10 ? result : digital_root(result);
}
