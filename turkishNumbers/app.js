const getTurkishNumber = num => {
	let result = 0;
	const splittedNum = num.toString().split("");
	const digits = {
		0: "sıfır",
		1: "bir",
		2: "iki",
		3: "üç",
		4: "dört",
		5: "beş",
		6: "altı",
		7: "yedi",
		8: "sekiz",
		9: "dokuz"
	};
	const tens = {
		1: "on",
		2: "yirmi",
		3: "otuz",
		4: "kırk",
		5: "elli",
		6: "altmış",
		7: "yetmiş",
		8: "seksen",
		9: "doksan"
	};
	if (splittedNum.length < 1 || splittedNum.length > 2) {
		return "error input";
	} else if (splittedNum.length === 1) {
		result = digits[splittedNum];
	} else if (splittedNum[1] == 0) {
		result = tens[splittedNum[0]];
	} else {
		result = `${tens[splittedNum[0]]} ${digits[splittedNum[1]]}`;
	}
	return result;
};
