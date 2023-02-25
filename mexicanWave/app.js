function wave(str) {
    let output = [];
    //let longArray = []
    //const newStr = str.split("");
    //console.log(`newStr is ${newStr}`)
    //newStr.forEach(e => longArray.push(e));
    //longArray.map(char => console.log(char))
    for (let i = 0; i <= str.length; i++) {
        console.log(str[i])
        output.push(
            str.slice(0, i) + str[i + 1] + str.slice(i + 1)
        )
    }
    //return str.slice(0, 2) + str[2].toUpperCase() + str.slice(3);
    return output
}
