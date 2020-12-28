function getCount(str) {
    let vowelsCount = 0;
    for (symbol of str) {
        switch (symbol) {
            case "a":
            case "e":
            case "i":
            case "u":
            case "o":
                vowelsCount = vowelsCount + 1;
                break;
        }
    }
    return vowelsCount;
}
