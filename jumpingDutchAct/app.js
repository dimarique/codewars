function sc(floor) {
    let result = "";
    let floorDiff = floor - 2;
    switch (true) {
        case floor > 6:
            for (i = 0; i <= floorDiff; i++) {
                result = result + "Aa~ ";
            }
            result = result + "Pa!";
            break;
        case floor > 1:
            for (i = 0; i <= floorDiff; i++) {
                result = result + "Aa~ ";
            }
            result = result + "Pa! Aa!";
            break;
    }
    return result;
}
