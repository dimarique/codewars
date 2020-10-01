function longestRepetition(s) {
    return s.split("").reduce((total, letter) => {
        total[letter] ? total[letter]++ : (total[letter] = 1);
        return total;
    }, {});
}
