function solution(str) {
    if (str.length > 0) {
        let strSplitted = str.match(/.{1,2}/g);
        for (i of strSplitted) {
            if (i.length < 2) {
                strSplitted.pop(i);
                strSplitted.push(i = i + '_');
            }
        }
        return strSplitted;
    }
    return [];
}