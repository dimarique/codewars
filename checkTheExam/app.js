function total(arr) {
    for ( n = 0; n <= arr.length; n++) {
        if (arr.indexOf(n) % n === 1) {
            console.log(arr.length);
        }
    }
};