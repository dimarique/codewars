function divisibleByThree(str) {
    let numArr = Array.from(str.split(''),Number);
    let num = numArr.reduce(function (a, b) {
       return a + b;
    }, 0);
    if (num % 3 === 0) {
        return true;
    }
    return false;
}