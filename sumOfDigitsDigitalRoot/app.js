function digital_root(n) {
    const splittedN = n.toString().split('');
    const result = splittedN.reduce((total, number) => total + number);
    return splittedN;
    // console.log(splittedN)
}
