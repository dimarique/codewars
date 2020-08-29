function solve(s) {
    let big = 0;
    let small = 0;
    for (c of s) {
        c === c.toUpperCase() ? big++ : small++;
    }
    if (big > small) {
        return s.toUpperCase();
    } else {
        return s.toLowerCase();
    }
}