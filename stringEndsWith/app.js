function solution(str, ending) {
    const args = [...arguments]
    if (args.length !== 2) {
        throw new Error('There must be 2 arguments')
    }
    if (ending === '') {
        return true
    }
    const strTail = str.slice(-ending.length);
    return ending == strTail
}
