function findShort(s) {
	let arr, result;
	let newArr = [];
	arr = s.split(" ");
	for (const word of arr) {
		newArr.push(word.length);
	}
	result = Math.min(...newArr);
	return result;
}