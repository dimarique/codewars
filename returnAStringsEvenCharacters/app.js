function evenChars(string) {
    result = [];
    if (string.length < 2 || string.length > 100) {
        return 'invalid string';
    } else {
        console.log(string.length);
        for (let i in string) {
            if (i % 2 !== 0) {
                result.push(string[i]);
            }
        }
    }
    return result;
}