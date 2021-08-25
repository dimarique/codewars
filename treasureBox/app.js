function findNum(input) {
    let result = 0;
    //cleaning input from non-letters
    const pattern = /[a-zA-Z]/g;
    const inputWithNoSpaces = input.match(pattern).join('').toLowerCase();

    //finding number in string
    for (let number = 0; number <= numbers.length; number++) {
        console.log(inputWithNoSpaces);
        if (inputWithNoSpaces.includes(numbers[number]) !== null) {
            return result = number;
        }
    }
    return result;
};
const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];