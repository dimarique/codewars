function wave(str) {
  const newStr = str.split("");
  const oneSymb = newStr[1].toUpperCase();
  let result = [];
  for (let i = 0; i <= newStr.length; i++) {
    result = result + oneSymb;
  }
  return result;
}
