function sum(matrix) {
    let forward = [];
    let backward = [];
    let matrixLength = matrix.length - 1
    // let lastItem = matrix[0].slice(-1)[0];
    for (i = 0; i <= matrixLength; i++) {
        forward.push(matrix[i][i]);
        backward.push(matrix)
    }
    for (i = matrixLength; i >= 0; i--) {
        backward.push(matrix[i][i]);
    }
    console.log(matrixLength, forward, backward);
}