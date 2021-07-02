function squareDigits(num) {
    let inputStr = num.toString();
    let result = "";
    for (i of inputStr) {
        result = result + (i * i).toString();
    }
    return Number(result);
}