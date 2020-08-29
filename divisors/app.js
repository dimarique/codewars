function divisors(n) {
    let arr = [];
    for (i = 2; i <= n; i++) {
        if (n % i === 0 && i != n) {
            arr.push(i);
        }
    }
    if (arr.length === 0) {
        return n + " is prime";
    } else {
        return arr;
    }
}
