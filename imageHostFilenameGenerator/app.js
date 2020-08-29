function generateName() {
    let result = 'ABCDEF';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let resultLength = characters.length;
if (photoManager.nameExists(result) === true) {
  result = '';
    for (i = 0; i <= 5; i++) {
        result += characters.charAt(Math.floor(Math.random() * resultLength));
    }
} else {
    return result;
}
return result;
}