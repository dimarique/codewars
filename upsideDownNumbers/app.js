function solve(x, y) {
    const upsides = [0,1,8];
    let splittedX = x.toString().split('');
    let result = 0;
    for (i = splittedX; i <= y; i++) {
        console.log(i);
        if (upsides.includes(i)) {
            result++;
        }
    }
    console.log(splittedX);
    return result;
};