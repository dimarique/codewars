function solution(number) {
    let result = [];
    for (i = 1; i < number; i++) {
        if (i % 3 === 0) {
            result.push(i);
        } else if (i % 5 === 0) {
            result.push(i);
        }
    }
    return result.reduce((a, b) => a + b, 0);
}