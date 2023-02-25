function formatWords(words) {
    let newWords = words
    if (newWords.length == 1) {
        return newWords.toString()
    }
    const lastWord = ` and ${newWords.pop()}`
    return words.join(', ') + lastWord
}
