function dirReduc(arr) {
    let str = arr.join('')
    const pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/g
    while (pattern.test(str)) {
        str = str.replace(pattern, '')
    }

    return str.match(/(NORTH|SOUTH|EAST|WEST)/g) || []
}
