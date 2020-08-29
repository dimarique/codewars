function fakeBin(x){
    let res = ''
    for (n of x) {
        if (n < 5){
           res = res + '0';
        } else {
            res = res + '1';
        }
    }
    return res;
}