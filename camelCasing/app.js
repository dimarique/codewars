// complete the function
function solution(string) {
  let sentence = "";
  const replace = "[A-Z]";
  const re = new RegExp(replace, "g");
  for (let symbol of string) {
    if (symbol === symbol.toUpperCase()) {
      sentence = string.replace(re, " " + symbol);
      console.log(sentence);
    }
  }
  return sentence;
}
