function reverseWords(str) {
    let reversed = [];
    let splited = str.split(" ");
    for (let i = (splited.length) - 1; i >= 0; i--) {
        reversed.push(splited[i]);
    }
    return reversed.join(" ");
}