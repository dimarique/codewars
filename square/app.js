var isSquare = function(n){
    // p = Math.sqrt(n);
    if (Number.isInteger(Math.sqrt(n))) {
        return true;
    }  
    return false;
  }