function iqTest(numbers) {
    let numbersArr = Array.from(numbers.split(' '), Number);
    let isOdd = 0;
    let isEven = 0;
    let common;
    for (int of numbersArr) {
        if (int % 2 === 0) {
            isEven++;
        } else {
            isOdd++;
        }
    }
    if (isOdd > isEven) {
        common = 'Odd';
    } else {
        common = 'Even';
    }
    for (n of numbersArr) {
        if ((common === 'Even') && (n % 2 != 0)) {
            return (numbersArr.indexOf(n) + 1);
        } else if (common === 'Odd' && n % 2 == 0) {
            return (numbersArr.indexOf(n) + 1);
        }
    }
}