function index(array, n) {
    if (n >= 0 && n < array.length) {
        return Math.pow(array[n], n);
    }
    return -1;
}