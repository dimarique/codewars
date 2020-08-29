// complete the function
function solution(string) {
    let sentence = '';
    const replace = '[A-Z]';
    const re = new RegExp(replace, 'g');
    for (const symbol of string) {
        if (symbol == symbol.toUpperCase()) {
            sentence = string.replace(re, ' ');
            console.log(sentence);
        }

    }
}