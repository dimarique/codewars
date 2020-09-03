function isDivideBy(number, b, c) {
    if (number % b === 0 && number % c === 0) {
        return true;
    }
    return false;
}