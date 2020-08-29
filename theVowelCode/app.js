function encode(string) {
    let result = '';
    for (i of string) {
        switch (i) {
            case 'a':
                result = result + '1';
                break;
            case 'e':
                result = result + '2';
                break;
            case 'i':
                result = result + '3';
                break;
            case 'o':
                result = result + '4';
                break;
            case 'u':
                result = result + '5';
                break;
            default: 
            result = result + i;
        }
    }
    return result;
}

function decode(string) {
    let result = '';
    for (i of string) {
        switch (i) {
            case '1':
                result = result + 'a';
                break;
            case '2':
                result = result + 'e';
                break;
            case '3':
                result = result + 'i';
                break;
            case '4':
                result = result + 'o';
                break;
            case '5':
                result = result + 'u';
                break;
            default: 
            result = result + i;
        }
    }
    return result;
}