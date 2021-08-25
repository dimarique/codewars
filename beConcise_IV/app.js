const find = (a, e) => {
    // for (let w of a) {
    //     let r = (w === e) ? (a.indexOf(w)) : 'Not found';
    let r = a.findIndex(e);

    return r;
}