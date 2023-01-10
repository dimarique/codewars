function isFlush(cards) {
	const secondSymbols = cards.map((card) => card.slice(-1));
	const setOfSecondSymbols = new Set(secondSymbols);
	return [...setOfSecondSymbols].length == 1;
}
