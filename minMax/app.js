function minMax(arr){
    let min, max, res;
    min = Math.min(...arr);
    max = Math.max(...arr);
    res = [min, max];
    return res;
  }