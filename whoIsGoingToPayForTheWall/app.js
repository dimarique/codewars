function whoIsPaying(name) {
    let result = [name];
    let trunclateName = name;
    if (name.length <= 2) {
        return result;
    } else {
        result.push(name[0] + name[1]);
    }
    return result;
}
