function rgb(r, g, b) {
    const args = [...arguments]
    let filteredArgs = []
    let convertedArgs = []
    let formattedArgs = []
    let result = ''

    //check if value is not a number
    if (args.some(isNaN)) {
        return 'Some of arguments not a number'
    }

    //rounding values to closest valid value
    for (let i = 0; i < args.length; i++) {
        if (args.at(i) > 255) {
            filteredArgs.push(255)
        } else if (args.at(i) < 0) {
            filteredArgs.push(0)
        } else filteredArgs.push(args.at(i))
    }

    //convert decimal to hex
    convertedArgs = filteredArgs.map(val => val.toString(16))

    //add digit to one digit value
    for (let i = 0; i <= convertedArgs.length - 1; i++) {
        if (convertedArgs[i].length < 2) {
            formattedArgs.push('0' + convertedArgs[i])
        } else formattedArgs.push(convertedArgs[i])
    }

    result = formattedArgs.join('').toUpperCase()
    return result
}

