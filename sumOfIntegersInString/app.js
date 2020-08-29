function sumOfIntegersInString(s) {
    let result = 0;
    for (integer of s) {
        if (integer == Number(integer)) {
            result = result + Number(integer);
        }
    }
    return result;
}