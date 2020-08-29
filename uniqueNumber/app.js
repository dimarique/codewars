function findUniq(arr) {
    let common;
    let unique;
    if (arr[0] === arr[1] || arr[0] === arr[2]) {
        common = arr[0];
    } else {
        common = arr[1];
    }
    for (let n of arr) {
        if (n != common) {
            unique = n;
        }
    }
    return unique;
}