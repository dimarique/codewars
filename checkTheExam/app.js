function checkExam(array1, array2) {
    let result = 0;
    for (let i = 0; i <= 3; i++) {
        if (array1[i] === array2[i]) {
            result = result + 4;
        } else if (array1[i] === "" || array2[i] === "") {
            result = result + 0;
        } else if (array1[i] !== array2[i]) {
            result = result - 1;
        }
    }

    return result;
}
