const getTurkishNumber = (num) => {
    // let input = 
    const digits = {
        0: 'sıfır',
        1: 'bir',
        2: 'iki',
        3: 'üç',
        4: 'dört',
        5: 'beş',
        6: 'altı',
        7: 'yedi',
        8: 'sekiz',
        9: 'dokuz'
    };
    const tens = {
        1: 'on',
        2: 'yirmi',
        3: 'otuz',
        4: 'kırk',
        5: 'elli',
        6: 'altmış',
        7: 'yetmiş',
        8: 'seksen',
        9: 'doksan'
    }
    console.log(typeof(num));
    if (num.length < 1 || num.length > 2) {
        console.log('error input');
    } else if (num.length === 1) {
        return digits[num];
    } else if (num.length === 2) {
        return tens.num[0] + digits[num];
    }
}