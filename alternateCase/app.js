function alternateCase(s) {
    let fin = '';
    for (char of s) {
        (char === char.toUpperCase()) ? fin += char.toLowerCase(): fin += char.toUpperCase();
    }
    return fin;
}