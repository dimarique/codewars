function decode(str) {
    const fromMorze = {
        ".-": "a",
        "-...": "b",
        "-.-.": "c",
        "-..": "d",
        ".": "e",
        "..-.": "f",
        "--.": "g",
        "....": "h",
        "..": "i",
        ".---": "j",
        "-.-": "k",
        ".-..": "l",
        "--": "m",
        "-.": "n",
        "---": "o",
        ".--.": "p",
        "--.-": "q",
        ".-.": "r",
        "...": "s",
        "-": "t",
        "..-": "u",
        "...-": "v",
        ".--": "w",
        "-..-": "x",
        "-.--": "y",
        "--..": "z",
        ".----": "1",
        "..---": "2",
        "...--": "3",
        "....-": "4",
        ".....": "5",
        "-....": "6",
        "--...": "7",
        "---..": "8",
        "----.": "9",
        "-----": "0",
        " ": " ",
        "  ": " "
    };
    let translatedChar = "";
    let result = "";
    let wordMorze = str.split("  ");
  //  let charMorze = wordMorze.split(" ");
    for (let e of wordMorze) {
        console.log(typeof e);
    }
   // console.log(charMorze.toString());
   // console.log(typeof(charMorze));
    console.log(typeof wordMorze);
    console.log(typeof str);
    return wordMorze;
}
