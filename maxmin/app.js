function highAndLow(numbers) {
    let min, max, result;
    let arr = numbers.split(" ").map(function(i) {
        return +i;
    });
    min = Math.min(...arr);
    max = Math.max(...arr);
    minStr = min.toString();
    maxStr = max.toString();
    result = maxStr + " " + minStr;
    return result;
}
