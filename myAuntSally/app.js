function myAuntSally(str) {
    let activity = str.split(' ');
    let result = [];
    for (word of activity) {
        for (let c = 0; c <= word.length; c++) {
            if (word[c] === word[c + 1]) {

            }


        }

    }
    result.push(word);
    return result;
}