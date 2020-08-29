function friend(friends){
    let result = [];
    for (const name of friends) {
        if (name.length === 4) {
            result.push(name);
        }
    }
    return result;
  }