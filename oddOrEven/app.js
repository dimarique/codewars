function oddOrEven(array) {
    if (array != []) {
        let sum = array.reduce(function (sum, current) {
            return sum + current;
        }, 0);

        if (sum % 2 === 0) {
            return 'even'
        } else {
            return 'odd'
        }
    } else {
        return 'even';
    }
}