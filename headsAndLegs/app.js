function animals(heads, legs) {
    let caws = 0;
    let chickens = 0;
    if (heads % 2 == 0 && legs % 2 == 0 && heads >= 0 && legs >= 0) {
        caws = legs / 2 - heads;
        chickens = heads - caws;
    } else {
        return "No solutions";
    }
    if (chickens >= 0 && caws >= 0) {
        return [chickens, caws];
    }
    return "No solutions";
}
