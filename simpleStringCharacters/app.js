function solve(s) {
    let uppercase = s.match(/[A-Z]/g);
    let lowercase = s.match(/[a-z]/g);
    let numbers = s.match(/[\d]/g);
    let special = s.match(/[^A-Za-z0-9]/g);
    const upperRes = uppercase == null ? 0 : uppercase.length
    const lowRes = lowercase == null ? 0 : lowercase.length
    const numRes = numbers == null ? 0 : numbers.length
    const specRes = special == null ? 0 : special.length

    return [upperRes, lowRes, numRes, specRes];
}
