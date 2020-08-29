function openOrSenior(data) {
    let result = [];
    for (let member of data) {
        if (member[0] >= 55 && member[1] > 7) {
            result.push("Senior");
        } else {
            result.push("Open");
        }
    }
    return result;
}
